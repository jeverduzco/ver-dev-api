module.exports = async function (context, req) {
    const posts = context.bindings.posts
    if (posts != 0) {
        context.res = {
            status: 200,
            body: context.bindings.posts
        };
    }
    else {
        context.res = {
            status: 204
        };
    }
};