import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
          Project component
          {this.props.test}
      </div>
    );
  }
}

export default Projects;
