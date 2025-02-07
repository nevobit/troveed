import styles from './Home.module.css';
import { usePlaces } from '../../hooks/usePlaces';

const Home = () => {
   const {  isLoading, places } = usePlaces();
   if(isLoading) return (<div className={styles.spinnerContainer}  > <div className={styles.spinner} ></div> </div>)
   return (
    <div className={styles.container}>
        <h2>Places { places?.count }</h2>
        {places?.items.map((place) => (
            <div>- {place.name}</div>
        ))}
        <p>Pagina siguiente{places?.pageInfo.nextPage}</p>
    </div>
  )
}

export default Home