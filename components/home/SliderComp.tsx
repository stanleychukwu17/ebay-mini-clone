import { useEffect } from "react";

import styles from '../../styles/home/Slider.module.scss';

type sliderArgs = {
    'useWindowsWidth': string
}

const startSlider = ({useWindowsWidth}: sliderArgs) => {
    const root = document.documentElement;
    const eachBoxClass = '.bXi' // each of the box classes
    const transitionClass = 'boxManTransition' // the transitionClass for the slider cover
    let timmer: NodeJS.Timer;
    let timmerTime = 6000;
    let slideTo;
    let currentBoxInView = 1; // the number of box in the view window of our slider

    const sliderCover = document.querySelector('.boxMan') as HTMLElement;
    const numberOfBoxes = document.querySelectorAll(eachBoxClass).length;
    let eachBoxGrab = document.querySelector(eachBoxClass) as HTMLElement;
    let moveToTheLeftMargin = eachBoxGrab?.offsetWidth;

    // updates the variable for the total number of boxes we have on the slider, because we use the number to update the slider cover
    root.style.setProperty('--numberOfBoxes', `${numberOfBoxes}`);

    // the function below resets the slider
    const resetSlider = () => {
        let bxArray = [], i = 1, cln, grab;

        // loops through all the boxes pre the current box been viewed(which is surely the last box since this function would only run when the viewer is at the last box)
        for (; i < numberOfBoxes; i++) {
            grab = document.querySelector(eachBoxClass) as HTMLElement; // grabs each box
            cln = grab.cloneNode(true); // clones the box
            bxArray.push(cln); // saves the cloned clopy
            grab.remove(); // removes the box since we now a clone copy of the box
        }

        sliderCover.classList.remove(transitionClass) // removes the transition class so that we can manipulate the sliderCover without the viewer noticing any changes
        sliderCover.style.marginLeft = '0px'; // resets the margin left to zero, because at this stage we have only one box in our slider
        bxArray.forEach(elm => { sliderCover.appendChild(elm); }) // loops through the clones boxes and re-attaches them to the slider

        // we just wait for some milliseconds before we add the transition class, by now all the dom modifications must have been completed
        setTimeout(() => { sliderCover.classList.add(transitionClass) }, 100);
        currentBoxInView = 1; // now we reset the currentBoxInView
    }

    // in charge of moving the the boxes into view, the heart of the slider
    const moveSliderLeft = () => {
        slideTo = `-${currentBoxInView * moveToTheLeftMargin}px`; // calculates the margin needed for the next viewbox
        sliderCover.style.marginLeft = slideTo; // moves the next box into view
        currentBoxInView++; // gets the stage ready for the next box

        // if we are in the last view box, we reset the slider
        if (currentBoxInView >= numberOfBoxes) {
            setTimeout(resetSlider, 1100); // we use setTimeout to ensure there is no animation running
            return false;
        }
    }

    // anytime the window resizes, this guy below takes care of all the re-modelling
    const resizedWindow = () => {
        const winWidth = document.body.clientWidth; // the current windows width
        root.style.setProperty('--genWidth', `${winWidth}px`); // updates the general width of the slider
        moveToTheLeftMargin = winWidth; // update the new margins unit that the slider uses to slide each box into view
        // sliderCover.style.width = `${winWidth * numberOfBoxes}px`;
        currentBoxInView--;
        moveSliderLeft();
    }

    // calls the engine room to move the boxes
    timmer = setInterval(() => { moveSliderLeft() }, timmerTime);

    // event for navigating backwards
    document.querySelector('.boxNavLeft')?.addEventListener('click', () => {
        if (currentBoxInView <= 1) {
            let grab = sliderCover.lastElementChild as HTMLElement; // we get the last box and bring it to the front of the sliderCover
            let cln = grab.cloneNode(true);

            grab.remove(); // removes the last box since we are moving it to the front
            sliderCover.insertBefore(cln, sliderCover.childNodes[0]); // here is the move!
            sliderCover.style.marginLeft = `-${moveToTheLeftMargin/3}px`; // we want to maintain the view and not let the user know anything is going on
            currentBoxInView = 0;
        } else {
            currentBoxInView -= 2;
        }

        clearInterval(timmer);
        moveSliderLeft();
        timmer = setInterval(() => { moveSliderLeft() }, timmerTime);
    })

    // for moving forward
    document.querySelector('.boxNavRight')?.addEventListener('click', () => {
        if (currentBoxInView >= numberOfBoxes) { return false; }

        clearInterval(timmer);
        moveSliderLeft();
        timmer = setInterval(() => { moveSliderLeft() }, timmerTime);
    })

    // if we want our slider to be responsive, this guy below comes in usefull.
    resizedWindow();
    if (useWindowsWidth == 'yes') {
        window.onresize = function () { resizedWindow(); }
    }
}


const SliderComponent = () => {
    useEffect(() => {
        startSlider({'useWindowsWidth':'yes'});
    }, [])

    return (
        <div className={styles.mainCover+' mainCover'}>
            <div className={styles.boxNav+' '+styles.boxNavLeft+' boxNavLeft'}>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            </div>
            <div className={styles.boxNav+' '+styles.boxNavRight+' boxNavRight'}>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <div className={styles.boxMan+' boxMan boxManTransition'}>
                <div className={styles.bXi+' bXi'}> <img src="/home/slider/sd1.jpg" alt="slider" /> </div>
                <div className={styles.bXi+' bXi'}> <img src="/home/slider/sd2.jpg" alt="slider" /> </div>
                <div className={styles.bXi+' bXi'}> <img src="/home/slider/sd3.jpg" alt="slider" /></div>
                <div className={styles.bXi+' bXi'}> <img src="/home/slider/sd4.jpg" alt="slider" /> </div>
                <div className={styles.bXi+' bXi'}> <img src="/home/slider/sd5.jpg" alt="slider" /> </div>
            </div>
        </div>
    );
}
 
export default SliderComponent;