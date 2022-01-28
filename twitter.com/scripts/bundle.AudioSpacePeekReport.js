;(window.webpackJsonp = window.webpackJsonp || []).push([
  [34],
  {
    KkRJ: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'default', function () {
          return v
        })
      a('WNMA'), a('KqXw')
      var n = a('ERkP'),
        r = a.n(n),
        o = (a('z84I'), a('B/Qy')),
        c = a('Ty5D'),
        i = a('MWbm'),
        s = a('5Vk4'),
        l = a('sgih'),
        u = a('xKuM'),
        p = a('jtO7'),
        d = a('rHpw'),
        m = a('PaZX')
      function b(e) {
        var t = e.audioSpaceId,
          a = (function (e) {
            var t = Object(c.g)(),
              a = Object(o.a)(e)
            return function () {
              t.push(a)
            }
          })(t),
          n = r.a.createElement(s.a, { autofocus: !0, backButtonType: 'back', onClick: a })
        return r.a.createElement(
          l.a,
          {
            accessibilityRole: 'menu',
            allowBackNavigation: !0,
            enableMaskForDismiss: !0,
            onMaskClick: a,
            type: 'full',
            withKeyboardNavigation: !0,
            withMask: !0,
          },
          r.a.createElement(
            i.a,
            { style: g.root },
            r.a.createElement(u.a, {
              leftControl: n,
              style: g.appBar,
              subtitle: m.c.describeTheIssue,
              title: m.c.reportThisSpace,
              withGutter: !0,
            }),
            r.a.createElement(f, { audioSpaceId: t, returnToPreview: a }),
          ),
        )
      }
      function f(e) {
        var t = e.audioSpaceId,
          a = e.returnToPreview,
          n = m.a.useReportingItems({ audioSpaceId: t })
        return r.a.createElement(
          i.a,
          { style: g.actionList },
          n.map(function (e) {
            var t = e.label
            return r.a.createElement(p.a, {
              align: 'left',
              color: 'red500',
              key: t,
              label: t,
              onPress: function () {
                e.onClick(), a()
              },
            })
          }),
        )
      }
      var g = d.a.create(function (e) {
        return {
          root: { paddingBottom: e.spaces.space56 },
          appBar: { paddingVertical: e.spaces.space8 },
          actionList: { marginTop: e.spaces.space20 },
        }
      })
      b.ActionList = f
      var k = a('Z5jE')
      function v(e) {
        var t = Object(k.a)(e.match)
        return r.a.createElement(b, { audioSpaceId: t })
      }
    },
    Z5jE: function (e, t, a) {
      'use strict'
      function n(e) {
        return e.params.broadcastId || ''
      }
      a.d(t, 'a', function () {
        return n
      })
    },
    jtO7: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        o = a('m3Bd'),
        c = a.n(o),
        i = a('ERkP'),
        s = a.n(i),
        l = a('t62R'),
        u = a('I4+6'),
        p = a('cm6r'),
        d = a('rHpw'),
        m = a('MWbm'),
        b = d.a.create(function (e) {
          return {
            container: { backgroundColor: e.colors.cellBackground },
            root: {
              justifyContent: 'center',
              minHeight: e.spaces.space48,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
          }
        })
      t.a = function (e) {
        var t = e.align,
          a = void 0 === t ? 'center' : t,
          n = e.color,
          o = e.label,
          i = c()(e, ['align', 'color', 'label']),
          f = u.a.generate({
            backgroundColor: d.a.theme.colors.transparent,
            color: d.a.theme.colors[n],
            insetFocusRing: !0,
          })
        return s.a.createElement(
          m.a,
          { style: b.container },
          s.a.createElement(
            p.a,
            r()({}, i, { interactiveStyles: f, style: b.root }),
            s.a.createElement(l.b, { align: a, color: n }, o),
          ),
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
