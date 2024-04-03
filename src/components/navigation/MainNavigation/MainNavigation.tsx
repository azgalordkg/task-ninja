import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { useSelector } from "react-redux";

import { Loader } from "@/components/ui";
import {
  AboutUsScreen,
  AccountScreen,
  AuthScreen,
  CreateLabelScreen,
  CreateTaskScreen,
  DashboardScreen,
  DocumentsScreen,
  LabelSettingsScreen,
  LanguageScreen,
  ManageLabelsScreen,
  PasswordScreen,
  PurchaseScreen,
  ResetPasswordScreen,
  SettingsScreen,
  TasksScreen,
  ThemeScreen,
  UpcomingScreen,
} from "@/screens";
import { selectCurrentUser, useGetMeQuery } from "@/store/apis/auth";
import { RootStackParamList } from "@/types";

const AppStack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <AppStack.Navigator
    initialRouteName="Dashboard"
    screenOptions={{
      headerShown: false,
    }}>
    <AppStack.Group>
      <AppStack.Screen name="Dashboard" component={DashboardScreen} />
      <AppStack.Screen name="Tasks" component={TasksScreen} />
      <AppStack.Screen name="Settings" component={SettingsScreen} />
      <AppStack.Screen name="LabelSettings" component={LabelSettingsScreen} />
      <AppStack.Screen name="Upcoming" component={UpcomingScreen} />
    </AppStack.Group>
    <AppStack.Group
      screenOptions={{
        presentation: "modal",
        contentStyle: { backgroundColor: "transparent" },
      }}>
      <AppStack.Screen name="Language" component={LanguageScreen} />
      <AppStack.Screen name="Theme" component={ThemeScreen} />
      <AppStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <AppStack.Screen name="CreateTask" component={CreateTaskScreen} />
      <AppStack.Screen name="ManageLabels" component={ManageLabelsScreen} />
      <AppStack.Screen name="CreateLabel" component={CreateLabelScreen} />
      <AppStack.Screen name="Documents" component={DocumentsScreen} />
      <AppStack.Screen name="AboutUs" component={AboutUsScreen} />
      <AppStack.Screen name="Purchase" component={PurchaseScreen} />
      <AppStack.Screen name="Account" component={AccountScreen} />
      <AppStack.Screen name="Password" component={PasswordScreen} />
    </AppStack.Group>
  </AppStack.Navigator>
);

const AuthNavigator = () => (
  <AuthStack.Navigator
    initialRouteName="Auth"
    screenOptions={{
      headerShown: false,
    }}>
    <AppStack.Group
      screenOptions={{
        presentation: "modal",
        contentStyle: { backgroundColor: "transparent" },
      }}>
      <AppStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </AppStack.Group>
    <AuthStack.Screen name="Auth" component={AuthScreen} />
  </AuthStack.Navigator>
);

export const MainNavigation: FC = () => {
  const { isLoading } = useGetMeQuery();
  const userInfo = useSelector(selectCurrentUser);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      {userInfo ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
