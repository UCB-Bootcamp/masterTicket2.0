const router = require('express').Router();

const apiRoutes = require('./apiRoutes');
const dashboardRoutes = require('./dashboard-routes.js');
const homeRoutes = require('./home-routes.js');

router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes)
router.use('/', homeRoutes)
router.use((req,res) => {
	res.status(404).end();
});


module.exports = router;