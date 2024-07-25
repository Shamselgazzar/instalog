const fetch = require('node-fetch');
require('dotenv').config();

class InstaLog {
  constructor(secretKey) {
    this.secretKey = secretKey;
    this.apiBaseUrl = process.env.INSTALOG_API_BASE_URL; 
    if(!this.apiBaseUrl) {
      throw new Error('Missing INSTALOG_API_BASE_URL environment variable. Please add it to the .env file.');
    }
  }

  async createEvent(eventObject) {
    try {
      const response = await fetch(`${this.apiBaseUrl}/api/events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.secretKey}`
        },
        body: JSON.stringify(eventObject)
      });
      if (!response.ok) {
        throw new Error('Failed to create event');
      }
      return await response.json();
    } catch (error) {
      console.error('Error creating event:', error);
    }
  }

  async listEvents(params) {
    try {
      const queryParams = new URLSearchParams(params).toString();
      const response = await fetch(`${this.apiBaseUrl}/api/events?${queryParams}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.secretKey}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to list events');
      }
      return await response.json();
    } catch (error) {
      console.error('Error listing events:', error);
    }
  }
}

module.exports = InstaLog;
