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
            ],
            storageKey: null,
          },
        ],
        type: 'Ad',
        abstractKey: null,
        hash: 'd2cabdfedee121dcf0ad150e773ded66',
      }
      t.default = n
    },
    '21nk': function (e, t, a) {
      'use strict'
      var n = a('I9iR'),
        r = a('3KVO'),
        i = a('yLYC'),
        o = a('Ud88'),
        l = (a('/2Cm'), a('aQQo').useTrackLoadQueryInRender),
        s = (a('ERkP').useDebugValue, a('K1lQ').__internal),
        c = s.fetchQueryDeduped,
        u = s.fetchQuery
      e.exports = function (e, t, a) {
        l()
        var s,
          d = o(),
          m = t.fetchKey,
          p = t.fetchPolicy,
          f = t.source,
          g = t.variables,
          y = t.networkCacheConfig,
          b = i(e, g, y)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          b.request.node.params.name !== t.name && n(!1),
            (s = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: m,
              fetchObservable: c(d, b.request.identifier, function () {
                return d === t.environment && null != f
                  ? d.executeWithSource({ operation: b, source: f })
                  : d.execute({ operation: b })
              }),
              fetchPolicy: p,
              query: b,
              renderPolicy: null == a ? void 0 : a.UNSTABLE_renderPolicy,
            })
        else {
          var w = u(d, b)
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != f && d === t.environment ? f.ifEmpty(w) : (t.environment, w),
            fetchKey: m,
            fetchPolicy: p,
            query: b,
            renderPolicy: null == a ? void 0 : a.UNSTABLE_renderPolicy,
          }
        }
        return r(s)
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
        o = a.n(i),
        l = a('Lsrn'),
        s = a('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M14.548 11.634c-1.207 0-2.188-.98-2.188-2.188 0-.664.302-1.25.77-1.653-.363-.097-.736-.165-1.13-.165-2.416 0-4.375 1.96-4.375 4.376S9.585 16.38 12 16.38c2.418 0 4.377-1.96 4.377-4.376 0-.4-.07-.78-.17-1.146-.402.47-.992.776-1.66.776z',
              }),
              o.a.createElement('path', {
                d: 'M12 19.79c-7.228 0-10.12-6.724-10.24-7.01-.254-.466-.254-1.105.035-1.642C1.88 10.923 4.772 4.2 12 4.2s10.12 6.723 10.24 7.01c.254.465.254 1.104-.035 1.64-.085.216-2.977 6.94-10.205 6.94zm0-14c-6.154 0-8.668 5.787-8.772 6.033-.068.135-.068.208-.033.273.137.316 2.65 6.104 8.805 6.104 6.18 0 8.747-5.973 8.772-6.033.07-.136.07-.21.034-.274-.138-.316-2.652-6.103-8.806-6.103z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    '8bFt': function (e, t, a) {
      'use strict'
      a('z84I')
      var n = a('ERkP'),
        r = a.n(n),
        i = a('3XMw'),
        o = a.n(i),
        l = a('rHpw'),
        s = a('MWbm'),
        c = a('t62R'),
        u = a('/yvb'),
        d = a('OiMc'),
        m = a('wTX1'),
        p = a('6s7X'),
        f = a('RjwM'),
        g = a('7Mjr'),
        y = a('WXWl'),
        b = o.a.affbaf62,
        w = o.a.c388d026,
        h = o.a.i2785008,
        v = o.a.d9687d23,
        E = o.a.ac73eb5a,
        k = o.a.c5a9f921,
        I = function (e) {
          var t = e.label,
            a = e.tooltip
          return a
            ? r.a.createElement(
                s.a,
                null,
                r.a.createElement(
                  d.a,
                  {
                    preferredVerticalOrientation: 'up',
                    renderContent: function (e) {
                      return r.a.createElement(
                        s.a,
                        { style: C.tooltip },
                        r.a.createElement(
                          s.a,
                          { style: C.tooltipTitle },
                          r.a.createElement(c.b, { size: 'title3', weight: 'heavy' }, t),
                        ),
                        r.a.createElement(
                          s.a,
                          { style: C.tooltipText },
                          r.a.createElement(c.b, { color: 'gray700', size: 'body', weight: 'normal' }, a),
                        ),
                        r.a.createElement(u.a, { onPress: e, type: 'primaryOutlined' }, w),
                      )
                    },
                    withArrow: !0,
                  },
                  r.a.createElement(p.a, {
                    accessibilityLabel: b,
                    accessibilityRole: 'tooltip',
                    style: C.iconInformation,
                  }),
                ),
              )
            : null
        },
        P = function (e) {
          var t = e.label,
            a = e.tooltip
          return t
            ? r.a.createElement(
                s.a,
                { style: C.labelBar },
                r.a.createElement(c.b, { color: 'gray700', size: 'subtext2', style: C.labelText, weight: 'medium' }, t),
                r.a.createElement(I, { label: t, tooltip: a }),
              )
            : null
        },
        x = function (e) {
          var t = e.unit
          return t ? r.a.createElement(c.b, { color: 'gray700', style: C.unitText, weight: 'medium' }, t) : null
        },
        T = function (e) {
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
                  return v({ trendValueNegativePercent: t })
                }
                if (0 === e) return E
                var a = h(e)
                return k({ trendValuePositivePercent: a })
              })(n)),
              n < 0
                ? r.a.createElement(
                    s.a,
                    { accessibilityLabel: a, style: C.trendBar },
                    r.a.createElement(f.a, { style: C.trendIconNeg }),
                    r.a.createElement(
                      c.b,
                      { accessibilityHidden: !0, color: 'red500', size: 'body', weight: 'medium' },
                      t,
                    ),
                  )
                : 0 === n
                ? r.a.createElement(
                    s.a,
                    { accessibilityLabel: a, style: C.trendBar },
                    r.a.createElement(g.a, { style: C.trendIconZero }),
                    r.a.createElement(
                      c.b,
                      { accessibilityHidden: !0, color: 'gray700', size: 'body', weight: 'medium' },
                      t,
                    ),
                  )
                : r.a.createElement(
                    s.a,
                    { accessibilityLabel: a, style: C.trendBar },
                    r.a.createElement(y.a, { style: C.trendIconPos }),
                    r.a.createElement(
                      c.b,
                      { accessibilityHidden: !0, color: 'green500', size: 'body', weight: 'medium' },
                      t,
                    ),
                  ))
        },
        _ = function (e) {
          var t = e.subTextList
          return t
            ? t.map(function (e, t) {
                return r.a.createElement(
                  s.a,
                  { accessibilityLabel: e.accessibilityLabel, key: t, style: [C.subTextListItem, e.style] },
                  e.icon,
                  r.a.createElement(
                    c.b,
                    { accessibilityHidden: !(void 0 === e.accessibilityLabel), color: e.color },
                    e.text,
                  ),
                )
              })
            : null
        },
        C = l.a.create(function (e) {
          return {
            dataPoint: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' },
            labelBar: { display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: e.spaces.space2 },
            labelText: { marginRight: e.spaces.space4 },
            iconInformation: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: 'pointer' },
            tooltip: { padding: e.spaces.space32 },
            tooltipTitle: { marginBottom: e.spaces.space8 },
            tooltipText: { marginBottom: e.spaces.space24 },
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
            subTextListItem: { flexDirection: 'row', alignItems: 'center', marginBottom: e.spaces.space2 },
          }
        })
      t.a = function (e) {
        var t = e.animated,
          a = e.count,
          n = e.label,
          i = e.size,
          o = e.subTextList,
          l = e.tooltip,
          u = e.trendValue,
          d = e.unit,
          p = e.value
        return r.a.createElement(
          s.a,
          { style: C.dataPoint },
          r.a.createElement(P, { label: n, tooltip: l }),
          r.a.createElement(
            s.a,
            { style: C.valueBar },
            t
              ? r.a.createElement(m.a, { count: a, size: i, weight: 'bold' }, p)
              : r.a.createElement(c.b, { size: i, weight: 'bold' }, p),
            r.a.createElement(x, { unit: d }),
            r.a.createElement(T, { trendValue: u }),
          ),
          r.a.createElement(_, { subTextList: o }),
        )
      }
    },
    DL4F: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'ConversationAnalyticsScreen', function () {
          return da
        })
      var n = a('yiKp'),
        r = a.n(n),
        i = a('m3Bd'),
        o = a.n(i),
        l = a('VrFO'),
        s = a.n(l),
        c = a('Y9Ll'),
        u = a.n(c),
        d = a('1Pcy'),
        m = a.n(d),
        p = a('5Yy7'),
        f = a.n(p),
        g = a('2VqO'),
        y = a.n(g),
        b = a('KEM+'),
        w = a.n(b),
        h = (a('2G9S'), a('ERkP')),
        v = a.n(h),
        E = (a('KqXw'), a('WNMA'), a('XOJV')),
        k = a('rxPX'),
        I = a('0KEI'),
        P = a('S3l+'),
        x = 'CONVERSATION_ANALYTICS_SCREEN',
        T = function (e, t) {
          return t.match.params.statusId
        },
        _ = function (e, t) {
          return E.a.selectHydrated(e, T(0, t))
        },
        C = function (e, t) {
          return Object(P.s)(e, T(0, t))
        },
        L = function (e, t) {
          return E.a.selectFetchStatus(e, T(0, t))
        },
        S = function (e, t) {
          return Object(P.r)(e, T(0, t))
        },
        V = Object(k.a)()
          .propsFromState(function () {
            return {
              fetchStatus: L,
              quickPromoteEligibilityFetchStatus: C,
              statusId: T,
              tweet: _,
              quickPromoteEligibility: S,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(x),
              fetchTweetIfNeeded: E.a.fetchOneIfNeeded,
              fetchQuickPromoteEligibilityIfNeeded: P.l,
            }
          })
          .withAnalytics({ page: 'tweet', section: 'analytics', component: 'RwebConversationAnalytics' }),
        R = a('v//M'),
        A = a('W5XZ'),
        F = a('jHSc'),
        D = a('KUGV'),
        B = a('3XMw'),
        O = a.n(B),
        K = a('b5s6')
      a('0zG9')
      function j(e) {
        var t = Date.now() - e
        return { action: 'view', data: { event_info: JSON.stringify({ duration_ms: t }) } }
      }
      function N(e, t) {
        return { element: t, action: 'click', data: { profile_id: e } }
      }
      function z(e, t, a) {
        return {
          element: 'TweetActivityQueryRenderer',
          action: 'error',
          data: { event_info: e, items: [{ item_type: 0, id: a }], profile_id: t },
        }
      }
      var H = a('Rp9C'),
        W = (a('jQ3i'), a('hBpG'), a('7x/C'), a('LW0h'), a('z84I'), a('x0mb')),
        Q = a('RhWx'),
        M = a.n(Q),
        q = a('8bFt'),
        G = O.a.ja781451,
        U = O.a.cfa1a7b8
      function X(e) {
        return e || 0
      }
      function Y(e, t) {
        var a = X(t)
        return 0 === a ? 0 : X(e) / a
      }
      function J(e) {
        var t = X(e)
        return t >= 1e5 ? U(t) : G(t)
      }
      function Z(e) {
        return {
          count: J(null == e ? void 0 : e.value.total),
          promotionPercentage: Y(null == e ? void 0 : e.value.promoted, null == e ? void 0 : e.value.total),
        }
      }
      var $ = function (e) {
          var t = e.label,
            a = e.metric,
            n = e.showPromotionPercentages,
            r = e.tooltip,
            i = Y(null == a ? void 0 : a.value.promoted, null == a ? void 0 : a.value.total),
            o = M()(n ? Ie(i, !0) : [])
          return v.a.createElement(q.a, {
            label: t,
            size: 'title1',
            subTextList: o,
            tooltip: r,
            value: J(null == a ? void 0 : a.value.total),
          })
        },
        ee = a('MWbm'),
        te = a('rHpw'),
        ae = function (e) {
          var t = e.label,
            a = e.metric,
            n = e.showPromotionPercentages,
            r = e.tooltip,
            i = Y(null == a ? void 0 : a.value.promoted, null == a ? void 0 : a.value.total),
            o = M()(n ? Ie(i, !1) : [])
          return v.a.createElement(
            ee.a,
            { style: ne.dataPoint },
            v.a.createElement(q.a, {
              label: t,
              size: 'title3',
              subTextList: o,
              tooltip: r,
              value: J(null == a ? void 0 : a.value.total),
            }),
          )
        },
        ne = te.a.create(function (e) {
          return { dataPoint: { flexGrow: 1 } }
        }),
        re = a('7N4s'),
        ie = a('0ig/'),
        oe = O.a.e5fe61ef,
        le = O.a.f6162a32,
        se = O.a.dbe9353d,
        ce = O.a.e044b63f,
        ue = O.a.d8abdaa4,
        de = O.a.de0de3a7,
        me = O.a.aeee0181,
        pe = O.a.ccab7c76,
        fe = O.a.b1b4d57d,
        ge = O.a.i680442e,
        ye = O.a.d5f1e553,
        be = O.a.d24b7811,
        we = O.a.b40d33e4,
        he = O.a.ee547382,
        ve = O.a.i2785008,
        Ee = O.a.g33fd6b0
      O.a.b71059c3
      function ke(e) {
        var t,
          a,
          n = e.detailExpands,
          r = e.engagements,
          i = e.follows,
          o = e.impressions,
          l = e.linkClicks,
          s = e.mediaViews,
          c = e.profileVisits,
          u = e.showPromotionPercentages,
          d = e.tweet,
          m = v.a.useContext(re.b).isModal,
          p = Object(ie.a)().width < te.a.theme.breakpoints.xSmall,
          f = !(null == d || null === (t = d.entities) || void 0 === t || !t.urls) && d.entities.urls.length > 0,
          g =
            !(null == d || null === (a = d.extended_entities) || void 0 === a || !a.media) &&
            d.extended_entities.media.filter(function (e) {
              return 'video' === e.type
            }).length > 0,
          y = [
            v.a.createElement(ae, { key: se, label: se, metric: r, showPromotionPercentages: u, tooltip: ce }),
            v.a.createElement(ae, { key: we, label: we, metric: n, showPromotionPercentages: u, tooltip: he }),
            v.a.createElement(ae, { key: ue, label: ue, metric: i, showPromotionPercentages: u, tooltip: de }),
            v.a.createElement(ae, { key: me, label: me, metric: c, showPromotionPercentages: u, tooltip: pe }),
            g
              ? v.a.createElement(ae, { key: fe, label: fe, metric: s, showPromotionPercentages: u, tooltip: ge })
              : null,
            f
              ? v.a.createElement(ae, { key: ye, label: ye, metric: l, showPromotionPercentages: u, tooltip: be })
              : null,
          ].filter(function (e) {
            return e
          })
        return v.a.createElement(
          ee.a,
          {
            style: [
              Pe.grid,
              { gridTemplateColumns: m ? ' 1fr 2fr' : '1fr' },
              { gridGap: p ? te.a.theme.spaces.space24 : te.a.theme.spaces.space40 },
              { marginTop: p ? te.a.theme.spaces.space24 : te.a.theme.spaces.space40 },
              { marginHorizontal: p ? te.a.theme.spaces.space16 : te.a.theme.spaces.space32 },
            ],
          },
          v.a.createElement($, { label: oe, metric: o, showPromotionPercentages: u, tooltip: le }),
          v.a.createElement(
            ee.a,
            { style: [Pe.minorDataPointsGrid, { gridGap: p ? te.a.theme.spaces.space24 : te.a.theme.spaces.space40 }] },
            y.map(function (e, t) {
              return v.a.createElement(ee.a, { key: 'minorDataPoint'.concat(t) }, e)
            }),
          ),
        )
      }
      function Ie(e, t) {
        var a = ve(e),
          n = Ee({ percentage: a })
        return [
          {
            accessibilityLabel: n,
            color: 'primary',
            text: t ? n : a,
            icon: v.a.createElement(W.a, { style: Pe.promotionIcon }),
          },
        ]
      }
      var Pe = te.a.create(function (e) {
          return {
            grid: { display: 'grid', marginBottom: e.spaces.space40 },
            minorDataPointsGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' },
            promotionIcon: { fontSize: e.spaces.space4, color: e.colors.primary, marginRight: e.spaces.space4 },
          }
        }),
        xe = a('UIzd'),
        Te = a.n(xe),
        _e = (a('uFXj'), a('t62R')),
        Ce = a('LbZ7'),
        Le = a('iEUn'),
        Se = a('jlPL'),
        Ve = a('dFWS'),
        Re = O.a.ib1f8491,
        Ae = O.a.fbdb85f4,
        Fe = O.a.d0eeb126,
        De = O.a.i2785008,
        Be = O.a.g33fd6b0
      function Oe(e) {
        var t = e.percentageValue,
          a = De(t),
          n = Be({ percentage: a })
        return v.a.createElement(
          ee.a,
          { accessibilityLabel: n, style: je.percentageView },
          v.a.createElement(W.a, { style: je.promotionIcon }),
          v.a.createElement(_e.b, { accessibilityHidden: !0, color: 'primary' }, a),
        )
      }
      function Ke(e) {
        var t = e.likes,
          a = e.replies,
          n = e.retweets,
          r = e.showPromotionPercentages,
          i = Z(t),
          o = i.count,
          l = i.promotionPercentage,
          s = Z(n),
          c = s.count,
          u = s.promotionPercentage,
          d = Z(a),
          m = d.count,
          p = d.promotionPercentage
        return v.a.createElement(
          ee.a,
          { style: je.actionsBar },
          v.a.createElement(
            Ce.a,
            null,
            v.a.createElement(
              ee.a,
              { accessibilityLabel: Re({ likeCount: o }), style: je.column },
              v.a.createElement(Le.a, { style: je.actionIconsColor }),
              v.a.createElement(_e.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, o),
              r ? v.a.createElement(Oe, { percentageValue: l }) : null,
            ),
            v.a.createElement(
              ee.a,
              { accessibilityLabel: Ae({ retweetCount: c }), style: je.column },
              v.a.createElement(Se.a, { style: je.actionIconsColor }),
              v.a.createElement(_e.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, c),
              r ? v.a.createElement(Oe, { percentageValue: u }) : null,
            ),
            v.a.createElement(
              ee.a,
              { accessibilityLabel: Fe({ replyCount: m }), style: je.column },
              v.a.createElement(Ve.a, { style: je.actionIconsColor }),
              v.a.createElement(_e.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, m),
              r ? v.a.createElement(Oe, { percentageValue: p }) : null,
            ),
          ),
        )
      }
      var je = te.a.create(function (e) {
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
            percentageView: { display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 'auto' },
            promotionIcon: { fontSize: e.spaces.space4, color: e.colors.primary, marginRight: e.spaces.space4 },
          }
        }),
        Ne = a('97Jx'),
        ze = a.n(Ne),
        He = a('Wc+h'),
        We = a('gmpV'),
        Qe = a('876e'),
        Me = a('JYMr'),
        qe = a('h0NW'),
        Ge = O.a.db6efeb8,
        Ue = O.a.j6daea85,
        Xe = O.a.jade381b,
        Ye = O.a.d725a288,
        Je = O.a.hf9ed10f
      function Ze(e) {
        var t = e.end_time,
          a = e.isPaused,
          n = e.start_time,
          r = t ? new Date(t) : null,
          i = n ? new Date(n) : null,
          o = !!r && r > new Date(Date.now()),
          l = r && i ? Object(We.a)(new Date(i), new Date(r)) : 0,
          s = t && o ? Qe.a.getTimeLeftLabel(t) : null,
          c = r ? Ye(r) : '',
          u = r ? Xe(r) : '',
          d = Je({ endTimeString: c, endDateString: u })
        return v.a.createElement(
          ee.a,
          { style: et.promotionInfoView },
          v.a.createElement(
            ee.a,
            { style: et.infoItemView },
            v.a.createElement($e, { endTimeLabel: d, isPaused: a, percentagePassed: l, timeLeftLabel: s }),
          ),
        )
      }
      function $e(e) {
        var t = e.endTimeLabel,
          a = e.isPaused,
          n = e.percentagePassed,
          r = e.timeLeftLabel,
          i = {
            items: [
              {
                label: v.a.createElement(_e.b, { size: 'headline2', weight: 'heavy' }, a ? Ue : Ge),
                description: r
                  ? v.a.createElement(
                      v.a.Fragment,
                      null,
                      v.a.createElement(
                        ee.a,
                        { style: et.progressBarContainer },
                        v.a.createElement(Me.a, {
                          colorValue: a ? te.a.theme.colors.gray400 : te.a.theme.colors.primary,
                          progress: n,
                          style: et.progressBar,
                        }),
                      ),
                      v.a.createElement(_e.b, { align: 'left', color: 'gray700', hoverLabel: { label: t } }, r),
                    )
                  : null,
                decoration: a ? null : v.a.createElement(He.a, { style: [et.icon, et.decorationContainer] }),
              },
            ],
          }
        return v.a.createElement(qe.a, ze()({}, i, { containerStyle: et.infoItem }))
      }
      var et = te.a.create(function (e) {
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
            },
            promotionInfoViewNarrow: { flexWrap: 'wrap' },
            promotionInfoUnderReview: { padding: e.spaces.space24 },
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
            decorationContainer: { height: e.spaces.space24, width: e.spaces.space24, marginRight: e.spaces.space24 },
            icon: {
              height: e.spaces.space24,
              width: e.spaces.space24,
              color: e.colors.white,
              backgroundColor: e.colors.primary,
              borderRadius: e.borderRadii.small,
            },
          }
        }),
        tt = a('ddV6'),
        at = a.n(tt),
        nt = (a('hBvt'), a('v6aA')),
        rt = a('/yvb'),
        it = O.a.d228a9a0,
        ot = O.a.c174e46e
      function lt(e) {
        var t,
          a = e.buttonString,
          n = e.buttonTestID,
          r = e.infoItemGroup,
          i = e.link,
          o = e.onButtonPress,
          l = v.a.useContext(nt.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled'),
          s = null !== (t = e.expandButtonText) && void 0 !== t ? t : it,
          c = Object(ie.a)(),
          u = !v.a.useContext(re.b).isModal,
          d = c.width <= te.a.theme.breakpoints.xSmall,
          m = v.a.useState(!1),
          p = at()(m, 2),
          f = p[0],
          g = p[1],
          y = f ? ot : s,
          b = [st.promotionInfoView, u && st.promotionInfoViewNarrow, d && st.promotionInfoViewXSmall]
        return l
          ? v.a.createElement(
              ee.a,
              { style: b },
              v.a.createElement(
                ee.a,
                {
                  style: u ? (f ? st.promotionInfoTextVisible : st.promotionInfoTextHidden) : st.promotionInfoTextWide,
                },
                r,
              ),
              v.a.createElement(
                ee.a,
                { style: u ? st.buttonViewNarrow : st.buttonViewWide },
                v.a.createElement(rt.a, { link: i, onPress: o, size: 'large', testID: n, type: 'primaryFilled' }, a),
              ),
              u &&
                v.a.createElement(
                  rt.a,
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
          : v.a.createElement(
              ee.a,
              { style: b },
              v.a.createElement(ee.a, { style: [st.infoItemView, u && st.infoItemViewNarrow] }, r),
              v.a.createElement(
                ee.a,
                { style: u ? [st.buttonViewNarrow, { flexGrow: 0 }] : st.buttonViewWide },
                v.a.createElement(rt.a, { link: i, onPress: o, size: 'large', testID: n, type: 'primaryFilled' }, a),
              ),
            )
      }
      var st = te.a.create(function (e) {
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
        ct = a('Irs7'),
        ut = a('yE5w'),
        dt = O.a.a63a89fe,
        mt = O.a.j401e4bc,
        pt = O.a.e8adeec8,
        ft = O.a.ja781451
      function gt(e) {
        var t = Object(ct.b)(),
          a = ft(X(e.impressions)),
          n = ft(X(e.engagements)),
          r = mt({ impressions: a, engagements: n }),
          i = {
            items: [{ label: v.a.createElement(_e.b, { size: 'headline2', weight: 'heavy' }, dt), description: r }],
          }
        var o = v.a.createElement(qe.a, ze()({}, i, { containerStyle: yt.infoItem })),
          l = null !== Object(D.a)(),
          s = ''
            .concat(e.tweetPermalink, '/')
            .concat(l ? ut.a.Webview : ut.a.Rweb, '/')
            .concat(ut.c.Intro)
        return v.a.createElement(lt, {
          buttonString: pt,
          infoItemGroup: o,
          link: s,
          onButtonPress: function () {
            t.scribe(N(e.userId, 'PromoteAgainButton'))
          },
        })
      }
      var yt = te.a.create(function (e) {
          return {
            infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' },
            decorationContainer: { height: e.spaces.space24, width: e.spaces.space24, marginRight: e.spaces.space24 },
            icon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.green500 },
          }
        }),
        bt = O.a.dcfb0332,
        wt = O.a.g6bf2fda,
        ht = O.a.df2c469a,
        vt = O.a.ja781451
      function Et(e) {
        var t = Object(ct.b)(),
          a = null !== Object(D.a)(),
          n = vt(X(e.impressions)),
          r = wt({ impressions: n })
        var i = {
            items: [{ label: v.a.createElement(_e.b, { size: 'headline1', weight: 'heavy' }, bt), description: r }],
          },
          o = v.a.createElement(qe.a, ze()({}, i, { containerStyle: kt.infoItem }))
        return v.a.createElement(lt, {
          buttonString: ht,
          buttonTestID: e.buttonTestID,
          infoItemGroup: o,
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
      var kt = te.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        It = O.a.dcfb0332,
        Pt = O.a.f96eec3c,
        xt = O.a.e9891f7c,
        Tt = O.a.i859a9d3
      function _t(e) {
        var t = Object(ct.b)(),
          a = {
            items: [{ label: v.a.createElement(_e.b, { size: 'headline1', weight: 'heavy' }, It), description: Pt }],
          }
        var n = v.a.createElement(qe.a, ze()({}, a, { containerStyle: Ct.infoItem })),
          r = null !== Object(D.a)(),
          i = ''
            .concat(e.tweetPermalink, '/')
            .concat(r ? ut.a.Webview : ut.a.Rweb, '/')
            .concat(ut.c.Intro)
        return v.a.createElement(lt, {
          buttonString: xt,
          expandButtonText: Tt,
          infoItemGroup: n,
          link: i,
          onButtonPress: function () {
            t.scribe(N(e.userId, 'NotStartedPromotionButton'))
          },
        })
      }
      var Ct = te.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        Lt = 'switchToProfessionalButton',
        St = a('5emT'),
        Vt = O.a.jede3014,
        Rt = O.a.i094e43b,
        At = O.a.f638d3e0
      function Ft(e) {
        var t = Object(ct.b)(),
          a = {
            items: [
              {
                label: v.a.createElement(_e.b, { size: 'headline2', weight: 'heavy' }, Vt),
                description: Rt,
                decoration: v.a.createElement(St.a, { style: [Bt.icon, Bt.decorationContainer] }),
              },
            ],
          }
        return v.a.createElement(
          ee.a,
          { style: Bt.promotionInfoView },
          v.a.createElement(
            ee.a,
            { style: Bt.infoItemView },
            v.a.createElement(qe.a, ze()({}, a, { containerStyle: Bt.infoItem })),
          ),
          v.a.createElement(
            ee.a,
            { style: Bt.buttonView },
            v.a.createElement(
              _e.b,
              {
                color: 'primary',
                link: 'https://twitter.com/adspolicy',
                onPress: function () {
                  t.scribe(N(e.userId, 'ReviewPolicyButton'))
                },
              },
              At,
            ),
          ),
        )
      }
      var Dt,
        Bt = te.a.create(function (e) {
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
        Ot = (a('enFi'), a('jAXQ')),
        Kt = a.n(Ot),
        jt =
          (a('yH/f'),
          Object.freeze({
            notProfessional: 'not_professional',
            notStarted: 'not_started',
            underReview: 'under_review',
            running: 'running',
            completed: 'completed',
            paused: 'paused',
          })),
        Nt = void 0 !== Dt ? Dt : (Dt = a('+s2u'))
      function zt(e) {
        var t,
          a,
          n,
          r,
          i = e.engagements,
          o = e.impressions,
          l = e.promotionInfoState,
          s = e.tweet,
          c = Kt()(Nt, e.campaignInfo)
        switch (l) {
          case jt.notProfessional:
            return v.a.createElement(Et, {
              buttonTestID: Lt,
              impressions: null == o ? void 0 : o.value.total,
              tweet_id: s.id_str,
              userId: e.userId,
            })
          case jt.notStarted:
            return v.a.createElement(_t, { tweetPermalink: s.permalink, userId: e.userId })
          case jt.underReview:
            return v.a.createElement(Ft, { userId: e.userId })
          case jt.running:
            return v.a.createElement(Ze, {
              end_time: null == c || null === (t = c.campaign) || void 0 === t ? void 0 : t.end_time,
              isPaused: !1,
              start_time: null == c || null === (a = c.campaign) || void 0 === a ? void 0 : a.start_time,
            })
          case jt.completed:
            return v.a.createElement(gt, {
              engagements: null == i ? void 0 : i.value.promoted,
              impressions: null == o ? void 0 : o.value.promoted,
              tweetPermalink: s.permalink,
              userId: e.userId,
            })
          case jt.paused:
            return v.a.createElement(Ze, {
              end_time: null == c || null === (n = c.campaign) || void 0 === n ? void 0 : n.end_time,
              isPaused: !0,
              start_time: null == c || null === (r = c.campaign) || void 0 === r ? void 0 : r.start_time,
            })
          default:
            return null
        }
      }
      var Ht,
        Wt,
        Qt,
        Mt = a('Ud88'),
        qt = a.n(Mt),
        Gt = a('n0Rl'),
        Ut = a('Hsf0'),
        Xt = a.n(Ut),
        Yt = a('LLQb'),
        Jt = O.a.deaf5b15,
        Zt = void 0 !== Ht ? Ht : (Ht = a('2O3u')),
        $t = (void 0 !== Wt || (Wt = a('njVe')), void 0 !== Qt ? Qt : (Qt = a('wfDE'))),
        ea = Object(Gt.b)($t, { errorConfig: { context: x } })
      function ta(e) {
        var t = e.hidePromotionInfo,
          a = e.quickPromoteEligibility,
          n = e.tweet,
          r = e.userId,
          i = Object(ct.b)(),
          o = qt()(),
          l = Object(I.useCreateLocalApiErrorHandler)(x)
        return (
          v.a.useEffect(
            function () {
              var e = l({ showToast: !1 })
              Te()(o, $t, { restId: n.id_str }).subscribe({ error: e })
            },
            [n, o, l],
          ),
          v.a.createElement(ea, {
            render: function (e) {
              if (e.fetchStatus === Gt.a.FAILED) {
                var o = e.retry
                return (
                  i.scribe(z('NetworkError', r, n.id_str)),
                  v.a.createElement(Yt.a, { onRequestRetry: o, retryMessage: Jt })
                )
              }
              if (e.fetchStatus === Gt.a.LOADED) {
                var l,
                  s,
                  c =
                    null === (l = e.data) || void 0 === l || null === (s = l.tweet_result_by_rest_id) || void 0 === s
                      ? void 0
                      : s.result
                if ('Tweet' === (null == c ? void 0 : c.__typename)) {
                  var u = Xt()(Zt, c.analytics)
                  ;(null != u && u.metrics.length) || i.scribe(z('EmptyMetricsFromBackend', r, n.id_str))
                  var d = na(c.analytics),
                    m = d.detailExpands,
                    p = d.engagements,
                    f = d.follows,
                    g = d.impressions,
                    y = d.likes,
                    b = d.linkClicks,
                    w = d.mediaViews,
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
                  return v.a.createElement(
                    ee.a,
                    { style: ra.tweetActivity },
                    v.a.createElement(
                      ee.a,
                      { style: ra.metricsView },
                      v.a.createElement(Ke, { likes: y, replies: E, retweets: k, showPromotionPercentages: P }),
                      v.a.createElement(ke, {
                        detailExpands: m,
                        engagements: p,
                        follows: f,
                        impressions: g,
                        linkClicks: b,
                        mediaViews: w,
                        profileVisits: h,
                        showPromotionPercentages: P,
                        tweet: n,
                      }),
                    ),
                    t || !I
                      ? null
                      : v.a.createElement(zt, {
                          campaignInfo: c.quick_promotion,
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
      var aa = function (e, t) {
          return e
            ? e.metrics.find(function (e) {
                return e.key === t
              })
            : null
        },
        na = function (e) {
          var t = Xt()(Zt, e)
          return {
            detailExpands: aa(t, 'DetailExpands'),
            engagements: aa(t, 'Engagements'),
            follows: aa(t, 'Follows'),
            impressions: aa(t, 'Impressions'),
            likes: aa(t, 'Favorites'),
            linkClicks: aa(t, 'UrlClicks'),
            mediaViews: aa(t, 'MediaViews'),
            profileVisits: aa(t, 'UserProfileClicks'),
            replies: aa(t, 'Replies'),
            retweets: aa(t, 'Retweets'),
          }
        }
      var ra = te.a.create(function (e) {
          return { tweetActivity: { flex: 1 }, metricsView: { flexGrow: 1 } }
        }),
        ia = a('E0cF'),
        oa = a('q9Zt'),
        la = ['data'],
        sa = O.a.g9079b93,
        ca = O.a.a57daeb1,
        ua = O.a.deaf5b15,
        da = (function (e) {
          f()(a, e)
          var t = y()(a)
          function a() {
            var e
            s()(this, a)
            for (var n = arguments.length, i = new Array(n), l = 0; l < n; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              w()(m()(e), '_handleFetchTweet', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler
                ;(0, t.fetchTweetIfNeeded)(t.statusId).catch(a(A.a))
              }),
              w()(m()(e), '_handleFetchQuickPromoteEligibility', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler
                return (0, t.fetchQuickPromoteEligibilityIfNeeded)({ statusId: t.statusId }).catch(a())
              }),
              w()(m()(e), '_render', function () {
                var t = e.props,
                  a = t.quickPromoteEligibility,
                  n = t.tweet,
                  r = (n && ia.a.getOriginalTweet(n)) || void 0
                return !r || (r && r.user.id_str !== e.context.loggedInUserId)
                  ? v.a.createElement(oa.a, { onRetry: null, title: sa })
                  : (e._scribeEligibility(),
                    v.a.createElement(
                      ee.a,
                      { style: ma.topLevelView },
                      v.a.createElement(
                        ee.a,
                        { style: ma.quoteTweet },
                        v.a.createElement(K.a, {
                          isCondensed: !0,
                          style: { cursor: 'default' },
                          tweetId: r.id_str,
                          withLink: !1,
                          withUserHoverCard: !1,
                        }),
                      ),
                      v.a.createElement(ta, {
                        hidePromotionInfo: !1,
                        quickPromoteEligibility: a,
                        tweet: r,
                        userId: e.context.loggedInUserId || '',
                      }),
                    ))
              }),
              w()(m()(e), '_setAppBarRef', function (t) {
                e._appBarRef = t
              }),
              w()(m()(e), '_handleGoBack', function () {
                e.props.history.goBackThroughModals()
              }),
              w()(m()(e), '_scribeEligibility', function () {
                var t = e.props,
                  a = t.analytics,
                  n = t.quickPromoteEligibility
                a.scribe({ element: 'eligibility', action: 'view', data: { event_info: n || '' } })
              }),
              w()(m()(e), '_scribeDwellTime', function () {
                var t = e.props,
                  a = t.analytics,
                  n = t.tweet,
                  i = (n && ia.a.getOriginalTweet(n)) || void 0,
                  l = j(e._dwellStartTime),
                  s = l.data,
                  c = o()(l, la)
                a.scribe(r()(r()({}, c), {}, { data: r()(r()({}, s), {}, { items: i ? [H.a.getTweetItem(i)] : [] }) }))
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
                    r = (n && ia.a.getOriginalTweet(n)) || void 0,
                    i = null !== Object(D.a)()
                  return v.a.createElement(
                    F.b,
                    {
                      appBarRef: this._setAppBarRef,
                      backLocation: r ? r.permalink : '/',
                      hideBackButton: i,
                      history: a,
                      onBackClick: this._handleGoBack,
                      renderHeader: function (e) {
                        return i ? null : e
                      },
                      title: i ? null : ca,
                    },
                    v.a.createElement(R.a, { fetchStatus: t, render: this._render, retryMessage: ua }),
                  )
                },
              },
            ]),
            a
          )
        })(v.a.PureComponent)
      w()(da, 'contextType', nt.a)
      var ma = te.a.create(function (e) {
          return { topLevelView: { flex: 1 }, quoteTweet: { margin: e.spaces.space16, marginBottom: e.spaces.space12 } }
        }),
        pa = V(da)
      t.default = pa
    },
    RjwM: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        l = a('Lsrn'),
        s = a('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M18.707 13.293c-.39-.39-1.023-.39-1.414 0L13 17.586V5c0-.553-.447-1-1-1s-1 .447-1 1v12.586l-4.293-4.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293l6-6c.39-.39.39-1.023 0-1.414z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    WXWl: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        l = a('Lsrn'),
        s = a('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
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
        r = a.n(n),
        i = a('m3Bd'),
        o = a.n(i),
        l = a('ERkP'),
        s = a.n(l),
        c = a('v6aA'),
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
        w = a('uCxL'),
        h = a('x5Pi'),
        v = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        E = y(function (e) {
          var t = e.community,
            a = e.createLocalApiErrorHandler,
            n = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            l = (e.tweetId, o()(e, v)),
            u = s.a.useContext(c.a),
            d = u.featureSwitches,
            m = u.loggedInUserId,
            p = null == i ? void 0 : i.community_id_str
          s.a.useEffect(
            function () {
              p && Object(b.a)(t) && n(p).catch(a())
            },
            [t, p, a, n],
          )
          var f = d.isTrue('responsive_web_alt_text_badge_enabled'),
            g = i && Object(h.f)(i, m, t),
            y = g && Object(h.e)(g),
            E = d.isTrue('responsive_web_reactions_enabled')
          return s.a.createElement(
            w.a,
            r()({}, l, {
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
        o = a('aQQo'),
        l = o.loadQuery,
        s = o.useTrackLoadQueryInRender,
        c = a('ERkP'),
        u = c.useCallback,
        d = c.useEffect,
        m = c.useRef,
        p = c.useState,
        f = a('K1lQ').getRequest,
        g = { kind: 'NullQueryReference' }
      function y(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== f(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var a = null != t ? t : g,
          o = i()
        s()
        var c = r(),
          f = m(new Set([a])),
          b = p(function () {
            return a
          }),
          w = b[0],
          h = b[1],
          v = p(function () {
            return a
          }),
          E = v[0],
          k = v[1]
        a !== E && (f.current.add(a), k(a), h(a))
        var I = u(
            function () {
              c.current && (f.current.add(g), h(g))
            },
            [c],
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
              if (c.current) {
                var r,
                  i = l(null !== (r = null == a ? void 0 : a.__environment) && void 0 !== r ? r : o, e, t, n)
                f.current.add(i), h(i)
              }
            },
            [o, e, h, c],
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
                    'NullQueryReference' !== w.kind &&
                    P(w.variables, { fetchPolicy: w.fetchPolicy, networkCacheConfig: w.networkCacheConfig })
                  )
                )
              var t = f.current
              if (c.current) {
                var a,
                  r = (0, n.default)(t)
                try {
                  for (r.s(); !(a = r.n()).done; ) {
                    var i = a.value
                    if (i === w) break
                    t.delete(i),
                      'NullQueryReference' !== i.kind &&
                        (y(e) ? i.dispose && i.dispose() : i.releaseQuery && i.releaseQuery())
                  }
                } catch (o) {
                  r.e(o)
                } finally {
                  r.f()
                }
              }
            },
            [w, c, P, e],
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
          ['NullQueryReference' === w.kind ? null : w, P, I]
        )
      }
    },
    n0Rl: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return O
      })
      var n = a('ddV6'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        l = a('Y9Ll'),
        s = a.n(l),
        c = a('1Pcy'),
        u = a.n(c),
        d = a('5Yy7'),
        m = a.n(d),
        p = a('2VqO'),
        f = a.n(p),
        g = a('KEM+'),
        y = a.n(g),
        b = (a('2G9S'), a('lTEL'), a('7x/C'), a('87if'), a('ZUdG'), a('kYxP'), a('ERkP')),
        w = a.n(b),
        h = a('pXBW'),
        v = a('6/RC'),
        E = a('UIzd'),
        k = a.n(E),
        I = a('kGix')
      a.d(t, 'a', function () {
        return I.a
      })
      var P = a('fs1G'),
        x = a('0KEI'),
        T = a('lU4h'),
        _ = a.n(T),
        C = a('21nk'),
        L = a.n(C),
        S = a('bCEw'),
        V = a.n(S),
        R = a('Ud88'),
        A = a.n(R),
        F = function (e) {
          return (0, e.render)({ fetchStatus: I.a.LOADING, data: null, error: null, retry: P.a })
        },
        D = (function (e) {
          m()(a, e)
          var t = f()(a)
          function a() {
            var e
            o()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (e = t.call.apply(t, [this].concat(r))), y()(u()(e), 'state', { error: null }), e
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
        })(w.a.Component),
        B = function (e) {
          var t = e.query,
            a = e.queryRef,
            n = e.render,
            r = L()(t, a)
          return n({ fetchStatus: I.a.LOADED, data: r, error: null, retry: P.a })
        },
        O = function (e, t) {
          if (v.canUseDOM)
            return function (a) {
              var n = a.fetchPolicy,
                i = void 0 === n ? 'store-or-network' : n,
                o = a.render,
                l = a.variables,
                s = V()(e),
                c = r()(s, 2),
                u = c[0],
                d = c[1],
                m = Object(x.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                p = _()(l),
                f = r()(p, 1)[0],
                g = w.a.useCallback(
                  function () {
                    d(f, { fetchPolicy: 'network-only' })
                  },
                  [d, f],
                )
              return (
                w.a.useLayoutEffect(
                  function () {
                    d(f, { fetchPolicy: i })
                  },
                  [i, d, f],
                ),
                u
                  ? w.a.createElement(
                      w.a.Suspense,
                      { fallback: w.a.createElement(F, { render: o }) },
                      w.a.createElement(
                        D,
                        { errorHandler: m(t.errorConfig.options || {}), key: u.fetchKey, retry: g },
                        function (t, a) {
                          return t
                            ? o({ fetchStatus: I.a.FAILED, error: t, data: null, retry: a })
                            : w.a.createElement(B, { query: e, queryRef: u, render: o })
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
              o = n.variables,
              l = A()(),
              s = Object(x.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              c = _()(o),
              u = r()(c, 1)[0],
              d = a.get(l)
            if (d) return d
            var m = w.a.lazy(function () {
              return k()(l, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return i({ fetchStatus: I.a.LOADED, data: e, error: null, retry: P.a })
                  },
                  function (e) {
                    return e instanceof h.a
                      ? (s(t.errorConfig.options || {})(e),
                        i({ fetchStatus: I.a.FAILED, data: null, error: e, retry: P.a }))
                      : w.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: a.set(l, e).get.bind(a, l) }
                })
            })
            return w.a.createElement(w.a.Suspense, null, w.a.createElement(m, null))
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
        o,
        l,
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
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'restId' },
                  { kind: 'Literal', name: 's', value: 44 },
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
                                selections: (o = [
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
                                  (l = {
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
                            selections: o,
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
                              l,
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
            id: 'i7VeKbv9qdG33beVZCqYNQ',
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
