# Load Inbox Screen Implementation - Phase 1

## Overview
Implemented the **Load Inbox** screen matching the Stitch screenshot provided. This implementation focuses on the UI/UX foundation, using mock data and standalone Angular components.

## Created Files
### Feature Components
- `src/app/features/tms/loads/loads-inbox/loads-inbox.component.ts`: Main logic and data.
- `src/app/features/tms/loads/loads-inbox/loads-inbox.component.html`: Template structure.
- `src/app/features/tms/loads/loads-inbox/loads-inbox.component.scss`: Styles and layout.

### Shared UI Components
- `src/app/shared/ui/rg-chip.component.ts`: Reusable filter chip.
- `src/app/shared/ui/rg-stat-card.component.ts`: Summary statistic card.
- `src/app/shared/ui/rg-load-card.component.ts`: Detailed load list item.
- `src/app/shared/ui/rg-bottom-nav.component.ts`: Mobile-first bottom navigation.
- `src/app/shared/ui/rg-fab.component.ts`: Floating action button.

## Screenshot Mapping
| UI Element | Implementation Component | Notes |
|Data | `mockLoads` array in component | Includes status, rate, rpm, route, dates |
| Top Bar | `header` in `loads-inbox.html` | Branding, Search, + Load button |
| Filter Chips | `rg-chip` (x5) | Interactive (mock), aria-pressed support |
| Summary Cards | `rg-stat-card` (x2) | Total Revenue, Avg RPM |
| Load List | `rg-load-card` (row) | Pixel-close match for Price, Route, Status pill |
| Bottom Nav | `rg-bottom-nav` | Fixed position, FAB overlay |

## Responsive Behavior
- **Desktop (> 768px)**:
  - Max-width container (1200px) centered.
  - Filters row horizontal.
  - Generous padding.
- **Mobile (< 768px)**:
  - Full width.
  - Filters wrap if needed.
  - Summary cards stack or smaller grid (2 col).
  - Bottom nav fixed at viewport bottom.
  - Padding adjusted for touch targets.

## Future Phase 2 Wiring
- **Data Source**: Replace `mockLoads` with `FirestoreService` observable.
- **Interactions**:
    - `onLoadSelected(load)` -> Open Side Drawer (Router outlet or MatSidenav).
    - `onFabClick()` -> Open "Create Load" Dialog.
    - Search -> Real-time filtering pipe.

## Verification
- Build Status: **PASS** (`npm run build`)
- Accessibility: Validated `aria-label` on buttons and `tabindex` on interactive cards.
