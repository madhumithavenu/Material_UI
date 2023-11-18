// import Test from "./Test";
// import Test2 from "./Test2";
import Layout from "./Layout";
import Test3 from "./Test3";
import Test4 from "./Test4";
import Test5 from "./Test5";
import Test6 from "./Test6";
import Test7 from "./Test7";
import Test8 from "./Test8";
import Navbar from "./components/Navbar";

const linksArray = ["Products","Services","Overview","Contact Us"]

function App() {
  return (
    <div >
     {/* <Test2 />  */}
     {/* <Test3/> */}
     <Navbar links={linksArray}/>
    </div>
  );
}

export default App;
