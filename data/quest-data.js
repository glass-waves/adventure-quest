const shaman = {
    id: 'california',
    title: 'A Festy Questy',
    image: 'shaman.jpg',
    position: {
        top: '50%',
        left: '7%'
    },
    description: "You are attending Coachella music festival. In between watching Daft Punk and Beyonce, you come across a man in a horned helmet, a furry vest and bad tattoos on his exposed torso. You don't pay much mind, as this is par for the course at a music festival. He asks you if want to take a red pill with him. You agree, assuming the worst that could happen is a terrible, ego crushing, nightmare of a trip on some gen Z research chemical. You soon realize it is far, far worse as he proceeds to violently attempt to convince you of a worldwide kabal of child trafficking Democrats led by none other than Hilary Clinton. You cant take this any longer so you: ",
    choices: [
        {
            id: 'fight',
            description: 'You take off his helmet and attempt to gore him with it to get him to stop talking.',
            result: 'His organic produce and pasture raised meat hardened abs reject your meager attempt at violent intervention. You run away in fear.',
            sanity: -20,
            media: 20,
            deprogram: 0
        },
        {
            id: 'petty',
            description: 'You ask if he wants an apple you have in your canvas pouch.',
            result: " He accepts and is quieted by your produce. You told him it was organic, it wasn't. You walk away snickering, not victorious, but satisfied.",
            sanity: 20,
            media: 0,
            deprogram: 0
        },
        {
            id: 'reason',
            description: 'You attempt to explain to him that while Hillary Clinton is indeed a little stiff, she certainly does not traffic children or consume their adrenal glands.',
            result: 'The shaman responds with lies that are absurd that you cannot prove they are wrong. This sends you into a rage spiral and you end up punching a metallic banana art exhibit until your hand bleeds and you have attracted a crowd of onlookers. ',
            sanity: -40,
            media: 20,
            deprogram: 0
        },
        {
            id: 'convince',
            description: 'You explain that conservatives have been in support of Monsanto, GMOs and other nefarious agriculture for years and Democrats are far more likely to traffic organic produce than andrenal glands.',
            result: 'This seems to have a real affect on the shaman. He stares in the the distance as if his mind is slowly turning around in his skull. For all you know it is. You leave, exhausted, yet successful.',
            sanity: -10,
            media: 0,
            deprogram: 1
        },
    ],
};

const powell = {
    id: 'virginia',
    title: 'The Kraken Smackin',
    image: 'sydney.jpeg',
    position: {
        top: '45%',
        left: '67%'
    },
    description: `You are in Virginia visiting your parents. They ask you to run to the supermarket to grab some more Budweiser for the fridge. As you puruse the isles you come across the beer and liquor section. Just as you reach into the cooler for the beer, you hear a loud muttering behind you. Sydney Powell is holding a bottle of Kraken rum, muttering "How dare they try and steal my thunder, I am the kraken, I'll see them in court!`,
    choices: [
        {
            id: 'fight',
            description: 'Grab the bottle and knock her in the head with it',
            result: 'You snatch the bottle of rum out of her hands, open it, take a huge swig and swing for the fences. Unfortunately she has squid like reflexes and grace, easily dodging your attack. She has you arrested for attempted assault, demands to prosecute the case herself and bungles it so badly that it gets tossed out of court.',
            sanity: -20,
            media: 40,
            deprogram: 0
        },
        {
            id: 'convince',
            description: `Distract her from her current conspiratorial obsession, with a different conspiracy theory. `,
            result: `You bring up the theory that Woody Harrelson's father was the one who actually murdered judge Wood, a case she prosecuted years prior. She seems adequately redirected. You emerge from the store victorious, bud in hand. `,
            sanity: 0,
            media: 0,
            deprogram: 1
        },
        {
            id: 'petty',
            description: 'You tell her that Kraken rum has more integrity than she will ever have and that she should probably give up lawyering for good. ',
            result: 'She laughs and walks away, leaving you fuming. You kick the liquor shelf and it slowly tips over, shattering all of the bottles on the floor. Someone records this on their phone, posts it to Tik Tok and within minutes you have gone viral.',
            sanity: -20,
            media: 40,
            deprogram: 0
        },
        {
            id: 'reason',
            description: 'You explain to her the damage she is doing to our democracy and beg her to stop perpetuating the lies.',
            result: `Sydney launches into a rant about how poll workers were inserting Flaming Hot Cheetos into the voting machines to alter the vote count. "Why would all the Dominion workers have orange fingers huh?" You don't even know where to start with that one. You decide to also grab a bottle of whiskey on your way out to try and forget about it. `,
            sanity: -20,
            media: 0,
            deprogram: 0
        },
    ],
};

const rudy = {
    id: 'new-york',
    title: 'A Run in with Rudy',
    image: 'rudy.jpeg',
    position: {
        top: '35%',
        left: '90%'
    },
    description: 'You are at your local landscaping company inquiring about their rates for bamboo planting. As you leave, you hear a rustling and a snort to your left. There amongst the immaculately pruned Japanese maples, a strange creature is rooting around in the dirt. At first you figure you must have forgotten that it was Halloween and that this obviously was a die hard batman fan dressed up as penguin and searching for the fish prop they had dropped. Then, as the man turns to you with a growl, teeth bared, black hair dye rolling down his face, you realize it is none other than Rudy Gulliani!',
    choices: [
        {
            id: 'fight',
            description: 'You happen to have some wild caught trout from the grocery store in the car. You run, get it and use it to lure Rudy into your Subaru where you quickly engage the child locks, trapping Rudy inside.',
            result: `Rudy uses his razor sharp claws to cut a perfect circle out of your car window. He climbs through the whole, rage in his eyes and coming straight for you. Just as he is about to slip through the hole, his gut becomes jammed in the opening. "Goodbye Rudy" you say with a smile. He grunts in your direction like a constipated badger.`,
            sanity: -20,
            media: 20,
            deprogram: 0
        },
        {
            id: 'reason',
            description: `You argue that the bid is up, he's wasting his time trying to protect the man that will inevitably throw him under the bus after he is done with him.`,
            result: `Rudy laughs, gnashing his teeth together with a disturbing screech. "I'll decide when this hayride is over, hope on or I'll run your ass over. He then turns with surprising grace, and waddles off down the sidewalk, clacking his claws together and leaving a trail of foul black liquid behind him."`,
            sanity: -40,
            media: 10,
            deprogram: 0
        },
        {
            id: 'petty',
            description: `You point out that the plants are starting to wilt from his toxic hair product seeping into the soil. You tell him if he's here scouting for the next press conference, he better keep the foliage healthy.`,
            result: 'Rudy explains that contrary to common belief, the black liquid seen dripping down his skull in the news was actually fluid draining from small holes he had drilled in his head in an attempt to off-gass all the bullshit he comes up with. You realize he only had a few weeks to live so you leave him alone and just tweet about it. ',
            sanity: -30,
            media: 30,
            deprogram: 0
        },
        {
            id: 'convince',
            description: 'You simply offer him a $20 dollar bill to stop being a maniac. ',
            result: 'Suprisingly this works! He almost bargains himself down to a ten, then claims you are trying to rip him off before pausing, taking the money and is never heard from again.',
            sanity: 0,
            media: 0,
            deprogram: 1
        },
    ],
};

const jones = {
    id: 'texas',
    title: 'Alex Jones is Scary',
    image: 'jones.jpg',
    position: {
        top: '60%',
        left: '20%'
    },
    description: `You are visiting Texas to do some freelance, crowd-sourced oil prospecting through the gig app Geysr. You are cruising over the Texan desert on a ATV, holding your phone up like a divining rod when your vehicle smashes into something solid. You are thrown from your seat, and as you fly through the air you quickly check your Instagram and Twitter accounts just to be sure you didn't miss anything before slamming into a dirt. You hear a blood curdling roar and realized you had just run into infamous talk show host and   `,
    choices: [
        {
            id: '',
            description: '',
            result: '',
            sanity: 0,
            media: 0,
            deprogram: 0
        },
        {
            id: '',
            description: '',
            result: '',
            sanity: 0,
            media: 0,
            deprogram: 0
        },
        {
            id: '',
            description: '',
            result: '',
            sanity: 0,
            media: 0,
            deprogram: 0
        },
        {
            id: '',
            description: '',
            result: '',
            sanity: 0,
            media: 0,
            deprogram: 0
        },
    ],
};

const greene = {
    id: 'georgia',
    title: 'The Greene Pile',
    image: 'greene.jpg',
    position: {
        top: '60%',
        left: '65%'
    },
    description: '',
    choices: [
        {
            id: '',
            description: '',
            result: '',
            sanity: 0,
            media: 0,
        },
        {
            id: '',
            description: '',
            result: '',
            sanity: 0,
            media: 0,
        },
        {
            id: '',
            description: '',
            result: '',
            sanity: 0,
            media: 0,
        },
        {
            id: '',
            description: '',
            result: '',
            sanity: 0,
            media: 0,
        },
    ],
};

export const quests = [
    shaman,
    powell,
    rudy,
    jones,
    greene
];