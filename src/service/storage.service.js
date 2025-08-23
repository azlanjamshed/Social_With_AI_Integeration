// const ImageKit = require("imagekit")

// const imageKit = new ImageKit({
//     publicKey: process.env.IMAGEKIT_PUBLICKEY,
//     privateKey: process.env.IMAGEKIT_PRIVATEKEY,
//     urlEndpoint: process.env.IMAGEKIT_URLENDPOINT
// })

// async function fileUpload(fileBuffer, filename) {
//     const response = await imageKit.upload({
//         // file: file.toString("base64"),
//         file: fileBuffer.toString("base64"),
//         fileName: filename
//     })

//     return response
// }



// module.exports = fileUpload

const ImageKit = require("imagekit");

const imageKit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLICKEY,
    privateKey: process.env.IMAGEKIT_PRIVATEKEY,
    urlEndpoint: process.env.IMAGEKIT_URLENDPOINT,
});

async function fileUpload(fileBuffer, filename) {
    try {
        const response = await imageKit.upload({
            file: fileBuffer.toString("base64"), // convert Buffer → base64
            fileName: filename,
            folder: "Caption-auto-generator"
        });

        // return only url and fileId
        return {
            url: response.url,
            id: response.fileId,
        };
    } catch (error) {
        console.error("ImageKit Upload Error:", error.message);
        throw error;
    }
}

module.exports = fileUpload;
