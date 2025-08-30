import { useState } from "react";
import { useCart } from './useCart';


interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  unit?: string;
  quantity?: string;
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Блины домашние с мясом и сметаной",
    description: "",
    price: 250,
    category: "завтраки",
    unit: "ШТУКА",
    quantity: "3"
  },
  {
    id: "2",
    name: "Блины домашние с творогом и сметаной",
    description: "",
    price: 250,
    category: "завтраки",
    unit: "ШТУКА",
    quantity: "2"
  },
  {
    id: "3",
    name: "Блины домашние с джемом",
    description: "",
    price: 200,
    category: "завтраки",
    unit: "ШТУКА",
    quantity: "3"
  },
  {
    id: "4",
    name: "Котлеты",
    description: "",
    price: 150,
    category: "завтраки",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "5",
    name: "Сосиска",
    description: "",
    price: 150,
    category: "завтраки",
    unit: "ШТУКА",
    quantity: "2"
  },
  {
    id: "6",
    name: "Наггетсы",
    description: "",
    price: 300,
    category: "завтраки",
    unit: "ГРАММ",
    quantity: "200"
  },
  {
    id: "7",
    name: "Каша овсяная на молоке",
    description: "",
    price: 200,
    category: "завтраки",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "8",
    name: "Каша гречневая",
    description: "",
    price: 200,
    category: "завтраки",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "9",
    name: "Каша рисовая на молоке",
    description: "",
    price: 200,
    category: "завтраки",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "10",
    name: "Яичница по-кавказски",
    description: "",
    price: 250,
    category: "завтраки",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "11",
    name: "Сырники со сметаной",
    description: "",
    price: 300,
    category: "завтраки",
    unit: "ШТУКА",
    quantity: "3"
  },
  {
    id: "12",
    name: "Пюре",
    description: "",
    price: 200,
    category: "завтраки",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "13",
    name: "Яичница глазунья",
    description: "",
    price: 150,
    category: "завтраки",
    unit: "ШТУКА",
    quantity: "2"
  },
  {
    id: "14",
    name: "Щи зелёные",
    description: "",
    price: 370,
    category: "первые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "15",
    name: "Суп лапша (куриный)",
    description: "",
    price: 320,
    category: "первые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "16",
    name: "Хашлама с говядиной",
    description: "",
    price: 470,
    category: "первые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "17",
    name: "Борщ с говядиной",
    description: "",
    price: 370,
    category: "первые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "18",
    name: "Хашлама с бараниной",
    description: "",
    price: 530,
    category: "первые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "19",
    name: "Солянка сборная",
    description: "",
    price: 470,
    category: "первые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "20",
    name: "Уха по царски",
    description: "",
    price: 480,
    category: "первые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "21",
    name: "Окрошка",
    description: "",
    price: 350,
    category: "первые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "22",
    name: "Пити (суп армянский)",
    description: "",
    price: 350,
    category: "первые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "23",
    name: "Суп гороховый с копчёным мясом",
    description: "",
    price: 370,
    category: "первые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "24",
    name: "Суп харчо",
    description: "",
    price: 380,
    category: "первые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "25",
    name: "Лагман из баранины",
    description: "",
    price: 550,
    category: "первые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "26",
    name: "Лагман",
    description: "",
    price: 500,
    category: "первые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "27",
    name: "Чанахи",
    description: "",
    price: 480,
    category: "вторые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "28",
    name: "Чанахи с бараниной",
    description: "",
    price: 550,
    category: "вторые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "29",
    name: "Плов с курицей",
    description: "",
    price: 350,
    category: "вторые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "30",
    name: "Плов с бараниной",
    description: "",
    price: 400,
    category: "вторые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "31",
    name: "Котлета по-киевски",
    description: "",
    price: 250,
    category: "вторые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "32",
    name: "Купаты",
    description: "",
    price: 400,
    category: "вторые-блюда",
    unit: "ШТУКА",
    quantity: "2"
  },
  {
    id: "33",
    name: "Жаркое по-домашнему",
    description: "",
    price: 500,
    category: "вторые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "34",
    name: "Чахохбили",
    description: "",
    price: 480,
    category: "вторые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "35",
    name: "Аджапсандал",
    description: "",
    price: 430,
    category: "вторые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "36",
    name: "Хинкали с бараниной",
    description: "",
    price: 600,
    category: "вторые-блюда",
    unit: "ШТУКА",
    quantity: "5"
  },
  {
    id: "37",
    name: "Хинкали жареные",
    description: "",
    price: 500,
    category: "вторые-блюда",
    unit: "ШТУКА",
    quantity: "5"
  },
  {
    id: "38",
    name: "Хинкали отварные",
    description: "",
    price: 500,
    category: "вторые-блюда",
    unit: "ШТУКА",
    quantity: "5"
  },
  {
    id: "39",
    name: "Сковорода деликатесная",
    description: "",
    price: 370,
    category: "вторые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "40",
    name: "Шампиньоны с сыром",
    description: "",
    price: 550,
    category: "вторые-блюда",
    unit: "ШТУКА",
    quantity: "5"
  },
  {
    id: "41",
    name: "Цыплёнок табака",
    description: "",
    price: 850,
    category: "вторые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "42",
    name: "Вареники домашние",
    description: "",
    price: 350,
    category: "вторые-блюда",
    unit: "ШТУКА",
    quantity: "10"
  },
  {
    id: "43",
    name: "Пельмени жареные",
    description: "",
    price: 350,
    category: "вторые-блюда",
    unit: "ШТУКА",
    quantity: "10"
  },
  {
    id: "44",
    name: "Пельмени",
    description: "",
    price: 350,
    category: "вторые-блюда",
    unit: "ШТУКА",
    quantity: "10"
  },
  {
    id: "45",
    name: "Жареная картошка с грибами",
    description: "",
    price: 470,
    category: "вторые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "46",
    name: "Мясо по-французски",
    description: "",
    price: 500,
    category: "вторые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "47",
    name: "Мясо по-итальянски",
    description: "",
    price: 480,
    category: "вторые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "48",
    name: "Павлиний хвост",
    description: "",
    price: 450,
    category: "вторые-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "49",
    name: "Мацони с чеснаком",
    description: "",
    price: 150,
    category: "армянская-кухня",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "50",
    name: "Тан",
    description: "",
    price: 350,
    category: "армянская-кухня",
    unit: "ЛИТР",
    quantity: "1"
  },
  {
    id: "51",
    name: "Лаваш армянский",
    description: "",
    price: 100,
    category: "армянская-кухня",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "52",
    name: "Плов аджар",
    description: "",
    price: 350,
    category: "армянская-кухня",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "53",
    name: "Фасоль по-еревански",
    description: "",
    price: 350,
    category: "армянская-кухня",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "54",
    name: "Ишли-кюфа",
    description: "",
    price: 500,
    category: "армянская-кухня",
    unit: "ШТУКА",
    quantity: "3"
  },
  {
    id: "55",
    name: "Кюфта",
    description: "",
    price: 400,
    category: "армянская-кухня",
    unit: "ГРАММ",
    quantity: "100"
  },
  {
    id: "56",
    name: "Долма",
    description: "",
    price: 500,
    category: "армянская-кухня",
    unit: "ШТУКА",
    quantity: "5"
  },
  {
    id: "57",
    name: "Пити (суп армянский)",
    description: "",
    price: 350,
    category: "армянская-кухня",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "58",
    name: "Ламанджо",
    description: "",
    price: 350,
    category: "армянская-кухня",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "59",
    name: "Ёка",
    description: "",
    price: 300,
    category: "армянская-кухня",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "60",
    name: "Армянский завтрак",
    description: "",
    price: 350,
    category: "армянская-кухня",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "61",
    name: "Форель в лаваше",
    description: "",
    price: 280,
    category: "блюда-из-рыбы",
    unit: "ГРАММ",
    quantity: "100"
  },
  {
    id: "62",
    name: "Форель жареная",
    description: "",
    price: 250,
    category: "блюда-из-рыбы",
    unit: "ГРАММ",
    quantity: "100"
  },
  {
    id: "63",
    name: "Стейк из сёмги",
    description: "",
    price: 380,
    category: "блюда-из-рыбы",
    unit: "ГРАММ",
    quantity: "100"
  },
  {
    id: "64",
    name: "Фирменное блюдо \"Афон\"",
    description: "",
    price: 850,
    category: "блюда-из-рыбы",
    unit: "ГРАММ",
    quantity: "300"
  },
  {
    id: "65",
    name: "Барабуля",
    description: "",
    price: 550,
    category: "блюда-из-рыбы",
    unit: "ГРАММ",
    quantity: "250"
  },
  {
    id: "66",
    name: "Цезарь с сёмгой",
    description: "",
    price: 650,
    category: "салаты",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "67",
    name: "Витаминный",
    description: "",
    price: 250,
    category: "салаты",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "68",
    name: "Винегрет",
    description: "",
    price: 300,
    category: "салаты",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "69",
    name: "Летний",
    description: "",
    price: 330,
    category: "салаты",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "70",
    name: "Диоскурия",
    description: "",
    price: 430,
    category: "салаты",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "71",
    name: "Греческий",
    description: "",
    price: 470,
    category: "салаты",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "72",
    name: "Крабовый",
    description: "",
    price: 380,
    category: "салаты",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "73",
    name: "Цезарь с креветками",
    description: "",
    price: 580,
    category: "салаты",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "74",
    name: "Цезарь с курицей",
    description: "",
    price: 480,
    category: "салаты",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "75",
    name: "Гранатовый браслет",
    description: "",
    price: 530,
    category: "салаты",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "76",
    name: "Горячая любовь",
    description: "",
    price: 400,
    category: "салаты",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "77",
    name: "Оливье",
    description: "",
    price: 420,
    category: "салаты",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "78",
    name: "Французский",
    description: "",
    price: 470,
    category: "салаты",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "79",
    name: "Английский",
    description: "",
    price: 470,
    category: "салаты",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "80",
    name: "Лодочка с яйцом",
    description: "",
    price: 380,
    category: "выпечка",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "81",
    name: "Лаваш из печи",
    description: "",
    price: 150,
    category: "выпечка",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "82",
    name: "Хачапур",
    description: "",
    price: 600,
    category: "выпечка",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "83",
    name: "Гебжалия",
    description: "Сулугуни,мята,сливочный соус",
    price: 550,
    category: "национальная-кухня",
    unit: "ГРАММ",
    quantity: "250"
  },
  {
    id: "84",
    name: "Сыр сулугуни (копчёный)",
    description: "",
    price: 370,
    category: "национальная-кухня",
    unit: "ГРАММ",
    quantity: "150"
  },
  {
    id: "85",
    name: "Сыр сулугуни (жареный)",
    description: "",
    price: 370,
    category: "национальная-кухня",
    unit: "ГРАММ",
    quantity: "150"
  },
  {
    id: "86",
    name: "Мацони по-домашнему",
    description: "",
    price: 320,
    category: "национальная-кухня",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "87",
    name: "Свинина копчёная",
    description: "",
    price: 200,
    category: "национальная-кухня",
    unit: "ГРАММ",
    quantity: "100"
  },
  {
    id: "88",
    name: "Соленье по-домашнему",
    description: "",
    price: 350,
    category: "национальная-кухня",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "89",
    name: "Мамалыга",
    description: "",
    price: 150,
    category: "национальная-кухня",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "90",
    name: "Мамалыга с сыром",
    description: "",
    price: 230,
    category: "национальная-кухня",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "91",
    name: "Фасоль (акуд)",
    description: "",
    price: 300,
    category: "национальная-кухня",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "92",
    name: "Ачапа",
    description: "",
    price: 370,
    category: "национальная-кухня",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "93",
    name: "Баклажан жареный с орехом",
    description: "",
    price: 380,
    category: "национальная-кухня",
    unit: "ШТУКА",
    quantity: "3"
  },
  {
    id: "94",
    name: "Перец жареный с орехом",
    description: "",
    price: 380,
    category: "национальная-кухня",
    unit: "ШТУКА",
    quantity: "3"
  },
  {
    id: "95",
    name: "Солянка по-кавказски",
    description: "",
    price: 480,
    category: "национальная-кухня",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "96",
    name: "Язык ягнёнка по-абхазски",
    description: "",
    price: 500,
    category: "национальная-кухня",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "97",
    name: "Мясо по-абхазски",
    description: "",
    price: 450,
    category: "национальная-кухня",
    unit: "ГРАММ",
    quantity: "250"
  },
  {
    id: "98",
    name: "Форель с овощами (запечённые в фольге)",
    description: "",
    price: 330,
    category: "мангал",
    unit: "ГРАММ",
    quantity: "100"
  },
  {
    id: "99",
    name: "Копчёное крыло",
    description: "",
    price: 450,
    category: "мангал",
    unit: "ШТУКА",
    quantity: "3"
  },
  {
    id: "100",
    name: "Сердце индюшки",
    description: "",
    price: 450,
    category: "мангал",
    unit: "ШТУКА",
    quantity: "6"
  },
  {
    id: "101",
    name: "Креветки королевкские",
    description: "",
    price: 850,
    category: "мангал",
    unit: "ГРАММ",
    quantity: "200"
  },
  {
    id: "102",
    name: "Картофель",
    description: "",
    price: 300,
    category: "мангал",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "103",
    name: "Овощи",
    description: "Баклажан,перец,помидор",
    price: 350,
    category: "мангал",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "104",
    name: "Грибы шампиньоны",
    description: "",
    price: 370,
    category: "мангал",
    unit: "ГРАММ",
    quantity: "250"
  },
  {
    id: "105",
    name: "Люля-кебаб (курица)",
    description: "",
    price: 400,
    category: "мангал",
    unit: "ШТУКА",
    quantity: "2"
  },
  {
    id: "106",
    name: "Люля-кебаб (говядина)",
    description: "",
    price: 450,
    category: "мангал",
    unit: "ШТУКА",
    quantity: "2"
  },
  {
    id: "107",
    name: "Люля-кебаб (баранина)",
    description: "",
    price: 500,
    category: "мангал",
    unit: "ШТУКА",
    quantity: "2"
  },
  {
    id: "108",
    name: "Сёмга",
    description: "",
    price: 380,
    category: "мангал",
    unit: "ГРАММ",
    quantity: "100"
  },
  {
    id: "109",
    name: "Форель",
    description: "",
    price: 270,
    category: "мангал",
    unit: "ГРАММ",
    quantity: "100"
  },
  {
    id: "110",
    name: "Перепёлка",
    description: "",
    price: 350,
    category: "мангал",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "111",
    name: "Шашлык (куриный)",
    description: "",
    price: 160,
    category: "мангал",
    unit: "ГРАММ",
    quantity: "100"
  },
  {
    id: "112",
    name: "Шашлык (язык ягнёнка)",
    description: "",
    price: 730,
    category: "мангал",
    unit: "ШТУКА",
    quantity: "3"
  },
  {
    id: "113",
    name: "Шашлык (каре ягнёнка)",
    description: "",
    price: 430,
    category: "мангал",
    unit: "ГРАММ",
    quantity: "100"
  },
  {
    id: "114",
    name: "Шашлык (баранина)",
    description: "",
    price: 330,
    category: "мангал",
    unit: "ГРАММ",
    quantity: "100"
  },
  {
    id: "115",
    name: "Шашлык (корейка свиная)",
    description: "",
    price: 240,
    category: "мангал",
    unit: "ГРАММ",
    quantity: "100"
  },
  {
    id: "116",
    name: "Шашлык (свинина)",
    description: "",
    price: 180,
    category: "мангал",
    unit: "ГРАММ",
    quantity: "100"
  },
  {
    id: "117",
    name: "Шашлык свинина с рёбрами",
    description: "",
    price: 240,
    category: "мангал",
    unit: "ГРАММ",
    quantity: "100"
  },
  {
    id: "118",
    name: "Паста с курицей и грибами",
    description: "Спагетти,курица,грибы,сливки,пармезан",
    price: 580,
    category: "пасты",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "119",
    name: "Паста с креветками в сливочно-икорном соусе",
    description: "Спагетти,креветки,икра летучей рыбы,сливки,пармезан",
    price: 780,
    category: "пасты",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "120",
    name: "Карбонара",
    description: "Спагетти,бекон,пармезан,сливки",
    price: 530,
    category: "пасты",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "121",
    name: "Картофель по-деревенски",
    description: "",
    price: 350,
    category: "гарниры",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "122",
    name: "Картофель фри",
    description: "",
    price: 300,
    category: "гарниры",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "123",
    name: "Лодочка с копчёным мясом и яйцом",
    description: "",
    price: 500,
    category: "мучное-изделие",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "124",
    name: "Лодочка пепперони",
    description: "",
    price: 500,
    category: "мучное-изделие",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "125",
    name: "Хачапур \"ачма\"",
    description: "",
    price: 360,
    category: "мучное-изделие",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "126",
    name: "Мама хинкаль (баранина)",
    description: "",
    price: 850,
    category: "мучное-изделие",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "127",
    name: "Мама хинкаль (говядина)",
    description: "",
    price: 750,
    category: "мучное-изделие",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "128",
    name: "Маслины/оливки",
    description: "",
    price: 250,
    category: "холодные-закуски",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "129",
    name: "Зелень",
    description: "",
    price: 250,
    category: "холодные-закуски",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "130",
    name: "Сыры кавказа",
    description: "Сулугуни,сулугуни копчёный с мятой,чечель,мёд",
    price: 800,
    category: "холодные-закуски",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "131",
    name: "Сырная нарезка",
    description: "",
    price: 1200,
    category: "холодные-закуски",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "132",
    name: "Лимонная нарезка",
    description: "",
    price: 100,
    category: "холодные-закуски",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "133",
    name: "Овощная нарезка",
    description: "",
    price: 450,
    category: "холодные-закуски",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "134",
    name: "Горчица",
    description: "",
    price: 50,
    category: "соусы",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "135",
    name: "Кетчуп",
    description: "",
    price: 50,
    category: "соусы"
  },
  {
    id: "136",
    name: "Мёд",
    description: "",
    price: 100,
    category: "соусы",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "137",
    name: "Сырный",
    description: "",
    price: 100,
    category: "соусы",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "138",
    name: "Ореховый",
    description: "",
    price: 150,
    category: "соусы",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "139",
    name: "Мацони с чесноком",
    description: "",
    price: 150,
    category: "соусы",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "140",
    name: "Наршараб",
    description: "Гранатовый соус",
    price: 150,
    category: "соусы",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "141",
    name: "Сметана",
    description: "",
    price: 150,
    category: "соусы",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "142",
    name: "Томатный",
    description: "",
    price: 150,
    category: "соусы",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "143",
    name: "Алычовый",
    description: "",
    price: 150,
    category: "соусы",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "144",
    name: "Белый соус",
    description: "Сметана,майонез,чеснок,укроп",
    price: 150,
    category: "соусы",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "145",
    name: "Сборная",
    description: "Ветчина,помидоры,болгарский перец,маслины,грибы,сыр,соус",
    price: 580,
    category: "пицца",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "146",
    name: "Маргарита",
    description: "Помидоры,сыр,соус",
    price: 480,
    category: "пицца",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "147",
    name: "Пепперони",
    description: "Колбаса пепперони,сыр,соус",
    price: 550,
    category: "пицца",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "148",
    name: "Смузи",
    description: "",
    price: 300,
    category: "напитки-и-десертные-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "149",
    name: "Голубая лагуна (Алкогольная)",
    description: "",
    price: 400,
    category: "напитки-и-десертные-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "150",
    name: "Голубая лагуна",
    description: "",
    price: 350,
    category: "напитки-и-десертные-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "151",
    name: "Холодный чай",
    description: "С лимоном и мятой",
    price: 350,
    category: "напитки-и-десертные-блюда",
    unit: "ЛИТР",
    quantity: "1"
  },
  {
    id: "152",
    name: "Домашние лимонады",
    description: "",
    price: 450,
    category: "напитки-и-десертные-блюда",
    unit: "ЛИТР",
    quantity: "1"
  },
  {
    id: "153",
    name: "Пахлава",
    description: "",
    price: 250,
    category: "напитки-и-десертные-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "154",
    name: "Медовик",
    description: "",
    price: 300,
    category: "напитки-и-десертные-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "155",
    name: "Панчо",
    description: "",
    price: 200,
    category: "напитки-и-десертные-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "156",
    name: "Мохито (Алкогольный)",
    description: "",
    price: 400,
    category: "напитки-и-десертные-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "157",
    name: "Мохито",
    description: "",
    price: 350,
    category: "напитки-и-десертные-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "158",
    name: "Мохито клубничный",
    description: "",
    price: 400,
    category: "напитки-и-десертные-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "159",
    name: "Шоколадная плитка",
    description: "",
    price: 150,
    category: "напитки-и-десертные-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "160",
    name: "Мороженое (3 шара)",
    description: "",
    price: 400,
    category: "напитки-и-десертные-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "161",
    name: "Молочный коктейль",
    description: "",
    price: 300,
    category: "напитки-и-десертные-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "162",
    name: "Кола(пластик)",
    description: "",
    price: 150,
    category: "напитки-и-десертные-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "163",
    name: "Кола (стекло)",
    description: "",
    price: 200,
    category: "напитки-и-десертные-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "164",
    name: "Кола (ж/б)",
    description: "",
    price: 150,
    category: "напитки-и-десертные-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "165",
    name: "Гляссе",
    description: "",
    price: 250,
    category: "напитки-и-десертные-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "166",
    name: "Сливки",
    description: "",
    price: 50,
    category: "напитки-и-десертные-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "167",
    name: "Кофе по-восточному",
    description: "",
    price: 100,
    category: "напитки-и-десертные-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "168",
    name: "Кисель",
    description: "",
    price: 50,
    category: "напитки-и-десертные-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "169",
    name: "Какао",
    description: "",
    price: 100,
    category: "напитки-и-десертные-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "170",
    name: "Чай",
    description: "",
    price: 100,
    category: "напитки-и-десертные-блюда",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "171",
    name: "Сок добрый в ассортименте",
    description: "",
    price: 250,
    category: "напитки-и-десертные-блюда",
    unit: "ЛИТР",
    quantity: "1"
  },
  {
    id: "172",
    name: "Сок мандариновый (Натуральный)",
    description: "",
    price: 450,
    category: "напитки-и-десертные-блюда",
    unit: "ЛИТР",
    quantity: "1"
  },
  {
    id: "173",
    name: "Компот домашний",
    description: "",
    price: 350,
    category: "напитки-и-десертные-блюда",
    unit: "ЛИТР",
    quantity: "1"
  },
  {
    id: "174",
    name: "Лимонад абхазский в ассортименте",
    description: "",
    price: 150,
    category: "напитки-и-десертные-блюда",
    unit: "ЛИТР",
    quantity: "0.5"
  },
  {
    id: "175",
    name: "Минеральная вода",
    description: "",
    price: 150,
    category: "напитки-и-десертные-блюда",
    unit: "ЛИТР",
    quantity: "0.5"
  },
  {
    id: "176",
    name: "Вода",
    description: "",
    price: 150,
    category: "напитки-и-десертные-блюда",
    unit: "ЛИТР",
    quantity: "0.5"
  },
  {
    id: "177",
    name: "Абрикосовая чача",
    description: "",
    price: 2000,
    category: "алкогольные-напитки",
    unit: "ЛИТР",
    quantity: "1"
  },
  {
    id: "178",
    name: "Пиво \"Ассир\"",
    description: "",
    price: 150,
    category: "алкогольные-напитки",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "179",
    name: "Пиво \"Пицунда\"",
    description: "",
    price: 150,
    category: "алкогольные-напитки",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "180",
    name: "Пиво \"Сухумское\"",
    description: "",
    price: 150,
    category: "алкогольные-напитки",
    unit: "ШТУКА",
    quantity: "1"
  },
  {
    id: "181",
    name: "Шампанское в ассортименте",
    description: "",
    price: 600,
    category: "алкогольные-напитки",
    unit: "ЛИТР",
    quantity: "0.75"
  },
  {
    id: "182",
    name: "Шампанское \"Абхазия\"",
    description: "",
    price: 700,
    category: "алкогольные-напитки",
    unit: "ЛИТР",
    quantity: "0.75"
  },
  {
    id: "183",
    name: "Вина абхазские в ассортименте",
    description: "",
    price: 750,
    category: "алкогольные-напитки",
    unit: "ЛИТР",
    quantity: "0.75"
  },
  {
    id: "184",
    name: "Коньяк \"Абхазия\"",
    description: "",
    price: 1500,
    category: "алкогольные-напитки",
    unit: "ЛИТР",
    quantity: "0.5"
  },
  {
    id: "185",
    name: "Водка абхазская",
    description: "",
    price: 600,
    category: "алкогольные-напитки",
    unit: "ЛИТР",
    quantity: "0.5"
  },
  {
    id: "186",
    name: "Водка в ассортименте",
    description: "",
    price: 1000,
    category: "алкогольные-напитки",
    unit: "ЛИТР",
    quantity: "0.5"
  },
  {
    id: "187",
    name: "Вино домашнее",
    description: "",
    price: 700,
    category: "алкогольные-напитки",
    unit: "ЛИТР",
    quantity: "1"
  },
  {
    id: "188",
    name: "Чача домашняя",
    description: "",
    price: 1500,
    category: "алкогольные-напитки",
    unit: "ЛИТР",
    quantity: "1"
  },
  {
    id: "189",
    name: "Коньяк домашний",
    description: "",
    price: 1500,
    category: "алкогольные-напитки",
    unit: "ЛИТР",
    quantity: "1"
  }
];

export default function Menu() {
  const { addToCart } = useCart();

  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "Все блюда", icon: "fas fa-utensils" },
    { id: "завтраки", name: "Завтраки", icon: "fas fa-egg" },
    { id: "первые-блюда", name: "Первые блюда", icon: "fas fa-utensils" },
    { id: "вторые-блюда", name: "Вторые блюда", icon: "fas fa-utensils" },
    { id: "армянская-кухня", name: "Армянская кухня", icon: "fas fa-utensils" },
    { id: "блюда-из-рыбы", name: "Блюда из рыбы", icon: "fas fa-fish" },
    { id: "салаты", name: "Салаты", icon: "fas fa-seedling" },
    { id: "выпечка", name: "Выпечка", icon: "fas fa-utensils" },
    { id: "национальная-кухня", name: "Национальная кухня", icon: "fas fa-utensils" },
    { id: "мангал", name: "Мангал", icon: "fas fa-fire" },
    { id: "пасты", name: "Пасты", icon: "fas fa-utensils" },
    { id: "гарниры", name: "Гарниры", icon: "fas fa-utensils" },
    { id: "мучное-изделие", name: "Мучное изделие", icon: "fas fa-utensils" },
    { id: "холодные-закуски", name: "Холодные закуски", icon: "fas fa-utensils" },
    { id: "соусы", name: "Соусы", icon: "fas fa-utensils" },
    { id: "пицца", name: "Пицца", icon: "fas fa-pizza-slice" },
    { id: "напитки-и-десертные-блюда", name: "Напитки и десертные блюда", icon: "fas fa-coffee" },
    { id: "алкогольные-напитки", name: "Алкогольные напитки", icon: "fas fa-coffee" }
  ];

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const formatQtyUnit = (quantity?: string, unit?: string) => {
    if (!quantity && !unit) return "";
    const normalize = (u?: string) => {
      if (!u) return "";
      const U = u.toString().trim().toUpperCase();
      const map: Record<string, string> = {
        "ШТУКА": "шт.",
        "ШТ": "шт.",
        "ЛИТР": "л",
        "Л": "л",
        "МИЛЛИЛИТР": "мл",
        "МИЛЛИ ЛИТР": "мл",
        "МЛ": "мл",
        "КИЛОГРАММ": "кг",
        "КГ": "кг",
        "ГРАММ": "г",
        "Г": "г",
        "ПОРЦИЯ": "порц.",
        "ПОРЦ": "порц."
      };
      return map[U] || u.toLowerCase();
    };
    const q = (quantity || "").toString().trim();
    const u = normalize(unit);
    if (q && u) return `${q} ${u}`;
    return q || u;
  };

  const handleOrder = (item: MenuItem) => {
    const message = `Здравствуйте! Хочу заказать: ${item.name}${formatQtyUnit(item.quantity, item.unit) ? ` (${formatQtyUnit(item.quantity, item.unit)})` : ""} - ${item.price}₽`;
    const whatsappUrl = `https://wa.me/79407760141?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-cafe-cornsilk to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cafe-brown mb-6">
              Наше меню
            </h2>
            <div className="w-24 h-1 bg-cafe-chocolate mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Откройте для себя богатство вкусов грузинской и кавказской кухни. 
              Каждое блюдо готовится с любовью из свежих местных продуктов.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? "bg-cafe-brown text-white shadow-lg transform scale-105"
                    : "bg-white text-cafe-brown hover:bg-cafe-brown hover:text-white shadow-md"
                }`}
              >
                <i className={`${category.icon} text-sm`}></i>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-serif font-semibold text-cafe-brown mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-cafe-chocolate">{item.price}₽</span>
                    {formatQtyUnit(item.quantity, item.unit) && (
                      <span className="text-sm text-gray-500">{formatQtyUnit(item.quantity, item.unit)}</span>
                    )}
                  </div>
                  <button 
                    onClick={() => handleOrder(item)}
                    className="bg-cafe-brown text-white px-4 py-2 rounded-lg hover:bg-cafe-chocolate transition-colors duration-200"
                  >
                    <i className="fas fa-plus mr-2"></i>Заказать
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif font-bold text-cafe-brown mb-4">
                Готовы сделать заказ?
              </h3>
              <p className="text-gray-600 mb-6">
                Свяжитесь с нами через WhatsApp для бронирования столика или заказа на вынос
              </p>
              <a 
                href="https://wa.me/79407760141" 
                className="inline-flex items-center bg-cafe-brown text-white px-8 py-4 rounded-lg font-medium hover:bg-cafe-chocolate transition-colors duration-200 text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp mr-3 text-xl"></i>
                Связаться с нами
              </a>
            </div>
          </div>
        </div>
      
{/* Добавлено: кнопка В корзину */}
<button onClick={() => addToCart({ id: Date.now(), name: 'Блюдо (пример)', price: 0 }, 1); }} className="mt-2 px-3 py-2 rounded bg-black text-white">В корзину</button>
</div>
    </section>
  );
}