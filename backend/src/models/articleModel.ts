import pool from "../config/db";

// 기사 목록 조회
export async function getArticles() {
  const result = await pool.query("SELECT * FROM articles");
  return result.rows;
}

// 기사 생성
export async function createArticle(
  title: string,
  date: string,
  content: string
) {
  const result = await pool.query(
    "INSERT INTO articles (title, date, content) VALUES ($1, $2, $3) RETURNING *",
    [title, date, content]
  );
  return result.rows[0];
}
