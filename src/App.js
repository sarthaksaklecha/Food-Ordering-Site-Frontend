import "./styles.css";

// Components
import SideMenu from './Components/SideMenu/SideMenu.js'
import Content from './Components/Content/Content.js'

export default function App() {
  return (
    <div className="App">
      {/* side menu */}
      <SideMenu />
      {/* body */}
      <Content />
    </div>
  );
}
