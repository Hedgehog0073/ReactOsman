import { app, BrowserWindow } from 'electron';
const url = require('url');
const path = require('path');

const createWindow = (): void => {
  let win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true
    }
  });

  
  
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  })).then(()=>{

    win.setTitle("ReactOsman");
  });

  


//win.loadFile('index.html');


  win.setMenu(null);
}


app.on('ready', createWindow);


