<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React from "react";
>>>>>>> 609dd53 (13/8/2025 dharsan login page done in mongoDB)
=======
import React from "react";
>>>>>>> e0e050c5a224a2c62e7c3398cb2e4cc185839ea8
import { 
  View, 
  Text, 
  StyleSheet, 
<<<<<<< HEAD
<<<<<<< HEAD
  FlatList, 
  ActivityIndicator, 
  TouchableOpacity,
  ScrollView,
  Image
=======
  TouchableOpacity, 
  Image, 
  ScrollView 
>>>>>>> e0e050c5a224a2c62e7c3398cb2e4cc185839ea8
} from "react-native";

const SafetyScreen = ({ navigation }) => {
  const labs = [
    { 
      name: "Chemistry Lab", 
      screen: "Chemistry", 
      icon: require("../assets/flask.png"),
      overview: "Chemical storage and handling safety monitoring",
      ventilation: { status: "optimal", level: "92%", lastChecked: "2 mins ago" },
      hazards: ["Chemical exposure", "Flammable materials"]
    },
    { 
      name: "Physics Lab", 
      screen: "Physics", 
      icon: require("../assets/physics.png"),
      overview: "Radiation and equipment safety systems",
      ventilation: { status: "warning", level: "78%", lastChecked: "5 mins ago" },
      hazards: ["Radiation levels", "Laser safety"]
    },
    { 
      name: "Computer Lab", 
      screen: "Computer", 
      icon: require("../assets/computer.png"),
      overview: "Ergonomic and electrical safety monitoring",
      ventilation: { status: "optimal", level: "95%", lastChecked: "1 min ago" },
      hazards: ["Eye strain", "Posture alerts"]
    },
  ];

  const getVentilationColor = (status) => {
    switch(status.toLowerCase()) {
      case "optimal": return "#10b981";
      case "warning": return "#f59e0b";
      case "critical": return "#ef4444";
      default: return "#64748b";
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Lab Safety Monitoring</Text>
        <Text style={styles.subHeader}>Real-time ventilation and hazard status</Text>
      </View>

      <View style={styles.cardsContainer}>
        {labs.map((lab) => (
          <TouchableOpacity
            key={lab.name}
            style={styles.card}
            onPress={() => navigation.navigate(lab.screen)}
            activeOpacity={0.8}
          >
            <View style={styles.cardHeader}>
              <Image source={lab.icon} style={styles.icon} />
              <View>
                <Text style={styles.cardTitle}>{lab.name}</Text>
                <Text style={styles.cardSubtitle}>{lab.overview}</Text>
              </View>
            </View>
<<<<<<< HEAD
          }
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Image 
            source={require('../assets/no-data.png')} 
            style={styles.emptyImage}
          />
          <Text style={styles.emptyText}>
            No safety data available for {activeTab} lab
          </Text>
          <Text style={styles.emptySubText}>
            Check back later or contact lab administrator
          </Text>
        </View>
      )}
    </View>
=======
  TouchableOpacity, 
  Image, 
  ScrollView 
} from "react-native";

const SafetyScreen = ({ navigation }) => {
  const labs = [
    { 
      name: "Chemistry Lab", 
      screen: "Chemistry", 
      icon: require("../assets/flask.png"),
      overview: "Chemical storage and handling safety monitoring",
      ventilation: { status: "optimal", level: "92%", lastChecked: "2 mins ago" },
      hazards: ["Chemical exposure", "Flammable materials"]
    },
    { 
      name: "Physics Lab", 
      screen: "Physics", 
      icon: require("../assets/physics.png"),
      overview: "Radiation and equipment safety systems",
      ventilation: { status: "warning", level: "78%", lastChecked: "5 mins ago" },
      hazards: ["Radiation levels", "Laser safety"]
    },
    { 
      name: "Computer Lab", 
      screen: "Computer", 
      icon: require("../assets/computer.png"),
      overview: "Ergonomic and electrical safety monitoring",
      ventilation: { status: "optimal", level: "95%", lastChecked: "1 min ago" },
      hazards: ["Eye strain", "Posture alerts"]
    },
  ];

  const getVentilationColor = (status) => {
    switch(status.toLowerCase()) {
      case "optimal": return "#10b981";
      case "warning": return "#f59e0b";
      case "critical": return "#ef4444";
      default: return "#64748b";
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Lab Safety Monitoring</Text>
        <Text style={styles.subHeader}>Real-time ventilation and hazard status</Text>
      </View>

      <View style={styles.cardsContainer}>
        {labs.map((lab) => (
          <TouchableOpacity
            key={lab.name}
            style={styles.card}
            onPress={() => navigation.navigate(lab.screen)}
            activeOpacity={0.8}
          >
            <View style={styles.cardHeader}>
              <Image source={lab.icon} style={styles.icon} />
              <View>
                <Text style={styles.cardTitle}>{lab.name}</Text>
                <Text style={styles.cardSubtitle}>{lab.overview}</Text>
              </View>
            </View>
=======
>>>>>>> e0e050c5a224a2c62e7c3398cb2e4cc185839ea8
            
            {/* Ventilation Status Bar */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>VENTILATION STATUS</Text>
              <View style={styles.ventilationContainer}>
                <View style={[
                  styles.ventilationPill,
                  { backgroundColor: getVentilationColor(lab.ventilation.status) }
                ]}>
                  <Text style={styles.ventilationText}>{lab.ventilation.status.toUpperCase()}</Text>
                </View>
                <Text style={styles.ventilationLevel}>{lab.ventilation.level} efficiency</Text>
                <Text style={styles.ventilationTime}>Updated {lab.ventilation.lastChecked}</Text>
              </View>
            </View>
            
            {/* Hazards List */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>ACTIVE HAZARDS</Text>
              <View style={styles.hazardsContainer}>
                {lab.hazards.map((hazard, index) => (
                  <View key={index} style={styles.hazardPill}>
                    <Text style={styles.hazardText}>{hazard}</Text>
                  </View>
                ))}
              </View>
            </View>
            
            <View style={styles.cardFooter}>
              <Text style={styles.viewDetails}>View Full Safety Report →</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.safetyNotice}>
        <Text style={styles.noticeTitle}>VENTILATION PROTOCOLS</Text>
        <Text style={styles.noticeText}>
          Maintain minimum 80% ventilation efficiency. Immediate action required if below 60%.
        </Text>
      </View>
    </ScrollView>
<<<<<<< HEAD
>>>>>>> 609dd53 (13/8/2025 dharsan login page done in mongoDB)
=======
>>>>>>> e0e050c5a224a2c62e7c3398cb2e4cc185839ea8
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
<<<<<<< HEAD
    backgroundColor: "#f5f7fa",
=======
    backgroundColor: "#f8fafc",
>>>>>>> e0e050c5a224a2c62e7c3398cb2e4cc185839ea8
  },
  headerContainer: {
    padding: 24,
    paddingBottom: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    marginTop: 15,
    paddingTop: 30,
    borderBottomColor: "#e2e8f0",
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1e293b",
    textAlign: "center",
    marginBottom: 4,
  },
  subHeader: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
  },
<<<<<<< HEAD
  tabContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  tabButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 22,
    marginRight: 10,
    borderRadius: 25,
    backgroundColor: "#ecf0f1",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  activeTab: {
    backgroundColor: "#3498db",
    shadowColor: "#3498db",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  tabIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    tintColor: "#7f8c8d",
  },
  activeTabIcon: {
    tintColor: "#fff",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#7f8c8d",
  },
  activeTabText: {
    color: "#fff",
  },
  listContent: {
    padding: 15,
    paddingBottom: 25,
  },
  sectionHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    paddingHorizontal: 5,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2c3e50",
  },
  statusLegend: {
    flexDirection: "row",
  },
  legendItem: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginLeft: 8,
  },
  legendText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "bold",
=======
    backgroundColor: "#f8fafc",
  },
  headerContainer: {
    padding: 24,
    paddingBottom: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    marginTop: 15,
    paddingTop: 30,
    borderBottomColor: "#e2e8f0",
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1e293b",
    textAlign: "center",
    marginBottom: 4,
  },
  subHeader: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
  },
  cardsContainer: {
    padding: 16,
>>>>>>> 609dd53 (13/8/2025 dharsan login page done in mongoDB)
=======
  cardsContainer: {
    padding: 16,
>>>>>>> e0e050c5a224a2c62e7c3398cb2e4cc185839ea8
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
<<<<<<< HEAD
<<<<<<< HEAD
    padding: 18,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
=======
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
>>>>>>> 609dd53 (13/8/2025 dharsan login page done in mongoDB)
=======
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
>>>>>>> e0e050c5a224a2c62e7c3398cb2e4cc185839ea8
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
<<<<<<< HEAD
<<<<<<< HEAD
    justifyContent: "space-between",
=======
>>>>>>> e0e050c5a224a2c62e7c3398cb2e4cc185839ea8
    alignItems: "center",
    marginBottom: 16,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 12,
    tintColor: "#3b82f6",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1e293b",
  },
  cardSubtitle: {
    fontSize: 13,
    color: "#64748b",
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "600",
    color: "#64748b",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  ventilationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ventilationPill: {
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  ventilationText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  ventilationLevel: {
    fontSize: 14,
    color: "#1e293b",
    marginRight: 10,
  },
  ventilationTime: {
    fontSize: 12,
    color: "#94a3b8",
  },
  hazardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  hazardPill: {
    backgroundColor: "#f1f5f9",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 8,
    marginBottom: 8,
  },
  hazardText: {
    fontSize: 12,
    color: "#475569",
  },
  cardFooter: {
    borderTopWidth: 1,
    borderTopColor: "#f1f5f9",
    paddingTop: 12,
  },
  viewDetails: {
    fontSize: 14,
<<<<<<< HEAD
    color: "#bdc3c7",
    textAlign: "center",
=======
    alignItems: "center",
    marginBottom: 16,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 12,
    tintColor: "#3b82f6",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1e293b",
  },
  cardSubtitle: {
    fontSize: 13,
    color: "#64748b",
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "600",
    color: "#64748b",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  ventilationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ventilationPill: {
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  ventilationText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  ventilationLevel: {
    fontSize: 14,
    color: "#1e293b",
    marginRight: 10,
  },
  ventilationTime: {
    fontSize: 12,
    color: "#94a3b8",
  },
  hazardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  hazardPill: {
    backgroundColor: "#f1f5f9",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 8,
    marginBottom: 8,
  },
  hazardText: {
    fontSize: 12,
    color: "#475569",
  },
  cardFooter: {
    borderTopWidth: 1,
    borderTopColor: "#f1f5f9",
    paddingTop: 12,
  },
  viewDetails: {
    fontSize: 14,
=======
>>>>>>> e0e050c5a224a2c62e7c3398cb2e4cc185839ea8
    fontWeight: "500",
    color: "#3b82f6",
    textAlign: "right",
  },
  safetyNotice: {
    backgroundColor: "#ecfdf5",
    margin: 16,
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#10b981",
  },
  noticeTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#065f46",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  noticeText: {
    fontSize: 14,
    color: "#065f46",
    lineHeight: 20,
<<<<<<< HEAD
>>>>>>> 609dd53 (13/8/2025 dharsan login page done in mongoDB)
=======
>>>>>>> e0e050c5a224a2c62e7c3398cb2e4cc185839ea8
  },
});

export default SafetyScreen;