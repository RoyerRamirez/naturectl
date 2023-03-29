import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Animated } from 'react-native';

const LaunchScreen = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = +new Date('2023-11-01') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  function addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <ImageBackground source={require('./assets/bg.jpg')} style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Nature CTL is Coming Soon!</Text>
        <View style={styles.counterContainer}>
          <View style={styles.counterBox}>
            <Text style={styles.counterValue}>{addLeadingZeros(days)}</Text>
            <Text style={styles.counterLabel}>DAYS</Text>
          </View>
          <Text style={styles.colon}>:</Text>
          <View style={styles.counterBox}>
            <Text style={styles.counterValue}>{addLeadingZeros(hours)}</Text>
            <Text style={styles.counterLabel}>HOURS</Text>
          </View>
          <Text style={styles.colon}>:</Text>
          <View style={styles.counterBox}>
            <Text style={styles.counterValue}>{addLeadingZeros(minutes)}</Text>
            <Text style={styles.counterLabel}>MINUTES</Text>
          </View>
          <Text style={styles.colon}>:</Text>
          <View style={styles.counterBox}>
            <Text style={styles.counterValue}>{addLeadingZeros(seconds)}</Text>
            <Text style={styles.counterLabel}>SECONDS</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  contentContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: .0001,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  title: {
    color: '#254117',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    textShadowColor: '#fff',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2,
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  counterBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 5,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  counterValue: {
    color: '#254117',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2,
  },
  counterLabel: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    textShadowColor: '#000',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2,
  },
  colon: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 5,
    marginRight: 5,
    textShadowColor: '#000',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2,
  },
});

export default LaunchScreen;
