import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface ResumeViewerProps {
  onClose: () => void;
}

const ResumeViewer: React.FC<ResumeViewerProps> = ({ onClose }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [scale, setScale] = useState(1.2);
  const pdfUrl = '/HiteshkumarGuptaResume.pdf';

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
  };

  // Adjust scale based on screen width
  React.useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      if (width < 768) { // Mobile devices
        setScale(0.8);
      } else {
        setScale(1.2);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-lg"
      onClick={(e) => e.stopPropagation()}
      onWheel={handleWheel}
    >
      <div className="relative w-full max-w-4xl mx-4 bg-gray-900 rounded-xl shadow-2xl animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h2 className="text-xl font-bold text-white">Resume</h2>
          <div className="flex items-center space-x-4">
            <a
              href={pdfUrl}
              download="Hiteshkumar_Gupta_Resume.pdf"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors"
            >
              <Download size={16} />
              <span>Download</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X size={24} className="text-gray-400 hover:text-white" />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div 
          className="relative p-4 overflow-auto max-h-[80vh] custom-scrollbar"
          onWheel={(e) => e.stopPropagation()}
        >
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            className="flex flex-col items-center"
          >
            {Array.from(new Array(numPages), (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={scale}
                className="mb-4 w-full max-w-full"
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
};

export default ResumeViewer;