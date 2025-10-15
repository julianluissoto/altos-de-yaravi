
import { placeholderImages } from './placeholder-images';

const getImage = (id: string) => {
  const image = placeholderImages.find(img => img.id === id);
  if (!image) {
    // Fallback or error
    return {
      id: 'fallback',
      description: 'Imagen de reemplazo',
      imageUrl: 'https://www.destinocordoba.com.ar/wp-content/uploads/2023/03/330841326_766594117704915_2447324353930562228_n-1.jpeg',
      imageHint: 'embalse'
    };
  }
  return image;
};

export const accommodationsData = [
  {
    id: 1,
    name: "Departamento Moderno",
    type: "cabaña",
    location: "sierras de cordoba",
    description: "Escápate a las sierras y alojate en un lugar ideal para descanzar, seguro y cerca de todo. Perfecto para salir en familia",
    price: 50000,
    guests: 4,
    features: ["ventilador", "cama 2 plazas", "vista a las sierras"],
    image: getImage('cabin-1'),
    interiorImages: [
      getImage('cabin-interior-1'),
      getImage('cabin-interior-2'),
      getImage('cabin-interior-3'),
      getImage('cabin-interior-4'),
    ]
  }
  
];

export const heroImage = getImage('hero');

export const placesToVisitData = [
  {
    id: 1,
    name: 'Dique de Embalse',
    description: 'Disfruta de deportes acuáticos, pesca y vistas espectaculares en el lago más grande de Córdoba.',
    image: getImage('place-1'),
  },
  {
    id: 2,
    name: 'Segunda usina',
    description: 'Atrévete a conquistar el pico más alto de Córdoba, una aventura para los amantes del senderismo.',
    image: getImage('place-3'),
  },
  {
    id: 3,
    name: 'El Mirador',
    description: 'Un pueblo peatonal de estilo alpino, perfecto para pasear, disfrutar de la gastronomía y la naturaleza.',
    image: getImage('place-2'),
  },
];

export const reviewsData = [
    {
      id: 1,
      name: "Mariela",
      rating: 5,
      review: "El lugar increíble, un sueño, ideal para descansar y conectar con la naturaleza. La cabaña súper cómoda, todo impecable, funciona todo perfecto. La atención excelente.",
      avatar: "/avatars/01.png"
    },
    {
      id: 2,
      name: "Gaston",
      rating: 5,
      review: "Hermoso lugar. Muy tranquilo y con instalaciones excelentes. El dueño siempre atento y predispuesto a ayudar. Sin dudas volveremos.",
      avatar: "/avatars/02.png"
    },
    {
      id: 3,
      name: "Juan Cruz",
      rating: 5,
      review: "Un lugar increíble para desconectar, es un refugio de paz. Las cabañas son muy cómodas y completas. El entorno natural es soñado.",
      avatar: "/avatars/03.png"
    },
     {
      id: 4,
      name: "Sofia",
      rating: 5,
      review: "Pasamos un fin de semana espectacular. La atención de Julián es inmejorable, siempre atento a todo. El lugar es un paraíso. ¡Volveremos pronto!",
      avatar: "/avatars/04.png"
    }
];

export const galleryImagesData = [
    getImage('gallery-new-1'),
    getImage('gallery-new-2'),
    getImage('gallery-new-3'),
    getImage('gallery-new-4'),
    getImage('gallery-new-5'),
    getImage('gallery-new-6'),
    getImage('gallery-new-7'),
    getImage('gallery-new-8'),
    getImage('gallery-new-9'),
];


export type Accommodation = typeof accommodationsData[0];
export type PlaceToVisit = typeof placesToVisitData[0];
export type Review = typeof reviewsData[0];
