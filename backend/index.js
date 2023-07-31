const express = require('express');
const app = express();
const port = 9000;
const axios = require('axios');
const cors = require('cors');
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require("openai");


app.use(bodyParser.json());

app.use(cors());

dotenv.config();


app.post('/generateImage', (req, res) => {
    const data = req.body.content
    const steps = 50
    async function textToImage() {
        const path = "https://api.stability.ai/v1/generation/stable-diffusion-xl-beta-v2-2-2/text-to-image";
      
        const headers = {
          Accept: "application/json",
          Authorization: `Bearer ${process.env.stabilityAI}`
        };
      
        const body = {
          width: 512,
          height: 512,
          steps: steps,
          seed: 0,
          cfg_scale: 7,
          samples: 1,
          text_prompts: [
            {
              "text": data,
              "weight": 1,
            },
          ],
        };
      
        const response = await axios.post(
          path,
          body,
          { headers }
        );
        
        if (response.status !== 200) {
          throw new Error(`Non-200 response: ${response.statusText}`)
        }
        
        const responseJSON = response.data;
        let base64Image;
        
        responseJSON.artifacts.forEach((image, index) => {
            base64Image = image.base64;
          });

          res.status(200).json({ image: base64Image });
      }

      
textToImage().catch(console.error);

});

app.post('/generateText', (req, res) => {

    const openaiApiKey = process.env.openaiApiKey

    const text = req.body.content
    
    async function openaiCreate(openaiApiKey, text, engine="text-davinci-003", maxTokens=1024) {
        const configuration = new Configuration({ apiKey: openaiApiKey });
        const openai = new OpenAIApi(configuration);
    
        try {
            const response = await openai.createCompletion({
                model: engine,
                prompt: text,
                max_tokens: maxTokens,
                temperature: 0.5,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            });
            return response.data.choices[0].text;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    openaiCreate(openaiApiKey, text)
    .then(response => {
        res.json(response) // Sending response back to the front-end
    })
    .catch(error => console.log(error));

});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
