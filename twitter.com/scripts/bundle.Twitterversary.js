;(window.webpackJsonp = window.webpackJsonp || []).push([
  [99],
  {
    yQeU: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TwitterversaryScreen', function () {
          return P
        })
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        c = n('Y9Ll'),
        i = n.n(c),
        o = n('1Pcy'),
        s = n.n(o),
        l = n('5Yy7'),
        p = n.n(l),
        u = n('N+ot'),
        m = n.n(u),
        f = n('AuHH'),
        h = n.n(f),
        y = n('KEM+'),
        g = n.n(y),
        b = (n('2G9S'), n('MvUL'), n('KqXw'), n('ERkP')),
        v = n('Hw0q'),
        d = n('rxPX'),
        w = function (e, t) {
          var n
          return !(null === (n = t.location.state) || void 0 === n || !n.fromApp)
        },
        x = Object(d.a)()
          .propsFromState(function () {
            return {
              title: Object(v.b)('title'),
              message: Object(v.b)('message'),
              action: Object(v.b)('action'),
              text: Object(v.b)('text'),
              imageAttachment: Object(v.b)('image_attachment'),
              fromApp: w,
            }
          })
          .withAnalytics({ page: 'twitterversary' }),
        A = n('jHSc'),
        E = n('9Xij'),
        O = n('t62R'),
        j = n('/yvb'),
        k = n('rHpw'),
        R = n('U+bB'),
        H = n('MWbm')
      function M(e) {
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return m()(this, n)
        }
      }
      var P = (function (e) {
          p()(n, e)
          var t = M(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, c = new Array(a), i = 0; i < a; i++) c[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(s()(e), '_handleClick', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.history,
                  r = t.imageAttachment,
                  c = t.text
                n.scribe({ action: 'compose' }),
                  c &&
                    a.replace({
                      pathname: '/compose/tweet',
                      state: { defaultText: ''.concat(c, ' '), externalMedia: [r] },
                    })
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
                    t = e.fromApp,
                    n = e.history
                  t || n.replace('/notifications')
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.action,
                    n = e.history,
                    a = e.imageAttachment,
                    r = e.message,
                    c = e.text,
                    i = e.title
                  return b.createElement(
                    A.b,
                    { backLocation: '/notifications', history: n, title: i },
                    b.createElement(
                      H.a,
                      { style: B.container },
                      b.createElement(
                        H.a,
                        { style: B.imageWrapper },
                        b.createElement(E.a, { ratio: 16 / 9 }, b.createElement(R.a, { source: a, style: B.image })),
                      ),
                      b.createElement(
                        O.b,
                        { align: 'center', size: 'headline1', style: B.message, weight: 'heavy' },
                        r,
                      ),
                      c
                        ? b.createElement(j.a, { onPress: this._handleClick, size: 'xLarge', type: 'brandFilled' }, t)
                        : null,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.Component),
        B = k.a.create(function (e) {
          return {
            container: { alignItems: 'center', marginBottom: e.spaces.space32 },
            imageWrapper: { width: '100%' },
            image: { height: '100%', width: '100%' },
            message: { marginHorizontal: e.spaces.space20, marginVertical: e.spaces.space32 },
          }
        })
      t.default = x(P)
    },
  },
])
//# sourceMappingURL=WIPED
