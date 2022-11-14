import React from "react"

import descriptionImage from "../images/description.png"
import originImage from "../images/origin.png"

const Description = () => {
  return (
    <section className="bg-white py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          WaffleHacks
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>

        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Our Origin
            </h3>
            <p className="text-gray-600 mb-8">
              Due the pandemic, a group of first year college students were
              forced to experience a summer of opportunity online. Stuck in
              quarantine, it was hard to form connections, especially going into
              their freshman year of college. However, this did not stop them
              from them creating a warm and supportive community. To pay homage
              to their unbreakable bond, they worked together and created
              WaffleHacks. The purpose of WaffleHacks is to inspire high school
              students and beyond to look within their communities and build new
              opportunities that would benefit the world around them.
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <img
              className="w-auto sm:h-80 mx-auto"
              src={originImage}
              alt="placeholder"
            />
          </div>
        </div>

        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <img
              className="w-auto sm:h-80 mx-auto"
              src={descriptionImage}
              alt="placeholder"
            />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                What is WaffleHacks
              </h3>
              <p className="text-gray-600 mb-8">
                WaffleHacks is a 48-hour student-organized hackathon working to
                bring technical solutions to your local communities and small
                businesses. We welcome all students, of high school level and
                beyond, and of all technical proficiency levels, to join us on
                August 27th - 29th, 2021. Select winning hackathon projects are
                eligible for exclusive prizes from our awesome sponsors and
                partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Description
