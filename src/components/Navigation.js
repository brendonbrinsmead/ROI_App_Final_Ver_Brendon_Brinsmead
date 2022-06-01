import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';
import PeopleList from './PeopleList';
import LandingPage from './LandingPage';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Welcome') {
            iconName = focused ? 'home' : 'home-outline';
          }
          if (route.name === 'People List') {
            iconName = focused ? 'person' : 'person-outline';
          }
          if (route.name === 'Add Person') {
            iconName = focused ? 'person-add' : 'person-add-outline';
          }
          if (route.name === 'Company List') {
            iconName = focused ? 'business' : 'business-outline';
          }

          return <Ionicons name={iconName} size={20} color={color} />;
        },
        tabBarActiveTintColor: '#941a1d',
        tabBarInactiveTintColor: '#595959',
      })}
      initialRouteName="Welcome"
      activeColor="#800000"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#cccccc'}}>
      <Tab.Screen name="Welcome" component={LandingPage} />
      <Tab.Screen name="People List" component={PeopleList} />
      <Tab.Screen name="Add Person" component={AddPerson} />
      <Tab.Screen name="Company List" component={CompanyList} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
