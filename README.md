# Portfolio multi-page refactor

## Files
- `index.html`: Home/profile, biography, AI/security focus, and technical skills.
- `projects.html`: Dynamically loads public GitHub repositories.
- `monitoring.html`: Home-lab monitoring & alerting demo.
- `site.css`: Shared portfolio CSS, left-side desktop menu (right side in Hebrew), responsive mobile navigation, and dark-mode corrections for monitoring cards.
- `site.js`: English/Hebrew translations, cross-page navigation state, and GitHub repository loader.
- `chat.css`, `chat.js`: Chatbot assets supplied for the current site.

## Deploy
Copy these seven files into the root of the existing GitHub Pages repository, replacing `index.html`, and adding the other files. Keep existing `certificates.html`, the CV PDF, `linkedin-photo.jpg`, and certificate assets. They are referenced by this site but intentionally not included in this bundle. Commit and push the changes together.

Check these after deploy:
1. `/` — home page, CTA and language toggle.
2. `/projects.html` — repository cards load.
3. `/monitoring.html` — monitoring cards match the system theme (dark cards in dark mode, light cards in light mode).
4. The sticky side menu is on the left in English and on the right in Hebrew; AI & Security appears before Technical Skills to match the page section order. On narrow screens the navigation becomes a horizontal bar. Verify cross-page navigation in both languages.
5. Chatbot opens and can call its existing Render API.

The monitoring links still use the home-hosted URLs supplied in the source. Their live public reachability/access policies have not been verified here. WhatsApp via WAHA and SMTP via Postfix remain accurately described as configured at home but not replicated in the portfolio demo.
