import React, { Component } from 'react'

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
        answers: {
            "Getting involved in the storyline": "s",
            "Getting the rewards at the end": "a"
        }
    },
    {
        id: 3,
        question: "Would you rather be:",
        answers: {
            "Popular?": "s",
            "Wealthy?": "a"
        }
    },
    {
        id: 4,
        question: "Which do you enjoy more in an online game?",
        answers: {
            "Getting the latest gossip" : "s",
            "Getting a new item" : "a"
        }
    },
    {
        id: 5,
        question: "Which would you rather have, as a player in an online game?",
        answers: {
            "A private channel, over which you and your friends can communicate" : "s",
            "Your own house, worth millions of gold coins" : "e"
        }
    },
    {
        id: 6,
        question: "Which would you enjoy more as an online game player?",
        answers: {
            "Running your own tavern?" : "s",
            "Making your own maps of the world, then selling them" : "e"
        }
    },
    {
        id: 7,
        question: "hat's more important in an online game to you?",
        answers: {
            "The number of people" : "s",
            "The number of areas to explore" : "e"
        }
    },
    {
        id: 8,
        question: "What's more important to you?",
        answers: {
            "The quality of roleplaying in an online game" : "s",
            "The uniqueness of the features, and game mechani" : "e"
        }
    },
    {
        id: 9,
        question: "You're a player in an online game, and you want to fight a really tough dragon. How would you approach this problem?",
        answers: {
            "Get a big group of players to kill it." : "s",
            "Try a variety of weapons and magic against it, until you find its weakness." : "e"
        }
    },
    {
        id: 10,
        question: "You're a player in an online game, and about to go into an unknown dungeon. You have your choice of one more person for your party. Do you bring:",
        answers: {
            "A bard, who's a good friend of yours and who's great for entertaining you and your friends" : "s",
            "A wizard, to identify the items that you find there?" : "e"
        }
    },
    {
        id: 11,
        question: "Someone has PK'ed you (killed you in player vs. player combat). Do you want to:",
        answers: {
            "Find out why, and try to convince them not to do it again" : "s",
            "Plot your revenge?" : "k"
        }
    },
    {
        id: 12,
        question: "Which is more exciting?",
        answers: {
            "A well-roleplayed scenario" : "s",
            "A deadly battle" : "k"
        }
    },
    {
        id: 13,
        question: "Which would you enjoy more?",
        answers: {
            "Winning a duel with another player" : "k",
            "Getting accepted by a clan (a group of other players)" : "s"
        } 
    },
    {
        id: 14,
        question: "What's worse:",
        answers: {
            "To be without power" : "k",
            "To be without friends?" : "s"
        }
    },
    {
        id: 15,
        question: "Would you rather:",
        answers: {
            "Hear what someone has to say" : "s",
            "Show them the sharp blade of your axe?" : "k"
        }
    },
    {
        id: 16,
        question: "In an online game, a new area opens up. Which do you look forward to more?",
        answers: {
            "Exploring the new area, and finding out its history" : "e",
            "Being the first to get the new equipment from the area" : "a"
        }
    },
    {
        id: 17,
        question: "In an online game, would you rather be known as:",
        answers: {
            "Someone who can run from any two points in the world, and really knows their way around" : "e",
            "The person with the best, most unique equipment in the game?" : "a"
        }
    },
    {
        id: 18,
        question: "Would you rather:",
        answers: {
            "Become a hero faster than your friends" : "a",
            "Know more secrets than your friends?" : "e"
        }
    },
    {
        id: 19,
        question: "Would you rather:",
        answers: {
            "Know where to find things" : "e",
            "Know how to get things?" : "a"
        }
    },
    {
        id: 20,
        question: "Which would you rather do:",
        answers: {
            "Solve a riddle no one else has solved" : "e",
            "Getting to a certain experience level faster than anyone else?" : "a"
        }
    },
    {
        id: 21,
        question: "In an online game, would rather be known for",
        answers: {
            "Knowledge" : "e",
            "Power?" : "k"
        }
    },
    {
        id: 22,
        question: "Would you rather win:",
        answers: {
            "A trivia contest" : "e",
            "An arena battle?" : "k"
        }
    },
    {
        id: 23,
        question: "If you're alone in an area, do you think:",
        answers: {
            "It's safe to explore" : "e",
            "You'll have to look elsewhere for prey?" : "k"
        }
    },
    {
        id: 24,
        question: "You learn that another player is planning your demise. Do you:",
        answers: {
            "Go to an area your opponent is unfamiliar with and prepare there" : "e",
            "Attack them before he attacks you?" : "k"
        }
    },
    {
        id: 25,
        question: "You meet a new player. Do you think of them as:",
        answers: {
            "Someone who can appreciate your knowledge of the game" : "e",
            "As potential prey?": "k"
        }
    },
    {
        id: 26,
        question: "In an online game, would you rather:",
        answers: { 
            "Have a sword twice as powerful as any other in the game": "a",
            "Be the most feared person in the game?": "k"
        }
    },
    {
        id: 27,
        question: "In an online game, would you be more prone to brag about:",
        answers: {
                "How many other players you've killed": "k",
                "Your equipment?": "a"
        }
    },
    {
        id: 28,
        question: "Would you rather have:",
        answers: {
                "A spell to damage other players": "k",
                "A spell that increases the rate at which you gain experience points?": "a"
        }
    },
    {
        id: 29,
        question: "Would you rather receive as a quest reward:",
        answers: {
            "Experience points": "a",
            "A wand with 3 charges of a spell that lets you control other players, against their will?": "k"
        }
    },
    {
        id: 30,
        question: "When playing a video game, is it more fun to:",
        answers: {
            "Have the highest score on the list" : "a",
            "Beat your best friend one-on-one?" : "k"
        }
    }


]

export default items