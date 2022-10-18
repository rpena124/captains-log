const RESOURCE_PATH = '/logs'

const viewController = {
    index(req,res,next){
        res.render('logs/Index', res.locals.data)
    },
    newView(req, res, next){
        res.render('logs/New')
    },
    edit(req, res, next){
        res.render('logs/Edit', res.locals.data)
    },
    show(req, res, next){
        res.render('logs/show',res.locals.data)
    },
    redirectShow(req,res,next){
        const logId = req.params.id || res.locals.data.log._id
        res.redirect(`${RESOURCE_PATH}/${logId}`)
        
        // res.redirect(`${RESOURCE_PATH}/${res.locals.data.log.id}`)
    },
    redirectHome(req, res, next){
        res.redirect(RESOURCE_PATH)
    }
}

module.exports = viewController