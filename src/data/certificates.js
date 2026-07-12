
// Імпорт всіх файлів з папки assets/sert за допомогою Vite/Webpack context або ручного імпорту
// Оскільки ми в React (ймовірно Create React App), спробуємо структурувати дані

const certificatesData = [
  {
    year: 2026,
    items: [
      { id: 1, title: 'Сертифікат 2026', file: '06-2026.pdf', type: 'pdf' },
      { id: 2, title: 'Грамота 2026', file: 'document.pdf', type: 'pdf' },
      { id: 3, title: 'Подяка', file: 'document.png', type: 'image' },
    ]
  },
  {
    year: 2025,
    items: [
      { id: 4, title: '3D Моделювання', file: '3d.pdf', type: 'pdf' },
      { id: 5, title: 'Робототехніка-2', file: '2.pdf', type: 'pdf' },
      { id: 6, title: 'Цифрова грамотність', file: 'document.png', type: 'image' },
      { id: 7, title: 'Вебінар - Екосистема', file: 'kfoo4wjysvc95fjmpm_djpamouxwa8lv-1622888717.png', type: 'image' },
      { id: 8, title: 'Сертифікат mpdf', file: 'mpdf.pdf', type: 'pdf' },
    ]
  },
  {
    year: 2024,
    items: [
      { id: 9, title: 'Інформатика та штучний інтелект', file: 'document.pdf', type: 'pdf' },
      { id: 10, title: 'Сертифікат 31052', file: '31052-6824_6849-24.pdf', type: 'pdf' },
      { id: 11, title: 'Освітній інтенсив', file: '_-_.pdf', type: 'pdf' },
    ]
  },
  {
    year: 2023,
    items: [
      { id: 12, title: 'Python програмування', file: 'python.pdf', type: 'pdf' },
      { id: 13, title: 'Сертифікат 1698', file: '1698-1.jpg', type: 'image' },
      { id: 14, title: 'Цифрові навички', file: '8r9gj1kg0.png', type: 'image' },
      { id: 15, title: 'Професійний розвиток', file: 'eef-eef-033-_.pdf', type: 'pdf' },
    ]
  },
  {
    year: 2022,
    items: [
      { id: 16, title: 'Сертифікат AA-8524', file: 'aa-8524.pdf', type: 'pdf' },
      { id: 17, title: 'Сертифікат AA-8622', file: 'aa-8622.pdf', type: 'pdf' },
    ]
  },
  {
    year: 2021,
    items: [
      { id: 18, title: 'Front End Development', file: '05102021-front-end.jpg', type: 'image' },
      { id: 19, title: 'Методика навчання', file: '13052021.jpg', type: 'image' },
    ]
  },
  {
    year: 2020,
    items: [
      { id: 20, title: 'Сертифікат 1100', file: '1100-3426-3525.png', type: 'image' },
      { id: 21, title: 'Професійна освіта', file: '2.pdf', type: 'pdf' },
    ]
  },
  {
    year: 2019,
    items: [
      { id: 22, title: 'Сертифікат 04082019', file: 'certificate-04082019.pdf', type: 'pdf' },
      { id: 23, title: 'Сертифікат 15082019', file: 'certificate15082019.pdf', type: 'pdf' },
    ]
  },
  {
    year: 2018,
    items: [
      { id: 24, title: 'Сертифікат Roman', file: 'certificate-for-roman.pdf', type: 'pdf' },
      { id: 25, title: 'Навчальний курс', file: '20201109_095728.jpg', type: 'image' },
    ]
  },
  {
    year: 2017,
    items: [
      { id: 26, title: 'Certificate for ROMAN (1)', file: 'certificate-for-roman-1.pdf', type: 'pdf' },
      { id: 27, title: 'Certificate of Attendance', file: 'certificate-of-attendance-for-roman.pdf', type: 'pdf' },
    ]
  }
];

export default certificatesData;
