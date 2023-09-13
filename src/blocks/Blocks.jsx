import Block from "../block/Block";
import { useEffect } from "react";
import { useState } from "react";
import Bookmarks from "../ComponentHeader/Bookmarks";

const Blocks = () => {
    const [blocks, setblocks] = useState([])
    console.log(blocks)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setblocks(data))
    }, [])
    const [book, setbook] = useState([])
    const bookhendel = booke => {
        const allbooks = [...book, booke]
        setbook(allbooks);
        // console.log(allbooks.length)
    }
    let [times, settimes] = useState([])
    const timehandelclick = time =>{
        if(times < 1){
            times = 0
        }
        settimes(parseFloat(times) + parseFloat(time))
    }
    return (
        <div className=" w-full flex">
            <div className="w-2/3">
                {
                    blocks.map(element => <Block key={element.id}
                        bookhendel={bookhendel}
                        timehandelclick={timehandelclick}
                        blog={element}></Block>)
                }
            </div>
            <div className="md:w-1/3">
                <Bookmarks
                    book={book}
                    booklength={book.length}
                    times={times}
                ></Bookmarks>
            </div>
        </div>
    );
};

export default Blocks;