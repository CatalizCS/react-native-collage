import React from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";

const PEOPLE = [
  { name: { first: "Maeva", last: "Scott" } },
  { name: { first: "Maëlle", last: "Henry" } },
  { name: { first: "Mohamoud", last: "Faaij" } },
  { name: { first: "Mikkel", last: "Hansen" } },
  { name: { first: "Mikkel", last: "Bech" } },
];

const groupPeopleByLastName = (data = []) => {
  const grouped = data.reduce((acc, person) => {
    const key = person.name.last[0].toUpperCase();
    if (!acc[key]) acc[key] = { title: key, data: [] };
    acc[key].data.push(person);
    return acc;
  }, {});
  return Object.values(grouped).sort((a, b) => a.title.localeCompare(b.title));
};

export default function exercise_8() {
  return (
    <SectionList
      sections={groupPeopleByLastName(PEOPLE)}
      keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
      renderSectionHeader={({ section }) => (
        <View style={styles.sectionHeader}>
          <Text>{section.title}</Text>
        </View>
      )}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{`${item.name.first} ${item.name.last}`}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  item: {
    padding: 10,
  },
});
