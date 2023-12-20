# kofa
![Kofa Icon](imgs/kofa.png)

## Wireframe (UI)
![Kofa UI Wireframe](imgs/kofa-ui-wirefram.png)

## File Structure
![Kofa File Structure](imgs/kofa-file-structure.png)

## Purpose of this application
To get clear and consise voting suggestions for upcoming elections based on "Foundational Black American" (FBA) conciousness. 

## Technology Stack
- React
- Nodejs
- Express
- BallotPedia API
- Cron
- Open AI API
- Langchain (Maybe)
- MongoDB
- AWS (Maybe not needed)
- Vercel (Frontend Deployment)
- Heroku (Backend Deployment)
- Heroku Scheduler (For Cron Jobs)

## Products
- UI
- API

## Technology Story
- Authenticate user by creating a profile and logging into the app.
- Schedule cron jobs to bring in up-to-date ballot information from the BallotPedia API and store it as JSON files in MongoDB.
- Call Chatgpt API and have it fetch and choose best choices from the ballot based on voter preferences prompts that come from the profile settings.
- Display this information on the front end of the app.
- Make this information copyable and downloadable.

## User Story
As a user I want too..

- Create a profile containing name, email address, phone number, physical address & voter preferences. 
- Immediatly see voter suggestions based on my ballot and the reasons for the choices.
- Be able to copy these choices as a cheatsheet or download them as a pdf.

## Possible Future Features
- A card that shows closest polling stations.
- Access to previous year suggestions.
- Real time election results.
- Ability to chat with suggestions.
- iOS and Andriod App 