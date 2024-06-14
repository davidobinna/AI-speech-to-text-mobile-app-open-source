import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './theme/variables.css'
import './index.css'
import './global.css'
import { IonApp } from '@ionic/react'
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Call the element loader before the render call
defineCustomElements(window);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IonApp>
    <App />
    </IonApp>
  </React.StrictMode>,
)
