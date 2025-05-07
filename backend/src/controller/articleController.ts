import { Request, Response } from "express";
import { getArticles, createArticle } from "../models/articleModel";

// 기사 목록 조회
export const fetchArticles = async (req: Request, res: Response) => {
  try {
    const articles = await getArticles();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch articles" });
  }
};

// 기사 생성
export const postArticle = async (req: Request, res: Response) => {
  const { title, date, content } = req.body;
  try {
    const article = await createArticle(title, date, content);
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ error: "Failed to create article" });
  }
};
