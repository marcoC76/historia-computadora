const DATA = [{
    year: '1971',
    title: '',
    text: `El ingeniero informático Ray Tomlison envía el primer correo
    electrónico.`,
    image: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/7743/production/_88613503_tomlinson_ap.jpg'
  },
  {
    year: '1976',
    title: '',
    text: `La reina Isabel II se convierte en la primera jefa de estado en
    enviar un email.`,
    image: 'https://cdn-3.expansion.mx/dims4/default/f533d81/2147483647/strip/true/crop/1300x1104+0+0/resize/800x679!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F18%2Ff1%2F634e0cce4e73be292bd48cefaf93%2Fkate-middleton.jpg'
  },
  {
    year: '1978',
    title: '',
    text: `Se envía el primer anuncio a través de medios electrónicos en una
    red gubernamental y universitaria.`,
    image: 'http://theappendix.net/images/blog/2013/10/header-spam_banner.jpg'
  },
  {
    year: '1982',
    title: '',
    text: 'Se utiliza por primera vez la palabra email.',
    image: 'https://i0.wp.com/blogthinkbig.com/wp-content/uploads/2017/06/mail-social-media-icon-social.png?resize=610%2C225&ssl=1'
  },
  {
    year: '1982',
    title: '',
    text: `Scott Fahlman inventa el primer “emoticono”.`,
    image: 'https://graffica.info/wp-content/uploads/00_emoticonos_Scott-Fahlman.jpg'
  },
  {
    year: '1997',
    title: '',
    text: `Microsoft compra Hotmail por alrededor de 400 millones de dólares.`,
    image: 'https://contenidos.enter.co/custom/uploads/2017/07/what-is-hotmail-1-1024x768.jpg'
  },
  {
    year: '1998',
    title: '',
    text: `El diccionario Oxford incorpora la palabra “spam” a sus entradas.`,
    image: 'https://mittum.com/wp-content/uploads/2018/10/bandeja-de-spam-1-compressor.jpg'
  },
  {
    year: '2003',
    title: '',
    text: `En un episodio de Los Simpsons, Homer revela su dirección de
    correo electrónico: chunkylover53@aol.com.`,
    image: 'https://cdn.20m.es/img/2008/07/15/847627.jpg'
  },
  {
    year: '2004',
    title: '',
    text: `LOL y otros acrónimos surgidos al calor de internet son incluidos
    en el diccionario Oxford.`,
    image: 'https://3.bp.blogspot.com/-INRSDElizGA/W1TSSfSRviI/AAAAAAAAHn8/89Vh-Hq5OOMpmhBbuf-vM3b8CZJKFHJNACLcBGAs/s1600/LOL%2BLMAO%2BLMFAO.png'
  },
  {
    year: '2007',
    title: '',
    text: `Google lanza Gmail.`,
    image: 'https://3.bp.blogspot.com/-O231QKWcdH0/VGIFcFuWo5I/AAAAAAAAPnE/S3a8H6twUoE/s1600/logo_gmail_color_112in128dp.png'
  },
  {
    year: '2011',
    title: '',
    text: `El libro de estilo de la agencia Associated Press cambia el
    término “e-mail” por “email”.`,
    image: 'https://www.redeszone.net/app/uploads/2017/12/c%C3%A1mara-IP-Edimax-env%C3%ADo-de-notificaciones-utilizando-email.jpg'
  }
];

if (document.getElementById('timeline')) {
  let timeline = new Timeline('timeline', DATA);
  timeline.init();
}