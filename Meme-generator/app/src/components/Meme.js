import React from "react"


function Meme() {


   // state for the top and bottom text
    const [meme,setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomUrk:"https://i.imgflip.com/261o3j.jpg"
    })

    // state for the meme image
    const [allMemeData,setallMemeData] = React.useState([]);
    
    React.useEffect(()=>{
        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            console.log(data)
            setallMemeData(data.data.memes)
        }
        getMemes()
    },[])
    
    function getMemeImage() {
       
        const randomNumber = Math.floor(Math.random() * allMemeData.length)
      
        setMeme(prevMeme =>({
            ...prevMeme,
            randomUrk: allMemeData[randomNumber].url
        }))
        
    }

    function handleChange(event){
        const {name,value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
            <img src={meme.randomUrk} className="meme--image" alt="meme-img"></img>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )

}
export default Meme;