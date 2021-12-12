import { useState } from "react";
const validURLFn = require("valid-url");

const MAX_TITLE_LENGTH = 50;
const MIN_TITLE_LENGTH = 1;

function AddPictureForm(props) {
  const [urlFieldValue, setUrlFieldValue] = useState("");
  const [titleFieldValue, setTitleFieldValue] = useState("");
  const [validUrl, setvalidUrl] = useState(false);
  const [validTitle, setValidTitle] = useState(false);
  const [showValidationError, setShowValidationError] = useState(false);

  // Check if URL is valid before saving it
  const getURLValue = (event) => {
    if (validURLFn.isUri(event.target.value)) {
      setvalidUrl(true);
    }
    // If invalid, reset saved value
    else {
      setvalidUrl(false);
    }
    setUrlFieldValue(event.target.value);
  };

  // Check if title is valid before saving it
  const getTitleValue = (event) => {
    if (
      event.target.value.length >= MIN_TITLE_LENGTH &&
      event.target.value.length <= MAX_TITLE_LENGTH
    ) {
      setValidTitle(true);
    }
    // If invalid, reset saved value
    else {
      setValidTitle(false);
    }
    setTitleFieldValue(event.target.value);
  };

  // Handle form submit
  const submitForm = (event) => {
    event.preventDefault();

    // Datas are valid: add them to datas.json
    if (validUrl && validTitle) {
      // Rest form display
      setShowValidationError(false);
      setUrlFieldValue("");
      setTitleFieldValue("");
      setvalidUrl(false);
      setShowValidationError(false);

      // Add datas to JSON
      console.log("add to json");
    }
    // Datas invalid: display error/help message
    else {
      setShowValidationError(true);
    }

    return;
  };
  return (
    <div className="add-picture-form">
      <form onSubmit={submitForm}>
        <div className="inputs">
          <label htmlFor="picture-url">URL</label>
          <input
            type="url"
            name="picture-url"
            id="picture-url"
            value={urlFieldValue}
            onChange={getURLValue}
          />
          <label htmlFor="img-title">Title</label>
          <input
            type="text"
            minLength={MIN_TITLE_LENGTH}
            maxLength={MAX_TITLE_LENGTH}
            name="img-title"
            id="img-title"
            value={titleFieldValue}
            onChange={getTitleValue}
          />
        </div>
        {showValidationError && (
          <div className="errors"> Please enter a valid url and a title.</div>
        )}

        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default AddPictureForm;
