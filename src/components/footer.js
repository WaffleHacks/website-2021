import React from "react"

import waffleLogo from "../images/logo.png"

const CATEGORIES = [
  {
    name: "Socials",
    links: [
      {
        name: "Facebook",
        newTab: true,
        url: "https://www.facebook.com/WaffleHacks-103974901775671",
      },
      {
        name: "Instagram",
        newTab: true,
        url: "https://www.instagram.com/waffle.hacks",
      },
      {
        name: "Twitter",
        newTab: true,
        url: "https://twitter.com/WaffleHacks",
      },
      {
        name: "LinkedIn",
        newTab: true,
        url: "https://www.linkedin.com/company/wafflehacks/about/",
      },
    ],
  },
  {
    name: "Navigation",
    links: [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Privacy Policy",
        url: "/privacy-policy",
      },
      {
        name: "Sponsors",
        url: "/sponsors",
      },
      {
        name: "Register",
        newTab: true,
        url: "https://apply.wafflehacks.org",
      },
      {
        name: "Schedule",
        url: "/schedule",
      },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6">
            <a
              className="text-yellow-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="/"
            >
              <img
                className="h-8 fill-current inline"
                src={waffleLogo}
                alt="Waffle Hacks Logo"
              />
              &nbsp;WaffleHacks
            </a>
          </div>

          {CATEGORIES.map(category => (
            <div className="flex-1" key={category.name}>
              <p className="uppercase text-gray-500 md:mb-6">{category.name}</p>

              <ul className="list-reset mb-6">
                {category.links.map(link => (
                  <li
                    className="mt-2 inline-block mr-2 md:block md:mr-0"
                    key={link.name}
                  >
                    <a
                      href={link.url}
                      className="no-underline hover:underline text-gray-600 hover:text-yellow-600"
                      target={link.newTab ? "_blank" : "_self"}
                      rel="noreferrer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
