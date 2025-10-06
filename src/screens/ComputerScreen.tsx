import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function ComputerScreen() {
  const systems = [
    { name: "System 01", status: "Active", software: "Python, VSCode" },
    { name: "System 02", status: "Idle", software: "MATLAB, Eclipse" },
    { name: "System 03", status: "Under Maintenance", software: "C++, IntelliJ" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      
      <ScrollView style={styles.scrollView}>
        {systems.map((sys, i) => (
          <View key={i} style={styles.card}>
            <View style={styles.cardTop}>
              <Icon name="computer" size={26} color="#000000" />
              <Text style={styles.title}>{sys.name}</Text>
            </View>
            <Text style={styles.detail}>{sys.software}</Text>
            <Text
              style={[
                styles.status,
                {
                  color:
                    sys.status === "Active"
                      ? "#000000"
                      : sys.status === "Idle"
                      ? "#666666"
                      : "#999999",
                },
              ]}
            >
              {sys.status}
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
  title: { marginLeft: 10, fontSize: 16, fontWeight: "600", color: "#000000" },
  detail: { fontSize: 14, color: "#666666", marginBottom: 5 },
  status: { fontWeight: "600" },
});