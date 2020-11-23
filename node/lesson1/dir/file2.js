const var22 = 'NODE !!!';

function createUser(name, age) {
  return `Hello from ${name} with ${age}`
}

// exports.func = createUser;


function testMyName() {
  console.log('HELLO MAX')
}

exports.rrr = var22;


console.log('____________________________________-')
console.log(__dirname)
console.log(__filename)
console.log(process.cwd());
console.log('____________________________________-')



global.framework = 'Angular';


console.log(global.xxx);

module.exports = {
  var22,
  testMyName,
  createUser
}