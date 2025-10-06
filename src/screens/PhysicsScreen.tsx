import React from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function PhysicsScreen() {
  const parameters = [
    { label: "Radiation Level", value: "0.05 μSv", status: "Safe" },
    { label: "Laser Intensity", value: "Class 3B", status: "Caution" },
    { label: "EM Field", value: "2.1 mG", status: "Safe" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />

      <ScrollView style={styles.scrollView}>
        {parameters.map((p, i) => (
          <View key={i} style={styles.card}>
            <View style={styles.cardTop}>
              <Icon name="bolt" size={24} color="#000000" />
              <Text style={styles.param}>{p.label}</Text>
            </View>
            <Text style={styles.value}>{p.value}</Text>
            <Text
              style={[
                styles.status,
                { color: p.status === "Safe" ? "#000000" : "#666666" },
              ]}
            >
              {p.status}
            </Text>
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
  cardTop: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  param: { marginLeft: 10, fontSize: 16, fontWeight: "600", color: "#000000" },
  value: { fontSize: 15, color: "#666666", marginBottom: 6 },
  status: { fontWeight: "600" },
});