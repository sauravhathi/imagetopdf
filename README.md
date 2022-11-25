# ImageToPdf

This app converts multiple images into a single pdf. It is built using React, TailwindCSS, and jsPDF.

## Demo

### https://sauravhathi.github.io/imagetopdf/

![image](https://user-images.githubusercontent.com/61316762/204030294-934e7040-4e9e-48aa-9a64-dc5fa0a7c063.png)

![image](https://user-images.githubusercontent.com/61316762/204030318-e447f1c0-0247-47ae-bc08-f2be8f8181a6.png)

![image](https://user-images.githubusercontent.com/61316762/204030393-2f914547-1275-43ae-99f7-c6a279d6e926.png)

### Download
![image](https://user-images.githubusercontent.com/61316762/204030405-710954df-3a7d-4c36-a754-779a5a94e8e5.png)

### View Pdf
![image](https://user-images.githubusercontent.com/61316762/204030412-a79271e9-5d34-4884-b966-a8b9e742e944.png)

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

[MIT](https://github.com/sauravhathi/imagetopdf/blob/master/LICENSE)
