import "./app.scss"
import { Form } from "./components/Form/Form";

function App() {
  return (
    <div className="App">
       <div className="container">
        <div className="left">
        <img src="/img/logo.png" alt="logo"/>
        <Form className="form"/>
          <div className="e1"></div>
          <div className="e2"></div>
          <div className="e3"></div>
        </div>
        <div className="right">
          <div className="content">
            <h1>Get Landing Page <span>Served</span> Before Your Favourite Noodles</h1>
            <ul>
              <li>One Click Template Selection</li>
              <li>Automated CopyWriting</li>
              <li>Performance Optimized</li>
            </ul>
            <img src="/img/noodle.png" alt="noodle" />
          </div>
          <div className="images">
            <img className="back" src="/img/back.png" alt=""/>
            <img className="main" src="/img/main.png" alt=""/>
          </div>
        </div>
       </div>
    </div>
  );
}

export default App;
