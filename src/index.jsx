import "./styles/module.App.css";
import headshot from '../public/alps-photo.jpeg';
import FadeIn from './components/fade-in';

function Index() {
  
  const linkedIn = `https://www.linkedin.com/in/william-r-fay/`;
  const gitHub = `https://github.com/williamfay`;
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };


    return (
      <FadeIn>
      <div class='flex_landing_div'>

            <div class='header_landing_container'>
              <h1 class='item_1_landing'>Welcome to my Personal Portfolio!</h1>
            </div>

        <div class='info_landing_container'>
          <figure class='item_2_landing'>
            <picture>
              <source srcset={headshot} />
              <img class="headshot_img" src={headshot} alt="picture of porfolio creator hiking in Alps" />
            </picture>
          </figure>
          <h2 class='item_3_landing'>Hi, I'm Will! I'm an innovative software 
          developer experienced 
          in the full software development lifecycle. 
          I am goal-oriented, collaborative, 
          and creative with a passion for 
          development and learning on all levels. 
          </h2>
          <h2 class='item_4_landing'>**Mobile-friendly updates coming soon!**</h2>
        </div>
        <div class='icons_container1_landing'>
          <i class="devicon-html5-plain-wordmark" alt="HTML icon" ></i>
          <i class="devicon-javascript-plain" alt="JavaScript icon" ></i>
          <i class="devicon-nextjs-original-wordmark" alt="Next.js icon" ></i>
          <i class="devicon-python-plain" alt="Python icon" ></i>
          <i class="devicon-mongodb-plain-wordmark" alt="MongoDB icon" ></i>
          <i class="devicon-visualstudio-plain"  alt="Visual Studio Code icon" ></i>
          <i class="devicon-css3-plain-wordmark" alt="CSS3 icon" ></i>
          <i class="devicon-react-original-wordmark" alt="React icon" ></i>
          <i class="devicon-nodejs-plain" alt="Node.js icon" ></i>
          <i class="devicon-express-original" alt="Express icon" ></i>
          <i class="devicon-github-original" alt="GitHub icon" ></i>
          <i class="devicon-git-plain-wordmark" alt="Git icon" ></i>
        </div>
        <div class="contact_me">
          <h1 class='contact_me_header'>Contact me!</h1>
          <h2 class='contact_me_subheader'>find me at the following places...</h2>
          <i class="devicon-linkedin-plain"
          alt="LinkedIn icon linked" 
          onClick={() => openInNewTab(linkedIn)}>
          </i>
          <i class="devicon-github-original-wordmark"
          alt="GitHub icon linked"
          onClick={() => openInNewTab(gitHub)}>
          </i>
        </div>
      </div>
      </FadeIn>
    )
}

export default Index;