import LOGO from "../../assets/logo.png";

export default function Introduce() {
  return (
    <div className="bg-white flex items-center justify-center pb-10">
      <div className="w-1/2 mx-auto items-center justify-center">
        <div>
          <h1 className="text-8xl font-black text-blue-400 px-10 py-4">
            ESTHETIC <br />
            MEDIC
          </h1>
          <p className="text-xl font-bold text-gray-900 px-10">
            WHEN YOU WANT TO BE HEALTHY AND PRETTY <span className="text-blue-400">ESMEDIC</span>
          </p>
        </div>
        <div className="px-10 mt-8">
          <button className="bg-white text-gray-600 px-6 py-2 rounded-full border border-gray-300 mb-8">
            MORE
          </button>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center space-x-4 border-b p-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg"></div>
                <div className="flex-1">
                  <p className="text-xl font-black px-4">기사 제목을 입력하세요...</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 border border-gray-600 px-3 py-1 rounded-full">CATEGORY</span>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <img src={LOGO} alt="둥그런 원" className="absolute z-10 top-1/4 w-40 h-40" />
      </div>
      <div className="w-1/2 relative">
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 text-center">
          <h2 className="text-4xl font-bold mb-4">건강하게<br />예뻐지고 싶을때,</h2>
          <p className="text-sm">
            실무에서 프로는 12년 이상의 임상 경험을<br />
            바탕으로, 완전하고 뛰어난 고객력을 자랑하는<br />
            비수술적 리포칭 솔루션입니다.
          </p>
        </div>
        <img
          src="/path-to-your-image.jpg"
          alt="에스테틱 메딕 소개 이미지"
          className="bg-gray-700 w-full h-screen object-cover rounded-l-xl"
        />
      </div>
    </div>
  );
}
