import styles from './Main.module.css';
import Aside from '../aside/Aside';
import Content from '../../components/content/Content';

export default function Main() {
    return (
        <section className={styles.main}>
            <Content />
            <Aside />
        </section>
    )
}