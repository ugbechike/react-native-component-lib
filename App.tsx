import { getStorybookUI, configure } from '@storybook/react-native';

// import stories
configure(() => {
  // import file manually
  require('./storybook');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

export default StorybookUIRoot;
