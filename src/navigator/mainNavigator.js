import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen78808Navigator from '../features/BlankScreen78808/navigator';
import BlankScreen68807Navigator from '../features/BlankScreen68807/navigator';
import Messaging58806Navigator from '../features/Messaging58806/navigator';
import CalendarView28803Navigator from '../features/CalendarView28803/navigator';
import EmailAuth18801Navigator from '../features/EmailAuth18801/navigator';
import BlankScreen28781Navigator from '../features/BlankScreen28781/navigator';
import BlankScreen18780Navigator from '../features/BlankScreen18780/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen78808: { screen: BlankScreen78808Navigator },
BlankScreen68807: { screen: BlankScreen68807Navigator },
Messaging58806: { screen: Messaging58806Navigator },
CalendarView28803: { screen: CalendarView28803Navigator },
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
