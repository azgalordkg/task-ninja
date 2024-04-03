import ReactNativeHapticFeedback, {
  HapticFeedbackTypes,
} from "react-native-haptic-feedback";

export const vibrate = (
  method: string | HapticFeedbackTypes = HapticFeedbackTypes.selection,
) => {
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  ReactNativeHapticFeedback.trigger(method, options);
};
