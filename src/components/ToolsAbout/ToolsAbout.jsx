import React from 'react'

const ToolsAbout = () => {
    return (
        <>
            <div className="our-industries">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            
                            <div className="our-industries-content">
                                
                                <div className="section-title">
                                    <span className="section-sub-title wow fadeInUp">
                                        Precision in Every Cut
                                    </span> <br />

                                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                                        The Tools & Hardware Legacy of JK Files
                                    </h2>
                                    <p className="wow fadeInUp about-raymond mt-3" data-wow-delay="0.2s">
                                    At JK Files, we bring over seven decades of expertise in delivering high-quality tools and hardware solutions trusted by professionals across industries. As a core part of JK Maini, our tools and hardware business stands as a symbol of precision, performance, and reliability.


                                    </p>
                                    
                                    </div>
                                
                            </div>
                            
                        </div>
                        <div className="col-xl-6">
                            {/* Industries Image Box Start */}
                            <div
                                className="industries-image-box wow fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                {/* Industries Image Box 1 Start */}
                                <div className="industries-image-box-1">
                                    {/* Industries Image Start */}
                                    <div className="industries-image">
                                        <figure className="image-anime">
                                            <img src="images/automotive-about-2.jpeg" alt="" />
                                        </figure>
                                    </div>
                                    {/* Industries Image End */}
                                </div>
                                {/* Industries Image Box 1 End */}
                                {/* Industries Image Box 2 Start */}
                                <div className="industries-image-box-2">
                                    {/* Industries Image Start */}
                                    <div className="industries-image">
                                        <figure className="image-anime">
                                            <img src="images/automotive-about-1.jpeg" alt="" />
                                        </figure>
                                    </div>
                                </div>
                                {/* Industries Image Box 2 End */}
                            </div>
                            {/* Industries Image Box End */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToolsAbout