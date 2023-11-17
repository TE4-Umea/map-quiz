export const textNodes = [
    {
        id: 1,
        text1: 'Vilka av dessa bilder nedan passar in med bilden ovan?',
        text: '/pic1/picture.png',
        options: [
            {
                text: "/pic1/picCorrect.png",
                setState: { teknik: true },
                nextText: 2
            },
            {
                text: '/pic1/picFalse.png',
                setState: { natur: true },
                nextText: 3
            },
            {
                text: '/pic1/picFalse2.png',
                setState: { natur: true },
                nextText: 3
            }
        ]
    }
]