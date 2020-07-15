module.exports = async function (context, req) {
    const projects = context.bindings.projects
    if (projects != 0) {
        context.res = {
            status: 200,
            body: context.bindings.projects
        };
    }
    else {
        context.res = {
            status: 204
        };
    }
};