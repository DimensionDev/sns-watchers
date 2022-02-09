;(window.webpackJsonp = window.webpackJsonp || []).push([
  [54],
  {
    '3EFP': function (e, a, t) {
      'use strict'
      t.d(a, 'a', function () {
        return n
      }),
        t.d(a, 'b', function () {
          return r
        }),
        t.d(a, 'c', function () {
          return o
        }),
        t.d(a, 'd', function () {
          return c
        }),
        t.d(a, 'e', function () {
          return i
        }),
        t.d(a, 'f', function () {
          return s
        })
      var n = 'ArrowDown',
        r = 'ArrowUp',
        o = 'Enter',
        c = 'Escape',
        i = 'ESC',
        s = 'Tab'
    },
    '6rLm': function (e, a, t) {
      'use strict'
      t.r(a),
        t.d(a, 'DisplayScreen', function () {
          return A
        })
      var n = t('VrFO'),
        r = t.n(n),
        o = t('Y9Ll'),
        c = t.n(o),
        i = t('1Pcy'),
        s = t.n(i),
        l = t('5Yy7'),
        p = t.n(l),
        d = t('2VqO'),
        m = t.n(d),
        u = t('KEM+'),
        g = t.n(u),
        b = (t('1t7P'), t('jQ/y'), t('ERkP')),
        y = t.n(b),
        E = t('jHSc'),
        w = t('3XMw'),
        h = t.n(w),
        f = t('5hXE'),
        k = t('A2ey'),
        T = t('vSJw'),
        M = t('KNZn'),
        v = t('MWbm'),
        B = t('t62R'),
        H = t('/yvb'),
        x = t('7N4s'),
        P = t('rHpw'),
        _ = t('7JQg'),
        z = h.a.b5b0afa4,
        F = h.a.b772cd65,
        C = h.a.a5ce82a4,
        S = h.a.babfa32c,
        W = h.a.a2a2f98d,
        J = h.a.b4a361cf,
        R = h.a.ce494bb3,
        V = h.a.c783d45e,
        j = h.a.h306a357,
        A = (function (e) {
          p()(t, e)
          var a = m()(t)
          function t(e, n) {
            var o
            return (
              r()(this, t),
              (o = a.call(this, e, n)),
              g()(s()(o), '_renderModalHeader', function (e) {
                return o.context.isModal
                  ? y.a.createElement(
                      v.a,
                      { style: L.header },
                      y.a.createElement(
                        B.b,
                        { align: 'center', size: 'title4', weight: 'heavy' },
                        o._isWelcomeFlow ? S : z,
                      ),
                    )
                  : e
              }),
              g()(s()(o), '_handleBackClick', function () {
                o.props.history.goBack()
              }),
              (o._isWelcomeFlow = 'true' === e.location.query.welcome),
              o
            )
          }
          return (
            c()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.context.isModal,
                    a = this.props.history
                  return y.a.createElement(
                    E.b,
                    { history: a, renderHeader: this._renderModalHeader, title: this._isWelcomeFlow ? S : z },
                    y.a.createElement(
                      v.a,
                      { style: L.root },
                      y.a.createElement(
                        B.b,
                        { align: 'center', color: 'gray700', style: [L.description, !e && L.descriptionMarginTop] },
                        this._isWelcomeFlow ? J : C,
                      ),
                      y.a.createElement(
                        v.a,
                        { style: [L.tweetExample, e && L.tweetExampleMarginHorizontal] },
                        y.a.createElement(M.a, { withTweetBorder: !0 }),
                      ),
                      y.a.createElement(B.b, { color: 'gray700', style: L.componentTitle, weight: 'bold' }, R),
                      y.a.createElement(v.a, { style: L.component }, y.a.createElement(f.a, null)),
                      y.a.createElement(B.b, { color: 'gray700', style: L.componentTitle, weight: 'bold' }, V),
                      y.a.createElement(v.a, { style: [L.component, L.colorPicker] }, y.a.createElement(T.a, null)),
                      y.a.createElement(B.b, { color: 'gray700', style: L.componentTitle, weight: 'bold' }, j),
                      y.a.createElement(
                        v.a,
                        { style: [L.component, L.backgroundPicker] },
                        y.a.createElement(k.a, null),
                      ),
                      y.a.createElement(
                        v.a,
                        { style: L.buttonContainer },
                        y.a.createElement(
                          H.a,
                          { onPress: this._handleBackClick, type: 'brandFilled' },
                          this._isWelcomeFlow ? W : F,
                        ),
                      ),
                    ),
                  )
                },
              },
            ]),
            t
          )
        })(y.a.Component)
      g()(A, 'contextType', x.b), (a.default = Object(_.c)({ page: 'display' })(A))
      var L = P.a.create(function (e) {
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
