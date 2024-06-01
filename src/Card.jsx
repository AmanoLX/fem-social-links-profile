import Person from './Person';

const Card = ({ people }) => {
  return (
    <div className="card">
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};
export default Card;
