import '../styles/module.projects.css';
import jeopardyImg from '../assets/jeopardy_screenshot.png';

export default function Projects() {
    return (
        <>
            <div class='projects_header_container'>
                <h1 class='header_text'>My Projects</h1>
                <h2 class='header_info'>*All projects are considered works in progress and are subject to change*</h2>
            </div>
            <div class='projectOne_container'>
                <img src={jeopardyImg} alt='Image of jeopardy project' />
                <div class='projectOne_header_container'>
                    <h1>Jeopardy Project</h1>
                    <h2>About</h2>
                </div>
            </div>
        </>
    )
}