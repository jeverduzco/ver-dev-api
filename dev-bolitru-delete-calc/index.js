const cosmos = require("@azure/cosmos");
const CosmosClient = cosmos.CosmosClient;

const endpoint = process.env["CosmosDBString"];
const masterKey = process.env["CosmosDBKey"];
const client = new CosmosClient({ endpoint, key: masterKey });

const databaseId = "verduzco-dev-one-dev";
const containerId = "bolitru-client-data";

module.exports = async function (context, req) {
    if (req.body.id) {
        const docId = req.body.id
        const partKey = req.body.key
        await client.database(databaseId).container(containerId).item(docId, partKey).delete()
        context.res = {
            status: 200,
            body: "Removed"
        };
        context.done();
    }
    else {
        context.res = {
            status: 400,
            body: "No calc ID"
        };
        context.done();
    }
};