import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        {/* Circular icon placeholder */}
        <View style={styles.logoContainer}>
          <View style={styles.logoInner}>
            <Text style={styles.logoText}>LS</Text>
          </View>
        </View>
        
        <Text style={styles.text}>
          Lab Safely
        </Text>
        
        <View style={styles.progressContainer}>
          <View style={styles.progressBar} />
        </View>
        
        <Text style={styles.subtext}>
          Initializing lab safety systems...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
  },
  animationContainer: {
    alignItems: 'center',
    padding: 30,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    width: '80%',
    maxWidth: 350,
    shadowColor: '#2d3748',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#3b82f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 6,
  },
  logoInner: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 24,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  subtext: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 24,
    letterSpacing: 0.3,
  },
  progressContainer: {
    height: 6,
    width: '100%',
    backgroundColor: '#e2e8f0',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    width: '60%', // Static progress for non-animated version
    backgroundColor: '#3b82f6',
    borderRadius: 3,
  },
});