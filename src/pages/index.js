import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Waves from "../components/waves"
import Description from "../components/description"
import Tracks from "../components/tracks"
import CallToAction from "../components/call-to-action"

const IndexPage = () => (
  <Layout>
    <Hero
      title="WaffleHacks"
      subtitle="We're hackers with hearts"
      action={{ text: "Register now!", link: "https://apply.wafflehacks.org" }}
      image={true}
    />
    <Waves.GradientToWhite />

    <Description />
    <Tracks />

    <Waves.WhiteToGradient />

    <CallToAction countdownTo="2021-08-27T21:00:11Z" />
  </Layout>
)

export default IndexPage
