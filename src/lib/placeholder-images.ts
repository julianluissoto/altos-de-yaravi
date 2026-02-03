import { Description } from "@radix-ui/react-toast";
import { Phone } from "lucide-react";

export type ImagePlaceholder = {
  id: string;
  title?: string;
  description?: string;
  imageUrl: string;
  imageHint: string;
};

const placeholderImages = [
  {
    id: "hero",
    description: "Vista panorámica de Embalse de Calamuchita",
    imageUrl:
      "https://www.destinocordoba.com.ar/wp-content/uploads/2023/03/330841326_766594117704915_2447324353930562228_n-1.jpeg",
    imageHint: "embalse calamuchita",
  },
  {
    id: "cabin-1",
    description: "Departamento para 4/5 personas",
    imageUrl:
      "https://res.cloudinary.com/julian-soto/image/upload/v1770150257/altos%20de%20yaravi/patio_g1cw14.jpg",
    imageHint: "departamento exterior",
  },
  {
    id: "cabin-interior-1",
    description: "Interior de la cabaña, sala de estar.",
    imageUrl:
      "https://res.cloudinary.com/julian-soto/image/upload/v1760469106/altos%20de%20yaravi/20221204_231558_xs3n2l.jpg",
    imageHint: "cabaña interior",
  },
  {
    id: "cabin-interior-2",
    description: "Dormitorio principal.",
    imageUrl:
      "https://res.cloudinary.com/julian-soto/image/upload/v1760468581/altos%20de%20yaravi/20251003_131926_xtii9o.jpg",
    imageHint: "cabaña dormitorio",
  },
  {
    id: "cabin-interior-3",
    description: "Dormitorio con camas individuales",
    imageUrl:
      "https://res.cloudinary.com/julian-soto/image/upload/v1760468576/altos%20de%20yaravi/20251003_132255_yofubl.jpg",
    imageHint: "cabaña cocina",
  },
  {
    id: "cabin-interior-4",
    description: "Cochera",
    imageUrl:
      "https://res.cloudinary.com/julian-soto/image/upload/v1760470670/altos%20de%20yaravi/IMG-20220121-WA0058_ue24f9.jpg",
    imageHint: "cochera",
  },
  {
    id: "cabin-1-interior-1",
    description: "Comedor",
    imageUrl:
      "https://res.cloudinary.com/julian-soto/image/upload/v1760469105/altos%20de%20yaravi/20220123_203704_hibeii.jpg",
    imageHint: "comedor",
  },
  {
    id: "cabin-1-interior-2",
    description: "habitacion 2",
    imageUrl:
      "https://res.cloudinary.com/julian-soto/image/upload/v1760469109/altos%20de%20yaravi/20220115_210523_bb6xsg.jpg",
    imageHint: "habitacion 2",
  },
  {
    id: "cabin-1-interior-3",
    description: "habitacion 1",
    imageUrl:
      "https://res.cloudinary.com/julian-soto/image/upload/v1765226251/altos%20de%20yaravi/habitacion_doble_ny9fsx.jpg",
    imageHint: "habitacion 1",
  },
  {
    id: "place-3",
    description: "Seguna Usina.",
    imageUrl:
      "https://i.ytimg.com/vi/HbvSxLX7p5U/maxresdefault.jpg",
    imageHint: "usina",
  },
  {
    id: "place-2",
    description: "Vista desde el mirador",
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/08/16/92/ee/mirador-ute.jpg",
    imageHint: "mirador vista",
  },
  {
    id: 'circuit-quillinzo',
    description: 'Río en Villa Quillinzo',
    imageUrl: 'https://res.cloudinary.com/julian-soto/image/upload/v1765483176/altos%20de%20yaravi/cicuitos/panoramica-rio-quillinzo_jxmb1y.jpg',
    imageHint: 'rio playa'
  },
  {
    id: 'circuit-durazno',
    description: 'Río en El Durazno, Calamuchita',
    imageUrl: 'https://res.cloudinary.com/julian-soto/image/upload/v1765483256/altos%20de%20yaravi/cicuitos/paraje-el-durazno_nw9hzf.jpg',
    imageHint: 'rio piedras'
  },
  {
    id: 'circuit-cumbrecita',
    description: 'Pueblo de La Cumbrecita',
    imageUrl: 'https://res.cloudinary.com/julian-soto/image/upload/v1765483346/altos%20de%20yaravi/cicuitos/la-cumbrecita-2-1024x720_kgik2a.jpg',
    imageHint: 'pueblo alpino'
  },

  {
    id: 'cerro-pistarini',
    description: 'Cerro Pistarini',
    imageUrl: 'https://res.cloudinary.com/julian-soto/image/upload/v1765806066/altos%20de%20yaravi/circuitos-cortos/cerro_pistarini_alnwjw.webp',
    imageHint: 'cerro pistarini'
  },
  {
    id: 'costanera',
    description: 'Costanera de Embalse',
    imageUrl: 'https://res.cloudinary.com/julian-soto/image/upload/v1765806434/altos%20de%20yaravi/circuitos-cortos/balsas_mgffbm.jpg',
    imageHint: 'costanera embalse'
  }
];

const galleryImages = [

  {
    id: "gallery-1",
    title: "Vista del Dique de Embalse.",
    Description: "Vista del Dique de Embalse.",
    imageUrl:
      "https://www.destinocordoba.com.ar/wp-content/uploads/2022/02/FMH6DpWXMAYT6gn.jpg",
    imageHint: "dique lago",
  },

  {
    id: "gallery-2",
    title: "Amanecer en Embalse",
    imageUrl:
      "https://el-portal-de-calamuchita.valle-de-calamuchita-hoteles.com/data/Images/OriginalPhoto/13295/1329580/1329580331/image-embalse-amanecer-en-calamuchita-3.JPEG",
    imageHint: "amanecer embalse",
  },
  {
    id: "gallery-3",
    title: "Unidad Turística Embalse",
    imageUrl: "https://www.argentina.gob.ar/sites/default/files/utembalsecnm.jpg",
    imageHint: "unidad turistica",
  },
  {
    id: "gallery-4",
    title: "La Hermita",
    imageUrl:
      "https://www.lavoz.com.ar/resizer/v2/CSMT2Z57W5ESNCGS657MUFL36E.jpg?auth=c082d537c32d642583a6946984f5dfd572baae70b08da71a3862eec397a98c89&quality=75&smart=true&width=385",
    imageHint: "hermita",
  },
  {
    id: "gallery-5",
    title: "Dique de Embalse",
    imageUrl: "https://rallypais.com/wp-content/uploads/2024/08/Baldoni-prueba.jpeg",
    imageHint: "dique embalse",
  },
  {
    id: "gallery-6",
    title: "Central Nuclear Embalse",
    imageUrl:
      "https://www.rionegro.com.ar/wp-content/uploads/2022/12/Central-Nuclear-Embalse-Aerea-1.jpg?w=1200&h=630&crop=1",
    imageHint: "central nuclear",
  }
]

const dondeComerImages = [

  {
    id: "comida-1",
    imageUrl: "https://embalse.gov.ar/wp-content/uploads/2024/10/donhonorio4.jpeg",
    imageHint: "don honorio",

  },
  {
    id: "comida-2",
    imageUrl: "https://embalse.gov.ar/wp-content/uploads/2024/10/tomblake5.jpeg",
    imageHint: "tom blake",

  },
  {
    id: "comida-3",
    imageUrl: "https://res.cloudinary.com/julian-soto/image/upload/v1769454976/altos%20de%20yaravi/photo1jpg_k1mjw7.jpg",
    imageHint: "las brasas",

  },
  {
    id: "comida-4",
    imageUrl: "https://res.cloudinary.com/julian-soto/image/upload/v1769455201/altos%20de%20yaravi/capri_jdc9yt.jpg",
    imageHint: "capri",

  },
  {
    id: "comida-5",
    imageUrl: "https://res.cloudinary.com/julian-soto/image/upload/v1769820137/altos%20de%20yaravi/la-blonda_c80uwh.webp",
    imageHint: "la blonda",
  }

]


export { placeholderImages, galleryImages, dondeComerImages };
