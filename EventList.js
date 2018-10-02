import React from 'react';
import { FlatList, Text } from 'react-native';

import EventCard from './EventCard'

class EventList extends React.Component {
    state = { 
        events: [] //default state
    }

    componentDidMount(){
        const events = require('./db.json').events;
        this.setState({events});
    }

    render() {
        return (
            <FlatList 
                data={this.state.events}
                renderItem={({item}) => <EventCard event={item}/>}
                keyExtractor={item => item.id} 
            />
        )
    }
}

export default EventList;

