/**
 * The personal side of the site — the default page.
 *
 * TEXT — anything left as an empty string renders a small "TK" marker (the
 * printing term for copy still to come) instead of inventing words.
 *
 * IMAGES — `image: null` renders a composed plate. Drop a file in
 * `public/photos/` and set image: '/photos/name.jpg' plus an `alt`.
 *
 * PLACES — give each a `lat`/`lng` and it plots itself on the maps.
 */

const googleSearch = (query) =>
  `https://www.google.com/search?q=${encodeURIComponent(query)}`;

export const person = {
  name: 'Karthik Gogisetty',
  tagline: 'Teaches machines to spot fraud. Talks cricket like it pays.',
  location: 'India',
  portrait: '/photos/portrait-boat.jpg',
  portraitAlt: 'Karthik on a boat in Phi Phi, bucket hat and sunglasses, cliffs behind',
  portraitW: 1600,
  portraitH: 2133,
  portraitIsInterim: false,
  intro: [
    "By day I build AI that catches document forgers. After hours I'm looser with the truth — every last-minute trip I plan is \u2018basically organised\u2019, every net cord at the TT table was \u2018clearly intentional\u2019, and one more episode of Haikyu!! counts as \u2018research\u2019.",
    "The camera roll says Thailand: thirteen hundred frames of lagoons, fire shows and one very rained-on Walking Street. The shelf runs from the Puranas to Agatha Christie to thinking about AI. The playlist swerves from Kazinama to Chaiyya Chaiyya without signalling.",
    "Bring a cricket opinion you can't defend, or a paddle you're prepared to lose with.",
  ],
};

export const chapters = [
  {
    id: 'photography',
    numeral: 'I',
    title: 'Photography',
    kicker: '',
    intro: '',
    layout: 'grid',
    items: [
      {
        title: 'Pileh Lagoon, Ko Phi Phi',
        note: '',
        image: '/photos/pileh-lagoon.jpg',
        alt: 'Longtail boats in a turquoise lagoon walled by limestone cliffs',
        w: 1800, h: 2400,
      },
      {
        title: 'Fire show, Phi Phi',
        note: '',
        image: '/photos/fire-show.jpg',
        alt: 'A performer spinning fire on the beach at night, sparks fanning over the sand',
        w: 1600, h: 2133,
      },
      {
        title: 'Walking Street, Phuket',
        note: '',
        image: '/photos/walking-street.jpg',
        alt: 'Karthik on the rain-glossed crossing of Walking Street, neon signs behind',
        w: 1600, h: 2133,
      },
      {
        title: 'Limestone cliffs',
        note: '',
        image: '/photos/limestone-cliffs.jpg',
        alt: 'Boats passing between towering limestone cliffs',
        w: 1600, h: 2133,
      },
      {
        title: 'Rocky coast',
        note: '',
        image: '/photos/rocky-coast.jpg',
        alt: 'Waves breaking over dark rocks with islands on the horizon',
        w: 1600, h: 2133,
      },
      {
        title: 'Maya Bay surf',
        note: '',
        image: '/photos/maya-surf.jpg',
        alt: 'Karthik stepping through the foam at the edge of Maya Bay',
        w: 1600, h: 2133,
      },
    ],
  },

  {
    id: 'travel',
    numeral: 'II',
    title: 'Travel',
    kicker: '',
    intro: '',
    layout: 'map',
    // Add places as { name, lat, lng, note }. They plot automatically.
    world: [
      { name: 'India', lat: 20.59, lng: 78.96, note: 'Home' },
      { name: 'Thailand', lat: 7.95, lng: 98.6, note: 'Phuket & Krabi' },
    ],
    india: [
      { name: 'Mumbai', lat: 19.076, lng: 72.8777 },
      { name: 'Pune', lat: 18.5204, lng: 73.8567 },
      { name: 'Goa', lat: 15.4909, lng: 73.8278 },
      { name: 'Kochi', lat: 9.9312, lng: 76.2673 },
      { name: 'Manipal', lat: 13.3525, lng: 74.7868 },
      { name: 'Udupi', lat: 13.3409, lng: 74.7421 },
      { name: 'Gokarna', lat: 14.5479, lng: 74.3188 },
      { name: 'Kundadri', lat: 13.7167, lng: 75.0333 },
      { name: 'Kodachadri', lat: 13.85, lng: 74.8667 },
      { name: 'Hyderabad', lat: 17.385, lng: 78.4867 },
      { name: 'Visakhapatnam', lat: 17.6868, lng: 83.2185 },
      { name: 'Vijayawada', lat: 16.5062, lng: 80.648 },
      { name: 'Guntur', lat: 16.3067, lng: 80.4365 },
      { name: 'Bapatla', lat: 15.9042, lng: 80.4673 },
      { name: 'Tirupati', lat: 13.6288, lng: 79.4192 },
      { name: 'Kanyakumari', lat: 8.0883, lng: 77.5385 },
    ],
    items: [],
  },

  {
    id: 'music',
    numeral: 'III',
    title: 'Music',
    kicker: '',
    intro: '',
    layout: 'groups',
    groups: [
      {
        heading: 'On repeat',
        items: [
          { title: 'Radhimaa', meta: 'Sai Abhyankkar', href: googleSearch('Radhimaa Sai Abhyankkar song'), cover: '/media/music-radhimaa.jpg' },
          { title: 'Tere Naal', meta: 'Bayaan', href: googleSearch('Tere Naal Bayaan band song'), cover: '/media/music-tere-naal.jpg' },
          { title: 'Kushi', meta: 'Mani Sharma · Telugu film soundtrack', href: googleSearch('Kushi 2001 Telugu movie songs Mani Sharma'), cover: '/media/music-kushi.jpg' },
          { title: 'Ahista Ahista', meta: 'Kazinama & Musarrat Nazir', href: googleSearch('Ahista Ahista Kazinama song'), cover: '/media/music-ahista.jpg' },
          { title: 'Jhalak Dikhlaja', meta: 'Himesh Reshammiya · Aksar', href: googleSearch('Jhalak Dikhlaja Aksar Himesh Reshammiya'), cover: '/media/music-jhalak.jpg' },
          { title: 'Chaiyya Chaiyya', meta: 'Sukhwinder Singh · Dil Se', href: googleSearch('Chaiyya Chaiyya Dil Se'), cover: '/media/music-chaiyya.jpg' },
          { title: 'Orange', meta: 'Harris Jayaraj · soundtrack', href: googleSearch('Orange 2010 Telugu songs Harris Jayaraj'), cover: '/media/music-orange.jpg' },
          { title: 'Hi Nanna', meta: 'Hesham Abdul Wahab · soundtrack', href: googleSearch('Hi Nanna songs Hesham Abdul Wahab'), cover: '/media/music-hinanna.jpg' },
          { title: 'Sita Ramam', meta: 'Vishal Chandrashekar · soundtrack', href: googleSearch('Sita Ramam songs Vishal Chandrashekar'), cover: '/media/music-sitaramam.jpg' },
          { title: 'Tere Liye', meta: 'Atif Aslam & Shreya Ghoshal · Prince', href: googleSearch('Tere Liye Prince Atif Aslam'), cover: '/media/music-tere-liye.jpg' },
        ],
      },
    ],
  },

  {
    id: 'sport',
    numeral: 'IV',
    title: 'Sport',
    kicker: 'Played, not just watched',
    intro: '',
    layout: 'grid',
    items: [
      { title: 'Cricket', note: '', image: '/plates/sport-cricket.svg', alt: 'Illustration: bat, ball and stumps', w: 1200, h: 1500 },
      { title: 'Table tennis', note: '', image: '/plates/sport-tt.svg', alt: 'Illustration: paddle, ball and net', w: 1200, h: 1500 },
      { title: 'Tennis', note: '', image: '/plates/sport-tennis.svg', alt: 'Illustration: racquet and baseline', w: 1200, h: 1500 },
    ],
  },

  {
    id: 'reading',
    numeral: 'V',
    title: 'Reading & Film',
    kicker: 'On the shelf, on the screen',
    intro: '',
    layout: 'groups',
    footnote: 'And many more.',
    groups: [
      {
        heading: 'Books',
        items: [
          {
            title: 'Mahagatha: 100 Tales from the Puranas', cover: '/media/book-mahagatha.jpg',
            meta: 'Satyarth Nayak',
            href: googleSearch('Mahagatha 100 Tales from the Puranas Satyarth Nayak book'),
          },
          {
            title: 'How to Think About AI', cover: '/media/book-ai.jpg',
            meta: 'Richard Susskind',
            href: googleSearch('How to Think About AI Richard Susskind book'),
          },
          {
            title: 'And Then There Were None', cover: '/media/book-none.jpg',
            meta: 'Agatha Christie',
            href: googleSearch('And Then There Were None Agatha Christie book'),
          },
          {
            title: 'How to Talk to Anyone', cover: '/media/book-talk.jpg',
            meta: 'Leil Lowndes',
            href: googleSearch('How to Talk to Anyone Leil Lowndes book'),
          },
          {
            title: 'The Art of Letting Go', cover: '/media/book-letting-go.jpg',
            meta: 'Nick Trenton',
            href: googleSearch('The Art of Letting Go Nick Trenton book'),
          },
          {
            title: 'Think Straight', cover: '/media/book-think.jpg',
            meta: 'Darius Foroux',
            href: googleSearch('Think Straight Darius Foroux book'),
          },
          {
            title: 'Basics of Bhagavad Gita', cover: '/media/book-gita.jpg',
            meta: '',
            href: googleSearch('Basics of Bhagavad Gita book'),
          },
        ],
      },
      {
        heading: 'Screen',
        items: [
          { title: 'Tholi Prema', meta: 'Karunakaran · Pawan Kalyan · Keerthi Reddy', href: googleSearch('Tholi Prema 1998 film Pawan Kalyan'), cover: '/media/film-tholiprema.jpg' },
          { title: 'Kushi', meta: 'S. J. Suryah · Pawan Kalyan · Bhumika Chawla', href: googleSearch('Kushi 2001 film Pawan Kalyan'), cover: '/media/film-kushi.jpg' },
          { title: 'Hum Aapke Hain Koun..!', meta: 'Sooraj Barjatya · Salman Khan · Madhuri Dixit', href: googleSearch('Hum Aapke Hain Koun film'), cover: '/media/film-hahk.jpg' },
          { title: 'Yeh Jawaani Hai Deewani', meta: 'Ayan Mukerji · Ranbir Kapoor · Deepika Padukone', href: googleSearch('Yeh Jawaani Hai Deewani film'), cover: '/media/film-yjhd.jpg' },
          { title: 'The Dark Knight Trilogy', meta: 'Christopher Nolan · Christian Bale', href: googleSearch('The Dark Knight Trilogy Christopher Nolan'), cover: '/media/film-dark-knight.jpg' },
          { title: 'The Odyssey', meta: 'Christopher Nolan · Matt Damon', href: googleSearch('The Odyssey Christopher Nolan film'), cover: '/media/film-odyssey.jpg' },
          { title: 'Interstellar', meta: 'Christopher Nolan · Matthew McConaughey · Anne Hathaway', href: googleSearch('Interstellar Christopher Nolan film'), cover: '/media/film-interstellar.jpg' },
          { title: 'Avatar', meta: 'James Cameron · Sam Worthington · Zoe Saldaña', href: googleSearch('Avatar James Cameron film'), cover: '/media/film-avatar.jpg' },
          { title: 'Haikyu!!', meta: 'Anime', href: googleSearch('Haikyu anime'), cover: '/media/show-haikyu.jpg' },
          { title: 'Naruto', meta: 'Anime', href: googleSearch('Naruto anime'), cover: '/media/show-naruto.jpg' },
        ],
      },
    ],
  },
];
