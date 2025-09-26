/*
 * Install SDK:
 * npm install @google/generative-ai
 */

import { GoogleGenerativeAI } from "@google/generative-ai";

// Use your API key from Google AI Studio
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// Choose a valid Gemini model
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// Generate text function
async function run(prompt) {
  try {
    const result = await model.generateContent(prompt);
    const response = result.response.text();
    console.log(response);
    return response;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error fetching response.";
  }
}

export default run;

