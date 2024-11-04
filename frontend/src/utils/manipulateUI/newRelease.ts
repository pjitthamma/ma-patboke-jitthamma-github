import introJs from "intro.js";

export const automateNewReleaseStep1 = () => {
    const step1 = introJs();

    step1.setOptions({
        steps: [
            {
                element: '.shopNewrelease', // Step 1: Shop link
                intro: 'Click the "Shop" link to browse products.',
            },
            {
                element: '.not-suppose-to-show-up',
                intro: 'not suppose to show up',
            },
        ],
        exitOnOverlayClick: false,
        disableInteraction: false, // Disable direct interaction to force guided clicks
    });

    // Given callback function will be called after starting a new step. 
    step1.onafterchange( (targetElement) => {
        if (step1._currentStep === 1) {
            const shopLink = document.querySelector('.shopNewrelease') as HTMLElement;
            if (shopLink) {
                shopLink.click();
                step1.exit(true);
                setTimeout(() => { automateNewReleaseStep2().start(); } , 800);
            }
        }
    });

    // Start the Intro.js tour
    step1.start();
};

const automateNewReleaseStep2 = () => {      
    const step2 = introJs().setOptions({
        steps: [
            {
                element: '.filter-label-new-release', // Step 2: new release filter
                intro: 'Select the "New Release" filter.',
            },
            {
                element: '.not-suppose-to-show-up',
                intro: 'not suppose to show up',
            },
        ],
        exitOnOverlayClick: false,
        disableInteraction: false, // Disable direct interaction to force guided clicks
    });
    
    step2.onafterchange((targetElement) => {
        if (step2._currentStep === 1) {
            const newReleaseFilter = document.querySelector('.filter.filter-label-new-release') as HTMLElement;
            newReleaseFilter.click();
            step2.exit(true);
            setTimeout(() => { automateNewReleaseStep3().start(); } , 300);
        }
    });

    return step2;
};

const automateNewReleaseStep3 = () => {
    const step3 = introJs().setOptions({
        steps: [
            {
                element: '.rectangle-parent17',
                intro: 'The Shop page will now display only "New Release" products.',
            },

        ],
        exitOnOverlayClick: false,
        disableInteraction: false, // Disable direct interaction to force guided clicks
    });
    return step3;
};