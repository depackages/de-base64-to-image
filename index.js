const sharp = require('sharp');

function base64ToImage(base64Data, filePath, callback) {
    const buffer = Buffer.from(base64Data, 'base64');

    sharp(buffer)
        .toFile(filePath, (err) => {
            if (err) {
                callback(err);
                return;
            }

            callback(null);
        });
}

module.exports = base64ToImage;