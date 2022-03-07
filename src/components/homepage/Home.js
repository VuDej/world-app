import SingleCountry from '../singleCountry/Single';
import './home.css';

const Homepage = () => {
 
  
   return (
    <section>
      <header className="header">
        <div className="wrapper">
          <h1 className="header-title">World</h1>
          <h3 className="header-number">444,638,071</h3>
        </div>
        </header>
      <form className="search-form">
        <span className="form-span">Infections by Country</span>
      </form>
        <div className="countries">
      
    <SingleCountry />
        </div>
    </section>
  );
};

export default Homepage;
