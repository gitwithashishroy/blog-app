import React from "react";
import { useEffect, useState } from "react";
import Article from "../components/Article";
import styles from '../styles/blog.module.css' ; 
import Data  from '../assets/data.json' ; 
import { Link } from "react-router-dom" ; 

const BlogList = () => {
  const [data, setData] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   fetch(
  //     "https://newsapi.org/v2/top-headlines?country=us&apiKey=300be0372ce64ead840346911752051c"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.articles);
  //       setData(data);
  //       setError(null);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       console.log(err);
  //       setData(null);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });

    

  // }, []);

  return (
    <div className={styles.blogListContainer}>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`} </div>
      )}

      {data &&
        Data.map((article , index) => (
          <a href={article.url}>
             <Article article={article} key={`article-${index}`} />
          </a>
        ))}
    </div>
  );
};

export default BlogList;
