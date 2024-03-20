/// must install exec module
/// npm install exec
const { exec } = require('child_process');

var cmdSH;
function ASH() {
  while(true) {
  cmdSH = prompt('AppShell/');
  exec(cmdSH, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }

    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
   });
  }
}
