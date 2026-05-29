import { useState, useEffect, useRef } from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SectorCards.css";

// ─── Data ─────────────────────────────────────────────────────────────────────

const SECTORS = [
  { id: "commercial", label: "Commercial Vehicles", img: "./images/commercial-vehicles.png", hasTab: true },
  { id: "passenger-veh", label: "Passenger Vehicles", img: "./images/passanger-vehicles.png", hasTab: true },
  { id: "ev", label: "Electric & Hybrid", img: "./images/electric-vehicles.png", hasTab: true },
  { id: "off-highway", label: "Off Highway & Industrial Applications", img: "./images/off-highway.png", hasTab: true },
  { id: "tools", label: "Tools, Hardware & Powertools", img: "./images/power-tools-sector.png", hasTab: true },
  { id: "locomotive", label: "Locomotive & Marine", img: "./images/loco-marine.png", hasTab: true },
  { id: "agriculture", label: "Agriculture", img: "./images/agriculture-sector.png", hasTab: false },
  { id: "defence", label: "Defence", img: "./images/defence-sector.png", hasTab: false },
];

const TAB_DATA = {
  commercial: {
    subTabs: [
      { id: "engine", label: "Engine" },
      { id: "chasis", label: "Steering Chassis" },
      { id: "fuel-injection", label: "Fuel Injection" },
      { id: "transmission", label: "Transmission" },
    ],
    parts: {
      engine: [
        { img: "/images/automobile-parts/cv/Engine/Flange Shaft.png", label: "Flange Shaft" },
        { img: "/images/automobile-parts/cv/transmission/ring-gear.png", label: "Ring Gear" },
        { img: "/images/automobile-parts/cv/Engine/Water Pump Bearings.png", label: "Water Pump Bearing" },
        { img: "/images/automobile-parts/cv/transmission/Flexplates.png", label: "Flexplates" },
        { img: "/images/automobile-parts/cv/Engine/idler-shaft.png", label: "Idler Shaft" },
        { img: "/images/automobile-parts/cv/Engine/Flinger Sleeve.png", label: "Finger Sleeve" },
        { img: "/images/automobile-parts/cv/Engine/IMG_0042 (3).png", label: "Hub Idlers" },
        { img: "/images/automobile-parts/cv/Engine/IMG_0130.png", label: "Bridge Body" },
        { img: "/images/automobile-parts/cv/Engine/IMG_0029.png", label: "PF Pumps and Hand Primer" },
        { img: "/images/automobile-parts/cv/Engine/Pulley.png", label: "Pulley" },
      ],
      chasis: [
        { img: "./images/automobile-parts/cv/steering chasis filters/IMG_0168.png", label: "Pitman Arm" },
        { img: "./images/automobile-parts/cv/steering chasis filters/IMG_0170.png", label: "Tie Rod Arm" },
        { img: "./images/automobile-parts/cv/steering chasis filters/IMG_0174.png", label: "Steering Arm" },
        { img: "./images/automobile-parts/cv/steering chasis filters/IMG_0175.png", label: "Intermediate Arm" },
      ],
      "fuel-injection": [
        { img: "./images/automobile-parts/cv/Fuel Injection/needle.png", label: "Needle" },
        { img: "./images/automobile-parts/cv/Fuel Injection/Pressure Release Valve.png", label: "Pressure Release Valve" },
        { img: "./images/automobile-parts/cv/Fuel Injection/Seat retainer.png", label: "Seat Retainer" },
      ],
      transmission: [
        { img: "./images/automobile-parts/cv/transmission/Release yoke assem.png", label: "Release Yoke Assem" },
        { img: "./images/automobile-parts/cv/transmission/Roller Yoke Assembly.png", label: "Roller Yoke Assembly" },
        { img: "./images/automobile-parts/cv/transmission/Cross Shaft.png", label: "Cross Shaft" },
        { img: "./images/automobile-parts/cv/transmission/ELSD Housing.png", label: "ELSD Housing" },
        { img: "./images/automobile-parts/cv/transmission/release-sleeve.png", label: "Release Sleeve" },
        { img: "./images/automobile-parts/cv/transmission/gear-shift-shaft.png", label: "Gear Shift Shaft" },
        { img: "./images/automobile-parts/cv/transmission/Gear Shift shafts.png", label: "Gear Shift Shaft" },
        { img: "./images/automobile-parts/cv/transmission/IMG_0144.png", label: "Bracket" },
        { img: "./images/automobile-parts/cv/transmission/IMG_0145.png", label: "Detent Plunger" },
        { img: "./images/automobile-parts/cv/transmission/IMG_0147.png", label: "Driver Disc" },
        { img: "./images/automobile-parts/cv/transmission/IMG_0148.png", label: "ELSD" },
        { img: "./images/automobile-parts/cv/transmission/Valve Spool.png", label: "Valve Spool" },
      ],
    },
  },
  "passenger-veh": {
    subTabs: [
      { id: "pv-engine", label: "Engine" },
      { id: "pv-fuel-injection", label: "Fuel Injection" },
      { id: "pv-transmission", label: "Transmission" },
      { id: "pv-breaking", label: "Braking System" },
    ],
    parts: {
      "pv-engine": [
        { img: "./images/automobile-parts/pv/Engine/Water Pump Bearings.png", label: "Water Pump Bearing" },
        { img: "./images/automobile-parts/pv/transmission/ring-gear.png", label: "Ring Gear" },
        { img: "./images/automobile-parts/pv/transmission/Flexplates.png", label: "Flexplates" },
        { img: "./images/automobile-parts/pv/Engine/sensor-ring.png", label: "Sensor Rings" },
        { img: "./images/automobile-parts/pv/Engine/VCT - 2.png", label: "Valve Control Center Bolt" },
        { img: "./images/automobile-parts/pv/Engine/VCT - 4.png", label: "Center Bolt Body" },
        { img: "./images/automobile-parts/pv/Engine/Bypass Shafts.png", label: "Bypass Shaft" },
        { img: "./images/automobile-parts/pv/Engine/Hex shaft.png", label: "Hex Shaft" },
        { img: "./images/automobile-parts/pv/Engine/IMG_0088.png", label: "Rotor" },
        { img: "./images/automobile-parts/pv/Engine/Selector Shaft.png", label: "Selector Shaft" },
      ],
      "pv-fuel-injection": [
        { img: "./images/automobile-parts/pv/Fuel Injection/IMG_0054.png", label: "Pump Body - PHP6" },
        { img: "./images/automobile-parts/pv/Fuel Injection/IMG_0057.png", label: "Pump Body - PHP4" },
        { img: "./images/automobile-parts/pv/Fuel Injection/php1.png", label: "Pump Body - PHP1" },
      ],
      "pv-transmission": [
        { img: "./images/automobile-parts/pv/transmission/Automatic Manual Transmission.png", label: "Automatic Manual Transmission" },
        { img: "./images/automobile-parts/pv/transmission/IMG_0090.png", label: "Engagement Shaft" },
      ],
      "pv-breaking": [
        { img: "./images/automobile-parts/pv/Engine/sensor-ring.png", label: "Sensor Rings" },
      ],
    },
  },
  ev: {
    subTabs: [{ id: "ev-transmission", label: "Transmission" }],
    parts: {
      "ev-transmission": [
        { img: "./images/automobile-parts/ev/transmission/Clutch Flange.png", label: "Clutch Flange" },
        { img: "./images/automobile-parts/ev/transmission/Input shaft for referance.png", label: "Input Shaft for Reference" },
        { img: "./images/automobile-parts/ev/transmission/Lever arm.png", label: "Lever Arm" },
        { img: "./images/automobile-parts/ev/transmission/oil sleeve.png", label: "Oil Sleeve" },
        { img: "./images/automobile-parts/ev/transmission/Park pawl.png", label: "Park Pawl" },
        { img: "./images/automobile-parts/ev/transmission/Support Bracket.png", label: "Support Bracket" },
      ],
    },
  },
  "off-highway": {
    subTabs: [],
    parts: {
      default: [
        { img: "./images/automobile-parts/industrial Hydraulics/IMG_0012 (2) - Copy.png", label: "Mounting Flange" },
        { img: "./images/automobile-parts/industrial Hydraulics/IMG_2307.png", label: "Piston" },
        { img: "./images/automobile-parts/industrial Hydraulics/IMG_0013.png", label: "Bearing Housing" },
        { img: "./images/automobile-parts/industrial Hydraulics/Wheel Fork.png", label: "Wheel Fork" },
      ],
    },
  },
  tools: {
    subTabs: [],
    parts: {
      default: [
        { img: "./images/automobile-parts/industrial Hydraulics/IMG_2198.png", label: "Cam Carrier" },
        { img: "./images/automobile-parts/industrial Hydraulics/Power Tools.png", label: "Power Tool Components" },
      ],
    },
  },
  locomotive: {
    subTabs: [],
    parts: {
      default: [
        { img: "./images/automobile-parts/cv/Engine/Bearing journal.png", label: "Bearing Journal" },
      ],
    },
  },
};

// ─── PartCard ──────────────────────────────────────────────────────────────────

function PartCard({ img, label, onOpenPopup }) {
  return (
    <div className="sc-part-card" onClick={() => onOpenPopup(img)}>
      <div className="sc-part-img-wrap">
        <img src={img} alt={label} className="sc-part-img popup-image" />
      </div>
      <div className="sc-part-label">{label}</div>
    </div>
  );
}

// ─── ImagePopup ──────────────────────────────────────────────────────────────

function ImagePopup({ src, onClose }) {
  const lensRef = useRef(null);
  const imgRef = useRef(null);
  const zoom = 2;

  const handleMouseMove = (e) => {
    const lens = lensRef.current;
    const img = imgRef.current;
    if (!lens || !img) return;

    const rect = img.getBoundingClientRect();
    let x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    let y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

    const lensRadius = lens.offsetWidth / 2;

    // Boundary checks
    if (x < lensRadius / zoom) x = lensRadius / zoom;
    if (x > img.width - lensRadius / zoom) x = img.width - lensRadius / zoom;
    if (y < lensRadius / zoom) y = lensRadius / zoom;
    if (y > img.height - lensRadius / zoom) y = img.height - lensRadius / zoom;

    lens.style.left = (x - lensRadius) + "px";
    lens.style.top = (y - lensRadius) + "px";
    lens.style.backgroundImage = `url('${src}')`;
    lens.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    lens.style.backgroundPosition = `-${(x * zoom - lensRadius)}px -${(y * zoom - lensRadius)}px`;
  };

  const showLens = () => { if (lensRef.current) lensRef.current.style.opacity = 1; };
  const hideLens = () => { if (lensRef.current) lensRef.current.style.opacity = 0; };

  return (
    <div className="sc-popup-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="sc-popup-content">
        <button className="sc-close-btn" onClick={onClose}>×</button>
        <div className="sc-magnifier-container">
          <div ref={lensRef} className="sc-magnifier-lens"></div>
          <img
            ref={imgRef}
            src={src}
            alt="Zoomed product"
            className="sc-popup-img"
            onMouseMove={handleMouseMove}
            onMouseEnter={showLens}
            onMouseLeave={hideLens}
            onTouchMove={handleMouseMove}
            onTouchStart={showLens}
            onTouchEnd={hideLens}
          />
        </div>
      </div>
    </div>
  );
}

// ─── ProductPanel ──────────────────────────────────────────────────────────────

function ProductPanel({ tabId, onOpenPopup }) {

  const data = TAB_DATA[tabId];
  const hasSubTabs = data?.subTabs?.length > 0;
  const firstSubId = hasSubTabs ? data.subTabs[0].id : "default";
  const [activeSub, setActiveSub] = useState(firstSubId);

  // Reset to first sub-tab whenever the parent tab changes
  useEffect(() => {
    setActiveSub(hasSubTabs ? data.subTabs[0].id : "default");
  }, [tabId, hasSubTabs, data]);


  if (!data) return null;
  const parts = data.parts[activeSub] || [];

  return (
    <div className="sc-product-panel">
      {hasSubTabs && (
        <div className="sc-subtab-bar">
          {data.subTabs.map((sub) => (
            <button
              key={sub.id}
              className={`sc-subtab-btn${activeSub === sub.id ? " active" : ""}`}
              onClick={() => setActiveSub(sub.id)}
            >
              {sub.label}
            </button>
          ))}
        </div>
      )}
      <div className="sc-parts-grid">
        {parts.length === 0
          ? <p className="sc-empty">Products coming soon.</p>
          : parts.map((p, i) => <PartCard key={i} img={p.img} label={p.label} onOpenPopup={onOpenPopup} />)
        }

      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function SectorCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [popupImg, setPopupImg] = useState(null);
  const activeTab = SECTORS[activeIndex]?.hasTab ? SECTORS[activeIndex].id : null;


  return (
    <div className="sc-root">
      {/* ── Header ── */}
      <section className="sc-header-section">
        <div className="container">
          <div className="our-industries-content">
            {/* Section Title Start */}
            <div className="section-title">
              <span className="section-sub-title wow fadeInUp">
                Precision Across Every Segment of Mobility and Industry
              </span> <br />

              <h2 className="text-anime-style-3" data-cursor="-opaque">
                From Roads to Rail. From Engines to Electrification.
              </h2>

              <p className="wow fadeInUp about-raymond mt-3" data-wow-delay="0.2s">At JK Maini Precision Technology Limited (JKMPTL), we deliver precision-engineered components and systems that power the world's leading mobility and industrial platforms, across commercial vehicles, passenger cars, off-highway equipment, and next-generation electric technologies. Our products are trusted for their performance, durability, and precision across powertrain, drivetrain, and motion systems. Whether it's moving people, powering machines, or enabling future mobility, our segment-specific expertise and engineering excellence drive progress at scale. With a commitment to innovation, precision manufacturing, and global quality standards, JK Maini supports OEMs and Tier-1 suppliers worldwide with solutions built for the demands of today, and the opportunities of tomorrow.</p>
            </div>

          </div>
        </div>


      </section>

      {/* ── Swiper Carousel ── */}
      <section className="sc-swiper-section">
        <div className="sc-container">
          <div className="sc-swiper-outer-wrapper">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
                el: '.sc-pagination',
                bulletClass: 'sc-dot',
                bulletActiveClass: 'active',
                renderBullet: function (index, className) {
                  return '<button class="' + className + '"></button>';
                }
              }}
              navigation={{
                nextEl: '.sc-nav-next',
                prevEl: '.sc-nav-prev',
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="sector-swiper"
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {SECTORS.map((sector, i) => (
                <SwiperSlide key={sector.id} className="sc-slide-wrapper">
                  <div className="sc-card">
                    <img src={sector.img} alt={sector.label} className="sc-card-img" />
                    <div className="sc-card-overlay">
                      <span className="sc-card-label">{sector.label}</span>
                      {sector.hasTab && activeIndex === i && (
                        <span className="sc-active-badge">
                          {/* View Products <span className="sc-chevron">↓</span> */}
                        </span>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            <button className="sc-nav-btn sc-nav-prev">‹</button>
            <button className="sc-nav-btn sc-nav-next">›</button>

            {/* Custom Pagination */}
            <div className="sc-pagination"></div>
          </div>
        </div>
      </section>

      {/* ── Product Panel ── */}
      {activeTab && (
        <section className="sc-products-section" key={activeTab}>
          <div className="sc-container">
            <ProductPanel tabId={activeTab} onOpenPopup={setPopupImg} />
          </div>
        </section>
      )}
      {/* ── Image Popup ── */}
      {popupImg && (
        <ImagePopup src={popupImg} onClose={() => setPopupImg(null)} />
      )}
    </div>
  );
}