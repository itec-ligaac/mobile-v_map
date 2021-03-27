import React from 'react';
import { StyleSheet, Text, LogBox, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import SlideMenu from '../components/SlideMenu'

const MasterList = () => {
    return (
        <ScrollView
            vertical
            style = {{ paddingBottom : 100 }}
            showsHorizontalScrollIndicator={false}
        >
            <SlideMenu
                header='For you'
                imagePath1='https://lh5.googleusercontent.com/p/AF1QipP9GkxnWpm35-Hx-jxwFkbg8wxUW3rqJcHvAq6q=w426-h240-k-no'
                imagePath2='https://lh5.googleusercontent.com/p/AF1QipO6yV7dk5tZOjt9lRLRF9emWfghxjq0BcWa6N4-=w427-h240-k-no'
                imagePath3='https://lh5.googleusercontent.com/p/AF1QipO4ng-Oon3K077DOtBZ34zyzEoKMKeaChIAs5FZ=w408-h270-k-no'
                name1='Burghria Tomis'
                name2='Restaurant Toscana'
                name3='Alta locatie XD'
            />

            <SlideMenu
                header='Popular in the city'
                imagePath1='https://lh5.googleusercontent.com/p/AF1QipOQLJjV93u2oNrKTB0Pt3pwFFk8Fn-zwO8adM5h=w426-h240-k-no'
                imagePath2='https://lh5.googleusercontent.com/p/AF1QipNLcazoL6OaefYLWhf2aFabwpHY98mBEfLSXxjc=w408-h306-k-no'
                imagePath3='https://lh5.googleusercontent.com/p/AF1QipO75clLGH3lzRsn0Rek7qxle5f2pzChogudSBjN=w408-h305-k-no'
                name1='Cazino Constanta'
                name2='Muzeul de Istorie Națională'
                name3='Portul Turistic Tomis'
            />
        </ScrollView>
    )
}

export default MasterList;