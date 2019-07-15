const DATA = [{
    year: '1642',
    title: 'Blas Pascal',
    text: `construyó la Pascalina, que sólo realiza sumas
            y restas.Su diseño se utilizó en las
            calculadoras mecánicas de los años sesenta,
            que se volvieron obsoletas al seguir las calculadoras electrónicas `,
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Arts_et_Metiers_Pascaline_dsc03869.jpg'
  },
  {
    year: '1822',
    title: 'Charles Babbage',
    text: `Creó la Máquina diferencial que calculaba
            tablas matemáticas impulsada con vapor, no fue terminada porque se
            cortó el presupuesto en 1842; tenía dos metros de alto, tres de
            longitud y 4 000 partes, pesaba 3 toneladas. En 1833, construyó la
            Máquina analítica, que incluía una unidad de almacenamiento +, -,
            *, en 60 operaciones por minuto. Era impulsada por una locomotora
            y ocupaba un campo de fútbol.`,
    image: 'http://www.hdfondos.eu/pictures/2012/1027/1/computers-history-marcin-wichary-difference-engine-wallpaper-192826.jpg'
  },
  {
    year: '1835',
    title: 'Lady Ada Augusta Lovelace',
    text: `Colabora con Babbage en
            sus investigaciones. Fue hija de Lord Byron y es considerada la
            primera mujer programadora en tarjetas perforadas.`,
    image: 'https://i.blogs.es/9a43ad/adaap/450_1000.jpg'
  },
  {
    year: '1887',
    title: 'Herman Hollerith',
    text: `Diseñó la Máquina tabuladora, que
            funcionaba con tarjetas perforadas, acumulaba y clasificaba la
            información. Se utilizó para el censo de 1890, el cual le reditúo 40
            000 dólares y al gobierno de Estados Unidos le ahorró 5 millones de
            dólares. En 1896, Herman fundó la Tabuilating Machine Company, que
            se fusionó en 1911 con otras para crear Computing-Tabulating-
            Recording Company. En 1924, el director general, Thomas J. Watson,
            cambió su nombre a International Bussines Machines Corporation
            (IBM).`,  
    image: 'http://www.tankonyvtar.hu/hu/tartalom/tamop425/0005_29_informaciotortenelem_scorm_11/n_29-11-2_hollerith_census_machine.jpg'
  },
  {
    year: '1941',
    title: 'Konrad Zuse',
    text: `Construyó la primera computadora programable
            Z3,  que resolvía ecuaciones complejas de ingeniería, era controlada
            por tarjetas perforadas y fue la primera que operó con el sistema
            binario.`,
    image: 'https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/5685343/z3.jpg'
  },
  {
    year: '1942',
    title: 'Atanasoff y Berry',
    text: `El doctor Atanasoff, catedrático
            de  la Universidad  Estatal de  Iowa,  desarrolló  la primera
            computadora digital electrónica.
            Llamó a su invento la computadora Atanasoff-Berry, o solo ABC
            (Atanasoff Berry Computer). Un estudiante graduado, Clifford Berry,
            fue una útil ayuda en la construcción de la computadora ABC.`,
    image: 'http://images.computerhistory.org/revonline/images/500002003p-03-01.jpg?w=600'
  },
  {
    year: '1944',
    title: 'Howard Aiken',
    text: `Supervisó el diseño de la MARK I, 1a primera
            computadora electromecánica, de 17 metros de ancho y tres de alto.
            Un adelanto significativo, se construyó con el patrocinio de la IBM
            en la Universidad de Harvard. En lo fundamental, se trataba de una
            serie de calculadoras electromecánicas. En muchos aspectos, similar
            a la máquina analítica de Babbage.`,
    image: 'https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzVkMjVkOTk0YjdiZTE3MzkwNl9leGhpYml0X3Bob3RvMS5qcGciXSxbInAiLCJ0aHVtYiIsIngzOTA-Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdXQ'
  },
  {
    year: '1946',
    title: 'Mauchly y Eckert',
    text: `La ENIAC, construida para
            aplicaciones de la Segunda Guerra mundial, se terminó en 30 meses
            por un equipo de científicos que trabajaban bajo reloj. La ENIAC,
            mil veces más veloz que sus predecesoras electromecánicas, irrumpió
            como un importante descubrimiento en la tecnología de la
            computación. Pesaba 30 toneladas, ocupaba un espacio de 450 metros
            cuadrados, llenaba un cuarto de 6 x 12 metros y contenía 18 000
            bulbos, tenía que programarse manualmente conectándola a 3 tableros
            que contenían más de 6 000 interruptores.`,
    image: 'https://www.poblanerias.com/wp-content/archivos/2018/02/Eniac3.jpg'
  },
  {
    year: '1945',
    title: 'John von Neumann',
    text: `Trabajado con Eckert y Mauchly
            en la Universidad de Pennsylvania, publicó un artículo acerca del
            almacenamiento de programas. El concepto de programa almacenado
            permitió la lectura de un programa dentro de la memoria de la
            computadora y después la ejecución de las instrucciones del mismo
            sin tener que volverlas a escribir. La primera computadora en usar
            el citado concepto fue la llamada EDVAC (Eletronic Discrete-Variable
            Automatic Computer, es decir, Computadora automática electrónica de
            variable discreta), desarrollada por von Neumann, Eckert y Mauchly.
            Los programas almacenados dieron a las computadoras una flexibilidad
            y confiabilidad tremendas, haciéndolas más rápidas y menos sujetas a
            errores que los programas mecánicos.`,
    image: 'https://www.researchgate.net/profile/Jorge_H/publication/316559100/figure/fig3/AS:488508545605633@1493480921245/John-von-Neumann-y-la-EDVAC.png'
  },
  {
    year: '1962',
    title: 'IBM 650',
    text: `Fue hasta que ocurrió el éxito de la UNIVAC1 cuando la
            IBM se decidió a desarrollar y comercializar computadoras. La IBM
            650 se diseñó como una actualización lógica de las máquinas de
            tarjetas perforadas. La gerencia de IBM superó las ventas calculadas
            de 50 unidades –número mayor que el total de las computadoras
            instaladas en los Estados Unidos en aquel entonces–; de hecho,
            vendió 1 000 de ellas. Lo demás es historia.`,
    image: 'https://images.sipse.com/5cMYxLdUjWqmQCz-3bDc11YNnMw=/800x497/smart/imgs/032016/290316414653eb5.jpg'
  }
];

if (document.getElementById('timeline')) {
  let timeline = new Timeline('timeline', DATA);
  timeline.init();
}