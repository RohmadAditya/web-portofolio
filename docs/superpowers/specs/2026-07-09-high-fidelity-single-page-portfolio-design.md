# High-Fidelity Single-Page Portfolio Design

## Context

Current state:
- The site is a static single-page portfolio defined in [index.html](/Users/adit/Projects/web-portofolio/index.html) with shared styling in [assets/css/style.css](/Users/adit/Projects/web-portofolio/assets/css/style.css).
- The current layout is clean and readable, but visually it does not match the premium dark-blue productized portfolio style requested by the user.
- The user provided a reference image and explicitly asked for the portfolio to become `semirip mungkin` to that image.

Requested direction:
- Keep the site as a single-page portfolio.
- Preserve the main section order from the reference: `Hero`, `Tentang`, `Keahlian`, `Portofolio`, and `Kontak`.
- Rebuild the page so the visual composition, spacing rhythm, and section hierarchy feel as close as possible to the reference while still using original HTML/CSS implementation and the user's own identity.

## Goals

- Deliver a one-page portfolio that strongly matches the visual structure and tone of the provided reference.
- Keep the navigation anchored to the five requested sections.
- Replace the current light corporate styling with a dark, luminous, modern portfolio presentation.
- Preserve responsiveness and static-site simplicity.

## Non-Goals

- No conversion to a multi-page site in this task.
- No framework migration, CMS, or build tooling changes.
- No dependency on external illustration assets that are not already available in the project.
- No cloning of the reference image itself; the implementation should be a fresh HTML/CSS recreation inspired by the same arrangement and mood.

## Design Intent

Theme:
- `Dark Neon Portfolio`

Visual character:
- Deep navy background with layered radial glows.
- Thin cool borders and subtle glass-like surfaces.
- Large white headline typography with bright blue emphasis.
- Dense but controlled section stacking, similar to the reference image.
- Clear visual separation between each section through border lines and spacing rather than large empty gaps.

Brand expression:
- The page should feel like a modern developer-designer personal brand.
- The logo remains the user's existing `RA` mark.
- The content should still read as Rohmad Aditya's portfolio even when the layout is heavily reference-driven.

## Information Architecture

The site remains a single page with these sections in order:

### 1. Hero
Purpose:
- Match the strongest visual cue of the reference.
- Introduce the owner immediately with a large two-line statement.
- Present portfolio and contact CTAs above the fold.

Content:
- Small greeting pill.
- Large heading with blue-highlighted role word.
- Short description paragraph.
- Two CTA buttons.
- Four compact metrics below the buttons.
- A large visual panel on the right that mimics a developer workstation / code interface composition.

### 2. Tentang
Purpose:
- Mirror the three-part composition from the reference.
- Explain the personal value proposition in a concise, polished way.

Content:
- Left: section label, strong title, and two short paragraphs.
- Center: portrait-style presentation card using an original stylized block built from CSS and existing brand treatment rather than copying the reference illustration asset.
- Right: a vertical feature list with three value statements such as result-oriented, continuous learning, and collaborative work style.

### 3. Keahlian
Purpose:
- Recreate the six-card capability strip seen in the reference.

Content:
- Section label.
- Six compact capability cards in a grid.
- Each card contains an icon, a skill title, a visual proficiency indicator, a percentage, and one short explanatory sentence.

### 4. Portofolio
Purpose:
- Present curated projects in a grid that visually matches the reference density.

Content:
- Section label.
- Filter pills row styled like tabs. These may remain static for now unless the implementation stays simple.
- Six project cards with thumbnail, category chip, title, short description, and an external/detail indicator.
- Bottom-centered CTA button for viewing all projects or exploring more work.

### 5. Kontak
Purpose:
- Reproduce the three-column contact footer block from the reference.

Content:
- Left: contact info card with email, phone, location, and availability.
- Center: compact form with name, email, message, and primary submit button.
- Right: social/connect card with intro text and icon buttons.

### 6. Footer
Purpose:
- Close the page with a thin branded footer close to the reference composition.

Content:
- Logo and short tagline on the left.
- Copyright text centered or balanced across the row.
- Small back-to-top button on the right.

## Layout Plan

### Global Shell

- Use a dark full-page canvas with faint blue radial gradients and tiny decorative grid/dot accents.
- Keep content in a wide centered container around `1140px` to `1240px`.
- Separate major sections with subtle horizontal border lines like the reference.
- Use rounded cards consistently with medium border radius and restrained shadows.

### Header

- Fixed top navigation with dark translucent background and slight blur.
- Brand at left with existing logo.
- Nav links at right: `Hero`, `Tentang`, `Keahlian`, `Portofolio`, `Kontak`.
- Active and hover states use electric blue underline/glow treatment.

### Hero Composition

- Two-column layout on desktop.
- Left side is text-heavy and vertically centered.
- Right side contains a large custom mock interface block composed from layered divs:
  - desktop code panel
  - floating mobile card
  - glowing circular backdrop
  - small floating tech badges such as `</>`, `CSS`, `JS`, and `{}` to echo the reference
- This approach avoids needing outside illustration assets while preserving the same visual read.

### About Composition

- Three-column desktop row.
- Middle portrait card sized to align with the two adjacent text cards.
- Value statement list uses icons and separators to match the reference rhythm.

### Skills Composition

- Six-up grid on large screens, reduced progressively on tablet/mobile.
- Cards should feel compact and consistent, with strong icon presence and a bottom progress line.

### Portfolio Composition

- Tight project grid similar to the reference, likely six cards in one row on wide desktop and wrapped responsively below that.
- Existing project assets from `assets/projects/mg-playstation` and supporting visual placeholders can be used to fill the grid.
- If there are not enough unique project thumbnails, reuse the best assets with varied labels rather than introducing low-quality filler.

### Contact Composition

- Three-card strip layout.
- Center form card should be visually dominant through width and CTA emphasis.
- Inputs use dark inset styling with bright focus states.

## Content Direction

Copy tone:
- Short, direct, premium, modern.
- Similar cadence to the reference, but written specifically for Rohmad Aditya.

Content adaptation rules:
- Keep section names in Indonesian to match the reference.
- Headline should emphasize `Developer` and `Designer` language because that is central to the target look.
- Existing content can be rewritten for brevity where needed to preserve layout fidelity.
- Metrics, percentages, and labels may be adjusted to fit the visual structure as long as they remain plausible and not misleading.

## Visual System

### Color

Core colors:
- Background: very dark navy, almost black.
- Surface: dark blue-gray panels.
- Accent: saturated electric blue.
- Text primary: off-white.
- Text secondary: muted cool gray.
- Borders: soft blue-gray with low opacity.

### Typography

- Continue using `Manrope` if keeping dependencies stable is preferred.
- Increase heading contrast significantly through size and weight rather than changing to a decorative display font.
- Hero title should be large enough to visually dominate the first screen.

### Effects

- Controlled glows around buttons, badges, and hero mock panel.
- Soft shadows only; avoid heavy blur everywhere.
- Minimal motion limited to loader, hover states, and gentle reveal transitions if the existing JS supports them simply.

## Technical Plan

- Replace the current page sections in [index.html](/Users/adit/Projects/web-portofolio/index.html) with a structure tailored to the new one-page composition.
- Rewrite [assets/css/style.css](/Users/adit/Projects/web-portofolio/assets/css/style.css) to support the new dark theme, new grids, new hero mockup, cards, badges, and responsive rules.
- Reuse Bootstrap grid utilities where helpful, but rely mostly on custom CSS for exact fidelity.
- Keep the current lightweight JS only if still useful for loading state and modal behavior; remove dependence on unused behaviors if they interfere with the simpler target page.

## Responsiveness

- Desktop is the priority because the reference is desktop-first.
- Tablet should preserve the same section order with stacked blocks.
- Mobile should remain readable even if the exact desktop composition compresses:
  - hero art stacks below text
  - about section collapses into a vertical flow
  - skill and portfolio grids reduce to two or one columns
  - contact area becomes stacked cards

## Risks And Decisions

### Risk: missing portrait illustration

Decision:
- Use a CSS-crafted branded profile card rather than introducing a copied illustration or requiring a new asset download.

### Risk: limited project images

Decision:
- Reuse and crop existing project assets strategically so the portfolio section stays visually full without adding unrelated filler.

### Risk: exact match versus originality

Decision:
- Match layout, hierarchy, spacing rhythm, color balance, and UI motifs closely, while keeping implementation details, copy, and generated decorative shapes original.

## Acceptance Criteria

- The page is still a single HTML entry point with the five requested sections.
- The overall look is immediately recognizable as very close to the provided reference.
- The hero uses a strong left-copy and right-visual composition.
- The about section reads as a three-part band.
- The skills section shows six compact cards.
- The portfolio section shows a dense card grid with filter-style pills.
- The contact section uses a three-column structure on desktop.
- The page remains responsive and visually coherent on smaller screens.
