import './home.css';
import { motion } from 'framer-motion';
const Home = () =>{
  return(
    <section className='app__home'>
      <div className='app__home-greeting'>
        <h1 className='glow'>Welcome to Little Lemon</h1>
      </div>
      <div className='app__home-button'>
        <a href='#reverse' >
          <button>Reserve a table</button>
        </a>
      </div> 
    </section>
  )
}
export default Home;