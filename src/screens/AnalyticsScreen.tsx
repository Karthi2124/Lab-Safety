import React from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function AnalyticsScreen() {
  const metrics = [
    { label: "Attendance Rate", value: "93%", icon: "groups" },
    { label: "Experiment Completion", value: "85%", icon: "science" },
    { label: "Average Score", value: "78%", icon: "show-chart" },
  ];

  const trends = [
    { week: "Week 1", value: 80 },
    { week: "Week 2", value: 85 },
    { week: "Week 3", value: 90 },
    { week: "Week 4", value: 78 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#19183B" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Analytics</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.metricsContainer}>
          {metrics.map((m, i) => (
            <View key={i} style={styles.metricCard}>
              <Icon name={m.icon} size={26} color="#19183B" />
              <Text style={styles.metricValue}>{m.value}</Text>
              <Text style={styles.metricLabel}>{m.label}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Weekly Performance</Text>
        {trends.map((t, i) => (
          <View key={i} style={styles.trendRow}>
            <Text style={styles.trendWeek}>{t.week}</Text>
            <View style={styles.barContainer}>
              <View style={[styles.bar, { width: `${t.value}%` }]} />
            </View>
            <Text style={styles.trendValue}>{t.value}%</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E7F2EF" },
  header: { backgroundColor: "#19183B", padding: 20 },
  headerTitle: { color: "#fff", fontSize: 22, fontWeight: "700" },
  scrollView: { padding: 16 },
  sectionTitle: { fontSize: 18, color: "#19183B", fontWeight: "600", marginVertical: 10 },
  metricsContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 16 },
  metricCard: {
    backgroundColor: "#fff",
    flex: 1,
    marginHorizontal: 5,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  metricValue: { fontSize: 20, fontWeight: "700", color: "#19183B" },
  metricLabel: { fontSize: 13, color: "#708993" },
  trendRow: { flexDirection: "row", alignItems: "center", marginVertical: 6 },
  trendWeek: { width: 80, fontSize: 14, color: "#19183B" },
  barContainer: {
    flex: 1,
    height: 10,
    backgroundColor: "#A1C2BD55",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  bar: { height: 10, borderRadius: 10, backgroundColor: "#A1C2BD" },
  trendValue: { width: 40, textAlign: "right", color: "#708993" },
});
