import Image from 'next/image';
import { useEffect, useState, CSSProperties } from 'react';

interface Props {
  imagePath: string;
  size: number;
  clipShape: "circle" | "roundedRectangle";
  altText: string;
  customStyles?: CSSProperties;
}

const SingleImage: React.FC<Props> = ({ imagePath, size, clipShape, altText, customStyles }) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    const img = document.createElement('img');
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);
    img.src = imagePath;
  }, [imagePath]);

  return (
    <div>
      {imageLoaded ? (
        <div
          style={{
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: clipShape === "circle" ? "50%" : "15px",
            boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
            ...customStyles,
          }}
        >
          <Image
            src={imagePath}
            alt={`${altText}`}
            width={size}
            height={size}
            objectFit="cover"
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleImage;