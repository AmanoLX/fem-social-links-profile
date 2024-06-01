import Button from './Button';

const Person = ({ name, location, profile, image, socialLinks }) => {
  return (
    <>
      <figure>
        <img src={image} alt={name} className="card__img" />
      </figure>
      <div className="card__header">
        <h2 className="card__title">{name}</h2>
        <h5 className="card__location">{location}</h5>
      </div>
      <div className="card__body">
        <p className="card__info">"{profile}"</p>
      </div>
      <div className="card__links">
        <div className="social-links">
          <Button socialLinks={socialLinks} />
        </div>
      </div>
    </>
  );
};
export default Person;
