import React from 'react';
import R from 'ramda';
import Stop from './Stop.jsx';

class CheckpointMap extends React.Component {

  constructor(){
    this.state = {
      height: 245,
      width: 418,
      padding: 30,
      radius: 90
    }
  }

  render() {
    let { height, width, radius, padding } = this.state;
    let { model, handleComplete, handleHover } = this.props;
    let checkpoint = model;
    let baseLine = height / 2;
    let center = width / 2;
    let x = center;
    let y = baseLine;
    let params = { x, y, radius, center, checkpoint }

    return (
      <svg viewBox={ `0 0 ${width} ${height}` }width={ width } height={ height } className="map">
        <line className="line"
          x1={ 0}
          y1={ baseLine }
          x2={ width }
          y2={ baseLine }
          strokeWidth="25"/>
          <Stop handleHover={ handleHover.bind(this) } handleComplete={ handleComplete.bind(this) } params={ params }/>
      </svg>
    )
  }
};

CheckpointMap.propTypes = {
  model: React.PropTypes.object
}

export default CheckpointMap;
