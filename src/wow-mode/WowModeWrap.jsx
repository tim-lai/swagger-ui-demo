import React from 'react'
import { Component } from 'react'

export default class WowModeWrap extends Component {
  componentDidMount() {
    const { layoutActions } = this.props
    // init the state.filter, so we can use (cloned) FilterContainer as-is
    layoutActions.updateFilter(true)
  }
  render() {
    // listOperationsByTag section.
    const { getComponent } = this.props
    /*
    Note: this causes render error in BaseLayout FilterContainer (by tag)
    const FilterContainer = getComponent("FilterContainer")
    So we clone a version for our use
    Also, yes, this causes double visual render of the FilterContainer, but we are
    just demonstrating we can add and leverage existing functionality.
    We're going to replace the default FilterContainer in a future update
    */
    const WowFilterContainer = getComponent("WowFilterContainer")

    return (
      <div>
        <WowFilterContainer {...this.props} />
      </div>
    )
  }
}
