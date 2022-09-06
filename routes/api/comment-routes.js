const router = require("express").Router();
const {
  addComment,
  removeComment,
  addRelpy,
  removeReply,
} = require("../../controllers/comment-controller");

router.route("/:pizzaId").post(addComment);

router.route("/:pizzaId/:commentId").put(addRelpy).delete(removeComment);
module.exports = router;

router.route("/:pizzaId/:commentId/:replyId").delete(removeReply);
