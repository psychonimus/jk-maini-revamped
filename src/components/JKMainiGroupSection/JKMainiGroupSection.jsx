import React, { useEffect, useRef } from 'react';
import './JKMainiGroupSection.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ButtonOne from '../ButtonOne/ButtonOne';

gsap.registerPlugin(ScrollTrigger);

export default function JKMainiAboutSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Top Label Animation
            gsap.from('.jkm-top-label', {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.jkm-top-label',
                    start: 'top 90%',
                }
            });

            // Left Content Animation
            gsap.from('.jkm-title-h1', {
                x: -50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.jkm-title-h1',
                    start: 'top 85%',
                }
            });

            gsap.from('.jkm-hero-p', {
                y: 20,
                opacity: 0,
                duration: 0.8,
                delay: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.jkm-hero-p',
                    start: 'top 85%',
                }
            });

            gsap.from('.jkm-btn-group', {
                y: 20,
                opacity: 0,
                duration: 0.8,
                delay: 0.4,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.jkm-btn-group',
                    start: 'top 90%',
                }
            });

            // Right Visual Animation
            gsap.from('.jkm-visual-card', {
                scale: 0.9,
                opacity: 0,
                duration: 1.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.jkm-visual-card',
                    start: 'top 80%',
                }
            });

            // Stats Animation
            gsap.from('.jkm-stat-card', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.jkm-stats-grid',
                    start: 'top 85%',
                }
            });

            // Footer Statement Animation
            gsap.from('.jkm-footer-statement', {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: '.jkm-footer-statement',
                    start: 'top 95%',
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="jk-maini-about-section" ref={sectionRef}>
            <div className="jkm-container">
                {/* Top Label */}
                <div className="jkm-top-label">
                    <div className="jkm-dot" />
                    <span className="jkm-label-text">
                        About JK Maini Group
                    </span>
                </div>

                {/* Hero Section */}
                <div className="jkm-hero-grid">
                    {/* Left Content */}
                    <div>
                        <h1 className="jkm-title-h1">
                            Delivering <span className="jkm-accent">Precision</span>.
                            <br />
                            Powering Industry.
                            <br />
                            Enabling Progress.
                        </h1>

                        <p className="jkm-hero-p">
                            JK Maini Precision Technology (JKMPTL) is a new force in precision manufacturing, born from the strategic integration of three industry leaders: Maini Precision Products Ltd., Ring Plus Aqua Ltd., and JK Files Ltd. Together, these businesses bring decades of proven expertise in precision engineering, world-class manufacturing, and global quality standards. This powerful consolidation has created a unified entity with the scale, capabilities, and vision to drive the future of mobility, infrastructure, and industrial advancement. Backed by the strength and legacy of the Raymond Group, JK Maini is positioned to deliver advanced solutions across automotive, industrial, aerospace, and tooling sectors. With cutting-edge infrastructure, future-ready technologies, and a relentless commitment to quality, JK Maini is not just adapting to change, it’s engineering what’s next.
                        </p>

                        <div className="jkm-btn-group">
                            <ButtonOne text="Explore Group Strengths" />
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="jkm-visual-wrapper">
                        <div className="jkm-blur-bg" />

                        <div className="jkm-visual-card">
                            {/* Background Grid */}
                            <div className="jkm-grid-pattern" />

                            <div className="jkm-visual-content">
                                {/* Companies */}
                                <div className="jkm-companies-grid">
                                    <div className="jkm-logo-box">
                                        <img
                                            src="https://placehold.co/240x120/111111/FFFFFF?text=JK+Super+Drive"
                                            alt="JK Super Drive"
                                            className="jkm-logo-img"
                                        />
                                    </div>

                                    <div className="jkm-connector-wrapper">
                                        <div className="jkm-line-h">
                                            <div className="jkm-arrow-head" />
                                        </div>
                                    </div>

                                    <div className="jkm-logo-box">
                                        <img
                                            src="https://placehold.co/240x120/111111/FFFFFF?text=Maini+Precision"
                                            alt="Maini Precision"
                                            className="jkm-logo-img"
                                        />
                                    </div>
                                </div>

                                {/* Merge Connector */}
                                <div className="jkm-connector-v">
                                    <div className="jkm-line-v" />
                                </div>

                                {/* Final Brand */}
                                <div className="jkm-final-brand-card">
                                    <div className="jkm-brand-inner">
                                        <div className="jkm-brand-circle">
                                            <div className="jkm-brand-dot-inner" />
                                        </div>

                                        <h2 className="jkm-brand-h2">
                                            JK MAINI
                                        </h2>

                                        <p className="jkm-brand-p">
                                            Three legacies united into one future-focused precision
                                            engineering powerhouse.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats */}
                

                {/* Footer Statement */}
                {/* <div className="jkm-footer-wrapper">
                    <div className="jkm-footer-statement">
                        Three Legacies. One Purpose. Powering Precision Forward.
                    </div>
                </div> */}
            </div>
        </div>
    );
}
