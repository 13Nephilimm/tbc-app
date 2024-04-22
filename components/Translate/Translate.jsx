// TRANSLATE
const { t, i18n } = useTranslation();

const toggleLanguage = () => {
  const currentLanguage = i18n.language;
  const nextLanguage = currentLanguage === "en" ? "ge" : "en";
  i18n.changeLanguage(nextLanguage);
};
