const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const swaggerDocument = YAML.load('../docs/swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.json());
app.use('/person', require('./routes'));

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));