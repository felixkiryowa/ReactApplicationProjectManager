import React, { Component } from 'react';


class ProjectItems extends Component {

  render() {
    // console.log(this.props);
    return (
      <li className="ProjectItems">
           <strong>{this.props.project.title}</strong> :{this.props.project.category}
      </li>
    );
  }
}

export default ProjectItems;
