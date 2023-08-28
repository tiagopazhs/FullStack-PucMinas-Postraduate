const { defineConfig } = require("cypress");
const axios = require('axios');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        async 'db:erase'() {
          const { data } = await axios.delete(`http://localhost:3001/events`);
          return data;
        },

        async 'db:create'(event) {
          const { data } = await axios.post(`http://localhost:3001/events`, event);
          return data;
        },
      })
    },
  },
});
