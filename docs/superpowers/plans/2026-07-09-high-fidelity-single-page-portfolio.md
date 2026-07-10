# High-Fidelity Single-Page Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the existing single-page portfolio into a dark, high-fidelity landing page that closely matches the approved reference while preserving Rohmad Aditya's own identity and content.

**Architecture:** Keep the site as one static `index.html` page styled by a single shared stylesheet in `assets/css/style.css`. Replace the current light corporate layout with a tightly structured dark interface composed from semantic sections, custom CSS grids, decorative UI mockups, and reusable card patterns.

**Tech Stack:** HTML5, CSS3, Bootstrap 5 utility/grid classes, Bootstrap Icons, existing lightweight JavaScript loader/modal behavior

---

## File Structure

- Modify: `index.html`
  Responsibility: replace the current landing-page markup with the approved high-fidelity one-page layout and preserve any scripts needed for loading behavior.
- Modify: `assets/css/style.css`
  Responsibility: replace the light theme with the new dark visual system, section layouts, card styles, hero mock illustration, responsive behavior, and interaction states.
- Review: `assets/js/modals.js`
  Responsibility: confirm the loader behavior still works with the new structure and that no removed selectors break page startup.

### Task 1: Rebuild the page structure in `index.html`

**Files:**
- Modify: `index.html`
- Review: `assets/js/modals.js`

- [ ] **Step 1: Verify the current page structure and script dependencies**

Check:
- Confirm `body.is-loading`, `#siteLoader`, and the script includes still exist in `index.html`.
- Confirm `assets/js/modals.js` only depends on the loader and Bootstrap modal hooks that can safely remain even if portfolio modal markup is removed.

Run:
```bash
sed -n '1,220p' index.html
sed -n '1,220p' assets/js/modals.js
```

Expected:
- `index.html` contains the loader and navbar.
- `assets/js/modals.js` does not require layout-specific selectors that would block the redesign.

- [ ] **Step 2: Replace the body markup with the new approved one-page section structure**

Write `index.html` so the page contains:

```html
<body class="is-loading">
  <div class="site-loader" id="siteLoader">...</div>
  <nav class="navbar navbar-expand-lg fixed-top">...</nav>

  <main class="page-shell">
    <section class="hero-section" id="hero">...</section>
    <section class="section-band" id="tentang">...</section>
    <section class="section-band" id="keahlian">...</section>
    <section class="section-band" id="portofolio">...</section>
    <section class="section-band" id="kontak">...</section>
  </main>

  <footer class="site-footer">...</footer>
  <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script defer src="assets/js/modals.js"></script>
</body>
```

Expected content details:
- Hero: greeting pill, `Saya Developer & Designer`, short description, two CTA buttons, four stat items, right-side mock device/code composition.
- Tentang: left intro copy, center branded profile card, right three-value list.
- Keahlian: six capability cards with icon, title, percentage, progress bar, description.
- Portofolio: title row, static filter pills, six dark project cards using existing assets where possible.
- Kontak: three-column strip with contact info, form, and social links.
- Footer: RA identity, copyright, back-to-top control.

- [ ] **Step 3: Keep content concise and aligned to the approved visual direction**

Adjust copy in `index.html` to fit the approved density:

```html
<h1 class="hero-title">
  Saya Developer
  <span>&amp; <em>Designer</em></span>
</h1>
<p class="hero-copy">
  Saya membangun pengalaman digital yang modern, cepat,
  dan berfokus pada pengguna.
</p>
```

Expected:
- Text blocks remain short enough to preserve the visual silhouette of the reference.
- Section labels stay in Indonesian: `Tentang`, `Keahlian`, `Portofolio`, `Kontak`.

### Task 2: Rewrite `assets/css/style.css` for the dark high-fidelity visual system

**Files:**
- Modify: `assets/css/style.css`

- [ ] **Step 1: Replace the root tokens and page-level theme**

Write the stylesheet foundation with dark tokens:

```css
:root {
  --bg: #060b16;
  --bg-soft: #0b1220;
  --panel: rgba(13, 22, 38, 0.88);
  --panel-strong: #101a2d;
  --line: rgba(113, 145, 198, 0.18);
  --line-strong: rgba(93, 146, 255, 0.34);
  --text: #f4f7fb;
  --muted: #98a6c3;
  --blue: #3b8cff;
  --blue-strong: #1f6fff;
  --glow: 0 0 0 1px rgba(74, 139, 255, 0.12), 0 24px 80px rgba(4, 10, 24, 0.55);
}
```

Expected:
- Background, surface, border, and accent variables support the entire redesign.

- [ ] **Step 2: Implement shared layout, navbar, and section styling**

Add CSS for:

```css
body { background: radial-gradient(...), #060b16; color: var(--text); }
.page-shell { position: relative; overflow: clip; }
.navbar { background: rgba(5, 10, 20, 0.72); border-bottom: 1px solid rgba(255,255,255,0.06); }
.section-band { padding: 2rem 0 0; border-top: 1px solid rgba(255,255,255,0.06); }
.section-label { color: #33a0ff; letter-spacing: 0.16em; text-transform: uppercase; }
```

Expected:
- The page gets the same tight banded structure as the reference.
- Header and sections feel integrated rather than separated by large blank space.

- [ ] **Step 3: Implement the hero layout and CSS-built visual mockup**

Add rules for:

```css
.hero-grid { display: grid; grid-template-columns: minmax(0, 1.02fr) minmax(420px, 0.98fr); }
.hero-title { font-size: clamp(3.2rem, 6vw, 5.5rem); }
.hero-visual,
.device-frame,
.phone-frame,
.floating-badge { ... }
```

Expected:
- Left hero copy fills the first screen with strong visual dominance.
- Right hero art reads like a laptop plus phone UI setup with blue glows and floating code badges.

- [ ] **Step 4: Implement card systems for about, skills, portfolio, and contact**

Add reusable panel rules and section-specific grids:

```css
.panel-card { background: linear-gradient(180deg, rgba(15,22,37,0.95), rgba(10,16,28,0.92)); border: 1px solid var(--line); }
.about-grid,
.skills-grid,
.portfolio-grid,
.contact-grid { display: grid; gap: 1.5rem; }
.skill-meter span,
.filter-pill.is-active,
.project-thumb,
.contact-form .form-control { ... }
```

Expected:
- All cards share one visual language.
- Skill cards, project cards, and contact blocks feel dense and premium like the reference.

- [ ] **Step 5: Add responsive rules for tablet and mobile**

Add breakpoints that stack the major regions:

```css
@media (max-width: 1199.98px) { ... }
@media (max-width: 991.98px) { ... }
@media (max-width: 767.98px) { ... }
```

Expected:
- Hero visual stacks below the text.
- About and contact sections collapse cleanly.
- Skill and portfolio cards remain legible on narrower screens.

### Task 3: Verify runtime behavior and polish

**Files:**
- Review: `index.html`
- Review: `assets/css/style.css`
- Review: `assets/js/modals.js`

- [ ] **Step 1: Run a local static server and open the page**

Run:
```bash
python3 -m http.server 4174 --bind 127.0.0.1
```

Expected:
- Server starts successfully and serves `index.html` at `http://127.0.0.1:4174/`.

- [ ] **Step 2: Verify the page renders without broken layout or missing assets**

Check:
- Loader disappears.
- Navbar anchors scroll correctly.
- Hero, Tentang, Keahlian, Portofolio, and Kontak all render in the intended order.
- Existing local assets display in the portfolio cards.

Expected:
- No blank sections, obvious overflow bugs, or missing image paths.

- [ ] **Step 3: Fix any selector or spacing regressions discovered during verification**

If a regression appears, update only the relevant HTML/CSS selectors and re-check the page until:
- section spacing is consistent
- cards align correctly
- text remains readable on mobile and desktop

- [ ] **Step 4: Capture the final state for handoff**

Run:
```bash
git diff -- index.html assets/css/style.css
```

Expected:
- Diff shows the high-fidelity layout rewrite isolated to the intended files.

## Self-Review

- Spec coverage: the plan includes the approved one-page section order, hero emphasis, three-part about band, six-card skills strip, dense portfolio grid, and three-column contact block.
- Placeholder scan: no `TBD`, `TODO`, or vague “implement later” placeholders remain.
- Type consistency: class names and file targets are consistent across tasks and match the current static HTML/CSS codebase.
