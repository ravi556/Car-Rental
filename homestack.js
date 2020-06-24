import {createStackNavigator, HeaderTitle} from 'react-navigation-stack';
import {createAppContainer, NavigationContext,} from 'react-navigation';
import HomePage from './home';
import DetailsPage from './detailspage';
import LoginPage from './loginpage';
import SingupPage from './signuppage';
import OfferListPage from './offerlistpage';

const screens= {
    Home: {
        screen: HomePage,
        navigationOptions : {
            title: 'Car Rantel',
            headerShown: false
            
        }
        

    },
    offerlistpage: {
        screen: OfferListPage,
        navigationOptions : {
            title: 'Car List',
            //headerTintColor: '#ffffff',
            
            
        }

    },
    
    detailspage: {
        screen: DetailsPage,
        navigationOptions : {
            title: 'Car Detail',
        }

    },
    
    loginpage: {
        screen: LoginPage,
        navigationOptions : {
            title: 'Login',
        }
    },

    signuppage: {
        screen: SingupPage,
        navigationOptions : {
            title: 'Sign Up',
        }
    }


    
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        
        headerStyle: {backgroundColor:'#2d2d2d', }

    }
});

export default createAppContainer(HomeStack);