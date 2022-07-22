import styles from "./Slider.module.css"

const Slider = () => {
    return <div className={styles.slider}>
        <div><img  alt="slider"  src="./slideOne.jpg" /></div>
        <div><img  alt="slider"  src="./week.png" /></div>
    </div>
}
export default Slider;