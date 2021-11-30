module.exports = async function (context, req) {
    var what = req.params.what ? req.params.what.toLowerCase() : null;
    context.res =  { status: 500, body: 'Unhandled what parameters: [' + what + ']' };
    switch (what) {
        case 'my': {
            context.res = { body: process.env.API_MYPROPERTY };
        }
    }
    context.done();
}

