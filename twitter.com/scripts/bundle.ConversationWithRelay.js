;(window.webpackJsonp = window.webpackJsonp || []).push([
  [52],
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
        return i
      })
      var n = a('i4Oy'),
        r = a('ERkP')
      function i() {
        var e = Object(r.useState)(function () {
            return n.a.get('window')
          }),
          t = e[0],
          a = e[1]
        return (
          Object(r.useEffect)(function () {
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
        r = a('3KVO'),
        i = a('yLYC'),
        l = a('Ud88'),
        o = (a('/2Cm'), a('aQQo').useTrackLoadQueryInRender),
        c = (a('ERkP').useDebugValue, a('K1lQ').__internal),
        s = c.fetchQueryDeduped,
        u = c.fetchQuery
      e.exports = function (e, t, a) {
        o()
        var c,
          d = l(),
          m = t.fetchKey,
          p = t.fetchPolicy,
          f = t.source,
          g = t.variables,
          y = t.networkCacheConfig,
          b = i(e, g, y)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          b.request.node.params.name !== t.name && n(!1),
            (c = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: m,
              fetchObservable: s(d, b.request.identifier, function () {
                return d === t.environment && null != f
                  ? d.executeWithSource({ operation: b, source: f })
                  : d.execute({ operation: b })
              }),
              fetchPolicy: p,
              query: b,
              renderPolicy: null == a ? void 0 : a.UNSTABLE_renderPolicy,
            })
        else {
          var v = u(d, b)
          c = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != f && d === t.environment ? f.ifEmpty(v) : (t.environment, v),
            fetchKey: m,
            fetchPolicy: p,
            query: b,
            renderPolicy: null == a ? void 0 : a.UNSTABLE_renderPolicy,
          }
        }
        return r(c)
      }
    },
    '23An': function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = n.useEffect,
        i = n.useRef
      e.exports = function () {
        var e = i(!0)
        return (
          r(function () {
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
        r = a.n(n),
        i = a('ERkP'),
        l = a.n(i),
        o = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
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
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    '6s7X': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        l = a.n(i),
        o = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
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
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    '8bFt': function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n),
        i = a('3XMw'),
        l = a.n(i),
        o = a('rHpw'),
        c = a('MWbm'),
        s = a('t62R'),
        u = a('/yvb'),
        d = a('OiMc'),
        m = a('wTX1'),
        p = a('6s7X'),
        f = a('RjwM'),
        g = a('7Mjr'),
        y = a('WXWl'),
        b = l.a.affbaf62,
        v = l.a.c388d026,
        h = l.a.i2785008,
        w = l.a.d9687d23,
        E = l.a.ac73eb5a,
        k = l.a.c5a9f921,
        I = function (e) {
          var t = e.label,
            a = e.popover
          return a
            ? r.a.createElement(
                c.a,
                null,
                r.a.createElement(
                  d.a,
                  {
                    preferredVerticalOrientation: 'up',
                    renderContent: function (e) {
                      return r.a.createElement(
                        c.a,
                        { style: T.popover },
                        r.a.createElement(
                          c.a,
                          { style: T.popoverTitle },
                          r.a.createElement(s.b, { size: 'title3', weight: 'heavy' }, t),
                        ),
                        r.a.createElement(c.a, { style: T.popoverText }, a),
                        r.a.createElement(u.a, { onPress: e, type: 'primaryOutlined' }, v),
                      )
                    },
                    withArrow: !0,
                  },
                  r.a.createElement(p.a, {
                    accessibilityLabel: b,
                    accessibilityRole: 'tooltip',
                    style: T.iconInformation,
                  }),
                ),
              )
            : null
        },
        P = function (e) {
          var t = e.label,
            a = e.popover
          return t
            ? r.a.createElement(
                c.a,
                { style: T.labelBar },
                r.a.createElement(s.b, { color: 'gray700', size: 'subtext2', style: T.labelText, weight: 'medium' }, t),
                r.a.createElement(I, { label: t, popover: a }),
              )
            : null
        },
        x = function (e) {
          var t = e.unit
          return t ? r.a.createElement(s.b, { color: 'gray700', style: T.unitText, weight: 'medium' }, t) : null
        },
        _ = function (e) {
          var t,
            a,
            n = e.trendValue
          return void 0 === n
            ? null
            : ((n = Math.round(100 * n) / 100),
              (t = h(n)),
              (a = (function (e) {
                if (e < 0) {
                  var t = h(e)
                  return w({ trendValueNegativePercent: t })
                }
                if (0 === e) return E
                var a = h(e)
                return k({ trendValuePositivePercent: a })
              })(n)),
              n < 0
                ? r.a.createElement(
                    c.a,
                    { accessibilityLabel: a, style: T.trendBar },
                    r.a.createElement(f.a, { style: T.trendIconNeg }),
                    r.a.createElement(
                      s.b,
                      { accessibilityHidden: !0, color: 'red500', size: 'body', weight: 'medium' },
                      t,
                    ),
                  )
                : 0 === n
                ? r.a.createElement(
                    c.a,
                    { accessibilityLabel: a, style: T.trendBar },
                    r.a.createElement(g.a, { style: T.trendIconZero }),
                    r.a.createElement(
                      s.b,
                      { accessibilityHidden: !0, color: 'gray700', size: 'body', weight: 'medium' },
                      t,
                    ),
                  )
                : r.a.createElement(
                    c.a,
                    { accessibilityLabel: a, style: T.trendBar },
                    r.a.createElement(y.a, { style: T.trendIconPos }),
                    r.a.createElement(
                      s.b,
                      { accessibilityHidden: !0, color: 'green500', size: 'body', weight: 'medium' },
                      t,
                    ),
                  ))
        },
        T = o.a.create(function (e) {
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
          i = e.popover,
          l = e.size,
          o = e.subTextList,
          u = e.trendValue,
          d = e.unit,
          p = e.value
        return r.a.createElement(
          c.a,
          { style: T.dataPoint },
          r.a.createElement(P, { label: n, popover: i }),
          r.a.createElement(
            c.a,
            { style: T.valueBar },
            t
              ? r.a.createElement(m.a, { count: a, size: l, weight: 'bold' }, p)
              : r.a.createElement(s.b, { size: l, weight: 'bold' }, p),
            r.a.createElement(x, { unit: d }),
            r.a.createElement(_, { trendValue: u }),
          ),
          o,
        )
      }
    },
    DL4F: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'ConversationAnalyticsScreen', function () {
          return ca
        })
      var n = a('yiKp'),
        r = a.n(n),
        i = a('m3Bd'),
        l = a.n(i),
        o = a('VrFO'),
        c = a.n(o),
        s = a('Y9Ll'),
        u = a.n(s),
        d = a('1Pcy'),
        m = a.n(d),
        p = a('5Yy7'),
        f = a.n(p),
        g = a('2VqO'),
        y = a.n(g),
        b = a('KEM+'),
        v = a.n(b),
        h = (a('2G9S'), a('ERkP')),
        w = a.n(h),
        E = (a('KqXw'), a('WNMA'), a('XOJV')),
        k = a('rxPX'),
        I = a('0KEI'),
        P = a('S3l+'),
        x = 'CONVERSATION_ANALYTICS_SCREEN',
        _ = function (e, t) {
          return t.match.params.statusId
        },
        T = function (e, t) {
          return E.a.selectHydrated(e, _(0, t))
        },
        S = function (e, t) {
          return Object(P.r)(e, _(0, t))
        },
        L = function (e, t) {
          return E.a.selectFetchStatus(e, _(0, t))
        },
        C = function (e, t) {
          return Object(P.q)(e, _(0, t))
        },
        V = Object(k.a)()
          .propsFromState(function () {
            return {
              fetchStatus: L,
              quickPromoteEligibilityFetchStatus: S,
              statusId: _,
              tweet: T,
              quickPromoteEligibility: C,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(x),
              fetchTweetIfNeeded: E.a.fetchOneIfNeeded,
              fetchQuickPromoteEligibilityIfNeeded: P.k,
            }
          })
          .withAnalytics({ page: 'tweet', section: 'analytics', component: 'RwebConversationAnalytics' }),
        R = a('v//M'),
        F = a('W5XZ'),
        B = a('jHSc'),
        A = a('KUGV'),
        D = a('3XMw'),
        O = a.n(D),
        K = a('b5s6')
      a('0zG9')
      function j(e) {
        var t = Date.now() - e
        return { action: 'view', data: { event_info: JSON.stringify({ duration_ms: t }) } }
      }
      function z(e, t) {
        return { element: t, action: 'click', data: { profile_id: e } }
      }
      function H(e, t, a) {
        return {
          element: 'TweetActivityQueryRenderer',
          action: 'error',
          data: { event_info: e, items: [{ item_type: 0, id: a }], profile_id: t },
        }
      }
      var N = a('Rp9C'),
        W = (a('jQ3i'), a('hBpG'), a('7x/C'), a('LW0h'), a('z84I'), a('t62R')),
        M = a('8bFt'),
        Q = O.a.ja781451,
        q = O.a.cfa1a7b8
      function G(e) {
        return e || 0
      }
      function U(e, t) {
        var a = G(t)
        return 0 === a ? 0 : G(e) / a
      }
      function X(e) {
        var t = G(e)
        return t >= 1e5 ? q(t) : Q(t)
      }
      function J(e) {
        return {
          count: X(null == e ? void 0 : e.value.total),
          promotionPercentage: U(null == e ? void 0 : e.value.promoted, null == e ? void 0 : e.value.total),
        }
      }
      var Y = function (e) {
          var t,
            a = e.label,
            n = e.metric,
            r = e.popover,
            i = e.showPromotionPercentages,
            l = U(null == n ? void 0 : n.value.promoted, null == n ? void 0 : n.value.total),
            o = [i && Ee(l, !0)],
            c = w.a.createElement(W.b, { color: 'gray700', size: 'body', weight: 'normal' }, r)
          return w.a.createElement(M.a, {
            animated: !0,
            count: null !== (t = null == n ? void 0 : n.value.total) && void 0 !== t ? t : 0,
            label: a,
            popover: c,
            size: 'title1',
            subTextList: o,
            value: X(null == n ? void 0 : n.value.total),
          })
        },
        Z = a('MWbm'),
        $ = a('rHpw'),
        ee = function (e) {
          var t,
            a = e.label,
            n = e.metric,
            r = e.popover,
            i = e.showPromotionPercentages,
            l = U(null == n ? void 0 : n.value.promoted, null == n ? void 0 : n.value.total),
            o = [i && Ee(l, !1)],
            c = w.a.createElement(W.b, { color: 'gray700', size: 'body', weight: 'normal' }, r)
          return w.a.createElement(
            Z.a,
            { style: te.dataPoint },
            w.a.createElement(M.a, {
              animated: !0,
              count: null !== (t = null == n ? void 0 : n.value.total) && void 0 !== t ? t : 0,
              label: a,
              popover: c,
              size: 'title3',
              subTextList: o,
              value: X(null == n ? void 0 : n.value.total),
            }),
          )
        },
        te = $.a.create(function (e) {
          return { dataPoint: { flexGrow: 1 } }
        }),
        ae = a('7N4s'),
        ne = a('0ig/'),
        re = O.a.e5fe61ef,
        ie = O.a.f6162a32,
        le = O.a.dbe9353d,
        oe = O.a.e044b63f,
        ce = O.a.d8abdaa4,
        se = O.a.de0de3a7,
        ue = O.a.aeee0181,
        de = O.a.ccab7c76,
        me = O.a.b1b4d57d,
        pe = O.a.i680442e,
        fe = O.a.d5f1e553,
        ge = O.a.d24b7811,
        ye = O.a.b40d33e4,
        be = O.a.ee547382,
        ve = O.a.i2785008,
        he = O.a.g33fd6b0
      O.a.b71059c3
      function we(e) {
        var t,
          a,
          n = e.detailExpands,
          r = e.engagements,
          i = e.follows,
          l = e.impressions,
          o = e.linkClicks,
          c = e.mediaViews,
          s = e.profileVisits,
          u = e.showPromotionPercentages,
          d = e.tweet,
          m = w.a.useContext(ae.b).isModal,
          p = Object(ne.a)().width < $.a.theme.breakpoints.xSmall,
          f = !(null == d || null === (t = d.entities) || void 0 === t || !t.urls) && d.entities.urls.length > 0,
          g =
            !(null == d || null === (a = d.extended_entities) || void 0 === a || !a.media) &&
            d.extended_entities.media.filter(function (e) {
              return 'video' === e.type
            }).length > 0,
          y = [
            w.a.createElement(ee, { key: le, label: le, metric: r, popover: oe, showPromotionPercentages: u }),
            w.a.createElement(ee, { key: ye, label: ye, metric: n, popover: be, showPromotionPercentages: u }),
            w.a.createElement(ee, { key: ce, label: ce, metric: i, popover: se, showPromotionPercentages: u }),
            w.a.createElement(ee, { key: ue, label: ue, metric: s, popover: de, showPromotionPercentages: u }),
            g
              ? w.a.createElement(ee, { key: me, label: me, metric: c, popover: pe, showPromotionPercentages: u })
              : null,
            f
              ? w.a.createElement(ee, { key: fe, label: fe, metric: o, popover: ge, showPromotionPercentages: u })
              : null,
          ].filter(function (e) {
            return e
          })
        return w.a.createElement(
          Z.a,
          {
            style: [
              ke.grid,
              { gridTemplateColumns: m ? ' 1fr 2fr' : '1fr' },
              { gridGap: p ? $.a.theme.spaces.space24 : $.a.theme.spaces.space40 },
              { marginTop: p ? $.a.theme.spaces.space24 : $.a.theme.spaces.space40 },
              { marginHorizontal: p ? $.a.theme.spaces.space16 : $.a.theme.spaces.space32 },
            ],
          },
          w.a.createElement(Y, { label: re, metric: l, popover: ie, showPromotionPercentages: u }),
          w.a.createElement(
            Z.a,
            { style: [ke.minorDataPointsGrid, { gridGap: p ? $.a.theme.spaces.space24 : $.a.theme.spaces.space40 }] },
            y.map(function (e, t) {
              return w.a.createElement(Z.a, { key: 'minorDataPoint'.concat(t) }, e)
            }),
          ),
        )
      }
      function Ee(e, t) {
        var a = ve(e),
          n = he({ percentage: a }),
          r = t ? n : a
        return w.a.createElement(
          Z.a,
          { accessibilityLabel: n, key: r, style: [ke.subTextListItem, ke.promotionLabel] },
          w.a.createElement(W.b, { accessibilityHidden: !0, color: 'primary900' }, r),
        )
      }
      var ke = $.a.create(function (e) {
          return {
            grid: { display: 'grid', marginBottom: e.spaces.space40 },
            minorDataPointsGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' },
            subTextListItem: { flexDirection: 'row', alignItems: 'center', marginBottom: e.spaces.space2 },
            promotionLabel: {
              backgroundColor: $.a.theme.colors.primary50,
              borderRadius: $.a.theme.borderRadii.infinite,
              paddingVertical: $.a.theme.spaces.space4,
              paddingHorizontal: $.a.theme.spacesPx.space4 + $.a.theme.spacesPx.space2,
            },
          }
        }),
        Ie = a('UIzd'),
        Pe = a.n(Ie),
        xe = (a('uFXj'), a('LbZ7')),
        _e = a('iEUn'),
        Te = a('jlPL'),
        Se = a('dFWS'),
        Le = O.a.ib1f8491,
        Ce = O.a.fbdb85f4,
        Ve = O.a.d0eeb126,
        Re = O.a.i2785008,
        Fe = O.a.g33fd6b0
      function Be(e) {
        var t = e.percentageValue,
          a = Re(t),
          n = Fe({ percentage: a })
        return w.a.createElement(
          Z.a,
          { accessibilityLabel: n, style: De.percentageView },
          w.a.createElement(W.b, { accessibilityHidden: !0, color: 'primary900' }, a),
        )
      }
      function Ae(e) {
        var t = e.likes,
          a = e.replies,
          n = e.retweets,
          r = e.showPromotionPercentages,
          i = J(t),
          l = i.count,
          o = i.promotionPercentage,
          c = J(n),
          s = c.count,
          u = c.promotionPercentage,
          d = J(a),
          m = d.count,
          p = d.promotionPercentage
        return w.a.createElement(
          Z.a,
          { style: De.actionsBar },
          w.a.createElement(
            xe.a,
            null,
            w.a.createElement(
              Z.a,
              { accessibilityLabel: Le({ likeCount: l }), style: De.column },
              w.a.createElement(_e.a, { style: De.actionIconsColor }),
              w.a.createElement(W.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, l),
              r ? w.a.createElement(Be, { percentageValue: o }) : null,
            ),
            w.a.createElement(
              Z.a,
              { accessibilityLabel: Ce({ retweetCount: s }), style: De.column },
              w.a.createElement(Te.a, { style: De.actionIconsColor }),
              w.a.createElement(W.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, s),
              r ? w.a.createElement(Be, { percentageValue: u }) : null,
            ),
            w.a.createElement(
              Z.a,
              { accessibilityLabel: Ve({ replyCount: m }), style: De.column },
              w.a.createElement(Se.a, { style: De.actionIconsColor }),
              w.a.createElement(W.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, m),
              r ? w.a.createElement(Be, { percentageValue: p }) : null,
            ),
          ),
        )
      }
      var De = $.a.create(function (e) {
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
              backgroundColor: $.a.theme.colors.primary50,
              borderRadius: $.a.theme.borderRadii.infinite,
              color: $.a.theme.colors.primary,
              marginTop: $.a.theme.spaces.space4,
              paddingVertical: $.a.theme.spaces.space4,
              paddingHorizontal: $.a.theme.spacesPx.space4 + $.a.theme.spacesPx.space2,
            },
            promotionIcon: { fontSize: e.spaces.space4, color: e.colors.primary, marginRight: e.spaces.space4 },
          }
        }),
        Oe = a('97Jx'),
        Ke = a.n(Oe),
        je = a('v6aA'),
        ze = a('gmpV'),
        He = a('876e'),
        Ne = a('JYMr'),
        We = a('h0NW'),
        Me = O.a.db6efeb8,
        Qe = O.a.j6daea85,
        qe = O.a.jade381b,
        Ge = O.a.d725a288,
        Ue = O.a.hf9ed10f,
        Xe = O.a.f42a198d
      function Je(e) {
        var t = e.currency,
          a = e.endTime,
          n = e.isPaused,
          r = e.remainingBudget,
          i = e.startTime,
          l = e.totalBudget,
          o = w.a.useContext(je.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled'),
          c = a ? new Date(a) : null,
          s = i ? new Date(i) : null,
          u = !!c && c > new Date(Date.now()),
          d = c && s ? Object(ze.a)(new Date(s), new Date(c)) : 0,
          m = a && u ? He.a.getTimeLeftLabel(a) : null,
          p = c ? Ge(c) : '',
          f = c ? qe(c) : '',
          g = Ue({ endTimeString: p, endDateString: f }),
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
              var r = n((e - t) / 1e6),
                i = n(e / 1e6)
              return Xe({ spentBudget: r, totalBudget: i })
            } catch (l) {
              return null
            }
          })(l, r, t)
        return w.a.createElement(
          Z.a,
          { style: Ze.promotionInfoView },
          w.a.createElement(
            Z.a,
            { style: Ze.infoItemView },
            w.a.createElement(Ye, {
              budgetLabel: o ? y : null,
              endTimeLabel: g,
              isPaused: n,
              percentagePassed: d,
              timeLeftLabel: m,
            }),
          ),
        )
      }
      function Ye(e) {
        var t = e.budgetLabel,
          a = e.endTimeLabel,
          n = e.isPaused,
          r = e.percentagePassed,
          i = e.timeLeftLabel,
          l = {
            items: [
              {
                label: w.a.createElement(W.b, { size: 'headline2', weight: 'heavy' }, n ? Qe : Me),
                description: i
                  ? w.a.createElement(
                      w.a.Fragment,
                      null,
                      w.a.createElement(
                        Z.a,
                        { style: Ze.progressBarContainer },
                        w.a.createElement(Ne.a, {
                          colorValue: n ? $.a.theme.colors.gray400 : $.a.theme.colors.primary,
                          progress: r,
                          style: Ze.progressBar,
                        }),
                      ),
                      w.a.createElement(
                        Z.a,
                        { style: Ze.subtexts },
                        t && w.a.createElement(W.b, { color: 'gray700', hoverLabel: { label: null != t ? t : '' } }, t),
                        w.a.createElement(W.b, { color: 'gray700', hoverLabel: { label: a } }, i),
                      ),
                    )
                  : null,
              },
            ],
          }
        return w.a.createElement(We.a, Ke()({}, l, { containerStyle: Ze.infoItem }))
      }
      var Ze = $.a.create(function (e) {
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
        $e = a('ddV6'),
        et = a.n($e),
        tt = (a('hBvt'), a('/yvb')),
        at = O.a.d228a9a0,
        nt = O.a.c174e46e
      function rt(e) {
        var t,
          a = e.buttonString,
          n = e.buttonTestID,
          r = e.infoItemGroup,
          i = e.link,
          l = e.onButtonPress,
          o = w.a.useContext(je.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled'),
          c = null !== (t = e.expandButtonText) && void 0 !== t ? t : at,
          s = Object(ne.a)(),
          u = !w.a.useContext(ae.b).isModal,
          d = s.width <= $.a.theme.breakpoints.xSmall,
          m = w.a.useState(!1),
          p = et()(m, 2),
          f = p[0],
          g = p[1],
          y = f ? nt : c,
          b = [it.promotionInfoView, u && it.promotionInfoViewNarrow, d && it.promotionInfoViewXSmall]
        return o
          ? w.a.createElement(
              Z.a,
              { style: b },
              w.a.createElement(
                Z.a,
                {
                  style: u ? (f ? it.promotionInfoTextVisible : it.promotionInfoTextHidden) : it.promotionInfoTextWide,
                },
                r,
              ),
              w.a.createElement(
                Z.a,
                { style: u ? it.buttonViewNarrow : it.buttonViewWide },
                w.a.createElement(tt.a, { link: i, onPress: l, size: 'large', testID: n, type: 'primaryFilled' }, a),
              ),
              u &&
                w.a.createElement(
                  tt.a,
                  {
                    onPress: function () {
                      g(u && !f)
                    },
                    size: 'large',
                    type: 'primaryText',
                  },
                  y,
                ),
            )
          : w.a.createElement(
              Z.a,
              { style: b },
              w.a.createElement(Z.a, { style: [it.infoItemView, u && it.infoItemViewNarrow] }, r),
              w.a.createElement(
                Z.a,
                { style: u ? [it.buttonViewNarrow, { flexGrow: 0 }] : it.buttonViewWide },
                w.a.createElement(tt.a, { link: i, onPress: l, size: 'large', testID: n, type: 'primaryFilled' }, a),
              ),
            )
      }
      var it = $.a.create(function (e) {
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
        lt = a('Irs7'),
        ot = a('yE5w'),
        ct = O.a.a63a89fe,
        st = O.a.j401e4bc,
        ut = O.a.e8adeec8,
        dt = O.a.ja781451
      function mt(e) {
        var t = Object(lt.b)(),
          a = dt(G(e.impressions)),
          n = dt(G(e.engagements)),
          r = st({ impressions: a, engagements: n }),
          i = { items: [{ label: w.a.createElement(W.b, { size: 'headline2', weight: 'heavy' }, ct), description: r }] }
        var l = w.a.createElement(We.a, Ke()({}, i, { containerStyle: pt.infoItem })),
          o = null !== Object(A.a)(),
          c = ''
            .concat(e.tweetPermalink, '/')
            .concat(o ? ot.a.Webview : ot.a.Rweb, '/')
            .concat(ot.c.Intro)
        return w.a.createElement(rt, {
          buttonString: ut,
          infoItemGroup: l,
          link: c,
          onButtonPress: function () {
            t.scribe(z(e.userId, 'PromoteAgainButton'))
          },
        })
      }
      var pt = $.a.create(function (e) {
          return {
            infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' },
            decorationContainer: { height: e.spaces.space24, width: e.spaces.space24, marginRight: e.spaces.space24 },
            icon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.green500 },
          }
        }),
        ft = O.a.dcfb0332,
        gt = O.a.g6bf2fda,
        yt = O.a.df2c469a,
        bt = O.a.ja781451
      function vt(e) {
        var t = Object(lt.b)(),
          a = null !== Object(A.a)(),
          n = bt(G(e.impressions)),
          r = gt({ impressions: n })
        var i = {
            items: [{ label: w.a.createElement(W.b, { size: 'headline1', weight: 'heavy' }, ft), description: r }],
          },
          l = w.a.createElement(We.a, Ke()({}, i, { containerStyle: ht.infoItem }))
        return w.a.createElement(rt, {
          buttonString: yt,
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
      var ht = $.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        wt = O.a.dcfb0332,
        Et = O.a.f96eec3c,
        kt = O.a.e9891f7c,
        It = O.a.i859a9d3
      function Pt(e) {
        var t = Object(lt.b)(),
          a = {
            items: [{ label: w.a.createElement(W.b, { size: 'headline1', weight: 'heavy' }, wt), description: Et }],
          }
        var n = w.a.createElement(We.a, Ke()({}, a, { containerStyle: xt.infoItem })),
          r = null !== Object(A.a)(),
          i = ''
            .concat(e.tweetPermalink, '/')
            .concat(r ? ot.a.Webview : ot.a.Rweb, '/')
            .concat(ot.c.Intro)
        return w.a.createElement(rt, {
          buttonString: kt,
          expandButtonText: It,
          infoItemGroup: n,
          link: i,
          onButtonPress: function () {
            t.scribe(z(e.userId, 'NotStartedPromotionButton'))
          },
        })
      }
      var xt = $.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        _t = 'switchToProfessionalButton',
        Tt = a('5emT'),
        St = O.a.jede3014,
        Lt = O.a.i094e43b,
        Ct = O.a.f638d3e0
      function Vt(e) {
        var t = Object(lt.b)(),
          a = {
            items: [
              {
                label: w.a.createElement(W.b, { size: 'headline2', weight: 'heavy' }, St),
                description: Lt,
                decoration: w.a.createElement(Tt.a, { style: [Ft.icon, Ft.decorationContainer] }),
              },
            ],
          }
        return w.a.createElement(
          Z.a,
          { style: Ft.promotionInfoView },
          w.a.createElement(
            Z.a,
            { style: Ft.infoItemView },
            w.a.createElement(We.a, Ke()({}, a, { containerStyle: Ft.infoItem })),
          ),
          w.a.createElement(
            Z.a,
            { style: Ft.buttonView },
            w.a.createElement(
              W.b,
              {
                color: 'primary',
                link: 'https://twitter.com/adspolicy',
                onPress: function () {
                  t.scribe(z(e.userId, 'ReviewPolicyButton'))
                },
              },
              Ct,
            ),
          ),
        )
      }
      var Rt,
        Ft = $.a.create(function (e) {
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
        Bt = (a('enFi'), a('jAXQ')),
        At = a.n(Bt),
        Dt =
          (a('yH/f'),
          Object.freeze({
            notProfessional: 'not_professional',
            notStarted: 'not_started',
            underReview: 'under_review',
            running: 'running',
            completed: 'completed',
            paused: 'paused',
          })),
        Ot = void 0 !== Rt ? Rt : (Rt = a('+s2u'))
      function Kt(e) {
        var t,
          a,
          n,
          r,
          i,
          l,
          o,
          c,
          s,
          u,
          d = e.engagements,
          m = e.impressions,
          p = e.promotionInfoState,
          f = e.tweet,
          g = At()(Ot, e.campaignInfo)
        switch (p) {
          case Dt.notProfessional:
            return w.a.createElement(vt, {
              buttonTestID: _t,
              impressions: null == m ? void 0 : m.value.total,
              tweet_id: f.id_str,
              userId: e.userId,
            })
          case Dt.notStarted:
            return w.a.createElement(Pt, { tweetPermalink: f.permalink, userId: e.userId })
          case Dt.underReview:
            return w.a.createElement(Vt, { userId: e.userId })
          case Dt.running:
            return w.a.createElement(Je, {
              currency: null == g || null === (t = g.campaign) || void 0 === t ? void 0 : t.currency,
              endTime: null == g || null === (a = g.campaign) || void 0 === a ? void 0 : a.end_time,
              isPaused: !1,
              remainingBudget: null == g || null === (n = g.campaign) || void 0 === n ? void 0 : n.remaining_budget,
              startTime: null == g || null === (r = g.campaign) || void 0 === r ? void 0 : r.start_time,
              totalBudget: null == g || null === (i = g.campaign) || void 0 === i ? void 0 : i.total_budget,
            })
          case Dt.completed:
            return w.a.createElement(mt, {
              engagements: null == d ? void 0 : d.value.promoted,
              impressions: null == m ? void 0 : m.value.promoted,
              tweetPermalink: f.permalink,
              userId: e.userId,
            })
          case Dt.paused:
            return w.a.createElement(Je, {
              currency: null == g || null === (l = g.campaign) || void 0 === l ? void 0 : l.currency,
              endTime: null == g || null === (o = g.campaign) || void 0 === o ? void 0 : o.end_time,
              isPaused: !0,
              remainingBudget: null == g || null === (c = g.campaign) || void 0 === c ? void 0 : c.remaining_budget,
              startTime: null == g || null === (s = g.campaign) || void 0 === s ? void 0 : s.start_time,
              totalBudget: null == g || null === (u = g.campaign) || void 0 === u ? void 0 : u.total_budget,
            })
          default:
            return null
        }
      }
      var jt,
        zt,
        Ht,
        Nt = a('Ud88'),
        Wt = a.n(Nt),
        Mt = a('n0Rl'),
        Qt = a('Hsf0'),
        qt = a.n(Qt),
        Gt = a('LLQb'),
        Ut = O.a.deaf5b15,
        Xt = void 0 !== jt ? jt : (jt = a('2O3u')),
        Jt = (void 0 !== zt || (zt = a('njVe')), void 0 !== Ht ? Ht : (Ht = a('wfDE'))),
        Yt = Object(Mt.b)(Jt, { errorConfig: { context: x } })
      function Zt(e) {
        var t = e.hidePromotionInfo,
          a = e.quickPromoteEligibility,
          n = e.tweet,
          r = e.userId,
          i = Object(lt.b)(),
          l = Wt()(),
          o = Object(I.useCreateLocalApiErrorHandler)(x)
        return (
          w.a.useEffect(
            function () {
              var e = o({ showToast: !1 })
              Pe()(l, Jt, { restId: n.id_str }).subscribe({ error: e })
            },
            [n, l, o],
          ),
          w.a.createElement(Yt, {
            render: function (e) {
              if (e.fetchStatus === Mt.a.FAILED) {
                var l = e.retry
                return (
                  i.scribe(H('NetworkError', r, n.id_str)),
                  w.a.createElement(Gt.a, { onRequestRetry: l, retryMessage: Ut })
                )
              }
              if (e.fetchStatus === Mt.a.LOADED) {
                var o,
                  c,
                  s =
                    null === (o = e.data) || void 0 === o || null === (c = o.tweet_result_by_rest_id) || void 0 === c
                      ? void 0
                      : c.result
                if ('Tweet' === (null == s ? void 0 : s.__typename)) {
                  var u = qt()(Xt, s.analytics)
                  ;(null != u && u.metrics.length) || i.scribe(H('EmptyMetricsFromBackend', r, n.id_str))
                  var d = ea(s.analytics),
                    m = d.detailExpands,
                    p = d.engagements,
                    f = d.follows,
                    g = d.impressions,
                    y = d.likes,
                    b = d.linkClicks,
                    v = d.mediaViews,
                    h = d.profileVisits,
                    E = d.replies,
                    k = d.retweets,
                    I = (function (e) {
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
                    P = ['running', 'completed', 'paused'].includes(I)
                  return w.a.createElement(
                    Z.a,
                    { style: ta.tweetActivity },
                    w.a.createElement(
                      Z.a,
                      { style: ta.metricsView },
                      w.a.createElement(Ae, { likes: y, replies: E, retweets: k, showPromotionPercentages: P }),
                      w.a.createElement(we, {
                        detailExpands: m,
                        engagements: p,
                        follows: f,
                        impressions: g,
                        linkClicks: b,
                        mediaViews: v,
                        profileVisits: h,
                        showPromotionPercentages: P,
                        tweet: n,
                      }),
                    ),
                    t || !I
                      ? null
                      : w.a.createElement(Kt, {
                          campaignInfo: s.quick_promotion,
                          engagements: p,
                          impressions: g,
                          promotionInfoState: I,
                          tweet: n,
                          userId: r,
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
      var $t = function (e, t) {
          return e
            ? e.metrics.find(function (e) {
                return e.key === t
              })
            : null
        },
        ea = function (e) {
          var t = qt()(Xt, e)
          return {
            detailExpands: $t(t, 'DetailExpands'),
            engagements: $t(t, 'Engagements'),
            follows: $t(t, 'Follows'),
            impressions: $t(t, 'Impressions'),
            likes: $t(t, 'Favorites'),
            linkClicks: $t(t, 'UrlClicks'),
            mediaViews: $t(t, 'MediaViews'),
            profileVisits: $t(t, 'UserProfileClicks'),
            replies: $t(t, 'Replies'),
            retweets: $t(t, 'Retweets'),
          }
        }
      var ta = $.a.create(function (e) {
          return { tweetActivity: { flex: 1 }, metricsView: { flexGrow: 1 } }
        }),
        aa = a('E0cF'),
        na = a('q9Zt'),
        ra = ['data'],
        ia = O.a.g9079b93,
        la = O.a.a57daeb1,
        oa = O.a.deaf5b15,
        ca = (function (e) {
          f()(a, e)
          var t = y()(a)
          function a() {
            var e
            c()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(m()(e), '_handleFetchTweet', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler
                ;(0, t.fetchTweetIfNeeded)(t.statusId).catch(a(F.a))
              }),
              v()(m()(e), '_handleFetchQuickPromoteEligibility', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler
                return (0, t.fetchQuickPromoteEligibilityIfNeeded)({ statusId: t.statusId }).catch(a())
              }),
              v()(m()(e), '_render', function () {
                var t = e.props,
                  a = t.quickPromoteEligibility,
                  n = t.tweet,
                  r = (n && aa.a.getOriginalTweet(n)) || void 0
                return !r || (r && r.user.id_str !== e.context.loggedInUserId)
                  ? w.a.createElement(na.a, { onRetry: null, title: ia })
                  : (e._scribeEligibility(),
                    w.a.createElement(
                      Z.a,
                      { style: sa.topLevelView },
                      w.a.createElement(
                        Z.a,
                        { style: sa.quoteTweet },
                        w.a.createElement(K.a, {
                          isCondensed: !0,
                          style: { cursor: 'default' },
                          tweetId: r.id_str,
                          withLink: !1,
                          withUserHoverCard: !1,
                        }),
                      ),
                      w.a.createElement(Zt, {
                        hidePromotionInfo: !1,
                        quickPromoteEligibility: a,
                        tweet: r,
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
                  i = (n && aa.a.getOriginalTweet(n)) || void 0,
                  o = j(e._dwellStartTime),
                  c = o.data,
                  s = l()(o, ra)
                a.scribe(r()(r()({}, s), {}, { data: r()(r()({}, c), {}, { items: i ? [N.a.getTweetItem(i)] : [] }) }))
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
                    r = (n && aa.a.getOriginalTweet(n)) || void 0,
                    i = null !== Object(A.a)()
                  return w.a.createElement(
                    B.b,
                    {
                      appBarRef: this._setAppBarRef,
                      backLocation: r ? r.permalink : '/',
                      hideBackButton: i,
                      history: a,
                      onBackClick: this._handleGoBack,
                      renderHeader: function (e) {
                        return i ? null : e
                      },
                      title: i ? null : la,
                    },
                    w.a.createElement(R.a, { fetchStatus: t, render: this._render, retryMessage: oa }),
                  )
                },
              },
            ]),
            a
          )
        })(w.a.PureComponent)
      v()(ca, 'contextType', je.a)
      var sa = $.a.create(function (e) {
          return { topLevelView: { flex: 1 }, quoteTweet: { margin: e.spaces.space16, marginBottom: e.spaces.space12 } }
        }),
        ua = V(ca)
      t.default = ua
    },
    RjwM: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        l = a.n(i),
        o = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
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
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    WXWl: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        l = a.n(i),
        o = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
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
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    b5s6: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        i = a('m3Bd'),
        l = a.n(i),
        o = a('ERkP'),
        c = a.n(o),
        s = a('v6aA'),
        u = a('XOJV'),
        d = a('eSoz'),
        m = a('rxPX'),
        p = a('0KEI'),
        f = function (e, t) {
          return t.tweetId
        },
        g = function (e, t) {
          var a = t.tweetId,
            n = a && u.a.select(e, a)
          return n ? Object(d.g)(e, n) : void 0
        },
        y = Object(m.a)()
          .propsFromState(function () {
            return { community: g, hydratedTweet: u.a.createHydratedTweetSelector(f) }
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
        h = a('x5Pi'),
        w = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        E = y(function (e) {
          var t = e.community,
            a = e.createLocalApiErrorHandler,
            n = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            o = (e.tweetId, l()(e, w)),
            u = c.a.useContext(s.a),
            d = u.featureSwitches,
            m = u.loggedInUserId,
            p = null == i ? void 0 : i.community_id_str
          c.a.useEffect(
            function () {
              p && Object(b.a)(t) && n(p).catch(a())
            },
            [t, p, a, n],
          )
          var f = d.isTrue('responsive_web_alt_text_badge_enabled'),
            g = i && Object(h.f)(i, m, t),
            y = g && Object(h.e)(g),
            E = d.isTrue('responsive_web_reactions_enabled')
          return c.a.createElement(
            v.a,
            r()({}, o, {
              loggedInUserId: m,
              shouldShowAltLabelAlways: f,
              socialContextProps: y,
              tweet: i,
              withReactions: E,
            }),
          )
        })
      t.a = E
    },
    bCEw: function (e, t, a) {
      'use strict'
      var n = a('IGGJ')(a('K1iM')),
        r = a('23An'),
        i = a('Ud88'),
        l = a('aQQo'),
        o = l.loadQuery,
        c = l.useTrackLoadQueryInRender,
        s = a('ERkP'),
        u = s.useCallback,
        d = s.useEffect,
        m = s.useRef,
        p = s.useState,
        f = a('K1lQ').getRequest,
        g = { kind: 'NullQueryReference' }
      function y(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== f(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var a = null != t ? t : g,
          l = i()
        c()
        var s = r(),
          f = m(new Set([a])),
          b = p(function () {
            return a
          }),
          v = b[0],
          h = b[1],
          w = p(function () {
            return a
          }),
          E = w[0],
          k = w[1]
        a !== E && (f.current.add(a), k(a), h(a))
        var I = u(
            function () {
              s.current && (f.current.add(g), h(g))
            },
            [s],
          ),
          P = u(
            function (t, a) {
              var n =
                null != a && a.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: a.fetchPolicy,
                      networkCacheConfig: a.networkCacheConfig,
                      __nameForWarning: a.__nameForWarning,
                    }
                  : a
              if (s.current) {
                var r,
                  i = o(null !== (r = null == a ? void 0 : a.__environment) && void 0 !== r ? r : l, e, t, n)
                f.current.add(i), h(i)
              }
            },
            [l, e, h, s],
          ),
          x = m(!1)
        return (
          d(function () {
            return function () {
              x.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === x.current)
                return (
                  (x.current = !1),
                  void (
                    'NullQueryReference' !== v.kind &&
                    P(v.variables, { fetchPolicy: v.fetchPolicy, networkCacheConfig: v.networkCacheConfig })
                  )
                )
              var t = f.current
              if (s.current) {
                var a,
                  r = (0, n.default)(t)
                try {
                  for (r.s(); !(a = r.n()).done; ) {
                    var i = a.value
                    if (i === v) break
                    t.delete(i),
                      'NullQueryReference' !== i.kind &&
                        (y(e) ? i.dispose && i.dispose() : i.releaseQuery && i.releaseQuery())
                  }
                } catch (l) {
                  r.e(l)
                } finally {
                  r.f()
                }
              }
            },
            [v, s, P, e],
          ),
          d(
            function () {
              return function () {
                var t,
                  a = (0, n.default)(f.current)
                try {
                  for (a.s(); !(t = a.n()).done; ) {
                    var r = t.value
                    'NullQueryReference' !== r.kind &&
                      (y(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
                  }
                } catch (i) {
                  a.e(i)
                } finally {
                  a.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === v.kind ? null : v, P, I]
        )
      }
    },
    dFWS: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        l = a.n(i),
        o = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
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
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    n0Rl: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return O
      })
      var n = a('ddV6'),
        r = a.n(n),
        i = a('VrFO'),
        l = a.n(i),
        o = a('Y9Ll'),
        c = a.n(o),
        s = a('1Pcy'),
        u = a.n(s),
        d = a('5Yy7'),
        m = a.n(d),
        p = a('2VqO'),
        f = a.n(p),
        g = a('KEM+'),
        y = a.n(g),
        b = (a('2G9S'), a('lTEL'), a('7x/C'), a('87if'), a('ZUdG'), a('kYxP'), a('ERkP')),
        v = a.n(b),
        h = a('pXBW'),
        w = a('6/RC'),
        E = a('UIzd'),
        k = a.n(E),
        I = a('kGix')
      a.d(t, 'a', function () {
        return I.a
      })
      var P = a('fs1G'),
        x = a('0KEI'),
        _ = a('lU4h'),
        T = a.n(_),
        S = a('21nk'),
        L = a.n(S),
        C = a('bCEw'),
        V = a.n(C),
        R = a('Ud88'),
        F = a.n(R),
        B = function (e) {
          return (0, e.render)({ fetchStatus: I.a.LOADING, data: null, error: null, retry: P.a })
        },
        A = (function (e) {
          m()(a, e)
          var t = f()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (e = t.call.apply(t, [this].concat(r))), y()(u()(e), 'state', { error: null }), e
          }
          return (
            c()(
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
        })(v.a.Component),
        D = function (e) {
          var t = e.query,
            a = e.queryRef,
            n = e.render,
            r = L()(t, a)
          return n({ fetchStatus: I.a.LOADED, data: r, error: null, retry: P.a })
        },
        O = function (e, t) {
          if (w.canUseDOM)
            return function (a) {
              var n = a.fetchPolicy,
                i = void 0 === n ? 'store-or-network' : n,
                l = a.render,
                o = a.variables,
                c = V()(e),
                s = r()(c, 2),
                u = s[0],
                d = s[1],
                m = Object(x.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                p = T()(o),
                f = r()(p, 1)[0],
                g = v.a.useCallback(
                  function () {
                    d(f, { fetchPolicy: 'network-only' })
                  },
                  [d, f],
                )
              return (
                v.a.useLayoutEffect(
                  function () {
                    d(f, { fetchPolicy: i })
                  },
                  [i, d, f],
                ),
                u
                  ? v.a.createElement(
                      v.a.Suspense,
                      { fallback: v.a.createElement(B, { render: l }) },
                      v.a.createElement(
                        A,
                        { errorHandler: m(t.errorConfig.options || {}), key: u.fetchKey, retry: g },
                        function (t, a) {
                          return t
                            ? l({ fetchStatus: I.a.FAILED, error: t, data: null, retry: a })
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
            var i = n.render,
              l = n.variables,
              o = F()(),
              c = Object(x.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              s = T()(l),
              u = r()(s, 1)[0],
              d = a.get(o)
            if (d) return d
            var m = v.a.lazy(function () {
              return k()(o, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return i({ fetchStatus: I.a.LOADED, data: e, error: null, retry: P.a })
                  },
                  function (e) {
                    return e instanceof h.a
                      ? (c(t.errorConfig.options || {})(e),
                        i({ fetchStatus: I.a.FAILED, data: null, error: e, retry: P.a }))
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
    wfDE: function (e, t, a) {
      'use strict'
      a.r(t)
      var n,
        r,
        i,
        l,
        o,
        c,
        s,
        u = {
          fragment: {
            argumentDefinitions: (n = [{ defaultValue: null, kind: 'LocalArgument', name: 'restId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'TweetActivityQuery',
            selections: [
              {
                alias: null,
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'restId' },
                  { kind: 'Literal', name: 's', value: 46 },
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
                      (i = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                                      (c = {
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
                      i,
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
                                  c,
                                  (s = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
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
                              s,
                            ],
                            storageKey: null,
                          },
                          s,
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
