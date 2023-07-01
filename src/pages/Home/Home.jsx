import Title from "../../common/title/Title";
import Prewiew from "../../components/Preview/Preview";
import Slider from "../../components/Slider/Slider";
import styles from "./Home.module.css"

const Home = () => {
    return (
        <div className="main">
            <div className={styles.home}>
                <Prewiew/>
                <div className={styles.home__container}>
                    <Title
                        addStyles1={styles.titleContainer}
                        title_p1='Изделия из '
                        title_p2='натурального камня'
                    />

                </div>
            </div>
        </div>
    )
}

export default Home;