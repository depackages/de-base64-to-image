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

## License

This package is licensed under the MIT License.

Copyright (c) 2024 charanmadhu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
