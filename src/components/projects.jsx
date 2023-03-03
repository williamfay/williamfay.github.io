import '../styles/module.projects.css';
import jeopardyImg from '../assets/jeopardy_screenshot.png';
import bcImg from '../assets/contact-page-ss.png';
import portfolioImg from '../assets/portfolio-ss.png';
import zorkImg from '../assets/zork-ss.png'

export default function Projects() {
    return (
        <>
            <div class="project_main_container">
                <div class='projects_header_container'>
                    <h1 class='header_text'>My Projects</h1>
                    <h2 class='header_info'>***All projects are considered works in progress and are subject to change***</h2>
                </div>
                <div class="projects_portfolio_container">
                    <h1 class="portfolio_text">Portfolio Site</h1>
                    <h2 class="portfolio_info">My multi-page custom portfolio was built from 
                        scratch using React.js. 
                        I utilize React Router in order to 
                        navigate pages. The site demonstrates my expertise in CSS 
                        and HTML through custom and personal styling.
                    </h2>
                    <figure>
                        <img class="projects_img" src={portfolioImg} />
                    </figure>
                </div>
                <div class="projects_jeopardy_container">
                    <h1 class="jeopardy_text">Jeopardy Game</h1>
                    <h2 class="jeopardy_info">
                        This two player game styled after Jeopardy 
                        is built with vanilla JavaScript, HTML, and CSS.
                        The game throws out questions and scores as indicated
                        by an object of data organized by round, value, and category. 
                    </h2>
                    <figure>
                        <img class="projects_img" src={jeopardyImg}/>
                    </figure>
                </div>
                <div class="projects_bc_container">
                    <h1 class="bc_text">Burlington Code Website Build</h1>
                    <h2 class="bc_info">
                        This was my cohort's capstone project for our bootcamp.
                        The site has a Next.js frontend and a MongoDB backend.
                        It allows venues to post time available for events
                        to be hosted and groups to select avaible time for their events.
                        The site also has a contact page that sends contact data to
                        the database and is mobile friendly.
                    </h2>
                    <figure>
                        <img class="projects_img" src={bcImg} />
                    </figure>
                </div>
                <div class="projects_zork_container">
                    <h1 class="zork_text">Zork-Style Haunted House Game</h1>
                    <h2 class="zork_info">
                        This game styled after Zork has its user navigate a haunted house,
                        retrieving items in order to access different rooms and eventually
                        escape the house. This game utilizes JavaScript object-oriented
                        programming to create a player class.
                    </h2>
                    <figure>
                        <img class="projects_img" src={zorkImg} />
                    </figure>
                </div>
            </div>
        </>
    )
}