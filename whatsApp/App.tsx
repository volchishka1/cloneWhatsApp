import React from 'react';
import {Text, View} from 'react-native';
import {Conversations} from './src/components/conversations/Conversations';
import {Stories} from './src/components/Stories';
import {Header} from "./src/components/Header";

export const App = () => {

    return (
        <View>
            <View>
                <>
                    <Header/>
                    <Stories/>
                    <Conversations/>
                    {/*<Logout/>*/}
                    {/*<Footer/>*/}
                </>
            </View>
            <Text>Hello everybody</Text>
        </View>
    )
};


