import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  StatusBar, 
  ScrollView, 
  TouchableOpacity,
  Dimensions 
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get('window');

export default function AttendanceScreen() {
  const [selectedLab, setSelectedLab] = useState("chemistry");
  
  const labs = {
    chemistry: {
      name: "Chemistry Lab",
      icon: "science",
      attendance: [
        { name: "Emma Johnson", status: "Present", time: "09:15 AM" },
        { name: "Michael Chen", status: "Absent", time: "-" },
        { name: "Sarah Williams", status: "Present", time: "09:05 AM" },
        { name: "James Brown", status: "Present", time: "08:55 AM" },
        { name: "Olivia Davis", status: "Late", time: "09:45 AM" },
        { name: "Daniel Garcia", status: "Present", time: "09:10 AM" },
        { name: "Sophia Martinez", status: "Absent", time: "-" },
        { name: "David Wilson", status: "Present", time: "09:00 AM" },
        { name: "Isabella Taylor", status: "Late", time: "09:35 AM" },
        { name: "Alexander Anderson", status: "Present", time: "08:50 AM" },
      ]
    },
    physics: {
      name: "Physics Lab",
      icon: "emoji-objects",
      attendance: [
        { name: "Emma Johnson", status: "Present", time: "11:15 AM" },
        { name: "Michael Chen", status: "Present", time: "11:05 AM" },
        { name: "Sarah Williams", status: "Late", time: "11:45 AM" },
        { name: "James Brown", status: "Present", time: "11:10 AM" },
        { name: "Olivia Davis", status: "Present", time: "11:00 AM" },
        { name: "Daniel Garcia", status: "Absent", time: "-" },
        { name: "Sophia Martinez", status: "Present", time: "11:20 AM" },
        { name: "David Wilson", status: "Late", time: "11:40 AM" },
        { name: "Isabella Taylor", status: "Present", time: "11:05 AM" },
        { name: "Alexander Anderson", status: "Present", time: "11:15 AM" },
      ]
    },
    computer: {
      name: "Computer Lab",
      icon: "computer",
      attendance: [
        { name: "Emma Johnson", status: "Present", time: "02:30 PM" },
        { name: "Michael Chen", status: "Present", time: "02:25 PM" },
        { name: "Sarah Williams", status: "Present", time: "02:35 PM" },
        { name: "James Brown", status: "Late", time: "03:15 PM" },
        { name: "Olivia Davis", status: "Present", time: "02:40 PM" },
        { name: "Daniel Garcia", status: "Absent", time: "-" },
        { name: "Sophia Martinez", status: "Absent", time: "-" },
        { name: "David Wilson", status: "Present", time: "02:30 PM" },
        { name: "Isabella Taylor", status: "Present", time: "02:45 PM" },
        { name: "Alexander Anderson", status: "Late", time: "03:05 PM" },
      ]
    }
  };

  const currentLab = labs[selectedLab];
  
  const getStats = (attendance: any[]) => {
    const present = attendance.filter(a => a.status === "Present").length;
    const late = attendance.filter(a => a.status === "Late").length;
    const absent = attendance.filter(a => a.status === "Absent").length;
    const total = attendance.length;
    
    return { present, late, absent, total };
  };

  const stats = getStats(currentLab.attendance);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Present":
        return "#16A34A"; // Green for present
      case "Late":
        return "#CA8A04"; // Amber for late
      case "Absent":
        return "#DC2626"; // Red for absent
      default:
        return "#6B7280";
    }
  };

  const getStatusBackground = (status: string) => {
    switch (status) {
      case "Present":
        return "#DCFCE7"; // Light green background
      case "Late":
        return "#FEF9C3"; // Light amber background
      case "Absent":
        return "#FEE2E2"; // Light red background
      default:
        return "#F3F4F6";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Present":
        return "check-circle";
      case "Late":
        return "schedule";
      case "Absent":
        return "cancel";
      default:
        return "help";
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Lab Selection */}
        <Text style={styles.sectionTitle}>Select Laboratory</Text>
        <View style={styles.labSelector}>
          {Object.keys(labs).map((labKey) => (
            <TouchableOpacity
              key={labKey}
              style={[
                styles.labButton,
                selectedLab === labKey && styles.labButtonActive
              ]}
              onPress={() => setSelectedLab(labKey)}
            >
              <Icon 
                name={labs[labKey].icon} 
                size={20} 
                color={selectedLab === labKey ? "#FFFFFF" : "#000000"} 
              />
              <Text style={[
                styles.labButtonText,
                selectedLab === labKey && styles.labButtonTextActive
              ]}>
                {labs[labKey].name.split(' ')[0]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Statistics Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <View style={[styles.statIcon, { backgroundColor: "#DCFCE7" }]}>
              <Icon name="check-circle" size={20} color="#16A34A" />
            </View>
            <Text style={styles.statNumber}>{stats.present}</Text>
            <Text style={styles.statLabel}>Present</Text>
            <Text style={styles.statPercentage}>
              {((stats.present / stats.total) * 100).toFixed(0)}%
            </Text>
          </View>
          
          <View style={styles.statCard}>
            <View style={[styles.statIcon, { backgroundColor: "#FEF9C3" }]}>
              <Icon name="schedule" size={20} color="#CA8A04" />
            </View>
            <Text style={styles.statNumber}>{stats.late}</Text>
            <Text style={styles.statLabel}>Late</Text>
            <Text style={styles.statPercentage}>
              {((stats.late / stats.total) * 100).toFixed(0)}%
            </Text>
          </View>
          
          <View style={styles.statCard}>
            <View style={[styles.statIcon, { backgroundColor: "#FEE2E2" }]}>
              <Icon name="cancel" size={20} color="#DC2626" />
            </View>
            <Text style={styles.statNumber}>{stats.absent}</Text>
            <Text style={styles.statLabel}>Absent</Text>
            <Text style={styles.statPercentage}>
              {((stats.absent / stats.total) * 100).toFixed(0)}%
            </Text>
          </View>
        </View>

        {/* Overall Attendance Summary */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Class Overview</Text>
          <View style={styles.summaryStats}>
            <View style={styles.summaryStat}>
              <Text style={styles.summaryNumber}>{stats.total}</Text>
              <Text style={styles.summaryLabel}>Total Students</Text>
            </View>
            <View style={styles.summaryDivider} />
            <View style={styles.summaryStat}>
              <Text style={styles.summaryNumber}>
                {(((stats.present + stats.late) / stats.total) * 100).toFixed(1)}%
              </Text>
              <Text style={styles.summaryLabel}>Attendance Rate</Text>
            </View>
          </View>
        </View>

        {/* Student Attendance List */}
        <View style={styles.historyHeader}>
          <Text style={styles.sectionTitle}>Student Attendance</Text>
          <Text style={styles.labName}>{currentLab.name}</Text>
        </View>
        
        {currentLab.attendance.map((student, index) => (
          <View key={index} style={styles.attendanceCard}>
            <View style={styles.studentSection}>
              <View style={styles.studentInitials}>
                <Text style={styles.initialsText}>
                  {student.name.split(' ').map(n => n[0]).join('')}
                </Text>
              </View>
              <View style={styles.studentInfo}>
                <Text style={styles.studentNameText}>{student.name}</Text>
                <Text style={styles.attendanceTime}>{student.time}</Text>
              </View>
            </View>
            
            <View style={styles.statusSection}>
              <View 
                style={[
                  styles.statusBadge,
                  { backgroundColor: getStatusBackground(student.status) }
                ]}
              >
                <Icon 
                  name={getStatusIcon(student.status)} 
                  size={16} 
                  color={getStatusColor(student.status)} 
                  style={styles.statusIcon}
                />
                <Text
                  style={[
                    styles.status,
                    { color: getStatusColor(student.status) }
                  ]}
                >
                  {student.status}
                </Text>
              </View>
            </View>
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
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 16,
  },
  // Lab Selector
  labSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
    backgroundColor: "#F8FAFC",
    padding: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  labButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginHorizontal: 2,
  },
  labButtonActive: {
    backgroundColor: "#000000",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  labButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000000",
    marginLeft: 6,
  },
  labButtonTextActive: {
    color: "#FFFFFF",
  },
  // Statistics
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "#F1F5F9",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "600",
    marginBottom: 4,
  },
  statPercentage: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000000",
  },
  // Summary Card
  summaryCard: {
    backgroundColor: "#000000",
    padding: 20,
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 16,
    textAlign: "center",
  },
  summaryStats: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  summaryStat: {
    alignItems: "center",
  },
  summaryNumber: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  summaryLabel: {
    fontSize: 12,
    color: "#E5E7EB",
    fontWeight: "500",
  },
  summaryDivider: {
    width: 1,
    height: 40,
    backgroundColor: "#374151",
  },
  // History Section
  historyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  labName: {
    fontSize: 14,
    color: "#6B7280",
    fontWeight: "600",
  },
  // Attendance Cards
  attendanceCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#F1F5F9",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  studentSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  studentInitials: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  initialsText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  studentInfo: {
    flex: 1,
  },
  studentNameText: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "600",
    marginBottom: 2,
  },
  attendanceTime: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "500",
  },
  statusSection: {
    alignItems: "flex-end",
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  statusIcon: {
    marginRight: 4,
  },
  status: {
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
});