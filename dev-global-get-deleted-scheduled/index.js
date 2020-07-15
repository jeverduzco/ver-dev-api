module.exports = async function (context, req) {
    const scheduled = context.bindings.scheduled
    if (scheduled != 0) {
        context.res = {
            status: 200,
            body: context.bindings.scheduled
        };
    }
    else {
        context.res = {
            status: 204
        };
    }
};