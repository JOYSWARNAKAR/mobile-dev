import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Feather,
  AntDesign,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Logo */}
          <View style={styles.logoContainer}>
            <View style={styles.plusWrapper}>
              <View style={styles.plusVertical} />
              <View style={styles.plusHorizontal} />
            </View>
          </View>

          {/* Heading */}
          <Text style={styles.heading}>Sign In</Text>
          <Text style={styles.subHeading}>
            Sign In to your account
          </Text>

          {/* Email */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email Address</Text>

            <View style={[styles.inputWrapper, styles.activeInput]}>
              <Feather name="mail" size={20} color="#555" />

              <TextInput
                placeholder="Enter your email address..."
                placeholderTextColor="#777"
                style={styles.input}
                keyboardType="email-address"
              />
            </View>
          </View>

          {/* Password */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>

            <View style={styles.inputWrapper}>
              <Feather name="lock" size={20} color="#555" />

              <TextInput
                placeholder="Enter your password..."
                placeholderTextColor="#999"
                secureTextEntry={!showPassword}
                style={styles.input}
              />

              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={22}
                  color="#999"
                />
              </Pressable>
            </View>
          </View>

          {/* Sign In Button */}
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>

            <Ionicons name="arrow-forward" size={24} color="#fff" />
          </Pressable>

          {/* Social Icons */}
          <View style={styles.socialContainer}>
            <Pressable style={styles.socialButton}>
              <FontAwesome name="facebook-f" size={24} color="#333" />
            </Pressable>

            <Pressable style={styles.socialButton}>
              <AntDesign name="google" size={24} color="#333" />
            </Pressable>

            <Pressable style={styles.socialButton}>
              <AntDesign name="instagram" size={24} color="#333" />
            </Pressable>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Don’t have an account?{" "}
              <Text style={styles.link}>Sign Up.</Text>
            </Text>

            <Text style={[styles.link, { marginTop: 12 }]}>
              Forgot your password?
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const GREEN = "#8CD80A";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },

  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 40,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },

  plusWrapper: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  plusVertical: {
    width: 18,
    height: 50,
    backgroundColor: GREEN,
    borderRadius: 20,
    position: "absolute",
  },

  plusHorizontal: {
    width: 50,
    height: 18,
    backgroundColor: GREEN,
    borderRadius: 20,
    position: "absolute",
  },

  heading: {
    fontSize: width < 380 ? 34 : 42,
    fontWeight: "800",
    color: "#222",
    textAlign: "center",
  },

  subHeading: {
    textAlign: "center",
    color: "#777",
    marginTop: 10,
    fontSize: 16,
    marginBottom: 40,
  },

  inputContainer: {
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    marginBottom: 12,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 18,
    paddingHorizontal: 16,
    height: 64,
    borderWidth: 1,
    borderColor: "#ECECEC",
  },

  activeInput: {
    borderColor: GREEN,
    shadowColor: GREEN,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: "#222",
  },

  button: {
    backgroundColor: GREEN,
    height: 62,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 12,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    marginRight: 10,
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },

  socialButton: {
    width: 62,
    height: 62,
    borderRadius: 18,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },

  footer: {
    marginTop: 40,
    alignItems: "center",
  },

  footerText: {
    color: "#444",
    fontSize: 15,
  },

  link: {
    color: GREEN,
    fontWeight: "600",
  },
});