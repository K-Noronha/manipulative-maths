import React from 'react'
import {View, StyleSheet} from 'react-native'
import {vw} from 'react-native-expo-viewport-units'

type Frame = {
    counter: true | undefined
    index: number
}

const Frames = ({counter, index}: Frame) => (
    <View style={styles.frame} key={index}>
        {counter && <View style={styles.counter} />}
    </View>
)

const styles = StyleSheet.create({
    frame: {
        width: vw(15),
        height: vw(15),
        margin: vw(1),
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    counter: {
        width: vw(10),
        height: vw(10),
        borderRadius: 9999,
        backgroundColor: 'red',
    },
})

export default Frames
