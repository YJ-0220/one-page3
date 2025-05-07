import express from "express";
import { fetchArticles, postArticle } from "../controller/articleController";

const router = express.Router();

// 기사 목록 조회
router.get("/", fetchArticles);

// 기사 생성
router.post("/", postArticle);

export default router;
