let Service = require('node-windows').Service;

let script = process.argv[1].replace('index.js', 'service.js');
let name = process.argv[2] || 'Command Service';
let description = process.argv[3] || 'Command Service';

let svc = new Service({
    name,
    description,
    script
})

svc.on('install', () => {
    svc.start();
})

svc.install();