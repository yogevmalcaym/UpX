const translations = {
    "BIRTHDAY_MENU_TITLE": "יום הולדת",
    "BIRTH_MENU_TITLE": "לידה",
    "GRADUATION_MENU_TITLE": "סיום לימודים",
    "ANNIVERSARY_MENU_TITLE": "יום נישואים",
};

export const fetchMenuItems = async () => {

    return new Promise(r => setTimeout(() => r([
        {
            id: 'birth',
            text: translations.BIRTHDAY_MENU_TITLE,
            isCategory: true
        },
        {
            id: 'birth',
            text: translations.BIRTH_MENU_TITLE,
            isCategory: true
        },
        {
            id: 'graduation',
            text: translations.GRADUATION_MENU_TITLE,
            isCategory: true
        },
        {
            id: 'anniversary',
            text: translations.ANNIVERSARY_MENU_TITLE,
            isCategory: true,
            children: [
                {
                    id: 'asfasdf',
                    text: 'dfasfasdf'
                },
                {
                    text: 'fhjgfhkgjd',
                    id: 'agsfsjb'
                },
                {
                    text: 'eyer',
                    id: 'fsfjshoub'
                }
            ]
        }
    ]), 1200))
};
