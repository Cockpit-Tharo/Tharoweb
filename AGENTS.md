<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


# Design and Copy Standards: Zero Clutter Policy

Always adhere to these mandatory rules across all code, components, copy, and responses:

1. **No Em Dashes:** Never insert an em dash or spaced en dash anywhere in UI copy, data definitions, code comments, markdown documentation, commit messages, or assistant replies. Use commas, colons, parentheses, conjunctions, or separate sentences instead.
2. **No Emojis:** Absolute zero emojis across all code, UI copy, data definitions, buttons, simulator messages, and documentation.
3. **No Green Dots:** Do not add pulsing green dots, blinking LEDs, or fake online indicators to badges, cards, or pills.
4. **No Live Pills:** Do not add floating telemetry or artificial status widgets (e.g. "Live", "Active", "System Online").
5. **No Eyebrow Pills:** Do not use rounded pill borders or pill backgrounds for eyebrow category tags above headings. Keep typography clean or omit eyebrow tags.
6. **No Tech Jargon in Customer-Facing Copy:** Strictly avoid backend internals like ACID, PostgreSQL, Multi-Tenant, RLS, TLS 1.3, Latency, and Webhooks in marketing copy. Express capabilities as direct business outcomes.
7. **No Unnecessary Square Brackets and Hyphens:** Avoid bracket ornamentation (e.g. `[FLOW]`, `[STEP 01]`) and excessive hyphens in headings and labels.
8. **No Overusing Dividers:** Avoid excessive horizontal divider lines (`<hr />` or divider border strips) separating every small block. Use natural whitespace and layout hierarchy instead.
9. **No Z-Axis Hover Lift or Popups on Cards and Images:** Do not make images, sections, or card containers jump up along the z-axis (e.g. `translateY`, `scale`, or `translateZ` popup effects) on hover. Static containers, cards, and artwork must stay grounded. Limit hover interactions to subtle background contrast, crisp border illumination, or explicit interactive controls rather than bouncing whole containers.
