;(window.webpackJsonp = window.webpackJsonp || []).push([
  [48],
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
          var h = u(d, b)
          c = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != f && d === t.environment ? f.ifEmpty(h) : (t.environment, h),
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
    '8bFt': function (e, t, a) {
      'use strict'
      a('z84I')
      var n = a('ERkP'),
        r = a.n(n),
        i = a('3XMw'),
        l = a.n(i),
        o = a('rHpw'),
        c = a('MWbm'),
        s = a('t62R'),
        u = a('/yvb'),
        d = a('OiMc'),
        m = a('6s7X'),
        p = a('RjwM'),
        f = a('7Mjr'),
        g = a('WXWl'),
        y = l.a.affbaf62,
        b = l.a.c388d026,
        h = l.a.i2785008,
        v = l.a.d9687d23,
        w = l.a.ac73eb5a,
        E = l.a.c5a9f921,
        k = function (e) {
          var t = e.label,
            a = e.tooltip
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
                        { style: x.tooltip },
                        r.a.createElement(
                          c.a,
                          { style: x.tooltipTitle },
                          r.a.createElement(s.b, { size: 'title3', weight: 'heavy' }, t),
                        ),
                        r.a.createElement(
                          c.a,
                          { style: x.tooltipText },
                          r.a.createElement(s.b, { color: 'gray700', size: 'body', weight: 'normal' }, a),
                        ),
                        r.a.createElement(u.a, { onPress: e, type: 'primaryOutlined' }, b),
                      )
                    },
                    withArrow: !0,
                  },
                  r.a.createElement(m.a, {
                    accessibilityLabel: y,
                    accessibilityRole: 'tooltip',
                    style: x.iconInformation,
                  }),
                ),
              )
            : null
        },
        I = function (e) {
          var t = e.label,
            a = e.tooltip
          return t
            ? r.a.createElement(
                c.a,
                { style: x.labelBar },
                r.a.createElement(s.b, { color: 'gray700', size: 'subtext2', style: x.labelText, weight: 'medium' }, t),
                r.a.createElement(k, { label: t, tooltip: a }),
              )
            : null
        },
        P = function (e) {
          var t = e.unit
          return t ? r.a.createElement(s.b, { color: 'gray700', style: x.unitText, weight: 'medium' }, t) : null
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
                  return v({ trendValueNegativePercent: t })
                }
                if (0 === e) return w
                var a = h(e)
                return E({ trendValuePositivePercent: a })
              })(n)),
              n < 0
                ? r.a.createElement(
                    c.a,
                    { accessibilityLabel: a, style: x.trendBar },
                    r.a.createElement(p.a, { style: x.trendIconNeg }),
                    r.a.createElement(
                      s.b,
                      { accessibilityHidden: !0, color: 'red500', size: 'body', weight: 'medium' },
                      t,
                    ),
                  )
                : 0 === n
                ? r.a.createElement(
                    c.a,
                    { accessibilityLabel: a, style: x.trendBar },
                    r.a.createElement(f.a, { style: x.trendIconZero }),
                    r.a.createElement(
                      s.b,
                      { accessibilityHidden: !0, color: 'gray700', size: 'body', weight: 'medium' },
                      t,
                    ),
                  )
                : r.a.createElement(
                    c.a,
                    { accessibilityLabel: a, style: x.trendBar },
                    r.a.createElement(g.a, { style: x.trendIconPos }),
                    r.a.createElement(
                      s.b,
                      { accessibilityHidden: !0, color: 'green500', size: 'body', weight: 'medium' },
                      t,
                    ),
                  ))
        },
        T = function (e) {
          var t = e.subTextList
          return t
            ? t.map(function (e, t) {
                return r.a.createElement(
                  c.a,
                  { accessibilityLabel: e.accessibilityLabel, key: t, style: [x.subTextListItem, e.style] },
                  e.icon,
                  r.a.createElement(
                    s.b,
                    { accessibilityHidden: !(void 0 === e.accessibilityLabel), color: e.color },
                    e.text,
                  ),
                )
              })
            : null
        },
        x = o.a.create(function (e) {
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
        var t = e.label,
          a = e.size,
          n = e.subTextList,
          i = e.tooltip,
          l = e.trendValue,
          o = e.unit,
          u = e.value
        return r.a.createElement(
          c.a,
          { style: x.dataPoint },
          r.a.createElement(I, { label: t, tooltip: i }),
          r.a.createElement(
            c.a,
            { style: x.valueBar },
            r.a.createElement(s.b, { size: a, weight: 'bold' }, u),
            r.a.createElement(P, { unit: o }),
            r.a.createElement(_, { trendValue: l }),
          ),
          r.a.createElement(T, { subTextList: n }),
        )
      }
    },
    DL4F: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'ConversationAnalyticsScreen', function () {
          return oa
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
        h = a.n(b),
        v = (a('2G9S'), a('ERkP')),
        w = a.n(v),
        E = (a('KqXw'), a('WNMA'), a('XOJV')),
        k = a('rxPX'),
        I = a('0KEI'),
        P = a('S3l+'),
        _ = 'CONVERSATION_ANALYTICS_SCREEN',
        T = function (e, t) {
          return t.match.params.statusId
        },
        x = function (e, t) {
          return E.a.selectHydrated(e, T(0, t))
        },
        L = function (e, t) {
          return Object(P.s)(e, T(0, t))
        },
        C = function (e, t) {
          return E.a.selectFetchStatus(e, T(0, t))
        },
        S = function (e, t) {
          return Object(P.r)(e, T(0, t))
        },
        R = Object(k.a)()
          .propsFromState(function () {
            return {
              fetchStatus: C,
              quickPromoteEligibilityFetchStatus: L,
              statusId: T,
              tweet: x,
              quickPromoteEligibility: S,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(_),
              fetchTweetIfNeeded: E.a.fetchOneIfNeeded,
              fetchQuickPromoteEligibilityIfNeeded: P.l,
            }
          })
          .withAnalytics({ page: 'tweet', section: 'analytics', component: 'RwebConversationAnalytics' }),
        V = a('v//M'),
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
      function W(e, t, a) {
        return {
          element: 'TweetActivityQueryRenderer',
          action: 'error',
          data: { event_info: e, items: [{ item_type: 0, id: a }], profile_id: t },
        }
      }
      var z = a('Rp9C'),
        H = (a('jQ3i'), a('hBpG'), a('7x/C'), a('LW0h'), a('z84I'), a('x0mb')),
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
            l = M()(n ? Ie(i, !0) : [])
          return w.a.createElement(q.a, {
            label: t,
            size: 'title1',
            subTextList: l,
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
            l = M()(n ? Ie(i, !1) : [])
          return w.a.createElement(
            ee.a,
            { style: ne.dataPoint },
            w.a.createElement(q.a, {
              label: t,
              size: 'title3',
              subTextList: l,
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
        le = O.a.e5fe61ef,
        oe = O.a.f6162a32,
        ce = O.a.dbe9353d,
        se = O.a.e044b63f,
        ue = O.a.d8abdaa4,
        de = O.a.de0de3a7,
        me = O.a.aeee0181,
        pe = O.a.ccab7c76,
        fe = O.a.b1b4d57d,
        ge = O.a.i680442e,
        ye = O.a.d5f1e553,
        be = O.a.d24b7811,
        he = O.a.b40d33e4,
        ve = O.a.ee547382,
        we = O.a.i2785008,
        Ee = O.a.g33fd6b0
      O.a.b71059c3
      function ke(e) {
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
          m = w.a.useContext(re.b).isModal,
          p = Object(ie.a)().width < te.a.theme.breakpoints.xSmall,
          f = !(null == d || null === (t = d.entities) || void 0 === t || !t.urls) && d.entities.urls.length > 0,
          g =
            !(null == d || null === (a = d.extended_entities) || void 0 === a || !a.media) &&
            d.extended_entities.media.filter(function (e) {
              return 'video' === e.type
            }).length > 0,
          y = [
            w.a.createElement(ae, { key: ce, label: ce, metric: r, showPromotionPercentages: u, tooltip: se }),
            w.a.createElement(ae, { key: he, label: he, metric: n, showPromotionPercentages: u, tooltip: ve }),
            w.a.createElement(ae, { key: ue, label: ue, metric: i, showPromotionPercentages: u, tooltip: de }),
            w.a.createElement(ae, { key: me, label: me, metric: s, showPromotionPercentages: u, tooltip: pe }),
            g
              ? w.a.createElement(ae, { key: fe, label: fe, metric: c, showPromotionPercentages: u, tooltip: ge })
              : null,
            f
              ? w.a.createElement(ae, { key: ye, label: ye, metric: o, showPromotionPercentages: u, tooltip: be })
              : null,
          ].filter(function (e) {
            return e
          })
        return w.a.createElement(
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
          w.a.createElement($, { label: le, metric: l, showPromotionPercentages: u, tooltip: oe }),
          w.a.createElement(
            ee.a,
            { style: [Pe.minorDataPointsGrid, { gridGap: p ? te.a.theme.spaces.space24 : te.a.theme.spaces.space40 }] },
            y.map(function (e, t) {
              return w.a.createElement(ee.a, { key: 'minorDataPoint'.concat(t) }, e)
            }),
          ),
        )
      }
      function Ie(e, t) {
        var a = we(e),
          n = Ee({ percentage: a })
        return [
          {
            accessibilityLabel: n,
            color: 'primary',
            text: t ? n : a,
            icon: w.a.createElement(H.a, { style: Pe.promotionIcon }),
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
        _e = a('UIzd'),
        Te = a.n(_e),
        xe = (a('uFXj'), a('t62R')),
        Le = a('LbZ7'),
        Ce = a('iEUn'),
        Se = a('jlPL'),
        Re = a('dFWS'),
        Ve = O.a.ib1f8491,
        Ae = O.a.fbdb85f4,
        Fe = O.a.d0eeb126,
        De = O.a.i2785008,
        Be = O.a.g33fd6b0
      function Oe(e) {
        var t = e.percentageValue,
          a = De(t),
          n = Be({ percentage: a })
        return w.a.createElement(
          ee.a,
          { accessibilityLabel: n, style: je.percentageView },
          w.a.createElement(H.a, { style: je.promotionIcon }),
          w.a.createElement(xe.b, { accessibilityHidden: !0, color: 'primary' }, a),
        )
      }
      function Ke(e) {
        var t = e.likes,
          a = e.replies,
          n = e.retweets,
          r = e.showPromotionPercentages,
          i = Z(t),
          l = i.count,
          o = i.promotionPercentage,
          c = Z(n),
          s = c.count,
          u = c.promotionPercentage,
          d = Z(a),
          m = d.count,
          p = d.promotionPercentage
        return w.a.createElement(
          ee.a,
          { style: je.actionsBar },
          w.a.createElement(
            Le.a,
            null,
            w.a.createElement(
              ee.a,
              { accessibilityLabel: Ve({ likeCount: l }), style: je.column },
              w.a.createElement(Ce.a, { style: je.actionIconsColor }),
              w.a.createElement(xe.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, l),
              r ? w.a.createElement(Oe, { percentageValue: o }) : null,
            ),
            w.a.createElement(
              ee.a,
              { accessibilityLabel: Ae({ retweetCount: s }), style: je.column },
              w.a.createElement(Se.a, { style: je.actionIconsColor }),
              w.a.createElement(xe.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, s),
              r ? w.a.createElement(Oe, { percentageValue: u }) : null,
            ),
            w.a.createElement(
              ee.a,
              { accessibilityLabel: Fe({ replyCount: m }), style: je.column },
              w.a.createElement(Re.a, { style: je.actionIconsColor }),
              w.a.createElement(xe.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, m),
              r ? w.a.createElement(Oe, { percentageValue: p }) : null,
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
        We = a.n(Ne),
        ze = a('Wc+h'),
        He = a('gmpV'),
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
          l = !!r && r > new Date(Date.now()),
          o = r && i ? Object(He.a)(new Date(i), new Date(r)) : 0,
          c = t && l ? Qe.a.getTimeLeftLabel(t) : null,
          s = r ? Ye(r) : '',
          u = r ? Xe(r) : '',
          d = Je({ endTimeString: s, endDateString: u })
        return w.a.createElement(
          ee.a,
          { style: et.promotionInfoView },
          w.a.createElement(
            ee.a,
            { style: et.infoItemView },
            w.a.createElement($e, { endTimeLabel: d, isPaused: a, percentagePassed: o, timeLeftLabel: c }),
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
                label: w.a.createElement(xe.b, { size: 'headline2', weight: 'heavy' }, a ? Ue : Ge),
                description: r
                  ? w.a.createElement(
                      w.a.Fragment,
                      null,
                      w.a.createElement(
                        ee.a,
                        { style: et.progressBarContainer },
                        w.a.createElement(Me.a, {
                          colorValue: a ? te.a.theme.colors.gray400 : te.a.theme.colors.primary,
                          progress: n,
                          style: et.progressBar,
                        }),
                      ),
                      w.a.createElement(xe.b, { align: 'left', color: 'gray700', hoverLabel: { label: t } }, r),
                    )
                  : null,
                decoration: a ? null : w.a.createElement(ze.a, { style: [et.icon, et.decorationContainer] }),
              },
            ],
          }
        return w.a.createElement(qe.a, We()({}, i, { containerStyle: et.infoItem }))
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
        tt = a('WtWS'),
        at = (a('hBvt'), a('/yvb'))
      function nt(e) {
        var t = e.buttonString,
          a = e.buttonTestID,
          n = e.infoItemGroup,
          r = e.link,
          i = e.onButtonPress,
          l = e.withIcon,
          o = Object(ie.a)().width < te.a.theme.breakpoints.medium,
          c = o ? [rt.promotionInfoView, rt.promotionInfoViewNarrow] : rt.promotionInfoView
        return w.a.createElement(
          ee.a,
          { style: c },
          w.a.createElement(ee.a, { style: [rt.infoItemView, !o && rt.infoItemViewWide] }, n),
          w.a.createElement(
            ee.a,
            { style: o ? [rt.buttonViewNarrow, l && rt.buttonViewIcon] : rt.buttonViewWide },
            w.a.createElement(at.a, { link: r, onPress: i, size: 'large', testID: a, type: 'primaryFilled' }, t),
          ),
        )
      }
      var rt = te.a.create(function (e) {
          return {
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
            promotionInfoViewNarrow: { flexWrap: 'wrap' },
            infoItemView: { flexShrink: 'initial', flexWrap: 'wrap' },
            infoItemViewWide: { flexShrink: 'initial' },
            buttonViewNarrow: { marginTop: e.spaces.space16 },
            buttonViewIcon: { marginLeft: e.spaces.space48 },
            buttonViewWide: { margin: 'auto', marginLeft: e.spaces.space32 },
          }
        }),
        it = a('Irs7'),
        lt = a('yE5w'),
        ot = O.a.a63a89fe,
        ct = O.a.j401e4bc,
        st = O.a.e8adeec8,
        ut = O.a.ja781451
      function dt(e) {
        var t = Object(it.b)(),
          a = ut(X(e.impressions)),
          n = ut(X(e.engagements)),
          r = ct({ impressions: a, engagements: n }),
          i = {
            items: [
              {
                label: w.a.createElement(xe.b, { size: 'headline2', weight: 'heavy' }, ot),
                description: r,
                decoration: w.a.createElement(tt.a, { style: [mt.icon, mt.decorationContainer] }),
              },
            ],
          }
        var l = w.a.createElement(qe.a, We()({}, i, { containerStyle: mt.infoItem })),
          o = null !== Object(D.a)(),
          c = ''
            .concat(e.tweetPermalink, '/')
            .concat(o ? lt.a.Webview : lt.a.Rweb, '/')
            .concat(lt.c.Intro)
        return w.a.createElement(nt, {
          buttonString: st,
          infoItemGroup: l,
          link: c,
          onButtonPress: function () {
            t.scribe(N(e.userId, 'PromoteAgainButton'))
          },
          withIcon: !0,
        })
      }
      var mt = te.a.create(function (e) {
          return {
            infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' },
            decorationContainer: { height: e.spaces.space24, width: e.spaces.space24, marginRight: e.spaces.space24 },
            icon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.green500 },
          }
        }),
        pt = O.a.dcfb0332,
        ft = O.a.g6bf2fda,
        gt = O.a.df2c469a,
        yt = O.a.ja781451
      function bt(e) {
        var t = Object(it.b)(),
          a = null !== Object(D.a)(),
          n = yt(X(e.impressions)),
          r = ft({ impressions: n })
        var i = {
            items: [{ label: w.a.createElement(xe.b, { size: 'headline1', weight: 'heavy' }, pt), description: r }],
          },
          l = w.a.createElement(qe.a, We()({}, i, { containerStyle: ht.infoItem }))
        return w.a.createElement(nt, {
          buttonString: gt,
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
          withIcon: !1,
        })
      }
      var ht = te.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        vt = O.a.dcfb0332,
        wt = O.a.f96eec3c,
        Et = O.a.e9891f7c
      function kt(e) {
        var t = Object(it.b)(),
          a = {
            items: [{ label: w.a.createElement(xe.b, { size: 'headline1', weight: 'heavy' }, vt), description: wt }],
          }
        var n = w.a.createElement(qe.a, We()({}, a, { containerStyle: It.infoItem })),
          r = null !== Object(D.a)(),
          i = ''
            .concat(e.tweetPermalink, '/')
            .concat(r ? lt.a.Webview : lt.a.Rweb, '/')
            .concat(lt.c.Intro)
        return w.a.createElement(nt, {
          buttonString: Et,
          infoItemGroup: n,
          link: i,
          onButtonPress: function () {
            t.scribe(N(e.userId, 'NotStartedPromotionButton'))
          },
          withIcon: !1,
        })
      }
      var It = te.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        Pt = 'switchToProfessionalButton',
        _t = a('5emT'),
        Tt = O.a.jede3014,
        xt = O.a.i094e43b,
        Lt = O.a.f638d3e0
      function Ct(e) {
        var t = Object(it.b)(),
          a = {
            items: [
              {
                label: w.a.createElement(xe.b, { size: 'headline2', weight: 'heavy' }, Tt),
                description: xt,
                decoration: w.a.createElement(_t.a, { style: [Rt.icon, Rt.decorationContainer] }),
              },
            ],
          }
        return w.a.createElement(
          ee.a,
          { style: Rt.promotionInfoView },
          w.a.createElement(
            ee.a,
            { style: Rt.infoItemView },
            w.a.createElement(qe.a, We()({}, a, { containerStyle: Rt.infoItem })),
          ),
          w.a.createElement(
            ee.a,
            { style: Rt.buttonView },
            w.a.createElement(
              xe.b,
              {
                color: 'primary',
                link: 'https://twitter.com/adspolicy',
                onPress: function () {
                  t.scribe(N(e.userId, 'ReviewPolicyButton'))
                },
              },
              Lt,
            ),
          ),
        )
      }
      var St,
        Rt = te.a.create(function (e) {
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
        Vt = (a('enFi'), a('jAXQ')),
        At = a.n(Vt),
        Ft =
          (a('yH/f'),
          Object.freeze({
            notProfessional: 'not_professional',
            notStarted: 'not_started',
            underReview: 'under_review',
            running: 'running',
            completed: 'completed',
            paused: 'paused',
          })),
        Dt = void 0 !== St ? St : (St = a('+s2u'))
      function Bt(e) {
        var t,
          a,
          n,
          r,
          i = e.engagements,
          l = e.impressions,
          o = e.promotionInfoState,
          c = e.tweet,
          s = At()(Dt, e.campaignInfo)
        switch (o) {
          case Ft.notProfessional:
            return w.a.createElement(bt, {
              buttonTestID: Pt,
              impressions: null == l ? void 0 : l.value.total,
              tweet_id: c.id_str,
              userId: e.userId,
            })
          case Ft.notStarted:
            return w.a.createElement(kt, { tweetPermalink: c.permalink, userId: e.userId })
          case Ft.underReview:
            return w.a.createElement(Ct, { userId: e.userId })
          case Ft.running:
            return w.a.createElement(Ze, {
              end_time: null == s || null === (t = s.campaign) || void 0 === t ? void 0 : t.end_time,
              isPaused: !1,
              start_time: null == s || null === (a = s.campaign) || void 0 === a ? void 0 : a.start_time,
            })
          case Ft.completed:
            return w.a.createElement(dt, {
              engagements: null == i ? void 0 : i.value.promoted,
              impressions: null == l ? void 0 : l.value.promoted,
              tweetPermalink: c.permalink,
              userId: e.userId,
            })
          case Ft.paused:
            return w.a.createElement(Ze, {
              end_time: null == s || null === (n = s.campaign) || void 0 === n ? void 0 : n.end_time,
              isPaused: !0,
              start_time: null == s || null === (r = s.campaign) || void 0 === r ? void 0 : r.start_time,
            })
          default:
            return null
        }
      }
      var Ot,
        Kt,
        jt,
        Nt = a('Ud88'),
        Wt = a.n(Nt),
        zt = a('n0Rl'),
        Ht = a('Hsf0'),
        Qt = a.n(Ht),
        Mt = a('LLQb'),
        qt = O.a.deaf5b15,
        Gt = void 0 !== Ot ? Ot : (Ot = a('2O3u')),
        Ut = (void 0 !== Kt || (Kt = a('njVe')), void 0 !== jt ? jt : (jt = a('wfDE'))),
        Xt = Object(zt.b)(Ut, { errorConfig: { context: _ } })
      function Yt(e) {
        var t = e.hidePromotionInfo,
          a = e.quickPromoteEligibility,
          n = e.tweet,
          r = e.userId,
          i = Object(it.b)(),
          l = Wt()(),
          o = Object(I.useCreateLocalApiErrorHandler)(_)
        return (
          w.a.useEffect(
            function () {
              var e = o({ showToast: !1 })
              Te()(l, Ut, { restId: n.id_str }).subscribe({ error: e })
            },
            [n, l, o],
          ),
          w.a.createElement(Xt, {
            render: function (e) {
              if (e.fetchStatus === zt.a.FAILED) {
                var l = e.retry
                return (
                  i.scribe(W('NetworkError', r, n.id_str)),
                  w.a.createElement(Mt.a, { onRequestRetry: l, retryMessage: qt })
                )
              }
              if (e.fetchStatus === zt.a.LOADED) {
                var o,
                  c,
                  s =
                    null === (o = e.data) || void 0 === o || null === (c = o.tweet_result_by_rest_id) || void 0 === c
                      ? void 0
                      : c.result
                if ('Tweet' === (null == s ? void 0 : s.__typename)) {
                  var u = Qt()(Gt, s.analytics)
                  ;(null != u && u.metrics.length) || i.scribe(W('EmptyMetricsFromBackend', r, n.id_str))
                  var d = Zt(s.analytics),
                    m = d.detailExpands,
                    p = d.engagements,
                    f = d.follows,
                    g = d.impressions,
                    y = d.likes,
                    b = d.linkClicks,
                    h = d.mediaViews,
                    v = d.profileVisits,
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
                    ee.a,
                    { style: $t.tweetActivity },
                    w.a.createElement(
                      ee.a,
                      { style: $t.metricsView },
                      w.a.createElement(Ke, { likes: y, replies: E, retweets: k, showPromotionPercentages: P }),
                      w.a.createElement(ke, {
                        detailExpands: m,
                        engagements: p,
                        follows: f,
                        impressions: g,
                        linkClicks: b,
                        mediaViews: h,
                        profileVisits: v,
                        showPromotionPercentages: P,
                        tweet: n,
                      }),
                    ),
                    t || !I
                      ? null
                      : w.a.createElement(Bt, {
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
      var Jt = function (e, t) {
          return e
            ? e.metrics.find(function (e) {
                return e.key === t
              })
            : null
        },
        Zt = function (e) {
          var t = Qt()(Gt, e)
          return {
            detailExpands: Jt(t, 'DetailExpands'),
            engagements: Jt(t, 'Engagements'),
            follows: Jt(t, 'Follows'),
            impressions: Jt(t, 'Impressions'),
            likes: Jt(t, 'Favorites'),
            linkClicks: Jt(t, 'UrlClicks'),
            mediaViews: Jt(t, 'MediaViews'),
            profileVisits: Jt(t, 'UserProfileClicks'),
            replies: Jt(t, 'Replies'),
            retweets: Jt(t, 'Retweets'),
          }
        }
      var $t = te.a.create(function (e) {
          return { tweetActivity: { flex: 1 }, metricsView: { flexGrow: 1 } }
        }),
        ea = a('v6aA'),
        ta = a('E0cF'),
        aa = a('q9Zt'),
        na = ['data'],
        ra = O.a.g9079b93,
        ia = O.a.a57daeb1,
        la = O.a.deaf5b15,
        oa = (function (e) {
          f()(a, e)
          var t = y()(a)
          function a() {
            var e
            c()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(m()(e), '_handleFetchTweet', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler
                ;(0, t.fetchTweetIfNeeded)(t.statusId).catch(a(A.a))
              }),
              h()(m()(e), '_handleFetchQuickPromoteEligibility', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler
                return (0, t.fetchQuickPromoteEligibilityIfNeeded)({ statusId: t.statusId }).catch(a())
              }),
              h()(m()(e), '_render', function () {
                var t = e.props,
                  a = t.quickPromoteEligibility,
                  n = t.tweet,
                  r = (n && ta.a.getOriginalTweet(n)) || void 0
                return !r || (r && r.user.id_str !== e.context.loggedInUserId)
                  ? w.a.createElement(aa.a, { onRetry: null, title: ra })
                  : (e._scribeEligibility(),
                    w.a.createElement(
                      ee.a,
                      { style: ca.topLevelView },
                      w.a.createElement(
                        ee.a,
                        { style: ca.quoteTweet },
                        w.a.createElement(K.a, {
                          isCondensed: !0,
                          style: { cursor: 'default' },
                          tweetId: r.id_str,
                          withLink: !1,
                          withUserHoverCard: !1,
                        }),
                      ),
                      w.a.createElement(Yt, {
                        hidePromotionInfo: !1,
                        quickPromoteEligibility: a,
                        tweet: r,
                        userId: e.context.loggedInUserId || '',
                      }),
                    ))
              }),
              h()(m()(e), '_setAppBarRef', function (t) {
                e._appBarRef = t
              }),
              h()(m()(e), '_handleGoBack', function () {
                e.props.history.goBackThroughModals()
              }),
              h()(m()(e), '_scribeEligibility', function () {
                var t = e.props,
                  a = t.analytics,
                  n = t.quickPromoteEligibility
                a.scribe({ element: 'eligibility', action: 'view', data: { event_info: n || '' } })
              }),
              h()(m()(e), '_scribeDwellTime', function () {
                var t = e.props,
                  a = t.analytics,
                  n = t.tweet,
                  i = (n && ta.a.getOriginalTweet(n)) || void 0,
                  o = j(e._dwellStartTime),
                  c = o.data,
                  s = l()(o, na)
                a.scribe(r()(r()({}, s), {}, { data: r()(r()({}, c), {}, { items: i ? [z.a.getTweetItem(i)] : [] }) }))
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
                    r = (n && ta.a.getOriginalTweet(n)) || void 0,
                    i = null !== Object(D.a)()
                  return w.a.createElement(
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
                      title: i ? null : ia,
                    },
                    w.a.createElement(V.a, { fetchStatus: t, render: this._render, retryMessage: la }),
                  )
                },
              },
            ]),
            a
          )
        })(w.a.PureComponent)
      h()(oa, 'contextType', ea.a)
      var ca = te.a.create(function (e) {
          return { topLevelView: { flex: 1 }, quoteTweet: { margin: e.spaces.space16, marginBottom: e.spaces.space12 } }
        }),
        sa = R(oa)
      t.default = sa
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
        h = a('uCxL'),
        v = a('x5Pi'),
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
            g = i && Object(v.f)(i, m, t),
            y = g && Object(v.e)(g),
            E = d.isTrue('responsive_web_reactions_enabled')
          return c.a.createElement(
            h.a,
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
          h = b[0],
          v = b[1],
          w = p(function () {
            return a
          }),
          E = w[0],
          k = w[1]
        a !== E && (f.current.add(a), k(a), v(a))
        var I = u(
            function () {
              s.current && (f.current.add(g), v(g))
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
                f.current.add(i), v(i)
              }
            },
            [l, e, v, s],
          ),
          _ = m(!1)
        return (
          d(function () {
            return function () {
              _.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === _.current)
                return (
                  (_.current = !1),
                  void (
                    'NullQueryReference' !== h.kind &&
                    P(h.variables, { fetchPolicy: h.fetchPolicy, networkCacheConfig: h.networkCacheConfig })
                  )
                )
              var t = f.current
              if (s.current) {
                var a,
                  r = (0, n.default)(t)
                try {
                  for (r.s(); !(a = r.n()).done; ) {
                    var i = a.value
                    if (i === h) break
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
            [h, s, P, e],
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
          ['NullQueryReference' === h.kind ? null : h, P, I]
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
        h = a.n(b),
        v = a('pXBW'),
        w = a('6/RC'),
        E = a('UIzd'),
        k = a.n(E),
        I = a('kGix')
      a.d(t, 'a', function () {
        return I.a
      })
      var P = a('fs1G'),
        _ = a('0KEI'),
        T = a('lU4h'),
        x = a.n(T),
        L = a('21nk'),
        C = a.n(L),
        S = a('bCEw'),
        R = a.n(S),
        V = a('Ud88'),
        A = a.n(V),
        F = function (e) {
          return (0, e.render)({ fetchStatus: I.a.LOADING, data: null, error: null, retry: P.a })
        },
        D = (function (e) {
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
                    if (!(e instanceof v.a)) throw e
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
        })(h.a.Component),
        B = function (e) {
          var t = e.query,
            a = e.queryRef,
            n = e.render,
            r = C()(t, a)
          return n({ fetchStatus: I.a.LOADED, data: r, error: null, retry: P.a })
        },
        O = function (e, t) {
          if (w.canUseDOM)
            return function (a) {
              var n = a.fetchPolicy,
                i = void 0 === n ? 'store-or-network' : n,
                l = a.render,
                o = a.variables,
                c = R()(e),
                s = r()(c, 2),
                u = s[0],
                d = s[1],
                m = Object(_.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                p = x()(o),
                f = r()(p, 1)[0],
                g = h.a.useCallback(
                  function () {
                    d(f, { fetchPolicy: 'network-only' })
                  },
                  [d, f],
                )
              return (
                h.a.useLayoutEffect(
                  function () {
                    d(f, { fetchPolicy: i })
                  },
                  [i, d, f],
                ),
                u
                  ? h.a.createElement(
                      h.a.Suspense,
                      { fallback: h.a.createElement(F, { render: l }) },
                      h.a.createElement(
                        D,
                        { errorHandler: m(t.errorConfig.options || {}), key: u.fetchKey, retry: g },
                        function (t, a) {
                          return t
                            ? l({ fetchStatus: I.a.FAILED, error: t, data: null, retry: a })
                            : h.a.createElement(B, { query: e, queryRef: u, render: l })
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
              o = A()(),
              c = Object(_.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              s = x()(l),
              u = r()(s, 1)[0],
              d = a.get(o)
            if (d) return d
            var m = h.a.lazy(function () {
              return k()(o, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return i({ fetchStatus: I.a.LOADED, data: e, error: null, retry: P.a })
                  },
                  function (e) {
                    return e instanceof v.a
                      ? (c(t.errorConfig.options || {})(e),
                        i({ fetchStatus: I.a.FAILED, data: null, error: e, retry: P.a }))
                      : h.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: a.set(o, e).get.bind(a, o) }
                })
            })
            return h.a.createElement(h.a.Suspense, null, h.a.createElement(m, null))
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
                  { kind: 'Literal', name: 's', value: 43 },
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
                                ],
                                storageKey: null,
                              },
                              s,
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
          },
          params: {
            id: 'YBl1YqJGsv1sBeHsh1SbNA',
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
