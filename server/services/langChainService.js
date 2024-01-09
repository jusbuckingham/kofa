const { OpenAIAPI } = require('langchain');

exports.getSuggestions = async (prompt, ballotData) => {
  // Initialize LangChain and OpenAI API
  const langChain = new OpenAIAPI({ apiKey: process.env.OPENAI_API_KEY });

  // Combine prompt with ballot data
  const combinedPrompt = `${prompt}\n\nBallot: ${JSON.stringify(ballotData)}`;
  
  // Call ChatGPT via LangChain
  const response = await langChain.complete({
    prompt: combinedPrompt,
    // Additional parameters
  });

  // Process and return the response
  return response.choices[0].text.trim();
};
