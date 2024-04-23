// app base 
/* import React, { Fragment } from "react";
import { SafeAreaView, Text, StatusBar } from "react-native";

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Teste</Text>
      </SafeAreaView>
    </Fragment>
  );
};

export default App; */


// um para este
/* import { createStackNavigator, createAppContainer } from "react-navigation";
import App from './App';
import Sobre from "./Sobre";

const Routes = createStackNavigator({
  Home: {
    screen: App,
  },
  Sobre: {
    screen: Sobre,
  },
});

export default createAppContainer(Routes); */

//editar o index 
/*  import { AppRegistry } from "react-native";
import Routes from "./Routes";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => Routes); */

//arquivo sobre
/* import React, { Fragment } from "react";
import { SafeAreaView, Text, StatusBar } from "react-native";

const Sobre = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Sobre</Text>
      </SafeAreaView>
    </Fragment>
  );
};

export default Sobre; */

// alterar no app 
/* import React, { Fragment } from 'react';
import { SafeAreaView, Text, StatusBar, Button } from 'react-native';

const App = ({ navigation }) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>App</Text>

        <Button title="Sobre" onPress={() => navigation.navigate("Sobre")} />
      </SafeAreaView>
    </Fragment>
  );
};

export default App; */