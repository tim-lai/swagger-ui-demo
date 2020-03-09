import React from 'react'
import TopBarComponent from './topbar'
import WowHordeLogoComponent from './WowHordeLogo'
import './style.scss'

// class WowModeComponent extends React.Component {
//
// }

export default function WowMode() {
  return {
    // initialState: {
    //   wowMode: {
    //     enabled: true
    //   }
    // },
    // statePlugins: {
    //
    // },
    components: {
      WowHordeLogo: WowHordeLogoComponent,
      TopbarWowMode: TopBarComponent,
    },
    wrapComponents: {
      Topbar: (Ori) => (props) => {
        const TopbarWowMode = props.getComponent("TopbarWowMode", true)
        return <TopbarWowMode {...props} />
      },
      // BaseLayout: (Ori) => (props) => {
      //   return (
      //
      //   )
      // }
    }
  }
}
