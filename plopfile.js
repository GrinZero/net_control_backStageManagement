const reducerGenerator = require('./plop-templates/reduce/prompt.js')
const nextGenerator = require('./plop-templates/next/prompt.js')
const componentGenerator = require('./plop-templates/component/prompt.js')

module.exports=function (plop) {
    plop.setGenerator('reducer', reducerGenerator);
    plop.setGenerator('next', nextGenerator);
    plop.setGenerator('component', componentGenerator);
};