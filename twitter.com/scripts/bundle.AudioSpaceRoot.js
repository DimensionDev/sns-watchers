;(window.webpackJsonp = window.webpackJsonp || []).push([
  [33],
  {
    CAb6: function (e, a, t) {
      'use strict'
      t.r(a),
        t.d(a, 'default', function () {
          return z
        })
      var n = t('97Jx'),
        r = t.n(n),
        l = t('m3Bd'),
        i = t.n(l),
        c = t('ERkP'),
        o = t('qTXf'),
        s = t('Fg/a'),
        d = t('v6aA'),
        b = (t('WNMA'), t('KqXw'), t('RqPI')),
        u = t('Z5jE'),
        m = t('rxPX'),
        g = function (e, a) {
          return Object(u.a)(a.match)
        },
        f = Object(m.a)().propsFromState(function () {
          return { broadcastId: g, loggedInUserId: b.p }
        }),
        v = t('jHSc'),
        h = t('aITJ'),
        I = t('tevE'),
        p = t('t62R'),
        E = t('yrzJ'),
        w = t('FIs5'),
        T = t('rHpw'),
        U = t('i4Oy'),
        k = t('MWbm'),
        A = t('3XMw'),
        x = t.n(A)
      function y(e) {
        var a = e.broadcastId,
          t = e.history,
          n = (e.match, h.b.isIPhone() || h.b.isAndroid()),
          r = n ? _.buttonAvailable : _.buttonUnavailable,
          l = n ? 'twitter://spaces/'.concat(a) : void 0,
          i = n
            ? void 0
            : function () {
                return t.goBack()
              },
          o = c.createElement(I.a, { align: 'left', size: 'title1' }, n ? _.headerAvailable : _.headerUnavailable),
          s = n
            ? c.createElement(I.a, { align: 'left', size: 'headline1' }, _.messageAvailable)
            : c.createElement(
                k.a,
                null,
                c.createElement(I.a, { align: 'left', size: 'headline1' }, _.messageUnavailable),
                c.createElement(k.a, { style: S.messageGap }),
                c.createElement(
                  I.a,
                  { align: 'left', size: 'headline1' },
                  c.createElement(
                    'span',
                    null,
                    c.createElement(
                      x.a.I18NFormatMessage,
                      { $i18n: 'c79f144b' },
                      c.createElement(
                        p.b,
                        { link: '/TwitterSpaces' },
                        c.createElement(E.a, { screenName: 'TwitterSpaces' }),
                      ),
                    ),
                  ),
                ),
              ),
          d = U.a.get('window').width
        return c.createElement(
          v.b,
          {
            backLocation: '/home',
            documentTitle: _.documentTitle,
            history: t,
            renderHeader: function () {
              return null
            },
          },
          c.createElement(
            k.a,
            { style: [S.container, { width: d }] },
            c.createElement(
              k.a,
              { style: S.content },
              c.createElement(w.a, { buttonLink: l, buttonText: r, header: o, message: s, onButtonPress: i }),
            ),
          ),
        )
      }
      var _ = {
          documentTitle: x.a.a2288d04,
          title: x.a.ab4fc8bb,
          headerAvailable: x.a.a324f032,
          headerUnavailable: x.a.eba5d942,
          messageUnavailable: x.a.a77e3b5c,
          messageAvailable: x.a.f66f311d,
          buttonAvailable: x.a.db2b473e,
          buttonUnavailable: x.a.e839db39,
        },
        S = T.a.create(function (e) {
          return {
            container: {
              flex: 1,
              backgroundColor: e.colors.cellBackground,
              alignSelf: 'center',
              maxWidth: '100%',
              alignItems: 'center',
              justfiyContent: 'center',
            },
            content: {
              width: '100%',
              maxWidth: e.breakpoints.medium,
              marginTop: e.spaces.space40,
              flexDirection: 'column',
            },
            messageGap: { height: e.spaces.space20 },
          }
        })
      function j(e) {
        var a = c.useContext(d.a).featureSwitches,
          t = e.broadcastId,
          n = e.loggedInUserId,
          l = i()(e, ['broadcastId', 'loggedInUserId'])
        if (a.isTrue('voice_rooms_consumption_enabled')) {
          var s = n,
            b = !n && a.isTrue('voice_rooms_logged_out_listening')
          if (s || b) return c.createElement(o.default.Content, l)
        }
        return c.createElement(y, r()({}, l, { broadcastId: t }))
      }
      var z = f(function (e) {
        e.broadcastId, e.loggedInUserId
        var a = i()(e, ['broadcastId', 'loggedInUserId'])
        return c.createElement(s.a, a, c.createElement(j, e))
      })
    },
  },
])
//# sourceMappingURL=WIPED
