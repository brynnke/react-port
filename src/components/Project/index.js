import React,{useState} from "react";
import budget from "../../assets/icons/budget.jpg"

function Project () {
const [projects] = useState([
    {
        title: "Budget Tracker",
        image: budget,
        github: "https://github.com/brynnke/budget",
        Deployment: "https://damp-dusk-34281.herokuapp.com/",
        alt: "Budget Tracker Project"
    },
])

return (
    <div className='grid-container'>
        <h2 className='section-header'>Projects</h2>
        <div className='grid'>
          {projects.map(project => (
            <div className='project-container'>
            <h3 className='project-name'>{project.title}</h3>
        
    </div>
)
 }

export default Project



