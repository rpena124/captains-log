const RESOURCE_PATH = '/logs'

const viewController = {
    newView(req, res, next){
        res.render('logs/New')
    },
    redirectShow(req,res,next){
        const logId = req.params.id || res.locals.data.console.log._id
        res.redirect(`${RESOURCE_PATH}/${logId}`)
    }
}

module.exports = viewController