import KakaoTalkIcon from "@/app/components/ui/KakaoTalkIcon";
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
      <KakaoTalkIcon />
      <span>카카오톡 상담</span>
    </a>
  );
}
