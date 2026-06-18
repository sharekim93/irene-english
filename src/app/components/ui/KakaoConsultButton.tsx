import { KakaoTalkBrandIcon } from "@/app/components/ui/BrandIcons";
import { siteConfig } from "@/config/site";

type KakaoConsultButtonProps = {
  className?: string;
  tone?: "light" | "dark" | "footer";
};

export default function KakaoConsultButton({
  className = "",
  tone = "light",
}: KakaoConsultButtonProps) {
  return (
    <a
      href={siteConfig.kakaoChannelChatUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`kakao-consult-button kakao-consult-button-${tone} ${className}`}
    >
      <KakaoTalkBrandIcon className="h-6 w-6" />
      <span>카카오톡 상담</span>
    </a>
  );
}
