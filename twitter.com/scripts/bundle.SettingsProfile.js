;(window.webpackJsonp = window.webpackJsonp || []).push([
  [95, 180],
  {
    '+0pD': function (e, t) {
      var a =
        '[object Arguments]' ==
        (function () {
          return Object.prototype.toString.call(arguments)
        })()
      function n(e) {
        return '[object Arguments]' == Object.prototype.toString.call(e)
      }
      function r(e) {
        return (
          (e &&
            'object' == typeof e &&
            'number' == typeof e.length &&
            Object.prototype.hasOwnProperty.call(e, 'callee') &&
            !Object.prototype.propertyIsEnumerable.call(e, 'callee')) ||
          !1
        )
      }
      ;((t = e.exports = a ? n : r).supported = n), (t.unsupported = r)
    },
    '06eB': function (e, t, a) {
      var n = Array.prototype.slice,
        r = a('kgfz'),
        i = a('+0pD'),
        o = (e.exports = function (e, t, a) {
          return (
            a || (a = {}),
            e === t ||
              (e instanceof Date && t instanceof Date
                ? e.getTime() === t.getTime()
                : !e || !t || ('object' != typeof e && 'object' != typeof t)
                ? a.strict
                  ? e === t
                  : e == t
                : (function (e, t, a) {
                    var d, c
                    if (s(e) || s(t)) return !1
                    if (e.prototype !== t.prototype) return !1
                    if (i(e)) return !!i(t) && ((e = n.call(e)), (t = n.call(t)), o(e, t, a))
                    if (l(e)) {
                      if (!l(t)) return !1
                      if (e.length !== t.length) return !1
                      for (d = 0; d < e.length; d++) if (e[d] !== t[d]) return !1
                      return !0
                    }
                    try {
                      var u = r(e),
                        h = r(t)
                    } catch (p) {
                      return !1
                    }
                    if (u.length != h.length) return !1
                    for (u.sort(), h.sort(), d = u.length - 1; d >= 0; d--) if (u[d] != h[d]) return !1
                    for (d = u.length - 1; d >= 0; d--) if (((c = u[d]), !o(e[c], t[c], a))) return !1
                    return typeof e == typeof t
                  })(e, t, a))
          )
        })
      function s(e) {
        return null == e
      }
      function l(e) {
        return (
          !(!e || 'object' != typeof e || 'number' != typeof e.length) &&
          'function' == typeof e.copy &&
          'function' == typeof e.slice &&
          !(e.length > 0 && 'number' != typeof e[0])
        )
      }
    },
    '2Daw': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return w
      })
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        s = a('5Yy7'),
        l = a.n(s),
        d = a('2VqO'),
        c = a.n(d),
        u = a('KEM+'),
        h = a.n(u),
        p = (a('uFXj'), a('ERkP')),
        f = a.n(p),
        m = a('LCtV'),
        _ = a('3XMw'),
        b = a.n(_),
        v = a('VPdC'),
        g = a('pKoL'),
        y = a('MWbm'),
        C = a('rFBM'),
        E = a('/yvb'),
        S = a('9Xij'),
        M = a('rHpw'),
        P = a('hOZg'),
        B = a('Mbn/'),
        R = a('T8pk'),
        A = b.a.b87ca51a,
        I = b.a.eebff22c,
        w = (function (e) {
          l()(a, e)
          var t = c()(a)
          function a() {
            return r()(this, a), t.apply(this, arguments)
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.borderRadius,
                    a = e.maskStyle,
                    n = e.mediaItem,
                    r = e.onAddMediaFiles,
                    i = e.onCrop,
                    o = e.onRemove,
                    s = e.rootStyle,
                    l = e.withDragDrop,
                    d = n && !n.uploader,
                    c = f.a.createElement(
                      f.a.Fragment,
                      null,
                      this._renderPreview(),
                      d
                        ? null
                        : f.a.createElement(
                            f.a.Fragment,
                            null,
                            f.a.createElement(y.a, { style: [T.mask, a, D[t]] }),
                            f.a.createElement(
                              y.a,
                              { style: T.mediaPicker },
                              this._renderMediaEdit(),
                              i ? this._renderMediaCrop() : null,
                              o ? this._renderMediaRemove() : null,
                            ),
                          ),
                    )
                  return f.a.createElement(
                    y.a,
                    { style: [T.container, s, D[t]] },
                    l && r ? f.a.createElement(C.a, { onFilesAdded: r, style: [T.dragDropContainer, D[t]] }, c) : c,
                  )
                },
              },
              {
                key: '_renderMediaRemove',
                value: function () {
                  var e = this.props.onRemove
                  return f.a.createElement(E.a, {
                    accessibilityLabel: A,
                    hoverLabel: { label: A },
                    icon: f.a.createElement(P.a, null),
                    onPress: e,
                    size: 'large',
                    style: T.rightButton,
                    type: 'onMediaDominantColorFilled',
                  })
                },
              },
              {
                key: '_renderMediaCrop',
                value: function () {
                  var e = this.props,
                    t = e.onCrop,
                    a = e.onRemove
                  return f.a.createElement(E.a, {
                    accessibilityLabel: I,
                    icon: f.a.createElement(B.a, null),
                    onPress: t,
                    size: 'large',
                    style: a ? T.middleButton : T.rightButton,
                    type: 'onMediaDominantColorFilled',
                  })
                },
              },
              {
                key: '_renderMediaEdit',
                value: function () {
                  var e = this.props,
                    t = e.acceptGifs,
                    a = e.acceptVideo,
                    n = e.accessibilityLabel,
                    r = e.onAddMediaFiles,
                    i = e.onEdit,
                    o = f.a.createElement(R.a, null)
                  return r
                    ? f.a.createElement(v.a, {
                        acceptGifs: t,
                        acceptVideo: a,
                        accessibilityLabel: n,
                        icon: o,
                        onChange: r,
                        size: 'large',
                        type: 'onMediaDominantColorFilled',
                      })
                    : f.a.createElement(E.a, {
                        accessibilityLabel: n,
                        icon: o,
                        onPress: i,
                        size: 'large',
                        style: T.edit,
                        type: 'onMediaDominantColorFilled',
                      })
                },
              },
              {
                key: '_renderPreview',
                value: function () {
                  var e = this.props,
                    t = e.aspectRatio,
                    a = e.borderRadius,
                    n = e.currentContent,
                    r = e.mediaItem
                  return r
                    ? f.a.createElement(
                        S.a,
                        { ratio: t },
                        f.a.createElement(g.a, {
                          borderRadius: a,
                          enableGif: !1,
                          mediaItem: r,
                          style: T.mediaPreview,
                          withCloseButton: !1,
                        }),
                      )
                    : n
                },
              },
            ]),
            a
          )
        })(f.a.Component)
      h()(w, 'defaultProps', { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: m.a.NONE })
      var D = M.a.create(function (e) {
          return {
            infinite: { borderRadius: e.borderRadii.infinite },
            medium: { borderRadius: e.borderRadii.small },
            none: { borderRadius: e.borderRadii.none },
          }
        }),
        T = M.a.create(function (e) {
          return {
            mediaPreview: { height: '100%' },
            mediaPicker: {
              alignItems: 'center',
              flexDirection: 'row',
              height: '100%',
              justifyContent: 'center',
              opacity: 0.75,
              position: 'absolute',
              top: 0,
              width: '100%',
            },
            rightButton: { marginLeft: e.spaces.space32 },
            middleButton: { marginLeft: e.spaces.space32, marginRight: '-'.concat(e.spaces.space12) },
            mask: {
              backgroundColor: e.colors.translucentBlack30,
              height: '100%',
              position: 'absolute',
              top: 0,
              width: '100%',
            },
            container: { justifyContent: 'center', overflow: 'hidden' },
            dragDropContainer: {
              borderWidth: e.borderWidths.medium,
              borderColor: e.colors.transparent,
              borderStyle: 'solid',
            },
            edit: { margin: '-'.concat(e.spaces.space12) },
          }
        })
    },
    '51jI': function (e, t, a) {
      'use strict'
      t.a = {
        birthdate: 'ProfileBirthdate',
        cancel: 'ProfileBirthdate_Cancel_Button',
        dayMonthVisibility: 'ProfileBirthdate_Day_Month_Visibility',
        daySelector: 'ProfileBirthdate_Day_Selector',
        edit: 'ProfileBirthdate_Edit_Button',
        editProfessionalProfile: 'ProfessionalButton_Edit_Professional_Profile',
        missingBirthdate: 'ProfileBirthdate_Missing_Birthdate',
        monthSelector: 'ProfileBirthdate_Month_Selector',
        remove: 'ProfileBirthdate_Remove_Button',
        save: 'Profile_Save_Button',
        bio: 'Profile_Bio',
        switchToProfessional: 'ProfessionalButton_Switch_To_Professional',
        yearSelector: 'ProfileBirthdate_Year_Selector',
        yearVisibility: 'ProfileBirthdate_Year_Visibility',
      }
    },
    '53j7': function (e, t, a) {
      'use strict'
      a.d(t, 'h', function () {
        return E
      }),
        a.d(t, 'i', function () {
          return S
        }),
        a.d(t, 'j', function () {
          return M
        }),
        a.d(t, 'a', function () {
          return B
        }),
        a.d(t, 'd', function () {
          return A
        }),
        a.d(t, 'b', function () {
          return w
        }),
        a.d(t, 'e', function () {
          return T
        }),
        a.d(t, 'c', function () {
          return O
        }),
        a.d(t, 'g', function () {
          return U
        }),
        a.d(t, 'f', function () {
          return F
        }),
        a.d(t, 'k', function () {
          return N
        }),
        a.d(t, 'l', function () {
          return x
        }),
        a.d(t, 'm', function () {
          return V
        })
      var n = a('ddV6'),
        r = a.n(n),
        i = a('KEM+'),
        o = a.n(i),
        s = a('yiKp'),
        l = a.n(s),
        d = (a('7x/C'), a('JtPf'), a('oEOe')),
        c = a('AspN'),
        u = a('/kEJ'),
        h = a('XMGw'),
        p = a('Ssj5'),
        f = ''.concat(h.a, '/profile'),
        m = 'rweb/'.concat(f),
        _ = d.a(m, 'REMOVE_PROFILE_BANNER'),
        b = d.a(m, 'UPDATE_PROFILE'),
        v = d.a(m, 'UPDATE_PROFILE_AVATAR'),
        g = d.a(m, 'UPDATE_PROFILE_BANNER'),
        y = d.a(m, 'UPLOAD_MEDIA'),
        C = { avatarMediaId: null, bannerMediaId: null, isUploading: !1, profileSettings: null }
      var E = function (e) {
          return e[f].avatarMediaId
        },
        S = function (e) {
          return e[f].bannerMediaId
        },
        M = function (e) {
          return e[f].profileSettings
        },
        P = 'rweb/settings/profile/ADD_AVATAR_MEDIA',
        B = function (e) {
          return { meta: { mediaId: e }, type: P }
        },
        R = 'rweb/settings/profile/REMOVE_AVATAR_MEDIA',
        A = function (e) {
          return { meta: { mediaId: e }, type: R }
        },
        I = 'rweb/settings/profile/ADD_BANNER_MEDIA',
        w = function (e) {
          return { meta: { mediaId: e }, type: I }
        },
        D = 'rweb/settings/profile/REMOVE_BANNER_MEDIA',
        T = function (e) {
          return { meta: { mediaId: e }, type: D }
        },
        L = 'rweb/settings/profile/PERSIST_PROFILE_SETTINGS',
        O = function (e) {
          return { meta: { profileSettings: e }, type: L }
        },
        k = 'rweb/settings/profile/RESET_PERSISTED_PROFILE_SETTINGS',
        U = function () {
          return { type: k }
        },
        F = function (e) {
          return function (t, a, n) {
            var r = n.api
            return d.b(t, { params: e, request: r.Settings.removeProfileBanner })(
              { actionTypes: _, context: 'ACTION_REMOVE_USER_BANNER' },
              function (e) {
                if (e)
                  return [Object(u.c)({ users: o()({}, e.id_str, l()(l()({}, e), {}, { profile_banner_url: null })) })]
              },
            )
          }
        },
        N = function (e) {
          return function (t, a, n) {
            var r = n.api
            return d.b(t, { params: e, request: r.Settings.updateProfile })(
              { actionTypes: b, context: 'ACTION_UPDATE_PROFILE_SETTINGS' },
              function (e) {
                if (e && e.entities) return [Object(u.c)(e.entities)]
              },
            )
          }
        },
        j = function (e, t, a) {
          return function (n) {
            return function (i, s, l) {
              var h = l.api
              i({ type: y.REQUEST })
              var p = c.p(n)
              return i(p).then(
                function (n) {
                  var s = r()(n, 1)[0]
                  i([{ type: y.SUCCESS }, { type: e.REQUEST }])
                  return d.b(i, { params: { media_id: s.uploadId }, request: a(h) })(
                    { actionTypes: b, context: t },
                    function (e) {
                      if (e) return [Object(u.c)({ users: o()({}, e.id_str, e) })]
                    },
                  )
                },
                function (e) {
                  return i({ type: y.FAILURE }), Promise.reject(e)
                },
              )
            }
          }
        },
        x = j(v, 'ACTION_UPDATE_USER_AVATAR', function (e) {
          return e.Settings.updateProfileAvatar
        }),
        V = j(g, 'ACTION_UPDATE_USER_BANNER', function (e) {
          return e.Settings.updateProfileBanner
        })
      p.a.register(
        o()({}, f, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          switch (t.type) {
            case P:
              return l()(l()({}, e), {}, { avatarMediaId: t.meta.mediaId })
            case R:
              return l()(l()({}, e), {}, { avatarMediaId: null })
            case I:
              return l()(l()({}, e), {}, { bannerMediaId: t.meta.mediaId })
            case D:
              return l()(l()({}, e), {}, { bannerMediaId: null })
            case L:
              return l()(l()({}, e), {}, { profileSettings: t.meta.profileSettings })
            case k:
              return l()(l()({}, e), {}, { profileSettings: null })
            case y.REQUEST:
              return l()(l()({}, e), {}, { isUploading: !0 })
            case y.FAILURE:
            case y.SUCCESS:
              return l()(l()({}, e), {}, { isUploading: !1 })
            default:
              return e
          }
        }),
      )
    },
    'Mbn/': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('Lsrn'),
        l = a('k/Ka'),
        d = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M3.5 5.25H2c-.414 0-.75.336-.75.75s.336.75.75.75h1.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm18.5 12H7.5c-.414 0-.75-.337-.75-.75V2c0-.414-.336-.75-.75-.75s-.75.336-.75.75v14.5c0 1.24 1.01 2.25 2.25 2.25H22c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-4 2.5c-.414 0-.75.336-.75.75V22c0 .414.336.75.75.75s.75-.336.75-.75v-1.5c0-.414-.336-.75-.75-.75z',
              }),
              o.a.createElement('path', {
                d: 'M8.5 6.75h8c.414 0 .75.337.75.75v8c0 .414.336.75.75.75s.75-.336.75-.75v-8c0-1.24-1.01-2.25-2.25-2.25h-8c-.414 0-.75.336-.75.75s.336.75.75.75z',
              }),
            ),
          )
        }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    P68U: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'MediaPickerWithPreview', function () {
          return E
        })
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        s = a('1Pcy'),
        l = a.n(s),
        d = a('5Yy7'),
        c = a.n(d),
        u = a('2VqO'),
        h = a.n(u),
        p = a('KEM+'),
        f = a.n(p),
        m = (a('2G9S'), a('hCOa'), a('87if'), a('hBpG'), a('7x/C'), a('jQ3i'), a('x4t0'), a('z84I'), a('ERkP')),
        _ = a.n(m),
        b = a('AspN'),
        v = a('rxPX'),
        g = Object(v.a)().propsFromActions(function () {
          return { addMedia: b.b, processMultipleMedia: b.g }
        }),
        y = a('2Daw'),
        C = a('VPdC'),
        E = (function (e) {
          c()(a, e)
          var t = h()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(l()(e), '_handleAddMediaFiles', function (t) {
                var a = e.props,
                  n = a.addMedia,
                  r = a.location,
                  i = a.onChange,
                  o = a.onFailure,
                  s = a.processMultipleMedia,
                  l = e._getAcceptedFileInputs(),
                  d = Array.from(t).find(function (e) {
                    return l.includes(e.type)
                  })
                d &&
                  n([d], { location: r }).then(function (e) {
                    i &&
                      i(
                        e.map(function (e) {
                          return e.id
                        }),
                      ),
                      s(e, { onFailure: o })
                  })
              }),
              f()(l()(e), '_getAcceptedFileInputs', function () {
                var t = e.props,
                  a = t.acceptGifs,
                  n = t.acceptVideo
                return Object(C.b)({ acceptGifs: a, acceptVideo: n })
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.acceptGifs,
                    a = e.acceptVideo,
                    n = e.accessibilityLabel,
                    r = e.aspectRatio,
                    i = e.borderRadius,
                    o = e.currentContent,
                    s = e.maskStyle,
                    l = e.mediaItem,
                    d = e.onCrop,
                    c = e.onRemove,
                    u = e.rootStyle
                  return _.a.createElement(y.a, {
                    acceptGifs: t,
                    acceptVideo: a,
                    accessibilityLabel: n,
                    aspectRatio: r,
                    borderRadius: i,
                    currentContent: o,
                    maskStyle: s,
                    mediaItem: l,
                    onAddMediaFiles: this._handleAddMediaFiles,
                    onCrop: d,
                    onRemove: c,
                    rootStyle: u,
                    withDragDrop: !0,
                  })
                },
              },
            ]),
            a
          )
        })(_.a.Component)
      f()(E, 'defaultProps', { acceptGifs: !1, acceptVideo: !1 })
      var S = g(E)
      t.default = S
    },
    PVvL: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      })
      a('yH/f')
      var n = Object.freeze({
        SELF: 'self',
        MUTUAL_FOLLOW: 'mutualfollow',
        FOLLOWING: 'following',
        FOLLOWERS: 'followers',
        PUBLIC: 'public',
      })
    },
    T8pk: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('Lsrn'),
        l = a('k/Ka'),
        d = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M19.708 22H4.292C3.028 22 2 20.972 2 19.708V7.375C2 6.11 3.028 5.083 4.292 5.083h2.146C7.633 3.17 9.722 2 12 2c2.277 0 4.367 1.17 5.562 3.083h2.146C20.972 5.083 22 6.11 22 7.375v12.333C22 20.972 20.972 22 19.708 22zM4.292 6.583c-.437 0-.792.355-.792.792v12.333c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V7.375c0-.437-.355-.792-.792-.792h-2.45c-.317.05-.632-.095-.782-.382-.88-1.665-2.594-2.7-4.476-2.7-1.883 0-3.598 1.035-4.476 2.702-.16.302-.502.46-.833.38H4.293z',
              }),
              o.a.createElement('path', {
                d: 'M12 8.167c-2.68 0-4.86 2.18-4.86 4.86s2.18 4.86 4.86 4.86 4.86-2.18 4.86-4.86-2.18-4.86-4.86-4.86zm2 5.583h-1.25V15c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.25H10c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.25V11c0-.414.336-.75.75-.75s.75.336.75.75v1.25H14c.414 0 .75.336.75.75s-.336.75-.75.75z',
              }),
            ),
          )
        }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    fS8x: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        s = a('Y9Ll'),
        l = a.n(s),
        d = a('1Pcy'),
        c = a.n(d),
        u = a('5Yy7'),
        h = a.n(u),
        p = a('2VqO'),
        f = a.n(p),
        m = a('KEM+'),
        _ = a.n(m),
        b = a('/NU0'),
        v = a('rxPX'),
        g = a('AspN'),
        y = function (e, t) {
          return t.media ? t.media : Object(b.a)(t.mediaId) ? Object(g.k)(e, t.mediaId)[0] : void 0
        },
        C = function (e, t) {
          return void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null
        },
        E = Object(v.a)()
          .propsFromState(function () {
            return { media: y, mediaId: C }
          })
          .propsFromActions(function () {
            return { processMedia: g.f, updateMediaUpload: g.o }
          })
          .withAnalytics({ page: 'media', section: 'edit' }),
        S = a('jHSc'),
        M = a('3XMw'),
        P = a.n(M),
        B = a('EeFI'),
        R = 'applyButton',
        A = a('/yvb'),
        I = a('rHpw'),
        w = P.a.gd80afba,
        D = P.a.a753a87f,
        T = (function (e) {
          h()(a, e)
          var t = f()(a)
          function a(e) {
            var n
            return (
              o()(this, a),
              (n = t.call(this, e)),
              _()(c()(n), '_getMedia', function () {
                var e = n.props.media
                return e && e.mediaFile && e.mediaFile.isImage ? e : null
              }),
              _()(c()(n), '_renderAppBarRightControl', function () {
                var e = n.state.isProcessing
                return r.a.createElement(
                  A.a,
                  { disabled: e, onPress: n._handleApplyButtonClick, size: 'small', testID: R, type: 'primaryFilled' },
                  D,
                )
              }),
              _()(c()(n), '_handleBackClick', function () {
                var e = n.props,
                  t = e.analytics,
                  a = e.onCancel
                t.scribe({ action: 'cancel' }), a && a()
              }),
              _()(c()(n), '_handleApplyButtonClick', function () {
                var e = n.props.onCropDone,
                  t = n._cropper.current
                if (t) {
                  var a = n.props,
                    r = a.analytics,
                    i = a.media,
                    o = a.mediaId,
                    s = a.onDone,
                    l = a.processMedia,
                    d = a.updateMediaUpload
                  n.setState({ isProcessing: !0 })
                  var c = t.getCropData(),
                    u = (i || {}).originalMediaFile,
                    h = !u || (0 === c.top && 0 === c.left && c.width === u.width && c.height === u.height)
                  Object(b.a)(o) &&
                    (e
                      ? (e(c), s())
                      : (d({ id: o, cropData: h ? void 0 : c }),
                        l(o).then(function () {
                          n.setState({ isProcessing: !1 }), r.scribe({ action: 'done' }), s()
                        })))
                }
              }),
              (n.state = { isProcessing: !1 }),
              (n._cropper = r.a.createRef()),
              e.media || e.onCancel(),
              n
            )
          }
          return (
            l()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.defaultAspectRatio,
                    a = e.history,
                    n = e.title,
                    i = e.withAspectRatioOptions,
                    o = e.withZoomControl,
                    s = this._getMedia()
                  return r.a.createElement(
                    S.b,
                    {
                      backButtonType: 'back',
                      containerStyle: L.root,
                      documentTitle: n || w,
                      history: a,
                      onBackClick: this._handleBackClick,
                      rightControl: this._renderAppBarRightControl(),
                      title: n || w,
                    },
                    r.a.createElement(B.a, {
                      defaultAspectRatio: t,
                      media: s,
                      ref: this._cropper,
                      withAspectRatioOptions: i,
                      withZoomControl: o,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(r.a.Component),
        L = I.a.create(function (e) {
          return { root: { flexShrink: 1, height: 650 } }
        }),
        O = E(T),
        k = a('X8FW'),
        U = I.a.create(function (e) {
          return { modal: { width: 600, maxWidth: '90vw' } }
        })
      t.a = function (e) {
        return r.a.createElement(
          k.b,
          { clickMaskToClose: !1, modalSize: 'fitChildren', style: U.modal },
          r.a.createElement(O, e),
        )
      }
    },
    kgfz: function (e, t) {
      function a(e) {
        var t = []
        for (var a in e) t.push(a)
        return t
      }
      ;(e.exports = 'function' == typeof Object.keys ? Object.keys : a).shim = a
    },
    zITG: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'DEFAULT_BIRTHDAY', function () {
          return je
        }),
        a.d(t, 'stylizedCharHelperText', function () {
          return Ve
        }),
        a.d(t, 'ProfileScreen', function () {
          return ze
        })
      var n,
        r = a('ddV6'),
        i = a.n(r),
        o = a('yiKp'),
        s = a.n(o),
        l = a('VrFO'),
        d = a.n(l),
        c = a('Y9Ll'),
        u = a.n(c),
        h = a('1Pcy'),
        p = a.n(h),
        f = a('5Yy7'),
        m = a.n(f),
        _ = a('2VqO'),
        b = a.n(_),
        v = a('KEM+'),
        g = a.n(v),
        y =
          (a('+KXO'),
          a('jwue'),
          a('7x/C'),
          a('DfhM'),
          a('+oxZ'),
          a('1t7P'),
          a('jQ/y'),
          a('ho0z'),
          a('KqXw'),
          a('MvUL'),
          a('mC9n')),
        C = a('ERkP'),
        E = a.n(C),
        S = a('LCtV'),
        M = a('AspN'),
        P = a('53j7'),
        B = a('1YZw'),
        R = a('/NU0'),
        A = a('G6rE'),
        I = a('rxPX'),
        w = a('0KEI'),
        D = function (e, t) {
          var a,
            n = P.h(e)
          if (Object(R.a)(n)) return null === (a = M.k(e, n)) || void 0 === a ? void 0 : a[0]
        },
        T = function (e, t) {
          var a,
            n = P.i(e)
          if (Object(R.a)(n)) return null === (a = M.k(e, n)) || void 0 === a ? void 0 : a[0]
        },
        L = Object(I.a)()
          .propsFromState(function () {
            return {
              loggedInUser: A.e.selectLoggedInUser,
              avatarMedia: D,
              bannerMedia: T,
              persistedProfileSettings: P.j,
            }
          })
          .propsFromActions(function () {
            return {
              addAvatarMedia: P.a,
              addBannerMedia: P.b,
              addToast: B.b,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_PROFILE_SCREEN',
              ),
              persistProfileSettings: P.c,
              removeAvatarMedia: P.d,
              removeBannerMedia: P.e,
              removeMediaUpload: M.i,
              resetPersistedProfileSettings: P.g,
              removeProfileBanner: P.f,
              updateProfile: P.k,
              updateProfileAvatar: P.l,
              updateProfileBanner: P.m,
            }
          })
          .withAnalytics({ page: 'settings', section: 'profile' }),
        O =
          (a('yH/f'),
          a('lTEL'),
          a('kYxP'),
          a('KOtZ'),
          a('z84I'),
          a('2G9S'),
          a('iKE+'),
          a('1LXv'),
          a('e/gN'),
          a('DZ+c'),
          a('3uku'),
          a('tn7R')),
        k = Object.freeze({
          SUPERSCRIPT_AND_SUBSCRIPT: 'superscript_and_subscript',
          CURRENCY: 'currency',
          LETTER_LIKE: 'letter_like',
          NUMBER_FORMS: 'number_forms',
          ARROWS: 'arrows',
          MATHEMATICAL: 'mathematical',
          GENERAL_PUNCTUATION: 'general_punctuation',
          ENCLOSED_ALPHANUMERICS: 'enclosed_alphanumerics',
          BOX: 'box',
          GEOMETRIC: 'geometric',
          SPACING_MODIFIER: 'spacing_modifier',
          PUNCTUATION: 'punctuation',
          MISC: 'miscellaneous',
        }),
        U = Object(O.a)(k),
        F =
          ((n = {}),
          g()(n, k.SUPERSCRIPT_AND_SUBSCRIPT, { base: '[⁰-ⁱ]|[⁴-₎]|[ₐ-ₜ]', specialChars: {} }),
          g()(n, k.CURRENCY, { base: '[₠-₿]', specialChars: { $: '[$]' } }),
          g()(n, k.LETTER_LIKE, { base: '[℀-⅏]', specialChars: {} }),
          g()(n, k.NUMBER_FORMS, { base: '[⅐-↋]', specialChars: {} }),
          g()(n, k.ARROWS, { base: '[←-⇿]', specialChars: {} }),
          g()(n, k.MATHEMATICAL, { base: '[∀-⋿]|[⊓-⊕]|[⨀-⫿]|[⟀-⟯]|[⦀-⧿]', specialChars: {} }),
          g()(n, k.GENERAL_PUNCTUATION, { base: '[ -⁯]|[⸀-⹿]', specialChars: {} }),
          g()(n, k.ENCLOSED_ALPHANUMERICS, { base: '[①-⓿]', specialChars: {} }),
          g()(n, k.BOX, { base: '[─-╿]|[▀-▟]', specialChars: {} }),
          g()(n, k.GEOMETRIC, { base: '[■-▩]|[▬-▵]|[▷-▿]|[◁-◺]|[◿]', specialChars: {} }),
          g()(n, k.SPACING_MODIFIER, { base: '[ʰ-˿]', specialChars: {} }),
          g()(n, k.PUNCTUATION, { base: '[ -⁯]', specialChars: {} }),
          g()(n, k.MISC, {
            base: '[⌀-⌙]|[⌜-⌧]|[〈-⏎]|[⏐-⏨]|[⏴-⏷]|[⏻-⏿]|[★-☐]|[☒-☓]|[☖-☗]|[☙-☜]|[☞-☟]|[☡]|[☤-☥]|[☧-☩]|[☫-☭]|[☰-☷]|[☻-☿]|[♁]|[♃-♇]|[♔-♞]|[♡-♢]|[♤]|[♧]|[♩-♺]|[♼-♽]|[⚀-⚑]|[⚘]|[⚚]|[⚝-⚟]|[⚢-⚦]|[⚨-⚩]|[⚬-⚯]|[⚲-⚼]|[⚿-⛃]|[⛆-⛇]|[⛉-⛍]|[⛐]|[⛒]|[⛕-⛨]|[⛫-⛯]|[⛶]|[⛻-⛼]|[⛾-⛿]',
            specialChars: {},
          }),
          n),
        N = function (e) {
          var t = e.text,
            a = e.keys,
            n = void 0 === a ? U : a,
            r = e.includeSpecialChars,
            i = void 0 === r || r,
            o = n
              .map(function (e) {
                return (function (e) {
                  var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    a = F[e],
                    n = ''.concat(a.base)
                  if (t) {
                    var r = a.specialChars
                    for (var i in r) n += '|'.concat(r[i])
                  }
                  return n
                })(e, i)
              })
              .reduce(function (e, t) {
                return ''.concat(e, '|').concat(t)
              })
          return new RegExp(o, 'g').test(t)
        },
        j = a('06eB'),
        x = a.n(j),
        V = a('jHSc'),
        z = a('fS8x'),
        H = a('mN6z'),
        G = a('P68U'),
        W = a('eyty'),
        K = (a('JtPf'), a('87if'), a('zb92')),
        X = a('RuTB'),
        Y = Object(K.a)({
          loader: function () {
            return Promise.all([a.e(0), a.e(210)]).then(a.bind(null, 'it2P'))
          },
          renderPlaceholder: function (e, t) {
            return E.a.createElement(X.a, { hasError: e, onRetry: t })
          },
        }),
        q = a('3XMw'),
        Q = a.n(q),
        Z = a('51jI'),
        J = a('WWyu'),
        $ = a('MWbm'),
        ee = a('t62R'),
        te = a('21zW'),
        ae = a('eb3s'),
        ne = a('rHpw'),
        re = Q.a.c119dee8,
        ie = Q.a.abd845fd,
        oe = Q.a.cfd2f35d,
        se = Q.a.bbf0afc7,
        le = { headline: Q.a.f98d367e, text: Q.a.b982a8b4, confirmButtonLabel: Q.a.abd845fd },
        de = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e) {
            var n
            return (
              d()(this, a),
              (n = t.call(this, e)),
              g()(p()(n), '_handleModalCancel', function () {
                n.setState({ showConfirmationModal: !1 })
              }),
              g()(p()(n), '_handleModalConfirmed', function () {
                n.setState({ isEditing: !0, showConfirmationModal: !1 })
              }),
              g()(p()(n), '_handleEditPress', function () {
                n.setState({ showConfirmationModal: !0 })
              }),
              g()(p()(n), '_handleRemoveBirthdate', function () {
                var e = n.props.onRemoveBirthdate
                n.setState({ isEditing: !1 }), e()
              }),
              g()(p()(n), '_handleCancelEditPress', function () {
                n.props.onCancelEditBirthdate(), n.setState({ isEditing: !1 })
              }),
              (n.state = { isEditing: !1, showConfirmationModal: !1 }),
              n
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.state.isEditing,
                    t = this.props,
                    a = t.birthdate,
                    n = t.errors,
                    r = t.onChange,
                    i = t.showBirthdateRemoveButton,
                    o = a.month && a.day && a.year
                  return E.a.createElement(
                    $.a,
                    { style: ce.root },
                    E.a.createElement(
                      $.a,
                      { style: ce.container },
                      e
                        ? E.a.createElement(ee.b, { weight: 'bold' }, re)
                        : E.a.createElement(ee.b, { color: 'gray700' }, re),
                      E.a.createElement(te.a, null),
                      E.a.createElement(
                        ee.b,
                        {
                          accessibilityRole: 'button',
                          color: 'link',
                          onPress: e ? this._handleCancelEditPress : this._handleEditPress,
                          testID: e ? Z.a.cancel : Z.a.edit,
                          withInteractiveStyling: !0,
                        },
                        e ? oe : ie,
                      ),
                    ),
                    e
                      ? E.a.createElement(Y, {
                          birthdate: a,
                          errors: n,
                          onChange: r,
                          onRemoveBirthdate: this._handleRemoveBirthdate,
                          showBirthdateRemoveButton: i,
                        })
                      : E.a.createElement(
                          ee.b,
                          { size: 'headline1', testID: o ? Z.a.birthdate : Z.a.missingBirthdate },
                          o ? E.a.createElement(J.a, { birthdate: a }) : se,
                        ),
                    this._renderConfirmationModal(),
                  )
                },
              },
              {
                key: '_renderConfirmationModal',
                value: function () {
                  return this.state.showConfirmationModal
                    ? E.a.createElement(ae.a, {
                        confirmButtonLabel: le.confirmButtonLabel,
                        headline: le.headline,
                        onCancel: this._handleModalCancel,
                        onConfirm: this._handleModalConfirmed,
                        text: le.text,
                        withForwardFocusOnConfirm: !0,
                      })
                    : null
                },
              },
            ]),
            a
          )
        })(E.a.Component),
        ce = ne.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
            container: { flexDirection: 'row' },
            containerItem: { marginLeft: e.spaces.space4 },
          }
        }),
        ue = a('PVvL'),
        he = a('Dtul'),
        pe = a('BTou'),
        fe = a('jhWN'),
        me = a('9Xij'),
        _e = a('GWvE'),
        be = a('/yvb'),
        ve = a('p+r5'),
        ge = a('PbQQ'),
        ye = a('Q0VY'),
        Ce = a('csss'),
        Ee = a('v6aA'),
        Se = a('jTgF'),
        Me = a('U+bB'),
        Pe = Q.a.g7088266,
        Be = Q.a.d4e220b3,
        Re = Q.a.d9d293b8,
        Ae = Q.a.a990900c,
        Ie = Q.a.jaaa8984,
        we = Q.a.i2209530,
        De = Q.a.cb469ff5,
        Te = Q.a.g511f467,
        Le = Q.a.ec3a116d,
        Oe = Q.a.j94599ec,
        ke = Q.a.df31d76a,
        Ue = { confirmButtonLabel: Q.a.g9677c6d, headline: Q.a.c01a0e19 },
        Fe = { switchToProfessionalLabel: Q.a.df2c469a, editProfessionalProfileLabel: Q.a.e1f76977 },
        Ne = { headline: Q.a.e554f641, text: Q.a.ic04a6f5, confirmLabel: Q.a.d4ab68e2 },
        je = { visibility: ue.a.MUTUAL_FOLLOW, year_visibility: ue.a.SELF },
        xe = {
          birthdate: je,
          description: void 0,
          location: void 0,
          name: void 0,
          shouldDeleteBanner: !1,
          url: void 0,
        },
        Ve = Q.a.addbe8e7,
        ze = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e, n) {
            var r
            d()(this, a),
              (r = t.call(this, e, n)),
              g()(
                p()(r),
                '_shouldDisplayProfessionalProfileButton',
                r.context.featureSwitches.isTrue('responsive_web_edit_professional_profile_enabled'),
              ),
              g()(p()(r), '_firstUnicodeCharDetected', !1),
              g()(p()(r), '_unicodeDetectionScribed', !1),
              g()(p()(r), '_handleDismiss', function () {
                var e = r.props,
                  t = e.history,
                  a = e.loggedInUser
                ;(0, e.resetPersistedProfileSettings)(),
                  a || t.goBack({ backLocation: '/login' }),
                  t.goBackThroughModals()
              }),
              g()(p()(r), '_handleCancel', function () {
                r._shouldShowDiscardConfirmation() ? r.setState({ showDiscardConfirmation: !0 }) : r._handleDismiss()
              }),
              g()(p()(r), '_handleSubmit', function () {
                var e = r._getBirthdateErrors()
                Object.keys(e).length
                  ? r.setState({ errors: e })
                  : r._shouldShowBirthdateConfirmationModal()
                  ? r.setState({ showBirthdateConfirmationModal: !0 })
                  : (r._saveChanges(), r._displayNameUnicodeScribingOnSave())
              }),
              g()(p()(r), '_handleConfirmDiscardSettings', function () {
                r.setState({ showDiscardConfirmation: !1 }), r._handleDismiss()
              }),
              g()(p()(r), '_handleCancelDiscardSettings', function () {
                r.setState({ showDiscardConfirmation: !1 })
              }),
              g()(p()(r), '_handleProfessionalConversionClick', function () {
                r.props.analytics.scribe(s()({}, y.f()))
              }),
              g()(p()(r), '_handleProfessionalSettingsClick', function () {
                r.props.analytics.scribe(s()({}, y.g()))
              }),
              g()(p()(r), '_displayNameUnicodeScribingOnSave', function () {
                var e = r.props.analytics
                if (r._firstUnicodeCharDetected) {
                  var t = r.state.isStylizedUnicodeDisplayName ? 'contains_unicode_symbols' : 'no_unicode_symbols'
                  e.scribe({ component: 'unicode_detector', element: t, action: 'save' })
                }
              }),
              g()(p()(r), '_getBirthdateErrors', function () {
                var e = r.state.profileSettings.birthdate,
                  t = {}
                return (
                  e !== je &&
                    ['day', 'month', 'year'].forEach(function (a) {
                      e[a] || (t[a] = !0)
                    }),
                  t
                )
              }),
              g()(p()(r), '_shouldShowBirthdateConfirmationModal', function () {
                var e = r.props.loggedInUser,
                  t = r.state.profileSettings.birthdate,
                  a = ['day', 'month', 'year'].every(function (e) {
                    return !!t[e]
                  }),
                  n = (e && e.birthdate) || je,
                  i = !Object(H.a)(n, t)
                return a && i
              }),
              g()(p()(r), '_shouldShowDiscardConfirmation', function () {
                var e = r.state.profileSettings
                return !x()(e, r._initialProfileSettings)
              }),
              g()(p()(r), '_handleBirthdateModalCancel', function () {
                r.setState({ showBirthdateConfirmationModal: !1 })
              }),
              g()(p()(r), '_handleBirthdateModalConfirm', function () {
                r.setState({ showBirthdateConfirmationModal: !1 }), r._scribeBirthdateAddOrEdit(), r._saveChanges()
              }),
              g()(p()(r), '_handleBirthdateChange', function (e) {
                var t = r.state,
                  a = t.errors,
                  n = t.profileSettings,
                  i = s()({}, a)
                Object.keys(a).forEach(function (t) {
                  e[t] && a[t] && delete i[t]
                }),
                  r.setState({
                    profileSettings: s()(s()({}, n), {}, { birthdate: s()(s()({}, n.birthdate), e) }),
                    errors: i,
                  })
              }),
              g()(p()(r), '_handleResetBirthdate', function () {
                var e = r.state.profileSettings,
                  t = r.props.loggedInUser && r.props.loggedInUser.birthdate
                r.setState({ profileSettings: s()(s()({}, e), {}, { birthdate: t || je }), errors: {} })
              }),
              g()(p()(r), '_handleRemoveBirthdate', function () {
                var e = r.props,
                  t = e.analytics,
                  a = e.createLocalApiErrorHandler,
                  n = e.updateProfile,
                  i = r.state.profileSettings
                t.scribe({ component: 'birthdate', action: 'remove' }),
                  n({ birthdate_day: 0, birthdate_month: 0, birthdate_year: 0 })
                    .then(function () {
                      r.setState({ profileSettings: s()(s()({}, i), {}, { birthdate: je }), errors: {} })
                    })
                    .catch(a({ showToast: !0 }))
              }),
              g()(p()(r), '_handleAvatarMediaChange', function (e) {
                var t = i()(e, 1)[0],
                  a = r.props,
                  n = a.addAvatarMedia,
                  o = a.avatarMedia
                o && r._clearAvatarMedia(o.id), n(t), r.setState({ showAvatarCropper: !0 })
              }),
              g()(p()(r), '_handleAvatarCropDone', function () {
                return r.setState({ showAvatarCropper: !1 })
              }),
              g()(p()(r), '_handleAvatarCropCancel', function () {
                return r._handleAvatarCropDone()
              }),
              g()(p()(r), '_handleBannerMediaChange', function (e) {
                var t = i()(e, 1)[0],
                  a = r.props,
                  n = a.addBannerMedia,
                  o = a.bannerMedia
                o && r._clearBannerMedia(o.id), n(t), r.setState({ showBannerCropper: !0 })
              }),
              g()(p()(r), '_handleBannerCropDone', function () {
                return r.setState({ showBannerCropper: !1 })
              }),
              g()(p()(r), '_handleBannerCropCancel', function () {
                return r._handleBannerCropDone()
              }),
              g()(p()(r), '_handleBannerMediaRemove', function () {
                var e = r.props.bannerMedia,
                  t = r.state.profileSettings
                e
                  ? r._clearBannerMedia(e.id)
                  : r.setState({ profileSettings: s()(s()({}, t), {}, { shouldDeleteBanner: !0 }) })
              }),
              g()(p()(r), '_handleAvatarMediaFailure', function (e) {
                r._clearAvatarMedia(e)
              }),
              g()(p()(r), '_handleBannerMediaFailure', function (e) {
                r._clearBannerMedia(e)
              }),
              g()(p()(r), '_handleMediaUpdateFailureFactory', function (e, t) {
                return function (a) {
                  var n = r.props,
                    i = n.addToast,
                    o = n.createLocalApiErrorHandler,
                    s = n.removeMediaUpload,
                    l = Object(Se.a)(a)
                  if (l) {
                    var d = Object(Se.b)(l, t)
                    d && i(d)
                  } else o({ showToast: !0 })(a)
                  s(e.id)
                }
              }),
              g()(p()(r), '_renderInputHelperText', function () {
                return r.state.isStylizedUnicodeDisplayName ? Ve : null
              }),
              g()(p()(r), '_handleChangeDisplayName', function (e) {
                var t = r.state.profileSettings,
                  a = e.currentTarget.value,
                  n = N({ text: a })
                ;((r._firstUnicodeCharDetected = r._firstUnicodeCharDetected || n),
                r.setState({ profileSettings: s()(s()({}, t), {}, { name: a }), isStylizedUnicodeDisplayName: n }),
                r._firstUnicodeCharDetected && !r._unicodeDetectionScribed) &&
                  ((r._unicodeDetectionScribed = !0),
                  r.props.analytics.scribe({ component: 'unicode_detector', action: 'unicode_detected' }))
              }),
              g()(p()(r), '_handleChangeDescription', function (e) {
                var t = r.state.profileSettings
                r.setState({ profileSettings: s()(s()({}, t), {}, { description: e.currentTarget.value }) })
              }),
              g()(p()(r), '_handleChangeLocation', function (e) {
                var t = r.state.profileSettings
                r.setState({ profileSettings: s()(s()({}, t), {}, { location: e.currentTarget.value }) })
              }),
              g()(p()(r), '_handleChangeURL', function (e) {
                var t = r.state.profileSettings
                r.setState({ profileSettings: s()(s()({}, t), {}, { url: e.currentTarget.value }) })
              })
            var o = e.loggedInUser,
              l = e.persistedProfileSettings
            return (
              (r._initialProfileSettings = (o && r._getInitialProfileSettings(o)) || xe),
              (r.state = {
                displayNameMaxLength: r.context.featureSwitches.getNumberValue('user_display_name_max_limit', 20),
                profileSettings: l || r._initialProfileSettings,
                showBirthdateConfirmationModal: !1,
                errors: {},
                showAvatarCropper: !1,
                showBannerCropper: !1,
                showDiscardConfirmation: !1,
                isStylizedUnicodeDisplayName: !1,
              }),
              r
            )
          }
          return (
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.history
                  e.loggedInUser ? (this._unlockReload = he.a.acquire()) : t.push('/login')
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var a = this.props.persistProfileSettings,
                    n = this.state.profileSettings,
                    r = t.profileSettings
                  x()(r, n) || a(n)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this.props,
                    t = e.avatarMedia,
                    a = e.bannerMedia
                  t && this._clearAvatarMedia(t.id), a && this._clearBannerMedia(a.id), this._unlockReload()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.loggedInUser
                  return e ? this._render(e) : null
                },
              },
              {
                key: '_render',
                value: function (e) {
                  var t = this.props,
                    a = t.avatarMedia,
                    n = t.bannerMedia,
                    r = t.history,
                    i = this.state,
                    o = i.displayNameMaxLength,
                    s = i.errors,
                    l = i.profileSettings,
                    d = l.description,
                    c = l.location,
                    u = l.name,
                    h = l.shouldDeleteBanner,
                    p = l.url,
                    f = i.showAvatarCropper,
                    m = i.showBannerCropper,
                    _ = i.showDiscardConfirmation,
                    b = E.a.createElement(fe.a, { size: 'custom', uri: e.profile_image_url_https }),
                    v = n || (e.profile_banner_url && !h),
                    g = E.a.createElement(
                      me.a,
                      { ratio: ne.a.theme.aspectRatios.profileBanner },
                      v ? E.a.createElement(Me.a, { source: { uri: e.profile_banner_url }, style: He.banner }) : null,
                    ),
                    y = void 0 !== u && Object(_e.a)(u),
                    C = !!((a && !a.uploader) || (n && !n.uploader)) || !!Object.keys(s).length || y,
                    M = E.a.createElement(
                      be.a,
                      {
                        disabled: C,
                        onPress: this._handleSubmit,
                        size: 'small',
                        testID: Z.a.save,
                        type: 'primaryFilled',
                      },
                      we,
                    )
                  return E.a.createElement(
                    V.b,
                    { history: r, onBackClick: this._handleCancel, rightControl: M, title: Pe },
                    E.a.createElement(
                      $.a,
                      { style: He.container },
                      E.a.createElement(G.default, {
                        accessibilityLabel: ke,
                        aspectRatio: 3,
                        currentContent: g,
                        location: W.d.ProfileBanner,
                        mediaItem: n,
                        onChange: this._handleBannerMediaChange,
                        onFailure: this._handleBannerMediaFailure,
                        onRemove: v ? this._handleBannerMediaRemove : void 0,
                        rootStyle: He.bannerContainer,
                      }),
                      E.a.createElement(G.default, {
                        accessibilityLabel: Oe,
                        borderRadius: S.a.INFINITE,
                        currentContent: b,
                        location: W.d.Avatar,
                        mediaItem: a,
                        onChange: this._handleAvatarMediaChange,
                        onFailure: this._handleAvatarMediaFailure,
                        rootStyle: He.avatarContainer,
                      }),
                      E.a.createElement(ve.a, {
                        autoComplete: 'off',
                        defaultValue: u,
                        errorText: De,
                        helperText: this._renderInputHelperText(),
                        invalid: y,
                        label: Be,
                        maxLength: o,
                        name: 'displayName',
                        onChange: this._handleChangeDisplayName,
                      }),
                      E.a.createElement(ve.a, {
                        defaultValue: d,
                        label: Ae,
                        maxLength: 160,
                        multiline: !0,
                        name: 'description',
                        numberOfLines: 3,
                        onChange: this._handleChangeDescription,
                      }),
                      E.a.createElement(ve.a, {
                        defaultValue: c,
                        label: Ie,
                        maxLength: 30,
                        name: 'location',
                        onChange: this._handleChangeLocation,
                      }),
                      E.a.createElement(ve.a, {
                        defaultValue: p || '',
                        label: Re,
                        maxLength: 100,
                        name: 'url',
                        onChange: this._handleChangeURL,
                      }),
                      this._renderProfileBirthdate(),
                      this._renderBirthdateConfirmationModal(),
                      this._renderProfessionalProfilesButton(),
                    ),
                    f
                      ? E.a.createElement(z.a, {
                          circle: !0,
                          defaultAspectRatio: 1,
                          media: a,
                          onCancel: this._handleAvatarCropCancel,
                          onDone: this._handleAvatarCropDone,
                        })
                      : null,
                    m
                      ? E.a.createElement(z.a, {
                          defaultAspectRatio: 3,
                          media: n,
                          onCancel: this._handleBannerCropCancel,
                          onDone: this._handleBannerCropDone,
                        })
                      : null,
                    _
                      ? E.a.createElement(ae.a, {
                          confirmButtonLabel: Ne.confirmLabel,
                          confirmButtonType: 'destructiveFilled',
                          headline: Ne.headline,
                          onCancel: this._handleCancelDiscardSettings,
                          onConfirm: this._handleConfirmDiscardSettings,
                          text: Ne.text,
                        })
                      : null,
                  )
                },
              },
              {
                key: '_getInitialProfileSettings',
                value: function (e) {
                  var t,
                    a = ge.d.getOriginalDescriptionWithEntities({
                      description: e.description,
                      entities: e.entities,
                      withheldDescription: e.withheld_description,
                      withheldEntities: e.withheld_entities,
                    }),
                    n = a.description,
                    r = a.entities,
                    i = n
                  null !== i &&
                    ye.a.descriptionTextParts(i, r).forEach(function (e) {
                      'url' === e.entityType && (i = i.replace(e.url, e.displayUrl))
                    })
                  var o = e.entities.url,
                    s = null == o || null === (t = o.urls) || void 0 === t ? void 0 : t[0].expanded_url
                  return {
                    birthdate: e.birthdate || je,
                    description: i,
                    location: e.location,
                    name: e.name,
                    shouldDeleteBanner: !1,
                    url: s,
                  }
                },
              },
              {
                key: '_renderProfileBirthdate',
                value: function () {
                  var e = this.state,
                    t = e.errors,
                    a = e.profileSettings.birthdate,
                    n = this.props.loggedInUser
                  return E.a.createElement(de, {
                    birthdate: a,
                    errors: t,
                    onCancelEditBirthdate: this._handleResetBirthdate,
                    onChange: this._handleBirthdateChange,
                    onRemoveBirthdate: this._handleRemoveBirthdate,
                    showBirthdateRemoveButton: !(!n || !n.birthdate),
                  })
                },
              },
              {
                key: '_renderBirthdateConfirmationModal',
                value: function () {
                  return this.state.showBirthdateConfirmationModal
                    ? E.a.createElement(ae.a, {
                        confirmButtonLabel: Ue.confirmButtonLabel,
                        headline: Ue.headline,
                        onCancel: this._handleBirthdateModalCancel,
                        onConfirm: this._handleBirthdateModalConfirm,
                        text: this._getBirthdateConfirmationModalText(),
                      })
                    : null
                },
              },
              {
                key: '_getBirthdateConfirmationModalText',
                value: function () {
                  var e = this.state.profileSettings.birthdate,
                    t = e.day,
                    a = e.month,
                    n = e.year
                  return E.a.createElement(
                    Q.a.I18NFormatMessage,
                    { $i18n: 'e9dec56e' },
                    E.a.createElement(J.a, { birthdate: { day: t, month: a, year: n } }),
                  )
                },
              },
              {
                key: '_renderProfessionalProfilesButton',
                value: function () {
                  var e = this.props.loggedInUser
                  return this._shouldDisplayProfessionalProfileButton
                    ? null != e && e.professional
                      ? this._renderEditProfessionalProfileButton()
                      : this._renderSwitchToProfessionalButton()
                    : null
                },
              },
              {
                key: '_renderSwitchToProfessionalButton',
                value: function () {
                  var e = E.a.createElement(ee.b, { size: 'headline1' }, Fe.switchToProfessionalLabel)
                  return E.a.createElement(Ce.a, {
                    label: e,
                    link: {
                      pathname: '/i/flow/convert_to_professional',
                      state: { input: { requested_variant: 'editprofile' } },
                      method: 'push',
                    },
                    onPress: this._handleProfessionalConversionClick,
                    testID: Z.a.switchToProfessional,
                  })
                },
              },
              {
                key: '_renderEditProfessionalProfileButton',
                value: function () {
                  var e = E.a.createElement(ee.b, { size: 'headline1' }, Fe.editProfessionalProfileLabel)
                  return E.a.createElement(Ce.a, {
                    label: e,
                    link: '/settings/professional_profile',
                    onPress: this._handleProfessionalSettingsClick,
                    testID: Z.a.editProfessionalProfile,
                  })
                },
              },
              {
                key: '_saveChanges',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.avatarMedia,
                    n = t.bannerMedia,
                    r = t.createLocalApiErrorHandler,
                    i = t.removeMediaUpload,
                    o = t.removeProfileBanner,
                    s = t.updateProfile,
                    l = t.updateProfileAvatar,
                    d = t.updateProfileBanner,
                    c = this.state.profileSettings.shouldDeleteBanner
                  if (a) {
                    var u = a.id
                    l(u).then(function () {
                      return i(u)
                    }, this._handleMediaUpdateFailureFactory(a, Te))
                  }
                  n
                    ? d(n.id).then(function () {
                        return i(n.id)
                      }, this._handleMediaUpdateFailureFactory(n, Le))
                    : c && o().catch(r({ showToast: !0 })),
                    s(this._getFormattedState())
                      .then(function () {
                        pe.a.refreshHTMLCache(), e._handleDismiss()
                      })
                      .catch(r({ showToast: !0 }))
                },
              },
              {
                key: '_getFormattedState',
                value: function () {
                  var e = this.state,
                    t = e.displayNameMaxLength,
                    a = e.profileSettings,
                    n = a.birthdate,
                    r = a.description,
                    i = a.location,
                    o = a.name,
                    l = a.url,
                    d = n.day,
                    c = n.month,
                    u = n.visibility,
                    h = n.year,
                    p = n.year_visibility,
                    f =
                      d && c && h
                        ? {
                            birthdate_day: d,
                            birthdate_month: c,
                            birthdate_year: h,
                            birthdate_visibility: u,
                            birthdate_year_visibility: p,
                          }
                        : {}
                  return s()(s()({}, f), {}, { displayNameMaxLength: t, url: l, name: o, description: r, location: i })
                },
              },
              {
                key: '_scribeBirthdateAddOrEdit',
                value: function () {
                  var e = this.props,
                    t = e.analytics,
                    a = e.loggedInUser,
                    n = a && a.birthdate,
                    r = n && n.month && n.day && n.year ? 'edit' : 'add'
                  t.scribe({ component: 'birthdate', action: r })
                },
              },
              {
                key: '_clearAvatarMedia',
                value: function (e) {
                  var t = this.props,
                    a = t.avatarMedia,
                    n = t.removeAvatarMedia,
                    r = t.removeMediaUpload
                  ;(a && a.uploading) || r(e), n(e)
                },
              },
              {
                key: '_clearBannerMedia',
                value: function (e) {
                  var t = this.props,
                    a = t.bannerMedia,
                    n = t.removeBannerMedia,
                    r = t.removeMediaUpload
                  ;(a && a.uploading) || r(e), n(e)
                },
              },
            ]),
            a
          )
        })(E.a.Component)
      g()(ze, 'contextType', Ee.a)
      var He = ne.a.create(function (e) {
        return {
          avatarContainer: {
            backgroundColor: e.colors.cellBackground,
            borderWidth: e.borderWidths.medium,
            borderColor: e.colors.cellBackground,
            borderStyle: 'solid',
            marginLeft: '1rem',
            marginTop: '-3rem',
            maxWidth: '8rem',
            width: '25%',
          },
          banner: { height: '100%' },
          bannerContainer: { maxHeight: '200px' },
          container: { paddingBottom: e.spaces.space64 },
        }
      })
      t.default = L(ze)
    },
  },
])
//# sourceMappingURL=WIPED
