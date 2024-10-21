import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import PersonList from './src/screens/home';
import Store from './src/redux/store';

const store = Store();  

const App = () => (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <PersonList />
      </SafeAreaView>
    </Provider>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      paddingHorizontal: 20,
    },
});

export default App;
