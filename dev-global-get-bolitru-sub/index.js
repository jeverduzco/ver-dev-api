module.exports = async function (context, req) {
    const subscription = context.bindings.subscription
    if (subscription != 0) {
        context.res = {
            status: 200,
            body: context.bindings.subscription[0]
        };
    }
    else {
        context.res = {
            status: 204
        };
    }
};