;(window.webpackJsonp = window.webpackJsonp || []).push([
  [75, 174],
  {
    '0ULw': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('Lsrn'),
        l = a('k/Ka'),
        c = function () {
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
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    '12XZ': function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('97Jx'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('9D1O'),
        l = a('gPQO')
      t.default = function (e) {
        return o.a.createElement(l.a, r()({}, e, { ocfModule: s.i }))
      }
    },
    '180P': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      })
      a('TJCb'), a('7x/C'), a('DZ+c'), a('KOtZ'), a('0zG9'), a('KqXw'), a('Ysgh'), a('tQbP'), a('7xRU')
      var n = function (e) {
          var t = (JSON.stringify(e) || '').split('')
          t.sort()
          var a = t.join('')
          return r(a, 0).toString()
        },
        r = function (e, t) {
          for (var a = 'string' == typeof e ? e : String(e), n = t, r = 0; r < a.length; r++) {
            ;(n = (n << 5) - n + a.charCodeAt(r)), (n &= n)
          }
          return n
        }
    },
    '2Daw': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return O
      })
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        s = a('5Yy7'),
        l = a.n(s),
        c = a('2VqO'),
        u = a.n(c),
        d = a('KEM+'),
        p = a.n(d),
        h = (a('uFXj'), a('ERkP')),
        m = a.n(h),
        _ = a('LCtV'),
        b = a('3XMw'),
        f = a.n(b),
        v = a('VPdC'),
        g = a('pKoL'),
        k = a('MWbm'),
        y = a('rFBM'),
        w = a('/yvb'),
        C = a('9Xij'),
        E = a('rHpw'),
        I = a('hOZg'),
        x = a('Mbn/'),
        S = a('T8pk'),
        T = f.a.b87ca51a,
        F = f.a.eebff22c,
        O = (function (e) {
          l()(a, e)
          var t = u()(a)
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
                    c = n && !n.uploader,
                    u = m.a.createElement(
                      m.a.Fragment,
                      null,
                      this._renderPreview(),
                      c
                        ? null
                        : m.a.createElement(
                            m.a.Fragment,
                            null,
                            m.a.createElement(k.a, { style: [N.mask, a, A[t]] }),
                            m.a.createElement(
                              k.a,
                              { style: N.mediaPicker },
                              this._renderMediaEdit(),
                              i ? this._renderMediaCrop() : null,
                              o ? this._renderMediaRemove() : null,
                            ),
                          ),
                    )
                  return m.a.createElement(
                    k.a,
                    { style: [N.container, s, A[t]] },
                    l && r ? m.a.createElement(y.a, { onFilesAdded: r, style: [N.dragDropContainer, A[t]] }, u) : u,
                  )
                },
              },
              {
                key: '_renderMediaRemove',
                value: function () {
                  var e = this.props.onRemove
                  return m.a.createElement(w.a, {
                    accessibilityLabel: T,
                    hoverLabel: { label: T },
                    icon: m.a.createElement(I.a, null),
                    onPress: e,
                    size: 'large',
                    style: N.rightButton,
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
                  return m.a.createElement(w.a, {
                    accessibilityLabel: F,
                    icon: m.a.createElement(x.a, null),
                    onPress: t,
                    size: 'large',
                    style: a ? N.middleButton : N.rightButton,
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
                    o = m.a.createElement(S.a, null)
                  return r
                    ? m.a.createElement(v.a, {
                        acceptGifs: t,
                        acceptVideo: a,
                        accessibilityLabel: n,
                        icon: o,
                        onChange: r,
                        size: 'large',
                        type: 'onMediaDominantColorFilled',
                      })
                    : m.a.createElement(w.a, {
                        accessibilityLabel: n,
                        icon: o,
                        onPress: i,
                        size: 'large',
                        style: N.edit,
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
                    ? m.a.createElement(
                        C.a,
                        { ratio: t },
                        m.a.createElement(g.a, {
                          borderRadius: a,
                          enableGif: !1,
                          mediaItem: r,
                          style: N.mediaPreview,
                          withCloseButton: !1,
                        }),
                      )
                    : n
                },
              },
            ]),
            a
          )
        })(m.a.Component)
      p()(O, 'defaultProps', { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: _.a.NONE })
      var A = E.a.create(function (e) {
          return {
            infinite: { borderRadius: e.borderRadii.infinite },
            medium: { borderRadius: e.borderRadii.small },
            none: { borderRadius: e.borderRadii.none },
          }
        }),
        N = E.a.create(function (e) {
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
    '3GUV': function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        s = a('5Yy7'),
        l = a.n(s),
        c = a('2VqO'),
        u = a.n(c),
        d = a('ERkP'),
        p = a.n(d),
        h = a('rHpw'),
        m = a('MWbm'),
        _ = (function (e) {
          l()(a, e)
          var t = u()(a)
          function a() {
            return r()(this, a), t.apply(this, arguments)
          }
          return (
            o()(a, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return p.a.createElement(m.a, { style: b.root })
                },
              },
            ]),
            a
          )
        })(p.a.Component),
        b = h.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = _
    },
    '4BrD': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('Lsrn'),
        l = a('k/Ka'),
        c = function () {
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
                d: 'M20.75 22H3.25C2.01 22 1 20.99 1 19.75V4.25C1 3.01 2.01 2 3.25 2h17.5C21.99 2 23 3.01 23 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM3.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h17.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H3.25z',
              }),
              o.a.createElement('path', {
                d: 'M16.758 6.982h-5.806c-.414 0-.75.336-.75.75s.336.75.75.75h3.995L6.92 16.508c-.292.293-.292.768 0 1.06.147.147.34.22.53.22s.385-.072.53-.22l8.027-8.025v3.995c0 .414.336.75.75.75s.75-.336.75-.75V7.732c0-.414-.335-.75-.75-.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    '53j7': function (e, t, a) {
      'use strict'
      a.d(t, 'h', function () {
        return w
      }),
        a.d(t, 'i', function () {
          return C
        }),
        a.d(t, 'j', function () {
          return E
        }),
        a.d(t, 'a', function () {
          return x
        }),
        a.d(t, 'd', function () {
          return T
        }),
        a.d(t, 'b', function () {
          return O
        }),
        a.d(t, 'e', function () {
          return N
        }),
        a.d(t, 'c', function () {
          return D
        }),
        a.d(t, 'g', function () {
          return R
        }),
        a.d(t, 'f', function () {
          return L
        }),
        a.d(t, 'k', function () {
          return V
        }),
        a.d(t, 'l', function () {
          return j
        }),
        a.d(t, 'm', function () {
          return U
        })
      var n = a('ddV6'),
        r = a.n(n),
        i = a('KEM+'),
        o = a.n(i),
        s = a('yiKp'),
        l = a.n(s),
        c = (a('7x/C'), a('JtPf'), a('oEOe')),
        u = a('AspN'),
        d = a('/kEJ'),
        p = a('XMGw'),
        h = a('Ssj5'),
        m = ''.concat(p.a, '/profile'),
        _ = 'rweb/'.concat(m),
        b = c.a(_, 'REMOVE_PROFILE_BANNER'),
        f = c.a(_, 'UPDATE_PROFILE'),
        v = c.a(_, 'UPDATE_PROFILE_AVATAR'),
        g = c.a(_, 'UPDATE_PROFILE_BANNER'),
        k = c.a(_, 'UPLOAD_MEDIA'),
        y = { avatarMediaId: null, bannerMediaId: null, isUploading: !1, profileSettings: null }
      var w = function (e) {
          return e[m].avatarMediaId
        },
        C = function (e) {
          return e[m].bannerMediaId
        },
        E = function (e) {
          return e[m].profileSettings
        },
        I = 'rweb/settings/profile/ADD_AVATAR_MEDIA',
        x = function (e) {
          return { meta: { mediaId: e }, type: I }
        },
        S = 'rweb/settings/profile/REMOVE_AVATAR_MEDIA',
        T = function (e) {
          return { meta: { mediaId: e }, type: S }
        },
        F = 'rweb/settings/profile/ADD_BANNER_MEDIA',
        O = function (e) {
          return { meta: { mediaId: e }, type: F }
        },
        A = 'rweb/settings/profile/REMOVE_BANNER_MEDIA',
        N = function (e) {
          return { meta: { mediaId: e }, type: A }
        },
        P = 'rweb/settings/profile/PERSIST_PROFILE_SETTINGS',
        D = function (e) {
          return { meta: { profileSettings: e }, type: P }
        },
        B = 'rweb/settings/profile/RESET_PERSISTED_PROFILE_SETTINGS',
        R = function () {
          return { type: B }
        },
        L = function (e) {
          return function (t, a, n) {
            var r = n.api
            return c.b(t, { params: e, request: r.Settings.removeProfileBanner })(
              { actionTypes: b, context: 'ACTION_REMOVE_USER_BANNER' },
              function (e) {
                if (e)
                  return [Object(d.c)({ users: o()({}, e.id_str, l()(l()({}, e), {}, { profile_banner_url: null })) })]
              },
            )
          }
        },
        V = function (e) {
          return function (t, a, n) {
            var r = n.api
            return c.b(t, { params: e, request: r.Settings.updateProfile })(
              { actionTypes: f, context: 'ACTION_UPDATE_PROFILE_SETTINGS' },
              function (e) {
                if (e && e.entities) return [Object(d.c)(e.entities)]
              },
            )
          }
        },
        M = function (e, t, a) {
          return function (n) {
            return function (i, s, l) {
              var p = l.api
              i({ type: k.REQUEST })
              var h = u.p(n)
              return i(h).then(
                function (n) {
                  var s = r()(n, 1)[0]
                  i([{ type: k.SUCCESS }, { type: e.REQUEST }])
                  return c.b(i, { params: { media_id: s.uploadId }, request: a(p) })(
                    { actionTypes: f, context: t },
                    function (e) {
                      if (e) return [Object(d.c)({ users: o()({}, e.id_str, e) })]
                    },
                  )
                },
                function (e) {
                  return i({ type: k.FAILURE }), Promise.reject(e)
                },
              )
            }
          }
        },
        j = M(v, 'ACTION_UPDATE_USER_AVATAR', function (e) {
          return e.Settings.updateProfileAvatar
        }),
        U = M(g, 'ACTION_UPDATE_USER_BANNER', function (e) {
          return e.Settings.updateProfileBanner
        })
      h.a.register(
        o()({}, m, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          switch (t.type) {
            case I:
              return l()(l()({}, e), {}, { avatarMediaId: t.meta.mediaId })
            case S:
              return l()(l()({}, e), {}, { avatarMediaId: null })
            case F:
              return l()(l()({}, e), {}, { bannerMediaId: t.meta.mediaId })
            case A:
              return l()(l()({}, e), {}, { bannerMediaId: null })
            case P:
              return l()(l()({}, e), {}, { profileSettings: t.meta.profileSettings })
            case B:
              return l()(l()({}, e), {}, { profileSettings: null })
            case k.REQUEST:
              return l()(l()({}, e), {}, { isUploading: !0 })
            case k.FAILURE:
            case k.SUCCESS:
              return l()(l()({}, e), {}, { isUploading: !1 })
            default:
              return e
          }
        }),
      )
    },
    '5UID': function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        s = a('5Yy7'),
        l = a.n(s),
        c = a('2VqO'),
        u = a.n(c),
        d = a('ERkP'),
        p = a.n(d),
        h = a('3XMw'),
        m = a.n(h),
        _ = a('rHpw'),
        b = a('+/1j'),
        f = a('MWbm'),
        v = m.a.e5b0063d,
        g = 0,
        k = (function (e) {
          l()(a, e)
          var t = u()(a)
          function a() {
            var e
            return r()(this, a), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(g)), (g += 1), e
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    a = e.title,
                    n = v({ title: a })
                  return p.a.createElement(
                    f.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    p.a.createElement(
                      b.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: _.a.visuallyHidden,
                      },
                      a,
                    ),
                    p.a.createElement(f.a, { accessibilityLabel: n }, t),
                  )
                },
              },
            ]),
            a
          )
        })(p.a.Component)
      t.a = k
    },
    '6D0R': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'default', function () {
          return _
        })
      var n = a('97Jx'),
        r = a.n(n),
        i = (a('KqXw'), a('MvUL'), a('0zG9'), a('ERkP')),
        o = a.n(i),
        s = a('Hw0q'),
        l = a('9D1O'),
        c = Object(l.c)({
          task: function (e) {
            return e.ReportFlow.task
          },
        }),
        u = a('gPQO'),
        d = a('fz3c'),
        p = function (e, t) {
          return Object(s.a)(e[t])
        },
        h = function (e, t) {
          switch (p(e, t)) {
            case '1':
            case 'true':
              return !0
            default:
              return !1
          }
        },
        m = function (e) {
          return {
            client_app_id: p(e, 'client_app_id'),
            client_location: p(e, 'client_location'),
            client_referer: p(e, 'client_referer'),
            community_id: p(e, 'community_id'),
            conversation_section: p(e, 'conversation_section'),
            impression_id: p(e, 'impression_id'),
            is_media: h(e, 'is_media'),
            is_promoted: h(e, 'is_promoted'),
            report_flow_id: p(e, 'report_flow_id'),
            report_referrer: p(e, 'report_referrer'),
            reported_broadcast_id: p(e, 'reported_broadcast_id'),
            reported_direct_message_conversation_id: p(e, 'reported_direct_message_conversation_id'),
            reported_direct_message_id: p(e, 'reported_direct_message_id'),
            reported_list_id: p(e, 'reported_list_id'),
            reported_moment_id: p(e, 'reported_moment_id'),
            reported_tweet_id: p(e, 'reported_tweet_id'),
            reported_user_id: p(e, 'reported_user_id'),
            source: Object(d.e)(p(e, 'source') || 'reporttweet'),
          }
        }
      function _(e) {
        var t,
          a = e.history,
          n = e.location,
          i = n.query,
          s = n.state
        return !(null == i || !i.input_flow_data) ||
          (null != s && null !== (t = s.input) && void 0 !== t && t.requested_variant)
          ? o.a.createElement(u.a, r()({}, e, { flowName: 'report-flow', ocfModule: c }))
          : (a.replace(location.pathname, { input: { requested_variant: JSON.stringify(m(i)) } }), null)
      }
    },
    '6XNv': function (e, t, a) {
      'use strict'
      var n = a('RhWx'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        s = a('Y9Ll'),
        l = a.n(s),
        c = a('1Pcy'),
        u = a.n(c),
        d = a('5Yy7'),
        p = a.n(d),
        h = a('2VqO'),
        m = a.n(h),
        _ = a('KEM+'),
        b = a.n(_),
        f = a('yiKp'),
        v = a.n(f),
        g = (a('lTEL'), a('7x/C'), a('LqLs'), a('87if'), a('kYxP'), a('7xRU'), a('z84I'), a('2G9S'), a('ERkP')),
        k = a.n(g),
        y = a('t62R'),
        w = a('piX5'),
        C = a('4r2z'),
        E = a('FG+G'),
        I = a('rHpw'),
        x = a('k/Ka'),
        S = a('shC7'),
        T = a('MWbm'),
        F = k.a.forwardRef(function (e, t) {
          return Object(x.a)('select', v()(v()({}, e), {}, { ref: t }))
        }),
        O = function (e) {
          return Object(x.a)('option', e)
        },
        A = 1,
        N = (function (e) {
          p()(a, e)
          var t = m()(a)
          function a(e) {
            var n
            return (
              o()(this, a),
              (n = t.call(this, e)),
              b()(u()(n), '_selectRef', k.a.createRef()),
              b()(u()(n), 'state', { isFocused: !1 }),
              b()(u()(n), '_handleChange', function (e) {
                var t = n.props,
                  a = t.onChange,
                  r = t.withEmptyOption,
                  i = e.target,
                  o = i.selectedIndex,
                  s = i.value
                a && a(s, o - (r ? 1 : 0))
              }),
              b()(u()(n), '_handleBlur', function (e) {
                var t = n.props.onBlur
                n.setState({ isFocused: !1 }), t && t()
              }),
              b()(u()(n), '_handleFocus', function (e) {
                var t = n.props.onFocus
                n.setState({ isFocused: !0 }), t && t()
              }),
              (n._id = 'SELECTOR_'.concat(A)),
              (n._errorID = ''.concat(n._id, '_ERROR')),
              (n._helperID = ''.concat(n._id, '_HELP')),
              (n._labelID = ''.concat(n._id, '_LABEL')),
              (A += 1),
              n
            )
          }
          return (
            l()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityDescribedBy,
                    a = e.disabled,
                    n = e.errorText,
                    i = e.hasError,
                    o = e.helperText,
                    s = e.options,
                    l = e.style,
                    c = e.testID,
                    u = e.value,
                    d = e.withEmptyOption,
                    p = this.state.isFocused,
                    h = y.b.getLanguage(),
                    m =
                      'ja' === h
                        ? I.a.theme.fontFamilies.japan
                        : S.a.getConstants().isRTL || C.a.isLocaleRTL(h)
                        ? I.a.theme.fontFamilies.rtl
                        : I.a.theme.fontFamilies.normal,
                    _ = void 0 === i ? !!n : i,
                    b = new Set()
                  n && b.add(this._errorID), t && b.add(t), o && b.add(this._helperID)
                  var f = b.size ? r()(b).join(' ') : void 0
                  return k.a.createElement(
                    k.a.Fragment,
                    null,
                    k.a.createElement(
                      T.a,
                      {
                        style: [
                          w.a.border,
                          P.container,
                          a && w.a.disabled,
                          p && w.a.focusedBorderValid,
                          _ && w.a.invalidBorderColor,
                          p && _ && w.a.focusedBorderInvalid,
                          l,
                        ],
                      },
                      this._renderLabel(),
                      k.a.createElement(
                        F,
                        {
                          accessibilityDescribedBy: f,
                          accessibilityInvalid: _,
                          accessibilityLabelledBy: this._labelID,
                          disabled: a,
                          nativeID: this._id,
                          onBlur: this._handleBlur,
                          onChange: this._handleChange,
                          onFocus: this._handleFocus,
                          ref: this._selectRef,
                          style: [P.select, { fontFamily: m }, a && w.a.disabled],
                          testID: c || '',
                          value: u,
                        },
                        d ? k.a.createElement(O, { disabled: !0, style: P.option, value: '' }) : null,
                        s.map(function (e) {
                          var t = e.disabled,
                            a = e.label,
                            n = e.value
                          return k.a.createElement(
                            O,
                            { disabled: t, key: ''.concat(a, '-').concat(n), style: P.option, value: n },
                            a,
                          )
                        }),
                      ),
                      k.a.createElement(E.a, {
                        style: [P.dropdownCaret, p && w.a.validColor, (i || n) && w.a.invalidColor],
                      }),
                    ),
                    o ? this._renderHelperText() : null,
                    _ && n ? this._renderErrorText() : null,
                  )
                },
              },
              {
                key: '_renderLabel',
                value: function () {
                  var e = this.props,
                    t = e.errorText,
                    a = e.hasError,
                    n = e.label,
                    r = this.state.isFocused
                  return k.a.createElement(
                    y.b,
                    {
                      accessibilityRole: 'label',
                      color: a || t ? 'red500' : r ? 'primary' : 'gray700',
                      nativeID: this._labelID,
                      style: P.label,
                    },
                    n,
                  )
                },
              },
              {
                key: '_renderHelperText',
                value: function () {
                  return k.a.createElement(
                    T.a,
                    { accessibilityLiveRegion: 'polite' },
                    k.a.createElement(
                      y.b,
                      { color: 'gray700', nativeID: this._helperID, style: P.helperText },
                      this.props.helperText,
                    ),
                  )
                },
              },
              {
                key: '_renderErrorText',
                value: function () {
                  return k.a.createElement(
                    T.a,
                    { accessibilityLiveRegion: 'polite' },
                    k.a.createElement(
                      y.b,
                      { color: 'red500', nativeID: this._errorID, style: P.helperText },
                      this.props.errorText,
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(k.a.PureComponent)
      b()(N, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (N.propTypes = {})
      var P = I.a.create(function (e) {
        return {
          container: { backgroundColor: e.colors.cellBackground },
          dropdownCaret: {
            color: e.colors.gray700,
            height: ''.concat(1.5, 'em'),
            pointerEvents: 'none',
            position: 'absolute',
            marginTop: '-'.concat(0.75, 'em'),
            top: '50%',
            right: e.spaces.space12,
          },
          label: {
            position: 'absolute',
            fontSize: e.fontSizes.subtext2,
            paddingHorizontal: e.spaces.space8,
            paddingTop: e.spaces.space8,
            pointerEvents: 'none',
            lineHeight: e.lineHeights.subtext2,
          },
          option: { backgroundColor: e.colors.navigationBackground },
          select: {
            appearance: 'none',
            backgroundColor: 'transparent',
            borderRadius: e.borderRadii.none,
            borderWidth: e.borderWidths.none,
            color: e.colors.text,
            cursor: 'pointer',
            fontSize: e.fontSizes.headline2,
            lineHeight: e.lineHeights.headline2,
            margin: 0,
            marginTop: e.spaces.space16,
            outlineStyle: 'none',
            padding: 0,
            paddingTop: e.spaces.space12,
            paddingBottom: e.spaces.space8,
            paddingHorizontal: e.spaces.space8,
          },
          helperText: {
            fontSize: e.fontSizes.subtext2,
            paddingHorizontal: e.spaces.space8,
            paddingTop: e.spaces.space2,
          },
        }
      })
      t.a = N
    },
    CUXw: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        i = a('yiKp'),
        o = a.n(i),
        s = a('VrFO'),
        l = a.n(s),
        c = a('Y9Ll'),
        u = a.n(c),
        d = a('1Pcy'),
        p = a.n(d),
        h = a('5Yy7'),
        m = a.n(h),
        _ = a('2VqO'),
        b = a.n(_),
        f = a('KEM+'),
        v = a.n(f),
        g = (a('2G9S'), a('ERkP')),
        k = a.n(g),
        y = a('XOJV'),
        w = a('E0cF'),
        C = a('rxPX'),
        E = a('0KEI'),
        I = function (e, t) {
          return t.tweetId
        },
        x = Object(C.a)()
          .propsFromState(function () {
            return { tweet: y.a.createHydratedTweetSelector(I) }
          })
          .adjustStateProps(function (e) {
            var t = e.tweet
            return { originalTweet: (t && w.a.getOriginalTweet(t)) || t, tweet: t }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_SELECT_CONTEXT',
              ),
            }
          }),
        S = a('3XMw'),
        T = a.n(S),
        F = a('x5Pi'),
        O = a('fs1G'),
        A = a('kXdP'),
        N = a('BLtI'),
        P = a('MWbm'),
        D = a('htQn'),
        B = a('Znyr'),
        R = a('kY28'),
        L = a('rHpw'),
        V = a('v6aA'),
        M = a('6Rrp'),
        j = a('0ULw'),
        U = a('pu5c'),
        z = T.a.h6beb5fa,
        H = function (e) {
          return e && e.preventDefault()
        },
        W = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(p()(e), '_renderDisabledTweet', function (t) {
                return k.a.createElement(
                  P.a,
                  { style: G.root },
                  e._renderContent(),
                  k.a.createElement(P.a, { style: G.disabledTweetMask }),
                  k.a.createElement(
                    P.a,
                    { style: [G.disabledIconWrapper, G.iconMargins] },
                    k.a.createElement(A.a, { hoverText: t }, q, k.a.createElement(P.a, { style: G.disabledTweetMask })),
                  ),
                )
              }),
              v()(p()(e), '_renderContent', function () {
                var t = e.props,
                  a = t.replyContext,
                  n = t.tweet,
                  r = t.withActions
                if (n) {
                  var i,
                    o = Object(F.f)(n, e.context.loggedInUserId)
                  return k.a.createElement(
                    P.a,
                    { style: G.tweet },
                    k.a.createElement(N.b, {
                      excludeCardUrl: null === (i = n.card) || void 0 === i ? void 0 : i.url,
                      linkableQuotedTweet: !0,
                      onAnalyticsClick: O.a,
                      onAvatarClick: O.a,
                      onEntityClick: O.a,
                      onMediaClick: H,
                      onReplyContextClick: O.a,
                      preventVideoPlayback: !0,
                      replyContext: a,
                      socialContext: o,
                      tweet: n,
                      withActions: r,
                      withActionsDisabled: !0,
                      withSocialContext: !0,
                    }),
                  )
                }
                return null
              }),
              v()(p()(e), '_renderSelectIcon', function (e) {
                return e
                  ? k.a.createElement(M.a, { style: [G.icon, G.iconMargins, G.iconCheckmark] })
                  : k.a.createElement(j.a, { style: [G.icon, G.iconMargins] })
              }),
              v()(p()(e), '_handleOnClick', function () {
                var t = e.props,
                  a = t.onClick,
                  n = t.originalTweet,
                  r = t.tweetId
                a && a((null == n ? void 0 : n.id_str) || r)
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.disabledMessage,
                    a = e.isPartOfDraggedSelection,
                    n = e.isSelected,
                    r = e.showDragCount,
                    i = e.tweet
                  return t
                    ? this._renderDisabledTweet(t)
                    : i
                    ? k.a.createElement(
                        D.a,
                        { onPress: this._handleOnClick, style: G.root },
                        this._renderDragCount(r),
                        this._renderContent(),
                        this._renderSelectIcon(n),
                        a && k.a.createElement(P.a, { style: G.disabledTweetMask }),
                      )
                    : null
                },
              },
              {
                key: '_renderDragCount',
                value: function (e) {
                  return e < 2
                    ? null
                    : k.a.createElement(
                        P.a,
                        { style: G.countBadgeContainer },
                        k.a.createElement(B.a, {
                          count: e,
                          standalone: !0,
                          style: G.countBadge,
                          truncatedCountFormatter: z,
                          unreadCountLabel: function () {
                            return ''
                          },
                          withBorder: !1,
                        }),
                      )
                },
              },
            ]),
            a
          )
        })(k.a.PureComponent)
      v()(W, 'contextType', V.a),
        v()(W, 'defaultProps', {
          replyContext: R.a.ReplyContextTypes.Isolated,
          withActions: !0,
          showDragCount: 0,
          isPartOfDraggedSelection: !1,
          isSelected: !1,
        })
      var G = L.a.create(function (e) {
          return {
            root: { backgroundColor: e.colors.cellBackground, flexDirection: 'row' },
            tweet: { flex: 1 },
            disabledTweetMask: o()(
              o()({}, L.a.absoluteFillObject),
              {},
              { backgroundColor: e.colors.navigationBackground, opacity: '50%' },
            ),
            disabledIconWrapper: { height: '100%' },
            icon: { color: e.colors.gray700 },
            iconMargins: { marginTop: e.spaces.space12, marginRight: e.spaces.space12 },
            iconCheckmark: { color: e.colors.green500 },
            countBadge: { height: e.spaces.space32, width: e.spaces.space32 },
            countBadgeContainer: {
              height: e.spaces.space32,
              width: e.spaces.space32,
              position: 'absolute',
              right: '-'.concat(e.spaces.space16),
              top: '-'.concat(e.spaces.space16),
            },
          }
        }),
        q = k.a.createElement(U.a, { style: G.icon }),
        K = k.a.forwardRef(function (e, t) {
          return k.a.createElement(W, r()({}, e, { ref: t }))
        }),
        Y = x.forwardRef(K)
      t.a = Y
    },
    H9wA: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      })
      var n = a('aWzz'),
        r = {
          accessibilityLabel: n.string,
          accessibilityLiveRegion: Object(n.oneOf)(['assertive', 'none', 'polite']),
          style: n.any,
        }
    },
    K2mq: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('97Jx'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('9D1O'),
        l = a('gPQO')
      t.default = function (e) {
        return o.a.createElement(l.a, r()({}, e, { flowName: 'signup', ocfModule: s.i }))
      }
    },
    KNZn: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        s = a('Y9Ll'),
        l = a.n(s),
        c = a('1Pcy'),
        u = a.n(c),
        d = a('5Yy7'),
        p = a.n(d),
        h = a('2VqO'),
        m = a.n(h),
        _ = a('KEM+'),
        b = a.n(_),
        f = (a('TJCb'), a('7x/C'), a('DZ+c'), a('vrRf'), a('uFXj'), a('ERkP')),
        v = a.n(f),
        g = a('RqPI'),
        k = a('rxPX'),
        y = Object(k.a)().propsFromState(function () {
          return { language: g.o }
        }),
        w = a('3XMw'),
        C = a.n(w),
        E = a('fs1G'),
        I = a('rHpw'),
        x = a('BLtI'),
        S = a('MWbm'),
        T = 'Twitter',
        F = C.a.ea1c87a5({ mention: T }),
        O = {
          text: F,
          created_at: new Date(Date.now() - 6e5).toString(),
          id: 20,
          id_str: '20',
          display_text_range: [0, F.length - 1],
          entities: {
            user_mentions: [
              {
                id_str: '783214',
                name: 'Twitter',
                screen_name: 'Twitter',
                text: T,
                indices: [F.indexOf('@'), F.indexOf('@') + T.length + 1],
              },
            ],
          },
          user: {
            id: 783214,
            id_str: '783214',
            name: 'Twitter',
            screen_name: 'Twitter',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/1013798240683266048/zRim1x6M_normal.jpg',
            verified: !0,
          },
        },
        A = (function (e) {
          p()(a, e)
          var t = m()(a)
          function a(e) {
            var n
            o()(this, a),
              (n = t.call(this, e)),
              b()(u()(n), '_handleTweetAction', function (e) {
                e && e.preventDefault && e.preventDefault()
              })
            var i = n.props,
              s = i.language,
              l = i.tweet
            return (n._tweet = r()(r()(r()({}, O), l), {}, { lang: s || 'en' })), n
          }
          return (
            l()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.withTweetBorder
                  return v.a.createElement(
                    S.a,
                    { accessibilityHidden: !0, style: e && N.tweetBorder },
                    v.a.createElement(x.b, {
                      enableKeyboardShortcuts: !1,
                      onAnalyticsClick: E.a,
                      onAvatarClick: this._handleTweetAction,
                      onEntityClick: this._handleTweetAction,
                      onMediaClick: this._handleTweetAction,
                      onReplyContextClick: this._handleTweetAction,
                      tweet: this._tweet,
                      withActions: !1,
                      withAvatarLink: !1,
                      withTimestampLink: !1,
                      withUserHoverCard: !1,
                    }),
                    v.a.createElement(S.a, { style: I.a.absoluteFill }),
                  )
                },
              },
            ]),
            a
          )
        })(v.a.Component)
      b()(A, 'defaultProps', { tweet: O, withTweetBorder: !1 })
      var N = I.a.create(function (e) {
          return {
            tweetBorder: {
              borderStyle: 'solid',
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.borderColor,
              borderRadius: e.borderRadii.xLarge,
              outlineStyle: 'none',
            },
          }
        }),
        P = y(A)
      t.a = P
    },
    LXAX: function (e, t, a) {
      'use strict'
      a.d(t, 'c', function () {
        return h
      }),
        a.d(t, 'b', function () {
          return m
        }),
        a.d(t, 'a', function () {
          return _
        })
      var n = a('KEM+'),
        r = a.n(n),
        i = a('yiKp'),
        o = a.n(i),
        s = (a('yH/f'), a('oEOe')),
        l = a('Ssj5'),
        c = 'settings/usernames',
        u = 'rweb/settings/usernames/CLEAR_USERNAME_AVAILABILITY',
        d = Object.freeze({
          REQUEST: 'rweb/settings/usernames/FETCH_USERNAMES_REQUEST',
          SUCCESS: 'rweb/settings/usernames/FETCH_USERNAMES_SUCCESS',
          FAILURE: 'rweb/settings/usernames/FETCH_USERNAMES_FAILURE',
        }),
        p = { isLoaded: !1 }
      var h = function (e) {
          return e[c]
        },
        m = function (e) {
          return function (t, a, n) {
            var r = n.api
            return Object(s.b)(t, { params: e, request: r.Settings.usernameAvailable })({
              actionTypes: d,
              context: 'FETCH_SETTINGS_USERNAME_AVAILABLE',
              meta: { username: e.username },
            })
          }
        },
        _ = function (e) {
          return { type: u, meta: e }
        }
      l.a.register(
        r()({}, c, function () {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
            a = arguments.length > 1 ? arguments[1] : void 0
          switch (a.type) {
            case d.REQUEST:
              return o()(o()({}, t), {}, { isLoading: !0 })
            case d.FAILURE:
              return o()(o()({}, t), {}, { isLoading: !1 })
            case d.SUCCESS:
              return o()(o()(o()({}, t), a.payload), {}, { username: a.meta.username, isLoading: !1 })
            case u:
              return {
                isLoading: !1,
                suggestions: null !== (e = a.meta) && void 0 !== e && e.persistSuggestions ? t.suggestions : void 0,
              }
            default:
              return t
          }
        }),
      )
    },
    Lam0: function (e, t, a) {
      'use strict'
      ;(function (e) {
        a.d(t, 'a', function () {
          return T
        })
        var n = a('VrFO'),
          r = a.n(n),
          i = a('Y9Ll'),
          o = a.n(i),
          s = a('1Pcy'),
          l = a.n(s),
          c = a('5Yy7'),
          u = a.n(c),
          d = a('2VqO'),
          p = a.n(d),
          h = a('KEM+'),
          m = a.n(h),
          _ = a('ERkP'),
          b = a.n(_),
          f = a('t+RT'),
          v = a('MWbm'),
          g = a('t62R'),
          k = a('/yvb'),
          y = a('rHpw'),
          w = a('3XMw'),
          C = a.n(w),
          E = C.a.c1df579e,
          I = C.a.b60eba9e,
          x = C.a.ba939777,
          S = C.a.bc6efc72,
          T = (function (t) {
            u()(n, t)
            var a = p()(n)
            function n(t, i) {
              var o
              return (
                r()(this, n),
                (o = a.call(this, t, i)),
                m()(l()(o), '_handlePass', function (e) {
                  var t = o.props.onChange
                  t &&
                    setTimeout(function () {
                      return t(e)
                    }, 1e3)
                }),
                m()(l()(o), '_handleConsent', function () {
                  var e = o.props.onConsent
                  o.setState({ termsAccepted: !0 }), e && e()
                }),
                (o.state = { termsAccepted: !1 }),
                (e.recaptchaOptions = { useRecaptchaNet: !0 }),
                o
              )
            }
            return (
              o()(n, [
                {
                  key: '_renderConsentForm',
                  value: function () {
                    var e = this.props.nextButtonDisabled
                    return b.a.createElement(
                      v.a,
                      null,
                      b.a.createElement(g.b, { style: F.guideCopy }, I),
                      b.a.createElement(
                        v.a,
                        { style: F.button },
                        b.a.createElement(
                          k.a,
                          { disabled: e, onPress: this._handleConsent, size: 'xLarge', type: 'brandOutlined' },
                          E,
                        ),
                      ),
                      b.a.createElement(
                        g.b,
                        { color: 'gray700' },
                        b.a.createElement(
                          C.a.I18NFormatMessage,
                          { $i18n: 'hc37d3ba' },
                          b.a.createElement(g.b, { link: 'https://policies.google.com/privacy' }, S),
                        ),
                      ),
                    )
                  },
                },
                {
                  key: '_renderRecaptcha',
                  value: function () {
                    var e = this.props.withConsentForm
                    return b.a.createElement(
                      b.a.Fragment,
                      null,
                      e
                        ? b.a.createElement(
                            v.a,
                            { style: F.recaptchaTitle },
                            b.a.createElement(g.b, { style: F.guideCopy }, x),
                          )
                        : null,
                      b.a.createElement(
                        v.a,
                        { style: F.container },
                        b.a.createElement(f.a, {
                          onChange: this._handlePass,
                          sitekey: '6LfOP30UAAAAAFBC4jbzu890rTdXBXBNHx9eVZEX',
                        }),
                      ),
                    )
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props.withConsentForm,
                      t = this.state.termsAccepted
                    return e && !t ? this._renderConsentForm() : this._renderRecaptcha()
                  },
                },
              ]),
              n
            )
          })(b.a.Component),
          F = y.a.create(function (e) {
            return {
              container: { margin: 'auto', transitionProperty: 'opacity', transitionDelay: '2s' },
              button: { paddingVertical: e.spaces.space20 },
              guideCopy: { paddingTop: e.spaces.space12 },
              recaptchaTitle: { paddingBottom: e.spaces.space20 },
            }
          })
      }.call(this, a('fRV1')))
    },
    'Mbn/': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('Lsrn'),
        l = a('k/Ka'),
        c = function () {
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
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    'N+xe': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'VerificationLanding', function () {
          return j
        })
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        s = a('1Pcy'),
        l = a.n(s),
        c = a('5Yy7'),
        u = a.n(c),
        d = a('2VqO'),
        p = a.n(d),
        h = a('KEM+'),
        m = a.n(h),
        _ = (a('KqXw'), a('MvUL'), a('ERkP')),
        b = a.n(_),
        f = a('9D1O'),
        v = a('hqKg'),
        g = a('Hw0q'),
        k = a('oEGd'),
        y = Object(g.b)('user_identifier'),
        w = Object(g.b)('phone'),
        C = Object(g.b)('email'),
        E = Object(g.b)('pin_code'),
        I = Object(v.createSelector)(C, y, w, E, function (e, t, a, n) {
          return { email: e, identifier: t, phone: a, pinCode: n }
        }),
        x = { verificationLink: f.A },
        S = Object(k.g)(I, x),
        T = a('kGix'),
        F = a('v//M'),
        O = a('3XMw'),
        A = a.n(O),
        N = a('fs1G'),
        P = a('mCZD'),
        D = a('MWbm'),
        B = a('cmUU'),
        R = a('rHpw'),
        L = A.a.b5474bd2,
        V = A.a.a9b8fb38,
        M = A.a.j24c37b2,
        j = (function (e) {
          u()(a, e)
          var t = p()(a)
          function a(e) {
            var n
            return (
              r()(this, a),
              (n = t.call(this, e)),
              m()(l()(n), '_render', function () {
                return b.a.createElement(B.a, {
                  actionLabel: M,
                  headline: n.state.title || '',
                  onAction: n._handleCloseWindow,
                  onClose: n._handleCloseWindow,
                  subtext: n.state.message || '',
                  withCloseButton: !1,
                })
              }),
              m()(l()(n), '_handleCloseWindow', function () {
                window && window.close(), n.props.history.replace('/')
              }),
              (n.state = { title: void 0, message: void 0, fetchStatus: T.a.LOADING }),
              n
            )
          }
          return (
            o()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.email,
                    n = t.history,
                    r = t.identifier,
                    i = t.location,
                    o = t.phone,
                    s = t.pinCode,
                    l = t.verificationLink
                  return (
                    n.replace(i.pathname),
                    l({ user_identifier: r, email: a, phone: o, pin_code: s })
                      .then(function (t) {
                        return e.setState({
                          fetchStatus: t.success ? T.a.LOADED : T.a.FAILED,
                          title: t.title,
                          message: t.message,
                        })
                      })
                      .catch(function () {
                        return e.setState({ title: L, message: V, fetchStatus: T.a.FAILED })
                      })
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.history
                  return b.a.createElement(
                    P.a,
                    { hideLogo: !0, history: e },
                    b.a.createElement(
                      D.a,
                      { style: U.root },
                      b.a.createElement(F.a, {
                        fetchStatus: this.state.fetchStatus,
                        onRequestRetry: N.a,
                        render: this._render,
                        renderFailure: this._render,
                        retryable: !1,
                      }),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(b.a.Component),
        U = R.a.create(function (e) {
          return { root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 } }
        })
      t.default = S(j)
    },
    P68U: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'MediaPickerWithPreview', function () {
          return w
        })
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        s = a('1Pcy'),
        l = a.n(s),
        c = a('5Yy7'),
        u = a.n(c),
        d = a('2VqO'),
        p = a.n(d),
        h = a('KEM+'),
        m = a.n(h),
        _ = (a('2G9S'), a('hCOa'), a('87if'), a('hBpG'), a('7x/C'), a('jQ3i'), a('x4t0'), a('z84I'), a('ERkP')),
        b = a.n(_),
        f = a('AspN'),
        v = a('rxPX'),
        g = Object(v.a)().propsFromActions(function () {
          return { addMedia: f.b, processMultipleMedia: f.g }
        }),
        k = a('2Daw'),
        y = a('VPdC'),
        w = (function (e) {
          u()(a, e)
          var t = p()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(l()(e), '_handleAddMediaFiles', function (t) {
                var a = e.props,
                  n = a.addMedia,
                  r = a.location,
                  i = a.onChange,
                  o = a.onFailure,
                  s = a.processMultipleMedia,
                  l = e._getAcceptedFileInputs(),
                  c = Array.from(t).find(function (e) {
                    return l.includes(e.type)
                  })
                c &&
                  n([c], { location: r }).then(function (e) {
                    i &&
                      i(
                        e.map(function (e) {
                          return e.id
                        }),
                      ),
                      s(e, { onFailure: o })
                  })
              }),
              m()(l()(e), '_getAcceptedFileInputs', function () {
                var t = e.props,
                  a = t.acceptGifs,
                  n = t.acceptVideo
                return Object(y.b)({ acceptGifs: a, acceptVideo: n })
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
                    c = e.onCrop,
                    u = e.onRemove,
                    d = e.rootStyle
                  return b.a.createElement(k.a, {
                    acceptGifs: t,
                    acceptVideo: a,
                    accessibilityLabel: n,
                    aspectRatio: r,
                    borderRadius: i,
                    currentContent: o,
                    maskStyle: s,
                    mediaItem: l,
                    onAddMediaFiles: this._handleAddMediaFiles,
                    onCrop: c,
                    onRemove: u,
                    rootStyle: d,
                    withDragDrop: !0,
                  })
                },
              },
            ]),
            a
          )
        })(b.a.Component)
      m()(w, 'defaultProps', { acceptGifs: !1, acceptVideo: !1 })
      var C = g(w)
      t.default = C
    },
    P7wY: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      }),
        a.d(t, 'b', function () {
          return i
        })
      var n = function (e, t, a) {
          var n = new Date(),
            r = n.getFullYear() - e,
            i = n.getMonth() + 1 - t
          if (i < 0) r -= 1
          else if (0 === i) {
            n.getDate() - a < 0 && (r -= 1)
          }
          return r
        },
        r = function (e, t, a) {
          return !!(e && t && a) && n(e, t, a) < 18
        },
        i = function () {
          return new Date().getFullYear() - 120
        }
    },
    RjwM: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('Lsrn'),
        l = a('k/Ka'),
        c = function () {
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
                d: 'M18.707 13.293c-.39-.39-1.023-.39-1.414 0L13 17.586V5c0-.553-.447-1-1-1s-1 .447-1 1v12.586l-4.293-4.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293l6-6c.39-.39.39-1.023 0-1.414z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    S8sr: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return N
      })
      var n = a('yiKp'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        s = a('Y9Ll'),
        l = a.n(s),
        c = a('1Pcy'),
        u = a.n(c),
        d = a('5Yy7'),
        p = a.n(d),
        h = a('2VqO'),
        m = a.n(h),
        _ = a('KEM+'),
        b = a.n(_),
        f = (a('Blm6'), a('KqXw'), a('Ysgh'), a('z84I'), a('jQ3i'), a('x4t0'), a('ERkP')),
        v = a.n(f),
        g = a('nS1w'),
        k = a('t62R'),
        y = a('p+r5'),
        w = a('3XMw'),
        C = a.n(w),
        E = a('6XNv'),
        I = a('rHpw'),
        x = a('aITJ'),
        S = a('MWbm'),
        T = C.a.jf83d091,
        F = C.a.af4abf2f,
        O = C.a.b871f28f,
        A = 1,
        N = (function (e) {
          p()(a, e)
          var t = m()(a)
          function a(e) {
            var n
            o()(this, a),
              (n = t.call(this, e)),
              b()(u()(n), '_handleSelectorChange', function (e, t) {
                var a = n.props,
                  i = a.day,
                  o = a.month,
                  s = a.year,
                  l = r()(r()({}, { day: i, month: o, year: s }), {}, b()({}, e, parseInt(t, 10)))
                n.props.onChange(l)
              }),
              b()(u()(n), '_handleDayChange', function (e) {
                n._handleSelectorChange('day', e)
              }),
              b()(u()(n), '_handleMonthChange', function (e) {
                n._handleSelectorChange('month', e)
              }),
              b()(u()(n), '_handleYearChange', function (e) {
                n._handleSelectorChange('year', e)
              }),
              b()(u()(n), '_handleDateChange', function (e) {
                var t = e.target.value.split('-'),
                  a = { year: parseInt(t[0], 10), month: parseInt(t[1], 10), day: parseInt(t[2], 10) }
                n.props.onChange(a)
              })
            var i = e.day,
              s = e.maxSelectableYear,
              l = e.minSelectableYear,
              c = e.month,
              d = e.year
            return (
              (n._errorID = 'DATE_INPUT_'.concat(A, '_ERROR')),
              (n._monthOptions = g.c()),
              (n._nativeDefaultValue = g.e(i, c, d)),
              (n._nativeMaxDate = g.e(31, 12, s)),
              (n._nativeMinDate = g.e(1, 1, l)),
              (A += 1),
              n
            )
          }
          return (
            l()(a, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    a = t.day,
                    n = t.month,
                    r = t.onChange,
                    i = t.year,
                    o = n && n !== e.month,
                    s = i && i !== e.year
                  ;(o || s) &&
                    (g
                      .b(n, i)
                      .map(function (e) {
                        return parseInt(e.value, 10)
                      })
                      .includes(a) ||
                      r({ month: n, year: i, day: void 0 }))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.errorMessage
                  return v.a.createElement(
                    S.a,
                    null,
                    x.b.isMobileOS() ? this._renderNativeDateInput() : this._renderSelectors(),
                    e ? v.a.createElement(k.b, { color: 'red500', nativeID: this._errorID }, e) : null,
                  )
                },
              },
              {
                key: '_renderSelectors',
                value: function () {
                  var e = this.props,
                    t = e.day,
                    a = e.month,
                    n = e.year,
                    r = e.errors,
                    i = void 0 === r ? {} : r,
                    o = e.label,
                    s = e.autofocus,
                    l = e.monthSelectorTestID,
                    c = e.daySelectorTestID,
                    u = e.yearSelectorTestID,
                    d = e.style,
                    p = e.minSelectableYear,
                    h = e.maxSelectableYear,
                    m = g.b(a, n),
                    _ = g.d(p, h, t, a)
                  return v.a.createElement(
                    S.a,
                    { accessibilityLabel: o, accessibilityRole: 'group', style: [P.selectorsContainer, d] },
                    v.a.createElement(E.a, {
                      accessibilityDescribedBy: i.month ? this._errorID : void 0,
                      autofocus: s,
                      hasError: i.month,
                      label: F,
                      onChange: this._handleMonthChange,
                      options: this._monthOptions,
                      style: P.monthSelector,
                      testID: l,
                      value: a ? ''.concat(a) : '',
                      withEmptyOption: !0,
                    }),
                    v.a.createElement(E.a, {
                      accessibilityDescribedBy: i.day ? this._errorID : void 0,
                      hasError: i.day,
                      label: T,
                      onChange: this._handleDayChange,
                      options: m,
                      style: P.daySelector,
                      testID: c,
                      value: t ? ''.concat(t) : '',
                      withEmptyOption: !0,
                    }),
                    v.a.createElement(E.a, {
                      accessibilityDescribedBy: i.year ? this._errorID : void 0,
                      hasError: i.year,
                      label: O,
                      onChange: this._handleYearChange,
                      options: _,
                      style: P.yearSelector,
                      testID: u,
                      value: n ? ''.concat(n) : '',
                      withEmptyOption: !0,
                    }),
                  )
                },
              },
              {
                key: '_renderNativeDateInput',
                value: function () {
                  var e = this.props.label
                  return v.a.createElement(y.a, {
                    defaultValue: this._nativeDefaultValue,
                    label: e,
                    max: this._nativeMaxDate,
                    min: this._nativeMinDate,
                    name: e,
                    numberOfLines: 1,
                    onChange: this._handleDateChange,
                    style: P.dateInputRoot,
                    type: 'date',
                  })
                },
              },
            ]),
            a
          )
        })(v.a.Component),
        P = I.a.create(function (e) {
          return {
            selectorsContainer: { flexDirection: 'row', marginVertical: e.spaces.space16 },
            monthSelector: { flexGrow: 2, marginRight: e.spaces.space12 },
            daySelector: { flexGrow: 1, marginRight: e.spaces.space12 },
            yearSelector: { flexGrow: 1 },
            dateInputRoot: { paddingHorizontal: 0 },
          }
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
        c = function () {
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
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    TEoO: function (e, t, a) {
      'use strict'
      var n = a('m3Bd'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('5UID'),
        l = a('3GUV'),
        c = a('iBK2'),
        u = ['accessibilityTitle'],
        d = o.a.createElement(l.a, null),
        p = function (e) {
          var t = e.accessibilityTitle,
            a = r()(e, u),
            n = o.a.createElement(c.b, a)
          return t ? o.a.createElement(s.a, { title: t }, n) : n
        }
      ;(p.defaultProps = { footer: d }), (t.a = p)
    },
    TpKd: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return i
      }),
        a.d(t, 'c', function () {
          return o
        }),
        a.d(t, 'b', function () {
          return s
        })
      a('2G9S'), a('KqXw'), a('Ysgh')
      var n = a('mrHL'),
        r = 'external_referer'
      function i(e) {
        return Object(n.d)({ cookieName: r, featureSwitches: e })
      }
      function o(e, t) {
        var a = (t && t.encryptedReferralDetails) || '',
          i = (t && t.encryptedReferer) || '',
          o = t && void 0 !== t.referralType ? ''.concat(t.referralType) : ''
        if (a || i || o) {
          var s = ''.concat(encodeURIComponent(i), '|').concat(o, '|').concat(encodeURIComponent(a))
          Object(n.e)(r, s, {
            cookieOptions: {
              maxAge: 604800,
              encode: function (e) {
                return e
              },
            },
            featureSwitches: e,
          })
        }
      }
      var s = function (e) {
        var t = i(e)
        if (t && t.split('|').length > 1) {
          var a = t.split('|')
          return { encryptedReferer: a[0], referralType: a[1], encryptedReferralDetails: a[2] }
        }
      }
    },
    UnyZ: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      })
      a('yH/f')
      var n = Object.freeze({ Active: 'active', Expand: 'expand', Remove: 'remove' })
    },
    UpKB: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        s = a('Y9Ll'),
        l = a.n(s),
        c = a('1Pcy'),
        u = a.n(c),
        d = a('5Yy7'),
        p = a.n(d),
        h = a('2VqO'),
        m = a.n(h),
        _ = a('KEM+'),
        b = a.n(_),
        f = (a('2G9S'), a('ho0z'), a('0zG9'), a('ERkP')),
        v = a.n(f),
        g = a('/yvb'),
        k = a('hUVV'),
        y = a('3XMw'),
        w = a.n(y),
        C = a('iKTg'),
        E = a('TaB8'),
        I = a('1zbE'),
        x = a('Ukpf'),
        S = a('cnVF'),
        T = a('TnY3'),
        F = a('0+0m'),
        O = a('v6aA'),
        A = a('2qJZ'),
        N = w.a.ib65b1c6,
        P = w.a.f55cebb7,
        D = w.a.g61ed8a4,
        B = { clientId: F.a, scope: 'name email', usePopup: !0 },
        R = (function (e) {
          p()(a, e)
          var t = m()(a)
          function a() {
            var e
            o()(this, a)
            for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++) i[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(u()(e), 'state', { isScriptLoaded: !1 }),
              b()(
                u()(e),
                '_is3rdPartyIntegrationDisabled',
                Object(E.a)('responsive_web_3rd_party_category_sign_in_with_apple', e.context.featureSwitches),
              ),
              b()(u()(e), '_initAppleIDAuth', function () {
                var t = window.AppleID,
                  a = e.props.fetchSsoInitToken,
                  n = Object(A.c)(e.context.featureSwitches) ? 'https://'.concat(A.b) : 'https://'.concat(A.a)
                t &&
                  a(S.A.Apple).then(function (e) {
                    var a = e.state
                    t.auth.init(r()(r()({}, B), {}, { redirectURI: n, state: a }))
                  })
              }),
              b()(u()(e), '_handleOnPress', function () {
                var t = window.AppleID,
                  a = e.props,
                  n = a.analytics,
                  r = a.buttonState,
                  i = a.history,
                  o = a.personalizationSettings,
                  s = a.shouldPropagateP13nSettings,
                  l = a.ssoInitTokens,
                  c = o || {},
                  u = c.allowCookieUse,
                  d = c.allowDeviceAccess,
                  p = c.allowPartnerships,
                  h = c.allowPersonalization
                n.scribe({ component: 'apple_sign_in', element: r, action: 'click' }),
                  t.auth
                    .signIn()
                    .then(function (e) {
                      n.scribe({ component: 'apple_sign_in', element: r, action: 'success' })
                      var t = e.user && e.user.name && e.user.name.firstName && e.user.name.lastName
                      i.push({
                        pathname: '/i/flow/single_sign_on',
                        state: {
                          input: {
                            cookie_personalization_settings: s && {
                              allow_cookie_use: !!u,
                              allow_device_personalization: !!d,
                              allow_partnerships: !!p,
                              allow_ads_personalization: !!h,
                            },
                            requested_variant: JSON.stringify({
                              display_name: t && ''.concat(e.user.name.firstName, ' ').concat(e.user.name.lastName),
                              id_token: e.authorization.id_token,
                              provider: S.A.Apple,
                              state: l[S.A.Apple],
                            }),
                          },
                        },
                      })
                    })
                    .catch(function (t) {
                      var a = e.props.addToast
                      t.error !== F.f
                        ? (n.scribe({ component: 'apple_sign_in', element: r, action: 'failure' }), a({ text: D }))
                        : n.scribe({ component: 'apple_sign_in', element: 'auth', action: 'user_closed_popup' })
                    })
              }),
              e
            )
          }
          return (
            l()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  this._is3rdPartyIntegrationDisabled ||
                    x.a.inject({
                      callback: function () {
                        e._initAppleIDAuth(), e.setState({ isScriptLoaded: !0 })
                      },
                      scriptId: 'signInWithAppleJsLibrary',
                      src: 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js',
                    })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.buttonSize,
                    a = e.buttonState,
                    n = e.style,
                    r = this.state.isScriptLoaded,
                    i = a === I.a.SignUp ? N : P
                  return this._is3rdPartyIntegrationDisabled
                    ? null
                    : v.a.createElement(g.a, {
                        backgroundColor: 'white',
                        borderColor: 'gray200',
                        children: i,
                        color: 'gray1100',
                        disabled: !r,
                        icon: v.a.createElement(C.a, null),
                        onPress: this._handleOnPress,
                        size: t,
                        style: n,
                      })
                },
              },
            ]),
            a
          )
        })(v.a.PureComponent)
      b()(R, 'contextType', O.a),
        b()(R, 'defaultProps', { buttonSize: 'xLarge', buttonState: 'signup' }),
        (t.a = Object(T.a)(Object(k.a)(R)))
    },
    'aV/s': function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        s = a('1Pcy'),
        l = a.n(s),
        c = a('5Yy7'),
        u = a.n(c),
        d = a('2VqO'),
        p = a.n(d),
        h = a('KEM+'),
        m = a.n(h),
        _ = (a('2G9S'), a('hBvt'), a('uFXj'), a('ERkP')),
        b = a.n(_),
        f = a('t62R'),
        v = a('3XMw'),
        g = a.n(v),
        k = a('I4+6'),
        y = a('cm6r'),
        w = a('UnyZ'),
        C = a('rHpw'),
        E = a('MWbm'),
        I = a('hOZg'),
        x = a('iY63'),
        S = a('IMYl'),
        T = { active: g.a.e557ad8d, expand: g.a.e3a58c27, remove: g.a.h517e8d8 },
        F = (function (e) {
          u()(a, e)
          var t = p()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(l()(e), '_handleSecondaryClick', function () {
                var t = e.props.secondaryAction
                t && t.onSecondaryClick()
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
                    t = e.accessibilityLabel,
                    a = e.avatar,
                    n = e.compact,
                    r = e.disabled,
                    i = e.link,
                    o = e.mode,
                    s = e.onClick,
                    l = e.secondaryAction,
                    c = e.selected,
                    u = e.style,
                    d = e.text,
                    p = this._renderIcon(!0, o),
                    h = l && this._renderIcon(!1, l.mode),
                    m = [O.root, n && O.compact, r && O.disabled, c && O.selected, u],
                    _ = [O.content, p && O.withIcon, a && ((n && O.withAvatarImageCompact) || O.withAvatarImage)],
                    v = k.a.generate({
                      backgroundColor: c ? C.a.theme.colors.primary : 'transparent',
                      color: c ? C.a.theme.colors.white : C.a.theme.colors.primary,
                    })
                  return b.a.createElement(
                    E.a,
                    { style: m },
                    b.a.createElement(
                      y.a,
                      {
                        accessibilityLabel: t || (o ? T[o] : ''),
                        disabled: r,
                        interactiveStyles: v,
                        link: i,
                        onPress: s,
                        style: _,
                      },
                      this._renderAvatar(),
                      b.a.createElement(
                        f.b,
                        {
                          color: c ? 'whiteOnColor' : 'normal',
                          numberOfLines: 1,
                          selectable: !1,
                          style: O.text,
                          weight: 'bold',
                        },
                        d,
                      ),
                      p,
                    ),
                    l
                      ? b.a.createElement(
                          y.a,
                          {
                            accessibilityLabel: l.accessibilityLabel || (l.mode ? T[l.mode] : ''),
                            disabled: r || l.disabled,
                            hoverLabel: { label: l.hoverLabel || (l.mode ? T[l.mode] : '') },
                            interactiveStyles: v,
                            onPress: this._handleSecondaryClick,
                            style: O.secondaryControl,
                          },
                          b.a.createElement(E.a, { style: O.secondaryBorder }, h),
                        )
                      : null,
                  )
                },
              },
              {
                key: '_renderIcon',
                value: function () {
                  var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    a = this.props.selected,
                    n = [O.icon, a && O.iconSelected],
                    r = [O.icon]
                  switch (t) {
                    case w.a.Remove:
                      return b.a.createElement(I.a, { style: [O.dismissIcon, e && n] })
                    case w.a.Expand:
                      return b.a.createElement(x.a, { style: e ? n : r })
                    case w.a.Active:
                      return b.a.createElement(S.a, { style: n })
                    default:
                      return null
                  }
                },
              },
              {
                key: '_renderAvatar',
                value: function () {
                  var e = this.props,
                    t = e.avatar,
                    a = e.compact
                  return t
                    ? b.a.createElement(E.a, { style: [O.avatarContainer, a ? O.avatarCompact : O.avatar] }, t)
                    : null
                },
              },
            ]),
            a
          )
        })(b.a.PureComponent)
      m()(F, 'defaultProps', { compact: !1, disabled: !1, selected: !1 })
      var O = C.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            borderColor: e.colors.gray200,
            borderRadius: e.borderRadii.infinite,
            borderStyle: 'solid',
            borderWidth: '1px',
            flexDirection: 'row',
            minHeight: e.spaces.space40,
            overflow: 'hidden',
          },
          content: {
            alignItems: 'center',
            flexDirection: 'row',
            flexGrow: 1,
            flexShrink: 1,
            paddingHorizontal: e.spaces.space16,
          },
          text: { width: '100%' },
          compact: { minHeight: e.spaces.space32 },
          disabled: { borderColor: e.colors.gray50 },
          selected: { backgroundColor: e.colors.primary, borderColor: e.colors.primary },
          avatar: { height: e.spaces.space32, width: e.spaces.space32 },
          avatarCompact: { height: e.spaces.space24, width: e.spaces.space24 },
          avatarContainer: { justifyContent: 'center', marginRight: e.spaces.space8 },
          withAvatarImage: { paddingLeft: 'calc('.concat(e.spaces.space2, ' * 2)') },
          withAvatarImageCompact: { paddingLeft: 'calc('.concat(e.spaces.space1, ' * 3)') },
          icon: { color: e.colors.primary, flexShrink: 0, marginLeft: e.spaces.space12 },
          iconSelected: { color: e.colors.whiteOnColor },
          withIcon: { paddingRight: e.spaces.space12 },
          dismissIcon: { color: e.colors.gray300 },
          secondaryControl: { flexShrink: 0, justifyContent: 'center' },
          secondaryBorder: {
            borderLeftColor: e.colors.borderColor,
            borderLeftWidth: e.borderWidths.small,
            paddingHorizontal: e.spaces.space12,
          },
        }
      })
      t.a = F
    },
    doI8: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return s
      })
      var n = a('yiKp'),
        r = a.n(n),
        i = a('WpDa'),
        o = a('ZNT5')
      t.b = function (e) {
        var t = e.endpointParams,
          a = e.endpointUrl,
          n = e.timelineId
        return Object(o.a)({
          timelineId: n,
          getEndpoint: function (e) {
            return e.URT.fetchGeneric
          },
          getEndpointParams: function (e) {
            var n = e.count,
              i = e.cursor
            return r()(r()({}, t), {}, { cursor: 'string' == typeof i ? i : void 0, count: n, endpointUrl: a })
          },
          context: 'FETCH_TIMELINE',
          perfKey: 'generic',
        })
      }
      var s = function (e) {
        return Object(o.a)({
          timelineId: 'generic-graphql-timeline-'.concat(e),
          getEndpoint: function (e) {
            return e.Graphql.fetchGenericTimelineById
          },
          getEndpointParams: function (t) {
            var a = t.count,
              n = t.cursor
            return { cursor: 'string' == typeof n ? n : void 0, count: a, timelineId: e }
          },
          formatResponse: i.a,
          context: 'FETCH_GENERIC_TIMELINE_GQL',
          perfKey: 'genericGQL',
        })
      }
    },
    fS8x: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        s = a('Y9Ll'),
        l = a.n(s),
        c = a('1Pcy'),
        u = a.n(c),
        d = a('5Yy7'),
        p = a.n(d),
        h = a('2VqO'),
        m = a.n(h),
        _ = a('KEM+'),
        b = a.n(_),
        f = a('/NU0'),
        v = a('rxPX'),
        g = a('AspN'),
        k = function (e, t) {
          return t.media ? t.media : Object(f.a)(t.mediaId) ? Object(g.k)(e, t.mediaId)[0] : void 0
        },
        y = function (e, t) {
          return void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null
        },
        w = Object(v.a)()
          .propsFromState(function () {
            return { media: k, mediaId: y }
          })
          .propsFromActions(function () {
            return { processMedia: g.f, updateMediaUpload: g.o }
          })
          .withAnalytics({ page: 'media', section: 'edit' }),
        C = a('jHSc'),
        E = a('3XMw'),
        I = a.n(E),
        x = a('EeFI'),
        S = 'applyButton',
        T = a('/yvb'),
        F = a('rHpw'),
        O = I.a.gd80afba,
        A = I.a.a753a87f,
        N = (function (e) {
          p()(a, e)
          var t = m()(a)
          function a(e) {
            var n
            return (
              o()(this, a),
              (n = t.call(this, e)),
              b()(u()(n), '_getMedia', function () {
                var e = n.props.media
                return e && e.mediaFile && e.mediaFile.isImage ? e : null
              }),
              b()(u()(n), '_renderAppBarRightControl', function () {
                var e = n.state.isProcessing
                return r.a.createElement(
                  T.a,
                  { disabled: e, onPress: n._handleApplyButtonClick, size: 'small', testID: S, type: 'primaryFilled' },
                  A,
                )
              }),
              b()(u()(n), '_handleBackClick', function () {
                var e = n.props,
                  t = e.analytics,
                  a = e.onCancel
                t.scribe({ action: 'cancel' }), a && a()
              }),
              b()(u()(n), '_handleApplyButtonClick', function () {
                var e = n.props.onCropDone,
                  t = n._cropper.current
                if (t) {
                  var a = n.props,
                    r = a.analytics,
                    i = a.media,
                    o = a.mediaId,
                    s = a.onDone,
                    l = a.processMedia,
                    c = a.updateMediaUpload
                  n.setState({ isProcessing: !0 })
                  var u = t.getCropData(),
                    d = (i || {}).originalMediaFile,
                    p = !d || (0 === u.top && 0 === u.left && u.width === d.width && u.height === d.height)
                  Object(f.a)(o) &&
                    (e
                      ? (e(u), s())
                      : (c({ id: o, cropData: p ? void 0 : u }),
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
                    C.b,
                    {
                      backButtonType: 'back',
                      containerStyle: P.root,
                      documentTitle: n || O,
                      history: a,
                      onBackClick: this._handleBackClick,
                      rightControl: this._renderAppBarRightControl(),
                      title: n || O,
                    },
                    r.a.createElement(x.a, {
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
        P = F.a.create(function (e) {
          return { root: { flexShrink: 1, height: 650 } }
        }),
        D = w(N),
        B = a('X8FW'),
        R = F.a.create(function (e) {
          return { modal: { width: 600, maxWidth: '90vw' } }
        })
      t.a = function (e) {
        return r.a.createElement(
          B.b,
          { clickMaskToClose: !1, modalSize: 'fitChildren', style: R.modal },
          r.a.createElement(D, e),
        )
      }
    },
    gPQO: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        i = a('yiKp'),
        o = a.n(i),
        s = a('VrFO'),
        l = a.n(s),
        c = a('Y9Ll'),
        u = a.n(c),
        d = a('1Pcy'),
        p = a.n(d),
        h = a('5Yy7'),
        m = a.n(h),
        _ = a('2VqO'),
        b = a.n(_),
        f = a('KEM+'),
        v = a.n(f),
        g =
          (a('+KXO'),
          a('KqXw'),
          a('MvUL'),
          a('hBpG'),
          a('7x/C'),
          a('3voH'),
          a('z84I'),
          a('JtPf'),
          a('jwue'),
          a('+oxZ'),
          a('ERkP')),
        k = a.n(g),
        y = (a('hBvt'), a('q82E')),
        w = (a('ho0z'), a('+/5o')),
        C = a('m3Bd'),
        E = a.n(C),
        I = a('UpKB'),
        x = a('/yvb'),
        S = a('kG2l'),
        T = a('0+0m'),
        F = a('1zbE'),
        O = a('ddV6'),
        A = a.n(O),
        N = (a('Ysgh'), a('MWbm')),
        P = a('t62R'),
        D = a('rHpw')
      function B(e) {
        var t = e.number
        return k.a.createElement(
          N.a,
          { style: R.badge },
          k.a.createElement(P.b, { color: 'buttonWhite', weight: 'bold' }, t),
        )
      }
      var R = D.a.create(function (e) {
          return {
            badge: {
              backgroundColor: e.colors.buttonBlack,
              borderRadius: e.borderRadii.infinite,
              height: e.spaces.space28,
              width: e.spaces.space28,
              marginRight: e.spaces.space20,
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            },
          }
        }),
        L = a('iKTg'),
        V = a('jmcQ'),
        M = a('wz7L'),
        j = a('xrkw'),
        U = a('vMn4'),
        z = a('yZDr'),
        H = a('+1/s'),
        W = a('Lsrn'),
        G = a('k/Ka'),
        q = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(G.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [W.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            k.a.createElement(
              'g',
              null,
              k.a.createElement('path', {
                d: 'M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.413 0-.75.336-.75.75v15.5c0 .413.337.75.75.75h15.5c.413 0 .75-.337.75-.75V4.25c0-.414-.337-.75-.75-.75H4.25z',
              }),
              k.a.createElement('path', {
                d: 'M12 14.496c-1.015 0-2.15-.115-2.898-.97-.623-.712-.828-1.79-.625-3.298.286-2.13 1.603-3.402 3.523-3.402s3.237 1.272 3.523 3.402c.203 1.507-.002 2.586-.625 3.3-.747.853-1.883.968-2.898.968zm0-6.17c-1.45 0-1.908 1.143-2.037 2.102-.14 1.04-.05 1.75.27 2.112.278.32.807.456 1.768.456s1.49-.137 1.77-.456c.317-.362.408-1.073.27-2.112-.132-.96-.59-2.102-2.04-2.102zm6.107 11.794c-.65-2.608-3.16-4.43-6.107-4.43s-5.458 1.82-6.108 4.432c-.107.437-.058.892.14 1.28.132.262.396.412.67.412.113 0 .23-.026.338-.08.37-.19.518-.64.33-1.01-.035-.068-.043-.155-.02-.24.48-1.94 2.394-3.294 4.65-3.294s4.17 1.354 4.652 3.293c.022.092.012.186-.03.256-.21.354-.094.815.263 1.026.12.07.252.105.382.105.256 0 .506-.13.646-.366.245-.412.315-.903.194-1.384z',
              }),
            ),
          )
        }
      q.metadata = { width: 24, height: 24 }
      var K = q,
        Y = a('4BrD'),
        X = a('6s7X'),
        J = {
          logo_apple: L.a,
          logo_google_g_color: V.a,
          people_stroke: M.a,
          bar_chart: j.a,
          money: U.a,
          sparkle_stroke: z.a,
          topics_stroke: H.a,
          photo_person_stroke: K,
          promoted_pill_stroke: Y.a,
          information_circle: X.a,
        },
        Z = function (e) {
          var t = e.icon,
            a = e.style
          !(t in J) &&
            t.startsWith('number_') &&
            (J[t] = (function (e) {
              if (!e.startsWith('number_'))
                return function () {
                  return null
                }
              var t = e.split('number_'),
                a = A()(t, 2)[1]
              return function () {
                return k.a.createElement(B, { number: a })
              }
            })(t))
          var n = J[t]
          return n ? k.a.createElement(n, { style: a }) : null
        },
        Q = (a('2G9S'), a('KOtZ'), a('M+/F'), a('LW0h'), a('YlqV')),
        $ = function (e) {
          return Object(G.a)('span', e)
        },
        ee = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(p()(e), '_textArray', function () {
                var t = e.props,
                  a = t.color,
                  n = t.entities,
                  i = t.size,
                  o = t.subtaskInputs,
                  s = t.text,
                  l = t.weight
                return (
                  n &&
                  n.reduce(function (t, c, u) {
                    var d,
                      p = c.from_index,
                      h = c.navigation_link,
                      m = c.subtask_data_reference,
                      _ = c.to_index,
                      b = n[u - 1] ? n[u - 1].to_index : 0,
                      f = k.a.createElement(
                        P.b,
                        { color: a, key: ''.concat(b, ',').concat(p), size: i, weight: l },
                        s && s.slice(b, p),
                      ),
                      v = ''.concat(p, ',').concat(_)
                    if (h) {
                      var g = h.link_type === y.m.ChromelessWeb,
                        w = { key: v, size: i, weight: l, withInteractiveStyling: !0 },
                        C =
                          g && h.url
                            ? { link: { external: !0, pathname: h.url } }
                            : { accessibilityRole: 'button', color: 'link', onClick: e._handleClick(h) }
                      d = k.a.createElement(P.b, r()({}, C, w), s && s.slice(p, _))
                    } else d = m ? k.a.createElement(P.b, { color: a, key: v, size: i, weight: l }, Object(Q.e)(o, m)) : k.a.createElement(P.b, { color: a, key: v, size: i, weight: l }, s && s.slice(p, _))
                    var E = [
                      f,
                      d,
                      u === n.length - 1
                        ? k.a.createElement(P.b, { color: a, key: ''.concat(_), size: i, weight: l }, s && s.slice(_))
                        : null,
                    ].filter(function (e) {
                      return !!e
                    })
                    return t.concat(E)
                  }, [])
                )
              }),
              v()(p()(e), '_handleClick', function (t) {
                return function (a) {
                  a.preventDefault()
                  var n = e.props,
                    r = n.onClick,
                    i = n.onNavigate
                  i ? i(t) : r && r()
                }
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.entities
                  return e && e.length > 0 ? this._renderTextArray() : this._renderText()
                },
              },
              {
                key: '_renderTextArray',
                value: function () {
                  var e = this.props,
                    t = e.align,
                    a = e.style,
                    n = e.testID
                  return k.a.createElement($, { align: t, style: a, testID: n }, this._textArray())
                },
              },
              {
                key: '_renderText',
                value: function () {
                  var e = this.props,
                    t = e.align,
                    a = e.color,
                    n = e.size,
                    r = e.style,
                    i = e.testID,
                    o = e.text,
                    s = e.weight
                  return k.a.createElement(P.b, { align: t, color: a, size: n, style: r, testID: i, weight: s }, o)
                },
              },
            ]),
            a
          )
        })(k.a.PureComponent),
        te = a('LbZ7'),
        ae = D.a.create(function (e) {
          return {
            separatorContainer: { width: '100%' },
            separatorColumn: { flex: 1, justifyContent: 'center' },
            separator: {
              width: '100%',
              height: '1px',
              backgroundColor: e.colors.gray200,
              marginTop: e.spaces.space8,
              marginBottom: e.spaces.space8,
            },
            separatorText: { 'flex-basis': 'auto' },
          }
        }),
        ne = function (e) {
          var t = e.label,
            a = e.onNavigate,
            n = e.subtaskInputs
          return t
            ? k.a.createElement(
                te.a,
                { style: ae.separatorContainer, withGutter: !0 },
                k.a.createElement(N.a, { style: ae.separatorColumn }, k.a.createElement(N.a, { style: ae.separator })),
                k.a.createElement(
                  ee,
                  r()({ style: ae.separatorText }, t, { onNavigate: a, size: 'headline2', subtaskInputs: n }),
                ),
                k.a.createElement(N.a, { style: ae.separatorColumn }, k.a.createElement(N.a, { style: ae.separator })),
              )
            : k.a.createElement(N.a, { style: ae.separator })
        },
        re = D.a.create(function (e) {
          return {
            header: { marginBottom: e.spaces.space12 },
            centerText: { textAlign: 'center' },
            contentArea: { marginHorizontal: e.spaces.space32 },
            contentAreaCompact: {
              paddingHorizontal: e.spaces.space32,
              margin: 'auto',
              minWidth: T.b + 64,
              maxWidth: T.b + 64,
            },
            checkboxText: { flexShrink: 1, paddingRight: e.spaces.space12, width: '100%' },
            headline: { marginVertical: e.spaces.space16 },
            option: { marginTop: e.spaces.space12, flexDirection: 'row', justifyContent: 'space-between' },
            primaryButton: { marginTop: e.spaces.space16 },
            subHeader: { marginBottom: e.spaces.space16 },
            formTextInput: { paddingHorizontal: 0 },
            button: { width: '100%', margin: 'auto', marginVertical: e.spaces.space12 },
            ssoButton: { width: T.b, height: e.spaces.space40 },
          }
        }),
        ie = ['button', 'displayType', 'onNavigate', 'style', 'subtaskId', 'subtaskInputs'],
        oe = function (e) {
          var t = e.button,
            a = e.displayType,
            n = void 0 === a ? y.b.Default : a,
            i = e.onNavigate,
            o = e.style,
            s = e.subtaskId,
            l = e.subtaskInputs,
            c = E()(e, ie),
            u = t.icon,
            d = t.navigation_link,
            p = t.preferred_size,
            h = t.separator,
            m = s === y.q ? F.a.SignUp : F.a.LogIn,
            _ = k.a.useCallback(
              function (e) {
                i(d)
              },
              [d, i],
            )
          return k.a.createElement(
            k.a.Fragment,
            null,
            (function () {
              switch (n) {
                case y.b.GoogleSSO:
                  return k.a.createElement(S.a, {
                    buttonSize: p ? Object(Q.b)(p) : 'medium',
                    buttonState: m,
                    displayType: T.e.Button,
                    style: [re.button, re.ssoButton],
                  })
                case y.b.AppleSSO:
                  return k.a.createElement(I.a, {
                    buttonSize: p ? Object(Q.b)(p) : 'medium',
                    buttonState: m,
                    style: [re.button, re.ssoButton],
                  })
                default:
                  return k.a.createElement(
                    x.a,
                    r()({}, c, {
                      icon: u && k.a.createElement(Z, { icon: u.icon }),
                      onPress: _,
                      size: p ? Object(Q.b)(p) : 'medium',
                      style: [re.button, o],
                      type: t.style ? Object(Q.c)(t.style) : 'brandFilled',
                    }),
                    d.label,
                  )
              }
            })(),
            h ? k.a.createElement(ne, { label: h.label, onNavigate: i, subtaskInputs: l }) : null,
          )
        },
        se = a('TIdA'),
        le = a('A91F'),
        ce = a('IMA+'),
        ue = D.a.create(function (e) {
          return {
            buttonRightAligned: { marginHorizontal: '-'.concat(e.spaces.space8), marginVertical: 0 },
            containerRightAlignedButton: { marginLeft: e.spaces.space20 },
            secondaryTextRightAlignedButton: { flexBasis: 0, flexGrow: 1 },
            subHeaderRightAlignedButton: { flexDirection: 'row', flexWrap: 'wrap' },
            headerImageContainer: { alignItems: 'center' },
          }
        }),
        de = function (e) {
          var t,
            a,
            n,
            i,
            o,
            s,
            l,
            c,
            u,
            d = e.header,
            p = e.onNavigate,
            h = e.primaryTextProp,
            m = e.primaryTextSize,
            _ = e.secondaryTextProp,
            b = e.subtaskInputs,
            f = e.userInfo,
            v = e.withHeaderImage,
            g =
              (null == d ? void 0 : d.header_button) &&
              !(
                !(t = d.header_button).icon ||
                t.style !== y.d.Text ||
                (null !== (a = t.navigation_link) && void 0 !== a && a.label)
              )
          return (
            d
              ? ((o = d.user),
                (s = d.header_image),
                (n = d.primary_text),
                (i = d.secondary_text),
                (l = 10 * D.a.theme.lineHeightsPx.body),
                (c = s ? (l * s.image.image_info.width) / s.image.image_info.height : 'initial'),
                (u = v && s && 'icon' === s.image_type))
              : ((n = h), (i = _)),
            k.a.createElement(
              N.a,
              { style: u ? ue.headerImageContainer : void 0 },
              v && s
                ? k.a.createElement(
                    N.a,
                    {
                      style: {
                        marginHorizontal:
                          'full_width' === s.image_type || 'full_bleed_top' === s.image_type
                            ? '-'.concat(D.a.theme.spaces.space32)
                            : 'initial',
                        height: u ? l : 'initial',
                        width: u ? c : 'initial',
                      },
                    },
                    k.a.createElement(se.a, {
                      accessibilityLabel: s.image.image_info.alt_text || '',
                      aspectMode: le.a.exact(s.image.image_info.width / s.image.image_info.height),
                      image: s.image.image_info,
                    }),
                  )
                : null,
              n
                ? k.a.createElement(
                    ee,
                    r()({}, n, {
                      nativeID: w.b,
                      onNavigate: p,
                      size: null != m ? m : 'title4',
                      style: re.headline,
                      subtaskInputs: b,
                      weight: 'bold',
                    }),
                  )
                : null,
              k.a.createElement(
                N.a,
                { style: [re.subHeader, g && ue.subHeaderRightAlignedButton] },
                k.a.createElement(
                  N.a,
                  { style: g && ue.secondaryTextRightAlignedButton },
                  i ? k.a.createElement(ee, r()({}, i, { color: 'gray700', onNavigate: p, subtaskInputs: b })) : null,
                ),
                null != d && d.header_button
                  ? k.a.createElement(
                      N.a,
                      { style: g && ue.containerRightAlignedButton },
                      k.a.createElement(oe, {
                        button: d.header_button,
                        onNavigate: p,
                        style: g && ue.buttonRightAligned,
                        subtaskInputs: b,
                      }),
                    )
                  : null,
              ),
              o
                ? null != f
                  ? f
                  : k.a.createElement(ce.a, {
                      avatarUri: o.profile_image_url_https,
                      displayMode: 'UserCompact',
                      name: o.name,
                      screenName: o.screen_name,
                      userId: o.id_str,
                    })
                : null,
            )
          )
        },
        pe = a('mCZD'),
        he = 'ActionListNextButton',
        me = 'ActionListSkipButton',
        _e = a('csss'),
        be = a('h0NW')
      function fe(e) {
        var t = e.link,
          a = e.onNavigate,
          n = (e.passthroughOcfScreenProps, e.subtaskId),
          r = e.testID,
          i = e.updateFlow,
          o = k.a.useCallback(
            function () {
              i(n, { link: t.link_id }), a(t)
            },
            [t, a, n, i],
          )
        return k.a.createElement(x.a, { onPress: o, testID: r, type: 'primaryFilled' }, t.label)
      }
      function ve(e) {
        var t,
          a,
          n = e.actionItem,
          i = e.link,
          o = e.onNavigate,
          s = e.subtaskId,
          l = e.subtaskInputs,
          c = e.updateFlow,
          u = n.action_data.link_data,
          d = k.a.useCallback(
            function (e) {
              e.preventDefault(), c(s, { link: i.link_id }), o(i)
            },
            [i, o, s, c],
          )
        return k.a.createElement(
          _e.a,
          r()(
            {
              description: k.a.createElement(
                ee,
                r()({}, u.detail_text, { color: 'gray700', size: 'subtext2', subtaskInputs: l }),
              ),
              label: k.a.createElement(
                ee,
                r()({}, u.text, {
                  size: 'headline2',
                  subtaskInputs: l,
                  text:
                    null !== (t = null === (a = u.text) || void 0 === a ? void 0 : a.text) && void 0 !== t
                      ? t
                      : u.link.label,
                }),
              ),
              link: '#',
              onPress: d,
            },
            ye(n.action_data.link_data.icon),
          ),
        )
      }
      function ge(e) {
        var t = e.actionItem,
          a = e.onNavigate,
          n = e.subtaskInputs
        return k.a.createElement(
          _e.a,
          r()(
            {
              description: k.a.createElement(
                ee,
                r()({}, t.action_data.text_data.detail_text, { color: 'gray700', size: 'subtext2', subtaskInputs: n }),
              ),
              label: k.a.createElement(
                ee,
                r()({}, t.action_data.text_data.text, { onNavigate: a, size: 'headline2', subtaskInputs: n }),
              ),
            },
            ye(t.action_data.text_data.icon),
          ),
        )
      }
      function ke(e) {
        var t = e.actionItems,
          a = e.onNavigate,
          n = e.subtaskInputs,
          i = t.map(function (e) {
            var t,
              i,
              o = 'text' === e.action_type ? e.action_data.text_data : e.action_data.link_data
            return {
              label: k.a.createElement(
                ee,
                r()({}, o.text, {
                  onNavigate: a,
                  subtaskInputs: n,
                  text:
                    'text' === e.action_type
                      ? e.action_data.text_data.text.text
                      : null !== (t = null === (i = e.action_data.link_data.text) || void 0 === i ? void 0 : i.text) &&
                        void 0 !== t
                      ? t
                      : e.action_data.link_data.link.label,
                  weight: 'bold',
                }),
              ),
              description: o.detail_text
                ? k.a.createElement(
                    ee,
                    r()({}, o.detail_text, { color: 'gray700', style: we.bulletListDescription, subtaskInputs: n }),
                  )
                : null,
              decoration: o.icon ? k.a.createElement(Z, { icon: o.icon.icon, style: we.bulletIcon }) : null,
            }
          })
        return k.a.createElement(be.a, { items: i })
      }
      function ye(e) {
        return {
          thumbnail: e
            ? k.a.createElement(P.b, { size: 'headline2', style: we.icon }, k.a.createElement(Z, { icon: e.icon }))
            : null,
          thumbnailSize: 'medium',
        }
      }
      var we = D.a.create(function (e) {
          return {
            icon: { display: 'block', minWidth: e.spaces.space36, marginRight: e.spaces.space20, textAlign: 'center' },
            bulletIcon: {
              height: e.spaces.space24,
              width: e.spaces.space24,
              color: e.colors.text,
              marginRight: e.spaces.space24,
              justifyContent: 'center',
              overflow: 'hidden',
            },
            bulletListDescription: { marginTop: e.spaces.space4 },
          }
        }),
        Ce = function (e) {
          var t,
            a,
            n,
            i = e.onNavigate,
            o = e.passthroughOcfScreenProps,
            s = e.subtask,
            l = s.action_items,
            c = s.header,
            u = s.next_link,
            d = s.skip_link,
            p = s.style,
            h = e.subtaskInputs
          return k.a.createElement(
            pe.a,
            r()({}, o, {
              appBarPosition:
                'full_bleed_top' ===
                (null == c || null === (t = c.header_image) || void 0 === t ? void 0 : t.image_type)
                  ? 'absolute'
                  : void 0,
              appBarWithBackground:
                'full_bleed_top' !==
                (null == c || null === (a = c.header_image) || void 0 === a ? void 0 : a.image_type),
              hideLogo:
                'full_bleed_top' ===
                (null == c || null === (n = c.header_image) || void 0 === n ? void 0 : n.image_type),
              rightControl: u
                ? k.a.createElement(fe, r()({}, e, { link: u, testID: he }))
                : d
                ? k.a.createElement(fe, r()({}, e, { link: d, testID: me }))
                : null,
            }),
            k.a.createElement(
              N.a,
              { style: re.contentArea },
              c
                ? k.a.createElement(de, {
                    header: c,
                    onNavigate: i,
                    primaryTextSize: 'title3',
                    subtaskInputs: h,
                    withHeaderImage: !0,
                  })
                : null,
              p === y.a.BulletList
                ? k.a.createElement(ke, r()({}, e, { actionItems: l }))
                : l.map(function (t, a) {
                    return k.a.createElement(
                      N.a,
                      { key: a },
                      'text' === t.action_type
                        ? k.a.createElement(ge, r()({}, e, { actionItem: t }))
                        : k.a.createElement(ve, r()({}, e, { actionItem: t, link: t.action_data.link_data.link })),
                    )
                  }),
            ),
          )
        },
        Ee = a('eb3s'),
        Ie = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(p()(e), '_handleConfirm', function () {
                var t = e.props.subtask
                e._handleButtonClick(t.next_link)
              }),
              v()(p()(e), '_handleCancel', function () {
                var t = e.props.subtask.cancel_link
                t && e._handleButtonClick(t)
              }),
              v()(p()(e), '_handleButtonClick', function (t) {
                var a = e.props,
                  n = a.onNavigate,
                  r = a.subtaskId
                ;(0, a.updateFlow)(r, { link: t.link_id }), n(t)
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.subtask,
                    n = e.subtaskInputs,
                    i = a.primary_text
                      ? k.a.createElement(
                          ee,
                          r()({}, a.primary_text, { nativeID: w.b, onNavigate: t, subtaskInputs: n }),
                        )
                      : void 0,
                    o = a.secondary_text
                      ? k.a.createElement(ee, r()({}, a.secondary_text, { onNavigate: t, subtaskInputs: n }))
                      : void 0,
                    s = a.cancel_link,
                    l = a.next_link,
                    c = s && s.label
                  return k.a.createElement(Ee.a, {
                    cancelButtonLabel: c,
                    confirmButtonLabel: l && l.label,
                    headline: i,
                    onCancel: this._handleCancel,
                    onConfirm: this._handleConfirm,
                    onMaskClick: this._handleCancel,
                    text: o,
                    withCancelButton: !!c,
                  })
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        xe = a('fs1G'),
        Se = a('cmUU'),
        Te = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e) {
            var n
            return (
              l()(this, a),
              (n = t.call(this, e)),
              v()(p()(n), '_handleCtaClick', function (e) {
                var t = n.props,
                  a = t.onNavigate,
                  r = t.subtaskId
                ;(0, t.updateFlow)(r, { link: e.link_id }), a(e)
              }),
              v()(p()(n), '_handlePrimaryActionClick', function () {
                n.setState({ downloadLinkClicked: !0 }), n._handleCtaClick(n.props.subtask.primary_action_link)
              }),
              v()(p()(n), '_handleSecondaryActionClick', function () {
                var e = n.props.subtask.secondary_action_link
                e && n._handleCtaClick(e)
              }),
              (n.state = { downloadLinkClicked: !1 }),
              n
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    n = e.subtask,
                    i = e.subtaskInputs,
                    o = this.state.downloadLinkClicked,
                    s = n.primary_text
                      ? k.a.createElement(
                          ee,
                          r()({}, n.primary_text, { nativeID: w.b, onNavigate: t, subtaskInputs: i }),
                        )
                      : null,
                    l = !o || !n.primary_action_text_after_click,
                    c = (o && n.primary_action_text_after_click) || n.primary_action_link.label,
                    u = n.primary_image_url
                      ? k.a.createElement(se.a, {
                          accessibilityLabel: '',
                          aspectMode: le.a.exact(1),
                          image: n.primary_image_url || '',
                        })
                      : null,
                    d = n.secondary_text
                      ? k.a.createElement(ee, r()({}, n.secondary_text, { onNavigate: t, subtaskInputs: i }))
                      : null,
                    p = k.a.createElement(N.a, null, u, d)
                  return k.a.createElement(
                    pe.a,
                    r()({ hideLogo: !0 }, a),
                    k.a.createElement(Se.a, {
                      actionLabel: c || '',
                      actionType: Object(Q.c)(n.primary_action_style),
                      headline: s,
                      onAction: l ? this._handlePrimaryActionClick : xe.a,
                      onClose: xe.a,
                      onSecondaryAction: this._handleSecondaryActionClick,
                      secondaryActionLabel: (n.secondary_action_link || {}).label,
                      secondaryActionType: n.secondary_action_style && Object(Q.c)(n.secondary_action_style),
                      subtext: p,
                      withCloseButton: !1,
                    }),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        Fe = a('ZS3b'),
        Oe = a('jhWN'),
        Ae = a('jV+4'),
        Ne = a('5mJL'),
        Pe = D.a.create(function (e) {
          return {
            userContainerStacked: { alignItems: 'center', marginTop: e.spaces.space8, marginBottom: e.spaces.space16 },
            userAvatarStacked: { marginBottom: e.spaces.space8 },
            userNameStacked: { alignItems: 'center' },
            avatarColumnCentered: { justifyContent: 'center' },
          }
        }),
        De = function (e) {
          var t = e.displayType,
            a = void 0 === t ? y.C.stacked : t,
            n = e.user,
            i = e.userCaption
          if (!n) return null
          var o = function (e) {
              return k.a.createElement(Oe.a, {
                accessibilityHidden: !0,
                focusable: !1,
                size: 'xxLarge',
                style: e,
                uri: n.profile_image_url_https,
              })
            },
            s = function (t) {
              var a = e.onNavigate,
                o = e.subtaskInputs
              return k.a.createElement(
                k.a.Fragment,
                null,
                k.a.createElement(Ae.a, {
                  isProtected: n.protected,
                  isVerified: n.verified,
                  name: n.name,
                  screenName: i ? void 0 : n.screen_name,
                  withStackedLayout: !0,
                }),
                i ? k.a.createElement(ee, r()({}, i, { color: 'gray700', onNavigate: a, subtaskInputs: o })) : null,
              )
            }
          switch (a) {
            case y.C.stacked:
              return k.a.createElement(
                N.a,
                { style: Pe.userContainerStacked },
                o(Pe.userAvatarStacked),
                s(Pe.userNameStacked),
              )
            case y.C.compact:
              return k.a.createElement(
                Ne.a,
                { avatarCell: o(), avatarCellStyle: Pe.avatarColumnCentered, cellStyle: Pe.avatarColumnCentered },
                s(),
              )
            default:
              return null
          }
        },
        Be = 'OCF_CallToAction_Button',
        Re = a('feu+'),
        Le = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++) i[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(p()(e), '_getCtaButtonProps', function () {
                var t = e.props.subtask,
                  a = t.buttons || [],
                  n = A()(a, 3),
                  r = n[0],
                  i = (r = void 0 === r ? {} : r).navigation_link,
                  s = r.style,
                  l = n[1],
                  c = (l = void 0 === l ? {} : l).navigation_link,
                  u = l.style,
                  d = n[2],
                  p = (d = void 0 === d ? {} : d).navigation_link,
                  h = d.style,
                  m = i || t.primary_action_link,
                  _ = s || t.primary_action_style,
                  b = {
                    actionLabel: m.label || '',
                    actionType: _ && Object(Q.c)(_),
                    onAction: m && e._handleCtaClick(m),
                  },
                  f = c || t.secondary_action_link,
                  v = u || t.secondary_action_style,
                  g = {
                    secondaryActionLabel: f ? f.label : void 0,
                    secondaryActionType: v && Object(Q.c)(v),
                    onSecondaryAction: f && e._handleCtaClick(f),
                  },
                  k = {
                    tertiaryActionLabel: (p || {}).label,
                    tertiaryActionType: h && Object(Q.c)(h),
                    onTertiaryAction: p && e._handleCtaClick(p),
                  }
                return o()(o()(o()({}, b), g), k)
              }),
              v()(p()(e), '_getCtaText', function () {
                var t = e.props,
                  a = t.onNavigate,
                  n = t.subtask,
                  i = n.detail_text,
                  o = n.header,
                  s = n.primary_text,
                  l = n.secondary_text,
                  c = t.subtaskInputs
                return {
                  primaryText: k.a.createElement(
                    ee,
                    r()({}, (o && o.primary_text) || s, { nativeID: w.b, onNavigate: a, subtaskInputs: c }),
                  ),
                  secondaryText:
                    o || l
                      ? k.a.createElement(
                          ee,
                          r()({}, (o && o.secondary_text) || l, { onNavigate: a, subtaskInputs: c }),
                        )
                      : null,
                  detailText: i ? k.a.createElement(ee, r()({}, i, { onNavigate: a, subtaskInputs: c })) : null,
                }
              }),
              v()(p()(e), '_handleCtaClick', function (t) {
                return function () {
                  var a = e.props,
                    n = a.onNavigate,
                    r = a.subtaskId
                  ;(0, a.updateFlow)(r, { link: t.link_id }), n(t)
                }
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    a,
                    n = this.props,
                    i = n.onNavigate,
                    s = n.passthroughOcfScreenProps,
                    l = n.subtask,
                    c = n.subtaskInputs,
                    u = s.onBackClick,
                    d = this._getCtaText(),
                    p = d.detailText,
                    h = d.primaryText,
                    m = d.secondaryText,
                    _ = l.style === y.f.HalfCover
                  if (l.header_image) {
                    var b = l.header_image.image.image_info,
                      f = { url: b.url, height: b.height, width: b.width }
                    ;(t = function (e) {
                      var t = e.style
                      return k.a.createElement(
                        N.a,
                        { style: t },
                        k.a.createElement(se.a, { accessibilityLabel: b.alt_text || '', image: f }),
                      )
                    }),
                      (a = 'illustration')
                  } else _ && (a = 'none')
                  var v = o()(
                    {
                      children: k.a.createElement(De, {
                        onNavigate: i,
                        subtaskInputs: c,
                        user: null === (e = l.header) || void 0 === e ? void 0 : e.user,
                      }),
                      footer: p,
                      graphic: t,
                      graphicDisplayMode: a,
                      headline: h,
                      onClose: xe.a,
                      primaryButtonTestID: Be,
                      subtext: m,
                      withCloseButton: !1,
                    },
                    this._getCtaButtonProps(),
                  )
                  return _
                    ? k.a.createElement(Re.a, r()({}, v, { isFullHeightOnMobile: !1 }))
                    : k.a.createElement(
                        pe.a,
                        r()({ hideAppBar: !u, hideLogo: !0 }, s),
                        k.a.createElement(Se.a, v),
                        this.props.errorDialog,
                      )
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        Ve = a('rxPX'),
        Me = a('0KEI'),
        je = a('auX9'),
        Ue = a('kGix'),
        ze = Object(Ve.a)()
          .propsFromState(function () {
            return { fetchStatus: je.g, multiAccountUsers: je.j }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandlerMultiListFetch: Object(Me.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_SWITCHER_MULTI_LIST_FETCH',
              ),
              fetchMultiAccountListIfNeeded: je.d,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchStatus,
              a = e.multiAccountUsers
            return { fetchStatus: t === Ue.a.NONE ? Ue.a.LOADING : t, multiAccountUsers: a }
          }),
        He = a('v//M'),
        We = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(p()(e), '_executeSubtaskAction', function () {
                var t = e.props,
                  a = t.navigationLink,
                  n = t.onError,
                  r = t.onNavigate,
                  i = t.subtaskAction
                try {
                  i()
                    .then(function () {
                      return r(a, !0)
                    })
                    .catch(n)
                } catch (o) {
                  n(o)
                }
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._executeSubtaskAction()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  this.props.subtaskId !== e.subtaskId && this._executeSubtaskAction()
                },
              },
              {
                key: 'render',
                value: function () {
                  return null
                },
              },
            ]),
            a
          )
        })(k.a.Component)
      v()(We, 'defaultProps', { onError: xe.a })
      var Ge = a('v6aA'),
        qe = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(p()(e), '_render', function () {
                var t = e.props,
                  a = t.multiAccountUsers,
                  n = t.onNavigate,
                  r = t.subtask,
                  i = t.subtaskId,
                  o = t.updateFlow,
                  s = r.false_link,
                  l = r.true_link,
                  c = r.user_id,
                  u =
                    a.filter(function (e) {
                      return e.user_id === c
                    }).length > 0
                return k.a.createElement(We, {
                  navigationLink: u ? l : s,
                  onNavigate: n,
                  subtaskAction: function () {
                    return o(i, { link: u ? l.link_id : s.link_id }), Promise.resolve()
                  },
                  subtaskId: i,
                })
              }),
              v()(p()(e), '_handleFetch', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandlerMultiListFetch
                ;(0, t.fetchMultiAccountListIfNeeded)().catch(a())
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.context.loggedInUserId && this._handleFetch()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.fetchStatus
                  return this.context.loggedInUserId
                    ? k.a.createElement(He.a, {
                        fetchStatus: e,
                        onRequestRetry: this._handleFetch,
                        render: this._render,
                      })
                    : this._render()
                },
              },
            ]),
            a
          )
        })(k.a.PureComponent)
      v()(qe, 'contextType', Ge.a)
      var Ke = ze(qe),
        Ye = (a('LJOr'), a('vrRf'), a('jQ3i'), a('x4t0'), a('kFen'), a('qd3W'), a('zrOZ')),
        Xe = a('VwDm'),
        Je = 'ChoiceSelectionInput',
        Ze = 'ChoiceSelectionNextButton',
        Qe = a('6OUF'),
        $e = a('XiMS'),
        et = a('hznd'),
        tt = a('fyvP'),
        at = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a() {
            var e, n, r
            l()(this, a)
            for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s]
            return (
              (r = t.call.apply(t, [this].concat(o))),
              v()(p()(r), 'state', {
                selectedChoices:
                  null !==
                    (e =
                      null !==
                        (n = Object(Q.e)(r.props.subtaskInputs, {
                          key: 'selected_choices',
                          subtask_id: r.props.subtaskId,
                        })) && void 0 !== n
                        ? n
                        : r.props.subtask.selected_choices) && void 0 !== e
                    ? e
                    : [],
                prevSubtaskId: r.props.subtaskId,
                searchText: '',
              }),
              v()(p()(r), '_renderRightControl', function () {
                return k.a.createElement(N.a, null, r._renderCancelButton(), r._renderNextButton())
              }),
              v()(p()(r), '_handleCancelButtonClick', function () {
                var e = r.props,
                  t = e.onNavigate,
                  a = e.subtask.skip_link,
                  n = e.subtaskId,
                  i = e.updateFlow
                a && (i(n, { link: a.link_id }), t(a))
              }),
              v()(p()(r), '_handleNextButtonClick', function () {
                var e = r.props,
                  t = e.onNavigate,
                  a = e.subtask.next_link,
                  n = e.subtaskId,
                  i = e.updateFlow,
                  o = r.state.selectedChoices
                a && (i(n, { link: a.link_id, selected_choices: o }), t(a))
              }),
              v()(p()(r), '_handleRadioChange', function (e, t) {
                r.setState({ selectedChoices: [t] })
              }),
              v()(p()(r), '_handleSearchTextChange', function (e) {
                r.setState({ searchText: e.target.value })
              }),
              v()(p()(r), '_handleSearchTextClear', function () {
                r.setState({ searchText: '' })
              }),
              v()(p()(r), '_onCheckboxChange', function (e) {
                return function (t) {
                  r._handleMultiSelection(e, t)
                }
              }),
              r
            )
          }
          return (
            u()(
              a,
              [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.onNavigate,
                      a = e.passthroughOcfScreenProps,
                      n = e.subtask,
                      i = n.detail_text,
                      o = n.header,
                      s = n.primary_text,
                      l = n.search,
                      c = n.secondary_text,
                      u = e.subtaskInputs,
                      d = this.state.searchText
                    return k.a.createElement(
                      pe.a,
                      r()({}, a, { rightControl: this._renderRightControl() }),
                      k.a.createElement(
                        N.a,
                        { style: re.contentArea },
                        o
                          ? k.a.createElement(de, {
                              header: o,
                              onNavigate: t,
                              primaryTextProp: o.primary_text,
                              secondaryTextProp: o.secondary_text,
                              subtaskInputs: u,
                            })
                          : k.a.createElement(
                              k.a.Fragment,
                              null,
                              s &&
                                k.a.createElement(
                                  ee,
                                  r()({ size: 'title4', style: re.headline, weight: 'bold' }, s, {
                                    onNavigate: t,
                                    subtaskInputs: u,
                                  }),
                                ),
                              c &&
                                k.a.createElement(
                                  ee,
                                  r()({ color: 'gray700' }, c, { onNavigate: t, subtaskInputs: u }),
                                ),
                            ),
                        l &&
                          k.a.createElement(Qe.a, {
                            Icon: Xe.a,
                            autoFocus: l.is_focused,
                            isCompact: !0,
                            onChange: this._handleSearchTextChange,
                            onClear: this._handleSearchTextClear,
                            placeholder: l.hint_text,
                            style: ot.searchBox,
                            testID: Je,
                            value: d,
                            withClearButton: !0,
                          }),
                        k.a.createElement(N.a, { style: ot.choicesContainer }, this._renderChoices()),
                        i && k.a.createElement(ee, r()({}, i, { onNavigate: t, subtaskInputs: u })),
                      ),
                    )
                  },
                },
                {
                  key: '_renderCheckboxQuestion',
                  value: function (e) {
                    var t = this.props,
                      a = t.onNavigate,
                      n = t.subtaskInputs,
                      i = this.state.selectedChoices.indexOf(e.id) > -1
                    return k.a.createElement(
                      N.a,
                      { accessibilityRole: 'label', key: e.id, style: [re.option, ot.checkboxRow, ot.cursor] },
                      k.a.createElement(
                        ee,
                        r()({}, e.text, { onNavigate: a, style: re.checkboxText, subtaskInputs: n }),
                      ),
                      k.a.createElement($e.a, { checked: i, onChange: this._onCheckboxChange(e.id) }),
                    )
                  },
                },
                {
                  key: '_renderCancelButton',
                  value: function () {
                    var e,
                      t = this.props.subtask
                    return t.skip_link && t.skip_link.label
                      ? k.a.createElement(
                          x.a,
                          {
                            onPress: this._handleCancelButtonClick,
                            size: 'large',
                            style: ot.skipButton,
                            type: 'primaryText',
                          },
                          null === (e = t.skip_link) || void 0 === e ? void 0 : e.label,
                        )
                      : null
                  },
                },
                {
                  key: '_renderNextButton',
                  value: function () {
                    var e = this.props.subtask,
                      t = this._verifyBothTypesValidity()
                    return e.next_link
                      ? k.a.createElement(
                          x.a,
                          {
                            disabled: !t,
                            onPress: this._handleNextButtonClick,
                            size: 'medium',
                            testID: Ze,
                            type: 'primaryFilled',
                          },
                          e.next_link.label,
                        )
                      : null
                  },
                },
                {
                  key: '_renderChoices',
                  value: function () {
                    var e = this,
                      t = this.props,
                      a = t.onNavigate,
                      n = t.subtask,
                      i = t.subtaskInputs,
                      o = n.search,
                      s = n.selection_type,
                      l = n.style,
                      c = (function (e, t) {
                        var a = e.choices,
                          n = e.search,
                          r = e.sections
                        if (n && r && r.length && !t) {
                          var i = r
                            .flatMap(function (e) {
                              return e.item_ids
                            })
                            .filter(function (e) {
                              return 'string' == typeof e
                            })
                          if (i.length) {
                            var o = Object(Ye.a)(i)
                            return {
                              choices: a.filter(function (e) {
                                return o.has(e.id)
                              }),
                              hasMore: !0,
                            }
                          }
                        }
                        if (n && t)
                          return (function (e, t) {
                            var a = nt(t),
                              n = e.filter(function (e) {
                                return nt(e.text.text).includes(a)
                              })
                            if (n.length > 50) return { choices: n.slice(0, 50), hasMore: !0 }
                            return { choices: n, hasMore: !1 }
                          })(a, t)
                        return { choices: a, hasMore: !1 }
                      })(n, this.state.searchText).choices
                    if (0 === c.length && o)
                      return k.a.createElement(ee, r()({}, o.no_results_text, { onNavigate: a, subtaskInputs: i }))
                    if ('boxed' === l)
                      switch (s) {
                        case 'single_select':
                          return k.a.createElement(
                            N.a,
                            { style: ot.tileContainer },
                            k.a.createElement(et.a, {
                              name: 'single-choice',
                              onChange: this._handleRadioChange,
                              options: c.map(function (e) {
                                var t = e.id,
                                  a = e.subtext
                                return { value: t, label: e.text.text, helpText: null == a ? void 0 : a.text }
                              }),
                              value: this.state.selectedChoices[0],
                            }),
                          )
                        case 'multi_select':
                        default:
                          return null
                      }
                    else
                      switch (s) {
                        case 'multi_select':
                          return k.a.createElement(
                            k.a.Fragment,
                            null,
                            c.map(function (t) {
                              return e._renderCheckboxQuestion(t)
                            }),
                          )
                        case 'single_select':
                          var u = c.map(function (e) {
                            var t = e.id,
                              a = e.subtext
                            return { label: e.text.text, value: t, helpText: null == a ? void 0 : a.text }
                          })
                          return k.a.createElement(
                            k.a.Fragment,
                            null,
                            k.a.createElement(tt.a, {
                              name: 'single-choice',
                              onChange: this._handleRadioChange,
                              options: u,
                              value: this.state.selectedChoices[0],
                            }),
                          )
                        default:
                          return null
                      }
                  },
                },
                {
                  key: '_verifyBothTypesValidity',
                  value: function () {
                    var e = this.props.subtask,
                      t = e.selection_type,
                      a = this.state.selectedChoices
                    if (e && t) {
                      if ('multi_select' === t) return this._verifyMultiChoiceValidity(a)
                      if ('single_select' === t) return 1 === a.length
                    }
                  },
                },
                {
                  key: '_verifyMultiChoiceValidity',
                  value: function (e) {
                    var t = this.props.subtask.next_link_options
                    if (t) {
                      var a = t.max_enable_count,
                        n = t.min_enable_count,
                        r = e.length
                      return !(n && r < n) && !(a && r > a)
                    }
                    return !1
                  },
                },
                {
                  key: '_handleMultiSelection',
                  value: function (e, t) {
                    var a,
                      n = this.state.selectedChoices
                    ;(a =
                      n && n.includes(e)
                        ? n.filter(function (t) {
                            return t !== e
                          })
                        : n.concat([e])),
                      this.setState({ selectedChoices: a })
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    return e.subtaskId !== t.prevSubtaskId ? { selectedChoices: [], prevSubtaskId: e.subtaskId } : null
                  },
                },
              ],
            ),
            a
          )
        })(k.a.Component)
      function nt(e) {
        return e.toLowerCase().normalize('NFD')
      }
      var rt,
        it,
        ot = D.a.create(function (e) {
          return {
            searchBox: { marginBottom: e.spaces.space16 },
            skipButton: { marginBottom: e.spaces.space12 },
            checkboxRow: { justifyContent: 'space-between' },
            choicesContainer: { marginBottom: e.spaces.space16 },
            cursor: { cursor: 'pointer' },
            tileContainer: { marginTop: e.spaces.space12 },
          }
        }),
        st = (a('WNMA'), a('zh9S')),
        lt = a('9D1O'),
        ct = a('1YZw'),
        ut = a('G6rE'),
        dt = a('oEGd'),
        pt = a('hqKg'),
        ht = a('RqPI'),
        mt = function (e) {
          return function (t, a) {
            if ('single_sign_on' !== _t(t, a)) {
              var n = a.location.query[e]
              return Array.isArray(n) ? n[0] : n
            }
          }
        },
        _t = function (e, t) {
          return t.flowName || t.location.pathname.slice(t.match.path.length)
        },
        bt = mt('country_code'),
        ft = Object(pt.createSelector)(
          ((rt = 'input'),
          (it = {}),
          function (e, t) {
            return (t.location.state && t.location.state[rt]) || it
          }),
          mt('input_flow_data'),
          Q.k,
        ),
        vt = mt('return_path'),
        gt = mt('is_native'),
        kt = mt('test_country_code'),
        yt = mt('target_user_id'),
        wt = Object(pt.createSelector)(
          function (e, t) {
            return mt('overrides')(e, t)
          },
          function (e) {
            return Object(Q.d)(e)
          },
        ),
        Ct = Object(pt.createStructuredSelector)({
          currentSubtask: lt.k,
          previouslySubmittedSubtaskId: lt.q,
          countryCode: bt,
          debugOverrides: wt,
          isNative: gt,
          testCountryCode: kt,
          flowName: _t,
          inputFlowData: ft,
          returnPath: vt,
          subtasks: lt.w,
          flowToken: lt.n,
          fetchStatus: lt.m,
          previousNavigableSubtaskId: lt.p,
          subtaskInputs: lt.v,
          failureMessage: lt.l,
          shouldAbort: lt.r,
          shouldEndFlow: lt.s,
          startLocation: lt.t,
          submitFailed: lt.u,
          targetUserId: yt,
          loginReturnPath: ht.r,
        }),
        Et = Object(dt.d)(Ct, function (e) {
          var t = e.ocfModule
          return {
            addToast: ct.b,
            callInteractiveSpinnerPath: lt.a,
            callOnboardingPath: lt.b,
            clearFlow: t.clearFlow,
            createLocalApiErrorHandler: Object(Me.createLocalApiErrorHandlerWithContextFactory)('OCF_FLOW'),
            removeContacts: lt.j,
            fetchTemporaryPassword: lt.d,
            fetchUsers: ut.e.fetchMany,
            navigateSubtask: lt.h,
            startFlow: t.startFlow,
            submitFlow: t.submitFlow,
            updateFlow: t.updateFlow,
            googleAnalyticsPageView: st.a,
            googleAnalyticsSendEvent: st.b,
            scribeAction: st.c,
            scribePageImpression: st.d,
            verifyCredentials: ht.A,
          }
        }),
        It = {
          createLocalApiErrorHandler: Object(Me.createLocalApiErrorHandlerWithContextFactory)('CONTACTS_SYNC'),
          uploadAddressBook: function (e) {
            return function (t, a, n) {
              return n.api.Contacts.uploadAddressBook(e)
            }
          },
        },
        xt = Object(dt.b)(It),
        St = a('SrIh'),
        Tt = a('Irs7'),
        Ft = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(p()(e), '_handleCtaClick', function (t) {
                var a = e.props,
                  n = a.onNavigate,
                  r = a.subtaskId
                ;(0, a.updateFlow)(r, { link: t.link_id }), n(t)
              }),
              v()(p()(e), '_handlePrimaryActionClick', function () {
                try {
                  window.navigator.contacts
                    .select(['name', 'email', 'tel'], { multiple: !0 })
                    .then(e._handleContactResults)
                } catch (t) {
                  Object(St.a)(t), e._handleSecondaryActionClick()
                }
              }),
              v()(p()(e), '_handleContactResults', function (t) {
                var a = e.props,
                  n = a.analytics,
                  r = a.createLocalApiErrorHandler,
                  i = a.uploadAddressBook,
                  o = t.map(function (e) {
                    var t = e.email,
                      a = e.name,
                      n = e.tel
                    return { name: a[0] || '', email_addresses: t, phone_numbers: n }
                  })
                if (0 === o.length) return n.scribeAction('cancel')
                n.scribe({ action: 'success', data: { event_value: o.length } }),
                  i({ contacts: o }).catch(r()),
                  e._handleCtaClick(e.props.subtask.next_link)
              }),
              v()(p()(e), '_handleSecondaryActionClick', function () {
                var t = e.props.subtask.skip_link
                t && e._handleCtaClick(t)
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;('contacts' in navigator && 'ContactsManager' in window) || this._handleSecondaryActionClick()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    n = e.subtask,
                    i = e.subtaskInputs,
                    o = n.detail_text
                      ? k.a.createElement(ee, r()({}, n.detail_text, { onNavigate: t, subtaskInputs: i }))
                      : null
                  return k.a.createElement(
                    pe.a,
                    r()({ hideLogo: !0 }, a),
                    k.a.createElement(Se.a, {
                      actionLabel: n.next_link.label || '',
                      footer: o,
                      headline: n.primary_text || '',
                      onAction: this._handlePrimaryActionClick,
                      onClose: xe.a,
                      onTertiaryAction: this._handleSecondaryActionClick,
                      subtext: '',
                      tertiaryActionLabel: (n.skip_link || {}).label,
                      withCloseButton: !1,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        Ot = Object(Tt.a)(xt(Ft), { element: 'contacts_sync' }),
        At = a('6/RC'),
        Nt = Object(pt.createSelector)(
          function (e, t) {
            return Array.isArray(t.location.query.error) ? t.location.query.error[0] : t.location.query.error
          },
          function (e, t) {
            return !!t.location.query.state
          },
          function (e, t) {
            return { importError: e, startImport: t }
          },
        ),
        Pt = {
          createLocalApiErrorHandler: Object(Me.createLocalApiErrorHandlerWithContextFactory)('EMAIL_CONTACTS_SYNC'),
          importStatus: lt.e,
          scribeAction: st.c,
          syncContacts: lt.y,
        },
        Dt = Object(dt.g)(Nt, Pt),
        Bt = a('3XMw'),
        Rt = a.n(Bt),
        Lt = a('lUZE'),
        Vt = a('8jkQ'),
        Mt = a('0zXz'),
        jt = Rt.a.cea71013,
        Ut = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e) {
            var n
            return (
              l()(this, a),
              (n = t.call(this, e)),
              v()(p()(n), '_startContactImports', function (e) {
                n._scribeOAuthAction('accepted')
                var t = n.props,
                  a = t.createLocalApiErrorHandler
                ;(0, t.syncContacts)(e)
                  .then(function (e) {
                    return n._pollImportStatus()
                  })
                  .catch(function (e) {
                    a()(e), n.setState({ importFinished: !0 })
                  })
              }),
              v()(p()(n), '_handlePrimaryActionClick', function () {
                var e = n.props.subtask,
                  t = e.authorization_url
                if (e.open_in_new_tab && At.canUseDOM) {
                  var a = window.innerWidth,
                    r = 'width=500,height=500,top=0,left='.concat(a - 500, ',toolbar=no,location=yes')
                  window.open(t, 'twitter_oauth', r).focus()
                } else Vt.b.navigateTo(t)
              }),
              v()(p()(n), '_handleTertiaryActionClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  r = e.subtaskId,
                  i = e.updateFlow,
                  o = a.skip_link
                i(r, { link: o.link_id }), t(o)
              }),
              v()(p()(n), '_scribeOAuthAction', function (e) {
                ;(0,
                n.props
                  .scribeAction)({ page: 'onboarding', section: 'email_contacts_sync', component: 'oauth_prompt', element: 'permission', action: e })
              }),
              v()(p()(n), '_handleEvent', function (e) {
                if (e.origin === 'https://'.concat(window.location.hostname)) {
                  var t = o()(
                    { callback_url: 'https://'.concat(window.location.hostname).concat(window.location.pathname) },
                    e.data,
                  )
                  !t.error && t.state && n._startContactImports(t)
                }
              }),
              v()(p()(n), '_pollImportStatus', function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                if (e > 10) n.setState({ importFinished: !0 })
                else {
                  var t = n.props,
                    a = t.createLocalApiErrorHandler,
                    r = t.importStatus
                  n._timer = setTimeout(function () {
                    r()
                      .then(function (t) {
                        switch (t.status) {
                          case y.e.Success:
                            n.setState({ importFinished: !0 })
                            break
                          case y.e.NotFound:
                            n._pollImportStatus(e + 1)
                            break
                          default:
                            n.setState({ importFinished: !0 })
                        }
                      })
                      .catch(function (e) {
                        a()(e), n.setState({ importFinished: !0 })
                      })
                  }, 1e3)
                }
              }),
              (n.state = { importFinished: void 0 }),
              (n._navigating = !1),
              window.addEventListener('message', n._handleEvent, !1),
              n
            )
          }
          return (
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.importError,
                    a = e.location,
                    n = e.onNavigate,
                    r = e.passthroughOcfScreenProps.history,
                    i = e.startImport,
                    o = e.subtask,
                    s = e.subtaskId,
                    l = e.updateFlow
                  this._showLoadingSpinner = i
                  var c = o.decline_link
                  if ('access_denied' === t) this._scribeOAuthAction('declined'), c && (l(s, { link: c.link_id }), n(c))
                  else if (i) {
                    var u = a.query,
                      d = u.error,
                      p = u.state,
                      h = { callback_url: 'https://'.concat(window.location.hostname).concat(a.pathname) }
                    d && 'string' == typeof d && (h.error = d),
                      p && 'string' == typeof p && (h.state = p),
                      r && r.replace(a.pathname),
                      this._startContactImports(h)
                  }
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._timer && clearTimeout(this._timer), window.removeEventListener('message', this._handleEvent, !1)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.subtask,
                    n = e.subtaskId,
                    r = e.updateFlow,
                    i = this.state.importFinished,
                    o = a.next_link
                  !this._navigating && i && ((this._navigating = !0), r(n, { link: o.link_id }), t(o))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    a = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = i.accept_text,
                    l = i.detail_text,
                    c = i.primary_text,
                    u = i.secondary_text,
                    d = i.skip_link,
                    p = k.a.createElement(ee, r()({}, c, { nativeID: w.b, onNavigate: a, subtaskInputs: o })),
                    h = u ? k.a.createElement(ee, r()({}, u, { onNavigate: a, subtaskInputs: o })) : null,
                    m = l ? k.a.createElement(ee, r()({}, l, { onNavigate: a, subtaskInputs: o })) : null
                  return this._showLoadingSpinner
                    ? k.a.createElement(He.a, {
                        fetchStatus: Ue.a.LOADING,
                        loadingMessage: jt,
                        onRequestRetry: xe.a,
                        render: Mt.a,
                        retryable: !1,
                      })
                    : k.a.createElement(
                        pe.a,
                        r()({ hideLogo: !0 }, n),
                        k.a.createElement(Se.a, {
                          actionLabel: s,
                          footer: m,
                          graphic: Lt.a,
                          graphicStyle: zt.twitterIcon,
                          headline: p,
                          onAction: this._handlePrimaryActionClick,
                          onClose: xe.a,
                          onTertiaryAction: this._handleTertiaryActionClick,
                          subtext: h,
                          tertiaryActionLabel: d.label,
                          withCloseButton: !1,
                        }),
                        t,
                      )
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        zt = D.a.create(function (e) {
          return { twitterIcon: { color: e.colors.brandColor } }
        }),
        Ht = Dt(Ut),
        Wt = Object(pt.createSelector)(lt.o, lt.x, function (e, t) {
          return { navigationContext: e, verificationSendFailureMessage: t }
        }),
        Gt = {
          createLocalApiErrorHandler: Object(Me.createLocalApiErrorHandlerWithContextFactory)(
            'OCF_FLOW_EMAIL_VERIFICATION',
          ),
          getVerificationStatus: lt.f,
          verifyIdentifier: lt.B,
        },
        qt = Object(dt.g)(Wt, Gt),
        Kt = a('p+r5'),
        Yt = a('k49u'),
        Xt = a('OIs+'),
        Jt = Rt.a.e4ff75a9,
        Zt = Rt.a.e4f6bd9e,
        Qt = v()({}, Xt.a.Offline, Jt),
        $t = function (e, t, a) {
          var n,
            r = v()({}, Yt.a.AccessDeniedByBouncer, {
              customAction: function (t) {
                Object(Me.bouncerError)(t, { flow: e })
              },
            })
          if (a)
            n = o()(
              o()({}, r),
              {},
              {
                customErrorHandler: function (n) {
                  var r = A()(n.errors, 1)[0]
                  return (
                    r.code === Yt.a.AccessDeniedByBouncer
                      ? Object(Me.bouncerError)(r, { flow: e })
                      : a(t || (r.code && Qt[r.code]) || Zt),
                    []
                  )
                },
              },
            )
          else if (t) {
            var i,
              s = { toast: { text: t } }
            n = o()(
              ((i = {}),
              v()(i, Yt.a.ValidationFailure, s),
              v()(i, Yt.a.OnboardingFlowRetriableFailure, s),
              v()(i, Yt.a.OnboardingFlowFailure, s),
              v()(i, 'defaultToast', { text: t }),
              v()(i, 'showToast', !0),
              i),
              r,
            )
          } else {
            var l
            n = o()(
              o()({}, r),
              {},
              ((l = {}),
              v()(l, Xt.a.Offline, { toast: { text: Qt[Xt.a.Offline] } }),
              v()(l, 'defaultToast', { text: Zt }),
              v()(l, 'showToast', !0),
              l),
            )
          }
          return n
        },
        ea = 'email',
        ta = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              v()(p()(n), '_sendEmailVerificationRequest', function () {
                var e = n.props,
                  t = e.createLocalApiErrorHandler,
                  a = e.onNavigate,
                  r = e.subtask,
                  i = e.subtaskInputs,
                  o = e.verifyIdentifier,
                  s = (r.email && Object(Q.g)(i, r.email)) || void 0,
                  l = (r.name && Object(Q.g)(i, r.name)) || void 0
                return o({ email: s, display_name: l })
                  .then(function (e) {
                    n.setState({ email: s })
                  })
                  .catch(function (e) {
                    var i = n.props,
                      o = i.flowName,
                      s = i.verificationSendFailureMessage
                    t($t(o, s || Zt))(e), a(r.fail_link)
                  })
              }),
              v()(p()(n), '_handleCodeUpdated', function (e) {
                n.setState({ pinCode: e.target.value })
              }),
              v()(p()(n), '_startStatusPolling', function () {
                var e = n.props,
                  t = e.createLocalApiErrorHandler,
                  a = e.getVerificationStatus,
                  r = e.subtask,
                  i = e.subtaskInputs,
                  o = r.email.subtask_data_reference,
                  s = o ? i[o.subtask_id][o.key] : void 0
                n._timer = setTimeout(function () {
                  a({ email: s })
                    .then(function (e) {
                      e.verified
                        ? (n.setState({ pinCode: e.pin_code }), n._clearTimer(), n._handleDoneButtonClick())
                        : (n._clearTimer(), n._startStatusPolling())
                    })
                    .catch(function (e) {
                      t()(e), n._clearTimer(), n._startStatusPolling()
                    })
                }, 1e3)
              }),
              v()(p()(n), '_clearTimer', function () {
                n._timer && clearTimeout(n._timer)
              }),
              v()(p()(n), '_handleDoneButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  r = e.subtaskId,
                  i = e.updateFlow,
                  o = n.state,
                  s = o.email
                i(r, { code: o.pinCode, email: s, link: a.next_link.link_id }), t(a.next_link)
              })
            var r = e.subtaskId,
              i = e.subtaskInputs,
              o = Object(Q.e)(i, { key: ea, subtask_id: r }, '') || ''
            return (n.state = { email: o, pinCode: '' }), n
          }
          return (
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  return (
                    this.props.subtask.verification_status_polling_enabled && this._startStatusPolling(),
                    this._sendEmailVerificationRequest()
                  )
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._clearTimer()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    n = e.progressIndication,
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = k.a.createElement(
                      x.a,
                      {
                        disabled: !this.state.pinCode,
                        onPress: this._handleDoneButtonClick,
                        size: 'large',
                        type: 'primaryFilled',
                      },
                      i.next_link.label,
                    ),
                    l = k.a.createElement(
                      ee,
                      r()({}, i.detail_text, { color: 'link', onNavigate: t, style: aa.detailLink, subtaskInputs: o }),
                    )
                  return k.a.createElement(
                    pe.a,
                    r()({}, a, { progressIndication: n, rightControl: s }),
                    k.a.createElement(
                      N.a,
                      null,
                      k.a.createElement(
                        N.a,
                        { style: re.contentArea },
                        i.primary_text &&
                          k.a.createElement(
                            ee,
                            r()({}, i.primary_text, {
                              nativeID: w.b,
                              onNavigate: t,
                              size: 'title4',
                              style: re.headline,
                              subtaskInputs: o,
                              weight: 'bold',
                            }),
                          ),
                        i.secondary_text &&
                          k.a.createElement(
                            ee,
                            r()({}, i.secondary_text, { color: 'gray700', onNavigate: t, subtaskInputs: o }),
                          ),
                        k.a.createElement(Kt.a, {
                          autoFocus: !0,
                          helperText: i.detail_text && l,
                          label: i.hint_text,
                          name: 'verfication_code',
                          onChange: this._handleCodeUpdated,
                          style: re.formTextInput,
                          value: this.state.pinCode,
                        }),
                      ),
                    ),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        aa = D.a.create(function (e) {
          return { detailLink: { marginTop: e.spaces.space16 } }
        }),
        na = qt(ta),
        ra = a('mN6z'),
        ia = a('S8sr'),
        oa = { day: void 0, month: void 0, year: void 0 },
        sa = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              v()(p()(n), '_handleDateChange', function (e) {
                n.setState({ date: e })
              }),
              v()(p()(n), '_isCompleteDate', function (e) {
                return !!(e && e.year && e.month && e.day)
              }),
              v()(p()(n), '_isDateEmpty', function () {
                var e = n.state.date
                return Object(ra.a)(e, oa)
              }),
              v()(p()(n), '_meetsMinYearRequirement', function (e) {
                var t,
                  a,
                  r = n.props.subtask.valid_interval
                return !(
                  null != r &&
                  null !== (t = r.min) &&
                  void 0 !== t &&
                  t.year &&
                  !(e.year && e.year >= (null == r || null === (a = r.min) || void 0 === a ? void 0 : a.year))
                )
              }),
              v()(p()(n), '_meetsMaxYearRequirement', function (e) {
                var t,
                  a,
                  r = n.props.subtask.valid_interval
                return !(
                  null != r &&
                  null !== (t = r.max) &&
                  void 0 !== t &&
                  t.year &&
                  !(e.year && e.year <= (null == r || null === (a = r.max) || void 0 === a ? void 0 : a.year))
                )
              }),
              v()(p()(n), '_isDateValid', function () {
                var e = n.state.date
                return n._isCompleteDate(e) && n._meetsMinYearRequirement(e) && n._meetsMaxYearRequirement(e)
              }),
              v()(p()(n), '_dateErrorMessage', function () {
                var e = n.state.date
                if (n._isCompleteDate(e)) {
                  var t = n.props.subtask,
                    a = t.max_date_error,
                    r = t.min_date_error,
                    i = n._meetsMinYearRequirement(e)
                  return n._meetsMaxYearRequirement(e)
                    ? i || null == r
                      ? void 0
                      : r.text
                    : null == a
                    ? void 0
                    : a.text
                }
              }),
              v()(p()(n), '_handleDoneButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask.next_link,
                  r = e.subtaskId,
                  i = e.updateFlow,
                  o = n.state.date
                o && n._isDateValid() && (i(r, { date: o, link: a.link_id }), t(a))
              }),
              v()(p()(n), '_handleSkipButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask.skip_link,
                  r = e.subtaskId,
                  i = e.updateFlow
                a && i(r, { link: a.link_id }), a && t(a)
              })
            var r = n.props,
              i = r.subtaskId,
              o = r.subtaskInputs,
              s = Object(Q.e)(o, { key: 'date', subtask_id: i }, void 0) || oa
            return (n.state = { date: s }), n
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    a = this.props,
                    n = a.errorDialog,
                    i = a.onNavigate,
                    o = a.passthroughOcfScreenProps,
                    s = a.subtask,
                    l = a.subtaskInputs,
                    c = s.detail_text,
                    u = s.hint_text,
                    d = s.next_link,
                    p = s.selectable_interval,
                    h = s.skip_link,
                    m = this.state.date,
                    _ = void 0 === m ? {} : m,
                    b = k.a.createElement(
                      x.a,
                      {
                        disabled: !this._isDateValid(),
                        onPress: this._handleDoneButtonClick,
                        size: 'large',
                        type: 'primaryFilled',
                      },
                      d.label,
                    ),
                    f =
                      h &&
                      k.a.createElement(
                        x.a,
                        { onPress: this._handleSkipButtonClick, size: 'large', type: 'primaryText' },
                        h.label,
                      )
                  return k.a.createElement(
                    pe.a,
                    r()({}, o, { rightControl: h && this._isDateEmpty() ? f : b }),
                    k.a.createElement(
                      N.a,
                      { style: [re.contentArea, re.centerText] },
                      k.a.createElement(de, { header: s.header, onNavigate: i, subtaskInputs: l }),
                      k.a.createElement(ia.a, {
                        autofocus: !0,
                        day: _.day,
                        errorMessage: this._dateErrorMessage(),
                        label: u,
                        maxSelectableYear: null == p || null === (e = p.max) || void 0 === e ? void 0 : e.year,
                        minSelectableYear: null == p || null === (t = p.min) || void 0 === t ? void 0 : t.year,
                        month: _.month,
                        onChange: this._handleDateChange,
                        year: _.year,
                      }),
                      c
                        ? k.a.createElement(ee, r()({}, c, { color: 'gray700', onNavigate: i, subtaskInputs: l }))
                        : null,
                    ),
                    n,
                  )
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        la = (a('iKE+'), a('1LXv'), a('e/gN'), a('DZ+c'), a('3uku'), a('RgK2')),
        ca = a.n(la),
        ua = a('3zvM'),
        da = a('lMB6'),
        pa = a('FgXs'),
        ha = ['localValidator'],
        ma = function (e) {
          return { valid: !0 }
        }
      function _a() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.localValidator,
          a = void 0 === t ? ma : t,
          n = E()(e, ha),
          r = Object(ua.f)(
            o()(
              {
                customActions: {
                  clear: {
                    reducer: function (e, t) {
                      return {}
                    },
                  },
                },
              },
              n,
            ),
          )
        ;(r.clear = function () {
          return function (e) {
            return e({ type: r.customActionTypes.clear.SUCCESS })
          }
        }),
          (r.validate = function (e, t) {
            return function (n) {
              var i = a(e, t)
              return i.valid ? n(r.fetchOneIfNeeded(e, t)) : (n(r.add(v()({}, e, i))), Promise.resolve())
            }
          })
        var i = function (e) {
            return r.selectState(e).fetchStatus || ca.a
          },
          s = function (e, t) {
            return Object(pa.a)(t, function (t, a) {
              var n = e[a] || {}
              return o()(o()({}, n), {}, { valid: !!n.valid || t === Ue.a.FAILED, isLoading: t === Ue.a.LOADING })
            })
          }
        return (r.selectEntitiesWithFetchStatus = Object(pt.createSelector)(r.selectAll, i, s)), da.a.register(r)
      }
      var ba = new RegExp('^[a-zA-Z0-9_\\-+\\.!\\&]+@(?:[a-zA-Z0-9\\-_]+\\.)+[a-zA-Z]{2,63}$'),
        fa = Rt.a.hc72e1fc,
        va = _a({
          namespace: 'emailValidity',
          fetchOneContext: 'FETCH_EMAIL_VALIDITY',
          fetchOneEndpoint: function (e) {
            return e.Validity.isEmailAvailable
          },
          fetchOneParams: function (e, t) {
            var a = A()(e, 1)[0]
            return o()({ email: a }, t)
          },
          localValidator: function (e) {
            var t = ba.test(e)
            return { errorMessage: fa, valid: t }
          },
        }),
        ga =
          (a('tVqn'),
          function (e, t) {
            return t.module.selectEntitiesWithFetchStatus(e)
          }),
        ka = Object(Ve.a)()
          .propsFromState(function () {
            return { validity: ga }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              clearValidity: t.clear,
              createLocalApiErrorHandler: Object(Me.createLocalApiErrorHandlerWithContextFactory)(
                'VALIDITY_FIELD_CONTEXT',
              ),
              validate: t.validate,
            }
          }),
        ya = a('VY6S'),
        wa = ['value'],
        Ca = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e, n) {
            var r
            l()(this, a),
              (r = t.call(this, e, n)),
              v()(p()(r), '_setInputRef', function (e) {
                r._input = e
              }),
              v()(p()(r), '_handleValueChange', function (e) {
                var t = r.props,
                  a = t.onChange,
                  n = t.validationParams,
                  i = e.target.value.trim()
                r._validateDebounced(o()({ value: i }, n)), r.setState({ value: i }), a && a(e)
              }),
              v()(p()(r), '_getIsValid', function (e, t) {
                return !!(t && e[t] && e[t].valid)
              })
            var i = e.defaultValue || ''
            return (
              (r.state = { value: i, isValid: r._getIsValid(e.validity, i) }),
              (r._validateDebounced = Object(ya.a)(function (e) {
                var t = e.value,
                  a = E()(e, wa)
                return r.props.validate(t, a).catch(r.props.createLocalApiErrorHandler())
              }, 500)),
              r
            )
          }
          return (
            u()(a, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.props.clearValidity(), this._validateDebounced.clear(), this.props.onRef(null)
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.defaultValue,
                    n = t.validationParams
                  a && this._validateDebounced(o()({ value: a }, n)),
                    this.props.onValidityChange(this.state.isValid),
                    this.props.onRef({
                      clear: function () {
                        return e.clear()
                      },
                      focus: function () {
                        return e.focus()
                      },
                      isValid: function () {
                        return e.isValid()
                      },
                      getValue: function () {
                        return e.getValue()
                      },
                    })
                },
              },
              {
                key: 'UNSAFE_componentWillUpdate',
                value: function (e, t) {
                  var a = this.props.validity,
                    n = this.state.value
                  if (a !== e.validity || n !== t.value) {
                    var r = this._getIsValid(e.validity, t.value)
                    this.state.isValid !== r && this.setState({ isValid: r })
                  }
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var a = this.state.value,
                    n = t.isValid !== this.state.isValid,
                    r = !Object(ra.a)(e.validationParams, this.props.validationParams)
                  n
                    ? this.props.onValidityChange(this.state.isValid)
                    : a &&
                      r &&
                      (this.props.clearValidity(),
                      this._validateDebounced(o()({ value: a }, this.props.validationParams)))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.autoComplete,
                    a = e.autoFocus,
                    n = e.editable,
                    r = e.label,
                    i = e.name,
                    o = e.style,
                    s = e.type,
                    l = e.validity,
                    c = this.state.value,
                    u = c && l[c] ? l[c].errorMessage : ''
                  return k.a.createElement(Kt.a, {
                    autoComplete: t,
                    autoFocus: a,
                    editable: n,
                    errorText: u,
                    invalid: !!u,
                    label: r,
                    name: i,
                    onChange: this._handleValueChange,
                    ref: this._setInputRef,
                    style: o,
                    type: s,
                    value: this.state.value,
                  })
                },
              },
              {
                key: 'clear',
                value: function () {
                  this.setState({ value: '', isValid: !1 })
                },
              },
              {
                key: 'isValid',
                value: function () {
                  return this.state.isValid
                },
              },
              {
                key: 'getValue',
                value: function () {
                  return this.state.value
                },
              },
              {
                key: 'focus',
                value: function () {
                  this._input && this._input.focus()
                },
              },
            ]),
            a
          )
        })(k.a.Component)
      v()(Ca, 'defaultProps', { label: '' })
      var Ea = ka(Ca),
        Ia = a('aWzz'),
        xa = a('H9wA'),
        Sa = {
          autoComplete: Ia.string,
          autoFocus: Ia.bool,
          defaultValue: Ia.string,
          editable: Ia.bool,
          label: Ia.string,
          name: Ia.string.isRequired,
          onChange: Ia.func,
          onRef: Ia.func.isRequired,
          onValidityChange: Ia.func.isRequired,
          style: xa.a.style,
          type: Ia.string,
        },
        Ta =
          (o()(
            o()({}, Sa),
            {},
            {
              clearValidity: Ia.func.isRequired,
              createLocalApiErrorHandler: Ia.func.isRequired,
              module: Ia.object.isRequired,
              validate: Ia.func.isRequired,
              validity: Ia.object.isRequired,
            },
          ),
          ['onRef']),
        Fa = function (e) {
          var t = e.onRef,
            a = E()(e, Ta)
          return k.a.createElement(Ea, r()({ module: va, onRef: t, type: 'email' }, a))
        },
        Oa = (a('uFXj'), a('/Dbh')),
        Aa = Rt.a.d5568440,
        Na = _a({
          namespace: 'passwordValidity',
          fetchOneContext: 'FETCH_PASSWORD_VALIDITY',
          fetchOneEndpoint: function (e) {
            return e.Validity.fetchPasswordStrength
          },
          fetchOneParams: function (e, t) {
            var a = A()(e, 1)[0]
            return o()({ password: a }, t)
          },
          localValidator: function (e, t) {
            var a = !(!t || !t.username) && e === t.username,
              n = e.length >= Oa.b,
              r = e.length <= Oa.a,
              i = Aa
            return (
              n ? r || (i = Me.NEW_PASSWORD_LONG) : (i = Me.NEW_PASSWORD_SHORT),
              { errorMessage: !a && n && r ? void 0 : i, valid: n && r && !a }
            )
          },
        }),
        Pa = Object(Ve.a)()
          .propsFromState(function () {
            return { validityMap: Na.selectEntitiesWithFetchStatus }
          })
          .propsFromActions(function () {
            return {
              clearPasswordValidity: Na.clear,
              createLocalApiErrorHandler: Object(Me.createLocalApiErrorHandlerWithContextFactory)(
                'PASSWORD_FIELD_CONTEXT',
              ),
              validator: Na.validate,
            }
          })
          .withAnalytics({ page: 'onboarding', component: 'password_entry' }),
        Da = Rt.a.dec3c9b8,
        Ba = Rt.a.fa69a1ca,
        Ra = Rt.a.aacf5085,
        La = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              v()(p()(n), '_validate', function (e, t) {
                n.props.validator(e, t).catch(n.props.createLocalApiErrorHandler()).then(n._onValidationUpdated(e))
              }),
              v()(p()(n), '_validateDebounced', Object(ya.a)(n._validate, 500)),
              v()(p()(n), '_onValidationUpdated', function (e) {
                return function () {
                  var t = n.props,
                    a = t.analytics,
                    r = t.customValidator,
                    i = t.onPasswordValidated,
                    o = t.validityMap,
                    s = (e && o[e] ? o[e] : {}).valid,
                    l = void 0 !== s && s
                  r && 'string' == typeof e && 0 === e.length && (l = r().valid),
                    n.setState({ valid: l }),
                    a.scribe({ element: 'entered_password', action: l ? 'valid' : 'invalid' }),
                    i(l)
                }
              }),
              v()(p()(n), '_renderFormTextInput', function () {
                var e = n.props,
                  t = e.autoComplete,
                  a = e.autoFocus,
                  r = e.customValidator,
                  i = e.helperText,
                  o = e.label,
                  s = e.onSubmitEditing,
                  l = e.showPasswordVisibilityIcon,
                  c = e.validityMap,
                  u = n.state,
                  d = u.password,
                  p = u.revealed,
                  h = n.state.valid,
                  m = (c[d] || {}).errorMessage,
                  _ = void 0 === m ? '' : m
                r && 0 === _.length && ((_ = r().errorMessage), (h = r().valid))
                var b = l
                  ? i
                  : k.a.createElement(
                      P.b,
                      {
                        accessibilityRole: 'button',
                        color: 'link',
                        onPress: n._handleVisibilityToggle,
                        style: Va.toggleLink,
                      },
                      p ? Ra : Ba,
                    )
                return k.a.createElement(Kt.a, {
                  autoComplete: t,
                  autoFocus: a,
                  errorText: _,
                  helperText: b,
                  invalid: !h,
                  label: o || Da,
                  name: 'password',
                  onChange: n._handlePasswordUpdated,
                  onSubmitEditing: h ? s : void 0,
                  showPasswordVisibilityIcon: l,
                  style: re.formTextInput,
                  type: p ? 'text' : 'password',
                  value: d,
                })
              }),
              v()(p()(n), '_handleVisibilityToggle', function () {
                n.setState({ revealed: !n.state.revealed })
              }),
              v()(p()(n), '_handlePasswordUpdated', function (e) {
                var t = n.props,
                  a = t.onPasswordChange,
                  r = t.skipPasswordValidation,
                  i = t.userIdentifier,
                  o = e.target.value
                r || n._validateDebounced(o, { username: i }), n.setState({ password: o }), a(o)
              })
            var r = e.defaultValue
            return (n.state = { revealed: !1, password: r || '', valid: !0 }), n
          }
          return (
            u()(a, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.props.clearPasswordValidity(), this._validateDebounced.clear()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.style,
                    a = e.userIdentifier
                  return k.a.createElement(
                    N.a,
                    { style: [re.formTextInput, t] },
                    a ? k.a.createElement('input', { name: 'username', type: 'hidden', value: a }) : null,
                    this._renderFormTextInput(),
                  )
                },
              },
            ]),
            a
          )
        })(k.a.Component)
      v()(La, 'defaultProps', {
        autoComplete: 'on',
        onPasswordChange: xe.a,
        onPasswordValidated: xe.a,
        skipPasswordValidation: !1,
      })
      var Va = D.a.create(function (e) {
          return { toggleLink: { marginTop: e.spaces.space4 } }
        }),
        Ma = Pa(La),
        ja = D.a.create(function (e) {
          return { textField: { width: '100%' }, textFieldDetails: { marginBottom: e.spaces.space4 } }
        }),
        Ua = function (e) {
          var t = e.autoComplete,
            a = e.autoFocus,
            n = void 0 !== a && a,
            i = e.onChange,
            o = e.onNavigate,
            s = e.onSubmitEditing,
            l = e.passwordProps,
            c = e.style,
            u = e.subtaskInputs,
            d = e.textField,
            p = k.a.useCallback(
              function (e) {
                return i(e.target.value)
              },
              [i],
            )
          if (!d) return null
          var h,
            m = d.content_type,
            _ = d.detail_text,
            b = d.hint_text,
            f = _
              ? k.a.createElement(
                  ee,
                  r()({}, _, { color: 'gray700', onNavigate: o, style: ja.textFieldDetails, subtaskInputs: u }),
                )
              : null
          return m === y.B.Password || m === y.B.NewPassword
            ? k.a.createElement(
                Ma,
                r()({}, l, {
                  autoComplete: t || (m === y.B.Password ? 'current-password' : 'new-password'),
                  autoFocus: n,
                  helperText: f,
                  label: b || '',
                  onPasswordChange: i,
                  onPasswordValidated:
                    null !== (h = null == l ? void 0 : l.onPasswordValidated) && void 0 !== h ? h : xe.a,
                  onSubmitEditing: s,
                  style: [re.formTextInput, ja.textField, c],
                }),
              )
            : k.a.createElement(Kt.a, {
                autoComplete: null != t ? t : 'on',
                autoFocus: n,
                helperText: f,
                label: b || '',
                name: 'text',
                onChange: p,
                onSubmitEditing: s,
                style: [re.formTextInput, ja.textField, c],
              })
        },
        za = Rt.a.c52be451,
        Ha = Rt.a.cfd2f35d,
        Wa = Rt.a.gea6cc19,
        Ga = Rt.a.i769e50a,
        qa = Rt.a.ec129eb6,
        Ka = Rt.a.f1b50489,
        Ya = Rt.a.deaf5b15,
        Xa = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(p()(e), 'state', { showRemoveContactsDialog: !1, disableRemoveContactsButton: !1 }),
              v()(p()(e), '_handleRemoveContactsClick', function () {
                e.setState({ showRemoveContactsDialog: !0 })
              }),
              v()(p()(e), '_handleRemoveContactsConfirm', function () {
                e.setState({ showRemoveContactsDialog: !1 }), e._handleRemoveContacts()
              }),
              v()(p()(e), '_handleRemoveContacts', function () {
                var t = e.props,
                  a = t.addToast,
                  n = t.removeContacts
                n &&
                  n()
                    .then(function () {
                      e.setState({ disableRemoveContactsButton: !0 }), a({ text: qa, withClearButton: !0 })
                    })
                    .catch(function () {
                      a({ action: { label: Ya, onAction: e._handleRemoveContacts }, text: Ka, withAutoDismiss: !0 })
                    })
              }),
              v()(p()(e), '_handleRemoveContactsCancel', function () {
                e.setState({ showRemoveContactsDialog: !1 })
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    a = t.onNavigate,
                    n = t.removeContactsSetting,
                    i = t.subtaskInputs,
                    o = this.state.disableRemoveContactsButton
                  return k.a.createElement(
                    N.a,
                    null,
                    k.a.createElement(
                      ee,
                      r()({}, n.primary_text, { onNavigate: a, style: Ja.header, subtaskInputs: i }),
                    ),
                    k.a.createElement(
                      ee,
                      r()({}, n.secondary_text, {
                        color: 'gray700',
                        onNavigate: a,
                        size: 'subtext2',
                        style: Ja.subtext,
                        subtaskInputs: i,
                      }),
                    ),
                    k.a.createElement(
                      N.a,
                      null,
                      null !== (e = n.value_data) && void 0 !== e && e.action_data
                        ? k.a.createElement(
                            x.a,
                            { disabled: o, onPress: this._handleRemoveContactsClick, type: 'destructiveText' },
                            n.value_data.action_data.link.label,
                          )
                        : null,
                      this._maybeRenderRemoveContactsDialog(),
                    ),
                  )
                },
              },
              {
                key: '_maybeRenderRemoveContactsDialog',
                value: function () {
                  return this.state.showRemoveContactsDialog
                    ? k.a.createElement(Ee.a, {
                        cancelButtonLabel: Ha,
                        confirmButtonLabel: za,
                        headline: Wa,
                        onCancel: this._handleRemoveContactsCancel,
                        onConfirm: this._handleRemoveContactsConfirm,
                        onMaskClick: this._handleRemoveContactsCancel,
                        text: Ga,
                      })
                    : null
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        Ja = D.a.create(function (e) {
          return {
            header: { marginTop: e.spaces.space12, marginBottom: e.spaces.space12 },
            subtext: { marginBottom: e.spaces.space20 },
          }
        }),
        Za = Xa,
        Qa = a('KNZn'),
        $a = a('LKCq'),
        en = Rt.a.dd4a83a5,
        tn = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              v()(p()(n), '_handleActionClick', function () {
                var e,
                  t,
                  a = n.props,
                  r = a.onNavigate,
                  i =
                    null === (e = a.settingValue.value_data) ||
                    void 0 === e ||
                    null === (t = e.action_data) ||
                    void 0 === t
                      ? void 0
                      : t.link
                i && r(i)
              }),
              v()(p()(n), '_handleButtonNavigation', function (e, t) {
                var a = n.props,
                  r = a.onNavigate,
                  i = a.updateFlow
                t === y.t.NextButton && (null == i || i(e)), r && e && r(e)
              }),
              v()(p()(n), '_getSettingValueFromSubtaskInputs', function (e) {
                var t,
                  a,
                  r = n.props,
                  i = r.subtaskId,
                  o = r.subtaskInputs,
                  s = e.value_identifier,
                  l = e.value_type,
                  c = (Object(Q.e)(o, { key: y.s, subtask_id: i }, []) || []).find(function (e) {
                    return e.key === s
                  })
                c &&
                  Object(Q.i)(l) &&
                  (t = null === (a = c.response_data.boolean_data) || void 0 === a ? void 0 : a.result)
                return t
              }),
              v()(p()(n), '_handleSettingGroupClick', function () {
                var e = n.props,
                  t = e.onSettingGroupClick,
                  a = e.settingValue
                t && t(a)
              }),
              v()(p()(n), '_handleSettingToggle', function () {
                var e = n.props,
                  t = e.onSettingToggle,
                  a = e.settingValue,
                  r = a.value_identifier
                r && (n.setState(o()(o()({}, n.state), {}, v()({}, r, !n.state[r]))), t && t(a))
              }),
              v()(p()(n), '_handleSettingTextChange', function (e) {
                var t = n.props,
                  a = t.onSettingTextChanged,
                  r = t.settingValue
                null == a || a(r, e)
              }),
              v()(p()(n), '_handleTextFieldOnEditingSubmit', function () {
                var e = n.props,
                  t = e.nextLink,
                  a = e.onNavigate,
                  r = e.updateFlow
                t && (null == r || r(t), a(t))
              }),
              v()(p()(n), '_addToast', function (e) {
                n.props.addToast && n.props.addToast(e)
              }),
              v()(p()(n), '_getButtonDisplayType', function (e) {
                switch (e) {
                  case y.t.GoogleSSOButton:
                    return y.b.GoogleSSO
                  case y.t.AppleSSOButton:
                    return y.b.AppleSSO
                  default:
                    return y.b.Default
                }
              })
            var r = e.settingValue,
              i = r.value_data,
              s = r.value_identifier,
              c = r.value_type
            if (s && Object(Q.i)(c)) {
              var u,
                d = n._getSettingValueFromSubtaskInputs(r)
              if (void 0 === d)
                d = null == i || null === (u = i.boolean_data) || void 0 === u ? void 0 : u.initial_value
              n.state = v()({}, s, d)
            }
            return n
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.settingValue,
                    a = t.primary_text,
                    n = t.secondary_text,
                    r = t.toggle_wrapper,
                    i = t.value_type,
                    o = function () {
                      switch (i) {
                        case y.u.Action:
                          return e._renderAction()
                        case y.u.Boolean:
                        case y.u.PreciseLocation:
                          return e._renderSettingOption()
                        case y.u.SettingsGroup:
                          return e._renderSettingsGroup()
                        case y.u.StaticText:
                          return e._renderHeader()
                        case y.u.TextField:
                          return e._renderTextField()
                        case y.u.DestructiveAction:
                          return e._renderDestructiveAction()
                        case y.u.Separator:
                          return e._renderSeparator()
                        case y.u.Button:
                          return e._renderButton()
                        case y.u.Tweet:
                          return e._renderTweet()
                        default:
                          return null
                      }
                    }
                  return k.a.createElement(
                    k.a.Fragment,
                    null,
                    (a || n) &&
                      (function () {
                        switch (i) {
                          case y.u.Action:
                          case y.u.TextField:
                          case y.u.DestructiveAction:
                          case y.u.Separator:
                          case y.u.Button:
                          case y.u.Tweet:
                            return e._renderHeader()
                          default:
                            return k.a.createElement(k.a.Fragment, null)
                        }
                      })(),
                    r
                      ? k.a.createElement(
                          N.a,
                          { style: an.interstitial },
                          k.a.createElement($a.a, { label: k.a.createElement(k.a.Fragment, null, en) }, o()),
                        )
                      : o(),
                  )
                },
              },
              {
                key: '_renderHeader',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.settingValue,
                    n = e.subtaskInputs,
                    i = a.primary_text,
                    o = a.secondary_text
                  return k.a.createElement(
                    N.a,
                    { style: an.header },
                    i
                      ? k.a.createElement(
                          ee,
                          r()({}, i, { onNavigate: t, size: 'headline1', subtaskInputs: n, weight: 'bold' }),
                        )
                      : null,
                    o
                      ? k.a.createElement(
                          ee,
                          r()({}, o, {
                            color: 'gray700',
                            onNavigate: t,
                            size: 'body',
                            style: an.secondaryText,
                            subtaskInputs: n,
                          }),
                        )
                      : null,
                  )
                },
              },
              {
                key: '_renderTextField',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.settingValue,
                    n = e.subtaskInputs,
                    r = a.value_data,
                    i = a.value_identifier
                  if (null == r || !r.text_field) return null
                  var o = i === y.t.UserIdentifier
                  return k.a.createElement(Ua, {
                    autoComplete: o ? 'username' : void 0,
                    onChange: this._handleSettingTextChange,
                    onNavigate: t,
                    onSubmitEditing: this._handleTextFieldOnEditingSubmit,
                    subtaskInputs: n,
                    textField: r.text_field,
                  })
                },
              },
              {
                key: '_renderDestructiveAction',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.removeContacts,
                    n = e.settingValue,
                    r = e.subtaskInputs
                  return k.a.createElement(
                    N.a,
                    { style: { marginBottom: D.a.theme.spaces.space16 } },
                    k.a.createElement(Za, {
                      addToast: this._addToast,
                      onNavigate: t,
                      removeContacts: a,
                      removeContactsSetting: n,
                      subtaskInputs: r,
                    }),
                  )
                },
              },
              {
                key: '_renderSeparator',
                value: function () {
                  var e,
                    t = this.props,
                    a = t.onNavigate,
                    n = t.settingValue,
                    r = t.subtaskInputs,
                    i = n.value_data
                  return k.a.createElement(ne, {
                    label: null == i || null === (e = i.separator) || void 0 === e ? void 0 : e.label,
                    onNavigate: a,
                    subtaskInputs: r,
                  })
                },
              },
              {
                key: '_renderAction',
                value: function () {
                  var e,
                    t,
                    a = this.props,
                    n = a.onNavigate,
                    i = a.settingValue,
                    o = a.subtaskInputs,
                    s =
                      null === (e = i.value_data) || void 0 === e || null === (t = e.action_data) || void 0 === t
                        ? void 0
                        : t.link.label
                  return k.a.createElement(
                    N.a,
                    null,
                    k.a.createElement(
                      ee,
                      r()({}, i.primary_text, { onNavigate: n, style: an.header, subtaskInputs: o }),
                    ),
                    k.a.createElement(
                      ee,
                      r()({}, i.secondary_text, {
                        color: 'gray700',
                        onNavigate: n,
                        size: 'subtext2',
                        subtaskInputs: o,
                      }),
                    ),
                    s
                      ? k.a.createElement(
                          N.a,
                          null,
                          k.a.createElement(x.a, { onPress: this._handleActionClick, type: 'primaryText' }, s),
                        )
                      : null,
                  )
                },
              },
              {
                key: '_renderButton',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.settingValue,
                    n = t.subtaskId,
                    r = t.subtaskInputs,
                    i = a.value_data,
                    o = a.value_identifier
                  if (null == i || !i.button) return null
                  var s = i.button.navigation_link,
                    l = (null == s ? void 0 : s.link_type) === y.m.ChromelessWeb
                  return k.a.createElement(oe, {
                    button: i.button,
                    displayType: this._getButtonDisplayType(o),
                    link: l && null != s && s.url ? { external: !0, pathname: s.url } : void 0,
                    onNavigate: function () {
                      return e._handleButtonNavigation(s, o)
                    },
                    subtaskId: n,
                    subtaskInputs: r,
                  })
                },
              },
              {
                key: '_renderTweet',
                value: function () {
                  var e = this.props.settingValue.value_data
                  return null != e && e.tweet ? k.a.createElement(Qa.a, { tweet: e.tweet }) : null
                },
              },
              {
                key: '_renderSettingOption',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.settingValue,
                    n = e.showDividers,
                    i = e.subtaskInputs,
                    o = a.primary_text,
                    s = a.secondary_text,
                    l = a.value_identifier
                  return k.a.createElement(
                    N.a,
                    { accessibilityRole: 'label', focusable: !0, style: [re.option, n && an.optionDivider] },
                    k.a.createElement(
                      N.a,
                      { style: re.checkboxText },
                      k.a.createElement(ee, r()({}, o, { onNavigate: t, subtaskInputs: i })),
                      s
                        ? k.a.createElement(
                            ee,
                            r()({}, s, {
                              color: 'gray700',
                              onNavigate: t,
                              size: 'subtext2',
                              style: an.secondaryText,
                              subtaskInputs: i,
                            }),
                          )
                        : null,
                    ),
                    l ? k.a.createElement($e.a, { checked: this.state[l], onChange: this._handleSettingToggle }) : null,
                  )
                },
              },
              {
                key: '_renderSettingsGroup',
                value: function () {
                  var e,
                    t,
                    a = this.props,
                    n = a.onNavigate,
                    i = a.settingValue,
                    o = a.subtaskInputs,
                    s = i.primary_text,
                    l = i.secondary_text,
                    c = i.value_data,
                    u = null == c || null === (e = c.settings_group_data) || void 0 === e ? void 0 : e.settings,
                    d =
                      null == c || null === (t = c.settings_group_data) || void 0 === t
                        ? void 0
                        : t.status_text_quantity_pairs
                  return k.a.createElement(
                    N.a,
                    { accessibilityRole: 'button', onClick: this._handleSettingGroupClick, style: an.settingGroup },
                    k.a.createElement(ee, r()({}, s, { onNavigate: n, subtaskInputs: o })),
                    u && d ? this._renderQuantityStatus(u, d) : null,
                    l
                      ? k.a.createElement(
                          ee,
                          r()({}, l, { color: 'gray700', onNavigate: n, size: 'subtext2', subtaskInputs: o }),
                        )
                      : null,
                  )
                },
              },
              {
                key: '_renderQuantityStatus',
                value: function (e, t) {
                  var a,
                    n = this,
                    i = this.props,
                    o = i.onNavigate,
                    s = i.subtaskInputs,
                    l = e.reduce(function (e, t) {
                      return e + (n._getSettingValueFromSubtaskInputs(t) ? 1 : 0)
                    }, 0)
                  return (
                    t.forEach(function (e) {
                      l >= e.threshold &&
                        (a = k.a.createElement(
                          ee,
                          r()({}, e.text, {
                            color: 'gray700',
                            onNavigate: o,
                            size: 'subtext2',
                            style: an.quantityStatusText,
                            subtaskInputs: s,
                          }),
                        ))
                    }),
                    a
                  )
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        an = D.a.create(function (e) {
          return {
            header: { marginTop: e.spaces.space32 },
            secondaryText: { marginTop: e.spaces.space12 },
            quantityStatusText: { marginTop: e.spaces.space2, marginBottom: e.spaces.space12 },
            optionDivider: {
              paddingBottom: e.spaces.space12,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
            },
            settingGroup: { marginTop: e.spaces.space12 },
            textField: { width: '100%' },
            textFieldDetails: { marginBottom: e.spaces.space4 },
            interstitial: { marginTop: e.spaces.space12 },
          }
        }),
        nn = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              v()(p()(n), '_renderEmailTextField', function () {
                return k.a.createElement(Fa, {
                  autoComplete: 'email',
                  autoFocus: !0,
                  defaultValue: n.state.email,
                  label: n.props.subtask.hint_text,
                  name: 'email',
                  onRef: n._handleSetInputRef,
                  onValidityChange: n._handleUpdateValidity,
                  style: rn.emailTextField,
                })
              }),
              v()(p()(n), '_getInitialSettingValues', function (e, t, a) {
                var n
                return null === (n = e.settings) || void 0 === n
                  ? void 0
                  : n.map(function (e) {
                      var n,
                        r,
                        i,
                        o,
                        s = e.value_identifier
                      if (void 0 === s) return {}
                      var l =
                        null !==
                          (n =
                            null === (r = e.value_data) || void 0 === r || null === (i = r.boolean_data) || void 0 === i
                              ? void 0
                              : i.initial_value) &&
                        void 0 !== n &&
                        n
                      return {
                        valueIdentifier: s,
                        value: null !== (o = Object(Q.e)(a, { key: s, subtask_id: t }, void 0)) && void 0 !== o ? o : l,
                      }
                    })
              }),
              v()(p()(n), '_toggleSettingValue', function (e) {
                var t = n.state.settingValues,
                  a =
                    null == t
                      ? void 0
                      : t.map(function (t) {
                          return t.valueIdentifier === e ? { valueIdentifier: e, value: !t.value } : t
                        })
                n.setState({ settingValues: a })
              }),
              v()(p()(n), '_renderSettings', function () {
                var e,
                  t,
                  a = n.props,
                  r = a.onNavigate,
                  i = a.subtask,
                  o = a.subtaskId,
                  s = a.subtaskInputs
                return null !==
                  (e =
                    null === (t = i.settings) || void 0 === t
                      ? void 0
                      : t.map(function (e) {
                          var t = e.value_identifier
                          return void 0 === t
                            ? null
                            : k.a.createElement(tn, {
                                key: t,
                                onNavigate: r,
                                onSettingToggle: function () {
                                  return n._toggleSettingValue(t)
                                },
                                settingValue: e,
                                subtaskId: o,
                                subtaskInputs: s,
                              })
                        })) && void 0 !== e
                  ? e
                  : null
              }),
              v()(p()(n), '_handleDoneButtonClick', function () {
                var e = n.props.subtask,
                  t = n.state.settingValues,
                  a = {
                    setting_responses:
                      null == t
                        ? void 0
                        : t.map(function (e) {
                            var t = e.value
                            return { key: e.valueIdentifier, response_data: { boolean_data: { result: t } } }
                          }),
                    email: n._getIdentifierValue(),
                    link: e.next_link.link_id,
                  }
                n._handleButtonClick(e.next_link, a)
              }),
              v()(p()(n), '_handleSkipButtonClick', function () {
                var e = n.props.subtask
                e.skip_link && n._handleButtonClick(e.skip_link, { link: e.skip_link.link_id })
              }),
              v()(p()(n), '_handleButtonClick', function (e, t) {
                var a = n.props,
                  r = a.onNavigate,
                  i = a.subtaskId
                ;(0, a.updateFlow)(i, t), r(e)
              }),
              v()(p()(n), '_handleSetInputRef', function (e) {
                n._input = e
              }),
              v()(p()(n), '_handleUpdateValidity', function () {
                var e = n._input && n._input.isValid()
                n.setState({ isValid: !!e })
              }),
              v()(p()(n), '_getIdentifierValue', function () {
                return (n._input && n._input.getValue()) || void 0
              })
            var r = e.subtask,
              i = e.subtaskId,
              o = e.subtaskInputs,
              s = Object(Q.e)(o, { key: 'email', subtask_id: i }, '') || void 0,
              c = n._getInitialSettingValues(r, i, o)
            return (n.state = { email: s, isValid: !!s, settingValues: c }), n
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    n = e.progressIndication,
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = i.next_link,
                    l = i.primary_text,
                    c = i.secondary_text,
                    u = i.skip_link,
                    d =
                      this.state.isValid || !u
                        ? k.a.createElement(
                            x.a,
                            {
                              disabled: !this.state.isValid,
                              onPress: this._handleDoneButtonClick,
                              size: 'large',
                              type: 'primaryFilled',
                            },
                            s.label,
                          )
                        : k.a.createElement(
                            x.a,
                            { onPress: this._handleSkipButtonClick, size: 'large', type: 'primaryOutlined' },
                            u.label,
                          )
                  return k.a.createElement(
                    pe.a,
                    r()({}, a, { progressIndication: n, rightControl: d }),
                    k.a.createElement(
                      N.a,
                      null,
                      k.a.createElement(
                        N.a,
                        { style: re.contentArea },
                        l &&
                          k.a.createElement(
                            ee,
                            r()({}, l, {
                              nativeID: w.b,
                              onNavigate: t,
                              size: 'title4',
                              style: re.headline,
                              subtaskInputs: o,
                              weight: 'bold',
                            }),
                          ),
                        c && k.a.createElement(ee, r()({}, c, { color: 'gray700', onNavigate: t, subtaskInputs: o })),
                        k.a.createElement(N.a, { style: rn.textFieldArea }, this._renderEmailTextField()),
                        this._renderSettings(),
                      ),
                    ),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        rn = D.a.create(function (e) {
          return {
            textFieldArea: { marginTop: e.spaces.space20 },
            emailTextField: { paddingHorizontal: 0, paddingVertical: e.spaces.space16 },
          }
        }),
        on = { scribeAction: st.c },
        sn = Object(dt.b)(on),
        ln = 'LoginForm_Login_Button',
        cn = a('0yYu'),
        un = Rt.a.d1f6d336,
        dn = Rt.a.a3841918,
        pn = Rt.a.f70cd5ed,
        hn = Rt.a.ca86b62c,
        mn = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e, n) {
            var i
            return (
              l()(this, a),
              (i = t.call(this, e, n)),
              v()(
                p()(i),
                '_passwordlessSsoEnabled',
                i.context.featureSwitches.isTrue('responsive_web_passwordless_sso_enabled'),
              ),
              v()(p()(i), 'state', {}),
              v()(p()(i), '_renderIdentifier', function () {
                var e,
                  t,
                  a = i.props.subtask,
                  n = a.email,
                  r = a.phone_number,
                  o = a.user_identifier_display_type,
                  s = a.username
                return (
                  'phone_number' === o
                    ? ((e = r), (t = pn))
                    : 'username' === o
                    ? ((e = s), (t = un))
                    : 'email' === o && ((e = n), (t = dn)),
                  e && t && o
                    ? k.a.createElement(Kt.a, {
                        editable: !1,
                        label: t,
                        name: o,
                        onChange: xe.a,
                        style: re.formTextInput,
                        value: e,
                      })
                    : null
                )
              }),
              v()(p()(i), '_renderPasswordFields', function () {
                var e = i.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  n = e.subtaskInputs,
                  o = a.show_password_confirmation
                if (a.password_field || a.new_password_field || a.confirm_password_field) {
                  var s,
                    l = { onNavigate: t, onSubmitEditing: i._handleTextSubmit, subtaskInputs: n },
                    c = null !== (s = a.password_field) && void 0 !== s ? s : a.new_password_field
                  return k.a.createElement(
                    k.a.Fragment,
                    null,
                    c
                      ? k.a.createElement(
                          Ua,
                          r()({}, l, {
                            autoFocus: !0,
                            onChange: i._handlePasswordChange,
                            passwordProps: {
                              onPasswordValidated: i._handleValidationChange,
                              showPasswordVisibilityIcon: i._ssoInSliEnterPasswordUpdatesEnabled,
                              skipPasswordValidation: a.skip_password_validation,
                            },
                            textField: c,
                          }),
                        )
                      : null,
                    a.confirm_password_field
                      ? k.a.createElement(
                          Ua,
                          r()({}, l, {
                            onChange: i._handlePasswordConfirmationChange,
                            passwordProps: {
                              onPasswordValidated: i._handleValidationChange,
                              customValidator: i._validatePasswordConfirmation,
                              showPasswordVisibilityIcon: i._ssoInSliEnterPasswordUpdatesEnabled,
                            },
                            textField: a.confirm_password_field,
                          }),
                        )
                      : null,
                  )
                }
                return k.a.createElement(
                  k.a.Fragment,
                  null,
                  k.a.createElement(Ma, {
                    autoComplete: i._getPasswordAutoCompleteValue(),
                    autoFocus: !0,
                    label: a.hint,
                    onPasswordChange: i._handlePasswordChange,
                    onPasswordValidated: i._handleValidationChange,
                    onSubmitEditing: i._handleTextSubmit,
                    showPasswordVisibilityIcon: i._ssoInSliEnterPasswordUpdatesEnabled,
                    skipPasswordValidation: a.skip_password_validation,
                    userIdentifier: a.username,
                  }),
                  o
                    ? k.a.createElement(Ma, {
                        autoComplete: i._getPasswordAutoCompleteValue(),
                        customValidator: i._validatePasswordConfirmation,
                        label: a.password_confirmation_hint,
                        onPasswordChange: i._handlePasswordConfirmationChange,
                        onPasswordValidated: i._handleValidationChange,
                        onSubmitEditing: i._handleTextSubmit,
                        showPasswordVisibilityIcon: i._ssoInSliEnterPasswordUpdatesEnabled,
                        userIdentifier: a.username,
                      })
                    : null,
                )
              }),
              v()(p()(i), '_renderFooter', function () {
                var e,
                  t,
                  a,
                  n,
                  o,
                  s = i.props,
                  l = s.onNavigate,
                  c = s.subtask,
                  u = s.subtaskInputs,
                  d = i._isPasswordValid(),
                  p = i._passwordlessSsoEnabled
                    ? null === (e = c.action_buttons) || void 0 === e
                      ? void 0
                      : e.map(function (e, t) {
                          return k.a.createElement(oe, {
                            button: e,
                            displayType: Object(Q.j)(e.navigation_link.link_id),
                            key: t,
                            onNavigate: l,
                            subtaskInputs: u,
                          })
                        })
                    : [],
                  h =
                    null !== (t = c.footer) && void 0 !== t && t.footnote_text
                      ? k.a.createElement(
                          ee,
                          r()({}, c.footer.footnote_text, {
                            color: 'gray700',
                            onNavigate: l,
                            style: _n.footnoteText,
                            subtaskInputs: u,
                          }),
                        )
                      : null,
                  m =
                    null !== (a = c.footer) && void 0 !== a && a.detail_text
                      ? k.a.createElement(
                          ee,
                          r()({}, c.footer.detail_text, {
                            color: 'gray700',
                            onNavigate: l,
                            style: _n.detailText,
                            subtaskInputs: u,
                          }),
                        )
                      : null,
                  _ =
                    (null === (n = c.footer) || void 0 === n ? void 0 : n.style) === y.i.Floating ? 'medium' : 'large',
                  b =
                    d || !c.skip_link
                      ? k.a.createElement(
                          x.a,
                          {
                            disabled: !d,
                            onPress: i._handleDoneButtonClick,
                            size: _,
                            style: re.button,
                            testID: ln,
                            type: 'primaryFilled',
                          },
                          c.next_link.label,
                        )
                      : k.a.createElement(
                          x.a,
                          { onPress: i._handleSkipButtonClick, size: _, style: re.button, type: 'primaryOutlined' },
                          null === (o = c.skip_link) || void 0 === o ? void 0 : o.label,
                        )
                return k.a.createElement(
                  N.a,
                  null,
                  m,
                  b,
                  null != p && p.length ? k.a.createElement(cn.a, { label: k.a.createElement(P.b, null, hn) }) : null,
                  p,
                  h,
                )
              }),
              v()(p()(i), '_validatePasswordConfirmation', function () {
                var e,
                  t,
                  a,
                  n = i.props.subtask,
                  r = n.password_confirmation_mismatch_message,
                  o =
                    null === (e = n.confirm_password_field) ||
                    void 0 === e ||
                    null === (t = e.validation_messages) ||
                    void 0 === t
                      ? void 0
                      : t.find(function (e) {
                          return e.message_type === y.D.Mismatch
                        })
                if ((o ? (a = o.text.text) : null != r && r.text && (a = null == r ? void 0 : r.text), a)) {
                  var s = i.state
                  if (s.password !== s.passwordConfirmation) return { valid: !1, errorMessage: a }
                }
                return { valid: !0, errorMessage: void 0 }
              }),
              v()(p()(i), '_handleDoneButtonClick', function () {
                var e = i.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  n = e.subtaskId,
                  r = e.updateFlow
                i._saveCredentialsIfNeeded()
                  .then(function () {
                    r(n, { password: i.state.password, link: a.next_link.link_id }), t(a.next_link)
                  })
                  .catch(function () {
                    i._scribeSmartLockError(),
                      r(n, { password: i.state.password, link: a.next_link.link_id }),
                      t(a.next_link)
                  })
              }),
              v()(p()(i), '_handleSkipButtonClick', function () {
                var e = i.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  n = e.subtaskId,
                  r = e.updateFlow,
                  o = a.skip_link
                o && (r(n, { link: o.link_id }), t(o))
              }),
              v()(p()(i), '_scribeSmartLockError', function () {
                ;(0,
                i.props
                  .scribeAction)({ page: 'onboarding', section: 'enter_password', component: 'smart_lock', element: 'prompt', action: 'error' })
              }),
              v()(p()(i), '_handlePasswordChange', function (e) {
                i.setState({ password: e })
              }),
              v()(p()(i), '_handlePasswordConfirmationChange', function (e) {
                i.setState({ passwordConfirmation: e })
              }),
              v()(p()(i), '_handleValidationChange', function (e) {
                var t = i.props.subtask,
                  a = t.show_password_confirmation
                if (t.confirm_password_field || a) {
                  var n = i._validatePasswordConfirmation().valid
                  i.setState({ isPasswordValid: e && n })
                } else i.setState({ isPasswordValid: e })
              }),
              v()(p()(i), '_isPasswordValid', function () {
                var e = i.props.subtask,
                  t = i.state,
                  a = t.isPasswordValid,
                  n = t.password,
                  r = !(n && n.length)
                return a || (e.skip_password_validation && !r)
              }),
              v()(p()(i), '_handleTextSubmit', function () {
                i._isPasswordValid() && i._handleDoneButtonClick()
              }),
              v()(p()(i), '_saveCredentialsIfNeeded', function () {
                var e = i.props.subtask,
                  t = e.email,
                  a = e.phone,
                  n = e.skip_password_validation,
                  r = e.username,
                  o = i.state.password,
                  s = !!window.PasswordCredential,
                  l = r || t || a
                if (l && s && !n && navigator.credentials) {
                  var c = new window.PasswordCredential({ id: l, password: o })
                  return navigator.credentials.store(c)
                }
                return Promise.resolve()
              }),
              v()(p()(i), '_getPasswordAutoCompleteValue', function () {
                switch (i.props.subtask.os_content_type) {
                  case y.o.Password:
                    return 'current-password'
                  case y.o.NewPassword:
                    return 'new-password'
                  default:
                    return 'on'
                }
              }),
              v()(p()(i), '_hasSSOButtons', function () {
                var e
                return !(
                  null === (e = i.props.subtask.action_buttons) ||
                  void 0 === e ||
                  !e.find(function (e) {
                    var t = Object(Q.j)(e.navigation_link.link_id)
                    return t === y.b.GoogleSSO || t === y.b.AppleSSO
                  })
                )
              }),
              (i._ssoInSliEnterPasswordUpdatesEnabled = n.featureSwitches.isTrue(
                'responsive_web_sso_in_sli_enter_password_updates_enabled',
              )),
              i
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    a,
                    n,
                    i = this.props,
                    o = i.errorDialog,
                    s = i.onNavigate,
                    l = i.passthroughOcfScreenProps,
                    c = i.progressIndication,
                    u = i.subtask,
                    d = i.subtaskInputs,
                    p =
                      null !== (e = null === (t = u.footer) || void 0 === t ? void 0 : t.style) && void 0 !== e
                        ? e
                        : y.i.Fixed
                  return k.a.createElement(
                    pe.a,
                    r()({}, l, { progressIndication: c, rightControl: p === y.i.Fixed ? this._renderFooter() : null }),
                    k.a.createElement(
                      N.a,
                      { style: this._hasSSOButtons() ? re.contentAreaCompact : re.contentArea },
                      k.a.createElement(de, {
                        header: u.header,
                        onNavigate: s,
                        primaryTextProp: u.primary_text,
                        secondaryTextProp: u.secondary_text,
                        subtaskInputs: d,
                        userInfo: this._passwordlessSsoEnabled
                          ? k.a.createElement(De, {
                              displayType: y.C.compact,
                              onNavigate: s,
                              subtaskInputs: d,
                              user: null === (a = u.header) || void 0 === a ? void 0 : a.user,
                              userCaption: null === (n = u.header) || void 0 === n ? void 0 : n.user_caption,
                            })
                          : void 0,
                      }),
                      this._renderIdentifier(),
                      this._renderPasswordFields(),
                      p === y.i.Floating || p === y.i.FloatingLarge ? this._renderFooter() : null,
                    ),
                    o,
                  )
                },
              },
            ]),
            a
          )
        })(k.a.Component)
      v()(mn, 'contextType', Ge.a)
      var _n = D.a.create(function (e) {
          return { footnoteText: { marginTop: e.spaces.space40 }, detailText: { marginBottom: e.spaces.space40 } }
        }),
        bn = sn(mn),
        fn = new RegExp('^\\+?[0-9\\-\\.\\(\\)\\s]{7,1000}$'),
        vn = Rt.a.cd24fe6f,
        gn = _a({
          namespace: 'phoneNumberValidity',
          fetchOneContext: 'FETCH_PHONE_VALIDITY',
          fetchOneEndpoint: function (e) {
            return e.Validity.isPhoneNumberAvailable
          },
          fetchOneParams: function (e, t) {
            var a = A()(e, 1)[0]
            return o()({ raw_phone_number: a }, t)
          },
          localValidator: function (e) {
            var t = fn.test(e)
            return { errorMessage: vn, valid: t }
          },
        }),
        kn = ['countryCode', 'onRef'],
        yn = function (e) {
          var t = e.countryCode,
            a = e.onRef,
            n = E()(e, kn),
            i = { country_code: t }
          return k.a.createElement(Ea, r()({ module: gn, onRef: a, type: 'tel', validationParams: i }, n))
        },
        wn = a('6XNv'),
        Cn = Rt.a.gf8388fe,
        En = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              v()(p()(n), '_renderCountryCodes', function () {
                var e = n.props.subtask.country_codes
                if (e && e.length) {
                  var t = e.map(function (e) {
                    return { label: e.text.text, value: e.id }
                  })
                  return k.a.createElement(wn.a, {
                    helperText: void 0,
                    label: Cn,
                    onChange: n._handleCountryChange,
                    options: t,
                    value: n.state.countryCode || '',
                  })
                }
                return null
              }),
              v()(p()(n), '_handleCountryChange', function (e) {
                n.setState({ countryCode: e })
              }),
              v()(p()(n), '_renderPhoneTextField', function () {
                return k.a.createElement(yn, {
                  autoComplete: 'tel',
                  countryCode: n.state.countryCode,
                  defaultValue: n.state.phoneNumber,
                  label: n.props.subtask.hint_text,
                  name: 'phone_number',
                  onRef: n._handleSetInputRef,
                  onValidityChange: n._handleUpdateValidity,
                  style: In.phoneTextField,
                })
              }),
              v()(p()(n), '_getInitialSettingValues', function (e, t, a) {
                var n
                return null === (n = e.settings) || void 0 === n
                  ? void 0
                  : n.map(function (e) {
                      var n,
                        r,
                        i,
                        o,
                        s = e.value_identifier
                      if (void 0 === s) return {}
                      var l =
                        null !==
                          (n =
                            null === (r = e.value_data) || void 0 === r || null === (i = r.boolean_data) || void 0 === i
                              ? void 0
                              : i.initial_value) &&
                        void 0 !== n &&
                        n
                      return {
                        valueIdentifier: s,
                        value: null !== (o = Object(Q.e)(a, { key: s, subtask_id: t }, void 0)) && void 0 !== o ? o : l,
                      }
                    })
              }),
              v()(p()(n), '_toggleSettingValue', function (e) {
                var t = n.state.settingValues,
                  a =
                    null == t
                      ? void 0
                      : t.map(function (t) {
                          return t.valueIdentifier === e ? { valueIdentifier: e, value: !t.value } : t
                        })
                n.setState({ settingValues: a })
              }),
              v()(p()(n), '_renderSettings', function () {
                var e,
                  t,
                  a = n.props,
                  r = a.onNavigate,
                  i = a.subtask,
                  o = a.subtaskId,
                  s = a.subtaskInputs
                return null !==
                  (e =
                    null === (t = i.settings) || void 0 === t
                      ? void 0
                      : t.map(function (e) {
                          var t = e.value_identifier
                          return void 0 === t
                            ? null
                            : k.a.createElement(tn, {
                                key: t,
                                onNavigate: r,
                                onSettingToggle: function () {
                                  return n._toggleSettingValue(t)
                                },
                                settingValue: e,
                                subtaskId: o,
                                subtaskInputs: s,
                              })
                        })) && void 0 !== e
                  ? e
                  : null
              }),
              v()(p()(n), '_handleDoneButtonClick', function () {
                var e = n.props.subtask,
                  t = n.state,
                  a = t.countryCode,
                  r = t.settingValues,
                  i =
                    null == r
                      ? void 0
                      : r.map(function (e) {
                          var t = e.value
                          return { key: e.valueIdentifier, response_data: { boolean_data: { result: t } } }
                        }),
                  o = {
                    country_code: a,
                    phone_number: n._getIdentifierValue(),
                    setting_responses: i,
                    link: e.next_link.link_id,
                  }
                n._handleButtonClick(e.next_link, o)
              }),
              v()(p()(n), '_handleSkipButtonClick', function () {
                var e = n.props.subtask
                e.skip_link && n._handleButtonClick(e.skip_link, { link: e.skip_link.link_id })
              }),
              v()(p()(n), '_handleButtonClick', function (e, t) {
                var a = n.props,
                  r = a.onNavigate,
                  i = a.subtaskId
                ;(0, a.updateFlow)(i, t), r(e)
              }),
              v()(p()(n), '_handleSetInputRef', function (e) {
                n._input = e
              }),
              v()(p()(n), '_handleUpdateValidity', function () {
                var e = n._input && n._input.isValid()
                n.setState({ isValid: !!e })
              }),
              v()(p()(n), '_getIdentifierValue', function () {
                return (n._input && n._input.getValue()) || void 0
              })
            var r = e.subtask,
              i = e.subtaskId,
              o = e.subtaskInputs,
              s = Object(Q.e)(o, { key: 'country_code', subtask_id: i }, r.default_country_code) || void 0,
              c = Object(Q.e)(o, { key: 'phone_number', subtask_id: i }, '') || void 0,
              u = n._getInitialSettingValues(r, i, o)
            return (n.state = { countryCode: s, phoneNumber: c, isValid: !!c, settingValues: u }), n
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    n = e.progressIndication,
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = i.next_link,
                    l = i.primary_text,
                    c = i.secondary_text,
                    u = i.skip_link,
                    d =
                      this.state.isValid || !u
                        ? k.a.createElement(
                            x.a,
                            {
                              disabled: !this.state.isValid,
                              onPress: this._handleDoneButtonClick,
                              size: 'large',
                              type: 'primaryFilled',
                            },
                            s.label,
                          )
                        : k.a.createElement(
                            x.a,
                            { onPress: this._handleSkipButtonClick, size: 'large', type: 'primaryOutlined' },
                            u.label,
                          )
                  return k.a.createElement(
                    pe.a,
                    r()({}, a, { progressIndication: n, rightControl: d }),
                    k.a.createElement(
                      N.a,
                      null,
                      k.a.createElement(
                        N.a,
                        { style: re.contentArea },
                        l &&
                          k.a.createElement(
                            ee,
                            r()({}, l, {
                              nativeID: w.b,
                              onNavigate: t,
                              size: 'title4',
                              style: re.headline,
                              subtaskInputs: o,
                              weight: 'bold',
                            }),
                          ),
                        c && k.a.createElement(ee, r()({}, c, { color: 'gray700', onNavigate: t, subtaskInputs: o })),
                        k.a.createElement(
                          N.a,
                          { style: In.textFieldArea },
                          this._renderCountryCodes(),
                          this._renderPhoneTextField(),
                        ),
                        this._renderSettings(),
                      ),
                    ),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        In = D.a.create(function (e) {
          return {
            textFieldArea: { marginTop: e.spaces.space20 },
            phoneTextField: { paddingHorizontal: 0, paddingVertical: e.spaces.space16 },
          }
        }),
        xn = a('Lam0'),
        Sn = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(p()(e), '_handleRecaptchaStateChange', function (t) {
                var a = e.props,
                  n = a.onNavigate,
                  r = a.subtask,
                  i = a.subtaskId,
                  o = a.updateFlow,
                  s = r.next_link
                t && (o(i, { link: s.link_id, recaptcha_response: t }), n(s))
              }),
              v()(p()(e), '_handleSkipButtonClick', function () {
                var t = e.props,
                  a = t.onNavigate,
                  n = t.subtask.skip_link,
                  r = t.subtaskId,
                  i = t.updateFlow
                n && i(r, { link: n.link_id }), n && a(n)
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    a = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = i.primary_text,
                    l = i.secondary_text,
                    c = i.skip_link,
                    u =
                      c &&
                      k.a.createElement(
                        x.a,
                        { onPress: this._handleSkipButtonClick, size: 'large', type: 'primaryText' },
                        c.label,
                      )
                  return k.a.createElement(
                    pe.a,
                    r()({}, n, { rightControl: u }),
                    k.a.createElement(
                      N.a,
                      { style: re.contentArea },
                      s
                        ? k.a.createElement(
                            ee,
                            r()({}, s, {
                              nativeID: w.b,
                              onNavigate: a,
                              size: 'title4',
                              style: re.headline,
                              subtaskInputs: o,
                              weight: 'bold',
                            }),
                          )
                        : null,
                      l
                        ? k.a.createElement(ee, r()({}, l, { color: 'gray700', onNavigate: a, subtaskInputs: o }))
                        : null,
                      k.a.createElement(xn.a, {
                        nextButtonDisabled: !1,
                        onChange: this._handleRecaptchaStateChange,
                        withConsentForm: !1,
                      }),
                    ),
                    t,
                  )
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        Tn = 'ocfEnterTextNextButton',
        Fn = 'ocfEnterTextSkipForNowButton',
        On = 'ocfEnterTextTextInput',
        An = 'text',
        Nn = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              v()(p()(n), '_handleSubmit', function () {
                n.state.text && n._handleDoneButtonClick()
              }),
              v()(p()(n), '_handleDoneButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask.next_link,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, o()(o()({}, n.state), {}, { link: a.link_id })), t(a)
              }),
              v()(p()(n), '_handleSkipButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask.skip_link,
                  r = e.subtaskId,
                  i = e.updateFlow
                a && i(r, { link: a.link_id }), a && t(a)
              }),
              v()(p()(n), '_handleEntryUpdated', function (e) {
                var t = e.target.value
                n.setState({ text: t })
              }),
              v()(p()(n), '_getAutoCompleteFromKeyboardType', function (e) {
                switch (e) {
                  case y.k.Email:
                    return 'email'
                  case y.k.Telephone:
                    return 'tel'
                  default:
                    return
                }
              }),
              v()(p()(n), '_getInputTypeFromKeyboardType', function (e) {
                switch (e) {
                  case y.k.Email:
                    return 'email'
                  case y.k.Password:
                    return 'password'
                  case y.k.Telephone:
                    return 'tel'
                  default:
                    return 'text'
                }
              }),
              v()(p()(n), '_getInputModeFromKeyboardType', function (e) {
                switch (e) {
                  case y.k.Email:
                    return 'email'
                  case y.k.Number:
                    return 'numeric'
                  case y.k.Telephone:
                    return 'tel'
                  default:
                    return 'text'
                }
              })
            var r = e.subtask,
              i = e.subtaskId,
              s = e.subtaskInputs,
              c = void 0 === s ? {} : s,
              u = r.default_text,
              d = Object(Q.e)(c, { key: An, subtask_id: i }, u) || ''
            return (n.state = { text: d }), n
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    a = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = i.auto_capitalization_type,
                    l = i.auto_correction_enabled,
                    c = i.detail_text,
                    u = i.hint_text,
                    d = i.keyboard_type,
                    p = i.max_length,
                    h = i.multiline,
                    m = i.next_link,
                    _ = i.os_content_type,
                    b = i.skip_link,
                    f = k.a.createElement(
                      x.a,
                      {
                        disabled: !b && !this.state.text,
                        onPress: this._handleDoneButtonClick,
                        size: 'large',
                        testID: Tn,
                        type: 'primaryFilled',
                      },
                      m.label,
                    ),
                    v =
                      b &&
                      k.a.createElement(
                        x.a,
                        { onPress: this._handleSkipButtonClick, size: 'large', testID: Fn, type: 'primaryText' },
                        b.label,
                      )
                  return k.a.createElement(
                    pe.a,
                    r()({}, n, { rightControl: this.state.text || !b ? f : v }),
                    k.a.createElement(
                      N.a,
                      { style: re.contentArea },
                      k.a.createElement(de, {
                        header: i.header,
                        onNavigate: a,
                        primaryTextProp: i.primary_text,
                        secondaryTextProp: i.secondary_text,
                        subtaskInputs: o,
                      }),
                      k.a.createElement(Kt.a, {
                        autoCapitalize: s || 'sentences',
                        autoComplete: _ === y.o.Username ? _ : this._getAutoCompleteFromKeyboardType(d),
                        autoCorrect: l,
                        autoFocus: !0,
                        inputMode: this._getInputModeFromKeyboardType(d),
                        label: u || '',
                        maxLength: p,
                        multiline: h,
                        name: _ || y.o.Text,
                        onChange: this._handleEntryUpdated,
                        onSubmitEditing: this._handleSubmit,
                        positionCursorAtEnd: !0,
                        spellCheck: l ? 'true' : 'false',
                        style: re.formTextInput,
                        testID: On,
                        type: this._getInputTypeFromKeyboardType(d),
                        value: this.state.text,
                      }),
                      c
                        ? k.a.createElement(ee, r()({}, c, { color: 'gray700', onNavigate: a, subtaskInputs: o }))
                        : null,
                    ),
                    t,
                  )
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        Pn = a('LXAX'),
        Dn = Object(pt.createSelector)(ut.e.selectLoggedInUser, Pn.c, lt.o, function (e, t, a) {
          return { loggedInUser: e, navigationContext: a, isUsernameValid: t.valid, validationError: t.desc }
        }),
        Bn = { fetchUsernameAvailability: Pn.b },
        Rn = Object(dt.g)(Dn, Bn),
        Ln = a('EweD'),
        Vn = Rt.a.d1f6d336,
        Mn = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              v()(p()(n), '_maybeRenderDetailTexts', function () {
                var e = n.props,
                  t = e.subtask,
                  a = e.subtaskInputs,
                  i = n.state.currentDetailTextIndex
                return t.detail_texts && t.detail_texts.length
                  ? k.a.createElement(
                      ee,
                      r()({}, t.detail_texts[i], {
                        color: 'link',
                        onNavigate: n._handleDetailTextClick,
                        style: jn.detailLink,
                        subtaskInputs: a,
                      }),
                    )
                  : void 0
              }),
              v()(p()(n), '_handleDetailTextClick', function (e) {
                var t = n.props,
                  a = t.analytics,
                  r = t.onNavigate
                'show_more_usernames' === e.link_id
                  ? (n._updateCurrentDetailTextIndex(), a.scribe({ element: 'show_more', action: 'click' }))
                  : (n._selectUsername(e.link_id, n._fetchUsernameStatus),
                    a.scribe({ element: 'suggestion', action: 'click' })),
                  r(e)
              }),
              v()(p()(n), '_handleUsernameUpdated', function (e) {
                var t = e.target.value
                n._selectUsername(t, n._fetchUsernameStatusDebounced)
              }),
              v()(p()(n), '_selectUsername', function (e, t) {
                n.setState({ username: e }), t(e)
              }),
              v()(p()(n), '_handleNextButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  r = e.subtaskId,
                  i = e.updateFlow,
                  o = n.state.username
                a.next_link && (i(r, { username: o, link: a.next_link.link_id }), t(a.next_link))
              }),
              v()(p()(n), '_handleSkipButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  r = e.subtaskId,
                  i = e.updateFlow,
                  o = a.skip_link
                o && (i(r, { link: o.link_id }), t(o))
              }),
              v()(p()(n), '_fetchUsernameStatus', function (e) {
                var t = n.props,
                  a = t.analytics,
                  r = t.fetchUsernameAvailability,
                  i = t.loggedInUser
                i &&
                  r({
                    email: i.email && i.email[0] && i.email[0].address,
                    full_name: i.name,
                    suggest: !1,
                    username: e,
                  }).then(function (e) {
                    e && !e.valid && 'taken' === e.reason && a.scribe({ element: 'username', action: 'taken' })
                  })
              }),
              v()(p()(n), '_updateCurrentDetailTextIndex', function () {
                n.setState({ currentDetailTextIndex: n.state.currentDetailTextIndex + 1 })
              })
            var i = e.loggedInUser,
              o = e.subtaskId,
              s = e.subtaskInputs,
              c = Object(Q.e)(s, { key: 'username', subtask_id: o }, '') || (i ? i.screen_name : '')
            return (
              (n.state = { currentDetailTextIndex: 0, username: c }),
              (n._fetchUsernameStatusDebounced = Object(ya.a)(function () {
                var e
                return (e = n)._fetchUsernameStatus.apply(e, arguments)
              }, 250)),
              n
            )
          }
          return (
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.navigationContext || {},
                    t = e.action,
                    a = e.text
                  'set_text' === t && a && this._selectUsername(a, this._fetchUsernameStatus)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    a = t.isUsernameValid,
                    n = t.loggedInUser,
                    i = t.onNavigate,
                    o = t.passthroughOcfScreenProps,
                    s = t.progressIndication,
                    l = t.subtask,
                    c = t.subtaskInputs,
                    u = t.validationError,
                    d = this.state.username,
                    p = (n && n.screen_name && n.screen_name.toLowerCase()) === (d && d.toLowerCase()),
                    h = k.a.createElement(
                      x.a,
                      { disabled: !a, onPress: this._handleNextButtonClick, size: 'large', type: 'primaryFilled' },
                      l.next_link.label,
                    ),
                    m =
                      l.skip_link && l.skip_link.label
                        ? k.a.createElement(
                            x.a,
                            { onPress: this._handleSkipButtonClick, size: 'large', type: 'primaryText' },
                            null === (e = l.skip_link) || void 0 === e ? void 0 : e.label,
                          )
                        : null,
                    _ = d && !p ? h : m || h
                  return k.a.createElement(
                    pe.a,
                    r()({}, o, { progressIndication: s, rightControl: _ }),
                    k.a.createElement(
                      k.a.Fragment,
                      null,
                      k.a.createElement(
                        N.a,
                        { style: re.contentArea },
                        k.a.createElement(
                          ee,
                          r()({}, l.primary_text, {
                            nativeID: w.b,
                            onNavigate: i,
                            size: 'title4',
                            style: re.headline,
                            subtaskInputs: c,
                            weight: 'bold',
                          }),
                        ),
                        k.a.createElement(
                          ee,
                          r()({}, l.secondary_text, { color: 'gray700', onNavigate: i, subtaskInputs: c }),
                        ),
                        k.a.createElement(Kt.a, {
                          Icon: Ln.a,
                          autoComplete: 'off',
                          autoCorrect: !1,
                          autoFocus: !0,
                          errorText: u,
                          invalid: !!d && !p && !a,
                          label: l.hint || Vn,
                          name: 'username',
                          onChange: this._handleUsernameUpdated,
                          showValidationIcon: !!d,
                          spellCheck: 'false',
                          style: re.formTextInput,
                          value: d,
                        }),
                        this._maybeRenderDetailTexts(),
                      ),
                    ),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        jn = D.a.create(function (e) {
          return { detailLink: { marginTop: e.spaces.space16 } }
        }),
        Un = Object(Tt.a)(Rn(Mn), { section: 'enter_username' }),
        zn = (a('lTEL'), a('LqLs'), a('87if'), a('kYxP'), a('hCOa'), a('v84o')),
        Hn = a('8Lfv'),
        Wn = Object(Ve.a)()
          .propsFromActions(function () {
            return {
              clearTimelineCache: Hn.a,
              createLocalApiErrorHandler: Object(Me.createLocalApiErrorHandlerWithContextFactory)('OCF_GENERIC_URT'),
            }
          })
          .withAnalytics(),
        Gn = a('QIgh'),
        qn = a('5Y9N'),
        Kn = a('doI8'),
        Yn = a('BV3T'),
        Xn = a('VTxf'),
        Jn = a('fTQJ'),
        Zn = a('7JQg'),
        Qn = a('wgnn'),
        $n = a('gwY8'),
        er = a('ywYn'),
        tr = a('855f'),
        ar = a('cHvH'),
        nr = a('oQhu'),
        rr = (a('yH/f'), Object.freeze({ TopicFollowCount: 'topic_follow_count' })),
        ir = function (e) {
          switch (e) {
            case Qn.a.NOT_FOUND:
              return k.a.createElement(Xn.a, null)
            case Qn.a.NOT_ALLOWED:
              return k.a.createElement(Yn.a, null)
            default:
              return Object(St.a)('Unhandled timeline unavailable reason in Ocf GenericURT screen: '.concat(e)), null
          }
        },
        or = Object(nr.a)(function (e) {
          return (function (e) {
            return o()(o()({}, Gn.b), Object(qn.a)({ isWide: e }))
          })(e)
        }),
        sr = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e) {
            var n
            return (
              l()(this, a),
              (n = t.call(this, e)),
              v()(p()(n), '_isNextButtonEnabled', function () {
                var e,
                  t,
                  a = n.state.topicsFollowed,
                  r = n.props.subtask,
                  i = r.navigation_link_options,
                  o = (i = void 0 === i ? {} : i).max_enable_count,
                  s = i.min_enable_count,
                  l =
                    (null === (e = r.navigation_link_options) ||
                    void 0 === e ||
                    null === (t = e.count_subtask_data_reference) ||
                    void 0 === t
                      ? void 0
                      : t.key) === rr.TopicFollowCount
                return s && o
                  ? l && a.size >= s && a.size <= o
                  : s && !o
                  ? l && a.size >= s
                  : !s && o
                  ? l && a.size <= o
                  : (!s && !o) || void 0
              }),
              v()(p()(n), '_renderThresholdDetailText', function (e, t) {
                for (
                  var a, i = n.props, o = i.onNavigate, s = i.subtaskInputs, l = -1, c = 0;
                  c < (null == e ? void 0 : e.length);
                  c++
                ) {
                  var u = e[c],
                    d = u.text,
                    p = u.threshold
                  p > l && p <= t && ((l = p), (a = d))
                }
                var h = n._isNextButtonEnabled() ? 'gray1100' : 'gray700',
                  m = n._isNextButtonEnabled() ? 'bold' : 'normal'
                return n.state.initialized && a
                  ? k.a.createElement(
                      N.a,
                      { style: lr.detailText },
                      k.a.createElement(
                        P.b,
                        { color: h, size: 'subtext2', weight: m },
                        n._isNextButtonEnabled() ? null : tr.a.getFormattedCount(t),
                        k.a.createElement(ee, r()({}, a, { color: h, onNavigate: o, subtaskInputs: s, weight: m })),
                      ),
                    )
                  : k.a.createElement(N.a, null)
              }),
              v()(
                p()(n),
                '_getModule',
                Object(nr.a)(function (e) {
                  var t = n.props.subtask,
                    a = t.graphql_timeline_query,
                    r = t.timeline_source
                  return a
                    ? Object(Kn.a)(a.timeline_key)
                    : Object(zn.a)({ urtUrl: { url: r || '', urlType: er.a.UrtEndpoint } })
                }),
              ),
              v()(p()(n), '_resetState', function () {
                n.setState({ topicsFollowed: new Set(), initialized: !1 })
              }),
              v()(p()(n), '_handleOnTopicInitialize', function (e, t) {
                n.setState(function (a) {
                  var n = Object(Ye.a)(Array.from(a.topicsFollowed))
                  return t ? n.add(e) : n.delete(e), { initialized: !0, topicsFollowed: n }
                })
              }),
              v()(p()(n), '_handleOnTopicFollow', function (e) {
                var t = Object(Ye.a)(Array.from(n.state.topicsFollowed))
                t.add(e), n.setState({ topicsFollowed: t })
              }),
              v()(p()(n), '_handleOnTopicUnfollow', function (e) {
                var t = Object(Ye.a)(Array.from(n.state.topicsFollowed))
                t.delete(e), n.setState({ topicsFollowed: t })
              }),
              v()(p()(n), '_handleNextButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, { link: a.next_link.link_id }), t(a.next_link)
              }),
              v()(p()(n), '_clearTimelineCache', function () {
                var e = n.props,
                  t = e.clearTimelineCache,
                  a = e.createLocalApiErrorHandler,
                  r = e.subtask.graphql_timeline_query
                r && t(Object(Kn.a)(r.timeline_key)).catch(a())
              }),
              (n.state = { topicsFollowed: new Set(), initialized: !1 }),
              n
            )
          }
          return (
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.analytics,
                    a = e.subtask
                  t.scribe(o()(o()({}, a.scribe_config), {}, { action: 'impression' }))
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    a = t.analytics,
                    n = t.subtask,
                    r = t.subtaskId
                  e.subtaskId !== r &&
                    (this._resetState(),
                    this._clearTimelineCache(),
                    a.scribe(o()(o()({}, n.scribe_config), {}, { action: 'impression' })))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    a,
                    n,
                    i,
                    o,
                    s,
                    l = this,
                    c = this.props,
                    u = c.errorDialog,
                    d = c.onNavigate,
                    p = c.passthroughOcfScreenProps,
                    h = c.subtask,
                    m = c.subtaskId,
                    _ = c.subtaskInputs,
                    b = this.state.topicsFollowed,
                    f = h.detail_rich_text_options,
                    v = (f = void 0 === f ? {} : f).label_conditional_text,
                    g =
                      (null === (e = h.navigation_link_options) ||
                      void 0 === e ||
                      null === (t = e.count_subtask_data_reference) ||
                      void 0 === t
                        ? void 0
                        : t.key) === rr.TopicFollowCount,
                    y = k.a.createElement(
                      x.a,
                      {
                        disabled: !this._isNextButtonEnabled(),
                        onPress: this._handleNextButtonClick,
                        size: 'large',
                        type: 'primaryFilled',
                      },
                      (null === (a = h.navigation_link_options) || void 0 === a ? void 0 : a.label_conditional_text) ||
                        h.next_link.label,
                    ),
                    C =
                      (null === (n = h.detail_rich_text_options) ||
                      void 0 === n ||
                      null === (i = n.count_subtask_data_reference) ||
                      void 0 === i
                        ? void 0
                        : i.key) === rr.TopicFollowCount && v
                        ? k.a.createElement(
                            N.a,
                            { style: lr.spaceBetween },
                            this._renderThresholdDetailText(v, b.size),
                            y,
                          )
                        : y,
                    E = k.a.createElement(
                      pe.a,
                      r()({}, p, { rightControl: C }),
                      k.a.createElement(
                        N.a,
                        { style: re.contentArea },
                        null !== (o = h.header) && void 0 !== o && o.primary_text
                          ? k.a.createElement(
                              ee,
                              r()({}, h.header.primary_text, {
                                nativeID: w.b,
                                onNavigate: d,
                                size: 'title4',
                                style: re.headline,
                                subtaskInputs: _,
                                weight: 'bold',
                              }),
                            )
                          : null,
                        null !== (s = h.header) && void 0 !== s && s.secondary_text
                          ? k.a.createElement(
                              ee,
                              r()({}, h.header.secondary_text, {
                                onNavigate: d,
                                style: re.subHeader,
                                subtaskInputs: _,
                              }),
                            )
                          : null,
                        h.graphql_timeline_query || h.timeline_source
                          ? k.a.createElement(ar.a, null, function (e) {
                              var t = e.windowWidth >= D.a.theme.breakpoints.small
                              return k.a.createElement(
                                $n.a.Provider,
                                {
                                  value: {
                                    onInitialize: g ? l._handleOnTopicInitialize : xe.a,
                                    onFollow: g ? l._handleOnTopicFollow : xe.a,
                                    onUnfollow: g ? l._handleOnTopicUnfollow : xe.a,
                                  },
                                },
                                k.a.createElement(Jn.a, {
                                  entryConfiguration: or(t),
                                  module: l._getModule(m),
                                  renderUnavailable: ir,
                                  title: '',
                                  withoutHeadroom: !0,
                                }),
                              )
                            })
                          : null,
                      ),
                      u,
                    )
                  return h.scribe_config ? k.a.createElement(Zn.b, { namespace: h.scribe_config }, E) : E
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        lr = D.a.create(function (e) {
          return {
            detailText: { justifyContent: 'center' },
            spaceBetween: { flexDirection: 'row', justifyContent: 'space-between' },
          }
        }),
        cr = Wn(sr),
        ur = a('RhWx'),
        dr = a.n(ur),
        pr = 'selected_custom_interests',
        hr = 'selected_interest_ids',
        mr = function (e, t) {
          var a = Object(lt.v)(e)
          return (Object(Q.e)(a, { key: pr, subtask_id: t.subtaskId }, []) || []).map(function (e) {
            return { topic: e.custom_interest, ttt_token: e.ttt_token }
          })
        },
        _r = Object(pt.createSelector)(
          mr,
          function (e, t) {
            return mr(e, t).map(function (e) {
              return e.topic
            })
          },
          function (e, t) {
            var a = Object(lt.v)(e)
            return Object(Q.e)(a, { key: hr, subtask_id: t.subtaskId }, []) || void 0
          },
          function (e, t, a) {
            return { initialCustomInterests: e, initialCustomInterestIds: t, initialSelectedInterestIds: a }
          },
        ),
        br = Object(dt.c)(_r),
        fr = a('2dXj'),
        vr = a('aV/s'),
        gr = a('GZwR'),
        kr = [gr.a.Topics],
        yr = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              v()(p()(n), '_maybeRenderCustomInterests', function () {
                var e = n.props.subtask.custom_interests_header,
                  t = n.state,
                  a = t.customInterests
                if (t.shouldRenderCustomInterests)
                  return k.a.createElement(
                    N.a,
                    null,
                    k.a.createElement(
                      N.a,
                      { style: wr.group, testID: 'custom' },
                      k.a.createElement(P.b, { size: 'headline1', style: wr.groupHeader, weight: 'bold' }, e),
                      k.a.createElement(
                        N.a,
                        { style: wr.pillsContainer },
                        a.map(function (e) {
                          return n._renderCustomInterest(e.topic)
                        }),
                      ),
                    ),
                  )
              }),
              v()(p()(n), '_renderGroup', function (e) {
                var t
                if (e.show_more) {
                  var a = e.show_more.initial_to_show + (e.expanded ? e.show_more.extra_to_show : 0)
                  t = e.items.slice(0, a)
                } else t = e.items
                return k.a.createElement(
                  N.a,
                  { key: 'group_'.concat(e.header), style: wr.group, testID: 'group' },
                  k.a.createElement(P.b, { size: 'headline1', style: wr.groupHeader, weight: 'bold' }, e.header),
                  k.a.createElement(
                    N.a,
                    { style: wr.pillsContainer },
                    t.map(n._renderSelectionPill),
                    n._maybeRenderShowMoreButton(e),
                  ),
                )
              }),
              v()(p()(n), '_maybeRenderShowMoreButton', function (e) {
                var t = e.show_more
                return t && e.items.length > t.initial_to_show && !e.expanded
                  ? k.a.createElement(vr.a, {
                      compact: !0,
                      key: 'showMore_'.concat(e.header),
                      mode: 'expand',
                      onClick: n._handleShowMore(e),
                      style: wr.selectionPillStyles,
                      text: t.text,
                    })
                  : null
              }),
              v()(p()(n), '_renderCustomInterest', function (e) {
                var t = n.state.selectedCustomInterestIds
                return k.a.createElement(vr.a, {
                  compact: !0,
                  key: 'selectionPill_'.concat(e),
                  onClick: n._handleToggleCustomInterest(e),
                  selected: t.has(e),
                  style: wr.selectionPillStyles,
                  text: e,
                })
              }),
              v()(p()(n), '_renderSelectionPill', function (e) {
                var t = n.state.selectedInterestIds.has(e.id),
                  a = n._handleToggleInterest(e.id, t)
                return k.a.createElement(vr.a, {
                  compact: !0,
                  key: 'selectionPill_'.concat(e.id),
                  onClick: a,
                  selected: t,
                  style: wr.selectionPillStyles,
                  text: e.name,
                })
              }),
              v()(p()(n), '_shouldShowSkipInstead', function () {
                var e = n.state,
                  t = e.selectedCustomInterestIds,
                  a = e.selectedInterestIds
                return n.props.subtask.skip_link && 0 === a.size && 0 === t.size
              }),
              v()(p()(n), '_handleSuggestionSelected', function (e) {
                var t = n.state,
                  a = t.customInterestIds,
                  r = t.selectedCustomInterestIds
                if (e.type === gr.b.Topic || e.type === gr.b.Hashtag) {
                  var i = e.data.topic,
                    o = { topic: i, ttt_token: void 0 }
                  a.has(i) ||
                    n.setState({
                      customInterests: n.state.customInterests.concat([o]),
                      customInterestIds: Object(Ye.a)(dr()(a)).add(i),
                      selectedCustomInterestIds: Object(Ye.a)(dr()(r)).add(i),
                      shouldRenderCustomInterests: !0,
                    })
                }
              }),
              v()(p()(n), '_handleShowMore', function (e) {
                return function () {
                  var t = n.state.groups,
                    a = t.find(function (t) {
                      return t.header === e.header
                    })
                  a && (a.expanded = !0), n.setState({ groups: t })
                }
              }),
              v()(p()(n), '_handleToggleCustomInterest', function (e) {
                return function () {
                  var t = Object(Ye.a)(dr()(n.state.selectedCustomInterestIds))
                  t.has(e)
                    ? (t.delete(e), n.setState({ selectedCustomInterestIds: t }))
                    : n.setState({ selectedCustomInterestIds: t.add(e) })
                }
              }),
              v()(p()(n), '_handleToggleInterest', function (e, t) {
                return function () {
                  var a = Object(Ye.a)(dr()(n.state.selectedInterestIds))
                  t
                    ? (a.delete(e), n.setState({ selectedInterestIds: a }))
                    : n.setState({ selectedInterestIds: a.add(e) })
                }
              }),
              v()(p()(n), '_handleNextButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  r = e.subtaskId,
                  i = e.updateFlow,
                  o = n.state,
                  s = o.customInterests,
                  l = o.selectedCustomInterestIds,
                  c = s.reduce(function (e, t) {
                    return l.has(t.topic) && e.push({ custom_interest: t.topic, ttt_token: t.ttt_token }), e
                  }, [])
                i(r, {
                  link: a.next_link.link_id,
                  selected_interest_ids: Array.from(n.state.selectedInterestIds),
                  selected_custom_interests: c,
                }),
                  t(a.next_link)
              }),
              v()(p()(n), '_handleSkipButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  r = e.subtaskId,
                  i = e.updateFlow
                a.skip_link && i(r, { link: a.skip_link.link_id }), a.skip_link && t(a.skip_link)
              })
            var r = e.initialCustomInterestIds,
              i = e.initialCustomInterests,
              o = e.initialSelectedInterestIds,
              s = e.subtask.selected_items
            return (
              (n.state = {
                groups: e.subtask.groups || [],
                customInterests: dr()(i),
                customInterestIds: Object(Ye.a)(r),
                selectedCustomInterestIds: Object(Ye.a)(r),
                selectedInterestIds: o && o.length > 0 ? Object(Ye.a)(o) : Object(Ye.a)(s || []),
                shouldRenderCustomInterests: i.length > 0,
              }),
              n
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    a = t.onNavigate,
                    n = t.passthroughOcfScreenProps,
                    i = t.subtask,
                    o = t.subtaskInputs,
                    s = this.state.groups,
                    l = k.a.createElement(
                      x.a,
                      { onPress: this._handleNextButtonClick, size: 'large', type: 'primaryFilled' },
                      i.next_link.label,
                    ),
                    c =
                      i.skip_link && i.skip_link.label
                        ? k.a.createElement(
                            x.a,
                            { onPress: this._handleSkipButtonClick, size: 'large', type: 'primaryText' },
                            null === (e = i.skip_link) || void 0 === e ? void 0 : e.label,
                          )
                        : null,
                    u = this._shouldShowSkipInstead() ? c : l
                  return k.a.createElement(
                    pe.a,
                    r()({}, n, { rightControl: u }),
                    k.a.createElement(
                      N.a,
                      { style: re.contentArea },
                      i.primary_text
                        ? k.a.createElement(
                            ee,
                            r()({}, i.primary_text, {
                              nativeID: w.b,
                              onNavigate: a,
                              size: 'title4',
                              style: re.headline,
                              subtaskInputs: o,
                              weight: 'bold',
                            }),
                          )
                        : null,
                      i.secondary_text
                        ? k.a.createElement(
                            ee,
                            r()({}, i.secondary_text, { onNavigate: a, style: re.subHeader, subtaskInputs: o }),
                          )
                        : null,
                      i.hide_search
                        ? null
                        : k.a.createElement(
                            N.a,
                            { style: wr.searchContainer },
                            k.a.createElement(fr.c, {
                              filter: kr,
                              maxTopics: 8,
                              onItemClick: this._handleSuggestionSelected,
                              placeholder: i.hint,
                              rounded: !0,
                              shouldAutoFocus: !0,
                              shouldClearOnSelect: !0,
                              source: gr.d.WelcomeFlow,
                              withFocusStyling: !0,
                            }),
                          ),
                      this._maybeRenderCustomInterests(),
                      k.a.createElement(N.a, null, s.map(this._renderGroup)),
                    ),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        wr = D.a.create(function (e) {
          return {
            searchContainer: { marginBottom: e.spaces.space16, zIndex: 1 },
            selectionPillStyles: { margin: e.spaces.space4 },
            pillsContainer: { flexDirection: 'row', flexWrap: 'wrap' },
            groupHeader: { marginTop: e.spaces.space12, marginBottom: e.spaces.space12 },
            group: { marginBottom: e.spaces.space12 },
          }
        }),
        Cr = br(yr),
        Er = a('Ukpf'),
        Ir = a('Qwev'),
        xr = function (e) {
          var t = k.a.useState(!1),
            a = A()(t, 2),
            n = a[0],
            r = a[1],
            i = k.a.useRef(null),
            s = e || {},
            l = s.onNavigate,
            c = s.subtask,
            u = c.next_link,
            d = c.timeout_ms,
            p = void 0 === d ? 2e3 : d,
            h = c.url,
            m = s.subtaskId,
            _ = s.updateFlow,
            b = k.a.useCallback(
              function () {
                var e = Math.min(100, p),
                  t = 0,
                  a = setInterval(function () {
                    var n = i.current && i.current.value ? { response: i.current.value } : void 0
                    ;(t += e), (n || t >= p) && (clearInterval(a), _(m, o()(o()({}, n), {}, { link: u.link_id })), l(u))
                  }, e)
                return a
              },
              [u, l, _, m, p],
            )
          return (
            k.a.useEffect(
              function () {
                var e
                return (
                  r(!1),
                  Er.a.replace({
                    callback: function () {
                      r(!0), (e = b())
                    },
                    scriptId: 'jsInstLibrary',
                    src: h,
                  }),
                  function () {
                    return clearInterval(e)
                  }
                )
              },
              [b, h],
            ),
            k.a.createElement(
              k.a.Fragment,
              null,
              k.a.createElement('input', {
                autoComplete: 'off',
                'data-testid': 'tim_input',
                id: 'tim_input',
                name: 'ui_metrics',
                ref: i,
                type: 'hidden',
              }),
              n ? null : k.a.createElement(Ir.a, { style: Sr.activityIndicator }),
            )
          )
        },
        Sr = D.a.create(function (e) {
          return { activityIndicator: { height: '100%' } }
        }),
        Tr = a('mjJ+'),
        Fr = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(p()(e), '_makeNavFunction', function (t) {
                return function () {
                  var a = e.props,
                    n = a.onNavigate,
                    r = a.subtaskId
                  ;(0, a.updateFlow)(r, { link: t.link_id }), n(t)
                }
              }),
              v()(p()(e), '_itemFromNavLink', function (t) {
                return { text: t.label || '', onClick: e._makeNavFunction(t) }
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.subtask,
                    n = e.subtaskInputs
                  return k.a.createElement(Tr.a, {
                    cancelButtonLabel: a.cancel_link && a.cancel_link.text,
                    description: a.primary_text
                      ? k.a.createElement(
                          ee,
                          r()({}, a.primary_text, {
                            nativeID: w.b,
                            onNavigate: t,
                            style: { padding: D.a.theme.spacesPx.space16 },
                            subtaskInputs: n,
                          }),
                        )
                      : null,
                    items: a.primary_action_links.map(this._itemFromNavLink),
                    onCloseRequested: a.cancel_link ? this._makeNavFunction(a.cancel_link) : xe.a,
                  })
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        Or = a('vEo5'),
        Ar = Object(pt.createSelector)(
          Or.selectShouldPromptBrowserPush,
          function (e) {
            return Or.selectBrowserPushStatus(e)
          },
          function (e, t) {
            return { promptAllowed: e, pushSettingsFetchStatus: t.fetchStatus, subscribed: t.subscribed }
          },
        ),
        Nr = {
          createLocalApiErrorHandler: Object(Me.createLocalApiErrorHandlerWithContextFactory)(
            'NOTIFICATIONS_PERMISSIONS_PROMPT',
          ),
          dismissPushNotificationsPrompt: Or.dismissPushNotificationsPrompt,
          fetchPushSettingsIfNeeded: Or.fetchPushSettingsIfNeeded,
          loadPushPromptSettingsIfNeeded: Or.loadPushPromptSettingsIfNeeded,
          pushSubscribe: Or.pushSubscribe,
        },
        Pr = Object(dt.g)(Ar, Nr),
        Dr = a('5pef')
      function Br(e, t) {
        e.granted_link.label ||
          Object(St.a)('Invalid notification permission prompt subtask: granted_link does not have a label', {
            extra: { subtaskId: t, grantedLinkId: e.granted_link.link_id },
          })
      }
      var Rr = Pr(
          (function (e) {
            m()(a, e)
            var t = b()(a)
            function a() {
              var e
              l()(this, a)
              for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                v()(p()(e), '_actionClicked', function (t) {
                  var a = e.props,
                    n = a.onNavigate,
                    r = a.subtaskId
                  ;(0, a.updateFlow)(r, { link: t.link_id }), n(t)
                }),
                v()(p()(e), '_handleSkip', function () {
                  var t = e.props,
                    a = t.dismissPushNotificationsPrompt,
                    n = t.subtask
                  a(), e._actionClicked(n.denied_link)
                }),
                v()(p()(e), '_handleConfirm', function () {
                  var t = e.props,
                    a = t.pushSubscribe,
                    n = t.subtask
                  a().then(function () {
                    e._actionClicked(n.granted_link)
                  })
                }),
                v()(p()(e), '_skipIfPushPromptNotAllowed', function () {
                  var t = e.props,
                    a = t.promptAllowed,
                    n = t.subscribed,
                    r = t.subtask
                  a || e._actionClicked(n ? r.granted_link : r.denied_link)
                }),
                e
              )
            }
            return (
              u()(a, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    var e = this.props,
                      t = e.createLocalApiErrorHandler,
                      a = e.fetchPushSettingsIfNeeded,
                      n = e.pushSettingsFetchStatus
                    Br(e.subtask, e.subtaskId),
                      a().catch(t(v()({}, Yt.a.AppInReadOnlyMode, { customAction: xe.a }))),
                      n === Ue.a.LOADED && this._skipIfPushPromptNotAllowed()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var t = this.props,
                      a = t.pushSettingsFetchStatus,
                      n = t.subtask
                    a === Ue.a.LOADED &&
                      e.pushSettingsFetchStatus !== Ue.a.LOADED &&
                      this._skipIfPushPromptNotAllowed(),
                      n !== e.subtask && Br(n, this.props.subtaskId)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.onNavigate,
                      a = e.passthroughOcfScreenProps,
                      n = e.promptAllowed,
                      i = e.subtask,
                      o = e.subtaskInputs,
                      s = i.primary_text
                        ? k.a.createElement(
                            ee,
                            r()({}, i.primary_text, { nativeID: w.b, onNavigate: t, subtaskInputs: o }),
                          )
                        : null,
                      l = i.secondary_text
                        ? k.a.createElement(ee, r()({}, i.secondary_text, { onNavigate: t, subtaskInputs: o }))
                        : null
                    return n && i.granted_link.label
                      ? k.a.createElement(
                          pe.a,
                          r()({ hideLogo: !0 }, a),
                          k.a.createElement(Se.a, {
                            actionLabel: i.granted_link.label,
                            graphic: Dr.a,
                            headline: s,
                            onAction: this._handleConfirm,
                            onClose: this._handleSkip,
                            onTertiaryAction: this._handleSkip,
                            subtext: l,
                            tertiaryActionLabel: i.denied_link.label,
                            withCloseButton: !1,
                          }),
                        )
                      : null
                  },
                },
              ]),
              a
            )
          })(k.a.Component),
        ),
        Lr = {
          callOnboardingPath: lt.b,
          createLocalApiErrorHandler: Object(Me.createLocalApiErrorHandlerWithContextFactory)('OCF_OPEN_LINK'),
        },
        Vr = Object(dt.b)(Lr)(
          (function (e) {
            m()(a, e)
            var t = b()(a)
            function a() {
              var e
              l()(this, a)
              for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                v()(p()(e), '_hitCallbackPath', function () {
                  var t = e.props,
                    a = t.callOnboardingPath,
                    n = t.createLocalApiErrorHandler,
                    r = t.flowName,
                    i = t.subtask.onboarding_callback_path
                  return i ? a(i).catch(n($t(r, void 0, xe.a))) : Promise.resolve()
                }),
                e
              )
            }
            return (
              u()(a, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.onNavigate,
                      a = e.subtask,
                      n = e.subtaskId
                    return k.a.createElement(We, {
                      navigationLink: a.link,
                      onNavigate: t,
                      subtaskAction: this._hitCallbackPath,
                      subtaskId: n,
                    })
                  },
                },
              ]),
              a
            )
          })(k.a.Component),
        ),
        Mr = a('TpKd'),
        jr = Object(pt.createSelector)(lt.o, lt.x, function (e, t) {
          return { navigationContext: e, verificationSendFailureMessage: t }
        }),
        Ur = {
          createLocalApiErrorHandler: Object(Me.createLocalApiErrorHandlerWithContextFactory)(
            'OCF_FLOW_PHONE_VERIFICATION',
          ),
          verifyIdentifier: lt.B,
        },
        zr = Object(dt.g)(jr, Ur),
        Hr = 'normalized_phone',
        Wr = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e, n) {
            var r
            l()(this, a),
              (r = t.call(this, e, n)),
              v()(p()(r), '_sendSmsVerificationRequest', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  a = e.navigationContext,
                  n = e.onNavigate,
                  i = e.subtask,
                  o = e.subtaskInputs,
                  s = e.verifyIdentifier,
                  l = i.phone_number && Object(Q.g)(o, i.phone_number),
                  c = i.phone_country_code && Object(Q.g)(o, i.phone_country_code),
                  u = a && a.action ? a.action === y.z.ResendVoice : !!i.send_via_voice
                return (
                  r._isSmsAutoVerifyEnabled && r._autoVerifySmsCode(),
                  s({
                    phone: l,
                    use_voice: u,
                    sim_country_code: c,
                    send_auto_verify_hash:
                      r._isSmsAutoVerifyEnabled ||
                      (r._isSmsAutoVerifySupported &&
                        r.context.featureSwitches.isTrue('responsive_web_ocf_sms_autoverify_darkwrite')),
                  })
                    .then(function (e) {
                      var t = e.normalized_phone_number
                      t && r.setState({ normalized_phone: t })
                    })
                    .catch(function (e) {
                      var a = r.props,
                        o = a.flowName,
                        s = a.verificationSendFailureMessage
                      t($t(o, s || Zt))(e), n(i.fail_link)
                    })
                )
              }),
              v()(p()(r), '_handleCodeUpdated', function (e) {
                r.setState({ code: e.target.value })
              }),
              v()(p()(r), '_autoVerifySmsCode', function () {
                var e,
                  t = r.props.analytics
                t.scribe({ element: 'auto', action: 'attempt' }),
                  window.navigator.credentials
                    .get({
                      otp: { transport: ['sms'] },
                      signal: null === (e = r._smsAutoVerifyAbortController) || void 0 === e ? void 0 : e.signal,
                    })
                    .then(function (e) {
                      var a = e.code
                      a
                        ? ((r._smsAutoVerifyAbortController = void 0),
                          r.setState({ code: a }, function () {
                            t.scribe({ element: 'auto', action: 'success' }), r._handleDoneButtonClick()
                          }))
                        : t.scribe({ element: 'auto', action: 'missing' })
                    })
                    .catch(function () {
                      t.scribe({ element: 'auto', action: 'failure' })
                    })
              }),
              v()(p()(r), '_handleDoneButtonClick', function () {
                var e = r.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  n = e.subtaskId,
                  i = e.updateFlow,
                  o = r.state,
                  s = o.code,
                  l = o.normalized_phone
                i(n, { code: s, link: a.next_link.link_id, normalized_phone: l, by_voice: !!a.send_via_voice }),
                  t(a.next_link)
              })
            var i = e.subtaskId,
              o = e.subtaskInputs,
              s = Object(Q.e)(o, { key: Hr, subtask_id: i }, '') || ''
            return (
              (r.state = { code: '', normalized_phone: s, showSmsResendDialog: !1 }),
              (r._isSmsAutoVerifySupported = 'OTPCredential' in window),
              (r._isSmsAutoVerifyEnabled =
                r._isSmsAutoVerifySupported &&
                r.context.featureSwitches.isTrue('responsive_web_ocf_sms_autoverify_enabled')),
              r._isSmsAutoVerifyEnabled && (r._smsAutoVerifyAbortController = new AbortController()),
              r
            )
          }
          return (
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  return this._sendSmsVerificationRequest()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._smsAutoVerifyAbortController &&
                    (this._smsAutoVerifyAbortController.abort(),
                    this.props.analytics.scribe({ element: 'auto', action: 'abort' }))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    n = e.progressIndication,
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = k.a.createElement(
                      x.a,
                      {
                        disabled: !this.state.code,
                        onPress: this._handleDoneButtonClick,
                        size: 'large',
                        type: 'primaryFilled',
                      },
                      i.next_link.label,
                    ),
                    l = k.a.createElement(
                      ee,
                      r()({}, i.detail_text, { color: 'link', onNavigate: t, style: Gr.detailLink, subtaskInputs: o }),
                    )
                  return k.a.createElement(
                    pe.a,
                    r()({}, a, { progressIndication: n, rightControl: s }),
                    k.a.createElement(
                      N.a,
                      { style: re.contentArea },
                      k.a.createElement(
                        ee,
                        r()({}, i.primary_text, {
                          nativeID: w.b,
                          onNavigate: t,
                          size: 'title4',
                          style: re.headline,
                          subtaskInputs: o,
                          weight: 'bold',
                        }),
                      ),
                      k.a.createElement(
                        ee,
                        r()({}, i.secondary_text, { color: 'gray700', onNavigate: t, subtaskInputs: o }),
                      ),
                      k.a.createElement(Kt.a, {
                        autoComplete: 'one-time-code',
                        autoFocus: !0,
                        helperText: l,
                        inputMode: 'numeric',
                        label: i.hint_text,
                        name: 'verfication_code',
                        onChange: this._handleCodeUpdated,
                        pattern: '\\d{6}',
                        style: re.formTextInput,
                        value: this.state.code,
                      }),
                    ),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            a
          )
        })(k.a.Component)
      v()(Wr, 'contextType', Ge.a)
      var Gr = D.a.create(function (e) {
          return { detailLink: { marginTop: e.spaces.space16 } }
        }),
        qr = Object(Tt.a)(zr(Wr), { component: 'phone_verification' }),
        Kr = 'discoverable_by_email',
        Yr = 'discoverable_by_phone',
        Xr = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              v()(p()(n), '_formatSubtaskInputsForRedux', function (e) {
                return {
                  link: n.props.subtask.next_link,
                  discoverable_by_email: e.discoverable_by_email ? 1 : 0,
                  discoverable_by_phone: e.discoverable_by_phone ? 1 : 0,
                }
              }),
              v()(p()(n), '_getInitialSubtaskInputs', function () {
                var e = n.props,
                  t = e.subtaskId,
                  a = e.subtaskInputs
                return {
                  discoverable_by_email: 0 !== Object(Q.e)(a, { key: Kr, subtask_id: t }),
                  discoverable_by_phone: 0 !== Object(Q.e)(a, { key: Yr, subtask_id: t }),
                }
              }),
              v()(p()(n), '_handleDoneButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, n._formatSubtaskInputsForRedux(n.state)), t(a.next_link)
              }),
              v()(p()(n), '_handleDiscoverableByEmailToggle', function (e) {
                n.setState({ discoverable_by_email: e })
              }),
              v()(p()(n), '_handleDiscoverableByPhoneToggle', function (e) {
                n.setState({ discoverable_by_phone: e })
              })
            var r = n._getInitialSubtaskInputs()
            return (n.state = o()({}, r)), n
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.state,
                    t = e.discoverable_by_email,
                    a = e.discoverable_by_phone,
                    n = this.props,
                    i = n.onNavigate,
                    o = n.passthroughOcfScreenProps,
                    s = n.subtask,
                    l = n.subtaskInputs,
                    c = s.secondary_text
                      ? k.a.createElement(P.b, { size: 'title4', style: re.headline, weight: 'bold' }, s.secondary_text)
                      : null,
                    u = k.a.createElement(
                      x.a,
                      { onPress: this._handleDoneButtonClick, size: 'large', type: 'primaryFilled' },
                      s.next_link.label,
                    )
                  return k.a.createElement(
                    pe.a,
                    r()({}, o, { rightControl: u }),
                    k.a.createElement(
                      N.a,
                      { style: re.contentArea },
                      k.a.createElement(P.b, { nativeID: w.b, style: D.a.visuallyHidden }, s.primary_text),
                      k.a.createElement(P.b, { size: 'title4', style: re.headline, weight: 'bold' }, c),
                      k.a.createElement(
                        N.a,
                        { accessibilityRole: 'label', style: re.option },
                        k.a.createElement(
                          N.a,
                          { style: re.checkboxText },
                          k.a.createElement(P.b, null, s.discoverable_by_email_label),
                          k.a.createElement(
                            ee,
                            r()({}, s.discoverable_by_email_detail_text, {
                              color: 'gray700',
                              onNavigate: i,
                              size: 'subtext2',
                              subtaskInputs: l,
                            }),
                          ),
                        ),
                        k.a.createElement($e.a, { checked: t, onChange: this._handleDiscoverableByEmailToggle }),
                      ),
                      k.a.createElement(
                        N.a,
                        { accessibilityRole: 'label', style: re.option },
                        k.a.createElement(
                          N.a,
                          { style: re.checkboxText },
                          k.a.createElement(P.b, null, s.discoverable_by_phone_label),
                          k.a.createElement(
                            ee,
                            r()({}, s.discoverable_by_phone_detail_text, {
                              color: 'gray700',
                              onNavigate: i,
                              size: 'subtext2',
                              subtaskInputs: l,
                            }),
                          ),
                        ),
                        k.a.createElement($e.a, { checked: a, onChange: this._handleDiscoverableByPhoneToggle }),
                      ),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        Jr =
          (a('TJCb'),
          a('JY2o'),
          a('/gI4'),
          a('rbfH'),
          a('jbUL'),
          a('slc3'),
          a('WmpB'),
          a('3Cj0'),
          a('QliG'),
          a('XYSm'),
          a('/9A7'),
          a('HcE/'),
          a('Uj98'),
          a('gp7C'),
          a('GU6o'),
          a('aacc'),
          a('ZVwl'),
          a('SgSm'),
          a('8ooc'),
          a('0NMN'),
          a('2dnG'),
          a('fecs'),
          a('U/yR'),
          a('i3m+'),
          a('6JDI'),
          a('VsJa'),
          a('PEyR'),
          a('nndn'),
          a('eEZx'),
          a('zsxB'),
          a('2c7d'),
          a('0zG9'),
          a('YeIG')),
        Zr = function (e) {
          var t,
            a = (t = e).replace(/-/g, '+').replace(/_/g, '/') + '===='.substring(0, (4 - (t.length % 4)) % 4),
            n = window.atob(a)
          return new Uint8Array(n.length).map(function (e, t) {
            return n.charCodeAt(t)
          }).buffer
        },
        Qr = function (e) {
          var t = new Uint8Array(e),
            a = ''
          return (
            t.forEach(function (e) {
              return (a += String.fromCharCode(e))
            }),
            btoa(a).replace(/\+/g, '-').replace(/(\/)/g, '_').replace(/=/g, '')
          )
        },
        $r = function (e) {
          return e.map(function (e) {
            return { type: 'public-key', id: Zr(e.id) }
          })
        },
        ei = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(
                p()(e),
                '_supportsWebAuthn',
                !!window.PublicKeyCredential &&
                  'function' == typeof window.PublicKeyCredential &&
                  'function' == typeof window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable,
              ),
              v()(p()(e), '_navigateAndUpdate', function (t, a) {
                var n = e.props,
                  r = n.onNavigate,
                  i = n.subtaskId,
                  o = n.updateFlow
                a && o(i, { challenge_response: a, link: t.link_id }), r(t)
              }),
              v()(p()(e), '_triggerWebAuthn', function (t) {
                var a = e.props.subtask,
                  n = a.challenge,
                  r = a.fail_link,
                  i = a.next_link
                e._getCredentialsRequest(n, t)()
                  .then(function (a) {
                    if (a) {
                      var n = e._getFinalResult(a, t)
                      e._navigateAndUpdate(i, n)
                    } else;
                  })
                  .catch(function () {
                    e._navigateAndUpdate(r)
                  })
              }),
              v()(p()(e), '_getCredentialsRequest', function (e, t) {
                var a = JSON.parse(e)
                if (t === y.r.enrollment) {
                  var n = {
                    publicKey: {
                      challenge: Zr(a.challenge),
                      rp: a.rp,
                      user: o()(o()({}, a.user), {}, { id: Zr(a.user.id) }),
                      pubKeyCredParams: a.pubKeyCredParams,
                      attestation: a.attestation,
                      excludeCredentials: a.excludeCredentials.map(function (e) {
                        return o()(o()({}, e), {}, { id: Zr(e.id) })
                      }),
                      extensions: a.extensions,
                      timeout: 6e4,
                      authenticatorSelection: {
                        authenticatorAttachment: 'cross-platform',
                        userVerification: 'discouraged',
                      },
                    },
                  }
                  return function () {
                    var e
                    return (
                      (null === (e = navigator.credentials) || void 0 === e ? void 0 : e.create(n)) || Promise.resolve()
                    )
                  }
                }
                var r = a.publicKeyCredentialRequestOptions,
                  i = {
                    publicKey: {
                      rpId: 'twitter.com',
                      extensions: { appid: r.extensions.appid },
                      challenge: Zr(r.challenge),
                      userVerification: 'discouraged',
                      timeout: 6e4,
                      allowCredentials: $r(r.allowCredentials),
                    },
                  }
                return function () {
                  var e
                  return (null === (e = navigator.credentials) || void 0 === e ? void 0 : e.get(i)) || Promise.resolve()
                }
              }),
              v()(p()(e), '_getFinalResult', function (e, t) {
                var a,
                  n = e.id,
                  r = e.response,
                  i = e.type
                return (
                  'enrollment' === t && r.attestationObject
                    ? (a = {
                        id: n,
                        type: i,
                        response: { clientDataJSON: Qr(r.clientDataJSON), attestationObject: Qr(r.attestationObject) },
                        clientExtensionResults: {},
                      })
                    : 'verification' === t &&
                      r.authenticatorData &&
                      (a = {
                        id: n,
                        type: i,
                        response: {
                          clientDataJSON: Qr(r.clientDataJSON),
                          authenticatorData: Qr(r.authenticatorData),
                          signature: Qr(r.signature),
                          userHandle: '',
                        },
                        clientExtensionResults: { appid: !0 },
                      }),
                  JSON.stringify(a || '')
                )
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.subtask,
                    t = e.action_type,
                    a = e.unsupported_link
                  this._supportsWebAuthn
                    ? Object(Jr.a)(this.props.errorDialog) && this._triggerWebAuthn(t)
                    : a && this._navigateAndUpdate(a)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    a = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    i = e.subtask,
                    o = e.subtaskInputs
                  return k.a.createElement(
                    pe.a,
                    n,
                    t ||
                      k.a.createElement(
                        N.a,
                        { style: re.contentArea },
                        this._supportsWebAuthn
                          ? null
                          : k.a.createElement(
                              ee,
                              r()({}, i.unsupported_error_message, { onNavigate: a, subtaskInputs: o }),
                            ),
                      ),
                  )
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        ti = a('LCtV'),
        ai = a('AspN'),
        ni = a('53j7'),
        ri = Object(pt.createSelector)(
          ut.e.selectLoggedInUser,
          function (e, t) {
            var a = ni.h(e),
              n = a ? ai.k(e, a) : []
            return A()(n, 1)[0]
          },
          function (e, t) {
            return { loggedInUser: e, avatarMedia: t }
          },
        ),
        ii = { addAvatarMedia: ni.a, removeAvatarMedia: ni.d },
        oi = Object(dt.g)(ri, ii),
        si = a('fS8x'),
        li = a('P68U'),
        ci = a('eyty'),
        ui = 'ocfSelectAvatarSkipForNowButton',
        di = 'ocfSelectAvatarNextButton',
        pi = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e) {
            var n
            return (
              l()(this, a),
              (n = t.call(this, e)),
              v()(p()(n), '_handleCropDone', function () {
                return n.setState({ done: !0, showCropper: !1 })
              }),
              v()(p()(n), '_handleCropCancel', function () {
                return n._handleCropDone()
              }),
              v()(p()(n), '_handleImageMediaChange', function (e) {
                ;(0, n.props.addAvatarMedia)(e[0]), n.setState({ mediaId: e[0], showCropper: !0, done: !0 })
              }),
              v()(p()(n), '_handleImageMediaFailure', function () {
                n._handleSkipButtonClick()
              }),
              v()(p()(n), '_handleImageMediaRemove', function () {
                ;(0, n.props.removeAvatarMedia)(), n.setState({ done: !1, showCropper: !1 })
              }),
              v()(p()(n), '_handleDoneButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, { link: a.next_link.link_id }), t(a.next_link)
              }),
              v()(p()(n), '_handleSkipButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask.skip_link,
                  r = e.subtaskId,
                  i = e.updateFlow
                a && i(r, { link: a.link_id }), a && t(a)
              }),
              (n.state = { done: !1, showCropper: !1, mediaId: void 0 }),
              n
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    a = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = i.next_link,
                    l = i.primary_text,
                    c = i.secondary_text,
                    u = i.skip_link,
                    d = k.a.createElement(
                      x.a,
                      {
                        disabled: !u && !this.state.mediaId,
                        onPress: this._handleDoneButtonClick,
                        size: 'large',
                        testID: di,
                        type: 'primaryFilled',
                      },
                      s.label,
                    ),
                    p =
                      u &&
                      k.a.createElement(
                        x.a,
                        { onPress: this._handleSkipButtonClick, size: 'large', testID: ui, type: 'primaryText' },
                        u.label,
                      )
                  return k.a.createElement(
                    pe.a,
                    r()({}, n, { rightControl: this.state.done || !u ? d : p }),
                    k.a.createElement(
                      N.a,
                      { style: re.contentArea },
                      l
                        ? k.a.createElement(
                            ee,
                            r()({}, l, {
                              nativeID: w.b,
                              onNavigate: a,
                              size: 'title4',
                              style: re.headline,
                              subtaskInputs: o,
                              weight: 'bold',
                            }),
                          )
                        : null,
                      c
                        ? k.a.createElement(
                            ee,
                            r()({}, i.secondary_text, { color: 'gray700', onNavigate: a, subtaskInputs: o }),
                          )
                        : null,
                      this._renderMediaPickerWithPreview(),
                    ),
                    this.state.showCropper && void 0 !== this.state.mediaId
                      ? k.a.createElement(si.a, {
                          circle: !0,
                          defaultAspectRatio: 1,
                          mediaId: this.state.mediaId,
                          onCancel: this._handleCropCancel,
                          onDone: this._handleCropDone,
                        })
                      : null,
                    t,
                  )
                },
              },
              {
                key: '_renderMediaPickerWithPreview',
                value: function () {
                  var e = this.props,
                    t = e.avatarMedia,
                    a = e.loggedInUser,
                    n = this.state.done
                  return k.a.createElement(
                    N.a,
                    { style: hi.centerContent },
                    k.a.createElement(li.default, {
                      borderRadius: ti.a.INFINITE,
                      currentContent: a
                        ? k.a.createElement(Oe.a, { size: 'custom', uri: a.profile_image_url_https })
                        : null,
                      location: ci.d.Avatar,
                      mediaItem: t,
                      onChange: this._handleImageMediaChange,
                      onFailure: this._handleImageMediaFailure,
                      onRemove: n ? this._handleImageMediaRemove : void 0,
                      rootStyle: hi.avatarContainer,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        hi = D.a.create(function (e) {
          return {
            avatarContainer: {
              borderWidth: e.borderWidths.medium,
              borderColor: e.colors.white,
              borderStyle: 'solid',
              marginTop: e.spaces.space64,
              marginBottom: e.spaces.space64,
              width: 'calc('.concat(e.spaces.space64, ' * 3)'),
            },
            bannerContainer: { marginTop: e.spaces.space64, marginBottom: e.spaces.space64, maxHeight: '9em' },
            banner: { height: '100%' },
            centerContent: { alignItems: 'center', display: 'flex', width: '100%' },
          }
        }),
        mi = oi(pi),
        _i = a('I/ms'),
        bi = Object(pt.createSelector)(
          ut.e.selectLoggedInUser,
          function (e, t) {
            var a = ni.h(e),
              n = a ? ai.k(e, a) : []
            return A()(n, 1)[0]
          },
          function (e, t) {
            var a = ni.i(e),
              n = a ? ai.k(e, a) : []
            return A()(n, 1)[0]
          },
          function (e, t, a) {
            return { loggedInUser: e, avatarMedia: t, bannerMedia: a }
          },
        ),
        fi = { addBannerMedia: ni.b, removeBannerMedia: ni.e },
        vi = Object(dt.g)(bi, fi),
        gi = 'ocfSelectBannerSkipForNowButton',
        ki = a('9Xij'),
        yi = a('U+bB'),
        wi = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e) {
            var n
            return (
              l()(this, a),
              (n = t.call(this, e)),
              v()(p()(n), '_handleImageMediaRemove', function () {
                ;(0, n.props.removeBannerMedia)(), n.setState({ done: !1, showCropper: !1 })
              }),
              v()(p()(n), '_handleCropDone', function () {
                return n.setState({ done: !0, showCropper: !1 })
              }),
              v()(p()(n), '_handleCropCancel', function () {
                return n._handleCropDone()
              }),
              v()(p()(n), '_handleImageMediaChange', function (e) {
                ;(0, n.props.addBannerMedia)(e[0]), n.setState({ media_id: e[0], showCropper: !0, done: !0 })
              }),
              v()(p()(n), '_handleImageMediaFailure', function () {
                n._handleSkipButtonClick()
              }),
              v()(p()(n), '_handleDoneButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, { link: a.next_link.link_id }), t(a.next_link)
              }),
              v()(p()(n), '_handleSkipButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask.skip_link,
                  r = e.subtaskId,
                  i = e.updateFlow
                a && i(r, { link: a.link_id }), a && t(a)
              }),
              (n.state = { done: void 0, media_id: void 0, showCropper: !1 }),
              n
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    a = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    i = e.subtask,
                    o = e.subtaskInputs,
                    s = i.next_link,
                    l = i.primary_text,
                    c = i.secondary_text,
                    u = i.skip_link,
                    d = k.a.createElement(
                      x.a,
                      {
                        disabled: !u && !this.state.media_id,
                        onPress: this._handleDoneButtonClick,
                        size: 'large',
                        type: 'primaryFilled',
                      },
                      s.label,
                    ),
                    p =
                      u &&
                      k.a.createElement(
                        x.a,
                        { onPress: this._handleSkipButtonClick, size: 'large', testID: gi, type: 'primaryText' },
                        u.label,
                      )
                  return k.a.createElement(
                    pe.a,
                    r()({}, n, { rightControl: this.state.done || !u ? d : p }),
                    k.a.createElement(
                      N.a,
                      { style: re.contentArea },
                      l
                        ? k.a.createElement(
                            ee,
                            r()({}, l, {
                              nativeID: w.b,
                              onNavigate: a,
                              size: 'title4',
                              style: re.headline,
                              subtaskInputs: o,
                              weight: 'bold',
                            }),
                          )
                        : null,
                      c
                        ? k.a.createElement(
                            ee,
                            r()({}, i.secondary_text, { color: 'gray700', onNavigate: a, subtaskInputs: o }),
                          )
                        : null,
                      k.a.createElement(
                        N.a,
                        { style: Ci.container },
                        this._renderMediaPickerWithPreview(),
                        k.a.createElement(N.a, { style: _i.a.avatarAndButton }, this._renderAvatar()),
                        this._renderNames(),
                      ),
                      this.state.showCropper && void 0 !== this.state.media_id
                        ? k.a.createElement(si.a, {
                            defaultAspectRatio: 3,
                            mediaId: this.state.media_id,
                            onCancel: this._handleCropCancel,
                            onDone: this._handleCropDone,
                          })
                        : null,
                    ),
                    t,
                  )
                },
              },
              {
                key: '_renderMediaPickerWithPreview',
                value: function () {
                  var e = this.props,
                    t = e.bannerMedia,
                    a = e.loggedInUser,
                    n = t || (!!a && !!a.profile_banner_url),
                    r = this.state.done
                  return k.a.createElement(li.default, {
                    aspectRatio: 3,
                    currentContent: k.a.createElement(
                      ki.a,
                      { ratio: D.a.theme.aspectRatios.profileBanner },
                      n && a
                        ? k.a.createElement(yi.a, { source: { uri: a.profile_banner_url }, style: Ci.banner })
                        : null,
                    ),
                    location: ci.d.ProfileBanner,
                    mediaItem: t,
                    onChange: this._handleImageMediaChange,
                    onFailure: this._handleImageMediaFailure,
                    onRemove: r ? this._handleImageMediaRemove : void 0,
                    rootStyle: Ci.bannerContainer,
                  })
                },
              },
              {
                key: '_renderAvatar',
                value: function () {
                  var e = this.props,
                    t = e.avatarMedia,
                    a = e.loggedInUser,
                    n = (t && t.mediaFile && t.mediaFile.url) || (a && a.profile_image_url_https)
                  return k.a.createElement(Oe.a, {
                    accessibilityHidden: !0,
                    borderColor: 'white',
                    borderWidth: 'medium',
                    focusable: !1,
                    size: 'custom',
                    style: _i.a.avatar,
                    uri: n,
                  })
                },
              },
              {
                key: '_renderNames',
                value: function () {
                  var e = this.props.loggedInUser
                  if (!e) return null
                  var t = e.name,
                    a = '@'.concat(e.screen_name)
                  return k.a.createElement(
                    N.a,
                    { style: Ci.nameContainer },
                    k.a.createElement(
                      P.b,
                      { align: 'left', style: Ci.names },
                      k.a.createElement(
                        P.b,
                        { accessibilityRole: 'heading', size: 'title4', style: Ci.displayName, weight: 'bold' },
                        t,
                      ),
                      k.a.createElement(P.b, { color: 'gray700', style: Ci.screenName }, a),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        Ci = D.a.create(function (e) {
          return {
            container: { paddingBottom: e.spaces.space64 },
            avatarContainer: {
              marginLeft: e.spaces.space16,
              marginTop: '-25%',
              maxWidth: 'calc(${theme.spaces.space16} * 8)',
              width: '25%',
            },
            bannerContainer: { marginTop: e.spaces.space64, marginBottom: e.spaces.space64, maxHeight: '9em' },
            banner: { height: '100%' },
            centerContent: { alignItems: 'center', display: 'flex', width: '100%' },
            nameContainer: { marginLeft: e.spaces.space16 },
            names: { display: 'block', marginBottom: e.spaces.space12 },
            displayName: { writingDirection: 'ltr', display: 'block', marginTop: e.spaces.space4 },
            screenName: { writingDirection: 'ltr' },
          }
        }),
        Ei = vi(wi),
        Ii = a('QK5w'),
        xi = a('BTou'),
        Si = a('K1iM'),
        Ti = a.n(Si),
        Fi = a('RjwM'),
        Oi = D.a.create(function (e) {
          return {
            icon: { height: '1.5em', width: '1.5em' },
            pillContainer: {
              bottom: e.spaces.space16,
              alignItems: 'center',
              left: '0',
              right: '0',
              margin: 'auto',
              zIndex: 1,
            },
            pillContainerNarrow: { position: 'fixed' },
            pillContainerModal: { position: 'absolute' },
          }
        }),
        Ai = function (e) {
          var t = e.isModal,
            a = e.label,
            n = e.onPress,
            r = [Oi.pillContainer, t ? Oi.pillContainerModal : Oi.pillContainerNarrow]
          return k.a.createElement(
            N.a,
            { style: r },
            k.a.createElement(
              x.a,
              { icon: k.a.createElement(Fi.a, { style: Oi.icon }), onPress: n, type: 'primaryFilled' },
              k.a.createElement(P.b, { size: 'body', weight: 'normal' }, a),
            ),
          )
        },
        Ni = a('7nmT'),
        Pi = a.n(Ni),
        Di = 'OCF_SettingsList_Text',
        Bi = a('jtO7'),
        Ri = a('sXY3'),
        Li = a('+d3d'),
        Vi = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              v()(p()(n), '_formatSubtaskInputsForStore', function (e) {
                return Object(Ri.a)(e).map(function (e) {
                  var t = A()(e, 2),
                    a = t[0],
                    n = t[1],
                    r = n.result,
                    i = n.type
                  return { key: a, response_data: v()({}, i, { result: r }) }
                })
              }),
              v()(p()(n), '_loadSubtaskInputsFromStore', function () {
                var e = n.props,
                  t = e.subtaskId,
                  a = e.subtaskInputs
                return (Object(Q.e)(a, { key: y.s, subtask_id: t }, []) || []).reduce(function (e, t) {
                  var a = t.key,
                    n = Object.keys(t.response_data),
                    r = A()(n, 1)[0],
                    i = t.response_data[r].result
                  return (e[a] = { result: i, type: r }), e
                }, {})
              }),
              v()(p()(n), '_updateFlow', function (e) {
                var t,
                  a = n.props,
                  r = a.subtask,
                  i = a.subtaskId,
                  o = a.updateFlow,
                  s = r.next_link,
                  l = n.state.settingsValues
                if (e) o(i, ((t = {}), v()(t, y.s, n._formatSubtaskInputsForStore(l)), v()(t, 'link', e.link_id), t))
                else if (s) {
                  var c
                  o(i, ((c = {}), v()(c, y.s, n._formatSubtaskInputsForStore(l)), v()(c, 'link', s.link_id), c))
                }
              }),
              v()(p()(n), '_handleShowMore', function () {
                n.setState({ showMore: !0 })
              }),
              v()(p()(n), '_handleNextButtonPress', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask.next_link
                n._updateFlow(), a && t(a)
              }),
              v()(p()(n), '_handleSubListBackClick', function () {
                n.setState({ isSubList: !1, showDividers: !1, showMoreConfig: null, subList: [], subListHeader: null }),
                  n._updateFlow()
              }),
              v()(p()(n), '_handleSettingGroupClick', function (e) {
                var t,
                  a = e.primary_text,
                  r = e.value_data,
                  i = e.value_type,
                  o = null == r || null === (t = r.settings_group_data) || void 0 === t ? void 0 : t.settings
                o &&
                  i === y.u.SettingsGroup &&
                  n.setState({ isSubList: !0, showDividers: !1, showMoreConfig: null, subList: o, subListHeader: a })
              }),
              v()(p()(n), '_handleScrollPromptClick', function () {
                n._viewport && n._viewport.scrollBy(n._viewport.getRect().getHeight())
              }),
              v()(p()(n), '_handleViewportSet', function (e) {
                var t = n.props,
                  a = t.isModal
                t.subtask.scroll_hint &&
                  a &&
                  ((n._viewport = e), n._viewport && n._viewport.addScrollListener(n._handleViewportScroll))
              }),
              v()(
                p()(n),
                '_handleViewportScroll',
                Object(Li.a)(function () {
                  n.state.lastSettingSeen || n.setState({ lastSettingSeen: n._isLastSettingInViewport() })
                }, 250),
              ),
              v()(p()(n), '_isLastSettingInViewport', function () {
                if (n._lastSetting && n._viewport) {
                  var e,
                    t = n._lastSetting.getBoundingClientRect(),
                    a = null === (e = n._viewport) || void 0 === e ? void 0 : e.getRect()
                  if (a) return t.top >= a.getTop() && t.bottom <= a.getBottom()
                }
                return !1
              }),
              v()(p()(n), '_setSettingsRef', function (e) {
                return function (t) {
                  var a = n.state.isSubList
                  if (n.props.subtask.scroll_hint && !a && e && void 0 === n._lastSetting) {
                    n._lastSetting = Pi.a.findDOMNode(t)
                    var r = n._isLastSettingInViewport()
                    r && !n.state.lastSettingSeen && n.setState({ lastSettingSeen: r })
                  } else n._lastSetting = void 0
                }
              }),
              v()(p()(n), '_handleSettingToggle', function (e) {
                var t = e.value_identifier,
                  a = e.value_type
                if (t && Object(Q.i)(a)) {
                  var r = n.state.settingsValues
                  n.setState({
                    settingsValues: o()(o()({}, r), {}, v()({}, t, o()(o()({}, r[t]), {}, { result: !r[t].result }))),
                  })
                }
              }),
              v()(p()(n), '_handleSettingTextChange', function (e, t) {
                var a = e.value_identifier
                if (a) {
                  var r = n.state.settingsValues
                  n.setState({ settingsValues: o()(o()({}, r), {}, v()({}, a, o()(o()({}, r[a]), {}, { result: t }))) })
                }
              }),
              v()(p()(n), '_handleCancelButtonPress', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask.cancel_link
                a && (n._updateFlow(a), t(a))
              }),
              v()(p()(n), '_getSettingsValueNextLink', function () {
                var e = n.props.subtask
                if (e.next_link) return e.next_link
                var t,
                  a = Ti()(e.settings)
                try {
                  for (a.s(); !(t = a.n()).done; ) {
                    var r,
                      i = t.value,
                      o = i.value_data,
                      s = i.value_identifier,
                      l = null == o || null === (r = o.button) || void 0 === r ? void 0 : r.navigation_link
                    if (s === y.t.NextButton && l) return l
                  }
                } catch (c) {
                  a.e(c)
                } finally {
                  a.f()
                }
              })
            var r = e.subtask,
              i = n._initializeSettingsState(r.settings)
            return (
              (n.state = {
                isSubList: !1,
                showDividers: !!r.show_divider,
                showMoreConfig: r.show_more,
                showMore: !1,
                subList: [],
                subListHeader: null,
                settingsValues: i,
                lastSettingSeen: !1,
              }),
              n
            )
          }
          return (
            u()(a, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  var e = this.context.viewport,
                    t = this.props,
                    a = t.isModal
                  t.subtask.scroll_hint &&
                    !a &&
                    ((this._viewport = e),
                    (this._removeScrollListener = this._viewport.addScrollListener(this._handleViewportScroll))),
                    this._updateFlow()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.props.subtask.scroll_hint && this._removeScrollListener && this._removeScrollListener()
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.state.isSubList ? this._renderSubList() : this._renderMainList()
                },
              },
              {
                key: '_renderMainList',
                value: function () {
                  var e,
                    t = this.props,
                    a = t.errorDialog,
                    n = t.isModal,
                    i = t.onNavigate,
                    o = t.passthroughOcfScreenProps,
                    s = t.subtask,
                    l = t.subtaskId,
                    c = t.subtaskInputs,
                    u = this.state.lastSettingSeen,
                    d = !!!s.scroll_hint || u,
                    p = 'prompt' === s.style,
                    h = this._renderNavigationButtons(d),
                    m = s.scroll_hint,
                    _ =
                      !d && m
                        ? k.a.createElement(Ai, { isModal: !!n, label: m, onPress: this._handleScrollPromptClick })
                        : null,
                    b = null !== (e = s.horizontal_style) && void 0 !== e ? e : y.y.Normal,
                    f = l === y.q
                  return k.a.createElement(
                    pe.a,
                    r()({}, o, {
                      onViewportSet: this._handleViewportSet,
                      rightControl: p ? void 0 : h,
                      scrollPrompt: _,
                    }),
                    k.a.createElement(
                      N.a,
                      {
                        style: [
                          b === y.y.Compact ? re.contentAreaCompact : re.contentArea,
                          Mi.bottomPadding,
                          p && Mi.centeredRoot,
                        ],
                      },
                      s.primary_text
                        ? k.a.createElement(
                            ee,
                            r()({}, s.primary_text, {
                              nativeID: w.b,
                              onNavigate: i,
                              size: 'title4',
                              style: Mi.headline,
                              subtaskInputs: c,
                              testID: Di,
                              weight: 'bold',
                            }),
                          )
                        : null,
                      s.secondary_text
                        ? k.a.createElement(
                            ee,
                            r()({}, s.secondary_text, {
                              color: 'gray700',
                              onNavigate: i,
                              style: Mi.headline,
                              subtaskInputs: c,
                            }),
                          )
                        : null,
                      s.header ? k.a.createElement(de, { header: s.header, onNavigate: i, subtaskInputs: c }) : null,
                      this._renderSettingsList(s.settings),
                      f ? k.a.createElement(P.b, { color: 'gray700', size: 'subtext2' }, F.c) : null,
                      s.detail_text
                        ? k.a.createElement(
                            ee,
                            r()({}, s.detail_text, {
                              color: 'gray700',
                              onNavigate: i,
                              style: Mi.detailText,
                              subtaskInputs: c,
                            }),
                          )
                        : null,
                      p && h ? k.a.createElement(N.a, { style: Mi.doneButtonContainer }, h) : null,
                    ),
                    a,
                  )
                },
              },
              {
                key: '_renderSubList',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.subtaskInputs,
                    n = this.state,
                    i = n.subList,
                    o = n.subListHeader
                  return k.a.createElement(
                    pe.a,
                    { onBackClick: this._handleSubListBackClick },
                    k.a.createElement(
                      N.a,
                      { style: re.contentArea },
                      k.a.createElement(
                        ee,
                        r()({}, o, {
                          onNavigate: t,
                          size: 'title4',
                          style: Mi.headline,
                          subtaskInputs: a,
                          weight: 'bold',
                        }),
                      ),
                      this._renderSettingsList(i),
                    ),
                  )
                },
              },
              {
                key: '_renderSettingsList',
                value: function (e) {
                  var t = this,
                    a = this.props,
                    n = a.addToast,
                    r = a.onNavigate,
                    i = a.removeContacts,
                    o = a.subtaskId,
                    s = a.subtaskInputs,
                    l = this.state,
                    c = l.showDividers,
                    u = l.showMore,
                    d = l.showMoreConfig,
                    p = this._getSettingsValueNextLink()
                  return k.a.Children.toArray(
                    e.map(function (a, l) {
                      var h = l === e.length - 1
                      if (d && !u) {
                        if (l === d.initial_to_show)
                          return k.a.createElement(Bi.a, {
                            color: 'primary',
                            label: d.text,
                            onPress: t._handleShowMore,
                          })
                        if (l > d.initial_to_show) return null
                      }
                      return k.a.createElement(tn, {
                        addToast: n,
                        nextLink: p,
                        onNavigate: r,
                        onSettingGroupClick: t._handleSettingGroupClick,
                        onSettingTextChanged: t._handleSettingTextChange,
                        onSettingToggle: t._handleSettingToggle,
                        ref: t._setSettingsRef(h),
                        removeContacts: i,
                        settingValue: a,
                        showDividers: !h && c,
                        subtaskId: o,
                        subtaskInputs: s,
                        updateFlow: t._updateFlow,
                      })
                    }),
                  )
                },
              },
              {
                key: '_renderNextButton',
                value: function (e) {
                  var t,
                    a = this.props.subtask
                  return a.next_link && a.next_link.label
                    ? k.a.createElement(
                        x.a,
                        { disabled: !e, onPress: this._handleNextButtonPress, size: 'large', type: 'primaryFilled' },
                        null === (t = a.next_link) || void 0 === t ? void 0 : t.label,
                      )
                    : null
                },
              },
              {
                key: '_renderCancelButton',
                value: function () {
                  var e,
                    t = this.props.subtask
                  return t.cancel_link && t.cancel_link.label
                    ? k.a.createElement(
                        x.a,
                        { onPress: this._handleCancelButtonPress, size: 'large', type: 'primaryText' },
                        null === (e = t.cancel_link) || void 0 === e ? void 0 : e.label,
                      )
                    : null
                },
              },
              {
                key: '_renderNavigationButtons',
                value: function (e) {
                  return k.a.createElement(k.a.Fragment, null, this._renderNextButton(e), this._renderCancelButton())
                },
              },
              {
                key: '_initializeSettingsState',
                value: function (e) {
                  var t = this._loadSubtaskInputsFromStore()
                  return t && Object.keys(t).length > 0
                    ? t
                    : e.reduce(function (e, t) {
                        var a,
                          n = t.value_data,
                          r = t.value_identifier,
                          i = t.value_type
                        if (r && n && Object(Q.i)(i))
                          e[r] = {
                            result: null === (a = n.boolean_data) || void 0 === a ? void 0 : a.initial_value,
                            type: Object.keys(n)[0],
                          }
                        else if (r && i === y.u.TextField) e[r] = { result: '', type: 'text_data' }
                        else if (i === y.u.SettingsGroup) {
                          var o
                          ;(
                            (null == n || null === (o = n.settings_group_data) || void 0 === o ? void 0 : o.settings) ||
                            []
                          ).forEach(function (t) {
                            var a,
                              n = t.value_data,
                              r = t.value_identifier,
                              i = t.value_type
                            r &&
                              n &&
                              Object(Q.i)(i) &&
                              (e[r] = {
                                result: null === (a = n.boolean_data) || void 0 === a ? void 0 : a.initial_value,
                                type: Object.keys(n)[0],
                              })
                          })
                        }
                        return e
                      }, {})
                },
              },
            ]),
            a
          )
        })(k.a.Component)
      v()(Vi, 'contextTypes', { viewport: Ia.object })
      var Mi = D.a.create(function (e) {
          return {
            centeredRoot: { alignItems: 'center' },
            headline: { marginBottom: e.spaces.space12 },
            detailText: { marginTop: e.spaces.space40 },
            bottomPadding: { paddingBottom: e.spaces.space48 },
            doneButtonContainer: { marginTop: e.spaces.space40 },
          }
        }),
        ji = function () {
          return a.e(346).then(a.t.bind(null, 'OHEV', 7))
        }
      function Ui(e) {
        var t = e.errorDialog,
          a = e.onNavigate,
          n = e.passthroughOcfScreenProps,
          i = e.subtask,
          o = i.code,
          s = i.detail_text,
          l = i.header,
          c = i.next_link,
          u = i.skip_link,
          d = i.style,
          p = e.subtaskId,
          h = e.subtaskInputs,
          m = e.updateFlow,
          _ = s ? k.a.createElement(ee, r()({}, s, { onNavigate: a, subtaskInputs: h })) : null,
          b = k.a.createElement(
            k.a.Fragment,
            null,
            k.a.createElement(
              x.a,
              {
                onPress: function () {
                  m(p, { link: c.link_id }), a(c)
                },
                size: 'large',
                type: 'primaryFilled',
              },
              c.label,
            ),
            u
              ? k.a.createElement(
                  x.a,
                  {
                    onPress: function () {
                      u && (m(p, { link: u.link_id }), a(u))
                    },
                    size: 'large',
                    style: zi.secondaryButton,
                    type: 'primaryOutlined',
                  },
                  u.label,
                )
              : null,
          )
        return k.a.createElement(
          pe.a,
          r()({}, n, { rightControl: b }),
          k.a.createElement(
            N.a,
            { style: re.contentArea },
            k.a.createElement(de, { header: l, onNavigate: a, subtaskInputs: h }),
            d === y.v.Qr
              ? k.a.createElement(
                  N.a,
                  { style: zi.qrCode },
                  k.a.createElement('canvas', {
                    ref: function (t) {
                      var a = e.subtask.code
                      ji().then(function (e) {
                        t && e.toCanvas(t, a, { margin: 5, scale: 5 })
                      })
                    },
                  }),
                  k.a.createElement(N.a, { style: zi.detailText }, _),
                )
              : k.a.createElement(
                  k.a.Fragment,
                  null,
                  k.a.createElement(P.b, { weight: 'bold' }, o),
                  k.a.createElement(N.a, { style: zi.detailText }, _),
                ),
          ),
          t,
        )
      }
      var zi = D.a.create(function (e) {
          return {
            qrCode: { alignItems: 'center', paddingVertical: e.spaces.space16 },
            detailText: { paddingTop: e.spaces.space16 },
            secondaryButton: { marginTop: e.spaces.space12 },
          }
        }),
        Hi = a('NeAX'),
        Wi = Object(pt.createSelector)(lt.o, Hi.selectPreferences, Hi.selectUserPreferences, function (e, t, a) {
          return { navigationContext: e, personalizationSettings: a, shouldPropagateP13nSettings: !t.is_eu_country }
        }),
        Gi = {
          createLocalApiErrorHandler: Object(Me.createLocalApiErrorHandlerWithContextFactory)('OCF_FLOW'),
          fetchPreferencesIfNeeded: Hi.fetchPreferencesIfNeeded,
          scribeAction: st.c,
          syncPersonalizationSettings: Hi.syncSettings,
        },
        qi = Object(dt.g)(Wi, Gi),
        Ki = ['callback', 'defaultValue', 'label'],
        Yi = Rt.a.d44efc66,
        Xi = Rt.a.b4867a17,
        Ji = Rt.a.d4e220b3,
        Zi = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(p()(e), 'state', { errorMessage: '', isValid: !0, value: '' }),
              v()(p()(e), '_updateValue', function (t) {
                var a = e.props.callback,
                  n = Object(Jr.a)(t.trim()),
                  r = !n && -1 !== t.toLowerCase().indexOf('twitter'),
                  i = !n && !r,
                  o = ''
                n ? (o = Yi) : r && (o = Xi), e.setState({ errorMessage: o, isValid: i, value: t }), a(t, i)
              }),
              v()(p()(e), '_handleValueChange', function (t) {
                var a = t.target.value
                e._updateValue(a)
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.defaultValue
                  e && this._updateValue(e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = (e.callback, e.defaultValue, e.label),
                    a = E()(e, Ki),
                    n = this.state,
                    i = n.errorMessage,
                    o = n.isValid,
                    s = this.context.featureSwitches.getValue('user_display_name_max_limit', 50)
                  return k.a.createElement(
                    Kt.a,
                    r()({}, a, {
                      errorText: i,
                      invalid: !o,
                      label: t || Ji,
                      maxLength: 'number' == typeof s ? s : 50,
                      name: 'name',
                      onChange: this._handleValueChange,
                      positionCursorAtEnd: !0,
                      style: re.formTextInput,
                      value: this.state.value,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(k.a.Component)
      v()(Zi, 'contextType', Ge.a)
      var Qi = a('SrtL'),
        $i = a('P7wY'),
        eo = Rt.a.eab9ceb1,
        to = Object.freeze({
          Birthday: 'birthday',
          Email: 'email',
          Name: 'name',
          Phone: 'phone_number',
          Password: 'password',
        }),
        ao = 'select_birthday',
        no = 'select_email',
        ro = 'select_name',
        io = 'select_phone',
        oo = { page: 'onboarding', component: 'signup' },
        so = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              v()(p()(n), '_getDefaultIdentifierField', function () {
                var e = n.props.subtask.allowed_identifiers
                return e === y.w.EmailOnly || e === y.w.EmailThenPhone ? to.Email : to.Phone
              }),
              v()(p()(n), '_renderActiveFieldToggle', function () {
                var e = n.props.subtask.allowed_identifiers
                return e !== y.w.EmailOnly && e !== y.w.PhoneOnly
                  ? k.a.createElement(
                      P.b,
                      {
                        color: 'link',
                        onPress: n._handleActiveTextToggle,
                        style: lo.toggleLink,
                        withInteractiveStyling: !0,
                      },
                      n._getToggleActiveTextTitle(),
                    )
                  : null
              }),
              v()(p()(n), '_renderPasswordField', function () {
                var e = n.props,
                  t = e.subtask,
                  a = e.subtaskId,
                  r = e.subtaskInputs,
                  i = n.state.defaultActiveText,
                  o = Object(Q.e)(r, { key: to.Password, subtask_id: a }, '')
                return k.a.createElement(
                  N.a,
                  { style: lo.passwordEntry },
                  k.a.createElement(Ma, {
                    autoComplete: 'new-password',
                    defaultValue: o || void 0,
                    label: t.password_hint,
                    onPasswordChange: n._handlePasswordChange,
                    onPasswordValidated: n._handlePasswordValidate,
                    userIdentifier: i || void 0,
                  }),
                )
              }),
              v()(p()(n), '_renderNameField', function () {
                var e = n.props,
                  t = e.navigationContext,
                  a = e.subtask,
                  r = e.subtaskId,
                  i = e.subtaskInputs,
                  o = Object(Q.e)(i, { key: to.Name, subtask_id: r }, ''),
                  s = t.action,
                  l = {
                    autoComplete: 'name',
                    autoFocus: !s || s === ro,
                    callback: n._updateNameInfo,
                    defaultValue: o,
                    onFocus: n._handleNameFocus,
                    label: a.name_hint,
                  }
                return k.a.createElement(Zi, l)
              }),
              v()(p()(n), '_renderActiveTextField', function () {
                var e = n.props.subtask,
                  t = n.state,
                  a = t.activeTextField,
                  r = t.defaultActiveText,
                  i = n._shouldFocusActiveTextField(),
                  o = {
                    autoComplete: a === to.Phone ? 'tel' : 'email',
                    autoFocus: i,
                    defaultValue: r,
                    name: a === to.Phone ? 'phone_number' : 'email',
                    label: a === to.Phone ? e.phone_hint : e.email_hint,
                    onRef: n._setInputRef,
                    onValidityChange: n._updateValidity,
                    style: lo.phoneEmailTextField,
                  }
                return a === to.Phone ? k.a.createElement(yn, o) : k.a.createElement(Fa, o)
              }),
              v()(p()(n), '_handleDateChange', function (e) {
                n.setState({ birthdayValue: e, isBirthdayValid: n._isCompleteDate(e) }, n._updateValidity)
              }),
              v()(p()(n), '_isCompleteDate', function (e) {
                return !!(e && e.year && e.month && e.day)
              }),
              v()(p()(n), '_getIdentifierValue', function () {
                return n._input && n._input.getValue()
              }),
              v()(p()(n), '_isValid', function () {
                var e = n.state,
                  t = e.isBirthdayValid,
                  a = e.isNameValid,
                  r = e.isPasswordValid,
                  i = n.props.subtask,
                  o = !i.show_password_field || r,
                  s = i.ignore_birthday || t
                return a && o && s && n._input && n._input.isValid()
              }),
              v()(p()(n), '_setTimRef', function (e) {
                n._timInput = e
              }),
              v()(p()(n), '_updateValidity', function () {
                n.setState({ isValid: n._isValid() })
              }),
              v()(p()(n), '_updateNameInfo', function (e, t) {
                n.setState({ isNameValid: t, nameValue: e }, n._updateValidity)
              }),
              v()(p()(n), '_handleFetchPreferences', function () {
                var e = n.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchPreferencesIfNeeded)().catch(t())
              }),
              v()(p()(n), '_handlePasswordChange', function (e) {
                n.setState({ passwordValue: e }, n._updateValidity)
              }),
              v()(p()(n), '_handlePasswordValidate', function (e) {
                n.setState({ isPasswordValid: e }, n._updateValidity)
              }),
              v()(p()(n), '_shouldFocusActiveTextField', function () {
                var e = n.props.navigationContext,
                  t = n.state.activeTextField === to.Phone ? io : no
                return !n.state.hasNameFieldBeenAutoFocused && e.action === t
              }),
              v()(p()(n), '_handleActiveTextToggle', function () {
                var e = n.state.activeTextField === to.Phone ? to.Email : to.Phone
                n._scribeEvent(e, 'choose'),
                  n._input && n._input.clear(),
                  n.setState({ activeTextField: e, defaultActiveText: '' })
              }),
              v()(p()(n), '_getToggleActiveTextTitle', function () {
                var e = n.props.subtask
                return n.state.activeTextField === to.Phone ? e.use_email_text : e.use_phone_text
              }),
              v()(p()(n), '_handleNameFocus', function () {
                n.setState({ hasNameFieldBeenAutoFocused: !0 })
              }),
              v()(p()(n), '_handleNextButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.shouldPropagateP13nSettings,
                  r = e.subtask,
                  i = e.subtaskId,
                  o = e.updateFlow,
                  s = n.state,
                  l = s.activeTextField,
                  c = s.birthdayValue,
                  u = s.nameValue,
                  d = s.passwordValue,
                  p = n.props.personalizationSettings || {},
                  h = p.allowCookieUse,
                  m = p.allowDeviceAccess,
                  _ = p.allowPartnerships,
                  b = p.allowPersonalization,
                  f = l === to.Email && r.email_next_link ? r.email_next_link : r.next_link,
                  v = n._timInput && n._timInput.value ? { response: n._timInput.value } : void 0,
                  g = n._getIdentifierValue() || void 0,
                  k = { js_instrumentation: v, link: f.link_id, name: u }
                ;(k[l] = g),
                  r.show_password_field && (k.password = d),
                  !r.ignore_birthday && c && (k.birthday = c),
                  a &&
                    (k.personalization_settings = {
                      allow_cookie_use: !!h,
                      allow_device_personalization: !!m,
                      allow_partnerships: !!_,
                      allow_ads_personalization: !!b,
                    }),
                  o(i, k),
                  t(f)
              }),
              v()(p()(n), '_scribeEvent', function (e, t) {
                ;(0, n.props.scribeAction)(o()(o()({}, oo), {}, { element: e, action: t }))
              }),
              v()(p()(n), '_setInputRef', function (e) {
                n._input = e
              })
            var r = e.navigationContext,
              i = e.subtaskId,
              s = e.subtaskInputs,
              c = Object(Q.e)(s, { key: to.Name, subtask_id: i }, ''),
              u = Object(Q.e)(s, { key: to.Phone, subtask_id: i }, ''),
              d = Object(Q.e)(s, { key: to.Email, subtask_id: i }, ''),
              h = Object(Q.e)(s, { key: to.Password, subtask_id: i }, ''),
              m = { day: void 0, month: void 0, year: void 0 },
              _ = Object(Q.e)(s, { key: to.Birthday, subtask_id: i }, void 0) || m,
              b = (function (e) {
                switch (e) {
                  case io:
                    return { type: to.Phone, value: u }
                  case no:
                    return { type: to.Email, value: d }
                  default:
                    return { type: d ? to.Email : n._getDefaultIdentifierField(), value: d || u }
                }
              })(r.action)
            return (
              (n.state = {
                activeTextField: b.type,
                birthdayValue: _,
                defaultActiveText: b.value,
                nameValue: c,
                hasNameFieldBeenAutoFocused: !1,
                passwordValue: h,
                isNameValid: void 0,
                isPasswordValid: !!h,
                isBirthdayValid: n._isCompleteDate(_),
                isValid: void 0,
              }),
              n
            )
          }
          return (
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    a = e.syncPersonalizationSettings
                  Er.a.inject({ scriptId: 'jsInstLibrary', src: 'https://twitter.com/i/js_inst?c_name=ui_metrics' }),
                    this._handleFetchPreferences(),
                    a().catch(t())
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this._shouldFocusActiveTextField() && this._input && this._input.focus()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.passthroughOcfScreenProps,
                    a = e.progressIndication,
                    n = e.subtask,
                    i = k.a.createElement(
                      x.a,
                      {
                        disabled: !this.state.isValid,
                        onPress: this._handleNextButtonClick,
                        size: 'large',
                        type: 'primaryFilled',
                      },
                      n.next_link.label,
                    )
                  return k.a.createElement(
                    pe.a,
                    r()({}, t, { progressIndication: a, rightControl: i }),
                    k.a.createElement(Qi.a, { title: eo }),
                    k.a.createElement(
                      N.a,
                      { style: re.contentArea },
                      n.primary_text &&
                        k.a.createElement(
                          P.b,
                          { nativeID: w.b, size: 'title4', style: re.headline, weight: 'bold' },
                          n.primary_text,
                        ),
                      this._renderNameField(),
                      this._renderActiveTextField(),
                      this._renderActiveFieldToggle(),
                      this._renderBirthdayField(),
                      n.show_password_field ? this._renderPasswordField() : null,
                      k.a.createElement('input', {
                        autoComplete: 'off',
                        name: 'ui_metrics',
                        ref: this._setTimRef,
                        type: 'hidden',
                      }),
                    ),
                  )
                },
              },
              {
                key: '_renderBirthdayField',
                value: function () {
                  var e = this.props,
                    t = e.navigationContext,
                    a = e.subtask,
                    n = a.birthday_explanation,
                    r = a.birthday_hint,
                    i = a.ignore_birthday,
                    o = this.state.birthdayValue || {},
                    s = t.action === ao
                  return i
                    ? null
                    : k.a.createElement(
                        N.a,
                        { accessibilityLabel: r, accessibilityRole: 'group', style: lo.birthdayPicker },
                        k.a.createElement(P.b, { size: 'body', weight: 'bold' }, r),
                        k.a.createElement(P.b, { color: 'gray700', size: 'body' }, n),
                        k.a.createElement(ia.a, {
                          autofocus: s,
                          day: o.day,
                          label: a.birthday_hint || '',
                          minSelectableYear: Object($i.b)(),
                          month: o.month,
                          onChange: this._handleDateChange,
                          year: o.year,
                        }),
                      )
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        lo = D.a.create(function (e) {
          return {
            birthdayPicker: { marginTop: e.spaces.space32 },
            toggleLink: { marginTop: e.spaces.space16, alignSelf: 'flex-start' },
            passwordEntry: { marginTop: e.spaces.space16 },
            phoneEmailTextField: { paddingHorizontal: 0 },
          }
        }),
        co = qi(so),
        uo = Rt.a.a565833d,
        po = Rt.a.h3629782,
        ho = Rt.a.j1c3f4b9,
        mo = Rt.a.c119dee8,
        _o = Rt.a.f70cd5ed,
        bo = Rt.a.a3841918,
        fo = Rt.a.d4e220b3,
        vo = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(p()(e), '_handleSignupButtonClick', function () {
                var t,
                  a = e.props,
                  n = a.onNavigate,
                  r = a.subtask,
                  i = a.subtaskId,
                  o = a.subtaskInputs,
                  s = a.updateFlow,
                  l = r.email,
                  c = r.phone_number,
                  u = c && c.subtask_data_reference && Object(Q.e)(o, c.subtask_data_reference),
                  d = l && l.subtask_data_reference && Object(Q.e)(o, l.subtask_data_reference)
                e._isOldEnoughOrIgnored()
                  ? u
                    ? (t = r.phone_next_link)
                    : d && (t = r.email_next_link)
                  : (t = r.invalid_birthday_link),
                  t && s(i, { link: t.link_id }),
                  t && n(t)
              }),
              v()(p()(e), '_handleNavigationClick', function (t) {
                ;(0, e.props.onNavigate)(t)
              }),
              v()(p()(e), '_handleNameEdit', function () {
                var t = e.props.subtask
                e._handleNavigationClick(t.name_edit_link)
              }),
              v()(p()(e), '_handleBirthdayEdit', function () {
                var t = e.props.subtask
                e._handleNavigationClick(t.birthday_edit_link)
              }),
              v()(p()(e), '_handlePhoneEdit', function () {
                var t = e.props.subtask
                e._handleNavigationClick(t.phone_edit_link)
              }),
              v()(p()(e), '_handleEmailEdit', function () {
                var t = e.props.subtask
                e._handleNavigationClick(t.email_edit_link)
              }),
              v()(p()(e), '_handlePrivacyOptionsClick', function (t) {
                return function (a) {
                  a.preventDefault(), e._handleNavigationClick(t)
                }
              }),
              v()(p()(e), '_isOldEnoughOrIgnored', function () {
                var t = e.props.subtask,
                  a = t.birthday,
                  n = t.birthday_requirement
                if (t.ignore_birthday) return !0
                var r = a && a.subtask_data_reference && Object(Q.e)(e.props.subtaskInputs, a.subtask_data_reference),
                  i = r && new Date(r.year, r.month - 1, r.day),
                  o = n || {},
                  s = o.day,
                  l = o.month,
                  c = o.year,
                  u = c && l && s && new Date(c, l - 1, s)
                return !i || !u || i <= u
              }),
              v()(p()(e), '_getSignupButtonLabel', function () {
                var t = e.props,
                  a = t.subtask,
                  n = t.subtaskInputs,
                  r = a.email,
                  i = a.phone_number,
                  o = i && Object(Q.g)(n, i),
                  s = r && Object(Q.g)(n, r)
                return o ? a.phone_next_link.label : s ? a.email_next_link.label : uo
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    a = e.passthroughOcfScreenProps,
                    n = e.progressIndication
                  return k.a.createElement(
                    pe.a,
                    r()({}, a, { progressIndication: n }),
                    k.a.createElement(
                      N.a,
                      null,
                      k.a.createElement(
                        N.a,
                        { style: re.contentArea },
                        this._maybeRenderPrimaryText(),
                        this._renderNameField(),
                        this._renderPhoneOrEmailField(),
                        this._maybeRenderBirthdayField(),
                        this._maybeRenderDetailText(),
                        k.a.createElement(
                          x.a,
                          {
                            onPress: this._handleSignupButtonClick,
                            size: 'xLarge',
                            style: re.primaryButton,
                            type: 'primaryFilled',
                          },
                          this._getSignupButtonLabel(),
                        ),
                      ),
                    ),
                    t,
                  )
                },
              },
              {
                key: '_maybeRenderPrimaryText',
                value: function () {
                  var e = this.props.subtask
                  return e.primary_text
                    ? k.a.createElement(
                        P.b,
                        { align: 'left', nativeID: w.b, size: 'title4', style: re.headline, weight: 'bold' },
                        e.primary_text,
                      )
                    : null
                },
              },
              {
                key: '_maybeRenderDetailText',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.subtask,
                    n = e.subtaskInputs,
                    i = a.detail_text
                  return i
                    ? k.a.createElement(ee, r()({}, i, { onNavigate: t, style: go.detailText, subtaskInputs: n }))
                    : null
                },
              },
              {
                key: '_renderNameField',
                value: function () {
                  var e = this.props,
                    t = e.subtask,
                    a = e.subtaskInputs,
                    n = t.name && Object(Q.g)(a, t.name)
                  return k.a.createElement(
                    N.a,
                    { onClick: this._handleNameEdit, testID: 'editName' },
                    k.a.createElement(Kt.a, {
                      defaultValue: n || '',
                      label: fo,
                      name: 'name',
                      style: re.formTextInput,
                    }),
                  )
                },
              },
              {
                key: '_maybeRenderBirthdayField',
                value: function () {
                  var e = this.props,
                    t = e.subtask,
                    a = e.subtaskInputs,
                    n =
                      t.birthday &&
                      t.birthday.subtask_data_reference &&
                      Object(Q.e)(a, t.birthday.subtask_data_reference),
                    r = n || {},
                    i = r.day,
                    o = r.month,
                    s = r.year,
                    l = i && o && s && po(new Date(s, o - 1, i))
                  return !t.ignore_birthday && n && l
                    ? k.a.createElement(
                        N.a,
                        {
                          accessibilityLabel: ho({ birthdate: l }),
                          accessibilityRole: 'button',
                          onClick: this._handleBirthdayEdit,
                          testID: 'editBirthday',
                        },
                        k.a.createElement(Kt.a, {
                          defaultValue: l,
                          label: mo,
                          name: 'birthday',
                          style: re.formTextInput,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderPhoneOrEmailField',
                value: function () {
                  var e = this.props,
                    t = e.subtask,
                    a = t.email,
                    n = t.phone_number,
                    r = e.subtaskInputs,
                    i = n && n.subtask_data_reference && Object(Q.e)(r, n.subtask_data_reference),
                    o = a && a.subtask_data_reference && Object(Q.e)(r, a.subtask_data_reference)
                  return i
                    ? k.a.createElement(
                        N.a,
                        { onClick: this._handlePhoneEdit, testID: 'editPhone' },
                        k.a.createElement(Kt.a, {
                          defaultValue: i || '',
                          label: _o,
                          name: 'phone',
                          style: re.formTextInput,
                        }),
                      )
                    : o
                    ? k.a.createElement(
                        N.a,
                        { onClick: this._handleEmailEdit, testID: 'editEmail' },
                        k.a.createElement(Kt.a, {
                          defaultValue: o || '',
                          label: bo,
                          name: 'email',
                          style: re.formTextInput,
                        }),
                      )
                    : null
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        go = D.a.create(function (e) {
          return { detailText: { marginTop: e.spaces.space64 } }
        }),
        ko = vo,
        yo = 'selected_search_topic_ids',
        wo = 'selected_topic_ids',
        Co = [],
        Eo = function (e, t) {
          var a = Object(lt.v)(e)
          return Object(Q.e)(a, { key: yo, subtask_id: t.subtaskId })
        },
        Io = function (e, t) {
          var a = Object(lt.v)(e)
          return Object(Q.e)(a, { key: wo, subtask_id: t.subtaskId })
        },
        xo = function (e, t) {
          return t.subtask.selected_topics_cart ? t.subtask.selected_topics_cart.selected_topic_ids : Co
        },
        So = Object(Ve.a)()
          .propsFromState(function () {
            return { initialSearchTopicIds: Eo, initialSelectedTopicIds: Io, cartTopicIds: xo }
          })
          .adjustStateProps(function (e) {
            var t = e.cartTopicIds,
              a = e.initialSearchTopicIds,
              n = e.initialSelectedTopicIds
            return { initialSearchTopicIds: a || Co, initialSelectedTopicIds: n || t }
          })
          .withAnalytics({ section: 'topics_selector' }),
        To = a('Rp9C'),
        Fo = a('Znyr'),
        Oo = a('sgih'),
        Ao = (a('1t7P'), a('jQ/y'), Object.freeze({ TopicCategory: 'topic_category', Topic: 'topic' })),
        No = a('j7Bv'),
        Po = a('CGyZ'),
        Do = a('cm6r'),
        Bo = a('zfvc'),
        Ro = a('EHV7'),
        Lo = a('iY63'),
        Vo = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(G.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [W.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            k.a.createElement(
              'g',
              null,
              k.a.createElement('path', {
                d: 'M19 13H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1z',
              }),
            ),
          )
        }
      Vo.metadata = { width: 24, height: 24 }
      var Mo = Vo,
        jo = Rt.a.e854ad27,
        Uo = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(p()(e), '_handleFollow', function () {
                var t = e.props,
                  a = t.id
                ;(0, t.onFollowTopic)(a)
              }),
              v()(p()(e), '_handleUnfollow', function () {
                var t = e.props,
                  a = t.id
                ;(0, t.onUnfollowTopic)(a)
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.id,
                    a = e.onNavigate,
                    n = e.selectedTopicIds,
                    i = e.subtaskInputs,
                    o = e.topicsById[t],
                    s = n.includes(this.props.id)
                  return k.a.createElement(
                    N.a,
                    { style: Ho.cell },
                    k.a.createElement(No.a, { Icon: Ro.a, size: 'large', style: Ho.topicIcon }),
                    k.a.createElement(
                      N.a,
                      { style: Ho.topicInfo },
                      k.a.createElement(ee, r()({ weight: 'bold' }, o.title, { onNavigate: a, subtaskInputs: i })),
                      o.description
                        ? k.a.createElement(
                            ee,
                            r()({ color: 'gray700' }, o.description, { onNavigate: a, subtaskInputs: i }),
                          )
                        : null,
                    ),
                    k.a.createElement(Po.a, {
                      isFollowing: s,
                      onFollow: this._handleFollow,
                      onUnfollow: this._handleUnfollow,
                      showRelationshipChangeConfirmation: !1,
                      size: 'small',
                      type: 'topic',
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(k.a.PureComponent),
        zo = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(p()(e), 'state', { expanded: !1 }),
              v()(p()(e), '_handleClick', function () {
                e.setState({ expanded: !e.state.expanded })
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.categoriesById,
                    a = e.id,
                    n = e.isTopLevel,
                    i = e.onNavigate,
                    o = e.subtaskInputs,
                    s = this.state.expanded,
                    l = t[a],
                    c = s ? Go : Wo
                  return k.a.createElement(
                    k.a.Fragment,
                    null,
                    k.a.createElement(
                      Do.a,
                      {
                        accessibilityExpanded: s,
                        accessibilityLabel: jo({ title: l.title.text }),
                        onClick: this._handleClick,
                        style: Ho.cell,
                      },
                      k.a.createElement(
                        ee,
                        r()(
                          { color: 'primary', size: n ? 'headline1' : 'body', weight: n ? 'heavy' : 'bold' },
                          l.title,
                          { onNavigate: i, subtaskInputs: o },
                        ),
                      ),
                      c,
                    ),
                    k.a.createElement(
                      N.a,
                      { style: Ho.children },
                      k.a.createElement(Bo.b, { show: s }, this._renderChildren()),
                    ),
                  )
                },
              },
              {
                key: '_renderChildren',
                value: function () {
                  var e = this.props,
                    t = e.categoriesById,
                    n = e.id,
                    i = e.onFollowTopic,
                    o = e.onNavigate,
                    s = e.onUnfollowTopic,
                    l = e.selectedTopicIds,
                    c = e.subtaskInputs,
                    u = e.topicsById,
                    d = t[n],
                    p = { selectedTopicIds: l, onFollowTopic: i, onUnfollowTopic: s, topicsById: u, subtaskInputs: c }
                  return d.children_items.map(function (e) {
                    var n = e.id
                    return e.type === Ao.Topic
                      ? k.a.createElement(Uo, r()({}, p, { id: n, key: n, onNavigate: o }))
                      : k.a.createElement(a, r()({}, p, { categoriesById: t, id: n, key: n, onNavigate: o }))
                  })
                },
              },
            ]),
            a
          )
        })(k.a.PureComponent),
        Ho = D.a.create(function (e) {
          return {
            cell: {
              alignItems: 'center',
              flexDirection: 'row',
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space4,
              justifyContent: 'space-between',
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
            },
            topicInfo: { flexGrow: 1, flexShrink: 1, marginRight: e.spaces.space12 },
            topicIcon: { flexShrink: 0, marginRight: e.spaces.space12 },
            plusIcon: { color: e.colors.gray700 },
            minusIcon: { color: e.colors.primary },
            children: { marginLeft: e.spaces.space12 },
          }
        }),
        Wo = k.a.createElement(Lo.a, { style: Ho.plusIcon }),
        Go = k.a.createElement(Mo, { style: Ho.minusIcon }),
        qo = Rt.a.f134915f,
        Ko = Rt.a.h6beb5fa,
        Yo = Rt.a.b8fb87e0,
        Xo = k.a.createElement(H.a, null),
        Jo = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(p()(e), 'state', { hideBanner: !1, selectedTopicIds: e.props.initialSelectedTopicIds, showCart: !1 }),
              v()(p()(e), '_renderCartButton', function () {
                var t = e.props.subtask.selected_topics_cart,
                  a = e.state.selectedTopicIds
                return t && t.title && a.length > 0
                  ? k.a.createElement(
                      N.a,
                      null,
                      k.a.createElement(x.a, {
                        accessibilityLabel: Yo,
                        icon: Xo,
                        onPress: e._handleOpenCart,
                        size: 'small',
                        type: 'brandOutlined',
                      }),
                      k.a.createElement(Fo.a, {
                        count: a.length,
                        truncatedCountFormatter: Ko,
                        unreadCountLabel: qo,
                        withBorder: !0,
                      }),
                    )
                  : null
              }),
              v()(p()(e), '_renderCart', function () {
                var t = e.props,
                  a = t.onNavigate,
                  n = t.subtask,
                  i = t.subtaskInputs,
                  o = n.selected_topics_cart,
                  s =
                    o && o.done_label
                      ? k.a.createElement(
                          x.a,
                          {
                            key: 'button_cancel',
                            onPress: e._handleCloseCart,
                            style: Zo.cartButton,
                            type: 'primaryOutlined',
                          },
                          o.done_label.text,
                        )
                      : null
                return k.a.createElement(
                  Oo.a,
                  { onMaskClick: e._handleCloseCart, style: Zo.cart, type: 'bottom', withMask: !0 },
                  o && o.title
                    ? k.a.createElement(
                        ee,
                        r()(
                          {
                            align: 'center',
                            onNavigate: a,
                            size: 'headline1',
                            style: Zo.cartHeader,
                            subtaskInputs: i,
                            weight: 'heavy',
                          },
                          o.title,
                        ),
                      )
                    : null,
                  e._renderCartItems(),
                  s,
                )
              }),
              v()(p()(e), '_handleOpenCart', function () {
                e.setState({ showCart: !0 }), e.props.analytics.scribe({ element: 'cart', action: 'impression' })
              }),
              v()(p()(e), '_handleCloseCart', function () {
                e.setState({ showCart: !1 }), e.props.analytics.scribe({ element: 'cart', action: 'dismiss' })
              }),
              v()(p()(e), '_renderBanner', function () {
                var t = e.props.subtask.banner,
                  a = e.state.hideBanner
                return t && !a
                  ? k.a.createElement(Re.a, {
                      actionLabel: t.dismiss_label.text,
                      headline: t.title.text,
                      onAction: e._handleBannerDismiss,
                      onClose: e._handleBannerDismiss,
                      subtext: t.subtitle.text,
                    })
                  : null
              }),
              v()(p()(e), '_renderText', function () {
                var t = e.props,
                  a = t.onNavigate,
                  n = t.subtask,
                  i = t.subtaskInputs,
                  o = n.primary_text,
                  s = n.secondary_text
                return k.a.createElement(
                  N.a,
                  { style: Zo.textContainer },
                  o
                    ? k.a.createElement(
                        ee,
                        r()(
                          { align: 'center', onNavigate: a, size: 'headline1', subtaskInputs: i, weight: 'heavy' },
                          o,
                        ),
                      )
                    : null,
                  s
                    ? k.a.createElement(
                        ee,
                        r()(
                          { align: 'center', color: 'gray700', onNavigate: a, style: Zo.bodyText, subtaskInputs: i },
                          s,
                        ),
                      )
                    : null,
                )
              }),
              v()(p()(e), '_renderSkip', function () {
                var t = e.props.subtask.skip_link
                return t
                  ? k.a.createElement(
                      x.a,
                      { onPress: e._handleSkipButtonClick, size: 'large', style: Zo.skipButton, type: 'primaryText' },
                      t.label,
                    )
                  : null
              }),
              v()(p()(e), '_renderDone', function () {
                var t = e.props.subtask.next_link
                return k.a.createElement(
                  x.a,
                  { onPress: e._handleNextButtonClick, size: 'large', type: 'primaryFilled' },
                  t.label,
                )
              }),
              v()(p()(e), '_renderCartItems', function () {
                var t = e.props,
                  a = t.onNavigate,
                  n = t.subtask,
                  r = t.subtaskInputs,
                  i = e.state.selectedTopicIds
                return i.map(function (t) {
                  return k.a.createElement(Uo, {
                    id: t,
                    key: t,
                    onFollowTopic: e._handleFollowTopic,
                    onNavigate: a,
                    onUnfollowTopic: e._handleUnfollowTopic,
                    selectedTopicIds: i,
                    subtaskInputs: r,
                    topicsById: n.topic_by_id_list,
                  })
                })
              }),
              v()(p()(e), '_renderItems', function () {
                var t = e.props,
                  a = t.onNavigate,
                  n = t.subtask,
                  r = t.subtaskInputs,
                  i = e.state.selectedTopicIds
                return n.top_category_ids.map(function (t) {
                  return k.a.createElement(zo, {
                    categoriesById: n.category_by_id_list,
                    id: t,
                    isTopLevel: !0,
                    key: t,
                    onFollowTopic: e._handleFollowTopic,
                    onNavigate: a,
                    onUnfollowTopic: e._handleUnfollowTopic,
                    selectedTopicIds: i,
                    subtaskInputs: r,
                    topicsById: n.topic_by_id_list,
                  })
                })
              }),
              v()(p()(e), '_handleFollowTopic', function (t) {
                e.props.analytics.scribe({ element: 'topic', action: 'follow', data: { items: [To.a.forTopic(t)] } }),
                  e.setState({ selectedTopicIds: [].concat(dr()(e.state.selectedTopicIds), [t]) })
              }),
              v()(p()(e), '_handleUnfollowTopic', function (t) {
                e.props.analytics.scribe({ element: 'topic', action: 'unfollow', data: { items: [To.a.forTopic(t)] } }),
                  e.setState({
                    selectedTopicIds: e.state.selectedTopicIds.filter(function (e) {
                      return e !== t
                    }),
                  })
              }),
              v()(p()(e), '_handleBannerDismiss', function () {
                e.props.analytics.scribe({ element: 'prompt', action: 'dismiss' }), e.setState({ hideBanner: !0 })
              }),
              v()(p()(e), '_handleNextButtonClick', function () {
                var t = e.props,
                  a = t.onNavigate,
                  n = t.subtask,
                  r = t.subtaskId,
                  i = t.updateFlow,
                  o = e.state.selectedTopicIds
                i(r, { link: n.next_link.link_id, selected_topic_ids: o }), a(n.next_link)
              }),
              v()(p()(e), '_handleSkipButtonClick', function () {
                var t = e.props,
                  a = t.onNavigate,
                  n = t.subtask,
                  r = t.subtaskId
                ;(0, t.updateFlow)(r, { link: n.skip_link.link_id }), a(n.skip_link)
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.analytics
                  e.subtask.banner && t.scribe({ element: 'prompt', action: 'impression' })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.errorDialog,
                    a = e.passthroughOcfScreenProps,
                    n = this.state.showCart,
                    i = k.a.createElement(N.a, null, this._renderSkip(), this._renderDone()),
                    o = this._renderCartButton()
                  return k.a.createElement(
                    pe.a,
                    r()({}, a, { leftControl: o, rightControl: i }),
                    k.a.createElement(
                      N.a,
                      { style: re.contentArea },
                      this._renderBanner(),
                      this._renderText(),
                      this._renderItems(),
                    ),
                    n ? this._renderCart() : null,
                    t,
                  )
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        Zo = D.a.create(function (e) {
          return {
            skipButton: { marginRight: e.spaces.space12 },
            cart: {
              flexGrow: 1,
              maxHeight: '80vh',
              overflow: 'auto',
              padding: e.spaces.space20,
              paddingBottom: e.spaces.space20,
            },
            cartButton: { marginTop: e.spaces.space12 },
            cartHeader: { marginBottom: e.spaces.space12 },
            textContainer: { marginBottom: e.spaces.space12 },
            bodyText: { alignSelf: 'center', marginTop: e.spaces.space12, maxWidth: 400 },
          }
        }),
        Qo = So(Jo),
        $o = Object(Me.createLocalApiErrorHandlerWithContextFactory)('OCF_TWEET_SELECTION_URT'),
        es = Object(Ve.a)()
          .propsFromActions(function () {
            return { clearTimelineCache: Hn.a, createLocalApiErrorHandler: $o }
          })
          .withAnalytics(),
        ts = a('ezF+'),
        as = a('VPAj'),
        ns = a('kY28'),
        rs = a('CUXw'),
        is = function (e) {
          var t = e.onClick
          return ts.g({
            component: rs.a,
            createProps: function (e) {
              var a = e.entry
              return {
                index: a.index,
                tweetId: a.content.id,
                onClick: t,
                replyContext: ns.a.ReplyContextTypes.None,
                withActions: !1,
              }
            },
            isClickable: Object(as.a)(!0),
            isFocusable: Object(as.a)(!0),
            shouldDisplayBorder: Object(as.a)(!0),
          })
        },
        os = a('8UdT'),
        ss = a('VrCx'),
        ls = function (e) {
          switch (e) {
            case Qn.a.NOT_FOUND:
              return k.a.createElement(Xn.a, null)
            case Qn.a.NOT_ALLOWED:
              return k.a.createElement(Yn.a, null)
            default:
              return (
                Object(St.a)('Unhandled timeline unavailable reason in Ocf TweetSelectionURT screen: '.concat(e)), null
              )
          }
        },
        cs = D.a.create(function (e) {
          return { container: { paddingTop: e.spaces.space40 } }
        }),
        us = es(function (e) {
          var t = e.errorDialog,
            a = e.onNavigate,
            n = e.passthroughOcfScreenProps,
            i = e.subtask,
            s = e.subtaskId,
            l = e.subtaskInputs,
            c = e.updateFlow,
            u = i.graphql_timeline_query,
            d = i.header,
            p = i.next_link,
            h = i.next_link_options,
            m = i.timeline_source,
            _ = k.a.useState([]),
            b = A()(_, 2),
            f = b[0],
            g = b[1],
            y = k.a.useCallback(
              function () {
                c(s, { link: p.link_id, selected_tweet_ids: f }), a(p)
              },
              [f, a, p, s, c],
            ),
            w = k.a.useCallback(
              function (e) {
                g(function (t) {
                  return t.includes(e)
                    ? t.filter(function (t) {
                        return e !== t
                      })
                    : t.concat(e)
                })
              },
              [g],
            ),
            C = k.a.useMemo(
              function () {
                return (function (e) {
                  var t,
                    a = e.handleTweetClick
                  return o()(
                    o()({}, Gn.b),
                    {},
                    ((t = {}),
                    v()(t, os.b.Tombstone, ts.e(ts.a())),
                    v()(
                      t,
                      os.b.Tweet,
                      o()(o()({}, Gn.b[os.b.Tweet]), {}, { handlers: v()({}, ss.a.Tweet, is({ onClick: a })) }),
                    ),
                    t),
                  )
                })({ handleTweetClick: w })
              },
              [w],
            ),
            E = k.a.useMemo(
              function () {
                return (function (e, t) {
                  return e
                    ? Object(Kn.a)(e.timeline_key)
                    : Object(zn.a)({ urtUrl: { url: t || '', urlType: er.a.UrtEndpoint } })
                })(u, m)
              },
              [u, m],
            ),
            I = k.a.useMemo(
              function () {
                return (function (e, t) {
                  if (t) {
                    var a = t.max_enable_count,
                      n = t.min_enable_count
                    if (n && a) return n <= e && e <= a
                    if (n) return n <= e
                    if (a) return e <= a
                  }
                  return !0
                })(f.length, h)
              },
              [f, h],
            ),
            S = k.a.createElement(
              x.a,
              { disabled: !I, onPress: y, size: 'large', type: 'primaryFilled' },
              i.next_link.label,
            )
          return k.a.createElement(
            pe.a,
            r()({}, n, { rightControl: S }),
            k.a.createElement(
              N.a,
              { style: re.contentArea },
              d ? k.a.createElement(de, { header: d, onNavigate: a, subtaskInputs: l }) : null,
              k.a.createElement(
                N.a,
                { style: cs.container },
                k.a.createElement(Jn.a, { entryConfiguration: C, module: E, renderUnavailable: ls, title: '' }),
              ),
            ),
            t,
          )
        }),
        ds = function (e, t) {
          var a = ni.h(e),
            n = a ? ai.k(e, a) : []
          return A()(n, 1)[0]
        },
        ps = function (e, t) {
          var a = ni.i(e),
            n = a ? ai.k(e, a) : []
          return A()(n, 1)[0]
        },
        hs = Object(Ve.a)()
          .propsFromState(function () {
            return { avatarMedia: ds, bannerMedia: ps }
          })
          .propsFromActions(function () {
            return { scribeAction: st.c, updateProfileAvatar: ni.l, updateProfileBanner: ni.m }
          })
          .withAnalytics()(
          (function (e) {
            m()(a, e)
            var t = b()(a)
            function a() {
              var e
              l()(this, a)
              for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                v()(p()(e), '_scribeUploadStart', function (t) {
                  var a = e.props,
                    n = a.analytics,
                    r = {
                      section: t,
                      element: 'upload',
                      action: 'start',
                      data: { items: [{ token: a.flowToken, name: a.subtaskId }] },
                    }
                  n.scribe(r)
                }),
                v()(p()(e), '_updateMedia', function () {
                  var t = e.props,
                    a = t.avatarMedia,
                    n = t.bannerMedia,
                    r = t.subtask.sources,
                    i = t.updateProfileAvatar,
                    o = t.updateProfileBanner
                  return new Promise(function (t, s) {
                    try {
                      r.forEach(function (t) {
                        var r = t.style
                        r === y.l.Avatar && a
                          ? (e._scribeUploadStart('select_avatar'), i(a.id))
                          : r === y.l.Banner && n && (e._scribeUploadStart('select_banner'), o(n.id))
                      }),
                        t()
                    } catch (l) {
                      s(l)
                    }
                  })
                }),
                e
              )
            }
            return (
              u()(a, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.onNavigate,
                      a = e.subtask,
                      n = e.subtaskId
                    return k.a.createElement(We, {
                      navigationLink: a.next_link,
                      onNavigate: t,
                      subtaskAction: this._updateMedia,
                      subtaskId: n,
                    })
                  },
                },
              ]),
              a
            )
          })(k.a.Component),
        ),
        ms = (a('7xRU'), a('IcAo')),
        _s = a('Ka9G'),
        bs = k.a.createContext(new Set()),
        fs = function (e, t) {
          return function (a) {
            a.loggedInUserId, a.promotedContent
            var n = a.userId
            return k.a.createElement(bs.Consumer, null, function (a) {
              return k.a.createElement(Po.a, {
                isFollowing: a.has(n),
                onFollow: e(n),
                onUnfollow: t(n),
                showRelationshipChangeConfirmation: !1,
                size: 'small',
                style: vs.followButton,
                type: 'user',
              })
            })
          }
        },
        vs = D.a.create(function (e) {
          return { followButton: { alignSelf: 'flex-start', marginLeft: e.spaces.space12 } }
        }),
        gs = function (e, t, a) {
          return function (n) {
            var r = n.user.id_str
            a.has(r) ? t(r)() : e(r)()
          }
        },
        ks = a('ZNT5'),
        ys = function (e) {
          switch (e) {
            case Qn.a.NOT_FOUND:
              return k.a.createElement(Xn.a, null)
            case Qn.a.NOT_ALLOWED:
              return k.a.createElement(Yn.a, null)
            default:
              return Object(St.a)('Unhandled timeline unavailable reason: '.concat(e)), null
          }
        },
        ws = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e) {
            var n
            return (
              l()(this, a),
              (n = t.call(this, e)),
              v()(p()(n), '_isBelowMinFollows', function () {
                var e = n.props.subtask.min_follow_count
                return !!e && n.state.selectedUsers.size < e
              }),
              v()(
                p()(n),
                '_getMemoizedModule',
                Object(nr.a)(function (e, t) {
                  return (
                    (n = (a = { subtask_id: e, flow_token: t || '' }).flow_token),
                    (r = a.subtask_id),
                    Object(ks.a)({
                      timelineId: 'nux-user-recos-'.concat(r),
                      getEndpoint: function (e) {
                        return e.URT.fetchNUXUserRecommendations
                      },
                      getEndpointParams: function (e) {
                        return o()(o()({}, e), {}, { subtask_id: r, flow_token: n })
                      },
                      context: 'FETCH_NUX_USER_RECOS',
                      perfKey: 'nux-user-recos',
                    })
                  )
                  var a, n, r
                }),
              ),
              v()(p()(n), '_getModule', function () {
                var e = n.props,
                  t = e.flowToken,
                  a = e.subtaskId
                return n._getMemoizedModule(a, t)
              }),
              v()(p()(n), '_onFollow', function (e) {
                return function () {
                  var t = Object(Ye.a)(dr()(n.state.selectedUsers))
                  t.add(e), n.setState({ selectedUsers: t }), n._handleScribe('follow')
                }
              }),
              v()(p()(n), '_onUnfollow', function (e) {
                return function () {
                  var t = Object(Ye.a)(dr()(n.state.selectedUsers))
                  t.has(e) && t.delete(e), n.setState({ selectedUsers: t }), n._handleScribe('unfollow')
                }
              }),
              v()(p()(n), '_getFollowText', function (e, t, a) {
                return !e || a < 1 ? t : e.concat(tr.a.getFormattedCount(a))
              }),
              v()(p()(n), '_handleFollowButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, {
                  link: a.next_link.link_id,
                  selected_user_recommendations: dr()(n.state.selectedUsers),
                }),
                  t(a.next_link)
              }),
              v()(p()(n), '_handleSkipButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask.skip_link,
                  r = e.subtaskId,
                  i = e.updateFlow
                a && i(r, { link: a.link_id }), a && t(a)
              }),
              (n.state = { selectedUsers: new Set() }),
              n
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    a = t.onNavigate,
                    n = t.passthroughOcfScreenProps,
                    i = t.subtask,
                    o = t.subtaskInputs,
                    s = this.state.selectedUsers,
                    l = ''
                  if (i.next_link_threshold_text && i.next_link_threshold_text.length > 0) {
                    var c = i.next_link_threshold_text[0]
                    l = c && c.text && c.text.text
                  }
                  var u,
                    d,
                    p,
                    h,
                    m = i.next_link.label,
                    _ = s.size,
                    b = this._getFollowText(l, m, _),
                    f = k.a.createElement(
                      x.a,
                      {
                        disabled: this._isBelowMinFollows(),
                        onPress: this._handleFollowButtonClick,
                        size: 'large',
                        type: 'primaryFilled',
                      },
                      b,
                    ),
                    g =
                      i.skip_link && i.skip_link.label
                        ? k.a.createElement(
                            x.a,
                            { onPress: this._handleSkipButtonClick, size: 'large', type: 'primaryText' },
                            null === (e = i.skip_link) || void 0 === e ? void 0 : e.label,
                          )
                        : null,
                    y = this._isBelowMinFollows() && g ? g : f,
                    C = Array.from(s).join(',')
                  return k.a.createElement(
                    pe.a,
                    r()({}, n, { rightControl: y }),
                    k.a.createElement(
                      N.a,
                      { style: Es.main },
                      i.primary_text
                        ? k.a.createElement(
                            ee,
                            r()({}, i.primary_text, {
                              nativeID: w.b,
                              onNavigate: a,
                              size: 'title4',
                              style: re.headline,
                              subtaskInputs: o,
                              weight: 'bold',
                            }),
                          )
                        : null,
                      i.secondary_text
                        ? k.a.createElement(
                            ee,
                            r()({}, i.secondary_text, {
                              onNavigate: a,
                              size: 'body',
                              style: re.subHeader,
                              subtaskInputs: o,
                              weight: 'bold',
                            }),
                          )
                        : null,
                      k.a.createElement(
                        bs.Provider,
                        { value: s },
                        k.a.createElement(Jn.a, {
                          entryConfiguration:
                            ((u = { onFollow: this._onFollow, onUnfollow: this._onUnfollow, currentFollows: s }),
                            (d = u.currentFollows),
                            (p = u.onFollow),
                            (h = u.onUnfollow),
                            Object(ms.a)(
                              {},
                              Gn.b,
                              v()(
                                {},
                                os.b.User,
                                Object(_s.a)({
                                  decoration: fs(p, h),
                                  withLink: !1,
                                  shouldScribeProfileClick: !1,
                                  onClick: gs(p, h, d),
                                }),
                              ),
                            )),
                          fetchOptions: { follows: C },
                          module: this._getModule(),
                          renderUnavailable: ys,
                          title: '',
                        }),
                      ),
                    ),
                    this.props.errorDialog,
                  )
                },
              },
              {
                key: '_handleScribe',
                value: function (e) {
                  this.props.analytics.scribe({ element: 'user', action: e })
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        Cs = Object(Tt.a)(ws, { page: 'onboarding', section: 'user_recommendations' }),
        Es = D.a.create(function (e) {
          return { main: { marginHorizontal: e.spaces.space20 } }
        }),
        Is = (a('DfhM'), a('tI3i')),
        xs = a.n(Is),
        Ss = a('TEoO'),
        Ts = a('tn7R'),
        Fs = D.a.create(function (e) {
          return { followButton: { alignSelf: 'flex-start', marginLeft: e.spaces.space12 } }
        }),
        Os = function (e) {
          var t = e.isCheckboxFollowButton,
            a = e.onSearchUserUnfollowed,
            n = e.user,
            r = n.id_str,
            i = n.screen_name,
            o = function () {
              return a(r)
            }
          return t
            ? k.a.createElement($e.a, { checked: !0, onChange: o })
            : k.a.createElement(Po.a, {
                isFollowing: !0,
                name: i,
                onFollow: xe.a,
                onUnfollow: o,
                showRelationshipChangeConfirmation: !1,
                size: 'small',
                style: Fs.followButton,
                type: 'user',
              })
        },
        As = D.a.create(function (e) {
          return {
            group: {
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: e.borderWidths.small,
            },
            groupHeader: {
              alignItems: 'center',
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: e.spaces.space20,
              paddingVertical: e.spaces.space12,
            },
          }
        }),
        Ns = function (e) {
          var t = e.children,
            a = e.header
          return k.a.createElement(N.a, { style: As.group }, k.a.createElement(N.a, { style: As.groupHeader }, a), t)
        },
        Ps = a('tocL'),
        Ds = a('Re5t'),
        Bs = D.a.create(function (e) {
          return {
            userCellListItem: { paddingHorizontal: e.spaces.space20 },
            userCellListItemWrapper: { display: 'flex', flexDirection: 'column', justifyContent: 'center' },
          }
        }),
        Rs = function (e) {
          var t = e.decorator,
            a = e.description,
            n = e.id,
            r = (e.isFollowing, e.isVerified),
            i = e.name,
            o = e.onCellClick,
            s = e.profileImageUrl,
            l = e.screenName,
            c = e.socialText,
            u = k.a.useMemo(
              function () {
                if (c) return { contextType: Ps.a.Follow, text: c }
              },
              [c],
            )
          return k.a.createElement(
            N.a,
            { accessibilityRole: 'label', style: Bs.userCellListItemWrapper },
            k.a.createElement(ce.a, {
              avatarUri: s,
              decoration: t,
              description: a,
              displayMode: Ds.a.UserDetailed,
              entities: {},
              isVerified: r,
              name: i,
              onCellClick: o,
              promotedItemType: 'users',
              screenName: l,
              socialContext: u,
              style: Bs.userCellListItem,
              userId: n,
              withLink: !1,
            }),
          )
        },
        Ls = function (e) {
          var t = e.isCheckboxFollowButton,
            a = e.onSearchUserRemove,
            n = e.selectedSearchHeader,
            r = e.selectedSearchUsers,
            i = Object(Ts.a)(r)
          if (!n || !i.length) return null
          var o = function (e) {
            return a(e)
          }
          return k.a.createElement(
            Ns,
            { header: k.a.createElement(P.b, { size: 'headline1', weight: 'bold' }, n) },
            i.map(function (e) {
              return k.a.createElement(Rs, {
                decorator: k.a.createElement(Os, { isCheckboxFollowButton: t, onSearchUserUnfollowed: o, user: e }),
                id: e.id_str,
                isFollowing: !0,
                isVerified: e.verified,
                key: e.id_str,
                name: e.name,
                onCellClick: function () {
                  return o(e.id_str)
                },
                profileImageUrl: e.profile_image_url_https,
                screenName: e.screen_name,
              })
            }),
          )
        },
        Vs = D.a.create(function (e) {
          return { followButton: { alignSelf: 'flex-start', marginLeft: e.spaces.space12 } }
        }),
        Ms = function (e) {
          var t = e.isCheckboxFollowButton,
            a = e.isFollowed,
            n = e.screenName,
            r = e.updateFollowedItems,
            i = e.userId,
            o = function (e) {
              return function () {
                return r(i, e)
              }
            }
          return t
            ? k.a.createElement($e.a, {
                checked: a,
                onChange: function () {
                  return r(i, !a)
                },
              })
            : k.a.createElement(Po.a, {
                isFollowing: a,
                name: n,
                onFollow: o(!0),
                onUnfollow: o(!1),
                showRelationshipChangeConfirmation: !1,
                size: 'small',
                style: Vs.followButton,
                type: 'user',
              })
        },
        js = function (e) {
          return e.items
            .map(function (e) {
              return e.user_id_str
            })
            .join('-')
        },
        Us = Mt.a,
        zs = function (e) {
          var t = e.userGroups,
            a = e.selectedSearchUsers,
            n = e.onNearEnd,
            r = void 0 === n ? xe.a : n,
            i = e.followButtonType,
            o = e.followedUserIds,
            s = e.onFollow,
            l = e.onUnfollow,
            c = e.onSearchUserRemove,
            u = e.selectedSearchHeader,
            d = k.a.useContext(Ge.a).loggedInUserId
          xs()(!!d, 'loggedInUserId must be defined')
          var p = i === y.h.Checkbox,
            h = k.a.useCallback(
              function (e, t) {
                return t ? s(e) : l(e)
              },
              [s, l],
            ),
            m = k.a.useCallback(
              function (e, t) {
                h([e], t)
              },
              [h],
            ),
            _ = k.a.useCallback(
              function (e, t) {
                return function () {
                  var a = e.items.map(function (e) {
                    return e.user_id_str
                  })
                  h(a, !t)
                }
              },
              [h],
            ),
            b = k.a.useCallback(
              function (e) {
                var t = e.items.every(function (e) {
                    return o.has(e.user_id_str)
                  }),
                  a = k.a.createElement(
                    k.a.Fragment,
                    null,
                    k.a.createElement(P.b, { size: 'headline1', weight: 'bold' }, e.header),
                    p && k.a.createElement($e.a, { checked: t, onChange: _(e, t) }),
                  )
                return k.a.createElement(
                  Ns,
                  { header: a },
                  e.items.map(function (e) {
                    var t = e.social_text,
                      a = e.user,
                      n = o.has(a.id_str)
                    return k.a.createElement(Rs, {
                      decorator: k.a.createElement(Ms, {
                        isCheckboxFollowButton: p,
                        isFollowed: n,
                        screenName: a.screen_name,
                        updateFollowedItems: m,
                        userId: a.id_str,
                      }),
                      description: a.description,
                      id: a.id_str,
                      isFollowing: n,
                      isVerified: a.verified,
                      key: a.id_str,
                      name: a.name,
                      onCellClick: function () {
                        return m(a.id_str, !n)
                      },
                      profileImageUrl: a.profile_image_url_https,
                      screenName: a.screen_name,
                      socialText: t,
                    })
                  }),
                )
              },
              [o, p, _, m],
            )
          return k.a.createElement(
            N.a,
            null,
            k.a.createElement(Ls, {
              isCheckboxFollowButton: p,
              onSearchUserRemove: c,
              selectedSearchHeader: u,
              selectedSearchUsers: a,
            }),
            k.a.createElement(Ss.a, {
              cacheKey: 'userSelectList/'.concat(d),
              identityFunction: js,
              items: t,
              nearEndProximityRatio: 1.15,
              noItemsRenderer: Us,
              onNearEnd: r,
              renderer: b,
            }),
          )
        },
        Hs = [gr.a.Users],
        Ws = 'selected_user_recommendations',
        Gs = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              v()(p()(n), '_getPreCheckedUsers', function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                return Object(Ye.a)(
                  e.reduce(function (e, t) {
                    var a = t.items.reduce(function (e, t) {
                      return t.checked_by_default && e.push(t.user_id_str), e
                    }, [])
                    return [].concat(dr()(e), dr()(a))
                  }, []),
                )
              }),
              v()(p()(n), '_getFollowText', function (e, t, a) {
                return !e || a < 1 ? t : e.concat(tr.a.getFormattedCount(a))
              }),
              v()(p()(n), '_handleSelectionChanged', function (e) {
                n.setState({ selectedUsers: Object(Ye.a)(e) })
              }),
              v()(p()(n), '_handleOnUnfollowsSelected', function (e) {
                var t,
                  a = Object(Ye.a)(dr()(n.state.selectedUsers)),
                  r = n.state.selectedSearchUsers,
                  i = Ti()(e)
                try {
                  for (i.s(); !(t = i.n()).done; ) {
                    var o = t.value
                    a.has(o) && a.delete(o), delete r[o]
                  }
                } catch (s) {
                  i.e(s)
                } finally {
                  i.f()
                }
                n.setState({ selectedUsers: a, selectedSearchUsers: r })
              }),
              v()(p()(n), '_handleOnFollowsSelected', function (e) {
                var t,
                  a = Object(Ye.a)(dr()(n.state.selectedUsers)),
                  r = Ti()(e)
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    var i = t.value
                    a.add(i)
                  }
                } catch (o) {
                  r.e(o)
                } finally {
                  r.f()
                }
                n.setState({ selectedUsers: a })
              }),
              v()(p()(n), '_handleFollowButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, {
                  link: a.next_link.link_id,
                  selected_user_recommendations: dr()(n.state.selectedUsers),
                  searched_users: Object.keys(n.state.selectedSearchUsers),
                }),
                  t(a.next_link)
              }),
              v()(p()(n), '_handleSkipButtonClick', function () {
                var e = n.props,
                  t = e.onNavigate,
                  a = e.subtask.skip_link,
                  r = e.subtaskId,
                  i = e.updateFlow
                a && i(r, { link: a.link_id }), a && t(a)
              }),
              v()(p()(n), '_handleSearchUserRemoved', function (e) {
                return n._handleOnUnfollowsSelected([e])
              }),
              v()(p()(n), '_handleSearchSuggestionSelected', function (e, t) {
                if (e.type === gr.b.User) {
                  var a = e.data,
                    r = n.state,
                    i = r.selectedSearchUsers,
                    o = r.selectedUsers
                  n._recommendedUsers.has(a.id_str) && o.add(a.id_str),
                    (i[a.id_str] = a),
                    n.setState({ selectedSearchUsers: i, selectedUsers: o })
                }
              })
            var r = e.subtaskId,
              i = e.subtaskInputs,
              o = Object(Ye.a)([]),
              s = Object(Q.e)(i, { key: Ws, subtask_id: r }, o)
            return (
              (n._recommendedUsers = Object(Ye.a)(
                e.subtask.groups
                  .map(function (e) {
                    return e.items.map(function (e) {
                      return e.user_id ? e.user_id.toString() : ''
                    })
                  })
                  .reduce(function (e, t) {
                    return e.concat(t)
                  }),
              )),
              (n.state = {
                selectedSearchUsers: {},
                selectedUsers: s && s.size ? s : n._getPreCheckedUsers(e.subtask.groups),
              }),
              n
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    a = t.onNavigate,
                    n = t.passthroughOcfScreenProps,
                    i = t.subtask,
                    o = t.subtaskInputs,
                    s = this.state,
                    l = s.selectedSearchUsers,
                    c = s.selectedUsers,
                    u = (((i.next_link_threshold_text || {})[0] || {}).text || {}).text,
                    d = i.next_link.label,
                    p = (l ? Object.keys(l).length : 0) + c.size,
                    h = this._getFollowText(u, d, p),
                    m = k.a.createElement(
                      x.a,
                      { onPress: this._handleFollowButtonClick, size: 'large', type: 'primaryFilled' },
                      h,
                    ),
                    _ =
                      i.skip_link && i.skip_link.label
                        ? k.a.createElement(
                            x.a,
                            { onPress: this._handleSkipButtonClick, size: 'large', type: 'primaryText' },
                            null === (e = i.skip_link) || void 0 === e ? void 0 : e.label,
                          )
                        : null,
                    b = null === i.min_follow_count || void 0 === i.min_follow_count ? 1 : i.min_follow_count,
                    f = c.size >= b ? m : _,
                    v = i.show_user_search
                      ? k.a.createElement(
                          N.a,
                          { style: [re.contentArea, qs.searchContainer] },
                          k.a.createElement(fr.c, {
                            filter: Hs,
                            onItemClick: this._handleSearchSuggestionSelected,
                            placeholder: i.hint,
                            rounded: !0,
                            shouldAutoFocus: !0,
                            shouldClearOnSelect: !0,
                            source: gr.d.WelcomeFlow,
                          }),
                        )
                      : null
                  return k.a.createElement(
                    pe.a,
                    r()({}, n, { rightControl: f }),
                    k.a.createElement(
                      N.a,
                      null,
                      k.a.createElement(
                        N.a,
                        { style: qs.main },
                        i.primary_text
                          ? k.a.createElement(
                              ee,
                              r()({}, i.primary_text, {
                                nativeID: w.b,
                                onNavigate: a,
                                size: 'title4',
                                style: re.headline,
                                subtaskInputs: o,
                                weight: 'bold',
                              }),
                            )
                          : null,
                        i.secondary_text
                          ? k.a.createElement(
                              ee,
                              r()({}, i.secondary_text, {
                                onNavigate: a,
                                size: 'body',
                                style: re.subHeader,
                                subtaskInputs: o,
                                weight: 'bold',
                              }),
                            )
                          : null,
                      ),
                      v,
                      k.a.createElement(
                        N.a,
                        null,
                        k.a.createElement(zs, {
                          followButtonType: i.follow_button_type,
                          followedUserIds: c,
                          onFollow: this._handleOnFollowsSelected,
                          onSearchUserRemove: this._handleSearchUserRemoved,
                          onUnfollow: this._handleOnUnfollowsSelected,
                          selectedSearchHeader:
                            (i.custom_recommendations_header && i.custom_recommendations_header.text) || void 0,
                          selectedSearchUsers: l,
                          userGroups: i.groups,
                        }),
                      ),
                    ),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        qs = D.a.create(function (e) {
          return {
            secondaryText: { marginBottom: e.spaces.space16 },
            main: { marginHorizontal: e.spaces.space20 },
            searchContainer: { marginBottom: e.spaces.space16, zIndex: 1 },
          }
        }),
        Ks = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(p()(e), '_isInteractive', 'interactive' === e.props.subtask.style),
              v()(p()(e), '_navigateAndUpdate', function (t) {
                var a = e.props,
                  n = a.onNavigate,
                  r = a.subtask,
                  i = a.subtaskId
                ;(0, a.updateFlow)(i, { link: t.link_id, wait_time_ms: r.wait_time_ms }), n(t, !0)
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._interactiveInterval && clearInterval(this._interactiveInterval),
                    this._interactiveTimeout && clearTimeout(this._interactiveTimeout),
                    this._spinnerTimer && clearTimeout(this._spinnerTimer)
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.pollInteractivePath,
                    n = t.subtask
                  if (this._isInteractive) {
                    var r = n.extension_endpoint
                    n.extension_polling_interval_ms &&
                      r &&
                      (this._interactiveInterval = setInterval(function () {
                        a(r).then(function (t) {
                          t && e._navigateAndUpdate(n.next_link)
                        })
                      }, n.extension_polling_interval_ms))
                    var i = n.extension_timeout_link
                    i &&
                      (this._interactiveTimeout = setTimeout(function () {
                        e._navigateAndUpdate(i)
                      }, n.max_extension_time_ms || n.wait_time_ms))
                  } else
                    this._spinnerTimer = setTimeout(function () {
                      e._navigateAndUpdate(n.next_link)
                    }, n.wait_time_ms)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onNavigate,
                    a = e.passthroughOcfScreenProps,
                    n = e.subtask,
                    i = e.subtaskInputs
                  return k.a.createElement(
                    pe.a,
                    a,
                    k.a.createElement(
                      N.a,
                      { style: Ys.indicator },
                      this._isInteractive && n.header
                        ? k.a.createElement(
                            N.a,
                            { style: re.contentArea },
                            k.a.createElement(de, { header: n.header, onNavigate: t, subtaskInputs: i }),
                            n.detail_text
                              ? k.a.createElement(ee, r()({}, n.detail_text, { onNavigate: t, subtaskInputs: i }))
                              : null,
                          )
                        : k.a.createElement(Ir.a, null),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(k.a.Component),
        Ys = D.a.create(function (e) {
          return { indicator: { display: 'flex', flex: 1, justifyContent: 'center' } }
        }),
        Xs = a('7N4s'),
        Js = { page: 'onboarding' },
        Zs = Rt.a.c20aaf3d,
        Qs = Rt.a.a219e217,
        $s = (function (e) {
          m()(a, e)
          var t = b()(a)
          function a(e, n) {
            var i
            return (
              l()(this, a),
              (i = t.call(this, e, n)),
              v()(p()(i), '_handleBackAttempt', function (e, t) {
                var a = i.props.currentSubtask,
                  n = !a || !a.subtask_back_navigation || a.subtask_back_navigation !== y.x.Disallow,
                  r = !((null == a ? void 0 : a.subtask_back_navigation) !== y.x.CancelFlow),
                  o = !i.currentPreviousNavigableSubtaskId && (i._onFirstTaskSinceStart || r) && n
                return (
                  !('POP' === t && !o) ||
                  (i.currentPreviousNavigableSubtaskId && n && i._navigateToPreviousSubtask(), !1)
                )
              }),
              v()(p()(i), '_sendGaOnboardingEvent', function (e) {
                ;(0, i.props.googleAnalyticsSendEvent)('signup', e, 'new-user')
              }),
              v()(p()(i), '_startFlow', function (e) {
                var t = e.countryCode,
                  a = e.createLocalApiErrorHandler,
                  n = e.debugOverrides,
                  r = e.flowName,
                  s = e.inputFlowData,
                  l = e.location,
                  c = e.startFlow,
                  u = e.startLocation,
                  d = e.targetUserId,
                  p = e.testCountryCode,
                  h = l.state || {},
                  m = h.fromApp,
                  _ = h.gatedAction,
                  b = Object.keys(u || {}).length
                    ? { start_location: u }
                    : { start_location: { location: m ? 'unknown' : 'manual_link' } },
                  f = { flow_context: o()({ debug_overrides: n, gated_action: _ }, b) },
                  v = o()(
                    o()({}, s),
                    {},
                    { country_code: t || s.country_code, target_user_id: d || s.target_user_id },
                    f,
                  )
                'signup' === r && i._sendGaOnboardingEvent('signup-clicked'),
                  (i._onFirstTaskSinceStart = !0),
                  c({ flow_name: r, input_flow_data: v, subtask_versions: Q.a, test_country_code: p }).catch(
                    a($t(r, null, i._displayFailureMessage)),
                  )
              }),
              v()(p()(i), '_handleFlowRestart', function () {
                i._startFlow(i.props)
              }),
              v()(p()(i), '_handleAbortFlow', function (e) {
                var t = i.props,
                  a = t.clearFlow,
                  n = t.currentSubtask,
                  r = t.history,
                  o = t.location,
                  s = t.loginReturnPath,
                  l = t.onAbort,
                  c = t.returnPath
                a({ clearPersistence: !0 })
                var u = n && Object(Q.h)(n),
                  d = (n || {}).subtask_back_navigation_link
                if (l) l()
                else if (c) r.replace({ pathname: c, query: { flow_status: e } })
                else if (u === y.A.OpenHomeTimeline) r.replace('/home')
                else if (d) i._handleNavigate(d)
                else {
                  var p = !!i.context.loggedInUserId
                  i._unblockHistory && i._unblockHistory(),
                    Object(Ii.a)({}, { location: o })
                      ? r.goBack()
                      : p
                      ? s
                        ? r.replace(s)
                        : r.replace('/home')
                      : r.replace('/')
                }
              }),
              v()(p()(i), '_handleDeepLink', function (e) {
                var t = i.props.history
                e &&
                  (['twitter://', 'https://'].find(function (t) {
                    return e.startsWith(t)
                  })
                    ? Vt.b.navigateTo(e)
                    : t.replace(e))
              }),
              v()(p()(i), '_displayFailureMessage', function (e) {
                i.setState({ alertFailureMessage: e })
              }),
              v()(p()(i), '_submitFlow', function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = e.isTaskNavigation,
                  a = i.props,
                  n = a.createLocalApiErrorHandler,
                  r = a.flowName,
                  o = a.submitFlow
                return o({ isTaskNavigation: t }).then(
                  function (e) {
                    return (i._onFirstTaskSinceStart = !1), e
                  },
                  function (e) {
                    var t = i.props,
                      a = t.failureMessage,
                      o = t.shouldAbort
                    return n($t(r, a, o ? i._displayFailureMessage : void 0))(e)
                  },
                )
              }),
              v()(p()(i), '_handleNavigate', function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  a = i.props,
                  n = a.navigateSubtask,
                  r = a.submitFlow,
                  o = e.is_destructive,
                  s = e.subtask_id,
                  l = e.subtask_navigation_context
                switch (
                  (e.suppress_client_events || i._scribeSubtaskNavigate(e),
                  e.callbacks && i._handleCallbacks(e.callbacks, y.p.Click),
                  e.link_type)
                ) {
                  case y.m.Abort:
                    r().catch(xe.a), i._handleAbortFlow()
                    break
                  case y.m.Subtask:
                    n({ subtaskId: s, navigationContext: l, destructive: o, fromHiddenSubtask: t })
                    break
                  case y.m.Finish:
                  case y.m.Task:
                    i._submitFlow({ isTaskNavigation: !0 })
                    break
                  case y.m.Deeplink:
                    i._submitFlow(), i._handleDeepLink(e.url)
                    break
                  case y.m.DeeplinkAndAbort:
                    r().catch(xe.a), i._handleDeepLink(e.url)
                    break
                  case y.m.WeblinkAndAbort:
                    r().catch(xe.a), window.open(e.url, '_blank'), i._handleAbortFlow()
                    break
                  case y.m.Web:
                    Vt.b.navigateTo(e.url)
                    break
                  case y.m.ChromelessWeb:
                    window.open(e.url, '_blank')
                    break
                  case y.m.DeeplinkInPlace:
                    break
                  default:
                    Object(St.a)('Unknown Navigation Link Type '.concat(e.link_type)), i._handleAbortFlow()
                }
              }),
              v()(p()(i), '_scribeSubtaskNavigate', function (e) {
                var t = i.props,
                  a = t.currentSubtask,
                  n = t.flowToken,
                  r = t.scribeAction
                if (a && a.subtask_id) {
                  var s = e.link_id
                  r(o()(o()({}, Js), {}, { element: 'link', action: 'click' }), {
                    items: [{ token: n, name: a.subtask_id, description: s }],
                  })
                }
              }),
              v()(p()(i), '_navigateToSubtask', function (e) {
                return function () {
                  i._handleNavigate({ link_id: '', link_type: y.m.Subtask, subtask_id: e })
                }
              }),
              v()(p()(i), '_endFlowSubtaskAction', function (e, t) {
                var a = i.props.submitFlow
                switch (t) {
                  case y.m.Abort:
                    a()
                      .catch(xe.a)
                      .then(function () {
                        return i._handleAbortFlow(e)
                      })
                    break
                  case y.m.Finish:
                    i._submitFlow().then(function () {
                      return i._handleAbortFlow(e)
                    })
                    break
                  default:
                    Object(St.a)('Unknown End Flow Type '.concat(t)), i._handleAbortFlow()
                }
              }),
              v()(p()(i), '_render', function () {
                var e = i.props,
                  t = e.currentSubtask,
                  a = e.previousNavigableSubtaskId,
                  n = e.subtasks
                if (!t) return null
                if (Object(lt.g)(t)) {
                  var r = n.find(function (e) {
                    return e.subtask_id === a
                  })
                  return k.a.createElement(k.a.Fragment, null, i._renderSubtask(t), r && i._renderSubtask(r))
                }
                return i._renderSubtask(t)
              }),
              v()(p()(i), '_renderDefault', function () {
                var e = i.props,
                  t = e.currentSubtask,
                  a = e.flowToken,
                  n = e.history,
                  r = e.subtasks.map(function (e) {
                    return k.a.createElement(
                      P.b,
                      { key: e.subtask_id, onClick: i._navigateToSubtask(e.subtask_id) },
                      e.subtask_id,
                    )
                  })
                return k.a.createElement(
                  pe.a,
                  { history: n },
                  k.a.createElement(
                    N.a,
                    { style: { margin: 5 } },
                    k.a.createElement(P.b, null, a),
                    k.a.createElement(P.b, null, 'Current Subtask: '.concat(t ? t.subtask_id : '')),
                    r,
                  ),
                )
              }),
              v()(p()(i), '_handleAbortFlowOnConfirm', function () {
                i._handleAbortFlow()
              }),
              v()(p()(i), '_onNoopInvisibleSubtask', function () {
                return Promise.resolve()
              }),
              v()(p()(i), '_navigateToPreviousSubtask', function () {
                var e = i.props
                ;(0, e.navigateSubtask)({ subtaskId: e.previousNavigableSubtaskId, destructive: !0 })
              }),
              v()(p()(i), '_renderErrorDialog', function () {
                var e = i.props,
                  t = e.failureMessage,
                  a = e.history
                return k.a.createElement(
                  pe.a,
                  { hideBackButton: !0, history: a },
                  k.a.createElement(Ee.a, {
                    confirmButtonLabel: Qs,
                    headline: Zs,
                    onConfirm: i._handleAbortFlowOnConfirm,
                    text: t || Zt,
                    withCancelButton: !1,
                  }),
                )
              }),
              v()(p()(i), '_renderSubtask', function (e) {
                var t = i.props,
                  a = t.addToast,
                  n = t.callInteractiveSpinnerPath,
                  o = t.fetchTemporaryPassword,
                  s = t.flowName,
                  l = t.flowToken,
                  c = t.history,
                  u = t.location,
                  d = t.previouslySubmittedSubtaskId,
                  p = t.removeContacts,
                  h = t.shouldAbort,
                  m = t.submitFailed,
                  _ = t.subtaskInputs,
                  b = t.updateFlow,
                  f = e.progress_indication,
                  v = e.subtask_back_navigation,
                  g = e.subtask_id,
                  w = h
                    ? k.a.createElement(Ee.a, {
                        confirmButtonLabel: Qs,
                        headline: Zs,
                        onConfirm: i._handleAbortFlowOnConfirm,
                        text: i.state.alertFailureMessage,
                        withCancelButton: !1,
                      })
                    : null,
                  C = {
                    onNavigate: i._handleNavigate,
                    passthroughOcfScreenProps: {
                      backButtonType: v === y.x.CancelFlow ? 'close' : 'back',
                      history: c,
                      onBackClick: i._getBackNavigation(e),
                      progressIndication: f,
                    },
                    subtaskId: g,
                    updateFlow: b,
                  }
                if (e.end_flow)
                  return i._endFlowSubtaskAction(e.end_flow.status, e.end_flow.end_flow_type), i._renderDefault()
                if (e.action_list) return k.a.createElement(Ce, r()({ subtask: e.action_list, subtaskInputs: _ }, C))
                if (e.fetch_temporary_password)
                  return k.a.createElement(We, {
                    navigationLink: e.fetch_temporary_password.next_link,
                    onNavigate: i._handleNavigate,
                    subtaskAction: i._handleInvisibleSubtask(g, e.fetch_temporary_password, o),
                    subtaskId: g,
                  })
                if (e.cta) return k.a.createElement(Le, r()({ errorDialog: w, subtask: e.cta, subtaskInputs: _ }, C))
                if (e.app_download_cta)
                  return k.a.createElement(
                    Te,
                    r()({ errorDialog: w, subtask: e.app_download_cta, subtaskInputs: _ }, C),
                  )
                if (e.alert_dialog) return k.a.createElement(Ie, r()({ subtask: e.alert_dialog, subtaskInputs: _ }, C))
                if (e.alert_dialog_suppress_client_events)
                  return k.a.createElement(
                    Ie,
                    r()({ subtask: e.alert_dialog_suppress_client_events, subtaskInputs: _ }, C),
                  )
                if (e.menu_dialog) return k.a.createElement(Fr, r()({ subtask: e.menu_dialog, subtaskInputs: _ }, C))
                if (e.open_account)
                  return k.a.createElement(We, {
                    navigationLink: e.open_account.next_link,
                    onNavigate: i._handleNavigate,
                    subtaskAction: i._openAccountAction(e.open_account),
                    subtaskId: g,
                  })
                if (e.show_code)
                  return k.a.createElement(Ui, r()({ errorDialog: w, subtask: e.show_code, subtaskInputs: _ }, C))
                if (e.sign_up) return k.a.createElement(co, r()({ subtask: e.sign_up, subtaskInputs: _ }, C))
                if (e.sign_up_review)
                  return k.a.createElement(
                    ko,
                    r()({ errorDialog: w, progressIndication: f, subtask: e.sign_up_review, subtaskInputs: _ }, C),
                  )
                if (e.js_instrumentation) return k.a.createElement(xr, r()({ subtask: e.js_instrumentation }, C))
                if (e.phone_verification)
                  return k.a.createElement(
                    qr,
                    r()(
                      { errorDialog: w, flowName: s, submitFailed: m, subtask: e.phone_verification, subtaskInputs: _ },
                      C,
                    ),
                  )
                if (e.recaptcha)
                  return k.a.createElement(Sn, r()({ errorDialog: w, subtask: e.recaptcha, subtaskInputs: _ }, C))
                if (e.privacy_options)
                  return k.a.createElement(Xr, r()({ subtask: e.privacy_options, subtaskInputs: _ }, C))
                if (e.generic_urt)
                  return k.a.createElement(cr, r()({ errorDialog: w, subtask: e.generic_urt, subtaskInputs: _ }, C))
                if (e.interest_picker)
                  return k.a.createElement(Cr, r()({ errorDialog: w, subtask: e.interest_picker, subtaskInputs: _ }, C))
                if (e.topics_selector)
                  return k.a.createElement(Qo, r()({ errorDialog: w, subtask: e.topics_selector, subtaskInputs: _ }, C))
                if (e.notifications_permission_prompt)
                  return k.a.createElement(Rr, r()({ subtask: e.notifications_permission_prompt, subtaskInputs: _ }, C))
                if (e.open_home_timeline)
                  return (
                    'signup' === s && i._sendGaOnboardingEvent('complete-NUX'),
                    k.a.createElement(We, {
                      navigationLink: e.open_home_timeline.next_link,
                      onNavigate: i._handleNavigate,
                      subtaskAction: i._onNoopInvisibleSubtask,
                      subtaskId: g,
                    })
                  )
                if (e.open_link)
                  return d === g
                    ? null
                    : k.a.createElement(Vr, {
                        flowName: s,
                        onNavigate: i._handleNavigate,
                        subtask: e.open_link,
                        subtaskId: g,
                      })
                if (e.upload_media)
                  return k.a.createElement(hs, {
                    flowToken: l,
                    onNavigate: i._handleNavigate,
                    subtask: e.upload_media,
                    subtaskId: g,
                  })
                if (e.user_recommendations_list)
                  return k.a.createElement(
                    Gs,
                    r()({ errorDialog: w, subtask: e.user_recommendations_list, subtaskInputs: _ }, C),
                  )
                if (e.user_recommendations_urt)
                  return k.a.createElement(
                    Cs,
                    r()({ errorDialog: w, flowToken: l, subtask: e.user_recommendations_urt, subtaskInputs: _ }, C),
                  )
                if (e.update_users)
                  return k.a.createElement(We, {
                    navigationLink: e.update_users.next_link,
                    onNavigate: i._handleNavigate,
                    subtaskAction: i._handleInvisibleSubtask(g, e.update_users, i._updateUsersAction),
                    subtaskId: g,
                  })
                if (e.enter_password)
                  return k.a.createElement(bn, r()({ errorDialog: w, subtask: e.enter_password, subtaskInputs: _ }, C))
                if (e.settings_list) {
                  var E = e.settings_list
                  return k.a.createElement(Xs.b.Consumer, null, function (e) {
                    var t = e.isModal
                    return k.a.createElement(
                      Vi,
                      r()(
                        { addToast: a, errorDialog: w, isModal: t, removeContacts: p, subtask: E, subtaskInputs: _ },
                        C,
                      ),
                    )
                  })
                }
                return e.email_contacts_sync
                  ? k.a.createElement(
                      Ht,
                      r()({ errorDialog: w, location: u, subtask: e.email_contacts_sync, subtaskInputs: _ }, C),
                    )
                  : e.select_avatar
                  ? k.a.createElement(mi, r()({ errorDialog: w, subtask: e.select_avatar, subtaskInputs: _ }, C))
                  : e.select_banner
                  ? k.a.createElement(Ei, r()({ errorDialog: w, subtask: e.select_banner, subtaskInputs: _ }, C))
                  : e.security_key
                  ? k.a.createElement(ei, r()({ errorDialog: w, subtask: e.security_key, subtaskInputs: _ }, C))
                  : e.enter_date
                  ? k.a.createElement(sa, r()({ errorDialog: w, subtask: e.enter_date, subtaskInputs: _ }, C))
                  : e.enter_text
                  ? k.a.createElement(Nn, r()({ errorDialog: w, subtask: e.enter_text, subtaskInputs: _ }, C))
                  : e.email_verification
                  ? k.a.createElement(
                      na,
                      r()(
                        {
                          errorDialog: w,
                          flowName: s,
                          submitFailed: m,
                          subtask: e.email_verification,
                          subtaskInputs: _,
                        },
                        C,
                      ),
                    )
                  : e.enter_username
                  ? k.a.createElement(Un, r()({ errorDialog: w, subtask: e.enter_username, subtaskInputs: _ }, C))
                  : e.enter_email
                  ? k.a.createElement(nn, r()({ errorDialog: w, subtask: e.enter_email, subtaskInputs: _ }, C))
                  : e.enter_phone
                  ? k.a.createElement(En, r()({ errorDialog: w, subtask: e.enter_phone, subtaskInputs: _ }, C))
                  : e.choice_selection
                  ? k.a.createElement(at, r()({ key: g, subtask: e.choice_selection, subtaskInputs: _ }, C))
                  : e.contacts_live_sync_permission_prompt
                  ? k.a.createElement(Ot, r()({ subtask: e.contacts_live_sync_permission_prompt, subtaskInputs: _ }, C))
                  : e.wait_spinner
                  ? k.a.createElement(Ks, r()({ pollInteractivePath: n, subtask: e.wait_spinner, subtaskInputs: _ }, C))
                  : e.check_logged_in_account
                  ? k.a.createElement(
                      Ke,
                      r()({ onNavigate: i._handleNavigate, subtask: e.check_logged_in_account, subtaskId: g }, C),
                    )
                  : e.tweet_selection_urt
                  ? k.a.createElement(us, r()({ errorDialog: w, subtask: e.tweet_selection_urt, subtaskInputs: _ }, C))
                  : i._renderDefault()
              }),
              v()(p()(i), '_getBackNavigation', function (e) {
                var t = e.subtask_back_navigation,
                  a = void 0 === t ? y.x.Allow : t
                return a === y.x.CancelFlow
                  ? function () {
                      return i._handleAbortFlow()
                    }
                  : i.currentPreviousNavigableSubtaskId && a === y.x.Allow
                  ? i._navigateToPreviousSubtask
                  : void 0
              }),
              v()(p()(i), '_scribeSubtaskView', function () {
                var e = i.props,
                  t = e.currentSubtask,
                  a = e.flowToken,
                  n = e.scribeAction
                t &&
                  t.subtask_id &&
                  !Object(Q.l)(t) &&
                  n(o()(o()({}, Js), {}, { element: 'view', action: 'impression' }), {
                    items: [{ token: a, name: t.subtask_id }],
                  })
              }),
              v()(p()(i), '_handleCallbacks', function (e, t) {
                var a = i.props,
                  n = a.callOnboardingPath,
                  r = a.scribeAction
                e.forEach(function (e) {
                  e.trigger === t &&
                    (e.scribe_config && r(e.scribe_config), e.endpoint && n(e.endpoint, { timestampMs: Date.now() }))
                })
              }),
              v()(p()(i), '_openAccountAction', function (e) {
                return function () {
                  var t = i.context.loggedInUserId,
                    a = i.props,
                    n = a.returnPath,
                    r = a.scribeAction,
                    o = a.verifyCredentials,
                    s = e.attribution_event,
                    l = e.user.id_str,
                    c = Object(Mr.b)(i.context.featureSwitches) || {},
                    u = c.encryptedReferer,
                    d = c.encryptedReferralDetails
                  return (
                    xi.a.flushHTMLCache(),
                    t && l !== t
                      ? (Vt.b.navigateTo(n || '/home'), new Promise(function () {}))
                      : o().then(function () {
                          i._maybeScribeAppInstallBanner(),
                            'signup' === s &&
                              (i._sendGaOnboardingEvent('account-create'),
                              r({ page: 'signup', action: 'success' }, { referer: u, external_referer: d }))
                        })
                  )
                }
              }),
              v()(p()(i), '_updateUsersAction', function (e, t) {
                var a = i.props,
                  n = a.createLocalApiErrorHandler,
                  r = a.fetchUsers,
                  o = null == t ? void 0 : t.users
                o &&
                  o.length &&
                  r(
                    o.map(function (e) {
                      return e.id_str
                    }),
                  ).catch(n({ showToast: !0 }))
              }),
              v()(p()(i), '_maybeScribeAppInstallBanner', function () {
                var e = i.props.scribeAction
                Fe.a.hasPromptWaiting() && e({ page: 'signup', component: 'install_banner', action: 'waiting' })
              }),
              (i.state = { alertFailureMessage: '' }),
              i
            )
          }
          return (
            u()(a, [
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  this.props.flowName !== e.flowName && this._startFlow(e)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = e.currentSubtask,
                    a = this.props.currentSubtask,
                    n = t && t.subtask_id
                  a &&
                    a.subtask_id !== n &&
                    (this._scribeSubtaskView(), a.callbacks && this._handleCallbacks(a.callbacks, y.p.Impression))
                },
              },
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  this._startFlow(this.props)
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.googleAnalyticsPageView,
                    a = e.history
                  ;(0, e.scribePageImpression)(Js), t(Js), (this._unblockHistory = a.block(this._handleBackAttempt))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unblockHistory && this._unblockHistory(), this.props.clearFlow()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.currentSubtask
                  e.shouldEndFlow && this._handleAbortFlow()
                  var a = this.props.fetchStatus
                  return (
                    a === Ue.a.FAILED || t || (a = Ue.a.LOADING),
                    k.a.createElement(
                      N.a,
                      { style: el.root },
                      k.a.createElement(He.a, {
                        fetchStatus: a,
                        onRequestRetry: this._handleFlowRestart,
                        render: this._render,
                        renderFailure: this._renderErrorDialog,
                        retryable: !this.props.shouldAbort,
                      }),
                    )
                  )
                },
              },
              {
                key: '_handleInvisibleSubtask',
                value: function (e, t, a) {
                  return function () {
                    return new Promise(function (n, r) {
                      n(a(e, t))
                    })
                  }
                },
              },
              {
                key: 'currentPreviousNavigableSubtaskId',
                get: function () {
                  return this.props.previousNavigableSubtaskId
                },
              },
            ]),
            a
          )
        })(k.a.Component)
      v()($s, 'contextType', Ge.a), v()($s, 'defaultProps', { inputFlowData: {} })
      var el = D.a.create(function (e) {
        return { root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 } }
      })
      t.a = Object(Zn.c)(Js)(Et($s))
    },
    gwY8: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      })
      var n = a('ERkP'),
        r = a.n(n).a.createContext({ onFollow: void 0, onInitialize: void 0, onUnfollow: void 0 })
    },
    hznd: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('BedV'),
        l = a('yiKp'),
        c = a.n(l),
        u = (a('ho0z'), a('t62R')),
        d = a('IMYl'),
        p = a('py1r'),
        h = a('I4+6'),
        m = a('cm6r'),
        _ = a('rHpw'),
        b = a('MWbm'),
        f = _.a.create(function (e) {
          return {
            root: { padding: e.spaces.space4, borderRadius: e.borderRadii.large, overflow: 'hidden' },
            base: {
              backgroundColor: e.colors.cellBackground,
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexGrow: 1,
            },
            border: {
              borderColor: e.colors.borderColor,
              borderRadius: e.borderRadii.large,
              borderWidth: e.borderWidths.medium,
            },
            containerClicked: { backgroundColor: e.colors.primary },
            interactive: { cursor: 'pointer' },
            radioBackground: {
              borderRadius: e.borderRadii.infinite,
              margin: '-'.concat(e.spaces.space8),
              padding: e.spaces.space8,
            },
            textContainer: { margin: e.spaces.space12, flexShrink: 1 },
            radioContainer: { userSelect: 'none', marginRight: e.spaces.space12, marginTop: e.spaces.space12 },
            helpText: { marginTop: e.spaces.space8 },
            tileStyle: { height: 'inherit' },
            mainContainer: { padding: e.spaces.space4 },
            circleDisabled: { borderColor: e.colors.gray200 },
            circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 },
            circle: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              borderColor: e.colors.gray700,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.medium,
              borderRadius: e.spaces.space32,
              height: e.spaces.space20,
              justifyContent: 'center',
              width: e.spaces.space20,
            },
            circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary },
            checkMark: { width: '18px', height: '18px', color: e.colors.whiteOnColor },
          }
        }),
        v = c()(
          c()({}, _.a.absoluteFillObject),
          {},
          { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
        ),
        g = function (e) {
          var t = e.accessibilityLabel,
            a = e.accessibilityPosInSet,
            n = e.accessibilitySetSize,
            r = e.checked,
            i = e.disabled,
            s = e.helpText,
            l = e.label,
            c = e.name,
            g = e.onChange,
            k = h.a.generate({
              backgroundColor: _.a.theme.colors.transparent,
              color: r ? _.a.theme.colors.primary : _.a.theme.colors.gray700,
              withFocusWithinFocusRing: !0,
            })
          return o.a.createElement(p.a, { disabled: i }, function (e) {
            return o.a.createElement(
              b.a,
              { style: f.root },
              o.a.createElement(
                b.a,
                { accessibilityRole: 'label', style: [f.base, f.border, !i && f.interactive] },
                o.a.createElement(
                  b.a,
                  { style: f.textContainer },
                  o.a.createElement(u.b, { weight: 'bold' }, l),
                  s && o.a.createElement(u.b, { color: 'gray700', size: 'subtext2', style: f.helpText }, s),
                ),
                o.a.createElement(
                  b.a,
                  { style: f.radioContainer },
                  o.a.createElement(
                    m.a,
                    { disabled: i, interactiveStyles: k, interactivityState: e, style: f.radioBackground },
                    o.a.createElement(
                      b.a,
                      {
                        style: [
                          f.circle,
                          r && f.circleActive,
                          i && f.circleDisabled,
                          r && i && f.circleCheckedAndDisabled,
                        ],
                      },
                      r ? o.a.createElement(d.a, { style: f.checkMark }) : null,
                    ),
                  ),
                  o.a.createElement('input', {
                    'aria-label': t,
                    'aria-posinset': a,
                    'aria-setsize': n,
                    checked: r,
                    disabled: i,
                    name: c,
                    onChange: r ? void 0 : g,
                    style: v,
                    type: 'radio',
                  }),
                ),
              ),
            )
          })
        }
      t.a = function (e) {
        return o.a.createElement(
          s.a,
          r()({}, e, {
            renderSelector: function (e) {
              return o.a.createElement(g, r()({}, e, { key: e.value }))
            },
          }),
        )
      }
    },
    iKTg: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('Lsrn'),
        l = a('k/Ka'),
        c = function () {
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
                d: 'M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    kXdP: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n),
        i = a('t62R'),
        o = a('OiMc'),
        s = a('rHpw').a.create(function (e) {
          return {
            hoverText: {
              marginHorizontal: e.componentDimensions.gutterHorizontal,
              marginVertical: e.componentDimensions.gutterVertical,
            },
            popover: { maxWidth: 'calc('.concat(e.spaces.space64, ' * 4)'), minWidth: e.spaces.space64 },
          }
        })
      t.a = function (e) {
        var t = e.children,
          a = e.hoverText
        return r.a.createElement(
          o.a,
          {
            contentStyle: s.popover,
            enableHover: !0,
            renderContent: function () {
              return r.a.createElement(i.b, { style: s.hoverText }, a)
            },
            withArrow: !0,
          },
          t,
        )
      }
    },
    mCZD: function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        s = a('1Pcy'),
        l = a.n(s),
        c = a('5Yy7'),
        u = a.n(c),
        d = a('2VqO'),
        p = a.n(d),
        h = a('KEM+'),
        m = a.n(h),
        _ = (a('2G9S'), a('ERkP')),
        b = a.n(_),
        f = a('VAZu'),
        v = a('3XMw'),
        g = a.n(v),
        k = a('lUZE'),
        y = a('aITJ'),
        w = a('MWbm'),
        C = a('yw4N'),
        E = a('RhWx'),
        I = a.n(E),
        x = a('ddV6'),
        S = a.n(x),
        T = (a('ssJ/'), a('rHpw')),
        F = 'controlView',
        O = function (e) {
          var t = e.children,
            a = e.control,
            n = b.a.useRef(null),
            r = b.a.useState(null),
            i = S()(r, 2),
            o = i[0],
            s = i[1]
          A(function () {
            var e,
              t = window.visualViewport
            ;((null === (e = document.documentElement) || void 0 === e ? void 0 : e.clientHeight) ||
              window.innerHeight) -
              t.height >
            100
              ? null != n.current && t.height - t.offsetTop < n.current
                ? s(null)
                : s(t.height + t.offsetTop - (n.current || 75))
              : s(null)
          })
          var l = [N.bottomControl, N.fixed].concat(I()(y.b.isIOS() && o ? [N.visualViewport, { top: o }] : []))
          return b.a.createElement(
            b.a.Fragment,
            null,
            b.a.createElement(w.a, { style: N.flexViewport }, t),
            b.a.createElement(
              w.a,
              {
                ref: function (e) {
                  e && !n.current && (n.current = e.getBoundingClientRect().height)
                },
                style: l,
                testID: F,
              },
              a,
            ),
            b.a.createElement(w.a, { style: [N.bottomControl, N.invisible] }, a),
          )
        },
        A = function (e) {
          var t = window.visualViewport
          b.a.useEffect(function () {
            if (t)
              return (
                t.addEventListener('resize', e),
                t.addEventListener('scroll', e),
                function () {
                  t.removeEventListener('resize', e), t.removeEventListener('scroll', e)
                }
              )
          })
        },
        N = T.a.create(function (e) {
          return {
            fixed: { backgroundColor: e.colors.navigationBackground, position: 'fixed', bottom: 0, left: 0, right: 0 },
            bottomControl: {
              paddingTop: e.spaces.space12,
              paddingBottom: e.spaces.space36,
              paddingHorizontal: e.spaces.space32,
            },
            invisible: { visibility: 'hidden' },
            flexViewport: { flex: '1 1 100px', overflow: 'auto' },
            visualViewport: {
              position: 'absolute',
              left: 0,
              right: 0,
              marginTop: '-'.concat(e.componentDimensions.appBarHeight),
            },
          }
        }),
        P = a('w9LO'),
        D = a('mw9i'),
        B = a('JYMr'),
        R = a('7N4s'),
        L = g.a.d2fb334b,
        V = (function (e) {
          u()(a, e)
          var t = p()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(l()(e), '_handleViewportSet', function (t) {
                var a = e.props.onViewportSet
                a && a(t)
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
                    t = e.children,
                    a = e.hideAppBar,
                    n = e.rightControl,
                    r = e.scrollPrompt,
                    i = this.context.isModal
                  return b.a.createElement(
                    P.a,
                    { style: [M.root, i && M.rootModal] },
                    a ? null : this._renderAppBar(),
                    b.a.createElement(
                      D.a,
                      { style: [M.container, i && M.containerModal] },
                      i
                        ? b.a.createElement(
                            b.a.Fragment,
                            null,
                            b.a.createElement(
                              C.a,
                              {
                                onViewportSet: this._handleViewportSet,
                                style: [M.viewport, y.b.isIE() && M.viewportIE],
                              },
                              t,
                            ),
                            n && b.a.createElement(w.a, { style: M.bottomControl }, n),
                          )
                        : n
                        ? b.a.createElement(O, { control: n }, t)
                        : t,
                      i ? null : r,
                    ),
                    i ? r : null,
                  )
                },
              },
              {
                key: '_renderAppBar',
                value: function () {
                  var e = this.props,
                    t = e.appBarPosition,
                    a = e.appBarWithBackground,
                    n = e.backButtonType,
                    r = e.backLocation,
                    i = e.hideBackButton,
                    o = e.hideLogo,
                    s = e.history,
                    l = e.leftControl,
                    c = e.onBackClick,
                    u = e.progressIndication,
                    d =
                      u || o
                        ? void 0
                        : b.a.createElement(
                            w.a,
                            { style: M.iconContainer },
                            b.a.createElement(k.a, { accessibilityLabel: L, style: M.icon }),
                          ),
                    p = u ? u.text.text : void 0,
                    h = null == u ? void 0 : u.percentage_complete,
                    m = h ? h / 100 : void 0,
                    _ = m ? b.a.createElement(B.a, { progress: m }) : void 0
                  return b.a.createElement(f.a, {
                    backButtonType: n,
                    backLocation: r,
                    centeredLogo: d,
                    hideBackButton: i || !c,
                    history: s,
                    leftControl: l,
                    onBackClick: c,
                    position: t,
                    secondaryBar: _,
                    title: p,
                    withBackground: a,
                    withBottomBorder: !1,
                  })
                },
              },
            ]),
            a
          )
        })(b.a.Component)
      m()(V, 'contextType', R.b)
      var M = T.a.create(function (e) {
        return {
          root: { display: 'flex', flexGrow: 1 },
          rootModal: { backgroundColor: e.colors.cellBackground, flexShrink: 1 },
          container: { flexGrow: 1 },
          containerModal: { flexShrink: 1 },
          iconContainer: {
            alignItems: 'center',
            alignSelf: 'stretch',
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'center',
            minWidth: e.spaces.space32,
          },
          icon: { color: e.colors.brandColor, flexGrow: 1, height: '1.75rem' },
          viewport: { flexGrow: 1, flexShrink: 1, overflow: 'auto' },
          viewportIE: { flexBasis: '0%' },
          bottomControl: {
            paddingTop: e.spaces.space12,
            paddingBottom: e.spaces.space36,
            paddingHorizontal: e.spaces.space32,
          },
        }
      })
      t.a = V
    },
    nS1w: function (e, t, a) {
      'use strict'
      a.d(t, 'c', function () {
        return _
      }),
        a.d(t, 'd', function () {
          return b
        }),
        a.d(t, 'b', function () {
          return v
        }),
        a.d(t, 'e', function () {
          return g
        })
      var n,
        r = a('KEM+'),
        i = a.n(r),
        o = (a('z84I'), a('+KXO'), a('LW0h'), a('7x/C'), a('wFPu'), a('2G9S'), a('3XMw')),
        s = a.n(o),
        l = a('mtvn'),
        c =
          ((n = {}),
          i()(n, 1, { label: s.a.hac89abf, numDays: 31 }),
          i()(n, 2, { label: s.a.ef30b309, numDays: 28, numDaysLeapYear: 29 }),
          i()(n, 3, { label: s.a.b56920fa, numDays: 31 }),
          i()(n, 4, { label: s.a.b1a0f1ec, numDays: 30 }),
          i()(n, 5, { label: s.a.daf779c8, numDays: 31 }),
          i()(n, 6, { label: s.a.c6ad074d, numDays: 30 }),
          i()(n, 7, { label: s.a.f1db106b, numDays: 31 }),
          i()(n, 8, { label: s.a.i4e80b7a, numDays: 31 }),
          i()(n, 9, { label: s.a.efa6cc1d, numDays: 30 }),
          i()(n, 10, { label: s.a.f40a0cbe, numDays: 31 }),
          i()(n, 11, { label: s.a.ac74a31c, numDays: 30 }),
          i()(n, 12, { label: s.a.i6c1e4b2, numDays: 31 }),
          n),
        u = function (e) {
          return { label: ''.concat(e), value: ''.concat(e) }
        },
        d = Object(l.a)(1, 29).map(u),
        p = Object(l.a)(1, 30).map(u),
        h = Object(l.a)(1, 31).map(u),
        m = Object(l.a)(1, 32).map(u),
        _ = function () {
          return Object.keys(c).map(function (e) {
            return { label: c[e].label, value: e }
          })
        },
        b = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = arguments.length > 2 ? arguments[2] : void 0,
            n = arguments.length > 3 ? arguments[3] : void 0,
            r = t || new Date(Date.now()).getFullYear()
          return Object(l.a)(e, r + 1)
            .reverse()
            .filter(function (e) {
              return 2 === n && 29 === a ? f(e) : e
            })
            .map(u)
        },
        f = function (e) {
          return 1 === new Date(e, 1, 29).getMonth()
        },
        v = function (e, t) {
          if (!e) return m
          switch (2 === e && (!t || (t && f(t))) ? c[e].numDaysLeapYear : c[e].numDays) {
            case 28:
              return d
            case 29:
              return p
            case 30:
              return h
            case 31:
            default:
              return m
          }
        },
        g = function (e, t, a) {
          if ('number' == typeof e && 'number' == typeof t && 'number' == typeof a) {
            var n = t < 10 ? '0'.concat(t) : ''.concat(t),
              r = e < 10 ? '0'.concat(e) : ''.concat(e)
            return ''.concat(a, '-').concat(n, '-').concat(r)
          }
          return ''
        }
      t.a = { getFormattedDateValue: g }
    },
    't+RT': function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n),
        i = a('aWzz'),
        o = a.n(i)
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t]
              for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
          }).apply(this, arguments)
      }
      function l(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      var c = (function (e) {
        var t, a
        function n() {
          var t
          return (
            ((t = e.call(this) || this).handleExpired = t.handleExpired.bind(l(t))),
            (t.handleErrored = t.handleErrored.bind(l(t))),
            (t.handleRecaptchaRef = t.handleRecaptchaRef.bind(l(t))),
            t
          )
        }
        ;(a = e), ((t = n).prototype = Object.create(a.prototype)), (t.prototype.constructor = t), (t.__proto__ = a)
        var i = n.prototype
        return (
          (i.getValue = function () {
            return this.props.grecaptcha && void 0 !== this._widgetId
              ? this.props.grecaptcha.getResponse(this._widgetId)
              : null
          }),
          (i.getWidgetId = function () {
            return this.props.grecaptcha && void 0 !== this._widgetId ? this._widgetId : null
          }),
          (i.execute = function () {
            var e = this.props.grecaptcha
            if (e && void 0 !== this._widgetId) return e.execute(this._widgetId)
            this._executeRequested = !0
          }),
          (i.reset = function () {
            this.props.grecaptcha && void 0 !== this._widgetId && this.props.grecaptcha.reset(this._widgetId)
          }),
          (i.handleExpired = function () {
            this.props.onExpired ? this.props.onExpired() : this.props.onChange && this.props.onChange(null)
          }),
          (i.handleErrored = function () {
            this.props.onErrored && this.props.onErrored()
          }),
          (i.explicitRender = function () {
            if (this.props.grecaptcha && this.props.grecaptcha.render && void 0 === this._widgetId) {
              var e = document.createElement('div')
              ;(this._widgetId = this.props.grecaptcha.render(e, {
                sitekey: this.props.sitekey,
                callback: this.props.onChange,
                theme: this.props.theme,
                type: this.props.type,
                tabindex: this.props.tabindex,
                'expired-callback': this.handleExpired,
                'error-callback': this.handleErrored,
                size: this.props.size,
                stoken: this.props.stoken,
                hl: this.props.hl,
                badge: this.props.badge,
              })),
                this.captcha.appendChild(e)
            }
            this._executeRequested &&
              this.props.grecaptcha &&
              void 0 !== this._widgetId &&
              ((this._executeRequested = !1), this.execute())
          }),
          (i.componentDidMount = function () {
            this.explicitRender()
          }),
          (i.componentDidUpdate = function () {
            this.explicitRender()
          }),
          (i.componentWillUnmount = function () {
            void 0 !== this._widgetId && (this.delayOfCaptchaIframeRemoving(), this.reset())
          }),
          (i.delayOfCaptchaIframeRemoving = function () {
            var e = document.createElement('div')
            for (document.body.appendChild(e), e.style.display = 'none'; this.captcha.firstChild; )
              e.appendChild(this.captcha.firstChild)
            setTimeout(function () {
              document.body.removeChild(e)
            }, 5e3)
          }),
          (i.handleRecaptchaRef = function (e) {
            this.captcha = e
          }),
          (i.render = function () {
            var e = this.props,
              t =
                (e.sitekey,
                e.onChange,
                e.theme,
                e.type,
                e.tabindex,
                e.onExpired,
                e.onErrored,
                e.size,
                e.stoken,
                e.grecaptcha,
                e.badge,
                e.hl,
                (function (e, t) {
                  if (null == e) return {}
                  var a,
                    n,
                    r = {},
                    i = Object.keys(e)
                  for (n = 0; n < i.length; n++) (a = i[n]), t.indexOf(a) >= 0 || (r[a] = e[a])
                  return r
                })(e, [
                  'sitekey',
                  'onChange',
                  'theme',
                  'type',
                  'tabindex',
                  'onExpired',
                  'onErrored',
                  'size',
                  'stoken',
                  'grecaptcha',
                  'badge',
                  'hl',
                ]))
            return r.a.createElement('div', s({}, t, { ref: this.handleRecaptchaRef }))
          }),
          n
        )
      })(r.a.Component)
      ;(c.displayName = 'ReCAPTCHA'),
        (c.propTypes = {
          sitekey: o.a.string.isRequired,
          onChange: o.a.func,
          grecaptcha: o.a.object,
          theme: o.a.oneOf(['dark', 'light']),
          type: o.a.oneOf(['image', 'audio']),
          tabindex: o.a.number,
          onExpired: o.a.func,
          onErrored: o.a.func,
          size: o.a.oneOf(['compact', 'normal', 'invisible']),
          stoken: o.a.string,
          hl: o.a.string,
          badge: o.a.oneOf(['bottomright', 'bottomleft', 'inline']),
        }),
        (c.defaultProps = {
          onChange: function () {},
          theme: 'light',
          type: 'image',
          tabindex: 0,
          size: 'normal',
          badge: 'bottomright',
        })
      var u = a('oXkQ'),
        d = a.n(u)
      function p() {
        return (p =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t]
              for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
          }).apply(this, arguments)
      }
      var h = {},
        m = 0
      function _() {
        return ('undefined' != typeof window && window.recaptchaOptions) || {}
      }
      var b,
        f,
        v = 'onloadcallback',
        g = _(),
        k = ((b = function () {
          var e = _(),
            t = e.lang ? '&hl=' + e.lang : ''
          return (
            'https://' +
            (e.useRecaptchaNet ? 'recaptcha.net' : 'www.google.com') +
            '/recaptcha/api.js?onload=' +
            v +
            '&render=explicit' +
            t
          )
        }),
        (f = (f = { callbackName: v, globalName: 'grecaptcha', removeOnUnmount: g.removeOnUnmount || !1 }) || {}),
        function (e) {
          var t = e.displayName || e.name || 'Component',
            a = (function (t) {
              var a, r
              function i(e, a) {
                var n
                return ((n = t.call(this, e, a) || this).state = {}), (n.__scriptURL = ''), n
              }
              ;(r = t),
                ((a = i).prototype = Object.create(r.prototype)),
                (a.prototype.constructor = a),
                (a.__proto__ = r)
              var o = i.prototype
              return (
                (o.asyncScriptLoaderGetScriptLoaderID = function () {
                  return (
                    this.__scriptLoaderID || (this.__scriptLoaderID = 'async-script-loader-' + m++),
                    this.__scriptLoaderID
                  )
                }),
                (o.setupScriptURL = function () {
                  return (this.__scriptURL = 'function' == typeof b ? b() : b), this.__scriptURL
                }),
                (o.asyncScriptLoaderHandleLoad = function (e) {
                  var t = this
                  this.setState(e, function () {
                    return t.props.asyncScriptOnLoad && t.props.asyncScriptOnLoad(t.state)
                  })
                }),
                (o.asyncScriptLoaderTriggerOnScriptLoaded = function () {
                  var e = h[this.__scriptURL]
                  if (!e || !e.loaded) throw new Error('Script is not loaded.')
                  for (var t in e.observers) e.observers[t](e)
                  delete window[f.callbackName]
                }),
                (o.componentDidMount = function () {
                  var e = this,
                    t = this.setupScriptURL(),
                    a = this.asyncScriptLoaderGetScriptLoaderID(),
                    n = f,
                    r = n.globalName,
                    i = n.callbackName,
                    o = n.scriptId
                  if ((r && void 0 !== window[r] && (h[t] = { loaded: !0, observers: {} }), h[t])) {
                    var s = h[t]
                    return s && (s.loaded || s.errored)
                      ? void this.asyncScriptLoaderHandleLoad(s)
                      : void (s.observers[a] = function (t) {
                          return e.asyncScriptLoaderHandleLoad(t)
                        })
                  }
                  var l = {}
                  ;(l[a] = function (t) {
                    return e.asyncScriptLoaderHandleLoad(t)
                  }),
                    (h[t] = { loaded: !1, observers: l })
                  var c = document.createElement('script')
                  ;(c.src = t), (c.async = !0), o && (c.id = o)
                  var u = function (e) {
                    if (h[t]) {
                      var a = h[t].observers
                      for (var n in a) e(a[n]) && delete a[n]
                    }
                  }
                  i &&
                    'undefined' != typeof window &&
                    (window[i] = function () {
                      return e.asyncScriptLoaderTriggerOnScriptLoaded()
                    }),
                    (c.onload = function () {
                      var e = h[t]
                      e &&
                        ((e.loaded = !0),
                        u(function (t) {
                          return !i && (t(e), !0)
                        }))
                    }),
                    (c.onerror = function () {
                      var e = h[t]
                      e &&
                        ((e.errored = !0),
                        u(function (t) {
                          return t(e), !0
                        }))
                    }),
                    document.body.appendChild(c)
                }),
                (o.componentWillUnmount = function () {
                  var e = this.__scriptURL
                  if (!0 === f.removeOnUnmount)
                    for (var t = document.getElementsByTagName('script'), a = 0; a < t.length; a += 1)
                      t[a].src.indexOf(e) > -1 && t[a].parentNode && t[a].parentNode.removeChild(t[a])
                  var n = h[e]
                  n &&
                    (delete n.observers[this.asyncScriptLoaderGetScriptLoaderID()],
                    !0 === f.removeOnUnmount && delete h[e])
                }),
                (o.render = function () {
                  var t = f.globalName,
                    a = this.props,
                    r = (a.asyncScriptOnLoad, a.forwardedRef),
                    i = (function (e, t) {
                      if (null == e) return {}
                      var a,
                        n,
                        r = {},
                        i = Object.keys(e)
                      for (n = 0; n < i.length; n++) (a = i[n]), t.indexOf(a) >= 0 || (r[a] = e[a])
                      return r
                    })(a, ['asyncScriptOnLoad', 'forwardedRef'])
                  return (
                    t && 'undefined' != typeof window && (i[t] = void 0 !== window[t] ? window[t] : void 0),
                    (i.ref = r),
                    Object(n.createElement)(e, i)
                  )
                }),
                i
              )
            })(n.Component),
            r = Object(n.forwardRef)(function (e, t) {
              return Object(n.createElement)(a, p({}, e, { forwardedRef: t }))
            })
          return (
            (r.displayName = 'AsyncScriptLoader(' + t + ')'), (r.propTypes = { asyncScriptOnLoad: o.a.func }), d()(r, e)
          )
        })(c)
      t.a = k
    },
    v84o: function (e, t, a) {
      'use strict'
      a('2G9S')
      var n = a('180P'),
        r = a('doI8')
      t.a = function (e) {
        var t = e.timelinePrefix,
          a = void 0 === t ? 'generic-timeline-' : t,
          i = e.urtUrl,
          o = i.url,
          s = i.urtEndpointOptions || {},
          l = s.cacheId,
          c = s.requestParams
        return Object(r.b)({
          timelineId: l || ''.concat(a).concat(Object(n.a)(i)),
          endpointUrl: o,
          endpointParams: c || {},
        })
      }
    },
    vMn4: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('Lsrn'),
        l = a('k/Ka'),
        c = function () {
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
                d: 'M21 3.25H6c-1.24 0-2.25 1.01-2.25 2.25v.75H3C1.76 6.25.75 7.26.75 8.5v10c0 1.24 1.01 2.25 2.25 2.25h15c1.24 0 2.25-1.01 2.25-2.25v-.75H21c1.24 0 2.25-1.01 2.25-2.25v-10c0-1.24-1.01-2.25-2.25-2.25zM2.25 8.5c0-.413.337-.75.75-.75h1.654C4.37 8.938 3.438 9.87 2.25 10.154V8.5zM3 19.25c-.413 0-.75-.337-.75-.75v-1.654c1.188.283 2.12 1.216 2.404 2.404H3zm15.75-.75c0 .413-.337.75-.75.75h-1.654c.283-1.188 1.216-2.12 2.404-2.404V18.5zm0-3.174c-2.016.323-3.6 1.908-3.924 3.924H6.174c-.323-2.016-1.908-3.6-3.924-3.924v-3.652c2.016-.323 3.6-1.908 3.924-3.924h8.652c.323 2.016 1.908 3.6 3.924 3.924v3.652zm0-5.172c-1.188-.283-2.12-1.216-2.404-2.404H18c.413 0 .75.337.75.75v1.654zm3 5.346c0 .413-.337.75-.75.75h-.75V8.5c0-1.24-1.01-2.25-2.25-2.25H5.25V5.5c0-.413.337-.75.75-.75h15c.413 0 .75.337.75.75v10z',
              }),
              o.a.createElement('path', {
                d: 'M10.5 9.316c-1.878 0-3.406 1.877-3.406 4.184s1.528 4.184 3.406 4.184 3.406-1.877 3.406-4.184-1.528-4.184-3.406-4.184zm0 6.868c-1.033 0-1.906-1.23-1.906-2.684s.873-2.684 1.906-2.684 1.906 1.23 1.906 2.684-.873 2.684-1.906 2.684z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    wz7L: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('Lsrn'),
        l = a('k/Ka'),
        c = function () {
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
                d: 'M16.695 13.037c1.185 0 2.51-.132 3.368-1.11.72-.823.952-2.08.715-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM14.098 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.054 2.187-.358 2.657-.367.42-1.036.6-2.238.6s-1.87-.18-2.24-.6c-.412-.47-.533-1.364-.36-2.658zm9.788 11.222c-.763-3.066-3.72-5.208-7.19-5.208-1.765 0-3.392.558-4.67 1.505-1.278-.948-2.905-1.506-4.67-1.506-3.47 0-6.428 2.142-7.19 5.208-.156.625-.025 1.265.356 1.754.37.473.94.744 1.567.744h19.87c.628 0 1.2-.27 1.57-.745.382-.49.512-1.13.356-1.753zm-1.537.83c-.09.11-.22.168-.39.168h-7.413c.078-.32.084-.66 0-.998-.25-1-.75-1.888-1.41-2.65.993-.665 2.223-1.058 3.558-1.058 2.78 0 5.14 1.674 5.735 4.07.044.174.014.344-.08.467zM7.354 20.5H2.09c-.17 0-.3-.057-.388-.168-.096-.123-.126-.294-.083-.47.596-2.395 2.954-4.068 5.735-4.068 2.78 0 5.14 1.674 5.735 4.07.043.174.014.344-.082.467-.088.113-.22.17-.388.17H7.355zm.001-7.463c1.185 0 2.51-.132 3.367-1.11.72-.823.953-2.08.716-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM4.758 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.053 2.187-.358 2.658-.368.42-1.037.6-2.238.6-1.202 0-1.87-.18-2.24-.6-.412-.47-.533-1.365-.36-2.66z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    yuM6: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'default', function () {
          return m
        })
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        s = a('5Yy7'),
        l = a.n(s),
        c = a('2VqO'),
        u = a.n(c),
        d = (a('2G9S'), a('ERkP')),
        p = a.n(d),
        h = a('6/RC'),
        m = (function (e) {
          l()(a, e)
          var t = u()(a)
          function a() {
            return r()(this, a), t.apply(this, arguments)
          }
          return (
            o()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.location.query,
                    t = e.code,
                    a = e.error,
                    n = e.scope,
                    r = e.state,
                    i = {
                      callback_url: 'https://'.concat(window.location.hostname).concat(window.location.pathname),
                      code: t,
                      error: a,
                      scope: n,
                      state: r,
                    },
                    o = h.canUseDOM && window.opener
                  o
                    ? (o.postMessage(i, 'https://'.concat(window.location.hostname)), window.close(), o.focus())
                    : this.props.history.push('/')
                },
              },
              {
                key: 'render',
                value: function () {
                  return null
                },
              },
            ]),
            a
          )
        })(p.a.Component)
    },
    zu4M: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('97Jx'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('9D1O'),
        l = a('gPQO')
      t.default = function (e) {
        return o.a.createElement(l.a, r()({}, e, { flowName: 'convert_to_professional', ocfModule: s.i }))
      }
    },
  },
])
//# sourceMappingURL=WIPED
