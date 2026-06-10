const getToken = require("./auth");

async function test() {
    const token = await getToken();
    console.log(token);
}

test();