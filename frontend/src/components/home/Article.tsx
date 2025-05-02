import { useState } from "react";

export default function Article() {
  const [currentPage, setCurrentPage] = useState(1);
  const articles = Array(9).fill({
    title: "기사 제목을 입력하세요.",
    date: "2025 / 04.25",
    content: "일반 설명입니다. MEDIC 설명입니다 일반적인 설명입니다. 보다 나은 자격을 갖추었으므로 고객님에게 가까이 다가 고객님에게 제안드리며 자세히 먼저 자세히 안내해..."
  });

  const totalPages = 7;

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex justify-center items-center mb-8">
        <button className="bg-blue-400 text-white px-6 py-2 rounded-full mr-2">제목</button>
        <div className="relative flex items-center flex-1 border border-gray-600 rounded-full max-w-md">
          <input 
            type="text" 
            placeholder="검색어를 입력하세요." 
            className="w-full py-2 px-4 pr-10"
          />
          <button className="px-4">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="flex flex-col">
            <div className="bg-gray-200 w-full h-40 mb-2"></div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold">{article.title}</h3>
              <span className="text-sm text-gray-600">{article.date}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1 line-clamp-3">{article.content}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-12 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              currentPage === page ? "text-blue-500 font-bold" : "text-gray-500"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
