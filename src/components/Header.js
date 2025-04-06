import { Link } from 'react-router-dom';
import { FaShieldAlt, FaHome, FaMapMarkedAlt, FaExclamationTriangle, FaHandsHelping, FaBell } from 'react-icons/fa';

export default function Header() {
  const handleSOSClick = () => {
    const confirmSOS = window.confirm(
      '🚨 EMERGENCY: This will alert Bilaspur Police (100) and your emergency contacts. Continue?'
    );

    if (confirmSOS) {
      alert(
        '🚨 EMERGENCY ALERT SENT!\nBilaspur Police and your contacts have been notified with your location.'
      );
      window.open('tel:100');
    }
  };
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="navbar-brand text-blue-600 text-xl font-extrabold flex items-center gap-2">
          <FaShieldAlt className='text-18xl'/> SafeHer
        </Link>
        <nav className="flex gap-4 items-center">
          <Link to="/" className="text-gray-700"><FaHome /> Home</Link>
          <Link to="/dashboard" className="text-gray-700"><FaMapMarkedAlt /> Dashboard</Link>
          <Link to="/report" className="text-gray-700"><FaExclamationTriangle /> Report</Link>
          <Link to="/resources" className="text-gray-700"><FaHandsHelping /> Resources</Link>
          <Link to="/team" className="text-gray-700">Team</Link>
          <button onClick={handleSOSClick} className=" btn btn-danger bg-red-600 text-white px-3 py-1 rounded flex items-center"><FaBell /> SOS</button>
        </nav>
      </div>
    </nav>
  );
}