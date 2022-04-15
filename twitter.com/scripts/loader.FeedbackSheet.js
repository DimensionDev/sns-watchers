;(window.webpackJsonp = window.webpackJsonp || []).push([
  [175],
  {
    ACNv: function (n, e, t) {
      'use strict'
      t.r(e)
      var i = t('VrFO'),
        o = t.n(i),
        a = t('Y9Ll'),
        r = t.n(a),
        c = t('1Pcy'),
        l = t.n(c),
        s = t('5Yy7'),
        u = t.n(s),
        d = t('2VqO'),
        f = t.n(d),
        h = t('KEM+'),
        C = t.n(h),
        m = (t('2G9S'), t('KOtZ'), t('7x/C'), t('hBvt'), t('jQ3i'), t('x4t0'), t('ERkP')),
        v = t.n(m),
        p = t('3XMw'),
        b = t.n(p),
        w = t('oQhu'),
        B = t('mjJ+'),
        k = t('eb3s'),
        x = b.a.cfd2f35d,
        _ = (function (n) {
          u()(t, n)
          var e = f()(t)
          function t() {
            var n
            o()(this, t)
            for (var i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r]
            return (
              (n = e.call.apply(e, [this].concat(a))),
              C()(l()(n), 'state', { activeConfirmation: null }),
              C()(l()(n), '_handleConfirm', function (e) {
                n.setState({ activeConfirmation: e })
              }),
              C()(l()(n), '_handleConfirmed', function () {
                n.state.activeConfirmation && n.state.activeConfirmation.callback(),
                  n.setState({ activeConfirmation: null }),
                  n.props.onClose()
              }),
              C()(l()(n), '_handleCancelConfirm', function () {
                n.setState({ activeConfirmation: null })
              }),
              n
            )
          }
          return (
            r()(t, [
              {
                key: 'render',
                value: function () {
                  var n = this.props.onClose,
                    e = this.state.activeConfirmation
                  return e
                    ? this._renderConfirmation(e)
                    : v.a.createElement(B.a, {
                        cancelButtonLabel: x,
                        items: this._getProcessedActionItems(),
                        onCloseRequested: n,
                      })
                },
              },
              {
                key: '_renderConfirmation',
                value: function (n) {
                  if (n && n.render) return n.render(this._handleConfirmed, this._handleCancelConfirm)
                  var e = n || {},
                    t = e.confirmButtonType,
                    i = e.headline,
                    o = e.label,
                    a = e.text,
                    r = e.withCancelButton
                  return v.a.createElement(k.a, {
                    confirmButtonLabel: o,
                    confirmButtonType: t,
                    headline: i,
                    onCancel: this._handleCancelConfirm,
                    onConfirm: this._handleConfirmed,
                    text: a,
                    withCancelButton: r,
                  })
                },
              },
              {
                key: '_getProcessedActionItems',
                value: function () {
                  var n = this.props,
                    e = n.actionItems,
                    t = n.dividerIndices,
                    i = n.onClose
                  return y(e, t, i, this._handleConfirm)
                },
              },
            ]),
            t
          )
        })(v.a.Component),
        y = Object(w.a)(function (n, e, t, i) {
          return n.reduce(function (n, o, a) {
            var r = o.Icon,
              c = o.behavioralEventContext,
              l = o.confirmation,
              s = o.disabled,
              u = o.excludeFromActionMenu,
              d = o.isEmphasized,
              f = o.link,
              h = o.onClick,
              C = o.subText,
              m = o.testID,
              v = o.text
            o.withCancelButton
            if (!u) {
              var p = h
                ? function () {
                    l
                      ? l.render
                        ? i({ callback: h, render: l.render })
                        : i({
                            callback: h,
                            text: l.text,
                            headline: l.headline,
                            label: l.label,
                            confirmButtonType: l.confirmButtonType,
                            withCancelButton: l.withCancelButton,
                          })
                      : (h(), t())
                  }
                : t
              n.push({
                behavioralEventContext: c,
                disabled: s,
                Icon: r,
                isEmphasized: d,
                testID: m,
                subText: C,
                text: v,
                onClick: p,
                link: f,
                withBottomBorder: e && e.includes(a),
              })
            }
            return n
          }, [])
        })
      e.default = _
    },
  },
])
//# sourceMappingURL=WIPED
