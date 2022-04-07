;(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
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
        s = n('wwsH'),
        l = r.a.f2849136,
        u = r.a.ee9a81b6,
        d = { viewType: 'analytics' }
      function m(e) {
        var t = e.activeColor,
          n = e.color,
          a = e.iconSize,
          o = e.isDisabled,
          r = e.isFaded,
          m = e.isPresentational,
          p = e.onPress,
          h = e.style,
          f = e.tweetLink
        return i.a.createElement(s.a, {
          Icon: c.a,
          accessibilityLabel: u,
          activeColor: t,
          behavioralEventContext: d,
          color: n,
          hoverLabel: { label: l },
          iconSize: a,
          isDisabled: o,
          isFaded: r,
          isPresentational: m,
          link: !f || o || r ? void 0 : ''.concat(f, '/analytics'),
          onPress: p,
          style: h,
        })
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
        return s
      })
      n('1t7P'), n('jQ/y')
      var a = n('ERkP'),
        i = n.n(a),
        o = n('MWbm'),
        r = n('t62R'),
        c = n('rHpw'),
        s = function (e) {
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
            t && i.a.createElement(r.b, { color: 'gray700', style: l.description }, t),
          )
        },
        l = c.a.create(function (e) {
          return { description: { marginTop: e.spaces.space8 } }
        })
    },
    '2fsM': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      n('ho0z')
      var a = n('ERkP'),
        i = n.n(a),
        o = n('hG8M'),
        r = n('44Bp'),
        c = n('MAc7'),
        s = function (e) {
          var t = e.badgeImageUrl,
            n = e.badgeName,
            a = e.badgeScreenName,
            s = e.descriptionValue,
            l = e.imageUrl,
            u = e.introValue,
            d = e.isProtected,
            m = e.isVerified,
            p = e.name,
            h = e.screenName
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(c.a, { imageUrl: l, name: p, value: u }),
            i.a.createElement(r.a, { imageUrl: l, screenName: h, value: s }),
            i.a.createElement(o.a, { imageUrl: t, isProtected: d, isVerified: m, name: n, screenName: a }),
          )
        }
    },
    '3MlI': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return s
      }),
        n.d(t, 'a', function () {
          return l
        })
      var a = n('ERkP'),
        i = n.n(a),
        o = n('nBUg'),
        r = n('rHpw'),
        c = n('MWbm')
      function s(e) {
        var t = e.accessibilityLabel,
          n = e.accessibilityLabelledBy,
          a = e.children,
          r = e.displayStyle,
          s = void 0 === r ? 'inline' : r,
          l = e.nativeID,
          d = e.style,
          m = o.b.useProps().withEdgeToEdgeTweetAnatomy()
        return i.a.createElement(
          c.a,
          {
            accessibilityLabel: t,
            accessibilityLabelledBy: n,
            accessibilityRole: 'group',
            nativeID: l,
            style: [u.container, u[''.concat(s, 'Container')], m && u.noMaxWidth, d],
          },
          a,
        )
      }
      var l = 425,
        u = r.a.create(function (e) {
          return {
            container: { columnGap: e.spacesPx.space8, flexDirection: 'row' },
            inlineContainer: { justifyContent: 'space-between', maxWidth: l },
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
    '44Bp': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return I
      })
      var a = n('97Jx'),
        i = n.n(a),
        o = n('m3Bd'),
        r = n.n(o),
        c = n('ERkP'),
        s = n.n(c),
        l = (n('2G9S'), n('3XMw')),
        u = n.n(l),
        d = n('EyD/'),
        m = n('MWbm'),
        p = n('t62R'),
        h = n('rHpw'),
        f = n('a2Fh'),
        b = n('4zmP'),
        v = n('feOz'),
        y = n('aNKf'),
        w = [17, 7, 14, 11, 8, 12, 4, 11],
        g = s.a.createElement(
          u.a.I18NFormatMessage,
          { $i18n: 'gc242226' },
          s.a.createElement(p.b, { size: 'subtext3' }, u.a.fa70c77f),
        )
      var E = h.a.create(function (e) {
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
        k = function (e) {
          var t = e.style,
            n = function (e) {
              return ''.concat(h.a.theme.colors.cellBackground).concat(e || '')
            },
            a = h.a.theme.colors.transparent
          return s.a.createElement(
            m.a,
            { style: [E.root, t] },
            s.a.createElement(
              m.a,
              { style: E.mockTweet },
              s.a.createElement(m.a, { style: E.fakeBodyCopy }, s.a.createElement(f.a, { wordPercentWidths: w })),
              s.a.createElement(
                m.a,
                { style: E.educationCallout },
                s.a.createElement(b.a, { Icon: d.a, text: g, type: 'exclusive', withThumbnail: !0 }),
              ),
              s.a.createElement(v.a, {
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
            s.a.createElement(y.a, { colors: [n(), n(), n(50), a], locations: [0, 0.25, 0.75, 1], style: E.gradient }),
            s.a.createElement(y.a, { colors: [n(), n(99), n(50), a], locations: [0, 0.5, 0.75, 1], style: E.gradient }),
          )
        },
        C = (n('1t7P'), n('jQ/y'), n('PCeD')),
        x = n('cHvH'),
        S = ['style'],
        R = u.a.cbc8ce27,
        T = function (e, t) {
          var n = e.style,
            a = r()(e, S),
            o = Object(x.b)().windowWidth > h.a.theme.breakpoints.medium
          return s.a.createElement(
            m.a,
            { style: [A.root, o && A.rootWide, n] },
            s.a.createElement(
              p.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              R,
            ),
            s.a.createElement(C.a, i()({}, a, { ref: t, style: A.description })),
          )
        },
        P = s.a.forwardRef(T),
        A = h.a.create(function (e) {
          return {
            root: {
              paddingBottom: e.spaces.space16,
              paddingHorizontal: e.spaces.space32,
              paddingTop: e.spaces.space48,
            },
            rootWide: { paddingHorizontal: e.spaces.space48 },
            description: { marginTop: e.spaces.space8 },
          }
        }),
        H = ['style'],
        L = function (e, t) {
          e.style
          var n = r()(e, H)
          return s.a.createElement(
            s.a.Fragment,
            null,
            s.a.createElement(P, i()({}, n, { ref: t })),
            s.a.createElement(k, { style: D.superFollowsDemoVisibilityCallout }),
          )
        },
        I = s.a.forwardRef(L),
        D = h.a.create(function (e) {
          return {
            superFollowsDemoVisibilityCallout: {
              alignSelf: 'center',
              marginBottom: e.spaces.space32,
              marginTop: e.spaces.space16,
            },
          }
        })
    },
    'EyD/': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        o = n('ERkP'),
        r = n.n(o),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    G41x: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      })
      var a = n('ERkP'),
        i = n.n(a),
        o = n('mjJ+'),
        r = n('3XMw'),
        c = n.n(r),
        s = n('fn9Y'),
        l = n('wD1h'),
        u = n('wwsH'),
        d = c.a.dc63da15,
        m = c.a.jc9298a8,
        p = { viewType: 'share' }
      function h(e) {
        var t = e.actionItems,
          n = e.actionMenuDescription,
          a = e.activeColor,
          r = e.color,
          c = e.enableKeyboardShortcuts,
          h = e.iconSize,
          f = e.isDisabled,
          b = e.isFaded,
          v = e.isPresentational,
          y = e.onMenuCancel,
          w = e.onPress,
          g = e.style,
          E = e.withCount
        return i.a.createElement(u.a, {
          Icon: s.a,
          accessibilityLabel: m,
          activeColor: a,
          behavioralEventContext: p,
          color: r,
          enableKeyboardShortcuts: c,
          hoverLabel: { label: d },
          iconSize: h,
          isDisabled: f,
          isFaded: b,
          isPresentational: v,
          keyboardShortcut: l.a.shortcuts.share,
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
          withCount: E,
        })
      }
    },
    HSMM: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return p
      })
      n('hBvt')
      var a = n('ERkP'),
        i = n.n(a),
        o = n('3XMw'),
        r = n.n(o),
        c = n('dFWS'),
        s = n('wD1h'),
        l = n('wwsH'),
        u = r.a.hdf72269,
        d = r.a.c9940954,
        m = { viewType: 'reply' }
      function p(e) {
        var t = e.activeColor,
          n = e.color,
          a = e.count,
          o = e.enableKeyboardShortcuts,
          r = e.iconSize,
          p = e.isDisabled,
          h = e.isFaded,
          f = e.isPresentational,
          b = e.link,
          v = e.onPress,
          y = e.renderWrapper,
          w = e.style,
          g = e.testID,
          E = e.withCount && 'number' == typeof a,
          k = E ? d({ count: a }) : u
        return i.a.createElement(l.a, {
          Icon: c.a,
          accessibilityLabel: k,
          activeColor: t,
          behavioralEventContext: m,
          color: n,
          count: a,
          enableKeyboardShortcuts: o,
          hoverLabel: { label: u },
          iconSize: r,
          isDisabled: p,
          isFaded: h,
          isPresentational: f,
          keyboardShortcut: s.a.shortcuts.reply,
          link: b,
          onPress: v,
          renderWrapper: y,
          style: w,
          testID: g,
          withCount: E,
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
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
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
        s = n('MWbm'),
        l = n('cHvH'),
        u = n('rHpw'),
        d = n('oSwX'),
        m = n('j7Bv'),
        p = n('6OUF'),
        h = n('yTN1'),
        f = n('t62R'),
        b = r.a.a4ed9071,
        v = function (e, t) {
          var n,
            a = e.autoFocus,
            o = e.imageUrl,
            r = e.onChange,
            v = e.style,
            y = e.value,
            g = e.valueMaxLength,
            E = Object(l.b)().windowWidth > u.a.theme.breakpoints.small
          return i.a.createElement(
            s.a,
            { style: [w.root, v] },
            o
              ? i.a.createElement(d.default, { size: E ? 'xxxLarge' : 'xLarge', uri: o })
              : i.a.createElement(m.a, { Icon: c.a }),
            r
              ? i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(p.a, {
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
                      s.a,
                      { style: w.countdownCircle },
                      i.a.createElement(h.a, {
                        count: null !== (n = null == y ? void 0 : y.length) && void 0 !== n ? n : 0,
                        maxCount: g,
                        warningCount: g - 10,
                      }),
                    ),
                )
              : i.a.createElement(f.b, { style: [w.creatorIntro, w.creatorIntroReadOnly] }, y),
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
        s = n.n(c),
        l = n('VTDR'),
        u = n('JWc1'),
        d = n('t62R'),
        m = n('rHpw'),
        p = n('3XMw'),
        h = n.n(p),
        f = ['name', 'style'],
        b = h.a.dc71aee7,
        v = function (e, t) {
          var n = e.name,
            a = e.style,
            o = r()(e, f)
          return s.a.createElement(
            l.a,
            { style: a },
            s.a.createElement(
              d.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title3', weight: 'heavy' },
              s.a.createElement(
                h.a.I18NFormatMessage,
                { $i18n: 'f402ebd1', name: null != n ? n : '' },
                s.a.createElement('br', null),
              ),
            ),
            s.a.createElement(d.b, { style: w.subheader }, b),
            s.a.createElement(u.a, i()({}, o, { ref: t, style: w.intro })),
          )
        },
        y = s.a.forwardRef(v),
        w = m.a.create(function (e) {
          return { subheader: { marginTop: e.spaces.space8 }, intro: { marginTop: e.spaces.space36 } }
        })
    },
    PCeD: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return E
      })
      n('kH1Z'), n('6U7i'), n('1t7P'), n('jQ/y')
      var a = n('ERkP'),
        i = n.n(a),
        o = n('3XMw'),
        r = n.n(o),
        c = n('lUZE'),
        s = n('MWbm'),
        l = n('t62R'),
        u = n('oSwX'),
        d = n('j7Bv'),
        m = n('rHpw'),
        p = r.a.d2fb334b,
        h = r.a.f0c99eff,
        f = function (e) {
          var t = e.imageUrl,
            n = e.screenName,
            a = e.style
          return i.a.createElement(
            s.a,
            { style: [b.signature, a] },
            i.a.createElement(l.b, { color: 'gray700', weight: 'bold' }, h({ screenName: null != n ? n : p })),
            t
              ? i.a.createElement(u.default, { size: 'medium', uri: t })
              : i.a.createElement(d.a, { Icon: c.a, size: 'medium' }),
          )
        },
        b = m.a.create(function (e) {
          return {
            signature: { display: 'inline-flex', alignItems: 'center', flexDirection: 'row', gap: e.spaces.space8 },
          }
        }),
        v = n('6OUF'),
        y = n('yTN1'),
        w = r.a.a329ce87,
        g = function (e, t) {
          var n,
            a = e.autoFocus,
            o = e.imageUrl,
            r = e.onChange,
            c = e.screenName,
            u = e.style,
            d = e.value,
            m = e.valueMaxLength
          return i.a.createElement(
            s.a,
            { style: [k.root, u] },
            r
              ? i.a.createElement(v.a, {
                  autoFocus: a,
                  inputStyle: k.descriptionInput,
                  isCompact: !0,
                  leftAligned: !0,
                  maxNumberOfLines: Number.MAX_SAFE_INTEGER,
                  multiline: !0,
                  name: 'description',
                  numberOfLines: 1,
                  onChange: r,
                  placeholder: w,
                  ref: t,
                  style: k.description,
                  value: d,
                })
              : i.a.createElement(l.b, { color: 'gray700', style: k.description }, d),
            i.a.createElement(
              s.a,
              { style: k.signatureWrapper },
              i.a.createElement(f, { imageUrl: o, screenName: c, style: [k.signature, !d && k.visibilityHidden] }),
              r &&
                m &&
                i.a.createElement(y.a, {
                  count: null !== (n = null == d ? void 0 : d.length) && void 0 !== n ? n : 0,
                  maxCount: m,
                  warningCount: m - 10,
                }),
            ),
          )
        },
        E = i.a.forwardRef(g),
        k = m.a.create(function (e) {
          return {
            root: { display: 'inline-flex', alignItems: 'start', flexDirection: 'column' },
            description: { borderRadius: 0, borderColor: 'transparent', minHeight: 0, width: '100%' },
            descriptionInput: {
              color: e.colors.gray700,
              minHeight: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
            },
            signatureWrapper: {
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: e.spaces.space12,
              width: '100%',
            },
            signature: { flex: 1 },
            visibilityHidden: { visibility: 'hidden' },
          }
        })
    },
    'Q+qU': function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        i = n.n(a),
        o = n('ddV6'),
        r = n.n(o),
        c = n('ERkP'),
        s = n.n(c),
        l = n('t62R'),
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
        var t = s.a.useState(0),
          n = r()(t, 2),
          a = n[0],
          o = n[1],
          c = e.size || 'body',
          m = u.a.theme.fontSizesPx[c],
          p = { fontSize: m - a }
        return s.a.createElement(
          l.b,
          i()({}, e, {
            getTextOverflow: function (e) {
              e && m - a > u.a.theme.fontSizesPx.subtext3 && o(a + 1)
            },
            numberOfLines: 1,
            style: [e.style, p, d.apptext],
          }),
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
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    VTDR: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var a = n('ERkP'),
        i = n.n(a),
        o = n('MWbm'),
        r = n('cHvH'),
        c = n('rHpw'),
        s = n('+Eiw'),
        l = function (e) {
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
              backgroundImage: s.a.getBackgroundImage(),
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
        s = n('wwsH'),
        l = n('yVEN'),
        u = n('jlPL'),
        d = n('mjJ+'),
        m = n('TW8A'),
        p = r.a.d6c85149,
        h = r.a.f3bbbb87,
        f = r.a.c9d7235d,
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
          s,
          l,
          y,
          w,
          g,
          E,
          k,
          C,
          x,
          S =
            ((n = (t = e).excludeRetweetAction),
            (a = void 0 !== n && n),
            (o = t.excludeRetweetWithCommentAction),
            (r = void 0 !== o && o),
            (c = t.isRetweeted),
            (s = t.onMenuCancel),
            (l = t.onQuoteTweetActionSelect),
            (y = t.onRetweetActionSelect),
            (w = t.onUnretweetActionSelect),
            (g = t.retweetActionSubText),
            (E = t.retweetWithCommentLink),
            (k = t.testIDs),
            (C = null == k ? void 0 : k.retweetConfirm),
            (x = null == k ? void 0 : k.unretweetConfirm),
            i.a.useMemo(
              function () {
                var e = []
                return (
                  c ||
                    a ||
                    e.push({
                      behavioralEventContext: v(!0),
                      text: p,
                      subText: g,
                      onClick: function () {
                        null == s || s(), null == y || y()
                      },
                      testID: C,
                      Icon: u.a,
                    }),
                  c &&
                    e.push({
                      behavioralEventContext: v(!1),
                      text: h,
                      onClick: function () {
                        null == s || s(), null == w || w()
                      },
                      testID: x,
                      Icon: u.a,
                    }),
                  r ||
                    e.push({
                      behavioralEventContext: b,
                      text: f,
                      onClick: function () {
                        null == s || s(), null == l || l()
                      },
                      Icon: m.a,
                      link: E,
                    }),
                  e
                )
              },
              [a, r, c, s, l, y, w, g, E, C, x],
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
        E = r.a.g23ce6f0,
        k = r.a.i769b0ab,
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
          p = e.enableKeyboardShortcuts,
          h = e.excludeRetweetAction,
          f = e.excludeRetweetWithCommentAction,
          b = e.iconSize,
          v = e.isDisabled,
          S = e.isFaded,
          R = e.isPresentational,
          T = e.isRetweeted,
          P = e.onMenuCancel,
          A = e.onPress,
          H = e.onQuoteTweetActionSelect,
          L = e.onRetweetActionSelect,
          I = e.onUnretweetActionSelect,
          D = e.retweetActionSubText,
          W = e.retweetWithCommentLink,
          M = e.style,
          z = e.testIDs,
          B = e.withCount && 'number' == typeof r,
          F = T ? E : w
        return (
          B && (F = T ? C({ count: r }) : k({ count: r })),
          i.a.createElement(s.a, {
            ActiveIcon: l.a,
            Icon: u.a,
            accessibilityLabel: F,
            activeColor: a,
            behavioralEventContext: x,
            color: o,
            count: r,
            enableKeyboardShortcuts: p,
            hoverLabel: { label: T ? g : w },
            iconSize: b,
            isActive: T,
            isDisabled: v,
            isFaded: S,
            isPresentational: R,
            keyboardShortcut: c.a.shortcuts.retweet,
            onPress: A,
            renderMenu: m
              ? function (e) {
                  return i.a.createElement(y, {
                    actionMenuDescription: t,
                    excludeRetweetAction: h,
                    excludeRetweetWithCommentAction: f,
                    isRetweeted: T,
                    onMenuCancel: function () {
                      e(), null == P || P()
                    },
                    onQuoteTweetActionSelect: H,
                    onRetweetActionSelect: L,
                    onUnretweetActionSelect: I,
                    retweetActionSubText: D,
                    retweetWithCommentLink: W,
                    testIDs: {
                      retweetConfirm: null == z ? void 0 : z.retweetConfirm,
                      unretweetConfirm: null == z ? void 0 : z.unretweetConfirm,
                    },
                  })
                }
              : void 0,
            style: M,
            testID: T ? (null == z ? void 0 : z.unretweet) : null == z ? void 0 : z.retweet,
            withCount: B,
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
          return H
        })
      var a = n('97Jx'),
        i = n.n(a),
        o = n('T0aG'),
        r = n.n(o),
        c = n('ddV6'),
        s = n.n(c),
        l = (n('849X'), n('TJCb'), n('hBvt'), n('ERkP')),
        u = n.n(l),
        d = n('mjJ+'),
        m = n('PxJJ'),
        p = n('3XMw'),
        h = n.n(p),
        f = n('wD1h'),
        b = n('I8UQ'),
        v = n('wwsH'),
        y = n('aITJ'),
        w = n('KDev'),
        g = n('iEUn'),
        E = n('uCrx'),
        k = h.a.d636ebc6,
        C = h.a.eb3a8b0b,
        x = h.a.a4ae22fa,
        S = h.a.a0af935b,
        R = h.a.dac92b0c,
        T = h.a.aa650427
      function P(e) {
        var t = e.isLiked,
          n = e.likeTransitionAnimation,
          a = u.a.useState(!1),
          i = s()(a, 2),
          o = i[0],
          c = i[1],
          l = u.a.useRef(t)
        return (
          u.a.useEffect(
            function () {
              ;('object' === r()(n) || b.b.check(n)) && t !== l.current && (c(t), (l.current = t))
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
      function A() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Error('TweetActionLike.onError')
        m.a.report(e)
      }
      function H(e) {
        var t = e.actionMenuDescription,
          n = e.activeColor,
          a = void 0 === n ? 'magenta500' : n,
          o = e.color,
          r = e.count,
          c = e.enableActionMenu,
          s = void 0 !== c && c,
          l = e.enableKeyboardShortcuts,
          m = e.iconSize,
          p = e.isDisabled,
          h = e.isFaded,
          b = e.isLiked,
          H = e.isPresentational,
          L = e.likeActionIconContainerRef,
          I = e.likeTransitionAnimation,
          D = e.link,
          W = e.onError,
          M = void 0 === W ? A : W,
          z = e.onLikeActionSelect,
          B = e.onMenuCancel,
          F = e.onPress,
          j = e.style,
          O = e.testIDs,
          K = e.withCount && 'number' == typeof r,
          U = b ? S : k
        K && (U = b ? T({ count: r }) : R({ count: r }))
        var N = P({ isLiked: b, likeTransitionAnimation: I })
        return u.a.createElement(
          v.a,
          i()({}, N, {
            ActiveIcon: E.a,
            Icon: g.a,
            accessibilityLabel: U,
            actionIconContainerRef: L,
            activeColor: a,
            behavioralEventContext: { viewType: 'like', viewState: { type: 'toggleable', toggledTo: !b } },
            color: o,
            count: r,
            enableKeyboardShortcuts: l,
            hoverLabel: { label: b ? C : k },
            iconSize: m,
            isActive: b,
            isDisabled: p,
            isFaded: h,
            isPresentational: H,
            keyboardShortcut: f.a.shortcuts.like,
            link: D,
            onError: M,
            onPress: function () {
              y.b.isFirefox() || w.a.vibrate(5), null == F || F()
            },
            renderMenu: s
              ? function (e) {
                  var n = [
                    {
                      text: x,
                      onClick: function () {
                        e(), null == z || z()
                      },
                      testID: null == O ? void 0 : O.like,
                      Icon: g.a,
                    },
                  ]
                  return u.a.createElement(d.a, {
                    description: t,
                    items: n,
                    onCloseRequested: function () {
                      e(), null == B || B()
                    },
                  })
                }
              : void 0,
            style: j,
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
          s = e.style,
          l = e.withBorderRadius,
          u = e.withLineWrap,
          d = e.wordHeightPx,
          m = e.wordPercentWidths,
          p = e.wordSpacingPx,
          h = i.a.useMemo(
            function () {
              return m.map(function (e, a) {
                var s = p || o.a.theme.spaces.space4,
                  u = a !== m.length - 1 ? s : 0,
                  h = i.a.createElement(r.a, {
                    key: a,
                    style: [
                      c.word,
                      { width: n ? '100%' : ''.concat(e, '%') },
                      t && { backgroundColor: o.a.theme.colors[t] },
                      !n && { marginRight: u },
                      l && c.borderRadius,
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
                      h,
                    )
                  : h
              })
            },
            [t, n, l, d, p, m],
          )
        return i.a.createElement(r.a, { style: [c.root, u && c.lineWrap, { maxWidth: a || 'none' }, s] }, h)
      }
    },
    dFWS: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        o = n('ERkP'),
        r = n.n(o),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
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
        s = n('q1bs'),
        l = n('Eqye'),
        u = n('uCrx'),
        d = n('yiKp'),
        m = n.n(d),
        p = n('KEM+'),
        h = n.n(p),
        f = n.p + 'cheer.6249ab45.png',
        b = n.p + 'haha.c0b42cb5.png',
        v = n.p + 'hmm.bc35b1e5.png',
        y = n('3rX5'),
        w = n.p + 'like.7a3e9685.png',
        g = n('kSIJ'),
        E = n('mJtw'),
        k = n.p + 'sad.f12709e5.png',
        C = n('rHpw'),
        x = n('MWbm'),
        S =
          ((a = {}),
          h()(a, E.a.Like, w),
          h()(a, E.a.Haha, b),
          h()(a, E.a.Hmm, v),
          h()(a, E.a.Sad, k),
          h()(a, E.a.Cheer, f),
          a),
        R = C.a.create(function (e) {
          return {
            fillContainer: { height: '100%', width: '100%' },
            reactionSelectedIcon: m()({}, C.a.absoluteFillObject),
            imageCover: { position: 'absolute' },
          }
        }),
        T = function (e) {
          var t = e.reactionType
          return r.a.createElement(
            x.a,
            { style: R.fillContainer },
            r.a.createElement(y.a, { accessibilityLabel: g.a[t], source: S[t], style: R.reactionSelectedIcon }),
            r.a.createElement(x.a, { style: [R.reactionSelectedIcon, R.imageCover] }),
          )
        },
        P = n('DQLs'),
        A =
          ((i = {}),
          h()(i, E.a.Hmm, 'https://abs.twimg.com/sticky/animations/hmm.reaction.1.json'),
          h()(i, E.a.Sad, 'https://abs.twimg.com/sticky/animations/sad.reaction.1.json'),
          h()(i, E.a.Haha, 'https://abs.twimg.com/sticky/animations/haha.reaction.1.json'),
          h()(i, E.a.Cheer, 'https://abs.twimg.com/sticky/animations/cheer.reaction.1.json'),
          h()(i, E.a.Like, 'https://abs.twimg.com/sticky/animations/like.reaction.1.json'),
          i),
        H = function (e) {
          var t = e.reactionType,
            n = s.b.get(A[t])
          return (
            (n && 'boolean' != typeof n) || (n = A[t]), r.a.createElement(P.a, { animation: n, autoplay: !0, loop: !0 })
          )
        },
        L = function () {
          var e = window.navigator.deviceMemory
          return c.a.reducedMotionEnabled || l.a.isEnabled || (e && e < 4)
        },
        I = function (e) {
          var t = e.legacyHeart,
            n = e.reactionType,
            a = e.style,
            i = e.withAnimation,
            o = void 0 !== i && i,
            c = !L() && o ? H : T
          return t && n === E.a.Like
            ? r.a.createElement(x.a, { style: [D.root, D.legacyHeart, a] }, r.a.createElement(u.a, { style: D.root }))
            : r.a.createElement(x.a, { style: [D.root, a] }, r.a.createElement(c, { reactionType: n }))
        },
        D = C.a.create(function (e) {
          return { root: { height: '100%', width: '100%' }, legacyHeart: { color: e.colors.magenta500 } }
        }),
        W = function () {
          r.a.useEffect(function () {
            L() || (s.b.check(A.Hmm), s.b.check(A.Sad), s.b.check(A.Haha), s.b.check(A.Cheer), s.b.check(A.Like))
          }, [])
        }
      t.a = r.a.memo(I)
    },
    feOz: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return pt
      })
      var a = n('yiKp'),
        i = n.n(a),
        o = n('ddV6'),
        r = n.n(o),
        c = (n('KOtZ'), n('7x/C'), n('LW0h'), n('97Jx')),
        s = n.n(c),
        l = n('m3Bd'),
        u = n.n(l),
        d = n('ERkP'),
        m = n.n(d),
        p = n('+Tpo'),
        h = n('T0aG'),
        f = n.n(h),
        b = (n('849X'), n('TJCb'), n('PxJJ')),
        v = n('3XMw'),
        y = n.n(v),
        w = n('wD1h'),
        g = n('wwsH'),
        E = n('aITJ'),
        k = n('KDev'),
        C = n('VrFO'),
        x = n.n(C),
        S = n('Y9Ll'),
        R = n.n(S),
        T = n('n70c'),
        P = n.n(T),
        A = n('AuHH'),
        H = n.n(A),
        L = n('5Yy7'),
        I = n.n(L),
        D = n('2VqO'),
        W = n.n(D),
        M = n('q1bs'),
        z = 'https://abs.twimg.com/sticky/animations/reply.downvote.1.json',
        B = new ((function (e) {
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
                  return P()(H()(n.prototype), 'check', this).call(this, null != e ? e : z)
                },
              },
            ]),
            n
          )
        })(M.a))(),
        F = n('Lsrn'),
        j = n('k/Ka'),
        O = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(j.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [F.a.root, e.style],
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
        N = y.a.d2b2b8e5,
        V = y.a.hcb3286f,
        J = y.a.cb5dafd3
      function X() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Error('TweetActionDownvote.onError')
        b.a.report(e)
      }
      var q = n('Z8+W'),
        G = n('KEM+'),
        Q = n.n(G),
        Z = n('CHgo'),
        Y = (n('z84I'), n('M+/F'), n('tQbP'), n('de1q')),
        _ = n('mJtw'),
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
              return !(1 === a.length && e.type === _.a.Like) || (t && t !== _.a.Like)
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
            s = ne(t, a, i)
          return 0 === s.length
            ? null
            : m.a.createElement($.a, null, function (e) {
                return e.windowWidth > ee.a.theme.breakpoints.xSmall * ee.a.theme.scaleMultipler
                  ? m.a.createElement(
                      te.a,
                      { style: [ae.basket, c] },
                      s.map(function (e) {
                        return m.a.createElement(
                          te.a,
                          { key: e.type, style: g.b[r] },
                          m.a.createElement(Y.a, { legacyHeart: n, reactionType: e.type, withAnimation: !1 }),
                        )
                      }),
                    )
                  : null
              })
        },
        oe = n('cm6r'),
        re = n('tn7R'),
        ce = n('3dyc'),
        se = n('OiMc'),
        le = n('38/B'),
        ue = n('kSIJ'),
        de = n('WrBE'),
        me = ee.a.theme.spacesPx.space40,
        pe = { growing: 'growing', grown: 'grown', shrinking: 'shrinking', shrunk: 'shrunk' },
        he = function (e, t) {
          var n = m.a.useRef(new de.a.Value(e)).current,
            a = m.a.useState(pe.shrunk),
            i = r()(a, 2),
            o = i[0],
            c = i[1],
            s = m.a.useCallback(
              function (e) {
                c(pe.growing),
                  de.a.timing(n, { duration: 200, toValue: t, useNativeDriver: !1 }).start(function (t) {
                    t.finished && c(pe.grown), e && e(t)
                  })
              },
              [n, t],
            ),
            l = m.a.useCallback(
              function (t) {
                c(pe.shrinking),
                  de.a.timing(n, { duration: 200, toValue: e, useNativeDriver: !1 }).start(function (e) {
                    e.finished && c(pe.shrunk), t && t(e)
                  })
              },
              [n, e],
            )
          return { animationState: o, currentHeight: n, startAnimation: s, resetAnimation: l }
        },
        fe = function (e) {
          return Object(j.a)('div', e)
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
            s = e.withAnimation,
            l = void 0 === s || s,
            u = m.a.useState(!1),
            d = r()(u, 2),
            p = d[0],
            h = d[1],
            f = he(me, 1.5 * me),
            b = f.animationState,
            v = f.currentHeight,
            y = f.resetAnimation,
            w = f.startAnimation
          m.a.useEffect(
            function () {
              if (!le.a.reducedMotionEnabled) {
                var e = n || p,
                  t = b === pe.shrinking || b === pe.shrunk,
                  a = b === pe.growing || b === pe.grown
                e && t ? w() : !e && a && y()
              }
            },
            [n, p, w, y, b],
          )
          var g = function () {
              h(!0)
            },
            E = function () {
              h(!1)
            },
            k = n || p
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
                    b === pe.grown || le.a.reducedMotionEnabled
                      ? { label: ue.a[c], preferredVerticalOrientation: 'up', withDelay: !1, withExtraSpace: !0 }
                      : void 0,
                  interactiveStyles: null,
                  onFocusRingGained: g,
                  onFocusRingLost: E,
                  onHoverIn: g,
                  onHoverOut: E,
                  onPress: i,
                  style: be.fullHeight,
                },
                m.a.createElement(Y.a, { legacyHeart: a, reactionType: c, withAnimation: l }),
                o && !k && m.a.createElement(te.a, { style: be.activeBackground }),
              ),
            ),
            t && m.a.createElement(fe, { 'data-reaction-type': c, style: be.largeTouchArea }),
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
            s = e.withAnimation,
            l = void 0 === s || s
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
                withAnimation: l,
              })
              var c
            }),
          )
        },
        ge = n('iEUn'),
        Ee = n('DlVf'),
        ke = n('FG+G'),
        Ce = n('uCrx'),
        xe = Object(re.a)(_.a),
        Se = _.a.Like,
        Re = y.a.e3469988,
        Te = y.a.c46f0fce,
        Pe = y.a.ga9c2b52,
        Ae = y.a.hb755a53,
        He = y.a.cff26b89,
        Le = 'data-reaction-type',
        Ie = function (e) {
          var t = e.style
          return m.a.createElement(Y.a, { reactionType: _.a.Cheer, style: t, withAnimation: !1 })
        },
        De = function (e) {
          var t = e.style
          return m.a.createElement(Y.a, { reactionType: _.a.Haha, style: t, withAnimation: !1 })
        },
        We = function (e) {
          var t = e.style
          return m.a.createElement(Y.a, { reactionType: _.a.Hmm, style: t, withAnimation: !1 })
        },
        Me = function (e) {
          var t = e.style
          return m.a.createElement(Y.a, { reactionType: _.a.Like, style: t, withAnimation: !1 })
        },
        ze = function (e) {
          var t = e.style
          return m.a.createElement(Y.a, { reactionType: _.a.Sad, style: t, withAnimation: !1 })
        },
        Be = ee.a.create(function (e) {
          return {
            root: { justifyContent: 'center', userSelect: 'none' },
            popoverContainer: { minWidth: 0, overflow: 'visible' },
            buttonContainer: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
            fruitBasketSpacing: { marginLeft: e.spaces.space8 },
            caretWithoutCount: { marginLeft: e.spaces.space12 },
          }
        }),
        Fe = function (e) {
          var t,
            n = e.activeColor,
            a = void 0 === n ? 'magenta500' : n,
            i = e.color,
            o = e.enableKeyboardShortcuts,
            c = e.experimentalFruitBasketThreshold,
            l = e.iconSize,
            u = e.isDisabled,
            d = e.isFaded,
            p = e.isPresentational,
            h = e.legacyHeart,
            f = e.onPopoverDismiss,
            b = e.onPopoverOpen,
            v = e.onReactionSelect,
            y = e.reacted,
            E = e.reactionCounts,
            k = void 0 === E ? [] : E,
            C = e.style,
            x = e.tweetActionsRef,
            S = e.testIDs,
            R = e.withAnimation,
            T = void 0 === R || R,
            P = e.withCount,
            A = void 0 !== P && P,
            H = e.withFruitBasket,
            L = void 0 !== H && H,
            I = m.a.useState(null),
            D = r()(I, 2),
            W = D[0],
            M = D[1],
            z = m.a.useState(!1),
            B = r()(z, 2),
            F = B[0],
            j = B[1],
            O = m.a.useState(!1),
            K = r()(O, 2),
            U = K[0],
            N = K[1],
            V = m.a.useRef(null),
            J = m.a.useRef()
          Object(Y.b)()
          var X = Object(q.b)({ isLiked: y === _.a.Like && !!h }),
            G = k.reduce(function (e, t) {
              return e + t.count
            }, 0),
            $ = y ? Te : Re
          A && ($ = y ? He({ count: G }) : Ae({ count: G }))
          var ne =
              ((t = {}),
              Q()(t, w.a.shortcuts.like, function (e) {
                fe(!0)
              }),
              Q()(t, w.a.shortcuts.reactUndo, function (e) {
                return v()
              }),
              Q()(t, w.a.shortcuts.reactHmm, function (e) {
                return v(_.a.Hmm, 'keyboard-shortcut')
              }),
              Q()(t, w.a.shortcuts.reactSad, function (e) {
                return v(_.a.Sad, 'keyboard-shortcut')
              }),
              Q()(t, w.a.shortcuts.reactHaha, function (e) {
                return v(_.a.Haha, 'keyboard-shortcut')
              }),
              Q()(t, w.a.shortcuts.reactCheer, function (e) {
                return v(_.a.Cheer, 'keyboard-shortcut')
              }),
              Q()(t, w.a.shortcuts.reactLike, function (e) {
                return v(_.a.Like, 'keyboard-shortcut')
              }),
              t),
            ae = function (e) {
              N(e === ce.a.longPress), null == b || b(e)
            },
            re = function () {
              j(!0)
            },
            le = m.a.useCallback(function (e) {
              var t,
                n = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY),
                a =
                  null == n || null === (t = n.closest('['.concat(Le, ']'))) || void 0 === t
                    ? void 0
                    : t.getAttribute(Le)
              M(a ? _.a[a] : null), e.preventDefault()
            }, [])
          m.a.useEffect(
            function () {
              if (V.current) {
                var e = Object(Z.a)(V.current, le, !1)
                return function () {
                  e && e()
                }
              }
            },
            [le],
          )
          var ue = function (e) {
              return function () {
                j(!1), W && (v(W, 'picker-touchend'), M(null), e())
              }
            },
            de = function (e) {
              return m.a.createElement(we, {
                dismissReactionPicker: e,
                enableTouch: F,
                forceHovered: W,
                legacyHeart: h,
                onSelection: v,
                reacted: y,
                reactionOptions: xe,
                withAnimation: T,
              })
            },
            me = function (e) {
              return function (t) {
                e(), t.stopPropagation()
              }
            },
            pe = function () {
              switch (y) {
                case _.a.Cheer:
                  return Ie
                case _.a.Haha:
                  return De
                case _.a.Hmm:
                  return We
                case _.a.Like:
                  return h ? Ce.a : Me
                case _.a.Sad:
                  return ze
                default:
                  return Me
              }
            },
            he = function (e) {
              return function (t) {
                e(), fe('keydown' === t.type)
              }
            },
            fe = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              y ? v() : v(Se, e ? 'keyboard-shortcut' : 'button-tap')
            },
            be = function () {
              return L
                ? 0 === G || (1 === G && y)
                  ? null
                  : m.a.createElement(ie, {
                      experimentalFruitBasketThreshold: c,
                      legacyHeart: h,
                      reacted: y,
                      reactionCounts: k,
                      size: l,
                      style: Be.fruitBasketSpacing,
                    })
                : null
            }
          return m.a.createElement(
            te.a,
            { style: [Be.root, C] },
            m.a.createElement(
              w.a,
              { enabled: !!o, handlers: ne },
              m.a.createElement(
                se.a,
                {
                  anchorRef: U ? x : J,
                  animationDuration: 'normal',
                  animationType: 'slide',
                  contentStyle: Be.popoverContainer,
                  disabled: u || d,
                  enableHover: !0,
                  enableLongPress: !0,
                  hoverDelay: 'short',
                  onDismiss: f,
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
                      ref: V,
                      style: Be.buttonContainer,
                    },
                    function (e) {
                      var o = e.isFocusedWithin
                      return m.a.createElement(
                        m.a.Fragment,
                        null,
                        m.a.createElement(
                          g.a,
                          s()({}, X, {
                            ActiveIcon: pe(),
                            Icon: h ? ge.a : Ee.a,
                            accessibilityLabel: $,
                            actionIconContainerRef: J,
                            activeColor: a,
                            color: i,
                            count: G,
                            decoration: be(),
                            enableKeyboardShortcuts: !1,
                            hoverLabel: { label: Re },
                            iconSize: l,
                            isActive: !!y,
                            isDisabled: u,
                            isFaded: d,
                            isPresentational: p,
                            onPress: he(t),
                            showBackgroundWhenActive: !0,
                            testID: S && (y ? S.unreact : S.react),
                            withCount: A,
                          }),
                        ),
                        m.a.createElement(g.a, {
                          Icon: ke.a,
                          accessibilityLabel: Pe,
                          activeColor: a,
                          color: i,
                          hoverLabel: { label: Pe },
                          iconSize: l,
                          isDisabled: u,
                          isFaded: d,
                          isPresentational: p,
                          onPress: me(n),
                          style: [!o && ee.a.visuallyHidden, !A && Be.caretWithoutCount],
                        }),
                      )
                    },
                  )
                },
              ),
            ),
          )
        },
        je = n('HSMM'),
        Oe = n('Wk1j'),
        Ke = n('G41x'),
        Ue = ['isFromProtectedAccount'],
        Ne = p.a,
        Ve = function (e) {
          var t = e.activeColor,
            n = void 0 === t ? 'orange500' : t,
            a = e.color,
            i = e.count,
            o = e.enableKeyboardShortcuts,
            c = e.iconSize,
            l = e.isDisabled,
            u = e.isFaded,
            d = e.isDownvoted,
            p = e.isPresentational,
            h = e.downvoteTransitionAnimation,
            b = void 0 === h ? z : h,
            v = e.onError,
            y = void 0 === v ? X : v,
            C = e.onPress,
            x = e.style,
            S = e.testIDs,
            R = e.withCount && 'number' == typeof i,
            T = d ? J : N,
            P = (function (e) {
              var t = e.downvoteTransitionAnimation,
                n = e.isDownvoted,
                a = m.a.useState(!1),
                i = r()(a, 2),
                o = i[0],
                c = i[1],
                s = m.a.useRef(n)
              return (
                m.a.useEffect(
                  function () {
                    ;('object' === f()(t) || B.check(t)) && n !== s.current && (c(n), (s.current = n))
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
            s()({}, P, {
              ActiveIcon: K,
              Icon: U.a,
              accessibilityLabel: T,
              activeColor: n,
              behavioralEventContext: { viewType: 'downvote', viewState: { type: 'toggleable', toggledTo: !d } },
              color: a,
              count: i,
              enableKeyboardShortcuts: o,
              hoverLabel: { label: d ? V : N },
              iconSize: c,
              isActive: d,
              isDisabled: l,
              isFaded: u,
              isPresentational: p,
              keyboardShortcut: w.a.shortcuts.downvote,
              onError: y,
              onPress: function () {
                E.b.isFirefox() || k.a.vibrate(5), null == C || C()
              },
              style: x,
              testID: S && (d ? S.undownvote : S.downvote),
              withCount: R,
            }),
          )
        },
        Je = q.a,
        Xe = Fe,
        qe = je.a,
        Ge = Ke.a
      var Qe = n('Xrkv'),
        Ze = n('fs1G'),
        Ye = n('Q+qU'),
        _e = n('3MlI'),
        $e = n('0ig/'),
        et = y.a.a0af935b,
        tt = y.a.fbaa28ef,
        nt = y.a.f9be84f0,
        at = y.a.g23ce6f0,
        it = y.a.b75196a4,
        ot = function (e) {
          return m.a.createElement(pt.ActionAnalytics, e)
        },
        rt = function (e) {
          return m.a.createElement(pt.ActionDownvote, e)
        },
        ct = function (e) {
          return m.a.createElement(pt.ActionLike, e)
        },
        st = function (e) {
          return m.a.createElement(pt.ActionReaction, e)
        },
        lt = function (e) {
          return m.a.createElement(pt.ActionReply, e)
        },
        ut = function (e) {
          return m.a.createElement(pt.ActionRetweet, e)
        },
        dt = function (e) {
          return m.a.createElement(pt.ActionShare, e)
        },
        mt = []
      function pt(e) {
        var t = e.actionSize,
          n = void 0 === t ? 'normal' : t,
          a = e.activeColor,
          o = void 0 === a ? void 0 : a,
          c = e.color,
          s = void 0 === c ? 'gray700' : c,
          l = e.displayStyle,
          u = e.downvoteCount,
          d = e.enableKeyboardShortcuts,
          p = void 0 === d || d,
          h = e.isDisabled,
          f = void 0 !== h && h,
          b = e.isDownvoted,
          v = void 0 !== b && b,
          w = e.isFromProtectedAccount,
          g = e.isLiked,
          E = e.isRetweeted,
          k = e.isPresentational,
          C = e.likeCount,
          x = e.nativeID,
          S = e.reaction,
          R = e.reactionCounts,
          T = e.renderAnalyticsAction,
          P = void 0 === T ? ot : T,
          A = e.renderDownvoteAction,
          H = void 0 === A ? rt : A,
          L = e.renderLikeAction,
          I = void 0 === L ? ct : L,
          D = e.renderReactionAction,
          W = void 0 === D ? st : D,
          M = e.renderReplyAction,
          z = void 0 === M ? lt : M,
          B = e.renderRetweetAction,
          F = void 0 === B ? ut : B,
          j = e.renderShareAction,
          O = void 0 === j ? dt : j,
          K = e.replyCount,
          U = e.retweetCount,
          N = e.showDownvoteBeforeLike,
          V = void 0 !== N && N,
          J = e.style,
          X = e.tweetLink,
          q = e.withAnalytics,
          G = void 0 !== q && q,
          Q = e.withDownvote,
          Z = void 0 !== Q && Q,
          Y = e.withCount,
          _ = void 0 !== Y && Y,
          $ = e.withReaction,
          ee = void 0 !== $ && $,
          ne = m.a.useState(!1),
          ae = r()(ne, 2),
          ie = ae[0],
          oe = ae[1],
          re = m.a.useRef(null),
          se = Object($e.a)(),
          le = G && se.width >= _e.a,
          ue =
            null == R
              ? void 0
              : R.reduce(function (e, t) {
                  return e + t.count
                }, 0),
          de = m.a.useMemo(
            function () {
              if (_) {
                var e = y.a.b03835c7,
                  t = y.a.hb7b0cea,
                  n = y.a.e089b42d,
                  a = y.a.d8320937
                return Object(Qe.a)(
                  [
                    K ? e({ replyCount: K }) : null,
                    U ? t({ retweetCount: U }) : null,
                    E ? at : null,
                    C && !ee ? n({ likeCount: C }) : null,
                    g && !ee ? et : null,
                    ue && ee ? a({ reactionCount: ue }) : null,
                    S && ee ? tt : null,
                    v && Z ? nt : null,
                  ].filter(Boolean),
                  !0,
                )
              }
            },
            [v, g, E, C, ue, S, K, U, _, Z, ee],
          ),
          me = { color: s, iconSize: n, isDisabled: f },
          pe = function () {
            return H(
              i()(
                i()({}, me),
                {},
                {
                  activeColor: o,
                  count: u,
                  enableKeyboardShortcuts: p,
                  isDownvoted: v,
                  isPresentational: k,
                  withCount: _,
                },
              ),
            )
          }
        return m.a.createElement(
          te.a,
          { ref: re },
          m.a.createElement(
            _e.b,
            { accessibilityLabel: de, displayStyle: l, nativeID: x, style: [J, ie && ht.hidden] },
            z(
              i()(
                i()({}, me),
                {},
                { activeColor: o, count: K, enableKeyboardShortcuts: p, isPresentational: k, withCount: _ },
              ),
            ),
            F(
              i()(
                i()({}, me),
                {},
                {
                  activeColor: o,
                  count: U,
                  enableKeyboardShortcuts: p,
                  isFromProtectedAccount: w,
                  isRetweeted: E,
                  isPresentational: k,
                  withCount: _,
                },
              ),
            ),
            Z && V ? pe() : null,
            ee
              ? W(
                  i()(
                    i()({}, me),
                    {},
                    {
                      activeColor: o,
                      enableKeyboardShortcuts: p,
                      isPresentational: k,
                      onPopoverDismiss: function () {
                        return oe(!1)
                      },
                      onPopoverOpen: function (e) {
                        oe(e === ce.a.longPress)
                      },
                      onReactionSelect: Ze.a,
                      reacted: S,
                      reactionCounts: R,
                      tweetActionsRef: re,
                      withCount: _,
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
                      enableKeyboardShortcuts: p,
                      isLiked: g,
                      isPresentational: k,
                      withCount: _,
                    },
                  ),
                ),
            Z && !V ? pe() : null,
            O(
              i()(
                i()({}, me),
                {},
                {
                  actionItems: mt,
                  activeColor: o,
                  enableKeyboardShortcuts: p,
                  isPresentational: k,
                  withCount: _ && le,
                },
              ),
            ),
            le ? P(i()(i()({}, me), {}, { isPresentational: k, tweetLink: X })) : null,
          ),
          ie ? m.a.createElement(te.a, { style: ht.swipeInfoBar }, m.a.createElement(Ye.a, { color: s }, it)) : null,
        )
      }
      ;(pt.ActionAnalytics = Ne),
        (pt.ActionDownvote = Ve),
        (pt.ActionLike = Je),
        (pt.ActionReaction = Xe),
        (pt.ActionReply = qe),
        (pt.ActionRetweet = function (e) {
          var t = e.isFromProtectedAccount,
            n = void 0 !== t && t,
            a = u()(e, Ue)
          return m.a.createElement(
            Oe.b,
            s()({}, a, {
              excludeRetweetAction: a.excludeRetweetAction || n,
              excludeRetweetWithCommentAction: a.excludeRetweetWithCommentAction || n,
              isDisabled: a.isDisabled || (!a.isRetweeted && n),
            }),
          )
        }),
        (pt.ActionShare = Ge)
      var ht = ee.a.create(function (e) {
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
    hG8M: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return P
      })
      var a = n('97Jx'),
        i = n.n(a),
        o = n('m3Bd'),
        r = n.n(o),
        c = n('ERkP'),
        s = n.n(c),
        l = n('3XMw'),
        u = n.n(l),
        d = (n('ho0z'), n('MWbm')),
        m = n('oSwX'),
        p = n('jV+4'),
        h = n('9VO7'),
        f = n('a2Fh'),
        b = n('9Xij'),
        v = n('rHpw'),
        y = {
          backgroundBottomTweet: [12, 8, 6, 12],
          backgroundTopTweet: [13, 8, 5, 19, 8, 6],
          focalPointTweet: [12, 8, 5, 19, 17, 14],
        }
      function w(e) {
        var t = e.wordWidths
        return s.a.createElement(
          d.a,
          { style: E.root },
          s.a.createElement(b.a, { ratio: 1, style: E.mockUserAvatar }),
          s.a.createElement(
            d.a,
            { style: E.mockTweetContent },
            s.a.createElement(
              d.a,
              { style: E.mockUserNameContainer },
              s.a.createElement(f.a, {
                color: 'text',
                maxWidthPx: 18,
                style: E.mockUserNameMarginRight,
                wordHeightPx: 3,
                wordPercentWidths: [100],
              }),
              s.a.createElement(f.a, {
                color: 'gray700',
                maxWidthPx: 35,
                withBorderRadius: !0,
                wordHeightPx: 3,
                wordPercentWidths: [100],
              }),
            ),
            s.a.createElement(f.a, { withBorderRadius: !0, wordHeightPx: 3, wordPercentWidths: t }),
          ),
        )
      }
      var g = v.a.create(function (e) {
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
        E = v.a.create(function (e) {
          return {
            root: { flexDirection: 'row', marginBottom: e.spaces.space8, padding: e.spaces.space16, width: '100%' },
            mockUserAvatar: {
              border: 'none',
              backgroundColor: e.colors.gray300,
              borderRadius: e.borderRadii.infinite,
              height: v.a.theme.spaces.space40,
              width: v.a.theme.spaces.space40,
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
        k = function (e) {
          var t = e.imageUrl,
            n = e.isProtected,
            a = e.isVerified,
            i = e.name,
            o = e.screenName,
            r = e.style
          return i && o && t
            ? s.a.createElement(
                d.a,
                { style: [g.root, r] },
                s.a.createElement(
                  d.a,
                  { style: g.mockBackgroundTweets },
                  s.a.createElement(w, { wordWidths: y.backgroundTopTweet }),
                  s.a.createElement(w, { wordWidths: y.backgroundBottomTweet }),
                ),
                s.a.createElement(
                  d.a,
                  { style: g.mockFocalTweetContainer },
                  s.a.createElement(
                    d.a,
                    { style: g.mockFocalTweet },
                    s.a.createElement(
                      d.a,
                      null,
                      s.a.createElement(m.default, { focusable: !1, size: 'xLarge', uri: t }),
                    ),
                    s.a.createElement(
                      d.a,
                      { style: g.mockFocalTweetContent },
                      s.a.createElement(p.a, {
                        isProtected: n,
                        isVerified: a,
                        name: i,
                        nameSize: 'body',
                        screenName: o,
                        screenNameSize: 'body',
                      }),
                      s.a.createElement(
                        d.a,
                        { style: g.superFollowIndicatorContainer },
                        s.a.createElement(h.a, { type: 'superFollower' }),
                      ),
                      s.a.createElement(f.a, {
                        style: g.mockBodyCopy,
                        withBorderRadius: !0,
                        wordPercentWidths: y.focalPointTweet,
                      }),
                    ),
                  ),
                ),
              )
            : null
        },
        C = n('1k08'),
        x = n('cHvH'),
        S = ['style'],
        R = u.a.b600eb88,
        T = u.a.b08bbeb4,
        P = function (e) {
          var t = e.style,
            n = r()(e, S),
            a = Object(x.b)().windowWidth > v.a.theme.breakpoints.medium
          return s.a.createElement(
            d.a,
            { style: [A.root, a && A.rootWide, t] },
            s.a.createElement(C.a, { description: T, title: R }),
            s.a.createElement(k, i()({}, n, { style: A.superFollowsDemoBadge })),
          )
        },
        A = v.a.create(function (e) {
          return {
            description: { marginTop: e.spaces.space8 },
            root: {
              paddingBottom: e.spaces.space16,
              paddingHorizontal: e.spaces.space32,
              paddingTop: e.spaces.space48,
            },
            rootWide: { paddingHorizontal: e.spaces.space48 },
            superFollowsDemoBadge: { alignSelf: 'center', marginTop: e.spaces.space32 },
          }
        })
    },
    kSIJ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var a,
        i = n('KEM+'),
        o = n.n(i),
        r = n('3XMw'),
        c = n.n(r),
        s = n('mJtw'),
        l =
          ((a = {}),
          o()(a, s.a.Like, c.a.d636ebc6),
          o()(a, s.a.Haha, c.a.bd83592a),
          o()(a, s.a.Hmm, c.a.f84f0fa8),
          o()(a, s.a.Sad, c.a.g47ce0e4),
          o()(a, s.a.Cheer, c.a.fc8a13c5),
          a)
    },
    xrkw: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        o = n('ERkP'),
        r = n.n(o),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    yTN1: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        i = n.n(a),
        o = n('WOwf'),
        r = n('3XMw'),
        c = n.n(r),
        s = n('k6Ei'),
        l = n('rHpw'),
        u = n('+/1j'),
        d = n('MWbm'),
        m = c.a.c2fc878c,
        p = c.a.db11b27f,
        h = function (e) {
          return e
        },
        f = l.a.create(function (e) {
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
          r = void 0 === a ? h : a,
          c = e.warningCount,
          b = n - t,
          v = b >= 0 ? p({ count: r(b) }) : m({ count: r(t - n) }),
          y =
            t >= c
              ? i.a.createElement(
                  u.a,
                  { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite', style: l.a.visuallyHidden },
                  v,
                )
              : null,
          w = Object(o.a)(b, n),
          g = t >= n ? 'red500' : t >= c ? 'yellow500' : 'primary',
          E = i.a.createElement(s.a, {
            color: g,
            progress: w,
            size: t >= c ? 30 : 20,
            style: [f.progressCircle, b <= -10 && f.hide],
          }),
          k = t >= c ? i.a.createElement(u.a, { style: [f.text, b > 0 ? f.gray700 : f.red500] }, r(b)) : null
        return i.a.createElement(
          d.a,
          { style: [f.root, f.center] },
          y,
          E,
          i.a.createElement(d.a, { style: [l.a.absoluteFill, f.center] }, k),
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
