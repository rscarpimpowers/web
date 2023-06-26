import './bootstrap';
import '../css/app.css';

import { createRoot }                   from 'react-dom/client';
import { createInertiaApp }             from '@inertiajs/react';
import { resolvePageComponent }         from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';



/* Adding a window event Listener to check for the local storage. */
window.addEventListener('popstate', (e) => {

    if(window.localStorage.getItem('isAuthenticated') === 'false'){

        e.stopImmediatePropagation();

        window.location.replace('/');
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
