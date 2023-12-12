import React from 'react';
import ReactDOM from 'react-dom';
import Person from './Person';

function App() {
    // Example list of Persons
    const people = [
        {name: 'Splinter', age: 218, hobbies: ['chess', 'martial arts', 'wisdom']},
        {name: 'Michaelangelo', age: 17, hobbies: ['video games', 'martial arts', 'pizza']},
        {name: 'Shredder', age: 38, hobbies: ['evil', 'martial arts', 'knitting']}
    ];

    return (
        <div>
            {people.map((person, index) => (
                <Person
                    key={index}
                    name={person.name}
                    age={person.age}
                    hobbies={person.hobbies} />
            ))}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));