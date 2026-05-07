// import H1 from "./H1.jsx";
// import Theme from "./Theme.jsx";
// import GithubApi from "./GithubApi.jsx";

import { useState } from "react";

function App() {

// 1. use Top level

    const [count , setCount] = useState(0)

    return (
        <div>
            <h1> {count} </h1>
            <button onClick={() => setCount(count + 1) }>➕</button>
            {/* <H1 title="{My name is : Joy}" desc="Intern"/>
            <H1 title="Heading-2" desc="Hello hello Ji!"/>
            <H1 title="Heading-3" desc="Description for Heading-3"/>
            <H1 title="Heading-4" desc="Description for Heading-4"/>
            <H1 title="Heading-5" desc="Description for Heading-5"/>
            
            
            <Theme/>
            <GithubApi/> */}

        </div>
    )
}

export default App;