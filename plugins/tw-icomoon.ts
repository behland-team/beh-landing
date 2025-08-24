import plugin from "tailwindcss/plugin";
import path from "node:path";
import fs from "node:fs";

type IcoMoonIcon = {
  properties: {
    name: string;
    code: number; // e.g., 59648 -> \e900
  };
};

type IcoMoonSelection = {
  icons?: IcoMoonIcon[];
};

export interface IcoMoonOptions {
  /** Path to icomoon/selection.json (absolute or relative to project root) */
  selectionPath?: string;
  /** CSS font-family name */
  fontFamily?: string;
  /** Public URL path where font files are served (e.g. /fonts under /public) */
  cssFontPath?: string;
  /** Prefix for generated classes: .icon, .icon-home, etc. */
  classPrefix?: string;
}

function readSelectionJSON(selectionPath: string): IcoMoonSelection | null {
  try {
    const json = fs.readFileSync(selectionPath, "utf8");
    return JSON.parse(json) as IcoMoonSelection;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn(
      "[tw-icomoon] Could not load selection.json at",
      selectionPath,
      err
    );
    return null;
  }
}

export default plugin.withOptions<IcoMoonOptions | undefined>(
  (userOptions) => {
    const {
      selectionPath = path.resolve(process.cwd(), "icomoon/selection.json"),
      fontFamily = "icomoon",
      cssFontPath = "/fonts",
      classPrefix = "icon",
    } = userOptions ?? {};

    const selection = readSelectionJSON(selectionPath);

    const glyphs =
      selection?.icons?.map((i) => ({
        name: i.properties.name,
        code: "\\" + i.properties.code.toString(16), // -> "\e900"
      })) ?? [];

    return ({ addBase, addComponents, addUtilities }) => {
      // 1) @font-face
      addBase({
        "@font-face": {
          fontFamily: `'${fontFamily}'`,
          src: [
            `url('${cssFontPath}/icomoon.woff') format('woff')`,
            `url('${cssFontPath}/icomoon.ttf') format('truetype')`,
            `url('${cssFontPath}/icomoon.svg#${fontFamily}') format('svg')`,
          ].join(", "),
          fontWeight: "normal",
          fontStyle: "normal",
          fontDisplay: "block",
        },
      });

      // 2) Base .icon class
      addComponents({
        [`.${classPrefix}`]: {
          fontFamily: `'${fontFamily}' !important`,
          fontStyle: "normal",
          fontWeight: "normal",
          fontVariant: "normal",
          textTransform: "none",
          lineHeight: "1",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          display: "inline-block",
        },
      });

      // 3) Generated utilities: .icon-name::before { content: "\e900" }
      const utilities: Record<string, Record<string, string>> = {};
      for (const g of glyphs) {
        utilities[`.${classPrefix}-${g.name}::before`] = {
          content: `"${g.code}"`,
          fontFamily: `'${fontFamily}'`,
        };
      }
      addUtilities(utilities);
    };
  },
  // (optional) default theme options
  () => ({})
);
