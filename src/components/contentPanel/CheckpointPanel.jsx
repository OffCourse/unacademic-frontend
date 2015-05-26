import React from 'react';
import R from 'ramda';
import classnames from 'classnames';

import CheckpointMap from '../maps/CheckpointMap.jsx';
import ResourceList from './ResourceList.jsx'
import DescriptionSection from './sections/DescriptionSection.jsx'
import Actions from '../../actions/index';


class CheckpointPanel extends React.Component {

  constructor(props){
    super(props);
    this.name = 'panel';
  }

  handleComplete(item){
    let id = this.props.model.id;
    let checkpoint ={ id };
    Actions.toggleComplete({ checkpoint });
  }

  handleHover(item, status){
    let { context } = this.props;
    let selection = this._getSelection(item);
    Actions.setHighlight(selection, status, context);
  }

  _getSelection(item){
    let { model } = this.props;
    let { id } = model;
    let checkpoint = { id };
    let resource = { id: item };
    return { checkpoint, resource };
  }

  classes(){
    return classnames({
      [this.name]: true
    });
  }

  render() {
    let { model, context } = this.props;
    let { title, highlight, introduction, instructions, resources, waypoint } = model;
    let type = model.constructor.name.toLowerCase();

    let instructionsPanel = ()=> {
      return (
        <section>
          <h1>Instructions</h1>
          <ul>
          { R.mapIndexed((paragraph, index) => (<li className="editable" key={ index }>{ paragraph }</li>), instructions) }
          </ul>
        </section>
      )
    };

    return (
      <div className={ this.classes() }>

        <section className={ `step_2 ${this.name}_header` }>
          <CheckpointMap handleHover={ this.handleHover.bind(this) } handleComplete={ this.handleComplete.bind(this, null) } model={ model }/>
        </section>

        <section className={ `${this.name}_main` }>

          <hgroup>
            <h1 className="title editable">{ title }</h1>
          </hgroup>

          { context === 'sidebar' && <DescriptionSection description={ introduction }/> }
          { context === 'sidebar' && instructionsPanel() }
          { context === 'card' && <ResourceList resources={ resources } /> }
        </section>
      </div>
    )
  }
};

CheckpointPanel.propTypes = {
  model: React.PropTypes.object
}

export default CheckpointPanel;
