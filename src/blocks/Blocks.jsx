import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";


const Blocks = () => {
    const [block, setblock] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Blocks;