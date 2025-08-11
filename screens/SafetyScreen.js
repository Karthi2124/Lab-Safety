import React, { useEffect, useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  ActivityIndicator, 
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";

const SafetyScreen = () => {
  const [activeTab, setActiveTab] = useState("chemistry");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulated data for each tab
        const mockData = {
          chemistry: [
            { _id: "1", parameter: "Chemical Exposure", value: "0.2 ppm", status: "Safe", note: "Within safe limits" },
            { _id: "2", parameter: "Flammable Materials", value: "3 containers", status: "Warning", note: "Approaching capacity" },
            { _id: "3", parameter: "Ventilation", value: "85%", status: "Safe" }
          ],
          physics: [
            { _id: "1", parameter: "Radiation Levels", value: "0.05 μSv", status: "Safe" },
            { _id: "2", parameter: "Laser Safety", value: "Class 3B", status: "Danger", note: "Requires protective eyewear" }
          ],
          computer: [
            { _id: "1", parameter: "Eye Strain", value: "Moderate", status: "Warning", note: "Take regular breaks" },
            { _id: "2", parameter: "Posture", value: "Good", status: "Safe" }
          ]
        };
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setData(mockData[activeTab] || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);

  const renderTabButton = (tabName, displayName, icon) => (
    <TouchableOpacity
      style={[
        styles.tabButton,
        activeTab === tabName && styles.activeTab
      ]}
      onPress={() => setActiveTab(tabName)}
    >
      {icon && (
        <Image 
          source={icon} 
          style={[
            styles.tabIcon,
            activeTab === tabName && styles.activeTabIcon
          ]} 
        />
      )}
      <Text style={[
        styles.tabText,
        activeTab === tabName && styles.activeTabText
      ]}>
        {displayName}
      </Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.parameter}>{item.parameter}</Text>
        <View style={[
          styles.statusIndicator,
          { backgroundColor: getStatusColor(item.status) }
        ]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
      
      <View style={styles.valueRow}>
        <Text style={styles.valueLabel}>Current Value:</Text>
        <Text style={styles.value}>{item.value}</Text>
      </View>
      
      {item.note && (
        <View style={styles.noteContainer}>
          <Text style={styles.noteLabel}>Note:</Text>
          <Text style={styles.note}>{item.note}</Text>
        </View>
      )}
    </View>
  );

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case "safe":
        return "#2ecc71";
      case "warning":
        return "#f39c12";
      case "danger":
        return "#e74c3c";
      default:
        return "#95a5a6";
    }
  };

  if (loading && data.length === 0) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#3498db" />
        <Text style={styles.loadingText}>Loading {activeTab} lab data...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Lab Safety Dashboard</Text>
        <Text style={styles.subHeader}>Real-time monitoring system</Text>
      </View>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabContainer}
      >
        {renderTabButton("chemistry", "Chemistry", require('../assets/flask.png'))}
        {renderTabButton("physics", "Physics", require('../assets/physics.png'))}
        {renderTabButton("computer", "Computer", require('../assets/computer.png'))}
      </ScrollView>

      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          ListHeaderComponent={
            <View style={styles.sectionHeaderContainer}>
              <Text style={styles.sectionHeader}>
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Lab
              </Text>
              <View style={styles.statusLegend}>
                <View style={[styles.legendItem, { backgroundColor: "#2ecc71" }]}>
                  <Text style={styles.legendText}>Safe</Text>
                </View>
                <View style={[styles.legendItem, { backgroundColor: "#f39c12" }]}>
                  <Text style={styles.legendText}>Warning</Text>
                </View>
                <View style={[styles.legendItem, { backgroundColor: "#e74c3c" }]}>
                  <Text style={styles.legendText}>Danger</Text>
                </View>
              </View>
            </View>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
  },
  headerContainer: {
    padding: 20,
    paddingBottom: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ecf0f1",
  },
  header: {
    fontSize: 26,
    fontWeight: "700",
    color: "#2c3e50",
    textAlign: "center",
  },
  subHeader: {
    fontSize: 14,
    color: "#7f8c8d",
    textAlign: "center",
    marginTop: 4,
  },
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
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 18,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  parameter: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2c3e50",
    flex: 1,
  },
  statusIndicator: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  statusText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  valueRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  valueLabel: {
    fontSize: 14,
    color: "#7f8c8d",
    marginRight: 8,
  },
  value: {
    fontSize: 14,
    fontWeight: "600",
    color: "#34495e",
  },
  noteContainer: {
    flexDirection: "row",
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#ecf0f1",
  },
  noteLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#7f8c8d",
    marginRight: 8,
  },
  note: {
    fontSize: 13,
    color: "#7f8c8d",
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f7fa",
  },
  loadingText: {
    marginTop: 15,
    fontSize: 15,
    color: "#7f8c8d",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  emptyImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
    opacity: 0.6,
  },
  emptyText: {
    fontSize: 17,
    color: "#7f8c8d",
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "500",
  },
  emptySubText: {
    fontSize: 14,
    color: "#bdc3c7",
    textAlign: "center",
  },
});

export default SafetyScreen;