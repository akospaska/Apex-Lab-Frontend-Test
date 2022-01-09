import * as React from "react";

import { useState, useEffect } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

import QueryProvider from "../../../Classes/QueryProvider/QueryProvider";

const queryProvider = new QueryProvider();

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const searchQuery = queryProvider.getSearchQuery(searchValue);

  //If the Search value.length =0? Then featured list will be fetched
  const search = () => {
    if (searchValue.length > 0) {
      props.setQueryRoot("searchMovies");
      props.searchTrigger(searchQuery);
      props.setMainTitle(`Search by "${searchValue}"`);
    } else {
      props.setQueryRoot("movies");
      props.searchTrigger(queryProvider.getFeaturedQuery());
      props.setMainTitle(`Featured Movies`);
    }
  };

  //If the typing has been stopped for 0.6 second, the search will be started
  //It replaces the Search Button
  //Not optimal in mobile mode
  useEffect(() => {
    const timeOutContainer = setTimeout(() => {
      search();
    }, 600);

    return () => clearTimeout(timeOutContainer);
  }, [searchValue]);

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ height: "50%" }}>
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Search Movie"
            val
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </Box>
      </Container>
    </div>
  );
};

export default SearchBar;

//import * as React from 'react';
