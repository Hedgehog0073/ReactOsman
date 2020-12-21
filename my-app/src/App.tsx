import './App.css';
import { SearchBar } from "./SearchBar";

import {GenerateMoviePage} from "./MoviePage";
import { useEffect, useState } from 'react';
import homelogo from "./home.svg";
import { MyList } from "./MyList";
import { clear } from 'console';
// api key 1beb6cab

function EnteryPage(params:any) {
  

return(

  <div className="enterypage-container">
    <div className="show-my-list" onClick={()=>params.SP(2)}>Show My List</div>
    <div>Welcome to my educational project.</div>
    <div>You can search movies from searchbar above.</div>
    <div className="fill-up-div"></div>
  </div>



);


}






function App() {
 
  const [PageID,SetPageID] = useState("");
  const [showPage,setShowPage] = useState(1);
  const [clearSearchbar,ClearSB] = useState(false);
  const [CloseSuggestions,CloseSG] = useState(false);
  
  useEffect(()=>{
    if (PageID !== "") {
      setShowPage(0);
    }



  },[PageID]);

  

  
  
  

  return (
    <div className="App">
      <button  className="return-home" onClick={()=>{setShowPage(1); ClearSB(!clearSearchbar); CloseSG(!CloseSuggestions); }}>
        <img src={homelogo} alt="" />
      </button>
      <SearchBar SP = {setShowPage} onIDChange={(id:string)=>SetPageID(id)} Clear={clearSearchbar} CloseSuggestions={CloseSuggestions}/>      
      {showPage == 0 && <GenerateMoviePage forMyList={false} id={PageID} /> }
      {showPage == 1 && <EnteryPage SP={setShowPage}/>}
      {showPage == 2 && <MyList/>}



    <div className="author-name">Made by Osman Aslancan</div>
    </div>




    
  );
}

export default App;
