# kofa
![Kofa Icon](imgs/kofa.png)


## File Structure
```
kofa/
│
├── client/                      # React frontend
│   ├── public/                  # Public assets like HTML file
│   │   └── index.html           # Main HTML file
│   ├── src/                     # Source files for React
│   │   ├── components/          # React components
│   │   │   ├── BallotCard.js    # Component to display a single ballot item
│   │   │   ├── BallotList.js    # Component to display list of ballots
│   │   │   └── Login.js         # Component for user login
│   │   ├── api/                 # API related functions
│   │   │   └── serverApi.js     # Functions to interact with your Express server
│   │   ├── App.js               # Main React application file
│   │   └── index.js             # Entry point for React application
│   ├── package.json             # Dependencies and scripts for the frontend
│   └── ...
│
├── server/                      # Node/Express backend
│   ├── models/                  # Mongoose models
│   │   └── User.js              # User model with authentication and geocoding
│   ├── routes/                  # Express routes
│   │   ├── authRoutes.js        # Routes for authentication (login/register)
│   │   ├── ballotRoutes.js      # Routes for ballot related requests
│   │   └── userRoutes.js        # Routes for user-related operations (optional)
│   ├── services/                # Business logic / services
│   │   └── ballotService.js     # Service for API integration and data processing
│   ├── scripts/                 # Standalone scripts for scheduled tasks
│   │   └── fetchBallotData.js   # Script to fetch ballot data from Ballotpedia
│   ├── app.js                   # Express app setup
│   ├── server.js                # Main entry point for the server
│   ├── package.json             # Dependencies and scripts for the backend
│   └── ...
│
├── .env                         # Environment variables (for development)
├── .gitignore                   # Specifies intentionally untracked files to ignore
├── README.md                    # Project documentation
└── package.json                 # Root package.json, primarily for scripts
```

## Wireframe (UI)
![Kofa UI Wireframe](imgs/kofa-ui-wirefram.png)


## Purpose of this application
To get quick and easy voter suggestions on the 2024 election.


## Summary
I want to take my ballot information based on my location and use a LLM to make decisions on who to vote for based on specific questions answered when creating a profile.

## Target States:
- California
- New York
- Michigan


## Technology Stack
- [Kinde (Maybe use for Auth?)](https://kinde.com/)
- [React](https://react.dev/)
- [Nodejs](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [Express](https://expressjs.com/)
- [Civic Information API](https://developers.google.com/civic-information) | [Ballotpedia API](https://developer.ballotpedia.org/#elections)
- [OpenAI API](https://platform.openai.com/docs/api-reference)
- [Langchain (Maybe)](https://python.langchain.com/docs/get_started/quickstart)
- [MongoDB (Maybe)](https://www.mongodb.com/docs/drivers/node/current/)
- [PostgreSQL (Maybe)](https://www.postgresql.org/)
- [AWS (Maybe not needed)](https://docs.aws.amazon.com/)
- [Vercel (Frontend Deployment)](https://vercel.com/docs)
- [Heroku (Backend Deployment)](https://devcenter.heroku.com/categories/reference) | [NextJS]
- [Heroku Scheduler (For Cron Jobs)](https://devcenter.heroku.com/articles/scheduler)


## Products
- Desktop App
- iOS App
- Android App
- API


## Technology Story
- Authenticate preferences based on user profile.
- Schedule historical cron jobs to bring in ballot information from an API and store it in a database.
- Display full ballot based on location.
- Use a LLM to choose best choices from the ballot based on voter preference prompts in the profile settings.
- Click a button to be able to see a shortlist of sellections based on voter preferences.
- Make this information copyable and downloadable.


## User Story
As a user I want too..


- Create a user profile containing name, email address, phone number, physical address (latitude/longitude coordinates) & voter preferences.
- See my full ballot for my area.
- Click a button to see voter suggestions based on my preferences.
- Be able to copy these choices as a cheatsheet to a notepad or download them as a pdf.


## Possible Future Features
- Closest polling stations.
- Access to previous year suggestions.
- Real time election results.
- Ability to chat with suggestions.
- iOS and Andriod App

