# Garden.City

**The urban gardening & green-city hub** — guides, free planning tools, videos, contests, and a free quote-matching service for balcony, rooftop, vertical and backyard garden projects.

- Static HTML/CSS/JS — no build step, hosts free on GitHub Pages (main branch, root).
- Monetization: Google AdSense (Auto ads, `ca-pub-6620975821265271`), lead generation (`get-quote.html`, `pros.html`), donations/pledges (`support.html`), sponsorships (`advertise.html`), contests (`contests.html`).
- All forms post via FormSubmit AJAX to an obfuscated address assembled at runtime in `assets/js/main.js` — the address never appears in page text.

## Publish on GitHub Pages
1. Repo → **Settings → Pages**.
2. Source: **Deploy from a branch** → Branch: `main` / `/ (root)` → Save.
3. Site goes live at `https://webworksa1.github.io/garden-city/`.
4. Custom domain: add `garden.city` in the Pages settings (this creates a `CNAME` file), then point DNS: apex `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` and `www` `CNAME` to `webworksa1.github.io`. Enable **Enforce HTTPS**.

## After launch
- First form submission triggers a one-time FormSubmit activation email to the site inbox — click **Activate** once.
- In AdSense: add the site, verify `ads.txt`, enable Auto ads, and turn on Google's certified consent message (Privacy & messaging) for EEA/UK/CH visitors.
- See `PROMPT.md` for the full phase-wise build prompt, research matrix and growth roadmap.

© 2026 Garden.City. See `disclaimer.html` for the trademark & copyright notice.
