function Person(props) {
    // ternary conditionals are commonplace React structures
    const message = props.age > 18 ? "please go vote!" : "you must be 18";
    const displayName = props.name.length > 8 ? props.name.slice(0, 7) : props.name;
    
    return (
        <div>
            <p> Learn some information about this person <br />
                Name: {displayName} Age: {props.age} 
            </p>
            <h3>{message}</h3>
            <ul>
                {props.hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    );
};

export default Person;