import React, { memo } from 'react'
import Btn from "../../Layouts/Btn/Btn"
import Select from "../../Layouts/Select/Select"
import SlideShow from "../../Layouts/SlideShow/SlideShow"
import styles from './Promotions.module.scss'
import { connect } from "react-redux";

const Promotions = memo(({ windowInnerWidth }) => {
  const providerList = [
    { label: 'Мегафон', code: 1 },
    { label: 'Билайн', code: 2 },
    { label: 'Мтс', code: 3 },
  ]

  const promotionList = [
    {
      img:
        <svg width="149" height="27" viewBox="0 0 149 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <rect width="149" height="27" fill="url(#patternPromotion1)"/>
          </g>
          <defs>
            <pattern id="patternPromotion1" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use href="#imagePromotion1" transform="translate(-0.0033557) scale(0.0033557 0.0185185)"/>
            </pattern>
            <image id="imagePromotion1" width="300" height="54"
                   href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAA2CAYAAAB9R6Q8AAASQUlEQVR4Ae1dQXIUORZ9StvF7MY3GPcJ8JyAYtO4V20iqAp2wAlgToA5AeYEmF0H7gjMChcb2ycAn6CZEwzeNWWcmnhSZVVm5ZcqM0uZZYwU4ai0UvqSfiq/vv5/+qnQZvrwcAtrV/8yTWi1hTQ5w29/fDH/23ub+PXwc5tdiLQjByIHbg4H1oMO5ePgDrTqQ+s+lOoDKaBVronvdwFYgZWkj6HVc4yGgNanUOoUSr+PAizHrngZORA5UODA8gKLmlKSPoXGLjS2DHWVF1KF9uR/jHBDH1rt4Xj4BdD7uHX5BnePvsoVYm7kQOTAz8iB5gKLgkpdPYdKHxvG1ZRRTmYrCj21j/HGHkbDffTGr6LgcnIr3ogc+Kk4kNQe7cnuJkbD50jSv6CUFVa1iVSpoDYB7GG88RdGw0dVasQykQORAzebA/UE1sfBNr71PhlB0hlfjOA6wGj4DhSWMUUORA78tByoLrA+Dmgk/wSzZVsJv3aNsKTQjClyIHLgp+RANYE1Gr6EVq9XziEKS40TRKG18kcROxA5sAoOLBZYxwMKqmer6JzcptqMQkvmTMyNHLjpHPALrOPBfruG9absjUKrKedivciBH5kDbliDtVk9vb6Do9DSJzjZ/aUV2MOHB30kye/Q2trMlPqMNH2P3/48bZUndCx823gEZcZHAO4p0vSs9XZbHVQkHjkQhgOywKKNSONlmCbapKL4cr8DQAR9uMRtcAbZmIFgKcCe4XhwiluX91sRklwkxnhphBVHY9tmu2i13XCcu1mUzOKxfgcq6QO6D6iADh/9FVCn5pRHgrN4wqPa1JG3hBqvAQMnqEZllaWIkj9+EM7GlhdW0rjY3niDml1YiIXVaN18b6tdaYw/ex6fLbGGxACq5MjacEMKKzLYvF+7UGrfeN+PByegVh+TlwNlgTUa7oVdSbzth7mp1HMQeb9s4oTJNCsvLbWNcW/fW6TOTbZbyQtr2g0nnOv08Wcpy90FBRVBy10u2lyQkuQEXDBDL4Y36NkVt4Rk1Fg/BUKds+mKU2oTSboHYDnkvVK7NXr8CB8eHASxLVHgVk0aRP1zrO5kI2HYKBnuUtXvbFyet7IFrt6DckkzV3u/A5Pzqzr9jJ0/35cL1sgZDXkeliaG1SUumOONbZzs3g3Ocy6Ma0pPB/fr4dn0+ge5KAqscY+rd9itTneMeIQPD/em4WuatKtQz0ZhBc1yRnir1VXfChCLRi1ACsvDrbHpU7pZjJLRhBm5On+v00ZYHqexdVLYGvtOyHnzAvfeuoVyZuvLz1VFO9/wCxJ9X+RNbjjipdHQr7glF293m6m28W2DNuQnjdq15oXbxmFEzS2fZuIKJlJKds9GTGGop8/ojd9XFpZmRwZ5wU3Tu7UXdL4P1DSllKZ3ZwIrlHal0/9g50+7XbIv4wGUCrfaSwPJ8kJoWRmtKr+cDJzoWYyvKnXmy9TRrrK6V7osHHwTJ6sX8tc6ZjixNjt9ySmUtZIdQhmweDR8gntvaXuqnpQRVmW+TinoC2gwDJIQv80I7DvTosWLN9OQSszXehN2YdwG1D+LRXP/UdMaDd9XHofVOJ8Cmvyx45g5jHKEHZdWsFnhNt74itHwAL3xi8qCy0E2dPZMYF1u7C69Z88LK/aUEIAPD/tQKW0CHST9u9n/dxmWZhkhSWGn0uIK2JhL+lmngiPF3tSb2bjPNStajU4WVlNSBqP3Eie7p5VfNkvX/Ry0fg+99sy5MNnFQhZYaeo2GxhNCPtOwaVpnsFiwcv+f1Pv7LG5EBqiEXjP8K23i4+DZhrr9HmEvZgZ3TWWx1zd+n5Q6p7RPnRHe2W1CSN4S71YMkOfQev/ykQmQlK+6c+1ws5VhitztcQJ61utq1GpV0op2o+6TRSSVRI1LWveqFKaQSY9jgx9hp3DXaewqtaCXOrXwwMoEDJxIRag1mOerXjXZlph284ZX6Oxqk/XyXtpBZbZvwdw27o0G43uAvGlqGM498yEuVtKlYWxKUIs2Hp9Yz9VeGjHS28m8OKVNeuitEXM7t2UX6ON1hGS+mllb5uGrB2Rd73LduZT9lxoi9TaLYi1xxHEOcSztW2nRF2bSCl2S7h2Rbf68sOmzWoeCU6mflO3lydekYLyTL6KJMRivTGDCnLbJdgdEmqn9WAOFHJEs4tJ7SNNvxrAqHi/Ria3M6LdpQYNrNuw1lWqUBN1CvcqBACkadnA79ZGzwEI82u6kPifi92WuyAx3US95c6EASvFuUX7mCNZaI1jDk3rkD+0u8nPkCc5jJYnzeuMhtqcwHjqL8wZiUC/VmAxDnuIpJLXhT2vEVYbk711iAaq0FCbTi9alequMtQeR0NqPeVgglSd6RKvZeg1Qk5uLU0OgNT1Esl1XLla72PnsCwAXOWXzaew8nn4mtDnPBoLfKdw3DncxvHgCOIWtcpC8n0LmFlGCt1Tuhu+cW7xBIWCpHELwhgw2qPEk9kAzpGmz0oKxOx+8WqRPY3z/mT3WWW7YJF6sP8mT0qHeTmyPS9Ruwy4Z5DCgYRhvSHXgydUpZ0mHtXdGEirUaJwI6/k9KYVe4nc1o+R67JHZZpc9js/GvKYL6IvrSnXcwCutKyV+Og1vefUgh1auNcMoc/QG5d3O76+LbKnsa63TR/xcPcmAku59/BN2rIu0uW9jk3aZh1+UqyNRAcCt1hSyiAO0r35POv9mc+1/yvt38LItW5uLrUrOBYDo4kCRrN1OUXSBaBc31xZU93ZXnVasy2PIpCuPW6kCdGepnyhpDxtdjQDk8qGyY46FKSZLMJCEGJzRLjFciW3nWVWwxqPHVtwHQ/Bzjhlr9xwmzlN1PFcqmhZ821m/0vg3Oxe6F9t7EwyVdqGy0neRXBBXQYXSE3L5bVEh7bo8nhNzjr+Xt92beEdda5/tmoRrU+nwvGAhmUBDFsBB+YVasotDJtyPVEvcTyouXoXGjvHzqHH7V8oG/4fakiSP4j4pnwyhuuejNFKjf2rWD5f9zpc+05Z/ON7Gawqzj8OJIDdzQBkBXua24whc5CIdX53NGCaAUcDEnWS6lLFdnYiwI0EezARLeZpGW8KX27Z1mWMx4QyCG+gNSBXhzLMN+38X9ELtEQK4T5u2Lw1BJe39+TVvDfaOkWIXROcIjyRIHiw2S2lvzg95MQ4daVlqcTt7ZuHCxkYUioz1aepyTXKudaeJjkAymU7znG4RwL0QutXuPdWFf66evgBuu8l4VOb7eFkuboxWjqMqBSCMRU5YDWjYh7/c/HKZ/9zHYHyGda7xLfxyE7lRM/mipK8Pe2sM20JrMXbiFoPqDN+1GjIsX3z2kxcUAZ9gY3LFrSrGsO5bkX5YljnzVzPPLyyCyJxR+VknCKSLciDMasXvaPcZp0cJ36wq1Miuc7WdgDk6rZ8maAOKLByZxhN0ZPMZBRUd0+VWre6QNYTSOpKkmbghTKo/UZeHVf7NyFfuY7LqCMvr3xaVpKUIQ7W8ysfu1IGe1RD82nIeKO1OE6ahNji1e2Wb3u6YrPOuvEoBDaMFfhDO0CaD7estjwYpELVxv84MS2NKZYrLrKZzNs/CGVwnZ7P3PPlVkLkFKMF1KWoHAjpunTqlLfoc9mGovUnfBy4YTip/p+Tz7RvSSGIGDdfsn0xgN+4x69G3a/T/VpljV3TEX2ChGzfiiRpv3O9s4nHFlak0uy/emadc2CB8lLqhTGZyGBZABOkuzlOIXi9StTqZ9AOkDAmdoeJhtQuEoGkSVo28rJte6DWruj2BXTxYM49H7jjvmgBgZsKRs7nSTUhhT0tuRaFrIqlXdS0qJVpJT9HYBcEQmv9omToz2g2/eW8GF+9c0b4beaIIdxhSfOCCZfTdFSzenWQ9lktapuueFhTgWXPGrUjsLKOdPtbdgO30T63E6PBGSACb2dHGbwvoAM/1EZ/fwSarmM44fpe1rKoNbifI7Uca09jgEBl8FLF+aX1HadWp9RtfBzkw+YBKbatfS4luNozMu/ccJyhNAfqmztwLP9dGo5sH/SMIPStCayB2I06J+FDdyMkPX3RmSua3U71HhIln5jnkZKT3X2MHVAGRKBo6cm7juGUCi6Roa4IPSliy4gOT64+yweQJ21ZHBI9dMUIDj6tTtIIfTJqOiyGtZkEwpzmFS4oNAXBorbrn2vN0bX8l+12jEq64mS9hInZw6+4K4GaJ+ity0R7gutYCCEOPigDHJ7GLvt/ndri6u46hhOyn5IxndqyLzZVyPYX0zpfGNbGezBbMwiBjIT3tU3HEBzhjllPsqf56LVwz2pYVImd6O2QrTLMrN6DXj/C2hXjjhcZxBef3qHe+NQg8HldPIVPlXRvej9J6KkrrjLJsvv3BuN1AUnNipzI6Otm9on6nSOC+sMDFD4+UJdKVx+hcB/DqdvjBeUdAF++Bx8HfWgQFV+cVwsoBrvNozW3LhefBSQW8HjAqK+CKWfykeHRcB9psthGah1jDJFUtO3lB9XVfM23KVznke401C0fdVRoZJalHmPnMG8Q/DzxdvBDBhfQa33s/JEZzKkpnWI04Hb1jtFibl32cy5t3qf6m1ONPRidWSfCX3HyjAbuULdii177hFijUaZKXhozSdGKUo+U6yMU9agsLu06hsO50bvcyj37xbSyEseDL/JLbQL8leEk1gu2bb91aRZMQSBkxEP+Em+lGAoo/374G7BRKuQPQNhPlNEptGc+zgGHI4oLGmPAL9qmusC6/h4GvzsDjuo1N64oTLPnYryoLHYSVzXp0CZtREx8OPNHFEx+/sVfgNEJMw4HlTrbO30BKZy0g/LC7BVjYxb2r0oBHsNxnlVb4rk6X7SpliX3jvajncMtKP1vAC8AvAFtjq7tv0zFlUt3P2m9gtJPkCa/4N5hX3w/XBSYb96dCsBS8jVzHMz/Vvv24huY0x2+znRzb6ZhUVgcDxidUsa/LN0fDx5Dg6ugA2xKJLI5N1X0zGT94dGKZLI8+OJVZeXb+vVGJJ1vNDBQ1Hq5LrwG4/kuXLf/CbZ1rfI+MOiicfAEwXhD1n6rfOPRalzy3Mva9n2xqMmnrjK6VX4Zwnnc426jpS0sY2tdFh0UVfrVUpmZhsUG+GWQ9tJtMZQNDa1cAegalhLDNzNpR6jY2fGJxXt1iX6oPGp/3lhC04bO4UPJT4vVvPDFBa9JqvPizmM47MmSnlQ+F2uTKg+L825RgL9yreuVw/H1xnxHqn+0pPoIXhjNT9rZVKcRtGRRYNktWRsD555uc/JxyNkADObDIIkt1mV+8hBYlwVgU+pp6esddqLzW2wX6I3bFLazPvuuqDZTxXclbic4udqYANzC8DNrP2JyHsPhtDEG8OVG5TN3ZPNruRZWW5vz6d7bx6A25wowWbmHxjH2ym5TPR+zrUwvbMHZljCjyxd/bL5RKHxsISvU8Jcfhzwe9qEmnrxvKIYK1uo1RoOngDqC1ltQV8WopTa+Do2SVNHptrV4GGoXIYQAXw4JFlHneAqF1oeHp8bYCb0FTfsBGKn0aAGupshU2qW0wz7hsllZ3M6+cWmHjDQgxWOydp1in/mf9AGJcqlZjgUqEs5Q/hQcz4TeY0C5JRMX4tGQNqhylANuQ7nwzYerqdMkx5wU1/5Zdc/h6lmhMFd2DKc23nuPWte2/Sp3Rj4HcObimc1rc/ZWn4LnFuvyIfjYjQmINkMhrX+RrQYWj/FOqFExS58ZVZKlF0DtKxL0FMu15SkVb0UORA78+ByQlwV+/YUejGufjLu7iDq+9n2OHYwciBxoygFZYJGaCYsrqOlNWwpeT18YZHKIrWDwvkWCkQORA21wwC2w2Jr96u3KDzyWBz4RVtblXL4dcyIHIgduJAf8Aovai3WZXiOhFYXVjZyJcVCRAxU44BdYJGBdpvTItQR3qNDLrIj1bPQ7jcaQtR1/IwciB1bOgcUCK+sicR4GY6QvsqxOf+2h0O6+YtLp4GJjkQORA1U4UF1gkRoxRukasR1lzEyV1pqUsWe37mPncDcI1qpJH2KdyIHIgWvBgXoCi10mCI8HNYmqBVq0bRlN7gVuXW7XPhR6LVgbOxE5EDkQmgNlpHvVFiwilrGWGD52Pm5VVSpSuXPo9MBEM4iQBYk/MS9y4KflQHOBlbEsfxyAAdi06vvjVGcV87/cYqpTKH0UDep5vsTryIHIgTwH5KM5+RLLXvOsmBVks3Nc/FCj+d7a+hcxBtaybcb6kQORAzeSA/8H9fpDFSKpy7wAAAAASUVORK5CYII="/>
          </defs>
        </svg>,
      title: 'Не плати за пакеты услуг Весь МТС с сервисом МТС Cashback!',
      description: 'Найдите провайдеров, которые подключают домашний интернет и ТВ  по вашему адресу. Найдите провайдеров, которые подключают.',
      btnDetails: {
        styleBtn: 'blackTransparent',
        title: 'Подробнее',
      },
      btnPlug: {
        styleBtn: 'red',
        title: 'Подключи',
      }
    },
    {
      img:
        <svg width="149" height="27" viewBox="0 0 149 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <rect width="149" height="27" fill="url(#patternPromotion1)"/>
          </g>
          <defs>
            <pattern id="patternPromotion1" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use href="#imagePromotion1" transform="translate(-0.0033557) scale(0.0033557 0.0185185)"/>
            </pattern>
            <image id="imagePromotion1" width="300" height="54"
                   href="data:image/png;base64,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"/>
          </defs>
        </svg>,
      title: 'Не плати за пакеты услуг Весь МТС с сервисом МТС Cashback!',
      description: 'Найдите провайдеров, которые подключают домашний интернет и ТВ  по вашему адресу. Найдите провайдеров, которые подключают.',
      btnDetails: {
        styleBtn: 'blackTransparent',
        title: 'Подробнее',
      },
      btnPlug: {
        styleBtn: 'red',
        title: 'Подключи',
      }
    },
    {
      img:
        <svg width="149" height="27" viewBox="0 0 149 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <rect width="149" height="27" fill="url(#patternPromotion1)"/>
          </g>
          <defs>
            <pattern id="patternPromotion1" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use href="#imagePromotion1" transform="translate(-0.0033557) scale(0.0033557 0.0185185)"/>
            </pattern>
            <image id="imagePromotion1" width="300" height="54"
                   href="data:image/png;base64,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"/>
          </defs>
        </svg>,
      title: 'Не плати за пакеты услуг Весь МТС с сервисом МТС Cashback!',
      description: 'Найдите провайдеров, которые подключают домашний интернет и ТВ  по вашему адресу. Найдите провайдеров, которые подключают.',
      btnDetails: {
        styleBtn: 'blackTransparent',
        title: 'Подробнее',
      },
      btnPlug: {
        styleBtn: 'red',
        title: 'Подключи',
      }
    },
  ]
  return (
    <div className={ styles.root }>
      <h1>Акции на домашний интернет</h1>
      <h2> Все действующие скидки, акции на интернет, оборудование и другие услуги провайдеров.  Подключай интернет дешево и выгодно.</h2>
      <div className={ styles.selectContainer }>
        <Select items={ providerList } name={ 'promotionsProvider' } selected={ providerList[ 0 ] }
                itemKey={ 'label' }/>
      </div>
      <SlideShow animationTime={ 250 } slideHeight={ windowInnerWidth <= 700 ? 384 : 439 }
                 windowInnerWidth={ windowInnerWidth }
                 showElements={ windowInnerWidth <= 1150 ? 1 : 2 }

                 classNameContainer={ 'promotionSlider' } idRoot={ 'promotionSliderId' }
                 paddingLeft={ windowInnerWidth <= 700 ? 28 : windowInnerWidth <= 1267 ? 60 : 90 }
                 paddingRight={ windowInnerWidth <= 700 ? 28 : windowInnerWidth <= 1267 ? 60 : 90 }
                  marginRight={ windowInnerWidth <= 1150 ? 0 : 25 }>
        { promotionList.map((item, index) =>
          <div key={ index } className={ styles.item }>
            { item.img }
            <div className={ styles.title }>{ item.title }</div>
            <div className={ styles.description }>{ item.description }</div>
            <div className={ styles.slideBtnContainer }>
              { [ 'btnDetails', 'btnPlug' ].map((btnItem, btnIndex) =>
                <Btn title={ item[ btnItem ].title } styleBtn={ item[ btnItem ].styleBtn } key={ btnIndex }/>
              ) }
            </div>
          </div>
        ) }
      </SlideShow>
      <div className={ styles.btnPromotionContainer }>
        <Btn title={ 'Все акции' } styleBtn={ 'blackTransparent' }/>
      </div>
    </div>
  )
})

const mapStateToProps = state => {
  return {
    windowInnerWidth: state.window.size.windowInnerWidth
  }
}

export default connect(mapStateToProps)(Promotions)
