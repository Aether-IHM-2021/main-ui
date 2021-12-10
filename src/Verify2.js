import { useRef, useState, useEffect } from "react";
import Text from "./components/atoms/Text/index.jsx";
const Verify2 = () => {
  const inputFile = useRef(null);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [disabled, setDisabled] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onButtonClick = () => {
    inputFile.current.click();
  };

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };
  return (
    <>
      <header>
        <Text variant="h3" className="py-3">
          {" "}
          PERSONAL VERIFICATION{" "}
        </Text>
      </header>
      <Text variant="4" className="py-3">
        {" "}
        Provide a photo of a government-issued document
      </Text>
      <p className="text-muted">Please ensure that the photo is:</p>
      <ul>
        <li>Government-issued</li>
        <li>Original full-size, unedited documents</li>
        <li>Placed against a a single-coloured/plain background</li>
        <li>Readable, well-lit, and colored</li>
        <li>NOT Edited</li>
        <li>NOT Expired</li>
      </ul>
      <div className="py-3">
        <div style={{ height: "100px", width: "100%" }}>
          {selectedFile && (
            <img className="dp-sm mr-4" src={preview} alt="User Image" />
          )}
        </div>
        <div class="card-body bg-grey d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn btn-light"
            onClick={onButtonClick}
          >
            Upload Photo
            <input
              type="file"
              id="file"
              ref={inputFile}
              style={{ display: "none" }}
              onChange={onSelectFile}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Verify2;
