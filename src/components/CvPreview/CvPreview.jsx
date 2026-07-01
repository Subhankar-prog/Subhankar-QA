import { useState } from "react";
import "./CvPreview.css";

// ✅ UPDATE THIS PATH to your actual CV file in the public/ folder
const CV_PATH = "/Subhankar_CV.pdf";

export default function CvPreview() {
  const [isOpen, setIsOpen] = useState(false);

  const openPreview = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const closePreview = () => {
    setIsOpen(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV_PATH;
    link.download = "Subhankar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <a href="#" onClick={openPreview}>
        Download CV
      </a>

      {isOpen && (
        <div className="cv-overlay" onClick={closePreview}>
          <div className="cv-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cv-modal-header">
              <h3>📄 My Resume</h3>
              <div className="cv-modal-actions">
                <button className="cv-download-btn" onClick={handleDownload}>
                  ⬇ Download
                </button>
                <button className="cv-close-btn" onClick={closePreview}>
                  ✕
                </button>
              </div>
            </div>
            <div className="cv-modal-body">
              <iframe
                src={`${CV_PATH}#toolbar=0&navpanes=0`}
                title="CV Preview"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
