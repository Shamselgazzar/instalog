# InstaLog Module
InstaLog is a Node.js module for interacting with the InstaLog API. It provides methods for creating and listing events.

## Installation
You can install `instatus-instalog` using npm:
`npm install instatus-instalog`

## Setup and Usage

### Create a .env file in your project root with the following content:
```bash
INSTALOG_API_BASE_URL=https://your-api-base-url
```
### Require and create an instant of the module in your JavaScript code:
```bash
const InstaLog = require('instatus-instalog');
// Initialize with your API secret key
const instaLog = new InstaLog('your-secret-key');
```
### POST and Get Events
```bash
instalog.createEvent(eventObject)
instalog.listEvents(params)
```
### List of Possible Params
```bash
page: The page number for pagination.
pageSize: The number of items per page.
actorId: Identifies the actor involved in the event.
targetId: Identifies the target entity of the event.
actionId: Identifies the specific action performed in the event.
occurredAt: Timestamp indicating when the event occurred.
location: Specifies the location related to the event.
actorName: The name of the actor involved in the event.
actorGroup: The group or category to which the actor belongs.
actorEmail: The email address of the actor.
actionName: The name or type of the action performed in the event.
```

## Example
```bash
const InstaLog = require('instatus-instalog');
const instalog = new InstaLog(process.env.SECRET_KEY);

// List events with parameters
const params = {  actorName: '', page: 1, pageSize: 10 };

instalog.listEvents(params)
  .then(events => {
    console.log('Events:', events);
  })
  .catch(error => {
    console.error('Error listing events:', error);
  });
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License
This project is licensed under the MIT License - see https://opensource.org/license/mit for details.