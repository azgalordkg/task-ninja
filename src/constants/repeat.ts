import { TFunction } from "i18next";

export const getRepeatList = (
  t: TFunction<"translation", undefined, "translation">,
) => {
  return [
    { label: t("NEVER"), value: "Never" },
    { label: t("DAILY"), value: "Daily" },
    { label: t("WEEKLY"), value: "Weekly" },
    { label: t("MONTHLY"), value: "Monthly" },
    { label: t("YEARLY"), value: "Yearly" },
  ];
};
