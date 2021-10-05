export const supportedLanguages = [
    {
        lng: "Latvian",
        short: "LV",
        flag: "https://flagpedia.net/data/flags/h80/lv.png"
    },
    {
        lng: "English",
        short: "EN",
        flag: "https://flagpedia.net/data/flags/h80/us.png"
    },
    {
        lng: "Russian",
        short: "RU",
        flag: "https://flagpedia.net/data/flags/h80/ru.png"
    },
]

/**
 * To Add
 * settings.security.button 'Verificēt tagad'
 * settings.premium.plans 'Premium plāni'
 * 
 * profile.chat1 'Sarakste'
 * profile.chat2 'Sākt saraksti'
 */
export const languages = {
    latvian: {
        header: {
            homeLink: "Sākums",
            categoryLink: "Kategorijas",
            admLink: "#ADM",
            premiumLink: "Premium",
            registerLink: "Reģistrēties",
            loginLink: "Ieiet",
        },
        authorizedHeader: {
            searchPlaceholder: "Cilvēki, kompānijas...",
            searchBtn: "Meklēt",
            home: "Sākums",
            chat: "Čats",
            categories: "Kategorijas",
            dropdown: {
                profile: "Mans Konts",
                newJobOffer: "Jauna darba vakance",
                profileAdd: "Profila reklāma",
                premium: "Premium",
                saved: "Saglābātie",
                settings: "Iestatījumi",
                logout: "Iziet"
            }
        },
        chat: {
            lastContacts: "Pēdējie kontakti",
            searchContacts: "Meklēt kontaktu",
            deleteChat: "Dzēst saraksti",
            noChat: "Izvēlieties kontaktu ar kuru sarakstīties",
            typeHere: "Raksti šeit"
        },
        newJobOffer: {
            heading: "Izveido jaunu darba piedāvājumu",
            name: "Darba nosaukums",
            requirements: "Darbinieku prasmes un pienākumi",
            jobDescription: "Uzņēmums darbiniekiem piedāvā:",
            chooseCategory: "Izvēlies darba kategoriju",
            changeCategory: "Mainīt darba kategoriju",
            chooseProffession: "Izvēlies profesiju",
            changeProffession: "Mainīt profesiju",
            currently: "pašlaik",
            change: "Mainīt",
            choose: "Izvēlēties",
            country1: "Kādā valstī ir aktuāla šī profesija?",
            country2: "Valsts",
            city1: "Kādā pilsētā ir aktuāla šī profesija?",
            city2: "Pilsēta",
            chooseJobType: "Izvēlieties darba termiņu",
            jobType1: "Ilgtermiņa",
            jobType2: "Īstermiņa",
            jobType3: "Brīvprātigs",
            salary: "Kāda būs mēneša alga?",
            add: "Pievienot",
            photo: "foto",
            submit: "Iesniegt"
        },
        settings: {
            profile: {
                heading: "Profils",
                name: "Vārds",
                surname: "Uzvārds",
                companyName: "Kompānijas nosaukums",
                email: "E-pasts",
                jobStatus: "Darba Statuss",
                adm: "#ADM",
                employed: "Nodarbināts",
                country: "Valsts",
                city: "Pilsēta",
                closeProfile: {
                    heading: "Konta deaktivizācija",
                    question: "Kas notiks kad tu deaktivizēsi savu kontu ?",
                    answer1: "Visa konta informācija tiks dzēsta",
                    answer2: "Tu vairs nevarēsi autorizeties ar to",
                    answer3: "Visi Premium plāni tiks dzēsti, ja tādi bija.",
                    chooseReason: "Izvēlies cēloni",
                    button: "Deaktivizēt kontu"
                }
            },
            security: {
                heading: "Drošība",
                subHeading1: "Parole",
                password1: "Jauna Parole",
                password2: "Apstiprināt jauno paroli",
                passwordPlaceholder1: "Ievadi jauno paroli",
                passwordPlaceholder2: "Ievadi paroli atkārtoti",
                passwordGuide: "8 vai vairāk simbolus. Apvienojiet lielos un mazos burtus un ciparus.",
                subHeading2: "Tālruņa Verifikācija",
                recomended: "Ieteicams",
                phoneInfo: "Jūsu tālrunis nav verificēts Youth Deal. Noklikšķiniet uz \"Verificēt tagad\", lai pabeigtu tālruņa verifikāciju"
            },
            premium: {
                heading: "Premium",
                status: "Premium Statuss",
                active: "Aktīvs",
                notActive: "Neaktīvs",
                deactivate: {
                    heading: "Premium Statusa Deaktivizācija",
                    question: "Kas notiks ja deaktivizēšu savu premium statusu?",
                    answer1: "Ja neesat izmantojis Premium līdz mēneša beigām, par kuru samaksājāt, tas tiks deaktivizēts no nākamā mēneša sākuma",
                    answer2: "Vissas Premium funkcijas nebūs Tev pieejamas, un Tu nevarēsi pilnībā izbaudīt mūsu Web-aplikāciju",
                    answer3: "Mums būs ļoti skumji. Tu taču nevēlējies, lai mums būtu skumji?",
                    reason: "Es gribu deaktivizēt manu premium statusu tāpēc ka...",
                    chooseReason: "Izvēlies cēloni",
                    buton: "Deaktivizēt Premium"
                }
            },
            payments: {
                heading1: "Atlikums",
                remaining: "Jūsu atlikums ir ",
                button1: "Papildināt",
                heading2: "Norēķinu metodes",
                button2: "Pievienot metodi",
                info1: "Jūs vēl neesat iestatījis nevienu norēķinu metodi.",
                info2: "Iestatiet norēķinu metodes, lai jūs uzreiz varētu pieņemt darbā, kad būsiet gatavs."
            },
            notifications: {
                heading: "Paziņojumi",
                subHeading1: "Rādīt paziņojumus par:",
                option1: "E-pasta paziņojumi",
                option2: "Web paziņojumi",
                option3: "Paziņojumi reālajā laikā",
                heading2: "Paziņojumi reālajā laikā skaņa",
                option4: "Ar skaņu",
                testSound: "Notestēt skaņu",
                testSoundButton: "Atskaņot"
            },
            save: "Saglabāt"
        },
        homePage: {
            heading1: "Sveicināts",
            subHeader1: "Katram darbiniekam vispiemērotākais amats",
            subHeader2: "Katram darba devējam vispiemērotākais darbinieks",
            button1: "Es esmu darba devējs",
            button2: "Es esmu darba ņēmējs",
            findOptions: {
                heading: "Atrodi darbu vai darbinieku ikvienā jomā:",
                popularSearches: "Populārākie Meklējumi",
                showMore: "Parādīt vēl"
            },
            findTeamMembers: {
                heading: "Atrodi labākos komandas biedrus savam projektam",
                subHeading1: "Vai vēlies atrast komandas biedrus savam projektam?",
                subHeading2: "Pievieno piedāvājumu, saņem pieteikumus un atlasi labākos!",
                buttonText: "Atrast kopā ar Youth Deal"
            },
            contacts: {
                heading: "Kontakti",
                subHeading: "Sazinies ar potenciālo daba devēju, ņēmēju vai arī komandas biedru",
                button: "Atrast Kontaktus"
            },
            adm: {
                heading: "#ADM",
                subHeading: "Ja Tu pašlaik esi aktīvā darba meklēšanā (#ADM), tad šī loma ir piemērota tieši Tev! Atzīmē to reģistrācijas laikā vai arī jebkurā brīdī profila iestatījumos",
                button: "Sākt"
            }
        },
        authorizedHomePage: {
            longtermJobs: "Ilgtermiņa",
            shorttermJobs: "Īstermiņa",
            voluntaryJobs: "Brīvprātīgie",
            job: "darbi",
            users: "Lietotāji",
            leftPanel: {
                premium: "Premium (aktīvs)",
                contacts: "Kontakti",
                findContacts: "Atrodiet savus kontaktus, lai ar viņiem tērzētu",
                saved: "Saglabātie"
            },
            Right: {
                chatHeading: "Čats"
            }
        },
        profile: {
            jobSeeker: {
                activeJobSeeker: "#ADM",
                birthDate: "Dzimšanas datums",
                stars: "Sakrātās zvaigznītes",
                description: "Apraksts par sevi:",
                education: "Izglītība",
                currentJob: "Esošais amats",
                previousJob: "Pēdējais amats",
                extraSkills: "Papildus prasmes",
                noEntries: "Šis lietotājs nav pabeidzis veidot savu profilu",
                save: "Saglabāt"
            },
            jobGiver: {
                homePage: "Mājas lapa",
                employeeCount: "darbinieku skaits",
                phoneNum: "numurs",
                email: "e-pasts",
                location: "atrašanās vieta",
                description: "Informācija par kompāniju",
                noDescription: "šī kompānija vēl nav uzrakstījusi informāciju",
                newJobOffer: "Izveidot jaunu darba vakanci",
                jobOffers: "Darba Piedāvājumi",
                noJobOffers: "Šai kompānijai vēl nav darba piedāvājumi"
            },
            editModal: {
                heading: "Profila rediģēšana",
                name: "Vārds:",
                surname: "Uzvārds:",
                companyName: "Kompānijas nosaukums:",
                website: "Mājas lapa:",
                employeeCount: "Darbinieku skaits:",
                phoneNum: "Telefona nummurs:",
                profession: "Profesija",
                change: "Mainīt",
                choose: "Izvēlēties",
                birthDate: "Dzimšanas datums:",
                country: "Valsts:",
                city: "Pilsēta:",
                isActiveJobSeeker: "Vai esat aktīvā darba meklēšanā?",
                yes: "Jā",
                no: "Nē",
                description: "Apraksts par sevi:",
                companyDescription: "Kompānijas apraksts:",
                cancel: "Atpakaļ",
                save: "Saglabāt"
            },
            none: "Nav",
            unknown1: "Nav ievadīts",
            unknown2: "Nav ievadīta",
            location: "Atrašanās vieta",
        },
        jobOffer: {
            location: "Atrašanās vieta",
            locationUnknown: "Nezināma",
            proffession: "Profesija",
            responsabilities: "Prasmes un pienākumi",
            companyOffers: "Kompānija piedāvā",
            signUp: "Pieteikties",
            signOff: "Atteikties",
            salaryBeginningFrom: "SĀKOT NO",
            salaryPerMonth: "mēnesī",
            editModal: {
                heading: "Rediģēt darba piedāvājumu",
                responsibilities: "Darbinieku prasmes un pienākumi",
                jobDescription: "Uzņēmums darbiniekiem piedāvā:",
                chooseCategory: "Izvēlies darba kategoriju",
                changeCategory: "Mainīt darba kategoriju",
                chooseProffession: "Izvēlies profesiju",
                changeProffession: "Mainīt profesiju",
                currently: "pašlaik",
                change: "Mainīt",
                choose: "Izvēlēties",
                country1: "Kādā valstī ir aktuāla šī profesija?",
                country2: "Valsts",
                city1: "Kādā pilsētā ir aktuāla šī profesija?",
                city2: "Pilsēta",
                chooseJobType: "Izvēlieties darba termiņu",
                jobType1: "Ilgtermiņa",
                jobType2: "Īstermiņa",
                jobType3: "Brīvprātigs",
                salary: "Kāda būs mēneša alga?",
                cancel: "Atcelt",
                submit: "Iesniegt",
                delete: {
                    heading: "Izdzēst darba piedāvājumu",
                    question: "Kas notiks ja es izdzēsīšu darba piedāvājumu?",
                    answer1: "Darba piedāvājums tiks neatgrezieniski izdzēsts.",
                    answer2: "Darba piedāvājums vairs nevienam nebūs redzams.",
                    button: "Izdzēst"
                }
            }
        },
        premiumPage: {
            premiumHeader: {
                jobGiver: "Darba devējs",
                jobSeeker: "Darba ņēmējs",
            },
            premiumText1: "Iegādājies mūsu Premium, lai atvieglotu darba meklēšanas procesu, iegūtu vairāk informācijas par Tevis izvēlēto amatu un gūtu palīdzību karjeras izveidē",
            premiumText2: "Esi augšpusē ar Premium!",
            premiumOptions: {
                jobGiver: {
                    option1: "Pieejama statistika, kā darba ņēmēji mijiedarbojas ar taviem sludinājumiem",
                    option2: "Advancēta meklēšana",
                    option3: "Tiešsaites videosarunas iespēja",
                    option4: "Vienlaikus var ievietot 4 vai vairāk sludinājumu",
                },
                jobSeeker: {
                    option1: "Paziņojumi par jauniem darba sludinājumiem",
                    option2: "Sīkāks algas pārskats",
                    option3: "Pieeja video pamācību materiālu bāzei",
                    option4: "Palīdzība ar CV sastādīšanu",
                    option5: "Iespējams vienlaicīgi pieteikties vairākiem darba piedāvājumiem",
                },
                buttons: {
                    text: "€/Mēnesī. Abonēt",
                }
            }
        },
        loginPage: {
            heading: "Pieslēgties",
            email: "E-pasts",
            incorrectEmail: "Nav pareizs E-pasts!",
            password: "Parole",
            passwordLenght: "Parolei ir jābūt ne mazāk nekā 5 simboli!",
            passwordEmpty: "Parole nevar būt tukša!",
            forgotPassword: "Aizmirsi paroli?",
            login: "Ieiet",
            otherOptions: "Vai ieej ar",
            noAccount: "Nav konta?",
            register: "Reģistrēties"
        },
        registerChoose: {
            heading: "Reģistrācija",
            subHeading: "Norādi savu lomu:",
            button1: "Es esmu darba devējs ",
            button2: "Es esmu darba ņēmējs "
        },
        registerJobgiverPage: {
            header: "Uzņēmuma Reģistrācija",
            subHeader: "Tas neaizņems daudz laika",
            alreadyRegistered: "Jau esiet reģistrēts?",
            login: "Ieiet",
            companyName: "Uzņēmuma nosaukums:",
            companyEmail: "Uzņēmuma e-pasts:",
            password: "Parole:",
            privacyPolicy1: "Es piekrītu mūsu ",
            privacyPolicy2: "Privātuma Politikai",
            button: "Reģistrēties",
            otherRegisterOptions: "Vai reģistrējies ar"
        },
        registerJobseekerPage: {
            header: "Reģistrācija",
            subHeader: "Tas neaizņems daudz laika",
            alreadyRegistered: "Jau es reģistrēts?",
            login: "Ieiet",
            firstName: "Vārds:",
            lastName: "Uzvārds:",
            email: "E-pasts:",
            password: "Parole:",
            privacyPolicy1: "Es piekrītu mūsu ",
            privacyPolicy2: "Privātuma Politikai",
            button: "Reģistrēties",
            otherRegisterOptions: "Vai reģistrējies ar"
        },
        footer: {
            links: {
                begin: "Sākt",
                about: "Par Mums",
                contacts: "Kontakti",
                support: "ATBALSTS",
                needHelp: "Nepieciešama palīdzība?",
                userRules: "Lietošanas noteikumi",
                privacyPolicy: "Privātuma politika",
                socialSites: "SOCIĀLIE TĪKLI"
            },
            description: "Youth Deal ir ērtāka un inovatīvāka vide darba tirgum. Mēs sniedzam iespēju ikvienam jaunietim atrast sev piemērotu darbu un sākt veidot savu karjeru. Kā arī palīdzam ikvienam darba devējam atrast vispiemērotāko darbinieku. -Atrodi vispiemērotāko kopā ar Youth Deal."
        },
        cookie: {
            heading: "Sveiki!",
            info: "Mēs izmantojam savus un trešo pušu sīkfailus, lai personalizētu saturu un analizētu tīmekļa trafiku. Nospiežot uz \"Piekrītu\", Jūs piekrītat mūsu",
            infoLink: "Privātuma Politikai",
            button1: "Piekrītu",
            button2: "Nepiekrītu"
        },
        saved: {
            jobType1: "Ilgtermiņa darbi",
            jobType2: "Īstermiņa darbi",
            jobType3: "Brīvprātīgie darbi"
        }
    },
    english: {
        header: {
            homeLink: "Home",
            categoryLink: "Categories",
            admLink: "#AJS",
            premiumLink: "Premium",
            registerLink: "Register",
            loginLink: "Login",
        },
        authorizedHeader: {
            searchPlaceholder: "Employees, companies...",
            searchBtn: "Search",
            home: "Home",
            chat: "Chat",
            categories: "Categories",
            dropdown: {
                profile: "Profile",
                newJobOffer: "New job offer",
                profileAdd: "Profile ad",
                premium: "Premium",
                saved: "Saved",
                settings: "Settings",
                logout: "Log out"
            }
        },
        chat: {
            lastContacts: "Last contacts",
            searchContacts: "Search for a contact",
            deleteChat: "Delete chat",
            noChat: "Choose user to chat with",
            typeHere: "Type here"
        },
        newJobOffer: {
            heading: "Make a job offer",
            name: "Job name",
            requirements: "Employee skills and duties",
            jobDescription: "Company offers:",
            chooseCategory: "Chooose job category",
            changeCategory: "Change job category",
            chooseProffession: "Choose profession",
            changeProffession: "Change profession",
            currently: "Currently",
            change: "Change",
            choose: "Choose",
            country1: "In which country is this profession relevant?",
            country2: "County",
            city1: "In which city is this profession relevant?",
            city2: "City",
            chooseJobType: "Choose job type",
            jobType1: "Long-term",
            jobType2: "Short-term",
            jobType3: "Voluntary",
            salary: "How much will be salary",
            add: "Add",
            photo: "photo",
            submit: "Submit"
        },
        settings: {
            profile: {
                heading: "Profile",
                name: "First name",
                surname: "Last name",
                companyName: "Company name",
                email: "E-mail",
                jobStatus: "Job status",
                adm: "#AJS",
                employed: "Employed",
                country: "Country",
                city: "City",
                closeProfile: {
                    heading: "Account deactivation",
                    question: "What will happen when you deactivate your account?",
                    answer1: "All account information will be deleted",
                    answer2: "You won't be able to authorize using your account",
                    answer3: "Your premium plan will be deleted, if you had one",
                    chooseReason: "Choose reason",
                    button: "Deactivate account"
                }
            },
            security: {
                heading: "Security",
                subHeading1: "Password",
                password1: "New password",
                password2: "Confirm new password",
                passwordPlaceholder1: "Type in new password",
                passwordPlaceholder2: "Repeat new password",
                passwordGuide: "A password should be at least eight characters long and include a combination of lowercase un uppercase letters and numbers.",
                subHeading2: "Phone number verification",
                recomended: "Recommended",
                phoneInfo: 'Your phone is not a verified by Youth Deal. Click "Verify Now" to complete your phone verification.'
            },
            premium: {
                heading: "Premium",
                status: "Premium status",
                active: "Active",
                notActive: "Inactive",
                deactivate: {
                    heading: "Premium status deactivation",
                    question: "What will happen if I deactivate my Premium status?",
                    answer1: "If you have not used Premium by the end of the month for which you paid, it will be deactivated from the beginning of the following month.",
                    answer2: "Only limited Premium features will be available to you, and you will not be able to fully enjoy our Web-application ",
                    answer3: "We will be unhappy.  But you don't want us to be sad, do you?",
                    chooseReason: "Choose reason",
                    reason: "I want to deactivate my Premium status because...",
                    buton: "Deactivate Premium"
                }
            },
            payments: {
                heading1: "Balance",
                remaining: "Your balance is",
                button1: "Add money",
                heading2: "Payment methods",
                button2: "Add method",
                info1: "You haven't set up any payment method.",
                info2: "Set up payment methods to get your first job immediately when you will get approved for it."
            },
            notifications: {
                heading: "Notifications",
                subHeading1: "Show notifications for:",
                option1: "E-mail notifications",
                option2: "Web notifications",
                option3: "Real-time notifications",
                heading2: "Sound notifications",
                option4: "On",
                testSound: "Test it",
                testSoundButton: "Replay"
            },
            save: "Save"
        },
        homePage: {
            heading1: "Welcome to",
            subHeader1: "The most suitable position for each employee",
            subHeader2: "The most suitable employee for each employer",
            button1: "I am an employer ",
            button2: "I am an employee",
            findOptions: {
                heading: "Find a job or employee in any field:",
                popularSearches: "Popular searches",
                showMore: "Show more"
            },
            findTeamMembers: {
                heading: "Find the best team members for your project",
                subHeading1: "Do you want to find team members for your project?",
                subHeading2: "Add an offer, receive applications and choose the best ones!",
                buttonText: "Find with Youth Deal"
            },
            contacts: {
                heading: "Contacts",
                subHeading: "Contact a potential employer, employee or team member",
                button: "Find a contact"
            },
            adm: {
                heading: "#AJS",
                subHeading: "If you are currently active job seeker (#AJS), then this role is right for you! Mark this during registration or change it any time in the profile settings",
                button: "Start"
            }
        },
        authorizedHomePage: {
            longtermJobs: "Long-term",
            shorttermJobs: "Short-term",
            voluntaryJobs: "Voluntary",
            job: "Jobs",
            users: "Users",
            leftPanel: {
                premium: "Premium (active)",
                contacts: "Contacts",
                findContacts: "Find your contacts to chat with them",
                saved: "Saved"
            },
            Right: {
                chatHeading: "Chat"
            }
        },
        profile: {
            jobSeeker: {
                activeJobSeeker: "#AJS",
                birthDate: "Birth date",
                stars: "Collected stars",
                description: "Description:",
                education: "Education",
                currentJob: "Existing job position",
                previousJob: "Previous job",
                extraSkills: "Additional skills",
                noEntries: "This user hasn't finished fulfiling profile",
                save: "Save"
            },
            jobGiver: {
                homePage: "Home page",
                employeeCount: "Number of total employees",
                phoneNum: "Phone number",
                email: "E-mail",
                location: "Location",
                description: "Company description",
                noDescription: "This company hasn't yet written description",
                newJobOffer: "Make new job offer",
                jobOffers: "Job offers",
                noJobOffers: "This company hasn't any job offer"
            },
            editModal: {
                heading: "Profile editing",
                name: "First name:",
                surname: "Last name:",
                companyName: "Company name:",
                website: "Website:",
                employeeCount: "Number of total employees:",
                phoneNum: "Phone number:",
                profession: "Profession",
                change: "Change",
                choose: "Choose",
                birthDate: "Birth date:",
                country: "Contry:",
                city: "City:",
                isActiveJobSeeker: "Are you an active job seeker?",
                yes: "Yes",
                no: "No",
                description: "Describe yourself:",
                companyDescription: "Describe company:",
                cancel: "Back",
                save: "Save"
            },
            none: "None",
            unknown1: "Not entered",
            unknown2: "Not entered",
            location: "Location",
        },
        jobOffer: {
            location: "Location",
            locationUnknown: "Unknown",
            proffession: "Profession",
            responsabilities: "Skills and duties",
            companyOffers: "Companu offers",
            signUp: "Apply",
            signOff: "Refuse",
            salaryBeginningFrom: "BEGINNING FROM",
            salaryPerMonth: "monthly",
            editModal: {
                heading: "Rediģēt darba piedāvājumu",
                responsibilities: "Employee skills and duties",
                jobDescription: "Companu offers:",
                chooseCategory: "Choose job category",
                changeCategory: "Change category",
                chooseProffession: "Choose professions",
                changeProffession: "Change profession",
                currently: "Currently",
                change: "Change",
                choose: "Choose",
                country1: "In which country is this profession relevant?",
                country2: "Country",
                city1: "In which city is this profession relevant?",
                city2: "City",
                chooseJobType: "Choose job type",
                jobType1: "Long-term",
                jobType2: "Short-term",
                jobType3: "Voluntary",
                salary: "How much will be salary?",
                cancel: "Cancel",
                submit: "Submit",
                delete: {
                    heading: "Delete job offer",
                    question: "What will happen if I delete a job offer?",
                    answer1: "The job offer will be permanently deleted.",
                    answer2: "The job offer will no longer be visible to anyone.",
                    button: "Delete"
                }
            }
        },
        premiumPage: {
            premiumHeader: {
                jobGiver: "Employer ",
                jobSeeker: "Employee",
            },
            premiumText1: "Purchase our Premium to make the job search process easier, get more information about your chosen job and get help in building your career.",
            premiumText2: "Be on top with Premium!",
            premiumOptions: {
                jobGiver: {
                    option1: "Available stats - how employees interact with your ads",
                    option2: "Advanced search",
                    option3: "Online video call opportunity",
                    option4: "You can post 4 or more job offers at the same time",
                },
                jobSeeker: {
                    option1: "Paziņojumi par jauniem darba sludinājumiem",
                    option2: "Sīkāks algas pārskats",
                    option3: "Pieeja video pamācību materiālu bāzei",
                    option4: "Palīdzība ar CV sastādīšanu",
                    option5: "Iespējams vienlaicīgi pieteikties vairākiem darba piedāvājumiem",
                },
                buttons: {
                    text: "€/a month. Subscribe",
                }
            }
        },
        loginPage: {
            heading: "Pieslēgties",
            email: "E-mail",
            incorrectEmail: "Wrong e-mail!",
            password: "Password",
            passwordLenght: "Password must be at least 5 characters long!",
            passwordEmpty: "Parole nevar būt tukša!",
            forgotPassword: "Aizmirsi paroli?",
            login: "Log in",
            otherOptions: "Log in wit",
            noAccount: "Nav konta?",
            register: "Reģistrēties"
        },
        registerChoose: {
            heading: "Reģistrācija",
            subHeading: "Norādi savu lomu:",
            button1: "Es esmu darba devējs ",
            button2: "Es esmu darba ņēmējs "
        },
        registerJobgiverPage: {
            header: "Uzņēmuma Reģistrācija",
            subHeader: "Tas neaizņems daudz laika",
            alreadyRegistered: "Jau esiet reģistrēts?",
            login: "Ieiet",
            companyName: "Uzņēmuma nosaukums:",
            companyEmail: "Uzņēmuma e-pasts:",
            password: "Parole:",
            privacyPolicy1: "Es piekrītu mūsu ",
            privacyPolicy2: "Privātuma Politikai",
            button: "Reģistrēties",
            otherRegisterOptions: "Vai reģistrējies ar"
        },
        registerJobseekerPage: {
            header: "Reģistrācija",
            subHeader: "Tas neaizņems daudz laika",
            alreadyRegistered: "Jau es reģistrēts?",
            login: "Ieiet",
            firstName: "Vārds:",
            lastName: "Uzvārds:",
            email: "E-pasts:",
            password: "Parole:",
            privacyPolicy1: "Es piekrītu mūsu ",
            privacyPolicy2: "Privātuma Politikai",
            button: "Reģistrēties",
            otherRegisterOptions: "Vai reģistrējies ar"
        },
        footer: {
            links: {
                begin: "Start",
                about: "About us",
                contacts: "Contacts",
                support: "SUPPORT",
                needHelp: "Need help?",
                userRules: "Site instruction",
                privacyPolicy: "Privacy policy",
                socialSites: "SOCIAL MEDIA"
            },
            description: "Youth Deal is a more convenient and innovative environment for the job market. We give every young person the opportunity to find a suitable job and start building their career. We also help every employer to find the most suitable employee. Find Your opportunities with Youth Deal."
        },
        cookie: {
            heading: "Hello!",
            info: 'We use cookies to make your experience of our websites better. By clicking on "Accept", you agree to our ',
            infoLink: "Privacy policy",
            button1: "Accept",
            button2: "Reject"
        },
        saved: {
            jobType1: "Ilgtermiņa darbi",
            jobType2: "Īstermiņa darbi",
            jobType3: "Brīvprātīgie darbi"
        }
    },
    russian: {
        header: {
            homeLink: "Начало",
            categoryLink: "Категории",
            admLink: "#АПР",
            premiumLink: "Премиум",
            registerLink: "Регестрироваться",
            loginLink: "Войти",
        },
        authorizedHeader: {
            searchPlaceholder: "Контакты, компании...",
            searchBtn: "Найти",
            home: "Начало",
            chat: "Чат",
            categories: "Категории",
            dropdown: {
                profile: "Мой Профиль",
                newJobOffer: "Новая вакансия",
                profileAdd: "Реклама профиля",
                premium: "Премиум",
                saved: "Сохранённые",
                settings: "Настройки",
                logout: "Выйти"
            }
        },
        chat: {
            lastContacts: "Последние контакты",
            searchContacts: "Найти контакты",
            deleteChat: "Стереть переписку",
            noChat: "Выбрать контакт, с которым будешь общаться",
            typeHere: "Пиши здесь..."
        },
        newJobOffer: {
            heading: "Новое предложение о работе",
            name: "Название работы",
            requirements: "Darbinieku prasmes un pienākumi",
            jobDescription: "Uzņēmums darbiniekiem piedāvā:",
            chooseCategory: "Izvēlies darba kategoriju",
            changeCategory: "Mainīt darba kategoriju",
            chooseProffession: "Izvēlies profesiju",
            changeProffession: "Поменять профессию",
            currently: "pašlaik",
            change: "Поменять",
            choose: "Выбрать",
            country1: "В какой стране актуальна эта профессия?",
            country2: "Страна",
            city1: "В каком городе актуальна эта профессия?",
            city2: "Город",
            chooseJobType: "Выбрать срок работы",
            jobType1: "Ilgtermiņa",
            jobType2: "Īstermiņa",
            jobType3: "Brīvprātigs",
            salary: "Зарплата в месяц",
            add: "Добавить",
            photo: "фотографию",
            submit: "Выложить"
        },
        settings: {
            profile: {
                heading: "Профиль",
                name: "Имя",
                surname: "Фамилия",
                companyName: "Название компании",
                email: "Почта",
                jobStatus: "Статус",
                adm: "#ADM",
                employed: "Занят",
                country: "Страна",
                city: "Город",
                closeProfile: {
                    heading: "Деактивизация профиля",
                    question: "Что произойдёт, если ты деактивизируешь аккаунт?",
                    answer1: "Вся ифнормация о профиле будет стёрта",
                    answer2: "Ты больше не сможешь войти через этот аккаунт",
                    answer3: "Все Премиум планы будут удалены (если такие имеются)",
                    chooseReason: "Выбери причину:",
                    button: "Деактивизировать аккаунт"
                }
            },
            security: {
                heading: "Безопасность",
                subHeading1: "Пароль",
                password1: "Новый пароль",
                password2: "Подтвердить новый пароль",
                passwordPlaceholder1: "Введи новый пароль",
                passwordPlaceholder2: "Введи новый пароль повторно",
                passwordGuide: "8 и больше символов. Включая большие и маленькие букву и цифры",
                subHeading2: "Верификация телефона",
                recomended: "Рекомендовано",
                phoneInfo: "Ваш телефон ещё не верифицирован. Нажмите на \"Верифицировать\", чтобы закончить верификайию телефона."
            },
            premium: {
                heading: "Премиум",
                status: "Премиум Статус",
                active: "Активный",
                notActive: "Неактивный",
                deactivate: {
                    heading: "Деактивизация Премиус статуса",
                    question: "Что произойдёт, если вы деактивизируйте свой Премиум статус?",
                    answer1: "Если вы не использовалиПремиум до конца месяца за который заплатили, то он деактивизируется с начала следующего месяца.",
                    answer2: "Все Премиум функции не будут тебе доступны и ты не сможешь ощутить нашу Веб-приложение.",
                    answer3: "Нам будет очень грустно. Ты же не хочешь, чтобы нам было грустно?",
                    chooseReason: "Выбери причину:",
                    reason: "Я хочу деактивизировать Премиум статусс, потому что...",
                    buton: "Деактивизировать Премиум статус"
                }
            },
            payments: {
                heading1: "Остаток",
                remaining: "Ваш баланс",
                button1: "Пополнить баланс",
                heading2: "Способы оплаты",
                button2: "Добавить метод оплаты",
                info1: "Jūs vēl neesat iestatījis nevienu norēķinu metodi.", 
                info2: "Iestatiet norēķinu metodes, lai jūs uzreiz varētu pieņemt darbā, kad būsiet gatavs."
            },
            notifications: {
                heading: "Paziņojumi",
                subHeading1: "Rādīt paziņojumus par:",
                option1: "E-pasta paziņojumi",
                option2: "Web paziņojumi",
                option3: "Paziņojumi reālajā laikā",
                heading2: "Paziņojumi reālajā laikā skaņa",
                option4: "Ar skaņu",
                testSound: "Notestēt skaņu",
                testSoundButton: "Atskaņot"
            },
            save: "Saglabāt"
        },
        homePage: {
            heading1: "Sveicināts",
            subHeader1: "Katram darbiniekam vispiemērotākais amats",
            subHeader2: "Katram darba devējam vispiemērotākais darbinieks",
            button1: "Es esmu darba devējs",
            button2: "Es esmu darba ņēmējs",
            findOptions: {
                heading: "Atrodi darbu vai darbinieku ikvienā jomā:",
                popularSearches: "Populārākie Meklējumi",
                showMore: "Parādīt vēl"
            },
            findTeamMembers: {
                heading: "Atrodi labākos komandas biedrus savam projektam",
                subHeading1: "Vai vēlies atrast komandas biedrus savam projektam?",
                subHeading2: "Pievieno piedāvājumu, saņem pieteikumus un atlasi labākos!",
                buttonText: "Atrast kopā ar Youth Deal"
            },
            contacts: {
                heading: "Kontakti",
                subHeading: "Sazinies ar potenciālo daba devēju, ņēmēju vai arī komandas biedru",
                button: "Atrast Kontaktus"
            },
            adm: {
                heading: "#ADM",
                subHeading: "Ja Tu pašlaik esi aktīvā darba meklēšanā (#ADM), tad šī loma ir piemērota tieši Tev! Atzīmē to reģistrācijas laikā vai arī jebkurā brīdī profila iestatījumos",
                button: "Sākt"
            }
        },
        authorizedHomePage: {
            longtermJobs: "Ilgtermiņa",
            shorttermJobs: "Īstermiņa",
            voluntaryJobs: "Brīvprātīgie",
            job: "darbi",
            users: "Пользователи",
            leftPanel: {
                premium: "Premium (aktīvs)",
                contacts: "Kontakti",
                findContacts: "Atrodiet savus kontaktus, lai ar viņiem tērzētu",
                saved: "Saglabātie"
            },
            Right: {
                chatHeading: "Čats"
            }
        },
        profile: {
            jobSeeker: {
                activeJobSeeker: "#ADM",
                birthDate: "Dzimšanas datums",
                stars: "Sakrātās zvaigznītes",
                description: "Apraksts par sevi:",
                education: "Izglītība",
                currentJob: "Esošais amats",
                previousJob: "Pēdējais amats",
                extraSkills: "Papildus prasmes",
                noEntries: "Šis lietotājs nav pabeidzis veidot savu profilu",
                save: "Saglabāt"
            },
            jobGiver: {
                homePage: "Mājas lapa",
                employeeCount: "darbinieku skaits",
                phoneNum: "numurs",
                email: "e-pasts",
                location: "atrašanās vieta",
                description: "Informācija par kompāniju",
                noDescription: "šī kompānija vēl nav uzrakstījusi informāciju",
                newJobOffer: "Izveidot jaunu darba vakanci",
                jobOffers: "Darba Piedāvājumi",
                noJobOffers: "Šai kompānijai vēl nav darba piedāvājumi"
            },
            editModal: {
                heading: "Profila rediģēšana",
                name: "Vārds:",
                surname: "Uzvārds:",
                companyName: "Kompānijas nosaukums:",
                website: "Mājas lapa:",
                employeeCount: "Darbinieku skaits:",
                phoneNum: "Telefona nummurs:",
                profession: "Profesija",
                choose: "Izvēlēties",
                change: "Mainīt",
                birthDate: "Dzimšanas datums:",
                country: "Valsts:",
                city: "Pilsēta:",
                isActiveJobSeeker: "Vai esat aktīvā darba meklēšanā?",
                yes: "Jā",
                no: "Nē",
                description: "Apraksts par sevi:",
                companyDescription: "Kompānijas apraksts:",
                cancel: "Atpakaļ",
                save: "Saglabāt"
            },
            none: "Nav",
            unknown1: "Nav ievadīts",
            unknown2: "Nav ievadīta",
            location: "Atrašanās vieta",
        },
        jobOffer: {
            location: "Atrašanās vieta",
            locationUnknown: "Nezināma",
            proffession: "Profesija",
            responsabilities: "Prasmes un pienākumi",
            companyOffers: "Kompānija piedāvā",
            signUp: "Pieteikties",
            signOff: "Atteikties",
            salaryBeginningFrom: "SĀKOT NO",
            salaryPerMonth: "mēnesī",
            editModal: {
                heading: "Rediģēt darba piedāvājumu",
                responsibilities: "Darbinieku prasmes un pienākumi",
                jobDescription: "Uzņēmums darbiniekiem piedāvā:",
                chooseCategory: "Izvēlies darba kategoriju",
                changeCategory: "Mainīt darba kategoriju",
                chooseProffession: "Izvēlies profesiju",
                changeProffession: "Mainīt profesiju",
                currently: "pašlaik",
                change: "Mainīt",
                choose: "Izvēlēties",
                country1: "Kādā valstī ir aktuāla šī profesija?",
                country2: "Valsts",
                city1: "Kādā pilsētā ir aktuāla šī profesija?",
                city2: "Pilsēta",
                chooseJobType: "Izvēlieties darba termiņu",
                jobType1: "Ilgtermiņa",
                jobType2: "Īstermiņa",
                jobType3: "Brīvprātigs",
                salary: "Kāda būs mēneša alga?",
                cancel: "Atcelt",
                submit: "Iesniegt",
                delete: {
                    heading: "Izdzēst darba piedāvājumu",
                    question: "Kas notiks ja es izdzēsīšu darba piedāvājumu?",
                    answer1: "Darba piedāvājums tiks neatgrezieniski izdzēsts.",
                    answer2: "Darba piedāvājums vairs nevienam nebūs redzams.",
                    button: "Izdzēst"
                }
            }
        },
        premiumPage: {
            premiumHeader: {
                jobGiver: "Darba devējs",
                jobSeeker: "Darba ņēmējs",
            },
            premiumText1: "Iegādājies mūsu Premium, lai atvieglotu darba meklēšanas procesu, iegūtu vairāk informācijas par Tevis izvēlēto amatu un gūtu palīdzību karjeras izveidē",
            premiumText2: "Esi augšpusē ar Premium!",
            premiumOptions: {
                jobGiver: {
                    option1: "Pieejama statistika, kā darba ņēmēji mijiedarbojas ar taviem sludinājumiem",
                    option2: "Advancēta meklēšana",
                    option3: "Tiešsaites videosarunas iespēja",
                    option4: "Vienlaikus var ievietot 4 vai vairāk sludinājumu",
                },
                jobSeeker: {
                    option1: "Paziņojumi par jauniem darba sludinājumiem",
                    option2: "Sīkāks algas pārskats",
                    option3: "Pieeja video pamācību materiālu bāzei",
                    option4: "Palīdzība ar CV sastādīšanu",
                    option5: "Iespējams vienlaicīgi pieteikties vairākiem darba piedāvājumiem",
                },
                buttons: {
                    text: "€/Mēnesī. Abonēt",
                }
            }
        },
        loginPage: {
            heading: "Pieslēgties",
            email: "E-pasts",
            incorrectEmail: "Nav pareizs E-pasts!",
            password: "Parole",
            passwordLenght: "Parolei ir jābūt ne mazāk nekā 5 simboli!",
            passwordEmpty: "Parole nevar būt tukša!",
            forgotPassword: "Aizmirsi paroli?",
            login: "Ieiet",
            otherOptions: "Vai ieej ar",
            noAccount: "Nav konta?",
            register: "Reģistrēties"
        },
        registerChoose: {
            heading: "Reģistrācija",
            subHeading: "Norādi savu lomu:",
            button1: "Es esmu darba devējs ",
            button2: "Es esmu darba ņēmējs "
        },
        registerJobgiverPage: {
            header: "Uzņēmuma Reģistrācija",
            subHeader: "Tas neaizņems daudz laika",
            alreadyRegistered: "Jau esiet reģistrēts?",
            login: "Ieiet",
            companyName: "Uzņēmuma nosaukums:",
            companyEmail: "Uzņēmuma e-pasts:",
            password: "Parole:",
            privacyPolicy1: "Es piekrītu mūsu ",
            privacyPolicy2: "Privātuma Politikai",
            button: "Reģistrēties",
            otherRegisterOptions: "Vai reģistrējies ar"
        },
        registerJobseekerPage: {
            header: "Reģistrācija",
            subHeader: "Tas neaizņems daudz laika",
            alreadyRegistered: "Jau es reģistrēts?",
            login: "Ieiet",
            firstName: "Vārds:",
            lastName: "Uzvārds:",
            email: "E-pasts:",
            password: "Parole:",
            privacyPolicy1: "Es piekrītu mūsu ",
            privacyPolicy2: "Privātuma Politikai",
            button: "Reģistrēties",
            otherRegisterOptions: "Vai reģistrējies ar"
        },
        footer: {
            links: {
                begin: "Sākt",
                about: "Par Mums",
                contacts: "Kontakti",
                support: "ATBALSTS",
                needHelp: "Nepieciešama palīdzība?",
                userRules: "Lietošanas noteikumi",
                privacyPolicy: "Privātuma politika",
                socialSites: "SOCIĀLIE TĪKLI"
            },
            description: "Youth Deal ir ērtāka un inovatīvāka vide darba tirgum. Mēs sniedzam iespēju ikvienam jaunietim atrast sev piemērotu darbu un sākt veidot savu karjeru. Kā arī palīdzam ikvienam darba devējam atrast vispiemērotāko darbinieku. -Atrodi vispiemērotāko kopā ar Youth Deal."
        },
        cookie: {
            heading: "Sveiki!",
            info: "Mēs izmantojam savus un trešo pušu sīkfailus, lai personalizētu saturu un analizētu tīmekļa trafiku. Nospiežot uz \"Piekrītu\", Jūs piekrītat mūsu",
            infoLink: "Privātuma Politikai",
            button1: "Piekrītu",
            button2: "Nepiekrītu"
        },
        saved: {
            jobType1: "Ilgtermiņa darbi",
            jobType2: "Īstermiņa darbi",
            jobType3: "Brīvprātīgie darbi"
        }
    },
};