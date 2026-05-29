import React from 'react'
import './GlobalPresence.css'

const GlobalPresence = () => {


    function toggleActiveCard(cardIndex) {
        const cards = document.querySelectorAll('.world-map-card-item');
        cards.forEach((card, index) => {
            card.classList.remove('active');
            if (index === cardIndex) {
                card.classList.add('active');
            }
        });
    }




    return (
        <>
            <div className="cta-box">
                <div className="container">
                    <div className="row section-row">
                        <div className="col-lg-12">
                            {/* Section Title Start */}
                            <div className="section-title section-title-center " style={{ maxWidth: "100%" }}>
                                <span className="section-sub-title wow fadeInUp">Global Presence</span>
                                <h2 className="text-anime-style-3" data-cursor="-opaque">
                                    Built Locally. Trusted Globally
                                </h2>
                            </div>
                            {/* Section Title End */}
                        </div>
                    </div>
                    <div className="row align-items-center">

                        <div className="col-xl-12 col-lg-12">
                            {/* Partner World Map Box Start */}
                            <div
                                className="partner-world-map-box wow fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                {/* Partner World Map Image Start */}
                                <div className="partner-world-map-image">
                                    <figure>
                                        <img src="images/Global-presence-map-parent.png" alt="" />
                                    </figure>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-12">
                            <div className="industries-body-item-list wow fadeInUp justify-content-between" data-wow-delay="0.4s">
                                {/* Industries Body Item Start */}
                                <div className="industries-body-item w-auto">
                                    <div className="icon-box">
                                        <img src="images/warehouse.svg" alt="" />
                                    </div>
                                    <div className="industries-body-item-content">
                                        <p>Warehouse</p>
                                    </div>
                                </div>
                                {/* Industries Body Item End */}
                                {/* Industries Body Item Start */}
                                <div className="industries-body-item w-auto">
                                    <div className="icon-box">
                                        <img src="images/automotive.svg" alt="" />
                                    </div>
                                    <div className="industries-body-item-content">
                                        <p>Automotive</p>
                                    </div>
                                </div>
                                {/* Industries Body Item End */}
                                {/* Industries Body Item Start */}
                                <div className="industries-body-item w-auto">
                                    <div className="icon-box">
                                        <img src="images/tools.svg" alt="" />
                                    </div>
                                    <div className="industries-body-item-content">
                                        <p>Tools & Hardware</p>
                                    </div>
                                </div>
                                {/* Industries Body Item End */}
                                {/* Industries Body Item Start */}
                                <div className="industries-body-item w-auto">
                                    <div className="icon-box">
                                        <img src="images/aerospace.svg" alt="" />
                                    </div>
                                    <div className="industries-body-item-content">
                                        <p>Aerospace</p>
                                    </div>
                                </div>
                                {/* Industries Body Item End */}

                                <div className="industries-body-item w-auto">
                                    <div className="icon-box">
                                        <img src="images/manufacturing.svg" alt="" />
                                    </div>
                                    <div className="industries-body-item-content">
                                        <p>Manufacturing Unit</p>
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

export default GlobalPresence