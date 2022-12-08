import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/home.module.css";
import Article from "../components/Article";
import CreatePost from "./CreatePost";
import Navbar from "../components/Navbar";
import BlogList from "./BlogList";
import blogPic from "../assets/BlogWorld.png";

const MyBlog = () => {
  return <div> MYblog </div>;
};

const Home = () => {
  // return (
  //   <div className="home">
  //     <div className={styles.container}>
  //       <div className={styles.header}>
  //            <h1> Welcome To Blog World ! </h1>
  //       </div>
  //       <BlogList />
  //     </div>
  //   </div>
  // );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1> Welcome To Blog World ! </h1>
      </div>
      <div className={styles.row}>
        <div className={styles.leftColumn}>
          <BlogList />
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.card}>
              <h2>Your Post </h2>
          <div className={styles.fakeimg}>Image</div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          </div>
          <div className={styles.card}>
            <h3>Popular Post</h3>
            <div className={styles.fakeimg}>Image</div>
            <div className={styles.fakeimg}>Image</div>
            <div className={styles.fakeimg}>Image</div>
          </div>
          <div className={styles.card}>
            <h3>Follow Me</h3>
            <p>Some text..</p>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <h2>Footer</h2>
      </div>
    </div>
  );
};

export default Home;
