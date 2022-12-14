import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Platform, StatusBar, Alert, Button } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import * as Calendar from "expo-calendar";

const Agenda = () => {

    const [selectedStartDate, setSelectedStartDate] = useState<any>();
    const startDate: Date = selectedStartDate ? selectedStartDate.format('YYYY-MM-DD').toString() : '';

    useEffect(() => {
        (async () => {
          const { status } = await Calendar.requestCalendarPermissionsAsync();
          if (status === 'granted') {
            const calendars = await Calendar.getCalendarsAsync(
              Calendar.EntityTypes.EVENT
            );
            console.log('Here are all your calendars:');
            console.log({ calendars });
          }
        })();
      }, []);

    const getDefaultCalendarSource = async () => {
        const calendars = await Calendar.getCalendarsAsync(
          Calendar.EntityTypes.EVENT
        );
        const defaultCalendars = calendars.filter(
          (each) => each.source.name === 'Default'
        );
        return defaultCalendars.length
          ? defaultCalendars[0].source
          : calendars[0].source;
      }
      
    const createCalendar = async () => {
        const defaultCalendarSource =
          Platform.OS === 'ios'
            ? await getDefaultCalendarSource()
            : { isLocalAccount: true, name: 'Expo Calendar' };
    
            console.log("This is the default calendarsource")
            console.log(defaultCalendarSource);
        
          const newCalendarID = await Calendar.createCalendarAsync({
          title: 'Expo Calendar',
          color: 'blue',
          entityType: Calendar.EntityTypes.EVENT,
          sourceId: defaultCalendarSource.id,
          source: defaultCalendarSource,
          name: 'internalCalendarName',
          ownerAccount: 'personal',
          accessLevel: Calendar.CalendarAccessLevel.OWNER,
        });
        console.log(`Your new calendar ID is: ${newCalendarID}`);
        return newCalendarID;
      }

    const addNewEvent = async () => {
        try {
          const calendarId = await createCalendar();
          const res = await Calendar.createEventAsync(calendarId, {
            endDate: selectedStartDate,
            startDate: selectedStartDate,
            title: 'Expo 1',
          });
          Alert.alert('event created')
        } catch (e) {
          console.log(e);
        }
    };
      
    return(
        <View>
            <CalendarPicker onDateChange={setSelectedStartDate} />
            <Text style={styles.dateText}>Expositie: {startDate.toString()}</Text>
            <Button title={"Voeg toe aan kalender"} onPress={addNewEvent} />
        </View>
    )
}

const styles = StyleSheet.create({
    dateText: {
        textAlign: "center"
    }
})

export default Agenda;

