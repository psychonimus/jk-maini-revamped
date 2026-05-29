import React, { useEffect } from 'react'
import './AboutSection.css'
import { FaPlay } from "react-icons/fa6";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    useEffect(() => {
        const textEffectElements = document.querySelectorAll('.text-effect');

        textEffectElements.forEach((el) => {
            const splitText = new SplitType(el, { types: 'lines,words,chars' });
            
            gsap.set(splitText.chars, {
                opacity: 0.3,
                x: -7,
            });
            
            gsap.to(splitText.chars, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 92%",
                    end: "top 60%",
                    scrub: 1,
                },
                x: 0,
                y: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.2,
            });
        });
        
        // Clean up
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <>
            <div className="about-us">
                <div className="container">
                    <div className="row section-row">
                        <div className="col-lg-12">
                            {/* Section Title Start */}
                            <div className="section-title section-title-center">
                                <span className="section-sub-title wow fadeInUp">
                                    About Our Industries
                                </span>
                                <h2
                                    className="text-effect wow fadeInUp"
                                    data-wow-delay="0.2s"
                                    data-cursor="-opaque"
                                >
                                    We lead with timeless values and a fearless vision for tomorrow
                                </h2>
                            </div>
                            {/* Section Title End */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {/* About Us Item List Start */}
                            <div className="about-us-item-list">
                                {/* About Us Item Start */}
                                <div className="about-us-item box-1 wow fadeInUp">
                                    <div className="icon-box">
                                        <img src="./images/profile1.jpg" alt="" />
                                    </div>
                                    <div className="about-us-item-contant">
                                        <h3>Gautam Singhania</h3>
                                        <p>
                                            Chairman & Managing Director, Raymond Group
                                        </p>
                                    </div>
                                </div>
                                {/* About Us Item End */}
                                {/* About Us Item Start */}
                                <div
                                    className="about-us-item box-2 wow fadeInUp"
                                    data-wow-delay="0.2s"
                                >
                                    <figure className="image-anime">
                                        <img src="./images/about-auto.png" alt="" />
                                    </figure>
                                    <div className="video-play-button">
                                        <a
                                            href="https://www.youtube.com/watch?v=iXLn-Yv0_fU"
                                            className="bg-effect popup-video"
                                            data-cursor-text="Play"
                                        >
                                            <FaPlay />
                                        </a>
                                    </div>
                                </div>
                                {/* About Us Item End */}
                                {/* About Us Item Start */}
                                <div className="about-us-item box-1 wow fadeInUp">
                                    <div className="icon-box">
                                        <img src="./images/profile2.jpg" alt="" />
                                    </div>
                                    <div className="about-us-item-contant">
                                        <h3>Gautam Maini</h3>
                                        <p>
                                            Managing Director
                                        </p>
                                    </div>
                                </div>
                                {/* About Us Item End */}
                            </div>
                            {/* About Us Item List End */}
                        </div>
                        
                    </div>
                    <div className="row mt-4 ">
                            <div className="col-md-6">
                                <div className="person-about">
                                    <p className='wow fadeInUp'>Great enterprises are built not just on larger than life dreams but also the relentless pursuit and indomitable courage to fulfill them. At Raymond, our legacy of over a century has been intricately woven in building businesses that set new benchmarks, transform industries, and winning the trust and respect of consumers and all concerned stakeholders. With JK Maini, we are investing in the future of precision engineering with a clear ambition: to broaden horizons, deepen capabilities, and build a business that is respected .</p>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="person-about">
                                    <p className='wow fadeInUp'>At JK Maini, we believe precision is not just a measure, it is our mindset. For decades, we have earned the trust of the world's most respected industries through engineering excellence, an unwavering commitment to quality, and a passion for innovation. Our people are at the heart of this journey, shaping solutions that move the world forward. As we look ahead, we remain steadfast in our mission: to lead with integrity, create with purpose, and deliver with precision today, tomorrow, and for generations to come.</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

        </>
    )
}

export default AboutSection