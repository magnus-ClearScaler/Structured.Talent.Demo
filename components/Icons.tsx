/**
 * Hand-rolled, 1.5px stroke, currentColor. Six icons is cheaper than any icon
 * package and keeps the shipped JavaScript at zero for this file.
 */
type P = { className?: string };

export function ArrowRight({ className = "h-4 w-4" }: P) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M3.5 10h13m0 0-4.75-4.75M16.5 10l-4.75 4.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Check({ className = "h-4 w-4" }: P) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="m4 10.5 4 4L16 5.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Mail({ className = "h-4 w-4" }: P) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="m3 5.5 7 5 7-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Phone({ className = "h-4 w-4" }: P) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M6.2 3.2h-2A1.2 1.2 0 0 0 3 4.5c0 6.9 5.6 12.5 12.5 12.5a1.2 1.2 0 0 0 1.3-1.2v-2a1 1 0 0 0-.8-1l-2.6-.5a1 1 0 0 0-1 .45l-.7 1a10.3 10.3 0 0 1-4.4-4.4l1-.7a1 1 0 0 0 .45-1L7.2 4A1 1 0 0 0 6.2 3.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinkedIn({ className = "h-4 w-4" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.65h.05c.53-.95 1.83-1.95 3.77-1.95C21.6 8.7 23 10.9 23 14.1V21h-4v-6.1c0-1.46-.03-3.34-2.05-3.34-2.05 0-2.36 1.59-2.36 3.23V21h-4V9Z" />
    </svg>
  );
}

export function Calendar({ className = "h-4 w-4" }: P) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <rect x="2.75" y="4.25" width="14.5" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2.75 8h14.5M6.5 2.75v3M13.5 2.75v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function Quote({ className = "h-6 w-6" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M9.5 5c-3 1.4-4.9 4-4.9 7.2 0 .3 0 .6.05.9A3.4 3.4 0 0 1 7 12.5a3.25 3.25 0 1 1 0 6.5C4.7 19 3 17 3 13.9 3 9.6 5.5 6 9.5 4.2V5Zm10 0c-3 1.4-4.9 4-4.9 7.2 0 .3 0 .6.05.9A3.4 3.4 0 0 1 17 12.5a3.25 3.25 0 1 1 0 6.5c-2.3 0-4-2-4-5.1C13 9.6 15.5 6 19.5 4.2V5Z" />
    </svg>
  );
}
