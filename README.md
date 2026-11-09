# ZM Studio Photography & Videography

A world-class, modern, luxurious, and responsive photography and videography studio website designed for **ZM Studio**. Built with a **Premium Black & Gold** aesthetic, dark cinematic ambiance, interactive lightbox gallery, and automated WhatsApp booking integration.

---

## 🌟 Key Features

1. **Premium Black & Gold Theme**:
   - Deep obsidian backgrounds (`#08080a`, `#111116`) with metallic gold accents (`#d4af37`, `#edd485`).
   - Ambient gold glows, frosted glassmorphism, and subtle border lighting.
   - Luxury typography pairing: **Cinzel** (classic serif headlines), **Playfair Display** (editorial accents), and **Plus Jakarta Sans** (clean, modern legibility).

2. **Hero Section**:
   - Headline: *"Capturing Your Beautiful Moments."*
   - Subtitle: *"Professional Photography & Videography Services by ZM Studio."*
   - Dual Call-to-Actions: **Book Your Shoot** (instant scroll & WhatsApp integration) and **View Portfolio**.
   - Studio highlight badges (Cinematic 4K, Weddings & Events, Creative Shoots, Instant WhatsApp).

3. **About ZM Studio**:
   - Honest, authentic introduction emphasizing artistic passion, emotion, and technical mastery.
   - Strictly adhering to guidelines: **No fake reviews, no fake awards, no placeholder deception**.
   - Highlights studio philosophy, gear excellence, and personalized consultation.

4. **All 6 Core Photography & Videography Services**:
   - **Photography**: Professional photography, high-quality pictures, creative photoshoots, memorable photography.
   - **Videography**: Professional video recording, event coverage, editing, cinematic video production.
   - **Wedding Shoot**: Barat, Walima, Mehndi, bridal & groom portraits, albums, and cinematic highlights.
   - **Events & Parties**: Birthdays, family functions, special event coverage, parties, event videography.
   - **Portrait Shoot**: Individual photoshoots, executive portraits, creative concepts, personal modeling portfolios.
   - **Outdoor Shoot**: Natural location shoots, golden hour lighting, couple outdoor shoots, scenic photography.
   - *Each service card has a **"Book This Shoot"** button that automatically pre-selects that specific service in the booking form!*

5. **Curated Portfolio with Interactive Lightbox**:
   - Category filtering: **All Works**, **Wedding Shoot**, **Events & Parties**, **Portrait Shoot**, **Outdoor Shoot**, and **Videography**.
   - Fullscreen Lightbox with:
     - High-resolution imagery
     - Keyboard navigation (Left/Right arrow keys, Escape to close)
     - Next / Previous buttons
     - Image counter & captions
     - Direct *"Book Shoot in this Style"* button inside the lightbox modal.

6. **Why Choose Us (6 Pillars)**:
   - Professional Photography Style
   - Creative Photography
   - High-Quality Pictures
   - Beautiful Memories
   - Friendly Customer Service
   - Attention to Detail

7. **Direct WhatsApp Booking Engine**:
   - Form fields: Client Name, Contact Number, Select Service, Event Date (with automatic minimum date validation), Location/Venue, and Message.
   - **Live WhatsApp Message Preview**: dynamically displays the exact formatted message before sending.
   - Clicking *"Book Now via WhatsApp"* automatically formats a clean WhatsApp message and launches WhatsApp directly:
     ```text
     🌟 *NEW SHOOT BOOKING REQUEST* 🌟
     ----------------------------------
     👤 *Client Name:* [Name]
     📞 *Contact Number:* [Phone]
     📸 *Service Requested:* [Service]
     📅 *Event Date:* [Date]
     📍 *Shoot Location:* [Location]
     💬 *Message/Notes:* [Message]
     ----------------------------------
     Studio: ZM Studio Photography & Videography
     Location: Multan Road, Near Polytechnic College
     Official Contact: 03449170933
     ```

8. **Contact & Studio Location**:
   - **Owner:** ZM Studio
   - **Phone & WhatsApp:** 03449170933 (with functional click-to-call and click-to-chat buttons)
   - **Location:** Multan Road, Near Polytechnic College
   - Working Google Maps iframe integration (with clear instructions for exact coordinate fine-tuning)
   - Secondary Quick Inquiry Form
   - Floating WhatsApp & Quick Call buttons for high mobile conversions

---

## 📁 Project Structure

```
ZM Studio-awan-photography/
│
├── index.html        # Semantic HTML5 markup, Tailwind CDN configuration & metadata
├── style.css         # Custom Black & Gold styling, animations, lightbox styles
├── script.js         # Modular JavaScript (Config, Portfolio data, Lightbox, WhatsApp booking)
└── README.md         # Comprehensive setup, deployment & customization documentation
```

---

## 🚀 How to Run Locally

This project is completely self-contained and does not require node.js, npm, or complex build steps:

1. **Option 1: Direct Browser Launch**
   - Simply double-click `index.html` to open it in your preferred web browser (Chrome, Edge, Firefox, Safari).

2. **Option 2: VS Code / Live Server**
   - Right-click `index.html` and select **"Open with Live Server"**.

3. **Option 3: Python Local HTTP Server**
   ```bash
   cd "C:\Users\FAISAL REHMAN\.gemini\antigravity\scratch\ZM Studio-awan-photography"
   python -m http.server 8000
   ```
   Open `http://localhost:8000` in your browser.

---

## 🛠️ How to Customize

### 1. Update Personal & Studio Information
Open `script.js` and edit the `siteConfig` object at the very top:
```javascript
const siteConfig = {
    ownerName: "ZM Studio",
    phoneDisplay: "03449170933",
    phoneTel: "+923449170933",
    whatsappNumber: "923449170933", // International format without 0 or +
    address: "Multan Road, Near Polytechnic College",
    studioHours: "Monday – Sunday: 10:00 AM – 10:00 PM (Events 24/7)"
};
```

### 2. Replace Portfolio Images
Open `script.js` and update the `portfolioItems` array. You can replace the Unsplash URLs with your own image URLs or local image files (e.g. `images/wedding-1.jpg`):
```javascript
{
    id: 1,
    title: "Royal Barat Ceremony",
    category: "wedding",
    categoryLabel: "Wedding Shoot",
    image: "YOUR_IMAGE_URL_OR_PATH_HERE",
    description: "Capturing the emotion and royal attire at a grand Barat celebration."
}
```

### 3. Fine-Tune the Google Maps Location Pin
In `index.html`, locate the `<iframe>` in the Contact section:
```html
<iframe 
    id="google-maps-frame"
    src="https://maps.google.com/maps?q=Polytechnic%20College%20Multan%20Road&t=&z=14&ie=UTF8&iwloc=&output=embed"
    ...
></iframe>
```
To pinpoint the exact coordinates or studio name, replace `Polytechnic%20College%20Multan%20Road` with your exact Google Maps Plus Code or GPS coordinates (e.g. `31.5204,74.3587`).

---

## 🌐 Free 1-Click Deployment Options

- **Netlify**: Drag-and-drop the `ZM Studio-awan-photography` folder into [Netlify Drop](https://app.netlify.com/drop) to publish instantly with free SSL and custom domain support.
- **GitHub Pages**: Push this directory to a GitHub repository and enable GitHub Pages in Settings -> Pages.
- **Vercel**: Run `vercel` in this directory or connect your GitHub repository.

---

## 💡 Recommended Active Workspace

To edit and maintain this project directly inside Antigravity, set your active workspace to:
`C:\Users\FAISAL REHMAN\.gemini\antigravity\scratch\ZM Studio-awan-photography`
