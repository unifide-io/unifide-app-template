import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import * as view from './unifide-app.template.html';

import '@polymer/paper-tabs/paper-tabs.js';

class UnifideApp extends PolymerElement {

  static get properties() {
      return {
        appName: {
          type: String,
          value: 'Unifide OS Test Application'
        }

      }
  }
  constructor() {
    super();

  }

  static get template () {
    return view;

  }

}


customElements.define('unifide-app', UnifideApp);
