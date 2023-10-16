import React from 'react'
import ProfileCard from './ProfileCard'
import Alexa from './images/alexa.png'
import Cortana from './images/cortana.png'
import Siri from './images/siri.png'
import 'bulma/css/bulma.css'


const App = () => {
  return (
    <div>

      <div className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal digital assistants</p>
        </div>
      </div>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title="Alexa" handle="@alexa99" image={Alexa} description="Alexa is good "/>
            </div>
            <div className="column is-4">
              <ProfileCard title="Cortana" handle="@cortana32" image={Cortana} description="Cortana is good "/>
            </div>
            <div className="column is-4">
              <ProfileCard title="Siri" handle="@siri01" image={Siri} description="Siri is good "/>
            </div>
          </div>
        </section>
      </div>  

    </div>
  )
}

export default App