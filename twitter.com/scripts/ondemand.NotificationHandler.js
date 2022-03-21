;(window.webpackJsonp = window.webpackJsonp || []).push([
  [227],
  {
    RfPh: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('ezF+'),
        c = a('VPAj'),
        i = a('ddV6'),
        l = a.n(i),
        r = (a('LW0h'), a('7x/C'), a('z84I'), a('7xRU'), a('ERkP')),
        o = a.n(r),
        s = a('v6aA'),
        u = a('vjRr'),
        m = a('hqKg'),
        d = a('NjAB'),
        y = a('3zvM'),
        g = a('lMB6'),
        h = a('kHBp'),
        v = a('kw0K'),
        f = a('XOJV'),
        p = a('G6rE'),
        E = Object(y.e)({ namespace: 'genericNotifications' })
      E.selectNotification = Object(m.createSelector)(
        E.selectAll,
        f.a.selectAll,
        p.e.selectAll,
        h.a.selectAll,
        u.a.selectAll,
        function (e, t) {
          return t
        },
        function (e, t, a, n, c, i) {
          return Object(d.a)(e[i], v.a, { cards: c, tweets: t, users: a, lists: n })
        },
      )
      var b = g.a.register(E),
        w = a('rxPX'),
        x = function (e, t) {
          return b.selectNotification(e, t.entry.content.id)
        },
        _ = function (e, t) {
          return t.module.selectIsUnread(e, t.entry.entryId)
        },
        C = Object(w.a)()
          .propsFromState(function () {
            return { notification: x, isUnread: _ }
          })
          .withAnalytics(),
        k = a('RoyM'),
        z = a('caTy'),
        M = a('rcen'),
        B = (a('hBvt'), a('t62R')),
        A = a('rHpw'),
        H = function (e) {
          var t = e.focused,
            a = e.link,
            n = e.onClick,
            c = e.template.aggregateUserActionsV1.showAllLinkText
          return c && a
            ? o.a.createElement(
                B.b,
                { link: a, nativeID: t ? 'notification-show-more-text' : void 0, onClick: n, style: D.showMore },
                c,
              )
            : null
        },
        D = A.a.create(function (e) {
          return { showMore: { marginTop: e.spaces.space12 } }
        }),
        F = a('qbku'),
        L = a('SQlS'),
        j = function (e) {
          var t = e.focused,
            a = e.text
          return o.a.createElement(M.a, {
            alignment: a.alignment,
            color: 'gray700',
            entities: a.entities,
            nativeID: t ? 'notification-additional-context' : void 0,
            rtl: a.rtl,
            text: a.text,
          })
        },
        O = a('MWbm'),
        I = a('cTG8'),
        R = function (e) {
          var t = e.focused,
            a = e.template.aggregateUserActionsV1,
            n = a.additionalContext,
            c = a.targetObjects.filter(function (e) {
              return e.tweet
            }),
            i = c.length ? c[0].tweet : null
          return i
            ? o.a.createElement(
                O.a,
                { style: V.target },
                (function (e) {
                  var a = e.retweeted_status || e
                  return o.a.createElement(I.a, {
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
            ? o.a.createElement(O.a, { style: V.target }, o.a.createElement(j, { focused: t, text: n.contextText }))
            : null
        },
        V = A.a.create(function (e) {
          return { target: { marginTop: e.spaces.space12 } }
        }),
        P = (a('M+/F'), a('jhWN')),
        T = function (e) {
          var t = e.userDecorations,
            a = e.users.slice(0, e.maxItems).filter(function (e) {
              return !!e
            })
          return o.a.createElement(
            O.a,
            { style: [G.root, 'center' === e.align && G.rootCenter, e.style] },
            a.map(function (a, n) {
              return o.a.createElement(P.a, {
                accessibilityHidden: !0,
                decoration: t && t[n],
                key: n,
                screenName: a.screen_name,
                size: 'large',
                style: [G.item, 0 === n && 'left' === e.align && G.itemLeftFirst],
                uri: a.profile_image_url_https,
                withHoverCard: !0,
                withLink: !0,
              })
            }),
          )
        }
      T.defaultProps = { align: 'left', maxItems: 10 }
      var G = A.a.create(function (e) {
          return {
            root: { flexWrap: 'wrap', flexDirection: 'row', overflow: 'hidden', height: e.spaces.space32 },
            rootCenter: { justifyContent: 'center' },
            item: { marginHorizontal: e.spaces.space4 },
            itemLeftFirst: { marginLeft: 0 },
          }
        }),
        U = T,
        S = a('de1q'),
        N = a('PbQQ'),
        Q = a('htQn'),
        K = a('5mJL'),
        J = a('xrkw'),
        W = a('RLww'),
        q = a('2qZs'),
        Y = a('cOhU'),
        Z = a('GCOQ'),
        X = a('uCrx'),
        $ = a('yiKp'),
        ee = a.n($),
        te = a('Lsrn'),
        ae = a('k/Ka'),
        ne = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ae.a)(
            'svg',
            ee()(
              ee()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [te.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M23 17.482c0 .549-.45.998-1 .998h-2.34v2.397c0 .549-.45.998-1 .998s-1-.449-1-.998V18.48h-2.34c-.56 0-1-.449-1-.998 0-.559.44-.998 1-.998h2.34v-2.406c0-.549.45-.998 1-.998s1 .449 1 .998v2.406H22c.55-.001 1 .439 1 .998z',
              }),
              o.a.createElement('path', {
                d: 'M21.01 7.507c0 1.498-.41 2.995-1.07 4.433-.37-.23-.81-.36-1.28-.36-1.38 0-2.5 1.118-2.5 2.496v.909h-.84c-1.38 0-2.5 1.108-2.5 2.496 0 .799.38 1.508.96 1.957-1.17.879-2.18 1.398-2.78 1.408-2.17-.04-10-6.82-10-13.34C1 4.74 3.24 2.124 6.01 2.124c3.08 0 4.75 3.105 4.99 3.455.24-.35 1.94-3.455 5-3.455 2.77.001 5.01 2.617 5.01 5.383z',
              }),
            ),
          )
        }
      ne.metadata = { width: 24, height: 24 }
      var ce = ne,
        ie = a('wpLu'),
        le = a('GcQN'),
        re = a('a5gf'),
        oe = a('YI7k'),
        se = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ae.a)(
            'svg',
            ee()(
              ee()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [te.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M8.18 5.317c-.067.067-.118.148-.16.236l-.006-.005-6.722 15.145.006.006c-.125.24.084.732.51 1.16.428.427.92.636 1.16.51l.007.007 15.145-6.722-.005-.005c.088-.042.17-.093.237-.16.937-.937-.582-3.973-3.39-6.782-2.81-2.81-5.845-4.328-6.782-3.39z',
                fill: '#E0245E',
              }),
              o.a.createElement('path', {
                d: 'M15.005 8.66c2.8 2.8 4.353 5.785 3.47 6.668-.883.883-3.868-.67-6.67-3.47-2.8-2.8-4.352-5.786-3.47-6.67.884-.882 3.87.672 6.67 3.472z',
                fill: '#A01744',
              }),
              o.a.createElement('path', {
                d: 'M15.186 12.756c-.176 0-.35-.077-.47-.225-.206-.258-.164-.635.095-.842.132-.105 3.25-2.553 7.653-1.923.328.047.556.35.51.678-.048.328-.35.557-.68.508-3.89-.552-6.705 1.652-6.732 1.674-.11.09-.243.132-.374.132z',
                fill: '#FFAD1F',
              }),
              o.a.createElement('path', {
                d: 'M20.177 14.654c1.182-.334 1.998.194 2.193.886.194.692-.227 1.568-1.408 1.9-.46.13-.6.35-.58.42.02.07.254.187.714.057 1.182-.332 1.998.195 2.192.887.196.692-.227 1.567-1.41 1.9-.46.13-.6.35-.58.42.02.07.254.187.716.058.318-.09.65.096.74.414.088.32-.098.65-.417.74-1.18.332-1.998-.194-2.193-.887-.194-.693.227-1.567 1.41-1.9.46-.13.6-.35.58-.42-.02-.07-.253-.188-.714-.058-1.183.333-1.998-.193-2.193-.886-.195-.692.227-1.566 1.41-1.9.46-.13.6-.35.58-.42-.02-.07-.253-.187-.715-.057-.32.09-.65-.097-.74-.415-.09-.32.096-.652.415-.74zM3.864 10.42c-.057 0-.115-.01-.173-.026-.316-.096-.496-.43-.4-.747.68-2.262 1.295-5.87.54-6.812-.087-.106-.214-.21-.507-.19-.563.044-.51 1.23-.508 1.242.025.33-.223.618-.553.643-.335.02-.618-.223-.642-.553-.062-.827.195-2.42 1.613-2.526.633-.047 1.16.173 1.53.635 1.42 1.77-.02 6.897-.325 7.907-.078.26-.317.427-.574.427z',
                fill: '#794BC4',
              }),
              o.a.createElement('circle', { cx: '1.826', cy: '12.857', fill: '#FFAD1F', r: '1.076' }),
              o.a.createElement('circle', { cx: '17.702', cy: '6.814', fill: '#E0245E', r: '.899' }),
              o.a.createElement('circle', { cx: '15.628', cy: '20.377', fill: '#DF235F', r: '1.064' }),
              o.a.createElement('circle', { cx: '21.878', cy: '5.9', fill: '#FFAD1F', r: '1.004' }),
              o.a.createElement('circle', { cx: '18.458', cy: '2.733', fill: '#E0245E', r: '1.199' }),
              o.a.createElement('path', {
                d: 'M12.313 8.463c-.12.096-.275.147-.44.13-.52-.057-.958-.238-1.264-.524-.325-.304-.485-.71-.442-1.117.077-.714.794-1.37 2.016-1.238.476.05.688-.102.695-.175.007-.073-.167-.268-.642-.32-.52-.055-.958-.236-1.265-.522-.324-.303-.485-.71-.44-1.116.078-.715.794-1.37 2.015-1.238.347.037.53-.034.606-.08.062-.04.087-.075.09-.096.006-.072-.166-.267-.643-.32-.328-.035-.567-.33-.53-.66.035-.328.33-.566.66-.53 1.22.13 1.782.924 1.705 1.64-.077.714-.794 1.37-2.016 1.237-.347-.038-.53.034-.607.08-.06.037-.087.074-.09.094-.007.072.167.267.643.318 1.22.132 1.782.925 1.705 1.64-.076.715-.793 1.37-2.014 1.238-.347-.037-.53.035-.606.08-.062.04-.086.075-.088.096-.008.073.166.267.642.32.33.035.568.33.53.66-.02.163-.102.304-.22.4z',
                fill: '#FFAD1F',
              }),
            ),
          )
        }
      se.metadata = { width: 24, height: 24 }
      var ue = se,
        me = a('6ZHn'),
        de = a('AtEG'),
        ye = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ae.a)(
            'svg',
            ee()(
              ee()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [te.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M20.222 10.66H3.5v-1.5h13.64c.152 0 .277-.124.277-.277V6.57c0-.153-.125-.277-.278-.277H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-2.934h10.556c.153 0 .278-.124.278-.277v-2.313c0-.153-.125-.278-.278-.278H3.5v-1.5h16.722c.153 0 .278-.125.278-.278v-2.31c0-.155-.125-.28-.278-.28z',
              }),
            ),
          )
        }
      ye.metadata = { width: 24, height: 24 }
      var ge = ye,
        he = a('yVEN'),
        ve = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ae.a)(
            'svg',
            ee()(
              ee()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [te.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M22.99 11.295l-6.986-2.13-.877-.326-.325-.88L12.67.975c-.092-.303-.372-.51-.688-.51-.316 0-.596.207-.688.51l-2.392 7.84-1.774.657-6.148 1.82c-.306.092-.515.372-.515.69 0 .32.21.6.515.69l7.956 2.358 2.356 7.956c.09.306.37.515.69.515.32 0 .6-.21.69-.514l1.822-6.15.656-1.773 7.84-2.392c.303-.09.51-.37.51-.687 0-.316-.207-.596-.51-.688z',
                fill: '#794BC4',
              }),
            ),
          )
        }
      ve.metadata = { width: 24, height: 24 }
      var fe = ve,
        pe = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ae.a)(
            'svg',
            ee()(
              ee()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [te.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M12 1.75c-.138 0-.276.038-.398.114-.044.028-4.515 2.8-9.21 3.494-.362.053-.632.358-.642.723-.003.118-.188 11.742 9.938 16.353.1.045.206.067.312.067V1.75z',
                fill: '#1DA1F2',
              }),
              o.a.createElement('path', {
                d: 'M12 1.75c.138 0 .276.038.398.114.044.028 4.515 2.8 9.21 3.494.362.053.632.358.64.723.004.118.19 11.742-9.937 16.353-.098.045-.204.067-.31.067V1.75z',
                fill: '#78C6EE',
              }),
            ),
          )
        }
      pe.metadata = { width: 24, height: 24 }
      var Ee = pe,
        be = a('EHV7'),
        we = a('lUZE'),
        xe = a('Hp3u'),
        _e = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ae.a)(
            'svg',
            ee()(
              ee()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [te.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M21.6 3.18C15.59-.06 8.4-.06 2.39 3.18c-.24.13-.39.39-.39.65v8.56c0 8.54 9.73 10.82 9.83 10.84.05.02.11.02.17.02.05 0 .11 0 .16-.02.1-.02 9.84-2.3 9.84-10.84V3.83c0-.26-.16-.52-.4-.65zM16.67 13.8c-.65.66-1.55 1.06-2.55 1.06H9.87c-2 0-3.61-1.62-3.61-3.6 0-.99.4-1.9 1.05-2.55.66-.64 1.56-1.05 2.56-1.05h4.25c2 0 3.61 1.61 3.61 3.6 0 .99-.4 1.89-1.06 2.54z',
              }),
              o.a.createElement('path', {
                d: 'M12.08 11.26c0 1.21-.98 2.2-2.2 2.2-1.21 0-2.2-.99-2.2-2.2 0-1.22.99-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2z',
              }),
            ),
          )
        }
      _e.metadata = { width: 24, height: 24 }
      var Ce = _e,
        ke = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ae.a)(
            'svg',
            ee()(
              ee()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [te.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M23.098 17.97l-8.62-14.93c-.54-.94-1.51-1.5-2.6-1.5h-.02c-1.09 0-2.06.58-2.6 1.53L.888 18c-.53.94-.52 2.06.03 2.99.54.92 1.49 1.47 2.55 1.47h17.07c1.06 0 2.02-.55 2.56-1.48.54-.94.54-2.07 0-3.01z',
                fill: '#F4212E',
              }),
              o.a.createElement('path', {
                d: 'M11.998 18.89c-.76 0-1.38-.62-1.38-1.38s.62-1.37 1.38-1.37 1.37.61 1.37 1.37-.61 1.38-1.37 1.38zm1.72-9.03l-.93 4.39c-.07.38-.4.64-.79.64s-.71-.26-.8-.64l-.93-4.39c-.1-.52.03-1.06.36-1.47.67-.83 2.07-.83 2.74 0 .33.41.46.95.35 1.47z',
                fill: '#FFF',
              }),
            ),
          )
        }
      ke.metadata = { width: 24, height: 24 }
      var ze = ke,
        Me = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ae.a)(
            'svg',
            ee()(
              ee()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [te.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75z',
                fill: '#FFAD1F',
              }),
              o.a.createElement('path', {
                d: 'M12 16.3c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1zm0-10.6c-2.3 0-4.2 1.9-4.2 4.2 0 .4.3.8.8.8s.8-.3.8-.8c0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-.4 0-.8.3-.8.8v1.1c0 .4.3.8.8.8s.8-.3.8-.8v-.4c2-.4 3.4-2.1 3.4-4.1-.2-2.4-2-4.3-4.3-4.3z',
                fill: '#14171A',
              }),
            ),
          )
        }
      Me.metadata = { width: 24, height: 24 }
      var Be = Me,
        Ae = a('EyD/'),
        He = a('0weh'),
        De = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ae.a)(
            'svg',
            ee()(
              ee()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [te.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M12 22.75c-1.484 0-2.827-.753-3.636-2-.295.062-.6.095-.91.095-2.417 0-4.385-2.045-4.385-4.56v-.11c-1.133-.852-1.82-2.228-1.82-3.697 0-1.538.723-2.935 1.92-3.776-.067-.323-.102-.653-.102-.987 0-2.514 1.968-4.56 4.386-4.56.312 0 .616.033.91.097.81-1.25 2.152-2.002 3.636-2.002 1.46 0 2.826.77 3.634 2.002.294-.063.6-.096.912-.096 2.418 0 4.386 2.045 4.386 4.56 0 .333-.034.663-.102.985 1.198.843 1.92 2.24 1.92 3.777 0 1.468-.687 2.844-1.82 3.696v.112c0 2.514-1.967 4.56-4.385 4.56-.31 0-.616-.033-.91-.098-.81 1.234-2.175 2.003-3.635 2.003zm-3.273-3.642c.284 0 .553.162.68.434.49 1.054 1.484 1.708 2.593 1.708 1.11 0 2.104-.654 2.593-1.707.167-.36.583-.528.954-.383.312.122.648.185 1 .185 1.59 0 2.885-1.372 2.885-3.06 0-.136-.01-.268-.027-.4-.036-.294.106-.582.362-.733.915-.543 1.483-1.567 1.483-2.674 0-1.17-.642-2.255-1.636-2.762-.335-.17-.492-.563-.366-.918.122-.345.184-.71.184-1.083 0-1.687-1.295-3.06-2.886-3.06-.353 0-.688.063-.996.186-.368.148-.79-.02-.957-.38-.49-1.055-1.483-1.71-2.593-1.71-1.11 0-2.103.655-2.593 1.71-.168.36-.587.53-.958.38-.308-.122-.642-.184-.995-.184-1.59 0-2.886 1.372-2.886 3.06 0 .372.06.737.183 1.082.125.354-.03.747-.366.918-.994.508-1.636 1.592-1.636 2.762 0 1.107.57 2.132 1.482 2.673.255.152.397.44.362.734-.016.133-.025.266-.025.402 0 1.687 1.294 3.06 2.885 3.06.35 0 .687-.063.998-.186.09-.035.182-.052.274-.052z',
              }),
              o.a.createElement('path', {
                d: 'M15.416 8.376c-.345-.23-.81-.137-1.04.208l-3.493 5.24L9.3 12.24c-.292-.293-.767-.293-1.06 0s-.293.768 0 1.06l2.23 2.23.113.094c.128.085.272.126.416.126.24 0 .48-.117.624-.334l4-6c.23-.345.137-.81-.208-1.04z',
              }),
            ),
          )
        }
      De.metadata = { width: 24, height: 24 }
      var Fe = De,
        Le = a('A7Fw'),
        je = 'notification-message-text',
        Oe = 'notification-tweet-text',
        Ie = 'notification-show-more-text',
        Re = 'notification-additional-context',
        Ve = A.a.create(function (e) {
          return {
            root: {
              cursor: 'pointer',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            isTweet: { padding: 0 },
            unread: { backgroundColor: e.colors.unreadCellBackground },
            itemIcon: { alignItems: 'flex-end' },
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
        Pe = o.a.createElement(J.a, { style: [Ve.colorPurple, Ve.icon] }),
        Te = o.a.createElement(W.a, { style: [Ve.colorBlue, Ve.icon] }),
        Ge = o.a.createElement(q.a, { style: [Ve.colorBlue, Ve.icon] }),
        Ue = o.a.createElement(Y.a, { style: [Ve.colorBlue, Ve.icon] }),
        Se = o.a.createElement(Z.a, { style: [Ve.colorRed, Ve.icon] }),
        Ne = o.a.createElement(X.a, { style: [Ve.colorRed, Ve.icon] }),
        Qe = o.a.createElement(ce, { style: [Ve.colorRed, Ve.icon] }),
        Ke = o.a.createElement(ie.a, { style: [Ve.colorDeepGray, Ve.icon] }),
        Je = o.a.createElement(le.a, { style: [Ve.colorBlue, Ve.icon] }),
        We = o.a.createElement(re.a, { style: [Ve.colorDeepGray, Ve.icon] }),
        qe = o.a.createElement(oe.a, { style: [Ve.colorDeepGray, Ve.icon] }),
        Ye = o.a.createElement(ue, { style: Ve.icon }),
        Ze = o.a.createElement(me.a, { style: [Ve.colorBlue, Ve.icon] }),
        Xe = o.a.createElement(de.a, { style: [Ve.colorBlue, Ve.icon] }),
        $e = o.a.createElement(ge, { style: [Ve.colorDeepGray, Ve.icon] }),
        et = o.a.createElement(he.a, { style: [Ve.colorGreen, Ve.icon] }),
        tt = o.a.createElement(fe, { style: Ve.icon }),
        at = o.a.createElement(Ee, { style: Ve.icon }),
        nt = o.a.createElement(L.a, { style: Ve.icon }),
        ct = o.a.createElement(be.a, { style: [Ve.colorPrimary, Ve.icon] }),
        it = o.a.createElement(we.a, { style: [Ve.twitterIcon, Ve.icon] }),
        lt = o.a.createElement(xe.a, { style: [Ve.colorOrange, Ve.icon] }),
        rt = o.a.createElement(Ce, { style: [Ve.colorOrange, Ve.icon] }),
        ot = o.a.createElement(ze, { style: Ve.icon }),
        st = o.a.createElement(Be, { style: Ve.icon }),
        ut = o.a.createElement(Ae.a, { style: [Ve.colorPlum, Ve.icon] }),
        mt = o.a.createElement(He.a, { style: [Ve.colorRed, Ve.icon] }),
        dt = o.a.createElement(Fe, { style: [Ve.colorBlue, Ve.icon] }),
        yt = o.a.createElement(Le.a, { style: [Ve.colorBlue, Ve.icon] }),
        gt = {
          alert_bell_icon: Te,
          bar_chart_icon: Pe,
          bell_icon: Te,
          birdwatch_icon: Ge,
          bird_icon: it,
          communities_icon: Ue,
          conversation_bubble_icon: lt,
          heart_icon: Ne,
          heart_plus_icon: Qe,
          histogram_icon: $e,
          lightning_bolt_icon: Je,
          list_icon: Ke,
          lock_icon: We,
          magic_rec_icon: it,
          milestone_icon: Ye,
          news_icon: qe,
          person_icon: Ze,
          play_icon: Xe,
          reply_icon: lt,
          report_icon: Se,
          recommendation_icon: tt,
          retweet_icon: et,
          safety_icon: at,
          security_alert_icon: ot,
          security_unknown_icon: st,
          shield_icon: rt,
          spaces_icon: nt,
          stacked_cards_icon: it,
          super_follows_icon: ut,
          super_follows_error_icon: mt,
          topic_icon: ct,
          trending_icon: it,
          verified_general_icon: dt,
          verified_notable_icon: yt,
        },
        ht = function (e) {
          var t = o.a.useContext(s.a).featureSwitches,
            a = o.a.useState(!1),
            n = l()(a, 2),
            c = n[0],
            i = n[1],
            r = e.analytics,
            u = e.entry.content,
            m = e.feedbackItems,
            d = e.isUnread,
            y = e.notification
          o.a.useEffect(function () {
            r.scribeAction('impression')
          }, [])
          var g = o.a.useCallback(
              function () {
                r.scribeAction('navigate')
              },
              [r],
            ),
            h = o.a.useCallback(
              function () {
                i(!0)
              },
              [i],
            ),
            v = o.a.useCallback(
              function () {
                i(!1)
              },
              [i],
            )
          if (!y) return null
          var f = y.icon,
            p = y.message,
            E = y.template,
            b = u.url && Object(z.b)(u.url),
            w = u.socialContext && u.socialContext.generalContext && u.socialContext.generalContext,
            x = t.isTrue('responsive_web_reactions_legacy_heart'),
            _ = m ? o.a.createElement(k.a, { feedbackItems: m }) : null,
            C = E.aggregateUserActionsV1.fromUsers
              .map(function (e) {
                return e.user
              })
              .filter(Boolean),
            B = E.aggregateUserActionsV1.fromUsers
              .map(function (e) {
                return e.reactionType
              })
              .filter(Boolean),
            A = B.length
              ? B.map(function (e) {
                  return o.a.createElement(S.a, {
                    legacyHeart: x,
                    reactionType: e,
                    style: Ve.avatarDecoration,
                    withAnimation: !1,
                  })
                })
              : void 0,
            D = _ && !C.length && !w,
            L = f && f.id && gt[f.id] ? gt[f.id] : it,
            j = b && ('string' == typeof b ? { pathname: b } : b)
          return o.a.createElement(N.a.Consumer, null, function (e) {
            return o.a.createElement(
              Q.a,
              {
                accessibilityLabelledBy: c ? [je, Oe, Ie, Re].join(' ') : void 0,
                accessibilityRole: 'article',
                link: j ? e.withAnchorless(j) : void 0,
                onBlur: v,
                onClick: g,
                onFocus: h,
                style: [Ve.root, d && Ve.unread],
              },
              w
                ? o.a.createElement(F.a, {
                    contextType: w.contextType,
                    link: w.landingUrl ? Object(z.b)(w.landingUrl) : void 0,
                    style: Ve.socialContext,
                    text: w.text,
                  })
                : null,
              o.a.createElement(
                K.a,
                {
                  avatarCell: L,
                  avatarCellStyle: Ve.itemIcon,
                  cellStyle: [Ve.itemContent, Ve.timelineRowText, D && Ve.curationPadding],
                },
                C.length
                  ? o.a.createElement(
                      O.a,
                      { style: Ve.userAvatarList },
                      o.a.createElement(U, { userDecorations: A, users: C }),
                    )
                  : null,
                o.a.createElement(M.a, {
                  alignment: p.alignment,
                  entities: p.entities,
                  nativeID: c ? je : void 0,
                  rtl: p.rtl,
                  text: p.text,
                }),
                o.a.createElement(R, { focused: c, template: E }),
                o.a.createElement(H, { focused: c, link: b, template: E }),
              ),
              _ ? o.a.createElement(O.a, { style: Ve.curationControl }, _) : null,
            )
          })
        },
        vt = C(o.a.memo(ht)),
        ft = a('Rp9C'),
        pt = n
          .b({
            isFocusable: Object(c.a)(!0),
            component: vt,
            shouldDisplayBorder: Object(c.a)(!0),
            getScribeDataItem: function (e) {
              var t = e.itemMetadata.clientEventInfo
              return ft.a.getAllSurfaceDetails(t)
            },
          })
          .getHandler()
      t.default = pt
    },
    RoyM: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        c = a.n(n),
        i = (a('lTEL'), a('7x/C'), a('JtPf'), a('87if'), a('kYxP'), a('zb92')),
        l = Object(i.a)({
          loader: function () {
            return a.e(174).then(a.bind(null, 'ACNv'))
          },
        }),
        r = a('4bW+'),
        o = a('IG7M'),
        s = a('rHpw'),
        u = a('Irs7'),
        m = s.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(u.a)(function (e) {
        var t = e.analytics,
          a = e.feedbackItems,
          n = e.isDisplayedOnMedia
        if (a && a.length > 0) {
          return c.a.createElement(o.a, {
            onClick: function () {
              return t.scribe({ element: 'caret', action: 'click' })
            },
            renderActionMenu: function (e) {
              return c.a.createElement(l, { actionItems: a, onClose: e })
            },
            style: m.curationControl,
            testID: r.a.caret,
            withDarkBackground: n,
          })
        }
        return null
      })
    },
    YI7k: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        c = a.n(n),
        i = a('ERkP'),
        l = a.n(i),
        r = a('Lsrn'),
        o = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(o.a)(
            'svg',
            c()(
              c()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [r.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
                d: 'M21.5 11.25h-3.25v-7C18.25 3.01 17.24 2 16 2H4C2.76 2 1.75 3.01 1.75 4.25v15.5C1.75 20.99 2.76 22 4 22h15.5c1.517 0 2.75-1.233 2.75-2.75V12c0-.414-.336-.75-.75-.75zm-10.75 5.5H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.75c.414 0 .75.336.75.75s-.336.75-.75.75zm3.25-4H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8c.414 0 .75.336.75.75s-.336.75-.75.75zm0-4H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8c.414 0 .75.336.75.75s-.336.75-.75.75zm6.75 10.5c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-6.5h2.5v6.5z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
  },
])
//# sourceMappingURL=WIPED
