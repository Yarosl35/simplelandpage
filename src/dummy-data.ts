export type cardData = {
  id: string;
  cardText: string;
  btnText: string;
  imgSrc: string;
};

export const dummyCards: cardData[] = [
  {
    id: "id1",
    cardText: "Hello. This is the first card there",
    btnText: "Open",
    imgSrc: "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg",
  },
  {
    id: "id2",
    cardText: "Hello. This is the second card there. How are you",
    btnText: "Open",
    // imgSrc: "https://klike.net/uploads/posts/2019-05/1556945364_1.jpg",
    imgSrc: "https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg",
  },
  {
    id: "id3",
    cardText: "Hi there. Third card is also good for us",
    btnText: "Open",
    imgSrc:
      "https://www.ixbt.com/img/n1/news/2021/10/2/22459ff25f8eff76bddf34124cc2c85b16f4cd4a_large.jpg",
  },
  {
    id: "id4",
    cardText: "WE are here to reach good goals, aren't we",
    btnText: "Open",
    imgSrc: "http://bm.img.com.ua/img/prikol/images/large/0/0/307600.jpg",
  },
];
