
const competitionsData = {
  informatics: [
    {
      year: "2024/2025",
      level: "район",
      winners: [
        { name: "Гориславець Юрій Ярославович", grade: "11-А", place: "2", text: "2 місце" },
        { name: "Чупа Андрій Олегович", grade: "10-А", place: "1", text: "1 місце" }
      ]
    },
    {
      year: "2024/2025",
      level: "ОТГ",
      winners: [
        { name: "Гориславець Юрій Ярославович", grade: "11-А", place: "2", text: "2 місце" },
        { name: "Чупа Андрій Олегович", grade: "10-А", place: "1", text: "1 місце" },
        { name: "Зьола Максим Ярославович", grade: "8-Б", place: "3", text: "3 місце" }
      ]
    },
    {
      year: "2023/2024",
      level: "Область",
      winners: [
        { name: "Чупа Андрій", grade: "9г", place: "3", text: "3 місце" }
      ]
    },
    {
      year: "2023/2024",
      level: "Район",
      winners: [
        { name: "Чупа Андрій", grade: "9г", place: "1", text: "1 місце" }
      ]
    },
    {
      year: "2023/2024",
      level: "ОТГ",
      winners: [
        { name: "Чупа Андрій", grade: "9г", place: "1", text: "1 місце" },
        { name: "Любченко Арсен", grade: "10б", place: "3", text: "3 місце" }
      ]
    },
    {
      year: "2019/2020",
      winners: [
        { name: "Чупа Орест", grade: "8-В", place: "2", text: "ІІ місце" }
      ]
    },
    {
      year: "2018/2019",
      winners: [
        { name: "Шустов Артем", grade: "9-Б", place: "3", text: "ІІІ місце" }
      ]
    },
    {
      year: "2017/2018",
      winners: [
        { name: "Панчак Остап", grade: "11-А", place: "2", text: "ІІ місце" },
        { name: "Хлопик Микола", grade: "9-Б", place: "2", text: "ІІ місце" }
      ]
    },
    {
      year: "2016/2017",
      winners: [
        { name: "Панчак Остап", grade: "10-А", place: "2", text: "ІІ місце" },
        { name: "Білоган Олег", grade: "9-Б", place: "3", text: "ІІІ місце" }
      ]
    },
    {
      year: "2015/2016",
      winners: [
        { name: "Панчак Остап", grade: "9-В", place: "3", text: "ІІІ місце" },
        { name: "Лобський Назар", grade: "9-Б", place: "3", text: "ІІІ місце" },
        { name: "Шабаліна Анна", grade: "7-Б", place: "3", text: "ІІІ місце" },
        { name: "Хлопик Микола", grade: "7-Б", place: "3", text: "ІІІ місце" }
      ]
    },
    {
      year: "2014/2015",
      winners: [
        { name: "Панчак Остап", grade: "8-В", place: "2", text: "2 місце" },
        { name: "Кокоєйко Вікторія", grade: "9-Б", place: "1", text: "1 місце" }
      ]
    },
    {
      year: "2013/2014",
      winners: [
        { name: "Панчак Остап", grade: "7-В", place: "1", text: "1 місце" },
        { name: "Хащівський Віктор", grade: "8-А", place: "1", text: "1 місце" },
        { name: "Лагуш Олег", grade: "9-В", place: "2", text: "2 місце" },
        { name: "Думало Вероніка", grade: "10-Б", place: "3", text: "3 місце" }
      ]
    },
    {
      year: "2012/2013",
      winners: [
        { name: "Лагуш Олег", grade: "8-В", place: "3", text: "3 місце" }
      ]
    },
    {
      year: "2011/2012",
      winners: [
        { name: "Качмар Іванна", grade: "9-Г", place: "2", text: "2 місце" },
        { name: "Семеген Андріан", grade: "10-Б", place: "3", text: "3 місце" }
      ]
    }
  ],
  it: [
    {
      year: "2024/2025",
      level: "район",
      winners: [
        { name: "Стебівка Рафаїл Іванович", grade: "10-Б", place: "1", text: "1 місце" }
      ]
    },
    {
      year: "2024/2025",
      level: "ОТГ",
      winners: [
        { name: "Зьола Максим Ярославович", grade: "8-Б", place: "1", text: "1 місце" },
        { name: "Стебівка Рафаїл Іванович", grade: "10-Б", place: "2", text: "2 місце" },
        { name: "Гориславець Юрій Ярославович", grade: "11-А", place: "2", text: "2 місце" }
      ]
    },
    {
      year: "2023/2024",
      level: "район",
      winners: [
        { name: "Бондар Олег", grade: "11-А", place: "3", text: "ІІІ місце" }
      ]
    },
    {
      year: "2023/2024",
      level: "ОТГ",
      winners: [
        { name: "Багній Ростислав", grade: "10-Б", place: "3", text: "ІІІ місце" },
        { name: "Бондар Олег", grade: "11-А", place: "1", text: "І місце" }
      ]
    },
    {
      year: "2019/2020",
      winners: [
        { name: "Шустова Валерія", grade: "9-Б", place: "3", text: "ІІІ місце" },
        { name: "Чупа Орест", grade: "8-В", place: "3", text: "ІІІ місце" }
      ]
    },
    {
      year: "2018/2019",
      winners: [
        { name: "Шабаліна Анна", grade: "10-Б", place: "3", text: "ІІІ місце" },
        { name: "Шустов Артем", grade: "9-Б", place: "2", text: "ІІ місце" },
        { name: "Диндин Олег", grade: "8-Б", place: "3", text: "ІІІ місце" }
      ]
    },
    {
      year: "2017/2018",
      winners: [
        { name: "Шабаліна Анна", grade: "9-Б", place: "2", text: "ІІ місце" },
        { name: "Шустов Артем", grade: "8-Б", place: "3", text: "ІІІ місце" }
      ]
    },
    {
      year: "2016/2017",
      winners: [
        { name: "Шабаліна Анна", grade: "8-Б", place: "3", text: "ІІІ місце" },
        { name: "Борисюк Жанна", grade: "8-Б", place: "3", text: "ІІІ місце" },
        { name: "Джелялова Нуріє", grade: "9-Б", place: "3", text: "ІІІ місце" },
        { name: "Лобський Назар", grade: "10-Б", place: "3", text: "ІІІ місце" }
      ]
    },
    {
      year: "2015/2016",
      winners: [
        { name: "Михайлюк Софія", grade: "9-Б", place: "2", text: "ІІ місце" }
      ]
    },
    {
      year: "2014/2015",
      winners: [
        { name: "Думало Вероніка", grade: "11-Б", place: "2", text: "2 місце" },
        { name: "Зубрицький Маркіян", grade: "10-Б", place: "3", text: "3 місце" }
      ]
    },
    {
      year: "2013/2014",
      winners: [
        { name: "Хащівський Віктор", grade: "8-А", place: "3", text: "3 місце" },
        { name: "Зубрицький Маркіян", grade: "9-В", place: "3", text: "3 місце" },
        { name: "Думало Вероніка", grade: "10-Б", place: "3", text: "3 місце" }
      ]
    },
    {
      year: "2012/2013",
      winners: [
        { name: "Семеген Андріан", grade: "11-Б", place: "3", text: "3 місце" },
        { name: "Качмар Іванна", grade: "10-Б", place: "3", text: "3 місце" },
        { name: "Петрайко Назар", grade: "9-В", place: "3", text: "3 місце" }
      ]
    }
  ]
};

export default competitionsData;
