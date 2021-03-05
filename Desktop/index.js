const { app, BrowserWindow } = require("electron");

let appWindow = "";

function crearVentana() {
  appWindow = new BrowserWindow({
    width: 1400,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    center: true,
    // resizable: false,
    show: false,
    icon: "icon.png",
  });

  appWindow.loadFile("./index.html");

  appWindow.on("closed", () => {
    appWindow = null;
  });

  appWindow.once("ready-to-show", () => {
    appWindow.show();
  });
}

app.on("ready", crearVentana);
