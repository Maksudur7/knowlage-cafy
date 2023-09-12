import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";


const Blocks = () => {
    const [block, setblock] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setblock(data))
    }, [])
    return (
        <div className="w-2/3">
           <h1 className="text-4xl">blocks: {block.length}</h1>
        </div>
    );
};

export default Blocks;