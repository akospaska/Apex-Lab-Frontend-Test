import Formatter from "../../../../../Classes/Formatter/Formatter";

const formatter = new Formatter();

const CastListItem = (props) => {
  let { id, person, role } = props.castPerson;

  let name;
  let character;

  try {
    name = person.name;
  } catch (error) {
    name = "No Data";
  }

  try {
    character = role.character;
    if (role.character.length > 27) role.character = formatter.stringTrimmer(role.character, 27);
  } catch (error) {
    character = "No Data";
  }

  let photoUrl;

  try {
    photoUrl = person.images[0].small;
  } catch (error) {
    photoUrl = "/no_image.jpg";
  }

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
