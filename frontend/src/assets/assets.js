const images = import.meta.glob("./*.{png,svg}", { eager: true });

export const assets = Object.fromEntries(
  Object.entries(images).map(([path, mod]) => {
    // Remove './' and file extension to get the key name
    const key = path.replace("./", "").replace(/\.(png|svg)$/, "");
    return [key, mod.default];
  })
);
