import React from 'react'
import { Component } from 'react'
import LogoHorde from './wow-logo-horde.png'
import LogoAlliance from './wow-alliance-logo.png'
import './wow-logo.scss'

export default class WowLogo extends Component {
  render() {
    const { wowModeSelectors } = this.props
    let isFactionHorde = wowModeSelectors.getIsFactionHorde()
    if (!isFactionHorde) {
      return (
        <div className="wow-logo wow-logo-alliance">
          <img src={ LogoAlliance } alt="Swagger UI with Alliance Logo" />
        </div>
      )
    }
    return (
      <div className="wow-logo wow-logo-horde">
        <img src={ LogoHorde } alt="Swagger UI with Horde Logo" />
      </div>
    )
  }
}
