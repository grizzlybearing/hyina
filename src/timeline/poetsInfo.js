import fb from '../img/bogushevich/fb.jpg';
import fb1 from '../img/bogushevich/fb1.jpg';
import fb2 from '../img/bogushevich/fb2.jpg';
import fb3 from '../img/bogushevich/fb3.jpg';


import pb from '../img/brovka/pb.jpg';
import pb1 from '../img/brovka/pb1.jpg';
import pb2 from '../img/brovka/pb2.jpg';
import pb3 from '../img/brovka/pb3.jpg';

import zb from '../img/byadulya/zb.jpg';
import zb1 from '../img/byadulya/zb1.jpg';
import zb2 from '../img/byadulya/zb2.jpg';
import zb3 from '../img/byadulya/zb3.jpg';

import yk from '../img/kolas/yk.jpg';
import yk1 from '../img/kolas/yk1.jpg';
import yk2 from '../img/kolas/yk2.jpg';
import yk3 from '../img/kolas/yk3.jpg';

const poetsInfo = [
    {
        id: 1,
        imgPath: zb,
        name: "Змитрок Бядуля",
        name_en: "Zmitrok Byadulya",
        dateOfBirth: 1886,
        dateOfDeath: "1941",
        someText: "Белорусский и советский писатель и поэт, лексикограф.",
        photos: [
            zb1,
            zb2,
            zb3
        ],
        links: [
            "https://www.youtube.com/embed/GB_rlueYscM"
        ],
        coordinates: {
            longitude: 27.62943681054619,
            latitude: 53.927502869561685
        },
        url: "/byadulya"
    },
    {
        id: 2,
        imgPath: yk,
        name: "Якуб Колас",
        name_en: "Jakub Kolas",
        dateOfBirth: 1882,
        dateOfDeath: 1956,
        someText:  "Белорусский советский писатель, драматург, поэт и переводчик, общественный деятель.",
        photos: [
            yk1,
            yk2,
            yk3,
        ],
        links: [
            "https://www.youtube.com/embed/9kvHZLJdW3Q"
        ],
        coordinates: {
            longitude: 27.63681054630663,
            latitude: 53.933196363215394
        },
        url: "/kolas"
    },
    {
        id: 3,
        imgPath: fb,
        name: "Франциск Богушевич",
        name_en: "Francis Bogushevich",
        dateOfBirth: 1840,
        dateOfDeath: 1900,
        someText:  "Белорусский поэт, один из основоположников новой белорусской литературы.",
        photos: [
            fb1,
            fb2,
            fb3,
        ],
        links: [
            "https://www.youtube.com/embed/7F2ROTgI7Xo"
        ],
        coordinates: {
            longitude: 27.629439,
            latitude: 53.927486
        },
        url: "/bogushevich"
    },
    {
        id: 4,
        imgPath: pb,
        name: "Петрусь Бровка",
        name_en: "Petrus Brovka",
        dateOfBirth: 1905,
        dateOfDeath: 1980,
        someText: "Белорусский советский писатель, поэт и переводчик, драматург, публицист." ,
            
        photos: [
            pb1,
            pb2,
            pb3
        ],
        links: [
            "https://www.youtube.com/embed/NabkTRPt7ck"
        ],
        coordinates: {
            longitude: 27.548602735447222,
            latitude: 53.9093991787487
        },
        url: "/brovka"
    },
];

export default poetsInfo;