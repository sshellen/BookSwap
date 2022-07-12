import { handleActions } from "redux-actions";

const SET_BOOK_TO_RECEIVE = "SET_BOOK_TO_RECEIVE";
const SET_BOOK_TO_OFFER = "SET_BOOK_TO_OFFER";
const SET_ALL_BOOKS = "SET_ALL_BOOKS";
const SET_MY_BOOKS = "SET_MY_BOOKS";
const SET_BOOK_ACTIVATION = "SET_BOOK_ACTIVATION";
const SET_MATCHES_SELECTED = "SET_MATCHES_SELECTED";
const SET_BOOK_INTEREST = "SET_BOOK_INTEREST";
const GET_MATCHES = "GET_MATCHES";
const ADD_BOOK = "ADD_BOOK";
const UPDATE_ALL_BOOKS = "UPDATE_ALL_BOOKS";
const UPDATE_PROFILE = "UPDATE_PROFILE";

const defaultState = {
  profile: {
    name: "Guest User",
    email: "bookworm@foobar.com",
    city: "",
    state: "",
    username: "",
    password: "",
  },
  myBooks: [
    {
      active: true,
      title: "The Little Friend",
      author: "Donna Tartt",
      genre: "Fiction",
      published: "Published October 25th 2011 by Knopf",
      description:
        "The Little Friend is a mystery adventure, centered on a young girl, Harriet Cleve Dufresnes, living in Mississippi in the early 1970s. The story follows Harriet's anxiety surrounding the unexplained death of her brother, Robin, who was killed by hanging in 1964 at the age of nine.",
    },
    {
      active: true,
      title: "Everything I Never Told You",
      author: "Celeste Ng",
      genre: "Fiction",
      published: "Published in 2014 by Penguin Press",
      description:
        "The novel is about a mixed-race Chinese-American family whose middle daughter Lydia is found drowned in a nearby lake.",
    },
    {
      active: true,
      title: "The Wolf and the Watchman",
      author: "Niklas Natt och Dag",
      genre: "Fiction",
      published: "Published by Washington Square Press (October 1, 2019)",
      description:
        "One morning in the autumn of 1793, watchman Mikel Cardell is awakened from his drunken slumber with reports of a body seen floating in the Larder, once a pristine lake on Stockholm’s Southern Isle, now a rancid bog. Efforts to identify the bizarrely mutilated corpse are entrusted to incorruptible lawyer Cecil Winge, who enlists Cardell’s help to solve the case. But time is short: Winge’s health is failing, the monarchy is in shambles, and whispered conspiracies and paranoia abound.",
    },
    {
      active: true,
      title: "The Outsider",
      author: "Stephen King",
      genre: "Fiction",
      published: "Published by Scribner",
      description:
        "An unspeakable crime. A confounding investigation. At a time when the King brand has never been stronger, he has delivered one of his most unsettling and compulsively readable stories. An eleven-year-old boy's violated corpse is found in a town park. Eyewitnesses and fingerprints point unmistakably to one of Flint City's most popular citizens.",
    },
    {
      active: true,
      title: "The Factory",
      author: "Hiroko Oyamada",
      genre: "Fiction",
      published: "Published by New Directions in October 2019",
      description:
        "In an unnamed Japanese city, employment is dominated by an an enormous factory - big enough to be a community in its own right. We explore its strange world through three employees. Yoshiko Ushiyama has always dreamed of working at the factory and is happy to take any role; she ends up as part of a team whose only task is shredding documents.",
    },
    {
      active: true,
      title: "The Butchering Art",
      author: "Lindsey Fitzharris",
      genre: "Biography",
      published:
        "Published by Scientific American / Farrar, Straus and Giroux; Reprint edition (October 2, 2018)",
      description:
        "In The Butchering Art, the historian Lindsey Fitzharris reveals the shocking world of nineteenth-century surgery on the eve of profound transformation. She conjures up early operating theaters--no place for the squeamish--and surgeons, working before anesthesia, who were lauded for their speed and brute strength.",
    },
    {
      active: true,
      title: "The Stone Sky",
      author: "N K Jemisin",
      genre: "Fantasy",
      published: "Published by Orbit",
      description:
        "The Stone Sky is a 2017 science fantasy novel by American writer N. K. Jemisin. It was awarded the Hugo Award for Best Novel, the Nebula Award for Best Novel, and the Locus Award for Best Fantasy Novel in 2018. Reviews of the book upon its release were highly positive.",
    },
    {
      active: true,
      title: "The Sympathizer",
      author: "Viet Thanh Nguyen",
      genre: "Fiction",
      published: "Published by Grove Press",
      description:
        "The Sympathizer is the 2015 debut novel by Vietnamese-American professor Viet Thanh Nguyen. It is a best-selling novel and recipient of the 2016 Pulitzer Prize for Fiction. The novel received generally positive acclaim from critics, and it was named a New York Times Editor's Choice.",
    },
    {
      active: true,
      title: "Artemis",
      author: "Andy Weir",
      genre: "Sci-Fi",
      published:
        "Published by Ballantine Books; First Edition (November 14, 2017)",
      description:
        "Artemis is a 2017 science fiction novel written by Andy Weir. The novel takes place in the late 2080s in Artemis, the first and so far only city on the Moon. It follows the life of porter and smuggler Jasmine 'Jazz' Bashara as she gets caught up in a conspiracy for control of the city.",
    },
    {
      active: true,
      title: "The Overstory",
      author: "Richard Powers",
      genre: "Fiction",
      published: "Published by W. W. Norton & Company",
      description:
        "It is Powers' twelfth novel. The book is about nine Americans whose unique life experiences with trees bring them together to address the destruction of forests.",
    },
    {
      active: true,
      title: "The Secret History",
      author: "Donna Tartt",
      genre: "Fiction",
      published: "Published by Alfred A. Knopf in September 1992",
      description:
        "The Secret History is the first novel by the American author Donna Tartt, published by Alfred A. Knopf in September 1992. Set in New England, the campus novel tells the story of a closely knit group of six classics students at Hampden College, a small, elite liberal arts college located in Vermont based upon Bennington College, where Tartt was a student between 1982 and 1986.",
    },
    {
      active: true,
      title: "Every Man Dies Alone",
      author: "Hans Fallada",
      genre: "Fiction",
      published: "Published by Melville House Publishing",
      description:
        "Every Man Dies Alone or Alone in Berlin is a 1947 novel by German author Hans Fallada. It is based on the true story of working-class husband and wife Otto and Elise Hampel who, acting alone, became part of the German Resistance. Fallada's book was one of the first anti-Nazi novels to be published by a German after World War II.",
    },
  ],
  allBooks: [
    {
      title: "1Q84",
      author: "Haruki Murakami",
      genre: "Fiction",
      owner: "DeanS",
      email: "Dean321@gmail.com",
      interested: false,
      description:
        "1Q84 is a novel written by Japanese writer Haruki Murakami, first published in three volumes in Japan in 2009–10. It covers a fictionalized year of 1984 in parallel with a 'real' one. The novel is a story of how a woman named Aomame begins to notice strange changes occurring in the world.",
    },
    {
      title: "The Vorrh",
      author: "B Caitling",
      genre: "Fantasy",
      owner: "Jay",
      email: "jt78@hotmail.com",
      interested: false,
      description:
        "The Vorrh is a dark historical fantasy novel by multi-disciplinary artist B. Catling that was first published in November of 2012. Aided in its publicity by a glowing foreword from author and graphic-novelist Alan Moore, it garnered significant critical coverage in the media when republished for an international audience in 2015.",
    },
    {
      title: "Dr Mutters Marvels",
      author: "Cristin Aptowicz",
      genre: "Biography",
      owner: "Kimmy",
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
      interested: false,
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
      owner: "Kimmy",
      email: "kimmy85@gmail.com",
      interested: false,
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
      interested: false,
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
  ],
  interested: [
    {
      title: "The Wolf and the Watchman",
      author: "Niklas Natt och Dag",
      user: "DeanS",
    },
    {
      title: "The Sympathizer",
      author: "Viet Thanh Nguyen",
      user: "DeanS",
    },
    { title: "The Little Friend", author: "Donna Tartt", user: "Jay" },
    {
      title: "Everything I Never Told You",
      author: "Celeste Ng",
      user: "Kimmy",
    },
    {
      title: "The Stone Sky",
      author: "N K Jemisin",
      user: "Kimmy",
    },
    {
      title: "The Stone Sky",
      author: "N K Jemisin",
      user: "mary_t",
    },
    {
      title: "The Butchering Art",
      author: "Lindsey Fitzharris",
      user: "susan424",
    },
    { title: "The Factory", author: "Hiroko Oyamada", user: "mary_t" },
    { title: "The Stone Sky", author: "N K Jemisin", user: "jimmy38" },
  ],
  matches: [],
};

const BookReducer = handleActions(
  {
    [SET_BOOK_TO_OFFER]: (state, action) => ({
      ...state,
      bookToOffer: action.bookToOffer,
    }),
    [SET_BOOK_TO_RECEIVE]: (state, action) => ({
      ...state,
      bookToReceive: action.bookToReceive,
    }),
    [SET_ALL_BOOKS]: (state, action) => ({
      ...state,
      bookList: action.bookList,
    }),
    [SET_MY_BOOKS]: (state, action) => ({
      ...state,
      myBooks: action.myBooks,
    }),
    [ADD_BOOK]: (state, action) => ({
      ...state,
      myBooks: [...state.myBooks, action.book],
    }),
    [SET_BOOK_ACTIVATION]: (state, action) => ({
      ...state,
      myBooks: state.myBooks.reduce((acc, book) => {
        if (book.title === action.bookTitle) {
          book.active = action.active;
        }
        return (acc = acc.concat(book));
      }, []),
    }),

    [SET_MATCHES_SELECTED]: (state, action) => ({
      ...state,
      matches: action.matches,
    }),
    [UPDATE_ALL_BOOKS]: (state, action) => ({
      ...state,
      allBooks: action.books,
    }),
    [UPDATE_PROFILE]: (state, action) => ({
      ...state,
      profile: action.profile,
    }),
    [SET_BOOK_INTEREST]: (state, action) => ({
      ...state,
      allBooks: state.allBooks.reduce((acc, book) => {
        if (book.title === action.title) {
          book.interested = action.interested;
        }
        acc = acc.concat(book);
        return acc;
      }, []),
    }),
  },
  defaultState
);

export default BookReducer;
