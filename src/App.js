import React, { Component } from "react";
import IterationSample from "./IterationSample";

class App extends Component {
  render() {
    return <IterationSample />;
  }
}

export default App;

// import "./App.css";
// import EventPractice from "./EventPractice";

// const App = () => {
//   return <EventPractice />;
// };

// export default App;

//
// 아래는
// 컴포넌트에 ref생성하여 내부 매서드 사용하는 방법

// import React, { Component } from "react";
// import ScrollBox from "./ScrollBox";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
//         <button onClick={() => this.ScrollBox.scrollToBottom()}>맨밑으로</button>
//       </div>
//     );
//   }
// }

// export default App;
