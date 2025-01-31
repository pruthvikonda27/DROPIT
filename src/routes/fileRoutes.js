const express = require('express');
const multer = require('multer');
const { upload, retrieve } = require('../controllers/fileController');

const router = express.Router();
const uploadMiddleware = multer({ storage: multer.memoryStorage() });

router.post('/upload', uploadMiddleware.single('file'), upload);
router.get('/retrieve/:code', retrieve);

module.exports = router;
