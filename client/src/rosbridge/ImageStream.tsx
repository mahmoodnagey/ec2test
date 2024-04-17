import { useState, useEffect } from "react";
import axios from "axios";

const ImageStream = () => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const fetchImageStream = async () => {
      try {
        const response = await axios.get(
          "http://abdxi:8080/stream?topic=/image_raw",
          {
            responseType: "blob", // Set responseType to 'blob' to handle image data
          }
        );
        // Convert image data to a data URL
        const imageUrl = URL.createObjectURL(response.data);
        setImageSrc(imageUrl);
      } catch (error) {
        console.error("Error fetching image stream:", error);
      }
    };

    fetchImageStream();

    // Cleanup function to revoke the URL object when component unmounts
    return () => {
      URL.revokeObjectURL(imageSrc);
    };
  }, []);

  return (
    <>
      <strong>Image Stream</strong>

      <img
        src={imageSrc}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        alt="Image Stream"
      />
    </>
  );
};

export default ImageStream;
