const express = require("express");
const router = express.Router();
const controller = require("../controllers/Book_controller");

router.get("/", controller.getAllBooks);
router.post("/", controller.addBook);
router.get("/:id", controller.findBookId);
// router.get("/:name", controller.findLikeBookName);
router.put("/:id", controller.updateBook);
router.delete("/:id", controller.deleteBookById);
module.exports = router;
