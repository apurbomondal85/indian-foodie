import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4'
  },
  section: {
    marginBottom: 10,
    padding: 15,
  }
});
const text = StyleSheet.create({
  section: {
    marginBottom: 10,
    fontSize: 20,
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={text.section}>1. What is a custom hook, and why will you create a custom hook?</Text>
        <Text>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</Text>
      </View>
      <View style={styles.section}>
        <Text style={text.section}>2. Tell us the difference between nodejs and express js?</Text>
        <Text>NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</Text>
      </View>
      <View style={styles.section}>
        <Text style={text.section}>3. How to validate React props using PropTypes?</Text>
        <Text>PropTypes is a library in React that is used to validate the props passed to a component. It is a type checking library that helps to ensure that the props passed to a component have the correct type and format. Here's an example of how to use PropTypes to validate props in a React component.</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument