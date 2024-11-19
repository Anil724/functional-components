import React from 'react'

function SuperCharacter(props) {
  return (
    <div class="characterDiv">
    <h1>Name:{props.name}</h1>
    <h2>Character:{props.character}</h2>
    <h4>level:{props.power}</h4>
    <img src={props.imgURL}></img>
    {/* <p>Magic is entirely different in that it seems that rather than being an inherent energy that anyone can build up, it’s something that’s limited to a single kind of technique for a respective demon. While some creatures can use multiple magical abilities, the idea given in Dragon Ball Daima is that there’s at least a single unique magic technique for each demon. But as expected, this seems to clash with what we’ve seen from demonic entities in the franchise previously as well with the likes of Majin Buu turning opponents into candy, but then also having pliability with his body.</p> */}
   </div>
  )
}

export default SuperCharacter
