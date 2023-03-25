import React, { useEffect, useState } from "react";
import "./App.css";
import { Spinner } from "./Spinner";

interface Message {
  id: string;
  routes: string[];
  text: string;
}

const fixture = [
  {
    id: "lmm:alert:217944",
    routes: ["7"],
    text: "[7] trains are running with delays in both directions after emergency teams responded to a person who was struck by a train at Hunters Point Av.",
  },
  {
    id: "lmm:planned_work:9082",
    routes: ["F"],
    text: "Coney Island-bound [F] runs local in Queens",
  },
];

function App() {
  const [messages, setMessages] = useState<Message[] | undefined>(undefined);
  const [lastFetch, setLastFetch] = useState<string>(
    new Date().toLocaleString()
  );

  useEffect(() => {
    const isDebugging = new URLSearchParams(document.location.search).has(
      "debug"
    );
    if (isDebugging) {
      setMessages(fixture);
    } else {
      fetch("https://api3.val.town/eval/@roop.currentCommuteAlertMessages()")
        .then((res) => res.json())
        .then((json) => setMessages(json.data));
    }
  }, [lastFetch]);

  const className =
    messages === undefined
      ? "App"
      : messages.length === 0
      ? "App ok"
      : "App alert";

  return (
    <div className={className}>
      <h1>Commute</h1>

      <p>{lastFetch}</p>

      {messages === undefined ? (
        <Spinner style={{ marginTop: "2em" }} />
      ) : messages.length === 0 ? (
        <p>No alerts found</p>
      ) : (
        <div>
          {messages.map((message) => (
            <div key={message.id} style={{ marginBottom: "2em" }}>
              <div>
                {message.routes.map((route) => (
                  <div key={route}>
                    <img src={`/lines/${route}.svg`} alt={route} />
                  </div>
                ))}
              </div>

              <div>{message.text}</div>
            </div>
          ))}
        </div>
      )}

      {!!messages ? (
        <p>
          <button
            onClick={() => {
              setMessages(undefined);
              setLastFetch(new Date().toLocaleString());
            }}
          >
            Refresh
          </button>
        </p>
      ) : null}
    </div>
  );
}

export default App;
