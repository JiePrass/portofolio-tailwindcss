/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "kscript": ['Kaushan Script'],
        "ave": ['Sedgwick Ave'],
        "poppins": ['Poppins'],
        "montserat": ['Montserrat Alternates'],
        "roboto": ['Roboto'],
        "robotocon": ['Roboto Condensed']
      },
      colors: {
        "b-green": ['#60AF9C'],
        "stone": ['#CACACA'],
        "darkstone": ['#555555'],
        "lightstone": ['#D9D9D9'],
        "blue-dtm": ['#6E8B95'],
        "nerd-brown": ['#A69486'],
        "orange-lib": ['#F69953'],
        "skuy-gray": ['#556464'],
        "c-gray": ['#3E4241'],
        "heart": ['#F33A6A']
      }
    },
  },
  plugins: [],
}

