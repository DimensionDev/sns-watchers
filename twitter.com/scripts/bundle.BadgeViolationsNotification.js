;(window.webpackJsonp = window.webpackJsonp || []).push([
  [40],
  {
    '8Ir8': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        l = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('circle', { cx: '12', cy: '12', fill: '#FFF', r: '10' }),
              i.a.createElement('path', {
                d: 'M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm4.086 7.698L11.744 15.6s-.354.545-.416.607c-.146.146-.338.22-.53.22s-.384-.073-.53-.22l-2.7-2.704c-.293-.293-.293-.77 0-1.06.293-.294.768-.294 1.06 0l2.048 2.05 4.155-6.365c.227-.346.693-.443 1.04-.218.345.227.443.692.216 1.038z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    JYv4: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        l = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('circle', { cx: '12', cy: '12', fill: '#FFF', r: '10' }),
              i.a.createElement('path', {
                d: 'M12 1.25C6.07 1.25 1.25 6.07 1.25 12S6.07 22.75 12 22.75 22.75 17.93 22.75 12 17.93 1.25 12 1.25zm0 16.31c-.76 0-1.38-.61-1.38-1.37s.62-1.38 1.38-1.38 1.37.62 1.37 1.38-.61 1.37-1.37 1.37zm1.72-9.03l-.93 4.39c-.07.38-.4.64-.78.64-.39 0-.72-.26-.8-.64l-.93-4.39c-.11-.52.02-1.06.35-1.47.67-.83 2.07-.83 2.74 0 .33.41.46.95.35 1.47z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    N8kF: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BadgeViolations', function () {
          return z
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        d = n.n(s),
        u = n('2VqO'),
        m = n.n(u),
        h = n('KEM+'),
        p = n.n(h),
        f = (n('2G9S'), n('z84I'), n('uFXj'), n('ERkP')),
        y = n.n(f),
        g = n('kGix'),
        v = n('rxPX'),
        E = n('0KEI'),
        b = n('ZyHq'),
        w = Object(v.a)()
          .propsFromState(function () {
            return { badgeViolations: b.v, fetchStatus: b.w }
          })
          .adjustStateProps(function (e) {
            var t = e.badgeViolations,
              n = e.fetchStatus
            return { badgeViolations: t, fetchStatus: n === g.a.NONE ? g.a.LOADING : n }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_VERIFICATION_NOTIFICATION_SCREEN',
              ),
              fetchBadgeViolations: b.f,
            }
          })
          .withAnalytics(),
        C = n('jHSc'),
        S = n('3XMw'),
        _ = n.n(S),
        x = n('rcen'),
        k = n('MWbm'),
        B = n('QJRq'),
        L = n('t62R'),
        F = n('cmUU'),
        I = n('G1WX'),
        V = n('rHpw'),
        A = n('8Ir8'),
        O = n('JYv4'),
        R = '/notifications',
        N = _.a.fc2a5c92,
        H = function (e) {
          return null
        },
        z = (function (e) {
          d()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(l()(e), '_renderViolation', function (e, t) {
                var n = e.violation_category,
                  a = e.violation_desc,
                  r = a.entities,
                  o = a.text,
                  i = e.violation_status,
                  c = e.violation_title,
                  l =
                    i === B.s.IN_COMPLIANCE
                      ? y.a.createElement(A.a, { style: [j.icon, j.green] })
                      : y.a.createElement(O.a, { style: [j.icon, j.red] })
                return y.a.createElement(
                  k.a,
                  { key: n, style: [j.listItem, t && j.withBottomBorder] },
                  l,
                  y.a.createElement(
                    k.a,
                    { style: j.itemContent },
                    y.a.createElement(L.b, { style: j.itemTitle }, c),
                    y.a.createElement(x.a, { color: 'gray700', entities: r, size: 'subtext2', text: o }),
                  ),
                )
              }),
              p()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.badgeViolations,
                  a = t.history,
                  r = n.button_text,
                  o = n.violation_modal_desc,
                  i = o.entities,
                  c = o.text,
                  l = n.violation_modal_title,
                  s = n.violations,
                  d = function () {
                    return a.goBack({ backLocation: R })
                  },
                  u = y.a.createElement(x.a, { entities: i, text: c }),
                  m =
                    s && s.length
                      ? y.a.createElement(
                          y.a.Fragment,
                          null,
                          s.map(function (t, n, a) {
                            return e._renderViolation(t, n !== a.length - 1)
                          }),
                        )
                      : null
                return y.a.createElement(F.a, {
                  actionLabel: r,
                  children: m,
                  contentStyle: j.contentContainer,
                  headline: l,
                  onAction: d,
                  onClose: d,
                  subtext: u,
                })
              }),
              p()(l()(e), '_handleRequestRetry', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchBadgeViolations)().catch(n())
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler
                  ;(0, e.fetchBadgeViolations)().catch(t())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.history,
                    a = t === g.a.LOADED
                  return y.a.createElement(
                    C.b,
                    { backLocation: R, containerStyle: !a && j.loading, history: n, renderHeader: a ? H : void 0 },
                    y.a.createElement(I.a, {
                      fetchStatus: t,
                      onRequestRetry: this._handleRequestRetry,
                      render: this._render,
                      retryMessage: N,
                      retryable: !0,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        j = V.a.create(function (e) {
          return {
            contentContainer: { marginVertical: e.spaces.space16, justifyContent: 'center' },
            listItem: { flexDirection: 'row', paddingVertical: e.spaces.space20, width: '100%' },
            withBottomBorder: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
            },
            icon: { flexShrink: 0, fontSize: e.fontSizes.headline1, marginRight: e.spaces.space12 },
            itemContent: { flexShrink: 1, flexGrow: 1 },
            itemTitle: { marginBottom: e.spaces.space2 },
            loading: { paddingBottom: e.spaces.space48 },
            green: { color: e.colors.green500 },
            red: { color: e.colors.magenta500 },
          }
        }),
        M = w(z)
      t.default = M
    },
  },
])
//# sourceMappingURL=WIPED
