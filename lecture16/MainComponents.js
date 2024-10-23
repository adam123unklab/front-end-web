"use strict";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header><HeaderPage /></header>
                <section>
                    <nav><SidebarPage /></nav>
                    <article><ContentPage /></article>
                </section>
                <footer><FooterPage /></footer>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));



class Message extends React.Component {
    render() {// render fucntion
        return (
            <div>
                <small>{this.props.user}:</small>
                <p>{this.props.content}</p>
                <hr />
            </div>
        );
    }
}

//
class ContentPage extends React.Component {
    render() {
        return(
            <div class="main">
                <h2>Live Chat with Chatbot</h2>
                <h5>this is just a demo chats, oct 31, 2022</h5>
                <Message user="Semmy Taju" content="Hi, how are you bot?" />
                <Message user="Chatbot" content="Hi human, I'm Okey." />
                <Message user="Semmy Taju" content="Good, are you human?" />
                <Message user="Chatbot" content="Ehmm.. I'm not human. I'm your virtual bot." />
            </div>
        );
    }
}