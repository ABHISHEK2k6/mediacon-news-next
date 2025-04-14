import NewYorkTimesHomepage from "../components/NewYorkTimesHomepage"
import Footer from "../components/FooterPage"
//import LoadingScreen from "../components/Loader"

export default function Home() {
  return (
    <div className="App">
      {/*<LoadingScreen/>*/}
      <NewYorkTimesHomepage />
      <Footer />
    </div>
  )
}