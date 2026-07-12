const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Swap Navbar Links
const navOld1 = '<a href="#connect" class="nav-link">Contact</a>';
const navOld2 = '<a href="#lab" class="nav-link">Hardware & AI Lab</a>';
if (html.includes(navOld1) && html.includes(navOld2)) {
    // We will find the block and swap it.
    const navBlockRegex = /<a href="#connect" class="nav-link">Contact<\/a>\s*<a href="#lab" class="nav-link">Hardware & AI Lab<\/a>/g;
    html = html.replace(navBlockRegex, '<a href="#lab" class="nav-link">Hardware & AI Lab</a>\n            <a href="#connect" class="nav-link">Contact</a>');
    console.log("Navbar swapped successfully.");
} else {
    console.log("Navbar target not found.");
}

// 2. Insert Social Links
const ctaRegex = /<div class="hero-cta fade-in">[\s\S]*?<\/div>/;
const socialsBlock = `
            <div class="hero-socials fade-in" style="margin-top: 2rem; display: flex; gap: 1.5rem; justify-content: center; align-items: center;">
                <a href="https://github.com/developeradhi" target="_blank" aria-label="GitHub" class="social-icon" style="color: var(--text-main); transition: color 0.3s;"><i data-feather="github" style="width: 24px; height: 24px;"></i></a>
                <a href="https://linkedin.com/in/developeradhi" target="_blank" aria-label="LinkedIn" class="social-icon" style="color: var(--text-main); transition: color 0.3s;"><i data-feather="linkedin" style="width: 24px; height: 24px;"></i></a>
                <a href="https://x.com/itzz__adhi" target="_blank" aria-label="Twitter" class="social-icon" style="color: var(--text-main); transition: color 0.3s;"><i data-feather="twitter" style="width: 24px; height: 24px;"></i></a>
                <a href="https://instagram.com/itzz__adhi" target="_blank" aria-label="Instagram" class="social-icon" style="color: var(--text-main); transition: color 0.3s;"><i data-feather="instagram" style="width: 24px; height: 24px;"></i></a>
            </div>`;

if (!html.includes('hero-socials')) {
    const match = html.match(ctaRegex);
    if (match) {
        html = html.replace(ctaRegex, match[0] + '\n' + socialsBlock);
        console.log("Socials added successfully.");
    } else {
        console.log("Hero CTA not found.");
    }
} else {
    console.log("Socials already exist.");
}

fs.writeFileSync('index.html', html, 'utf8');
console.log("Finished replacing.");
