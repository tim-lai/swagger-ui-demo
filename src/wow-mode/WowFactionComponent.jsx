import React from 'react'
import { Component } from 'react'

export default class WowFactionComponent extends Component {
  constructor(props) {
    super(props)
    this.toggleFaction = this.toggleFaction.bind(this)
  }
  toggleFaction() {
    console.log('start the toggle')
    const { wowModeSelectors } = this.props
    let isCurrentFactionHorde = wowModeSelectors.getIsFactionHorde()
    // test case 1 (pass): individually set horde or alliance
    // if (isCurrentFactionHorde) {
    //   console.log('should set alliance')
    //   this.props.wowModeActions.setFactionAlliance()
    // } else {
    //   console.log('should set horde')
    //   this.props.wowModeActions.setFactionHorde()
    // }
    // test case 2 (pass): toggle current state
    this.props.wowModeActions.toggleFaction(isCurrentFactionHorde)
  }

  render() {
    const { wowModeSelectors } = this.props
    let isFactionHorde = wowModeSelectors.getIsFactionHorde()
    if (isFactionHorde) {
      return (
        <div className="wow-mode-horde">
          <span onClick={()=> (this.toggleFaction())}>HORDE</span>
        </div>
      )
    }
    return (
      <div className="wow-mode-alliance">
        <span onClick={()=> (this.toggleFaction())}>ALLIANCE</span>
      </div>
    )
  }
}
