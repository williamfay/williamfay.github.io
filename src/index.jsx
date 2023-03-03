import "./styles/module.App.css";
import headshot from './assets/alps-photo.jpeg';

const linkedIn = `https://www.linkedin.com/in/william-r-fay/`;
function goToLinkedIn() {
  window.location.href = linkedIn
}
const gitHub = `https://github.com/williamfay`;
//message = `As an innovative software developer experienced in the full software development lifecycle, I am seeking a role as a Software Engineer. I am goal-oriented, collaborative, and creative with a growth mindset and passion for development and learning on all levels. I recently graduated from Burlington Code Academy's software development bootcamp where I honed my skills in the full-stack.`

function Index() {
    return (
      <div class='flex_landing_div'>
      <div class='main_landing_container'>
        <div class='header_landing_container'><h1 class='item_1_landing'>Welcome to my Personal Portfolio!</h1></div>
        <div class='info_landing_container'>
        <figure class='item_2_landing'>
          <picture>
            <source srcset={headshot} />
            <img class="headshot_img" src={headshot} />
          </picture>
        </figure>
        <h2 class='item_3_landing'>I'm an innovative software 
        developer experienced 
        in the full software development lifecycle. 
        I am goal-oriented, collaborative, 
        and creative with a passion for 
        development and learning on all levels. 
        </h2>
        </div>
        <div class='icons_container1_landing'>
        <i class="devicon-html5-plain-wordmark"></i>
        <i class="devicon-javascript-plain"></i>
        <i class="devicon-nextjs-original-wordmark"></i>
        <i class="devicon-python-plain"></i>
        <i class="devicon-mongodb-plain-wordmark"></i>
        <i class="devicon-visualstudio-plain"></i>
        <i class="devicon-css3-plain-wordmark"></i>
        <i class="devicon-react-original-wordmark"></i>
        <i class="devicon-nodejs-plain"></i>
        <i class="devicon-express-original"></i>
        <i class="devicon-github-original"></i>
        <i class="devicon-git-plain-wordmark"></i>
        </div>
        <div class="contact_me">
          <h1 class='contact_me_header'>Don't be a stranger!</h1>
          <h2 class='contact_me_subheader'>find me at the following places...</h2>
          <i class="devicon-linkedin-plain"></i>
          <i class="devicon-github-original-wordmark"></i>
        </div>
      </div>
      </div>
    )
}

export default Index;