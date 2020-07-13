import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth18801Navigator from '../features/EmailAuth18801/navigator';
import BlankScreen28781Navigator from '../features/BlankScreen28781/navigator';
import BlankScreen18780Navigator from '../features/BlankScreen18780/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
EmailAuth18801: { screen: EmailAuth18801Navigator },
BlankScreen28781: { screen: BlankScreen28781Navigator },
BlankScreen18780: { screen: BlankScreen18780Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
