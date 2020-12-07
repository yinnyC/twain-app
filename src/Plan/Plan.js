import React, { Component } from 'react';
import Dragula from 'dragula';
import 'dragula/dist/dragula.css';
import Swimlane from './Swimlane';
import AddCard from './AddCard';
import data from '../Plan-data.json';
import './Plan.css'

class Plan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: {
        backlog: data.filter(client => !client.status || client.status === 'backlog'),
        inProgress: data.filter(client => client.status && client.status === 'in-progress'),
        complete: data.filter(client => client.status && client.status === 'complete'),
      }
    }
    this.swimlanes = {
      backlog: React.createRef(),
      inProgress: React.createRef(),
      complete: React.createRef(),
    }
  }
  renderSwimlane(name, plans, ref) {
    return (
      <Swimlane name={name} plans={plans} dragulaRef={ref}/>
    );
  }

  render() {
    return (
      <div className="Plan-board">
        <div className="col-md-11 mr-auto ml-auto">
          <div className="Add-Button">
            <p className="Greeting">Got a new plan?</p>
            <AddCard/>
          </div>
          <div className="Swimlanes">
            <div className="row">
              <div className="col-md-4">
                {this.renderSwimlane('Backlog', this.state.plans.backlog, this.swimlanes.backlog)}
              </div>
              <div className="col-md-4">
                {this.renderSwimlane('In Progress', this.state.plans.inProgress, this.swimlanes.inProgress)}
              </div>
              <div className="col-md-4">
                {this.renderSwimlane('Complete', this.state.plans.complete, this.swimlanes.complete)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    Dragula([this.swimlanes.backlog.current,
      this.swimlanes.inProgress.current,
      this.swimlanes.complete.current
    ]).on('drop', function (el,target,source,sibling) {
    el.setAttribute("data-status",sibling.getAttribute("data-status")) 
    el.setAttribute("class",sibling.getAttribute("class")) 
  })
  }
}

export default Plan;


  