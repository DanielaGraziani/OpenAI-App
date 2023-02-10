# Chappie QuickReads

Chappie is a React based application that allows users to summarize their text with the help of OpenAI's language generation model. It is fast and user-friendly, making it easier to get quick summaries of large text.

# Features

*Input text area to write the text to be summarized.
*Button to trigger the summarization process.
*Output text area to display the summarized text.
*Clear button to clear the input and output text areas.


# Technical Details

*Built using React with TypeScript.
*Utilizes OpenAI's language generation model to perform summarization.
*OpenAI API key is set as an environment variable in the project.
*The summarization process is handled by the OpenAIApi class in the openai library.
*The state management is handled using the useState hook in React.

# Running the application

1.Clone the repository to your local machine.
2.Run `npm install` to install the required dependencies.
3.Set the OpenAI API key as an environment variable in the project.
4.Run `npm start` to start the development server.
5.Open the application in your browser at `http://localhost:3000/`.



# Dependencies
The application uses the following dependencies:

*React: a JavaScript library for building user interfaces.
*OpenAIApi: an API client for OpenAI, used to interact with the OpenAI API to generate summarized text.



# Environment Variables
The following environment variable is used in the code:

*REACT_APP_OPENAI_API_KEY: The API key for OpenAI, required for accessing the OpenAI API.


# Code Structure 
The code is structured as follows:

*`apiValue`: A constant that stores the value of the OpenAI API key from the environment variable.
*`App`: The main component of the application. It uses the `useState` hook to manage the state of the text input, response, and loading status.
*`config`: An instance of the `Configuration` class from the OpenAI API client, which is used to configure the API client with the API key.
*`api`: An instance of the `OpenAIApi` class, which is used to interact with the OpenAI API.
*`handleSubmit`: A function that is called when the user clicks the "Send" button. It uses the OpenAI API client to send the text to OpenAI for *summarization and sets the response and loading status in the state.
*`handleClear`: A function that is called when the user clicks the "Clear" button. It resets the text input and response in the state.
*`generatePrompt`: A function that generates the prompt for the OpenAI API based on the input text.


The code uses CSS and JavaScript to build the user interface, which consists of two text areas for inputting and displaying the summarized text, and two buttons for sending and clearing the text.

## Contact

* If you have any questions, you can contact me at ddiazgraziani@gmail.com.
* I also invite you to visit my portfolio: https://danielagraziani-portfolio.vercel.app/.