const stripeKey = process.env["STRIPETESTKEY"];
const stripe = require('stripe')(stripeKey);
module.exports = async function (context, req) {
    const existingCustomer = context.bindings.existingCustomer
    if (existingCustomer != 0) {
        context.res = {
            status: 200,
            body: context.bindings.existingCustomer[0]
        };
    }
    else {
        const customer = await stripe.customers.create({
          email: req.body.customer_email,
          name: req.body.customer_name,
          description: req.body.customer_id,
          preferred_locales: req.body.preferred_locales
        });
        const createdCustomer = {
            id: customer.id,
            customer_id: req.body.customer_id,
            customer_name: req.body.customer_name,
            customer_email: req.body.customer_email,
            preferred_locales: req.body.preferred_locales,
            type: "customer"
        }
        context.bindings.newCustomer = createdCustomer
        context.res = {
            status: 200,
            body: {
                id: createdCustomer.id
            }
        };
    }
};