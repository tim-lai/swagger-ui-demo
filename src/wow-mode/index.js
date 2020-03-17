import React from 'react'
import TopBarComponent from './topbar'
import WowHordeLogoComponent from './WowHordeLogo'
import WowFactionComponent from './WowFactionComponent'
import WowFilterContainer from './WowFilterContainer'
import SearchContainer from './SearchContainer'
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
              url = system.specSelectors.url()
              system.wowModeActions.setEnabled()
            }
            else if(url === 'hordemode') {
              console.log('set horde')
              url = system.specSelectors.url()
              system.wowModeActions.setFactionHorde()
            }
            else if(url === 'alliancemode') {
              console.log('set alliance')
              url = system.specSelectors.url()
              system.wowModeActions.setFactionAlliance()
            }
            // default action
            ori(url)
          },
          // topbar url onSubmit, if toggleword, do not load a new api definition
          download: (ori, system) => (url) => {
            if(url === 'wowmode' || url === 'hordemode' || url === 'alliancemode') {
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
      WowHordeLogo: WowHordeLogoComponent,
      TopbarWowMode: TopBarComponent,
      WowFaction: WowFactionComponent,
      WowFilterContainer: WowFilterContainer,
      SearchContainer: SearchContainer,
    },
    wrapComponents: {
      Topbar: (Ori) => (props) => {
        const TopbarWowMode = props.getComponent("TopbarWowMode", true)
        return <TopbarWowMode {...props} />
      },
      BaseLayout: (Ori) => (props) => {
        const SearchContainer = props.getComponent('SearchContainer')
        return (
          <div>
            <SearchContainer {...props} />
            <Ori {...props} />
          </div>
        )
      }
    }
  }
}
