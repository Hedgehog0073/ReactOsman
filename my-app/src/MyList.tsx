import { useState } from "react";
import {GenerateMoviePage} from "./MoviePage";






export function MyList(params:any) {
    

    


    let RawData = localStorage.getItem("UserData") as string;

    

    
    let UserData = JSON.parse(RawData) as string[];

    if (UserData == null || UserData.length < 1) {
        console.log("List is null");
        return(
            <div className="empty-list">
              <p className="plot">  Your list is empty. </p>
            </div>
        );
    }


    return(

        <div>
            {UserData.map((el)=>
            {
                return(

                    <GenerateMoviePage id={el} forMyList={true}/>
                    

                );
            })}


        </div>

    );

    




}