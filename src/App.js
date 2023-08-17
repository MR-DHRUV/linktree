import { useEffect, useState } from 'react';
import './App.css';
import './Background.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {

  const [width, setWidth] = useState(1500);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [])


  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className="" id="mainCon">

            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>


            <div className={window.innerWidth < 780 ? "topSection mt-3 d-flex justify-content-center flex-column align-items-center" : "topSection mt-4 pt-5 d-flex justify-content-center flex-column align-items-center"}>
              <img className='Image' src={require("./Assets/Dhruv.jpg")} alt="" srcset="" />
              <h1 className='text-light mt-2 h1 fw-bold'>Dhruv Gupta</h1>
              {/* <a href="https://spotify-provider.vercel.app/api/now-playing?open" target="_blank" rel="noopener noreferrer">
          <img src="https://spotify-provider.vercel.app/api/now-playing" alt='' />
        </a> */}
            </div>

            {/* <div className="container-xxl bottomSection bg-dark p-2 text-dark bg-opacity-50 my-5 py-5 border border-light border-opacity-50 rounded d-flex flex-column align-items-center"> */}

            <div className={window.innerWidth < 780 ? 'container-xxl bottomSection p-0 d-flex flex-column align-items-center mt-3' : 'container-xxl bottomSection p-2 d-flex flex-column align-items-center mt-4'}>

              <ul className={window.innerWidth < 780 ? "list-group responsiveWidth" : "list-group w-75 mx-5 px-5"}>
                <h2 className='text-white fw-semibold'>#Socials</h2>

                <a href="https://studentambassadors.microsoft.com/en-US/studentambassadors/profile/94bd7ac2-103e-4759-bb0f-e105df38ca99" target="_blank" rel="noopener noreferrer" className={window.innerWidth < 780 ? "list-group-item h5 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none" : "list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none"} id='linkedin'>
                  <img src={require('./Assets/MSLearn_SA_badge_generic_rgb_300ppi.png')} width="35" alt="" srcset="" className='marginRight' />
                  Microsoft Learn
                </a>

                <a href="https://auth.geeksforgeeks.org/user/gdhruv" target="_blank" rel="noopener noreferrer" className={window.innerWidth < 780 ? "list-group-item h5 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-2" : "list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-3"} id='gfg'>

                  <img src={require('./Assets/GeeksforGeeks.png')} width="34" alt="" srcset="" className='marginRight' />
                  Coding Profile

                </a>

                <a href="https://www.linkedin.com/in/dhruv-gupta-55034a228/" target="_blank" rel="noopener noreferrer" className={window.innerWidth < 780 ? "list-group-item h5 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-2" : "list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-3"} id='linkedin'>

                  <img src={require('./Assets/linkedin.png')} width="30" alt="" srcset="" className='marginRight' />
                  LinkedIn
                </a>

                <a href="/resume" target="_blank" rel="noopener noreferrer" className={window.innerWidth < 780 ? "list-group-item h5 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-2" : "list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-3"} id='github'>

                  <img src={require('./Assets/cv.png')} width="30" alt="" srcset="" className='marginRight' />
                  Résumé

                </a>

                <a href="https://github.com/MR-DHRUV" target="_blank" rel="noopener noreferrer" className={window.innerWidth < 780 ? "list-group-item h5 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-2" : "list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-3"} id='github'>

                  <img src={require('./Assets/github.png')} width="30" alt="" srcset="" className='marginRight' />
                  GitHub

                </a>


                {/* <a href="https://instagram.com/dhruv._0810" target="_blank" rel="noopener noreferrer" className={window.innerWidth < 780 ? "list-group-item h5 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-2" : "list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-3"} id="instagram">
                  <img src={require('./Assets/instagram.png')} width="30" alt="" srcset="" className='marginRight' />
                  @dhruv._0810
                </a> */}


                <a href="mailto:dhruvgupta742@gmail.com" target="_blank" rel="noopener noreferrer" className={window.innerWidth < 780 ? "list-group-item h5 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-2" : "list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-3"} id='gmail'>
                  <img src={require('./Assets/gmail.png')} width="30" alt="" srcset="" className='marginRight' />
                  Mail
                </a>
              </ul>


              <ul className={window.innerWidth < 780 ? "list-group mt-5 pt-3 responsiveWidth" : "list-group w-75 mx-5 px-5 mt-5 pt-3"}>
                <h2 className='text-white fw-semibold'>#Projects</h2>
                <a href="https://github.com/MR-DHRUV/Automate_certificate_generation_and_mailing" target="_blank" rel="noopener noreferrer" className="list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none" id='shotify'>
                  <img src={require('./Assets/certificate.png')} width="30" alt="" srcset="" className='marginRight' />
                  Automate certificate generation and mailing
                </a>
                <a href="https://mr-dhruv.github.io/Authify-Docx/" target="_blank" rel="noopener noreferrer" className={window.innerWidth < 780 ? "list-group-item h5 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-2" : "list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-3"} id='authify'>

                  <img src={require('./Assets/Screenshot 2022-08-15 170151.png')} width="30" alt="" srcset="" className='marginRight' />
                  Authify
                </a>
                <a href="https://mr-dhruv.github.io/Axonify-The-Secrect-Messenging-API/" target="_blank" rel="noopener noreferrer" className={window.innerWidth < 780 ? "list-group-item h5 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-2" : "list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-3"} id='authify'>

                  <img src={require('./Assets/axonify.png')} width="30" alt="" srcset="" className='marginRight' />
                  Axonify
                </a>
                <a href="https://mausam-mr-dhruv.vercel.app/#/" target="_blank" rel="noopener noreferrer" className={window.innerWidth < 780 ? "list-group-item h5 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-2" : "list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-3"} id='mausam'>

                  <img src={require('./Assets/660e0ad8-623c-4c61-a34a-9703b685c217.png')} width="30" alt="" srcset="" className='marginRight' />
                  Mausam
                </a>
                <a href="https://notify-mr-dhruv.vercel.app/" target="_blank" rel="noopener noreferrer" className={window.innerWidth < 780 ? "list-group-item h5 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-2" : "list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-3"} id='notify'>

                  <img src={require('./Assets/writing192.png')} width="30" alt="" srcset="" className='marginRight' />

                  Notify
                </a>
                <a href="https://mr-dhruv.github.io/Tunify-The-Music-API/" target="_blank" rel="noopener noreferrer" className={window.innerWidth < 780 ? "list-group-item h5 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-2" : "list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-3"} id="authify">
                  <img src={require('./Assets/music.png')} width="34" alt="" srcset="" className='marginRight' />
                  Tunify
                </a>
              </ul>
            </div>

            <div className={window.innerWidth < 780 ? "container-xxl mb-5 pb-5 mt-5 pt-3 d-flex justify-content-center flex-column align-items-center" : "container mb-5 pb-5 mt-5 pt-3 d-flex justify-content-center flex-column align-items-center w-50 px-5"}>
              <h2 className='text-white fw-semibold text-start w-100 ps-2'>#Jamm Out To Some Music</h2>
              <div className={window.innerWidth < 780 ? "pb-0 border rounded spotifyPlayer responsiveWidth d-flex justify-content-center flex-column align-items-center" : 'pb-0 border rounded spotifyPlayer d-flex justify-content-center flex-column align-items-center w-100'}>
                {/* <iframe title='SpotifyPlayer' src="https://open.spotify.com/embed/playlist/1TkzdrSSNyST2inQVH8bel?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> */}

                <iframe title='SpotifyPlayer1' src="https://open.spotify.com/embed/playlist/39d35DN2b1DkxEc2obaXF9?utm_source=generator&theme=0" width="100%" height="400"  allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading='lazy' ></iframe>
              </div>
            </div>

          </div>
        </Route>
        <Route path='/gencert' component={() => {
          window.location.href = 'https://github.com/MR-DHRUV/Automate_certificate_generation_and_mailing';
          return null;
        }} />
        <Route path='/linkedin' component={() => {
          window.location.href = 'https://www.linkedin.com/in/dhruv-gupta-55034a228/';
          return null;
        }} />
        <Route path='/github' component={() => {
          window.location.href = 'https://github.com/MR-DHRUV';
          return null;
        }} />
        <Route path='/mlsa' component={() => {
          window.location.href = 'https://mvp.microsoft.com/en-US/studentambassadors/profile/94bd7ac2-103e-4759-bb0f-e105df38ca99';
          return null;
        }} />
        <Route path='/gfg' component={() => {
          window.location.href = 'https://auth.geeksforgeeks.org/user/gdhruv';
          return null;
        }} />
        <Route path='/resume' component={() => {
          window.location.href = 'https://drive.google.com/file/d/16oosFQyPsfFLvqQVk9dzPw_WwXWthBZc/view?usp=sharing';
          return null;
        }} />
        <Route path='/in/insta' component={() => {
          window.location.href = 'https://instagram.com/dhruv._0810';
          return null;
        }} />
      </Switch>
    </Router>

  );
}

export default App;
