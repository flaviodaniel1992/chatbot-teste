const AssistantV1 = require('watson-developer-cloud/assistant/v1');
const express = require('express');

const app = express();
const port = 3000;

const assistant = new AssistantV1({
  username: 'cesar.macedo@sysmap.com.br',
  password: '040283hA@',
  url: 'https://gateway.watsonplatform.net/assistant/api/',
  version: '2018-02-16',
});

app.get('/conversation/:text*?', (req, res) => {
  const { text } = req.params;

  const params = {
    input: { text },
    workspace_id: 'eaa92a38-ad1a-4bd4-af09-57ee9c67132d',
  };

  assistant.message(params, (err, response) => {
    if (err) {
        res.status(500).json(err);
    } 

    res.json(response);
  });
});

app.listen(port, () => console.log(`Running on port ${port}`));