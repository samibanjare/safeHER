
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet's missing marker icons issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});

// Coordinates
const BILASPUR_COORDS = [22.0797, 82.1391];

// Risk Areas with custom icons
const highRiskAreas = [
  { lat: 22.0800, lng: 82.1400, severity: 'high', name: 'Railway Station Area', icon: '/icons/alert-high.png' },
  { lat: 22.0700, lng: 82.1300, severity: 'medium', name: 'Bus Stand Vicinity', icon: '/icons/alert-medium.png' },
  { lat: 22.0650, lng: 82.1500, severity: 'high', name: 'Kota Road Late Night', icon: '/icons/alert-high.png' },
  { lat: 22.0750, lng: 82.1250, severity: 'medium', name: 'Ganjpara Market', icon: '/icons/alert-medium.png' },
];

const safeZones = [
  {
    lat: 22.0730,
    lng: 82.1320,
    title: 'Bilaspur Police Station',
    details: 'Phone: 07752-223344<br>24/7 assistance',
    icon: '/icons/police.png',
  },
  {
    lat: 22.0780,
    lng: 82.1450,
    title: "Women's Help Center",
    details: 'Phone: 1091<br>Open 8am-10pm',
    icon: '/icons/help.png',
  },
];

// Map click handler to set coordinates
function LocationClicker() {
  useMapEvents({
    click(e) {
      const input = document.getElementById('incident-location');
      if (input) {
        input.value = `Lat: ${e.latlng.lat.toFixed(4)}, Lng: ${e.latlng.lng.toFixed(4)}`;
      }
    },
  });
  return null;
}

function createIcon(url) {
  return new L.Icon({
    iconUrl: url,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
}

export default function LeafletMapDashboard() {
  return (
    <section id="dashboard" className="py-5 bg-light">
      <div className="container">
        <h2 className="h4 mb-4"><i className="fas fa-chart-line me-2"></i>Bilaspur Safety Dashboard</h2>
        <div className="row g-4">
          {/* Map Container */}
          <div className="col-md-6">
            <div className="border rounded" style={{ height: '400px' }}>
              <MapContainer center={BILASPUR_COORDS} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />

                {/* High Risk Markers */}
                {highRiskAreas.map((area, i) => (
                  <Marker
                    key={i}
                    position={[area.lat, area.lng]}
                    icon={createIcon(area.icon)}
                  >
                    <Popup>
                      <b>{area.name}</b><br />Risk: {area.severity}
                    </Popup>
                  </Marker>
                ))}

                {/* Safe Zones */}
                {safeZones.map((zone, i) => (
                  <Marker
                    key={i}
                    position={[zone.lat, zone.lng]}
                    icon={createIcon(zone.icon)}
                  >
                    <Popup>
                      <span dangerouslySetInnerHTML={{ __html: `<strong>${zone.title}</strong><br>${zone.details}` }} />
                    </Popup>
                  </Marker>
                ))}

                <LocationClicker />
              </MapContainer>
            </div>
          </div>

          {/* Stats & Info */}
          <div className="col-md-6">
            <div className="d-grid gap-3">
              <div className="bg-white p-3 shadow-sm rounded border">
                <h5><i className="fas fa-bell me-2"></i>Incidents Today</h5>
                <div className="fs-4 text-danger" id="today-incidents">18</div>
              </div>
              <div className="bg-white p-3 shadow-sm rounded border">
                <h5><i className="fas fa-exclamation-triangle me-2"></i>High Risk Areas</h5>
                <div className="fs-4 text-warning" id="high-risk">7</div>
              </div>
              <div className="bg-white p-3 shadow-sm rounded border">
                <h5><i className="fas fa-shield-alt me-2"></i>Safety Index</h5>
                <div className="fs-4 text-success" id="safety-index">68%</div>
              </div>
              <input
                type="text"
                id="incident-location"
                className="form-control mt-2"
                placeholder="Click on map to get location"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
