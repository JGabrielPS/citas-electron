const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

let appWindow;

function createWindow() {
  appWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    center: true,
    resizable: true,
    minWidth: 600,
    minHeight: 400,
    show: false,
    icon: "icon.png",
  });

  appWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  appWindow.once("ready-to-show", () => {
    appWindow.show();
  });
}

app.on("ready", createWindow);

//En Mac la aplicacion no se cierra al cerrar la ventana, asi nos aseguramos de ello
app.on("window-all-closed", () => {
  if (process.platform === "darwin") {
    app.quit();
  }
});

//Tambien en Mac hace falta especificar cuando se minimiza la ventana que la cree nuevamente
app.on("activate", () => {
  if (appWindow === null) {
    createWindow();
  }
});
