// Express config
const express = require("express"),
    router = express.Router(),
    employessRoutes = require("./employee.routes"),
    tasksRoutes = require("./tasks.routes");

// Using Employees router
router.use("/employee", employessRoutes);
router.use("/task", tasksRoutes);

module.exports = router;
