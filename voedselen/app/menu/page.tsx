import styles from "./page.module.css";
import logo from "../../public/voedselen.png";
import Image from "next/image";
import Link from "next/link";
import { Montserrat, Montserrat_Alternates } from "next/font/google";
import next from "next";

const montserrat = Montserrat_Alternates({
  weight: "400",
  subsets: ["latin"],
});

export function Header() {
  return <div id={styles.header_wrapper}>
    <div id={styles.header_left}><Image id={styles.logo} src={logo} alt={"logo"}  ></Image></div>
    <div className={styles.header_center}>
     <Link className={styles.header_link} href={"/"}>Home</Link>
     <Link className={styles.header_link} href={"/menu"}>Menu</Link>
     <Link className={styles.header_link} href={"/myorders"}>Orders</Link>
     <Link className={styles.header_link} href={"/reservation"}>Reservations</Link>
    </div>
    <div id={styles.hedaer_right}></div>
     
  </div>;
}

export function Footer() {
  return (
    <div id={styles.footer_wrapper}>
      <div id={styles.footer_left}>
        <Image id={styles.logo} src={logo} alt={"logo"}></Image>
      </div>
      <div id={styles.footer_center}>
        <p>
          Voedselen App <br />
        </p>
        <Link className={styles.link} href={"/"}>
          Home
        </Link>{" "}
        <br />
        <Link className={styles.link} href={"/menu"}>
          Menu
        </Link>{" "}
        <br />
        <Link className={styles.link} href={"/myorder"}>
          Orders
        </Link>{" "}
        <br />
      </div>
      <div id={styles.footer_right}>
        <p>Software S3 DB04 </p>
        <br />
        <Link className={styles.link} href={"/reservation"}>
          Make a Reservation
        </Link>{" "}
        <br />
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <>
     

      <Header />
      <main className={styles.main}>
        <div className={styles.main_div}>
          <h1>Menu page</h1>
        </div>
      </main>
    </>
  );
}
