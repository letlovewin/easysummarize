/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const OpenAI = require('openai')
require('dotenv').config()

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.summarizeText = onRequest((request, response) => {
   logger.info("Hello logs!", {structuredData: true});
   const chatCompletion = openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": "Please summarize the following: " + request.body.summary}],
  });
    response.send(chatCompletion.choices[0].message);
});
