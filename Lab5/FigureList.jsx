import { useState } from "react";
import BasicFigure from"./Basicfigure";
import "./FigureList.css";

const initialImages = [
  {src:"pic1.avif",caption:"Image 1"},
  {src:"pic2.avif",caption:"Image 2"},
  {src:"pic3.avif",caption:"Image 3"}
] 

const FigureList=()=>{
  const[images,setImages]=useState(initialImages);
  
  const addImage=()=>{
    const randomId=Math.floor(Math.random()*1000);
    const newImage={
      src:`https://picsum.photos/400/300?random=${randomId}`,
      caption:`Image ${images.length+1}`
    };
    setImages([...images,newImage]);
  };

  const removeImage=(index)=>{
    setImages(images.filter((_,i)=> i!==index));
  };

  return(
    <div className="container">
      <h1>Dynamic Image Gallary</h1>
      <div className="buttons">
        <button onClick={addImage}>Add Image</button>
      </div>
      <div className="gallery">
        {images.map((image,index)=>(
          <BasicFigure key={index} src={image.src}
          caption={image.caption} onRemove={()=>removeImage(index)}/>
        ))}
      </div>
    </div>
  )
}

export default FigureList;
