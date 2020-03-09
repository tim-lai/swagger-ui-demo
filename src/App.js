import React from 'react';
import './App.css';

import SwaggerUI from 'swagger-ui';
import SwaggerUIStandalone from 'swagger-ui/dist/swagger-ui-standalone-preset';
import 'swagger-ui/dist/swagger-ui.css';
import WowMode from './wow-mode';

const ui = SwaggerUI({
  plugins: [SwaggerUIStandalone, WowMode],
  url: 'https://petstore.swagger.io/v2/swagger.json',
  layout: 'StandaloneLayout',
});

window.ui = ui;

const App = ui.getComponent('App', 'root');

export default App;
