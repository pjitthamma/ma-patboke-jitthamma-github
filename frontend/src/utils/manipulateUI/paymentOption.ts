import introJs from "intro.js";

export const automatePaymentOptionStep1 = () => {
    const step1 = introJs();

    step1.setOptions({
        steps: [
            {
                element: '.mdiaccount-alert-outline-icon.shopping-cart', // Step 1: Cart icon
                intro: 'Click on the cart icon to view your cart.',
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
            const cartIcon = document.querySelector('.mdiaccount-alert-outline-icon.shopping-cart') as HTMLElement;
            if (cartIcon) {
                cartIcon.click();
                step1.exit(true);
                setTimeout(() => { automatePaymentOptionStep2().start(); } , 800);
            }
        }
    });

    // Start the Intro.js tour
    step1.start();
};

const automatePaymentOptionStep2 = () => {      
    const step2 = introJs().setOptions({
        steps: [
            {
                element: '.rectangle-parent14', // Step 2: Checkout click
                intro: 'Select "Checkout" to proceed to the payment page.',
            },
            {
                element: '.not-suppose-to-show-up',
                intro: 'not suppose to show up',
            },
        ],
        exitOnOverlayClick: false,
        disableInteraction: false,
    });
    
    step2.onafterchange((targetElement) => {
        const currentStep = step2._currentStep;
        if (currentStep === 0) {
            // Ensure the checkout button is scrolled into view if Intro.js doesn't handle it
            const checkoutButton = document.querySelector('.rectangle-parent13') as HTMLElement;
            if (checkoutButton) {
                checkoutButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else if (currentStep === 1) {
            const checkoutButton = document.querySelector('.rectangle-parent14') as HTMLElement;
            if (checkoutButton) {
                checkoutButton.click();
                step2.exit(true);
                setTimeout(() => { automatePaymentOptionStep3().start(); }, 800);
            }
        }
    });

    return step2;
};

const automatePaymentOptionStep3 = () => {   
    const step3 = introJs().setOptions({
        steps: [
            {
                element: '.frame-parent10',
                intro: 'Scroll to the Payment Method section; there are three options available:',
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
        const currentStep = step3._currentStep;
        if (currentStep === 0) {
            // Ensure the checkout button is scrolled into view if Intro.js doesn't handle it
            const paymentMethod = document.querySelector('.your-personal-data-container') as HTMLElement;
            if (paymentMethod) {
                paymentMethod.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else if (currentStep === 1) {
            const bankTransfer = document.querySelector('.bi.bi-info-circle.bank-transfer') as HTMLElement;
            const bankTransferButton = document.querySelector('#bank-transfer') as HTMLElement;
            bankTransferButton.click();
            if (bankTransfer) {
                const mouseOverEvent = new MouseEvent('mouseover', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });
                bankTransfer.dispatchEvent(mouseOverEvent);
                step3.exit(true);
                setTimeout(() => { automatePaymentOptionStep4().start(); } , 500);
            }
        }
    });

    return step3;
};

const automatePaymentOptionStep4 = () => {
    const step4 = introJs().setOptions({
        steps: [
            {
                element: '.tooltip-box',
                intro: '🏛️ Direct Bank Transfer with specified conditions.',
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
            const creditCard = document.querySelector('.bi.bi-info-circle.credit-card') as HTMLElement;
            const creditCardButton = document.querySelector('#credit-card') as HTMLElement;
            creditCardButton.click();
            if (creditCard) {
                const mouseOverEvent = new MouseEvent('mouseover', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });
                creditCard.dispatchEvent(mouseOverEvent);
                step4.exit(true);
                setTimeout(() => { automatePaymentOptionStep5().start(); } , 500);
            }
        }
    });

    return step4;
};

const automatePaymentOptionStep5 = () => {
    const step5 = introJs().setOptions({
        steps: [
            {
                element: '.tooltip-box',
                intro: '💳 Credit Card with specified conditions.',
            },
            {
                element: '.not-suppose-to-show-up',
                intro: 'not suppose to show up',
            },

        ],
        exitOnOverlayClick: false,
        disableInteraction: false, // Disable direct interaction to force guided clicks
    });

    step5.onafterchange((targetElement) => {
        if (step5._currentStep === 1) {
            const cash = document.querySelector('.bi.bi-info-circle.cash') as HTMLElement;
            const cashButton = document.querySelector('#cash') as HTMLElement;
            cashButton.click();
            if (cash) {
                const mouseOverEvent = new MouseEvent('mouseover', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });
                cash.dispatchEvent(mouseOverEvent);
                step5.exit(true);
                setTimeout(() => { automatePaymentOptionStep6().start(); } , 500);
            }
        }
    });

    return step5;
};

const automatePaymentOptionStep6 = () => {
    const step6 = introJs().setOptions({
        steps: [
            {
                element: '.tooltip-box',
                intro: '💵 Cash On Delivery with specified conditions.',
            },

        ],
        exitOnOverlayClick: false,
        disableInteraction: false, // Disable direct interaction to force guided clicks
    });
    
    return step6;
};