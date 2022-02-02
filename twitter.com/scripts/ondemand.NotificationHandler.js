;(window.webpackJsonp = window.webpackJsonp || []).push([
  [220],
  {
    RfPh: function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r('ezF+'),
        c = r('VPAj'),
        a = r('ddV6'),
        o = r.n(a),
        i = (r('LW0h'), r('z84I'), r('7xRU'), r('ERkP')),
        l = r.n(i),
        s = r('v6aA'),
        u = r('vjRr'),
        p = r('hqKg'),
        y = r('NjAB'),
        f = r('3zvM'),
        b = r('lMB6'),
        m = r('kHBp'),
        g = r('kw0K'),
        d = r('XOJV'),
        O = r('G6rE'),
        v = Object(f.f)({ namespace: 'genericNotifications' })
      v.selectNotification = Object(p.createSelector)(
        v.selectAll,
        d.a.selectAll,
        O.e.selectAll,
        m.a.selectAll,
        u.a.selectAll,
        function (e, t) {
          return t
        },
        function (e, t, r, n, c, a) {
          return Object(y.a)(e[a], g.a, { cards: c, tweets: t, users: r, lists: n })
        },
      )
      var h = b.a.register(v),
        j = r('rxPX'),
        w = function (e, t) {
          return h.selectNotification(e, t.entry.content.id)
        },
        E = function (e, t) {
          return t.module.selectIsUnread(e, t.entry.entryId)
        },
        P = Object(j.a)()
          .propsFromState(function () {
            return { notification: w, isUnread: E }
          })
          .withAnalytics(),
        D = r('RoyM'),
        x = r('caTy'),
        _ = r('rcen'),
        k = (r('hBvt'), r('t62R')),
        C = r('rHpw'),
        M = function (e) {
          var t = e.focused,
            r = e.link,
            n = e.onClick,
            c = e.template.aggregateUserActionsV1.showAllLinkText
          return c && r
            ? l.a.createElement(
                k.b,
                { link: r, nativeID: t ? 'notification-show-more-text' : void 0, onClick: n, style: z.showMore },
                c,
              )
            : null
        },
        z = C.a.create(function (e) {
          return { showMore: { marginTop: e.spaces.space12 } }
        }),
        H = r('qbku'),
        B = r('SQlS'),
        A = function (e) {
          var t = e.focused,
            r = e.text
          return l.a.createElement(_.a, {
            alignment: r.alignment,
            color: 'gray700',
            entities: r.entities,
            nativeID: t ? 'notification-additional-context' : void 0,
            rtl: r.rtl,
            text: r.text,
          })
        },
        F = r('MWbm'),
        S = r('cTG8'),
        L = function (e) {
          var t = e.focused,
            r = e.template.aggregateUserActionsV1,
            n = r.additionalContext,
            c = r.targetObjects.filter(function (e) {
              return e.tweet
            }),
            a = c.length ? c[0].tweet : null
          return a
            ? l.a.createElement(
                F.a,
                { style: I.target },
                (function (e) {
                  var r = e.retweeted_status || e
                  return l.a.createElement(S.a, {
                    color: 'gray700',
                    displayTextRange: r.display_text_range,
                    entities: r.entities,
                    lang: r.lang,
                    nativeID: t ? 'notification-tweet-text' : void 0,
                    text: r.text,
                    withMediaLinks: !0,
                    withQuoteLinks: !0,
                  })
                })(a),
              )
            : n && n.contextText
            ? l.a.createElement(F.a, { style: I.target }, l.a.createElement(A, { focused: t, text: n.contextText }))
            : null
        },
        I = C.a.create(function (e) {
          return { target: { marginTop: e.spaces.space12 } }
        }),
        R = (r('M+/F'), r('jhWN')),
        V = function (e) {
          var t = e.userDecorations,
            r = e.users.slice(0, e.maxItems).filter(function (e) {
              return !!e
            })
          return l.a.createElement(
            F.a,
            { style: [T.root, 'center' === e.align && T.rootCenter, e.style] },
            r.map(function (r, n) {
              return l.a.createElement(R.a, {
                accessibilityHidden: !0,
                decoration: t && t[n],
                key: n,
                screenName: r.screen_name,
                size: 'large',
                style: [T.item, 0 === n && 'left' === e.align && T.itemLeftFirst],
                uri: r.profile_image_url_https,
                withHoverCard: !0,
                withLink: !0,
              })
            }),
          )
        }
      V.defaultProps = { align: 'left', maxItems: 10 }
      var T = C.a.create(function (e) {
          return {
            root: { flexWrap: 'wrap', flexDirection: 'row', overflow: 'hidden', height: e.spaces.space32 },
            rootCenter: { justifyContent: 'center' },
            item: { marginHorizontal: e.spaces.space4 },
            itemLeftFirst: { marginLeft: 0 },
          }
        }),
        G = V,
        U = r('de1q'),
        N = r('PbQQ'),
        K = r('htQn'),
        Q = r('5mJL'),
        W = r('xrkw'),
        J = r('RLww'),
        Z = r('2qZs'),
        q = r('cOhU'),
        X = r('GCOQ'),
        Y = r('uCrx'),
        $ = (r('+KXO'), r('1t7P'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('KEM+')),
        ee = r.n($),
        te = r('Lsrn'),
        re = r('k/Ka')
      function ne(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function ce(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ne(Object(r), !0).forEach(function (t) {
                ee()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ne(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var ae = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(re.a)(
          'svg',
          ce(
            ce({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [te.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          l.a.createElement(
            'g',
            null,
            l.a.createElement('path', {
              d: 'M23 17.482c0 .549-.45.998-1 .998h-2.34v2.397c0 .549-.45.998-1 .998s-1-.449-1-.998V18.48h-2.34c-.56 0-1-.449-1-.998 0-.559.44-.998 1-.998h2.34v-2.406c0-.549.45-.998 1-.998s1 .449 1 .998v2.406H22c.55-.001 1 .439 1 .998z',
            }),
            l.a.createElement('path', {
              d: 'M21.01 7.507c0 1.498-.41 2.995-1.07 4.433-.37-.23-.81-.36-1.28-.36-1.38 0-2.5 1.118-2.5 2.496v.909h-.84c-1.38 0-2.5 1.108-2.5 2.496 0 .799.38 1.508.96 1.957-1.17.879-2.18 1.398-2.78 1.408-2.17-.04-10-6.82-10-13.34C1 4.74 3.24 2.124 6.01 2.124c3.08 0 4.75 3.105 4.99 3.455.24-.35 1.94-3.455 5-3.455 2.77.001 5.01 2.617 5.01 5.383z',
            }),
          ),
        )
      }
      ae.metadata = { width: 24, height: 24 }
      var oe = ae,
        ie = r('wpLu'),
        le = r('GcQN'),
        se = r('a5gf'),
        ue = r('YI7k')
      function pe(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function ye(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? pe(Object(r), !0).forEach(function (t) {
                ee()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : pe(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var fe = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(re.a)(
          'svg',
          ye(
            ye({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [te.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          l.a.createElement(
            'g',
            null,
            l.a.createElement('path', {
              d: 'M8.18 5.317c-.067.067-.118.148-.16.236l-.006-.005-6.722 15.145.006.006c-.125.24.084.732.51 1.16.428.427.92.636 1.16.51l.007.007 15.145-6.722-.005-.005c.088-.042.17-.093.237-.16.937-.937-.582-3.973-3.39-6.782-2.81-2.81-5.845-4.328-6.782-3.39z',
              fill: '#E0245E',
            }),
            l.a.createElement('path', {
              d: 'M15.005 8.66c2.8 2.8 4.353 5.785 3.47 6.668-.883.883-3.868-.67-6.67-3.47-2.8-2.8-4.352-5.786-3.47-6.67.884-.882 3.87.672 6.67 3.472z',
              fill: '#A01744',
            }),
            l.a.createElement('path', {
              d: 'M15.186 12.756c-.176 0-.35-.077-.47-.225-.206-.258-.164-.635.095-.842.132-.105 3.25-2.553 7.653-1.923.328.047.556.35.51.678-.048.328-.35.557-.68.508-3.89-.552-6.705 1.652-6.732 1.674-.11.09-.243.132-.374.132z',
              fill: '#FFAD1F',
            }),
            l.a.createElement('path', {
              d: 'M20.177 14.654c1.182-.334 1.998.194 2.193.886.194.692-.227 1.568-1.408 1.9-.46.13-.6.35-.58.42.02.07.254.187.714.057 1.182-.332 1.998.195 2.192.887.196.692-.227 1.567-1.41 1.9-.46.13-.6.35-.58.42.02.07.254.187.716.058.318-.09.65.096.74.414.088.32-.098.65-.417.74-1.18.332-1.998-.194-2.193-.887-.194-.693.227-1.567 1.41-1.9.46-.13.6-.35.58-.42-.02-.07-.253-.188-.714-.058-1.183.333-1.998-.193-2.193-.886-.195-.692.227-1.566 1.41-1.9.46-.13.6-.35.58-.42-.02-.07-.253-.187-.715-.057-.32.09-.65-.097-.74-.415-.09-.32.096-.652.415-.74zM3.864 10.42c-.057 0-.115-.01-.173-.026-.316-.096-.496-.43-.4-.747.68-2.262 1.295-5.87.54-6.812-.087-.106-.214-.21-.507-.19-.563.044-.51 1.23-.508 1.242.025.33-.223.618-.553.643-.335.02-.618-.223-.642-.553-.062-.827.195-2.42 1.613-2.526.633-.047 1.16.173 1.53.635 1.42 1.77-.02 6.897-.325 7.907-.078.26-.317.427-.574.427z',
              fill: '#794BC4',
            }),
            l.a.createElement('circle', { cx: '1.826', cy: '12.857', fill: '#FFAD1F', r: '1.076' }),
            l.a.createElement('circle', { cx: '17.702', cy: '6.814', fill: '#E0245E', r: '.899' }),
            l.a.createElement('circle', { cx: '15.628', cy: '20.377', fill: '#DF235F', r: '1.064' }),
            l.a.createElement('circle', { cx: '21.878', cy: '5.9', fill: '#FFAD1F', r: '1.004' }),
            l.a.createElement('circle', { cx: '18.458', cy: '2.733', fill: '#E0245E', r: '1.199' }),
            l.a.createElement('path', {
              d: 'M12.313 8.463c-.12.096-.275.147-.44.13-.52-.057-.958-.238-1.264-.524-.325-.304-.485-.71-.442-1.117.077-.714.794-1.37 2.016-1.238.476.05.688-.102.695-.175.007-.073-.167-.268-.642-.32-.52-.055-.958-.236-1.265-.522-.324-.303-.485-.71-.44-1.116.078-.715.794-1.37 2.015-1.238.347.037.53-.034.606-.08.062-.04.087-.075.09-.096.006-.072-.166-.267-.643-.32-.328-.035-.567-.33-.53-.66.035-.328.33-.566.66-.53 1.22.13 1.782.924 1.705 1.64-.077.714-.794 1.37-2.016 1.237-.347-.038-.53.034-.607.08-.06.037-.087.074-.09.094-.007.072.167.267.643.318 1.22.132 1.782.925 1.705 1.64-.076.715-.793 1.37-2.014 1.238-.347-.037-.53.035-.606.08-.062.04-.086.075-.088.096-.008.073.166.267.642.32.33.035.568.33.53.66-.02.163-.102.304-.22.4z',
              fill: '#FFAD1F',
            }),
          ),
        )
      }
      fe.metadata = { width: 24, height: 24 }
      var be = fe,
        me = r('6ZHn'),
        ge = r('AtEG')
      function de(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? de(Object(r), !0).forEach(function (t) {
                ee()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : de(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var ve = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(re.a)(
          'svg',
          Oe(
            Oe({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [te.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          l.a.createElement(
            'g',
            null,
            l.a.createElement('path', {
              d: 'M20.222 10.66H3.5v-1.5h13.64c.152 0 .277-.124.277-.277V6.57c0-.153-.125-.277-.278-.277H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-2.934h10.556c.153 0 .278-.124.278-.277v-2.313c0-.153-.125-.278-.278-.278H3.5v-1.5h16.722c.153 0 .278-.125.278-.278v-2.31c0-.155-.125-.28-.278-.28z',
            }),
          ),
        )
      }
      ve.metadata = { width: 24, height: 24 }
      var he = ve,
        je = r('yVEN')
      function we(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? we(Object(r), !0).forEach(function (t) {
                ee()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : we(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Pe = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(re.a)(
          'svg',
          Ee(
            Ee({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [te.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          l.a.createElement(
            'g',
            null,
            l.a.createElement('path', {
              d: 'M22.99 11.295l-6.986-2.13-.877-.326-.325-.88L12.67.975c-.092-.303-.372-.51-.688-.51-.316 0-.596.207-.688.51l-2.392 7.84-1.774.657-6.148 1.82c-.306.092-.515.372-.515.69 0 .32.21.6.515.69l7.956 2.358 2.356 7.956c.09.306.37.515.69.515.32 0 .6-.21.69-.514l1.822-6.15.656-1.773 7.84-2.392c.303-.09.51-.37.51-.687 0-.316-.207-.596-.51-.688z',
              fill: '#794BC4',
            }),
          ),
        )
      }
      Pe.metadata = { width: 24, height: 24 }
      var De = Pe
      function xe(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function _e(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? xe(Object(r), !0).forEach(function (t) {
                ee()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : xe(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var ke = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(re.a)(
          'svg',
          _e(
            _e({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [te.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          l.a.createElement(
            'g',
            null,
            l.a.createElement('path', {
              d: 'M12 1.75c-.138 0-.276.038-.398.114-.044.028-4.515 2.8-9.21 3.494-.362.053-.632.358-.642.723-.003.118-.188 11.742 9.938 16.353.1.045.206.067.312.067V1.75z',
              fill: '#1DA1F2',
            }),
            l.a.createElement('path', {
              d: 'M12 1.75c.138 0 .276.038.398.114.044.028 4.515 2.8 9.21 3.494.362.053.632.358.64.723.004.118.19 11.742-9.937 16.353-.098.045-.204.067-.31.067V1.75z',
              fill: '#78C6EE',
            }),
          ),
        )
      }
      ke.metadata = { width: 24, height: 24 }
      var Ce = ke,
        Me = r('EHV7'),
        ze = r('lUZE'),
        He = r('Hp3u')
      function Be(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Be(Object(r), !0).forEach(function (t) {
                ee()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Be(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Fe = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(re.a)(
          'svg',
          Ae(
            Ae({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [te.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          l.a.createElement(
            'g',
            null,
            l.a.createElement('path', {
              d: 'M21.6 3.18C15.59-.06 8.4-.06 2.39 3.18c-.24.13-.39.39-.39.65v8.56c0 8.54 9.73 10.82 9.83 10.84.05.02.11.02.17.02.05 0 .11 0 .16-.02.1-.02 9.84-2.3 9.84-10.84V3.83c0-.26-.16-.52-.4-.65zM16.67 13.8c-.65.66-1.55 1.06-2.55 1.06H9.87c-2 0-3.61-1.62-3.61-3.6 0-.99.4-1.9 1.05-2.55.66-.64 1.56-1.05 2.56-1.05h4.25c2 0 3.61 1.61 3.61 3.6 0 .99-.4 1.89-1.06 2.54z',
            }),
            l.a.createElement('path', {
              d: 'M12.08 11.26c0 1.21-.98 2.2-2.2 2.2-1.21 0-2.2-.99-2.2-2.2 0-1.22.99-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2z',
            }),
          ),
        )
      }
      Fe.metadata = { width: 24, height: 24 }
      var Se = Fe
      function Le(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Le(Object(r), !0).forEach(function (t) {
                ee()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Le(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Re = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(re.a)(
          'svg',
          Ie(
            Ie({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [te.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          l.a.createElement(
            'g',
            null,
            l.a.createElement('path', {
              d: 'M23.098 17.97l-8.62-14.93c-.54-.94-1.51-1.5-2.6-1.5h-.02c-1.09 0-2.06.58-2.6 1.53L.888 18c-.53.94-.52 2.06.03 2.99.54.92 1.49 1.47 2.55 1.47h17.07c1.06 0 2.02-.55 2.56-1.48.54-.94.54-2.07 0-3.01z',
              fill: '#F4212E',
            }),
            l.a.createElement('path', {
              d: 'M11.998 18.89c-.76 0-1.38-.62-1.38-1.38s.62-1.37 1.38-1.37 1.37.61 1.37 1.37-.61 1.38-1.37 1.38zm1.72-9.03l-.93 4.39c-.07.38-.4.64-.79.64s-.71-.26-.8-.64l-.93-4.39c-.1-.52.03-1.06.36-1.47.67-.83 2.07-.83 2.74 0 .33.41.46.95.35 1.47z',
              fill: '#FFF',
            }),
          ),
        )
      }
      Re.metadata = { width: 24, height: 24 }
      var Ve = Re
      function Te(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Ge(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Te(Object(r), !0).forEach(function (t) {
                ee()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Te(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Ue = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(re.a)(
          'svg',
          Ge(
            Ge({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [te.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          l.a.createElement(
            'g',
            null,
            l.a.createElement('path', {
              d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75z',
              fill: '#FFAD1F',
            }),
            l.a.createElement('path', {
              d: 'M12 16.3c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1zm0-10.6c-2.3 0-4.2 1.9-4.2 4.2 0 .4.3.8.8.8s.8-.3.8-.8c0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-.4 0-.8.3-.8.8v1.1c0 .4.3.8.8.8s.8-.3.8-.8v-.4c2-.4 3.4-2.1 3.4-4.1-.2-2.4-2-4.3-4.3-4.3z',
              fill: '#14171A',
            }),
          ),
        )
      }
      Ue.metadata = { width: 24, height: 24 }
      var Ne = Ue,
        Ke = r('EyD/'),
        Qe = r('0weh')
      function We(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? We(Object(r), !0).forEach(function (t) {
                ee()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : We(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Ze = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(re.a)(
          'svg',
          Je(
            Je({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [te.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          l.a.createElement(
            'g',
            null,
            l.a.createElement('path', {
              d: 'M12 22.75c-1.484 0-2.827-.753-3.636-2-.295.062-.6.095-.91.095-2.417 0-4.385-2.045-4.385-4.56v-.11c-1.133-.852-1.82-2.228-1.82-3.697 0-1.538.723-2.935 1.92-3.776-.067-.323-.102-.653-.102-.987 0-2.514 1.968-4.56 4.386-4.56.312 0 .616.033.91.097.81-1.25 2.152-2.002 3.636-2.002 1.46 0 2.826.77 3.634 2.002.294-.063.6-.096.912-.096 2.418 0 4.386 2.045 4.386 4.56 0 .333-.034.663-.102.985 1.198.843 1.92 2.24 1.92 3.777 0 1.468-.687 2.844-1.82 3.696v.112c0 2.514-1.967 4.56-4.385 4.56-.31 0-.616-.033-.91-.098-.81 1.234-2.175 2.003-3.635 2.003zm-3.273-3.642c.284 0 .553.162.68.434.49 1.054 1.484 1.708 2.593 1.708 1.11 0 2.104-.654 2.593-1.707.167-.36.583-.528.954-.383.312.122.648.185 1 .185 1.59 0 2.885-1.372 2.885-3.06 0-.136-.01-.268-.027-.4-.036-.294.106-.582.362-.733.915-.543 1.483-1.567 1.483-2.674 0-1.17-.642-2.255-1.636-2.762-.335-.17-.492-.563-.366-.918.122-.345.184-.71.184-1.083 0-1.687-1.295-3.06-2.886-3.06-.353 0-.688.063-.996.186-.368.148-.79-.02-.957-.38-.49-1.055-1.483-1.71-2.593-1.71-1.11 0-2.103.655-2.593 1.71-.168.36-.587.53-.958.38-.308-.122-.642-.184-.995-.184-1.59 0-2.886 1.372-2.886 3.06 0 .372.06.737.183 1.082.125.354-.03.747-.366.918-.994.508-1.636 1.592-1.636 2.762 0 1.107.57 2.132 1.482 2.673.255.152.397.44.362.734-.016.133-.025.266-.025.402 0 1.687 1.294 3.06 2.885 3.06.35 0 .687-.063.998-.186.09-.035.182-.052.274-.052z',
            }),
            l.a.createElement('path', {
              d: 'M15.416 8.376c-.345-.23-.81-.137-1.04.208l-3.493 5.24L9.3 12.24c-.292-.293-.767-.293-1.06 0s-.293.768 0 1.06l2.23 2.23.113.094c.128.085.272.126.416.126.24 0 .48-.117.624-.334l4-6c.23-.345.137-.81-.208-1.04z',
            }),
          ),
        )
      }
      Ze.metadata = { width: 24, height: 24 }
      var qe = Ze,
        Xe = r('A7Fw'),
        Ye = 'notification-message-text',
        $e = 'notification-tweet-text',
        et = 'notification-show-more-text',
        tt = 'notification-additional-context',
        rt = C.a.create(function (e) {
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
        nt = l.a.createElement(W.a, { style: [rt.colorPurple, rt.icon] }),
        ct = l.a.createElement(J.a, { style: [rt.colorBlue, rt.icon] }),
        at = l.a.createElement(Z.a, { style: [rt.colorBlue, rt.icon] }),
        ot = l.a.createElement(q.a, { style: [rt.colorBlue, rt.icon] }),
        it = l.a.createElement(X.a, { style: [rt.colorRed, rt.icon] }),
        lt = l.a.createElement(Y.a, { style: [rt.colorRed, rt.icon] }),
        st = l.a.createElement(oe, { style: [rt.colorRed, rt.icon] }),
        ut = l.a.createElement(ie.a, { style: [rt.colorDeepGray, rt.icon] }),
        pt = l.a.createElement(le.a, { style: [rt.colorBlue, rt.icon] }),
        yt = l.a.createElement(se.a, { style: [rt.colorDeepGray, rt.icon] }),
        ft = l.a.createElement(ue.a, { style: [rt.colorDeepGray, rt.icon] }),
        bt = l.a.createElement(be, { style: rt.icon }),
        mt = l.a.createElement(me.a, { style: [rt.colorBlue, rt.icon] }),
        gt = l.a.createElement(ge.a, { style: [rt.colorBlue, rt.icon] }),
        dt = l.a.createElement(he, { style: [rt.colorDeepGray, rt.icon] }),
        Ot = l.a.createElement(je.a, { style: [rt.colorGreen, rt.icon] }),
        vt = l.a.createElement(De, { style: rt.icon }),
        ht = l.a.createElement(Ce, { style: rt.icon }),
        jt = l.a.createElement(B.a, { style: rt.icon }),
        wt = l.a.createElement(Me.a, { style: [rt.colorPrimary, rt.icon] }),
        Et = l.a.createElement(ze.a, { style: [rt.twitterIcon, rt.icon] }),
        Pt = l.a.createElement(He.a, { style: [rt.colorOrange, rt.icon] }),
        Dt = l.a.createElement(Se, { style: [rt.colorOrange, rt.icon] }),
        xt = l.a.createElement(Ve, { style: rt.icon }),
        _t = l.a.createElement(Ne, { style: rt.icon }),
        kt = l.a.createElement(Ke.a, { style: [rt.colorPlum, rt.icon] }),
        Ct = l.a.createElement(Qe.a, { style: [rt.colorRed, rt.icon] }),
        Mt = l.a.createElement(qe, { style: [rt.colorBlue, rt.icon] }),
        zt = l.a.createElement(Xe.a, { style: [rt.colorBlue, rt.icon] }),
        Ht = {
          alert_bell_icon: ct,
          bar_chart_icon: nt,
          bell_icon: ct,
          birdwatch_icon: at,
          bird_icon: Et,
          communities_icon: ot,
          conversation_bubble_icon: Pt,
          heart_icon: lt,
          heart_plus_icon: st,
          histogram_icon: dt,
          lightning_bolt_icon: pt,
          list_icon: ut,
          lock_icon: yt,
          magic_rec_icon: Et,
          milestone_icon: bt,
          news_icon: ft,
          person_icon: mt,
          play_icon: gt,
          reply_icon: Pt,
          report_icon: it,
          recommendation_icon: vt,
          retweet_icon: Ot,
          safety_icon: ht,
          security_alert_icon: xt,
          security_unknown_icon: _t,
          shield_icon: Dt,
          spaces_icon: jt,
          stacked_cards_icon: Et,
          super_follows_icon: kt,
          super_follows_error_icon: Ct,
          topic_icon: wt,
          trending_icon: Et,
          verified_general_icon: Mt,
          verified_notable_icon: zt,
        },
        Bt = function (e) {
          var t = l.a.useContext(s.a).featureSwitches,
            r = l.a.useState(!1),
            n = o()(r, 2),
            c = n[0],
            a = n[1],
            i = e.analytics,
            u = e.entry.content,
            p = e.feedbackItems,
            y = e.isUnread,
            f = e.notification
          l.a.useEffect(function () {
            i.scribeAction('impression')
          }, [])
          var b = l.a.useCallback(
              function () {
                i.scribeAction('navigate')
              },
              [i],
            ),
            m = l.a.useCallback(
              function () {
                a(!0)
              },
              [a],
            ),
            g = l.a.useCallback(
              function () {
                a(!1)
              },
              [a],
            )
          if (!f) return null
          var d = f.icon,
            O = f.message,
            v = f.template,
            h = u.url && Object(x.b)(u.url),
            j = u.socialContext && u.socialContext.generalContext && u.socialContext.generalContext,
            w = t.isTrue('responsive_web_reactions_legacy_heart'),
            E = p ? l.a.createElement(D.a, { feedbackItems: p }) : null,
            P = v.aggregateUserActionsV1.fromUsers
              .map(function (e) {
                return e.user
              })
              .filter(Boolean),
            k = v.aggregateUserActionsV1.fromUsers
              .map(function (e) {
                return e.reactionType
              })
              .filter(Boolean),
            C = k.length
              ? k.map(function (e) {
                  return l.a.createElement(U.a, {
                    legacyHeart: w,
                    reactionType: e,
                    style: rt.avatarDecoration,
                    withAnimation: !1,
                  })
                })
              : void 0,
            z = E && !P.length && !j,
            B = d && d.id && Ht[d.id] ? Ht[d.id] : Et,
            A = h && ('string' == typeof h ? { pathname: h } : h)
          return l.a.createElement(N.a.Consumer, null, function (e) {
            return l.a.createElement(
              K.a,
              {
                accessibilityLabelledBy: c ? [Ye, $e, et, tt].join(' ') : void 0,
                accessibilityRole: 'article',
                link: A ? e.withAnchorless(A) : void 0,
                onBlur: g,
                onClick: b,
                onFocus: m,
                style: [rt.root, y && rt.unread],
              },
              j
                ? l.a.createElement(H.a, {
                    contextType: j.contextType,
                    link: j.landingUrl ? Object(x.b)(j.landingUrl) : void 0,
                    style: rt.socialContext,
                    text: j.text,
                  })
                : null,
              l.a.createElement(
                Q.a,
                {
                  avatarCell: B,
                  avatarCellStyle: rt.itemIcon,
                  cellStyle: [rt.itemContent, rt.timelineRowText, z && rt.curationPadding],
                },
                P.length
                  ? l.a.createElement(
                      F.a,
                      { style: rt.userAvatarList },
                      l.a.createElement(G, { userDecorations: C, users: P }),
                    )
                  : null,
                l.a.createElement(_.a, {
                  alignment: O.alignment,
                  entities: O.entities,
                  nativeID: c ? Ye : void 0,
                  rtl: O.rtl,
                  text: O.text,
                }),
                l.a.createElement(L, { focused: c, template: v }),
                l.a.createElement(M, { focused: c, link: h, template: v }),
              ),
              E ? l.a.createElement(F.a, { style: rt.curationControl }, E) : null,
            )
          })
        },
        At = P(l.a.memo(Bt)),
        Ft = r('Rp9C'),
        St = n
          .b({
            isFocusable: Object(c.a)(!0),
            component: At,
            shouldDisplayBorder: Object(c.a)(!0),
            getScribeDataItem: function (e) {
              var t = e.itemMetadata.clientEventInfo
              return Ft.a.getAllSurfaceDetails(t)
            },
          })
          .getHandler()
      t.default = St
    },
    RoyM: function (e, t, r) {
      'use strict'
      var n = r('ERkP'),
        c = r.n(n),
        a = (r('JtPf'), r('7x/C'), r('87if'), r('lTEL'), r('kYxP'), r('zb92')),
        o = Object(a.a)({
          loader: function () {
            return r.e(170).then(r.bind(null, 'ACNv'))
          },
        }),
        i = r('4bW+'),
        l = r('IG7M'),
        s = r('rHpw'),
        u = r('Irs7'),
        p = s.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(u.a)(function (e) {
        var t = e.analytics,
          r = e.feedbackItems,
          n = e.isDisplayedOnMedia
        if (r && r.length > 0) {
          return c.a.createElement(l.a, {
            onClick: function () {
              return t.scribe({ element: 'caret', action: 'click' })
            },
            renderActionMenu: function (e) {
              return c.a.createElement(o, { actionItems: r, onClose: e })
            },
            style: p.curationControl,
            testID: i.a.caret,
            withDarkBackground: n,
          })
        }
        return null
      })
    },
    YI7k: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        c = r.n(n),
        a = r('ERkP'),
        o = r.n(a),
        i = r('Lsrn'),
        l = r('k/Ka')
      function s(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                c()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var p = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(l.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M21.5 11.25h-3.25v-7C18.25 3.01 17.24 2 16 2H4C2.76 2 1.75 3.01 1.75 4.25v15.5C1.75 20.99 2.76 22 4 22h15.5c1.517 0 2.75-1.233 2.75-2.75V12c0-.414-.336-.75-.75-.75zm-10.75 5.5H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.75c.414 0 .75.336.75.75s-.336.75-.75.75zm3.25-4H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8c.414 0 .75.336.75.75s-.336.75-.75.75zm0-4H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8c.414 0 .75.336.75.75s-.336.75-.75.75zm6.75 10.5c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-6.5h2.5v6.5z',
            }),
          ),
        )
      }
      ;(p.metadata = { width: 24, height: 24 }), (t.a = p)
    },
  },
])
//# sourceMappingURL=WIPED
