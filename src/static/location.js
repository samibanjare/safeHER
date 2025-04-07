let currentLink = '';

    function startSharing() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const link = `https://www.google.com/maps?q=${lat},${lon}`;
          document.getElementById('status').textContent = `Location: ${lat}, ${lon}`;
          document.getElementById('shareLink').value = link;
          currentLink = link;
        }, err => {
          document.getElementById('status').textContent = 'Error: ' + err.message;
        });
      } else {
        document.getElementById('status').textContent = 'Geolocation not supported.';
      }
    }

    function copyLink() {
      const shareInput = document.getElementById('shareLink');
      shareInput.select();
      shareInput.setSelectionRange(0, 99999); // For mobile
      document.execCommand('copy');
      alert('Link copied to clipboard!');
    }

    function nativeShare() {
      if (navigator.share) {
        navigator.share({
          title: 'My Live Location',
          text: 'Check my live location:',
          url: currentLink
        }).catch(error => {
          alert('Sharing failed: ' + error);
        });
      } else {
        alert('Your browser does not support native sharing. Copy the link instead.');
      }
    }