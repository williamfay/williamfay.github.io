import "../styles/module.history.css";
import reactBadge from "../../public/react-front-end-development.png";
import javaScriptBadge from "../../public/javascript-development-foundations.png";
import backEndBadge from "../../public/express-mongodb-back-end-development.png"
import resume from "../../public/Resume_William_Fay.pdf"
import FadeIn from './fade-in';

export default function History() {
    const backEndLink = 'https://www.credly.com/badges/5ea35f8d-3d1e-46c7-839e-f8f6c842b246/public_url'
    const reactLink = 'https://www.credly.com/badges/3866f712-5daf-42b6-9bc5-f640afc33cf5/public_url';
    const javaScriptLink = 'https://www.credly.com/badges/865be3d3-b6b5-4890-ae68-19387c002988/public_url';
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };
    const edText = [`Pennsbury High School`, <br />, `Mt. Abraham Union High School`, <br />, `Thailand`];
    const npText = [`American Heart Association`, <br />, `Villanova University`, <br />, `National MS Society`];

    const edEx = [
        `Prepared and adapted lesson plans while keeping in line with district guidelines for 9th and 10th grade curriculum`,
        ` Evaluated class-wide learning trends to determine effective teaching strategies and assess student needs individually through formative and summative data in order to foster an equitable learning environment`,
        `Collaborated with special educators/counselors to modify curriculum for special education students according to IEP’s`,
        `Developed Virtual Support Teacher position by implementing key functions and processes to support students who were remote due
        to COVID and adhered to IEPs for students in order to foster individual growth and ensure equity in the classroom`,
        `Corresponded clearly and effectively with students, families, and teachers remotely and in person in order to ensure students were
        supported during quarantine periods due to remote learning`,
        `Maximized accessibility for students and engaged with families by utilizing learning tools, such as Canvas and PowerSchool`,
        `Implemented Common Core standards to set discipline-specific and habits of work learning targets for students`,
        `Analyzed student evaluation data to tailor lessons, units, and courses for student success`
    ]

    const npEx = [
        `Provided administrative support for Development Directors, assisted with fundraising, mailings, copywriting, and editing for
        fundraising/marketing materials in collaboration with Communications Team`,
        `Maintained databases of individual donor and corporate sponsorship information to report event fundraising totals`,
        `Coordinated aspects of event planning for multiple cultivation events by procuring venues, caterers, coordinating volunteers,
        organizing vendor meetings, and day of event logistics and trained Associates for high-volume event season`,
        `Developed workbooks to collect and record vital event information of guests, program book, volunteers, and auction for the 700+
        attendee Philadelphia Heart Ball`,
        `Provided constituents with exceptional customer service, and assisted with fundraising account organization by submitting fund
        transfers, entering new gifts, and providing event and technical support`,
        `Communicated questions and answers to National MS Society peers located in various regions throughout the U.S., and collaborated
        on solutions to discrepancies within the website as well as constituent concerns`
    ]

    // Function will execute on click of button
    const downloadResume = () => {
        fetch(resume).then(response => {
            response.blob().then(blob => {
                // using Java Script method to get PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Creating new object of PDF file
                let alink = document.createElement('a');
                // Setting various property values
                alink.href = fileURL;
                alink.download = resume;
                alink.click();
            })
        })
    }

    return (
        <FadeIn>
            <div className="history-main-container">
                <div className="history-top-header">
                    <h1 className="top-header">Work History</h1>
                </div>
                <div className="button-flex-container">
                    <div className="history-button-container">
                        <button className="download-button" onClick={downloadResume}>Click here to download my resume</button>
                    </div>
                </div>
                <div className="history-dev-container">
                    <h1 class="dev-header">Software Development</h1>
                    <h2 class="dev-subhead">Burlington Code Academy at Upright Education</h2>
                    <p className="paragraph">I attended the six-month part-time bootcamp with a focus on MERN stack. Please see badges below:</p>
                    <figure className="badges-fig">
                        <img onClick={() => openInNewTab(reactLink)} alt="Upright Ed React Front-End Application Development Badge" className="badge" src={reactBadge}></img>
                        <img onClick={() => openInNewTab(javaScriptLink)} alt="Upright Ed JavaScript Application Badge" className="badge" src={javaScriptBadge}></img>
                        <img onClick={() => openInNewTab(backEndLink)}  alt="Upright Ed Express and MongoDB Back-End Application Development Badge" className="badge" src={backEndBadge}></img>
                    </figure>
                    <h2 className="dev-subhead">Udemy</h2>
                    <p className="paragraph">I am currently completing Udemy's The Modern Python 3 Bootcamp. Badge coming soon!</p>
                </div>
                <div className="history-ed-container" id="history-ed-container">
                    <h1 className="ed-header">Teaching</h1>
                    <h2 className="ed-subhead">{edText}</h2>
                    <ul className="ed-ul" id="ed-ul">
                        {edEx.map(line => <li key={`edInfo-${edEx.indexOf(line)}`} class={`edInfo-class-${edEx.indexOf(line)}`}>{line}</li>)}
                    </ul>
                </div>
                <div className="history-nonprofit-container">
                    <h1 className="np-header">Nonprofit</h1>
                    <h2 className="np-subhead">{npText}</h2>
                    <ul className="np-ul" id="np-ul">
                    {npEx.map(line => <li key={`edInfo-${npEx.indexOf(line)}`} class={`npInfo-class-${npEx.indexOf(line)}`}>{line}</li>)}
                    </ul>
                </div>
            </div>
        </FadeIn>
    )
}