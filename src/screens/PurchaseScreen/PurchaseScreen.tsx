import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

import {
  CustomButton,
  ModalScreenWrapper,
  PurchaseItem,
  PurchasePlan,
} from "@/components/ui";
import { COLORS, PURCHASE_ADVANTAGES, PURCHASE_PLANS } from "@/constants";
import { useThemeContext } from "@/context/hooks";
import { ScreenProps } from "@/types";

import styles from "./PurchaseScreen.styles";

export const PurchaseScreen: FC<ScreenProps<"Purchase">> = ({ navigation }) => {
  const { t } = useTranslation();
  const closeModal = () => navigation.goBack();
  const [activePlan, setActivePlan] = useState(1);
  const { theme } = useThemeContext();
  const style = styles(theme);

  const onSubmitPress = () => {};

  return (
    <ModalScreenWrapper title={`${t("PURCHASE")}`} onRequestClose={closeModal}>
      <View style={style.container}>
        <View style={style.mainWrapper}>
          <Text style={style.title}>Unlock Premium Features:</Text>
          <Text style={style.subTitle}>
            Upgrade to a Paid Subscription Today!
          </Text>
          <Text style={style.cancel}>Cancel any time, No Commitments</Text>
          <View style={style.items}>
            {PURCHASE_ADVANTAGES.map(({ id, title, icon }) => (
              <PurchaseItem key={id} icon={icon} title={title} />
            ))}
          </View>
          <View style={style.planWrapper}>
            {PURCHASE_PLANS.map(({ id, duration, price, description }) => (
              <PurchasePlan
                key={id}
                profitable={activePlan === 1}
                onPress={() => setActivePlan(id)}
                isActive={activePlan === id}
                duration={duration}
                price={price}
                description={description}
              />
            ))}
          </View>
          <Text style={style.description}>
            By tapping Continue, you agree to subscribe to an auto-renewal
            Premium plan via Apple. Unless cancelled at least 24-hours prior to
            the renewal date, the subscription will be charged on that date. The
            plan's payment will be charged every 12 months. By tapping Continue,
            you agree to our Privacy Policy, Pricing Terms & Terms of Service.
            Subscriptions and auto-renewals can be managed via Apple.
          </Text>
        </View>
        <CustomButton fullWidth bgColor={COLORS.GREEN} onPress={onSubmitPress}>
          Continue
        </CustomButton>
      </View>
    </ModalScreenWrapper>
  );
};
