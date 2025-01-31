const { uploadFile, getFileStream } = require('../services/s3Service');
const { generateUniqueCode } = require('../utils/generateCode');

const upload = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    const file = req.file;
    const uniqueCode = generateUniqueCode();

    try {
        await uploadFile(file, uniqueCode);
        res.json({ code: uniqueCode });
    } catch (error) {
        res.status(500).json({ message: 'Error uploading file', error: error.message });
    }
};

const retrieve = async (req, res) => {
    const { code } = req.params;

    try {
        const fileData = await getFileStream(code);
        if (!fileData) {
            return res.status(404).json({ message: 'File not found' });
        }

        res.setHeader('Content-Type', fileData.contentType); // Set correct Content-Type
        fileData.stream.pipe(res);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving file', error: error.message });
    }
};


module.exports = {
    upload,
    retrieve
};
