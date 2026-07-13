/**
 * Ultra-Lightweight Custom Analytics Tracker
 * Uses navigator.sendBeacon for zero-blocking background tracking.
 */
(function() {
    // Replace with your actual webhook/serverless function URL later
    const ANALYTICS_ENDPOINT = 'https://example.com/api/track';

    function sendEvent(eventType, eventData = {}) {
        const payload = {
            type: eventType,
            url: window.location.href,
            path: window.location.pathname,
            referrer: document.referrer,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            screenWidth: window.innerWidth,
            ...eventData
        };

        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });

        // sendBeacon is non-blocking and will fire even if the user closes the page
        if (navigator.sendBeacon) {
            navigator.sendBeacon(ANALYTICS_ENDPOINT, blob);
        } else {
            // Fallback for very old browsers
            fetch(ANALYTICS_ENDPOINT, {
                method: 'POST',
                body: blob,
                keepalive: true
            }).catch(() => {});
        }
    }

    // 1. Track Initial Page View
    window.addEventListener('load', () => {
        sendEvent('page_view', { loadTime: performance.now() });
    });

    // 2. Track Project Clicks
    document.addEventListener('click', (e) => {
        const projectCard = e.target.closest('.project-card') || e.target.closest('.featured-project-card');
        if (projectCard) {
            // Try to extract project ID from onclick attribute if available
            const onClickAttr = projectCard.getAttribute('onclick') || '';
            const match = onClickAttr.match(/openProjectDetails\('([^']+)'\)/);
            const projectId = match ? match[1] : 'unknown';

            sendEvent('project_click', { projectId: projectId });
        }

        // Track Outbound links (Socials, live demos)
        const link = e.target.closest('a');
        if (link && link.hostname !== window.location.hostname) {
            sendEvent('outbound_click', { targetUrl: link.href });
        }
    });
})();
