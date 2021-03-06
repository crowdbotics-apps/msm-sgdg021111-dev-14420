import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignupScreen113663Navigator from "../features/SignupScreen113663/navigator";
/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion

    /** new navigators can be added here */
    SignupScreen113663: { screen: SignupScreen113663Navigator }
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
