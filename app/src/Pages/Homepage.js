import { useState } from "react";
import "./homepage.css";
function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const getGreeting = async () => {
    if (!name) {
      setMessage("Name is required.");
      return;
    }
    try {
      const response = await fetch(
        `https://task-delta-umber.vercel.app/api/greet?name=${name}`
      );
      const data = await response.json();
      setMessage(data.message || data.error);
    } catch (error) {
      setMessage("Error fetching data.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div className="containerdiv">
        <h2>Greeting App</h2>
        {message ? (
          <p>
            {message}
            <button
              type="button"
              className="m-2 btn btn-outline-secondary"
              onClick={() => {
                setMessage("");
              }}
            >
              Reset Greeting
            </button>
          </p>
        ) : (
          <div className="input-group w-50  ">
            <input
              className="form-control"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div class="input-group-append">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={getGreeting}
              >
                Get Greeting
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
