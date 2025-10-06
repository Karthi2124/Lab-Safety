import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function ProfileScreen() {
  const [editing, setEditing] = useState(false);

  const handleLogout = () => {
    Alert.alert("Logout", "You have been logged out (static action)");
  };

  const profileStats = [
    { label: "Labs Managed", value: "3", icon: "science" },
    { label: "Students", value: "76", icon: "groups" },
    { label: "Experiments", value: "26", icon: "biotech" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      
      {/* REMOVED: Custom Header */}
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: "" }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Karthikeyan I</Text>
          <Text style={styles.role}>Lab Supervisor</Text>
        </View>

        {/* Profile Stats */}
        <View style={styles.statsContainer}>
          {profileStats.map((stat, index) => (
            <View key={index} style={styles.statItem}>
              <View style={styles.statIcon}>
                <Icon name={stat.icon} size={20} color="#000000" />
              </View>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.sectionTitle}>
            <Text style={styles.sectionTitleText}>Contact Information</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="email" size={20} color="#000000" />
            <Text style={styles.infoText}>karthikeyan@labs.edu</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="phone" size={20} color="#000000" />
            <Text style={styles.infoText}>+91 98765 43210</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="location-on" size={20} color="#000000" />
            <Text style={styles.infoText}>Science Block, Room 205</Text>
          </View>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.button, styles.editButton]}
            onPress={() => setEditing(!editing)}
          >
            <Icon name={editing ? "save" : "edit"} size={20} color="#FFFFFF" />
            <Text style={styles.editButtonText}>
              {editing ? "Save Changes" : "Edit Profile"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.logoutButton]}
            onPress={handleLogout}
          >
            <Icon name="logout" size={20} color="#FFFFFF" />
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: "#FFFFFF",
  },
  profileContainer: { 
    alignItems: "center", 
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  avatar: { 
    width: 120, 
    height: 120, 
    borderRadius: 60, 
    marginBottom: 16,
    borderWidth: 3,
    borderColor: "#000000",
  },
  name: { 
    fontSize: 24, 
    fontWeight: "700", 
    color: "#000000",
    marginBottom: 4,
  },
  role: { 
    color: "#666666", 
    fontSize: 16,
    fontWeight: "500",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 12,
    color: "#666666",
    fontWeight: "500",
  },
  infoContainer: { 
    paddingHorizontal: 20, 
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  sectionTitle: {
    marginBottom: 16,
  },
  sectionTitleText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000000",
  },
  infoRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginVertical: 12,
    paddingVertical: 8,
  },
  infoText: { 
    marginLeft: 12, 
    color: "#000000", 
    fontSize: 16,
    fontWeight: "500",
  },
  actions: { 
    padding: 20,
  },
  button: {
    flexDirection: 'row',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  editButton: {
    backgroundColor: "#000000",
  },
  logoutButton: {
    backgroundColor: "#FF3B30",
  },
  editButtonText: { 
    fontSize: 16, 
    fontWeight: "600", 
    color: "#FFFFFF",
    marginLeft: 8,
  },
  logoutButtonText: { 
    fontSize: 16, 
    fontWeight: "600", 
    color: "#FFFFFF",
    marginLeft: 8,
  },
});