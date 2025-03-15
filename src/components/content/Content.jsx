import styles from './Content.module.css'
import Article from '../article/Article'
import articles from './../../data/data.json'

export default function Content() {
    return (
        <div className={styles.content}>
            {articles.map((article) => (
                <Article key={article.id} data={article}/>))}
        </div>
    )
}