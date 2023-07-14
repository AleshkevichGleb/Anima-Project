import { useDispatch, useSelector } from "react-redux";
import MyButton from "../../../common/button/MyButton";
import styles from "./ProductComments.module.css";
// import { getComments, getCommentsFetch } from "../../../reducers/commentsSlice";
import { useEffect } from "react";
import loaderImage from "../../../assets/images/loader-icon.svg";
import { getComments } from "../../../reducers/commentsSlice";

const ProductComments = ({id}) => {
    const dispatch = useDispatch();
    const {error, comments, isLoading} = useSelector(state => state.comments);
    console.log(error, comments, isLoading);

    const fetchComments = () => {
        // dispatch(getCommentsFetch(id))
        dispatch(getComments(id));
    }

    return (
        <div className={styles.commentsBlock}>
            <MyButton
                addStyles={styles.button}
                onClick = {fetchComments}
            >
                Посмотреть отзывы
            </MyButton>
            <div className={styles.comments}>
                {isLoading
                    ?   <img src={loaderImage} alt="" />
                    :   <div className={styles.comments__container}>
                            {comments.map(comment => 
                                <div className={styles.comment} key={comment.id}>
                                    <div className={styles.comment__titleContainer}>
                                        <span className={styles.comment__name}><b>Имя:</b> {comment.name}</span>
                                        <span className={styles.comment__email}><b>Почта:</b> {comment.email}</span>
                                    </div>
                                    <span className={styles.comment__comment}>{comment.body}</span>
                                </div>    
                            )}
                        </div>
                }
            </div>
        </div>
    )
}

export default ProductComments;