import test from 'ava';
import sinon from 'sinon';
const proxy = require('proxyquire').noCallThru();


// Lib
// ---------------
// Proxy everything that requires a CSS file
const screenSpy = sinon.stub();
const printSpy = sinon.stub();
const createTheme = proxy('./lib', {
  'normalize.css': {},
  './index.css': {},
  './screen': screenSpy,
  'spectacle/lib/themes/default/print': printSpy
}).default;

test('should be a factory', t => {
  t.is(typeof createTheme, 'function');
});

test('should return screen/print styles', t => {
  const style = createTheme();
  t.true(style.hasOwnProperty('screen'));
  t.true(style.hasOwnProperty('print'));
});

test('should init screen', t => {
  createTheme('name', 'custom');
  t.deepEqual(screenSpy.lastCall.args, ['name', 'custom']);
});

test('shoud inherit print', t => {
  createTheme();
  t.true(printSpy.called);
});


// Screen
// ---------------
// Proxy everything that requires a CSS file
const screen = proxy('./lib/screen', {
  './font.css': {}
}).default;

test('should be a factory', t => {
  t.is(typeof screen, 'function');
});

test('should return an object', t => {
  t.is(typeof screen(), 'object');
});

test('should be possible to overwrite with custom styles', t => {
  const style = screen(null, {global:{body:{color: 'hotpink'}}});
  t.is(style.global.body.color, 'hotpink');
});

test('should deep assign custom styles', t => {
  const style = screen(null, {global:{body:{color: 'hotpink'}}});
  t.truthy(style.global.body.background);
});

test('should expose nova colors', t => {
  const { colors } = screen();
  t.truthy(colors.cyan);
  t.truthy(colors.blue);
  t.truthy(colors.purple);
  t.truthy(colors.pink);
  t.truthy(colors.red);
  t.truthy(colors.orange);
  t.truthy(colors.yellow);
  t.truthy(colors.green);
  t.truthy(colors.gray0);
  t.truthy(colors.gray1);
  t.truthy(colors.gray2);
  t.truthy(colors.gray3);
  t.truthy(colors.gray4);
  t.truthy(colors.gray5);
  t.truthy(colors.gray6);
});