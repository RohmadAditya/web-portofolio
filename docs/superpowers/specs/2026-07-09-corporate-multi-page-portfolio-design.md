# Corporate Multi-Page Portfolio Design

## Context

Current state:
- The site is a static single-page portfolio built from [index.html](/Users/adit/Projects/web-portofolio/index.html) with shared styling in [assets/css/style.css](/Users/adit/Projects/web-portofolio/assets/css/style.css) and modal behavior in [assets/js/modals.js](/Users/adit/Projects/web-portofolio/assets/js/modals.js).
- Navigation currently jumps between sections on one page.
- Portfolio content is already strong, but the presentation still feels closer to a polished landing page than a premium corporate portfolio.

Requested direction:
- Split each major section into separate pages.
- Move the visual direction toward a modern corporate portfolio with stronger character.
- Use a distinct `Executive Dark-Light Contrast` style.
- Keep the result professional enough for recruiters and business clients.
- Add references from current web design inspiration without copying any single design.

## Goals

- Rebuild the site as a multi-page portfolio with clear page-level navigation.
- Make the visual identity feel premium, sharp, and memorable.
- Put project quality and business credibility at the center of the experience.
- Preserve the simplicity of a static site so it stays easy to deploy and maintain.

## Non-Goals

- No CMS, build system migration, or frontend framework rewrite in this phase.
- No experimental 3D or animation-heavy interactions that risk performance or professionalism.
- No bloated feature set such as blog, authentication, or admin panels for the portfolio site itself.

## Design References

Reference sources reviewed:
- [Creative Bloq: 15 brilliant design portfolio examples](https://www.creativebloq.com/portfolios/examples-712368)
- [Awwwards overview](https://en.wikipedia.org/wiki/Awwwards)

Design principles extracted from those references:
- Strong first impression through typography and visual hierarchy.
- Curated work presentation instead of flat project listing.
- Clear personality without sacrificing clarity or trust.
- Case-study framing that explains outcomes, not only screenshots.

These references inform the direction, but the implementation should remain original and adapted to Rohmad Aditya's profile as a full stack web developer serving business-oriented clients.

## Experience Direction

Theme:
- `Executive Dark-Light Contrast`

Visual character:
- Dark premium hero surfaces paired with bright editorial content surfaces.
- Crisp panel borders, restrained glow accents, and structured spacing.
- Large, confident typography with selective contrast rather than constant decoration.
- A visual tone that feels like a digital consultancy or premium software studio.

Brand impression:
- Professional first.
- Distinctive second.
- Experimental only where it improves perception and readability.

## Information Architecture

The site will be split into these pages:

### 1. Home
Purpose:
- Establish positioning fast.
- Create a premium first impression.
- Funnel visitors toward portfolio and contact pages.

Content:
- Premium hero with concise positioning statement.
- Short metrics or trust indicators.
- Featured project preview.
- Selected capabilities preview.
- Compact CTA block leading to portfolio and contact.

### 2. About
Purpose:
- Explain who Rohmad Aditya is, how he works, and what kind of clients or projects fit best.

Content:
- Personal introduction.
- Working principles and development approach.
- Experience summary.
- Service orientation toward business websites, internal tools, and prototypes.

### 3. Capabilities
Purpose:
- Present technical strengths and service areas in a more executive format than a basic skills grid.

Content:
- Core service pillars.
- Technical stack grouped by business function.
- Delivery strengths such as frontend, backend, integration, and practical deployment.

### 4. Portfolio
Purpose:
- Serve as the main proof-of-work page.

Content:
- Featured case study near the top.
- Curated grid of supporting projects.
- Clear distinction between prototype work and company profile / business site work.
- Stronger project summaries that explain context and value.

### 5. Contact
Purpose:
- Convert interest into conversation with minimal friction.

Content:
- Short invitation to collaborate.
- Preferred contact channels.
- Summary of project types that are welcome.

## Navigation Model

Global navigation:
- Logo on the left.
- Primary links on the right: `Home`, `About`, `Capabilities`, `Portfolio`, `Contact`.
- Active-page indication should be clear but subtle.

Mobile navigation:
- Keep a compact collapsible menu.
- Preserve clarity and speed over animation complexity.

Footer:
- Repeat core navigation.
- Include compact identity and copyright.

## Content Strategy

Homepage copy:
- Must be shorter and more decisive than the current version.
- Focus on business value, execution quality, and confidence.

About page copy:
- More human and process-oriented.
- Should explain how technical capability supports business outcomes.

Portfolio copy:
- Each project should read like a concise case-study summary.
- Emphasis should shift from "what it is" to "why it matters" and "what it demonstrates".

Contact copy:
- Direct, welcoming, and high-trust.
- No clutter or unnecessary social noise.

## Visual System

### Color

Primary palette:
- Deep navy / ink backgrounds for hero and premium sections.
- Clean light gray / white surfaces for content reading areas.
- Controlled electric blue accent for interaction and subtle luxury cues.

Support colors:
- Muted slate text.
- Thin cool borders.
- Occasional soft glow accents for emphasis, never as constant decoration.

### Typography

Direction:
- Large headline scale with sharp contrast between display and body text.
- Keep typography modern and serious rather than playful.
- Use fewer words, stronger hierarchy, and clearer spacing.

### Layout

Direction:
- Wide containers.
- Grid-based alignment.
- Large section spacing.
- Panels that feel architectural, not card-spam.

### Motion

Allowed motion:
- Loader reveal with logo.
- Page-entry fade/slide transitions.
- Scroll reveal for selected blocks.
- Refined hover states on navigation, project cards, and CTAs.

Disallowed motion:
- Constant floating effects.
- High-frequency parallax.
- Motion that slows navigation or hurts readability.

## Page-by-Page Design Notes

### Home

Hero treatment:
- Dark hero with strong contrast and premium atmosphere.
- Main statement on the left, supporting proof panel or featured preview on the right.
- Loader transitions into this hero cleanly.

Secondary sections:
- Trust metrics should feel executive, not dashboard-like.
- Featured project preview should feel like a teaser into a deeper portfolio page.

### About

Design treatment:
- Light primary surface with one dark contrast band.
- Strong section dividers and careful typography.
- Use principle-based blocks instead of a visual timeline so the page stays modern and uncluttered.

### Capabilities

Design treatment:
- Modular grid.
- Categories should read like capabilities, not random tools.
- Technology chips can remain, but should support a stronger narrative structure.

### Portfolio

Design treatment:
- The strongest page in the site after Home.
- Above-the-fold featured case study.
- Supporting project grid below, grouped by category.
- Project exploration will remain modal-based in this implementation phase to preserve the static-site scope and reuse existing assets cleanly.

### Contact

Design treatment:
- Minimal and confident.
- High-contrast CTA treatment.
- Clear WhatsApp and other preferred channels without making the page feel like a social hub.

## Technical Architecture

Recommended structure:
- `index.html` for Home.
- `about.html`
- `capabilities.html`
- `portfolio.html`
- `contact.html`
- Shared styling will be reorganized into focused stylesheets under `assets/css/` so page-level concerns and shared design tokens stay maintainable.
- Shared scripts in `assets/js/` with page-safe initialization so logic does not assume every DOM node exists on every page.

Shared component expectations:
- Reusable navbar and footer markup across pages.
- Reusable page-hero styles.
- Reusable panel, section, metric, and project card systems.

JavaScript expectations:
- Page-safe guards for elements that only exist on certain pages.
- Loader logic should stay global.
- Modal and gallery logic should only run where related DOM is present.

## Accessibility and UX Requirements

- Navigation must remain keyboard-accessible.
- Active and hover states must preserve contrast.
- Loader must disappear reliably and not trap focus.
- Mobile layouts must preserve readability and action clarity.
- Decorative effects must never reduce text contrast.

## Performance Requirements

- Keep the static-site approach lightweight.
- Avoid heavy animation libraries for this phase.
- Reuse existing assets where reasonable.
- Ensure loaders and transitions do not delay actual interaction longer than necessary.

## Risks and Mitigations

Risk:
- Splitting one page into multiple pages can introduce duplicated markup and inconsistent updates.
Mitigation:
- Define shared markup patterns and keep class naming consistent across pages.

Risk:
- A premium dark-light design can become too flashy or too generic.
Mitigation:
- Keep contrast deliberate, accents restrained, and copy concise.

Risk:
- Existing JavaScript assumes a single-page DOM.
Mitigation:
- Refactor initialization to check whether page-specific elements exist before binding events.

## Implementation Guidance

Suggested order:
1. Establish the shared visual system and navigation pattern.
2. Split the current single page into the five-page structure.
3. Rebuild Home using the premium dark-light hero and featured work flow.
4. Rebuild About and Capabilities around executive presentation rather than simple section reuse.
5. Rebuild Portfolio with stronger grouping and case-study emphasis.
6. Rebuild Contact as a minimal conversion page.
7. Refactor JS to be page-safe and verify loader, gallery, and modal behavior.

## Success Criteria

- The site clearly feels like a multi-page corporate portfolio, not a one-page landing page.
- The overall impression is premium, modern, and distinctive.
- Portfolio work is easier to scan and feels more credible.
- Navigation is clearer for recruiters and business clients.
- The visual style has stronger identity without hurting professionalism.
