import arcjet, { tokenBucket, detectBot, shield } from "@arcjet/node";

import "dotenv/config";

const aj = arcjet({
  apiKey: process.env.ARCJET_API_KEY,
  characteristics: ["ip.src"],
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({ mode: "LIVE", allow: ["CATEGORY:SEARCH_ENGINE"] }),
    tokenBucket({ mode: "LIVE", refillRate: 5, capacity: 10, interval: 10 }),
  ],
});

export default aj;
