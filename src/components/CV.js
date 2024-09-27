import React from 'react';
import resume from '../images/resume.pdf'; // Update with the correct path to your resume PDF
import './CV.css';

const CV = () => {
  return (
    <div>
      <h1>My Resume</h1>
      <iframe 
        src={resume} 
        width="90%" 
        height="900px" 
        title="Resume PDF" 
        style={{ border: 'none' }}
      >
        This browser does not support PDFs. Please download the PDF to view it: <a href={resume}>Download PDF</a>.
      </iframe>
    </div>
  );
};

export default CV;
