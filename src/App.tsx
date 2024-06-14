import { IonButton, IonContent, IonPage, IonToolbar, setupIonicReact } from "@ionic/react"


setupIonicReact()

function App() {


  return (
    <IonPage>
      <IonContent>
        <div className="flex flex-col items-center justify-center h-screen bg-blue-100 p-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-500 mb-4">The Speech to Text Assistant</h1>
          </div>
          <div className="bg-blue-900 p-6 rounded-lg shadow-lg text-left w-full max-w-lg">
            <p className="text-lg text-white mb-4">Tips: Click icon to speak</p>
            <p className="text-sm text-white mb-2">Process: The app will take a while to analyze audio and describe the crime scene.</p>
            <p className="text-sm text-white mb-2">All audio are recorded in our database for security purposes.</p>
            <p className="text-sm text-white mb-2">A deployment fee is required to keep the server running for long-term use.</p>
          </div>
        </div>
      </IonContent>
      <IonToolbar className="">
        <div className="w-full p-4 bg-blue-100">
          <IonButton expand="block" className="w-full h-12 text-white">
            Continue
          </IonButton>
        </div>
      </IonToolbar>

    </IonPage>
  )
}

export default App
