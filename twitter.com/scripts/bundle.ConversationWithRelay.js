;(window.webpackJsonp = window.webpackJsonp || []).push([
  [50],
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
        }),
        y = function (e) {
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
        },
        b = a('wTX1'),
        v = a('RjwM'),
        w = a('7Mjr'),
        k = a('WXWl'),
        _ = l.a.i2785008,
        h = l.a.d9687d23,
        E = l.a.ac73eb5a,
        I = l.a.c5a9f921,
        T = function (e) {
          var t = e.label,
            a = e.popover
          return t
            ? i.a.createElement(
                c.a,
                { style: V.labelBar },
                i.a.createElement(u.b, { color: 'gray700', size: 'subtext2', weight: 'medium' }, t),
                a ? i.a.createElement(y, { label: t, popover: a }) : null,
              )
            : null
        },
        P = function (e) {
          var t = e.unit
          return t ? i.a.createElement(u.b, { color: 'gray700', style: V.unitText, weight: 'medium' }, t) : null
        },
        L = function (e) {
          var t,
            a,
            n = e.trendValue
          return void 0 === n
            ? null
            : ((n = Math.round(100 * n) / 100),
              (t = _(n)),
              (a = (function (e) {
                if (e < 0) {
                  var t = _(e)
                  return h({ trendValueNegativePercent: t })
                }
                if (0 === e) return E
                var a = _(e)
                return I({ trendValuePositivePercent: a })
              })(n)),
              n < 0
                ? i.a.createElement(
                    c.a,
                    { accessibilityLabel: a, style: V.trendBar },
                    i.a.createElement(v.a, { style: V.trendIconNeg }),
                    i.a.createElement(
                      u.b,
                      { accessibilityHidden: !0, color: 'red500', size: 'body', weight: 'medium' },
                      t,
                    ),
                  )
                : 0 === n
                ? i.a.createElement(
                    c.a,
                    { accessibilityLabel: a, style: V.trendBar },
                    i.a.createElement(w.a, { style: V.trendIconZero }),
                    i.a.createElement(
                      u.b,
                      { accessibilityHidden: !0, color: 'gray700', size: 'body', weight: 'medium' },
                      t,
                    ),
                  )
                : i.a.createElement(
                    c.a,
                    { accessibilityLabel: a, style: V.trendBar },
                    i.a.createElement(k.a, { style: V.trendIconPos }),
                    i.a.createElement(
                      u.b,
                      { accessibilityHidden: !0, color: 'green500', size: 'body', weight: 'medium' },
                      t,
                    ),
                  ))
        },
        V = s.a.create(function (e) {
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
          d = e.unit,
          m = e.value
        return i.a.createElement(
          c.a,
          { style: V.dataPoint },
          i.a.createElement(T, { label: n, popover: r }),
          i.a.createElement(
            c.a,
            { style: V.valueBar },
            t
              ? i.a.createElement(b.a, { count: a, size: l, weight: 'bold' }, m)
              : i.a.createElement(u.b, { size: l, weight: 'bold' }, m),
            i.a.createElement(P, { unit: d }),
            i.a.createElement(L, { trendValue: s }),
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
          y = t.networkCacheConfig,
          b = r(e, f, y)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          b.request.node.params.name !== t.name && n(!1),
            (s = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: m,
              fetchObservable: c(d, b.request.identifier, function () {
                return d === t.environment && null != g
                  ? d.executeWithSource({ operation: b, source: g })
                  : d.execute({ operation: b })
              }),
              fetchPolicy: p,
              query: b,
              renderPolicy: null == a ? void 0 : a.UNSTABLE_renderPolicy,
            })
        else {
          var v = u(d, b)
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != g && d === t.environment ? g.ifEmpty(v) : (t.environment, v),
            fetchKey: m,
            fetchPolicy: p,
            query: b,
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
    DL4F: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'ConversationAnalyticsScreen', function () {
          return Oa
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
        b = a('KEM+'),
        v = a.n(b),
        w = (a('2G9S'), a('ERkP')),
        k = a.n(w),
        _ = (a('KqXw'), a('WNMA'), a('TuTd')),
        h = a('XOJV'),
        E = a('rxPX'),
        I = a('0KEI'),
        T = a('S3l+'),
        P = 'CONVERSATION_ANALYTICS_SCREEN',
        L = function (e, t) {
          return t.match.params.statusId
        },
        V = function (e, t) {
          return h.a.selectHydrated(e, L(0, t))
        },
        x = function (e, t) {
          return Object(T.r)(e, L(0, t))
        },
        F = function (e, t) {
          return h.a.selectFetchStatus(e, L(0, t))
        },
        C = function (e, t) {
          return Object(T.q)(e, L(0, t))
        },
        S = function (e, t) {
          return Object(_.a)(e, L(0, t))
        },
        A = Object(E.a)()
          .propsFromState(function () {
            return {
              fetchStatus: F,
              liveCounts: S,
              quickPromoteEligibilityFetchStatus: x,
              statusId: L,
              tweet: V,
              quickPromoteEligibility: C,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(P),
              fetchTweetIfNeeded: h.a.fetchOneIfNeeded,
              fetchQuickPromoteEligibilityIfNeeded: T.k,
            }
          })
          .withAnalytics({ page: 'tweet', section: 'analytics', component: 'RwebConversationAnalytics' }),
        R = a('v//M'),
        K = a('W5XZ'),
        D = a('jHSc'),
        O = a('KUGV'),
        B = a('3XMw'),
        N = a.n(B),
        j = a('b5s6')
      a('0zG9')
      function H(e) {
        var t = Date.now() - e
        return { action: 'view', data: { event_info: JSON.stringify({ duration_ms: t }) } }
      }
      function z(e, t) {
        return { element: t, action: 'click', data: { profile_id: e } }
      }
      function q(e, t, a) {
        return {
          element: 'TweetActivityQueryRenderer',
          action: 'error',
          data: { event_info: e, items: [{ item_type: 0, id: a }], profile_id: t },
        }
      }
      var M = a('Rp9C'),
        W = (a('jQ3i'), a('hBpG'), a('7x/C'), a('LW0h'), a('z84I'), a('v6aA')),
        Q = (a('ly4k'), N.a.ja781451),
        G = N.a.cfa1a7b8
      function U(e) {
        return e || 0
      }
      function X(e, t) {
        var a = U(t)
        return 0 === a ? 0 : U(e) / a
      }
      function Y(e) {
        var t = U(e)
        return t >= 1e5 ? G(t) : Q(t)
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
            s = [i && Se(o, !0)]
          return k.a.createElement(te.a, {
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
            s = [i && Se(o, !1)]
          return k.a.createElement(
            ne.a,
            { style: le.dataPoint },
            k.a.createElement(te.a, {
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
        me = N.a.e5fe61ef,
        pe = N.a.f6162a32,
        ge = N.a.dbe9353d,
        fe = N.a.e044b63f,
        ye = N.a.d8abdaa4,
        be = N.a.de0de3a7,
        ve = N.a.aeee0181,
        we = N.a.ccab7c76,
        ke = N.a.b1b4d57d,
        _e = N.a.i680442e,
        he = N.a.d5f1e553,
        Ee = N.a.d24b7811,
        Ie = N.a.b40d33e4,
        Te = N.a.ee547382,
        Pe = N.a.i2785008,
        Le = N.a.g33fd6b0,
        Ve = (N.a.b71059c3, N.a.de4def4d),
        xe = void 0 !== ee ? ee : (ee = a('q+jb'))
      function Fe(e) {
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
          b = e.metrics,
          v = e.showPromotionPercentages,
          w = e.tweet,
          _ = e.detailExpands,
          h = e.engagements,
          E = e.follows,
          I = e.impressions,
          T = e.linkClicks,
          P = e.mediaViews,
          L = e.profileVisits,
          V = k.a.useContext(oe.b).isModal,
          x = Object(de.a)().width < ie.a.theme.breakpoints.xSmall,
          F = !(null == w || null === (t = w.entities) || void 0 === t || !t.urls) && w.entities.urls.length > 0,
          C =
            !(null == w || null === (a = w.extended_entities) || void 0 === a || !a.media) &&
            w.extended_entities.media.filter(function (e) {
              return 'video' === e.type
            }).length > 0,
          S = ue()(xe, b)
        k.a.useContext(W.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled') &&
          ((_ = Z(
            'DetailExpands',
            null == S ? void 0 : S.datapoints_grid,
            null == S || null === (n = S.ad) || void 0 === n || null === (i = n.creative) || void 0 === i
              ? void 0
              : i.datapoints_grid,
          )),
          (h = Z(
            'Engagement',
            null == S ? void 0 : S.datapoints_grid,
            null == S || null === (r = S.ad) || void 0 === r || null === (l = r.creative) || void 0 === l
              ? void 0
              : l.datapoints_grid,
          )),
          (E = Z(
            'Follows',
            null == S ? void 0 : S.datapoints_grid,
            null == S || null === (o = S.ad) || void 0 === o || null === (s = o.creative) || void 0 === s
              ? void 0
              : s.datapoints_grid,
          )),
          (I = Z(
            'Impressions',
            null == S ? void 0 : S.datapoints_grid,
            null == S || null === (c = S.ad) || void 0 === c || null === (u = c.creative) || void 0 === u
              ? void 0
              : u.datapoints_grid,
          )),
          (T = Z(
            'LinkClicks',
            null == S ? void 0 : S.datapoints_grid,
            null == S || null === (d = S.ad) || void 0 === d || null === (m = d.creative) || void 0 === m
              ? void 0
              : m.datapoints_grid,
          )),
          (P = Z(
            'MediaViews',
            null == S ? void 0 : S.datapoints_grid,
            null == S || null === (p = S.ad) || void 0 === p || null === (g = p.creative) || void 0 === g
              ? void 0
              : g.datapoints_grid,
          )),
          (L = Z(
            'ProfileVisits',
            null == S ? void 0 : S.datapoints_grid,
            null == S || null === (f = S.ad) || void 0 === f || null === (y = f.creative) || void 0 === y
              ? void 0
              : y.datapoints_grid,
          )))
        var A = [
          k.a.createElement(re, { key: ge, label: ge, metric: h, popover: Ce(fe, v), showPromotionPercentages: v }),
          k.a.createElement(re, { key: Ie, label: Ie, metric: _, popover: Ce(Te, v), showPromotionPercentages: v }),
          k.a.createElement(re, { key: ye, label: ye, metric: E, popover: Ce(be, v), showPromotionPercentages: v }),
          k.a.createElement(re, { key: ve, label: ve, metric: L, popover: Ce(we, v), showPromotionPercentages: v }),
          C
            ? k.a.createElement(re, { key: ke, label: ke, metric: P, popover: Ce(_e, v), showPromotionPercentages: v })
            : null,
          F
            ? k.a.createElement(re, { key: he, label: he, metric: T, popover: Ce(Ee, v), showPromotionPercentages: v })
            : null,
        ].filter(function (e) {
          return e
        })
        return k.a.createElement(
          ne.a,
          {
            style: [
              Re.grid,
              { gridTemplateColumns: V ? ' 1fr 2fr' : '1fr' },
              { gridGap: x ? ie.a.theme.spaces.space24 : ie.a.theme.spaces.space40 },
              { marginTop: x ? ie.a.theme.spaces.space24 : ie.a.theme.spaces.space40 },
              { marginHorizontal: x ? ie.a.theme.spaces.space16 : ie.a.theme.spaces.space32 },
            ],
          },
          k.a.createElement(ae, { label: me, metric: I, popover: Ce(pe, v), showPromotionPercentages: v }),
          k.a.createElement(
            ne.a,
            { style: [Re.minorDataPointsGrid, { gridGap: x ? ie.a.theme.spaces.space24 : ie.a.theme.spaces.space40 }] },
            A.map(function (e, t) {
              return k.a.createElement(ne.a, { key: 'minorDataPoint'.concat(t) }, e)
            }),
          ),
        )
      }
      function Ce(e, t) {
        return k.a.createElement(
          ne.a,
          null,
          k.a.createElement(se.b, { color: 'gray700', size: 'body', weight: 'normal' }, e),
          t
            ? k.a.createElement(
                se.b,
                {
                  color: 'primary900',
                  size: 'subtext3',
                  style: [Re.promotionLabel, Re.popoverPromotionLabel],
                  weight: 'bold',
                },
                Ve,
              )
            : null,
        )
      }
      function Se(e, t) {
        var a = Pe(e),
          n = Le({ percentage: a }),
          i = t ? n : a
        return k.a.createElement(
          ne.a,
          { accessibilityLabel: n, key: i, style: [Re.subTextListItem, Re.promotionLabel] },
          k.a.createElement(
            se.b,
            { accessibilityHidden: !0, color: 'primary900', size: 'subtext3', weight: 'bold' },
            i,
          ),
        )
      }
      var Ae,
        Re = ie.a.create(function (e) {
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
        Ne = a('jlPL'),
        je = a('dFWS'),
        He = void 0 !== Ae ? Ae : (Ae = a('pYyV')),
        ze = N.a.ib1f8491,
        qe = N.a.fbdb85f4,
        Me = N.a.d0eeb126,
        We = N.a.i2785008,
        Qe = N.a.g33fd6b0
      function Ge(e) {
        var t = e.percentageValue,
          a = We(t),
          n = Qe({ percentage: a })
        return k.a.createElement(
          ne.a,
          { accessibilityLabel: n, style: Xe.percentageView },
          k.a.createElement(
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
          s = ue()(He, e.metrics),
          c = e.likes,
          u = e.replies,
          d = e.retweets
        k.a.useContext(W.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled') &&
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
          y = f.count,
          b = f.promotionPercentage,
          v = J(u),
          w = v.count,
          _ = v.promotionPercentage
        return k.a.createElement(
          ne.a,
          { style: Xe.actionsBar },
          k.a.createElement(
            Oe.a,
            null,
            k.a.createElement(
              ne.a,
              { accessibilityLabel: ze({ likeCount: p }), style: Xe.column },
              k.a.createElement(Be.a, { style: Xe.actionIconsColor }),
              k.a.createElement(se.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, p),
              o ? k.a.createElement(Ge, { percentageValue: g }) : null,
            ),
            k.a.createElement(
              ne.a,
              { accessibilityLabel: qe({ retweetCount: y }), style: Xe.column },
              k.a.createElement(Ne.a, { style: Xe.actionIconsColor }),
              k.a.createElement(se.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, y),
              o ? k.a.createElement(Ge, { percentageValue: b }) : null,
            ),
            k.a.createElement(
              ne.a,
              { accessibilityLabel: Me({ replyCount: w }), style: Xe.column },
              k.a.createElement(je.a, { style: Xe.actionIconsColor }),
              k.a.createElement(se.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, w),
              o ? k.a.createElement(Ge, { percentageValue: _ }) : null,
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
        at = N.a.db6efeb8,
        nt = N.a.j6daea85,
        it = N.a.jade381b,
        rt = N.a.d725a288,
        lt = N.a.hf9ed10f,
        ot = N.a.f42a198d
      function st(e) {
        var t = e.currency,
          a = e.endTime,
          n = e.isPaused,
          i = e.remainingBudget,
          r = e.startTime,
          l = e.totalBudget,
          o = k.a.useContext(W.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled'),
          s = a ? new Date(a) : null,
          c = r ? new Date(r) : null,
          u = !!s && s > new Date(Date.now()),
          d = s && c ? Object(Ze.a)(new Date(c), new Date(s)) : 0,
          m = a && u ? $e.a.getTimeLeftLabel(a) : null,
          p = s ? rt(s) : '',
          g = s ? it(s) : '',
          f = lt({ endTimeString: p, endDateString: g }),
          y = (function (e, t, a, n) {
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
        return k.a.createElement(
          ne.a,
          { style: ut.promotionInfoView },
          k.a.createElement(
            ne.a,
            { style: ut.infoItemView },
            k.a.createElement(ct, {
              budgetLabel: o ? y : null,
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
                label: k.a.createElement(se.b, { size: 'headline2', weight: 'heavy' }, n ? nt : at),
                description: r
                  ? k.a.createElement(
                      k.a.Fragment,
                      null,
                      k.a.createElement(
                        ne.a,
                        { style: ut.progressBarContainer },
                        k.a.createElement(et.a, {
                          colorValue: n ? ie.a.theme.colors.gray400 : ie.a.theme.colors.primary,
                          progress: i,
                          style: ut.progressBar,
                        }),
                      ),
                      k.a.createElement(
                        ne.a,
                        { style: ut.subtexts },
                        t &&
                          k.a.createElement(se.b, { color: 'gray700', hoverLabel: { label: null != t ? t : '' } }, t),
                        k.a.createElement(se.b, { color: 'gray700', hoverLabel: { label: a } }, r),
                      ),
                    )
                  : null,
              },
            ],
          }
        return k.a.createElement(tt.a, Je()({}, l, { containerStyle: ut.infoItem }))
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
        gt = N.a.d228a9a0,
        ft = N.a.c174e46e
      function yt(e) {
        var t,
          a = e.buttonString,
          n = e.buttonTestID,
          i = e.infoItemGroup,
          r = e.link,
          l = e.onButtonPress,
          o = k.a.useContext(W.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled'),
          s = null !== (t = e.expandButtonText) && void 0 !== t ? t : gt,
          c = Object(de.a)(),
          u = !k.a.useContext(oe.b).isModal,
          d = c.width <= ie.a.theme.breakpoints.xSmall,
          m = k.a.useState(!1),
          p = mt()(m, 2),
          g = p[0],
          f = p[1],
          y = g ? ft : s,
          b = [bt.promotionInfoView, u && bt.promotionInfoViewNarrow, d && bt.promotionInfoViewXSmall]
        return o
          ? k.a.createElement(
              ne.a,
              { style: b },
              k.a.createElement(
                ne.a,
                {
                  style: u ? (g ? bt.promotionInfoTextVisible : bt.promotionInfoTextHidden) : bt.promotionInfoTextWide,
                },
                i,
              ),
              k.a.createElement(
                ne.a,
                { style: u ? bt.buttonViewNarrow : bt.buttonViewWide },
                k.a.createElement(pt.a, { link: r, onPress: l, size: 'large', testID: n, type: 'primaryFilled' }, a),
              ),
              u &&
                k.a.createElement(
                  pt.a,
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
              ne.a,
              { style: b },
              k.a.createElement(ne.a, { style: [bt.infoItemView, u && bt.infoItemViewNarrow] }, i),
              k.a.createElement(
                ne.a,
                { style: u ? [bt.buttonViewNarrow, { flexGrow: 0 }] : bt.buttonViewWide },
                k.a.createElement(pt.a, { link: r, onPress: l, size: 'large', testID: n, type: 'primaryFilled' }, a),
              ),
            )
      }
      var bt = ie.a.create(function (e) {
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
        vt = a('Irs7'),
        wt = a('yE5w'),
        kt = N.a.a63a89fe,
        _t = N.a.j401e4bc,
        ht = N.a.e8adeec8,
        Et = N.a.ja781451
      function It(e) {
        var t = Object(vt.b)(),
          a = Et(U(e.impressions)),
          n = Et(U(e.engagements)),
          i = _t({ impressions: a, engagements: n }),
          r = {
            items: [{ label: k.a.createElement(se.b, { size: 'headline2', weight: 'heavy' }, kt), description: i }],
          }
        var l = k.a.createElement(tt.a, Je()({}, r, { containerStyle: Tt.infoItem })),
          o = null !== Object(O.a)(),
          s = ''
            .concat(e.tweetPermalink, '/')
            .concat(o ? wt.a.Webview : wt.a.Rweb, '/')
            .concat(wt.c.Intro)
        return k.a.createElement(yt, {
          buttonString: ht,
          infoItemGroup: l,
          link: s,
          onButtonPress: function () {
            t.scribe(z(e.userId, 'PromoteAgainButton'))
          },
        })
      }
      var Tt = ie.a.create(function (e) {
          return {
            infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' },
            decorationContainer: { height: e.spaces.space24, width: e.spaces.space24, marginRight: e.spaces.space24 },
            icon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.green500 },
          }
        }),
        Pt = N.a.dcfb0332,
        Lt = N.a.g6bf2fda,
        Vt = N.a.df2c469a,
        xt = N.a.ja781451
      function Ft(e) {
        var t = Object(vt.b)(),
          a = null !== Object(O.a)(),
          n = xt(U(e.impressions)),
          i = Lt({ impressions: n })
        var r = {
            items: [{ label: k.a.createElement(se.b, { size: 'headline1', weight: 'heavy' }, Pt), description: i }],
          },
          l = k.a.createElement(tt.a, Je()({}, r, { containerStyle: Ct.infoItem }))
        return k.a.createElement(yt, {
          buttonString: Vt,
          buttonTestID: e.buttonTestID,
          infoItemGroup: l,
          link: {
            pathname: '/i/flow/convert_to_professional',
            state: { input: { requested_variant: 'qp-'.concat(e.tweet_id, '-').concat(a ? 'true' : 'false') } },
            method: 'push',
          },
          onButtonPress: function () {
            t.scribe(z(e.userId, 'SwitchToProfessionalButton'))
          },
        })
      }
      var Ct = ie.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        St = N.a.dcfb0332,
        At = N.a.f96eec3c,
        Rt = N.a.e9891f7c,
        Kt = N.a.i859a9d3
      function Dt(e) {
        var t = Object(vt.b)(),
          a = {
            items: [{ label: k.a.createElement(se.b, { size: 'headline1', weight: 'heavy' }, St), description: At }],
          }
        var n = k.a.createElement(tt.a, Je()({}, a, { containerStyle: Ot.infoItem })),
          i = null !== Object(O.a)(),
          r = ''
            .concat(e.tweetPermalink, '/')
            .concat(i ? wt.a.Webview : wt.a.Rweb, '/')
            .concat(wt.c.Intro)
        return k.a.createElement(yt, {
          buttonString: Rt,
          expandButtonText: Kt,
          infoItemGroup: n,
          link: r,
          onButtonPress: function () {
            t.scribe(z(e.userId, 'NotStartedPromotionButton'))
          },
        })
      }
      var Ot = ie.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        Bt = 'switchToProfessionalButton',
        Nt = a('5emT'),
        jt = N.a.jede3014,
        Ht = N.a.i094e43b,
        zt = N.a.f638d3e0
      function qt(e) {
        var t = Object(vt.b)(),
          a = {
            items: [
              {
                label: k.a.createElement(se.b, { size: 'headline2', weight: 'heavy' }, jt),
                description: Ht,
                decoration: k.a.createElement(Nt.a, { style: [Qt.icon, Qt.decorationContainer] }),
              },
            ],
          }
        return k.a.createElement(
          ne.a,
          { style: Qt.promotionInfoView },
          k.a.createElement(
            ne.a,
            { style: Qt.infoItemView },
            k.a.createElement(tt.a, Je()({}, a, { containerStyle: Qt.infoItem })),
          ),
          k.a.createElement(
            ne.a,
            { style: Qt.buttonView },
            k.a.createElement(
              se.b,
              {
                color: 'primary',
                link: 'https://twitter.com/adspolicy',
                onPress: function () {
                  t.scribe(z(e.userId, 'ReviewPolicyButton'))
                },
              },
              zt,
            ),
          ),
        )
      }
      var Mt,
        Wt,
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
        Gt =
          (a('yH/f'),
          Object.freeze({
            notProfessional: 'not_professional',
            notStarted: 'not_started',
            underReview: 'under_review',
            running: 'running',
            completed: 'completed',
            paused: 'paused',
          })),
        Ut = void 0 !== Mt ? Mt : (Mt = a('+s2u')),
        Xt = void 0 !== Wt ? Wt : (Wt = a('W08J'))
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
          y,
          b,
          v,
          w,
          _,
          h = e.promotionInfoState,
          E = e.tweet,
          I = e.engagements,
          T = e.impressions,
          P = ue()(Ut, e.campaignInfo),
          L = ue()(Xt, e.metrics)
        k.a.useContext(W.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled') &&
          ((I = Z(
            'Engagement',
            [],
            null == L || null === (b = L.ad) || void 0 === b || null === (v = b.creative) || void 0 === v
              ? void 0
              : v.promotion_info,
          )),
          (T = Z(
            'Impressions',
            null == L ? void 0 : L.promotion_info,
            null == L || null === (w = L.ad) || void 0 === w || null === (_ = w.creative) || void 0 === _
              ? void 0
              : _.promotion_info,
          )))
        var V =
            null !== (t = I) && void 0 !== t && t.value
              ? I.value.promoted
              : null === (a = I) || void 0 === a
              ? void 0
              : a.promoted_value,
          x =
            null !== (n = T) && void 0 !== n && n.value
              ? T.value.promoted
              : null === (i = T) || void 0 === i
              ? void 0
              : i.promoted_value,
          F =
            null !== (r = T) && void 0 !== r && r.value
              ? T.value.total
              : null === (l = T) || void 0 === l
              ? void 0
              : l.total_value
        switch (h) {
          case Gt.notProfessional:
            return k.a.createElement(Ft, { buttonTestID: Bt, impressions: F, tweet_id: E.id_str, userId: e.userId })
          case Gt.notStarted:
            return k.a.createElement(Dt, { tweetPermalink: E.permalink, userId: e.userId })
          case Gt.underReview:
            return k.a.createElement(qt, { userId: e.userId })
          case Gt.running:
            return k.a.createElement(st, {
              currency: null == P || null === (o = P.campaign) || void 0 === o ? void 0 : o.currency,
              endTime: null == P || null === (s = P.campaign) || void 0 === s ? void 0 : s.end_time,
              isPaused: !1,
              remainingBudget: null == P || null === (c = P.campaign) || void 0 === c ? void 0 : c.remaining_budget,
              startTime: null == P || null === (u = P.campaign) || void 0 === u ? void 0 : u.start_time,
              totalBudget: null == P || null === (d = P.campaign) || void 0 === d ? void 0 : d.total_budget,
            })
          case Gt.completed:
            return k.a.createElement(It, {
              engagements: V,
              impressions: x,
              tweetPermalink: E.permalink,
              userId: e.userId,
            })
          case Gt.paused:
            return k.a.createElement(st, {
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
      var Jt,
        Zt,
        $t,
        ea = a('Ud88'),
        ta = a.n(ea),
        aa = a('n0Rl'),
        na = a('Hsf0'),
        ia = a.n(na),
        ra = a('LLQb'),
        la = N.a.deaf5b15,
        oa = void 0 !== Jt ? Jt : (Jt = a('2O3u')),
        sa = (void 0 !== Zt || (Zt = a('njVe')), void 0 !== $t ? $t : ($t = a('wfDE'))),
        ca = Object(aa.b)(sa, { errorConfig: { context: P } })
      function ua(e) {
        var t = e.hidePromotionInfo,
          a = e.quickPromoteEligibility,
          n = e.tweet,
          i = e.userId,
          r = Object(vt.b)(),
          l = ta()(),
          o = Object(I.useCreateLocalApiErrorHandler)(P)
        return (
          k.a.useEffect(
            function () {
              var e = o({ showToast: !1 })
              De()(l, sa, { restId: n.id_str }).subscribe({ error: e })
            },
            [n, l, o],
          ),
          k.a.createElement(ca, {
            render: function (e) {
              if (e.fetchStatus === aa.a.FAILED) {
                var l = e.retry
                return (
                  r.scribe(q('NetworkError', i, n.id_str)),
                  k.a.createElement(ra.a, { onRequestRetry: l, retryMessage: la })
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
                  ;(null != u && u.metrics.length) || r.scribe(q('EmptyMetricsFromBackend', i, n.id_str))
                  var d = ma(c.analytics),
                    m = d.detailExpands,
                    p = d.engagements,
                    g = d.follows,
                    f = d.impressions,
                    y = d.likes,
                    b = d.linkClicks,
                    v = d.mediaViews,
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
                    ne.a,
                    { style: ga.tweetActivity },
                    k.a.createElement(
                      ne.a,
                      { style: ga.metricsView },
                      k.a.createElement(Ue, { likes: y, replies: _, retweets: h, showPromotionPercentages: I }),
                      k.a.createElement(Fe, {
                        detailExpands: m,
                        engagements: p,
                        follows: g,
                        impressions: f,
                        linkClicks: b,
                        mediaViews: v,
                        profileVisits: w,
                        showPromotionPercentages: I,
                        tweet: n,
                      }),
                    ),
                    t || !E
                      ? null
                      : k.a.createElement(Yt, {
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
        fa = void 0 !== pa ? pa : (pa = a('XoTw')),
        ya = N.a.ib1f8491,
        ba = N.a.fbdb85f4,
        va = N.a.d0eeb126,
        wa = N.a.i2785008,
        ka = N.a.g33fd6b0,
        _a = N.a.eefcd267
      function ha(e) {
        var t = e.percentageValue,
          a = wa(t),
          n = ka({ percentage: a })
        return k.a.createElement(
          ne.a,
          { accessibilityLabel: n, style: Ta.percentageView },
          k.a.createElement(
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
          y = (null == u ? void 0 : u.replyCount) || m.reply_count,
          b =
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
          v =
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
          w =
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
          _ = b ? b / g : 0,
          h = v ? v / f : 0,
          E = w ? w / y : 0
        return k.a.createElement(
          ne.a,
          { style: Ta.actionsBar },
          k.a.createElement(
            Oe.a,
            null,
            k.a.createElement(
              ne.a,
              { accessibilityLabel: ya({ likeCount: g }), style: Ta.column },
              k.a.createElement(Be.a, { style: Ta.actionIconsColor }),
              k.a.createElement(se.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, _a(g)),
              d ? k.a.createElement(ha, { percentageValue: _ }) : null,
            ),
            k.a.createElement(
              ne.a,
              { accessibilityLabel: ba({ retweetCount: f }), style: Ta.column },
              k.a.createElement(Ne.a, { style: Ta.actionIconsColor }),
              k.a.createElement(se.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, _a(f)),
              d ? k.a.createElement(ha, { percentageValue: h }) : null,
            ),
            k.a.createElement(
              ne.a,
              { accessibilityLabel: va({ replyCount: y }), style: Ta.column },
              k.a.createElement(je.a, { style: Ta.actionIconsColor }),
              k.a.createElement(se.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, _a(y)),
              d ? k.a.createElement(ha, { percentageValue: E }) : null,
            ),
          ),
        )
      }
      var Ia,
        Ta = ie.a.create(function (e) {
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
        Pa = N.a.deaf5b15,
        La = void 0 !== Ia ? Ia : (Ia = a('EhgS')),
        Va = Object(aa.b)(La, { errorConfig: { context: P } })
      function xa(e) {
        var t = e.hidePromotionInfo,
          a = e.liveCounts,
          n = e.quickPromoteEligibility,
          i = e.tweet,
          r = e.userId,
          l = Object(vt.b)(),
          o = ta()(),
          s = Object(I.useCreateLocalApiErrorHandler)(P),
          c = k.a.useMemo($, [])
        return (
          k.a.useEffect(
            function () {
              var e = s({ showToast: !1 })
              De()(o, La, { restId: i.id_str, from_time: new Date(i.created_at).toISOString(), to_time: c }).subscribe({
                error: e,
              })
            },
            [i, o, s, c],
          ),
          k.a.createElement(Va, {
            render: function (e) {
              if (e.fetchStatus === aa.a.FAILED) {
                var o = e.retry
                return (
                  l.scribe(q('NetworkError', r, i.id_str)),
                  k.a.createElement(ra.a, { onRequestRetry: o, retryMessage: Pa })
                )
              }
              if (e.fetchStatus === aa.a.LOADED) {
                var s,
                  c,
                  u =
                    null === (s = e.data) || void 0 === s || null === (c = s.tweet_result_by_rest_id) || void 0 === c
                      ? void 0
                      : c.result
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
                    })(n),
                    m = ['running', 'completed', 'paused'].includes(d)
                  return k.a.createElement(
                    ne.a,
                    { style: Fa.tweetActivity },
                    k.a.createElement(
                      ne.a,
                      { style: Fa.metricsView },
                      k.a.createElement(Ea, { liveCounts: a, metrics: u, showPromotionPercentages: m, tweet: i }),
                      k.a.createElement(Fe, {
                        detailExpands: null,
                        engagements: null,
                        follows: null,
                        impressions: null,
                        linkClicks: null,
                        mediaViews: null,
                        metrics: u,
                        profileVisits: null,
                        showPromotionPercentages: m,
                        tweet: i,
                      }),
                    ),
                    t || !d
                      ? null
                      : k.a.createElement(Yt, {
                          campaignInfo: u.quick_promotion,
                          engagements: null,
                          impressions: null,
                          metrics: u,
                          promotionInfoState: d,
                          tweet: i,
                          userId: r,
                        }),
                  )
                }
              }
              return null
            },
            variables: { restId: i.id_str, from_time: new Date(i.created_at).toISOString(), to_time: c },
          })
        )
      }
      var Fa = ie.a.create(function (e) {
          return { tweetActivity: { flex: 1 }, metricsView: { flexGrow: 1 } }
        }),
        Ca = a('E0cF'),
        Sa = a('q9Zt'),
        Aa = ['data'],
        Ra = N.a.g9079b93,
        Ka = N.a.a57daeb1,
        Da = N.a.deaf5b15,
        Oa = (function (e) {
          g()(a, e)
          var t = y()(a)
          function a() {
            var e
            s()(this, a)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(m()(e), '_handleFetchTweet', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler
                ;(0, t.fetchTweetIfNeeded)(t.statusId).catch(a(K.a))
              }),
              v()(m()(e), '_handleFetchQuickPromoteEligibility', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler
                return (0, t.fetchQuickPromoteEligibilityIfNeeded)({ statusId: t.statusId }).catch(a())
              }),
              v()(m()(e), '_render', function () {
                var t = e.props,
                  a = t.liveCounts,
                  n = t.quickPromoteEligibility,
                  i = t.tweet,
                  r = e.context.featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled'),
                  l = (i && Ca.a.getOriginalTweet(i)) || void 0
                return !l || (l && l.user.id_str !== e.context.loggedInUserId)
                  ? k.a.createElement(Sa.a, { onRetry: null, title: Ra })
                  : (e._scribeEligibility(),
                    k.a.createElement(
                      ne.a,
                      { style: Ba.topLevelView },
                      k.a.createElement(
                        ne.a,
                        { style: Ba.quoteTweet },
                        k.a.createElement(j.a, {
                          isCondensed: !0,
                          style: { cursor: 'default' },
                          tweetId: l.id_str,
                          withLink: !1,
                          withUserHoverCard: !1,
                        }),
                      ),
                      r
                        ? k.a.createElement(xa, {
                            hidePromotionInfo: !1,
                            liveCounts: a,
                            quickPromoteEligibility: n,
                            tweet: l,
                            userId: e.context.loggedInUserId || '',
                          })
                        : k.a.createElement(ua, {
                            hidePromotionInfo: !1,
                            quickPromoteEligibility: n,
                            tweet: l,
                            userId: e.context.loggedInUserId || '',
                          }),
                    ))
              }),
              v()(m()(e), '_setAppBarRef', function (t) {
                e._appBarRef = t
              }),
              v()(m()(e), '_handleGoBack', function () {
                e.props.history.goBackThroughModals()
              }),
              v()(m()(e), '_scribeEligibility', function () {
                var t = e.props,
                  a = t.analytics,
                  n = t.quickPromoteEligibility
                a.scribe({ element: 'eligibility', action: 'view', data: { event_info: n || '' } })
              }),
              v()(m()(e), '_scribeDwellTime', function () {
                var t = e.props,
                  a = t.analytics,
                  n = t.tweet,
                  r = (n && Ca.a.getOriginalTweet(n)) || void 0,
                  o = H(e._dwellStartTime),
                  s = o.data,
                  c = l()(o, Aa)
                a.scribe(i()(i()({}, c), {}, { data: i()(i()({}, s), {}, { items: r ? [M.a.getTweetItem(r)] : [] }) }))
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
                    i = (n && Ca.a.getOriginalTweet(n)) || void 0,
                    r = null !== Object(O.a)()
                  return k.a.createElement(
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
                      title: r ? null : Ka,
                    },
                    k.a.createElement(R.a, { fetchStatus: t, render: this._render, retryMessage: Da }),
                  )
                },
              },
            ]),
            a
          )
        })(k.a.PureComponent)
      v()(Oa, 'contextType', W.a)
      var Ba = ie.a.create(function (e) {
          return { topLevelView: { flex: 1 }, quoteTweet: { margin: e.spaces.space16, marginBottom: e.spaces.space12 } }
        }),
        Na = A(Oa)
      t.default = Na
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
        p = {
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
            id: 'T9BwVbzG8tmTKOOIJGD3gg',
            metadata: {},
            name: 'TweetActivityM2Query',
            operationKind: 'query',
            text: null,
          },
        }
      ;(p.hash = 'b096c96dc4f70bd4fd70e4f272a3dc15'), (t.default = p)
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
        b = a('YeIG'),
        v = a('uCxL'),
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
              p && Object(b.a)(t) && n(p).catch(a())
            },
            [t, p, a, n],
          )
          var g = d.isTrue('responsive_web_alt_text_badge_enabled'),
            f = r && Object(w.f)(r, m, t),
            y = f && Object(w.e)(f),
            _ = d.isTrue('responsive_web_reactions_enabled')
          return s.a.createElement(
            v.a,
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
          b = p(function () {
            return a
          }),
          v = b[0],
          w = b[1],
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
                    'NullQueryReference' !== v.kind &&
                    I(v.variables, { fetchPolicy: v.fetchPolicy, networkCacheConfig: v.networkCacheConfig })
                  )
                )
              var t = g.current
              if (c.current) {
                var a,
                  i = (0, n.default)(t)
                try {
                  for (i.s(); !(a = i.n()).done; ) {
                    var r = a.value
                    if (r === v) break
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
            [v, c, I, e],
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
          ['NullQueryReference' === v.kind ? null : v, I, E]
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
        y = a.n(f),
        b = (a('2G9S'), a('lTEL'), a('7x/C'), a('87if'), a('ZUdG'), a('kYxP'), a('ERkP')),
        v = a.n(b),
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
        V = a('21nk'),
        x = a.n(V),
        F = a('bCEw'),
        C = a.n(F),
        S = a('Ud88'),
        A = a.n(S),
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
        })(v.a.Component),
        D = function (e) {
          var t = e.query,
            a = e.queryRef,
            n = e.render,
            i = x()(t, a)
          return n({ fetchStatus: E.a.LOADED, data: i, error: null, retry: I.a })
        },
        O = function (e, t) {
          if (k.canUseDOM)
            return function (a) {
              var n = a.fetchPolicy,
                r = void 0 === n ? 'store-or-network' : n,
                l = a.render,
                o = a.variables,
                s = C()(e),
                c = i()(s, 2),
                u = c[0],
                d = c[1],
                m = Object(T.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                p = L()(o),
                g = i()(p, 1)[0],
                f = v.a.useCallback(
                  function () {
                    d(g, { fetchPolicy: 'network-only' })
                  },
                  [d, g],
                )
              return (
                v.a.useLayoutEffect(
                  function () {
                    d(g, { fetchPolicy: r })
                  },
                  [r, d, g],
                ),
                u
                  ? v.a.createElement(
                      v.a.Suspense,
                      { fallback: v.a.createElement(R, { render: l }) },
                      v.a.createElement(
                        K,
                        { errorHandler: m(t.errorConfig.options || {}), key: u.fetchKey, retry: f },
                        function (t, a) {
                          return t
                            ? l({ fetchStatus: E.a.FAILED, error: t, data: null, retry: a })
                            : v.a.createElement(D, { query: e, queryRef: u, render: l })
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
            var m = v.a.lazy(function () {
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
                      : v.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: a.set(o, e).get.bind(a, o) }
                })
            })
            return v.a.createElement(v.a.Suspense, null, v.a.createElement(m, null))
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
