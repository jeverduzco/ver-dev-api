module.exports = async function (context, req) {
    const calculations = context.bindings.calculations
    if (calculations != 0) {
        context.res = {
            status: 200,
            body: context.bindings.calculations
        };
    }
    else {
        context.res = {
            status: 204
        };
    }
};