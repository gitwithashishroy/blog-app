import React from "react";
import styles from "../styles/blog.module.css";

const Article = ({ article }) => {
  //  console.log(article) ;

  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleImage}>
        <img src={article.urlToImage} alt="article-pic" />
      </div>
      <div className={styles.articleCategory}>{article.source.id}</div>
      <div className={styles.articleTitle}> {article.title} </div>
      <div className={styles.author}>
       
         <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="author-pic" /> 
  
        <span>
        {article.author}
        </span>  </div>
    </div>
  );
};

export default Article;
