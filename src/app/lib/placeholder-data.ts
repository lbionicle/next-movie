export const nav = [
  { title: "Фильмы", url: "#films" },
  { title: "Сериалы", url: "#series" },
  { title: "Мультфильмы", url: "#cartoons" },
  { title: "Отзывы", url: "#" },
];

export const movieNav = [
  { title: "Кадры из фильма", id: "picture" },
  { title: "Смотреть трейлер", id: "trailer" },
  { title: "Смотреть фильм", id: "film" },
];

export const categories = [
  { title: "Фильмы", id: "#films" },
  { title: "Сериалы", id: "#series" },
  { title: "Мультфильмы", id: "#cartoons" },
  { title: "Популярное", id: "#popular" },
  { title: "Новое", id: "#new" },
  { title: "Все", id: "#all" },
];

export const mainIcons = [
  {
    url: "#",
    src: "/main/iconSearchWhite.svg",
    alt: "search",
  },
  {
    url: "#",
    src: "/main/iconWrite.svg",
    alt: "review",
  },
  {
    url: "#",
    src: "/main/iconHeartWhite.svg",
    alt: "like",
  },
  {
    url: "#",
    src: "/main/iconUser.svg",
    alt: "profile",
  },
];

export const slides = [
  { src: "/slider/img2.png", alt: "artur1", isDark: false },
  { src: "/slider/img3.png", alt: "artur2", isDark: false },
  { src: "/slider/img4.png", alt: "artur3", isDark: true },
  { src: "/slider/img5.png", alt: "artur4", isDark: false },
  { src: "/slider/img6.png", alt: "artur5", isDark: false },
  { src: "/slider/img2.png", alt: "artur6", isDark: false },
  { src: "/slider/img3.png", alt: "artur7", isDark: false },
  { src: "/slider/img4.png", alt: "artur8", isDark: true },
  { src: "/slider/img5.png", alt: "artur9", isDark: false },
  { src: "/slider/img6.png", alt: "artur10", isDark: false },
];

export const breakpoints = {
  1536: {
    slidesPerView: 5,
    spaceBetween: 40,
  },
  1280: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  576: {
    slidesPerView: 2,
    spaceBetween: 25,
  },
  0: {
    slidesPerView: 1,
    spaceBetween: 16,
  },
};

export const genres = [
  { title: "Биография", param: "biography" },
  { title: "Комедии", param: "comedies" },
  { title: "Боевики", param: "action" },
  { title: "Криминал", param: "crime" },
  { title: "Военные", param: "war" },
  { title: "Мелодрамы", param: "melodrama" },
  { title: "Детективы", param: "detective" },
  { title: "Приключения", param: "adventure" },
  { title: "Документальные", param: "documentary" },
  { title: "Семейные", param: "family" },
  { title: "Драмы", param: "drama" },
  { title: "Триллеры", param: "thriller" },
  { title: "Исторические", param: "historical" },
  { title: "Ужасы", param: "horror" },
];

export const countries = [
  { name: "Австралия", param: "australia" },
  { name: "Испания", param: "spain" },
  { name: "Беларусь", param: "belarus" },
  { name: "Италия", param: "italy" },
  { name: "Бельгия", param: "belgium" },
  { name: "Россия", param: "russia" },
  { name: "Бразилия", param: "brazil" },
  { name: "США", param: "usa" },
  { name: "Великобритания", param: "unitedkingdom" },
  { name: "Франция", param: "france" },
  { name: "Германия", param: "germany" },
  { name: "Южная Корея", param: "southkorea" },
  { name: "Дания", param: "denmark" },
  { name: "Япония", param: "japan" },
];

export const faq = [
  {
    title: "Как работает Кинонавигатор?",
    text: `Кинонавигатор — это ваш персональный помощник в мире кино! Кинонавигатор анализирует ваши предпочтения и отзывы о фильмах и сериалах, чтобы предложить персонализированные рекомендации, основанные на вашем вкусе и интересах.
Когда вы оставляете отзывы о фильмах, Кинонавигатор собирает данные о ваших предпочтениях. Например, если вы любите комедии или триллеры, система запоминает это. Далее, система анализирует ваши оценки и комментарии, чтобы выявить общие черты ваших вкусов. Это позволяет понять, какие жанры, актёры и темы вам нравятся больше всего.
На основе всех собранных данных, Кинонавигатор формирует список фильмов и сериалов, которые, вероятно, вам понравятся. Эти рекомендации обновляются каждый раз, когда вы оставляете новый отзыв или меняете свои предпочтения.`,
  },
  {
    title: "Как я могу оставить отзыв?",
    text: `Вы можете оставить отзыв, выбрав фильм, сериал или мультфильм на нашем сайте и перейдя в раздел отзывов. Просто оцените фильм, сериал или мультфильм и напишите свой комментарий.
Вам будет предложено оценить фильм, сериал или мультфильм по шкале, от 1 до 5 звёзд. Выберите ту оценку, которая соответствует вашим впечатлениям. После выбора оценки вы можете выразить свои мысли о фильме. Опишите, что вам понравилось или не понравилось, и дайте советы другим зрителям. Далее, нажмите кнопку «Отправить» или «Опубликовать», чтобы ваш отзыв был добавлен к фильму, сериалу или мультфильму. Вы получите уведомление о том, что ваш отзыв успешно отправлен.
Если вы хотите изменить свой отзыв позже, вы можете сделать это в своём профиле, где будут отображаться все ваши оставленные отзывы.`,
  },
  {
    title: "Нужно ли создавать учетную запись для использования сервиса?",
    text: `Нужно ли создавать учетную запись для использования сервиса?
Создание учетной записи необязательно, но оно позволит вам сохранять ваши предпочтения и оставлять отзывы, а также получать более точные рекомендации.`,
  },
  {
    title: "Как я могу изменить свои предпочтения?",
    text: `Вы можете обновить свои предпочтения в личном профиле на сайте, где можете указать любимые жанры, актеров и другие интересы.`,
  },
  {
    title: "Как часто обновляются рекомендации?",
    text: `Рекомендации обновляются регулярно, в зависимости от ваших новых отзывов и изменений в вашей активности на платформе.`,
  },
];

export const footer = [
  { title: "Биография", url: "biography" },
  { title: "Комедии", url: "comedies" },
  { title: "Боевики", url: "action" },
  { title: "Криминал", url: "crime" },
  { title: "Военные", url: "war" },
  { title: "Мелодрамы", url: "melodrama" },
  { title: "Детективы", url: "detective" },
  { title: "Приключения", url: "adventure" },
  { title: "Документальные", url: "documentary" },
  { title: "Семейные", url: "family" },
  { title: "Драмы", url: "drama" },
  { title: "Триллеры", url: "thriller" },
  { title: "Исторические", url: "historical" },
  { title: "Ужасы", url: "horror" },
  ...nav,
];

export const movies = [
  {
    name: "Материнский инстинкт",
    type: "film",
    id: 228,
    grade: 4.8,
    year: 2024,
    countries: ["США", "Бельгия", "Франция"],
    genres: ["Триллер", "драма"],
    director: "Бенуа Деломм",
    tags: { age: 18, duration: 94 },
    description:
      "Начало 1960-х, американский пригород. Элис и Селин — лучшие подруги. Они живут в соседних домах, их сыновья учатся в одном классе и растут как братья, а знаменательные даты две семьи отмечают вместе. Но этой идиллии приходит конец после несчастного случая. Дружба женщин трещит по швам и оборачивается взаимными подозрениями и упрёками.",
    actors: [
      {
        name: "Джессика Чейстен",
        url: "https://i.pinimg.com/736x/22/81/98/2281984ab271f140a48ff6324b8fdc43--film-video-celebrity-photography.jpg",
        alt: "Джессика Чейстен",
      },
      {
        name: "Джессика Чейстен",
        url: "https://i.pinimg.com/736x/22/81/98/2281984ab271f140a48ff6324b8fdc43--film-video-celebrity-photography.jpg",
        alt: "Джессика Чейстен",
      },
      {
        name: "Джессика Чейстен",
        url: "https://i.pinimg.com/736x/22/81/98/2281984ab271f140a48ff6324b8fdc43--film-video-celebrity-photography.jpg",
        alt: "Джессика Чейстен",
      },
      {
        name: "Джессика Чейстен1",
        url: "https://i.pinimg.com/736x/22/81/98/2281984ab271f140a48ff6324b8fdc43--film-video-celebrity-photography.jpg",
        alt: "Джессика Чейстен",
      },
      {
        name: "Джессика Чейстен",
        url: "https://i.pinimg.com/736x/22/81/98/2281984ab271f140a48ff6324b8fdc43--film-video-celebrity-photography.jpg",
        alt: "Джессика Чейстен",
      },
      {
        name: "Андерс Даниелсен Лье",
        url: "https://i.pinimg.com/736x/22/81/98/2281984ab271f140a48ff6324b8fdc43--film-video-celebrity-photography.jpg",
        alt: "Джессика Чейстен",
      },
      {
        name: "Джессика Чейстен",
        url: "https://i.pinimg.com/736x/22/81/98/2281984ab271f140a48ff6324b8fdc43--film-video-celebrity-photography.jpg",
        alt: "Джессика Чейстен",
      },
      {
        name: "Джессика Чейстен",
        url: "https://i.pinimg.com/736x/22/81/98/2281984ab271f140a48ff6324b8fdc43--film-video-celebrity-photography.jpg",
        alt: "Джессика Чейстен",
      },
      {
        name: "Андерс Даниелсен Лье",
        url: "https://i.pinimg.com/736x/22/81/98/2281984ab271f140a48ff6324b8fdc43--film-video-celebrity-photography.jpg",
        alt: "Джессика Чейстен",
      },
      {
        name: "Андерс Даниелсен Лье",
        url: "https://i.pinimg.com/736x/22/81/98/2281984ab271f140a48ff6324b8fdc43--film-video-celebrity-photography.jpg",
        alt: "Джессика Чейстен",
      },
    ],
    sources: {
      profile: {
        url: "https://materinskiy-instinkt-film.ru/uploads/2024-07/184PW9oYYHko6rSHtcx1o9XFMK2twnk2XUrAIHpL.webp",
        alt: "This is profile picture",
        isDark: false,
      },
      frames: [
        {
          url: "https://avatars.mds.yandex.net/get-kinopoisk-image/10768063/584df212-543d-4bf5-9825-3688ca89aee2/1920x",
          alt: "picture1",
        },
        {
          url: "https://avatars.mds.yandex.net/get-kinopoisk-image/10768063/584df212-543d-4bf5-9825-3688ca89aee2/1920x",

          alt: "picture2",
        },
        {
          url: "https://avatars.mds.yandex.net/get-kinopoisk-image/10768063/584df212-543d-4bf5-9825-3688ca89aee2/1920x",

          alt: "picture3",
        },
        {
          url: "https://avatars.mds.yandex.net/get-kinopoisk-image/10768063/584df212-543d-4bf5-9825-3688ca89aee2/1920x",
          alt: "picture4",
        },
      ],
      trailer: "https://www.youtube.com/watch?v=L_ssR0ugIYA&t=2725s",
      video: "https://www.youtube.com/watch?v=L_ssR0ugIYA&t=2725s",
    },
    reviews: [
      {
        reviewer: "Наталья Гордеева",
        rating: 5,
        comment: `Сюжет полон неожиданных поворотов, которые заставляют задуматься о границах материнской любви. «Материнский инстинкт» — это не просто фильм о семье, это глубокая история о жертвах и мужестве, которые готовы принести родители ради своих детей.
        Рекомендую всем, кто ценит эмоционально насыщенные драмы с сильными персонажами. Этот фильм точно оставит след в вашем сердце!`,
      },
      {
        reviewer: "Наталья Гордеева",
        rating: 5,
        comment: `Сюжет полон неожиданных поворотов, которые заставляют задуматься о границах материнской любви. «Материнский инстинкт» — это не просто фильм о семье, это глубокая история о жертвах и мужестве, которые готовы принести родители ради своих детей.
        \n\nРекомендую всем, кто ценит эмоционально насыщенные драмы с сильными персонажами. Этот фильм точно оставит след в вашем сердце!`,
      },
      {
        reviewer: "Наталья Гордеева",
        rating: 4,
        comment: `Несмотря на сильные актёрские выступления и качественную постановку, сюжет меня не сильно захватил. Некоторые повороты были предсказуемыми, и в некоторых моментах мне не хватало динамики.
        Тем не менее, фильм всё равно стоит посмотреть. Он поднимает важные темы о семье, защите и жертвах, которые готовы приносить родители.`,
      },
      {
        reviewer: "Наталья Гордеева",
        rating: 0,
        comment: `Сюжет полон неожиданных поворотов, которые заставляют задуматься о границах материнской любви. «Материнский инстинкт» — это не просто фильм о семье, это глубокая история о жертвах и мужестве, которые готовы принести родители ради своих детей.
        \n\nРекомендую всем, кто ценит эмоционально насыщенные драмы с сильными персонажами. Этот фильм точно оставит след в вашем сердце!`,
      },
    ],
  },
];
