import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { evaluateExpression, validateInput } from '../mathFunctions';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    const operatorForLogic = value === 'x' ? '*' : value;
    if (validateInput(input, operatorForLogic)) {
      setInput((prev) => prev + operatorForLogic);
    }
  };

  const handleCalculate = () => {
    if (!input) return;
    const finalResult = evaluateExpression(input);
    setResult(finalResult);
    if (finalResult !== 'Error') {
        setInput(finalResult);
    }
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
    setResult('');
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const CalcButton = ({ label, onPress, type = 'number' }) => {
    let bgColor = '#333333';
    let txtColor = 'white';

    if (type === 'operator') {
        bgColor = '#FF9500';
    } else if (type === 'action') {
        bgColor = '#A5A5A5';
        txtColor = 'black';
    }

    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: bgColor }]}
        onPress={onPress}
      >
        <Text style={[styles.buttonText, { color: txtColor }]}>{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.inputText} numberOfLines={1} adjustsFontSizeToFit>
            {input.replace(/\*/g, 'x') || '0'}
        </Text>
        <Text style={styles.resultText}>
            {result ? `= ${result}` : ''}
        </Text>
      </View>
      <View style={styles.buttonsGrid}>
        <View style={styles.row}>
          <CalcButton label="DEL" onPress={handleDelete} type="action" />
        </View>

        <View style={styles.row}>
          <CalcButton label="7" onPress={() => handlePress('7')} />
          <CalcButton label="8" onPress={() => handlePress('8')} />
          <CalcButton label="9" onPress={() => handlePress('9')} />
          <CalcButton label="x" onPress={() => handlePress('x')} type="operator" />
        </View>

        <View style={styles.row}>
          <CalcButton label="4" onPress={() => handlePress('4')} />
          <CalcButton label="5" onPress={() => handlePress('5')} />
          <CalcButton label="6" onPress={() => handlePress('6')} /> 
          <CalcButton label="÷" onPress={() => handlePress('/')} type="operator" />
        </View>

        <View style={styles.row}>
          <CalcButton label="1" onPress={() => handlePress('1')} />
          <CalcButton label="2" onPress={() => handlePress('2')} />
          <CalcButton label="3" onPress={() => handlePress('3')} />
          <CalcButton label="=" onPress={handleCalculate} type="operator" />
        </View>

        <View style={styles.row}>
          <CalcButton label="0" onPress={() => handlePress('0')} />
          <CalcButton label="," onPress={() => handlePress(',')} />
          <View style={{ flex: 3 }} /> 
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
  },
  displayContainer: {
    padding: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  inputText: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  resultText: {
    color: 'gray',
    fontSize: 30,
    textAlign: 'right',
  },
  buttonsGrid: {
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Calculator;