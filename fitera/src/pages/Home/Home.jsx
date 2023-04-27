import React from 'react'
import './Home.css'

function Home() {

    const Grid = ({ name, text, img , id }) => {
        return (
            <div className='features-grid'>
                <img src={img} className='feature-img' id={id}/>
                <h4 className='features-grid-name'>{name}</h4>
                <p className='features-grid-text'>{text}</p>
            </div>
        )
    }
    return (
        <div className='mainhome'>
            <h1 className="title">
                Follow our page for<br />
                more
                <div className="title__alternate">
                    <span
                        style={{
                            '--d': '0s',
                        }}
                    >Motivation.
                    </span>
                    <span
                        style={{
                            '--d': '3s',
                        }}
                    >Tips</span>
                    <span
                        style={{
                            '--d': '6s',
                        }}
                    >
                        Routines
                    </span>
                </div>
            </h1>
            <div className='about-us'>
                <h2 id='about-us-heading'>About Us</h2>
                <h5 className='about-us-subheading'>The Legacy of Fitera</h5>
                <p className='about-us-text1'>Welcome to our gym website! We are a state-of-the-art fitness facility committed to helping our members achieve their health and fitness goals.
                    Our gym is equipped with top-of-the-line equipment, experienced trainers, and a supportive community to help you every step of the way on your
                    fitness journey.
                </p>
                <p className='about-us-text2'>
                    At our gym, we believe that fitness is not just a physical pursuit, but a holistic approach to health and wellness. We offer a wide range of
                    fitness programs and classes to suit all levels of experience and fitness goals, including strength training, cardio, group fitness classes,
                    and personal training.
                </p>
            </div>
            <div className='features'>
                <h2 id='about-us-heading'>Discover what our gym has to offer</h2>
                <div className='features-allgrid'>
                    <Grid name="Cardio" img="../../../public/feature-grid1.jpeg" text="Fitera Gym India celebrates 20 th Anniversary this year. The gym community is getting stronger each year while taking forward the legacy in fitness." />
                    <Grid id="features-pic2" name="Strength Training" img="../../../public/feature-grid2.jpg" text="Fitera gym is a focal point of fitness enthusiasts and body building professionals for all the right reasons. 
                    Fitera gym membership offers extensive variety of amenities to train for every goal."/>
                    <Grid name="GroupX" img="../../../public/feature-grid3.webp" text="Fitera gym membership offers an array of group workout activities weekly from guest 
                    instructors/coaches with 10+ years of experience."/>
                </div>
            </div>
        </div>
    )
}

export default Home