import { promises as fs } from "fs";
import path from "path";

const projectRoot = process.cwd();
const imagesDir = path.join(projectRoot, "public", "files", "images");
const manifestPath = path.join(imagesDir, "manifest.json");

const allowedExt = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif"]);

const main = async () => {
  const entries = await fs.readdir(imagesDir, { withFileTypes: true });

  const files = entries
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((name) => allowedExt.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b));

  const images = files.map((name) => `/files/images/${encodeURIComponent(name)}`);

  const manifest = {
    generatedAt: new Date().toISOString(),
    images,
  };

  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2) + "\n", "utf8");

  process.stdout.write(
    `Generated ${path.relative(projectRoot, manifestPath)} with ${images.length} images\n`
  );
};

main().catch((err) => {
  process.stderr.write(String(err) + "\n");
  process.exit(1);
});
