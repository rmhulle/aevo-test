import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import analytics from "../analytics"

function onclickTrack() {
  analytics.track("Add to Cart", {
    category: "Shopping",
    action: "Add Cart"
  })
}

function onclickGoal() {
  analytics.track("Purchased", {
    category: "Shopping",
    action: "Purchase"
    value: 567
  })
}

function onclickIdentify() {
  analytics.identify("XPTO-001", {
    aq_source: "Referral",
    aq_medium: "Influencer",
    aq_campaing: "teste",
    is_subscriber: true,
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
      <button onClick={onclickGoal}>Goal</button>
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
