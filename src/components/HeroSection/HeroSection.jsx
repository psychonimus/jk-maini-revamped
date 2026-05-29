import React from 'react'
import './HeroSection.css'
import ButtonOne from '../ButtonOne/ButtonOne'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

const HeroSection = () => {
    return (
        <>
            <div className="hero dark-section parallaxie">
                {/* Video Start */}
                <div className="hero-bg-video">
                    {/* Selfhosted Video Start */}
                    {/* <video autoplay muted playsinline loop id="herovideo"><source src="images/hero-bg-video.mp4" type="video/mp4"></video> */}
                    <video autoPlay muted playsInline loop id="myvideo">
                        <source
                            src="../videos/18.webm"
                            type="video/webm"
                        />
                    </video>
                    {/* Selfhosted Video End */}
                    {/* Youtube Video Start */}
                    {/* <div id="herovideo" class="player" data-property="{videoURL:'OjTRVpgtcG4',containment:'.hero-video', showControls:false, autoPlay:true, loop:true, vol:0, mute:false, startAt:0,  stopAt:296, opacity:1, addRaster:true, quality:'large', optimizeDisplay:true}"></div> */}
                    {/* Youtube Video End */}
                </div>
                {/* Video End */}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            {/* Hero Contant Start */}
                            <div className="hero-contant">
                                {/* Hero Sub Heading Start */}
                                <div className="hero-sub-heading wow fadeInUp">
                                    {/* Satisfy Client Images Start */}

                                    {/* Satisfy Client Images End */}
                                    {/* Satisfy Client Content Start */}
                                    <div className="satisfy-client-content">
                                        <p>Crafted Textiles. Trusted Quality.</p>
                                    </div>
                                    {/* Satisfy Client Content End */}
                                </div>
                                {/* Hero Sub Heading End */}
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h1 className="text-anime-style-3" data-cursor="-opaque">
                                        Engineering Tommorrow one component at a time
                                    </h1>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        A trusted OEM supplier of precision automotive components, delivering high-performance parts built
                                        to precise engineering standards
                                    </p>
                                </div>
                                {/* Section Title End */}
                                {/* Hero Content Body Start */}
                                <div className="hero-content-body wow fadeInUp" data-wow-delay="0.4s">
                                    {/* Hero Button Start */}
                                    <div className="hero-btn">
                                        <ButtonOne text="Explore More" icon={<FaRegArrowAltCircleRight />} link="#" />
                                    </div>
                                    {/* Hero Button End */}
                                    {/* Video Play Button Start */}
                                    <div className="video-play-button">
                                        <a
                                            href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                                            className="popup-video bg-effect"
                                            data-cursor-text="Play"
                                        >
                                            <FaPlay />
                                        </a>
                                        <span>Watch Video</span>
                                    </div>
                                    {/* Video Play Button End */}
                                </div>
                                {/* Hero Content Body End */}
                            </div>
                            {/* Hero Contant End */}
                        </div>
                        <div className="col-lg-12">
                            {/* Hero Info List Start */}
                            <div className="hero-info-list wow fadeInUp" data-wow-delay="0.2s">
                                <ul>
                                    <li> <FaCircleCheck className='me-1' /> Eco-Friendly Dyeing Processes</li>
                                    <li> <FaCircleCheck className='me-1' /> Reduced Water Consumption</li>
                                    <li> <FaCircleCheck className='me-1' /> Ethical Production Standards</li>
                                    <li> <FaCircleCheck className='me-1' /> Responsible Supply Chain</li>
                                </ul>
                            </div>
                            {/* Hero Info List End */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HeroSection