import './style.scss'
import gsap from 'gsap';
import { MotionPathPlugin, ScrollTrigger, TextPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin)
// const CA = '4gN9Fk7Chf9RGNghzVaKddhMZ1zF79kxKds4xQtefpwx'
const CA = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'




window.onload = function () {
    setTimeout(() => {
        // hideLoader()
        document.getElementById('loader').style.opacity = 0;
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
        }, 500);



        gsap.fromTo('.mail_inner', {
            y: 100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            delay: 1
        })
        gsap.fromTo('.cross_el_1', {
            y: 100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            delay: 3
        })
        gsap.fromTo('.cross_el_2', {
            y: 100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            delay: 3
        })
        gsap.fromTo('.cross_el_2', {
            y: 100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            delay: 3
        })


        gsap.to('.hero_content_text', {
            text: "CRABADA IS BACK MUTHERFUCKERS, AND WE ARE CTO'ING THIS BICH BACK OUT OF THE TRENCHES.",
            ease: "none",
            scrollTrigger: {
                trigger: '.hero',
                scrub: 1,
                // markers: true,
                start: `0% 50%`,
                end: `30% 50%`,
            }
        });
        gsap.fromTo('.hero_decor_1', {
            y: -200,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: '.hero',
                scrub: 1,
                // markers: true,
                start: `20% 50%`,
                end: `21% 50%`,
            }
        });

        gsap.fromTo('.hero_decor_2', {
            y: 200,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: '.hero',
                scrub: 1,
                // markers: true,
                start: `35% 50%`,
                end: `35% 50%`,
            }
        });





    }, 500);
};










document.getElementById('ca').innerHTML = CA

let copyTO;
document.getElementById('ycb_copy').onclick = () => {
    document.getElementById('ycb_copy').innerHTML = 'COPIED!'
    clearTimeout(copyTO)
    copyTO = setTimeout(() => {
        document.getElementById('ycb_copy').innerHTML = 'COPY'
    }, 3000);

    navigator.clipboard.writeText(CA)
        .then(() => {
            console.log("ok!");
        })
        .catch(err => {
            console.error("err: ", err);
        });
}