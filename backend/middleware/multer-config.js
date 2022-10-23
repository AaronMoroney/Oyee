const multer = require('multer');

const MIME_TYPES = {
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'image/png': 'png'
};

//what to save and how
const storage = multer.diskStorage ({
    //where to save?
    destination: (req, file, callback) => {
        //null = no image, images folder if images present.
        callback(null, 'images');
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        console.log(name);
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

//configured multer. .single('file') has to match frontend
module.exports = multer({storage: storage}).single('file');