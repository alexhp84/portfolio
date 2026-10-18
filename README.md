# Monitoring page: Grafana dashboards + Alerta

This bundle updates the portfolio's `monitoring.html`, `site.css`, and `site.js`.

## What changed

- Removed the “Live demo snapshot” summary card and its `monitoring-data.patnick.click/api/summary` polling script. The page no longer depends on that API.
- Kept the three existing Grafana public dashboard links and added them as iframe sources using the same direct URLs that open in a new tab.
- Kept Alerta embedded and retained an “Open Alerta” link as a fallback.
- Alertmanager is not embedded.
- Retained the public Grafana demo credentials as requested: `guest` / `Aa123456`.
- Kept the existing shared navigation, bilingual `site.js`, and chat integration references.

## Important: Grafana iframe configuration

The HTML change alone cannot override Grafana's anti-framing response headers. Grafana's default `allow_embedding` setting is false and results in `X-Frame-Options: deny`; that causes a browser iframe to appear blank even when the public dashboard URL opens normally in a tab. See Grafana's [configuration documentation](https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/) and [public dashboard documentation](https://grafana.com/docs/grafana/latest/visualizations/dashboards/share-dashboards-panels/shared-dashboards/).

On the VM, edit your existing Compose file:

```bash
cd /opt/live-demos/projects/monitoring-portfolio-demo/monitoring-portfolio-demo
sudo docker compose config --services
sudo nano docker-compose.yml
```

Under the existing Grafana service's `environment:` section, add this entry (use the same YAML style as the neighbouring environment variables, and do not create a second `environment:` section):

```yaml
GF_SECURITY_ALLOW_EMBEDDING: "true"
```

Then recreate only the Grafana service. If `docker compose config --services` lists the service as `grafana`, run:

```bash
sudo docker compose up -d --force-recreate grafana
```

If its service name is different, use the name shown by `docker compose config --services`.

Check the response headers afterwards:

```bash
curl -sSI 'https://monitoring.patnick.click/public-dashboards/47dccdff74224f0dab2f1c242b1e0649' \
  | grep -iE '^(HTTP/|x-frame-options:|content-security-policy:)'
```

If `X-Frame-Options: DENY` is still present after enabling Grafana embedding, inspect Nginx Proxy Manager's Advanced configuration for a manually-added `X-Frame-Options` deny header. Do not remove unrelated security headers. Then hard-refresh the GitHub Pages monitoring page.

Alerta may have its own frame restrictions. If only its iframe remains blank, check the Alerta response headers separately; the Open Alerta link remains available regardless.

## Deploy

Copy the three website files into the root of the portfolio repository, replacing only files with the same names. Keep `index.html`, `projects.html`, `chat.css`, and `chat.js`.

Before committing:

```bash
git diff --check
node --check site.js
git diff --stat
```

The `monitoring-summary-api` container is not required by this version of the page. This change only removes the website's dependency on it; it does not stop or delete the container.
