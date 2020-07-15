module.exports = async function (context, req) {
    const post = context.bindings.post
    if (post != 0) {
        context.res = {
            status: 200,
            body: context.bindings.post
        };
    }
    else {
        context.res = {
            status: 204
        };
    }
};