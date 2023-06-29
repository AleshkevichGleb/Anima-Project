import Title from "../../common/title/Title";
import UnderHeader from "../../common/underHeader/UnderHeader";
import { productState } from "../../data/productState";
import styles from "./Products.module.css"

const Products = () => {
    return (
        <>
        <UnderHeader/>
        <div className="main">
            <div className={styles.products}>
                <div className={styles.products__container}>
                    <Title 
                        addStyles1={styles.productsTitle}
                        title_p1='Изделия из ' 
                        title_p2='натурального камня'
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default Products;