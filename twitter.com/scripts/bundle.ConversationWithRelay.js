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
          var h = u(d, b)
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != f && d === t.environment ? f.ifEmpty(h) : (t.environment, h),
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
        h = o.a.c388d026,
        v = o.a.i2785008,
        w = o.a.d9687d23,
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
                        r.a.createElement(u.a, { onPress: e, type: 'primaryOutlined' }, h),
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
              (t = v(n)),
              (a = (function (e) {
                if (e < 0) {
                  var t = v(e)
                  return w({ trendValueNegativePercent: t })
                }
                if (0 === e) return E
                var a = v(e)
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
          return ua
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
        h = a.n(b),
        v = (a('2G9S'), a('ERkP')),
        w = a.n(v),
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
        R = Object(k.a)()
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
        V = a('v//M'),
        A = a('W5XZ'),
        F = a('jHSc'),
        B = a('KUGV'),
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
      function N(e, t, a) {
        return {
          element: 'TweetActivityQueryRenderer',
          action: 'error',
          data: { event_info: e, items: [{ item_type: 0, id: a }], profile_id: t },
        }
      }
      var H = a('Rp9C'),
        W = (a('jQ3i'), a('hBpG'), a('7x/C'), a('LW0h'), a('z84I'), a('RhWx')),
        Q = a.n(W),
        M = a('8bFt'),
        q = O.a.ja781451,
        G = O.a.cfa1a7b8
      function U(e) {
        return e || 0
      }
      function X(e, t) {
        var a = U(t)
        return 0 === a ? 0 : U(e) / a
      }
      function Y(e) {
        var t = U(e)
        return t >= 1e5 ? G(t) : q(t)
      }
      function J(e) {
        return {
          count: Y(null == e ? void 0 : e.value.total),
          promotionPercentage: X(null == e ? void 0 : e.value.promoted, null == e ? void 0 : e.value.total),
        }
      }
      var Z = function (e) {
          var t,
            a = e.label,
            n = e.metric,
            r = e.showPromotionPercentages,
            i = e.tooltip,
            o = X(null == n ? void 0 : n.value.promoted, null == n ? void 0 : n.value.total),
            l = Q()(r ? ke(o, !0) : [])
          return w.a.createElement(M.a, {
            animated: !0,
            count: null !== (t = null == n ? void 0 : n.value.total) && void 0 !== t ? t : 0,
            label: a,
            size: 'title1',
            subTextList: l,
            tooltip: i,
            value: Y(null == n ? void 0 : n.value.total),
          })
        },
        $ = a('MWbm'),
        ee = a('rHpw'),
        te = function (e) {
          var t,
            a = e.label,
            n = e.metric,
            r = e.showPromotionPercentages,
            i = e.tooltip,
            o = X(null == n ? void 0 : n.value.promoted, null == n ? void 0 : n.value.total),
            l = Q()(r ? ke(o, !1) : [])
          return w.a.createElement(
            $.a,
            { style: ae.dataPoint },
            w.a.createElement(M.a, {
              animated: !0,
              count: null !== (t = null == n ? void 0 : n.value.total) && void 0 !== t ? t : 0,
              label: a,
              size: 'title3',
              subTextList: l,
              tooltip: i,
              value: Y(null == n ? void 0 : n.value.total),
            }),
          )
        },
        ae = ee.a.create(function (e) {
          return { dataPoint: { flexGrow: 1 } }
        }),
        ne = a('7N4s'),
        re = a('0ig/'),
        ie = O.a.e5fe61ef,
        oe = O.a.f6162a32,
        le = O.a.dbe9353d,
        se = O.a.e044b63f,
        ce = O.a.d8abdaa4,
        ue = O.a.de0de3a7,
        de = O.a.aeee0181,
        me = O.a.ccab7c76,
        pe = O.a.b1b4d57d,
        fe = O.a.i680442e,
        ge = O.a.d5f1e553,
        ye = O.a.d24b7811,
        be = O.a.b40d33e4,
        he = O.a.ee547382,
        ve = O.a.i2785008,
        we = O.a.g33fd6b0
      O.a.b71059c3
      function Ee(e) {
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
          m = w.a.useContext(ne.b).isModal,
          p = Object(re.a)().width < ee.a.theme.breakpoints.xSmall,
          f = !(null == d || null === (t = d.entities) || void 0 === t || !t.urls) && d.entities.urls.length > 0,
          g =
            !(null == d || null === (a = d.extended_entities) || void 0 === a || !a.media) &&
            d.extended_entities.media.filter(function (e) {
              return 'video' === e.type
            }).length > 0,
          y = [
            w.a.createElement(te, { key: le, label: le, metric: r, showPromotionPercentages: u, tooltip: se }),
            w.a.createElement(te, { key: be, label: be, metric: n, showPromotionPercentages: u, tooltip: he }),
            w.a.createElement(te, { key: ce, label: ce, metric: i, showPromotionPercentages: u, tooltip: ue }),
            w.a.createElement(te, { key: de, label: de, metric: c, showPromotionPercentages: u, tooltip: me }),
            g
              ? w.a.createElement(te, { key: pe, label: pe, metric: s, showPromotionPercentages: u, tooltip: fe })
              : null,
            f
              ? w.a.createElement(te, { key: ge, label: ge, metric: l, showPromotionPercentages: u, tooltip: ye })
              : null,
          ].filter(function (e) {
            return e
          })
        return w.a.createElement(
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
          w.a.createElement(Z, { label: ie, metric: o, showPromotionPercentages: u, tooltip: oe }),
          w.a.createElement(
            $.a,
            { style: [Ie.minorDataPointsGrid, { gridGap: p ? ee.a.theme.spaces.space24 : ee.a.theme.spaces.space40 }] },
            y.map(function (e, t) {
              return w.a.createElement($.a, { key: 'minorDataPoint'.concat(t) }, e)
            }),
          ),
        )
      }
      function ke(e, t) {
        var a = ve(e),
          n = we({ percentage: a })
        return [
          {
            accessibilityLabel: n,
            color: 'primary900',
            text: t ? n : a,
            style: {
              backgroundColor: ee.a.theme.colors.primary50,
              borderRadius: ee.a.theme.borderRadii.infinite,
              paddingVertical: ee.a.theme.spaces.space4,
              paddingHorizontal: ee.a.theme.spacesPx.space4 + ee.a.theme.spacesPx.space2,
            },
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
        Pe = a('UIzd'),
        xe = a.n(Pe),
        Te = (a('uFXj'), a('t62R')),
        _e = a('LbZ7'),
        Ce = a('iEUn'),
        Le = a('jlPL'),
        Se = a('dFWS'),
        Re = O.a.ib1f8491,
        Ve = O.a.fbdb85f4,
        Ae = O.a.d0eeb126,
        Fe = O.a.i2785008,
        Be = O.a.g33fd6b0
      function De(e) {
        var t = e.percentageValue,
          a = Fe(t),
          n = Be({ percentage: a })
        return w.a.createElement(
          $.a,
          { accessibilityLabel: n, style: Ke.percentageView },
          w.a.createElement(Te.b, { accessibilityHidden: !0, color: 'primary900' }, a),
        )
      }
      function Oe(e) {
        var t = e.likes,
          a = e.replies,
          n = e.retweets,
          r = e.showPromotionPercentages,
          i = J(t),
          o = i.count,
          l = i.promotionPercentage,
          s = J(n),
          c = s.count,
          u = s.promotionPercentage,
          d = J(a),
          m = d.count,
          p = d.promotionPercentage
        return w.a.createElement(
          $.a,
          { style: Ke.actionsBar },
          w.a.createElement(
            _e.a,
            null,
            w.a.createElement(
              $.a,
              { accessibilityLabel: Re({ likeCount: o }), style: Ke.column },
              w.a.createElement(Ce.a, { style: Ke.actionIconsColor }),
              w.a.createElement(Te.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, o),
              r ? w.a.createElement(De, { percentageValue: l }) : null,
            ),
            w.a.createElement(
              $.a,
              { accessibilityLabel: Ve({ retweetCount: c }), style: Ke.column },
              w.a.createElement(Le.a, { style: Ke.actionIconsColor }),
              w.a.createElement(Te.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, c),
              r ? w.a.createElement(De, { percentageValue: u }) : null,
            ),
            w.a.createElement(
              $.a,
              { accessibilityLabel: Ae({ replyCount: m }), style: Ke.column },
              w.a.createElement(Se.a, { style: Ke.actionIconsColor }),
              w.a.createElement(Te.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, m),
              r ? w.a.createElement(De, { percentageValue: p }) : null,
            ),
          ),
        )
      }
      var Ke = ee.a.create(function (e) {
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
              backgroundColor: ee.a.theme.colors.primary50,
              borderRadius: ee.a.theme.borderRadii.infinite,
              color: ee.a.theme.colors.primary,
              marginTop: ee.a.theme.spaces.space4,
              paddingVertical: ee.a.theme.spaces.space4,
              paddingHorizontal: ee.a.theme.spacesPx.space4 + ee.a.theme.spacesPx.space2,
            },
            promotionIcon: { fontSize: e.spaces.space4, color: e.colors.primary, marginRight: e.spaces.space4 },
          }
        }),
        je = a('97Jx'),
        ze = a.n(je),
        Ne = a('Wc+h'),
        He = a('gmpV'),
        We = a('876e'),
        Qe = a('JYMr'),
        Me = a('h0NW'),
        qe = O.a.db6efeb8,
        Ge = O.a.j6daea85,
        Ue = O.a.jade381b,
        Xe = O.a.d725a288,
        Ye = O.a.hf9ed10f
      function Je(e) {
        var t = e.end_time,
          a = e.isPaused,
          n = e.start_time,
          r = t ? new Date(t) : null,
          i = n ? new Date(n) : null,
          o = !!r && r > new Date(Date.now()),
          l = r && i ? Object(He.a)(new Date(i), new Date(r)) : 0,
          s = t && o ? We.a.getTimeLeftLabel(t) : null,
          c = r ? Xe(r) : '',
          u = r ? Ue(r) : '',
          d = Ye({ endTimeString: c, endDateString: u })
        return w.a.createElement(
          $.a,
          { style: $e.promotionInfoView },
          w.a.createElement(
            $.a,
            { style: $e.infoItemView },
            w.a.createElement(Ze, { endTimeLabel: d, isPaused: a, percentagePassed: l, timeLeftLabel: s }),
          ),
        )
      }
      function Ze(e) {
        var t = e.endTimeLabel,
          a = e.isPaused,
          n = e.percentagePassed,
          r = e.timeLeftLabel,
          i = {
            items: [
              {
                label: w.a.createElement(Te.b, { size: 'headline2', weight: 'heavy' }, a ? Ge : qe),
                description: r
                  ? w.a.createElement(
                      w.a.Fragment,
                      null,
                      w.a.createElement(
                        $.a,
                        { style: $e.progressBarContainer },
                        w.a.createElement(Qe.a, {
                          colorValue: a ? ee.a.theme.colors.gray400 : ee.a.theme.colors.primary,
                          progress: n,
                          style: $e.progressBar,
                        }),
                      ),
                      w.a.createElement(Te.b, { align: 'left', color: 'gray700', hoverLabel: { label: t } }, r),
                    )
                  : null,
                decoration: a ? null : w.a.createElement(Ne.a, { style: [$e.icon, $e.decorationContainer] }),
              },
            ],
          }
        return w.a.createElement(Me.a, ze()({}, i, { containerStyle: $e.infoItem }))
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
        et = a('ddV6'),
        tt = a.n(et),
        at = (a('hBvt'), a('v6aA')),
        nt = a('/yvb'),
        rt = O.a.d228a9a0,
        it = O.a.c174e46e
      function ot(e) {
        var t,
          a = e.buttonString,
          n = e.buttonTestID,
          r = e.infoItemGroup,
          i = e.link,
          o = e.onButtonPress,
          l = w.a.useContext(at.a).featureSwitches.isTrue('responsive_web_tweet_analytics_m2_enabled'),
          s = null !== (t = e.expandButtonText) && void 0 !== t ? t : rt,
          c = Object(re.a)(),
          u = !w.a.useContext(ne.b).isModal,
          d = c.width <= ee.a.theme.breakpoints.xSmall,
          m = w.a.useState(!1),
          p = tt()(m, 2),
          f = p[0],
          g = p[1],
          y = f ? it : s,
          b = [lt.promotionInfoView, u && lt.promotionInfoViewNarrow, d && lt.promotionInfoViewXSmall]
        return l
          ? w.a.createElement(
              $.a,
              { style: b },
              w.a.createElement(
                $.a,
                {
                  style: u ? (f ? lt.promotionInfoTextVisible : lt.promotionInfoTextHidden) : lt.promotionInfoTextWide,
                },
                r,
              ),
              w.a.createElement(
                $.a,
                { style: u ? lt.buttonViewNarrow : lt.buttonViewWide },
                w.a.createElement(nt.a, { link: i, onPress: o, size: 'large', testID: n, type: 'primaryFilled' }, a),
              ),
              u &&
                w.a.createElement(
                  nt.a,
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
              $.a,
              { style: b },
              w.a.createElement($.a, { style: [lt.infoItemView, u && lt.infoItemViewNarrow] }, r),
              w.a.createElement(
                $.a,
                { style: u ? [lt.buttonViewNarrow, { flexGrow: 0 }] : lt.buttonViewWide },
                w.a.createElement(nt.a, { link: i, onPress: o, size: 'large', testID: n, type: 'primaryFilled' }, a),
              ),
            )
      }
      var lt = ee.a.create(function (e) {
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
        st = a('Irs7'),
        ct = a('yE5w'),
        ut = O.a.a63a89fe,
        dt = O.a.j401e4bc,
        mt = O.a.e8adeec8,
        pt = O.a.ja781451
      function ft(e) {
        var t = Object(st.b)(),
          a = pt(U(e.impressions)),
          n = pt(U(e.engagements)),
          r = dt({ impressions: a, engagements: n }),
          i = {
            items: [{ label: w.a.createElement(Te.b, { size: 'headline2', weight: 'heavy' }, ut), description: r }],
          }
        var o = w.a.createElement(Me.a, ze()({}, i, { containerStyle: gt.infoItem })),
          l = null !== Object(B.a)(),
          s = ''
            .concat(e.tweetPermalink, '/')
            .concat(l ? ct.a.Webview : ct.a.Rweb, '/')
            .concat(ct.c.Intro)
        return w.a.createElement(ot, {
          buttonString: mt,
          infoItemGroup: o,
          link: s,
          onButtonPress: function () {
            t.scribe(z(e.userId, 'PromoteAgainButton'))
          },
        })
      }
      var gt = ee.a.create(function (e) {
          return {
            infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' },
            decorationContainer: { height: e.spaces.space24, width: e.spaces.space24, marginRight: e.spaces.space24 },
            icon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.green500 },
          }
        }),
        yt = O.a.dcfb0332,
        bt = O.a.g6bf2fda,
        ht = O.a.df2c469a,
        vt = O.a.ja781451
      function wt(e) {
        var t = Object(st.b)(),
          a = null !== Object(B.a)(),
          n = vt(U(e.impressions)),
          r = bt({ impressions: n })
        var i = {
            items: [{ label: w.a.createElement(Te.b, { size: 'headline1', weight: 'heavy' }, yt), description: r }],
          },
          o = w.a.createElement(Me.a, ze()({}, i, { containerStyle: Et.infoItem }))
        return w.a.createElement(ot, {
          buttonString: ht,
          buttonTestID: e.buttonTestID,
          infoItemGroup: o,
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
      var Et = ee.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        kt = O.a.dcfb0332,
        It = O.a.f96eec3c,
        Pt = O.a.e9891f7c,
        xt = O.a.i859a9d3
      function Tt(e) {
        var t = Object(st.b)(),
          a = {
            items: [{ label: w.a.createElement(Te.b, { size: 'headline1', weight: 'heavy' }, kt), description: It }],
          }
        var n = w.a.createElement(Me.a, ze()({}, a, { containerStyle: _t.infoItem })),
          r = null !== Object(B.a)(),
          i = ''
            .concat(e.tweetPermalink, '/')
            .concat(r ? ct.a.Webview : ct.a.Rweb, '/')
            .concat(ct.c.Intro)
        return w.a.createElement(ot, {
          buttonString: Pt,
          expandButtonText: xt,
          infoItemGroup: n,
          link: i,
          onButtonPress: function () {
            t.scribe(z(e.userId, 'NotStartedPromotionButton'))
          },
        })
      }
      var _t = ee.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        Ct = 'switchToProfessionalButton',
        Lt = a('5emT'),
        St = O.a.jede3014,
        Rt = O.a.i094e43b,
        Vt = O.a.f638d3e0
      function At(e) {
        var t = Object(st.b)(),
          a = {
            items: [
              {
                label: w.a.createElement(Te.b, { size: 'headline2', weight: 'heavy' }, St),
                description: Rt,
                decoration: w.a.createElement(Lt.a, { style: [Bt.icon, Bt.decorationContainer] }),
              },
            ],
          }
        return w.a.createElement(
          $.a,
          { style: Bt.promotionInfoView },
          w.a.createElement(
            $.a,
            { style: Bt.infoItemView },
            w.a.createElement(Me.a, ze()({}, a, { containerStyle: Bt.infoItem })),
          ),
          w.a.createElement(
            $.a,
            { style: Bt.buttonView },
            w.a.createElement(
              Te.b,
              {
                color: 'primary',
                link: 'https://twitter.com/adspolicy',
                onPress: function () {
                  t.scribe(z(e.userId, 'ReviewPolicyButton'))
                },
              },
              Vt,
            ),
          ),
        )
      }
      var Ft,
        Bt = ee.a.create(function (e) {
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
        Dt = (a('enFi'), a('jAXQ')),
        Ot = a.n(Dt),
        Kt =
          (a('yH/f'),
          Object.freeze({
            notProfessional: 'not_professional',
            notStarted: 'not_started',
            underReview: 'under_review',
            running: 'running',
            completed: 'completed',
            paused: 'paused',
          })),
        jt = void 0 !== Ft ? Ft : (Ft = a('+s2u'))
      function zt(e) {
        var t,
          a,
          n,
          r,
          i = e.engagements,
          o = e.impressions,
          l = e.promotionInfoState,
          s = e.tweet,
          c = Ot()(jt, e.campaignInfo)
        switch (l) {
          case Kt.notProfessional:
            return w.a.createElement(wt, {
              buttonTestID: Ct,
              impressions: null == o ? void 0 : o.value.total,
              tweet_id: s.id_str,
              userId: e.userId,
            })
          case Kt.notStarted:
            return w.a.createElement(Tt, { tweetPermalink: s.permalink, userId: e.userId })
          case Kt.underReview:
            return w.a.createElement(At, { userId: e.userId })
          case Kt.running:
            return w.a.createElement(Je, {
              end_time: null == c || null === (t = c.campaign) || void 0 === t ? void 0 : t.end_time,
              isPaused: !1,
              start_time: null == c || null === (a = c.campaign) || void 0 === a ? void 0 : a.start_time,
            })
          case Kt.completed:
            return w.a.createElement(ft, {
              engagements: null == i ? void 0 : i.value.promoted,
              impressions: null == o ? void 0 : o.value.promoted,
              tweetPermalink: s.permalink,
              userId: e.userId,
            })
          case Kt.paused:
            return w.a.createElement(Je, {
              end_time: null == c || null === (n = c.campaign) || void 0 === n ? void 0 : n.end_time,
              isPaused: !0,
              start_time: null == c || null === (r = c.campaign) || void 0 === r ? void 0 : r.start_time,
            })
          default:
            return null
        }
      }
      var Nt,
        Ht,
        Wt,
        Qt = a('Ud88'),
        Mt = a.n(Qt),
        qt = a('n0Rl'),
        Gt = a('Hsf0'),
        Ut = a.n(Gt),
        Xt = a('LLQb'),
        Yt = O.a.deaf5b15,
        Jt = void 0 !== Nt ? Nt : (Nt = a('2O3u')),
        Zt = (void 0 !== Ht || (Ht = a('njVe')), void 0 !== Wt ? Wt : (Wt = a('wfDE'))),
        $t = Object(qt.b)(Zt, { errorConfig: { context: x } })
      function ea(e) {
        var t = e.hidePromotionInfo,
          a = e.quickPromoteEligibility,
          n = e.tweet,
          r = e.userId,
          i = Object(st.b)(),
          o = Mt()(),
          l = Object(I.useCreateLocalApiErrorHandler)(x)
        return (
          w.a.useEffect(
            function () {
              var e = l({ showToast: !1 })
              xe()(o, Zt, { restId: n.id_str }).subscribe({ error: e })
            },
            [n, o, l],
          ),
          w.a.createElement($t, {
            render: function (e) {
              if (e.fetchStatus === qt.a.FAILED) {
                var o = e.retry
                return (
                  i.scribe(N('NetworkError', r, n.id_str)),
                  w.a.createElement(Xt.a, { onRequestRetry: o, retryMessage: Yt })
                )
              }
              if (e.fetchStatus === qt.a.LOADED) {
                var l,
                  s,
                  c =
                    null === (l = e.data) || void 0 === l || null === (s = l.tweet_result_by_rest_id) || void 0 === s
                      ? void 0
                      : s.result
                if ('Tweet' === (null == c ? void 0 : c.__typename)) {
                  var u = Ut()(Jt, c.analytics)
                  ;(null != u && u.metrics.length) || i.scribe(N('EmptyMetricsFromBackend', r, n.id_str))
                  var d = aa(c.analytics),
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
                    $.a,
                    { style: na.tweetActivity },
                    w.a.createElement(
                      $.a,
                      { style: na.metricsView },
                      w.a.createElement(Oe, { likes: y, replies: E, retweets: k, showPromotionPercentages: P }),
                      w.a.createElement(Ee, {
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
                      : w.a.createElement(zt, {
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
      var ta = function (e, t) {
          return e
            ? e.metrics.find(function (e) {
                return e.key === t
              })
            : null
        },
        aa = function (e) {
          var t = Ut()(Jt, e)
          return {
            detailExpands: ta(t, 'DetailExpands'),
            engagements: ta(t, 'Engagements'),
            follows: ta(t, 'Follows'),
            impressions: ta(t, 'Impressions'),
            likes: ta(t, 'Favorites'),
            linkClicks: ta(t, 'UrlClicks'),
            mediaViews: ta(t, 'MediaViews'),
            profileVisits: ta(t, 'UserProfileClicks'),
            replies: ta(t, 'Replies'),
            retweets: ta(t, 'Retweets'),
          }
        }
      var na = ee.a.create(function (e) {
          return { tweetActivity: { flex: 1 }, metricsView: { flexGrow: 1 } }
        }),
        ra = a('E0cF'),
        ia = a('q9Zt'),
        oa = ['data'],
        la = O.a.g9079b93,
        sa = O.a.a57daeb1,
        ca = O.a.deaf5b15,
        ua = (function (e) {
          f()(a, e)
          var t = y()(a)
          function a() {
            var e
            s()(this, a)
            for (var n = arguments.length, i = new Array(n), l = 0; l < n; l++) i[l] = arguments[l]
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
                  r = (n && ra.a.getOriginalTweet(n)) || void 0
                return !r || (r && r.user.id_str !== e.context.loggedInUserId)
                  ? w.a.createElement(ia.a, { onRetry: null, title: la })
                  : (e._scribeEligibility(),
                    w.a.createElement(
                      $.a,
                      { style: da.topLevelView },
                      w.a.createElement(
                        $.a,
                        { style: da.quoteTweet },
                        w.a.createElement(K.a, {
                          isCondensed: !0,
                          style: { cursor: 'default' },
                          tweetId: r.id_str,
                          withLink: !1,
                          withUserHoverCard: !1,
                        }),
                      ),
                      w.a.createElement(ea, {
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
                  i = (n && ra.a.getOriginalTweet(n)) || void 0,
                  l = j(e._dwellStartTime),
                  s = l.data,
                  c = o()(l, oa)
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
                    r = (n && ra.a.getOriginalTweet(n)) || void 0,
                    i = null !== Object(B.a)()
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
                      title: i ? null : sa,
                    },
                    w.a.createElement(V.a, { fetchStatus: t, render: this._render, retryMessage: ca }),
                  )
                },
              },
            ]),
            a
          )
        })(w.a.PureComponent)
      h()(ua, 'contextType', at.a)
      var da = ee.a.create(function (e) {
          return { topLevelView: { flex: 1 }, quoteTweet: { margin: e.spaces.space16, marginBottom: e.spaces.space12 } }
        }),
        ma = R(ua)
      t.default = ma
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
        h = a('uCxL'),
        v = a('x5Pi'),
        w = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        E = y(function (e) {
          var t = e.community,
            a = e.createLocalApiErrorHandler,
            n = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            l = (e.tweetId, o()(e, w)),
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
            g = i && Object(v.f)(i, m, t),
            y = g && Object(v.e)(g),
            E = d.isTrue('responsive_web_reactions_enabled')
          return s.a.createElement(
            h.a,
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
              c.current && (f.current.add(g), v(g))
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
                f.current.add(i), v(i)
              }
            },
            [o, e, v, c],
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
                    'NullQueryReference' !== h.kind &&
                    P(h.variables, { fetchPolicy: h.fetchPolicy, networkCacheConfig: h.networkCacheConfig })
                  )
                )
              var t = f.current
              if (c.current) {
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
                } catch (o) {
                  r.e(o)
                } finally {
                  r.f()
                }
              }
            },
            [h, c, P, e],
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
        x = a('0KEI'),
        T = a('lU4h'),
        _ = a.n(T),
        C = a('21nk'),
        L = a.n(C),
        S = a('bCEw'),
        R = a.n(S),
        V = a('Ud88'),
        A = a.n(V),
        F = function (e) {
          return (0, e.render)({ fetchStatus: I.a.LOADING, data: null, error: null, retry: P.a })
        },
        B = (function (e) {
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
                o = a.render,
                l = a.variables,
                s = R()(e),
                c = r()(s, 2),
                u = c[0],
                d = c[1],
                m = Object(x.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                p = _()(l),
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
                      { fallback: h.a.createElement(F, { render: o }) },
                      h.a.createElement(
                        B,
                        { errorHandler: m(t.errorConfig.options || {}), key: u.fetchKey, retry: g },
                        function (t, a) {
                          return t
                            ? o({ fetchStatus: I.a.FAILED, error: t, data: null, retry: a })
                            : h.a.createElement(D, { query: e, queryRef: u, render: o })
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
            var m = h.a.lazy(function () {
              return k()(l, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return i({ fetchStatus: I.a.LOADED, data: e, error: null, retry: P.a })
                  },
                  function (e) {
                    return e instanceof v.a
                      ? (s(t.errorConfig.options || {})(e),
                        i({ fetchStatus: I.a.FAILED, data: null, error: e, retry: P.a }))
                      : h.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: a.set(l, e).get.bind(a, l) }
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
