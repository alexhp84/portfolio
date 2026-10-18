# Update notes

- Split the previous long one-page site into Home (`index.html`), Projects (`projects.html`), and Monitoring (`monitoring.html`).
- Extracted inline CSS and site JS into shared `site.css` and `site.js`.
- Fixed cross-page navigation, section active states, and made GitHub repository loading conditional on the Projects page.
- Added an Explore Projects button on Home and localized page introductions in English/Hebrew.
- Fixed the dark-mode monitoring mismatch by applying dark palette overrides to the showcase panel, inner cards, link pills, labels, tags and borders after the legacy hard-coded light rules.
- Preserved the existing chatbot endpoint and supplied `chat.css`/`chat.js`.
- Existing certificate, CV and profile image assets must remain in the repository.

- Moved the main menu to a sticky left-side sidebar for English and the right side for Hebrew; on small screens it becomes a horizontal navigation bar.
- Added a visible, translated “Menu” heading in the sidebar.
- Reordered links so AI & Security appears before Technical Skills, matching the section order on the home page.
- Normalised repeated DOCTYPE declarations in the three HTML pages.
