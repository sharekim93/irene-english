import { navItems, programSummaries, siteConfig } from "@/config/site";

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
              석성초, 초당초, 동백역 생활권의 1:1 관리형 삼성영어셀레나
              교습소입니다.
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
