;(window.webpackJsonp = window.webpackJsonp || []).push([
  [33],
  {
    KkRJ: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'default', function () {
          return k
        })
      a('WNMA'), a('KqXw')
      var n = a('ERkP'),
        r = (a('z84I'), a('B/Qy')),
        o = a('Ty5D'),
        c = a('MWbm'),
        i = a('5Vk4'),
        s = a('sgih'),
        l = a('xKuM'),
        u = a('jtO7'),
        p = a('rHpw'),
        d = a('PaZX')
      function m(e) {
        var t = e.audioSpaceId,
          a = (function (e) {
            var t = Object(o.g)(),
              a = Object(r.a)(e)
            return function () {
              t.push(a)
            }
          })(t),
          u = n.createElement(i.a, { autofocus: !0, backButtonType: 'back', onClick: a })
        return n.createElement(
          s.a,
          {
            accessibilityRole: 'menu',
            allowBackNavigation: !0,
            enableMaskForDismiss: !0,
            onMaskClick: a,
            type: 'full',
            withKeyboardNavigation: !0,
            withMask: !0,
          },
          n.createElement(
            c.a,
            { style: f.root },
            n.createElement(l.a, {
              leftControl: u,
              style: f.appBar,
              subtitle: d.c.describeTheIssue,
              title: d.c.reportThisSpace,
              withGutter: !0,
            }),
            n.createElement(b, { audioSpaceId: t, returnToPreview: a }),
          ),
        )
      }
      function b(e) {
        var t = e.audioSpaceId,
          a = e.returnToPreview,
          r = d.a.useReportingItems({ audioSpaceId: t })
        return n.createElement(
          c.a,
          { style: f.actionList },
          r.map(function (e) {
            var t = e.label
            return n.createElement(u.a, {
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
      var f = p.a.create(function (e) {
        return {
          root: { paddingBottom: e.spaces.space56 },
          appBar: { paddingVertical: e.spaces.space8 },
          actionList: { marginTop: e.spaces.space20 },
        }
      })
      m.ActionList = b
      var g = a('Z5jE')
      function k(e) {
        var t = Object(g.a)(e.match)
        return n.createElement(m, { audioSpaceId: t })
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
        s = a('t62R'),
        l = a('I4+6'),
        u = a('cm6r'),
        p = a('rHpw'),
        d = a('MWbm'),
        m = p.a.create(function (e) {
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
          b = c()(e, ['align', 'color', 'label']),
          f = l.a.generate({
            backgroundColor: p.a.theme.colors.transparent,
            color: p.a.theme.colors[n],
            insetFocusRing: !0,
          })
        return i.createElement(
          d.a,
          { style: m.container },
          i.createElement(
            u.a,
            r()({}, b, { interactiveStyles: f, style: m.root }),
            i.createElement(s.b, { align: a, color: n }, o),
          ),
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
