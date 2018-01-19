import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TagsNav from './TagsNav'
import { switchTag } from './reducers/active-tag'

class TagsNavContainer extends Component {
  render () {
    return (
      <TagsNav {...this.props} />
    )
  }
}

TagsNavContainer.propTypes = {
  tags: PropTypes.array,
  activeTag: PropTypes.object,
  onSwitchTag: PropTypes.func
}

const mapStateToProps = state => ({
  activeTag: state.activeTag
})

const mapDispatchToProps = dispatch => ({
  onSwitchTag: tag => dispatch(switchTag(tag))
})

export default connect(mapStateToProps, mapDispatchToProps)(TagsNavContainer)
