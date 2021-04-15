import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { ipcRenderer } from 'electron';
import { observer } from 'mobx-react-lite';
import { useStore } from './hook/useStore';
import { store } from './store/index';

import icon from '../assets/icon.svg';
import './App.global.css';

ipcRenderer.on('ping', (event, args) => {
  console.log(args);
});

const About = observer(() => {
  const title = useStore('title');
  function click() {
    store.setTitle('1111111111');
    console.log(store);
  }
  return <div onClick={() => click()}>about {title}</div>;
});

const Hello = observer(() => {
  const title = useStore('title');

  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate {title}</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </button>
        </a>
        <button
          type="button"
          onClick={async () => {
            // console.log(remote.getCurrentWindow().webContents);
            const res = await ipcRenderer.invoke('showAboutwindow');
            console.log(res);
          }}
        >
          about
        </button>
        <button
          type="button"
          onClick={async () => {
            const res = await ipcRenderer.invoke('upload-file');
            console.log(res);
          }}
        >
          上传文件
        </button>
        <button
          type="button"
          onClick={async () => {
            const res = await ipcRenderer.invoke('save-file');
            console.log(res);
          }}
        >
          保存
        </button>

        <button
          type="button"
          onClick={async () => {
            const res = await ipcRenderer.invoke('show-message');
            console.log(res);
          }}
        >
          提示消息
        </button>
      </div>
    </div>
  );
});

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Hello} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}
