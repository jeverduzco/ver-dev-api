module.exports = async function (context, req) {
    const acceptance = context.bindings.acceptance
    if (acceptance != 0) {
        context.res = {
            status: 200,
            body: "accepted"
        };
    }
    else {
        context.res = {
            status: 200,
            body: context.bindings.policy
        };
    }
};