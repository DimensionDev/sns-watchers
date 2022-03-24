;(window.webpackJsonp = window.webpackJsonp || []).push([
  [26],
  {
    '+Tpo': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      })
      var a = n('ERkP'),
        i = n.n(a),
        o = n('3XMw'),
        r = n.n(o),
        c = n('xrkw'),
        l = n('wwsH'),
        s = r.a.f2849136,
        u = r.a.dedf22f3,
        d = { viewType: 'analytics' }
      function m(e) {
        var t = e.activeColor,
          n = e.color,
          a = e.iconSize,
          o = e.isDisabled,
          r = e.isFaded,
          m = e.isPresentational,
          h = e.onPress,
          f = e.style,
          p = e.tweetLink
        return i.a.createElement(l.a, {
          Icon: c.a,
          accessibilityLabel: u,
          activeColor: t,
          behavioralEventContext: d,
          color: n,
          hoverLabel: { label: s },
          iconSize: a,
          isDisabled: o,
          isFaded: r,
          isPresentational: m,
          link: !p || o || r ? void 0 : ''.concat(p, '/analytics'),
          onPress: h,
          style: f,
        })
      }
    },
    '01Kk': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return g
      })
      n('ho0z')
      var a,
        i = n('ERkP'),
        o = n.n(i),
        r = n('MWbm'),
        c = n('jhWN'),
        l = n('jV+4'),
        s = n('9VO7'),
        u = n('a2Fh'),
        d = n('9Xij'),
        m = n('rHpw'),
        h = (n('enFi'), n('jAXQ')),
        f = n.n(h),
        p = {
          backgroundBottomTweet: [12, 8, 6, 12],
          backgroundTopTweet: [13, 8, 5, 19, 8, 6],
          focalPointTweet: [12, 8, 5, 19, 17, 14],
        },
        b = void 0 !== a ? a : (a = n('EXnA'))
      function v(e) {
        var t = e.wordWidths
        return o.a.createElement(
          r.a,
          { style: w.root },
          o.a.createElement(d.a, { ratio: 1, style: w.mockUserAvatar }),
          o.a.createElement(
            r.a,
            { style: w.mockTweetContent },
            o.a.createElement(
              r.a,
              { style: w.mockUserNameContainer },
              o.a.createElement(u.a, {
                color: 'text',
                maxWidthPx: 18,
                style: w.mockUserNameMarginRight,
                wordHeightPx: 3,
                wordPercentWidths: [100],
              }),
              o.a.createElement(u.a, {
                color: 'gray700',
                maxWidthPx: 35,
                withBorderRadius: !0,
                wordHeightPx: 3,
                wordPercentWidths: [100],
              }),
            ),
            o.a.createElement(u.a, { withBorderRadius: !0, wordHeightPx: 3, wordPercentWidths: t }),
          ),
        )
      }
      var y = m.a.create(function (e) {
          return {
            root: {
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'flex-end',
              maxWidth: '327px',
              paddingHorizontal: e.spaces.space56,
              position: 'relative',
              userSelect: 'none',
              width: '100%',
            },
            mockBackgroundTweets: {
              backgroundColor: e.colors.cellBackground,
              borderRadius: e.borderRadii.xLarge,
              boxShadow: e.boxShadows.medium,
              height: '260px',
              justifyContent: 'space-between',
              width: '100%',
            },
            mockBodyCopy: { marginTop: e.spaces.space12 },
            mockFocalTweet: {
              display: 'flex',
              backgroundColor: e.colors.cellBackground,
              borderRadius: e.borderRadii.xLarge,
              boxShadow: e.boxShadows.medium,
              flexDirection: 'row',
              height: '104px',
              padding: e.spaces.space16,
              width: '100%',
            },
            mockFocalTweetContainer: {
              bottom: 0,
              display: 'flex',
              justifyContent: 'center',
              left: 0,
              position: 'absolute',
              right: 0,
              top: 0,
            },
            mockFocalTweetContent: { flex: 1, paddingBottom: e.spaces.space4, paddingLeft: e.spaces.space12 },
            superFollowIndicatorContainer: {
              alignSelf: 'flex-start',
              marginTop: e.spaces.space8,
              marginBottom: e.spaces.space4,
            },
          }
        }),
        w = m.a.create(function (e) {
          return {
            root: { flexDirection: 'row', marginBottom: e.spaces.space8, padding: e.spaces.space16, width: '100%' },
            mockUserAvatar: {
              border: 'none',
              backgroundColor: e.colors.gray300,
              borderRadius: e.borderRadii.infinite,
              height: m.a.theme.spaces.space40,
              width: m.a.theme.spaces.space40,
            },
            mockTweetContent: {
              flexGrow: 1,
              justifyContent: 'space-between',
              marginLeft: e.spaces.space12,
              marginTop: e.spaces.space12,
            },
            mockUserNameContainer: { flexDirection: 'row', justifyContent: 'flex-start' },
            mockUserNameMarginRight: { marginRight: e.spaces.space4 },
          }
        }),
        g = function (e) {
          var t = e.style,
            n = e.user,
            a = f()(b, n),
            i = (null == a ? void 0 : a.legacy) || {},
            d = i.name,
            m = i.profile_image_url_https,
            h = i.protected,
            w = i.screen_name,
            g = i.verified
          return d && w && m
            ? o.a.createElement(
                r.a,
                { style: [y.root, t] },
                o.a.createElement(
                  r.a,
                  { style: y.mockBackgroundTweets },
                  o.a.createElement(v, { wordWidths: p.backgroundTopTweet }),
                  o.a.createElement(v, { wordWidths: p.backgroundBottomTweet }),
                ),
                o.a.createElement(
                  r.a,
                  { style: y.mockFocalTweetContainer },
                  o.a.createElement(
                    r.a,
                    { style: y.mockFocalTweet },
                    o.a.createElement(r.a, null, o.a.createElement(c.a, { focusable: !1, size: 'xLarge', uri: m })),
                    o.a.createElement(
                      r.a,
                      { style: y.mockFocalTweetContent },
                      o.a.createElement(l.a, {
                        isProtected: h,
                        isVerified: g,
                        name: d,
                        nameSize: 'body',
                        screenName: w,
                        screenNameSize: 'body',
                      }),
                      o.a.createElement(
                        r.a,
                        { style: y.superFollowIndicatorContainer },
                        o.a.createElement(s.a, { type: 'superFollower' }),
                      ),
                      o.a.createElement(u.a, {
                        style: y.mockBodyCopy,
                        withBorderRadius: !0,
                        wordPercentWidths: p.focalPointTweet,
                      }),
                    ),
                  ),
                ),
              )
            : null
        }
    },
    '0ig/': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      var a = n('i4Oy'),
        i = n('ERkP')
      function o() {
        var e = Object(i.useState)(function () {
            return a.a.get('window')
          }),
          t = e[0],
          n = e[1]
        return (
          Object(i.useEffect)(function () {
            function e(e) {
              var t = e.window
              null != t && n(t)
            }
            return (
              a.a.addEventListener('change', e),
              n(a.a.get('window')),
              function () {
                a.a.removeEventListener('change', e)
              }
            )
          }, []),
          t
        )
      }
    },
    '1k08': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      n('1t7P'), n('jQ/y')
      var a = n('ERkP'),
        i = n.n(a),
        o = n('MWbm'),
        r = n('t62R'),
        c = n('rHpw'),
        l = function (e) {
          var t = e.description,
            n = e.style,
            a = e.title
          return i.a.createElement(
            o.a,
            { style: n },
            i.a.createElement(
              r.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              a,
            ),
            t && i.a.createElement(r.b, { color: 'gray700', style: s.description }, t),
          )
        },
        s = c.a.create(function (e) {
          return { description: { marginTop: e.spaces.space8 } }
        })
    },
    '23An': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        i = a.useEffect,
        o = a.useRef
      e.exports = function () {
        var e = o(!0)
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
    '3MlI': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return l
      }),
        n.d(t, 'a', function () {
          return s
        })
      var a = n('ERkP'),
        i = n.n(a),
        o = n('nBUg'),
        r = n('rHpw'),
        c = n('MWbm')
      function l(e) {
        var t = e.accessibilityLabel,
          n = e.accessibilityLabelledBy,
          a = e.children,
          r = e.displayStyle,
          l = void 0 === r ? 'inline' : r,
          s = e.nativeID,
          d = e.style,
          m = o.b.useProps().withEdgeToEdgeTweetAnatomy()
        return i.a.createElement(
          c.a,
          {
            accessibilityLabel: t,
            accessibilityLabelledBy: n,
            accessibilityRole: 'group',
            nativeID: s,
            style: [u.container, u[''.concat(l, 'Container')], m && u.noMaxWidth, d],
          },
          a,
        )
      }
      var s = 425,
        u = r.a.create(function (e) {
          return {
            container: { columnGap: e.spacesPx.space8, flexDirection: 'row' },
            inlineContainer: { justifyContent: 'space-between', maxWidth: s },
            noMaxWidth: { maxWidth: 'none' },
            blockContainer: {
              alignItems: 'stretch',
              height: '100%',
              justifyContent: 'space-around',
              minHeight: '1.875rem',
              paddingHorizontal: e.spaces.space4,
            },
          }
        })
    },
    '9VLy': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return p
      })
      var a = n('ERkP'),
        i = n.n(a),
        o = n('3XMw'),
        r = n.n(o),
        c = n('lUZE'),
        l = n('MWbm'),
        s = n('t62R'),
        u = n('jhWN'),
        d = n('j7Bv'),
        m = n('rHpw'),
        h = r.a.d2fb334b,
        f = r.a.f0c99eff,
        p = function (e) {
          var t = e.imageUrl,
            n = e.screenName,
            a = e.style
          return i.a.createElement(
            l.a,
            { style: [b.signature, a] },
            i.a.createElement(s.b, { color: 'gray700', weight: 'bold' }, f({ screenName: null != n ? n : h })),
            t
              ? i.a.createElement(u.a, { size: 'medium', uri: t })
              : i.a.createElement(d.a, { Icon: c.a, size: 'medium' }),
          )
        },
        b = m.a.create(function (e) {
          return {
            signature: { display: 'inline-flex', alignItems: 'center', flexDirection: 'row', gap: e.spaces.space8 },
          }
        })
    },
    EXnA: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsDemoBadge_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiUser',
            kind: 'LinkedField',
            name: 'legacy',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'profile_image_url_https', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'd60e57c97939156b17868f6dccd68db1',
      }
      t.default = a
    },
    'EyD/': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        o = n('ERkP'),
        r = n.n(o),
        c = n('Lsrn'),
        l = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M22.859 15.413l-3.606 2.641 1.364 4.255c.059.137 0 .284-.117.372-.058.049-.127.068-.195.068-.078 0-.146-.02-.205-.068l-3.606-2.622-3.606 2.622c-.059.049-.127.068-.205.068-.068 0-.137-.02-.195-.068-.127-.088-.185-.235-.127-.372l1.365-4.255-3.597-2.641c-.117-.078-.166-.245-.127-.381.049-.147.175-.235.331-.235h4.454l1.374-4.255c.049-.147.185-.225.331-.225.136 0 .283.078.331.225l1.374 4.255h4.454c.146 0 .292.088.331.235.042.137.004.303-.123.381zM9.696 22.402H3.617c-.822 0-1.574-.359-2.062-.986-.503-.645-.674-1.486-.472-2.307.617-2.486 2.409-4.509 4.918-5.552.603-.252 1.299.036 1.549.644.251.607-.037 1.303-.642 1.554-1.806.751-3.091 2.183-3.524 3.928-.025.103-.011.202.039.266.015.019.056.072.194.072h6.079c.655 0 1.186.533 1.186 1.19s-.531 1.191-1.186 1.191zm.197-10.184c-1.439 0-3.055-.167-4.128-1.397-.894-1.026-1.19-2.566-.903-4.709.402-2.999 2.33-4.862 5.031-4.862s4.63 1.863 5.031 4.861c.287 2.142-.008 3.683-.902 4.708-1.073 1.233-2.689 1.399-4.129 1.399zm0-8.588c-1.906 0-2.51 1.521-2.68 2.799-.185 1.382-.068 2.359.338 2.825.352.404 1.075.584 2.343.584 1.269 0 1.992-.18 2.344-.584.405-.466.522-1.443.337-2.825-.172-1.277-.776-2.799-2.682-2.799z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    G41x: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
      })
      var a = n('ERkP'),
        i = n.n(a),
        o = n('mjJ+'),
        r = n('3XMw'),
        c = n.n(r),
        l = n('fn9Y'),
        s = n('wD1h'),
        u = n('wwsH'),
        d = c.a.dc63da15,
        m = c.a.jc9298a8,
        h = { viewType: 'share' }
      function f(e) {
        var t = e.actionItems,
          n = e.actionMenuDescription,
          a = e.activeColor,
          r = e.color,
          c = e.enableKeyboardShortcuts,
          f = e.iconSize,
          p = e.isDisabled,
          b = e.isFaded,
          v = e.isPresentational,
          y = e.onMenuCancel,
          w = e.onPress,
          g = e.style,
          k = e.withCount
        return i.a.createElement(u.a, {
          Icon: l.a,
          accessibilityLabel: m,
          activeColor: a,
          behavioralEventContext: h,
          color: r,
          enableKeyboardShortcuts: c,
          hoverLabel: { label: d },
          iconSize: f,
          isDisabled: p,
          isFaded: b,
          isPresentational: v,
          keyboardShortcut: s.a.shortcuts.share,
          onPress: w,
          renderMenu: b
            ? void 0
            : function (e) {
                return i.a.createElement(o.a, {
                  description: n,
                  items: t,
                  onCloseRequested: function () {
                    e(), null == y || y()
                  },
                  shouldCloseOnClick: !0,
                })
              },
          style: g,
          withCount: k,
        })
      }
    },
    HSMM: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      })
      n('hBvt')
      var a = n('ERkP'),
        i = n.n(a),
        o = n('3XMw'),
        r = n.n(o),
        c = n('dFWS'),
        l = n('wD1h'),
        s = n('wwsH'),
        u = r.a.hdf72269,
        d = r.a.c9940954,
        m = { viewType: 'reply' }
      function h(e) {
        var t = e.activeColor,
          n = e.color,
          a = e.count,
          o = e.enableKeyboardShortcuts,
          r = e.iconSize,
          h = e.isDisabled,
          f = e.isFaded,
          p = e.isPresentational,
          b = e.link,
          v = e.onPress,
          y = e.renderWrapper,
          w = e.style,
          g = e.testID,
          k = e.withCount && 'number' == typeof a,
          E = k ? d({ count: a }) : u
        return i.a.createElement(s.a, {
          Icon: c.a,
          accessibilityLabel: E,
          activeColor: t,
          behavioralEventContext: m,
          color: n,
          count: a,
          enableKeyboardShortcuts: o,
          hoverLabel: { label: u },
          iconSize: r,
          isDisabled: h,
          isFaded: f,
          isPresentational: p,
          keyboardShortcut: l.a.shortcuts.reply,
          link: b,
          onPress: v,
          renderWrapper: y,
          style: w,
          testID: g,
          withCount: k,
        })
      }
    },
    IqLm: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        o = n('ERkP'),
        r = n.n(o),
        c = n('Lsrn'),
        l = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M3.538 14.219l7.15 7.18c.39.39.89.63 1.47.6.55-.01 1.07-.23 1.45-.63l6.88-7.18c.56-.59.72-1.42.4-2.17s-1.03-1.21-1.84-1.21h-3.72v-6.81c0-1.1-.9-2-2-2h-2.66c-1.11 0-2 .9-2 2v6.81h-3.72c-.82 0-1.53.47-1.84 1.23-.32.76-.15 1.59.43 2.18zm.95-1.61c.04-.09.16-.3.46-.3h4.47c.41 0 .75-.34.75-.75v-7.56c0-.28.22-.5.5-.5h2.66c.28 0 .5.22.5.5v7.56c0 .41.34.75.75.75h4.47c.29 0 .42.21.46.3.04.09.1.33-.1.54l-6.88 7.18c-.1.11-.24.17-.39.17-.15 0-.29-.06-.39-.16l-7.15-7.18c-.21-.21-.15-.45-.11-.55z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    JWc1: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return y
      })
      n('uFXj'), n('kH1Z'), n('6U7i')
      var a = n('ERkP'),
        i = n.n(a),
        o = n('3XMw'),
        r = n.n(o),
        c = n('lUZE'),
        l = n('MWbm'),
        s = n('cHvH'),
        u = n('rHpw'),
        d = n('jhWN'),
        m = n('j7Bv'),
        h = n('6OUF'),
        f = n('yTN1'),
        p = n('t62R'),
        b = r.a.a4ed9071,
        v = function (e, t) {
          var n,
            a = e.autoFocus,
            o = e.imageUrl,
            r = e.onChange,
            v = e.style,
            y = e.value,
            g = e.valueMaxLength,
            k = Object(s.b)().windowWidth > u.a.theme.breakpoints.small
          return i.a.createElement(
            l.a,
            { style: [w.root, v] },
            o
              ? i.a.createElement(d.a, { size: k ? 'xxxLarge' : 'xLarge', uri: o })
              : i.a.createElement(m.a, { Icon: c.a }),
            r
              ? i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(h.a, {
                    autoFocus: a,
                    inputStyle: [w.creatorIntroInput, g && w.creatorIntroInputWithCountdownCircle],
                    isCompact: !0,
                    leftAligned: !0,
                    maxNumberOfLines: Number.MAX_SAFE_INTEGER,
                    multiline: !0,
                    name: 'creatorIntro',
                    numberOfLines: 1,
                    onChange: r,
                    placeholder: b,
                    ref: t,
                    style: w.creatorIntro,
                    value: y,
                  }),
                  g &&
                    i.a.createElement(
                      l.a,
                      { style: w.countdownCircle },
                      i.a.createElement(f.a, {
                        count: null !== (n = null == y ? void 0 : y.length) && void 0 !== n ? n : 0,
                        maxCount: g,
                        warningCount: g - 10,
                      }),
                    ),
                )
              : i.a.createElement(p.b, { style: [w.creatorIntro, w.creatorIntroReadOnly] }, y),
          )
        },
        y = i.a.forwardRef(v),
        w = u.a.create(function (e) {
          return {
            root: { display: 'inline-flex', alignItems: 'start', flexDirection: 'row', gap: e.spaces.space12 },
            creatorIntro: {
              backgroundColor: e.colors.cellBackground,
              borderBottomLeftRadius: e.borderRadii.large,
              borderBottomRightRadius: e.borderRadii.large,
              borderTopLeftRadius: 0,
              borderTopRightRadius: e.borderRadii.large,
              boxShadow: e.boxShadows.small,
              width: '100%',
            },
            creatorIntroReadOnly: { padding: e.spaces.space24 },
            creatorIntroInput: {
              minHeight: 0,
              paddingBottom: e.spaces.space24,
              paddingLeft: e.spaces.space24,
              paddingRight: e.spaces.space24,
              paddingTop: e.spaces.space24,
            },
            creatorIntroInputWithCountdownCircle: { paddingBottom: e.spaces.space40 },
            countdownCircle: { position: 'absolute', bottom: e.spaces.space8, right: e.spaces.space8 },
          }
        })
    },
    MAc7: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return y
      })
      var a = n('97Jx'),
        i = n.n(a),
        o = n('m3Bd'),
        r = n.n(o),
        c = (n('ho0z'), n('ERkP')),
        l = n.n(c),
        s = n('VTDR'),
        u = n('JWc1'),
        d = n('t62R'),
        m = n('rHpw'),
        h = n('3XMw'),
        f = n.n(h),
        p = ['name', 'style'],
        b = f.a.dc71aee7,
        v = function (e, t) {
          var n = e.name,
            a = e.style,
            o = r()(e, p)
          return l.a.createElement(
            s.a,
            { style: a },
            l.a.createElement(
              d.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title3', weight: 'heavy' },
              l.a.createElement(
                f.a.I18NFormatMessage,
                { $i18n: 'f402ebd1', name: null != n ? n : '' },
                l.a.createElement('br', null),
              ),
            ),
            l.a.createElement(d.b, { style: w.subheader }, b),
            l.a.createElement(u.a, i()({}, o, { ref: t, style: w.intro })),
          )
        },
        y = l.a.forwardRef(v),
        w = m.a.create(function (e) {
          return { subheader: { marginTop: e.spaces.space8 }, intro: { marginTop: e.spaces.space36 } }
        })
    },
    'Q+qU': function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        i = n.n(a),
        o = n('ddV6'),
        r = n.n(o),
        c = n('ERkP'),
        l = n.n(c),
        s = n('t62R'),
        u = n('rHpw'),
        d = u.a.create(function (e) {
          return {
            apptext: {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              maxWidth: '100%',
              display: 'inline-block',
            },
          }
        })
      t.a = function (e) {
        var t = l.a.useState(0),
          n = r()(t, 2),
          a = n[0],
          o = n[1],
          c = e.size || 'body',
          m = u.a.theme.fontSizesPx[c],
          h = { fontSize: m - a }
        return l.a.createElement(
          s.b,
          i()({}, e, {
            getTextOverflow: function (e) {
              e && m - a > u.a.theme.fontSizesPx.subtext3 && o(a + 1)
            },
            numberOfLines: 1,
            style: [e.style, h, d.apptext],
          }),
        )
      }
    },
    Q8kk: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return y
      })
      n('2G9S')
      var a = n('ERkP'),
        i = n.n(a),
        o = n('3XMw'),
        r = n.n(o),
        c = n('EyD/'),
        l = n('MWbm'),
        s = n('t62R'),
        u = n('rHpw'),
        d = n('a2Fh'),
        m = n('4zmP'),
        h = n('feOz'),
        f = n('aNKf'),
        p = [17, 7, 14, 11, 8, 12, 4, 11],
        b = i.a.createElement(
          r.a.I18NFormatMessage,
          { $i18n: 'gc242226' },
          i.a.createElement(s.b, { size: 'subtext3' }, r.a.fa70c77f),
        )
      var v = u.a.create(function (e) {
          return {
            root: {
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'flex-end',
              maxWidth: '327px',
              position: 'relative',
              userSelect: 'none',
              width: '100%',
            },
            educationCallout: {
              marginBottom: e.spaces.space8,
              marginHorizontal: e.spaces.space24,
              marginTop: e.spaces.space16,
            },
            fakeBodyCopy: { paddingHorizontal: e.spaces.space28, width: '100%' },
            gradient: { height: e.spaces.space56, position: 'absolute', top: 0, width: '100%' },
            mockTweet: {
              backgroundColor: e.colors.cellBackground,
              borderRadius: e.borderRadii.xLarge,
              boxShadow: e.boxShadows.medium,
              marginTop: e.spaces.space16,
              paddingVertical: e.spaces.space16,
              width: '100%',
            },
          }
        }),
        y = function (e) {
          var t = e.style,
            n = function (e) {
              return ''.concat(u.a.theme.colors.cellBackground).concat(e || '')
            },
            a = u.a.theme.colors.transparent
          return i.a.createElement(
            l.a,
            { style: [v.root, t] },
            i.a.createElement(
              l.a,
              { style: v.mockTweet },
              i.a.createElement(l.a, { style: v.fakeBodyCopy }, i.a.createElement(d.a, { wordPercentWidths: p })),
              i.a.createElement(
                l.a,
                { style: v.educationCallout },
                i.a.createElement(m.a, { Icon: c.a, text: b, type: 'exclusive', withThumbnail: !0 }),
              ),
              i.a.createElement(h.a, {
                displayStyle: 'block',
                isLiked: !1,
                isPresentational: !0,
                isRetweeted: !1,
                likeCount: 0,
                reaction: null,
                reactionCounts: [],
                replyCount: 0,
                retweetCount: 0,
                tweetLink: '',
              }),
            ),
            i.a.createElement(f.a, { colors: [n(), n(), n(50), a], locations: [0, 0.25, 0.75, 1], style: v.gradient }),
            i.a.createElement(f.a, { colors: [n(), n(99), n(50), a], locations: [0, 0.5, 0.75, 1], style: v.gradient }),
          )
        }
    },
    TW8A: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        o = n('ERkP'),
        r = n.n(o),
        c = n('Lsrn'),
        l = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M22.132 7.653c0-.6-.234-1.166-.66-1.59l-3.535-3.536c-.85-.85-2.333-.85-3.182 0L3.417 13.865c-.323.323-.538.732-.63 1.25l-.534 5.816c-.02.223.06.442.217.6.14.142.332.22.53.22.023 0 .046 0 .068-.003l5.884-.544c.45-.082.86-.297 1.184-.62l11.337-11.34c.425-.424.66-.99.66-1.59zm-17.954 8.69l3.476 3.476-3.825.35.348-3.826zm5.628 2.447c-.282.283-.777.284-1.06 0L5.21 15.255c-.292-.292-.292-.77 0-1.06l8.398-8.398 4.596 4.596-8.398 8.397zM20.413 8.184l-1.15 1.15-4.595-4.597 1.15-1.15c.14-.14.33-.22.53-.22s.388.08.53.22l3.535 3.536c.142.142.22.33.22.53s-.08.39-.22.53z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    VTDR: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var a = n('ERkP'),
        i = n.n(a),
        o = n('MWbm'),
        r = n('cHvH'),
        c = n('rHpw'),
        l = n('+Eiw'),
        s = function (e) {
          var t = e.children,
            n = e.style,
            a = Object(r.b)().windowWidth > c.a.theme.breakpoints.medium
          return i.a.createElement(
            o.a,
            { style: [u.root, a && u.rootWide, n] },
            i.a.createElement(o.a, { style: u.blob }),
            t,
          )
        },
        u = c.a.create(function (e) {
          return {
            root: {
              minHeight: 240,
              paddingBottom: e.spaces.space16,
              paddingHorizontal: e.spaces.space32,
              paddingTop: e.spaces.space48,
              position: 'relative',
            },
            rootWide: { paddingHorizontal: e.spaces.space48 },
            blob: {
              backgroundImage: l.a.getBackgroundImage(),
              clipPath: 'ellipse(100% 100% at 38% 0%)',
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: '100%',
              zIndex: -1,
            },
          }
        })
    },
    WOwf: function (e, t, n) {
      'use strict'
      function a(e, t) {
        return Math.min(1, 1 - e / t)
      }
      n.d(t, 'a', function () {
        return a
      })
    },
    Wk1j: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return S
      }),
        n.d(t, 'b', function () {
          return R
        })
      var a = n('ERkP'),
        i = n.n(a),
        o = n('3XMw'),
        r = n.n(o),
        c = n('wD1h'),
        l = n('wwsH'),
        s = n('yVEN'),
        u = n('jlPL'),
        d = n('mjJ+'),
        m = n('TW8A'),
        h = r.a.d6c85149,
        f = r.a.f3bbbb87,
        p = r.a.c9d7235d,
        b = { viewType: 'quote' },
        v = function (e) {
          return { viewType: 'retweet', viewState: { type: 'toggleable', toggledTo: e } }
        }
      function y(e) {
        var t,
          n,
          a,
          o,
          r,
          c,
          l,
          s,
          y,
          w,
          g,
          k,
          E,
          C,
          x,
          S =
            ((n = (t = e).excludeRetweetAction),
            (a = void 0 !== n && n),
            (o = t.excludeRetweetWithCommentAction),
            (r = void 0 !== o && o),
            (c = t.isRetweeted),
            (l = t.onMenuCancel),
            (s = t.onQuoteTweetActionSelect),
            (y = t.onRetweetActionSelect),
            (w = t.onUnretweetActionSelect),
            (g = t.retweetActionSubText),
            (k = t.retweetWithCommentLink),
            (E = t.testIDs),
            (C = null == E ? void 0 : E.retweetConfirm),
            (x = null == E ? void 0 : E.unretweetConfirm),
            i.a.useMemo(
              function () {
                var e = []
                return (
                  c ||
                    a ||
                    e.push({
                      behavioralEventContext: v(!0),
                      text: h,
                      subText: g,
                      onClick: function () {
                        null == l || l(), null == y || y()
                      },
                      testID: C,
                      Icon: u.a,
                    }),
                  c &&
                    e.push({
                      behavioralEventContext: v(!1),
                      text: f,
                      onClick: function () {
                        null == l || l(), null == w || w()
                      },
                      testID: x,
                      Icon: u.a,
                    }),
                  r ||
                    e.push({
                      behavioralEventContext: b,
                      text: p,
                      onClick: function () {
                        null == l || l(), null == s || s()
                      },
                      Icon: m.a,
                      link: k,
                    }),
                  e
                )
              },
              [a, r, c, l, s, y, w, g, k, C, x],
            ))
        return i.a.createElement(d.a, {
          description: e.actionMenuDescription,
          items: S,
          onCloseRequested: function () {
            var t
            null === (t = e.onMenuCancel) || void 0 === t || t.call(e)
          },
        })
      }
      var w = r.a.d6c85149,
        g = r.a.f3bbbb87,
        k = r.a.g23ce6f0,
        E = r.a.i769b0ab,
        C = r.a.ea9a1f0c,
        x = { viewType: 'retweet' },
        S = { RETWEET: 'retweet', UNRETWEET: 'unretweet', QUOTE: 'quote' }
      function R(e) {
        var t = e.actionMenuDescription,
          n = e.activeColor,
          a = void 0 === n ? 'green500' : n,
          o = e.color,
          r = e.count,
          d = e.enableActionMenu,
          m = void 0 !== d && d,
          h = e.enableKeyboardShortcuts,
          f = e.excludeRetweetAction,
          p = e.excludeRetweetWithCommentAction,
          b = e.iconSize,
          v = e.isDisabled,
          S = e.isFaded,
          R = e.isPresentational,
          A = e.isRetweeted,
          P = e.onMenuCancel,
          T = e.onPress,
          L = e.onQuoteTweetActionSelect,
          H = e.onRetweetActionSelect,
          I = e.onUnretweetActionSelect,
          D = e.retweetActionSubText,
          W = e.retweetWithCommentLink,
          M = e.style,
          F = e.testIDs,
          z = e.withCount && 'number' == typeof r,
          j = A ? k : w
        return (
          z && (j = A ? C({ count: r }) : E({ count: r })),
          i.a.createElement(l.a, {
            ActiveIcon: s.a,
            Icon: u.a,
            accessibilityLabel: j,
            activeColor: a,
            behavioralEventContext: x,
            color: o,
            count: r,
            enableKeyboardShortcuts: h,
            hoverLabel: { label: A ? g : w },
            iconSize: b,
            isActive: A,
            isDisabled: v,
            isFaded: S,
            isPresentational: R,
            keyboardShortcut: c.a.shortcuts.retweet,
            onPress: T,
            renderMenu: m
              ? function (e) {
                  return i.a.createElement(y, {
                    actionMenuDescription: t,
                    excludeRetweetAction: f,
                    excludeRetweetWithCommentAction: p,
                    isRetweeted: A,
                    onMenuCancel: function () {
                      e(), null == P || P()
                    },
                    onQuoteTweetActionSelect: L,
                    onRetweetActionSelect: H,
                    onUnretweetActionSelect: I,
                    retweetActionSubText: D,
                    retweetWithCommentLink: W,
                    testIDs: {
                      retweetConfirm: null == F ? void 0 : F.retweetConfirm,
                      unretweetConfirm: null == F ? void 0 : F.unretweetConfirm,
                    },
                  })
                }
              : void 0,
            style: M,
            testID: A ? (null == F ? void 0 : F.unretweet) : null == F ? void 0 : F.retweet,
            withCount: z,
          })
        )
      }
    },
    'Z8+W': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return P
      }),
        n.d(t, 'a', function () {
          return L
        })
      var a = n('97Jx'),
        i = n.n(a),
        o = n('T0aG'),
        r = n.n(o),
        c = n('ddV6'),
        l = n.n(c),
        s = (n('849X'), n('TJCb'), n('hBvt'), n('ERkP')),
        u = n.n(s),
        d = n('mjJ+'),
        m = n('PxJJ'),
        h = n('3XMw'),
        f = n.n(h),
        p = n('wD1h'),
        b = n('I8UQ'),
        v = n('wwsH'),
        y = n('aITJ'),
        w = n('KDev'),
        g = n('iEUn'),
        k = n('uCrx'),
        E = f.a.d636ebc6,
        C = f.a.eb3a8b0b,
        x = f.a.a4ae22fa,
        S = f.a.a0af935b,
        R = f.a.dac92b0c,
        A = f.a.aa650427
      function P(e) {
        var t = e.isLiked,
          n = e.likeTransitionAnimation,
          a = u.a.useState(!1),
          i = l()(a, 2),
          o = i[0],
          c = i[1],
          s = u.a.useRef(t)
        return (
          u.a.useEffect(
            function () {
              ;('object' === r()(n) || b.b.check(n)) && t !== s.current && (c(t), (s.current = t))
            },
            [t, n],
          ),
          {
            onAnimationEnd: function () {
              return c(!1)
            },
            showAnimation: o,
            transitionAnimationUrl: n,
          }
        )
      }
      function T() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Error('TweetActionLike.onError')
        m.a.report(e)
      }
      function L(e) {
        var t = e.actionMenuDescription,
          n = e.activeColor,
          a = void 0 === n ? 'magenta500' : n,
          o = e.color,
          r = e.count,
          c = e.enableActionMenu,
          l = void 0 !== c && c,
          s = e.enableKeyboardShortcuts,
          m = e.iconSize,
          h = e.isDisabled,
          f = e.isFaded,
          b = e.isLiked,
          L = e.isPresentational,
          H = e.likeActionIconContainerRef,
          I = e.likeTransitionAnimation,
          D = e.link,
          W = e.onError,
          M = void 0 === W ? T : W,
          F = e.onLikeActionSelect,
          z = e.onMenuCancel,
          j = e.onPress,
          B = e.style,
          O = e.testIDs,
          K = e.withCount && 'number' == typeof r,
          U = b ? S : E
        K && (U = b ? A({ count: r }) : R({ count: r }))
        var V = P({ isLiked: b, likeTransitionAnimation: I })
        return u.a.createElement(
          v.a,
          i()({}, V, {
            ActiveIcon: k.a,
            Icon: g.a,
            accessibilityLabel: U,
            actionIconContainerRef: H,
            activeColor: a,
            behavioralEventContext: { viewType: 'like', viewState: { type: 'toggleable', toggledTo: !b } },
            color: o,
            count: r,
            enableKeyboardShortcuts: s,
            hoverLabel: { label: b ? C : E },
            iconSize: m,
            isActive: b,
            isDisabled: h,
            isFaded: f,
            isPresentational: L,
            keyboardShortcut: p.a.shortcuts.like,
            link: D,
            onError: M,
            onPress: function () {
              y.b.isFirefox() || w.a.vibrate(5), null == j || j()
            },
            renderMenu: l
              ? function (e) {
                  var n = [
                    {
                      text: x,
                      onClick: function () {
                        e(), null == F || F()
                      },
                      testID: null == O ? void 0 : O.like,
                      Icon: g.a,
                    },
                  ]
                  return u.a.createElement(d.a, {
                    description: t,
                    items: n,
                    onCloseRequested: function () {
                      e(), null == z || z()
                    },
                  })
                }
              : void 0,
            style: B,
            testID: O && (b ? O.unlike : O.like),
            withCount: K,
          }),
        )
      }
    },
    a2Fh: function (e, t, n) {
      'use strict'
      n('z84I')
      var a = n('ERkP'),
        i = n.n(a),
        o = n('rHpw'),
        r = n('MWbm')
      var c = o.a.create(function (e) {
        return {
          root: { display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', overflow: 'hidden', width: '100%' },
          borderRadius: { borderRadius: e.borderRadii.infinite },
          lineWrap: { flexWrap: 'wrap', overflow: 'visible' },
          word: { backgroundColor: e.colors.gray300, height: e.spaces.space4 },
          wordWrapper: { justifyContent: 'center' },
        }
      })
      t.a = function (e) {
        var t = e.color,
          n = e.lineHeightPx,
          a = e.maxWidthPx,
          l = e.style,
          s = e.withBorderRadius,
          u = e.withLineWrap,
          d = e.wordHeightPx,
          m = e.wordPercentWidths,
          h = e.wordSpacingPx,
          f = i.a.useMemo(
            function () {
              return m.map(function (e, a) {
                var l = h || o.a.theme.spaces.space4,
                  u = a !== m.length - 1 ? l : 0,
                  f = i.a.createElement(r.a, {
                    key: a,
                    style: [
                      c.word,
                      { width: n ? '100%' : ''.concat(e, '%') },
                      t && { backgroundColor: o.a.theme.colors[t] },
                      !n && { marginRight: u },
                      s && c.borderRadius,
                      d && { height: d },
                    ],
                  })
                return n
                  ? i.a.createElement(
                      r.a,
                      {
                        key: a,
                        style: [c.wordWrapper, n && { marginRight: u }, { height: n, width: ''.concat(e, '%') }],
                      },
                      f,
                    )
                  : f
              })
            },
            [t, n, s, d, h, m],
          )
        return i.a.createElement(r.a, { style: [c.root, u && c.lineWrap, { maxWidth: a || 'none' }, l] }, f)
      }
    },
    dFWS: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        o = n('ERkP'),
        r = n.n(o),
        c = n('Lsrn'),
        l = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    de1q: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return W
      })
      var a,
        i,
        o = n('ERkP'),
        r = n.n(o),
        c = n('38/B'),
        l = n('q1bs'),
        s = n('Eqye'),
        u = n('uCrx'),
        d = n('yiKp'),
        m = n.n(d),
        h = n('KEM+'),
        f = n.n(h),
        p = n.p + 'cheer.6249ab45.png',
        b = n.p + 'haha.c0b42cb5.png',
        v = n.p + 'hmm.bc35b1e5.png',
        y = n('3rX5'),
        w = n.p + 'like.7a3e9685.png',
        g = n('kSIJ'),
        k = n('mJtw'),
        E = n.p + 'sad.f12709e5.png',
        C = n('rHpw'),
        x = n('MWbm'),
        S =
          ((a = {}),
          f()(a, k.a.Like, w),
          f()(a, k.a.Haha, b),
          f()(a, k.a.Hmm, v),
          f()(a, k.a.Sad, E),
          f()(a, k.a.Cheer, p),
          a),
        R = C.a.create(function (e) {
          return {
            fillContainer: { height: '100%', width: '100%' },
            reactionSelectedIcon: m()({}, C.a.absoluteFillObject),
            imageCover: { position: 'absolute' },
          }
        }),
        A = function (e) {
          var t = e.reactionType
          return r.a.createElement(
            x.a,
            { style: R.fillContainer },
            r.a.createElement(y.a, { accessibilityLabel: g.a[t], source: S[t], style: R.reactionSelectedIcon }),
            r.a.createElement(x.a, { style: [R.reactionSelectedIcon, R.imageCover] }),
          )
        },
        P = n('DQLs'),
        T =
          ((i = {}),
          f()(i, k.a.Hmm, 'https://abs.twimg.com/sticky/animations/hmm.reaction.1.json'),
          f()(i, k.a.Sad, 'https://abs.twimg.com/sticky/animations/sad.reaction.1.json'),
          f()(i, k.a.Haha, 'https://abs.twimg.com/sticky/animations/haha.reaction.1.json'),
          f()(i, k.a.Cheer, 'https://abs.twimg.com/sticky/animations/cheer.reaction.1.json'),
          f()(i, k.a.Like, 'https://abs.twimg.com/sticky/animations/like.reaction.1.json'),
          i),
        L = function (e) {
          var t = e.reactionType,
            n = l.b.get(T[t])
          return (
            (n && 'boolean' != typeof n) || (n = T[t]), r.a.createElement(P.a, { animation: n, autoplay: !0, loop: !0 })
          )
        },
        H = function () {
          var e = window.navigator.deviceMemory
          return c.a.reducedMotionEnabled || s.a.isEnabled || (e && e < 4)
        },
        I = function (e) {
          var t = e.legacyHeart,
            n = e.reactionType,
            a = e.style,
            i = e.withAnimation,
            o = void 0 !== i && i,
            c = !H() && o ? L : A
          return t && n === k.a.Like
            ? r.a.createElement(x.a, { style: [D.root, D.legacyHeart, a] }, r.a.createElement(u.a, { style: D.root }))
            : r.a.createElement(x.a, { style: [D.root, a] }, r.a.createElement(c, { reactionType: n }))
        },
        D = C.a.create(function (e) {
          return { root: { height: '100%', width: '100%' }, legacyHeart: { color: e.colors.magenta500 } }
        }),
        W = function () {
          r.a.useEffect(function () {
            H() || (l.b.check(T.Hmm), l.b.check(T.Sad), l.b.check(T.Haha), l.b.check(T.Cheer), l.b.check(T.Like))
          }, [])
        }
      t.a = r.a.memo(I)
    },
    feOz: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return ht
      })
      var a = n('yiKp'),
        i = n.n(a),
        o = n('ddV6'),
        r = n.n(o),
        c = (n('KOtZ'), n('7x/C'), n('LW0h'), n('97Jx')),
        l = n.n(c),
        s = n('m3Bd'),
        u = n.n(s),
        d = n('ERkP'),
        m = n.n(d),
        h = n('+Tpo'),
        f = n('T0aG'),
        p = n.n(f),
        b = (n('849X'), n('TJCb'), n('PxJJ')),
        v = n('3XMw'),
        y = n.n(v),
        w = n('wD1h'),
        g = n('wwsH'),
        k = n('aITJ'),
        E = n('KDev'),
        C = n('VrFO'),
        x = n.n(C),
        S = n('Y9Ll'),
        R = n.n(S),
        A = n('n70c'),
        P = n.n(A),
        T = n('AuHH'),
        L = n.n(T),
        H = n('5Yy7'),
        I = n.n(H),
        D = n('2VqO'),
        W = n.n(D),
        M = n('q1bs'),
        F = 'https://abs.twimg.com/sticky/animations/reply.downvote.1.json',
        z = new ((function (e) {
          I()(n, e)
          var t = W()(n)
          function n() {
            return x()(this, n), t.apply(this, arguments)
          }
          return (
            R()(n, [
              {
                key: 'check',
                value: function (e) {
                  return P()(L()(n.prototype), 'check', this).call(this, null != e ? e : F)
                },
              },
            ]),
            n
          )
        })(M.a))(),
        j = n('Lsrn'),
        B = n('k/Ka'),
        O = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(B.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [j.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            m.a.createElement(
              'g',
              null,
              m.a.createElement('path', {
                d: 'M3.538 14.22l7.15 7.18c.39.39.89.63 1.47.6.55-.01 1.07-.23 1.45-.63l6.88-7.18c.56-.59.72-1.42.4-2.17s-1.03-1.21-1.84-1.21h-3.72V4c0-1.1-.9-2-2-2h-2.66c-1.11 0-2 .9-2 2v6.81h-3.72c-.82 0-1.53.47-1.84 1.23-.32.76-.15 1.59.43 2.18z',
              }),
            ),
          )
        }
      O.metadata = { width: 24, height: 24 }
      var K = O,
        U = n('IqLm'),
        V = y.a.d2b2b8e5,
        J = y.a.hcb3286f,
        N = y.a.cb5dafd3
      function X() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Error('TweetActionDownvote.onError')
        b.a.report(e)
      }
      var q = n('Z8+W'),
        G = n('KEM+'),
        Q = n.n(G),
        _ = n('CHgo'),
        Z = (n('z84I'), n('M+/F'), n('tQbP'), n('de1q')),
        Y = n('mJtw'),
        $ = n('cHvH'),
        ee = n('rHpw'),
        te = n('MWbm'),
        ne = function (e, t, n) {
          var a = n.reduce(function (e, t) {
            return e + t.count
          }, 0)
          if (0 === a) return []
          var i = e || 20
          return n
            .filter(function (e) {
              return e.count >= a * (i / 100)
            })
            .filter(function (e, n, a) {
              return !(1 === a.length && e.type === Y.a.Like) || (t && t !== Y.a.Like)
            })
            .filter(function (e, n, a) {
              return !(1 === a.length && e.type === t)
            })
            .filter(function (e, n, a) {
              return !(1 === e.count && e.type === t)
            })
            .sort(function (e, t) {
              return t.count - e.count
            })
            .slice(0, 3)
        },
        ae = ee.a.create(function (e) {
          return {
            basket: {
              display: 'flex',
              flexDirection: 'row',
              fontSize: e.fontSizes.body,
              justifyContent: 'center',
              minHeight: e.lineHeights.body,
            },
          }
        }),
        ie = function (e) {
          var t = e.experimentalFruitBasketThreshold,
            n = e.legacyHeart,
            a = e.reacted,
            i = e.reactionCounts,
            o = e.size,
            r = void 0 === o ? 'normal' : o,
            c = e.style,
            l = ne(t, a, i)
          return 0 === l.length
            ? null
            : m.a.createElement($.a, null, function (e) {
                return e.windowWidth > ee.a.theme.breakpoints.xSmall * ee.a.theme.scaleMultipler
                  ? m.a.createElement(
                      te.a,
                      { style: [ae.basket, c] },
                      l.map(function (e) {
                        return m.a.createElement(
                          te.a,
                          { key: e.type, style: g.b[r] },
                          m.a.createElement(Z.a, { legacyHeart: n, reactionType: e.type, withAnimation: !1 }),
                        )
                      }),
                    )
                  : null
              })
        },
        oe = n('cm6r'),
        re = n('tn7R'),
        ce = n('3dyc'),
        le = n('OiMc'),
        se = n('38/B'),
        ue = n('kSIJ'),
        de = n('WrBE'),
        me = ee.a.theme.spacesPx.space40,
        he = { growing: 'growing', grown: 'grown', shrinking: 'shrinking', shrunk: 'shrunk' },
        fe = function (e, t) {
          var n = m.a.useRef(new de.a.Value(e)).current,
            a = m.a.useState(he.shrunk),
            i = r()(a, 2),
            o = i[0],
            c = i[1],
            l = m.a.useCallback(
              function (e) {
                c(he.growing),
                  de.a.timing(n, { duration: 200, toValue: t, useNativeDriver: !1 }).start(function (t) {
                    t.finished && c(he.grown), e && e(t)
                  })
              },
              [n, t],
            ),
            s = m.a.useCallback(
              function (t) {
                c(he.shrinking),
                  de.a.timing(n, { duration: 200, toValue: e, useNativeDriver: !1 }).start(function (e) {
                    e.finished && c(he.shrunk), t && t(e)
                  })
              },
              [n, e],
            )
          return { animationState: o, currentHeight: n, startAnimation: l, resetAnimation: s }
        },
        pe = function (e) {
          return Object(B.a)('div', e)
        },
        be = ee.a.create(function (e) {
          return {
            container: {
              maxHeight: e.spaces.space40,
              maxWidth: e.spaces.space40,
              marginHorizontal: e.spaces.space8,
              alignItems: 'center',
              justifyContent: 'flex-end',
            },
            largeTouchArea: {
              position: 'absolute',
              width: e.spaces.space56,
              height: e.spaces.space40,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              paddingTop: e.spaces.space80,
              paddingBottom: e.spaces.space80,
            },
            activeBackground: i()(
              i()({}, ee.a.absoluteFillObject),
              {},
              {
                backgroundColor: e.colors.activeBlack,
                borderRadius: e.borderRadii.infinite,
                margin: '-'.concat(e.spaces.space4),
              },
            ),
            fullHeight: { height: '100%' },
          }
        }),
        ve = function (e) {
          var t = e.enableTouch,
            n = e.forceHovered,
            a = e.legacyHeart,
            i = e.onSelect,
            o = e.reacted,
            c = e.reactionType,
            l = e.withAnimation,
            s = void 0 === l || l,
            u = m.a.useState(!1),
            d = r()(u, 2),
            h = d[0],
            f = d[1],
            p = fe(me, 1.5 * me),
            b = p.animationState,
            v = p.currentHeight,
            y = p.resetAnimation,
            w = p.startAnimation
          m.a.useEffect(
            function () {
              if (!se.a.reducedMotionEnabled) {
                var e = n || h,
                  t = b === he.shrinking || b === he.shrunk,
                  a = b === he.growing || b === he.grown
                e && t ? w() : !e && a && y()
              }
            },
            [n, h, w, y, b],
          )
          var g = function () {
              f(!0)
            },
            k = function () {
              f(!1)
            },
            E = n || h
          return m.a.createElement(
            te.a,
            { style: be.container },
            m.a.createElement(
              de.a.View,
              { style: { height: v, width: v } },
              m.a.createElement(
                oe.a,
                {
                  accessibilityLabel: ue.a[c],
                  accessibilityRole: 'button',
                  hoverLabel:
                    b === he.grown || se.a.reducedMotionEnabled
                      ? { label: ue.a[c], preferredVerticalOrientation: 'up', withDelay: !1, withExtraSpace: !0 }
                      : void 0,
                  interactiveStyles: null,
                  onFocusRingGained: g,
                  onFocusRingLost: k,
                  onHoverIn: g,
                  onHoverOut: k,
                  onPress: i,
                  style: be.fullHeight,
                },
                m.a.createElement(Z.a, { legacyHeart: a, reactionType: c, withAnimation: s }),
                o && !E && m.a.createElement(te.a, { style: be.activeBackground }),
              ),
            ),
            t && m.a.createElement(pe, { 'data-reaction-type': c, style: be.largeTouchArea }),
          )
        },
        ye = ee.a.create(function (e) {
          return {
            popoverContainer: {
              paddingVertical: e.spaces.space8,
              paddingHorizontal: e.spaces.space12,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              userSelect: 'none',
            },
          }
        }),
        we = function (e) {
          var t = e.dismissReactionPicker,
            n = e.enableTouch,
            a = e.forceHovered,
            i = e.legacyHeart,
            o = e.onSelection,
            r = e.reacted,
            c = e.reactionOptions,
            l = e.withAnimation,
            s = void 0 === l || l
          return m.a.createElement(
            te.a,
            { style: ye.popoverContainer },
            c.map(function (e) {
              return m.a.createElement(ve, {
                enableTouch: n,
                forceHovered: a === e,
                key: e,
                legacyHeart: i,
                onSelect:
                  ((c = e),
                  function () {
                    o(c, 'picker-tap'), t()
                  }),
                reacted: r === e,
                reactionType: e,
                withAnimation: s,
              })
              var c
            }),
          )
        },
        ge = n('iEUn'),
        ke = n('DlVf'),
        Ee = n('FG+G'),
        Ce = n('uCrx'),
        xe = Object(re.a)(Y.a),
        Se = Y.a.Like,
        Re = y.a.e3469988,
        Ae = y.a.c46f0fce,
        Pe = y.a.ga9c2b52,
        Te = y.a.hb755a53,
        Le = y.a.cff26b89,
        He = 'data-reaction-type',
        Ie = function (e) {
          var t = e.style
          return m.a.createElement(Z.a, { reactionType: Y.a.Cheer, style: t, withAnimation: !1 })
        },
        De = function (e) {
          var t = e.style
          return m.a.createElement(Z.a, { reactionType: Y.a.Haha, style: t, withAnimation: !1 })
        },
        We = function (e) {
          var t = e.style
          return m.a.createElement(Z.a, { reactionType: Y.a.Hmm, style: t, withAnimation: !1 })
        },
        Me = function (e) {
          var t = e.style
          return m.a.createElement(Z.a, { reactionType: Y.a.Like, style: t, withAnimation: !1 })
        },
        Fe = function (e) {
          var t = e.style
          return m.a.createElement(Z.a, { reactionType: Y.a.Sad, style: t, withAnimation: !1 })
        },
        ze = ee.a.create(function (e) {
          return {
            root: { justifyContent: 'center', userSelect: 'none' },
            popoverContainer: { minWidth: 0, overflow: 'visible' },
            buttonContainer: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
            fruitBasketSpacing: { marginLeft: e.spaces.space8 },
            caretWithoutCount: { marginLeft: e.spaces.space12 },
          }
        }),
        je = function (e) {
          var t,
            n = e.activeColor,
            a = void 0 === n ? 'magenta500' : n,
            i = e.color,
            o = e.enableKeyboardShortcuts,
            c = e.experimentalFruitBasketThreshold,
            s = e.iconSize,
            u = e.isDisabled,
            d = e.isFaded,
            h = e.isPresentational,
            f = e.legacyHeart,
            p = e.onPopoverDismiss,
            b = e.onPopoverOpen,
            v = e.onReactionSelect,
            y = e.reacted,
            k = e.reactionCounts,
            E = void 0 === k ? [] : k,
            C = e.style,
            x = e.tweetActionsRef,
            S = e.testIDs,
            R = e.withAnimation,
            A = void 0 === R || R,
            P = e.withCount,
            T = void 0 !== P && P,
            L = e.withFruitBasket,
            H = void 0 !== L && L,
            I = m.a.useState(null),
            D = r()(I, 2),
            W = D[0],
            M = D[1],
            F = m.a.useState(!1),
            z = r()(F, 2),
            j = z[0],
            B = z[1],
            O = m.a.useState(!1),
            K = r()(O, 2),
            U = K[0],
            V = K[1],
            J = m.a.useRef(null),
            N = m.a.useRef()
          Object(Z.b)()
          var X = Object(q.b)({ isLiked: y === Y.a.Like && !!f }),
            G = E.reduce(function (e, t) {
              return e + t.count
            }, 0),
            $ = y ? Ae : Re
          T && ($ = y ? Le({ count: G }) : Te({ count: G }))
          var ne =
              ((t = {}),
              Q()(t, w.a.shortcuts.like, function (e) {
                pe(!0)
              }),
              Q()(t, w.a.shortcuts.reactUndo, function (e) {
                return v()
              }),
              Q()(t, w.a.shortcuts.reactHmm, function (e) {
                return v(Y.a.Hmm, 'keyboard-shortcut')
              }),
              Q()(t, w.a.shortcuts.reactSad, function (e) {
                return v(Y.a.Sad, 'keyboard-shortcut')
              }),
              Q()(t, w.a.shortcuts.reactHaha, function (e) {
                return v(Y.a.Haha, 'keyboard-shortcut')
              }),
              Q()(t, w.a.shortcuts.reactCheer, function (e) {
                return v(Y.a.Cheer, 'keyboard-shortcut')
              }),
              Q()(t, w.a.shortcuts.reactLike, function (e) {
                return v(Y.a.Like, 'keyboard-shortcut')
              }),
              t),
            ae = function (e) {
              V(e === ce.a.longPress), null == b || b(e)
            },
            re = function () {
              B(!0)
            },
            se = m.a.useCallback(function (e) {
              var t,
                n = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY),
                a =
                  null == n || null === (t = n.closest('['.concat(He, ']'))) || void 0 === t
                    ? void 0
                    : t.getAttribute(He)
              M(a ? Y.a[a] : null), e.preventDefault()
            }, [])
          m.a.useEffect(
            function () {
              if (J.current) {
                var e = Object(_.a)(J.current, se, !1)
                return function () {
                  e && e()
                }
              }
            },
            [se],
          )
          var ue = function (e) {
              return function () {
                B(!1), W && (v(W, 'picker-touchend'), M(null), e())
              }
            },
            de = function (e) {
              return m.a.createElement(we, {
                dismissReactionPicker: e,
                enableTouch: j,
                forceHovered: W,
                legacyHeart: f,
                onSelection: v,
                reacted: y,
                reactionOptions: xe,
                withAnimation: A,
              })
            },
            me = function (e) {
              return function (t) {
                e(), t.stopPropagation()
              }
            },
            he = function () {
              switch (y) {
                case Y.a.Cheer:
                  return Ie
                case Y.a.Haha:
                  return De
                case Y.a.Hmm:
                  return We
                case Y.a.Like:
                  return f ? Ce.a : Me
                case Y.a.Sad:
                  return Fe
                default:
                  return Me
              }
            },
            fe = function (e) {
              return function (t) {
                e(), pe('keydown' === t.type)
              }
            },
            pe = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              y ? v() : v(Se, e ? 'keyboard-shortcut' : 'button-tap')
            },
            be = function () {
              return H
                ? 0 === G || (1 === G && y)
                  ? null
                  : m.a.createElement(ie, {
                      experimentalFruitBasketThreshold: c,
                      legacyHeart: f,
                      reacted: y,
                      reactionCounts: E,
                      size: s,
                      style: ze.fruitBasketSpacing,
                    })
                : null
            }
          return m.a.createElement(
            te.a,
            { style: [ze.root, C] },
            m.a.createElement(
              w.a,
              { enabled: !!o, handlers: ne },
              m.a.createElement(
                le.a,
                {
                  anchorRef: U ? x : N,
                  animationDuration: 'normal',
                  animationType: 'slide',
                  contentStyle: ze.popoverContainer,
                  disabled: u || d,
                  enableHover: !0,
                  enableLongPress: !0,
                  hoverDelay: 'short',
                  onDismiss: p,
                  onOpen: ae,
                  preferredVerticalOrientation: 'up',
                  renderContent: de,
                  withCardContentOverflow: !0,
                  withFixedPosition: !1,
                  withRoundedSides: !0,
                },
                function (e) {
                  var t = e.dismissPopover,
                    n = e.forceOpen
                  return m.a.createElement(
                    oe.a,
                    {
                      focusable: !1,
                      interactiveStyles: null,
                      onTouchEnd: ue(t),
                      onTouchStart: re,
                      ref: J,
                      style: ze.buttonContainer,
                    },
                    function (e) {
                      var o = e.isFocusedWithin
                      return m.a.createElement(
                        m.a.Fragment,
                        null,
                        m.a.createElement(
                          g.a,
                          l()({}, X, {
                            ActiveIcon: he(),
                            Icon: f ? ge.a : ke.a,
                            accessibilityLabel: $,
                            actionIconContainerRef: N,
                            activeColor: a,
                            color: i,
                            count: G,
                            decoration: be(),
                            enableKeyboardShortcuts: !1,
                            hoverLabel: { label: Re },
                            iconSize: s,
                            isActive: !!y,
                            isDisabled: u,
                            isFaded: d,
                            isPresentational: h,
                            onPress: fe(t),
                            showBackgroundWhenActive: !0,
                            testID: S && (y ? S.unreact : S.react),
                            withCount: T,
                          }),
                        ),
                        m.a.createElement(g.a, {
                          Icon: Ee.a,
                          accessibilityLabel: Pe,
                          activeColor: a,
                          color: i,
                          hoverLabel: { label: Pe },
                          iconSize: s,
                          isDisabled: u,
                          isFaded: d,
                          isPresentational: h,
                          onPress: me(n),
                          style: [!o && ee.a.visuallyHidden, !T && ze.caretWithoutCount],
                        }),
                      )
                    },
                  )
                },
              ),
            ),
          )
        },
        Be = n('HSMM'),
        Oe = n('Wk1j'),
        Ke = n('G41x'),
        Ue = ['isFromProtectedAccount'],
        Ve = h.a,
        Je = function (e) {
          var t = e.activeColor,
            n = void 0 === t ? 'orange500' : t,
            a = e.color,
            i = e.count,
            o = e.enableKeyboardShortcuts,
            c = e.iconSize,
            s = e.isDisabled,
            u = e.isFaded,
            d = e.isDownvoted,
            h = e.isPresentational,
            f = e.downvoteTransitionAnimation,
            b = void 0 === f ? F : f,
            v = e.onError,
            y = void 0 === v ? X : v,
            C = e.onPress,
            x = e.style,
            S = e.testIDs,
            R = e.withCount && 'number' == typeof i,
            A = d ? N : V,
            P = (function (e) {
              var t = e.downvoteTransitionAnimation,
                n = e.isDownvoted,
                a = m.a.useState(!1),
                i = r()(a, 2),
                o = i[0],
                c = i[1],
                l = m.a.useRef(n)
              return (
                m.a.useEffect(
                  function () {
                    ;('object' === p()(t) || z.check(t)) && n !== l.current && (c(n), (l.current = n))
                  },
                  [n, t],
                ),
                {
                  onAnimationEnd: function () {
                    return c(!1)
                  },
                  showAnimation: o,
                  transitionAnimationUrl: t,
                }
              )
            })({ isDownvoted: d, downvoteTransitionAnimation: b })
          return m.a.createElement(
            g.a,
            l()({}, P, {
              ActiveIcon: K,
              Icon: U.a,
              accessibilityLabel: A,
              activeColor: n,
              behavioralEventContext: { viewType: 'downvote', viewState: { type: 'toggleable', toggledTo: !d } },
              color: a,
              count: i,
              enableKeyboardShortcuts: o,
              hoverLabel: { label: d ? J : V },
              iconSize: c,
              isActive: d,
              isDisabled: s,
              isFaded: u,
              isPresentational: h,
              keyboardShortcut: w.a.shortcuts.downvote,
              onError: y,
              onPress: function () {
                k.b.isFirefox() || E.a.vibrate(5), null == C || C()
              },
              style: x,
              testID: S && (d ? S.undownvote : S.downvote),
              withCount: R,
            }),
          )
        },
        Ne = q.a,
        Xe = je,
        qe = Be.a,
        Ge = Ke.a
      var Qe = n('Xrkv'),
        _e = n('fs1G'),
        Ze = n('Q+qU'),
        Ye = n('3MlI'),
        $e = n('0ig/'),
        et = y.a.a0af935b,
        tt = y.a.fbaa28ef,
        nt = y.a.f9be84f0,
        at = y.a.g23ce6f0,
        it = y.a.b75196a4,
        ot = function (e) {
          return m.a.createElement(ht.ActionAnalytics, e)
        },
        rt = function (e) {
          return m.a.createElement(ht.ActionDownvote, e)
        },
        ct = function (e) {
          return m.a.createElement(ht.ActionLike, e)
        },
        lt = function (e) {
          return m.a.createElement(ht.ActionReaction, e)
        },
        st = function (e) {
          return m.a.createElement(ht.ActionReply, e)
        },
        ut = function (e) {
          return m.a.createElement(ht.ActionRetweet, e)
        },
        dt = function (e) {
          return m.a.createElement(ht.ActionShare, e)
        },
        mt = []
      function ht(e) {
        var t = e.actionSize,
          n = void 0 === t ? 'normal' : t,
          a = e.activeColor,
          o = void 0 === a ? void 0 : a,
          c = e.color,
          l = void 0 === c ? 'gray700' : c,
          s = e.displayStyle,
          u = e.downvoteCount,
          d = e.enableKeyboardShortcuts,
          h = void 0 === d || d,
          f = e.isDisabled,
          p = void 0 !== f && f,
          b = e.isDownvoted,
          v = void 0 !== b && b,
          w = e.isFromProtectedAccount,
          g = e.isLiked,
          k = e.isRetweeted,
          E = e.isPresentational,
          C = e.likeCount,
          x = e.nativeID,
          S = e.reaction,
          R = e.reactionCounts,
          A = e.renderAnalyticsAction,
          P = void 0 === A ? ot : A,
          T = e.renderDownvoteAction,
          L = void 0 === T ? rt : T,
          H = e.renderLikeAction,
          I = void 0 === H ? ct : H,
          D = e.renderReactionAction,
          W = void 0 === D ? lt : D,
          M = e.renderReplyAction,
          F = void 0 === M ? st : M,
          z = e.renderRetweetAction,
          j = void 0 === z ? ut : z,
          B = e.renderShareAction,
          O = void 0 === B ? dt : B,
          K = e.replyCount,
          U = e.retweetCount,
          V = e.showDownvoteBeforeLike,
          J = void 0 !== V && V,
          N = e.style,
          X = e.tweetLink,
          q = e.withAnalytics,
          G = void 0 !== q && q,
          Q = e.withDownvote,
          _ = void 0 !== Q && Q,
          Z = e.withCount,
          Y = void 0 !== Z && Z,
          $ = e.withReaction,
          ee = void 0 !== $ && $,
          ne = m.a.useState(!1),
          ae = r()(ne, 2),
          ie = ae[0],
          oe = ae[1],
          re = m.a.useRef(null),
          le = Object($e.a)(),
          se = G && le.width >= Ye.a,
          ue =
            null == R
              ? void 0
              : R.reduce(function (e, t) {
                  return e + t.count
                }, 0),
          de = m.a.useMemo(
            function () {
              if (Y) {
                var e = y.a.b03835c7,
                  t = y.a.hb7b0cea,
                  n = y.a.e089b42d,
                  a = y.a.d8320937
                return Object(Qe.a)(
                  [
                    K ? e({ replyCount: K }) : null,
                    U ? t({ retweetCount: U }) : null,
                    k ? at : null,
                    C && !ee ? n({ likeCount: C }) : null,
                    g && !ee ? et : null,
                    ue && ee ? a({ reactionCount: ue }) : null,
                    S && ee ? tt : null,
                    v && _ ? nt : null,
                  ].filter(Boolean),
                  !0,
                )
              }
            },
            [v, g, k, C, ue, S, K, U, Y, _, ee],
          ),
          me = { color: l, iconSize: n, isDisabled: p },
          he = function () {
            return L(
              i()(
                i()({}, me),
                {},
                {
                  activeColor: o,
                  count: u,
                  enableKeyboardShortcuts: h,
                  isDownvoted: v,
                  isPresentational: E,
                  withCount: Y,
                },
              ),
            )
          }
        return m.a.createElement(
          te.a,
          { ref: re },
          m.a.createElement(
            Ye.b,
            { accessibilityLabel: de, displayStyle: s, nativeID: x, style: [N, ie && ft.hidden] },
            F(
              i()(
                i()({}, me),
                {},
                { activeColor: o, count: K, enableKeyboardShortcuts: h, isPresentational: E, withCount: Y },
              ),
            ),
            j(
              i()(
                i()({}, me),
                {},
                {
                  activeColor: o,
                  count: U,
                  enableKeyboardShortcuts: h,
                  isFromProtectedAccount: w,
                  isRetweeted: k,
                  isPresentational: E,
                  withCount: Y,
                },
              ),
            ),
            _ && J ? he() : null,
            ee
              ? W(
                  i()(
                    i()({}, me),
                    {},
                    {
                      activeColor: o,
                      enableKeyboardShortcuts: h,
                      isPresentational: E,
                      onPopoverDismiss: function () {
                        return oe(!1)
                      },
                      onPopoverOpen: function (e) {
                        oe(e === ce.a.longPress)
                      },
                      onReactionSelect: _e.a,
                      reacted: S,
                      reactionCounts: R,
                      tweetActionsRef: re,
                      withCount: Y,
                    },
                  ),
                )
              : I(
                  i()(
                    i()({}, me),
                    {},
                    {
                      activeColor: o,
                      count: C,
                      enableKeyboardShortcuts: h,
                      isLiked: g,
                      isPresentational: E,
                      withCount: Y,
                    },
                  ),
                ),
            _ && !J ? he() : null,
            O(
              i()(
                i()({}, me),
                {},
                {
                  actionItems: mt,
                  activeColor: o,
                  enableKeyboardShortcuts: h,
                  isPresentational: E,
                  withCount: Y && se,
                },
              ),
            ),
            se ? P(i()(i()({}, me), {}, { isPresentational: E, tweetLink: X })) : null,
          ),
          ie ? m.a.createElement(te.a, { style: ft.swipeInfoBar }, m.a.createElement(Ze.a, { color: l }, it)) : null,
        )
      }
      ;(ht.ActionAnalytics = Ve),
        (ht.ActionDownvote = Je),
        (ht.ActionLike = Ne),
        (ht.ActionReaction = Xe),
        (ht.ActionReply = qe),
        (ht.ActionRetweet = function (e) {
          var t = e.isFromProtectedAccount,
            n = void 0 !== t && t,
            a = u()(e, Ue)
          return m.a.createElement(
            Oe.b,
            l()({}, a, {
              excludeRetweetAction: a.excludeRetweetAction || n,
              excludeRetweetWithCommentAction: a.excludeRetweetWithCommentAction || n,
              isDisabled: a.isDisabled || (!a.isRetweeted && n),
            }),
          )
        }),
        (ht.ActionShare = Ge)
      var ft = ee.a.create(function (e) {
        return {
          swipeInfoBar: i()(
            i()({}, ee.a.absoluteFillObject),
            {},
            { alignItems: 'center', justifyContent: 'center', userSelect: 'none' },
          ),
          hidden: { visibility: 'hidden' },
        }
      })
    },
    kSIJ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var a,
        i = n('KEM+'),
        o = n.n(i),
        r = n('3XMw'),
        c = n.n(r),
        l = n('mJtw'),
        s =
          ((a = {}),
          o()(a, l.a.Like, c.a.d636ebc6),
          o()(a, l.a.Haha, c.a.bd83592a),
          o()(a, l.a.Hmm, c.a.f84f0fa8),
          o()(a, l.a.Sad, c.a.g47ce0e4),
          o()(a, l.a.Cheer, c.a.fc8a13c5),
          a)
    },
    xrkw: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        o = n('ERkP'),
        r = n.n(o),
        c = n('Lsrn'),
        l = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M12 22c-.414 0-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v18.5c0 .414-.336.75-.75.75zm5.14 0c-.415 0-.75-.336-.75-.75V7.89c0-.415.335-.75.75-.75s.75.335.75.75v13.36c0 .414-.337.75-.75.75zM6.86 22c-.413 0-.75-.336-.75-.75V10.973c0-.414.337-.75.75-.75s.75.336.75.75V21.25c0 .414-.335.75-.75.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    yTN1: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        i = n.n(a),
        o = n('WOwf'),
        r = n('3XMw'),
        c = n.n(r),
        l = n('k6Ei'),
        s = n('rHpw'),
        u = n('+/1j'),
        d = n('MWbm'),
        m = c.a.c2fc878c,
        h = c.a.db11b27f,
        f = function (e) {
          return e
        },
        p = s.a.create(function (e) {
          var t = e.colors
          return {
            root: { alignItems: 'flex-start', minHeight: 30, minWidth: 30 },
            center: { alignItems: 'center', justifyContent: 'center', margin: 'auto' },
            progressCircle: { transitionDuration: '0.2s', transitionProperty: 'opacity' },
            hide: { opacity: 0 },
            text: { fontSize: 13, lineHeight: 0.8, minWidth: 16, textAlign: 'center' },
            gray700: { color: t.gray700 },
            red500: { color: t.red500 },
          }
        })
      t.a = function (e) {
        var t = e.count,
          n = e.maxCount,
          a = e.formatNumber,
          r = void 0 === a ? f : a,
          c = e.warningCount,
          b = n - t,
          v = b >= 0 ? h({ count: r(b) }) : m({ count: r(t - n) }),
          y =
            t >= c
              ? i.a.createElement(
                  u.a,
                  { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite', style: s.a.visuallyHidden },
                  v,
                )
              : null,
          w = Object(o.a)(b, n),
          g = t >= n ? 'red500' : t >= c ? 'yellow500' : 'primary',
          k = i.a.createElement(l.a, {
            color: g,
            progress: w,
            size: t >= c ? 30 : 20,
            style: [p.progressCircle, b <= -10 && p.hide],
          }),
          E = t >= c ? i.a.createElement(u.a, { style: [p.text, b > 0 ? p.gray700 : p.red500] }, r(b)) : null
        return i.a.createElement(
          d.a,
          { style: [p.root, p.center] },
          y,
          k,
          i.a.createElement(d.a, { style: [s.a.absoluteFill, p.center] }, E),
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
