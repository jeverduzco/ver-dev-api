const stripeKey = process.env["STRIPETESTKEY"];
const stripe = require('stripe')(stripeKey);
module.exports = async function (context, req) {
    if (req.body && req.body.customer_id) {
        if (req.body.customer_currency === 'MXN') {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                subscription_data: {
                  trial_from_plan: req.body.trial,
                },
                line_items: [{
                    price: "price_1GtyavEaFEmd6wlWDmINZnco",
                    quantity: 1,
                }],
                customer: req.body.customer_id,
                mode: 'subscription',
                allow_promotion_codes: true,
                success_url: req.body.success_url,
                cancel_url: req.body.cancel_url
            });
            context.res = {
                status: 200,
                body: session
            };
        }
        if (req.body.customer_currency === 'USD') {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                subscription_data: {
                  trial_from_plan: req.body.trial,
                },
                line_items: [{
                    price: "plan_HF1bNmJEYyPng2",
                    quantity: 1,
                }],
                customer: req.body.customer_id,
                mode: 'subscription',
                success_url: req.body.success_url,
                cancel_url: req.body.cancel_url
            });
            context.res = {
                status: 200,
                body: session
            };
        }
        if (req.body.customer_currency === 'EUR') {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                subscription_data: {
                  trial_from_plan: req.body.trial,
                },
                line_items: [{
                    price: "plan_HFUgrsh3LVuJo3",
                    quantity: 1,
                }],
                customer: req.body.customer_id,
                mode: 'subscription',
                success_url: req.body.success_url,
                cancel_url: req.body.cancel_url
            });
            context.res = {
                status: 200,
                body: session
            };
        }
        if (req.body.customer_currency === 'USD+') {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                subscription_data: {
                  trial_from_plan: req.body.trial,
                },
                line_items: [{
                    price: "plan_HIqrf6GrJhmgCh",
                    quantity: 1,
                }],
                customer: req.body.customer_id,
                mode: 'subscription',
                success_url: req.body.success_url,
                cancel_url: req.body.cancel_url
            });
            context.res = {
                status: 200,
                body: session
            };
        }
        if (req.body.customer_currency === 'GBP') {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                subscription_data: {
                  trial_from_plan: req.body.trial,
                },
                line_items: [{
                    price: "plan_HFUhfNGFcMkdKs",
                    quantity: 1,
                }],
                customer: req.body.customer_id,
                mode: 'subscription',
                success_url: req.body.success_url,
                cancel_url: req.body.cancel_url
            });
            context.res = {
                status: 200,
                body: session
            };
        }
        if (req.body.customer_currency === 'INR') {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                subscription_data: {
                  trial_from_plan: req.body.trial,
                },
                line_items: [{
                    price: "plan_HFUio2F4dDv7UI",
                    quantity: 1,
                }],
                customer: req.body.customer_id,
                mode: 'subscription',
                success_url: req.body.success_url,
                cancel_url: req.body.cancel_url
            });
            context.res = {
                status: 200,
                body: session
            };
        }
        if (req.body.customer_currency === 'BRL') {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                subscription_data: {
                  trial_from_plan: req.body.trial,
                },
                line_items: [{
                    price: "plan_HFUiuHqxJvSwYr",
                    quantity: 1,
                }],
                customer: req.body.customer_id,
                mode: 'subscription',
                success_url: req.body.success_url,
                cancel_url: req.body.cancel_url
            });
            context.res = {
                status: 200,
                body: session
            };
        }
    }
    else {
        context.res = {
            status: 400
        };
    }
};