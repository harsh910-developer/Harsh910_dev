import React from "react";

export const WebDesignIcon = ({
  className = "h-6 w-6",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path d="M3 8h18M8 3v5M16 3v5" stroke="currentColor" strokeWidth="2" />
    <circle cx="7" cy="14" r="2" fill="currentColor" opacity="0.3" />
    <circle cx="17" cy="14" r="2" fill="currentColor" opacity="0.3" />
    <path
      d="M9 14h6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const ChatbotIcon = ({
  className = "h-6 w-6",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04 1.05 4.36L2 22l5.64-1.05C9.96 21.64 11.46 22 13 22h6c1.1 0 2-.9 2-2v-6c0-5.52-4.48-10-9-10z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="8" cy="12" r="1" fill="currentColor" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
    <circle cx="16" cy="12" r="1" fill="currentColor" />
    <path
      d="M19 16v2a1 1 0 01-1 1h-2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const ContentWritingIcon = ({
  className = "h-6 w-6",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <polyline
      points="14,2 14,8 20,8"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <line
      x1="16"
      y1="13"
      x2="8"
      y2="13"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="16"
      y1="17"
      x2="8"
      y2="17"
      stroke="currentColor"
      strokeWidth="2"
    />
    <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" />
    <circle cx="18" cy="4" r="2" fill="currentColor" opacity="0.3" />
  </svg>
);

export const PortfolioIcon = ({
  className = "h-6 w-6",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <rect
      x="6"
      y="8"
      width="4"
      height="3"
      rx="1"
      fill="currentColor"
      opacity="0.3"
    />
    <rect
      x="14"
      y="8"
      width="4"
      height="3"
      rx="1"
      fill="currentColor"
      opacity="0.3"
    />
    <line
      x1="6"
      y1="15"
      x2="18"
      y2="15"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="6"
      y1="17"
      x2="14"
      y2="17"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

export const HeroIllustration = ({
  className = "w-full h-full",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
        <stop
          offset="100%"
          stopColor="hsl(var(--primary))"
          stopOpacity="0.05"
        />
      </linearGradient>
    </defs>

    {/* Background shapes */}
    <circle cx="320" cy="80" r="60" fill="url(#heroGradient)" />
    <circle cx="80" cy="220" r="40" fill="url(#heroGradient)" />

    {/* Main illustration */}
    <rect
      x="100"
      y="80"
      width="200"
      height="140"
      rx="10"
      stroke="hsl(var(--primary))"
      strokeWidth="2"
      fill="none"
    />

    {/* Screen content */}
    <rect
      x="120"
      y="100"
      width="160"
      height="4"
      rx="2"
      fill="hsl(var(--primary))"
      opacity="0.3"
    />
    <rect
      x="120"
      y="110"
      width="120"
      height="4"
      rx="2"
      fill="hsl(var(--primary))"
      opacity="0.2"
    />
    <rect
      x="120"
      y="120"
      width="140"
      height="4"
      rx="2"
      fill="hsl(var(--primary))"
      opacity="0.2"
    />

    {/* Code blocks */}
    <rect
      x="120"
      y="140"
      width="60"
      height="30"
      rx="4"
      fill="hsl(var(--primary))"
      opacity="0.1"
    />
    <rect
      x="190"
      y="140"
      width="60"
      height="30"
      rx="4"
      fill="hsl(var(--primary))"
      opacity="0.1"
    />

    {/* Floating elements */}
    <circle cx="350" cy="150" r="3" fill="hsl(var(--primary))" opacity="0.6" />
    <circle cx="50" cy="120" r="2" fill="hsl(var(--primary))" opacity="0.4" />
    <circle cx="370" cy="200" r="2" fill="hsl(var(--primary))" opacity="0.5" />
  </svg>
);

export const ProcessIcon = ({
  className = "h-6 w-6",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3" />
  </svg>
);

export const CaseStudyIcon = ({
  className = "h-6 w-6",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M7 8h10M7 12h8M7 16h6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="18" cy="6" r="2" fill="currentColor" opacity="0.3" />
  </svg>
);

export const QuoteIcon = ({
  className = "h-6 w-6",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
      fill="currentColor"
      opacity="0.3"
    />
    <path
      d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
      fill="currentColor"
      opacity="0.3"
    />
  </svg>
);

export const LeadGenerationIcon = ({
  className = "h-6 w-6",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3v12m0 0l-4-4m4 4l4-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="19" r="2" fill="currentColor" opacity="0.3" />
  </svg>
);
