;(window.webpackJsonp = window.webpackJsonp || []).push([
  [33],
  {
    KkRJ: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'default', function () {
          return w
        })
      a('WNMA'), a('KqXw')
      var n = a('ERkP'),
        r = (a('z84I'), a('B/Qy')),
        c = a('Ty5D'),
        i = a('MWbm'),
        o = a('5Vk4'),
        s = a('sgih'),
        u = a('xKuM'),
        l = a('jtO7'),
        p = a('rHpw'),
        d = a('PaZX')
      function f(e) {
        var t = e.audioSpaceId,
          a = (function (e) {
            var t = Object(c.g)(),
              a = Object(r.a)(e)
            return function () {
              t.push(a)
            }
          })(t),
          l = n.createElement(o.a, { autofocus: !0, backButtonType: 'back', onClick: a })
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
            i.a,
            { style: b.root },
            n.createElement(u.a, {
              leftControl: l,
              style: b.appBar,
              subtitle: d.c.describeTheIssue,
              title: d.c.reportThisSpace,
              withGutter: !0,
            }),
            n.createElement(m, { audioSpaceId: t, returnToPreview: a }),
          ),
        )
      }
      function m(e) {
        var t = e.audioSpaceId,
          a = e.returnToPreview,
          r = d.a.useReportingItems({ audioSpaceId: t })
        return n.createElement(
          i.a,
          { style: b.actionList },
          r.map(function (e) {
            var t = e.label
            return n.createElement(l.a, {
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
      var b = p.a.create(function (e) {
        return {
          root: { paddingBottom: e.spaces.space56 },
          appBar: { paddingVertical: e.spaces.space8 },
          actionList: { marginTop: e.spaces.space20 },
        }
      })
      f.ActionList = m
      var k = a('Z5jE')
      function w(e) {
        var t = Object(k.a)(e.match)
        return n.createElement(f, { audioSpaceId: t })
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
  },
])
//# sourceMappingURL=WIPED
