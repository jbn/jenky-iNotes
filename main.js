const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
    }
  })

  win.loadURL('https://www.icloud.com/notes')
}

app.whenReady().then(createWindow)
