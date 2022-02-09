;(window.webpackJsonp = window.webpackJsonp || []).push([
  [244],
  {
    Dfuf: function (e, t, n) {
      'use strict'
      n('hBvt')
      var a = n('ERkP'),
        r = n.n(a),
        o = n('t62R'),
        i = n('IJsT'),
        c = n('WtWS'),
        l = n('I4+6'),
        s = n('cm6r'),
        u = n('rHpw'),
        d = n('MWbm'),
        p = u.a.create(function (e) {
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
          n = e.isSelected,
          a = e.link,
          b = e.onClick,
          m = e.text,
          f = n ? p.containerClicked : p.containerUnclicked,
          y = l.a.generate({
            backgroundColor: n ? u.a.theme.colors.primary : 'transparent',
            color: n ? u.a.theme.colors.white : u.a.theme.colors.primary,
          }),
          w = r.a.createElement(
            d.a,
            { style: p.base },
            r.a.createElement(
              s.a,
              { accessibilityLabel: t, interactiveStyles: y, style: [p.border, f] },
              n ? r.a.createElement(c.a, { style: p.icon }) : null,
              r.a.createElement(
                o.b,
                { color: n ? 'whiteOnColor' : 'normal', numberOfLines: 2, style: p.text, weight: 'bold' },
                m,
              ),
            ),
          )
        return r.a.createElement(
          d.a,
          { style: p.wrapper },
          r.a.createElement(i.a, {
            accessibilityLabel: t,
            containerStyle: p.mainContainer,
            link: a,
            onClick: b,
            upper: w,
            withInteractiveStyling: !0,
          }),
        )
      }
    },
    IJsT: function (e, t, n) {
      'use strict'
      n('hBvt')
      var a = n('ERkP'),
        r = n.n(a),
        o = n('I4+6'),
        i = n('cm6r'),
        c = n('rHpw'),
        l = n('MWbm'),
        s = function (e) {
          var t = e.accessibilityLabel,
            n = e.containerStyle,
            a = e.isCompact,
            s = e.link,
            d = e.lower,
            p = e.onClick,
            b = e.stackLayoutLowerStyle,
            m = e.stackLayoutUpperStyle,
            f = e.upper,
            y = e.withInsetFocusRing,
            w = e.withInteractiveStyling,
            g = o.a.generate({
              backgroundColor: c.a.theme.colors.transparent,
              color: c.a.theme.colors.primary,
              insetFocusRing: y,
            }),
            h = r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(l.a, { style: [u.defaultUpperContainerStyle, m, a && { height: 'auto' }] }, f),
              d ? r.a.createElement(l.a, { style: [u.defaultLowerContainerStyle, b] }, d) : null,
            )
          return r.a.createElement(
            i.a,
            {
              accessibilityLabel: t,
              interactive: w,
              interactiveStyles: w ? g : void 0,
              link: s,
              onClick: p,
              style: [u.root, n],
            },
            h,
          )
        }
      s.defaultProps = { withInsetFocusRing: !0, withInteractiveStyling: !1 }
      var u = c.a.create(function (e) {
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
      t.a = s
    },
    bXO0: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ezF+'),
        i = n('VPAj'),
        c = n('zh9S'),
        l = n('Rp9C'),
        s = n('Zejx'),
        u = n('97Jx'),
        d = n.n(u),
        p = (n('ho0z'), n('ERkP')),
        b = n.n(p),
        m = n('rxPX'),
        f = n('0KEI'),
        y = Object(m.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)('TOPIC_TILE_CONTEXT'),
              follow: s.a.follow,
              unfollow: s.a.unfollow,
            }
          })
          .withAnalytics(),
        w = n('3XMw'),
        g = n.n(w),
        h = n('Tp1h'),
        v = n('Jkc4'),
        k = n('gwY8'),
        C = n('zF9o'),
        E = n('Dfuf'),
        R = n('gaoh'),
        S = g.a.je808a16,
        I = g.a.ge8f3043,
        L = g.a.aa576cbf,
        x = y(function (e) {
          var t = e.analytics,
            n = e.createLocalApiErrorHandler,
            a = e.follow,
            r = e.isRecommended,
            o = e.style,
            i = e.topic,
            c = e.unfollow,
            l = e.url,
            s = i.following,
            u = i.id,
            p = i.name,
            m = s ? L({ topicName: p }) : I({ topicName: p }),
            f = b.a.useRef(!1),
            y = function (e, t, n) {
              return i.following ? e(g(n)) : e(w(t))
            },
            w = function (e) {
              return function (r) {
                a(i.id)
                  .catch(n())
                  .then(e && e(i.id)),
                  t.scribeAction('follow')
              }
            },
            g = function (e) {
              return function (a) {
                c(i.id)
                  .catch(n())
                  .then(e && e(i.id)),
                  t.scribeAction('unfollow')
              }
            },
            x = function (e) {
              t.scribeAction('click')
            }
          return b.a.createElement(v.a, { customText: p, displayMode: h.a.topic }, function (e) {
            return b.a.createElement(k.a.Consumer, null, function (t) {
              var n = t.onFollow,
                a = t.onInitialize,
                i = t.onUnfollow
              a && !f.current && (a(u, s), (f.current = !0))
              var c = r
                ? (function (e, t, n) {
                    return { accessibilityLabel: m, onClick: y(e, t, n), text: p }
                  })(e, n, i)
                : (function (e) {
                    return {
                      accessibilityLabel: S({ topicName: p }),
                      onClick: e(x),
                      link: (null == l ? void 0 : l.url) || ((t = u), '/i/topics/'.concat(t)),
                      text: p,
                    }
                    var t
                  })(e)
              return b.a.createElement(
                b.a.Fragment,
                null,
                o === C.a.DoubleStateDefault
                  ? b.a.createElement(E.a, d()({}, c, { isSelected: s }))
                  : b.a.createElement(R.a, c),
              )
            })
          })
        }),
        T = o.g({
          bindActions: function (e) {
            e.module
            return { scribe: c.c }
          },
          selectData: function (e) {
            var t = e.entry
            return {
              topic: function (e) {
                var n
                return s.a.select(e, null === (n = t.content.content) || void 0 === n ? void 0 : n.topicTile.topicId)
              },
            }
          },
          component: x,
          createProps: function (e) {
            var t = e.data.topic,
              n = e.entry.content.content.topicTile,
              a = n.functionalityType,
              r = n.style,
              o = n.url
            return t ? { topic: t, isRecommended: a === C.b.Recommendation, style: r, url: o } : null
          },
          getScribeDataItem: function (e) {
            var t = e.content.content.topicTile.topicId,
              n = e.itemMetadata.clientEventInfo
            return l.a.forTopic(t, n)
          },
          onImpression: function (e) {
            var t = e.actions.scribe,
              n = e.scribeData,
              a = e.scribeNamespace
            t(r()(r()({}, a), {}, { action: 'impression' }), n)
          },
          shouldDisplayBorder: Object(i.a)(!1),
          isFocusable: Object(i.a)(!0),
        })
      t.default = T
    },
    gaoh: function (e, t, n) {
      'use strict'
      n('hBvt')
      var a = n('ERkP'),
        r = n.n(a),
        o = n('t62R'),
        i = n('IJsT'),
        c = n('I4+6'),
        l = n('cm6r'),
        s = n('rHpw'),
        u = n('MWbm'),
        d = s.a.create(function (e) {
          return {
            base: { flexGrow: 1, backgroundColor: e.colors.primary, justifyContent: 'center' },
            centerTile: { margin: e.spaces.space8 },
            container: { padding: 0, borderRadius: e.borderRadii.large },
            wrapper: { padding: e.spaces.space4, borderRadius: e.borderRadii.large },
          }
        })
      t.a = function (e) {
        var t = e.accessibilityLabel,
          n = e.link,
          a = e.onClick,
          p = e.text,
          b = c.a.generate({ backgroundColor: s.a.theme.colors.primary, color: s.a.theme.colors.white }),
          m = r.a.createElement(
            l.a,
            { accessibilityLabel: t, interactiveStyles: b, style: d.base },
            r.a.createElement(
              o.b,
              {
                align: 'center',
                color: 'whiteOnColor',
                numberOfLines: 3,
                size: 'headline2',
                style: d.centerTile,
                weight: 'bold',
              },
              p,
            ),
          )
        return r.a.createElement(
          u.a,
          { style: d.wrapper },
          r.a.createElement(i.a, {
            accessibilityLabel: t,
            containerStyle: d.container,
            link: n,
            onClick: a,
            upper: m,
            withInteractiveStyling: !0,
          }),
        )
      }
    },
    gwY8: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var a = n('ERkP'),
        r = n.n(a).a.createContext({ onFollow: void 0, onInitialize: void 0, onUnfollow: void 0 })
    },
  },
])
//# sourceMappingURL=WIPED
