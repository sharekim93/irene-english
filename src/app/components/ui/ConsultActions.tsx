import { KakaoTalkBrandIcon } from "@/app/components/ui/BrandIcons";
import NaverBookingIcon from "@/app/components/ui/NaverBookingIcon";
import { siteConfig } from "@/config/site";

type ConsultActionsProps = {
  includeMap?: boolean;
  align?: "center" | "start";
  className?: string;
};

export default function ConsultActions({
  includeMap = false,
  align = "center",
  className = "",
}: ConsultActionsProps) {
  const alignmentClassName =
    align === "start"
      ? "items-stretch sm:items-start sm:justify-start"
      : "items-stretch sm:items-center sm:justify-center";

  const actionClassName =
    "min-h-11 px-5 text-sm sm:h-12 sm:px-6 sm:text-base";

  return (
    <div
      data-testid="consult-actions"
      className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${alignmentClassName} ${className}`}
    >
      <a
        href={siteConfig.telHref}
        className={`brand-primary-action brand-focus-ring ${actionClassName}`}
      >
        전화상담하기
      </a>
      <a
        href={siteConfig.kakaoChannelChatUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`brand-secondary-action brand-kakao-action brand-focus-ring ${actionClassName}`}
      >
        <KakaoTalkBrandIcon className="h-5 w-5" />
        <span>카카오톡 상담</span>
      </a>
      <a
        href={siteConfig.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`brand-secondary-action brand-naver-action brand-focus-ring ${actionClassName}`}
      >
        <NaverBookingIcon className="h-5 w-5 [&_path:first-of-type]:fill-[#03c75a] [&_path:last-of-type]:fill-none [&_path:last-of-type]:stroke-[#03c75a] [&_rect]:fill-white" />
        <span>네이버 예약</span>
      </a>
      {includeMap ? (
        <a
          href={siteConfig.placeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`brand-secondary-action brand-naver-action brand-focus-ring ${actionClassName}`}
        >
          네이버 지도
        </a>
      ) : null}
    </div>
  );
}
