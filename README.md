# Bug reproduction

1. `npm install`
2. `npm run storybook`
3. Open "UseMatchMedia" story "Use Match Media" (library version)
4. Use the viewport size switcher to switch between desktop and "Large mobile" and portrait / landscape orientation
   - When using "Use Match Media" the "Wide/Narrow" text (for the most part) does not change based on viewport size
5. Do same tests with "Use Is Desktop" (alternative implementation)
   - "Wide/Narrow" text updates always
