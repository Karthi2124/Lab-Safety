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

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Chemistry Lab Session", detail: "Starts at 9:30 AM", read: false },
    { id: 2, title: "Physics Experiment", detail: "Data submission by 5 PM", read: false },
    { id: 3, title: "Attendance Updated", detail: "Your attendance is now 92%", read: true },
    { id: 4, title: "Lab Equipment Maintenance", detail: "Scheduled for tomorrow", read: false },
    { id: 5, title: "New Assignment Posted", detail: "Due next Monday", read: true },
  ]);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({ ...n, read: true }))
    );
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      
      {/* REMOVED: Custom Header */}
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Notifications Header */}
        <View style={styles.notificationsHeader}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          {unreadCount > 0 && (
            <TouchableOpacity onPress={markAllAsRead} style={styles.markAllButton}>
              <Text style={styles.markAllText}>Mark all as read</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Unread Notifications Count */}
        {unreadCount > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{unreadCount} unread</Text>
          </View>
        )}

        {notifications.map((n) => (
          <View
            key={n.id}
            style={[styles.card, n.read && styles.readCard]}
          >
            <View style={styles.notificationContent}>
              <View style={styles.notificationHeader}>
                <Text style={[styles.title, n.read && styles.readTitle]}>{n.title}</Text>
                {!n.read && <View style={styles.unreadDot} />}
              </View>
              <Text style={[styles.detail, n.read && styles.readDetail]}>{n.detail}</Text>
              <Text style={styles.time}>2 hours ago</Text>
            </View>
            {!n.read ? (
              <TouchableOpacity onPress={() => markAsRead(n.id)} style={styles.readButton}>
                <Icon name="mark-email-read" size={24} color="#000000" />
              </TouchableOpacity>
            ) : (
              <Icon name="check-circle" size={24} color="#666666" />
            )}
          </View>
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
  notificationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000000",
  },
  markAllButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  markAllText: {
    fontSize: 14,
    color: "#000000",
    fontWeight: "600",
  },
  unreadBadge: {
    backgroundColor: "#000000",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  unreadText: {
    fontSize: 12,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  readCard: {
    backgroundColor: "#F8F8F8",
    borderColor: "#F0F0F0",
  },
  notificationContent: {
    flex: 1,
    marginRight: 12,
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: { 
    fontSize: 16, 
    fontWeight: "700", 
    color: "#000000",
    flex: 1,
  },
  readTitle: {
    color: "#666666",
    fontWeight: "600",
  },
  detail: { 
    fontSize: 14, 
    color: "#666666",
    marginBottom: 4,
  },
  readDetail: {
    color: "#999999",
  },
  time: {
    fontSize: 12,
    color: "#999999",
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#000000",
    marginLeft: 8,
  },
  readButton: {
    padding: 4,
  },
});