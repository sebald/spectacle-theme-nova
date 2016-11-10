import 'normalize.css';
import './index.css';
import screen from './screen';
import print from 'spectacle/lib/themes/default/print';

/**
 * Create the theme.
 */
const createTheme = (name, custom) => ({
  screen: screen(name, custom),
  print: print()
});

export default createTheme;