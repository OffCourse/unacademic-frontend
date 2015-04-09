import React from 'react';
import Actions from '../../../../actions/index';
import R from 'ramda';
import _ from 'lodash';

class LevelButton extends React.Component {

  render() {
    let isActive = this.props.isActive ? 'active' : '';
    let [level, value] = this.props.level;
    let classes = `${level}Button ${isActive}`;
    let title = _.capitalize(level);
    return <button key={ level } disabled={ !value } className={ classes }>{ title }</button>
  }
};

LevelButton.propTypes = {
  level: React.PropTypes.array.isRequired,
  isActive: React.PropTypes.bool
};

export default LevelButton;