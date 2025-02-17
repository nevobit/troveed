import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.container} >
        <Sidebar />
        <div className={styles.content} >
            <Outlet />
        </div>
    </div>
  )
}

export default Layout