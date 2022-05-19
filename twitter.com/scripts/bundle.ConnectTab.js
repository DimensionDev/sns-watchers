;(window.webpackJsonp = window.webpackJsonp || []).push([
  [46],
  {
    '/fAK': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('ERkP'),
        o = n.n(a),
        r = n('v6aA'),
        u = n('es0u'),
        i = n('Hw0q'),
        l = n('rxPX'),
        c = function (e) {
          return function (t, n) {
            return n.location.state && n.location.state[e]
          }
        },
        d = function (e) {
          return function (t, n) {
            return Object(i.b)(e)(t, n) || c(e)(t, n)
          }
        },
        m = Object(l.a)()
          .propsFromState(function () {
            return {
              cursor: c('cursor'),
              moduleId: c('module_id'),
              moduleName: c('module_name'),
              subtitle: c('subtitle'),
              templateName: d('template_name'),
              title: c('title'),
              userId: d('user_id'),
            }
          })
          .withAnalytics({ page: 'people' }),
        s = n('yiKp'),
        f = n.n(s),
        p = (n('2G9S'), n('IAdD'), n('ZNT5')),
        b = n('QIgh'),
        _ = n('3XMw'),
        w = n.n(_),
        h = n('VTxf'),
        y = n('SrIh'),
        E = n('fTQJ'),
        I = n('VS6U'),
        g = n('wgnn'),
        N = w.a.b5298d91,
        T = function (e) {
          switch (e) {
            case g.a.NOT_FOUND:
              return o.a.createElement(h.a, null)
            default:
              return Object(y.a)('Unhandled timeline unavailable reason: '.concat(e)), null
          }
        },
        O = function () {
          return o.a.createElement(h.a, null)
        }
      t.default = m(function (e) {
        var t = e.cursor,
          n = e.history,
          a = e.moduleId,
          i = e.moduleName,
          l = e.subtitle,
          c = e.templateName,
          d = e.title,
          m = e.userId,
          s = o.a.useContext(r.a).loggedInUserId,
          _ = o.a.useMemo(
            function () {
              return (
                (n = (e = {
                  template_name: c,
                  module_name: i,
                  module_id: a,
                  cursor: t,
                  title: d,
                  subtitle: l,
                  user_id: m === s ? void 0 : m,
                }).module_id),
                (o = e.template_name || 'default'),
                (r = n || 'default'),
                (u = e.user_id || 'default'),
                Object(p.a)({
                  timelineId: 'connect-tab-'.concat(o, '-').concat(r, '-').concat(u),
                  getEndpoint: function (e) {
                    return e.URT.fetchRichConnectTimeline
                  },
                  getEndpointParams: function (t) {
                    return Object.assign({}, t, f()({ display_location: 'connect', client_type: 'rweb' }, e))
                  },
                  context: 'CONNECT_TAB',
                  perfKey: 'connect-tab',
                })
              )
              var e, n, o, r, u
            },
            [c, i, a, t, d, l, m, s],
          )
        return o.a.createElement(I.a, {
          backLocation: '/',
          history: n,
          primaryContent: o.a.createElement(E.a, {
            entryConfiguration: b.default,
            module: _,
            renderEmptyState: O,
            renderUnavailable: T,
            title: N,
          }),
          sidebarContent: o.a.createElement(u.a, { withWhoToFollow: !1 }),
          title: N,
        })
      })
    },
  },
])
//# sourceMappingURL=WIPED
