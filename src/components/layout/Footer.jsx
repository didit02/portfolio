import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-primary/40 flex items-center justify-center">
              <span className="font-heading font-semibold text-primary text-xs">AT</span>
            </div>
            <span className="font-heading font-medium text-xs text-muted-foreground tracking-wider uppercase">
              © {new Date().getFullYear()} Aditya Tri Ananta
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/aditya-tri-ananta/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/didit02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github size={18} />
            </a>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}