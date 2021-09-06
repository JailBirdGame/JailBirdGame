import React from "react"

import "./rules.css"
import RuleStep1Img from "./ruleStep1"
import RuleStep2Img from "./ruleStep2"
import RuleStep3Img from "./ruleStep3"

const RulesSection = () => {
  return (
    <div className="rulesSection">
      <div className="contentsSquared leftText">
        <p className="ruleStep__title ruleStep__txt">
          On your turn draw one card
        </p>
        <p className="ruleStep__desc ruleStep__txt">
          If you draw a purple <span className="orange">event card</span> your turn
          ends, and the event happens
        </p>
      </div>
      <RuleStep1Img className="ruleImg ruleImg1 rightImg" />

      <RuleStep2Img className="ruleImg ruleImg2 leftImg" />
      <div className="contentsSquared rightText">
        <p className="ruleStep__title ruleStep__txt">
          Then play as many cards as you want
        </p>
        <p className="ruleStep__desc ruleStep__txt">
          You want to move <span className="orange">evidence</span> cards to
          other people’s hands
        </p>
      </div>

      <div className="contentsSquared leftText">
        <p className="ruleStep__title ruleStep__txt">
          When the penguin police card is drawn, a{" "}
          <span className="orange">police raid</span> begins
        </p>
        <p className="ruleStep__desc ruleStep__txt">
          If you have the most evidence in hand at the end, you’re out
        </p>
      </div>
      <RuleStep3Img className="ruleImg ruleImg3 rightImg" />
    </div>
  )
}

export default RulesSection
