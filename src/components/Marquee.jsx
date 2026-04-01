export function Marquee({ children, speed = 30, className = '' }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex gap-8 w-max"
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {children}
        {children}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
