
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Load Font Awesome icons if not globally available
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneAlt, faShieldAlt, faHospitalAlt, faLifeRing } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faPhoneAlt, faShieldAlt, faHospitalAlt, faLifeRing);

// Emergency contact data
const contacts = [
  { name: 'Bilaspur Police', number: '100' },
  { name: "Women's Helpline", number: '1091' },
  { name: 'Ambulance', number: '102' },
  { name: 'Child Helpline', number: '1098' },
  { name: 'Bilaspur SP Office', number: '07752-223344' },
  { name: 'Domestic Abuse Helpline', number: '181' },
];

export default function Resources() {
  const [emergencyList, setEmergencyList] = useState([]);

  useEffect(() => {
    setEmergencyList(contacts);
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-5">
          <FontAwesomeIcon icon="life-ring" className="me-2 text-primary" />
          Safety Resources
        </h2>
        <div className="row g-4 justify-content-center">
          {/* Emergency Contacts */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">
                  <FontAwesomeIcon icon="phone-alt" className="me-2 text-danger" />
                  Emergency Contacts
                </h5>
                <ul className="list-unstyled mt-3 text-start">
                  {emergencyList.map((contact, index) => (
                    <li key={index} className="d-flex justify-content-between border-bottom py-2">
                      <span>{contact.name}</span>
                      <a href={`tel:${contact.number}`} className="text-primary text-decoration-none fw-bold">
                        {contact.number}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Safety Tips */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">
                  <FontAwesomeIcon icon="shield-alt" className="me-2 text-warning" />
                  Safety Tips
                </h5>
                <ul className="mt-3 text-start">
                  <li>Always inform someone before heading out late.</li>
                  <li>Use public transport wisely.</li>
                  <li>Keep emergency contacts handy.</li>
                  <li>Attend self-defense workshops at Police Line every Saturday</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Help Centers */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">
                  <FontAwesomeIcon icon="hospital-alt" className="me-2 text-success" />
                  Nearby Help Centers
                </h5>
                <p className="mt-3 text-start">Help center map integration coming soon.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
