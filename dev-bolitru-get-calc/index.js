module.exports = async function (context, req) {
    const calculation = context.bindings.calculation
    if (calculation) {
        context.res = {
            status: 200,
            body: context.bindings.calculation
        };
    }
    else {
        context.res = {
            status: 204
        };
    }
};