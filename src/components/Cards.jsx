import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
         {characters.map(caracter =>
            <Card
               key = {caracter.id}
               name = {caracter.name}
               species = {caracter.species}
               gender = {caracter.gender}
               image = {caracter.image}
            />     
         )}
      </div>
   );
}
