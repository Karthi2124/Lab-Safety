import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function StudentActivityScreen() {
  const [activities, setActivities] = useState([
    { id: 1, name: "Ravi Kumar", activity: "Completed Acid-Base Titration", liked: false },
    { id: 2, name: "Sneha R", activity: "Analyzed circuit output", liked: false },
    { id: 3, name: "Arjun S", activity: "Worked on heat transfer model", liked: true },
  ]);

  const toggleLike = (id: number) => {
    setActivities((prev) =>
      prev.map((a) => (a.id === id ? { ...a, liked: !a.liked } : a))
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />

      <ScrollView style={styles.scrollView}>
        {activities.map((a) => (
          <View key={a.id} style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{a.name}</Text>
              <Text style={styles.activity}>{a.activity}</Text>
            </View>
            <TouchableOpacity onPress={() => toggleLike(a.id)}>
              <Icon
                name={a.liked ? "favorite" : "favorite-border"}
                size={28}
                color={a.liked ? "#000000" : "#666666"}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  header: { backgroundColor: "#000000", padding: 20 },
  headerTitle: { color: "#fff", fontSize: 22, fontWeight: "700" },
  scrollView: { padding: 16 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  name: { fontSize: 16, fontWeight: "600", color: "#000000" },
  activity: { fontSize: 14, color: "#666666" },
});