;(window.webpackJsonp = window.webpackJsonp || []).push([
  [49],
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
    '0Yt+': function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        i = a.n(n),
        r = a('3XMw'),
        l = a.n(r),
        o = a('KSuC'),
        s = a('rHpw'),
        c = a('MWbm'),
        u = a('t62R'),
        d = a('wTX1'),
        m = a('RjwM'),
        p = a('7Mjr'),
        g = a('WXWl'),
        f = l.a.i2785008,
        v = l.a.d9687d23,
        y = l.a.ac73eb5a,
        b = l.a.c5a9f921,
        h = function (e) {
          var t = e.label,
            a = e.popover
          return t
            ? i.a.createElement(
                c.a,
                { style: _.labelBar },
                i.a.createElement(u.b, { color: 'gray700', size: 'subtext2', weight: 'medium' }, t),
                a ? i.a.createElement(o.a, { label: t, popover: a }) : null,
              )
            : null
        },
        w = function (e) {
          var t = e.unit
          return t ? i.a.createElement(u.b, { color: 'gray700', style: _.unitText, weight: 'medium' }, t) : null
        },
        k = function (e) {
          var t,
            a,
            n = e.trendValue
          return void 0 === n
            ? null
            : ((n = Math.round(100 * n) / 100),
              (t = f(n)),
              (a = (function (e) {
                if (e < 0) {
                  var t = f(e)
                  return v({ trendValueNegativePercent: t })
                }
                if (0 === e) return y
                var a = f(e)
                return b({ trendValuePositivePercent: a })
              })(n)),
              n < 0
                ? i.a.createElement(
                    c.a,
                    { accessibilityLabel: a, style: _.trendBar },
                    i.a.createElement(m.a, { style: _.trendIconNeg }),
                    i.a.createElement(
                      u.b,
                      { accessibilityHidden: !0, color: 'red500', size: 'body', weight: 'medium' },
                      t,
                    ),
                  )
                : 0 === n
                ? i.a.createElement(
                    c.a,
                    { accessibilityLabel: a, style: _.trendBar },
                    i.a.createElement(p.a, { style: _.trendIconZero }),
                    i.a.createElement(
                      u.b,
                      { accessibilityHidden: !0, color: 'gray700', size: 'body', weight: 'medium' },
                      t,
                    ),
                  )
                : i.a.createElement(
                    c.a,
                    { accessibilityLabel: a, style: _.trendBar },
                    i.a.createElement(g.a, { style: _.trendIconPos }),
                    i.a.createElement(
                      u.b,
                      { accessibilityHidden: !0, color: 'green500', size: 'body', weight: 'medium' },
                      t,
                    ),
                  ))
        },
        _ = s.a.create(function (e) {
          return {
            dataPoint: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' },
            labelBar: { display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: e.spaces.space2 },
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
          s = e.trendValue,
          m = e.unit,
          p = e.value
        return i.a.createElement(
          c.a,
          { style: _.dataPoint },
          i.a.createElement(h, { label: n, popover: r }),
          i.a.createElement(
            c.a,
            { style: _.valueBar },
            t
              ? i.a.createElement(d.a, { count: a, size: l, weight: 'bold' }, p)
              : i.a.createElement(u.b, { size: l, weight: 'bold' }, p),
            i.a.createElement(w, { unit: m }),
            i.a.createElement(k, { trendValue: s }),
          ),
          o,
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
          v = t.networkCacheConfig,
          y = r(e, f, v)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          y.request.node.params.name !== t.name && n(!1),
            (s = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: m,
              fetchObservable: c(d, y.request.identifier, function () {
                return d === t.environment && null != g
                  ? d.executeWithSource({ operation: y, source: g })
                  : d.execute({ operation: y })
              }),
              fetchPolicy: p,
              query: y,
              renderPolicy: null == a ? void 0 : a.UNSTABLE_renderPolicy,
            })
        else {
          var b = u(d, y)
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != g && d === t.environment ? g.ifEmpty(b) : (t.environment, b),
            fetchKey: m,
            fetchPolicy: p,
            query: y,
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
    '7ioy': function (e, t, a) {
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
          name: 'VideoMetrics_metrics',
          selections: [
            {
              alias: 'video',
              args: [
                (n = {
                  kind: 'Literal',
                  name: 'requested_metrics',
                  value: [
                    'VideoViews',
                    'UniqueVideoViews',
                    'VideoStarts',
                    'VideoPlayed25Percent',
                    'VideoPlayed50Percent',
                    'VideoPlayed75Percent',
                    'VideoCompletions',
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
                'organic_metrics_total(requested_metrics:["VideoViews","UniqueVideoViews","VideoStarts","VideoPlayed25Percent","VideoPlayed50Percent","VideoPlayed75Percent","VideoCompletions"])',
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
                      alias: 'video',
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
      ;(r.hash = 'db94b7a1f21679855adafc2f96cd0ab8'), (t.default = r)
    },
    DL4F: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'ConversationAnalyticsScreen', function () {
          return sn
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
        v = a.n(f),
        y = a('KEM+'),
        b = a.n(y),
        h = (a('2G9S'), a('ERkP')),
        w = a.n(h),
        k = (a('KqXw'), a('WNMA'), a('TuTd')),
        _ = a('XOJV'),
        E = a('rxPX'),
        I = a('0KEI'),
        V = a('S3l+'),
        x = 'CONVERSATION_ANALYTICS_SCREEN',
        P = function (e, t) {
          return t.match.params.statusId
        },
        T = function (e, t) {
          return _.a.selectHydrated(e, P(0, t))
        },
        L = function (e, t) {
          return Object(V.r)(e, P(0, t))
        },
        S = function (e, t) {
          return _.a.selectFetchStatus(e, P(0, t))
        },
        C = function (e, t) {
          return Object(V.q)(e, P(0, t))
        },
        R = function (e, t) {
          return Object(k.a)(e, P(0, t))
        },
        F = Object(E.a)()
          .propsFromState(function () {
            return {
              fetchStatus: S,
              liveCounts: R,
              quickPromoteEligibilityFetchStatus: L,
              statusId: P,
              tweet: T,
              quickPromoteEligibility: C,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(x),
              fetchTweetIfNeeded: _.a.fetchOneIfNeeded,
              fetchQuickPromoteEligibilityIfNeeded: V.k,
            }
          })
          .withAnalytics({ page: 'tweet', section: 'analytics', component: 'RwebConversationAnalytics' }),
        A = a('v//M'),
        K = a('W5XZ'),
        D = a('jHSc'),
        O = a('KUGV'),
        B = a('3XMw'),
        H = a.n(B),
        j = a('b5s6')
      a('0zG9')
      function z(e) {
        var t = Date.now() - e
        return { action: 'view', data: { event_info: JSON.stringify({ duration_ms: t }) } }
      }
      function M(e, t) {
        return { element: t, action: 'click', data: { profile_id: e } }
      }
      function W(e, t, a) {
        return {
          element: 'TweetActivityQueryRenderer',
          action: 'error',
          data: { event_info: e, items: [{ item_type: 0, id: a }], profile_id: t },
        }
      }
      var N = a('Rp9C'),
        q = (a('jQ3i'), a('hBpG'), a('7x/C'), a('LW0h'), a('z84I'), a('v6aA')),
        G = (a('ly4k'), H.a.ja781451),
        Q = H.a.cfa1a7b8
      function U(e) {
        return e || 0
      }
      function X(e, t) {
        var a = U(t)
        return 0 === a ? 0 : U(e) / a
      }
      function Y(e) {
        var t = U(e)
        return t >= 1e5 ? Q(t) : G(t)
      }
      function J(e) {
        return null != e && e.value
          ? {
              count: Y(null == e ? void 0 : e.value.total),
              promotionPercentage: X(null == e ? void 0 : e.value.promoted, null == e ? void 0 : e.value.total),
            }
          : {
              count: Y(null == e ? void 0 : e.total_value),
              promotionPercentage: X(null == e ? void 0 : e.promoted_value, null == e ? void 0 : e.total_value),
            }
      }
      function Z(e, t, a) {
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
      function $() {
        return new Date().toISOString()
      }
      var ee,
        te = a('0Yt+'),
        ae = function (e) {
          var t = e.label,
            a = e.metric,
            n = e.popover,
            i = e.showPromotionPercentages,
            r = null != a && a.value ? a.value.promoted : null == a ? void 0 : a.promoted_value,
            l = null != a && a.value ? a.value.total : null == a ? void 0 : a.total_value,
            o = X(r, l),
            s = [i && Re(o, !0)]
          return w.a.createElement(te.a, {
            animated: !0,
            count: null != l ? l : 0,
            label: t,
            popover: n,
            size: 'title1',
            subTextList: s,
            value: Y(l),
          })
        },
        ne = a('MWbm'),
        ie = a('rHpw'),
        re = function (e) {
          var t = e.label,
            a = e.metric,
            n = e.popover,
            i = e.showPromotionPercentages,
            r = null != a && a.value ? a.value.promoted : null == a ? void 0 : a.promoted_value,
            l = null != a && a.value ? a.value.total : null == a ? void 0 : a.total_value,
            o = X(r, l),
            s = [i && Re(o, !1)]
          return w.a.createElement(
            ne.a,
            { style: le.dataPoint },
            w.a.createElement(te.a, {
              animated: !0,
              count: null != l ? l : 0,
              label: t,
              popover: n,
              size: 'title3',
              subTextList: s,
              value: Y(l),
            }),
          )
        },
        le = ie.a.create(function (e) {
          return { dataPoint: { flexGrow: 1 } }
        }),
        oe = a('7N4s'),
        se = a('t62R'),
        ce = (a('enFi'), a('jAXQ')),
        ue = a.n(ce),
        de = a('0ig/'),
        me = H.a.e5fe61ef,
        pe = H.a.f6162a32,
        ge = H.a.dbe9353d,
        fe = H.a.e044b63f,
        ve = H.a.d8abdaa4,
        ye = H.a.de0de3a7,
        be = H.a.aeee0181,
        he = H.a.ccab7c76,
        we = H.a.b1b4d57d,
        ke = H.a.i680442e,
        _e = H.a.d5f1e553,
        Ee = H.a.d24b7811,
        Ie = H.a.b40d33e4,
        Ve = H.a.ee547382,
        xe = H.a.i2785008,
        Pe = H.a.g33fd6b0,
        Te = (H.a.b71059c3, H.a.de4def4d),
        Le = void 0 !== ee ? ee : (ee = a('q+jb'))
      function Se(e) {
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
          v,
          y = e.metrics,
          b = e.showPromotionPercentages,
          h = e.tweet,
          k = e.detailExpands,
          _ = e.engagements,
          E = e.follows,
          I = e.impressions,
          V = e.linkClicks,
          x = e.mediaViews,
          P = e.profileVisits,
          T = w.a.useContext(oe.b).isModal,
          L = Object(de.a)().width < ie.a.theme.breakpoints.xSmall,
          S = !(null == h || null === (t = h.entities) || void 0 === t || !t.urls) && h.entities.urls.length > 0,
          C =
            !(null == h || null === (a = h.extended_entities) || void 0 === a || !a.media) &&
            h.extended_entities.media.filter(function (e) {
              return 'video' === e.type
            }).length > 0,
          R = ue()(Le, y),
          F = w.a.useContext(q.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled')
        F &&
          ((k = Z(
            'DetailExpands',
            null == R ? void 0 : R.datapoints_grid,
            null == R || null === (n = R.ad) || void 0 === n || null === (i = n.creative) || void 0 === i
              ? void 0
              : i.datapoints_grid,
          )),
          (_ = Z(
            'Engagement',
            null == R ? void 0 : R.datapoints_grid,
            null == R || null === (r = R.ad) || void 0 === r || null === (l = r.creative) || void 0 === l
              ? void 0
              : l.datapoints_grid,
          )),
          (E = Z(
            'Follows',
            null == R ? void 0 : R.datapoints_grid,
            null == R || null === (o = R.ad) || void 0 === o || null === (s = o.creative) || void 0 === s
              ? void 0
              : s.datapoints_grid,
          )),
          (I = Z(
            'Impressions',
            null == R ? void 0 : R.datapoints_grid,
            null == R || null === (c = R.ad) || void 0 === c || null === (u = c.creative) || void 0 === u
              ? void 0
              : u.datapoints_grid,
          )),
          (V = Z(
            'LinkClicks',
            null == R ? void 0 : R.datapoints_grid,
            null == R || null === (d = R.ad) || void 0 === d || null === (m = d.creative) || void 0 === m
              ? void 0
              : m.datapoints_grid,
          )),
          (x = Z(
            'MediaViews',
            null == R ? void 0 : R.datapoints_grid,
            null == R || null === (p = R.ad) || void 0 === p || null === (g = p.creative) || void 0 === g
              ? void 0
              : g.datapoints_grid,
          )),
          (P = Z(
            'ProfileVisits',
            null == R ? void 0 : R.datapoints_grid,
            null == R || null === (f = R.ad) || void 0 === f || null === (v = f.creative) || void 0 === v
              ? void 0
              : v.datapoints_grid,
          )))
        var A = [
          w.a.createElement(re, { key: ge, label: ge, metric: _, popover: Ce(fe, b), showPromotionPercentages: b }),
          w.a.createElement(re, { key: Ie, label: Ie, metric: k, popover: Ce(Ve, b), showPromotionPercentages: b }),
          w.a.createElement(re, { key: ve, label: ve, metric: E, popover: Ce(ye, b), showPromotionPercentages: b }),
          w.a.createElement(re, { key: be, label: be, metric: P, popover: Ce(he, b), showPromotionPercentages: b }),
          C && !F
            ? w.a.createElement(re, { key: we, label: we, metric: x, popover: Ce(ke, b), showPromotionPercentages: b })
            : null,
          S
            ? w.a.createElement(re, { key: _e, label: _e, metric: V, popover: Ce(Ee, b), showPromotionPercentages: b })
            : null,
        ].filter(function (e) {
          return e
        })
        return w.a.createElement(
          ne.a,
          {
            style: [
              Ae.grid,
              { gridTemplateColumns: T ? ' 1fr 2fr' : '1fr' },
              { gridGap: L ? ie.a.theme.spaces.space24 : ie.a.theme.spaces.space40 },
              { marginTop: L ? ie.a.theme.spaces.space24 : ie.a.theme.spaces.space40 },
              { marginHorizontal: L ? ie.a.theme.spaces.space16 : ie.a.theme.spaces.space32 },
            ],
          },
          w.a.createElement(ae, { label: me, metric: I, popover: Ce(pe, b), showPromotionPercentages: b }),
          w.a.createElement(
            ne.a,
            { style: [Ae.minorDataPointsGrid, { gridGap: L ? ie.a.theme.spaces.space24 : ie.a.theme.spaces.space40 }] },
            A.map(function (e, t) {
              return w.a.createElement(ne.a, { key: 'minorDataPoint'.concat(t) }, e)
            }),
          ),
        )
      }
      function Ce(e, t) {
        return w.a.createElement(
          ne.a,
          null,
          w.a.createElement(se.b, { color: 'gray700', size: 'body', weight: 'normal' }, e),
          t
            ? w.a.createElement(
                se.b,
                {
                  color: 'primary900',
                  size: 'subtext3',
                  style: [Ae.promotionLabel, Ae.popoverPromotionLabel],
                  weight: 'bold',
                },
                Te,
              )
            : null,
        )
      }
      function Re(e, t) {
        var a = xe(e),
          n = Pe({ percentage: a }),
          i = t ? n : a
        return w.a.createElement(
          ne.a,
          { accessibilityLabel: n, key: i, style: [Ae.subTextListItem, Ae.promotionLabel] },
          w.a.createElement(
            se.b,
            { accessibilityHidden: !0, color: 'primary900', size: 'subtext3', weight: 'bold' },
            i,
          ),
        )
      }
      var Fe,
        Ae = ie.a.create(function (e) {
          return {
            grid: { display: 'grid', marginBottom: e.spaces.space40 },
            minorDataPointsGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' },
            popoverPromotionLabel: { width: 'fit-content', marginTop: ie.a.theme.spaces.space8 },
            promotionLabel: {
              backgroundColor: ie.a.theme.colors.primary50,
              borderRadius: ie.a.theme.borderRadii.infinite,
              paddingVertical: ie.a.theme.spaces.space4,
              paddingHorizontal: ie.a.theme.spacesPx.space4 + ie.a.theme.spacesPx.space2,
            },
            subTextListItem: { flexDirection: 'row', alignItems: 'center', marginBottom: e.spaces.space2 },
          }
        }),
        Ke = a('UIzd'),
        De = a.n(Ke),
        Oe = (a('uFXj'), a('LbZ7')),
        Be = a('iEUn'),
        He = a('jlPL'),
        je = a('dFWS'),
        ze = void 0 !== Fe ? Fe : (Fe = a('pYyV')),
        Me = H.a.ib1f8491,
        We = H.a.fbdb85f4,
        Ne = H.a.d0eeb126,
        qe = H.a.i2785008,
        Ge = H.a.g33fd6b0
      function Qe(e) {
        var t = e.percentageValue,
          a = qe(t),
          n = Ge({ percentage: a })
        return w.a.createElement(
          ne.a,
          { accessibilityLabel: n, style: Xe.percentageView },
          w.a.createElement(
            se.b,
            { accessibilityHidden: !0, color: 'primary900', size: 'subtext3', weight: 'bold' },
            a,
          ),
        )
      }
      function Ue(e) {
        var t,
          a,
          n,
          i,
          r,
          l,
          o = e.showPromotionPercentages,
          s = ue()(ze, e.metrics),
          c = e.likes,
          u = e.replies,
          d = e.retweets
        w.a.useContext(q.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled') &&
          ((c = Z(
            'Likes',
            null == s ? void 0 : s.like_retweet_replies,
            null == s || null === (t = s.ad) || void 0 === t || null === (a = t.creative) || void 0 === a
              ? void 0
              : a.like_retweet_replies,
          )),
          (u = Z(
            'Replies',
            null == s ? void 0 : s.like_retweet_replies,
            null == s || null === (n = s.ad) || void 0 === n || null === (i = n.creative) || void 0 === i
              ? void 0
              : i.like_retweet_replies,
          )),
          (d = Z(
            'Retweets',
            null == s ? void 0 : s.like_retweet_replies,
            null == s || null === (r = s.ad) || void 0 === r || null === (l = r.creative) || void 0 === l
              ? void 0
              : l.like_retweet_replies,
          )))
        var m = J(c),
          p = m.count,
          g = m.promotionPercentage,
          f = J(d),
          v = f.count,
          y = f.promotionPercentage,
          b = J(u),
          h = b.count,
          k = b.promotionPercentage
        return w.a.createElement(
          ne.a,
          { style: Xe.actionsBar },
          w.a.createElement(
            Oe.a,
            null,
            w.a.createElement(
              ne.a,
              { accessibilityLabel: Me({ likeCount: p }), style: Xe.column },
              w.a.createElement(Be.a, { style: Xe.actionIconsColor }),
              w.a.createElement(se.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, p),
              o ? w.a.createElement(Qe, { percentageValue: g }) : null,
            ),
            w.a.createElement(
              ne.a,
              { accessibilityLabel: We({ retweetCount: v }), style: Xe.column },
              w.a.createElement(He.a, { style: Xe.actionIconsColor }),
              w.a.createElement(se.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, v),
              o ? w.a.createElement(Qe, { percentageValue: y }) : null,
            ),
            w.a.createElement(
              ne.a,
              { accessibilityLabel: Ne({ replyCount: h }), style: Xe.column },
              w.a.createElement(je.a, { style: Xe.actionIconsColor }),
              w.a.createElement(se.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, h),
              o ? w.a.createElement(Qe, { percentageValue: k }) : null,
            ),
          ),
        )
      }
      var Xe = ie.a.create(function (e) {
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
              backgroundColor: ie.a.theme.colors.primary50,
              borderRadius: ie.a.theme.borderRadii.infinite,
              color: ie.a.theme.colors.primary,
              marginTop: ie.a.theme.spaces.space4,
              paddingVertical: ie.a.theme.spaces.space4,
              paddingHorizontal: ie.a.theme.spacesPx.space4 + ie.a.theme.spacesPx.space2,
            },
            promotionIcon: { fontSize: e.spaces.space4, color: e.colors.primary, marginRight: e.spaces.space4 },
          }
        }),
        Ye = a('97Jx'),
        Je = a.n(Ye),
        Ze = a('gmpV'),
        $e = a('876e'),
        et = a('JYMr'),
        tt = a('h0NW'),
        at = H.a.db6efeb8,
        nt = H.a.j6daea85,
        it = H.a.jade381b,
        rt = H.a.d725a288,
        lt = H.a.hf9ed10f,
        ot = H.a.f42a198d
      function st(e) {
        var t = e.currency,
          a = e.endTime,
          n = e.isPaused,
          i = e.remainingBudget,
          r = e.startTime,
          l = e.totalBudget,
          o = w.a.useContext(q.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled'),
          s = a ? new Date(a) : null,
          c = r ? new Date(r) : null,
          u = !!s && s > new Date(Date.now()),
          d = s && c ? Object(Ze.a)(new Date(c), new Date(s)) : 0,
          m = a && u ? $e.a.getTimeLeftLabel(a) : null,
          p = s ? rt(s) : '',
          g = s ? it(s) : '',
          f = lt({ endTimeString: p, endDateString: g }),
          v = (function (e, t, a, n) {
            if (!e || !t || !a || t > e) return null
            var i = function (e) {
              return e.toLocaleString(null != n ? n : [], {
                style: 'currency',
                currency: a,
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })
            }
            try {
              var r = i((e - t) / 1e6),
                l = i(e / 1e6)
              return ot({ spentBudget: r, totalBudget: l })
            } catch (o) {
              return null
            }
          })(l, i, t)
        return w.a.createElement(
          ne.a,
          { style: ut.promotionInfoView },
          w.a.createElement(
            ne.a,
            { style: ut.infoItemView },
            w.a.createElement(ct, {
              budgetLabel: o ? v : null,
              endTimeLabel: f,
              isPaused: n,
              percentagePassed: d,
              timeLeftLabel: m,
            }),
          ),
        )
      }
      function ct(e) {
        var t = e.budgetLabel,
          a = e.endTimeLabel,
          n = e.isPaused,
          i = e.percentagePassed,
          r = e.timeLeftLabel,
          l = {
            items: [
              {
                label: w.a.createElement(se.b, { size: 'headline2', weight: 'heavy' }, n ? nt : at),
                description: r
                  ? w.a.createElement(
                      w.a.Fragment,
                      null,
                      w.a.createElement(
                        ne.a,
                        { style: ut.progressBarContainer },
                        w.a.createElement(et.a, {
                          colorValue: n ? ie.a.theme.colors.gray400 : ie.a.theme.colors.primary,
                          progress: i,
                          style: ut.progressBar,
                        }),
                      ),
                      w.a.createElement(
                        ne.a,
                        { style: ut.subtexts },
                        t &&
                          w.a.createElement(se.b, { color: 'gray700', hoverLabel: { label: null != t ? t : '' } }, t),
                        w.a.createElement(se.b, { color: 'gray700', hoverLabel: { label: a } }, r),
                      ),
                    )
                  : null,
              },
            ],
          }
        return w.a.createElement(tt.a, Je()({}, l, { containerStyle: ut.infoItem }))
      }
      var ut = ie.a.create(function (e) {
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
        dt = a('ddV6'),
        mt = a.n(dt),
        pt = (a('hBvt'), a('/yvb')),
        gt = H.a.d228a9a0,
        ft = H.a.c174e46e
      function vt(e) {
        var t,
          a = e.buttonString,
          n = e.buttonTestID,
          i = e.infoItemGroup,
          r = e.link,
          l = e.onButtonPress,
          o = w.a.useContext(q.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled'),
          s = null !== (t = e.expandButtonText) && void 0 !== t ? t : gt,
          c = Object(de.a)(),
          u = !w.a.useContext(oe.b).isModal,
          d = c.width <= ie.a.theme.breakpoints.xSmall,
          m = w.a.useState(!1),
          p = mt()(m, 2),
          g = p[0],
          f = p[1],
          v = g ? ft : s,
          y = [yt.promotionInfoView, u && yt.promotionInfoViewNarrow, d && yt.promotionInfoViewXSmall]
        return o
          ? w.a.createElement(
              ne.a,
              { style: y },
              w.a.createElement(
                ne.a,
                {
                  style: u ? (g ? yt.promotionInfoTextVisible : yt.promotionInfoTextHidden) : yt.promotionInfoTextWide,
                },
                i,
              ),
              w.a.createElement(
                ne.a,
                { style: u ? yt.buttonViewNarrow : yt.buttonViewWide },
                w.a.createElement(pt.a, { link: r, onPress: l, size: 'large', testID: n, type: 'primaryFilled' }, a),
              ),
              u &&
                w.a.createElement(
                  pt.a,
                  {
                    onPress: function () {
                      f(u && !g)
                    },
                    size: 'large',
                    type: 'primaryText',
                  },
                  v,
                ),
            )
          : w.a.createElement(
              ne.a,
              { style: y },
              w.a.createElement(ne.a, { style: [yt.infoItemView, u && yt.infoItemViewNarrow] }, i),
              w.a.createElement(
                ne.a,
                { style: u ? [yt.buttonViewNarrow, { flexGrow: 0 }] : yt.buttonViewWide },
                w.a.createElement(pt.a, { link: r, onPress: l, size: 'large', testID: n, type: 'primaryFilled' }, a),
              ),
            )
      }
      var yt = ie.a.create(function (e) {
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
        bt = a('Irs7'),
        ht = a('yE5w'),
        wt = H.a.a63a89fe,
        kt = H.a.j401e4bc,
        _t = H.a.e8adeec8,
        Et = H.a.ja781451
      function It(e) {
        var t = Object(bt.b)(),
          a = Et(U(e.impressions)),
          n = Et(U(e.engagements)),
          i = kt({ impressions: a, engagements: n }),
          r = {
            items: [{ label: w.a.createElement(se.b, { size: 'headline2', weight: 'heavy' }, wt), description: i }],
          }
        var l = w.a.createElement(tt.a, Je()({}, r, { containerStyle: Vt.infoItem })),
          o = null !== Object(O.a)(),
          s = ''
            .concat(e.tweetPermalink, '/')
            .concat(o ? ht.a.Webview : ht.a.Rweb, '/')
            .concat(ht.c.Intro)
        return w.a.createElement(vt, {
          buttonString: _t,
          infoItemGroup: l,
          link: s,
          onButtonPress: function () {
            t.scribe(M(e.userId, 'PromoteAgainButton'))
          },
        })
      }
      var Vt = ie.a.create(function (e) {
          return {
            infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' },
            decorationContainer: { height: e.spaces.space24, width: e.spaces.space24, marginRight: e.spaces.space24 },
            icon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.green500 },
          }
        }),
        xt = H.a.dcfb0332,
        Pt = H.a.g6bf2fda,
        Tt = H.a.df2c469a,
        Lt = H.a.ja781451
      function St(e) {
        var t = Object(bt.b)(),
          a = null !== Object(O.a)(),
          n = Lt(U(e.impressions)),
          i = Pt({ impressions: n })
        var r = {
            items: [{ label: w.a.createElement(se.b, { size: 'headline1', weight: 'heavy' }, xt), description: i }],
          },
          l = w.a.createElement(tt.a, Je()({}, r, { containerStyle: Ct.infoItem }))
        return w.a.createElement(vt, {
          buttonString: Tt,
          buttonTestID: e.buttonTestID,
          infoItemGroup: l,
          link: {
            pathname: '/i/flow/convert_to_professional',
            state: { input: { requested_variant: 'qp-'.concat(e.tweet_id, '-').concat(a ? 'true' : 'false') } },
            method: 'push',
          },
          onButtonPress: function () {
            t.scribe(M(e.userId, 'SwitchToProfessionalButton'))
          },
        })
      }
      var Ct = ie.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        Rt = H.a.dcfb0332,
        Ft = H.a.f96eec3c,
        At = H.a.e9891f7c,
        Kt = H.a.i859a9d3
      function Dt(e) {
        var t = Object(bt.b)(),
          a = {
            items: [{ label: w.a.createElement(se.b, { size: 'headline1', weight: 'heavy' }, Rt), description: Ft }],
          }
        var n = w.a.createElement(tt.a, Je()({}, a, { containerStyle: Ot.infoItem })),
          i = null !== Object(O.a)(),
          r = ''
            .concat(e.tweetPermalink, '/')
            .concat(i ? ht.a.Webview : ht.a.Rweb, '/')
            .concat(ht.c.Intro)
        return w.a.createElement(vt, {
          buttonString: At,
          expandButtonText: Kt,
          infoItemGroup: n,
          link: r,
          onButtonPress: function () {
            t.scribe(M(e.userId, 'NotStartedPromotionButton'))
          },
        })
      }
      var Ot = ie.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        Bt = 'switchToProfessionalButton',
        Ht = a('5emT'),
        jt = H.a.jede3014,
        zt = H.a.i094e43b,
        Mt = H.a.f638d3e0
      function Wt(e) {
        var t = Object(bt.b)(),
          a = {
            items: [
              {
                label: w.a.createElement(se.b, { size: 'headline2', weight: 'heavy' }, jt),
                description: zt,
                decoration: w.a.createElement(Ht.a, { style: [Gt.icon, Gt.decorationContainer] }),
              },
            ],
          }
        return w.a.createElement(
          ne.a,
          { style: Gt.promotionInfoView },
          w.a.createElement(
            ne.a,
            { style: Gt.infoItemView },
            w.a.createElement(tt.a, Je()({}, a, { containerStyle: Gt.infoItem })),
          ),
          w.a.createElement(
            ne.a,
            { style: Gt.buttonView },
            w.a.createElement(
              se.b,
              {
                color: 'primary',
                link: 'https://twitter.com/adspolicy',
                onPress: function () {
                  t.scribe(M(e.userId, 'ReviewPolicyButton'))
                },
              },
              Mt,
            ),
          ),
        )
      }
      var Nt,
        qt,
        Gt = ie.a.create(function (e) {
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
        Qt =
          (a('yH/f'),
          Object.freeze({
            notProfessional: 'not_professional',
            notStarted: 'not_started',
            underReview: 'under_review',
            running: 'running',
            completed: 'completed',
            paused: 'paused',
          })),
        Ut = void 0 !== Nt ? Nt : (Nt = a('+s2u')),
        Xt = void 0 !== qt ? qt : (qt = a('W08J'))
      function Yt(e) {
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
          v,
          y,
          b,
          h,
          k,
          _ = e.promotionInfoState,
          E = e.tweet,
          I = e.engagements,
          V = e.impressions,
          x = ue()(Ut, e.campaignInfo),
          P = ue()(Xt, e.metrics)
        w.a.useContext(q.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled') &&
          ((I = Z(
            'Engagement',
            [],
            null == P || null === (y = P.ad) || void 0 === y || null === (b = y.creative) || void 0 === b
              ? void 0
              : b.promotion_info,
          )),
          (V = Z(
            'Impressions',
            null == P ? void 0 : P.promotion_info,
            null == P || null === (h = P.ad) || void 0 === h || null === (k = h.creative) || void 0 === k
              ? void 0
              : k.promotion_info,
          )))
        var T =
            null !== (t = I) && void 0 !== t && t.value
              ? I.value.promoted
              : null === (a = I) || void 0 === a
              ? void 0
              : a.promoted_value,
          L =
            null !== (n = V) && void 0 !== n && n.value
              ? V.value.promoted
              : null === (i = V) || void 0 === i
              ? void 0
              : i.promoted_value,
          S =
            null !== (r = V) && void 0 !== r && r.value
              ? V.value.total
              : null === (l = V) || void 0 === l
              ? void 0
              : l.total_value
        switch (_) {
          case Qt.notProfessional:
            return w.a.createElement(St, { buttonTestID: Bt, impressions: S, tweet_id: E.id_str, userId: e.userId })
          case Qt.notStarted:
            return w.a.createElement(Dt, { tweetPermalink: E.permalink, userId: e.userId })
          case Qt.underReview:
            return w.a.createElement(Wt, { userId: e.userId })
          case Qt.running:
            return w.a.createElement(st, {
              currency: null == x || null === (o = x.campaign) || void 0 === o ? void 0 : o.currency,
              endTime: null == x || null === (s = x.campaign) || void 0 === s ? void 0 : s.end_time,
              isPaused: !1,
              remainingBudget: null == x || null === (c = x.campaign) || void 0 === c ? void 0 : c.remaining_budget,
              startTime: null == x || null === (u = x.campaign) || void 0 === u ? void 0 : u.start_time,
              totalBudget: null == x || null === (d = x.campaign) || void 0 === d ? void 0 : d.total_budget,
            })
          case Qt.completed:
            return w.a.createElement(It, {
              engagements: T,
              impressions: L,
              tweetPermalink: E.permalink,
              userId: e.userId,
            })
          case Qt.paused:
            return w.a.createElement(st, {
              currency: null == x || null === (m = x.campaign) || void 0 === m ? void 0 : m.currency,
              endTime: null == x || null === (p = x.campaign) || void 0 === p ? void 0 : p.end_time,
              isPaused: !0,
              remainingBudget: null == x || null === (g = x.campaign) || void 0 === g ? void 0 : g.remaining_budget,
              startTime: null == x || null === (f = x.campaign) || void 0 === f ? void 0 : f.start_time,
              totalBudget: null == x || null === (v = x.campaign) || void 0 === v ? void 0 : v.total_budget,
            })
          default:
            return null
        }
      }
      var Jt,
        Zt,
        $t,
        ea = a('Ud88'),
        ta = a.n(ea),
        aa = a('n0Rl'),
        na = a('Hsf0'),
        ia = a.n(na),
        ra = a('LLQb'),
        la = H.a.deaf5b15,
        oa = void 0 !== Jt ? Jt : (Jt = a('2O3u')),
        sa = (void 0 !== Zt || (Zt = a('njVe')), void 0 !== $t ? $t : ($t = a('wfDE'))),
        ca = Object(aa.b)(sa, { errorConfig: { context: x } })
      function ua(e) {
        var t = e.hidePromotionInfo,
          a = e.quickPromoteEligibility,
          n = e.tweet,
          i = e.userId,
          r = Object(bt.b)(),
          l = ta()(),
          o = Object(I.useCreateLocalApiErrorHandler)(x)
        return (
          w.a.useEffect(
            function () {
              var e = o({ showToast: !1 })
              De()(l, sa, { restId: n.id_str }).subscribe({ error: e })
            },
            [n, l, o],
          ),
          w.a.createElement(ca, {
            render: function (e) {
              if (e.fetchStatus === aa.a.FAILED) {
                var l = e.retry
                return (
                  r.scribe(W('NetworkError', i, n.id_str)),
                  w.a.createElement(ra.a, { onRequestRetry: l, retryMessage: la })
                )
              }
              if (e.fetchStatus === aa.a.LOADED) {
                var o,
                  s,
                  c =
                    null === (o = e.data) || void 0 === o || null === (s = o.tweet_result_by_rest_id) || void 0 === s
                      ? void 0
                      : s.result
                if ('Tweet' === (null == c ? void 0 : c.__typename)) {
                  var u = ia()(oa, c.analytics)
                  ;(null != u && u.metrics.length) || r.scribe(W('EmptyMetricsFromBackend', i, n.id_str))
                  var d = ma(c.analytics),
                    m = d.detailExpands,
                    p = d.engagements,
                    g = d.follows,
                    f = d.impressions,
                    v = d.likes,
                    y = d.linkClicks,
                    b = d.mediaViews,
                    h = d.profileVisits,
                    k = d.replies,
                    _ = d.retweets,
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
                  return w.a.createElement(
                    ne.a,
                    { style: ga.tweetActivity },
                    w.a.createElement(
                      ne.a,
                      { style: ga.metricsView },
                      w.a.createElement(Ue, { likes: v, replies: k, retweets: _, showPromotionPercentages: I }),
                      w.a.createElement(Se, {
                        detailExpands: m,
                        engagements: p,
                        follows: g,
                        impressions: f,
                        linkClicks: y,
                        mediaViews: b,
                        profileVisits: h,
                        showPromotionPercentages: I,
                        tweet: n,
                      }),
                    ),
                    t || !E
                      ? null
                      : w.a.createElement(Yt, {
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
      var da = function (e, t) {
          return e
            ? e.metrics.find(function (e) {
                return e.key === t
              })
            : null
        },
        ma = function (e) {
          var t = ia()(oa, e)
          return {
            detailExpands: da(t, 'DetailExpands'),
            engagements: da(t, 'Engagements'),
            follows: da(t, 'Follows'),
            impressions: da(t, 'Impressions'),
            likes: da(t, 'Favorites'),
            linkClicks: da(t, 'UrlClicks'),
            mediaViews: da(t, 'MediaViews'),
            profileVisits: da(t, 'UserProfileClicks'),
            replies: da(t, 'Replies'),
            retweets: da(t, 'Retweets'),
          }
        }
      var pa,
        ga = ie.a.create(function (e) {
          return { tweetActivity: { flex: 1 }, metricsView: { flexGrow: 1 } }
        }),
        fa = (a('5BYb'), void 0 !== pa ? pa : (pa = a('XoTw'))),
        va = H.a.ib1f8491,
        ya = H.a.fbdb85f4,
        ba = H.a.d0eeb126,
        ha = H.a.i2785008,
        wa = H.a.g33fd6b0,
        ka = H.a.eefcd267
      function _a(e) {
        var t = e.percentageValue,
          a = ha(t),
          n = wa({ percentage: a })
        return w.a.createElement(
          ne.a,
          { accessibilityLabel: n, style: xa.percentageView },
          w.a.createElement(
            se.b,
            { accessibilityHidden: !0, color: 'primary900', size: 'subtext3', weight: 'bold' },
            a,
          ),
        )
      }
      function Ea(e) {
        var t,
          a,
          n,
          i,
          r,
          l,
          o,
          s,
          c,
          u = e.liveCounts,
          d = e.showPromotionPercentages,
          m = e.tweet,
          p = ue()(fa, e.metrics),
          g = (null == u ? void 0 : u.likeCount) || m.favorite_count || 0,
          f =
            ((null == u ? void 0 : u.quoteCount) || m.quote_count || 0) +
            ((null == u ? void 0 : u.retweetCount) || m.retweet_count),
          v = (null == u ? void 0 : u.replyCount) || m.reply_count,
          y =
            null ===
              (t = Z(
                'Likes',
                null,
                null == p || null === (a = p.ad) || void 0 === a || null === (n = a.creative) || void 0 === n
                  ? void 0
                  : n.like_retweet_replies,
              )) || void 0 === t
              ? void 0
              : t.promoted_value,
          b =
            null ===
              (i = Z(
                'Retweets',
                null,
                null == p || null === (r = p.ad) || void 0 === r || null === (l = r.creative) || void 0 === l
                  ? void 0
                  : l.like_retweet_replies,
              )) || void 0 === i
              ? void 0
              : i.promoted_value,
          h =
            null ===
              (o = Z(
                'Replies',
                null,
                null == p || null === (s = p.ad) || void 0 === s || null === (c = s.creative) || void 0 === c
                  ? void 0
                  : c.like_retweet_replies,
              )) || void 0 === o
              ? void 0
              : o.promoted_value,
          k = y ? y / g : 0,
          _ = b ? b / f : 0,
          E = h ? h / v : 0
        return w.a.createElement(
          ne.a,
          { style: xa.actionsBar },
          w.a.createElement(
            Oe.a,
            null,
            w.a.createElement(
              ne.a,
              { accessibilityLabel: va({ likeCount: g }), style: xa.column },
              w.a.createElement(Be.a, { style: xa.actionIconsColor }),
              w.a.createElement(se.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, ka(g)),
              d ? w.a.createElement(_a, { percentageValue: k }) : null,
            ),
            w.a.createElement(
              ne.a,
              { accessibilityLabel: ya({ retweetCount: f }), style: xa.column },
              w.a.createElement(He.a, { style: xa.actionIconsColor }),
              w.a.createElement(se.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, ka(f)),
              d ? w.a.createElement(_a, { percentageValue: _ }) : null,
            ),
            w.a.createElement(
              ne.a,
              { accessibilityLabel: ba({ replyCount: v }), style: xa.column },
              w.a.createElement(je.a, { style: xa.actionIconsColor }),
              w.a.createElement(se.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, ka(v)),
              d ? w.a.createElement(_a, { percentageValue: E }) : null,
            ),
          ),
        )
      }
      var Ia,
        Va,
        xa = ie.a.create(function (e) {
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
              backgroundColor: ie.a.theme.colors.primary50,
              borderRadius: ie.a.theme.borderRadii.infinite,
              color: ie.a.theme.colors.primary,
              marginTop: ie.a.theme.spaces.space4,
              paddingVertical: ie.a.theme.spaces.space4,
              paddingHorizontal: ie.a.theme.spacesPx.space4 + ie.a.theme.spacesPx.space2,
            },
            promotionIcon: { fontSize: e.spaces.space4, color: e.colors.primary, marginRight: e.spaces.space4 },
          }
        }),
        Pa = a('Zko5'),
        Ta = H.a.fc64990d,
        La = H.a.ge538875,
        Sa = H.a.dcc05a7d,
        Ca = H.a.ca7e10d7,
        Ra = H.a.bd174250,
        Fa = H.a.a69cd868,
        Aa = H.a.f894a687,
        Ka = H.a.ad9d9204,
        Da = H.a.e5b7dd84,
        Oa = H.a.de2d89a2,
        Ba = H.a.i92754c2,
        Ha = H.a.be8ddcc1,
        ja = H.a.b01410d5,
        za = H.a.i2785008,
        Ma = H.a.fa8afc43,
        Wa = void 0 !== Ia ? Ia : (Ia = a('7ioy')),
        Na = function (e) {
          var t = w.a.useContext(oe.b).isModal,
            a = Object(de.a)(),
            n = ue()(Wa, e.metrics)
          if (!n) return null
          var i = e.showPromotionPercentages,
            r = a.width < ie.a.theme.breakpoints.xSmall,
            l = [
              'VideoViews',
              'UniqueVideoViews',
              'VideoStarts',
              'VideoPlayed25Percent',
              'VideoPlayed50Percent',
              'VideoPlayed75Percent',
              'VideoCompletions',
            ].map(function (e) {
              var t, a
              return Z(
                e,
                null == n ? void 0 : n.video,
                null == n || null === (t = n.ad) || void 0 === t || null === (a = t.creative) || void 0 === a
                  ? void 0
                  : a.video,
              )
            }),
            o = mt()(l, 7),
            s = o[0],
            c = o[1],
            u = o[2],
            d = o[3],
            m = o[4],
            p = o[5],
            g = o[6],
            f = function (e) {
              return e ? Math.round((e / (null != u && u.total_value ? u.total_value : 1)) * 100) / 100 : 0
            },
            v = [
              w.a.createElement(re, { key: Ca, label: Ca, metric: c, popover: Ce(Fa, i), showPromotionPercentages: i }),
              w.a.createElement(re, { key: Sa, label: Sa, metric: s, popover: Ce(Ra, i), showPromotionPercentages: i }),
            ],
            y = [
              { value: f(null == u ? void 0 : u.total_value), label: qa(Da), color: 'blue300', popover: Qa(Da, u, i) },
              {
                value: f(null == d ? void 0 : d.total_value),
                label: qa(za(0.25)),
                color: 'blue500',
                popover: Qa(Oa, d, i),
              },
              {
                value: f(null == m ? void 0 : m.total_value),
                label: qa(za(0.5)),
                color: 'blue600',
                popover: Qa(Ba, m, i),
              },
              {
                value: f(null == p ? void 0 : p.total_value),
                label: qa(za(0.75)),
                color: 'blue700',
                popover: Qa(Ha, p, i),
              },
              {
                value: f(null == g ? void 0 : g.total_value),
                label: qa(za(1)),
                color: 'blue900',
                popover: Qa(ja, g, i),
              },
            ],
            b = w.a.createElement(se.b, { color: 'gray700', size: 'body', weight: 'normal' }, Ka)
          return w.a.createElement(
            ne.a,
            { style: r ? Ua.smallSpacing : Ua.normalSpacing },
            w.a.createElement(
              se.b,
              {
                accessibilityLabel: Ta,
                accessibilityLevel: 3,
                accessibilityRole: 'heading',
                size: 'title3',
                weight: 'heavy',
              },
              Ta,
            ),
            w.a.createElement(
              se.b,
              { accessibilityLabel: La, color: 'gray700', size: 'subtext1', style: Ua.subtitle },
              La,
            ),
            w.a.createElement(
              ne.a,
              {
                accessibilityRole: 'region',
                style: [
                  t ? Ua.modalGrid : Ua.mobileGrid,
                  { gridGap: r ? ie.a.theme.spaces.space24 : ie.a.theme.spaces.space40 },
                ],
              },
              v,
              w.a.createElement(
                ne.a,
                { style: t ? Ua.modalChart : Ua.mobileChart },
                w.a.createElement(Pa.a, {
                  barsStyle: { layout: 'fixedSpacing', spacing: 'space4' },
                  data: y,
                  gridlines: [0, 0.5, 1],
                  style: { height: 100 },
                  ticks: [
                    { value: 0, label: Ga(0) },
                    { value: 0.5, label: Ga(0.5) },
                    { value: 1, label: Ga(1) },
                  ],
                  title: Aa,
                  titleDescription: b,
                }),
              ),
            ),
          )
        },
        qa = function (e) {
          return w.a.createElement(
            se.b,
            {
              align: 'center',
              color: 'gray700',
              size: 'subtext2',
              style: { marginTop: ie.a.theme.spaces.space8 },
              weight: 'medium',
            },
            e,
          )
        },
        Ga = function (e) {
          return w.a.createElement(
            se.b,
            { align: 'center', color: 'gray700', size: 'subtext2', weight: 'medium' },
            za(e),
          )
        },
        Qa = function (e, t, a) {
          var n,
            i =
              null != t && t.promoted_value && null != t && t.total_value
                ? (null == t ? void 0 : t.promoted_value) / (null == t ? void 0 : t.total_value)
                : 0,
            r = [a && Re(i, !0)]
          return w.a.createElement(
            ne.a,
            { style: Ua.popoverDataPoint, testID: ''.concat(e, ' bar details') },
            w.a.createElement(te.a, {
              label: e,
              size: 'title3',
              subTextList: r,
              value: Ma(null !== (n = null == t ? void 0 : t.total_value) && void 0 !== n ? n : 0),
            }),
          )
        },
        Ua = ie.a.create(function (e) {
          return {
            smallSpacing: {
              marginBottom: e.spaces.space20,
              marginTop: e.spaces.space12,
              marginHorizontal: e.spaces.space16,
            },
            normalSpacing: {
              marginBottom: e.spaces.space40,
              marginTop: e.spaces.space12,
              marginHorizontal: e.spaces.space32,
            },
            subtitle: { marginTop: e.spaces.space2, marginBottom: e.spaces.space32 },
            mobileGrid: {
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridTemplateRows: 'repeat(2, min-content)',
            },
            mobileChart: { gridColumn: '1 / 3', gridRow: 2 },
            modalGrid: {
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'repeat(2, min-content)',
            },
            modalChart: { gridColumn: '1 / 4', gridRow: 2 },
            popoverDataPoint: { margin: e.spaces.space16 },
          }
        }),
        Xa = a('OOKO'),
        Ya = H.a.deaf5b15,
        Ja = void 0 !== Va ? Va : (Va = a('EhgS')),
        Za = Object(aa.b)(Ja, { errorConfig: { context: x } })
      function $a(e) {
        var t,
          a,
          n,
          i = e.hidePromotionInfo,
          r = e.liveCounts,
          l = e.quickPromoteEligibility,
          o = e.tweet,
          s = e.userId,
          c = Object(bt.b)(),
          u = ta()(),
          d = Object(I.useCreateLocalApiErrorHandler)(x),
          m = w.a.useMemo($, []),
          p =
            null !==
              (t =
                null == o ||
                null === (a = o.extended_entities) ||
                void 0 === a ||
                null === (n = a.media) ||
                void 0 === n
                  ? void 0
                  : n.some(function (e) {
                      return 'video' === e.type
                    })) &&
            void 0 !== t &&
            t
        return (
          w.a.useEffect(
            function () {
              var e = d({ showToast: !1 })
              De()(u, Ja, { restId: o.id_str, from_time: new Date(o.created_at).toISOString(), to_time: m }).subscribe({
                error: e,
              })
            },
            [o, u, d, m],
          ),
          w.a.createElement(Za, {
            render: function (e) {
              if (e.fetchStatus === aa.a.FAILED) {
                var t = e.retry
                return (
                  c.scribe(W('NetworkError', s, o.id_str)),
                  w.a.createElement(ra.a, { onRequestRetry: t, retryMessage: Ya })
                )
              }
              if (e.fetchStatus === aa.a.LOADED) {
                var a,
                  n,
                  u =
                    null === (a = e.data) || void 0 === a || null === (n = a.tweet_result_by_rest_id) || void 0 === n
                      ? void 0
                      : n.result
                if ('Tweet' === (null == u ? void 0 : u.__typename)) {
                  var d = (function (e) {
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
                    })(l),
                    m = ['running', 'completed', 'paused'].includes(d)
                  return w.a.createElement(
                    ne.a,
                    { style: en.tweetActivity },
                    w.a.createElement(
                      ne.a,
                      { style: en.metricsView },
                      w.a.createElement(Ea, { liveCounts: r, metrics: u, showPromotionPercentages: m, tweet: o }),
                      w.a.createElement(Se, {
                        detailExpands: null,
                        engagements: null,
                        follows: null,
                        impressions: null,
                        linkClicks: null,
                        mediaViews: null,
                        metrics: u,
                        profileVisits: null,
                        showPromotionPercentages: m,
                        tweet: o,
                      }),
                      p &&
                        w.a.createElement(
                          w.a.Fragment,
                          null,
                          w.a.createElement(Xa.a, { spacing: 'space2' }),
                          w.a.createElement(Na, { metrics: u, showPromotionPercentages: m }),
                        ),
                    ),
                    i || !d
                      ? null
                      : w.a.createElement(Yt, {
                          campaignInfo: u.quick_promotion,
                          engagements: null,
                          impressions: null,
                          metrics: u,
                          promotionInfoState: d,
                          tweet: o,
                          userId: s,
                        }),
                  )
                }
              }
              return null
            },
            variables: { restId: o.id_str, from_time: new Date(o.created_at).toISOString(), to_time: m },
          })
        )
      }
      var en = ie.a.create(function (e) {
          return { tweetActivity: { flex: 1 }, metricsView: { flexGrow: 1 } }
        }),
        tn = a('E0cF'),
        an = a('q9Zt'),
        nn = ['data'],
        rn = H.a.g9079b93,
        ln = H.a.a57daeb1,
        on = H.a.deaf5b15,
        sn = (function (e) {
          g()(a, e)
          var t = v()(a)
          function a() {
            var e
            s()(this, a)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(m()(e), '_handleFetchTweet', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler
                ;(0, t.fetchTweetIfNeeded)(t.statusId).catch(a(K.a))
              }),
              b()(m()(e), '_handleFetchQuickPromoteEligibility', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler
                return (0, t.fetchQuickPromoteEligibilityIfNeeded)({ statusId: t.statusId }).catch(a())
              }),
              b()(m()(e), '_render', function () {
                var t = e.props,
                  a = t.liveCounts,
                  n = t.quickPromoteEligibility,
                  i = t.tweet,
                  r = e.context.featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled'),
                  l = (i && tn.a.getOriginalTweet(i)) || void 0
                return !l || (l && l.user.id_str !== e.context.loggedInUserId)
                  ? w.a.createElement(an.a, { onRetry: null, title: rn })
                  : (e._scribeEligibility(),
                    w.a.createElement(
                      ne.a,
                      { style: cn.topLevelView },
                      w.a.createElement(
                        ne.a,
                        { style: cn.quoteTweet },
                        w.a.createElement(j.a, {
                          isCondensed: !0,
                          style: { cursor: 'default' },
                          tweetId: l.id_str,
                          withLink: !1,
                          withUserHoverCard: !1,
                        }),
                      ),
                      r
                        ? w.a.createElement($a, {
                            hidePromotionInfo: !1,
                            liveCounts: a,
                            quickPromoteEligibility: n,
                            tweet: l,
                            userId: e.context.loggedInUserId || '',
                          })
                        : w.a.createElement(ua, {
                            hidePromotionInfo: !1,
                            quickPromoteEligibility: n,
                            tweet: l,
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
                  r = (n && tn.a.getOriginalTweet(n)) || void 0,
                  o = z(e._dwellStartTime),
                  s = o.data,
                  c = l()(o, nn)
                a.scribe(i()(i()({}, c), {}, { data: i()(i()({}, s), {}, { items: r ? [N.a.getTweetItem(r)] : [] }) }))
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
                    i = (n && tn.a.getOriginalTweet(n)) || void 0,
                    r = null !== Object(O.a)()
                  return w.a.createElement(
                    D.b,
                    {
                      appBarRef: this._setAppBarRef,
                      backLocation: i ? i.permalink : '/',
                      hideBackButton: r,
                      history: a,
                      onBackClick: this._handleGoBack,
                      renderHeader: function (e) {
                        return r ? null : e
                      },
                      title: r ? null : ln,
                    },
                    w.a.createElement(A.a, { fetchStatus: t, render: this._render, retryMessage: on }),
                  )
                },
              },
            ]),
            a
          )
        })(w.a.PureComponent)
      b()(sn, 'contextType', q.a)
      var cn = ie.a.create(function (e) {
          return { topLevelView: { flex: 1 }, quoteTweet: { margin: e.spaces.space16, marginBottom: e.spaces.space12 } }
        }),
        un = F(sn)
      t.default = un
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
                      { args: null, kind: 'FragmentSpread', name: 'LikeRetweetReplyAnalyticsM2_metrics' },
                      { args: null, kind: 'FragmentSpread', name: 'DataPointsGrid_metrics' },
                      { args: null, kind: 'FragmentSpread', name: 'PromotionInfo_metrics' },
                      { args: null, kind: 'FragmentSpread', name: 'VideoMetrics_metrics' },
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
                                      (s = {
                                        fields: [{ kind: 'Variable', name: 'iso8601_time', variableName: 'from_time' }],
                                        kind: 'ObjectValue',
                                        name: 'from_time',
                                      }),
                                      {
                                        kind: 'Literal',
                                        name: 'requested_metrics',
                                        value: ['Likes', 'Retweets', 'Replies'],
                                      },
                                      (c = {
                                        fields: [{ kind: 'Variable', name: 'iso8601_time', variableName: 'to_time' }],
                                        kind: 'ObjectValue',
                                        name: 'to_time',
                                      }),
                                    ],
                                    concreteType: 'HubbleMetricsTotalValue',
                                    kind: 'LinkedField',
                                    name: 'metrics_total',
                                    plural: !0,
                                    selections: (u = [
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'metric_type',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'metric_value',
                                        storageKey: null,
                                      },
                                    ]),
                                    storageKey: null,
                                  },
                                  (d = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                                  {
                                    alias: 'datapoints_grid',
                                    args: [
                                      s,
                                      (m = {
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
                                      c,
                                    ],
                                    concreteType: 'HubbleMetricsTotalValue',
                                    kind: 'LinkedField',
                                    name: 'metrics_total',
                                    plural: !0,
                                    selections: u,
                                    storageKey: null,
                                  },
                                  {
                                    alias: 'promotion_info',
                                    args: [
                                      s,
                                      {
                                        kind: 'Literal',
                                        name: 'requested_metrics',
                                        value: ['Impressions', 'Engagement'],
                                      },
                                      c,
                                    ],
                                    concreteType: 'HubbleMetricsTotalValue',
                                    kind: 'LinkedField',
                                    name: 'metrics_total',
                                    plural: !0,
                                    selections: u,
                                    storageKey: null,
                                  },
                                  {
                                    alias: 'video',
                                    args: [
                                      s,
                                      (p = {
                                        kind: 'Literal',
                                        name: 'requested_metrics',
                                        value: [
                                          'VideoViews',
                                          'UniqueVideoViews',
                                          'VideoStarts',
                                          'VideoPlayed25Percent',
                                          'VideoPlayed50Percent',
                                          'VideoPlayed75Percent',
                                          'VideoCompletions',
                                        ],
                                      }),
                                      c,
                                    ],
                                    concreteType: 'HubbleMetricsTotalValue',
                                    kind: 'LinkedField',
                                    name: 'metrics_total',
                                    plural: !0,
                                    selections: u,
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              d,
                            ],
                            storageKey: null,
                          },
                          {
                            alias: 'datapoints_grid',
                            args: [m],
                            concreteType: 'AnayticsMetricsTotalValue',
                            kind: 'LinkedField',
                            name: 'organic_metrics_total',
                            plural: !0,
                            selections: u,
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
                            selections: u,
                            storageKey: 'organic_metrics_total(requested_metrics:["Impressions"])',
                          },
                          {
                            alias: 'video',
                            args: [p],
                            concreteType: 'AnayticsMetricsTotalValue',
                            kind: 'LinkedField',
                            name: 'organic_metrics_total',
                            plural: !0,
                            selections: u,
                            storageKey:
                              'organic_metrics_total(requested_metrics:["VideoViews","UniqueVideoViews","VideoStarts","VideoPlayed25Percent","VideoPlayed50Percent","VideoPlayed75Percent","VideoCompletions"])',
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
                                  d,
                                ],
                                storageKey: null,
                              },
                              d,
                            ],
                            storageKey: null,
                          },
                          d,
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
            id: 'OkyzWFvnwqId4ofTt2TTGQ',
            metadata: {},
            name: 'TweetActivityM2Query',
            operationKind: 'query',
            text: null,
          },
        }
      ;(g.hash = '76d550bdce6febb8efd42e65dfb9f00a'), (t.default = g)
    },
    KSuC: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        i = a.n(n),
        r = a('3XMw'),
        l = a.n(r),
        o = a('6s7X'),
        s = a('rHpw'),
        c = a('MWbm'),
        u = a('t62R'),
        d = a('/yvb'),
        m = a('OiMc'),
        p = l.a.affbaf62,
        g = l.a.c388d026,
        f = s.a.create(function (e) {
          return {
            popover: { padding: e.spaces.space32 },
            popoverTitle: { marginBottom: e.spaces.space8 },
            popoverText: { marginBottom: e.spaces.space24 },
            iconInformation: {
              color: e.colors.gray700,
              fontSize: e.fontSizes.subtext3,
              cursor: 'pointer',
              marginLeft: e.spaces.space4,
            },
          }
        })
      t.a = function (e) {
        var t = e.label,
          a = e.popover
        return i.a.createElement(
          c.a,
          null,
          i.a.createElement(
            m.a,
            {
              preferredVerticalOrientation: 'up',
              renderContent: function (e) {
                return i.a.createElement(
                  c.a,
                  { style: f.popover },
                  i.a.createElement(
                    c.a,
                    { style: f.popoverTitle },
                    i.a.createElement(u.b, { size: 'title3', weight: 'heavy' }, t),
                  ),
                  i.a.createElement(c.a, { style: f.popoverText }, a),
                  i.a.createElement(d.a, { onPress: e, type: 'primaryOutlined' }, g),
                )
              },
              withArrow: !0,
            },
            i.a.createElement(o.a, { accessibilityLabel: p, accessibilityRole: 'tooltip', style: f.iconInformation }),
          ),
        )
      }
    },
    OOKO: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return o
      })
      a('uFXj')
      var n = a('ERkP'),
        i = a.n(n),
        r = a('rHpw'),
        l = a('MWbm')
      function o(e) {
        var t = e.spacing
        return i.a.createElement(l.a, {
          accessibilityRole: 'separator',
          style: [s.divider, { marginVertical: null != t ? r.a.theme.spaces[t] : void 0 }],
        })
      }
      var s = r.a.create(function (e) {
        return { divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }
      })
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
    XoTw: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = {
        argumentDefinitions: [
          { kind: 'RootArgument', name: 'from_time' },
          { kind: 'RootArgument', name: 'restId' },
          { kind: 'RootArgument', name: 'to_time' },
        ],
        kind: 'Fragment',
        metadata: null,
        name: 'LikeRetweetReplyAnalyticsM2_metrics',
        selections: [
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
                      { kind: 'Literal', name: 'requested_metrics', value: ['Likes', 'Retweets', 'Replies'] },
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
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: 'metric_type', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'metric_value', storageKey: null },
                    ],
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
        hash: 'de869be72f39713cb174cda632dec07d',
      }
      t.default = n
    },
    Zko5: function (e, t, a) {
      'use strict'
      var n = a('RhWx'),
        i = a.n(n),
        r = (a('z84I'), a('2G9S'), a('tQbP'), a('ERkP')),
        l = a.n(r),
        o = a('t62R'),
        s = a('ddV6'),
        c = a.n(s),
        u = a('yiKp'),
        d = a.n(u),
        m =
          (a('lTEL'),
          a('7x/C'),
          a('kYxP'),
          a('KOtZ'),
          a('yH/f'),
          { borderRadii: 'xSmall', layout: 'fixedBarWidth', spacing: 'space2', width: 'space56' })
      Object.freeze({ fixedBarWidth: 'fixedBarWidth', fixedSpacing: 'fixedSpacing' })
      function p(e, t, a, n, i) {
        var r,
          l = e.key,
          o = null != n && null !== (r = n.current) && void 0 !== r && r[t] ? n.current[t].length : 0
        if ('ArrowRight' === l)
          if ((e.preventDefault(), a >= o - 1)) {
            var s,
              c,
              u,
              d = t + 1 >= i ? 0 : t + 1
            null == n ||
              null === (s = n.current) ||
              void 0 === s ||
              null === (c = s[d]) ||
              void 0 === c ||
              null === (u = c[0]) ||
              void 0 === u ||
              u.focus()
          } else {
            var m, p, g
            null == n ||
              null === (m = n.current) ||
              void 0 === m ||
              null === (p = m[t]) ||
              void 0 === p ||
              null === (g = p[a + 1]) ||
              void 0 === g ||
              g.focus()
          }
        else if ('ArrowLeft' === l)
          if ((e.preventDefault(), 0 === a)) {
            var f,
              v,
              y,
              b,
              h = t - 1 < 0 ? i - 1 : t - 1,
              w = null != n && null !== (f = n.current) && void 0 !== f && f[h] ? n.current[h].length : 1
            null == n ||
              null === (v = n.current) ||
              void 0 === v ||
              null === (y = v[h]) ||
              void 0 === y ||
              null === (b = y[w - 1]) ||
              void 0 === b ||
              b.focus()
          } else {
            var k, _, E
            null == n ||
              null === (k = n.current) ||
              void 0 === k ||
              null === (_ = k[t]) ||
              void 0 === _ ||
              null === (E = _[a - 1]) ||
              void 0 === E ||
              E.focus()
          }
      }
      var g = a('3XMw'),
        f = a.n(g),
        v = a('OiMc'),
        y = a('rHpw'),
        b = a('MWbm'),
        h = a('tI3i'),
        w = a.n(h),
        k = function (e, t, a) {
          return (100 * (e - a)) / (t - a)
        },
        _ = function (e) {
          var t
          return (t = []).concat.apply(
            t,
            i()(
              e.map(function (e) {
                return void 0 !== e.value
                  ? e.value
                  : e.values.map(function (e) {
                      return e.value
                    })
              }),
            ),
          )
        },
        E = function (e) {
          return e.map(function (e) {
            return e.values
              .map(function (e) {
                return e.value
              })
              .reduce(function (e, t) {
                return e + t
              })
          })
        },
        I = function (e) {
          return function (t) {
            var a
            return null !== (a = e.popover) && void 0 !== a ? a : null
          }
        },
        V = f.a.dec1d7ef,
        x = f.a.f765bead,
        P = function (e) {
          var t = e.barsStyle,
            a = e.data,
            n = e.maxValue,
            i = e.minValue,
            r = l.a.useRef([]),
            o = d()(d()({}, m), t),
            s = 'fixedBarWidth' === o.layout,
            u = l.a.useState(null),
            g = c()(u, 2),
            f = g[0],
            h = g[1],
            w = function (e, t, a) {
              return d()(
                {
                  flex: s ? null : 1,
                  height: ''.concat(k(t.value, a, i), '%'),
                  width: s
                    ? 'calc('.concat(y.a.theme.spaces[o.width], ' / ').concat(e.values.length, ')')
                    : ''.concat(100 / e.values.length, '%'),
                  minWidth: y.a.theme.spaces.space1,
                  maxWidth: '100%',
                  backgroundColor: t.color ? y.a.theme.colors[t.color] : y.a.theme.colors.blue500,
                  borderRadius: y.a.theme.borderRadii[o.borderRadii],
                  marginHorizontal: y.a.theme.spaces.space2,
                },
                !!e.popover && { cursor: 'pointer' },
              )
            },
            _ = {
              height: '100%',
              display: 'flex',
              flex: 1,
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'flex-end',
              marginHorizontal: y.a.theme.spaces[o.spacing],
            },
            E = function (e) {
              f === e && h(null)
            }
          return a.map(function (e, t) {
            var o
            null === (o = r.current) || void 0 === o || o.push([])
            var c,
              u = e.values
                .map(function (e) {
                  return e.value
                })
                .reduce(function (e, t) {
                  return Math.max(e, t)
                }),
              d = !!e.popover
            return l.a.createElement(
              b.a,
              {
                key: 'barGroup'.concat(t),
                style: [_, ((c = t), null !== f ? (c === f ? { opacity: 1 } : { opacity: 0.5 }) : { opacity: 1 })],
                testID: 'barGroup'.concat(t),
              },
              l.a.createElement(
                v.a,
                {
                  contentStyle: { minWidth: 0 },
                  disabled: !d,
                  enableEnterKeyToggle: !0,
                  enableHover: !0,
                  hoverDelay: 'short',
                  key: 'barGroup'.concat(t),
                  onDismiss: function () {
                    return E(t)
                  },
                  onHoverCardUnmount: function () {
                    return E(t)
                  },
                  onOpen: function () {
                    return h(t)
                  },
                  preferredVerticalOrientation: 'up',
                  renderContent: I(e),
                  withArrow: !0,
                  wrapperStyle: {
                    flex: s ? null : 1,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    width: '100%',
                    height: ''.concat(k(u, n, i), '%'),
                  },
                },
                e.values.map(function (n, i) {
                  var o,
                    s = e.label
                      ? V({
                          label: null === (o = e.label) || void 0 === o ? void 0 : o.props.children,
                          group: n.group,
                          value: n.value,
                        })
                      : x({ group: n.group, value: n.value })
                  return l.a.createElement(b.a, {
                    accessibilityLabel: s,
                    accessibilityRole: d ? 'tooltip' : 'img',
                    focusable: !0,
                    key: 'barGroup'.concat(i, 'Bar').concat(i),
                    onKeyDown: function (e) {
                      p(e, t, i, r, a.length)
                    },
                    ref: function (e) {
                      var a, n
                      return null === (a = r.current) || void 0 === a || null === (n = a[t]) || void 0 === n
                        ? void 0
                        : n.push(e)
                    },
                    style: w(e, n, u),
                    testID: 'barGroup'.concat(t, 'Bar').concat(i),
                  })
                }),
              ),
            )
          })
        },
        T = f.a.idea1817,
        L = f.a.fe94be6a,
        S = y.a.create(function (e) {
          return {
            normalBarWrapper: {
              height: '100%',
              flex: 1,
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-around',
            },
          }
        }),
        C = function (e) {
          var t = e.barsStyle,
            a = e.data,
            n = e.maxValue,
            i = e.minValue,
            r = l.a.useRef([]),
            o = l.a.useState(null),
            s = c()(o, 2),
            u = s[0],
            p = s[1],
            g = d()(d()({}, m), t),
            f = 'fixedBarWidth' === g.layout,
            h = function (e) {
              return d()(
                {
                  flex: f ? null : 1,
                  height: ''.concat(k(e.value, n, i), '%'),
                  width: f ? y.a.theme.spaces[g.width] : 'auto',
                  minWidth: y.a.theme.spaces.space1,
                  maxWidth: '100%',
                  backgroundColor: e.color ? y.a.theme.colors[e.color] : y.a.theme.colors.blue500,
                  borderRadius: y.a.theme.borderRadii[g.borderRadii],
                  marginHorizontal: y.a.theme.spaces[g.spacing],
                },
                !!e.popover && { cursor: 'pointer' },
              )
            },
            w = function (e) {
              u === e && p(null)
            }
          return a.map(function (e, t) {
            var n,
              i,
              o = e.label
                ? T({ label: null === (n = e.label) || void 0 === n ? void 0 : n.props.children, value: e.value })
                : L({ value: e.value }),
              s = !!e.popover
            return l.a.createElement(
              b.a,
              {
                key: 'normalBarWrapper'.concat(t),
                style: [
                  S.normalBarWrapper,
                  ((i = t), null !== u ? (i === u ? { opacity: 1 } : { opacity: 0.5 }) : { opacity: 1 }),
                ],
              },
              l.a.createElement(
                v.a,
                {
                  contentStyle: { minWidth: 0 },
                  disabled: !s,
                  enableEnterKeyToggle: !0,
                  enableHover: !0,
                  hoverDelay: 'short',
                  onDismiss: function () {
                    return w(t)
                  },
                  onHoverCardUnmount: function () {
                    return w(t)
                  },
                  onOpen: function () {
                    return p(t)
                  },
                  preferredVerticalOrientation: 'up',
                  renderContent: I(e),
                  withArrow: !0,
                  wrapperStyle: h(e),
                },
                l.a.createElement(b.a, {
                  accessibilityLabel: o,
                  accessibilityRole: s ? 'tooltip' : 'img',
                  focusable: !0,
                  key: 'bar'.concat(t),
                  onKeyDown: function (e) {
                    !(function (e, t, a, n) {
                      if ('ArrowRight' === e) {
                        var i,
                          r,
                          l = t + 1 >= n ? 0 : t + 1
                        null == a ||
                          null === (i = a.current) ||
                          void 0 === i ||
                          null === (r = i[l]) ||
                          void 0 === r ||
                          r.focus()
                      } else if ('ArrowLeft' === e) {
                        var o,
                          s,
                          c = t - 1 < 0 ? n - 1 : t - 1
                        null == a ||
                          null === (o = a.current) ||
                          void 0 === o ||
                          null === (s = o[c]) ||
                          void 0 === s ||
                          s.focus()
                      }
                    })(e.key, t, r, a.length)
                  },
                  ref: function (e) {
                    var t
                    return null === (t = r.current) || void 0 === t ? void 0 : t.push(e)
                  },
                  style: h(e),
                  testID: 'bar'.concat(t),
                }),
              ),
            )
          })
        },
        R = f.a.dec1d7ef,
        F = f.a.f765bead,
        A = function (e) {
          var t = e.barsStyle,
            a = e.data,
            n = e.maxValue,
            i = e.minValue,
            r = l.a.useRef([]),
            o = d()(d()({}, m), t),
            s = 'fixedBarWidth' === o.layout,
            u = l.a.useState(null),
            g = c()(u, 2),
            f = g[0],
            h = g[1],
            w = function (e, t) {
              return {
                height: ''.concat(k(t.value, n, i), '%'),
                width: s ? y.a.theme.spaces[o.width] : '100%',
                minWidth: y.a.theme.spaces.space1,
                maxWidth: '100%',
                backgroundColor: t.color ? y.a.theme.colors[t.color] : y.a.theme.colors.blue500,
                borderRadius: y.a.theme.borderRadii[o.borderRadii],
                marginTop: y.a.theme.spaces.space2,
              }
            },
            _ = function (e) {
              f === e && h(null)
            }
          return a.map(function (e, t) {
            var n
            null === (n = r.current) || void 0 === n || n.push([])
            var i,
              s = !!e.popover
            return l.a.createElement(
              b.a,
              {
                key: 'barGroup'.concat(t),
                style: d()(
                  d()(
                    {
                      height: '100%',
                      display: 'flex',
                      flex: 1,
                      justifyContent: 'flex-start',
                      flexDirection: 'column-reverse',
                      alignItems: 'center',
                      marginHorizontal: y.a.theme.spaces[o.spacing],
                    },
                    ((i = t), null !== f ? (i === f ? { opacity: 1 } : { opacity: 0.5 }) : { opacity: 1 }),
                  ),
                  s && { cursor: 'pointer' },
                ),
                testID: 'barGroup'.concat(t),
              },
              l.a.createElement(
                v.a,
                {
                  contentStyle: { minWidth: 0 },
                  disabled: !s,
                  enableEnterKeyToggle: !0,
                  enableHover: !0,
                  hoverDelay: 'short',
                  onDismiss: function () {
                    return _(t)
                  },
                  onHoverCardUnmount: function () {
                    return _(t)
                  },
                  onOpen: function () {
                    return h(t)
                  },
                  preferredVerticalOrientation: 'up',
                  renderContent: I(e),
                  withArrow: !0,
                  wrapperStyle: {
                    height: '100%',
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'flex-start',
                    flexDirection: 'column-reverse',
                    alignItems: 'center',
                  },
                },
                e.values.map(function (n, i) {
                  var o,
                    c = e.label
                      ? R({
                          label: null === (o = e.label) || void 0 === o ? void 0 : o.props.children,
                          group: n.group,
                          value: n.value,
                        })
                      : F({ group: n.group, value: n.value })
                  return l.a.createElement(b.a, {
                    accessibilityLabel: c,
                    accessibilityRole: s ? 'tooltip' : 'img',
                    focusable: !0,
                    key: 'barGroup'.concat(i, 'Bar').concat(i),
                    onKeyDown: function (e) {
                      p(e, t, i, r, a.length)
                    },
                    ref: function (e) {
                      var a, n
                      return null === (a = r.current) || void 0 === a || null === (n = a[t]) || void 0 === n
                        ? void 0
                        : n.push(e)
                    },
                    style: w(0, n),
                    testID: 'barGroup'.concat(t, 'Bar').concat(i),
                  })
                }),
              ),
            )
          })
        },
        K = a('KSuC'),
        D = f.a.iab73d4b,
        O = f.a.e0bdea76,
        B = f.a.f7b30767,
        H = f.a.hcd54327,
        j = function (e) {
          var t = e.gridlines,
            a = e.maxValue,
            n = e.minValue
          return t
            ? t.map(function (e, t) {
                return l.a.createElement(b.a, {
                  key: 'gridline'.concat(t),
                  style: [W.gridLine, { bottom: ''.concat(k(e, a, n), '%') }],
                  testID: 'gridline'.concat(t),
                })
              })
            : null
        },
        z = function (e) {
          var t = e.data
          return t
            ? t.map(function (e, t) {
                return l.a.createElement(
                  b.a,
                  { accessibilityHidden: !0, key: 'label'.concat(t), style: W.label },
                  e.label,
                )
              })
            : null
        },
        M = function (e) {
          var t = e.maxValue,
            a = e.minValue,
            n = (
              e.ticks ||
              (function (e, t) {
                var a = t + (e - t) / 2
                return [
                  {
                    value: t,
                    label: l.a.createElement(o.b, { color: 'gray700', size: 'subtext3', weight: 'medium' }, t),
                  },
                  {
                    value: a,
                    label: l.a.createElement(o.b, { color: 'gray700', size: 'subtext3', weight: 'medium' }, a),
                  },
                  {
                    value: e,
                    label: l.a.createElement(o.b, { color: 'gray700', size: 'subtext3', weight: 'medium' }, e),
                  },
                ]
              })(t, a)
            ).sort(function (e, t) {
              return e.value - t.value
            })
          return n.map(function (e, i) {
            var r = 0 === i ? k(e.value, t, a) : (100 * (e.value - n[i - 1].value)) / (t - a)
            return l.a.createElement(
              b.a,
              {
                accessibilityHidden: !0,
                key: 'tick'.concat(i),
                style: { position: 'relative', height: ''.concat(r, '%'), paddingBottom: '0.75em' },
              },
              e.label,
            )
          })
        },
        W = y.a.create(function (e) {
          return {
            title: { color: e.colors.gray700, marginBottom: '1em' },
            titleBar: { display: 'flex', flexDirection: 'row' },
            grid: {
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gridTemplateRows: '1fr auto',
              width: '100%',
              minWidth: '100px',
              height: 'calc('.concat(e.spaces.space56, ' * 2)'),
              padding: e.spaces.space4,
            },
            chartArea: { position: 'relative', height: '100%', display: 'flex', flexDirection: 'row', flexGrow: 1 },
            gridLine: { position: 'absolute', width: '100%', height: 1, backgroundColor: e.colors.gray200 },
            yAxis: {
              height: '100%',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column-reverse',
              marginLeft: e.spaces.space12,
            },
            xAxis: { display: 'flex', flexDirection: 'row' },
            label: { flex: 1 },
          }
        })
      t.a = function (e) {
        var t,
          a,
          n = e.barsStyle,
          r = e.data,
          s = e.dataGrouped,
          c = e.gridlines,
          u = e.stacked,
          d = void 0 !== u && u,
          m = e.style,
          p = e.ticks,
          g = e.title,
          f = e.titleDescription,
          v = p
            ? p.map(function (e) {
                return e.value
              })
            : [],
          y = (function (e, t, a) {
            return void 0 !== e
              ? _(e)
              : void 0 !== t
              ? a
                ? E(t)
                : _(t)
              : void w()(e || t, 'Either data or groupedData props must be passed')
          })(r, s, d)
        if (!y) return null
        var h = Math.max.apply(Math, i()(y).concat(i()(v))),
          k = Math.min.apply(Math, i()(y).concat(i()(v)))
        if (void 0 !== r) (t = l.a.createElement(C, { barsStyle: n, data: r, maxValue: h, minValue: k })), (a = '')
        else {
          if (void 0 === s) return null
          d
            ? ((t = l.a.createElement(A, { barsStyle: n, data: s, maxValue: h, minValue: k })), (a = B))
            : ((t = l.a.createElement(P, { barsStyle: n, data: s, maxValue: h, minValue: k })), (a = H))
        }
        var I = O({ title: g, chartType: a, minValue: D(k), maxValue: D(h) })
        return l.a.createElement(
          b.a,
          { accessibilityLabelledBy: 'chart-title', accessibilityRole: 'figure', focusable: !0 },
          l.a.createElement(
            b.a,
            { style: W.titleBar },
            l.a.createElement(
              o.b,
              {
                accessibilityLabel: I,
                accessibilityRole: 'heading',
                focusable: !1,
                nativeID: 'chart-title',
                size: 'subtext2',
                style: W.title,
                weight: 'medium',
              },
              g,
            ),
            f ? l.a.createElement(K.a, { label: g, popover: f }) : null,
          ),
          l.a.createElement(
            b.a,
            { style: [W.grid, m] },
            l.a.createElement(
              b.a,
              { accessibilityRole: 'application', focusable: !1, key: 'chartArea', style: W.chartArea },
              l.a.createElement(j, { gridlines: c, maxValue: h, minValue: k }),
              t,
            ),
            l.a.createElement(
              b.a,
              { key: 'yAxis', style: W.yAxis },
              l.a.createElement(M, { maxValue: h, minValue: k, ticks: p }),
            ),
            l.a.createElement(b.a, { key: 'xAxis', style: W.xAxis }, l.a.createElement(z, { data: r || s })),
          ),
        )
      }
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
        v = Object(m.a)()
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
        y = a('YeIG'),
        b = a('uCxL'),
        h = a('x5Pi'),
        w = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        k = v(function (e) {
          var t = e.community,
            a = e.createLocalApiErrorHandler,
            n = e.fetchCommunityIfNeeded,
            r = e.hydratedTweet,
            o = (e.tweetId, l()(e, w)),
            u = s.a.useContext(c.a),
            d = u.featureSwitches,
            m = u.loggedInUserId,
            p = null == r ? void 0 : r.community_id_str
          s.a.useEffect(
            function () {
              p && Object(y.a)(t) && n(p).catch(a())
            },
            [t, p, a, n],
          )
          var g = d.isTrue('responsive_web_alt_text_badge_enabled'),
            f = r && Object(h.f)(r, m, t),
            v = f && Object(h.e)(f),
            k = d.isTrue('responsive_web_reactions_enabled')
          return s.a.createElement(
            b.a,
            i()({}, o, {
              loggedInUserId: m,
              shouldShowAltLabelAlways: g,
              socialContextProps: v,
              tweet: r,
              withReactions: k,
            }),
          )
        })
      t.a = k
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
      function v(e) {
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
          y = p(function () {
            return a
          }),
          b = y[0],
          h = y[1],
          w = p(function () {
            return a
          }),
          k = w[0],
          _ = w[1]
        a !== k && (g.current.add(a), _(a), h(a))
        var E = u(
            function () {
              c.current && (g.current.add(f), h(f))
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
                g.current.add(r), h(r)
              }
            },
            [l, e, h, c],
          ),
          V = m(!1)
        return (
          d(function () {
            return function () {
              V.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === V.current)
                return (
                  (V.current = !1),
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
                        (v(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
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
                      (v(e) ? i.dispose && i.dispose() : i.releaseQuery && i.releaseQuery())
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
        v = a.n(f),
        y = (a('2G9S'), a('lTEL'), a('7x/C'), a('87if'), a('ZUdG'), a('kYxP'), a('ERkP')),
        b = a.n(y),
        h = a('pXBW'),
        w = a('6/RC'),
        k = a('UIzd'),
        _ = a.n(k),
        E = a('kGix')
      a.d(t, 'a', function () {
        return E.a
      })
      var I = a('fs1G'),
        V = a('0KEI'),
        x = a('lU4h'),
        P = a.n(x),
        T = a('21nk'),
        L = a.n(T),
        S = a('bCEw'),
        C = a.n(S),
        R = a('Ud88'),
        F = a.n(R),
        A = function (e) {
          return (0, e.render)({ fetchStatus: E.a.LOADING, data: null, error: null, retry: I.a })
        },
        K = (function (e) {
          m()(a, e)
          var t = g()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r]
            return (e = t.call.apply(t, [this].concat(i))), v()(u()(e), 'state', { error: null }), e
          }
          return (
            s()(
              a,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof h.a)) throw e
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
            i = L()(t, a)
          return n({ fetchStatus: E.a.LOADED, data: i, error: null, retry: I.a })
        },
        O = function (e, t) {
          if (w.canUseDOM)
            return function (a) {
              var n = a.fetchPolicy,
                r = void 0 === n ? 'store-or-network' : n,
                l = a.render,
                o = a.variables,
                s = C()(e),
                c = i()(s, 2),
                u = c[0],
                d = c[1],
                m = Object(V.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                p = P()(o),
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
                      { fallback: b.a.createElement(A, { render: l }) },
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
              o = F()(),
              s = Object(V.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              c = P()(l),
              u = i()(c, 1)[0],
              d = a.get(o)
            if (d) return d
            var m = b.a.lazy(function () {
              return _()(o, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return r({ fetchStatus: E.a.LOADED, data: e, error: null, retry: I.a })
                  },
                  function (e) {
                    return e instanceof h.a
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
