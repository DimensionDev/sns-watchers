;(window.webpackJsonp = window.webpackJsonp || []).push([
  [109],
  {
    '3Zg8': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'UserAvatarScreen', function () {
          return O
        })
      var a = r('ERkP'),
        n = r.n(a),
        c = (r('KqXw'), r('WNMA'), r('rxPX')),
        o = r('0KEI'),
        i = r('kGix'),
        u = r('G6rE'),
        s = Object(u.g)([u.a]),
        d = function (e, t) {
          var r = l(e, t)
          return r ? s(e, r) : i.a.LOADING
        },
        l = function (e, t) {
          return t.match.params.screenName
        },
        m = function (e, t) {
          var r = l(e, t)
          return r ? u.e.selectByScreenName(e, r) : void 0
        },
        f = Object(c.a)()
          .propsFromState(function () {
            return { fetchStatus: d, screenName: l, user: m }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchStatus,
              r = e.screenName,
              a = e.user
            return {
              fetchStatus: t,
              screenName: r,
              user: a,
              mediaItem: a
                ? {
                    id_str: a.id_str,
                    expanded_url: a.profile_image_url_https,
                    media_url_https: a.profile_image_url_https,
                    ext_alt_text: a.profile_image_extensions_alt_text,
                    type: 'photo',
                    original_info: { width: 400, height: 400 },
                  }
                : void 0,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(o.createLocalApiErrorHandlerWithContextFactory)('USER_AVATAR'),
              fetchOneUserByScreenNameIfNeeded: u.e.fetchOneByScreenNameIfNeeded,
            }
          }),
        h = r('GOQE'),
        p = r('v//M'),
        _ = r('2doW'),
        E = r('UPvq'),
        S = r('wiP2'),
        N = r('5FtR'),
        b = r('RCZO'),
        O = function (e) {
          var t = e.createLocalApiErrorHandler,
            r = e.fetchOneUserByScreenNameIfNeeded,
            a = e.fetchStatus,
            c = e.history,
            o = e.mediaItem,
            i = e.screenName,
            u = e.user,
            s = Object(b.c)(u),
            d = Object(b.h)(),
            l = d.handleMediaDetailZoomed,
            m = d.handleMediaItemTapped,
            f = d.hideButtons,
            O = function () {
              c.goBack({ backLocation: '/'.concat(i) })
            }
          n.a.useEffect(
            function () {
              !(function (e, t, r) {
                e(r).catch(t(h.a))
              })(r, t, i)
            },
            [t, r, i],
          )
          return n.a.createElement(
            S.a.Configure,
            { headerless: !0 },
            n.a.createElement(
              E.a,
              { backgroundColor: s, hideButtons: f, mediaUrl: u && u.profile_image_url_https, onCloseButtonPress: O },
              n.a.createElement(p.a, {
                fetchStatus: a,
                render: function () {
                  var e = Object(b.c)(u)
                  return u && o
                    ? n.a.createElement(_.a, {
                        dataSaver: !1,
                        dominantColor: e.rgb,
                        isAvatar: !0,
                        mediaIndex: 0,
                        mediaItems: [o],
                        onDismiss: O,
                        onMediaDetailZoomed: l,
                        onTap: m,
                      })
                    : n.a.createElement(N.a, { to: '/'.concat(i) })
                },
                renderFailure: function () {
                  return n.a.createElement(N.a, { to: '/'.concat(i) })
                },
                retryable: !1,
              }),
            ),
          )
        },
        v = f(O)
      t.default = v
    },
    ac3p: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'UserHeaderScreen', function () {
          return O
        })
      var a = r('ERkP'),
        n = r.n(a),
        c = (r('KqXw'), r('WNMA'), r('rxPX')),
        o = r('0KEI'),
        i = r('G6rE'),
        u = Object(i.g)([i.a]),
        s = function (e, t) {
          return u(e, d(e, t))
        },
        d = function (e, t) {
          return t.match.params.screenName
        },
        l = function (e, t) {
          return i.e.selectByScreenName(e, d(e, t))
        },
        m = Object(c.a)()
          .propsFromState(function () {
            return { fetchStatus: s, screenName: d, user: l }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchStatus,
              r = e.screenName,
              a = e.user
            return {
              fetchStatus: t,
              screenName: r,
              user: a,
              mediaItem: a
                ? {
                    id_str: a.id_str,
                    expanded_url: a.profile_banner_url,
                    media_url_https: a.profile_banner_url,
                    ext_alt_text: a.profile_banner_extensions_alt_text,
                    type: 'photo',
                    original_info: { width: 1500, height: 500 },
                  }
                : void 0,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(o.createLocalApiErrorHandlerWithContextFactory)('USER_HEADER'),
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
        b = function (e, t, r) {
          e(r).catch(t(f.a))
        },
        O = function (e) {
          var t = e.createLocalApiErrorHandler,
            r = e.fetchOneUserByScreenNameIfNeeded,
            a = e.fetchStatus,
            c = e.history,
            o = e.mediaItem,
            i = e.screenName,
            u = e.user,
            s = Object(N.d)(u),
            d = Object(N.h)(),
            l = d.handleMediaDetailZoomed,
            m = d.handleMediaItemTapped,
            f = d.hideButtons,
            O = function () {
              c.goBack({ backLocation: '/'.concat(i) })
            }
          return (
            n.a.useEffect(
              function () {
                b(r, t, i)
              },
              [t, r, i],
            ),
            n.a.createElement(
              E.a.Configure,
              { headerless: !0 },
              n.a.createElement(
                _.a,
                { backgroundColor: s, hideButtons: f, mediaUrl: u && u.profile_banner_url, onCloseButtonPress: O },
                n.a.createElement(h.a, {
                  fetchStatus: a,
                  onRequestRetry: function () {
                    return b(r, t, i)
                  },
                  render: function () {
                    var e = Object(N.d)(u)
                    return u && o
                      ? n.a.createElement(p.a, {
                          dataSaver: !1,
                          dominantColor: e.rgb,
                          mediaIndex: 0,
                          mediaItems: [o],
                          onDismiss: O,
                          onMediaDetailZoomed: l,
                          onTap: m,
                        })
                      : n.a.createElement(S.a, { to: '/'.concat(i) })
                  },
                }),
              ),
            )
          )
        },
        v = m(O)
      t.default = v
    },
  },
])
//# sourceMappingURL=WIPED
