import React from 'react'
import { Component } from 'react'
import Logo from './wow-horde-logo.png'
import './wow-logo.scss'

export default class WowHordeLogo extends Component {
  render() {
    return (
      <div className="wow-logo wow-logo-horde">
        <img src={ Logo } alt="Swagger UI with Horde Logo" />
      </div>
    )
  }
}
