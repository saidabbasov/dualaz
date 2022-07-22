import styles from "./IconBar.module.css";
import aword from "./../../images/aword.svg"
import award from "./../../images/award.png"
import Link from "next/link";
import Image from "next/image";

const IconBar = () => {
    return <div className={styles.iconBar}>
        <div className={styles.iconBarContent}>
        <div className={styles.awardBlock}>
         <Link href="/">
            <a>
                <Image alt="Bytelecom"  height={100} src={aword} width={100} />
            </a>
        </Link>
        </div>
        <div >
            <h2>Zemanet</h2>
            <p>Butun smartfonlara 1il zemanet</p>
        </div>
        </div>
        <div className={styles.iconBarContent}>
        <div><img  alt="slider"  src="./green.png" /></div>
        <div>
            <h2>Zemanet</h2>
            <p>Butun smartfonlara 1il zemanet</p>
        </div>
        </div>
        <div className={styles.iconBarContent}>
        <img  alt="slider"  src="./green.png" />
        <div>
            <h2>Zemanet</h2>
            <p>Butun smartfonlara 1il zemanet</p>
        </div>
        </div>
    </div>
}

export default IconBar;