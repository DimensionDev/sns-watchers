;(window.webpackJsonp = window.webpackJsonp || []).push([
  [108],
  {
    yQeU: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'TwitterversaryScreen', function () {
          return H
        })
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        c = a.n(i),
        o = a('1Pcy'),
        s = a.n(o),
        l = a('5Yy7'),
        p = a.n(l),
        m = a('2VqO'),
        u = a.n(m),
        h = a('KEM+'),
        g = a.n(h),
        y = (a('2G9S'), a('KqXw'), a('MvUL'), a('ERkP')),
        b = a.n(y),
        f = a('Hw0q'),
        w = a('rxPX'),
        d = function (e, t) {
          var a
          return !(null === (a = t.location.state) || void 0 === a || !a.fromApp)
        },
        v = Object(w.a)()
          .propsFromState(function () {
            return {
              title: Object(f.b)('title'),
              message: Object(f.b)('message'),
              action: Object(f.b)('action'),
              text: Object(f.b)('text'),
              imageAttachment: Object(f.b)('image_attachment'),
              fromApp: d,
            }
          })
          .withAnalytics({ page: 'twitterversary' }),
        E = a('jHSc'),
        j = a('9Xij'),
        k = a('t62R'),
        x = a('/yvb'),
        A = a('rHpw'),
        O = a('U+bB'),
        M = a('MWbm'),
        H = (function (e) {
          p()(a, e)
          var t = u()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), c = 0; c < n; c++) i[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              g()(s()(e), '_handleClick', function () {
                var t = e.props,
                  a = t.analytics,
                  n = t.history,
                  r = t.imageAttachment,
                  i = t.text
                a.scribe({ action: 'compose' }),
                  i &&
                    n.replace({
                      pathname: '/compose/tweet',
                      state: { defaultText: ''.concat(i, ' '), externalMedia: [r] },
                    })
              }),
              e
            )
          }
          return (
            c()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.fromApp,
                    a = e.history
                  t || a.replace('/notifications')
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.action,
                    a = e.history,
                    n = e.imageAttachment,
                    r = e.message,
                    i = e.text,
                    c = e.title
                  return b.a.createElement(
                    E.b,
                    { backLocation: '/notifications', history: a, title: c },
                    b.a.createElement(
                      M.a,
                      { style: L.container },
                      b.a.createElement(
                        M.a,
                        { style: L.imageWrapper },
                        b.a.createElement(
                          j.a,
                          { ratio: 16 / 9 },
                          b.a.createElement(O.a, { source: n, style: L.image }),
                        ),
                      ),
                      b.a.createElement(
                        k.b,
                        { align: 'center', size: 'headline1', style: L.message, weight: 'heavy' },
                        r,
                      ),
                      i
                        ? b.a.createElement(x.a, { onPress: this._handleClick, size: 'xLarge', type: 'brandFilled' }, t)
                        : null,
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(b.a.Component),
        L = A.a.create(function (e) {
          return {
            container: { alignItems: 'center', marginBottom: e.spaces.space32 },
            imageWrapper: { width: '100%' },
            image: { height: '100%', width: '100%' },
            message: { marginHorizontal: e.spaces.space20, marginVertical: e.spaces.space32 },
          }
        })
      t.default = v(H)
    },
  },
])
//# sourceMappingURL=WIPED
