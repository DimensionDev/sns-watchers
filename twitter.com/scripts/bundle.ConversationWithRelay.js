;(window.webpackJsonp = window.webpackJsonp || []).push([
  [47],
  {
    '+s2u': function (e, t, n) {
      'use strict'
      n.r(t)
      var r = {
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
      t.default = r
    },
    '21nk': function (e, t, n) {
      'use strict'
      var r = n('I9iR'),
        a = n('3KVO'),
        i = n('yLYC'),
        o = n('Ud88'),
        l = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        c = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        s = c.fetchQueryDeduped,
        u = c.fetchQuery
      e.exports = function (e, t, n) {
        l()
        var c,
          d = o(),
          p = t.fetchKey,
          m = t.fetchPolicy,
          f = t.source,
          y = t.variables,
          g = t.networkCacheConfig,
          b = i(e, y, g)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          b.request.node.params.name !== t.name && r(!1),
            (c = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: p,
              fetchObservable: s(d, b.request.identifier, function () {
                return d === t.environment && null != f
                  ? d.executeWithSource({ operation: b, source: f })
                  : d.execute({ operation: b })
              }),
              fetchPolicy: m,
              query: b,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var h = u(d, b)
          c = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != f && d === t.environment ? f.ifEmpty(h) : (t.environment, h),
            fetchKey: p,
            fetchPolicy: m,
            query: b,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return a(c)
      }
    },
    '23An': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = r.useEffect,
        i = r.useRef
      e.exports = function () {
        var e = i(!0)
        return (
          a(function () {
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
    '2O3u': function (e, t, n) {
      'use strict'
      n.r(t)
      var r = { kind: 'InlineDataFragment', name: 'TweetActivity_metrics', hash: '15b7c2798a31f76eb517582e90ab541d' }
      t.default = r
    },
    '8bFt': function (e, t, n) {
      'use strict'
      n('z84I')
      var r = n('ERkP'),
        a = n('3XMw'),
        i = n.n(a),
        o = n('rHpw'),
        l = n('MWbm'),
        c = n('t62R'),
        s = n('/yvb'),
        u = n('OiMc'),
        d = n('6s7X'),
        p = n('RjwM'),
        m = n('7Mjr'),
        f = n('WXWl'),
        y = i.a.affbaf62,
        g = i.a.c388d026,
        b = i.a.i2785008,
        h = i.a.d9687d23,
        v = i.a.ac73eb5a,
        w = i.a.c5a9f921,
        E = function (e) {
          var t = e.label,
            n = e.tooltip
          return n
            ? r.createElement(
                l.a,
                null,
                r.createElement(
                  u.a,
                  {
                    preferredVerticalOrientation: 'up',
                    renderContent: function (e) {
                      return r.createElement(
                        l.a,
                        { style: O.tooltip },
                        r.createElement(
                          l.a,
                          { style: O.tooltipTitle },
                          r.createElement(c.b, { size: 'title3', weight: 'heavy' }, t),
                        ),
                        r.createElement(
                          l.a,
                          { style: O.tooltipText },
                          r.createElement(c.b, { color: 'gray700', size: 'body', weight: 'normal' }, n),
                        ),
                        r.createElement(s.a, { onPress: e, type: 'primaryOutlined' }, g),
                      )
                    },
                    withArrow: !0,
                  },
                  r.createElement(d.a, {
                    accessibilityLabel: y,
                    accessibilityRole: 'tooltip',
                    style: O.iconInformation,
                  }),
                ),
              )
            : null
        },
        k = function (e) {
          var t = e.label,
            n = e.tooltip
          return t
            ? r.createElement(
                l.a,
                { style: O.labelBar },
                r.createElement(c.b, { color: 'gray700', size: 'subtext2', style: O.labelText, weight: 'medium' }, t),
                r.createElement(E, { label: t, tooltip: n }),
              )
            : null
        },
        I = function (e) {
          var t = e.unit
          return t ? r.createElement(c.b, { color: 'gray700', style: O.unitText, weight: 'medium' }, t) : null
        },
        P = function (e) {
          var t,
            n,
            a = e.trendValue
          return void 0 === a
            ? null
            : ((a = Math.round(100 * a) / 100),
              (t = b(a)),
              (n = (function (e) {
                if (e < 0) {
                  var t = b(e)
                  return h({ trendValueNegativePercent: t })
                }
                if (0 === e) return v
                var n = b(e)
                return w({ trendValuePositivePercent: n })
              })(a)),
              a < 0
                ? r.createElement(
                    l.a,
                    { accessibilityLabel: n, style: O.trendBar },
                    r.createElement(p.a, { style: O.trendIconNeg }),
                    r.createElement(
                      c.b,
                      { accessibilityHidden: !0, color: 'red500', size: 'body', weight: 'medium' },
                      t,
                    ),
                  )
                : 0 === a
                ? r.createElement(
                    l.a,
                    { accessibilityLabel: n, style: O.trendBar },
                    r.createElement(m.a, { style: O.trendIconZero }),
                    r.createElement(
                      c.b,
                      { accessibilityHidden: !0, color: 'gray700', size: 'body', weight: 'medium' },
                      t,
                    ),
                  )
                : r.createElement(
                    l.a,
                    { accessibilityLabel: n, style: O.trendBar },
                    r.createElement(f.a, { style: O.trendIconPos }),
                    r.createElement(
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
                return r.createElement(
                  l.a,
                  { accessibilityLabel: e.accessibilityLabel, key: t, style: O.subTextListItem },
                  e.icon,
                  r.createElement(
                    c.b,
                    { accessibilityHidden: !(void 0 === e.accessibilityLabel), color: e.color },
                    e.text,
                  ),
                )
              })
            : null
        },
        O = o.a.create(function (e) {
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
          n = e.size,
          a = e.subTextList,
          i = e.tooltip,
          o = e.trendValue,
          s = e.unit,
          u = e.value
        return r.createElement(
          l.a,
          { style: O.dataPoint },
          r.createElement(k, { label: t, tooltip: i }),
          r.createElement(
            l.a,
            { style: O.valueBar },
            r.createElement(c.b, { size: n, weight: 'bold' }, u),
            r.createElement(I, { unit: s }),
            r.createElement(P, { trendValue: o }),
          ),
          r.createElement(_, { subTextList: a }),
        )
      }
    },
    LlZX: function (e, t, n) {
      'use strict'
      n('M+/F')
      t.a = function (e, t) {
        var n = null == e ? 0 : e.length
        if (!n || t < 1) return []
        for (var r = 0, a = 0, i = new Array(Math.ceil(n / t)); r < n; ) (i[a] = e.slice(r, (r += t))), (a += 1)
        return i
      }
    },
    Pe39: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ConversationAnalyticsScreen', function () {
          return nn
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('m3Bd'),
        a = n.n(r),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('N+ot'),
        f = n.n(m),
        y = n('AuHH'),
        g = n.n(y),
        b = n('KEM+'),
        h = n.n(b),
        v = (n('2G9S'), n('ERkP')),
        w = (n('WNMA'), n('KqXw'), n('XOJV')),
        E = n('rxPX'),
        k = n('0KEI'),
        I = n('S3l+'),
        P = 'CONVERSATION_ANALYTICS_SCREEN',
        _ = function (e, t) {
          return t.match.params.statusId
        },
        O = function (e, t) {
          return w.a.selectHydrated(e, _(0, t))
        },
        x = function (e, t) {
          return w.a.selectFetchStatus(e, _(0, t))
        },
        L = Object(E.a)()
          .propsFromState(function () {
            return {
              fetchStatus: x,
              professionalEligibilityFetchStatus: I.l,
              statusId: _,
              tweet: O,
              professionalEligibility: I.k,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(P),
              fetchTweetIfNeeded: w.a.fetchOneIfNeeded,
              fetchProfessionalEligibilityIfNeeded: I.g,
            }
          })
          .withAnalytics({ page: 'tweet', section: 'analytics', component: 'RwebConversationAnalytics' }),
        T = n('v//M'),
        R = n('W5XZ'),
        S = n('jHSc'),
        C = n('KUGV'),
        j = n('3XMw'),
        V = n.n(j),
        F = n('b5s6')
      function A(e) {
        var t = Date.now() - e
        return { action: 'view', data: { event_info: JSON.stringify({ duration_ms: t }) } }
      }
      function D(e, t) {
        return { element: t, action: 'click', data: { profile_id: e } }
      }
      var B = n('Rp9C'),
        K = (n('jQ3i'), n('hBpG'), n('v6aA')),
        H = (n('z84I'), n('LlZX')),
        W = n('x0mb'),
        N = n('RhWx'),
        z = n.n(N),
        M = n('MWbm'),
        Q = n('rHpw'),
        q = n('8bFt'),
        U = V.a.ja781451,
        G = V.a.cfa1a7b8
      function X(e) {
        return e || 0
      }
      function Z(e, t) {
        var n = X(t)
        return 0 === n ? 0 : X(e) / n
      }
      function J(e) {
        var t = X(e)
        return t >= 1e5 ? G(t) : U(t)
      }
      function Y(e) {
        return {
          count: J(null == e ? void 0 : e.value.total),
          promotionPercentage: Z(null == e ? void 0 : e.value.promoted, null == e ? void 0 : e.value.total),
        }
      }
      var $ = function (e) {
          var t = e.isSmall,
            n = e.label,
            r = e.metric,
            a = e.showPromotionPercentages,
            i = e.tooltip,
            o = Z(null == r ? void 0 : r.value.promoted, null == r ? void 0 : r.value.total),
            l = z()(a ? be(o, !0) : [])
          return v.createElement(
            M.a,
            { style: [ee.dataPoint, { marginBottom: t ? Q.a.theme.spaces.space24 : Q.a.theme.spaces.space40 }] },
            v.createElement(q.a, {
              label: n,
              size: 'title1',
              subTextList: l,
              tooltip: i,
              value: J(null == r ? void 0 : r.value.total),
            }),
          )
        },
        ee = Q.a.create(function (e) {
          return { dataPoint: { marginRight: e.spaces.space56 } }
        }),
        te = function (e) {
          var t = e.label,
            n = e.metric,
            r = e.showPromotionPercentages,
            a = e.tooltip,
            i = Z(null == n ? void 0 : n.value.promoted, null == n ? void 0 : n.value.total),
            o = z()(r ? be(i, !1) : [])
          return v.createElement(
            M.a,
            { style: ne.dataPoint },
            v.createElement(q.a, {
              label: t,
              size: 'title3',
              subTextList: o,
              tooltip: a,
              value: J(null == n ? void 0 : n.value.total),
            }),
          )
        },
        ne = Q.a.create(function (e) {
          return { dataPoint: { flexGrow: 1, marginRight: e.spaces.space48 } }
        }),
        re = n('0ig/'),
        ae = V.a.e5fe61ef,
        ie = V.a.f6162a32,
        oe = V.a.d8abdaa4,
        le = V.a.de0de3a7,
        ce = V.a.aeee0181,
        se = V.a.ccab7c76,
        ue = V.a.b1b4d57d,
        de = V.a.i680442e,
        pe = V.a.d5f1e553,
        me = V.a.d24b7811,
        fe = V.a.i2785008,
        ye = V.a.g33fd6b0
      V.a.b71059c3
      function ge(e) {
        var t,
          n,
          r = e.follows,
          a = e.impressions,
          i = e.linkClicks,
          o = e.mediaViews,
          l = e.profileVisits,
          c = e.showPromotionPercentages,
          s = e.tweet,
          u = Object(re.a)().width < Q.a.theme.breakpoints.xSmall,
          d = !(null == s || null === (t = s.entities) || void 0 === t || !t.urls) && s.entities.urls.length > 0,
          p =
            !(null == s || null === (n = s.extended_entities) || void 0 === n || !n.media) &&
            s.extended_entities.media.filter(function (e) {
              return 'video' === e.type
            }).length > 0,
          m = [
            v.createElement(te, { key: oe, label: oe, metric: r, showPromotionPercentages: c, tooltip: le }),
            v.createElement(te, { key: ce, label: ce, metric: l, showPromotionPercentages: c, tooltip: se }),
            p ? v.createElement(te, { key: ue, label: ue, metric: o, showPromotionPercentages: c, tooltip: de }) : null,
            d ? v.createElement(te, { key: pe, label: pe, metric: i, showPromotionPercentages: c, tooltip: me }) : null,
          ].filter(function (e) {
            return e
          }),
          f = Math.ceil(m.length / 2) - 1
        return v.createElement(
          M.a,
          {
            style: [
              he.outerBox,
              { marginTop: u ? Q.a.theme.spaces.space24 : Q.a.theme.spaces.space40 },
              { marginHorizontal: u ? Q.a.theme.spaces.space16 : Q.a.theme.spaces.space32 },
            ],
          },
          v.createElement($, { isSmall: u, label: ae, metric: a, showPromotionPercentages: c, tooltip: ie }),
          v.createElement(
            M.a,
            { style: he.minorMetrics },
            Object(H.a)(m, 2).map(function (e, t) {
              return v.createElement(
                M.a,
                {
                  key: 'dataPointGridRow'.concat(t),
                  style: [he.row, t < f && { paddingBottom: u ? Q.a.theme.spaces.space24 : Q.a.theme.spaces.space40 }],
                },
                e,
              )
            }),
          ),
        )
      }
      function be(e, t) {
        var n = fe(e),
          r = ye({ percentage: n })
        return [
          {
            accessibilityLabel: r,
            color: 'primary',
            text: t ? r : n,
            icon: v.createElement(W.a, { style: he.promotionIcon }),
          },
        ]
      }
      var he = Q.a.create(function (e) {
          return {
            outerBox: {
              display: 'flex',
              flexGrow: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignContent: 'flex-start',
            },
            minorMetrics: { flexGrow: 1, display: 'flex' },
            row: { flexGrow: 1, display: 'flex', flexDirection: 'row' },
            promotionIcon: { fontSize: e.spaces.space4, color: e.colors.primary, marginRight: e.spaces.space4 },
          }
        }),
        ve = n('UIzd'),
        we = n.n(ve),
        Ee = (n('uFXj'), n('t62R')),
        ke = n('LbZ7'),
        Ie = n('iEUn'),
        Pe = n('jlPL'),
        _e = n('dFWS'),
        Oe = V.a.ib1f8491,
        xe = V.a.fbdb85f4,
        Le = V.a.d0eeb126,
        Te = V.a.i2785008,
        Re = V.a.g33fd6b0
      function Se(e) {
        var t = e.percentageValue,
          n = Te(t),
          r = Re({ percentage: n })
        return v.createElement(
          M.a,
          { accessibilityLabel: r, style: je.percentageView },
          v.createElement(W.a, { style: je.promotionIcon }),
          v.createElement(Ee.b, { accessibilityHidden: !0, color: 'primary' }, n),
        )
      }
      function Ce(e) {
        var t = e.likes,
          n = e.replies,
          r = e.retweets,
          a = e.showPromotionPercentages,
          i = Y(t),
          o = i.count,
          l = i.promotionPercentage,
          c = Y(r),
          s = c.count,
          u = c.promotionPercentage,
          d = Y(n),
          p = d.count,
          m = d.promotionPercentage
        return v.createElement(
          M.a,
          { style: je.actionsBar },
          v.createElement(
            ke.a,
            null,
            v.createElement(
              M.a,
              { accessibilityLabel: Oe({ likeCount: o }), style: je.column },
              v.createElement(Ie.a, { style: je.actionIconsColor }),
              v.createElement(Ee.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, o),
              a ? v.createElement(Se, { percentageValue: l }) : null,
            ),
            v.createElement(
              M.a,
              { accessibilityLabel: xe({ retweetCount: s }), style: je.column },
              v.createElement(Pe.a, { style: je.actionIconsColor }),
              v.createElement(Ee.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, s),
              a ? v.createElement(Se, { percentageValue: u }) : null,
            ),
            v.createElement(
              M.a,
              { accessibilityLabel: Le({ replyCount: p }), style: je.column },
              v.createElement(_e.a, { style: je.actionIconsColor }),
              v.createElement(Ee.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, p),
              a ? v.createElement(Se, { percentageValue: m }) : null,
            ),
          ),
        )
      }
      var je = Q.a.create(function (e) {
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
        Ve = n('97Jx'),
        Fe = n.n(Ve),
        Ae = n('Wc+h'),
        De = n('gmpV'),
        Be = n('876e'),
        Ke = n('JYMr'),
        He = n('h0NW'),
        We = V.a.db6efeb8,
        Ne = V.a.j6daea85,
        ze = V.a.jade381b,
        Me = V.a.d725a288,
        Qe = V.a.hf9ed10f
      function qe(e) {
        var t = e.end_time,
          n = e.isPaused,
          r = e.start_time,
          a = t ? new Date(t) : null,
          i = r ? new Date(r) : null,
          o = !!a && a > new Date(Date.now()),
          l = a && i ? Object(De.a)(new Date(i), new Date(a)) : 0,
          c = t && o ? Be.a.getTimeLeftLabel(t) : null,
          s = a ? Me(a) : '',
          u = a ? ze(a) : '',
          d = Qe({ endTimeString: s, endDateString: u })
        return v.createElement(
          M.a,
          { style: Ge.promotionInfoView },
          v.createElement(
            M.a,
            { style: Ge.infoItemView },
            v.createElement(Ue, { endTimeLabel: d, isPaused: n, percentagePassed: l, timeLeftLabel: c }),
          ),
        )
      }
      function Ue(e) {
        var t = e.endTimeLabel,
          n = e.isPaused,
          r = e.percentagePassed,
          a = e.timeLeftLabel,
          i = {
            items: [
              {
                label: v.createElement(Ee.b, { size: 'headline2', weight: 'heavy' }, n ? Ne : We),
                description: a
                  ? v.createElement(
                      v.Fragment,
                      null,
                      v.createElement(
                        M.a,
                        { style: Ge.progressBarContainer },
                        v.createElement(Ke.a, {
                          colorValue: n ? Q.a.theme.colors.gray400 : Q.a.theme.colors.primary,
                          progress: r,
                          style: Ge.progressBar,
                        }),
                      ),
                      v.createElement(Ee.b, { align: 'left', color: 'gray700', hoverLabel: { label: t } }, a),
                    )
                  : null,
                decoration: n ? null : v.createElement(Ae.a, { style: [Ge.icon, Ge.decorationContainer] }),
              },
            ],
          }
        return v.createElement(He.a, Fe()({}, i, { containerStyle: Ge.infoItem }))
      }
      var Ge = Q.a.create(function (e) {
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
        Xe = n('WtWS'),
        Ze = (n('hBvt'), n('/yvb'))
      function Je(e) {
        var t = e.buttonString,
          n = e.infoItemGroup,
          r = e.link,
          a = e.onButtonPress,
          i = e.withIcon,
          o = Object(re.a)().width < Q.a.theme.breakpoints.medium,
          l = o ? [Ye.promotionInfoView, Ye.promotionInfoViewNarrow] : Ye.promotionInfoView
        return v.createElement(
          M.a,
          { style: l },
          v.createElement(M.a, { style: [Ye.infoItemView, !o && Ye.infoItemViewWide] }, n),
          v.createElement(
            M.a,
            { style: o ? [Ye.buttonViewNarrow, i && Ye.buttonViewIcon] : Ye.buttonViewWide },
            v.createElement(Ze.a, { link: r, onPress: a, size: 'large', type: 'primaryFilled' }, t),
          ),
        )
      }
      var Ye = Q.a.create(function (e) {
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
        $e = n('Irs7'),
        et = n('yE5w'),
        tt = V.a.a63a89fe,
        nt = V.a.f4e13456,
        rt = V.a.e8adeec8,
        at = V.a.ja781451
      function it(e) {
        var t = Object($e.b)(),
          n = at(X(e.impressions)),
          r = nt({ impressions: n }),
          a = {
            items: [
              {
                label: v.createElement(Ee.b, { size: 'headline2', weight: 'heavy' }, tt),
                description: r,
                decoration: v.createElement(Xe.a, { style: [ot.icon, ot.decorationContainer] }),
              },
            ],
          }
        var i = v.createElement(He.a, Fe()({}, a, { containerStyle: ot.infoItem })),
          o = null !== Object(C.a)(),
          l = ''
            .concat(e.tweetPermalink, '/')
            .concat(o ? et.a.Webview : et.a.Rweb, '/')
            .concat(et.c.Intro)
        return v.createElement(Je, {
          buttonString: rt,
          infoItemGroup: i,
          link: l,
          onButtonPress: function () {
            t.scribe(D(e.userId, 'PromoteAgainButton'))
          },
          withIcon: !0,
        })
      }
      var ot = Q.a.create(function (e) {
          return {
            infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' },
            decorationContainer: { height: e.spaces.space24, width: e.spaces.space24, marginRight: e.spaces.space24 },
            icon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.green500 },
          }
        }),
        lt = V.a.dcfb0332,
        ct = V.a.g6bf2fda,
        st = V.a.df2c469a,
        ut = V.a.ja781451
      function dt(e) {
        var t = Object($e.b)(),
          n = null !== Object(C.a)(),
          r = ut(X(e.impressions)),
          a = ct({ impressions: r })
        var i = {
            items: [{ label: v.createElement(Ee.b, { size: 'headline1', weight: 'heavy' }, lt), description: a }],
          },
          o = v.createElement(He.a, Fe()({}, i, { containerStyle: pt.infoItem }))
        return v.createElement(Je, {
          buttonString: st,
          infoItemGroup: o,
          link: {
            pathname: '/i/flow/convert_to_professional',
            state: { input: { requested_variant: 'qp-'.concat(e.tweet_id, '-').concat(n ? 'true' : 'false') } },
            method: 'push',
          },
          onButtonPress: function () {
            t.scribe(D(e.userId, 'SwitchToProfessionalButton'))
          },
          withIcon: !1,
        })
      }
      var pt = Q.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        mt = V.a.dcfb0332,
        ft = V.a.f96eec3c,
        yt = V.a.e9891f7c
      function gt(e) {
        var t = Object($e.b)(),
          n = { items: [{ label: v.createElement(Ee.b, { size: 'headline1', weight: 'heavy' }, mt), description: ft }] }
        var r = v.createElement(He.a, Fe()({}, n, { containerStyle: bt.infoItem })),
          a = null !== Object(C.a)(),
          i = ''
            .concat(e.tweetPermalink, '/')
            .concat(a ? et.a.Webview : et.a.Rweb, '/')
            .concat(et.c.Intro)
        return v.createElement(Je, {
          buttonString: yt,
          infoItemGroup: r,
          link: i,
          onButtonPress: function () {
            t.scribe(D(e.userId, 'NotStartedPromotionButton'))
          },
          withIcon: !1,
        })
      }
      var bt = Q.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        ht = n('5emT'),
        vt = V.a.jede3014,
        wt = V.a.i094e43b,
        Et = V.a.f638d3e0
      function kt(e) {
        var t = Object($e.b)(),
          n = {
            items: [
              {
                label: v.createElement(Ee.b, { size: 'headline2', weight: 'heavy' }, vt),
                description: wt,
                decoration: v.createElement(ht.a, { style: [Pt.icon, Pt.decorationContainer] }),
              },
            ],
          }
        return v.createElement(
          M.a,
          { style: Pt.promotionInfoView },
          v.createElement(
            M.a,
            { style: Pt.infoItemView },
            v.createElement(He.a, Fe()({}, n, { containerStyle: Pt.infoItem })),
          ),
          v.createElement(
            M.a,
            { style: Pt.buttonView },
            v.createElement(
              Ee.b,
              {
                color: 'primary',
                link: 'https://twitter.com/adspolicy',
                onPress: function () {
                  t.scribe(D(e.userId, 'ReviewPolicyButton'))
                },
              },
              Et,
            ),
          ),
        )
      }
      var It,
        Pt = Q.a.create(function (e) {
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
        _t = (n('enFi'), n('jAXQ')),
        Ot = n.n(_t),
        xt =
          (n('yH/f'),
          Object.freeze({
            notStarted: 'not_started',
            underReview: 'under_review',
            running: 'running',
            completed: 'completed',
            paused: 'paused',
          })),
        Lt = void 0 !== It ? It : (It = n('+s2u'))
      function Tt(e) {
        var t,
          n,
          r,
          a,
          i = e.impressions,
          o = e.isUserProfessional,
          l = e.promotionInfoState,
          c = e.tweet,
          s = Ot()(Lt, e.campaignInfo)
        if (!o)
          return v.createElement(dt, {
            impressions: null == i ? void 0 : i.value.total,
            tweet_id: c.id_str,
            userId: e.userId,
          })
        switch (l) {
          case xt.notStarted:
            return v.createElement(gt, { tweetPermalink: c.permalink, userId: e.userId })
          case xt.underReview:
            return v.createElement(kt, { userId: e.userId })
          case xt.running:
            return v.createElement(qe, {
              end_time: null == s || null === (t = s.campaign) || void 0 === t ? void 0 : t.end_time,
              isPaused: !1,
              start_time: null == s || null === (n = s.campaign) || void 0 === n ? void 0 : n.start_time,
            })
          case xt.completed:
            return v.createElement(it, {
              impressions: null == i ? void 0 : i.value.promoted,
              tweetPermalink: c.permalink,
              userId: e.userId,
            })
          case xt.paused:
            return v.createElement(qe, {
              end_time: null == s || null === (r = s.campaign) || void 0 === r ? void 0 : r.end_time,
              isPaused: !0,
              start_time: null == s || null === (a = s.campaign) || void 0 === a ? void 0 : a.start_time,
            })
          default:
            return null
        }
      }
      var Rt,
        St,
        Ct,
        jt = n('Ud88'),
        Vt = n.n(jt),
        Ft = n('n0Rl'),
        At = n('Hsf0'),
        Dt = n.n(At),
        Bt = n('LLQb'),
        Kt = V.a.deaf5b15,
        Ht = void 0 !== Rt ? Rt : (Rt = n('2O3u')),
        Wt = void 0 !== St ? St : (St = n('njVe')),
        Nt = void 0 !== Ct ? Ct : (Ct = n('wfDE')),
        zt = Object(Ft.b)(Nt, { errorConfig: { context: P } })
      function Mt(e) {
        var t,
          n = e.hidePromotionInfo,
          r = e.professionalEligibility,
          a = e.tweet,
          i = e.userId,
          o = v.useContext(K.a).featureSwitches.isTrue('responsive_web_qp_pa_signup_enabled'),
          l = !!r || !o,
          c =
            !a.is_quote_status &&
            (null == r || null === (t = r.quick_promote_eligibility) || void 0 === t ? void 0 : t.is_eligible),
          s = n || (l && !c && o),
          u = Vt()(),
          d = Object(k.useCreateLocalApiErrorHandler)(P)
        return (
          v.useEffect(
            function () {
              var e = d({ showToast: !1 })
              we()(u, Nt, { restId: a.id_str }).subscribe({ error: e })
            },
            [a, u, d],
          ),
          v.createElement(zt, {
            render: function (e) {
              if (e.fetchStatus === Ft.a.FAILED) {
                var t = e.retry
                return v.createElement(Bt.a, { onRequestRetry: t, retryMessage: Kt })
              }
              if (e.fetchStatus === Ft.a.LOADED) {
                var n,
                  r,
                  o =
                    null === (n = e.data) || void 0 === n || null === (r = n.tweet_result_by_rest_id) || void 0 === r
                      ? void 0
                      : r.result
                if ('Tweet' === (null == o ? void 0 : o.__typename)) {
                  var c =
                      ((E = o.quick_promotion),
                      null == (_ = Dt()(Wt, E)) || 'Rejected' === _.approval_status
                        ? 'not_started'
                        : 'UnderReview' === _.approval_status
                        ? 'under_review'
                        : 'Running' === (null === (k = _.campaign) || void 0 === k ? void 0 : k.status)
                        ? 'running'
                        : 'Paused' === (null === (I = _.campaign) || void 0 === I ? void 0 : I.status)
                        ? 'paused'
                        : ['Exhausted', 'Expired'].includes(
                            null === (P = _.campaign) || void 0 === P ? void 0 : P.status,
                          )
                        ? 'completed'
                        : 'not_started'),
                    u = qt(o.analytics),
                    d = u.follows,
                    p = u.impressions,
                    m = u.likes,
                    f = u.linkClicks,
                    y = u.mediaViews,
                    g = u.profileVisits,
                    b = u.replies,
                    h = u.retweets,
                    w = ['running', 'completed', 'paused'].includes(c)
                  return v.createElement(
                    M.a,
                    { style: Ut.tweetActivity },
                    v.createElement(
                      M.a,
                      { style: Ut.metricsView },
                      v.createElement(Ce, { likes: m, replies: b, retweets: h, showPromotionPercentages: w }),
                      v.createElement(ge, {
                        follows: d,
                        impressions: p,
                        linkClicks: f,
                        mediaViews: y,
                        profileVisits: g,
                        showPromotionPercentages: w,
                        tweet: a,
                      }),
                    ),
                    s
                      ? null
                      : v.createElement(Tt, {
                          campaignInfo: o.quick_promotion,
                          impressions: p,
                          isUserProfessional: l,
                          promotionInfoState: c,
                          tweet: a,
                          userId: i,
                        }),
                  )
                }
              }
              var E, k, I, P, _
              return null
            },
            variables: { restId: a.id_str },
          })
        )
      }
      var Qt = function (e, t) {
          return e
            ? e.metrics.find(function (e) {
                return e.key === t
              })
            : null
        },
        qt = function (e) {
          var t = Dt()(Ht, e)
          return {
            follows: Qt(t, 'Follows'),
            impressions: Qt(t, 'Impressions'),
            likes: Qt(t, 'Favorites'),
            linkClicks: Qt(t, 'UrlClicks'),
            mediaViews: Qt(t, 'MediaViews'),
            profileVisits: Qt(t, 'UserProfileClicks'),
            replies: Qt(t, 'Replies'),
            retweets: Qt(t, 'Retweets'),
          }
        }
      var Ut = Q.a.create(function (e) {
          return { tweetActivity: { flex: 1 }, metricsView: { flexGrow: 1 } }
        }),
        Gt = n('E0cF'),
        Xt = n('q9Zt')
      function Zt(e, t) {
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
      function Jt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Zt(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Zt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Yt(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = g()(e)
          if (t) {
            var a = g()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var $t = V.a.g9079b93,
        en = V.a.a57daeb1,
        tn = V.a.deaf5b15,
        nn = (function (e) {
          p()(n, e)
          var t = Yt(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(u()(e), '_handleFetchTweet', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchTweetIfNeeded)(t.statusId).catch(n(R.a))
              }),
              h()(u()(e), '_handleFetchProfessionalEligibility', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                return (0, t.fetchProfessionalEligibilityIfNeeded)().catch(n())
              }),
              h()(u()(e), '_render', function () {
                var t = e.props,
                  n = t.professionalEligibility,
                  r = t.tweet,
                  a = (r && Gt.a.getOriginalTweet(r)) || void 0
                return !a || (a && a.user.id_str !== e.context.loggedInUserId)
                  ? v.createElement(Xt.a, { onRetry: null, title: $t })
                  : v.createElement(
                      M.a,
                      { style: rn.topLevelView },
                      v.createElement(
                        M.a,
                        { style: rn.quoteTweet },
                        v.createElement(F.a, {
                          isCondensed: !0,
                          style: { cursor: 'default' },
                          tweetId: a.id_str,
                          withLink: !1,
                          withUserHoverCard: !1,
                        }),
                      ),
                      v.createElement(Mt, {
                        hidePromotionInfo: !1,
                        professionalEligibility: n,
                        tweet: a,
                        userId: e.context.loggedInUserId || '',
                      }),
                    )
              }),
              h()(u()(e), '_setAppBarRef', function (t) {
                e._appBarRef = t
              }),
              h()(u()(e), '_handleGoBack', function () {
                var t = e.props,
                  n = t.history,
                  r = t.location
                n.goBackThroughModals({ location: r })
              }),
              h()(u()(e), '_scribeDwellTime', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.tweet,
                  i = (r && Gt.a.getOriginalTweet(r)) || void 0,
                  o = A(e._dwellStartTime),
                  l = o.data,
                  c = a()(o, ['data'])
                n.scribe(Jt(Jt({}, c), {}, { data: Jt(Jt({}, l), {}, { items: i ? [B.a.getTweetItem(i)] : [] }) }))
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchTweet(),
                    this._handleFetchProfessionalEligibility(),
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
                    n = e.history,
                    r = e.tweet,
                    a = (r && Gt.a.getOriginalTweet(r)) || void 0,
                    i = null !== Object(C.a)()
                  return v.createElement(
                    S.b,
                    {
                      appBarRef: this._setAppBarRef,
                      backLocation: a ? a.permalink : '/',
                      hideBackButton: i,
                      history: n,
                      onBackClick: this._handleGoBack,
                      renderHeader: function (e) {
                        return i ? null : e
                      },
                      title: i ? null : en,
                    },
                    v.createElement(T.a, { fetchStatus: t, render: this._render, retryMessage: tn }),
                  )
                },
              },
            ]),
            n
          )
        })(v.PureComponent)
      h()(nn, 'contextType', K.a)
      var rn = Q.a.create(function (e) {
          return { topLevelView: { flex: 1 }, quoteTweet: { margin: e.spaces.space16, marginBottom: e.spaces.space12 } }
        }),
        an = L(nn)
      t.default = an
    },
    RjwM: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ERkP'),
        o = n('Lsrn'),
        l = n('k/Ka')
      function c(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(l.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M18.707 13.293c-.39-.39-1.023-.39-1.414 0L13 17.586V5c0-.553-.447-1-1-1s-1 .447-1 1v12.586l-4.293-4.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293l6-6c.39-.39.39-1.023 0-1.414z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    WXWl: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ERkP'),
        o = n('Lsrn'),
        l = n('k/Ka')
      function c(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(l.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M18.707 10.293l-6-6c-.39-.39-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L11 7.414V20c0 .553.447 1 1 1s1-.447 1-1V7.414l4.293 4.293c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    b5s6: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('ERkP'),
        c = n('v6aA'),
        s = n('XOJV'),
        u = n('eSoz'),
        d = n('rxPX'),
        p = n('0KEI'),
        m = function (e, t) {
          return t.tweetId
        },
        f = function (e, t) {
          var n = t.tweetId,
            r = n && s.a.select(e, n)
          return r ? Object(u.f)(e, r) : void 0
        },
        y = Object(d.a)()
          .propsFromState(function () {
            return { community: f, hydratedTweet: s.a.createHydratedTweetSelector(m) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: u.b.fetchOneIfNeeded,
            }
          }),
        g = n('YeIG'),
        b = n('uCxL'),
        h = n('x5Pi'),
        v = y(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            s =
              (e.tweetId,
              o()(e, [
                'community',
                'createLocalApiErrorHandler',
                'fetchCommunityIfNeeded',
                'hydratedTweet',
                'tweetId',
              ])),
            u = l.useContext(c.a),
            d = u.featureSwitches,
            p = u.loggedInUserId,
            m = null == i ? void 0 : i.community_id_str
          l.useEffect(
            function () {
              m && Object(g.a)(t) && r(m).catch(n())
            },
            [t, m, n, r],
          )
          var f = d.isTrue('responsive_web_alt_text_badge_enabled'),
            y = i && Object(h.f)(i, p, t),
            v = y && Object(h.e)(y),
            w = d.isTrue('responsive_web_reactions_enabled')
          return l.createElement(
            b.a,
            a()({}, s, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: f,
              socialContextProps: v,
              tweet: i,
              withReactions: w,
            }),
          )
        })
      t.a = v
    },
    bCEw: function (e, t, n) {
      'use strict'
      var r = n('IGGJ')(n('K1iM')),
        a = n('23An'),
        i = n('Ud88'),
        o = n('aQQo'),
        l = o.loadQuery,
        c = o.useTrackLoadQueryInRender,
        s = n('ERkP'),
        u = s.useCallback,
        d = s.useEffect,
        p = s.useRef,
        m = s.useState,
        f = n('K1lQ').getRequest,
        y = { kind: 'NullQueryReference' }
      function g(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== f(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var n = null != t ? t : y,
          o = i()
        c()
        var s = a(),
          f = p(new Set([n])),
          b = m(function () {
            return n
          }),
          h = b[0],
          v = b[1],
          w = m(function () {
            return n
          }),
          E = w[0],
          k = w[1]
        n !== E && (f.current.add(n), k(n), v(n))
        var I = u(
            function () {
              s.current && (f.current.add(y), v(y))
            },
            [s],
          ),
          P = u(
            function (t, n) {
              var r =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (s.current) {
                var a,
                  i = l(null !== (a = null == n ? void 0 : n.__environment) && void 0 !== a ? a : o, e, t, r)
                f.current.add(i), v(i)
              }
            },
            [o, e, v, s],
          ),
          _ = p(!1)
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
                var n,
                  a = (0, r.default)(t)
                try {
                  for (a.s(); !(n = a.n()).done; ) {
                    var i = n.value
                    if (i === h) break
                    t.delete(i),
                      'NullQueryReference' !== i.kind &&
                        (g(e) ? i.dispose && i.dispose() : i.releaseQuery && i.releaseQuery())
                  }
                } catch (o) {
                  a.e(o)
                } finally {
                  a.f()
                }
              }
            },
            [h, s, P, e],
          ),
          d(
            function () {
              return function () {
                var t,
                  n = (0, r.default)(f.current)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var a = t.value
                    'NullQueryReference' !== a.kind &&
                      (g(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery())
                  }
                } catch (i) {
                  n.e(i)
                } finally {
                  n.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === h.kind ? null : h, P, I]
        )
      }
    },
    n0Rl: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return K
      })
      n('OZaJ')
      var r = n('ddV6'),
        a = n.n(r),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('N+ot'),
        f = n.n(m),
        y = n('AuHH'),
        g = n.n(y),
        b = n('KEM+'),
        h = n.n(b),
        v = (n('2G9S'), n('ZUdG'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        w = n('pXBW'),
        E = n('6/RC'),
        k = n('UIzd'),
        I = n.n(k),
        P = n('kGix')
      n.d(t, 'a', function () {
        return P.a
      })
      var _ = n('fs1G'),
        O = n('0KEI'),
        x = n('lU4h'),
        L = n.n(x),
        T = n('21nk'),
        R = n.n(T),
        S = n('bCEw'),
        C = n.n(S),
        j = n('Ud88'),
        V = n.n(j)
      function F(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = g()(e)
          if (t) {
            var a = g()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var A = function (e) {
          return (0, e.render)({ fetchStatus: P.a.LOADING, data: null, error: null, retry: _.a })
        },
        D = (function (e) {
          p()(n, e)
          var t = F(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (e = t.call.apply(t, [this].concat(a))), h()(u()(e), 'state', { error: null }), e
          }
          return (
            c()(
              n,
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
            n
          )
        })(v.Component),
        B = function (e) {
          var t = e.query,
            n = e.queryRef,
            r = e.render,
            a = R()(t, n)
          return r({ fetchStatus: P.a.LOADED, data: a, error: null, retry: _.a })
        },
        K = function (e, t) {
          if (E.canUseDOM)
            return function (n) {
              var r = n.fetchPolicy,
                i = void 0 === r ? 'store-or-network' : r,
                o = n.render,
                l = n.variables,
                c = C()(e),
                s = a()(c, 2),
                u = s[0],
                d = s[1],
                p = Object(O.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                m = L()(l),
                f = a()(m, 1)[0],
                y = v.useCallback(
                  function () {
                    d(f, { fetchPolicy: 'network-only' })
                  },
                  [d, f],
                )
              return (
                v.useLayoutEffect(
                  function () {
                    d(f, { fetchPolicy: i })
                  },
                  [i, d, f],
                ),
                u
                  ? v.createElement(
                      v.Suspense,
                      { fallback: v.createElement(A, { render: o }) },
                      v.createElement(
                        D,
                        { errorHandler: p(t.errorConfig.options || {}), key: u.fetchKey, retry: y },
                        function (t, n) {
                          return t
                            ? o({ fetchStatus: P.a.FAILED, error: t, data: null, retry: n })
                            : v.createElement(B, { query: e, queryRef: u, render: o })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (r) {
            r.fetchPolicy
            var i = r.render,
              o = r.variables,
              l = V()(),
              c = Object(O.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              s = L()(o),
              u = a()(s, 1)[0],
              d = n.get(l)
            if (d) return d
            var p = v.lazy(function () {
              return I()(l, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return i({ fetchStatus: P.a.LOADED, data: e, error: null, retry: _.a })
                  },
                  function (e) {
                    return e instanceof w.a
                      ? (c(t.errorConfig.options || {})(e),
                        i({ fetchStatus: P.a.FAILED, data: null, error: e, retry: _.a }))
                      : v.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(l, e).get.bind(n, l) }
                })
            })
            return v.createElement(v.Suspense, null, v.createElement(p, null))
          }
        }
    },
    njVe: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = {
        kind: 'InlineDataFragment',
        name: 'TweetActivity_mapPromotionDataToPromotionInfoState',
        hash: 'ea7658c5830d417e53118b26df704a5f',
      }
      t.default = r
    },
    wfDE: function (e, t, n) {
      'use strict'
      n.r(t)
      var r,
        a,
        i,
        o,
        l,
        c,
        s,
        u = {
          fragment: {
            argumentDefinitions: (r = [{ defaultValue: null, kind: 'LocalArgument', name: 'restId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'TweetActivityQuery',
            selections: [
              {
                alias: null,
                args: (a = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'restId' },
                  { kind: 'Literal', name: 's', value: 41 },
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
            argumentDefinitions: r,
            kind: 'Operation',
            name: 'TweetActivityQuery',
            selections: [
              {
                alias: null,
                args: a,
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
