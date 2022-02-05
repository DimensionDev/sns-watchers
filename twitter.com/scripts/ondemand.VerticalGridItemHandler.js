;(window.webpackJsonp = window.webpackJsonp || []).push([
  [239],
  {
    Dfuf: function (e, t, r) {
      'use strict'
      r('hBvt')
      var n = r('ERkP'),
        a = r.n(n),
        o = r('t62R'),
        i = r('IJsT'),
        c = r('WtWS'),
        l = r('I4+6'),
        s = r('cm6r'),
        u = r('rHpw'),
        p = r('MWbm'),
        d = u.a.create(function (e) {
          return {
            base: { flexGrow: 1, backgroundColor: e.colors.cellBackground, justifyContent: 'space-between' },
            icon: {
              alignSelf: 'flex-end',
              color: e.colors.white,
              marginRight: e.spaces.space12,
              paddingTop: e.spaces.space12,
              width: e.spaces.space20,
              height: e.spaces.space20,
            },
            border: {
              flexGrow: 1,
              borderColor: e.colors.borderColor,
              borderRadius: e.borderRadii.large,
              borderWidth: e.borderWidths.medium,
            },
            containerClicked: {
              backgroundColor: e.colors.primary,
              borderColor: e.colors.primary,
              borderWidth: e.borderWidths.medium,
            },
            containerUnclicked: { flexDirection: 'column-reverse' },
            text: {
              alignSelf: 'flex-start',
              bottom: 0,
              marginBottom: e.spaces.space12,
              marginHorizontal: e.spaces.space12,
              position: 'absolute',
            },
            mainContainer: { padding: 0 },
            wrapper: { padding: e.spaces.space4 },
          }
        })
      t.a = function (e) {
        var t = e.accessibilityLabel,
          r = e.isSelected,
          n = e.link,
          b = e.onClick,
          f = e.text,
          m = r ? d.containerClicked : d.containerUnclicked,
          y = l.a.generate({
            backgroundColor: r ? u.a.theme.colors.primary : 'transparent',
            color: r ? u.a.theme.colors.white : u.a.theme.colors.primary,
          }),
          w = a.a.createElement(
            p.a,
            { style: d.base },
            a.a.createElement(
              s.a,
              { accessibilityLabel: t, interactiveStyles: y, style: [d.border, m] },
              r ? a.a.createElement(c.a, { style: d.icon }) : null,
              a.a.createElement(
                o.b,
                { color: r ? 'whiteOnColor' : 'normal', numberOfLines: 2, style: d.text, weight: 'bold' },
                f,
              ),
            ),
          )
        return a.a.createElement(
          p.a,
          { style: d.wrapper },
          a.a.createElement(i.a, {
            accessibilityLabel: t,
            containerStyle: d.mainContainer,
            link: n,
            onClick: b,
            upper: w,
            withInteractiveStyling: !0,
          }),
        )
      }
    },
    IJsT: function (e, t, r) {
      'use strict'
      r('hBvt')
      var n = r('ERkP'),
        a = r.n(n),
        o = r('cm6r'),
        i = r('rHpw'),
        c = r('MWbm'),
        l = function (e) {
          var t = e.accessibilityLabel,
            r = e.containerStyle,
            n = e.isCompact,
            i = e.link,
            l = e.lower,
            u = e.onClick,
            p = e.stackLayoutLowerStyle,
            d = e.stackLayoutUpperStyle,
            b = e.upper,
            f = e.withInteractiveStyling,
            m = a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(c.a, { style: [s.defaultUpperContainerStyle, d, n && { height: 'auto' }] }, b),
              l ? a.a.createElement(c.a, { style: [s.defaultLowerContainerStyle, p] }, l) : null,
            )
          return a.a.createElement(
            o.a,
            { accessibilityLabel: t, interactive: f, link: i, onClick: u, style: [s.root, r] },
            m,
          )
        }
      l.defaultProps = { withInteractiveStyling: !1 }
      var s = i.a.create(function (e) {
        return {
          root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large },
          defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: 'flex-end' },
          defaultUpperContainerStyle: {
            height: 'calc('.concat(e.spaces.space48, '*2)'),
            overflow: 'hidden',
            borderRadius: e.borderRadii.large,
          },
        }
      })
      t.a = l
    },
    bXO0: function (e, t, r) {
      'use strict'
      r.r(t)
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        o = r('ezF+'),
        i = r('VPAj'),
        c = r('zh9S'),
        l = r('Rp9C'),
        s = r('Zejx'),
        u = r('97Jx'),
        p = r.n(u),
        d = (r('ho0z'), r('ERkP')),
        b = r.n(d),
        f = r('rxPX'),
        m = r('0KEI'),
        y = Object(f.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('TOPIC_TILE_CONTEXT'),
              follow: s.a.follow,
              unfollow: s.a.unfollow,
            }
          })
          .withAnalytics(),
        w = r('3XMw'),
        g = r.n(w),
        h = r('Tp1h'),
        v = r('Jkc4'),
        k = r('gwY8'),
        C = r('zF9o'),
        E = r('Dfuf'),
        O = r('gaoh'),
        S = g.a.je808a16,
        R = g.a.ge8f3043,
        j = g.a.aa576cbf,
        L = y(function (e) {
          var t = e.analytics,
            r = e.createLocalApiErrorHandler,
            n = e.follow,
            a = e.isRecommended,
            o = e.style,
            i = e.topic,
            c = e.unfollow,
            l = e.url,
            s = i.following,
            u = i.id,
            d = i.name,
            f = s ? j({ topicName: d }) : R({ topicName: d }),
            m = b.a.useRef(!1),
            y = function (e, t, r) {
              return i.following ? e(g(r)) : e(w(t))
            },
            w = function (e) {
              return function (a) {
                n(i.id)
                  .catch(r())
                  .then(e && e(i.id)),
                  t.scribeAction('follow')
              }
            },
            g = function (e) {
              return function (n) {
                c(i.id)
                  .catch(r())
                  .then(e && e(i.id)),
                  t.scribeAction('unfollow')
              }
            },
            L = function (e) {
              t.scribeAction('click')
            }
          return b.a.createElement(v.a, { customText: d, displayMode: h.a.topic }, function (e) {
            return b.a.createElement(k.a.Consumer, null, function (t) {
              var r = t.onFollow,
                n = t.onInitialize,
                i = t.onUnfollow
              n && !m.current && (n(u, s), (m.current = !0))
              var c = a
                ? (function (e, t, r) {
                    return { accessibilityLabel: f, onClick: y(e, t, r), text: d }
                  })(e, r, i)
                : (function (e) {
                    return {
                      accessibilityLabel: S({ topicName: d }),
                      onClick: e(L),
                      link: (null == l ? void 0 : l.url) || ((t = u), '/i/topics/'.concat(t)),
                      text: d,
                    }
                    var t
                  })(e)
              return b.a.createElement(
                b.a.Fragment,
                null,
                o === C.a.DoubleStateDefault
                  ? b.a.createElement(E.a, p()({}, c, { isSelected: s }))
                  : b.a.createElement(O.a, c),
              )
            })
          })
        })
      function x(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? x(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : x(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var P = o.g({
        bindActions: function (e) {
          e.module
          return { scribe: c.c }
        },
        selectData: function (e) {
          var t = e.entry
          return {
            topic: function (e) {
              var r
              return s.a.select(e, null === (r = t.content.content) || void 0 === r ? void 0 : r.topicTile.topicId)
            },
          }
        },
        component: L,
        createProps: function (e) {
          var t = e.data.topic,
            r = e.entry.content.content.topicTile,
            n = r.functionalityType,
            a = r.style,
            o = r.url
          return t ? { topic: t, isRecommended: n === C.b.Recommendation, style: a, url: o } : null
        },
        getScribeDataItem: function (e) {
          var t = e.content.content.topicTile.topicId,
            r = e.itemMetadata.clientEventInfo
          return l.a.forTopic(t, r)
        },
        onImpression: function (e) {
          var t = e.actions.scribe,
            r = e.scribeData
          t(I(I({}, e.scribeNamespace), {}, { action: 'impression' }), r)
        },
        shouldDisplayBorder: Object(i.a)(!1),
        isFocusable: Object(i.a)(!0),
      })
      t.default = P
    },
    gaoh: function (e, t, r) {
      'use strict'
      r('hBvt')
      var n = r('ERkP'),
        a = r.n(n),
        o = r('t62R'),
        i = r('IJsT'),
        c = r('I4+6'),
        l = r('cm6r'),
        s = r('rHpw'),
        u = r('MWbm'),
        p = s.a.create(function (e) {
          return {
            base: { flexGrow: 1, backgroundColor: e.colors.primary, justifyContent: 'center' },
            centerTile: { margin: e.spaces.space8 },
            container: { padding: 0, borderRadius: e.borderRadii.large },
            wrapper: { padding: e.spaces.space4, borderRadius: e.borderRadii.large },
          }
        })
      t.a = function (e) {
        var t = e.accessibilityLabel,
          r = e.link,
          n = e.onClick,
          d = e.text,
          b = c.a.generate({ backgroundColor: s.a.theme.colors.primary, color: s.a.theme.colors.white }),
          f = a.a.createElement(
            l.a,
            { accessibilityLabel: t, interactiveStyles: b, style: p.base },
            a.a.createElement(
              o.b,
              {
                align: 'center',
                color: 'whiteOnColor',
                numberOfLines: 3,
                size: 'headline2',
                style: p.centerTile,
                weight: 'bold',
              },
              d,
            ),
          )
        return a.a.createElement(
          u.a,
          { style: p.wrapper },
          a.a.createElement(i.a, {
            accessibilityLabel: t,
            containerStyle: p.container,
            link: r,
            onClick: n,
            upper: f,
            withInteractiveStyling: !0,
          }),
        )
      }
    },
    gwY8: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return a
      })
      var n = r('ERkP'),
        a = r.n(n).a.createContext({ onFollow: void 0, onInitialize: void 0, onUnfollow: void 0 })
    },
  },
])
//# sourceMappingURL=WIPED
