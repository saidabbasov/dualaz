import { FC } from "react";
import Head from 'next/head'
import Content from "../components/Content/Content";
import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";
import IconBar from "../components/IconBar/IconBar";
import Slider from "../components/Slider/Slider";
import styles from "./Landing.module.css";

const Landing:FC = () => {
    return <div className={styles.container}>
    <Head>
    <Header />
    </Head>
    <Slider />
    <IconBar />
    <Content/>
    {/* <main className={styles.main}>
    
    </main> */}
    <Footer />
  </div>
}

export default Landing;