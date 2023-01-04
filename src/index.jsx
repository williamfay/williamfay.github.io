import Style from './App.css';
import headshot from './assets/headshot.jpg';

function Index() {
    return (
        <>
        <h2>Personal Portfolio</h2>
        <p>Say something about yourself here!</p>
        <figure>
          <picture>
            <source srcset={headshot} />
            <img src={headshot} />
          </picture>
        </figure>
      </>
    )
}

export default Index;