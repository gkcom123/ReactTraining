import React,{Component} from 'react';
import "./style.css";

const UserContext = React.createContext();
const User2Context = React.createContext();

const UserAvatar = ({ size }) => (
    <UserContext.Consumer>
      {user => (
          <div>
        <img
          className={`user-avatar ${size || ""}`}
          alt="user avatar"
          src={user.avatar}
        />
        <span>{user.name}</span>
        </div>
      )}
    </UserContext.Consumer>
  );

  const UserStats = () => (
    <UserContext.Consumer>
      {user => (
        <div className="user-stats">
          <div>
            <UserAvatar user={user} />
            {user.name}
          </div>
          <div className="stats">
            <div>{user.followers} Followers</div>
            <div>Following {user.following}</div>
          </div>
        </div>
      )}
    </UserContext.Consumer>
  );


const FooterLabel = () => (
    <User2Context.Consumer>
      {receivedObj => (
        <div className="user-stats">
          <span>{receivedObj.name}</span>
        </div>
      )}
    </User2Context.Consumer>
) 
const Nav = () => (
    <div className="nav">
        <UserAvatar size="small" />
    </div>
);
  const Content = () => <div className="content">main content here</div>;
  
  const Sidebar = () => (
    <div className="sidebar">
      <UserStats />
    </div>
  );
  const Footer = () => (
    <div className="sidebar">
      <FooterLabel />
    </div>
  );
  const Body = () => (
    <div className="body">
      <Sidebar />
      <Content />
    </div>
  );
class ContextDemo extends Component{
    state = {
        user: {
            avatar:
              "https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b",
            name: "Satish",
            followers: 1234,
            following: 123
          }
    };
    render() {
        const {user} = this.state;
        const userObj = {name:"Footer from different Context"};
        return (
            <div className="app">
            <h2>Context API</h2>
            <UserContext.Provider value={user}>
                <Nav />
                <Body />
            </UserContext.Provider>
            <User2Context.Provider value={userObj}>
                <Footer />
            </User2Context.Provider>
            </div>

        )
    }
}
export default ContextDemo;