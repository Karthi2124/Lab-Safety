import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const spinValue = new Animated.Value(0);
  const fadeValue = new Animated.Value(0);

  useEffect(() => {
    const spinAnimation = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );

    const fadeAnimation = Animated.timing(fadeValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });

    spinAnimation.start();
    fadeAnimation.start();

    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 3000);

    return () => {
      clearTimeout(timer);
      spinAnimation.stop();
    };
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, { opacity: fadeValue }]}>
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <Icon name="science" size={80} color="#2563eb" />
        </Animated.View>
        <Text style={styles.title}>Lab Management System</Text>
        <Text style={styles.subtitle}>Loading your laboratory dashboard...</Text>
      </Animated.View>
      
      <View style={styles.loadingBar}>
        <Animated.View 
          style={[
            styles.loadingProgress, 
            { 
              transform: [
                {
                  translateX: fadeValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-100, 0],
                  })
                }
              ] 
            }
          ]} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1e293b',
    marginTop: 24,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 8,
    textAlign: 'center',
  },
  loadingBar: {
    width: 200,
    height: 4,
    backgroundColor: '#e2e8f0',
    borderRadius: 2,
    overflow: 'hidden',
  },
  loadingProgress: {
    height: '100%',
    backgroundColor: '#2563eb',
    borderRadius: 2,
  },
});