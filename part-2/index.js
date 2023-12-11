import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from './Tweet';

function App() {
    // Example list of tweets
    const tweets = [
        { username: "user", name: "Homer", date: "2023-12-10", message: "D'oh!" },
        { username: "user", name: "Bart", date: "2023-12-11", message: "I didn't do it" },
        { username: "user", name: "Montgomery", date: "2023-12-25", message: "Excellent" }

    ]

    return (
        <div>
            <h2>Hello React World!</h2>
            {tweets.map((tweet, index) => (
                <Tweet
                    key={index}
                    username={tweet.username}
                    name={tweet.name}
                    date={tweet.date}
                    message={tweet.message}
                />
            ))}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));