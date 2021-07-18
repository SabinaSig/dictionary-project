import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";


export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    //Getting the asnwer from the search
    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    //Searching function

    function search(){
         //documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
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
        <form onSubmit={handleSubmit} >
            <input type="search" onChange={handleKeywordChange} />
        </form>
        <div className="hint">
            Suggested words: sunset, wine, yoga, forest, plant...
        </div>
        </section>
        <Results results={results} />
        </div>
    );
} else {
    load();
    return "Loading";
}
}