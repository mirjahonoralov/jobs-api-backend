const express = require("express");
const {
  getAllJob,
  createJob,
  getJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobs");

const router = express.Router();

router.route("/").get(getAllJob).post(createJob);
router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

module.exports = router;
