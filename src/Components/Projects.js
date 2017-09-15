import React, { Component } from 'react';
import ProjectItems from './ProjectItems'



class Projects extends Component {

  //FUNCTIONS
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {

    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        console.log(project);
        return (
          <ProjectItems onDelete={this.deleteProject.bind(this)} key = {project.title} project = {project} />
        )
      })
    }

    return (
      <div className="Projects">
        <h3>Latest Projects</h3>
        { projectItems }
      </div>
    );
  }
}

Projects.proptypes = {
  projects: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default Projects;
