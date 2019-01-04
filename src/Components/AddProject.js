import React, { Component } from 'react';

class AddProject extends Component {

  constructor() {
      super();
      this.state = {
          newProject: {}
      }
  }

  static defaultProps = {
      categories:[
          'Web Design', 'Web Development','Mobile Development'
      ]
  }

  handleSubmit(e) {
      if(this.refs.title.value === ''){
          alert('Title is required');
      }else {
          this.setState({newProject: {
             id:this.props.projects.length + 1,
             title:this.refs.title.value,
             category:this.refs.category.value
          }
        }, function(){
            //  Passing data to another component
              this.props.addproject(this.state.newProject);
              console.log(this.state);
          });
      }
      e.preventDefault();
  }
  
  render() {

    let categoryOptions = this.props.categories.map(category => {
        return <option key={category} value={category}>{category}</option>
    });
  
    return (
      <div>
        <h3>
            Add Project
            <form  onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label>Title</label><br/>
                    <input type="text" ref="title" />
                </div>
                <div>
                    <label>Category</label><br/>
                    <select ref="category">
                       {categoryOptions}
                    </select>
                </div>
                <br/>
                <input type="submit" value="Submit" />
            </form>
            
        </h3>
      </div>
    );
  }
}

export default AddProject;
