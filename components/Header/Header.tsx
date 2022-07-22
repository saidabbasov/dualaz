import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./Header.module.css";
import HeaderUp from "./HeaderUp/HeaderUp";
import logo from "./../../images/DualLogo.svg";

const Header:FC = () => {
    return <div>
        <HeaderUp />
        <hr className={styles.hr} />
        <div className={styles.header}>
            <div className={styles.logo}>
                {/* <Link href="/">
                    <a>
                        <Image alt="Dual"  height={64} src={logo} width={176} />
                    </a>
                </Link> */}
                <img alt="" src="./logoNew.jpg" />
            </div>
            {/* <div className={styles.katalog}>
            <img alt="" src="./katalog.jpg" />
            </div> */}
            <div className={styles.inp}>
                <input placeholder="Search" />
            </div>
            <div className={styles.headerBar}>
                <div><img alt="" src="./Component1.png" /></div>
                <div><img alt="" src="./favorite.png" /></div>
                <div><img alt="" src="./Component2.png" /></div>
                <div><img alt="" src="./user.png" /></div>
            </div>
        </div>
    </div>
}

export default Header;