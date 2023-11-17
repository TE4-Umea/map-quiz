export const textNodes = [
    {
        id: 1,
        text1: 'Vilken av dessa bilder nedan passar in med bilden ovan?',
        text: '/pic1/picture.png',
        options: [
            {
                text: "/pic1/picCorrect.png",
                nextText: 2
            },
            {
                text: '/pic1/picFalse.png',
                nextText: 2
            },
            {
                text: '/pic1/picFalse2.png',
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
                nextText: 3
            },
            {
                text: '/pic2/picFalse.png',
                nextText: 3
            },
            {
                text: '/pic2/picCorrect.png',
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
                text: '/pic3/picCorrect.png',
                setState: { natur: true },
                nextText: 4
            },
            {
                text: '/pic3/picFalse.png',
                setState: { natur: true },
                nextText: 4
            }
        ]
    },
    {
        id: 4,
        text1: 'Vilken av dessa bilder nedan passar in med bilden ovan?',
        text: '/pic4/picture.png',
        options: [
            {
                text: "/pic4/picCorrect.png",
                setState: { teknik: true },
                nextText: 5
            },
            {
                text: '/pic4/picFalse.png',
                setState: { natur: true },
                nextText: 5
            },
            {
                text: '/pic4/picFalse2.png',
                setState: { natur: true },
                nextText: 5
            }
        ]
    },
    {
        id: 5,
        text1: 'Vilken av dessa bilder nedan passar in med bilden ovan?',
        text: '/pic5/picture.png',
        options: [
            {
                text: "/pic5/picFalse2.png",
                setState: { teknik: true },
                nextText: 6
            },
            {
                text: '/pic5/picFalse.png',
                setState: { natur: true },
                nextText: 6
            },
            {
                text: '/pic5/picCorrect.png',
                setState: { natur: true },
                nextText: 6
            }
        ]
    },
    {
        id: 6,
        text1: 'Vilken av dessa bilder nedan passar in med bilden ovan?',
        text: '/pic6/picture.png',
        options: [
            {
                text: "/pic6/picFalse2.png",
                setState: { teknik: true },
                nextText: 7
            },
            {
                text: '/pic6/picCorrect.png',
                setState: { natur: true },
                nextText: 7
            },
            {
                text: '/pic6/picFalse.png',
                setState: { natur: true },
                nextText: 7
            }
        ]
    }
]

