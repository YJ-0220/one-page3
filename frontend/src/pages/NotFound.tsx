import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">페이지를 찾지 못했습니다.</h1>
      <Link to="/" className="text-2xl font-bold">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
