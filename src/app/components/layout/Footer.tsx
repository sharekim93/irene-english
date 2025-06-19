const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">셀레나 영어</h3>
            <p className="text-gray-400">
              혁신적인 AI 교육 시스템으로
              <br />
              영어 교육의 새로운 패러다임을 제시합니다.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">프로그램</h4>
            <ul className="space-y-2 text-gray-400">
              <li>파닉스 완성</li>
              <li>300만 문장 만들기</li>
              <li>수능 1등급 완성</li>
              <li>AI 프리토킹</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">학원정보</h4>
            <ul className="space-y-2 text-gray-400">
              <li>지점 안내</li>
              <li>교육 과정</li>
              <li>학습 가이드</li>
              <li>교육 철학</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">연락처</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📞 1588-0000</li>
              {/* <li>📧 info@selenaenglish.com</li> */}
              <li>🕒 평일 13:00-18:00</li>
              {/* <li>🕒 토요일 09:00-15:00</li> */}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 셀레나 영어. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
