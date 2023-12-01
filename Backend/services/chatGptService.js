const axios = require('axios');

const OPENAI_API_URL = 'https://api.openai.com/v1/engines/davinci/completions';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Set your API key in environment variables

const getSummary = async (type, data) => {
    try {
        // Construct the prompt based on the type and data provided
        let prompt = '';
        if (type === 'candidate') {
            prompt = `Provide a concise summary about the political candidate:\n\nName: ${data.name}\nBackground: ${data.background}\nKey Policies: ${data.policies}\n`;
        } else if (type === 'proposition') {
            prompt = `Provide a concise summary about the proposition:\n\nTitle: ${data.title}\nDescription: ${data.description}\nPros: ${data.pros}\nCons: ${data.cons}\n`;
        } else {
            throw new Error('Invalid type specified');
        }

        // Send request to ChatGPT API
        const response = await axios.post(
            OPENAI_API_URL,
            { prompt: prompt, max_tokens: 150 }, // Adjust max_tokens as needed
            { headers: { 'Authorization': `Bearer ${OPENAI_API_KEY}` } }
        );

        // Return the generated summary
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error in getting summary from ChatGPT:', error);
        throw error;
    }
};

module.exports = { getSummary };
