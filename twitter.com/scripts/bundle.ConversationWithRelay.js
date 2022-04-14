;(window.webpackJsonp = window.webpackJsonp || []).push([
  [49],
  {
    '+s2u': function (e, t, a) {
      'use strict'
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
      e.exports = n
    },
    '0Yt+': function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        i = a.n(n),
        l = a('3XMw'),
        r = a.n(l),
        o = a('KSuC'),
        s = a('rHpw'),
        c = a('MWbm'),
        u = a('t62R'),
        d = a('wTX1'),
        m = a('RjwM'),
        p = a('7Mjr'),
        g = a('WXWl'),
        f = r.a.i2785008,
        v = r.a.d9687d23,
        y = r.a.ac73eb5a,
        b = r.a.c5a9f921,
        w = function (e) {
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
        h = function (e) {
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
          l = e.popover,
          r = e.size,
          o = e.subTextList,
          s = e.trendValue,
          m = e.unit,
          p = e.value
        return i.a.createElement(
          c.a,
          { style: _.dataPoint },
          i.a.createElement(w, { label: n, popover: l }),
          i.a.createElement(
            c.a,
            { style: _.valueBar },
            t
              ? i.a.createElement(d.a, { count: a, size: r, weight: 'bold' }, p)
              : i.a.createElement(u.b, { size: r, weight: 'bold' }, p),
            i.a.createElement(h, { unit: m }),
            i.a.createElement(k, { trendValue: s }),
          ),
          o,
        )
      }
    },
    '2O3u': function (e, t, a) {
      'use strict'
      var n = { kind: 'InlineDataFragment', name: 'TweetActivity_metrics', hash: '15b7c2798a31f76eb517582e90ab541d' }
      e.exports = n
    },
    '35hZ': function (e, t, a) {
      'use strict'
      var n = a('EORa').useTrackLoadQueryInRender,
        i = a('h2Du'),
        l = a('6zvL'),
        r = a('PJTX'),
        o = a('I9iR'),
        s = (a('ERkP').useDebugValue, a('e1/f').__internal),
        c = s.fetchQueryDeduped,
        u = s.fetchQuery
      a('/2Cm')
      e.exports = function (e, t, a) {
        n()
        var s,
          d = r(),
          m = t.fetchKey,
          p = t.fetchPolicy,
          g = t.source,
          f = t.variables,
          v = t.networkCacheConfig,
          y = l(e, f, v)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          y.request.node.params.name !== t.name && o(!1),
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
    '5emT': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        i = a.n(n),
        l = a('ERkP'),
        r = a.n(l),
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
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M14.548 11.634c-1.207 0-2.188-.98-2.188-2.188 0-.664.302-1.25.77-1.653-.363-.097-.736-.165-1.13-.165-2.416 0-4.375 1.96-4.375 4.376S9.585 16.38 12 16.38c2.418 0 4.377-1.96 4.377-4.376 0-.4-.07-.78-.17-1.146-.402.47-.992.776-1.66.776z',
              }),
              r.a.createElement('path', {
                d: 'M12 19.79c-7.228 0-10.12-6.724-10.24-7.01-.254-.466-.254-1.105.035-1.642C1.88 10.923 4.772 4.2 12 4.2s10.12 6.723 10.24 7.01c.254.465.254 1.104-.035 1.64-.085.216-2.977 6.94-10.205 6.94zm0-14c-6.154 0-8.668 5.787-8.772 6.033-.068.135-.068.208-.033.273.137.316 2.65 6.104 8.805 6.104 6.18 0 8.747-5.973 8.772-6.033.07-.136.07-.21.034-.274-.138-.316-2.652-6.103-8.806-6.103z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    '7ioy': function (e, t, a) {
      'use strict'
      var n,
        i,
        l = {
          argumentDefinitions: [
            { kind: 'RootArgument', name: 'from_time' },
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
                  args: null,
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
      ;(l.hash = '28fb2130ff421a25cacd718a50d9c8c2'), (e.exports = l)
    },
    DL4F: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'ConversationAnalyticsScreen', function () {
          return sn
        })
      var n = a('yiKp'),
        i = a.n(n),
        l = a('m3Bd'),
        r = a.n(l),
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
        w = (a('2G9S'), a('ERkP')),
        h = a.n(w),
        k = (a('KqXw'), a('WNMA'), a('TuTd')),
        _ = a('XOJV'),
        E = a('rxPX'),
        T = a('0KEI'),
        I = a('S3l+'),
        x = 'CONVERSATION_ANALYTICS_SCREEN',
        V = function (e, t) {
          return t.match.params.statusId
        },
        P = function (e, t) {
          return _.a.selectHydrated(e, V(0, t))
        },
        L = function (e, t) {
          return Object(I.r)(e, V(0, t))
        },
        S = function (e, t) {
          return _.a.selectFetchStatus(e, V(0, t))
        },
        C = function (e, t) {
          return Object(I.q)(e, V(0, t))
        },
        R = function (e, t) {
          return Object(k.a)(e, V(0, t))
        },
        A = Object(E.a)()
          .propsFromState(function () {
            return {
              fetchStatus: S,
              liveCounts: R,
              quickPromoteEligibilityFetchStatus: L,
              statusId: V,
              tweet: P,
              quickPromoteEligibility: C,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)(x),
              fetchTweetIfNeeded: _.a.fetchOneIfNeeded,
              fetchQuickPromoteEligibilityIfNeeded: I.k,
            }
          })
          .withAnalytics({ page: 'tweet', section: 'analytics', component: 'ConversationAnalytics' }),
        F = a('v//M'),
        K = a('W5XZ'),
        D = a('jHSc'),
        O = a('3XMw'),
        B = a.n(O),
        M = a('b5s6'),
        H = (a('0zG9'), a('Rp9C')),
        z = a('E0cF')
      function W(e) {
        var t = e.dwellStartTime,
          a = e.eventInfo,
          n = e.tweet,
          i = Date.now() - t,
          l = n ? z.a.getOriginalTweet(n) : void 0
        return {
          action: 'view',
          data: {
            event_info: JSON.stringify({ duration_ms: i, event_info: a }),
            items: l ? [H.a.getTweetItem(l)] : [],
          },
        }
      }
      function j(e) {
        var t = e.element,
          a = e.eventInfo,
          n = e.tweet,
          i = e.userId,
          l = n ? z.a.getOriginalTweet(n) : void 0
        return {
          element: t,
          action: 'click',
          data: { event_info: a, profile_id: i, items: l ? [H.a.getTweetItem(l)] : [] },
        }
      }
      function q(e, t, a) {
        var n = a ? z.a.getOriginalTweet(a) : void 0
        return {
          element: 'TweetActivityQueryRenderer',
          action: 'error',
          data: { event_info: e, items: n ? [H.a.getTweetItem(n)] : [], profile_id: t },
        }
      }
      a('jQ3i'), a('hBpG'), a('7x/C'), a('LW0h'), a('z84I')
      var N = a('v6aA'),
        G = (a('ly4k'), B.a.ja781451),
        Q = B.a.cfa1a7b8
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
          l =
            null == t
              ? void 0
              : t.find(function (t) {
                  return t.metric_type === e
                }),
          r =
            null == a
              ? void 0
              : a.find(function (t) {
                  return t.metric_type === e
                }),
          o = null !== (n = null == l ? void 0 : l.metric_value) && void 0 !== n ? n : 0,
          s = null !== (i = null == r ? void 0 : r.metric_value) && void 0 !== i ? i : 0
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
            l = null != a && a.value ? a.value.promoted : null == a ? void 0 : a.promoted_value,
            r = null != a && a.value ? a.value.total : null == a ? void 0 : a.total_value,
            o = X(l, r),
            s = [i && Re(o, !0)]
          return h.a.createElement(te.a, {
            animated: !0,
            count: null != r ? r : 0,
            label: t,
            popover: n,
            size: 'title1',
            subTextList: s,
            value: Y(r),
          })
        },
        ne = a('MWbm'),
        ie = a('rHpw'),
        le = function (e) {
          var t = e.label,
            a = e.metric,
            n = e.popover,
            i = e.showPromotionPercentages,
            l = null != a && a.value ? a.value.promoted : null == a ? void 0 : a.promoted_value,
            r = null != a && a.value ? a.value.total : null == a ? void 0 : a.total_value,
            o = X(l, r),
            s = [i && Re(o, !1)]
          return h.a.createElement(
            ne.a,
            { style: re.dataPoint },
            h.a.createElement(te.a, {
              animated: !0,
              count: null != r ? r : 0,
              label: t,
              popover: n,
              size: 'title3',
              subTextList: s,
              value: Y(r),
            }),
          )
        },
        re = ie.a.create(function (e) {
          return { dataPoint: { flexGrow: 1 } }
        }),
        oe = a('7N4s'),
        se = a('t62R'),
        ce = (a('YWiL'), a('CVPS')),
        ue = a.n(ce),
        de = a('0ig/'),
        me = B.a.e5fe61ef,
        pe = B.a.f6162a32,
        ge = B.a.dbe9353d,
        fe = B.a.e044b63f,
        ve = B.a.d8abdaa4,
        ye = B.a.de0de3a7,
        be = B.a.aeee0181,
        we = B.a.ccab7c76,
        he = B.a.b1b4d57d,
        ke = B.a.i680442e,
        _e = B.a.d5f1e553,
        Ee = B.a.d24b7811,
        Te = B.a.b40d33e4,
        Ie = B.a.ee547382,
        xe = B.a.i2785008,
        Ve = B.a.g33fd6b0,
        Pe = (B.a.b71059c3, B.a.de4def4d),
        Le = void 0 !== ee ? ee : (ee = a('q+jb'))
      function Se(e) {
        var t,
          a,
          n,
          i,
          l,
          r,
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
          b = e.metrics,
          w = e.showPromotionPercentages,
          k = e.tweet,
          _ = e.detailExpands,
          E = e.engagements,
          T = e.follows,
          I = e.impressions,
          x = e.linkClicks,
          V = e.mediaViews,
          P = e.profileVisits,
          L = w,
          S = h.a.useContext(oe.b).isModal,
          C = Object(de.a)().width < ie.a.theme.breakpoints.xSmall,
          R =
            ((null == k || null === (t = k.entities) || void 0 === t ? void 0 : t.urls) &&
              k.entities.urls.length > 0) ||
            !(null == k || null === (a = k.card) || void 0 === a || !a.url),
          A =
            !(null == k || null === (n = k.extended_entities) || void 0 === n || !n.media) &&
            k.extended_entities.media.filter(function (e) {
              return 'video' === e.type
            }).length > 0,
          F = ue()(Le, b),
          K = h.a.useContext(N.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled')
        K &&
          ((L = !(null == F || !F.ad)),
          (_ = Z(
            'DetailExpands',
            null == F ? void 0 : F.datapoints_grid,
            null == F || null === (i = F.ad) || void 0 === i || null === (l = i.creative) || void 0 === l
              ? void 0
              : l.datapoints_grid,
          )),
          (E = Z(
            'Engagement',
            null == F ? void 0 : F.datapoints_grid,
            null == F || null === (r = F.ad) || void 0 === r || null === (o = r.creative) || void 0 === o
              ? void 0
              : o.datapoints_grid,
          )),
          (T = Z(
            'Follows',
            null == F ? void 0 : F.datapoints_grid,
            null == F || null === (s = F.ad) || void 0 === s || null === (c = s.creative) || void 0 === c
              ? void 0
              : c.datapoints_grid,
          )),
          (I = Z(
            'Impressions',
            null == F ? void 0 : F.datapoints_grid,
            null == F || null === (u = F.ad) || void 0 === u || null === (d = u.creative) || void 0 === d
              ? void 0
              : d.datapoints_grid,
          )),
          (x = Z(
            'LinkClicks',
            null == F ? void 0 : F.datapoints_grid,
            null == F || null === (m = F.ad) || void 0 === m || null === (p = m.creative) || void 0 === p
              ? void 0
              : p.datapoints_grid,
          )),
          (V = Z(
            'MediaViews',
            null == F ? void 0 : F.datapoints_grid,
            null == F || null === (g = F.ad) || void 0 === g || null === (f = g.creative) || void 0 === f
              ? void 0
              : f.datapoints_grid,
          )),
          (P = Z(
            'ProfileVisits',
            null == F ? void 0 : F.datapoints_grid,
            null == F || null === (v = F.ad) || void 0 === v || null === (y = v.creative) || void 0 === y
              ? void 0
              : y.datapoints_grid,
          )))
        var D = [
          h.a.createElement(le, { key: ge, label: ge, metric: E, popover: Ce(fe, L), showPromotionPercentages: L }),
          h.a.createElement(le, { key: Te, label: Te, metric: _, popover: Ce(Ie, L), showPromotionPercentages: L }),
          h.a.createElement(le, { key: ve, label: ve, metric: T, popover: Ce(ye, L), showPromotionPercentages: L }),
          h.a.createElement(le, { key: be, label: be, metric: P, popover: Ce(we, L), showPromotionPercentages: L }),
          A && !K
            ? h.a.createElement(le, { key: he, label: he, metric: V, popover: Ce(ke, L), showPromotionPercentages: L })
            : null,
          R
            ? h.a.createElement(le, { key: _e, label: _e, metric: x, popover: Ce(Ee, L), showPromotionPercentages: L })
            : null,
        ].filter(function (e) {
          return e
        })
        return h.a.createElement(
          ne.a,
          {
            style: [
              Fe.grid,
              { gridTemplateColumns: S ? ' 1fr 2fr' : '1fr' },
              { gridGap: C ? ie.a.theme.spaces.space24 : ie.a.theme.spaces.space40 },
              { marginTop: C ? ie.a.theme.spaces.space24 : ie.a.theme.spaces.space40 },
              { marginHorizontal: C ? ie.a.theme.spaces.space16 : ie.a.theme.spaces.space32 },
            ],
          },
          h.a.createElement(ae, { label: me, metric: I, popover: Ce(pe, L), showPromotionPercentages: L }),
          h.a.createElement(
            ne.a,
            { style: [Fe.minorDataPointsGrid, { gridGap: C ? ie.a.theme.spaces.space24 : ie.a.theme.spaces.space40 }] },
            D.map(function (e, t) {
              return h.a.createElement(ne.a, { key: 'minorDataPoint'.concat(t) }, e)
            }),
          ),
        )
      }
      function Ce(e, t) {
        return h.a.createElement(
          ne.a,
          null,
          h.a.createElement(se.b, { color: 'gray700', size: 'body', weight: 'normal' }, e),
          t
            ? h.a.createElement(
                se.b,
                {
                  color: 'primary900',
                  size: 'subtext3',
                  style: [Fe.promotionLabel, Fe.popoverPromotionLabel],
                  weight: 'bold',
                },
                Pe,
              )
            : null,
        )
      }
      function Re(e, t) {
        var a = xe(e),
          n = Ve({ percentage: a }),
          i = t ? n : a
        return h.a.createElement(
          ne.a,
          { accessibilityLabel: n, key: i, style: [Fe.subTextListItem, Fe.promotionLabel] },
          h.a.createElement(
            se.b,
            { accessibilityHidden: !0, color: 'primary900', size: 'subtext3', weight: 'bold' },
            i,
          ),
        )
      }
      var Ae,
        Fe = ie.a.create(function (e) {
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
        Ke = a('P74S'),
        De = a.n(Ke),
        Oe = (a('uFXj'), a('LbZ7')),
        Be = a('iEUn'),
        Me = a('jlPL'),
        He = a('dFWS'),
        ze = void 0 !== Ae ? Ae : (Ae = a('pYyV')),
        We = B.a.ib1f8491,
        je = B.a.fbdb85f4,
        qe = B.a.d0eeb126,
        Ne = B.a.i2785008,
        Ge = B.a.g33fd6b0
      function Qe(e) {
        var t = e.percentageValue,
          a = Ne(t),
          n = Ge({ percentage: a })
        return h.a.createElement(
          ne.a,
          { accessibilityLabel: n, style: Xe.percentageView },
          h.a.createElement(
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
          l,
          r,
          o = e.showPromotionPercentages,
          s = ue()(ze, e.metrics),
          c = e.likes,
          u = e.replies,
          d = e.retweets
        h.a.useContext(N.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled') &&
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
            null == s || null === (l = s.ad) || void 0 === l || null === (r = l.creative) || void 0 === r
              ? void 0
              : r.like_retweet_replies,
          )))
        var m = J(c),
          p = m.count,
          g = m.promotionPercentage,
          f = J(d),
          v = f.count,
          y = f.promotionPercentage,
          b = J(u),
          w = b.count,
          k = b.promotionPercentage
        return h.a.createElement(
          ne.a,
          { style: Xe.actionsBar },
          h.a.createElement(
            Oe.a,
            null,
            h.a.createElement(
              ne.a,
              { accessibilityLabel: We({ likeCount: p }), style: Xe.column },
              h.a.createElement(Be.a, { style: Xe.actionIconsColor }),
              h.a.createElement(se.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, p),
              o ? h.a.createElement(Qe, { percentageValue: g }) : null,
            ),
            h.a.createElement(
              ne.a,
              { accessibilityLabel: je({ retweetCount: v }), style: Xe.column },
              h.a.createElement(Me.a, { style: Xe.actionIconsColor }),
              h.a.createElement(se.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, v),
              o ? h.a.createElement(Qe, { percentageValue: y }) : null,
            ),
            h.a.createElement(
              ne.a,
              { accessibilityLabel: qe({ replyCount: w }), style: Xe.column },
              h.a.createElement(He.a, { style: Xe.actionIconsColor }),
              h.a.createElement(se.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, w),
              o ? h.a.createElement(Qe, { percentageValue: k }) : null,
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
        at = B.a.db6efeb8,
        nt = B.a.j6daea85,
        it = B.a.jade381b,
        lt = B.a.d725a288,
        rt = B.a.hf9ed10f,
        ot = B.a.f42a198d
      function st(e) {
        var t = e.currency,
          a = e.endTime,
          n = e.isPaused,
          i = e.remainingBudget,
          l = e.startTime,
          r = e.totalBudget,
          o = h.a.useContext(N.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled'),
          s = a ? new Date(a) : null,
          c = l ? new Date(l) : null,
          u = !!s && s > new Date(Date.now()),
          d = s && c ? Object(Ze.a)(new Date(c), new Date(s)) : 0,
          m = a && u ? $e.a.getTimeLeftLabelTwoUnits(a) : null,
          p = s ? lt(s) : '',
          g = s ? it(s) : '',
          f = rt({ endTimeString: p, endDateString: g }),
          v = (function (e, t, a, n) {
            var i = t
            i || (i = e)
            if (!e || !a || !i || i > e) return null
            var l = function (e) {
              return e.toLocaleString(null != n ? n : [], {
                style: 'currency',
                currency: a,
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })
            }
            try {
              var r = l((e - i) / 1e6),
                o = l(e / 1e6)
              return ot({ spentBudget: r, totalBudget: o })
            } catch (s) {
              return null
            }
          })(r, i, t)
        return h.a.createElement(
          ne.a,
          { style: ut.promotionInfoView },
          h.a.createElement(
            ne.a,
            { style: ut.infoItemView },
            h.a.createElement(ct, {
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
          l = e.timeLeftLabel,
          r = {
            items: [
              {
                label: h.a.createElement(se.b, { size: 'headline2', weight: 'heavy' }, n ? nt : at),
                description: l
                  ? h.a.createElement(
                      h.a.Fragment,
                      null,
                      h.a.createElement(
                        ne.a,
                        { style: ut.progressBarContainer },
                        h.a.createElement(et.a, {
                          colorValue: n ? ie.a.theme.colors.gray400 : ie.a.theme.colors.primary,
                          progress: i,
                          style: ut.progressBar,
                        }),
                      ),
                      h.a.createElement(
                        ne.a,
                        { style: ut.subtexts },
                        t &&
                          h.a.createElement(se.b, { color: 'gray700', hoverLabel: { label: null != t ? t : '' } }, t),
                        h.a.createElement(se.b, { color: 'gray700', hoverLabel: { label: a } }, l),
                      ),
                    )
                  : null,
              },
            ],
          }
        return h.a.createElement(tt.a, Je()({}, r, { containerStyle: ut.infoItem }))
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
        gt = B.a.d228a9a0,
        ft = B.a.c174e46e
      function vt(e) {
        var t,
          a = e.buttonString,
          n = e.buttonTestID,
          i = e.infoItemGroup,
          l = e.link,
          r = e.onButtonPress,
          o = h.a.useContext(N.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled'),
          s = null !== (t = e.expandButtonText) && void 0 !== t ? t : gt,
          c = Object(de.a)(),
          u = !h.a.useContext(oe.b).isModal,
          d = c.width <= ie.a.theme.breakpoints.xSmall,
          m = h.a.useState(!1),
          p = mt()(m, 2),
          g = p[0],
          f = p[1],
          v = g ? ft : s,
          y = [yt.promotionInfoView, u && yt.promotionInfoViewNarrow, d && yt.promotionInfoViewXSmall]
        return o
          ? h.a.createElement(
              ne.a,
              { style: y },
              h.a.createElement(
                ne.a,
                {
                  style: u ? (g ? yt.promotionInfoTextVisible : yt.promotionInfoTextHidden) : yt.promotionInfoTextWide,
                },
                i,
              ),
              h.a.createElement(
                ne.a,
                { style: u ? yt.buttonViewNarrow : yt.buttonViewWide },
                h.a.createElement(pt.a, { link: l, onPress: r, size: 'large', testID: n, type: 'primaryFilled' }, a),
              ),
              u &&
                h.a.createElement(
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
          : h.a.createElement(
              ne.a,
              { style: y },
              h.a.createElement(ne.a, { style: [yt.infoItemView, u && yt.infoItemViewNarrow] }, i),
              h.a.createElement(
                ne.a,
                { style: u ? [yt.buttonViewNarrow, { flexGrow: 0 }] : yt.buttonViewWide },
                h.a.createElement(pt.a, { link: l, onPress: r, size: 'large', testID: n, type: 'primaryFilled' }, a),
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
        wt = a('aITJ'),
        ht = a('yE5w'),
        kt = B.a.a63a89fe,
        _t = B.a.j401e4bc,
        Et = B.a.e8adeec8,
        Tt = B.a.ja781451
      function It(e) {
        var t = Object(bt.b)(),
          a = Tt(U(e.impressions)),
          n = Tt(U(e.engagements)),
          i = _t({ impressions: a, engagements: n }),
          l = {
            items: [{ label: h.a.createElement(se.b, { size: 'headline2', weight: 'heavy' }, kt), description: i }],
          },
          r = h.a.useContext(N.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled')
            ? 'TweetAnalyticsM2'
            : 'TweetAnalyticsM1'
        var o = h.a.createElement(tt.a, Je()({}, l, { containerStyle: xt.infoItem })),
          s = !!wt.b.getTwitterAppVersion(),
          c = ''
            .concat(e.tweet.permalink, '/')
            .concat(s ? ht.a.Webview : ht.a.Rweb, '/')
            .concat(ht.c.Intro)
        return h.a.createElement(vt, {
          buttonString: Et,
          infoItemGroup: o,
          link: c,
          onButtonPress: function () {
            t.scribe(j({ userId: e.userId, element: 'PromoteAgainButton', tweet: e.tweet, eventInfo: r }))
          },
        })
      }
      var xt = ie.a.create(function (e) {
          return {
            infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' },
            decorationContainer: { height: e.spaces.space24, width: e.spaces.space24, marginRight: e.spaces.space24 },
            icon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.green500 },
          }
        }),
        Vt = B.a.dcfb0332,
        Pt = B.a.g6bf2fda,
        Lt = B.a.df2c469a,
        St = B.a.ja781451
      function Ct(e) {
        var t = Object(bt.b)(),
          a = St(U(e.impressions)),
          n = Pt({ impressions: a }),
          i = h.a.useContext(N.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled')
            ? 'TweetAnalyticsM2'
            : 'TweetAnalyticsM1'
        var l = {
            items: [{ label: h.a.createElement(se.b, { size: 'headline1', weight: 'heavy' }, Vt), description: n }],
          },
          r = h.a.createElement(tt.a, Je()({}, l, { containerStyle: Rt.infoItem })),
          o = !!wt.b.getTwitterAppVersion()
        return h.a.createElement(vt, {
          buttonString: Lt,
          buttonTestID: e.buttonTestID,
          infoItemGroup: r,
          link: {
            pathname: '/i/flow/convert_to_professional',
            state: { input: { requested_variant: 'qp-'.concat(e.tweet.id_str, '-').concat(o ? 'true' : 'false') } },
            method: 'push',
          },
          onButtonPress: function () {
            t.scribe(j({ userId: e.userId, element: 'SwitchToProfessionalButton', tweet: e.tweet, eventInfo: i }))
          },
        })
      }
      var Rt = ie.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        At = B.a.dcfb0332,
        Ft = B.a.f96eec3c,
        Kt = B.a.e9891f7c,
        Dt = B.a.i859a9d3
      function Ot(e) {
        var t = Object(bt.b)(),
          a = {
            items: [{ label: h.a.createElement(se.b, { size: 'headline1', weight: 'heavy' }, At), description: Ft }],
          },
          n = h.a.useContext(N.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled')
            ? 'TweetAnalyticsM2'
            : 'TweetAnalyticsM1'
        var i = h.a.createElement(tt.a, Je()({}, a, { containerStyle: Bt.infoItem })),
          l = !!wt.b.getTwitterAppVersion(),
          r = ''
            .concat(e.tweet.permalink, '/')
            .concat(l ? ht.a.Webview : ht.a.Rweb, '/')
            .concat(ht.c.Intro)
        return h.a.createElement(vt, {
          buttonString: Kt,
          expandButtonText: Dt,
          infoItemGroup: i,
          link: r,
          onButtonPress: function () {
            t.scribe(j({ userId: e.userId, element: 'NotStartedPromotionButton', tweet: e.tweet, eventInfo: n }))
          },
        })
      }
      var Bt = ie.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        Mt = 'switchToProfessionalButton',
        Ht = a('5emT'),
        zt = B.a.jede3014,
        Wt = B.a.i094e43b,
        jt = B.a.f638d3e0
      function qt(e) {
        var t = Object(bt.b)(),
          a = {
            items: [
              {
                label: h.a.createElement(se.b, { size: 'headline2', weight: 'heavy' }, zt),
                description: Wt,
                decoration: h.a.createElement(Ht.a, { style: [Qt.icon, Qt.decorationContainer] }),
              },
            ],
          },
          n = h.a.useContext(N.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled')
            ? 'TweetAnalyticsM2'
            : 'TweetAnalyticsM1'
        return h.a.createElement(
          ne.a,
          { style: Qt.promotionInfoView },
          h.a.createElement(
            ne.a,
            { style: Qt.infoItemView },
            h.a.createElement(tt.a, Je()({}, a, { containerStyle: Qt.infoItem })),
          ),
          h.a.createElement(
            ne.a,
            { style: Qt.buttonView },
            h.a.createElement(
              se.b,
              {
                color: 'primary',
                link: 'https://twitter.com/adspolicy',
                onPress: function () {
                  t.scribe(j({ userId: e.userId, element: 'ReviewPolicyButton', tweet: e.tweet, eventInfo: n }))
                },
              },
              jt,
            ),
          ),
        )
      }
      var Nt,
        Gt,
        Qt = ie.a.create(function (e) {
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
        Ut =
          (a('yH/f'),
          Object.freeze({
            notProfessional: 'not_professional',
            notStarted: 'not_started',
            underReview: 'under_review',
            running: 'running',
            completed: 'completed',
            paused: 'paused',
          })),
        Xt = void 0 !== Nt ? Nt : (Nt = a('+s2u')),
        Yt = void 0 !== Gt ? Gt : (Gt = a('W08J'))
      function Jt(e) {
        var t,
          a,
          n,
          i,
          l,
          r,
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
          w,
          k,
          _ = e.promotionInfoState,
          E = e.tweet,
          T = e.engagements,
          I = e.impressions,
          x = ue()(Xt, e.campaignInfo),
          V = ue()(Yt, e.metrics)
        h.a.useContext(N.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled') &&
          ((T = Z(
            'Engagement',
            [],
            null == V || null === (y = V.ad) || void 0 === y || null === (b = y.creative) || void 0 === b
              ? void 0
              : b.promotion_info,
          )),
          (I = Z(
            'Impressions',
            null == V ? void 0 : V.promotion_info,
            null == V || null === (w = V.ad) || void 0 === w || null === (k = w.creative) || void 0 === k
              ? void 0
              : k.promotion_info,
          )))
        var P =
            null !== (t = T) && void 0 !== t && t.value
              ? T.value.promoted
              : null === (a = T) || void 0 === a
              ? void 0
              : a.promoted_value,
          L =
            null !== (n = I) && void 0 !== n && n.value
              ? I.value.promoted
              : null === (i = I) || void 0 === i
              ? void 0
              : i.promoted_value,
          S =
            null !== (l = I) && void 0 !== l && l.value
              ? I.value.total
              : null === (r = I) || void 0 === r
              ? void 0
              : r.total_value
        switch (_) {
          case Ut.notProfessional:
            return h.a.createElement(Ct, { buttonTestID: Mt, impressions: S, tweet: E, userId: e.userId })
          case Ut.notStarted:
            return h.a.createElement(Ot, { tweet: E, userId: e.userId })
          case Ut.underReview:
            return h.a.createElement(qt, { tweet: E, userId: e.userId })
          case Ut.running:
            return h.a.createElement(st, {
              currency: null == x || null === (o = x.campaign) || void 0 === o ? void 0 : o.currency,
              endTime: null == x || null === (s = x.campaign) || void 0 === s ? void 0 : s.end_time,
              isPaused: !1,
              remainingBudget: null == x || null === (c = x.campaign) || void 0 === c ? void 0 : c.remaining_budget,
              startTime: null == x || null === (u = x.campaign) || void 0 === u ? void 0 : u.start_time,
              totalBudget: null == x || null === (d = x.campaign) || void 0 === d ? void 0 : d.total_budget,
            })
          case Ut.paused:
            return h.a.createElement(st, {
              currency: null == x || null === (m = x.campaign) || void 0 === m ? void 0 : m.currency,
              endTime: null == x || null === (p = x.campaign) || void 0 === p ? void 0 : p.end_time,
              isPaused: !0,
              remainingBudget: null == x || null === (g = x.campaign) || void 0 === g ? void 0 : g.remaining_budget,
              startTime: null == x || null === (f = x.campaign) || void 0 === f ? void 0 : f.start_time,
              totalBudget: null == x || null === (v = x.campaign) || void 0 === v ? void 0 : v.total_budget,
            })
          case Ut.completed:
            return h.a.createElement(It, { engagements: P, impressions: L, tweet: E, userId: e.userId })
          default:
            return null
        }
      }
      var Zt,
        $t,
        ea,
        ta = a('PJTX'),
        aa = a.n(ta),
        na = a('n0Rl'),
        ia = a('wxEq'),
        la = a.n(ia),
        ra = a('LLQb'),
        oa = B.a.deaf5b15,
        sa = void 0 !== Zt ? Zt : (Zt = a('2O3u')),
        ca = (void 0 !== $t || ($t = a('njVe')), void 0 !== ea ? ea : (ea = a('wfDE'))),
        ua = Object(na.b)(ca, { errorConfig: { context: x } })
      function da(e) {
        var t = e.hidePromotionInfo,
          a = e.quickPromoteEligibility,
          n = e.tweet,
          i = e.userId,
          l = Object(bt.b)(),
          r = aa()(),
          o = Object(T.useCreateLocalApiErrorHandler)(x)
        return (
          h.a.useEffect(
            function () {
              var e = o({ showToast: !1 })
              De()(r, ca, { restId: n.id_str }).subscribe({ error: e })
            },
            [n, r, o],
          ),
          h.a.createElement(ua, {
            render: function (e) {
              if (e.fetchStatus === na.a.FAILED) {
                var r = e.retry
                return (
                  l.scribe(q('NetworkError', i, n)), h.a.createElement(ra.a, { onRequestRetry: r, retryMessage: oa })
                )
              }
              if (e.fetchStatus === na.a.LOADED) {
                var o,
                  s,
                  c =
                    null === (o = e.data) || void 0 === o || null === (s = o.tweet_result_by_rest_id) || void 0 === s
                      ? void 0
                      : s.result
                if ('Tweet' === (null == c ? void 0 : c.__typename)) {
                  var u = la()(sa, c.analytics)
                  ;(null != u && u.metrics.length) || l.scribe(q('EmptyMetricsFromBackend', i, n))
                  var d = pa(c.analytics),
                    m = d.detailExpands,
                    p = d.engagements,
                    g = d.follows,
                    f = d.impressions,
                    v = d.likes,
                    y = d.linkClicks,
                    b = d.mediaViews,
                    w = d.profileVisits,
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
                    T = ['running', 'completed', 'paused'].includes(E)
                  return h.a.createElement(
                    ne.a,
                    { style: fa.tweetActivity },
                    h.a.createElement(
                      ne.a,
                      { style: fa.metricsView },
                      h.a.createElement(Ue, { likes: v, replies: k, retweets: _, showPromotionPercentages: T }),
                      h.a.createElement(Se, {
                        detailExpands: m,
                        engagements: p,
                        follows: g,
                        impressions: f,
                        linkClicks: y,
                        mediaViews: b,
                        profileVisits: w,
                        showPromotionPercentages: T,
                        tweet: n,
                      }),
                    ),
                    t || !E
                      ? null
                      : h.a.createElement(Jt, {
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
      var ma = function (e, t) {
          return e
            ? e.metrics.find(function (e) {
                return e.key === t
              })
            : null
        },
        pa = function (e) {
          var t = la()(sa, e)
          return {
            detailExpands: ma(t, 'DetailExpands'),
            engagements: ma(t, 'Engagements'),
            follows: ma(t, 'Follows'),
            impressions: ma(t, 'Impressions'),
            likes: ma(t, 'Favorites'),
            linkClicks: ma(t, 'UrlClicks'),
            mediaViews: ma(t, 'MediaViews'),
            profileVisits: ma(t, 'UserProfileClicks'),
            replies: ma(t, 'Replies'),
            retweets: ma(t, 'Retweets'),
          }
        }
      var ga,
        fa = ie.a.create(function (e) {
          return { tweetActivity: { flex: 1 }, metricsView: { flexGrow: 1 } }
        }),
        va = (a('5BYb'), void 0 !== ga ? ga : (ga = a('XoTw'))),
        ya = B.a.ib1f8491,
        ba = B.a.fbdb85f4,
        wa = B.a.d0eeb126,
        ha = B.a.i2785008,
        ka = B.a.g33fd6b0,
        _a = B.a.eefcd267
      function Ea(e) {
        var t = e.percentageValue,
          a = ha(t),
          n = ka({ percentage: a })
        return h.a.createElement(
          ne.a,
          { accessibilityLabel: n, style: Va.percentageView },
          h.a.createElement(
            se.b,
            { accessibilityHidden: !0, color: 'primary900', size: 'subtext3', weight: 'bold' },
            a,
          ),
        )
      }
      function Ta(e) {
        var t,
          a,
          n,
          i,
          l,
          r,
          o,
          s,
          c,
          u = e.liveCounts,
          d = e.tweet,
          m = ue()(va, e.metrics),
          p = !(null == m || !m.ad),
          g = (null == u ? void 0 : u.likeCount) || d.favorite_count || 0,
          f =
            ((null == u ? void 0 : u.quoteCount) || d.quote_count || 0) +
            ((null == u ? void 0 : u.retweetCount) || d.retweet_count),
          v = (null == u ? void 0 : u.replyCount) || d.reply_count,
          y =
            null ===
              (t = Z(
                'Likes',
                null,
                null == m || null === (a = m.ad) || void 0 === a || null === (n = a.creative) || void 0 === n
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
                null == m || null === (l = m.ad) || void 0 === l || null === (r = l.creative) || void 0 === r
                  ? void 0
                  : r.like_retweet_replies,
              )) || void 0 === i
              ? void 0
              : i.promoted_value,
          w =
            null ===
              (o = Z(
                'Replies',
                null,
                null == m || null === (s = m.ad) || void 0 === s || null === (c = s.creative) || void 0 === c
                  ? void 0
                  : c.like_retweet_replies,
              )) || void 0 === o
              ? void 0
              : o.promoted_value,
          k = y ? y / g : 0,
          _ = b ? b / f : 0,
          E = w ? w / v : 0
        return h.a.createElement(
          ne.a,
          { style: Va.actionsBar },
          h.a.createElement(
            Oe.a,
            null,
            h.a.createElement(
              ne.a,
              { accessibilityLabel: ya({ likeCount: g }), style: Va.column },
              h.a.createElement(Be.a, { style: Va.actionIconsColor }),
              h.a.createElement(se.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, _a(g)),
              p ? h.a.createElement(Ea, { percentageValue: k }) : null,
            ),
            h.a.createElement(
              ne.a,
              { accessibilityLabel: ba({ retweetCount: f }), style: Va.column },
              h.a.createElement(Me.a, { style: Va.actionIconsColor }),
              h.a.createElement(se.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, _a(f)),
              p ? h.a.createElement(Ea, { percentageValue: _ }) : null,
            ),
            h.a.createElement(
              ne.a,
              { accessibilityLabel: wa({ replyCount: v }), style: Va.column },
              h.a.createElement(He.a, { style: Va.actionIconsColor }),
              h.a.createElement(se.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, _a(v)),
              p ? h.a.createElement(Ea, { percentageValue: E }) : null,
            ),
          ),
        )
      }
      var Ia,
        xa,
        Va = ie.a.create(function (e) {
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
        La = B.a.fc64990d,
        Sa = B.a.ge538875,
        Ca = B.a.dcc05a7d,
        Ra = B.a.ca7e10d7,
        Aa = B.a.bd174250,
        Fa = B.a.a69cd868,
        Ka = B.a.f894a687,
        Da = B.a.ad9d9204,
        Oa = B.a.e5b7dd84,
        Ba = B.a.de2d89a2,
        Ma = B.a.i92754c2,
        Ha = B.a.be8ddcc1,
        za = B.a.b01410d5,
        Wa = B.a.i2785008,
        ja = B.a.fa8afc43,
        qa = void 0 !== Ia ? Ia : (Ia = a('7ioy')),
        Na = function (e) {
          var t = h.a.useContext(oe.b).isModal,
            a = Object(de.a)(),
            n = ue()(qa, e.metrics)
          if (!n) return null
          var i = !(null == n || !n.ad),
            l = a.width < ie.a.theme.breakpoints.xSmall,
            r = [
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
            o = mt()(r, 7),
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
              h.a.createElement(le, { key: Ra, label: Ra, metric: c, popover: Ce(Fa, i), showPromotionPercentages: i }),
              h.a.createElement(le, { key: Ca, label: Ca, metric: s, popover: Ce(Aa, i), showPromotionPercentages: i }),
            ],
            y = [
              { value: f(null == u ? void 0 : u.total_value), label: Ga(Oa), color: 'blue900', popover: Ua(Oa, u, i) },
              {
                value: f(null == d ? void 0 : d.total_value),
                label: Ga(Wa(0.25)),
                color: 'blue900',
                popover: Ua(Ba, d, i),
              },
              {
                value: f(null == m ? void 0 : m.total_value),
                label: Ga(Wa(0.5)),
                color: 'blue900',
                popover: Ua(Ma, m, i),
              },
              {
                value: f(null == p ? void 0 : p.total_value),
                label: Ga(Wa(0.75)),
                color: 'blue900',
                popover: Ua(Ha, p, i),
              },
              {
                value: f(null == g ? void 0 : g.total_value),
                label: Ga(Wa(1)),
                color: 'blue900',
                popover: Ua(za, g, i),
              },
            ],
            b = h.a.createElement(se.b, { color: 'gray700', size: 'body', weight: 'normal' }, Da)
          return h.a.createElement(
            ne.a,
            { style: l ? Xa.smallSpacing : Xa.normalSpacing },
            h.a.createElement(
              se.b,
              {
                accessibilityLabel: La,
                accessibilityLevel: 3,
                accessibilityRole: 'heading',
                size: 'title3',
                weight: 'heavy',
              },
              La,
            ),
            h.a.createElement(
              se.b,
              { accessibilityLabel: Sa, color: 'gray700', size: 'subtext1', style: Xa.subtitle },
              Sa,
            ),
            h.a.createElement(
              ne.a,
              {
                accessibilityRole: 'region',
                style: [
                  t ? Xa.modalGrid : Xa.mobileGrid,
                  { gridGap: l ? ie.a.theme.spaces.space24 : ie.a.theme.spaces.space40 },
                ],
              },
              v,
              h.a.createElement(
                ne.a,
                { style: t ? Xa.modalChart : Xa.mobileChart },
                h.a.createElement(Pa.a, {
                  barsStyle: { borderRadii: 'none', layout: 'fixedSpacing', spacing: 'space4' },
                  data: y,
                  gridlines: [0, 0.5, 1],
                  style: { height: 100 },
                  ticks: [
                    { value: 0, label: Qa(0) },
                    { value: 0.5, label: Qa(0.5) },
                    { value: 1, label: Qa(1) },
                  ],
                  title: Ka,
                  titleDescription: b,
                }),
              ),
            ),
          )
        },
        Ga = function (e) {
          return h.a.createElement(
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
        Qa = function (e) {
          return h.a.createElement(
            se.b,
            { align: 'center', color: 'gray700', size: 'subtext2', weight: 'medium' },
            Wa(e),
          )
        },
        Ua = function (e, t, a) {
          var n,
            i =
              null != t && t.promoted_value && null != t && t.total_value
                ? (null == t ? void 0 : t.promoted_value) / (null == t ? void 0 : t.total_value)
                : 0,
            l = [a && Re(i, !0)]
          return h.a.createElement(
            ne.a,
            { style: Xa.popoverDataPoint, testID: ''.concat(e, ' bar details') },
            h.a.createElement(te.a, {
              label: e,
              size: 'title3',
              subTextList: l,
              value: ja(null !== (n = null == t ? void 0 : t.total_value) && void 0 !== n ? n : 0),
            }),
          )
        },
        Xa = ie.a.create(function (e) {
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
        Ya = a('OOKO'),
        Ja = B.a.deaf5b15,
        Za = void 0 !== xa ? xa : (xa = a('EhgS')),
        $a = Object(na.b)(Za, { errorConfig: { context: x } })
      function en(e) {
        var t,
          a,
          n,
          i = e.hidePromotionInfo,
          l = e.liveCounts,
          r = e.quickPromoteEligibility,
          o = e.tweet,
          s = e.userId,
          c = Object(bt.b)(),
          u = aa()(),
          d = Object(T.useCreateLocalApiErrorHandler)(x),
          m = h.a.useMemo($, []),
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
          h.a.useEffect(
            function () {
              var e = d({ showToast: !1 })
              De()(u, Za, { restId: o.id_str, from_time: new Date(o.created_at).toISOString(), to_time: m }).subscribe({
                error: e,
              })
            },
            [o, u, d, m],
          ),
          h.a.createElement($a, {
            render: function (e) {
              if (e.fetchStatus === na.a.FAILED) {
                var t = e.retry
                return (
                  c.scribe(q('NetworkError', s, o)), h.a.createElement(ra.a, { onRequestRetry: t, retryMessage: Ja })
                )
              }
              if (e.fetchStatus === na.a.LOADED) {
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
                    })(r),
                    m = ['running', 'completed', 'paused'].includes(d)
                  return h.a.createElement(
                    ne.a,
                    { style: tn.tweetActivity },
                    h.a.createElement(
                      ne.a,
                      { style: tn.metricsView },
                      h.a.createElement(Ta, { liveCounts: l, metrics: u, tweet: o }),
                      h.a.createElement(Se, {
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
                        h.a.createElement(
                          h.a.Fragment,
                          null,
                          h.a.createElement(Ya.a, { spacing: 'space2' }),
                          h.a.createElement(Na, { metrics: u }),
                        ),
                    ),
                    i || !d
                      ? null
                      : h.a.createElement(Jt, {
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
      var tn = ie.a.create(function (e) {
          return { tweetActivity: { flex: 1 }, metricsView: { flexGrow: 1 } }
        }),
        an = a('q9Zt'),
        nn = ['data'],
        ln = B.a.g9079b93,
        rn = B.a.a57daeb1,
        on = B.a.deaf5b15,
        sn = (function (e) {
          g()(a, e)
          var t = v()(a)
          function a() {
            var e
            s()(this, a)
            for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(l))),
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
                  l = e.context.featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled'),
                  r = (i && z.a.getOriginalTweet(i)) || void 0
                return !r || (r && r.user.id_str !== e.context.loggedInUserId)
                  ? h.a.createElement(an.a, { onRetry: null, title: ln })
                  : (e._scribeEligibility(),
                    h.a.createElement(
                      ne.a,
                      { style: cn.topLevelView },
                      h.a.createElement(
                        ne.a,
                        { style: cn.quoteTweet },
                        h.a.createElement(M.a, {
                          isCondensed: !0,
                          style: { cursor: 'default' },
                          tweetId: r.id_str,
                          withLink: !1,
                          withUserHoverCard: !1,
                        }),
                      ),
                      l
                        ? h.a.createElement(en, {
                            hidePromotionInfo: !1,
                            liveCounts: a,
                            quickPromoteEligibility: n,
                            tweet: r,
                            userId: e.context.loggedInUserId || '',
                          })
                        : h.a.createElement(da, {
                            hidePromotionInfo: !1,
                            quickPromoteEligibility: n,
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
                  l = e.context.featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled')
                    ? 'TweetAnalyticsM2'
                    : 'TweetAnalyticsM1',
                  o = W({ dwellStartTime: e._dwellStartTime, eventInfo: l, tweet: n }),
                  s = o.data,
                  c = r()(o, nn)
                a.scribe(i()(i()({}, c), {}, { element: 'dwellTime', data: s }))
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
                    i = (n && z.a.getOriginalTweet(n)) || void 0,
                    l = !!wt.b.getTwitterAppVersion()
                  return h.a.createElement(
                    D.b,
                    {
                      appBarRef: this._setAppBarRef,
                      backLocation: i ? i.permalink : '/',
                      hideBackButton: l,
                      history: a,
                      onBackClick: this._handleGoBack,
                      renderHeader: function (e) {
                        return l ? null : e
                      },
                      title: l ? null : rn,
                    },
                    h.a.createElement(F.a, { fetchStatus: t, render: this._render, retryMessage: on }),
                  )
                },
              },
            ]),
            a
          )
        })(h.a.PureComponent)
      b()(sn, 'contextType', N.a)
      var cn = ie.a.create(function (e) {
          return { topLevelView: { flex: 1 }, quoteTweet: { margin: e.spaces.space16, marginBottom: e.spaces.space12 } }
        }),
        un = A(sn)
      t.default = un
    },
    EhgS: function (e, t, a) {
      'use strict'
      var n,
        i,
        l,
        r,
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
              (l = { defaultValue: null, kind: 'LocalArgument', name: 'to_time' }),
            ],
            kind: 'Fragment',
            metadata: null,
            name: 'TweetActivityM2Query',
            selections: [
              {
                alias: null,
                args: (r = [
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
            argumentDefinitions: [i, n, l],
            kind: 'Operation',
            name: 'TweetActivityM2Query',
            selections: [
              {
                alias: null,
                args: r,
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
                                args: null,
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
            id: 'SS3ENfxsOzxVCJXIRnB7nw',
            metadata: {},
            name: 'TweetActivityM2Query',
            operationKind: 'query',
            text: null,
          },
        }
      ;(g.hash = '76d550bdce6febb8efd42e65dfb9f00a'), (e.exports = g)
    },
    KSuC: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        i = a.n(n),
        l = a('3XMw'),
        r = a.n(l),
        o = a('6s7X'),
        s = a('rHpw'),
        c = a('MWbm'),
        u = a('t62R'),
        d = a('/yvb'),
        m = a('OiMc'),
        p = r.a.affbaf62,
        g = r.a.c388d026,
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
        l = a('rHpw'),
        r = a('MWbm')
      function o(e) {
        var t = e.spacing
        return i.a.createElement(r.a, {
          accessibilityRole: 'separator',
          style: [s.divider, { marginVertical: null != t ? l.a.theme.spaces[t] : void 0 }],
        })
      }
      var s = l.a.create(function (e) {
        return { divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }
      })
    },
    RjwM: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        i = a.n(n),
        l = a('ERkP'),
        r = a.n(l),
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
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M18.707 13.293c-.39-.39-1.023-.39-1.414 0L13 17.586V5c0-.553-.447-1-1-1s-1 .447-1 1v12.586l-4.293-4.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293l6-6c.39-.39.39-1.023 0-1.414z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    W08J: function (e, t, a) {
      'use strict'
      var n,
        i = {
          argumentDefinitions: [
            { kind: 'RootArgument', name: 'from_time' },
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
                  args: null,
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
      ;(i.hash = '7ff7f7c56e8a1fdf0c99edaa53191d92'), (e.exports = i)
    },
    WXWl: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        i = a.n(n),
        l = a('ERkP'),
        r = a.n(l),
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
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M18.707 10.293l-6-6c-.39-.39-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L11 7.414V20c0 .553.447 1 1 1s1-.447 1-1V7.414l4.293 4.293c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    XiYe: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        i = n.useEffect,
        l = n.useRef
      e.exports = function () {
        var e = l(!0)
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
    XoTw: function (e, t, a) {
      'use strict'
      var n = {
        argumentDefinitions: [
          { kind: 'RootArgument', name: 'from_time' },
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
                args: null,
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
        hash: '32c288232796d109a47b04349e10cc46',
      }
      e.exports = n
    },
    Zko5: function (e, t, a) {
      'use strict'
      var n = a('RhWx'),
        i = a.n(n),
        l = (a('z84I'), a('2G9S'), a('tQbP'), a('ERkP')),
        r = a.n(l),
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
        var l,
          r = e.key,
          o = null != n && null !== (l = n.current) && void 0 !== l && l[t] ? n.current[t].length : 0
        if ('ArrowRight' === r)
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
        else if ('ArrowLeft' === r)
          if ((e.preventDefault(), 0 === a)) {
            var f,
              v,
              y,
              b,
              w = t - 1 < 0 ? i - 1 : t - 1,
              h = null != n && null !== (f = n.current) && void 0 !== f && f[w] ? n.current[w].length : 1
            null == n ||
              null === (v = n.current) ||
              void 0 === v ||
              null === (y = v[w]) ||
              void 0 === y ||
              null === (b = y[h - 1]) ||
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
        w = a('tI3i'),
        h = a.n(w),
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
        T = function (e) {
          return function (t) {
            var a
            return null !== (a = e.popover) && void 0 !== a ? a : null
          }
        },
        I = f.a.dec1d7ef,
        x = f.a.f765bead,
        V = function (e) {
          var t = e.barsStyle,
            a = e.data,
            n = e.maxValue,
            i = e.minValue,
            l = r.a.useRef([]),
            o = d()(d()({}, m), t),
            s = 'fixedBarWidth' === o.layout,
            u = r.a.useState(null),
            g = c()(u, 2),
            f = g[0],
            w = g[1],
            h = function (e, t, a) {
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
              f === e && w(null)
            }
          return a.map(function (e, t) {
            var o
            null === (o = l.current) || void 0 === o || o.push([])
            var c,
              u = e.values
                .map(function (e) {
                  return e.value
                })
                .reduce(function (e, t) {
                  return Math.max(e, t)
                }),
              d = !!e.popover
            return r.a.createElement(
              b.a,
              {
                key: 'barGroup'.concat(t),
                style: [_, ((c = t), null !== f ? (c === f ? { opacity: 1 } : { opacity: 0.5 }) : { opacity: 1 })],
                testID: 'barGroup'.concat(t),
              },
              r.a.createElement(
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
                    return w(t)
                  },
                  preferredVerticalOrientation: 'up',
                  renderContent: T(e),
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
                      ? I({
                          label: null === (o = e.label) || void 0 === o ? void 0 : o.props.children,
                          group: n.group,
                          value: n.value,
                        })
                      : x({ group: n.group, value: n.value })
                  return r.a.createElement(b.a, {
                    accessibilityLabel: s,
                    accessibilityRole: d ? 'tooltip' : 'img',
                    focusable: !0,
                    key: 'barGroup'.concat(i, 'Bar').concat(i),
                    onKeyDown: function (e) {
                      p(e, t, i, l, a.length)
                    },
                    ref: function (e) {
                      var a, n
                      return null === (a = l.current) || void 0 === a || null === (n = a[t]) || void 0 === n
                        ? void 0
                        : n.push(e)
                    },
                    style: h(e, n, u),
                    testID: 'barGroup'.concat(t, 'Bar').concat(i),
                  })
                }),
              ),
            )
          })
        },
        P = f.a.idea1817,
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
            l = r.a.useRef([]),
            o = r.a.useState(null),
            s = c()(o, 2),
            u = s[0],
            p = s[1],
            g = d()(d()({}, m), t),
            f = 'fixedBarWidth' === g.layout,
            w = function (e) {
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
            h = function (e) {
              u === e && p(null)
            }
          return a.map(function (e, t) {
            var n,
              i,
              o = e.label
                ? P({ label: null === (n = e.label) || void 0 === n ? void 0 : n.props.children, value: e.value })
                : L({ value: e.value }),
              s = !!e.popover
            return r.a.createElement(
              b.a,
              {
                key: 'normalBarWrapper'.concat(t),
                style: [
                  S.normalBarWrapper,
                  ((i = t), null !== u ? (i === u ? { opacity: 1 } : { opacity: 0.5 }) : { opacity: 1 }),
                ],
              },
              r.a.createElement(
                v.a,
                {
                  contentStyle: { minWidth: 0 },
                  disabled: !s,
                  enableEnterKeyToggle: !0,
                  enableHover: !0,
                  hoverDelay: 'short',
                  onDismiss: function () {
                    return h(t)
                  },
                  onHoverCardUnmount: function () {
                    return h(t)
                  },
                  onOpen: function () {
                    return p(t)
                  },
                  preferredVerticalOrientation: 'up',
                  renderContent: T(e),
                  withArrow: !0,
                  wrapperStyle: w(e),
                },
                r.a.createElement(b.a, {
                  accessibilityLabel: o,
                  accessibilityRole: s ? 'tooltip' : 'img',
                  focusable: !0,
                  key: 'bar'.concat(t),
                  onKeyDown: function (e) {
                    !(function (e, t, a, n) {
                      if ('ArrowRight' === e) {
                        var i,
                          l,
                          r = t + 1 >= n ? 0 : t + 1
                        null == a ||
                          null === (i = a.current) ||
                          void 0 === i ||
                          null === (l = i[r]) ||
                          void 0 === l ||
                          l.focus()
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
                    })(e.key, t, l, a.length)
                  },
                  ref: function (e) {
                    var t
                    return null === (t = l.current) || void 0 === t ? void 0 : t.push(e)
                  },
                  style: w(e),
                  testID: 'bar'.concat(t),
                }),
              ),
            )
          })
        },
        R = f.a.dec1d7ef,
        A = f.a.f765bead,
        F = function (e) {
          var t = e.barsStyle,
            a = e.data,
            n = e.maxValue,
            i = e.minValue,
            l = r.a.useRef([]),
            o = d()(d()({}, m), t),
            s = 'fixedBarWidth' === o.layout,
            u = r.a.useState(null),
            g = c()(u, 2),
            f = g[0],
            w = g[1],
            h = function (e, t) {
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
              f === e && w(null)
            }
          return a.map(function (e, t) {
            var n
            null === (n = l.current) || void 0 === n || n.push([])
            var i,
              s = !!e.popover
            return r.a.createElement(
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
              r.a.createElement(
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
                    return w(t)
                  },
                  preferredVerticalOrientation: 'up',
                  renderContent: T(e),
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
                      : A({ group: n.group, value: n.value })
                  return r.a.createElement(b.a, {
                    accessibilityLabel: c,
                    accessibilityRole: s ? 'tooltip' : 'img',
                    focusable: !0,
                    key: 'barGroup'.concat(i, 'Bar').concat(i),
                    onKeyDown: function (e) {
                      p(e, t, i, l, a.length)
                    },
                    ref: function (e) {
                      var a, n
                      return null === (a = l.current) || void 0 === a || null === (n = a[t]) || void 0 === n
                        ? void 0
                        : n.push(e)
                    },
                    style: h(0, n),
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
        M = f.a.hcd54327,
        H = function (e) {
          var t = e.gridlines,
            a = e.maxValue,
            n = e.minValue
          return t
            ? t.map(function (e, t) {
                return r.a.createElement(b.a, {
                  key: 'gridline'.concat(t),
                  style: [j.gridLine, { bottom: ''.concat(k(e, a, n), '%') }],
                  testID: 'gridline'.concat(t),
                })
              })
            : null
        },
        z = function (e) {
          var t = e.data
          return t
            ? t.map(function (e, t) {
                return r.a.createElement(
                  b.a,
                  { accessibilityHidden: !0, key: 'label'.concat(t), style: j.label },
                  e.label,
                )
              })
            : null
        },
        W = function (e) {
          var t = e.maxValue,
            a = e.minValue,
            n = (
              e.ticks ||
              (function (e, t) {
                var a = t + (e - t) / 2
                return [
                  {
                    value: t,
                    label: r.a.createElement(o.b, { color: 'gray700', size: 'subtext3', weight: 'medium' }, t),
                  },
                  {
                    value: a,
                    label: r.a.createElement(o.b, { color: 'gray700', size: 'subtext3', weight: 'medium' }, a),
                  },
                  {
                    value: e,
                    label: r.a.createElement(o.b, { color: 'gray700', size: 'subtext3', weight: 'medium' }, e),
                  },
                ]
              })(t, a)
            ).sort(function (e, t) {
              return e.value - t.value
            })
          return n.map(function (e, i) {
            var l = 0 === i ? k(e.value, t, a) : (100 * (e.value - n[i - 1].value)) / (t - a)
            return r.a.createElement(
              b.a,
              {
                accessibilityHidden: !0,
                key: 'tick'.concat(i),
                style: { position: 'relative', height: ''.concat(l, '%'), paddingBottom: '0.75em' },
              },
              e.label,
            )
          })
        },
        j = y.a.create(function (e) {
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
          l = e.data,
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
              : void h()(e || t, 'Either data or groupedData props must be passed')
          })(l, s, d)
        if (!y) return null
        var w = Math.max.apply(Math, i()(y).concat(i()(v))),
          k = Math.min.apply(Math, i()(y).concat(i()(v)))
        if (void 0 !== l) (t = r.a.createElement(C, { barsStyle: n, data: l, maxValue: w, minValue: k })), (a = '')
        else {
          if (void 0 === s) return null
          d
            ? ((t = r.a.createElement(F, { barsStyle: n, data: s, maxValue: w, minValue: k })), (a = B))
            : ((t = r.a.createElement(V, { barsStyle: n, data: s, maxValue: w, minValue: k })), (a = M))
        }
        var T = O({ title: g, chartType: a, minValue: D(k), maxValue: D(w) })
        return r.a.createElement(
          b.a,
          { accessibilityLabelledBy: 'chart-title', accessibilityRole: 'figure', focusable: !0 },
          r.a.createElement(
            b.a,
            { style: j.titleBar },
            r.a.createElement(
              o.b,
              {
                accessibilityLabel: T,
                accessibilityRole: 'heading',
                focusable: !1,
                nativeID: 'chart-title',
                size: 'subtext2',
                style: j.title,
                weight: 'medium',
              },
              g,
            ),
            f ? r.a.createElement(K.a, { label: g, popover: f }) : null,
          ),
          r.a.createElement(
            b.a,
            { style: [j.grid, m] },
            r.a.createElement(
              b.a,
              { accessibilityRole: 'application', focusable: !1, key: 'chartArea', style: j.chartArea },
              r.a.createElement(H, { gridlines: c, maxValue: w, minValue: k }),
              t,
            ),
            r.a.createElement(
              b.a,
              { key: 'yAxis', style: j.yAxis },
              r.a.createElement(W, { maxValue: w, minValue: k, ticks: p }),
            ),
            r.a.createElement(b.a, { key: 'xAxis', style: j.xAxis }, r.a.createElement(z, { data: l || s })),
          ),
        )
      }
    },
    b5s6: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        i = a.n(n),
        l = a('m3Bd'),
        r = a.n(l),
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
        w = a('x5Pi'),
        h = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        k = v(function (e) {
          var t = e.community,
            a = e.createLocalApiErrorHandler,
            n = e.fetchCommunityIfNeeded,
            l = e.hydratedTweet,
            o = (e.tweetId, r()(e, h)),
            u = s.a.useContext(c.a),
            d = u.featureSwitches,
            m = u.loggedInUserId,
            p = null == l ? void 0 : l.community_id_str
          s.a.useEffect(
            function () {
              p && Object(y.a)(t) && n(p).catch(a())
            },
            [t, p, a, n],
          )
          var g = d.isTrue('responsive_web_alt_text_badge_enabled'),
            f = l && Object(w.f)(l, m, t),
            v = f && Object(w.e)(f),
            k = d.isTrue('responsive_web_reactions_enabled')
          return s.a.createElement(
            b.a,
            i()({}, o, {
              loggedInUserId: m,
              shouldShowAltLabelAlways: g,
              socialContextProps: v,
              tweet: l,
              withReactions: k,
            }),
          )
        })
      t.a = k
    },
    k5o5: function (e, t, a) {
      'use strict'
      var n = a('IGGJ')(a('K1iM')),
        i = a('EORa'),
        l = i.loadQuery,
        r = i.useTrackLoadQueryInRender,
        o = a('XiYe'),
        s = a('PJTX'),
        c = a('ERkP'),
        u = c.useCallback,
        d = c.useEffect,
        m = c.useRef,
        p = c.useState,
        g = a('e1/f').getRequest,
        f = { kind: 'NullQueryReference' }
      function v(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== g(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var a = null != t ? t : f,
          i = s()
        r()
        var c = o(),
          g = m(new Set([a])),
          y = p(function () {
            return a
          }),
          b = y[0],
          w = y[1],
          h = p(function () {
            return a
          }),
          k = h[0],
          _ = h[1]
        a !== k && (g.current.add(a), _(a), w(a))
        var E = u(
            function () {
              c.current && (g.current.add(f), w(f))
            },
            [c],
          ),
          T = u(
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
                var r,
                  o = l(null !== (r = null == a ? void 0 : a.__environment) && void 0 !== r ? r : i, e, t, n)
                g.current.add(o), w(o)
              }
            },
            [i, e, w, c],
          ),
          I = m(!1)
        return (
          d(function () {
            return function () {
              I.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === I.current)
                return (
                  (I.current = !1),
                  void (
                    'NullQueryReference' !== b.kind &&
                    T(b.variables, { fetchPolicy: b.fetchPolicy, networkCacheConfig: b.networkCacheConfig })
                  )
                )
              var t = g.current
              if (c.current) {
                var a,
                  i = (0, n.default)(t)
                try {
                  for (i.s(); !(a = i.n()).done; ) {
                    var l = a.value
                    if (l === b) break
                    t.delete(l),
                      'NullQueryReference' !== l.kind &&
                        (v(e) ? l.dispose && l.dispose() : l.releaseQuery && l.releaseQuery())
                  }
                } catch (r) {
                  i.e(r)
                } finally {
                  i.f()
                }
              }
            },
            [b, c, T, e],
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
                } catch (l) {
                  a.e(l)
                } finally {
                  a.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === b.kind ? null : b, T, E]
        )
      }
    },
    n0Rl: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return M
      })
      var n = a('ddV6'),
        i = a.n(n),
        l = a('VrFO'),
        r = a.n(l),
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
        w = a('pXBW'),
        h = a('6/RC'),
        k = a('P74S'),
        _ = a.n(k),
        E = a('kGix')
      a.d(t, 'a', function () {
        return E.a
      })
      var T = a('tI3i'),
        I = a.n(T),
        x = a('fs1G'),
        V = a('0KEI'),
        P = a('VYI2'),
        L = a.n(P),
        S = a('35hZ'),
        C = a.n(S),
        R = a('k5o5'),
        A = a.n(R),
        F = a('PJTX'),
        K = a.n(F),
        D = function (e) {
          return (0, e.render)({ fetchStatus: E.a.LOADING, data: null, error: null, retry: x.a })
        },
        O = (function (e) {
          m()(a, e)
          var t = g()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), l = 0; l < n; l++) i[l] = arguments[l]
            return (e = t.call.apply(t, [this].concat(i))), v()(u()(e), 'state', { error: null }), e
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
        B = function (e) {
          var t = e.query,
            a = e.queryRef,
            n = e.render,
            i = C()(t, a)
          return n({ fetchStatus: E.a.LOADED, data: i, error: null, retry: x.a })
        },
        M = function (e, t) {
          if (h.canUseDOM)
            return function (a) {
              var n = a.fetchPolicy,
                l = void 0 === n ? 'store-or-network' : n,
                r = a.render,
                o = a.variables,
                s = A()(e),
                c = i()(s, 2),
                u = c[0],
                d = c[1],
                m = Object(V.useCreateLocalApiErrorHandler)(t.errorConfig.context),
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
                    d(g, { fetchPolicy: l })
                  },
                  [l, d, g],
                ),
                u
                  ? b.a.createElement(
                      b.a.Suspense,
                      { fallback: b.a.createElement(D, { render: r }) },
                      b.a.createElement(
                        O,
                        { errorHandler: m(t.errorConfig.options || {}), key: u.fetchKey, retry: f },
                        function (t, a) {
                          return t
                            ? r({ fetchStatus: E.a.FAILED, error: t, data: null, retry: a })
                            : b.a.createElement(B, { query: e, queryRef: u, render: r })
                        },
                      ),
                    )
                  : null
              )
            }
          var a = new WeakMap()
          return function (n) {
            n.fetchPolicy
            var l = n.render,
              r = n.variables,
              o = K()(),
              s = Object(V.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              c = L()(r),
              u = i()(c, 1)[0],
              d = a.get(o)
            if (d) return d
            var m = b.a.lazy(function () {
              return _()(o, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return (
                      I()(e, 'Fetch query returned empty data'),
                      l({ fetchStatus: E.a.LOADED, data: e, error: null, retry: x.a })
                    )
                  },
                  function (e) {
                    return e instanceof w.a
                      ? (s(t.errorConfig.options || {})(e),
                        l({ fetchStatus: E.a.FAILED, data: null, error: e, retry: x.a }))
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
      var n = {
        kind: 'InlineDataFragment',
        name: 'TweetActivity_mapPromotionDataToPromotionInfoState',
        hash: 'ea7658c5830d417e53118b26df704a5f',
      }
      e.exports = n
    },
    pYyV: function (e, t, a) {
      'use strict'
      var n,
        i,
        l = {
          argumentDefinitions: [
            { kind: 'RootArgument', name: 'from_time' },
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
                  args: null,
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
      ;(l.hash = 'd0b03595f9052187b5634d7a946854c8'), (e.exports = l)
    },
    'q+jb': function (e, t, a) {
      'use strict'
      var n,
        i,
        l = {
          argumentDefinitions: [
            { kind: 'RootArgument', name: 'from_time' },
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
                  args: null,
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
      ;(l.hash = '96a0d22b850e17d5bfe02f262a5dec37'), (e.exports = l)
    },
    wfDE: function (e, t, a) {
      'use strict'
      var n,
        i,
        l,
        r,
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
                      (l = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                                selections: (r = [
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
                      l,
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
                            selections: r,
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
      ;(u.hash = 'ba7a6bbcaa8cf917049d8e03601b1a45'), (e.exports = u)
    },
  },
])
//# sourceMappingURL=WIPED
