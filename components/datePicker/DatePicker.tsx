import React, { useEffect, useState } from 'react';
import {  View, Text, Platform, Alert, Pressable, StyleSheet } from 'react-native';
import * as Calendar from 'expo-calendar';
import { Expo } from '../../types';
import CalendarPicker from 'react-native-calendar-picker';

interface AgendaProps {
  expo: Expo;
}

interface EventDetails {
  title: string,
  startDate: Date,
  endDate: Date
}

const DatePicker = ({expo}: AgendaProps) => {

  const [selectedStartDate, setSelectedStartDate] = useState<any>();

  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
      }
    })();
  }, []);
  
  const getDefaultCalendarSource = async () => {
    const defaultCalendar = await Calendar.getDefaultCalendarAsync();
    console.log(defaultCalendar); 
    return defaultCalendar.id;
  }

  const addEvent = async (calendarId: string) => {

    const startEventDate: Date = new Date(selectedStartDate);
    const endEventDate: Date = new Date(selectedStartDate);
    startEventDate.setHours(10);
    endEventDate.setHours(18);

    let eventDetails: EventDetails = {
      title: "Expositie in het rijksmuseum " + expo.title,
      startDate: new Date(startEventDate),
      endDate: new Date(endEventDate)
    }

    const eventIdInCalendar = await Calendar.createEventAsync(calendarId, eventDetails);
    if(Platform.OS == 'android'){
      Calendar.openEventInCalendar(eventIdInCalendar);
    }
  }

  const addEventToCalendar = () => {
      getDefaultCalendarSource().then((calendarId) =>{
        if(calendarId !== undefined){
          try{
            addEvent(calendarId);
            Alert.alert("Toegevoegd aan je agenda!");
          } catch (e) {
            console.log(e)
          }
        } else {
          Alert.alert("Het is niet gelukt om dit event toe te voegen aan je agenda")
        }
      })
  }

  return(
    <View>
        <Text style={styles.expoTitle}>{expo.title}</Text>
        <CalendarPicker onDateChange={setSelectedStartDate} />
        <Text></Text>
        <Pressable
          onPress={addEventToCalendar}
        >
          {selectedStartDate ? <Text>Zet in agenda</Text> : <Text>Kies een datum</Text>}
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  expoTitle: {
    textTransform: 'uppercase'
  }
})

export default DatePicker;