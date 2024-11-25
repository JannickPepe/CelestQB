
export type TopicResponses = {
    [key: string]: {
        [key: string]: string;
    };
};

export const responses: TopicResponses = {
    eldenring: {
        "how to beat boss": "To defeat the boss, learn its attack patterns and wait for the right moment to strike.",
        "best weapons": "The Moonlight Greatsword is a top-tier choice for many builds.",
        "how to parry": "yooo",
    },
    wukong: {
        "how to beat erlang": "If you want to beat Erlang, you need to git gud!",
        "how to beat wukong": "If you want to beat Wukong, you need to git gud!",
        "best strategy": "Utilize your mobility and play defensively to outmaneuver your opponents.",
    },
    starwars: {
        "who is the chosen one": "Anakin Skywalker is believed to be the chosen one destined to bring balance to the Force.",
        "best lightsaber": "The best lightsaber is subjective, but many favor the green blade for its balance.",
    },
    dragonball: {
        "how to clear all missions": "Git gud",
    },
    // Add more topics and their respective responses as needed
};
