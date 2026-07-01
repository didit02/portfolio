import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText, ExternalLink, AlertCircle } from "lucide-react";

export default function Resume() {
  const [isLoading, setIsLoading] = useState(true);
  const [pdfError, setPdfError] = useState(false);

  // Path dari public folder
  const pdfPath = "/foto/Aditya Tri Ananta-resume.pdf";

  const handleDownload = () => {
    try {
      const link = document.createElement("a");
      link.href = pdfPath;
      link.download = "Aditya_Tri_Ananta_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download error:", error);
      alert("Download failed. Please try opening the PDF in a new tab.");
    }
  };

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between gap-8"
        >
          <div className="flex-1">
            <div className="font-heading font-semibold text-xs text-primary tracking-[0.2em] uppercase mb-4">
              Professional Profile
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold tracking-[-0.02em]">
              Resume
            </h1>
            <p className="text-muted-foreground mt-4 text-base leading-relaxed max-w-2xl">
              Electrical Engineering professional with proven experience in power plant operations and maintenance analysis.
            </p>
          </div>

          {/* Desktop Download Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary hover:bg-primary hover:text-primary-foreground text-primary font-heading font-semibold text-xs uppercase tracking-[0.15em] transition-all duration-300 rounded-sm flex-shrink-0"
          >
            <Download size={16} />
            Download PDF
          </motion.button>
        </motion.div>

        {/* CV Display Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* PDF Viewer Container */}
          <div className="relative bg-white/5 border border-border/30 rounded-lg overflow-hidden backdrop-blur-sm">
            {/* Loading Indicator */}
            {isLoading && !pdfError && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-10">
                <div className="text-center">
                  <FileText className="w-12 h-12 text-primary/50 mx-auto mb-4 animate-pulse" />
                  <p className="text-muted-foreground font-heading text-sm">
                    Loading CV...
                  </p>
                </div>
              </div>
            )}

            {/* Error State */}
            {pdfError && (
              <div className="w-full h-[600px] md:h-[800px] flex items-center justify-center bg-gradient-to-br from-red-500/10 to-transparent">
                <div className="text-center px-6">
                  <AlertCircle className="w-16 h-16 text-red-500/60 mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-semibold mb-2">PDF Not Found</h3>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    The CV file could not be loaded. Make sure the file is in the <code className="font-mono bg-card/50 px-2 py-1 rounded">public/foto/</code> folder.
                  </p>
                  <a
                    href={pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading font-semibold text-xs uppercase tracking-[0.15em] transition-all duration-300 rounded-sm"
                  >
                    <ExternalLink size={14} />
                    Open PDF in New Tab
                  </a>
                </div>
              </div>
            )}

            {/* PDF Iframe */}
            {!pdfError && (
              <iframe
                src={pdfPath + "#toolbar=0"}
                className="w-full h-screen md:h-[800px] border-0"
                onLoad={() => setIsLoading(false)}
                onError={() => {
                  setIsLoading(false);
                  setPdfError(true);
                }}
                title="Aditya Tri Ananta Resume"
              />
            )}
          </div>

          {/* Info Box Below PDF */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 grid md:grid-cols-2 gap-6"
          >
            {/* Download Info */}
            <div className="border border-border/30 p-6 rounded-lg bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Download className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-semibold mb-2">Download CV</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Click the button below to download my CV as a PDF file for your records.
                  </p>
                  <button
                    onClick={handleDownload}
                    className="text-primary font-heading font-semibold text-xs uppercase tracking-[0.15em] hover:text-primary/80 transition-colors flex items-center gap-2"
                  >
                    Download Now <ExternalLink size={12} />
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="border border-border/30 p-6 rounded-lg bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-semibold mb-2">Profile Information</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-heading font-semibold text-primary">Email:</span>{" "}
                      adityatriananta@gmail.com
                    </p>
                    <p>
                      <span className="font-heading font-semibold text-primary">LinkedIn:</span>{" "}
                      <a
                        href="https://www.linkedin.com/in/aditya-tri-ananta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:underline"
                      >
                        aditya-tri-ananta
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* File Path Info */}
          {pdfError && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 border border-yellow-500/30 bg-yellow-500/5 p-6 rounded-lg"
            >
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-semibold text-yellow-600 mb-2">
                    File Path Information
                  </h4>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>File location should be:</p>
                    <code className="block font-mono bg-card/50 px-3 py-2 rounded border border-yellow-500/20 break-all">
                      project/public/foto/Aditya Tri Ananta-resume.pdf
                    </code>
                    <p className="mt-3">Make sure:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>File is in <code className="font-mono bg-card/50 px-1">public/foto/</code> folder</li>
                      <li>Not in <code className="font-mono bg-card/50 px-1">src/</code> folder</li>
                      <li>Filename is correct</li>
                      <li>Restart dev server after moving files</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Mobile Download Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex justify-center md:hidden"
        >
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary hover:bg-primary hover:text-primary-foreground text-primary font-heading font-semibold text-xs uppercase tracking-[0.15em] transition-all duration-300 rounded-sm"
          >
            <Download size={16} />
            Download PDF
          </button>
        </motion.div>
      </div>
    </div>
  );
}