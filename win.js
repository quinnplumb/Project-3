import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Win = ({ navigation, route }) => {

    const win_image = {
        uri: 'https://moviemarker.co.uk/wp-content/uploads/jbw007-James_Bond_1_high_jpg-03.jpg',
        width: 1072,
        height: 712
      };

return (
    <View>
        <Image source = {win_image} />
        <Text style={styles.item}>You Win!</Text>
        <TouchableOpacity onPress {() => navigation.navigate()}>
            <Text style={styles.item}>Play again</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
     paddingTop: 50
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 54,
    },
    border: {
      borderWidth: 1,
      borderColor: "gray",
    }
  });  

export default Win;