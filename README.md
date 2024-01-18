# kofa
![Kofa Icon](imgs/kofa.png)




## File Structure

## Wireframe (UI)
![Kofa UI Wireframe](imgs/kofa-ui-wirefram.png)




## Purpose of this application
To get concise voter suggestions on upcoming and current elections.




## Summary
I want to take my local ballot and use the app to make decisions on who to vote.


## Target States:
- California
- New York
- Michigan




## Technology Stack
- [Kinde](https://kinde.com/)
- [React](https://react.dev/)
- [Nodejs](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [Express](https://expressjs.com/)
- [Civic Information API](https://developers.google.com/civic-information) | [Ballotpedia API](https://developer.ballotpedia.org/#elections)
- [OpenAI API](https://platform.openai.com/docs/api-reference)
- [Langchain](https://python.langchain.com/docs/get_started/quickstart)
- [MongoDB](https://www.mongodb.com/docs/drivers/node/current/)
- [AWS)](https://docs.aws.amazon.com/)
- [Vercel (Frontend Deployment)](https://vercel.com/docs)
- [Heroku (Backend Deployment)](https://devcenter.heroku.com/categories/reference) | [NextJS]




## Products
- Desktop App
- iOS App
- Android App
- API




## Technology Story
- Set up Cron jobs to save ballot information as JSON files in a NoSQL database from a 3rd party API.
- Authenticate user.
- Display a full ballot based on location from the database.
- Use a LLM to choose the best choices and explain why choices were made.
- Save these choices as a seperate document in the database for future use.
- Click a button to be able to see a shortlist of selections and why.
- Make this information copyable and downloadable.


## Kofa Prompt Examples
- "Analyze this list of candidates and provide an updated list including the candidate that support Affirmative Action the most"
- “Analyze this proposal.  Say yes or no if this is a net benefit to black americans”




## User Story
As a user I want too..




- Create a user profile.
- See my full ballot for my area.
- Click a button to see voter suggestions.
- Be able to copy these choices as a cheatsheet to a notepad, download them as a pdf or share them on social media.




## Possible Future Features
- Closest polling stations.
- Access to previous year suggestions.
- Real time election results.
- Ability to chat with suggestions.
- iOS and Android App


## Cost
- Chat GPT: $20 Monthly
- MongoDB: $20 Montlhy
- Kinde: $10 Monthly
- AWS S3: $20 Monthly