const express = require('express');
const fileUpload = require('express-fileupload');

const port = 5000;
const app = express();

app.use(fileUpload());

//END POINT FOR THE UPLOAD
app.post('/upload', (req, res) => {
    if(req.files === null) {
        return res.status(400).json({ msg: 'no file uploaded'});
    }
    const file = req.files.file;
    //MOVE THE FILE
    file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
        if(err) {
            console.log(err);
            return res.status(500).send;
        }

        res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});
    })
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});