/* Animated portfolio assistant. Keeps the existing Render API and conversation history. */
(() => {
  const CHAT_API_URL = "https://portfolio-chatbot-ui4z.onrender.com/api/chat";
  const widget = document.createElement("section");
  widget.id = "portfolio-chatbot";
  const robot = (mood = "friendly") => `
    <span class="pc-avatar pc-mood-${mood}" aria-hidden="true">
      <svg class="pc-robot" viewBox="0 0 100 112" role="img">
        <ellipse cx="50" cy="104" rx="29" ry="5" class="pc-shadow"/>
        <path class="pc-antenna" d="M50 15 V8"/><circle class="pc-antenna-tip" cx="50" cy="6" r="4"/>
        <rect class="pc-ear" x="10" y="38" width="10" height="24" rx="4"/><rect class="pc-ear" x="80" y="38" width="10" height="24" rx="4"/>
        <rect class="pc-head" x="17" y="18" width="66" height="56" rx="20"/>
        <rect class="pc-face" x="24" y="26" width="52" height="38" rx="13"/>
        <ellipse class="pc-eye pc-eye-left" cx="39" cy="42" rx="4.5" ry="6"/><ellipse class="pc-eye pc-eye-right" cx="61" cy="42" rx="4.5" ry="6"/>
        <path class="pc-mouth" d="M41 53 Q50 60 59 53"/>
        <path class="pc-neck" d="M43 74 V80 H57 V74"/>
        <rect class="pc-body" x="28" y="80" width="44" height="22" rx="10"/>
        <rect class="pc-chest" x="43" y="85" width="14" height="8" rx="3"/>
        <path class="pc-arm pc-arm-left" d="M29 85 L19 94"/><path class="pc-arm pc-arm-right" d="M71 85 L81 92"/>
      </svg>
    </span>`;
  widget.innerHTML = `
    <button class="pc-launcher" type="button" aria-expanded="false" aria-controls="pc-panel">${robot("wave")}<span class="pc-launcher-label">Chat with Alex's assistant</span></button>
    <div class="pc-panel" id="pc-panel" hidden>
      <div class="pc-header"><div><strong>Patch, Alex's Assistant</strong><small>Ask about skills, experience and projects</small></div><button class="pc-close" type="button" aria-label="Close chat">×</button></div>
      <div class="pc-messages" role="log" aria-live="polite">
        <div class="pc-welcome">${robot("wave")}<div class="pc-message pc-bot">Hi, I'm Patch, Alex's personal assistant. Welcome to his portfolio site, ask me anything about him!</div></div>
        <div class="pc-suggestions" aria-label="Suggested questions">
          <button type="button" data-question="Tell me about Alex's AI projects">AI projects</button>
          <button type="button" data-question="What is Alex's technical background?">Technical background</button>
          <button type="button" data-question="What roles is Alex looking for?">Career goals</button>
        </div>
      </div>
      <form class="pc-form"><label class="pc-sr-only" for="pc-question">Your question</label><textarea id="pc-question" rows="2" maxlength="1000" placeholder="Ask a question…" required></textarea><button type="submit">Send</button></form>
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
  const conversation = [];
  const greeting = document.createElement("div");
  greeting.className = "pc-greeting"; greeting.hidden = true;
  greeting.innerHTML = `Hi, I'm Patch, Alex's personal assistant. Welcome to his portfolio site, ask me anything about him!<button class="pc-greeting-x" type="button" aria-label="Dismiss">×</button>`;
  widget.appendChild(greeting);
  const hideGreeting = () => { greeting.hidden = true; try { sessionStorage.setItem("pcGreeted", "1"); } catch {} };
  try { if (!sessionStorage.getItem("pcGreeted")) setTimeout(() => { if (panel.hidden) greeting.hidden = false; }, 1500); } catch {}
  greeting.addEventListener("click", () => toggle(true));
  greeting.querySelector(".pc-greeting-x").addEventListener("click", (e) => { e.stopPropagation(); hideGreeting(); });
  let closing = false;
  let closeTimer;

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); form.requestSubmit(); }
  });
  function toggle(open) {
    clearTimeout(closeTimer); closing = false;
    panel.hidden = !open;
    launcher.hidden = open;
    if (open) hideGreeting();
    launcher.setAttribute("aria-expanded", String(open));
    if (open) input.focus();
  }
  launcher.addEventListener("click", () => toggle(panel.hidden));
  close.addEventListener("click", () => {
    if (closing || panel.hidden) return;
    closing = true;
    const goodbye = addBotMessage("Thanks for visiting! Feel free to come back if you'd like to know more about Alex's career and projects.", "goodbye");
    goodbye.classList.add("pc-goodbye-message");
    messages.scrollTop = messages.scrollHeight;
    closeTimer = setTimeout(() => { panel.classList.add("pc-closing"); setTimeout(() => { panel.classList.remove("pc-closing"); toggle(false); }, 350); }, 1700);
  });

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  }
  function safeUrl(value) {
    try { const url = new URL(value, window.location.href); return (url.protocol === "https:" || url.protocol === "http:") ? url.href : null; } catch { return null; }
  }
  function normalizeAnswer(text) { return String(text ?? ""); }
  function renderMessage(text) {
    text = normalizeAnswer(text);
    let html = escapeHtml(text);
    html = html.replace(/\[([^\]\n]+)\]\((https?:\/\/[^\s)]+)\)/g, (_m, label, rawUrl) => {
      const url = safeUrl(rawUrl); return url ? `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${label}</a>` : `${label} (${escapeHtml(rawUrl)})`;
    });
    html = html.replace(/(^|[\s>])(https?:\/\/[^\s<]+)/g, (_m, prefix, rawUrl) => {
      const trailing = rawUrl.match(/[.,!?;:]+$/)?.[0] || ""; const candidate = trailing ? rawUrl.slice(0, -trailing.length) : rawUrl; const url = safeUrl(candidate);
      return url ? `${prefix}<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(candidate)}</a>${trailing}` : `${prefix}${rawUrl}`;
    });
    return html.split(/\n{2,}/).map(p => `<p>${p.replace(/\n/g, "<br>")}</p>`).join("");
  }
  function addUserMessage(text) {
    const row = document.createElement("div"); row.className = "pc-user-row";
    const item = document.createElement("div"); item.className = "pc-message pc-user"; item.textContent = text;
    row.appendChild(item); messages.appendChild(row); messages.scrollTop = messages.scrollHeight; return item;
  }
  function moodFor(text) {
    const s = String(text).toLowerCase();
    if (/sorry|couldn't|could not|unable|don't know|do not know|not sure|error|failed/.test(s)) return "confused";
    if (/success|completed|great|excellent|achieved|resolved|built|created|developed/.test(s)) return "celebrate";
    if (/project|architecture|technical|python|linux|docker|proxmox|ai agent|infrastructure/.test(s)) return "focused";
    return "friendly";
  }
  function addBotMessage(text, mood) {
    const row = document.createElement("div"); row.className = "pc-bot-row";
    row.innerHTML = robot(mood || moodFor(text));
    const item = document.createElement("div"); item.className = "pc-message pc-bot"; item.innerHTML = renderMessage(text);
    row.appendChild(item); messages.appendChild(row); messages.scrollTop = messages.scrollHeight; return item;
  }
  function addSources(after, sources) {
    if (!Array.isArray(sources) || !sources.length) return;
    const line = document.createElement("div"); line.className = "pc-sources"; line.textContent = "Sources: " + sources.join(", "); (after.closest(".pc-bot-row") || after).after(line);
  }
  async function ask(question) {
    if (!question || sendButton.disabled || closing) return;
    addUserMessage(question); conversation.push({ role: "user", content: question }); while (conversation.length > 12) conversation.shift();
    input.value = ""; sendButton.disabled = true; input.disabled = true;
    const pending = addBotMessage("Thinking…", "thinking"); pending.classList.add("pc-thinking");
    try {
      const response = await fetch(CHAT_API_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ question, history: conversation.slice(0, -1) }) });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || `Request failed (${response.status})`);
      const answer = normalizeAnswer(data.answer || "I couldn't find an answer.");
      pending.innerHTML = renderMessage(answer); pending.classList.remove("pc-thinking");
      const row = pending.closest(".pc-bot-row"); const avatar = row && row.querySelector(".pc-avatar");
      if (avatar) { avatar.classList.remove("pc-mood-thinking"); avatar.classList.add(`pc-mood-${moodFor(answer)}`); }
      conversation.push({ role: "assistant", content: answer }); while (conversation.length > 12) conversation.shift();
      addSources(pending, (data.sources || []).filter(name => !/\.md$/i.test(name)));
    } catch (error) {
      if (conversation.length && conversation[conversation.length - 1].role === "user") conversation.pop();
      pending.textContent = `Sorry, I couldn't reach the assistant. ${error.message}`; pending.classList.remove("pc-thinking");
      const avatar = pending.closest(".pc-bot-row")?.querySelector(".pc-avatar"); if (avatar) { avatar.classList.remove("pc-mood-thinking"); avatar.classList.add("pc-mood-confused"); }
    } finally {
      sendButton.disabled = false; input.disabled = false; if (!panel.hidden && !closing) input.focus(); messages.scrollTop = messages.scrollHeight;
    }
  }
  form.addEventListener("submit", event => { event.preventDefault(); ask(input.value.trim()); });
  widget.querySelectorAll("[data-question]").forEach(button => button.addEventListener("click", () => { toggle(true); ask(button.dataset.question); }));
})();