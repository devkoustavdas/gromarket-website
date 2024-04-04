import LandingHeader from "../components/Home/LandingHeader";
import GetStarted from "../components/Home/GetStarted";
import Meta from '../components/Html.jsx/Meta';

const Home = () => {
  return (
    <main>
      <Meta
        title={"GroMarket - Finance Blogs, Resources, News and Analysis"}
        description={
          "Discover finance blogs, resources, news, and stock analysis at GroMarket. Explore trading strategies, investment tips, budget planning, tax advice, debt management, savings techniques. Access tools for personal and corporate finance management. Dive into stock analysis and stock picking guidance"
        }
        keyword={
          "Tax planning, Debt management, Trading and Investment strategies, Finance Blogs, Personal Finance Tips, Budget planning tools, Stock Analysis, Finance News"
        }
        link={"blogs"}
      />
      <LandingHeader />
      <GetStarted />
    </main>
  )
}

export default Home
