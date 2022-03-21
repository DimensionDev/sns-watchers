;(window.webpackJsonp = window.webpackJsonp || []).push([
  [44, 6, 9],
  {
    '+/sI': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return g
      }),
        n.d(t, 'b', function () {
          return y
        })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('5Yy7'),
        l = n.n(s),
        c = n('2VqO'),
        d = n.n(c),
        u = (n('Wd/2'), n('M+/F'), n('2G9S'), n('ERkP')),
        p = n.n(u),
        m = n('TGcR'),
        h = n('t62R'),
        f = n('a6qo'),
        v = n('rHpw'),
        g = 'animated_gif',
        y = 'video',
        b = (function (e) {
          l()(n, e)
          var t = d()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.durationInMilliseconds,
                    a = t.type
                  if (a === g || 'vine' === a)
                    e =
                      a === g
                        ? p.a.createElement(h.b, { weight: 'bold' }, 'GIF')
                        : p.a.createElement(m.a, { style: _.icon })
                  else if (a === y && n) {
                    var r = Math.trunc(n / 6e4),
                      i = '0'.concat(Math.trunc((n % 6e4) / 1e3)).slice(-2)
                    e = p.a.createElement(h.b, { color: 'white' }, ''.concat(r, ':').concat(i))
                  }
                  return e ? p.a.createElement(f.a, { align: 'left' }, e) : null
                },
              },
            ]),
            n
          )
        })(p.a.PureComponent),
        _ = v.a.create(function (e) {
          return { icon: { color: e.colors.white } }
        })
      t.c = b
    },
    '/Imo': function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('VrFO'),
        l = n.n(s),
        c = n('Y9Ll'),
        d = n.n(c),
        u = n('1Pcy'),
        p = n.n(u),
        m = n('5Yy7'),
        h = n.n(m),
        f = n('2VqO'),
        v = n.n(f),
        g = n('KEM+'),
        y = n.n(g),
        b = (n('2G9S'), n('jQ3i'), n('x4t0'), n('ERkP')),
        _ = n.n(b),
        C = n('/yvb'),
        w = n('k/Ka'),
        E = n('3XMw'),
        x = n.n(E),
        T = n('rHpw'),
        S = ['accept', 'disabled', 'multiple', 'onChange', 'testID'],
        I = x.a.i5450beb,
        R = x.a.f7432494,
        M = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(p()(e), '_handlePress', function (t) {
                var n = e.props.onPress
                n && n(t), e._fileInput && e._fileInput.click()
              }),
              y()(p()(e), '_handleChange', function (t) {
                var n = e.props.onChange,
                  a = t.target,
                  r = a.files
                r.length && n && n(r), (a.value = '')
              }),
              y()(p()(e), '_handleFileInputButtonRef', function (t) {
                e._fileInput = t
              }),
              e
            )
          }
          return (
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accept,
                    n = e.disabled,
                    a = e.multiple,
                    i = (e.onChange, e.testID),
                    s = o()(e, S),
                    l = !((null != t && t.includes('video')) || (null != t && t.includes('gif')))
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    _.a.createElement(
                      C.a,
                      r()({ hoverLabel: t ? { label: l ? R : I } : void 0 }, s, {
                        disabled: n,
                        onPress: this._handlePress,
                      }),
                    ),
                    Object(w.a)('input', {
                      accept: t,
                      disabled: n,
                      multiple: a,
                      onChange: this._handleChange,
                      ref: this._handleFileInputButtonRef,
                      style: k.input,
                      tabIndex: -1,
                      testID: i,
                      type: 'file',
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      y()(M, 'defaultProps', { disabled: !1, multiple: !1 })
      var k = T.a.create(function (e) {
        return {
          input: { width: '0.1px', height: '0.1px', opacity: 0, overflow: 'hidden', position: 'absolute', zIndex: -1 },
        }
      })
      t.a = M
    },
    '/Rsk': function (e, t, n) {
      'use strict'
      n.d(t, 'f', function () {
        return g
      }),
        n.d(t, 'e', function () {
          return y
        }),
        n.d(t, 'h', function () {
          return b
        }),
        n.d(t, 'g', function () {
          return _
        }),
        n.d(t, 'd', function () {
          return C
        }),
        n.d(t, 'c', function () {
          return E
        }),
        n.d(t, 'b', function () {
          return x
        }),
        n.d(t, 'a', function () {
          return T
        }),
        n.d(t, 'i', function () {
          return I
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        s = (n('yH/f'), n('KqXw'), n('LJOr'), n('7x/C'), n('JtPf'), n('oEOe')),
        l = n('kGix'),
        c = (n('hBpG'), n('M6MT')),
        d = n('Ssj5'),
        u = n('qlwE'),
        p = n('a/ea'),
        m = n('474o'),
        h = 'placePicker',
        f = Object.freeze({
          REQUEST: 'rweb/placePicker/SEARCH_REQUEST',
          SUCCESS: 'rweb/placePicker/SEARCH_SUCCESS',
          FAILURE: 'rweb/placePicker/SEARCH_FAILURE',
        }),
        v = Object.freeze({
          initial: { fetchStatus: l.a.NONE },
          lastSearch: { fetchStatus: l.a.NONE },
          lastSelectedPlace: void 0,
        })
      var g = function (e) {
          return e.placePicker.initial.results
        },
        y = function (e) {
          return e.placePicker.initial.fetchStatus
        },
        b = function (e) {
          return e.placePicker.lastSearch.results
        },
        _ = function (e) {
          return e.placePicker.lastSearch.fetchStatus
        },
        C = function (e) {
          return (function (e, t) {
            return null != t
              ? t
              : null == e
              ? void 0
              : e.places.find(function (t) {
                  return (null == e ? void 0 : e.autotag_place_id) === t.place.id
                })
          })(
            g(e),
            (function (e) {
              return e.placePicker.lastSelectedPlace
            })(e),
          )
        },
        w = function (e, t) {
          return function (n, a, r) {
            var i = r.api
            return Object(s.b)(n, { request: i.Places.search, params: e })({
              actionTypes: f,
              context: 'SEARCH_PLACES_ACTION',
              meta: { resultSet: t },
            })
          }
        },
        E = function (e) {
          return function (t, n, a) {
            a.api
            var r = Object(p.d)(n())
            return t(
              w(
                {
                  query_type: m.a.tweet_compose_location,
                  lat: null == r ? void 0 : r.coords.latitude,
                  long: null == r ? void 0 : r.coords.longitude,
                  hacc: null == r ? void 0 : r.coords.accuracy,
                  search_term: e,
                },
                m.c.lastSearch,
              ),
            )
          }
        },
        x = function () {
          return function (e, t, n) {
            n.api
            var a = y(t()),
              r = g(t())
            if (a === l.a.LOADING || r) return Promise.resolve()
            var i = Object(p.d)(t())
            return i
              ? e(
                  w(
                    {
                      lat: i.coords.latitude,
                      long: i.coords.longitude,
                      hacc: i.coords.accuracy,
                      query_type: m.a.tweet_compose_location,
                      count: 50,
                    },
                    m.c.initial,
                  ),
                )
              : Promise.resolve()
          }
        },
        T = function () {
          return function (e, t, n) {
            n.api
            return Object(u.l)(t()) && Object(p.c)(t()) === c.b.granted
              ? e(Object(p.b)())
                  .then(function () {
                    return e(x())
                  })
                  .then(function () {
                    return C(t())
                  })
              : Promise.resolve()
          }
        },
        S = 'rweb/placePicker/UPDATE_LAST_SELECTED_PLACE',
        I = function (e) {
          return { type: S, payload: e }
        }
      d.a.register(
        r()({}, h, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case f.REQUEST:
              var n = t.meta.resultSet
              return o()(o()({}, e), {}, r()({}, n, { fetchStatus: l.a.LOADING }))
            case f.FAILURE:
              var a = t.meta.resultSet
              return o()(o()({}, e), {}, r()({}, a, { fetchStatus: l.a.FAILED }))
            case f.SUCCESS:
              var i = t.meta.resultSet,
                s = t.payload
              return o()(o()({}, e), {}, r()({}, i, { fetchStatus: l.a.LOADED, results: s }))
            case S:
              var c = t.payload
              return o()(o()({}, e), {}, { lastSelectedPlace: null != c ? c : void 0 })
            default:
              return e
          }
        }),
      )
    },
    '07FG': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var a = n('cnVF'),
        r = function (e) {
          return e === a.B
        }
    },
    '0uGn': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return we
      })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('RhWx'),
        o = n.n(i),
        s = n('VrFO'),
        l = n.n(s),
        c = n('Y9Ll'),
        d = n.n(c),
        u = n('1Pcy'),
        p = n.n(u),
        m = n('5Yy7'),
        h = n.n(m),
        f = n('2VqO'),
        v = n.n(f),
        g = n('KEM+'),
        y = n.n(g),
        b =
          (n('hBpG'),
          n('7x/C'),
          n('vrRf'),
          n('jwue'),
          n('+oxZ'),
          n('2G9S'),
          n('z84I'),
          n('JtPf'),
          n('lTEL'),
          n('87if'),
          n('kYxP'),
          n('LqLs'),
          n('m9LP'),
          n('ERkP')),
        _ = n.n(b),
        C = (n('TJCb'), n('DZ+c'), n('xZGM')),
        w = n('GTeL'),
        E = n('3XMw'),
        x = n.n(E),
        T = n('rHpw'),
        S = T.a.create(function (e) {
          return {
            formTextInput: {
              width: '100%',
              backgroundColor: e.colors.navigationBackground,
              paddingHorizontal: e.spaces.space12,
              paddingBottom: 0,
              borderTopWidth: e.spaces.space1,
              borderTopStyle: 'solid',
              borderTopColor: e.colors.borderColor,
            },
            attachmentContainer: { width: '100%', height: '100%', flexGrow: 1 },
            root: { display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', height: '100%', flexGrow: 1 },
          }
        }),
        I = 'altTextInput',
        R = 'endEditingButton',
        M = 'altTextEducationSheetPrimaryAction',
        k = n('MWbm'),
        P = n('t62R'),
        L = n('p+r5'),
        D = x.a.feabf2a0,
        A = x.a.e36287c6,
        O = x.a.cf565d08,
        F = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(p()(e), '_renderInputHelperText', function () {
                var t = e.props.onShowEducation
                return t ? _.a.createElement(P.b, { color: 'link', onPress: t, withInteractiveStyling: !0 }, O) : null
              }),
              y()(p()(e), '_handleChange', function (t) {
                var n = e.props,
                  a = n.currentMediaId,
                  r = n.mediaItem,
                  i = n.onChange,
                  o = t.target.value
                r ? i(o, r.id.toString()) : a && i(o, a)
              }),
              e
            )
          }
          return (
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.autofocus,
                    n = e.maxLength,
                    a = e.mediaItem,
                    r = e.orientedImage,
                    i = e.value
                  return _.a.createElement(
                    k.a,
                    { style: S.root },
                    _.a.createElement(
                      k.a,
                      { style: S.attachmentContainer },
                      _.a.createElement(w.a, { mediaItem: a, orientedImage: r }),
                      _.a.createElement(L.a, {
                        accessibilityLabel: D,
                        autoFocus: t,
                        helperText: this._renderInputHelperText(),
                        label: A,
                        maxLength: n,
                        maxNumberOfLines: 6,
                        multiline: !0,
                        name: 'altTextInput',
                        numberOfLines: 2,
                        onChange: this._handleChange,
                        style: S.formTextInput,
                        testID: I,
                        value: i,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component),
        B = n('rxPX'),
        V = function (e, t) {
          return Object(C.C)(e, C.a)
        },
        N = Object(B.a)()
          .propsFromState(function () {
            return { showEducationOnMount: V }
          })
          .propsFromActions(function () {
            return { addFlag: C.y }
          })
          .withAnalytics(),
        j = n('feu+'),
        U = x.a.ffe9ec3a,
        z = x.a.j063b261,
        H = x.a.e57144f0,
        W = x.a.f9f9210c,
        G = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(p()(e), 'state', { showAltTextEducationSheet: !1 }),
              y()(p()(e), '_handleOpenEducationPrompt', function () {
                var t = e.props.analytics
                e.setState({ showAltTextEducationSheet: !0 }), t.scribe({ component: 'education', action: 'click' })
              }),
              y()(p()(e), '_handleCloseEducationPrompt', function () {
                e.setState({ showAltTextEducationSheet: !1 })
              }),
              y()(p()(e), '_handleEducationPromptPrimaryAction', function () {
                var t = e.props.analytics
                e._handleCloseEducationPrompt(),
                  t.scribe({ component: 'education', element: 'alt_text_button', action: 'click' })
              }),
              y()(p()(e), '_handleEducationPromptSecondaryAction', function () {
                e.props.history.goBack()
              }),
              e
            )
          }
          return (
            d()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.addFlag,
                    n = e.analytics
                  e.showEducationOnMount &&
                    (this.setState({ showAltTextEducationSheet: !0 }),
                    n.scribe({ component: 'education', action: 'open' }),
                    t(C.a))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.mediaItem,
                    n = e.onAltTextChange,
                    a = e.orientedImage,
                    r = e.value,
                    i = this.state.showAltTextEducationSheet,
                    o = t && t.id.toString()
                  return _.a.createElement(
                    k.a,
                    { style: K.root },
                    i
                      ? _.a.createElement(j.a, {
                          actionLabel: H,
                          headline: U,
                          onAction: this._handleEducationPromptPrimaryAction,
                          onClose: this._handleCloseEducationPrompt,
                          onSecondaryAction: this._handleEducationPromptSecondaryAction,
                          primaryButtonTestID: M,
                          secondaryActionLabel: W,
                          subtext: z,
                        })
                      : null,
                    _.a.createElement(F, {
                      autofocus: !0,
                      currentMediaId: o,
                      maxLength: 1e3,
                      mediaItem: t,
                      onChange: n,
                      onShowEducation: this._handleOpenEducationPrompt,
                      orientedImage: a,
                      value: r,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component),
        K = T.a.create(function (e) {
          return { root: { flexGrow: 1 } }
        }),
        q = N(G),
        X = n('jHSc'),
        Y = n('EeFI'),
        Q = n('7JQg'),
        J = n('9Q4p'),
        Z = n('PrL8'),
        $ = n('k/OQ'),
        ee = n('/yvb'),
        te = n('oQhu'),
        ne = n('ddV6'),
        ae = n.n(ne),
        re = function (e) {
          var t = new Map()
          return (
            e.forEach(function (e) {
              var n = ae()(e, 2),
                a = n[0],
                r = n[1]
              t.set(a, r)
            }),
            t
          )
        },
        ie = n('mN6z'),
        oe = n('95Se'),
        se = n('7Mjr'),
        le = n('Mbn/'),
        ce = n('zIWA'),
        de = n('1auM'),
        ue = n('eYns'),
        pe = { section: 'alt_text' },
        me = { section: 'crop' },
        he = { section: 'sensitive_media' },
        fe = x.a.e070024a,
        ve = x.a.i2209530,
        ge = x.a.i7d24b36,
        ye = x.a.f96a38a2,
        be = x.a.hac7c548,
        _e = x.a.e3dbfba3,
        Ce = x.a.dd4a83a5,
        we = { crop: 'crop', altText: 'alt_text', sensitiveMedia: 'sensitive_media' },
        Ee = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            l()(this, n),
              (a = t.call(this, e)),
              y()(p()(a), '_cropper', _.a.createRef()),
              y()(
                p()(a),
                '_getMemoizedTabMetadata',
                Object(te.a)(function (e, t) {
                  return t && e === we.sensitiveMedia
                    ? { namespace: he, title: Ce, renderer: a._renderSensitiveMediaTab }
                    : e === we.altText
                    ? { namespace: pe, title: _e, renderer: a._renderAltTextTab }
                    : { namespace: me, title: be, renderer: a._renderCropTab }
                }),
              ),
              y()(p()(a), '_renderTabContent', function (e) {
                var t,
                  n = a.props,
                  r = n.location,
                  i = n.sensitiveMediaTabEnabled,
                  o = a._getMemoizedTabMetadata(e, i),
                  s = !(null !== (t = r.state) && void 0 !== t && t.hideTabs),
                  l = s ? a._getTabLinks(e) : [],
                  c = o.renderer()
                return s && l.length > 1
                  ? _.a.createElement(
                      _.a.Fragment,
                      null,
                      _.a.createElement($.a, { accessibilityLabel: fe, links: l }),
                      _.a.createElement(k.a, { style: Z.a.segmentedControlChildren }, c),
                    )
                  : c
              }),
              y()(p()(a), '_renderAltTextTab', function () {
                var e = a.props.history,
                  t = a.state,
                  n = t.currentMediaId,
                  r = t.mediaMetadata,
                  i = t.orientedImage,
                  o = a._getCurrentMediaItem(),
                  s = r[n] && r[n].altText
                return _.a.createElement(q, {
                  history: e,
                  key: n,
                  mediaItem: o,
                  onAltTextChange: a._handleAltTextChange,
                  orientedImage: i.get(n),
                  value: s,
                })
              }),
              y()(p()(a), '_renderCropTab', function () {
                var e = a.state,
                  t = e.cropData,
                  n = e.currentMediaId,
                  r = a._getCurrentMediaItem()
                return _.a.createElement(Y.a, {
                  defaultCropData: t.get(n),
                  key: n,
                  media: r,
                  ref: a._cropper,
                  withAspectRatioOptions: !0,
                })
              }),
              y()(p()(a), '_renderSensitiveMediaTab', function () {
                var e = a.state,
                  t = e.currentMediaId,
                  n = e.mediaMetadata,
                  r = e.orientedImage,
                  i = a._getCurrentMediaItem(),
                  o = n[t] && n[t].sensitiveMediaWarning
                return _.a.createElement(J.a, {
                  currentWarnings: o,
                  key: t,
                  mediaItem: i,
                  onWarningChange: a._handleSensitiveWarningChange,
                  orientedImage: r.get(t),
                })
              }),
              y()(p()(a), '_renderAppBarRightControl', function () {
                var e = a.state.isProcessing,
                  t = a._getNextMediaIndex(1),
                  n = a._getNextMediaIndex(-1)
                return _.a.createElement(
                  k.a,
                  { style: Z.a.rightControl },
                  a._hasMediaAtIndex(n) || a._hasMediaAtIndex(t)
                    ? _.a.createElement(
                        k.a,
                        { style: [Z.a.rightControl, Z.a.leftRightButtons] },
                        _.a.createElement(ee.a, {
                          accessibilityLabel: ye,
                          disabled: !a._hasMediaAtIndex(n),
                          icon: _.a.createElement(oe.a, null),
                          onPress: a._handleClickToMediaAtIndex(n),
                          size: 'small',
                          style: Z.a.prevButton,
                          type: 'primaryOutlined',
                        }),
                        _.a.createElement(ee.a, {
                          accessibilityLabel: ge,
                          disabled: !a._hasMediaAtIndex(t),
                          icon: _.a.createElement(se.a, null),
                          onPress: a._handleClickToMediaAtIndex(t),
                          size: 'small',
                          type: 'primaryOutlined',
                        }),
                      )
                    : null,
                  _.a.createElement(
                    ee.a,
                    {
                      disabled: e,
                      onPress: a._handleEndEditingClick,
                      size: 'small',
                      style: Z.a.saveButton,
                      testID: R,
                      type: 'primaryFilled',
                    },
                    ve,
                  ),
                )
              }),
              y()(p()(a), '_handleCancelEditingClick', function (e) {
                a._scribeWithNamespace({ action: 'cancel' }), e()
              }),
              y()(p()(a), '_handleClickTab', function (e) {
                var t = a.props.analytics
                a._handleSaveCropData(),
                  a._scribeWithNamespace({ element: e, action: 'click' }),
                  t.scribePageImpression()
              }),
              y()(p()(a), '_getCurrentMediaItem', function () {
                var e = a.props.media,
                  t = a.state.currentMediaId
                return e.find(function (e) {
                  return e.id === t
                })
              }),
              y()(p()(a), '_getNextMediaIndex', function (e) {
                var t = a.props.media,
                  n = a._getCurrentMediaItem()
                return t.indexOf(n) + e
              }),
              y()(p()(a), '_hasMediaAtIndex', function (e) {
                var t = a.props.media
                return e >= 0 && e < t.length
              }),
              y()(p()(a), '_handleClickToMediaAtIndex', function (e) {
                return function () {
                  var t = a.props.media
                  if (a._hasMediaAtIndex(e)) {
                    a._handleSaveCropData()
                    var n = t[e].id
                    a.setState({ currentMediaId: n })
                  }
                }
              }),
              y()(p()(a), '_saveMediaMetadata', function () {
                var e = a.props,
                  t = e.media,
                  n = e.setMediaMetadata,
                  r = a.state.mediaMetadata
                t.forEach(function (e) {
                  n(e.id, r[e.id])
                })
              }),
              y()(p()(a), '_handleEndEditingClick', function () {
                var e = a.props.history,
                  t = a._cropper && a._cropper.current,
                  n = a.state.cropData
                if (t || n.size) {
                  var r = a.props,
                    i = r.media,
                    s = r.processMedia,
                    l = r.updateMediaUpload,
                    c = a.state.currentMediaId
                  a.setState({ isProcessing: !0 })
                  var d = t ? re([].concat(o()(n), [[c, t.getCropData()]])) : n,
                    u = i.map(function (e) {
                      return d.get(e.id) ? (l({ id: e.id, cropData: d.get(e.id) }), s(e.id)) : Promise.resolve()
                    })
                  Promise.all(u).then(function () {
                    a._scribeWithNamespace({ action: 'done' })
                  })
                }
                a._saveMediaMetadata(), e.goBack()
              }),
              y()(p()(a), '_handleAltTextChange', function (e) {
                a.setState(function (t) {
                  return {
                    mediaMetadata: r()(
                      r()({}, t.mediaMetadata),
                      {},
                      y()({}, t.currentMediaId, r()(r()({}, t.mediaMetadata[t.currentMediaId]), {}, { altText: e })),
                    ),
                  }
                })
              }),
              y()(p()(a), '_handleSensitiveWarningChange', function (e, t) {
                a.setState(function (n) {
                  var a =
                    (n.mediaMetadata[n.currentMediaId] && n.mediaMetadata[n.currentMediaId].sensitiveMediaWarning) ||
                    new Set()
                  return (
                    t ? a.add(e) : a.delete(e),
                    {
                      mediaMetadata: r()(
                        r()({}, n.mediaMetadata),
                        {},
                        y()(
                          {},
                          n.currentMediaId,
                          r()(r()({}, n.mediaMetadata[n.currentMediaId]), {}, { sensitiveMediaWarning: a }),
                        ),
                      ),
                    }
                  )
                })
              }),
              y()(p()(a), '_handleSaveCropData', function () {
                var e = a._cropper && a._cropper.current
                if (e) {
                  var t = a.state.currentMediaId,
                    n = e.getCropData(),
                    r = a._getCurrentMediaItem()
                  if (
                    r &&
                    !Object(ie.a)(n, a.state.cropData.get(t)) &&
                    (a.setState(function (e) {
                      return { orientedImage: re([].concat(o()(e.orientedImage), [[t, null]])) }
                    }),
                    r.originalMediaFile && r.originalMediaFile instanceof de.a)
                  ) {
                    var i = r.cropData
                    Object(ue.b)(r.originalMediaFile, { cropData: n || i })
                      .then(function (e) {
                        return new de.a(e).withDimensionsAndOrientation().then(function (e) {
                          a.setState(function (a) {
                            return {
                              orientedImage: re([].concat(o()(a.orientedImage), [[t, e]])),
                              cropData: re([].concat(o()(a.cropData), [[t, n]])),
                            }
                          })
                        })
                      })
                      .catch(function () {
                        a.setState(function (e) {
                          return { orientedImage: re([].concat(o()(e.orientedImage), [[t, void 0]])) }
                        })
                      })
                  }
                  a.setState(function (e) {
                    return { cropData: re([].concat(o()(e.cropData), [[t, n]])) }
                  })
                }
              }),
              y()(p()(a), '_scribeWithNamespace', function (e) {
                var t = a.props,
                  n = t.analytics,
                  i = t.sensitiveMediaTabEnabled,
                  o = a._getCurrentTab(),
                  s = a._getMemoizedTabMetadata(o, i)
                n.scribe(r()(r()({}, s.namespace), e))
              }),
              y()(p()(a), '_getMediaMetadata', function (e) {
                var t = {}
                return (
                  e.forEach(function (e) {
                    return (t[e.id] = e.mediaMetadata)
                  }),
                  t
                )
              })
            var i = e.initialMediaId,
              s = e.media,
              c = a._getMediaMetadata(s)
            return (
              (a.state = {
                cropData: new Map(),
                isProcessing: !1,
                mediaMetadata: c,
                currentMediaId: i || -1,
                orientedImage: new Map(),
              }),
              a
            )
          }
          return (
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    n = e.sensitiveMediaTabEnabled,
                    a = this._getCurrentTab(),
                    r = this._getMemoizedTabMetadata(a, n)
                  return _.a.createElement(
                    Q.c,
                    { namespace: r.namespace },
                    _.a.createElement(
                      X.b,
                      {
                        backButtonType: 'back',
                        containerStyle: Z.a.root,
                        documentTitle: r.title,
                        history: t,
                        onBackClick: this._handleCancelEditingClick,
                        rightControl: this._renderAppBarRightControl(),
                        title: r.title,
                      },
                      this._renderTabContent(a),
                    ),
                  )
                },
              },
              {
                key: '_getCurrentTab',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.location,
                    a = t.sensitiveMediaTabEnabled,
                    r = null === (e = n.state) || void 0 === e ? void 0 : e.tab
                  return a && r === we.sensitiveMedia ? we.sensitiveMedia : r === we.altText ? we.altText : we.crop
                },
              },
              {
                key: '_getTabLinks',
                value: function (e) {
                  var t,
                    n = this,
                    a = this.props,
                    i = a.analytics,
                    o = a.location,
                    s = a.sensitiveMediaTabEnabled,
                    l = this._getCurrentMediaItem(),
                    c = []
                  return (
                    null != l &&
                      null !== (t = l.originalMediaFile) &&
                      void 0 !== t &&
                      t.isImage &&
                      c.push({
                        to: r()(r()({}, o), {}, { state: r()(r()({}, o.state), {}, { tab: we.crop }) }),
                        label: _.a.createElement(le.a, null),
                        key: we.crop,
                        accessibilityLabel: be,
                        isActive: function () {
                          return e === we.crop
                        },
                        onClick: function () {
                          return i.scribePageImpression()
                        },
                      }),
                    c.push({
                      to: r()(r()({}, o), {}, { state: r()(r()({}, o.state), {}, { tab: we.altText }) }),
                      label: _.a.createElement(P.b, { weight: 'bold' }, 'ALT'),
                      key: we.altText,
                      accessibilityLabel: _e,
                      isActive: function () {
                        return e === we.altText
                      },
                      onClick: function () {
                        return n._handleClickTab('alt_text_button')
                      },
                    }),
                    s &&
                      c.push({
                        to: r()(r()({}, o), {}, { state: r()(r()({}, o.state), {}, { tab: we.sensitiveMedia }) }),
                        label: _.a.createElement(ce.a, null),
                        key: we.sensitiveMedia,
                        accessibilityLabel: Ce,
                        isActive: function () {
                          return e === we.sensitiveMedia
                        },
                        onClick: function () {
                          return n._handleClickTab('sensitive_media_tab')
                        },
                      }),
                    c
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      t.b = Ee
    },
    '21U8': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('Rqga'), n('2G9S'), n('ERkP')),
        v = n.n(f),
        g = n('/yvb'),
        y = n('3XMw'),
        b = n.n(y),
        _ = n('3rX5'),
        C = n('rHpw'),
        w = n('MWbm'),
        E = C.a.create(function (e) {
          return {
            mask: {
              backgroundColor: 'transparent',
              borderWidth: e.spaces.space4,
              borderColor: e.colors.primary,
              boxShadow: '0 0 0 9999px '.concat(e.colors.activeFaintGray),
            },
            circle: { borderRadius: e.borderRadii.infinite },
          }
        }),
        x = function (e) {
          var t = e.circle,
            n = e.height,
            a = e.width
          return v.a.createElement(w.a, {
            pointerEvents: 'none',
            style: [E.mask, { width: a, height: n }, t && E.circle],
          })
        },
        T = n('ZvMt'),
        S = n('97Jx'),
        I = n.n(S),
        R = n('m3Bd'),
        M = n.n(R),
        k = n('CHgo'),
        P = n('7ep7'),
        L = ['children', 'onPanEnd', 'onPanMove', 'onPinchMove', 'onWheel'],
        D = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              h()(l()(a), '_previousTouchDistance', 0),
              h()(l()(a), '_previousPositionX', 0),
              h()(l()(a), '_previousPositionY', 0),
              h()(l()(a), '_centerPosition', { x: 0, y: 0 }),
              h()(l()(a), '_panResponder', {}),
              h()(l()(a), '_setRef', function (e) {
                var t = a.props,
                  n = t.onPanEnd,
                  r = t.onPanMove,
                  i = t.onPinchMove,
                  o = t.onWheel
                if (e) {
                  ;(r || n || i) && (a._removeTouchMoveToScrollListener = Object(k.a)(e, a._preventDefaultEvent, !1)),
                    o && (a._removeScrollToScaleListener = Object(k.b)(e, a._preventDefaultEvent, !1))
                  var s = e.getBoundingClientRect()
                  a._centerPosition = { x: s.width / 2 + s.left, y: s.height / 2 + s.top }
                }
              }),
              h()(l()(a), '_preventDefaultEvent', function (e) {
                e.preventDefault()
              }),
              h()(l()(a), '_handlePanResponderMove', function (e, t) {
                var n,
                  r,
                  i = a.props,
                  o = i.onPanMove,
                  s = i.onPinchMove,
                  l = e.nativeEvent.touches
                if (2 === t.numberActiveTouches) {
                  if (s) {
                    var c =
                        ((n = l[0]),
                        (r = l[1]),
                        Math.sqrt(Math.pow(n.pageY - r.pageY, 2) + Math.pow(n.pageX - r.pageX, 2))),
                      d = (function (e, t) {
                        return {
                          pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2,
                          pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2,
                        }
                      })(l[0], l[1]),
                      u = d.pageX,
                      p = d.pageY,
                      m = a._previousPositionX ? u - a._previousPositionX : 0,
                      h = a._previousPositionY ? p - a._previousPositionY : 0,
                      f = a._previousTouchDistance ? c - a._previousTouchDistance : 0
                    ;(a._previousPositionX = u), (a._previousPositionY = p), (a._previousTouchDistance = c)
                    var v = a._centerPosition
                    s(f, v.x - u, v.y - p, m, h)
                  }
                } else o && o(t.dx, t.dy)
                document.addEventListener('selectstart', a._preventDefaultEvent, !1)
              }),
              h()(l()(a), '_handlePanResponderEnd', function (e, t) {
                a.props.onPanEnd && a.props.onPanEnd(t.dx, t.dy),
                  a.props.onPinchMove && (a._previousTouchDistance = 0),
                  (a._previousPositionX = 0),
                  (a._previousPositionY = 0),
                  a._removeSelectStartListener()
              }),
              h()(l()(a), '_handleWheel', function (e) {
                var t = e.clientX,
                  n = e.clientY,
                  r = e.deltaX,
                  i = e.deltaY,
                  o = a._centerPosition,
                  s = o.x - t,
                  l = o.y - n
                a.props.onWheel && a.props.onWheel(r, i, s, l)
              }),
              (a._panResponder = P.a.create({
                onStartShouldSetPanResponder: function () {
                  return !0
                },
                onMoveShouldSetPanResponder: function () {
                  return !0
                },
                onPanResponderMove: a._handlePanResponderMove,
                onPanResponderRelease: a._handlePanResponderEnd,
                onPanResponderTerminate: a._handlePanResponderEnd,
              })),
              (a._removeSelectStartListener = function () {
                return document.removeEventListener('selectstart', a._preventDefaultEvent, !1)
              }),
              a
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = (e.children, e.onPanEnd, e.onPanMove, e.onPinchMove, e.onWheel, M()(e, L))
                  return v.a.createElement(
                    w.a,
                    I()({}, t, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers),
                    this.props.children,
                  )
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener(),
                    this._removeScrollToScaleListener && this._removeScrollToScaleListener(),
                    this._removeSelectStartListener()
                },
              },
            ]),
            n
          )
        })(v.a.Component),
        A = n('9RkS'),
        O = n('rOXj'),
        F = n('aITJ'),
        B = n('yiKp'),
        V = n.n(B),
        N = n('Lsrn'),
        j = n('k/Ka'),
        U = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(j.a)(
            'svg',
            V()(
              V()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [N.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            v.a.createElement(
              'g',
              null,
              v.a.createElement('path', {
                d: 'M19.75 19.944H4.25c-1.24 0-2.25-1.01-2.25-2.25V6.306c0-1.24 1.01-2.25 2.25-2.25h15.5c1.24 0 2.25 1.01 2.25 2.25v11.39c0 1.24-1.01 2.248-2.25 2.248zM4.25 5.556c-.413 0-.75.337-.75.75v11.39c0 .412.337.75.75.75h15.5c.413 0 .75-.338.75-.75V6.305c0-.413-.337-.75-.75-.75H4.25z',
              }),
            ),
          )
        }
      U.metadata = { width: 24, height: 24 }
      var z = U,
        H = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(j.a)(
            'svg',
            V()(
              V()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [N.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            v.a.createElement(
              'g',
              null,
              v.a.createElement('path', {
                d: 'M19.75 19.89H4.25C3.01 19.89 2 18.88 2 17.64v-7.28c0-1.24 1.01-2.25 2.25-2.25h15.5c1.24 0 2.25 1.01 2.25 2.25v7.277c0 1.24-1.01 2.25-2.25 2.25zM4.25 9.61c-.413 0-.75.338-.75.75v7.278c0 .413.337.75.75.75h15.5c.413 0 .75-.337.75-.75V10.36c0-.412-.337-.75-.75-.75H4.25z',
              }),
            ),
          )
        }
      H.metadata = { width: 24, height: 24 }
      var W = H,
        G = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(j.a)(
            'svg',
            V()(
              V()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [N.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            v.a.createElement(
              'g',
              null,
              v.a.createElement('path', {
                d: 'M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.413 0-.75.337-.75.75v15.5c0 .413.337.75.75.75h15.5c.413 0 .75-.337.75-.75V4.25c0-.413-.337-.75-.75-.75H4.25z',
              }),
            ),
          )
        }
      G.metadata = { width: 24, height: 24 }
      var K = G,
        q = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(j.a)(
            'svg',
            V()(
              V()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [N.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            v.a.createElement(
              'g',
              null,
              v.a.createElement('path', {
                d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
              }),
              v.a.createElement('path', {
                d: 'M15.21 11c0 .41-.34.75-.75.75h-2.71v2.71c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.71H7.54c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.71V7.54c0-.41.34-.75.75-.75s.75.34.75.75v2.71h2.71c.41 0 .75.34.75.75z',
              }),
            ),
          )
        }
      q.metadata = { width: 24, height: 24 }
      var X = q,
        Y = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(j.a)(
            'svg',
            V()(
              V()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [N.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            v.a.createElement(
              'g',
              null,
              v.a.createElement('path', {
                d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
              }),
              v.a.createElement('path', {
                d: 'M14.46 11.75H7.54c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.92c.415 0 .75.336.75.75s-.335.75-.75.75z',
              }),
            ),
          )
        }
      Y.metadata = { width: 24, height: 24 }
      var Q = Y,
        J = b.a.d85bc1b8,
        Z = b.a.f596ace8,
        $ = b.a.df031fca,
        ee = b.a.b40332c5,
        te = b.a.e547b368,
        ne = b.a.f7571204,
        ae = b.a.e6e16811,
        re =
          Math.log2 ||
          function (e) {
            return Math.log(e) * Math.LOG2E
          },
        ie = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e) {
            var a, i
            return (
              r()(this, n),
              (a = t.call(this, e)),
              h()(l()(a), '_previousLeft', 0),
              h()(l()(a), '_previousTop', 0),
              h()(l()(a), '_panStyles', { top: 0, left: 0 }),
              h()(l()(a), '_shouldShowZoomControl', function () {
                return (!F.b.isMobileOS() || !O.a.isTouchSupported()) && a.props.withZoomControl
              }),
              h()(l()(a), '_renderControls', function () {
                var e = a.props,
                  t = e.image,
                  n = e.withAspectRatioOptions,
                  r = a.state.aspectRatio,
                  i = t.width / t.height,
                  o = a._shouldShowZoomControl()
                return n || o
                  ? v.a.createElement(
                      w.a,
                      { style: oe.controlsContainer },
                      n
                        ? v.a.createElement(
                            w.a,
                            { style: oe.ratioContainer },
                            v.a.createElement(g.a, {
                              accessibilityLabel: Z,
                              borderColor: 'transparent',
                              color: r === i ? 'primary' : 'gray700',
                              hoverLabel: { label: te },
                              icon: v.a.createElement(z, null),
                              onPress: a._setAspectRatio(i),
                              size: 'medium',
                            }),
                            v.a.createElement(g.a, {
                              accessibilityLabel: $,
                              borderColor: 'transparent',
                              color: r === 16 / 9 ? 'primary' : 'gray700',
                              hoverLabel: { label: ne },
                              icon: v.a.createElement(W, null),
                              onPress: a._setAspectRatio(16 / 9),
                              size: 'medium',
                            }),
                            v.a.createElement(g.a, {
                              accessibilityLabel: ee,
                              borderColor: 'transparent',
                              color: 1 === r ? 'primary' : 'gray700',
                              hoverLabel: { label: ae },
                              icon: v.a.createElement(K, null),
                              onPress: a._setAspectRatio(1),
                              size: 'medium',
                            }),
                          )
                        : null,
                      o
                        ? v.a.createElement(
                            w.a,
                            { style: oe.zoomContainer },
                            v.a.createElement(A.a, {
                              accessibilityLabel: J,
                              max: a._maxScale,
                              maxIcon: v.a.createElement(X, { style: oe.icon }),
                              min: 0,
                              minIcon: v.a.createElement(Q, { style: oe.icon }),
                              onChange: a._handleScaleChange,
                              step: 'any',
                              value: a.state.imageScale,
                            }),
                          )
                        : null,
                    )
                  : null
              }),
              h()(l()(a), '_setImageRef', function (e) {
                a._imageRef = e
              }),
              h()(l()(a), '_handleScaleChange', function (e) {
                a.setState({ imageScale: e })
              }),
              h()(l()(a), '_getImageDimensions', function () {
                var e = a.state.imageScale,
                  t = a.props.image.width / a.props.image.height,
                  n = a._getMaskDimensions(),
                  r = n.height,
                  i = n.width,
                  o = T.a.getCoverDimensions({ width: i, height: r }, t),
                  s = o.height
                return { width: o.width * Math.pow(2, e), height: s * Math.pow(2, e) }
              }),
              h()(l()(a), '_getMaskDimensions', function () {
                var e = a.state,
                  t = e.aspectRatio,
                  n = e.containerHeight,
                  r = e.containerWidth,
                  i = T.a.getContainDimensions({ width: r - 50, height: n - 50 }, t),
                  o = i.height
                return { width: i.width, height: o }
              }),
              h()(l()(a), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout,
                  n = t.height,
                  r = t.width
                a.state.containerHeight || a.state.containerWidth
                  ? a.setState({ containerHeight: n, containerWidth: r })
                  : (a.setState({ containerHeight: n, containerWidth: r }), a._setDefaultCropData())
              }),
              h()(l()(a), '_setDefaultCropData', function () {
                var e = a.props,
                  t = e.defaultCropData,
                  n = e.image
                if (t) {
                  var r = a._getImageDimensions().width,
                    i = a._getMaskDimensions().width,
                    o = r / n.width,
                    s = re(i / (t.width * o))
                  a.setState({ imageScale: s })
                  var l = a._getUnscaledCropData(),
                    c = l.left,
                    d = l.top
                  ;(a._panStyles.top = d - t.top * o * Math.pow(2, s)),
                    (a._previousTop = a._panStyles.top),
                    (a._panStyles.left = c - t.left * o * Math.pow(2, s)),
                    (a._previousLeft = a._panStyles.left),
                    a._updateNativeStyles()
                }
              }),
              h()(l()(a), '_handleWheel', function (e, t, n, r) {
                var i = (-1 * t) / 500
                a.setState(function (e) {
                  var t = e.imageScale,
                    o = Math.min(a._maxScale, Math.max(t + i, 0))
                  return (
                    (a._panStyles.left += n * (o - t)),
                    (a._panStyles.top += r * (o - t)),
                    (a._previousLeft = a._panStyles.left),
                    (a._previousTop = a._panStyles.top),
                    { imageScale: o }
                  )
                })
              }),
              h()(l()(a), '_handlePanMove', function (e, t) {
                ;(a._panStyles.left = a._previousLeft + e),
                  (a._panStyles.top = a._previousTop + t),
                  a._updateNativeStyles(),
                  a._adjustToInBounds()
              }),
              h()(l()(a), '_handlePanEnd', function (e, t) {
                ;(a._previousLeft = a._panStyles.left), (a._previousTop = a._panStyles.top)
              }),
              h()(l()(a), '_handlePinchMove', function (e, t, n, r, i) {
                var o = e / 200
                a.setState(function (e) {
                  var s = e.imageScale,
                    l = Math.min(a._maxScale, Math.max(s + o, 0))
                  return (
                    (a._panStyles.left += t * (l - s) + r),
                    (a._panStyles.top += n * (l - s) + i),
                    (a._previousLeft = a._panStyles.left),
                    (a._previousTop = a._panStyles.top),
                    { imageScale: l }
                  )
                })
              }),
              h()(l()(a), '_adjustToInBounds', function () {
                var e = a._getUnscaledCropData(),
                  t = a._getImageDimensions(),
                  n = e.left,
                  r = e.top,
                  i = e.left + e.width - t.width,
                  o = e.top + e.height - t.height,
                  s = !1
                n < 0 && ((s = !0), (a._panStyles.left += n), (a._previousLeft += n)),
                  r < 0 && ((s = !0), (a._panStyles.top += r), (a._previousTop += r)),
                  i > 0 && ((s = !0), (a._panStyles.left += i), (a._previousLeft += i)),
                  o > 0 && ((s = !0), (a._panStyles.top += o), (a._previousTop += o)),
                  s && a._updateNativeStyles()
              }),
              h()(l()(a), '_updateNativeStyles', function () {
                var e = a._panStyles,
                  t = e.left,
                  n = e.top
                a._imageRef &&
                  a._imageRef.setNativeProps({
                    style: { transform: [{ translate3d: ''.concat(t, 'px, ').concat(n, 'px, 0') }] },
                  })
              }),
              h()(l()(a), '_getUnscaledCropData', function () {
                var e = a._getImageDimensions(),
                  t = e.height,
                  n = e.width,
                  r = a._getMaskDimensions(),
                  i = r.height,
                  o = r.width,
                  s = a._panStyles,
                  l = s.left
                return { top: (t - i) / 2 - s.top, left: (n - o) / 2 - l, width: o, height: i }
              }),
              h()(l()(a), '_setAspectRatio', function (e) {
                return function () {
                  a.setState({ aspectRatio: e })
                }
              }),
              (a.state = {
                aspectRatio: e.defaultAspectRatio || e.image.width / e.image.height,
                imageScale: 0,
                containerHeight: 0,
                containerWidth: 0,
              }),
              (a._maxScale = ((i = e.image), Math.max(Math.min(re(i.width / 150), re(i.height / 150), 3), 0.5))),
              a
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.circle,
                    n = e.image,
                    a = e.withZoomControl,
                    r = this._getImageDimensions(),
                    i = r.height,
                    o = r.width,
                    s = this._getMaskDimensions(),
                    l = s.height,
                    c = s.width,
                    d = this.state.containerWidth && this.state.containerHeight
                  return v.a.createElement(
                    w.a,
                    { style: oe.container },
                    v.a.createElement(
                      D,
                      {
                        onLayout: this._handleLayout,
                        onPanEnd: this._handlePanEnd,
                        onPanMove: this._handlePanMove,
                        onPinchMove: a ? this._handlePinchMove : void 0,
                        onWheel: a ? this._handleWheel : void 0,
                        style: oe.root,
                      },
                      d
                        ? v.a.createElement(
                            v.a.Fragment,
                            null,
                            v.a.createElement(_.a, {
                              ref: this._setImageRef,
                              source: { uri: n.src, width: o, height: i },
                              style: oe.image,
                            }),
                            v.a.createElement(x, { circle: t, height: l, width: c }),
                          )
                        : null,
                    ),
                    d ? this._renderControls() : null,
                  )
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  this._updateNativeStyles(), this._adjustToInBounds()
                },
              },
              {
                key: 'getCropData',
                value: function () {
                  var e = this._getImageDimensions().width,
                    t = this.props.image.width / e,
                    n = this._getUnscaledCropData()
                  return {
                    aspectRatio: this.state.aspectRatio,
                    top: Math.round(t * n.top),
                    left: Math.round(t * n.left),
                    width: Math.round(t * n.width),
                    height: Math.round(t * n.height),
                  }
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(ie, 'defaultProps', { circle: !1, withZoomControl: !0 })
      var oe = C.a.create(function (e) {
        return {
          container: { flexGrow: 1, flexShrink: 1 },
          controlsContainer: {
            backgroundColor: e.colors.navigationBackground,
            minHeight: e.spaces.space20,
            flexDirection: 'row',
            paddingVertical: e.spaces.space4,
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center',
          },
          ratioContainer: {
            flexBasis: 0,
            flexGrow: 1,
            flexShrink: 0,
            flexDirection: 'row',
            justifyContent: 'space-around',
          },
          zoomContainer: {
            flexBasis: 0,
            flexGrow: 1,
            flexShrink: 1,
            justifyContent: 'center',
            height: e.spaces.space40,
            paddingHorizontal: e.spaces.space20,
            maxWidth: 400,
          },
          root: {
            flexGrow: 1,
            flexShrink: 1,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'move',
          },
          image: { position: 'absolute' },
          icon: { color: e.colors.gray700 },
        }
      })
      t.a = ie
    },
    '45mF': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      n('2G9S')
      var a = n('1YZw'),
        r = n('pXBW'),
        i = n('3XMw'),
        o = n.n(i),
        s = n('SrIh'),
        l = o.a.a5d4fda0,
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return {
            customErrorHandler: function (n) {
              var i = n.context
              return (
                !n instanceof r.a && (n.message = 'Strato error occurred in '.concat(i.id, ': ').concat(i.action)),
                Object(s.a)(n, { extra: { context: i, isStrato: !0 } }),
                t ? Object(a.b)({ text: e }) : []
              )
            },
          }
        }
    },
    '474o': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return r
        }),
        n.d(t, 'c', function () {
          return i
        })
      n('yH/f')
      var a = Object.freeze({ profile_location: 'profile_location', tweet_compose_location: 'tweet_compose_location' }),
        r = Object.freeze({ foursquare: 'foursquare', yelp: 'yelp' }),
        i = Object.freeze({ initial: 'initial', lastSearch: 'lastSearch' })
    },
    '4bHO': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('ho0z')
      var a = function (e, t) {
        switch (e.type) {
          case 'user':
            return '@'.concat('users' === t ? e.data.screen_name : e.data.name, ' ')
          case 'hashtag':
          case 'topic':
          case 'event':
            return ''.concat(e.data.topic, ' ')
          case 'dm_conversation':
            return ''.concat(e.data.name, ' ')
          case 'no_result':
            return ''.concat(e.data.text, ' ')
          default:
            return ''
        }
      }
    },
    '5emT': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
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
                d: 'M14.548 11.634c-1.207 0-2.188-.98-2.188-2.188 0-.664.302-1.25.77-1.653-.363-.097-.736-.165-1.13-.165-2.416 0-4.375 1.96-4.375 4.376S9.585 16.38 12 16.38c2.418 0 4.377-1.96 4.377-4.376 0-.4-.07-.78-.17-1.146-.402.47-.992.776-1.66.776z',
              }),
              o.a.createElement('path', {
                d: 'M12 19.79c-7.228 0-10.12-6.724-10.24-7.01-.254-.466-.254-1.105.035-1.642C1.88 10.923 4.772 4.2 12 4.2s10.12 6.723 10.24 7.01c.254.465.254 1.104-.035 1.64-.085.216-2.977 6.94-10.205 6.94zm0-14c-6.154 0-8.668 5.787-8.772 6.033-.068.135-.068.208-.033.273.137.316 2.65 6.104 8.805 6.104 6.18 0 8.747-5.973 8.772-6.033.07-.136.07-.21.034-.274-.138-.316-2.652-6.103-8.806-6.103z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    '6XNv': function (e, t, n) {
      'use strict'
      var a = n('RhWx'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        s = n('Y9Ll'),
        l = n.n(s),
        c = n('1Pcy'),
        d = n.n(c),
        u = n('5Yy7'),
        p = n.n(u),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        v = n.n(f),
        g = n('yiKp'),
        y = n.n(g),
        b = (n('lTEL'), n('7x/C'), n('LqLs'), n('87if'), n('kYxP'), n('7xRU'), n('z84I'), n('2G9S'), n('ERkP')),
        _ = n.n(b),
        C = n('t62R'),
        w = n('piX5'),
        E = n('4r2z'),
        x = n('FG+G'),
        T = n('rHpw'),
        S = n('k/Ka'),
        I = n('shC7'),
        R = n('MWbm'),
        M = _.a.forwardRef(function (e, t) {
          return Object(S.a)('select', y()(y()({}, e), {}, { ref: t }))
        }),
        k = function (e) {
          return Object(S.a)('option', e)
        },
        P = 1,
        L = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e) {
            var a
            return (
              o()(this, n),
              (a = t.call(this, e)),
              v()(d()(a), '_selectRef', _.a.createRef()),
              v()(d()(a), 'state', { isFocused: !1 }),
              v()(d()(a), '_handleChange', function (e) {
                var t = a.props,
                  n = t.onChange,
                  r = t.withEmptyOption,
                  i = e.target,
                  o = i.selectedIndex,
                  s = i.value
                n && n(s, o - (r ? 1 : 0))
              }),
              v()(d()(a), '_handleBlur', function (e) {
                var t = a.props.onBlur
                a.setState({ isFocused: !1 }), t && t()
              }),
              v()(d()(a), '_handleFocus', function (e) {
                var t = a.props.onFocus
                a.setState({ isFocused: !0 }), t && t()
              }),
              (a._id = 'SELECTOR_'.concat(P)),
              (a._errorID = ''.concat(a._id, '_ERROR')),
              (a._helperID = ''.concat(a._id, '_HELP')),
              (a._labelID = ''.concat(a._id, '_LABEL')),
              (P += 1),
              a
            )
          }
          return (
            l()(n, [
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
                    n = e.disabled,
                    a = e.errorText,
                    i = e.hasError,
                    o = e.helperText,
                    s = e.options,
                    l = e.style,
                    c = e.testID,
                    d = e.value,
                    u = e.withEmptyOption,
                    p = this.state.isFocused,
                    m = C.b.getLanguage(),
                    h =
                      'ja' === m
                        ? T.a.theme.fontFamilies.japan
                        : I.a.getConstants().isRTL || E.a.isLocaleRTL(m)
                        ? T.a.theme.fontFamilies.rtl
                        : T.a.theme.fontFamilies.normal,
                    f = void 0 === i ? !!a : i,
                    v = new Set()
                  a && v.add(this._errorID), t && v.add(t), o && v.add(this._helperID)
                  var g = v.size ? r()(v).join(' ') : void 0
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    _.a.createElement(
                      R.a,
                      {
                        style: [
                          w.a.border,
                          D.container,
                          n && w.a.disabled,
                          p && w.a.focusedBorderValid,
                          f && w.a.invalidBorderColor,
                          p && f && w.a.focusedBorderInvalid,
                          l,
                        ],
                      },
                      this._renderLabel(),
                      _.a.createElement(
                        M,
                        {
                          accessibilityDescribedBy: g,
                          accessibilityInvalid: f,
                          accessibilityLabelledBy: this._labelID,
                          disabled: n,
                          nativeID: this._id,
                          onBlur: this._handleBlur,
                          onChange: this._handleChange,
                          onFocus: this._handleFocus,
                          ref: this._selectRef,
                          style: [D.select, { fontFamily: h }, n && w.a.disabled],
                          testID: c || '',
                          value: d,
                        },
                        u ? _.a.createElement(k, { disabled: !0, style: D.option, value: '' }) : null,
                        s.map(function (e) {
                          var t = e.disabled,
                            n = e.label,
                            a = e.value
                          return _.a.createElement(
                            k,
                            { disabled: t, key: ''.concat(n, '-').concat(a), style: D.option, value: a },
                            n,
                          )
                        }),
                      ),
                      _.a.createElement(x.a, {
                        style: [D.dropdownCaret, p && w.a.validColor, (i || a) && w.a.invalidColor],
                      }),
                    ),
                    o ? this._renderHelperText() : null,
                    f && a ? this._renderErrorText() : null,
                  )
                },
              },
              {
                key: '_renderLabel',
                value: function () {
                  var e = this.props,
                    t = e.errorText,
                    n = e.hasError,
                    a = e.label,
                    r = this.state.isFocused
                  return _.a.createElement(
                    C.b,
                    {
                      accessibilityRole: 'label',
                      color: n || t ? 'red500' : r ? 'primary' : 'gray700',
                      nativeID: this._labelID,
                      style: D.label,
                    },
                    a,
                  )
                },
              },
              {
                key: '_renderHelperText',
                value: function () {
                  return _.a.createElement(
                    R.a,
                    { accessibilityLiveRegion: 'polite' },
                    _.a.createElement(
                      C.b,
                      { color: 'gray700', nativeID: this._helperID, style: D.helperText },
                      this.props.helperText,
                    ),
                  )
                },
              },
              {
                key: '_renderErrorText',
                value: function () {
                  return _.a.createElement(
                    R.a,
                    { accessibilityLiveRegion: 'polite' },
                    _.a.createElement(
                      C.b,
                      { color: 'red500', nativeID: this._errorID, style: D.helperText },
                      this.props.errorText,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.PureComponent)
      v()(L, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (L.propTypes = {})
      var D = T.a.create(function (e) {
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
      t.a = L
    },
    '7myi': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('849X'), n('TJCb'), n('M+/F'), n('ERkP')),
        v = n.n(f),
        g = n('oEoC'),
        y = n('2dXj'),
        b = n('4bHO'),
        _ = n('dzqK'),
        C = n('GZwR'),
        w = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), '_genericWrapperRef', v.a.createRef()),
              h()(l()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              h()(l()(e), 'render', function () {
                var t = e.props,
                  n = t.children,
                  a = t.contextText,
                  r = t.isInline,
                  i = t.isInlineReply,
                  o = t.onTypeaheadStateChange,
                  s = t.source,
                  l = e.state,
                  c = l.canShowTypeahead,
                  d = l.queryContext,
                  u = c && d ? { word: d.word, resultType: d.resultType } : void 0
                return v.a.createElement(
                  y.a,
                  {
                    contextText: a,
                    isInline: r,
                    isInlineReply: i,
                    onDismiss: e._handleDismiss,
                    onSelectItem: e._handleSelectItem,
                    onTypeaheadStateChange: o,
                    query: u,
                    ref: e._genericWrapperRef,
                    source: s || C.d.Compose,
                  },
                  n(e._handleInputChange),
                )
              }),
              h()(l()(e), '_handleSelectItem', function (t) {
                var n = e.props.onTextUpdated,
                  a = e.state.queryContext
                if (a) {
                  var r = Object(b.a)(t, a.resultType),
                    i = e._replaceToken(r, a),
                    o = i.newCursor,
                    s = i.newTweetText
                  n({ target: { value: s } }), e._updateDOMTextArea(o, s)
                }
                e._setQueryContext(void 0)
              }),
              h()(l()(e), '_updateDOMTextArea', function (t, n) {
                e._textAreaRef &&
                  ((e._textAreaRef.value = n),
                  (e._textAreaRef.selectionStart = t),
                  (e._textAreaRef.selectionEnd = t),
                  e._textAreaRef.focus())
              }),
              h()(l()(e), '_handleInputChange', function (t) {
                if (Object(_.a)(t))
                  throw new Error('PlainTextTypeaheadComposeWrapper cannot handle rich text input changes')
                var n = t && (t.currentTarget || t.target),
                  a = e.state.queryContext
                e._textAreaRef = n
                var r = a && a.word,
                  i = n.value,
                  o = g.c(n.selectionStart, i),
                  s = o.end,
                  l = o.start,
                  c = o.word,
                  d = g.e(c || '', 'compose')
                if ((null == d ? void 0 : d.q) !== r)
                  if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === l))
                    e._setQueryContext(void 0)
                  else if (d) {
                    var u = d.q,
                      p = d.result_type
                    e._setQueryContext({ word: u, resultType: p, fullText: n.value, startIndex: l, endIndex: s })
                  } else e._setQueryContext(void 0)
              }),
              h()(l()(e), '_setQueryContext', function (t) {
                return e.setState({ queryContext: t, canShowTypeahead: !!t })
              }),
              h()(l()(e), '_handleDismiss', function () {
                return e.setState({ canShowTypeahead: !1 })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: '_replaceToken',
                value: function (e, t) {
                  var n = t.endIndex,
                    a = t.fullText,
                    r = t.startIndex,
                    i = a.slice(0, r)
                  return { newTweetText: i + e + a.slice(n), newCursor: i.length + e.length }
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      t.a = w
    },
    '8A5z': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
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
                d: 'M9.008 15.205c-1.766 0-3.187-1.35-3.187-3.196v-.02c0-1.8 1.388-3.214 3.26-3.214 1.26 0 2.075.53 2.62 1.29L10.494 11c-.306-.42-.798-.695-1.357-.695-.93 0-1.684.754-1.684 1.684s.755 1.684 1.685 1.684c.578 0 1.087-.292 1.39-.735l1.22.87c-.583.802-1.368 1.394-2.737 1.394h-.002zm6.582 0c-1.764 0-3.185-1.35-3.185-3.196v-.02c0-1.8 1.386-3.214 3.258-3.214 1.262 0 2.075.53 2.622 1.29l-1.21.935c-.305-.42-.797-.694-1.356-.694-.93 0-1.685.754-1.685 1.684s.754 1.685 1.684 1.685c.577 0 1.086-.292 1.39-.735l1.22.87c-.584.803-1.37 1.395-2.738 1.395z',
              }),
              o.a.createElement('path', {
                d: 'M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    '9Q4p': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return b
      })
      n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('GTeL'),
        o = n('3XMw'),
        s = n.n(o),
        l = n('MWbm'),
        c = n('PbQQ'),
        d = n('6vad'),
        u = n('e0ey'),
        p = n('rHpw'),
        m = n('ZkMC'),
        h = s.a.j9cf595f,
        f = s.a.d69a782e,
        v = s.a.faf745f9,
        g = s.a.b96e6682,
        y = s.a.h2437f25
      function b(e) {
        var t = e.currentWarnings,
          n = e.mediaItem,
          a = e.onWarningChange,
          o = e.orientedImage,
          s = [
            { label: v, value: 'adult_content' },
            { label: g, value: 'graphic_violence' },
            { label: y, value: 'other' },
          ],
          p = c.b.useOpaqueIdentifier(),
          b = r.a.createElement(i.a, { mediaItem: n, orientedImage: o })
        return r.a.createElement(
          l.a,
          { style: _.root },
          r.a.createElement(
            l.a,
            { style: _.modalContainer },
            null != t && t.size
              ? r.a.createElement(
                  m.a,
                  { revealableTombstoneConfig: m.c, sensitiveMediaWarnings: t, withRoundedCorners: !1 },
                  b,
                )
              : b,
            r.a.createElement(d.b, { nativeID: p, subtext: f, text: h }),
            r.a.createElement(
              l.a,
              { accessibilityLabelledBy: p, accessibilityRole: 'group' },
              s.map(function (e) {
                var n = e.label,
                  i = e.value
                return r.a.createElement(u.a, { checked: t && t.has(i), key: i, label: n, name: i, onChange: a })
              }),
            ),
          ),
        )
      }
      var _ = p.a.create(function (e) {
        return {
          modalContainer: { width: '100%', height: '100%', flexGrow: 1 },
          root: { display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', height: '100%', flexGrow: 1 },
        }
      })
    },
    CDB5: function (e, t, n) {
      'use strict'
      n.d(t, 'm', function () {
        return M
      }),
        n.d(t, 'l', function () {
          return P
        }),
        n.d(t, 'f', function () {
          return D
        }),
        n.d(t, 'd', function () {
          return O
        }),
        n.d(t, 'g', function () {
          return F
        }),
        n.d(t, 'e', function () {
          return V
        }),
        n.d(t, 'i', function () {
          return j
        }),
        n.d(t, 'j', function () {
          return U
        }),
        n.d(t, 'k', function () {
          return z
        }),
        n.d(t, 'h', function () {
          return H
        }),
        n.d(t, 'a', function () {
          return G
        }),
        n.d(t, 'b', function () {
          return q
        }),
        n.d(t, 'c', function () {
          return Q
        })
      var a = n('RhWx'),
        r = n.n(a),
        i = n('ddV6'),
        o = n.n(i),
        s = n('m3Bd'),
        l = n.n(s),
        c = n('KEM+'),
        d = n.n(c),
        u = n('yiKp'),
        p = n.n(u),
        m =
          (n('TJCb'),
          n('7x/C'),
          n('DZ+c'),
          n('7xRU'),
          n('lTEL'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          n('2G9S'),
          n('1IsZ'),
          n('AspN')),
        h = n('xPna'),
        f = n('oEOe'),
        v = n('xCUF'),
        g = n('ude7'),
        y = n('07FG'),
        b = n('Ssj5'),
        _ = n('fEA7'),
        C = n.n(_),
        w = n('uKEd'),
        E = n('lnti'),
        x = n('/NU0'),
        T = [
          'senderId',
          'cardUrl',
          'conversationId',
          'localMediaId',
          'recipients',
          'requestId',
          'tweetAttachment',
          'quickReply',
        ],
        S = 'dmComposer',
        I = {}
      var R = function (e) {
          var t = e.conversation_id,
            n = e.id,
            a = e.localMediaId,
            r = e.recipient_ids,
            i = e.sender_id,
            o = e.text,
            s = e.attachment,
            l = void 0 === s ? {} : s,
            c = e.error,
            d = Date.now().toString()
          return {
            conversation_id: t,
            recipient_ids: r,
            error: c,
            id: n,
            is_draft: !0,
            message_data: { attachment: l, localMediaId: a, sender_id: i, text: o, time: d },
            type: 'message',
            time: d,
          }
        },
        M = function (e) {
          return function (t, n, a) {
            var i = a.api,
              s = e || {},
              c = s.senderId,
              d = s.cardUrl,
              u = s.conversationId,
              b = s.localMediaId,
              _ = s.recipients,
              S = void 0 === _ ? [] : _,
              I = s.requestId,
              M = void 0 === I ? C.a.v1() : I,
              k = s.tweetAttachment,
              P = s.quickReply,
              L = l()(s, T)
            t(Z(u))
            var D = n(),
              A = b || N(n(), u),
              F = m.k(D, A),
              B = o()(F, 1)[0] || {},
              V = B.mediaFile,
              j = B.mediaMetadata,
              U = S.length > 0 && S.join(','),
              z = {}
            V && V.isGif
              ? (z.extraInitParams = '&media_category=dm_gif')
              : V && V.isVideo && (z.extraInitParams = '&media_category=dm_video')
            var W = m.p(A, z),
              G = [t(W)],
              K = (H(D, u) || {}).found_media_origin
            return (
              V && V.isGif && G.push(Object(g.a)(V)),
              Promise.all(G).then(
                function (n) {
                  var a = o()(n, 2),
                    s = o()(a[0], 1)[0],
                    l = a[1],
                    g = (null == j ? void 0 : j.altText) || (null == j ? void 0 : j.defaultAltText),
                    b = !!g
                  return (
                    s && (K || b)
                      ? t(m.m(p()({ media_id: s.uploadId, found_media_origin: K }, !!b && { alt_text: { text: g } })))
                      : Promise.resolve()
                  ).then(
                    function () {
                      var n = (k || {}).id_str,
                        a = {}
                      if (s) {
                        var o = s.mediaFile,
                          m = void 0 === o ? {} : o,
                          g = {
                            original_info: { width: m.width, height: m.height },
                            sizes: [{ h: m.height, w: m.width, resize: 'fit' }],
                          }
                        m.isImage
                          ? (a.photo = p()(p()({}, g), {}, { media_url_https: m.url }))
                          : m.isGif
                          ? (a.animated_gif = p()(p()({}, g), {}, { media_url_https: l, type: 'animated_gif' }))
                          : m.isVideo && (a.video = p()(p()({}, g), {}, { media_url_https: m.url, type: 'video' }))
                      } else k && (a.tweet = { status: n })
                      var b = (s || {}).uploadId,
                        _ = R({
                          attachment: a,
                          conversation_id: u,
                          id: M,
                          recipient_ids: U,
                          sender_id: c,
                          text: e.text,
                        }),
                        C = p()(
                          p()(
                            p()(p()({}, L), Object(y.a)(d) && { card_uri: d }),
                            {},
                            { conversation_id: u },
                            !n && { media_id: b },
                          ),
                          {},
                          { recipient_ids: U, request_id: M, tweet_id: n },
                        )
                      P &&
                        ((C['quick_reply_response[options][id]'] = P.id),
                        (C['quick_reply_response[options][selected_id]'] = P.selected_id))
                      var T = Object(E.a)([
                        ee(u),
                        { type: v.c.REQUEST },
                        { type: 'rweb/dmComposer/SEND_MESSAGE_REQUEST' },
                        u && Object(w.b)(u, M, _),
                      ])
                      return (
                        t(T),
                        i.DirectMessages.sendMessage(C).then(
                          function (n) {
                            var a = n.entities,
                              i = a.cards,
                              o = a.entries,
                              s = a.tweets,
                              l = a.users,
                              c = n.result.conversations
                            Object(x.a)(A) && t(Q(u, A))
                            var d = Object(E.a)(
                              [{ type: v.c.SUCCESS }].concat(
                                r()(Object(h.a)({ conversations: c, entries: o, users: l, tweets: s, cards: i })),
                                [{ type: 'rweb/dmComposer/SEND_MESSAGE_SUCCESS' }, u && Object(w.j)(u, M, e), O(u)],
                              ),
                            )
                            return t(d), Promise.resolve(Object.values(n.entities.entries)[0].conversation_id)
                          },
                          function (n) {
                            var r = R({
                                attachment: a,
                                conversation_id: u,
                                error: !0,
                                id: M,
                                localMediaId: A,
                                recipient_ids: U,
                                sender_id: c,
                                text: e.text,
                              }),
                              i = Object(E.a)([
                                { type: v.c.SUCCESS },
                                { type: 'rweb/dmComposer/SEND_MESSAGE_FAILURE' },
                                u && Object(w.b)(u, M, r),
                              ])
                            return t(i), Object(f.e)(t, n, 'ACTION_SEND_DM')
                          },
                        )
                      )
                    },
                    function (e) {
                      return t(ne(u)), (e.type = 'metadata'), Promise.reject(e)
                    },
                  )
                },
                function (e) {
                  return t(Object(E.a)([Object(x.a)(A) && Q(u, A), ne(u)])), Promise.reject(e)
                },
              )
            )
          }
        },
        k = function (e, t) {
          return e.dmComposer[t]
        },
        P = function (e, t) {
          var n = k(e, t)
          return n ? n.text : null
        },
        L = 'rweb/dmComposer/SAVE_TEXT',
        D = function (e, t) {
          return { type: L, conversationId: e, text: t }
        },
        A = 'rweb/dmComposer/REMOVE_TEXT',
        O = function (e) {
          return { type: A, conversationId: e }
        },
        F = function (e, t) {
          var n = k(e, t)
          return n ? n.cardUrl : null
        },
        B = 'rweb/dmComposer/SAVE_CARD_URL',
        V = function (e, t) {
          return { type: B, conversationId: e, cardUrl: t }
        },
        N = function (e, t) {
          var n = k(e, t)
          return n ? n.mediaId : null
        },
        j = function (e, t) {
          var n = m.k(e, N(e, t))
          return n.length > 0 ? n[0] : null
        },
        U = function (e, t) {
          var n = k(e, t)
          return !!n && n.isUploading
        },
        z = function (e, t) {
          return m.l(e, N(e, t))
        },
        H = function (e, t) {
          var n = k(e, t)
          return n ? n.gifMetadata : null
        },
        W = 'rweb/dmComposer/ADD_MEDIA',
        G = function (e, t, n) {
          return { payload: { isUploading: !1, mediaId: o()(t, 1)[0], gifMetadata: n }, type: W, conversationId: e }
        },
        K = 'rweb/dmComposer/CANCEL_UPLOAD',
        q = function (e) {
          return { type: K, conversationId: e }
        },
        X = 'rweb/dmComposer/REMOVE_MEDIA',
        Y = function (e) {
          return { type: X, conversationId: e }
        },
        Q = function (e, t) {
          return function (n) {
            n(m.i(t)), n([q(e), Y(e)])
          }
        },
        J = 'rweb/dmComposer/UPLOAD_REQUEST',
        Z = function (e) {
          return { type: J, conversationId: e }
        },
        $ = 'rweb/dmComposer/UPLOAD_SUCCESS',
        ee = function (e) {
          return { type: $, conversationId: e }
        },
        te = 'rweb/dmComposer/UPLOAD_FAILURE',
        ne = function (e) {
          return { type: te, conversationId: e }
        }
      b.a.register(
        d()({}, S, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.conversationId || 'new_group'
          switch (t.type) {
            case W:
              var a = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, a), t.payload)))
            case J:
              var r = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, r), {}, { isUploading: !0 })))
            case K:
              var i = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, i), {}, { isUploading: !1 })))
            case te:
            case $:
            case X:
              var o = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(
                p()({}, e),
                {},
                d()({}, n, p()(p()({}, o), {}, { isUploading: !1, mediaId: null, gifMetadata: void 0 })),
              )
            case L:
              var s = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, s), {}, { text: t.text })))
            case B:
              var l = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, l), {}, { cardUrl: t.cardUrl })))
            case A:
              var c = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, c), {}, { text: null })))
            default:
              return e
          }
        }),
      )
    },
    Drq4: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
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
              o.a.createElement('circle', { cx: '12', cy: '6.674', r: '1.889' }),
              o.a.createElement('path', {
                d: 'M9.828 14.817l-1.62 3.342c-.138.41.083.857.495.995s.858-.083.996-.495l1.602-3.176c.28-.557 1.076-.556 1.356 0l1.608 3.195c.138.41.584.632.996.494.412-.138.633-.584.495-.996l-1.62-3.342.032.07-.123-.262c-.483-1.027-.535-2.19-.16-3.24.106-.302.392-.505.712-.505h2.032c.434 0 .786-.353.786-.787 0-.434-.352-.786-.786-.786H7.37c-.435 0-.787.352-.787.786 0 .434.352.786.786.786h1.985c.32 0 .606.2.713.503.374 1.05.323 2.214-.158 3.24l-.125.263',
              }),
              o.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    EeFI: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        s = n('Y9Ll'),
        l = n.n(s),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('ERkP'),
        h = n.n(m),
        f = n('3XMw'),
        v = n.n(f),
        g = n('MWbm'),
        y = n('Qwev'),
        b = n('21U8'),
        _ = n('rHpw'),
        C = n('1auM'),
        w = n('eYns'),
        E = v.a.gff1f69e,
        x = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return o()(this, n), ((a = t.call(this, e)).state = { orientedImage: null }), a
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = (this.props.media || {}).originalMediaFile,
                    n = void 0 === t ? {} : t
                  n &&
                    n instanceof C.a &&
                    Object(w.b)(n).then(function (t) {
                      return new C.a(t).withDimensionsAndOrientation().then(function (t) {
                        e.setState({ orientedImage: t })
                      })
                    })
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.state.orientedImage
                    ? this._renderCropper()
                    : h.a.createElement(y.a, { accessibilityLabel: E, style: T.activityIndicator })
                },
              },
              {
                key: '_renderCropper',
                value: function () {
                  var e = this.props,
                    t = e.cropperRef,
                    n = e.defaultAspectRatio,
                    a = e.defaultCropData,
                    r = e.media,
                    i = e.withAspectRatioOptions,
                    o = e.withZoomControl,
                    s = this.state.orientedImage,
                    l = r || {},
                    c = l.cropData,
                    d = l.originalMediaFile,
                    u = void 0 === d ? {} : d
                  return s
                    ? h.a.createElement(
                        g.a,
                        { style: T.cropper },
                        h.a.createElement(b.a, {
                          circle: this.props.circle,
                          defaultAspectRatio: (a && a.aspectRatio) || (c && c.aspectRatio) || n,
                          defaultCropData: a || c,
                          image: { src: s.url, width: u.width, height: u.height },
                          ref: t,
                          withAspectRatioOptions: i,
                          withZoomControl: o,
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(h.a.Component),
        T = _.a.create(function (e) {
          return {
            cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 },
            activityIndicator: { flexGrow: 1 },
          }
        })
      t.a = h.a.forwardRef(function (e, t) {
        return h.a.createElement(x, r()({}, e, { cropperRef: t }))
      })
    },
    GTeL: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        s = n('pKoL'),
        l = n('Qwev'),
        c = n('rHpw'),
        d = n('U+bB'),
        u = n('MWbm'),
        p = o.a.gff1f69e
      var m = c.a.create(function (e) {
        return {
          activityIndicator: { height: '100%', width: '100%' },
          image: { width: '100%', flexGrow: 1 },
          mediaContainer: { overflow: 'hidden', flexGrow: 1, flexBasis: 0, width: '100%' },
          mediaPreviewWrapper: {
            flexDirection: 'column',
            flexGrow: 1,
            alignItems: 'center',
            width: '100%',
            paddingVertical: 25,
            paddingHorizontal: 25,
            backgroundColor: e.colors.gray0,
          },
        }
      })
      t.a = function (e) {
        var t = e.mediaItem,
          n = e.orientedImage
        return r.a.createElement(
          u.a,
          { style: m.mediaPreviewWrapper },
          void 0 === n && t
            ? r.a.createElement(s.a, {
                imageResizeMode: 'contain',
                mediaItem: t,
                style: m.mediaContainer,
                withCloseButton: !1,
              })
            : n
            ? r.a.createElement(d.a, { resizeMode: 'contain', source: n.url, style: m.image })
            : r.a.createElement(l.a, { accessibilityLabel: p, style: m.activityIndicator }),
        )
      }
    },
    JFx8: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
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
                viewBox: '0 0 158 20',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M1.29 9.333v3.992H0V4.31h3.412c.876 0 1.443.22 1.88.593.54.464.89 1.147.89 1.92 0 .772-.35 1.454-.89 1.918-.437.375-1.004.593-1.88.593H1.29M3.35 8.11c.618 0 .953-.155 1.185-.4.22-.23.36-.54.36-.888s-.142-.657-.36-.888c-.232-.245-.567-.4-1.185-.4H1.29V8.11h2.06zm6.155-.966c1.79 0 3.13 1.352 3.13 3.155 0 1.802-1.34 3.154-3.13 3.154-1.79 0-3.13-1.352-3.13-3.155 0-1.803 1.34-3.156 3.13-3.156m0 5.152c1.12 0 1.906-.89 1.906-1.996 0-1.108-.785-1.996-1.905-1.996S7.6 9.192 7.6 10.3c0 1.107.784 1.996 1.905 1.996zm9.025-5.021l1.662 4.134 1.66-4.134h1.263l-2.46 6.053h-.85l-1.7-4.25-1.7 4.25h-.85l-2.458-6.053h1.262l1.66 4.134 1.66-4.134h.85m6.091 3.284c.065 1.017.903 1.83 1.958 1.83.902 0 1.39-.44 1.738-.825l.8.76c-.452.58-1.315 1.133-2.55 1.133-1.765 0-3.13-1.34-3.13-3.155 0-1.816 1.236-3.155 2.95-3.155 1.686 0 2.91 1.365 2.91 3.155 0 .05 0 .142-.013.258H24.62m.104-1.03h3.297c-.18-.774-.875-1.315-1.596-1.315-.786 0-1.494.528-1.7 1.314zm9.066-1.173c-.143-.04-.284-.052-.477-.052-.63 0-1.3.438-1.636 1.018v4.006h-1.223V7.273h1.185v.695c.295-.412.926-.824 1.815-.824.13 0 .335.013.476.04l-.14 1.17m1.647 2.203c.064 1.017.902 1.83 1.957 1.83.902 0 1.39-.44 1.738-.825l.8.76c-.452.58-1.314 1.133-2.55 1.133-1.765 0-3.13-1.34-3.13-3.155 0-1.816 1.236-3.155 2.95-3.155 1.686 0 2.91 1.365 2.91 3.155 0 .05 0 .142-.013.258h-4.663m.103-1.03h3.297c-.18-.774-.876-1.315-1.597-1.315-.786 0-1.494.528-1.7 1.314zm10.534 3.244c-.49.438-1.146.682-1.867.682-.54 0-1.108-.154-1.52-.4-.915-.54-1.545-1.544-1.545-2.755 0-1.212.645-2.23 1.56-2.77.41-.245.913-.386 1.48-.386.657 0 1.314.206 1.854.657V4.183h1.223v9.143h-1.185v-.553m-.038-3.606c-.373-.49-.992-.863-1.726-.863-1.172 0-1.945.94-1.945 1.996 0 1.08.837 1.995 2.01 1.995.617 0 1.248-.31 1.66-.863V9.166zm7.815 4.159h-1.185V4.182h1.224v3.62c.54-.452 1.196-.658 1.853-.658.567 0 1.07.142 1.48.386.915.54 1.56 1.558 1.56 2.77 0 1.21-.632 2.214-1.546 2.755-.412.245-.98.4-1.52.4-.72 0-1.378-.245-1.867-.683v.554m.04-1.893c.41.554 1.042.863 1.66.863 1.172 0 2.01-.914 2.01-1.996 0-1.056-.773-1.996-1.946-1.996-.734 0-1.352.374-1.725.863v2.266zm6.296 4.983l1.635-3.72-2.588-5.423h1.313l1.893 3.992 1.74-3.992h1.287l-3.98 9.143h-1.3m39.407-8.563v1.223H96.63v4.25h-1.288V4.31h5.15v1.225H96.63v2.318h2.962m4.223-.709c1.79 0 3.13 1.352 3.13 3.155 0 1.802-1.34 3.154-3.13 3.154-1.79 0-3.13-1.352-3.13-3.155 0-1.803 1.34-3.156 3.13-3.156m0 5.152c1.12 0 1.906-.89 1.906-1.996 0-1.108-.784-1.996-1.905-1.996-1.12 0-1.906.89-1.906 1.996 0 1.107.785 1.996 1.905 1.996zm4.841.143c-.374-.464-.554-1.056-.554-2.073v-3.09h1.223v3.283c0 .618.13.953.348 1.21.27.322.708.528 1.172.528.747 0 1.352-.45 1.7-.863v-4.16h1.223v6.052h-1.185v-.554c-.27.258-.94.682-1.777.682-.862.002-1.648-.384-2.15-1.015m10.25-4.082c-.142-.04-.283-.052-.476-.052-.63 0-1.3.438-1.636 1.018v4.006h-1.223V7.273h1.186v.695c.297-.412.927-.824 1.816-.824.13 0 .335.013.477.04l-.144 1.17m1.48 3.362c.567.438 1.185.67 1.79.67.528 0 1.056-.283 1.056-.76 0-.695-1.005-.734-1.893-1.03-.735-.244-1.392-.708-1.392-1.558 0-1.3 1.16-1.893 2.24-1.893.89 0 1.533.283 2.01.67l-.63.876c-.374-.282-.812-.475-1.302-.475-.592 0-1.095.283-1.095.76 0 .412.477.554 1.083.708.953.245 2.202.67 2.202 1.92 0 1.145-1.07 1.853-2.254 1.853-.965 0-1.776-.296-2.446-.837l.632-.904m8.228 1.738c-.54 0-1.108-.154-1.52-.4-.914-.54-1.545-1.544-1.545-2.755 0-1.212.644-2.23 1.558-2.77.412-.245.914-.386 1.48-.386.684 0 1.34.206 1.894.682v-.553h1.185v9.143h-1.224v-3.62c-.49.427-1.107.658-1.828.658m1.828-4.288c-.373-.49-.99-.863-1.726-.863-1.172 0-1.944.94-1.944 1.996 0 1.08.837 1.995 2.01 1.995.617 0 1.248-.31 1.66-.863V9.166zm3.45 3.272c-.374-.464-.554-1.056-.554-2.073v-3.09h1.223v3.283c0 .618.128.953.347 1.21.27.322.708.528 1.172.528.747 0 1.352-.45 1.7-.863v-4.16h1.223v6.052h-1.185v-.554c-.27.258-.94.682-1.777.682-.862.002-1.647-.384-2.15-1.015m11.333.335c-.49.438-1.146.682-1.867.682-.54 0-1.107-.154-1.52-.4-.914-.54-1.545-1.544-1.545-2.755 0-1.212.644-2.23 1.558-2.77.413-.245.916-.386 1.482-.386.683 0 1.34.206 1.893.682v-.553h1.185v6.052h-1.185v-.553m-.04-3.606c-.372-.49-.99-.863-1.724-.863-1.17 0-1.944.94-1.944 1.996 0 1.08.837 1.995 2.01 1.995.617 0 1.248-.31 1.66-.863V9.166zm6.232-.81c-.142-.04-.283-.052-.476-.052-.63 0-1.3.438-1.636 1.018v4.006h-1.223V7.273h1.185v.695c.297-.412.927-.824 1.816-.824.13 0 .335.013.477.04l-.142 1.17m1.905 2.203c.065 1.017.902 1.83 1.957 1.83.903 0 1.392-.44 1.74-.825l.797.76c-.45.58-1.313 1.133-2.55 1.133-1.764 0-3.13-1.34-3.13-3.155 0-1.816 1.237-3.155 2.95-3.155 1.687 0 2.91 1.365 2.91 3.155 0 .05 0 .142-.013.258h-4.66m.102-1.03h3.297c-.18-.774-.876-1.315-1.597-1.315-.785 0-1.493.528-1.7 1.314zM86.48 0H75.813C74.34 0 73.91 1.107 73.91 1.805v16.947c0 .786.42 1.077.658 1.173.237.097.892.177 1.284-.276 0 0 5.105-5.863 5.188-5.954.08-.09.17-.092.22-.092h3.234c1.37 0 1.59-.992 1.732-1.567.12-.48 1.455-7.32 1.9-9.488C88.466.89 88.046 0 86.48 0m-.254 12.037c.12-.48 1.455-7.32 1.9-9.488m-2.275.337l-.447 2.333c-.053.253-.302.49-.596.49l-4.156-.005c-.467 0-.87.352-.87.82v.508c0 .467.38.85.85.85h3.524c.33 0 .608.31.537.663-.07.353-.438 2.216-.48 2.41-.04.192-.246.454-.576.454h-2.878c-.598.02-.726.023-1.077.46-.352.435-3.506 4.222-3.506 4.222-.03.037-.062.026-.062-.014V2.852c0-.298.26-.648.648-.648h8.56c.317 0 .61.296.53.683z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 158, height: 20 }), (t.a = c)
    },
    KqB4: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          for (var n = [], a = (0, r.default)(e, t), i = 0; i < a.length; i++) n.push(a[i].url)
          return n
        })
      var r = a(n('vwfs'))
      e.exports = t.default
    },
    LCtV: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return I
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('yH/f'), n('2G9S'), n('uFXj'), n('ERkP')),
        v = n.n(f),
        g = n('3XMw'),
        y = n.n(g),
        b = n('mN6z'),
        _ = n('Qwev'),
        C = n('rHpw'),
        w = n('1auM'),
        E = n('ude7'),
        x = n('U+bB'),
        T = n('MWbm'),
        S = y.a.gff1f69e,
        I = Object.freeze({ INFINITE: 'infinite', MEDIUM: 'medium', NONE: 'none' }),
        R = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), 'state', { imagePreviewUrl: null }),
              h()(l()(e), '_getImageSrc', function () {
                var t = e.props,
                  n = t.enableGif,
                  a = t.mediaItem,
                  r = e.state.imagePreviewUrl
                if (a && a.mediaFile) return a.mediaFile.isGif && !n ? r : a.mediaFile.url
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidUpdate',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.enableGif,
                    a = t.mediaItem.mediaFile,
                    r = this.state.imagePreviewUrl
                  n ||
                    r ||
                    (a instanceof w.a &&
                      a.isGif &&
                      Object(E.a)(a).then(function (t) {
                        e.setState({ imagePreviewUrl: t })
                      }))
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !Object(b.a)(e, this.props) || !Object(b.a)(t, this.state)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.borderRadius,
                    n = e.enableGif,
                    a = e.mediaItem,
                    r = e.onClick,
                    i = e.resizeMode,
                    o = (this.state || {}).imagePreviewUrl,
                    s = a.mediaFile && a.mediaFile.isGif && !n && !o,
                    l = a.needsProcessing || s,
                    c = [k.root, M[t], l && k.loadingBorder],
                    d = this._getImageSrc()
                  return v.a.createElement(
                    T.a,
                    { onClick: r, style: c },
                    l || !d
                      ? v.a.createElement(_.a, { accessibilityLabel: S, style: k.activityIndicator })
                      : v.a.createElement(x.a, { resizeMode: i, source: d, style: k.image }),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(R, 'defaultProps', { borderRadius: I.NONE, enableGif: !0, resizeMode: 'cover' })
      var M = C.a.create(function (e) {
          var t
          return (
            (t = {}),
            h()(t, I.INFINITE, { borderRadius: e.borderRadii.infinite }),
            h()(t, I.MEDIUM, { borderRadius: e.borderRadii.small }),
            h()(t, I.NONE, { borderRadius: e.borderRadii.none }),
            t
          )
        }),
        k = C.a.create(function (e) {
          return {
            root: {
              borderRadius: e.borderRadii.xLarge,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.none,
              borderColor: 'transparent',
              maxWidth: '100%',
              height: '100%',
              overflow: 'hidden',
            },
            image: { display: 'block', height: '100%', width: '100%' },
            loadingBorder: { borderColor: e.colors.gray300 },
            activityIndicator: { height: '100%' },
          }
        })
      t.b = R
    },
    M6MT: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return a
      }),
        n.d(t, 'a', function () {
          return r
        })
      n('yH/f')
      var a = Object.freeze({ granted: 'granted', denied: 'denied', prompt: 'prompt' }),
        r = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 })
    },
    MLl7: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return r
        }),
        n.d(t, 'c', function () {
          return i
        })
      n('yH/f'), n('vrRf'), n('1IsZ')
      var a = Object.freeze({ Composition: 'composition', DMComposition: 'dm_composition' }),
        r = function (e) {
          return Object.values(a).indexOf(e) >= 0
        },
        i = function (e, t) {
          return 'boolean' == typeof e ? e : t
        }
    },
    'Mbn/': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
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
    ODCi: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Recipients', function () {
          return j
        })
      var a = n('RhWx'),
        r = n.n(a),
        i = n('ddV6'),
        o = n.n(i),
        s = (n('vrRf'), n('LW0h'), n('7x/C'), n('2G9S'), n('ERkP')),
        l = n.n(s),
        c = (n('z84I'), n('RqPI')),
        d = n('xVN5'),
        u = n('wpu3'),
        p = n('hqKg'),
        m = n('o52z'),
        h = n('oEGd'),
        f = function (e, t) {
          return t.location.state
        },
        v = function (e, t) {
          var n = f(0, t)
          return n && n.inReplyToStatus
        },
        g = Object(p.createSelector)(v, c.q, function (e, t) {
          return e && t
            ? Object(u.a)({ inReplyToStatus: e, loggedInUserId: t, excludeReplyUser: !0 }).map(function (e) {
                return e.id_str
              })
            : Object(m.a)()
        }),
        y = Object(p.createSelector)(
          g,
          function (e, t) {
            var n = f(0, t)
            return (n && n.excludedRecipients) || Object(m.a)()
          },
          v,
          function (e, t, n) {
            return { recipientIds: e, initialExcludedRecipients: t, inReplyToStatus: n }
          },
        ),
        b = { updateExcludedRecipientsV2: d.u },
        _ = Object(h.f)(y, b),
        C = n('jHSc'),
        w = n('3XMw'),
        E = n.n(w),
        x = n('5FtR'),
        T = n('7JQg'),
        S = n('s1N3'),
        I = n('88ay'),
        R = n('hqDb'),
        M = n('MWbm'),
        k = n('0yYu'),
        P = n('6vad'),
        L = n('XiMS'),
        D = n('t62R'),
        A = n('/yvb'),
        O = E.a.c55eed71,
        F = E.a.b772cd65,
        B = E.a.caca3101,
        V = E.a.c6a6dc2f,
        N = { page: 'compose', section: 'recipients' },
        j = function (e) {
          var t = e.history,
            n = e.inReplyToStatus,
            a = e.initialExcludedRecipients,
            i = e.recipientIds,
            s = e.updateExcludedRecipientsV2,
            c = l.a.useState(a),
            d = o()(c, 2),
            u = d[0],
            p = d[1]
          if (!n) return l.a.createElement(x.a, { to: '/compose/tweet' })
          var h = (n.retweeted_status || n).user,
            f = function (e) {
              p(e ? Object(m.a)() : i)
            },
            v = function (e) {
              return function () {
                var t = -1 !== u.indexOf(e)
                p(
                  t
                    ? u.filter(function (t) {
                        return t !== e
                      })
                    : Object(S.a)([].concat(r()(u), [e])),
                )
              }
            },
            g = function () {
              s(u), t.goBack()
            },
            y = function () {
              return i.length > 1 ? l.a.createElement(L.a, { checked: 0 === u.length, onChange: f }) : null
            },
            b = function (e) {
              var t = e.isBlocking,
                n = e.screenName
              return t ? l.a.createElement(D.b, { color: 'magenta500', size: 'subtext2' }, V({ screenName: n })) : null
            },
            _ = function (e) {
              if (!n) return null
              var t = (n.retweeted_status || n).user,
                a = -1 !== u.indexOf(e),
                r = e === t.id_str,
                i = l.a.createElement(L.a, { checked: !a, disabled: r, onChange: v(e) })
              return l.a.createElement(I.b, {
                bottomControl: b,
                cellClickable: !r,
                decoration: i,
                key: e,
                onClick: v(e),
                promotedItemType: 'users',
                userId: e,
                withLink: !1,
              })
            }
          return l.a.createElement(
            T.c,
            { namespace: N },
            l.a.createElement(
              C.b,
              {
                backLocation: '/compose/tweet',
                history: t,
                onBackClick: g,
                rightControl: l.a.createElement(A.a, { onPress: g, size: 'xSmall', type: 'brandFilled' }, F),
                title: O,
              },
              _(h.id_str),
              i.length
                ? l.a.createElement(
                    M.a,
                    null,
                    l.a.createElement(k.a, null),
                    l.a.createElement(P.b, { rightControl: y(), text: B }),
                    l.a.createElement(R.a, { renderUserCell: _, userIds: i }),
                  )
                : null,
            ),
          )
        }
      t.default = _(j)
    },
    PrL8: function (e, t, n) {
      'use strict'
      var a = n('rHpw').a.create(function (e) {
        return {
          root: { flexGrow: 1, flexShrink: 1, paddingBottom: e.spaces.space12 },
          rightControl: { display: 'flex', flexDirection: 'row' },
          prevButton: { marginEnd: e.spaces.space2 },
          saveButton: { marginStart: e.spaces.space12 },
          segmentedControlChildren: { flexGrow: 1 },
          leftRightButtons: { alignItems: 'center' },
          videoTrimmerWrapper: { flexGrow: 1, flexShrink: 1, marginBottom: e.spaces.space20 },
        }
      })
      t.a = a
    },
    Rqga: function (e, t, n) {
      var a = n('ax0f'),
        r = Math.log,
        i = Math.LN2
      a(
        { target: 'Math', stat: !0 },
        {
          log2: function (e) {
            return r(e) / i
          },
        },
      )
    },
    UgB4: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
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
                d: 'M21.13 11.358L3.614 2.108c-.29-.152-.64-.102-.873.126-.23.226-.293.577-.15.868l4.362 8.92-4.362 8.92c-.143.292-.08.643.15.868.145.14.333.212.523.212.12 0 .24-.028.35-.087l17.517-9.25c.245-.13.4-.386.4-.664s-.155-.532-.4-.662zM4.948 4.51l12.804 6.762H8.255l-3.307-6.76zm3.307 8.26h9.498L4.948 19.535l3.307-6.763z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    VPdC: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return P
      })
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('VrFO'),
        l = n.n(s),
        c = n('Y9Ll'),
        d = n.n(c),
        u = n('5Yy7'),
        p = n.n(u),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        v = n.n(f),
        g = (n('2G9S'), n('7xRU'), n('ERkP')),
        y = n.n(g),
        b = n('3XMw'),
        _ = n.n(b),
        C = n('cjZk'),
        w = 'fileInput',
        E = n('sjK1'),
        x = n('/Imo'),
        T = n('rHpw'),
        S = n('9HgX'),
        I = ['acceptGifs', 'acceptImages', 'acceptVideo', 'customMimeTypes', 'icon', 'style', 'withIcon'],
        R = _.a.b9960f31,
        M = { viewType: 'media_picker' },
        k = y.a.createElement(C.a, null),
        P = function (e) {
          var t = e.acceptGifs,
            n = e.acceptImages,
            a = void 0 === n || n,
            r = e.acceptVideo
          return (a ? S.b : []).concat(t ? [S.a] : []).concat(r ? E.a : [])
        },
        L = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            return l()(this, n), t.apply(this, arguments)
          }
          return (
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.acceptGifs,
                    n = e.acceptImages,
                    a = e.acceptVideo,
                    i = e.customMimeTypes,
                    s = e.icon,
                    l = e.style,
                    c = e.withIcon,
                    d = o()(e, I),
                    u = P({ acceptGifs: t, acceptImages: n, acceptVideo: a }).concat(i).join(',')
                  return y.a.createElement(
                    x.a,
                    r()({}, d, {
                      accept: u,
                      behavioralEventContext: M,
                      icon: c ? s : void 0,
                      style: [D.root, l],
                      testID: w,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      v()(L, 'defaultProps', {
        acceptGifs: !0,
        acceptImages: !0,
        acceptVideo: !0,
        customMimeTypes: [],
        accessibilityLabel: R,
        icon: k,
        size: 'medium',
        withIcon: !0,
      })
      var D = T.a.create(function (e) {
        return { root: { margin: '-'.concat(e.spaces.space12) } }
      })
      t.a = L
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
    XpKj: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return p
      }),
        n.d(t, 'b', function () {
          return h
        }),
        n.d(t, 'f', function () {
          return y
        }),
        n.d(t, 'e', function () {
          return b
        }),
        n.d(t, 'c', function () {
          return _
        }),
        n.d(t, 'a', function () {
          return C
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        s = (n('yH/f'), n('LW0h'), n('7x/C'), n('oEOe')),
        l = n('kGix'),
        c = n('Ssj5'),
        d = 'scheduledTweets',
        u = { fetchStatus: l.a.NONE, scheduledTweets: [] },
        p = 'FETCH_SCHEDULED_TWEETS',
        m = Object.freeze({
          REQUEST: 'rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_REQUEST',
          SUCCESS: 'rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_SUCCESS',
          FAILURE: 'rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_FAILURE',
        }),
        h = 'DELETE_SCHEDULED_TWEET',
        f = Object.freeze({
          REQUEST: 'rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_REQUEST',
          SUCCESS: 'rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_SUCCESS',
          FAILURE: 'rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_FAILURE',
        }),
        v = function (e, t) {
          return t.filter(function (t) {
            return t.rest_id !== e
          })
        }
      function g() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case m.SUCCESS:
            if (t.payload) return o()(o()({}, e), {}, { fetchStatus: l.a.LOADED, scheduledTweets: t.payload })
            break
          case m.FAILURE:
            return o()(o()({}, e), {}, { fetchStatus: l.a.FAILED })
          case m.REQUEST:
            return o()(o()({}, e), {}, { fetchStatus: l.a.LOADING })
          case f.SUCCESS:
            var n = t.meta
            return n && n.deleteScheduledTweetId
              ? o()(o()({}, e), {}, { scheduledTweets: v(n.deleteScheduledTweetId, e.scheduledTweets) })
              : e
          default:
            return e
        }
        return e
      }
      c.a.register(r()({}, d, g))
      var y = function (e) {
          return e.scheduledTweets.scheduledTweets
        },
        b = function (e) {
          return e.scheduledTweets.fetchStatus
        },
        _ = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(s.b)(e, { request: a.Scheduling.fetchScheduledTweets, params: {} })({
              actionTypes: m,
              context: p,
            }).then(function () {})
          }
        },
        C = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(s.b)(t, { request: r.Scheduling.deleteScheduledTweet, params: { scheduled_tweet_id: e } })({
              actionTypes: f,
              context: h,
              meta: { deleteScheduledTweetId: e },
            })
          }
        }
    },
    Zg3A: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
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
                d: 'M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm8.472 9.442c-.242.19-.472.368-.63.486-.68-1.265-1.002-1.78-1.256-2.007-.163-.145-.37-.223-.78-.375-.367-.136-1.482-.55-1.65-.85-.087-.153.136-.602.23-.793.088-.177.164-.33.196-.497.123-.646-.33-1.146-.728-1.59-.066-.072-.153-.17-.23-.26.335-.12.862-.26 1.42-.384 1.95 1.448 3.26 3.704 3.428 6.272zm-9.788-7.83c.076.25.145.5.182.678-.255.15-.663.363-.96.52-.262.136-.522.273-.738.392-.247.137-.442.234-.6.313-.347.174-.598.3-.833.553-.068.073-.26.278-1.02 1.886l-1.79-.656c1.293-1.94 3.362-3.31 5.76-3.685zM12 20.5c-4.687 0-8.5-3.813-8.5-8.5 0-1.197.25-2.335.7-3.37.47.182 1.713.66 2.75 1.035-.107.336-.245.854-.26 1.333-.03.855.502 1.7.562 1.792.053.08.12.15.2.207.303.21.687.5.827.616.063.343.166 1.26.23 1.833.144 1.266.175 1.48.24 1.65.005.012.514 1.188 1.315 1.188.576-.003.673-.206 1.855-2.688.244-.512.45-.95.513-1.058.1-.144.597-.61.87-.83.55-.442.76-1.82.413-2.682-.335-.83-1.92-2.08-2.5-2.195-.17-.033-.43-.04-.953-.053-.497-.01-1.25-.028-1.536-.09-.098-.024-.314-.094-.605-.196.32-.668.627-1.28.71-1.4.05-.052.168-.112.408-.234.17-.086.383-.192.653-.34.208-.116.458-.247.71-.38 1.168-.612 1.484-.8 1.658-1.082.11-.177.263-.44-.04-1.544 1.042.027 2.038.24 2.955.61-.89.32-1.024.595-1.106.77-.367.784.256 1.475.667 1.93.096.107.24.268.32.38l-.017.036c-.234.472-.67 1.35-.196 2.194.406.72 1.384 1.13 2.437 1.52.134.05.25.092.33.126.16.208.496.79 1 1.735l.154.285c.078.14.33.505.842.505.167 0 .363-.04.59-.137.032-.013.083-.035.18-.094C19.72 17.405 16.22 20.5 12 20.5zm-3.812-9.45c.01-.285.102-.646.184-.907l.027.006c.397.09 1.037.11 1.83.13.32.006.59.008.615 0 .326.143 1.355 1 1.483 1.31.113.28.05.812-.034 1.01-.233.197-.845.735-1.085 1.078-.093.13-.212.373-.64 1.274-.133.276-.313.654-.488 1.013-.026-.225-.054-.472-.08-.686-.225-2.003-.273-2.22-.42-2.445-.05-.078-.202-.31-1.135-.973-.117-.213-.268-.564-.26-.813z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    'a/ea': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return u
      }),
        n.d(t, 'd', function () {
          return p
        }),
        n.d(t, 'e', function () {
          return h
        }),
        n.d(t, 'a', function () {
          return v
        }),
        n.d(t, 'b', function () {
          return g
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        s = (n('yH/f'), n('7x/C'), n('JtPf'), n('M6MT')),
        l = n('Ssj5'),
        c = 'geoLocation',
        d = Object.freeze({ permissionStatus: void 0, position: void 0 })
      var u = function (e) {
          return e.geoLocation.permissionStatus
        },
        p = function (e) {
          return e.geoLocation.position
        },
        m = 'rweb/geoLocation/SET_PERMISSION_STATUS',
        h = function (e) {
          return { payload: e, type: m }
        },
        f = 'rweb/geoLocation/SET_POSITION',
        v = function () {
          return function (e, t) {
            return y()
              .then(function (t) {
                return e({ payload: t, type: f })
              })
              .catch(function (t) {
                return e(h(s.b.denied)), Promise.reject(t)
              })
          }
        },
        g = function () {
          return function (e, t) {
            return p(t()) ? Promise.resolve() : e(v())
          }
        },
        y = function () {
          return new Promise(function (e, t) {
            return navigator.geolocation.getCurrentPosition(function (t) {
              var n = {
                timestamp: t.timestamp,
                coords: {
                  latitude: t.coords.latitude,
                  longitude: t.coords.longitude,
                  altitude: t.coords.altitude,
                  accuracy: t.coords.accuracy,
                  altitudeAccuracy: t.coords.altitudeAccuracy,
                  heading: t.coords.heading,
                  speed: t.coords.speed,
                },
              }
              return e(n)
            }, t)
          })
        }
      l.a.register(
        r()({}, c, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case m:
              return o()(o()({}, e), {}, { permissionStatus: t.payload })
            case f:
              return o()(o()({}, e), {}, { position: t.payload })
            default:
              return e
          }
        }),
      )
    },
    b5s6: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('ERkP'),
        l = n.n(s),
        c = n('v6aA'),
        d = n('XOJV'),
        u = n('eSoz'),
        p = n('rxPX'),
        m = n('0KEI'),
        h = function (e, t) {
          return t.tweetId
        },
        f = function (e, t) {
          var n = t.tweetId,
            a = n && d.a.select(e, n)
          return a ? Object(u.g)(e, a) : void 0
        },
        v = Object(p.a)()
          .propsFromState(function () {
            return { community: f, hydratedTweet: d.a.createHydratedTweetSelector(h) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: u.c.fetchOneIfNeeded,
            }
          }),
        g = n('YeIG'),
        y = n('uCxL'),
        b = n('x5Pi'),
        _ = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        C = v(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            s = (e.tweetId, o()(e, _)),
            d = l.a.useContext(c.a),
            u = d.featureSwitches,
            p = d.loggedInUserId,
            m = null == i ? void 0 : i.community_id_str
          l.a.useEffect(
            function () {
              m && Object(g.a)(t) && a(m).catch(n())
            },
            [t, m, n, a],
          )
          var h = u.isTrue('responsive_web_alt_text_badge_enabled'),
            f = i && Object(b.f)(i, p, t),
            v = f && Object(b.e)(f),
            C = u.isTrue('responsive_web_reactions_enabled')
          return l.a.createElement(
            y.a,
            r()({}, s, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: h,
              socialContextProps: v,
              tweet: i,
              withReactions: C,
            }),
          )
        })
      t.a = C
    },
    c0ZR: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('7x/C'), n('JtPf'), n('849X'), n('TJCb')
      var a = function (e) {
        return new Promise(function (t, n) {
          var a = new window.XMLHttpRequest()
          ;(a.responseType = 'blob'),
            (a.onreadystatechange = function () {
              a.readyState === window.XMLHttpRequest.DONE &&
                (200 === a.status ? t(a.response) : n(new Error('Unexpected status code')))
            }),
            (a.onerror = function (e) {
              return n(e)
            }),
            (a.ontimeout = function (e) {
              return n(e)
            }),
            a.open('GET', e, !0),
            a.send()
        })
      }
    },
    cIoY: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('1YZw'),
        o = n('rxPX'),
        s = Object(o.a)().propsFromActions(function () {
          return { addToast: i.b }
        }),
        l = n('VrFO'),
        c = n.n(l),
        d = n('Y9Ll'),
        u = n.n(d),
        p = n('1Pcy'),
        m = n.n(p),
        h = n('5Yy7'),
        f = n.n(h),
        v = n('2VqO'),
        g = n.n(v),
        y = n('KEM+'),
        b = n.n(y),
        _ = (n('ho0z'), n('2G9S'), n('1t7P'), n('jQ/y'), n('hBvt'), n('k/Ka')),
        C = n('3XMw'),
        w = n.n(C),
        E = n('sgih'),
        x = n('t62R'),
        T = n('/yvb'),
        S = n('rHpw'),
        I = w.a.cfd2f35d,
        R = (function (e) {
          f()(n, e)
          var t = g()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(m()(e), '_handleOnFocus', function (e) {
                e.currentTarget.select()
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.cancelButtonLabel,
                    n = e.description,
                    a = e.headerText,
                    i = e.link,
                    o = e.onCancel,
                    s = Object(_.a)('input', {
                      autoFocus: !0,
                      onFocus: this._handleOnFocus,
                      readOnly: !0,
                      style: M.linkInput,
                      value: i,
                    })
                  return r.a.createElement(
                    E.a,
                    { onMaskClick: o, style: M.container, type: 'center', withMask: !0 },
                    a && r.a.createElement(x.b, { align: 'center', style: M.headerText, weight: 'bold' }, a),
                    n && r.a.createElement(x.b, { align: 'center', color: 'gray700', style: M.labelText }, n),
                    s,
                    r.a.createElement(T.a, { onPress: o, size: 'xLarge', style: M.cancelButton, type: 'brandText' }, t),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.Component)
      b()(R, 'defaultProps', { cancelButtonLabel: I })
      var M = S.a.create(function (e) {
          return {
            container: {
              alignItems: 'center',
              paddingVertical: e.spaces.space32,
              paddingHorizontal: e.spaces.space12,
              position: 'relative',
            },
            headerText: { marginBottom: e.spaces.space16 },
            labelText: { marginBottom: e.spaces.space16, width: '100%' },
            linkInput: {
              backgroundColor: e.colors.gray0,
              borderColor: 'transparent',
              color: e.colors.gray700,
              fontSize: e.fontSizes.body,
              marginBottom: e.spaces.space12,
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space20,
            },
            cancelButton: { width: '100%' },
          }
        }),
        k = R,
        P = n('I/9y'),
        L = n('mjJ+'),
        D = n('cm6r'),
        A = n('CaKu'),
        O = n('U+bB'),
        F = w.a.e05c00b4,
        B = w.a.eabf2209,
        V = w.a.a613e72f,
        N = w.a.f88553c8,
        j = {
          riffsy: 'https://abs.twimg.com/a/1501527574/img/t1/icon_riffsy.png',
          giphy: 'https://abs.twimg.com/a/1501527574/img/t1/icon_giphy.png',
        },
        U = (function (e) {
          f()(n, e)
          var t = g()(n)
          function n(e) {
            var a
            return (
              c()(this, n),
              (a = t.call(this, e)),
              b()(m()(a), '_renderMenu', function (e) {
                return r.a.createElement(L.a, {
                  items: [{ text: V, Icon: P.a, onClick: a._handleCopyGifLinkButtonClick }],
                  onCloseRequested: e,
                })
              }),
              b()(m()(a), '_handleCopyGifLinkButtonClick', function (e) {
                var t = a.props,
                  n = t.addToast,
                  r = t.gifUrl
                A.a.isAvailable() ? (A.a.setString(r), n({ text: N })) : a.setState({ showCopyLinkSheet: !0 }), e && e()
              }),
              b()(m()(a), '_handleCopyLinkSheetCancel', function () {
                a.setState({ showCopyLinkSheet: !1 })
              }),
              (a.state = { showCopyLinkSheet: !1 }),
              a
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.state.showCopyLinkSheet,
                    t = this.props,
                    n = t.gifUrl,
                    a = t.provider,
                    i = a.display_name,
                    o = a.name,
                    s = j[o]
                  return s
                    ? r.a.createElement(
                        r.a.Fragment,
                        null,
                        e
                          ? r.a.createElement(k, {
                              description: B({ providerName: i }),
                              headerText: F,
                              link: n,
                              onCancel: this._handleCopyLinkSheetCancel,
                            })
                          : null,
                        r.a.createElement(
                          x.b,
                          { align: 'center', color: 'gray700', style: z.root },
                          r.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'e2e6ea0d' },
                            this._renderAttribution(i, s),
                          ),
                        ),
                      )
                    : null
                },
              },
              {
                key: '_renderAttribution',
                value: function (e, t) {
                  return r.a.createElement(
                    D.a,
                    { interactiveStyles: null, renderMenu: this._renderMenu },
                    r.a.createElement(
                      x.b,
                      { weight: 'bold', withInteractiveStyling: !0 },
                      r.a.createElement(O.a, { source: { uri: t }, style: z.image }),
                      r.a.createElement(x.b, null, e.toUpperCase()),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.PureComponent),
        z = S.a.create(function (e) {
          return {
            button: { marginLeft: e.spaces.space12 },
            image: {
              display: 'inline-block',
              height: e.spaces.space16,
              marginHorizontal: e.spaces.space4,
              width: e.spaces.space16,
            },
            root: { marginHorizontal: e.spaces.space12 },
          }
        }),
        H = U,
        W = s(function (e) {
          var t = e.addToast,
            n = e.gifUrl,
            a = e.provider
          return r.a.createElement(H, { addToast: t, gifUrl: n, provider: a })
        })
      t.a = W
    },
    dzqK: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('ERkP')
      var a = n('zpdM')
      function r(e) {
        return e instanceof a.EditorState
      }
    },
    gpVt: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return H
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('z84I'), n('KqXw'), n('3uku'), n('jwue'), n('7x/C'), n('+oxZ'), n('ho0z'), n('ERkP')),
        v = n.n(f),
        g = n('K1iM'),
        y = n.n(g),
        b = n('RhWx'),
        _ = n.n(b),
        C = (n('wFPu'), n('CDB5')),
        w = n('xVN5'),
        E = n('vjRr'),
        x = n('rxPX'),
        T = n('0KEI'),
        S = function (e, t) {
          var n,
            a,
            r = t.urls,
            i = _()(r),
            o = y()(i.reverse())
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var s = a.value
              if ((n = E.a.select(e, s))) break
            }
          } catch (l) {
            o.e(l)
          } finally {
            o.f()
          }
          return n
        },
        I = Object(x.a)()
          .propsFromState(function () {
            return { card: S }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)(
                'COMPOSER_CARD_PREVIEW',
              ),
              fetchCardPreviewIfNeeded: E.a.fetchCardPreviewIfNeeded,
              updateDMComposer: C.e,
              updateTweetComposer: w.w,
            }
          }),
        R = n('KqB4'),
        M = n.n(R),
        k = n('aX4+'),
        P = n('3XMw'),
        L = n.n(P),
        D = n('hOZg'),
        A = n('cnVF'),
        O = n('MWbm'),
        F = n('v6aA'),
        B = n('/yvb'),
        V = n('rHpw'),
        N = n('VY6S'),
        j = n('mN6z'),
        U = L.a.f6fec9f6,
        z = /^https?:\/\//i,
        H = function (e) {
          var t = M()(e)
          if (t.length)
            return t.map(function (e) {
              return (!z.test(e) && 'http://'.concat(e)) || e
            })
        },
        W = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              h()(l()(i), '_fetchCardPreviewIfNeeded', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchCardPreviewIfNeeded
                e.urls.forEach(function (e) {
                  n(e).catch(t())
                })
              }),
              h()(l()(i), '_handleCardPreviewDismissal', function (e) {
                return i._updateSingleComposer({ cardUrl: A.B })
              }),
              h()(l()(i), '_updateSingleComposer', function (e) {
                var t = i.props,
                  n = t.conversationId,
                  a = t.index,
                  r = t.updateDMComposer,
                  o = t.updateTweetComposer,
                  s = (e || {}).cardUrl
                i._isDMComposer ? n && r(n, s) : o({ updates: { cardUrl: s }, index: a })
              }),
              (i._debouncedFetchCardPreview = Object(N.a)(i._fetchCardPreviewIfNeeded, 1e3)),
              (i._isDMComposer = !!e.conversationId),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._debouncedFetchCardPreview()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props.urls
                  Object(j.a)(e.urls, t) || this._debouncedFetchCardPreview()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._updateSingleComposer()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.card,
                    n = e.isCardPreviewTombstoned,
                    a = e.style,
                    r = this.context.loggedInUserId
                  return t && !n && r
                    ? v.a.createElement(
                        O.a,
                        { style: a },
                        v.a.createElement(k.a, {
                          card: { name: t.name, url: t.url, binding_values: t.binding_values },
                          cardContext: { tweetUserId: r },
                          isInteractive: !1,
                          preventVideoPlayback: !0,
                        }),
                        v.a.createElement(B.a, {
                          accessibilityLabel: U,
                          icon: v.a.createElement(D.a, null),
                          onPress: this._handleCardPreviewDismissal,
                          size: 'xSmall',
                          style: G.closeButton,
                          type: 'onMediaDominantColorFilled',
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(W, 'contextType', F.a)
      var G = V.a.create(function (e) {
          return { closeButton: { position: 'absolute', top: e.spaces.space4, left: e.spaces.space4 } }
        }),
        K = I(W)
      t.a = K
    },
    h5NW: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('RhWx'),
        o = n.n(i),
        s = n('yiKp'),
        l = n.n(s),
        c = n('VrFO'),
        d = n.n(c),
        u = n('Y9Ll'),
        p = n.n(u),
        m = n('1Pcy'),
        h = n.n(m),
        f = n('5Yy7'),
        v = n.n(f),
        g = n('2VqO'),
        y = n.n(g),
        b = n('KEM+'),
        _ = n.n(b),
        C =
          (n('2G9S'),
          n('yH/f'),
          n('jwue'),
          n('7x/C'),
          n('+oxZ'),
          n('5BYb'),
          n('KqXw'),
          n('3uku'),
          n('7xRU'),
          n('JtPf'),
          n('jQ3i'),
          n('x4t0'),
          n('lTEL'),
          n('87if'),
          n('kYxP'),
          n('z84I'),
          n('hBvt'),
          n('MvUL'),
          n('ulNE'),
          n('urw/'),
          n('LW0h'),
          n('hCOa'),
          n('DfhM'),
          n('vrRf'),
          n('uFXj'),
          n('ERkP')),
        w = n.n(C),
        E = n('dDSG'),
        x = n('pXBW'),
        T = n('6/RC'),
        S = (n('KOtZ'), n('ho0z'), n('hBpG'), n('wpu3')),
        I = n('ddV6'),
        R = n.n(I),
        M = n('+Kfv'),
        k = n('eSoz'),
        P = n('rxPX'),
        L = function (e, t) {
          var n = t.communityId
          return n ? k.c.select(e, n) : void 0
        },
        D = Object(P.a)().propsFromState(function () {
          return { community: L }
        }),
        A = n('MtXG'),
        O = n('t62R'),
        F = n('CKsB'),
        B = n('rHpw'),
        V = n('3XMw'),
        N = n.n(V),
        j = N.a.d58baa7e,
        U = D(
          w.a.memo(function (e) {
            var t = e.clickHandler,
              n = e.community,
              a = e.communityId,
              r = e.selectedCommunityId
            if (!n) return null
            var i,
              o = n.member_count
            return w.a.createElement(F.a, {
              actionSubText:
                ((i = j(o)),
                w.a.createElement(
                  A.a.Group,
                  null,
                  w.a.createElement(
                    A.a,
                    null,
                    w.a.createElement(
                      O.b,
                      { color: 'white' },
                      w.a.createElement(
                        N.a.I18NFormatMessage,
                        { $i18n: 'b38e130b' },
                        w.a.createElement(A.a.Value, null, N.a.ibd0106d({ formattedCount: i })),
                        w.a.createElement(A.a.Label, null, N.a.cface2d0({ count: o })),
                      ),
                    ),
                  ),
                )),
              actionText: n.name,
              isSelected: r === a,
              key: a,
              media: n.media,
              onClick: t({
                _type: 'community_members',
                communityIdValue: a,
                conversationControlsValue: 'community_members',
              }),
              selectable: !0,
              style: z.menuItem,
            })
          }),
        ),
        z = B.a.create(function (e) {
          return { menuItem: { alignItems: 'center' } }
        }),
        H = n('0zXz'),
        W = n('FS1z'),
        G = n('Irs7'),
        K = n('MWbm'),
        q = n('yw4N'),
        X = n('/yvb'),
        Y = n('+Eiw'),
        Q = n('Zg3A'),
        J = n('EyD/'),
        Z = N.a.e815fc33,
        $ = N.a.c63602d3,
        ee = N.a.baffe39a,
        te = N.a.aa4209e8,
        ne = N.a.d0748dae,
        ae = N.a.abd845fd,
        re = { viewType: 'everyone' },
        ie = { viewType: 'community' },
        oe = N.a.d58baa7e,
        se = B.a.create(function (e) {
          return {
            hidden: { visibility: 'hidden' },
            title: { flexDirection: 'column', paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space12 },
            root: { flex: 1, flexDirection: 'column', paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12 },
            menuItem: { alignItems: 'center' },
            superFollowsIcon: { backgroundImage: Y.a.getBackgroundImage() },
            viewport: {
              borderBottomLeftRadius: e.borderRadii.xLarge,
              borderBottomRightRadius: e.borderRadii.xLarge,
              flexGrow: 1,
              flexShrink: 1,
              overflow: 'auto',
              zIndex: void 0,
            },
          }
        }),
        le = function (e) {
          var t,
            n,
            a,
            r,
            i,
            o = e.audienceControlsValue,
            s = e.dismiss,
            l = e.hasMemberships,
            c = e.history,
            d = e.isC9sParticipationEnabled,
            u = e.isSuperFollowsCreator,
            p = e.isTrustedFriendsEnabled,
            m = e.onAudienceControlsValueChange,
            h = e.sliceModule,
            f = e.updateSingleComposer,
            v = o.communityIdValue || void 0,
            g = o.exclusivityControlValue || void 0,
            y = o.trustedFriendsValue || void 0,
            b = null === (t = e.trustedFriendsList) || void 0 === t ? void 0 : t.rest_id,
            _ =
              null !== (n = null === (a = e.trustedFriendsList) || void 0 === a ? void 0 : a.member_count) &&
              void 0 !== n
                ? n
                : 0,
            C = Object(G.b)(),
            E = w.a.useCallback(
              function (e) {
                return function () {
                  m(e),
                    ['super_followers_exclusive', 'community_members', 'trusted_friends_tweet'].indexOf(e._type) > -1 &&
                      f({ updates: { scheduledFor: void 0, scheduledTweetId: void 0 } }),
                    s()
                }
              },
              [m, f, s],
            ),
            x = w.a.useCallback(
              function () {
                if (b)
                  return (
                    C.scribe({
                      section: 'audience_selector',
                      component: 'trusted_friends',
                      element: 'edit_list_button',
                      action: 'click',
                    }),
                    c.push('/i/circles/'.concat(b, '/members'))
                  )
              },
              [C, c, b],
            )
          return w.a.createElement(
            K.a,
            { style: se.root },
            w.a.createElement(
              q.a,
              { style: se.viewport },
              w.a.createElement(
                w.a.Fragment,
                null,
                w.a.createElement(O.b, { size: 'headline1', style: se.title, weight: 'bold' }, Z),
                w.a.createElement(
                  M.a,
                  { behavioralEventContext: re },
                  w.a.createElement(F.a, {
                    Icon: Q.a,
                    actionText: ee,
                    isSelected: !g && !v && !y,
                    onClick: E({ _type: 'conversation_controls', conversationControlsValue: 'all' }),
                    selectable: !0,
                    style: se.menuItem,
                    withIconAsThumbnail: !0,
                  }),
                ),
                u
                  ? w.a.createElement(F.a, {
                      Icon: J.a,
                      actionText: te,
                      iconThumbnailColor: 'exclusive',
                      isSelected: !!g,
                      onClick: E({
                        _type: 'super_followers_exclusive',
                        conversationControlsValue: 'super_followers_exclusive',
                        exclusivityControlValue: {},
                      }),
                      selectable: !0,
                      style: se.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
                p && e.trustedFriendsList && b
                  ? w.a.createElement(F.a, {
                      Icon: J.a,
                      actionSubText:
                        ((r = _),
                        (i = oe(r)),
                        w.a.createElement(
                          A.a.Group,
                          null,
                          w.a.createElement(
                            A.a,
                            null,
                            w.a.createElement(
                              O.b,
                              { color: 'white' },
                              w.a.createElement(
                                N.a.I18NFormatMessage,
                                { $i18n: 'g8ffaf17' },
                                w.a.createElement(A.a.Value, null, N.a.a5f7b70f({ formattedCount: i })),
                                w.a.createElement(A.a.Label, null, N.a.a7daec1e({ count: r })),
                              ),
                            ),
                            w.a.createElement(X.a, { onPress: x, size: 'xSmall', type: 'primaryText' }, ae),
                          ),
                        )),
                      actionText: ne,
                      iconThumbnailColor: 'success',
                      isSelected: !!y,
                      onClick: E({
                        _type: 'trusted_friends_tweet',
                        conversationControlsValue: 'trusted_friends_tweet',
                        trustedFriendsMemberCount: _,
                        trustedFriendsValue: { trusted_friends_list_id: b },
                      }),
                      selectable: !0,
                      style: se.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
              ),
              l && h && d
                ? w.a.createElement(
                    K.a,
                    null,
                    w.a.createElement(
                      M.a,
                      { behavioralEventContext: ie },
                      w.a.createElement(O.b, { style: se.title, weight: 'bold' }, $),
                      w.a.createElement(W.a, {
                        module: h,
                        noItemsRenderer: H.a,
                        renderer: function (e) {
                          return w.a.createElement(U, {
                            clickHandler: E,
                            communityId: e,
                            dismiss: s,
                            key: e,
                            selectedCommunityId: v,
                          })
                        },
                        withoutHeadroom: !0,
                      }),
                    ),
                  )
                : null,
            ),
          )
        },
        ce = n('v6aA'),
        de = n('xVN5'),
        ue = n('wAC9'),
        pe = function (e) {
          return Object(ue.a)({
            contextSuffix: 'COMMUNITIES_MEMBERSHIPS_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.Communities.fetchCommunitiesMembershipsSlice
            },
            getEndpointParams: function (e) {
              return e
            },
            sliceKey: 'communitiesMembershipsSlice-'.concat(e),
          })
        },
        me = n('hqKg'),
        he = n('li/m'),
        fe = n('RqPI'),
        ve = n('xZGM'),
        ge = n('0KEI'),
        ye = n('oEOe'),
        be = n('kGix'),
        _e = n('Ssj5'),
        Ce = 'trustedFriends',
        we = Object.freeze({
          REQUEST: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_REQUEST',
          SUCCESS: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_SUCCESS',
          FAILURE: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_FAILURE',
        }),
        Ee = Object.freeze({
          REQUEST: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_REQUEST',
          SUCCESS: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_SUCCESS',
          FAILURE: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_FAILURE',
        }),
        xe = function (e) {
          return e.trustedFriends.lists
        },
        Te = function () {
          return function (e, t, n) {
            var a = n.api
            return ye.b(e, { request: a.TrustedFriends.createTrustedFriendsList })({
              actionTypes: Ee,
              context: 'CREATE_TRUSTED_FRIENDS_LIST',
            })
          }
        },
        Se = function () {
          return function (e, t) {
            var n = t(),
              a = xe(n)
            ;(a.length ? a[0] : void 0) ||
              e(function (e, t, n) {
                var a = n.api
                return ye.b(e, { request: a.TrustedFriends.fetchAuthenticatedUserTFLists })({
                  actionTypes: we,
                  context: 'FETCH_TRUSTED_FRIENDS_LISTS',
                })
              }).then(function (t) {
                !t.authenticated_user_trusted_friends_lists.length && Te && e(Te())
              })
          }
        },
        Ie = Object.freeze({ lists: [], fetchStatus: be.a.NONE })
      _e.a.register(
        _()({}, Ce, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ie,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case we.REQUEST:
              return l()(l()({}, e), {}, { fetchStatus: be.a.LOADING })
            case we.FAILURE:
              return l()(l()({}, e), {}, { error: t.payload, fetchStatus: be.a.FAILED })
            case we.SUCCESS:
              if (t.payload)
                return l()(
                  l()({}, e),
                  {},
                  { lists: t.payload.authenticated_user_trusted_friends_lists, error: null, fetchStatus: be.a.LOADED },
                )
              break
            case Ee.REQUEST:
              return l()(l()({}, e), {}, { fetchStatus: be.a.LOADING })
            case Ee.FAILURE:
              return l()(l()({}, e), {}, { error: t.payload, fetchStatus: be.a.FAILED })
            case Ee.SUCCESS:
              if (t.payload)
                return l()(
                  l()({}, e),
                  {},
                  { lists: [t.payload.trusted_friends_list_create], error: null, fetchStatus: be.a.LOADED },
                )
              break
            default:
              return e
          }
          return e
        }),
      )
      var Re = function (e, t) {
          var n = t.audienceControlsValue.communityIdValue || void 0
          return n ? k.c.select(e, n) : void 0
        },
        Me = function (e, t) {
          return Object(ve.C)(e, ve.f)
        },
        ke = function (e, t) {
          return Object(ve.C)(e, ve.v)
        },
        Pe = function (e) {
          var t = xe(e)
          return t.length ? t[0] : void 0
        },
        Le = Object(P.a)()
          .propsFromState(function () {
            return {
              communities: k.f,
              educationalVisibilityFlag: Me,
              trustedFriendsEducationVisibilityFlag: ke,
              hasMemberships: he.d,
              selectedCommunity: Re,
              sliceModule: Object(me.createSelector)(fe.q, function (e) {
                return e ? pe(e) : void 0
              }),
              selectTrustedFriendsList: Pe,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ge.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_CONTROLS',
              ),
              addEducationFlag: function () {
                return Object(ve.y)(ve.f)
              },
              addTrustedFriendsEducationFlag: function () {
                return Object(ve.y)(ve.v)
              },
              updateSingleComposer: de.w,
              fetchOrCreateTrustedFriendsList: Se,
            }
          }),
        De = n('FG+G'),
        Ae = n.p + 'twitter-circle.b1a74a95.svg',
        Oe = n('TIdA'),
        Fe = n('A91F'),
        Be = N.a.f0598964,
        Ve = N.a.ceec051b,
        Ne = N.a.fc5bfd95,
        je = N.a.f5b3dc1d,
        Ue = B.a.create(function (e) {
          return {
            root: { flexDirection: 'column', paddingBottom: e.spaces.space4, borderRadius: e.borderRadii.xLarge },
            modal: { borderRadius: e.borderRadii.none },
            title: { flexDirection: 'column', paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space12 },
            createButton: { marginTop: e.spaces.space16, marginHorizontal: e.spaces.space16 },
            cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 },
            coverContainer: { height: '170px', width: '100%' },
          }
        }),
        ze = function (e) {
          var t = e.onAction,
            n = e.setShowTrustedFriendsModal
          return w.a.createElement(
            w.a.Fragment,
            null,
            w.a.createElement(
              K.a,
              {
                accessibilityDescribedBy: 'trusted-friends-education-popover',
                accessibilityLabelledBy: 'trustd-friends-education-title',
                accessibilityRole: 'dialog',
                style: Ue.root,
              },
              w.a.createElement(
                K.a,
                { style: Ue.coverContainer },
                w.a.createElement(Oe.a, { accessibilityLabel: '', aspectMode: Fe.a.COVER, image: Ae }),
              ),
              w.a.createElement(
                K.a,
                { style: Ue.title },
                w.a.createElement(
                  O.b,
                  { nativeID: 'conversation-controls-title', size: 'title3', style: Ue.title, weight: 'bold' },
                  Be,
                ),
                w.a.createElement(
                  O.b,
                  { color: 'gray700', nativeID: 'conversation-controls-details', size: 'body', style: Ue.createButton },
                  Ve,
                ),
                w.a.createElement(
                  X.a,
                  {
                    onPress: function () {
                      t(), n(!0)
                    },
                    size: 'xLarge',
                    style: Ue.createButton,
                    type: 'primaryFilled',
                  },
                  Ne,
                ),
                w.a.createElement(
                  X.a,
                  {
                    key: 'button_cancel',
                    onPress: function () {
                      t()
                    },
                    size: 'xLarge',
                    style: Ue.cancelButton,
                    type: 'primaryOutlined',
                  },
                  je,
                ),
              ),
            ),
          )
        },
        He = n('7JQg'),
        We = n('feu+'),
        Ge = n('cOhU'),
        Ke = n('a5gf'),
        qe = n('Lsrn'),
        Xe = n('k/Ka'),
        Ye = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Xe.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [qe.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            w.a.createElement(
              'g',
              null,
              w.a.createElement('path', {
                d: 'M1 7c0-.552.448-1 1-1h9.38c.545-2.275 2.83-3.678 5.104-3.135 1.552.37 2.764 1.583 3.135 3.135H22c.552 0 1 .448 1 1s-.448 1-1 1h-2.38c-.545 2.275-2.83 3.678-5.104 3.135-1.552-.37-2.764-1.583-3.135-3.135H2c-.552 0-1-.448-1-1zm21 9h-9.38c-.545-2.275-2.83-3.678-5.104-3.135-1.552.37-2.764 1.583-3.135 3.135H2c-.552 0-1 .448-1 1s.448 1 1 1h2.38c.545 2.275 2.83 3.678 5.104 3.135 1.552-.37 2.764-1.583 3.135-3.135H22c.552 0 1-.448 1-1s-.448-1-1-1z',
              }),
            ),
          )
        }
      Ye.metadata = { width: 24, height: 24 }
      var Qe = Ye,
        Je = N.a.e76b4485,
        Ze = N.a.j24c37b2,
        $e = N.a.bb55e8ed,
        et = N.a.h3fad86e,
        tt = N.a.g31872be,
        nt = N.a.b28ec85f,
        at = N.a.h0318479,
        rt = N.a.edbbcc22
      function it(e) {
        var t = e.changeAudienceToTrustedFriends,
          n = e.history,
          a = e.setShowModal,
          r = e.trustedFriendsListId,
          i = w.a.useCallback(
            function () {
              t(), r && (a(!1), n.push('/i/circles/'.concat(r, '/members')))
            },
            [n, a, r, t],
          ),
          o = w.a.useCallback(
            function () {
              a(!1), t()
            },
            [a, t],
          ),
          s = w.a.createElement(
            w.a.Fragment,
            null,
            w.a.createElement(
              K.a,
              { style: ot.contentWrapper },
              w.a.createElement(K.a, null, w.a.createElement(Ge.a, { style: ot.icon })),
              w.a.createElement(
                K.a,
                { style: ot.subtextContainer },
                w.a.createElement(
                  O.b,
                  { align: 'left', color: 'text', style: ot.subtextContainer, weight: 'bold' },
                  $e,
                ),
                w.a.createElement(O.b, { align: 'left', color: 'gray700' }, et),
              ),
            ),
            w.a.createElement(
              K.a,
              { style: ot.contentWrapper },
              w.a.createElement(K.a, null, w.a.createElement(Ke.a, { style: ot.icon })),
              w.a.createElement(
                K.a,
                { style: ot.subtextContainer },
                w.a.createElement(O.b, { color: 'text', weight: 'bold' }, tt),
                w.a.createElement(O.b, { color: 'gray700' }, nt),
              ),
            ),
            w.a.createElement(
              K.a,
              { style: ot.contentWrapper },
              w.a.createElement(K.a, null, w.a.createElement(Qe, { style: ot.icon })),
              w.a.createElement(
                K.a,
                { style: ot.subtextContainer },
                w.a.createElement(O.b, { color: 'text', weight: 'bold' }, at),
                w.a.createElement(O.b, { color: 'gray700' }, rt),
              ),
            ),
          )
        return w.a.createElement(
          He.c,
          null,
          w.a.createElement(We.a, {
            actionLabel: Ze,
            headline: Je,
            onAction: i,
            onClose: o,
            subtext: s,
            withCloseButton: !0,
          }),
        )
      }
      var ot = B.a.create(function (e) {
          return {
            subtextContainer: { display: 'flex', flexDirection: 'column', width: '100%' },
            icon: { color: e.colors.green500, paddingTop: e.spaces.space4, paddingRight: e.spaces.space24 },
            contentWrapper: { display: 'flex', flexDirection: 'row', paddingTop: e.spaces.space32 },
          }
        }),
        st = n('FGLp'),
        lt = n('X00g'),
        ct = n('Sp5X'),
        dt = n('efqG'),
        ut = N.a.baffe39a,
        pt = N.a.e815fc33,
        mt = N.a.aa4209e8,
        ht = N.a.d0748dae,
        ft = { viewType: 'communities_controls' },
        vt = w.a.createElement(De.a, null)
      var gt = B.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spaces.space4 },
            container: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
            hidden: { visibility: 'hidden' },
            root: { flexDirection: 'column', paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 },
          }
        }),
        yt = Le(function (e) {
          var t,
            n = w.a.useContext(ce.a),
            a = w.a.useState(!1),
            i = R()(a, 2),
            o = i[0],
            s = i[1],
            l = w.a.useState(!1),
            c = R()(l, 2),
            d = c[0],
            u = c[1],
            p = e.addEducationFlag,
            m = e.addTrustedFriendsEducationFlag,
            h = e.audienceControlsValue,
            f = e.educationalVisibilityFlag,
            v = e.hasMemberships,
            g = e.isC9sParticipationEnabled,
            y = e.isSuperFollowsCreator,
            b = e.isTrustedFriendsEnabled,
            _ = e.onAudienceControlsValueChange,
            C = e.selectTrustedFriendsList,
            E = e.selectedCommunity,
            x = e.sliceModule,
            T = e.trustedFriendsEducationVisibilityFlag,
            S = e.updateSingleComposer,
            I = n.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            k = h.communityIdValue || !1,
            P = h.exclusivityControlValue || !1,
            L = h.trustedFriendsValue || !1,
            D = null == C ? void 0 : C.rest_id,
            A = b && T,
            O = (f && !E) || A,
            F = ut
          if ((k && null != E && E.name ? (F = E.name) : P ? (F = mt) : L && (F = ht), P))
            t = { color: 'plum500', borderColor: 'plum500', backgroundColor: 'transparent' }
          else if (k && null != E && E.theme && I) {
            var B = lt.a.getCommunityUIColorName(E.theme)
            t = { color: B, borderColor: B, backgroundColor: 'transparent' }
          } else t = { type: 'brandOutlined' }
          Object(st.a)(function () {
            var t = e.fetchOrCreateTrustedFriendsList
            b && (null == t || t())
          })
          var V = w.a.useCallback(
              function () {
                u(!1), p(), m()
              },
              [p, m],
            ),
            N = w.a.useCallback(
              function (e) {
                return A && !k
                  ? w.a.createElement(ze, { history: ct.a, onAction: e, setShowTrustedFriendsModal: s })
                  : w.a.createElement(le, {
                      audienceControlsValue: h,
                      dismiss: e,
                      hasMemberships: v,
                      history: ct.a,
                      isC9sParticipationEnabled: g,
                      isSuperFollowsCreator: y,
                      isTrustedFriendsEnabled: b,
                      onAudienceControlsValueChange: function (e) {
                        V(), _(e)
                      },
                      sliceModule: x,
                      trustedFriendsList: C,
                      updateSingleComposer: S,
                    })
              },
              [V, x, S, h, v, g, y, C, _, k, A, b],
            ),
            j = w.a.useCallback(
              function () {
                D &&
                  _({
                    _type: 'trusted_friends_tweet',
                    conversationControlsValue: 'trusted_friends_tweet',
                    trustedFriendsMemberCount: null == C ? void 0 : C.member_count,
                    trustedFriendsValue: { trusted_friends_list_id: D },
                  })
              },
              [_, D, C],
            )
          return y || v || (b && e.selectTrustedFriendsList)
            ? w.a.createElement(
                M.a,
                { behavioralEventContext: ft },
                w.a.createElement(
                  K.a,
                  { style: gt.container },
                  o
                    ? w.a.createElement(it, {
                        changeAudienceToTrustedFriends: j,
                        history: ct.a,
                        setShowModal: s,
                        trustedFriendsListId: D,
                      })
                    : null,
                  w.a.createElement(
                    dt.a,
                    {
                      onDismiss: V,
                      onOpen: function () {
                        u(!0)
                      },
                      renderContent: N,
                      visibilityBehavior: O && !o ? 'forceVisible' : 'interactive',
                    },
                    w.a.createElement(
                      X.a,
                      r()(
                        {
                          accessibilityExpanded: d,
                          accessibilityHasPopup: 'menu',
                          accessibilityLabel: pt,
                          accessibilityRole: 'button',
                          icon: vt,
                          size: 'xSmall',
                        },
                        t,
                      ),
                      F,
                    ),
                  ),
                ),
              )
            : null
        }),
        bt = n('PKbs'),
        _t = function (e, t) {
          var n = t.selectedCommunityId
          return n ? k.c.select(e, n) : void 0
        },
        Ct = Object(P.a)()
          .propsFromState(function () {
            return { community: _t }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ge.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_RULES'),
              fetchCommunityIfNeeded: k.c.fetchOneIfNeeded,
            }
          }),
        wt = n('YeIG'),
        Et = n('21zW'),
        xt = N.a.gfca5254,
        Tt = N.a.f510c8b2,
        St = w.a.createElement(O.b, { weight: 'bold' }, Tt),
        It = B.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 },
            badgeStyle: { marginRight: e.spaces.space12 },
            container: {
              display: 'inline-flex',
              flexDirection: 'row',
              paddingBottom: e.spaces.space12,
              alignItems: 'baseline',
            },
            rulesHeader: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space12 },
            ruleContainerStyle: { paddingHorizontal: e.spaces.space16, fontWeight: 'normal' },
          }
        }),
        Rt = Ct(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            i = e.selectedCommunityId,
            o = e.showMiddot
          w.a.useEffect(
            function () {
              i && Object(wt.a)(t) && a(i).catch(n())
            },
            [t, i, n, a],
          )
          var s = w.a.useState(!1),
            l = R()(s, 2),
            c = l[0],
            d = l[1],
            u = w.a.useContext(ce.a).featureSwitches,
            p = w.a.useCallback(
              function (e) {
                if (null != t && t.rules) {
                  var n = t.rules,
                    a = t.theme
                  return w.a.createElement(bt.b, {
                    badgeStyle: It.badgeStyle,
                    headerContainerStyle: It.rulesHeader,
                    heading: St,
                    ruleContainerStyle: It.ruleContainerStyle,
                    rules: n,
                    theme: a,
                  })
                }
                return null
              },
              [t],
            )
          if (null != t && t.rules && t.rules.length > 0) {
            var m = t.theme,
              h = lt.a.getCommunityUIColorName(m),
              f = u.isTrue('c9s_ui_colors_enabled_rweb')
                ? { color: h, borderColor: 'transparent', backgroundColor: 'transparent' }
                : { type: 'brandText' }
            return w.a.createElement(
              K.a,
              { style: It.container },
              o ? w.a.createElement(Et.a, null) : null,
              w.a.createElement(
                dt.a,
                {
                  onDismiss: function () {
                    return d(!1)
                  },
                  onOpen: function () {
                    return d(!0)
                  },
                  renderContent: p,
                },
                w.a.createElement(
                  X.a,
                  r()(
                    {
                      accessibilityExpanded: c,
                      accessibilityHasPopup: 'dialog',
                      accessibilityRole: 'button',
                      size: 'xSmall',
                      style: It.button,
                    },
                    f,
                  ),
                  xt,
                ),
              ),
            )
          }
          return null
        }),
        Mt = n('ii+P'),
        kt = n('4zmP'),
        Pt = N.a.g46f363d,
        Lt = { viewType: 'rule_education' },
        Dt = function () {
          var e = Object(Mt.a)(ve.g),
            t = R()(e, 2),
            n = t[0],
            a = t[1]
          return (
            w.a.useEffect(
              function () {
                return a
              },
              [a],
            ),
            n
              ? w.a.createElement(
                  K.a,
                  { style: At.container },
                  w.a.createElement(kt.a, { behavioralEventContext: Lt, onClose: a, text: Pt, withCloseButton: !0 }),
                )
              : null
          )
        },
        At = B.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space8 } }
        }),
        Ot = w.a.memo(Dt),
        Ft = n('H7Rt'),
        Bt = n('m3Bd'),
        Vt = n.n(Bt),
        Nt = n('yZqq'),
        jt = function (e, t) {
          return Object(ve.C)(e, ve.r)
        },
        Ut = Object(P.a)()
          .propsFromState(function () {
            return { shouldShowEducation: jt }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(ve.y)(ve.r)
              },
            }
          }),
        zt = N.a.aa65a449,
        Ht = { viewType: 'persistent_conversation_controls_education' }
      var Wt = B.a.create(function (e) {
          return { container: { width: '100%', marginBottom: e.spaces.space8 } }
        }),
        Gt = Ut(function (e) {
          var t = e.addEducationFlag,
            n = e.buttonRef,
            a = e.shouldShowEducation,
            r = w.a.useContext(ce.a).featureSwitches,
            i = w.a.useState(),
            o = R()(i, 2),
            s = o[0],
            l = o[1],
            c = function () {
              t()
            }
          return (
            w.a.useEffect(function () {
              return c
            }, []),
            w.a.useEffect(
              function () {
                if (n) {
                  var e = n.getBoundingClientRect(),
                    t = e.left,
                    a = e.width
                  l(t + a / 2)
                }
              },
              [n],
            ),
            !0 === r.getValueWithoutScribeImpression('conversation_controls_persistence_enabled') && a
              ? w.a.createElement(
                  K.a,
                  { style: Wt.container },
                  w.a.createElement(kt.a, {
                    arrowPositionStart: s,
                    behavioralEventContext: Ht,
                    onClose: c,
                    text: zt,
                    withCloseButton: !0,
                  }),
                )
              : null
          )
        }),
        Kt = n('DlMI'),
        qt = n('gBde'),
        Xt = n('gUPl'),
        Yt = ['analytics'],
        Qt = w.a.createElement(Kt.a, null),
        Jt = w.a.createElement(qt.a, null),
        Zt = w.a.createElement(Xt.a, null),
        $t = w.a.createElement(Ge.a, null),
        en = 'conversation_control',
        tn = { viewType: en },
        nn = Object.freeze({
          all: { icon: Qt, label: N.a.i8ea6d4e },
          community: { icon: Zt, label: N.a.ec5a4a25 },
          by_invitation: { icon: Jt, label: N.a.b4543009 },
          community_members: { icon: $t, label: N.a.i13be5a0 },
          super_followers_exclusive: { icon: Qt, label: N.a.f8393bda },
          trusted_friends_tweet: { icon: Qt, label: N.a.c0857ccd },
        }),
        an =
          (Object.freeze(['community', 'by_invitation']),
          Object(G.a)(function (e) {
            var t = e.analytics,
              n = Vt()(e, Yt),
              a = e.disabled,
              r = e.value,
              i = nn[r],
              o = i.icon,
              s = i.label,
              l = w.a.useState(!1),
              c = R()(l, 2),
              d = c[0],
              u = c[1],
              p = w.a.useRef(null)
            Object(st.a)(function () {
              r !== Ft.a.all && r !== Ft.a.community_members && u(!0)
            })
            var m = w.a.useCallback(
              function (e) {
                t.scribe({ element: en, action: 'click' })
              },
              [t],
            )
            return w.a.createElement(
              M.a,
              { behavioralEventContext: tn },
              d ? w.a.createElement(Gt, { buttonRef: p.current }) : null,
              w.a.createElement(
                K.a,
                { style: rn.controlsContainer },
                w.a.createElement(
                  Nt.a,
                  n,
                  w.a.createElement(
                    X.a,
                    { disabled: a, icon: o, onPress: m, ref: p, size: 'xSmall', style: rn.button, type: 'brandText' },
                    s,
                  ),
                ),
              ),
            )
          })),
        rn = B.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 },
            controlsContainer: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
          }
        }),
        on = n('krmn'),
        sn = n('cIoY'),
        ln = n('w3n3'),
        cn = n('MLl7'),
        dn = n('1auM'),
        un = n('07FG'),
        pn = n('Q8CU'),
        mn = n('QbaN'),
        hn = n('VPdC'),
        fn = n('WPfJ'),
        vn = B.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
            avatarContainerExpanded: { paddingTop: e.spaces.space4 },
            avatarContainer: { justifyContent: 'center' },
            avatar: { width: '100%' },
            controlsContainer: {
              marginLeft: -e.spacesPx.space8,
              borderBottomColor: e.colors.borderColor,
              borderBottomWidth: e.spaces.space1,
              flexWrap: 'wrap',
              width: '100%',
            },
            mobileControlsLayout: { flexDirection: 'column' },
            controlsLayout: { flexDirection: 'row', alignItems: 'center' },
            rightColumn: {
              paddingTop: e.spaces.space4,
              justifyContent: 'center',
              position: 'static',
              transitionProperty: 'opacity, color',
              transitionDuration: '0.1s',
              transitionTimingFunction: 'ease-out',
            },
            composeBoxContainer: {
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              flexShrink: 1,
              position: 'static',
              zIndex: 1,
            },
            inputArea: { zIndex: 1 },
            dragDrop: {
              borderColor: e.colors.transparent,
              borderRadius: e.borderRadii.small,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.medium,
            },
            textInputArea: {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              zIndex: fn.f,
            },
            textInputStyle: { paddingHorizontal: 0 },
            textInputMobileCollapsed: { maxHeight: e.fontSizes.title4, padding: 0, overflow: 'hidden' },
            tweetAttachmentArea: { zIndex: fn.e },
            iconEmojiPicker: { zIndex: fn.c },
            toolBar: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginHorizontal: e.spaces.space2,
              zIndex: fn.a,
            },
            firstToolBarButton: { marginLeft: '-'.concat(e.spaces.space8) },
            toolBarButton: { marginHorizontal: 0 },
            toolBarIconsContainer: { alignItems: 'center', flexDirection: 'row', marginTop: e.spaces.space12 },
            separator: {
              width: '1px',
              backgroundColor: e.colors.gray300,
              height: e.fontSizes.title2,
              marginRight: e.spaces.space12,
              marginLeft: 'calc('.concat(e.spaces.space12, ' - 2px)'),
            },
            conversationLine: {
              alignSelf: 'center',
              backgroundColor: e.colors.gray200,
              flexGrow: 1,
              flexShrink: 1,
              minHeight: 0,
              width: e.componentDimensions.conversationLineWidth,
              marginTop: e.spaces.space4,
              marginBottom: e.spaces.space4,
            },
            conversationLineWithOverflow: { marginTop: '-'.concat(e.spaces.space4) },
            attachmentContainer: { marginTop: e.spaces.space4, marginBottom: e.spaces.space4 },
            mediaPreview: { marginTop: e.spaces.space4 },
            quoteTweet: { backgroundColor: e.colors.transparent, marginTop: e.spaces.space4, marginBottom: 0 },
            addImageTextContainer: {
              alignSelf: 'flex-start',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '100%',
            },
            addImageActionIcon: { marginHorizontal: e.spaces.space4 },
            addImageTextPadding: { marginEnd: e.spaces.space48 },
            imageActions: { alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', marginTop: e.spaces.space4 },
            blurStyle: { opacity: 0.5 },
            inputStyle: { width: '100%' },
            collapsedInputStyle: { flexGrow: 1, flexShrink: 1 },
            highlightedText: {
              borderRadius: e.borderRadii.large,
              paddingVertical: e.spaces.space12,
              paddingLeft: e.spaces.space12,
              marginTop: 0,
              marginBottom: 0,
            },
            highlightedTextInner: { marginHorizontal: e.spaces.space4 },
            taggedLocationButton: {
              paddingLeft: e.spacesPx.space8 + e.spacesPx.space2,
              paddingRight: e.spacesPx.space8 + e.spacesPx.space2,
              maxWidth: '100%',
            },
            taggedLocationContainer: {
              display: 'inline-flex',
              flexDirection: 'row',
              minWidth: 0,
              flexShrink: 1,
              paddingBottom: e.spaces.space12,
            },
          }
        }),
        gn = N.a.bdbcdd93,
        yn = function (e) {
          var t = e.media,
            n = e.mediaAttachDisabled,
            a = e.onFilesAdded,
            r = e.setActiveParentKey,
            i = n || t.length >= 4,
            o = t.length < 3
          return w.a.createElement(hn.a, {
            acceptGifs: 0 === t.length,
            acceptVideo: 0 === t.length,
            accessibilityLabel: t.length > 0 ? gn : void 0,
            disabled: i,
            multiple: o,
            onChange: a,
            onPress: r,
            style: [vn.toolBarButton, vn.firstToolBarButton],
            type: 'brandText',
          })
        },
        bn = n('oQhu'),
        _n = n('p+r5'),
        Cn = n('GWvE'),
        wn = (function (e) {
          v()(n, e)
          var t = y()(n)
          function n() {
            var e
            d()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              _()(h()(e), '_setInputRef', function (t) {
                e._inputRef = t
              }),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.autoFocus,
                    n = e.defaultValue,
                    a = e.editable,
                    r = e.label,
                    i = e.name,
                    o = e.onBlur,
                    s = e.onChange
                  return w.a.createElement(
                    K.a,
                    { style: En.root },
                    w.a.createElement(_n.a, {
                      autoCapitalize: 'none',
                      autoCorrect: !1,
                      autoFocus: t,
                      defaultValue: n,
                      editable: a,
                      label: r,
                      maxLength: 25,
                      name: i,
                      onBlur: o,
                      onChange: s,
                      ref: this._setInputRef,
                      spellCheck: 'false',
                      style: En.formTextInput,
                    }),
                  )
                },
              },
              {
                key: 'value',
                get: function () {
                  return this._inputRef && this._inputRef.getValue()
                },
              },
              {
                key: 'isValid',
                get: function () {
                  var e = this.props.optional
                  return (
                    (!this.value && e) ||
                    (this.value && !Object(Cn.a)(this.value) && this._inputRef && this._inputRef.isValidLength())
                  )
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      _()(wn, 'defaultProps', { autoFocus: !1, editable: !0, optional: !1 })
      var En = B.a.create(function (e) {
          return {
            root: { flexDirection: 'row', flexShrink: 1 },
            action: { width: e.spaces.space40 },
            addButton: { flexGrow: 1, minHeight: '100%', padding: 0 },
            formTextInput: {
              flexGrow: 1,
              flexShrink: 1,
              marginVertical: 0,
              paddingTop: 0,
              paddingHorizontal: 0,
              paddingBottom: e.spaces.space12,
            },
          }
        }),
        xn = wn,
        Tn = (n('Blm6'), n('TJCb'), n('DZ+c'), n('mtvn')),
        Sn = n('6XNv'),
        In = (function (e) {
          v()(n, e)
          var t = y()(n)
          function n() {
            return d()(this, n), t.apply(this, arguments)
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    n = e.label,
                    a = e.last,
                    r = e.max,
                    i = e.min,
                    o = e.onChange,
                    s = e.testID,
                    l = !t || i === r,
                    c = e.value.toString(),
                    d = Object(Tn.a)(i, r + 1).map(function (e) {
                      return { label: ''.concat(N.a.ia24dc8c(e)), value: ''.concat(e) }
                    })
                  return w.a.createElement(Sn.a, {
                    disabled: l,
                    label: n,
                    onChange: o,
                    options: d,
                    style: [Rn.selector, !a && Rn.rightMargin],
                    testID: s,
                    value: c,
                  })
                },
              },
            ]),
            n
          )
        })(w.a.PureComponent)
      _()(In, 'defaultProps', { last: !1 })
      var Rn = B.a.create(function (e) {
          return { rightMargin: { marginRight: e.spaces.space20 }, selector: { flexGrow: 1 } }
        }),
        Mn = In,
        kn = 'addPollChoice',
        Pn = 'selectPollDays',
        Ln = 'selectPollHours',
        Dn = 'selectPollMinutes',
        An = 'removePollButton',
        On = N.a.caf8edc4,
        Fn = N.a.g93586be,
        Bn = N.a.d073b644,
        Vn = N.a.a2f0728e,
        Nn = (function (e) {
          v()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r
            return (
              d()(this, n),
              (r = t.call(this, e, a)),
              _()(h()(r), '_handleDaysChange', function (e) {
                var t = r.props.onChange,
                  n = parseInt(e, 10)
                r.setState(function (e) {
                  var a = e.duration,
                    r = a.hours,
                    i = a.minutes,
                    o = 0 === n && 0 === r && 0 === i ? 1 : 7 === n ? 0 : r,
                    s = { days: n, hours: o, minutes: 7 === n ? 0 : 0 === n && 0 === o && i < 5 ? 5 : i }
                  return t && t(s), { duration: s }
                })
              }),
              _()(h()(r), '_handleHoursChange', function (e) {
                var t = r.props.onChange,
                  n = parseInt(e, 10)
                r.setState(function (e) {
                  var a = e.duration,
                    r = a.days,
                    i = a.minutes,
                    o = { days: r, hours: n, minutes: 0 === r && 0 === n && i < 5 ? 5 : i }
                  return t && t(o), { duration: o }
                })
              }),
              _()(h()(r), '_handleMinutesChange', function (e) {
                var t = r.props.onChange,
                  n = parseInt(e, 10)
                r.setState(function (e) {
                  var a = e.duration,
                    r = { days: a.days, hours: a.hours, minutes: n }
                  return t && t(r), { duration: r }
                })
              }),
              (r.state = { duration: e.initialDuration }),
              r
            )
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isActive,
                    n = e.style
                  return w.a.createElement(
                    K.a,
                    { style: n },
                    w.a.createElement(O.b, { style: jn.durationLabel }, t ? On : ''),
                    this._renderPicker(),
                  )
                },
              },
              {
                key: '_renderPicker',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    n = e.isActive,
                    a = this.state.duration,
                    r = a.days,
                    i = a.hours,
                    o = a.minutes
                  return w.a.createElement(
                    K.a,
                    { style: jn.durationControls },
                    w.a.createElement(Mn, {
                      editable: t && n,
                      label: Fn,
                      max: 7,
                      min: 0,
                      onChange: this._handleDaysChange,
                      testID: Pn,
                      value: r,
                    }),
                    w.a.createElement(Mn, {
                      editable: t && n,
                      label: Bn,
                      max: 7 === r ? 0 : 23,
                      min: 0,
                      onChange: this._handleHoursChange,
                      testID: Ln,
                      value: i,
                    }),
                    w.a.createElement(Mn, {
                      editable: t && n,
                      label: Vn,
                      last: !0,
                      max: 7 === r ? 0 : 59,
                      min: 0 === r && 0 === i ? 5 : 0,
                      onChange: this._handleMinutesChange,
                      testID: Dn,
                      value: o,
                    }),
                  )
                },
              },
              {
                key: 'duration',
                get: function () {
                  return this.state.duration
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      _()(Nn, 'defaultProps', { editable: !0, initialDuration: { days: 1, hours: 0, minutes: 0 } })
      var jn = B.a.create(function (e) {
          return {
            durationControls: { flexDirection: 'row', justifyContent: 'space-between' },
            durationLabel: { marginBottom: e.spaces.space4 },
          }
        }),
        Un = Nn,
        zn = n('iY63'),
        Hn = n('jtO7'),
        Wn = N.a.g589c2e1,
        Gn = N.a.a1e6c3a1,
        Kn = N.a.a739e006,
        qn = N.a.d89a5b92,
        Xn = N.a.c2a8118d,
        Yn = N.a.a8ede1de,
        Qn = N.a.af40a8ef,
        Jn = (function (e) {
          v()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r
            d()(this, n),
              (r = t.call(this, e, a)),
              _()(h()(r), '_setChoice1Ref', function (e) {
                r._choice1 = e
              }),
              _()(h()(r), '_setChoice2Ref', function (e) {
                r._choice2 = e
              }),
              _()(h()(r), '_setChoice3Ref', function (e) {
                r._choice3 = e
              }),
              _()(h()(r), '_setChoice4Ref', function (e) {
                r._choice4 = e
              }),
              _()(h()(r), '_setDurationPickerRef', function (e) {
                r._durationPicker = e
              }),
              _()(h()(r), '_handleValidation', function () {
                var e = r.props,
                  t = e.onChange,
                  n = e.onInvalid,
                  a = e.onValid,
                  i = r.choices,
                  o = h()(r),
                  s = [o._choice1, o._choice2, o._choice3, o._choice4].filter(Boolean).every(function (e) {
                    return e.isValid
                  })
                i && i.length >= 2 && s ? a() : n(), t && t({ choices: i, duration: r.duration })
              }),
              _()(h()(r), '_handleAdd', function () {
                r.props.analytics.scribe({ element: 'add_poll_option', action: 'click' }),
                  r.setState(function (e) {
                    return { autoFocus: !0, choiceCount: e.choiceCount + 1 }
                  })
              }),
              _()(h()(r), '_handleDurationChange', function (e) {
                var t = r.props.onChange
                t && t({ choices: r.choices, duration: e })
              }),
              _()(h()(r), '_handleBlur', function () {
                var e = r.props.onBlur
                null == e || e()
              })
            var i = e.initialChoices,
              o = void 0 === i,
              s = (i || []).length,
              l = s > 2 ? s : 2
            return (r.state = { autoFocus: o, choiceCount: l }), r
          }
          return (
            p()(n, [
              {
                key: '_renderChoices',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    n = e.initialChoices,
                    a = void 0 === n ? [] : n,
                    r = e.isActive,
                    i = this.state,
                    o = i.autoFocus,
                    s = i.choiceCount,
                    l = w.a.createElement(
                      K.a,
                      { style: Zn.rightColumn },
                      s < 4
                        ? w.a.createElement(X.a, {
                            accessibilityLabel: Yn,
                            disabled: !(t && r),
                            hoverLabel: { label: Qn },
                            icon: w.a.createElement(zn.a, null),
                            onPress: this._handleAdd,
                            size: 'medium',
                            style: Zn.addButton,
                            testID: kn,
                            type: 'brandText',
                          })
                        : null,
                    )
                  return w.a.createElement(
                    K.a,
                    { style: Zn.choicesAndAddButton },
                    w.a.createElement(
                      K.a,
                      { style: Zn.choices },
                      w.a.createElement(xn, {
                        autoFocus: o,
                        defaultValue: a[0],
                        editable: t && r,
                        label: Wn,
                        name: 'Choice1',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice1Ref,
                      }),
                      w.a.createElement(xn, {
                        defaultValue: a[1],
                        editable: t && r,
                        label: Gn,
                        name: 'Choice2',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice2Ref,
                      }),
                      s >= 3
                        ? w.a.createElement(xn, {
                            autoFocus: o,
                            defaultValue: a[2],
                            editable: t && r,
                            label: Kn,
                            name: 'Choice3',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice3Ref,
                          })
                        : null,
                      4 === s
                        ? w.a.createElement(xn, {
                            autoFocus: o,
                            defaultValue: a[3],
                            editable: t && r,
                            label: qn,
                            name: 'Choice4',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice4Ref,
                          })
                        : null,
                    ),
                    l,
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    n = e.initialDuration,
                    a = e.isActive,
                    r = e.onRemove
                  return w.a.createElement(
                    K.a,
                    { style: Zn.root },
                    this._renderChoices(),
                    w.a.createElement(Un, {
                      editable: t,
                      initialDuration: n,
                      isActive: a,
                      onChange: this._handleDurationChange,
                      ref: this._setDurationPickerRef,
                      style: Zn.durationPicker,
                    }),
                    w.a.createElement(
                      K.a,
                      { style: Zn.removePollButton },
                      w.a.createElement(Hn.a, { color: 'red500', label: Xn, onPress: r, testID: An }),
                    ),
                  )
                },
              },
              {
                key: 'choices',
                get: function () {
                  var e = this._choice1,
                    t = this._choice2,
                    n = this._choice3,
                    a = this._choice4
                  return [e && e.value, t && t.value, n && n.value, a && a.value].filter(Boolean)
                },
              },
              {
                key: 'duration',
                get: function () {
                  return this._durationPicker ? this._durationPicker.duration : void 0
                },
              },
            ]),
            n
          )
        })(w.a.Component),
        Zn = B.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.transparent,
              borderColor: e.colors.nestedBorderColor,
              borderRadius: e.borderRadii.xLarge,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.small,
              flexDirection: 'column',
              overflow: 'hidden',
              paddingTop: e.spaces.space12,
            },
            choicesAndAddButton: { paddingHorizontal: e.spaces.space12, flexDirection: 'row' },
            choices: { flexGrow: 1, flexShrink: 1 },
            removePollButton: {
              borderBottomLeftRadius: e.borderRadii.xLarge,
              borderBottomRightRadius: e.borderRadii.xLarge,
            },
            rightColumn: { flexDirection: 'column-reverse' },
            addButton: { marginBottom: e.spaces.space24, marginLeft: e.spaces.space4 },
            durationPicker: {
              borderTopColor: e.colors.nestedBorderColor,
              borderTopWidth: e.borderWidths.small,
              borderBottomColor: e.colors.nestedBorderColor,
              borderBottomWidth: e.borderWidths.small,
              padding: e.spaces.space12,
            },
          }
        }),
        $n = Object(G.a)(Jn),
        ea = n('+d3d'),
        ta = ['onChange'],
        na = function (e) {
          var t = e.composerIndex,
            n = e.editable,
            a = e.initialChoices,
            i = e.initialDuration,
            o = e.isActive,
            s = e.isPollValid,
            l = e.updateComposer,
            c = Object(G.b)(),
            d = w.a.useMemo(
              function () {
                return {
                  onChange: function (e) {
                    l({ pollChoices: null == e ? void 0 : e.choices, pollDuration: null == e ? void 0 : e.duration }, t)
                  },
                  onValid: function () {
                    !s && l({ pollValid: !0 }, t)
                  },
                  onInvalid: function () {
                    s && l({ pollValid: !1 }, t)
                  },
                  onRemove: function () {
                    c.scribe({ element: 'remove_poll', action: 'click' }), l({ pollActive: !1 }, t)
                  },
                }
              },
              [c, s, l, t],
            ),
            u = d.onChange,
            p = Vt()(d, ta),
            m = w.a.useMemo(
              function () {
                return Object(ea.a)(
                  function (e) {
                    var t = e.choices,
                      n = e.duration
                    u({ choices: t, duration: n })
                  },
                  200,
                  { leading: !0, trailing: !0 },
                )
              },
              [u],
            ),
            h = w.a.useCallback(
              function () {
                m.flush()
              },
              [m],
            )
          return w.a.createElement(
            $n,
            r()({ editable: n, initialChoices: a, initialDuration: i, isActive: o, onBlur: h, onChange: m }, p),
          )
        },
        aa = B.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 }, link: { color: 'black' } }
        }),
        ra = N.a.i859676b,
        ia = w.a.createElement(
          N.a.I18NFormatMessage,
          { $i18n: 'a02c8d74' },
          w.a.createElement(
            O.b,
            { link: '/settings/audience_and_tagging', style: aa.link, withInteractiveStyling: !0, withUnderline: !0 },
            N.a.c9a48d3f,
          ),
        )
      function oa() {
        return w.a.createElement(K.a, { style: aa.container }, w.a.createElement(kt.a, { headline: ra, text: ia }))
      }
      var sa = n('b5s6'),
        la = n('rcen'),
        ca = n('zmS9'),
        da = 'addButton',
        ua = 'addSubtitlesLabel',
        pa = 'altTextLabel',
        ma = 'tagPeopleLabel',
        ha = 'attachments',
        fa = 'createPollButton',
        va = 'geoButton',
        ga = 'gifSearchButton',
        ya = 'scheduleOption',
        ba = 'taggedUsersLabel',
        _a = 'tweetTextarea_',
        Ca = 'toolBar',
        wa = 'scheduledTweetIndicator',
        Ea = n('xM7j'),
        xa = n('6OUF'),
        Ta = n('tZIO'),
        Sa = n('5mJL'),
        Ia = n('DNho'),
        Ra = n('jhWN'),
        Ma = n('rFBM'),
        ka = n('zfvc'),
        Pa = n('Ujvi'),
        La = n('yTN1'),
        Da = n('gpVt'),
        Aa = n('hOZg'),
        Oa = n('ll3R'),
        Fa = n('J0mu'),
        Ba = n('EfHu'),
        Va = n('KrGU'),
        Na = n('boUI'),
        ja = n('6ZHn'),
        Ua = n('/WPq'),
        za = n('wpLu'),
        Ha = n('pHub'),
        Wa = n('8A5z'),
        Ga = n('pKoL'),
        Ka = n('ZvMt'),
        qa = n('9Xij'),
        Xa = (function (e) {
          v()(n, e)
          var t = y()(n)
          function n() {
            return d()(this, n), t.apply(this, arguments)
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.media,
                    n = e.style
                  return w.a.createElement(K.a, { style: n }, this._renderImageGroup(t.length))
                },
              },
              {
                key: '_renderImageGroup',
                value: function (e) {
                  switch (e) {
                    case 1:
                      return this._renderGroupOf1()
                    case 2:
                      return this._renderGroupOf2()
                    case 3:
                      return this._renderGroupOf3()
                    case 4:
                      return this._renderGroupOf4()
                    default:
                      return null
                  }
                },
              },
              {
                key: '_renderGroupOf1',
                value: function () {
                  var e = this.props.media,
                    t = e && !!e[0].mediaFile,
                    n = (e && !t && e[0].externalMediaDetails) || {},
                    a = n.height,
                    r = n.width,
                    i = B.a.theme.aspectRatios.landscape
                  if (t) {
                    var o,
                      s,
                      l = B.a.theme.aspectRatios.minTimelineImage,
                      c = B.a.theme.aspectRatios.maxTimelineImage
                    i = Ka.a.getImageAspectRatio(l, c, {
                      width: null === (o = e[0].mediaFile) || void 0 === o ? void 0 : o.width,
                      height: null === (s = e[0].mediaFile) || void 0 === s ? void 0 : s.height,
                    })
                  }
                  return w.a.createElement(
                    qa.a,
                    { ratio: t ? i : r / a },
                    w.a.createElement(K.a, { style: Ya.mediaPreviewWrapper }, this._renderMediaAtIndex(0)),
                  )
                },
              },
              {
                key: '_renderGroupOf2',
                value: function () {
                  return w.a.createElement(
                    qa.a,
                    { ratio: B.a.theme.aspectRatios.landscape },
                    w.a.createElement(
                      K.a,
                      { style: Ya.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, Ya.gutterRight),
                      this._renderMediaAtIndex(1),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf3',
                value: function () {
                  return w.a.createElement(
                    qa.a,
                    { ratio: B.a.theme.aspectRatios.landscape },
                    w.a.createElement(
                      K.a,
                      { style: Ya.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, Ya.gutterRight),
                      this._renderColumnWithIndices([1, 2]),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf4',
                value: function () {
                  return w.a.createElement(
                    qa.a,
                    { ratio: B.a.theme.aspectRatios.landscape },
                    w.a.createElement(
                      K.a,
                      { style: Ya.mediaPreviewWrapper },
                      this._renderColumnWithIndices([0, 2], Ya.gutterRight),
                      this._renderColumnWithIndices([1, 3]),
                    ),
                  )
                },
              },
              {
                key: '_renderColumnWithIndices',
                value: function (e, t) {
                  return w.a.createElement(
                    K.a,
                    { style: [Ya.column, t] },
                    this._renderMediaAtIndex(e[0], Ya.gutterBottom),
                    this._renderMediaAtIndex(e[1]),
                  )
                },
              },
              {
                key: '_renderMediaAtIndex',
                value: function (e, t) {
                  var n,
                    a,
                    r,
                    i,
                    o = this.props,
                    s = o.editable,
                    l = o.isActive,
                    c = o.media,
                    d = o.onClickMedia,
                    u = o.onEditMedia,
                    p = o.onEditSensitiveWarning,
                    m = o.onRemoveMedia,
                    h = o.onSetMediaPreviewRef,
                    f = c[e],
                    v = null === (n = f.mediaMetadata) || void 0 === n ? void 0 : n.altText,
                    g = null === (a = f.mediaMetadata) || void 0 === a ? void 0 : a.defaultAltText,
                    y = !(
                      null === (r = f.mediaMetadata) ||
                      void 0 === r ||
                      null === (i = r.sensitiveMediaWarning) ||
                      void 0 === i ||
                      !i.size
                    ),
                    b = u && s && l,
                    _ = b && y && !!p
                  return w.a.createElement(Ga.a, {
                    accessibilityLabel: v || g,
                    accessibilityRole: 'group',
                    enableGif: l,
                    key: f.id,
                    mediaItem: f,
                    onClick: d ? d(f.id) : void 0,
                    onEdit: u ? u(f.id) : void 0,
                    onEditSensitiveWarning: p && _ ? p(f.id) : void 0,
                    onRemove: m(f.id),
                    ref: h,
                    style: [Ya.mediaContainer, t],
                    withAltTextLabel: !!v,
                    withCloseButton: s && l,
                    withEditButton: b,
                    withEditSensitiveWarningButton: _,
                  })
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      _()(Xa, 'contextType', ce.a)
      var Ya = B.a.create(function (e) {
          return {
            column: { flexDirection: 'column', flexGrow: 1, flexBasis: 0 },
            gutterRight: { marginRight: e.spaces.space12 },
            gutterBottom: { marginBottom: e.spaces.space12 },
            mediaContainer: {
              borderRadius: e.borderRadii.xLarge,
              transitionProperty: 'width',
              transitionDuration: '0.1s',
              transitionTimingFunction: 'ease-out',
              overflow: 'hidden',
              flexGrow: 1,
              flexBasis: 0,
            },
            mediaPreviewWrapper: { flexDirection: 'row', height: '100%' },
          }
        }),
        Qa = n('S1qy'),
        Ja = n.n(Qa),
        Za = n('cjAp'),
        $a = n.n(Za),
        er = N.a.f0afcc0e,
        tr = N.a.ha5e2e79,
        nr = N.a.a3de3b68,
        ar = N.a.cc2b28fc,
        rr = N.a.g45af04e,
        ir = N.a.j1d5791c,
        or = N.a.ee9c4013,
        sr = N.a.af40a8ef,
        lr = N.a.e68b09b4,
        cr = N.a.ec10ee02,
        dr = N.a.h735a98d,
        ur = N.a.c4ccfbe2,
        pr = N.a.j499fbcb,
        mr = N.a.b7d8e3f0,
        hr = N.a.d1175c78,
        fr = N.a.bf4e9d79,
        vr = N.a.e0342f98,
        gr = N.a.e349147b,
        yr = N.a.e3a24e4b,
        br = N.a.fbd24526,
        _r = N.a.de4669e2,
        Cr = N.a.d2c7a41c,
        wr = N.a.f7364fa1,
        Er = ['ja', 'zh-cn', 'zh-tw', 'ko'],
        xr = N.a.ia24dc8c,
        Tr = w.a.createElement(Aa.a, null),
        Sr = w.a.createElement(zn.a, null),
        Ir = w.a.createElement(Oa.a, null),
        Rr = w.a.createElement(Fa.a, null),
        Mr = { viewType: 'schedule_tweet' },
        kr = { viewType: 'add_poll' },
        Pr = { viewType: 'add_composer' },
        Lr = { viewType: 'tag_location' },
        Dr = (function (e) {
          v()(n, e)
          var t = y()(n)
          function n(e, a) {
            var i
            d()(this, n),
              (i = t.call(this, e, a)),
              _()(h()(i), '_handleConversationControlsValueChange', function (e) {
                i._handleAudienceControlsValueChange({ _type: 'conversation_controls', conversationControlsValue: e })
              }),
              _()(h()(i), '_handleAudienceControlsValueChange', function (e) {
                i.props.updateAudienceControlsValue(e)
              }),
              _()(
                h()(i),
                '_triggerConversationControlsImpression',
                Object(bn.a)(function () {
                  return i.context.featureSwitches.isTrue('conversation_controls_limited_replies_creation_enabled')
                }),
              ),
              _()(h()(i), '_shouldRenderControls', function (e, t) {
                var n = i.state.isFocused,
                  a = i.props,
                  r = a.audienceControlsValue,
                  o = a.isActive,
                  s = a.isInline,
                  l = a.isReply
                return (
                  !(
                    'conversation' !== t ||
                    (r.conversationControlsValue !== Ft.a.community_members &&
                      r.conversationControlsValue !== Ft.a.super_followers_exclusive &&
                      r.conversationControlsValue !== Ft.a.trusted_friends_tweet) ||
                    !l
                  ) ||
                  (o && !l && (!s || n || e))
                )
              }),
              _()(h()(i), '_renderConversationControls', function (e) {
                var t = i.state.isFocused,
                  n = i.props,
                  a = n.audienceControlsValue,
                  r = n.isInline
                if (
                  (n.isReply || (!t && r) || i._triggerConversationControlsImpression(),
                  !i._conversationControlsCreationEnabled)
                )
                  return null
                var o = a.conversationControlsValue,
                  s = i._shouldRenderControls(e, 'conversation'),
                  l =
                    o === Ft.a.community_members ||
                    o === Ft.a.super_followers_exclusive ||
                    o === Ft.a.trusted_friends_tweet ||
                    i._isScheduled()
                return s
                  ? w.a.createElement(an, { disabled: l, onChange: i._handleConversationControlsValueChange, value: o })
                  : null
              }),
              _()(h()(i), '_renderTaggedLocation', function (e) {
                return w.a.createElement(
                  K.a,
                  { style: vn.taggedLocationContainer },
                  w.a.createElement(
                    X.a,
                    {
                      icon: w.a.createElement(Ba.a, null),
                      onPress: i._handleGeoButtonClick,
                      size: 'xSmall',
                      style: vn.taggedLocationButton,
                      type: 'brandText',
                    },
                    e.place.full_name,
                  ),
                )
              }),
              _()(h()(i), '_renderMainContent', function () {
                var e = i.props,
                  t = e.additionalToolbarContent,
                  n = e.data,
                  a = e.index,
                  r = e.isExpanded,
                  o = e.isInline,
                  s = e.isInlineReply,
                  l = e.onTypeaheadStateChange,
                  c = e.richTextInputContext,
                  d = n.cardUrl,
                  u = n.media,
                  p = n.pollActive,
                  m = n.quotedStatus,
                  h = n.text,
                  f = Object(Da.b)(h) || (d && !Object(un.a)(d) && [d]),
                  v = !!u.length || p || !!m,
                  g = i.props.typeaheadWrapper,
                  y = !i._isEmpty()
                return w.a.createElement(
                  K.a,
                  { style: vn.textInputArea },
                  w.a.createElement(
                    K.a,
                    { style: r ? vn.inputStyle : vn.collapsedInputStyle },
                    i._renderAudienceControls(y),
                    w.a.createElement(
                      g,
                      {
                        contextText: h,
                        isInline: o,
                        isInlineReply: s,
                        onTextUpdated: c ? i._handleRichTextChange : i._handlePlainTextChange,
                        onTypeaheadStateChange: l,
                      },
                      i._renderFieldTextInput,
                    ),
                    f && !v
                      ? w.a.createElement(Da.a, { index: a, isCardPreviewTombstoned: Object(un.a)(d), urls: f })
                      : null,
                  ),
                  r ? null : t,
                )
              }),
              _()(h()(i), '_renderFieldTextInput', function (e) {
                var t = i.props,
                  n = t.autoFocus,
                  a = t.data,
                  o = t.editable,
                  s = t.index,
                  l = t.isActive,
                  c = t.isExpanded,
                  d = t.isInline,
                  u = t.isInlineReply,
                  p = t.isLast,
                  m = t.keyCommandHandlers,
                  h = t.onTextInputBlur,
                  f = t.positionCursorAtBeginning,
                  v = t.richTextInputContext,
                  g = i.state.isFocused,
                  y = a.text,
                  b = 0 === s && p,
                  _ = !!v,
                  C = v || {},
                  E = C.dismissComposerCommandName,
                  x = C.element,
                  T = C.sendTweetCommandName,
                  S = u && !v && !c,
                  I = v
                    ? {
                        onChange: i._getHandleRichTextChange(e),
                        richTextInputContext: {
                          dismissComposerCommandName: E,
                          editorState: i.state.editorState,
                          element: x,
                          sendTweetCommandName: T,
                        },
                      }
                    : { onChange: i._getHandlePlainTextChange(e) }
                return w.a.createElement(
                  xa.a,
                  r()(
                    {
                      appTextSize: 'headline1',
                      ariaLabel: nr,
                      autoFocus: n || (l && !d),
                      closeButton:
                        l && (i._deleteNonemptyTweetstormComposerEnabled || i._isEmpty()) && !b
                          ? i._renderCloseButton()
                          : void 0,
                      contentBelow: i._renderTweetAttachment(),
                      editable: o,
                      inputStyle: [vn.textInputStyle, S && vn.textInputMobileCollapsed],
                      keyCommandHandlers: m,
                      maxNumberOfLines: _ ? 30 : 10,
                      multiline: !0,
                      numberOfLines: i._calcNumberOfLines(),
                      onBlur: h,
                      onFilesAdded: i._handleFilesAdded,
                      placeholder: i._getPlaceHolderText(),
                      positionCursorAtBeginning: f,
                      positionCursorAtEnd: !f,
                      ref: i._setTextInputRef,
                      styleType: 'selection',
                      testID: ''.concat(_a).concat(s),
                      useCacheForDOMMeasurements: g,
                      value: y,
                    },
                    I,
                  ),
                )
              }),
              _()(
                h()(i),
                '_getHandleRichTextChange',
                Object(bn.a)(function (e) {
                  return function (t) {
                    e(t), i._handleRichTextChange(t)
                  }
                }),
              ),
              _()(
                h()(i),
                '_getHandlePlainTextChange',
                Object(bn.a)(function (e) {
                  return function (t) {
                    e(t), i._handlePlainTextChange(t)
                  }
                }),
              ),
              _()(h()(i), '_renderCommunityTweetFromProtectedUserCallout', function () {
                var e = i.props,
                  t = e.index,
                  n = e.isCommunityTweetFromProtectedUser
                return 0 === t && n ? w.a.createElement(oa, null) : null
              }),
              _()(h()(i), '_renderAudienceControls', function (e) {
                var t = i.props,
                  n = t.audienceControlsValue,
                  a = t.index,
                  r = t.isSuperFollowsCreator,
                  o = i.context.featureSwitches.isTrue('c9s_participation_enabled'),
                  s = i.context.featureSwitches.isTrue('super_follow_exclusive_tweet_creation_api_enabled'),
                  l = i.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled')
                return i._shouldRenderControls(e, 'audience') && 0 === a && (o || s || l)
                  ? w.a.createElement(yt, {
                      audienceControlsValue: n,
                      isC9sParticipationEnabled: o,
                      isSuperFollowsCreator: r && s,
                      isTrustedFriendsEnabled: l,
                      onAudienceControlsValueChange: i._handleAudienceControlsValueChange,
                    })
                  : null
              }),
              _()(h()(i), '_renderCommunitiesRulesEducation', function () {
                return i.shouldRenderCommunitiesRules ? w.a.createElement(Ot, null) : null
              }),
              _()(h()(i), '_renderCommunitiesRules', function (e) {
                var t = i.props.audienceControlsValue.communityIdValue || void 0
                return i.shouldRenderCommunitiesRules && t
                  ? w.a.createElement(Rt, { selectedCommunityId: t, showMiddot: !e })
                  : null
              }),
              _()(h()(i), '_calcNumberOfLines', function () {
                var e = i.props,
                  t = e.data,
                  n = e.isActive,
                  a = e.isInline,
                  r = !!e.richTextInputContext,
                  o = t.media,
                  s = t.pollActive,
                  l = t.quotedStatus,
                  c = !!o.length || !!s || !!l
                return (r && (a || c)) || !n ? 1 : 4
              }),
              _()(h()(i), '_renderScheduledTweetLegend', function () {
                var e = i.props.scheduledFor
                return w.a.createElement(ca.a, {
                  onPress: i._handlePressScheduledTweetLegend,
                  scheduledFor: e,
                  testID: wa,
                })
              }),
              _()(h()(i), '_handlePressScheduledTweetLegend', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/schedule'), t.scribe({ element: 'tweet_legend', action: 'click' }), a()
              }),
              _()(h()(i), '_renderEmojiPicker', function () {
                return w.a.createElement(on.a, {
                  onEmojiSelect: i._handleInsertEmoji,
                  size: 'medium',
                  style: i._getEmojiPickerButtonStyles(),
                  textInputRef: i._textInputRef || void 0,
                })
              }),
              _()(
                h()(i),
                '_getEmojiPickerButtonStyles',
                Object(bn.a)(function () {
                  return [vn.iconEmojiPicker, vn.toolBarButton]
                }),
              ),
              _()(h()(i), '_isSchedulingDisabled', function () {
                var e = i.props,
                  t = e.audienceControlsValue,
                  n = e.data,
                  a = n.media,
                  r = n.mediaTags,
                  o = n.pollActive,
                  s = n.quotedStatus,
                  l = n.text,
                  c = e.index,
                  d = e.isLast,
                  u = 0 === c && d,
                  p = t.conversationControlsValue !== Ft.a.all
                return Boolean(o || !u || (s && '' === l && !a.length) || p || r.length > 0)
              }),
              _()(h()(i), '_renderSchedulingButton', function () {
                return w.a.createElement(X.a, {
                  accessibilityLabel: tr,
                  behavioralEventContext: Mr,
                  disabled: i._isSchedulingDisabled(),
                  hoverLabel: { label: dr },
                  icon: Rr,
                  onClick: i._handleClickScheduler,
                  size: 'medium',
                  style: vn.toolBarButton,
                  testID: ya,
                  type: 'brandText',
                })
              }),
              _()(h()(i), '_handleClickScheduler', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/schedule'), t.scribe({ element: 'schedule_tweet', action: 'click' }), a()
              }),
              _()(h()(i), '_renderCloseButton', function () {
                var e = i.props.onRemoveComposer
                return w.a.createElement(X.a, {
                  accessibilityLabel: or,
                  hoverLabel: { label: lr },
                  icon: Tr,
                  onPress: e,
                  size: 'xSmall',
                  type: 'brandText',
                })
              }),
              _()(h()(i), '_renderTweetAttachment', function () {
                var e = i.props,
                  t = e.data,
                  n = e.editable,
                  a = e.index,
                  r = e.isActive,
                  o = e.updateSingleComposer,
                  s = t.media,
                  l = t.pollActive,
                  c = t.pollChoices,
                  d = t.pollDuration,
                  u = t.quotedStatus
                if (0 === s.length && !l && !u) return null
                var p = i.hasAttachedVideo && (i._videoTrimmerEnabled ? 'trimmer' : 'subtitles')
                return w.a.createElement(
                  K.a,
                  { onClick: i._handleFocus, style: [vn.attachmentContainer, vn.tweetAttachmentArea], testID: ha },
                  s.length > 0
                    ? w.a.createElement(Xa, {
                        editable: n,
                        isActive: r,
                        media: s,
                        onClickMedia: i.hasAttachedImage ? i._handleClickMediaDetail('crop') : void 0,
                        onEditMedia: i.hasAttachedImage
                          ? i._handleClickMediaDetail('crop')
                          : p
                          ? i._handleClickMediaDetail(p)
                          : void 0,
                        onEditSensitiveWarning:
                          i.hasAttachedImage || i.hasAttachedVideo
                            ? i._handleClickMediaDetail('sensitive_media')
                            : void 0,
                        onRemoveMedia: i._handleMediaRemoveFactory,
                        onSetMediaPreviewRef: i._handleSetMediaPreviewRef,
                        style: vn.mediaPreview,
                      })
                    : null,
                  r ? i._renderMediaActions() : null,
                  l
                    ? w.a.createElement(na, {
                        composerIndex: a,
                        editable: n,
                        initialChoices: c,
                        initialDuration: d,
                        isActive: r,
                        isPollValid: t.pollValid,
                        updateComposer: o,
                      })
                    : null,
                  u ? i._renderQuoteTweet(u) : null,
                )
              }),
              _()(h()(i), '_renderQuoteTweet', function (e) {
                var t = i.props.data.media,
                  n = e.tombstoneInfo
                return n && n.richText
                  ? w.a.createElement(
                      Ea.a,
                      null,
                      w.a.createElement(la.a, {
                        entities: n.richText.entities,
                        rtl: n.richText.rtl,
                        text: n.richText.text,
                      }),
                    )
                  : w.a.createElement(sa.a, {
                      isCondensed: t.length > 0,
                      style: vn.quoteTweet,
                      tweetId: e.id_str,
                      withLink: !1,
                      withUserHoverCard: !1,
                    })
              }),
              _()(h()(i), '_renderToolbar', function (e) {
                var t = i.props,
                  n = t.additionalToolbarContent,
                  a = t.data.media,
                  r = t.hidePoll,
                  o = t.hideScheduling,
                  s = t.isInlineReply,
                  l = t.isReply,
                  c = t.isSelfThreadReply,
                  d = t.richTextInputContext,
                  u = t.setActiveParentKey,
                  p = !!d,
                  m = !s && !r,
                  h = !s && !o,
                  f = i.context.featureSwitches.isTrue('responsive_web_reply_storm_enabled'),
                  v = e && (!l || c || f)
                return w.a.createElement(
                  K.a,
                  { style: vn.toolBar, testID: Ca },
                  w.a.createElement(
                    K.a,
                    { style: vn.toolBarIconsContainer },
                    w.a.createElement(yn, {
                      media: a,
                      mediaAttachDisabled: i.mediaAttachDisabled,
                      onFilesAdded: i._handleFilesAdded,
                      setActiveParentKey: u,
                    }),
                    i._renderGifButton(),
                    m ? i._renderPollButton() : null,
                    p ? i._renderEmojiPicker() : null,
                    h ? i._renderSchedulingButton() : null,
                    i._renderGeoButton(),
                  ),
                  w.a.createElement(
                    K.a,
                    { style: vn.toolBarIconsContainer },
                    e ? i._renderCountdownCircle() : null,
                    v &&
                      w.a.createElement(
                        w.a.Fragment,
                        null,
                        w.a.createElement(K.a, { style: vn.separator }),
                        i._renderAddComposerButton(),
                      ),
                    n,
                  ),
                )
              }),
              _()(h()(i), '_addOverflowStyle', function (e) {
                var t = i.props.richTextInputContext
                if (t) {
                  var n = e.getCurrentContent().getPlainText(),
                    a = n.length,
                    r = i._getParsedTweet(n).validRangeEnd,
                    o = r + 1 < a
                  if (i.state.hasOverflowStyle || o) {
                    var s = o ? r + 1 : -1
                    return {
                      editorState: t.updateOverflowStyle && t.updateOverflowStyle(e, s, i.state.hasOverflowStyle),
                      hasOverflowStyle: o,
                    }
                  }
                  return { editorState: e, hasOverflowStyle: o }
                }
              }),
              _()(h()(i), '_handleRichTextChange', function (e) {
                var t = i.props.richTextInputContext,
                  n = e.getCurrentContent().getPlainText()
                if (t) {
                  var a = t.convertEmojiToEntities(e)
                  i.setState(i._addOverflowStyle(a))
                }
                i._handleTextValueChange(n)
              }),
              _()(h()(i), '_handlePlainTextChange', function (e) {
                var t = Ta.a.replaceCarriageReturns(e.target.value)
                i._handleTextValueChange(t)
              }),
              _()(h()(i), '_handleTextValueChange', function (e) {
                var t = i.props,
                  n = t.data,
                  a = n.key,
                  r = n.text,
                  o = t.onTextChange
                r !== e && o(e, a)
              }),
              _()(h()(i), '_handleClickAltTextShortcut', function () {
                i.props.analytics.scribe({ element: 'alt_text_button', action: 'click' })
              }),
              _()(h()(i), '_handleClickSubtitlesShortcut', function () {
                i.props.analytics.scribe({ element: 'subtitles_button', action: 'click' })
              }),
              _()(h()(i), '_handleClickMediaDetail', function (e) {
                return function (t) {
                  return function () {
                    var n = i.props,
                      a = n.analytics,
                      r = n.history
                    a.scribe({ element: 'media_detail_button', action: 'click' }),
                      (i.hasAttachedImage || i.hasAttachedVideo) &&
                        r.push('/compose/tweet/media', { mediaId: t, tab: e })
                  }
                }
              }),
              _()(h()(i), '_handleFilesAdded', function (e) {
                var t = i.props,
                  n = t.addToast,
                  a = t.data.pollActive,
                  r = t.onFilesAdded
                a ? n({ text: ar }) : r(e)
              }),
              _()(h()(i), '_handleMediaRemoveFactory', function (e) {
                return function () {
                  i.props.onRemoveMedia(i.props.index, e)
                }
              }),
              _()(h()(i), '_handleInsertEmoji', function (e) {
                var t = i.state.editorState,
                  n = i.props.richTextInputContext
                if (n && t) {
                  var a = n.insertTextAtCursor(t, e.text)
                  i._handleRichTextChange(a)
                }
              }),
              _()(h()(i), '_validateMedia', function (e) {
                var t = i.props.data.media
                return S.c(t.concat(e))
              }),
              _()(h()(i), '_handlePollAdd', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.index,
                  a = e.updateSingleComposer
                t.scribe({ element: 'add_poll', action: 'click' }), a({ pollActive: !0 }, n)
              }),
              _()(h()(i), '_handleGeoButtonClick', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/place_picker'), t.scribe({ element: 'tag_location', action: 'click' }), a()
              }),
              _()(h()(i), '_handleWrapperClick', function (e) {
                ;(e.target instanceof Element && e.target.closest('[role="button"],a,input,textarea,select')) ||
                  i.focus()
              }),
              _()(h()(i), '_handleFocus', function () {
                var e = i.props,
                  t = e.index,
                  n = e.isActive,
                  a = e.onFocus
                ;(0, e.setActiveParentKey)(),
                  n ||
                    (window.requestAnimationFrame(function () {
                      i._mediaPreviewRef && i._mediaPreviewRef.playVideo()
                    }),
                    a(t))
              }),
              _()(h()(i), '_handleEditorFocus', function () {
                return i.setState({ isFocused: !0 })
              }),
              _()(h()(i), '_formatCountdownNumber', function (e) {
                return xr(Math.ceil(e / i._userLanguageWeight))
              }),
              _()(h()(i), '_getPlaceHolderText', function () {
                var e = i.props,
                  t = e.data,
                  n = t.pollActive,
                  a = t.quotedStatus,
                  r = e.index,
                  o = e.isReply,
                  s = e.isSelfThreadReply
                return a
                  ? _r
                  : n
                  ? wr
                  : i.isReplyOrReplyThread && 0 === r
                  ? Cr
                  : o && !s && r > 0
                  ? br
                  : s || r > 0
                  ? yr
                  : gr
              }),
              _()(h()(i), '_getNumberOfAltTextEntries', function () {
                return i.props.data.media.reduce(function (e, t) {
                  var n
                  return null !== (n = t.mediaMetadata) && void 0 !== n && n.altText ? e + 1 : e
                }, 0)
              }),
              _()(
                h()(i),
                '_getParsedTweet',
                Object(bn.a)(function (e) {
                  var t = $a.a[i.props.twitterTextConfigurationVersion]
                  return Ja()(e, t)
                }),
              ),
              _()(h()(i), '_isEmpty', function () {
                var e = i.props.data
                return Object(pn.c)(e)
              }),
              _()(h()(i), '_isScheduled', function () {
                var e = i.props.data.scheduledFor
                return Object(mn.h)(e)
              }),
              _()(h()(i), '_autotagLocationIfNeeded', function () {
                var e = i.props,
                  t = e.data.taggedLocation,
                  n = e.fetchAutotaggedLocationIfNeeded,
                  a = e.index,
                  r = e.updateSingleComposer
                n().then(function (e) {
                  void 0 === t && r({ taggedLocation: null != e ? e : null }, a)
                })
              }),
              _()(h()(i), '_handleSetMediaPreviewRef', function (e) {
                i._mediaPreviewRef = e
              }),
              _()(h()(i), '_setTextInputRef', function (e) {
                i._textInputRef = e
              })
            var o = e.data.text,
              s = e.richTextInputContext,
              l = e.userLanguage,
              c = (s || {}).initEditorState
            return (
              (i._conversationControlsCreationEnabled =
                !0 ===
                i.context.featureSwitches.getValueWithoutScribeImpression(
                  'conversation_controls_limited_replies_creation_enabled',
                )),
              (i._deleteNonemptyTweetstormComposerEnabled = i.context.featureSwitches.isTrue(
                'responsive_web_delete_nonempty_tweetstorm_composer_enabled',
              )),
              (i._userLanguageWeight = l && Er.indexOf(l) > -1 ? 2 : 1),
              i._autotagLocationIfNeeded(),
              (i.state = { editorState: c ? c(o) : null, hasOverflowStyle: !1, isFocused: !1 }),
              i
            )
          }
          return (
            p()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  ;(this.hasExternalMedia ||
                    this.props.data.media.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof dn.a) && e.mediaFile.isVideo
                    })) &&
                    e.isActive &&
                    !this.props.isActive &&
                    this._mediaPreviewRef &&
                    this._mediaPreviewRef.pauseVideo()
                },
              },
              {
                key: 'focus',
                value: function () {
                  this._textInputRef && this._textInputRef.focus()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.data.taggedLocation,
                    a = t.isActive,
                    r = t.isExpanded,
                    i = t.isInline,
                    o = t.isLast,
                    s = t.loggedInUser,
                    l = t.windowWidth,
                    c = t.withAvatar,
                    d = !this._isEmpty(),
                    u = this._shouldRenderControls(d),
                    p = l < B.a.theme.breakpoints.small
                  return w.a.createElement(
                    K.a,
                    {
                      onClick: this._handleWrapperClick,
                      onFocus: this._handleFocus,
                      style: [vn.root, !a && vn.blurStyle],
                    },
                    this._renderCommunityTweetFromProtectedUserCallout(),
                    w.a.createElement(
                      Sa.a,
                      {
                        avatarCell: w.a.createElement(
                          w.a.Fragment,
                          null,
                          c
                            ? w.a.createElement(Ia.a.Consumer, null, function (e) {
                                var t = e.avatarSize
                                return w.a.createElement(Ra.a, {
                                  accessibilityLabel: s ? s.name : void 0,
                                  screenName: s ? s.screen_name : void 0,
                                  size: t,
                                  style: vn.avatar,
                                  uri: s ? s.profile_image_url_https : void 0,
                                  withLink: i,
                                })
                              })
                            : null,
                          o
                            ? null
                            : w.a.createElement(K.a, {
                                style: [vn.conversationLine, !c && vn.conversationLineWithOverflow],
                              }),
                        ),
                        avatarCellStyle: r ? vn.avatarContainerExpanded : vn.avatarContainer,
                        cellStyle: vn.rightColumn,
                      },
                      this._renderScheduledTweetLegend(),
                      w.a.createElement(
                        K.a,
                        { onFocus: this._handleEditorFocus, style: vn.inputArea },
                        w.a.createElement(
                          Ma.a,
                          {
                            allowDragDrop: !this.mediaAttachDisabled,
                            onDragEnter: this._handleFocus,
                            onFilesAdded: this._handleFilesAdded,
                            style: vn.dragDrop,
                          },
                          function (t) {
                            return w.a.createElement(
                              w.a.Fragment,
                              null,
                              w.a.createElement(K.a, { style: vn.composeBoxContainer }, e._renderMainContent()),
                            )
                          },
                        ),
                      ),
                      this._renderCommunitiesRulesEducation(),
                      w.a.createElement(
                        K.a,
                        { style: [(u || n) && vn.controlsContainer, p ? vn.mobileControlsLayout : vn.controlsLayout] },
                        this._renderConversationControls(d),
                        this._renderCommunitiesRules(p),
                        n ? this._renderTaggedLocation(n) : null,
                      ),
                      w.a.createElement(ka.b, { show: a && r }, this._renderToolbar(d)),
                    ),
                  )
                },
              },
              {
                key: '_renderGifButton',
                value: function () {
                  var e = this.props,
                    t = e.data,
                    n = t.media,
                    a = t.pollActive,
                    r = e.history,
                    i = e.loggedInUser,
                    o = e.setActiveParentKey,
                    s = a || n.length || !i
                  return w.a.createElement(ln.a, {
                    enabled: !s,
                    gifSearchKeySource: cn.a.Composition,
                    history: r,
                    onPress: o,
                    testID: ga,
                  })
                },
              },
              {
                key: '_renderPollButton',
                value: function () {
                  var e = this.props,
                    t = e.data,
                    n = t.media,
                    a = t.pollActive,
                    r = t.quotedStatus,
                    i = e.loggedInUser,
                    o = this._isScheduled(),
                    s = !(!(a || n.length || r || o) && i)
                  return w.a.createElement(X.a, {
                    accessibilityLabel: er,
                    behavioralEventContext: kr,
                    disabled: s,
                    hoverLabel: { label: cr },
                    icon: Ir,
                    onPress: this._handlePollAdd,
                    size: 'medium',
                    style: vn.toolBarButton,
                    testID: fa,
                    type: 'brandText',
                  })
                },
              },
              {
                key: '_renderGeoButton',
                value: function () {
                  var e = this.props,
                    t = e.data.taggedLocation,
                    n = e.geoEnabled,
                    a = e.loggedInUser,
                    r = !(n && a),
                    i = t ? w.a.createElement(Ba.a, null) : w.a.createElement(Va.a, null)
                  return w.a.createElement(X.a, {
                    accessibilityLabel: ur,
                    behavioralEventContext: Lr,
                    disabled: r,
                    hoverLabel: { label: ur },
                    icon: i,
                    onPress: this._handleGeoButtonClick,
                    size: 'medium',
                    style: vn.toolBarButton,
                    testID: va,
                    type: 'brandText',
                  })
                },
              },
              {
                key: '_renderMediaActions',
                value: function () {
                  var e = this.props.data,
                    t = e.gifMetadata,
                    n = e.media,
                    a = 0 !== e.mediaTags.length,
                    r =
                      n.some(function (e) {
                        return e.mediaFile && e.mediaFile.isGif
                      }) || this.hasExternalMedia
                  if (!(this.hasAttachedImage || this.hasAttachedVideo || t || r)) return null
                  var i = this.context.featureSwitches.isTrue('rweb_video_tagging_enabled')
                  return w.a.createElement(
                    K.a,
                    { style: vn.imageActions },
                    t && t.url && t.provider
                      ? w.a.createElement(
                          K.a,
                          { style: vn.addImageTextPadding },
                          w.a.createElement(sn.a, { gifUrl: t.url, provider: t.provider }),
                        )
                      : null,
                    (!this.hasAttachedImage && !i) || this._isScheduled()
                      ? null
                      : w.a.createElement(
                          O.b,
                          {
                            accessibilityLabel: hr,
                            color: 'gray700',
                            link: '/compose/tweet/tags',
                            style: [vn.addImageTextContainer, vn.addImageTextPadding],
                          },
                          a ? this._renderTaggedUsers() : this._renderTagPeopleLabel(),
                        ),
                    this.hasAttachedImage || r
                      ? w.a.createElement(
                          O.b,
                          {
                            accessibilityLabel: pr({ numberOfImages: n.length }),
                            color: 'gray700',
                            link: { pathname: '/compose/tweet/media', state: { mediaId: n[0].id, tab: 'alt_text' } },
                            onPress: this._handleClickAltTextShortcut,
                            style: vn.addImageTextContainer,
                          },
                          this._renderAltTextLabel(),
                        )
                      : null,
                    this.hasAttachedVideo ? this._renderSubtitlesLabel() : null,
                  )
                },
              },
              {
                key: '_renderTagPeopleLabel',
                value: function () {
                  return w.a.createElement(
                    O.b,
                    { color: 'gray700', size: 'subtext2', testID: ma },
                    w.a.createElement(Na.a, { style: vn.addImageActionIcon }),
                    hr,
                  )
                },
              },
              {
                key: '_renderTaggedUsers',
                value: function () {
                  var e = this.props,
                    t = e.data.mediaTags,
                    n = e.loggedInUser,
                    a = t.map(function (e) {
                      return {
                        name: e.data.name,
                        screen_name: e.data.screen_name,
                        type: e.type,
                        user_id: e.data.id_str,
                      }
                    })
                  return w.a.createElement(
                    O.b,
                    { color: 'gray700', size: 'subtext2', testID: ba },
                    w.a.createElement(ja.a, { style: vn.addImageActionIcon }),
                    w.a.createElement(Pa.a, { loggedInUserId: null == n ? void 0 : n.id_str, users: a }),
                  )
                },
              },
              {
                key: '_renderAltTextLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = e[0].mediaMetadata
                  return this.hasAttachedAltText
                    ? e.length > 1
                      ? w.a.createElement(
                          O.b,
                          { color: 'gray700', size: 'subtext2', testID: pa },
                          w.a.createElement(za.a, { style: vn.addImageActionIcon }),
                          mr({ numberOfAltTextEntries: this._getNumberOfAltTextEntries() }),
                        )
                      : w.a.createElement(
                          O.b,
                          { color: 'gray700', numberOfLines: 1, size: 'subtext2', testID: pa },
                          w.a.createElement(za.a, { style: vn.addImageActionIcon }),
                          null == t ? void 0 : t.altText,
                        )
                    : w.a.createElement(
                        O.b,
                        { color: 'gray700', size: 'subtext2', testID: pa },
                        w.a.createElement(Ua.a, { style: vn.addImageActionIcon }),
                        pr({ numberOfImages: e.length }),
                      )
                },
              },
              {
                key: '_renderSubtitlesLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = this.attachedSubtitles ? Ha.a : Wa.a
                  return w.a.createElement(
                    O.b,
                    {
                      accessibilityRole: 'button',
                      color: 'gray700',
                      link: { pathname: '/compose/tweet/media', state: { mediaId: e[0].id, tab: 'subtitles' } },
                      onPress: this._handleClickSubtitlesShortcut,
                      size: 'subtext2',
                      style: vn.addImageTextContainer,
                      testID: ua,
                    },
                    w.a.createElement(t, {
                      accessibilityLabel: this.attachedSubtitles ? vr : void 0,
                      style: vn.addImageActionIcon,
                    }),
                    this.attachedSubtitles ? this.attachedSubtitles.displayName : fr,
                  )
                },
              },
              {
                key: '_renderCountdownCircle',
                value: function () {
                  var e = this.props,
                    t = e.data.text,
                    n = e.twitterTextConfigurationVersion,
                    a = $a.a[n],
                    r = this._getParsedTweet(t).weightedLength
                  return w.a.createElement(La.a, {
                    count: r,
                    formatNumber: this._formatCountdownNumber,
                    maxCount: a.maxWeightedTweetLength,
                    warningCount: 260,
                  })
                },
              },
              {
                key: '_renderAddComposerButton',
                value: function () {
                  var e = this.props,
                    t = e.addComposerLink,
                    n = e.disableAddTweet,
                    a = e.isCommunityTweetFromProtectedUser,
                    r = e.loggedInUser,
                    i = e.onAddComposer,
                    o = this._isEmpty(),
                    s = this._isScheduled(),
                    l = n || o || s || !r || a
                  return w.a.createElement(X.a, {
                    accessibilityLabel: this.isReplyOrReplyThread ? ir : rr,
                    behavioralEventContext: Pr,
                    disabled: l,
                    hoverLabel: { label: sr },
                    icon: Sr,
                    link: l ? void 0 : t,
                    onPress: i,
                    size: 'xSmall',
                    testID: da,
                    type: 'brandOutlined',
                  })
                },
              },
              {
                key: 'mediaAttachDisabled',
                get: function () {
                  var e = this.props,
                    t = e.data,
                    n = t.media,
                    a = t.pollActive,
                    r = e.loggedInUser,
                    i = n.length,
                    o = n.some(function (e) {
                      var t
                      return null === (t = e.mediaFile) || void 0 === t ? void 0 : t.isGif
                    }),
                    s = n.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof dn.a) && e.mediaFile.isVideo
                    })
                  return 4 === i || o || s || a || this.hasExternalMedia || !r
                },
              },
              {
                key: 'hasAttachedImage',
                get: function () {
                  return this.props.data.media.some(function (e) {
                    var t
                    return null === (t = e.mediaFile) || void 0 === t ? void 0 : t.isImage
                  })
                },
              },
              {
                key: 'hasAttachedVideo',
                get: function () {
                  var e = this.props.data.media.some(function (e) {
                    var t
                    return null === (t = e.mediaFile) || void 0 === t ? void 0 : t.isVideo
                  })
                  return (
                    e &&
                      (this._videoTrimmerEnabled = this.context.featureSwitches.isTrue(
                        'responsive_web_video_trimmer_enabled',
                      )),
                    e
                  )
                },
              },
              {
                key: 'attachedSubtitles',
                get: function () {
                  var e,
                    t = this.props.data.media
                  if (this.hasAttachedVideo) {
                    var n = t.find(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof dn.a) && e.mediaFile.isVideo
                    })
                    return null == n || null === (e = n.mediaMetadata) || void 0 === e ? void 0 : e.subtitles
                  }
                },
              },
              {
                key: 'hasAttachedAltText',
                get: function () {
                  return this._getNumberOfAltTextEntries() > 0
                },
              },
              {
                key: 'hasExternalMedia',
                get: function () {
                  return this.props.data.media.some(function (e) {
                    return !!e.externalMediaDetails
                  })
                },
              },
              {
                key: 'shouldRenderCommunitiesRules',
                get: function () {
                  var e = this.props.audienceControlsValue,
                    t = this.context.featureSwitches.isTrue('c9s_enabled'),
                    n = e.communityIdValue || void 0,
                    a = t && n,
                    r = this._shouldRenderControls(!1, 'conversation')
                  return Boolean(r && a)
                },
              },
              {
                key: 'isReplyOrReplyThread',
                get: function () {
                  var e = this.props,
                    t = e.isReply,
                    n = e.isSelfThreadReply
                  return t && !n
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      _()(Dr, 'contextType', ce.a),
        _()(Dr, 'defaultProps', { twitterTextConfigurationVersion: 'defaults', withAvatar: !0 })
      var Ar = Object(G.a)(Dr),
        Or = w.a.createElement(O.b, { weight: 'bold' }),
        Fr = w.a.createElement(O.b, { color: 'link' }),
        Br = function (e) {
          return '@'.concat(e)
        },
        Vr = n('SrIh'),
        Nr = function (e) {
          return (null == e ? void 0 : e.screen_name) || ''
        },
        jr = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            r = e.loggedInUserId,
            i = {
              replyToOne: function (e) {
                var t = e.userName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'e34022a7' },
                  w.a.cloneElement(Fr, null, N.a.b50e199a({ userName: Br(t) })),
                )
              },
              replyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'bfd9c99a' },
                  w.a.cloneElement(Fr, null, N.a.f2e4dd37({ replyUserName: Br(t), otherUserName: Br(n) })),
                )
              },
              replyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'g7a1000e' },
                  w.a.cloneElement(
                    Fr,
                    null,
                    N.a.eccfddc3({ userOneName: Br(t), userTwoName: Br(a), userThreeName: Br(n) }),
                  ),
                )
              },
              replyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'i558c201' },
                  w.a.cloneElement(Fr, null, N.a.h758cd22({ userOneName: Br(n), userTwoName: Br(a), othersCount: t })),
                )
              },
              communityReplyToOne: function (e) {
                var t = e.communityName,
                  n = e.userName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'j935bcde', communityName: t },
                  w.a.cloneElement(Fr, null, N.a.e9f8a0eb({ userName: Br(n) })),
                )
              },
              communityReplyToTwo: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'i7bd9c8e', communityName: t },
                  w.a.cloneElement(Fr, null, N.a.df7e9fbc({ replyUserName: Br(n), otherUserName: Br(a) })),
                )
              },
              communityReplyToThree: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userThreeName,
                  r = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'cfa0049d', communityName: t },
                  w.a.cloneElement(
                    Fr,
                    null,
                    N.a.b45fa505({ userOneName: Br(n), userTwoName: Br(r), userThreeName: Br(a) }),
                  ),
                )
              },
              communityReplyToMany: function (e) {
                var t = e.communityName,
                  n = e.othersCount,
                  a = e.userOneName,
                  r = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'jfc8e4b4', communityName: t },
                  w.a.cloneElement(Fr, null, N.a.a4383815({ userOneName: Br(a), userTwoName: Br(r), othersCount: n })),
                )
              },
              exclusiveReplyToOne: function (e) {
                var t = e.userName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'a4e11010' },
                  w.a.cloneElement(Fr, null, N.a.ff792e35({ userName: Br(t) })),
                  w.a.cloneElement(Or, null, N.a.a18d8f1c),
                )
              },
              exclusiveReplyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'cf1b3321' },
                  w.a.cloneElement(Fr, null, N.a.g7d5e985({ replyUserName: Br(t), otherUserName: Br(n) })),
                  w.a.cloneElement(Or, null, N.a.af82725c),
                )
              },
              exclusiveReplyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'c83d647e' },
                  w.a.cloneElement(
                    Fr,
                    null,
                    N.a.fe5a61e9({ userOneName: Br(t), userTwoName: Br(a), userThreeName: Br(n) }),
                  ),
                  w.a.cloneElement(Or, null, N.a.f7126257),
                )
              },
              exclusiveReplyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'fec57cab' },
                  w.a.cloneElement(Fr, null, N.a.bc9dd514({ userOneName: Br(n), userTwoName: Br(a), othersCount: t })),
                  w.a.cloneElement(Or, null, N.a.de5071ba),
                )
              },
            },
            o = S.a({ inReplyToStatus: a, loggedInUserId: r }).filter(function (e) {
              var t = e.id_str
              return n.indexOf(t) < 0
            }),
            s = a.retweeted_status || a,
            l = s.exclusivity_info,
            c = s.user,
            d = o.filter(function (e) {
              return e.id_str !== c.id_str
            }),
            u = R()(d, 2),
            p = u[0],
            m = u[1],
            h = [c, p, m].map(Nr),
            f = R()(h, 3),
            v = f[0],
            g = f[1],
            y = f[2],
            b = o.length - 2
          switch (o.length) {
            case 0:
              return Object(Vr.a)('Compose reply context should not have 0 recipients'), null
            case 1:
              return t
                ? i.communityReplyToOne({ communityName: t, userName: v })
                : l
                ? i.exclusiveReplyToOne({ userName: v })
                : i.replyToOne({ userName: v })
            case 2:
              return t
                ? i.communityReplyToTwo({ communityName: t, userOneName: v, userTwoName: g })
                : l
                ? i.exclusiveReplyToTwo({ userOneName: v, userTwoName: g })
                : i.replyToTwo({ userOneName: v, userTwoName: g })
            case 3:
              return t
                ? i.communityReplyToThree({ communityName: t, userOneName: v, userTwoName: g, userThreeName: y })
                : l
                ? i.exclusiveReplyToThree({ userOneName: v, userTwoName: g, userThreeName: y })
                : i.replyToThree({ userOneName: v, userTwoName: g, userThreeName: y })
            default:
              return t
                ? i.communityReplyToMany({ communityName: t, userOneName: v, userTwoName: g, othersCount: b })
                : l
                ? i.exclusiveReplyToMany({ userOneName: v, userTwoName: g, othersCount: b })
                : i.replyToMany({ userOneName: v, userTwoName: g, othersCount: b })
          }
        },
        Ur = w.a.memo(jr),
        zr = n('fs1G'),
        Hr = n('BLtI'),
        Wr = n('kY28')
      function Gr(e) {
        null == e || e.preventDefault()
      }
      var Kr = B.a.create(function (e) {
          return {
            replyUsersContainer: {
              flexDirection: 'row',
              minHeight: e.spaces.space12,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: 0,
            },
            grid: { flexGrow: 1, flexShrink: 1 },
            repliesTextContainer: { flexGrow: 1 },
            repliesMessage: { flexGrow: 1, paddingBottom: e.spaces.space16, paddingTop: e.spaces.space4 },
            conversationLineContainer: { alignItems: 'center' },
            conversationLine: {
              backgroundColor: e.colors.gray200,
              flexGrow: 1,
              minHeight: 0,
              width: e.componentDimensions.conversationLineWidth,
              marginBottom: e.spaces.space4,
            },
          }
        }),
        qr = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            r = e.loggedInUserId,
            i = e.onPress,
            o = e.shouldDisplayRepliesText,
            s = e.showParentTweet,
            l = void 0 === s || s
          return w.a.createElement(
            K.a,
            null,
            l
              ? w.a.createElement(Hr.b, {
                  conversationPosition: { isStart: !0 },
                  linkableQuotedTweet: !1,
                  linkify: !1,
                  onAnalyticsClick: zr.a,
                  onAvatarClick: Gr,
                  onEntityClick: Gr,
                  onMediaClick: Gr,
                  onReplyContextClick: Gr,
                  replyContext: Wr.a.ReplyContextTypes.None,
                  tweet: a,
                  withAvatarLink: !1,
                  withCardLinks: !0,
                  withInlineMedia: !1,
                  withQuotedTweetLinks: !0,
                  withSocialContext: !1,
                  withTimestampLink: !1,
                  withUserHoverCard: !1,
                })
              : null,
            w.a.createElement(
              K.a,
              { style: Kr.replyUsersContainer },
              w.a.createElement(
                Sa.a,
                {
                  avatarCell: l ? w.a.createElement(K.a, { style: Kr.conversationLine }) : null,
                  avatarCellStyle: Kr.conversationLineContainer,
                  cellStyle: Kr.repliesTextContainer,
                  style: Kr.grid,
                },
                o
                  ? w.a.createElement(
                      O.b,
                      { accessibilityRole: 'button', color: 'gray700', onPress: i, style: l && Kr.repliesMessage },
                      w.a.createElement(Ur, {
                        communityName: t,
                        excludedRecipients: n,
                        inReplyToStatus: a,
                        loggedInUserId: r,
                      }),
                    )
                  : null,
              ),
            ),
          )
        },
        Xr = n('Tb0w'),
        Yr = n('1YZw'),
        Qr = n('pidX'),
        Jr = n('5oBF'),
        Zr = n('JYYi'),
        $r = n('/Rsk'),
        ei = n('u7LJ'),
        ti = n('XOJV'),
        ni = n('G6rE'),
        ai = n('AspN'),
        ri = n('oEGd'),
        ii = n('2iUg'),
        oi = n('P1r1'),
        si = ['mediaIds'],
        li = function (e) {
          return e.parentTweetId || (e.isInline ? Zr.a.homeTimeline : Zr.a.modal)
        },
        ci = function (e, t) {
          var n = li(t)
          return de.k(e, n)
        },
        di = function (e, t) {
          var n = li(t)
          return de.l(e, n)
        },
        ui = function (e, t) {
          var n = li(t)
          return de.j(e, n)
        },
        pi = function (e, t) {
          var n = _i(e, t),
            a = ui(e, t).communityIdValue || void 0,
            r = (null == n ? void 0 : n.community_id_str) || a,
            i = r ? k.c.select(e, r) : void 0
          return i ? i.name : void 0
        },
        mi = function (e, t) {
          var n = li(t)
          return de.m(e, n)
        },
        hi = function (e, t) {
          var n = li(t)
          return de.i(e, n)
        },
        fi = function (e) {
          return function (t, n) {
            var a = (function (e, t) {
              return t.location.state
            })(0, n)
            return a ? e(a) : void 0
          }
        },
        vi = Object(me.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          ni.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        gi = function (e, t) {
          return t.parentTweetId || yi(e, t) || bi(e, t)
        },
        yi = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        bi = fi(function (e) {
          return e.inReplyToStatusId
        }),
        _i = function (e, t) {
          var n = gi(e, t)
          return n ? ti.a.selectHydrated(e, n) : void 0
        },
        Ci = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        wi = fi(function (e) {
          return e.hasArticleNudge
        }),
        Ei = fi(function (e) {
          return e.convoCardData
        }),
        xi = fi(function (e) {
          return e.externalMedia
        }),
        Ti = fi(function (e) {
          return e.externalMediaFiles
        }),
        Si = fi(function (e) {
          return e.previewTweetId
        }),
        Ii = fi(function (e) {
          return e.defaultText
        }),
        Ri = function (e, t) {
          var n = Ii(e, t),
            a = Object(Qr.a)(t.location)
          return (Ci(0, t) ||
            (function (e, t) {
              return t.location.pathname.indexOf('/compose/tweet') > -1
            })(0, t)) &&
            a
            ? a
            : n
        },
        Mi = fi(function (e) {
          return e.quotedStatusId
        }),
        ki = fi(function (e) {
          return e.quotedStatus
        }),
        Pi = function (e, t) {
          return (
            (function (e, t) {
              return t.quotedStatus ? t.quotedStatus : ki(e, t)
            })(e, t) ||
            (function (e, t) {
              var n = Mi(e, t)
              return n ? ti.a.selectHydratedMemoized(e, n) : void 0
            })(e, t)
          )
        },
        Li = fi(function (e) {
          return e.isSelfThreadReply
        }),
        Di = fi(function (e) {
          return e.positionCursorAtBeginning
        }),
        Ai = fi(function (e) {
          return e.promotedContent
        }),
        Oi = function () {
          return Object(me.createSelector)(ci, Ri, Pi, ai.j, function (e, t, n, a) {
            return e.map(function (e, r) {
              return l()(
                l()({}, ((i = e).mediaIds, Vt()(i, si))),
                {},
                {
                  media: a.filter(function (t) {
                    return e.mediaIds.some(function (e) {
                      return e === t.id
                    })
                  }),
                  quotedStatus: 0 === r ? n : void 0,
                  text: 0 === r && t ? t : e.text,
                },
              )
              var i
            })
          })
        },
        Fi = {
          addComposer: de.a,
          addToast: Yr.b,
          createLocalApiErrorHandler: Object(ge.createLocalApiErrorHandlerWithContextFactory)('SCREEN_COMPOSE_V2'),
          checkTweetForNudge: de.b,
          deletePreviewTweet: Jr.c,
          fetchAltTextPromptPreferenceIfNeeded: ii.a,
          fetchAutotaggedLocationIfNeeded: $r.a,
          fetchTweetIfNeeded: ti.a.fetchOneIfNeeded,
          removeComposer: de.e,
          resetDraft: de.f,
          retweet: ti.a.retweet,
          schedule: de.h,
          draftTweet: de.d,
          send: de.q,
          updateActiveComposerIndex: de.s,
          updateAudienceControlsValue: de.t,
          updateConvoCardState: Xr.b,
          preUploadMedia: ai.e,
          addMedia: ai.b,
          processMultipleMedia: ai.g,
          removeMediaUpload: ai.i,
          removeToast: Yr.c,
          updateSingleComposer: de.w,
          setActiveParentKey: de.r,
          copyDataFromInlineComposerToModalComposer: de.c,
        },
        Bi = Object(ri.e)(function () {
          return Object(me.createStructuredSelector)({
            activeComposerIndex: hi,
            activeUser: vi,
            altTextNudgeType: ii.b,
            audienceControlsValue: ui,
            composerData: Oi(),
            dataSaverMode: oi.j,
            excludedRecipients: di,
            externalMedia: xi,
            externalMediaFiles: Ti,
            geoEnabled: oi.o,
            hasArticleNudge: wi,
            inReplyToStatus: _i,
            inReplyToStatusId: gi,
            isIntentRoute: Ci,
            isSelfThreadReply: Li,
            isSending: mi,
            isSuperFollowsCreator: fe.l,
            positionCursorAtBeginning: Di,
            loggedInUser: ni.e.selectLoggedInUser,
            prepopulatedText: Ri,
            previewTweetId: Si,
            promotedContent: Ai,
            scheduledFor: de.n,
            selectedCommunityName: pi,
            sendingProgress: de.o,
            convoCardData: Ei,
            undoTweetSettings: ei.b,
            userLanguage: fe.o,
            quotedStatusId: Mi,
          })
        }, Fi),
        Vi = n('45mF'),
        Ni = n('c0ZR'),
        ji = n('W5XZ'),
        Ui = n('Drq4'),
        zi = n('0uGn'),
        Hi = n('I8M8'),
        Wi = n('7myi'),
        Gi = n('7nmT'),
        Ki = n.n(Gi),
        qi = n('vbWy'),
        Xi = n('Rp9C'),
        Yi = n('Q5Mu'),
        Qi = n('N5qz'),
        Ji = 'tweetButton',
        Zi = 'tweetButtonInline',
        $i = Object(P.a)()
          .propsFromState(function () {
            return { loggedInUser: ni.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return {
              userName: t && t.name,
              userProfileImageUrl: t && t.profile_image_url_https,
              userScreenName: t && t.screen_name,
            }
          })
          .withAnalytics(),
        eo = n('cHvH'),
        to = n('sgih'),
        no = n('xKuM'),
        ao = n('5Vk4'),
        ro = B.a.create(function (e) {
          return {
            mainCard: {
              marginHorizontal: 'auto',
              paddingVertical: e.spaces.space16,
              textAlign: 'center',
              alignItems: 'center',
            },
            largeScreenCard: { width: '70%' },
            smallScreenCard: { width: '85%' },
            sheetStyle: { justifyContent: 'center' },
          }
        }),
        io = function (e) {
          var t = e.actionButtonType,
            n = e.children,
            a = e.onActionButtonClick,
            r = e.onMaskClick,
            i = e.sheetType,
            o = e.showActionButton
          return w.a.createElement(eo.a, null, function (e) {
            var s = e.windowWidth > B.a.theme.breakpoints.small
            return w.a.createElement(
              to.a,
              { onMaskClick: r, style: ro.sheetStyle, type: i, withMask: !0 },
              o &&
                w.a.createElement(no.a, {
                  leftControl: w.a.createElement(ao.a, { backButtonType: t, onClick: a }),
                  position: 'absolute',
                }),
              w.a.createElement(K.a, { style: [ro.mainCard, s ? ro.largeScreenCard : ro.smallScreenCard] }, n),
            )
          })
        },
        oo = N.a.cb7c0987,
        so = N.a.de3bcf27,
        lo = N.a.e710ce75,
        co = N.a.h11e5910,
        uo = N.a.b7ec04f3,
        po = N.a.i62a03aa,
        mo = B.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
          }
        }),
        ho = function (e) {
          var t = e.onBack,
            n = e.onNo,
            a = e.onYes
          return w.a.createElement(
            io,
            {
              actionButtonType: 'back',
              onActionButtonClick: t,
              onMaskClick: t,
              sheetType: 'full',
              showActionButton: !0,
            },
            w.a.createElement(O.b, { size: 'title4', style: mo.itemPadding, weight: 'heavy' }, oo),
            w.a.createElement(O.b, { color: 'gray700', style: mo.itemPadding }, so),
            w.a.createElement(O.b, { color: 'gray700', style: mo.itemPadding }, lo),
            w.a.createElement(
              K.a,
              { style: mo.buttonContainer },
              w.a.createElement(O.b, { size: 'title4', style: mo.itemPadding, weight: 'heavy' }, co),
              w.a.createElement(X.a, { onPress: a, style: mo.itemPadding, type: 'brandOutlined' }, uo),
              w.a.createElement(X.a, { onPress: n, style: mo.itemPadding, type: 'brandOutlined' }, po),
            ),
          )
        },
        fo = n('cm6r'),
        vo = B.a.create(function (e) {
          return { button: { width: e.spaces.space72, height: e.spaces.space72, marginBottom: e.spaces.space12 } }
        }),
        go = function (e) {
          var t = e.icon,
            n = e.label,
            a = e.onPress
          return w.a.createElement(fo.a, { interactiveStyles: null, onPress: a }, function (e) {
            return w.a.createElement(
              w.a.Fragment,
              null,
              w.a.createElement(X.a, {
                icon: t,
                interactivityState: e,
                size: 'xLarge',
                style: vo.button,
                type: 'primaryOutlined',
              }),
              w.a.createElement(O.b, { color: 'gray700' }, n),
            )
          })
        },
        yo = n('sjK1'),
        bo = n('FDY4'),
        _o = n('tevE'),
        Co = n('jV+4'),
        wo = n('UgB4'),
        Eo = n('TW8A'),
        xo = n('hiGS'),
        To = n('WtWS'),
        So = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Xe.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [qe.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            w.a.createElement(
              'g',
              null,
              w.a.createElement('path', {
                d: 'M17.928 9.026l.095 3.545H19l.1-3.544h-1.172zm.586 5.394c.414 0 .667-.238.667-.623 0-.388-.252-.626-.666-.626-.41 0-.667.24-.667.627 0 .385.257.623.667.623zm-4.57-.11h.813l.278-1.384h.89l.15-.813h-.883l.198-.96h.875l.15-.805h-.864l.268-1.326h-.813l-.27 1.326h-.946l.263-1.326h-.81l-.27 1.326h-.846l-.154.806h.846l-.2.96h-.83l-.15.812h.824l-.278 1.384h.81l.277-1.384h.952l-.28 1.384zm-.578-2.124l.227-1.102h1.055l-.23 1.102h-1.052zm-5.889-.941c.388 0 .634.32.634.835s-.244.835-.636.835c-.385 0-.615-.315-.615-.835-.002-.524.23-.835.617-.835zM7.595 9C5.763 9 4.5 10.245 4.5 12.054c0 1.838 1.25 3.05 3.157 3.05.388 0 .765-.047 1.05-.13v-.598c-.204.073-.603.12-.995.12-1.556 0-2.542-.937-2.542-2.423 0-1.46.985-2.48 2.402-2.48 1.392 0 2.307.865 2.307 2.19 0 .744-.24 1.213-.61 1.213-.222 0-.35-.15-.35-.41v-1.94h-.74v.435h-.065c-.147-.325-.465-.515-.857-.515-.732 0-1.23.604-1.23 1.494 0 .93.505 1.544 1.267 1.544.425 0 .725-.19.88-.56h.065c.08.352.414.57.872.57.886 0 1.44-.728 1.44-1.892C10.55 10.106 9.348 9 7.594 9z',
              }),
            ),
          )
        }
      So.metadata = { width: 24, height: 24 }
      var Io = So,
        Ro = [
          { headlineText: N.a.f3a7a80c, subTextLine1: N.a.ge52d1de, subTextLine2: null },
          { headlineText: N.a.j311bf49, subTextLine1: N.a.ae42ebff, subTextLine2: N.a.aa350ab1 },
          { headlineText: N.a.j18b2956, subTextLine1: N.a.f6bee896, subTextLine2: N.a.dddd0995 },
          { headlineText: N.a.d02a94fa, subTextLine1: N.a.dddd0995, subTextLine2: null },
          { headlineText: N.a.i018b746, subTextLine1: N.a.b8d85df9, subTextLine2: N.a.d5ca11f0 },
        ],
        Mo = N.a.h11e5910,
        ko = N.a.abd845fd,
        Po = N.a.bea869b3,
        Lo = N.a.d96cf7cd,
        Do = N.a.d3145da8,
        Ao = B.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
            profanityIcon: {
              backgroundColor: e.colors.primary,
              color: e.colors.whiteOnColor,
              width: e.spaces.space48,
              height: e.spaces.space48,
              borderRadius: e.borderRadii.infinite,
            },
            tweetContainer: {
              borderColor: e.colors.nestedBorderColor,
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.large,
              width: '100%',
              textAlign: 'left',
            },
            tweetContent: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 },
            tweetBody: { flexDirection: 'row' },
            userName: { paddingBottom: e.spaces.space4 },
            mobileButtonContainer: {
              justifyContent: 'space-around',
              flexDirection: 'row',
              width: '100%',
              marginTop: e.spaces.space72,
            },
            thanksContainer: { flexDirection: 'row', alignItems: 'center' },
            thanksCheckMark: { color: B.a.theme.colors.primary, marginRight: e.spaces.space8 },
            photos: {
              borderRadius: e.borderRadii.xLarge,
              overflow: 'hidden',
              marginRight: e.spaces.space12,
              flex: '3 1 0%',
            },
            textStyle: { flex: '8 1 0%' },
          }
        }),
        Oo = function (e) {
          var t = e.hasSentFeedback,
            n = e.media,
            a = e.onDeleteTweet,
            r = e.onDismiss,
            i = e.onEditTweet,
            o = e.onSendTweet,
            s = e.onWeGotItWrong,
            l = e.tweetText,
            c = e.userName,
            d = e.userProfileImageUrl,
            u = e.userScreenName,
            p = w.a.useContext(ce.a).featureSwitches.getNumberValue('responsive_web_reply_nudge_copy_version'),
            m = Ro[(p = p >= 0 && p <= 4 ? p : 0)]
          return w.a.createElement(eo.a, null, function (e) {
            var p,
              h,
              f,
              v = e.windowWidth
            return w.a.createElement(
              io,
              {
                actionButtonType: 'close',
                onActionButtonClick: r,
                onMaskClick: r,
                sheetType: 'full',
                showActionButton: v > B.a.theme.breakpoints.medium,
              },
              w.a.createElement(Io, { style: [Ao.profanityIcon, Ao.itemPadding] }),
              w.a.createElement(_o.a, { size: 'title4', style: Ao.itemPadding, weight: 'heavy' }, m.headlineText),
              w.a.createElement(O.b, { color: 'gray700', style: Ao.itemPadding }, m.subTextLine1),
              w.a.createElement(O.b, { color: 'gray700', style: Ao.itemPadding }, m.subTextLine2),
              w.a.createElement(
                K.a,
                { style: [Ao.tweetContainer, Ao.itemPadding] },
                w.a.createElement(
                  K.a,
                  { style: Ao.tweetContent },
                  w.a.createElement(Co.a, { name: c, profileImageUrl: d, screenName: u, style: Ao.userName }),
                  w.a.createElement(
                    K.a,
                    { style: Ao.tweetBody },
                    (function () {
                      if (0 === n.length) return null
                      var e = n.map(function (e) {
                        var t,
                          n,
                          a,
                          r = ''
                        if (e.externalMediaDetails) r = e.externalMediaDetails.stillMediaUrl
                        else if (e.mediaFile instanceof yo.c) r = e.mediaFile.thumbnail
                        else if (null !== (t = e.mediaFile) && void 0 !== t && t.url) {
                          var i
                          r = null === (i = e.mediaFile) || void 0 === i ? void 0 : i.url
                        }
                        return {
                          accessibilityLabel: '',
                          url: r,
                          width: (null === (n = e.mediaFile) || void 0 === n ? void 0 : n.width) || 100,
                          height: (null === (a = e.mediaFile) || void 0 === a ? void 0 : a.height) || 100,
                          expandedUrl: '',
                          shouldShowAltLabel: !1,
                        }
                      })
                      return w.a.createElement(
                        K.a,
                        { style: Ao.photos },
                        w.a.createElement(bo.a, {
                          containerAspectRatio: 1,
                          images: e,
                          previewMode: !1,
                          singleImageMaxAspectRatio: 1,
                          singleImageMinAspectRatio: 1,
                          withCenterCrop: !0,
                          withLink: !1,
                        }),
                      )
                    })(),
                    w.a.createElement(O.b, { style: Ao.textStyle }, l),
                  ),
                ),
              ),
              t
                ? w.a.createElement(
                    K.a,
                    { style: Ao.thanksContainer },
                    w.a.createElement(To.a, { style: Ao.thanksCheckMark }),
                    w.a.createElement(O.b, { align: 'center', style: Ao.itemPadding }, Do),
                  )
                : w.a.createElement(O.b, { align: 'center', onPress: s, style: Ao.itemPadding, withUnderline: !0 }, Mo),
              v > B.a.theme.breakpoints.small
                ? w.a.createElement(
                    K.a,
                    { style: Ao.buttonContainer },
                    w.a.createElement(X.a, { onPress: i, style: Ao.itemPadding, type: 'brandFilled' }, ko),
                    w.a.createElement(X.a, { onPress: o, style: Ao.itemPadding, type: 'brandOutlined' }, Po),
                    w.a.createElement(X.a, { onPress: a, style: Ao.itemPadding, type: 'destructiveText' }, Lo),
                  )
                : ((p = w.a.createElement(wo.a, { style: { color: B.a.theme.colors.text } })),
                  (h = w.a.createElement(Eo.a, { style: { color: B.a.theme.colors.primary } })),
                  (f = w.a.createElement(xo.a, { style: { color: B.a.theme.colors.red500 } })),
                  w.a.createElement(
                    K.a,
                    { style: Ao.mobileButtonContainer },
                    w.a.createElement(go, { icon: p, label: Po, onPress: o }),
                    w.a.createElement(go, { icon: h, label: ko, onPress: i }),
                    w.a.createElement(go, { icon: f, label: Lo, onPress: a }),
                  )),
            )
          })
        },
        Fo = $i(function (e) {
          var t = e.analytics,
            n = e.media,
            a = e.nudgeId,
            r = e.onDeleteTweet,
            i = e.onDismiss,
            o = e.onEditTweet,
            s = e.onSendTweet,
            l = e.tweetText,
            c = e.userName,
            d = e.userProfileImageUrl,
            u = e.userScreenName,
            p = w.a.useState(!1),
            m = R()(p, 2),
            h = m[0],
            f = m[1],
            v = w.a.useState(!1),
            g = R()(v, 2),
            y = g[0],
            b = g[1],
            _ = function (e) {
              var n = e.action,
                r = e.element,
                i = e.page,
                o = [{ nudge_id: a }]
              t.scribe({ action: n, data: { items: o }, element: r, page: i, section: 'dialog' })
            }
          return h
            ? w.a.createElement(ho, {
                onBack: function () {
                  _({ action: 'back', element: 'action', page: 'nudge_more_info' }), f(!1)
                },
                onNo: function () {
                  _({ action: 'got_it_wrong_no', element: 'action', page: 'nudge_more_info' }), b(!0), f(!1)
                },
                onYes: function () {
                  _({ action: 'got_it_wrong_yes', element: 'action', page: 'nudge_more_info' }), b(!0), f(!1)
                },
              })
            : w.a.createElement(Oo, {
                hasSentFeedback: y,
                media: n,
                onDeleteTweet: function () {
                  _({ action: 'cancel', element: 'action', page: 'nudge' }), r()
                },
                onDismiss: function () {
                  _({ action: 'dismiss', element: 'action', page: 'nudge' }), i()
                },
                onEditTweet: function () {
                  _({ action: 'revise', element: 'action', page: 'nudge' }), o()
                },
                onSendTweet: function () {
                  _({ action: 'send', element: 'action', page: 'nudge' }), s()
                },
                onWeGotItWrong: function () {
                  _({ action: 'more_info', element: 'action', page: 'nudge' }),
                    _({ action: 'impression', page: 'nudge_more_info' }),
                    f(!0)
                },
                tweetText: l,
                userName: c,
                userProfileImageUrl: d,
                userScreenName: u,
              })
        }),
        Bo = n('aITJ'),
        Vo = n('eb3s'),
        No = n('JYMr'),
        jo = n('sCk0'),
        Uo = n('3A2y'),
        zo = n('zrOZ'),
        Ho = n('s1N3'),
        Wo = n('4FGy'),
        Go = n('mN6z'),
        Ko = n('eyty'),
        qo = n('rziq'),
        Xo = n('lsKC'),
        Yo = n('jTgF'),
        Qo = N.a.d28215f0,
        Jo = N.a.ec909a54,
        Zo = N.a.jd53409d,
        $o = {
          singular: N.a.edae65de,
          plural: N.a.a859846a,
          oneOfMultiple: N.a.e90118f5,
          someOfMultiple: N.a.c211dcb1,
        },
        es = { singular: N.a.d7c26bfb, plural: N.a.a75e3ccc },
        ts = N.a.dcb7e3a0,
        ns = function (e) {
          var t,
            n,
            a = e.numberOfDescriptionsMissing,
            r = a === e.numberOfImages
          return (
            1 === a
              ? ((n = es.singular), (t = r ? $o.singular : $o.oneOfMultiple))
              : ((n = es.plural), (t = r ? $o.plural : $o.someOfMultiple)),
            ''.concat(t, ' ').concat(n, ' ').concat(ts)
          )
        },
        as = N.a.c1bf53b0,
        rs = N.a.bb8170da,
        is = N.a.dad5a4b8,
        os = N.a.e65aed64,
        ss = N.a.bc2ceaf2,
        ls = N.a.d8222374,
        cs = N.a.j890123a,
        ds = N.a.bb01231c,
        us = N.a.d4ab68e2,
        ps = N.a.d8af8a4c,
        ms = N.a.d09d4c05,
        hs = N.a.i2209530,
        fs = N.a.bf9b89e4,
        vs = N.a.f277e949,
        gs = N.a.b551cd22,
        ys = N.a.f026a7fa,
        bs = N.a.a5d4fda0,
        _s = N.a.ib067d6a,
        Cs = T.canUseDOM && document.documentElement && 'scrollBehavior' in document.documentElement.style,
        ws = { element: 'alt_text_prompt' },
        Es = { component: 'article_nudge' },
        xs = { viewType: 'send_tweet' },
        Ts = Object.freeze({ Original: 'original', Reply: 'reply', Quote: 'quote', Thread: 'thread' }),
        Ss = (function (e) {
          v()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r, i, s
            d()(this, n),
              (s = t.call(this, e, a)),
              _()(h()(s), '_getParentKey', function () {
                var e = s.props,
                  t = e.isInline
                return e.parentTweetId || (t ? Zr.a.homeTimeline : Zr.a.modal)
              }),
              _()(h()(s), '_updateSingleComposer', function (e, t) {
                return (0, s.props.updateSingleComposer)({ updates: e, index: t, parentKey: s._getParentKey() })
              }),
              _()(h()(s), '_resetDraft', function () {
                ;(0, s.props.resetDraft)({ parentKey: s._getParentKey(), isPreview: s.isPreview })
              }),
              _()(h()(s), '_fetchAutotaggedLocationIfNeeded', function () {
                var e = s.props,
                  t = e.createLocalApiErrorHandler
                return (0, e.fetchAutotaggedLocationIfNeeded)().catch(t())
              }),
              _()(h()(s), '_syncTexts', function () {
                var e = s.props.composerData,
                  t = s.state.textMap
                e.forEach(function (e, n) {
                  var a = t[e.key]
                  'string' == typeof a && a !== e.text && s._updateSingleComposer({ text: a }, n)
                })
              }),
              _()(h()(s), '_hasGif', function (e) {
                return (
                  e.gifMetadata ||
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isGif
                  })
                )
              }),
              _()(h()(s), '_hasPhoto', function (e) {
                return (
                  e.media &&
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isImage
                  })
                )
              }),
              _()(h()(s), '_hasVideo', function (e) {
                return (
                  e.media &&
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isVideo && !e.mediaFile.isGif
                  })
                )
              }),
              _()(h()(s), '_handleDeletePreviewTweet', function () {
                var e = s.props,
                  t = e.deletePreviewTweet,
                  n = e.previewTweetId,
                  a = e.removeToast
                n && (a(), t(n))
              }),
              _()(h()(s), '_handleAnimateComplete', function () {
                var e = s.props,
                  t = e.activeComposerIndex,
                  n = e.onHandleAppBarHeight,
                  a = Ki.a.findDOMNode(s._composerRefs[t])
                if (a instanceof window.Element) {
                  var r = a.getBoundingClientRect(),
                    i = r.bottom,
                    o = r.top,
                    l = Math.max(o, window.scrollY)
                  if (l < window.pageYOffset || i > window.innerHeight) {
                    var c = n ? l - n() - 14 : l - 14,
                      d = Math.max(c, 0)
                    window.requestAnimationFrame(function () {
                      Cs ? window.scrollTo({ top: d, left: 0, behavior: 'smooth' }) : window.scrollTo(0, d)
                    })
                  }
                }
              }),
              _()(h()(s), '_handleFetchTweetIfNeeded', function () {
                var e = s.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchTweetIfNeeded,
                  a = e.inReplyToStatus,
                  r = e.inReplyToStatusId,
                  i = e.quotedStatus,
                  o = e.quotedStatusId
                !a && r && n(r).catch(t(ji.a)), !i && o && n(o).catch(t(ji.a))
              }),
              _()(h()(s), '_blockHistory', function (e, t) {
                var n = s.props,
                  a = n.audienceControlsValue,
                  r = n.isInline,
                  i = !r && /unsent/.test(e.pathname),
                  o = !r && !/\/compose\/tweet\/?$/.test(e.pathname)
                return s.shouldShowDiscardConfirmation && 'POP' === t && o
                  ? (s.setState({ showDiscardTweetConfirmation: !0 }), !1)
                  : s._canSaveDraft && i && 'PUSH' === t
                  ? s.shouldShowDiscardConfirmation
                    ? (s.setState({ showDiscardTweetConfirmation: !0, navigatingToOutbox: i }), !1)
                    : (s._resetDraft(), !0)
                  : s.shouldShowBackgroundSendConfirmation && 'POP' === t && o
                  ? (s._cancelAllMediaUploads(), !1)
                  : !('POP' === t && o && s._areComposersEmptyOrUnchanged && !Object(pn.a)(a)) || (s._resetDraft(), !0)
              }),
              _()(h()(s), '_getKeyCommandHandlers', function () {
                return s.state.typeaheadActive ? s._keyCommandHandlersForActiveTypeahead : s._keyCommandHandlers
              }),
              _()(h()(s), 'handleTweetOrRetweet', function () {
                if (
                  (s._scribe({ section: 'composition', element: 'send_tweet', action: 'click' }),
                  s._areComposersValid())
                )
                  return s.shouldShowAltTextPrompt
                    ? (s.setState({ showAltTextPrompt: !0 }), void s._scribe(l()(l()({}, ws), {}, { action: 'show' })))
                    : s._handleTweetOrRetweet()
              }),
              _()(h()(s), '_handleTweetOrRetweet', function () {
                return s.isRetweet ? s._handleRetweet() : s._handleTweet()
              }),
              _()(h()(s), '_renderReplyContext', function () {
                var e = s.props,
                  t = e.activeUser,
                  n = e.excludedRecipients,
                  a = e.inReplyToStatus,
                  r = e.isInline,
                  i = e.isSelfThreadReply,
                  o = e.selectedCommunityName
                if (a && s._shouldBeExpanded())
                  return w.a.createElement(qr, {
                    communityName: o,
                    excludedRecipients: n,
                    inReplyToStatus: a,
                    key: n.join(),
                    loggedInUserId: t ? t.id_str : void 0,
                    onPress: s._handleViewRecipients,
                    shouldDisplayRepliesText: !i,
                    showParentTweet: !r,
                  })
              }),
              _()(h()(s), '_renderAltTextPrompt', function () {
                var e = s._getAltTextMetadata(),
                  t = e.numberOfDescriptionsMissing,
                  n = e.numberOfImages
                return w.a.createElement(Vo.a, {
                  Icon: Ui.a,
                  cancelButtonLabel: rs,
                  confirmButtonLabel: as({ numOfDescriptions: t }),
                  headline: Zo,
                  onCancel: s._handleIgnoreAltTextPrompt,
                  onConfirm: s._handleAcceptAltTextPrompt,
                  onMaskClick: s._handleCancelAltTextPrompt,
                  text: ns({ numberOfDescriptionsMissing: t, numberOfImages: n }),
                })
              }),
              _()(h()(s), '_renderToxicReplyNudge', function () {
                var e = s._getSingleComposerDataWithLatestText(s.props.composerData[0]),
                  t = e.text,
                  n = e.media
                return w.a.createElement(Fo, {
                  media: n,
                  nudgeId: s.state.nudgeId,
                  onDeleteTweet: s._handleReplyNudgeDeleteTweet,
                  onDismiss: s._handleReplyNudgeDismiss,
                  onEditTweet: s._handleReplyNudgeEditTweet,
                  onSendTweet: s._handleReplyNudgeSendTweet,
                  tweetText: t,
                })
              }),
              _()(h()(s), '_handleAddComposer', function () {
                var e = s.props,
                  t = e.addComposer,
                  n = e.copyDataFromInlineComposerToModalComposer,
                  a = e.isInline,
                  r = e.parentTweetId
                s.isInlineReply ? n(r) : a && n(Zr.a.homeTimeline), t()
              }),
              _()(
                h()(s),
                '_makeAddComposerLink',
                Object(bn.a)(function (e, t, n) {
                  return Object(Xo.c)({ isInline: e, isSelfThreadReply: t, parentTweetId: n })
                }),
              ),
              _()(h()(s), '_handleReplyNudgeDeleteTweet', function () {
                s._hideToxicReplyNudge(), s._handleConfirmDiscardTweet()
              }),
              _()(h()(s), '_handleReplyNudgeDismiss', function () {
                s._hideToxicReplyNudge()
              }),
              _()(h()(s), '_handleReplyNudgeEditTweet', function () {
                s._hideToxicReplyNudge()
              }),
              _()(h()(s), '_handleReplyNudgeSendTweet', function () {
                s._hideToxicReplyNudge(), s._handleSendTweet()
              }),
              _()(h()(s), '_setRootRef', function (e) {
                e && (s._root = e)
              }),
              _()(h()(s), '_handleTweet', function () {
                var e = s.props.composerData[0].scheduledFor
                s.setState({ errorMessage: void 0 }),
                  e ? Object(mn.h)(e) && s._handleScheduleTweet() : s._checkToxicReplyAndSendTweet()
              }),
              _()(h()(s), '_handleTweetError', function (e, t) {
                return function (n) {
                  var a = s.props,
                    r = a.analytics,
                    i = a.createLocalApiErrorHandler
                  if (Object(Yo.d)(n) && n.code === Hi.b.CANCELED) return r.scribeAction(e), Promise.resolve()
                  var o = Object(Yo.b)(n)
                  if (o) return s.setState({ errorMessage: o }), Promise.resolve()
                  var c = t || Object(Vi.a)(void 0, !1)
                  i(l()({}, c))(n)
                  var d = n instanceof x.a && (null == t ? void 0 : t[n.errors[0].code])
                  s.setState({ errorMessage: { text: d ? d.toast.text : bs } })
                }
              }),
              _()(h()(s), '_handleScheduleTweet', function () {
                var e = s.props,
                  t = e.addToast,
                  n = e.composerData,
                  a = e.excludedRecipients,
                  r = e.inReplyToStatus,
                  i = e.schedule,
                  o = s._getSingleComposerDataWithLatestText(n[0])
                i({ excludedRecipients: a, inReplyToStatus: r, scheduleData: o })
                  .then(function (e) {
                    s.setState({ tweetsSentOrScheduled: !0 })
                    var a = Object(mn.c)(o.scheduledFor)
                    if (a) {
                      var r = Object(mn.b)(a),
                        i = Object(mn.i)(a),
                        c = gs({ scheduleDate: r, scheduleTime: i })
                      t({ text: c, action: { label: vs, link: '/compose/tweet/unsent/scheduled' } }),
                        s._scribeTweetSent(n[0], l()(l()({}, e), {}, { id_str: e.scheduled_id_str }), {
                          isScheduled: !0,
                        })
                    }
                    s._updateConvoCardState(), s._close()
                  })
                  .catch(s._handleTweetError('schedule_tweet_cancel'))
              }),
              _()(h()(s), '_handleDraftTweet', function () {
                var e = s.props,
                  t = e.addToast,
                  n = e.composerData
                ;(0, e.draftTweet)({
                  excludedRecipients: e.excludedRecipients,
                  inReplyToStatus: e.inReplyToStatus,
                  draftData: s._getSingleComposerDataWithLatestText(n[0]),
                })
                  .then(function (e) {
                    s.setState({ showDiscardTweetConfirmation: !1 }),
                      t({ text: fs, action: { label: vs, link: '/compose/tweet/unsent/drafts' } }),
                      s._scribeTweetSent(n[0], l()(l()({}, e), {}, { id_str: e.draft_id_str }), { isDraftTweet: !0 }),
                      s._updateConvoCardState(),
                      s._close()
                  })
                  .catch(s._handleTweetError('draft_tweet_cancel', Yi.a))
              }),
              _()(h()(s), '_checkToxicReply', function () {
                var e = s.props,
                  t = e.checkTweetForNudge,
                  n = e.composerData,
                  a = e.inReplyToStatus,
                  r = e.inReplyToStatusId,
                  i = e.parentTweetId,
                  o = t(
                    s._getSingleComposerDataWithLatestText(n[0]).text,
                    i || r,
                    null == a ? void 0 : a.conversation_id_str,
                  ).then(function (e) {
                    var t, n, a, r, i, o, l
                    if (
                      !s.context.featureSwitches
                        .getArrayValue('responsive_web_reply_nudge_supported_languages')
                        .includes(
                          null === (t = e.create_nudge) || void 0 === t || null === (n = t.nudge) || void 0 === n
                            ? void 0
                            : n.proposed_tweet_language,
                        )
                    )
                      return !1
                    var c =
                        null == e ||
                        null === (a = e.create_nudge) ||
                        void 0 === a ||
                        null === (r = a.nudge) ||
                        void 0 === r ||
                        null === (i = r.nudge_type) ||
                        void 0 === i
                          ? void 0
                          : i.__typename,
                      d =
                        null == e ||
                        null === (o = e.create_nudge) ||
                        void 0 === o ||
                        null === (l = o.nudge) ||
                        void 0 === l
                          ? void 0
                          : l.id
                    return d && s.setState({ nudgeId: d }), !!c
                  }),
                  l = new Promise(function (e, t) {
                    return setTimeout(e, 1e3, !1)
                  })
                return Promise.race([o, l])
              }),
              _()(h()(s), '_showToxicReplyNudge', function () {
                s._scribe(
                  { page: 'nudge', section: 'dialog', action: 'impression' },
                  { items: [{ nudge_id: s.state.nudgeId }] },
                ),
                  s.setState({ showToxicReplyNudge: !0 })
              }),
              _()(h()(s), '_hideToxicReplyNudge', function () {
                return s.setState({ showToxicReplyNudge: !1 })
              }),
              _()(h()(s), '_checkToxicReplyAndSendTweet', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.isSelfThreadReply,
                  a = s.state.nudgeId
                if (
                  !(
                    !s._getSingleComposerDataWithLatestText(t[0]).scheduledFor &&
                    s.isReply &&
                    !n &&
                    s.context.featureSwitches.isTrue('responsive_web_reply_nudge_enabled') &&
                    !a
                  )
                )
                  return s._handleSendTweet()
                s._checkToxicReply().then(function (e) {
                  if (!e) return s._handleSendTweet()
                  s.context.featureSwitches.isTrue('responsive_web_reply_nudge_show_nudge') && s._showToxicReplyNudge()
                })
              }),
              _()(h()(s), '_handleSendTweet', function () {
                var e = s.props,
                  t = e.activeUser,
                  n = e.addToast,
                  a = e.analytics,
                  r = e.audienceControlsValue,
                  i = e.composeSemanticCoreId,
                  o = e.excludedRecipients,
                  c = e.hasArticleNudge,
                  d = e.history,
                  u = e.inReplyToStatus,
                  p = e.isSelfThreadReply,
                  m = e.location,
                  h = e.promotedContent,
                  f = e.selectedCommunityName,
                  v = e.send,
                  g = r.conversationControlsValue,
                  y = r.exclusivityControlValue,
                  b = void 0 === y ? void 0 : y,
                  _ = r.trustedFriendsValue,
                  C = void 0 === _ ? void 0 : _,
                  w = r.trustedFriendsMemberCount,
                  E = void 0 === w ? void 0 : w,
                  x = s.isPreview,
                  T = s.props.composerData.map(function (e) {
                    return s._getSingleComposerDataWithLatestText(e)
                  }),
                  I = Object(mn.c)(T[0].scheduledFor)
                if (I) {
                  var R = Object(mn.b)(I),
                    M = Object(mn.i)(I),
                    k = gs({ scheduleDate: R, scheduleTime: M })
                  return n({ text: k, action: { label: vs, link: '' } }), void s._close()
                }
                if (
                  (o.length > 0 && a.scribe({ element: 'mentions', action: 'edited' }),
                  C &&
                    a.scribe({
                      action: 'send_trusted_friends_tweet',
                      data: { trusted_friends_control_details: { list_member_count: E } },
                    }),
                  s._conversationControlsCreationEnabled)
                )
                  if ('community' === g) a.scribe({ action: 'send_community_tweet' })
                  else if ('by_invitation' === g) {
                    var P = s._getSingleComposerDataWithLatestText(T[0]).text,
                      L = Object(S.d)(P)
                    a.scribe({
                      action: L ? 'send_mentioned_tweet_with_mentions' : 'send_mentioned_tweet_without_mentions',
                    })
                  } else 'followers' === g && a.scribe({ action: 'send_my_followers_tweet' })
                var D = (null == u ? void 0 : u.community_id_str) || r.communityIdValue || void 0,
                  A = D ? '8.31.'.concat(D) : '',
                  O = i ? (D ? [i, A].join(',') : i) : A
                v({
                  sendData: T,
                  communityIdValue: D,
                  conversationControlsValue: g,
                  excludedRecipients: o,
                  exclusivityControlValue: b,
                  inReplyToStatus: u,
                  isSelfThreadReply: p,
                  promotedContent: h,
                  composeSemanticCoreId: O,
                  isPreview: x,
                  trustedFriendsValue: C,
                  tweetType: s.tweetType,
                })
                  .then(function (e) {
                    x || s.setState({ tweetsSentOrScheduled: !0 }),
                      e.map(function (e, t) {
                        return s._scribeTweetSent(T[t], e, { hasArticleNudge: c })
                      }),
                      e.length > 1 && s._scribeThreadSent(T, e, 'thread_send_success')
                    var a = e.length > 1 ? os : is
                    if (D && f) {
                      var r = f,
                        i = e.length
                      a = Jo({ numOfTweets: i, communityName: r })
                    }
                    var o = x && s.isReply,
                      l = { label: vs, link: void 0, onAction: void 0 }
                    if (o || !x) {
                      var u = o ? e[0].in_reply_to_status_id_str : e[0].id_str
                      l.link = '/'.concat(t ? t.screen_name : 'i', '/status/').concat(u || '')
                    } else l.onAction = Object(Xo.a)(d, m)
                    n({ text: x ? ss : a, action: l }),
                      s.isInlineReply && s.setState({ focused: !1 }),
                      s._updateConvoCardState(),
                      s._close()
                  })
                  .catch(function (e) {
                    var t,
                      n = e.sentTweets,
                      r = void 0 === n ? [] : n,
                      i = Array.isArray(e.errors) && (null === (t = e.errors[0]) || void 0 === t ? void 0 : t.code),
                      o = null == e ? void 0 : e.url,
                      u = null == e ? void 0 : e.status,
                      p = { message: e.type, event_info: i ? ''.concat(i) : void 0, status_code: u, url: o }
                    throw (
                      (r.map(
                        function (e, t) {
                          return s._scribeTweetSent(T[t], e)
                        },
                        { hasArticleNudge: c },
                      ),
                      (Object(Yo.d)(e) && e.code === Hi.b.CANCELED) ||
                        a.scribe({ action: 'send_tweet_failure', data: p }),
                      T.length > 1 && s._scribeThreadSent(T, r, 'thread_send_failure'),
                      r.length &&
                        d.replace({
                          pathname: m.pathname,
                          state: l()(
                            l()({}, Object(Uo.a)(m.state || {}, 'quotedStatus')),
                            {},
                            { inReplyToStatusId: r[r.length - 1].id_str, isSelfThreadReply: !0 },
                          ),
                        }),
                      e)
                    )
                  })
                  .catch(s._handleTweetError('send_tweet_cancel', Yi.a))
              }),
              _()(h()(s), '_setActiveParentKey', function () {
                ;(0, s.props.setActiveParentKey)(s._getParentKey())
              }),
              _()(h()(s), '_scribeTweetSent', function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  a = n.hasArticleNudge,
                  r = void 0 !== a && a,
                  i = n.isDraftTweet,
                  o = void 0 !== i && i,
                  c = n.isScheduled,
                  d = void 0 !== c && c,
                  u = s.state.nudgeId,
                  p = e.scheduledTweetId ? 'schedule_edit_' : 'schedule_',
                  m = e.draftTweetId ? 'draft_edit_' : 'draft_',
                  h = o ? m : d ? p : 'send_',
                  f = { items: [Xi.a.getTweetItem(t)] },
                  v = e.pollActive && e.pollValid,
                  g = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.altText)
                  }),
                  y = e.mediaTags.length,
                  b = Object(zo.a)(
                    e.media
                      .map(function (e) {
                        var t,
                          n = null === (t = e.mediaMetadata) || void 0 === t ? void 0 : t.sensitiveMediaWarning
                        return n ? Array.from(n) : void 0
                      })
                      .filter(Boolean)
                      .flat(),
                  ),
                  _ = s.props.isInline ? 'inline_reply' : 'tweet_box_dialog'
                if (
                  (s._scribe({ action: ''.concat(h, 'tweet') }, f),
                  o || !e.draftTweetId || e.scheduledTweetId || s._scribe({ action: ''.concat(h, 'draft_tweet') }, f),
                  s.isQuoteTweet &&
                    (s._scribe({ action: 'retweet_with_comment' }, f),
                    r && s._scribe(l()(l()({}, Es), {}, { element: 'result', action: 'retweet_with_comment' }), f)),
                  s.isReply && s._scribe({ component: _, action: ''.concat(h, 'reply') }, f),
                  v && s._scribe({ action: ''.concat(h, 'poll_tweet') }, f),
                  s._hasPhoto(e) &&
                    (s._scribe({ action: ''.concat(h, 'photo_tweet') }, f),
                    g && s._scribe({ action: ''.concat(h, 'photo_tweet_with_alt_text') }, f),
                    y && s._scribe({ action: ''.concat(h, 'photo_tweet_with_tags') }, f)),
                  s._hasVideo(e) &&
                    (s._scribe({ action: ''.concat(h, 'video_tweet') }, f),
                    y && s._scribe({ action: ''.concat(h, 'video_tweet_with_tags') }, f)),
                  b.size)
                ) {
                  var C = s._hasPhoto(e) ? 'photo' : 'video'
                  b.forEach(function (e) {
                    s._scribe({ action: ''.concat(h).concat(C, '_tweet_with_').concat(e, '_warning') }, f)
                  })
                }
                var w = { page: 'nudge', section: 'dialog', element: 'result' }
                if (
                  (u &&
                    s.isReply &&
                    !d &&
                    (o
                      ? s._scribe(l()(l()({}, w), {}, { action: 'save' }), { items: [{ nudge_id: u }] })
                      : s._scribe(l()(l()({}, w), {}, { action: 'sent' }), { items: [{ nudge_id: u }] })),
                  u || o || !s.isReply || d || s._scribe(l()(l()({}, w), {}, { action: 'sent_no_nudge' })),
                  e.gifMetadata)
                ) {
                  var E = t.id_str && Xi.a.getGifSearchItemForTweet(t.id_str, e.gifMetadata)
                  s._scribe({ element: 'remote', action: ''.concat(h, 'gif_tweet') }, { items: E ? [E] : [] })
                  var x = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.defaultAltText)
                  })
                  ;(g || x) &&
                    s._scribe(
                      { element: 'remote', action: ''.concat(h, 'gif_tweet_with_alt_text') },
                      { event_info: g ? 'user_entered' : 'from_provider', items: E ? [E] : [] },
                    ),
                    y && s._scribe({ action: ''.concat(h, 'gif_tweet_with_tags') }, f)
                } else s._hasGif(e) && (s._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet') }, f), g && s._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet_with_alt_text') }, f))
              }),
              _()(h()(s), '_scribeThreadSent', function (e, t, n) {
                var a = s.props.inReplyToStatus,
                  r = { items: [Xi.a.getSendThreadItem(e, t.length, !!a)] }
                s._scribe({ action: n }, r)
              }),
              _()(h()(s), '_scribeRetweet', function (e) {
                var t = s.props.hasArticleNudge,
                  n = { items: [Xi.a.getTweetItem(e)] }
                s._scribe({ action: 'retweet' }, n),
                  t && s._scribe(l()(l()({}, Es), {}, { element: 'result', action: 'retweet' }), n)
              }),
              _()(h()(s), '_handleRetweet', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.createLocalApiErrorHandler,
                  a = e.retweet,
                  r = t[0].quotedStatus
                r &&
                  (s._scribeRetweet(r),
                  a(r.id_str, {}).then(function (e) {
                    s.setState({ tweetsSentOrScheduled: !0 }), s._close()
                  }, n(qi.a)))
              }),
              _()(h()(s), 'handleDismissComposer', function () {
                s.shouldShowDiscardConfirmation
                  ? s.setState({ showDiscardTweetConfirmation: !0 })
                  : s.shouldShowBackgroundSendConfirmation
                  ? s._cancelAllMediaUploads()
                  : s._close()
              }),
              _()(h()(s), '_cancelAllMediaUploads', function () {
                s.props.composerData.forEach(function (e) {
                  return e.media.forEach(function (e) {
                    return e.uploading && e.uploader && e.uploader.cancel()
                  })
                })
              }),
              _()(h()(s), '_handleConfirmDiscardTweet', function () {
                var e = s.props,
                  t = e.analytics,
                  n = e.hasArticleNudge,
                  a = s._canSaveDraft ? 'draft' : 'send'
                s.setState({ showDiscardTweetConfirmation: !1 }),
                  s._close(),
                  t.scribeAction(''.concat(a, '_tweet_discard')),
                  n && s._scribe(l()(l()({}, Es), {}, { element: 'result', action: 'cancel' })),
                  s.state.nudgeId &&
                    s._scribe(
                      { page: 'nudge', section: 'dialog', element: 'result', action: 'cancel' },
                      { items: [{ nudge_id: s.state.nudgeId }] },
                    )
              }),
              _()(h()(s), '_handleCancelDiscardTweet', function () {
                s.setState({ showDiscardTweetConfirmation: !1 }, function () {
                  s._restoreFocusToActiveComposer()
                })
              }),
              _()(h()(s), '_handleAcceptAltTextPrompt', function () {
                s.setState({ showAltTextPrompt: !1 })
                var e = s.props.history,
                  t = s._getAltTextMetadata().noDescriptionImageIDs
                t[0] &&
                  (s._scribe(l()(l()({}, ws), {}, { action: 'accepted' })),
                  e.push('/compose/tweet/media', { mediaId: t[0], tab: zi.a.altText, hideTabs: !0, showAllMedia: !0 }))
              }),
              _()(h()(s), '_handleIgnoreAltTextPrompt', function () {
                s._scribe(l()(l()({}, ws), {}, { action: 'declined' })),
                  s.setState({ showAltTextPrompt: !1 }),
                  s._handleTweetOrRetweet()
              }),
              _()(h()(s), '_handleCancelAltTextPrompt', function () {
                s._scribe(l()(l()({}, ws), {}, { action: 'cancel' })),
                  s.setState({ showAltTextPrompt: !1 }, function () {
                    s._restoreFocusToActiveComposer()
                  })
              }),
              _()(h()(s), '_restoreFocusToActiveComposer', function () {
                var e = s.props.activeComposerIndex
                void 0 !== e && s._composerRefs[e] && s._composerRefs[e].focus()
              }),
              _()(h()(s), '_close', function () {
                var e = s.props,
                  t = e.history,
                  n = e.isSending,
                  a = e.onCloseComposer
                n || s._resetDraft(),
                  s.state.navigatingToOutbox
                    ? s._canSaveDraft
                      ? t.push('/compose/tweet/unsent/drafts')
                      : t.push('/compose/tweet/unsent/scheduled')
                    : a && a()
              }),
              _()(h()(s), '_handleComposerFocus', function (e) {
                s._composerRefs[e]
                  ? s.props.updateActiveComposerIndex(e)
                  : setTimeout(function () {
                      s._restoreFocusToActiveComposer()
                    }, 0)
              }),
              _()(h()(s), '_handleFocus', function () {
                s.state.focused ||
                  (s.isInlineReply && s._scribe({ element: 'inline_reply', action: 'reply' }),
                  s.setState({ focused: !0 }))
              }),
              _()(h()(s), '_handleTypeaheadStateChange', function (e) {
                s.setState({ typeaheadActive: e })
              }),
              _()(h()(s), '_handleRemoveComposer', function () {
                var e = s.props,
                  t = e.activeComposerIndex,
                  n = e.composerData,
                  a = e.history,
                  r = e.location,
                  i = e.removeComposer
                0 === t &&
                  n[0].quotedStatus &&
                  a.replace({ pathname: r.pathname, state: Object(Uo.a)(r.state || {}, 'quotedStatus') }),
                  i(),
                  setTimeout(s._restoreFocusToActiveComposer)
              }),
              _()(h()(s), '_handleViewRecipients', function () {
                var e = s.props,
                  t = e.excludedRecipients,
                  n = e.history,
                  a = e.inReplyToStatus
                s._setActiveParentKey(),
                  n.push({
                    pathname: '/compose/tweet/recipients',
                    state: { excludedRecipients: t, inReplyToStatus: a },
                  })
              }),
              _()(h()(s), '_handleTextChange', function (e, t) {
                var n = s.state.textMap,
                  a = s.props,
                  r = a.activeComposerIndex,
                  i = a.isInline,
                  o = a.setValidity
                if (
                  (s.setState({ textMap: l()(l()({}, n), {}, _()({}, t, e)) }, function () {
                    o && o(s._areComposersValid())
                  }),
                  s.setState({ errorMessage: void 0 }),
                  Bo.b.isIOS())
                ) {
                  var c = i ? 0 : r
                  s._updateSingleComposer({ text: e }, c)
                }
              }),
              _()(
                h()(s),
                '_handleTextOnBlur',
                Object(bn.a)(function (e, t) {
                  return function () {
                    var n = s.state,
                      a = n.textMap,
                      r = n.tweetsSentOrScheduled,
                      i = s.props.composerData,
                      o = a[e],
                      l = i.some(function (t) {
                        return t.key === e
                      })
                    'string' == typeof o && !r && l && s._updateSingleComposer({ text: o }, t)
                  }
                }),
              ),
              _()(h()(s), '_updateAudienceControlsValue', function (e) {
                var t = s.props,
                  n = t.composerData,
                  a = t.updateAudienceControlsValue,
                  r = s.state.errorMessage
                switch (e._type) {
                  case 'conversation_controls':
                    if (!s._conversationControlsCreationEnabled) return
                    break
                  case 'community_members':
                    if (!s._isCommunitiesEnabled) return
                    n[0].pollActive &&
                      (s._updateSingleComposer({ pollActive: !1 }, 0), s.setState({ errorMessage: { text: Qo } })),
                      (null == r ? void 0 : r.text) === Qo && s.setState({ errorMessage: void 0 })
                }
                a(e, s._getParentKey())
              }),
              _()(h()(s), '_renderProgressBar', function () {
                var e = s.props,
                  t = e.isSending,
                  n = e.sendingProgress
                return w.a.createElement(No.a, { progress: t ? Math.max(n, 0.02) : 0, style: Is.progressBar })
              }),
              _()(h()(s), '_updateConvoCardState', function () {
                var e = s.props,
                  t = e.convoCardData,
                  n = e.updateConvoCardState
                if (t) {
                  var a = t.cardId,
                    r = t.nextState
                  r && a && n(a, { cardState: r })
                }
              }),
              _()(h()(s), '_attachExternalMedia', function (e) {
                return function (t) {
                  return Promise.all(
                    t.map(function (e) {
                      return Object(Ni.a)(e)
                    }),
                  ).then(s._handleAddMediaFiles(e))
                }
              }),
              _()(h()(s), '_handleAddMediaFiles', function (e) {
                return function (t) {
                  var a,
                    r,
                    i = s.props,
                    o = i.addMedia,
                    l = i.addToast,
                    c = i.composerData,
                    d = i.dataSaverMode,
                    u = i.preUploadMedia,
                    p = i.processMultipleMedia,
                    m = i.removeMediaUpload,
                    f = c[e],
                    v = f.pollActive,
                    g = Object(Ko.e)(
                      null === (a = h()(s)) || void 0 === a || null === (r = a.context) || void 0 === r
                        ? void 0
                        : r.userClaims,
                    )
                  v ||
                    o(t, { location: Ko.d.Tweet, canUploadLongVideo: g }).then(function (t) {
                      var a = t.map(function (e) {
                        return e.id
                      })
                      if (n._validateMedia(f, t)) {
                        var r = f.media.map(function (e) {
                          return e.id
                        })
                        s._updateSingleComposer({ mediaIds: Object(Ho.a)(r.concat(a)) }, e),
                          p(t, { onFailure: s._handleMediaRemoveFactory(e) }).then(function (e) {
                            d ||
                              u(
                                e.map(function (e) {
                                  return e.id
                                }),
                              )
                          })
                      } else l({ text: _s }), m(a)
                    })
                }
              }),
              _()(h()(s), '_handleMediaRemoveFactory', function (e) {
                return function (t) {
                  return s._handleMediaRemove(e, t)
                }
              }),
              _()(h()(s), '_handleMediaRemove', function (e, t) {
                var n = s.props,
                  a = n.composerData,
                  r = n.removeMediaUpload,
                  i = a[e],
                  o = i.media,
                  l = i.mediaTags,
                  c = (function (e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                      n[a - 1] = arguments[a]
                    return Object(Wo.a)(e, n)
                  })(
                    o.map(function (e) {
                      return e.id
                    }),
                    t,
                  ),
                  d = c.length > 0 ? l : []
                s._updateSingleComposer({ mediaIds: c, gifMetadata: void 0, mediaTags: d }, e),
                  r(t),
                  s.setState({ errorMessage: void 0 })
              }),
              _()(h()(s), '_setComposerRef', function (e) {
                return function (t) {
                  s._composerRefs[e] = t
                }
              }),
              _()(h()(s), '_shouldBeExpanded', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.parentTweetId
                if (s.state.focused) return !0
                var a = !Object(pn.c)(s._getSingleComposerDataWithLatestText(t[0]))
                return !n || a
              }),
              _()(h()(s), '_areComposersValid', function () {
                var e = s.props,
                  t = e.audienceControlsValue._type,
                  n = e.composerData,
                  a = n[0].quotedStatus,
                  r = null == a ? void 0 : a.community_id_str,
                  i = 'community_members' === t
                return (
                  (s.isRetweet && !r && !i) ||
                  n.every(function (e) {
                    return Object(pn.e)(s._getSingleComposerDataWithLatestText(e))
                  })
                )
              }),
              _()(h()(s), '_areComposersEmptyOrUnchanged', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.prepopulatedText
                return t.every(function (e) {
                  return Object(pn.d)(s._getSingleComposerDataWithLatestText(e), n)
                })
              }),
              _()(h()(s), '_getAltTextMetadata', function () {
                var e = s.props.composerData,
                  t = { numberOfDescriptionsMissing: 0, numberOfImages: 0, noDescriptionImageIDs: [] }
                return (
                  e.forEach(function (e) {
                    var n,
                      a = (e.media || []).filter(function (e) {
                        var t = e.mediaFile
                        return (null == t ? void 0 : t.isImage) || (null == t ? void 0 : t.isGif)
                      }),
                      r = a
                        .filter(function (e) {
                          var t = e.mediaMetadata
                          return !(null != t && t.altText)
                        })
                        .map(function (e) {
                          return e.id
                        })
                    ;(t.numberOfImages += a.length), (n = t.noDescriptionImageIDs).push.apply(n, o()(r))
                  }),
                  (t.numberOfDescriptionsMissing = t.noDescriptionImageIDs.length),
                  t
                )
              }),
              _()(h()(s), '_getSingleComposerDataWithLatestText', function (e) {
                var t = s.state.textMap
                return 'string' == typeof t[e.key] ? l()(l()({}, e), {}, { text: t[e.key] }) : e
              })
            var c = !(null === (r = e.location.state) || void 0 === r || !r.focusComposer)
            return (
              (s.state = {
                focused: c,
                showAltTextPrompt: !1,
                showDiscardTweetConfirmation: !1,
                showToxicReplyNudge: !1,
                textMap: {},
                tweetsSentOrScheduled: !1,
                typeaheadActive: !1,
                shouldDisableButton: !1,
              }),
              (s._composerRefs = {}),
              (s._conversationControlsCreationEnabled =
                !0 ===
                s.context.featureSwitches.getValueWithoutScribeImpression(
                  'conversation_controls_limited_replies_creation_enabled',
                )),
              (s._throttledSyncTexts = Object(ea.a)(s._syncTexts, 1e3, { leading: !0, trailing: !1 })),
              (s._keyCommandHandlers =
                ((i = {}), _()(i, qo.b, s.handleTweetOrRetweet), _()(i, qo.a, s.handleDismissComposer), i)),
              (s._keyCommandHandlersForActiveTypeahead = _()({}, qo.b, s.handleTweetOrRetweet)),
              (s._isAltTextNudgeEnabled =
                !0 ===
                s.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_alt_text_nudges_enabled')),
              (s._isCommunitiesEnabled = s.context.featureSwitches.isTrue('c9s_enabled')),
              s
            )
          }
          return (
            p()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  var e = this.props.onRef
                  e && e(this)
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.convoCardData,
                    n = e.externalMedia,
                    a = e.externalMediaFiles,
                    r = e.fetchAltTextPromptPreferenceIfNeeded,
                    i = e.history,
                    o = e.isInline,
                    s = e.isIntentRoute,
                    c = e.location,
                    d = e.prepopulatedText,
                    u = e.setValidity
                  if (
                    ((this._unblockHistory = this.props.history.block(this._blockHistory)),
                    n.length > 0 && this._attachExternalMedia(0)(n),
                    a.length > 0 && this._handleAddMediaFiles(0)(a),
                    this._handleFetchTweetIfNeeded(),
                    this._handleDeletePreviewTweet(),
                    r(),
                    d || (t && t.cardUrl))
                  ) {
                    var p = l()({}, null)
                    d && (p.text = d), t && t.cardUrl && (p.cardUrl = t.cardUrl), this._updateSingleComposer(p)
                  }
                  ;(d || (t && t.cardUrl) || n.length > 0 || a.length > 0) &&
                    !s &&
                    i.replace({
                      query: Object(Qr.b)(c.query),
                      search: '',
                      pathname: c.pathname,
                      state: Object(Uo.a)(Object(Qr.b)(c.state || {}), [
                        'defaultText',
                        'externalMedia',
                        'externalMediaFiles',
                      ]),
                    }),
                    u && u(this._areComposersValid()),
                    o || this._setActiveParentKey(),
                    this.isInlineReply && this._root && (this._height = this._root.getBoundingClientRect().height)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n = this.props,
                    a = n.addToast,
                    r = n.composerData,
                    i = n.copyDataFromInlineComposerToModalComposer,
                    o = n.externalMedia,
                    s = n.externalMediaFiles,
                    l = n.onRef,
                    c = n.parentTweetId,
                    d = n.replyPressToggle,
                    u = n.setValidity
                  n.windowWidth !== e.windowWidth && this._throttledSyncTexts(),
                    e.onRef && e.onRef !== l && e.onRef(void 0),
                    l && l !== e.onRef && l(this),
                    r.length >= 25 && e.composerData.length < 25 && a({ text: ys }),
                    o.length > 0 && o !== e.externalMedia
                      ? this._attachExternalMedia(0)(o)
                      : s.length > 0 && s !== e.externalMediaFiles && this._handleAddMediaFiles(0)(s),
                    u && !Object(Go.a)(r, e.composerData) && u && u(this._areComposersValid()),
                    d !== e.replyPressToggle && i(c)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this.props.onRef
                  this._unblockHistory && this._unblockHistory(), e && e(void 0), this._syncTexts()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n = this,
                    a = this.props,
                    i = a.activeUser,
                    o = a.addToast,
                    s = a.audienceControlsValue,
                    l = a.composeHeader,
                    c = a.composerData,
                    d = a.customizePropsForSingleComposerItem,
                    u = a.geoEnabled,
                    p = a.history,
                    m = a.inReplyToStatus,
                    h = a.isInline,
                    f = a.isModal,
                    v = a.isSelfThreadReply,
                    g = a.isSending,
                    y = a.isSuperFollowsCreator,
                    b = a.parentTweetId,
                    _ = a.positionCursorAtBeginning,
                    C = a.richTextInputContext,
                    E = a.scheduledFor,
                    x = a.typeaheadWrapper,
                    T = a.userLanguage,
                    S = a.windowWidth,
                    I = this.state,
                    R = I.errorMessage,
                    M = I.focused,
                    k = I.shouldDisableButton,
                    P = I.showAltTextPrompt,
                    L = I.showDiscardTweetConfirmation,
                    D = I.showToxicReplyNudge,
                    A = I.typeaheadActive,
                    O = !f && A,
                    F = h ? 0 : this.props.activeComposerIndex,
                    B = O || h ? [c[F]] : c,
                    V = this._areComposersValid(),
                    N = this.hasNonCompliantQuote && this.isRetweet,
                    j = h ? K.a : jo.a,
                    U = h ? {} : { onAnimateComplete: f ? void 0 : this._handleAnimateComplete },
                    z = k || !V || N || this.isCommunityTweetFromProtectedUser,
                    H = (h && Qi.a.isOneColumnSquishedLayout(S)) || this.isCommunityTweet,
                    W = (h && Qi.a.isOneColumnSquishedLayout(S)) || this.isCommunityTweet || this.isExclusiveTweet
                  return w.a.createElement(
                    K.a,
                    { ref: this._setRootRef, style: !b && Is.root },
                    h ? this._renderProgressBar() : null,
                    R &&
                      w.a.createElement(
                        K.a,
                        { style: Is.inlineCallout },
                        w.a.createElement(kt.a, {
                          action:
                            null !== (e = R.action) &&
                            void 0 !== e &&
                            e.label &&
                            null !== (t = R.action) &&
                            void 0 !== t &&
                            t.link
                              ? { label: R.action.label, link: R.action.link }
                              : void 0,
                          text: R.text,
                          type: 'danger',
                        }),
                      ),
                    w.a.createElement(
                      K.a,
                      {
                        onFocus: this._handleFocus,
                        style: [Is.content, b && Is.contentInlineReply, f && Is.contentModal],
                      },
                      m ? this._renderReplyContext() : null,
                      l,
                      w.a.createElement(
                        j,
                        U,
                        B.map(function (e, t) {
                          var a = Object(mn.h)(e.scheduledFor),
                            l = c.indexOf(e),
                            I = d(e, t, B),
                            R =
                              f || h
                                ? w.a.createElement(
                                    X.a,
                                    {
                                      behavioralEventContext: xs,
                                      disabled: z,
                                      onPress: n.handleTweetOrRetweet,
                                      size: 'medium',
                                      style: Is.inlineSendButton,
                                      testID: f ? Ji : Zi,
                                      type: 'brandFilled',
                                    },
                                    Object(Xo.b)({
                                      inReplyToStatus: !!m,
                                      isSelfThreadReply: !!v,
                                      isQuoteTweet: !!n.isQuoteTweet,
                                      isRetweet: !!n.isRetweet,
                                      isScheduled: !!a,
                                      isThread: n.isThread,
                                    }),
                                  )
                                : null,
                            k = n._getSingleComposerDataWithLatestText(e)
                          return w.a.createElement(
                            K.a,
                            { key: e.key },
                            w.a.createElement(
                              Ar,
                              r()(
                                {
                                  addComposerLink: n._makeAddComposerLink(h, v, b),
                                  addToast: o,
                                  additionalToolbarContent: R,
                                  audienceControlsValue: s,
                                  autoFocus: n.isInlineReply && M,
                                  data: k,
                                  disableAddTweet: c.length >= 25,
                                  editable: !g && !!i,
                                  fetchAutotaggedLocationIfNeeded: n._fetchAutotaggedLocationIfNeeded,
                                  geoEnabled: u,
                                  hidePoll: H,
                                  hideScheduling: W,
                                  history: p,
                                  index: l,
                                  isActive: l === F && !g,
                                  isCommunityTweetFromProtectedUser: n.isCommunityTweetFromProtectedUser,
                                  isExpanded: 0 !== t || n._shouldBeExpanded(),
                                  isInline: h,
                                  isInlineReply: n.isInlineReply,
                                  isLast: h || l === c.length - 1,
                                  isReply: !!m || n.isInlineReply,
                                  isSelfThreadReply: !!v,
                                  isSuperFollowsCreator: y,
                                  keyCommandHandlers: n._getKeyCommandHandlers(),
                                  loggedInUser: i,
                                  onAddComposer: n._handleAddComposer,
                                  onFilesAdded: n._handleAddMediaFiles(l),
                                  onFocus: n._handleComposerFocus,
                                  onRemoveComposer: n._handleRemoveComposer,
                                  onRemoveMedia: n._handleMediaRemove,
                                  onTextChange: n._handleTextChange,
                                  onTextInputBlur: n._handleTextOnBlur(k.key, t),
                                  onTypeaheadStateChange: n._handleTypeaheadStateChange,
                                  positionCursorAtBeginning: !!_,
                                  ref: n._setComposerRef(l),
                                  richTextInputContext: C,
                                  scheduledFor: E,
                                  setActiveParentKey: n._setActiveParentKey,
                                  twitterTextConfigurationVersion: 'version3',
                                  typeaheadActive: A,
                                  typeaheadWrapper: x,
                                  updateAudienceControlsValue: n._updateAudienceControlsValue,
                                  updateSingleComposer: n._updateSingleComposer,
                                  userLanguage: T,
                                  windowWidth: S,
                                },
                                I,
                              ),
                            ),
                          )
                        }),
                      ),
                      L
                        ? this._canSaveDraft
                          ? w.a.createElement(Vo.a, {
                              cancelButtonLabel: us,
                              confirmButtonLabel: hs,
                              headline: ps,
                              onCancel: this._handleConfirmDiscardTweet,
                              onConfirm: this._handleDraftTweet,
                              onMaskClick: this._handleCancelDiscardTweet,
                              text: ms,
                            })
                          : w.a.createElement(Vo.a, {
                              confirmButtonLabel: us,
                              confirmButtonType: 'destructiveFilled',
                              headline: this.isThread ? cs : ls,
                              onCancel: this._handleCancelDiscardTweet,
                              onConfirm: this._handleConfirmDiscardTweet,
                              text: ds,
                            })
                        : null,
                      P ? this._renderAltTextPrompt() : null,
                      D ? this._renderToxicReplyNudge() : null,
                      w.a.createElement(K.a, { style: g && Is.mask }),
                    ),
                  )
                },
              },
              {
                key: '_scribe',
                value: function (e, t) {
                  this.props.analytics.scribe(l()(l()({}, e), {}, { data: t }))
                },
              },
              {
                key: 'isInlineReply',
                get: function () {
                  return !!this.props.parentTweetId
                },
              },
              {
                key: 'isThread',
                get: function () {
                  return this.props.composerData.length > 1
                },
              },
              {
                key: 'isRetweet',
                get: function () {
                  var e = this.props.composerData,
                    t = 0 === e[0].media.length,
                    n = this._getSingleComposerDataWithLatestText(e[0]).text
                  return !this.isThread && e[0].quotedStatus && '' === n && t
                },
              },
              {
                key: 'isQuoteTweet',
                get: function () {
                  var e = this.props.composerData,
                    t = this._getSingleComposerDataWithLatestText(e[0]).text
                  return !this.isThread && e[0].quotedStatus && t.length > 0
                },
              },
              {
                key: 'hasNonCompliantQuote',
                get: function () {
                  var e
                  return (
                    'non_compliant' ===
                    (null === (e = this.props.composerData[0].quotedStatus) || void 0 === e
                      ? void 0
                      : e.limited_actions)
                  )
                },
              },
              {
                key: 'shouldShowDiscardConfirmation',
                get: function () {
                  var e = this.props,
                    t = e.composerData,
                    n = e.isSending,
                    a = t[0].scheduledTweetId,
                    r = this.state.showDiscardTweetConfirmation,
                    i = this._areComposersEmptyOrUnchanged()
                  return !(n || i || r || a)
                },
              },
              {
                key: 'shouldShowBackgroundSendConfirmation',
                get: function () {
                  var e = this.props,
                    t = e.composerData,
                    n = e.isSending,
                    a = t.some(function (e) {
                      return e.media.some(function (e) {
                        return e.uploading
                      })
                    })
                  return n && a
                },
              },
              {
                key: 'shouldShowAltTextPrompt',
                get: function () {
                  var e = this.props.altTextNudgeType
                  return (
                    !(
                      !this.context.featureSwitches.isTrue('responsive_web_alt_text_nudges_enabled') || e !== E.a.prompt
                    ) && this._getAltTextMetadata().numberOfDescriptionsMissing > 0
                  )
                },
              },
              {
                key: '_canSaveDraft',
                get: function () {
                  var e = this.props,
                    t = e.composerData,
                    n = e.isInline
                  return !(
                    this.isCommunityTweet ||
                    this.isExclusiveTweet ||
                    this.isThread ||
                    t[0].pollActive ||
                    0 !== t[0].mediaTags.length ||
                    n
                  )
                },
              },
              {
                key: 'isCommunityTweet',
                get: function () {
                  var e = this.props,
                    t = e.audienceControlsValue,
                    n = e.inReplyToStatus
                  return !!((null != n && n.community_id_str) || 'community_members' === t._type)
                },
              },
              {
                key: 'isCommunityTweetFromProtectedUser',
                get: function () {
                  var e
                  return !(
                    !this.isCommunityTweet ||
                    null === (e = this.props.activeUser) ||
                    void 0 === e ||
                    !e.protected
                  )
                },
              },
              {
                key: 'isReply',
                get: function () {
                  return !(!this.props.inReplyToStatus && !this.props.inReplyToStatusId)
                },
              },
              {
                key: 'isExclusiveTweet',
                get: function () {
                  return !!this.props.audienceControlsValue.exclusivityControlValue
                },
              },
              {
                key: 'isTrustedFriendsTweet',
                get: function () {
                  return !!this.props.audienceControlsValue.trustedFriendsValue
                },
              },
              {
                key: 'tweetType',
                get: function () {
                  return this.isQuoteTweet
                    ? Ts.Quote
                    : this.isThread
                    ? Ts.Thread
                    : this.isReply
                    ? Ts.Reply
                    : Ts.Original
                },
              },
              {
                key: 'isPreview',
                get: function () {
                  var e,
                    t,
                    n,
                    a,
                    r,
                    i,
                    o = this.props.undoTweetSettings,
                    s =
                      null == this ||
                      null === (e = this.context) ||
                      void 0 === e ||
                      null === (t = e.userClaims) ||
                      void 0 === t
                        ? void 0
                        : t.isTrueAndEnabled('subscriptions_feature_1003'),
                    l =
                      null == this ||
                      null === (n = this.context) ||
                      void 0 === n ||
                      null === (a = n.featureSwitches) ||
                      void 0 === a
                        ? void 0
                        : a.isTrue('subscriptions_undo_quote_tweets_enabled'),
                    c =
                      null == this ||
                      null === (r = this.context) ||
                      void 0 === r ||
                      null === (i = r.featureSwitches) ||
                      void 0 === i
                        ? void 0
                        : i.isTrue('subscriptions_undo_thread_tweets_enabled')
                  return (
                    s &&
                    ('original' === this.tweetType ||
                      'reply' === this.tweetType ||
                      ('quote' === this.tweetType && l) ||
                      ('thread' === this.tweetType && c)) &&
                    (!o || void 0 === o[this.tweetType] || o[this.tweetType])
                  )
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      _()(Ss, 'defaultProps', {
        customizePropsForSingleComposerItem: function (e, t, n) {
          return {}
        },
        externalMedia: [],
        externalMediaFiles: [],
        isSelfThreadReply: !1,
        isModal: !1,
        positionCursorAtBeginning: !1,
        prepopulatedText: '',
        setValidity: function () {},
        typeaheadWrapper: Wi.a,
      }),
        _()(Ss, 'contextType', ce.a),
        _()(Ss, '_validateMedia', function (e, t) {
          var n = e.media
          return Object(S.c)(n.concat(t))
        })
      var Is = B.a.create(function (e) {
        return {
          root: { paddingBottom: e.spaces.space4 },
          content: { paddingVertical: e.spaces.space4, backgroundColor: e.colors.cellBackground },
          contentModal: { borderBottomLeftRadius: e.borderRadii.xLarge, borderBottomRightRadius: e.borderRadii.xLarge },
          contentInlineReply: { paddingVertical: e.componentDimensions.gutterVertical },
          mask: l()({}, B.a.absoluteFillObject),
          inlineSendButton: { marginLeft: e.spaces.space12 },
          progressBar: {
            position: 'absolute',
            borderTopLeftRadius: e.borderRadii.small,
            borderTopRightRadius: e.borderRadii.small,
          },
          inlineCallout: {
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          hidden: { position: 'absolute', visibility: 'hidden', width: '100%' },
        }
      })
      t.a = Object(G.a)(Bi(Ss))
    },
    hiGS: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
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
                d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z',
              }),
              o.a.createElement('path', {
                d: 'M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    hqDb: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('VrFO'),
        l = n.n(s),
        c = n('Y9Ll'),
        d = n.n(c),
        u = n('1Pcy'),
        p = n.n(u),
        m = n('5Yy7'),
        h = n.n(m),
        f = n('2VqO'),
        v = n.n(f),
        g = n('KEM+'),
        y = n.n(g),
        b = (n('2G9S'), n('ERkP')),
        _ = n.n(b),
        C = n('k49u'),
        w = (n('LW0h'), n('7x/C'), n('KOtZ'), n('vrRf'), n('6xIQ')),
        E = n('kGix'),
        x = n('G6rE'),
        T = n('rxPX'),
        S = n('0KEI'),
        I = function (e, t) {
          return t.userIds
        },
        R = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!x.e.select(e, t)
          })
        },
        M = function (e, t) {
          return t.userIds.reduce(function (t, n) {
            var a = x.e.selectFetchStatus(e, n)
            return (t[n] = a === E.a.NONE ? E.a.LOADING : a), t
          }, {})
        },
        k = Object(T.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(w.a)(R, function (e) {
                return e
              }),
              fetchStatus: Object(w.a)(R, M, I, function (e, t, n) {
                for (var a = E.a.LOADED, r = 0; r < n.length; r++) {
                  var i = n[r]
                  if (-1 === e.indexOf(i)) {
                    var o = t[i] || E.a.LOADING
                    a = a === E.a.LOADED ? o : a
                  }
                  if (a === E.a.LOADED) break
                }
                return a
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'USERS_LIST_CONTAINER',
              ),
              fetchUsersIfNeeded: x.e.fetchManyIfNeeded,
            }
          }),
        P = n('v//M'),
        L = n('3XMw'),
        D = n.n(L),
        A = n('pQ3Z'),
        O = n.n(A),
        F = (n('z84I'), n('cFuS')),
        B = n('Re5t'),
        V = n('MWbm'),
        N = n('88ay'),
        j = function (e) {
          var t = e.displayMode,
            n = e.renderUserCell,
            a = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return _.a.createElement(
            V.a,
            null,
            a.map(function (e, a) {
              return n
                ? n(e)
                : _.a.createElement(N.b, {
                    decoration: N.e,
                    displayMode: t,
                    key: e,
                    promotedItemType: F.c.USER,
                    userId: e,
                    withFollowsYou: !0,
                  })
            }),
          )
        }
      j.defaultProps = { displayMode: B.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var U = j,
        z = ['availableUserIds', 'createLocalApiErrorHandler', 'fetchStatus', 'fetchUsersIfNeeded', 'userIds'],
        H = D.a.f5b426c2,
        W = { viewType: 'user_list' },
        G = k(
          (function (e) {
            h()(n, e)
            var t = v()(n)
            function n() {
              var e
              l()(this, n)
              for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                y()(p()(e), 'state', { allUsersUnavailable: !1 }),
                y()(p()(e), '_renderContent', function () {
                  var t = e.props,
                    n = t.availableUserIds,
                    a = (t.createLocalApiErrorHandler, t.fetchStatus, t.fetchUsersIfNeeded, t.userIds, o()(t, z))
                  return _.a.createElement(U, r()({}, a, { userIds: n }))
                }),
                y()(p()(e), '_handleFetch', function () {
                  e._fetchUsersIfNeeded()
                }),
                e
              )
            }
            return (
              d()(n, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    O()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return _.a.createElement(P.a, {
                      accessibilityLabel: H,
                      behavioralEventContext: W,
                      fetchStatus: this.state.allUsersUnavailable ? E.a.LOADED : this.props.fetchStatus,
                      onRequestRetry: this._handleFetch,
                      render: this._renderContent,
                      retryable: !1,
                    })
                  },
                },
                {
                  key: '_fetchUsersIfNeeded',
                  value: function () {
                    var e,
                      t = this,
                      n = this.props,
                      a = n.availableUserIds,
                      r = n.createLocalApiErrorHandler
                    ;(0, n.fetchUsersIfNeeded)(n.userIds).then(
                      function () {
                        t.setState({ allUsersUnavailable: !1 })
                      },
                      r(
                        ((e = {}),
                        y()(e, C.a.AddressBookLookupNotFound, {
                          customAction: function () {
                            0 === a.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        y()(e, C.a.OtherUserSuspended, {
                          customAction: function () {
                            0 === a.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        e),
                      ),
                    )
                  },
                },
              ]),
              n
            )
          })(_.a.Component),
        )
      t.a = G
    },
    'ii+P': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      n('FtFR')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('wtru')
      function o(e) {
        var t = Object(i.b)()
        return [
          !!t && !t.flags[e],
          r.a.useCallback(
            function () {
              null == t || t.addFlag(e)
            },
            [t, e],
          ),
        ]
      }
    },
    jtO7: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('ERkP'),
        l = n.n(s),
        c = n('t62R'),
        d = n('I4+6'),
        u = n('cm6r'),
        p = n('rHpw'),
        m = n('MWbm'),
        h = ['align', 'color', 'label'],
        f = p.a.create(function (e) {
          return {
            container: { backgroundColor: e.colors.cellBackground },
            root: {
              justifyContent: 'center',
              minHeight: e.spaces.space48,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
          }
        })
      t.a = function (e) {
        var t = e.align,
          n = void 0 === t ? 'center' : t,
          a = e.color,
          i = e.label,
          s = o()(e, h),
          v = d.a.generate({
            backgroundColor: p.a.theme.colors.transparent,
            color: p.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return l.a.createElement(
          m.a,
          { style: f.container },
          l.a.createElement(
            u.a,
            r()({}, s, { interactiveStyles: v, style: f.root }),
            l.a.createElement(c.b, { align: n, color: a }, i),
          ),
        )
      }
    },
    kIAd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return i
        })
      var a = n('0vv5'),
        r = 500,
        i = {
          scoper: [
            {
              type: 'dmUserSearch',
              regexp: /^[@＠]?(.*)|^$/,
              srcInputs: ['compose_message'],
              scope: { result_type: 'users', count: 20 },
            },
            {
              type: 'username',
              regexp: /^[@＠](\w{1,20})/,
              srcInputs: ['compose'],
              scope: { result_type: 'users', count: 20 },
            },
            { type: 'hashtag', regexp: n.n(a).a, srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
            { type: 'topic', regexp: /(.+)/, srcInputs: ['search_box'], scope: { result_type: 'all' } },
            {
              type: 'ttt',
              regexp: /(.+)/,
              srcInputs: ['welcome_flow'],
              scope: { count: 10, result_type: 'topics,ttt' },
            },
          ],
          WordBoundary: /[!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]|$/,
          WordEnd: /[^!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]+$/,
        }
    },
    krmn: function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        l = n('RuTB'),
        c = n('3XMw'),
        d = n.n(c),
        u = Object(s.a)({
          loader: function () {
            return d.a.emoji.then(function () {
              return Promise.all([n.e(0), n.e(16), n.e(209)]).then(n.bind(null, '5RdJ'))
            })
          },
          renderPlaceholder: function (e, t) {
            return o.a.createElement(l.a, { hasError: e, onRetry: t })
          },
        }),
        p = n.p + 'twemoji_sprite.6d90d9d5.png',
        m = n.p + 'twemoji_sprite_high_res.0b0faef5.png',
        h = n('rHpw'),
        f = n('U+bB'),
        v = n('kLqS'),
        g = n('MWbm'),
        y = h.a.create(function (e) {
          return {
            content: { backgroundColor: e.colors.cellBackground },
            dimensions: {
              height: '400px',
              borderRadius: e.borderRadii.xLarge,
              width: 10 * e.spacesPx.space32,
              overflow: 'hidden',
            },
            hidden: { display: 'none' },
          }
        }),
        b = function (e) {
          var t = e.onSelect,
            n = e.partialRender,
            a = v.a.get() > 1 ? m : p
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              g.a,
              { style: [y.content, y.dimensions] },
              o.a.createElement(u, { onSelect: t, partialRender: n, rowSize: 9, spriteUrl: a }),
            ),
            o.a.createElement(f.a, { source: a, style: y.hidden }),
          )
        },
        _ = n('pNJr'),
        C = n('2ZFc'),
        w = n('OiMc'),
        E = n('/yvb'),
        x = d.a.d4a4842d,
        T = o.a.createElement(_.a, null),
        S = d.a.fec16c1c,
        I = { viewType: 'emoji_picker' },
        R = function (e) {
          var t = e.disabled,
            n = e.onEmojiSelect,
            a = e.onPress,
            i = e.size,
            s = e.style,
            l = e.textInputRef,
            c = o.a.useState(!0),
            d = r()(c, 2),
            p = d[0],
            m = d[1]
          o.a.useEffect(function () {
            var e = setTimeout(function () {
              u.preload(), C.a.get('emojiPicker2')
            }, 5e3)
            return function () {
              clearTimeout(e)
            }
          }, [])
          return o.a.createElement(
            w.a,
            {
              enableEnterKeyToggle: !0,
              onAnimateComplete: function () {
                return m(!1)
              },
              onDismiss: function () {
                return m(!0)
              },
              onHoverCardUnmount: function () {
                window.requestAnimationFrame(function () {
                  return l && l.focus()
                })
              },
              renderContent: function () {
                return o.a.createElement(b, { onSelect: n, partialRender: p })
              },
              withArrow: !0,
            },
            o.a.createElement(E.a, {
              accessibilityHasPopup: 'menu',
              accessibilityLabel: x,
              behavioralEventContext: I,
              disabled: t,
              hoverLabel: { label: S },
              icon: T,
              onPress: function (e) {
                return a && a(e)
              },
              size: i,
              style: s,
              type: 'brandText',
            }),
          )
        }
      R.defaultProps = { disabled: !1, size: 'xSmall' }
      t.a = R
    },
    lsKC: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return c
      }),
        n.d(t, 'a', function () {
          return d
        }),
        n.d(t, 'c', function () {
          return u
        })
      n('jQ3i'), n('x4t0')
      var a = n('3XMw'),
        r = n.n(a),
        i = r.a.g34f2c63,
        o = r.a.f70a36d0,
        s = r.a.d17df547,
        l = r.a.h735a98d,
        c = function (e) {
          var t = e.inReplyToStatus && !e.isSelfThreadReply
          return e.isScheduled ? l : t ? s : e.isThread ? o : i({ verb: '' })
        },
        d = function (e, t) {
          return function () {
            var n,
              a,
              r =
                (null === (n = t.state) || void 0 === n || null === (a = n.previousPath) || void 0 === a
                  ? void 0
                  : a.includes('/home')) && '/compose/tweet' === t.pathname
            t.pathname.includes('/home') || r ? window.scrollTo(0, 0) : e.push('/home', { lockScroll: !0 })
          }
        },
        u = function (e) {
          var t = e.isInline,
            n = e.isSelfThreadReply,
            a = e.parentTweetId
          return t ? { pathname: '/compose/tweet', state: { inReplyToStatusId: a, isSelfThreadReply: n } } : void 0
        }
    },
    o52z: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var a = n('VPAj'),
        r = Object(a.a)([])
      Object(a.a)({})
    },
    oEoC: function (e, t, n) {
      'use strict'
      n.d(t, 'e', function () {
        return d
      }),
        n.d(t, 'c', function () {
          return u
        }),
        n.d(t, 'b', function () {
          return p
        }),
        n.d(t, 'g', function () {
          return m
        }),
        n.d(t, 'a', function () {
          return h
        }),
        n.d(t, 'd', function () {
          return f
        }),
        n.d(t, 'f', function () {
          return g
        })
      var a = n('RhWx'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        s =
          (n('hBpG'),
          n('7x/C'),
          n('vrRf'),
          n('KqXw'),
          n('WNMA'),
          n('M+/F'),
          n('LJOr'),
          n('tVqn'),
          n('jwue'),
          n('+oxZ'),
          n('z84I'),
          n('LW0h'),
          n('2G9S'),
          n('oQhu')),
        l = n('kIAd'),
        c = n('rHpw')
      function d(e, t) {
        var n,
          a = l.b.scoper.find(function (a) {
            if (-1 !== a.srcInputs.indexOf(t)) return (n = e.match(a.regexp))
          }),
          r = ''
        return n && (r = n && (1 === n.length ? n[0] : n[1])), a ? o()(o()({}, a.scope), {}, { src: t, q: r }) : null
      }
      function u(e, t) {
        var n = t.slice(0, e),
          a = t.slice(e, t.length),
          r = n.search(l.b.WordEnd),
          i = r >= 0 ? n.slice(r) : '',
          o = a.search(l.b.WordBoundary),
          s = i + a.slice(0, o)
        return s.trim() ? { start: r, end: e + o, word: s } : { start: -1, end: -1, word: '' }
      }
      function p() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function m(e) {
        var t = e.altKey,
          n = e.ctrlKey,
          a = e.metaKey
        return !(t || n || a)
      }
      function h(e, t) {
        var n = []
        e.forEach(function (e) {
          var a = t.find(function (t) {
            return t.id === e.id
          })
          a && a.data && a.data.result_context ? n.push(a) : n.push(e)
        })
        var a = n.map(function (e) {
            return e.id
          }),
          i = t.filter(function (e) {
            return a.indexOf(e.id) < 0
          })
        return [].concat(n, r()(i))
      }
      var f = Object(s.a)(function (e) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(c.a.theme.spaces.space64, ')'),
            position: 'fixed',
            top: ''.concat(e, 'px'),
            transform: [{ translate3d: '0,0,0' }],
          }
        }),
        v = 0,
        g = function () {
          return 'typeaheadDropdown-'.concat((v += 1))
        }
    },
    'p+r5': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return H
      })
      n('yiKp')
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('VrFO'),
        l = n.n(s),
        c = n('Y9Ll'),
        d = n.n(c),
        u = n('1Pcy'),
        p = n.n(u),
        m = n('5Yy7'),
        h = n.n(m),
        f = n('2VqO'),
        v = n.n(f),
        g = n('KEM+'),
        y = n.n(g),
        b = (n('2G9S'), n('ERkP')),
        _ = n.n(b),
        C = n('38/B'),
        w = n('t62R'),
        E = n('/yvb'),
        x = n('piX5'),
        T = n('3XMw'),
        S = n.n(T),
        I = n('tI3i'),
        R = n.n(I),
        M = n('oQhu'),
        k = n('rHpw'),
        P = n('aITJ'),
        L = n('MWbm'),
        D = n('n5fo'),
        A = n('5emT'),
        O = n('Oib4'),
        F = n('WtWS'),
        B = n('ioan'),
        V = [
          'Icon',
          'accessibilityLabel',
          'calculateLength',
          'editable',
          'errorText',
          'helperText',
          'invalid',
          'label',
          'maxLength',
          'onBlur',
          'onChange',
          'onFocus',
          'onKeyDown',
          'onKeyPress',
          'onKeyUp',
          'onSubmitEditing',
          'showPasswordVisibilityIcon',
          'showValidationIcon',
          'style',
          'type',
          'validLength',
        ],
        N = function (e) {
          return e.length
        },
        j = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N
          return t(e)
        },
        U = S.a.de540c32,
        z = S.a.b4abfdb3,
        H = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            l()(this, n),
              (a = t.call(this, e)),
              y()(p()(a), '_blurOnBackspaceKeyUpForKaiOS', !1),
              y()(p()(a), '_isLabelLarge', function () {
                var e = a.state,
                  t = e.actualCount,
                  n = e.isFocused
                return !t && !n
              }),
              y()(
                p()(a),
                '_getTextInputStyle',
                Object(M.a)(function (e) {
                  return [W.root, !e && W.disabled]
                }),
              ),
              y()(p()(a), '_getTextInputType', function () {
                var e = a.props,
                  t = e.showPasswordVisibilityIcon,
                  n = e.type,
                  r = a.state.isPasswordRevealed
                return 'password' === n && t ? (r ? 'text' : 'password') : n
              }),
              y()(p()(a), '_calculateLength', function (e) {
                return j(e, a.props.calculateLength)
              }),
              y()(p()(a), '_shouldRenderDisplayCount', function () {
                var e = a.state.isFocused,
                  t = a._isFormInvalid()
                return Boolean((e || t) && a._getMaxDisplayCount())
              }),
              y()(p()(a), '_isInvalidNumber', function () {
                var e,
                  t,
                  n,
                  r,
                  i,
                  o = a.props.type,
                  s =
                    null === (e = a._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  l =
                    null === (n = a._textInput) ||
                    void 0 === n ||
                    null === (r = n.textInputNode) ||
                    void 0 === r ||
                    null === (i = r.validity) ||
                    void 0 === i
                      ? void 0
                      : i.badInput
                return 'number' === o && '' === s && !0 === l
              }),
              y()(p()(a), '_getActualCount', function (e) {
                var t = e.length
                return a._isInvalidNumber() && (t = 1), t
              }),
              y()(p()(a), '_handleBlur', function (e) {
                var t = a.props.onBlur,
                  n = e.currentTarget.value,
                  r = a._calculateLength(n),
                  i = a._getActualCount(n)
                a.setState({ isFocused: !1, displayCount: r, actualCount: i }), t && t(e)
              }),
              y()(p()(a), '_handleChange', function (e) {
                var t = a.props.onChange,
                  n = a.state.previousValue,
                  r = e.currentTarget.value,
                  i = a._calculateLength(r),
                  o = a._getActualCount(r),
                  s = a._getAdjustedMaxLength()
                void 0 !== s && r.length > s && n.length < r.length
                  ? (e.currentTarget.value = n)
                  : (a.setState({
                      isFocused: !0,
                      displayCount: i,
                      actualCount: o,
                      previousValue: e.currentTarget.value,
                    }),
                    t && t(e))
              }),
              y()(p()(a), '_handleFocus', function () {
                var e = a.props.onFocus
                a.setState({ isFocused: !0 }), e && e()
              }),
              y()(p()(a), '_handleKeyPress', function (e) {
                var t = a.props,
                  n = t.multiline,
                  r = t.onKeyPress,
                  i = t.onSubmitEditing
                r && r(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || n || !i || (e.preventDefault(), i(e))
              }),
              y()(p()(a), '_handleKeyDown', function (e) {
                var t = a.props.onKeyDown,
                  n = 0 === a.state.displayCount
                P.b.isKaiOS() && 'Backspace' === e.key && n ? (a._blurOnBackspaceKeyUpForKaiOS = n) : t && t(e)
              }),
              y()(p()(a), '_handleKeyUp', function (e) {
                var t = a.props.onKeyUp
                P.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  a._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), a.blur()),
                  t && t(e)
              }),
              y()(p()(a), '_handlePasswordVisibilityClick', function (e) {
                a.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              y()(p()(a), '_setTextInputRef', function (e) {
                a._textInput = e
              }),
              y()(p()(a), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  n = e.maxLength,
                  a = e.onChange,
                  r = e.validLength,
                  i = !!a,
                  o = 'string' == typeof e.value,
                  s = 'string' == typeof t
                R()(
                  !(!s && o && !i),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  R()(!(n && r && r > n), 'Max length should be equal or greater than valid length.'),
                  R()(
                    !((void 0 !== n && n <= 0) || (void 0 !== r && r <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              y()(p()(a), '_exceedsValidLength', function (e) {
                var t = a._getMaxDisplayCount()
                return !!t && e > t
              }),
              y()(p()(a), '_getMaxDisplayCount', function () {
                return a.props.validLength || a.props.maxLength
              }),
              y()(p()(a), '_getAdjustedMaxLength', function () {
                var e = a.props.maxLength,
                  t = a.getValue(),
                  n = a._calculateLength(t)
                return e ? e + t.length - n : void 0
              }),
              a._checkComponentPropsUsageCorrectness(e)
            var r = e.defaultValue,
              i = e.value || r || ''
            return (
              (a.state = {
                displayCount: a._calculateLength(i),
                actualCount: N(i),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: i,
              }),
              a
            )
          }
          return (
            d()(
              n,
              [
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var t = this.props,
                      n = t.maxLength,
                      a = t.onChange,
                      r = t.validLength,
                      i = t.value,
                      o = e.maxLength,
                      s = e.onChange,
                      l = e.validLength,
                      c = e.value
                    ;(l === r && n === o && !!a === !!s && ('string' == typeof i) === ('string' == typeof c)) ||
                      this._checkComponentPropsUsageCorrectness(this.props)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.accessibilityLabel,
                      n = e.editable,
                      a = e.errorText,
                      r = e.helperText,
                      i = e.style,
                      o = this.state.isFocused,
                      s = this._isFormInvalid()
                    return _.a.createElement(
                      L.a,
                      { style: [G.root, i] },
                      _.a.createElement(
                        L.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            x.a.border,
                            G.textInputFormStyle,
                            s && x.a.invalidBorderColor,
                            o && s && x.a.focusedBorderInvalid,
                            o && !s && x.a.focusedBorderValid,
                            !n && x.a.disabled,
                          ],
                        },
                        _.a.createElement(
                          L.a,
                          { style: G.textInputFormWrapper },
                          _.a.createElement(
                            L.a,
                            { style: G.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      _.a.createElement(
                        L.a,
                        { style: [G.sidePadding, G.underTextInputForm] },
                        _.a.createElement(
                          L.a,
                          { style: G.subtextWrapper },
                          r ? this._renderHelperText() : null,
                          s && a ? this._renderErrorText() : null,
                        ),
                      ),
                    )
                  },
                },
                {
                  key: '_renderLabel',
                  value: function () {
                    var e = this.props.label,
                      t = this.state.isFocused ? 'primary' : 'gray700',
                      n = this._isFormInvalid() ? 'red500' : t,
                      a = this._isLabelLarge()
                    return _.a.createElement(
                      w.b,
                      {
                        color: a ? 'gray700' : n,
                        numberOfLines: 1,
                        size: a ? 'headline1' : 'subtext2',
                        style: [
                          G.textInputHeaderItem,
                          a && G.placeholderText,
                          !C.a.reducedMotionEnabled && G.transition,
                        ],
                      },
                      e,
                    )
                  },
                },
                {
                  key: '_renderTextInput',
                  value: function () {
                    var e = this.props,
                      t = e.Icon,
                      n = (e.accessibilityLabel, e.calculateLength, e.editable),
                      a =
                        (e.errorText,
                        e.helperText,
                        e.invalid,
                        e.label,
                        e.maxLength,
                        e.onBlur,
                        e.onChange,
                        e.onFocus,
                        e.onKeyDown,
                        e.onKeyPress,
                        e.onKeyUp,
                        e.onSubmitEditing,
                        e.showPasswordVisibilityIcon,
                        e.showValidationIcon),
                      i = (e.style, e.type, e.validLength, o()(e, V))
                    return _.a.createElement(
                      L.a,
                      { style: W.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      _.a.createElement(
                        w.b,
                        { size: 'headline1', style: W.wrapper },
                        _.a.createElement(
                          B.a,
                          r()({}, i, {
                            editable: n,
                            maxLength: this._getAdjustedMaxLength(),
                            onBlur: this._handleBlur,
                            onChange: this._handleChange,
                            onFocus: this._handleFocus,
                            onKeyDown: this._handleKeyDown,
                            onKeyPress: this._handleKeyPress,
                            onKeyUp: this._handleKeyUp,
                            ref: this._setTextInputRef,
                            style: this._getTextInputStyle(n),
                            type: this._getTextInputType(),
                          }),
                        ),
                      ),
                      a && !this._isLabelLarge() ? this._renderValidationIcon() : null,
                      this._renderPasswordVisibilityIcon(),
                    )
                  },
                },
                {
                  key: '_renderPasswordVisibilityIcon',
                  value: function () {
                    var e = this.props,
                      t = e.showPasswordVisibilityIcon,
                      n = e.type,
                      a = this.state.isPasswordRevealed
                    return 'password' === n && t
                      ? _.a.createElement(
                          L.a,
                          { style: G.passwordVisibilityIconContainer },
                          _.a.createElement(E.a, {
                            accessibilityLabel: a ? z : U,
                            focusable: !0,
                            hoverLabel: { label: a ? z : U },
                            icon: a ? _.a.createElement(D.a, null) : _.a.createElement(A.a, null),
                            onPress: this._handlePasswordVisibilityClick,
                            size: 'smallCompact',
                            type: 'primaryText',
                          }),
                        )
                      : null
                  },
                },
                {
                  key: '_renderHelperText',
                  value: function () {
                    return _.a.createElement(
                      L.a,
                      { accessibilityLiveRegion: 'polite' },
                      _.a.createElement(
                        w.b,
                        { color: 'gray700', size: 'subtext2', style: G.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return _.a.createElement(
                      L.a,
                      { accessibilityLiveRegion: 'assertive' },
                      _.a.createElement(
                        w.b,
                        { color: 'red500', size: 'subtext2', style: G.subtext },
                        this.props.errorText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderDisplayCount',
                  value: function () {
                    var e = this.state.displayCount,
                      t = this._getMaxDisplayCount(),
                      n = this._exceedsValidLength(e),
                      a = t && S.a.ia24dc8c(t),
                      r = S.a.ia24dc8c(e)
                    return _.a.createElement(
                      L.a,
                      { accessibilityLiveRegion: 'polite', style: [G.textInputHeaderItem, G.displayCount] },
                      _.a.createElement(
                        w.b,
                        { color: n ? 'red500' : 'gray700', size: 'subtext2' },
                        a ? ''.concat(r, ' / ').concat(a) : '',
                      ),
                    )
                  },
                },
                {
                  key: '_renderIcon',
                  value: function () {
                    var e = this.props.Icon,
                      t = this.state.isFocused,
                      n = [G.icon, t && G.focusedIcon]
                    return e && _.a.createElement(e, { style: n })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? _.a.createElement(O.a, { style: [G.validationIcon, x.a.invalidColor] })
                      : _.a.createElement(F.a, { style: [G.validationIcon, x.a.validColor] })
                  },
                },
                {
                  key: '_isFormInvalid',
                  value: function () {
                    var e = this.state.displayCount
                    return !!this.props.invalid || this._exceedsValidLength(e) || this._isInvalidNumber()
                  },
                },
                {
                  key: 'blur',
                  value: function () {
                    this._textInput && this._textInput.blur()
                  },
                },
                {
                  key: 'getValue',
                  value: function () {
                    return (this._textInput && this._textInput.getValue()) || ''
                  },
                },
                {
                  key: 'focus',
                  value: function () {
                    this._textInput && this._textInput.focus()
                  },
                },
                {
                  key: 'isValidLength',
                  value: function () {
                    var e = this.getValue(),
                      t = this._calculateLength(e)
                    return !this._exceedsValidLength(t)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var n = e.calculateLength,
                      a = e.value,
                      r = 'string' == typeof a ? j(a, n) : 0
                    return 'string' == typeof a && r !== t.displayCount
                      ? { displayCount: r, actualCount: a.length }
                      : null
                  },
                },
              ],
            ),
            n
          )
        })(_.a.Component)
      y()(H, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (H.propTypes = {})
      var W = k.a.create(function (e) {
          return {
            container: {
              flexDirection: 'row',
              flexGrow: 1,
              flexShrink: 1,
              overflow: 'hidden',
              paddingBottom: e.spaces.space8,
              paddingHorizontal: e.spaces.space8,
              paddingTop: e.spaces.space12,
              marginTop: e.spaces.space16,
            },
            root: {
              backgroundColor: 'transparent',
              borderRadius: e.borderRadii.none,
              borderWidth: e.borderWidths.none,
              boxSizing: 'border-box',
              color: 'inherit',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              textAlign: 'inherit',
              outlineStyle: 'none',
              padding: 0,
            },
            wrapper: { alignItems: 'center', display: 'flex', fontSize: e.fontSizes.headline2, width: '100%' },
            disabled: { color: e.colors.gray700 },
          }
        }),
        G = k.a.create(function (e) {
          return {
            root: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            textInputFormStyle: { flexDirection: 'row' },
            textInputFormWrapper: { flexGrow: 1, flexShrink: 1 },
            textInputHeader: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'absolute',
              height: '100%',
              width: '100%',
            },
            textInputHeaderItem: { paddingTop: e.spaces.space8, paddingHorizontal: e.spaces.space8, fontSize: 'small' },
            placeholderText: { paddingTop: e.spaces.space16, fontSize: e.fontSizes.headline2, userSelect: 'none' },
            displayCount: { flexGrow: 1, alignItems: 'flex-end' },
            sidePadding: { paddingHorizontal: e.spaces.space8 },
            underTextInputForm: { flexDirection: 'row' },
            subtextWrapper: {
              flexDirection: 'column',
              flex: 1,
              paddingRight: e.spaces.space20,
              paddingTop: e.spaces.space2,
            },
            subtext: { alignSelf: 'flex-start' },
            focusedIcon: { color: e.colors.primary },
            icon: { alignSelf: 'center', color: e.colors.gray700, paddingRight: e.spaces.space4 },
            validationIcon: { alignSelf: 'center', paddingLeft: e.spaces.space4 },
            transition: {
              transition:
                'transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1), padding-top 150ms cubic-bezier(0.4, 0, 0.2, 1)',
            },
            passwordVisibilityIconContainer: { alignSelf: 'center', paddingLeft: e.spaces.space4 },
            passwordVisibilityIcon: { color: e.colors.gray700 },
          }
        })
    },
    pKoL: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('ERkP')),
        v = n.n(f),
        g = n('HPNB'),
        y = n('9HgX'),
        b = n('3XMw'),
        _ = n.n(b),
        C = n('LCtV'),
        w = n('eyty'),
        E = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        x = n('RuTB'),
        T = Object(E.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(7), n.e(178)])
              .then(n.bind(null, 'EOJ2'))
              .then(function (e) {
                return { default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ }
              })
          },
          renderPlaceholder: function (e, t) {
            return v.a.createElement(x.a, { hasError: e, onRetry: t })
          },
        }),
        S = n('yiKp'),
        I = n.n(S),
        R = n('m3Bd'),
        M = n.n(R),
        k = (n('z84I'), n('k/Ka')),
        P = n('eXeu'),
        L = n('iOGT'),
        D = ['children', 'dataSaverMode', 'getVideoRef', 'style', 'variants'],
        A = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), '_setVideoRef', function (t) {
                var n = e.props.getVideoRef
                n && n(t)
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.dataSaverMode,
                    a = (e.getVideoRef, e.style),
                    r = e.variants,
                    i = M()(e, D),
                    o = Object(L.b)(r, n ? L.a.MEDIUM : L.a.HIGH) || [],
                    s = Object(P.f)(
                      o.map(function (e) {
                        return { src: e.url, type: e.content_type }
                      }),
                    )
                  return Object(k.a)(
                    'video',
                    I()(
                      I()({}, i),
                      {},
                      {
                        children: [
                          s.map(function (e) {
                            return v.a.createElement('source', { key: e.src, src: e.src, type: e.type })
                          }),
                          t,
                        ],
                        ref: this._setVideoRef,
                        style: a,
                      },
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(A, 'defaultProps', { dataSaverMode: !1, variants: [] })
      var O = n('62wY'),
        F = n('sjK1'),
        B = n('v6aA'),
        V = n('cHvH'),
        N = n('mXq/'),
        j = n('/yvb'),
        U = n('a6qo'),
        z = n('rHpw'),
        H = n('hOZg'),
        W = n('GCOQ'),
        G = n('tuke'),
        K = n('U+bB'),
        q = n('MWbm'),
        X = n('+/sI'),
        Y = _.a.gd80afba,
        Q = _.a.j322caee,
        J = _.a.abd845fd,
        Z = _.a.df1b0707,
        $ = _.a.cd959e5b,
        ee = _.a.e68b09b4,
        te = _.a.add55c97,
        ne = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), 'state', { isVideoPaused: !0, playGif: !1 }),
              h()(l()(e), '_handleGifClick', function () {
                e.setState({ playGif: !e.state.playGif })
              }),
              h()(l()(e), '_handleMediaPreviewLayout', function (t) {
                var n = e.props,
                  a = n.mediaItem,
                  r = n.resizeIfNeeded,
                  i = a.mediaFile || a.externalMediaDetails
                if (i) {
                  var o = t.nativeEvent.layout,
                    s = o.height,
                    l = o.width,
                    c = i.height,
                    d = i.width / c
                  Math.abs(d - l / s) > 0.05 &&
                    e._mediaContainer &&
                    ('width' === r
                      ? e._mediaContainer.setNativeProps({ style: { width: s * d } })
                      : 'height' === r && e._mediaContainer.setNativeProps({ style: { height: l / d } }))
                }
              }),
              h()(l()(e), '_handleVideoOnPlay', function (t) {
                e.setState({ isVideoPaused: !1 })
              }),
              h()(l()(e), '_handleVideoOnPause', function (t) {
                e.setState({ isVideoPaused: !0 })
              }),
              h()(l()(e), '_setMediaContainerRef', function (t) {
                e._mediaContainer = t
              }),
              h()(l()(e), '_setVideoRef', function (t) {
                e._video = t
              }),
              h()(l()(e), 'playVideo', function () {
                if (e._video) {
                  var t = e._video.play()
                  void 0 !== t &&
                    t
                      .then(function (t) {
                        e._handleVideoOnPlay()
                      })
                      .catch()
                }
              }),
              h()(l()(e), 'pauseVideo', function () {
                e._video && (e._video.pause(), e._handleVideoOnPause())
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this,
                    n = this.props,
                    a = n.accessibilityLabel,
                    r = n.accessibilityRole,
                    i = n.enableGif,
                    o = n.mediaItem,
                    s = n.onEdit,
                    l = n.onEditSensitiveWarning,
                    c = n.onRemove,
                    d = n.style,
                    u = n.withAltTextLabel,
                    p = n.withCloseButton,
                    m = n.withEditButton,
                    h = n.withEditIcon,
                    f = n.withEditSensitiveWarningButton,
                    b = this.state.playGif,
                    _ = o.externalMediaDetails && o.externalMediaDetails.mediaType === y.a,
                    C = _ || (i && o.mediaFile && o.mediaFile.isGif),
                    w = !(null === (e = o.mediaFile) || void 0 === e || !e.isVideo)
                  return v.a.createElement(V.a, null, function (e) {
                    var n = e.windowWidth,
                      i = void 0 !== h ? h : !g.a.isTwoColumnLayout(n)
                    return v.a.createElement(
                      q.a,
                      {
                        accessibilityLabel: a || te,
                        accessibilityRole: r,
                        onLayout: t._handleMediaPreviewLayout,
                        ref: t._setMediaContainerRef,
                        style: [d, ae.cursor, _ && ae.gifPlayButton],
                      },
                      t._renderPreview(),
                      _ &&
                        !b &&
                        v.a.createElement(N.a, { accessibilityLabel: Z, onPress: t._handleGifClick, size: 'small' }),
                      p
                        ? v.a.createElement(j.a, {
                            accessibilityLabel: $,
                            hoverLabel: { label: ee },
                            icon: v.a.createElement(H.a, null),
                            onPress: c,
                            size: 'small',
                            style: ae.close,
                            type: 'onMediaDominantColorFilled',
                          })
                        : null,
                      C ? v.a.createElement(X.c, { type: X.a }) : null,
                      u && !w ? v.a.createElement(U.a, { align: 'left', altLabel: a }) : null,
                      m
                        ? v.a.createElement(
                            q.a,
                            { style: [ae.editMedia, w ? ae.editVideo : ae.editImage] },
                            f
                              ? v.a.createElement(j.a, {
                                  accessibilityLabel: Q,
                                  icon: v.a.createElement(W.a, { style: ae.editSensitiveWarningIcon }),
                                  onPress: l,
                                  size: 'small',
                                  style: ae.editSensitiveWarningButton,
                                  type: 'onMediaDominantColorFilled',
                                })
                              : null,
                            v.a.createElement(
                              j.a,
                              {
                                accessibilityLabel: Y,
                                icon: i ? v.a.createElement(G.a, null) : void 0,
                                onPress: s,
                                size: i ? 'xSmall' : 'small',
                                type: 'onMediaDominantColorFilled',
                              },
                              i ? void 0 : J,
                            ),
                          )
                        : null,
                    )
                  })
                },
              },
              {
                key: '_renderPreview',
                value: function () {
                  var e,
                    t = this.props.mediaItem
                  if (t.externalMediaDetails) {
                    var n = t.externalMediaDetails.previewUrl,
                      a = t.externalMediaDetails.stillMediaUrl
                    return this._renderGifPreview(n, a)
                  }
                  return null !== (e = t.mediaFile) && void 0 !== e && e.isVideo
                    ? this._renderVideoPreview(t.mediaFile.type, t.mediaFile.url, t.id, t.mediaFile)
                    : v.a.createElement(q.a, { style: z.a.absoluteFill }, this._renderImagePreview())
                },
              },
              {
                key: '_renderGifPreview',
                value: function (e, t) {
                  var n = { uri: this.state.playGif ? e : t }
                  return v.a.createElement(
                    q.a,
                    { onClick: this._handleGifClick, style: z.a.absoluteFill },
                    v.a.createElement(K.a, { resizeMode: 'cover', source: n, style: ae.video }),
                  )
                },
              },
              {
                key: '_renderImagePreview',
                value: function () {
                  var e = this.props,
                    t = e.borderRadius,
                    n = e.enableGif,
                    a = e.imageResizeMode,
                    r = e.mediaItem,
                    i = e.onClick
                  return v.a.createElement(C.b, {
                    borderRadius: t,
                    enableGif: n,
                    mediaItem: r,
                    onClick: i,
                    resizeMode: a,
                  })
                },
              },
              {
                key: '_renderVideoPreview',
                value: function (e, t, n, a) {
                  var r
                  this._configurableVideoPlayerEnabled = this.context.featureSwitches.isTrue(
                    'responsive_web_composer_configurable_video_player_enabled',
                  )
                  var i = this.props.mediaItem,
                    o = null === (r = i.mediaMetadata) || void 0 === r ? void 0 : r.subtitles
                  if (this._configurableVideoPlayerEnabled && a instanceof F.c) {
                    var s = Object(w.h)(a.fileHandle) ? [{ src: t, type: e }] : [],
                      l = ''.concat(n)
                    return v.a.createElement(T, {
                      mediaFile: a,
                      mediaId: l,
                      subtitles: o,
                      trimData: null == i ? void 0 : i.trimData,
                      variants: s,
                    })
                  }
                  var c,
                    d = Object(w.h)(a.fileHandle) ? [{ content_type: e, url: t }] : [],
                    u =
                      (null == o || null === (c = o.upload) || void 0 === c ? void 0 : c.mediaFile) instanceof O.b
                        ? o.upload.mediaFile.vtt
                        : void 0
                  return v.a.createElement(
                    A,
                    {
                      autoPlay: !1,
                      controls: !0,
                      getVideoRef: this._setVideoRef,
                      loop: !0,
                      muted: !0,
                      onPause: this._handleVideoOnPause,
                      onPlay: this._handleVideoOnPlay,
                      playsInline: !0,
                      poster: a instanceof F.c ? a.thumbnail : '',
                      style: ae.video,
                      variants: d,
                    },
                    o && u
                      ? v.a.createElement('track', {
                          default: !0,
                          kind: 'subtitles',
                          label: o.displayName,
                          src: u,
                          srcLang: o.lang,
                        })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(ne, 'contextType', B.a),
        h()(ne, 'defaultProps', {
          enableGif: !0,
          withCloseButton: !0,
          withAltTextLabel: !1,
          withEditButton: !1,
          withEditSensitiveWarningButton: !1,
        })
      var ae = z.a.create(function (e) {
        return {
          close: { position: 'absolute', left: e.spaces.space4, top: e.spaces.space4 },
          cursor: { cursor: 'pointer' },
          editSensitiveWarningIcon: { color: e.colors.primary },
          editMedia: { display: 'flex', flexDirection: 'row', position: 'absolute', right: e.spaces.space4 },
          editImage: { bottom: e.spaces.space4 },
          editVideo: { top: e.spaces.space4 },
          editSensitiveWarningButton: { marginRight: e.spaces.space8 },
          gifPlayButton: { alignItems: 'center', justifyContent: 'center' },
          video: { height: '100%', width: '100%' },
        }
      })
      t.a = ne
    },
    pcjM: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Compose', function () {
          return We
        })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        s = n('Y9Ll'),
        l = n.n(s),
        c = n('1Pcy'),
        d = n.n(c),
        u = n('5Yy7'),
        p = n.n(u),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        v = n.n(f),
        g = (n('2G9S'), n('KqXw'), n('MvUL'), n('uFXj'), n('ERkP')),
        y = n.n(g),
        b = n('HPNB'),
        _ = n('h5NW'),
        C = n('m3Bd'),
        w = n.n(C),
        E = (n('vrRf'), n('z84I'), n('LW0h'), n('7x/C'), n('5BYb'), n('xVN5')),
        x = n('pidX'),
        T = n('AspN'),
        S = n('XOJV'),
        I = n('G6rE'),
        R = n('xZGM'),
        M = n('0KEI'),
        k = n('hqKg'),
        P = n('oEGd'),
        L = n('rU/Q'),
        D = n('XpKj'),
        A = ['cardUrl', 'mediaIds'],
        O = function (e) {
          return function (t, n) {
            var a = (function (e, t) {
              return t.location.state
            })(0, n)
            return a ? e(a) : void 0
          }
        },
        F = Object(k.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          I.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        B = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        V = O(function (e) {
          return e.inReplyToStatusId
        }),
        N = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        j = O(function (e) {
          return e.defaultText
        }),
        U = O(function (e) {
          return e.quotedStatus
        }),
        z = O(function (e) {
          return e.isSelfThreadReply
        }),
        H = O(function (e) {
          return e.hideUnsentTweetsButton
        }),
        W = O(function (e) {
          return e.headingSubtitle
        }),
        G = O(function (e) {
          return e.headingTitle
        }),
        K = O(function (e) {
          return e.selectedCommunityId
        }),
        q = Object(k.createSelector)(
          function (e) {
            return E.k(e, '')
          },
          function (e, t) {
            var n = j(e, t)
            return Object(x.a)(t.location) || n
          },
          function (e, t) {
            return t.quotedStatus ? t.quotedStatus : U(e, t)
          },
          T.j,
          N,
          function (e, t, n, a, i) {
            return e.map(function (e, o) {
              return r()(
                r()({}, ((s = e).cardUrl, s.mediaIds, w()(s, A))),
                {},
                {
                  media: a.filter(function (t) {
                    return e.mediaIds.some(function (e) {
                      return e === t.id
                    })
                  }),
                  quotedStatus: 0 === o ? n : void 0,
                  text: 0 === o && t && !i ? t : e.text,
                },
              )
              var s
            })
          },
        ),
        X = Object(k.createStructuredSelector)({
          activeUser: F,
          composerData: q,
          draftTweets: L.e,
          inReplyToStatus: function (e, t) {
            var n = B(0, t) || V(e, t)
            return n ? S.a.selectHydrated(e, n) : void 0
          },
          inReplyToStatusId: B,
          isIntentRoute: N,
          isSelfThreadReply: z,
          isSending: function (e) {
            return E.m(e, '')
          },
          scheduledTweets: D.f,
          sendingProgress: E.o,
          composeSemanticCoreId: O(function (e) {
            return e.composeSemanticCoreId
          }),
          hideUnsentTweetsButton: H,
          subtitle: W,
          title: G,
          selectedCommunityIdFromLocationState: K,
          shouldShowCommunityAudienceEducation: function (e, t) {
            return Object(R.C)(e, R.e)
          },
        }),
        Y = {
          createDraftTweetApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)(L.d),
          createScheduledTweetApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)(D.d),
          fetchScheduledTweets: D.c,
          fetchDraftTweets: L.c,
          addCommunityAudienceEducationFlag: function () {
            return Object(R.y)(R.e)
          },
          updateAudienceControlsValue: E.t,
        },
        Q = Object(P.f)(X, Y),
        J = n('RgK2'),
        Z = n.n(J),
        $ = n('jHSc'),
        ee = n('lsKC'),
        te = n('3XMw'),
        ne = n.n(te),
        ae = n('iFPY'),
        re = n('QbaN'),
        ie = n('v6aA'),
        oe = n('rxPX'),
        se = function (e) {
          return Object(R.C)(e, R.q)
        },
        le = Object(oe.a)()
          .propsFromState(function () {
            return { shouldShowNewsletterCallout: se }
          })
          .propsFromActions(function () {
            return { addFlag: R.y }
          }),
        ce = n('Lsrn'),
        de = n('k/Ka'),
        ue = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(de.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ce.a.root, e.style],
                viewBox: '0 0 32 32',
              },
            ),
            y.a.createElement(
              'g',
              null,
              y.a.createElement('path', {
                d: 'M18.672 15.25H8.078c-.414 0-.75.336-.75.75s.336.75.75.75h10.594c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm0-5.297H8.078c-.414 0-.75.336-.75.75s.336.75.75.75h10.594c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-4.304 10.594h-6.29c-.414 0-.75.336-.75.75s.336.75.75.75h6.29c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
              }),
              y.a.createElement('path', {
                d: 'M29.284 15.25h-4.548V5.736C24.736 4.228 23.51 3 22 3H4.75C3.24 3 2.014 4.228 2.014 5.736v20.527C2.014 27.773 3.24 29 4.75 29h21.885c1.874 0 3.4-1.524 3.4-3.398V16c0-.414-.337-.75-.75-.75zM3.514 26.264V5.736c0-.68.554-1.236 1.236-1.236H22c.682 0 1.236.555 1.236 1.236V25.6c0 .704.214 1.357.58 1.9H4.75c-.682 0-1.236-.555-1.236-1.236zm23.12 1.236c-1.046 0-1.897-.852-1.897-1.898V16.75h3.798v8.852c0 1.046-.853 1.898-1.9 1.898z',
              }),
            ),
          )
        }
      ue.metadata = { width: 32, height: 32 }
      var pe = ue,
        me = n('MWbm'),
        he = n('4zmP'),
        fe = n('rHpw'),
        ve = ne.a.ed33a3b6,
        ge = ne.a.d5bda8b3,
        ye = ne.a.i859a9d3,
        be = fe.a.create(function (e) {
          return { revueCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 } }
        }),
        _e = le(function (e) {
          var t = e.addFlag,
            n = e.shouldShowNewsletterCallout,
            a = y.a.useContext(ie.a).featureSwitches.isTrue('responsive_web_newsletters_callout_enabled')
          return n && a
            ? y.a.createElement(
                me.a,
                { style: be.revueCallout },
                y.a.createElement(he.a, {
                  Icon: pe,
                  action: {
                    label: ye,
                    link: 'https://www.getrevue.co?utm_source=twitter-threads&utm_campaign=announcement-callout&utm_content=learn-more',
                  },
                  headline: ve,
                  onClose: function () {
                    t(R.q)
                  },
                  text: ge,
                  withCloseButton: !0,
                }),
              )
            : null
        }),
        Ce = n('7nmT'),
        we = n.n(Ce),
        Ee = n('Dtul'),
        xe = n('zh9S'),
        Te = n('7JQg'),
        Se = 'tweetButton',
        Ie = n('/yvb'),
        Re = n('JYMr'),
        Me = n('cHvH'),
        ke = n('feu+'),
        Pe = n('7N4s'),
        Le = n('oQhu'),
        De = n('3A2y'),
        Ae = ne.a.b8f0483e,
        Oe = ne.a.a133d13e,
        Fe = ne.a.a1183237,
        Be = ne.a.da2663f5,
        Ve = ne.a.j24c37b2,
        Ne = 'compose',
        je = { page: Ne },
        Ue = { page: Ne, section: 'reply' },
        ze = { context: 'compose_intent_logged_in' },
        He = { viewType: 'send_tweet' },
        We = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(d()(e), 'state', { isValid: !1 }),
              v()(d()(e), '_handleDismissCommunityAudienceEducation', function () {
                e.props.addCommunityAudienceEducationFlag()
              }),
              v()(
                d()(e),
                '_handleAppBarHeight',
                Object(Le.a)(function () {
                  var t = we.a.findDOMNode(e._appBarRef)
                  return (t && t instanceof window.Element && t.getBoundingClientRect().height) || 50
                }),
              ),
              v()(d()(e), '_handleBackClick', function () {
                e._composeContainerRef && e._composeContainerRef.handleDismissComposer()
              }),
              v()(d()(e), '_handleCloseComposer', function () {
                e._appBarRef && e._appBarRef.goBack()
              }),
              v()(d()(e), '_handleSendTweet', function () {
                e._composeContainerRef && e._composeContainerRef.handleTweetOrRetweet()
              }),
              v()(d()(e), '_setValidity', function (t) {
                t !== e.state.isValid && e.setState({ isValid: t })
              }),
              v()(d()(e), '_getScribeNamespace', function () {
                return e.props.inReplyToStatus || e.props.inReplyToStatusId ? Ue : je
              }),
              v()(d()(e), '_getScribeData', function () {
                var t = e.props,
                  n = t.activeUser
                return t.isIntentRoute && n ? ze : Z.a
              }),
              v()(d()(e), '_renderAppBarRightControl', function () {
                var t = e.state.isValid,
                  n = e.context.isModal,
                  a = e.props,
                  r = a.activeUser,
                  i = a.inReplyToStatus,
                  o = a.isSelfThreadReply,
                  s = a.isSending,
                  l = !t || s || !r
                return n
                  ? void 0
                  : y.a.createElement(
                      Ie.a,
                      {
                        behavioralEventContext: He,
                        disabled: l,
                        onPress: e._handleSendTweet,
                        size: 'small',
                        testID: Se,
                        type: 'brandFilled',
                      },
                      Object(ee.b)({
                        inReplyToStatus: !!i,
                        isSelfThreadReply: !!o,
                        isQuoteTweet: !!e.isQuoteTweet,
                        isRetweet: !!e.isRetweet,
                        isScheduled: !!e.isScheduled,
                        isThread: e.isThread,
                      }),
                    )
              }),
              v()(d()(e), '_renderHeaderWithProgressBar', function (t) {
                var n = e.context.isModal,
                  a = e.props,
                  r = a.isSending,
                  i = a.sendingProgress
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  y.a.createElement(Re.a, {
                    progress: r ? Math.max(i, 0.02) : 0,
                    style: [Ge.progressBar, n && Ge.progressBarModal],
                  }),
                  t,
                )
              }),
              v()(d()(e), '_renderUnsentHeading', function () {
                var t = e.props,
                  n = t.draftTweets,
                  a = t.hideUnsentTweetsButton,
                  r = t.scheduledTweets
                if (!a && (r.length > 0 || n.length > 0))
                  return y.a.createElement(
                    me.a,
                    { style: Ge.unsentHeadingContainer },
                    y.a.createElement(Ie.a, { onPress: e._handleOpenUnsent, size: 'small', type: 'brandText' }, Oe),
                  )
              }),
              v()(d()(e), '_handleOpenUnsent', function () {
                var t = e.props.history
                Object(xe.c)(r()(r()({}, e._getScribeNamespace()), {}, { element: 'unsent_tweets', action: 'click' })),
                  t.push('/compose/tweet/unsent/drafts')
              }),
              v()(d()(e), '_setAppBarRef', function (t) {
                e._appBarRef = t
              }),
              v()(d()(e), '_handleComposeContainerRef', function (t) {
                e._composeContainerRef = t
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.activeUser,
                    n = e.createDraftTweetApiErrorHandler,
                    a = e.createScheduledTweetApiErrorHandler,
                    r = e.fetchDraftTweets,
                    i = e.fetchScheduledTweets,
                    o = e.history,
                    s = e.inReplyToStatus,
                    l = e.location,
                    c = e.selectedCommunityIdFromLocationState,
                    d = e.updateAudienceControlsValue
                  ;(this._unlockReload = Ee.a.acquire()),
                    o.setModalRouteBreakpoint(o.location),
                    t && (i().catch(a()), r().catch(n())),
                    c &&
                      (d({
                        _type: 'community_members',
                        communityIdValue: c,
                        conversationControlsValue: 'community_members',
                      }),
                      o.replace({ pathname: l.pathname, state: Object(De.a)(l.state || {}, 'selectedCommunityId') })),
                    null != s && s.exclusivity_info
                      ? d({
                          _type: 'super_followers_exclusive',
                          conversationControlsValue: 'super_followers_exclusive',
                          exclusivityControlValue: {},
                        })
                      : null != s && s.community_id_str
                      ? d({
                          _type: 'community_members',
                          communityIdValue: s.community_id_str,
                          conversationControlsValue: 'community_members',
                        })
                      : null != s &&
                        s.trusted_friends_info &&
                        d({
                          _type: 'trusted_friends_tweet',
                          conversationControlsValue: 'trusted_friends_tweet',
                          trustedFriendsValue: { trusted_friends_list_id: '1482057446797373440' },
                        })
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unlockReload()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.activeUser,
                    a = t.composeHeader,
                    r = t.composeSemanticCoreId,
                    i = t.composerData,
                    o = t.customizePropsForSingleComposerItem,
                    s = t.history,
                    l = t.isIntentRoute,
                    c = t.location,
                    d = t.quotedStatus,
                    u = t.richTextInputContext,
                    p = t.subtitle,
                    m = t.title,
                    h = t.typeaheadWrapper,
                    f = l && !n,
                    v = this.context.isModal
                  return y.a.createElement(
                    Te.c,
                    { data: this._getScribeData(), namespace: this._getScribeNamespace() },
                    y.a.createElement(Me.a, null, function (t) {
                      var l = t.windowWidth,
                        g = b.a.shouldRenderAsModal(l),
                        C = (f || e.showCommunityAudienceEducation) && g,
                        w = (null == i ? void 0 : i.length) > 1
                      return y.a.createElement(
                        y.a.Fragment,
                        null,
                        e.showCommunityAudienceEducation
                          ? y.a.createElement(ke.a, {
                              actionLabel: Ve,
                              graphicDisplayMode: 'none',
                              headline: Fe,
                              onAction: e._handleDismissCommunityAudienceEducation,
                              onClose: e._handleDismissCommunityAudienceEducation,
                              subtext: Be,
                              withCloseButton: !1,
                            })
                          : null,
                        f && y.a.createElement(ae.a, { history: s, location: c }),
                        !C &&
                          y.a.createElement(
                            y.a.Fragment,
                            null,
                            y.a.createElement(
                              $.b,
                              {
                                appBarRef: e._setAppBarRef,
                                behavioralEventViewType: Ne,
                                documentTitle: Ae,
                                hideBackButton: !1,
                                history: s,
                                middleControl: e._renderUnsentHeading(),
                                onBackClick: e._handleBackClick,
                                renderHeader: e._renderHeaderWithProgressBar,
                                rightControl: e._renderAppBarRightControl(),
                                subtitle: p,
                                title: m,
                              },
                              y.a.createElement(_.a, {
                                activeUser: n,
                                composeHeader: a,
                                composeSemanticCoreId: r,
                                customizePropsForSingleComposerItem: o,
                                history: s,
                                isModal: v,
                                location: c,
                                onCloseComposer: e._handleCloseComposer,
                                onHandleAppBarHeight: e._handleAppBarHeight,
                                onRef: e._handleComposeContainerRef,
                                quotedStatus: d,
                                richTextInputContext: u,
                                setValidity: e._setValidity,
                                typeaheadWrapper: h,
                                windowWidth: l,
                              }),
                            ),
                            w ? y.a.createElement(_e, null) : null,
                          ),
                      )
                    }),
                  )
                },
              },
              {
                key: 'showCommunityAudienceEducation',
                get: function () {
                  var e = this.props,
                    t = e.inReplyToStatus,
                    n = e.selectedCommunityIdFromLocationState,
                    a = e.shouldShowCommunityAudienceEducation,
                    r = !!((null != t && t.community_id_str) || n)
                  return a && r
                },
              },
              {
                key: 'isThread',
                get: function () {
                  return this.props.composerData.length > 1
                },
              },
              {
                key: 'isRetweet',
                get: function () {
                  var e = this.props.composerData,
                    t = 0 === e[0].media.length
                  return !this.isThread && e[0].quotedStatus && '' === e[0].text && t
                },
              },
              {
                key: 'isQuoteTweet',
                get: function () {
                  var e = this.props.composerData
                  return !this.isThread && !!e[0].quotedStatus
                },
              },
              {
                key: 'isScheduled',
                get: function () {
                  var e = this.props.composerData
                  return Object(re.h)(e[0].scheduledFor)
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      v()(We, 'contextType', Pe.b)
      var Ge = fe.a.create(function (e) {
        return {
          progressBar: {
            position: 'fixed',
            borderTopLeftRadius: e.borderRadii.small,
            borderTopRightRadius: e.borderRadii.small,
            zIndex: e.componentZIndices.appBarZIndex + 1,
          },
          progressBarModal: { position: 'absolute' },
          unsentHeadingContainer: { marginLeft: 'auto' },
        }
      })
      t.default = Q(We)
    },
    piX5: function (e, t, n) {
      'use strict'
      n('uFXj'), n('2G9S')
      var a = n('rHpw').a.create(function (e) {
        return {
          border: {
            borderRadius: e.borderRadii.small,
            borderWidth: e.borderWidths.small,
            borderColor: e.colors.gray200,
          },
          focusedBorderValid: {
            boxShadow: '0 0 0 '.concat(e.borderWidths.small, ' ').concat(e.colors.primary),
            borderColor: e.colors.primary,
          },
          focusedBorderInvalid: { boxShadow: '0 0 0 '.concat(e.borderWidths.small, ' ').concat(e.colors.red500) },
          invalidBorderColor: { borderColor: e.colors.red500 },
          invalidColor: { color: e.colors.red500 },
          validColor: { color: e.colors.primary },
          disabled: { cursor: 'default', opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 },
        }
      })
      t.a = a
    },
    pidX: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return d
      })
      var a = n('ddV6'),
        r = n.n(a),
        i =
          (n('z84I'),
          n('TJCb'),
          n('7x/C'),
          n('DZ+c'),
          n('7xRU'),
          n('KqXw'),
          n('Ysgh'),
          n('LW0h'),
          n('2G9S'),
          n('3XMw')),
        o = n.n(i),
        s = n('3A2y'),
        l = o.a.b2e94283,
        c = ['title', 'screen_name', 'text', 'url', 'hashtags', 'via']
      t.a = function (e) {
        var t = e.state || {},
          n = e.query || {},
          a = c.map(function (e) {
            return t[e] || n[e]
          }),
          i = r()(a, 6),
          o = i[0],
          s = i[1],
          d = i[2],
          u = i[3],
          p = i[4],
          m = i[5],
          h = [
            o,
            s && '@'.concat(s.toString()),
            d,
            u,
            p &&
              p
                .toString()
                .split(',')
                .map(function (e) {
                  return '#'.concat(e)
                })
                .join(' '),
            m && l({ viaScreenName: m }),
          ]
            .filter(Boolean)
            .join(' ')
        return h ? ''.concat(h).concat(' ') : void 0
      }
      var d = function (e) {
        return Object(s.a)(e, c)
      }
    },
    rFBM: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('hCOa'), n('87if'), n('ERkP')),
        v = n.n(f),
        g = n('rHpw'),
        y = n('k/Ka'),
        b = n('MWbm'),
        _ = function (e) {
          return Object(y.a)('div', e)
        },
        C = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), '_dragEnterCount', 0),
              h()(l()(e), 'state', { active: !1 }),
              h()(l()(e), '_handleDragDrop', function (t) {
                var n = e.props.onFilesAdded
                t.preventDefault(), n(Array.from(t && t.dataTransfer.files)), e._updateDragCount(0)
              }),
              h()(l()(e), '_handleDragEnter', function (t) {
                var n = e.props.onDragEnter
                t.preventDefault(), n && n(), e._updateDragCount(e._dragEnterCount + 1)
              }),
              h()(l()(e), '_handleDragLeave', function (t) {
                t.preventDefault(), e._updateDragCount(e._dragEnterCount - 1)
              }),
              h()(l()(e), '_handleDragOver', function (e) {
                e.preventDefault()
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.allowDragDrop,
                    n = e.children,
                    a = e.style,
                    r = this.state.active,
                    i = t ? w.dragBorderValid : w.dragBorderInvalid
                  return v.a.createElement(
                    _,
                    {
                      onDragEnter: this._handleDragEnter,
                      onDragLeave: this._handleDragLeave,
                      onDragOver: this._handleDragOver,
                      onDrop: this._handleDragDrop,
                      style: [w.root, a, r && i],
                    },
                    v.a.createElement(b.a, { style: w.inner }, 'function' == typeof n ? n(r) : n),
                  )
                },
              },
              {
                key: '_updateDragCount',
                value: function (e) {
                  ;(this._dragEnterCount = e),
                    0 === this._dragEnterCount
                      ? this.setState({ active: !1 })
                      : this._dragEnterCount > 0 && this.setState({ active: !0 })
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(C, 'defaultProps', { allowDragDrop: !0 })
      var w = g.a.create(function (e) {
        return {
          root: { display: 'flex', flexDirection: 'column' },
          dragBorderValid: { borderStyle: 'dashed', borderWidth: e.spaces.space2, borderColor: e.colors.primary },
          dragBorderInvalid: { borderStyle: 'dashed', borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 },
          inner: { flexGrow: 1 },
        }
      })
      t.a = C
    },
    rziq: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return a
      }),
        n.d(t, 'a', function () {
          return r
        })
      var a = 'send-tweet',
        r = 'dismiss-composer'
    },
    sCk0: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('z84I'), n('7x/C'), n('JtPf'), n('DfhM'), n('ERkP')),
        v = n.n(f),
        g = n('zfvc'),
        y = n('RhWx'),
        b = n.n(y),
        _ = (n('yH/f'), n('M+/F'), n('zrc3')),
        C = Object.freeze({ in: 'in', out: 'out', static: 'static' }),
        w = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), 'state', {
                isAnimating: !1,
                renderChildren: v.a.Children.toArray(e.props.children).map(function (e) {
                  return { status: C.static, child: e }
                }),
              }),
              h()(l()(e), '_handleEachAnimateComplete', function () {
                var t = e.state.isAnimating,
                  n = e.props,
                  a = n.children,
                  r = n.onAnimateComplete
                t &&
                  (r && r(),
                  e.setState({
                    renderChildren: v.a.Children.toArray(a).map(function (e) {
                      return { status: C.static, child: e }
                    }),
                    isAnimating: !1,
                  }))
              }),
              e
            )
          }
          return (
            o()(
              n,
              [
                {
                  key: 'render',
                  value: function () {
                    var e = this
                    return this.state.renderChildren.map(function (t) {
                      var n = t.child,
                        a = t.status
                      return v.a.createElement(
                        g.a,
                        {
                          animateMount: a !== C.static,
                          key: n.key,
                          onAnimateComplete: e._handleEachAnimateComplete,
                          show: a !== C.out,
                        },
                        n,
                      )
                    })
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var n = (function (e, t) {
                      for (
                        var n = 0,
                          a = 0,
                          r = [],
                          i = function () {
                            if (n >= t.length)
                              return (
                                r.push.apply(
                                  r,
                                  b()(
                                    e.slice(a).map(function (e) {
                                      return { child: e, status: C.out }
                                    }),
                                  ),
                                ),
                                'break'
                              )
                            var i = t[n],
                              o = e[a]
                            if (i.key === o.key) r.push({ child: i, status: C.static }), (n += 1)
                            else {
                              var s = Object(_.a)(t, function (e) {
                                return e.key === o.key
                              })
                              s >= 0
                                ? (r.push.apply(
                                    r,
                                    b()(
                                      t.slice(n, s).map(function (e) {
                                        return { child: e, status: C.in }
                                      }),
                                    ).concat([{ child: t[s], status: C.static }]),
                                  ),
                                  (n = s + 1))
                                : r.push({ child: o, status: C.out })
                            }
                            a += 1
                          };
                        a < e.length && 'break' !== i();

                      );
                      return (
                        n < t.length &&
                          r.push.apply(
                            r,
                            b()(
                              t.slice(n).map(function (e) {
                                return { child: e, status: C.in }
                              }),
                            ),
                          ),
                        r
                      )
                    })(
                      t.renderChildren.map(function (e) {
                        return e.child
                      }),
                      v.a.Children.toArray(e.children),
                    )
                    return {
                      renderChildren: n,
                      isAnimating: !n.every(function (e) {
                        return e.status === C.static
                      }),
                    }
                  },
                },
              ],
            ),
            n
          )
        })(v.a.Component)
      t.a = w
    },
    tuke: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
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
                d: 'M21.592 5.576c.877-.967.882-2.298.006-3.174-.877-.877-2.208-.87-3.174.006 0 0-.003 0-.004.002l-.006.006-.005.004s-.002 0-.002.002L8.398 11.27c-1.716-.214-3.424.31-4.534 1.42-3.872 3.874-1.523 9.616-1.422 9.858.1.24.32.41.577.45.037.007.075.01.113.01.218 0 .428-.095.57-.265 1.83-2.15 3.043-2.023 4.328-1.89 1.164.122 2.477.258 3.834-1.282.975-1.106 1.302-2.585.922-4.03l8.792-9.948h.002l.004-.006.006-.006.002-.004zm-1.055-2.113c.305.305.28.74-.06 1.11-.003.003-.004.007-.006.01 0 0-.003 0-.004.003l-5.662 6.406-1.796-1.796 6.406-5.662c.002 0 .002-.003.004-.005.002-.003.006-.004.008-.006.37-.34.807-.365 1.11-.06zm-8.62 10.797L9.74 12.084l2.142-1.894 1.927 1.927-1.894 2.143zm-1.178 4.32c-.848.96-1.488.895-2.552.78-1.27-.13-2.808-.293-4.722 1.463-.415-1.673-.784-4.83 1.457-7.072.807-.805 2.086-1.168 3.377-.983l2.977 2.976c.333 1.03.15 2.057-.538 2.836z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    ude7: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      n('7x/C'), n('JtPf')
      var a = n('A0bJ'),
        r = n('hJBK'),
        i = n('1auM'),
        o = 1,
        s = 2,
        l = 3,
        c = function (e) {
          if (Object(i.b)(e)) {
            if (e.isGif) {
              var t = e.height,
                n = e.img,
                c = e.orientation,
                d = e.width
              return Object(r.b)(n, d, t, c).then(
                function (e) {
                  return Object(r.a)(e)
                },
                function (e) {
                  throw new a.a('Gif preview could not be generated', l)
                },
              )
            }
            var u = new a.a('The provided image must be a gif', s)
            return Promise.reject(u)
          }
          var p = new a.a('The provided file is not a valid image', o)
          return Promise.reject(p)
        }
    },
    vOV5: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'PlacePickerScreen', function () {
          return le
        })
      var a = n('RhWx'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        s = n('Y9Ll'),
        l = n.n(s),
        c = n('1Pcy'),
        d = n.n(c),
        u = n('5Yy7'),
        p = n.n(u),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        v = n.n(f),
        g = (n('2G9S'), n('LW0h'), n('7x/C'), n('jQ3i'), n('x4t0'), n('z84I'), n('KqXw'), n('LJOr'), n('ERkP')),
        y = n.n(g),
        b = n('a/ea'),
        _ = n('/Rsk'),
        C = n('P1r1'),
        w = n('xVN5'),
        E = n('RqPI'),
        x = n('rxPX'),
        T = n('0KEI'),
        S = Object(x.a)()
          .propsFromState(function () {
            return {
              autotaggedLocation: _.d,
              initialResults: _.f,
              initialFetchStatus: _.e,
              lastSearchResults: _.h,
              lastSearchFetchStatus: _.g,
              position: b.d,
              taggedLocation: w.p,
              userCountry: E.y,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)('PLACE_PICKER'),
              loadGeoLocation: b.a,
              fetchInitialPlacesIfNeeded: _.b,
              searchPlaces: _.c,
              updateLastSelectedPlace: _.i,
              updateSettings: C.M,
              updateSingleComposer: w.w,
            }
          })
          .withAnalytics({ page: 'compose', section: 'place_picker' }),
        I = n('kGix'),
        R = n('v//M'),
        M = n('jHSc'),
        k = n('M6MT'),
        P = n('3XMw'),
        L = n.n(P),
        D = n('MWbm'),
        A = n('pjBI'),
        O = n('t62R'),
        F = n('CKsB'),
        B = n('/yvb'),
        V = n('6OUF'),
        N = n('cmUU'),
        j = n('rHpw'),
        U =
          (n('hBpG'),
          (function () {
            function e(t, n, a) {
              o()(this, e), (this.formatter = t), (this.fallbackFormatter = n), (this.fallbackRatio = a)
            }
            return (
              l()(e, [
                {
                  key: 'format',
                  value: function (e) {
                    var t = Math.round(10 * e) / 10
                    return t > 0
                      ? this.formatter({ distance: t })
                      : this.fallbackFormatter({ distance: Math.round(e * this.fallbackRatio) })
                  },
                },
              ]),
              e
            )
          })()),
        z = new U(L.a.b01ed2da, L.a.i83e29e0, 5280),
        H = new U(L.a.d4b7cff7, L.a.b211849e, 1e3),
        W = 1.609344,
        G = ['lr', 'mm', 'uk', 'us'],
        K = n('JFx8'),
        q = n('VwDm'),
        X = n('EfHu'),
        Y = n('474o'),
        Q = L.a.b772cd65,
        J = L.a.e7c766ee,
        Z = L.a.ab68727a,
        $ = L.a.ae4057a2,
        ee = L.a.bf2923a5,
        te = L.a.d963d1b6,
        ne = L.a.a893d601,
        ae = L.a.e68b09b4,
        re = L.a.be6cc44d,
        ie = L.a.d8ef3232,
        oe = L.a.cce30dcc,
        se = L.a.fa9adac1,
        le = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e) {
            var a
            o()(this, n),
              (a = t.call(this, e)),
              v()(d()(a), 'state', {
                activeResultSet: Y.c.initial,
                geoLocationError: void 0,
                query: '',
                selectedLocation: void 0,
                showSearchForButton: !1,
              }),
              v()(d()(a), '_appBarRef', y.a.createRef()),
              v()(d()(a), '_fetchInitialPlaces', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchInitialPlacesIfNeeded,
                  r = e.taggedLocation
                n()
                  .then(function () {
                    var e = a.props.autotaggedLocation
                    r || a.setState({ selectedLocation: e })
                  })
                  .catch(t())
              }),
              v()(d()(a), '_getActiveResults', function () {
                var e = a.props,
                  t = e.initialResults,
                  n = e.lastSearchResults
                return a.state.activeResultSet === Y.c.initial ? t : n
              }),
              v()(d()(a), '_selectResults', function () {
                var e,
                  t = a.state,
                  n = t.query,
                  i = t.selectedLocation,
                  o = (null === (e = a._getActiveResults()) || void 0 === e ? void 0 : e.places) || []
                return (
                  i &&
                    (o = [i].concat(
                      r()(
                        o.filter(function (e) {
                          return e.place.id !== i.place.id
                        }),
                      ),
                    )),
                  o.filter(function (e) {
                    return e.place.full_name.toLowerCase().includes(n.toLowerCase())
                  })
                )
              }),
              v()(d()(a), '_goBack', function () {
                var e
                null === (e = a._appBarRef.current) || void 0 === e || e.goBack()
              }),
              v()(d()(a), '_setTaggedLocation', function (e) {
                var t = a.props,
                  n = t.updateLastSelectedPlace,
                  r = t.updateSettings
                ;(0, t.updateSingleComposer)({ updates: { taggedLocation: e } }),
                  n(e),
                  r({ shouldAutoTagLocation: !!e })
              }),
              v()(d()(a), '_handleBack', function () {
                return a._goBack()
              }),
              v()(d()(a), '_handleDone', function () {
                var e = a.state.selectedLocation
                e && a._setTaggedLocation(e), a._goBack()
              }),
              v()(d()(a), '_handleRemove', function () {
                a._setTaggedLocation(null), a._goBack()
              }),
              v()(d()(a), '_handleRetry', function () {
                var e = a.props.searchPlaces,
                  t = a.state,
                  n = t.activeResultSet,
                  r = t.query
                n === Y.c.initial ? a._fetchInitialPlaces() : e(r)
              }),
              v()(d()(a), '_handleLocationDisabledPromptDismiss', function () {
                a.props.history.goBack()
              }),
              v()(d()(a), '_handleChange', function (e) {
                var t = e.currentTarget.value,
                  n = t.length ? a.state.activeResultSet : Y.c.initial
                a.setState({ activeResultSet: n, query: t, showSearchForButton: !!t.length })
              }),
              v()(d()(a), '_handleClear', function () {
                a.setState({ activeResultSet: Y.c.initial, query: '' })
              }),
              v()(d()(a), '_handleSubmit', function () {
                var e = a.state.query,
                  t = a.props.searchPlaces
                e.length && (a.setState({ activeResultSet: Y.c.lastSearch, showSearchForButton: !1 }), t(e))
              }),
              v()(d()(a), '_handlePlaceClick', function (e) {
                return function () {
                  a._setTaggedLocation(e), a._goBack()
                }
              }),
              v()(d()(a), '_renderPlaceSubtext', function (e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  s,
                  l = a.props,
                  c = l.position,
                  d = l.userCountry,
                  u = e.place,
                  p = u.attributes.street_address,
                  m = u.centroid
                if (p && m && 2 === m.length && c) {
                  var h =
                    ((t = { lat: c.coords.latitude, long: c.coords.longitude }),
                    (n = { lat: m[1], long: m[0] }),
                    (r = t.lat * (Math.PI / 180)),
                    (i = n.lat * (Math.PI / 180)),
                    (o = i - r),
                    (s = (n.long - t.long) * (Math.PI / 180)),
                    7917.6 *
                      Math.asin(
                        Math.sqrt(
                          Math.sin(o / 2) * Math.sin(o / 2) +
                            Math.cos(r) * Math.cos(i) * Math.sin(s / 2) * Math.sin(s / 2),
                        ),
                      ))
                  return y.a.createElement(
                    A.a,
                    null,
                    y.a.createElement(O.b, null, p),
                    y.a.createElement(
                      O.b,
                      null,
                      (function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'us'
                        if (
                          G.find(function (e) {
                            return e === t.toLowerCase()
                          })
                        )
                          return z.format(e)
                        var n = e * W
                        return H.format(n)
                      })(h, d),
                    ),
                  )
                }
              }),
              v()(d()(a), '_renderPlace', function (e) {
                var t = a.state.selectedLocation
                return y.a.createElement(F.a, {
                  actionSubText: a._renderPlaceSubtext(e),
                  actionText: e.place.full_name,
                  isSelected: e.place.id === (null == t ? void 0 : t.place.id),
                  key: e.place.id,
                  onClick: a._handlePlaceClick(e),
                  selectable: !0,
                })
              }),
              v()(d()(a), '_renderPlaces', function (e) {
                return e.length
                  ? e.map(function (e) {
                      return a._renderPlace(e)
                    })
                  : y.a.createElement(O.b, { align: 'center', style: ce.noPlacesText }, te)
              }),
              v()(d()(a), '_renderAttributionIfNeeded', function () {
                var e = a._getActiveResults()
                return null != e && e.attributions.has(Y.b.foursquare)
                  ? y.a.createElement(K.a, { style: ce.foursquareIcon })
                  : null
              }),
              v()(d()(a), '_renderResults', function () {
                var e = a.state,
                  t = e.query,
                  n = e.showSearchForButton,
                  r = a._selectResults()
                return y.a.createElement(
                  D.a,
                  null,
                  a._renderPlaces(r),
                  n
                    ? y.a.createElement(F.a, {
                        actionText: se({ query: t }),
                        onClick: a._handleSubmit,
                        textColor: 'primary',
                      })
                    : null,
                  a._renderAttributionIfNeeded(),
                )
              }),
              v()(d()(a), '_renderRightControl', function () {
                return y.a.createElement(
                  D.a,
                  { style: ce.actionButtonContainer },
                  y.a.createElement(
                    B.a,
                    { onPress: a._handleRemove, size: 'small', style: ce.actionButton, type: 'primaryText' },
                    ae,
                  ),
                  y.a.createElement(
                    B.a,
                    { onPress: a._handleDone, size: 'small', style: ce.actionButton, type: 'primaryFilled' },
                    Q,
                  ),
                )
              }),
              v()(d()(a), '_renderGeoPicker', function () {
                var e = a.props,
                  t = e.history,
                  n = e.initialFetchStatus,
                  r = e.lastSearchFetchStatus,
                  i = a.state.activeResultSet === Y.c.initial ? n : r
                return y.a.createElement(
                  M.b,
                  {
                    appBarRef: a._appBarRef,
                    history: t,
                    onBackClick: a._handleBack,
                    rightControl: a._renderRightControl(),
                    title: oe,
                  },
                  y.a.createElement(V.a, {
                    Icon: q.a,
                    onChange: a._handleChange,
                    onClear: a._handleClear,
                    onSubmitEditing: a._handleSubmit,
                    placeholder: re,
                    style: ce.search,
                    withClearButton: !0,
                  }),
                  y.a.createElement(R.a, {
                    fetchStatus: i === I.a.NONE ? I.a.LOADING : i,
                    onRequestRetry: a._handleRetry,
                    render: a._renderResults,
                    retryMessage: ie,
                  }),
                )
              }),
              v()(d()(a), '_renderLocationDisabledPrompt', function () {
                var e = a.state.geoLocationError,
                  t = $,
                  n = ee
                return (
                  e && e.code === k.a.PERMISSION_DENIED && ((t = J), (n = Z)),
                  y.a.createElement(N.a, {
                    actionLabel: ne,
                    graphic: X.a,
                    headline: t,
                    onAction: a._handleLocationDisabledPromptDismiss,
                    onClose: a._handleLocationDisabledPromptDismiss,
                    subtext: n,
                  })
                )
              })
            var i = e.autotaggedLocation,
              s = e.initialResults,
              l = e.taggedLocation
            return l ? (a.state.selectedLocation = l) : s && (a.state.selectedLocation = i), a
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  return (0, this.props.loadGeoLocation)().then(this._fetchInitialPlaces, function (t) {
                    return e.setState({ geoLocationError: t })
                  })
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.state.geoLocationError ? this._renderLocationDisabledPrompt() : this._renderGeoPicker()
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        ce = j.a.create(function (e) {
          return {
            search: { marginHorizontal: e.spaces.space16, flexGrow: 0 },
            actionButtonContainer: { flexDirection: 'row' },
            actionButton: { marginLeft: e.spaces.space12 },
            noPlacesText: { marginVertical: e.spaces.space16 },
            foursquareIcon: { marginVertical: e.spaces.space16, fill: e.colors.gray700 },
          }
        }),
        de = S(le)
      t.default = de
    },
    w3n3: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('/yvb'),
        o = n('3XMw'),
        s = n.n(o),
        l = n('3rWK'),
        c = n('Irs7'),
        d = s.a.a4993fa1,
        u = r.a.createElement(l.a, null),
        p = s.a.i0db46e6,
        m = { viewType: 'gif_search' }
      t.a = function (e) {
        var t = e.dmConversationId,
          n = e.enabled,
          a = void 0 === n || n,
          o = e.gifSearchKeySource,
          s = e.history,
          l = e.onPress,
          h = e.style,
          f = e.testID,
          v = Object(c.b)(),
          g = r.a.useCallback(
            function () {
              l && l(),
                v.scribe({ element: 'found_media_button', action: 'click' }),
                s.push({ pathname: '/i/foundmedia/search', state: { gifSearchKeySource: o, dmConversationId: t } })
            },
            [t, v, o, s, l],
          )
        return r.a.createElement(i.a, {
          accessibilityLabel: d,
          behavioralEventContext: m,
          disabled: !a,
          hoverLabel: { label: p },
          icon: u,
          onPress: g,
          size: 'medium',
          style: h,
          testID: f,
          type: 'brandText',
        })
      }
    },
    wpu3: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      }),
        n.d(t, 'b', function () {
          return v
        }),
        n.d(t, 'c', function () {
          return g
        }),
        n.d(t, 'd', function () {
          return y
        })
      var a = n('RhWx'),
        r = n.n(a),
        i = n('KEM+'),
        o = n.n(i),
        s =
          (n('jwue'),
          n('7x/C'),
          n('+oxZ'),
          n('ho0z'),
          n('jQ3i'),
          n('x4t0'),
          n('LW0h'),
          n('2G9S'),
          n('kFen'),
          n('qd3W'),
          n('z84I'),
          n('5BYb'),
          n('DfhM'),
          n('KqXw'),
          n('Ysgh'),
          n('hBpG'),
          n('oEoC')),
        l = n('1auM'),
        c = n('kIAd'),
        d = n('VAyw'),
        u = n('/Ikv'),
        p = n('s1N3'),
        m = n('lnti'),
        h = function (e) {
          var t,
            n = e.excludeReplyUser,
            a = e.inReplyToStatus,
            i = e.loggedInUserId,
            s = a.retweeted_status,
            l = s || a,
            c = l.entities,
            u = l.unmentioned_user_ids,
            h = l.user,
            v = s ? s.user : {},
            g = s ? a.user : {},
            y = (null == c ? void 0 : c.user_mentions) || [],
            b = d.a.mergeTaggedUsers((null == c ? void 0 : c.media) || []),
            _ = f(s || a) || {},
            C = ((t = {}), o()(t, v.id_str, v), o()(t, g.id_str, g), o()(t, h.id_str, h), o()(t, _.id_str, _), t)
          y.forEach(function (e) {
            C[e.id_str] = e
          }),
            b.forEach(function (e) {
              var t = e.name,
                n = e.screen_name,
                a = e.user_id
              C[a] = { id_str: a, name: t, screen_name: n }
            })
          var w = function (e) {
              var t = null == u ? void 0 : u.includes(e.id_str),
                n = e.id_str === h.id_str
              return !t || n ? [e.id_str] : []
            },
            E = Object(p.a)(
              Object(m.a)(
                [].concat(
                  r()(w(v)),
                  r()(w(g)),
                  [h.id_str],
                  r()(
                    y.flatMap(function (e) {
                      return w(e)
                    }),
                  ),
                  r()(
                    b.map(function (e) {
                      return e.user_id
                    }),
                  ),
                ),
              ),
            ).filter(function (e) {
              return e !== i
            }),
            x = i && h.id_str === i ? [i].concat(r()(E)) : E
          return (
            n &&
              (x = x.filter(function (e) {
                return e !== h.id_str
              })),
            x.map(function (e) {
              return C[e]
            })
          )
        },
        f = function (e) {
          var t = e.card,
            n = null
          if (t) {
            var a = u.a.getBindingValue(t.binding_values, 'site')
            a && t.users && (n = t.users[a.id_str])
          }
          return n
        },
        v = function (e) {
          var t = e.maxNumberOfPhotos
          return function (e) {
            if (0 === e.length) return !0
            var n = e.some(function (e) {
                return !!e.externalMediaDetails
              }),
              a =
                !n &&
                e.some(function (e) {
                  return e.mediaFile && e.mediaFile.isGif
                }),
              r = e.some(function (e) {
                return e.mediaFile && !(e.mediaFile instanceof l.a) && e.mediaFile.isVideo
              })
            if (a || n || r) return 1 === e.length
            var i = e.length <= t,
              o = e.every(function (e) {
                return e.mediaFile && e.mediaFile.isImage
              })
            return i && o
          }
        },
        g = v({ maxNumberOfPhotos: 4 }),
        y = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.split(c.b.WordBoundary)
          return (
            t && n.pop(),
            !!n.find(function (e) {
              var t = Object(s.e)(e, 'compose')
              return t && 'users' === t.result_type
            })
          )
        }
    },
    yTN1: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('WOwf'),
        o = n('3XMw'),
        s = n.n(o),
        l = n('k6Ei'),
        c = n('rHpw'),
        d = n('+/1j'),
        u = n('MWbm'),
        p = s.a.c2fc878c,
        m = s.a.db11b27f,
        h = function (e) {
          return e
        },
        f = c.a.create(function (e) {
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
          o = void 0 === a ? h : a,
          s = e.warningCount,
          v = n - t,
          g = v >= 0 ? m({ count: o(v) }) : p({ count: o(t - n) }),
          y =
            t >= s
              ? r.a.createElement(
                  d.a,
                  { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite', style: c.a.visuallyHidden },
                  g,
                )
              : null,
          b = Object(i.a)(v, n),
          _ = t >= n ? 'red500' : t >= s ? 'yellow500' : 'primary',
          C = r.a.createElement(l.a, {
            color: _,
            progress: b,
            size: t >= s ? 30 : 20,
            style: [f.progressCircle, v <= -10 && f.hide],
          }),
          w = t >= s ? r.a.createElement(d.a, { style: [f.text, v > 0 ? f.gray700 : f.red500] }, o(v)) : null
        return r.a.createElement(
          u.a,
          { style: [f.root, f.center] },
          y,
          C,
          r.a.createElement(u.a, { style: [c.a.absoluteFill, f.center] }, w),
        )
      }
    },
    yZqq: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('ddV6'),
        l = n.n(s),
        c = n('ERkP'),
        d = n.n(c),
        u = (n('5BYb'), n('7x/C'), n('uFXj'), n('H7Rt')),
        p = n('3XMw'),
        m = n.n(p),
        h = n('MWbm'),
        f = n('t62R'),
        v = n('CKsB'),
        g = n('/yvb'),
        y = n('rHpw'),
        b = n('Zg3A'),
        _ = n('yiKp'),
        C = n.n(_),
        w = n('Lsrn'),
        E = n('k/Ka'),
        x = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [w.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            d.a.createElement(
              'g',
              null,
              d.a.createElement('path', {
                d: 'M10.43 12.24c-1.37 0-2.89-.15-3.87-1.26-.82-.95-1.09-2.39-.81-4.43C6.13 3.7 7.88 2 10.43 2s4.3 1.7 4.68 4.55c.27 2.04.01 3.49-.81 4.42-.98 1.12-2.51 1.27-3.87 1.27zm0-8.73c-2.39 0-3.03 2.03-3.19 3.24-.21 1.56-.06 2.65.45 3.23.46.53 1.28.75 2.73.75 1.46 0 2.28-.22 2.74-.75.51-.58.66-1.67.45-3.23-.16-1.21-.79-3.24-3.18-3.24zm2.01 18.99H4.22c-.7 0-1.33-.3-1.75-.83-.43-.54-.57-1.26-.4-1.95.88-3.55 4.31-6.03 8.34-6.03.42 0 .75.34.75.75 0 .42-.34.75-.75.75-3.34 0-6.17 2.01-6.88 4.89-.06.25-.02.49.12.66.13.16.32.25.56.25h8.22c.42 0 .75.34.75.75.01.42-.32.76-.74.76zm9.15-10.87l-4.2 8.46c-.01.03-.02.05-.04.07-.02.06-.06.11-.1.15-.05.05-.1.09-.15.13h-.01c-.06.04-.12.06-.19.08-.07.02-.13.03-.2.03-.05 0-.11 0-.17-.02-.06-.01-.11-.03-.16-.06-.06-.03-.12-.07-.18-.12-.01-.01-.03-.02-.04-.03l-3.08-3.27c-.28-.3-.27-.78.04-1.06.3-.29.77-.27 1.06.03l2.34 2.48 3.74-7.53c.18-.37.63-.52 1-.34.37.17.52.63.34 1z',
              }),
              d.a.createElement('path', {
                d: 'M17.1 20.44c.05-.04.1-.08.15-.13 0 .01-.02.03-.03.04-.04.04-.08.06-.12.09z',
              }),
            ),
          )
        }
      x.metadata = { width: 24, height: 24 }
      var T = x,
        S = n('boUI'),
        I = n('EweD'),
        R = m.a.g6185a9e,
        M = m.a.g2d04222,
        k = m.a.baffe39a,
        P = m.a.af293dc2,
        L = m.a.h1053f7e,
        D = m.a.bf994ab2,
        A = m.a.cf7f7e39,
        O = m.a.cfd2f35d,
        F = y.a.create(function (e) {
          return {
            root: {
              flexDirection: 'column',
              paddingTop: e.spaces.space16,
              paddingBottom: e.spaces.space4,
              borderRadius: e.borderRadii.xLarge,
            },
            popover: { maxWidth: 5 * e.spacesPx.space64 },
            modal: { borderRadius: e.borderRadii.none },
            title: { flexDirection: 'column', paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 },
            menuRow: {
              flexDirection: 'row',
              paddingTop: e.spaces.space12,
              paddingBottom: e.spaces.space12,
              alignItems: 'center',
              borderRadius: e.borderRadii.small,
            },
            cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 },
          }
        }),
        B = function (e) {
          var t,
            n,
            a = e.dismiss,
            r = e.isModal,
            i = e.midConversationTweet,
            o = e.value,
            s = function (t) {
              return function () {
                e.onChange(t), e.dismiss()
              }
            },
            l = !!i,
            c =
              l &&
              !(
                null != i &&
                null !== (t = i.entities) &&
                void 0 !== t &&
                null !== (n = t.user_mentions) &&
                void 0 !== n &&
                n.some(function (e) {
                  return e.id_str !== i.user.id_str
                })
              ),
            p = L
          return (
            c ? (p = D) : l && (p = A),
            d.a.createElement(
              h.a,
              {
                accessibilityDescribedBy: 'conversation-controls-details',
                accessibilityLabelledBy: 'conversation-controls-title',
                accessibilityRole: 'dialog',
                style: [F.root, r ? F.modal : F.popover],
              },
              d.a.createElement(
                h.a,
                { style: F.title },
                d.a.createElement(f.b, { nativeID: 'conversation-controls-title', weight: 'bold' }, R),
                d.a.createElement(
                  f.b,
                  { color: 'gray700', nativeID: 'conversation-controls-details', size: 'body' },
                  M,
                ),
              ),
              d.a.createElement(
                h.a,
                null,
                d.a.createElement(v.a, {
                  Icon: b.a,
                  actionText: k,
                  isSelected: u.a.all === o,
                  onClick: s(u.a.all),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                d.a.createElement(v.a, {
                  Icon: T,
                  actionText: P,
                  isSelected: u.a.community === o,
                  onClick: s(u.a.community),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                d.a.createElement(v.a, {
                  Icon: c ? S.a : I.a,
                  actionText: p,
                  isSelected: u.a.by_invitation === o,
                  onClick: s(u.a.by_invitation),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                e.isModal
                  ? d.a.createElement(
                      g.a,
                      {
                        key: 'button_cancel',
                        onPress: a,
                        size: 'large',
                        style: F.cancelButton,
                        type: 'primaryOutlined',
                      },
                      O,
                    )
                  : null,
              ),
            )
          )
        },
        V = n('OiMc'),
        N = n('efqG'),
        j = ['children', 'controlled']
      t.a = function (e) {
        var t = e.children,
          n = e.controlled,
          a = void 0 !== n && n,
          i = e.disabled,
          s = d.a.useState(!1),
          c = l()(s, 2),
          u = c[0],
          p = c[1],
          m = d.a.useCallback(function () {
            return p(!0)
          }, []),
          h = d.a.useCallback(function () {
            return p(!1)
          }, []),
          f = a ? (u ? V.a.VISIBILITY_BEHAVIOR.forceVisible : V.a.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
          v = 'function' == typeof t ? t({ openPopover: m, closePopover: h }) : t
        return d.a.createElement(
          N.a,
          {
            disabled: i,
            onDismiss: h,
            renderContent: function (t, n) {
              e.children, e.controlled
              var a = o()(e, j)
              return d.a.createElement(B, r()({}, a, { dismiss: t, isModal: 'sheet' === n }))
            },
            visibilityBehavior: f,
          },
          v,
        )
      }
    },
    zmS9: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        s = n('J0mu'),
        l = n('t62R'),
        c = n('rHpw'),
        d = n('QbaN'),
        u = o.a.bfb895b1,
        p = c.a.create(function (e) {
          return { icon: { fontSize: e.fontSizes.body, paddingRight: e.spaces.space12, textAlignVertical: 'middle' } }
        })
      t.a = function (e) {
        var t = e.onPress,
          n = e.scheduledFor,
          a = e.testID,
          i = Object(d.c)(n),
          o = !!i && Object(d.h)(n) && !Object(d.g)(i) && !Object(d.f)(i),
          c = Boolean(t)
        return i && o
          ? r.a.createElement(
              l.b,
              { color: 'gray700', onPress: t, size: 'subtext2', testID: a, withInteractiveStyling: c },
              r.a.createElement(s.a, { style: p.icon }),
              u({ date: Object(d.b)(i), time: Object(d.i)(i) }),
            )
          : null
      }
    },
  },
])
//# sourceMappingURL=WIPED
