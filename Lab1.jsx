import { useState } from 'react'; 
import './App.css'; 
function Lab1() { 
const [text, setText] = useState(''); 
return ( 
<div className="App" > 
<input 
type="text" 
placeholder="Type something..." 
value={text} 
onChange={(e) => setText(e.target.value)} 
/> 
<h1><strong>You Typed: {text}</strong></h1> 
</div> 
); 
} 
export default Lab1;
