let apikey = "1beb6cab";

export async function RequestSeries(id: string, IsData: boolean, IsPoster: boolean): Promise<any> {

    
    


    const res = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&i=${id}`);
    const json = res.json();

    return json;





}
export async function SearchDB(s:string) {
    
    
        let debug = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${s}`).then(res=>{return res.json()});
        return debug;    
    


    

}
