# Adarsh B A - Final Architecture Portfolio

> A high-performance, interactive, and mechanically advanced portfolio designed for the modern web. Built with raw HTML/CSS/JS without heavy frameworks.

![Portfolio Preview](preview.png)

## ⚡ Core Architecture

This is not a template. This portfolio is engineered from scratch with a heavy focus on performance, security, and developer-centric interactivity. It operates entirely as a **Static Client Application (PWA)** supported by serverless cloud integrations.

### Key Features
* **WebRTC Ecosystem Sync (P2P Remote):** A zero-latency peer-to-peer tunnel powered by `PeerJS`. By clicking "Generate Secure Pairing Code", users can scan a QR code on their mobile device to instantly turn their phone into a live remote control for the laptop view. Features include remote theme toggling, scrolling, confetti injection, and screen glitching.
* **VIP Intelligence System:** A specialized, high-clearance feedback form that bypasses standard channels, routing critical information directly to administrative oversight with red-alert priority.
* **Serverless Contact Pipeline (Google Apps Script + Resend):** Form submissions bypass standard API routes and use a custom, sanitized Google Apps Script proxy. This securely handles dual-email dispatch via the Resend API, protecting the primary `contact@adhi.is-a.dev` inbox while generating instant, professional auto-replies to recruiters.
* **Service Worker PWA Integration:** The architecture utilizes a local `sw.js` Service Worker to heavily cache network requests, fonts, and assets, allowing the portfolio to load instantly and function offline.
* **Dynamic GPU-Accelerated Styling:** No Tailwind. Pure Vanilla CSS using CSS Variables (`var(--bg-color)`), hardware-accelerated animations, and smooth glassmorphism effects tailored for both an *Obsidian Dark* and an *Alpine Light* mode.
* **F12 Developer CTF Security Protocol:** An integrated easter egg designed for developers who open the browser console. It features a brute-force lockout mechanism and utilizes the Web Crypto API to validate a SHA-256 hash against the correct passphrase.

## 🚀 Technologies Used
* **Frontend:** HTML5, CSS3, Vanilla ES6 JavaScript
* **Networking:** WebRTC (PeerJS), Fetch API
* **Backend Proxy:** Google Apps Script (Serverless)
* **Email Provider:** Resend API
* **Icons & Assets:** Feather Icons, QRCode.js, Canvas Confetti

## 🛡️ Privacy & Security
All backend logic, database operations (Google Sheets), and API keys are strictly hidden from this repository and run securely on Google's cloud infrastructure. The static files hosted here represent the client presentation layer exclusively.

---
*Designed and Engineered by Adarsh B A (2026).*
