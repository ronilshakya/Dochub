const Document = require('../models/documentModel');

exports.uploadDocument = async (req, res) => {
    try {
        const { type } = req.body;
        const fileUrl = req.file ? `/uploads/${req.file.filename}` : null;

        if (!fileUrl) return res.status(400).json({ msg: "File is required" });

        const newDoc = new Document({
            userId: req.user.id,
            type,
            fileUrl,
            status: 'pending'
        });

        await newDoc.save();
        res.json({ msg: 'Document uploaded successfully', document: newDoc });
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};

exports.getUserDocuments = async (req, res) => {
    try {
        const documents = await Document.find({ userId: req.user.id });
        res.json(documents);
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};

exports.getAllDocuments = async (req, res) => {
    try {
        const documents = await Document.find().populate('userId', 'name email');
        res.json(documents);
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};

exports.updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const doc = await Document.findById(req.params.id);

        if (!doc) return res.status(404).json({ msg: 'Document not found' });

        doc.status = status;
        if (status === 'approved') doc.approvalDate = new Date();
        await doc.save();

        res.json({ msg: 'Document status updated', document: doc });
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};
