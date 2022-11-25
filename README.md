# ImageToPdf

This app converts multiple images into a single pdf. It is built using React, TailwindCSS, and jsPDF.

## Demo

https://sauravhathi.github.io/imagetopdf/

## Features

- Convert multiple images into a single pdf
- Download the pdf
- View the pdf

## useState

- image: base64 encoded string of the image
- download: base64 encoded string of the pdf
- view: blob url of the pdf
- isComplete: boolean that is used to trigger the download and view buttons

## Methods

- handleImage: called when the user selects a file
- handleConvert: called when the user clicks the convert button

## Dependencies

- jspdf
- reactJs
- tailwindcss

## Installation

Clone the repository and install the dependencies.

```bash
git clone https://github.com/sauravhathi/imagetopdf.git
cd imagetopdf
npm install
```

## Usage

```bash
npm start
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)