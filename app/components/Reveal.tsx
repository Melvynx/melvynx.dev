import clsx from "clsx";

interface RevealProps {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

/**
 * Fades a block in on load. Delays are staggered by importance: the first
 * blocks appear almost instantly, the last ones trail slightly behind.
 */
export function Reveal({ delay = 0, className, children }: RevealProps) {
  return (
    <div
      className={clsx("reveal", className)}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
