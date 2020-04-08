/* analytics.js */
import Analytics from "analytics"
import googleTagManager from "@tegrus/analytics-plugin-google-tag-manager"

//GTM-WBKBK2F

const analytics = Analytics({
  app: "AevoTeste",
  debug: true,
  plugins: [
    googleTagManager({
      containerId: "GTM-WBKBK2F",
      assumesPageview: true,
      debug: false,
    }),
  ],
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
