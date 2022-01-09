import React from "react";
import { useState } from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import MovieCard from "./MovieCard/MovieCard";

import MovieDetailModal from "../../Assets/Modals/MovieDetailModal/MovieDetailModal";

const Results = (props) => {
  //If the value is true, the modal with the movie details will be displayed
  const [movieDetailedModalIsOpen, setMovieDetailedModalIsOpen] = useState(false);

  //The selected movie data fro the modal window
  const [selectedMovie, setSelectedMovie] = useState({});

  return (
    <div className="ResultContainer">
      <div>
        <h2>{props.mainTitle}</h2>
      </div>
      <div className="ResultList">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1} xs={"auto"}>
            {props.searchResult.length === 0 ? (
              <h3>No result!</h3>
            ) : (
              props.searchResult.map((element) => (
                <MovieCard listItem={element} selectMovie={setSelectedMovie} openDetailListModal={setMovieDetailedModalIsOpen} />
              ))
            )}
          </Grid>
        </Box>
      </div>

      <MovieDetailModal
        spinnerHandler={props.spinnerHandler}
        setMainTitle={props.setMainTitle}
        setQueryRoot={props.setQueryRoot}
        searchTrigger={props.searchTrigger}
        isMovieDetailModalOpen={movieDetailedModalIsOpen}
        closeMovieDetailModal={setMovieDetailedModalIsOpen}
        movieData={selectedMovie}
      />
    </div>
  );
};

export default Results;
