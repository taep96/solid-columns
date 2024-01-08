import dts from "bun-plugin-dts";
import { SolidPlugin } from "bun-plugin-solid";

await Bun.build({
  entrypoints: ["./src/index.tsx"],
  outdir: "./dist",
  external: ["@solid-primitives/media", "solid-js"],
  plugins: [SolidPlugin(), dts()],
});
