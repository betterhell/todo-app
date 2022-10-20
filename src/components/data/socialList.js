import {FaTwitch, FaTelegramPlane, FaGithub} from "react-icons/fa"

export const socialList = [
    {
        name: "Telegram",
        link: "https://t.me/betterheal",
        id: 1,
        icon: <FaTelegramPlane size={30} />,
        color: "hover:text-[#0088cc]"
    },
    {
        name: "Github",
        link: "https://github.com/betterhell",
        id: 2,
        icon: <FaGithub size={30} />,
        color: "hover:text-[#171515]"
    },
    {
        name: "Twitch",
        link: "https://www.twitch.tv/betterhell",
        id: 3,
        icon: <FaTwitch size={30} />,
        color: "hover:text-[#6441a5]"
    },
]
