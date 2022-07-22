import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./ContentCard.module.css"
import galaxy from "./../../../images/galaxy.svg"

const ContentCard = ({mobileName, price}) => {
  return <div className={styles.contentCard}>
    <div className={styles.container}>
        <div>
        <Link href="/">
            <a>
                <Image alt="Bytelecom"  height={200} src={galaxy} width={200} />
            </a>
        </Link>
        </div>
        <div className={styles.mobileName}>{mobileName}</div>
        <div className={styles.contentSale}>
          <div>{price} ₼</div>
        </div>
    </div>
  </div>
}

export default ContentCard