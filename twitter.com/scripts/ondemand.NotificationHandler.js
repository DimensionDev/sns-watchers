;(window.webpackJsonp = window.webpackJsonp || []).push([
  [225],
  {
    '0weh': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        c = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        l = a('Lsrn'),
        r = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(r.a)(
            'svg',
            c()(
              c()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M12 1.25C6.07 1.25 1.25 6.07 1.25 12S6.07 22.75 12 22.75 22.75 17.93 22.75 12 17.93 1.25 12 1.25zm0 20c-5.1 0-9.25-4.15-9.25-9.25S6.9 2.75 12 2.75 21.25 6.9 21.25 12 17.1 21.25 12 21.25z',
              }),
              o.a.createElement('path', {
                d: 'M13.37 16.19c0 .76-.61 1.37-1.37 1.37s-1.38-.61-1.38-1.37.62-1.38 1.38-1.38 1.37.62 1.37 1.38zm.35-7.66l-.93 4.39c-.07.38-.4.64-.79.64s-.71-.26-.8-.64l-.93-4.39c-.1-.52.03-1.06.36-1.47.67-.83 2.07-.83 2.74 0 .33.41.46.95.35 1.47z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    'EyD/': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        c = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        l = a('Lsrn'),
        r = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(r.a)(
            'svg',
            c()(
              c()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M22.859 15.413l-3.606 2.641 1.364 4.255c.059.137 0 .284-.117.372-.058.049-.127.068-.195.068-.078 0-.146-.02-.205-.068l-3.606-2.622-3.606 2.622c-.059.049-.127.068-.205.068-.068 0-.137-.02-.195-.068-.127-.088-.185-.235-.127-.372l1.365-4.255-3.597-2.641c-.117-.078-.166-.245-.127-.381.049-.147.175-.235.331-.235h4.454l1.374-4.255c.049-.147.185-.225.331-.225.136 0 .283.078.331.225l1.374 4.255h4.454c.146 0 .292.088.331.235.042.137.004.303-.123.381zM9.696 22.402H3.617c-.822 0-1.574-.359-2.062-.986-.503-.645-.674-1.486-.472-2.307.617-2.486 2.409-4.509 4.918-5.552.603-.252 1.299.036 1.549.644.251.607-.037 1.303-.642 1.554-1.806.751-3.091 2.183-3.524 3.928-.025.103-.011.202.039.266.015.019.056.072.194.072h6.079c.655 0 1.186.533 1.186 1.19s-.531 1.191-1.186 1.191zm.197-10.184c-1.439 0-3.055-.167-4.128-1.397-.894-1.026-1.19-2.566-.903-4.709.402-2.999 2.33-4.862 5.031-4.862s4.63 1.863 5.031 4.861c.287 2.142-.008 3.683-.902 4.708-1.073 1.233-2.689 1.399-4.129 1.399zm0-8.588c-1.906 0-2.51 1.521-2.68 2.799-.185 1.382-.068 2.359.338 2.825.352.404 1.075.584 2.343.584 1.269 0 1.992-.18 2.344-.584.405-.466.522-1.443.337-2.825-.172-1.277-.776-2.799-2.682-2.799z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    RfPh: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('ezF+'),
        c = a('VPAj'),
        i = a('ddV6'),
        o = a.n(i),
        l = (a('LW0h'), a('7x/C'), a('z84I'), a('7xRU'), a('ERkP')),
        r = a.n(l),
        s = a('v6aA'),
        m = a('yiKp'),
        d = a.n(m),
        u = a('vjRr'),
        g = a('hqKg'),
        h = a('NjAB'),
        y = a('3zvM'),
        v = a('lMB6'),
        p = a('kHBp'),
        f = a('kw0K'),
        E = a('XOJV'),
        b = a('G6rE'),
        w = Object(y.e)({ namespace: 'genericNotifications' }),
        x = {
          selectNotification: Object(g.createSelector)(
            w.selectAll,
            E.a.selectAll,
            b.e.selectAll,
            p.a.selectAll,
            u.a.selectAll,
            function (e, t) {
              return t
            },
            function (e, t, a, n, c, i) {
              return Object(h.a)(e[i], f.a, { cards: c, tweets: t, users: a, lists: n })
            },
          ),
        },
        _ = d()(d()({}, w), x),
        k = v.a.register(_),
        C = a('rxPX'),
        z = function (e, t) {
          return k.selectNotification(e, t.entry.content.id)
        },
        H = function (e, t) {
          return t.module.selectIsUnread(e, t.entry.entryId)
        },
        M = Object(C.a)()
          .propsFromState(function () {
            return { notification: z, isUnread: H }
          })
          .withAnalytics(),
        L = a('RoyM'),
        B = a('caTy'),
        j = a('rcen'),
        A = (a('hBvt'), a('t62R')),
        D = a('rHpw'),
        F = function (e) {
          var t = e.focused,
            a = e.link,
            n = e.onClick,
            c = e.template.aggregateUserActionsV1.showAllLinkText
          return c && a
            ? r.a.createElement(
                A.b,
                { link: a, nativeID: t ? 'notification-show-more-text' : void 0, onClick: n, style: O.showMore },
                c,
              )
            : null
        },
        O = D.a.create(function (e) {
          return { showMore: { marginTop: e.spaces.space12 } }
        }),
        I = a('qbku'),
        S = a('SQlS'),
        T = function (e) {
          var t = e.focused,
            a = e.text
          return r.a.createElement(j.a, {
            alignment: a.alignment,
            color: 'gray700',
            entities: a.entities,
            nativeID: t ? 'notification-additional-context' : void 0,
            rtl: a.rtl,
            text: a.text,
          })
        },
        V = a('MWbm'),
        R = a('cTG8'),
        P = function (e) {
          var t = e.focused,
            a = e.template.aggregateUserActionsV1,
            n = a.additionalContext,
            c = a.targetObjects.filter(function (e) {
              return e.tweet
            }),
            i = c.length ? c[0].tweet : null
          return i
            ? r.a.createElement(
                V.a,
                { style: U.target },
                (function (e) {
                  var a = e.retweeted_status || e
                  return r.a.createElement(R.a, {
                    color: 'gray700',
                    displayTextRange: a.display_text_range,
                    entities: a.entities,
                    lang: a.lang,
                    nativeID: t ? 'notification-tweet-text' : void 0,
                    text: a.text,
                    withMediaLinks: !0,
                    withQuoteLinks: !0,
                  })
                })(i),
              )
            : n && n.contextText
            ? r.a.createElement(V.a, { style: U.target }, r.a.createElement(T, { focused: t, text: n.contextText }))
            : null
        },
        U = D.a.create(function (e) {
          return { target: { marginTop: e.spaces.space12 } }
        }),
        G = (a('M+/F'), a('oSwX')),
        K = function (e) {
          var t = e.userDecorations,
            a = e.users.slice(0, e.maxItems).filter(function (e) {
              return !!e
            })
          return r.a.createElement(
            V.a,
            { style: [J.root, 'center' === e.align && J.rootCenter, e.style] },
            a.map(function (a, n) {
              return r.a.createElement(G.default, {
                accessibilityHidden: !0,
                decoration: t && t[n],
                key: n,
                screenName: a.screen_name,
                size: 'large',
                style: [J.item, 0 === n && 'left' === e.align && J.itemLeftFirst],
                uri: a.profile_image_url_https,
                withHoverCard: !0,
                withLink: !0,
              })
            }),
          )
        }
      K.defaultProps = { align: 'left', maxItems: 10 }
      var J = D.a.create(function (e) {
          return {
            root: { flexWrap: 'wrap', flexDirection: 'row', overflow: 'hidden', height: e.spaces.space32 },
            rootCenter: { justifyContent: 'center' },
            item: { marginHorizontal: e.spaces.space4 },
            itemLeftFirst: { marginLeft: 0 },
          }
        }),
        Q = K,
        q = a('de1q'),
        N = a('PbQQ'),
        X = a('htQn'),
        W = a('5mJL'),
        Z = a('xrkw'),
        Y = a('RLww'),
        $ = a('2qZs'),
        ee = a('cOhU'),
        te = a('GCOQ'),
        ae = a('uCrx'),
        ne = a('Lsrn'),
        ce = a('k/Ka'),
        ie = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ce.a)(
            'svg',
            d()(
              d()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ne.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M23 17.482c0 .549-.45.998-1 .998h-2.34v2.397c0 .549-.45.998-1 .998s-1-.449-1-.998V18.48h-2.34c-.56 0-1-.449-1-.998 0-.559.44-.998 1-.998h2.34v-2.406c0-.549.45-.998 1-.998s1 .449 1 .998v2.406H22c.55-.001 1 .439 1 .998z',
              }),
              r.a.createElement('path', {
                d: 'M21.01 7.507c0 1.498-.41 2.995-1.07 4.433-.37-.23-.81-.36-1.28-.36-1.38 0-2.5 1.118-2.5 2.496v.909h-.84c-1.38 0-2.5 1.108-2.5 2.496 0 .799.38 1.508.96 1.957-1.17.879-2.18 1.398-2.78 1.408-2.17-.04-10-6.82-10-13.34C1 4.74 3.24 2.124 6.01 2.124c3.08 0 4.75 3.105 4.99 3.455.24-.35 1.94-3.455 5-3.455 2.77.001 5.01 2.617 5.01 5.383z',
              }),
            ),
          )
        }
      ie.metadata = { width: 24, height: 24 }
      var oe = ie,
        le = a('wpLu'),
        re = a('GcQN'),
        se = a('a5gf'),
        me = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ce.a)(
            'svg',
            d()(
              d()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ne.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M21.5 11.25h-3.25v-7C18.25 3.01 17.24 2 16 2H4C2.76 2 1.75 3.01 1.75 4.25v15.5C1.75 20.99 2.76 22 4 22h15.5c1.517 0 2.75-1.233 2.75-2.75V12c0-.414-.336-.75-.75-.75zm-10.75 5.5H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.75c.414 0 .75.336.75.75s-.336.75-.75.75zm3.25-4H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8c.414 0 .75.336.75.75s-.336.75-.75.75zm0-4H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8c.414 0 .75.336.75.75s-.336.75-.75.75zm6.75 10.5c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-6.5h2.5v6.5z',
              }),
            ),
          )
        }
      me.metadata = { width: 24, height: 24 }
      var de = me,
        ue = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ce.a)(
            'svg',
            d()(
              d()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ne.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M8.18 5.317c-.067.067-.118.148-.16.236l-.006-.005-6.722 15.145.006.006c-.125.24.084.732.51 1.16.428.427.92.636 1.16.51l.007.007 15.145-6.722-.005-.005c.088-.042.17-.093.237-.16.937-.937-.582-3.973-3.39-6.782-2.81-2.81-5.845-4.328-6.782-3.39z',
                fill: '#E0245E',
              }),
              r.a.createElement('path', {
                d: 'M15.005 8.66c2.8 2.8 4.353 5.785 3.47 6.668-.883.883-3.868-.67-6.67-3.47-2.8-2.8-4.352-5.786-3.47-6.67.884-.882 3.87.672 6.67 3.472z',
                fill: '#A01744',
              }),
              r.a.createElement('path', {
                d: 'M15.186 12.756c-.176 0-.35-.077-.47-.225-.206-.258-.164-.635.095-.842.132-.105 3.25-2.553 7.653-1.923.328.047.556.35.51.678-.048.328-.35.557-.68.508-3.89-.552-6.705 1.652-6.732 1.674-.11.09-.243.132-.374.132z',
                fill: '#FFAD1F',
              }),
              r.a.createElement('path', {
                d: 'M20.177 14.654c1.182-.334 1.998.194 2.193.886.194.692-.227 1.568-1.408 1.9-.46.13-.6.35-.58.42.02.07.254.187.714.057 1.182-.332 1.998.195 2.192.887.196.692-.227 1.567-1.41 1.9-.46.13-.6.35-.58.42.02.07.254.187.716.058.318-.09.65.096.74.414.088.32-.098.65-.417.74-1.18.332-1.998-.194-2.193-.887-.194-.693.227-1.567 1.41-1.9.46-.13.6-.35.58-.42-.02-.07-.253-.188-.714-.058-1.183.333-1.998-.193-2.193-.886-.195-.692.227-1.566 1.41-1.9.46-.13.6-.35.58-.42-.02-.07-.253-.187-.715-.057-.32.09-.65-.097-.74-.415-.09-.32.096-.652.415-.74zM3.864 10.42c-.057 0-.115-.01-.173-.026-.316-.096-.496-.43-.4-.747.68-2.262 1.295-5.87.54-6.812-.087-.106-.214-.21-.507-.19-.563.044-.51 1.23-.508 1.242.025.33-.223.618-.553.643-.335.02-.618-.223-.642-.553-.062-.827.195-2.42 1.613-2.526.633-.047 1.16.173 1.53.635 1.42 1.77-.02 6.897-.325 7.907-.078.26-.317.427-.574.427z',
                fill: '#794BC4',
              }),
              r.a.createElement('circle', { cx: '1.826', cy: '12.857', fill: '#FFAD1F', r: '1.076' }),
              r.a.createElement('circle', { cx: '17.702', cy: '6.814', fill: '#E0245E', r: '.899' }),
              r.a.createElement('circle', { cx: '15.628', cy: '20.377', fill: '#DF235F', r: '1.064' }),
              r.a.createElement('circle', { cx: '21.878', cy: '5.9', fill: '#FFAD1F', r: '1.004' }),
              r.a.createElement('circle', { cx: '18.458', cy: '2.733', fill: '#E0245E', r: '1.199' }),
              r.a.createElement('path', {
                d: 'M12.313 8.463c-.12.096-.275.147-.44.13-.52-.057-.958-.238-1.264-.524-.325-.304-.485-.71-.442-1.117.077-.714.794-1.37 2.016-1.238.476.05.688-.102.695-.175.007-.073-.167-.268-.642-.32-.52-.055-.958-.236-1.265-.522-.324-.303-.485-.71-.44-1.116.078-.715.794-1.37 2.015-1.238.347.037.53-.034.606-.08.062-.04.087-.075.09-.096.006-.072-.166-.267-.643-.32-.328-.035-.567-.33-.53-.66.035-.328.33-.566.66-.53 1.22.13 1.782.924 1.705 1.64-.077.714-.794 1.37-2.016 1.237-.347-.038-.53.034-.607.08-.06.037-.087.074-.09.094-.007.072.167.267.643.318 1.22.132 1.782.925 1.705 1.64-.076.715-.793 1.37-2.014 1.238-.347-.037-.53.035-.606.08-.062.04-.086.075-.088.096-.008.073.166.267.642.32.33.035.568.33.53.66-.02.163-.102.304-.22.4z',
                fill: '#FFAD1F',
              }),
            ),
          )
        }
      ue.metadata = { width: 24, height: 24 }
      var ge = ue,
        he = a('6ZHn'),
        ye = a('AtEG'),
        ve = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ce.a)(
            'svg',
            d()(
              d()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ne.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M20.222 10.66H3.5v-1.5h13.64c.152 0 .277-.124.277-.277V6.57c0-.153-.125-.277-.278-.277H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-2.934h10.556c.153 0 .278-.124.278-.277v-2.313c0-.153-.125-.278-.278-.278H3.5v-1.5h16.722c.153 0 .278-.125.278-.278v-2.31c0-.155-.125-.28-.278-.28z',
              }),
            ),
          )
        }
      ve.metadata = { width: 24, height: 24 }
      var pe = ve,
        fe = a('yVEN'),
        Ee = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ce.a)(
            'svg',
            d()(
              d()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ne.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M22.99 11.295l-6.986-2.13-.877-.326-.325-.88L12.67.975c-.092-.303-.372-.51-.688-.51-.316 0-.596.207-.688.51l-2.392 7.84-1.774.657-6.148 1.82c-.306.092-.515.372-.515.69 0 .32.21.6.515.69l7.956 2.358 2.356 7.956c.09.306.37.515.69.515.32 0 .6-.21.69-.514l1.822-6.15.656-1.773 7.84-2.392c.303-.09.51-.37.51-.687 0-.316-.207-.596-.51-.688z',
                fill: '#794BC4',
              }),
            ),
          )
        }
      Ee.metadata = { width: 24, height: 24 }
      var be = Ee,
        we = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ce.a)(
            'svg',
            d()(
              d()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ne.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M12 1.75c-.138 0-.276.038-.398.114-.044.028-4.515 2.8-9.21 3.494-.362.053-.632.358-.642.723-.003.118-.188 11.742 9.938 16.353.1.045.206.067.312.067V1.75z',
                fill: '#1DA1F2',
              }),
              r.a.createElement('path', {
                d: 'M12 1.75c.138 0 .276.038.398.114.044.028 4.515 2.8 9.21 3.494.362.053.632.358.64.723.004.118.19 11.742-9.937 16.353-.098.045-.204.067-.31.067V1.75z',
                fill: '#78C6EE',
              }),
            ),
          )
        }
      we.metadata = { width: 24, height: 24 }
      var xe = we,
        _e = a('EHV7'),
        ke = a('lUZE'),
        Ce = a('Hp3u'),
        ze = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ce.a)(
            'svg',
            d()(
              d()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ne.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M21.6 3.18C15.59-.06 8.4-.06 2.39 3.18c-.24.13-.39.39-.39.65v8.56c0 8.54 9.73 10.82 9.83 10.84.05.02.11.02.17.02.05 0 .11 0 .16-.02.1-.02 9.84-2.3 9.84-10.84V3.83c0-.26-.16-.52-.4-.65zM16.67 13.8c-.65.66-1.55 1.06-2.55 1.06H9.87c-2 0-3.61-1.62-3.61-3.6 0-.99.4-1.9 1.05-2.55.66-.64 1.56-1.05 2.56-1.05h4.25c2 0 3.61 1.61 3.61 3.6 0 .99-.4 1.89-1.06 2.54z',
              }),
              r.a.createElement('path', {
                d: 'M12.08 11.26c0 1.21-.98 2.2-2.2 2.2-1.21 0-2.2-.99-2.2-2.2 0-1.22.99-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2z',
              }),
            ),
          )
        }
      ze.metadata = { width: 24, height: 24 }
      var He = ze,
        Me = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ce.a)(
            'svg',
            d()(
              d()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ne.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M23.098 17.97l-8.62-14.93c-.54-.94-1.51-1.5-2.6-1.5h-.02c-1.09 0-2.06.58-2.6 1.53L.888 18c-.53.94-.52 2.06.03 2.99.54.92 1.49 1.47 2.55 1.47h17.07c1.06 0 2.02-.55 2.56-1.48.54-.94.54-2.07 0-3.01z',
                fill: '#F4212E',
              }),
              r.a.createElement('path', {
                d: 'M11.998 18.89c-.76 0-1.38-.62-1.38-1.38s.62-1.37 1.38-1.37 1.37.61 1.37 1.37-.61 1.38-1.37 1.38zm1.72-9.03l-.93 4.39c-.07.38-.4.64-.79.64s-.71-.26-.8-.64l-.93-4.39c-.1-.52.03-1.06.36-1.47.67-.83 2.07-.83 2.74 0 .33.41.46.95.35 1.47z',
                fill: '#FFF',
              }),
            ),
          )
        }
      Me.metadata = { width: 24, height: 24 }
      var Le = Me,
        Be = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ce.a)(
            'svg',
            d()(
              d()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ne.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75z',
                fill: '#FFAD1F',
              }),
              r.a.createElement('path', {
                d: 'M12 16.3c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1zm0-10.6c-2.3 0-4.2 1.9-4.2 4.2 0 .4.3.8.8.8s.8-.3.8-.8c0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-.4 0-.8.3-.8.8v1.1c0 .4.3.8.8.8s.8-.3.8-.8v-.4c2-.4 3.4-2.1 3.4-4.1-.2-2.4-2-4.3-4.3-4.3z',
                fill: '#14171A',
              }),
            ),
          )
        }
      Be.metadata = { width: 24, height: 24 }
      var je = Be,
        Ae = a('EyD/'),
        De = a('0weh'),
        Fe = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ce.a)(
            'svg',
            d()(
              d()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ne.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M12 22.75c-1.484 0-2.827-.753-3.636-2-.295.062-.6.095-.91.095-2.417 0-4.385-2.045-4.385-4.56v-.11c-1.133-.852-1.82-2.228-1.82-3.697 0-1.538.723-2.935 1.92-3.776-.067-.323-.102-.653-.102-.987 0-2.514 1.968-4.56 4.386-4.56.312 0 .616.033.91.097.81-1.25 2.152-2.002 3.636-2.002 1.46 0 2.826.77 3.634 2.002.294-.063.6-.096.912-.096 2.418 0 4.386 2.045 4.386 4.56 0 .333-.034.663-.102.985 1.198.843 1.92 2.24 1.92 3.777 0 1.468-.687 2.844-1.82 3.696v.112c0 2.514-1.967 4.56-4.385 4.56-.31 0-.616-.033-.91-.098-.81 1.234-2.175 2.003-3.635 2.003zm-3.273-3.642c.284 0 .553.162.68.434.49 1.054 1.484 1.708 2.593 1.708 1.11 0 2.104-.654 2.593-1.707.167-.36.583-.528.954-.383.312.122.648.185 1 .185 1.59 0 2.885-1.372 2.885-3.06 0-.136-.01-.268-.027-.4-.036-.294.106-.582.362-.733.915-.543 1.483-1.567 1.483-2.674 0-1.17-.642-2.255-1.636-2.762-.335-.17-.492-.563-.366-.918.122-.345.184-.71.184-1.083 0-1.687-1.295-3.06-2.886-3.06-.353 0-.688.063-.996.186-.368.148-.79-.02-.957-.38-.49-1.055-1.483-1.71-2.593-1.71-1.11 0-2.103.655-2.593 1.71-.168.36-.587.53-.958.38-.308-.122-.642-.184-.995-.184-1.59 0-2.886 1.372-2.886 3.06 0 .372.06.737.183 1.082.125.354-.03.747-.366.918-.994.508-1.636 1.592-1.636 2.762 0 1.107.57 2.132 1.482 2.673.255.152.397.44.362.734-.016.133-.025.266-.025.402 0 1.687 1.294 3.06 2.885 3.06.35 0 .687-.063.998-.186.09-.035.182-.052.274-.052z',
              }),
              r.a.createElement('path', {
                d: 'M15.416 8.376c-.345-.23-.81-.137-1.04.208l-3.493 5.24L9.3 12.24c-.292-.293-.767-.293-1.06 0s-.293.768 0 1.06l2.23 2.23.113.094c.128.085.272.126.416.126.24 0 .48-.117.624-.334l4-6c.23-.345.137-.81-.208-1.04z',
              }),
            ),
          )
        }
      Fe.metadata = { width: 24, height: 24 }
      var Oe = Fe,
        Ie = a('A7Fw'),
        Se = 'notification-message-text',
        Te = 'notification-tweet-text',
        Ve = 'notification-show-more-text',
        Re = 'notification-additional-context',
        Pe = D.a.create(function (e) {
          return {
            root: { cursor: 'pointer', paddingVertical: e.componentDimensions.gutterVertical },
            horizontalPadding: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
            reducedHorizontalPadding: { paddingHorizontal: '6px' },
            edgeToEdgeSocialContext: { paddingLeft: '10px' },
            isTweet: { padding: 0 },
            unread: { backgroundColor: e.colors.unreadCellBackground },
            itemIcon: { alignItems: 'flex-end' },
            edgeToEdgeItemIcon: { alignItems: 'center' },
            itemContent: { flexGrow: 1 },
            curationControl: {
              position: 'absolute',
              top: e.componentDimensions.gutterVertical,
              right: e.componentDimensions.gutterHorizontal,
            },
            curationPadding: { paddingRight: e.spaces.space20 },
            icon: { height: '2em' },
            colorDeepGray: { color: e.colors.gray700 },
            colorRed: { color: e.colors.magenta500 },
            socialContext: { marginBottom: e.spaces.space4 },
            twitterIcon: { color: e.colors.brandColor },
            colorBlue: { color: e.colors.blue500 },
            colorGreen: { color: e.colors.green500 },
            colorOrange: { color: e.colors.orange500 },
            colorPrimary: { color: e.colors.primary },
            colorPlum: { color: e.colors.plum500 },
            colorPurple: { color: e.colors.purple500 },
            userAvatarList: { marginBottom: e.spaces.space12, paddingRight: e.spaces.space20 },
            timelineRowText: { justifyContent: 'center' },
            avatarDecoration: { width: '1.2em', height: '1.2em', position: 'absolute', top: '1em', right: 0 },
          }
        }),
        Ue = r.a.createElement(Z.a, { style: [Pe.colorPurple, Pe.icon] }),
        Ge = r.a.createElement(Y.a, { style: [Pe.colorBlue, Pe.icon] }),
        Ke = r.a.createElement($.a, { style: [Pe.colorBlue, Pe.icon] }),
        Je = r.a.createElement(ee.a, { style: [Pe.colorBlue, Pe.icon] }),
        Qe = r.a.createElement(te.a, { style: [Pe.colorRed, Pe.icon] }),
        qe = r.a.createElement(ae.a, { style: [Pe.colorRed, Pe.icon] }),
        Ne = r.a.createElement(oe, { style: [Pe.colorRed, Pe.icon] }),
        Xe = r.a.createElement(le.a, { style: [Pe.colorDeepGray, Pe.icon] }),
        We = r.a.createElement(re.a, { style: [Pe.colorBlue, Pe.icon] }),
        Ze = r.a.createElement(se.a, { style: [Pe.colorDeepGray, Pe.icon] }),
        Ye = r.a.createElement(de, { style: [Pe.colorDeepGray, Pe.icon] }),
        $e = r.a.createElement(ge, { style: Pe.icon }),
        et = r.a.createElement(he.a, { style: [Pe.colorBlue, Pe.icon] }),
        tt = r.a.createElement(ye.a, { style: [Pe.colorBlue, Pe.icon] }),
        at = r.a.createElement(pe, { style: [Pe.colorDeepGray, Pe.icon] }),
        nt = r.a.createElement(fe.a, { style: [Pe.colorGreen, Pe.icon] }),
        ct = r.a.createElement(be, { style: Pe.icon }),
        it = r.a.createElement(xe, { style: Pe.icon }),
        ot = r.a.createElement(S.a, { style: Pe.icon }),
        lt = r.a.createElement(_e.a, { style: [Pe.colorPrimary, Pe.icon] }),
        rt = r.a.createElement(ke.a, { style: [Pe.twitterIcon, Pe.icon] }),
        st = r.a.createElement(Ce.a, { style: [Pe.colorOrange, Pe.icon] }),
        mt = r.a.createElement(He, { style: [Pe.colorOrange, Pe.icon] }),
        dt = r.a.createElement(Le, { style: Pe.icon }),
        ut = r.a.createElement(je, { style: Pe.icon }),
        gt = r.a.createElement(Ae.a, { style: [Pe.colorPlum, Pe.icon] }),
        ht = r.a.createElement(De.a, { style: [Pe.colorRed, Pe.icon] }),
        yt = r.a.createElement(Oe, { style: [Pe.colorBlue, Pe.icon] }),
        vt = r.a.createElement(Ie.a, { style: [Pe.colorBlue, Pe.icon] }),
        pt = {
          alert_bell_icon: Ge,
          bar_chart_icon: Ue,
          bell_icon: Ge,
          birdwatch_icon: Ke,
          bird_icon: rt,
          communities_icon: Je,
          conversation_bubble_icon: st,
          heart_icon: qe,
          heart_plus_icon: Ne,
          histogram_icon: at,
          lightning_bolt_icon: We,
          list_icon: Xe,
          lock_icon: Ze,
          magic_rec_icon: rt,
          milestone_icon: $e,
          news_icon: Ye,
          person_icon: et,
          play_icon: tt,
          reply_icon: st,
          report_icon: Qe,
          recommendation_icon: ct,
          retweet_icon: nt,
          safety_icon: it,
          security_alert_icon: dt,
          security_unknown_icon: ut,
          shield_icon: mt,
          spaces_icon: ot,
          stacked_cards_icon: rt,
          super_follows_icon: gt,
          super_follows_error_icon: ht,
          topic_icon: lt,
          trending_icon: rt,
          verified_general_icon: yt,
          verified_notable_icon: vt,
        },
        ft = function (e) {
          var t = r.a.useContext(s.a).featureSwitches,
            a = r.a.useState(!1),
            n = o()(a, 2),
            c = n[0],
            i = n[1],
            l = e.analytics,
            m = e.entry.content,
            d = e.feedbackItems,
            u = e.isUnread,
            g = e.notification
          r.a.useEffect(function () {
            l.scribeAction('impression')
          }, [])
          var h = r.a.useCallback(
              function () {
                l.scribeAction('navigate')
              },
              [l],
            ),
            y = r.a.useCallback(
              function () {
                i(!0)
              },
              [i],
            ),
            v = r.a.useCallback(
              function () {
                i(!1)
              },
              [i],
            )
          if (!g) return null
          var p = g.icon,
            f = g.message,
            E = g.template,
            b = m.url && Object(B.b)(m.url),
            w = m.socialContext && m.socialContext.generalContext && m.socialContext.generalContext,
            x = t.isTrue('responsive_web_reactions_legacy_heart'),
            _ = t.isTrue('media_edge_to_edge_content_enabled'),
            k = d ? r.a.createElement(L.a, { feedbackItems: d }) : null,
            C = E.aggregateUserActionsV1.fromUsers
              .map(function (e) {
                return e.user
              })
              .filter(Boolean),
            z = E.aggregateUserActionsV1.fromUsers
              .map(function (e) {
                return e.reactionType
              })
              .filter(Boolean),
            H = z.length
              ? z.map(function (e) {
                  return r.a.createElement(q.a, {
                    legacyHeart: x,
                    reactionType: e,
                    style: Pe.avatarDecoration,
                    withAnimation: !1,
                  })
                })
              : void 0,
            M = k && !C.length && !w,
            A = p && p.id && pt[p.id] ? pt[p.id] : rt,
            D = b && ('string' == typeof b ? { pathname: b } : b)
          return r.a.createElement(N.a.Consumer, null, function (e) {
            return r.a.createElement(
              X.a,
              {
                accessibilityLabelledBy: c ? [Se, Te, Ve, Re].join(' ') : void 0,
                accessibilityRole: 'article',
                link: D ? e.withAnchorless(D) : void 0,
                onBlur: v,
                onClick: h,
                onFocus: y,
                style: [Pe.root, _ ? Pe.reducedHorizontalPadding : Pe.horizontalPadding, u && Pe.unread],
              },
              w
                ? r.a.createElement(I.a, {
                    contextType: w.contextType,
                    link: w.landingUrl ? Object(B.b)(w.landingUrl) : void 0,
                    style: Pe.socialContext,
                    text: w.text,
                  })
                : null,
              r.a.createElement(
                W.a,
                {
                  avatarCell: A,
                  avatarCellStyle: _ ? Pe.edgeToEdgeItemIcon : Pe.itemIcon,
                  cellStyle: [Pe.itemContent, Pe.timelineRowText, M && Pe.curationPadding],
                  style: _ && Pe.edgeToEdgeSocialContext,
                },
                C.length
                  ? r.a.createElement(
                      V.a,
                      { style: Pe.userAvatarList },
                      r.a.createElement(Q, { userDecorations: H, users: C }),
                    )
                  : null,
                r.a.createElement(j.a, {
                  alignment: f.alignment,
                  entities: f.entities,
                  nativeID: c ? Se : void 0,
                  rtl: f.rtl,
                  text: f.text,
                }),
                r.a.createElement(P, { focused: c, template: E }),
                r.a.createElement(F, { focused: c, link: b, template: E }),
              ),
              k ? r.a.createElement(V.a, { style: Pe.curationControl }, k) : null,
            )
          })
        },
        Et = M(r.a.memo(ft)),
        bt = a('Rp9C'),
        wt = n
          .b({
            isFocusable: Object(c.a)(!0),
            component: Et,
            shouldDisplayBorder: Object(c.a)(!0),
            getScribeDataItem: function (e) {
              var t = e.itemMetadata.clientEventInfo
              return bt.a.getAllSurfaceDetails(t)
            },
          })
          .getHandler()
      t.default = wt
    },
    de1q: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return F
      })
      var n,
        c,
        i = a('ERkP'),
        o = a.n(i),
        l = a('38/B'),
        r = a('q1bs'),
        s = a('Eqye'),
        m = a('uCrx'),
        d = a('yiKp'),
        u = a.n(d),
        g = a('KEM+'),
        h = a.n(g),
        y = a.p + 'cheer.6249ab45.png',
        v = a.p + 'haha.c0b42cb5.png',
        p = a.p + 'hmm.bc35b1e5.png',
        f = a('3rX5'),
        E = a.p + 'like.7a3e9685.png',
        b = a('kSIJ'),
        w = a('mJtw'),
        x = a.p + 'sad.f12709e5.png',
        _ = a('rHpw'),
        k = a('MWbm'),
        C =
          ((n = {}),
          h()(n, w.a.Like, E),
          h()(n, w.a.Haha, v),
          h()(n, w.a.Hmm, p),
          h()(n, w.a.Sad, x),
          h()(n, w.a.Cheer, y),
          n),
        z = _.a.create(function (e) {
          return {
            fillContainer: { height: '100%', width: '100%' },
            reactionSelectedIcon: u()({}, _.a.absoluteFillObject),
            imageCover: { position: 'absolute' },
          }
        }),
        H = function (e) {
          var t = e.reactionType
          return o.a.createElement(
            k.a,
            { style: z.fillContainer },
            o.a.createElement(f.a, { accessibilityLabel: b.a[t], source: C[t], style: z.reactionSelectedIcon }),
            o.a.createElement(k.a, { style: [z.reactionSelectedIcon, z.imageCover] }),
          )
        },
        M = a('DQLs'),
        L =
          ((c = {}),
          h()(c, w.a.Hmm, 'https://abs.twimg.com/sticky/animations/hmm.reaction.1.json'),
          h()(c, w.a.Sad, 'https://abs.twimg.com/sticky/animations/sad.reaction.1.json'),
          h()(c, w.a.Haha, 'https://abs.twimg.com/sticky/animations/haha.reaction.1.json'),
          h()(c, w.a.Cheer, 'https://abs.twimg.com/sticky/animations/cheer.reaction.1.json'),
          h()(c, w.a.Like, 'https://abs.twimg.com/sticky/animations/like.reaction.1.json'),
          c),
        B = function (e) {
          var t = e.reactionType,
            a = r.b.get(L[t])
          return (
            (a && 'boolean' != typeof a) || (a = L[t]), o.a.createElement(M.a, { animation: a, autoplay: !0, loop: !0 })
          )
        },
        j = function () {
          var e = window.navigator.deviceMemory
          return l.a.reducedMotionEnabled || s.a.isEnabled || (e && e < 4)
        },
        A = function (e) {
          var t = e.legacyHeart,
            a = e.reactionType,
            n = e.style,
            c = e.withAnimation,
            i = void 0 !== c && c,
            l = !j() && i ? B : H
          return t && a === w.a.Like
            ? o.a.createElement(k.a, { style: [D.root, D.legacyHeart, n] }, o.a.createElement(m.a, { style: D.root }))
            : o.a.createElement(k.a, { style: [D.root, n] }, o.a.createElement(l, { reactionType: a }))
        },
        D = _.a.create(function (e) {
          return { root: { height: '100%', width: '100%' }, legacyHeart: { color: e.colors.magenta500 } }
        }),
        F = function () {
          o.a.useEffect(function () {
            j() || (r.b.check(L.Hmm), r.b.check(L.Sad), r.b.check(L.Haha), r.b.check(L.Cheer), r.b.check(L.Like))
          }, [])
        }
      t.a = o.a.memo(A)
    },
    kSIJ: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return s
      })
      var n,
        c = a('KEM+'),
        i = a.n(c),
        o = a('3XMw'),
        l = a.n(o),
        r = a('mJtw'),
        s =
          ((n = {}),
          i()(n, r.a.Like, l.a.d636ebc6),
          i()(n, r.a.Haha, l.a.bd83592a),
          i()(n, r.a.Hmm, l.a.f84f0fa8),
          i()(n, r.a.Sad, l.a.g47ce0e4),
          i()(n, r.a.Cheer, l.a.fc8a13c5),
          n)
    },
    xrkw: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        c = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        l = a('Lsrn'),
        r = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(r.a)(
            'svg',
            c()(
              c()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M12 22c-.414 0-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v18.5c0 .414-.336.75-.75.75zm5.14 0c-.415 0-.75-.336-.75-.75V7.89c0-.415.335-.75.75-.75s.75.335.75.75v13.36c0 .414-.337.75-.75.75zM6.86 22c-.413 0-.75-.336-.75-.75V10.973c0-.414.337-.75.75-.75s.75.336.75.75V21.25c0 .414-.335.75-.75.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
  },
])
//# sourceMappingURL=WIPED
