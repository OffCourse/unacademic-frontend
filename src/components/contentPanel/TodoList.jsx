import React from 'react';
import R from 'ramda';
import TodoListItem from './TodoListItem.jsx';


class TodoList extends React.Component {

  render() {
    let { collection, handleComplete, handleHover } = this.props;

    let items = R.mapIndexed((item, index) => {

      return (
        <TodoListItem key={ index }
          checkDone={ handleComplete.bind(this) }
          handleHover={ handleHover.bind(this) }
          item={ item }/>
      )
    }, collection);

    return (
      <section className="panel_section todolist">
        <h1>Resources</h1>
        <ul>
          { items }
        </ul>
      </section>
    )
  }
};

TodoList.propTypes = {
  collection: React.PropTypes.array.isRequired,
  handleComplete: React.PropTypes.func.isRequired,
  handleHover: React.PropTypes.func.isRequired
}

export default TodoList;