import introJs from "intro.js";

export const automateCheckOrderStep1 = () => {
    const step1 = introJs();

    step1.setOptions({
        steps: [
            {
                element: '.mdiaccount-alert-outline-icon', // Step 1: Profile icon
                intro: 'Select your profile icon.',
                position: 'bottom',
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
            const profileIcon = document.querySelector('.mdiaccount-alert-outline-icon') as HTMLElement;
            if (profileIcon) {
                profileIcon.click();
                step1.exit(true);
                setTimeout(() => { automateCheckOrderStep2().start(); } , 500);
            }
        }
    });

    // Start the Intro.js tour
    step1.start();
};

const automateCheckOrderStep2 = () => {      
    const step2 = introJs().setOptions({
        steps: [
            {
                element: '.custom-dropdown-item[href="/orders"]', // Step 2: Dropdown menu
                intro: 'Select "Your Orders" to access the Orders page.',
                position: 'left',
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
            const ordersLink = document.querySelector('.custom-dropdown-item[href="/orders"]') as HTMLElement;
            ordersLink.click();
            step2.exit(true);
            setTimeout(() => { automateCheckOrderStep3().start(); } , 800);
        }
    });

    return step2;
};

const automateCheckOrderStep3 = () => {   
    const step3 = introJs().setOptions({
        steps: [
            {
                element: '.cart-item1',
                intro: 'Scroll to the Order List section to view your orders.',
            },
            {
                element: '.action-button-1240010',
                intro: 'Select the "Track Order" button to view tracking details.',
            },
            {
                element: '.tracking-status-container',
                intro: 'This section displays the current tracking status of your order.',
            },
            {
                element: '.not-suppose-to-show-up',
                intro: 'not suppose to show up',
            },
        ],
        exitOnOverlayClick: false,
        disableInteraction: false, // Disable direct interaction to force guided clicks
    });
    
    step3.onafterchange((targetElement) => {
        if (step3._currentStep === 2) {
            const trackOrderButton = document.querySelector('.action-button-1240010') as HTMLElement;
            if (trackOrderButton) {
                trackOrderButton.click();
                step3.exit(true);
                setTimeout(() => { automateCheckOrderStep4().start(); } , 800);
            }
        }
    });

    return step3;
};

const automateCheckOrderStep4 = () => {
    const step4 = introJs().setOptions({
        steps: [
            {
                element: '.tracking-status-container',
                intro: 'This section displays the current tracking status of your order.',
            },

        ],
        exitOnOverlayClick: false,
        disableInteraction: false, // Disable direct interaction to force guided clicks
    });
    return step4;
};