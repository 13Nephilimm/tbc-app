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
      b: "B",
      log: "log",
      n: "N",
      ewProduct: "ew Product",
      art: "art",
      ewPost: "ew Post",

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
      a: "A",
      ll: "ll",
      ame: "ames",
      sortBy: "Sort By:",
      name: "Name",
      price: "Price",
      releaseYear: "Release Year",

      // CONTACT PAGE
      email: "Email",
      sendMessage: "Send a message",
      messenger: "Messenger",
      phoneNumber: "Phone Number",
      callMe: "Call Us",
      fullName: "Your Full Name",

      // PROFILE PAGE
      myProfile: "My Profile",
      username: "Username",
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

      // UPLOAD NEW POST/GAME
      gameName: "Game Name",
      description: "Description",
      genre: "Genre",
      review: "Review",
      thumbnail: "Thumbnail",
      images: "Images",
      upload: "Upload",
      title: "Title",
      image: "Image",
      body: "Body",
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
      b: "ბ",
      log: "ლოგი",
      n: "ა",
      ewProduct: "ხალი პროდუქტი",
      art: "ალათა",
      ewPost: "ხალი პოსტი",

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
      a: "ყ",
      ll: "ველა",
      ame: "როდუქტი",
      sortBy: "დალაგება:",
      name: "სახელით",
      price: "ფასით",
      releaseYear: "გამოსვლის თარიღით",

      // CONTACT PAGE
      email: "მეილი",
      sendMessage: "შეტყობინების გაგზავნა",
      messenger: "მესენჯერი",
      phoneNumber: "ტელ. ნომერი",
      callMe: "დაგვირეკეთ",
      fullName: "სრული სახელი",

      // PROFILE PAGE
      myProfile: "ჩემი პროფილი",
      username: "მომხმარებლის სახელი",
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

      // UPLOAD NEW POST/GAME
      gameName: "თამაშის სახელი",
      description: "აღწერა",
      genre: "ჟანრი",
      review: "შეფასება",
      thumbnail: "გარეკანის ფოტო",
      images: "დამატებითი ფოტოები",
      upload: "ატვირთვა",
      title: "სათაური",
      image: "ფოტო",
      body: "ტექსტი",
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
