import React from 'react'
import './OurCompanies.css'
import ButtonOne from '../ButtonOne/ButtonOne'
import { FaArrowCircleRight } from "react-icons/fa";

const OurCompanies = () => {
    return (
        <>
            <div className="intro-video-box-gold bg-section" style={{marginBottom:"5rem"}}>
                <div className="container-fluid px-3 px-md-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="section-title">
                                <span className="section-sub-title wow fadeInUp text-white border-white">
                                    Our Companies
                                </span>
                                <h2 className="text-anime-style-3 mb-3 text-white text-effect" data-cursor="-opaque">
                                    Powering How the World Moves, Flies, and Builds Today and Tomorrow.
                                </h2>
                            </div>
                        </div>
                        
                            <div className="col-lg-4">
                                <div className="intro-video-content-gold">
                                    {/* Intro Video Content Header Start */}
                                    <div className="intro-video-content-header-gold">
                                        {/* Section Title Start */}
                                        <div className="section-title">
                                            <span className="section-sub-title wow fadeInUp text-white border-white">
                                                JKMPTL
                                            </span>
                                            <div className='mb-3 company-logo'>
                                                <img src="./images/JKMPTL.png" alt="" />
                                            </div>
                                            <h2 className="text-anime-style-3 company-name mb-3" data-cursor="-opaque">
                                                JK Maini Precision Technology Ltd.
                                            </h2>
                                            <p className="wow fadeInUp company-desc" data-wow-delay="0.2s">
                                                JK Maini Precision technology limited (JKMPTL) has been at the forefront of precision engineering, enabling how the world moves and builds across industries. From high-performance automotive components to complex solutions for industrial, defence, and general engineering applications, our expertise drives progress.
                                            </p>

                                            <ButtonOne text="Read More" icon={<FaArrowCircleRight />} link="/about" />
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-lg-4 mt-3 mt-lg-0">
                                <div className="intro-video-content-gold">
                                    {/* Intro Video Content Header Start */}
                                    <div className="intro-video-content-header-gold">
                                        {/* Section Title Start */}
                                        <div className="section-title">
                                            <span className="section-sub-title wow fadeInUp text-white border-white">
                                                JKMGAL
                                            </span>
                                            <div className='mb-3 company-logo'>
                                                <img src="./images/JKMGAL.png" alt="" />
                                            </div>
                                            <h2 className="text-anime-style-3 company-name mb-3" data-cursor="-opaque">
                                                JK Maini Global Aerospace Ltd.
                                            </h2>
                                            <p className="wow fadeInUp company-desc" data-wow-delay="0.2s">
                                                JK Maini Global Aerospace Ltd. (JKMGAL) specializes in delivering highprecision components, complex assemblies, and mission-critical systems for the global aerospace and defence industries. Our solutions support the world's most demanding platforms, from commercial and military aviation to defence systems operating in the most challenging environments.
                                            </p>

                                            <ButtonOne text="Read More" icon={<FaArrowCircleRight />} link="/about" />
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default OurCompanies