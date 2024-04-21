# de-base64-to-image

A Node.js package to convert Base64 data back to images using the Sharp library.

## Installation

To install this package, simply run the following command:

```bash
npm install de-base64-to-image
```

or

```bash
bun install de-base64-to-image
```

## Usage

The `de-base64-to-image` package provides a simple function to convert Base64 data to images. Here's how you can use it:

```javascript
const base64ToImage = require('de-base64-to-image');

const base64Data = 'your_base64_data_here';
base64ToImage(base64Data, 'output.jpg', (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Image saved successfully.');
});
```

The `base64ToImage` function takes three arguments: the Base64 data you want to convert, the output file path, and a callback function. The callback function will be invoked with an error (if any) as the first argument.

## Supported Image Formats

The `de-base64-to-image` package uses the Sharp library, which supports a wide range of image formats, including JPEG, PNG, WebP, GIF, TIFF, BMP, and more.
