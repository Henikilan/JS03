import lodash from 'lodash';
import { f1 } from './test';
console.log('Hi!');
f1();
function component() {
    const element = document.createElement('div');
    element.innerHTML = lodash.join(['Hello', 'webpack'], '');
    return element;
}
document.body.appendChild(component());