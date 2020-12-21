import { useEffect, useState } from "react";
import { SearchDB } from "./MovieAPI";
import searchicon from "./searchicon.svg";
import { debounce } from "debounce";
import React from "react";

class SearchBarItem {

    public Title = "";
    public Year = "";
    public imdbID = "";
    public Type = "";
    public Poster = "";

}


class SearchAPI {

    public Response = "";
    public totalResults = "";
    public Search: SearchBarItem[] = [];
    public Error = "";

}

function CreateSearchResults(array: SearchBarItem[], Show: any = true, onIDChange: any, SP:any) {








    let result: JSX.Element[] = [];

    array.forEach((element: SearchBarItem) => {

        result.push(
            <div className="search-bar-item" onClick={() => { onIDChange(element.imdbID); SP(0); Show(false) }}>
                <img src={element.Poster !== "N/A" ? element.Poster : "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/32x44/film-3119741174._CB468665901_.png"} alt="" />
                <div className="search-item-info">

                    <div>{element.Title}</div>
                    <div>{element.Year}</div>
                </div>
            </div>


        );



    });

    return result;


}




export function SearchBar(params: any) {


    const [searchdata, setdata] = useState(new SearchAPI());
    const [searchResults, setResults] = useState<JSX.Element[]>();
    const [showResults, setShow] = useState(false);
    const [searchvalue,setValue] = useState("");
    const SearchbarRef = React.createRef<HTMLInputElement>();
    function Search(ev: React.KeyboardEvent<HTMLInputElement>) {


       
        

            if ((ev.target as HTMLInputElement).value.length > 3) {

                SearchDB((ev.target as HTMLInputElement).value).then(res => { setdata(res) });

            }

        











    }

    useEffect(()=>{

        setValue("");
        

    },[params.Clear]);

    useEffect(() => {
        if (searchdata == undefined) {
            
        }
        else if (searchdata.Response === "True") {
            setResults(CreateSearchResults(searchdata.Search, setShow, params.onIDChange,params.SP));
            setShow(true);
        }
        else if (searchdata.Response === "False") {
            console.log(searchdata.Error);

        }
    }, [searchdata]);

    useEffect(()=>{

        setShow(false);


    },[params.CloseSuggestions]);
    

    return (
        <div className="search-module">
            <div className="search-bar-wrapper">

                <input className="search-bar" ref={SearchbarRef} value={searchvalue} onKeyDown={(e)=>  {if (e.key === "Escape")setShow(false)} } onChange={(e)=>setValue(e.target.value)} type="text" placeholder="Search for movies/series" onInput={debounce((ev: any) => {Search(ev)}, 1000)} />
                
            </div>
            <div className="results">
                {showResults && searchResults}

            </div>

        </div>

    );

}