# Chat-Sphere

An AI-powered chatbot application developed using the MERN stack, TypeScript, and Langchain. This project features user authentication, chat history management, document analysis, and the ability to access external tools for accurate responses.

## Features

- **AI-Powered Chatbot**: Interact with an AI chatbot that provides personalized and relevant responses.
- **User Authentication**: Secure login and session management for users.
- **Document Upload**: Upload documents for the AI to analyze and interact with.
- **External Tools Integration**: Uses Langchain to access tools like Wikipedia and Google Search for comprehensive answers.
- **Chat History**: Save multiple chat sessions with the ability to access and continue previous chats, maintaining context for a personalized experience.

## Tech Stack :
 <img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/react%20-%2314354C.svg?&style=for-the-badge&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/nodejs%20-%2314354C.svg?&style=for-the-badge&logo=nodejs&logoColor=white"/> <img src="https://img.shields.io/badge/markdown-%23000000.svg?&style=for-the-badge&logo=markdown&logoColor=white"/> <img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/> <img src="https://img.shields.io/badge/git%20-%23121011.svg?&style=for-the-badge&logo=git&logoColor=green"/> 


## Tech Stack

- **Frontend**: React, TypeScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other Tools**: Langchain

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB

## Contributing to the Project
1. **Fork the Repository**: Start by forking the repository to your own GitHub account.

2. **Clone the Repository**: Next, clone the forked repository to your local machine:

    ```bash
    git clone https://github.com/<your-username>/<repository-name>.git
    ```

3. **Create a New Branch**: Navigate into the cloned repository and create a new branch for your changes:

    ```bash
    cd <repository-name>
    git checkout -b <branch-name>
    ```
    
    Replace `<branch-name>` with a descriptive name for your branch (e.g., `add-new-feature`).

4. **Make Your Changes**: Make the changes you want to contribute. Be sure to follow the project's coding standards and conventions.

5. **Commit Your Changes**: Once you've made your changes, stage and commit them:
     ```bash
    git add .
    git commit -m "Your descriptive commit message"
    ```

6. **Push Your Changes**: Push your changes to your forked repository on GitHub:

    ```bash
    git push origin <branch-name>
    ```
7. Before committing your changes, make sure to configure the OAuth credentials for Google and GitHub. Obtain the OAuth client ID and secret for both platforms and add them to the `.env` file in the project root directory. The file should look like this:

## Environment Variables Setup

| Environment Variable        | Description                                           |
|-----------------------------|-------------------------------------------------------|
| `JWT_SECRET`                | Secret key for JSON Web Tokens                        |
| `COOKIE_SECRET`             | Secret key for cookies                                |
| `OPEN_AI_SECRET`            | API key for OpenAI                                    |
| `MONGODB_URL`               | Connection string for MongoDB                         |
| `GOOGLE_API_KEY`            | API key for Google services                           |
| `TAVILY_API_KEY`            | API key for Tavily services                           |
| `SERPAPI_API_KEY`           | API key for SerpAPI                                   |
| `BASE_APP_URL`              | Base URL for the frontend application                 |
| `BASE_API_URL`              | Base URL for the backend API                          |                     |







