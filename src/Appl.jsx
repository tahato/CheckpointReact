import React from 'react';

import Pictur from "./Pictur"
import Descr from "./Descr";
import Car from "./Car"
import Prix from "./Prix";
function App() {
let nom = prompt("Please enter your name", "" || "you");

  

  return (
 < >
 <div className="all">
 <Car />
 <Prix/>
 
 <Pictur />
<Descr />
<h1>hello {nom}!</h1>
</div>
 </>
  );
}
export default Appl;