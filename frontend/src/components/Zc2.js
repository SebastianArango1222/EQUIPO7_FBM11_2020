import React from 'react';
import Header from './Header'
import Atras from '../Images/Atras.png'
import Like from '../Images/Like.png'
import Dislike from '../Images/Dislike.png'
class Zc2 extends React.Component{
    render(){
       return(
       
        <main role="main" className="inner cover">
        <h1  className="awa">Propuestas de Karla Holguin:</h1>
        
        <ul>
          
        <li className="Zp">- Piscina en el patio <img className ="ss"src= {Like}/> 122 <img className ="dislike"src= {Dislike}/>42 <i class="icon-thumbs-down-alt"> </i></li>
        
        <br/>
        <li className="Zp">- Clases presenciales <img className ="ss"src= {Like}/> 122 <img className ="dislike"src= {Dislike}/>42</li> 
        <br/>
        <li className="Zp">- No sé que poner <img className ="ss"src= {Like}/> 122 <img className ="dislike"src= {Dislike}/>42 </li>
        </ul>
        <br/>
       
       
       <a  className="linkec"href="CandidatosC"  ><img className ="as"src= {Atras}/></a>
      </main>
    
       )
    }
    
}
export default Zc2;