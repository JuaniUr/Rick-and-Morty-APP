
import styles from './Card.module.css';
import { NavLink } from 'react-router-dom';

export default function Card(props) {
   return (
      <div className= {styles.Container}>
         <div className={styles.buttonContainer}>
            <button 
            onClick={props.onClose}
            >
               X
            </button>
         </div>
         
         <div className={styles.dataContainer}>
            <h2>{props.name}</h2>
            <h4> {props.species} </h4>
            <h4> {props.gender} </h4>
         </div>
         <NavLink to= {`/detail/${props.id}`} className={styles.image}>
            <img className='CardImage'  src= {props.image} alt={props.name} /> 
         </NavLink>   
      </div>
   );
}
