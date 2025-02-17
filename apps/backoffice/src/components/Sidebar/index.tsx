import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar} >
        <ul>
            <li><Link to='/dashboard' >Dashboard</Link></li>
            <li><Link to='/places' >Places</Link></li>
            <li><Link to='/users' >Users</Link></li>
            <li><Link to='/settings' >Settings</Link></li>

        </ul>
    </aside>
  )
}

export default Sidebar
