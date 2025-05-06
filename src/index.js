import React, { useRef, useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { WebView } from "react-native-webview";

const App = ({ onPress }) => {
  const webViewRef = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);

  const handleNavChange = (navState) => {
    setCanGoBack(navState.canGoBack);
  };

  const goBack = () => {
    if (webViewRef.current && canGoBack) {
      webViewRef.current.goBack();
    }
  };

  const refreshPage = () => {
    if (webViewRef.current) {
      webViewRef.current.reload();
    }
  };

  useEffect(() => {
    console.log("onPress: ", onPress);
  }, []);

  return (
    <SafeAreaView
          style={{
            flex: 1,
            marginTop: StatusBar.currentHeight,
            backgroundColor: '#EE277C',
          }}>
    <SafeAreaView style={styles.container}>
      <View style={styles.webviewContainer}>
        <View
          style={{
            height: Dimensions.get("window").height * 0.08,
            width: "100%",
            backgroundColor: "#EE277C",
            justifyContent: "center",
            alignItems: "flex-end",
            paddingRight: 20,
          }}
        >
          <TouchableOpacity onPress={onPress}>
            <Button title="X" onPress={onPress} color="white" />
          </TouchableOpacity>
        </View>
        <WebView
          ref={webViewRef}
          source={{
            uri: "https://www.tataplay.com/dth/help?page_reference=OTT",
          }}
          onNavigationStateChange={handleNavChange}
        />
      </View>
      <View style={styles.buttonRow}>
        {canGoBack && (
          <>
            <View style={styles.buttonWrapper}>
              <Button title="←" onPress={goBack} />
            </View>

            <View style={styles.buttonWrapper}>
              <Button title="↻" onPress={refreshPage} />
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webviewContainer: {
    flex: 1,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#fff",
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default App;
