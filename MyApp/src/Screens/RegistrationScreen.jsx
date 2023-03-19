import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { Input } from "../Components/Input";
import { ButtonAuth } from "../Components/Button";

SplashScreen.preventAutoHideAsync();

export function SingIn() {
  const [isReady, setIsReady] = useState(false);

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keyboardShow, setKeyboardShow] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardShow(false);
    });

    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardShow(true);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Roboto-Regulat": require("../../img/Fonts/Robot/Roboto-Regular.ttf"),
          "Roboto-Medium": require("../../img/Fonts/Robot/Roboto-Medium.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  const onSubmit = (e) => {
    console.log(`login: ${login}; email: ${email}; password: ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={style.continue} onLayout={onLayoutRootView}>
        <ImageBackground
          source={require("../../public/PhotoBG.jpg")}
          style={style.imageBg}
        >
          <View style={style.containerAuth}>
            <View style={style.imageUser}>
              <View style={style.iconAdd}></View>
            </View>

            <Text style={style.titelText}>Регистрация</Text>

            <View style={style.containerInput}>
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <Input
                  name="Логін"
                  setValue={setLogin}
                  value={login}
                  keyboardType="default"
                  autoComplete="name"
                ></Input>
                <Input
                  name="Адресa електронної пошти"
                  setValue={setEmail}
                  value={email}
                  autoComplete="email"
                  keyboardType="email-address"
                ></Input>
                <Input
                  name="Пароль"
                  setValue={setPassword}
                  value={password}
                  autoComplete="new-password"
                  secureText="true"
                  show="true"
                ></Input>
              </KeyboardAvoidingView>
            </View>

            {keyboardShow ? (
              <View style={style.containerButton}>
                <ButtonAuth name="Зареєструватися" onSubmit={onSubmit} />

                <Text style={style.textAuth}>Уже є аккаунт? Увійти</Text>
              </View>
            ) : null}
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  continue: {
    flex: 1,
  },

  imageBg: {
    position: "relative",

    flex: 1,

    resizeMode: "cover",

    alignItems: "center",
    justifyContent: "flex-end",
  },

  containerAuth: {
    width: "100%",
    paddingBottom: 45,
    paddingLeft: 16,
    paddingRight: 16,

    backgroundColor: "#fff",

    alignItems: "center",

    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },

  imageUser: {
    position: "absolute",

    transform: [{ translateY: -60 }],

    width: 120,
    height: 120,
    backgroundColor: "#000",

    borderRadius: 16,
  },

  iconAdd: {
    width: 25,
    height: 25,
    position: "absolute",
    right: 0,
    transform: [{ translateX: 12 }],

    bottom: 15,
    backgroundColor: "#fff000",
  },

  titelText: {
    fontSize: 30,
    letterSpacing: 0.01,
    lineHeight: 35,
    fontStyle: "normal",
    color: "#212121",
    fontFamily: "Roboto-Medium",

    marginTop: 92,
  },

  containerInput: {
    marginTop: 32,
    width: "100%",
  },

  containerButton: {
    marginTop: 27,
    width: "100%",
  },

  textAuth: {
    textAlign: "center",
    color: "#1B4371",
    fontFamily: "Roboto-Medium",

    fontSize: 16,
    lineHeight: 19,
    marginTop: 16,
  },
});

export default SingIn;
