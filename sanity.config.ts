import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemaTypes from "./src/sanity/schemas";

export default defineConfig({
  name: "portfolio",
  title: "Portfolio CMS",
  projectId: "vwtqc57v",
  dataset: "content",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
