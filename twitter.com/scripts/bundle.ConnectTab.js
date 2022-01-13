;(window.webpackJsonp = window.webpackJsonp || []).push([
  [44],
  {
    '/fAK': function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('ERkP'),
        o = n('v6aA'),
        a = n('es0u'),
        c = n('Hw0q'),
        u = n('rxPX'),
        i = function (e) {
          return function (t, n) {
            return n.location.state && n.location.state[e]
          }
        },
        l = function (e) {
          return function (t, n) {
            return Object(c.b)(e)(t, n) || i(e)(t, n)
          }
        },
        s = Object(u.a)()
          .propsFromState(function () {
            return {
              cursor: i('cursor'),
              moduleId: i('module_id'),
              moduleName: i('module_name'),
              subtitle: i('subtitle'),
              templateName: l('template_name'),
              title: i('title'),
              userId: l('user_id'),
            }
          })
          .withAnalytics({ page: 'people' }),
        d = n('KEM+'),
        m = n.n(d),
        p =
          (n('2G9S'), n('IAdD'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('ZNT5'))
      function f(e, t) {
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
      var b = function (e) {
          var t = e.module_id,
            n = e.template_name || 'default',
            r = t || 'default',
            o = e.user_id || 'default'
          return Object(p.a)({
            timelineId: 'connect-tab-'.concat(n, '-').concat(r, '-').concat(o),
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
                      ? f(Object(n), !0).forEach(function (t) {
                          m()(e, t, n[t])
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                      : f(Object(n)).forEach(function (t) {
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
        O = n('QIgh'),
        w = n('3XMw'),
        y = n.n(w),
        h = n('VTxf'),
        j = n('SrIh'),
        g = n('fTQJ'),
        _ = n('VS6U'),
        E = n('wgnn'),
        v = y.a.b5298d91,
        P = function (e) {
          switch (e) {
            case E.a.NOT_FOUND:
              return r.createElement(h.a, null)
            default:
              return Object(j.a)('Unhandled timeline unavailable reason: '.concat(e)), null
          }
        },
        I = function () {
          return r.createElement(h.a, null)
        }
      t.default = s(function (e) {
        var t = e.cursor,
          n = e.history,
          c = e.moduleId,
          u = e.moduleName,
          i = e.subtitle,
          l = e.templateName,
          s = e.title,
          d = e.userId,
          m = r.useContext(o.a).loggedInUserId,
          p = r.useMemo(
            function () {
              return b({
                template_name: l,
                module_name: u,
                module_id: c,
                cursor: t,
                title: s,
                subtitle: i,
                user_id: d === m ? void 0 : d,
              })
            },
            [l, u, c, t, s, i, d, m],
          )
        return r.createElement(_.a, {
          backLocation: '/',
          history: n,
          primaryContent: r.createElement(g.a, {
            entryConfiguration: O.b,
            module: p,
            renderEmptyState: I,
            renderUnavailable: P,
            title: v,
          }),
          sidebarContent: r.createElement(a.a, { withWhoToFollow: !1 }),
          title: v,
        })
      })
    },
  },
])
//# sourceMappingURL=WIPED
