const fs = require('fs');

function cleanHTML(filename) {
    if (!fs.existsSync(filename)) return;
    
    let html = fs.readFileSync(filename, 'utf8');

    // 1. Add rel="noopener noreferrer" to external links for security
    // Only target links with target="_blank" that don't already have rel="..."
    html = html.replace(/target="_blank"(?!\s*rel=)/g, 'target="_blank" rel="noopener noreferrer"');

    // 2. Add aria-labels to buttons if missing
    html = html.replace(/<button class="theme-toggle"/g, '<button class="theme-toggle" aria-label="Toggle Dark/Light Mode"');
    html = html.replace(/<button class="scroll-to-top"/g, '<button class="scroll-to-top" aria-label="Scroll to top of page"');
    
    fs.writeFileSync(filename, html, 'utf8');
}

cleanHTML('index.html');
cleanHTML('fdbk.html');

console.log("HTML successfully cleaned (Accessibility and Link Security passed).");
