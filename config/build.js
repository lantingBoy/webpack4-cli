let projectName = process.argv[2]
let aa= process.argv
console.log(`+===========${projectName}==========+`)
let fs = require('fs')

fs.writeFileSync('./config/project.js', `exports.name = '${projectName}'`)

let exec = require('child_process').execSync;
exec('npm run build', {stdio: 'inherit'});


