import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      projects : [ ]
    }
  }

  componentWillMount(){
    this.setState({projects:[
      {
        id:1,
        title: 'Business Websites',
        category:'Web Design'
      },
      {
        id:2,
        title: 'Social App',
        category:'Mobile Development'
      },
      {
        id:3,
        title: 'Ecommerce Shopping Cart',
        category:'Web Development'
      }
    ]
  });
    
  }

  handleAddProject(project){
    // console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index,1);
    this.setState({projects:projects});

  }
  
  render() {
    return (
      <div className="App">
        <AddProject addproject={this.handleAddProject.bind(this)} projects={this.state.projects} />
        <Projects projects={this.state.projects}  onDelete={this.handleDeleteProject.bind(this)} />
      </div>
    );
  }
}

export default App;
