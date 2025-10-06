import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function ChemistryScreen() {
  const chemicals = [
    { name: "Hydrochloric Acid", quantity: "2L", status: "Available" },
    { name: "Ethanol", quantity: "1L", status: "Low Stock" },
    { name: "Sodium Hydroxide", quantity: "3L", status: "Available" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <ScrollView style={styles.scrollView}>
        {chemicals.map((item, index) => (
          <View key={index} style={styles.card}>
            <Icon name="science" size={24} color="#000000" />
            <View style={styles.cardText}>
              <Text style={styles.chemicalName}>{item.name}</Text>
              <Text style={styles.detail}>{item.quantity}</Text>
              <Text
                style={[
                  styles.status,
                  { color: item.status === "Available" ? "#000000" : "#666666" },
                ]}
              >
                {item.status}
              </Text>
            </View>
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
    marginBottom: 12,
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  cardText: { marginLeft: 12 },
  chemicalName: { fontSize: 16, fontWeight: "600", color: "#000000" },
  detail: { fontSize: 14, color: "#666666" },
  status: { marginTop: 4, fontSize: 13, fontWeight: "500" },
});