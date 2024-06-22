import PageNotFound from "./PageNotFound";
import articles from "./article-content";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
  const params = useParams();
  const articleId = params.articleId;
  const article = articles.find((article) => article.name === articleId);
  if (!article) {
    return <PageNotFound />;
  }
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </>
  );
};

export default ArticlePage;
