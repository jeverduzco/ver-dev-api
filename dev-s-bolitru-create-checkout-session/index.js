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
                    price: "price_1HQfbYEaFEmd6wlWEa2tdA9j",
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
                    price: "price_1HQfbxEaFEmd6wlWv4F7Uwv9",
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
        if (req.body.customer_currency === 'ARS') {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                subscription_data: {
                  trial_from_plan: req.body.trial,
                },
                line_items: [{
                    price: "price_1HQfeiEaFEmd6wlWNqvIf2mm",
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
        if (req.body.customer_currency === 'BOB') {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                subscription_data: {
                  trial_from_plan: req.body.trial,
                },
                line_items: [{
                    price: "price_1HRMc6EaFEmd6wlWZqWOHDlK",
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
        if (req.body.customer_currency === 'CLP') {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                subscription_data: {
                  trial_from_plan: req.body.trial,
                },
                line_items: [{
                    price: "price_1HRMg2EaFEmd6wlWbToTzgGA",
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
        if (req.body.customer_currency === 'COP') {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                subscription_data: {
                  trial_from_plan: req.body.trial,
                },
                line_items: [{
                    price: "price_1HRMNeEaFEmd6wlWuIkIEGko",
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
        if (req.body.customer_currency === 'CRC') {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                subscription_data: {
                  trial_from_plan: req.body.trial,
                },
                line_items: [{
                    price: "price_1HRMmBEaFEmd6wlWqCV6xo2J",
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
        if (req.body.customer_currency === 'GTQ') {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                subscription_data: {
                  trial_from_plan: req.body.trial,
                },
                line_items: [{
                    price: "price_1HRMmqEaFEmd6wlWJHxuD7iM",
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
        if (req.body.customer_currency === 'HTG') {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                subscription_data: {
                  trial_from_plan: req.body.trial,
                },
                line_items: [{
                    price: "price_1HRMsSEaFEmd6wlWb10JAMar",
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
        if (req.body.customer_currency === 'HNL') {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                subscription_data: {
                  trial_from_plan: req.body.trial,
                },
                line_items: [{
                    price: "price_1HRMtJEaFEmd6wlW6h638H3U",
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
        if (req.body.customer_currency === 'NIO') {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                subscription_data: {
                  trial_from_plan: req.body.trial,
                },
                line_items: [{
                    price: "price_1HRMtvEaFEmd6wlWCuEIXckk",
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
        if (req.body.customer_currency === 'PYG') {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                subscription_data: {
                  trial_from_plan: req.body.trial,
                },
                line_items: [{
                    price: "price_1HRMupEaFEmd6wlWxNOKrxyJ",
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
        if (req.body.customer_currency === 'PEN') {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                subscription_data: {
                  trial_from_plan: req.body.trial,
                },
                line_items: [{
                    price: "price_1HRMvLEaFEmd6wlWxrKohg5S",
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
        if (req.body.customer_currency === 'DOP') {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                subscription_data: {
                  trial_from_plan: req.body.trial,
                },
                line_items: [{
                    price: "price_1HRMvwEaFEmd6wlWwcSv32B1",
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
        if (req.body.customer_currency === 'UYU') {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                subscription_data: {
                  trial_from_plan: req.body.trial,
                },
                line_items: [{
                    price: "price_1HRMwSEaFEmd6wlWzvAOPib1",
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
    }
    else {
        context.res = {
            status: 400
        };
    }
};