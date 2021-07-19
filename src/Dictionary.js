import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";


export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    //Getting the asnwer from the search
    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    //Getting the function linked to Pexels
    function handlePexelsResponse(response) {
       setPhotos(response.data.photos); 
    }

    //Searching function

    function search(){
         //documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey = "563492ad6f91700001000001e55983ff1b834844adc71a2be042499a";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, { headers : headers }).then(handlePexelsResponse);
    }

    function handleSubmit(event){
        event.preventDefault(); 
        search();
    }
    
    //Displaying the value of search
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
    return (
        <div className="Dictionary">
            <section>
            <h1> What word do you want to look up? </h1>
        <form onSubmit={handleSubmit} >
            <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
        </form>
        <div className="hint">
            Suggested words: sunset, wine, yoga, forest, plant...
        </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
        </div>
    );
} else {
    load();
    return "Loading";
}
}