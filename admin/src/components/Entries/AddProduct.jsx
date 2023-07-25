import React, { useEffect, useState } from "react";
import file from "../../assets/file.png";
import continents from "../../static/continents";
import countries from "../../static/countries";
import tagings from "../../static/Tags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useSelector } from "react-redux";

function AddProduct({ update }) {
  // image upload
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadingFile, setUploadingFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [continent, setContinent] = useState("");
  const [country, setCountry] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [bestSeller, setBestSeller] = useState("");
  const [tags, setTags] = useState([]);

  const contentType = useSelector((state) => state.product.contentType);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setUploadingFile(file);
      // Read the image file as a data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleImageClick = () => {
    setShowImageUpload(!showImageUpload);
  };

  const handleTagsChange = (optionValue) => {
    if (tags.includes(optionValue)) {
      setTags(tags.filter((value) => value !== optionValue));
    } else {
      setTags([...tags, optionValue]);
    }
  };

  function imageUpload() {
    setLoading(true);
    console.log("Image uploading");
    const formData = new FormData();
    formData.append("Image", uploadingFile);

    axios
      .post(import.meta.env.VITE_API_URL + "/img-upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Image uploaded successfully. URL:", response.data.url);
        setImage(response.data.url);
        setLoading(false);
        handleImageClick();
      })
      .catch((error) => {
        console.error("Error uploading image:", error.message);
        setLoading(false);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      Name: name,
      Description: description,
      Image: image,
      Price: parseInt(price),
      Continent: continent,
      Country: country,
      Status: status,
      Type: type,
      bestSeller: bestSeller == "true",
      Tags: tags.toString(),
    };
    console.log(data);

    let state = "";
    if (update) state = `/updateProduct/${update}`;
    else state = "/addProduct";

    axios
      .post(import.meta.env.VITE_API_URL + state, data)
      .then((res) => {
        console.log(res.data);
        if (update) {
          console.log("Product Updated successfully");
        } else {
          console.log("Product Uploaded successfully");
        }
      })
      .catch((err) => console.log(err));
  }

  // UPDATING
  useEffect(() => {
    if (update) {
      axios
        .get(import.meta.env.VITE_API_URL + `/currencies/${update}`)
        .then((res) => {
          console.log(res.data);
          const data = res.data;
          setName(data.Name);
          setDescription(data.Description);
          setImage(data.Image);
          setSelectedImage(import.meta.env.VITE_IMAGE_URL + data.Image);
          setPrice(data.Price);
          setCountry(data.Country);
          setContinent(data.Continent);
          setStatus(data.Status);
          setType(data.Type);
          setTags(data.Tags.split(","));
          setBestSeller(data.bestSeller.toString());
        })
        .catch((err) => console.log(err));
    } else {
      console.log("NEW entry");
      setName("");
      setDescription("");
      setImage("");
      setSelectedImage("");
      setPrice("");
      setCountry("");
      setContinent("");
      setStatus("");
      setType("");
      setTags("");
      setBestSeller("");
    }
  }, []);

  // Deal of the Day
  useEffect(() => {
    if (contentType == "Deal of the day") {
      // get deal of the day
    }
  }, []);

  return (
    <div
      className={`flex ${contentType == "Deal of the day" ? "mt-0" : "mt-5"}`}
    >
      <div
        className={`bg-slate-900 ${
          contentType == "Deal of the day" ? "h-[100vh]" : "h-[90vh]"
        } pb-10 basis-[100%] rounded-lg overflow-y-scroll`}
      >
        <h1 className="font-semibold text-gray-300 text-2xl p-4">Add Deal for the Day</h1>
        <form className="p-10 relative" onSubmit={handleSubmit}>
          {/* 1 */}
          <div className="flex gap-4">
            <div className="basis-[50%]">
              <label htmlFor="">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                value={name}
                placeholder="Type here"
                className="input input-bordered w-full max-w-lg"
                required={true}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="basis-[50%]">
              <label htmlFor="">
                Image <span className="text-red-600">*</span>
              </label>
              <img
                src={selectedImage || file}
                alt=""
                className="hover:cursor-pointer rounded-md h-72 w-72"
                id="image"
                onClick={handleImageClick}
              />
            </div>
          </div>
          {/* 2 */}
          <div className="mt-[3%] flex gap-10 justify-between">
            <div className="basis-[30%]">
              <label htmlFor="">
                Price <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                value={price}
                className="input input-bordered w-full max-w-lg"
                required={true}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="basis-[60%] flex flex-col">
              <label htmlFor="">
                Country <span className="text-red-600">*</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option disabled selected value="">
                  Select here
                </option>
                {countries.map((val, i) => (
                  <option key={i} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* 3 */}
          <div className="w-full mt-[5%]">
            <label htmlFor="">
              Description <span className="text-red-600">*</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full h-[300px]"
              placeholder="Type Here"
              value={description}
              required={true}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          {/* 5 */}
          <div className="flex w-full mx-auto mt-[3%] gap-10">
            <div className="basis-[50%] ">
              <label htmlFor="">
                Status <span className="text-red-600">*</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option disabled selected value="">
                  Select here
                </option>
                <option val="Used">Used</option>
                <option val="UNC">UNC</option>
              </select>
            </div>
            <div className="basis-[50%]">
              <label htmlFor="">
                Type <span className="text-red-600">*</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option disabled selected value="">
                  Select here
                </option>
                <option value="Coin">Coin</option>
                <option value="Bank Note">Bank Note</option>
              </select>
            </div>
          </div>
          {/* 6 */}
          <div className="flex w-full mx-auto mt-[3%] gap-10">
            <div className="basis-[50%] ">
              <label htmlFor="">
                Continent <span className="text-red-600">*</span>
              </label>
              <select
                value={continent}
                className="select select-bordered w-full"
                onChange={(e) => setContinent(e.target.value)}
              >
                <option disabled selected value="">
                  Select here
                </option>
                {continents.map((val, i) => (
                  <option key={i} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </div>
            <div className="basis-[50%]">
              <label htmlFor="">
                Best Seller <span className="text-red-600">*</span>
              </label>
              <select
                value={bestSeller}
                className="select select-bordered w-full"
                onChange={(e) => setBestSeller(e.target.value)}
              >
                <option disabled selected value="">
                  Select here
                </option>
                <option value="true">YES</option>
                <option value="false">NO</option>
              </select>
            </div>
          </div>
          {/* 4 */}
          <div className=" py-5">
            <label htmlFor="">
              Tags <span className="text-red-600">*</span>
            </label>
            <div className="join mx-3">
              {tagings.map((value) => (
                <button
                  key={value}
                  onClick={() => handleTagsChange(value)}
                  type="button"
                  className={`btn join-item ${
                    tags.includes(value) ? "btn-error" : ""
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="absolute bottom-2 right-4 btn btn-error"
          >
            Save
          </button>
        </form>
      </div>
      {showImageUpload && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute bg-gray-800 opacity-50 inset-0"></div>
          <div className="bg-white p-8 rounded shadow-lg z-10 relative">
            <button
              className="absolute top-0 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 mt-4 rounded"
              onClick={handleImageClick}
            >
              <FontAwesomeIcon
                icon={faClose}
                size="lg"
                className="hover:cursor-pointer text-white"
              />
            </button>
            <h2 className="text-2xl font-bold mb-4">Upload an Image</h2>
            <input
              type="file"
              className="file-input file-input-bordered file-input-error w-full max-w-xs mt-4"
              accept="image/*"
              onChange={handleImageChange}
            />
            {selectedImage && (
              <div className="text-center">
                <div>
                  <img
                    src={selectedImage}
                    alt="Uploaded"
                    style={{
                      width: "300px",
                      height: "auto",
                      marginTop: "20px",
                    }}
                  />
                </div>
                {uploadingFile ? (
                  <button className="btn btn-error mt-2" onClick={imageUpload}>
                    {loading ? (
                      <span className="loading loading-dots loading-lg"></span>
                    ) : (
                      <span>Upload</span>
                    )}
                  </button>
                ) : (
                  <></>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default AddProduct;
