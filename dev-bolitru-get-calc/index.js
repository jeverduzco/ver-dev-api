module.exports = async function (context, req) {
    const calculation = context.bindings.calculation
    if (calculation) {
        context.res = {
            status: 200,
            body: context.bindings.calculation[0]
        };
    }
    else {
        context.res = {
            status: 204
        };
    }
};