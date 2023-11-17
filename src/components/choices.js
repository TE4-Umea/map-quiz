export const textNodes = [
    {
        id: 1,
        text1: 'Vilken av dessa bilder nedan passar in med bilden ovan?',
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
                nextText: 2
            },
            {
                text: '/pic1/picFalse2.png',
                setState: { natur: true },
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text1: 'Vilken av dessa bilder nedan passar in med bilden ovan?',
        text: '/pic2/picture.png',
        options: [
            {
                text: "/pic2/picFalse2.png",
                setState: { teknik: true },
                nextText: 3
            },
            {
                text: '/pic2/picFalse.png',
                setState: { natur: true },
                nextText: 3
            },
            {
                text: '/pic2/picCorrect.png',
                setState: { natur: true },
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text1: 'Vilken av dessa bilder nedan passar in med bilden ovan?',
        text: '/pic3/picture.png',
        options: [
            {
                text: "/pic3/picFalse2.png",
                setState: { teknik: true },
                nextText: 4
            },
            {
                text: '/pic3/picFalse.png',
                setState: { natur: true },
                nextText: 4
            },
            {
                text: '/pic3/picCorrect.png',
                setState: { natur: true },
                nextText: 4
            }
        ]
    }
]