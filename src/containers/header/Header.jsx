import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>React documentation page</h1>
            <h3>Learn React</h3>
        </header>
    )
}