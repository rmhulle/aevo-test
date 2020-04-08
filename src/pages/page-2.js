import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import analytics from "../analytics"

function onclickTrack() {
  analytics.track("Click Link", {
    category: "Link",
  })
}

function onclickIdentify() {
  analytics.identify("XPTO-001", {
    email: "rmhulle@gmail.com",
    name: "Rodrigo Hulle",
  })
}

function onclickPage() {
  analytics.page()
}

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Página do Formulários</h1>
    <div>
      <button onClick={onclickTrack}>Track</button>
    </div>
    <div>
      {" "}
      <button onClick={onclickIdentify}>Identify</button>
    </div>
    <div>
      {" "}
      <button onClick={onclickPage}>PageView</button>
    </div>
  </Layout>
)

export default SecondPage
