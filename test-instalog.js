
const InstaLog = require('.');
const instalog = new InstaLog(process.env.SECRET_KEY);

// Example event object to create
const eventObject = {
  actorId: 'clyu14qhj00045kzpf9oqlj9u',
  actionId: 'clyu14r3h00055kzpshp21rnn',
  targetId: 'clyu14qhj00045kzpf9oqlj9u',
  location: 'New York',
  metadata: { ipAddress: '127.0.0.1' }
};

// Create an event
// instalog.createEvent(eventObject)
//   .then(event => {
//     console.log('Event created:', event);
//   })
//   .catch(error => {
//     console.error('Error creating event:', error);
//   });

// List events with parameters
const params = {
  actorName: '',
  actorId: '',
  page: 1,
  pageSize: 10
};

instalog.listEvents(params)
  .then(events => {
    console.log('Events:', events);
  })
  .catch(error => {
    console.error('Error listing events:', error);
  });
