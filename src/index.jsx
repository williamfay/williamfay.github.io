import "./styles/module.App.css";
import headshot from './assets/headshot.jpg';

//message = `As an innovative software developer experienced in the full software development lifecycle, I am seeking a role as a Software Engineer. I am goal-oriented, collaborative, and creative with a growth mindset and passion for development and learning on all levels. I recently graduated from Burlington Code Academy's software development bootcamp where I honed my skills in the full-stack.`

function Index() {
    return (
        <div class='home_container'>
        <div class='info_container'>
        <h2 class='item_1'>Welcome to my Personal Portfolio</h2>
        <figure class='item_2'>
          <picture>
            <source srcset={headshot} />
            <img src={headshot} />
          </picture>
        </figure>
        <p class='item_3'>As an innovative software developer experienced in the full software development lifecycle, I am seeking a role as a Software Engineer. I am goal-oriented, collaborative, and creative with a growth mindset and passion for development and learning on all levels. I recently graduated from Burlington Code Academy's software development bootcamp where I honed my skills in the full-stack.</p>
        </div>
      </div>
    )
}

export default Index;