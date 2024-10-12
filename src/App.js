
import { ChatEngine} from "react-chat-engine";
import ChatFeed from "./Components/ChatFeed";
import LoginForm from "./Components/LoginForm";
import './App.css'
const projectID = 'b702b4ab-a6f1-4892-ae1e-f618237d9441';
function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;
  
  return (
    <ChatEngine
    height="100vh"
    projectID={projectID}
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
  />)
}

export default App;
