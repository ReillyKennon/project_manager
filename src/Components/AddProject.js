import React, { Component } from 'react';
import uuid from 'uuid';




class AddProject extends Component {
// SET CONSTRUCTOR
  constructor() {
    super()
    this.state = {
      newProject: {}
    }
  }

// VARIABLES
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

// FUNCTIONS
  handleSubmit(e) {
    if(this.refs.title.value === ''){
      alert('Title is required')
    } else {
      this.setState({newProject: {
        id: uuid.v4(), 
        title: this.refs.title.value,
        category: this.refs.category.value
      }},
        function() {
          this.props.AddProject(this.state.newProject)
        })
    }
    e.preventDefault()
  }


  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category} >{category}</option>
    })



    return (
      <div>
        <h3>Add Project</h3>

        <form onSubmit={this.handleSubmit.bind(this)}  >

          <div>
            <lable>Title</lable><br />
            <input type="text" ref="title" />
          </div>

          <div>
            <lable>Category</lable><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>

          <input type="submit" value="submit"/>


        </form>
      </div>
    );
  }
}

export default AddProject;
