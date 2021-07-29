module.exports = async function (context, req) {
    context.log('Hello from the Javascript log');

    const method = req.method.toLowerCase();
    var name = null;
    if (method === "get" && req.query.name) {
        name = req.query.name;
    } else if (method === "post" && req.body && req.body.name) {
        name = req.body.name;
    }

    var say = null;
    if (req.params.say) {
        say = req.params.say;
    }

    context.res.json({
        text: (name ? name + " says: " : "") + (say ? say : "Hello") + " from the Javascript API"
    });
    context.done();
};