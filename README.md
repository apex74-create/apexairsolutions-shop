# APEXAIRSOLUTIONS.SHOP — starter application sales storefront (a saleable property)

A turnkey application sales store built by Apex Air Solutions and stocked with the
house application package. Offered for sale as one complete property — domain name,
storefront, and shelves — under the Outer Loop model (owner design record,
Nov 12, 2026). Vanilla HTML/CSS/JS. No framework, no build step, no dependencies.

## Files
- `index.html` — the storefront: stocked shelves, the fifteen-face depot board, the
  twelve empty first-year shelves, the offer, the disclosed engine license + rate card,
  running costs.
- `trust.html` — the disclosure page (part of the asset): what is real, what you get,
  what it costs, what stays licensed, what is not promised.
- `style.css` — the house flavor map (hero graphic background, framed glass sheet,
  glass sliding boards, floating PLACE YOUR AD HERE tile, bottom no-fly zone).
- `site.js` — the property config (the rename seam) + rail rendering of brand strings.
- `sitemap.xml`, `robots.txt` — SEO basics, estate pattern.

## Self-containment (the visibility basis)
This repository contains only this property's own static pages. It holds NO house
secrets, NO credentials, NO proprietary engine code — the engines stay on the house
side and are reached by licensed API calls, exactly as the storefront itself
discloses. That is the basis on which the repo stands public: it was built to be
handed to a buyer.

## Rename procedure (a name veto costs a title swap + a DNS repoint, no rebuild)
1. `site.js` — edit the four values in the `PROPERTY` block.
2. `index.html` + `trust.html` — find/replace the old brand string in titles, meta,
   canonical/OG URLs, and the `data-brand` fallback text.
3. `sitemap.xml` + `robots.txt` — swap the domain in the URLs.
4. Repoint DNS per the change set below and set the Pages custom domain to match.

## DNS change set — READY, not applied (the listing lane owns console work)
Domain: `apexairsolutions.shop` (GoDaddy). Retire the GoDaddy forwarding/lander
pointing first (forwarding off), then, per tonight's pilot pattern:
- `A  @    185.199.108.153` TTL 3600
- `A  @    185.199.109.153` TTL 3600
- `A  @    185.199.110.153` TTL 3600
- `A  @    185.199.111.153` TTL 3600
- `CNAME  www  apex74-create.github.io` TTL 3600
- GitHub Pages custom domain: `apexairsolutions.shop` (set when DNS lands, so the
  certificate can provision). HTTPS follows on GitHub's clock after the records land.

## Terms furniture carried by the asset (as designed, do not soften in edits)
- Twelve new applications across year one (one a month) + the buyer's own scoped
  build each month for twelve months; beyond that, per-application pricing and custom
  scope work at the house's published rates.
- Applications run on Apex API calls under a metered license at the published rate
  card (Route A, ruled Nov 7, 2026). Disclosed on the storefront itself.
- After year one, the supply continues as a subscription.
- Buyer runs their own hosting and traffic.
