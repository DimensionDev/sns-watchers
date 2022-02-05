;(window.webpackJsonp = window.webpackJsonp || []).push([
  [51],
  {
    '3EFP': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      }),
        a.d(t, 'b', function () {
          return r
        }),
        a.d(t, 'c', function () {
          return o
        }),
        a.d(t, 'd', function () {
          return c
        }),
        a.d(t, 'e', function () {
          return i
        }),
        a.d(t, 'f', function () {
          return l
        })
      var n = 'ArrowDown',
        r = 'ArrowUp',
        o = 'Enter',
        c = 'Escape',
        i = 'ESC',
        l = 'Tab'
    },
    '6rLm': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'DisplayScreen', function () {
          return V
        })
      a('OZaJ')
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        c = a.n(o),
        i = a('1Pcy'),
        l = a.n(i),
        s = a('5Yy7'),
        p = a.n(s),
        u = a('N+ot'),
        d = a.n(u),
        m = a('AuHH'),
        f = a.n(m),
        g = a('KEM+'),
        y = a.n(g),
        b = (a('1t7P'), a('jQ/y'), a('ERkP')),
        h = a.n(b),
        E = a('jHSc'),
        w = a('3XMw'),
        k = a.n(w),
        v = a('5hXE'),
        B = a('A2ey'),
        H = a('vSJw'),
        T = a('KNZn'),
        M = a('MWbm'),
        x = a('t62R'),
        P = a('/yvb'),
        R = a('7N4s'),
        _ = a('rHpw'),
        z = a('7JQg')
      function F(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var a,
            n = f()(e)
          if (t) {
            var r = f()(this).constructor
            a = Reflect.construct(n, arguments, r)
          } else a = n.apply(this, arguments)
          return d()(this, a)
        }
      }
      var C = k.a.b5b0afa4,
        S = k.a.b772cd65,
        W = k.a.a5ce82a4,
        J = k.a.babfa32c,
        A = k.a.a2a2f98d,
        O = k.a.b4a361cf,
        j = k.a.ce494bb3,
        L = k.a.c783d45e,
        N = k.a.h306a357,
        V = (function (e) {
          p()(a, e)
          var t = F(a)
          function a(e, n) {
            var o
            return (
              r()(this, a),
              (o = t.call(this, e, n)),
              y()(l()(o), '_renderModalHeader', function (e) {
                return o.context.isModal
                  ? h.a.createElement(
                      M.a,
                      { style: D.header },
                      h.a.createElement(
                        x.b,
                        { align: 'center', size: 'title4', weight: 'heavy' },
                        o._isWelcomeFlow ? J : C,
                      ),
                    )
                  : e
              }),
              y()(l()(o), '_handleBackClick', function () {
                o.props.history.goBack()
              }),
              (o._isWelcomeFlow = 'true' === e.location.query.welcome),
              o
            )
          }
          return (
            c()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.context.isModal,
                    t = this.props.history
                  return h.a.createElement(
                    E.b,
                    { history: t, renderHeader: this._renderModalHeader, title: this._isWelcomeFlow ? J : C },
                    h.a.createElement(
                      M.a,
                      { style: D.root },
                      h.a.createElement(
                        x.b,
                        { align: 'center', color: 'gray700', style: [D.description, !e && D.descriptionMarginTop] },
                        this._isWelcomeFlow ? O : W,
                      ),
                      h.a.createElement(
                        M.a,
                        { style: [D.tweetExample, e && D.tweetExampleMarginHorizontal] },
                        h.a.createElement(T.a, { withTweetBorder: !0 }),
                      ),
                      h.a.createElement(x.b, { color: 'gray700', style: D.componentTitle, weight: 'bold' }, j),
                      h.a.createElement(M.a, { style: D.component }, h.a.createElement(v.a, null)),
                      h.a.createElement(x.b, { color: 'gray700', style: D.componentTitle, weight: 'bold' }, L),
                      h.a.createElement(M.a, { style: [D.component, D.colorPicker] }, h.a.createElement(H.a, null)),
                      h.a.createElement(x.b, { color: 'gray700', style: D.componentTitle, weight: 'bold' }, N),
                      h.a.createElement(
                        M.a,
                        { style: [D.component, D.backgroundPicker] },
                        h.a.createElement(B.a, null),
                      ),
                      h.a.createElement(
                        M.a,
                        { style: D.buttonContainer },
                        h.a.createElement(
                          P.a,
                          { onPress: this._handleBackClick, type: 'brandFilled' },
                          this._isWelcomeFlow ? A : S,
                        ),
                      ),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(h.a.Component)
      y()(V, 'contextType', R.b), (t.default = Object(z.c)({ page: 'display' })(V))
      var D = _.a.create(function (e) {
        return {
          root: { paddingBottom: e.spaces.space32, paddingHorizontal: e.spaces.space32 },
          header: { marginBottom: e.spaces.space12, marginTop: e.spaces.space32 },
          description: { marginBottom: e.spaces.space20 },
          descriptionMarginTop: { marginTop: e.spaces.space20 },
          componentTitle: { fontSize: e.fontSizes.subtext2, marginBottom: e.spaces.space4 },
          component: {
            backgroundColor: e.colors.gray0,
            borderRadius: e.borderRadii.xLarge,
            marginBottom: e.spaces.space12,
          },
          buttonContainer: { alignItems: 'center', marginTop: e.spaces.space16 },
          tweetExample: { marginBottom: e.spaces.space16 },
          tweetExampleMarginHorizontal: { marginHorizontal: e.spaces.space32 },
          backgroundPicker: { paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space4 },
          colorPicker: { paddingVertical: e.spaces.space4 },
        }
      })
    },
  },
])
//# sourceMappingURL=WIPED
