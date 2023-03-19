import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import * as Font from "expo-font";

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regulat": require("../../../img/Fonts/Robot/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../../img/Fonts/Robot/Roboto-Medium.ttf"),
  });
};

loadFonts();

export function Input({
  name,
  setValue,
  keyboardType,
  secureText,
  show,
  value,
  autoComplete,
}) {
  const [showPass, setShowPass] = useState(false);

  const sendShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <View style={style.container}>
      {show ? (
        <>
          <TextInput
            style={show ? style.inputShow : style.input}
            placeholder={name}
            value={value}
            autoComplete={autoComplete}
            onChangeText={(e) => setValue(e)}
            keyboardType={keyboardType}
            secureTextEntry={showPass ? false : true}
          ></TextInput>

          <TouchableOpacity style={style.buttonShowPass} onPress={sendShowPass}>
            <Text style={style.buttonText}>
              {showPass ? "Приховати" : "Показати"}
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <TextInput
          style={show ? style.inputShow : style.input}
          placeholder={name}
          value={value}
          autoComplete={autoComplete}
          onChangeText={(e) => setValue(e)}
          keyboardType={keyboardType}
          secureTextEntry={secureText ? true : false}
        ></TextInput>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",

    width: "100%",
    height: 50,
    paddingLeft: 16,
    paddingRight: 16,

    backgroundColor: "#F6F6F6",

    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 16,
  },

  input: {
    alignItems: "center",
    justifyContent: "center",

    height: "100%",
    width: "100%",
  },

  inputShow: {
    alignItems: "center",
    justifyContent: "center",

    height: "100%",
    width: "70%",

    paddingRight: 8,
  },

  buttonShowPass: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#F6F6F6",
  },
  buttonText: {
    color: "#1B4371",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
  },
});
export default Input;
