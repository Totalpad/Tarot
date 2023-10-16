import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

export default function ImageComponent({ src, alt }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
    <div style={{display: imageLoaded ? 'none' : 'inline'}}>
        <Blurhash
        hash="TLKKG#M|~V^aofxY^+R*IqNNoJIr"
        width={170}
        height={300}
        resolutionX={32}
        resolutionY={32}
        borderRadius={15}
        punch={1}
        />
    </div>
      <img src={src} alt={alt} loading="lazy"  style={{display: !imageLoaded ? 'none' : 'inline'}}/>
    </>
  );
}
