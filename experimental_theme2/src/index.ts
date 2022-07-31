import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the experimental-theme2 extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'experimental-theme2:plugin',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension experimental-theme2 is activated!');
    const style = 'experimental-theme2/index.css';

    manager.register({
      name: 'experimental-theme2',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
