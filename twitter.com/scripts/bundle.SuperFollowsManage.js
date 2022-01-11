;(window.webpackJsonp = window.webpackJsonp || []).push([
  [91],
  {
    '4Rvi': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'default', function () {
          return B
        })
      var n = a('ERkP'),
        o = a('3XMw'),
        r = a.n(o),
        c = a('hOZg'),
        i = a('5FtR'),
        l = a('MWbm'),
        s = a('/yvb'),
        d = a('cHvH'),
        p = a('rHpw'),
        m = a('sgih'),
        w = a('xKuM'),
        u = a('t62R'),
        g = r.a.ia5e7487,
        b = r.a.cfd2f35d,
        h = r.a.ge046208,
        y = r.a.c451b37b,
        f = r.a.df823d51,
        v = r.a.b942f94b,
        E = r.a.adc2c349,
        k = n.createElement(c.a, null)
      function B(e) {
        var t,
          a = null === (t = e.location.state) || void 0 === t ? void 0 : t.fromApp,
          o = function () {
            return e.history.goBack()
          }
        if (!a) return n.createElement(i.a, { to: '/home' })
        var r = n.createElement(s.a, { accessibilityLabel: g, icon: k, onPress: o, pullLeft: !0, type: 'primaryText' })
        return n.createElement(d.a, null, function (e) {
          var t = e.windowWidth > p.a.theme.breakpoints.medium
          return n.createElement(
            m.a,
            {
              allowBackNavigation: !0,
              enableMaskForDismiss: !0,
              onMaskClick: o,
              style: C.sheet,
              type: 'bottom',
              withMask: !0,
            },
            n.createElement(w.a, { leftControl: t ? r : void 0, title: h, withBottomBorder: !!t }),
            n.createElement(
              l.a,
              { style: [C.container, t ? C.widePadding : C.narrowPadding] },
              n.createElement(
                l.a,
                { style: C.content },
                n.createElement(
                  l.a,
                  { style: t ? C.wideContentSpacer : C.narrowContentSpacer },
                  n.createElement(u.b, { size: 'headline1', style: C.contentHeader, weight: 'bold' }, y),
                  n.createElement(u.b, { color: 'gray700', size: 'body' }, f),
                ),
                n.createElement(
                  l.a,
                  { style: t ? C.wideContentSpacer : C.narrowContentSpacer },
                  n.createElement(u.b, { size: 'headline1', style: C.contentHeader, weight: 'bold' }, v),
                  n.createElement(u.b, { color: 'gray700', size: 'body' }, E),
                ),
                t ? void 0 : n.createElement(s.a, { onPress: o, style: C.cancelButton, type: 'primaryOutlined' }, b),
              ),
            ),
          )
        })
      }
      var C = p.a.create(function (e) {
        return {
          cancelButton: { width: '100%' },
          container: {
            width: '100%',
            overflow: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: e.spaces.space16,
          },
          content: { width: '100%', height: '100%', overflow: 'auto', maxWidth: '450px' },
          contentHeader: { marginBottom: e.spaces.space12 },
          narrowContentSpacer: { marginBottom: e.spaces.space24 },
          narrowPadding: { paddingVertical: e.spaces.space24 },
          wideContentSpacer: { marginBottom: e.spaces.space48 },
          widePadding: { paddingVertical: e.spaces.space32 },
          sheet: { backgroundColor: e.colors.cellBackground, overflow: 'auto' },
        }
      })
    },
  },
])
//# sourceMappingURL=WIPED
