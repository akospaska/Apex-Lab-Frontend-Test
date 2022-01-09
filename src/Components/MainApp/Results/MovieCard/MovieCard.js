import Formatter from "../../../../Classes/Formatter/Formatter";

const formatter = new Formatter();

const MovieCard = (props) => {
  const { id, name } = props.listItem;

  let url;
  try {
    url = props.listItem.img.url;
  } catch (error) {
    url = "/no_image_formatted.jpg";
  }

  return (
    <div key={id} className="MovieCard">
      <div className="CardPoster">
        <img
          onClick={() => {
            props.openDetailListModal(true);
            props.selectMovie(props.listItem);
          }}
          className="CardTitle"
          src={url}
        />
      </div>
      <div
        onClick={() => {
          props.openDetailListModal(true);
          props.selectMovie(props.listItem);
        }}
        className="CardTitle"
      >
        <p>{name.length > 24 ? formatter.stringTrimmer(name, 20) : name}</p>
      </div>
    </div>
  );
};

export default MovieCard;
