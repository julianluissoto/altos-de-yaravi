import { dondeComerImages, placeholderImages, type ImagePlaceholder } from './placeholder-images';

const getImage = (id: string): any => {
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

const getImageRestaurant = (id: string): any => {
  const image = dondeComerImages.find(img => img.id === id);
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
    name: "Departamento 1",
    type: "cabaña",
    location: "sierras de cordoba",
    description: "Còmodas instalaciones ,un lugar ideal para descanzar, seguro y cerca de todo. Perfecto para salir en familia",
    price: "Consultar",
    guests: 4,
    features: ["cochera", "asador", "wifi", "parque", "ventilador", "cama 2 plazas", "camas individuales", "vista a las sierras", "cocina equipada"],
    image: getImage('cabin-1'),
    interiorImages: [
      getImage('cabin-interior-1'),
      getImage('cabin-interior-2'),
      getImage('cabin-interior-3'),
      getImage('cabin-interior-4'),
    ]
  }
  ,

  {
    id: 2,
    name: "Departamento 2",
    type: "cabaña",
    location: "sierras de cordoba",
    description: "Disfruta de la tranquilidad de las sierras con todas las comodidades que necesitas para una estancia inolvidable.",
    price: "Consultar",
    guests: 5,
    features: ["cochera", "asador", "wifi", "ventilador", "cama 2 plazas", "camas individuales", "vista a las sierras", "cocina equipada"],
    image: getImage('cabin-1'),
    interiorImages: [
      getImage('cabin-1-interior-1'),
      getImage('cabin-1-interior-2'),
      getImage('cabin-interior-4'),
      getImage('cabin-1-interior-3'),
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
    description: 'Este espejo de agua, rodeado de un paisaje serrano único, es un destino imperdible para los amantes de la naturaleza, los deportes acuáticos y la tranquilidad.',
    image: getImage('place-2'),
  },
  {
    id: 3,
    name: 'El Mirador',
    description: 'Ofrece una panorámica espectacular del lago y los cerros circundantes. Desde allí, los visitantes pueden contemplar los reflejos del atardecer sobre el agua, respirar aire puro y sumergirse en la tranquilidad del paisaje serrano',
    image: getImage('place-3'),
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
  getImage('gallery-new-2'),
  getImage('gallery-new-4'),
  getImage('gallery-new-6'),
  getImage('gallery-new-7'),
  getImage('gallery-new-8'),

];


export const touristCircuitsData = [
  {
    id: 1,
    name: 'Circuito a Villa Quillinzo',
    description: 'Un tranquilo pueblo a orillas del río Quillinzo, ideal para disfrutar de sus playas de arena, aguas cristalinas y la serenidad del entorno. Perfecto para un día de relax y naturaleza.',
    travelTime: 'Aprox. 25 min',
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d53988.37412003752!2d-64.50484665472953!3d-32.25072592511621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x95d29f9580e920c9%3A0xdd937efb8122a0cc!2sAltos%20de%20yaravi%2C%20RJ22%2B47%2C%20X5856%20Embalse%2C%20C%C3%B3rdoba!3m2!1d-32.1997627!2d-64.39934889999999!4m5!1s0x95d291c49d459955%3A0xb12ac6435bf35d2b!2sPARADOR%20PUENTE%20QUILLINZO%2C%20C%C3%B3rdoba!3m2!1d-32.2767147!2d-64.527896!5e0!3m2!1ses-419!2sar!4v1765485891192!5m2!1ses-419!2sar",
    image: getImage('circuit-quillinzo'),
  },
  {
    id: 2,
    name: 'Circuito a El Durazno',
    description: 'Descubre este pequeño paraíso escondido con un río de aguas transparentes y ollas naturales. Es un destino ideal para el senderismo, el trekking y conectar con la naturaleza virgen.',
    travelTime: 'Aprox. 1 hr 15 min',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d54020.21927702894!2d-64.71718012911977!3d-31.94589993356064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x95d27c62c35a1f67%3A0xc3f34533f5240217!2sEl%20Yarav%C3%AD%2072%2C%20Embalse%2C%20C%C3%B3rdoba!3m2!1d-32.1997222!2d-64.3993611!4m5!1s0x95d2912445695029%3A0x6331a1ef4553535d!2sEl%20Durazno%2C%20C%C3%B3rdoba!3m2!1d-32.1524388!2d-64.7925694!5e0!3m2!1ses-419!2sar!4v1721833588203!5m2!1ses-419!2sar',
    image: getImage('circuit-durazno'),
  },
  {
    id: 3,
    name: 'Circuito a La Cumbrecita',
    description: 'Visita el único pueblo peatonal de Argentina. Un rincón de estilo alpino en las sierras, con cascadas, bosques de coníferas y una gastronomía centroeuropea que te encantará.',
    travelTime: 'Aprox. 1 hr 30 min',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d108226.79092497645!2d-64.67389659068695!3d-31.90562624773822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x95d27c62c35a1f67%3A0xc3f34533f5240217!2sEl%20Yarav%C3%AD%2072%2C%20Embalse%2C%20C%C3%B3rdoba!3m2!1d-32.1997222!2d-64.3993611!4m5!1s0x95d29d009b450767%3A0xc236359549557458!2sLa%20Cumbrecita%2C%2C%20C%C3%B3rdoba!3m2!1d-31.921389!2d-64.773333!5e0!3m2!1ses-419!2sar!4v1721833635293!5m2!1ses-419!2sar',
    image: getImage('circuit-cumbrecita'),
  }
];

export const shortCircuitsData = [
  {
    id: 4,
    name: 'Paseo por la Costanera',
    description: 'Un recorrido ideal para caminar o andar en bicicleta bordeando el lago. Disfruta de las vistas, los paradores y la brisa del embalse.',
    travelTime: 'Variable',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3376.101528510691!2d-64.4057232232879!3d-32.20149478464547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x95d29f9580e920c9%3A0xdd937efb8122a0cc!2sAltos%20de%20yaravi%2C%20Embalse%2C%20Provincia%20de%20C%C3%B3rdoba!3m2!1d-32.1997627!2d-64.39934889999999!4m3!3m2!1d-32.2039182!2d-64.4069481!5e0!3m2!1ses-419!2sar!4v1765805812982!5m2!1ses-419!2sar',
    image: getImage('costanera'),
  },
  {
    id: 5,
    name: 'Subida al Cerro Pistarini',
    description: 'Una caminata corta pero con una gran recompensa. Desde la cima del Cerro Pistarini (Mirador de la T) tendrás una vista 360° de la ciudad y el lago.',
    travelTime: 'Aprox. 45 min (ida y vuelta)',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1117.4380798203565!2d-64.42818473032808!3d-32.22071286379346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDEzJzE0LjYiUyA2NMKwMjUnMzkuMiJX!5e1!3m2!1ses-419!2sar!4v1765805913745!5m2!1ses-419!2sar',
    image: getImage('cerro-pistarini'),
  }
];

export const whereToEatData = [
  {
    id: 1,
    name: "Don Honorio",
    description: "Parrilla y pastas caseras.",
    logo: getImageRestaurant('comida-1'),
    phone: "3571-485549"
  },
  {
    id: 2,
    name: "Parrilla las Brasas",
    description: "Las mejores carnes a la parrilla, chivito y especialidad en ranas y pejerrey.",
    logo: getImageRestaurant('comida-2'),
    phone: "3571-4878888"
  },
  {
    id: 3,
    name: "Tom Blake",
    description: "Bar-restaurant, picadas, hamburguesas y cervezas artesanales.",
    logo: getImageRestaurant('comida-3'),
    phone: "3571-310426"
  },
  {
    id: 4,
    name: "Capri",
    description: "Especialidad en milanesas, variedad de pizzas y guarniciones.",
    logo: getImageRestaurant('comida-4'),
    phone: "3571-485774"
  }
];

export type Accommodation = typeof accommodationsData[0];
export type PlaceToVisit = typeof placesToVisitData[0];
export type Review = typeof reviewsData[0];
export type TouristCircuit = typeof touristCircuitsData[0];
export type WhereToEatItem = typeof whereToEatData[0];
