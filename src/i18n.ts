import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "about": "About Us",
        "tours": "Tours",
        "nile_cruise": "Nile Cruise",
        "policies": "Policies",
        "contact": "Contact Us"
      },
      "hero": {
        "title": "Experience the Art of Luxury Travel",
        "subtitle": "Egypt's most exclusive tours and Nile cruises, crafted for the discerning traveler."
      },
      "footer": {
        "destinations": "Destinations",
        "newsletter": "Newsletter",
        "newsletter_sub": "Stay updated with our latest luxury offers.",
        "placeholder": "Email",
        "copyright": "© 2026 Egypt Holiday Aswan Ltd. All rights reserved."
      },
      "contact": {
        "title": "Get In Touch",
        "subtitle": "Have questions? Our team is available 24/7 via WhatsApp and email."
      }
    }
  },
  fr: {
    translation: {
      "nav": {
        "home": "Accueil",
        "about": "À Propos",
        "tours": "Circuits",
        "nile_cruise": "Croisière sur le Nil",
        "policies": "Politiques",
        "contact": "Contactez-nous"
      },
      "hero": {
        "title": "Découvrez l'Art du Voyage de Luxe",
        "subtitle": "Les circuits et croisières sur le Nil les plus exclusifs d'Égypte, conçus pour les voyageurs exigeants."
      },
      "footer": {
        "destinations": "Destinations",
        "newsletter": "Bulletin",
        "newsletter_sub": "Restez informé de nuestras últimas ofertas de lujo.",
        "placeholder": "E-mail",
        "copyright": "© 2026 Egypt Holiday Aswan Ltd. Tous droits réservés."
      },
      "contact": {
        "title": "Contactez-nous",
        "subtitle": "Vous avez des questions ? Notre équipe est disponible 24h/24 et 7j/7 via WhatsApp et e-mail."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
