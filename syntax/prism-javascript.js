/* global Prism */

Prism.languages.javascript = Prism.languages.extend('clike', {
  // Add some additional token type for better "nova"-like coloring
  global: /\b(import|from|export|console|window|Math|Number|String|document|this)\b/,
  statement: /\b(if|else|return|try|catch|finally|break|for|switch|case|continue|while|do|throw|async|await)\b/,
  keyword: /\b(class|const|debugger|default|delete|enum|extends|false|function|get|implements|in|instanceof|interface|let|new|null|package|private|protected|public|set|static|super|true|try|typeof|var|void|while|with|yield|module|declare|constructor|string|Function|any|number|boolean|Array|enum)\b/,
  number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  function: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/
});

Prism.languages.insertBefore('javascript', 'keyword', {
  'regex': {
    pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
    lookbehind: true,
    greedy: true
  }
});

Prism.languages.insertBefore('javascript', 'string', {
  'template-string': {
    pattern: /`(?:\\\\|\\?[^\\])*?`/,
    greedy: true,
    inside: {
      'interpolation': {
        pattern: /\$\{[^}]+\}/,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\$\{|\}$/,
            alias: 'punctuation'
          },
          rest: Prism.languages.javascript
        }
      },
      'string': /[\s\S]+/
    }
  }
});

if (Prism.languages.markup) {
  Prism.languages.insertBefore('markup', 'tag', {
    'script': {
      pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
      lookbehind: true,
      inside: Prism.languages.javascript,
      alias: 'language-javascript'
    }
  });
}

Prism.languages.js = Prism.languages.javascript;