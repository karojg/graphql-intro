export const Location = ({ location }) => {
  return (
    <div key={location.id} className="location">
      <h3 className="name">{location.name}</h3>
      <img
        width="400"
        height="250"
        alt="location-reference"
        src={`${location.photo}`}
      />
      <br />
      <div className="description">
        <b>About this location:</b>
        <p>{location.description}</p>
      </div>

      <br />
    </div>
  );
};
