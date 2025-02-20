import { useState, useEffect } from "react";

const API_URL = "https://95rkrdtq03.execute-api.us-west-1.amazonaws.com/prod/get-latest-event"; // Replace with actual API Gateway URL

function App() {
    console.error("❌ Fetch error:");
    console.error("❌ Fetch error:");
    console.error("❌ Fetch error:");
    console.error("❌ Fetch error:");
    console.error("❌ Fetch error:");
    console.error("❌ Fetch error:");
    const [data, setData] = useState({ Confidence: "Loading...", Oxygen: "Loading...", Timestamp: "Loading..." });

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 5000); // Fetch every 5 sec
        return () => clearInterval(interval);
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(API_URL);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error("❌ Fetch error:", error);
            setData({ Confidence: "Error", Oxygen: "Error", Timestamp: "Error" });
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>IP-Based Patient Monitoring</h1>
            <div style={{ border: "1px solid #ccc", padding: "20px", display: "inline-block" }}>
                <p>Confidence: {data.Confidence} Temp</p>
                <p>Oxygen: {data.Oxygen} %</p>
                <p>Timestamp: {data.Timestamp}</p>
            </div>
            <br />
            <button onClick={fetchData}>Refresh Data</button>
        </div>
    );
}

export default App;
