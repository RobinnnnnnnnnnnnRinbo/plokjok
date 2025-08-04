// Auto-import all PNGs in this folder using Vite's import.meta.glob
const images = import.meta.glob("./*.png", { eager: true });

export const assets = Object.fromEntries(
  Object.entries(images).map(([path, mod]) => {
    // Remove './' and '.png' to get the key name
    const key = path.replace("./", "").replace(".png", "");
    return [key, mod.default];
  })
);
