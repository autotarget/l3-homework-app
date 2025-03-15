import styles from './Article.module.css';

export default function Article(props) {

    return (
        <article className={styles.article}>
            <h2>{props.data.title}</h2>
            <p>{props.data.content}</p>
        </article>
    )
}