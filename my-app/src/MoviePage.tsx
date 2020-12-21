import { strict } from 'assert';
import { debug } from 'console';
import React, { useEffect, useState } from 'react';
import './App.css';
import { RequestSeries } from "./MovieAPI";
import { ScoreList } from "./MoviePageScore";

class Scores {
  public Source: string = ""; 
  public Value: string = "";
}

class APIdata {
  public Title: string = "";
  public Poster: string = "";
  public Plot: string = "";
  public Year: string = "";
  public Runtime: string = "";
  public Genre: string = "";
  public Director: string = "";
  public Ratings: Scores[] = [new Scores(),new Scores(),new Scores()];
  public imdbVotes = ""; 
  public imdbID = ""; 

}




export function GenerateMoviePage(props:any) {
    
  
  let [data, setData] = useState(new APIdata());
  let [userData,setUserData]= useState<Array<string>>(JSON.parse(localStorage.getItem("UserData") as string));
  
  useEffect(()=>{

    RequestSeries(props.id, true, false).then((res: APIdata) => { setData(res) });
    setUserData(JSON.parse(localStorage.getItem("UserData") as string));

  },[props.id]);
  
  
  useEffect(()=>{

  setUserData(JSON.parse(localStorage.getItem("UserData") as string));
    


  },[]);
  
  useEffect(()=>{


  localStorage.setItem("UserData",JSON.stringify(userData));
  


  },[userData]);
  
  
  
    
  
  
 
    
    return (
      
      <div className="movie-page-container">

      <header className="movie-title">
        <h1>
          {data.Title}
        </h1>
      </header>
      <div className="main-content">

        <img src={data.Poster}  alt="" onClick={()=> window.open(`https://www.imdb.com/title/${data.imdbID}`, "_blank")} />
     
        <div className="plot">{data.Plot}</div>
        <div className="plot">{data.Genre}</div>
        <div className="plot">{data.Year} {data.Runtime}</div>
        {data.Director !== "N/A" && <div className="plot"> {data.Director}</div>}
        <ScoreList List={data.Ratings} imdbVotes={data.imdbVotes} imdbID={data.imdbID}/>
        { props.forMyList == false &&
        <div onClick={()=> {let Samedata = false;
        if(userData != null && userData.length > 0)
        {
          userData.forEach(element => {
            if (element == data.imdbID) {
              Samedata = true;
            }
          });
        }
        else
        {
          setUserData([]);
        }
        
        if (!Samedata) {
          let temp = [data.imdbID].concat(userData); setUserData(temp)
        } }} className="add-to-list-button">Add to my list</div>
        }
        </div>

    </div>
    );

    




}

