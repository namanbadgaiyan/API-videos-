// SDK initialization

var ImageKit = require("imagekit");


exports.InitImageKit = function(){
    var imagekit = new ImageKit({
        publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
        privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
        urlEndpoint : process.env.IMAGEKIT_URL
    });


    return imagekit
}