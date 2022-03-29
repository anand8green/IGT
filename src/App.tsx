import React from 'react'
import thumnail from './assets/thum.png'

const App = () => {
  return (
    <div className="container">
      <div className="topBar">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="links">
          <p>lorem ipusum</p>
          <button>Lorem Ipsum</button>
          <button>Lorem Ipsum</button>
        </div>
      </div>
      <div className="heroContainer">
        <div className="hero">
          <div className="photo">
            <img src={thumnail} alt="" />

          </div>
          <div className="sidebar">
            <div className="card">
              <h3>LOREM IPSUM LOREM</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur inventore voluptate iusto</p>
            </div>
            <div className="card">
              <h3>LOREM IPSUM LOREM</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur inventore voluptate iusto</p>
            </div>

          </div>
        </div>
      </div>
      <div className="content">
        <div className="large">
          <div className="bigCard">
            <h3>LOREM IMSUM LOREM</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur.</p>
            <button>Lorem Ipsum</button>
          </div>
          <div className="bigCard">

            <h3>LOREM IMSUM LOREM</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur.</p>
            <button>Lorem Ipsum</button>
          </div>
        </div>

        <div className="small">

          <div className="smallCard">
            <h5>LOREM IMSUM LOREM</h5>
            <img src={thumnail} alt="" />
            <button>Lorem Ipsum</button>
          </div>
          <div className="smallCard">
            <h5>LOREM IMSUM LOREM</h5>
            <img src={thumnail} alt="" />
            <button>Lorem Ipsum</button>
          </div>
          <div className="smallCard">
            <h5>LOREM IMSUM LOREM</h5>
            <img src={thumnail} alt="" />
            <button>Lorem Ipsum</button>
          </div>
          <div className="smallCard">
            <h5>LOREM IMSUM LOREM</h5>
            <img src={thumnail} alt="" />
            <button>Lorem Ipsum</button>
          </div>

        </div>
        <div className="orangeButton">
          <button>Lorem Ipsum</button>
        </div>
      </div>

      <div className="tabContainer">
        <div className="tab">
          <h4>Lorem IpsumLorem</h4>
          <input type="text" placeholder='username' />
          <input type="text" placeholder='password' />
          <button>Lorem Ipsum</button>
        </div>
      </div>
      <div className="blueBarContainer">
        <div className="blueBar">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, excepturi. Lorem ipsum, dolor sit.</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="linksContainer">
        <div className="links">
          <div className="allLink">
            <p>link1</p>
            <p>link2</p>
            <p>link3</p>
            <p>link4</p>
            <p>link5</p>
            <p>link6</p>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, atque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, atque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, atque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, atque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, atque.</p>
        </div>

      </div>

    </div>
  )
}

export default App