import DocumentModel  from "../model/document.model.js";

const documentController = {};
documentController.uploadDocument = async (req, res) => {
    try {
console.log("req.body", req.body);
console.log("req.file", req.files);
        const { name } = req.body;
        const file = req.files;

        if (!name || !file) {
            res.status(400).json({
                message: "name and file are required",
                success: false,
            })
        }
        const Document = await DocumentModel.create({
            name,
            file,
        })
        await Document.save();

        res.status(201).json({
            message: "Document uploaded successfully",
            success: true,
            data: Document
        });
    }catch (error) {
        res.status(500).json({
            message: error.message || "internal server error",
            success: false,
        })
    }
};
export default documentController;
