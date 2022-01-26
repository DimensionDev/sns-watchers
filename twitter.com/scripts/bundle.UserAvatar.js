;(window.webpackJsonp = window.webpackJsonp || []).push([
  [101],
  {
    '3Zg8': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'UserAvatarScreen', function () {
          return b
        })
      var n = r('ERkP'),
        a = (r('WNMA'), r('KqXw'), r('rxPX')),
        c = r('0KEI'),
        o = r('kGix'),
        i = r('G6rE'),
        u = Object(i.g)([i.a]),
        s = function (e, t) {
          var r = d(e, t)
          return r ? u(e, r) : o.a.LOADING
        },
        d = function (e, t) {
          return t.match.params.screenName
        },
        l = function (e, t) {
          var r = d(e, t)
          return r ? i.e.selectByScreenName(e, r) : void 0
        },
        m = Object(a.a)()
          .propsFromState(function () {
            return { fetchStatus: s, screenName: d, user: l }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchStatus,
              r = e.screenName,
              n = e.user
            return {
              fetchStatus: t,
              screenName: r,
              user: n,
              mediaItem: n
                ? {
                    id_str: n.id_str,
                    expanded_url: n.profile_image_url_https,
                    media_url_https: n.profile_image_url_https,
                    ext_alt_text: n.profile_image_extensions_alt_text,
                    type: 'photo',
                    original_info: { width: 400, height: 400 },
                  }
                : void 0,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(c.createLocalApiErrorHandlerWithContextFactory)('USER_AVATAR'),
              fetchOneUserByScreenNameIfNeeded: i.e.fetchOneByScreenNameIfNeeded,
            }
          }),
        f = r('GOQE'),
        h = r('v//M'),
        p = r('2doW'),
        _ = r('UPvq'),
        E = r('wiP2'),
        S = r('5FtR'),
        N = r('RCZO'),
        b = function (e) {
          var t = e.createLocalApiErrorHandler,
            r = e.fetchOneUserByScreenNameIfNeeded,
            a = e.fetchStatus,
            c = e.history,
            o = e.mediaItem,
            i = e.screenName,
            u = e.user,
            s = Object(N.c)(u),
            d = Object(N.h)(),
            l = d.handleMediaDetailZoomed,
            m = d.handleMediaItemTapped,
            b = d.hideButtons,
            O = function () {
              c.goBack({ backLocation: '/'.concat(i) })
            }
          n.useEffect(
            function () {
              !(function (e, t, r) {
                e(r).catch(t(f.a))
              })(r, t, i)
            },
            [t, r, i],
          )
          return n.createElement(
            E.a.Configure,
            { headerless: !0 },
            n.createElement(
              _.a,
              { backgroundColor: s, hideButtons: b, mediaUrl: u && u.profile_image_url_https, onCloseButtonPress: O },
              n.createElement(h.a, {
                fetchStatus: a,
                render: function () {
                  var e = Object(N.c)(u)
                  return u && o
                    ? n.createElement(p.a, {
                        dataSaver: !1,
                        dominantColor: e.rgb,
                        isAvatar: !0,
                        mediaIndex: 0,
                        mediaItems: [o],
                        onDismiss: O,
                        onMediaDetailZoomed: l,
                        onTap: m,
                      })
                    : n.createElement(S.a, { to: '/'.concat(i) })
                },
                renderFailure: function () {
                  return n.createElement(S.a, { to: '/'.concat(i) })
                },
                retryable: !1,
              }),
            ),
          )
        },
        O = m(b)
      t.default = O
    },
    ac3p: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'UserHeaderScreen', function () {
          return b
        })
      var n = r('ERkP'),
        a = (r('WNMA'), r('KqXw'), r('rxPX')),
        c = r('0KEI'),
        o = r('G6rE'),
        i = Object(o.g)([o.a]),
        u = function (e, t) {
          return i(e, s(e, t))
        },
        s = function (e, t) {
          return t.match.params.screenName
        },
        d = function (e, t) {
          return o.e.selectByScreenName(e, s(e, t))
        },
        l = Object(a.a)()
          .propsFromState(function () {
            return { fetchStatus: u, screenName: s, user: d }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchStatus,
              r = e.screenName,
              n = e.user
            return {
              fetchStatus: t,
              screenName: r,
              user: n,
              mediaItem: n
                ? {
                    id_str: n.id_str,
                    expanded_url: n.profile_banner_url,
                    media_url_https: n.profile_banner_url,
                    ext_alt_text: n.profile_banner_extensions_alt_text,
                    type: 'photo',
                    original_info: { width: 1500, height: 500 },
                  }
                : void 0,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(c.createLocalApiErrorHandlerWithContextFactory)('USER_HEADER'),
              fetchOneUserByScreenNameIfNeeded: o.e.fetchOneByScreenNameIfNeeded,
            }
          }),
        m = r('GOQE'),
        f = r('v//M'),
        h = r('2doW'),
        p = r('UPvq'),
        _ = r('wiP2'),
        E = r('5FtR'),
        S = r('RCZO'),
        N = function (e, t, r) {
          e(r).catch(t(m.a))
        },
        b = function (e) {
          var t = e.createLocalApiErrorHandler,
            r = e.fetchOneUserByScreenNameIfNeeded,
            a = e.fetchStatus,
            c = e.history,
            o = e.mediaItem,
            i = e.screenName,
            u = e.user,
            s = Object(S.d)(u),
            d = Object(S.h)(),
            l = d.handleMediaDetailZoomed,
            m = d.handleMediaItemTapped,
            b = d.hideButtons,
            O = function () {
              c.goBack({ backLocation: '/'.concat(i) })
            }
          return (
            n.useEffect(
              function () {
                N(r, t, i)
              },
              [t, r, i],
            ),
            n.createElement(
              _.a.Configure,
              { headerless: !0 },
              n.createElement(
                p.a,
                { backgroundColor: s, hideButtons: b, mediaUrl: u && u.profile_banner_url, onCloseButtonPress: O },
                n.createElement(f.a, {
                  fetchStatus: a,
                  onRequestRetry: function () {
                    return N(r, t, i)
                  },
                  render: function () {
                    var e = Object(S.d)(u)
                    return u && o
                      ? n.createElement(h.a, {
                          dataSaver: !1,
                          dominantColor: e.rgb,
                          mediaIndex: 0,
                          mediaItems: [o],
                          onDismiss: O,
                          onMediaDetailZoomed: l,
                          onTap: m,
                        })
                      : n.createElement(E.a, { to: '/'.concat(i) })
                  },
                }),
              ),
            )
          )
        },
        O = l(b)
      t.default = O
    },
  },
])
//# sourceMappingURL=WIPED
