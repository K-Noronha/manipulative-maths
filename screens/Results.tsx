import React from 'react'
import {
    Button,
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    ScrollView,
} from 'react-native'
import {vw, vh} from 'react-native-expo-viewport-units'
import ResultsTable from '../components/ResultsTable'

const Results = ({navigation, route}) => {
    const results = route.params.current
    const correct = results.filter(
        (ans) => ans.yourAnswer === ans.actualAnswer
    ).length

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.result}>
                You got {correct} out of {results.length} right!
            </Text>

            <ScrollView style={styles.table}>
                <View style={styles.row}>
                    <Text style={styles.column}>Actual Answer</Text>
                    <Text style={styles.column}>Your Answer</Text>
                    <Text style={styles.column}>Result</Text>
                </View>
                {results.map((result, index) =>
                    ResultsTable({...result, index})
                )}
            </ScrollView>

            <Button
                title="Restart"
                onPress={() => navigation.navigate('Start')}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        flex: 1,
        justifyContent: 'space-around',
    },
    result: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },

    table: {
        alignSelf: 'center',
        maxHeight: vh(80),
        overflow: 'scroll',
    },
    row: {
        width: vw(80),
        height: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    column: {
        textAlign: 'center',
        width: '30%',
        borderColor: 'black',
        borderWidth: 1,
        fontWeight: 'bold',
    },
})

export default Results
