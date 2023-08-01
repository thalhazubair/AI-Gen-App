# AI-Generated Image and text using OpenAI and Stability AI
![Screenshot from 2023-08-01 15-23-23](https://github.com/thalhazubair/AI-Gen-App/assets/63255420/91ad6328-ebbe-44d4-ab86-45f48bf2dd92)

# Introduction

Welcome to the AI-Generated Image project!
This repository contains the code for a web application that utilizes the OpenAI API to convert user input into descriptive sentences
and the Stability AI API to generate images based on the user's requirements. 
The backend of this application is built with Node.js, while the frontend is developed using React.

# How it Works

## The AI-Generated Image web application operates as follows:

User Input Processing using OpenAI:

The user provides input in natural language, asking questions or specifying their image requirements.
The Node.js backend sends this user input to the OpenAI API to retrieve relevant text or sentences based on the user's query.
Text Generation using OpenAI:

The OpenAI API processes the user input and returns descriptive sentences or information as requested by the user.
The Node.js backend receives this text from OpenAI and stores it for further processing.
Image Generation using Stability AI:

The user's input and the descriptive text obtained from OpenAI are sent to the Stability AI API by the Node.js backend.
Stability AI's API generates an image based on the user's requirements and sends it back to the backend.
Displaying the Result:

The Node.js backend then serves the generated image to the React frontend.
The React frontend displays the image to the user, allowing them to view and download the AI-generated image.

# Requirements

To run this project locally, ensure you have the following:

Node.js (with npm) installed on the backend.
React development environment set up on the frontend.
API keys for both OpenAI and Stability AI.

# API Keys

To use the AI-Generated Image web application, you will need API keys from both OpenAI and Stability AI. 
Follow the steps below to obtain the necessary API keys:

# OpenAI API Key

Visit the OpenAI website and create an account or log in if you already have one.
Once logged in, navigate to the API section or developer dashboard.
Follow the instructions to obtain your API key for the OpenAI API.
Copy the API key and keep it safe. You will need it to configure the backend of the AI-Generated Image web application.

# Stability AI API Key

Go to the Stability AI website and sign up for an account.
After registering, access the developer or API section on the Stability AI platform.
Follow the provided instructions to generate your API key for the Stability AI API.
Copy the API key and make sure to store it securely. You will use it to configure the backend of the AI-Generated Image web application.
Once you have API keys, configure the backend (backend/app.js) with the OpenAI
and Stability AI API keys to enable image in the web application.

# Setup and Installation

Here's how you can set up this project on your local machine.

# Prerequisites

Node.js (v12.18.3 or newer)
npm (v6.14.6 or newer)

# Clone the repository

`git clone git clone https://github.com/thalhazubair/OpenAi-StableDifusion_sample.git`

`cd OPENAI-STABLEDIFUSION_SAMPLE`

# Environment Variables

Create a .env file in the backend directory. Here's what you need:

`stabilityAI=your_stability_api_ke`
`openaiApiKey=your_openai_api_key`


# Installing Dependencies

Navigate to both the frontend and backend directories and run the following command:

`npm install`

# Running the Application

To run the application, you need to start both the front-end and back-end servers.

## Start the Backend Server

Navigate to the backend directory and run the following command:

`npm start`

## Start the Frontend Server

Navigate to the frontend directory and run the following command:

`npm start`

Open your browser and visit http://localhost:9000 to interact with the application.

# Conclusion

This project provides an insightful and practical way of understanding how to develop applications using generative AI. The aim is to inspire developers to imagine and create even more powerful and intelligent applications using the AI tools available today.

# Make sure to keep your API keys confidential and avoid sharing them in public repositories or with unauthorized individuals.
