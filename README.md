# Command-Server
Node application for running applications from "Multi Desktop Full Screen for Chrome"

## Getting Started

### Prerequisites
This project requires [NodeJS](http://nodejs.org/) and [NPM](https://npmjs.org/).
To make sure you have them available on your machine, run the following commands:
```bash
> npm -v
> node -v
```

### Installation
- Clone this repo on your local machine:
```bash
> git clone https://github.com/WebiksInc/Command-Server.git
> cd src
```
- Install node libraries:
```bash
> npm install
```
### Start node server on machine boot as a windows service:
- cd src
- node service.js <Service Name> <Service Description> (for example node service.js CommandService CommandServiceDescription)

## Running the Demo:
- Move the `demo/example.txt` file to the `C:\Users\Public` folder.
- Open `demo/index.html`.
- Note: This is a DEMO only. When using code, security issues should be considered (for example: CORS configuration)

## Application Routes:

### `GET /raw?path=...?args=...` 
  
Runs an executable  file and its arguments.

| parameter | description |
| --- | --- |
| `path` | path to executable file |
| `args` | arguments for this file (as string) |

### `GET /run/name?arg1=...?arg2=...?arg3=...`
Runs an action defined on the server using its name and arguments.

| parameter | description |
| --- | --- |
| `name` | name of action |
| `args` | arguments for this action |
