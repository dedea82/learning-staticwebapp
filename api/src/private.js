module.exports = async function (context, req) {
    const header = req.headers['x-ms-client-principal'];
    const encoded = Buffer.from(header, 'base64');
    const decoded = encoded.toString('ascii');
    const clientPrincipal = JSON.parse(decoded);

    context.res.json({
        text: "Hello " + clientPrincipal.userDetails + "! This is a private message from the Javascript API"
    });
};