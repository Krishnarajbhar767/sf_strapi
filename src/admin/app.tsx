import logo from "./extensions/LOGO_SF.png";
const config = {
    // Replace the Strapi logo in auth (login) views
    auth: {
        logo,
    },
    // Replace the favicon
    head: {
        title: "Srijab Fabs",
        favicon: logo,
    },
    // Replace the Strapi logo in the main navigation
    menu: {
        logo,
    },
    // Extend the translations
    translations: {
        en: {
            "app.components.LeftMenu.navbrand.title": "Dashboard",

            "app.components.LeftMenu.navbrand.workplace": "Workplace",

            "Auth.form.welcome.title": "Welcom to Srijab Fabs",

            "Auth.form.welcome.subtitle": "Login to your account",

            "Settings.profile.form.section.experience.interfaceLanguageHelp":
                "Preference changes will apply only to you.",
        },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
};

const bootstrap = (app) => {
    console.log("Printing app", app);
};

export default {
    config,
    bootstrap,
};
