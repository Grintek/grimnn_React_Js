import React from 'react'
import ReactDOM from 'react-dom'
import App from './componentsTest/App'
//import App from './components/App'

// function formatDate(date){
//     return date.toLocaleDateString();
// }
//
// function Avatar(props) {
//     return (
//     <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name}/>
//     );
// }
//
// function UserInfo(props) {
//     return (
//         <div className="UserInfo">
//             <Avatar user={props.user}/>
//             <div className="UserInfo-name">
//                 {props.user.name}
//             </div>
//         </div>
//     );
// }
// function Comment(props){
//     return(
//         <div className="Comment">
//             <UserInfo user={props.author}/>
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {formatDate(props.data)}
//             </div>
//         </div>
//     );
// }
//
// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning react!',
//   author: {
//       name: 'Hello Kitty',
//       avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// };
//
// ReactDOM.render(
//     <Comment
//     data={comment.date}
//     text={comment.text}
//     author={comment.author}
//     />,
//     document.getElementById('root')
// );

/////////////***************** Следующий тест. Урок*****************////////////////////////////////
function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}</h2>;
}

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>Hello, word</h1>
                <FormattedDate date={this.state.date}/>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);

