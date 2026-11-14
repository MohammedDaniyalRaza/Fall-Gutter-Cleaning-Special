# Peakline Home Services

Multi-page web application for **Peakline Home Services**, serving Western Massachusetts and Connecticut with residential and commercial gutter care.

## Configuration

### Adding a Phone Number
All business settings live in `src/data/site.ts`. Currently `phone` is an empty string (`""`).
When `phone` is empty:
- Call buttons are automatically hidden across the site.
- "Get a Free Quote" and "Message on Facebook" are shown in their place.

When you are ready to enable click-to-call, enter a formatted phone number in `src/data/site.ts` (for example, `"(413) 555-0199"`). Click-to-call buttons, the mobile action bar call button, and the footer phone link will automatically appear.

## Image Slots (`src/data/images.ts`)

`<SmartImage slot="..." />` resolves images in three levels:
1. **Local file** in `/public/images/...`
2. **Remote fallback** (`images.unsplash.com`) if a local path is absent or fails
3. **Custom SVG / CSS art illustration** via `onError` so no broken image icon ever appears

| Slot Name | Local Path | Purpose |
| :--- | :--- | :--- |
| `brandLogo` | `/images/logo.png` | Navbar, Footer, About emblem |
| `heroMain` | `/images/hero-gutter-run.jpg` | Home split hero visual |
| `servicesHero` | `/images/ba-full-line.jpg` | Services page hero banner |
| `projectsHero` | `/images/ba-oak-leaves.jpg` | Projects gallery hero banner |
| `aboutHero` | `/images/roof-inspection.jpg` | About page hero banner |
| `contactHero` | `/images/ba-miter-corner.jpg` | Contact page hero banner |
| `serviceCleaning` | `/images/ba-deck-gutter.jpg` | Professional Gutter Cleaning |
| `serviceRepair` | `/images/clogged-downspout-1.jpg` | Gutter Cleaning + Repair |
| `serviceHangers` | `/images/ba-full-line.jpg` | Hidden Hanger Installation |
| `serviceResealing` | `/images/ba-reseal-hanger.jpg` | End Cap Resealing |
| `beforeAfterClogged` | `/images/ba-oak-leaves.jpg` | Home Before/After clogged view |
| `beforeAfterClean` | `/images/ba-oak-leaves.jpg` | Home Before/After clean view |
| `cloggedDownspout` | `/images/clogged-downspout-2.jpg` | Downspout clog gallery & detail |
| `cloggedSludge` | `/images/clogged-sludge.jpg` | Roof/sludge detail |
| `cloggedValley` | `/images/clogged-valley.jpg` | Valley buildup detail |
| `cloggedOverflow` | `/images/clogged-overflow.jpg` | Overflow sign detail |
| `miterCorner` | `/images/ba-miter-corner.jpg` | Inside corner miter project |
| `deckGutter` | `/images/ba-deck-gutter.jpg` | Deck-side gutter run project |
| `alsoFlooring` | `/images/hero-gutter-run.jpg` | Secondary flooring slot (drop `/images/vinyl-flooring.jpg` to replace) |
| `alsoMaintenance` | `/images/roof-inspection.jpg` | Secondary maintenance slot (drop `/images/property-maintenance.jpg` to replace) |
