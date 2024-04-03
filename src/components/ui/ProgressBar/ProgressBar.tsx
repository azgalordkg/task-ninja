import React, { FC, useEffect, useMemo, useState } from "react";
import { Animated, Text, View } from "react-native";

import styles from "./ProgressBar.styles";
import { Props } from "./ProgressBar.types";

export const ProgressBar: FC<Props> = ({ current, total = 0 }) => {
  const [animatedProgress] = useState(new Animated.Value(0));

  const progress = useMemo(() => {
    if (total && current) {
      if (current >= total) {
        return 100;
      }
      return current / (total / 100);
    }
    return 0;
  }, [total, current]);

  useEffect(() => {
    Animated.timing(animatedProgress, {
      toValue: progress,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const widthInterpolated = animatedProgress.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  const style = styles(progress, total === 0);
  return (
    <View style={style.container}>
      <View style={style.wrapper}>
        <View style={style.progressBackground} />
        <Animated.View style={[style.progress, { width: widthInterpolated }]} />
      </View>
      {total > 0 && (
        <Text style={style.text}>
          {current}/{total}
        </Text>
      )}
    </View>
  );
};
