import React from 'react';
import { LinkedinIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-warm-100 py-8">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-gray-400">
          © 2026 Daniel He · New York, NY
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/h-dan/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-body text-sm text-gray-400 hover:text-accent transition-colors">
            <LinkedinIcon className="w-4 h-4" />
            linkedin.com/in/h-dan
          </a>
          <span className="text-gray-200">·</span>
          <a
            href="mailto:daniel.xr.he@gmail.com"
            className="font-body text-sm text-gray-400 hover:text-accent transition-colors">
            daniel.xr.he@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}