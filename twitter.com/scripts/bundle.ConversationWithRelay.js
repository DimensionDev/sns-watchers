;(window.webpackJsonp = window.webpackJsonp || []).push([
  [51],
  {
    '+s2u': function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'PromotionInfo_campaignInfo',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'AdCampaign',
            kind: 'LinkedField',
            name: 'campaign',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'status', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'end_time', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'start_time', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'currency', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'total_budget', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'remaining_budget', storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: 'Ad',
        abstractKey: null,
        hash: '3a0436d1dceeadec99dc8dc3539a7fcb',
      }
      t.default = n
    },
    '0ig/': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      })
      var n = a('i4Oy'),
        i = a('ERkP')
      function r() {
        var e = Object(i.useState)(function () {
            return n.a.get('window')
          }),
          t = e[0],
          a = e[1]
        return (
          Object(i.useEffect)(function () {
            function e(e) {
              var t = e.window
              null != t && a(t)
            }
            return (
              n.a.addEventListener('change', e),
              a(n.a.get('window')),
              function () {
                n.a.removeEventListener('change', e)
              }
            )
          }, []),
          t
        )
      }
    },
    '21nk': function (e, t, a) {
      'use strict'
      var n = a('I9iR'),
        i = a('3KVO'),
        r = a('yLYC'),
        l = a('Ud88'),
        o = (a('/2Cm'), a('aQQo').useTrackLoadQueryInRender),
        s = (a('ERkP').useDebugValue, a('K1lQ').__internal),
        c = s.fetchQueryDeduped,
        u = s.fetchQuery
      e.exports = function (e, t, a) {
        o()
        var s,
          d = l(),
          m = t.fetchKey,
          p = t.fetchPolicy,
          g = t.source,
          f = t.variables,
          y = t.networkCacheConfig,
          v = r(e, f, y)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          v.request.node.params.name !== t.name && n(!1),
            (s = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: m,
              fetchObservable: c(d, v.request.identifier, function () {
                return d === t.environment && null != g
                  ? d.executeWithSource({ operation: v, source: g })
                  : d.execute({ operation: v })
              }),
              fetchPolicy: p,
              query: v,
              renderPolicy: null == a ? void 0 : a.UNSTABLE_renderPolicy,
            })
        else {
          var b = u(d, v)
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != g && d === t.environment ? g.ifEmpty(b) : (t.environment, b),
            fetchKey: m,
            fetchPolicy: p,
            query: v,
            renderPolicy: null == a ? void 0 : a.UNSTABLE_renderPolicy,
          }
        }
        return i(s)
      }
    },
    '23An': function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        i = n.useEffect,
        r = n.useRef
      e.exports = function () {
        var e = r(!0)
        return (
          i(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1
              }
            )
          }, []),
          e
        )
      }
    },
    '2O3u': function (e, t, a) {
      'use strict'
      a.r(t)
      var n = { kind: 'InlineDataFragment', name: 'TweetActivity_metrics', hash: '15b7c2798a31f76eb517582e90ab541d' }
      t.default = n
    },
    '5emT': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        i = a.n(n),
        r = a('ERkP'),
        l = a.n(r),
        o = a('Lsrn'),
        s = a('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
                d: 'M14.548 11.634c-1.207 0-2.188-.98-2.188-2.188 0-.664.302-1.25.77-1.653-.363-.097-.736-.165-1.13-.165-2.416 0-4.375 1.96-4.375 4.376S9.585 16.38 12 16.38c2.418 0 4.377-1.96 4.377-4.376 0-.4-.07-.78-.17-1.146-.402.47-.992.776-1.66.776z',
              }),
              l.a.createElement('path', {
                d: 'M12 19.79c-7.228 0-10.12-6.724-10.24-7.01-.254-.466-.254-1.105.035-1.642C1.88 10.923 4.772 4.2 12 4.2s10.12 6.723 10.24 7.01c.254.465.254 1.104-.035 1.64-.085.216-2.977 6.94-10.205 6.94zm0-14c-6.154 0-8.668 5.787-8.772 6.033-.068.135-.068.208-.033.273.137.316 2.65 6.104 8.805 6.104 6.18 0 8.747-5.973 8.772-6.033.07-.136.07-.21.034-.274-.138-.316-2.652-6.103-8.806-6.103z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    '6s7X': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        i = a.n(n),
        r = a('ERkP'),
        l = a.n(r),
        o = a('Lsrn'),
        s = a('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
                d: 'M12 18.042c-.553 0-1-.447-1-1v-5.5c0-.553.447-1 1-1s1 .447 1 1v5.5c0 .553-.447 1-1 1z',
              }),
              l.a.createElement('circle', { cx: '12', cy: '8.042', r: '1.25' }),
              l.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    '8bFt': function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        i = a.n(n),
        r = a('3XMw'),
        l = a.n(r),
        o = a('rHpw'),
        s = a('MWbm'),
        c = a('t62R'),
        u = a('/yvb'),
        d = a('OiMc'),
        m = a('wTX1'),
        p = a('6s7X'),
        g = a('RjwM'),
        f = a('7Mjr'),
        y = a('WXWl'),
        v = l.a.affbaf62,
        b = l.a.c388d026,
        w = l.a.i2785008,
        k = l.a.d9687d23,
        _ = l.a.ac73eb5a,
        h = l.a.c5a9f921,
        E = function (e) {
          var t = e.label,
            a = e.popover
          return a
            ? i.a.createElement(
                s.a,
                null,
                i.a.createElement(
                  d.a,
                  {
                    preferredVerticalOrientation: 'up',
                    renderContent: function (e) {
                      return i.a.createElement(
                        s.a,
                        { style: L.popover },
                        i.a.createElement(
                          s.a,
                          { style: L.popoverTitle },
                          i.a.createElement(c.b, { size: 'title3', weight: 'heavy' }, t),
                        ),
                        i.a.createElement(s.a, { style: L.popoverText }, a),
                        i.a.createElement(u.a, { onPress: e, type: 'primaryOutlined' }, b),
                      )
                    },
                    withArrow: !0,
                  },
                  i.a.createElement(p.a, {
                    accessibilityLabel: v,
                    accessibilityRole: 'tooltip',
                    style: L.iconInformation,
                  }),
                ),
              )
            : null
        },
        I = function (e) {
          var t = e.label,
            a = e.popover
          return t
            ? i.a.createElement(
                s.a,
                { style: L.labelBar },
                i.a.createElement(c.b, { color: 'gray700', size: 'subtext2', style: L.labelText, weight: 'medium' }, t),
                i.a.createElement(E, { label: t, popover: a }),
              )
            : null
        },
        T = function (e) {
          var t = e.unit
          return t ? i.a.createElement(c.b, { color: 'gray700', style: L.unitText, weight: 'medium' }, t) : null
        },
        P = function (e) {
          var t,
            a,
            n = e.trendValue
          return void 0 === n
            ? null
            : ((n = Math.round(100 * n) / 100),
              (t = w(n)),
              (a = (function (e) {
                if (e < 0) {
                  var t = w(e)
                  return k({ trendValueNegativePercent: t })
                }
                if (0 === e) return _
                var a = w(e)
                return h({ trendValuePositivePercent: a })
              })(n)),
              n < 0
                ? i.a.createElement(
                    s.a,
                    { accessibilityLabel: a, style: L.trendBar },
                    i.a.createElement(g.a, { style: L.trendIconNeg }),
                    i.a.createElement(
                      c.b,
                      { accessibilityHidden: !0, color: 'red500', size: 'body', weight: 'medium' },
                      t,
                    ),
                  )
                : 0 === n
                ? i.a.createElement(
                    s.a,
                    { accessibilityLabel: a, style: L.trendBar },
                    i.a.createElement(f.a, { style: L.trendIconZero }),
                    i.a.createElement(
                      c.b,
                      { accessibilityHidden: !0, color: 'gray700', size: 'body', weight: 'medium' },
                      t,
                    ),
                  )
                : i.a.createElement(
                    s.a,
                    { accessibilityLabel: a, style: L.trendBar },
                    i.a.createElement(y.a, { style: L.trendIconPos }),
                    i.a.createElement(
                      c.b,
                      { accessibilityHidden: !0, color: 'green500', size: 'body', weight: 'medium' },
                      t,
                    ),
                  ))
        },
        L = o.a.create(function (e) {
          return {
            dataPoint: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' },
            labelBar: { display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: e.spaces.space2 },
            labelText: { marginRight: e.spaces.space4 },
            iconInformation: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: 'pointer' },
            popover: { padding: e.spaces.space32 },
            popoverTitle: { marginBottom: e.spaces.space8 },
            popoverText: { marginBottom: e.spaces.space24 },
            valueBar: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginBottom: e.spaces.space4,
            },
            unitText: { marginLeft: e.spaces.space4, flexDirection: 'column' },
            trendBar: { marginLeft: e.spaces.space4, flexDirection: 'row' },
            trendIconPos: {
              marginTop: e.spaces.space1,
              marginBottom: e.spaces.space1,
              marginRight: e.spaces.space2,
              height: e.spaces.space16,
              color: e.colors.green500,
            },
            trendIconZero: {
              marginTop: e.spaces.space1,
              marginBottom: e.spaces.space1,
              marginRight: e.spaces.space2,
              height: e.spaces.space16,
              color: e.colors.gray700,
            },
            trendIconNeg: {
              marginTop: e.spaces.space1,
              marginBottom: e.spaces.space1,
              marginRight: e.spaces.space2,
              height: e.spaces.space16,
              color: e.colors.red500,
            },
          }
        })
      t.a = function (e) {
        var t = e.animated,
          a = e.count,
          n = e.label,
          r = e.popover,
          l = e.size,
          o = e.subTextList,
          u = e.trendValue,
          d = e.unit,
          p = e.value
        return i.a.createElement(
          s.a,
          { style: L.dataPoint },
          i.a.createElement(I, { label: n, popover: r }),
          i.a.createElement(
            s.a,
            { style: L.valueBar },
            t
              ? i.a.createElement(m.a, { count: a, size: l, weight: 'bold' }, p)
              : i.a.createElement(c.b, { size: l, weight: 'bold' }, p),
            i.a.createElement(T, { unit: d }),
            i.a.createElement(P, { trendValue: u }),
          ),
          o,
        )
      }
    },
    DL4F: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'ConversationAnalyticsScreen', function () {
          return Ia
        })
      var n = a('yiKp'),
        i = a.n(n),
        r = a('m3Bd'),
        l = a.n(r),
        o = a('VrFO'),
        s = a.n(o),
        c = a('Y9Ll'),
        u = a.n(c),
        d = a('1Pcy'),
        m = a.n(d),
        p = a('5Yy7'),
        g = a.n(p),
        f = a('2VqO'),
        y = a.n(f),
        v = a('KEM+'),
        b = a.n(v),
        w = (a('2G9S'), a('ERkP')),
        k = a.n(w),
        _ = (a('KqXw'), a('WNMA'), a('XOJV')),
        h = a('rxPX'),
        E = a('0KEI'),
        I = a('S3l+'),
        T = 'CONVERSATION_ANALYTICS_SCREEN',
        P = function (e, t) {
          return t.match.params.statusId
        },
        L = function (e, t) {
          return _.a.selectHydrated(e, P(0, t))
        },
        x = function (e, t) {
          return Object(I.r)(e, P(0, t))
        },
        S = function (e, t) {
          return _.a.selectFetchStatus(e, P(0, t))
        },
        V = function (e, t) {
          return Object(I.q)(e, P(0, t))
        },
        F = Object(h.a)()
          .propsFromState(function () {
            return {
              fetchStatus: S,
              quickPromoteEligibilityFetchStatus: x,
              statusId: P,
              tweet: L,
              quickPromoteEligibility: V,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)(T),
              fetchTweetIfNeeded: _.a.fetchOneIfNeeded,
              fetchQuickPromoteEligibilityIfNeeded: I.k,
            }
          })
          .withAnalytics({ page: 'tweet', section: 'analytics', component: 'RwebConversationAnalytics' }),
        C = a('v//M'),
        A = a('W5XZ'),
        R = a('jHSc'),
        K = a('KUGV'),
        D = a('3XMw'),
        O = a.n(D),
        B = a('b5s6')
      a('0zG9')
      function j(e) {
        var t = Date.now() - e
        return { action: 'view', data: { event_info: JSON.stringify({ duration_ms: t }) } }
      }
      function N(e, t) {
        return { element: t, action: 'click', data: { profile_id: e } }
      }
      function M(e, t, a) {
        return {
          element: 'TweetActivityQueryRenderer',
          action: 'error',
          data: { event_info: e, items: [{ item_type: 0, id: a }], profile_id: t },
        }
      }
      var H = a('Rp9C'),
        z = (a('jQ3i'), a('hBpG'), a('7x/C'), a('LW0h'), a('z84I'), a('v6aA')),
        q = (a('ly4k'), O.a.ja781451),
        W = O.a.cfa1a7b8
      function Q(e) {
        return e || 0
      }
      function G(e, t) {
        var a = Q(t)
        return 0 === a ? 0 : Q(e) / a
      }
      function U(e) {
        var t = Q(e)
        return t >= 1e5 ? W(t) : q(t)
      }
      function X(e) {
        return null != e && e.value
          ? {
              count: U(null == e ? void 0 : e.value.total),
              promotionPercentage: G(null == e ? void 0 : e.value.promoted, null == e ? void 0 : e.value.total),
            }
          : {
              count: U(null == e ? void 0 : e.total_value),
              promotionPercentage: G(null == e ? void 0 : e.promoted_value, null == e ? void 0 : e.total_value),
            }
      }
      function J(e, t, a) {
        var n,
          i,
          r =
            null == t
              ? void 0
              : t.find(function (t) {
                  return t.metric_type === e
                }),
          l =
            null == a
              ? void 0
              : a.find(function (t) {
                  return t.metric_type === e
                }),
          o = null !== (n = null == r ? void 0 : r.metric_value) && void 0 !== n ? n : 0,
          s = null !== (i = null == l ? void 0 : l.metric_value) && void 0 !== i ? i : 0
        return { metric_type: e, organic_value: o, promoted_value: s, total_value: o + s }
      }
      function Y() {
        return new Date().toISOString()
      }
      var Z,
        $ = a('8bFt'),
        ee = function (e) {
          var t = e.label,
            a = e.metric,
            n = e.popover,
            i = e.showPromotionPercentages,
            r = null != a && a.value ? a.value.promoted : null == a ? void 0 : a.promoted_value,
            l = null != a && a.value ? a.value.total : null == a ? void 0 : a.total_value,
            o = G(r, l),
            s = [i && Ve(o, !0)]
          return k.a.createElement($.a, {
            animated: !0,
            count: null != l ? l : 0,
            label: t,
            popover: n,
            size: 'title1',
            subTextList: s,
            value: U(l),
          })
        },
        te = a('MWbm'),
        ae = a('rHpw'),
        ne = function (e) {
          var t = e.label,
            a = e.metric,
            n = e.popover,
            i = e.showPromotionPercentages,
            r = null != a && a.value ? a.value.promoted : null == a ? void 0 : a.promoted_value,
            l = null != a && a.value ? a.value.total : null == a ? void 0 : a.total_value,
            o = G(r, l),
            s = [i && Ve(o, !1)]
          return k.a.createElement(
            te.a,
            { style: ie.dataPoint },
            k.a.createElement($.a, {
              animated: !0,
              count: null != l ? l : 0,
              label: t,
              popover: n,
              size: 'title3',
              subTextList: s,
              value: U(l),
            }),
          )
        },
        ie = ae.a.create(function (e) {
          return { dataPoint: { flexGrow: 1 } }
        }),
        re = a('7N4s'),
        le = a('t62R'),
        oe = (a('enFi'), a('jAXQ')),
        se = a.n(oe),
        ce = a('0ig/'),
        ue = O.a.e5fe61ef,
        de = O.a.f6162a32,
        me = O.a.dbe9353d,
        pe = O.a.e044b63f,
        ge = O.a.d8abdaa4,
        fe = O.a.de0de3a7,
        ye = O.a.aeee0181,
        ve = O.a.ccab7c76,
        be = O.a.b1b4d57d,
        we = O.a.i680442e,
        ke = O.a.d5f1e553,
        _e = O.a.d24b7811,
        he = O.a.b40d33e4,
        Ee = O.a.ee547382,
        Ie = O.a.i2785008,
        Te = O.a.g33fd6b0,
        Pe = (O.a.b71059c3, O.a.de4def4d),
        Le = void 0 !== Z ? Z : (Z = a('q+jb'))
      function xe(e) {
        var t,
          a,
          n,
          i,
          r,
          l,
          o,
          s,
          c,
          u,
          d,
          m,
          p,
          g,
          f,
          y,
          v = e.metrics,
          b = e.showPromotionPercentages,
          w = e.tweet,
          _ = e.detailExpands,
          h = e.engagements,
          E = e.follows,
          I = e.impressions,
          T = e.linkClicks,
          P = e.mediaViews,
          L = e.profileVisits,
          x = k.a.useContext(re.b).isModal,
          S = Object(ce.a)().width < ae.a.theme.breakpoints.xSmall,
          V = !(null == w || null === (t = w.entities) || void 0 === t || !t.urls) && w.entities.urls.length > 0,
          F =
            !(null == w || null === (a = w.extended_entities) || void 0 === a || !a.media) &&
            w.extended_entities.media.filter(function (e) {
              return 'video' === e.type
            }).length > 0,
          C = se()(Le, v)
        k.a.useContext(z.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled') &&
          ((_ = J(
            'DetailExpands',
            null == C ? void 0 : C.datapoints_grid,
            null == C || null === (n = C.ad) || void 0 === n || null === (i = n.creative) || void 0 === i
              ? void 0
              : i.datapoints_grid,
          )),
          (h = J(
            'Engagement',
            null == C ? void 0 : C.datapoints_grid,
            null == C || null === (r = C.ad) || void 0 === r || null === (l = r.creative) || void 0 === l
              ? void 0
              : l.datapoints_grid,
          )),
          (E = J(
            'Follows',
            null == C ? void 0 : C.datapoints_grid,
            null == C || null === (o = C.ad) || void 0 === o || null === (s = o.creative) || void 0 === s
              ? void 0
              : s.datapoints_grid,
          )),
          (I = J(
            'Impressions',
            null == C ? void 0 : C.datapoints_grid,
            null == C || null === (c = C.ad) || void 0 === c || null === (u = c.creative) || void 0 === u
              ? void 0
              : u.datapoints_grid,
          )),
          (T = J(
            'LinkClicks',
            null == C ? void 0 : C.datapoints_grid,
            null == C || null === (d = C.ad) || void 0 === d || null === (m = d.creative) || void 0 === m
              ? void 0
              : m.datapoints_grid,
          )),
          (P = J(
            'MediaViews',
            null == C ? void 0 : C.datapoints_grid,
            null == C || null === (p = C.ad) || void 0 === p || null === (g = p.creative) || void 0 === g
              ? void 0
              : g.datapoints_grid,
          )),
          (L = J(
            'ProfileVisits',
            null == C ? void 0 : C.datapoints_grid,
            null == C || null === (f = C.ad) || void 0 === f || null === (y = f.creative) || void 0 === y
              ? void 0
              : y.datapoints_grid,
          )))
        var A = [
          k.a.createElement(ne, { key: me, label: me, metric: h, popover: Se(pe, b), showPromotionPercentages: b }),
          k.a.createElement(ne, { key: he, label: he, metric: _, popover: Se(Ee, b), showPromotionPercentages: b }),
          k.a.createElement(ne, { key: ge, label: ge, metric: E, popover: Se(fe, b), showPromotionPercentages: b }),
          k.a.createElement(ne, { key: ye, label: ye, metric: L, popover: Se(ve, b), showPromotionPercentages: b }),
          F
            ? k.a.createElement(ne, { key: be, label: be, metric: P, popover: Se(we, b), showPromotionPercentages: b })
            : null,
          V
            ? k.a.createElement(ne, { key: ke, label: ke, metric: T, popover: Se(_e, b), showPromotionPercentages: b })
            : null,
        ].filter(function (e) {
          return e
        })
        return k.a.createElement(
          te.a,
          {
            style: [
              Ce.grid,
              { gridTemplateColumns: x ? ' 1fr 2fr' : '1fr' },
              { gridGap: S ? ae.a.theme.spaces.space24 : ae.a.theme.spaces.space40 },
              { marginTop: S ? ae.a.theme.spaces.space24 : ae.a.theme.spaces.space40 },
              { marginHorizontal: S ? ae.a.theme.spaces.space16 : ae.a.theme.spaces.space32 },
            ],
          },
          k.a.createElement(ee, { label: ue, metric: I, popover: Se(de, b), showPromotionPercentages: b }),
          k.a.createElement(
            te.a,
            { style: [Ce.minorDataPointsGrid, { gridGap: S ? ae.a.theme.spaces.space24 : ae.a.theme.spaces.space40 }] },
            A.map(function (e, t) {
              return k.a.createElement(te.a, { key: 'minorDataPoint'.concat(t) }, e)
            }),
          ),
        )
      }
      function Se(e, t) {
        return k.a.createElement(
          te.a,
          null,
          k.a.createElement(le.b, { color: 'gray700', size: 'body', weight: 'normal' }, e),
          t
            ? k.a.createElement(
                le.b,
                {
                  color: 'primary900',
                  size: 'subtext3',
                  style: [Ce.promotionLabel, Ce.popoverPromotionLabel],
                  weight: 'bold',
                },
                Pe,
              )
            : null,
        )
      }
      function Ve(e, t) {
        var a = Ie(e),
          n = Te({ percentage: a }),
          i = t ? n : a
        return k.a.createElement(
          te.a,
          { accessibilityLabel: n, key: i, style: [Ce.subTextListItem, Ce.promotionLabel] },
          k.a.createElement(
            le.b,
            { accessibilityHidden: !0, color: 'primary900', size: 'subtext3', weight: 'bold' },
            i,
          ),
        )
      }
      var Fe,
        Ce = ae.a.create(function (e) {
          return {
            grid: { display: 'grid', marginBottom: e.spaces.space40 },
            minorDataPointsGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' },
            popoverPromotionLabel: { width: 'fit-content', marginTop: ae.a.theme.spaces.space8 },
            promotionLabel: {
              backgroundColor: ae.a.theme.colors.primary50,
              borderRadius: ae.a.theme.borderRadii.infinite,
              paddingVertical: ae.a.theme.spaces.space4,
              paddingHorizontal: ae.a.theme.spacesPx.space4 + ae.a.theme.spacesPx.space2,
            },
            subTextListItem: { flexDirection: 'row', alignItems: 'center', marginBottom: e.spaces.space2 },
          }
        }),
        Ae = a('UIzd'),
        Re = a.n(Ae),
        Ke = (a('uFXj'), a('LbZ7')),
        De = a('iEUn'),
        Oe = a('jlPL'),
        Be = a('dFWS'),
        je = void 0 !== Fe ? Fe : (Fe = a('pYyV')),
        Ne = O.a.ib1f8491,
        Me = O.a.fbdb85f4,
        He = O.a.d0eeb126,
        ze = O.a.i2785008,
        qe = O.a.g33fd6b0
      function We(e) {
        var t = e.percentageValue,
          a = ze(t),
          n = qe({ percentage: a })
        return k.a.createElement(
          te.a,
          { accessibilityLabel: n, style: Ge.percentageView },
          k.a.createElement(
            le.b,
            { accessibilityHidden: !0, color: 'primary900', size: 'subtext3', weight: 'bold' },
            a,
          ),
        )
      }
      function Qe(e) {
        var t,
          a,
          n,
          i,
          r,
          l,
          o = e.showPromotionPercentages,
          s = se()(je, e.metrics),
          c = e.likes,
          u = e.replies,
          d = e.retweets
        k.a.useContext(z.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled') &&
          ((c = J(
            'Likes',
            null == s ? void 0 : s.like_retweet_replies,
            null == s || null === (t = s.ad) || void 0 === t || null === (a = t.creative) || void 0 === a
              ? void 0
              : a.like_retweet_replies,
          )),
          (u = J(
            'Replies',
            null == s ? void 0 : s.like_retweet_replies,
            null == s || null === (n = s.ad) || void 0 === n || null === (i = n.creative) || void 0 === i
              ? void 0
              : i.like_retweet_replies,
          )),
          (d = J(
            'Retweets',
            null == s ? void 0 : s.like_retweet_replies,
            null == s || null === (r = s.ad) || void 0 === r || null === (l = r.creative) || void 0 === l
              ? void 0
              : l.like_retweet_replies,
          )))
        var m = X(c),
          p = m.count,
          g = m.promotionPercentage,
          f = X(d),
          y = f.count,
          v = f.promotionPercentage,
          b = X(u),
          w = b.count,
          _ = b.promotionPercentage
        return k.a.createElement(
          te.a,
          { style: Ge.actionsBar },
          k.a.createElement(
            Ke.a,
            null,
            k.a.createElement(
              te.a,
              { accessibilityLabel: Ne({ likeCount: p }), style: Ge.column },
              k.a.createElement(De.a, { style: Ge.actionIconsColor }),
              k.a.createElement(le.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, p),
              o ? k.a.createElement(We, { percentageValue: g }) : null,
            ),
            k.a.createElement(
              te.a,
              { accessibilityLabel: Me({ retweetCount: y }), style: Ge.column },
              k.a.createElement(Oe.a, { style: Ge.actionIconsColor }),
              k.a.createElement(le.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, y),
              o ? k.a.createElement(We, { percentageValue: v }) : null,
            ),
            k.a.createElement(
              te.a,
              { accessibilityLabel: He({ replyCount: w }), style: Ge.column },
              k.a.createElement(Be.a, { style: Ge.actionIconsColor }),
              k.a.createElement(le.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, w),
              o ? k.a.createElement(We, { percentageValue: _ }) : null,
            ),
          ),
        )
      }
      var Ge = ae.a.create(function (e) {
          return {
            column: { flexGrow: 1, marginHorizontal: 'auto', padding: e.componentDimensions.gutterHorizontal },
            actionsBar: {
              marginHorizontal: e.spaces.space16,
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.gray200,
              borderStyle: 'solid',
              borderRadius: e.borderRadii.large,
            },
            actionIconsColor: { color: e.colors.gray700, marginBottom: e.spaces.space4 },
            percentageView: {
              margin: 'auto',
              backgroundColor: ae.a.theme.colors.primary50,
              borderRadius: ae.a.theme.borderRadii.infinite,
              color: ae.a.theme.colors.primary,
              marginTop: ae.a.theme.spaces.space4,
              paddingVertical: ae.a.theme.spaces.space4,
              paddingHorizontal: ae.a.theme.spacesPx.space4 + ae.a.theme.spacesPx.space2,
            },
            promotionIcon: { fontSize: e.spaces.space4, color: e.colors.primary, marginRight: e.spaces.space4 },
          }
        }),
        Ue = a('97Jx'),
        Xe = a.n(Ue),
        Je = a('gmpV'),
        Ye = a('876e'),
        Ze = a('JYMr'),
        $e = a('h0NW'),
        et = O.a.db6efeb8,
        tt = O.a.j6daea85,
        at = O.a.jade381b,
        nt = O.a.d725a288,
        it = O.a.hf9ed10f,
        rt = O.a.f42a198d
      function lt(e) {
        var t = e.currency,
          a = e.endTime,
          n = e.isPaused,
          i = e.remainingBudget,
          r = e.startTime,
          l = e.totalBudget,
          o = k.a.useContext(z.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled'),
          s = a ? new Date(a) : null,
          c = r ? new Date(r) : null,
          u = !!s && s > new Date(Date.now()),
          d = s && c ? Object(Je.a)(new Date(c), new Date(s)) : 0,
          m = a && u ? Ye.a.getTimeLeftLabel(a) : null,
          p = s ? nt(s) : '',
          g = s ? at(s) : '',
          f = it({ endTimeString: p, endDateString: g }),
          y = (function (e, t, a) {
            if (!e || !t || !a || t > e) return null
            var n = function (e) {
              return e.toLocaleString([], {
                style: 'currency',
                currency: a,
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })
            }
            try {
              var i = n((e - t) / 1e6),
                r = n(e / 1e6)
              return rt({ spentBudget: i, totalBudget: r })
            } catch (l) {
              return null
            }
          })(l, i, t)
        return k.a.createElement(
          te.a,
          { style: st.promotionInfoView },
          k.a.createElement(
            te.a,
            { style: st.infoItemView },
            k.a.createElement(ot, {
              budgetLabel: o ? y : null,
              endTimeLabel: f,
              isPaused: n,
              percentagePassed: d,
              timeLeftLabel: m,
            }),
          ),
        )
      }
      function ot(e) {
        var t = e.budgetLabel,
          a = e.endTimeLabel,
          n = e.isPaused,
          i = e.percentagePassed,
          r = e.timeLeftLabel,
          l = {
            items: [
              {
                label: k.a.createElement(le.b, { size: 'headline2', weight: 'heavy' }, n ? tt : et),
                description: r
                  ? k.a.createElement(
                      k.a.Fragment,
                      null,
                      k.a.createElement(
                        te.a,
                        { style: st.progressBarContainer },
                        k.a.createElement(Ze.a, {
                          colorValue: n ? ae.a.theme.colors.gray400 : ae.a.theme.colors.primary,
                          progress: i,
                          style: st.progressBar,
                        }),
                      ),
                      k.a.createElement(
                        te.a,
                        { style: st.subtexts },
                        t &&
                          k.a.createElement(le.b, { color: 'gray700', hoverLabel: { label: null != t ? t : '' } }, t),
                        k.a.createElement(le.b, { color: 'gray700', hoverLabel: { label: a } }, r),
                      ),
                    )
                  : null,
              },
            ],
          }
        return k.a.createElement($e.a, Xe()({}, l, { containerStyle: st.infoItem }))
      }
      var st = ae.a.create(function (e) {
          return {
            promotionInfoView: {
              position: 'sticky',
              bottom: 0,
              left: 0,
              backgroundColor: e.colors.navigationBackground,
              borderTopWidth: e.borderWidths.small,
              borderColor: e.colors.gray200,
              borderStyle: 'solid',
              paddingVertical: e.spaces.space24,
              paddingHorizontal: e.spaces.space32,
              flexDirection: 'row',
              alignItems: 'flex-start',
            },
            promotionInfoViewNarrow: { flexWrap: 'wrap' },
            infoItemView: { flex: 1 },
            infoItem: { paddingHorizontal: 0, paddingVertical: 0 },
            progressBarContainer: {
              backgroundColor: e.colors.gray200,
              borderRadius: e.borderRadii.medium,
              height: 'calc('.concat(e.spaces.space4, ' + ').concat(e.spaces.space2, ')'),
              marginTop: e.spaces.space12,
              marginBottom: e.spaces.space8,
            },
            progressBar: { borderRadius: e.borderRadii.medium, height: '100%' },
            subtexts: { flexDirection: 'row', justifyContent: 'space-between' },
          }
        }),
        ct = a('ddV6'),
        ut = a.n(ct),
        dt = (a('hBvt'), a('/yvb')),
        mt = O.a.d228a9a0,
        pt = O.a.c174e46e
      function gt(e) {
        var t,
          a = e.buttonString,
          n = e.buttonTestID,
          i = e.infoItemGroup,
          r = e.link,
          l = e.onButtonPress,
          o = k.a.useContext(z.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled'),
          s = null !== (t = e.expandButtonText) && void 0 !== t ? t : mt,
          c = Object(ce.a)(),
          u = !k.a.useContext(re.b).isModal,
          d = c.width <= ae.a.theme.breakpoints.xSmall,
          m = k.a.useState(!1),
          p = ut()(m, 2),
          g = p[0],
          f = p[1],
          y = g ? pt : s,
          v = [ft.promotionInfoView, u && ft.promotionInfoViewNarrow, d && ft.promotionInfoViewXSmall]
        return o
          ? k.a.createElement(
              te.a,
              { style: v },
              k.a.createElement(
                te.a,
                {
                  style: u ? (g ? ft.promotionInfoTextVisible : ft.promotionInfoTextHidden) : ft.promotionInfoTextWide,
                },
                i,
              ),
              k.a.createElement(
                te.a,
                { style: u ? ft.buttonViewNarrow : ft.buttonViewWide },
                k.a.createElement(dt.a, { link: r, onPress: l, size: 'large', testID: n, type: 'primaryFilled' }, a),
              ),
              u &&
                k.a.createElement(
                  dt.a,
                  {
                    onPress: function () {
                      f(u && !g)
                    },
                    size: 'large',
                    type: 'primaryText',
                  },
                  y,
                ),
            )
          : k.a.createElement(
              te.a,
              { style: v },
              k.a.createElement(te.a, { style: [ft.infoItemView, u && ft.infoItemViewNarrow] }, i),
              k.a.createElement(
                te.a,
                { style: u ? [ft.buttonViewNarrow, { flexGrow: 0 }] : ft.buttonViewWide },
                k.a.createElement(dt.a, { link: r, onPress: l, size: 'large', testID: n, type: 'primaryFilled' }, a),
              ),
            )
      }
      var ft = ae.a.create(function (e) {
          return {
            promotionInfoTextVisible: {
              display: 'visible',
              marginBottom: e.spaces.space24,
              flexWrap: 'wrap',
              flexGrow: 1,
              flexShrink: 'initial',
            },
            promotionInfoTextHidden: { display: 'none' },
            promotionInfoTextWide: { flexGrow: 1, flexShrink: 'initial' },
            promotionInfoView: {
              position: 'sticky',
              bottom: 0,
              left: 0,
              backgroundColor: e.colors.navigationBackground,
              borderTopWidth: e.borderWidths.small,
              borderColor: e.colors.gray200,
              borderStyle: 'solid',
              padding: e.spaces.space32,
              flexDirection: 'row',
              alignItems: 'flex-start',
            },
            promotionInfoViewNarrow: {
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              paddingVertical: e.spaces.space24,
            },
            promotionInfoViewXSmall: { padding: e.spaces.space16 },
            infoItemView: { flexShrink: 'initial', flexWrap: 'wrap' },
            infoItemViewNarrow: { paddingBottom: e.spaces.space24 },
            buttonViewNarrow: { flexGrow: 1, marginRight: e.spaces.space16 },
            buttonViewWide: { margin: 'auto', marginLeft: e.spaces.space32 },
          }
        }),
        yt = a('Irs7'),
        vt = a('yE5w'),
        bt = O.a.a63a89fe,
        wt = O.a.j401e4bc,
        kt = O.a.e8adeec8,
        _t = O.a.ja781451
      function ht(e) {
        var t = Object(yt.b)(),
          a = _t(Q(e.impressions)),
          n = _t(Q(e.engagements)),
          i = wt({ impressions: a, engagements: n }),
          r = {
            items: [{ label: k.a.createElement(le.b, { size: 'headline2', weight: 'heavy' }, bt), description: i }],
          }
        var l = k.a.createElement($e.a, Xe()({}, r, { containerStyle: Et.infoItem })),
          o = null !== Object(K.a)(),
          s = ''
            .concat(e.tweetPermalink, '/')
            .concat(o ? vt.a.Webview : vt.a.Rweb, '/')
            .concat(vt.c.Intro)
        return k.a.createElement(gt, {
          buttonString: kt,
          infoItemGroup: l,
          link: s,
          onButtonPress: function () {
            t.scribe(N(e.userId, 'PromoteAgainButton'))
          },
        })
      }
      var Et = ae.a.create(function (e) {
          return {
            infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' },
            decorationContainer: { height: e.spaces.space24, width: e.spaces.space24, marginRight: e.spaces.space24 },
            icon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.green500 },
          }
        }),
        It = O.a.dcfb0332,
        Tt = O.a.g6bf2fda,
        Pt = O.a.df2c469a,
        Lt = O.a.ja781451
      function xt(e) {
        var t = Object(yt.b)(),
          a = null !== Object(K.a)(),
          n = Lt(Q(e.impressions)),
          i = Tt({ impressions: n })
        var r = {
            items: [{ label: k.a.createElement(le.b, { size: 'headline1', weight: 'heavy' }, It), description: i }],
          },
          l = k.a.createElement($e.a, Xe()({}, r, { containerStyle: St.infoItem }))
        return k.a.createElement(gt, {
          buttonString: Pt,
          buttonTestID: e.buttonTestID,
          infoItemGroup: l,
          link: {
            pathname: '/i/flow/convert_to_professional',
            state: { input: { requested_variant: 'qp-'.concat(e.tweet_id, '-').concat(a ? 'true' : 'false') } },
            method: 'push',
          },
          onButtonPress: function () {
            t.scribe(N(e.userId, 'SwitchToProfessionalButton'))
          },
        })
      }
      var St = ae.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        Vt = O.a.dcfb0332,
        Ft = O.a.f96eec3c,
        Ct = O.a.e9891f7c,
        At = O.a.i859a9d3
      function Rt(e) {
        var t = Object(yt.b)(),
          a = {
            items: [{ label: k.a.createElement(le.b, { size: 'headline1', weight: 'heavy' }, Vt), description: Ft }],
          }
        var n = k.a.createElement($e.a, Xe()({}, a, { containerStyle: Kt.infoItem })),
          i = null !== Object(K.a)(),
          r = ''
            .concat(e.tweetPermalink, '/')
            .concat(i ? vt.a.Webview : vt.a.Rweb, '/')
            .concat(vt.c.Intro)
        return k.a.createElement(gt, {
          buttonString: Ct,
          expandButtonText: At,
          infoItemGroup: n,
          link: r,
          onButtonPress: function () {
            t.scribe(N(e.userId, 'NotStartedPromotionButton'))
          },
        })
      }
      var Kt = ae.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        Dt = 'switchToProfessionalButton',
        Ot = a('5emT'),
        Bt = O.a.jede3014,
        jt = O.a.i094e43b,
        Nt = O.a.f638d3e0
      function Mt(e) {
        var t = Object(yt.b)(),
          a = {
            items: [
              {
                label: k.a.createElement(le.b, { size: 'headline2', weight: 'heavy' }, Bt),
                description: jt,
                decoration: k.a.createElement(Ot.a, { style: [qt.icon, qt.decorationContainer] }),
              },
            ],
          }
        return k.a.createElement(
          te.a,
          { style: qt.promotionInfoView },
          k.a.createElement(
            te.a,
            { style: qt.infoItemView },
            k.a.createElement($e.a, Xe()({}, a, { containerStyle: qt.infoItem })),
          ),
          k.a.createElement(
            te.a,
            { style: qt.buttonView },
            k.a.createElement(
              le.b,
              {
                color: 'primary',
                link: 'https://twitter.com/adspolicy',
                onPress: function () {
                  t.scribe(N(e.userId, 'ReviewPolicyButton'))
                },
              },
              Nt,
            ),
          ),
        )
      }
      var Ht,
        zt,
        qt = ae.a.create(function (e) {
          return {
            promotionInfoView: {
              position: 'sticky',
              bottom: 0,
              left: 0,
              backgroundColor: e.colors.navigationBackground,
              borderTopWidth: e.borderWidths.small,
              borderColor: e.colors.gray200,
              borderStyle: 'solid',
              padding: e.spaces.space24,
              flexDirection: 'row',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
            },
            infoItemView: { flexShrink: 'initial', flexWrap: 'wrap' },
            infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' },
            buttonView: { marginTop: e.spaces.space16, marginLeft: e.spaces.space48 },
            decorationContainer: { height: e.spaces.space24, width: e.spaces.space24, marginRight: e.spaces.space24 },
            icon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.gray700 },
          }
        }),
        Wt =
          (a('yH/f'),
          Object.freeze({
            notProfessional: 'not_professional',
            notStarted: 'not_started',
            underReview: 'under_review',
            running: 'running',
            completed: 'completed',
            paused: 'paused',
          })),
        Qt = void 0 !== Ht ? Ht : (Ht = a('+s2u')),
        Gt = void 0 !== zt ? zt : (zt = a('W08J'))
      function Ut(e) {
        var t,
          a,
          n,
          i,
          r,
          l,
          o,
          s,
          c,
          u,
          d,
          m,
          p,
          g,
          f,
          y,
          v,
          b,
          w,
          _,
          h = e.promotionInfoState,
          E = e.tweet,
          I = e.engagements,
          T = e.impressions,
          P = se()(Qt, e.campaignInfo),
          L = se()(Gt, e.metrics)
        k.a.useContext(z.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled') &&
          ((I = J(
            'Engagement',
            [],
            null == L || null === (v = L.ad) || void 0 === v || null === (b = v.creative) || void 0 === b
              ? void 0
              : b.promotion_info,
          )),
          (T = J(
            'Impressions',
            null == L ? void 0 : L.promotion_info,
            null == L || null === (w = L.ad) || void 0 === w || null === (_ = w.creative) || void 0 === _
              ? void 0
              : _.promotion_info,
          )))
        var x =
            null !== (t = I) && void 0 !== t && t.value
              ? I.value.promoted
              : null === (a = I) || void 0 === a
              ? void 0
              : a.promoted_value,
          S =
            null !== (n = T) && void 0 !== n && n.value
              ? T.value.promoted
              : null === (i = T) || void 0 === i
              ? void 0
              : i.promoted_value,
          V =
            null !== (r = T) && void 0 !== r && r.value
              ? T.value.total
              : null === (l = T) || void 0 === l
              ? void 0
              : l.total_value
        switch (h) {
          case Wt.notProfessional:
            return k.a.createElement(xt, { buttonTestID: Dt, impressions: V, tweet_id: E.id_str, userId: e.userId })
          case Wt.notStarted:
            return k.a.createElement(Rt, { tweetPermalink: E.permalink, userId: e.userId })
          case Wt.underReview:
            return k.a.createElement(Mt, { userId: e.userId })
          case Wt.running:
            return k.a.createElement(lt, {
              currency: null == P || null === (o = P.campaign) || void 0 === o ? void 0 : o.currency,
              endTime: null == P || null === (s = P.campaign) || void 0 === s ? void 0 : s.end_time,
              isPaused: !1,
              remainingBudget: null == P || null === (c = P.campaign) || void 0 === c ? void 0 : c.remaining_budget,
              startTime: null == P || null === (u = P.campaign) || void 0 === u ? void 0 : u.start_time,
              totalBudget: null == P || null === (d = P.campaign) || void 0 === d ? void 0 : d.total_budget,
            })
          case Wt.completed:
            return k.a.createElement(ht, {
              engagements: x,
              impressions: S,
              tweetPermalink: E.permalink,
              userId: e.userId,
            })
          case Wt.paused:
            return k.a.createElement(lt, {
              currency: null == P || null === (m = P.campaign) || void 0 === m ? void 0 : m.currency,
              endTime: null == P || null === (p = P.campaign) || void 0 === p ? void 0 : p.end_time,
              isPaused: !0,
              remainingBudget: null == P || null === (g = P.campaign) || void 0 === g ? void 0 : g.remaining_budget,
              startTime: null == P || null === (f = P.campaign) || void 0 === f ? void 0 : f.start_time,
              totalBudget: null == P || null === (y = P.campaign) || void 0 === y ? void 0 : y.total_budget,
            })
          default:
            return null
        }
      }
      var Xt,
        Jt,
        Yt,
        Zt = a('Ud88'),
        $t = a.n(Zt),
        ea = a('n0Rl'),
        ta = a('Hsf0'),
        aa = a.n(ta),
        na = a('LLQb'),
        ia = O.a.deaf5b15,
        ra = void 0 !== Xt ? Xt : (Xt = a('2O3u')),
        la = (void 0 !== Jt || (Jt = a('njVe')), void 0 !== Yt ? Yt : (Yt = a('wfDE'))),
        oa = Object(ea.b)(la, { errorConfig: { context: T } })
      function sa(e) {
        var t = e.hidePromotionInfo,
          a = e.quickPromoteEligibility,
          n = e.tweet,
          i = e.userId,
          r = Object(yt.b)(),
          l = $t()(),
          o = Object(E.useCreateLocalApiErrorHandler)(T)
        return (
          k.a.useEffect(
            function () {
              var e = o({ showToast: !1 })
              Re()(l, la, { restId: n.id_str }).subscribe({ error: e })
            },
            [n, l, o],
          ),
          k.a.createElement(oa, {
            render: function (e) {
              if (e.fetchStatus === ea.a.FAILED) {
                var l = e.retry
                return (
                  r.scribe(M('NetworkError', i, n.id_str)),
                  k.a.createElement(na.a, { onRequestRetry: l, retryMessage: ia })
                )
              }
              if (e.fetchStatus === ea.a.LOADED) {
                var o,
                  s,
                  c =
                    null === (o = e.data) || void 0 === o || null === (s = o.tweet_result_by_rest_id) || void 0 === s
                      ? void 0
                      : s.result
                if ('Tweet' === (null == c ? void 0 : c.__typename)) {
                  var u = aa()(ra, c.analytics)
                  ;(null != u && u.metrics.length) || r.scribe(M('EmptyMetricsFromBackend', i, n.id_str))
                  var d = ua(c.analytics),
                    m = d.detailExpands,
                    p = d.engagements,
                    g = d.follows,
                    f = d.impressions,
                    y = d.likes,
                    v = d.linkClicks,
                    b = d.mediaViews,
                    w = d.profileVisits,
                    _ = d.replies,
                    h = d.retweets,
                    E = (function (e) {
                      if (!e) return null
                      switch (e) {
                        case 'Eligible':
                        case 'ReplyTweet':
                          return 'not_started'
                        case 'EligibleWithPreviousCampaign':
                          return 'completed'
                        case 'IneligibleNotProfessional':
                        case 'IneligibleNotProfessionalAndAdAccountEligible':
                        case 'IneligibleNotProfessionalAndAdAccountIneligible':
                        case 'IneligibleNotProfessionalAndPendingPayment':
                          return 'not_professional'
                        case 'IneligibleCampaignPaused':
                          return 'paused'
                        case 'IneligibleCampaignRunning':
                          return 'running'
                        case 'IneligibleCampaignUnderReview':
                          return 'under_review'
                        case 'IneligibleUserUnauthorized':
                        case 'IneligibleTweet':
                        default:
                          return null
                      }
                    })(a),
                    I = ['running', 'completed', 'paused'].includes(E)
                  return k.a.createElement(
                    te.a,
                    { style: ma.tweetActivity },
                    k.a.createElement(
                      te.a,
                      { style: ma.metricsView },
                      k.a.createElement(Qe, { likes: y, replies: _, retweets: h, showPromotionPercentages: I }),
                      k.a.createElement(xe, {
                        detailExpands: m,
                        engagements: p,
                        follows: g,
                        impressions: f,
                        linkClicks: v,
                        mediaViews: b,
                        profileVisits: w,
                        showPromotionPercentages: I,
                        tweet: n,
                      }),
                    ),
                    t || !E
                      ? null
                      : k.a.createElement(Ut, {
                          campaignInfo: c.quick_promotion,
                          engagements: p,
                          impressions: f,
                          promotionInfoState: E,
                          tweet: n,
                          userId: i,
                        }),
                  )
                }
              }
              return null
            },
            variables: { restId: n.id_str },
          })
        )
      }
      var ca = function (e, t) {
          return e
            ? e.metrics.find(function (e) {
                return e.key === t
              })
            : null
        },
        ua = function (e) {
          var t = aa()(ra, e)
          return {
            detailExpands: ca(t, 'DetailExpands'),
            engagements: ca(t, 'Engagements'),
            follows: ca(t, 'Follows'),
            impressions: ca(t, 'Impressions'),
            likes: ca(t, 'Favorites'),
            linkClicks: ca(t, 'UrlClicks'),
            mediaViews: ca(t, 'MediaViews'),
            profileVisits: ca(t, 'UserProfileClicks'),
            replies: ca(t, 'Replies'),
            retweets: ca(t, 'Retweets'),
          }
        }
      var da,
        ma = ae.a.create(function (e) {
          return { tweetActivity: { flex: 1 }, metricsView: { flexGrow: 1 } }
        }),
        pa = O.a.deaf5b15,
        ga = void 0 !== da ? da : (da = a('EhgS')),
        fa = Object(ea.b)(ga, { errorConfig: { context: T } })
      function ya(e) {
        var t = e.hidePromotionInfo,
          a = e.quickPromoteEligibility,
          n = e.tweet,
          i = e.userId,
          r = Object(yt.b)(),
          l = $t()(),
          o = Object(E.useCreateLocalApiErrorHandler)(T),
          s = k.a.useMemo(Y, [])
        return (
          k.a.useEffect(
            function () {
              var e = o({ showToast: !1 })
              Re()(l, ga, { restId: n.id_str, from_time: new Date(n.created_at).toISOString(), to_time: s }).subscribe({
                error: e,
              })
            },
            [n, l, o, s],
          ),
          k.a.createElement(fa, {
            render: function (e) {
              if (e.fetchStatus === ea.a.FAILED) {
                var l = e.retry
                return (
                  r.scribe(M('NetworkError', i, n.id_str)),
                  k.a.createElement(na.a, { onRequestRetry: l, retryMessage: pa })
                )
              }
              if (e.fetchStatus === ea.a.LOADED) {
                var o,
                  s,
                  c =
                    null === (o = e.data) || void 0 === o || null === (s = o.tweet_result_by_rest_id) || void 0 === s
                      ? void 0
                      : s.result
                if ('Tweet' === (null == c ? void 0 : c.__typename)) {
                  var u = (function (e) {
                      if (!e) return null
                      switch (e) {
                        case 'Eligible':
                        case 'ReplyTweet':
                          return 'not_started'
                        case 'EligibleWithPreviousCampaign':
                          return 'completed'
                        case 'IneligibleNotProfessional':
                        case 'IneligibleNotProfessionalAndAdAccountEligible':
                        case 'IneligibleNotProfessionalAndAdAccountIneligible':
                        case 'IneligibleNotProfessionalAndPendingPayment':
                          return 'not_professional'
                        case 'IneligibleCampaignPaused':
                          return 'paused'
                        case 'IneligibleCampaignRunning':
                          return 'running'
                        case 'IneligibleCampaignUnderReview':
                          return 'under_review'
                        case 'IneligibleUserUnauthorized':
                        case 'IneligibleTweet':
                        default:
                          return null
                      }
                    })(a),
                    d = ['running', 'completed', 'paused'].includes(u)
                  return k.a.createElement(
                    te.a,
                    { style: va.tweetActivity },
                    k.a.createElement(
                      te.a,
                      { style: va.metricsView },
                      k.a.createElement(Qe, {
                        likes: null,
                        metrics: c,
                        replies: null,
                        retweets: null,
                        showPromotionPercentages: d,
                      }),
                      k.a.createElement(xe, {
                        detailExpands: null,
                        engagements: null,
                        follows: null,
                        impressions: null,
                        linkClicks: null,
                        mediaViews: null,
                        metrics: c,
                        profileVisits: null,
                        showPromotionPercentages: d,
                        tweet: n,
                      }),
                    ),
                    t || !u
                      ? null
                      : k.a.createElement(Ut, {
                          campaignInfo: c.quick_promotion,
                          engagements: null,
                          impressions: null,
                          metrics: c,
                          promotionInfoState: u,
                          tweet: n,
                          userId: i,
                        }),
                  )
                }
              }
              return null
            },
            variables: { restId: n.id_str, from_time: new Date(n.created_at).toISOString(), to_time: s },
          })
        )
      }
      var va = ae.a.create(function (e) {
          return { tweetActivity: { flex: 1 }, metricsView: { flexGrow: 1 } }
        }),
        ba = a('E0cF'),
        wa = a('q9Zt'),
        ka = ['data'],
        _a = O.a.g9079b93,
        ha = O.a.a57daeb1,
        Ea = O.a.deaf5b15,
        Ia = (function (e) {
          g()(a, e)
          var t = y()(a)
          function a() {
            var e
            s()(this, a)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(m()(e), '_handleFetchTweet', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler
                ;(0, t.fetchTweetIfNeeded)(t.statusId).catch(a(A.a))
              }),
              b()(m()(e), '_handleFetchQuickPromoteEligibility', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler
                return (0, t.fetchQuickPromoteEligibilityIfNeeded)({ statusId: t.statusId }).catch(a())
              }),
              b()(m()(e), '_render', function () {
                var t = e.props,
                  a = t.quickPromoteEligibility,
                  n = t.tweet,
                  i = e.context.featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled'),
                  r = (n && ba.a.getOriginalTweet(n)) || void 0
                return !r || (r && r.user.id_str !== e.context.loggedInUserId)
                  ? k.a.createElement(wa.a, { onRetry: null, title: _a })
                  : (e._scribeEligibility(),
                    k.a.createElement(
                      te.a,
                      { style: Ta.topLevelView },
                      k.a.createElement(
                        te.a,
                        { style: Ta.quoteTweet },
                        k.a.createElement(B.a, {
                          isCondensed: !0,
                          style: { cursor: 'default' },
                          tweetId: r.id_str,
                          withLink: !1,
                          withUserHoverCard: !1,
                        }),
                      ),
                      i
                        ? k.a.createElement(ya, {
                            hidePromotionInfo: !1,
                            quickPromoteEligibility: a,
                            tweet: r,
                            userId: e.context.loggedInUserId || '',
                          })
                        : k.a.createElement(sa, {
                            hidePromotionInfo: !1,
                            quickPromoteEligibility: a,
                            tweet: r,
                            userId: e.context.loggedInUserId || '',
                          }),
                    ))
              }),
              b()(m()(e), '_setAppBarRef', function (t) {
                e._appBarRef = t
              }),
              b()(m()(e), '_handleGoBack', function () {
                e.props.history.goBackThroughModals()
              }),
              b()(m()(e), '_scribeEligibility', function () {
                var t = e.props,
                  a = t.analytics,
                  n = t.quickPromoteEligibility
                a.scribe({ element: 'eligibility', action: 'view', data: { event_info: n || '' } })
              }),
              b()(m()(e), '_scribeDwellTime', function () {
                var t = e.props,
                  a = t.analytics,
                  n = t.tweet,
                  r = (n && ba.a.getOriginalTweet(n)) || void 0,
                  o = j(e._dwellStartTime),
                  s = o.data,
                  c = l()(o, ka)
                a.scribe(i()(i()({}, c), {}, { data: i()(i()({}, s), {}, { items: r ? [H.a.getTweetItem(r)] : [] }) }))
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchTweet(),
                    this._handleFetchQuickPromoteEligibility(),
                    (this._dwellStartTime = Date.now())
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._scribeDwellTime()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    a = e.history,
                    n = e.tweet,
                    i = (n && ba.a.getOriginalTweet(n)) || void 0,
                    r = null !== Object(K.a)()
                  return k.a.createElement(
                    R.b,
                    {
                      appBarRef: this._setAppBarRef,
                      backLocation: i ? i.permalink : '/',
                      hideBackButton: r,
                      history: a,
                      onBackClick: this._handleGoBack,
                      renderHeader: function (e) {
                        return r ? null : e
                      },
                      title: r ? null : ha,
                    },
                    k.a.createElement(C.a, { fetchStatus: t, render: this._render, retryMessage: Ea }),
                  )
                },
              },
            ]),
            a
          )
        })(k.a.PureComponent)
      b()(Ia, 'contextType', z.a)
      var Ta = ae.a.create(function (e) {
          return { topLevelView: { flex: 1 }, quoteTweet: { margin: e.spaces.space16, marginBottom: e.spaces.space12 } }
        }),
        Pa = F(Ia)
      t.default = Pa
    },
    EhgS: function (e, t, a) {
      'use strict'
      a.r(t)
      var n,
        i,
        r,
        l,
        o,
        s,
        c,
        u,
        d,
        m,
        p,
        g = {
          fragment: {
            argumentDefinitions: [
              (n = { defaultValue: null, kind: 'LocalArgument', name: 'from_time' }),
              (i = { defaultValue: null, kind: 'LocalArgument', name: 'restId' }),
              (r = { defaultValue: null, kind: 'LocalArgument', name: 'to_time' }),
            ],
            kind: 'Fragment',
            metadata: null,
            name: 'TweetActivityM2Query',
            selections: [
              {
                alias: null,
                args: (l = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'restId' },
                  { kind: 'Literal', name: 's', value: 47 },
                ]),
                concreteType: 'TweetResults',
                kind: 'LinkedField',
                name: 'tweet_result_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'result',
                    plural: !1,
                    selections: [
                      (o = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                      { args: null, kind: 'FragmentSpread', name: 'LikeRetweetReplyAnalytics_metrics' },
                      { args: null, kind: 'FragmentSpread', name: 'DataPointsGrid_metrics' },
                      { args: null, kind: 'FragmentSpread', name: 'PromotionInfo_metrics' },
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: 'Ad',
                            kind: 'LinkedField',
                            name: 'quick_promotion',
                            plural: !1,
                            selections: [{ args: null, kind: 'FragmentSpread', name: 'PromotionInfo_campaignInfo' }],
                            storageKey: null,
                          },
                        ],
                        type: 'Tweet',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: [i, n, r],
            kind: 'Operation',
            name: 'TweetActivityM2Query',
            selections: [
              {
                alias: null,
                args: l,
                concreteType: 'TweetResults',
                kind: 'LinkedField',
                name: 'tweet_result_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'result',
                    plural: !1,
                    selections: [
                      o,
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
                            alias: 'like_retweet_replies',
                            args: [
                              (s = {
                                kind: 'Literal',
                                name: 'requested_metrics',
                                value: ['Likes', 'Retweets', 'Replies'],
                              }),
                            ],
                            concreteType: 'AnayticsMetricsTotalValue',
                            kind: 'LinkedField',
                            name: 'organic_metrics_total',
                            plural: !0,
                            selections: (c = [
                              { alias: null, args: null, kind: 'ScalarField', name: 'metric_type', storageKey: null },
                              { alias: null, args: null, kind: 'ScalarField', name: 'metric_value', storageKey: null },
                            ]),
                            storageKey: 'organic_metrics_total(requested_metrics:["Likes","Retweets","Replies"])',
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'Ad',
                            kind: 'LinkedField',
                            name: 'ad',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: [{ kind: 'Variable', name: 'tweet_id', variableName: 'restId' }],
                                concreteType: 'AdCreative',
                                kind: 'LinkedField',
                                name: 'creative',
                                plural: !1,
                                selections: [
                                  {
                                    alias: 'like_retweet_replies',
                                    args: [
                                      (u = {
                                        fields: [{ kind: 'Variable', name: 'iso8601_time', variableName: 'from_time' }],
                                        kind: 'ObjectValue',
                                        name: 'from_time',
                                      }),
                                      s,
                                      (d = {
                                        fields: [{ kind: 'Variable', name: 'iso8601_time', variableName: 'to_time' }],
                                        kind: 'ObjectValue',
                                        name: 'to_time',
                                      }),
                                    ],
                                    concreteType: 'HubbleMetricsTotalValue',
                                    kind: 'LinkedField',
                                    name: 'metrics_total',
                                    plural: !0,
                                    selections: c,
                                    storageKey: null,
                                  },
                                  (m = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                                  {
                                    alias: 'datapoints_grid',
                                    args: [
                                      u,
                                      (p = {
                                        kind: 'Literal',
                                        name: 'requested_metrics',
                                        value: [
                                          'DetailExpands',
                                          'Engagement',
                                          'Follows',
                                          'Impressions',
                                          'LinkClicks',
                                          'MediaViews',
                                          'ProfileVisits',
                                        ],
                                      }),
                                      d,
                                    ],
                                    concreteType: 'HubbleMetricsTotalValue',
                                    kind: 'LinkedField',
                                    name: 'metrics_total',
                                    plural: !0,
                                    selections: c,
                                    storageKey: null,
                                  },
                                  {
                                    alias: 'promotion_info',
                                    args: [
                                      u,
                                      {
                                        kind: 'Literal',
                                        name: 'requested_metrics',
                                        value: ['Impressions', 'Engagement'],
                                      },
                                      d,
                                    ],
                                    concreteType: 'HubbleMetricsTotalValue',
                                    kind: 'LinkedField',
                                    name: 'metrics_total',
                                    plural: !0,
                                    selections: c,
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              m,
                            ],
                            storageKey: null,
                          },
                          {
                            alias: 'datapoints_grid',
                            args: [p],
                            concreteType: 'AnayticsMetricsTotalValue',
                            kind: 'LinkedField',
                            name: 'organic_metrics_total',
                            plural: !0,
                            selections: c,
                            storageKey:
                              'organic_metrics_total(requested_metrics:["DetailExpands","Engagement","Follows","Impressions","LinkClicks","MediaViews","ProfileVisits"])',
                          },
                          {
                            alias: 'promotion_info',
                            args: [{ kind: 'Literal', name: 'requested_metrics', value: ['Impressions'] }],
                            concreteType: 'AnayticsMetricsTotalValue',
                            kind: 'LinkedField',
                            name: 'organic_metrics_total',
                            plural: !0,
                            selections: c,
                            storageKey: 'organic_metrics_total(requested_metrics:["Impressions"])',
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'Ad',
                            kind: 'LinkedField',
                            name: 'quick_promotion',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'AdCampaign',
                                kind: 'LinkedField',
                                name: 'campaign',
                                plural: !1,
                                selections: [
                                  { alias: null, args: null, kind: 'ScalarField', name: 'status', storageKey: null },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'end_time', storageKey: null },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'start_time',
                                    storageKey: null,
                                  },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'currency', storageKey: null },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'total_budget',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'remaining_budget',
                                    storageKey: null,
                                  },
                                  m,
                                ],
                                storageKey: null,
                              },
                              m,
                            ],
                            storageKey: null,
                          },
                          m,
                        ],
                        type: 'Tweet',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'Dua0glaegMNTqTHR-fmzow',
            metadata: {},
            name: 'TweetActivityM2Query',
            operationKind: 'query',
            text: null,
          },
        }
      ;(g.hash = 'dcebbafe94c38f979b046fe20c2dcaea'), (t.default = g)
    },
    RjwM: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        i = a.n(n),
        r = a('ERkP'),
        l = a.n(r),
        o = a('Lsrn'),
        s = a('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
                d: 'M18.707 13.293c-.39-.39-1.023-.39-1.414 0L13 17.586V5c0-.553-.447-1-1-1s-1 .447-1 1v12.586l-4.293-4.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293l6-6c.39-.39.39-1.023 0-1.414z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    W08J: function (e, t, a) {
      'use strict'
      a.r(t)
      var n,
        i = {
          argumentDefinitions: [
            { kind: 'RootArgument', name: 'from_time' },
            { kind: 'RootArgument', name: 'restId' },
            { kind: 'RootArgument', name: 'to_time' },
          ],
          kind: 'Fragment',
          metadata: null,
          name: 'PromotionInfo_metrics',
          selections: [
            {
              alias: 'promotion_info',
              args: [{ kind: 'Literal', name: 'requested_metrics', value: ['Impressions'] }],
              concreteType: 'AnayticsMetricsTotalValue',
              kind: 'LinkedField',
              name: 'organic_metrics_total',
              plural: !0,
              selections: (n = [
                { alias: null, args: null, kind: 'ScalarField', name: 'metric_type', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'metric_value', storageKey: null },
              ]),
              storageKey: 'organic_metrics_total(requested_metrics:["Impressions"])',
            },
            {
              alias: null,
              args: null,
              concreteType: 'Ad',
              kind: 'LinkedField',
              name: 'ad',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: [{ kind: 'Variable', name: 'tweet_id', variableName: 'restId' }],
                  concreteType: 'AdCreative',
                  kind: 'LinkedField',
                  name: 'creative',
                  plural: !1,
                  selections: [
                    {
                      alias: 'promotion_info',
                      args: [
                        {
                          fields: [{ kind: 'Variable', name: 'iso8601_time', variableName: 'from_time' }],
                          kind: 'ObjectValue',
                          name: 'from_time',
                        },
                        { kind: 'Literal', name: 'requested_metrics', value: ['Impressions', 'Engagement'] },
                        {
                          fields: [{ kind: 'Variable', name: 'iso8601_time', variableName: 'to_time' }],
                          kind: 'ObjectValue',
                          name: 'to_time',
                        },
                      ],
                      concreteType: 'HubbleMetricsTotalValue',
                      kind: 'LinkedField',
                      name: 'metrics_total',
                      plural: !0,
                      selections: n,
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: 'Tweet',
          abstractKey: null,
        }
      ;(i.hash = '161f91d848aab6da5ff874fe1e0b8a0c'), (t.default = i)
    },
    WXWl: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        i = a.n(n),
        r = a('ERkP'),
        l = a.n(r),
        o = a('Lsrn'),
        s = a('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
                d: 'M18.707 10.293l-6-6c-.39-.39-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L11 7.414V20c0 .553.447 1 1 1s1-.447 1-1V7.414l4.293 4.293c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    b5s6: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        i = a.n(n),
        r = a('m3Bd'),
        l = a.n(r),
        o = a('ERkP'),
        s = a.n(o),
        c = a('v6aA'),
        u = a('XOJV'),
        d = a('eSoz'),
        m = a('rxPX'),
        p = a('0KEI'),
        g = function (e, t) {
          return t.tweetId
        },
        f = function (e, t) {
          var a = t.tweetId,
            n = a && u.a.select(e, a)
          return n ? Object(d.g)(e, n) : void 0
        },
        y = Object(m.a)()
          .propsFromState(function () {
            return { community: f, hydratedTweet: u.a.createHydratedTweetSelector(g) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: d.c.fetchOneIfNeeded,
            }
          }),
        v = a('YeIG'),
        b = a('uCxL'),
        w = a('x5Pi'),
        k = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        _ = y(function (e) {
          var t = e.community,
            a = e.createLocalApiErrorHandler,
            n = e.fetchCommunityIfNeeded,
            r = e.hydratedTweet,
            o = (e.tweetId, l()(e, k)),
            u = s.a.useContext(c.a),
            d = u.featureSwitches,
            m = u.loggedInUserId,
            p = null == r ? void 0 : r.community_id_str
          s.a.useEffect(
            function () {
              p && Object(v.a)(t) && n(p).catch(a())
            },
            [t, p, a, n],
          )
          var g = d.isTrue('responsive_web_alt_text_badge_enabled'),
            f = r && Object(w.f)(r, m, t),
            y = f && Object(w.e)(f),
            _ = d.isTrue('responsive_web_reactions_enabled')
          return s.a.createElement(
            b.a,
            i()({}, o, {
              loggedInUserId: m,
              shouldShowAltLabelAlways: g,
              socialContextProps: y,
              tweet: r,
              withReactions: _,
            }),
          )
        })
      t.a = _
    },
    bCEw: function (e, t, a) {
      'use strict'
      var n = a('IGGJ')(a('K1iM')),
        i = a('23An'),
        r = a('Ud88'),
        l = a('aQQo'),
        o = l.loadQuery,
        s = l.useTrackLoadQueryInRender,
        c = a('ERkP'),
        u = c.useCallback,
        d = c.useEffect,
        m = c.useRef,
        p = c.useState,
        g = a('K1lQ').getRequest,
        f = { kind: 'NullQueryReference' }
      function y(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== g(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var a = null != t ? t : f,
          l = r()
        s()
        var c = i(),
          g = m(new Set([a])),
          v = p(function () {
            return a
          }),
          b = v[0],
          w = v[1],
          k = p(function () {
            return a
          }),
          _ = k[0],
          h = k[1]
        a !== _ && (g.current.add(a), h(a), w(a))
        var E = u(
            function () {
              c.current && (g.current.add(f), w(f))
            },
            [c],
          ),
          I = u(
            function (t, a) {
              var n =
                null != a && a.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: a.fetchPolicy,
                      networkCacheConfig: a.networkCacheConfig,
                      __nameForWarning: a.__nameForWarning,
                    }
                  : a
              if (c.current) {
                var i,
                  r = o(null !== (i = null == a ? void 0 : a.__environment) && void 0 !== i ? i : l, e, t, n)
                g.current.add(r), w(r)
              }
            },
            [l, e, w, c],
          ),
          T = m(!1)
        return (
          d(function () {
            return function () {
              T.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === T.current)
                return (
                  (T.current = !1),
                  void (
                    'NullQueryReference' !== b.kind &&
                    I(b.variables, { fetchPolicy: b.fetchPolicy, networkCacheConfig: b.networkCacheConfig })
                  )
                )
              var t = g.current
              if (c.current) {
                var a,
                  i = (0, n.default)(t)
                try {
                  for (i.s(); !(a = i.n()).done; ) {
                    var r = a.value
                    if (r === b) break
                    t.delete(r),
                      'NullQueryReference' !== r.kind &&
                        (y(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
                  }
                } catch (l) {
                  i.e(l)
                } finally {
                  i.f()
                }
              }
            },
            [b, c, I, e],
          ),
          d(
            function () {
              return function () {
                var t,
                  a = (0, n.default)(g.current)
                try {
                  for (a.s(); !(t = a.n()).done; ) {
                    var i = t.value
                    'NullQueryReference' !== i.kind &&
                      (y(e) ? i.dispose && i.dispose() : i.releaseQuery && i.releaseQuery())
                  }
                } catch (r) {
                  a.e(r)
                } finally {
                  a.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === b.kind ? null : b, I, E]
        )
      }
    },
    dFWS: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        i = a.n(n),
        r = a('ERkP'),
        l = a.n(r),
        o = a('Lsrn'),
        s = a('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
                d: 'M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    n0Rl: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return O
      })
      var n = a('ddV6'),
        i = a.n(n),
        r = a('VrFO'),
        l = a.n(r),
        o = a('Y9Ll'),
        s = a.n(o),
        c = a('1Pcy'),
        u = a.n(c),
        d = a('5Yy7'),
        m = a.n(d),
        p = a('2VqO'),
        g = a.n(p),
        f = a('KEM+'),
        y = a.n(f),
        v = (a('2G9S'), a('lTEL'), a('7x/C'), a('87if'), a('ZUdG'), a('kYxP'), a('ERkP')),
        b = a.n(v),
        w = a('pXBW'),
        k = a('6/RC'),
        _ = a('UIzd'),
        h = a.n(_),
        E = a('kGix')
      a.d(t, 'a', function () {
        return E.a
      })
      var I = a('fs1G'),
        T = a('0KEI'),
        P = a('lU4h'),
        L = a.n(P),
        x = a('21nk'),
        S = a.n(x),
        V = a('bCEw'),
        F = a.n(V),
        C = a('Ud88'),
        A = a.n(C),
        R = function (e) {
          return (0, e.render)({ fetchStatus: E.a.LOADING, data: null, error: null, retry: I.a })
        },
        K = (function (e) {
          m()(a, e)
          var t = g()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r]
            return (e = t.call.apply(t, [this].concat(i))), y()(u()(e), 'state', { error: null }), e
          }
          return (
            s()(
              a,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof w.a)) throw e
                    this.props.errorHandler(e)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return this.props.children(this.state.error, this.props.retry)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromError',
                  value: function (e) {
                    return { error: e }
                  },
                },
              ],
            ),
            a
          )
        })(b.a.Component),
        D = function (e) {
          var t = e.query,
            a = e.queryRef,
            n = e.render,
            i = S()(t, a)
          return n({ fetchStatus: E.a.LOADED, data: i, error: null, retry: I.a })
        },
        O = function (e, t) {
          if (k.canUseDOM)
            return function (a) {
              var n = a.fetchPolicy,
                r = void 0 === n ? 'store-or-network' : n,
                l = a.render,
                o = a.variables,
                s = F()(e),
                c = i()(s, 2),
                u = c[0],
                d = c[1],
                m = Object(T.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                p = L()(o),
                g = i()(p, 1)[0],
                f = b.a.useCallback(
                  function () {
                    d(g, { fetchPolicy: 'network-only' })
                  },
                  [d, g],
                )
              return (
                b.a.useLayoutEffect(
                  function () {
                    d(g, { fetchPolicy: r })
                  },
                  [r, d, g],
                ),
                u
                  ? b.a.createElement(
                      b.a.Suspense,
                      { fallback: b.a.createElement(R, { render: l }) },
                      b.a.createElement(
                        K,
                        { errorHandler: m(t.errorConfig.options || {}), key: u.fetchKey, retry: f },
                        function (t, a) {
                          return t
                            ? l({ fetchStatus: E.a.FAILED, error: t, data: null, retry: a })
                            : b.a.createElement(D, { query: e, queryRef: u, render: l })
                        },
                      ),
                    )
                  : null
              )
            }
          var a = new WeakMap()
          return function (n) {
            n.fetchPolicy
            var r = n.render,
              l = n.variables,
              o = A()(),
              s = Object(T.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              c = L()(l),
              u = i()(c, 1)[0],
              d = a.get(o)
            if (d) return d
            var m = b.a.lazy(function () {
              return h()(o, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return r({ fetchStatus: E.a.LOADED, data: e, error: null, retry: I.a })
                  },
                  function (e) {
                    return e instanceof w.a
                      ? (s(t.errorConfig.options || {})(e),
                        r({ fetchStatus: E.a.FAILED, data: null, error: e, retry: I.a }))
                      : b.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: a.set(o, e).get.bind(a, o) }
                })
            })
            return b.a.createElement(b.a.Suspense, null, b.a.createElement(m, null))
          }
        }
    },
    njVe: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
        kind: 'InlineDataFragment',
        name: 'TweetActivity_mapPromotionDataToPromotionInfoState',
        hash: 'ea7658c5830d417e53118b26df704a5f',
      }
      t.default = n
    },
    pYyV: function (e, t, a) {
      'use strict'
      a.r(t)
      var n,
        i,
        r = {
          argumentDefinitions: [
            { kind: 'RootArgument', name: 'from_time' },
            { kind: 'RootArgument', name: 'restId' },
            { kind: 'RootArgument', name: 'to_time' },
          ],
          kind: 'Fragment',
          metadata: null,
          name: 'LikeRetweetReplyAnalytics_metrics',
          selections: [
            {
              alias: 'like_retweet_replies',
              args: [(n = { kind: 'Literal', name: 'requested_metrics', value: ['Likes', 'Retweets', 'Replies'] })],
              concreteType: 'AnayticsMetricsTotalValue',
              kind: 'LinkedField',
              name: 'organic_metrics_total',
              plural: !0,
              selections: (i = [
                { alias: null, args: null, kind: 'ScalarField', name: 'metric_type', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'metric_value', storageKey: null },
              ]),
              storageKey: 'organic_metrics_total(requested_metrics:["Likes","Retweets","Replies"])',
            },
            {
              alias: null,
              args: null,
              concreteType: 'Ad',
              kind: 'LinkedField',
              name: 'ad',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: [{ kind: 'Variable', name: 'tweet_id', variableName: 'restId' }],
                  concreteType: 'AdCreative',
                  kind: 'LinkedField',
                  name: 'creative',
                  plural: !1,
                  selections: [
                    {
                      alias: 'like_retweet_replies',
                      args: [
                        {
                          fields: [{ kind: 'Variable', name: 'iso8601_time', variableName: 'from_time' }],
                          kind: 'ObjectValue',
                          name: 'from_time',
                        },
                        n,
                        {
                          fields: [{ kind: 'Variable', name: 'iso8601_time', variableName: 'to_time' }],
                          kind: 'ObjectValue',
                          name: 'to_time',
                        },
                      ],
                      concreteType: 'HubbleMetricsTotalValue',
                      kind: 'LinkedField',
                      name: 'metrics_total',
                      plural: !0,
                      selections: i,
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: 'Tweet',
          abstractKey: null,
        }
      ;(r.hash = '27115fdd65c396a2e985f14b57f88569'), (t.default = r)
    },
    'q+jb': function (e, t, a) {
      'use strict'
      a.r(t)
      var n,
        i,
        r = {
          argumentDefinitions: [
            { kind: 'RootArgument', name: 'from_time' },
            { kind: 'RootArgument', name: 'restId' },
            { kind: 'RootArgument', name: 'to_time' },
          ],
          kind: 'Fragment',
          metadata: null,
          name: 'DataPointsGrid_metrics',
          selections: [
            {
              alias: 'datapoints_grid',
              args: [
                (n = {
                  kind: 'Literal',
                  name: 'requested_metrics',
                  value: [
                    'DetailExpands',
                    'Engagement',
                    'Follows',
                    'Impressions',
                    'LinkClicks',
                    'MediaViews',
                    'ProfileVisits',
                  ],
                }),
              ],
              concreteType: 'AnayticsMetricsTotalValue',
              kind: 'LinkedField',
              name: 'organic_metrics_total',
              plural: !0,
              selections: (i = [
                { alias: null, args: null, kind: 'ScalarField', name: 'metric_type', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'metric_value', storageKey: null },
              ]),
              storageKey:
                'organic_metrics_total(requested_metrics:["DetailExpands","Engagement","Follows","Impressions","LinkClicks","MediaViews","ProfileVisits"])',
            },
            {
              alias: null,
              args: null,
              concreteType: 'Ad',
              kind: 'LinkedField',
              name: 'ad',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: [{ kind: 'Variable', name: 'tweet_id', variableName: 'restId' }],
                  concreteType: 'AdCreative',
                  kind: 'LinkedField',
                  name: 'creative',
                  plural: !1,
                  selections: [
                    {
                      alias: 'datapoints_grid',
                      args: [
                        {
                          fields: [{ kind: 'Variable', name: 'iso8601_time', variableName: 'from_time' }],
                          kind: 'ObjectValue',
                          name: 'from_time',
                        },
                        n,
                        {
                          fields: [{ kind: 'Variable', name: 'iso8601_time', variableName: 'to_time' }],
                          kind: 'ObjectValue',
                          name: 'to_time',
                        },
                      ],
                      concreteType: 'HubbleMetricsTotalValue',
                      kind: 'LinkedField',
                      name: 'metrics_total',
                      plural: !0,
                      selections: i,
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: 'Tweet',
          abstractKey: null,
        }
      ;(r.hash = '56c243307a1d52e41612e1a137c49286'), (t.default = r)
    },
    wfDE: function (e, t, a) {
      'use strict'
      a.r(t)
      var n,
        i,
        r,
        l,
        o,
        s,
        c,
        u = {
          fragment: {
            argumentDefinitions: (n = [{ defaultValue: null, kind: 'LocalArgument', name: 'restId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'TweetActivityQuery',
            selections: [
              {
                alias: null,
                args: (i = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'restId' },
                  { kind: 'Literal', name: 's', value: 47 },
                ]),
                concreteType: 'TweetResults',
                kind: 'LinkedField',
                name: 'tweet_result_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'result',
                    plural: !1,
                    selections: [
                      (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: 'TweetActivityMetricsResponse',
                            kind: 'LinkedField',
                            name: 'analytics',
                            plural: !1,
                            selections: [
                              {
                                kind: 'InlineDataFragmentSpread',
                                name: 'TweetActivity_metrics',
                                selections: (l = [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'EasyPromoteMetrics',
                                    kind: 'LinkedField',
                                    name: 'metrics',
                                    plural: !0,
                                    selections: [
                                      { alias: null, args: null, kind: 'ScalarField', name: 'key', storageKey: null },
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'TweetActivityMetric',
                                        kind: 'LinkedField',
                                        name: 'value',
                                        plural: !1,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'promoted',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'total',
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ]),
                              },
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'Ad',
                            kind: 'LinkedField',
                            name: 'quick_promotion',
                            plural: !1,
                            selections: [
                              {
                                kind: 'InlineDataFragmentSpread',
                                name: 'TweetActivity_mapPromotionDataToPromotionInfoState',
                                selections: [
                                  (o = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'approval_status',
                                    storageKey: null,
                                  }),
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'AdCampaign',
                                    kind: 'LinkedField',
                                    name: 'campaign',
                                    plural: !1,
                                    selections: [
                                      (s = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'status',
                                        storageKey: null,
                                      }),
                                    ],
                                    storageKey: null,
                                  },
                                ],
                              },
                              { args: null, kind: 'FragmentSpread', name: 'PromotionInfo_campaignInfo' },
                            ],
                            storageKey: null,
                          },
                        ],
                        type: 'Tweet',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: n,
            kind: 'Operation',
            name: 'TweetActivityQuery',
            selections: [
              {
                alias: null,
                args: i,
                concreteType: 'TweetResults',
                kind: 'LinkedField',
                name: 'tweet_result_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'result',
                    plural: !1,
                    selections: [
                      r,
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: 'TweetActivityMetricsResponse',
                            kind: 'LinkedField',
                            name: 'analytics',
                            plural: !1,
                            selections: l,
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'Ad',
                            kind: 'LinkedField',
                            name: 'quick_promotion',
                            plural: !1,
                            selections: [
                              o,
                              {
                                alias: null,
                                args: null,
                                concreteType: 'AdCampaign',
                                kind: 'LinkedField',
                                name: 'campaign',
                                plural: !1,
                                selections: [
                                  s,
                                  (c = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                                  { alias: null, args: null, kind: 'ScalarField', name: 'end_time', storageKey: null },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'start_time',
                                    storageKey: null,
                                  },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'currency', storageKey: null },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'total_budget',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'remaining_budget',
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              c,
                            ],
                            storageKey: null,
                          },
                          c,
                        ],
                        type: 'Tweet',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'm4EhEkRUCWYxAJHGji92Fw',
            metadata: {},
            name: 'TweetActivityQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(u.hash = 'ba7a6bbcaa8cf917049d8e03601b1a45'), (t.default = u)
    },
  },
])
//# sourceMappingURL=WIPED
