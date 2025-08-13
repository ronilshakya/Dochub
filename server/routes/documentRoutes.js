const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadDocument, getUserDocuments, getAllDocuments, updateStatus } = require('../controllers/documentController');
const auth = require('../middleware/auth');

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// User routes
router.post('/upload', auth(['user']), upload.single('file'), uploadDocument);
router.get('/my-documents', auth(['user']), getUserDocuments);

// Admin routes
router.get('/', auth(['admin']), getAllDocuments);
router.patch('/:id/status', auth(['admin']), updateStatus);

module.exports = router;
