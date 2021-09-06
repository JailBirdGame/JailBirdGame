import React from "react"
import RulesSection from "../components/Rules"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"

import "./index.css"
import "../components/video.css"

const HowToPlayPage = () => (
  <Layout title="How to Play" padding>
    <SEO title="How to Play" description="Learn how to play the game!" />
    <h1>How to Play</h1>
    <h3 className="videoText">
      Don't be a birdbrain! Learn how to play the whimsical game of JailBird.
    </h3>
    <div className="videoContainer">
      <Video
        videoSrcURL="https://www.youtube.com/embed/8sLe1g1j1XM"
        videoTitle="JailBird: How to Play"
      />
    </div>
    <RulesSection />
    <br />
    <br />
    <div className="rulesSection">
      <div className="contentsSquared leftText">
        <p className="ruleStep__title ruleStep__txt">
          Other Rules
        </p>
        <ul className="ruleStep__desc ruleStep__txt">
          <li className="ruleStep__txt">After the police raid, place the police card at the bottom of the deck</li>
          <li className="ruleStep__txt">When discarding cards, don't discard evidence cards!</li>
          <li className="ruleStep__txt">If no one has evidence at the police raid, no one goes to jail. Place the police card at the bottom of the deck</li>
        </ul>
      </div>
      <div className="contentsSquared rightText">
        <p className="ruleStep__title ruleStep__txt">
          Tie Breaker!
        </p>
        <p className="ruleStep__desc ruleStep__txt">
          If two or more players tie for the same amount of evidence at the end of the police raid:
        </p>
        <ul className="ruleStep__desc ruleStep__txt">
          <li className="ruleStep__txt">The player with the least amount of cards goes to jail</li>
          <li className="ruleStep__txt">If players are still tied, the player with the least amount of Action cards in hand goes to jail</li>
          <li className="ruleStep__txt">If they're still tied, they must crow like a rooster</li>
        </ul>
      </div>
    </div>


  </Layout>
)

export default HowToPlayPage
