const axios = require("axios");
const getToken = require("./auth");

async function Log(stack, level, packageName, message) {
    try {

        const token = await getToken();

        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack,
                level,
                package: packageName,
                message
            },
            {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJheXVzaC5ndXB0YTNfY3MyM0BnbGEuYWMuaW4iLCJleHAiOjE3ODEwNzQyMDUsImlhdCI6MTc4MTA3MzMwNSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImQ5ZGY4YWUxLTcyYjMtNDNkOS1hYTk4LTRjMjYyNjFjMzYwMSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImF5dXNoIGd1cHRhIiwic3ViIjoiODNmYmQ4YjktZTQzNi00YWUyLTg0NmEtY2I2ZGEyYTBiODlhIn0sImVtYWlsIjoiYXl1c2guZ3VwdGEzX2NzMjNAZ2xhLmFjLmluIiwibmFtZSI6ImF5dXNoIGd1cHRhIiwicm9sbE5vIjoiMjMxNTAwMDU0MSIsImFjY2Vzc0NvZGUiOiJSUHNnWXQiLCJjbGllbnRJRCI6IjgzZmJkOGI5LWU0MzYtNGFlMi04NDZhLWNiNmRhMmEwYjg5YSIsImNsaWVudFNlY3JldCI6ImJOanRqYmt3eGthWUJxa2IifQ.7yXyHqmmm4pnrkwQiTHoLph_FaN2V5zfO4MkzR6hLn4`,
                    "Content-Type": "application/json"
                }
            }
        );

        return response.data;

    } catch (error) {
        console.log(error.response?.data || error.message);
    }
}

module.exports = Log;