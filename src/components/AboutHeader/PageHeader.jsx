import React from 'react'
import { Link } from 'react-router-dom'
import "./PageHeader.css"

const PageHeader = ({ title, desc, bgImg }) => {
    return (
        <>
            <div className="page-header parallaxie" style={{ backgroundImage: `url(${bgImg})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Page Header Box Start */}
                            <div className="page-header-box">
                                <h1 className="text-anime-style-3" data-cursor="-opaque">
                                    {title}
                                </h1>
                                <p className='text-anime-style-1 text-white'>{desc}</p>
                                {/* <nav className="wow fadeInUp">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/">home</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            about us
                                        </li>
                                    </ol>
                                </nav> */}
                            </div>
                            {/* Page Header Box End */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PageHeader