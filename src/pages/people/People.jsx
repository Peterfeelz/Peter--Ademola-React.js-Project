import './People.css';
import PersonCard from '../../components/personCard/PersonCard'

const People = ({users}) => {
  return ( 
    <div className="people">
      <h3>Meet and connect with people around the world</h3>
      <p> One of the most striking aspects of humanity is its diversity. From varying cultural practices and traditions <br /> to unique perspectives and talents, each person brings a distinct flavor to the collective human experience.</p>
      <div className="grid-container">
        {
          users.map((user, index) => {
            return <PersonCard 
              key={index}
              email={user.email}
              age={user.registered.age}
              gender={user.gender}
              phone={user.cell}
              country={user.location.country}
              title={user.name.title}
              first={user.name.first}
              last={user.name.first}
              src={user.picture.large}

            />
          })
        }
      </div>
    </div>
   );
}
 
export default People;