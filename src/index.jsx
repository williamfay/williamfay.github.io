import './App.css';
import headshot from ''

function Index() {
    return (
        <>
        <h1>Personal Portfolio</h1>
        <p>Say something about yourself here!</p>
        <figure>
          <picture>
            <source srcset="./assets/header.jpeg" />
            <img src="./assets/headshot.jpeg" />
          </picture>
        </figure>
      </>
    )
}

export default Index;