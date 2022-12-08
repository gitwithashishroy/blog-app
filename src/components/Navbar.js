import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";



const Navbar = () => {
 
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Link to="/">
          <img
            className={styles.logoIcons}
            alt=""
            src=""
          />
        </Link>
        <span> BlOG WORLD </span>
        <div className={styles.navLinks}>
          <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/create-post">Create Blog</Link>
              </li>

              <li>
                <Link to="/your-post">Your Post </Link>
              </li>
          </ul>
        </div>
      </div>

      <div className={styles.rightNav}>
        <div className={styles.navLinks}>
          <ul>
              <li>
                <Link to="/tech">Tech</Link>
              </li>

              <li>
                <Link to="/sports">Sports</Link>
              </li>

              <li> <button > Follow </button> </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
