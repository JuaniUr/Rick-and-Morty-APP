export default function SearchBar(props) {
   return (
      <div>
         <input 
            type='search'
            name = 'search'
            id = 'id' 
         />
         <button onClick= {props.onSerch} >Agregar</button> 
      </div>
   );
}
