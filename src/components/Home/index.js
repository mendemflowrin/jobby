import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Find the job that fits your life</h1>
        <p className="home-description">
          Millions of people are searching for jobs, salary information, company
          reviews.
        </p>
        <Link to="/jobs">
          <button type="button" className="shop-now-button">
            Find jobs
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default Home
