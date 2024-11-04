import introJs from "intro.js";

export const automateRequestRefundStep1 = () => {
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
                setTimeout(() => { automateRequestRefundStep2().start(); } , 500);
            }
        }
    });

    // Start the Intro.js tour
    step1.start();
};

const automateRequestRefundStep2 = () => {      
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
            setTimeout(() => { automateRequestRefundStep3().start(); } , 800);
        }
    });

    return step2;
};

const automateRequestRefundStep3 = () => {   
    const step3 = introJs().setOptions({
        steps: [
            {
                element: '.cart-item1',
                intro: 'Scroll to the Order List section to view your orders.',
            },
            {
                element: '.action-button-1240000',
                intro: 'Click "Get Product Support".',
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
            const productSupportButton = document.querySelector('.action-button-1240000') as HTMLElement;
            if (productSupportButton) {
                productSupportButton.click();
                step3.exit(true);
                setTimeout(() => { automateRequestRefundStep4().start(); } , 500);
            }
        }
    });

    return step3;
};

const automateRequestRefundStep4 = () => {
    const step4 = introJs().setOptions({
        steps: [
            {
                element: '.custom-dropdown-item-1240000',
                intro: 'From the dropdown menu, select "Request Refund".',
            },
            {
                element: '.not-suppose-to-show-up',
                intro: 'not suppose to show up',
            },

        ],
        exitOnOverlayClick: false,
        disableInteraction: false, // Disable direct interaction to force guided clicks
    });

    step4.onafterchange((targetElement) => {
        if (step4._currentStep === 1) {
            const requestRefundButton = document.querySelector('.custom-dropdown-item-1240000') as HTMLElement;
            if (requestRefundButton) {
                requestRefundButton.click();
                step4.exit(true);
                setTimeout(() => { automateRequestRefundStep5().start(); } , 800);
            }
        }
    });

    return step4;
};

const automateRequestRefundStep5 = () => {
    const step5 = introJs().setOptions({
        steps: [
            {
                element: '.refund-section',
                intro: 'You can view additional information on our [Refund Policy] here.',
            },

        ],
        exitOnOverlayClick: false,
        disableInteraction: false, // Disable direct interaction to force guided clicks
    });
    return step5;
};