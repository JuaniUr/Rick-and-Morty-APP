
import { useState } from 'react';
import Card from '../Card/Card'
import styles from './Cards.module.css'


export default function Cards(props) {
   const { characters } = props;
   
   
   return (
      
      <div className={styles.CardsContainer}>
         
         { props.ShowCards ? characters.map(character =>
            <Card
               id={character.id}
               key = {character.id}
               name = {character.name}
               species = {character.species}
               gender = {character.gender}
               image = {character.image}
               onClose={() => props.onClose(character.id)}
            />     
         ):
         <Card
            name={'si fuese una carta'}
            species={"tuviese una especie"}
            gender= {"tuviese un genero"}
         />}
      </div>
   );
   }
//}