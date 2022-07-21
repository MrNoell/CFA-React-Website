import './App.css';
import instagram from "./instagram.png";
import github from "./github.png";
import youtube from "./youtube.png";
import header_img from "./header-image.png"

function App() {
  return (
    <div className="App">
      <img src={header_img} id="main-img"/>
      <main>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie tempor lorem, eu commodo arcu molestie eget. Aliquam at tincidunt ex, quis semper ipsum. Mauris eleifend arcu purus. Nam ac dui elementum, facilisis est non, dignissim lectus. Nulla facilisi. Ut laoreet et metus vehicula sodales. Aenean egestas lectus diam, ut fermentum mi fringilla quis. Quisque feugiat tellus vel odio congue, a cursus metus fringilla. Etiam sagittis aliquam augue, ut lacinia justo commodo id. Suspendisse potenti. Morbi aliquam mollis lorem, in congue nisi maximus quis. Integer finibus euismod vehicula. Proin aliquet nisi sed risus dignissim, in molestie purus eleifend. Vestibulum et mollis mauris. Praesent viverra tincidunt turpis id tempor.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie tempor lorem, eu commodo arcu molestie eget. Aliquam at tincidunt ex, quis semper ipsum. Mauris eleifend arcu purus. Nam ac dui elementum, facilisis est non, dignissim lectus. Nulla facilisi. Ut laoreet et metus vehicula sodales. Aenean egestas lectus diam, ut fermentum mi fringilla quis. Quisque feugiat tellus vel odio congue, a cursus metus fringilla. Etiam sagittis aliquam augue, ut lacinia justo commodo id. Suspendisse potenti. Morbi aliquam mollis lorem, in congue nisi maximus quis. Integer finibus euismod vehicula. Proin aliquet nisi sed risus dignissim, in molestie purus eleifend. Vestibulum et mollis mauris. Praesent viverra tincidunt turpis id tempor.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie tempor lorem, eu commodo arcu molestie eget. Aliquam at tincidunt ex, quis semper ipsum. Mauris eleifend arcu purus. Nam ac dui elementum, facilisis est non, dignissim lectus. Nulla facilisi. Ut laoreet et metus vehicula sodales. Aenean egestas lectus diam, ut fermentum mi fringilla quis. Quisque feugiat tellus vel odio congue, a cursus metus fringilla. Etiam sagittis aliquam augue, ut lacinia justo commodo id. Suspendisse potenti. Morbi aliquam mollis lorem, in congue nisi maximus quis. Integer finibus euismod vehicula. Proin aliquet nisi sed risus dignissim, in molestie purus eleifend. Vestibulum et mollis mauris. Praesent viverra tincidunt turpis id tempor.
      </p>
      </main>
      <div id="socials">
        <a href="https://www.instagram.com/noel_lelcaj/">
          <img src={instagram} className="icons"/>
        </a>
        <a href="https://github.com/MrNoell">
          <img src={github} className="icons"/>
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src={youtube} className="icons"/>
        </a>
      </div>
    </div>
  );
}

export default App;
