import { useEffect } from 'react';
import './App.css';
import './Background.css'

function App() {

  let width
  useEffect(() => {

    width = window.innerWidth;

  }, [])



  return (
    <div className="">

      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>


      <div className={window.innerWidth < 780 ? "topSection mt-4 d-flex justify-content-center flex-column align-items-center" : "topSection mt-5 pt-5 d-flex justify-content-center flex-column align-items-center"}>
        <img className='Image' src={require("./Dhruv.jpg")} alt="" srcset="" />
        <h1 className='text-light mt-2 h1'>Dhruv Gupta</h1>
        {/* <a href="https://spotify-provider.vercel.app/api/now-playing?open" target="_blank" rel="noopener noreferrer">
          <img src="https://spotify-provider.vercel.app/api/now-playing" alt='' />
        </a> */}
      </div>

      {/* <div className="container-xxl bottomSection bg-dark p-2 text-dark bg-opacity-50 my-5 py-5 border border-light border-opacity-50 rounded d-flex flex-column align-items-center"> */}

      <div className={window.innerWidth < 780 ? 'container-xxl bottomSection p-0 d-flex flex-column align-items-center mt-5' : 'container-xxl bottomSection p-2 d-flex flex-column align-items-center mt-5'}>

        <ul className={window.innerWidth < 780 ? "list-group responsiveWidth" : "list-group w-75 mx-5 px-5"}>
          <h2 className='text-white fw-bold'>#Socials</h2>

          <a href="mailto:dhruvgupta742@gmail.com" target="_blank" rel="noopener noreferrer" className={window.innerWidth < 780 ? "list-group-item h5 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none" : "list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none"} id='gmail'>
            <img src={require('./gmail.png')} width="30" alt="" srcset="" className='marginRight' />
            dhruvgupta742@gmail
          </a>

          <a href="https://github.com/MR-DHRUV" target="_blank" rel="noopener noreferrer" className={window.innerWidth < 780 ? "list-group-item h5 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-2" : "list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-3"} id='github'>

            <img src={require('./github.png')} width="30" alt="" srcset="" className='marginRight' />
            View my repositories

          </a>

          {/* className={window.innerWidth <780 ? "list-group-item h5 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none" :"list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none"} */}

          <a href="https://www.linkedin.com/in/dhruv-gupta-55034a228/" target="_blank" rel="noopener noreferrer" className={window.innerWidth < 780 ? "list-group-item h5 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-2" : "list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-3"} id='linkedin'>

            <img src={require('./linkedin.png')} width="30" alt="" srcset="" className='marginRight' />
            Connect with me
          </a>

          <a href="https://instagram.com/dhruv._0810" target="_blank" rel="noopener noreferrer" className={window.innerWidth < 780 ? "list-group-item h5 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-2" : "list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-3"} id="instagram">
            <img src={require('./instagram.png')} width="30" alt="" srcset="" className='marginRight' />
            @dhruv._0810
          </a>



          <a href="https://auth.geeksforgeeks.org/user/gdhruv" target="_blank" rel="noopener noreferrer" className={window.innerWidth < 780 ? "list-group-item h5 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-2" : "list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-3"} id='gfg'>
            <img src={require('./GeeksforGeeks.png')} width="34" alt="" srcset="" className='marginRight' />
            gdhruv
          </a>
        </ul>


        <ul className={window.innerWidth < 780 ? "list-group mt-5 pt-3 responsiveWidth" : "list-group w-75 mx-5 px-5 mt-5 pt-3"}>
          <h2 className='text-white fw-bold'>#Projects</h2>
          <a href="https://api-authify.herokuapp.com" target="_blank" rel="noopener noreferrer" className="list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none" id='authify'>

           
            <img src={require('./Screenshot 2022-08-15 170151.png')} width="30" alt="" srcset="" className='marginRight' />
            Authify

          </a>

          <a href="https://mausam-mr-dhruv.vercel.app/#/" target="_blank" rel="noopener noreferrer" className={window.innerWidth < 780 ? "list-group-item h5 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-2" : "list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-3"} id='mausam'>

            <img src={require('./660e0ad8-623c-4c61-a34a-9703b685c217.png')} width="30" alt="" srcset="" className='marginRight' />
            Mausam
          </a>
          <a href="https://notify-mr-dhruv.vercel.app/" target="_blank" rel="noopener noreferrer" className={window.innerWidth < 780 ? "list-group-item h5 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-2" : "list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-3"} id='notify'>

          <img src={require('./writing192.png')} width="30" alt="" srcset="" className='marginRight' />

          Notify
          </a>
          <a href="https://shotifylink.herokuapp.com/" target="_blank" rel="noopener noreferrer" className={window.innerWidth < 780 ? "list-group-item h5 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-2" : "list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-3"} id='shotify'>
            <img src={require('./favicon.ico')} width="30" alt="" srcset="" className='marginRight' />
            Shotify
          </a>
          <a href="https://mr-dhruv.github.io/Textify.me/" target="_blank" rel="noopener noreferrer" className={window.innerWidth < 780 ? "list-group-item h5 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-2" : "list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-3"} id='texify'>
          <img src={require('./favicon(1)(1).png')} width="30" alt="" srcset="" className='marginRight' />
            Textify
          </a>

          <a href="http://api-tunify.herokuapp.com/" target="_blank" rel="noopener noreferrer" className={window.innerWidth < 780 ? "list-group-item h5 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-2" : "list-group-item h4 bg-dark text-white p-3 broder rounded d-flex flex-row justify-content-center align-items-center bg-opacity-50 border border-light border-opacity-50 rounded text-decoration-none mt-3"} id="authify">
          <img src={require('./music.png')} width="30" alt="" srcset="" className='marginRight' />
            Tunify
          </a>
        </ul>
      </div>

      <div className={window.innerWidth < 780 ? "container-xxl mb-5 pb-5 mt-5 pt-3 d-flex justify-content-center flex-column align-items-center" : "container mb-5 pb-5 mt-5 pt-3 d-flex justify-content-center flex-column align-items-center w-50 px-5"}>
        <h2 className='text-white fw-bold'>Jamm Out To Some Music</h2>
        <div className={window.innerWidth < 780 ? "pb-0 border rounded spotifyPlayer responsiveWidth d-flex justify-content-center flex-column align-items-center" : 'pb-0 border rounded spotifyPlayer d-flex justify-content-center flex-column align-items-center w-100'}>
          <iframe title='SpotifyPlayer' src="https://open.spotify.com/embed/playlist/1TkzdrSSNyST2inQVH8bel?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></div>
      </div>

    </div>
  );
}

export default App;
