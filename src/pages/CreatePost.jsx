import { useState } from "react";
import { useFormInput } from '../components/hooks';
// import styled , {css} from 'styled-components';
import styles from '../styles/createPost.module.css' ; 


function CreatePost() {
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('title' , title);
    console.log('subtitle' , subTitle);
    console.log('content' , content);

  }

  return (
    <div className={styles.createPost}>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formField}>
          <label>Title</label>
          <input {...title} />
        </div>

        <div className={styles.formField}>
          <label>Category </label>
          <input {...subTitle} />
        </div>

        <div className={styles.formField}>
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>
          
          <button> CreatePost </button>
      </form>
    </div>
  );
}

export default CreatePost;
