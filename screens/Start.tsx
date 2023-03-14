import React from 'react'
import {Button, View, StyleSheet, SafeAreaView} from 'react-native'

const Start = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Button
                    title="Start"
                    onPress={() => navigation.navigate('Quiz')}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
})

export default Start
