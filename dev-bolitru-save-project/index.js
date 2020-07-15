module.exports = async function (context, req) {
    if (req.body && req.body.id) {
        context.bindings.project = req.body
        context.res = {
            status: 200
        }
    }else {
        context.res = {
            status: 400
        };

    }
}