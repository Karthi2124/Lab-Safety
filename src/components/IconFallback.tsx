// src/components/IconFallback.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const IconFallback = ({ name, size, color, style }: any) => {
  const iconMap: { [key: string]: string } = {
    "science": "biotech",
    "groups": "people",
    "show-chart": "trending-up",
    "biotech": "biotech",
    "people": "people",
    "trending-up": "trending-up",
    "computer": "computer",
    "bolt": "flash-on",
    "event": "event",
    "email": "email",
    "phone": "phone",
    "notifications": "notifications",
    "person": "person",
    "dashboard": "dashboard",
    "analytics": "analytics",
    "menu": "menu",
    "arrow-back": "arrow-back",
    "science": "science", // Fallback for chemistry
    "emoji-objects": "emoji-objects", // Fallback for physics
  };

  return (
    <View style={[styles.container, style]}>
      <Icon 
        name={iconMap[name] || "help-outline"} 
        size={size} 
        color={color} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IconFallback;