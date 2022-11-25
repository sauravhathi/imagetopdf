import { jsPDF } from "jspdf";
import { useState } from 'react';

function App() {
  // image is a base64 encoded string
  const [image, setImage] = useState(null);
  // download is a boolean that is used to trigger the download
  const [download, setDownload] = useState(null);
  // view is a boolean that is used to trigger the view
  const [view, setView] = useState(null);

  const [isComplete, setIsComplete] = useState(false);

  // handleFile is called when the user selects a file
  const handleImage = (e) => {
    const files = e.target.files;
    const images = [];
    // Loop through all the files
    for (let i = 0; i < files.length; i++) {
      images.push(URL.createObjectURL(files[i]));
      console.log("Saurav Hathi");
    }
    // Set the image state
    setImage(images);
  };

  // handleConvert is called when the user clicks the convert button
  const handleConvert = () => {
    // create a new jsPDF instance and set the page size to A4 portrait
    const doc = new jsPDF("p", "mm", "a4");

    // add the image to the document and set the position to the center of the page
    const defaultWidth = 210;
    const defaultHeight = 297;

    image.forEach((img, index) => {
      // get the width and height of the image
      const imgWidth = doc.getImageProperties(img).width;
      const imgHeight = doc.getImageProperties(img).height;
      // cal ratio to scale the image
      const ratio = imgWidth / imgHeight;
      const width = defaultWidth;
      const height = width / ratio;
      // add the image to the document
      doc.addImage(img, "JPEG", 0, 0, width, height);
      // when the image is not the last one, add a new page
      if (index < image.length - 1) doc.addPage();
    }
    );
    // dataUrl is the base64 encoded string of the pdf
    const pdf = doc.output("dataurlstring");
    // set the download state to the dataUrl
    setDownload(pdf);
    // set the view state to the bloburl
    setView(doc.output("bloburl"));
    // set the isComplete state to true
    setIsComplete(true);
  };

  return (
    <div className="container mx-auto">
      <div
        className="flex flex-col justify-center h-screen gap-4 w-9/12 mx-auto md:w-4/12"
      >
        <h1 className="text-2xl font-bold text-center">Image To Pdf</h1>
        <p className="text-center">Convert your multiple images into a single pdf</p>
        {isComplete ? (
          <p className="text-center text-green-500">100% Complete number of pages: {image.length}</p>
        ) : null}

        <div className="flex flex-col gap-2">
          <label
            className="flex flex-col items-center px-4 py-20 bg-white text-blue-500 rounded-lg shadow-lg uppercase border border-blue-500 cursor-pointer hover:bg-slate-800 hover:text-white hover:border-slate-50"
          >
            <img src={require("./upload.png")} alt="upload"
              className="w-10 h-10 text-slate-900" />
            <span className="mt-2 text-base leading-normal">Select file</span>
            <input id="file" type="file" className="hidden" multiple onChange={handleImage} accept="image/*" />
          </label>
        </div>
        <div className="flex flex-col">
          {image ? (
            <button
            id="convert"
            className="bg-slate-50 text-lg font-bold text-slate-900 p-2 rounded"
            onClick={handleConvert}
          >
            Convert
          </button> 
          ) : null}

        </div>
        {isComplete ? (
          <div id="pdfViewAndDl">
          <div className="flex flex-row items-center justify-between gap-2">
            <a id="download" className="bg-slate-50 text-lg font-bold text-slate-900 p-2 rounded" href={download} download="imageToPdf.pdf">Download</a>
            <a id="view" className="bg-slate-50 text-lg font-bold text-slate-900 p-2 rounded " href={view} target="_blank">View Pdf</a>
          </div>
        </div> 
        ) : null}
        <footer
          className="text-center my-2 border-t-2 border-gray-200 pt-4"
          id="checkAuthor"
        >
          <p className="text-sm">
            Made with ❤️ by 
            <a href="https://github.com/sauravhathi" className="font-semibold" target="_blank"> Saurav Hathi</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;