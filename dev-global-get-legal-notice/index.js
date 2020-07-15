module.exports = async function (context, req) {
    const policy = context.bindings.policy
    if (policy != 0) {
        context.res = {
            status: 200,
            body: context.bindings.policy
        };
    }
    else {
        context.res = {
            status: 204
        };
    }
};