// Home.js

import React, { useEffect, useState } from "react";
import Header from "./Header";
import Books from "./Books";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";

function Home() {
    const [name, setName] = useState("");
    // const[password, setPassword]=useState('');
    const navigate = useNavigate();

    useEffect(() => {
        Axios.get(`http://localhost:3001`)
            .then(response => {
                console.log(response.data)
                if (response.data.valid) {
                    
                    setName(response.data.username);
                    console.log(name)
                    // setPassword(response.data.password);

                    
                } else {
                    navigate('/signup');
                }
            }) 
            .catch(err => console.log(err));
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <div>
            <Header />
            <h2 className="greet">hey  there, {name}!</h2>
            {/* <h2 className="greet">hey  there, {password}!</h2> */}
            <p className="greet"> Welcome to our book library.</p>
            <Books />
            <Footer/>
        </div>
    );
}

export default Home;
