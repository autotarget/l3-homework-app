import styles from './MenuItem.module.css';

export default function MenuItem(props) {
    return (
        <a href={props.data.href}>{props.data.title}</a>
    )
}