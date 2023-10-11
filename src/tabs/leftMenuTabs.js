import { AiOutlineHome } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";

import { TbMapCog } from "react-icons/tb";

import { TbMapPin2 } from "react-icons/tb";
import { RiGalleryFill } from "react-icons/ri";
import { LiaUsersSolid } from "react-icons/lia";
import { BsEvStation } from "react-icons/bs";
import { BiSolidReport } from "react-icons/bi";
import { PiFolderLockBold } from "react-icons/pi";
import { CgTemplate } from "react-icons/cg";


export const leftMenuTabs = [
  
  {
    id: 1,
    poKey: "",
    subTitle:[
        {
            id: 11,
            name: "Home",
            icon: AiOutlineHome,
            route:"/"
          },
    ]
  },
  {
    id: 2,
    poKey: "Stations",
    subTitle:[
        {
            id: 21,
            name: "Stations",
            icon: BsEvStation,
            route:"device_list"
          },
    ]
  },
  {
    id: 3,
    poKey: "User",
    icon: CgTemplate,
    subTitle:[
        {
            id: 31,
            name: "User",
            icon: LiaUsersSolid,
            route:"smart_locations"
        },
    ]
  },
  {
    
    id: 4,
    poKey: "Report",
    icon: CgTemplate,
    subTitle:[
        {
            id: 31,
            name: "Report",
            icon: BiSolidReport,
            route:"room"
        },
    ]
  },
  {
    
    id: 4,
    poKey: "Station Gallery",
    icon: CgTemplate,
    subTitle:[
        {
            id: 31,
            name: "Gallery",
            icon: RiGalleryFill,
            route:"users"
        },
    ]
  },
];
