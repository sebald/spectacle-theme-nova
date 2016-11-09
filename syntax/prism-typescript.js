/* global Prism */

Prism.languages.typescript = Prism.languages.extend('javascript', {
    // Add some additional token type for better "nova"-like coloring
  global: /\b(import|from|export|console|window|Math|Number|String|document|this)\b/,
  statement: /\b(if|else|return|try|catch|finally|break|for|switch|case|continue|while|do|throw|async|await)\b/,
  keyword: /\b(class|const|debugger|default|delete|enum|extends|false|function|get|implements|in|instanceof|interface|let|new|null|package|private|protected|public|set|static|super|true|try|typeof|var|void|while|with|yield|module|declare|constructor|string|Function|any|number|boolean|Array|enum)\b/
});

Prism.languages.ts = Prism.languages.typescript;