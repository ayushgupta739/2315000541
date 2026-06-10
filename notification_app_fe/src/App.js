import { getTopNotifications } from "./utils/priority";

function App() {

    const notifications = [
        {
            ID: "1",
            Type: "Result",
            Message: "Mid Sem Result",
            Timestamp: "2026-04-22 17:51:30"
        },
        {
            ID: "2",
            Type: "Placement",
            Message: "CSX Corporation Hiring",
            Timestamp: "2026-04-22 17:51:18"
        },
        {
            ID: "3",
            Type: "Event",
            Message: "Tech Fest",
            Timestamp: "2026-04-22 17:50:06"
        }
    ];

    const topNotifications =
        getTopNotifications(notifications);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Top Notifications</h1>

            {topNotifications.map((item) => (
                <div
                    key={item.ID}
                    style={{
                        border: "1px solid black",
                        margin: "10px",
                        padding: "10px"
                    }}
                >
                    <h3>{item.Type}</h3>
                    <p>{item.Message}</p>
                    <small>{item.Timestamp}</small>
                </div>
            ))}
        </div>
    );
}

export default App;