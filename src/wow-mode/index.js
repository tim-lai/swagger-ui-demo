import React from 'react'
import TopBarComponent from './topbar'
import WowLogoComponent from './WowLogoComponent'
import WowFactionComponent from './WowFactionComponent'
import WowFilterContainer from './WowFilterContainer'
import WowModeWrap from './WowModeWrap'
import FilterContainer from './filter'
import WowOperations from './WowOperations'
import './style.scss'


export default function WowMode() {
  return {
    initialState: {
      wowMode: {
        isEnabled: true,
        isFactionHorde: true,
      }
    },
    statePlugins: {
      spec: {
        wrapActions: {
          // this is a toggleword enable in topBar, to enable a "mode"
          updateUrl: (ori, system) => (url) => {
            if(url === 'wowmode') {
              // console.log('set wow mode')
              url = system.specSelectors.url()
              system.wowModeActions.setEnabled()
            }
            else if(url === 'swaggermode') {
              // console.log('set swagger mode')
              url = system.specSelectors.url()
              system.wowModeActions.setDisabled()
            }
            else if(url === 'hordemode') {
              // console.log('set horde mode')
              url = system.specSelectors.url()
              system.wowModeActions.setFactionHorde()
            }
            else if(url === 'alliancemode') {
              // console.log('set alliance mode')
              url = system.specSelectors.url()
              system.wowModeActions.setFactionAlliance()
            }
            // default action
            ori(url)
          },
          // topbar url onSubmit, if toggleword, do not load a new api definition
          download: (ori, system) => (url) => {
            if(url === 'wowmode' || url === 'swaggermode' || url === 'hordemode' || url === 'alliancemode') {
              return
            }
            ori(url)
          }
        }

      },
      // editor: {
      //
      // },
      wowMode: {
        actions: {
          setEnabled(enabled=true) {
            return {
              type: 'WOW_MODE_ENABLED',
              payload: !!enabled
            }
          },
          setDisabled() {
            return {
              type: 'WOW_MODE_DISABLED',
              payload: false
            }
          },
          toggleFaction(currentFactionIsHorde=true) {
            return {
              type: 'WOW_MODE_TOGGLE_IS_FACTION_HORDE',
              payload: !currentFactionIsHorde
            }
          },
          setFactionHorde() {
            return {
              type: 'WOW_MODE_SET_IS_FACTION_HORDE',
              payload: true
            }
          },
          setFactionAlliance() {
            return {
              type: 'WOW_MODE_SET_IS_FACTION_ALLIANCE',
              payload: false
            }
          },
        },
        selectors: {
          getIsEnabled(state) {
            return state.get('isEnabled')
          },
          getIsFactionHorde(state) {
            return state.get('isFactionHorde')
          }
        },
        reducers: {
          'WOW_MODE_ENABLED': (state, action) => {
            return state.set('isEnabled', action.payload)
          },
          'WOW_MODE_DISABLED': (state, action) => {
            return state.set('isEnabled', action.payload)
          },
          'WOW_MODE_TOGGLE_IS_FACTION_HORDE': (state, action) => {
            return state.set('isFactionHorde', action.payload)
          },
          'WOW_MODE_SET_IS_FACTION_HORDE': (state, action) => {
            return state.set('isFactionHorde', action.payload)
          },
          'WOW_MODE_SET_IS_FACTION_ALLIANCE': (state, action) => {
            return state.set('isFactionHorde', action.payload)
          }
        }
      }
    },
    components: {
      WowLogo: WowLogoComponent,
      TopbarWowMode: TopBarComponent,
      WowFaction: WowFactionComponent,
      WowFilterContainer: WowFilterContainer,
      WowModeWrap: WowModeWrap,
      WowOperations: WowOperations,
    },
    wrapComponents: {
      Topbar: (Ori) => (props) => {
        const TopbarWowMode = props.getComponent("TopbarWowMode", true)
        return <TopbarWowMode {...props} />
      },
      BaseLayout: (Ori) => (props) => {
        const WowModeWrap = props.getComponent('WowModeWrap')
        return (
          <div>
            <WowModeWrap {...props} />
            <Ori {...props} />
          </div>
        )
      },
      FilterContainer: (Ori) => (props) => {
        // expect return a wrapped container that will return null
        return <FilterContainer {...props} />
      },
      operations: (Ori) => (props) => {
        // note the (lack of) capitalization of the component we are wrapping
        const WowOperations = props.getComponent('WowOperations', true)
        return <WowOperations {...props} />
      },
    }
  }
}
