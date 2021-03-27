import React from 'react'
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
} from 'react-native'

const SideMenu = ({ header, imagePath1, imagePath2, imagePath3 }) => {

    const img1 = imagePath1

    return (
        <View>
            <Text style = {styles.title}>
                {header}
            </Text>

            <ScrollView 
                horizontal
                style = {styles.scrollView}
                showsHorizontalScrollIndicator = {false}
            >
                <View style = { styles.view }>
                    <Image
                        style={styles.image}
                        source={{ uri : `${imagePath1}` }}
                    />

                    <Text style={styles.text}>
                        Burgheria Tomis
                    </Text>
                </View>

                <View style={styles.view}>
                    <Image
                        style={styles.image}
                        source={{ uri: imagePath2 }}

                        />
                    <Text style={styles.text}>
                        Burgheria Tomis
                    </Text>
                </View>

                <View style={styles.view}>
                    <Image
                        style = {styles.image}
                        source={{ uri: imagePath3 }}
                    />
                    <Text style = {styles.text}>
                        Burgheria Tomis
                    </Text>
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollView : {
        backgroundColor: 'white',
        marginHorizontal: 20,
    },

    view : {
        width: 350,
        height: 250,
        paddingTop: 10,
        backgroundColor: '#152F5A',
        marginHorizontal : 8,
        alignItems : 'center',
        borderRadius : 25
    }, 

    image : {
        width: 300,
        height: 200,
        resizeMode: 'stretch',
    },

    text : {
        paddingTop : 5,
        fontSize: 20, 
        color: '#ED7A00',
        fontWeight : 'bold'
    },

    title : {
        fontSize : 25,
        paddingLeft : 10,
        paddingBottom : 10,
        fontWeight : 'bold'
    }
})

export default SideMenu;