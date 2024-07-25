# InstaLog
InstaLog is a Node.js module for interacting with the InstaLog API. It provides methods for creating and listing events.

# Installation
You can install `instatus-instalog` using npm:
`npm install instatus-instalog`

# Setup
1- Create a .env file in your project root with the following content:

`INSTALOG_API_BASE_URL=https://your-api-base-url.com`

2- Require and use the module in your JavaScript code:

`const InstaLog = require('instatus-instalog');`

`// Initialize with your API secret key`

`const instaLog = new InstaLog('your-secret-key');`

# Configuration
Environment Variables: Ensure you have a .env file with the INSTALOG_API_BASE_URL variable set to your InstaLog API base URL.

# Contributing
Contributions are welcome! Please open an issue or submit a pull request on GitHub.

# License
This project is licensed under the MIT License - see https://opensource.org/license/mit for details.