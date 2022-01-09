import Formatter from "../../../../Classes/Formatter/Formatter";

const formatter = new Formatter();

const ResultListItem = (props) => {
  const { id, name, releaseDate, runtime } = props.listItem;

  let url;
  try {
    url = props.listItem.img.url;
  } catch (error) {
    url = "/no_image.jpg";
  }

  return (
    <div key={id} className="ResultListItem">
      <div>
        <img className="ListItemImg" src={url} alt="Logo" />
      </div>
      <div>
        <h3>{name}</h3>
        <ul>
          <li>Release Date: {formatter.dateFormatter(releaseDate)}</li>
          <li>Runtime: {runtime} Minutes</li>
          <div className="RatingContainer" style={{ width: "8rem" }}>
            <p className="RatingContainerTitle">Rating</p>

            <p>{props.listItem.score}/10</p>
            <img className="ratingStar" src="star.png" />
          </div>
        </ul>
        <button
          onClick={() => {
            props.openDetailListModal(true);
            props.selectMovie(props.listItem);
          }}
        >
          Show More Info
        </button>
      </div>
    </div>
  );
};

export default ResultListItem;

//selectMovie={setSelectedMovie} openDetailListModal={setMovieDetailedModalIsOpen}
