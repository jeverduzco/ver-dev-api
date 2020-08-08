module.exports = async function (context, req) {
    const project = context.bindings.project
    if (project) {
        context.res = {
            status: 200,
            body: context.bindings.project[0]
        };
    }
    else {
        context.res = {
            status: 204
        };
    }
};