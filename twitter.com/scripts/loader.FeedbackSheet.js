;(window.webpackJsonp = window.webpackJsonp || []).push([
  [169],
  {
    ACNv: function (t, n, e) {
      'use strict'
      e.r(n)
      e('OZaJ')
      var o = e('VrFO'),
        i = e.n(o),
        r = e('Y9Ll'),
        a = e.n(r),
        c = e('1Pcy'),
        l = e.n(c),
        u = e('5Yy7'),
        s = e.n(u),
        f = e('N+ot'),
        d = e.n(f),
        h = e('AuHH'),
        m = e.n(h),
        C = e('KEM+'),
        v = e.n(C),
        p = (e('2G9S'), e('KOtZ'), e('hBvt'), e('jQ3i'), e('x4t0'), e('ERkP')),
        b = e.n(p),
        y = e('3XMw'),
        B = e.n(y),
        w = e('oQhu'),
        k = e('mjJ+'),
        x = e('eb3s')
      function _(t) {
        var n = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (t) {
            return !1
          }
        })()
        return function () {
          var e,
            o = m()(t)
          if (n) {
            var i = m()(this).constructor
            e = Reflect.construct(o, arguments, i)
          } else e = o.apply(this, arguments)
          return d()(this, e)
        }
      }
      var E = B.a.cfd2f35d,
        I = (function (t) {
          s()(e, t)
          var n = _(e)
          function e() {
            var t
            i()(this, e)
            for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a]
            return (
              (t = n.call.apply(n, [this].concat(r))),
              v()(l()(t), 'state', { activeConfirmation: null }),
              v()(l()(t), '_handleConfirm', function (n) {
                t.setState({ activeConfirmation: n })
              }),
              v()(l()(t), '_handleConfirmed', function () {
                t.state.activeConfirmation && t.state.activeConfirmation.callback(),
                  t.setState({ activeConfirmation: null }),
                  t.props.onClose()
              }),
              v()(l()(t), '_handleCancelConfirm', function () {
                t.setState({ activeConfirmation: null })
              }),
              t
            )
          }
          return (
            a()(e, [
              {
                key: 'render',
                value: function () {
                  var t = this.props.onClose,
                    n = this.state.activeConfirmation
                  return n
                    ? this._renderConfirmation(n)
                    : b.a.createElement(k.a, {
                        cancelButtonLabel: E,
                        items: this._getProcessedActionItems(),
                        onCloseRequested: t,
                      })
                },
              },
              {
                key: '_renderConfirmation',
                value: function (t) {
                  if (t && t.render) return t.render(this._handleConfirmed, this._handleCancelConfirm)
                  var n = t || {},
                    e = n.confirmButtonType,
                    o = n.headline,
                    i = n.label,
                    r = n.text,
                    a = n.withCancelButton
                  return b.a.createElement(x.a, {
                    confirmButtonLabel: i,
                    confirmButtonType: e,
                    headline: o,
                    onCancel: this._handleCancelConfirm,
                    onConfirm: this._handleConfirmed,
                    text: r,
                    withCancelButton: a,
                  })
                },
              },
              {
                key: '_getProcessedActionItems',
                value: function () {
                  var t = this.props,
                    n = t.actionItems,
                    e = t.dividerIndices,
                    o = t.onClose
                  return R(n, e, o, this._handleConfirm)
                },
              },
            ]),
            e
          )
        })(b.a.Component),
        R = Object(w.a)(function (t, n, e, o) {
          return t.reduce(function (t, i, r) {
            var a = i.Icon,
              c = i.behavioralEventContext,
              l = i.confirmation,
              u = i.disabled,
              s = i.excludeFromActionMenu,
              f = i.isEmphasized,
              d = i.link,
              h = i.onClick,
              m = i.subText,
              C = i.testID,
              v = i.text
            i.withCancelButton
            if (!s) {
              var p = h
                ? function () {
                    l
                      ? l.render
                        ? o({ callback: h, render: l.render })
                        : o({
                            callback: h,
                            text: l.text,
                            headline: l.headline,
                            label: l.label,
                            confirmButtonType: l.confirmButtonType,
                            withCancelButton: l.withCancelButton,
                          })
                      : (h(), e())
                  }
                : e
              t.push({
                behavioralEventContext: c,
                disabled: u,
                Icon: a,
                isEmphasized: f,
                testID: C,
                subText: m,
                text: v,
                onClick: p,
                link: d,
                withBottomBorder: n && n.includes(r),
              })
            }
            return t
          }, [])
        })
      n.default = I
    },
  },
])
//# sourceMappingURL=WIPED
