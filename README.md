# Monitoring portfolio page — embedded Grafana and Alerta

This update is based on the latest monitoring-page files available in the conversation. It replaces only:

- `monitoring.html`
- `site.css`
- `site.js`

Keep `index.html`, `projects.html`, `chat.css`, `chat.js`, CV/assets and other existing files unchanged.

## What changed

- Adds three Grafana public dashboard embeds: homelab overview, network & VLANs, and logs & incidents.
- Embeds Alerta.
- Does **not** embed Alertmanager.
- Keeps the live synthetic-summary section already in `monitoring.html` and the current bilingual navigation/translations.
- Includes a Grafana guest demo credential panel as requested.

## Credential exposure warning

The guest username and password are rendered in the page, so both will be visible to anyone who visits the site and in the public HTML source after deployment. Use this only if the account is deliberately a restricted demo account with no sensitive data or administrative permissions. Do not reuse this password anywhere else; rotate it if you later decide not to publish it.

## Grafana embedding

If the dashboards show an empty frame or a browser refusal, use the “Open dashboard in new tab” link shown above each frame. Grafana's security configuration may need iframe embedding enabled (`allow_embedding = true` / `GF_SECURITY_ALLOW_EMBEDDING=true`) for the browser to permit embedding. Review the security implications before enabling it. See the official Grafana docs: https://grafana.com/blog/how-to-embed-grafana-dashboards-into-web-applications/

The Alerta frame can likewise be blocked by its response headers. Its external open link remains as a fallback.

## Verify before pushing

Run in the repository root:

```bash
git diff --check
node --check site.js
git diff --stat
```

Then review the diff and commit/push the three files. Remember to keep `chat.css` and `chat.js` in the same root because `monitoring.html` references them.
