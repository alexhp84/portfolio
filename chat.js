/*
 * Portfolio chatbot widget.
 * Copy this file to your site's assets/chat/chat.js and set CHAT_API_URL below.
 */
(() => {
  const CHAT_API_URL = "https://portfolio-chatbot-ui4z.onrender.com/api/chat";
  const widget = document.createElement("section");
  widget.id = "portfolio-chatbot";
  widget.innerHTML = `
    <button class="pc-launcher" type="button" aria-expanded="false" aria-controls="pc-panel">
      <span aria-hidden="true">✦</span> Ask about my experience
    </button>
    <div class="pc-panel" id="pc-panel" hidden>
      <div class="pc-header">
        <div><strong>Portfolio Assistant</strong><small>Ask about skills, experience and projects</small></div>
        <button class="pc-close" type="button" aria-label="Close chat">×</button>
      </div>
      <div class="pc-messages" role="log" aria-live="polite">
        <div class="pc-message pc-bot">Hi! Ask me about the experience and projects documented in this portfolio.</div>
      </div>
      <form class="pc-form">
        <label class="pc-sr-only" for="pc-question">Your question</label>
        <textarea id="pc-question" rows="2" maxlength="1000" placeholder="Ask a question…" required></textarea>
        <button type="submit">Send</button>
      </form>
      <p class="pc-disclaimer">AI-generated answers may be inaccurate. Verify important details against the linked sources.</p>
    </div>`;
  document.body.appendChild(widget);

  const launcher = widget.querySelector(".pc-launcher");
  const panel = widget.querySelector(".pc-panel");
  const close = widget.querySelector(".pc-close");
  const form = widget.querySelector(".pc-form");
  const input = widget.querySelector("#pc-question");
  const messages = widget.querySelector(".pc-messages");
  const sendButton = form.querySelector("button");
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      form.requestSubmit();
    }
  });
  function toggle(open) {
    panel.hidden = !open;
    launcher.setAttribute("aria-expanded", String(open));
    if (open) input.focus();
  }
  launcher.addEventListener("click", () => toggle(panel.hidden));
  close.addEventListener("click", () => toggle(false));

  function addMessage(text, kind, sources = []) {
    const item = document.createElement("div");
    item.className = `pc-message ${kind}`;
    // textContent avoids interpreting model output as HTML.
    item.textContent = text;
    messages.appendChild(item);
    if (sources.length) {
      const sourceLine = document.createElement("div");
      sourceLine.className = "pc-sources";
      sourceLine.textContent = "Sources: " + sources.join(", ");
      messages.appendChild(sourceLine);
    }
    messages.scrollTop = messages.scrollHeight;
    return item;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const question = input.value.trim();
    if (!question || sendButton.disabled) return;
    addMessage(question, "pc-user");
    input.value = "";
    sendButton.disabled = true;
    input.disabled = true;
    const pending = addMessage("Thinking…", "pc-bot");
    try {
      const response = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok)
        throw new Error(data.error || `Request failed (${response.status})`);
      pending.textContent = data.answer || "I couldn't find an answer.";
      if (Array.isArray(data.sources) && data.sources.length) {
        const sourceLine = document.createElement("div");
        sourceLine.className = "pc-sources";
        sourceLine.textContent = "Sources: " + data.sources.join(", ");
        pending.after(sourceLine);
      }
    } catch (error) {
      pending.textContent = `Sorry, I couldn't reach the assistant. ${error.message}`;
    } finally {
      sendButton.disabled = false;
      input.disabled = false;
      input.focus();
      messages.scrollTop = messages.scrollHeight;
    }
  });
})();
