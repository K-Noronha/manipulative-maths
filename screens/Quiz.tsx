import React, {useState, useEffect, useRef} from 'react'
import {Button, TextInput, View, StyleSheet, SafeAreaView} from 'react-native'
import {vw} from 'react-native-expo-viewport-units'

import Frames from '../components/Frames'

type Result = {
    yourAnswer: number
    actualAnswer: number
}

const Quiz = ({navigation}) => {
    const [random_10, setRandom_10] = useState<number>(null)
    const [yourAnswer, onChangeAnswer] = useState<string>('')
    const [results, setResults] = useState<Result[]>([])

    const resultsRef = useRef(results)
    resultsRef.current = results

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Results', resultsRef)
        }, 60000)

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        setRandom_10(Math.floor(Math.random() * 10))
    }, [results])

    const handleSubmit = () => {
        onChangeAnswer('')
        setResults([
            ...results,
            {yourAnswer: Number(yourAnswer), actualAnswer: random_10},
        ])
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.tenFrame}>
                {[...Array(10).fill(true, 0, random_10)].map((counter, index) =>
                    Frames({counter, index})
                )}
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={(e) => onChangeAnswer(e)}
                    value={yourAnswer}
                    keyboardType={'number-pad'}
                />
                <Button title="Enter" onPress={() => handleSubmit()} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        flex: 1,
        justifyContent: 'space-around',
    },
    tenFrame: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: vw(85),
        alignSelf: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})

export default Quiz
