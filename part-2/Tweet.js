function Tweet(props) {
    // JavaScript object representing CSS styles
    const tweeterStyles = {
        backgroundColor: 'lightblue',
        padding: '10px',
        borderRadius: '5px',
        margin: '10px 0'
    };

    return (
        <div>
            <header style={tweeterStyles}>
                { props.username } <br />
                {/* all tags must be closed in JSX */}
                { props.name } <br /> 
                { props.date }
            </header>
            {/* can also add inline CSS */}
            <section style={{ fontWeight: 'bold' }}>
                { props.message }
            </section>
        </div>
    );
};

export default Tweet;