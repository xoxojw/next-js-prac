import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/NavBar.module.css"

const NavBar = () => {
  const router = useRouter();
  console.log("router >> ", router);
  return (
    <>
      <nav>
        <Link href="/"
          className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}
        >
          Home
        </Link>
        <Link href="/about"
          className={
            [styles.link,
              router.pathname === "/about" ? styles.active : ""]
              .join(" ")
          }
        >
          About
        </Link>
      </nav>
    </>
  );
};

export default NavBar;