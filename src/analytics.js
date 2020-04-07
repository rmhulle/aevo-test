/* analytics.js */
import Analytics from "analytics"

// TODO Instalar o noScript do TagManager.

const analytics = Analytics({
  app: "AevoTeste",
  debug: true,
  plugins: [],
})

analytics.on("page", ({ payload }) => {
  console.log("page view fired", payload)
})

analytics.on("track", ({ payload }) => {
  console.log("event dispatched:", payload)
})

analytics.on("identify", ({ payload }) => {
  console.log("user identified as:", payload)
})

// Set to global so Gatsby analytics plugin will work
if (typeof window !== "undefined") {
  window.Analytics = analytics
}

export default analytics
