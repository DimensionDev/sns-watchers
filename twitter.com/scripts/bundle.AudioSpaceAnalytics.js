;(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  {
    '0Yt+': function (e, a, t) {
      'use strict'
      var n = t('ERkP'),
        r = t.n(n),
        i = t('3XMw'),
        c = t.n(i),
        s = t('KSuC'),
        l = t('rHpw'),
        o = t('MWbm'),
        u = t('t62R'),
        p = t('wTX1'),
        d = t('RjwM'),
        m = t('7Mjr'),
        g = t('WXWl'),
        v = c.a.i2785008,
        b = c.a.d9687d23,
        y = c.a.ac73eb5a,
        f = c.a.c5a9f921,
        h = function (e) {
          var a = e.label,
            t = e.popover
          return a
            ? r.a.createElement(
                o.a,
                { style: k.labelBar },
                r.a.createElement(u.b, { color: 'gray700', size: 'subtext2', weight: 'medium' }, a),
                t ? r.a.createElement(s.a, { label: a, popover: t }) : null,
              )
            : null
        },
        E = function (e) {
          var a = e.unit
          return a ? r.a.createElement(u.b, { color: 'gray700', style: k.unitText, weight: 'medium' }, a) : null
        },
        w = function (e) {
          var a,
            t,
            n = e.trendValue
          return void 0 === n
            ? null
            : ((n = Math.round(100 * n) / 100),
              (a = v(n)),
              (t = (function (e) {
                if (e < 0) {
                  var a = v(e)
                  return b({ trendValueNegativePercent: a })
                }
                if (0 === e) return y
                var t = v(e)
                return f({ trendValuePositivePercent: t })
              })(n)),
              n < 0
                ? r.a.createElement(
                    o.a,
                    { accessibilityLabel: t, style: k.trendBar },
                    r.a.createElement(d.a, { style: k.trendIconNeg }),
                    r.a.createElement(
                      u.b,
                      { accessibilityHidden: !0, color: 'red500', size: 'body', weight: 'medium' },
                      a,
                    ),
                  )
                : 0 === n
                ? r.a.createElement(
                    o.a,
                    { accessibilityLabel: t, style: k.trendBar },
                    r.a.createElement(m.a, { style: k.trendIconZero }),
                    r.a.createElement(
                      u.b,
                      { accessibilityHidden: !0, color: 'gray700', size: 'body', weight: 'medium' },
                      a,
                    ),
                  )
                : r.a.createElement(
                    o.a,
                    { accessibilityLabel: t, style: k.trendBar },
                    r.a.createElement(g.a, { style: k.trendIconPos }),
                    r.a.createElement(
                      u.b,
                      { accessibilityHidden: !0, color: 'green500', size: 'body', weight: 'medium' },
                      a,
                    ),
                  ))
        },
        k = l.a.create(function (e) {
          return {
            dataPoint: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' },
            labelBar: { display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: e.spaces.space2 },
            valueBar: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginBottom: e.spaces.space4,
            },
            unitText: { marginLeft: e.spaces.space4, flexDirection: 'column' },
            trendBar: { marginLeft: e.spaces.space4, flexDirection: 'row' },
            trendIconPos: {
              marginTop: e.spaces.space1,
              marginBottom: e.spaces.space1,
              marginRight: e.spaces.space2,
              height: e.spaces.space16,
              color: e.colors.green500,
            },
            trendIconZero: {
              marginTop: e.spaces.space1,
              marginBottom: e.spaces.space1,
              marginRight: e.spaces.space2,
              height: e.spaces.space16,
              color: e.colors.gray700,
            },
            trendIconNeg: {
              marginTop: e.spaces.space1,
              marginBottom: e.spaces.space1,
              marginRight: e.spaces.space2,
              height: e.spaces.space16,
              color: e.colors.red500,
            },
          }
        })
      a.a = function (e) {
        var a = e.animated,
          t = e.count,
          n = e.label,
          i = e.popover,
          c = e.size,
          s = e.subTextList,
          l = e.trendValue,
          d = e.unit,
          m = e.value
        return r.a.createElement(
          o.a,
          { style: k.dataPoint },
          r.a.createElement(h, { label: n, popover: i }),
          r.a.createElement(
            o.a,
            { style: k.valueBar },
            a
              ? r.a.createElement(p.a, { count: t, size: c, weight: 'bold' }, m)
              : r.a.createElement(u.b, { size: c, weight: 'bold' }, m),
            r.a.createElement(E, { unit: d }),
            r.a.createElement(w, { trendValue: l }),
          ),
          s,
        )
      }
    },
    '6s7X': function (e, a, t) {
      'use strict'
      var n = t('yiKp'),
        r = t.n(n),
        i = t('ERkP'),
        c = t.n(i),
        s = t('Lsrn'),
        l = t('k/Ka'),
        o = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M12 18.042c-.553 0-1-.447-1-1v-5.5c0-.553.447-1 1-1s1 .447 1 1v5.5c0 .553-.447 1-1 1z',
              }),
              c.a.createElement('circle', { cx: '12', cy: '8.042', r: '1.25' }),
              c.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(o.metadata = { width: 24, height: 24 }), (a.a = o)
    },
    KSuC: function (e, a, t) {
      'use strict'
      var n = t('ERkP'),
        r = t.n(n),
        i = t('3XMw'),
        c = t.n(i),
        s = t('6s7X'),
        l = t('rHpw'),
        o = t('MWbm'),
        u = t('t62R'),
        p = t('/yvb'),
        d = t('OiMc'),
        m = c.a.affbaf62,
        g = c.a.c388d026,
        v = l.a.create(function (e) {
          return {
            popover: { padding: e.spaces.space32 },
            popoverTitle: { marginBottom: e.spaces.space8 },
            popoverText: { marginBottom: e.spaces.space24 },
            iconInformation: {
              color: e.colors.gray700,
              fontSize: e.fontSizes.subtext3,
              cursor: 'pointer',
              marginLeft: e.spaces.space4,
            },
          }
        })
      a.a = function (e) {
        var a = e.label,
          t = e.popover
        return r.a.createElement(
          o.a,
          null,
          r.a.createElement(
            d.a,
            {
              preferredVerticalOrientation: 'up',
              renderContent: function (e) {
                return r.a.createElement(
                  o.a,
                  { style: v.popover },
                  r.a.createElement(
                    o.a,
                    { style: v.popoverTitle },
                    r.a.createElement(u.b, { size: 'title3', weight: 'heavy' }, a),
                  ),
                  r.a.createElement(o.a, { style: v.popoverText }, t),
                  r.a.createElement(p.a, { onPress: e, type: 'primaryOutlined' }, g),
                )
              },
              withArrow: !0,
            },
            r.a.createElement(s.a, { accessibilityLabel: m, accessibilityRole: 'tooltip', style: v.iconInformation }),
          ),
        )
      }
    },
    RMBq: function (e, a, t) {
      'use strict'
      t.r(a),
        t.d(a, 'AudioSpaceAnalytics', function () {
          return S
        })
      var n,
        r = t('ddV6'),
        i = t.n(r),
        c = (t('KqXw'), t('WNMA'), t('ERkP')),
        s = t.n(c),
        l = t('Pc/x'),
        o = t('KEM+'),
        u = t.n(o),
        p = (t('z84I'), t('TJCb'), t('7x/C'), t('DZ+c'), t('yH/f'), t('7lsG')),
        d = t('Z5jE'),
        m = t('3XMw'),
        g = t.n(m),
        v = t('dgjd'),
        b = t('MWbm'),
        y = t('0Yt+'),
        f = t('MH+I'),
        h = t('rHpw')
      var E = function (e, a, t) {
          var n,
            r = x[e],
            i = r.label,
            c = r.popover
          return (n = e === R.Duration ? k(a) : w(e, a))
            ? s.a.createElement(y.a, { key: e, label: i, popover: c, size: t, value: n })
            : null
        },
        w = function (e, a) {
          var t,
            n,
            r,
            i = a.space,
            c = a.utils,
            s = null == i ? void 0 : i.is_space_available_for_replay,
            l = null == i ? void 0 : i.total_live_listeners,
            o = null == i ? void 0 : i.total_replay_watched
          switch (e) {
            case R.Cohosts:
              r = null == i ? void 0 : i.cohosts.length
              break
            case R.LiveListeners:
              r = s ? l : void 0
              break
            case R.RecordingReplays:
              r = s ? o : void 0
              break
            case R.Speakers:
              r = null == i || null === (t = i.participants) || void 0 === t ? void 0 : t.speakers.length
              break
            case R.TunedIn:
              r = c.getTunedInCount()
              break
            default:
              r = void 0
          }
          return (null === (n = r) || void 0 === n ? void 0 : n.toString()) || null
        },
        k = function (e) {
          var a = e.space,
            t = null == a ? void 0 : a.ended_at,
            n = null == a ? void 0 : a.started_at
          if (!t || !n) return null
          var r = t - n
          return s.a.createElement(f.a, { narrow: !0, timeMs: r })
        },
        R = Object.freeze({
          Cohosts: 'Cohosts',
          Duration: 'Duration',
          LiveListeners: 'LiveListeners',
          RecordingReplays: 'RecordingReplays',
          Speakers: 'Speakers',
          TunedIn: 'TunedIn',
        }),
        T = [R.LiveListeners, R.RecordingReplays, R.Cohosts, R.Speakers, R.Duration],
        x =
          ((n = {}),
          u()(n, R.Cohosts, { label: g.a.i2caef48 }),
          u()(n, R.Duration, { label: g.a.d9d6e10e }),
          u()(n, R.LiveListeners, { label: g.a.fcb205d9 }),
          u()(n, R.RecordingReplays, { label: g.a.jb088200 }),
          u()(n, R.Speakers, { label: g.a.j245c654 }),
          u()(n, R.TunedIn, { label: g.a.if653289 }),
          n),
        B = h.a.create(function (e) {
          return {
            cardContainer: { marginTop: e.spaces.space12 },
            container: { paddingHorizontal: e.spaces.space16 },
            grid: {
              display: 'grid',
              marginBottom: e.spaces.space40,
              gridTemplateColumns: '1fr',
              gridGap: h.a.theme.spaces.space40,
              marginTop: h.a.theme.spaces.space40,
              marginHorizontal: h.a.theme.spaces.space32,
            },
            minorDataPointsGrid: {
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridGap: h.a.theme.spaces.space40,
            },
          }
        }),
        L = function (e) {
          var a = Object(d.a)(e.match),
            t = Object(v.a)(a)
          return s.a.createElement(
            s.a.Fragment,
            null,
            s.a.createElement(
              b.a,
              { style: B.container },
              s.a.createElement(
                b.a,
                { style: B.cardContainer },
                s.a.createElement(p.a, { audioSpaceId: a, isInteractive: !1, withoutButton: !0 }),
              ),
            ),
            s.a.createElement(
              b.a,
              { style: B.grid },
              E(R.TunedIn, t, 'title1'),
              s.a.createElement(
                b.a,
                { style: B.minorDataPointsGrid },
                T.map(function (e) {
                  return E(e, t, 'title3')
                }),
              ),
            ),
          )
        },
        M = t('aITJ'),
        I = t('Tg44'),
        C = t('q9Zt'),
        z = t('5Vk4'),
        j = t('sgih'),
        P = t('xKuM')
      function S(e) {
        var a = s.a.useState(void 0),
          t = i()(a, 2),
          n = t[0],
          r = t[1],
          c = Object(d.a)(e.match),
          o = Object(v.a)(c).utils,
          u = o.state() === I.a.StateEnum.unavailable
        s.a.useEffect(function () {
          l.a.proxsee
            .login()
            .then(function () {
              r(!0)
            })
            .catch(function () {
              r(!1)
            })
        }, [])
        var p = function () {
            return e.history.goBackThroughModals()
          },
          m = s.a.createElement(z.a, { backButtonType: 'close', onClick: p })
        return void 0 !== o.state() && void 0 !== n
          ? s.a.createElement(
              j.a,
              {
                accessibilityRole: 'menu',
                allowBackNavigation: !0,
                enableMaskForDismiss: !0,
                onMaskClick: p,
                type: 'full',
                withKeyboardNavigation: !0,
                withMask: !0,
              },
              !M.b.isTwitterApp() &&
                s.a.createElement(P.a, { leftControl: m, style: H.appBar, title: D.title, withGutter: !0 }),
              !1 === n
                ? s.a.createElement(C.a, { onRetry: null, title: D.wrongUser })
                : u
                ? s.a.createElement(C.a, { onRetry: null, title: D.genericError })
                : s.a.createElement(L, e),
            )
          : null
      }
      var D = { title: g.a.g7e3d2a4, wrongUser: g.a.abebdfad, genericError: g.a.ef4602eb },
        H = h.a.create(function (e) {
          return {
            appBar: { paddingVertical: e.spaces.space8 },
            closeIcon: { width: e.spaces.space20, height: e.spaces.space20 },
          }
        })
      a.default = S
    },
    RjwM: function (e, a, t) {
      'use strict'
      var n = t('yiKp'),
        r = t.n(n),
        i = t('ERkP'),
        c = t.n(i),
        s = t('Lsrn'),
        l = t('k/Ka'),
        o = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M18.707 13.293c-.39-.39-1.023-.39-1.414 0L13 17.586V5c0-.553-.447-1-1-1s-1 .447-1 1v12.586l-4.293-4.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293l6-6c.39-.39.39-1.023 0-1.414z',
              }),
            ),
          )
        }
      ;(o.metadata = { width: 24, height: 24 }), (a.a = o)
    },
    WXWl: function (e, a, t) {
      'use strict'
      var n = t('yiKp'),
        r = t.n(n),
        i = t('ERkP'),
        c = t.n(i),
        s = t('Lsrn'),
        l = t('k/Ka'),
        o = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M18.707 10.293l-6-6c-.39-.39-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L11 7.414V20c0 .553.447 1 1 1s1-.447 1-1V7.414l4.293 4.293c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414z',
              }),
            ),
          )
        }
      ;(o.metadata = { width: 24, height: 24 }), (a.a = o)
    },
    Z5jE: function (e, a, t) {
      'use strict'
      function n(e) {
        return e.params.broadcastId || ''
      }
      t.d(a, 'a', function () {
        return n
      })
    },
  },
])
//# sourceMappingURL=WIPED
