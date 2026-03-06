export interface Story {
  slug: string;
  title: string;
  emoji: string;
  color: string;
  summary: string;
  paragraphs: string[];
}

export const characters = {
  katakaka: {
    name: "Katakaka",
    description: "A silly fish from Tahiti who never listens to adults",
    emoji: "\ud83d\udc20",
  },
  angelfish: {
    name: "Angelfish",
    description: "One of Katakaka's friends near the North Pole",
    emoji: "\ud83d\udc1f",
  },
  goldfish: {
    name: "Goldfish",
    description: "Another friend who lives in Canadian waters",
    emoji: "\ud83d\udc20",
  },
  ponky: {
    name: "Ponky the Sperm Whale",
    description: "A giant friendly whale friend",
    emoji: "\ud83d\udc33",
  },
};

export const stories: Story[] = [
  {
    slug: "costco-chaos",
    title: "Katakaka Goes to Costco",
    emoji: "\ud83d\uded2",
    color: "from-coral to-sand",
    summary:
      "The adults send Katakaka to Costco with a very specific grocery list. But does she follow it? Of course not!",
    paragraphs: [
      "One chilly morning near the North Pole, the adults gave Katakaka a very important job. \"Here is the grocery list,\" they said. \"We need milk, bread, fish flakes, and seaweed salad. Go to Costco and ONLY buy what's on the list.\"",
      "\"Yes yes yes!\" said Katakaka, swimming away with the list tucked under her fin. But as soon as she got to Costco, her eyes went WIDE.",
      "First she saw the candy aisle. \"Ooooh! Gummy sharks! Chocolate clams! Jellybean jellyfish!\" She tossed them ALL into the cart. The grocery list floated away and she didn't even notice.",
      "Then she found the toy section. \"RUBBER DUCKIES!\" she squealed. Not one rubber ducky. Not two. She grabbed FORTY-SEVEN rubber duckies. Big ones, small ones, ones that squeaked, ones that glowed in the dark.",
      "And then\u2014 \"WALKIE TALKIES!\" Katakaka grabbed a whole box. \"Now I can talk to Ponky from the other side of the ocean!\" she said, even though walkie talkies definitely do not work underwater.",
      "When she got home, the adults stared at the cart. No milk. No bread. No fish flakes. No seaweed salad. Just mountains of candy, forty-seven rubber duckies, and a box of walkie talkies.",
      "\"KATAKAKA!\" they shouted. But Katakaka was already handing out walkie talkies to Angelfish and Goldfish. \"Breaker breaker, this is Silly Fish One, do you copy?\" she giggled into the walkie talkie, which made nothing but bubble sounds.",
    ],
  },
  {
    slug: "breakfast-disaster",
    title: "Katakaka Cooks Breakfast",
    emoji: "\ud83c\udf73",
    color: "from-sand to-seaweed",
    summary:
      "Katakaka decides to make poached eggs and Dutch baby for her friends. The only problem? She cooks them for THREE YEARS.",
    paragraphs: [
      "One morning Katakaka announced: \"Today I am making the BEST breakfast EVER for my friends! Poached eggs and a Dutch baby pancake!\"",
      "Angelfish, Goldfish, and Ponky the Sperm Whale were very excited. \"Yum!\" said Ponky, whose tummy rumbled so loud it shook the icebergs.",
      "Katakaka put the eggs in the water and the Dutch baby in a tiny underwater oven. \"Now,\" she said, reading the recipe, \"cook until done.\"",
      "\"How long is that?\" asked Goldfish. Katakaka squinted at the recipe. \"It says fifteen minutes. But I want them to be REALLY good. So I'll cook them for... THREE YEARS!\"",
      "\"THREE YEARS?!\" everyone shouted. But Katakaka had already set a timer that said 1,095 days and swum off to play.",
      "For three whole years, everyone waited. They had to eat seaweed sandwiches for breakfast every single day. Ponky almost forgot what eggs tasted like. Angelfish started a calendar counting down the days.",
      "Finally\u2014 DING! The timer went off. Everyone rushed over. The poached eggs had turned into tiny hard rocks. The Dutch baby had become a giant crusty pancake fossil.",
      "\"Breakfast is served!\" said Katakaka proudly. Nobody could eat any of it. But Ponky used the Dutch baby fossil as a surfboard, so it wasn't a TOTAL waste.",
    ],
  },
  {
    slug: "gymnastics-mayhem",
    title: "Katakaka Goes to Gymnastics",
    emoji: "\ud83e\udd38",
    color: "from-fish-pink to-coral",
    summary:
      "Katakaka goes to gymnastics class. The teacher says to stretch. Katakaka goes absolutely wild instead.",
    paragraphs: [
      "The gymnastics teacher, a very serious Narwhal named Coach Needle, blew her whistle. \"Okay class, today we start with gentle stretching. Nice and easy.\"",
      "All the little fish started stretching their fins. But not Katakaka. She spotted the trampoline in the corner.",
      "\"BOING! BOING! BOING!\" Katakaka bounced higher and higher on the trampoline. So high that she flew OFF the trampoline\u2014",
      "\u2014and landed SPLASH right in the middle of the ball pit! Colorful balls flew EVERYWHERE. They bounced off the walls, bonked Coach Needle on the horn, and rained down like a ball-storm.",
      "Before Coach Needle could say anything, Katakaka spotted the rings\u2014 the big rings that were meant for the ADULT class. She grabbed on with her tiny fins and started SWINGING.",
      "\"Katakaka! Those are for adults!\" Coach Needle shouted. But Katakaka was already swinging back and forth, higher and higher, until she let go and\u2014",
      "WHOOOOSH! She flew through the air and landed right in the MIDDLE of the balance beam! She wobbled left! She wobbled right! She did a spin! She did a flip! She went absolutely BONKERS on that balance beam!",
      "Coach Needle fainted. The other fish cheered. Katakaka took a bow and fell off the beam into a pile of gymnastics mats. \"Same time next week?\" she asked with a grin.",
    ],
  },
];

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}
