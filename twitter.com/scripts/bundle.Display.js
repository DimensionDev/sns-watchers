;(window.webpackJsonp = window.webpackJsonp || []).push([
  [51],
  {
    '3EFP': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return r
        }),
        n.d(t, 'c', function () {
          return o
        }),
        n.d(t, 'd', function () {
          return c
        }),
        n.d(t, 'e', function () {
          return i
        }),
        n.d(t, 'f', function () {
          return l
        })
      var a = 'ArrowDown',
        r = 'ArrowUp',
        o = 'Enter',
        c = 'Escape',
        i = 'ESC',
        l = 'Tab'
    },
    '6rLm': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DisplayScreen', function () {
          return N
        })
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        p = n.n(s),
        u = n('N+ot'),
        d = n.n(u),
        m = n('AuHH'),
        f = n.n(m),
        g = n('KEM+'),
        y = n.n(g),
        b = (n('1t7P'), n('jQ/y'), n('ERkP')),
        h = n('jHSc'),
        E = n('3XMw'),
        w = n.n(E),
        k = n('5hXE'),
        v = n('A2ey'),
        B = n('vSJw'),
        H = n('KNZn'),
        T = n('MWbm'),
        M = n('t62R'),
        x = n('/yvb'),
        P = n('7N4s'),
        R = n('rHpw'),
        _ = n('7JQg')
      function z(e) {
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
          var n,
            a = f()(e)
          if (t) {
            var r = f()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return d()(this, n)
        }
      }
      var F = w.a.b5b0afa4,
        C = w.a.b772cd65,
        S = w.a.a5ce82a4,
        W = w.a.babfa32c,
        J = w.a.a2a2f98d,
        A = w.a.b4a361cf,
        O = w.a.ce494bb3,
        j = w.a.c783d45e,
        L = w.a.h306a357,
        N = (function (e) {
          p()(n, e)
          var t = z(n)
          function n(e, a) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e, a)),
              y()(l()(o), '_renderModalHeader', function (e) {
                return o.context.isModal
                  ? b.createElement(
                      T.a,
                      { style: V.header },
                      b.createElement(
                        M.b,
                        { align: 'center', size: 'title4', weight: 'heavy' },
                        o._isWelcomeFlow ? W : F,
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
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.context.isModal,
                    t = this.props.history
                  return b.createElement(
                    h.b,
                    { history: t, renderHeader: this._renderModalHeader, title: this._isWelcomeFlow ? W : F },
                    b.createElement(
                      T.a,
                      { style: V.root },
                      b.createElement(
                        M.b,
                        { align: 'center', color: 'gray700', style: [V.description, !e && V.descriptionMarginTop] },
                        this._isWelcomeFlow ? A : S,
                      ),
                      b.createElement(
                        T.a,
                        { style: [V.tweetExample, e && V.tweetExampleMarginHorizontal] },
                        b.createElement(H.a, { withTweetBorder: !0 }),
                      ),
                      b.createElement(M.b, { color: 'gray700', style: V.componentTitle, weight: 'bold' }, O),
                      b.createElement(T.a, { style: V.component }, b.createElement(k.a, null)),
                      b.createElement(M.b, { color: 'gray700', style: V.componentTitle, weight: 'bold' }, j),
                      b.createElement(T.a, { style: [V.component, V.colorPicker] }, b.createElement(B.a, null)),
                      b.createElement(M.b, { color: 'gray700', style: V.componentTitle, weight: 'bold' }, L),
                      b.createElement(T.a, { style: [V.component, V.backgroundPicker] }, b.createElement(v.a, null)),
                      b.createElement(
                        T.a,
                        { style: V.buttonContainer },
                        b.createElement(
                          x.a,
                          { onPress: this._handleBackClick, type: 'brandFilled' },
                          this._isWelcomeFlow ? J : C,
                        ),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.Component)
      y()(N, 'contextType', P.b), (t.default = Object(_.c)({ page: 'display' })(N))
      var V = R.a.create(function (e) {
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
