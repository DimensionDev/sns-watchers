;(window.webpackJsonp = window.webpackJsonp || []).push([
  [44],
  {
    '/fAK': function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('ERkP'),
        a = n.n(r),
        o = n('v6aA'),
        c = n('es0u'),
        u = n('Hw0q'),
        i = n('rxPX'),
        l = function (e) {
          return function (t, n) {
            return n.location.state && n.location.state[e]
          }
        },
        s = function (e) {
          return function (t, n) {
            return Object(u.b)(e)(t, n) || l(e)(t, n)
          }
        },
        d = Object(i.a)()
          .propsFromState(function () {
            return {
              cursor: l('cursor'),
              moduleId: l('module_id'),
              moduleName: l('module_name'),
              subtitle: l('subtitle'),
              templateName: s('template_name'),
              title: l('title'),
              userId: s('user_id'),
            }
          })
          .withAnalytics({ page: 'people' }),
        m = n('KEM+'),
        p = n.n(m),
        f =
          (n('2G9S'), n('IAdD'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('ZNT5'))
      function b(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      var O = function (e) {
          var t = e.module_id,
            n = e.template_name || 'default',
            r = t || 'default',
            a = e.user_id || 'default'
          return Object(f.a)({
            timelineId: 'connect-tab-'.concat(n, '-').concat(r, '-').concat(a),
            getEndpoint: function (e) {
              return e.URT.fetchRichConnectTimeline
            },
            getEndpointParams: function (t) {
              return Object.assign(
                {},
                t,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                      ? b(Object(n), !0).forEach(function (t) {
                          p()(e, t, n[t])
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                      : b(Object(n)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                  }
                  return e
                })({ display_location: 'connect', client_type: 'rweb' }, e),
              )
            },
            context: 'CONNECT_TAB',
            perfKey: 'connect-tab',
          })
        },
        w = n('QIgh'),
        y = n('3XMw'),
        h = n.n(y),
        j = n('VTxf'),
        g = n('SrIh'),
        _ = n('fTQJ'),
        E = n('VS6U'),
        v = n('wgnn'),
        P = h.a.b5298d91,
        I = function (e) {
          switch (e) {
            case v.a.NOT_FOUND:
              return a.a.createElement(j.a, null)
            default:
              return Object(g.a)('Unhandled timeline unavailable reason: '.concat(e)), null
          }
        },
        N = function () {
          return a.a.createElement(j.a, null)
        }
      t.default = d(function (e) {
        var t = e.cursor,
          n = e.history,
          r = e.moduleId,
          u = e.moduleName,
          i = e.subtitle,
          l = e.templateName,
          s = e.title,
          d = e.userId,
          m = a.a.useContext(o.a).loggedInUserId,
          p = a.a.useMemo(
            function () {
              return O({
                template_name: l,
                module_name: u,
                module_id: r,
                cursor: t,
                title: s,
                subtitle: i,
                user_id: d === m ? void 0 : d,
              })
            },
            [l, u, r, t, s, i, d, m],
          )
        return a.a.createElement(E.a, {
          backLocation: '/',
          history: n,
          primaryContent: a.a.createElement(_.a, {
            entryConfiguration: w.b,
            module: p,
            renderEmptyState: N,
            renderUnavailable: I,
            title: P,
          }),
          sidebarContent: a.a.createElement(c.a, { withWhoToFollow: !1 }),
          title: P,
        })
      })
    },
  },
])
//# sourceMappingURL=WIPED
