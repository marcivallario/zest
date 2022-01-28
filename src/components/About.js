import kitchen from '../assets/kitchen_couple.jpg'

function About() {
    return (
        <div id="about">
            <div id="about-content">
                 <div id="about-img-container">
                    <img src={kitchen} alt="Couple cooking in the kitchen" title="Let's get cooking!" />
                </div>
                <div id="about-text">
                    <h2>Explore your pantry with recipes curated to perfection.</h2>
                    <p>At Zest, we believe taste trumps all. Whether you're a beginner — new to the kitchen and all its appliances &#38; tools — or a seasoned chef with a fascination for the simple pleasures, Zest is your go-to one-stop-shop for all things essential. We believe that you don't have to hop on a plane to explore all corners of the earth. Your expedition begins right in your pantry: spices from the Middle East, fresh feta cheese from the Mediterranean, or even a solid hot dog to celebrate an American past-time. </p>
                    <br></br>
                    <p>Our curated recipes are chosen by a select council of tastemakers with their pulse on varying cuisine trends. Save yourself the rabbit hole of the internet and the frustrations &#38; tears that come with preparing a meal from scratch. Allow those who've studied not only the culinary arts, but the cultures these dishes come from to guide you through a tour of your tastebuds without ever having to leave your hometown. Instructions are written with you in mind, with no special chef-skills needed. </p>
                    <br />
                    <p id="last">Authentic, easy, and most importantly — delicious. </p>
                </div>
            </div>
        </div>
    )
}

export default About;