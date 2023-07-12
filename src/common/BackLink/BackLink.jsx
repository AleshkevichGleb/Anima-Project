import styles from "./BackLink.module.css";
import { Link, useNavigate } from "react-router-dom";

const BackLink = ({title}) => {
    const navigate = useNavigate();

    return(
        <span className={styles.back} onClick={() => navigate(-1)}>{title}</span>
    )
}

export default BackLink;