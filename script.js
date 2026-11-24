const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");
const quoteModal = document.getElementById("quoteModal");
const quoteForm = document.getElementById("quoteForm");
const quoteSuccess = document.getElementById("quoteSuccess");
const langButtons = document.querySelectorAll(".lang-button");
const langSwitch = document.querySelector(".lang-switch");

const translations = {
    en: {
        pageTitle: "Painting Services",
        logoTagline: "THESSALONIKI PROFESSIONAL PAINTING",
        navGallery: "Gallery",
        navServices: "Services",
        navQuote: "Get a quote",
        heroTitle: "Flawless <span>finishes</span> for spaces that <span>inspire</span>",
        heroText: "Based in Thessaloniki, Greece, we provide professional interior and exterior painting services. With over 15 years of experience, we focus on clean, high-quality finishes that make every space look its best.",
        heroServices: "Our services",
        heroBottom: "Proudly serving Thessaloniki, Greece and surrounding areas.",
        galleryLabel: "Our work",
        galleryTitle: "Gallery",
        galleryIntro: "A look at recent painting projects around Thessaloniki. Clean finishes, careful prep, and results that last.",
        galleryPrev: "Previous photo",
        galleryNext: "Next photo",
        galleryCap1: "Exterior painting and insulation",
        galleryCap2: "Exterior painting",
        galleryCap3: "Exterior painting",
        galleryCap4: "Interior painting and finishing",
        galleryCap5: "Plasterboard preparation",
        galleryCap6: "Insulation preparation",
        galleryAlt1: "Exterior painting and insulation of a house",
        galleryAlt2: "House exterior with a clean painted facade",
        galleryAlt4: "Modern interior with smooth painted walls",
        galleryAlt5: "Bright kitchen with a professional paint finish",
        servicesLabel: "What we do",
        servicesTitle: "Services",
        servicesIntro: "Professional painting services for homes and businesses in Thessaloniki. We handle the job from surface prep to the final coat.",
        service1Title: "Interior painting",
        service1Alt: "Interior painting of a modern room",
        service1Scope: "Apartments, houses, and offices",
        service1Text: "Even coverage and a clean result, from walls and ceilings to trim. We protect the space and leave it ready to live in.",
        includesLabel: "What's included",
        service1Inc1: "Surface prep and filling",
        service1Inc2: "Furniture and floor protection",
        service1Inc3: "Walls, ceilings, and trim",
        service1Inc4: "Full cleanup after the job",
        service2Title: "Exterior painting",
        service2Alt: "Exterior painting of a house facade",
        service2Scope: "Houses, buildings, and outdoor surfaces",
        service2Text: "Weather-ready finishes for facades, railings, and outdoor surfaces. Built to look sharp and hold up in the Greek climate.",
        service2Inc1: "Facade prep and repairs",
        service2Inc2: "Weather-resistant coatings",
        service2Inc3: "Railings and outdoor details",
        service2Inc4: "Finish suited to local weather",
        visitLabel: "Free site visit",
        visitText: "We come to the property at no cost, see the job in person, and then give you a quote.",
        quoteText: "Leave your name and phone number. We will call you to plan a free site visit and quote.",
        quoteName: "Name",
        quotePhone: "Phone",
        quoteSend: "Send",
        quoteSuccess: "Thank you. We have your details and will call you soon to plan a free site visit.",
        privacyConsent: 'I agree to the processing of my details in order to respond to my message, in accordance with the <a href="privacypolicy.html" target="_blank" rel="noopener">Privacy Policy</a>.',
        footerPrivacy: "Privacy Policy / Πολιτική Απορρήτου",
        closeQuote: "Close",
        language: "Language",
        policyTitle: "Privacy Policy - ISOCOAT",
        policyBack: "Home"
    },
    el: {
        pageTitle: "Ελαιοχρωματισμοί | Βάψιμο",
        logoTagline: "ΘΕΣΣΑΛΟΝΙΚΗ ΕΠΑΓΓΕΛΜΑΤΙΚΟ ΒΑΨΙΜΟ",
        navGallery: "Έργα",
        navServices: "Υπηρεσίες",
        navQuote: "Ζητήστε προσφορά",
        heroTitle: "Άψογα <span>φινιρίσματα</span> για χώρους που <span>εμπνέουν</span>",
        heroText: "Με έδρα τη Θεσσαλονίκη, προσφέρουμε επαγγελματικές υπηρεσίες εσωτερικού και εξωτερικού βαψίματος. Με πάνω από 15 χρόνια εμπειρίας, εστιάζουμε σε καθαρά, υψηλής ποιότητας φινιρίσματα που αναδεικνύουν κάθε χώρο.",
        heroServices: "Οι υπηρεσίες μας",
        heroBottom: "Με υπερηφάνεια εξυπηρετούμε τη Θεσσαλονίκη και τις γύρω περιοχές.",
        galleryLabel: "Τα έργα μας",
        galleryTitle: "Έργα",
        galleryIntro: "Μια ματιά σε πρόσφατα έργα βαψίματος στη Θεσσαλονίκη. Καθαρά φινιρίσματα, προσεκτική προετοιμασία και αποτελέσματα που διαρκούν.",
        galleryPrev: "Προηγούμενη φωτογραφία",
        galleryNext: "Επόμενη φωτογραφία",
        galleryCap1: "Εξωτερικό βάψιμο και μόνωση",
        galleryCap2: "Εξωτερικό βάψιμο",
        galleryCap3: "Εξωτερικό βάψιμο",
        galleryCap4: "Φινίρισμα εσωτερικού χώρου",
        galleryCap5: "Προετοιμασία γυψοσανίδων",
        galleryCap6: "Προετοιμασία μόνωσης",
        galleryAlt1: "Εξωτερικό βάψιμο και μόνωση ενός σπιτιού",
        galleryAlt2: "Εξωτερική όψη σπιτιού με καθαρό βάψιμο",
        galleryAlt4: "Μοντέρνος εσωτερικός χώρος με λείους τοίχους",
        galleryAlt5: "Φωτεινή κουζίνα με επαγγελματικό βάψιμο",
        servicesLabel: "Τι κάνουμε",
        servicesTitle: "Υπηρεσίες",
        servicesIntro: "Επαγγελματικό βάψιμο για κατοικίες και επιχειρήσεις στη Θεσσαλονίκη. Αναλαμβάνουμε το έργο από την προετοιμασία της επιφάνειας μέχρι την τελική στρώση.",
        service1Title: "Εσωτερικό βάψιμο",
        service1Alt: "Εσωτερικό βάψιμο μοντέρνου χώρου",
        service1Scope: "Διαμερίσματα, κατοικίες και γραφεία",
        service1Text: "Ομοιόμορφη κάλυψη και καθαρό αποτέλεσμα, από τοίχους και ταβάνια μέχρι περβάζια. Προστατεύουμε τον χώρο και τον αφήνουμε έτοιμο να κατοικηθεί.",
        includesLabel: "Τι περιλαμβάνεται",
        service1Inc1: "Προετοιμασία και στοκάρισμα επιφανειών",
        service1Inc2: "Προστασία επίπλων και δαπέδων",
        service1Inc3: "Τοίχοι, ταβάνια και περβάζια",
        service1Inc4: "Πλήρης καθαρισμός μετά την εργασία",
        service2Title: "Εξωτερικό βάψιμο",
        service2Alt: "Εξωτερικό βάψιμο πρόσοψης κατοικίας",
        service2Scope: "Κατοικίες, κτίρια και εξωτερικές επιφάνειες",
        service2Text: "Ανθεκτικά φινιρίσματα για προσόψεις, κάγκελα και εξωτερικές επιφάνειες. Φτιαγμένα να φαίνονται όμορφα και να αντέχουν στο ελληνικό κλίμα.",
        service2Inc1: "Προετοιμασία και επισκευές πρόσοψης",
        service2Inc2: "Ανθεκτικά στις καιρικές συνθήκες χρώματα",
        service2Inc3: "Κάγκελα και εξωτερικές λεπτομέρειες",
        service2Inc4: "Φινίρισμα κατάλληλο για το τοπικό κλίμα",
        visitLabel: "Δωρεάν επίσκεψη",
        visitText: "Ερχόμαστε στον χώρο χωρίς χρέωση, βλέπουμε το έργο από κοντά και μετά σας δίνουμε προσφορά.",
        quoteText: "Αφήστε το όνομα και το τηλέφωνό σας. Θα σας καλέσουμε για να κλείσουμε δωρεάν επίσκεψη και προσφορά.",
        quoteName: "Όνομα",
        quotePhone: "Τηλέφωνο",
        quoteSend: "Αποστολή",
        quoteSuccess: "Ευχαριστούμε. Έχουμε τα στοιχεία σας και θα σας καλέσουμε σύντομα για δωρεάν επίσκεψη.",
        privacyConsent: 'Συμφωνώ με την επεξεργασία των στοιχείων μου για την απάντηση στο μήνυμά μου, σύμφωνα με την <a href="privacypolicy.html" target="_blank" rel="noopener">Πολιτική Απορρήτου</a>.',
        footerPrivacy: "Πολιτική Απορρήτου / Privacy Policy",
        closeQuote: "Κλείσιμο",
        language: "Γλώσσα",
        policyTitle: "Πολιτική Απορρήτου - ISOCOAT",
        policyBack: "Αρχική"
    }
};

function closeMenu() {
    if (navLinks) {
        navLinks.classList.remove("active");
    }
}

function applyLanguage(lang) {
    const copy = translations[lang] || translations.en;

    document.documentElement.lang = lang;
    document.title = copy.pageTitle || copy.policyTitle;
    if (langSwitch) {
        langSwitch.setAttribute("aria-label", copy.language);
    }

    document.querySelectorAll(".policy-section[lang]").forEach((section) => {
        section.hidden = section.lang !== lang;
    });

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (copy[key]) {
            element.textContent = copy[key];
        }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
        const key = element.getAttribute("data-i18n-html");
        if (copy[key]) {
            element.innerHTML = copy[key];
        }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
        const key = element.getAttribute("data-i18n-alt");
        if (copy[key]) {
            element.setAttribute("alt", copy[key]);
        }
    });

    document.querySelectorAll("[data-i18n-caption]").forEach((element) => {
        const key = element.getAttribute("data-i18n-caption");
        if (copy[key]) {
            element.setAttribute("data-caption", copy[key]);
        }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
        const key = element.getAttribute("data-i18n-aria");
        if (copy[key]) {
            element.setAttribute("aria-label", copy[key]);
        }
    });

    langButtons.forEach((button) => {
        const isActive = button.dataset.lang === lang;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    localStorage.setItem("isocoat-lang", lang);
}

if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    navLinks.addEventListener("click", (event) => {
        if (event.target.closest("a, [data-open-quote]")) {
            closeMenu();
        }
    });
}

function openQuote() {
    closeMenu();
    quoteSuccess.hidden = true;
    quoteForm.hidden = false;
    quoteForm.reset();
    quoteModal.hidden = false;
    document.body.classList.add("quote-open");
    quoteForm.querySelector("input[name='name']").focus();
}

function closeQuote() {
    quoteModal.hidden = true;
    document.body.classList.remove("quote-open");
}

if (quoteForm && quoteModal && quoteSuccess) {
    document.querySelectorAll("[data-open-quote]").forEach((button) => {
        button.addEventListener("click", openQuote);
    });

    document.querySelectorAll("[data-close-quote]").forEach((element) => {
        element.addEventListener("click", closeQuote);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !quoteModal.hidden) {
            closeQuote();
        }
    });

    quoteForm.addEventListener("submit", (event) => {
        event.preventDefault();
        quoteForm.hidden = true;
        quoteSuccess.hidden = false;
    });
}

langButtons.forEach((button) => {
    button.addEventListener("click", () => {
        applyLanguage(button.dataset.lang);
    });
});

const savedLang = localStorage.getItem("isocoat-lang");
applyLanguage(savedLang === "el" || savedLang === "en" ? savedLang : "el");

const gallerySlides = [...document.querySelectorAll(".gallery-slide")];
const galleryDots = document.getElementById("galleryDots");
let galleryIndex = 0;
let galleryDragged = false;

if (gallerySlides.length) {
    gallerySlides.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("aria-label", String(index + 1));
        dot.addEventListener("click", () => showGallerySlide(index));
        galleryDots.append(dot);
    });

    function showGallerySlide(index) {
        const total = gallerySlides.length;
        galleryIndex = (index + total) % total;

        gallerySlides.forEach((slide, slideIndex) => {
            slide.classList.toggle("is-active", slideIndex === galleryIndex);
            slide.classList.toggle("is-prev", slideIndex === (galleryIndex - 1 + total) % total);
            slide.classList.toggle("is-next", slideIndex === (galleryIndex + 1) % total);
        });

        galleryDots.querySelectorAll("button").forEach((dot, dotIndex) => {
            dot.classList.toggle("is-active", dotIndex === galleryIndex);
        });
    }

    document.querySelector("[data-gallery-prev]").addEventListener("click", () => {
        showGallerySlide(galleryIndex - 1);
    });

    document.querySelector("[data-gallery-next]").addEventListener("click", () => {
        showGallerySlide(galleryIndex + 1);
    });

    const galleryStage = document.querySelector(".gallery-stage");
    let pointerStartX = 0;

    galleryStage.addEventListener("pointerdown", (event) => {
        pointerStartX = event.clientX;
        galleryDragged = false;
    });

    galleryStage.addEventListener("pointerup", (event) => {
        const distance = event.clientX - pointerStartX;
        if (Math.abs(distance) > 40) {
            galleryDragged = true;
            showGallerySlide(galleryIndex + (distance < 0 ? 1 : -1));
        }
    });

    gallerySlides.forEach((slide) => {
        slide.addEventListener("click", (event) => {
            if (galleryDragged) {
                event.preventDefault();
                event.stopPropagation();
            }
        });
    });

    if (typeof Fancybox !== "undefined") {
        Fancybox.bind("[data-fancybox='works']", {
            Hash: false,
            Images: {
                zoom: true
            }
        });
    }

    showGallerySlide(0);
}