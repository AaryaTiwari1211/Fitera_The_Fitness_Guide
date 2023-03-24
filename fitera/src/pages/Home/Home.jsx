import React from 'react'
import './Home.css'

function Home() {
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
            {/* <button>Learn More</button> */}
        </div>
    )
}

export default Home