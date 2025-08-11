import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet, Easing } from 'react-native';

export default function LoadingScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    // Main entrance animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 800,
        easing: Easing.elastic(1),
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      })
    ]).start();

    // Continuous pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.05,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        })
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.animationContainer,
          { 
            opacity: fadeAnim,
            transform: [
              { scale: scaleAnim },
              { translateY: slideAnim }
            ]
          }
        ]}
      >
        <Animated.Image
          source={require('../assets/icon.png')}
          style={[
            styles.logo, 
            { 
              transform: [{ scale: pulseAnim }],
              shadowOpacity: fadeAnim
            }
          ]}
        />
        <Animated.Text 
          style={[
            styles.text,
            { 
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }]
            }
          ]}
        >
          Lab Safely
        </Animated.Text>
        <View style={styles.progressContainer}>
          <Animated.View 
            style={[
              styles.progressBar,
              { 
                transform: [
                  { 
                    scaleX: fadeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 1]
                    }) 
                  }
                ] 
              }
            ]}
          />
        </View>
        <Text style={styles.subtext}>Initializing lab safety systems...</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  animationContainer: {
    alignItems: 'center',
    padding: 30,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    shadowColor: '#007bff',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  text: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 30,
    textAlign: 'center',
  },
  subtext: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 20,
  },
  progressContainer: {
    height: 4,
    width: 200,
    backgroundColor: '#ecf0f1',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    width: '100%',
    backgroundColor: '#3498db',
    borderRadius: 2,
    transformOrigin: 'left center',
  },
});