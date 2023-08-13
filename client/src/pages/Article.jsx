import React, { useEffect, useState } from "react";
import ArticlePage from "../components/ArticlePage";
import { useParams } from "react-router-dom";
import axios from "axios";

function Article() {
  const { articleId } = useParams();
  const [article, setArticle] = useState();
  const [author, setAuthor] = useState();

  useEffect(() => {
    console.log(articleId);
    fetchArticle();
  }, []);

  function fetchArticle() {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/article/" + articleId)
      .then((res) => {
        console.log(res.data);
        setArticle(res.data);
        return res;
      })
      .then((res) => fetchAuthor(res.data.author_id));
  }

  function fetchAuthor(authorId) {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/author/" + authorId)
      .then((res) => {
        console.log(res.data);
        setAuthor(res.data);
      });
  }

  return (
    <div>
      <ArticlePage data={article} author={author} />
    </div>
  );
}

export default Article;
