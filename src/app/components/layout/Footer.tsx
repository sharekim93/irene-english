import KakaoTalkIcon from "@/app/components/ui/KakaoTalkIcon";
import NaverBookingIcon from "@/app/components/ui/NaverBookingIcon";
import { navItems, programSummaries, siteConfig } from "@/config/site";

type SocialIconName =
  | "naverPlace"
  | "naverBooking"
  | "naverBlog"
  | "kakao"
  | "instagram"
  | "youtube";

const socialLinks: {
  label: string;
  href: string;
  icon: SocialIconName;
  className: string;
}[] = [
  {
    label: "네이버 플레이스",
    href: siteConfig.placeUrl,
    icon: "naverPlace",
    className:
      "border-[#03c75a] bg-[#03c75a] text-white hover:bg-[#02b350] hover:shadow-lg hover:shadow-[#03c75a]/20",
  },
  {
    label: "네이버 예약",
    href: siteConfig.bookingUrl,
    icon: "naverBooking",
    className:
      "border-[#03c75a] bg-white text-[#03c75a] hover:bg-[#f0fff7] hover:shadow-lg hover:shadow-[#03c75a]/20",
  },
  {
    label: "네이버 블로그",
    href: siteConfig.blogUrl,
    icon: "naverBlog",
    className:
      "border-[#19ce60] bg-[#19ce60] text-white hover:bg-[#13b955] hover:shadow-lg hover:shadow-[#19ce60]/20",
  },
  {
    label: "카카오톡 상담",
    href: siteConfig.kakaoChannelChatUrl,
    icon: "kakao",
    className:
      "border-[#fee500] bg-[#fee500] text-[#191919] hover:bg-[#f2d900] hover:shadow-lg hover:shadow-[#fee500]/20",
  },
  {
    label: "인스타그램",
    href: siteConfig.instagramUrl,
    icon: "instagram",
    className:
      "border-[#e1306c] bg-[#e1306c] text-white hover:bg-[#c92b61] hover:shadow-lg hover:shadow-[#e1306c]/20",
  },
  {
    label: "유튜브",
    href: siteConfig.youtubeUrl,
    icon: "youtube",
    className:
      "border-[#ff0033] bg-[#ff0033] text-white hover:bg-[#df002d] hover:shadow-lg hover:shadow-[#ff0033]/20",
  },
];

const SocialIcon = ({ name }: { name: SocialIconName }) => {
  if (name === "instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
        <rect
          x="5"
          y="5"
          width="14"
          height="14"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="3.25"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="16.5" cy="7.5" r="1.15" fill="currentColor" />
      </svg>
    );
  }

  if (name === "youtube") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
        <path
          d="M21 12c0 2.2-.22 3.75-.68 4.5-.34.56-.9.95-1.55 1.08-1.36.29-6.77.29-6.77.29s-5.41 0-6.77-.29a2.36 2.36 0 0 1-1.55-1.08C3.22 15.75 3 14.2 3 12s.22-3.75.68-4.5c.34-.56.9-.95 1.55-1.08C6.59 6.13 12 6.13 12 6.13s5.41 0 6.77.29c.65.13 1.21.52 1.55 1.08.46.75.68 2.3.68 4.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="m10.5 9.6 4.3 2.4-4.3 2.4V9.6Z" fill="currentColor" />
      </svg>
    );
  }

  if (name === "kakao") {
    return <KakaoTalkIcon />;
  }

  if (name === "naverBooking") {
    return <NaverBookingIcon className="h-6 w-6" />;
  }

  return (
    <span aria-hidden="true" className="text-sm font-black tracking-normal">
      {name === "naverPlace" ? "N" : "B"}
    </span>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <hgroup>
              <h3 className="text-xl  mb-4">{siteConfig.name}</h3>
              <p>{siteConfig.legalName}</p>
            </hgroup>
            <p className="mt-4 text-sm leading-6 text-gray-400">
              석성초, 초당초, 동백역 삼성영어 셀레나 교습소
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">프로그램</h4>
            <ul className="space-y-2 text-gray-400">
              {programSummaries.map((program) => (
                <li key={program.slug}>
                  <a href={program.href} className="hover:text-white">
                    {program.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">학원정보</h4>
            <ul className="space-y-2 text-gray-400">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 font-gothic">연락처</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href={siteConfig.telHref} className="hover:text-white">
                  📞 {siteConfig.phone}
                </a>
              </li>
              <li>🕒 평일 {siteConfig.openingHoursText}</li>
              <li>{siteConfig.shortAddress}</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2" aria-label="외부 채널">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-lg border transition hover:-translate-y-0.5 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${link.className}`}
                >
                  <SocialIcon name={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 font-gothic">
          <p>&copy; 2026 김다영. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
