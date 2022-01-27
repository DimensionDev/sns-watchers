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
          m = t.fetchKey,
          p = t.fetchPolicy,
          f = t.source,
          y = t.variables,
          g = t.networkCacheConfig,
          b = i(e, y, g)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          b.request.node.params.name !== t.name && r(!1),
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
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var h = u(d, b)
          c = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != f && d === t.environment ? f.ifEmpty(h) : (t.environment, h),
            fetchKey: m,
            fetchPolicy: p,
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
        m = n('RjwM'),
        p = n('7Mjr'),
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
                        { style: _.tooltip },
                        r.createElement(
                          l.a,
                          { style: _.tooltipTitle },
                          r.createElement(c.b, { size: 'title3', weight: 'heavy' }, t),
                        ),
                        r.createElement(
                          l.a,
                          { style: _.tooltipText },
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
                    style: _.iconInformation,
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
                { style: _.labelBar },
                r.createElement(c.b, { color: 'gray700', size: 'subtext2', style: _.labelText, weight: 'medium' }, t),
                r.createElement(E, { label: t, tooltip: n }),
              )
            : null
        },
        I = function (e) {
          var t = e.unit
          return t ? r.createElement(c.b, { color: 'gray700', style: _.unitText, weight: 'medium' }, t) : null
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
                    { accessibilityLabel: n, style: _.trendBar },
                    r.createElement(m.a, { style: _.trendIconNeg }),
                    r.createElement(
                      c.b,
                      { accessibilityHidden: !0, color: 'red500', size: 'body', weight: 'medium' },
                      t,
                    ),
                  )
                : 0 === a
                ? r.createElement(
                    l.a,
                    { accessibilityLabel: n, style: _.trendBar },
                    r.createElement(p.a, { style: _.trendIconZero }),
                    r.createElement(
                      c.b,
                      { accessibilityHidden: !0, color: 'gray700', size: 'body', weight: 'medium' },
                      t,
                    ),
                  )
                : r.createElement(
                    l.a,
                    { accessibilityLabel: n, style: _.trendBar },
                    r.createElement(f.a, { style: _.trendIconPos }),
                    r.createElement(
                      c.b,
                      { accessibilityHidden: !0, color: 'green500', size: 'body', weight: 'medium' },
                      t,
                    ),
                  ))
        },
        O = function (e) {
          var t = e.subTextList
          return t
            ? t.map(function (e, t) {
                return r.createElement(
                  l.a,
                  { accessibilityLabel: e.accessibilityLabel, key: t, style: [_.subTextListItem, e.style] },
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
        _ = o.a.create(function (e) {
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
          { style: _.dataPoint },
          r.createElement(k, { label: t, tooltip: i }),
          r.createElement(
            l.a,
            { style: _.valueBar },
            r.createElement(c.b, { size: n, weight: 'bold' }, u),
            r.createElement(I, { unit: s }),
            r.createElement(P, { trendValue: o }),
          ),
          r.createElement(O, { subTextList: a }),
        )
      }
    },
    DL4F: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ConversationAnalyticsScreen', function () {
          return sn
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
        m = n.n(d),
        p = n('N+ot'),
        f = n.n(p),
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
        O = function (e, t) {
          return t.match.params.statusId
        },
        _ = function (e, t) {
          return w.a.selectHydrated(e, O(0, t))
        },
        T = function (e, t) {
          return Object(I.p)(e, O(0, t))
        },
        x = function (e, t) {
          return w.a.selectFetchStatus(e, O(0, t))
        },
        L = function (e, t) {
          return Object(I.o)(e, O(0, t))
        },
        R = Object(E.a)()
          .propsFromState(function () {
            return {
              fetchStatus: x,
              quickPromoteEligibilityFetchStatus: T,
              statusId: O,
              tweet: _,
              quickPromoteEligibility: L,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(P),
              fetchTweetIfNeeded: w.a.fetchOneIfNeeded,
              fetchQuickPromoteEligibilityIfNeeded: I.j,
            }
          })
          .withAnalytics({ page: 'tweet', section: 'analytics', component: 'RwebConversationAnalytics' }),
        S = n('v//M'),
        C = n('W5XZ'),
        j = n('jHSc'),
        D = n('KUGV'),
        A = n('3XMw'),
        V = n.n(A),
        F = n('b5s6')
      function B(e) {
        var t = Date.now() - e
        return { action: 'view', data: { event_info: JSON.stringify({ duration_ms: t }) } }
      }
      function K(e, t) {
        return { element: t, action: 'click', data: { profile_id: e } }
      }
      function H(e, t, n) {
        return {
          element: 'TweetActivityQueryRenderer',
          action: 'error',
          data: { event_info: e, items: [{ item_type: 0, id: n }], profile_id: t },
        }
      }
      var N = n('Rp9C'),
        W = (n('jQ3i'), n('hBpG'), n('z84I'), n('x0mb')),
        z = n('RhWx'),
        Q = n.n(z),
        M = n('8bFt'),
        q = V.a.ja781451,
        U = V.a.cfa1a7b8
      function G(e) {
        return e || 0
      }
      function X(e, t) {
        var n = G(t)
        return 0 === n ? 0 : G(e) / n
      }
      function J(e) {
        var t = G(e)
        return t >= 1e5 ? U(t) : q(t)
      }
      function Y(e) {
        return {
          count: J(null == e ? void 0 : e.value.total),
          promotionPercentage: X(null == e ? void 0 : e.value.promoted, null == e ? void 0 : e.value.total),
        }
      }
      var Z = function (e) {
          var t = e.label,
            n = e.metric,
            r = e.showPromotionPercentages,
            a = e.tooltip,
            i = X(null == n ? void 0 : n.value.promoted, null == n ? void 0 : n.value.total),
            o = Q()(r ? ke(i, !0) : [])
          return v.createElement(M.a, {
            label: t,
            size: 'title1',
            subTextList: o,
            tooltip: a,
            value: J(null == n ? void 0 : n.value.total),
          })
        },
        $ = n('MWbm'),
        ee = n('rHpw'),
        te = function (e) {
          var t = e.label,
            n = e.metric,
            r = e.showPromotionPercentages,
            a = e.tooltip,
            i = X(null == n ? void 0 : n.value.promoted, null == n ? void 0 : n.value.total),
            o = Q()(r ? ke(i, !1) : [])
          return v.createElement(
            $.a,
            { style: ne.dataPoint },
            v.createElement(M.a, {
              label: t,
              size: 'title3',
              subTextList: o,
              tooltip: a,
              value: J(null == n ? void 0 : n.value.total),
            }),
          )
        },
        ne = ee.a.create(function (e) {
          return { dataPoint: { flexGrow: 1 } }
        }),
        re = n('7N4s'),
        ae = n('0ig/'),
        ie = V.a.e5fe61ef,
        oe = V.a.f6162a32,
        le = V.a.dbe9353d,
        ce = V.a.e044b63f,
        se = V.a.d8abdaa4,
        ue = V.a.de0de3a7,
        de = V.a.aeee0181,
        me = V.a.ccab7c76,
        pe = V.a.b1b4d57d,
        fe = V.a.i680442e,
        ye = V.a.d5f1e553,
        ge = V.a.d24b7811,
        be = V.a.b40d33e4,
        he = V.a.ee547382,
        ve = V.a.i2785008,
        we = V.a.g33fd6b0
      V.a.b71059c3
      function Ee(e) {
        var t,
          n,
          r = e.detailExpands,
          a = e.engagements,
          i = e.follows,
          o = e.impressions,
          l = e.linkClicks,
          c = e.mediaViews,
          s = e.profileVisits,
          u = e.showPromotionPercentages,
          d = e.tweet,
          m = v.useContext(re.b).isModal,
          p = Object(ae.a)().width < ee.a.theme.breakpoints.xSmall,
          f = !(null == d || null === (t = d.entities) || void 0 === t || !t.urls) && d.entities.urls.length > 0,
          y =
            !(null == d || null === (n = d.extended_entities) || void 0 === n || !n.media) &&
            d.extended_entities.media.filter(function (e) {
              return 'video' === e.type
            }).length > 0,
          g = [
            v.createElement(te, { key: le, label: le, metric: a, showPromotionPercentages: u, tooltip: ce }),
            v.createElement(te, { key: be, label: be, metric: r, showPromotionPercentages: u, tooltip: he }),
            v.createElement(te, { key: se, label: se, metric: i, showPromotionPercentages: u, tooltip: ue }),
            v.createElement(te, { key: de, label: de, metric: s, showPromotionPercentages: u, tooltip: me }),
            y ? v.createElement(te, { key: pe, label: pe, metric: c, showPromotionPercentages: u, tooltip: fe }) : null,
            f ? v.createElement(te, { key: ye, label: ye, metric: l, showPromotionPercentages: u, tooltip: ge }) : null,
          ].filter(function (e) {
            return e
          })
        return v.createElement(
          $.a,
          {
            style: [
              Ie.grid,
              { gridTemplateColumns: m ? ' 1fr 2fr' : '1fr' },
              { gridGap: p ? ee.a.theme.spaces.space24 : ee.a.theme.spaces.space40 },
              { marginTop: p ? ee.a.theme.spaces.space24 : ee.a.theme.spaces.space40 },
              { marginHorizontal: p ? ee.a.theme.spaces.space16 : ee.a.theme.spaces.space32 },
            ],
          },
          v.createElement(Z, { label: ie, metric: o, showPromotionPercentages: u, tooltip: oe }),
          v.createElement(
            $.a,
            { style: [Ie.minorDataPointsGrid, { gridGap: p ? ee.a.theme.spaces.space24 : ee.a.theme.spaces.space40 }] },
            g.map(function (e, t) {
              return v.createElement($.a, { key: 'minorDataPoint'.concat(t) }, e)
            }),
          ),
        )
      }
      function ke(e, t) {
        var n = ve(e),
          r = we({ percentage: n })
        return [
          {
            accessibilityLabel: r,
            color: 'primary',
            text: t ? r : n,
            icon: v.createElement(W.a, { style: Ie.promotionIcon }),
          },
        ]
      }
      var Ie = ee.a.create(function (e) {
          return {
            grid: { display: 'grid', marginBottom: e.spaces.space40 },
            minorDataPointsGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' },
            promotionIcon: { fontSize: e.spaces.space4, color: e.colors.primary, marginRight: e.spaces.space4 },
          }
        }),
        Pe = n('UIzd'),
        Oe = n.n(Pe),
        _e = (n('uFXj'), n('t62R')),
        Te = n('LbZ7'),
        xe = n('iEUn'),
        Le = n('jlPL'),
        Re = n('dFWS'),
        Se = V.a.ib1f8491,
        Ce = V.a.fbdb85f4,
        je = V.a.d0eeb126,
        De = V.a.i2785008,
        Ae = V.a.g33fd6b0
      function Ve(e) {
        var t = e.percentageValue,
          n = De(t),
          r = Ae({ percentage: n })
        return v.createElement(
          $.a,
          { accessibilityLabel: r, style: Be.percentageView },
          v.createElement(W.a, { style: Be.promotionIcon }),
          v.createElement(_e.b, { accessibilityHidden: !0, color: 'primary' }, n),
        )
      }
      function Fe(e) {
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
          m = d.count,
          p = d.promotionPercentage
        return v.createElement(
          $.a,
          { style: Be.actionsBar },
          v.createElement(
            Te.a,
            null,
            v.createElement(
              $.a,
              { accessibilityLabel: Se({ likeCount: o }), style: Be.column },
              v.createElement(xe.a, { style: Be.actionIconsColor }),
              v.createElement(_e.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, o),
              a ? v.createElement(Ve, { percentageValue: l }) : null,
            ),
            v.createElement(
              $.a,
              { accessibilityLabel: Ce({ retweetCount: s }), style: Be.column },
              v.createElement(Le.a, { style: Be.actionIconsColor }),
              v.createElement(_e.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, s),
              a ? v.createElement(Ve, { percentageValue: u }) : null,
            ),
            v.createElement(
              $.a,
              { accessibilityLabel: je({ replyCount: m }), style: Be.column },
              v.createElement(Re.a, { style: Be.actionIconsColor }),
              v.createElement(_e.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, m),
              a ? v.createElement(Ve, { percentageValue: p }) : null,
            ),
          ),
        )
      }
      var Be = ee.a.create(function (e) {
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
        Ke = n('97Jx'),
        He = n.n(Ke),
        Ne = n('Wc+h'),
        We = n('gmpV'),
        ze = n('876e'),
        Qe = n('JYMr'),
        Me = n('h0NW'),
        qe = V.a.db6efeb8,
        Ue = V.a.j6daea85,
        Ge = V.a.jade381b,
        Xe = V.a.d725a288,
        Je = V.a.hf9ed10f
      function Ye(e) {
        var t = e.end_time,
          n = e.isPaused,
          r = e.start_time,
          a = t ? new Date(t) : null,
          i = r ? new Date(r) : null,
          o = !!a && a > new Date(Date.now()),
          l = a && i ? Object(We.a)(new Date(i), new Date(a)) : 0,
          c = t && o ? ze.a.getTimeLeftLabel(t) : null,
          s = a ? Xe(a) : '',
          u = a ? Ge(a) : '',
          d = Je({ endTimeString: s, endDateString: u })
        return v.createElement(
          $.a,
          { style: $e.promotionInfoView },
          v.createElement(
            $.a,
            { style: $e.infoItemView },
            v.createElement(Ze, { endTimeLabel: d, isPaused: n, percentagePassed: l, timeLeftLabel: c }),
          ),
        )
      }
      function Ze(e) {
        var t = e.endTimeLabel,
          n = e.isPaused,
          r = e.percentagePassed,
          a = e.timeLeftLabel,
          i = {
            items: [
              {
                label: v.createElement(_e.b, { size: 'headline2', weight: 'heavy' }, n ? Ue : qe),
                description: a
                  ? v.createElement(
                      v.Fragment,
                      null,
                      v.createElement(
                        $.a,
                        { style: $e.progressBarContainer },
                        v.createElement(Qe.a, {
                          colorValue: n ? ee.a.theme.colors.gray400 : ee.a.theme.colors.primary,
                          progress: r,
                          style: $e.progressBar,
                        }),
                      ),
                      v.createElement(_e.b, { align: 'left', color: 'gray700', hoverLabel: { label: t } }, a),
                    )
                  : null,
                decoration: n ? null : v.createElement(Ne.a, { style: [$e.icon, $e.decorationContainer] }),
              },
            ],
          }
        return v.createElement(Me.a, He()({}, i, { containerStyle: $e.infoItem }))
      }
      var $e = ee.a.create(function (e) {
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
        et = n('WtWS'),
        tt = (n('hBvt'), n('/yvb'))
      function nt(e) {
        var t = e.buttonString,
          n = e.buttonTestID,
          r = e.infoItemGroup,
          a = e.link,
          i = e.onButtonPress,
          o = e.withIcon,
          l = Object(ae.a)().width < ee.a.theme.breakpoints.medium,
          c = l ? [rt.promotionInfoView, rt.promotionInfoViewNarrow] : rt.promotionInfoView
        return v.createElement(
          $.a,
          { style: c },
          v.createElement($.a, { style: [rt.infoItemView, !l && rt.infoItemViewWide] }, r),
          v.createElement(
            $.a,
            { style: l ? [rt.buttonViewNarrow, o && rt.buttonViewIcon] : rt.buttonViewWide },
            v.createElement(tt.a, { link: a, onPress: i, size: 'large', testID: n, type: 'primaryFilled' }, t),
          ),
        )
      }
      var rt = ee.a.create(function (e) {
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
        at = n('Irs7'),
        it = n('yE5w'),
        ot = V.a.a63a89fe,
        lt = V.a.f4e13456,
        ct = V.a.e8adeec8,
        st = V.a.ja781451
      function ut(e) {
        var t = Object(at.b)(),
          n = st(G(e.impressions)),
          r = lt({ impressions: n }),
          a = {
            items: [
              {
                label: v.createElement(_e.b, { size: 'headline2', weight: 'heavy' }, ot),
                description: r,
                decoration: v.createElement(et.a, { style: [dt.icon, dt.decorationContainer] }),
              },
            ],
          }
        var i = v.createElement(Me.a, He()({}, a, { containerStyle: dt.infoItem })),
          o = null !== Object(D.a)(),
          l = ''
            .concat(e.tweetPermalink, '/')
            .concat(o ? it.a.Webview : it.a.Rweb, '/')
            .concat(it.c.Intro)
        return v.createElement(nt, {
          buttonString: ct,
          infoItemGroup: i,
          link: l,
          onButtonPress: function () {
            t.scribe(K(e.userId, 'PromoteAgainButton'))
          },
          withIcon: !0,
        })
      }
      var dt = ee.a.create(function (e) {
          return {
            infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' },
            decorationContainer: { height: e.spaces.space24, width: e.spaces.space24, marginRight: e.spaces.space24 },
            icon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.green500 },
          }
        }),
        mt = V.a.dcfb0332,
        pt = V.a.g6bf2fda,
        ft = V.a.df2c469a,
        yt = V.a.ja781451
      function gt(e) {
        var t = Object(at.b)(),
          n = null !== Object(D.a)(),
          r = yt(G(e.impressions)),
          a = pt({ impressions: r })
        var i = {
            items: [{ label: v.createElement(_e.b, { size: 'headline1', weight: 'heavy' }, mt), description: a }],
          },
          o = v.createElement(Me.a, He()({}, i, { containerStyle: bt.infoItem }))
        return v.createElement(nt, {
          buttonString: ft,
          buttonTestID: e.buttonTestID,
          infoItemGroup: o,
          link: {
            pathname: '/i/flow/convert_to_professional',
            state: { input: { requested_variant: 'qp-'.concat(e.tweet_id, '-').concat(n ? 'true' : 'false') } },
            method: 'push',
          },
          onButtonPress: function () {
            t.scribe(K(e.userId, 'SwitchToProfessionalButton'))
          },
          withIcon: !1,
        })
      }
      var bt = ee.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        ht = V.a.dcfb0332,
        vt = V.a.f96eec3c,
        wt = V.a.e9891f7c
      function Et(e) {
        var t = Object(at.b)(),
          n = { items: [{ label: v.createElement(_e.b, { size: 'headline1', weight: 'heavy' }, ht), description: vt }] }
        var r = v.createElement(Me.a, He()({}, n, { containerStyle: kt.infoItem })),
          a = null !== Object(D.a)(),
          i = ''
            .concat(e.tweetPermalink, '/')
            .concat(a ? it.a.Webview : it.a.Rweb, '/')
            .concat(it.c.Intro)
        return v.createElement(nt, {
          buttonString: wt,
          infoItemGroup: r,
          link: i,
          onButtonPress: function () {
            t.scribe(K(e.userId, 'NotStartedPromotionButton'))
          },
          withIcon: !1,
        })
      }
      var kt = ee.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        It = 'switchToProfessionalButton',
        Pt = n('5emT'),
        Ot = V.a.jede3014,
        _t = V.a.i094e43b,
        Tt = V.a.f638d3e0
      function xt(e) {
        var t = Object(at.b)(),
          n = {
            items: [
              {
                label: v.createElement(_e.b, { size: 'headline2', weight: 'heavy' }, Ot),
                description: _t,
                decoration: v.createElement(Pt.a, { style: [Rt.icon, Rt.decorationContainer] }),
              },
            ],
          }
        return v.createElement(
          $.a,
          { style: Rt.promotionInfoView },
          v.createElement(
            $.a,
            { style: Rt.infoItemView },
            v.createElement(Me.a, He()({}, n, { containerStyle: Rt.infoItem })),
          ),
          v.createElement(
            $.a,
            { style: Rt.buttonView },
            v.createElement(
              _e.b,
              {
                color: 'primary',
                link: 'https://twitter.com/adspolicy',
                onPress: function () {
                  t.scribe(K(e.userId, 'ReviewPolicyButton'))
                },
              },
              Tt,
            ),
          ),
        )
      }
      var Lt,
        Rt = ee.a.create(function (e) {
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
        St = (n('enFi'), n('jAXQ')),
        Ct = n.n(St),
        jt =
          (n('yH/f'),
          Object.freeze({
            notProfessional: 'not_professional',
            notStarted: 'not_started',
            underReview: 'under_review',
            running: 'running',
            completed: 'completed',
            paused: 'paused',
          })),
        Dt = void 0 !== Lt ? Lt : (Lt = n('+s2u'))
      function At(e) {
        var t,
          n,
          r,
          a,
          i = e.impressions,
          o = e.promotionInfoState,
          l = e.tweet,
          c = Ct()(Dt, e.campaignInfo)
        switch (o) {
          case jt.notProfessional:
            return v.createElement(gt, {
              buttonTestID: It,
              impressions: null == i ? void 0 : i.value.total,
              tweet_id: l.id_str,
              userId: e.userId,
            })
          case jt.notStarted:
            return v.createElement(Et, { tweetPermalink: l.permalink, userId: e.userId })
          case jt.underReview:
            return v.createElement(xt, { userId: e.userId })
          case jt.running:
            return v.createElement(Ye, {
              end_time: null == c || null === (t = c.campaign) || void 0 === t ? void 0 : t.end_time,
              isPaused: !1,
              start_time: null == c || null === (n = c.campaign) || void 0 === n ? void 0 : n.start_time,
            })
          case jt.completed:
            return v.createElement(ut, {
              impressions: null == i ? void 0 : i.value.promoted,
              tweetPermalink: l.permalink,
              userId: e.userId,
            })
          case jt.paused:
            return v.createElement(Ye, {
              end_time: null == c || null === (r = c.campaign) || void 0 === r ? void 0 : r.end_time,
              isPaused: !0,
              start_time: null == c || null === (a = c.campaign) || void 0 === a ? void 0 : a.start_time,
            })
          default:
            return null
        }
      }
      var Vt,
        Ft,
        Bt,
        Kt = n('Ud88'),
        Ht = n.n(Kt),
        Nt = n('n0Rl'),
        Wt = n('Hsf0'),
        zt = n.n(Wt),
        Qt = n('LLQb'),
        Mt = V.a.deaf5b15,
        qt = void 0 !== Vt ? Vt : (Vt = n('2O3u')),
        Ut = (void 0 !== Ft || (Ft = n('njVe')), void 0 !== Bt ? Bt : (Bt = n('wfDE'))),
        Gt = Object(Nt.b)(Ut, { errorConfig: { context: P } })
      function Xt(e) {
        var t = e.hidePromotionInfo,
          n = e.quickPromoteEligibility,
          r = e.tweet,
          a = e.userId,
          i = Object(at.b)(),
          o = Ht()(),
          l = Object(k.useCreateLocalApiErrorHandler)(P)
        return (
          v.useEffect(
            function () {
              var e = l({ showToast: !1 })
              Oe()(o, Ut, { restId: r.id_str }).subscribe({ error: e })
            },
            [r, o, l],
          ),
          v.createElement(Gt, {
            render: function (e) {
              if (e.fetchStatus === Nt.a.FAILED) {
                var o = e.retry
                return (
                  i.scribe(H('NetworkError', a, r.id_str)),
                  v.createElement(Qt.a, { onRequestRetry: o, retryMessage: Mt })
                )
              }
              if (e.fetchStatus === Nt.a.LOADED) {
                var l,
                  c,
                  s =
                    null === (l = e.data) || void 0 === l || null === (c = l.tweet_result_by_rest_id) || void 0 === c
                      ? void 0
                      : c.result
                if ('Tweet' === (null == s ? void 0 : s.__typename)) {
                  var u = zt()(qt, s.analytics)
                  ;(null != u && u.metrics.length) || i.scribe(H('EmptyMetricsFromBackend', a, r.id_str))
                  var d = Yt(s.analytics),
                    m = d.detailExpands,
                    p = d.engagements,
                    f = d.follows,
                    y = d.impressions,
                    g = d.likes,
                    b = d.linkClicks,
                    h = d.mediaViews,
                    w = d.profileVisits,
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
                    })(n),
                    P = ['running', 'completed', 'paused'].includes(I)
                  return v.createElement(
                    $.a,
                    { style: Zt.tweetActivity },
                    v.createElement(
                      $.a,
                      { style: Zt.metricsView },
                      v.createElement(Fe, { likes: g, replies: E, retweets: k, showPromotionPercentages: P }),
                      v.createElement(Ee, {
                        detailExpands: m,
                        engagements: p,
                        follows: f,
                        impressions: y,
                        linkClicks: b,
                        mediaViews: h,
                        profileVisits: w,
                        showPromotionPercentages: P,
                        tweet: r,
                      }),
                    ),
                    t || !I
                      ? null
                      : v.createElement(At, {
                          campaignInfo: s.quick_promotion,
                          impressions: y,
                          promotionInfoState: I,
                          tweet: r,
                          userId: a,
                        }),
                  )
                }
              }
              return null
            },
            variables: { restId: r.id_str },
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
        Yt = function (e) {
          var t = zt()(qt, e)
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
      var Zt = ee.a.create(function (e) {
          return { tweetActivity: { flex: 1 }, metricsView: { flexGrow: 1 } }
        }),
        $t = n('v6aA'),
        en = n('E0cF'),
        tn = n('q9Zt')
      function nn(e, t) {
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
      function rn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? nn(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : nn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function an(e) {
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
      var on = V.a.g9079b93,
        ln = V.a.a57daeb1,
        cn = V.a.deaf5b15,
        sn = (function (e) {
          m()(n, e)
          var t = an(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(u()(e), '_handleFetchTweet', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchTweetIfNeeded)(t.statusId).catch(n(C.a))
              }),
              h()(u()(e), '_handleFetchQuickPromoteEligibility', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                return (0, t.fetchQuickPromoteEligibilityIfNeeded)({ statusId: t.statusId }).catch(n())
              }),
              h()(u()(e), '_render', function () {
                var t = e.props,
                  n = t.quickPromoteEligibility,
                  r = t.tweet,
                  a = (r && en.a.getOriginalTweet(r)) || void 0
                return !a || (a && a.user.id_str !== e.context.loggedInUserId)
                  ? v.createElement(tn.a, { onRetry: null, title: on })
                  : (e._scribeEligibility(),
                    v.createElement(
                      $.a,
                      { style: un.topLevelView },
                      v.createElement(
                        $.a,
                        { style: un.quoteTweet },
                        v.createElement(F.a, {
                          isCondensed: !0,
                          style: { cursor: 'default' },
                          tweetId: a.id_str,
                          withLink: !1,
                          withUserHoverCard: !1,
                        }),
                      ),
                      v.createElement(Xt, {
                        hidePromotionInfo: !1,
                        quickPromoteEligibility: n,
                        tweet: a,
                        userId: e.context.loggedInUserId || '',
                      }),
                    ))
              }),
              h()(u()(e), '_setAppBarRef', function (t) {
                e._appBarRef = t
              }),
              h()(u()(e), '_handleGoBack', function () {
                e.props.history.goBackThroughModals()
              }),
              h()(u()(e), '_scribeEligibility', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.quickPromoteEligibility
                n.scribe({ element: 'eligibility', action: 'view', data: { event_info: r || '' } })
              }),
              h()(u()(e), '_scribeDwellTime', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.tweet,
                  i = (r && en.a.getOriginalTweet(r)) || void 0,
                  o = B(e._dwellStartTime),
                  l = o.data,
                  c = a()(o, ['data'])
                n.scribe(rn(rn({}, c), {}, { data: rn(rn({}, l), {}, { items: i ? [N.a.getTweetItem(i)] : [] }) }))
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
                    n = e.history,
                    r = e.tweet,
                    a = (r && en.a.getOriginalTweet(r)) || void 0,
                    i = null !== Object(D.a)()
                  return v.createElement(
                    j.b,
                    {
                      appBarRef: this._setAppBarRef,
                      backLocation: a ? a.permalink : '/',
                      hideBackButton: i,
                      history: n,
                      onBackClick: this._handleGoBack,
                      renderHeader: function (e) {
                        return i ? null : e
                      },
                      title: i ? null : ln,
                    },
                    v.createElement(S.a, { fetchStatus: t, render: this._render, retryMessage: cn }),
                  )
                },
              },
            ]),
            n
          )
        })(v.PureComponent)
      h()(sn, 'contextType', $t.a)
      var un = ee.a.create(function (e) {
          return { topLevelView: { flex: 1 }, quoteTweet: { margin: e.spaces.space16, marginBottom: e.spaces.space12 } }
        }),
        dn = R(sn)
      t.default = dn
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
        m = n('0KEI'),
        p = function (e, t) {
          return t.tweetId
        },
        f = function (e, t) {
          var n = t.tweetId,
            r = n && s.a.select(e, n)
          return r ? Object(u.g)(e, r) : void 0
        },
        y = Object(d.a)()
          .propsFromState(function () {
            return { community: f, hydratedTweet: s.a.createHydratedTweetSelector(p) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: u.c.fetchOneIfNeeded,
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
            m = u.loggedInUserId,
            p = null == i ? void 0 : i.community_id_str
          l.useEffect(
            function () {
              p && Object(g.a)(t) && r(p).catch(n())
            },
            [t, p, n, r],
          )
          var f = d.isTrue('responsive_web_alt_text_badge_enabled'),
            y = i && Object(h.f)(i, m, t),
            v = y && Object(h.e)(y),
            w = d.isTrue('responsive_web_reactions_enabled')
          return l.createElement(
            b.a,
            a()({}, s, {
              loggedInUserId: m,
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
        m = s.useRef,
        p = s.useState,
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
          f = m(new Set([n])),
          b = p(function () {
            return n
          }),
          h = b[0],
          v = b[1],
          w = p(function () {
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
          O = m(!1)
        return (
          d(function () {
            return function () {
              O.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === O.current)
                return (
                  (O.current = !1),
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
        m = n.n(d),
        p = n('N+ot'),
        f = n.n(p),
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
      var O = n('fs1G'),
        _ = n('0KEI'),
        T = n('lU4h'),
        x = n.n(T),
        L = n('21nk'),
        R = n.n(L),
        S = n('bCEw'),
        C = n.n(S),
        j = n('Ud88'),
        D = n.n(j)
      function A(e) {
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
      var V = function (e) {
          return (0, e.render)({ fetchStatus: P.a.LOADING, data: null, error: null, retry: O.a })
        },
        F = (function (e) {
          m()(n, e)
          var t = A(n)
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
          return r({ fetchStatus: P.a.LOADED, data: a, error: null, retry: O.a })
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
                m = Object(_.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                p = x()(l),
                f = a()(p, 1)[0],
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
                      { fallback: v.createElement(V, { render: o }) },
                      v.createElement(
                        F,
                        { errorHandler: m(t.errorConfig.options || {}), key: u.fetchKey, retry: y },
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
              l = D()(),
              c = Object(_.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              s = x()(o),
              u = a()(s, 1)[0],
              d = n.get(l)
            if (d) return d
            var m = v.lazy(function () {
              return I()(l, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return i({ fetchStatus: P.a.LOADED, data: e, error: null, retry: O.a })
                  },
                  function (e) {
                    return e instanceof w.a
                      ? (c(t.errorConfig.options || {})(e),
                        i({ fetchStatus: P.a.FAILED, data: null, error: e, retry: O.a }))
                      : v.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(l, e).get.bind(n, l) }
                })
            })
            return v.createElement(v.Suspense, null, v.createElement(m, null))
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
                  { kind: 'Literal', name: 's', value: 42 },
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
