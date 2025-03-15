import data from './../../data/data.json';
import MenuItem from '../menuItem/MenuItem';
import styles from './Menu.module.css';

export default function Menu() {
    return (
        <div className={styles.menu}>
            {data.map((item) => (
                <MenuItem key={data.id} data={item}/>))}
        </div>
    )
}