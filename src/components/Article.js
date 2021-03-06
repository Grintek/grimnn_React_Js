import React, {Component} from 'react'

class Article extends Component{
    state = {
        isOpen: true
        };
    render(){
    const {article} = this.props;
    console.log('---', this.props);
    const body = this.state.isOpen && <section>{article.text}</section>;
        return(
    <div>
        <h2>{article.title}</h2>
        <button onClick={this.handleClick}>{this.state.isOpen ? "close" : "open"}</button>
        {body}

        <h3>creation date: {(new Date(article.data).toDateString())}</h3>
    </div>
)

    }
    handleClick = () => {
        console.log('---', 'clicked');
        this.setState({
                isOpen: !this.state.isOpen
            })
    }
}

export default Article;