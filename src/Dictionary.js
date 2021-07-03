import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    //Getting the asnwer from the search
    function handleResponse(response) {
        console.log(response.data[0]);
    }

    //Searching
    function search(event){
        event.preventDefault();
        
         //documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    
    //Displaying the value of search
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
        <form onSubmit={search} >
            <input type="search" onChange={handleKeywordChange} />
        </form>
        </div>
    );
}