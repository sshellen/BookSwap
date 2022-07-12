const bookList = [
  {
    title: "1Q84",
    author: "Haruki Murakami",
    genre: "Fiction",
    owner: "DeanS",
    email: "Dean321@gmail.com",
    interested: true,
    description:
      "1Q84 is a novel written by Japanese writer Haruki Murakami, first published in three volumes in Japan in 2009–10. It covers a fictionalized year of 1984 in parallel with a 'real' one. The novel is a story of how a woman named Aomame begins to notice strange changes occurring in the world.",
  },
  {
    title: "The Vorrh",
    author: "B Caitling",
    genre: "Fantasy",
    owner: "Jay",
    email: "jt78@hotmail.com",
    interested: true,
    description:
      "The Vorrh is a dark historical fantasy novel by multi-disciplinary artist B. Catling that was first published in November of 2012. Aided in its publicity by a glowing foreword from author and graphic-novelist Alan Moore, it garnered significant critical coverage in the media when republished for an international audience in 2015.",
  },
  {
    title: "Dr Mutters Marvels",
    author: "Cristin Aptowicz",
    genre: "Biography",
    owner: "kimmy",
    email: "kimmy85@gmail.com",
    interested: false,
    description:
      "A mesmerizing biography of the brilliant and eccentric medical innovator who revolutionized American surgery and founded the country's most famous museum of medical oddities Imagine undergoing an operation without anesthesia, performed by a surgeon who refuses to sterilize his tools—or even wash his hands.",
  },
  {
    title: "The Master and Margarita",
    author: "Mikhail Bulgakov",
    genre: "Fantasy",
    owner: "jimmy38",
    email: "jimmy38@gmail.com",
    interested: true,
    description:
      "The Master and Margarita is a novel by Russian writer Mikhail Bulgakov, written in the Soviet Union between 1928 and 1940 during Stalin's regime. A censored version was published in Moscow magazine in 1966–1967, after the writer's death. The manuscript was not published as a book until 1967, in Paris.",
  },

  {
    title: "Beware of Pity",
    author: "Stefan Zweig",
    genre: "Fiction",
    owner: "mary_t",
    email: "maryt@yahoo.com",
    interested: false,
    description:
      "Beware of Pity is a 1946 British romantic drama film directed by Maurice Elvey and starring Lilli Palmer, Albert Lieven and Cedric Hardwicke. It is based on the novel of the same name by Stefan Zweig. A paraplegic young baroness mistakes compassion for love. The film's costumes were designed by Cecil Beaton. It was made by Two Cities Films at Islington Studios. The film was not a great popular success outside the Soviet Union.",
  },
  {
    title: "Guns, Germs and Steel",
    author: "Jared Diamond",
    genre: "Non Fiction",
    owner: "kimmy",
    email: "kimmy85@gmail.com",
    interested: true,
    description:
      "Guns, Germs, and Steel: The Fates of Human Societies is a 1997 transdisciplinary non-fiction book by Jared Diamond. In 1998, it won the Pulitzer Prize for general nonfiction and the Aventis Prize for Best Science Book. A documentary based on the book, and produced by the National Geographic Society, was broadcast on PBS in July 2005.",
  },
  {
    title: "One to Nine",
    author: "Andrew Hodges",
    genre: "Non Fiction",
    owner: "jimmy38",
    email: "jimmy38@gmail.com",
    interested: false,
    description:
      "One to Nine is a stream of consciousness about everything relating to numbers: the numbers themselves, the history of their discovery, computers, algorithms, the universe, theoretical physics, science, climate change, and the relevance of mathematical thought and learning to modern society.",
  },
  {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    genre: "Fiction",
    owner: "Jay",
    email: "jt78@hotmail.com",
    interested: false,
    description:
      "A Tale of Two Cities is an 1859 historical novel by Charles Dickens, set in London and Paris before and during the French Revolution. The novel tells the story of the French Doctor Manette, his 18-year-long imprisonment in the Bastille in Paris, and his release to live in London with his daughter Lucie whom he had never met.",
  },
  {
    title: "Gulliver's Travels",
    author: "Jonathan Swift",
    genre: "Fiction",
    owner: "mary_t",
    email: "maryt@yahoo.com",
    interested: false,
    description:
      "Gulliver's Travels, or Travels into Several Remote Nations of the World. In Four Parts. By Lemuel Gulliver, First a Surgeon, and then a Captain of Several Ships is a 1726 prose satire by the Irish writer and clergyman Jonathan Swift, satirising both human nature and the \"travellers' tales\" literary subgenre.",
  },
  {
    title: "Malcolm X",
    author: "Alex Haley",
    genre: "Biography",
    owner: "susan424",
    email: "susan424@hotmail.com",
    interested: false,
    description:
      "Biography, published in 1965, of the American black militant religious leader and activist who was born Malcolm Little. Written by Alex Haley, who had conducted extensive audiotaped interviews with Malcolm X just before his assassination in 1965, the book gained renown as a classic work on black American experience.",
  },
  {
    title: "Cadavers",
    author: "Mary Roach",
    genre: "Non Fiction",
    owner: "susan424",
    email: "susan424@hotmail.com",
    interested: false,
    description:
      "For two thousand years, cadavers―some willingly, some unwittingly―have been involved in science's boldest strides and weirdest undertakings. In this fascinating account, Mary Roach visits the good deeds of cadavers over the centuries and tells the engrossing story of our bodies when we are no longer with them.",
  },
  {
    title: "Humpty Dumpty in Oakland",
    author: "Philip K Dick",
    genre: "Fiction",
    owner: "DeanS",
    email: "Dean321@gmail.com",
    interested: true,
    description:
      "Humpty Dumpty in Oakland is a realist, non-science fiction novel authored by Philip K. Dick. Originally completed in 1960, but rejected by prior publishers, this work was posthumously published by Gollancz in the United Kingdom in 1986. An American edition was published by Tor Books in 2007.",
  },
  {
    title: "The Martian Chronicles",
    author: "Ray Bradbury",
    genre: "Sci-Fi",
    owner: "DeanS",
    email: "Dean321@gmail.com",
    interested: false,
    description:
      "The Martian Chronicles is a science fiction fix-up novel, published in 1950, by American writer Ray Bradbury that chronicles the exploration and settlement of Mars, the home of indigenous Martians, by Americans leaving a troubled Earth that is eventually devastated by nuclear war.",
  },
  {
    title: "Do Androids Dream of Electric Sheep?",
    author: "Philip K Dick",
    genre: "Sci-Fi",
    owner: "DeanS",
    email: "Dean321@gmail.com",
    interested: false,
    description:
      "Do Androids Dream of Electric Sheep? is a dystopian science fiction novel by American writer Philip K. Dick, first published in 1968. The novel is set in a post-apocalyptic San Francisco, where Earth's life has been greatly damaged by a nuclear global war, leaving most animal species endangered or extinct.",
  },
  {
    title: "1177 BC",
    author: "Eric Cline",
    genre: "History",
    owner: "susan424",
    email: "susan424@hotmail.com",
    interested: false,
    description:
      "In 1177 B.C., marauding groups known only as the 'Sea Peoples' invaded Egypt. The pharaoh's army and navy managed to defeat them, but the victory so weakened Egypt that it soon slid into decline, as did most of the surrounding civilizations. After centuries of brilliance, the civilized world of the Bronze Age came to an abrupt and cataclysmic end.",
  },
  {
    title: "Cro-Magnon",
    author: "Brian Fagan",
    genre: "History",
    owner: "mary_t",
    email: "maryt@yahoo.com",
    interested: false,
    description:
      "New York Times best-selling author Brian Fagan explores the world of the Cro-Magnons--the mysterious, little-known race, famous for its cave paintings, that survived the Ice Age and became the ancestors of today's humans. They survived by their wits in a snowbound world, hunting, and sometimes being hunted by, animals many times their size.",
  },
];

export default bookList;
