;(window.webpackJsonp = window.webpackJsonp || []).push([
  [93],
  {
    '4Rvi': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'default', function () {
          return C
        })
      var n = a('ERkP'),
        o = a.n(n),
        r = a('3XMw'),
        c = a.n(r),
        i = a('hOZg'),
        l = a('5FtR'),
        s = a('MWbm'),
        d = a('/yvb'),
        p = a('cHvH'),
        m = a('rHpw'),
        w = a('sgih'),
        u = a('xKuM'),
        g = a('t62R'),
        b = c.a.ia5e7487,
        h = c.a.cfd2f35d,
        y = c.a.ge046208,
        f = c.a.c451b37b,
        v = c.a.df823d51,
        E = c.a.b942f94b,
        k = c.a.adc2c349,
        B = o.a.createElement(i.a, null)
      function C(e) {
        var t,
          a = null === (t = e.location.state) || void 0 === t ? void 0 : t.fromApp,
          n = function () {
            return e.history.goBack()
          }
        if (!a) return o.a.createElement(l.a, { to: '/home' })
        var r = o.a.createElement(d.a, {
          accessibilityLabel: b,
          icon: B,
          onPress: n,
          pullLeft: !0,
          type: 'primaryText',
        })
        return o.a.createElement(p.a, null, function (e) {
          var t = e.windowWidth > m.a.theme.breakpoints.medium
          return o.a.createElement(
            w.a,
            {
              allowBackNavigation: !0,
              enableMaskForDismiss: !0,
              onMaskClick: n,
              style: H.sheet,
              type: 'bottom',
              withMask: !0,
            },
            o.a.createElement(u.a, { leftControl: t ? r : void 0, title: y, withBottomBorder: !!t }),
            o.a.createElement(
              s.a,
              { style: [H.container, t ? H.widePadding : H.narrowPadding] },
              o.a.createElement(
                s.a,
                { style: H.content },
                o.a.createElement(
                  s.a,
                  { style: t ? H.wideContentSpacer : H.narrowContentSpacer },
                  o.a.createElement(g.b, { size: 'headline1', style: H.contentHeader, weight: 'bold' }, f),
                  o.a.createElement(g.b, { color: 'gray700', size: 'body' }, v),
                ),
                o.a.createElement(
                  s.a,
                  { style: t ? H.wideContentSpacer : H.narrowContentSpacer },
                  o.a.createElement(g.b, { size: 'headline1', style: H.contentHeader, weight: 'bold' }, E),
                  o.a.createElement(g.b, { color: 'gray700', size: 'body' }, k),
                ),
                t ? void 0 : o.a.createElement(d.a, { onPress: n, style: H.cancelButton, type: 'primaryOutlined' }, h),
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
