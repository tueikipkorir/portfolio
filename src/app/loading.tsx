export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="text-center">
        {/* Animated logo/spinner */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-2 border-accent-cyan/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent-cyan animate-spin" />
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-accent-magenta animate-spin [animation-direction:reverse] [animation-duration:1.5s]" />
          <div className="absolute inset-4 rounded-full border-2 border-transparent border-t-accent-purple animate-spin [animation-duration:2s]" />
        </div>
        <p className="text-text-secondary font-mono text-sm">Loading...</p>
      </div>
    </div>
  );
}
