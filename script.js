// Funciones para mostrar/ocultar secciones
function togglePrivacyPolicy() {
    const privacyPolicy = document.getElementById('privacy-policy');
    privacyPolicy.classList.toggle('hidden');
}

function toggleCopyright() {
    const copyright = document.getElementById('copyright');
    copyright.classList.toggle('hidden');
}

// Cargar idioma al inicio
document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("language-selector");
    if (!languageSelector) {
        console.error("No se encontró el selector de idioma (#language-selector). Verifica tu HTML.");
        return;
    }

    const translations = {
        es: {
            title: "Mundo Circo Mágico - Entretenimiento Circense para Niños",
            inicio: "Inicio",
            sobre_mi: "Sobre Mí",
            servicios: "Servicios",
            galeria: "Galería",
            testimonios: "Testimonios",
            blog: "Blog",
            contacto: "Contacto",
            welcome: "¡Bienvenidos al Mundo Circo Mágico!",
            reserva: "¡Reserva tu espectáculo ahora!",
            descripcion_inicio: "Transformamos eventos infantiles en experiencias mágicas y emocionantes. Ofrecemos espectáculos circenses profesionales, animación de calidad y talleres creativos para niños de todas las edades. Nuestro equipo de artistas especializados crea ambientes llenos de color, risas y sorpresas que harán que tu evento sea inolvidable.",
            sobre_mi: "Sobre Mí",
            descripcion_sobre_mi: "Con más de 10 años de experiencia en el entretenimiento infantil, soy especialista en crear momentos mágicos que encantan a niños y adultos por igual. Mi pasión por el circo comenzó desde la infancia y he dedicado mi carrera a perfeccionar habilidades como malabarista, payaso, mago y animador. Cada espectáculo está diseñado con cuidado para adaptarse a las necesidades de tu evento, garantizando diversión garantizada y recuerdos inolvidables para los pequeños asistentes.",
            espectaculos: "Espectáculos",
            talleres: "Talleres",
            eventos: "Eventos",
            payaso: "Espectáculo de Payaso",
            magia: "Magia Infantil",
            malabares: "Taller de Malabares",
            acrobacias: "Taller de Acrobacias",
            animacion: "Animación de Fiestas",
            circo_movil: "Circo Móvil",
            descripcion_payaso: "Un show lleno de humor, travesuras y magia que hará reír a todos los asistentes. Incluye malabares, juegos de participación y sorpresas.",
            descripcion_magia: "Un viaje lleno de asombro con trucos visuales, ilusiones y participaciones que dejarán a los niños con la boca abierta.",
            descripcion_malabares: "Aprendizaje divertido de técnicas básicas de malabares con bolas, clubes y aros. Desarrolla coordinación motriz y destreza.",
            descripcion_acrobacias: "Introducción segura a las acrobacias circenses, con ejercicios básicos y juegos corporales que fomentan el trabajo en equipo.",
            descripcion_animacion: "Paquete completo de entretenimiento para fiestas infantiles, incluyendo shows, juegos, música y actividades adaptadas a la edad de los invitados.",
            descripcion_circo_movil: "Instalación de estructuras circenses móviles para eventos especiales, creando un ambiente auténtico de circo con todas las atracciones incluidas.",
            galeria: "Galería",
            
            instagram: "Síguenos en Instagram",
            instagram_placeholder: "Conéctate con nosotros en Instagram para ver nuestras últimas actuaciones y crear contenido exclusivo.",
            instagram_link: "@mundocirmagico",
            contacto: "Contacto",
            nombre: "Nombre:",
            email: "Email:",
            mensaje: "Mensaje:",
            enviar: "Enviar",
            policy_title: "Política de Privacidad",
            policy_text: "Esta política de privacidad describe cómo Mundo Circo Mágico recopila, utiliza y protege la información personal de sus usuarios.",
            copyright_title: "Derechos de Autor",
            copyright_text: "© 2025 Mundo Circo Mágico. Todos los derechos reservados.",
            informacion_contacto: "Información de Contacto:",
            telefono: "Teléfono:",
            testimonios: "Testimonios",
            testimonial1: "\"El espectáculo de payaso en la fiesta de mi hijo fue increíble. Los niños estaban encantados y no paraban de reír durante todo el show.\"",
            autor1: "- María López",
            testimonial2: "\"Contratamos el Circo Móvil para el cumpleaños de mi hija y fue todo un éxito. Las instalaciones eran impresionantes y las actividades mantuvieron entretenidos a todos los niños.\"",
            autor2: "- Juan Rodríguez",
            
        },
        en: {
            title: "Magic Circus World - Circus Entertainment for Children",
            inicio: "Home",
            sobre_mi: "About Me",
            servicios: "Services",
            galeria: "Gallery",
            testimonios: "Testimonials",
            blog: "Blog",
            contacto: "Contact",
            welcome: "Welcome to Magic Circus World!",
            reserva: "Book your show now!",
            descripcion_inicio: "We transform children's events into magical and exciting experiences. We offer professional circus shows, quality entertainment and creative workshops for children of all ages. Our team of specialized artists creates environments full of color, laughter and surprises that will make your event unforgettable.",
            sobre_mi: "About Me",
            descripcion_sobre_mi: "With over 10 years of experience in children's entertainment, I specialize in creating magical moments that delight both children and adults alike. My passion for the circus began in childhood and I have dedicated my career to perfecting skills as a juggler, clown, magician and entertainer. Each show is carefully designed to adapt to your event's needs, guaranteeing guaranteed fun and unforgettable memories for the young attendees.",
            espectaculos: "Shows",
            talleres: "Workshops",
            eventos: "Events",
            payaso: "Clown Show",
            magia: "Children's Magic",
            malabares: "Juggling Workshop",
            acrobacias: "Acrobatics Workshop",
            animacion: "Party Entertainment",
            circo_movil: "Mobile Circus",
            descripcion_payaso: "A show full of humor, mischief and magic that will make all attendees laugh. Includes juggling, participation games and surprises.",
            descripcion_magia: "A journey full of wonder with visual tricks, illusions and participations that will leave children amazed.",
            descripcion_malabares: "Fun learning of basic juggling techniques with balls, clubs and hoops. Develops motor coordination and dexterity.",
            descripcion_acrobacias: "Safe introduction to circus acrobatics, with basic exercises and body games that promote teamwork.",
            descripcion_animacion: "Complete entertainment package for children's parties, including shows, games, music and activities adapted to the age of the guests.",
            descripcion_circo_movil: "Installation of mobile circus structures for special events, creating an authentic circus atmosphere with all attractions included.",
            galeria: "Gallery",
            
            instagram: "Follow us on Instagram",
            instagram_placeholder: "Connect with us on Instagram to see our latest performances and exclusive content.",
            instagram_link: "@magiccircusworld",
            contacto: "Contact",
            nombre: "Name:",
            email: "Email:",
            mensaje: "Message:",
            enviar: "Send",
            policy_title: "Privacy Policy",
            policy_text: "This privacy policy describes how Magic Circus World collects, uses, and protects user personal information.",
            copyright_title: "Copyright",
            copyright_text: "© 2025 Magic Circus World. All rights reserved.",
            informacion_contacto: "Contact Information:",
            telefono: "Phone:",
            testimonios: "Testimonials",
            testimonial1: "\"The clown show at my son's party was incredible. The children were delighted and didn't stop laughing during the entire show.\"",
            autor1: "- Maria Lopez",
            testimonial2: "\"We hired the Mobile Circus for my daughter's birthday and it was a complete success. The installations were impressive and the activities kept all the children entertained.\"",
            autor2: "- Juan Rodriguez",
            
        }
    };

    function loadLanguage(lang) {
        if (!translations[lang]) lang = "es";
        console.log("Loading language:", lang);

        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.getAttribute("data-translate");
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            } else {
                console.warn(`No translation found for key: ${key}`);
                element.textContent = key; // Show the key if no translation is available
            }
        });

        const titleElement = document.querySelector("title");
        if (titleElement && translations[lang].title) {
            titleElement.textContent = translations[lang].title;
        }
    }

    function saveLanguagePreference(lang) {
        localStorage.setItem("preferredLanguage", lang);
    }

    function getSavedLanguage() {
        const savedLang = localStorage.getItem("preferredLanguage");
        return translations[savedLang] ? savedLang : "es";
    }

    const savedLanguage = getSavedLanguage();
    languageSelector.value = savedLanguage;
    loadLanguage(savedLanguage);

    languageSelector.addEventListener("change", function () {
        const selectedLang = this.value;
        console.log("Selected language:", selectedLang);
        loadLanguage(selectedLang);
        saveLanguagePreference(selectedLang);
    });
});