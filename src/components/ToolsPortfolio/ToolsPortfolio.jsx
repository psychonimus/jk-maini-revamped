import React from 'react'
import "./ToolsPortfolio.css"
import ButtonOne from '../ButtonOne/ButtonOne'
import { FaArrowRight } from "react-icons/fa6";
import SqaureButton from '../SqaureButton/SqaureButton';

const ToolsPortfolio = () => {

    const toolsPortfolio = [
        { image: "images/files.png", text: "Files" },
        { image: "images/cutting-tools.png", text: "Cutting Tools" },
        { image: "images/hand-tools.png", text: "Hand Tools" },
        { image: "images/power-tools.png", text: "Power Tools" },
        { image: "images/power-tools-accessories.png", text: "Power Tools Accessories" },
        
    ]





    return (
        <>
            <section className="tools-portfolio py-5">
                <div className="container">
                    <div className="our-industries-content">

                        <div className="section-title">
                            <span className="section-sub-title wow fadeInUp">
                                Our Portfolio
                            </span> <br />

                            <h2 className="text-anime-style-3" data-cursor="-opaque">
                                OUR TOOLS & HARDWARE PORTFOLIO
                            </h2>

                            <p className='about-raymond mt-3'>
                                JK Maini offers a comprehensive product portfolio that caters to a wide spectrum of manufacturing, construction, automotive, and industrial needs. Our range includes:
                            </p>
                        </div>

                    </div>
                </div>

                <div className="container">
                    <div class="tools-parent" >
                        {
                            toolsPortfolio.map((item, index) => {
                                return (
                                    <div key={index} class={`tool-box tools-div${index+1}`}>
                                        <img src={item.image} alt="" />
                                        <div className="gradient-overlay"></div>
                                        <div className="tool-overlay">
                                            <div>
                                                <h2>{item.text}</h2>
                                            <div className="title-line"></div>
                                            </div>
                                            <div className='portfolio-bag-btn text-start'>
                                                <SqaureButton
                                                    text={"Explore More"}
                                                    icon={<FaArrowRight />}
                                                />
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default ToolsPortfolio