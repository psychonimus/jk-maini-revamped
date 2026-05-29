import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './MagicCursor.css';

const MagicCursor = () => {
    const cursorRef = useRef(null);
    const textRef = useRef(null);
    const pos = useRef({ x: -100, y: -100 });
    const isVisible = useRef(false);
    const currentStick = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const text = textRef.current;
        if (!cursor) return;

        const move = (x, y, duration = 0.5) => {
            gsap.to(cursor, {
                x: x ?? pos.current.x,
                y: y ?? pos.current.y,
                force3D: true,
                overwrite: true,
                ease: "expo.out",
                duration: isVisible.current ? duration : 0
            });
        };

        const show = () => {
            if (isVisible.current) return;
            cursor.classList.add('-visible');
            isVisible.current = true;
        };

        const hide = () => {
            cursor.classList.remove('-visible');
            isVisible.current = false;
        };

        const onMouseMove = (e) => {
            const x = currentStick.current ? currentStick.current.x - ((currentStick.current.x - e.clientX) * 0.15) : e.clientX;
            const y = currentStick.current ? currentStick.current.y - ((currentStick.current.y - e.clientY) * 0.15) : e.clientY;
            pos.current = { x, y };
            move();
            show();
        };

        const onMouseDown = () => cursor.classList.add('-active');
        const onMouseUp = () => cursor.classList.remove('-active');

        const handleMouseEnter = (e) => {
            const target = e.target.closest('a, button, input, textarea, [data-cursor], [data-cursor-text], [data-cursor-stick]');
            if (!target) return;

            if (['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(target.tagName)) {
                cursor.classList.add('-pointer');
            }

            if (target.dataset.cursor) {
                cursor.classList.add(target.dataset.cursor);
            }

            if (target.dataset.cursorText) {
                text.innerHTML = target.dataset.cursorText;
                cursor.classList.add('-text');
            }

            if (target.dataset.cursorStick) {
                const rect = target.getBoundingClientRect();
                currentStick.current = {
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2
                };
                move(currentStick.current.x, currentStick.current.y, 0.4);
            }
        };

        const handleMouseLeave = (e) => {
            const target = e.target.closest('a, button, input, textarea, [data-cursor], [data-cursor-text], [data-cursor-stick]');
            if (!target) return;

            cursor.classList.remove('-pointer');
            if (target.dataset.cursor) cursor.classList.remove(target.dataset.cursor);
            if (target.dataset.cursorText) {
                cursor.classList.remove('-text');
                text.innerHTML = '';
            }
            if (target.dataset.cursorStick) currentStick.current = null;
        };

        const onMouseEnterIframe = () => hide();
        const onMouseLeaveIframe = () => show();

        // Use event delegation on the document for performance and dynamic elements
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mouseover', handleMouseEnter);
        document.addEventListener('mouseout', handleMouseLeave);
        document.body.addEventListener('mouseleave', hide);
        document.body.addEventListener('mouseenter', show);

        // Handle iframes specifically
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(el => {
            el.addEventListener('mouseenter', onMouseEnterIframe);
            el.addEventListener('mouseleave', onMouseLeaveIframe);
        });

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mouseover', handleMouseEnter);
            document.removeEventListener('mouseout', handleMouseLeave);
            document.body.removeEventListener('mouseleave', hide);
            document.body.removeEventListener('mouseenter', show);
        };
    }, []);

    return (
        <div className="cb-cursor" ref={cursorRef}>
            <div className="cb-cursor-text" ref={textRef}></div>
        </div>
    );
};

export default MagicCursor;

