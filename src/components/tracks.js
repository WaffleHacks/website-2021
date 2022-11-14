import React, { Fragment, useRef, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"

const TRACKS = [
  {
    name: "Education",
    description:
      "In the past year, education has looked different. Now, we rely on our computers to be our teachers. Whether it be connecting with our classmates on Zoom or learning new skills from online resources, we can all agree that educational technology is no longer the future. It is our present.",
    questions: [
      "How can technology help students host or create student-led events?",
      "How can technology be used to introduce more students into STEM?",
      "In what ways can classmates and students of simliar interests be connected?",
    ],
  },
  {
    name: "Small Businesses/Restaurants",
    description:
      "Small businesses and restaurants have had to face a new reality during the pandemic. The transition from having a lively customer experience to transactional interactions due to health and safety concerns was something we did not expect to happen. Some businesses and restaurants were able to adapt to these changes, while others suffered. With this, the way we conduct local business is no longer what it used to be.",
    questions: [
      "What can be done to promote small businesses/restaurants in the most effective way?",
      "How can you improve a current system that a specific small business is using to be better?",
      "What’s the best way to help your local small businesses/restaurants? How is technology involved?",
    ],
  },
  {
    name: "Student Food Insecurity",
    description:
      "During the pandemic, student food insecurity became more of a struggle than it was before lockdown. Students who relied on school lunches and meal plans were left with little to no options once schools across the nation shut down. Even with local and national organizations helping these students, things like safe distribution of food and accessibility to resources remain an issue.",
    questions: [
      "How can you make sure food distribution places can keep up with the ongoing need of the community?",
      "How can the community get involved in food access and distribution resources?",
      "What is the most important part of safe food distribution?",
    ],
  },
]

const Card = ({ name, description, questions }) => {
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef()

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          open={open}
          onClose={setOpen}
          as="div"
          static
          initialFocus={cancelButtonRef}
          className="fixed z-10 inset-0 overflow-y-auto"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 sm:mt-0 sm:ml-4 text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-3xl leading-6 font-medium text-gray-900"
                      >
                        {name}
                      </Dialog.Title>
                      <div className="mt-5">
                        <p className="text-base text-gray-600">{description}</p>
                        <br />
                        <h5 className="text-xl leading-3 font-medium mb-2">
                          Guiding Questions:
                        </h5>
                        <ul className="list-disc">
                          {questions.map((question, index) => (
                            <li key={index} className="text-gray-600">
                              {question}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none ring-2 ring-amber-600 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-1/2 md:w-1/4 p-6 flex flex-col flex-grow flex-shrink text-center"
      >
        <div className="w-full flex-1 bg-white rounded-lg overflow-hidden bg-amber-50 hover:shadow-lg transition-shadow">
          <div className="w-full font-bold text-xl text-gray-800 p-6">
            {name}
          </div>
        </div>
      </button>
    </>
  )
}

const Tracks = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h3 className="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800">
          Tracks
        </h3>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>

        {TRACKS.map((track, index) => (
          <Card key={index} {...track} />
        ))}
      </div>
    </section>
  )
}

export default Tracks
