import React from "react"
import PropTypes from "prop-types"

const Hero = ({ title, subtitle, image, action }) => (
  <div
    className={
      image
        ? "pt-24 bg-hero-pattern bg-no-repeat bg-cover min-h-screen"
        : "py-24"
    }
  >
    <div className="container mx-auto px-4 flex items-center ">
      <div className="container mx-auto px-4 content-around text-center">
        <h1 className="my-4 text-5xl xl:text-7xl 2xl:text-9xl font-bold leading-tight pt-12 text-red-900">
          {title}
        </h1>
        {subtitle && (
          <p className="leading-normal text-2xl xl:text-4xl 2xl:text-5xl mb-8 xl:pb-12 2xl:pb-16 pb-8 text-red-900">
            {subtitle}
          </p>
        )}

        {action && (
          <a
            href={action.link}
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 text-base py-4 px-8 xl:text-xl xl:py-6 xl:px-12 2xl:text-2xl 2xl:py-8 2xl:px-16 shadow-lg"
          >
            {action.text}
          </a>
        )}
      </div>
    </div>
  </div>
)

Hero.defaultProps = {
  subtitle: undefined,
  action: undefined,
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  action: PropTypes.shape({
    text: PropTypes.string,
    link: PropTypes.string,
  }),
  image: PropTypes.bool,
}

export default Hero
