import React from "react";
import { View, Text, SafeAreaView, StatusBar, ScrollView, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Card from "../components/Card";
import { COLORS, SIZES, FONTS } from "../theme/Theme";

// Guaranteed working emoji icons
const EmojiIcon = ({ name, size, color }: any) => {
  const iconMap: any = {
    'flask-outline': '🧪',
    'people-outline': '👥',
    'trending-up-outline': '📈',
    'beaker-outline': '🔬',
    'flash-outline': '⚡',
    'laptop-outline': '💻',
    'calendar-outline': '📅',
    'add-circle-outline': '➕',
    'document-text-outline': '📋',
    'settings-outline': '⚙️',
  };

  return (
    <Text style={{ fontSize: size - 4 }}>
      {iconMap[name] || '📊'}
    </Text>
  );
};

export default function DashboardScreen() {
  const stats = [
    { label: "Active Labs", value: 3, icon: "flask-outline" },
    { label: "Students", value: 76, icon: "people-outline" },
    { label: "Experiments", value: 26, icon: "trending-up-outline" },
  ];

  const upcoming = [
    { title: "Titration Practice", date: "Mon, 7 Oct", lab: "Chemistry", icon: "beaker-outline" },
    { title: "Heat Transfer Lab", date: "Wed, 9 Oct", lab: "Physics", icon: "flash-outline" },
    { title: "Coding Marathon", date: "Fri, 11 Oct", lab: "Computer", icon: "laptop-outline" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      
      <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
        
        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.statsContainer}>
          {stats.map((item, i) => (
            <Card key={i} style={styles.statCard}>
              <View style={styles.iconContainer}>
                <EmojiIcon name={item.icon} size={28} color="#000000" />
              </View>
              <Text style={styles.statValue}>{item.value}</Text>
              <Text style={styles.statLabel}>{item.label}</Text>
            </Card>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Upcoming Experiments</Text>
        {upcoming.map((u, i) => (
          <Card key={i} style={styles.upcomingCard}>
            <View style={styles.upcomingHeader}>
              <View style={styles.upcomingIconContainer}>
                <EmojiIcon name={u.icon} size={20} color="#FFFFFF" />
              </View>
              <Text style={styles.upcomingLab}>{u.lab} Lab</Text>
            </View>
            <Text style={styles.cardTitle}>{u.title}</Text>
            <View style={styles.dateContainer}>
              <EmojiIcon name="calendar-outline" size={16} color="#666666" />
              <Text style={styles.cardDate}>{u.date}</Text>
            </View>
          </Card>
        ))}

        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsContainer}>
          <Card style={styles.actionCard}>
            <EmojiIcon name="add-circle-outline" size={24} color="#000000" />
            <Text style={styles.actionText}>New Lab</Text>
          </Card>
          <Card style={styles.actionCard}>
            <EmojiIcon name="document-text-outline" size={24} color="#000000" />
            <Text style={styles.actionText}>Reports</Text>
          </Card>
          <Card style={styles.actionCard}>
            <EmojiIcon name="settings-outline" size={24} color="#000000" />
            <Text style={styles.actionText}>Settings</Text>
          </Card>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#FFFFFF" // White background
  },
  scrollView: { 
    padding: SIZES.padding,
    paddingBottom: 20,
  },
  sectionTitle: {
    ...FONTS.title,
    color: "#000000", // Black text
    marginBottom: SIZES.base,
    marginTop: SIZES.padding,
  },
  statsContainer: { 
    flexDirection: "row", 
    justifyContent: "space-between",
    marginBottom: SIZES.padding,
  },
  statCard: { 
    flex: 1, 
    marginHorizontal: 5, 
    alignItems: "center",
    paddingVertical: SIZES.padding,
    backgroundColor: "#FFFFFF", // White card background
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#F5F5F5", // Light gray background for icons
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0", // Light border
  },
  statValue: { 
    ...FONTS.header, 
    color: "#000000", // Black text
    marginVertical: 4,
  },
  statLabel: { 
    color: "#666666", // Dark gray text
    fontSize: 13,
    textAlign: 'center',
  },
  upcomingCard: {
    marginBottom: 10,
    padding: SIZES.padding,
    backgroundColor: "#FFFFFF", // White card background
    borderWidth: 1,
    borderColor: "#E0E0E0", // Light border
  },
  upcomingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  upcomingIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#000000", // Black background for icons
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  upcomingLab: {
    fontSize: 12,
    color: "#666666", // Dark gray text
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  cardTitle: { 
    ...FONTS.title, 
    color: "#000000", // Black text
    marginBottom: 6,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardDate: { 
    color: "#666666", // Dark gray text
    fontSize: 13,
    marginLeft: 6,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SIZES.padding,
  },
  actionCard: {
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: "#FFFFFF", // White card background
    borderWidth: 1,
    borderColor: "#E0E0E0", // Light border
  },
  actionText: {
    fontSize: 12,
    color: "#000000", // Black text
    marginTop: 6,
    fontWeight: '600',
  },
});