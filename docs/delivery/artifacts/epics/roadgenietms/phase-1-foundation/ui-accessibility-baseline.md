# UI Accessibility (ADA) Baseline Checklist

## Semantic HTML
- [ ] Use proper heading levels (`<h1>` through `<h6>`).
- [ ] Ensure all buttons have descriptive labels.
- [ ] Use `<nav>`, `<main>`, `<header>`, `<footer>` landmarks.

## Keyboard Navigation
- [ ] All interactive elements are reachable via `Tab`.
- [ ] Focus order follows logical layout flow.
- [ ] No "keyboard traps" where focus cannot escape.

## Focus States
- [x] `:focus-visible` implemented with high-contrast outline.
- [x] Skip-to-content link implemented for screen reader/keyboard users.

## Contrast & Color
- [ ] Text contrast ratios meet WCAG AA (4.5:1 for normal text).
- [ ] Color is not the only means of conveying information.

## ARIA Guidance
- [ ] Use `aria-label` for icons without text.
- [ ] Use `aria-live` for dynamic content updates.
- [ ] Use `role` attributes where semantic HTML is insufficient.
