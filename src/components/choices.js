
// Koden nedan används för att avgöra vilka val man gör och hur valen kommer avgöra historians riktning.
export const textChoices = [
    {
        id: 1,
        text: "Detta CV är en samling av Tim's historier. Allting började med skolan, Tim har alltid gått skolan med när det kom till högstadiet så var det ett mycket viktigt val man behövde göra som skulle avgöra hela livets gång.\
       Det viktiga som pratas om är valet av vilket gymnasie och vilken linje han skall gå. Tim har alltid varit mycket intresserad av teknik och kemi som liten och så ett val mellan teknik linjen och naturlinjen en självklarhet. \
       \nVad väljer du att göra?",
        options: [
            {
                text: 'Börja Teknik på NTI gymnasiet',
                setState: { teknik: true },
                nextText: 2
            },
            {
                text: 'Börja Natur på Maja Beskow gymnasiet',
                setState: { natur: true },
                nextText: 3
            }
        ]
    }
]