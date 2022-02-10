import React, { useEffect, useState} from 'react';
import database from './firebase';
import TinderCard from "react-tinder-card"
import "./TinderCards.css"

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'React',
      url: ''
    },
    {
      name: 'NextJS',
      url: ''
    }
  ])

  useEffect(() => {
    database.collection('people').onSnapshot(snapshot => (
      snapshot.docs.map(doc => doc.data())
    ))
  }, [])

  return (
    <div>
        <h1>TinderCards Testing</h1>
        <div className="tinderCards__cardContainer">
          {people.map((person) => (
           <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
           >
            <div
              style={{ backgroundImage: `url($(person.url))`}} 
              className="card">
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
          ))}
        </div>
    </div>
    
    );
}

export default TinderCards;
