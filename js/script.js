$(document).ready(function () {
  $('.a2').on('mouseover', function () {
    $('a.a1').removeClass('king'),
      $('a.a2').addClass('king');
  });

  $('.a2').on('mouseout', function () {
    $('a.a1').addClass('king'),
      $('a.a2').removeClass('king');
  });


  $('.a3').on('mouseover', function () {
    $('a.a1').removeClass('king'),
      $('a.a3').addClass('king');
  });

  $('.a3').on('mouseout', function () {
    $('a.a1').addClass('king'),
      $('a.a3').removeClass('king');
  });



  $('.a4').on('mouseover', function () {
    $('a.a1').removeClass('king'),
      $('a.a4').addClass('king');
  });

  $('.a4').on('mouseout', function () {
    $('a.a1').addClass('king'),
      $('a.a4').removeClass('king');
  });



  $('.a5').on('mouseover', function () {
    $('a.a1').removeClass('king'),
      $('a.a5').addClass('king');

    $('.a5').on('mouseout', function () {

      $('a.a1').addClass('king'),
        $('a.a5').removeClass('king');
    });

  });



  $(".header__burger").on('click', function () {
    $('.header__row, .header__burger').toggleClass('active');
  })
  $(".header__menu").on('click', function () {
    $('.header__row, .header__burger').removeClass('active');
  })



  //translation
  let arrLang = {
    'en': {
      //header
      'home': 'Home',
      'about': 'About me',
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'contacts': 'Contacts',
      //preview
      'mySurname': 'Vigovsky',
      'myName': 'Yuri',
      'myAboutMe': 'Web Developer',
      'myYears': '19 years, Odessa',
      //About me
      'aboutTitle': 'About me',
      'aboutP1': " Hi, I'm Yuri - Web Developer from Odessa. I am interested in development and everything connected with it.",
      'aboutP2': 'Completed courses from WAYUP on layout.',
      'aboutP3': 'Ready to implement great projects with great people.',
      //Skills
      'skillsTitle': 'Skills',
      'skillsSubTitle': 'Know these technologies',
      //Portfolio
      'portfolioTitle': 'Portfolio',
      'portfolioWork1': 'BURNING MAN',
      //contacts
      'contactTitle': 'Contacts',
      'contactP1': 'Want to know more or just chat?',
      'contactP2': 'You are welcome!',
      'contactBtn': 'Send message',
      'socialNetworks': 'I am in social networks'

    },
    'ru': {
      //Header
      'home': 'Главная',
      'about': 'О себе',
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'contacts': 'Контакты',
      // Привью
      'mySurname': 'Виговский',
      'myName': 'Юрий',
      'myAboutMe': 'PHP разработчик',
      'myYears': '19 лет, Одесса',
      // О себе
      'aboutTitle': 'О себе',
      'aboutP1': "Привет, я Юрий —  PHP разработчик  из Одессы. Интересуюсь разработкой и всем, что с ним связано.",
      'aboutP2': 'Закончил курсы от Hillel IT School по верстке.',
      'aboutP3': 'Готов реализовать отличные проекты с замечательными людьми.',
      // Навыки 
      'skillsTitle': 'Навыки',
      'skillsSubTitle': 'Знаю эти технологии',
      // Портфолио
      'portfolioTitle': 'Портфолио',
      'portfolioWork1': 'BURNING MAN',
      //Контакты
      'contactTitle': 'Контакты',
      'contactP1': 'Хотите узнать больше или просто общаться?',
      'contactP2': 'Пожалуйста!',
      'contactBtn': 'Отправить сообщение',
      'socialNetworks': 'Я в соц сетях'
    }
  }


  $(function () {
    $('.translate').click(function () {
      var lang = $(this).attr('id');
      $('.lang').each(function (index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });

  $(function () {
    $('.translate').click(function () {
      var lang = $(this).attr('id');
      $('.translate').removeClass('active');
      $(this).addClass('active');
    });
  });


});




