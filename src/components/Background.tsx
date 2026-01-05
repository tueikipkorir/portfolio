"use client";

export default function Background() {
  return (
    <>
      {/* Animated wave lines */}
      <div className="fixed inset-0 z-[-2] overflow-hidden pointer-events-none">
        {[10, 25, 40, 55, 70, 85].map((top, i) => (
          <div
            key={i}
            className="absolute w-[200%] h-0.5 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-magenta opacity-10 animate-wave"
            style={{
              top: `${top}%`,
              animationDelay: `${-i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div
        className="fixed inset-0 z-[-1] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </>
  );
}
