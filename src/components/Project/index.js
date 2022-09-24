import React,{useState} from "react";
import budget from "../../assets/icons/budget.jpg"
import quiz from "../../assets/icons/quiz.jpg"
import unleashed from "../../assets/icons/unleashed.jpg"
import music from "../../assets/icons/music.jpg"
import tech from "../../assets/icons/tech.jpg"
import work from "../../assets/icons/work.jpg"
import calendar from "../../assets/icons/calendar.jpg"


function Project () {
const [projects] = useState([
    {
        title: "Budget Tracker",
        image: budget,
        github: "https://github.com/brynnke/budget",
        Deployment: "https://damp-dusk-34281.herokuapp.com/",
        alt: "Budget Tracker Project"
    },
    {
        title: "Coding Quiz",
        image: quiz,
        github: "https://github.com/brynnke/jsquiz",
        Deployment: "https://brynnke.github.io/jsquiz/",
        alt: "Javascript coding quiz"
    },
    {
        title: "Unleashed",
        image: unleashed,
        github: "https://github.com/MegGedde/Unleashed",
        Deployment: "https://unleashed-pets-finder.herokuapp.com/",
        alt: "Unleashed-lost-pet-board"
    },
    {
        title: "Music Guru",
        image: music,
        github: "https://github.com/omarwright07/music-guru",
        Deployment: "https://omarwright07.github.io/music-guru/",
        alt: "Music Guru app"
    },
    {
        title: "Tech Blog",
        image: tech,
        github: "https://github.com/brynnke/mission-techblog/blob/main/README.md",
        Deployment: "https://gentle-falls-48534.herokuapp.com/",
        alt: "Tech Blog"
    },
    {
        title: "Work Scheduler",
        image: work,
        github: "https://github.com/brynnke/work-day-sched",
        Deployment: "https://brynnke.github.io/work-day-sched/",
        alt: "Work day scheduler"
    },
    {
    title: "DEI Calendar",
    image: calendar,
    github: "https://github.com/petehodnefield/project-three",
    Deployment: "https://serene-mesa-60189.herokuapp.com/",
    alt: "DEI Calendar app"
},

])

return (
    <div className='grid-container'>
        <div className='grid'>
          {projects.map(project => (
            <div className='project-container'>
            <h3 className='project-name'>{project.title}</h3>
            <img
                src={project.image}
                alt={project.alt}
                className='project-img'
                key={project.alt}
            />
            <a className='project-link'key={project.github} href={project.github} rel='noreferrer' target='_blank'>GitHub</a>
            <a className='project-link' key={project.Deployment} href={project.Deployment} rel='noreferrer' target='_blank'>Deployment</a>
            </div>
          ))}
        </div>
    </div>
)
 }

export default Project



