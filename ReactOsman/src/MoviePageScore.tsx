import imdbLogo from './images/imdblogo.jpg';
import rottenlogo from "./images/rottentomatoeslogo.png";
import  metalogo  from "./images/metacriticlogo.png";
import React from 'react';

class Scores {
    public Source: string = ""; 
    public Value: string = "";
  }

export function ScoreList(props:any):JSX.Element {
    
  

  let scores:boolean[] = [false,false,false];
  let values:string[] = ["","",""];
    
  if (props.List !== undefined) {
    
    props.List.forEach((element:Scores) => {
      
      if (element.Source === "Internet Movie Database") {
        
        scores[0] = true;
        values[0] = element.Value;
        
      }
      else if (element.Source === "Rotten Tomatoes")
      {
        scores[1] = true;
        values[1] = element.Value;
      }
      else if (element.Source === "Metacritic") {
        scores[2] = true;
        values[2] = element.Value;
      }
    });
  }
    
    return (
        <div className="score-container">
            {scores[0] &&
        <div className="score">
          <img className="score-logo" src={imdbLogo} onClick={()=> window.open(`https://www.imdb.com/title/${props.imdbID}`, "_blank")} alt=""/>
          <div className="score-value" >{props.imdbVotes}</div>
          <div className="score-value">{values[0]}</div>
          </div>}
        {scores[1] && <div className="score">
          <img className="score-logo" src={rottenlogo} alt=""/>
          <div className="score-value">{values[1]}</div>
        </div>}
        {scores[2] && <div className="score">
          <img className="score-logo" src={metalogo}  alt=""/>
          <div className="score-value">{values[2]}</div>
        </div>}

    </div>



    );

}