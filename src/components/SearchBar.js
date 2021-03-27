import React from 'react'
import {
    View,
    TextInput,
    StyleSheet,
} from 'react-native'

const SearchBar = () => {
    return (
        <TextInput
            style={styles.searchBar}
            placeholder='Search'
        />

    )
}

const styles = StyleSheet.create({
    searchBar: {
        paddingHorizontal: 20,
        alignItems: 'center',
        color: 'white',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 15,

    }
})

export default SearchBar;
