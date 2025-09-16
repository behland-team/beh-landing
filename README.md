## Updating Icons with Tailwind IcoMoon Plugin

To update your icon set using the Tailwind IcoMoon plugin (TypeScript version), follow these steps:

1. **Open IcoMoon App**

   - Go to [IcoMoon](https://icomoon.io/app).
   - Upload your existing `selection.json` to restore your current icon set and codepoints.

2. **Modify Icons**

   - Add new icons or remove existing ones as needed.

3. **Export Updated Font Pack**

   - Click "Generate Font" and download the new font pack.

4. **Update Project Files**

   - Replace font files (`icomoon.ttf`, `.woff`, `.svg`, `.eot`) in `/public/fonts/`.
   - Replace the updated `selection.json` in `/icomoon/selection.json`.

5. **Rebuild the Project**

   - The Tailwind plugin reads `selection.json` at build time.
   - Run `npm run dev` for local development or `next build` for production.

6. **Usage**
   - The plugin will auto-generate new `.icon-<name>` utilities with updated Unicode values.
   - Use these classes in your components, e.g. `<span className="icon icon-home"></span>`.

**Tip:**  
Always commit both the updated font files and `selection.json

## CI/CD
