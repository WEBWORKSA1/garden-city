# Garden.City — Strategy & Phase-Wise Build Prompt

## 1. The idea (and why it wins)

**Garden.City = the urban gardening & green-city hub.** Guides + free interactive tools for balcony, rooftop, vertical and small-yard growers, with a **free quote-matching funnel** that sells project leads to local garden designers, landscapers, green-roof and living-wall installers.

Why this beats the alternatives for this domain:

| Option considered | Traffic potential | RPM/CPL | Defensibility | Verdict |
|---|---|---|---|---|
| Urban gardening hub + pro lead gen (**chosen**) | High, evergreen, seasonal spikes | Home & garden AdSense + $35–$85 landscape-design leads | Tools + content moat | **Best risk/reward** |
| Real-estate guide to "garden city" towns | Medium, fragmented | Good | Trademark/confusion risk with municipalities | Reject |
| Urban planning / smart-city news | Low-medium | Low RPM | Weak | Reject |
| Garden e-commerce store | Medium | Thin margins, inventory | Low | Later, as affiliate layer |

Key logic: AdSense alone on a gardening site is a **slow** earner; one qualified design/install lead is worth more than thousands of pageviews. The content and tools exist to capture intent; the quote form monetizes it.

### Unit economics (assumptions, not promises)
- Mature traffic target: 50,000 visits/mo, 1.8 pages/visit.
- AdSense at an assumed $8–$15 page RPM → **~$720–$1,350/mo**.
- Quote-form conversion 0.8–1.5% → 400–750 leads/mo. Sold to max 3 pros at $15–$40 each (shared) or $40–$85 (exclusive) → **$6k–$30k/mo potential** once a pro network exists.
- Sponsorships (tool "presented by", contest title sponsor, newsletter): $500–$5,000/mo.
- Donations: minor, mainly community goodwill and contest funding.

**The real business is the pro network.** Prioritize recruiting 5–10 pros in 2–3 launch cities before scaling SEO.

## 2. Benchmark research matrix (35 reference sites)

Features benchmarked across category leaders (editorial, tools, marketplaces, nonprofits). Garden.City adopts the bold items.

| # | Site | Type | Features worth copying |
|---|---|---|---|
| 1 | RHS (rhs.org.uk) | Horticultural society | **Plant finder with filters**, advice by month, membership/donations |
| 2 | BBC Gardeners' World | Media | Seasonal to-do lists, video tie-ins, newsletter |
| 3 | Old Farmer's Almanac | Media | **Frost-date planting calendar**, garden planner upsell |
| 4 | Gardening Know How | Editorial | Huge evergreen guide library, **urban gardening hub page**, Q&A |
| 5 | Epic Gardening | Creator brand | **Video-first content**, small-space focus, shop |
| 6 | The Spruce | Editorial | Expert-reviewed bylines, clean article template, ad density benchmark |
| 7 | Better Homes & Gardens | Media | Idea galleries, plant encyclopedia |
| 8 | Garden Design Magazine | Media | Design inspiration, designer directory |
| 9 | Gardenista | Media | Editorial photography, curated product guides |
| 10 | Houzz | Marketplace | **Find-a-pro + quote requests**, project photos |
| 11 | Angi | Lead marketplace | **Multi-step quote wizard**, cost guides |
| 12 | Thumbtack | Lead marketplace | Instant price ranges, pro profiles |
| 13 | HomeAdvisor | Lead marketplace | Cost-guide SEO feeding lead forms |
| 14 | LawnStarter | Marketplace + content | City rankings content, booking funnel |
| 15 | Yardzen | Online design service | **Style quiz → paid design** funnel |
| 16 | Tilly | Online design service | Package pricing, before/after |
| 17 | GrowVeg | Tool SaaS | **Grid garden planner**, companion warnings |
| 18 | Garden.org (NGA) | Community | Plant database, forums, member photos |
| 19 | Missouri Botanical Garden Plant Finder | Institution | Authoritative plant data fields |
| 20 | Kew | Institution | Science credibility, donations |
| 21 | NParks Singapore | Government | City-in-nature framing, community garden programme |
| 22 | Brooklyn Grange | Rooftop farm | Rooftop design/build services, events |
| 23 | Green Roofs for Healthy Cities | Industry body | Green-roof education, professional training |
| 24 | American Community Gardening Assoc. | Nonprofit | Start-a-garden resources |
| 25 | Xerces Society | Nonprofit | Pollinator plant lists, pledges |
| 26 | NWF Garden for Wildlife | Nonprofit | **Certification/badge programme**, donations |
| 27 | Arbor Day Foundation | Nonprofit | Donation tiers, tree-planting impact counters |
| 28 | TreePeople | Nonprofit | Volunteer + donate + city greening |
| 29 | Balcony Garden Web | Niche blog | Small-space listicles, Pinterest-friendly |
| 30 | Gardenerd | Creator | Classes, Patreon-style support |
| 31 | University extension sites (UMaine, Penn State, Illinois) | Education | Evidence-based guides, **free embeddable videos** |
| 32 | Bonnie Plants | Brand | Plant guides tied to products, zone tools |
| 33 | Burpee | Brand/shop | Seed-starting calculator, how-to |
| 34 | Gardener's Supply | Retailer | Raised-bed planner, content commerce |
| 35 | Patreon / Ko-fi creator pages | Funding model | Tiered support with clear impact |

Patterns adopted: plant finder, frost-based calendar, grid planner, cost ranges before the form, multi-step low-friction wizard, video library, contests/badges, transparent donation allocation, pro-network B2B page, sponsorship packages, strict legal pages.

## 3. Phase-wise build prompt

Copy each phase as a prompt.

### Phase 0 — Foundation
> Build a static, framework-free website for **Garden.City**, an independent urban gardening and green-city hub, deployable on GitHub Pages free plan from the `main` branch root. Use relative links only (works at `/garden-city/` and on the custom domain). Create a design system in one CSS file: forest green `#0f3d2e`, leaf `#2f8f4e`, lime `#8fd16a`, cream `#f6f3ea`, clay `#d9734e`; Fraunces (display) + Inter (body). Every page must include: the AdSense script `ca-pub-6620975821265271` in `<head>`, `google-adsense-account` meta, canonical + Open Graph tags, a top bar reading “Contact, if you are interested in this website / domain name / Sponsorship / Advertisement / Partnership” linked to `https://web.works/contact`, sticky header, mobile menu, and a footer with legal links and a non-affiliation line. Add `ads.txt`, `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, `404.html`, `.nojekyll`.

### Phase 1 — Core script & privacy-safe forms
> Write `assets/js/main.js`: mobile menu, cookie notice (Accept / Essential only → non-personalised ads), lite YouTube facade loading `youtube-nocookie.com` on click, reveal-on-scroll, count-up stats, sticky quote CTA, exit-intent lead-magnet modal (once per visitor), share buttons. All `<form data-form>` submit via fetch to FormSubmit AJAX. The destination email must never appear in HTML or as plain text: assemble it at runtime from a reversed, split base64 string. `[data-mail]` links open a mailto built at click time. Include a honeypot field, consent checkboxes and inline success/error states.

### Phase 2 — Homepage
> Hero with value proposition and dual CTA (Get 3 free quotes / Find plants), original SVG illustration (no stock images), stats strip, “What kind of space do you have?” cards, tools showcase, quote CTA band, latest guides, video strip, community band (contest, donate, careers), starter-kit email capture, FAQ.

### Phase 3 — Lead generation engine
> `get-quote.html`: 4-step wizard (project type cards → size/location/property → budget/timeline/details with live indicative cost range → contact + explicit consent to share with up to 3 pros). Progress bar, auto-advance on project pick, `?type=` preselect from every guide CTA, trust sidebar, FAQ. `pros.html`: B2B application for landscapers/designers (service area, services, capacity, insurance). `starter-kit.html`: printable lead magnet.

### Phase 4 — Interactive tools (SEO + engagement)
> `assets/js/tools.js` with a 40+ plant dataset. Plant Finder (filters: light, space, type, difficulty, pollinator, search). Planting Calendar (last-frost month/day → start-indoors/sow/harvest month grid for 20 crops, saved locally). Garden Planner (30 cm square grid, plants-per-square, companion good/bad warnings, print, localStorage). Calculators (soil volume & bags, balcony/roof load with safety messaging, watering needs, project cost → quote CTA).

### Phase 5 — Content for AdSense approval
> Minimum 9 original, in-depth guides (700–1,200 words) with TOC, schema, internal links to tools, a quote CTA sidebar and verified educational video embeds: balcony vegetables, rooftop safety, vertical gardens, container soil, apartment composting, pollinator balconies, indoor herbs, community gardens, the garden city planning concept. Guides hub with search + category filter. Video library with category filters and creator attribution.

### Phase 6 — Community & revenue pages
> Contests (categories, prizes funded by sponsors, timeline, judging weights, registration form, official rules summary). Support (tiers, transparent allocation: operations / hiring / contests / marketing, pledge form — no card data on site, not-a-charity notice). Careers (writer, video creator, ambassador, designer partner, SEO, illustrator + application form). Advertise (tool sponsorship, featured pro listing, contest sponsor, newsletter, sponsored series, city takeover + media-kit form).

### Phase 7 — Trust & compliance
> About (mission, editorial standards, funding), Contact (form + hidden mailto + web.works link), Privacy (AdSense cookie disclosures, opt-out links, FormSubmit, quote sharing, local storage, GDPR/CCPA/PIPEDA rights, children), Terms (information-only, quote-matching disclaimer, contests, contributions), Disclaimer (non-affiliation with any municipality/organization/company using “Garden City”, copyright, takedown process, ad/referral disclosure).

### Phase 8 — QA & launch
> Link check, no exposed email, AdSense on every page, top bar on every page, no console errors, no horizontal overflow at 390 px and 1366 px, tools functional, form payload verified. Publish via Settings → Pages → main / root. Add custom domain + DNS. Submit sitemap to Search Console. Apply to AdSense after ~2–4 weeks of indexing.

## 4. AdSense approval checklist
- [x] Original content: 9 long-form guides + 4 tools with explanatory copy
- [x] Privacy policy with Google cookie disclosure and opt-out links
- [x] About, Contact, Terms, Disclaimer pages
- [x] Clear navigation, no broken links, mobile-friendly
- [x] `ads.txt` with `pub-6620975821265271`
- [x] No copyrighted images; videos via official embeds with attribution
- [x] No prohibited content; no incentivized clicks; ads not placed near forms’ submit buttons (Auto ads)
- [ ] Custom domain live on HTTPS (recommended before applying)
- [ ] Enable Google certified CMP (Privacy & messaging) for EEA/UK/CH
- [ ] Add 10–20 more guides over the first 60 days

## 5. Growth roadmap (next 90 days)
1. **Weeks 1–2:** custom domain, Search Console, AdSense application, activate FormSubmit, recruit first 5 pros in 2 cities.
2. **Weeks 3–6:** 2 guides/week targeting “balcony garden ideas”, “rooftop garden cost”, “best plants for shade balcony”; city landing pages (“balcony gardening in Toronto”) feeding the quote form.
3. **Weeks 7–10:** Pinterest + YouTube Shorts from tool outputs; partner outreach to garden centres for contest prizes.
4. **Weeks 11–13:** migrate forms to a CRM/Supabase lead router with per-pro billing; add pro profile pages; launch spring contest.

---
© 2026 Garden.City. Independent publication; not affiliated with any entity using the words “Garden City”.
