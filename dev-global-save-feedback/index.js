module.exports = async function (context, req) {
    if (req.body && req.body.id) {
        context.bindings.feedback = req.body
        context.res = {
            status: 200
        }
    }else {
        context.res = {
            status: 400
        };

    }
}