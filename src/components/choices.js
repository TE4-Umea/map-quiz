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
    }
]

