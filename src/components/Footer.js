import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
    return (
      <footer className="bg-gray-100 p-4 mt-8 text-center text-sm text-gray-600" >
        <div>&copy; 2025 SafeHer Bilaspur. All rights reserved.</div>

        <div className="footer-links" style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1.5rem'
          }}>
          <a href="/build"><i className="fas fa-lock"></i> Privacy</a>
          <a href="/"><i className="fas fa-file-alt"></i> Terms</a>
          <a href="tel:100"><i className="fas fa-phone-alt"></i> Emergency</a>
          </div>
      </footer>
    );
  }
  