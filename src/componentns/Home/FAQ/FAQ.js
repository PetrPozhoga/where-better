import React from 'react'
import { connect } from 'react-redux'
import DropDown from "../../Layouts/DropDown/DropDown"
import Btn from "../../Layouts/Btn/Btn"
import { changeHomeFaqDropDown, showMoreQuestion } from "../../../store/home/faq/actions"
import styles from './FAQ.module.scss'

const faqAnswer = {
  aboutProject: <div><p>&laquo;Где лучше&raquo; - это бесплатный сервис подключения домашнего интернета и
    телевидения.&nbsp;Наша миссия - предоставить клиентам удобный сервис и бесплатные консультации высокого
    качества.</p>
    <p>Мы сотрудничаем с более чем 300 интернет-провайдерами, это не только федеральные компании, но и региональные
      провайдеры городского масштаба.&nbsp;У нас вы найдете актуальные тарифы по самым выгодным ценам. Мы имеем прямые
      контакты со всеми провайдерами и получаем информацию об акциях и спецпредложениях порой раньше, чем она
      публикуется на сайте самого провайдера. Мы круглосуточно консультируем клиентов и помогаем решить любые
      вопросы.</p>
    <p>Сегодня нашими услугами ежемесячно пользуются 500 000 уникальных посетителей по всей России.</p>
    <p>Подключайте интернет с &laquo;Где лучше&raquo;!</p></div>,
  howToFindOutThatTheProviderHasConnectedTheInternetInMyHouse: <div><p>Наш инновационный поиск найдет для вас всех
    провайдеров, которые имеют возможность подключения
    по
    вашему дому. Просто введите адрес и выберите лучшее предложение.</p></div>,
  howToChooseTheRightProvider: <>
    <p>При выборе провайдера обращайте внимание на 6 основных моментов:</p>
    <ul>
      <li>стоимость абонентской платы;</li>
      <li>скорость доступа в сеть;</li>
      <li>тип подключения интернета;</li>
      <li>необходимое оборудования (роутер/приставка);</li>
      <li>наличие дополнительных услуг;</li>
      <li>отзывы о работе провайдера.</li>
    </ul>
    <p>По всем дополнительным вопросам вы можете проконсультироваться у наших специалистов.</p>
  </>,
  howToChooseTheBestSpeedForHomeInternet: <>
    <p>Хотите выбрать тариф с оптимальной скоростью и не переплачивать? В первую очередь определится для чего вы
      используете интернет дома:</p>
    <ul>
      <li>Если вы читаете новости и сидите в социальных сетях, вам хватит скорости минимального тарифа до 30 Мбит/с.
      </li>
      <li>Хотите использовать интернет для работы, смотреть фильмы в высоком качестве, ваш выбор: скорость до 100
        Мбит/с.
      </li>
      <li>Если же вы отъявленный геймер, рассматривайте варианты 100-500 Мбит/с.</li>
    </ul>
    <p>Подробнее читайте в <a href="https://internet.gde-luchshe.ru/help/optimalnaya-skorost-interneta-dlya-doma"
                              target="_blank" rel="noopener">статье</a> в нашем блоге.</p>
  </>,
  HowToFindTheBestRateForYourISP: <p>Мы собрали самую большую базу предложений интернет-провайдеров. Введите адрес,
    сравните доступные тарифы и подберите самый оптимальный вариант. Выгода больше - заходите в раздел акции
    провайдеров, только актуальные скидки и другие предложения операторов.</p>,
  howToLeaveARequestForConnection: <>
    <p>Оставьте заявку на бесплатное подключение любым удобным способом:</p>
    <ul>
      <li>введите ваш адрес, выберите тарифный план и нажмите &laquo;Подключиться&raquo;;</li>
      <li>закажите бесплатную консультацию на сайте;</li>
      <li>позвоните по телефону <a href="tel: +7 (499) 350-51-52">+7 (499) 350-51-52</a>.</li>
    </ul>
    <p>Подключаем в удобный день и время по согласованию с абонентом.</p>
  </>,
  whatShouldIDoIfThereIsNoInternetProviderAtMyAddress: <p>Перейдите по ссылке и заполните заявку. Наш консультант
    обязательно перезвонит вам и предложит варианты решения.</p>,
  howToWriteAReviewAboutTheProvider: <>
    <p>На сайте Где лучше представлено более 300 000 отзывов реальных пользователей.</p>
    <p>Свой отзыв вы можете оставить на странице провайдера. Помните, положительные отзывы так же важны, как и
      негативные, ваше мнение может помочь в выборе будущим абонентам.</p>
  </>,
  stillHaveQuestions: <>
    <p>У вас остались вопросы или возникли трудности, позвоните нам по номеру <a href="tel: +7 (499) 350-51-52">+7 (499)
      350-51-52</a> или оставьте заявку на консультацию прямо на сайте, наши сотрудники обязательно помогут вам.</p>
    <p>Мы работаем для Вас 24 часа в сутки, 7 дней в неделю!</p>
  </>

}

const FAQ = (props) => {
  const { faqList, windowInnerWidth, faqListMobile, showMoreQuestion } = props
  return (
    <div className={ styles.root }>
      <h1>Частые вопросы</h1>
      <h2>Найдите провайдеров, которые подключают домашний интернет и ТВ по вашему адресу</h2>
      <div>
        <DropDown items={ windowInnerWidth > 700 ? faqList : faqListMobile } isMoreColumn={ windowInnerWidth > 700 }
                  faqAnswer={ faqAnswer }
                  onUpdate={ props.changeHomeFaqDropDown }/>
        { windowInnerWidth <= 700 && faqList.length !== faqListMobile.length ?
          <div className={ styles.btnContainer }>
            <Btn title={ 'Больше вопросов' } onClick={ showMoreQuestion } styleBtn={ 'blackTransparent' }
                 className={ styles.btn }/>
          </div>
          : null }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    faqList: state.home.faq.faqList,
    faqListMobile: state.home.faq.faqListMobile,
    windowInnerWidth: state.window.size.windowInnerWidth,
  }
}

const mapDispatchToProps = dispatch => ({
  changeHomeFaqDropDown: arr => dispatch(changeHomeFaqDropDown(arr)),
  showMoreQuestion: () => dispatch(showMoreQuestion()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FAQ)
