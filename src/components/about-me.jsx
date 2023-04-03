import '../styles/module.about-me.css';
import FadeIn from './fade-in';


export default function About() {
    
    return (
        <FadeIn>
        <div className="about_container">
                <div class='header_about_container'>
                    <h1 class='item_1_about'>Get to know me! </h1>
                </div>
                <div class='row_1 child'>
                    <h1 class="about-sub-head-1">TRAVELER</h1>
                    <h2 class="about-text-1">Fourteen countries and counting</h2>
                </div>
                <div class='row_2 child'>
                    <h1 class="about-sub-head-2">URBANIST</h1>
                    <h2 class="about-text-2">Trains, bikes, buildings, parks, busses, and much, much more</h2>
                </div>
                <div class='row_3 child'>
                    <h1 class="about-sub-head-3">EDUCATOR</h1>
                    <h2 class="about-text-3">From Thailand to Pennsylvania, educating the next generation and life-long learning is a passion</h2>
                </div>
                <div class='row_4 child'>
                    <h1 class="about-sub-head-4">CAT DAD</h1>
                    <h2 class="about-text-4">My two cats, Noodle and Tatum, bring joy to my life</h2>
                </div>
        </div>
        </FadeIn>
    )
}