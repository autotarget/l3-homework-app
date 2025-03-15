import Menu from '../../components/menu/Menu';
import styles from './Aside.module.css';

export default function Aside() {
    return (
        <aside className={styles.aside}>
            <Menu />
        </aside>
    )
}