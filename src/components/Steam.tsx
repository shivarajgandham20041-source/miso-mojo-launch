/** Decorative animated steam plumes. Purely visual. */
export function Steam({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="animate-steam absolute bottom-0 block rounded-full bg-ivory/10 blur-2xl"
          style={{
            left: `${12 + i * 22}%`,
            width: `${70 + i * 22}px`,
            height: `${150 + i * 40}px`,
            animationDelay: `${i * 1.7}s`,
          }}
        />
      ))}
    </div>
  );
}
