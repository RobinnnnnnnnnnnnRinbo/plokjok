const images = import.meta.glob("./*.{png,svg,mp4,jpg,jpeg}", { eager: true });

export const assets = Object.fromEntries(
  Object.entries(images).map(([path, mod]) => {
    // Remove './' and file extension to get the key name
    const key = path.replace("./", "").replace(/\.(png|svg|mp4|jpg|jpeg)$/, "");
    return [key, mod.default];
  })
);
