import React from "react";
import "./App.css";
import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

const App: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const config = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const api = new OpenAIApi(config);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    api
      .createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(text),
        temperature: 0.6,
        max_tokens: 100,
      })
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          if (res.data.choices[0] && res.data.choices[0].text) {
            setResponse(res.data.choices[0].text);
          }
        }
      })
      .catch((error) => {
        console.log(error, "ocurrio un error");
      });
  };

  const generatePrompt = (text: string) => {
    return `Summarize this ${text} and break them into seperate lines`;
  };

  return (
    <div>
      <div>
        <div>
          <h1>
            Texto <span>Resumido</span>
          </h1>
          <h2> Resume tu texto y hazlo más corto.</h2>
        </div>
      </div>
      <div>
        <div>
          <form>
            <h3>Ingresa el Texto</h3>
            <textarea
              className="form-control"
              rows={14}
              cols={80}
              placeholder="Ingresa el texto a resumir"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </form>
        </div>
        <div>
          <button type="button" onClick={handleSubmit}>
            {loading ? "Cargando, espere por favor ..." : "Resumir"}
          </button>
        </div>
        <div>
          <h3>Texto Resumido</h3>
          <textarea
            className="form-control"
            placeholder="Texto Resumido"
            cols={80}
            rows={14}
            value={response}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
