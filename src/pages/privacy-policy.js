import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Waves from "../components/waves"

const BASE_TEXT = "w-full my-2 leading-tight w-8 text-gray-800"
const HEADER_TEXT = BASE_TEXT + " text-3xl"

const PrivacyPolicyPage = () => (
  <Layout>
    <Hero title="Privacy Policy" image={false} />

    <Waves.GradientToWhite />

    <section className="bg-white py-8 xl:px-40 md:px-10">
      <p className={BASE_TEXT}>
        At WaffleHacks, accessible from wafflehacks.org, one of our main
        priorities is the privacy of our visitors. This Privacy Policy document
        contains types of information that is collected and recorded by
        WaffleHacks and how we use it.
      </p>
      <p className={BASE_TEXT}>
        If you have additional questions or require more information about our
        Privacy Policy, do not hesitate to contact us.
      </p>
      <p className={BASE_TEXT}>
        This Privacy Policy applies only to our online activities and is valid
        for visitors to our website with regards to the information that they
        shared and/or collect in WaffleHacks. This policy is not applicable to
        any information collected offline or via channels other than this
        website.
      </p>

      <h3 className={HEADER_TEXT}>Consent</h3>

      <p className={BASE_TEXT}>
        By using our website, you hereby consent to our Privacy Policy and agree
        to its terms.
      </p>

      <h3 className={HEADER_TEXT}>Information we collect</h3>

      <p className={BASE_TEXT}>
        The personal information that you are asked to provide, and the reasons
        why you are asked to provide it, will be made clear to you at the point
        we ask you to provide your personal information.
      </p>
      <p className={BASE_TEXT}>
        If you contact us directly, we may receive additional information about
        you such as your name, email address, phone number, the contents of the
        message and/or attachments you may send us, and any other information
        you may choose to provide.
      </p>
      <p className={BASE_TEXT}>
        When you register for an Account, we may ask for your contact
        information, including items such as name, address, email address, and
        telephone number.
      </p>

      <h3 className={HEADER_TEXT}>How we use your information</h3>

      <p className={BASE_TEXT}>
        We use the information we collect in various ways, including to:
      </p>
      <ul className={BASE_TEXT + " list-disc"}>
        <li>Provide, operate, and maintain our website</li>
        <li>
          Communicate with you, either directly or through one of our partners,
          to provide you with updates and other information relating to the
          website, and for marketing and promotional purposes
        </li>
        <li>Send you emails</li>
      </ul>

      <h3 className={HEADER_TEXT}>Log files</h3>

      <p className={BASE_TEXT}>
        WaffleHacks follows a standard procedure of using log files. These files
        log visitors when they visit websites. All hosting companies do this and
        a part of hosting services’ analytics. The information collected by log
        files include internet protocol (IP) addresses, browser type, Internet
        Service Provider (ISP), date and time stamp, referring/exit pages, and
        possibly the number of clicks. These are not linked to any information
        that is personally identifiable. The purpose of the information is for
        analyzing trends, administering the site, tracking users’ movement on
        the website, and gathering demographic information.
      </p>

      <h3 className={HEADER_TEXT}>Third Party Privacy Policies</h3>

      <p className={BASE_TEXT}>
        WaffleHacks’s Privacy Policy does not apply to other websites. Thus, we
        are advising you to consult the respective Privacy Policies of these
        third-party ad servers for more detailed information. It may include
        their practices and instructions about how to opt-out of certain
        options.
      </p>
      <p className={BASE_TEXT}>
        You can choose to disable cookies through your individual browser
        options. To know more detailed information about cookie management with
        specific web browsers, it can be found at the browsers’ respective
        websites.
      </p>

      <h3 className={HEADER_TEXT}>
        CCPA Privacy Rights (Do Not Sell My Personal Information)
      </h3>

      <p className={BASE_TEXT}>
        Under the CCPA, among other rights, California consumers have the right
        to:
      </p>
      <ul className={BASE_TEXT + " list-disc"}>
        <li>
          Request that a business that collects a consumer’s personal data
          disclose the categories and specific pieces of personal data that a
          business has collected about consumers.
        </li>
        <li>
          Request that a business delete any personal data about the consumer
          that a business has collected. Request that a business that sells a
          consumer’s personal data, not sell the consumer’s personal data.
        </li>
        <li>
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us.
        </li>
      </ul>

      <h3 className={HEADER_TEXT}>GDPR Data Protection Rights</h3>

      <p className={BASE_TEXT}>
        We would like to make sure you are fully aware of all of your data
        protection rights. Every user is entitled to the following:
      </p>
      <ul className={BASE_TEXT + " list-disc"}>
        <li>
          The right to access – You have the right to request copies of your
          personal data.
        </li>
        <li>
          The right to rectification – You have the right to request that we
          correct any information you believe is inaccurate. You also have the
          right to request that we complete the information you believe is
          incomplete.
        </li>
        <li>
          The right to erasure – You have the right to request that we erase
          your personal data, under certain conditions.
        </li>
        <li>
          The right to restrict processing – You have the right to request that
          we restrict the processing of your personal data, under certain
          conditions.
        </li>
        <li>
          The right to object to processing – You have the right to object to
          our processing of your personal data, under certain conditions.
        </li>
        <li>
          The right to data portability – You have the right to request that we
          transfer the data that we have collected to another organization, or
          directly to you, under certain conditions. If you make a request, we
          have one month to respond to you.
        </li>
      </ul>
      <p className={BASE_TEXT}>
        If you would like to exercise any of these rights, please contact us.
      </p>

      <h3 className={HEADER_TEXT}>Children’s Information</h3>

      <p className={BASE_TEXT}>
        Another part of our priority is adding protection for children while
        using the internet. We encourage parents and guardians to observe,
        participate in, and/or monitor and guide their online activity.
      </p>
      <p className={BASE_TEXT}>
        WaffleHacks does not knowingly collect any Personal Identifiable
        Information from children under the age of 13. If you think that your
        child provided this kind of information on our website, we strongly
        encourage you to contact us immediately and we will do our best efforts
        to promptly remove such information from our records.
      </p>
    </section>
  </Layout>
)

export default PrivacyPolicyPage
