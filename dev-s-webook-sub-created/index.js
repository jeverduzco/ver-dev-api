module.exports = async function (context, req) {
    if (req.body) {
        const newSubscription = {
                id: req.body.data.object.id,
                current_period_start: req.body.data.object.current_period_start,
                current_period_end: req.body.data.object.current_period_end,
                customer: req.body.data.object.customer,
                status: req.body.data.object.status,
                created: req.body.data.object.created,
                plan: req.body.data.object.plan.id,
                cancel_at_period_end: req.body.data.object.cancel_at_period_end,
                product: req.body.data.object.plan.product,
                type: 'subscription'
            }
            context.bindings.saveSubscription = newSubscription
            context.res = {
                status: 200
            };
    }
    else {
        context.res = {
            status: 400
        };
    }
};