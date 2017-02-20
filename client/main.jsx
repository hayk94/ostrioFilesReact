import React from 'react'
import ReactDOM from 'react-dom'

function App () {
  return (
    <div>Main App</div>
  )
}

Meteor.startup(function () {
  ReactDOM.render(<App />, document.querySelector('#app'))
})
