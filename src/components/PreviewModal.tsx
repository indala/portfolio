'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaTimes, FaSpinner } from 'react-icons/fa';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

export default function PreviewModal({ isOpen, onClose, url, title }: PreviewModalProps) {
  const [loading, setLoading] = useState(true);

  // Reset loader whenever URL shifts
  useEffect(() => {
    if (isOpen) {
      setLoading(true);
    }
  }, [url, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md">
          {/* Backdrop click close */}
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative flex flex-col w-full h-[85vh] max-w-6xl bg-card border border-border rounded-2xl overflow-hidden shadow-2xl z-10"
          >
            {/* Header Control Panel */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/30">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Live Site Preview</span>
                <h3 className="text-sm md:text-base font-bold text-foreground truncate max-w-md md:max-w-xl">
                  {title}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-card px-3 text-xs font-semibold text-foreground hover:bg-accent transition-colors"
                  title="Open site in new tab"
                >
                  <FaExternalLinkAlt className="h-3 w-3" />
                  <span className="hidden sm:inline">Open in New Tab</span>
                </a>

                <button
                  onClick={onClose}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer"
                  title="Close preview"
                >
                  <FaTimes className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Frame Viewport */}
            <div className="relative flex-1 bg-background">
              {/* Spinner Overlay */}
              {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background/90 z-20">
                  <FaSpinner className="h-8 w-8 animate-spin text-primary" />
                  <span className="text-xs text-muted-foreground font-medium animate-pulse">
                    Connecting to secure viewport...
                  </span>
                </div>
              )}

              <iframe
                src={url}
                title={title}
                className="w-full h-full border-none bg-white"
                onLoad={() => setLoading(false)}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
