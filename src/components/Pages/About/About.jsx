import React from 'react'
import PageHeader from '../../AboutHeader/PageHeader'
import RaymondGroupSection from '../../RaymondGroupSection/RaymondGroupSection'
import JKMainiAboutSection from '../../JKMainiGroupSection/JKMainiGroupSection'
import VisionMissionValues from '../../VisionMissionValues/VisionMissionValues'
import GlobalPresence from '../../GlobalPresence/GlobalPresence'
import aboutBanner from '/images/about-banner.png'

const About = () => {
  return (
    <>
      <PageHeader
        title="Crafting Excellence Since 1965"
        desc="Our strength lies in our people. Every innovation, every solution, and every customer success story begins with a team that leads with heart, thinks with purpose, and acts with integrity. Together, we don’t just work we create impact."
        bgImg={aboutBanner}
      />
      <RaymondGroupSection />
      <JKMainiAboutSection />
      <div className="my-5">
        <VisionMissionValues />
      </div>
      <GlobalPresence />
    </>
  )
}

export default About