;(window.webpackJsonp = window.webpackJsonp || []).push([
  [45, 6, 7, 9, 10, 19],
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
        l = n('5Yy7'),
        s = n.n(l),
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
          s()(n, e)
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
        l = n('VrFO'),
        s = n.n(l),
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
        w = n('/yvb'),
        C = n('k/Ka'),
        E = n('3XMw'),
        T = n.n(E),
        x = n('rHpw'),
        S = ['accept', 'disabled', 'multiple', 'onChange', 'testID'],
        I = T.a.i5450beb,
        k = T.a.f7432494,
        R = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n() {
            var e
            s()(this, n)
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
                    l = o()(e, S),
                    s = !((null != t && t.includes('video')) || (null != t && t.includes('gif')))
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    _.a.createElement(
                      w.a,
                      r()({ hoverLabel: t ? { label: s ? k : I } : void 0 }, l, {
                        disabled: n,
                        onPress: this._handlePress,
                      }),
                    ),
                    Object(C.a)('input', {
                      accept: t,
                      disabled: n,
                      multiple: a,
                      onChange: this._handleChange,
                      ref: this._handleFileInputButtonRef,
                      style: L.input,
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
      y()(R, 'defaultProps', { disabled: !1, multiple: !1 })
      var L = x.a.create(function (e) {
        return {
          input: { width: '0.1px', height: '0.1px', opacity: 0, overflow: 'hidden', position: 'absolute', zIndex: -1 },
        }
      })
      t.a = R
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
          return w
        }),
        n.d(t, 'c', function () {
          return E
        }),
        n.d(t, 'b', function () {
          return T
        }),
        n.d(t, 'a', function () {
          return x
        }),
        n.d(t, 'i', function () {
          return I
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        l = (n('yH/f'), n('KqXw'), n('LJOr'), n('7x/C'), n('JtPf'), n('oEOe')),
        s = n('kGix'),
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
          initial: { fetchStatus: s.a.NONE },
          lastSearch: { fetchStatus: s.a.NONE },
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
        w = function (e) {
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
        C = function (e, t) {
          return function (n, a, r) {
            var i = r.api
            return Object(l.b)(n, { request: i.Places.search, params: e })({
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
              C(
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
        T = function () {
          return function (e, t, n) {
            n.api
            var a = y(t()),
              r = g(t())
            if (a === s.a.LOADING || r) return Promise.resolve()
            var i = Object(p.d)(t())
            return i
              ? e(
                  C(
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
        x = function () {
          return function (e, t, n) {
            n.api
            return Object(u.l)(t()) && Object(p.c)(t()) === c.b.granted
              ? e(Object(p.b)())
                  .then(function () {
                    return e(T())
                  })
                  .then(function () {
                    return w(t())
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
              return o()(o()({}, e), {}, r()({}, n, { fetchStatus: s.a.LOADING }))
            case f.FAILURE:
              var a = t.meta.resultSet
              return o()(o()({}, e), {}, r()({}, a, { fetchStatus: s.a.FAILED }))
            case f.SUCCESS:
              var i = t.meta.resultSet,
                l = t.payload
              return o()(o()({}, e), {}, r()({}, i, { fetchStatus: s.a.LOADED, results: l }))
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
        return Ce
      })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('RhWx'),
        o = n.n(i),
        l = n('VrFO'),
        s = n.n(l),
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
        w = (n('TJCb'), n('DZ+c'), n('xZGM')),
        C = n('GTeL'),
        E = n('3XMw'),
        T = n.n(E),
        x = n('rHpw'),
        S = x.a.create(function (e) {
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
        k = 'endEditingButton',
        R = 'altTextEducationSheetPrimaryAction',
        L = n('MWbm'),
        P = n('t62R'),
        M = n('p+r5'),
        A = T.a.feabf2a0,
        D = T.a.e36287c6,
        O = T.a.cf565d08,
        F = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n() {
            var e
            s()(this, n)
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
                    L.a,
                    { style: S.root },
                    _.a.createElement(
                      L.a,
                      { style: S.attachmentContainer },
                      _.a.createElement(C.a, { mediaItem: a, orientedImage: r }),
                      _.a.createElement(M.a, {
                        accessibilityLabel: A,
                        autoFocus: t,
                        helperText: this._renderInputHelperText(),
                        label: D,
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
        U = function (e, t) {
          return Object(w.D)(e, w.a)
        },
        N = Object(B.a)()
          .propsFromState(function () {
            return { showEducationOnMount: U }
          })
          .propsFromActions(function () {
            return { addFlag: w.z }
          })
          .withAnalytics(),
        j = n('feu+'),
        H = T.a.ffe9ec3a,
        V = T.a.j063b261,
        z = T.a.e57144f0,
        W = T.a.f9f9210c,
        G = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n() {
            var e
            s()(this, n)
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
                    t(w.a))
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
                    L.a,
                    { style: q.root },
                    i
                      ? _.a.createElement(j.a, {
                          actionLabel: z,
                          headline: H,
                          onAction: this._handleEducationPromptPrimaryAction,
                          onClose: this._handleCloseEducationPrompt,
                          onSecondaryAction: this._handleEducationPromptSecondaryAction,
                          primaryButtonTestID: R,
                          secondaryActionLabel: W,
                          subtext: V,
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
        q = x.a.create(function (e) {
          return { root: { flexGrow: 1 } }
        }),
        K = N(G),
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
        le = n('7Mjr'),
        se = n('Mbn/'),
        ce = n('zIWA'),
        de = n('1auM'),
        ue = n('eYns'),
        pe = { section: 'alt_text' },
        me = { section: 'crop' },
        he = { section: 'sensitive_media' },
        fe = T.a.e070024a,
        ve = T.a.i2209530,
        ge = T.a.i7d24b36,
        ye = T.a.f96a38a2,
        be = T.a.hac7c548,
        _e = T.a.e3dbfba3,
        we = T.a.dd4a83a5,
        Ce = { crop: 'crop', altText: 'alt_text', sensitiveMedia: 'sensitive_media' },
        Ee = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            s()(this, n),
              (a = t.call(this, e)),
              y()(p()(a), '_cropper', _.a.createRef()),
              y()(
                p()(a),
                '_getMemoizedTabMetadata',
                Object(te.a)(function (e, t) {
                  return t && e === Ce.sensitiveMedia
                    ? { namespace: he, title: we, renderer: a._renderSensitiveMediaTab }
                    : e === Ce.altText
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
                  l = !(null !== (t = r.state) && void 0 !== t && t.hideTabs),
                  s = l ? a._getTabLinks(e) : [],
                  c = o.renderer()
                return l && s.length > 1
                  ? _.a.createElement(
                      _.a.Fragment,
                      null,
                      _.a.createElement($.a, { accessibilityLabel: fe, links: s }),
                      _.a.createElement(L.a, { style: Z.a.segmentedControlChildren }, c),
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
                  l = r[n] && r[n].altText
                return _.a.createElement(K, {
                  history: e,
                  key: n,
                  mediaItem: o,
                  onAltTextChange: a._handleAltTextChange,
                  orientedImage: i.get(n),
                  value: l,
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
                  L.a,
                  { style: Z.a.rightControl },
                  a._hasMediaAtIndex(n) || a._hasMediaAtIndex(t)
                    ? _.a.createElement(
                        L.a,
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
                          icon: _.a.createElement(le.a, null),
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
                      testID: k,
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
                    l = r.processMedia,
                    s = r.updateMediaUpload,
                    c = a.state.currentMediaId
                  a.setState({ isProcessing: !0 })
                  var d = t ? re([].concat(o()(n), [[c, t.getCropData()]])) : n,
                    u = i.map(function (e) {
                      return d.get(e.id) ? (s({ id: e.id, cropData: d.get(e.id) }), l(e.id)) : Promise.resolve()
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
                  l = a._getMemoizedTabMetadata(o, i)
                n.scribe(r()(r()({}, l.namespace), e))
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
              l = e.media,
              c = a._getMediaMetadata(l)
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
                  return a && r === Ce.sensitiveMedia ? Ce.sensitiveMedia : r === Ce.altText ? Ce.altText : Ce.crop
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
                    l = a.sensitiveMediaTabEnabled,
                    s = this._getCurrentMediaItem(),
                    c = []
                  return (
                    null != s &&
                      null !== (t = s.originalMediaFile) &&
                      void 0 !== t &&
                      t.isImage &&
                      c.push({
                        to: r()(r()({}, o), {}, { state: r()(r()({}, o.state), {}, { tab: Ce.crop }) }),
                        label: _.a.createElement(se.a, null),
                        key: Ce.crop,
                        accessibilityLabel: be,
                        isActive: function () {
                          return e === Ce.crop
                        },
                        onClick: function () {
                          return i.scribePageImpression()
                        },
                      }),
                    c.push({
                      to: r()(r()({}, o), {}, { state: r()(r()({}, o.state), {}, { tab: Ce.altText }) }),
                      label: _.a.createElement(P.b, { weight: 'bold' }, 'ALT'),
                      key: Ce.altText,
                      accessibilityLabel: _e,
                      isActive: function () {
                        return e === Ce.altText
                      },
                      onClick: function () {
                        return n._handleClickTab('alt_text_button')
                      },
                    }),
                    l &&
                      c.push({
                        to: r()(r()({}, o), {}, { state: r()(r()({}, o.state), {}, { tab: Ce.sensitiveMedia }) }),
                        label: _.a.createElement(ce.a, null),
                        key: Ce.sensitiveMedia,
                        accessibilityLabel: we,
                        isActive: function () {
                          return e === Ce.sensitiveMedia
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
        l = n('1Pcy'),
        s = n.n(l),
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
        w = n('rHpw'),
        C = n('MWbm'),
        E = w.a.create(function (e) {
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
        T = function (e) {
          var t = e.circle,
            n = e.height,
            a = e.width
          return v.a.createElement(C.a, {
            pointerEvents: 'none',
            style: [E.mask, { width: a, height: n }, t && E.circle],
          })
        },
        x = n('ZvMt'),
        S = n('97Jx'),
        I = n.n(S),
        k = n('m3Bd'),
        R = n.n(k),
        L = n('CHgo'),
        P = n('7ep7'),
        M = ['children', 'onPanEnd', 'onPanMove', 'onPinchMove', 'onWheel'],
        A = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              h()(s()(a), '_previousTouchDistance', 0),
              h()(s()(a), '_previousPositionX', 0),
              h()(s()(a), '_previousPositionY', 0),
              h()(s()(a), '_centerPosition', { x: 0, y: 0 }),
              h()(s()(a), '_panResponder', {}),
              h()(s()(a), '_setRef', function (e) {
                var t = a.props,
                  n = t.onPanEnd,
                  r = t.onPanMove,
                  i = t.onPinchMove,
                  o = t.onWheel
                if (e) {
                  ;(r || n || i) && (a._removeTouchMoveToScrollListener = Object(L.a)(e, a._preventDefaultEvent, !1)),
                    o && (a._removeScrollToScaleListener = Object(L.b)(e, a._preventDefaultEvent, !1))
                  var l = e.getBoundingClientRect()
                  a._centerPosition = { x: l.width / 2 + l.left, y: l.height / 2 + l.top }
                }
              }),
              h()(s()(a), '_preventDefaultEvent', function (e) {
                e.preventDefault()
              }),
              h()(s()(a), '_handlePanResponderMove', function (e, t) {
                var n,
                  r,
                  i = a.props,
                  o = i.onPanMove,
                  l = i.onPinchMove,
                  s = e.nativeEvent.touches
                if (2 === t.numberActiveTouches) {
                  if (l) {
                    var c =
                        ((n = s[0]),
                        (r = s[1]),
                        Math.sqrt(Math.pow(n.pageY - r.pageY, 2) + Math.pow(n.pageX - r.pageX, 2))),
                      d = (function (e, t) {
                        return {
                          pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2,
                          pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2,
                        }
                      })(s[0], s[1]),
                      u = d.pageX,
                      p = d.pageY,
                      m = a._previousPositionX ? u - a._previousPositionX : 0,
                      h = a._previousPositionY ? p - a._previousPositionY : 0,
                      f = a._previousTouchDistance ? c - a._previousTouchDistance : 0
                    ;(a._previousPositionX = u), (a._previousPositionY = p), (a._previousTouchDistance = c)
                    var v = a._centerPosition
                    l(f, v.x - u, v.y - p, m, h)
                  }
                } else o && o(t.dx, t.dy)
                document.addEventListener('selectstart', a._preventDefaultEvent, !1)
              }),
              h()(s()(a), '_handlePanResponderEnd', function (e, t) {
                a.props.onPanEnd && a.props.onPanEnd(t.dx, t.dy),
                  a.props.onPinchMove && (a._previousTouchDistance = 0),
                  (a._previousPositionX = 0),
                  (a._previousPositionY = 0),
                  a._removeSelectStartListener()
              }),
              h()(s()(a), '_handleWheel', function (e) {
                var t = e.clientX,
                  n = e.clientY,
                  r = e.deltaX,
                  i = e.deltaY,
                  o = a._centerPosition,
                  l = o.x - t,
                  s = o.y - n
                a.props.onWheel && a.props.onWheel(r, i, l, s)
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
                    t = (e.children, e.onPanEnd, e.onPanMove, e.onPinchMove, e.onWheel, R()(e, M))
                  return v.a.createElement(
                    C.a,
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
        D = n('9RkS'),
        O = n('rOXj'),
        F = n('aITJ'),
        B = n('yiKp'),
        U = n.n(B),
        N = n('Lsrn'),
        j = n('k/Ka'),
        H = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(j.a)(
            'svg',
            U()(
              U()({}, e),
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
      H.metadata = { width: 24, height: 24 }
      var V = H,
        z = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(j.a)(
            'svg',
            U()(
              U()({}, e),
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
      z.metadata = { width: 24, height: 24 }
      var W = z,
        G = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(j.a)(
            'svg',
            U()(
              U()({}, e),
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
      var q = G,
        K = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(j.a)(
            'svg',
            U()(
              U()({}, e),
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
      K.metadata = { width: 24, height: 24 }
      var X = K,
        Y = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(j.a)(
            'svg',
            U()(
              U()({}, e),
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
              h()(s()(a), '_previousLeft', 0),
              h()(s()(a), '_previousTop', 0),
              h()(s()(a), '_panStyles', { top: 0, left: 0 }),
              h()(s()(a), '_shouldShowZoomControl', function () {
                return (!F.b.isMobileOS() || !O.a.isTouchSupported()) && a.props.withZoomControl
              }),
              h()(s()(a), '_renderControls', function () {
                var e = a.props,
                  t = e.image,
                  n = e.withAspectRatioOptions,
                  r = a.state.aspectRatio,
                  i = t.width / t.height,
                  o = a._shouldShowZoomControl()
                return n || o
                  ? v.a.createElement(
                      C.a,
                      { style: oe.controlsContainer },
                      n
                        ? v.a.createElement(
                            C.a,
                            { style: oe.ratioContainer },
                            v.a.createElement(g.a, {
                              accessibilityLabel: Z,
                              borderColor: 'transparent',
                              color: r === i ? 'primary' : 'gray700',
                              hoverLabel: { label: te },
                              icon: v.a.createElement(V, null),
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
                              icon: v.a.createElement(q, null),
                              onPress: a._setAspectRatio(1),
                              size: 'medium',
                            }),
                          )
                        : null,
                      o
                        ? v.a.createElement(
                            C.a,
                            { style: oe.zoomContainer },
                            v.a.createElement(D.a, {
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
              h()(s()(a), '_setImageRef', function (e) {
                a._imageRef = e
              }),
              h()(s()(a), '_handleScaleChange', function (e) {
                a.setState({ imageScale: e })
              }),
              h()(s()(a), '_getImageDimensions', function () {
                var e = a.state.imageScale,
                  t = a.props.image.width / a.props.image.height,
                  n = a._getMaskDimensions(),
                  r = n.height,
                  i = n.width,
                  o = x.a.getCoverDimensions({ width: i, height: r }, t),
                  l = o.height
                return { width: o.width * Math.pow(2, e), height: l * Math.pow(2, e) }
              }),
              h()(s()(a), '_getMaskDimensions', function () {
                var e = a.state,
                  t = e.aspectRatio,
                  n = e.containerHeight,
                  r = e.containerWidth,
                  i = x.a.getContainDimensions({ width: r - 50, height: n - 50 }, t),
                  o = i.height
                return { width: i.width, height: o }
              }),
              h()(s()(a), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout,
                  n = t.height,
                  r = t.width
                a.state.containerHeight || a.state.containerWidth
                  ? a.setState({ containerHeight: n, containerWidth: r })
                  : (a.setState({ containerHeight: n, containerWidth: r }), a._setDefaultCropData())
              }),
              h()(s()(a), '_setDefaultCropData', function () {
                var e = a.props,
                  t = e.defaultCropData,
                  n = e.image
                if (t) {
                  var r = a._getImageDimensions().width,
                    i = a._getMaskDimensions().width,
                    o = r / n.width,
                    l = re(i / (t.width * o))
                  a.setState({ imageScale: l })
                  var s = a._getUnscaledCropData(),
                    c = s.left,
                    d = s.top
                  ;(a._panStyles.top = d - t.top * o * Math.pow(2, l)),
                    (a._previousTop = a._panStyles.top),
                    (a._panStyles.left = c - t.left * o * Math.pow(2, l)),
                    (a._previousLeft = a._panStyles.left),
                    a._updateNativeStyles()
                }
              }),
              h()(s()(a), '_handleWheel', function (e, t, n, r) {
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
              h()(s()(a), '_handlePanMove', function (e, t) {
                ;(a._panStyles.left = a._previousLeft + e),
                  (a._panStyles.top = a._previousTop + t),
                  a._updateNativeStyles(),
                  a._adjustToInBounds()
              }),
              h()(s()(a), '_handlePanEnd', function (e, t) {
                ;(a._previousLeft = a._panStyles.left), (a._previousTop = a._panStyles.top)
              }),
              h()(s()(a), '_handlePinchMove', function (e, t, n, r, i) {
                var o = e / 200
                a.setState(function (e) {
                  var l = e.imageScale,
                    s = Math.min(a._maxScale, Math.max(l + o, 0))
                  return (
                    (a._panStyles.left += t * (s - l) + r),
                    (a._panStyles.top += n * (s - l) + i),
                    (a._previousLeft = a._panStyles.left),
                    (a._previousTop = a._panStyles.top),
                    { imageScale: s }
                  )
                })
              }),
              h()(s()(a), '_adjustToInBounds', function () {
                var e = a._getUnscaledCropData(),
                  t = a._getImageDimensions(),
                  n = e.left,
                  r = e.top,
                  i = e.left + e.width - t.width,
                  o = e.top + e.height - t.height,
                  l = !1
                n < 0 && ((l = !0), (a._panStyles.left += n), (a._previousLeft += n)),
                  r < 0 && ((l = !0), (a._panStyles.top += r), (a._previousTop += r)),
                  i > 0 && ((l = !0), (a._panStyles.left += i), (a._previousLeft += i)),
                  o > 0 && ((l = !0), (a._panStyles.top += o), (a._previousTop += o)),
                  l && a._updateNativeStyles()
              }),
              h()(s()(a), '_updateNativeStyles', function () {
                var e = a._panStyles,
                  t = e.left,
                  n = e.top
                a._imageRef &&
                  a._imageRef.setNativeProps({
                    style: { transform: [{ translate3d: ''.concat(t, 'px, ').concat(n, 'px, 0') }] },
                  })
              }),
              h()(s()(a), '_getUnscaledCropData', function () {
                var e = a._getImageDimensions(),
                  t = e.height,
                  n = e.width,
                  r = a._getMaskDimensions(),
                  i = r.height,
                  o = r.width,
                  l = a._panStyles,
                  s = l.left
                return { top: (t - i) / 2 - l.top, left: (n - o) / 2 - s, width: o, height: i }
              }),
              h()(s()(a), '_setAspectRatio', function (e) {
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
                    l = this._getMaskDimensions(),
                    s = l.height,
                    c = l.width,
                    d = this.state.containerWidth && this.state.containerHeight
                  return v.a.createElement(
                    C.a,
                    { style: oe.container },
                    v.a.createElement(
                      A,
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
                            v.a.createElement(T, { circle: t, height: s, width: c }),
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
      var oe = w.a.create(function (e) {
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
    '2qZs': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M2.264 22.983c-.322 0-.638-.126-.88-.368-.374-.374-.473-.926-.25-1.405L2.8 17.58c-1.017-1.7-1.55-3.62-1.55-5.58C1.25 6.072 6.072 1.25 12 1.25S22.75 6.072 22.75 12 17.928 22.75 12 22.75c-1.957 0-3.876-.533-5.55-1.54l-3.66 1.657c-.17.078-.35.116-.526.116zm4.158-3.286c.278 0 .558.077.807.23 1.434.864 3.085 1.323 4.77 1.323 5.1 0 9.25-4.15 9.25-9.25S17.1 2.75 12 2.75 2.75 6.9 2.75 12c0 1.688.458 3.338 1.326 4.774.266.44.298.977.086 1.434l-1.384 3.014 3.016-1.386c.2-.093.413-.14.628-.14z',
              }),
              o.a.createElement('path', {
                d: 'M12 18.25c-3.446 0-6.25-2.804-6.25-6.25S8.554 5.75 12 5.75s6.25 2.804 6.25 6.25-2.804 6.25-6.25 6.25zm0-11c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75 4.75-2.13 4.75-4.75S14.62 7.25 12 7.25z',
              }),
              o.a.createElement('path', {
                d: 'M14.5 12.75c-.414 0-.75-.336-.75-.75 0-.965-.785-1.75-1.75-1.75-.414 0-.75-.336-.75-.75s.336-.75.75-.75c1.792 0 3.25 1.458 3.25 3.25 0 .414-.336.75-.75.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
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
        l = n('SrIh'),
        s = o.a.a5d4fda0,
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return {
            customErrorHandler: function (n) {
              var i = n.context
              return (
                !n instanceof r.a && (n.message = 'Strato error occurred in '.concat(i.id, ': ').concat(i.action)),
                Object(l.a)(n, { extra: { context: i, isStrato: !0 } }),
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
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
        l = n('Y9Ll'),
        s = n.n(l),
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
        w = n('t62R'),
        C = n('piX5'),
        E = n('4r2z'),
        T = n('FG+G'),
        x = n('rHpw'),
        S = n('k/Ka'),
        I = n('shC7'),
        k = n('MWbm'),
        R = _.a.forwardRef(function (e, t) {
          return Object(S.a)('select', y()(y()({}, e), {}, { ref: t }))
        }),
        L = function (e) {
          return Object(S.a)('option', e)
        },
        P = 1,
        M = (function (e) {
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
                  l = i.value
                n && n(l, o - (r ? 1 : 0))
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
            s()(n, [
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
                    l = e.options,
                    s = e.style,
                    c = e.testID,
                    d = e.value,
                    u = e.withEmptyOption,
                    p = this.state.isFocused,
                    m = w.b.getLanguage(),
                    h =
                      'ja' === m
                        ? x.a.theme.fontFamilies.japan
                        : I.a.getConstants().isRTL || E.a.isLocaleRTL(m)
                        ? x.a.theme.fontFamilies.rtl
                        : x.a.theme.fontFamilies.normal,
                    f = void 0 === i ? !!a : i,
                    v = new Set()
                  a && v.add(this._errorID), t && v.add(t), o && v.add(this._helperID)
                  var g = v.size ? r()(v).join(' ') : void 0
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    _.a.createElement(
                      k.a,
                      {
                        style: [
                          C.a.border,
                          A.container,
                          n && C.a.disabled,
                          p && C.a.focusedBorderValid,
                          f && C.a.invalidBorderColor,
                          p && f && C.a.focusedBorderInvalid,
                          s,
                        ],
                      },
                      this._renderLabel(),
                      _.a.createElement(
                        R,
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
                          style: [A.select, { fontFamily: h }, n && C.a.disabled],
                          testID: c || '',
                          value: d,
                        },
                        u ? _.a.createElement(L, { disabled: !0, style: A.option, value: '' }) : null,
                        l.map(function (e) {
                          var t = e.disabled,
                            n = e.label,
                            a = e.value
                          return _.a.createElement(
                            L,
                            { disabled: t, key: ''.concat(n, '-').concat(a), style: A.option, value: a },
                            n,
                          )
                        }),
                      ),
                      _.a.createElement(T.a, {
                        style: [A.dropdownCaret, p && C.a.validColor, (i || a) && C.a.invalidColor],
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
                    w.b,
                    {
                      accessibilityRole: 'label',
                      color: n || t ? 'red500' : r ? 'primary' : 'gray700',
                      nativeID: this._labelID,
                      style: A.label,
                    },
                    a,
                  )
                },
              },
              {
                key: '_renderHelperText',
                value: function () {
                  return _.a.createElement(
                    k.a,
                    { accessibilityLiveRegion: 'polite' },
                    _.a.createElement(
                      w.b,
                      { color: 'gray700', nativeID: this._helperID, style: A.helperText },
                      this.props.helperText,
                    ),
                  )
                },
              },
              {
                key: '_renderErrorText',
                value: function () {
                  return _.a.createElement(
                    k.a,
                    { accessibilityLiveRegion: 'polite' },
                    _.a.createElement(
                      w.b,
                      { color: 'red500', nativeID: this._errorID, style: A.helperText },
                      this.props.errorText,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.PureComponent)
      v()(M, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (M.propTypes = {})
      var A = x.a.create(function (e) {
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
      t.a = M
    },
    '7myi': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
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
        w = n('GZwR'),
        C = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_genericWrapperRef', v.a.createRef()),
              h()(s()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              h()(s()(e), 'render', function () {
                var t = e.props,
                  n = t.children,
                  a = t.contextText,
                  r = t.isInline,
                  i = t.isInlineReply,
                  o = t.onTypeaheadStateChange,
                  l = t.source,
                  s = e.state,
                  c = s.canShowTypeahead,
                  d = s.queryContext,
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
                    source: l || w.d.Compose,
                  },
                  n(e._handleInputChange),
                )
              }),
              h()(s()(e), '_handleSelectItem', function (t) {
                var n = e.props.onTextUpdated,
                  a = e.state.queryContext
                if (a) {
                  var r = Object(b.a)(t, a.resultType),
                    i = e._replaceToken(r, a),
                    o = i.newCursor,
                    l = i.newTweetText
                  n({ target: { value: l } }), e._updateDOMTextArea(o, l)
                }
                e._setQueryContext(void 0)
              }),
              h()(s()(e), '_updateDOMTextArea', function (t, n) {
                e._textAreaRef &&
                  ((e._textAreaRef.value = n),
                  (e._textAreaRef.selectionStart = t),
                  (e._textAreaRef.selectionEnd = t),
                  e._textAreaRef.focus())
              }),
              h()(s()(e), '_handleInputChange', function (t) {
                if (Object(_.a)(t))
                  throw new Error('PlainTextTypeaheadComposeWrapper cannot handle rich text input changes')
                var n = t && (t.currentTarget || t.target),
                  a = e.state.queryContext
                e._textAreaRef = n
                var r = a && a.word,
                  i = n.value,
                  o = g.c(n.selectionStart, i),
                  l = o.end,
                  s = o.start,
                  c = o.word,
                  d = g.e(c || '', 'compose')
                if ((null == d ? void 0 : d.q) !== r)
                  if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === s))
                    e._setQueryContext(void 0)
                  else if (d) {
                    var u = d.q,
                      p = d.result_type
                    e._setQueryContext({ word: u, resultType: p, fullText: n.value, startIndex: s, endIndex: l })
                  } else e._setQueryContext(void 0)
              }),
              h()(s()(e), '_setQueryContext', function (t) {
                return e.setState({ queryContext: t, canShowTypeahead: !!t })
              }),
              h()(s()(e), '_handleDismiss', function () {
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
      t.a = C
    },
    '88ay': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return ee
      }),
        n.d(t, 'e', function () {
          return te
        }),
        n.d(t, 'f', function () {
          return ne
        }),
        n.d(t, 'd', function () {
          return ae
        }),
        n.d(t, 'a', function () {
          return oe
        })
      var a = n('m3Bd'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        l = n('VrFO'),
        s = n.n(l),
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
        b = n('97Jx'),
        _ = n.n(b),
        w = (n('1t7P'), n('jQ/y'), n('ho0z'), n('2G9S'), n('hBpG'), n('7x/C'), n('ERkP')),
        C = n.n(w),
        E = n('6rlp'),
        T = n('zh9S'),
        x = n('G6rE'),
        S = n('rxPX'),
        I = n('0KEI'),
        k = function (e, t) {
          return x.e.select(e, t.userId)
        },
        R = function (e, t) {
          return t.promotedContent
        },
        L = Object(S.a)()
          .propsFromState(function () {
            return { promotedContent: R, user: k }
          })
          .adjustStateProps(function (e) {
            var t = e.promotedContent,
              n = e.user
            return { promotedContent: t || (n ? n.promoted_content : void 0), user: n }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
              log: E.a,
              scribeAction: T.c,
            }
          }),
        P = n('I57f'),
        M = n('vMjK'),
        A = n('MWbm'),
        D = n('IG7M'),
        O = n('rHpw'),
        F = function (e) {
          var t = e.children,
            n = e.promotedContent,
            a = e.user
          return C.a.createElement(
            A.a,
            { style: B.decorationWrapper },
            t,
            C.a.createElement(D.a, {
              renderActionMenu: function (e) {
                return C.a.createElement(M.b, { onClose: e, promotedContent: n, user: a, view: 'follower' })
              },
              style: B.actionMenu,
            }),
          )
        },
        B = O.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        U = n('uIZp'),
        N = n('mN6z'),
        j = n('caTy'),
        H = n('3IPs'),
        V = n('Rp9C'),
        z = n('X04g'),
        W = n('Re5t'),
        G = n('TnY3'),
        q = n('hxu0'),
        K = n('v6aA'),
        X = n('7JQg'),
        Y = n('nBUg'),
        Q = n('IMA+'),
        J = n('cFuS'),
        Z = [
          'avatarDecoration',
          'bottomControl',
          'cellClickable',
          'createLocalApiErrorHandler',
          'decoration',
          'followRequestReceived',
          'hideBlocked',
          'history',
          'isAutoblocking',
          'isBlockedBy',
          'isBlocking',
          'isDeviceFollowing',
          'isFollowing',
          'isInSidebar',
          'location',
          'log',
          'onClick',
          'promotedItemId',
          'saveAsRecentSearch',
          'scribeAction',
          'scribeData',
          'scribeNamespace',
          'shouldScribeImpression',
          'shouldScribeProfileClick',
          'shouldStoreTypeaheadItem',
          'socialContext',
          'user',
        ],
        $ = function (e) {
          var t = e.user
          return t && t.profile_image_url_https
            ? C.a.createElement(
                re,
                _()({}, e, {
                  avatarUri: t.profile_image_url_https,
                  description: t.description,
                  entities: t.entities,
                  followRequestReceived: t.follow_request_received,
                  highlightedLabel: t.highlightedLabel,
                  isAutoblocking: t.smart_blocking,
                  isBlockedBy: t.blocked_by,
                  isBlocking: t.blocking,
                  isDeviceFollowing: t.notifications,
                  isFollowedBy: t.followed_by,
                  isFollowing: t.following,
                  isProtected: t.protected,
                  isVerified: t.verified,
                  name: t.name,
                  screenName: t.screen_name,
                  translatorType: t.translator_type,
                  user: t,
                  withheldDescription: t.withheld_description,
                  withheldEntities: t.withheld_entities,
                }),
              )
            : null
        }
      $.defaultProps = {
        cellClickable: !0,
        decoration: null,
        displayMode: W.a.UserCompact,
        followRequestReceived: !1,
        hideBlocked: !1,
        promotedItemType: J.c.USER,
        shouldScribeProfileClick: !0,
        shouldScribeImpression: !1,
        withFollowsYou: !1,
      }
      var ee = function (e) {
          var t = e.isDeviceFollowing,
            n = e.userId
          return C.a.createElement(P.a, { isFollowing: t, style: ie.followButton, userId: n })
        },
        te = function (e) {
          var t = e.loggedInUserId,
            n = e.promotedContent,
            a = e.userId
          return t !== a
            ? C.a.createElement(U.a, { promotedContent: n, size: 'small', style: ie.followButton, userId: a })
            : null
        },
        ne = function (e) {
          return C.a.createElement(F, { promotedContent: e.promotedContent, user: e.user }, te(e))
        },
        ae = function (e) {
          return C.a.createElement(D.a, {
            renderActionMenu: function (t) {
              return C.a.createElement(M.b, {
                onClose: t,
                promotedContent: e.promotedContent,
                user: e.user,
                view: 'rito_flagged_accounts',
              })
            },
          })
        },
        re = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n() {
            var e
            s()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(p()(e), '_handleAvatarClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ element: 'avatar', action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(J.b.PROFILE_IMAGE_CLICK)
              }),
              y()(p()(e), '_handleCellClick', function () {
                var t = e.props,
                  n = t.history,
                  a = t.onClick,
                  r = t.screenName,
                  i = t.user,
                  o = e._getPromotedTweetState()
                e._handleSaveAsRecentSearch(),
                  e._handleScreenNameClick(),
                  a ? a({ user: i, state: o }) : n.push({ pathname: '/'.concat(r), state: o || void 0 })
              }),
              y()(p()(e), '_handleScreenNameClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(J.b.SCREEN_NAME_CLICK)
              }),
              y()(p()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  n = t.saveAsRecentSearch,
                  a = t.shouldStoreTypeaheadItem,
                  r = t.userId
                n && a && a(z.a.ItemType.USER) && n({ user: { id: r, type: H.a.User } })
              }),
              y()(p()(e), '_scribeAction', function (t) {
                var n,
                  a = e.props,
                  r = a.promotedContent,
                  i = a.scribeAction,
                  l = a.scribeData,
                  s = a.scribeNamespace,
                  c = a.user,
                  d = a.userId,
                  u =
                    null == l || null === (n = l.items) || void 0 === n
                      ? void 0
                      : n.find(function (e) {
                          return e.item_type === z.a.ItemType.USER && e.id === d
                        }),
                  p = l.search_details,
                  m = { items: [o()(o()({}, u), V.a.getUserItem(c, r))], profile_id: d, search_details: p }
                i(o()(o()({}, s), t), m)
              }),
              e
            )
          }
          return (
            d()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._shouldRender() && this._handleImpression()
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(N.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.avatarDecoration,
                    a = (t.bottomControl, t.cellClickable),
                    i =
                      (t.createLocalApiErrorHandler,
                      t.decoration,
                      t.followRequestReceived,
                      t.hideBlocked,
                      t.history,
                      t.isAutoblocking,
                      t.isBlockedBy,
                      t.isBlocking,
                      t.isDeviceFollowing,
                      t.isFollowing,
                      t.isInSidebar),
                    o =
                      (t.location,
                      t.log,
                      t.onClick,
                      t.promotedItemId,
                      t.saveAsRecentSearch,
                      t.scribeAction,
                      t.scribeData,
                      t.scribeNamespace,
                      t.shouldScribeImpression,
                      t.shouldScribeProfileClick,
                      t.shouldStoreTypeaheadItem,
                      t.socialContext),
                    l = t.user,
                    s = r()(t, Z)
                  return this._shouldRender()
                    ? C.a.createElement(
                        Y.b.Provider,
                        {
                          value: {
                            socialContextRefreshEnabled: function () {
                              return e.context.featureSwitches.isTrue(
                                'social_context_and_topic_context_refresh_alignment_enabled',
                              )
                            },
                          },
                        },
                        C.a.createElement(
                          Q.a,
                          _()({}, s, {
                            avatarDecoration: n,
                            bottomControl: this._renderBottomControl(),
                            decoration: this._renderDecoration(),
                            highlightedLabel: this._getHighlightedLabel(),
                            isBlocking: l.blocking,
                            onAvatarClick: this._handleAvatarClick,
                            onCellClick: a ? this._handleCellClick : void 0,
                            onScreenNameClick: this._handleScreenNameClick,
                            socialContext: o
                              ? {
                                  contextType: o.contextType,
                                  text: o.text,
                                  link: o.landingUrl ? Object(j.b)(o.landingUrl) : void 0,
                                }
                              : void 0,
                            withDarkerInteractiveBackground: i,
                          }),
                        ),
                      )
                    : null
                },
              },
              {
                key: '_renderBottomControl',
                value: function () {
                  return this._renderControl(this.props.bottomControl || null)
                },
              },
              {
                key: '_renderDecoration',
                value: function () {
                  return this._renderControl(this.props.decoration)
                },
              },
              {
                key: '_renderControl',
                value: function (e) {
                  var t = this.context.loggedInUserId,
                    n = this.props,
                    a = n.displayMode,
                    r = n.followRequestReceived,
                    i = n.isAutoblocking,
                    o = n.isBlocking,
                    l = n.isDeviceFollowing,
                    s = n.isFollowing,
                    c = n.promotedContent,
                    d = n.screenName,
                    u = n.user,
                    p = n.userId
                  return 'function' == typeof e
                    ? e({
                        displayMode: a,
                        followRequestReceived: r,
                        isAutoblocking: i,
                        isBlocking: o,
                        isDeviceFollowing: !!l,
                        isFollowing: !!s,
                        loggedInUserId: t,
                        promotedContent: c,
                        screenName: d,
                        user: u,
                        userId: p,
                      })
                    : e
                },
              },
              {
                key: '_shouldRender',
                value: function () {
                  var e = this.props,
                    t = e.hideBlocked,
                    n = e.isBlockedBy,
                    a = e.isBlocking,
                    r = e.screenName
                  return e.userId && r && !(t && (n || a))
                },
              },
              {
                key: '_getHighlightedLabel',
                value: function () {
                  var e = this.props.user.highlightedLabel,
                    t = 'AutomatedLabel' === (null == e ? void 0 : e.userLabelType),
                    n = !!t && this.context.featureSwitches.isTrue('account_taxonomy_automated_label_enabled')
                  return !t || n ? e : void 0
                },
              },
              {
                key: '_getPromotedTweetState',
                value: function () {
                  var e = this.props,
                    t = e.promotedContent,
                    n = e.promotedItemType
                  return t && n === J.c.TWEET ? { promotedTweetState: t } : null
                },
              },
              {
                key: '_handleAsyncPromotedEvent',
                value: function (e) {
                  var t = this.props,
                    n = t.createLocalApiErrorHandler,
                    a = t.log,
                    r = t.promotedContent,
                    i = t.promotedItemId,
                    o = t.promotedItemType,
                    l = t.userId
                  r &&
                    a({
                      disclosureType: r.disclosure_type,
                      itemId: i || l,
                      itemType: o,
                      params: { event: e, impression_id: r.impression_id },
                    }).catch(n())
                },
              },
              {
                key: '_handleImpression',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.log,
                    a = e.promotedContent,
                    r = e.promotedItemType,
                    i = e.shouldScribeImpression,
                    o = e.userId
                  if (a && r === J.c.USER) {
                    var l = a.disclosure_type,
                      s = a.impression_id
                    n({
                      disclosureType: l,
                      itemId: o,
                      itemType: J.c.USER,
                      params: { event: J.b.IMPRESSION, impression_id: s },
                    }).catch(t())
                  } else i && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      y()(re, 'contextType', K.a), y()(re, 'defaultProps', $.defaultProps)
      var ie = O.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        oe = Object(G.a)(Object(q.a)(L($)))
      t.b = Object(X.a)({ element: 'user' })(oe)
    },
    '8A5z': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
    '9B+1': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return i
        })
      var a = n('PbbS'),
        r = function (e) {
          return { topicId: e.topicId, functionalityType: e.functionalityType }
        },
        i = function (e) {
          return e === a.a.Star
            ? a.a.Star
            : e === a.a.Favorite
            ? a.a.Favorite
            : e === a.a.Interested
            ? a.a.Interested
            : a.a.Default
        }
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
        l = n.n(o),
        s = n('MWbm'),
        c = n('PbQQ'),
        d = n('6vad'),
        u = n('e0ey'),
        p = n('rHpw'),
        m = n('ZkMC'),
        h = l.a.j9cf595f,
        f = l.a.d69a782e,
        v = l.a.faf745f9,
        g = l.a.b96e6682,
        y = l.a.h2437f25
      function b(e) {
        var t = e.currentWarnings,
          n = e.mediaItem,
          a = e.onWarningChange,
          o = e.orientedImage,
          l = [
            { label: v, value: 'adult_content' },
            { label: g, value: 'graphic_violence' },
            { label: y, value: 'other' },
          ],
          p = c.b.useOpaqueIdentifier(),
          b = r.a.createElement(i.a, { mediaItem: n, orientedImage: o })
        return r.a.createElement(
          s.a,
          { style: _.root },
          r.a.createElement(
            s.a,
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
              s.a,
              { accessibilityLabelledBy: p, accessibilityRole: 'group' },
              l.map(function (e) {
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
    AOWc: function (e, t, n) {
      'use strict'
      n('ho0z'), n('849X'), n('TJCb')
      function a(e) {
        ;(this.name = 'AssertionError'), (this.message = e), (this.stack = new Error().stack)
      }
      ;(a.prototype = Object.create(Error.prototype)), (a.prototype.constructor = a)
      t.a = function (e, t) {
        if (!e) throw new a(t ? 'Assertion failed: '.concat(t) : 'Assertion failed (also, no message was provided)')
      }
    },
    BLtI: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Mn
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = n('97Jx'),
        o = n.n(i),
        l = n('yiKp'),
        s = n.n(l),
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
        w =
          (n('2G9S'),
          n('KqXw'),
          n('WNMA'),
          n('hBvt'),
          n('ho0z'),
          n('TJCb'),
          n('7x/C'),
          n('DZ+c'),
          n('849X'),
          n('5BYb'),
          n('uFXj'),
          n('ERkP')),
        C = n.n(w),
        E = n('rcen'),
        T = n('Rp9C'),
        x = n('MWbm'),
        S = n('Irs7'),
        I = n('htQn'),
        k = n('t62R'),
        R = n('OOKO'),
        L = n('/yvb'),
        P = n('rHpw'),
        M = n('v6aA'),
        A = n('Lsrn'),
        D = n('k/Ka'),
        O = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(D.a)(
            'svg',
            s()(
              s()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [A.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            C.a.createElement(
              'g',
              null,
              C.a.createElement('path', {
                d: 'M20.937 3.223c-.403-.263-.948-.375-1.48-.195-.726.247-1.906.534-3.457.534-1.38 0-2.286-.225-3.273-.472l-.01-.003c-1.01-.252-2.1-.525-3.717-.525-1.67 0-3.235.484-4.357.946-.16.066-.312.132-.455.197V2.75c0-.518-.42-.938-.938-.938s-.937.42-.937.938v18.5c0 .518.42.938.938.938s.94-.42.94-.938v-2.457c.28-.15.682-.35 1.168-.55 1.002-.414 2.312-.806 3.642-.806 1.38 0 2.286.225 3.273.472l.01.002c1.01.253 2.102.525 3.717.525 2.4 0 4.075-.6 4.804-.922.58-.257.883-.823.883-1.378V4.577c0-.612-.343-1.088-.75-1.354zm-3.28 8.717c-.465.226-1.026.03-1.25-.435-.71-1.462-2.598-1.42-3.234.113l-.307.74c-.145.35-.487.58-.866.58-.38 0-.72-.23-.866-.58l-.308-.74c-.636-1.532-2.525-1.576-3.233-.113-.226.466-.786.66-1.252.435-.465-.226-.66-.786-.434-1.252C7.16 8.1 10.392 7.905 12 9.94c1.608-2.035 4.84-1.84 6.094.748.225.466.03 1.026-.436 1.252z',
              }),
            ),
          )
        }
      O.metadata = { width: 24, height: 24 }
      var F = O,
        B = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(D.a)(
            'svg',
            s()(
              s()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [A.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            C.a.createElement(
              'g',
              null,
              C.a.createElement('path', {
                d: 'M3.25 22c-.414 0-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v1.247C5.144 3.453 7.007 2.75 9 2.75c1.592 0 2.655.266 3.682.522.982.246 1.91.478 3.318.478 1.687 0 2.945-.332 3.704-.61.41-.15.87-.086 1.235.168.35.244.56.64.56 1.054V16.21c0 .474-.272.905-.694 1.1-.62.284-2.325.94-4.806.94-1.593 0-2.654-.266-3.682-.522-.983-.246-1.91-.478-3.318-.478-2.147 0-4.203.996-5 1.433v2.567c0 .414-.336.75-.75.75zM4 5.683v11.314c1.144-.544 3.007-1.247 5-1.247 1.592 0 2.655.266 3.682.522.982.245 1.91.478 3.318.478 1.975 0 3.36-.458 4-.725v-11.4c-.887.302-2.246.625-4 .625-1.593 0-2.654-.266-3.682-.522-.983-.246-1.91-.478-3.318-.478-2.147 0-4.203.996-5 1.433z',
              }),
              C.a.createElement('path', {
                d: 'M17.925 10.77c-1.23-2.543-4.46-2.65-5.925-.496-1.465-2.153-4.695-2.047-5.925.495-.18.372-.025.82.348 1 .373.182.82.026 1.002-.347.78-1.61 2.878-1.556 3.575.123l.308.74c.116.28.39.464.693.464s.578-.182.694-.463l.306-.74c.697-1.68 2.795-1.734 3.575-.124.18.373.63.53 1.002.348.373-.18.53-.628.348-1z',
              }),
            ),
          )
        }
      B.metadata = { width: 24, height: 24 }
      var U = B,
        N = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(D.a)(
            'svg',
            s()(
              s()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [A.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            C.a.createElement(
              'g',
              null,
              C.a.createElement('path', {
                d: 'M17.296 2.642c-2.068-1.17-4.464-1.62-6.816-1.283C8.13 1.692 5.956 2.8 4.3 4.5c-1.658 1.707-2.704 3.91-2.976 6.27-.27 2.357.245 4.738 1.468 6.77.005.01.008.02.01.03 0 .01-.002.017-.004.025L1.12 21.2c-.11.232-.145.49-.103.742.043.254.162.488.343.67.18.184.412.307.665.353.253.047.514.014.747-.094l3.63-1.67h.01l.01.01.01.005c1.68 1.01 3.606 1.542 5.567 1.537 2.373 0 4.68-.783 6.562-2.232 1.882-1.45 3.23-3.482 3.836-5.778.604-2.298.432-4.73-.49-6.92-.925-2.188-2.548-4.01-4.614-5.178zM12 7.25c-2.623 0-4.75 2.127-4.75 4.75s2.127 4.75 4.75 4.75 4.75-2.127 4.75-4.75S14.623 7.25 12 7.25zM5.75 12c0-3.452 2.798-6.25 6.25-6.25s6.25 2.798 6.25 6.25-2.798 6.25-6.25 6.25S5.75 15.452 5.75 12zm5.5-2.5c0-.414.336-.75.75-.75 1.794 0 3.25 1.455 3.25 3.25 0 .413-.337.75-.75.75-.415 0-.75-.337-.75-.75 0-.967-.784-1.75-1.75-1.75-.414 0-.75-.336-.75-.75z',
              }),
            ),
          )
        }
      N.metadata = { width: 24, height: 24 }
      var j = N,
        H = n('7Mjr'),
        V = (function (e) {
          v()(n, e)
          var t = y()(n)
          function n() {
            var e
            d()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              _()(h()(e), '_scribeAction', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.destinationUrl,
                  i = n.note
                a.scribe({ action: t, data: { items: [T.a.getBirdwatchItem(null == i ? void 0 : i.rest_id, r)] } })
              }),
              _()(h()(e), '_handlePivotClick', function () {
                e._scribeAction('click')
              }),
              _()(h()(e), '_getBirdwatchIcon', function (e) {
                switch (e) {
                  case 'BirdwatchFlagFill':
                    return C.a.createElement(F, { style: z.birdwatchIcon, testID: 'icon-birdwatch-flag' })
                  case 'BirdwatchFlagStroke':
                    return C.a.createElement(U, { style: z.birdwatchIcon, testID: 'icon-birdwatch-flag-stroke' })
                  default:
                    return C.a.createElement(j, { style: z.birdwatchIcon, testID: 'icon-birdwatch-fill' })
                }
              }),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._scribeAction('impression')
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.callToAction,
                    n = e.destinationUrl,
                    a = e.footer,
                    r = e.iconType,
                    i = e.subtitle,
                    o = e.title,
                    l = '#' === n ? void 0 : { pathname: n, anchorless: !0 },
                    s = l ? this._handlePivotClick : void 0,
                    c = (null == t ? void 0 : t.destinationUrl) || '#',
                    d = '#' === c ? void 0 : c
                  return C.a.createElement(
                    C.a.Fragment,
                    null,
                    C.a.createElement(
                      I.a,
                      {
                        link: l,
                        onPress: s,
                        style: z.pivotContainer,
                        testID: 'birdwatch-pivot',
                        withInteractiveStyling: !!l,
                      },
                      C.a.createElement(
                        x.a,
                        { style: z.headerContainer },
                        C.a.createElement(
                          x.a,
                          { style: [z.headerTextContainer, !t && z.headerTextAndThumbnailContainer] },
                          this._getBirdwatchIcon(r),
                          C.a.createElement(k.b, { size: 'subtext1', style: z.birdwatchLabel, weight: 'bold' }, o),
                        ),
                        t ? null : C.a.createElement(H.a, { style: z.icon, testID: 'icon-arrow-right' }),
                      ),
                      i
                        ? C.a.createElement(E.a, {
                            entities: i.entities,
                            size: 'body',
                            style: z.subtitle,
                            text: i.text,
                          })
                        : null,
                      t
                        ? C.a.createElement(
                            C.a.Fragment,
                            null,
                            C.a.createElement(R.a, { spacing: 'space2' }),
                            C.a.createElement(
                              x.a,
                              { style: z.callToActionContainer },
                              C.a.createElement(k.b, { size: 'subtext1' }, t.prompt),
                              C.a.createElement(
                                L.a,
                                { link: d, onPress: this._handlePivotClick, size: 'small', type: 'primaryOutlined' },
                                t.title,
                              ),
                            ),
                          )
                        : null,
                    ),
                    a
                      ? C.a.createElement(E.a, {
                          color: 'gray700',
                          entities: a.entities,
                          size: 'subtext2',
                          style: z.footer,
                          text: a.text,
                        })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      _()(V, 'contextType', M.a)
      var z = P.a.create(function (e) {
          return {
            birdwatchLabel: { display: 'flex', alignItems: 'center' },
            footer: { paddingVertical: e.spaces.space12 },
            pivotContainer: {
              borderColor: e.colors.nestedBorderColor,
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.xLarge,
              marginTop: e.spaces.space12,
              overflow: 'hidden',
            },
            headerContainer: {
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space12,
              backgroundColor: e.colors.hoverBlack,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              flexGrow: 1,
            },
            headerTextContainer: { flexDirection: 'row', width: '100%' },
            headerTextAndThumbnailContainer: { width: '80%' },
            callToActionContainer: {
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space12,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              flexGrow: 1,
            },
            icon: { color: e.colors.text, paddingLeft: e.spaces.space12, flexShrink: 0 },
            birdwatchIcon: {
              marginRight: e.spacesPx.space4,
              padding: e.spacesPx.space2,
              color: e.colors.primary,
              flexShrink: 0,
            },
            thumbnail: { color: e.colors.whiteOnColor },
            subtitle: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space12 },
          }
        }),
        W = Object(S.a)(V, { element: 'birdwatch_pivot' }),
        G = n('6/RC'),
        q = n('3XMw'),
        K = n.n(q),
        X = n('5S/X'),
        Y = n('Ey+e'),
        Q = n('caTy'),
        J = n('Y6L+'),
        Z = (n('lTEL'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        $ = Object(Z.a)({
          loader: function () {
            return n.e(181).then(n.bind(null, 'mL9d'))
          },
        }),
        ee = n('m3Bd'),
        te = n.n(ee),
        ne = n('xM7j'),
        ae = n('LKCq'),
        re = ['onActionClick'],
        ie = 'inner_tombstone'
      function oe(e) {
        var t,
          n = e.children,
          a = e.config,
          r = e.nativeID,
          i = Object(S.b)()
        if (X.b) return n
        var l = (null === (t = a.richRevealText) || void 0 === t ? void 0 : t.text) || a.revealText,
          s = a.richText
            ? C.a.createElement(E.a, {
                alignment: a.richText.alignment,
                entities: a.richText.entities,
                onEntityClick: function () {
                  i.scribe({ action: 'open_link', component: ie })
                },
                rtl: a.richText.rtl,
                text: a.richText.text,
              })
            : a.text
        return C.a.createElement(
          x.a,
          { nativeID: r },
          l
            ? C.a.createElement(
                ae.a,
                {
                  label: s,
                  onReveal: function () {
                    i.scribe({ action: 'click', component: ie })
                  },
                  render: function (e) {
                    var t = e.onActionClick,
                      n = te()(e, re)
                    return C.a.createElement(ne.a, o()({}, n, { inline: !0, onClick: t }))
                  },
                  revealLabel: l,
                },
                n,
              )
            : C.a.createElement(ne.a, { inline: !0 }, s),
        )
      }
      var le = n('PeW/'),
        se = n('3IPs'),
        ce = (n('1t7P'), n('jQ/y'), n('PbbS')),
        de = n('LWCC'),
        ue = n('JUsM'),
        pe = P.a.create(function (e) {
          return { topicFollowPrompt: { marginBottom: e.spaces.space12, marginTop: '-'.concat(e.spaces.space8) } }
        }),
        me = function (e) {
          var t = e.defaultRef,
            n = e.topic,
            a = e.topicFollowPrompt,
            r = (null == a ? void 0 : a.description) || {},
            i = r.entities,
            o = r.text
          return C.a.createElement(
            x.a,
            { style: pe.topicFollowPrompt },
            C.a.createElement(ue.a, {
              containerRef: t,
              primaryAction: C.a.createElement(de.a, {
                showRelationshipChangeConfirmation: !0,
                textMode: ce.a.FollowTopic,
                topic: n,
              }),
              text: C.a.createElement(E.a, { entities: i, text: o }),
            }),
          )
        },
        he = n('SrIh'),
        fe = n('gdQ4'),
        ve = n('qbku'),
        ge = n('tocL'),
        ye = 'analyticsButton',
        be = 'promotedIndicator',
        _e = 'socialContext',
        we = 'tweet',
        Ce = n('X04g'),
        Ee = n('v/3V'),
        Te = (n('Ysgh'), n('jwue'), n('+oxZ'), n('RqPI')),
        xe = n('3zvM'),
        Se = n('lMB6'),
        Ie = n('iChn'),
        ke = Object(xe.e)({
          namespace: 'translationsTweets',
          fetchOneContext: 'FETCH_TWEET_TRANSLATION',
          fetchOneEndpoint: function (e) {
            return function (t, n) {
              return e.Tweets.fetchTranslation(t, n).then(Re)
            }
          },
          fetchOneParams: function (e) {
            return { id: e }
          },
        }),
        Re = function (e) {
          var t = Array.isArray(e) ? e : [e]
          return {
            entities: {
              translationsTweets: Object(Ie.a)(t, function (e) {
                return e.id_str
              }),
            },
          }
        },
        Le = Se.a.register(ke),
        Pe = n('rxPX'),
        Me = n('0KEI'),
        Ae = function (e, t) {
          return Le.select(e, t.tweetId)
        },
        De = function (e, t) {
          return Le.selectFetchStatus(e, t.tweetId)
        },
        Oe = Object(Pe.a)()
          .propsFromState(function () {
            return { translation: Ae, translationFetchStatus: De, userLanguage: Te.o }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Me.createLocalApiErrorHandlerWithContextFactory)('TRANSLATE_TWEET'),
              fetchTranslation: Le.fetchOneIfNeeded,
            }
          }),
        Fe = n('PdwO'),
        Be = n('cTG8'),
        Ue = n('oQhu'),
        Ne = n('YeIG'),
        je = n('Gpeq'),
        He = [
          'createLocalApiErrorHandler',
          'disableTranslation',
          'enrichments',
          'fetchTranslation',
          'header',
          'hitHighlights',
          'onMediaTranslation',
          'style',
          'supplementalLang',
          'translation',
          'translationFetchStatus',
          'tweetId',
          'userLanguage',
          'weight',
          'withOriginalText',
        ],
        Ve = [
          'createLocalApiErrorHandler',
          'disableTranslation',
          'fetchTranslation',
          'header',
          'onMediaTranslation',
          'style',
          'supplementalLang',
          'translation',
          'translationFetchStatus',
          'tweetId',
          'userLanguage',
          'withOriginalText',
        ],
        ze = K.a.b4947556,
        We = (function (e) {
          v()(n, e)
          var t = y()(n)
          function n() {
            var e
            d()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              _()(h()(e), '_fetchTranslation', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchTranslation)(t.tweetId).catch(n())
              }),
              _()(h()(e), '_shouldDisableTranslation', function () {
                var t = e.props,
                  n = t.disableTranslation,
                  a = t.displayTextRange,
                  r = t.entities,
                  i = t.lang,
                  o = t.supplementalLang,
                  l = t.text,
                  s = t.userLanguage
                return e._getMemoizedDisableTranslation(n, a, r, l, i, o, s)
              }),
              _()(h()(e), '_renderTranslation', function () {
                var t = e.props,
                  n =
                    (t.createLocalApiErrorHandler,
                    t.disableTranslation,
                    t.enrichments,
                    t.fetchTranslation,
                    t.header,
                    t.hitHighlights,
                    t.onMediaTranslation,
                    t.style,
                    t.supplementalLang,
                    t.translation),
                  a = (t.translationFetchStatus, t.tweetId, t.userLanguage, t.weight, t.withOriginalText, te()(t, He))
                if (n)
                  return C.a.createElement(
                    Be.a,
                    o()({}, a, {
                      displayTextRange: e._getMemoizedDisplayTextRange(n.text),
                      entities: n.entities,
                      lang: n.destinationLanguage,
                      text: n.text,
                    }),
                  )
              }),
              _()(
                h()(e),
                '_getMemoizedDisplayTextRange',
                Object(Ue.a)(function (e) {
                  return [0, e.length]
                }),
              ),
              _()(
                h()(e),
                '_getMemoizedDisableTranslation',
                Object(Ue.a)(function (e, t, n, a, r, i, o) {
                  var l = o && Object(je.c)(r.split('-')[0]) !== Object(je.c)(o.split('-')[0])
                  return e || !!i || !l || !Object(je.b)({ displayTextRange: t, entities: n, text: a, language: r })
                }),
              ),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.onMediaTranslation,
                    a = t.translation
                  if (e.translation !== a && a) {
                    var r,
                      i = this.context.featureSwitches,
                      o = {}
                    ;((null == a || null === (r = a.entities) || void 0 === r ? void 0 : r.media) || []).forEach(
                      function (e) {
                        e.alt_text && (o[e.id_str] = e.alt_text)
                      },
                    ),
                      n && !Object(Ne.a)(o) && i.isTrue('responsive_web_alt_text_translations_enabled') && n(o)
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = (e.createLocalApiErrorHandler, e.disableTranslation, e.fetchTranslation, e.header),
                    n = (e.onMediaTranslation, e.style),
                    a = (e.supplementalLang, e.translation),
                    r = e.translationFetchStatus,
                    i = e.tweetId,
                    o = (e.userLanguage, e.withOriginalText),
                    l = te()(e, Ve)
                  return C.a.createElement(
                    Fe.a,
                    {
                      disableTranslation: this._shouldDisableTranslation(),
                      fetchTranslation: this._fetchTranslation,
                      header: t,
                      key: i,
                      originLanguage: a && a.localizedSourceLanguage,
                      style: n,
                      translateButtonText: ze,
                      translatedMessage: this._renderTranslation(),
                      translationFetchStatus: r,
                      withOriginalText: o,
                    },
                    C.a.createElement(Be.a, l),
                  )
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      _()(We, 'contextType', M.a)
      var Ge = Oe(We),
        qe = n('2qZs'),
        Ke = n('wwsH'),
        Xe = { viewType: 'birdwatch' },
        Ye = P.a.create(function (e) {
          return { birdwatchIcon: { marginLeft: e.spaces.space12 } }
        }),
        Qe = function (e) {
          var t = e.onPress,
            n = e.onShow,
            a = e.tweetId,
            r = { pathname: '/i/birdwatch/t/'.concat(a), external: !0 }
          return (
            C.a.useEffect(
              function () {
                n && n()
              },
              [n],
            ),
            C.a.createElement(Ke.a, {
              Icon: qe.a,
              accessibilityLabel: 'Birdwatch note',
              activeColor: 'primary',
              behavioralEventContext: Xe,
              link: r,
              onPress: t,
              style: Ye.birdwatchIcon,
            })
          )
        },
        Je = n('xXop'),
        Ze = n('xrkw'),
        $e = n('mqpi'),
        et = K.a.g1fa869c,
        tt = (function (e) {
          v()(n, e)
          var t = y()(n)
          function n() {
            var e
            d()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              _()(h()(e), '_shouldDisable', $e.b.bind(null, e.context.featureSwitches)),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.endControl,
                    n = e.loggedInUserId,
                    a = e.onAnalyticsClick,
                    r = e.style,
                    i = e.tweet
                  return !this._shouldDisable(i, $e.a.Analytics) && n === i.user.id_str
                    ? C.a.createElement(
                        x.a,
                        { style: [nt.activityContainerWithChildren, r] },
                        C.a.createElement(
                          I.a,
                          {
                            link: ''.concat(i.permalink, '/analytics'),
                            onPress: a,
                            style: nt.analyticsButton,
                            testID: ye,
                          },
                          C.a.createElement(Ze.a, { style: nt.analyticsIcon }),
                          C.a.createElement(k.b, { color: 'gray700' }, et),
                        ),
                        t,
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(C.a.PureComponent)
      _()(tt, 'contextType', M.a)
      var nt = P.a.create(function (e) {
          return {
            analyticsIcon: { color: e.colors.gray700, paddingRight: e.spaces.space4 },
            analyticsButton: { paddingVertical: e.spaces.space16, flexDirection: 'row', flexGrow: 1 },
            activityContainerWithChildren: {
              justifyContent: 'space-between',
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              flexDirection: 'row',
              alignItems: 'center',
            },
          }
        }),
        at = tt,
        rt = n('tmUV'),
        it = n('YBcl'),
        ot = n('k89r'),
        lt = function (e) {
          var t = Object(ot.a)()
          return C.a.createElement(
            it.a,
            o()({}, e, {
              handleAnchorAction: function () {
                t.scribe({ component: 'conversation_control_prompt', element: 'see_conversation', action: 'click' })
              },
              handleAnchorOpen: function (e) {
                t.scribe({ element: e, action: 'click' })
              },
              handleAnchorSecondaryAction: function () {
                t.scribe({ component: 'conversation_control_prompt', element: 'ok', action: 'click' })
              },
              handleHeadsUpImpression: function (e, n) {
                t.scribe({ element: 'heads_up_context', action: n, data: { tweet_id: e } })
              },
            }),
          )
        },
        st = n('uFYP'),
        ct = K.a.g6237a1e,
        dt = K.a.d6b5949e,
        ut = function (e) {
          switch (e) {
            case 'paused':
              return dt
            case 'in-progress':
            default:
              return ct
          }
        },
        pt = function (e) {
          var t = e.nativeID,
            n = e.status,
            a = e.style,
            r = 'paused' === n
          return C.a.createElement(
            x.a,
            { style: [mt.root, a] },
            C.a.createElement(st.a, { style: [mt.icon, r ? mt.withGray700 : null] }),
            C.a.createElement(k.b, { color: r ? 'gray700' : 'text', nativeID: t, size: 'subtext2' }, ut(n)),
          )
        },
        mt = P.a.create(function (e) {
          return {
            root: { alignItems: 'center', flexDirection: 'row' },
            icon: { color: e.colors.buttonBlack, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
            withGray700: { color: e.colors.gray700 },
          }
        }),
        ht = n('TuTd'),
        ft = function (e, t) {
          return Object(ht.a)(e, t.tweetId)
        },
        vt = Object(Pe.a)()
          .propsFromState(function () {
            return { liveCounts: ft }
          })
          .adjustStateProps(function (e) {
            var t = e.liveCounts
            return {
              liveLikeCount: t && t.likeCount,
              liveQuoteCount: t && t.quoteCount,
              liveRetweetCount: t && t.retweetCount,
            }
          }),
        gt = (n('KOtZ'), n('LW0h'), n('tQbP'), n('z84I'), n('Jkc4')),
        yt = n('855f'),
        bt = n('MtXG'),
        _t = n('de1q'),
        wt = n('cHvH'),
        Ct = K.a.fd80ffbf,
        Et = P.a.theme.spacesPx.space20,
        Tt = (function (e) {
          v()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r
            return (
              d()(this, n),
              (r = t.call(this, e, a)),
              _()(
                h()(r),
                '_reactionsLegacyHeartEnabled',
                r.context.featureSwitches.isTrue('responsive_web_reactions_legacy_heart'),
              ),
              _()(h()(r), '_renderQuoteTweetTimelinePivot', function () {
                var e = r.props.permalink
                return C.a.createElement(
                  I.a,
                  {
                    link: ''.concat(e, '/retweets/with_comments'),
                    onPress: r._handleQuoteTweetPivotScribeOnClick,
                    style: xt.quoteTweetPivot,
                    withDarkerInteractiveBackground: !1,
                  },
                  C.a.createElement(k.b, { color: 'primary' }, Ct),
                )
              }),
              _()(h()(r), '_updateStateIfChanged', function (e, t) {
                return function (n) {
                  var a = n.nativeEvent.layout.width
                  a !== e() && t(a)
                }
              }),
              _()(
                h()(r),
                '_handleQuoteTweetStatLayout',
                r._updateStateIfChanged(
                  function () {
                    return r.state.quoteTweetLabelWidth
                  },
                  function (e) {
                    return r.setState({ quoteTweetLabelWidth: e })
                  },
                ),
              ),
              _()(
                h()(r),
                '_handleRetweetStatLayout',
                r._updateStateIfChanged(
                  function () {
                    return r.state.retweetLabelWidth
                  },
                  function (e) {
                    return r.setState({ retweetLabelWidth: e })
                  },
                ),
              ),
              _()(
                h()(r),
                '_handleLikeStatLayout',
                r._updateStateIfChanged(
                  function () {
                    return r.state.likeLabelWidth
                  },
                  function (e) {
                    return r.setState({ likeLabelWidth: e })
                  },
                ),
              ),
              _()(
                h()(r),
                '_handleStatGroupLayout',
                r._updateStateIfChanged(
                  function () {
                    return r.state.groupWidth
                  },
                  function (e) {
                    return r.setState({ groupWidth: e })
                  },
                ),
              ),
              _()(h()(r), '_handleRetweetScribeOnClick', function () {
                r.props.analytics.scribe({ element: 'retweet_stat', action: 'click' })
              }),
              _()(h()(r), '_handleQuoteTweetScribeOnClick', function () {
                r.props.analytics.scribe({ element: 'quote_tweet_stat', action: 'click' })
              }),
              _()(h()(r), '_handleQuoteTweetPivotScribeOnClick', function () {
                r.props.analytics.scribe({ element: 'quote_tweet_pivot', action: 'click' })
              }),
              (r.state = {
                retweetLabelWidth: void 0,
                likeLabelWidth: void 0,
                quoteTweetLabelWidth: void 0,
                groupWidth: void 0,
              }),
              r
            )
          }
          return (
            p()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.analytics,
                    n = e.isNonCompliantTweet,
                    a = e.quoteTweetCount
                  n && t.scribe({ element: 'quote_tweet_pivot', action: 'impression' }),
                    a && a > 0 && t.scribe({ element: 'quote_tweet_stat', action: 'impression' })
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.isNonCompliantTweet ? this._renderQuoteTweetTimelinePivot() : this._renderStats()
                },
              },
              {
                key: '_renderReaction',
                value: function (e) {
                  var t = this,
                    n = this.props.permalink,
                    a = yt.a.getTruncatedCount(e.count),
                    r = { pathname: ''.concat(n, '/reactions'), state: { reactionType: e.type } }
                  return C.a.createElement(
                    x.a,
                    { key: e.type },
                    C.a.createElement(gt.a, null, function (n) {
                      return C.a.createElement(
                        bt.a,
                        { count: e.count, link: r, onPress: n() },
                        C.a.createElement(
                          x.a,
                          { style: xt.reactionStat },
                          C.a.createElement(_t.a, {
                            legacyHeart: t._reactionsLegacyHeartEnabled,
                            reactionType: e.type,
                            style: xt.reaction,
                          }),
                          C.a.createElement(bt.a.Value, { animated: !0, count: e.count, weight: 'normal' }, a),
                        ),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderReactionsStatsGroup',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.permalink,
                    a = t.reactionCount,
                    r =
                      (a &&
                        a.reduce(function (e, t) {
                          return (t.count || 0) + e
                        }, 0)) ||
                      0
                  if (!r || !a) return null
                  var i = yt.a.getTruncatedCount(r),
                    o = a
                      .sort(function (e, t) {
                        return t.count - e.count
                      })
                      .filter(function (e) {
                        return e.count > 0
                      })
                  return C.a.createElement(wt.a, null, function (t) {
                    var a = t.windowWidth
                    return C.a.createElement(
                      bt.a.Group,
                      { style: [xt.detailItemContainer, xt.detailItem] },
                      a > P.a.theme.breakpoints.small
                        ? C.a.createElement(
                            x.a,
                            null,
                            C.a.createElement(gt.a, null, function (e) {
                              return C.a.createElement(
                                bt.a,
                                { count: r, link: ''.concat(n, '/reactions'), onPress: e() },
                                C.a.createElement(
                                  K.a.I18NFormatMessage,
                                  { $i18n: 'd01be6d8' },
                                  C.a.createElement(
                                    bt.a.Value,
                                    { animated: !0, count: r },
                                    K.a.b4a4e4aa({ displayCountAll: i }),
                                  ),
                                  C.a.createElement(bt.a.Label, null, K.a.ifa70ada({ count: r })),
                                ),
                              )
                            }),
                          )
                        : null,
                      o.map(function (t) {
                        return e._renderReaction(t)
                      }),
                    )
                  })
                },
              },
              {
                key: '_renderLikesStat',
                value: function (e) {
                  var t = yt.a.getTruncatedCount(e),
                    n = this.props.permalink
                  return C.a.createElement(
                    x.a,
                    { onLayout: this._handleLikeStatLayout },
                    C.a.createElement(gt.a, null, function (a) {
                      return C.a.createElement(
                        bt.a,
                        { count: e, link: ''.concat(n, '/likes'), onPress: a() },
                        C.a.createElement(
                          K.a.I18NFormatMessage,
                          { $i18n: 'e4eeeefe' },
                          C.a.createElement(bt.a.Value, { animated: !0, count: e }, K.a.ha054943({ displayCount: t })),
                          C.a.createElement(bt.a.Label, null, K.a.d260af55({ count: e })),
                        ),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderRetweetsStat',
                value: function (e) {
                  var t = this,
                    n = yt.a.getTruncatedCount(e),
                    a = this.props.permalink
                  return C.a.createElement(
                    x.a,
                    { onLayout: this._handleRetweetStatLayout },
                    C.a.createElement(gt.a, null, function (r) {
                      return C.a.createElement(
                        bt.a,
                        { count: e, link: ''.concat(a, '/retweets'), onPress: r(t._handleRetweetScribeOnClick) },
                        C.a.createElement(
                          K.a.I18NFormatMessage,
                          { $i18n: 'b07c7c02' },
                          C.a.createElement(bt.a.Value, { animated: !0, count: e }, K.a.j142cb3f({ displayCount: n })),
                          C.a.createElement(bt.a.Label, null, K.a.e59a4e90({ count: e })),
                        ),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderQuoteTweetsStat',
                value: function (e) {
                  var t = this,
                    n = yt.a.getTruncatedCount(e),
                    a = this.props.permalink
                  return C.a.createElement(
                    x.a,
                    { onLayout: this._handleQuoteTweetStatLayout },
                    C.a.createElement(gt.a, null, function (r) {
                      return C.a.createElement(
                        bt.a,
                        {
                          count: e,
                          link: ''.concat(a, '/retweets/with_comments'),
                          onPress: r(t._handleQuoteTweetScribeOnClick),
                        },
                        C.a.createElement(
                          K.a.I18NFormatMessage,
                          { $i18n: 'f0259953' },
                          C.a.createElement(bt.a.Value, { animated: !0, count: e }, K.a.f6e12705({ displayCount: n })),
                          C.a.createElement(bt.a.Label, null, K.a.e2414184({ count: e })),
                        ),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderStats',
                value: function () {
                  var e = this.props,
                    t = e.containerStyle,
                    n = e.likeCount,
                    a = e.quoteTweetCount,
                    r = e.reactionCount,
                    i = e.retweetCount,
                    o = e.style,
                    l = e.withReactions,
                    s = this.state,
                    c = s.groupWidth,
                    d = s.likeLabelWidth,
                    u = s.quoteTweetLabelWidth,
                    p = s.retweetLabelWidth,
                    m = p && u && d && c && p + Et + (l ? 0 : d + Et) + u > c,
                    h = c,
                    f = l ? void 0 : n
                  return i || f || a || r
                    ? C.a.createElement(
                        x.a,
                        { onLayout: this._handleStatGroupLayout, style: h ? t : xt.hidden },
                        l ? this._renderReactionsStatsGroup() : null,
                        i || f || a
                          ? C.a.createElement(
                              bt.a.Group,
                              { style: [xt.detailItemContainer, xt.detailItem, xt.noWrap, o] },
                              i ? this._renderRetweetsStat(i) : null,
                              a ? this._renderQuoteTweetsStat(a) : null,
                              f && !m ? this._renderLikesStat(f) : null,
                            )
                          : null,
                        m && f
                          ? C.a.createElement(
                              bt.a.Group,
                              { style: [xt.detailItemContainer, xt.detailItem, o] },
                              this._renderLikesStat(f),
                            )
                          : null,
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(C.a.PureComponent)
      _()(Tt, 'contextType', M.a)
      var xt = P.a.create(function (e) {
          return {
            detailItem: { paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space16 },
            detailItemContainer: {
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              flexDirection: 'row',
            },
            hidden: { visibility: 'hidden' },
            noWrap: { flexWrap: 'nowrap' },
            quoteTweetPivot: {
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              paddingVertical: e.spaces.space16,
            },
            reaction: { width: '1.2em', height: '1.2em', marginRight: '0.5em' },
            reactionStat: { flexDirection: 'row', alignItems: 'center', display: 'inline-flex' },
          }
        }),
        St = Object(S.a)(Tt)
      var It = vt(function (e) {
          var t = e.containerStyle,
            n = e.isNonCompliantTweet,
            a = e.liveLikeCount,
            r = e.liveQuoteCount,
            i = e.liveRetweetCount,
            o = e.tweetLikeCount,
            l = e.tweetPermalink,
            s = e.tweetQuoteTweetCount,
            c = e.tweetReactionCount,
            d = e.tweetRetweetCount,
            u = e.withReactions
          return C.a.createElement(St, {
            containerStyle: t,
            isNonCompliantTweet: n,
            likeCount: a || o,
            permalink: l,
            quoteTweetCount: r || s,
            reactionCount: c,
            retweetCount: i || d,
            withReactions: u,
          })
        }),
        kt = n('avOP'),
        Rt = function (e) {
          var t = e.children
          return X.b ? C.a.createElement(kt.a, { itemProp: 'articleBody' }, t) : t
        },
        Lt = n('hqKg'),
        Pt = n('B/Qy'),
        Mt = n('M0jS'),
        At = function (e, t) {
          return Mt.b.select(e, t.userId)
        },
        Dt = Object(Pe.a)().propsFromState(function () {
          return {
            userSpace: Object(Lt.createSelector)(At, function (e) {
              var t = e ? e.spaces : void 0
              return t
                ? {
                    presenceRingType: 'space',
                    link: {
                      pathname: Object(Pt.a)(t.live_content.audiospace.broadcast_id),
                      state: { origin: 'audiospace_ring' },
                    },
                  }
                : void 0
            }),
          }
        }),
        Ot = n('Sksh'),
        Ft = n('1I0O'),
        Bt = n('jhWN'),
        Ut = function (e) {
          var t = e.avatarRef,
            n = e.imageLayoutCache,
            a = e.nativeID,
            r = e.onClick,
            i = e.onHoverCardScreenNameClick,
            l = e.promotedContent,
            s = e.screenName,
            c = e.size,
            d = e.style,
            u = e.uri,
            p = e.userId,
            m = e.userSpace,
            h = e.withHoverCard,
            f = e.withLink
          return (
            C.a.useEffect(
              function () {
                return (
                  Ot.a.registerUserInApp(p),
                  function () {
                    Ot.a.deregisterUserInApp(p)
                  }
                )
              },
              [p],
            ),
            m
              ? C.a.createElement(
                  Ft.a,
                  o()(
                    {
                      avatarRef: t,
                      imageLayoutCache: n,
                      nativeID: a,
                      onClick: r,
                      onHoverCardScreenNameClick: i,
                      promotedContent: l,
                      screenName: s,
                      size: c,
                      style: d,
                      uri: u,
                      withHoverCard: h,
                      withLink: f,
                    },
                    m,
                  ),
                )
              : C.a.createElement(Bt.a, {
                  avatarRef: t,
                  imageLayoutCache: n,
                  nativeID: a,
                  onClick: r,
                  onHoverCardScreenNameClick: i,
                  promotedContent: l,
                  screenName: s,
                  size: c,
                  style: d,
                  uri: u,
                  withHoverCard: h,
                  withLink: f,
                })
          )
        },
        Nt = Dt(C.a.memo(Ut)),
        jt = n('FGLp'),
        Ht = n('TIdA'),
        Vt = n('DNho'),
        zt = Ht.a.createLayoutCache(),
        Wt = P.a.create(function (e) {
          return { avatar: { display: 'block' }, avatarWrapper: { flexShrink: 1, flexGrow: 0, width: '100%' } }
        }),
        Gt = function (e) {
          var t = Object(S.b)(),
            n = C.a.useContext(M.a).featureSwitches,
            a = e.avatarRef,
            r = e.nativeID,
            i = e.onClick,
            o = e.onHoverCardScreenNameClick,
            l = e.promotedContent,
            s = e.screenName,
            c = e.uri,
            d = e.userId,
            u = e.withHoverCard,
            p = void 0 === u || u,
            m = e.withLink,
            h = void 0 === m || m,
            f = e.withNftAvatar,
            v = e.withUserPresence,
            g = void 0 !== v && v
          return (
            Object(jt.a)(function () {
              f && n.isTrue('responsive_web_nft_avatar') && t.scribe({ element: 'nft_avatar', action: 'impression' })
            }),
            C.a.createElement(
              x.a,
              { style: Wt.avatarWrapper },
              C.a.createElement(Vt.a.Consumer, null, function (e) {
                var t = e.avatarSize
                return g
                  ? C.a.createElement(Nt, {
                      avatarRef: a,
                      imageLayoutCache: zt,
                      nativeID: r,
                      onClick: i,
                      onHoverCardScreenNameClick: o,
                      promotedContent: l,
                      screenName: s,
                      size: t,
                      style: Wt.avatar,
                      uri: c,
                      userId: d,
                      withHoverCard: p,
                      withLink: h,
                    })
                  : C.a.createElement(Bt.a, {
                      avatarRef: a,
                      imageLayoutCache: zt,
                      nativeID: r,
                      onClick: i,
                      onHoverCardScreenNameClick: o,
                      promotedContent: l,
                      screenName: s,
                      size: t,
                      style: Wt.avatar,
                      uri: c,
                      withHoverCard: p,
                      withLink: h,
                    })
              }),
            )
          )
        },
        qt = n('aITJ'),
        Kt = n('E0cF'),
        Xt = n('Z6aJ'),
        Yt = n('dCqJ'),
        Qt = n('Olb6'),
        Jt = n('nBUg'),
        Zt = n('r7g+'),
        $t = n('PbQQ'),
        en = n('e5HP'),
        tn = n('JWUO'),
        nn = n('9VO7'),
        an = n('GBcw'),
        rn = n('jV+4'),
        on = n('ir4X'),
        ln = n('aA1u'),
        sn = n('kY28'),
        cn = n('6nXH')
      function dn(e, t, n) {
        var a,
          r = Kt.a.getOriginalTweet(e),
          i = null == r || null === (a = r.entities) || void 0 === a ? void 0 : a.hashtags
        if (Array.isArray(i) && !(i.length < 1)) {
          var o = i[0]
          return n &&
            (function (e) {
              var t = Kt.a.getOriginalTweet(e),
                n = t.extended_entities && t.extended_entities.media
              return (
                !!(n && n.length > 0) &&
                n.some(function (e) {
                  return 'animated_gif' === e.type
                })
              )
            })(e) &&
            t.isTrue('responsive_web_hashtag_highlight_is_enabled')
            ? o.text
            : void 0
        }
      }
      function un(e, t) {
        if (e && t.isTrue('responsive_web_hashtag_highlight_show_avatar')) return e.profile_image_url_https
      }
      n('yH/f')
      var pn = n('9B+1'),
        mn = n('YICZ'),
        hn = n('21zW'),
        fn = n('8bWS'),
        vn = K.a.gf5e9ea6,
        gn = K.a.e2f2b658,
        yn = Object.freeze({
          see_more: K.a.ffd9cfe6,
          discover_more: K.a.d172116a,
          more: K.a.h63a5c3b,
          more_tweets: K.a.iac074c3,
          more_suggestions: K.a.g11ebd34,
          browse: K.a.g4a69019,
          browse_tweets: K.a.b1abb17d,
        })
      var bn = function (e) {
          var t = e.onUndoTopicNotInterestedClick
          return C.a.createElement(
            x.a,
            { style: Cn.tombstone },
            C.a.createElement(ne.a, { actionText: vn, children: gn, inline: !0, onClick: t }),
          )
        },
        _n = Object(S.a)(function (e) {
          var t = e.analytics,
            n = e.bannerText,
            a = e.label,
            r = e.link,
            i = e.linkText,
            o = e.onNotInterestedPress,
            l = e.topic,
            s = e.withRightControl,
            c = n && '' === n.text,
            d = i && '' === i.text,
            u = !d,
            p = !(c || d)
          return C.a.createElement(
            x.a,
            { style: Cn.topicActions },
            p && C.a.createElement(hn.a, null),
            u &&
              C.a.createElement(
                k.b,
                {
                  color: 'primary',
                  link: r,
                  onClick: function () {
                    t.scribeAction('click')
                  },
                  size: 'subtext2',
                  weight: 'bold',
                },
                i ? C.a.createElement(E.a, i) : a,
              ),
            s
              ? C.a.createElement(
                  x.a,
                  { style: Cn.notInterestedButtonWrapper },
                  C.a.createElement(mn.a, {
                    onPress: o,
                    size: 'small',
                    topicId: l.id,
                    type: 'brandText',
                    withIconOnly: !0,
                  }),
                )
              : null,
          )
        }),
        wn = function (e) {
          var t = e.isExpanded,
            n = e.onNotInterestedPress,
            a = e.topic,
            r = a.following ? Cn.followingTopicButtonWrapper : Cn.followTopicButtonWrapper,
            i = [t && r, !t && Cn.followTopicButtonWrapperNotExpanded],
            o = t ? Cn.largeNotInterestedButtonWrapper : Cn.notInterestedButtonWrapper
          return C.a.createElement(
            x.a,
            { style: Cn.topicActions },
            t ? null : C.a.createElement(hn.a, { style: Cn.topicMiddot }),
            C.a.createElement(
              x.a,
              { style: i },
              C.a.createElement(de.a, {
                isTransparent: !t,
                showRelationshipChangeConfirmation: !0,
                size: t ? 'small' : 'xSmall',
                style: Cn.followTopicButton,
                textMode: ce.a.FollowTopic,
                topic: a,
              }),
            ),
            n || (t && !a.following)
              ? C.a.createElement(
                  x.a,
                  { style: o },
                  C.a.createElement(mn.a, {
                    onPress: n,
                    size: 'small',
                    topicId: a.id,
                    type: t ? 'primaryOutlined' : 'brandText',
                    withIconOnly: !t,
                  }),
                )
              : null,
          )
        }
      var Cn = P.a.create(function (e) {
          return {
            tombstone: { paddingBottom: e.componentDimensions.gutterVertical },
            iconStyle: {
              paddingBottom: 'calc('.concat(e.spaces.space2, ' + ').concat(e.spaces.space1, ')'),
              marginBottom: e.spaces.space4,
            },
            topicActions: { flexDirection: 'row', flexGrow: 1, alignItems: 'center', minHeight: e.spaces.space32 },
            topicMiddot: { alignSelf: 'center', paddingRight: 0 },
            followTopicButton: { marginTop: e.spaces.space1 },
            followTopicButtonWrapperNotExpanded: { marginBottom: e.spaces.space2 },
            followTopicButtonWrapper: { marginVertical: e.spaces.space4, paddingRight: e.spaces.space4, width: '50%' },
            followingTopicButtonWrapper: { marginVertical: e.spaces.space4, width: '100%' },
            notInterestedButtonWrapper: { alignItems: 'flex-end', flexGrow: 1 },
            largeNotInterestedButtonWrapper: {
              marginVertical: e.spaces.space4,
              paddingLeft: e.spaces.space4,
              width: '50%',
            },
          }
        }),
        En = n('0zXz'),
        Tn = n('fs1G'),
        xn = P.a.theme.aspectRatios.maxTimelineImage,
        Sn = P.a.theme.aspectRatios.minTimelineImage,
        In = K.a.f277e949,
        kn = K.a.ee79367a,
        Rn = K.a.a2a3824a,
        Ln = K.a.c14cdb18,
        Pn = K.a.e8adeec8,
        Mn = (function (e) {
          v()(n, e)
          var t = y()(n)
          function n() {
            var e
            d()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              _()(h()(e), '_defaultInlinePromptRef', C.a.createRef()),
              _()(h()(e), '_iconContainerRef', C.a.createRef()),
              _()(h()(e), 'state', { mediaAltTranslations: {} }),
              _()(h()(e), '_transformPromotedUrl', Ee.a.bind(null, e.context.featureSwitches)),
              _()(
                h()(e),
                '_isEdgeToEdgeEnabled',
                e.context.featureSwitches.isTrue('media_edge_to_edge_content_enabled'),
              ),
              _()(h()(e), '_getWithTopLine', function () {
                var t = e.props,
                  n = t.conversationTreeMetadata,
                  a = t.isFocal,
                  r = t.tweet,
                  i = Kt.a.getOriginalTweet(r),
                  o = e._getConversationPosition(),
                  l = e._getIsConversationStart(),
                  s = n && n.ancestorConnector,
                  c = n && n.indents,
                  d = (a && !!i.in_reply_to_status_id_str) || (o && !l)
                return c ? 'top' === s : d
              }),
              _()(h()(e), '_getWithBottomLine', function () {
                var t = e.props,
                  n = t.conversationTreeMetadata,
                  a = t.tweet,
                  r = Kt.a.getOriginalTweet(a),
                  i = e._getConversationPosition(),
                  o = n && n.indents,
                  l = n && n.descendantConnector,
                  s = i && !i.isEnd
                return o
                  ? l
                  : !(
                      !r.in_reply_to_status_id_str &&
                      'ancestor' !== (null == i ? void 0 : i.position) &&
                      e._isEdgeToEdgeEnabled
                    ) && s
              }),
              _()(h()(e), '_getFeatureConfigurationContextProviderValue', function () {
                var t = e.props,
                  n = t.onMediaHashtagHighlightClick,
                  a = t.promotedContent,
                  r = t.promotedContentAdvertiser,
                  i = t.tweet,
                  o = e.context.featureSwitches,
                  l = {
                    highlightedHashtag: function () {
                      return dn(i, o, Xt.a.isPromoted(a))
                    },
                    avatarURIForHashtagHighlight: function () {
                      return un(r, o)
                    },
                    shouldUseSmallFontForHashtagHighlight: function () {
                      return o.isTrue('responsive_web_hashtag_highlight_use_small_font')
                    },
                    onMediaHashtagHighlightClick: n,
                  },
                  c = {
                    c9sEnabled: function () {
                      return o.isTrue('c9s_enabled')
                    },
                    trustedFriendsEnabled: function () {
                      return o.isTrue('trusted_friends_consumption_enabled')
                    },
                  },
                  d = e._getWithTopLine(),
                  u = e._getWithBottomLine(),
                  p = !e.props.isFocal && (d || u)
                return s()(
                  s()(s()({}, l), c),
                  {},
                  {
                    withEdgeToEdgeContent: function () {
                      return !p && o.isTrue('media_edge_to_edge_content_enabled')
                    },
                    withEdgeToEdgeTweetAnatomy: function () {
                      return o.isTrue('media_edge_to_edge_content_enabled')
                    },
                    headsUpVariant: function () {
                      return o.getStringValue('conversational_safety_heads_up_treatment_A_enabled')
                    },
                    misinfoLabelRevampTweaksEnabled: function () {
                      return o.isTrue('responsive_web_misinfo_label_revamp_tweaks_enabled')
                    },
                    sensitiveMediaWarningsEnabled: function () {
                      return o.isTrue('sensitive_tweet_warnings_enabled')
                    },
                    tweetRendersPromotedContentBadgeBelowHeader: function () {
                      return o.isTrue('responsive_web_promoted_badge_below_header')
                    },
                    socialContextRefreshEnabled: function () {
                      return e.context.featureSwitches.isTrue(
                        'social_context_and_topic_context_refresh_alignment_enabled',
                      )
                    },
                  },
                )
              }),
              _()(h()(e), '_renderPromotedDetails', function (t) {
                var n = e.props,
                  a = n.onPoliticalSponsorWebsiteClick,
                  r = n.onPromotedDisclaimerLearnMoreClick,
                  i = n.onPromotedIndicatorClick,
                  o = n.promotedContent,
                  l = n.promotedContentAdvertiser,
                  s = n.tweet
                return r && a && i
                  ? C.a.createElement(Yt.a, {
                      onPoliticalSponsorWebsiteClick: a,
                      onPromotedDisclaimerLearnMoreClick: r,
                      onPromotedIndicatorClick: i,
                      promotedContent: o,
                      promotedContentAdvertiser: l,
                      style: An.promotedDetails,
                      testID: be,
                      tweet: s,
                      withCircleIcon: t,
                    })
                  : null
              }),
              _()(h()(e), '_getPromoteButtonOnPress', function (t) {
                var n = e.props,
                  a = n.onPromoteAgainButtonClick,
                  r = n.onPromoteButtonClick
                return 'EligibleWithPreviousCampaign' === t ? a : r
              }),
              _()(h()(e), '_renderBirdwatchPivot', function () {
                var t = e.props,
                  n = t.tweet,
                  a = t.withBirdwatchPivots,
                  r = Kt.a.getOriginalTweet(n)
                return r.birdwatch_pivot &&
                  a &&
                  e.context.featureSwitches.isTrue('responsive_web_birdwatch_pivots_enabled')
                  ? C.a.createElement(W, r.birdwatch_pivot)
                  : null
              }),
              _()(h()(e), '_renderModeratedRepliesIcon', function () {
                var t = e.props,
                  n = t.hasModeratedReplies,
                  a = t.onModeratedIconClick,
                  r = t.tweet
                return n ? C.a.createElement(Qt.a, { link: ''.concat(r.permalink, '/hidden'), onPress: a }) : null
              }),
              _()(h()(e), '_renderBirdwatchNotesIcon', function () {
                var t = e.props,
                  n = t.onBirdwatchNotesIconClick,
                  a = t.onBirdwatchNotesIconShown,
                  r = t.tweet
                return !(
                  r.birdwatch_pivot &&
                  !0 ===
                    e.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_birdwatch_pivots_enabled')
                ) &&
                  r.has_birdwatch_notes &&
                  e.context.featureSwitches.isTrue('responsive_web_birdwatch_consumption_enabled') &&
                  e.context.featureSwitches.isTrue('responsive_web_birdwatch_contribution_enabled')
                  ? C.a.createElement(Qe, { onPress: n, onShow: a, tweetId: r.id_str })
                  : null
              }),
              _()(h()(e), '_getUsernameStackedLayoutEnabled', function () {
                return e.props.isFocal || e._isEdgeToEdgeEnabled
              }),
              _()(h()(e), '_handleSocialContextClick', function () {
                var t = e.props,
                  n = t.saveAsRecentSearch,
                  a = t.shouldStoreTypeaheadItem,
                  r = t.socialContext
                if (n && r && a && a(Ce.a.ItemType.USER)) {
                  var i,
                    o = (null === (i = r.landingUrl) || void 0 === i ? void 0 : i.url.match(J.A.id)) || '',
                    l = r.text || ''
                  n({ topic: { id: o && o[0], name: l, description: Rn, type: se.a.Topic } })
                }
              }),
              _()(h()(e), '_renderTweetTextHWTweet', function (t) {
                var n = e.props,
                  a = n.excludeCardUrl,
                  r = n.hitHighlights,
                  i = n.isFocal,
                  l = n.linkify,
                  c = n.onEntityClick,
                  d = n.tweet,
                  u = n.tweetTextSize,
                  p = n.withCardLinks,
                  m = n.withInlineMedia,
                  h = n.withQuotedTweetLinks,
                  f = Kt.a.getOriginalTweet(d),
                  v = Kt.a.hasInteractiveText(f),
                  g = u || (v ? 'title4' : t.size),
                  y = e.context.featureSwitches.isTrue('tweet_translation_timeline_enabled'),
                  b = s()(
                    s()({}, t),
                    {},
                    {
                      excludeCardUrl: a,
                      hitHighlights: r,
                      linkify: l,
                      onEntityClick: c,
                      size: g,
                      style: v && An.interactiveHighlightSpacer,
                      transformUrl: e._transformUrl,
                      unmentionedUserIds: f.unmentioned_user_ids,
                      weight: v ? 'heavy' : void 0,
                      withCardLinks: p,
                      withMediaLinks: !m,
                      withQuoteLinks: h || Kt.a.isQuotedTweetUnavailable(f),
                      withUnicodeEmojis: X.b,
                    },
                  )
                return C.a.createElement(
                  Rt,
                  null,
                  y
                    ? C.a.createElement(
                        Ge,
                        o()({}, b, {
                          disableTranslation: f.user.protected,
                          lang: f.lang,
                          onMediaTranslation: e._handleMediaTranslations,
                          supplementalLang: f.supplemental_language,
                          text: f.text,
                          tweetId: f.id_str,
                          withOriginalText: i,
                        }),
                      )
                    : C.a.createElement(Be.a, b),
                )
              }),
              _()(h()(e), '_renderTweetText', function (t) {
                var n = e.props,
                  a = n.excludeCardUrl,
                  r = n.hitHighlights,
                  i = n.isFocal,
                  o = n.linkify,
                  l = n.onEntityClick,
                  s = n.tweet,
                  c = n.tweetTextSize,
                  d = n.withCardLinks,
                  u = n.withInlineMedia,
                  p = n.withQuotedTweetLinks,
                  m = Kt.a.getOriginalTweet(s),
                  h = Kt.a.hasInteractiveText(m),
                  f = c || (i || h ? 'title4' : 'body'),
                  v = e.context.featureSwitches.isTrue('tweet_translation_timeline_enabled')
                return C.a.createElement(
                  Rt,
                  null,
                  i || v
                    ? C.a.createElement(Ge, {
                        disableTranslation: m.user.protected,
                        displayTextRange: m.display_text_range,
                        enrichments: m.enrichments,
                        entities: m.entities,
                        excludeCardUrl: a,
                        hitHighlights: i ? void 0 : r,
                        lang: m.lang,
                        linkify: !!i || o,
                        nativeID: t,
                        onEntityClick: l,
                        onMediaTranslation: e._handleMediaTranslations,
                        quotedTweetId: m.quoted_status && m.quoted_status.id_str,
                        quotedTweetPermalink: m.quoted_status_permalink,
                        size: f,
                        style: i ? An.expandedTweetText : h && An.interactiveHighlightSpacer,
                        supplementalLang: m.supplemental_language,
                        text: m.text,
                        transformUrl: e._transformUrl,
                        tweetId: m.id_str,
                        unmentionedUserIds: m.unmentioned_user_ids,
                        weight: h ? 'heavy' : void 0,
                        withCardLinks: i ? void 0 : d,
                        withMediaLinks: i ? void 0 : !u,
                        withOriginalText: i,
                        withQuoteLinks: (!i && p) || Kt.a.isQuotedTweetUnavailable(m),
                        withUnicodeEmojis: X.b,
                      })
                    : C.a.createElement(Be.a, {
                        displayTextRange: m.display_text_range,
                        enrichments: m.enrichments,
                        entities: m.entities,
                        excludeCardUrl: a,
                        hitHighlights: r,
                        lang: m.lang,
                        linkify: o,
                        nativeID: t,
                        onEntityClick: e.props.onEntityClick,
                        quotedTweetId: m.quoted_status && m.quoted_status.id_str,
                        quotedTweetPermalink: m.quoted_status_permalink,
                        size: f,
                        style: h && An.interactiveHighlightSpacer,
                        text: m.text,
                        transformUrl: e._transformUrl,
                        unmentionedUserIds: m.unmentioned_user_ids,
                        weight: h ? 'heavy' : void 0,
                        withCardLinks: d,
                        withMediaLinks: !u,
                        withQuoteLinks: p || Kt.a.isQuotedTweetUnavailable(m),
                        withUnicodeEmojis: X.b,
                      }),
                )
              }),
              _()(h()(e), '_handleMediaTranslations', function (t) {
                e.setState({ mediaAltTranslations: t })
              }),
              _()(h()(e), '_transformUrl', function (t) {
                var n
                return e._transformPromotedUrl(
                  t,
                  null === (n = e.props.promotedContent) || void 0 === n ? void 0 : n.click_tracking_info,
                )
              }),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.conversationTreeMetadata,
                    a = t.forwardPivotInfo,
                    i = t.hideConversationControlsEducationText,
                    l = t.hideExclusivityInfoEducationTextInReplies,
                    c = t.hideTrustedFriendsEducationTextInReplies,
                    d = t.isFocal,
                    u = t.loggedInUser,
                    p = t.onBlur,
                    m = t.onClick,
                    h = t.onFocus,
                    f = t.promotedContent,
                    v = t.quotedTweetTombstoneInfo,
                    g = t.readerModeAvailable,
                    y = t.renderCurationActionMenu,
                    b = t.showConversationHeadsUp,
                    _ = t.socialContext,
                    w = t.to,
                    E = t.tweet,
                    T = t.withReaderModeBottomBar,
                    S = t.withTimestamp,
                    I = t.withTimestampLink,
                    R = t.withUnreadStyles,
                    M = Kt.a.getOriginalTweet(E),
                    A = M.has_super_follower,
                    D = M.quick_promote_eligibility,
                    O = M.user,
                    F = null == D ? void 0 : D.eligibility,
                    B = this._getIsQuickPromoteEligible(F),
                    U = Xt.a.isPromoted(f),
                    N = !!U && this.context.featureSwitches.isTrue('responsive_web_promoted_badge_below_header'),
                    j = !!U && this.context.featureSwitches.isTrue('responsive_web_promoted_badge_use_circle_icon'),
                    H = !(!O.professional || !B),
                    V = 'IneligibleCampaignRunning' === F || 'IneligibleCampaignPaused' === F,
                    z = 'string' == typeof w ? { pathname: w } : w,
                    W = n && n.ancestorConnector,
                    q = n && n.indents,
                    K = this._getWithTopLine(),
                    X = this._getWithBottomLine(),
                    Y = K || X,
                    J = (Y && !d) || !this._isEdgeToEdgeEnabled,
                    Z = z ? s()(s()({}, z), {}, { anchorless: !0 }) : void 0,
                    ee = d ? 'detail' : 'inline'
                  return !d &&
                    this.context.featureSwitches.isTrue('responsive_web_consumes_horizon_web_tweet_in_timelines')
                    ? C.a.createElement(
                        Jt.b.Provider,
                        { value: this._getFeatureConfigurationContextProviderValue() },
                        C.a.createElement(
                          rt.a,
                          { forwardPivotInfo: a, tweet: E },
                          C.a.createElement(Zt.a, {
                            conversationTreeMetadata: n
                              ? { ancestorConnector: n.ancestorConnector, depth: n.depth, indents: n.indents }
                              : void 0,
                            link: G.canUseDOM ? Z : void 0,
                            onBlur: p,
                            onFocus: h,
                            onPress: m,
                            promotedContent: f,
                            quotedTweetTombstoneInfo: v,
                            renderActionMenu: y && G.canUseDOM ? y : En.a,
                            renderActionsBar: E.isPreview
                              ? function () {
                                  return C.a.createElement($, { previewTweetId: E.id_str })
                                }
                              : function (t) {
                                  return e._renderTweetActions({
                                    actionSize: t.actionSize,
                                    displayStyle: t.displayStyle,
                                    nativeID: t.nativeID,
                                    style: t.style,
                                    withCount: t.withCount,
                                    withAnalyticsAction: !0,
                                  })
                                },
                            renderEducation: function (t) {
                              return C.a.createElement(
                                C.a.Fragment,
                                null,
                                H &&
                                  C.a.createElement(
                                    L.a,
                                    {
                                      link: ''.concat(E.permalink, '/quick_promote_web/intro'),
                                      onPress: e._getPromoteButtonOnPress(F),
                                      style: An.promoteButton,
                                      type: 'primaryOutlined',
                                    },
                                    e._getPromoteButtonText(F),
                                  ),
                                C.a.createElement(
                                  lt,
                                  o()({}, t, {
                                    hideConversationControlsEducationText: !!i,
                                    hideExclusivityInfoEducationTextInReplies: !!l,
                                    hideTrustedFriendsEducationTextInReplies: !!c,
                                    loggedInUser: u,
                                  }),
                                ),
                                e.props.withReaderModeBottomBar
                                  ? C.a.createElement(x.a, { style: An.readerBottomBar })
                                  : null,
                              )
                            },
                            renderHighlightedUserLabel: function (t) {
                              var n
                              return 'AutomatedLabel' !==
                                (null === (n = t.label) || void 0 === n ? void 0 : n.userLabelType) ||
                                e.context.featureSwitches.isTrue('account_taxonomy_automated_label_enabled')
                                ? C.a.createElement(Zt.a.HighlightedUserLabel, t)
                                : null
                            },
                            renderPromotedIndicator: function (e) {
                              return C.a.createElement(Zt.a.PromotedIndicator, o()({}, e, { withCircleIcon: j }))
                            },
                            renderPromotionStatusBadge: V
                              ? function (t) {
                                  return C.a.createElement(pt, {
                                    nativeID: t.nativeID,
                                    status: e._getTweetPromotionStatus(F),
                                    style: An.promotionStatus,
                                  })
                                }
                              : function () {
                                  return null
                                },
                            renderReplyContext: function (t) {
                              return e._renderReplyContext({ nativeID: t.nativeID })
                            },
                            renderRichContent: function (t) {
                              return e._renderRichContent({ nativeID: t.nativeID, withRoundMediaCorners: J })
                            },
                            renderSelfThreadCTA: function () {
                              return e._renderSelfThreadCTA()
                            },
                            renderSocialContext: function (t) {
                              return e._renderSocialContext({ nativeID: t.nativeID })
                            },
                            renderText: function (t) {
                              return e._renderTweetTextHWTweet(t)
                            },
                            renderTimestamp: S
                              ? function (t) {
                                  return C.a.createElement(
                                    Zt.a.Timestamp,
                                    o()({}, t, {
                                      link: I ? t.link : void 0,
                                      nativeID: e._isEdgeToEdgeEnabled ? void 0 : t.nativeID,
                                    }),
                                  )
                                }
                              : En.a,
                            renderTombstone: function (t) {
                              return e._renderTombstoneHWTweet(t)
                            },
                            renderUserAvatar: function (t) {
                              return e._renderAvatar(t.nativeID)
                            },
                            renderUserName: function (t) {
                              return e._renderUserNameHWTweet(t)
                            },
                            socialContext: _
                              ? {
                                  contextType: _.contextType,
                                  isSelfRetweet: _.isSelfRetweet,
                                  link: _.landingUrl ? Object(Q.b)(_.landingUrl) : void 0,
                                  name: _.name,
                                  screenName: _.screenName,
                                  text: _.text,
                                }
                              : void 0,
                            staticLinkConfig: null,
                            testID: we,
                            tweet: E,
                            withBottomLine: X,
                            withTopLine: K,
                            withUnreadStyles: R,
                          }),
                        ),
                      )
                    : C.a.createElement($t.c.UseTweetA11yIds, { tweet: E }, function (t) {
                        var o = r()(t, 2),
                          s = o[0],
                          v = o[1],
                          _ = N
                            ? Kt.a.hasInteractiveText(M)
                              ? An.promotedIndicatorBelowHeaderWithInteractiveHighlights
                              : An.promotedIndicatorBelowHeader
                            : An.promotedIndicator,
                          w =
                            f && U
                              ? C.a.createElement(en.a, {
                                  contentAuthorId: O.id_str,
                                  nativeID: s.promotedLabel,
                                  promotedContent: f,
                                  style: _,
                                  withCircleIcon: j,
                                })
                              : null,
                          I = V
                            ? C.a.createElement(pt, {
                                nativeID: s.promotionStatusLabel,
                                status: e._getTweetPromotionStatus(F),
                                style: An.promotionStatus,
                              })
                            : null,
                          D = n
                            ? C.a.createElement(
                                k.b,
                                { nativeID: s.conversationLevel, style: P.a.visuallyHidden },
                                kn({ conversationTreeDepth: n.depth.toString() }),
                              )
                            : null,
                          B = M.tombstoneInfo || E.tombstoneInfo,
                          z = C.a.createElement(
                            C.a.Fragment,
                            null,
                            B ? e._renderTombstone(B) : null,
                            d || !B
                              ? C.a.createElement(
                                  C.a.Fragment,
                                  null,
                                  e._renderReplyContext({ nativeID: s.replyContext }),
                                  C.a.createElement(x.a, null, e._renderTweetText(s.text)),
                                  C.a.createElement(
                                    x.a,
                                    null,
                                    e._renderRichContent({ nativeID: s.richContent, withRoundMediaCorners: J }),
                                  ),
                                )
                              : null,
                          )
                        return C.a.createElement(
                          Jt.b.Provider,
                          { value: e._getFeatureConfigurationContextProviderValue() },
                          C.a.createElement(
                            rt.a,
                            { forwardPivotInfo: a, tweet: E },
                            C.a.createElement(
                              tn.a,
                              {
                                a11yDomIds: v,
                                actionMenu: y && G.canUseDOM ? y() : null,
                                avatar: e._renderAvatar(s.avatar),
                                footer: e._renderFooter(),
                                header: e._renderHeader(s),
                                indents: q,
                                link: d || !G.canUseDOM ? void 0 : Z,
                                onBlur: p,
                                onFocus: h,
                                onPress: m,
                                testID: we,
                                timestamp:
                                  U || e._getUsernameStackedLayoutEnabled() || !S
                                    ? null
                                    : e._renderTweetRelativeTimestamp(s.timestamp),
                                userFollowIndicators: A ? C.a.createElement(nn.a, { type: 'superFollower' }) : void 0,
                                userLabel: e._renderUserLabel(O, s.userLabel),
                                userName: e._renderUserName(s.username, s.timestamp),
                                withBottomLine: X,
                                withElbow: q ? 'side' === W : void 0,
                                withFooterGap: !d,
                                withFullWidthChildren: d || (!Y && e._isEdgeToEdgeEnabled),
                                withTopLine: K,
                                withUnreadStyles: R,
                              },
                              N && d ? e._renderPromotedDetails(j) : null,
                              N && !d ? w : null,
                              D,
                              z,
                              H &&
                                'inline' === ee &&
                                C.a.createElement(
                                  L.a,
                                  {
                                    link: ''.concat(E.permalink, '/quick_promote_web/intro'),
                                    onPress: e._getPromoteButtonOnPress(F),
                                    style: An.promoteButton,
                                    type: 'primaryOutlined',
                                  },
                                  e._getPromoteButtonText(F),
                                ),
                              e._renderFocalContent(N, H, I),
                              'inline' === ee &&
                                C.a.createElement(lt, {
                                  conversationControlLabelNativeID: s.conversationControlLabel,
                                  displayStyle: 'inline',
                                  exclusivityInfoLabelNativeID: s.exclusivityInfoLabel,
                                  hideConversationControlsEducationText: !!i,
                                  hideExclusivityInfoEducationTextInReplies: !!l,
                                  hideTrustedFriendsEducationTextInReplies: !!c,
                                  loggedInUser: u,
                                  trustedFriendsLabelNativeID: s.trustedFriendsLabel,
                                  tweet: E,
                                }),
                              E.isPreview
                                ? C.a.createElement($, { previewTweetId: E.id_str })
                                : e._renderTweetActions({
                                    actionSize: d ? 'large' : void 0,
                                    displayStyle: d ? 'block' : void 0,
                                    nativeID: s.actionsBar,
                                    style: [
                                      d ? An.actionBarFocalTweet : An.actionBar,
                                      d && !g && An.actionBarWithInlineReply,
                                    ],
                                    withAnalyticsAction: !d,
                                    withCount: !d,
                                  }),
                              e._renderReaderModeButton(),
                              N || d ? null : w,
                              d ? null : I,
                              'detail' === ee &&
                                C.a.createElement(lt, {
                                  conversationControlLabelNativeID: s.conversationControlLabel,
                                  displayStyle: 'detail',
                                  exclusivityInfoLabelNativeID: s.exclusivityInfoLabel,
                                  hideConversationControlsEducationText: !!i,
                                  hideExclusivityInfoEducationTextInReplies: !!l,
                                  hideTrustedFriendsEducationTextInReplies: !!c,
                                  loggedInUser: u,
                                  showConversationHeadsUp: b,
                                  trustedFriendsLabelNativeID: s.trustedFriendsLabel,
                                  tweet: E,
                                }),
                              T ? C.a.createElement(x.a, { style: An.readerBottomBar }) : null,
                            ),
                          ),
                        )
                      })
                },
              },
              {
                key: '_renderTweetRelativeTimestamp',
                value: function (e) {
                  var t = this.props,
                    n = t.promotedContent,
                    a = t.tweet,
                    r = t.withTimestampLink,
                    i = Kt.a.getOriginalTweet(a)
                  return C.a.createElement(an.a, {
                    link: r
                      ? { pathname: i.permalink, state: { contextTweetId: i.id_str, promotedContent: n } }
                      : void 0,
                    nativeID: e,
                    timestamp: i.created_at,
                  })
                },
              },
              {
                key: '_renderUserNameHWTweet',
                value: function (e) {
                  var t = this.props,
                    n = t.onAvatarClick,
                    a = t.onScreenNameClick,
                    r = t.tweet,
                    i = t.withUserHoverCard,
                    l = t.withUserName,
                    s = Kt.a.getOriginalTweet(r).user
                  return l
                    ? C.a.createElement(
                        Zt.a.UserName,
                        o()({}, e, {
                          onAvatarClick: n,
                          onLinkClick: a,
                          onScreenNameClick: a,
                          withHoverCard: i && !s.blocking,
                          withLink: !!a,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderUserName',
                value: function (e, t) {
                  var n = this.props,
                    a = n.isFocal,
                    r = n.onAvatarClick,
                    i = n.onScreenNameClick,
                    o = n.promotedContent,
                    l = n.tweet,
                    s = n.withUserHoverCard,
                    c = n.withUserName,
                    d = Kt.a.getOriginalTweet(l).user,
                    u = Xt.a.isPromoted(o)
                  return c
                    ? C.a.createElement(rn.a, {
                        isProtected: d.protected,
                        isVerified: d.verified,
                        name: d.name,
                        nativeID: e,
                        onAvatarClick: r,
                        onLinkClick: i,
                        onScreenNameClick: i,
                        promotedContent: o,
                        screenName: d.screen_name,
                        screenNameSuffix:
                          u || a || !this._isEdgeToEdgeEnabled ? null : this._renderTweetRelativeTimestamp(),
                        withHoverCard: s && !d.blocking,
                        withLink: !!i,
                        withStackedLayout: this._getUsernameStackedLayoutEnabled(),
                      })
                    : null
                },
              },
              {
                key: '_renderUserLabel',
                value: function (e, t) {
                  var n = e.highlightedLabel,
                    a = 'AutomatedLabel' === (null == n ? void 0 : n.userLabelType),
                    r = !!a && this.context.featureSwitches.isTrue('account_taxonomy_automated_label_enabled')
                  return !n || (a && !r) ? null : C.a.createElement(on.a, { label: n, nativeID: t })
                },
              },
              {
                key: '_renderFocalContent',
                value: function (e, t, n) {
                  var a = this.props,
                    r = a.isFocal,
                    i = a.onAnalyticsClick,
                    o = a.tweet,
                    l = Kt.a.getOriginalTweet(o),
                    s = l.created_at,
                    c = l.place,
                    d = l.quick_promote_eligibility,
                    u = l.source,
                    p = l.source_name,
                    m = null == d ? void 0 : d.eligibility,
                    h = this.context.featureSwitches.isTrue('responsive_web_reactions_enabled')
                  return r
                    ? C.a.createElement(
                        C.a.Fragment,
                        null,
                        C.a.createElement(
                          x.a,
                          { style: An.footerContainer },
                          C.a.createElement(
                            x.a,
                            { style: An.footerContent },
                            C.a.createElement(ln.a, {
                              linkColor: 'gray700',
                              place: c && c.full_name,
                              placeLink: c && c.id ? '/places/'.concat(c.id) : void 0,
                              source: u && p ? p : void 0,
                              sourceLink: 'https://help.twitter.com/using-twitter/how-to-tweet#source-labels',
                              style: An.timeLocSource,
                              timestamp: s,
                              timestampLink: l.permalink,
                            }),
                            C.a.createElement(
                              x.a,
                              { style: An.footerIcons },
                              this._renderModeratedRepliesIcon(),
                              this._renderBirdwatchNotesIcon(),
                            ),
                          ),
                          e ? null : this._renderPromotedDetails(),
                          n,
                        ),
                        C.a.createElement(at, {
                          endControl: t
                            ? C.a.createElement(
                                L.a,
                                {
                                  link: ''.concat(o.permalink, '/quick_promote_web/intro'),
                                  onPress: this._getPromoteButtonOnPress(m),
                                  style: An.tweetActivityPromoteButton,
                                  type: 'primaryFilled',
                                },
                                this._getPromoteButtonText(m),
                              )
                            : null,
                          loggedInUserId: this.context.loggedInUserId,
                          onAnalyticsClick: i,
                          tweet: l,
                        }),
                        C.a.createElement(It, {
                          isNonCompliantTweet: 'non_compliant' === l.limited_actions,
                          tweetId: l.id_str,
                          tweetLikeCount: l.favorite_count,
                          tweetPermalink: l.permalink,
                          tweetQuoteTweetCount: l.quote_count,
                          tweetReactionCount: l.reaction_count,
                          tweetRetweetCount: l.retweet_count,
                          withReactions: h,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderFooter',
                value: function () {
                  var e = this.props,
                    t = e.isFocal,
                    n = e.topic,
                    a = e.topicFollowPrompt
                  return C.a.createElement(
                    C.a.Fragment,
                    null,
                    this._renderSelfThreadCTA(),
                    !t && n && a && this.context.featureSwitches.isTrue('topics_context_controls_inline_prompt_enabled')
                      ? me({ defaultRef: this._defaultInlinePromptRef, topic: n, topicFollowPrompt: a })
                      : null,
                  )
                },
              },
              {
                key: '_renderHeader',
                value: function (e) {
                  var t = this.props,
                    n = t.isFocal,
                    a = t.topic,
                    r = t.topicFollowPrompt
                  return C.a.createElement(
                    C.a.Fragment,
                    null,
                    n && r && a && this.context.featureSwitches.isTrue('topics_context_controls_inline_prompt_enabled')
                      ? me({ defaultRef: this._defaultInlinePromptRef, topic: a, topicFollowPrompt: r })
                      : this._renderSocialContext({ nativeID: e.socialContext }),
                  )
                },
              },
              {
                key: '_renderSelfThreadCTA',
                value: function () {
                  var e = this.props,
                    t = e.onSelfThreadClick,
                    n = e.onSelfThreadImpression,
                    a = e.tweet,
                    r = Kt.a.getOriginalTweet(a),
                    i = this._shouldShowSelfThreadWithAvatar()
                  return this._shouldShowSelfThread()
                    ? C.a.createElement(fe.a, {
                        avatarUrl: i ? r.user.profile_image_url_https : void 0,
                        onClick: t,
                        onImpression: n,
                        style: An.selfThreadCTA,
                        to: a.permalink,
                        userName: r.user.screen_name,
                        withConversationLine: i,
                      })
                    : null
                },
              },
              {
                key: '_shouldShowSelfThread',
                value: function () {
                  var e = this.props,
                    t = e.conversationPosition,
                    n = e.tweet,
                    a = e.withSelfThread,
                    r = Kt.a.getOriginalTweet(n)
                  return a && !t && r.self_thread && !n.isPreview
                },
              },
              {
                key: '_shouldShowSelfThreadWithAvatar',
                value: function () {
                  var e = this.props,
                    t = e.shouldSelfThreadIncludeAvatar,
                    n = e.tweet,
                    a = Kt.a.getOriginalTweet(n)
                  return this._shouldShowSelfThread() && t && !a.in_reply_to_status_id_str
                },
              },
              {
                key: '_getConversationPosition',
                value: function () {
                  return this._shouldShowSelfThreadWithAvatar()
                    ? { isStart: !0, isEnd: !1 }
                    : this.props.conversationPosition
                },
              },
              {
                key: '_getIsConversationStart',
                value: function () {
                  var e = this.props.tweet,
                    t = this._getConversationPosition(),
                    n = Kt.a.getOriginalTweet(e)
                  return t && (t.isStart || !n.in_reply_to_status_id_str)
                },
              },
              {
                key: '_getIsQuickPromoteEligible',
                value: function (e) {
                  switch (e) {
                    case 'Eligible':
                    case 'EligibleWithPreviousCampaign':
                      return !0
                    default:
                      return !1
                  }
                },
              },
              {
                key: '_getPromoteButtonText',
                value: function (e) {
                  switch (e) {
                    case 'Eligible':
                      return Ln
                    case 'EligibleWithPreviousCampaign':
                      return Pn
                    default:
                      return (
                        Object(he.a)(
                          new Error(
                            'Tweet promote button should never render when quick promote eligibility is '.concat(
                              e || 'null',
                            ),
                          ),
                          { level: 'warning' },
                        ),
                        Ln
                      )
                  }
                },
              },
              {
                key: '_getTweetPromotionStatus',
                value: function (e) {
                  switch (e) {
                    case 'IneligibleCampaignRunning':
                      return 'in-progress'
                    case 'IneligibleCampaignPaused':
                      return 'paused'
                    default:
                      return (
                        Object(he.a)(
                          new Error(
                            'Tweet promotion badge should never render when quick promote eligibility is '.concat(
                              e || 'null',
                            ),
                          ),
                          { level: 'warning' },
                        ),
                        'in-progress'
                      )
                  }
                },
              },
              {
                key: '_renderSocialContext',
                value: function (e) {
                  var t = e.nativeID,
                    n = this.props,
                    a = n.conversationPosition,
                    r = n.injectedFeedbackItem,
                    i = n.isFocal,
                    l = n.onUndoTopicNotInterestedClick,
                    s = n.promotedContent,
                    c = n.socialContext,
                    d = n.topic
                  if (!n.withSocialContext || !c || Xt.a.isPromoted(s)) return null
                  var u = this.context.featureSwitches,
                    p = a && !this._getIsConversationStart(),
                    m = c.contextType,
                    h = c.isSelfRetweet,
                    f = c.landingUrl,
                    v = c.name,
                    g = c.screenName,
                    y = c.text,
                    b = c.topicContext,
                    _ = f ? Object(Q.b)(f) : void 0
                  if (
                    b &&
                    d &&
                    (function (e) {
                      var t = e.featureSwitches,
                        n = e.isExpanded,
                        a = e.topic,
                        r = e.topicContext
                      return (
                        Object(fn.c)(r) &&
                        n &&
                        a.not_interested &&
                        (!(t.getStringValue('topics_context_controls_implicit_variation') in yn) ||
                          t.isTrue('topics_context_controls_implicit_context_x_enabled'))
                      )
                    })({ featureSwitches: u, isExpanded: i, topic: d, topicContext: b })
                  )
                    return C.a.createElement(bn, { onUndoTopicNotInterestedClick: l })
                  var w = {
                      contextType: m,
                      iconSize: 'large',
                      withLeftPadding: this.context.featureSwitches.isTrue(
                        'social_context_and_topic_context_refresh_alignment_enabled',
                      )
                        ? p || !1
                        : !p && !i,
                      text: y,
                    },
                    T =
                      b && d
                        ? (function (e) {
                            var t,
                              n = e.featureSwitches,
                              a = e.iconSize,
                              r = e.injectedFeedbackItem,
                              i = e.isExpanded,
                              o = e.socialContext,
                              l = e.topic,
                              s = e.withLeftPadding,
                              c = o.contextType,
                              d = o.landingUrl,
                              u = o.topicContext,
                              p = d ? Object(Q.b)(d) : void 0,
                              m = u && Object(fn.b)(u),
                              h = u && Object(fn.c)(u),
                              f = n.isTrue('media_edge_to_edge_content_enabled'),
                              v = f ? ge.a.TextOnly : ge.a.Topic,
                              g =
                                null == r || null === (t = r.markNotInterestedTopic) || void 0 === t
                                  ? void 0
                                  : t.onClick,
                              y = u ? Object(pn.a)(u) : void 0,
                              b = null != u && u.bannerText ? C.a.createElement(E.a, u.bannerText) : o.text
                            if (m && n.getStringValue('topics_context_controls_followed_variation') in yn) {
                              var _ = yn[n.getStringValue('topics_context_controls_followed_variation')]
                              return {
                                iconSize: a,
                                contextType: v,
                                rightControl: C.a.createElement(_n, {
                                  bannerText: o.topicContext && o.topicContext.bannerText,
                                  label: _,
                                  link: p,
                                  linkText: o.topicContext && o.topicContext.linkText,
                                  topic: l,
                                }),
                                withBottomBorder: !1,
                                withLeftPadding: !(
                                  n.isTrue('social_context_and_topic_context_refresh_alignment_enabled') || f
                                ),
                                topicData: y,
                                text: b,
                              }
                            }
                            if (h) {
                              if (n.getStringValue('topics_context_controls_implicit_variation') in yn) {
                                var w,
                                  T = yn[n.getStringValue('topics_context_controls_implicit_variation')]
                                return {
                                  iconSize: a,
                                  contextType: v,
                                  rightControl: C.a.createElement(_n, {
                                    bannerText: o.topicContext && o.topicContext.bannerText,
                                    label: T,
                                    link: p,
                                    linkText: null === (w = o.topicContext) || void 0 === w ? void 0 : w.linkText,
                                    onNotInterestedPress: g,
                                    topic: l,
                                    withRightControl: n.isTrue('topics_context_controls_implicit_context_x_enabled'),
                                  }),
                                  topicData: y,
                                  text: b,
                                  withBottomBorder: !1,
                                  withLeftPadding: !(
                                    n.isTrue('social_context_and_topic_context_refresh_alignment_enabled') || f
                                  ),
                                }
                              }
                              var x = C.a.createElement(wn, { isExpanded: i, onNotInterestedPress: g, topic: l })
                              return i
                                ? {
                                    bottomControl: x,
                                    contextType: c,
                                    iconSize: 'xLarge',
                                    iconStyle: Cn.iconStyle,
                                    textColor: 'text',
                                    textSize: 'headline1',
                                    text: o.text,
                                    topicData: void 0,
                                    withBottomBorder: !0,
                                    withLeftPadding: s,
                                  }
                                : {
                                    contextType: c,
                                    iconSize: a,
                                    iconStyle: Cn.iconStyle,
                                    rightControl: x,
                                    topicData: y,
                                    text: o.text,
                                    withBottomBorder: !0,
                                    withLeftPadding: s,
                                  }
                            }
                            return { contextType: c, iconSize: a, text: o.text, withLeftPadding: s }
                          })({
                            featureSwitches: u,
                            iconSize: w.iconSize,
                            injectedFeedbackItem: r,
                            isExpanded: i,
                            socialContext: c,
                            topic: d,
                            withLeftPadding: w.withLeftPadding,
                          })
                        : w
                  return C.a.createElement(
                    ve.a,
                    o()({}, T, {
                      link: _,
                      nativeID: t,
                      onClick: m === ge.a.Topic ? this._handleSocialContextClick : void 0,
                      retweetData: { name: v, screenName: g, isSelfRetweet: h },
                      style: An.socialContext,
                      testID: _e,
                      weight: 'bold',
                    }),
                  )
                },
              },
              {
                key: '_renderReplyContext',
                value: function (e) {
                  var t,
                    n = e.nativeID,
                    a = this.props,
                    r = a.conversationPosition,
                    i = a.conversationTreeMetadata,
                    o = a.isFocal,
                    l = a.onReplyContextClick,
                    s = a.replyContext,
                    c = a.tweet,
                    d = Kt.a.getOriginalTweet(c),
                    u = d.self_thread
                  return this._shouldShowSelfThread() ||
                    s !== sn.a.ReplyContextTypes.Isolated ||
                    !d.in_reply_to_status_id_str ||
                    (i && !o) ||
                    (u && r && !r.isStart) ||
                    (u && o)
                    ? null
                    : C.a.createElement(sn.a, {
                        displayTextRange: d.display_text_range,
                        inReplyToName: d.in_reply_to_name,
                        inReplyToScreenName: d.in_reply_to_screen_name,
                        inReplyToStatusIdStr: d.in_reply_to_status_id_str,
                        inReplyToUserIdStr: d.in_reply_to_user_id_str,
                        nativeID: n,
                        onClick: l,
                        style: [An.replyContext, o && An.replyContextBig],
                        tweetPermalink: d.permalink,
                        unmentionedUserIds: d.unmentioned_user_ids,
                        userMentionsEntities: null === (t = d.entities) || void 0 === t ? void 0 : t.user_mentions,
                      })
                },
              },
              {
                key: '_renderReaderModeButton',
                value: function () {
                  var e = this.props,
                    t = e.readerModeAvailable,
                    n = e.tweet
                  return t
                    ? C.a.createElement(
                        x.a,
                        { style: An.actionBarWithInlineReply },
                        C.a.createElement(le.a, { focalTweet: n, isExpanded: !0, readerModeAvailable: !!t }),
                      )
                    : null
                },
              },
              {
                key: '_renderTweetActions',
                value: function (e) {
                  var t = e.actionSize,
                    n = e.displayStyle,
                    a = e.nativeID,
                    r = e.style,
                    i = e.withAnalyticsAction,
                    o = e.withCount,
                    l = this.props,
                    s = l.allowDownvote,
                    c = l.bookmarkFolderId,
                    d = l.contextTweet,
                    u = l.enableKeyboardShortcuts,
                    p = l.forwardPivotInfo,
                    m = l.onLikeSuccess,
                    h = l.onReplyPress,
                    f = l.promotedContent,
                    v = l.tweet,
                    g = l.withActionsDisabled,
                    y = l.withRemoveFromBookmarks
                  return this.props.withActions
                    ? C.a.createElement(Je.a, {
                        actionSize: t,
                        allowDownvote: s,
                        bookmarkFolderId: c,
                        displayStyle: n,
                        enableKeyboardShortcuts: u,
                        forwardPivotInfo: v.softIntervention || p,
                        likeActionIconContainerRef: this._iconContainerRef,
                        nativeID: a,
                        onLikeSuccess: m,
                        onReplyPress: h,
                        promotedContent: f,
                        style: r,
                        tweet: d || v,
                        withActionsDisabled: g,
                        withAnalyticsAction: i,
                        withCount: o,
                        withRemoveFromBookmarks: y,
                      })
                    : null
                },
              },
              {
                key: '_renderAvatar',
                value: function (e) {
                  var t = this.props,
                    n = t.onAvatarClick,
                    a = t.onScreenNameClick,
                    r = t.promotedContent,
                    i = t.tweet,
                    o = t.withAvatarLink,
                    l = t.withUserAvatar,
                    s = t.withUserHoverCard,
                    c = t.withUserPresence,
                    d = Kt.a.getOriginalTweet(i).user,
                    u = Kt.a.getOriginalTweet(i).user.id_str
                  return l
                    ? C.a.createElement(Gt, {
                        avatarRef: this._defaultInlinePromptRef,
                        nativeID: e,
                        onClick: n,
                        onHoverCardScreenNameClick: a,
                        promotedContent: r,
                        screenName: d.screen_name,
                        uri: d.profile_image_url_https,
                        userId: u,
                        withHoverCard: s && !d.blocking,
                        withLink: o,
                        withNftAvatar: d.has_nft_avatar,
                        withUserPresence: c,
                      })
                    : null
                },
              },
              {
                key: '_renderTombstoneHWTweet',
                value: function (e) {
                  var t = e.actionLink,
                    n = e.actionText,
                    a = e.children,
                    r = e.style,
                    i = this.props,
                    o = i.conversationTreeMetadata,
                    l = i.onClick
                  return C.a.createElement(
                    x.a,
                    { style: r },
                    C.a.createElement(
                      ne.a,
                      { actionLink: t, actionText: n, conversationTreeMetadata: o, inline: !0, onClick: l },
                      a,
                    ),
                  )
                },
              },
              {
                key: '_renderTombstone',
                value: function (e) {
                  var t = this.props,
                    n = t.conversationTreeMetadata,
                    a = t.isFocal,
                    r = t.onClick,
                    i = t.tweet,
                    o = Kt.a.getOriginalTweet(i),
                    l = e.richText
                  return o && e && l
                    ? C.a.createElement(
                        x.a,
                        { style: An.spacingVertical },
                        C.a.createElement(
                          ne.a,
                          {
                            actionLink: a ? void 0 : o.permalink,
                            actionText: a ? void 0 : In,
                            conversationTreeMetadata: n,
                            inline: !0,
                            onClick: a ? void 0 : r,
                          },
                          C.a.createElement(E.a, { entities: l.entities, rtl: l.rtl, text: l.text }),
                        ),
                      )
                    : null
                },
              },
              {
                key: '_hasPhoto',
                value: function () {
                  var e = this.props.tweet,
                    t = Kt.a.getOriginalTweet(e),
                    n = t.extended_entities && t.extended_entities.media
                  return (
                    !!(n && n.length > 0) &&
                    n.some(function (e) {
                      return 'photo' === e.type
                    })
                  )
                },
              },
              {
                key: '_quoteTweetHasPhoto',
                value: function () {
                  var e = this.props.tweet,
                    t = Kt.a.getOriginalTweet(e)
                  return !!(
                    t.quoted_status &&
                    t.quoted_status.entities &&
                    t.quoted_status.entities.media &&
                    t.quoted_status.entities.media.length > 0 &&
                    t.quoted_status.entities.media.some(function (e) {
                      return 'photo' === e.type
                    })
                  )
                },
              },
              {
                key: '_renderRichContent',
                value: function (e) {
                  var t = e.nativeID,
                    n = e.withRoundMediaCorners,
                    a = this.context.featureSwitches,
                    r = this.props.withActionsDisabled,
                    i = this.props,
                    o = i.enableKeyboardShortcuts,
                    l = i.forwardPivotInfo,
                    s = i.inlineCalloutInfo,
                    c = i.innerForwardPivotInfo,
                    d = i.isFocal,
                    u = i.linkableQuotedTweet,
                    p = i.onCardLinkClick,
                    m = i.onMediaClick,
                    h = i.onQuoteTweetClick,
                    f = i.preventVideoPlayback,
                    v = i.promotedContent,
                    g = i.quoteTweetSocialContextProps,
                    y = i.quotedTweetTombstoneInfo,
                    b = i.tweet,
                    _ = i.withCardLinks,
                    w = i.withInlineMedia,
                    E = i.withUserHoverCard,
                    T = d ? 'DETAIL' : 'TIMELINE',
                    x = (this._hasPhoto() || this._quoteTweetHasPhoto()) && !!qt.b.isDesktopOS() && !d,
                    S = this.context.featureSwitches.isTrue('responsive_web_reactions_enabled'),
                    I = Kt.a.getOriginalTweet(b)
                  return (
                    (r = r || Object($e.b)(a, I, $e.a.VoteOnPoll)),
                    C.a.createElement(
                      C.a.Fragment,
                      null,
                      C.a.createElement(cn.a, {
                        cardCacheLocationKey: T,
                        displayMediaMetadata: d,
                        enableKeyboardShortcuts: o,
                        forwardPivotInfo: b.softIntervention || l,
                        inlineCalloutInfo: s,
                        innerForwardPivotInfo: c,
                        isMediaMaxHeightEnabled: x,
                        loggedInUserId: this.context.loggedInUserId,
                        mediaAltTranslations: this.state.mediaAltTranslations,
                        mediaCacheLocationKey: T,
                        nativeID: t,
                        onCardLinkClick: p,
                        onMediaClick: m,
                        onQuoteTweetClick: h,
                        preventVideoPlayback: f,
                        promotedContent: v,
                        quoteTweetSingleImageMinAspectRatio: Sn,
                        quoteTweetSocialContextProps: g,
                        quotedTweetTombstoneInfo: y,
                        renderQuoteTweetTombstone: function (e) {
                          return C.a.createElement(oe, e)
                        },
                        singleImageMaxAspectRatio: xn,
                        singleImageMinAspectRatio: d ? 0.1 : Sn,
                        tweet: b,
                        withActionsDisabled: r,
                        withAltTextBadge: this.context.featureSwitches.isTrue('responsive_web_alt_text_badge_enabled'),
                        withCardLinks: _,
                        withCenterCrop: !0,
                        withCondensedQuoteTweet: !d && Kt.a.hasMedia(I, !w),
                        withMediaTagsIcon: d,
                        withQuoteTweetHeaderLinks: !G.canUseDOM,
                        withQuoteTweetLink: u,
                        withQuoteTweetMedia: w,
                        withReactions: S,
                        withRoundMediaCorners: n,
                        withTweetMedia: w,
                        withUserHoverCard: E,
                      }),
                      this._renderBirdwatchPivot(),
                    )
                  )
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      _()(Mn, 'contextType', M.a),
        _()(Mn, 'displayName', 'Tweet'),
        _()(Mn, 'defaultProps', {
          displayBlocked: !1,
          isFocal: !1,
          linkify: !0,
          onBirdwatchNotesIconClick: Tn.a,
          onModeratedIconClick: Tn.a,
          onModeratedIconShown: Tn.a,
          replyContext: sn.a.ReplyContextTypes.Isolated,
          withActions: !1,
          withAvatarLink: !0,
          withBirdwatchPivots: !0,
          withCardLinks: !1,
          withInlineMedia: !0,
          withQuotedTweetLinks: !1,
          withRemoveFromBookmarks: !1,
          withSocialContext: !1,
          withTimestampLink: !0,
          withUserHoverCard: !0,
          withUserAvatar: !0,
          withUserName: !0,
          withTimestamp: !0,
        })
      var An = P.a.create(function (e) {
        return {
          replyContextBig: { marginTop: e.spaces.space12, marginBottom: 0 },
          replyContext: { marginBottom: e.spaces.space2 },
          selfThreadCTA: { marginHorizontal: 'calc(-1 * '.concat(e.componentDimensions.gutterHorizontal, ')') },
          innerRow: { alignItems: 'baseline', flexDirection: 'row', flexShrink: 1 },
          actionBar: { marginTop: e.spaces.space12 },
          actionBarFocalTweet: {
            borderTopColor: e.colors.borderColor,
            borderTopStyle: 'solid',
            borderTopWidth: e.borderWidths.small,
            height: e.spaces.space48,
          },
          actionsBarNarrow: { minWidth: 250, marginRight: 'auto' },
          actionBarWithInlineReply: {
            borderBottomColor: e.colors.borderColor,
            borderBottomStyle: 'solid',
            borderBottomWidth: e.borderWidths.small,
          },
          promoteButton: { marginTop: e.spaces.space12 },
          tweetActivityPromoteButton: { marginVertical: e.spaces.space8 },
          promotedIndicator: { marginTop: e.spaces.space12 },
          promotedIndicatorBelowHeader: { marginBottom: e.spaces.space8 },
          promotedIndicatorBelowHeaderWithInteractiveHighlights: { marginBottom: e.spaces.space4 },
          promotedDetails: { marginTop: e.spaces.space4 },
          promotionStatus: { marginTop: e.spaces.space12 },
          socialContext: { marginBottom: e.spaces.space4, marginTop: '-'.concat(e.spaces.space4) },
          spacingVertical: { marginVertical: e.spaces.space4 },
          followTopicButton: { justifyContent: 'center' },
          expandedTweetText: { marginTop: e.spaces.space12 },
          footerContainer: { marginVertical: e.spaces.space16 },
          footerContent: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
          footerIcons: { flexDirection: 'row' },
          interactiveHighlightSpacer: { marginTop: e.spaces.space8 },
          readerBottomBar: {
            borderBottomColor: e.colors.nestedBorderColor,
            borderBottomStyle: 'solid',
            borderBottomWidth: e.borderWidths.small,
            marginTop: e.spaces.space20,
            width: e.spaces.space32,
          },
          timeLocSource: { marginRight: e.spaces.space12 },
          topicFollowPrompt: { marginBottom: e.spaces.space12, marginTop: '-'.concat(e.spaces.space8) },
        }
      })
      t.b = Object(Y.a)(Mn)
    },
    CDB5: function (e, t, n) {
      'use strict'
      n.d(t, 'm', function () {
        return R
      }),
        n.d(t, 'l', function () {
          return P
        }),
        n.d(t, 'f', function () {
          return A
        }),
        n.d(t, 'd', function () {
          return O
        }),
        n.d(t, 'g', function () {
          return F
        }),
        n.d(t, 'e', function () {
          return U
        }),
        n.d(t, 'i', function () {
          return j
        }),
        n.d(t, 'j', function () {
          return H
        }),
        n.d(t, 'k', function () {
          return V
        }),
        n.d(t, 'h', function () {
          return z
        }),
        n.d(t, 'a', function () {
          return G
        }),
        n.d(t, 'b', function () {
          return K
        }),
        n.d(t, 'c', function () {
          return Q
        })
      var a = n('RhWx'),
        r = n.n(a),
        i = n('ddV6'),
        o = n.n(i),
        l = n('m3Bd'),
        s = n.n(l),
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
        w = n.n(_),
        C = n('uKEd'),
        E = n('lnti'),
        T = n('/NU0'),
        x = [
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
      var k = function (e) {
          var t = e.conversation_id,
            n = e.id,
            a = e.localMediaId,
            r = e.recipient_ids,
            i = e.sender_id,
            o = e.text,
            l = e.attachment,
            s = void 0 === l ? {} : l,
            c = e.error,
            d = Date.now().toString()
          return {
            conversation_id: t,
            recipient_ids: r,
            error: c,
            id: n,
            is_draft: !0,
            message_data: { attachment: s, localMediaId: a, sender_id: i, text: o, time: d },
            type: 'message',
            time: d,
          }
        },
        R = function (e) {
          return function (t, n, a) {
            var i = a.api,
              l = e || {},
              c = l.senderId,
              d = l.cardUrl,
              u = l.conversationId,
              b = l.localMediaId,
              _ = l.recipients,
              S = void 0 === _ ? [] : _,
              I = l.requestId,
              R = void 0 === I ? w.a.v1() : I,
              L = l.tweetAttachment,
              P = l.quickReply,
              M = s()(l, x)
            t(Z(u))
            var A = n(),
              D = b || N(n(), u),
              F = m.k(A, D),
              B = o()(F, 1)[0] || {},
              U = B.mediaFile,
              j = B.mediaMetadata,
              H = S.length > 0 && S.join(','),
              V = {}
            U && U.isGif
              ? (V.extraInitParams = '&media_category=dm_gif')
              : U && U.isVideo && (V.extraInitParams = '&media_category=dm_video')
            var W = m.p(D, V),
              G = [t(W)],
              q = (z(A, u) || {}).found_media_origin
            return (
              U && U.isGif && G.push(Object(g.a)(U)),
              Promise.all(G).then(
                function (n) {
                  var a = o()(n, 2),
                    l = o()(a[0], 1)[0],
                    s = a[1],
                    g = (null == j ? void 0 : j.altText) || (null == j ? void 0 : j.defaultAltText),
                    b = !!g
                  return (
                    l && (q || b)
                      ? t(m.m(p()({ media_id: l.uploadId, found_media_origin: q }, !!b && { alt_text: { text: g } })))
                      : Promise.resolve()
                  ).then(
                    function () {
                      var n = (L || {}).id_str,
                        a = {}
                      if (l) {
                        var o = l.mediaFile,
                          m = void 0 === o ? {} : o,
                          g = {
                            original_info: { width: m.width, height: m.height },
                            sizes: [{ h: m.height, w: m.width, resize: 'fit' }],
                          }
                        m.isImage
                          ? (a.photo = p()(p()({}, g), {}, { media_url_https: m.url }))
                          : m.isGif
                          ? (a.animated_gif = p()(p()({}, g), {}, { media_url_https: s, type: 'animated_gif' }))
                          : m.isVideo && (a.video = p()(p()({}, g), {}, { media_url_https: m.url, type: 'video' }))
                      } else L && (a.tweet = { status: n })
                      var b = (l || {}).uploadId,
                        _ = k({
                          attachment: a,
                          conversation_id: u,
                          id: R,
                          recipient_ids: H,
                          sender_id: c,
                          text: e.text,
                        }),
                        w = p()(
                          p()(
                            p()(p()({}, M), Object(y.a)(d) && { card_uri: d }),
                            {},
                            { conversation_id: u },
                            !n && { media_id: b },
                          ),
                          {},
                          { recipient_ids: H, request_id: R, tweet_id: n },
                        )
                      P &&
                        ((w['quick_reply_response[options][id]'] = P.id),
                        (w['quick_reply_response[options][selected_id]'] = P.selected_id))
                      var x = Object(E.a)([
                        ee(u),
                        { type: v.c.REQUEST },
                        { type: 'rweb/dmComposer/SEND_MESSAGE_REQUEST' },
                        u && Object(C.b)(u, R, _),
                      ])
                      return (
                        t(x),
                        i.DirectMessages.sendMessage(w).then(
                          function (n) {
                            var a = n.entities,
                              i = a.cards,
                              o = a.entries,
                              l = a.tweets,
                              s = a.users,
                              c = n.result.conversations
                            Object(T.a)(D) && t(Q(u, D))
                            var d = Object(E.a)(
                              [{ type: v.c.SUCCESS }].concat(
                                r()(Object(h.a)({ conversations: c, entries: o, users: s, tweets: l, cards: i })),
                                [{ type: 'rweb/dmComposer/SEND_MESSAGE_SUCCESS' }, u && Object(C.j)(u, R, e), O(u)],
                              ),
                            )
                            return t(d), Promise.resolve(Object.values(n.entities.entries)[0].conversation_id)
                          },
                          function (n) {
                            var r = k({
                                attachment: a,
                                conversation_id: u,
                                error: !0,
                                id: R,
                                localMediaId: D,
                                recipient_ids: H,
                                sender_id: c,
                                text: e.text,
                              }),
                              i = Object(E.a)([
                                { type: v.c.SUCCESS },
                                { type: 'rweb/dmComposer/SEND_MESSAGE_FAILURE' },
                                u && Object(C.b)(u, R, r),
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
                  return t(Object(E.a)([Object(T.a)(D) && Q(u, D), ne(u)])), Promise.reject(e)
                },
              )
            )
          }
        },
        L = function (e, t) {
          return e.dmComposer[t]
        },
        P = function (e, t) {
          var n = L(e, t)
          return n ? n.text : null
        },
        M = 'rweb/dmComposer/SAVE_TEXT',
        A = function (e, t) {
          return { type: M, conversationId: e, text: t }
        },
        D = 'rweb/dmComposer/REMOVE_TEXT',
        O = function (e) {
          return { type: D, conversationId: e }
        },
        F = function (e, t) {
          var n = L(e, t)
          return n ? n.cardUrl : null
        },
        B = 'rweb/dmComposer/SAVE_CARD_URL',
        U = function (e, t) {
          return { type: B, conversationId: e, cardUrl: t }
        },
        N = function (e, t) {
          var n = L(e, t)
          return n ? n.mediaId : null
        },
        j = function (e, t) {
          var n = m.k(e, N(e, t))
          return n.length > 0 ? n[0] : null
        },
        H = function (e, t) {
          var n = L(e, t)
          return !!n && n.isUploading
        },
        V = function (e, t) {
          return m.l(e, N(e, t))
        },
        z = function (e, t) {
          var n = L(e, t)
          return n ? n.gifMetadata : null
        },
        W = 'rweb/dmComposer/ADD_MEDIA',
        G = function (e, t, n) {
          return { payload: { isUploading: !1, mediaId: o()(t, 1)[0], gifMetadata: n }, type: W, conversationId: e }
        },
        q = 'rweb/dmComposer/CANCEL_UPLOAD',
        K = function (e) {
          return { type: q, conversationId: e }
        },
        X = 'rweb/dmComposer/REMOVE_MEDIA',
        Y = function (e) {
          return { type: X, conversationId: e }
        },
        Q = function (e, t) {
          return function (n) {
            n(m.i(t)), n([K(e), Y(e)])
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
            case q:
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
            case M:
              var l = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, l), {}, { text: t.text })))
            case B:
              var s = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, s), {}, { cardUrl: t.cardUrl })))
            case D:
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
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
        l = n('Y9Ll'),
        s = n.n(l),
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
        w = n('1auM'),
        C = n('eYns'),
        E = v.a.gff1f69e,
        T = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return o()(this, n), ((a = t.call(this, e)).state = { orientedImage: null }), a
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = (this.props.media || {}).originalMediaFile,
                    n = void 0 === t ? {} : t
                  n &&
                    n instanceof w.a &&
                    Object(C.b)(n).then(function (t) {
                      return new w.a(t).withDimensionsAndOrientation().then(function (t) {
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
                    : h.a.createElement(y.a, { accessibilityLabel: E, style: x.activityIndicator })
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
                    l = this.state.orientedImage,
                    s = r || {},
                    c = s.cropData,
                    d = s.originalMediaFile,
                    u = void 0 === d ? {} : d
                  return l
                    ? h.a.createElement(
                        g.a,
                        { style: x.cropper },
                        h.a.createElement(b.a, {
                          circle: this.props.circle,
                          defaultAspectRatio: (a && a.aspectRatio) || (c && c.aspectRatio) || n,
                          defaultCropData: a || c,
                          image: { src: l.url, width: u.width, height: u.height },
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
        x = _.a.create(function (e) {
          return {
            cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 },
            activityIndicator: { flexGrow: 1 },
          }
        })
      t.a = h.a.forwardRef(function (e, t) {
        return h.a.createElement(T, r()({}, e, { cropperRef: t }))
      })
    },
    'Ey+e': function (e, t, n) {
      'use strict'
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        l = n('ddV6'),
        s = n.n(l),
        c = (n('2G9S'), n('jwue'), n('7x/C'), n('+oxZ'), n('z84I'), n('ho0z'), n('ERkP'), n('AOWc')),
        d = n('6/RC'),
        u = n('E6XO'),
        p = n('sXY3'),
        m = n('tn7R'),
        h = n('+d3d'),
        f = n('oECP'),
        v = n('fs1G'),
        g = {},
        y = 0,
        b = { mount: ['didMount', 'willMount'], update: ['didUpdate', 'willUpdate'] },
        _ = function () {
          Object(p.a)(g).forEach(function (e, t) {
            var n = s()(e, 2),
              a = n[0],
              r = n[1],
              i = Object(m.a)(r),
              o = i.length
            i.forEach(function (e) {
              Object(p.a)(b).map(function (t) {
                var n = s()(t, 2),
                  r = n[0],
                  i = s()(n[1], 2),
                  l = i[0],
                  c = i[1]
                ;(function (e) {
                  return 1 === e || Math.random() <= 0.01
                })(o) &&
                  l in e &&
                  c in e &&
                  Object(u.c)(
                    (function (e, t) {
                      return 'lifecycle:'.concat(e.toLowerCase(), ':').concat(t)
                    })(a, r),
                    { duration_ms: e[l] - e[c] },
                  )
              })
            })
          }),
            Object(u.a)(),
            (g = {})
        },
        w = Object(h.a)(_, 2e4) || _,
        C = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.constructor.displayName
          Object(c.a)(n, ''.concat(e.constructor.name, ' component has "displayName" set.'))
          var a = e.__lifecycleIdentifier
          return (
            !a && t && ((y += 1), (a = e.__lifecycleIdentifier = y)),
            (g[n] && g[n][a]) || (g[n] = o()(o()({}, g[n]), {}, r()({}, a, {}))),
            [n, a]
          )
        },
        E = function (e, t, n, a) {
          g[e][t][n] = a
        }
      t.a = d.canUseDOM
        ? function (e) {
            var t = {
              UNSAFE_componentWillMount: e.prototype.UNSAFE_componentWillMount || v.a,
              componentDidMount: e.prototype.componentDidMount || v.a,
              UNSAFE_componentWillUpdate: e.prototype.UNSAFE_componentWillUpdate || v.a,
              componentDidUpdate: e.prototype.componentDidUpdate || v.a,
              componentWillUnmount: e.prototype.componentWillUnmount || v.a,
            }
            return (
              (e.prototype.UNSAFE_componentWillMount = function () {
                for (
                  var e = C(this, !0), n = s()(e, 2), a = n[0], r = n[1], i = arguments.length, o = new Array(i), l = 0;
                  l < i;
                  l++
                )
                  o[l] = arguments[l]
                t.UNSAFE_componentWillMount.apply(this, o), E(a, r, 'willMount', Date.now())
              }),
              (e.prototype.componentDidMount = function () {
                for (
                  var e = C(this), n = s()(e, 2), a = n[0], r = n[1], i = arguments.length, o = new Array(i), l = 0;
                  l < i;
                  l++
                )
                  o[l] = arguments[l]
                t.componentDidMount.apply(this, o), E(a, r, 'didMount', Date.now()), w()
              }),
              (e.prototype.UNSAFE_componentWillUpdate = function () {
                for (
                  var e = C(this, !0), n = s()(e, 2), a = n[0], r = n[1], i = arguments.length, o = new Array(i), l = 0;
                  l < i;
                  l++
                )
                  o[l] = arguments[l]
                t.UNSAFE_componentWillUpdate.apply(this, o), E(a, r, 'willUpdate', Date.now())
              }),
              (e.prototype.componentDidUpdate = function () {
                for (
                  var e = C(this), n = s()(e, 2), a = n[0], r = n[1], i = arguments.length, o = new Array(i), l = 0;
                  l < i;
                  l++
                )
                  o[l] = arguments[l]
                t.componentDidUpdate.apply(this, o), E(a, r, 'didUpdate', Date.now()), w()
              }),
              (e.prototype.componentWillUnmount = function () {
                for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a]
                t.componentWillUnmount.apply(this, n), w()
              }),
              e
            )
          }
        : f.a
    },
    G31s: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return w
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('5Yy7'),
        s = n.n(l),
        c = n('2VqO'),
        d = n.n(c),
        u = n('KEM+'),
        p = n.n(u),
        m = n('ERkP'),
        h = n.n(m),
        f = n('pKoL'),
        v = n('MWbm'),
        g = n('rHpw'),
        y = n('ZvMt'),
        b = n('9Xij'),
        _ = n('v6aA'),
        w = (function (e) {
          s()(n, e)
          var t = d()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.media,
                    n = e.style
                  return h.a.createElement(v.a, { style: n }, this._renderImageGroup(t.length))
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
                    i = g.a.theme.aspectRatios.landscape
                  if (t) {
                    var o,
                      l,
                      s = g.a.theme.aspectRatios.minTimelineImage,
                      c = g.a.theme.aspectRatios.maxTimelineImage
                    i = y.a.getImageAspectRatio(s, c, {
                      width: null === (o = e[0].mediaFile) || void 0 === o ? void 0 : o.width,
                      height: null === (l = e[0].mediaFile) || void 0 === l ? void 0 : l.height,
                    })
                  }
                  return h.a.createElement(
                    b.a,
                    { ratio: t ? i : r / a },
                    h.a.createElement(v.a, { style: C.mediaPreviewWrapper }, this._renderMediaAtIndex(0)),
                  )
                },
              },
              {
                key: '_renderGroupOf2',
                value: function () {
                  return h.a.createElement(
                    b.a,
                    { ratio: g.a.theme.aspectRatios.landscape },
                    h.a.createElement(
                      v.a,
                      { style: C.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, C.gutterRight),
                      this._renderMediaAtIndex(1),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf3',
                value: function () {
                  return h.a.createElement(
                    b.a,
                    { ratio: g.a.theme.aspectRatios.landscape },
                    h.a.createElement(
                      v.a,
                      { style: C.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, C.gutterRight),
                      this._renderColumnWithIndices([1, 2]),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf4',
                value: function () {
                  return h.a.createElement(
                    b.a,
                    { ratio: g.a.theme.aspectRatios.landscape },
                    h.a.createElement(
                      v.a,
                      { style: C.mediaPreviewWrapper },
                      this._renderColumnWithIndices([0, 2], C.gutterRight),
                      this._renderColumnWithIndices([1, 3]),
                    ),
                  )
                },
              },
              {
                key: '_renderColumnWithIndices',
                value: function (e, t) {
                  return h.a.createElement(
                    v.a,
                    { style: [C.column, t] },
                    this._renderMediaAtIndex(e[0], C.gutterBottom),
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
                    l = o.editable,
                    s = o.isActive,
                    c = o.media,
                    d = o.onClickMedia,
                    u = o.onEditMedia,
                    p = o.onEditSensitiveWarning,
                    m = o.onRemoveMedia,
                    v = o.onSetMediaPreviewRef,
                    g = c[e],
                    y = null === (n = g.mediaMetadata) || void 0 === n ? void 0 : n.altText,
                    b = null === (a = g.mediaMetadata) || void 0 === a ? void 0 : a.defaultAltText,
                    _ = !(
                      null === (r = g.mediaMetadata) ||
                      void 0 === r ||
                      null === (i = r.sensitiveMediaWarning) ||
                      void 0 === i ||
                      !i.size
                    ),
                    w = u && l && s,
                    E = w && _ && !!p
                  return h.a.createElement(f.a, {
                    accessibilityLabel: y || b,
                    accessibilityRole: 'group',
                    enableGif: s,
                    key: g.id,
                    mediaItem: g,
                    onClick: d ? d(g.id) : void 0,
                    onEdit: u ? u(g.id) : void 0,
                    onEditSensitiveWarning: p && E ? p(g.id) : void 0,
                    onRemove: m(g.id),
                    ref: v,
                    style: [C.mediaContainer, t],
                    withAltTextLabel: !!y,
                    withCloseButton: l && s,
                    withEditButton: w,
                    withEditSensitiveWarningButton: E,
                  })
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      p()(w, 'contextType', _.a)
      var C = g.a.create(function (e) {
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
          mediaPreviewWrapper: { flexDirection: 'row', height: '100%', width: '100%' },
        }
      })
    },
    GTeL: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        l = n('pKoL'),
        s = n('Qwev'),
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
            ? r.a.createElement(l.a, {
                imageResizeMode: 'contain',
                mediaItem: t,
                style: m.mediaContainer,
                withCloseButton: !1,
              })
            : n
            ? r.a.createElement(d.a, { resizeMode: 'contain', source: n.url, style: m.image })
            : r.a.createElement(s.a, { accessibilityLabel: p, style: m.activityIndicator }),
        )
      }
    },
    'IMA+': function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        s = n.n(l),
        c = n('1Pcy'),
        d = n.n(c),
        u = n('5Yy7'),
        p = n.n(u),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        v = n.n(f),
        g = (n('yH/f'), n('2G9S'), n('ho0z'), n('hBvt'), n('vrRf'), n('1t7P'), n('jQ/y'), n('SV7d')),
        y = n('ERkP'),
        b = n.n(y),
        _ = n('TIdA'),
        w = n('t62R'),
        C = n('5mJL'),
        E = n('DNho'),
        T = n('nBUg'),
        x = n('qjak'),
        S = n('ir4X'),
        I = n('htQn'),
        k = n('e5HP'),
        R = n('FBXD'),
        L = n('Nqmc'),
        P = n('rHpw'),
        M = n('jhWN'),
        A = n('1I0O'),
        D = n('pBrB'),
        O = n('jV+4'),
        F = n('MWbm'),
        B = Object.freeze({ TWEET: 'tweets', USER: 'users' }),
        U = Object.freeze({
          UserCompact: 'UserCompact',
          UserConcise: 'UserConcise',
          UserDetailed: 'UserDetailed',
          ExperimentalUserTypeahead: 'ExperimentalUserTypeahead',
        }),
        N = _.a.createLayoutCache(),
        j = { viewType: 'user_cell' },
        H = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(d()(e), '_renderUserName', function () {
                var t = e.props,
                  n = t.badgeContext,
                  a = t.disabledMessage,
                  r = t.displayNameLabel,
                  i = t.isBlocking,
                  o = t.isDisabled,
                  l = t.isFollowedBy,
                  s = t.isProtected,
                  c = t.isVerified,
                  d = t.name,
                  u = t.onScreenNameClick,
                  p = t.promotedContent,
                  m = t.promotedItemType,
                  h = t.screenName,
                  f = t.screenNameSuffix,
                  v = t.translatorType,
                  g = t.withFollowsYou,
                  y = t.withLink,
                  _ = b.a.createElement(O.a, {
                    badgeContext: n,
                    displayNameLabel: r,
                    isProtected: s,
                    isVerified: c,
                    name: d,
                    onLinkClick: u,
                    promotedContent: m === B.TWEET ? p : void 0,
                    screenName: h,
                    screenNameSuffix: f,
                    translatorType: v,
                    withFollowsYou: g && l,
                    withHoverCard: !i && !o && y,
                    withLink: !o && y,
                    withScreenName: !a,
                    withStackedLayout: !0,
                  })
                return a
                  ? b.a.createElement(
                      F.a,
                      { style: V.disabledMessageContainer },
                      _,
                      b.a.createElement(w.b, { color: 'gray700' }, a),
                    )
                  : _
              }),
              v()(d()(e), '_renderSocialContext', function () {
                var t = e.props,
                  n = t.avatarSize,
                  a = t.displayMode,
                  r = t.socialContext
                return r
                  ? b.a.createElement(T.b.UseProps, null, function (e) {
                      return b.a.createElement(L.a, {
                        avatarSize: n,
                        contextType: r.contextType,
                        iconSize: 'large',
                        link: r.link,
                        style: V.socialContext,
                        text: r.text,
                        weight: 'bold',
                        withLeftPadding: !e.socialContextRefreshEnabled() && a !== U.ExperimentalUserTypeahead,
                      })
                    })
                  : null
              }),
              v()(d()(e), '_renderUserTypeaheadSocialContext', function () {
                var t = e.props.socialContext,
                  n =
                    (t && Object(x.a)({ link: t.link, text: t.text, iconSize: 'small', contextType: t.contextType })) ||
                    {},
                  a = n.Icon,
                  r = n.text
                return t
                  ? b.a.createElement(
                      F.a,
                      { style: V.userTypeaheadSocialContext },
                      b.a.createElement(F.a, { style: V.userTypeaheadSocialContextIcon }, a),
                      b.a.createElement(
                        w.b,
                        { color: 'gray700', numberOfLines: 1, style: V.userTypeaheadSocialContextText },
                        r,
                      ),
                    )
                  : null
              }),
              v()(d()(e), '_renderHighlightedUserLabel', function () {
                var t = e.props.highlightedLabel
                return t ? b.a.createElement(S.a, { label: t }) : null
              }),
              v()(d()(e), '_isEligibleForBio', function () {
                var t = e.props.displayMode
                return -1 !== [U.UserDetailed, U.UserConcise].indexOf(t)
              }),
              v()(d()(e), '_handleKeyPress', function (t) {
                t.defaultPrevented || 'Enter' !== t.key || e._handleClick(t)
              }),
              v()(
                d()(e),
                '_handleClick',
                Object(R.a)(function (t) {
                  var n = e.props.onCellClick
                  t.preventDefault(), n && n()
                }),
              ),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.accessibilityState,
                    a = e.avatarDecoration,
                    i = e.avatarSize,
                    o = e.avatarUri,
                    l = e.bottomControl,
                    s = e.decoration,
                    c = e.displayMode,
                    d = e.isBlocking,
                    u = e.isDisabled,
                    p = e.onAvatarClick,
                    m = e.onCellClick,
                    h = e.onScreenNameClick,
                    f = e.presenceIndicator,
                    v = e.promotedContent,
                    y = e.promotedItemType,
                    _ = e.screenName,
                    w = e.style,
                    T = e.testID,
                    x = e.userId,
                    S = e.withDarkerInteractiveBackground,
                    R = e.withInteractiveStyling,
                    L = e.withLink,
                    P = e.withUsernameCenterAligned,
                    D = L && !d,
                    O = c === U.UserCompact || P,
                    H = c === U.ExperimentalUserTypeahead,
                    z =
                      v && y === B.USER && 'earned' !== (v.disclosure_type && v.disclosure_type.toLowerCase())
                        ? b.a.createElement(k.a, { contentAuthorId: x, promotedContent: v, style: V.promotedIndicator })
                        : null,
                    W = {
                      accessibilityHidden: !0,
                      decoration: a,
                      focusable: !1,
                      imageLayoutCache: N,
                      onClick: p,
                      onHoverCardScreenNameClick: h,
                      promotedContent: v,
                      screenName: _,
                      style: V.avatar,
                      uri: o,
                      withHoverCard: D,
                      withLink: L,
                    },
                    G = b.a.createElement(E.a.Consumer, null, function (e) {
                      var t = e.avatarSize
                      return f
                        ? b.a.createElement(A.a, r()({}, W, f, { size: t }))
                        : b.a.createElement(M.a, r()({ size: t }, W))
                    }),
                    q = n && 'boolean' == typeof n.checked,
                    K = void 0 !== m,
                    X = (q ? 'radio' : K && 'button') || 'listitem',
                    Y = this._renderUserName(),
                    Q = this._renderHighlightedUserLabel(),
                    J = this._renderBio(),
                    Z = Q || J || z || l,
                    $ = b.a.createElement(
                      b.a.Fragment,
                      null,
                      Q,
                      J,
                      z,
                      l ? b.a.createElement(F.a, { style: V.bottomControl }, l) : null,
                    )
                  return b.a.createElement(
                    g.a,
                    { behavioralEventContext: j },
                    b.a.createElement(
                      I.a,
                      {
                        accessibilityLabel: t,
                        accessibilityRole: X,
                        accessibilityState: n,
                        disabled: !!u,
                        focusable: q || K,
                        onClick: this._handleClick,
                        onKeyPress: this._handleKeyPress,
                        pointerEvents: u ? 'none' : void 0,
                        style: [V.root, w],
                        testID: T,
                        withDarkerInteractiveBackground: S,
                        withInteractiveStyling: null != R ? R : !!m,
                      },
                      H ? null : this._renderSocialContext(),
                      b.a.createElement(
                        C.a,
                        {
                          avatarCell: G,
                          avatarCellStyle: [V.avatarColumn, O && V.bodyColumnCentered],
                          avatarSize: H ? 'xxxLarge' : i,
                          cellStyle: [V.bodyColumn, O && V.bodyColumnCentered],
                        },
                        b.a.createElement(F.a, { style: V.body }, Y, s),
                        O ? null : $,
                        H ? this._renderUserTypeaheadSocialContext() : null,
                      ),
                      Z && O
                        ? b.a.createElement(
                            C.a,
                            { avatarCell: null, avatarCellStyle: V.avatarColumn, cellStyle: V.bodyColumn },
                            $,
                          )
                        : null,
                    ),
                  )
                },
              },
              {
                key: '_renderBio',
                value: function () {
                  var e = this.props,
                    t = e.description,
                    n = e.displayMode,
                    a = e.entities,
                    r = e.userId,
                    i = e.withheldDescription,
                    o = e.withheldEntities
                  return a && t && this._isEligibleForBio()
                    ? b.a.createElement(D.a, {
                        description: t,
                        entities: a,
                        isConcise: n === U.UserConcise,
                        style: V.bio,
                        userId: r,
                        withheldDescription: i,
                        withheldEntities: o,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      v()(H, 'defaultProps', { testID: 'UserCell', withLink: !0 })
      var V = P.a.create(function (e) {
        return {
          root: {
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          avatarColumn: { justifyContent: 'flex-start' },
          bodyColumn: { flexGrow: 1 },
          bodyColumnCentered: { justifyContent: 'center' },
          avatar: { display: 'block', width: '100%' },
          bio: { paddingTop: e.spaces.space4, whiteSpace: 'normal' },
          socialContext: { marginBottom: e.spaces.space4 },
          userTypeaheadSocialContext: { alignItems: 'center', flexDirection: 'row', textColor: e.colors.gray700 },
          userTypeaheadSocialContextIcon: { flexShrink: 0 },
          userTypeaheadSocialContextText: { paddingLeft: e.spaces.space2 },
          body: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
          promotedIndicator: { margin: 0, paddingTop: e.spaces.space4, paddingBottom: 0, paddingHorizontal: 0 },
          bottomControl: { paddingTop: e.spaces.space4 },
          disabledMessageContainer: { flexShrink: 1 },
        }
      })
      t.a = H
    },
    JFx8: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
    JUsM: function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('uFXj'), n('2G9S'), n('ERkP')),
        o = n.n(i),
        l = n('t62R'),
        s = n('rHpw'),
        c = n('shC7'),
        d = n('MWbm'),
        u = s.a.create(function (e) {
          return {
            root: {
              flexDirection: 'row',
              backgroundColor: e.colors.navigationBackground,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.large,
              borderColor: e.colors.gray50,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              justifyContent: 'space-between',
            },
            containerDown: { marginTop: e.spaces.space12 },
            containerUp: { marginTop: e.spaces.space20 },
            text: { flexShrink: 1, alignSelf: 'center', alignItems: 'flex-start' },
            actionsContainer: { flexDirection: 'row', alignItems: 'center', marginLeft: e.spaces.space12 },
            arrowContainer: { position: 'absolute', display: 'flex', width: '100%', alignItems: 'center' },
            arrowDirectionUp: { top: 'calc(-'.concat(e.spaces.space8, ' + ').concat(e.spaces.space1, ')') },
            arrowDirectionDown: { bottom: 'calc(-'.concat(e.spaces.space8, ' + ').concat(e.spaces.space1, ')') },
            arrow: {
              borderStyle: 'solid',
              borderTopWidth: 0,
              borderRightWidth: e.spaces.space1,
              borderBottomWidth: e.spaces.space1,
              borderLeftWidth: 0,
              borderColor: e.colors.gray50,
              width: e.spaces.space12,
              height: e.spaces.space12,
              backgroundColor: e.colors.navigationBackground,
            },
          }
        })
      t.a = function (e) {
        var t = e.containerRef,
          n = e.primaryAction,
          a = e.secondaryAction,
          i = e.text,
          s = o.a.useState(void 0),
          p = r()(s, 2),
          m = p[0],
          h = p[1],
          f = c.a.getConstants().isRTL,
          v = o.a.useRef(0),
          g = o.a.useRef(0),
          y = (function () {
            if (null != t && t.current && m) {
              var e = t.current.getBoundingClientRect(),
                n = e.left,
                a = e.top,
                r = e.width
              v.current = a
              var i = n + r / 2 - m
              return { left: f ? void 0 : i, right: f ? i : void 0 }
            }
          })(),
          b = g.current < v.current,
          _ = b ? [u.arrowDirectionDown] : [u.arrowDirectionUp],
          w = b
            ? f
              ? { transform: 'rotate(-45deg)' }
              : { transform: 'rotate(45deg)' }
            : f
            ? { transform: 'rotate(135deg)' }
            : { transform: 'rotate(-135deg)' },
          C = b ? [u.containerDown] : [u.containerUp]
        return o.a.createElement(
          d.a,
          {
            accessibilityRole: 'text',
            onLayout: function (e) {
              var t = e.nativeEvent.layout,
                n = t.left,
                a = t.top,
                r = t.width
              ;(g.current = a), h(n + r / 2)
            },
            style: [u.root, C],
          },
          null != t && t.current
            ? o.a.createElement(
                d.a,
                { style: [_, u.arrowContainer, y] },
                o.a.createElement(d.a, { style: [u.arrow, w] }),
              )
            : null,
          o.a.createElement(l.b, { style: u.text }, i),
          o.a.createElement(d.a, { style: u.actionsContainer }, n, a),
        )
      }
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
        l = n('1Pcy'),
        s = n.n(l),
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
        w = n('rHpw'),
        C = n('1auM'),
        E = n('ude7'),
        T = n('U+bB'),
        x = n('MWbm'),
        S = y.a.gff1f69e,
        I = Object.freeze({ INFINITE: 'infinite', MEDIUM: 'medium', NONE: 'none' }),
        k = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), 'state', { imagePreviewUrl: null }),
              h()(s()(e), '_getImageSrc', function () {
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
                    (a instanceof C.a &&
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
                    l = a.mediaFile && a.mediaFile.isGif && !n && !o,
                    s = a.needsProcessing || l,
                    c = [L.root, R[t], s && L.loadingBorder],
                    d = this._getImageSrc()
                  return v.a.createElement(
                    x.a,
                    { onClick: r, style: c },
                    s || !d
                      ? v.a.createElement(_.a, { accessibilityLabel: S, style: L.activityIndicator })
                      : v.a.createElement(T.a, { resizeMode: i, source: d, style: L.image }),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(k, 'defaultProps', { borderRadius: I.NONE, enableGif: !0, resizeMode: 'cover' })
      var R = w.a.create(function (e) {
          var t
          return (
            (t = {}),
            h()(t, I.INFINITE, { borderRadius: e.borderRadii.infinite }),
            h()(t, I.MEDIUM, { borderRadius: e.borderRadii.small }),
            h()(t, I.NONE, { borderRadius: e.borderRadii.none }),
            t
          )
        }),
        L = w.a.create(function (e) {
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
      t.b = k
    },
    LWCC: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('yH/f'), n('2G9S'), n('ho0z'), n('ERkP')),
        v = n.n(f),
        g = n('Zejx'),
        y = n('rxPX'),
        b = n('0KEI'),
        _ = Object(y.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)('FOLLOW_TOPIC_BUTTON'),
              follow: g.a.follow,
              unfollow: g.a.unfollow,
            }
          })
          .withAnalytics(),
        w = n('CGyZ'),
        C = n('PbbS'),
        E = n('3XMw'),
        T = n.n(E),
        x = n('sUoZ'),
        S = n('Tp1h'),
        I = n('Jkc4'),
        k = n('TnY3'),
        R = Object.freeze({ follow: T.a.i79ab12a, following: T.a.d960b55b, unfollow: T.a.c0f56044 }),
        L = Object.freeze({
          follow: T.a.fcf51fe6,
          following: T.a.e9a90d71,
          unfollow: T.a.bf403715,
          confirmationHeadline: T.a.c9f08e28,
          confirmationSheetText: T.a.abc600f3,
        }),
        P = Object.freeze({
          follow: T.a.cd876e01,
          following: T.a.f2816e02,
          unfollow: T.a.f5b04fbb,
          confirmationHeadline: T.a.c481ae3f,
          confirmationSheetText: T.a.aa3ba123,
        }),
        M = Object.freeze({
          follow: T.a.e0e730b0,
          following: T.a.e0e730b0,
          unfollow: T.a.b1850062,
          confirmationHeadline: T.a.gd3f996f,
          confirmationSheetText: T.a.i36c403c,
        }),
        A = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_getDisplayMode', function (t) {
                return void 0 === e._getFollowButtonIcon(t) ? 'only-text' : 'icon-text'
              }),
              h()(s()(e), '_getFollowButtonIcon', function (e) {
                switch (e) {
                  case C.a.Favorite:
                  case C.a.Star:
                  case C.a.Interested:
                    return v.a.createElement(x.a, null)
                  case C.a.FollowTopic:
                  case C.a.Default:
                  default:
                    return
                }
              }),
              h()(s()(e), '_getFollowingButtonIcon', function (t) {
                return 'icon-text' === e._getDisplayMode(t) ? v.a.createElement(v.a.Fragment, null) : void 0
              }),
              h()(s()(e), '_getButtonText', function (t) {
                var n = e.props.topic
                switch (t) {
                  case C.a.FollowTopic:
                    return { follow: R.follow, unfollow: R.unfollow, following: R.following }
                  case C.a.Favorite:
                    return {
                      follow: P.follow,
                      unfollow: P.unfollow,
                      following: P.following,
                      confirmationHeadline: P.confirmationHeadline && P.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: P.confirmationSheetText,
                    }
                  case C.a.Star:
                    return {
                      follow: L.follow,
                      unfollow: L.unfollow,
                      following: L.following,
                      confirmationHeadline: L.confirmationHeadline && L.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: L.confirmationSheetText,
                    }
                  case C.a.Interested:
                    return {
                      follow: M.follow,
                      unfollow: M.unfollow,
                      following: M.following,
                      confirmationHeadline: M.confirmationHeadline && M.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: M.confirmationSheetText,
                    }
                  case C.a.Default:
                  default:
                    return
                }
              }),
              h()(s()(e), '_handleOnFollow', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  a = t.educateOnFollow,
                  r = t.follow,
                  i = t.history,
                  o = t.topic
                r(o.id).catch(n()),
                  e._handleScribe('follow'),
                  a && o && i.push({ pathname: '/i/topics/education', state: { topicName: o.name } })
              }),
              h()(s()(e), '_handleOnUnfollow', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  a = t.topic
                ;(0, t.unfollow)(a.id).catch(n()), e._handleScribe('unfollow')
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.ariaDescribedBy,
                    a = t.isTransparent,
                    r = t.nativeID,
                    i = t.showRelationshipChangeConfirmation,
                    o = t.size,
                    l = t.style,
                    s = t.textMode,
                    c = t.topic,
                    d = c.following,
                    u = c.name
                  return v.a.createElement(I.a, { customText: u, displayMode: S.a.topic }, function (t) {
                    return v.a.createElement(w.a, {
                      ariaDescribedBy: n,
                      buttonIcons: {
                        followIcon: e._getFollowButtonIcon(s),
                        followingIcon: e._getFollowingButtonIcon(s),
                      },
                      buttonText: e._getButtonText(s),
                      displayMode: e._getDisplayMode(s),
                      isFollowing: d,
                      isTransparent: a,
                      name: u,
                      nativeID: r,
                      onFollow: t(e._handleOnFollow),
                      onUnfollow: t(e._handleOnUnfollow),
                      showRelationshipChangeConfirmation: i,
                      size: o,
                      style: l,
                      type: 'topic',
                      withConfirmationSheetText: d,
                    })
                  })
                },
              },
              {
                key: '_handleScribe',
                value: function (e) {
                  this.props.analytics.scribe({ element: 'topic', action: e })
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(A, 'defaultProps', { size: 'small', textMode: C.a.Default })
      t.a = Object(k.a)(_(A))
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
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
        l = (n('vrRf'), n('LW0h'), n('7x/C'), n('2G9S'), n('ERkP')),
        s = n.n(l),
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
        w = n('jHSc'),
        C = n('3XMw'),
        E = n.n(C),
        T = n('5FtR'),
        x = n('7JQg'),
        S = n('s1N3'),
        I = n('88ay'),
        k = n('hqDb'),
        R = n('MWbm'),
        L = n('0yYu'),
        P = n('6vad'),
        M = n('XiMS'),
        A = n('t62R'),
        D = n('/yvb'),
        O = E.a.c55eed71,
        F = E.a.b772cd65,
        B = E.a.caca3101,
        U = E.a.c6a6dc2f,
        N = { page: 'compose', section: 'recipients' },
        j = function (e) {
          var t = e.history,
            n = e.inReplyToStatus,
            a = e.initialExcludedRecipients,
            i = e.recipientIds,
            l = e.updateExcludedRecipientsV2,
            c = s.a.useState(a),
            d = o()(c, 2),
            u = d[0],
            p = d[1]
          if (!n) return s.a.createElement(T.a, { to: '/compose/tweet' })
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
              l(u), t.goBack()
            },
            y = function () {
              return i.length > 1 ? s.a.createElement(M.a, { checked: 0 === u.length, onChange: f }) : null
            },
            b = function (e) {
              var t = e.isBlocking,
                n = e.screenName
              return t ? s.a.createElement(A.b, { color: 'magenta500', size: 'subtext2' }, U({ screenName: n })) : null
            },
            _ = function (e) {
              if (!n) return null
              var t = (n.retweeted_status || n).user,
                a = -1 !== u.indexOf(e),
                r = e === t.id_str,
                i = s.a.createElement(M.a, { checked: !a, disabled: r, onChange: v(e) })
              return s.a.createElement(I.b, {
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
          return s.a.createElement(
            x.c,
            { namespace: N },
            s.a.createElement(
              w.b,
              {
                backLocation: '/compose/tweet',
                history: t,
                onBackClick: g,
                rightControl: s.a.createElement(D.a, { onPress: g, size: 'xSmall', type: 'brandFilled' }, F),
                title: O,
              },
              _(h.id_str),
              i.length
                ? s.a.createElement(
                    R.a,
                    null,
                    s.a.createElement(L.a, null),
                    s.a.createElement(P.b, { rightControl: y(), text: B }),
                    s.a.createElement(k.a, { renderUserCell: _, userIds: i }),
                  )
                : null,
            ),
          )
        }
      t.default = _(j)
    },
    OOKO: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      n('uFXj')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('rHpw'),
        o = n('MWbm')
      function l(e) {
        var t = e.spacing
        return r.a.createElement(o.a, {
          accessibilityRole: 'separator',
          style: [s.divider, { marginVertical: null != t ? i.a.theme.spaces[t] : void 0 }],
        })
      }
      var s = i.a.create(function (e) {
        return { divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }
      })
    },
    Olb6: function (e, t, n) {
      'use strict'
      n('hBvt')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        l = n('5cUs'),
        s = n('wwsH'),
        c = o.a.d9fd5570,
        d = { viewType: 'hidden_replies' }
      t.a = function (e) {
        var t = e.link,
          n = e.onPress
        return r.a.createElement(s.a, {
          Icon: l.a,
          accessibilityLabel: c,
          activeColor: 'primary',
          behavioralEventContext: d,
          link: t,
          onPress: n,
        })
      }
    },
    PbbS: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('yH/f'), n('ERkP')
      var a = Object.freeze({
        Default: 'default',
        FollowTopic: 'follow',
        Star: 'star',
        Interested: 'interested',
        Favorite: 'favorite',
      })
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
    Sksh: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('KEM+'),
        s = n.n(l),
        c = (n('+KXO'), n('849X'), n('TJCb'), n('SrIh')),
        d = n('M0jS'),
        u = n('+d3d'),
        p = n('VY6S'),
        m = (function () {
          function e() {
            var t = this
            r()(this, e),
              s()(this, 'usersInApp', {}),
              s()(
                this,
                '_throttledInitialFetch',
                Object(u.a)(function () {
                  t.store.dispatch(d.b.fetchManyIfNeeded(Object.keys(t.usersInApp)))
                }, 1500),
              )
          }
          return (
            o()(e, [
              {
                key: 'init',
                value: function (e) {
                  this.store = e
                },
              },
              {
                key: 'registerUserInApp',
                value: function (e) {
                  Object.keys(this.usersInApp).length > 50 &&
                    ((this.usersInApp = {}),
                    Object(c.a)(new Error('Registered users in app has exceeded 50'), { level: 'warning' })),
                    this.usersInApp[e]
                      ? (this.usersInApp[e] = this.usersInApp[e] + 1)
                      : ((this.usersInApp[e] = 1), Object(p.a)(this._throttledInitialFetch(), 100))
                },
              },
              {
                key: 'deregisterUserInApp',
                value: function (e) {
                  this.usersInApp[e] && this.usersInApp[e] > 1
                    ? (this.usersInApp[e] = this.usersInApp[e] - 1)
                    : delete this.usersInApp[e]
                },
              },
            ]),
            e
          )
        })()
      t.a = new m()
    },
    UgB4: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
        l = n('VrFO'),
        s = n.n(l),
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
        w = n('cjZk'),
        C = 'fileInput',
        E = n('sjK1'),
        T = n('/Imo'),
        x = n('rHpw'),
        S = n('9HgX'),
        I = ['acceptGifs', 'acceptImages', 'acceptVideo', 'customMimeTypes', 'icon', 'style', 'withIcon'],
        k = _.a.b9960f31,
        R = { viewType: 'media_picker' },
        L = y.a.createElement(w.a, null),
        P = function (e) {
          var t = e.acceptGifs,
            n = e.acceptImages,
            a = void 0 === n || n,
            r = e.acceptVideo
          return (a ? S.b : []).concat(t ? [S.a] : []).concat(r ? E.a : [])
        },
        M = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            return s()(this, n), t.apply(this, arguments)
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
                    l = e.icon,
                    s = e.style,
                    c = e.withIcon,
                    d = o()(e, I),
                    u = P({ acceptGifs: t, acceptImages: n, acceptVideo: a }).concat(i).join(',')
                  return y.a.createElement(
                    T.a,
                    r()({}, d, {
                      accept: u,
                      behavioralEventContext: R,
                      icon: c ? l : void 0,
                      style: [A.root, s],
                      testID: C,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      v()(M, 'defaultProps', {
        acceptGifs: !0,
        acceptImages: !0,
        acceptVideo: !0,
        customMimeTypes: [],
        accessibilityLabel: k,
        icon: L,
        size: 'medium',
        withIcon: !0,
      })
      var A = x.a.create(function (e) {
        return { root: { margin: '-'.concat(e.spaces.space12) } }
      })
      t.a = M
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
          return w
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        l = (n('yH/f'), n('LW0h'), n('7x/C'), n('oEOe')),
        s = n('kGix'),
        c = n('Ssj5'),
        d = 'scheduledTweets',
        u = { fetchStatus: s.a.NONE, scheduledTweets: [] },
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
            if (t.payload) return o()(o()({}, e), {}, { fetchStatus: s.a.LOADED, scheduledTweets: t.payload })
            break
          case m.FAILURE:
            return o()(o()({}, e), {}, { fetchStatus: s.a.FAILED })
          case m.REQUEST:
            return o()(o()({}, e), {}, { fetchStatus: s.a.LOADING })
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
            return Object(l.b)(e, { request: a.Scheduling.fetchScheduledTweets, params: {} })({
              actionTypes: m,
              context: p,
            }).then(function () {})
          }
        },
        w = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(l.b)(t, { request: r.Scheduling.deleteScheduledTweet, params: { scheduled_tweet_id: e } })({
              actionTypes: f,
              context: h,
              meta: { deleteScheduledTweetId: e },
            })
          }
        }
    },
    YICZ: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('Zejx'),
        o = n('rxPX'),
        l = n('0KEI'),
        s = Object(o.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)(
              'TOPIC_NOT_INTERESTED_CONTEXT',
            ),
            setNotInterested: i.a.notInterested,
          }
        }),
        c = n('3XMw'),
        d = n.n(c),
        u = n('hOZg'),
        p = n('Jkc4'),
        m = n('Irs7'),
        h = n('/yvb'),
        f = n('rHpw'),
        v = d.a.d9b417c4,
        g = d.a.c29d6806,
        y = d.a.e839db39,
        b = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.nativeID,
            a = e.onPress,
            i = e.setNotInterested,
            o = e.size,
            l = e.style,
            s = e.text,
            c = e.topicId,
            d = e.type,
            u = e.withIconOnly,
            f = Object(m.b)(),
            g = r.a.useCallback(
              function (e) {
                e.preventDefault(),
                  a ? a(e) : (f.scribe({ element: 'topic', action: 'not_interested' }), i(c).catch(t()))
              },
              [f, t, a, i, c],
            )
          return r.a.createElement(p.a, null, function (e) {
            return r.a.createElement(
              h.a,
              {
                accessibilityLabel: v,
                hoverLabel: { label: y },
                icon: u ? w : void 0,
                nativeID: n,
                onPress: e(g),
                pullRight: u,
                size: o,
                style: l,
                type: d,
              },
              u ? null : s,
            )
          })
        }
      b.defaultProps = { size: 'small', text: g, type: 'brandText', withIconOnly: !0 }
      var _ = f.a.create(function (e) {
          return { closeIcon: { color: e.colors.gray700 } }
        }),
        w = r.a.createElement(u.a, { style: _.closeIcon }),
        C = s(b)
      t.a = C
    },
    Zg3A: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
        l = (n('yH/f'), n('7x/C'), n('JtPf'), n('M6MT')),
        s = n('Ssj5'),
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
                return e(h(l.b.denied)), Promise.reject(t)
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
      s.a.register(
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
    aA1u: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('ERkP')),
        v = n.n(f),
        g = n('t62R'),
        y = n('21zW'),
        b = n('rHpw'),
        _ = n('3XMw'),
        w = n.n(_),
        C = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_formatTimestamp', function (e) {
                var t = w.a.jade381b,
                  n = w.a.d725a288,
                  a = new Date(e),
                  r = t(a),
                  i = n(a)
                return ''.concat(i, ' · ').concat(r)
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.style
                  return v.a.createElement(
                    g.b,
                    { color: 'gray700', style: e },
                    this._renderTimestampAndMaybePlace(),
                    this._maybeRenderSource(),
                  )
                },
              },
              {
                key: '_renderTimestampAndMaybePlace',
                value: function () {
                  var e = this.props,
                    t = e.linkColor,
                    n = e.onPlaceClick,
                    a = e.onTimestampClick,
                    r = e.place,
                    i = e.placeLink,
                    o = e.timestamp,
                    l = e.timestampLink,
                    s = this._formatTimestamp(o)
                  return r
                    ? v.a.createElement(
                        w.a.I18NFormatMessage,
                        { $i18n: 'ba64a3b2' },
                        v.a.createElement(
                          g.b,
                          { color: l ? t : void 0, link: l, onClick: a },
                          w.a.e9c24489({ date: s }),
                        ),
                        v.a.createElement(
                          g.b,
                          { color: i ? t : void 0, link: i, onClick: n },
                          w.a.a16de8a4({ place: r }),
                        ),
                      )
                    : v.a.createElement(g.b, { color: l ? t : void 0, link: l, onClick: a }, s)
                },
              },
              {
                key: '_maybeRenderSource',
                value: function () {
                  var e = this.props,
                    t = e.linkColor,
                    n = e.onSourceClick,
                    a = e.source,
                    r = e.sourceLink
                  return a
                    ? v.a.createElement(
                        v.a.Fragment,
                        null,
                        v.a.createElement(y.a, null),
                        v.a.createElement(g.b, { color: r ? t : void 0, link: r, onClick: n, style: E.source }, a),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(C, 'defaultProps', { linkColor: 'link' })
      var E = b.a.create(function (e) {
        return { source: { whiteSpace: 'normal' } }
      })
      t.a = C
    },
    b5s6: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('ERkP'),
        s = n.n(l),
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
        w = v(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            l = (e.tweetId, o()(e, _)),
            d = s.a.useContext(c.a),
            u = d.featureSwitches,
            p = d.loggedInUserId,
            m = null == i ? void 0 : i.community_id_str
          s.a.useEffect(
            function () {
              m && Object(g.a)(t) && a(m).catch(n())
            },
            [t, m, n, a],
          )
          var h = u.isTrue('responsive_web_alt_text_badge_enabled'),
            f = i && Object(b.f)(i, p, t),
            v = f && Object(b.e)(f),
            w = u.isTrue('responsive_web_reactions_enabled')
          return s.a.createElement(
            y.a,
            r()({}, l, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: h,
              socialContextProps: v,
              tweet: i,
              withReactions: w,
            }),
          )
        })
      t.a = w
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
        l = Object(o.a)().propsFromActions(function () {
          return { addToast: i.b }
        }),
        s = n('VrFO'),
        c = n.n(s),
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
        w = n('3XMw'),
        C = n.n(w),
        E = n('sgih'),
        T = n('t62R'),
        x = n('/yvb'),
        S = n('rHpw'),
        I = C.a.cfd2f35d,
        k = (function (e) {
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
                    l = Object(_.a)('input', {
                      autoFocus: !0,
                      onFocus: this._handleOnFocus,
                      readOnly: !0,
                      style: R.linkInput,
                      value: i,
                    })
                  return r.a.createElement(
                    E.a,
                    { onMaskClick: o, style: R.container, type: 'center', withMask: !0 },
                    a && r.a.createElement(T.b, { align: 'center', style: R.headerText, weight: 'bold' }, a),
                    n && r.a.createElement(T.b, { align: 'center', color: 'gray700', style: R.labelText }, n),
                    l,
                    r.a.createElement(x.a, { onPress: o, size: 'xLarge', style: R.cancelButton, type: 'brandText' }, t),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.Component)
      b()(k, 'defaultProps', { cancelButtonLabel: I })
      var R = S.a.create(function (e) {
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
        L = k,
        P = n('I/9y'),
        M = n('mjJ+'),
        A = n('cm6r'),
        D = n('CaKu'),
        O = n('U+bB'),
        F = C.a.e05c00b4,
        B = C.a.eabf2209,
        U = C.a.a613e72f,
        N = C.a.f88553c8,
        j = {
          riffsy: 'https://abs.twimg.com/a/1501527574/img/t1/icon_riffsy.png',
          giphy: 'https://abs.twimg.com/a/1501527574/img/t1/icon_giphy.png',
        },
        H = (function (e) {
          f()(n, e)
          var t = g()(n)
          function n(e) {
            var a
            return (
              c()(this, n),
              (a = t.call(this, e)),
              b()(m()(a), '_renderMenu', function (e) {
                return r.a.createElement(M.a, {
                  items: [{ text: U, Icon: P.a, onClick: a._handleCopyGifLinkButtonClick }],
                  onCloseRequested: e,
                })
              }),
              b()(m()(a), '_handleCopyGifLinkButtonClick', function (e) {
                var t = a.props,
                  n = t.addToast,
                  r = t.gifUrl
                D.a.isAvailable() ? (D.a.setString(r), n({ text: N })) : a.setState({ showCopyLinkSheet: !0 }), e && e()
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
                    l = j[o]
                  return l
                    ? r.a.createElement(
                        r.a.Fragment,
                        null,
                        e
                          ? r.a.createElement(L, {
                              description: B({ providerName: i }),
                              headerText: F,
                              link: n,
                              onCancel: this._handleCopyLinkSheetCancel,
                            })
                          : null,
                        r.a.createElement(
                          T.b,
                          { align: 'center', color: 'gray700', style: V.root },
                          r.a.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'e2e6ea0d' },
                            this._renderAttribution(i, l),
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
                    A.a,
                    { interactiveStyles: null, renderMenu: this._renderMenu },
                    r.a.createElement(
                      T.b,
                      { weight: 'bold', withInteractiveStyling: !0 },
                      r.a.createElement(O.a, { source: { uri: t }, style: V.image }),
                      r.a.createElement(T.b, null, e.toUpperCase()),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.PureComponent),
        V = S.a.create(function (e) {
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
        z = H,
        W = l(function (e) {
          var t = e.addToast,
            n = e.gifUrl,
            a = e.provider
          return r.a.createElement(z, { addToast: t, gifUrl: n, provider: a })
        })
      t.a = W
    },
    dCqJ: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('cm6r'),
        o = n('VrFO'),
        l = n.n(o),
        s = n('Y9Ll'),
        c = n.n(s),
        d = n('1Pcy'),
        u = n.n(d),
        p = n('5Yy7'),
        m = n.n(p),
        h = n('2VqO'),
        f = n.n(h),
        v = n('KEM+'),
        g = n.n(v),
        y = (n('2G9S'), n('t62R')),
        b = n('rHpw'),
        _ = n('3XMw'),
        w = n.n(_),
        C = w.a.d7e50a66,
        E = 'INDIRECT',
        T = 'NO_SPONSORSHIP',
        x = 'ISSUE',
        S = (function (e) {
          m()(n, e)
          var t = f()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              g()(u()(e), '_renderDisclaimerDetails', function () {
                var t = e.props,
                  n = t.onPoliticalSponsorWebsiteClick,
                  a = t.promotedContent
                if (!a.adMetadataContainer) return null
                var i = a.adMetadataContainer,
                  o = i.disclaimerType,
                  l = i.sponsorshipCandidate,
                  s = i.sponsorshipOrganization,
                  c = i.sponsorshipOrganizationWebsite,
                  d = i.sponsorshipType,
                  u =
                    c && o !== x
                      ? r.a.createElement(y.b, { link: c, onClick: n })
                      : r.a.createElement(y.b, { color: 'gray700', size: 'subtext2' })
                if (!s) return null
                var p = r.a.createElement(
                    w.a.I18NFormatMessage,
                    { $i18n: 'e1e348dc' },
                    r.a.cloneElement(u, null, w.a.b1e5bc63({ sponsorshipOrganization: s })),
                  ),
                  m = r.a.createElement(
                    w.a.I18NFormatMessage,
                    { $i18n: 'c7dea0d0' },
                    r.a.cloneElement(u, null, w.a.a84fcff2({ sponsorshipOrganization: s })),
                  ),
                  h = l
                    ? r.a.createElement(
                        w.a.I18NFormatMessage,
                        { $i18n: 'b5c2371a', sponsorshipCandidate: l },
                        r.a.cloneElement(u, null, w.a.fd985325({ sponsorshipOrganization: s })),
                      )
                    : null
                return r.a.createElement(
                  y.b,
                  { color: 'gray700', size: 'subtext2' },
                  o === x ? p : d === T ? m : d === E ? h : p,
                )
              }),
              g()(u()(e), '_renderLearnMoreLink', function () {
                var t = e.props,
                  n = t.onPromotedDisclaimerLearnMoreClick,
                  a = t.promotedContent,
                  i = t.tweet,
                  o = (a.adMetadataContainer || {}).disclaimerType === x ? 'issue_ad' : 'political_ad',
                  l = 'http://ads.twitter.com/transparency/ads/'.concat(i.user.screen_name, '/tweet/').concat(i.id_str)
                return r.a.createElement(y.b, { link: l, onClick: n(o), size: 'subtext2', style: I.learnMore }, C)
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    this._renderDisclaimerDetails(),
                    this._renderLearnMoreLink(),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.Component),
        I = b.a.create(function (e) {
          return { learnMore: { alignSelf: 'flex-start' } }
        }),
        k = n('e5HP'),
        R = n('Z6aJ'),
        L = n('MWbm')
      t.a = function (e) {
        var t = e.onPoliticalSponsorWebsiteClick,
          n = e.onPromotedDisclaimerLearnMoreClick,
          a = e.onPromotedIndicatorClick,
          o = e.promotedContent,
          l = e.promotedContentAdvertiser,
          s = e.style,
          c = e.testID,
          d = e.tweet,
          u = e.withCircleIcon,
          p = R.a.isPromoted(o),
          m =
            !!o &&
            ((o.adMetadataContainer &&
              ('POLITICAL' === o.adMetadataContainer.disclaimerType ||
                'ISSUE' === o.adMetadataContainer.disclaimerType)) ||
              'political' === R.a.getDisclosureType(o) ||
              'issue' === R.a.getDisclosureType(o))
        return p
          ? r.a.createElement(
              L.a,
              { style: s, testID: c },
              l && o
                ? r.a.createElement(
                    i.a,
                    {
                      interactiveStyles: null,
                      link: {
                        pathname: 'https://twitter.com/'.concat(l.screen_name),
                        state: { promotedTweetState: o },
                      },
                      onPress: a,
                    },
                    r.a.createElement(k.a, { promotedContent: o, withCircleIcon: u }),
                  )
                : !!o && r.a.createElement(k.a, { promotedContent: o }),
              m && o
                ? r.a.createElement(S, {
                    onPoliticalSponsorWebsiteClick: t,
                    onPromotedDisclaimerLearnMoreClick: n,
                    promotedContent: o,
                    tweet: d,
                  })
                : null,
            )
          : null
      }
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
    gdQ4: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return L
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('ERkP')),
        v = n.n(f),
        g = n('tRj+'),
        y = n('3XMw'),
        b = n.n(y),
        _ = n('oQhu'),
        w = n('MWbm'),
        C = n('htQn'),
        E = n('5mJL'),
        T = n('jhWN'),
        x = n('/yvb'),
        S = n('t62R'),
        I = n('rHpw'),
        k = b.a.e3a24e4b,
        R = b.a.i569ff3e,
        L = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(
                s()(e),
                '_getMemoizedBehavioralEventContext',
                Object(_.a)(function (e) {
                  return { viewType: e }
                }),
              ),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.onImpression
                  e && e()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.avatarUrl,
                    n = e.onClick,
                    a = e.style,
                    r = e.to,
                    i = e.userName,
                    o = e.withButton,
                    l = e.withConversationLine,
                    s = t && i,
                    c = o ? 'add_tweet' : 'see_more',
                    d = this._getMemoizedBehavioralEventContext(c)
                  return v.a.createElement(
                    g.a,
                    { behavioralEventContext: d },
                    v.a.createElement(
                      C.a,
                      { link: r, onClick: n, style: [P.root, a] },
                      v.a.createElement(
                        E.a,
                        {
                          avatarCell: s
                            ? v.a.createElement(
                                w.a,
                                { style: [P.avatarColumn, !l && P.avatarColumnWithoutLine] },
                                l ? v.a.createElement(w.a, { style: P.conversationLine }) : null,
                                v.a.createElement(T.a, { size: 'large', uri: t }),
                              )
                            : null,
                          avatarCellStyle: P.conversationConnector,
                          cellStyle: o ? P.buttonContainer : s ? P.labelWithAvatar : P.label,
                        },
                        o
                          ? v.a.createElement(
                              x.a,
                              { accessibilityRole: 'none', size: 'xSmall', style: P.button, type: 'brandOutlined' },
                              k,
                            )
                          : v.a.createElement(S.b, { color: 'link', style: P.enlargeTouchTarget }, R),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      h()(L, 'defaultProps', { withButton: !1, withConversationLine: !1 })
      var P = I.a.create(function (e) {
        return {
          root: {
            overflow: 'hidden',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.spaces.space2,
          },
          avatarColumn: { flexDirection: 'column', flexGrow: 0, alignItems: 'center', paddingBottom: e.spaces.space4 },
          avatarColumnWithoutLine: { paddingTop: e.spaces.space12 },
          conversationConnector: { alignItems: 'center', display: 'flex', position: 'relative' },
          label: { flexGrow: 1, paddingVertical: e.spaces.space4 },
          labelWithAvatar: { flexGrow: 1, justifyContent: 'center' },
          conversationLine: {
            backgroundColor: e.colors.gray200,
            flexGrow: 1,
            flexShrink: 1,
            width: e.componentDimensions.conversationLineWidth,
            marginBottom: e.spaces.space4,
          },
          buttonContainer: { paddingVertical: e.spaces.space4, flexDirection: 'row', flexGrow: 1 },
          button: { marginVertical: e.spaces.space4 },
          enlargeTouchTarget: { paddingVertical: e.spaces.space8 },
        }
      })
    },
    gpVt: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return z
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
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
        w = (n('wFPu'), n('CDB5')),
        C = n('xVN5'),
        E = n('vjRr'),
        T = n('rxPX'),
        x = n('0KEI'),
        S = function (e, t) {
          var n,
            a,
            r = t.urls,
            i = _()(r),
            o = y()(i.reverse())
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var l = a.value
              if ((n = E.a.select(e, l))) break
            }
          } catch (s) {
            o.e(s)
          } finally {
            o.f()
          }
          return n
        },
        I = Object(T.a)()
          .propsFromState(function () {
            return { card: S }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)(
                'COMPOSER_CARD_PREVIEW',
              ),
              fetchCardPreviewIfNeeded: E.a.fetchCardPreviewIfNeeded,
              updateDMComposer: w.e,
              updateTweetComposer: C.w,
            }
          }),
        k = n('KqB4'),
        R = n.n(k),
        L = n('aX4+'),
        P = n('3XMw'),
        M = n.n(P),
        A = n('hOZg'),
        D = n('cnVF'),
        O = n('MWbm'),
        F = n('v6aA'),
        B = n('/yvb'),
        U = n('rHpw'),
        N = n('VY6S'),
        j = n('mN6z'),
        H = M.a.f6fec9f6,
        V = /^https?:\/\//i,
        z = function (e) {
          var t = R()(e)
          if (t.length)
            return t.map(function (e) {
              return (!V.test(e) && 'http://'.concat(e)) || e
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
              h()(s()(i), '_fetchCardPreviewIfNeeded', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchCardPreviewIfNeeded
                e.urls.forEach(function (e) {
                  n(e).catch(t())
                })
              }),
              h()(s()(i), '_handleCardPreviewDismissal', function (e) {
                return i._updateSingleComposer({ cardUrl: D.B })
              }),
              h()(s()(i), '_updateSingleComposer', function (e) {
                var t = i.props,
                  n = t.conversationId,
                  a = t.index,
                  r = t.updateDMComposer,
                  o = t.updateTweetComposer,
                  l = (e || {}).cardUrl
                i._isDMComposer ? n && r(n, l) : o({ updates: { cardUrl: l }, index: a })
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
                        v.a.createElement(L.a, {
                          card: { name: t.name, url: t.url, binding_values: t.binding_values },
                          cardContext: { tweetUserId: r },
                          isInteractive: !1,
                          preventVideoPlayback: !0,
                        }),
                        v.a.createElement(B.a, {
                          accessibilityLabel: H,
                          icon: v.a.createElement(A.a, null),
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
      var G = U.a.create(function (e) {
          return { closeButton: { position: 'absolute', top: e.spaces.space4, left: e.spaces.space4 } }
        }),
        q = I(W)
      t.a = q
    },
    h5NW: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('RhWx'),
        o = n.n(i),
        l = n('yiKp'),
        s = n.n(l),
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
        w =
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
        C = n.n(w),
        E = n('dDSG'),
        T = n('pXBW'),
        x = n('6/RC'),
        S = (n('KOtZ'), n('ho0z'), n('hBpG'), n('wpu3')),
        I = n('ddV6'),
        k = n.n(I),
        R = n('+Kfv'),
        L = n('eSoz'),
        P = n('rxPX'),
        M = function (e, t) {
          var n = t.communityId
          return n ? L.c.select(e, n) : void 0
        },
        A = Object(P.a)().propsFromState(function () {
          return { community: M }
        }),
        D = n('MtXG'),
        O = n('t62R'),
        F = n('CKsB'),
        B = n('rHpw'),
        U = n('3XMw'),
        N = n.n(U),
        j = N.a.d58baa7e,
        H = A(
          C.a.memo(function (e) {
            var t = e.clickHandler,
              n = e.community,
              a = e.communityId,
              r = e.selectedCommunityId
            if (!n) return null
            var i,
              o = n.member_count
            return C.a.createElement(F.a, {
              actionSubText:
                ((i = j(o)),
                C.a.createElement(
                  D.a.Group,
                  null,
                  C.a.createElement(
                    D.a,
                    null,
                    C.a.createElement(
                      O.b,
                      { color: 'white' },
                      C.a.createElement(
                        N.a.I18NFormatMessage,
                        { $i18n: 'b38e130b' },
                        C.a.createElement(D.a.Value, null, N.a.ibd0106d({ formattedCount: i })),
                        C.a.createElement(D.a.Label, null, N.a.cface2d0({ count: o })),
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
              style: V.menuItem,
            })
          }),
        ),
        V = B.a.create(function (e) {
          return { menuItem: { alignItems: 'center' } }
        }),
        z = n('0zXz'),
        W = n('FS1z'),
        G = n('Irs7'),
        q = n('MWbm'),
        K = n('yw4N'),
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
        le = B.a.create(function (e) {
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
        se = function (e) {
          var t,
            n,
            a,
            r,
            i,
            o = e.audienceControlsValue,
            l = e.dismiss,
            s = e.hasMemberships,
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
            w = Object(G.b)(),
            E = C.a.useCallback(
              function (e) {
                return function () {
                  m(e),
                    ['super_followers_exclusive', 'community_members', 'trusted_friends_tweet'].indexOf(e._type) > -1 &&
                      f({ updates: { scheduledFor: void 0, scheduledTweetId: void 0 } }),
                    l()
                }
              },
              [m, f, l],
            ),
            T = C.a.useCallback(
              function () {
                if (b)
                  return (
                    w.scribe({
                      section: 'audience_selector',
                      component: 'trusted_friends',
                      element: 'edit_list_button',
                      action: 'click',
                    }),
                    c.push('/i/circles/'.concat(b, '/members'))
                  )
              },
              [w, c, b],
            )
          return C.a.createElement(
            q.a,
            { style: le.root },
            C.a.createElement(
              K.a,
              { style: le.viewport },
              C.a.createElement(
                C.a.Fragment,
                null,
                C.a.createElement(O.b, { size: 'headline1', style: le.title, weight: 'bold' }, Z),
                C.a.createElement(
                  R.a,
                  { behavioralEventContext: re },
                  C.a.createElement(F.a, {
                    Icon: Q.a,
                    actionText: ee,
                    isSelected: !g && !v && !y,
                    onClick: E({ _type: 'conversation_controls', conversationControlsValue: 'all' }),
                    selectable: !0,
                    style: le.menuItem,
                    withIconAsThumbnail: !0,
                  }),
                ),
                u
                  ? C.a.createElement(F.a, {
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
                      style: le.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
                p && e.trustedFriendsList && b
                  ? C.a.createElement(F.a, {
                      Icon: J.a,
                      actionSubText:
                        ((r = _),
                        (i = oe(r)),
                        C.a.createElement(
                          D.a.Group,
                          null,
                          C.a.createElement(
                            D.a,
                            null,
                            C.a.createElement(
                              O.b,
                              { color: 'white' },
                              C.a.createElement(
                                N.a.I18NFormatMessage,
                                { $i18n: 'g8ffaf17' },
                                C.a.createElement(D.a.Value, null, N.a.a5f7b70f({ formattedCount: i })),
                                C.a.createElement(D.a.Label, null, N.a.a7daec1e({ count: r })),
                              ),
                            ),
                            C.a.createElement(X.a, { onPress: T, size: 'xSmall', type: 'primaryText' }, ae),
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
                      style: le.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
              ),
              s && h && d
                ? C.a.createElement(
                    q.a,
                    null,
                    C.a.createElement(
                      R.a,
                      { behavioralEventContext: ie },
                      C.a.createElement(O.b, { style: le.title, weight: 'bold' }, $),
                      C.a.createElement(W.a, {
                        module: h,
                        noItemsRenderer: z.a,
                        renderer: function (e) {
                          return C.a.createElement(H, {
                            clickHandler: E,
                            communityId: e,
                            dismiss: l,
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
        we = 'trustedFriends',
        Ce = Object.freeze({
          REQUEST: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_REQUEST',
          SUCCESS: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_SUCCESS',
          FAILURE: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_FAILURE',
        }),
        Ee = Object.freeze({
          REQUEST: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_REQUEST',
          SUCCESS: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_SUCCESS',
          FAILURE: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_FAILURE',
        }),
        Te = function (e) {
          return e.trustedFriends.lists
        },
        xe = function () {
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
              a = Te(n)
            ;(a.length ? a[0] : void 0) ||
              e(function (e, t, n) {
                var a = n.api
                return ye.b(e, { request: a.TrustedFriends.fetchAuthenticatedUserTFLists })({
                  actionTypes: Ce,
                  context: 'FETCH_TRUSTED_FRIENDS_LISTS',
                })
              }).then(function (t) {
                !t.authenticated_user_trusted_friends_lists.length && xe && e(xe())
              })
          }
        },
        Ie = Object.freeze({ lists: [], fetchStatus: be.a.NONE })
      _e.a.register(
        _()({}, we, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ie,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case Ce.REQUEST:
              return s()(s()({}, e), {}, { fetchStatus: be.a.LOADING })
            case Ce.FAILURE:
              return s()(s()({}, e), {}, { error: t.payload, fetchStatus: be.a.FAILED })
            case Ce.SUCCESS:
              if (t.payload)
                return s()(
                  s()({}, e),
                  {},
                  { lists: t.payload.authenticated_user_trusted_friends_lists, error: null, fetchStatus: be.a.LOADED },
                )
              break
            case Ee.REQUEST:
              return s()(s()({}, e), {}, { fetchStatus: be.a.LOADING })
            case Ee.FAILURE:
              return s()(s()({}, e), {}, { error: t.payload, fetchStatus: be.a.FAILED })
            case Ee.SUCCESS:
              if (t.payload)
                return s()(
                  s()({}, e),
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
      var ke = function (e, t) {
          var n = t.audienceControlsValue.communityIdValue || void 0
          return n ? L.c.select(e, n) : void 0
        },
        Re = function (e, t) {
          return Object(ve.D)(e, ve.f)
        },
        Le = function (e, t) {
          return Object(ve.D)(e, ve.w)
        },
        Pe = function (e) {
          var t = Te(e)
          return t.length ? t[0] : void 0
        },
        Me = Object(P.a)()
          .propsFromState(function () {
            return {
              communities: L.f,
              educationalVisibilityFlag: Re,
              trustedFriendsEducationVisibilityFlag: Le,
              hasMemberships: he.d,
              selectedCommunity: ke,
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
                return Object(ve.z)(ve.f)
              },
              addTrustedFriendsEducationFlag: function () {
                return Object(ve.z)(ve.w)
              },
              updateSingleComposer: de.w,
              fetchOrCreateTrustedFriendsList: Se,
            }
          }),
        Ae = n('FG+G'),
        De = n.p + 'twitter-circle.b1a74a95.svg',
        Oe = n('TIdA'),
        Fe = n('A91F'),
        Be = N.a.f0598964,
        Ue = N.a.ceec051b,
        Ne = N.a.fc5bfd95,
        je = N.a.f5b3dc1d,
        He = B.a.create(function (e) {
          return {
            root: { flexDirection: 'column', paddingBottom: e.spaces.space4, borderRadius: e.borderRadii.xLarge },
            modal: { borderRadius: e.borderRadii.none },
            title: { flexDirection: 'column', paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space12 },
            createButton: { marginTop: e.spaces.space16, marginHorizontal: e.spaces.space16 },
            cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 },
            coverContainer: { height: '170px', width: '100%' },
          }
        }),
        Ve = function (e) {
          var t = e.onAction,
            n = e.setShowTrustedFriendsModal
          return C.a.createElement(
            C.a.Fragment,
            null,
            C.a.createElement(
              q.a,
              {
                accessibilityDescribedBy: 'trusted-friends-education-popover',
                accessibilityLabelledBy: 'trustd-friends-education-title',
                accessibilityRole: 'dialog',
                style: He.root,
              },
              C.a.createElement(
                q.a,
                { style: He.coverContainer },
                C.a.createElement(Oe.a, { accessibilityLabel: '', aspectMode: Fe.a.COVER, image: De }),
              ),
              C.a.createElement(
                q.a,
                { style: He.title },
                C.a.createElement(
                  O.b,
                  { nativeID: 'conversation-controls-title', size: 'title3', style: He.title, weight: 'bold' },
                  Be,
                ),
                C.a.createElement(
                  O.b,
                  { color: 'gray700', nativeID: 'conversation-controls-details', size: 'body', style: He.createButton },
                  Ue,
                ),
                C.a.createElement(
                  X.a,
                  {
                    onPress: function () {
                      t(), n(!0)
                    },
                    size: 'xLarge',
                    style: He.createButton,
                    type: 'primaryFilled',
                  },
                  Ne,
                ),
                C.a.createElement(
                  X.a,
                  {
                    key: 'button_cancel',
                    onPress: function () {
                      t()
                    },
                    size: 'xLarge',
                    style: He.cancelButton,
                    type: 'primaryOutlined',
                  },
                  je,
                ),
              ),
            ),
          )
        },
        ze = n('7JQg'),
        We = n('feu+'),
        Ge = n('cOhU'),
        qe = n('a5gf'),
        Ke = n('Lsrn'),
        Xe = n('k/Ka'),
        Ye = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Xe.a)(
            'svg',
            s()(
              s()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Ke.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            C.a.createElement(
              'g',
              null,
              C.a.createElement('path', {
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
          i = C.a.useCallback(
            function () {
              t(), r && (a(!1), n.push('/i/circles/'.concat(r, '/members')))
            },
            [n, a, r, t],
          ),
          o = C.a.useCallback(
            function () {
              a(!1), t()
            },
            [a, t],
          ),
          l = C.a.createElement(
            C.a.Fragment,
            null,
            C.a.createElement(
              q.a,
              { style: ot.contentWrapper },
              C.a.createElement(q.a, null, C.a.createElement(Ge.a, { style: ot.icon })),
              C.a.createElement(
                q.a,
                { style: ot.subtextContainer },
                C.a.createElement(
                  O.b,
                  { align: 'left', color: 'text', style: ot.subtextContainer, weight: 'bold' },
                  $e,
                ),
                C.a.createElement(O.b, { align: 'left', color: 'gray700' }, et),
              ),
            ),
            C.a.createElement(
              q.a,
              { style: ot.contentWrapper },
              C.a.createElement(q.a, null, C.a.createElement(qe.a, { style: ot.icon })),
              C.a.createElement(
                q.a,
                { style: ot.subtextContainer },
                C.a.createElement(O.b, { color: 'text', weight: 'bold' }, tt),
                C.a.createElement(O.b, { color: 'gray700' }, nt),
              ),
            ),
            C.a.createElement(
              q.a,
              { style: ot.contentWrapper },
              C.a.createElement(q.a, null, C.a.createElement(Qe, { style: ot.icon })),
              C.a.createElement(
                q.a,
                { style: ot.subtextContainer },
                C.a.createElement(O.b, { color: 'text', weight: 'bold' }, at),
                C.a.createElement(O.b, { color: 'gray700' }, rt),
              ),
            ),
          )
        return C.a.createElement(
          ze.c,
          null,
          C.a.createElement(We.a, {
            actionLabel: Ze,
            headline: Je,
            onAction: i,
            onClose: o,
            subtext: l,
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
        lt = n('FGLp'),
        st = n('X00g'),
        ct = n('Sp5X'),
        dt = n('efqG'),
        ut = N.a.baffe39a,
        pt = N.a.e815fc33,
        mt = N.a.aa4209e8,
        ht = N.a.d0748dae,
        ft = { viewType: 'communities_controls' },
        vt = C.a.createElement(Ae.a, null)
      var gt = B.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spaces.space4 },
            container: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
            hidden: { visibility: 'hidden' },
            root: { flexDirection: 'column', paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 },
          }
        }),
        yt = Me(function (e) {
          var t,
            n = C.a.useContext(ce.a),
            a = C.a.useState(!1),
            i = k()(a, 2),
            o = i[0],
            l = i[1],
            s = C.a.useState(!1),
            c = k()(s, 2),
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
            w = e.selectTrustedFriendsList,
            E = e.selectedCommunity,
            T = e.sliceModule,
            x = e.trustedFriendsEducationVisibilityFlag,
            S = e.updateSingleComposer,
            I = n.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            L = h.communityIdValue || !1,
            P = h.exclusivityControlValue || !1,
            M = h.trustedFriendsValue || !1,
            A = null == w ? void 0 : w.rest_id,
            D = b && x,
            O = (f && !E) || D,
            F = ut
          if ((L && null != E && E.name ? (F = E.name) : P ? (F = mt) : M && (F = ht), P))
            t = { color: 'plum500', borderColor: 'plum500', backgroundColor: 'transparent' }
          else if (L && null != E && E.theme && I) {
            var B = st.a.getCommunityUIColorName(E.theme)
            t = { color: B, borderColor: B, backgroundColor: 'transparent' }
          } else t = { type: 'brandOutlined' }
          Object(lt.a)(function () {
            var t = e.fetchOrCreateTrustedFriendsList
            b && (null == t || t())
          })
          var U = C.a.useCallback(
              function () {
                u(!1), p(), m()
              },
              [p, m],
            ),
            N = C.a.useCallback(
              function (e) {
                return D && !L
                  ? C.a.createElement(Ve, { history: ct.a, onAction: e, setShowTrustedFriendsModal: l })
                  : C.a.createElement(se, {
                      audienceControlsValue: h,
                      dismiss: e,
                      hasMemberships: v,
                      history: ct.a,
                      isC9sParticipationEnabled: g,
                      isSuperFollowsCreator: y,
                      isTrustedFriendsEnabled: b,
                      onAudienceControlsValueChange: function (e) {
                        U(), _(e)
                      },
                      sliceModule: T,
                      trustedFriendsList: w,
                      updateSingleComposer: S,
                    })
              },
              [U, T, S, h, v, g, y, w, _, L, D, b],
            ),
            j = C.a.useCallback(
              function () {
                A &&
                  _({
                    _type: 'trusted_friends_tweet',
                    conversationControlsValue: 'trusted_friends_tweet',
                    trustedFriendsMemberCount: null == w ? void 0 : w.member_count,
                    trustedFriendsValue: { trusted_friends_list_id: A },
                  })
              },
              [_, A, w],
            )
          return y || v || (b && e.selectTrustedFriendsList)
            ? C.a.createElement(
                R.a,
                { behavioralEventContext: ft },
                C.a.createElement(
                  q.a,
                  { style: gt.container },
                  o
                    ? C.a.createElement(it, {
                        changeAudienceToTrustedFriends: j,
                        history: ct.a,
                        setShowModal: l,
                        trustedFriendsListId: A,
                      })
                    : null,
                  C.a.createElement(
                    dt.a,
                    {
                      onDismiss: U,
                      onOpen: function () {
                        u(!0)
                      },
                      renderContent: N,
                      visibilityBehavior: O && !o ? 'forceVisible' : 'interactive',
                    },
                    C.a.createElement(
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
          return n ? L.c.select(e, n) : void 0
        },
        wt = Object(P.a)()
          .propsFromState(function () {
            return { community: _t }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ge.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_RULES'),
              fetchCommunityIfNeeded: L.c.fetchOneIfNeeded,
            }
          }),
        Ct = n('YeIG'),
        Et = n('21zW'),
        Tt = N.a.gfca5254,
        xt = N.a.f510c8b2,
        St = C.a.createElement(O.b, { weight: 'bold' }, xt),
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
        kt = wt(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            i = e.selectedCommunityId,
            o = e.showMiddot
          C.a.useEffect(
            function () {
              i && Object(Ct.a)(t) && a(i).catch(n())
            },
            [t, i, n, a],
          )
          var l = C.a.useState(!1),
            s = k()(l, 2),
            c = s[0],
            d = s[1],
            u = C.a.useContext(ce.a).featureSwitches,
            p = C.a.useCallback(
              function (e) {
                if (null != t && t.rules) {
                  var n = t.rules,
                    a = t.theme
                  return C.a.createElement(bt.b, {
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
              h = st.a.getCommunityUIColorName(m),
              f = u.isTrue('c9s_ui_colors_enabled_rweb')
                ? { color: h, borderColor: 'transparent', backgroundColor: 'transparent' }
                : { type: 'brandText' }
            return C.a.createElement(
              q.a,
              { style: It.container },
              o ? C.a.createElement(Et.a, null) : null,
              C.a.createElement(
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
                C.a.createElement(
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
                  Tt,
                ),
              ),
            )
          }
          return null
        }),
        Rt = n('ii+P'),
        Lt = n('4zmP'),
        Pt = N.a.g46f363d,
        Mt = { viewType: 'rule_education' },
        At = function () {
          var e = Object(Rt.a)(ve.g),
            t = k()(e, 2),
            n = t[0],
            a = t[1]
          return (
            C.a.useEffect(
              function () {
                return a
              },
              [a],
            ),
            n
              ? C.a.createElement(
                  q.a,
                  { style: Dt.container },
                  C.a.createElement(Lt.a, { behavioralEventContext: Mt, onClose: a, text: Pt, withCloseButton: !0 }),
                )
              : null
          )
        },
        Dt = B.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space8 } }
        }),
        Ot = C.a.memo(At),
        Ft = n('H7Rt'),
        Bt = n('m3Bd'),
        Ut = n.n(Bt),
        Nt = n('yZqq'),
        jt = function (e, t) {
          return Object(ve.D)(e, ve.s)
        },
        Ht = Object(P.a)()
          .propsFromState(function () {
            return { shouldShowEducation: jt }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(ve.z)(ve.s)
              },
            }
          }),
        Vt = N.a.aa65a449,
        zt = { viewType: 'persistent_conversation_controls_education' }
      var Wt = B.a.create(function (e) {
          return { container: { width: '100%', marginBottom: e.spaces.space8 } }
        }),
        Gt = Ht(function (e) {
          var t = e.addEducationFlag,
            n = e.buttonRef,
            a = e.shouldShowEducation,
            r = C.a.useContext(ce.a).featureSwitches,
            i = C.a.useState(),
            o = k()(i, 2),
            l = o[0],
            s = o[1],
            c = function () {
              t()
            }
          return (
            C.a.useEffect(function () {
              return c
            }, []),
            C.a.useEffect(
              function () {
                if (n) {
                  var e = n.getBoundingClientRect(),
                    t = e.left,
                    a = e.width
                  s(t + a / 2)
                }
              },
              [n],
            ),
            !0 === r.getValueWithoutScribeImpression('conversation_controls_persistence_enabled') && a
              ? C.a.createElement(
                  q.a,
                  { style: Wt.container },
                  C.a.createElement(Lt.a, {
                    arrowPositionStart: l,
                    behavioralEventContext: zt,
                    onClose: c,
                    text: Vt,
                    withCloseButton: !0,
                  }),
                )
              : null
          )
        }),
        qt = n('DlMI'),
        Kt = n('gBde'),
        Xt = n('gUPl'),
        Yt = ['analytics'],
        Qt = C.a.createElement(qt.a, null),
        Jt = C.a.createElement(Kt.a, null),
        Zt = C.a.createElement(Xt.a, null),
        $t = C.a.createElement(Ge.a, null),
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
              n = Ut()(e, Yt),
              a = e.disabled,
              r = e.value,
              i = nn[r],
              o = i.icon,
              l = i.label,
              s = C.a.useState(!1),
              c = k()(s, 2),
              d = c[0],
              u = c[1],
              p = C.a.useRef(null)
            Object(lt.a)(function () {
              r !== Ft.a.all && r !== Ft.a.community_members && u(!0)
            })
            var m = C.a.useCallback(
              function (e) {
                t.scribe({ element: en, action: 'click' })
              },
              [t],
            )
            return C.a.createElement(
              R.a,
              { behavioralEventContext: tn },
              d ? C.a.createElement(Gt, { buttonRef: p.current }) : null,
              C.a.createElement(
                q.a,
                { style: rn.controlsContainer },
                C.a.createElement(
                  Nt.a,
                  n,
                  C.a.createElement(
                    X.a,
                    { disabled: a, icon: o, onPress: m, ref: p, size: 'xSmall', style: rn.button, type: 'brandText' },
                    l,
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
        ln = n('cIoY'),
        sn = n('w3n3'),
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
          return C.a.createElement(hn.a, {
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
        wn = n('GWvE'),
        Cn = (function (e) {
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
                    l = e.onChange
                  return C.a.createElement(
                    q.a,
                    { style: En.root },
                    C.a.createElement(_n.a, {
                      autoCapitalize: 'none',
                      autoCorrect: !1,
                      autoFocus: t,
                      defaultValue: n,
                      editable: a,
                      label: r,
                      maxLength: 25,
                      name: i,
                      onBlur: o,
                      onChange: l,
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
                    (this.value && !Object(wn.a)(this.value) && this._inputRef && this._inputRef.isValidLength())
                  )
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      _()(Cn, 'defaultProps', { autoFocus: !1, editable: !0, optional: !1 })
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
        Tn = Cn,
        xn = (n('Blm6'), n('TJCb'), n('DZ+c'), n('mtvn')),
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
                    l = e.testID,
                    s = !t || i === r,
                    c = e.value.toString(),
                    d = Object(xn.a)(i, r + 1).map(function (e) {
                      return { label: ''.concat(N.a.ia24dc8c(e)), value: ''.concat(e) }
                    })
                  return C.a.createElement(Sn.a, {
                    disabled: s,
                    label: n,
                    onChange: o,
                    options: d,
                    style: [kn.selector, !a && kn.rightMargin],
                    testID: l,
                    value: c,
                  })
                },
              },
            ]),
            n
          )
        })(C.a.PureComponent)
      _()(In, 'defaultProps', { last: !1 })
      var kn = B.a.create(function (e) {
          return { rightMargin: { marginRight: e.spaces.space20 }, selector: { flexGrow: 1 } }
        }),
        Rn = In,
        Ln = 'addPollChoice',
        Pn = 'selectPollDays',
        Mn = 'selectPollHours',
        An = 'selectPollMinutes',
        Dn = 'removePollButton',
        On = N.a.caf8edc4,
        Fn = N.a.g93586be,
        Bn = N.a.d073b644,
        Un = N.a.a2f0728e,
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
                    l = { days: n, hours: o, minutes: 7 === n ? 0 : 0 === n && 0 === o && i < 5 ? 5 : i }
                  return t && t(l), { duration: l }
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
                  return C.a.createElement(
                    q.a,
                    { style: n },
                    C.a.createElement(O.b, { style: jn.durationLabel }, t ? On : ''),
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
                  return C.a.createElement(
                    q.a,
                    { style: jn.durationControls },
                    C.a.createElement(Rn, {
                      editable: t && n,
                      label: Fn,
                      max: 7,
                      min: 0,
                      onChange: this._handleDaysChange,
                      testID: Pn,
                      value: r,
                    }),
                    C.a.createElement(Rn, {
                      editable: t && n,
                      label: Bn,
                      max: 7 === r ? 0 : 23,
                      min: 0,
                      onChange: this._handleHoursChange,
                      testID: Mn,
                      value: i,
                    }),
                    C.a.createElement(Rn, {
                      editable: t && n,
                      label: Un,
                      last: !0,
                      max: 7 === r ? 0 : 59,
                      min: 0 === r && 0 === i ? 5 : 0,
                      onChange: this._handleMinutesChange,
                      testID: An,
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
        })(C.a.Component)
      _()(Nn, 'defaultProps', { editable: !0, initialDuration: { days: 1, hours: 0, minutes: 0 } })
      var jn = B.a.create(function (e) {
          return {
            durationControls: { flexDirection: 'row', justifyContent: 'space-between' },
            durationLabel: { marginBottom: e.spaces.space4 },
          }
        }),
        Hn = Nn,
        Vn = n('iY63'),
        zn = n('jtO7'),
        Wn = N.a.g589c2e1,
        Gn = N.a.a1e6c3a1,
        qn = N.a.a739e006,
        Kn = N.a.d89a5b92,
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
                  l = [o._choice1, o._choice2, o._choice3, o._choice4].filter(Boolean).every(function (e) {
                    return e.isValid
                  })
                i && i.length >= 2 && l ? a() : n(), t && t({ choices: i, duration: r.duration })
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
              l = (i || []).length,
              s = l > 2 ? l : 2
            return (r.state = { autoFocus: o, choiceCount: s }), r
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
                    l = i.choiceCount,
                    s = C.a.createElement(
                      q.a,
                      { style: Zn.rightColumn },
                      l < 4
                        ? C.a.createElement(X.a, {
                            accessibilityLabel: Yn,
                            disabled: !(t && r),
                            hoverLabel: { label: Qn },
                            icon: C.a.createElement(Vn.a, null),
                            onPress: this._handleAdd,
                            size: 'medium',
                            style: Zn.addButton,
                            testID: Ln,
                            type: 'brandText',
                          })
                        : null,
                    )
                  return C.a.createElement(
                    q.a,
                    { style: Zn.choicesAndAddButton },
                    C.a.createElement(
                      q.a,
                      { style: Zn.choices },
                      C.a.createElement(Tn, {
                        autoFocus: o,
                        defaultValue: a[0],
                        editable: t && r,
                        label: Wn,
                        name: 'Choice1',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice1Ref,
                      }),
                      C.a.createElement(Tn, {
                        defaultValue: a[1],
                        editable: t && r,
                        label: Gn,
                        name: 'Choice2',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice2Ref,
                      }),
                      l >= 3
                        ? C.a.createElement(Tn, {
                            autoFocus: o,
                            defaultValue: a[2],
                            editable: t && r,
                            label: qn,
                            name: 'Choice3',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice3Ref,
                          })
                        : null,
                      4 === l
                        ? C.a.createElement(Tn, {
                            autoFocus: o,
                            defaultValue: a[3],
                            editable: t && r,
                            label: Kn,
                            name: 'Choice4',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice4Ref,
                          })
                        : null,
                    ),
                    s,
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
                  return C.a.createElement(
                    q.a,
                    { style: Zn.root },
                    this._renderChoices(),
                    C.a.createElement(Hn, {
                      editable: t,
                      initialDuration: n,
                      isActive: a,
                      onChange: this._handleDurationChange,
                      ref: this._setDurationPickerRef,
                      style: Zn.durationPicker,
                    }),
                    C.a.createElement(
                      q.a,
                      { style: Zn.removePollButton },
                      C.a.createElement(zn.a, { color: 'red500', label: Xn, onPress: r, testID: Dn }),
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
        })(C.a.Component),
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
            l = e.isPollValid,
            s = e.updateComposer,
            c = Object(G.b)(),
            d = C.a.useMemo(
              function () {
                return {
                  onChange: function (e) {
                    s({ pollChoices: null == e ? void 0 : e.choices, pollDuration: null == e ? void 0 : e.duration }, t)
                  },
                  onValid: function () {
                    !l && s({ pollValid: !0 }, t)
                  },
                  onInvalid: function () {
                    l && s({ pollValid: !1 }, t)
                  },
                  onRemove: function () {
                    c.scribe({ element: 'remove_poll', action: 'click' }), s({ pollActive: !1 }, t)
                  },
                }
              },
              [c, l, s, t],
            ),
            u = d.onChange,
            p = Ut()(d, ta),
            m = C.a.useMemo(
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
            h = C.a.useCallback(
              function () {
                m.flush()
              },
              [m],
            )
          return C.a.createElement(
            $n,
            r()({ editable: n, initialChoices: a, initialDuration: i, isActive: o, onBlur: h, onChange: m }, p),
          )
        },
        aa = B.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 }, link: { color: 'black' } }
        }),
        ra = N.a.i859676b,
        ia = C.a.createElement(
          N.a.I18NFormatMessage,
          { $i18n: 'a02c8d74' },
          C.a.createElement(
            O.b,
            { link: '/settings/audience_and_tagging', style: aa.link, withInteractiveStyling: !0, withUnderline: !0 },
            N.a.c9a48d3f,
          ),
        )
      function oa() {
        return C.a.createElement(q.a, { style: aa.container }, C.a.createElement(Lt.a, { headline: ra, text: ia }))
      }
      var la = n('b5s6'),
        sa = n('rcen'),
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
        wa = 'toolBar',
        Ca = 'scheduledTweetIndicator',
        Ea = n('xM7j'),
        Ta = n('6OUF'),
        xa = n('tZIO'),
        Sa = n('5mJL'),
        Ia = n('DNho'),
        ka = n('jhWN'),
        Ra = n('rFBM'),
        La = n('zfvc'),
        Pa = n('Ujvi'),
        Ma = n('yTN1'),
        Aa = n('gpVt'),
        Da = n('hOZg'),
        Oa = n('ll3R'),
        Fa = n('J0mu'),
        Ba = n('EfHu'),
        Ua = n('KrGU'),
        Na = n('boUI'),
        ja = n('6ZHn'),
        Ha = n('/WPq'),
        Va = n('wpLu'),
        za = n('pHub'),
        Wa = n('8A5z'),
        Ga = n('G31s'),
        qa = n('S1qy'),
        Ka = n.n(qa),
        Xa = n('cjAp'),
        Ya = n.n(Xa),
        Qa = N.a.f0afcc0e,
        Ja = N.a.ha5e2e79,
        Za = N.a.a3de3b68,
        $a = N.a.cc2b28fc,
        er = N.a.g45af04e,
        tr = N.a.j1d5791c,
        nr = N.a.ee9c4013,
        ar = N.a.af40a8ef,
        rr = N.a.e68b09b4,
        ir = N.a.ec10ee02,
        or = N.a.h735a98d,
        lr = N.a.c4ccfbe2,
        sr = N.a.j499fbcb,
        cr = N.a.b7d8e3f0,
        dr = N.a.d1175c78,
        ur = N.a.bf4e9d79,
        pr = N.a.e0342f98,
        mr = N.a.e349147b,
        hr = N.a.e3a24e4b,
        fr = N.a.fbd24526,
        vr = N.a.de4669e2,
        gr = N.a.d2c7a41c,
        yr = N.a.f7364fa1,
        br = ['ja', 'zh-cn', 'zh-tw', 'ko'],
        _r = N.a.ia24dc8c,
        wr = C.a.createElement(Da.a, null),
        Cr = C.a.createElement(Vn.a, null),
        Er = C.a.createElement(Oa.a, null),
        Tr = C.a.createElement(Fa.a, null),
        xr = { viewType: 'schedule_tweet' },
        Sr = { viewType: 'add_poll' },
        Ir = { viewType: 'add_composer' },
        kr = { viewType: 'tag_location' },
        Rr = (function (e) {
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
                  l = a.isInline,
                  s = a.isReply
                return (
                  !(
                    'conversation' !== t ||
                    (r.conversationControlsValue !== Ft.a.community_members &&
                      r.conversationControlsValue !== Ft.a.super_followers_exclusive &&
                      r.conversationControlsValue !== Ft.a.trusted_friends_tweet) ||
                    !s
                  ) ||
                  (o && !s && (!l || n || e))
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
                  l = i._shouldRenderControls(e, 'conversation'),
                  s =
                    o === Ft.a.community_members ||
                    o === Ft.a.super_followers_exclusive ||
                    o === Ft.a.trusted_friends_tweet ||
                    i._isScheduled()
                return l
                  ? C.a.createElement(an, { disabled: s, onChange: i._handleConversationControlsValueChange, value: o })
                  : null
              }),
              _()(h()(i), '_renderTaggedLocation', function (e) {
                return C.a.createElement(
                  q.a,
                  { style: vn.taggedLocationContainer },
                  C.a.createElement(
                    X.a,
                    {
                      icon: C.a.createElement(Ba.a, null),
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
                  l = e.isInlineReply,
                  s = e.onTypeaheadStateChange,
                  c = e.richTextInputContext,
                  d = n.cardUrl,
                  u = n.media,
                  p = n.pollActive,
                  m = n.quotedStatus,
                  h = n.text,
                  f = Object(Aa.b)(h) || (d && !Object(un.a)(d) && [d]),
                  v = !!u.length || p || !!m,
                  g = i.props.typeaheadWrapper,
                  y = !i._isEmpty()
                return C.a.createElement(
                  q.a,
                  { style: vn.textInputArea },
                  C.a.createElement(
                    q.a,
                    { style: r ? vn.inputStyle : vn.collapsedInputStyle },
                    i._renderAudienceControls(y),
                    C.a.createElement(
                      g,
                      {
                        contextText: h,
                        isInline: o,
                        isInlineReply: l,
                        onTextUpdated: c ? i._handleRichTextChange : i._handlePlainTextChange,
                        onTypeaheadStateChange: s,
                      },
                      i._renderFieldTextInput,
                    ),
                    f && !v
                      ? C.a.createElement(Aa.a, { index: a, isCardPreviewTombstoned: Object(un.a)(d), urls: f })
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
                  l = t.index,
                  s = t.isActive,
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
                  b = 0 === l && p,
                  _ = !!v,
                  w = v || {},
                  E = w.dismissComposerCommandName,
                  T = w.element,
                  x = w.sendTweetCommandName,
                  S = u && !v && !c,
                  I = v
                    ? {
                        onChange: i._getHandleRichTextChange(e),
                        richTextInputContext: {
                          dismissComposerCommandName: E,
                          editorState: i.state.editorState,
                          element: T,
                          sendTweetCommandName: x,
                        },
                      }
                    : { onChange: i._getHandlePlainTextChange(e) }
                return C.a.createElement(
                  Ta.a,
                  r()(
                    {
                      appTextSize: 'headline1',
                      ariaLabel: Za,
                      autoFocus: n || (s && !d),
                      closeButton:
                        s && (i._deleteNonemptyTweetstormComposerEnabled || i._isEmpty()) && !b
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
                      testID: ''.concat(_a).concat(l),
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
                return 0 === t && n ? C.a.createElement(oa, null) : null
              }),
              _()(h()(i), '_renderAudienceControls', function (e) {
                var t = i.props,
                  n = t.audienceControlsValue,
                  a = t.index,
                  r = t.isSuperFollowsCreator,
                  o = i.context.featureSwitches.isTrue('c9s_participation_enabled'),
                  l = i.context.featureSwitches.isTrue('super_follow_exclusive_tweet_creation_api_enabled'),
                  s = i.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled')
                return i._shouldRenderControls(e, 'audience') && 0 === a && (o || l || s)
                  ? C.a.createElement(yt, {
                      audienceControlsValue: n,
                      isC9sParticipationEnabled: o,
                      isSuperFollowsCreator: r && l,
                      isTrustedFriendsEnabled: s,
                      onAudienceControlsValueChange: i._handleAudienceControlsValueChange,
                    })
                  : null
              }),
              _()(h()(i), '_renderCommunitiesRulesEducation', function () {
                return i.shouldRenderCommunitiesRules ? C.a.createElement(Ot, null) : null
              }),
              _()(h()(i), '_renderCommunitiesRules', function (e) {
                var t = i.props.audienceControlsValue.communityIdValue || void 0
                return i.shouldRenderCommunitiesRules && t
                  ? C.a.createElement(kt, { selectedCommunityId: t, showMiddot: !e })
                  : null
              }),
              _()(h()(i), '_calcNumberOfLines', function () {
                var e = i.props,
                  t = e.data,
                  n = e.isActive,
                  a = e.isInline,
                  r = !!e.richTextInputContext,
                  o = t.media,
                  l = t.pollActive,
                  s = t.quotedStatus,
                  c = !!o.length || !!l || !!s
                return (r && (a || c)) || !n ? 1 : 4
              }),
              _()(h()(i), '_renderScheduledTweetLegend', function () {
                var e = i.props.scheduledFor
                return C.a.createElement(ca.a, {
                  onPress: i._handlePressScheduledTweetLegend,
                  scheduledFor: e,
                  testID: Ca,
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
                return C.a.createElement(on.a, {
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
                  l = n.quotedStatus,
                  s = n.text,
                  c = e.index,
                  d = e.isLast,
                  u = 0 === c && d,
                  p = t.conversationControlsValue !== Ft.a.all
                return Boolean(o || !u || (l && '' === s && !a.length) || p || r.length > 0)
              }),
              _()(h()(i), '_renderSchedulingButton', function () {
                return C.a.createElement(X.a, {
                  accessibilityLabel: Ja,
                  behavioralEventContext: xr,
                  disabled: i._isSchedulingDisabled(),
                  hoverLabel: { label: or },
                  icon: Tr,
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
                return C.a.createElement(X.a, {
                  accessibilityLabel: nr,
                  hoverLabel: { label: rr },
                  icon: wr,
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
                  l = t.media,
                  s = t.pollActive,
                  c = t.pollChoices,
                  d = t.pollDuration,
                  u = t.quotedStatus
                if (0 === l.length && !s && !u) return null
                var p = i.hasAttachedVideo && (i._videoTrimmerEnabled ? 'trimmer' : 'subtitles')
                return C.a.createElement(
                  q.a,
                  { onClick: i._handleFocus, style: [vn.attachmentContainer, vn.tweetAttachmentArea], testID: ha },
                  l.length > 0
                    ? C.a.createElement(Ga.a, {
                        editable: n,
                        isActive: r,
                        media: l,
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
                  s
                    ? C.a.createElement(na, {
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
                  ? C.a.createElement(
                      Ea.a,
                      null,
                      C.a.createElement(sa.a, {
                        entities: n.richText.entities,
                        rtl: n.richText.rtl,
                        text: n.richText.text,
                      }),
                    )
                  : C.a.createElement(la.a, {
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
                  l = t.isInlineReply,
                  s = t.isReply,
                  c = t.isSelfThreadReply,
                  d = t.richTextInputContext,
                  u = t.setActiveParentKey,
                  p = !!d,
                  m = !l && !r,
                  h = !l && !o,
                  f = i.context.featureSwitches.isTrue('responsive_web_reply_storm_enabled'),
                  v = e && (!s || c || f)
                return C.a.createElement(
                  q.a,
                  { style: vn.toolBar, testID: wa },
                  C.a.createElement(
                    q.a,
                    { style: vn.toolBarIconsContainer },
                    C.a.createElement(yn, {
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
                  C.a.createElement(
                    q.a,
                    { style: vn.toolBarIconsContainer },
                    e ? i._renderCountdownCircle() : null,
                    v &&
                      C.a.createElement(
                        C.a.Fragment,
                        null,
                        C.a.createElement(q.a, { style: vn.separator }),
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
                    var l = o ? r + 1 : -1
                    return {
                      editorState: t.updateOverflowStyle && t.updateOverflowStyle(e, l, i.state.hasOverflowStyle),
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
                var t = xa.a.replaceCarriageReturns(e.target.value)
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
                a ? n({ text: $a }) : r(e)
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
                return _r(Math.ceil(e / i._userLanguageWeight))
              }),
              _()(h()(i), '_getPlaceHolderText', function () {
                var e = i.props,
                  t = e.data,
                  n = t.pollActive,
                  a = t.quotedStatus,
                  r = e.index,
                  o = e.isReply,
                  l = e.isSelfThreadReply
                return a
                  ? vr
                  : n
                  ? yr
                  : i.isReplyOrReplyThread && 0 === r
                  ? gr
                  : o && !l && r > 0
                  ? fr
                  : l || r > 0
                  ? hr
                  : mr
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
                  var t = Ya.a[i.props.twitterTextConfigurationVersion]
                  return Ka()(e, t)
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
              l = e.richTextInputContext,
              s = e.userLanguage,
              c = (l || {}).initEditorState
            return (
              (i._conversationControlsCreationEnabled =
                !0 ===
                i.context.featureSwitches.getValueWithoutScribeImpression(
                  'conversation_controls_limited_replies_creation_enabled',
                )),
              (i._deleteNonemptyTweetstormComposerEnabled = i.context.featureSwitches.isTrue(
                'responsive_web_delete_nonempty_tweetstorm_composer_enabled',
              )),
              (i._userLanguageWeight = s && br.indexOf(s) > -1 ? 2 : 1),
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
                    l = t.loggedInUser,
                    s = t.windowWidth,
                    c = t.withAvatar,
                    d = !this._isEmpty(),
                    u = this._shouldRenderControls(d),
                    p = s < B.a.theme.breakpoints.small
                  return C.a.createElement(
                    q.a,
                    {
                      onClick: this._handleWrapperClick,
                      onFocus: this._handleFocus,
                      style: [vn.root, !a && vn.blurStyle],
                    },
                    this._renderCommunityTweetFromProtectedUserCallout(),
                    C.a.createElement(
                      Sa.a,
                      {
                        avatarCell: C.a.createElement(
                          C.a.Fragment,
                          null,
                          c
                            ? C.a.createElement(Ia.a.Consumer, null, function (e) {
                                var t = e.avatarSize
                                return C.a.createElement(ka.a, {
                                  accessibilityLabel: l ? l.name : void 0,
                                  screenName: l ? l.screen_name : void 0,
                                  size: t,
                                  style: vn.avatar,
                                  uri: l ? l.profile_image_url_https : void 0,
                                  withLink: i,
                                })
                              })
                            : null,
                          o
                            ? null
                            : C.a.createElement(q.a, {
                                style: [vn.conversationLine, !c && vn.conversationLineWithOverflow],
                              }),
                        ),
                        avatarCellStyle: r ? vn.avatarContainerExpanded : vn.avatarContainer,
                        cellStyle: vn.rightColumn,
                      },
                      this._renderScheduledTweetLegend(),
                      C.a.createElement(
                        q.a,
                        { onFocus: this._handleEditorFocus, style: vn.inputArea },
                        C.a.createElement(
                          Ra.a,
                          {
                            allowDragDrop: !this.mediaAttachDisabled,
                            onDragEnter: this._handleFocus,
                            onFilesAdded: this._handleFilesAdded,
                            style: vn.dragDrop,
                          },
                          function (t) {
                            return C.a.createElement(
                              C.a.Fragment,
                              null,
                              C.a.createElement(q.a, { style: vn.composeBoxContainer }, e._renderMainContent()),
                            )
                          },
                        ),
                      ),
                      this._renderCommunitiesRulesEducation(),
                      C.a.createElement(
                        q.a,
                        { style: [(u || n) && vn.controlsContainer, p ? vn.mobileControlsLayout : vn.controlsLayout] },
                        this._renderConversationControls(d),
                        this._renderCommunitiesRules(p),
                        n ? this._renderTaggedLocation(n) : null,
                      ),
                      C.a.createElement(La.b, { show: a && r }, this._renderToolbar(d)),
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
                    l = a || n.length || !i
                  return C.a.createElement(sn.a, {
                    enabled: !l,
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
                    l = !(!(a || n.length || r || o) && i)
                  return C.a.createElement(X.a, {
                    accessibilityLabel: Qa,
                    behavioralEventContext: Sr,
                    disabled: l,
                    hoverLabel: { label: ir },
                    icon: Er,
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
                    i = t ? C.a.createElement(Ba.a, null) : C.a.createElement(Ua.a, null)
                  return C.a.createElement(X.a, {
                    accessibilityLabel: lr,
                    behavioralEventContext: kr,
                    disabled: r,
                    hoverLabel: { label: lr },
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
                  return C.a.createElement(
                    q.a,
                    { style: vn.imageActions },
                    t && t.url && t.provider
                      ? C.a.createElement(
                          q.a,
                          { style: vn.addImageTextPadding },
                          C.a.createElement(ln.a, { gifUrl: t.url, provider: t.provider }),
                        )
                      : null,
                    (!this.hasAttachedImage && !i) || this._isScheduled()
                      ? null
                      : C.a.createElement(
                          O.b,
                          {
                            accessibilityLabel: dr,
                            color: 'gray700',
                            link: '/compose/tweet/tags',
                            style: [vn.addImageTextContainer, vn.addImageTextPadding],
                          },
                          a ? this._renderTaggedUsers() : this._renderTagPeopleLabel(),
                        ),
                    this.hasAttachedImage || r
                      ? C.a.createElement(
                          O.b,
                          {
                            accessibilityLabel: sr({ numberOfImages: n.length }),
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
                  return C.a.createElement(
                    O.b,
                    { color: 'gray700', size: 'subtext2', testID: ma },
                    C.a.createElement(Na.a, { style: vn.addImageActionIcon }),
                    dr,
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
                  return C.a.createElement(
                    O.b,
                    { color: 'gray700', size: 'subtext2', testID: ba },
                    C.a.createElement(ja.a, { style: vn.addImageActionIcon }),
                    C.a.createElement(Pa.a, { loggedInUserId: null == n ? void 0 : n.id_str, users: a }),
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
                      ? C.a.createElement(
                          O.b,
                          { color: 'gray700', size: 'subtext2', testID: pa },
                          C.a.createElement(Va.a, { style: vn.addImageActionIcon }),
                          cr({ numberOfAltTextEntries: this._getNumberOfAltTextEntries() }),
                        )
                      : C.a.createElement(
                          O.b,
                          { color: 'gray700', numberOfLines: 1, size: 'subtext2', testID: pa },
                          C.a.createElement(Va.a, { style: vn.addImageActionIcon }),
                          null == t ? void 0 : t.altText,
                        )
                    : C.a.createElement(
                        O.b,
                        { color: 'gray700', size: 'subtext2', testID: pa },
                        C.a.createElement(Ha.a, { style: vn.addImageActionIcon }),
                        sr({ numberOfImages: e.length }),
                      )
                },
              },
              {
                key: '_renderSubtitlesLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = this.attachedSubtitles ? za.a : Wa.a
                  return C.a.createElement(
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
                    C.a.createElement(t, {
                      accessibilityLabel: this.attachedSubtitles ? pr : void 0,
                      style: vn.addImageActionIcon,
                    }),
                    this.attachedSubtitles ? this.attachedSubtitles.displayName : ur,
                  )
                },
              },
              {
                key: '_renderCountdownCircle',
                value: function () {
                  var e = this.props,
                    t = e.data.text,
                    n = e.twitterTextConfigurationVersion,
                    a = Ya.a[n],
                    r = this._getParsedTweet(t).weightedLength
                  return C.a.createElement(Ma.a, {
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
                    l = this._isScheduled(),
                    s = n || o || l || !r || a
                  return C.a.createElement(X.a, {
                    accessibilityLabel: this.isReplyOrReplyThread ? tr : er,
                    behavioralEventContext: Ir,
                    disabled: s,
                    hoverLabel: { label: ar },
                    icon: Cr,
                    link: s ? void 0 : t,
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
                    l = n.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof dn.a) && e.mediaFile.isVideo
                    })
                  return 4 === i || o || l || a || this.hasExternalMedia || !r
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
        })(C.a.Component)
      _()(Rr, 'contextType', ce.a),
        _()(Rr, 'defaultProps', { twitterTextConfigurationVersion: 'defaults', withAvatar: !0 })
      var Lr = Object(G.a)(Rr),
        Pr = C.a.createElement(O.b, { weight: 'bold' }),
        Mr = C.a.createElement(O.b, { color: 'link' }),
        Ar = function (e) {
          return '@'.concat(e)
        },
        Dr = n('SrIh'),
        Or = function (e) {
          return (null == e ? void 0 : e.screen_name) || ''
        },
        Fr = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            r = e.loggedInUserId,
            i = {
              replyToOne: function (e) {
                var t = e.userName
                return C.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'e34022a7' },
                  C.a.cloneElement(Mr, null, N.a.b50e199a({ userName: Ar(t) })),
                )
              },
              replyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return C.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'bfd9c99a' },
                  C.a.cloneElement(Mr, null, N.a.f2e4dd37({ replyUserName: Ar(t), otherUserName: Ar(n) })),
                )
              },
              replyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return C.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'g7a1000e' },
                  C.a.cloneElement(
                    Mr,
                    null,
                    N.a.eccfddc3({ userOneName: Ar(t), userTwoName: Ar(a), userThreeName: Ar(n) }),
                  ),
                )
              },
              replyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return C.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'i558c201' },
                  C.a.cloneElement(Mr, null, N.a.h758cd22({ userOneName: Ar(n), userTwoName: Ar(a), othersCount: t })),
                )
              },
              communityReplyToOne: function (e) {
                var t = e.communityName,
                  n = e.userName
                return C.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'j935bcde', communityName: t },
                  C.a.cloneElement(Mr, null, N.a.e9f8a0eb({ userName: Ar(n) })),
                )
              },
              communityReplyToTwo: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userTwoName
                return C.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'i7bd9c8e', communityName: t },
                  C.a.cloneElement(Mr, null, N.a.df7e9fbc({ replyUserName: Ar(n), otherUserName: Ar(a) })),
                )
              },
              communityReplyToThree: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userThreeName,
                  r = e.userTwoName
                return C.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'cfa0049d', communityName: t },
                  C.a.cloneElement(
                    Mr,
                    null,
                    N.a.b45fa505({ userOneName: Ar(n), userTwoName: Ar(r), userThreeName: Ar(a) }),
                  ),
                )
              },
              communityReplyToMany: function (e) {
                var t = e.communityName,
                  n = e.othersCount,
                  a = e.userOneName,
                  r = e.userTwoName
                return C.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'jfc8e4b4', communityName: t },
                  C.a.cloneElement(Mr, null, N.a.a4383815({ userOneName: Ar(a), userTwoName: Ar(r), othersCount: n })),
                )
              },
              exclusiveReplyToOne: function (e) {
                var t = e.userName
                return C.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'a4e11010' },
                  C.a.cloneElement(Mr, null, N.a.ff792e35({ userName: Ar(t) })),
                  C.a.cloneElement(Pr, null, N.a.a18d8f1c),
                )
              },
              exclusiveReplyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return C.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'cf1b3321' },
                  C.a.cloneElement(Mr, null, N.a.g7d5e985({ replyUserName: Ar(t), otherUserName: Ar(n) })),
                  C.a.cloneElement(Pr, null, N.a.af82725c),
                )
              },
              exclusiveReplyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return C.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'c83d647e' },
                  C.a.cloneElement(
                    Mr,
                    null,
                    N.a.fe5a61e9({ userOneName: Ar(t), userTwoName: Ar(a), userThreeName: Ar(n) }),
                  ),
                  C.a.cloneElement(Pr, null, N.a.f7126257),
                )
              },
              exclusiveReplyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return C.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'fec57cab' },
                  C.a.cloneElement(Mr, null, N.a.bc9dd514({ userOneName: Ar(n), userTwoName: Ar(a), othersCount: t })),
                  C.a.cloneElement(Pr, null, N.a.de5071ba),
                )
              },
            },
            o = S.a({ inReplyToStatus: a, loggedInUserId: r }).filter(function (e) {
              var t = e.id_str
              return n.indexOf(t) < 0
            }),
            l = a.retweeted_status || a,
            s = l.exclusivity_info,
            c = l.user,
            d = o.filter(function (e) {
              return e.id_str !== c.id_str
            }),
            u = k()(d, 2),
            p = u[0],
            m = u[1],
            h = [c, p, m].map(Or),
            f = k()(h, 3),
            v = f[0],
            g = f[1],
            y = f[2],
            b = o.length - 2
          switch (o.length) {
            case 0:
              return Object(Dr.a)('Compose reply context should not have 0 recipients'), null
            case 1:
              return t
                ? i.communityReplyToOne({ communityName: t, userName: v })
                : s
                ? i.exclusiveReplyToOne({ userName: v })
                : i.replyToOne({ userName: v })
            case 2:
              return t
                ? i.communityReplyToTwo({ communityName: t, userOneName: v, userTwoName: g })
                : s
                ? i.exclusiveReplyToTwo({ userOneName: v, userTwoName: g })
                : i.replyToTwo({ userOneName: v, userTwoName: g })
            case 3:
              return t
                ? i.communityReplyToThree({ communityName: t, userOneName: v, userTwoName: g, userThreeName: y })
                : s
                ? i.exclusiveReplyToThree({ userOneName: v, userTwoName: g, userThreeName: y })
                : i.replyToThree({ userOneName: v, userTwoName: g, userThreeName: y })
            default:
              return t
                ? i.communityReplyToMany({ communityName: t, userOneName: v, userTwoName: g, othersCount: b })
                : s
                ? i.exclusiveReplyToMany({ userOneName: v, userTwoName: g, othersCount: b })
                : i.replyToMany({ userOneName: v, userTwoName: g, othersCount: b })
          }
        },
        Br = C.a.memo(Fr),
        Ur = n('fs1G'),
        Nr = n('BLtI'),
        jr = n('kY28')
      function Hr(e) {
        null == e || e.preventDefault()
      }
      var Vr = B.a.create(function (e) {
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
        zr = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            r = e.loggedInUserId,
            i = e.onPress,
            o = e.shouldDisplayRepliesText,
            l = e.showParentTweet,
            s = void 0 === l || l
          return C.a.createElement(
            q.a,
            null,
            s
              ? C.a.createElement(Nr.b, {
                  conversationPosition: { isStart: !0 },
                  linkableQuotedTweet: !1,
                  linkify: !1,
                  onAnalyticsClick: Ur.a,
                  onAvatarClick: Hr,
                  onEntityClick: Hr,
                  onMediaClick: Hr,
                  onReplyContextClick: Hr,
                  replyContext: jr.a.ReplyContextTypes.None,
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
            C.a.createElement(
              q.a,
              { style: Vr.replyUsersContainer },
              C.a.createElement(
                Sa.a,
                {
                  avatarCell: s ? C.a.createElement(q.a, { style: Vr.conversationLine }) : null,
                  avatarCellStyle: Vr.conversationLineContainer,
                  cellStyle: Vr.repliesTextContainer,
                  style: Vr.grid,
                },
                o
                  ? C.a.createElement(
                      O.b,
                      { accessibilityRole: 'button', color: 'gray700', onPress: i, style: s && Vr.repliesMessage },
                      C.a.createElement(Br, {
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
        Wr = n('Tb0w'),
        Gr = n('1YZw'),
        qr = n('pidX'),
        Kr = n('5oBF'),
        Xr = n('JYYi'),
        Yr = n('/Rsk'),
        Qr = n('u7LJ'),
        Jr = n('XOJV'),
        Zr = n('G6rE'),
        $r = n('AspN'),
        ei = n('oEGd'),
        ti = n('2iUg'),
        ni = n('P1r1'),
        ai = ['mediaIds'],
        ri = function (e) {
          return e.parentTweetId || (e.isInline ? Xr.a.homeTimeline : Xr.a.modal)
        },
        ii = function (e, t) {
          var n = ri(t)
          return de.k(e, n)
        },
        oi = function (e, t) {
          var n = ri(t)
          return de.l(e, n)
        },
        li = function (e, t) {
          var n = ri(t)
          return de.j(e, n)
        },
        si = function (e, t) {
          var n = vi(e, t),
            a = li(e, t).communityIdValue || void 0,
            r = (null == n ? void 0 : n.community_id_str) || a,
            i = r ? L.c.select(e, r) : void 0
          return i ? i.name : void 0
        },
        ci = function (e, t) {
          var n = ri(t)
          return de.m(e, n)
        },
        di = function (e, t) {
          var n = ri(t)
          return de.i(e, n)
        },
        ui = function (e) {
          return function (t, n) {
            var a = (function (e, t) {
              return t.location.state
            })(0, n)
            return a ? e(a) : void 0
          }
        },
        pi = Object(me.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          Zr.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        mi = function (e, t) {
          return t.parentTweetId || hi(e, t) || fi(e, t)
        },
        hi = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        fi = ui(function (e) {
          return e.inReplyToStatusId
        }),
        vi = function (e, t) {
          var n = mi(e, t)
          return n ? Jr.a.selectHydrated(e, n) : void 0
        },
        gi = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        yi = ui(function (e) {
          return e.hasArticleNudge
        }),
        bi = ui(function (e) {
          return e.convoCardData
        }),
        _i = ui(function (e) {
          return e.externalMedia
        }),
        wi = ui(function (e) {
          return e.externalMediaFiles
        }),
        Ci = ui(function (e) {
          return e.previewTweetId
        }),
        Ei = ui(function (e) {
          return e.defaultText
        }),
        Ti = function (e, t) {
          var n = Ei(e, t),
            a = Object(qr.a)(t.location)
          return (gi(0, t) ||
            (function (e, t) {
              return t.location.pathname.indexOf('/compose/tweet') > -1
            })(0, t)) &&
            a
            ? a
            : n
        },
        xi = ui(function (e) {
          return e.quotedStatusId
        }),
        Si = ui(function (e) {
          return e.quotedStatus
        }),
        Ii = function (e, t) {
          return (
            (function (e, t) {
              return t.quotedStatus ? t.quotedStatus : Si(e, t)
            })(e, t) ||
            (function (e, t) {
              var n = xi(e, t)
              return n ? Jr.a.selectHydratedMemoized(e, n) : void 0
            })(e, t)
          )
        },
        ki = ui(function (e) {
          return e.isSelfThreadReply
        }),
        Ri = ui(function (e) {
          return e.positionCursorAtBeginning
        }),
        Li = ui(function (e) {
          return e.promotedContent
        }),
        Pi = function () {
          return Object(me.createSelector)(ii, Ti, Ii, $r.j, function (e, t, n, a) {
            return e.map(function (e, r) {
              return s()(
                s()({}, ((i = e).mediaIds, Ut()(i, ai))),
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
        Mi = {
          addComposer: de.a,
          addToast: Gr.b,
          createLocalApiErrorHandler: Object(ge.createLocalApiErrorHandlerWithContextFactory)('SCREEN_COMPOSE_V2'),
          checkTweetForNudge: de.b,
          deletePreviewTweet: Kr.c,
          fetchAltTextPromptPreferenceIfNeeded: ti.a,
          fetchAutotaggedLocationIfNeeded: Yr.a,
          fetchTweetIfNeeded: Jr.a.fetchOneIfNeeded,
          removeComposer: de.e,
          resetDraft: de.f,
          retweet: Jr.a.retweet,
          schedule: de.h,
          draftTweet: de.d,
          send: de.q,
          updateActiveComposerIndex: de.s,
          updateAudienceControlsValue: de.t,
          updateConvoCardState: Wr.b,
          preUploadMedia: $r.e,
          addMedia: $r.b,
          processMultipleMedia: $r.g,
          removeMediaUpload: $r.i,
          removeToast: Gr.c,
          updateSingleComposer: de.w,
          setActiveParentKey: de.r,
          copyDataFromInlineComposerToModalComposer: de.c,
        },
        Ai = Object(ei.e)(function () {
          return Object(me.createStructuredSelector)({
            activeComposerIndex: di,
            activeUser: pi,
            altTextNudgeType: ti.b,
            audienceControlsValue: li,
            composerData: Pi(),
            dataSaverMode: ni.j,
            excludedRecipients: oi,
            externalMedia: _i,
            externalMediaFiles: wi,
            geoEnabled: ni.o,
            hasArticleNudge: yi,
            inReplyToStatus: vi,
            inReplyToStatusId: mi,
            isIntentRoute: gi,
            isSelfThreadReply: ki,
            isSending: ci,
            isSuperFollowsCreator: fe.l,
            positionCursorAtBeginning: Ri,
            loggedInUser: Zr.e.selectLoggedInUser,
            prepopulatedText: Ti,
            previewTweetId: Ci,
            promotedContent: Li,
            scheduledFor: de.n,
            selectedCommunityName: si,
            sendingProgress: de.o,
            convoCardData: bi,
            undoTweetSettings: Qr.b,
            userLanguage: fe.o,
            quotedStatusId: xi,
          })
        }, Mi),
        Di = n('45mF'),
        Oi = n('c0ZR'),
        Fi = n('W5XZ'),
        Bi = n('Drq4'),
        Ui = n('0uGn'),
        Ni = n('I8M8'),
        ji = n('7myi'),
        Hi = n('7nmT'),
        Vi = n.n(Hi),
        zi = n('vbWy'),
        Wi = n('Rp9C'),
        Gi = n('Q5Mu'),
        qi = n('N5qz'),
        Ki = 'tweetButton',
        Xi = 'tweetButtonInline',
        Yi = Object(P.a)()
          .propsFromState(function () {
            return { loggedInUser: Zr.e.selectLoggedInUser }
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
        Qi = n('cHvH'),
        Ji = n('sgih'),
        Zi = n('xKuM'),
        $i = n('5Vk4'),
        eo = B.a.create(function (e) {
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
        to = function (e) {
          var t = e.actionButtonType,
            n = e.children,
            a = e.onActionButtonClick,
            r = e.onMaskClick,
            i = e.sheetType,
            o = e.showActionButton
          return C.a.createElement(Qi.a, null, function (e) {
            var l = e.windowWidth > B.a.theme.breakpoints.small
            return C.a.createElement(
              Ji.a,
              { onMaskClick: r, style: eo.sheetStyle, type: i, withMask: !0 },
              o &&
                C.a.createElement(Zi.a, {
                  leftControl: C.a.createElement($i.a, { backButtonType: t, onClick: a }),
                  position: 'absolute',
                }),
              C.a.createElement(q.a, { style: [eo.mainCard, l ? eo.largeScreenCard : eo.smallScreenCard] }, n),
            )
          })
        },
        no = N.a.cb7c0987,
        ao = N.a.de3bcf27,
        ro = N.a.e710ce75,
        io = N.a.h11e5910,
        oo = N.a.b7ec04f3,
        lo = N.a.i62a03aa,
        so = B.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
          }
        }),
        co = function (e) {
          var t = e.onBack,
            n = e.onNo,
            a = e.onYes
          return C.a.createElement(
            to,
            {
              actionButtonType: 'back',
              onActionButtonClick: t,
              onMaskClick: t,
              sheetType: 'full',
              showActionButton: !0,
            },
            C.a.createElement(O.b, { size: 'title4', style: so.itemPadding, weight: 'heavy' }, no),
            C.a.createElement(O.b, { color: 'gray700', style: so.itemPadding }, ao),
            C.a.createElement(O.b, { color: 'gray700', style: so.itemPadding }, ro),
            C.a.createElement(
              q.a,
              { style: so.buttonContainer },
              C.a.createElement(O.b, { size: 'title4', style: so.itemPadding, weight: 'heavy' }, io),
              C.a.createElement(X.a, { onPress: a, style: so.itemPadding, type: 'brandOutlined' }, oo),
              C.a.createElement(X.a, { onPress: n, style: so.itemPadding, type: 'brandOutlined' }, lo),
            ),
          )
        },
        uo = n('cm6r'),
        po = B.a.create(function (e) {
          return { button: { width: e.spaces.space72, height: e.spaces.space72, marginBottom: e.spaces.space12 } }
        }),
        mo = function (e) {
          var t = e.icon,
            n = e.label,
            a = e.onPress
          return C.a.createElement(uo.a, { interactiveStyles: null, onPress: a }, function (e) {
            return C.a.createElement(
              C.a.Fragment,
              null,
              C.a.createElement(X.a, {
                icon: t,
                interactivityState: e,
                size: 'xLarge',
                style: po.button,
                type: 'primaryOutlined',
              }),
              C.a.createElement(O.b, { color: 'gray700' }, n),
            )
          })
        },
        ho = n('sjK1'),
        fo = n('FDY4'),
        vo = n('tevE'),
        go = n('jV+4'),
        yo = n('UgB4'),
        bo = n('TW8A'),
        _o = n('hiGS'),
        wo = n('WtWS'),
        Co = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Xe.a)(
            'svg',
            s()(
              s()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Ke.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            C.a.createElement(
              'g',
              null,
              C.a.createElement('path', {
                d: 'M17.928 9.026l.095 3.545H19l.1-3.544h-1.172zm.586 5.394c.414 0 .667-.238.667-.623 0-.388-.252-.626-.666-.626-.41 0-.667.24-.667.627 0 .385.257.623.667.623zm-4.57-.11h.813l.278-1.384h.89l.15-.813h-.883l.198-.96h.875l.15-.805h-.864l.268-1.326h-.813l-.27 1.326h-.946l.263-1.326h-.81l-.27 1.326h-.846l-.154.806h.846l-.2.96h-.83l-.15.812h.824l-.278 1.384h.81l.277-1.384h.952l-.28 1.384zm-.578-2.124l.227-1.102h1.055l-.23 1.102h-1.052zm-5.889-.941c.388 0 .634.32.634.835s-.244.835-.636.835c-.385 0-.615-.315-.615-.835-.002-.524.23-.835.617-.835zM7.595 9C5.763 9 4.5 10.245 4.5 12.054c0 1.838 1.25 3.05 3.157 3.05.388 0 .765-.047 1.05-.13v-.598c-.204.073-.603.12-.995.12-1.556 0-2.542-.937-2.542-2.423 0-1.46.985-2.48 2.402-2.48 1.392 0 2.307.865 2.307 2.19 0 .744-.24 1.213-.61 1.213-.222 0-.35-.15-.35-.41v-1.94h-.74v.435h-.065c-.147-.325-.465-.515-.857-.515-.732 0-1.23.604-1.23 1.494 0 .93.505 1.544 1.267 1.544.425 0 .725-.19.88-.56h.065c.08.352.414.57.872.57.886 0 1.44-.728 1.44-1.892C10.55 10.106 9.348 9 7.594 9z',
              }),
            ),
          )
        }
      Co.metadata = { width: 24, height: 24 }
      var Eo = Co,
        To = [
          { headlineText: N.a.f3a7a80c, subTextLine1: N.a.ge52d1de, subTextLine2: null },
          { headlineText: N.a.j311bf49, subTextLine1: N.a.ae42ebff, subTextLine2: N.a.aa350ab1 },
          { headlineText: N.a.j18b2956, subTextLine1: N.a.f6bee896, subTextLine2: N.a.dddd0995 },
          { headlineText: N.a.d02a94fa, subTextLine1: N.a.dddd0995, subTextLine2: null },
          { headlineText: N.a.i018b746, subTextLine1: N.a.b8d85df9, subTextLine2: N.a.d5ca11f0 },
        ],
        xo = N.a.h11e5910,
        So = N.a.abd845fd,
        Io = N.a.bea869b3,
        ko = N.a.d96cf7cd,
        Ro = N.a.d3145da8,
        Lo = B.a.create(function (e) {
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
        Po = function (e) {
          var t = e.hasSentFeedback,
            n = e.media,
            a = e.onDeleteTweet,
            r = e.onDismiss,
            i = e.onEditTweet,
            o = e.onSendTweet,
            l = e.onWeGotItWrong,
            s = e.tweetText,
            c = e.userName,
            d = e.userProfileImageUrl,
            u = e.userScreenName,
            p = C.a.useContext(ce.a).featureSwitches.getNumberValue('responsive_web_reply_nudge_copy_version'),
            m = To[(p = p >= 0 && p <= 4 ? p : 0)]
          return C.a.createElement(Qi.a, null, function (e) {
            var p,
              h,
              f,
              v = e.windowWidth
            return C.a.createElement(
              to,
              {
                actionButtonType: 'close',
                onActionButtonClick: r,
                onMaskClick: r,
                sheetType: 'full',
                showActionButton: v > B.a.theme.breakpoints.medium,
              },
              C.a.createElement(Eo, { style: [Lo.profanityIcon, Lo.itemPadding] }),
              C.a.createElement(vo.a, { size: 'title4', style: Lo.itemPadding, weight: 'heavy' }, m.headlineText),
              C.a.createElement(O.b, { color: 'gray700', style: Lo.itemPadding }, m.subTextLine1),
              C.a.createElement(O.b, { color: 'gray700', style: Lo.itemPadding }, m.subTextLine2),
              C.a.createElement(
                q.a,
                { style: [Lo.tweetContainer, Lo.itemPadding] },
                C.a.createElement(
                  q.a,
                  { style: Lo.tweetContent },
                  C.a.createElement(go.a, { name: c, profileImageUrl: d, screenName: u, style: Lo.userName }),
                  C.a.createElement(
                    q.a,
                    { style: Lo.tweetBody },
                    (function () {
                      if (0 === n.length) return null
                      var e = n.map(function (e) {
                        var t,
                          n,
                          a,
                          r = ''
                        if (e.externalMediaDetails) r = e.externalMediaDetails.stillMediaUrl
                        else if (e.mediaFile instanceof ho.c) r = e.mediaFile.thumbnail
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
                      return C.a.createElement(
                        q.a,
                        { style: Lo.photos },
                        C.a.createElement(fo.a, {
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
                    C.a.createElement(O.b, { style: Lo.textStyle }, s),
                  ),
                ),
              ),
              t
                ? C.a.createElement(
                    q.a,
                    { style: Lo.thanksContainer },
                    C.a.createElement(wo.a, { style: Lo.thanksCheckMark }),
                    C.a.createElement(O.b, { align: 'center', style: Lo.itemPadding }, Ro),
                  )
                : C.a.createElement(O.b, { align: 'center', onPress: l, style: Lo.itemPadding, withUnderline: !0 }, xo),
              v > B.a.theme.breakpoints.small
                ? C.a.createElement(
                    q.a,
                    { style: Lo.buttonContainer },
                    C.a.createElement(X.a, { onPress: i, style: Lo.itemPadding, type: 'brandFilled' }, So),
                    C.a.createElement(X.a, { onPress: o, style: Lo.itemPadding, type: 'brandOutlined' }, Io),
                    C.a.createElement(X.a, { onPress: a, style: Lo.itemPadding, type: 'destructiveText' }, ko),
                  )
                : ((p = C.a.createElement(yo.a, { style: { color: B.a.theme.colors.text } })),
                  (h = C.a.createElement(bo.a, { style: { color: B.a.theme.colors.primary } })),
                  (f = C.a.createElement(_o.a, { style: { color: B.a.theme.colors.red500 } })),
                  C.a.createElement(
                    q.a,
                    { style: Lo.mobileButtonContainer },
                    C.a.createElement(mo, { icon: p, label: Io, onPress: o }),
                    C.a.createElement(mo, { icon: h, label: So, onPress: i }),
                    C.a.createElement(mo, { icon: f, label: ko, onPress: a }),
                  )),
            )
          })
        },
        Mo = Yi(function (e) {
          var t = e.analytics,
            n = e.media,
            a = e.nudgeId,
            r = e.onDeleteTweet,
            i = e.onDismiss,
            o = e.onEditTweet,
            l = e.onSendTweet,
            s = e.tweetText,
            c = e.userName,
            d = e.userProfileImageUrl,
            u = e.userScreenName,
            p = C.a.useState(!1),
            m = k()(p, 2),
            h = m[0],
            f = m[1],
            v = C.a.useState(!1),
            g = k()(v, 2),
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
            ? C.a.createElement(co, {
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
            : C.a.createElement(Po, {
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
                  _({ action: 'send', element: 'action', page: 'nudge' }), l()
                },
                onWeGotItWrong: function () {
                  _({ action: 'more_info', element: 'action', page: 'nudge' }),
                    _({ action: 'impression', page: 'nudge_more_info' }),
                    f(!0)
                },
                tweetText: s,
                userName: c,
                userProfileImageUrl: d,
                userScreenName: u,
              })
        }),
        Ao = n('aITJ'),
        Do = n('eb3s'),
        Oo = n('JYMr'),
        Fo = n('sCk0'),
        Bo = n('3A2y'),
        Uo = n('zrOZ'),
        No = n('s1N3'),
        jo = n('4FGy'),
        Ho = n('mN6z'),
        Vo = n('eyty'),
        zo = n('rziq'),
        Wo = n('lsKC'),
        Go = n('jTgF'),
        qo = N.a.d28215f0,
        Ko = N.a.ec909a54,
        Xo = N.a.jd53409d,
        Yo = {
          singular: N.a.edae65de,
          plural: N.a.a859846a,
          oneOfMultiple: N.a.e90118f5,
          someOfMultiple: N.a.c211dcb1,
        },
        Qo = { singular: N.a.d7c26bfb, plural: N.a.a75e3ccc },
        Jo = N.a.dcb7e3a0,
        Zo = function (e) {
          var t,
            n,
            a = e.numberOfDescriptionsMissing,
            r = a === e.numberOfImages
          return (
            1 === a
              ? ((n = Qo.singular), (t = r ? Yo.singular : Yo.oneOfMultiple))
              : ((n = Qo.plural), (t = r ? Yo.plural : Yo.someOfMultiple)),
            ''.concat(t, ' ').concat(n, ' ').concat(Jo)
          )
        },
        $o = N.a.c1bf53b0,
        el = N.a.bb8170da,
        tl = N.a.dad5a4b8,
        nl = N.a.e65aed64,
        al = N.a.bc2ceaf2,
        rl = N.a.d8222374,
        il = N.a.j890123a,
        ol = N.a.bb01231c,
        ll = N.a.d4ab68e2,
        sl = N.a.d8af8a4c,
        cl = N.a.d09d4c05,
        dl = N.a.i2209530,
        ul = N.a.bf9b89e4,
        pl = N.a.f277e949,
        ml = N.a.b551cd22,
        hl = N.a.f026a7fa,
        fl = N.a.a5d4fda0,
        vl = N.a.ib067d6a,
        gl = x.canUseDOM && document.documentElement && 'scrollBehavior' in document.documentElement.style,
        yl = { element: 'alt_text_prompt' },
        bl = { component: 'article_nudge' },
        _l = { viewType: 'send_tweet' },
        wl = Object.freeze({ Original: 'original', Reply: 'reply', Quote: 'quote', Thread: 'thread' }),
        Cl = (function (e) {
          v()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r, i, l
            d()(this, n),
              (l = t.call(this, e, a)),
              _()(h()(l), '_getParentKey', function () {
                var e = l.props,
                  t = e.isInline
                return e.parentTweetId || (t ? Xr.a.homeTimeline : Xr.a.modal)
              }),
              _()(h()(l), '_updateSingleComposer', function (e, t) {
                return (0, l.props.updateSingleComposer)({ updates: e, index: t, parentKey: l._getParentKey() })
              }),
              _()(h()(l), '_resetDraft', function () {
                ;(0, l.props.resetDraft)({ parentKey: l._getParentKey(), isPreview: l.isPreview })
              }),
              _()(h()(l), '_fetchAutotaggedLocationIfNeeded', function () {
                var e = l.props,
                  t = e.createLocalApiErrorHandler
                return (0, e.fetchAutotaggedLocationIfNeeded)().catch(t())
              }),
              _()(h()(l), '_syncTexts', function () {
                var e = l.props.composerData,
                  t = l.state.textMap
                e.forEach(function (e, n) {
                  var a = t[e.key]
                  'string' == typeof a && a !== e.text && l._updateSingleComposer({ text: a }, n)
                })
              }),
              _()(h()(l), '_hasGif', function (e) {
                return (
                  e.gifMetadata ||
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isGif
                  })
                )
              }),
              _()(h()(l), '_hasPhoto', function (e) {
                return (
                  e.media &&
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isImage
                  })
                )
              }),
              _()(h()(l), '_hasVideo', function (e) {
                return (
                  e.media &&
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isVideo && !e.mediaFile.isGif
                  })
                )
              }),
              _()(h()(l), '_handleDeletePreviewTweet', function () {
                var e = l.props,
                  t = e.deletePreviewTweet,
                  n = e.previewTweetId,
                  a = e.removeToast
                n && (a(), t(n))
              }),
              _()(h()(l), '_handleAnimateComplete', function () {
                var e = l.props,
                  t = e.activeComposerIndex,
                  n = e.onHandleAppBarHeight,
                  a = Vi.a.findDOMNode(l._composerRefs[t])
                if (a instanceof window.Element) {
                  var r = a.getBoundingClientRect(),
                    i = r.bottom,
                    o = r.top,
                    s = Math.max(o, window.scrollY)
                  if (s < window.pageYOffset || i > window.innerHeight) {
                    var c = n ? s - n() - 14 : s - 14,
                      d = Math.max(c, 0)
                    window.requestAnimationFrame(function () {
                      gl ? window.scrollTo({ top: d, left: 0, behavior: 'smooth' }) : window.scrollTo(0, d)
                    })
                  }
                }
              }),
              _()(h()(l), '_handleFetchTweetIfNeeded', function () {
                var e = l.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchTweetIfNeeded,
                  a = e.inReplyToStatus,
                  r = e.inReplyToStatusId,
                  i = e.quotedStatus,
                  o = e.quotedStatusId
                !a && r && n(r).catch(t(Fi.a)), !i && o && n(o).catch(t(Fi.a))
              }),
              _()(h()(l), '_blockHistory', function (e, t) {
                var n = l.props,
                  a = n.audienceControlsValue,
                  r = n.isInline,
                  i = !r && /unsent/.test(e.pathname),
                  o = !r && !/\/compose\/tweet\/?$/.test(e.pathname)
                return l.shouldShowDiscardConfirmation && 'POP' === t && o
                  ? (l.setState({ showDiscardTweetConfirmation: !0 }), !1)
                  : l._canSaveDraft && i && 'PUSH' === t
                  ? l.shouldShowDiscardConfirmation
                    ? (l.setState({ showDiscardTweetConfirmation: !0, navigatingToOutbox: i }), !1)
                    : (l._resetDraft(), !0)
                  : l.shouldShowBackgroundSendConfirmation && 'POP' === t && o
                  ? (l._cancelAllMediaUploads(), !1)
                  : !('POP' === t && o && l._areComposersEmptyOrUnchanged && !Object(pn.a)(a)) || (l._resetDraft(), !0)
              }),
              _()(h()(l), '_getKeyCommandHandlers', function () {
                return l.state.typeaheadActive ? l._keyCommandHandlersForActiveTypeahead : l._keyCommandHandlers
              }),
              _()(h()(l), 'handleTweetOrRetweet', function () {
                if (
                  (l._scribe({ section: 'composition', element: 'send_tweet', action: 'click' }),
                  l._areComposersValid())
                )
                  return l.shouldShowAltTextPrompt
                    ? (l.setState({ showAltTextPrompt: !0 }), void l._scribe(s()(s()({}, yl), {}, { action: 'show' })))
                    : l._handleTweetOrRetweet()
              }),
              _()(h()(l), '_handleTweetOrRetweet', function () {
                return l.isRetweet ? l._handleRetweet() : l._handleTweet()
              }),
              _()(h()(l), '_renderReplyContext', function () {
                var e = l.props,
                  t = e.activeUser,
                  n = e.excludedRecipients,
                  a = e.inReplyToStatus,
                  r = e.isInline,
                  i = e.isSelfThreadReply,
                  o = e.selectedCommunityName
                if (a && l._shouldBeExpanded())
                  return C.a.createElement(zr, {
                    communityName: o,
                    excludedRecipients: n,
                    inReplyToStatus: a,
                    key: n.join(),
                    loggedInUserId: t ? t.id_str : void 0,
                    onPress: l._handleViewRecipients,
                    shouldDisplayRepliesText: !i,
                    showParentTweet: !r,
                  })
              }),
              _()(h()(l), '_renderAltTextPrompt', function () {
                var e = l._getAltTextMetadata(),
                  t = e.numberOfDescriptionsMissing,
                  n = e.numberOfImages
                return C.a.createElement(Do.a, {
                  Icon: Bi.a,
                  cancelButtonLabel: el,
                  confirmButtonLabel: $o({ numOfDescriptions: t }),
                  headline: Xo,
                  onCancel: l._handleIgnoreAltTextPrompt,
                  onConfirm: l._handleAcceptAltTextPrompt,
                  onMaskClick: l._handleCancelAltTextPrompt,
                  text: Zo({ numberOfDescriptionsMissing: t, numberOfImages: n }),
                })
              }),
              _()(h()(l), '_renderToxicReplyNudge', function () {
                var e = l._getSingleComposerDataWithLatestText(l.props.composerData[0]),
                  t = e.text,
                  n = e.media
                return C.a.createElement(Mo, {
                  media: n,
                  nudgeId: l.state.nudgeId,
                  onDeleteTweet: l._handleReplyNudgeDeleteTweet,
                  onDismiss: l._handleReplyNudgeDismiss,
                  onEditTweet: l._handleReplyNudgeEditTweet,
                  onSendTweet: l._handleReplyNudgeSendTweet,
                  tweetText: t,
                })
              }),
              _()(h()(l), '_handleAddComposer', function () {
                var e = l.props,
                  t = e.addComposer,
                  n = e.copyDataFromInlineComposerToModalComposer,
                  a = e.isInline,
                  r = e.parentTweetId
                l.isInlineReply ? n(r) : a && n(Xr.a.homeTimeline), t()
              }),
              _()(
                h()(l),
                '_makeAddComposerLink',
                Object(bn.a)(function (e, t, n) {
                  return Object(Wo.c)({ isInline: e, isSelfThreadReply: t, parentTweetId: n })
                }),
              ),
              _()(h()(l), '_handleReplyNudgeDeleteTweet', function () {
                l._hideToxicReplyNudge(), l._handleConfirmDiscardTweet()
              }),
              _()(h()(l), '_handleReplyNudgeDismiss', function () {
                l._hideToxicReplyNudge()
              }),
              _()(h()(l), '_handleReplyNudgeEditTweet', function () {
                l._hideToxicReplyNudge()
              }),
              _()(h()(l), '_handleReplyNudgeSendTweet', function () {
                l._hideToxicReplyNudge(), l._handleSendTweet()
              }),
              _()(h()(l), '_setRootRef', function (e) {
                e && (l._root = e)
              }),
              _()(h()(l), '_handleTweet', function () {
                var e = l.props.composerData[0].scheduledFor
                l.setState({ errorMessage: void 0 }),
                  e ? Object(mn.h)(e) && l._handleScheduleTweet() : l._checkToxicReplyAndSendTweet()
              }),
              _()(h()(l), '_handleTweetError', function (e, t) {
                return function (n) {
                  var a = l.props,
                    r = a.analytics,
                    i = a.createLocalApiErrorHandler
                  if (Object(Go.d)(n) && n.code === Ni.b.CANCELED) return r.scribeAction(e), Promise.resolve()
                  var o = Object(Go.b)(n)
                  if (o) return l.setState({ errorMessage: o }), Promise.resolve()
                  var c = t || Object(Di.a)(void 0, !1)
                  i(s()({}, c))(n)
                  var d = n instanceof T.a && (null == t ? void 0 : t[n.errors[0].code])
                  l.setState({ errorMessage: { text: d ? d.toast.text : fl } })
                }
              }),
              _()(h()(l), '_handleScheduleTweet', function () {
                var e = l.props,
                  t = e.addToast,
                  n = e.composerData,
                  a = e.excludedRecipients,
                  r = e.inReplyToStatus,
                  i = e.schedule,
                  o = l._getSingleComposerDataWithLatestText(n[0])
                i({ excludedRecipients: a, inReplyToStatus: r, scheduleData: o })
                  .then(function (e) {
                    l.setState({ tweetsSentOrScheduled: !0 })
                    var a = Object(mn.c)(o.scheduledFor)
                    if (a) {
                      var r = Object(mn.b)(a),
                        i = Object(mn.i)(a),
                        c = ml({ scheduleDate: r, scheduleTime: i })
                      t({ text: c, action: { label: pl, link: '/compose/tweet/unsent/scheduled' } }),
                        l._scribeTweetSent(n[0], s()(s()({}, e), {}, { id_str: e.scheduled_id_str }), {
                          isScheduled: !0,
                        })
                    }
                    l._updateConvoCardState(), l._close()
                  })
                  .catch(l._handleTweetError('schedule_tweet_cancel'))
              }),
              _()(h()(l), '_handleDraftTweet', function () {
                var e = l.props,
                  t = e.addToast,
                  n = e.composerData
                ;(0, e.draftTweet)({
                  excludedRecipients: e.excludedRecipients,
                  inReplyToStatus: e.inReplyToStatus,
                  draftData: l._getSingleComposerDataWithLatestText(n[0]),
                })
                  .then(function (e) {
                    l.setState({ showDiscardTweetConfirmation: !1 }),
                      t({ text: ul, action: { label: pl, link: '/compose/tweet/unsent/drafts' } }),
                      l._scribeTweetSent(n[0], s()(s()({}, e), {}, { id_str: e.draft_id_str }), { isDraftTweet: !0 }),
                      l._updateConvoCardState(),
                      l._close()
                  })
                  .catch(l._handleTweetError('draft_tweet_cancel', Gi.a))
              }),
              _()(h()(l), '_checkToxicReply', function () {
                var e = l.props,
                  t = e.checkTweetForNudge,
                  n = e.composerData,
                  a = e.inReplyToStatus,
                  r = e.inReplyToStatusId,
                  i = e.parentTweetId,
                  o = t(
                    l._getSingleComposerDataWithLatestText(n[0]).text,
                    i || r,
                    null == a ? void 0 : a.conversation_id_str,
                  ).then(function (e) {
                    var t, n, a, r, i, o, s
                    if (
                      !l.context.featureSwitches
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
                        null === (s = o.nudge) ||
                        void 0 === s
                          ? void 0
                          : s.id
                    return d && l.setState({ nudgeId: d }), !!c
                  }),
                  s = new Promise(function (e, t) {
                    return setTimeout(e, 1e3, !1)
                  })
                return Promise.race([o, s])
              }),
              _()(h()(l), '_showToxicReplyNudge', function () {
                l._scribe(
                  { page: 'nudge', section: 'dialog', action: 'impression' },
                  { items: [{ nudge_id: l.state.nudgeId }] },
                ),
                  l.setState({ showToxicReplyNudge: !0 })
              }),
              _()(h()(l), '_hideToxicReplyNudge', function () {
                return l.setState({ showToxicReplyNudge: !1 })
              }),
              _()(h()(l), '_checkToxicReplyAndSendTweet', function () {
                var e = l.props,
                  t = e.composerData,
                  n = e.isSelfThreadReply,
                  a = l.state.nudgeId
                if (
                  !(
                    !l._getSingleComposerDataWithLatestText(t[0]).scheduledFor &&
                    l.isReply &&
                    !n &&
                    l.context.featureSwitches.isTrue('responsive_web_reply_nudge_enabled') &&
                    !a
                  )
                )
                  return l._handleSendTweet()
                l._checkToxicReply().then(function (e) {
                  if (!e) return l._handleSendTweet()
                  l.context.featureSwitches.isTrue('responsive_web_reply_nudge_show_nudge') && l._showToxicReplyNudge()
                })
              }),
              _()(h()(l), '_handleSendTweet', function () {
                var e = l.props,
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
                  w = void 0 === _ ? void 0 : _,
                  C = r.trustedFriendsMemberCount,
                  E = void 0 === C ? void 0 : C,
                  T = l.isPreview,
                  x = l.props.composerData.map(function (e) {
                    return l._getSingleComposerDataWithLatestText(e)
                  }),
                  I = Object(mn.c)(x[0].scheduledFor)
                if (I) {
                  var k = Object(mn.b)(I),
                    R = Object(mn.i)(I),
                    L = ml({ scheduleDate: k, scheduleTime: R })
                  return n({ text: L, action: { label: pl, link: '' } }), void l._close()
                }
                if (
                  (o.length > 0 && a.scribe({ element: 'mentions', action: 'edited' }),
                  w &&
                    a.scribe({
                      action: 'send_trusted_friends_tweet',
                      data: { trusted_friends_control_details: { list_member_count: E } },
                    }),
                  l._conversationControlsCreationEnabled)
                )
                  if ('community' === g) a.scribe({ action: 'send_community_tweet' })
                  else if ('by_invitation' === g) {
                    var P = l._getSingleComposerDataWithLatestText(x[0]).text,
                      M = Object(S.d)(P)
                    a.scribe({
                      action: M ? 'send_mentioned_tweet_with_mentions' : 'send_mentioned_tweet_without_mentions',
                    })
                  } else 'followers' === g && a.scribe({ action: 'send_my_followers_tweet' })
                var A = (null == u ? void 0 : u.community_id_str) || r.communityIdValue || void 0,
                  D = A ? '8.31.'.concat(A) : '',
                  O = i ? (A ? [i, D].join(',') : i) : D
                v({
                  sendData: x,
                  communityIdValue: A,
                  conversationControlsValue: g,
                  excludedRecipients: o,
                  exclusivityControlValue: b,
                  inReplyToStatus: u,
                  isSelfThreadReply: p,
                  promotedContent: h,
                  composeSemanticCoreId: O,
                  isPreview: T,
                  trustedFriendsValue: w,
                  tweetType: l.tweetType,
                })
                  .then(function (e) {
                    T || l.setState({ tweetsSentOrScheduled: !0 }),
                      e.map(function (e, t) {
                        return l._scribeTweetSent(x[t], e, { hasArticleNudge: c })
                      }),
                      e.length > 1 && l._scribeThreadSent(x, e, 'thread_send_success')
                    var a = e.length > 1 ? nl : tl
                    if (A && f) {
                      var r = f,
                        i = e.length
                      a = Ko({ numOfTweets: i, communityName: r })
                    }
                    var o = T && l.isReply,
                      s = { label: pl, link: void 0, onAction: void 0 }
                    if (o || !T) {
                      var u = o ? e[0].in_reply_to_status_id_str : e[0].id_str
                      s.link = '/'.concat(t ? t.screen_name : 'i', '/status/').concat(u || '')
                    } else s.onAction = Object(Wo.a)(d, m, A)
                    n({ text: T ? al : a, action: s }),
                      l.isInlineReply && l.setState({ focused: !1 }),
                      l._updateConvoCardState(),
                      l._close()
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
                          return l._scribeTweetSent(x[t], e)
                        },
                        { hasArticleNudge: c },
                      ),
                      (Object(Go.d)(e) && e.code === Ni.b.CANCELED) ||
                        a.scribe({ action: 'send_tweet_failure', data: p }),
                      x.length > 1 && l._scribeThreadSent(x, r, 'thread_send_failure'),
                      r.length &&
                        d.replace({
                          pathname: m.pathname,
                          state: s()(
                            s()({}, Object(Bo.a)(m.state || {}, 'quotedStatus')),
                            {},
                            { inReplyToStatusId: r[r.length - 1].id_str, isSelfThreadReply: !0 },
                          ),
                        }),
                      e)
                    )
                  })
                  .catch(l._handleTweetError('send_tweet_cancel', Gi.a))
              }),
              _()(h()(l), '_setActiveParentKey', function () {
                ;(0, l.props.setActiveParentKey)(l._getParentKey())
              }),
              _()(h()(l), '_scribeTweetSent', function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  a = n.hasArticleNudge,
                  r = void 0 !== a && a,
                  i = n.isDraftTweet,
                  o = void 0 !== i && i,
                  c = n.isScheduled,
                  d = void 0 !== c && c,
                  u = l.state.nudgeId,
                  p = e.scheduledTweetId ? 'schedule_edit_' : 'schedule_',
                  m = e.draftTweetId ? 'draft_edit_' : 'draft_',
                  h = o ? m : d ? p : 'send_',
                  f = { items: [Wi.a.getTweetItem(t)] },
                  v = e.pollActive && e.pollValid,
                  g = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.altText)
                  }),
                  y = e.mediaTags.length,
                  b = Object(Uo.a)(
                    e.media
                      .map(function (e) {
                        var t,
                          n = null === (t = e.mediaMetadata) || void 0 === t ? void 0 : t.sensitiveMediaWarning
                        return n ? Array.from(n) : void 0
                      })
                      .filter(Boolean)
                      .flat(),
                  ),
                  _ = l.props.isInline ? 'inline_reply' : 'tweet_box_dialog'
                if (
                  (l._scribe({ action: ''.concat(h, 'tweet') }, f),
                  o || !e.draftTweetId || e.scheduledTweetId || l._scribe({ action: ''.concat(h, 'draft_tweet') }, f),
                  l.isQuoteTweet &&
                    (l._scribe({ action: 'retweet_with_comment' }, f),
                    r && l._scribe(s()(s()({}, bl), {}, { element: 'result', action: 'retweet_with_comment' }), f)),
                  l.isReply && l._scribe({ component: _, action: ''.concat(h, 'reply') }, f),
                  v && l._scribe({ action: ''.concat(h, 'poll_tweet') }, f),
                  l._hasPhoto(e) &&
                    (l._scribe({ action: ''.concat(h, 'photo_tweet') }, f),
                    g && l._scribe({ action: ''.concat(h, 'photo_tweet_with_alt_text') }, f),
                    y && l._scribe({ action: ''.concat(h, 'photo_tweet_with_tags') }, f)),
                  l._hasVideo(e) &&
                    (l._scribe({ action: ''.concat(h, 'video_tweet') }, f),
                    y && l._scribe({ action: ''.concat(h, 'video_tweet_with_tags') }, f)),
                  b.size)
                ) {
                  var w = l._hasPhoto(e) ? 'photo' : 'video'
                  b.forEach(function (e) {
                    l._scribe({ action: ''.concat(h).concat(w, '_tweet_with_').concat(e, '_warning') }, f)
                  })
                }
                var C = { page: 'nudge', section: 'dialog', element: 'result' }
                if (
                  (u &&
                    l.isReply &&
                    !d &&
                    (o
                      ? l._scribe(s()(s()({}, C), {}, { action: 'save' }), { items: [{ nudge_id: u }] })
                      : l._scribe(s()(s()({}, C), {}, { action: 'sent' }), { items: [{ nudge_id: u }] })),
                  u || o || !l.isReply || d || l._scribe(s()(s()({}, C), {}, { action: 'sent_no_nudge' })),
                  e.gifMetadata)
                ) {
                  var E = t.id_str && Wi.a.getGifSearchItemForTweet(t.id_str, e.gifMetadata)
                  l._scribe({ element: 'remote', action: ''.concat(h, 'gif_tweet') }, { items: E ? [E] : [] })
                  var T = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.defaultAltText)
                  })
                  ;(g || T) &&
                    l._scribe(
                      { element: 'remote', action: ''.concat(h, 'gif_tweet_with_alt_text') },
                      { event_info: g ? 'user_entered' : 'from_provider', items: E ? [E] : [] },
                    ),
                    y && l._scribe({ action: ''.concat(h, 'gif_tweet_with_tags') }, f)
                } else l._hasGif(e) && (l._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet') }, f), g && l._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet_with_alt_text') }, f))
              }),
              _()(h()(l), '_scribeThreadSent', function (e, t, n) {
                var a = l.props.inReplyToStatus,
                  r = { items: [Wi.a.getSendThreadItem(e, t.length, !!a)] }
                l._scribe({ action: n }, r)
              }),
              _()(h()(l), '_scribeRetweet', function (e) {
                var t = l.props.hasArticleNudge,
                  n = { items: [Wi.a.getTweetItem(e)] }
                l._scribe({ action: 'retweet' }, n),
                  t && l._scribe(s()(s()({}, bl), {}, { element: 'result', action: 'retweet' }), n)
              }),
              _()(h()(l), '_handleRetweet', function () {
                var e = l.props,
                  t = e.composerData,
                  n = e.createLocalApiErrorHandler,
                  a = e.retweet,
                  r = t[0].quotedStatus
                r &&
                  (l._scribeRetweet(r),
                  a(r.id_str, {}).then(function (e) {
                    l.setState({ tweetsSentOrScheduled: !0 }), l._close()
                  }, n(zi.a)))
              }),
              _()(h()(l), 'handleDismissComposer', function () {
                l.shouldShowDiscardConfirmation
                  ? l.setState({ showDiscardTweetConfirmation: !0 })
                  : l.shouldShowBackgroundSendConfirmation
                  ? l._cancelAllMediaUploads()
                  : l._close()
              }),
              _()(h()(l), '_cancelAllMediaUploads', function () {
                l.props.composerData.forEach(function (e) {
                  return e.media.forEach(function (e) {
                    return e.uploading && e.uploader && e.uploader.cancel()
                  })
                })
              }),
              _()(h()(l), '_handleConfirmDiscardTweet', function () {
                var e = l.props,
                  t = e.analytics,
                  n = e.hasArticleNudge,
                  a = l._canSaveDraft ? 'draft' : 'send'
                l.setState({ showDiscardTweetConfirmation: !1 }),
                  l._close(),
                  t.scribeAction(''.concat(a, '_tweet_discard')),
                  n && l._scribe(s()(s()({}, bl), {}, { element: 'result', action: 'cancel' })),
                  l.state.nudgeId &&
                    l._scribe(
                      { page: 'nudge', section: 'dialog', element: 'result', action: 'cancel' },
                      { items: [{ nudge_id: l.state.nudgeId }] },
                    )
              }),
              _()(h()(l), '_handleCancelDiscardTweet', function () {
                l.setState({ showDiscardTweetConfirmation: !1 }, function () {
                  l._restoreFocusToActiveComposer()
                })
              }),
              _()(h()(l), '_handleAcceptAltTextPrompt', function () {
                l.setState({ showAltTextPrompt: !1 })
                var e = l.props.history,
                  t = l._getAltTextMetadata().noDescriptionImageIDs
                t[0] &&
                  (l._scribe(s()(s()({}, yl), {}, { action: 'accepted' })),
                  e.push('/compose/tweet/media', { mediaId: t[0], tab: Ui.a.altText, hideTabs: !0, showAllMedia: !0 }))
              }),
              _()(h()(l), '_handleIgnoreAltTextPrompt', function () {
                l._scribe(s()(s()({}, yl), {}, { action: 'declined' })),
                  l.setState({ showAltTextPrompt: !1 }),
                  l._handleTweetOrRetweet()
              }),
              _()(h()(l), '_handleCancelAltTextPrompt', function () {
                l._scribe(s()(s()({}, yl), {}, { action: 'cancel' })),
                  l.setState({ showAltTextPrompt: !1 }, function () {
                    l._restoreFocusToActiveComposer()
                  })
              }),
              _()(h()(l), '_restoreFocusToActiveComposer', function () {
                var e = l.props.activeComposerIndex
                void 0 !== e && l._composerRefs[e] && l._composerRefs[e].focus()
              }),
              _()(h()(l), '_close', function () {
                var e = l.props,
                  t = e.history,
                  n = e.isSending,
                  a = e.onCloseComposer
                n || l._resetDraft(),
                  l.state.navigatingToOutbox
                    ? l._canSaveDraft
                      ? t.push('/compose/tweet/unsent/drafts')
                      : t.push('/compose/tweet/unsent/scheduled')
                    : a && a()
              }),
              _()(h()(l), '_handleComposerFocus', function (e) {
                l._composerRefs[e]
                  ? l.props.updateActiveComposerIndex(e)
                  : setTimeout(function () {
                      l._restoreFocusToActiveComposer()
                    }, 0)
              }),
              _()(h()(l), '_handleFocus', function () {
                l.state.focused ||
                  (l.isInlineReply && l._scribe({ element: 'inline_reply', action: 'reply' }),
                  l.setState({ focused: !0 }))
              }),
              _()(h()(l), '_handleTypeaheadStateChange', function (e) {
                l.setState({ typeaheadActive: e })
              }),
              _()(h()(l), '_handleRemoveComposer', function () {
                var e = l.props,
                  t = e.activeComposerIndex,
                  n = e.composerData,
                  a = e.history,
                  r = e.location,
                  i = e.removeComposer
                0 === t &&
                  n[0].quotedStatus &&
                  a.replace({ pathname: r.pathname, state: Object(Bo.a)(r.state || {}, 'quotedStatus') }),
                  i(),
                  setTimeout(l._restoreFocusToActiveComposer)
              }),
              _()(h()(l), '_handleViewRecipients', function () {
                var e = l.props,
                  t = e.excludedRecipients,
                  n = e.history,
                  a = e.inReplyToStatus
                l._setActiveParentKey(),
                  n.push({
                    pathname: '/compose/tweet/recipients',
                    state: { excludedRecipients: t, inReplyToStatus: a },
                  })
              }),
              _()(h()(l), '_handleTextChange', function (e, t) {
                var n = l.state.textMap,
                  a = l.props,
                  r = a.activeComposerIndex,
                  i = a.isInline,
                  o = a.setValidity
                if (
                  (l.setState({ textMap: s()(s()({}, n), {}, _()({}, t, e)) }, function () {
                    o && o(l._areComposersValid())
                  }),
                  l.setState({ errorMessage: void 0 }),
                  Ao.b.isIOS())
                ) {
                  var c = i ? 0 : r
                  l._updateSingleComposer({ text: e }, c)
                }
              }),
              _()(
                h()(l),
                '_handleTextOnBlur',
                Object(bn.a)(function (e, t) {
                  return function () {
                    var n = l.state,
                      a = n.textMap,
                      r = n.tweetsSentOrScheduled,
                      i = l.props.composerData,
                      o = a[e],
                      s = i.some(function (t) {
                        return t.key === e
                      })
                    'string' == typeof o && !r && s && l._updateSingleComposer({ text: o }, t)
                  }
                }),
              ),
              _()(h()(l), '_updateAudienceControlsValue', function (e) {
                var t = l.props,
                  n = t.composerData,
                  a = t.updateAudienceControlsValue,
                  r = l.state.errorMessage
                switch (e._type) {
                  case 'conversation_controls':
                    if (!l._conversationControlsCreationEnabled) return
                    break
                  case 'community_members':
                    if (!l._isCommunitiesEnabled) return
                    n[0].pollActive &&
                      (l._updateSingleComposer({ pollActive: !1 }, 0), l.setState({ errorMessage: { text: qo } })),
                      (null == r ? void 0 : r.text) === qo && l.setState({ errorMessage: void 0 })
                }
                a(e, l._getParentKey())
              }),
              _()(h()(l), '_renderProgressBar', function () {
                var e = l.props,
                  t = e.isSending,
                  n = e.sendingProgress
                return C.a.createElement(Oo.a, { progress: t ? Math.max(n, 0.02) : 0, style: El.progressBar })
              }),
              _()(h()(l), '_updateConvoCardState', function () {
                var e = l.props,
                  t = e.convoCardData,
                  n = e.updateConvoCardState
                if (t) {
                  var a = t.cardId,
                    r = t.nextState
                  r && a && n(a, { cardState: r })
                }
              }),
              _()(h()(l), '_attachExternalMedia', function (e) {
                return function (t) {
                  return Promise.all(
                    t.map(function (e) {
                      return Object(Oi.a)(e)
                    }),
                  ).then(l._handleAddMediaFiles(e))
                }
              }),
              _()(h()(l), '_handleAddMediaFiles', function (e) {
                return function (t) {
                  var a,
                    r,
                    i = l.props,
                    o = i.addMedia,
                    s = i.addToast,
                    c = i.composerData,
                    d = i.dataSaverMode,
                    u = i.preUploadMedia,
                    p = i.processMultipleMedia,
                    m = i.removeMediaUpload,
                    f = c[e],
                    v = f.pollActive,
                    g = Object(Vo.e)(
                      null === (a = h()(l)) || void 0 === a || null === (r = a.context) || void 0 === r
                        ? void 0
                        : r.userClaims,
                    )
                  v ||
                    o(t, { location: Vo.d.Tweet, canUploadLongVideo: g }).then(function (t) {
                      var a = t.map(function (e) {
                        return e.id
                      })
                      if (n._validateMedia(f, t)) {
                        var r = f.media.map(function (e) {
                          return e.id
                        })
                        l._updateSingleComposer({ mediaIds: Object(No.a)(r.concat(a)) }, e),
                          p(t, { onFailure: l._handleMediaRemoveFactory(e) }).then(function (e) {
                            d ||
                              u(
                                e.map(function (e) {
                                  return e.id
                                }),
                              )
                          })
                      } else s({ text: vl }), m(a)
                    })
                }
              }),
              _()(h()(l), '_handleMediaRemoveFactory', function (e) {
                return function (t) {
                  return l._handleMediaRemove(e, t)
                }
              }),
              _()(h()(l), '_handleMediaRemove', function (e, t) {
                var n = l.props,
                  a = n.composerData,
                  r = n.removeMediaUpload,
                  i = a[e],
                  o = i.media,
                  s = i.mediaTags,
                  c = (function (e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                      n[a - 1] = arguments[a]
                    return Object(jo.a)(e, n)
                  })(
                    o.map(function (e) {
                      return e.id
                    }),
                    t,
                  ),
                  d = c.length > 0 ? s : []
                l._updateSingleComposer({ mediaIds: c, gifMetadata: void 0, mediaTags: d }, e),
                  r(t),
                  l.setState({ errorMessage: void 0 })
              }),
              _()(h()(l), '_setComposerRef', function (e) {
                return function (t) {
                  l._composerRefs[e] = t
                }
              }),
              _()(h()(l), '_shouldBeExpanded', function () {
                var e = l.props,
                  t = e.composerData,
                  n = e.parentTweetId
                if (l.state.focused) return !0
                var a = !Object(pn.c)(l._getSingleComposerDataWithLatestText(t[0]))
                return !n || a
              }),
              _()(h()(l), '_areComposersValid', function () {
                var e = l.props,
                  t = e.audienceControlsValue._type,
                  n = e.composerData,
                  a = n[0].quotedStatus,
                  r = null == a ? void 0 : a.community_id_str,
                  i = 'community_members' === t
                return (
                  (l.isRetweet && !r && !i) ||
                  n.every(function (e) {
                    return Object(pn.e)(l._getSingleComposerDataWithLatestText(e))
                  })
                )
              }),
              _()(h()(l), '_areComposersEmptyOrUnchanged', function () {
                var e = l.props,
                  t = e.composerData,
                  n = e.prepopulatedText
                return t.every(function (e) {
                  return Object(pn.d)(l._getSingleComposerDataWithLatestText(e), n)
                })
              }),
              _()(h()(l), '_getAltTextMetadata', function () {
                var e = l.props.composerData,
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
              _()(h()(l), '_getSingleComposerDataWithLatestText', function (e) {
                var t = l.state.textMap
                return 'string' == typeof t[e.key] ? s()(s()({}, e), {}, { text: t[e.key] }) : e
              })
            var c = !(null === (r = e.location.state) || void 0 === r || !r.focusComposer)
            return (
              (l.state = {
                focused: c,
                showAltTextPrompt: !1,
                showDiscardTweetConfirmation: !1,
                showToxicReplyNudge: !1,
                textMap: {},
                tweetsSentOrScheduled: !1,
                typeaheadActive: !1,
                shouldDisableButton: !1,
              }),
              (l._composerRefs = {}),
              (l._conversationControlsCreationEnabled =
                !0 ===
                l.context.featureSwitches.getValueWithoutScribeImpression(
                  'conversation_controls_limited_replies_creation_enabled',
                )),
              (l._throttledSyncTexts = Object(ea.a)(l._syncTexts, 1e3, { leading: !0, trailing: !1 })),
              (l._keyCommandHandlers =
                ((i = {}), _()(i, zo.b, l.handleTweetOrRetweet), _()(i, zo.a, l.handleDismissComposer), i)),
              (l._keyCommandHandlersForActiveTypeahead = _()({}, zo.b, l.handleTweetOrRetweet)),
              (l._isAltTextNudgeEnabled =
                !0 ===
                l.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_alt_text_nudges_enabled')),
              (l._isCommunitiesEnabled = l.context.featureSwitches.isTrue('c9s_enabled')),
              l
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
                    l = e.isIntentRoute,
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
                    var p = s()({}, null)
                    d && (p.text = d), t && t.cardUrl && (p.cardUrl = t.cardUrl), this._updateSingleComposer(p)
                  }
                  ;(d || (t && t.cardUrl) || n.length > 0 || a.length > 0) &&
                    !l &&
                    i.replace({
                      query: Object(qr.b)(c.query),
                      search: '',
                      pathname: c.pathname,
                      state: Object(Bo.a)(Object(qr.b)(c.state || {}), [
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
                    l = n.externalMediaFiles,
                    s = n.onRef,
                    c = n.parentTweetId,
                    d = n.replyPressToggle,
                    u = n.setValidity
                  n.windowWidth !== e.windowWidth && this._throttledSyncTexts(),
                    e.onRef && e.onRef !== s && e.onRef(void 0),
                    s && s !== e.onRef && s(this),
                    r.length >= 25 && e.composerData.length < 25 && a({ text: hl }),
                    o.length > 0 && o !== e.externalMedia
                      ? this._attachExternalMedia(0)(o)
                      : l.length > 0 && l !== e.externalMediaFiles && this._handleAddMediaFiles(0)(l),
                    u && !Object(Ho.a)(r, e.composerData) && u && u(this._areComposersValid()),
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
                    l = a.audienceControlsValue,
                    s = a.composeHeader,
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
                    w = a.richTextInputContext,
                    E = a.scheduledFor,
                    T = a.typeaheadWrapper,
                    x = a.userLanguage,
                    S = a.windowWidth,
                    I = this.state,
                    k = I.errorMessage,
                    R = I.focused,
                    L = I.shouldDisableButton,
                    P = I.showAltTextPrompt,
                    M = I.showDiscardTweetConfirmation,
                    A = I.showToxicReplyNudge,
                    D = I.typeaheadActive,
                    O = !f && D,
                    F = h ? 0 : this.props.activeComposerIndex,
                    B = O || h ? [c[F]] : c,
                    U = this._areComposersValid(),
                    N = this.hasNonCompliantQuote && this.isRetweet,
                    j = h ? q.a : Fo.a,
                    H = h ? {} : { onAnimateComplete: f ? void 0 : this._handleAnimateComplete },
                    V = L || !U || N || this.isCommunityTweetFromProtectedUser,
                    z = (h && qi.a.isOneColumnSquishedLayout(S)) || this.isCommunityTweet,
                    W = (h && qi.a.isOneColumnSquishedLayout(S)) || this.isCommunityTweet || this.isExclusiveTweet
                  return C.a.createElement(
                    q.a,
                    { ref: this._setRootRef, style: !b && El.root },
                    h ? this._renderProgressBar() : null,
                    k &&
                      C.a.createElement(
                        q.a,
                        { style: El.inlineCallout },
                        C.a.createElement(Lt.a, {
                          action:
                            null !== (e = k.action) &&
                            void 0 !== e &&
                            e.label &&
                            null !== (t = k.action) &&
                            void 0 !== t &&
                            t.link
                              ? { label: k.action.label, link: k.action.link }
                              : void 0,
                          text: k.text,
                          type: 'danger',
                        }),
                      ),
                    C.a.createElement(
                      q.a,
                      {
                        onFocus: this._handleFocus,
                        style: [El.content, b && El.contentInlineReply, f && El.contentModal],
                      },
                      m ? this._renderReplyContext() : null,
                      s,
                      C.a.createElement(
                        j,
                        H,
                        B.map(function (e, t) {
                          var a = Object(mn.h)(e.scheduledFor),
                            s = c.indexOf(e),
                            I = d(e, t, B),
                            k =
                              f || h
                                ? C.a.createElement(
                                    X.a,
                                    {
                                      behavioralEventContext: _l,
                                      disabled: V,
                                      onPress: n.handleTweetOrRetweet,
                                      size: 'medium',
                                      style: El.inlineSendButton,
                                      testID: f ? Ki : Xi,
                                      type: 'brandFilled',
                                    },
                                    Object(Wo.b)({
                                      inReplyToStatus: !!m,
                                      isSelfThreadReply: !!v,
                                      isQuoteTweet: !!n.isQuoteTweet,
                                      isRetweet: !!n.isRetweet,
                                      isScheduled: !!a,
                                      isThread: n.isThread,
                                    }),
                                  )
                                : null,
                            L = n._getSingleComposerDataWithLatestText(e)
                          return C.a.createElement(
                            q.a,
                            { key: e.key },
                            C.a.createElement(
                              Lr,
                              r()(
                                {
                                  addComposerLink: n._makeAddComposerLink(h, v, b),
                                  addToast: o,
                                  additionalToolbarContent: k,
                                  audienceControlsValue: l,
                                  autoFocus: n.isInlineReply && R,
                                  data: L,
                                  disableAddTweet: c.length >= 25,
                                  editable: !g && !!i,
                                  fetchAutotaggedLocationIfNeeded: n._fetchAutotaggedLocationIfNeeded,
                                  geoEnabled: u,
                                  hidePoll: z,
                                  hideScheduling: W,
                                  history: p,
                                  index: s,
                                  isActive: s === F && !g,
                                  isCommunityTweetFromProtectedUser: n.isCommunityTweetFromProtectedUser,
                                  isExpanded: 0 !== t || n._shouldBeExpanded(),
                                  isInline: h,
                                  isInlineReply: n.isInlineReply,
                                  isLast: h || s === c.length - 1,
                                  isReply: !!m || n.isInlineReply,
                                  isSelfThreadReply: !!v,
                                  isSuperFollowsCreator: y,
                                  keyCommandHandlers: n._getKeyCommandHandlers(),
                                  loggedInUser: i,
                                  onAddComposer: n._handleAddComposer,
                                  onFilesAdded: n._handleAddMediaFiles(s),
                                  onFocus: n._handleComposerFocus,
                                  onRemoveComposer: n._handleRemoveComposer,
                                  onRemoveMedia: n._handleMediaRemove,
                                  onTextChange: n._handleTextChange,
                                  onTextInputBlur: n._handleTextOnBlur(L.key, t),
                                  onTypeaheadStateChange: n._handleTypeaheadStateChange,
                                  positionCursorAtBeginning: !!_,
                                  ref: n._setComposerRef(s),
                                  richTextInputContext: w,
                                  scheduledFor: E,
                                  setActiveParentKey: n._setActiveParentKey,
                                  twitterTextConfigurationVersion: 'version3',
                                  typeaheadActive: D,
                                  typeaheadWrapper: T,
                                  updateAudienceControlsValue: n._updateAudienceControlsValue,
                                  updateSingleComposer: n._updateSingleComposer,
                                  userLanguage: x,
                                  windowWidth: S,
                                },
                                I,
                              ),
                            ),
                          )
                        }),
                      ),
                      M
                        ? this._canSaveDraft
                          ? C.a.createElement(Do.a, {
                              cancelButtonLabel: ll,
                              confirmButtonLabel: dl,
                              headline: sl,
                              onCancel: this._handleConfirmDiscardTweet,
                              onConfirm: this._handleDraftTweet,
                              onMaskClick: this._handleCancelDiscardTweet,
                              text: cl,
                            })
                          : C.a.createElement(Do.a, {
                              confirmButtonLabel: ll,
                              confirmButtonType: 'destructiveFilled',
                              headline: this.isThread ? il : rl,
                              onCancel: this._handleCancelDiscardTweet,
                              onConfirm: this._handleConfirmDiscardTweet,
                              text: ol,
                            })
                        : null,
                      P ? this._renderAltTextPrompt() : null,
                      A ? this._renderToxicReplyNudge() : null,
                      C.a.createElement(q.a, { style: g && El.mask }),
                    ),
                  )
                },
              },
              {
                key: '_scribe',
                value: function (e, t) {
                  this.props.analytics.scribe(s()(s()({}, e), {}, { data: t }))
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
                    ? wl.Quote
                    : this.isThread
                    ? wl.Thread
                    : this.isReply
                    ? wl.Reply
                    : wl.Original
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
                    l =
                      null == this ||
                      null === (e = this.context) ||
                      void 0 === e ||
                      null === (t = e.userClaims) ||
                      void 0 === t
                        ? void 0
                        : t.isTrueAndEnabled('subscriptions_feature_1003'),
                    s =
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
                    l &&
                    ('original' === this.tweetType ||
                      'reply' === this.tweetType ||
                      ('quote' === this.tweetType && s) ||
                      ('thread' === this.tweetType && c)) &&
                    (!o || void 0 === o[this.tweetType] || o[this.tweetType])
                  )
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      _()(Cl, 'defaultProps', {
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
        typeaheadWrapper: ji.a,
      }),
        _()(Cl, 'contextType', ce.a),
        _()(Cl, '_validateMedia', function (e, t) {
          var n = e.media
          return Object(S.c)(n.concat(t))
        })
      var El = B.a.create(function (e) {
        return {
          root: { paddingBottom: e.spaces.space4 },
          content: { paddingVertical: e.spaces.space4, backgroundColor: e.colors.cellBackground },
          contentModal: { borderBottomLeftRadius: e.borderRadii.xLarge, borderBottomRightRadius: e.borderRadii.xLarge },
          contentInlineReply: { paddingVertical: e.componentDimensions.gutterVertical },
          mask: s()({}, B.a.absoluteFillObject),
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
      t.a = Object(G.a)(Ai(Cl))
    },
    hiGS: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
        l = n('VrFO'),
        s = n.n(l),
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
        w = n('k49u'),
        C = (n('LW0h'), n('7x/C'), n('KOtZ'), n('vrRf'), n('6xIQ')),
        E = n('kGix'),
        T = n('G6rE'),
        x = n('rxPX'),
        S = n('0KEI'),
        I = function (e, t) {
          return t.userIds
        },
        k = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!T.e.select(e, t)
          })
        },
        R = function (e, t) {
          return t.userIds.reduce(function (t, n) {
            var a = T.e.selectFetchStatus(e, n)
            return (t[n] = a === E.a.NONE ? E.a.LOADING : a), t
          }, {})
        },
        L = Object(x.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(C.a)(k, function (e) {
                return e
              }),
              fetchStatus: Object(C.a)(k, R, I, function (e, t, n) {
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
              fetchUsersIfNeeded: T.e.fetchManyIfNeeded,
            }
          }),
        P = n('v//M'),
        M = n('3XMw'),
        A = n.n(M),
        D = n('pQ3Z'),
        O = n.n(D),
        F = (n('z84I'), n('cFuS')),
        B = n('Re5t'),
        U = n('MWbm'),
        N = n('88ay'),
        j = function (e) {
          var t = e.displayMode,
            n = e.renderUserCell,
            a = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return _.a.createElement(
            U.a,
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
      var H = j,
        V = ['availableUserIds', 'createLocalApiErrorHandler', 'fetchStatus', 'fetchUsersIfNeeded', 'userIds'],
        z = A.a.f5b426c2,
        W = { viewType: 'user_list' },
        G = L(
          (function (e) {
            h()(n, e)
            var t = v()(n)
            function n() {
              var e
              s()(this, n)
              for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                y()(p()(e), 'state', { allUsersUnavailable: !1 }),
                y()(p()(e), '_renderContent', function () {
                  var t = e.props,
                    n = t.availableUserIds,
                    a = (t.createLocalApiErrorHandler, t.fetchStatus, t.fetchUsersIfNeeded, t.userIds, o()(t, V))
                  return _.a.createElement(H, r()({}, a, { userIds: n }))
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
                      accessibilityLabel: z,
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
                        y()(e, w.a.AddressBookLookupNotFound, {
                          customAction: function () {
                            0 === a.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        y()(e, w.a.OtherUserSuspended, {
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
    hxu0: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return o.a.createElement(l.a.Consumer, null, function (n) {
            return o.a.createElement(e, r()({}, t, { isInSidebar: n }))
          })
        }
      }
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
        l = n('ERkP'),
        s = n.n(l),
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
          l = o()(e, h),
          v = d.a.generate({
            backgroundColor: p.a.theme.colors.transparent,
            color: p.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return s.a.createElement(
          m.a,
          { style: f.container },
          s.a.createElement(
            u.a,
            r()({}, l, { interactiveStyles: v, style: f.root }),
            s.a.createElement(c.b, { align: n, color: a }, i),
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
        l = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        s = n('RuTB'),
        c = n('3XMw'),
        d = n.n(c),
        u = Object(l.a)({
          loader: function () {
            return d.a.emoji.then(function () {
              return Promise.all([n.e(0), n.e(17), n.e(210)]).then(n.bind(null, '5RdJ'))
            })
          },
          renderPlaceholder: function (e, t) {
            return o.a.createElement(s.a, { hasError: e, onRetry: t })
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
        w = n('2ZFc'),
        C = n('OiMc'),
        E = n('/yvb'),
        T = d.a.d4a4842d,
        x = o.a.createElement(_.a, null),
        S = d.a.fec16c1c,
        I = { viewType: 'emoji_picker' },
        k = function (e) {
          var t = e.disabled,
            n = e.onEmojiSelect,
            a = e.onPress,
            i = e.size,
            l = e.style,
            s = e.textInputRef,
            c = o.a.useState(!0),
            d = r()(c, 2),
            p = d[0],
            m = d[1]
          o.a.useEffect(function () {
            var e = setTimeout(function () {
              u.preload(), w.a.get('emojiPicker2')
            }, 5e3)
            return function () {
              clearTimeout(e)
            }
          }, [])
          return o.a.createElement(
            C.a,
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
                  return s && s.focus()
                })
              },
              renderContent: function () {
                return o.a.createElement(b, { onSelect: n, partialRender: p })
              },
              withArrow: !0,
            },
            o.a.createElement(E.a, {
              accessibilityHasPopup: 'menu',
              accessibilityLabel: T,
              behavioralEventContext: I,
              disabled: t,
              hoverLabel: { label: S },
              icon: x,
              onPress: function (e) {
                return a && a(e)
              },
              size: i,
              style: l,
              type: 'brandText',
            }),
          )
        }
      k.defaultProps = { disabled: !1, size: 'xSmall' }
      t.a = k
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
        l = r.a.d17df547,
        s = r.a.h735a98d,
        c = function (e) {
          var t = e.inReplyToStatus && !e.isSelfThreadReply
          return e.isScheduled ? s : t ? l : e.isThread ? o : i({ verb: '' })
        },
        d = function (e, t, n) {
          return function () {
            if (n) {
              var a, r
              ;(null === (a = t.state) || void 0 === a || null === (r = a.previousPath) || void 0 === r
                ? void 0
                : r.includes(n)) && '/compose/tweet' === t.pathname
                ? window.scrollTo(0, 0)
                : e.push('/i/communities/'.concat(n), { lockScroll: !0 })
            } else {
              var i,
                o,
                l =
                  (null === (i = t.state) || void 0 === i || null === (o = i.previousPath) || void 0 === o
                    ? void 0
                    : o.includes('/home')) && '/compose/tweet' === t.pathname
              t.pathname.includes('/home') || l ? window.scrollTo(0, 0) : e.push('/home', { lockScroll: !0 })
            }
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
        l =
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
        s = n('kIAd'),
        c = n('rHpw')
      function d(e, t) {
        var n,
          a = s.b.scoper.find(function (a) {
            if (-1 !== a.srcInputs.indexOf(t)) return (n = e.match(a.regexp))
          }),
          r = ''
        return n && (r = n && (1 === n.length ? n[0] : n[1])), a ? o()(o()({}, a.scope), {}, { src: t, q: r }) : null
      }
      function u(e, t) {
        var n = t.slice(0, e),
          a = t.slice(e, t.length),
          r = n.search(s.b.WordEnd),
          i = r >= 0 ? n.slice(r) : '',
          o = a.search(s.b.WordBoundary),
          l = i + a.slice(0, o)
        return l.trim() ? { start: r, end: e + o, word: l } : { start: -1, end: -1, word: '' }
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
      var f = Object(l.a)(function (e) {
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
        return z
      })
      n('yiKp')
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('VrFO'),
        s = n.n(l),
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
        w = n('38/B'),
        C = n('t62R'),
        E = n('/yvb'),
        T = n('piX5'),
        x = n('3XMw'),
        S = n.n(x),
        I = n('tI3i'),
        k = n.n(I),
        R = n('oQhu'),
        L = n('rHpw'),
        P = n('aITJ'),
        M = n('MWbm'),
        A = n('n5fo'),
        D = n('5emT'),
        O = n('Oib4'),
        F = n('WtWS'),
        B = n('ioan'),
        U = [
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
        H = S.a.de540c32,
        V = S.a.b4abfdb3,
        z = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            s()(this, n),
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
                Object(R.a)(function (e) {
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
                  l =
                    null === (e = a._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  s =
                    null === (n = a._textInput) ||
                    void 0 === n ||
                    null === (r = n.textInputNode) ||
                    void 0 === r ||
                    null === (i = r.validity) ||
                    void 0 === i
                      ? void 0
                      : i.badInput
                return 'number' === o && '' === l && !0 === s
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
                  l = a._getAdjustedMaxLength()
                void 0 !== l && r.length > l && n.length < r.length
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
                  l = 'string' == typeof t
                k()(
                  !(!l && o && !i),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  k()(!(n && r && r > n), 'Max length should be equal or greater than valid length.'),
                  k()(
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
                      l = e.onChange,
                      s = e.validLength,
                      c = e.value
                    ;(s === r && n === o && !!a === !!l && ('string' == typeof i) === ('string' == typeof c)) ||
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
                      l = this._isFormInvalid()
                    return _.a.createElement(
                      M.a,
                      { style: [G.root, i] },
                      _.a.createElement(
                        M.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            T.a.border,
                            G.textInputFormStyle,
                            l && T.a.invalidBorderColor,
                            o && l && T.a.focusedBorderInvalid,
                            o && !l && T.a.focusedBorderValid,
                            !n && T.a.disabled,
                          ],
                        },
                        _.a.createElement(
                          M.a,
                          { style: G.textInputFormWrapper },
                          _.a.createElement(
                            M.a,
                            { style: G.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      _.a.createElement(
                        M.a,
                        { style: [G.sidePadding, G.underTextInputForm] },
                        _.a.createElement(
                          M.a,
                          { style: G.subtextWrapper },
                          r ? this._renderHelperText() : null,
                          l && a ? this._renderErrorText() : null,
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
                      C.b,
                      {
                        color: a ? 'gray700' : n,
                        numberOfLines: 1,
                        size: a ? 'headline1' : 'subtext2',
                        style: [
                          G.textInputHeaderItem,
                          a && G.placeholderText,
                          !w.a.reducedMotionEnabled && G.transition,
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
                      i = (e.style, e.type, e.validLength, o()(e, U))
                    return _.a.createElement(
                      M.a,
                      { style: W.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      _.a.createElement(
                        C.b,
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
                          M.a,
                          { style: G.passwordVisibilityIconContainer },
                          _.a.createElement(E.a, {
                            accessibilityLabel: a ? V : H,
                            focusable: !0,
                            hoverLabel: { label: a ? V : H },
                            icon: a ? _.a.createElement(A.a, null) : _.a.createElement(D.a, null),
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
                      M.a,
                      { accessibilityLiveRegion: 'polite' },
                      _.a.createElement(
                        C.b,
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
                      M.a,
                      { accessibilityLiveRegion: 'assertive' },
                      _.a.createElement(
                        C.b,
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
                      M.a,
                      { accessibilityLiveRegion: 'polite', style: [G.textInputHeaderItem, G.displayCount] },
                      _.a.createElement(
                        C.b,
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
                      ? _.a.createElement(O.a, { style: [G.validationIcon, T.a.invalidColor] })
                      : _.a.createElement(F.a, { style: [G.validationIcon, T.a.validColor] })
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
      y()(z, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (z.propTypes = {})
      var W = L.a.create(function (e) {
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
        G = L.a.create(function (e) {
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
        l = n('1Pcy'),
        s = n.n(l),
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
        w = n('LCtV'),
        C = n('eyty'),
        E = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        T = n('RuTB'),
        x = Object(E.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(8), n.e(179)])
              .then(n.bind(null, 'EOJ2'))
              .then(function (e) {
                return { default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ }
              })
          },
          renderPlaceholder: function (e, t) {
            return v.a.createElement(T.a, { hasError: e, onRetry: t })
          },
        }),
        S = n('yiKp'),
        I = n.n(S),
        k = n('m3Bd'),
        R = n.n(k),
        L = (n('z84I'), n('k/Ka')),
        P = n('eXeu'),
        M = n('iOGT'),
        A = ['children', 'dataSaverMode', 'getVideoRef', 'style', 'variants'],
        D = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_setVideoRef', function (t) {
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
                    i = R()(e, A),
                    o = Object(M.b)(r, n ? M.a.MEDIUM : M.a.HIGH) || [],
                    l = Object(P.f)(
                      o.map(function (e) {
                        return { src: e.url, type: e.content_type }
                      }),
                    )
                  return Object(L.a)(
                    'video',
                    I()(
                      I()({}, i),
                      {},
                      {
                        children: [
                          l.map(function (e) {
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
      h()(D, 'defaultProps', { dataSaverMode: !1, variants: [] })
      var O = n('62wY'),
        F = n('sjK1'),
        B = n('v6aA'),
        U = n('cHvH'),
        N = n('mXq/'),
        j = n('/yvb'),
        H = n('a6qo'),
        V = n('rHpw'),
        z = n('hOZg'),
        W = n('GCOQ'),
        G = n('tuke'),
        q = n('U+bB'),
        K = n('MWbm'),
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
              h()(s()(e), 'state', { isVideoPaused: !0, playGif: !1 }),
              h()(s()(e), '_handleGifClick', function () {
                e.setState({ playGif: !e.state.playGif })
              }),
              h()(s()(e), '_handleMediaPreviewLayout', function (t) {
                var n = e.props,
                  a = n.mediaItem,
                  r = n.resizeIfNeeded,
                  i = a.mediaFile || a.externalMediaDetails
                if (i) {
                  var o = t.nativeEvent.layout,
                    l = o.height,
                    s = o.width,
                    c = i.height,
                    d = i.width / c
                  Math.abs(d - s / l) > 0.05 &&
                    e._mediaContainer &&
                    ('width' === r
                      ? e._mediaContainer.setNativeProps({ style: { width: l * d } })
                      : 'height' === r && e._mediaContainer.setNativeProps({ style: { height: s / d } }))
                }
              }),
              h()(s()(e), '_handleVideoOnPlay', function (t) {
                e.setState({ isVideoPaused: !1 })
              }),
              h()(s()(e), '_handleVideoOnPause', function (t) {
                e.setState({ isVideoPaused: !0 })
              }),
              h()(s()(e), '_setMediaContainerRef', function (t) {
                e._mediaContainer = t
              }),
              h()(s()(e), '_setVideoRef', function (t) {
                e._video = t
              }),
              h()(s()(e), 'playVideo', function () {
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
              h()(s()(e), 'pauseVideo', function () {
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
                    l = n.onEdit,
                    s = n.onEditSensitiveWarning,
                    c = n.onRemove,
                    d = n.style,
                    u = n.withAltTextLabel,
                    p = n.withCloseButton,
                    m = n.withEditButton,
                    h = n.withEditIcon,
                    f = n.withEditSensitiveWarningButton,
                    b = this.state.playGif,
                    _ = o.externalMediaDetails && o.externalMediaDetails.mediaType === y.a,
                    w = _ || (i && o.mediaFile && o.mediaFile.isGif),
                    C = !(null === (e = o.mediaFile) || void 0 === e || !e.isVideo)
                  return v.a.createElement(U.a, null, function (e) {
                    var n = e.windowWidth,
                      i = void 0 !== h ? h : !g.a.isTwoColumnLayout(n)
                    return v.a.createElement(
                      K.a,
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
                            icon: v.a.createElement(z.a, null),
                            onPress: c,
                            size: 'small',
                            style: ae.close,
                            type: 'onMediaDominantColorFilled',
                          })
                        : null,
                      w ? v.a.createElement(X.c, { type: X.a }) : null,
                      u && !C ? v.a.createElement(H.a, { align: 'left', altLabel: a }) : null,
                      m
                        ? v.a.createElement(
                            K.a,
                            { style: [ae.editMedia, C ? ae.editVideo : ae.editImage] },
                            f
                              ? v.a.createElement(j.a, {
                                  accessibilityLabel: Q,
                                  icon: v.a.createElement(W.a, { style: ae.editSensitiveWarningIcon }),
                                  onPress: s,
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
                                onPress: l,
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
                    : v.a.createElement(K.a, { style: V.a.absoluteFill }, this._renderImagePreview())
                },
              },
              {
                key: '_renderGifPreview',
                value: function (e, t) {
                  var n = { uri: this.state.playGif ? e : t }
                  return v.a.createElement(
                    K.a,
                    { onClick: this._handleGifClick, style: V.a.absoluteFill },
                    v.a.createElement(q.a, { resizeMode: 'cover', source: n, style: ae.video }),
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
                  return v.a.createElement(w.b, {
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
                    var l = Object(C.h)(a.fileHandle) ? [{ src: t, type: e }] : [],
                      s = ''.concat(n)
                    return v.a.createElement(x, {
                      mediaFile: a,
                      mediaId: s,
                      subtitles: o,
                      trimData: null == i ? void 0 : i.trimData,
                      variants: l,
                    })
                  }
                  var c,
                    d = Object(C.h)(a.fileHandle) ? [{ content_type: e, url: t }] : [],
                    u =
                      (null == o || null === (c = o.upload) || void 0 === c ? void 0 : c.mediaFile) instanceof O.b
                        ? o.upload.mediaFile.vtt
                        : void 0
                  return v.a.createElement(
                    D,
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
      var ae = V.a.create(function (e) {
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
        l = n('Y9Ll'),
        s = n.n(l),
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
        w = n('m3Bd'),
        C = n.n(w),
        E = (n('vrRf'), n('z84I'), n('LW0h'), n('7x/C'), n('5BYb'), n('xVN5')),
        T = n('pidX'),
        x = n('AspN'),
        S = n('XOJV'),
        I = n('G6rE'),
        k = n('xZGM'),
        R = n('0KEI'),
        L = n('hqKg'),
        P = n('oEGd'),
        M = n('rU/Q'),
        A = n('XpKj'),
        D = ['cardUrl', 'mediaIds'],
        O = function (e) {
          return function (t, n) {
            var a = (function (e, t) {
              return t.location.state
            })(0, n)
            return a ? e(a) : void 0
          }
        },
        F = Object(L.createSelector)(
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
        U = O(function (e) {
          return e.inReplyToStatusId
        }),
        N = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        j = O(function (e) {
          return e.defaultText
        }),
        H = O(function (e) {
          return e.quotedStatus
        }),
        V = O(function (e) {
          return e.isSelfThreadReply
        }),
        z = O(function (e) {
          return e.hideUnsentTweetsButton
        }),
        W = O(function (e) {
          return e.headingSubtitle
        }),
        G = O(function (e) {
          return e.headingTitle
        }),
        q = O(function (e) {
          return e.selectedCommunityId
        }),
        K = Object(L.createSelector)(
          function (e) {
            return E.k(e, '')
          },
          function (e, t) {
            var n = j(e, t)
            return Object(T.a)(t.location) || n
          },
          function (e, t) {
            return t.quotedStatus ? t.quotedStatus : H(e, t)
          },
          x.j,
          N,
          function (e, t, n, a, i) {
            return e.map(function (e, o) {
              return r()(
                r()({}, ((l = e).cardUrl, l.mediaIds, C()(l, D))),
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
              var l
            })
          },
        ),
        X = Object(L.createStructuredSelector)({
          activeUser: F,
          composerData: K,
          draftTweets: M.e,
          inReplyToStatus: function (e, t) {
            var n = B(0, t) || U(e, t)
            return n ? S.a.selectHydrated(e, n) : void 0
          },
          inReplyToStatusId: B,
          isIntentRoute: N,
          isSelfThreadReply: V,
          isSending: function (e) {
            return E.m(e, '')
          },
          scheduledTweets: A.f,
          sendingProgress: E.o,
          composeSemanticCoreId: O(function (e) {
            return e.composeSemanticCoreId
          }),
          hideUnsentTweetsButton: z,
          subtitle: W,
          title: G,
          selectedCommunityIdFromLocationState: q,
          shouldShowCommunityAudienceEducation: function (e, t) {
            return Object(k.D)(e, k.e)
          },
        }),
        Y = {
          createDraftTweetApiErrorHandler: Object(R.createLocalApiErrorHandlerWithContextFactory)(M.d),
          createScheduledTweetApiErrorHandler: Object(R.createLocalApiErrorHandlerWithContextFactory)(A.d),
          fetchScheduledTweets: A.c,
          fetchDraftTweets: M.c,
          addCommunityAudienceEducationFlag: function () {
            return Object(k.z)(k.e)
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
        le = function (e) {
          return Object(k.D)(e, k.r)
        },
        se = Object(oe.a)()
          .propsFromState(function () {
            return { shouldShowNewsletterCallout: le }
          })
          .propsFromActions(function () {
            return { addFlag: k.z }
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
        _e = se(function (e) {
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
                    t(k.r)
                  },
                  text: ge,
                  withCloseButton: !0,
                }),
              )
            : null
        }),
        we = n('7nmT'),
        Ce = n.n(we),
        Ee = n('Dtul'),
        Te = n('zh9S'),
        xe = n('7JQg'),
        Se = 'tweetButton',
        Ie = n('/yvb'),
        ke = n('JYMr'),
        Re = n('cHvH'),
        Le = n('feu+'),
        Pe = n('7N4s'),
        Me = n('oQhu'),
        Ae = n('3A2y'),
        De = ne.a.b8f0483e,
        Oe = ne.a.a133d13e,
        Fe = ne.a.a1183237,
        Be = ne.a.da2663f5,
        Ue = ne.a.j24c37b2,
        Ne = 'compose',
        je = { page: Ne },
        He = { page: Ne, section: 'reply' },
        Ve = { context: 'compose_intent_logged_in' },
        ze = { viewType: 'send_tweet' },
        We = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(d()(e), 'state', { isValid: !1 }),
              v()(d()(e), '_handleDismissCommunityAudienceEducation', function () {
                e.props.addCommunityAudienceEducationFlag()
              }),
              v()(
                d()(e),
                '_handleAppBarHeight',
                Object(Me.a)(function () {
                  var t = Ce.a.findDOMNode(e._appBarRef)
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
                return e.props.inReplyToStatus || e.props.inReplyToStatusId ? He : je
              }),
              v()(d()(e), '_getScribeData', function () {
                var t = e.props,
                  n = t.activeUser
                return t.isIntentRoute && n ? Ve : Z.a
              }),
              v()(d()(e), '_renderAppBarRightControl', function () {
                var t = e.state.isValid,
                  n = e.context.isModal,
                  a = e.props,
                  r = a.activeUser,
                  i = a.inReplyToStatus,
                  o = a.isSelfThreadReply,
                  l = a.isSending,
                  s = !t || l || !r
                return n
                  ? void 0
                  : y.a.createElement(
                      Ie.a,
                      {
                        behavioralEventContext: ze,
                        disabled: s,
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
                  y.a.createElement(ke.a, {
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
                Object(Te.c)(r()(r()({}, e._getScribeNamespace()), {}, { element: 'unsent_tweets', action: 'click' })),
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
            s()(n, [
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
                    l = e.inReplyToStatus,
                    s = e.location,
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
                      o.replace({ pathname: s.pathname, state: Object(Ae.a)(s.state || {}, 'selectedCommunityId') })),
                    null != l && l.exclusivity_info
                      ? d({
                          _type: 'super_followers_exclusive',
                          conversationControlsValue: 'super_followers_exclusive',
                          exclusivityControlValue: {},
                        })
                      : null != l && l.community_id_str
                      ? d({
                          _type: 'community_members',
                          communityIdValue: l.community_id_str,
                          conversationControlsValue: 'community_members',
                        })
                      : null != l &&
                        l.trusted_friends_info &&
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
                    l = t.history,
                    s = t.isIntentRoute,
                    c = t.location,
                    d = t.quotedStatus,
                    u = t.richTextInputContext,
                    p = t.subtitle,
                    m = t.title,
                    h = t.typeaheadWrapper,
                    f = s && !n,
                    v = this.context.isModal
                  return y.a.createElement(
                    xe.c,
                    { data: this._getScribeData(), namespace: this._getScribeNamespace() },
                    y.a.createElement(Re.a, null, function (t) {
                      var s = t.windowWidth,
                        g = b.a.shouldRenderAsModal(s),
                        w = (f || e.showCommunityAudienceEducation) && g,
                        C = (null == i ? void 0 : i.length) > 1
                      return y.a.createElement(
                        y.a.Fragment,
                        null,
                        e.showCommunityAudienceEducation
                          ? y.a.createElement(Le.a, {
                              actionLabel: Ue,
                              graphicDisplayMode: 'none',
                              headline: Fe,
                              onAction: e._handleDismissCommunityAudienceEducation,
                              onClose: e._handleDismissCommunityAudienceEducation,
                              subtext: Be,
                              withCloseButton: !1,
                            })
                          : null,
                        f && y.a.createElement(ae.a, { history: l, location: c }),
                        !w &&
                          y.a.createElement(
                            y.a.Fragment,
                            null,
                            y.a.createElement(
                              $.b,
                              {
                                appBarRef: e._setAppBarRef,
                                behavioralEventViewType: Ne,
                                documentTitle: De,
                                hideBackButton: !1,
                                history: l,
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
                                history: l,
                                isModal: v,
                                location: c,
                                onCloseComposer: e._handleCloseComposer,
                                onHandleAppBarHeight: e._handleAppBarHeight,
                                onRef: e._handleComposeContainerRef,
                                quotedStatus: d,
                                richTextInputContext: u,
                                setValidity: e._setValidity,
                                typeaheadWrapper: h,
                                windowWidth: s,
                              }),
                            ),
                            C ? y.a.createElement(_e, null) : null,
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
        l = n('3A2y'),
        s = o.a.b2e94283,
        c = ['title', 'screen_name', 'text', 'url', 'hashtags', 'via']
      t.a = function (e) {
        var t = e.state || {},
          n = e.query || {},
          a = c.map(function (e) {
            return t[e] || n[e]
          }),
          i = r()(a, 6),
          o = i[0],
          l = i[1],
          d = i[2],
          u = i[3],
          p = i[4],
          m = i[5],
          h = [
            o,
            l && '@'.concat(l.toString()),
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
            m && s({ viaScreenName: m }),
          ]
            .filter(Boolean)
            .join(' ')
        return h ? ''.concat(h).concat(' ') : void 0
      }
      var d = function (e) {
        return Object(l.a)(e, c)
      }
    },
    qbku: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        l = n('m3Bd'),
        s = n.n(l),
        c = (n('hBvt'), n('ERkP')),
        d = n.n(c),
        u = n('rxPX'),
        p = Object(u.a)().withAnalytics({ element: 'social_proof' }),
        m = n('aTAq'),
        h = n('Nqmc'),
        f = n('x5Pi'),
        v = ['analytics', 'link'],
        g = p(function (e) {
          var t = d.a.useContext(f.b)
          if (t && e.contextType === t) return null
          var n = e.analytics,
            a = e.link,
            i = s()(e, v),
            l =
              a && !Object(m.a)(a)
                ? o()(
                    o()({}, a),
                    {},
                    {
                      state: o()(
                        o()({}, a.state),
                        {},
                        {
                          referringScribeNamespace: o()(o()({}, n.contextualScribeNamespace), {}, { action: 'click' }),
                        },
                      ),
                    },
                  )
                : a
          return d.a.createElement(
            h.a,
            r()({}, i, {
              link: l,
              onClick: function () {
                var t = e.analytics,
                  n = e.onClick
                t.scribeAction('click'), n && n()
              },
            }),
          )
        })
      t.a = g
    },
    rFBM: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
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
        w = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_dragEnterCount', 0),
              h()(s()(e), 'state', { active: !1 }),
              h()(s()(e), '_handleDragDrop', function (t) {
                var n = e.props.onFilesAdded
                t.preventDefault(), n(Array.from(t && t.dataTransfer.files)), e._updateDragCount(0)
              }),
              h()(s()(e), '_handleDragEnter', function (t) {
                var n = e.props.onDragEnter
                t.preventDefault(), n && n(), e._updateDragCount(e._dragEnterCount + 1)
              }),
              h()(s()(e), '_handleDragLeave', function (t) {
                t.preventDefault(), e._updateDragCount(e._dragEnterCount - 1)
              }),
              h()(s()(e), '_handleDragOver', function (e) {
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
                    i = t ? C.dragBorderValid : C.dragBorderInvalid
                  return v.a.createElement(
                    _,
                    {
                      onDragEnter: this._handleDragEnter,
                      onDragLeave: this._handleDragLeave,
                      onDragOver: this._handleDragOver,
                      onDrop: this._handleDragDrop,
                      style: [C.root, a, r && i],
                    },
                    v.a.createElement(b.a, { style: C.inner }, 'function' == typeof n ? n(r) : n),
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
      h()(w, 'defaultProps', { allowDragDrop: !0 })
      var C = g.a.create(function (e) {
        return {
          root: { display: 'flex', flexDirection: 'column' },
          dragBorderValid: { borderStyle: 'dashed', borderWidth: e.spaces.space2, borderColor: e.colors.primary },
          dragBorderInvalid: { borderStyle: 'dashed', borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 },
          inner: { flexGrow: 1 },
        }
      })
      t.a = w
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
        l = n('1Pcy'),
        s = n.n(l),
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
        w = Object.freeze({ in: 'in', out: 'out', static: 'static' }),
        C = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), 'state', {
                isAnimating: !1,
                renderChildren: v.a.Children.toArray(e.props.children).map(function (e) {
                  return { status: w.static, child: e }
                }),
              }),
              h()(s()(e), '_handleEachAnimateComplete', function () {
                var t = e.state.isAnimating,
                  n = e.props,
                  a = n.children,
                  r = n.onAnimateComplete
                t &&
                  (r && r(),
                  e.setState({
                    renderChildren: v.a.Children.toArray(a).map(function (e) {
                      return { status: w.static, child: e }
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
                          animateMount: a !== w.static,
                          key: n.key,
                          onAnimateComplete: e._handleEachAnimateComplete,
                          show: a !== w.out,
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
                                      return { child: e, status: w.out }
                                    }),
                                  ),
                                ),
                                'break'
                              )
                            var i = t[n],
                              o = e[a]
                            if (i.key === o.key) r.push({ child: i, status: w.static }), (n += 1)
                            else {
                              var l = Object(_.a)(t, function (e) {
                                return e.key === o.key
                              })
                              l >= 0
                                ? (r.push.apply(
                                    r,
                                    b()(
                                      t.slice(n, l).map(function (e) {
                                        return { child: e, status: w.in }
                                      }),
                                    ).concat([{ child: t[l], status: w.static }]),
                                  ),
                                  (n = l + 1))
                                : r.push({ child: o, status: w.out })
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
                                return { child: e, status: w.in }
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
                        return e.status === w.static
                      }),
                    }
                  },
                },
              ],
            ),
            n
          )
        })(v.a.Component)
      t.a = C
    },
    sUoZ: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M22.18 9.565c-.157-.487-.61-.82-1.126-.82h-5.928l-2.007-5.88c-.164-.476-.612-.8-1.12-.8s-.956.322-1.12.8L8.874 8.743H2.945c-.513 0-.97.332-1.126.82-.158.49.02 1.02.44 1.318l4.735 3.357-2.018 5.908c-.164.484 0 1.02.415 1.324.415.304.97.31 1.39.016L12 17.782l5.22 3.703c.206.146.446.218.686.218.25 0 .497-.08.705-.233.41-.305.577-.84.41-1.324l-2.015-5.906 4.735-3.356c.414-.3.595-.83.44-1.32z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    tuke: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
        l = 2,
        s = 3,
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
                  throw new a.a('Gif preview could not be generated', s)
                },
              )
            }
            var u = new a.a('The provided image must be a gif', l)
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
          return se
        })
      var a = n('RhWx'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        s = n.n(l),
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
        w = n('P1r1'),
        C = n('xVN5'),
        E = n('RqPI'),
        T = n('rxPX'),
        x = n('0KEI'),
        S = Object(T.a)()
          .propsFromState(function () {
            return {
              autotaggedLocation: _.d,
              initialResults: _.f,
              initialFetchStatus: _.e,
              lastSearchResults: _.h,
              lastSearchFetchStatus: _.g,
              position: b.d,
              taggedLocation: C.p,
              userCountry: E.y,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)('PLACE_PICKER'),
              loadGeoLocation: b.a,
              fetchInitialPlacesIfNeeded: _.b,
              searchPlaces: _.c,
              updateLastSelectedPlace: _.i,
              updateSettings: w.M,
              updateSingleComposer: C.w,
            }
          })
          .withAnalytics({ page: 'compose', section: 'place_picker' }),
        I = n('kGix'),
        k = n('v//M'),
        R = n('jHSc'),
        L = n('M6MT'),
        P = n('3XMw'),
        M = n.n(P),
        A = n('MWbm'),
        D = n('pjBI'),
        O = n('t62R'),
        F = n('CKsB'),
        B = n('/yvb'),
        U = n('6OUF'),
        N = n('cmUU'),
        j = n('rHpw'),
        H =
          (n('hBpG'),
          (function () {
            function e(t, n, a) {
              o()(this, e), (this.formatter = t), (this.fallbackFormatter = n), (this.fallbackRatio = a)
            }
            return (
              s()(e, [
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
        V = new H(M.a.b01ed2da, M.a.i83e29e0, 5280),
        z = new H(M.a.d4b7cff7, M.a.b211849e, 1e3),
        W = 1.609344,
        G = ['lr', 'mm', 'uk', 'us'],
        q = n('JFx8'),
        K = n('VwDm'),
        X = n('EfHu'),
        Y = n('474o'),
        Q = M.a.b772cd65,
        J = M.a.e7c766ee,
        Z = M.a.ab68727a,
        $ = M.a.ae4057a2,
        ee = M.a.bf2923a5,
        te = M.a.d963d1b6,
        ne = M.a.a893d601,
        ae = M.a.e68b09b4,
        re = M.a.be6cc44d,
        ie = M.a.d8ef3232,
        oe = M.a.cce30dcc,
        le = M.a.fa9adac1,
        se = (function (e) {
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
                  l,
                  s = a.props,
                  c = s.position,
                  d = s.userCountry,
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
                    (l = (n.long - t.long) * (Math.PI / 180)),
                    7917.6 *
                      Math.asin(
                        Math.sqrt(
                          Math.sin(o / 2) * Math.sin(o / 2) +
                            Math.cos(r) * Math.cos(i) * Math.sin(l / 2) * Math.sin(l / 2),
                        ),
                      ))
                  return y.a.createElement(
                    D.a,
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
                          return V.format(e)
                        var n = e * W
                        return z.format(n)
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
                  ? y.a.createElement(q.a, { style: ce.foursquareIcon })
                  : null
              }),
              v()(d()(a), '_renderResults', function () {
                var e = a.state,
                  t = e.query,
                  n = e.showSearchForButton,
                  r = a._selectResults()
                return y.a.createElement(
                  A.a,
                  null,
                  a._renderPlaces(r),
                  n
                    ? y.a.createElement(F.a, {
                        actionText: le({ query: t }),
                        onClick: a._handleSubmit,
                        textColor: 'primary',
                      })
                    : null,
                  a._renderAttributionIfNeeded(),
                )
              }),
              v()(d()(a), '_renderRightControl', function () {
                return y.a.createElement(
                  A.a,
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
                  R.b,
                  {
                    appBarRef: a._appBarRef,
                    history: t,
                    onBackClick: a._handleBack,
                    rightControl: a._renderRightControl(),
                    title: oe,
                  },
                  y.a.createElement(U.a, {
                    Icon: K.a,
                    onChange: a._handleChange,
                    onClear: a._handleClear,
                    onSubmitEditing: a._handleSubmit,
                    placeholder: re,
                    style: ce.search,
                    withClearButton: !0,
                  }),
                  y.a.createElement(k.a, {
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
                  e && e.code === L.a.PERMISSION_DENIED && ((t = J), (n = Z)),
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
              l = e.initialResults,
              s = e.taggedLocation
            return s ? (a.state.selectedLocation = s) : l && (a.state.selectedLocation = i), a
          }
          return (
            s()(n, [
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
        de = S(se)
      t.default = de
    },
    w3n3: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('/yvb'),
        o = n('3XMw'),
        l = n.n(o),
        s = n('3rWK'),
        c = n('Irs7'),
        d = l.a.a4993fa1,
        u = r.a.createElement(s.a, null),
        p = l.a.i0db46e6,
        m = { viewType: 'gif_search' }
      t.a = function (e) {
        var t = e.dmConversationId,
          n = e.enabled,
          a = void 0 === n || n,
          o = e.gifSearchKeySource,
          l = e.history,
          s = e.onPress,
          h = e.style,
          f = e.testID,
          v = Object(c.b)(),
          g = r.a.useCallback(
            function () {
              s && s(),
                v.scribe({ element: 'found_media_button', action: 'click' }),
                l.push({ pathname: '/i/foundmedia/search', state: { gifSearchKeySource: o, dmConversationId: t } })
            },
            [t, v, o, l, s],
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
        l =
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
        s = n('1auM'),
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
            l = a.retweeted_status,
            s = l || a,
            c = s.entities,
            u = s.unmentioned_user_ids,
            h = s.user,
            v = l ? l.user : {},
            g = l ? a.user : {},
            y = (null == c ? void 0 : c.user_mentions) || [],
            b = d.a.mergeTaggedUsers((null == c ? void 0 : c.media) || []),
            _ = f(l || a) || {},
            w = ((t = {}), o()(t, v.id_str, v), o()(t, g.id_str, g), o()(t, h.id_str, h), o()(t, _.id_str, _), t)
          y.forEach(function (e) {
            w[e.id_str] = e
          }),
            b.forEach(function (e) {
              var t = e.name,
                n = e.screen_name,
                a = e.user_id
              w[a] = { id_str: a, name: t, screen_name: n }
            })
          var C = function (e) {
              var t = null == u ? void 0 : u.includes(e.id_str),
                n = e.id_str === h.id_str
              return !t || n ? [e.id_str] : []
            },
            E = Object(p.a)(
              Object(m.a)(
                [].concat(
                  r()(C(v)),
                  r()(C(g)),
                  [h.id_str],
                  r()(
                    y.flatMap(function (e) {
                      return C(e)
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
            T = i && h.id_str === i ? [i].concat(r()(E)) : E
          return (
            n &&
              (T = T.filter(function (e) {
                return e !== h.id_str
              })),
            T.map(function (e) {
              return w[e]
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
                return e.mediaFile && !(e.mediaFile instanceof s.a) && e.mediaFile.isVideo
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
              var t = Object(l.e)(e, 'compose')
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
        l = n.n(o),
        s = n('k6Ei'),
        c = n('rHpw'),
        d = n('+/1j'),
        u = n('MWbm'),
        p = l.a.c2fc878c,
        m = l.a.db11b27f,
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
          l = e.warningCount,
          v = n - t,
          g = v >= 0 ? m({ count: o(v) }) : p({ count: o(t - n) }),
          y =
            t >= l
              ? r.a.createElement(
                  d.a,
                  { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite', style: c.a.visuallyHidden },
                  g,
                )
              : null,
          b = Object(i.a)(v, n),
          _ = t >= n ? 'red500' : t >= l ? 'yellow500' : 'primary',
          w = r.a.createElement(s.a, {
            color: _,
            progress: b,
            size: t >= l ? 30 : 20,
            style: [f.progressCircle, v <= -10 && f.hide],
          }),
          C = t >= l ? r.a.createElement(d.a, { style: [f.text, v > 0 ? f.gray700 : f.red500] }, o(v)) : null
        return r.a.createElement(
          u.a,
          { style: [f.root, f.center] },
          y,
          w,
          r.a.createElement(u.a, { style: [c.a.absoluteFill, f.center] }, C),
        )
      }
    },
    yZqq: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('ddV6'),
        s = n.n(l),
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
        w = n.n(_),
        C = n('Lsrn'),
        E = n('k/Ka'),
        T = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            w()(
              w()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [C.a.root, e.style],
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
      T.metadata = { width: 24, height: 24 }
      var x = T,
        S = n('boUI'),
        I = n('EweD'),
        k = m.a.g6185a9e,
        R = m.a.g2d04222,
        L = m.a.baffe39a,
        P = m.a.af293dc2,
        M = m.a.h1053f7e,
        A = m.a.bf994ab2,
        D = m.a.cf7f7e39,
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
            l = function (t) {
              return function () {
                e.onChange(t), e.dismiss()
              }
            },
            s = !!i,
            c =
              s &&
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
            p = M
          return (
            c ? (p = A) : s && (p = D),
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
                d.a.createElement(f.b, { nativeID: 'conversation-controls-title', weight: 'bold' }, k),
                d.a.createElement(
                  f.b,
                  { color: 'gray700', nativeID: 'conversation-controls-details', size: 'body' },
                  R,
                ),
              ),
              d.a.createElement(
                h.a,
                null,
                d.a.createElement(v.a, {
                  Icon: b.a,
                  actionText: L,
                  isSelected: u.a.all === o,
                  onClick: l(u.a.all),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                d.a.createElement(v.a, {
                  Icon: x,
                  actionText: P,
                  isSelected: u.a.community === o,
                  onClick: l(u.a.community),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                d.a.createElement(v.a, {
                  Icon: c ? S.a : I.a,
                  actionText: p,
                  isSelected: u.a.by_invitation === o,
                  onClick: l(u.a.by_invitation),
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
        U = n('OiMc'),
        N = n('efqG'),
        j = ['children', 'controlled']
      t.a = function (e) {
        var t = e.children,
          n = e.controlled,
          a = void 0 !== n && n,
          i = e.disabled,
          l = d.a.useState(!1),
          c = s()(l, 2),
          u = c[0],
          p = c[1],
          m = d.a.useCallback(function () {
            return p(!0)
          }, []),
          h = d.a.useCallback(function () {
            return p(!1)
          }, []),
          f = a ? (u ? U.a.VISIBILITY_BEHAVIOR.forceVisible : U.a.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
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
        l = n('J0mu'),
        s = n('t62R'),
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
              s.b,
              { color: 'gray700', onPress: t, size: 'subtext2', testID: a, withInteractiveStyling: c },
              r.a.createElement(l.a, { style: p.icon }),
              u({ date: Object(d.b)(i), time: Object(d.i)(i) }),
            )
          : null
      }
    },
  },
])
//# sourceMappingURL=WIPED
