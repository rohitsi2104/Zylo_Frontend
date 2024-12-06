const SVGDecorations = () => (
  <div className="absolute inset-0 z-0">
    {/* Adding random SVG decorations */}
    <svg
      className="absolute left-0 top-1/4 w-24 h-24 opacity-30"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="40" fill="url(#grad1)" />
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#ff7e5f", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#feb47b", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
    <svg
      className="absolute right-0 bottom-1/3 w-32 h-32 opacity-40"
      viewBox="0 0 100 100"
    >
      <rect width="100" height="100" fill="url(#grad2)" />
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#6a11cb", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#2575fc", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default SVGDecorations;