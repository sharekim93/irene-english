type NaverBookingIconProps = {
  className?: string;
};

export default function NaverBookingIcon({
  className = "h-5 w-5",
}: NaverBookingIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className={className}
      focusable="false"
    >
      <rect width="32" height="32" rx="7" fill="#03c75a" />
      <path
        d="M8 9.25h4.55l6.9 9.56V9.25H24v13.5h-4.55l-6.9-9.56v9.56H8V9.25Z"
        fill="white"
      />
      <path
        d="M20.5 23.7 23.2 26 28 20.5"
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
    </svg>
  );
}
