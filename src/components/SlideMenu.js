import React from 'react'
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Touchable
} from 'react-native'
import { navigate } from "../navigationRef";

const SideMenu = ({ header, imagePath1, imagePath2, imagePath3, name1, name2, name3 }) => {

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
                <TouchableOpacity
                    onPress = {() => navigate("Map")}
                >
                    <View style = { styles.view }>
                        <Image
                            style={styles.image}
                            source={{ uri: `${imagePath1}` }}
                        />

                        <Text style={styles.text}>
                            {name1}
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.view}>
                        <Image
                            style={styles.image}
                            source={{ uri: `${imagePath2}` }}

                            />
                        <Text style={styles.text}>
                            {name2}
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity

                >
                    <View style={styles.view}>
                        <Image
                            style = {styles.image}
                            source={{ uri: `${imagePath3}` }}
                        />
                        <Text style = {styles.text}>
                            {name3}
                        </Text>
                    </View>
                </TouchableOpacity>

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
        color: 'white',
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