import Title from "../../common/title/Title";
import HomeCatalog from "../../components/HomeCatalog/HomeCatalog";
import Prewiew from "../../components/Preview/Preview";
import Slider from "../../components/Slider/Slider";
import styles from "./Home.module.css"

const Home = () => {
    return (
        <div className="main">
            <div className={styles.home}>
                <Prewiew/>
                <HomeCatalog/>
            </div>
        </div>
    )
}

export default Home;