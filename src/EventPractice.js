import React, { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + " : " + message);
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input type="text" name="username" placeholder="이름을 입력" value={username} onChange={onChange} />
      <input type="text" name="message" placeholder="아무거나 입력" value={message} onKeyPress={onKeyPress} onChange={onChange} />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;

// import React, { useState } from "react";

// const EventPractice = () => {
//   const [username, setUsername] = useState("");
//   const [message, setMessage] = useState("");

//   const onChangeUsername = (e) => setUsername(e.target.value);
//   const onChangeMessage = (e) => setMessage(e.target.value);
//   const onClick = () => {
//     alert(username + " : " + message);
//     setMessage("");
//     setUsername("");
//   };
//   const onKeyPress = (e) => {
//     if (e.key === "Enter") {
//       onClick();
//     }
//   };
//   return (
//     <div>
//       <h1>이벤트 연습</h1>
//       <input type="text" name="username" placeholder="이름을 입력" value={username} onChange={onChangeUsername} />
//       <input type="text" name="message" placeholder="아무거나 입력" value={message} onKeyPress={onKeyPress} onChange={onChangeMessage} />
//       <button onClick={onClick}>확인</button>
//     </div>
//   );
// };

// export default EventPractice;

// import React, { Component } from "react";

// class EventPractice extends Component {
//   state = {
//     message: "",
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleClick = () => {
//     alert(this.state.username + " : " + this.state.message);
//     this.setState({
//       username: "",
//       message: "",
//     });
//   };

//   handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       this.handleClick();
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input type="text" name="username" placeholder="이름을 입력" value={this.state.username} onChange={this.handleChange} />
//         <input type="text" name="message" placeholder="아무거나 입력" value={this.state.message} onKeyPress={this.handleKeyPress} onChange={this.handleChange} />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// export default EventPractice;
