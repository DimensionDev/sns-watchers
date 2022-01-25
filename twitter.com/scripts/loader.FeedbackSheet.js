;(window.webpackJsonp = window.webpackJsonp || []).push([
  [166],
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
        b = e('3XMw'),
        y = e.n(b),
        B = e('oQhu'),
        w = e('mjJ+'),
        k = e('eb3s')
      function x(t) {
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
      var _ = y.a.cfd2f35d,
        E = (function (t) {
          s()(e, t)
          var n = x(e)
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
                    : p.createElement(w.a, {
                        cancelButtonLabel: _,
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
                  return p.createElement(k.a, {
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
                  return I(n, e, o, this._handleConfirm)
                },
              },
            ]),
            e
          )
        })(p.Component),
        I = Object(B.a)(function (t, n, e, o) {
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
      n.default = E
    },
  },
])
//# sourceMappingURL=WIPED
