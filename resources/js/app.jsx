import './bootstrap';
import '../css/app.css';

import { createRoot }                           from 'react-dom/client';
import { createInertiaApp }                     from '@inertiajs/react';
import { Inertia }                              from "@inertiajs/inertia";
import { resolvePageComponent }                 from 'laravel-vite-plugin/inertia-helpers';


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'The Powers Company';

/* Checking the Page for the 'success' state. */
Inertia.on('success', (e) => {

    /* Setting a Local Storage Variable. */
    let isAuthenticated = e.detail.page.props.auth.user !== null;

    /* Setting the Local Storage Variable isAuthenticated */
    window.localStorage.setItem('isAuthenticated', isAuthenticated);
})



/* Adding the eventListener to check if is Authenticated */
window.addEventListener('popstate', (e) => {

    /* If is Not Authenticated */
    if(window.localStorage.getItem('isAuthenticated') === 'false'){

        e.stopImmediatePropagation();

        window.location.replace('/')
    }
})


createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});

