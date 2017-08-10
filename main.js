const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

var mainWindow = null;

ipcMain.on('ping' , function(event, arg){
  if(arg === 'Hello') {
    event.sender.send('pong', 'I love you suru')
  }
  });

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600, webPreferences: {
   nodeIntegration: false,
    preload: __dirname + '/preload.js' // this is our preload script
  }});

  mainWindow.loadURL('file://' + __dirname + '/index.html');
})