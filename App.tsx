import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Start from './screens/Start'
import Results from './screens/Results'
import Quiz from './screens/Quiz'

const Stack = createNativeStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Start" component={Start} />
                <Stack.Screen name="Quiz" component={Quiz} />
                <Stack.Screen name="Results" component={Results} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
