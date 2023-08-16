import React, { useState, useEffect } from "react";

function DriveImage({ img }) {
  const [coverImage, setCoverImg] = useState("");
  useEffect(() => {
    // Original URL
    const originalUrl = img;

    // Extract the image_id from the URL
    const match = originalUrl.match(/\/d\/([^/]+)/);
    const imageId = match ? match[1] : null;

    if (imageId) {
      // Construct the new URL
      const newUrl = `https://drive.google.com/uc?export=view&id=${imageId}`;

      console.log(newUrl); // This will print the transformed URL
      setCoverImg(newUrl);
    } else {
      coverImage = img;
    }
  }, []);
  return <img src={coverImage} alt="" />;
}

export default DriveImage;
