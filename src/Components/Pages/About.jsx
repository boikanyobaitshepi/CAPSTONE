import React from "react"

import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="container mb-3 p-3">
            <img src="https://rachelcorbett.com.au/wp-content/uploads/2018/07/Neon-podcast-logo.jpg" className="ms-5" />
            <div className="container">
                <h1 className="display-3">Don’t Get bored While You Can chill And Listen to a Podcast.</h1>
                <p className="fs-5">Our mission is to enliven your Chilling time with the perfect sound for Free!!. Our Podcast are always Updated constaly to ensure the best User Experience Enjoy your shows without a hitch. (Hitch costs Nothing😉)</p>
                <p className="fs-5">Our team is full of Podcast enthusiasts who know firsthand the magic of making sound to the world on anything  with a speaker.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your sound destination is waiting.<br />Your Podcast is ready.</h2>
                <Link className="btn btn-outline-secondary" to="/">Explore our podcasts</Link>
            </div>
        </div>
    );
}