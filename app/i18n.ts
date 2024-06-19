import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // HEADER
      home: "Home",
      contact: "Contact",
      blog: "Blog",
      profile: "Profile",
      logOut: "Log Out",
      h: "H",
      ome: "ome",
      g: "G",
      ames: "ames",
      c: "C",
      ontact: "ontact",
      p: "P",
      rofile: "rofile",
      a: "A",
      dmin: "dmin",
      b: "B",
      log: "log",

      // FOOTER
      privacyPolicy: "Privacy Policy",
      termsAndConditions: "Terms and Conditions",
      yourEmail: "Your Email",
      send: "Send",
      leaveMessage: "Send us your message...",

      // PRODUCTS GRID
      search: "Search...",
      sort: "Sort",
      addToCart: "Add to Cart",

      // CONTACT PAGE
      email: "Email",
      sendMessage: "Send a message",
      messenger: "Messenger",
      phoneNumber: "Phone Number",
      callMe: "Call Us",
      fullName: "Your Full Name",

      // PROFILE PAGE
      myProfile: "My Profile",
      name: "Name",
      lastName: "Lastname",
      newPassword: "New Password",
      confirmNewPassword: "Confirm New Password",
      save: "Save",

      // HOME PAGE
      your: "Your",
      gateway: "Gateway",
      toThe: "to the",
      gaming: "Gaming",
      paradise: "Paradise",
      seeMore: "See More",
    },
  },

  ge: {
    translation: {
      // HEADER
      home: "მთავარი",
      contact: "კონტაქტი",
      blog: "ბლოგი",
      profile: "პროფილი",
      logOut: "გასვლა",
      h: "მ",
      ome: "თავარი",
      g: "პ",
      ames: "როდუქტები",
      c: "კ",
      ontact: "ონტაქტი",
      p: "პ",
      rofile: "როფილი",
      a: "ა",
      dmin: "დმინი",
      b: "ბ",
      log: "ლოგი",

      // FOOTER
      privacyPolicy: "კონფიდენციალურობის პოლიტიკა",
      termsAndConditions: "წესები და პირობები",
      yourEmail: "თქვენი მეილი",
      send: "გაგზავნა",
      leaveMessage: "დაგვიტოვეთ შეტყობინება...",

      // PRODUCTS GRID
      search: "ძიება...",
      sort: "დალაგება",
      addToCart: "კალათაში დამატება",

      // CONTACT PAGE
      email: "მეილი",
      sendMessage: "შეტყობინების გაგზავნა",
      messenger: "მესენჯერი",
      phoneNumber: "ტელ. ნომერი",
      callMe: "დაგვირეკეთ",
      fullName: "სრული სახელი",

      // PROFILE PAGE
      myProfile: "ჩემი პროფილი",
      name: "სახელი",
      lastName: "გვარი",
      newPassword: "ახალი პაროლი",
      confirmNewPassword: "გაიმეორეთ ახალი პაროლი",
      save: "შენახვა",

      // HOME PAGE
      your: "შენი",
      gateway: "კარიბჭე",
      toThe: "",
      gaming: "გეიმინგ",
      paradise: "სამოთხეში",
      seeMore: "იხილეთ მეტი",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
