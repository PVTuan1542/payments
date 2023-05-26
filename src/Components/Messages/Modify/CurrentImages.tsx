import { useState } from "react";
import { uploadImageToS3 } from "../../../Services/s3/s3.service";
import "../../../Style/Messages/Image.css";

const CurrentImages = (props: any) => {
  const [images, setImageLoads] = useState<string[]>(props?.images);

  const handleFileChange = async (event: any) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onload = (event: any) => {
      const imageUrl = event.target.result;
      setImageLoads((prevPreviews) => [...prevPreviews, imageUrl]);
    };

    if (file) {
      props.setIsDisabled(true)
      reader?.readAsDataURL(file);
      const imageUrlS3 = await uploadImageToS3(file);
      props.setImages((prevPreviews: any) => [...prevPreviews, imageUrlS3]); // Not reset
      props.setIsDisabled(false)
    }
  };

  const handleDeleteImage = (index: number) => {
    setImageLoads((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
    props.setImages((prevPreviews: any) => prevPreviews.filter((_: any, i: any) => i !== index));
  };

  return (
    <div>
      <div className="image-preview">
        {images?.map((image: string, key: any) => (
          <div className="image-container" key={key}>
            <img src={image} alt="" />
            <div
              className="delete-overlay"
              onClick={() => handleDeleteImage(key)}
            >
              &times;
            </div>
          </div>
        ))}
      </div>
      <div className="image-input">
        <input
          type="file"
          id="currentLookInput"
          name="currentLookInput"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default CurrentImages;
