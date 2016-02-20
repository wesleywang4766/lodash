import React from 'react';

import styles from './styles.css';

class List extends React.Component {
  render() {
    const ComponentToRender = this.props.render;
    let content = null;
    if (this.props.items) {
      content = this.props.items.map((item, index) => {
        return (
          <ComponentToRender key={'item-' + index } item={item} />
        );
      });
    } else {
      content = (<ComponentToRender />);
    }

    return (
      <div className={ styles.listWrapper }>
        <ul className={ styles.list }>
          { content }
        </ul>
      </div>
    );
  }
}

export default List;
