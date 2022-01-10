import React from "react";
import axios from "axios";
import { useState } from "react";

import GetIMDBLink from "../../../../Api/GetIMDBLink/GetIMDBLink";
import GetWikiList from "../../../../Api/GetWikiList/GetWikiList";

import CastListItem from "./CastListItem/CastListItem";

import Formatter from "../../../../Classes/Formatter/Formatter";
import QueryProvider from "../../../../Classes/QueryProvider/QueryProvider";
import Styles from "../../../../Classes/Styles/Styles";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";
import Modal from "@material-ui/core/Modal";
import { FaImdb, FaWikipediaW } from "react-icons/fa";

const queryProvider = new QueryProvider();
const formatter = new Formatter();
const styles = new Styles();

const MovieDetailModal = (props) => {
  const [dataFromWikiPedia, setDataFromWikiPedia] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  //Wikipedia PopUp
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  //Wikipedia PopUp

  const { genres, id, name, releaseDate, score, budget, revenue, poster, similar } = props.movieData;

  const movieImg = poster?.large || "no_image.jpg";
  const cast = props?.movieData?.cast || [];

  //Open a new tab based on the wikipedia search result
  const openWikiTab = (pageId) => {
    window.open(`http://en.wikipedia.org/?curid=${pageId}`);
  };

  //Get an imdb link based on the movie name, and open a new tab
  //Typic example of over Fetching
  const getImdbLink = () => {
    props.spinnerHandler(true);
    axios(GetIMDBLink(name))
      .then(function (response) {
        try {
          const imdbUrl = `https://www.imdb.com${response.data.results[0].id}`;
          window.open(imdbUrl);
          props.spinnerHandler(false);
        } catch (error) {
          props.spinnerHandler(false);
        }
      })
      .catch(function (error) {
        console.log(error);
        props.spinnerHandler(false);
        alert("Error by the Data Fetching");
      });
  };

  //Get search result via Wikipedia API
  const fetchDataFromWikiPedia = () => {
    axios(GetWikiList(name))
      .then(function (response) {
        try {
          setDataFromWikiPedia(response.data.query.search);
        } catch (error) {
          alert("Error by the Data Fetching!");
        }
      })
      .catch(function (error) {
        props.spinnerHandler(false);
        alert(error);
      });
  };

  return (
    <Modal
      open={props.isMovieDetailModalOpen}
      onClose={() => props.closeMovieDetailModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.getDetailedMovieModalStyle()}>
        <img style={{ height: movieImg === "no_image.jpg" ? "" : "90%", float: "right" }} src={movieImg} />
        <div className="DetailedModalHeader">
          <h2>{name}</h2>
          <h4>Genre</h4>
          {genres ? <p>{genres.map((genre) => genre.name).join(", ")}</p> : ""}
          <div className="SubDetailedModalHeader">
            <div className="RatingContainer">
              <p className="RatingContainerTitle">Rating</p>
              <br />
              <p>{score}/10</p>
              <img className="ratingStar" src="star.png" />
            </div>

            <p>Release Date: {formatter.dateFormatter(releaseDate)}</p>

            <p>Total Budget: {formatter.currencyFormatter(budget)} </p>
            <p>Revenue: {formatter.currencyFormatter(revenue)} </p>
            <div className="socialMediaLinkContainer">
              <FaImdb className="RedirectionIcon" onClick={() => getImdbLink()} />

              <FaWikipediaW
                className="RedirectionIcon"
                onClick={(event) => {
                  fetchDataFromWikiPedia();
                  handleClick(event);
                }}
              />

              {/** Wikipedia PopUp Section*/}
              <Popover
                style={{ width: "80%", height: "60%" }}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography sx={{ p: 2 }}>Click one of the items to redirect to the selected Wikipedia page.</Typography>
                <div>
                  {dataFromWikiPedia
                    ? dataFromWikiPedia.map((wikiListItem) => (
                        <div key={wikiListItem.pageid} className="WikiListItem" onClick={() => openWikiTab(wikiListItem.pageid)}>
                          <h5>{wikiListItem.title}</h5>
                          <p>{formatter.textExporter(wikiListItem.snippet)}</p>
                        </div>
                      ))
                    : ""}
                </div>
              </Popover>
              {/** Wikipedia PopUp Section*/}

              {/** Similar Button Section*/}
              <div>
                <button
                  onClick={() => {
                    const similarMobiesQuery = queryProvider.getSimilarQuery(similar.map((movieItem) => movieItem.id));
                    props.setQueryRoot("movies");
                    props.setMainTitle(`Similar Movies like "${name}"`);
                    props.searchTrigger(similarMobiesQuery);
                    props.closeMovieDetailModal(false);
                  }}
                >
                  Show Me Similar!
                </button>
              </div>
              {/** Similar Button Section*/}
            </div>
          </div>

          <div className="RightDetailedModalHeader"></div>
        </div>
        {/** Cast List Section*/}
        <div className="Details">
          <div className="CastContainer">
            <Box sx={{ flexGrow: 1 }}>
              <h4>Cast:</h4>
              <Grid container>{cast ? cast.map((castListItem) => <CastListItem castPerson={castListItem} />) : ""}</Grid>
            </Box>
          </div>
        </div>
        {/** Cast List Section*/}
      </Box>
    </Modal>
  );
};

export default MovieDetailModal;
