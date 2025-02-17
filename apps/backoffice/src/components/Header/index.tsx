import { ReactNode } from "react";
import styles from './Header.module.css';

interface Props {
    title: string;
    count?: number;
    children?: ReactNode;
}

const Header = ({ title, count, children }: Props) => {
  return (
    <header className={styles.header} >
        <div>
            <h2 className={styles.title} >{title}</h2>
            <p>{count} {title}</p>
        </div>
        {children}
    </header>
  )
}

export default Header