import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./HeaderUp.module.css";

const HeaderUp:FC = () => {
    return <div className={styles.headerUp}>
        <Link href="/">
            <a>
                Haqqimizda
            </a>
        </Link>
        <Link href="/">
            <a>
                Chatdirilma
            </a>
        </Link>
        <Link href="/">
            <a>
                Endirimler!
            </a>
        </Link>
        <Link href="https://api.whatsapp.com/send?phone=994558488087">
            <a target="_blank">
                <div className={styles.wpTitle}><span className={styles.wp}>Whatsappla</span> sifarish et!</div>
            </a>
        </Link>
    </div>
}

export default HeaderUp;