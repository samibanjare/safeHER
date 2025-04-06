import React, { useState } from 'react';

export default function Report() {
  const [fileCount, setFileCount] = useState(0);
  const [incidentData, setIncidentData] = useState({
    type: '',
    location: '',
    description: '',
    isAnonymous: false,
    files: []
  });

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setIncidentData(prev => ({ ...prev, files }));
    setFileCount(files.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Incident Report:', incidentData);
    alert(`Thank you for your report. Your information has been submitted${incidentData.isAnonymous ? ' anonymously' : ''}. Help is on the way if needed.`);

    // Reset
    setIncidentData({
      type: '',
      location: '',
      description: '',
      isAnonymous: false,
      files: []
    });
    setFileCount(0);
    document.getElementById('evidence-upload').value = null;
  };

  return (
    <section className="py-5 min-vh-100 d-flex align-items-center bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                <h2 className="mb-4 h4 text-center fw-bold text-primary">
                  <i className="fas fa-edit me-2"></i>Report an Incident
                </h2>
                <form onSubmit={handleSubmit} className="row g-3">
                  <div className="col-12">
                    <label htmlFor="incident-type" className="form-label">
                      <i className="fas fa-tag me-1"></i>Incident Type
                    </label>
                    <select
                      id="incident-type"
                      className="form-select"
                      value={incidentData.type}
                      required
                      onChange={(e) => setIncidentData(prev => ({ ...prev, type: e.target.value }))}
                    >
                      <option value="">Select type</option>
                      <option value="harassment">Harassment</option>
                      <option value="assault">Assault</option>
                      <option value="stalking">Stalking</option>
                      <option value="domestic-violence">Domestic Violence</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label htmlFor="incident-location" className="form-label">
                      <i className="fas fa-map-marker-alt me-1"></i>Location
                    </label>
                    <input
                      type="text"
                      id="incident-location"
                      className="form-control"
                      placeholder="Enter location in Bilaspur"
                      value={incidentData.location}
                      onChange={(e) => setIncidentData(prev => ({ ...prev, location: e.target.value }))}
                      required
                    />
                    <small className="text-muted">Click on map to select location</small>
                  </div>

                  <div className="col-12">
                    <label htmlFor="incident-description" className="form-label">
                      <i className="fas fa-align-left me-1"></i>Description
                    </label>
                    <textarea
                      id="incident-description"
                      rows="4"
                      className="form-control"
                      value={incidentData.description}
                      onChange={(e) => setIncidentData(prev => ({ ...prev, description: e.target.value }))}
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <label className="form-label">
                      <i className="fas fa-camera me-1"></i>Evidence (Optional)
                    </label>
                    <div
                      className="border rounded p-3 text-center cursor-pointer bg-light"
                      onClick={() => document.getElementById('evidence-upload').click()}
                      style={{ cursor: 'pointer' }}
                    >
                      {fileCount > 0 ? (
                        <>
                          <i className="fas fa-check-circle text-success fs-4"></i>
                          <p className="mb-0">{fileCount} file(s) selected</p>
                          <small className="text-muted">Click to change</small>
                        </>
                      ) : (
                        <>
                          <i className="fas fa-cloud-upload-alt fs-4"></i>
                          <p className="mb-0">Click to upload photos/videos</p>
                        </>
                      )}
                    </div>
                    <input
                      type="file"
                      id="evidence-upload"
                      multiple
                      accept="image/*,video/*"
                      className="d-none"
                      onChange={handleFileChange}
                    />
                  </div>

                  <div className="col-12 form-check">
                    <input
                      type="checkbox"
                      id="anonymous-report"
                      className="form-check-input"
                      checked={incidentData.isAnonymous}
                      onChange={(e) => setIncidentData(prev => ({ ...prev, isAnonymous: e.target.checked }))}
                    />
                    <label htmlFor="anonymous-report" className="form-check-label">
                      Report anonymously
                    </label>
                  </div>

                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary px-5">
                      <i className="fas fa-paper-plane me-2"></i>Submit Report
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}