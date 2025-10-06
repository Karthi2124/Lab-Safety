import React from "react";
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
import { useNavigation } from "@react-navigation/native";

export default function LabsScreen() {
  const navigation = useNavigation();

  const labs = [
    {
      name: "Chemistry Lab",
      icon: "science",
      description: "Chemical experiments and inventory management",
      screen: "ChemistryLab",
      equipment: "12 items",
      status: "Active",
    },
    {
      name: "Physics Lab",
      icon: "bolt",
      description: "Physical parameters and measurements",
      screen: "PhysicsLab",
      equipment: "8 items", 
      status: "Active",
    },
    {
      name: "Computer Lab",
      icon: "computer",
      description: "System status and software management",
      screen: "ComputerLab",
      equipment: "25 systems",
      status: "Active",
    },
  ];

  const navigateToLab = (screen: string) => {
    navigation.navigate("Tabs", {
      screen: "Dashboard",
      params: { screen },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      
      {/* REMOVED: Custom Header */}
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.headerSection}>
          <Text style={styles.sectionTitle}>Laboratory Management</Text>
          <Text style={styles.sectionSubtitle}>
            Monitor and manage all laboratory facilities
          </Text>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <View style={styles.statIconContainer}>
              <Icon name="science" size={24} color="#000000" />
            </View>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Active Labs</Text>
          </View>
          <View style={styles.statCard}>
            <View style={styles.statIconContainer}>
              <Icon name="devices" size={24} color="#000000" />
            </View>
            <Text style={styles.statValue}>45</Text>
            <Text style={styles.statLabel}>Equipment</Text>
          </View>
          <View style={styles.statCard}>
            <View style={styles.statIconContainer}>
              <Icon name="groups" size={24} color="#000000" />
            </View>
            <Text style={styles.statValue}>76</Text>
            <Text style={styles.statLabel}>Students</Text>
          </View>
        </View>

        <Text style={styles.labsTitle}>Available Laboratories</Text>
        
        {labs.map((lab, index) => (
          <TouchableOpacity
            key={index}
            style={styles.labCard}
            onPress={() => navigateToLab(lab.screen)}
          >
            <View style={styles.labHeader}>
              <View style={styles.iconContainer}>
                <Icon name={lab.icon} size={24} color="#000000" />
              </View>
              <View style={styles.labInfo}>
                <Text style={styles.labName}>{lab.name}</Text>
                <Text style={styles.labStatus}>{lab.status}</Text>
              </View>
              <Icon name="chevron-right" size={20} color="#666666" />
            </View>
            <Text style={styles.labDescription}>{lab.description}</Text>
            <View style={styles.labFooter}>
              <View style={styles.equipmentInfo}>
                <Icon name="inventory" size={16} color="#666666" />
                <Text style={styles.equipmentText}>{lab.equipment}</Text>
              </View>
              <View style={[styles.statusBadge, styles.activeBadge]}>
                <Text style={styles.statusText}>Active</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#FFFFFF" 
  },
  scrollView: { 
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  headerSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: "#666666",
    lineHeight: 22,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  statIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#666666",
    fontWeight: "600",
    textAlign: 'center',
  },
  labsTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 16,
  },
  labCard: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  labHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#F5F5F5",
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  labInfo: {
    flex: 1,
  },
  labName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 4,
  },
  labStatus: {
    fontSize: 14,
    color: "#666666",
    fontWeight: "500",
  },
  labDescription: {
    fontSize: 14,
    color: "#666666",
    lineHeight: 20,
    marginBottom: 16,
  },
  labFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  equipmentInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  equipmentText: {
    fontSize: 14,
    color: "#666666",
    marginLeft: 6,
    fontWeight: "500",
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  activeBadge: {
    backgroundColor: "#F0F0F0",
  },
  statusText: {
    fontSize: 12,
    color: "#000000",
    fontWeight: "600",
  },
});