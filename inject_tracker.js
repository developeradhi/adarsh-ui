const fs = require('fs');

function injectTracker(filename) {
    let html = fs.readFileSync(filename, 'utf8');

    if (!html.includes('tracker.js')) {
        // Inject right after the Google Analytics script
        html = html.replace(
            /<script defer src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-4CX5D140CK"><\/script>/,
            '<script defer src="https://www.googletagmanager.com/gtag/js?id=G-4CX5D140CK"></script>\n    <!-- Ultra-lightweight Custom Beacon Analytics -->\n    <script defer src="tracker.js"></script>'
        );
        fs.writeFileSync(filename, html, 'utf8');
    }
}

injectTracker('index.html');
injectTracker('fdbk.html');

// Bump SW
let sw = fs.readFileSync('sw.js', 'utf8');
sw = sw.replace(/obsidian-portfolio-v\d+/, 'obsidian-portfolio-v28');
fs.writeFileSync('sw.js', sw, 'utf8');

// Update task
let task = fs.readFileSync('../brain/1748ee33-4cf4-4896-b8b3-a2fda8fd7fe9/task.md', 'utf8');
task = task.replace('- [/] Implement custom analytics tracker', '- [x] Implement custom analytics tracker');
task = task.replace('- [ ] Create `tracker.js` script using `navigator.sendBeacon`', '- [x] Create `tracker.js` script using `navigator.sendBeacon`');
task = task.replace('- [ ] Inject `<script defer src="tracker.js"></script>` into `index.html` alongside Google Analytics', '- [x] Inject `<script defer src="tracker.js"></script>` into `index.html` alongside Google Analytics');
task = task.replace('- [ ] Inject `<script defer src="tracker.js"></script>` into `fdbk.html` alongside Google Analytics', '- [x] Inject `<script defer src="tracker.js"></script>` into `fdbk.html` alongside Google Analytics');
fs.writeFileSync('../brain/1748ee33-4cf4-4896-b8b3-a2fda8fd7fe9/task.md', task, 'utf8');

console.log("Custom tracker injected successfully!");
