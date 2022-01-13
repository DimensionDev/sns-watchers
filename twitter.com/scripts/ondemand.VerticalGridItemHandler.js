;(window.webpackJsonp = window.webpackJsonp || []).push([
  [233],
  {
    Dfuf: function (e, t, r) {
      'use strict'
      r('hBvt')
      var n = r('ERkP'),
        o = r('t62R'),
        a = r('IJsT'),
        i = r('WtWS'),
        c = r('I4+6'),
        l = r('cm6r'),
        s = r('rHpw'),
        u = r('MWbm'),
        p = s.a.create(function (e) {
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
          d = e.link,
          b = e.onClick,
          f = e.text,
          m = r ? p.containerClicked : p.containerUnclicked,
          y = c.a.generate({
            backgroundColor: r ? s.a.theme.colors.primary : 'transparent',
            color: r ? s.a.theme.colors.white : s.a.theme.colors.primary,
          }),
          w = n.createElement(
            u.a,
            { style: p.base },
            n.createElement(
              l.a,
              { accessibilityLabel: t, interactiveStyles: y, style: [p.border, m] },
              r ? n.createElement(i.a, { style: p.icon }) : null,
              n.createElement(
                o.b,
                { color: r ? 'whiteOnColor' : 'normal', numberOfLines: 2, style: p.text, weight: 'bold' },
                f,
              ),
            ),
          )
        return n.createElement(
          u.a,
          { style: p.wrapper },
          n.createElement(a.a, {
            accessibilityLabel: t,
            containerStyle: p.mainContainer,
            link: d,
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
        o = r('cm6r'),
        a = r('rHpw'),
        i = r('MWbm'),
        c = function (e) {
          var t = e.accessibilityLabel,
            r = e.containerStyle,
            a = e.isCompact,
            c = e.link,
            s = e.lower,
            u = e.onClick,
            p = e.stackLayoutLowerStyle,
            d = e.stackLayoutUpperStyle,
            b = e.upper,
            f = e.withInteractiveStyling,
            m = n.createElement(
              n.Fragment,
              null,
              n.createElement(i.a, { style: [l.defaultUpperContainerStyle, d, a && { height: 'auto' }] }, b),
              s ? n.createElement(i.a, { style: [l.defaultLowerContainerStyle, p] }, s) : null,
            )
          return n.createElement(
            o.a,
            { accessibilityLabel: t, interactive: f, link: c, onClick: u, style: [l.root, r] },
            m,
          )
        }
      c.defaultProps = { withInteractiveStyling: !1 }
      var l = a.a.create(function (e) {
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
      t.a = c
    },
    bXO0: function (e, t, r) {
      'use strict'
      r.r(t)
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        o = r.n(n),
        a = r('ezF+'),
        i = r('VPAj'),
        c = r('zh9S'),
        l = r('Rp9C'),
        s = r('Zejx'),
        u = r('97Jx'),
        p = r.n(u),
        d = (r('ho0z'), r('ERkP')),
        b = r('rxPX'),
        f = r('0KEI'),
        m = Object(b.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)('TOPIC_TILE_CONTEXT'),
              follow: s.a.follow,
              unfollow: s.a.unfollow,
            }
          })
          .withAnalytics(),
        y = r('3XMw'),
        w = r.n(y),
        g = r('Tp1h'),
        h = r('Jkc4'),
        v = r('gwY8'),
        k = r('zF9o'),
        C = r('Dfuf'),
        E = r('gaoh'),
        O = w.a.je808a16,
        S = w.a.ge8f3043,
        R = w.a.aa576cbf,
        j = m(function (e) {
          var t = e.analytics,
            r = e.createLocalApiErrorHandler,
            n = e.follow,
            o = e.isRecommended,
            a = e.style,
            i = e.topic,
            c = e.unfollow,
            l = e.url,
            s = i.following,
            u = i.id,
            b = i.name,
            f = s ? R({ topicName: b }) : S({ topicName: b }),
            m = d.useRef(!1),
            y = function (e, t, r) {
              return i.following ? e(j(r)) : e(w(t))
            },
            w = function (e) {
              return function (o) {
                n(i.id)
                  .catch(r())
                  .then(e && e(i.id)),
                  t.scribeAction('follow')
              }
            },
            j = function (e) {
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
          return d.createElement(h.a, { customText: b, displayMode: g.a.topic }, function (e) {
            return d.createElement(v.a.Consumer, null, function (t) {
              var r = t.onFollow,
                n = t.onInitialize,
                i = t.onUnfollow
              n && !m.current && (n(u, s), (m.current = !0))
              var c = o
                ? (function (e, t, r) {
                    return { accessibilityLabel: f, onClick: y(e, t, r), text: b }
                  })(e, r, i)
                : (function (e) {
                    return {
                      accessibilityLabel: O({ topicName: b }),
                      onClick: e(L),
                      link: (null == l ? void 0 : l.url) || ((t = u), '/i/topics/'.concat(t)),
                      text: b,
                    }
                    var t
                  })(e)
              return d.createElement(
                d.Fragment,
                null,
                a === k.a.DoubleStateDefault
                  ? d.createElement(C.a, p()({}, c, { isSelected: s }))
                  : d.createElement(E.a, c),
              )
            })
          })
        })
      function L(e, t) {
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
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? L(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : L(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var I = a.g({
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
        component: j,
        createProps: function (e) {
          var t = e.data.topic,
            r = e.entry.content.content.topicTile,
            n = r.functionalityType,
            o = r.style,
            a = r.url
          return t ? { topic: t, isRecommended: n === k.b.Recommendation, style: o, url: a } : null
        },
        getScribeDataItem: function (e) {
          var t = e.content.content.topicTile.topicId,
            r = e.itemMetadata.clientEventInfo
          return l.a.forTopic(t, r)
        },
        onImpression: function (e) {
          var t = e.actions.scribe,
            r = e.scribeData
          t(x(x({}, e.scribeNamespace), {}, { action: 'impression' }), r)
        },
        shouldDisplayBorder: Object(i.a)(!1),
        isFocusable: Object(i.a)(!0),
      })
      t.default = I
    },
    gaoh: function (e, t, r) {
      'use strict'
      r('hBvt')
      var n = r('ERkP'),
        o = r('t62R'),
        a = r('IJsT'),
        i = r('I4+6'),
        c = r('cm6r'),
        l = r('rHpw'),
        s = r('MWbm'),
        u = l.a.create(function (e) {
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
          p = e.onClick,
          d = e.text,
          b = i.a.generate({ backgroundColor: l.a.theme.colors.primary, color: l.a.theme.colors.white }),
          f = n.createElement(
            c.a,
            { accessibilityLabel: t, interactiveStyles: b, style: u.base },
            n.createElement(
              o.b,
              {
                align: 'center',
                color: 'whiteOnColor',
                numberOfLines: 3,
                size: 'headline2',
                style: u.centerTile,
                weight: 'bold',
              },
              d,
            ),
          )
        return n.createElement(
          s.a,
          { style: u.wrapper },
          n.createElement(a.a, {
            accessibilityLabel: t,
            containerStyle: u.container,
            link: r,
            onClick: p,
            upper: f,
            withInteractiveStyling: !0,
          }),
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
