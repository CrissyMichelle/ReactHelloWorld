import NamedComponent from "./NamedComponent";
import FirstComponent from "./FirstComponent";

function App() {
    return (
        <div>
            <FirstComponent /> // self-closing tags ok for elements w/o children
            <NamedComponent name = 'Crissy'  />
        </div>
    );
};

export default App