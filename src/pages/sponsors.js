import React, { Fragment } from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Waves from "../components/waves"

import blueProtonLogo from "../images/sponsors/blueproton.png"
import hyperXLogo from "../images/sponsors/hyperx.png"
import persistNashvilleLogo from "../images/sponsors/persist-nashville.jpg"
import replitLogo from "../images/sponsors/replit.png"
import techTogetherChicagoLogo from "../images/sponsors/techtogether-chicago.png"
import wolframLogo from "../images/sponsors/wolfram.png"

import prospectus from "../images/sponsors/prospectus.pdf"

const TIER_SETTINGS = {
  // TODO: update the logo sizes
  LOGO_HEIGHT: {
    platinum: 150,
    silver: 50,
    partner: 100,
  },
  GRID_SIZE: {
    platinum: "grid-cols-1",
    silver: "grid-cols-2",
    partner: "grid-cols-2",
  },
}

const SPONSORS = {
  platinum: [
    {
      name: "Wolfram",
      url: "https://wolfram.com/",
      logo: wolframLogo,
      tier: "platinum",
    },
    {
      name: "Replit",
      url: "https://replit.com/",
      logo: replitLogo,
      tier: "platinum",
    },
    {
      name: "BlueProton",
      url: "https://blueproton.com",
      logo: blueProtonLogo,
      tier: "platinum",
    },
    {
      name: "HyperX",
      url: "https://www.hyperxgaming.com",
      logo: hyperXLogo,
      tier: "platinum",
    },
  ],
  silver: [],
  partner: [
    {
      name: "TechTogether Chicago",
      url: "https://techtogether.io/chicago",
      logo: techTogetherChicagoLogo,
      tier: "partner",
    },
    {
      name: "Persist Nashville",
      url: "https://www.persistnashville.org/",
      logo: persistNashvilleLogo,
      tier: "partner",
    },
  ],
}

const Header = ({ title }) => (
  <>
    <h2 className="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800">
      {title}
    </h2>
    <div className="w-full mb-4">
      <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
    </div>
  </>
)

const Sponsor = ({ tier, name, url, logo }) => (
  <>
    <div className="p-2 flex justify-center items-center">
      <a href={url} target="_blank" rel="noreferrer">
        <img
          src={logo}
          alt={`${name}'s logo`}
          style={{ height: TIER_SETTINGS.LOGO_HEIGHT[tier] }}
        />
      </a>
    </div>
  </>
)

const SponsorsSection = ({ sponsors, tier }) => (
  <>
    <Header title={tier.charAt(0).toUpperCase() + tier.slice(1)} />
    {sponsors.length === 0 && (
      <p className="text-center text-gray-800">Be the first {tier} sponsor!</p>
    )}
    <div className={`grid ${TIER_SETTINGS.GRID_SIZE[tier]} gap-4`}>
      {sponsors.map(s => (
        <Sponsor {...s} key={s.name} />
      ))}
    </div>
  </>
)

const SponsorsPage = () => {
  return (
    <Layout>
      <Hero title="Sponsors" image={false} />

      <Waves.GradientToWhite />

      <section className="bg-white py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <p className="w-full my-2 leading-tight text-center text-gray-800">
            Want to become a sponsor? Check out our&nbsp;
            <a
              className="text-yellow-600"
              href={prospectus}
              rel="noreferrer"
              target="_blank"
            >
              prospectus
            </a>
            !
          </p>

          <br />
          <br />

          {Object.keys(SPONSORS).map(k => (
            <Fragment key={k}>
              <SponsorsSection sponsors={SPONSORS[k]} tier={k} />
              <br />
            </Fragment>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default SponsorsPage
