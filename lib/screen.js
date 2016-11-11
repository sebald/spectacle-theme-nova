import './font.css';
import deepAssign from 'deep-assign';
import hexRgb from 'hex-rgb';
import nova from 'nova-colors';

/**
 * Nova theme colors! <3
 */
const COLOR_THEME = {
  nova: {
    text: nova.grays.gray6, /** usually gray5, want more contrast :-x */
    heading: nova.colors.cyan,
    highlight: nova.colors.yellow,
    background: nova.grays.gray1
  },
  avon: {
    text: nova.colors.black,
    heading: nova.colors.blue,
    highlight: nova.colors.cyan,
    background: nova.grays.gray6
  }
};

/**
 * Screen CSS. User can chose two themes:
 *
 * - "nova": Nova theme
 * - "avon": bright theme (inversed Nova)
 *
 * Also, users can overwrite anything with custom styles by passing
 * an object as second argument.
 */
module.exports = (name, custom={}) => {
  const color = COLOR_THEME[name] || COLOR_THEME['nova'];
  const fonts = {
    body: `'Open Sans', sans-serif`,
    header: `Montserrat, sans-serif`,
    code: `'Fira Mono', monospace`
  };

  // Base Style for all Headers
  const header = style => Object.assign({}, {
    fontFamily: fonts.header,
    fontWeight: 700,
    color: color.heading,
    lineHeight: 1,
    margin: '0 auto 2rem'
  }, style);

  const theme = {
    colors: Object.assign({}, color, nova.colors, nova.grays),
    fonts,

    // Global CSS
    // ---------------
    global: {
      body: {
        background: color.background,
        color: color.text,
        fontFamily: fonts.body,
        fontSize: '100%',
        overflow: 'hidden'
      },
      'html, body': {
        height: '100%'
      },
      '*': {
        boxSizing: 'border-box'
      }
    },

    // Presentation Components
    // ---------------
    components: {
      blockquote: {
        display: 'inline-block',
        textAlign: 'left',
        position: 'relative',
        margin: 0,
        padding: '1.2rem 0 1.2rem 2rem',
        borderLeft: `6px double ${color.highlight}`,
      },
      quote: {
        display: 'block',
        fontSize: '4rem',
        fontWeight: 'bold',
        lineHeight: 1.1
      },
      cite: {
        display: 'block',
        marginTop: '2.5rem',
        fontSize: '1.5rem',
        opacity: 0.6
      },
      content: {
        margin: '0 auto',
        textAlign: 'center'
      },
      heading: {
        h1: header({
          fontSize: '7rem'
        }),
        h2: header({
          fontSize: '5rem'
        }),
        h3: header({
          fontSize: '3rem',
          color: color.text
        }),
        h4: header({
          fontSize: '2rem',
          color: color.text
        }),
        link: {
          textDecoration: 'none'
        }
      },
      text: {
        fontSize: '1.75rem',
        margin: '0 auto 0.5rem'
      },
      s: {
        strikethrough: {},
      },
      link: {
        display: 'inline-block',
        color: color.text,
        textDecoration: 'none',
        marginBottom: '-2px',
        borderBottom: `2px solid rgba(${hexRgb(color.heading)}, 0.3)`,
        ':hover': {
          color: color.heading
        }
      },
      listItem: {
        fontSize: '2rem',
        padding: '0.25em 0'
      },
      list: {
        textAlign: 'left',
        padding: '0 0 0 3rem'
      },
      tableHeaderItem: {
        fontSize: '2.25rem',
        fontWeight: 'bold',
        border: `2px solid ${nova.grays.gray2}`,
        padding: '0.5rem 0'
      },
      tableItem: {
        fontSize: '1.5rem',
        border: `2px solid ${nova.grays.gray2}`,
        padding: '1rem 0.5rem'
      },
      table: {
        width: '100%',
        borderCollapse: 'collapse'
      },
      image: {
        display: 'block',
        margin: '0.5rem auto'
      },
      code: {
        display: 'inline-block',
        color: nova.grays.gray5,
        fontFamily: fonts.code,
        fontSize: '90%',
        lineHeight: 1,
        background: nova.grays.gray2,
        padding: '6px 5px 3px',
        borderRadius: '2px'
      },
      codePane: {
        pre: {},
        code: {}
      }
    },

    // Controls (-> none)
    // ---------------
    controls: {
      prev: {
        display: 'none'
      },
      next: {
        display: 'none'
      }
    }
  };

  return deepAssign({}, theme, custom);
};