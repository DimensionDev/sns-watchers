;(window.webpackJsonp = window.webpackJsonp || []).push([
  [103],
  {
    yQeU: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'TwitterversaryScreen', function () {
          return B
        })
      a('OZaJ')
      var n = a('VrFO'),
        r = a.n(n),
        c = a('Y9Ll'),
        i = a.n(c),
        o = a('1Pcy'),
        s = a.n(o),
        l = a('5Yy7'),
        p = a.n(l),
        u = a('N+ot'),
        m = a.n(u),
        f = a('AuHH'),
        h = a.n(f),
        y = a('KEM+'),
        g = a.n(y),
        b = (a('2G9S'), a('MvUL'), a('KqXw'), a('ERkP')),
        v = a.n(b),
        d = a('Hw0q'),
        w = a('rxPX'),
        x = function (e, t) {
          var a
          return !(null === (a = t.location.state) || void 0 === a || !a.fromApp)
        },
        A = Object(w.a)()
          .propsFromState(function () {
            return {
              title: Object(d.b)('title'),
              message: Object(d.b)('message'),
              action: Object(d.b)('action'),
              text: Object(d.b)('text'),
              imageAttachment: Object(d.b)('image_attachment'),
              fromApp: x,
            }
          })
          .withAnalytics({ page: 'twitterversary' }),
        E = a('jHSc'),
        O = a('9Xij'),
        j = a('t62R'),
        k = a('/yvb'),
        R = a('rHpw'),
        H = a('U+bB'),
        M = a('MWbm')
      function P(e) {
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
            n = h()(e)
          if (t) {
            var r = h()(this).constructor
            a = Reflect.construct(n, arguments, r)
          } else a = n.apply(this, arguments)
          return m()(this, a)
        }
      }
      var B = (function (e) {
          p()(a, e)
          var t = P(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, c = new Array(n), i = 0; i < n; i++) c[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(s()(e), '_handleClick', function () {
                var t = e.props,
                  a = t.analytics,
                  n = t.history,
                  r = t.imageAttachment,
                  c = t.text
                a.scribe({ action: 'compose' }),
                  c &&
                    n.replace({
                      pathname: '/compose/tweet',
                      state: { defaultText: ''.concat(c, ' '), externalMedia: [r] },
                    })
              }),
              e
            )
          }
          return (
            i()(a, [
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
                    c = e.text,
                    i = e.title
                  return v.a.createElement(
                    E.b,
                    { backLocation: '/notifications', history: a, title: i },
                    v.a.createElement(
                      M.a,
                      { style: L.container },
                      v.a.createElement(
                        M.a,
                        { style: L.imageWrapper },
                        v.a.createElement(
                          O.a,
                          { ratio: 16 / 9 },
                          v.a.createElement(H.a, { source: n, style: L.image }),
                        ),
                      ),
                      v.a.createElement(
                        j.b,
                        { align: 'center', size: 'headline1', style: L.message, weight: 'heavy' },
                        r,
                      ),
                      c
                        ? v.a.createElement(k.a, { onPress: this._handleClick, size: 'xLarge', type: 'brandFilled' }, t)
                        : null,
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(v.a.Component),
        L = R.a.create(function (e) {
          return {
            container: { alignItems: 'center', marginBottom: e.spaces.space32 },
            imageWrapper: { width: '100%' },
            image: { height: '100%', width: '100%' },
            message: { marginHorizontal: e.spaces.space20, marginVertical: e.spaces.space32 },
          }
        })
      t.default = A(B)
    },
  },
])
//# sourceMappingURL=WIPED
