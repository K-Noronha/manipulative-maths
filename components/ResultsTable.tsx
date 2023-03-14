import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {vw} from 'react-native-expo-viewport-units'

type Result = {
    yourAnswer: number
    actualAnswer: number
    index: number
}

const ResultsTable = ({yourAnswer, actualAnswer, index}: Result) => (
    <View style={styles.row} key={index}>
        <Text style={styles.column}>{actualAnswer}</Text>
        <Text style={styles.column}>{yourAnswer}</Text>
        <Text style={styles.column}>
            {actualAnswer === yourAnswer ? 'Correct' : 'Wrong'}
        </Text>
    </View>
)

const styles = StyleSheet.create({
    row: {
        width: vw(80),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    column: {
        textAlign: 'center',
        padding: vw(1),
        width: '30%',
        borderColor: 'black',
        borderWidth: 1,
    },
})

export default ResultsTable
