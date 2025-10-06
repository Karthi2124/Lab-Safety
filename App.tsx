// App.tsx — Fully Unified Header + Drawer + Tabs
import React, { useEffect, useState } from "react";
import {
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextStyle,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  NavigationContainer,
  DrawerActions,
  DefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

// ✅ Screens
import LoadingScreen from "./src/screens/LoadingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import ChemistryLabScreen from "./src/screens/ChemistryScreen";
import PhysicsLabScreen from "./src/screens/PhysicsScreen";
import ComputerLabScreen from "./src/screens/ComputerScreen";
import StudentActivityScreen from "./src/screens/StudentActivityScreen";
import NotificationsScreen from "./src/screens/NotificationsScreen";
import AnalyticsScreen from "./src/screens/AnalyticsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import AttendanceScreen from "./src/screens/AttendanceScreen";
import LabsScreen from "./src/screens/LabsScreen";

// 🧭 Navigation Setup
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const LabsStack = createNativeStackNavigator();

// 🎨 App Theme
const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFFFFF",
    card: "#FFFFFF",
    text: "#000000",
    border: "#E0E0E0",
    primary: "#000000",
  },
};

// ✅ Common Header Style (used everywhere)
const commonHeaderOptions = ({ navigation, back }: any) => ({
  headerStyle: {
    backgroundColor: "#000000",
    borderBottomColor: "rgba(255,255,255,0.15)",
    borderBottomWidth: 0.5,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: Platform.OS === "android" ? 6 : 0,
  },
  headerTintColor: "#FFFFFF",
  headerTitleStyle: {
    fontWeight: "700" as TextStyle["fontWeight"],
    fontSize: 18,
    color: "#FFFFFF",
  },
  headerTitleAlign: "center" as const,
  headerLeft: () =>
    back ? (
      <TouchableOpacity
        style={{ marginLeft: 5 }}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={28} color="#FFFFFF" />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        style={{ marginLeft: 5 }}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Icon name="menu" size={28} color="#FFFFFF" />
      </TouchableOpacity>
    ),
});

// 🧪 Labs Stack
function LabsStackScreen() {
  return (
    <LabsStack.Navigator screenOptions={commonHeaderOptions}>
      <LabsStack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ title: "Dashboard" }}
      />
      <LabsStack.Screen
        name="LabsScreen"
        component={LabsScreen}
        options={{ title: "Laboratories" }}
      />
      <LabsStack.Screen
        name="ChemistryLab"
        component={ChemistryLabScreen}
        options={{ title: "Chemistry Lab" }}
      />
      <LabsStack.Screen
        name="PhysicsLab"
        component={PhysicsLabScreen}
        options={{ title: "Physics Lab" }}
      />
      <LabsStack.Screen
        name="ComputerLab"
        component={ComputerLabScreen}
        options={{ title: "Computer Lab" }}
      />
      <LabsStack.Screen
        name="StudentActivity"
        component={StudentActivityScreen}
        options={{ title: "Student Activity" }}
      />
    </LabsStack.Navigator>
  );
}

// 📊 Bottom Tabs (same header on every screen)
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: true,
        ...commonHeaderOptions({ navigation, back: false }),
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#666666",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: "#E0E0E0",
          height: 60,
          paddingBottom: 6,
          paddingTop: 5,
          shadowColor: "#000000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 8,
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "700" },
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={LabsStackScreen}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color }) => (
            <Icon name="dashboard" size={24} color={color} />
          ),
          headerShown: false, // Dashboard stack handles its header
        }}
      />
      <Tab.Screen
        name="Attendance"
        component={AttendanceScreen}
        options={{
          title: "Attendance",
          tabBarLabel: "Attendance",
          tabBarIcon: ({ color }) => (
            <Icon name="groups" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Labs"
        component={LabsScreen}
        options={{
          title: "Laboratories",
          tabBarLabel: "Labs",
          tabBarIcon: ({ color }) => (
            <Icon name="science" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          title: "Notifications",
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color }) => (
            <Icon name="notifications" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Icon name="person" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// 🧭 Drawer Content (kept light for contrast)
function CustomDrawerContent(props: any) {
  const { navigation } = props;

  const navigateToScreen = (screen: string, params?: any) => {
    navigation.navigate("Tabs", { screen, params });
    navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView {...props} style={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
        <View style={styles.logoContainer}>
          <Icon name="science" size={40} color="#FFFFFF" />
        </View>
        <View>
          <Text style={styles.companyName}>Lab Manager</Text>
          <Text style={styles.companySubtitle}>Management System</Text>
        </View>
      </View>

      <View style={styles.drawerItems}>
        <DrawerItem
          label="Dashboard"
          onPress={() => navigateToScreen("Dashboard")}
          icon={({ color }) => <Icon name="dashboard" size={22} color={color} />}
          labelStyle={styles.drawerLabel}
        />
        <DrawerItem
          label="Laboratories"
          onPress={() => navigateToScreen("Labs")}
          icon={({ color }) => <Icon name="science" size={22} color={color} />}
          labelStyle={styles.drawerLabel}
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Lab Sections</Text>
        </View>

        <DrawerItem
          label="Chemistry Lab"
          onPress={() => navigateToScreen("Dashboard", { screen: "ChemistryLab" })}
          icon={({ color }) => <Icon name="science" size={22} color={color} />}
          labelStyle={styles.drawerLabel}
        />
        <DrawerItem
          label="Physics Lab"
          onPress={() => navigateToScreen("Dashboard", { screen: "PhysicsLab" })}
          icon={({ color }) => (
            <Icon name="emoji-objects" size={22} color={color} />
          )}
          labelStyle={styles.drawerLabel}
        />
        <DrawerItem
          label="Computer Lab"
          onPress={() => navigateToScreen("Dashboard", { screen: "ComputerLab" })}
          icon={({ color }) => <Icon name="computer" size={22} color={color} />}
          labelStyle={styles.drawerLabel}
        />
        <DrawerItem
          label="Student Activity"
          onPress={() =>
            navigateToScreen("Dashboard", { screen: "StudentActivity" })
          }
          icon={({ color }) => <Icon name="school" size={22} color={color} />}
          labelStyle={styles.drawerLabel}
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Management</Text>
        </View>

        <DrawerItem
          label="Attendance"
          onPress={() => navigateToScreen("Attendance")}
          icon={({ color }) => <Icon name="groups" size={22} color={color} />}
          labelStyle={styles.drawerLabel}
        />
        <DrawerItem
          label="Notifications"
          onPress={() => navigateToScreen("Notifications")}
          icon={({ color }) => <Icon name="notifications" size={22} color={color} />}
          labelStyle={styles.drawerLabel}
        />
        <DrawerItem
          label="Profile"
          onPress={() => navigateToScreen("Profile")}
          icon={({ color }) => <Icon name="person" size={22} color={color} />}
          labelStyle={styles.drawerLabel}
        />
      </View>

      <View style={styles.drawerFooter}>
        <Text style={styles.footerText}>Lab Manager v1.0</Text>
        <Text style={styles.footerSubtext}>© 2024 All rights reserved</Text>
      </View>
    </DrawerContentScrollView>
  );
}

// 🧭 Drawer Navigator
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#FFFFFF",
        drawerInactiveTintColor: "#CCCCCC",
        drawerStyle: { backgroundColor: "#000000", width: 300 },
        drawerLabelStyle: { fontSize: 16, fontWeight: "500", color: "#FFFFFF" },
      }}
    >
      <Drawer.Screen name="Tabs" component={BottomTabs} />
    </Drawer.Navigator>
  );
}

// 🔑 Auth Context
const AuthContext = React.createContext<any>(null);

// 🧱 Main App Content
function AppContent() {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const authContext = React.useMemo(
    () => ({
      signIn: async () => {
        await AsyncStorage.setItem("userToken", "dummy_token");
        setUserToken("dummy_token");
      },
      signOut: async () => {
        await AsyncStorage.removeItem("userToken");
        setUserToken(null);
      },
    }),
    []
  );

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("userToken");
      setUserToken(token);
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={AppTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {userToken ? (
            <Stack.Screen name="MainApp" component={DrawerNavigator} />
          ) : (
            <Stack.Screen
              name="Login"
              children={(props) => (
                <LoginScreen {...props} onLoginSuccess={() => setUserToken("dummy_token")} />
              )}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

// 🧩 Main App Wrapper
export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <AppContent />
    </SafeAreaProvider>
  );
}

// 💅 Styles
const styles = StyleSheet.create({
  drawerContainer: { backgroundColor: "#000000" },
  drawerHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#222222",
    backgroundColor: "#000000",
  },
  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#222222",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  companyName: { color: "#FFFFFF", fontSize: 20, fontWeight: "bold" },
  companySubtitle: { color: "#AAAAAA", fontSize: 12, fontWeight: "500" },
  drawerItems: { flex: 1, paddingTop: 10 },
  drawerLabel: { color: "#FFFFFF", fontSize: 16, fontWeight: "500" },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 16,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#333333",
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#BBBBBB",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  drawerFooter: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#222222",
    backgroundColor: "#000000",
  },
  footerText: {
    fontSize: 12,
    color: "#AAAAAA",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 4,
  },
  footerSubtext: { fontSize: 10, color: "#666666", textAlign: "center" },
});
