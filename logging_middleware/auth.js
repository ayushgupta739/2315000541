const axios = require("axios");

async function getToken() {
    try {
        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/auth",
            {
                email: "ayush.gupta3_cs23@gla.ac.in",
                name: "Ayush Gupta",
                rollNo: "2315000541",
                accessCode: "RPsgYt",
                clientID: "83fbd8b9-e436-4ae2-846a-cb6da2a0b89a",
                clientSecret: "bNjtjbkwxkaYBqkb"
            }
        );

        return response.data.access_token;
    } catch (error) {
        console.log(error.response?.data || error.message);
    }
}

module.exports = getToken;