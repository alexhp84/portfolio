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
  // Recent turns let the backend resolve short follow-up questions.
  const conversation = [];
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

  // Render a small, safe subset of Markdown. Escape all text first, then add
  // anchors only for HTTP(S) links. Do not allow model output to inject HTML.
  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;",
      '"': "&quot;", "'": "&#39;"
    })[char]);
  }

  function safeUrl(value) {
    try {
      const url = new URL(value, window.location.href);
      return (url.protocol === "https:" || url.protocol === "http:") ? url.href : null;
    } catch {
      return null;
    }
  }

  function renderMessage(text) {
    let html = escapeHtml(text);

    // Markdown links: [label](https://example.com)
    html = html.replace(/\[([^\]\n]+)\]\((https?:\/\/[^\s)]+)\)/g,
      (_match, label, rawUrl) => {
        const url = safeUrl(rawUrl);
        return url
          ? `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`
          : `${label} (${escapeHtml(rawUrl)})`;
      });

    // Auto-link plain HTTP(S) URLs, excluding trailing punctuation.
    html = html.replace(/(^|[\s>])(https?:\/\/[^\s<]+)/g, (_match, prefix, rawUrl) => {
      const trailing = rawUrl.match(/[.,!?;:]+$/)?.[0] || "";
      const candidate = trailing ? rawUrl.slice(0, -trailing.length) : rawUrl;
      const url = safeUrl(candidate);
      return url
        ? `${prefix}<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(candidate)}</a>${trailing}`
        : `${prefix}${rawUrl}`;
    });

    return html.split(/\n{2,}/).map((paragraph) =>
      `<p>${paragraph.replace(/\n/g, "<br>")}</p>`
    ).join("");
  }

  function addMessage(text, kind, sources = []) {
    const item = document.createElement("div");
    item.className = `pc-message ${kind}`;
    item.innerHTML = renderMessage(text);
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
    conversation.push({ role: "user", content: question });
    while (conversation.length > 12) conversation.shift();
    input.value = "";
    sendButton.disabled = true;
    input.disabled = true;
    const pending = addMessage("Thinking…", "pc-bot");
    try {
      const response = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, history: conversation.slice(0, -1) }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok)
        throw new Error(data.error || `Request failed (${response.status})`);
      const answer = data.answer || "I couldn't find an answer.";
      pending.innerHTML = renderMessage(answer);
      conversation.push({ role: "assistant", content: answer });
      while (conversation.length > 12) conversation.shift();
      if (Array.isArray(data.sources) && data.sources.length) {
        const sourceLine = document.createElement("div");
        sourceLine.className = "pc-sources";
        sourceLine.textContent = "Sources: " + data.sources.join(", ");
        pending.after(sourceLine);
      }
    } catch (error) {
      // Discard the unanswered user turn after a failed request.
      if (conversation.length && conversation[conversation.length - 1].role === "user") conversation.pop();
      pending.textContent = `Sorry, I couldn't reach the assistant. ${error.message}`;
    } finally {
      sendButton.disabled = false;
      input.disabled = false;
      input.focus();
      messages.scrollTop = messages.scrollHeight;
    }
  });
})();
