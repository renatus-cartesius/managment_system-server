// Express config
const express = require("express"),
    router = express.Router(),
    employessRoutes = require("./employee.routes"),
    tasksRoutes = require("./tasks.routes"),
    departmentRoutes = require("./department.routes");

// Using Employees router
router.use("/employee", employessRoutes);
router.use("/task", tasksRoutes);
router.use("/department", departmentRoutes);

module.exports = router;
