import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationCircle, FaMap } from 'react-icons/fa';

export default function Home() {
  return (
    <section id="home" className="hero bg-light py-5 text-center">
      <div className="container">
        <h1 className="display-4 fw-bold mb-3">Women Safety Platform</h1>
        <p className="lead fw-bold mb-4">Empowering women through data-driven safety solutions in Chhattisgarh</p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link to="/report" className="btn btn-primary d-flex align-items-center gap-2 me-4 mb-2">
            <FaExclamationCircle />
            Report Button
          </Link>
          <Link to="/dashboard" className="btn btn-secondary d-flex align-items-center gap-2 mb-2">
            <FaMap />
            View Safety Map
          </Link>
        </div>
      </div>
    </section>
  );
}
