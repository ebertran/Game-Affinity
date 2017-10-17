const items = [{
        id: 1,
        question: "Are you more comfortable, as a player in an online game:",
        answers: {
            "Talking with friends in a tavern": "s",
            "Out hunting orcs by yourself for experience?": "a"
        }
    },
    {
        id: 2,
        question: "Which do you enjoy more in quests?",
        answerA: "Getting involved in the storyline",
        valueA: "s",
        answerB: "Getting the rewards at the end",
        valueB: "a"
    },

    item2 = {
        id: "q2",
        question: "Would you rather be:",
        answerA: "Popular?",
        valueA: "s",
        answerB: "Wealthy?",
        valueB: "a"
    },

    item3 = {
        id: "q3",
        question: "Which do you enjoy more in an online game?",
        answerA: "Getting the latest gossip",
        valueA: "s",
        answerB: "Getting a new item",
        valueB: "a"
    },

    item4 = {
        id: "q4",
        question: "Which would you rather have, as a player in an online game?",
        answerA: "A private channel, over which you and your friends can communicate",
        valueA: "s",
        answerB: "Your own house, worth millions of gold coins",
        valueB: "e"
    },

    item5 = {
        id: "q5",
        question: "Which would you enjoy more as an online game player?",
        answerA: "Running your own tavern?",
        valueA: "s",
        answerB: "Making your own maps of the world, then selling them",
        valueB: "e"
    },

    item6 = {
        id: "q6",
        question: "hat's more important in an online game to you?",
        answerA: "The number of people",
        valueA: "s",
        answerB: "The number of areas to explore<",
        valueB: "e"
    },

    item7 = {
        id: "q7",
        question: "What's more important to you?",
        answerA: "The quality of roleplaying in an online game",
        valueA: "s",
        answerB: "The uniqueness of the features, and game mechani",
        valueB: "e"
    },

    item8 = {
        id: "q8",
        question: "You're a player in an online game, and you want to fight a really tough dragon. How would you approach this problem?",
        answerA: "Get a big group of players to kill it.",
        valueA: "s",
        answerB: "Try a variety of weapons and magic against it, until you find its weakness.",
        valueB: "e"
    },

    item9 = {
        id: "q9",
        question: "You're a player in an online game, and about to go into an unknown dungeon. You have your choice of one more person for your party. Do you bring:",
        answerA: "A bard, who's a good friend of yours and who's great for entertaining you and your friends",
        valueA: "s",
        answerB: "A wizard, to identify the items that you find there?",
        valueB: "e"
    },

    item10 = {
        id: "q10",
        question: "Someone has PK'ed you (killed you in player vs. player combat). Do you want to:",
        answerA: "Find out why, and try to convince them not to do it again",
        valueA: "s",
        answerB: "Plot your revenge?",
        valueB: "k"
    },

    item11 = {
        id: "q11",
        question: "Which is more exciting?",
        answerA: "A well-roleplayed scenario",
        valueA: "s",
        answerB: "A deadly battle",
        valueB: "k"
    },

    item12 = {
        id: "q12",
        question: "Which would you enjoy more?",
        answerA: "Winning a duel with another player",
        valueA: "k",
        answerB: "Getting accepted by a clan (a group of other players)",
        valueB: "s"
    },

    item13 = {
        id: "q13",
        question: "What's worse:",
        answerA: "To be without power",
        valueA: "k",
        answerB: "To be without friends?",
        valueB: "s"
    },

    item14 = {
        id: "q14",
        question: "Would you rather:",
        answerA: "Hear what someone has to say",
        valueA: "s",
        answerB: "Show them the sharp blade of your axe?",
        valueB: "k"
    },

    item15 = {
        id: "q15",
        question: "In an online game, a new area opens up. Which do you look forward to more?",
        answerA: "Exploring the new area, and finding out its history",
        valueA: "e",
        answerB: "Being the first to get the new equipment from the area",
        valueB: "a"
    },

    item16 = {
        id: "q16",
        question: "In an online game, would you rather be known as:",
        answerA: "Someone who can run from any two points in the world, and really knows their way around",
        valueA: "e",
        answerB: "The person with the best, most unique equipment in the game?",
        valueB: "a"
    },

    item17 = {
        id: "q17",
        question: "Would you rather:",
        answerA: "Become a hero faster than your friends",
        valueA: "a",
        answerB: "Know more secrets than your friends?",
        valueB: "e"
    },

    item18 = {
        id: "q18",
        question: "Would you rather:",
        answerA: "Know where to find things",
        valueA: "e",
        answerB: "Know how to get things?",
        valueB: "a"
    },

    item19 = {
        id: "q19",
        question: "Which would you rather do:",
        answerA: "Solve a riddle no one else has solved",
        valueA: "e",
        answerB: "Getting to a certain experience level faster than anyone else?",
        valueB: "a"
    },

    item = {
        id: "q20",
        question: "In an online game, would rather be known for",
        answerA: "Knowledge",
        valueA: "e",
        answerB: "Power?",
        valueB: "k"
    },

    item21 = {
        id: "q21",
        question: "Would you rather win:",
        answerA: "A trivia contest",
        valueA: "e",
        answerB: "An arena battle?",
        valueB: "k"
    },

    item22 = {
        id: "q22",
        question: "If you're alone in an area, do you think:",
        answerA: "It's safe to explore",
        valueA: "e",
        answerB: "You'll have to look elsewhere for prey?",
        valueB: "k"
    },

    item23 = {
        id: "q23",
        question: "You learn that another player is planning your demise. Do you:",
        answerA: "Go to an area your opponent is unfamiliar with and prepare there",
        valueA: "e",
        answerB: "Attack them before he attacks you?",
        valueB: "k"
    },

    item24 = {
        id: "q24",
        question: "You meet a new player. Do you think of them as:",
        answerA: "Someone who can appreciate your knowledge of the game",
        valueA: "e",
        answerB: "As potential prey?",
        valueB: "k"
    },

    item25 = {
        id: "q25",
        question: "In an online game, would you rather:",
        answerA: "Have a sword twice as powerful as any other in the game",
        valueA: "a",
        answerB: "Be the most feared person in the game?",
        valueB: "k"
    },

    item26 = {
        id: "q26",
        question: "In an online game, would you be more prone to brag about:",
        answerA: "How many other players you've killed",
        valueA: "k",
        answerB: "Your equipment?",
        valueB: "a"
    },

    item27 = {
        id: "q27",
        question: "Would you rather have:",
        answerA: "A spell to damage other players",
        valueA: "k",
        answerB: "A spell that increases the rate at which you gain experience points?",
        valueB: "a"
    },

    item28 = {
        id: "q28",
        question: "Would you rather receive as a quest reward:",
        answerA: "Experience points",
        valueA: "a",
        answerB: "A wand with 3 charges of a spell that lets you control other players, against their will?",
        valueB: "k"
    },

    item29 = {
        id: "q29",
        question: "When playing a video game, is it more fun to:",
        answerA: "Have the highest score on the list",
        valueA: "a",
        answerB: "Beat your best friend one-on-one?",
        valueB: "k"
    }
]