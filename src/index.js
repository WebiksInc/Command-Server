const express = require('express')
const app = express()
const cors = require('cors')
const {exec, execFile} = require('child_process');

app.use(cors())

// ================================================
// routes
// ================================================

const runExec = (command) => {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.log(error)
        }
    });
}

const runExecFile = (path, argsArr) => {
    execFile(path, argsArr, (error, stdout, stderr) => {
        if (error) {
            console.log(error)
        }
    });
}

/** GET '/raw?path=...?args=...'
 * path = path to executable file
 * args = arguments for this file (as string)
 */
app.get('/raw', (req, res) => {
    let path = req.query.path;
    let args = req.query.args;

    runExecFile(path, args.split(' '))

    res.send({request: req.originalUrl})
})

/** GET '/run/:name?arg1=...?arg2=...?arg3=...'
 * :name = name of action
 * arg_i = arguments for this action (as implement in server)
 */
app.get('/run/:name', (req, res) => {
    const name = req.params.name;
    const args = req.query;

    let foundApplication = true;

    switch (name) {
        case "openNotepad": // url form is "openNotepad?option=A&path=path\to\filename"
            let argsArr = ['/' + args.option, args.path]
            runExecFile('notepad.exe', argsArr);
            break;
        case "openFileExplorer": // url form is "openFileExplorer?directory_path=path\to\directory"
            let command = 'start ' + args.directory_path;
            runExec(command);
            break;
        default:
            foundApplication = false
    }
    res.send({
        request: req.originalUrl,
        result: foundApplication
            ? `A implementation was found for ${name}`
            : `No implementation was found for ${name}`
    })
})


// ================================================
// listen to port
// ================================================

const port = 3000
const host = '127.0.0.1'
app.listen(port, host, () => {
    console.log(`server is listening on port ${port}`);
})
