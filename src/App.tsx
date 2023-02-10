import React from "react";
import "./App.css";
import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import s from "./assets/chappie1.png";

const apiValue: string | undefined = process.env.REACT_APP_OPENAI_API_KEY;

const App: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const config = new Configuration({
    apiKey: apiValue,
  });

  const api = new OpenAIApi(config);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      alert("Invalid input");
      return;
    }
    setLoading(true);
    api
      .createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(text),
        temperature: 0.6,
        max_tokens: 300,
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

  const handleClear = () => {
    setText("");
    setResponse("");
  };

  const generatePrompt = (text: string) => {
    return `Summarize this ${text}. and break them into seperate lines`;
  };

  return (
    <div className="flex h-screen">
      <div className="w-full p-4 sm:w-1/2 md:w-1/2  lg:w-1/2 xl:w-1/2 bg-gradient-to-b from-amber-200 to-amber-500">
        <div>
          <p className="text-5xl mt-6 md:mt-12 text-gray-800 font-bold text-center">
            Chappie QuickReads
          </p>
          <p className="text-lg  lg:text-2xl text-center mb-6 mt-4 lg:underline lg:decoration-1">
            {" "}
            Chappie is the fastest and easiest way to summarize your text.
          </p>
          <form className=" md:mt-20 lg:mt-10 xl:mt-30 mt-10">
            <textarea
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              rows={8}
              cols={80}
              placeholder="Put here the text!"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </form>
        </div>
        <div className="flex justify-around">
          <button
            type="button"
            className="bg-gradient-to-b from-teal-200 to-teal-500 mt-3  items-center rounded-md border border-transparent px-3 py-2 text-sm font-medium leading-4  shadow-sm"
            onClick={handleSubmit}
          >
            {loading ? <p>Loading, please wait...</p> : "Send"}
          </button>

          <button
            type="button"
            className="bg-gradient-to-b from-teal-200 to-teal-500 mt-3 items-center rounded-md border border-transparent px-3 py-2 text-sm font-medium leading-4  shadow-sm"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
        <div className="mt-4">
          <textarea
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Summarized Text"
            cols={80}
            rows={8}
            value={response}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>

      <div className="hidden sm:block w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 bg-gradient-to-b from-teal-200 to-teal-800 ">
        <div className="relative text-white text-center lg:mt-4 ">
          <p className="text-5xl lg:text-6xl text-gray-100 font-bold absolute top-0 mr-5">
            Hello
          </p>
          <p className="text-5xl lg:text-6xl text-gray-100 font-bold absolute top-8 mr-5">
            Human!
          </p>
        </div>

        <img src={s} alt="product" className="md:h-[700px] md:mt-32 lg:mt-4 lg:h-full lg:w-full object-cover " />
      </div>
    </div>
  );
};

export default App;
