const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");
const quoteModal = document.getElementById("quoteModal");
const quoteForm = document.getElementById("quoteForm");
const quoteSuccess = document.getElementById("quoteSuccess");
const langButtons = document.querySelectorAll(".lang-button");
const langSwitch = document.querySelector(".lang-switch");

const translations = {
    en: {
        pageTitle: "Painting | Insulation",
        logoTagline: "THESSALONIKI PAINTING AND ISOLATION",
        navGallery: "Gallery",
        navServices: "Services",
        navQuote: "Get a quote",
        heroTitle: "We provide today's <span>insulation</span> for a lifetime of <span>comfort</span>",
        heroText: "Based in Thessaloniki, Greece, we provide professional interior and exterior painting services. With over 15 years of experience, we focus on clean, high-quality finishes that make every space look its best.",
        heroServices: "Our services",
        heroBottom: "Proudly serving Thessaloniki, Greece and surrounding areas.",
        galleryLabel: "Our work",
        galleryTitle: "Gallery",
        galleryIntro: "A look at recent painting and insulation projects around Thessaloniki. Clean finishes, careful prep, and results that last.",
        galleryPrev: "Previous photo",
        galleryNext: "Next photo",
        galleryCap1: "Interior painting",
        galleryCap2: "Exterior painting",
        galleryCap3: "Thermal insulation",
        galleryCap4: "Wall finishing",
        galleryCap5: "Residential interiors",
        galleryAlt1: "Freshly painted living room with even white walls",
        galleryAlt2: "House exterior with a clean painted facade",
        galleryAlt3: "Building insulation and construction finishing work",
        galleryAlt4: "Modern interior with smooth painted walls",
        galleryAlt5: "Bright kitchen with a professional paint finish",
        servicesLabel: "What we do",
        servicesTitle: "Services",
        servicesIntro: "Professional painting and insulation for homes and businesses in Thessaloniki. We handle the job from surface prep to the final coat.",
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
        service3Title: "Thermal insulation",
        service3Alt: "Thermal insulation work on a building",
        service3Scope: "Homes and commercial spaces",
        service3Text: "Insulation that cuts heat loss, keeps rooms comfortable year-round, and helps lower energy costs for the long term.",
        service3Inc1: "On-site check and measurements",
        service3Inc2: "Thermal insulation installation",
        service3Inc3: "Sealing and finishing",
        service3Inc4: "Better comfort, lower energy use",
        visitLabel: "Free site visit",
        visitText: "We come to the property at no cost, see the job in person, and then give you a quote.",
        quoteText: "Leave your name and phone number. We will call you to plan a free site visit and quote.",
        quoteName: "Name",
        quotePhone: "Phone",
        quoteSend: "Send",
        quoteSuccess: "Thank you. We have your details and will call you soon to plan a free site visit.",
        closeQuote: "Close",
        language: "Language"
    },
    el: {
        pageTitle: "Βάψιμο | Μόνωση",
        logoTagline: "ΘΕΣΣΑΛΟΝΙΚΗ ΒΑΨΙΜΟ ΚΑΙ ΜΟΝΩΣΗ",
        navGallery: "Έργα",
        navServices: "Υπηρεσίες",
        navQuote: "Ζητήστε προσφορά",
        heroTitle: "Προσφέρουμε τη σημερινή <span>μόνωση</span> για μια ζωή <span>άνεσης</span>",
        heroText: "Με έδρα τη Θεσσαλονίκη, προσφέρουμε επαγγελματικές υπηρεσίες εσωτερικού και εξωτερικού βαψίματος. Με πάνω από 15 χρόνια εμπειρίας, εστιάζουμε σε καθαρά, υψηλής ποιότητας φινιρίσματα που αναδεικνύουν κάθε χώρο.",
        heroServices: "Οι υπηρεσίες μας",
        heroBottom: "Με υπερηφάνεια εξυπηρετούμε τη Θεσσαλονίκη και τις γύρω περιοχές.",
        galleryLabel: "Τα έργα μας",
        galleryTitle: "Έργα",
        galleryIntro: "Μια ματιά σε πρόσφατα έργα βαψίματος και μόνωσης στη Θεσσαλονίκη. Καθαρά φινιρίσματα, προσεκτική προετοιμασία και αποτελέσματα που διαρκούν.",
        galleryPrev: "Προηγούμενη φωτογραφία",
        galleryNext: "Επόμενη φωτογραφία",
        galleryCap1: "Εσωτερικό βάψιμο",
        galleryCap2: "Εξωτερικό βάψιμο",
        galleryCap3: "Θερμομόνωση",
        galleryCap4: "Φινίρισμα τοίχων",
        galleryCap5: "Εσωτερικοί χώροι κατοικιών",
        galleryAlt1: "Σαλόνι με φρεσκοβαμμένους λευκούς τοίχους",
        galleryAlt2: "Εξωτερική όψη σπιτιού με καθαρό βάψιμο",
        galleryAlt3: "Εργασίες θερμομόνωσης και φινιρίσματος",
        galleryAlt4: "Μοντέρνος εσωτερικός χώρος με λείους τοίχους",
        galleryAlt5: "Φωτεινή κουζίνα με επαγγελματικό βάψιμο",
        servicesLabel: "Τι κάνουμε",
        servicesTitle: "Υπηρεσίες",
        servicesIntro: "Επαγγελματικό βάψιμο και μόνωση για κατοικίες και επιχειρήσεις στη Θεσσαλονίκη. Αναλαμβάνουμε το έργο από την προετοιμασία της επιφάνειας μέχρι την τελική στρώση.",
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
        service3Title: "Θερμομόνωση",
        service3Alt: "Εργασίες θερμομόνωσης σε κτίριο",
        service3Scope: "Κατοικίες και επαγγελματικοί χώροι",
        service3Text: "Μόνωση που μειώνει τις απώλειες θερμότητας, κρατά τους χώρους άνετους όλο τον χρόνο και βοηθά στη μείωση του ενεργειακού κόστους μακροπρόθεσμα.",
        service3Inc1: "Αυτοψία και μετρήσεις στον χώρο",
        service3Inc2: "Τοποθέτηση θερμομόνωσης",
        service3Inc3: "Σφράγιση και φινίρισμα",
        service3Inc4: "Καλύτερη άνεση, χαμηλότερη κατανάλωση",
        visitLabel: "Δωρεάν επίσκεψη",
        visitText: "Ερχόμαστε στον χώρο χωρίς χρέωση, βλέπουμε το έργο από κοντά και μετά σας δίνουμε προσφορά.",
        quoteText: "Αφήστε το όνομα και το τηλέφωνό σας. Θα σας καλέσουμε για να κλείσουμε δωρεάν επίσκεψη και προσφορά.",
        quoteName: "Όνομα",
        quotePhone: "Τηλέφωνο",
        quoteSend: "Αποστολή",
        quoteSuccess: "Ευχαριστούμε. Έχουμε τα στοιχεία σας και θα σας καλέσουμε σύντομα για δωρεάν επίσκεψη.",
        closeQuote: "Κλείσιμο",
        language: "Γλώσσα"
    }
};

function closeMenu() {
    navLinks.classList.remove("active");
}

function applyLanguage(lang) {
    const copy = translations[lang] || translations.en;

    document.documentElement.lang = lang;
    document.title = copy.pageTitle;
    langSwitch.setAttribute("aria-label", copy.language);

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

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a, [data-open-quote]")) {
        closeMenu();
    }
});

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

langButtons.forEach((button) => {
    button.addEventListener("click", () => {
        applyLanguage(button.dataset.lang);
    });
});

const savedLang = localStorage.getItem("isocoat-lang");
const browserLang = navigator.language.toLowerCase().startsWith("el") ? "el" : "en";
applyLanguage(savedLang === "el" || savedLang === "en" ? savedLang : browserLang);

const gallerySlides = [...document.querySelectorAll(".gallery-slide")];
const galleryDots = document.getElementById("galleryDots");
let galleryIndex = 0;
let galleryDragged = false;

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

Fancybox.bind("[data-fancybox='works']", {
    Hash: false,
    Images: {
        zoom: true
    }
});

showGallerySlide(0);

