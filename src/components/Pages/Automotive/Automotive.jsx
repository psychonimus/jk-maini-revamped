import React from 'react'
import PageHeader from '../../AboutHeader/PageHeader'
import banner from "/images/automotive-parts-banner.png"
import AutomotiveAbout from '../../AutomotiveAbout/AutomotiveAbout'
import NumbersSection from '../../NumbersSection/NumbersSection'
import SectorCards from '../../SectorCards/SectorCards'
const Automotive = () => {
  return (
    <>
      <PageHeader
        title="Automotive Industrial & Beyond"
        desc="At JK Maini Precision Technology Ltd., (JKMPTL) we engineer high-precision components and
              systems for automotive, mobility, and industrial applications. From
              powertrain and motion technologies to transmission components and critical
              assemblies, our solutions meet the most
              challenging global standards.
              With advanced manufacturing, future-ready technologies, and uncompromising quality,
              we deliver precision, consistency, and
              performance at scale, powering progress across mobility, infrastructure, and
              industry."
        bgImg={banner}
      />
      <AutomotiveAbout />
      <NumbersSection />
      <SectorCards />
    </>
  )
}

export default Automotive