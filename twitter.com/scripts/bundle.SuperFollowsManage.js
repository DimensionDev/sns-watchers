;(window.webpackJsonp = window.webpackJsonp || []).push([
  [99],
  {
    '4Rvi': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'default', function () {
          return B
        })
      var n = a('ERkP'),
        r = a.n(n),
        o = a('3XMw'),
        c = a.n(o),
        i = a('hOZg'),
        l = a('5FtR'),
        s = a('MWbm'),
        d = a('/yvb'),
        p = a('cHvH'),
        m = a('rHpw'),
        u = a('sgih'),
        w = a('xKuM'),
        g = a('t62R'),
        b = c.a.ia5e7487,
        y = c.a.cfd2f35d,
        h = c.a.ge046208,
        f = c.a.c451b37b,
        v = c.a.df823d51,
        E = c.a.b942f94b,
        k = c.a.adc2c349,
        C = r.a.createElement(i.a, null)
      function B(e) {
        var t,
          a = null === (t = e.location.state) || void 0 === t ? void 0 : t.fromApp,
          n = function () {
            return e.history.goBack()
          }
        if (!a) return r.a.createElement(l.a, { to: '/home' })
        var o = r.a.createElement(d.a, {
          accessibilityLabel: b,
          icon: C,
          onPress: n,
          pullLeft: !0,
          type: 'primaryText',
        })
        return r.a.createElement(p.a, null, function (e) {
          var t = e.windowWidth > m.a.theme.breakpoints.medium
          return r.a.createElement(
            u.a,
            {
              allowBackNavigation: !0,
              enableMaskForDismiss: !0,
              onMaskClick: n,
              style: H.sheet,
              type: 'bottom',
              withMask: !0,
            },
            r.a.createElement(w.a, { leftControl: t ? o : void 0, title: h }),
            r.a.createElement(
              s.a,
              { style: [H.container, t ? H.widePadding : H.narrowPadding] },
              r.a.createElement(
                s.a,
                { style: H.content },
                r.a.createElement(
                  s.a,
                  { style: t ? H.wideContentSpacer : H.narrowContentSpacer },
                  r.a.createElement(g.b, { size: 'headline1', style: H.contentHeader, weight: 'bold' }, f),
                  r.a.createElement(g.b, { color: 'gray700', size: 'body' }, v),
                ),
                r.a.createElement(
                  s.a,
                  { style: t ? H.wideContentSpacer : H.narrowContentSpacer },
                  r.a.createElement(g.b, { size: 'headline1', style: H.contentHeader, weight: 'bold' }, E),
                  r.a.createElement(g.b, { color: 'gray700', size: 'body' }, k),
                ),
                t ? void 0 : r.a.createElement(d.a, { onPress: n, style: H.cancelButton, type: 'primaryOutlined' }, y),
              ),
            ),
          )
        })
      }
      var H = m.a.create(function (e) {
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
