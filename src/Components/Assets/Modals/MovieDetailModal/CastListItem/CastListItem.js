import Formatter from "../../../../../Classes/Formatter/Formatter";

const formatter = new Formatter();

const CastListItem = (props) => {
  let { id, person, role } = props.castPerson;
  const noDataPlaceHolder = "No Data";

  let name = person?.name || noDataPlaceHolder;

  let character = role?.character || noDataPlaceHolder;
  if (role.character.length > 27) character = formatter.stringTrimmer(role.character, 27);

  let photoUrl = person?.images[0]?.small || "/no_image.jpg";

  return (
    <div key={id} className="CastItem">
      <img src={photoUrl} />

      <div className="CastItemNameContainer">
        <h3>{name}</h3>
        <h4>as {character}</h4>
      </div>
    </div>
  );
};

export default CastListItem;
