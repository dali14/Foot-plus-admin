import "./Home.css"
import FeaturedInfo from "../../compenents/featuredInfo/FeaturedInfo"
import withAdmin from "../../withAdmin";
import Chart from "../../compenents/chart/Chart";
import { userData } from "../../dummyData";
const Home = (props) => {
  return (
    <div className="home">
      
      <FeaturedInfo/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
    </div>
  )
}

export default withAdmin(Home);