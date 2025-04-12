import NewYorkTimesHomepage from "../components/NewYorkTimesHomepage"
import Footer from "../components/FooterPage"
import Content from "./content/[id]/page"

export default function Home() {
  return (
    <div className="App">
      <NewYorkTimesHomepage />
      <Footer />
      {/*<Content />*/}
    </div>
  )
}