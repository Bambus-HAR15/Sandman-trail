
    window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
       document.addEventListener('DOMContentLoaded', function() {
        // Check if the current URL path is the homepage
            const cookieConsentPopup = document.getElementById('cookie-consent-popup');
            const acceptCookiesBtn = document.getElementById('accept-cookies');
            const refuseCookiesBtn = document.getElementById('refuse-cookies');
            const adjustSettingsBtn = document.getElementById('adjust-settings');
            const acceptSelectedBtn = document.getElementById('accept-selected');
            const cookieOptions = document.getElementById('cookie-options');

        // Function to disable page interaction
        function disablePageInteraction() {
            document.body.style.pointerEvents = 'none';
            var popup = document.getElementById('cookie-popup');
            popup.style.pointerEvents = 'auto';
        }

        // Function to enable page interaction
        function enablePageInteraction() {
            document.body.style.pointerEvents = 'auto';
        }

            // Function to show the cookie consent popup
            function showCookieConsentPopup() {
                cookieConsentPopup.style.display = 'block';
                console.log('Cookie consent popup shown');
            }

            // Function to hide the cookie consent popup
            function hideCookieConsentPopup() {
                cookieConsentPopup.style.display = 'none';
                console.log('Cookie consent popup hidden');
            }

            // Ensure Essential cookies checkbox is always checked and disabled
            var essentialCookiesCheckbox = document.getElementById('essential-cookies');
            essentialCookiesCheckbox.checked = true;
            essentialCookiesCheckbox.disabled = true;

            // Function to handle accepting cookies
            function acceptCookies() {
                const currentTime = new Date().getTime();
                localStorage.setItem('cookiesAcceptedTimestamp', currentTime.toString());
                localStorage.setItem('cookiesAccepted', 'true');
                localStorage.setItem('analyticsCookies', 'true');
                localStorage.setItem('marketingCookies', 'true');
                updateGtagConsent(true,true);
                hideCookieConsentPopup();
                console.log('Cookies accepted');
            }

            // Function to handle refusing cookies
            function refuseCookies() {
                const currentTime = new Date().getTime();
                localStorage.setItem('cookiesAcceptedTimestamp', currentTime.toString());
                localStorage.setItem('cookiesAccepted', 'false');
                localStorage.setItem('analyticsCookies', 'false');
                localStorage.setItem('marketingCookies', 'false');
                updateGtagConsent(false,false);
                hideCookieConsentPopup();
                console.log('Cookies refused');
            }

            // Function to handle accepting selected cookies
            function acceptSelected() {
                const currentTime = new Date().getTime();
                const analytics = document.getElementById('analytics-cookies').checked;
                const marketing = document.getElementById('marketing-cookies').checked;
                const selectedCookies = {
                    analytics,
                    marketing
                };
                localStorage.setItem('cookiesAcceptedTimestamp', currentTime.toString());
                localStorage.setItem('selectedCookies', JSON.stringify(selectedCookies));
                localStorage.setItem('analyticsCookies', analytics.toString());
                localStorage.setItem('marketingCookies', marketing.toString());
                hideCookieConsentPopup();
                console.log('Selected cookies accepted');
               
            }


            function updateGtagConsent(analytics,marketing){
                gtag('consent','update',{
                    'ad_storage':marketing?'granted':'denied',
                    'analytics_storage': analytics ? 'granted' : 'denied',
                    'ad_user_data': marketing ? 'granted' : 'denied',
                    'ad_personalization': marketing ? 'granted' : 'denied'
                });
                console.log('Updated gtag consent:', {
                'ad_storage': marketing ? 'granted' : 'denied',
                'analytics_storage': analytics ? 'granted' : 'denied',
                'ad_user_data': marketing ? 'granted' : 'denied',
                'ad_personalization': marketing ? 'granted' : 'denied'
            });
            }

            // Add event listener to the adjust settings button
            adjustSettingsBtn.addEventListener('click', function() {
                cookieOptions.style.display = 'block';
                acceptCookiesBtn.style.display = 'none';
                refuseCookiesBtn.style.display = 'none';
                adjustSettingsBtn.style.display = 'none';
                acceptSelectedBtn.style.display = 'inline-block';
                document.querySelector('.front').style.display = 'none';
            });

            // Check if the cookies have been accepted recently
            function shouldShowPopup() {
                const timestamp = localStorage.getItem('cookiesAcceptedTimestamp');
                if (!timestamp || timestamp === '0') {
                    return true; // Show the popup if no timestamp exists or if cookies were refused
                }
                const currentTime = new Date().getTime();
                const elapsedTime = currentTime - parseInt(timestamp, 10);
                return elapsedTime > 150000; // 5 Minutes again its pop-up on the screen
            }

            // Main script execution logic
            if (shouldShowPopup()) {
                showCookieConsentPopup();
            }
            else{
            // Restore previous consent state
            const analyticsCookies = localStorage.getItem('analyticsCookies') === 'true';
            const marketingCookies = localStorage.getItem('marketingCookies') === 'true';
            updateGtagConsent(analyticsCookies, marketingCookies);
            }

            // Add event listener to the accept cookies button
            acceptCookiesBtn.addEventListener('click', function() {
                acceptCookies();
                setTimeout(function() {
                    window.location.reload(); // Reload the page after 15 seconds
                }, 150000); // 5 Minutes again its pop-up on the screen
            });

            // Add event listener to the refuse cookies button
            refuseCookiesBtn.addEventListener('click', function() {
                refuseCookies();
                // Prevent popup from showing for the next 15 seconds after refusal
                setTimeout(function() {
                    if (shouldShowPopup()) {
                        showCookieConsentPopup();
                    }
                }, 150000); // 5 Minutes again its pop-up on the screen
            });

            // Add event listener to the accept selected button
            acceptSelectedBtn.addEventListener('click', function() {
                acceptSelected();
                setTimeout(function() {
                    window.location.reload(); // Reload the page after 15 seconds
                }, 150000); // 5 Minutes again its pop-up on the screen
            });

    

            // acceptSelectedBtn.addEventListener('click', function () {
            //     cookiePopup.style.display = 'none';
            //     var analyticsCookies = document.getElementById('analytics-cookies').checked;
            //     var marketingCookies = document.getElementById('marketing-cookies').checked;
              
            // });

            // Update the label colors based on checkbox state
            var analyticsCheckbox = document.getElementById('analytics-cookies');
            var marketingCheckbox = document.getElementById('marketing-cookies');
            var analyticsLabel = document.getElementById('statistics');
            var marketingLabel = document.getElementById('marketing');

            function updateLabelColor(checkbox, label) {
                if (checkbox.checked) {
                    label.style.color = '#034bf1'; // Change to your desired color
                } else {
                    label.style.color = 'black'; // Change to your desired color
                }
            }
             analyticsCheckbox.addEventListener('change', function () {
                updateLabelColor(analyticsCheckbox, analyticsLabel);
            });

            marketingCheckbox.addEventListener('change', function () {
                updateLabelColor(marketingCheckbox, marketingLabel);
            });

            // Initialize label colors
            updateLabelColor(analyticsCheckbox, analyticsLabel);
            updateLabelColor(marketingCheckbox, marketingLabel);
       
// Translations for different domains
                    const translations = {
                'default': {
                    title: 'Cookies-Zustimmung',
                    description: 'Wir verwenden verschiedene Arten von Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Klicken Sie auf die untenstehenden Kategorien, um mehr über deren Zweck zu erfahren. Sie können wählen, welche Arten von Cookies Sie zulassen möchten. Denken Sie daran, dass die Deaktivierung von Cookies Ihre Erfahrung auf der Website beeinträchtigen kann.',
                    settingsTitle: 'Ihre Cookie-Einstellungen',
                    settingsDescription: 'Wir verwenden verschiedene Arten von Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Klicken Sie auf die untenstehenden Kategorien, um mehr über deren Zweck zu erfahren. Sie können wählen, welche Arten von Cookies Sie zulassen möchten. Denken Sie daran, dass die Deaktivierung von Cookies Ihre Erfahrung auf der Website beeinträchtigen kann.',
                    essentialLabel: 'Wesentliche (technische) Cookies',
                    essentialDescription: 'Notwendige (technische) Cookies tragen dazu bei, eine Website nutzbar zu machen, indem sie grundlegende Funktionen wie die Ansichtsnavigation und den Zugang zu sicheren Bereichen der Website ermöglichen. Ohne diese Cookies kann die Website nicht richtig funktionieren.',
                    analyticsLabel: 'Statistik (analytische Cookies)',
                    analyticsDescription: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit Websites interagieren, indem sie Informationen anonym sammeln und melden.',
                    marketingLabel: 'Marketing-Cookies (soziale Plugins, Pixel)',
                    marketingDescription: 'Marketing-Cookies werden verwendet, um Besucher über Websites hinweg zu verfolgen und ihnen Dinge zu zeigen, die für sie relevant und ansprechend sind, was sie für Herausgeber und Drittanbieter wertvoller macht.',
                    acceptAll: 'Alle Cookies akzeptieren',
                    adjustSettings: 'Einstellungen anpassen',
                    refuseCookies: 'Cookies ablehnen',
                    acceptSelected: 'Ausgewählte akzeptieren'
                },
                'mister-sandman.fr': {

                    title: 'Consentement aux cookies',
                    description: 'Nous utilisons différents types de cookies pour améliorer votre expérience sur notre site. Cliquez sur les catégories ci-dessous pour en savoir plus sur leur finalité. Vous pouvez choisir les types de cookies que vous souhaitez autoriser. N\'oubliez pas que la désactivation des cookies peut nuire à votre expérience sur le site.',
                    settingsTitle: 'Vos préférences en matière de cookies',
                    settingsDescription: 'Nous utilisons différents types de cookies pour améliorer votre expérience sur notre site. Cliquez sur les catégories ci-dessous pour en savoir plus sur leur finalité. Vous pouvez choisir les types de cookies que vous souhaitez autoriser. N\'oubliez pas que la désactivation des cookies peut nuire à votre expérience sur le site.',
                    essentialLabel: 'Cookies (techniques) essentiels',
                    essentialDescription: 'Les cookies (techniques) indispensables contribuent à rendre un site web utilisable en permettant des fonctions de base telles que la navigation dans les vues et l\'accès à des zones sécurisées du site. Sans ces cookies, le site web ne peut pas fonctionner correctement.',
                    analyticsLabel: 'Statistiques (cookies analytiques)',                  
                    analyticsDescription: 'Ces cookies nous aident à comprendre comment les visiteurs interagissent avec les sites web en collectant et en rapportant des informations de manière anonyme.',
                    marketingLabel: 'Cookies marketing (plugins sociaux, pixels)',
                    marketingDescription: 'Les cookies marketing sont utilisés pour suivre les visiteurs à travers les sites Web pour afficher des choses pertinentes et engageantes pour chaque utilisateur, les rendant plus précieuses pour les éditeurs et les annonceurs tiers.',
                    acceptAll: 'Accepter tous les cookies',
                    adjustSettings: 'Personnaliser les paramètres',
                    refuseCookies: 'Refuser les cookies',
                    acceptSelected: 'Accepter une sélection'
                },
                'mistersandman.nl': {

                   title: 'Toestemming voor cookies',
                  description:'We gebruiken verschillende soorten cookies om uw ervaring op onze site te verbeteren. Klik op de onderstaande categorieën voor meer informatie over hun doel. U kunt kiezen welke soorten cookies u wilt toestaan. Houd er rekening mee dat het uitschakelen van cookies uw ervaring op de site negatief kan beïnvloeden.',
                  settingsTitle: 'Uw cookie-voorkeuren',
                  settingsDescription:'We gebruiken verschillende soorten cookies om uw ervaring op onze site te verbeteren. Klik op de onderstaande categorieën voor meer informatie over hun doel. U kunt kiezen welke soorten cookies u wilt toestaan. Houd er rekening mee dat het uitschakelen van cookies uw ervaring op de site negatief kan beïnvloeden.',
                  essentialLabel: 'Essentiële (technische) cookies',
                  essentialDescription:'Essentiële (technische) cookies helpen om een website bruikbaar te maken door basisfuncties mogelijk te maken, zoals het bekijken van weergaven en toegang tot beveiligde delen van de site. Zonder deze cookies kan de website niet naar behoren functioneren.',
                  analyticsLabel: 'Statistieken (analytische cookies)',
                  analyticsDescription:'Deze cookies helpen ons te begrijpen hoe bezoekers omgaan met de websites door anoniem informatie te verzamelen en te rapporteren.',
                  marketingLabel: 'Marketingcookies (sociale plugins, pixels)',
                  marketingDescription:'Marketingcookies worden gebruikt om bezoekers op websites te volgen om dingen weer te geven die relevant en boeiend zijn voor elke gebruiker, waardoor ze waardevoller zijn voor uitgevers en externe adverteerders.',
                  acceptAll: 'Alle cookies accepteren',
                  adjustSettings: 'Instellingen aanpassen',
                  refuseCookies: 'Cookies weigeren',
                  acceptSelected: 'Een selectie accepteren'

                 }
            };
               // Get the current domain
            const currentDomain = window.location.hostname;
            // Function to apply translations based on the current domain
            function applyTranslations(domain) {
                const translation = translations[domain] || translations['default'];
                document.getElementById('consent-title').textContent = translation.title;
                document.getElementById('consent-description').textContent = translation.description;
                document.getElementById('settings-title').textContent = translation.settingsTitle;
                document.getElementById('settings-description').textContent = translation.settingsDescription;
                document.getElementById('essential').textContent = translation.essentialLabel;
                document.getElementById('essential-description').textContent = translation.essentialDescription;
                document.getElementById('statistics').textContent = translation.analyticsLabel;
                document.getElementById('analytics-description').textContent = translation.analyticsDescription;
                document.getElementById('marketing').textContent = translation.marketingLabel;
                document.getElementById('marketing-description').textContent = translation.marketingDescription;
                document.getElementById('accept-cookies').textContent = translation.acceptAll;
                document.getElementById('adjust-settings').textContent = translation.adjustSettings;
                document.getElementById('refuse-cookies').textContent = translation.refuseCookies;
                document.getElementById('accept-selected').textContent = translation.acceptSelected;
            }

            // Apply translations for the current domain

            applyTranslations(currentDomain);

           // Define domain-specific classes

        const domainClasses = {
            'mister-sandman.de': 'de',
            'mister-sandman.fr': 'fr',
            'mistersandman.nl': 'nl'
        };
        // Apply the corresponding class to the body
        if (domainClasses[currentDomain]) {
            document.body.classList.add(domainClasses[currentDomain]);
        }

        // Google Consent Mode initialization
    //     window.dataLayer = window.dataLayer || [];
    //     function gtag(){dataLayer.push(arguments);}
    // gtag('consent', 'default', {
    //     'ad_storage': 'denied',
    //     'analytics_storage': 'denied',
    //     'ad_user_data': 'denied',
    //     'ad_personalization': 'denied'
    // });
    // gtag('js', new Date());
    // gtag('config', 'GA_MEASUREMENT_ID');

       
        });  
