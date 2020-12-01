import React, { Component } from 'react';
import Card from './Card';

class Swimlane extends Component {
  render() {
    const cards = this.props.plans.map(plan => {
      return (
        <Card
          key={plan.id}
          id={plan.id}
          name={plan.title}
          description={plan.desc}
          date={plan.date}
          status={plan.status}
        />
      );
    })
    return (
      <div className="Swimlane-column">
        <div className="Swimlane-title">{this.props.name}</div>
        <div className="Swimlane-dragColumn" ref={this.props.dragulaRef}>
          {cards}
        </div>
      </div>);
  }

}

export default Swimlane;