import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Subpage1 from "./pages/subpages/subpage1";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      {/* 로그인 페이지 */}
      {/* <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} /> */}

      {/* 관리자 페이지 */}
      {/* <Route path="/admin" element={<Admin />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route> */}

      <Route path="/" element={<Layout />}>
        <Route path=":country(kr|us|jp)" element={<Home />}></Route>
        <Route path="subpage1" element={<Subpage1 />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
