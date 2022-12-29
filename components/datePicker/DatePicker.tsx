import React, { useEffect, useState } from 'react';
import {  View, Text, Platform, Alert, Pressable, StyleSheet, Linking } from 'react-native';
import * as Calendar from 'expo-calendar';
import { AgendaProps, EventDetails } from '../../types';
import CalendarPicker from 'react-native-calendar-picker';

const DatePicker = ({ expo }: AgendaProps) => {

  const [selectedStartDate, setSelectedStartDate] = useState<any>();
  const [calendars, setCalendars] = useState<Calendar.Calendar[]>([]);

  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        setCalendars(await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT));
      } else if (status === 'denied') {
        Linking.openSettings();
      }
    })();
  }, []);

  const getDefaultCalendarSource = async () => {
    const defaultCalendars = calendars.filter(
      (each) => each.source.name === 'Default'
    );
    return defaultCalendars.length
      ? defaultCalendars[0].source
      : calendars[0].source;
  }

  const getDefaultCalendarId = async () => {
    if (Platform.OS === 'ios') {
      const defaultCalendar = await Calendar.getDefaultCalendarAsync();
      if (defaultCalendar !== undefined) {
        return defaultCalendar.id;
      }
    } else {
      const calendarId: Calendar.Calendar | undefined = calendars.find(e => e.source.name === 'Expo Calendar');
      if (calendarId == undefined) {
        try {
          const calendarId: string = await createCalendar();
          return calendarId;
        } catch (e) {
          console.log(e);
          Alert.alert('Het is niet gelukt het event toe te voegen aan je agenda')
        }
      } else {
        return calendarId.id;
      }
    }
  }

  const createCalendar = async () => {
    const defaultCalendarSource: Calendar.Source =
      Platform.OS === 'ios'
        ? await getDefaultCalendarSource()
        : { isLocalAccount: true, type: 'Expo Calendar', name: 'Expo Calendar' };

    console.log('default calendar Source');
    console.log(defaultCalendarSource);

    const newCalendarID = await Calendar.createCalendarAsync({
      title: 'Expo Calendar',
      color: 'blue',
      entityType: Calendar.EntityTypes.EVENT,
      source: defaultCalendarSource,
      name: 'internalCalendarName',
      ownerAccount: 'personal',
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });

    console.log(`Your new calendar ID is: ${newCalendarID}`);
    const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
    console.log(calendars);

    return newCalendarID;
  }

  const addEventToCalendar = async (calendarId: string) => {
    const startEventDate: Date = new Date(selectedStartDate);
    const endEventDate: Date = new Date(selectedStartDate);
    startEventDate.setHours(9);
    endEventDate.setHours(17);

    let eventDetails: EventDetails = {
      title: "Expositie in het rijksmuseum " + expo.title,
      startDate: new Date(startEventDate),
      endDate: new Date(endEventDate)
    }

    const eventIdInCalendar = await Calendar.createEventAsync(calendarId, eventDetails);
    if (Platform.OS == 'android') {
      Calendar.openEventInCalendar(eventIdInCalendar);
    }
  }

  const addEvent = () => {
    getDefaultCalendarId().then((calendarId) => {
      if (calendarId !== undefined) {
        try {
          addEventToCalendar(calendarId);
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
    <View style={styles.container}>
        <CalendarPicker onDateChange={setSelectedStartDate} />
        <Pressable
          style={styles.addToAgenda}
          onPress={addEvent}
        >
          {selectedStartDate ? <Text style={styles.addToAgendaText}>Zet in agenda</Text> : <Text style={styles.addToAgendaText}>Kies een datum</Text>}
        </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 20,
    alignItems: 'center'
  },
  addToAgenda: {
    marginTop: 20,
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 10
  },
  addToAgendaText: {
      color: 'white'
  }
})


export default DatePicker;