const RESOURCE_PATH = '/logs'

const viewController = {
    newView(req, res, next){
        res.render('logs/New')
    }
}

module.exports = viewController