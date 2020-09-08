const axios = require('axios');
module.exports = async function (context, req) {
    if (req.body.id) {
        const bodyParameters = {
                "@type": "MessageCard",
                "@context": "http://schema.org/extensions",
                "themeColor": "0076D7",
                "summary": "Nuevo feedback",
                "sections": [{
                    "activityTitle": "Nuevo feedback",
                    "activitySubtitle": "Se ha recibido un nuevo feedback",
                    "activityImage": "https://storage.verduzco.dev/website/teams/feedback.png",
                    "facts": [{
                        "name": "Fecha",
                        "value": req.body.feedback_date
                    }, {
                        "name": "Satisfacción",
                        "value": req.body.satisfaction
                    }, {
                        "name": "Producto",
                        "value": req.body.product
                    }, {
                        "name": "Origen",
                        "value": req.body.origin
                    }, {
                        "name": "Tipo",
                        "value": req.body.feedback_type
                    }, {
                        "name": "Comentario",
                        "value": req.body.comment
                    }],
                    "markdown": true
                }]
            }
        await axios.post('https://outlook.office.com/webhook/d2275258-48c6-41c8-86b7-b89c61a2dc54@231e8f9b-415a-40fe-a983-51508ff7eb09/IncomingWebhook/1fbc07acad96417999708802dd832474/ee74813e-1ce0-4639-a569-94be6e26f025', bodyParameters);
        context.res = {
            status: 200
        };
        context.done()
    }
    else {
        context.res = {
            status: 400
        };
        context.done()
    }
}