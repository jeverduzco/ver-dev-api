const stripeKey = process.env["STRIPETESTKEY"];
const stripe = require('stripe')(stripeKey);
module.exports = async function (context, req) {
    if (req.body && req.body.id) {
        const session = await stripe.billingPortal.sessions.create({
          customer: req.body.id,
          return_url: req.body.return_url
        });
        context.res = {
            status: 200,
            body: session
        };
    }
    else {
        context.res = {
            status: 400
        };
    }
};