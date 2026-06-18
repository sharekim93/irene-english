import NaverBookingIcon from "@/app/components/ui/NaverBookingIcon";
import {
  InstagramBrandIcon,
  KakaoTalkBrandIcon,
  NaverBlogIcon,
  NaverPlaceIcon,
  YouTubeBrandIcon,
} from "@/app/components/ui/BrandIcons";
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
    className: "text-[#03c75a]",
  },
  {
    label: "네이버 예약",
    href: siteConfig.bookingUrl,
    icon: "naverBooking",
    className: "text-[#03c75a]",
  },
  {
    label: "네이버 블로그",
    href: siteConfig.blogUrl,
    icon: "naverBlog",
    className: "text-[#19ce60]",
  },
  {
    label: "카카오톡 채널",
    href: siteConfig.kakaoChannelUrl,
    icon: "kakao",
    className: "text-[#191919]",
  },
  {
    label: "인스타그램",
    href: siteConfig.instagramUrl,
    icon: "instagram",
    className: "text-[#e1306c]",
  },
  {
    label: "유튜브",
    href: siteConfig.youtubeUrl,
    icon: "youtube",
    className: "text-[#ff0033]",
  },
];

const SocialIcon = ({ name }: { name: SocialIconName }) => {
  if (name === "naverPlace") {
    return <NaverPlaceIcon />;
  }

  if (name === "naverBlog") {
    return <NaverBlogIcon />;
  }

  if (name === "instagram") {
    return <InstagramBrandIcon />;
  }

  if (name === "youtube") {
    return <YouTubeBrandIcon />;
  }

  if (name === "kakao") {
    return <KakaoTalkBrandIcon />;
  }

  if (name === "naverBooking") {
    return <NaverBookingIcon className="h-7 w-7" />;
  }

  return null;
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <hgroup>
              <h3 className="text-xl  mb-4">{siteConfig.name}</h3>
            </hgroup>
            <ul className="mt-5 space-y-2 text-sm leading-6 text-gray-400">
              <li>{siteConfig.shortAddress}</li>
              <li>평일 {siteConfig.openingHoursText}</li>
              <li>
                <a href={siteConfig.telHref} className="hover:text-white">
                  전화 {siteConfig.phone}
                </a>
              </li>
            </ul>
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
            <h4 className="font-semibold mb-4 font-gothic">바로가기</h4>
            <ul className="space-y-2" aria-label="외부 채널">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-sm font-semibold text-gray-400 transition hover:text-white"
                  >
                    <span
                      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center transition group-hover:-translate-y-0.5 ${link.className}`}
                    >
                      <SocialIcon name={link.icon} />
                    </span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
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
