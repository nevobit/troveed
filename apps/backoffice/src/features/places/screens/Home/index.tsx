import styles from './Home.module.css';
import { usePlaces } from '../../hooks/usePlaces';
import { Table } from '@troveed/design-system/web/components';
import Header from '../../../../components/Header';
import { Place, User } from '@troveed/entities';

const Home = () => {
   const { isLoading, places } = usePlaces();
   if(isLoading) return (<div className={styles.spinnerContainer}  > <div className={styles.spinner} ></div> </div>)
   
    return (
    <div className={styles.container}>
      <Header title='Places' count={places?.count} />
        <Table<Place> columns={[{ header: "Name", accessor: 'name', width: "40%" }, { header: "Category", accessor: 'category', width: '30%' }, { header: "Created At", accessor: 'createdAt', width: '50%' }]} data={places?.items || []}>
          <Table.Header />
          <Table.Body />
        </Table>

    </div>
  )
}

export default Home