import React, { useState } from "react";
import {
  Calendar,
  Info,
  Award,
  Clock,
  UserPlus,
  Image,
  Handshake,
  Phone,
  ChevronDown,
  Menu,
  X,
  Trophy,
  ScrollText,
  Users,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const navigation = [
    { name: "Home", href: "#home", icon: null },
    { name: "About", href: "#about", icon: Info },
    { name: "Events", href: "#events", icon: Award },
    { name: "Schedule", href: "#schedule", icon: Clock },
    { name: "Register", href: "#register", icon: UserPlus },
    { name: "Gallery", href: "#gallery", icon: Image },
    { name: "Sponsors", href: "#sponsors", icon: Handshake },
    { name: "Contact", href: "#contact", icon: Phone },
  ];

  const categories = [
    { id: "all", name: "All Events" },
    { id: "sports", name: "Sports" },
    { id: "cultural", name: "Cultural" },
  ];

  const events = [
    {
      name: "Music (Vocal)",
      category: "Cultural",
      description:
        "A platform for singers and musicians to showcase their vocal and instrumental skills.",
      prizes: {
        first: "",
        second: "",
        third: "",
      },
      rules: [
        "Solo or Group performance allowed",
        "Performance time: 10-15 minutes",
        "All genres of music allowed",
        "Pre-recorded tracks can be used but live instruments preferred",
      ],
      studentCoordinators: [
        {
          name: "D.Divya Sri",
          contact: "7672051388",
          college: "VIIT",
        },
        {
          name: "P.Mani Kanta",
          contact: "6304110713",
          college: "VIPT",
        },
        {
          name: "S.Manoj Kumar",
          contact: "7989885566",
          college: "VIPT",
        },
        {
          name: "Ms.T.Ramya",
          contact: "8897668686",
          college: "VIEW",
        },
      ],
      facultyCoordinators: [
        {
          name: "Mr.K.Avinash",
          contact: "",
          college: "VIIT",
        },
        {
          name: "Mrs.S.Gowthami",
          contact: "",
          college: "VIIT",
        },
        {
          name: "Ms.G.Anusha",
          contact: "",
          college: "VIPT",
        },
        {
          name: "Ms.U.Bhavani",
          contact: "",
          college: "VIPT",
        },
        {
          name: "Mrs.V.Durga Bhavani",
          contact: "",
          college: "VIEW",
        },
      ],
    },
    {
      name: "Music (Instrumental)",
      category: "Cultural",
      description:
        "A platform for singers and musicians to showcase their vocal and instrumental skills.",
      prizes: {
        first: "",
        second: "",
        third: "",
      },
      rules: [
        "Solo or Group performance allowed",
        "Performance time: 10-15 minutes",
        "All genres of music allowed",
        "Pre-recorded tracks can be used but live instruments preferred",
      ],
      studentCoordinators: [
        {
          name: "D.Divya Sri",
          contact: "7672051388",
          college: "VIIT",
        },
        {
          name: "P.Mani Kanta",
          contact: "6304110713",
          college: "VIPT",
        },
        {
          name: "S.Manoj Kumar",
          contact: "7989885566",
          college: "VIPT",
        },
        {
          name: "Ms.T.Ramya",
          contact: "8897668686",
          college: "VIEW",
        },
      ],
      facultyCoordinators: [
        {
          name: "Mr.K.Avinash",
          contact: "",
          college: "VIIT",
        },
        {
          name: "Mrs.S.Gowthami",
          contact: "",
          college: "VIIT",
        },
        {
          name: "Ms.G.Anusha",
          contact: "",
          college: "VIPT",
        },
        {
          name: "Ms.U.Bhavani",
          contact: "",
          college: "VIPT",
        },
        {
          name: "Mrs.V.Durga Bhavani",
          contact: "",
          college: "VIEW",
        },
      ],
    },
    {
      name: "Dance (Solo & Group)",
      category: "Cultural",
      description:
        "Show your dance skills in solo or group performances across various dance forms.",
      prizes: {
        first: "",
        second: "",
        third: "",
      },
      rules: [
        "Team size: Solo or Group (maximum 10 members)",
        "Performance time: 8-12 minutes",
        "All dance forms allowed (Classical, Contemporary, Folk, etc.)",
        "Pre-recorded music must be submitted 2 hours before performance",
      ],
      studentCoordinators: [
        {
          name: "U.Prakrithi",
          contact: "7416360941",
          college: "VIIT",
        },
        {
          name: "G.Girish Kumar",
          contact: "8330957485",
          college: "VIPT",
        },
        {
          name: "Ms.P.Niharika",
          contact: "7207118519",
          college: "VIEW",
        },
      ],
      facultyCoordinators: [
        {
          name: "Dr.P.V.Sai Charishma",
          contact: "",
          college: "VIIT",
        },
        {
          name: "Dr.M.Saritha",
          contact: "",
          college: "VIPT",
        },
        {
          name: "Mrs.T.Srilatha",
          contact: "",
          college: "VIEW",
        },
      ],
    },

    {
      name: "Poetry (Any Language)",
      category: "Cultural",
      description:
        "Express your thoughts, emotions, and ideas through poetry in any language.",
      prizes: {
        first: "",
        second: "",
        third: "",
      },
      rules: [
        "Individual participation",
        "Time limit: 3-5 minutes",
        "Poetry can be in any language",
        "No vulgar or offensive content allowed",
      ],
      studentCoordinators: [
        {
          name: "D.Divya Sri",
          contact: "7672051388",
          college: "VIIT",
        },
        {
          name: "P.Mani Kanta",
          contact: "6304110713",
          college: "VIPT",
        },
        {
          name: "S.Manoj Kumar",
          contact: "7989885566",
          college: "VIPT",
        },
        {
          name: "Ms.T.Ramya",
          contact: "8897668686",
          college: "VIEW",
        },
      ],
      facultyCoordinators: [
        {
          name: "Mr.K.Avinash",
          contact: "",
          college: "VIIT",
        },
        {
          name: "Mrs.S.Gowthami",
          contact: "",
          college: "VIIT",
        },
        {
          name: "Ms.G.Anusha",
          contact: "",
          college: "VIPT",
        },
        {
          name: "Ms.U.Bhavani",
          contact: "",
          college: "VIPT",
        },
        {
          name: "Mrs.V.Durga Bhavani",
          contact: "",
          college: "VIEW",
        },
      ],
    },
    {
      name: "Painting",
      category: "Cultural",
      description: "Show your artistic skills with your paintings.",
      prizes: {
        first: "",
        second: "",
        third: "",
      },
      rules: [
        "Artwork should be original and hand-painted",
        'Size limit: 24"x36" or A3',
        "Theme to be announced at the event",
      ],
      studentCoordinators: [
        {
          name: "D.Divya Sri",
          contact: "7672051388",
          college: "VIIT",
        },
        {
          name: "P.Mani Kanta",
          contact: "6304110713",
          college: "VIPT",
        },
        {
          name: "S.Manoj Kumar",
          contact: "7989885566",
          college: "VIPT",
        },
        {
          name: "Ms.T.Ramya",
          contact: "8897668686",
          college: "VIEW",
        },
      ],
      facultyCoordinators: [
        {
          name: "Mr.K.Avinash",
          contact: "",
          college: "VIIT",
        },
        {
          name: "Mrs.S.Gowthami",
          contact: "",
          college: "VIIT",
        },
        {
          name: "Ms.G.Anusha",
          contact: "",
          college: "VIPT",
        },
        {
          name: "Ms.U.Bhavani",
          contact: "",
          college: "VIPT",
        },
        {
          name: "Mrs.V.Durga Bhavani",
          contact: "",
          college: "VIEW",
        },
      ],
    },
    {
      name: "Micro Art",
      category: "Cultural",
      description:
        "Create intricate and detailed art pieces on a miniature scale.",
      prizes: {
        first: "",
        second: "",
        third: "",
      },
      rules: [
        "Art should be in miniature form",
        "Materials can be any medium",
        "Theme to be announced at the event",
      ],
      studentCoordinators: [
        {
          name: "D.Divya Sri",
          contact: "7672051388",
          college: "VIIT",
        },
        {
          name: "P.Mani Kanta",
          contact: "6304110713",
          college: "VIPT",
        },
        {
          name: "S.Manoj Kumar",
          contact: "7989885566",
          college: "VIPT",
        },
        {
          name: "Ms.T.Ramya",
          contact: "8897668686",
          college: "VIEW",
        },
      ],
      facultyCoordinators: [
        {
          name: "Mr.K.Avinash",
          contact: "",
          college: "VIIT",
        },
        {
          name: "Mrs.S.Gowthami",
          contact: "",
          college: "VIIT",
        },
        {
          name: "Ms.G.Anusha",
          contact: "",
          college: "VIPT",
        },
        {
          name: "Ms.U.Bhavani",
          contact: "",
          college: "VIPT",
        },
        {
          name: "Mrs.V.Durga Bhavani",
          contact: "",
          college: "VIEW",
        },
      ],
    },
    {
      name: "Short Film",
      category: "Cultural",
      description: "Present your storytelling skills through a short film.",
      prizes: {
        first: "",
        second: "",
        third: "",
      },
      rules: [
        "Film length: 5-10 minutes",
        "Content must be original",
        "Submit the film file before the event",
      ],
      studentCoordinators: [
        {
          name: "V.Akshatha Chandra ",
          contact: "8919216711",
          college: "VIIT",
        },
        {
          name: "K.Siva Prasad",
          contact: "7673910764",
          college: "VIPT",
        },
        {
          name: "Renuka",
          contact: "630298207",
          college: "VIEW",
        },
      ],
      facultyCoordinators: [
        {
          name: "Mr.Gouri Shankar Nayak",
          contact: "",
          college: "VIIT",
        },
        {
          name: "Dr.G.Urmila",
          contact: "",
          college: "VIPT",
        },
        {
          name: "Mrs.Y.Vineela Sravya",
          contact: "",
          college: "VIEW",
        },
      ],
    },
    {
      name: "Skit",
      category: "Cultural",
      description: "Express creative and dramatic performances through skits.",
      prizes: {
        first: "",
        second: "",
        third: "",
      },
      rules: [
        "Team size: 4-10 members",
        "Performance time: 10-15 minutes",
        "Original scripts only",
      ],
      studentCoordinators: [
        {
          name: "D.Divya Sri",
          contact: "7672051388",
          college: "VIIT",
        },
        {
          name: "P.Mani Kanta",
          contact: "6304110713",
          college: "VIPT",
        },
        {
          name: "S.Manoj Kumar",
          contact: "7989885566",
          college: "VIPT",
        },
        {
          name: "Ms.T.Ramya",
          contact: "8897668686",
          college: "VIEW",
        },
      ],
      facultyCoordinators: [
        {
          name: "Mr.K.Avinash",
          contact: "",
          college: "VIIT",
        },
        {
          name: "Mrs.S.Gowthami",
          contact: "",
          college: "VIIT",
        },
        {
          name: "Ms.G.Anusha",
          contact: "",
          college: "VIPT",
        },
        {
          name: "Ms.U.Bhavani",
          contact: "",
          college: "VIPT",
        },
        {
          name: "Mrs.V.Durga Bhavani",
          contact: "",
          college: "VIEW",
        },
      ],
    },
    {
      name: "Poetry",
      category: "Cultural",
      description: "An additional poetry event focused on poetic expressions.",
      prizes: {
        first: "",
        second: "",
        third: "",
      },
      rules: ["Individual participation", "Time limit: 5 minutes"],
      studentCoordinators: [
        {
          name: "D.Divya Sri",
          contact: "7672051388",
          college: "VIIT",
        },
        {
          name: "P.Mani Kanta",
          contact: "6304110713",
          college: "VIPT",
        },
        {
          name: "S.Manoj Kumar",
          contact: "7989885566",
          college: "VIPT",
        },
        {
          name: "Ms.T.Ramya",
          contact: "8897668686",
          college: "VIEW",
        },
      ],
      facultyCoordinators: [
        {
          name: "Mr.K.Avinash",
          contact: "",
          college: "VIIT",
        },
        {
          name: "Mrs.S.Gowthami",
          contact: "",
          college: "VIIT",
        },
        {
          name: "Ms.G.Anusha",
          contact: "",
          college: "VIPT",
        },
        {
          name: "Ms.U.Bhavani",
          contact: "",
          college: "VIPT",
        },
        {
          name: "Mrs.V.Durga Bhavani",
          contact: "",
          college: "VIEW",
        },
      ],
    },
    {
      name: "Antakshari Duo",
      category: "Cultural",
      description:
        "A fun musical game where two participants compete in a song-based challenge.",
      prizes: {
        first: "",
        second: "",
        third: "",
      },
      rules: [
        "Team size: 2 members",
        "Each team must sing a song based on a given alphabet",
        "No pre-recorded music allowed",
      ],
      studentCoordinators: [
        {
          name: "P.Shreyan Naidu",
          contact: "7075500055",
          college: "VIIT",
        },
        {
          name: "Farisha",
          contact: "6305039324",
          college: "VIPT",
        },
        {
          name: "R.Rishitha",
          contact: "8328609946",
          college: "VIEW",
        },
      ],
      facultyCoordinators: [
        {
          name: "Mrs.A.Priyanka",
          contact: "",
          college: "VIIT",
        },
        {
          name: "Mrs.P.Mounika",
          contact: "",
          college: "?VIPT",
        },
        {
          name: "Mrs.Y.Vineela Sravya",
          contact: "",
          college: "VIEW",
        },
      ],
    },
    {
      name: "Treasure Hunt",
      category: "Cultural",
      description:
        "A thrilling and adventurous event where participants solve clues to find the hidden treasure.",
      prizes: {
        first: "",
        second: "",
        third: "",
      },
      rules: [
        "Team size: 4-6 members",
        "Clues will be provided at various checkpoints",
        "Teams must complete the hunt within the specified time",
      ],
      studentCoordinators: [
        {
          name: "D.Bhavani",
          contact: "6301181687",
          college: "VIIT",
        },
        {
          name: "V.Sai Kumar",
          contact: "9177053229",
          college: "7981952332",
        },
        {
          name: "D.Bhavana",
          contact: "7981952332",
          college: "VIEW",
        },
      ],
      facultyCoordinators: [
        {
          name: "Ms.K.L.Prasaq",
          contact: "",
          college: "VIIT",
        },
        {
          name: "Dr.M.Naga Bharathi",
          contact: "",
          college: "VIPT",
        },
        {
          name: "Mr.B.V.Ch.Ramana",
          contact: "",
          college: "VIEW",
        },
      ],
    },

    {
      name: "Photography",
      category: "Cultural",
      description: "Capture the essence of the event through your lens.",
      prizes: {
        first: "",
        second: "",
        third: "",
      },
      rules: [
        "Photos should capture moments from the event",
        "Only DSLR/Mirrorless cameras allowed",
      ],
      studentCoordinators: [
        {
          name: "V.Akshatha Chandra ",
          contact: "8919216711",
          college: "VIIT",
        },
        {
          name: "K.Siva Prasad",
          contact: "7673910764",
          college: "VIPT",
        },
        {
          name: "Renuka",
          contact: "630298207",
          college: "VIEW",
        },
      ],
      facultyCoordinators: [
        {
          name: "Mr.Gouri Shankar Nayak",
          contact: "",
          college: "VIIT",
        },
        {
          name: "Dr.G.Urmila",
          contact: "",
          college: "VIPT",
        },
        {
          name: "Mrs.Y.Vineela Sravya",
          contact: "",
          college: "VIEW",
        },
      ],
    },
    {
      name: "Dub Smash",
      category: "Cultural",
      description:
        "Show off your lip-sync skills by miming to popular songs or dialogues.",
      prizes: {
        first: "",
        second: "",
        third: "",
      },
      rules: [
        "Solo participation",
        "Video duration: 1-2 minutes",
        "No vulgar content allowed",
      ],
      studentCoordinators: [
        {
          name: "D.Bhavani",
          contact: "6301181687",
          college: "VIIT",
        },
        {
          name: "V.Sai Kumar",
          contact: "9177053229",
          college: "7981952332",
        },
        {
          name: "D.Bhavana",
          contact: "7981952332",
          college: "VIEW",
        },
      ],
      facultyCoordinators: [
        {
          name: "Ms.K.L.Prasaq",
          contact: "",
          college: "VIIT",
        },
        {
          name: "Dr.M.Naga Bharathi",
          contact: "",
          college: "VIPT",
        },
        {
          name: "Mr.B.V.Ch.Ramana",
          contact: "",
          college: "VIEW",
        },
      ],
    },
    {
      name: "Flash Mob",
      category: "Cultural",
      description:
        "Surprise the audience with an unplanned group dance performance.",
      prizes: {
        first: "",
        second: "",
        third: "",
      },
      rules: [
        "Team size: 5-15 members",
        "Music to be kept a surprise",
        "Performance should last no more than 5 minutes",
      ],
      studentCoordinators: [
        {
          name: "K.Rahul",
          contact: "9398878311",
          college: "VIIT",
        },
        {
          name: "K.Sai Kumar",
          contact: "6300193772",
          college: "VIPT",
        },
        {
          name: "SK.Sabeera",
          contact: "6281060833",
          college: "VIEW",
        },
      ],
      facultyCoordinators: [
        {
          name: "Mrs.D.Prathyusha",
          contact: "",
          college: "VIIT",
        },
        {
          name: "Mrs.D.Aruna Kumari",
          contact: "",
          college: "VIPT",
        },
        {
          name: "Mr.R.Aditya",
          contact: "",
          college: "VIEW",
        },
      ],
    },

    // Sports
    {
      name: "Volleyball (Men)",
      category: "Sports",
      description:
        "A competitive volleyball event for men to showcase their skills.",
      prizes: {
        first: "",
        second: "",
        third: "",
      },
      rules: [
        "Team size: 6 players (5 playing + 1 substitute)",
        "Match duration: 3 sets of 25 points each",
        "FIVB rules will be followed",
      ],
      facultyCoordinators: [
        {
          name: "G.Prudhivi Kumar Naidu",
          contact: "8978957575",
          college: "VIIT",
        },
        {
          name: "K.Harsh Vardhan",
          contact: "8328042030",
          college: "VIIT",
        },
        {
          name: "T.Gulsan Sri Babu",
          contact: "7981878173",
          college: "VIIT",
        },
        {
          name: "J.Arpana",
          contact: "8383884187",
          college: "VIPT",
        },
      ],
    },
    {
      name: "Kho-Kho (Men & Women)",
      category: "Sports",
      description:
        "A traditional sport where teams compete in a fast-paced chase game.",
      prizes: {
        first: "",
        second: "",
        third: "",
      },
      rules: [
        "Team size: 6 players",
        "Match duration: 10-15 minutes per round",
        "Standard Kho-Kho rules will be followed",
      ],
      facultyCoordinators: [
        {
          name: "G.Prudhivi Kumar Naidu",
          contact: "8978957575",
          college: "VIIT",
        },
        {
          name: "K.Harsh Vardhan",
          contact: "8328042030",
          college: "VIIT",
        },
        {
          name: "T.Gulsan Sri Babu",
          contact: "7981878173",
          college: "VIIT",
        },
        {
          name: "J.Arpana",
          contact: "8383884187",
          college: "VIPT",
        },
      ],
    },
    {
      name: "FootBall (Men)",
      category: "Sports",
      description:
        "A traditional sport where teams compete in a fast-paced chase game.",
      prizes: {
        first: "",
        second: "",
        third: "",
      },
      rules: [
        "Team size: 6 players",
        "Match duration: 10-15 minutes per round",
        "Standard Kho-Kho rules will be followed",
      ],
      facultyCoordinators: [
        {
          name: "G.Prudhivi Kumar Naidu",
          contact: "8978957575",
          college: "VIIT",
        },
        {
          name: "K.Harsh Vardhan",
          contact: "8328042030",
          college: "VIIT",
        },
        {
          name: "T.Gulsan Sri Babu",
          contact: "7981878173",
          college: "VIIT",
        },
        {
          name: "J.Arpana",
          contact: "8383884187",
          college: "VIPT",
        },
      ],
    },
    {
      name: "Throwball ( Women)",
      category: "Sports",
      description:
        "A traditional sport where teams compete in a fast-paced chase game.",
      prizes: {
        first: "",
        second: "",
        third: "",
      },
      rules: [
        "Team size: 6 players",
        "Match duration: 10-15 minutes per round",
        "Standard Kho-Kho rules will be followed",
      ],
      facultyCoordinators: [
        {
          name: "G.Prudhivi Kumar Naidu",
          contact: "8978957575",
          college: "VIIT",
        },
        {
          name: "K.Harsh Vardhan",
          contact: "8328042030",
          college: "VIIT",
        },
        {
          name: "T.Gulsan Sri Babu",
          contact: "7981878173",
          college: "VIIT",
        },
        {
          name: "J.Arpana",
          contact: "8383884187",
          college: "VIPT",
        },
      ],
    },
    {
      name: "Basketball (Men)",
      category: "Sports",
      description:
        "A traditional sport where teams compete in a fast-paced chase game.",
      prizes: {
        first: "",
        second: "",
        third: "",
      },
      rules: [
        "Team size: 6 players",
        "Match duration: 10-15 minutes per round",
        "Standard Kho-Kho rules will be followed",
      ],
      facultyCoordinators: [
        {
          name: "G.Prudhivi Kumar Naidu",
          contact: "8978957575",
          college: "VIIT",
        },
        {
          name: "K.Harsh Vardhan",
          contact: "8328042030",
          college: "VIIT",
        },
        {
          name: "T.Gulsan Sri Babu",
          contact: "7981878173",
          college: "VIIT",
        },
        {
          name: "J.Arpana",
          contact: "8383884187",
          college: "VIPT",
        },
      ],
    },
    {
      name: "Kabaddi(Men",
      category: "Sports",
      description:
        "A traditional sport where teams compete in a fast-paced chase game.",
      prizes: {
        first: "",
        second: "",
        third: "",
      },
      rules: [
        "Team size: 7 players",
        "Match duration: 10-15 minutes per round",
        "Standard Kho-Kho rules will be followed",
      ],
      facultyCoordinators: [
        {
          name: "G.Prudhivi Kumar Naidu",
          contact: "8978957575",
          college: "VIIT",
        },
        {
          name: "K.Harsh Vardhan",
          contact: "8328042030",
          college: "VIIT",
        },
        {
          name: "T.Gulsan Sri Babu",
          contact: "7981878173",
          college: "VIIT",
        },
        {
          name: "J.Arpana",
          contact: "8383884187",
          college: "VIPT",
        },
      ],
    },
  ];

  const schedule = [
    { time: "", event: "", day: "" },
    { time: "", event: "", day: "" },
    { time: "", event: "", day: "" },
    { time: "", event: "", day: "" },
    { time: "", event: "", day: "" },
    { time: "", event: "", day: "" },
  ];

  const sponsors = [
    { name: "SKYLARK", level: "Oversease Education" },
    { name: "aecc", level: "study abroad consultants" },
    { name: "idp", level: "International education Specialist" },
    { name: "Invicta", level: "carear consultancy pvt.ltd" },
  ];

  const EventModal = ({ event, onClose }) => {
    if (!event) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-white">{event.name}</h2>
              <button
                onClick={onClose}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Event Details */}
            <div className="space-y-6">
              <div>
                <p className="text-blue-300 mb-2">{event.category}</p>
                <p className="text-gray-200">{event.description}</p>
              </div>

              {/* Prizes Section */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <Trophy size={20} className="mr-2 text-blue-300" />
                  Prizes
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg text-center">
                    <p className="text-blue-300 font-semibold">1st Prize</p>
                    <p className="text-white text-lg">{event.prizes.first}</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg text-center">
                    <p className="text-blue-300 font-semibold">2nd Prize</p>
                    <p className="text-white text-lg">{event.prizes.second}</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg text-center">
                    <p className="text-blue-300 font-semibold">3rd Prize</p>
                    <p className="text-white text-lg">{event.prizes.third}</p>
                  </div>
                </div>
              </div>

              {/* Rules Section */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <ScrollText size={20} className="mr-2 text-blue-300" />
                  Rules
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-200">
                  {event.rules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                  ))}
                </ul>
              </div>

              {/* Event Coordinators */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <Users size={20} className="mr-2 text-blue-300" />
                  Event Coordinators
                </h3>
                <div className="space-y-4">
                  {/* Student Coordinators */}
                  {event.studentCoordinators.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Student Coordinators
                      </h4>
                      {event.studentCoordinators.map((coordinator, index) => (
                        <div key={index} className="bg-white/10 p-4 rounded-lg">
                          <p className="text-white font-semibold">
                            {coordinator.name}
                          </p>
                          <p className="text-blue-300">{coordinator.college}</p>
                          <p className="text-gray-300">{coordinator.contact}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Faculty Coordinators */}
                  {event.facultyCoordinators.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Faculty Coordinators
                      </h4>
                      {event.facultyCoordinators.map((coordinator, index) => (
                        <div key={index} className="bg-white/10 p-4 rounded-lg">
                          <p className="text-white font-semibold">
                            {coordinator.name}
                          </p>
                          <p className="text-blue-300">{coordinator.college}</p>
                          <p className="text-gray-300">{coordinator.contact}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const filteredEvents =
    selectedCategory === "all"
      ? events
      : events.filter(
          (event) => event.category.toLowerCase() === selectedCategory
        );

  return (
    <div className="min-h-screen bg-blue-50">
      <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-900">
                YUVTARANG
              </span>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-blue-900 hover:text-blue-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-blue-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    onClick={() => setActiveSection(item.href.slice(1))}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 backdrop-blur-md rounded-b-lg shadow-md">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-blue-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveSection(item.href.slice(1));
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-blue-50 text-gray-800 pt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Theme Image */}
          <img
            src="/src/assets/logo.png"
            className="mx-auto w-64 md:w-80 mb-4"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-400 text-transparent bg-clip-text">
            YUVTARANG 2K25
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Unleash Your Talent, Embrace The Culture
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#register"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Register Now
            </a>
            <a
              href="brochures"
              className="bg-transparent border-2 border-blue-500 hover:bg-blue-500/20 text-blue-700 px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
      <section id="about" className="py-20 bg-gray-100 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
            About The Fest
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                YUVTARANG is more than just a college festival—it's a
                celebration of youth, talent, and cultural diversity. Join us
                for two days of spectacular performances, creative competitions,
                and unforgettable memories.
              </p>
              <p className="text-lg text-gray-700">
                This year's theme focuses on{" "}
                <strong>"Unity in Diversity"</strong>—bringing together various
                art forms and cultural expressions under one roof to create a
                vibrant tapestry of young India's creative spirit.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80"
                alt="Festival celebration"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Featured Events
          </h2>

          <div className="flex justify-center mb-8 space-x-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 transform hover:scale-105 transition-transform cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="text-blue-500 mb-4">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {event.name}
                </h3>
                <p className="text-gray-700">{event.category}</p>
                <button
                  className="mt-4 text-blue-500 hover:text-blue-400 text-sm font-medium flex items-center"
                  onClick={() => setSelectedEvent(event)}
                >
                  View Details
                  <ChevronDown size={16} className="ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="brochures" className="bg-blue-50 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Event Brochures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="/src/assets/broucher1.jpg"
              alt="Brochure 1"
              className="w-full rounded-lg shadow-lg"
            />
            <img
              src="/src//assets/broucher2.jpg"
              alt="Brochure 2"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Event Schedule
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4"
              >
                <Clock className="text-blue-500 flex-shrink-0" />
                <div>
                  <p className="text-sm text-blue-500 font-medium">
                    {item.day}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.event}
                  </h3>
                  <p className="text-gray-700">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="register" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
            Register Now
          </h2>
          <div className="max-w-3xl mx-auto bg-gray-100 shadow-lg rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  External Registration
                </h3>
                <p className="text-gray-600 mb-6">
                  Scan the QR code to register through Google Forms.
                </p>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-md"
                >
                  Register Here
                </a>
              </div>
              <div className="flex justify-center">
                <img
                  src="/src/assets/qr.png"
                  alt="Registration QR Code"
                  className="w-48 h-48 bg-white p-2 rounded-lg border border-gray-300"
                />
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-300">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Internal Registration
                </h3>
                <div className="bg-purple-100 rounded-lg p-6 max-w-2xl mx-auto">
                  <p className="text-gray-700">
                    <strong className="text-gray-900">Note:</strong> For
                    internal participants (college students), please visit the
                    registration desk at:
                  </p>
                  <div className="mt-4 text-gray-900">
                    <p className="font-semibold">Location: Registration Desk</p>
                    <p>Timing: 9:00 AM - 5:00 PM</p>
                    <p>Working Days: Monday - Saturday</p>
                  </div>
                  <p className="mt-4 text-sm text-purple-700">
                    Please bring your college ID card for verification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
              "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
              "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec",
              "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
              "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
              "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee",
            ].map((url, index) => (
              <div
                key={index}
                className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"
              >
                <img
                  src={`${url}?auto=format&fit=crop&w=800&q=80`}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="sponsors" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Our Sponsors
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center"
              >
                <Handshake className="mx-auto text-purple-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {sponsor.name}
                </h3>
                <p className="text-purple-400">{sponsor.level} Sponsor</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              Have questions? Reach out to us!
            </p>
            <div className="space-y-4">
              <p className="text-gray-800">
                <Phone className="inline-block mr-2" size={20} />
                +91 1234567890
              </p>
              <p className="text-gray-800">
                <a
                  href="mailto:yavtarang2k25@vignaniit.edu.in"
                  className="hover:text-purple-400"
                >
                  yavtarang2k25@vignaniit.edu.in
                </a>
              </p>
              {/* Instagram Link */}
              <p className="text-gray-800">
                <a
                  href="https://www.instagram.com/p/DFhNNTaTlnm/?igsh=Yng3YW9xZDBibDlp"
                  className="hover:text-purple-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="inline-block mr-2">Instagram</span>
                  vsac.viit
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-800">
          <p>
            © 2025 YUVTARANG. Design and Developed By Kumara Swamy S. All rights
            reserved.
          </p>
        </div>
      </footer>

      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}

export default App;
