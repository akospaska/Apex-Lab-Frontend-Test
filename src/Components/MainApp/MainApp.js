import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import FetchGraphQLDB from "../../Api/FetchGraphQLDB/FetchGraphQLDB";

import SearchBar from "./SearchBar/SearchBar";
import Results from "./Results/Results";
import Spinner from "../Assets/Spinner/Spinner";

import QueryProvider from "../../Classes/QueryProvider/QueryProvider";
import ErrorModal from "../Assets/Modals/ErrorModal/ErrorModal";

const queryProvider = new QueryProvider();

const MainApp = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [queryRoot, setQueryRoot] = useState("movies");
  const [isFetching, setIsFetching] = useState(true);
  const [title, setTitle] = useState("Featured Movies");

  const [errorModalIsOpen, setErrorModalIsOpen] = useState(false);

  const featuredQuery = queryProvider.getFeaturedQuery();
  const [query, setQuery] = useState(featuredQuery);

  //The Main Data fetching
  const fetchBySearchValue = (query = featuredQuery) => {
    setIsFetching(true);

    axios(FetchGraphQLDB(query))
      .then(function (response) {
        switch (queryRoot) {
          case "movies":
            setSearchResults(response.data.data.movies);
            break;
          case "searchMovies":
            setSearchResults(response.data.data.searchMovies);
            break;
          default:
        }
        setIsFetching(false);
        //scroll window to the top
        window.scrollTo(0, 0);
      })
      .catch(function (error) {
        setIsFetching(false);
        console.log(error);
      });
  };

  //Set a new  "search query" what triggers the Data fetching
  const searchTrigger = (query) => {
    setQuery(query);
  };

  //Fetch the data if the "query " state has been changed
  useEffect(() => {
    fetchBySearchValue(query);
  }, [query]);

  return (
    <div className="MainAppContainer">
      <h1>Movie Database</h1>
      <SearchBar setMainTitle={setTitle} searchTrigger={searchTrigger} setQueryRoot={setQueryRoot} />
      <Results
        searchTrigger={searchTrigger}
        setQueryRoot={setQueryRoot}
        searchResult={searchResults}
        mainTitle={title}
        setMainTitle={setTitle}
        spinnerHandler={setIsFetching}
      />
      {/* Loading Spinner */}
      <Spinner isFetching={isFetching} />

      {/* Modal if the data fetching got an error */}
      <ErrorModal setErrorModalIsOpen={setErrorModalIsOpen} errorModalIsOpen={errorModalIsOpen} />
    </div>
  );
};

export default MainApp;
