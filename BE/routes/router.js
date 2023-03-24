const express = require("express");
const router = express.Router();
const controller = require("../controllers/Book_controller");

router.get("/", controller.getAllBooks);
router.post("/", controller.addBook);
router.get("/:name", controller.findLikeBookName);
router.put("/:id", controller.updateBook);
router.delete("/:name", controller.deleteBook);
module.exports = router;
