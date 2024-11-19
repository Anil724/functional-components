import logo from './logo.svg';
import './App.css';
import SuperCharacter from './components/SuperCharacter';

function App() {
  return (
    
    <div className="App">
     <h3>Dragon Ball Characters</h3>
     <div class="characterDiv">
      <h1>Goku</h1>
      <h2>Character:Positive</h2>
      <img src="./images/goku.avif"></img>
      <p>Magic is entirely different in that it seems that rather than being an inherent energy that anyone can build up, it’s something that’s limited to a single kind of technique for a respective demon. While some creatures can use multiple magical abilities, the idea given in Dragon Ball Daima is that there’s at least a single unique magic technique for each demon. But as expected, this seems to clash with what we’ve seen from demonic entities in the franchise previously as well with the likes of Majin Buu turning opponents into candy, but then also having pliability with his body.</p>
     </div>
     <div  class="characterDiv">
      <h1>Vegeta</h1>
      <h2>Character:Positive</h2>
      <img src="./images/vegeta.jpg"></img>
      <p>Magic is entirely different in that it seems that rather than being an inherent energy that anyone can build up, it’s something that’s limited to a single kind of technique for a respective demon. While some creatures can use multiple magical abilities, the idea given in Dragon Ball Daima is that there’s at least a single unique magic technique for each demon. But as expected, this seems to clash with what we’ve seen from demonic entities in the franchise previously as well with the likes of Majin Buu turning opponents into candy, but then also having pliability with his body.</p>
     </div>
     <div  class="characterDiv">
      <h1>Gohan</h1>
      <h2>Character:Positive</h2>
      <img src="./images/gohan.jpg"></img>
      <p>Magic is entirely different in that it seems that rather than being an inherent energy that anyone can build up, it’s something that’s limited to a single kind of technique for a respective demon. While some creatures can use multiple magical abilities, the idea given in Dragon Ball Daima is that there’s at least a single unique magic technique for each demon. But as expected, this seems to clash with what we’ve seen from demonic entities in the franchise previously as well with the likes of Majin Buu turning opponents into candy, but then also having pliability with his body.</p>
     </div>
     <div  class="characterDiv"> 
      <h1>Frieza</h1>
      <h2>Character:Negative</h2>
      <img src="./images/frieza.webp"></img>
      <p>Magic is entirely different in that it seems that rather than being an inherent energy that anyone can build up, it’s something that’s limited to a single kind of technique for a respective demon. While some creatures can use multiple magical abilities, the idea given in Dragon Ball Daima is that there’s at least a single unique magic technique for each demon. But as expected, this seems to clash with what we’ve seen from demonic entities in the franchise previously as well with the likes of Majin Buu turning opponents into candy, but then also having pliability with his body.</p>
     </div>
     <div  class="characterDiv">
      <h1>Cell</h1>
      <h2>Character:Negative</h2>
      <img src="./images/cell.avif"></img>
      <p>Magic is entirely different in that it seems that rather than being an inherent energy that anyone can build up, it’s something that’s limited to a single kind of technique for a respective demon. While some creatures can use multiple magical abilities, the idea given in Dragon Ball Daima is that there’s at least a single unique magic technique for each demon. But as expected, this seems to clash with what we’ve seen from demonic entities in the franchise previously as well with the likes of Majin Buu turning opponents into candy, but then also having pliability with his body.</p>
     </div>
     <div  class="characterDiv">
      <h1>Magin Buu</h1>
      <h2>Character:Negative</h2>
      <img src="./images/buu.webp"></img>
      <p>Magic is entirely different in that it seems that rather than being an inherent energy that anyone can build up, it’s something that’s limited to a single kind of technique for a respective demon. While some creatures can use multiple magical abilities, the idea given in Dragon Ball Daima is that there’s at least a single unique magic technique for each demon. But as expected, this seems to clash with what we’ve seen from demonic entities in the franchise previously as well with the likes of Majin Buu turning opponents into candy, but then also having pliability with his body.</p>
     </div>
     <hr></hr>
     <hr></hr>
     <hr></hr>
     <h3>Functions With Props</h3>
     <SuperCharacter name="Goku" character="positive" power="universal" imgURL="./images/goku.avif"></SuperCharacter>
     <SuperCharacter name="Vegeta" character="positive" power="aboveplanetary" imgURL="./images/vegeta.jpg"></SuperCharacter>
     <SuperCharacter name="Gohan" character="positive"  power="uptolanetary" imgURL="./images/gohan.jpg"></SuperCharacter>
     <SuperCharacter name="Frieza" character="Negative" power="aboveplanetary" imgURL="./images/frieza.webp"></SuperCharacter>
     <SuperCharacter name="Cell" character="Negative" power="uptoplanetary" imgURL="./images/cell.avif"></SuperCharacter>
     <SuperCharacter name="Majin Buu" character="Negative" power="aboveplanetary" imgURL="./images/buu.webp"></SuperCharacter>
    </div>
  );
}

export default App;
