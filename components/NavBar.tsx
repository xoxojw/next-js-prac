import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  console.log("router >> ", router);
  return (
    <>
      <nav>
        <Link href="/" className={router.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link href="/about" className={router.pathname === "/about" ? "active" : ""}>
          About
        </Link>
        <style jsx global>{`
          nav {
            padding: 20px;
            background-color: #a8ddff;
            user-select: none; 
          }
          a {
            margin-right: 10px;
            color: #848484;
            text-decoration: none;
            transition: all 0.2s ease-in-out;
          }
          a:hover {
            color: white;
          }
          .active {
            color: #ff9f7f;
          }
        `}</style>
      </nav>
    </>
  );
};

export default NavBar;