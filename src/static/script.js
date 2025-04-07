// Bilaspur Coordinates
const BILASPUR_COORDS = [22.0735, 82.1364];

// Initialize Safety Map focused on Bilaspur
function initSafetyMap() {
    const map = L.map('safety-map').setView(BILASPUR_COORDS, 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Bilaspur high-risk areas (sample data)
    const bilaspurHighRiskAreas = [
        { lat: 22.0800, lng: 82.1400, severity: 'high', name: "Railway Station Area" },
        { lat: 22.0700, lng: 82.1300, severity: 'medium', name: "Bus Stand Vicinity" },
        { lat: 22.0650, lng: 82.1500, severity: 'high', name: "Kota Road Late Night" },
        { lat: 22.0750, lng: 82.1250, severity: 'medium', name: "Ganjpara Market" }
    ];

    // Add heatmap-like markers
    bilaspurHighRiskAreas.forEach(area => {
        const color = area.severity === 'high' ? 'red' : 'orange';
        const radius = area.severity === 'high' ? 20 : 15;
        
        L.circleMarker([area.lat, area.lng], {
            radius: radius,
            fillColor: color,
            color: color,
            weight: 1,
            opacity: 1,
            fillOpacity: 0.7
        }).addTo(map).bindPopup(`<b>${area.name}</b><br>Risk: ${area.severity}`);
    });

    // Add safe zones in Bilaspur
    L.marker([22.0730, 82.1320]).addTo(map)
        .bindPopup("<b>Bilaspur Police Station</b><br>Phone: 07752-223344<br>24/7 assistance")
        .openPopup();
    
    L.marker([22.0780, 82.1450]).addTo(map)
        .bindPopup("<b>Women's Help Center</b><br>Phone: 1091<br>Open 8am-10pm");

    // Add click event to update location field
    map.on('click', function(e) {
        document.getElementById('incident-location').value = 
            `Lat: ${e.latlng.lat.toFixed(4)}, Lng: ${e.latlng.lng.toFixed(4)}`;
    });
}

// Initialize Shelters Map for Bilaspur
function initSheltersMap() {
    const sheltersMap = L.map('shelters-map').setView(BILASPUR_COORDS, 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(sheltersMap);

    // Add Bilaspur shelter markers
    L.marker([22.0730, 82.1320]).addTo(sheltersMap)
        .bindPopup("<b>Bilaspur Police Station</b><br>Phone: 07752-223344");
    
    L.marker([22.0780, 82.1450]).addTo(sheltersMap)
        .bindPopup("<b>Women's Help Center</b><br>Phone: 1091");
    
    L.marker([22.0680, 82.1280]).addTo(sheltersMap)
        .bindPopup("<b>District Hospital</b><br>Phone: 102");
}

// Load Chhattisgarh/Bilaspur emergency contacts
function loadEmergencyContacts() {
    const contacts = [
        { name: "Bilaspur Police", number: "100" },
        { name: "Women's Helpline", number: "1091" },
        { name: "Ambulance", number: "102" },
        { name: "Child Helpline", number: "1098" },
        { name: "Bilaspur SP Office", number: "07752-223344" },
        { name: "Domestic Abuse Helpline", number: "181" }
    ];

    const contactsList = document.getElementById('emergency-contacts');
    
    contacts.forEach(contact => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${contact.name}</span>
            <a href="tel:${contact.number}">${contact.number}</a>
        `;
        contactsList.appendChild(li);
    });
}

// Load localized safety tips
function loadSafetyTips() {
    const tips = [
        "Avoid isolated areas near Railway Station after dark",
        "Use autorickshaws from registered stands only",
        "Bilaspur Police offers women's safety escort - call 1091",
        "Keep emergency numbers saved as 'ICE' contacts",
        "Attend self-defense workshops at Police Line every Saturday"
    ];

    const tipsContainer = document.getElementById('safety-tips');
    
    tips.forEach(tip => {
        const tipDiv = document.createElement('div');
        tipDiv.className = 'tip-item';
        tipDiv.textContent = tip;
        tipsContainer.appendChild(tipDiv);
    });
}

// Handle incident report form submission
function setupIncidentForm() {
    const form = document.getElementById('incident-form');
    const uploadBox = document.getElementById('upload-box');
    const fileInput = document.getElementById('evidence-upload');
    
    uploadBox.addEventListener('click', () => fileInput.click());
    
    fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
            uploadBox.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <span>${fileInput.files.length} file(s) selected</span>
                <small>Click to change</small>
            `;
        }
    });
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const incidentType = document.getElementById('incident-type').value;
        const location = document.getElementById('incident-location').value;
        const description = document.getElementById('incident-description').value;
        const isAnonymous = document.getElementById('anonymous-report').checked;
        
        // In a real app, you would send this data to a server
        console.log('Incident Report:', {
            type: incidentType,
            location,
            description,
            isAnonymous,
            files: fileInput.files
        });
        
        alert('Thank you for your report. Your information has been submitted ' + 
              (isAnonymous ? 'anonymously' : '') + 
              '. Help is on the way if needed.');
        
        form.reset();
        uploadBox.innerHTML = `
            <i class="fas fa-cloud-upload-alt"></i>
            <span>Click to upload photos/videos</span>
        `;
    });
}

// SOS Button functionality
function setupSOSButton() {
    const sosBtn = document.querySelector('.emergency-btn');
    
    sosBtn.addEventListener('click', () => {
        const confirmSOS = confirm('EMERGENCY: This will alert Bilaspur Police (100) and your emergency contacts. Continue?');
        
        if (confirmSOS) {
            alert('EMERGENCY ALERT SENT!\nBilaspur Police and your contacts have been notified with your location.');
            window.open('tel:100');
        }
    });
}

// Modal functionality
function setupModals() {
    const signupModal = document.getElementById('signup-modal');
    const loginModal = document.getElementById('login-modal');
    const signupBtn = document.getElementById('signup-btn');
    const loginBtn = document.getElementById('login-btn');
    const closeBtns = document.querySelectorAll('.close-btn');
    const showSignup = document.getElementById('show-signup');

    signupBtn.addEventListener('click', () => signupModal.style.display = 'block');
    loginBtn.addEventListener('click', () => loginModal.style.display = 'block');
    
    showSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'none';
        signupModal.style.display = 'block';
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            signupModal.style.display = 'none';
            loginModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target === signupModal) signupModal.style.display = 'none';
        if (e.target === loginModal) loginModal.style.display = 'none';
    });

    document.getElementById('signup-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Account created successfully! Please login.');
        signupModal.style.display = 'none';
    });

    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Logged in successfully!');
        loginModal.style.display = 'none';
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initSafetyMap();
    initSheltersMap();
    loadEmergencyContacts();
    loadSafetyTips();
    setupIncidentForm();
    setupSOSButton();
    setupModals();
    
    // Update stats periodically (simulated)
    setInterval(() => {
        document.getElementById('today-incidents').textContent = 
            Math.floor(18 + Math.random() * 5);
    }, 5000);
});