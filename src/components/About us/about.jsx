import './about.css';
import logo from '../../assests/homebg2.webp';
const About = () =>{
  return(
    <section className='app__about'>
      <div className='app__about-info'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
          Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
          and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
          continue to oversee the Little Lemon restaurant, nearly thirty years later
        </p>
      </div>
      <div className = 'app__about-imgs'>
        <img src={logo} alt='food'/>
      </div>
    </section>
  )
}
export default About;