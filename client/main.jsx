import React from 'react'
import ReactDOM from 'react-dom'
import FileUploadComponent from './FileUpload'

function App () {
  return (
    <div>
      <h1>Veliov Test App</h1>
      <FileUploadComponent />
    </div>
  )
}

Meteor.startup(function () {
  ReactDOM.render(<App />, document.querySelector('#app'))
})
