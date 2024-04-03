import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Dashboard: undefined;
  Tasks?: { isUnscheduled?: boolean };
  AboutUs: undefined;
  Settings: undefined;
  ManageLabels: undefined;
  LabelSettings: undefined;
  AppIcon: undefined;
  ContactUs: undefined;
  RateUs: undefined;
  Purchase: undefined;
  Documents?: { isPrivacyPolicy?: boolean };
  CreateLabel?: { id?: number };
  CreateTask?: { id?: string; isUnscheduled?: boolean; startDate?: string };
  Theme: undefined;
  Language: undefined;
  Upcoming: undefined;
  Auth: undefined;
  ResetPassword: undefined;
  Account: undefined;
  Password?: { withPassword?: boolean };
};

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
