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
│   │   │   └── BallotList.js    # Component to display list of ballots
│   │   ├── api/                 # API related functions
│   │   │   └── serverApi.js     # Functions to interact with your Express server
│   │   ├── App.js               # Main React application file
│   │   └── index.js             # Entry point for React application
│   ├── package.json             # Dependencies and scripts for the frontend
│   └── ...
│
├── server/                      # Node/Express backend
│   ├── routes/                  # Express routes
│   │   ├── ballotRoutes.js      # Routes for ballot related requests
│   │   └── pdfRoutes.js         # Routes for PDF generation
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
To get clear and consise voting suggestions for upcoming elections based on "Foundational Black American" (FBA) conciousness. 

## Technology Stack
- React
- Nodejs
- Express
- [Ballotpedia API](https://developer.ballotpedia.org/#elections)
- Cron
- Open AI API
- Langchain (Maybe)
- MongoDB
- AWS (Maybe not needed)
- Vercel (Frontend Deployment)
- Heroku (Backend Deployment)
- Heroku Scheduler (For Cron Jobs)

## Products
- Desktop App
- iOS App
- Andriod App
- API

## Technology Story
- Authenticate preferences based on urser profile.
- Schedule cron jobs to bring in up-to-date ballot information from the BallotPedia API and store it as JSON files in MongoDB.
- Call Chatgpt API and have it fetch and choose best choices from the ballot based on voter preferences prompts that come from the profile settings.
- Display this information on the front end of the app.
- Make this information copyable and downloadable.

## User Story
As a user I want too..

- Create a profile containing name, email address, phone number, physical address (latitude/longitude coordinates) & voter preferences. 
- Immediatly see voter suggestions based on my ballot and the reasons for the choices.
- Be able to copy these choices as a cheatsheet or download them as a pdf.

## Possible Future Features
- Closest polling stations.
- Access to previous year suggestions.
- Real time election results.
- Ability to chat with suggestions.
- iOS and Andriod App 