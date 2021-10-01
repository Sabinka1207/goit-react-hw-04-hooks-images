import { useEffect, useState, useRef } from "react";
import "./App.css";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Modal } from "./Modal/Modal";
import { Spinner } from "./Loader/Loader";
import { Button } from "./Button/Button";
import { fetchImages } from "../Utils/API";

const App = () => {
  const [allImages, setAllImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [reqStatus, setReqStatus] = useState(null);
  const [request, setRequest] = useState("");
  const [page, setPage] = useState(1);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    async function getImages() {
      const result = await fetchImages(request, page);
      setAllImages((prevState) => [...prevState, ...result.hits]);
      setReqStatus(null);
    }

    if (request !== "") {
      setReqStatus("loading");
      getImages();
    }

    if (page > 1) {
      console.log("should scroll");
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [request, page]);

  const handleSelectImage = (image) => {
    setSelectedImage(image);
  };

  const handleSubmit = (request) => {
    setAllImages([]);
    setRequest(request);
  };

  const loadMore = () => {
    setPage((s) => s + 1);
    // if (page > 1) {
    //   window.scrollTo({
    //   top: document.documentElement.scrollHeight,
    //   behavior: "smooth",
    // });
    // }
  };

  const shouldLoadMore = Boolean(allImages.length);

  return (
    <div className="App">
      <Searchbar onClick={handleSubmit} />
      <ImageGallery data={allImages} onSelect={handleSelectImage} />
      {selectedImage && (
        <Modal link={selectedImage} modalToggle={handleSelectImage} />
      )}
      {shouldLoadMore && !reqStatus && <Button onClick={loadMore} />}
      {reqStatus && <Spinner />}
    </div>
  );
};

export default App;
