import NaverBookingIcon from "@/app/components/ui/NaverBookingIcon";
import { siteConfig } from "@/config/site";

type NaverBookingButtonProps = {
  className?: string;
  iconClassName?: string;
  tone?: "light" | "solid";
};

export default function NaverBookingButton({
  className = "",
  iconClassName = "h-7 w-7",
  tone = "light",
}: NaverBookingButtonProps) {
  const toneClassName =
    tone === "solid"
      ? "border-[#03c75a] bg-[#03c75a] text-white hover:border-[#02b350] hover:bg-[#02b350]"
      : "border-[#03c75a]/45 bg-white text-[#03c75a] hover:border-[#03c75a] hover:bg-[#f4fff9]";

  const iconToneClassName =
    tone === "solid"
      ? "[&_path:first-of-type]:fill-[#03c75a] [&_path:last-of-type]:fill-none [&_path:last-of-type]:stroke-[#03c75a] [&_rect]:fill-white"
      : "";

  return (
    <a
      href={siteConfig.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl border font-bold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#03c75a]/20 ${toneClassName} ${className}`}
    >
      <NaverBookingIcon className={`${iconClassName} ${iconToneClassName}`} />
      <span>네이버 예약</span>
    </a>
  );
}
