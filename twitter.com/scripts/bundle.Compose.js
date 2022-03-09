;(window.webpackJsonp = window.webpackJsonp || []).push([
  [47, 6, 12],
  {
    '/Rsk': function (e, t, n) {
      'use strict'
      n.d(t, 'f', function () {
        return g
      }),
        n.d(t, 'e', function () {
          return y
        }),
        n.d(t, 'h', function () {
          return _
        }),
        n.d(t, 'g', function () {
          return b
        }),
        n.d(t, 'd', function () {
          return C
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
        s = (n('yH/f'), n('KqXw'), n('LJOr'), n('7x/C'), n('JtPf'), n('oEOe')),
        c = n('kGix'),
        l = (n('hBpG'), n('M6MT')),
        u = n('Ssj5'),
        d = n('qlwE'),
        p = n('a/ea'),
        m = n('474o'),
        h = 'placePicker',
        f = Object.freeze({
          REQUEST: 'rweb/placePicker/SEARCH_REQUEST',
          SUCCESS: 'rweb/placePicker/SEARCH_SUCCESS',
          FAILURE: 'rweb/placePicker/SEARCH_FAILURE',
        }),
        v = Object.freeze({
          initial: { fetchStatus: c.a.NONE },
          lastSearch: { fetchStatus: c.a.NONE },
          lastSelectedPlace: void 0,
        })
      var g = function (e) {
          return e.placePicker.initial.results
        },
        y = function (e) {
          return e.placePicker.initial.fetchStatus
        },
        _ = function (e) {
          return e.placePicker.lastSearch.results
        },
        b = function (e) {
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
        T = function () {
          return function (e, t, n) {
            n.api
            var a = y(t()),
              r = g(t())
            if (a === c.a.LOADING || r) return Promise.resolve()
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
        x = function () {
          return function (e, t, n) {
            n.api
            return Object(d.l)(t()) && Object(p.c)(t()) === l.b.granted
              ? e(Object(p.b)())
                  .then(function () {
                    return e(T())
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
      u.a.register(
        r()({}, h, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case f.REQUEST:
              var n = t.meta.resultSet
              return o()(o()({}, e), {}, r()({}, n, { fetchStatus: c.a.LOADING }))
            case f.FAILURE:
              var a = t.meta.resultSet
              return o()(o()({}, e), {}, r()({}, a, { fetchStatus: c.a.FAILED }))
            case f.SUCCESS:
              var i = t.meta.resultSet,
                s = t.payload
              return o()(o()({}, e), {}, r()({}, i, { fetchStatus: c.a.LOADED, results: s }))
            case S:
              var l = t.payload
              return o()(o()({}, e), {}, { lastSelectedPlace: null != l ? l : void 0 })
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
        c = n.n(s),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        m = n('5Yy7'),
        h = n.n(m),
        f = n('2VqO'),
        v = n.n(f),
        g = n('KEM+'),
        y = n.n(g),
        _ =
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
        b = n.n(_),
        C = (n('TJCb'), n('DZ+c'), n('xZGM')),
        w = n('GTeL'),
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
        R = 'endEditingButton',
        k = 'altTextEducationSheetPrimaryAction',
        M = n('MWbm'),
        A = n('t62R'),
        L = n('p+r5'),
        P = T.a.feabf2a0,
        D = T.a.e36287c6,
        O = T.a.cf565d08,
        F = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(p()(e), '_renderInputHelperText', function () {
                var t = e.props.onShowEducation
                return t ? b.a.createElement(A.b, { color: 'link', onPress: t, withInteractiveStyling: !0 }, O) : null
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
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.autofocus,
                    n = e.maxLength,
                    a = e.mediaItem,
                    r = e.orientedImage,
                    i = e.value
                  return b.a.createElement(
                    M.a,
                    { style: S.root },
                    b.a.createElement(
                      M.a,
                      { style: S.attachmentContainer },
                      b.a.createElement(w.a, { mediaItem: a, orientedImage: r }),
                      b.a.createElement(L.a, {
                        accessibilityLabel: P,
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
        })(b.a.Component),
        B = n('rxPX'),
        N = function (e, t) {
          return Object(C.A)(e, C.a)
        },
        V = Object(B.a)()
          .propsFromState(function () {
            return { showEducationOnMount: N }
          })
          .propsFromActions(function () {
            return { addFlag: C.w }
          })
          .withAnalytics(),
        j = n('feu+'),
        U = T.a.ffe9ec3a,
        H = T.a.j063b261,
        z = T.a.e57144f0,
        W = T.a.f9f9210c,
        G = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n() {
            var e
            c()(this, n)
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
            u()(n, [
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
                  return b.a.createElement(
                    M.a,
                    { style: K.root },
                    i
                      ? b.a.createElement(j.a, {
                          actionLabel: z,
                          headline: U,
                          onAction: this._handleEducationPromptPrimaryAction,
                          onClose: this._handleCloseEducationPrompt,
                          onSecondaryAction: this._handleEducationPromptSecondaryAction,
                          primaryButtonTestID: k,
                          secondaryActionLabel: W,
                          subtext: H,
                        })
                      : null,
                    b.a.createElement(F, {
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
        })(b.a.Component),
        K = x.a.create(function (e) {
          return { root: { flexGrow: 1 } }
        }),
        q = V(G),
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
        ce = n('Mbn/'),
        le = n('zIWA'),
        ue = n('1auM'),
        de = n('eYns'),
        pe = { section: 'alt_text' },
        me = { section: 'crop' },
        he = { section: 'sensitive_media' },
        fe = T.a.e070024a,
        ve = T.a.i2209530,
        ge = T.a.i7d24b36,
        ye = T.a.f96a38a2,
        _e = T.a.hac7c548,
        be = T.a.e3dbfba3,
        Ce = T.a.dd4a83a5,
        we = { crop: 'crop', altText: 'alt_text', sensitiveMedia: 'sensitive_media' },
        Ee = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            c()(this, n),
              (a = t.call(this, e)),
              y()(p()(a), '_cropper', b.a.createRef()),
              y()(
                p()(a),
                '_getMemoizedTabMetadata',
                Object(te.a)(function (e, t) {
                  return t && e === we.sensitiveMedia
                    ? { namespace: he, title: Ce, renderer: a._renderSensitiveMediaTab }
                    : e === we.altText
                    ? { namespace: pe, title: be, renderer: a._renderAltTextTab }
                    : { namespace: me, title: _e, renderer: a._renderCropTab }
                }),
              ),
              y()(p()(a), '_renderTabContent', function (e) {
                var t,
                  n = a.props,
                  r = n.location,
                  i = n.sensitiveMediaTabEnabled,
                  o = a._getMemoizedTabMetadata(e, i),
                  s = !(null !== (t = r.state) && void 0 !== t && t.hideTabs),
                  c = s ? a._getTabLinks(e) : [],
                  l = o.renderer()
                return s && c.length > 1
                  ? b.a.createElement(
                      b.a.Fragment,
                      null,
                      b.a.createElement($.a, { accessibilityLabel: fe, links: c }),
                      b.a.createElement(M.a, { style: Z.a.segmentedControlChildren }, l),
                    )
                  : l
              }),
              y()(p()(a), '_renderAltTextTab', function () {
                var e = a.props.history,
                  t = a.state,
                  n = t.currentMediaId,
                  r = t.mediaMetadata,
                  i = t.orientedImage,
                  o = a._getCurrentMediaItem(),
                  s = r[n] && r[n].altText
                return b.a.createElement(q, {
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
                return b.a.createElement(Y.a, {
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
                return b.a.createElement(J.a, {
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
                return b.a.createElement(
                  M.a,
                  { style: Z.a.rightControl },
                  a._hasMediaAtIndex(n) || a._hasMediaAtIndex(t)
                    ? b.a.createElement(
                        M.a,
                        { style: [Z.a.rightControl, Z.a.leftRightButtons] },
                        b.a.createElement(ee.a, {
                          accessibilityLabel: ye,
                          disabled: !a._hasMediaAtIndex(n),
                          icon: b.a.createElement(oe.a, null),
                          onPress: a._handleClickToMediaAtIndex(n),
                          size: 'small',
                          style: Z.a.prevButton,
                          type: 'primaryOutlined',
                        }),
                        b.a.createElement(ee.a, {
                          accessibilityLabel: ge,
                          disabled: !a._hasMediaAtIndex(t),
                          icon: b.a.createElement(se.a, null),
                          onPress: a._handleClickToMediaAtIndex(t),
                          size: 'small',
                          type: 'primaryOutlined',
                        }),
                      )
                    : null,
                  b.a.createElement(
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
                    c = r.updateMediaUpload,
                    l = a.state.currentMediaId
                  a.setState({ isProcessing: !0 })
                  var u = t ? re([].concat(o()(n), [[l, t.getCropData()]])) : n,
                    d = i.map(function (e) {
                      return u.get(e.id) ? (c({ id: e.id, cropData: u.get(e.id) }), s(e.id)) : Promise.resolve()
                    })
                  Promise.all(d).then(function () {
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
                    r.originalMediaFile && r.originalMediaFile instanceof ue.a)
                  ) {
                    var i = r.cropData
                    Object(de.b)(r.originalMediaFile, { cropData: n || i })
                      .then(function (e) {
                        return new ue.a(e).withDimensionsAndOrientation().then(function (e) {
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
              l = a._getMediaMetadata(s)
            return (
              (a.state = {
                cropData: new Map(),
                isProcessing: !1,
                mediaMetadata: l,
                currentMediaId: i || -1,
                orientedImage: new Map(),
              }),
              a
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    n = e.sensitiveMediaTabEnabled,
                    a = this._getCurrentTab(),
                    r = this._getMemoizedTabMetadata(a, n)
                  return b.a.createElement(
                    Q.c,
                    { namespace: r.namespace },
                    b.a.createElement(
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
                    c = this._getCurrentMediaItem(),
                    l = []
                  return (
                    null != c &&
                      null !== (t = c.originalMediaFile) &&
                      void 0 !== t &&
                      t.isImage &&
                      l.push({
                        to: r()(r()({}, o), {}, { state: r()(r()({}, o.state), {}, { tab: we.crop }) }),
                        label: b.a.createElement(ce.a, null),
                        key: we.crop,
                        accessibilityLabel: _e,
                        isActive: function () {
                          return e === we.crop
                        },
                        onClick: function () {
                          return i.scribePageImpression()
                        },
                      }),
                    l.push({
                      to: r()(r()({}, o), {}, { state: r()(r()({}, o.state), {}, { tab: we.altText }) }),
                      label: b.a.createElement(A.b, { weight: 'bold' }, 'ALT'),
                      key: we.altText,
                      accessibilityLabel: be,
                      isActive: function () {
                        return e === we.altText
                      },
                      onClick: function () {
                        return n._handleClickTab('alt_text_button')
                      },
                    }),
                    s &&
                      l.push({
                        to: r()(r()({}, o), {}, { state: r()(r()({}, o.state), {}, { tab: we.sensitiveMedia }) }),
                        label: b.a.createElement(le.a, null),
                        key: we.sensitiveMedia,
                        accessibilityLabel: Ce,
                        isActive: function () {
                          return e === we.sensitiveMedia
                        },
                        onClick: function () {
                          return n._handleClickTab('sensitive_media_tab')
                        },
                      }),
                    l
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      t.b = Ee
    },
    '21U8': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('Rqga'), n('2G9S'), n('ERkP')),
        v = n.n(f),
        g = n('/yvb'),
        y = n('3XMw'),
        _ = n.n(y),
        b = n('3rX5'),
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
        T = function (e) {
          var t = e.circle,
            n = e.height,
            a = e.width
          return v.a.createElement(w.a, {
            pointerEvents: 'none',
            style: [E.mask, { width: a, height: n }, t && E.circle],
          })
        },
        x = n('ZvMt'),
        S = n('97Jx'),
        I = n.n(S),
        R = n('m3Bd'),
        k = n.n(R),
        M = n('CHgo'),
        A = n('7ep7'),
        L = ['children', 'onPanEnd', 'onPanMove', 'onPinchMove', 'onWheel'],
        P = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              h()(c()(a), '_previousTouchDistance', 0),
              h()(c()(a), '_previousPositionX', 0),
              h()(c()(a), '_previousPositionY', 0),
              h()(c()(a), '_centerPosition', { x: 0, y: 0 }),
              h()(c()(a), '_panResponder', {}),
              h()(c()(a), '_setRef', function (e) {
                var t = a.props,
                  n = t.onPanEnd,
                  r = t.onPanMove,
                  i = t.onPinchMove,
                  o = t.onWheel
                if (e) {
                  ;(r || n || i) && (a._removeTouchMoveToScrollListener = Object(M.a)(e, a._preventDefaultEvent, !1)),
                    o && (a._removeScrollToScaleListener = Object(M.b)(e, a._preventDefaultEvent, !1))
                  var s = e.getBoundingClientRect()
                  a._centerPosition = { x: s.width / 2 + s.left, y: s.height / 2 + s.top }
                }
              }),
              h()(c()(a), '_preventDefaultEvent', function (e) {
                e.preventDefault()
              }),
              h()(c()(a), '_handlePanResponderMove', function (e, t) {
                var n,
                  r,
                  i = a.props,
                  o = i.onPanMove,
                  s = i.onPinchMove,
                  c = e.nativeEvent.touches
                if (2 === t.numberActiveTouches) {
                  if (s) {
                    var l =
                        ((n = c[0]),
                        (r = c[1]),
                        Math.sqrt(Math.pow(n.pageY - r.pageY, 2) + Math.pow(n.pageX - r.pageX, 2))),
                      u = (function (e, t) {
                        return {
                          pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2,
                          pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2,
                        }
                      })(c[0], c[1]),
                      d = u.pageX,
                      p = u.pageY,
                      m = a._previousPositionX ? d - a._previousPositionX : 0,
                      h = a._previousPositionY ? p - a._previousPositionY : 0,
                      f = a._previousTouchDistance ? l - a._previousTouchDistance : 0
                    ;(a._previousPositionX = d), (a._previousPositionY = p), (a._previousTouchDistance = l)
                    var v = a._centerPosition
                    s(f, v.x - d, v.y - p, m, h)
                  }
                } else o && o(t.dx, t.dy)
                document.addEventListener('selectstart', a._preventDefaultEvent, !1)
              }),
              h()(c()(a), '_handlePanResponderEnd', function (e, t) {
                a.props.onPanEnd && a.props.onPanEnd(t.dx, t.dy),
                  a.props.onPinchMove && (a._previousTouchDistance = 0),
                  (a._previousPositionX = 0),
                  (a._previousPositionY = 0),
                  a._removeSelectStartListener()
              }),
              h()(c()(a), '_handleWheel', function (e) {
                var t = e.clientX,
                  n = e.clientY,
                  r = e.deltaX,
                  i = e.deltaY,
                  o = a._centerPosition,
                  s = o.x - t,
                  c = o.y - n
                a.props.onWheel && a.props.onWheel(r, i, s, c)
              }),
              (a._panResponder = A.a.create({
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
                    t = (e.children, e.onPanEnd, e.onPanMove, e.onPinchMove, e.onWheel, k()(e, L))
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
        D = n('9RkS'),
        O = n('rOXj'),
        F = n('aITJ'),
        B = n('yiKp'),
        N = n.n(B),
        V = n('Lsrn'),
        j = n('k/Ka'),
        U = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(j.a)(
            'svg',
            N()(
              N()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [V.a.root, e.style],
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
      var H = U,
        z = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(j.a)(
            'svg',
            N()(
              N()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [V.a.root, e.style],
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
            N()(
              N()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [V.a.root, e.style],
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
            N()(
              N()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [V.a.root, e.style],
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
            N()(
              N()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [V.a.root, e.style],
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
        J = _.a.d85bc1b8,
        Z = _.a.f596ace8,
        $ = _.a.df031fca,
        ee = _.a.b40332c5,
        te = _.a.e547b368,
        ne = _.a.f7571204,
        ae = _.a.e6e16811,
        re =
          Math.log2 ||
          function (e) {
            return Math.log(e) * Math.LOG2E
          },
        ie = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e) {
            var a, i
            return (
              r()(this, n),
              (a = t.call(this, e)),
              h()(c()(a), '_previousLeft', 0),
              h()(c()(a), '_previousTop', 0),
              h()(c()(a), '_panStyles', { top: 0, left: 0 }),
              h()(c()(a), '_shouldShowZoomControl', function () {
                return (!F.b.isMobileOS() || !O.a.isTouchSupported()) && a.props.withZoomControl
              }),
              h()(c()(a), '_renderControls', function () {
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
                              icon: v.a.createElement(H, null),
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
              h()(c()(a), '_setImageRef', function (e) {
                a._imageRef = e
              }),
              h()(c()(a), '_handleScaleChange', function (e) {
                a.setState({ imageScale: e })
              }),
              h()(c()(a), '_getImageDimensions', function () {
                var e = a.state.imageScale,
                  t = a.props.image.width / a.props.image.height,
                  n = a._getMaskDimensions(),
                  r = n.height,
                  i = n.width,
                  o = x.a.getCoverDimensions({ width: i, height: r }, t),
                  s = o.height
                return { width: o.width * Math.pow(2, e), height: s * Math.pow(2, e) }
              }),
              h()(c()(a), '_getMaskDimensions', function () {
                var e = a.state,
                  t = e.aspectRatio,
                  n = e.containerHeight,
                  r = e.containerWidth,
                  i = x.a.getContainDimensions({ width: r - 50, height: n - 50 }, t),
                  o = i.height
                return { width: i.width, height: o }
              }),
              h()(c()(a), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout,
                  n = t.height,
                  r = t.width
                a.state.containerHeight || a.state.containerWidth
                  ? a.setState({ containerHeight: n, containerWidth: r })
                  : (a.setState({ containerHeight: n, containerWidth: r }), a._setDefaultCropData())
              }),
              h()(c()(a), '_setDefaultCropData', function () {
                var e = a.props,
                  t = e.defaultCropData,
                  n = e.image
                if (t) {
                  var r = a._getImageDimensions().width,
                    i = a._getMaskDimensions().width,
                    o = r / n.width,
                    s = re(i / (t.width * o))
                  a.setState({ imageScale: s })
                  var c = a._getUnscaledCropData(),
                    l = c.left,
                    u = c.top
                  ;(a._panStyles.top = u - t.top * o * Math.pow(2, s)),
                    (a._previousTop = a._panStyles.top),
                    (a._panStyles.left = l - t.left * o * Math.pow(2, s)),
                    (a._previousLeft = a._panStyles.left),
                    a._updateNativeStyles()
                }
              }),
              h()(c()(a), '_handleWheel', function (e, t, n, r) {
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
              h()(c()(a), '_handlePanMove', function (e, t) {
                ;(a._panStyles.left = a._previousLeft + e),
                  (a._panStyles.top = a._previousTop + t),
                  a._updateNativeStyles(),
                  a._adjustToInBounds()
              }),
              h()(c()(a), '_handlePanEnd', function (e, t) {
                ;(a._previousLeft = a._panStyles.left), (a._previousTop = a._panStyles.top)
              }),
              h()(c()(a), '_handlePinchMove', function (e, t, n, r, i) {
                var o = e / 200
                a.setState(function (e) {
                  var s = e.imageScale,
                    c = Math.min(a._maxScale, Math.max(s + o, 0))
                  return (
                    (a._panStyles.left += t * (c - s) + r),
                    (a._panStyles.top += n * (c - s) + i),
                    (a._previousLeft = a._panStyles.left),
                    (a._previousTop = a._panStyles.top),
                    { imageScale: c }
                  )
                })
              }),
              h()(c()(a), '_adjustToInBounds', function () {
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
              h()(c()(a), '_updateNativeStyles', function () {
                var e = a._panStyles,
                  t = e.left,
                  n = e.top
                a._imageRef &&
                  a._imageRef.setNativeProps({
                    style: { transform: [{ translate3d: ''.concat(t, 'px, ').concat(n, 'px, 0') }] },
                  })
              }),
              h()(c()(a), '_getUnscaledCropData', function () {
                var e = a._getImageDimensions(),
                  t = e.height,
                  n = e.width,
                  r = a._getMaskDimensions(),
                  i = r.height,
                  o = r.width,
                  s = a._panStyles,
                  c = s.left
                return { top: (t - i) / 2 - s.top, left: (n - o) / 2 - c, width: o, height: i }
              }),
              h()(c()(a), '_setAspectRatio', function (e) {
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
                    c = s.height,
                    l = s.width,
                    u = this.state.containerWidth && this.state.containerHeight
                  return v.a.createElement(
                    w.a,
                    { style: oe.container },
                    v.a.createElement(
                      P,
                      {
                        onLayout: this._handleLayout,
                        onPanEnd: this._handlePanEnd,
                        onPanMove: this._handlePanMove,
                        onPinchMove: a ? this._handlePinchMove : void 0,
                        onWheel: a ? this._handleWheel : void 0,
                        style: oe.root,
                      },
                      u
                        ? v.a.createElement(
                            v.a.Fragment,
                            null,
                            v.a.createElement(b.a, {
                              ref: this._setImageRef,
                              source: { uri: n.src, width: o, height: i },
                              style: oe.image,
                            }),
                            v.a.createElement(T, { circle: t, height: c, width: l }),
                          )
                        : null,
                    ),
                    u ? this._renderControls() : null,
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
        return l
      })
      n('2G9S')
      var a = n('1YZw'),
        r = n('pXBW'),
        i = n('3XMw'),
        o = n.n(i),
        s = n('SrIh'),
        c = o.a.a5d4fda0,
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
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
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
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
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    '6XNv': function (e, t, n) {
      'use strict'
      var a = n('RhWx'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        v = n.n(f),
        g = n('yiKp'),
        y = n.n(g),
        _ = (n('lTEL'), n('7x/C'), n('LqLs'), n('87if'), n('kYxP'), n('7xRU'), n('z84I'), n('2G9S'), n('ERkP')),
        b = n.n(_),
        C = n('t62R'),
        w = n('piX5'),
        E = n('4r2z'),
        T = n('FG+G'),
        x = n('rHpw'),
        S = n('k/Ka'),
        I = n('shC7'),
        R = n('MWbm'),
        k = b.a.forwardRef(function (e, t) {
          return Object(S.a)('select', y()(y()({}, e), {}, { ref: t }))
        }),
        M = function (e) {
          return Object(S.a)('option', e)
        },
        A = 1,
        L = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e) {
            var a
            return (
              o()(this, n),
              (a = t.call(this, e)),
              v()(u()(a), '_selectRef', b.a.createRef()),
              v()(u()(a), 'state', { isFocused: !1 }),
              v()(u()(a), '_handleChange', function (e) {
                var t = a.props,
                  n = t.onChange,
                  r = t.withEmptyOption,
                  i = e.target,
                  o = i.selectedIndex,
                  s = i.value
                n && n(s, o - (r ? 1 : 0))
              }),
              v()(u()(a), '_handleBlur', function (e) {
                var t = a.props.onBlur
                a.setState({ isFocused: !1 }), t && t()
              }),
              v()(u()(a), '_handleFocus', function (e) {
                var t = a.props.onFocus
                a.setState({ isFocused: !0 }), t && t()
              }),
              (a._id = 'SELECTOR_'.concat(A)),
              (a._errorID = ''.concat(a._id, '_ERROR')),
              (a._helperID = ''.concat(a._id, '_HELP')),
              (a._labelID = ''.concat(a._id, '_LABEL')),
              (A += 1),
              a
            )
          }
          return (
            c()(n, [
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
                    c = e.style,
                    l = e.testID,
                    u = e.value,
                    d = e.withEmptyOption,
                    p = this.state.isFocused,
                    m = C.b.getLanguage(),
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
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    b.a.createElement(
                      R.a,
                      {
                        style: [
                          w.a.border,
                          P.container,
                          n && w.a.disabled,
                          p && w.a.focusedBorderValid,
                          f && w.a.invalidBorderColor,
                          p && f && w.a.focusedBorderInvalid,
                          c,
                        ],
                      },
                      this._renderLabel(),
                      b.a.createElement(
                        k,
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
                          style: [P.select, { fontFamily: h }, n && w.a.disabled],
                          testID: l || '',
                          value: u,
                        },
                        d ? b.a.createElement(M, { disabled: !0, style: P.option, value: '' }) : null,
                        s.map(function (e) {
                          var t = e.disabled,
                            n = e.label,
                            a = e.value
                          return b.a.createElement(
                            M,
                            { disabled: t, key: ''.concat(n, '-').concat(a), style: P.option, value: a },
                            n,
                          )
                        }),
                      ),
                      b.a.createElement(T.a, {
                        style: [P.dropdownCaret, p && w.a.validColor, (i || a) && w.a.invalidColor],
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
                  return b.a.createElement(
                    C.b,
                    {
                      accessibilityRole: 'label',
                      color: n || t ? 'red500' : r ? 'primary' : 'gray700',
                      nativeID: this._labelID,
                      style: P.label,
                    },
                    a,
                  )
                },
              },
              {
                key: '_renderHelperText',
                value: function () {
                  return b.a.createElement(
                    R.a,
                    { accessibilityLiveRegion: 'polite' },
                    b.a.createElement(
                      C.b,
                      { color: 'gray700', nativeID: this._helperID, style: P.helperText },
                      this.props.helperText,
                    ),
                  )
                },
              },
              {
                key: '_renderErrorText',
                value: function () {
                  return b.a.createElement(
                    R.a,
                    { accessibilityLiveRegion: 'polite' },
                    b.a.createElement(
                      C.b,
                      { color: 'red500', nativeID: this._errorID, style: P.helperText },
                      this.props.errorText,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      v()(L, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (L.propTypes = {})
      var P = x.a.create(function (e) {
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
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('849X'), n('TJCb'), n('M+/F'), n('ERkP')),
        v = n.n(f),
        g = n('oEoC'),
        y = n('2dXj'),
        _ = n('4bHO'),
        b = n('dzqK'),
        C = n('GZwR'),
        w = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), '_genericWrapperRef', v.a.createRef()),
              h()(c()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              h()(c()(e), 'render', function () {
                var t = e.props,
                  n = t.children,
                  a = t.contextText,
                  r = t.isInline,
                  i = t.isInlineReply,
                  o = t.onTypeaheadStateChange,
                  s = t.source,
                  c = e.state,
                  l = c.canShowTypeahead,
                  u = c.queryContext,
                  d = l && u ? { word: u.word, resultType: u.resultType } : void 0
                return v.a.createElement(
                  y.a,
                  {
                    contextText: a,
                    isInline: r,
                    isInlineReply: i,
                    onDismiss: e._handleDismiss,
                    onSelectItem: e._handleSelectItem,
                    onTypeaheadStateChange: o,
                    query: d,
                    ref: e._genericWrapperRef,
                    source: s || C.d.Compose,
                  },
                  n(e._handleInputChange),
                )
              }),
              h()(c()(e), '_handleSelectItem', function (t) {
                var n = e.props.onTextUpdated,
                  a = e.state.queryContext
                if (a) {
                  var r = Object(_.a)(t, a.resultType),
                    i = e._replaceToken(r, a),
                    o = i.newCursor,
                    s = i.newTweetText
                  n({ target: { value: s } }), e._updateDOMTextArea(o, s)
                }
                e._setQueryContext(void 0)
              }),
              h()(c()(e), '_updateDOMTextArea', function (t, n) {
                e._textAreaRef &&
                  ((e._textAreaRef.value = n),
                  (e._textAreaRef.selectionStart = t),
                  (e._textAreaRef.selectionEnd = t),
                  e._textAreaRef.focus())
              }),
              h()(c()(e), '_handleInputChange', function (t) {
                if (Object(b.a)(t))
                  throw new Error('PlainTextTypeaheadComposeWrapper cannot handle rich text input changes')
                var n = t && (t.currentTarget || t.target),
                  a = e.state.queryContext
                e._textAreaRef = n
                var r = a && a.word,
                  i = n.value,
                  o = g.c(n.selectionStart, i),
                  s = o.end,
                  c = o.start,
                  l = o.word,
                  u = g.e(l || '', 'compose')
                if ((null == u ? void 0 : u.q) !== r)
                  if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === c))
                    e._setQueryContext(void 0)
                  else if (u) {
                    var d = u.q,
                      p = u.result_type
                    e._setQueryContext({ word: d, resultType: p, fullText: n.value, startIndex: c, endIndex: s })
                  } else e._setQueryContext(void 0)
              }),
              h()(c()(e), '_setQueryContext', function (t) {
                return e.setState({ queryContext: t, canShowTypeahead: !!t })
              }),
              h()(c()(e), '_handleDismiss', function () {
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
        s = n('VrFO'),
        c = n.n(s),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        m = n('5Yy7'),
        h = n.n(m),
        f = n('2VqO'),
        v = n.n(f),
        g = n('KEM+'),
        y = n.n(g),
        _ = n('97Jx'),
        b = n.n(_),
        C = (n('1t7P'), n('jQ/y'), n('ho0z'), n('2G9S'), n('hBpG'), n('7x/C'), n('ERkP')),
        w = n.n(C),
        E = n('6rlp'),
        T = n('zh9S'),
        x = n('G6rE'),
        S = n('rxPX'),
        I = n('0KEI'),
        R = function (e, t) {
          return x.e.select(e, t.userId)
        },
        k = function (e, t) {
          return t.promotedContent
        },
        M = Object(S.a)()
          .propsFromState(function () {
            return { promotedContent: k, user: R }
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
        A = n('I57f'),
        L = n('vMjK'),
        P = n('MWbm'),
        D = n('IG7M'),
        O = n('rHpw'),
        F = function (e) {
          var t = e.children,
            n = e.promotedContent,
            a = e.user
          return w.a.createElement(
            P.a,
            { style: B.decorationWrapper },
            t,
            w.a.createElement(D.a, {
              renderActionMenu: function (e) {
                return w.a.createElement(L.b, { onClose: e, promotedContent: n, user: a, view: 'follower' })
              },
              style: B.actionMenu,
            }),
          )
        },
        B = O.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        N = n('uIZp'),
        V = n('mN6z'),
        j = n('caTy'),
        U = n('3IPs'),
        H = n('Rp9C'),
        z = n('X04g'),
        W = n('Re5t'),
        G = n('TnY3'),
        K = n('hxu0'),
        q = n('v6aA'),
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
            ? w.a.createElement(
                re,
                b()({}, e, {
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
          return w.a.createElement(A.a, { isFollowing: t, style: ie.followButton, userId: n })
        },
        te = function (e) {
          var t = e.loggedInUserId,
            n = e.promotedContent,
            a = e.userId
          return t !== a
            ? w.a.createElement(N.a, { promotedContent: n, size: 'small', style: ie.followButton, userId: a })
            : null
        },
        ne = function (e) {
          return w.a.createElement(F, { promotedContent: e.promotedContent, user: e.user }, te(e))
        },
        ae = function (e) {
          return w.a.createElement(D.a, {
            renderActionMenu: function (t) {
              return w.a.createElement(L.b, {
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
            c()(this, n)
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
                n && a && a(z.a.ItemType.USER) && n({ user: { id: r, type: U.a.User } })
              }),
              y()(p()(e), '_scribeAction', function (t) {
                var n,
                  a = e.props,
                  r = a.promotedContent,
                  i = a.scribeAction,
                  s = a.scribeData,
                  c = a.scribeNamespace,
                  l = a.user,
                  u = a.userId,
                  d =
                    null == s || null === (n = s.items) || void 0 === n
                      ? void 0
                      : n.find(function (e) {
                          return e.item_type === z.a.ItemType.USER && e.id === u
                        }),
                  p = s.search_details,
                  m = { items: [o()(o()({}, d), H.a.getUserItem(l, r))], profile_id: u, search_details: p }
                i(o()(o()({}, c), t), m)
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._shouldRender() && this._handleImpression()
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(V.a)(this.props, e)
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
                    s = t.user,
                    c = r()(t, Z)
                  return this._shouldRender()
                    ? w.a.createElement(
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
                        w.a.createElement(
                          Q.a,
                          b()({}, c, {
                            avatarDecoration: n,
                            bottomControl: this._renderBottomControl(),
                            decoration: this._renderDecoration(),
                            highlightedLabel: this._getHighlightedLabel(),
                            isBlocking: s.blocking,
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
                    s = n.isDeviceFollowing,
                    c = n.isFollowing,
                    l = n.promotedContent,
                    u = n.screenName,
                    d = n.user,
                    p = n.userId
                  return 'function' == typeof e
                    ? e({
                        displayMode: a,
                        followRequestReceived: r,
                        isAutoblocking: i,
                        isBlocking: o,
                        isDeviceFollowing: !!s,
                        isFollowing: !!c,
                        loggedInUserId: t,
                        promotedContent: l,
                        screenName: u,
                        user: d,
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
                    s = t.userId
                  r &&
                    a({
                      disclosureType: r.disclosure_type,
                      itemId: i || s,
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
                    var s = a.disclosure_type,
                      c = a.impression_id
                    n({
                      disclosureType: s,
                      itemId: o,
                      itemType: J.c.USER,
                      params: { event: J.b.IMPRESSION, impression_id: c },
                    }).catch(t())
                  } else i && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      y()(re, 'contextType', q.a), y()(re, 'defaultProps', $.defaultProps)
      var ie = O.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        oe = Object(G.a)(Object(K.a)(M($)))
      t.b = Object(X.a)({ element: 'user' })(oe)
    },
    '8A5z': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
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
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    '9Q4p': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return _
      })
      n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('GTeL'),
        o = n('3XMw'),
        s = n.n(o),
        c = n('MWbm'),
        l = n('PbQQ'),
        u = n('6vad'),
        d = n('e0ey'),
        p = n('rHpw'),
        m = n('ZkMC'),
        h = s.a.j9cf595f,
        f = s.a.d69a782e,
        v = s.a.faf745f9,
        g = s.a.b96e6682,
        y = s.a.h2437f25
      function _(e) {
        var t = e.currentWarnings,
          n = e.mediaItem,
          a = e.onWarningChange,
          o = e.orientedImage,
          s = [
            { label: v, value: 'adult_content' },
            { label: g, value: 'graphic_violence' },
            { label: y, value: 'other' },
          ],
          p = l.b.useOpaqueIdentifier(),
          _ = r.a.createElement(i.a, { mediaItem: n, orientedImage: o })
        return r.a.createElement(
          c.a,
          { style: b.root },
          r.a.createElement(
            c.a,
            { style: b.modalContainer },
            null != t && t.size
              ? r.a.createElement(
                  m.a,
                  { revealableTombstoneConfig: m.c, sensitiveMediaWarnings: t, withRoundedCorners: !1 },
                  _,
                )
              : _,
            r.a.createElement(u.b, { nativeID: p, subtext: f, text: h }),
            r.a.createElement(
              c.a,
              { accessibilityLabelledBy: p, accessibilityRole: 'group' },
              s.map(function (e) {
                var n = e.label,
                  i = e.value
                return r.a.createElement(d.a, { checked: t && t.has(i), key: i, label: n, name: i, onChange: a })
              }),
            ),
          ),
        )
      }
      var b = p.a.create(function (e) {
        return {
          modalContainer: { width: '100%', height: '100%', flexGrow: 1 },
          root: { display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', height: '100%', flexGrow: 1 },
        }
      })
    },
    CDB5: function (e, t, n) {
      'use strict'
      n.d(t, 'm', function () {
        return k
      }),
        n.d(t, 'l', function () {
          return A
        }),
        n.d(t, 'f', function () {
          return P
        }),
        n.d(t, 'd', function () {
          return O
        }),
        n.d(t, 'g', function () {
          return F
        }),
        n.d(t, 'e', function () {
          return N
        }),
        n.d(t, 'i', function () {
          return j
        }),
        n.d(t, 'j', function () {
          return U
        }),
        n.d(t, 'k', function () {
          return H
        }),
        n.d(t, 'h', function () {
          return z
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
        c = n.n(s),
        l = n('KEM+'),
        u = n.n(l),
        d = n('yiKp'),
        p = n.n(d),
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
        _ = n('Ssj5'),
        b = n('fEA7'),
        C = n.n(b),
        w = n('uKEd'),
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
      var R = function (e) {
          var t = e.conversation_id,
            n = e.id,
            a = e.localMediaId,
            r = e.recipient_ids,
            i = e.sender_id,
            o = e.text,
            s = e.attachment,
            c = void 0 === s ? {} : s,
            l = e.error,
            u = Date.now().toString()
          return {
            conversation_id: t,
            recipient_ids: r,
            error: l,
            id: n,
            is_draft: !0,
            message_data: { attachment: c, localMediaId: a, sender_id: i, text: o, time: u },
            type: 'message',
            time: u,
          }
        },
        k = function (e) {
          return function (t, n, a) {
            var i = a.api,
              s = e || {},
              l = s.senderId,
              u = s.cardUrl,
              d = s.conversationId,
              _ = s.localMediaId,
              b = s.recipients,
              S = void 0 === b ? [] : b,
              I = s.requestId,
              k = void 0 === I ? C.a.v1() : I,
              M = s.tweetAttachment,
              A = s.quickReply,
              L = c()(s, x)
            t(Z(d))
            var P = n(),
              D = _ || V(n(), d),
              F = m.k(P, D),
              B = o()(F, 1)[0] || {},
              N = B.mediaFile,
              j = B.mediaMetadata,
              U = S.length > 0 && S.join(','),
              H = {}
            N && N.isGif
              ? (H.extraInitParams = '&media_category=dm_gif')
              : N && N.isVideo && (H.extraInitParams = '&media_category=dm_video')
            var W = m.p(D, H),
              G = [t(W)],
              K = (z(P, d) || {}).found_media_origin
            return (
              N && N.isGif && G.push(Object(g.a)(N)),
              Promise.all(G).then(
                function (n) {
                  var a = o()(n, 2),
                    s = o()(a[0], 1)[0],
                    c = a[1],
                    g = (null == j ? void 0 : j.altText) || (null == j ? void 0 : j.defaultAltText),
                    _ = !!g
                  return (
                    s && (K || _)
                      ? t(m.m(p()({ media_id: s.uploadId, found_media_origin: K }, !!_ && { alt_text: { text: g } })))
                      : Promise.resolve()
                  ).then(
                    function () {
                      var n = (M || {}).id_str,
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
                          ? (a.animated_gif = p()(p()({}, g), {}, { media_url_https: c, type: 'animated_gif' }))
                          : m.isVideo && (a.video = p()(p()({}, g), {}, { media_url_https: m.url, type: 'video' }))
                      } else M && (a.tweet = { status: n })
                      var _ = (s || {}).uploadId,
                        b = R({
                          attachment: a,
                          conversation_id: d,
                          id: k,
                          recipient_ids: U,
                          sender_id: l,
                          text: e.text,
                        }),
                        C = p()(
                          p()(
                            p()(p()({}, L), Object(y.a)(u) && { card_uri: u }),
                            {},
                            { conversation_id: d },
                            !n && { media_id: _ },
                          ),
                          {},
                          { recipient_ids: U, request_id: k, tweet_id: n },
                        )
                      A &&
                        ((C['quick_reply_response[options][id]'] = A.id),
                        (C['quick_reply_response[options][selected_id]'] = A.selected_id))
                      var x = Object(E.a)([
                        ee(d),
                        { type: v.c.REQUEST },
                        { type: 'rweb/dmComposer/SEND_MESSAGE_REQUEST' },
                        d && Object(w.b)(d, k, b),
                      ])
                      return (
                        t(x),
                        i.DirectMessages.sendMessage(C).then(
                          function (n) {
                            var a = n.entities,
                              i = a.cards,
                              o = a.entries,
                              s = a.tweets,
                              c = a.users,
                              l = n.result.conversations
                            Object(T.a)(D) && t(Q(d, D))
                            var u = Object(E.a)(
                              [{ type: v.c.SUCCESS }].concat(
                                r()(Object(h.a)({ conversations: l, entries: o, users: c, tweets: s, cards: i })),
                                [{ type: 'rweb/dmComposer/SEND_MESSAGE_SUCCESS' }, d && Object(w.j)(d, k, e), O(d)],
                              ),
                            )
                            return t(u), Promise.resolve(Object.values(n.entities.entries)[0].conversation_id)
                          },
                          function (n) {
                            var r = R({
                                attachment: a,
                                conversation_id: d,
                                error: !0,
                                id: k,
                                localMediaId: D,
                                recipient_ids: U,
                                sender_id: l,
                                text: e.text,
                              }),
                              i = Object(E.a)([
                                { type: v.c.SUCCESS },
                                { type: 'rweb/dmComposer/SEND_MESSAGE_FAILURE' },
                                d && Object(w.b)(d, k, r),
                              ])
                            return t(i), Object(f.e)(t, n, 'ACTION_SEND_DM')
                          },
                        )
                      )
                    },
                    function (e) {
                      return t(ne(d)), (e.type = 'metadata'), Promise.reject(e)
                    },
                  )
                },
                function (e) {
                  return t(Object(E.a)([Object(T.a)(D) && Q(d, D), ne(d)])), Promise.reject(e)
                },
              )
            )
          }
        },
        M = function (e, t) {
          return e.dmComposer[t]
        },
        A = function (e, t) {
          var n = M(e, t)
          return n ? n.text : null
        },
        L = 'rweb/dmComposer/SAVE_TEXT',
        P = function (e, t) {
          return { type: L, conversationId: e, text: t }
        },
        D = 'rweb/dmComposer/REMOVE_TEXT',
        O = function (e) {
          return { type: D, conversationId: e }
        },
        F = function (e, t) {
          var n = M(e, t)
          return n ? n.cardUrl : null
        },
        B = 'rweb/dmComposer/SAVE_CARD_URL',
        N = function (e, t) {
          return { type: B, conversationId: e, cardUrl: t }
        },
        V = function (e, t) {
          var n = M(e, t)
          return n ? n.mediaId : null
        },
        j = function (e, t) {
          var n = m.k(e, V(e, t))
          return n.length > 0 ? n[0] : null
        },
        U = function (e, t) {
          var n = M(e, t)
          return !!n && n.isUploading
        },
        H = function (e, t) {
          return m.l(e, V(e, t))
        },
        z = function (e, t) {
          var n = M(e, t)
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
      _.a.register(
        u()({}, S, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.conversationId || 'new_group'
          switch (t.type) {
            case W:
              var a = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, u()({}, n, p()(p()({}, a), t.payload)))
            case J:
              var r = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, u()({}, n, p()(p()({}, r), {}, { isUploading: !0 })))
            case K:
              var i = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, u()({}, n, p()(p()({}, i), {}, { isUploading: !1 })))
            case te:
            case $:
            case X:
              var o = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(
                p()({}, e),
                {},
                u()({}, n, p()(p()({}, o), {}, { isUploading: !1, mediaId: null, gifMetadata: void 0 })),
              )
            case L:
              var s = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, u()({}, n, p()(p()({}, s), {}, { text: t.text })))
            case B:
              var c = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, u()({}, n, p()(p()({}, c), {}, { cardUrl: t.cardUrl })))
            case D:
              var l = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, u()({}, n, p()(p()({}, l), {}, { text: null })))
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
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
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
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    EeFI: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        m = n('ERkP'),
        h = n.n(m),
        f = n('3XMw'),
        v = n.n(f),
        g = n('MWbm'),
        y = n('Qwev'),
        _ = n('21U8'),
        b = n('rHpw'),
        C = n('1auM'),
        w = n('eYns'),
        E = v.a.gff1f69e,
        T = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return o()(this, n), ((a = t.call(this, e)).state = { orientedImage: null }), a
          }
          return (
            c()(n, [
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
                    s = this.state.orientedImage,
                    c = r || {},
                    l = c.cropData,
                    u = c.originalMediaFile,
                    d = void 0 === u ? {} : u
                  return s
                    ? h.a.createElement(
                        g.a,
                        { style: x.cropper },
                        h.a.createElement(_.a, {
                          circle: this.props.circle,
                          defaultAspectRatio: (a && a.aspectRatio) || (l && l.aspectRatio) || n,
                          defaultCropData: a || l,
                          image: { src: s.url, width: d.width, height: d.height },
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
        x = b.a.create(function (e) {
          return {
            cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 },
            activityIndicator: { flexGrow: 1 },
          }
        })
      t.a = h.a.forwardRef(function (e, t) {
        return h.a.createElement(T, r()({}, e, { cropperRef: t }))
      })
    },
    GTeL: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        s = n('pKoL'),
        c = n('Qwev'),
        l = n('rHpw'),
        u = n('U+bB'),
        d = n('MWbm'),
        p = o.a.gff1f69e
      var m = l.a.create(function (e) {
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
          d.a,
          { style: m.mediaPreviewWrapper },
          void 0 === n && t
            ? r.a.createElement(s.a, {
                imageResizeMode: 'contain',
                mediaItem: t,
                style: m.mediaContainer,
                withCloseButton: !1,
              })
            : n
            ? r.a.createElement(u.a, { resizeMode: 'contain', source: n.url, style: m.image })
            : r.a.createElement(c.a, { accessibilityLabel: p, style: m.activityIndicator }),
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
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
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
      ;(l.metadata = { width: 158, height: 20 }), (t.a = l)
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
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
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
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
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
        c = n.n(s),
        l = (n('z84I'), n('RqPI')),
        u = n('xVN5'),
        d = n('wpu3'),
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
        g = Object(p.createSelector)(v, l.q, function (e, t) {
          return e && t
            ? Object(d.a)({ inReplyToStatus: e, loggedInUserId: t, excludeReplyUser: !0 }).map(function (e) {
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
        _ = { updateExcludedRecipientsV2: u.u },
        b = Object(h.f)(y, _),
        C = n('jHSc'),
        w = n('3XMw'),
        E = n.n(w),
        T = n('5FtR'),
        x = n('7JQg'),
        S = n('s1N3'),
        I = n('88ay'),
        R = n('hqDb'),
        k = n('MWbm'),
        M = n('0yYu'),
        A = n('6vad'),
        L = n('XiMS'),
        P = n('t62R'),
        D = n('/yvb'),
        O = E.a.c55eed71,
        F = E.a.b772cd65,
        B = E.a.caca3101,
        N = E.a.c6a6dc2f,
        V = { page: 'compose', section: 'recipients' },
        j = function (e) {
          var t = e.history,
            n = e.inReplyToStatus,
            a = e.initialExcludedRecipients,
            i = e.recipientIds,
            s = e.updateExcludedRecipientsV2,
            l = c.a.useState(a),
            u = o()(l, 2),
            d = u[0],
            p = u[1]
          if (!n) return c.a.createElement(T.a, { to: '/compose/tweet' })
          var h = (n.retweeted_status || n).user,
            f = function (e) {
              p(e ? Object(m.a)() : i)
            },
            v = function (e) {
              return function () {
                var t = -1 !== d.indexOf(e)
                p(
                  t
                    ? d.filter(function (t) {
                        return t !== e
                      })
                    : Object(S.a)([].concat(r()(d), [e])),
                )
              }
            },
            g = function () {
              s(d), t.goBack()
            },
            y = function () {
              return i.length > 1 ? c.a.createElement(L.a, { checked: 0 === d.length, onChange: f }) : null
            },
            _ = function (e) {
              var t = e.isBlocking,
                n = e.screenName
              return t ? c.a.createElement(P.b, { color: 'magenta500', size: 'subtext2' }, N({ screenName: n })) : null
            },
            b = function (e) {
              if (!n) return null
              var t = (n.retweeted_status || n).user,
                a = -1 !== d.indexOf(e),
                r = e === t.id_str,
                i = c.a.createElement(L.a, { checked: !a, disabled: r, onChange: v(e) })
              return c.a.createElement(I.b, {
                bottomControl: _,
                cellClickable: !r,
                decoration: i,
                key: e,
                onClick: v(e),
                promotedItemType: 'users',
                userId: e,
                withLink: !1,
              })
            }
          return c.a.createElement(
            x.c,
            { namespace: V },
            c.a.createElement(
              C.b,
              {
                backLocation: '/compose/tweet',
                history: t,
                onBackClick: g,
                rightControl: c.a.createElement(D.a, { onPress: g, size: 'xSmall', type: 'brandFilled' }, F),
                title: O,
              },
              b(h.id_str),
              i.length
                ? c.a.createElement(
                    k.a,
                    null,
                    c.a.createElement(M.a, null),
                    c.a.createElement(A.b, { rightControl: y(), text: B }),
                    c.a.createElement(R.a, { renderUserCell: b, userIds: i }),
                  )
                : null,
            ),
          )
        }
      t.default = b(j)
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
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
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
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    VPdC: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return A
      })
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('VrFO'),
        c = n.n(s),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        v = n.n(f),
        g = (n('2G9S'), n('7xRU'), n('ERkP')),
        y = n.n(g),
        _ = n('3XMw'),
        b = n.n(_),
        C = n('cjZk'),
        w = 'fileInput',
        E = n('sjK1'),
        T = n('/Imo'),
        x = n('rHpw'),
        S = n('9HgX'),
        I = ['acceptGifs', 'acceptImages', 'acceptVideo', 'customMimeTypes', 'icon', 'style', 'withIcon'],
        R = b.a.b9960f31,
        k = { viewType: 'media_picker' },
        M = y.a.createElement(C.a, null),
        A = function (e) {
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
            return c()(this, n), t.apply(this, arguments)
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.acceptGifs,
                    n = e.acceptImages,
                    a = e.acceptVideo,
                    i = e.customMimeTypes,
                    s = e.icon,
                    c = e.style,
                    l = e.withIcon,
                    u = o()(e, I),
                    d = A({ acceptGifs: t, acceptImages: n, acceptVideo: a }).concat(i).join(',')
                  return y.a.createElement(
                    T.a,
                    r()({}, u, {
                      accept: d,
                      behavioralEventContext: k,
                      icon: l ? s : void 0,
                      style: [P.root, c],
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
        icon: M,
        size: 'medium',
        withIcon: !0,
      })
      var P = x.a.create(function (e) {
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
          return _
        }),
        n.d(t, 'c', function () {
          return b
        }),
        n.d(t, 'a', function () {
          return C
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        s = (n('yH/f'), n('LW0h'), n('7x/C'), n('oEOe')),
        c = n('kGix'),
        l = n('Ssj5'),
        u = 'scheduledTweets',
        d = { fetchStatus: c.a.NONE, scheduledTweets: [] },
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
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case m.SUCCESS:
            if (t.payload) return o()(o()({}, e), {}, { fetchStatus: c.a.LOADED, scheduledTweets: t.payload })
            break
          case m.FAILURE:
            return o()(o()({}, e), {}, { fetchStatus: c.a.FAILED })
          case m.REQUEST:
            return o()(o()({}, e), {}, { fetchStatus: c.a.LOADING })
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
      l.a.register(r()({}, u, g))
      var y = function (e) {
          return e.scheduledTweets.scheduledTweets
        },
        _ = function (e) {
          return e.scheduledTweets.fetchStatus
        },
        b = function () {
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
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
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
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    'a/ea': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return d
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
        c = n('Ssj5'),
        l = 'geoLocation',
        u = Object.freeze({ permissionStatus: void 0, position: void 0 })
      var d = function (e) {
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
      c.a.register(
        r()({}, l, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
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
        c = n.n(s),
        l = n('v6aA'),
        u = n('XOJV'),
        d = n('eSoz'),
        p = n('rxPX'),
        m = n('0KEI'),
        h = function (e, t) {
          return t.tweetId
        },
        f = function (e, t) {
          var n = t.tweetId,
            a = n && u.a.select(e, n)
          return a ? Object(d.g)(e, a) : void 0
        },
        v = Object(p.a)()
          .propsFromState(function () {
            return { community: f, hydratedTweet: u.a.createHydratedTweetSelector(h) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: d.c.fetchOneIfNeeded,
            }
          }),
        g = n('YeIG'),
        y = n('uCxL'),
        _ = n('x5Pi'),
        b = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        C = v(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            s = (e.tweetId, o()(e, b)),
            u = c.a.useContext(l.a),
            d = u.featureSwitches,
            p = u.loggedInUserId,
            m = null == i ? void 0 : i.community_id_str
          c.a.useEffect(
            function () {
              m && Object(g.a)(t) && a(m).catch(n())
            },
            [t, m, n, a],
          )
          var h = d.isTrue('responsive_web_alt_text_badge_enabled'),
            f = i && Object(_.f)(i, p, t),
            v = f && Object(_.e)(f),
            C = d.isTrue('responsive_web_reactions_enabled')
          return c.a.createElement(
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
        c = n('VrFO'),
        l = n.n(c),
        u = n('Y9Ll'),
        d = n.n(u),
        p = n('1Pcy'),
        m = n.n(p),
        h = n('5Yy7'),
        f = n.n(h),
        v = n('2VqO'),
        g = n.n(v),
        y = n('KEM+'),
        _ = n.n(y),
        b = (n('ho0z'), n('2G9S'), n('1t7P'), n('jQ/y'), n('hBvt'), n('k/Ka')),
        C = n('3XMw'),
        w = n.n(C),
        E = n('sgih'),
        T = n('t62R'),
        x = n('/yvb'),
        S = n('rHpw'),
        I = w.a.cfd2f35d,
        R = (function (e) {
          f()(n, e)
          var t = g()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              _()(m()(e), '_handleOnFocus', function (e) {
                e.currentTarget.select()
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
                    t = e.cancelButtonLabel,
                    n = e.description,
                    a = e.headerText,
                    i = e.link,
                    o = e.onCancel,
                    s = Object(b.a)('input', {
                      autoFocus: !0,
                      onFocus: this._handleOnFocus,
                      readOnly: !0,
                      style: k.linkInput,
                      value: i,
                    })
                  return r.a.createElement(
                    E.a,
                    { onMaskClick: o, style: k.container, type: 'center', withMask: !0 },
                    a && r.a.createElement(T.b, { align: 'center', style: k.headerText, weight: 'bold' }, a),
                    n && r.a.createElement(T.b, { align: 'center', color: 'gray700', style: k.labelText }, n),
                    s,
                    r.a.createElement(x.a, { onPress: o, size: 'xLarge', style: k.cancelButton, type: 'brandText' }, t),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.Component)
      _()(R, 'defaultProps', { cancelButtonLabel: I })
      var k = S.a.create(function (e) {
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
        M = R,
        A = n('I/9y'),
        L = n('mjJ+'),
        P = n('cm6r'),
        D = n('CaKu'),
        O = n('U+bB'),
        F = w.a.e05c00b4,
        B = w.a.eabf2209,
        N = w.a.a613e72f,
        V = w.a.f88553c8,
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
              l()(this, n),
              (a = t.call(this, e)),
              _()(m()(a), '_renderMenu', function (e) {
                return r.a.createElement(L.a, {
                  items: [{ text: N, Icon: A.a, onClick: a._handleCopyGifLinkButtonClick }],
                  onCloseRequested: e,
                })
              }),
              _()(m()(a), '_handleCopyGifLinkButtonClick', function (e) {
                var t = a.props,
                  n = t.addToast,
                  r = t.gifUrl
                D.a.isAvailable() ? (D.a.setString(r), n({ text: V })) : a.setState({ showCopyLinkSheet: !0 }), e && e()
              }),
              _()(m()(a), '_handleCopyLinkSheetCancel', function () {
                a.setState({ showCopyLinkSheet: !1 })
              }),
              (a.state = { showCopyLinkSheet: !1 }),
              a
            )
          }
          return (
            d()(n, [
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
                          ? r.a.createElement(M, {
                              description: B({ providerName: i }),
                              headerText: F,
                              link: n,
                              onCancel: this._handleCopyLinkSheetCancel,
                            })
                          : null,
                        r.a.createElement(
                          T.b,
                          { align: 'center', color: 'gray700', style: H.root },
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
                    P.a,
                    { interactiveStyles: null, renderMenu: this._renderMenu },
                    r.a.createElement(
                      T.b,
                      { weight: 'bold', withInteractiveStyling: !0 },
                      r.a.createElement(O.a, { source: { uri: t }, style: H.image }),
                      r.a.createElement(T.b, null, e.toUpperCase()),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.PureComponent),
        H = S.a.create(function (e) {
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
        z = U,
        W = s(function (e) {
          var t = e.addToast,
            n = e.gifUrl,
            a = e.provider
          return r.a.createElement(z, { addToast: t, gifUrl: n, provider: a })
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
        return z
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('z84I'), n('KqXw'), n('3uku'), n('jwue'), n('7x/C'), n('+oxZ'), n('ho0z'), n('ERkP')),
        v = n.n(f),
        g = n('K1iM'),
        y = n.n(g),
        _ = n('RhWx'),
        b = n.n(_),
        C = (n('wFPu'), n('CDB5')),
        w = n('xVN5'),
        E = n('vjRr'),
        T = n('rxPX'),
        x = n('0KEI'),
        S = function (e, t) {
          var n,
            a,
            r = t.urls,
            i = b()(r),
            o = y()(i.reverse())
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var s = a.value
              if ((n = E.a.select(e, s))) break
            }
          } catch (c) {
            o.e(c)
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
              updateDMComposer: C.e,
              updateTweetComposer: w.w,
            }
          }),
        R = n('KqB4'),
        k = n.n(R),
        M = n('aX4+'),
        A = n('3XMw'),
        L = n.n(A),
        P = n('hOZg'),
        D = n('cnVF'),
        O = n('MWbm'),
        F = n('v6aA'),
        B = n('/yvb'),
        N = n('rHpw'),
        V = n('VY6S'),
        j = n('mN6z'),
        U = L.a.f6fec9f6,
        H = /^https?:\/\//i,
        z = function (e) {
          var t = k()(e)
          if (t.length)
            return t.map(function (e) {
              return (!H.test(e) && 'http://'.concat(e)) || e
            })
        },
        W = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              h()(c()(i), '_fetchCardPreviewIfNeeded', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchCardPreviewIfNeeded
                e.urls.forEach(function (e) {
                  n(e).catch(t())
                })
              }),
              h()(c()(i), '_handleCardPreviewDismissal', function (e) {
                return i._updateSingleComposer({ cardUrl: D.B })
              }),
              h()(c()(i), '_updateSingleComposer', function (e) {
                var t = i.props,
                  n = t.conversationId,
                  a = t.index,
                  r = t.updateDMComposer,
                  o = t.updateTweetComposer,
                  s = (e || {}).cardUrl
                i._isDMComposer ? n && r(n, s) : o({ updates: { cardUrl: s }, index: a })
              }),
              (i._debouncedFetchCardPreview = Object(V.a)(i._fetchCardPreviewIfNeeded, 1e3)),
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
                        v.a.createElement(M.a, {
                          card: { name: t.name, url: t.url, binding_values: t.binding_values },
                          cardContext: { tweetUserId: r },
                          isInteractive: !1,
                          preventVideoPlayback: !0,
                        }),
                        v.a.createElement(B.a, {
                          accessibilityLabel: U,
                          icon: v.a.createElement(P.a, null),
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
      var G = N.a.create(function (e) {
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
        c = n.n(s),
        l = n('VrFO'),
        u = n.n(l),
        d = n('Y9Ll'),
        p = n.n(d),
        m = n('1Pcy'),
        h = n.n(m),
        f = n('5Yy7'),
        v = n.n(f),
        g = n('2VqO'),
        y = n.n(g),
        _ = n('KEM+'),
        b = n.n(_),
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
        T = n('pXBW'),
        x = n('6/RC'),
        S = (n('KOtZ'), n('ho0z'), n('hBpG'), n('wpu3')),
        I = n('v6aA'),
        R = n('+Kfv'),
        k = n('eSoz'),
        M = n('rxPX'),
        A = function (e, t) {
          var n = t.communityId
          return n ? k.c.select(e, n) : void 0
        },
        L = Object(M.a)().propsFromState(function () {
          return { community: A }
        }),
        P = n('MtXG'),
        D = n('t62R'),
        O = n('CKsB'),
        F = n('rHpw'),
        B = n('3XMw'),
        N = n.n(B),
        V = N.a.d58baa7e,
        j = L(
          w.a.memo(function (e) {
            var t = e.clickHandler,
              n = e.community,
              a = e.communityId,
              r = e.selectedCommunityId
            if (!n) return null
            var i,
              o = n.member_count
            return w.a.createElement(O.a, {
              actionSubText:
                ((i = V(o)),
                w.a.createElement(
                  P.a.Group,
                  null,
                  w.a.createElement(
                    P.a,
                    null,
                    w.a.createElement(
                      D.b,
                      { color: 'white' },
                      w.a.createElement(
                        N.a.I18NFormatMessage,
                        { $i18n: 'b38e130b' },
                        w.a.createElement(P.a.Value, null, N.a.ibd0106d({ formattedCount: i })),
                        w.a.createElement(P.a.Label, null, N.a.cface2d0({ count: o })),
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
              style: U.menuItem,
            })
          }),
        ),
        U = F.a.create(function (e) {
          return { menuItem: { alignItems: 'center' } }
        }),
        H = n('0zXz'),
        z = n('FS1z'),
        W = n('MWbm'),
        G = n('yw4N'),
        K = n('/yvb'),
        q = n('+Eiw'),
        X = n('Zg3A'),
        Y = n('EyD/'),
        Q = N.a.e815fc33,
        J = N.a.c63602d3,
        Z = N.a.baffe39a,
        $ = N.a.aa4209e8,
        ee = N.a.d0748dae,
        te = N.a.abd845fd,
        ne = { viewType: 'everyone' },
        ae = { viewType: 'community' },
        re = N.a.d58baa7e,
        ie = F.a.create(function (e) {
          return {
            hidden: { visibility: 'hidden' },
            title: { flexDirection: 'column', paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space12 },
            root: { flex: 1, flexDirection: 'column', paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12 },
            menuItem: { alignItems: 'center' },
            superFollowsIcon: { backgroundImage: q.a.getBackgroundImage() },
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
        oe = function (e) {
          var t,
            n,
            a,
            r,
            i,
            o = e.audienceControlsValue,
            s = e.dismiss,
            c = e.hasMemberships,
            l = e.history,
            u = e.isC9sParticipationEnabled,
            d = e.isSuperFollowsCreator,
            p = e.onAudienceControlsValueChange,
            m = e.sliceModule,
            h = w.a.useContext(I.a),
            f = o.communityIdValue || void 0,
            v = o.exclusivityControlValue || void 0,
            g = o.trustedFriendsValue || void 0,
            y = h.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled'),
            _ = null === (t = e.trustedFriendsList) || void 0 === t ? void 0 : t.rest_id,
            b =
              null !== (n = null === (a = e.trustedFriendsList) || void 0 === a ? void 0 : a.member_count) &&
              void 0 !== n
                ? n
                : 0,
            C = w.a.useCallback(
              function (e) {
                return function () {
                  p(e), s()
                }
              },
              [p, s],
            ),
            E = w.a.useCallback(
              function (e) {
                if (_) return l.push('/i/circles/'.concat(_, '/members'))
              },
              [l, _],
            )
          return w.a.createElement(
            W.a,
            { style: ie.root },
            w.a.createElement(
              G.a,
              { style: ie.viewport },
              w.a.createElement(
                w.a.Fragment,
                null,
                w.a.createElement(D.b, { size: 'headline1', style: ie.title, weight: 'bold' }, Q),
                w.a.createElement(
                  R.a,
                  { behavioralEventContext: ne },
                  w.a.createElement(O.a, {
                    Icon: X.a,
                    actionText: Z,
                    isSelected: !v && !f && !g,
                    onClick: C({ _type: 'conversation_controls', conversationControlsValue: 'all' }),
                    selectable: !0,
                    style: ie.menuItem,
                    withIconAsThumbnail: !0,
                  }),
                ),
                d
                  ? w.a.createElement(O.a, {
                      Icon: Y.a,
                      actionText: $,
                      iconThumbnailColor: 'exclusive',
                      isSelected: !!v,
                      onClick: C({
                        _type: 'super_followers_exclusive',
                        conversationControlsValue: 'super_followers_exclusive',
                        exclusivityControlValue: {},
                      }),
                      selectable: !0,
                      style: ie.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
                y && e.trustedFriendsList && _
                  ? w.a.createElement(O.a, {
                      Icon: Y.a,
                      actionSubText:
                        ((r = b),
                        (i = re(r)),
                        w.a.createElement(
                          P.a.Group,
                          null,
                          w.a.createElement(
                            P.a,
                            null,
                            w.a.createElement(
                              D.b,
                              { color: 'white' },
                              w.a.createElement(
                                N.a.I18NFormatMessage,
                                { $i18n: 'g8ffaf17' },
                                w.a.createElement(P.a.Value, null, N.a.a5f7b70f({ formattedCount: i })),
                                w.a.createElement(P.a.Label, null, N.a.a7daec1e({ count: r })),
                              ),
                            ),
                            w.a.createElement(K.a, { onPress: E, size: 'xSmall', type: 'primaryText' }, te),
                          ),
                        )),
                      actionText: ee,
                      iconThumbnailColor: 'success',
                      isSelected: !!g,
                      onClick: C({
                        _type: 'trusted_friends_tweet',
                        conversationControlsValue: 'trusted_friends_tweet',
                        trustedFriendsValue: { trusted_friends_list_id: _ },
                      }),
                      selectable: !0,
                      style: ie.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
              ),
              c && m && u
                ? w.a.createElement(
                    W.a,
                    null,
                    w.a.createElement(
                      R.a,
                      { behavioralEventContext: ae },
                      w.a.createElement(D.b, { style: ie.title, weight: 'bold' }, J),
                      w.a.createElement(z.a, {
                        module: m,
                        noItemsRenderer: H.a,
                        renderer: function (e) {
                          return w.a.createElement(j, {
                            clickHandler: C,
                            communityId: e,
                            dismiss: s,
                            key: e,
                            selectedCommunityId: f,
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
        se = n('xVN5'),
        ce = n('wAC9'),
        le = function (e) {
          return Object(ce.a)({
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
        ue = n('hqKg'),
        de = n('li/m'),
        pe = n('RqPI'),
        me = n('xZGM'),
        he = n('0KEI'),
        fe = n('oEOe'),
        ve = n('kGix'),
        ge = n('Ssj5'),
        ye = 'trustedFriends',
        _e = Object.freeze({
          REQUEST: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_REQUEST',
          SUCCESS: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_SUCCESS',
          FAILURE: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_FAILURE',
        }),
        be = Object.freeze({
          REQUEST: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_REQUEST',
          SUCCESS: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_SUCCESS',
          FAILURE: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_FAILURE',
        }),
        Ce = function (e) {
          return e.trustedFriends.lists
        },
        we = function () {
          return function (e, t, n) {
            var a = n.api
            return fe.b(e, { request: a.TrustedFriends.createTrustedFriendsList })({
              actionTypes: be,
              context: 'CREATE_TRUSTED_FRIENDS_LIST',
            })
          }
        },
        Ee = function () {
          return function (e, t) {
            var n = t(),
              a = Ce(n)
            ;(a.length ? a[0] : void 0) ||
              e(function (e, t, n) {
                var a = n.api
                return fe.b(e, { request: a.TrustedFriends.fetchAuthenticatedUserTFLists })({
                  actionTypes: _e,
                  context: 'FETCH_TRUSTED_FRIENDS_LISTS',
                })
              }).then(function (t) {
                !t.authenticated_user_trusted_friends_lists.length && we && e(we())
              })
          }
        },
        Te = Object.freeze({ lists: [], fetchStatus: ve.a.NONE })
      ge.a.register(
        b()({}, ye, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Te,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case _e.REQUEST:
              return c()(c()({}, e), {}, { fetchStatus: ve.a.LOADING })
            case _e.FAILURE:
              return c()(c()({}, e), {}, { error: t.payload, fetchStatus: ve.a.FAILED })
            case _e.SUCCESS:
              if (t.payload)
                return c()(
                  c()({}, e),
                  {},
                  { lists: t.payload.authenticated_user_trusted_friends_lists, error: null, fetchStatus: ve.a.LOADED },
                )
              break
            case be.REQUEST:
              return c()(c()({}, e), {}, { fetchStatus: ve.a.LOADING })
            case be.FAILURE:
              return c()(c()({}, e), {}, { error: t.payload, fetchStatus: ve.a.FAILED })
            case be.SUCCESS:
              if (t.payload)
                return c()(
                  c()({}, e),
                  {},
                  { lists: [t.payload.trusted_friends_list_create], error: null, fetchStatus: ve.a.LOADED },
                )
              break
            default:
              return e
          }
          return e
        }),
      )
      var xe = function (e, t) {
          var n = t.audienceControlsValue.communityIdValue || void 0
          return n ? k.c.select(e, n) : void 0
        },
        Se = function (e, t) {
          return Object(me.A)(e, me.f)
        },
        Ie = function (e) {
          var t = Ce(e)
          return t.length ? t[0] : void 0
        },
        Re = Object(M.a)()
          .propsFromState(function () {
            return {
              communities: k.f,
              educationalVisibilityFlag: Se,
              hasMemberships: de.d,
              selectedCommunity: xe,
              sliceModule: Object(ue.createSelector)(pe.q, function (e) {
                return e ? le(e) : void 0
              }),
              selectTrustedFriendsList: Ie,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(he.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_CONTROLS',
              ),
              addEducationFlag: function () {
                return Object(me.w)(me.f)
              },
              updateSingleComposer: se.w,
              fetchOrCreateTrustedFriendsList: Ee,
            }
          }),
        ke = n('FG+G'),
        Me = n('Sp5X'),
        Ae = n('X00g'),
        Le = n('efqG'),
        Pe = N.a.baffe39a,
        De = N.a.e815fc33,
        Oe = N.a.aa4209e8,
        Fe = N.a.d0748dae,
        Be = { viewType: 'communities_controls' },
        Ne = w.a.createElement(ke.a, null),
        Ve = (function (e) {
          v()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r
            return (
              u()(this, n),
              (r = t.call(this, e, a)),
              b()(h()(r), '_renderContent', function (e) {
                var t = r.props,
                  n = t.audienceControlsValue,
                  a = t.hasMemberships,
                  i = t.isC9sParticipationEnabled,
                  o = t.isSuperFollowsCreator,
                  s = t.sliceModule
                return w.a.createElement(oe, {
                  audienceControlsValue: n,
                  dismiss: e,
                  hasMemberships: a,
                  history: Me.a,
                  isC9sParticipationEnabled: i,
                  isSuperFollowsCreator: o,
                  onAudienceControlsValueChange: r._handleAudienceControlsValueChange,
                  sliceModule: s,
                  trustedFriendsList: r.props.selectTrustedFriendsList,
                })
              }),
              b()(h()(r), '_handleAudienceControlsValueChange', function (e) {
                var t = r.props.updateSingleComposer
                r._handleDismissEducationalVisibilty(),
                  r.props.onAudienceControlsValueChange(e),
                  ['super_followers_exclusive', 'community_members', 'trusted_friends_tweet'].indexOf(e._type) > -1 &&
                    t({ updates: { scheduledFor: void 0, scheduledTweetId: void 0 } })
              }),
              b()(h()(r), '_handleOpen', function () {
                r.setState({ popoverIsOpen: !0 })
              }),
              b()(h()(r), '_handleDismiss', function () {
                r.setState({ popoverIsOpen: !1 }), r._handleDismissEducationalVisibilty()
              }),
              b()(h()(r), '_handleDismissEducationalVisibilty', function () {
                r.props.addEducationFlag()
              }),
              (r.state = { popoverIsOpen: !1 }),
              r
            )
          }
          return (
            p()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled'),
                    t = this.props.fetchOrCreateTrustedFriendsList
                  t && e && t()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.audienceControlsValue,
                    a = t.educationalVisibilityFlag,
                    i = t.hasMemberships,
                    o = t.isSuperFollowsCreator,
                    s = t.selectedCommunity,
                    c = this.state.popoverIsOpen,
                    l = this.context.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
                    u = this.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled'),
                    d = n.communityIdValue || !1,
                    p = n.exclusivityControlValue || !1,
                    m = n.trustedFriendsValue || !1,
                    h = a && !s,
                    f = Pe
                  if ((d && null != s && s.name ? (f = s.name) : p ? (f = Oe) : m && (f = Fe), p))
                    e = { color: 'plum500', borderColor: 'plum500', backgroundColor: 'transparent' }
                  else if (d && null != s && s.theme && l) {
                    var v = Ae.a.getCommunityUIColorName(s.theme)
                    e = { color: v, borderColor: v, backgroundColor: 'transparent' }
                  } else e = { type: 'brandOutlined' }
                  return o || i || (u && this.props.selectTrustedFriendsList)
                    ? w.a.createElement(
                        R.a,
                        { behavioralEventContext: Be },
                        w.a.createElement(
                          W.a,
                          { style: je.container },
                          w.a.createElement(
                            Le.a,
                            {
                              onDismiss: this._handleDismiss,
                              onOpen: this._handleOpen,
                              renderContent: this._renderContent,
                              visibilityBehavior: h ? 'forceVisible' : 'interactive',
                            },
                            w.a.createElement(
                              K.a,
                              r()(
                                {
                                  accessibilityExpanded: c,
                                  accessibilityHasPopup: 'menu',
                                  accessibilityLabel: De,
                                  accessibilityRole: 'button',
                                  icon: Ne,
                                  size: 'xSmall',
                                },
                                e,
                              ),
                              f,
                            ),
                          ),
                        ),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(Ve, 'contextType', I.a)
      var je = F.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spaces.space4 },
            container: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
            hidden: { visibility: 'hidden' },
            root: { flexDirection: 'column', paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 },
          }
        }),
        Ue = Re(Ve),
        He = n('ddV6'),
        ze = n.n(He),
        We = n('PKbs'),
        Ge = function (e, t) {
          var n = t.selectedCommunityId
          return n ? k.c.select(e, n) : void 0
        },
        Ke = Object(M.a)()
          .propsFromState(function () {
            return { community: Ge }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(he.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_RULES'),
              fetchCommunityIfNeeded: k.c.fetchOneIfNeeded,
            }
          }),
        qe = n('YeIG'),
        Xe = n('21zW'),
        Ye = N.a.gfca5254,
        Qe = N.a.f510c8b2,
        Je = w.a.createElement(D.b, { weight: 'bold' }, Qe),
        Ze = F.a.create(function (e) {
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
        $e = Ke(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            i = e.selectedCommunityId,
            o = e.showMiddot
          w.a.useEffect(
            function () {
              i && Object(qe.a)(t) && a(i).catch(n())
            },
            [t, i, n, a],
          )
          var s = w.a.useState(!1),
            c = ze()(s, 2),
            l = c[0],
            u = c[1],
            d = w.a.useContext(I.a).featureSwitches,
            p = w.a.useCallback(
              function (e) {
                if (null != t && t.rules) {
                  var n = t.rules,
                    a = t.theme
                  return w.a.createElement(We.b, {
                    badgeStyle: Ze.badgeStyle,
                    headerContainerStyle: Ze.rulesHeader,
                    heading: Je,
                    ruleContainerStyle: Ze.ruleContainerStyle,
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
              h = Ae.a.getCommunityUIColorName(m),
              f = d.isTrue('c9s_ui_colors_enabled_rweb')
                ? { color: h, borderColor: 'transparent', backgroundColor: 'transparent' }
                : { type: 'brandText' }
            return w.a.createElement(
              W.a,
              { style: Ze.container },
              o ? w.a.createElement(Xe.a, null) : null,
              w.a.createElement(
                Le.a,
                {
                  onDismiss: function () {
                    return u(!1)
                  },
                  onOpen: function () {
                    return u(!0)
                  },
                  renderContent: p,
                },
                w.a.createElement(
                  K.a,
                  r()(
                    {
                      accessibilityExpanded: l,
                      accessibilityHasPopup: 'dialog',
                      accessibilityRole: 'button',
                      size: 'xSmall',
                      style: Ze.button,
                    },
                    f,
                  ),
                  Ye,
                ),
              ),
            )
          }
          return null
        }),
        et = n('ii+P'),
        tt = n('4zmP'),
        nt = N.a.g46f363d,
        at = { viewType: 'rule_education' },
        rt = function () {
          var e = Object(et.a)(me.g),
            t = ze()(e, 2),
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
                  W.a,
                  { style: it.container },
                  w.a.createElement(tt.a, { behavioralEventContext: at, onClose: a, text: nt, withCloseButton: !0 }),
                )
              : null
          )
        },
        it = F.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space8 } }
        }),
        ot = w.a.memo(rt),
        st = n('H7Rt'),
        ct = n('m3Bd'),
        lt = n.n(ct),
        ut = n('yZqq'),
        dt = function (e, t) {
          return Object(me.A)(e, me.q)
        },
        pt = Object(M.a)()
          .propsFromState(function () {
            return { shouldShowEducation: dt }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(me.w)(me.q)
              },
            }
          }),
        mt = N.a.aa65a449,
        ht = { viewType: 'persistent_conversation_controls_education' }
      var ft = F.a.create(function (e) {
          return { container: { width: '100%', marginBottom: e.spaces.space8 } }
        }),
        vt = pt(function (e) {
          var t = e.addEducationFlag,
            n = e.buttonRef,
            a = e.shouldShowEducation,
            r = w.a.useContext(I.a).featureSwitches,
            i = w.a.useState(),
            o = ze()(i, 2),
            s = o[0],
            c = o[1],
            l = function () {
              t()
            }
          return (
            w.a.useEffect(function () {
              return l
            }, []),
            w.a.useEffect(
              function () {
                if (n) {
                  var e = n.getBoundingClientRect(),
                    t = e.left,
                    a = e.width
                  c(t + a / 2)
                }
              },
              [n],
            ),
            !0 === r.getValueWithoutScribeImpression('conversation_controls_persistence_enabled') && a
              ? w.a.createElement(
                  W.a,
                  { style: ft.container },
                  w.a.createElement(tt.a, {
                    arrowPositionStart: s,
                    behavioralEventContext: ht,
                    onClose: l,
                    text: mt,
                    withCloseButton: !0,
                  }),
                )
              : null
          )
        }),
        gt = n('FGLp'),
        yt = n('Irs7'),
        _t = n('DlMI'),
        bt = n('gBde'),
        Ct = n('gUPl'),
        wt = n('cOhU'),
        Et = ['analytics'],
        Tt = w.a.createElement(_t.a, null),
        xt = w.a.createElement(bt.a, null),
        St = w.a.createElement(Ct.a, null),
        It = w.a.createElement(wt.a, null),
        Rt = 'conversation_control',
        kt = { viewType: Rt },
        Mt = Object.freeze({
          all: { icon: Tt, label: N.a.i8ea6d4e },
          community: { icon: St, label: N.a.ec5a4a25 },
          by_invitation: { icon: xt, label: N.a.b4543009 },
          community_members: { icon: It, label: N.a.i13be5a0 },
          super_followers_exclusive: { icon: Tt, label: N.a.f8393bda },
          trusted_friends_tweet: { icon: Tt, label: N.a.c0857ccd },
        }),
        At =
          (Object.freeze(['community', 'by_invitation']),
          Object(yt.a)(function (e) {
            var t = e.analytics,
              n = lt()(e, Et),
              a = e.disabled,
              r = e.value,
              i = Mt[r],
              o = i.icon,
              s = i.label,
              c = w.a.useState(!1),
              l = ze()(c, 2),
              u = l[0],
              d = l[1],
              p = w.a.useRef(null)
            Object(gt.a)(function () {
              r !== st.a.all && r !== st.a.community_members && d(!0)
            })
            var m = w.a.useCallback(
              function (e) {
                t.scribe({ element: Rt, action: 'click' })
              },
              [t],
            )
            return w.a.createElement(
              R.a,
              { behavioralEventContext: kt },
              u ? w.a.createElement(vt, { buttonRef: p.current }) : null,
              w.a.createElement(
                W.a,
                { style: Lt.controlsContainer },
                w.a.createElement(
                  ut.a,
                  n,
                  w.a.createElement(
                    K.a,
                    { disabled: a, icon: o, onPress: m, ref: p, size: 'xSmall', style: Lt.button, type: 'brandText' },
                    s,
                  ),
                ),
              ),
            )
          })),
        Lt = F.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 },
            controlsContainer: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
          }
        }),
        Pt = n('krmn'),
        Dt = n('cIoY'),
        Ot = n('w3n3'),
        Ft = n('MLl7'),
        Bt = n('1auM'),
        Nt = n('07FG'),
        Vt = n('Q8CU'),
        jt = n('QbaN'),
        Ut = n('VPdC'),
        Ht = n('WPfJ'),
        zt = F.a.create(function (e) {
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
              zIndex: Ht.f,
            },
            textInputStyle: { paddingHorizontal: 0 },
            textInputMobileCollapsed: { maxHeight: e.fontSizes.title4, padding: 0, overflow: 'hidden' },
            tweetAttachmentArea: { zIndex: Ht.e },
            iconEmojiPicker: { zIndex: Ht.c },
            toolBar: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginHorizontal: e.spaces.space2,
              zIndex: Ht.a,
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
        Wt = N.a.bdbcdd93,
        Gt = function (e) {
          var t = e.media,
            n = e.mediaAttachDisabled,
            a = e.onFilesAdded,
            r = e.setActiveParentKey,
            i = n || t.length >= 4,
            o = t.length < 3
          return w.a.createElement(Ut.a, {
            acceptGifs: 0 === t.length,
            acceptVideo: 0 === t.length,
            accessibilityLabel: t.length > 0 ? Wt : void 0,
            disabled: i,
            multiple: o,
            onChange: a,
            onPress: r,
            style: [zt.toolBarButton, zt.firstToolBarButton],
            type: 'brandText',
          })
        },
        Kt = n('oQhu'),
        qt = n('p+r5'),
        Xt = n('GWvE'),
        Yt = (function (e) {
          v()(n, e)
          var t = y()(n)
          function n() {
            var e
            u()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(h()(e), '_setInputRef', function (t) {
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
                    W.a,
                    { style: Qt.root },
                    w.a.createElement(qt.a, {
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
                      style: Qt.formTextInput,
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
                    (this.value && !Object(Xt.a)(this.value) && this._inputRef && this._inputRef.isValidLength())
                  )
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(Yt, 'defaultProps', { autoFocus: !1, editable: !0, optional: !1 })
      var Qt = F.a.create(function (e) {
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
        Jt = Yt,
        Zt = (n('Blm6'), n('TJCb'), n('DZ+c'), n('mtvn')),
        $t = n('6XNv'),
        en = (function (e) {
          v()(n, e)
          var t = y()(n)
          function n() {
            return u()(this, n), t.apply(this, arguments)
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
                    c = !t || i === r,
                    l = e.value.toString(),
                    u = Object(Zt.a)(i, r + 1).map(function (e) {
                      return { label: ''.concat(N.a.ia24dc8c(e)), value: ''.concat(e) }
                    })
                  return w.a.createElement($t.a, {
                    disabled: c,
                    label: n,
                    onChange: o,
                    options: u,
                    style: [tn.selector, !a && tn.rightMargin],
                    testID: s,
                    value: l,
                  })
                },
              },
            ]),
            n
          )
        })(w.a.PureComponent)
      b()(en, 'defaultProps', { last: !1 })
      var tn = F.a.create(function (e) {
          return { rightMargin: { marginRight: e.spaces.space20 }, selector: { flexGrow: 1 } }
        }),
        nn = en,
        an = 'addPollChoice',
        rn = 'selectPollDays',
        on = 'selectPollHours',
        sn = 'selectPollMinutes',
        cn = 'removePollButton',
        ln = N.a.caf8edc4,
        un = N.a.g93586be,
        dn = N.a.d073b644,
        pn = N.a.a2f0728e,
        mn = (function (e) {
          v()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r
            return (
              u()(this, n),
              (r = t.call(this, e, a)),
              b()(h()(r), '_handleDaysChange', function (e) {
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
              b()(h()(r), '_handleHoursChange', function (e) {
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
              b()(h()(r), '_handleMinutesChange', function (e) {
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
                    W.a,
                    { style: n },
                    w.a.createElement(D.b, { style: hn.durationLabel }, t ? ln : ''),
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
                    W.a,
                    { style: hn.durationControls },
                    w.a.createElement(nn, {
                      editable: t && n,
                      label: un,
                      max: 7,
                      min: 0,
                      onChange: this._handleDaysChange,
                      testID: rn,
                      value: r,
                    }),
                    w.a.createElement(nn, {
                      editable: t && n,
                      label: dn,
                      max: 7 === r ? 0 : 23,
                      min: 0,
                      onChange: this._handleHoursChange,
                      testID: on,
                      value: i,
                    }),
                    w.a.createElement(nn, {
                      editable: t && n,
                      label: pn,
                      last: !0,
                      max: 7 === r ? 0 : 59,
                      min: 0 === r && 0 === i ? 5 : 0,
                      onChange: this._handleMinutesChange,
                      testID: sn,
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
      b()(mn, 'defaultProps', { editable: !0, initialDuration: { days: 1, hours: 0, minutes: 0 } })
      var hn = F.a.create(function (e) {
          return {
            durationControls: { flexDirection: 'row', justifyContent: 'space-between' },
            durationLabel: { marginBottom: e.spaces.space4 },
          }
        }),
        fn = mn,
        vn = n('iY63'),
        gn = n('jtO7'),
        yn = N.a.g589c2e1,
        _n = N.a.a1e6c3a1,
        bn = N.a.a739e006,
        Cn = N.a.d89a5b92,
        wn = N.a.c2a8118d,
        En = N.a.a8ede1de,
        Tn = N.a.af40a8ef,
        xn = (function (e) {
          v()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r
            u()(this, n),
              (r = t.call(this, e, a)),
              b()(h()(r), '_setChoice1Ref', function (e) {
                r._choice1 = e
              }),
              b()(h()(r), '_setChoice2Ref', function (e) {
                r._choice2 = e
              }),
              b()(h()(r), '_setChoice3Ref', function (e) {
                r._choice3 = e
              }),
              b()(h()(r), '_setChoice4Ref', function (e) {
                r._choice4 = e
              }),
              b()(h()(r), '_setDurationPickerRef', function (e) {
                r._durationPicker = e
              }),
              b()(h()(r), '_handleValidation', function () {
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
              b()(h()(r), '_handleAdd', function () {
                r.props.analytics.scribe({ element: 'add_poll_option', action: 'click' }),
                  r.setState(function (e) {
                    return { autoFocus: !0, choiceCount: e.choiceCount + 1 }
                  })
              }),
              b()(h()(r), '_handleDurationChange', function (e) {
                var t = r.props.onChange
                t && t({ choices: r.choices, duration: e })
              }),
              b()(h()(r), '_handleBlur', function () {
                var e = r.props.onBlur
                null == e || e()
              })
            var i = e.initialChoices,
              o = void 0 === i,
              s = (i || []).length,
              c = s > 2 ? s : 2
            return (r.state = { autoFocus: o, choiceCount: c }), r
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
                    c = w.a.createElement(
                      W.a,
                      { style: Sn.rightColumn },
                      s < 4
                        ? w.a.createElement(K.a, {
                            accessibilityLabel: En,
                            disabled: !(t && r),
                            hoverLabel: { label: Tn },
                            icon: w.a.createElement(vn.a, null),
                            onPress: this._handleAdd,
                            size: 'medium',
                            style: Sn.addButton,
                            testID: an,
                            type: 'brandText',
                          })
                        : null,
                    )
                  return w.a.createElement(
                    W.a,
                    { style: Sn.choicesAndAddButton },
                    w.a.createElement(
                      W.a,
                      { style: Sn.choices },
                      w.a.createElement(Jt, {
                        autoFocus: o,
                        defaultValue: a[0],
                        editable: t && r,
                        label: yn,
                        name: 'Choice1',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice1Ref,
                      }),
                      w.a.createElement(Jt, {
                        defaultValue: a[1],
                        editable: t && r,
                        label: _n,
                        name: 'Choice2',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice2Ref,
                      }),
                      s >= 3
                        ? w.a.createElement(Jt, {
                            autoFocus: o,
                            defaultValue: a[2],
                            editable: t && r,
                            label: bn,
                            name: 'Choice3',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice3Ref,
                          })
                        : null,
                      4 === s
                        ? w.a.createElement(Jt, {
                            autoFocus: o,
                            defaultValue: a[3],
                            editable: t && r,
                            label: Cn,
                            name: 'Choice4',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice4Ref,
                          })
                        : null,
                    ),
                    c,
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
                    W.a,
                    { style: Sn.root },
                    this._renderChoices(),
                    w.a.createElement(fn, {
                      editable: t,
                      initialDuration: n,
                      isActive: a,
                      onChange: this._handleDurationChange,
                      ref: this._setDurationPickerRef,
                      style: Sn.durationPicker,
                    }),
                    w.a.createElement(
                      W.a,
                      { style: Sn.removePollButton },
                      w.a.createElement(gn.a, { color: 'red500', label: wn, onPress: r, testID: cn }),
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
        Sn = F.a.create(function (e) {
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
        In = Object(yt.a)(xn),
        Rn = n('+d3d'),
        kn = ['onChange'],
        Mn = function (e) {
          var t = e.composerIndex,
            n = e.editable,
            a = e.initialChoices,
            i = e.initialDuration,
            o = e.isActive,
            s = e.isPollValid,
            c = e.updateComposer,
            l = Object(yt.b)(),
            u = w.a.useMemo(
              function () {
                return {
                  onChange: function (e) {
                    c({ pollChoices: null == e ? void 0 : e.choices, pollDuration: null == e ? void 0 : e.duration }, t)
                  },
                  onValid: function () {
                    !s && c({ pollValid: !0 }, t)
                  },
                  onInvalid: function () {
                    s && c({ pollValid: !1 }, t)
                  },
                  onRemove: function () {
                    l.scribe({ element: 'remove_poll', action: 'click' }), c({ pollActive: !1 }, t)
                  },
                }
              },
              [l, s, c, t],
            ),
            d = u.onChange,
            p = lt()(u, kn),
            m = w.a.useMemo(
              function () {
                return Object(Rn.a)(
                  function (e) {
                    var t = e.choices,
                      n = e.duration
                    d({ choices: t, duration: n })
                  },
                  200,
                  { leading: !0, trailing: !0 },
                )
              },
              [d],
            ),
            h = w.a.useCallback(
              function () {
                m.flush()
              },
              [m],
            )
          return w.a.createElement(
            In,
            r()({ editable: n, initialChoices: a, initialDuration: i, isActive: o, onBlur: h, onChange: m }, p),
          )
        },
        An = F.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 }, link: { color: 'black' } }
        }),
        Ln = N.a.i859676b,
        Pn = w.a.createElement(
          N.a.I18NFormatMessage,
          { $i18n: 'a02c8d74' },
          w.a.createElement(
            D.b,
            { link: '/settings/audience_and_tagging', style: An.link, withInteractiveStyling: !0, withUnderline: !0 },
            N.a.c9a48d3f,
          ),
        )
      function Dn() {
        return w.a.createElement(W.a, { style: An.container }, w.a.createElement(tt.a, { headline: Ln, text: Pn }))
      }
      var On = n('b5s6'),
        Fn = n('rcen'),
        Bn = n('zmS9'),
        Nn = 'addButton',
        Vn = 'addSubtitlesLabel',
        jn = 'altTextLabel',
        Un = 'tagPeopleLabel',
        Hn = 'attachments',
        zn = 'createPollButton',
        Wn = 'geoButton',
        Gn = 'gifSearchButton',
        Kn = 'scheduleOption',
        qn = 'taggedUsersLabel',
        Xn = 'tweetTextarea_',
        Yn = 'toolBar',
        Qn = 'scheduledTweetIndicator',
        Jn = n('xM7j'),
        Zn = n('6OUF'),
        $n = n('tZIO'),
        ea = n('5mJL'),
        ta = n('DNho'),
        na = n('jhWN'),
        aa = n('rFBM'),
        ra = n('zfvc'),
        ia = n('Ujvi'),
        oa = n('yTN1'),
        sa = n('gpVt'),
        ca = n('hOZg'),
        la = n('ll3R'),
        ua = n('J0mu'),
        da = n('EfHu'),
        pa = n('KrGU'),
        ma = n('boUI'),
        ha = n('6ZHn'),
        fa = n('/WPq'),
        va = n('wpLu'),
        ga = n('pHub'),
        ya = n('8A5z'),
        _a = n('pKoL'),
        ba = n('ZvMt'),
        Ca = n('9Xij'),
        wa = (function (e) {
          v()(n, e)
          var t = y()(n)
          function n() {
            return u()(this, n), t.apply(this, arguments)
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.media,
                    n = e.style
                  return w.a.createElement(W.a, { style: n }, this._renderImageGroup(t.length))
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
                    i = F.a.theme.aspectRatios.landscape
                  if (t) {
                    var o,
                      s,
                      c = F.a.theme.aspectRatios.minTimelineImage,
                      l = F.a.theme.aspectRatios.maxTimelineImage
                    i = ba.a.getImageAspectRatio(c, l, {
                      width: null === (o = e[0].mediaFile) || void 0 === o ? void 0 : o.width,
                      height: null === (s = e[0].mediaFile) || void 0 === s ? void 0 : s.height,
                    })
                  }
                  return w.a.createElement(
                    Ca.a,
                    { ratio: t ? i : r / a },
                    w.a.createElement(W.a, { style: Ea.mediaPreviewWrapper }, this._renderMediaAtIndex(0)),
                  )
                },
              },
              {
                key: '_renderGroupOf2',
                value: function () {
                  return w.a.createElement(
                    Ca.a,
                    { ratio: F.a.theme.aspectRatios.landscape },
                    w.a.createElement(
                      W.a,
                      { style: Ea.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, Ea.gutterRight),
                      this._renderMediaAtIndex(1),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf3',
                value: function () {
                  return w.a.createElement(
                    Ca.a,
                    { ratio: F.a.theme.aspectRatios.landscape },
                    w.a.createElement(
                      W.a,
                      { style: Ea.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, Ea.gutterRight),
                      this._renderColumnWithIndices([1, 2]),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf4',
                value: function () {
                  return w.a.createElement(
                    Ca.a,
                    { ratio: F.a.theme.aspectRatios.landscape },
                    w.a.createElement(
                      W.a,
                      { style: Ea.mediaPreviewWrapper },
                      this._renderColumnWithIndices([0, 2], Ea.gutterRight),
                      this._renderColumnWithIndices([1, 3]),
                    ),
                  )
                },
              },
              {
                key: '_renderColumnWithIndices',
                value: function (e, t) {
                  return w.a.createElement(
                    W.a,
                    { style: [Ea.column, t] },
                    this._renderMediaAtIndex(e[0], Ea.gutterBottom),
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
                    c = o.isActive,
                    l = o.media,
                    u = o.onClickMedia,
                    d = o.onEditMedia,
                    p = o.onEditSensitiveWarning,
                    m = o.onRemoveMedia,
                    h = o.onSetMediaPreviewRef,
                    f = l[e],
                    v = null === (n = f.mediaMetadata) || void 0 === n ? void 0 : n.altText,
                    g = null === (a = f.mediaMetadata) || void 0 === a ? void 0 : a.defaultAltText,
                    y = !(
                      null === (r = f.mediaMetadata) ||
                      void 0 === r ||
                      null === (i = r.sensitiveMediaWarning) ||
                      void 0 === i ||
                      !i.size
                    ),
                    _ = d && s && c,
                    b = _ && y && !!p
                  return w.a.createElement(_a.a, {
                    accessibilityLabel: v || g,
                    accessibilityRole: 'group',
                    enableGif: c,
                    key: f.id,
                    mediaItem: f,
                    onClick: u ? u(f.id) : void 0,
                    onEdit: d ? d(f.id) : void 0,
                    onEditSensitiveWarning: p && b ? p(f.id) : void 0,
                    onRemove: m(f.id),
                    ref: h,
                    style: [Ea.mediaContainer, t],
                    withAltTextLabel: !!v,
                    withCloseButton: s && c,
                    withEditButton: _,
                    withEditSensitiveWarningButton: b,
                  })
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(wa, 'contextType', I.a)
      var Ea = F.a.create(function (e) {
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
        Ta = n('S1qy'),
        xa = n.n(Ta),
        Sa = n('cjAp'),
        Ia = n.n(Sa),
        Ra = N.a.f0afcc0e,
        ka = N.a.ha5e2e79,
        Ma = N.a.a3de3b68,
        Aa = N.a.cc2b28fc,
        La = N.a.g45af04e,
        Pa = N.a.j1d5791c,
        Da = N.a.ee9c4013,
        Oa = N.a.af40a8ef,
        Fa = N.a.e68b09b4,
        Ba = N.a.ec10ee02,
        Na = N.a.h735a98d,
        Va = N.a.c4ccfbe2,
        ja = N.a.j499fbcb,
        Ua = N.a.b7d8e3f0,
        Ha = N.a.d1175c78,
        za = N.a.bf4e9d79,
        Wa = N.a.e0342f98,
        Ga = N.a.e349147b,
        Ka = N.a.e3a24e4b,
        qa = N.a.fbd24526,
        Xa = N.a.de4669e2,
        Ya = N.a.d2c7a41c,
        Qa = N.a.f7364fa1,
        Ja = ['ja', 'zh-cn', 'zh-tw', 'ko'],
        Za = N.a.ia24dc8c,
        $a = w.a.createElement(ca.a, null),
        er = w.a.createElement(vn.a, null),
        tr = w.a.createElement(la.a, null),
        nr = w.a.createElement(ua.a, null),
        ar = { viewType: 'schedule_tweet' },
        rr = { viewType: 'add_poll' },
        ir = { viewType: 'add_composer' },
        or = { viewType: 'tag_location' },
        sr = (function (e) {
          v()(n, e)
          var t = y()(n)
          function n(e, a) {
            var i
            u()(this, n),
              (i = t.call(this, e, a)),
              b()(h()(i), '_handleConversationControlsValueChange', function (e) {
                i._handleAudienceControlsValueChange({ _type: 'conversation_controls', conversationControlsValue: e })
              }),
              b()(h()(i), '_handleAudienceControlsValueChange', function (e) {
                i.props.updateAudienceControlsValue(e)
              }),
              b()(
                h()(i),
                '_triggerConversationControlsImpression',
                Object(Kt.a)(function () {
                  return i.context.featureSwitches.isTrue('conversation_controls_limited_replies_creation_enabled')
                }),
              ),
              b()(h()(i), '_shouldRenderControls', function (e, t) {
                var n = i.state.isFocused,
                  a = i.props,
                  r = a.audienceControlsValue,
                  o = a.isActive,
                  s = a.isInline,
                  c = a.isReply
                return (
                  !(
                    'conversation' !== t ||
                    (r.conversationControlsValue !== st.a.community_members &&
                      r.conversationControlsValue !== st.a.super_followers_exclusive &&
                      r.conversationControlsValue !== st.a.trusted_friends_tweet) ||
                    !c
                  ) ||
                  (o && !c && (!s || n || e))
                )
              }),
              b()(h()(i), '_renderConversationControls', function (e) {
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
                  c =
                    o === st.a.community_members ||
                    o === st.a.super_followers_exclusive ||
                    o === st.a.trusted_friends_tweet ||
                    i._isScheduled()
                return s
                  ? w.a.createElement(At, { disabled: c, onChange: i._handleConversationControlsValueChange, value: o })
                  : null
              }),
              b()(h()(i), '_renderTaggedLocation', function (e) {
                return w.a.createElement(
                  W.a,
                  { style: zt.taggedLocationContainer },
                  w.a.createElement(
                    K.a,
                    {
                      icon: w.a.createElement(da.a, null),
                      onPress: i._handleGeoButtonClick,
                      size: 'xSmall',
                      style: zt.taggedLocationButton,
                      type: 'brandText',
                    },
                    e.place.full_name,
                  ),
                )
              }),
              b()(h()(i), '_renderMainContent', function () {
                var e = i.props,
                  t = e.additionalToolbarContent,
                  n = e.data,
                  a = e.index,
                  r = e.isExpanded,
                  o = e.isInline,
                  s = e.isInlineReply,
                  c = e.onTypeaheadStateChange,
                  l = e.richTextInputContext,
                  u = n.cardUrl,
                  d = n.media,
                  p = n.pollActive,
                  m = n.quotedStatus,
                  h = n.text,
                  f = Object(sa.b)(h) || (u && !Object(Nt.a)(u) && [u]),
                  v = !!d.length || p || !!m,
                  g = i.props.typeaheadWrapper,
                  y = !i._isEmpty()
                return w.a.createElement(
                  W.a,
                  { style: zt.textInputArea },
                  w.a.createElement(
                    W.a,
                    { style: r ? zt.inputStyle : zt.collapsedInputStyle },
                    i._renderAudienceControls(y),
                    w.a.createElement(
                      g,
                      {
                        contextText: h,
                        isInline: o,
                        isInlineReply: s,
                        onTextUpdated: l ? i._handleRichTextChange : i._handlePlainTextChange,
                        onTypeaheadStateChange: c,
                      },
                      i._renderFieldTextInput,
                    ),
                    f && !v
                      ? w.a.createElement(sa.a, { index: a, isCardPreviewTombstoned: Object(Nt.a)(u), urls: f })
                      : null,
                  ),
                  r ? null : t,
                )
              }),
              b()(h()(i), '_renderFieldTextInput', function (e) {
                var t = i.props,
                  n = t.autoFocus,
                  a = t.data,
                  o = t.editable,
                  s = t.index,
                  c = t.isActive,
                  l = t.isExpanded,
                  u = t.isInline,
                  d = t.isInlineReply,
                  p = t.isLast,
                  m = t.keyCommandHandlers,
                  h = t.onTextInputBlur,
                  f = t.positionCursorAtBeginning,
                  v = t.richTextInputContext,
                  g = i.state.isFocused,
                  y = a.text,
                  _ = 0 === s && p,
                  b = !!v,
                  C = v || {},
                  E = C.dismissComposerCommandName,
                  T = C.element,
                  x = C.sendTweetCommandName,
                  S = d && !v && !l,
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
                return w.a.createElement(
                  Zn.a,
                  r()(
                    {
                      appTextSize: 'headline1',
                      ariaLabel: Ma,
                      autoFocus: n || (c && !u),
                      closeButton:
                        c && (i._deleteNonemptyTweetstormComposerEnabled || i._isEmpty()) && !_
                          ? i._renderCloseButton()
                          : void 0,
                      contentBelow: i._renderTweetAttachment(),
                      editable: o,
                      inputStyle: [zt.textInputStyle, S && zt.textInputMobileCollapsed],
                      keyCommandHandlers: m,
                      maxNumberOfLines: b ? 30 : 10,
                      multiline: !0,
                      numberOfLines: i._calcNumberOfLines(),
                      onBlur: h,
                      onFilesAdded: i._handleFilesAdded,
                      placeholder: i._getPlaceHolderText(),
                      positionCursorAtBeginning: f,
                      positionCursorAtEnd: !f,
                      ref: i._setTextInputRef,
                      styleType: 'selection',
                      testID: ''.concat(Xn).concat(s),
                      useCacheForDOMMeasurements: g,
                      value: y,
                    },
                    I,
                  ),
                )
              }),
              b()(
                h()(i),
                '_getHandleRichTextChange',
                Object(Kt.a)(function (e) {
                  return function (t) {
                    e(t), i._handleRichTextChange(t)
                  }
                }),
              ),
              b()(
                h()(i),
                '_getHandlePlainTextChange',
                Object(Kt.a)(function (e) {
                  return function (t) {
                    e(t), i._handlePlainTextChange(t)
                  }
                }),
              ),
              b()(h()(i), '_renderCommunityTweetFromProtectedUserCallout', function () {
                var e = i.props,
                  t = e.index,
                  n = e.isCommunityTweetFromProtectedUser
                return 0 === t && n ? w.a.createElement(Dn, null) : null
              }),
              b()(h()(i), '_renderAudienceControls', function (e) {
                var t = i.props,
                  n = t.audienceControlsValue,
                  a = t.index,
                  r = t.isSuperFollowsCreator,
                  o = i.context.featureSwitches.isTrue('c9s_participation_enabled'),
                  s = i.context.featureSwitches.isTrue('super_follow_exclusive_tweet_creation_api_enabled'),
                  c = i.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled')
                return i._shouldRenderControls(e, 'audience') && 0 === a && (o || s || c)
                  ? w.a.createElement(Ue, {
                      audienceControlsValue: n,
                      isC9sParticipationEnabled: o,
                      isSuperFollowsCreator: r && s,
                      onAudienceControlsValueChange: i._handleAudienceControlsValueChange,
                    })
                  : null
              }),
              b()(h()(i), '_renderCommunitiesRulesEducation', function () {
                return i.shouldRenderCommunitiesRules ? w.a.createElement(ot, null) : null
              }),
              b()(h()(i), '_renderCommunitiesRules', function (e) {
                var t = i.props.audienceControlsValue.communityIdValue || void 0
                return i.shouldRenderCommunitiesRules && t
                  ? w.a.createElement($e, { selectedCommunityId: t, showMiddot: !e })
                  : null
              }),
              b()(h()(i), '_calcNumberOfLines', function () {
                var e = i.props,
                  t = e.data,
                  n = e.isActive,
                  a = e.isInline,
                  r = !!e.richTextInputContext,
                  o = t.media,
                  s = t.pollActive,
                  c = t.quotedStatus,
                  l = !!o.length || !!s || !!c
                return (r && (a || l)) || !n ? 1 : 4
              }),
              b()(h()(i), '_renderScheduledTweetLegend', function () {
                var e = i.props.scheduledFor
                return w.a.createElement(Bn.a, {
                  onPress: i._handlePressScheduledTweetLegend,
                  scheduledFor: e,
                  testID: Qn,
                })
              }),
              b()(h()(i), '_handlePressScheduledTweetLegend', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/schedule'), t.scribe({ element: 'tweet_legend', action: 'click' }), a()
              }),
              b()(h()(i), '_renderEmojiPicker', function () {
                return w.a.createElement(Pt.a, {
                  onEmojiSelect: i._handleInsertEmoji,
                  size: 'medium',
                  style: i._getEmojiPickerButtonStyles(),
                  textInputRef: i._textInputRef || void 0,
                })
              }),
              b()(
                h()(i),
                '_getEmojiPickerButtonStyles',
                Object(Kt.a)(function () {
                  return [zt.iconEmojiPicker, zt.toolBarButton]
                }),
              ),
              b()(h()(i), '_isSchedulingDisabled', function () {
                var e = i.props,
                  t = e.audienceControlsValue,
                  n = e.data,
                  a = n.media,
                  r = n.mediaTags,
                  o = n.pollActive,
                  s = n.quotedStatus,
                  c = n.text,
                  l = e.index,
                  u = e.isLast,
                  d = 0 === l && u,
                  p = t.conversationControlsValue !== st.a.all
                return Boolean(o || !d || (s && '' === c && !a.length) || p || r.length > 0)
              }),
              b()(h()(i), '_renderSchedulingButton', function () {
                return w.a.createElement(K.a, {
                  accessibilityLabel: ka,
                  behavioralEventContext: ar,
                  disabled: i._isSchedulingDisabled(),
                  hoverLabel: { label: Na },
                  icon: nr,
                  onClick: i._handleClickScheduler,
                  size: 'medium',
                  style: zt.toolBarButton,
                  testID: Kn,
                  type: 'brandText',
                })
              }),
              b()(h()(i), '_handleClickScheduler', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/schedule'), t.scribe({ element: 'schedule_tweet', action: 'click' }), a()
              }),
              b()(h()(i), '_renderCloseButton', function () {
                var e = i.props.onRemoveComposer
                return w.a.createElement(K.a, {
                  accessibilityLabel: Da,
                  hoverLabel: { label: Fa },
                  icon: $a,
                  onPress: e,
                  size: 'xSmall',
                  type: 'brandText',
                })
              }),
              b()(h()(i), '_renderTweetAttachment', function () {
                var e = i.props,
                  t = e.data,
                  n = e.editable,
                  a = e.index,
                  r = e.isActive,
                  o = e.updateSingleComposer,
                  s = t.media,
                  c = t.pollActive,
                  l = t.pollChoices,
                  u = t.pollDuration,
                  d = t.quotedStatus
                if (0 === s.length && !c && !d) return null
                var p = i.hasAttachedVideo && (i._videoTrimmerEnabled ? 'trimmer' : 'subtitles')
                return w.a.createElement(
                  W.a,
                  { onClick: i._handleFocus, style: [zt.attachmentContainer, zt.tweetAttachmentArea], testID: Hn },
                  s.length > 0
                    ? w.a.createElement(wa, {
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
                        style: zt.mediaPreview,
                      })
                    : null,
                  r ? i._renderMediaActions() : null,
                  c
                    ? w.a.createElement(Mn, {
                        composerIndex: a,
                        editable: n,
                        initialChoices: l,
                        initialDuration: u,
                        isActive: r,
                        isPollValid: t.pollValid,
                        updateComposer: o,
                      })
                    : null,
                  d ? i._renderQuoteTweet(d) : null,
                )
              }),
              b()(h()(i), '_renderQuoteTweet', function (e) {
                var t = i.props.data.media,
                  n = e.tombstoneInfo
                return n && n.richText
                  ? w.a.createElement(
                      Jn.a,
                      null,
                      w.a.createElement(Fn.a, {
                        entities: n.richText.entities,
                        rtl: n.richText.rtl,
                        text: n.richText.text,
                      }),
                    )
                  : w.a.createElement(On.a, {
                      isCondensed: t.length > 0,
                      style: zt.quoteTweet,
                      tweetId: e.id_str,
                      withLink: !1,
                      withUserHoverCard: !1,
                    })
              }),
              b()(h()(i), '_renderToolbar', function (e) {
                var t = i.props,
                  n = t.additionalToolbarContent,
                  a = t.data.media,
                  r = t.hidePoll,
                  o = t.hideScheduling,
                  s = t.isInlineReply,
                  c = t.isReply,
                  l = t.isSelfThreadReply,
                  u = t.richTextInputContext,
                  d = t.setActiveParentKey,
                  p = !!u,
                  m = !s && !r,
                  h = !s && !o,
                  f = i.context.featureSwitches.isTrue('responsive_web_reply_storm_enabled'),
                  v = e && (!c || l || f)
                return w.a.createElement(
                  W.a,
                  { style: zt.toolBar, testID: Yn },
                  w.a.createElement(
                    W.a,
                    { style: zt.toolBarIconsContainer },
                    w.a.createElement(Gt, {
                      media: a,
                      mediaAttachDisabled: i.mediaAttachDisabled,
                      onFilesAdded: i._handleFilesAdded,
                      setActiveParentKey: d,
                    }),
                    i._renderGifButton(),
                    m ? i._renderPollButton() : null,
                    p ? i._renderEmojiPicker() : null,
                    h ? i._renderSchedulingButton() : null,
                    i._renderGeoButton(),
                  ),
                  w.a.createElement(
                    W.a,
                    { style: zt.toolBarIconsContainer },
                    e ? i._renderCountdownCircle() : null,
                    v &&
                      w.a.createElement(
                        w.a.Fragment,
                        null,
                        w.a.createElement(W.a, { style: zt.separator }),
                        i._renderAddComposerButton(),
                      ),
                    n,
                  ),
                )
              }),
              b()(h()(i), '_addOverflowStyle', function (e) {
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
              b()(h()(i), '_handleRichTextChange', function (e) {
                var t = i.props.richTextInputContext,
                  n = e.getCurrentContent().getPlainText()
                if (t) {
                  var a = t.convertEmojiToEntities(e)
                  i.setState(i._addOverflowStyle(a))
                }
                i._handleTextValueChange(n)
              }),
              b()(h()(i), '_handlePlainTextChange', function (e) {
                var t = $n.a.replaceCarriageReturns(e.target.value)
                i._handleTextValueChange(t)
              }),
              b()(h()(i), '_handleTextValueChange', function (e) {
                var t = i.props,
                  n = t.data,
                  a = n.key,
                  r = n.text,
                  o = t.onTextChange
                r !== e && o(e, a)
              }),
              b()(h()(i), '_handleClickAltTextShortcut', function () {
                i.props.analytics.scribe({ element: 'alt_text_button', action: 'click' })
              }),
              b()(h()(i), '_handleClickSubtitlesShortcut', function () {
                i.props.analytics.scribe({ element: 'subtitles_button', action: 'click' })
              }),
              b()(h()(i), '_handleClickMediaDetail', function (e) {
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
              b()(h()(i), '_handleFilesAdded', function (e) {
                var t = i.props,
                  n = t.addToast,
                  a = t.data.pollActive,
                  r = t.onFilesAdded
                a ? n({ text: Aa }) : r(e)
              }),
              b()(h()(i), '_handleMediaRemoveFactory', function (e) {
                return function () {
                  i.props.onRemoveMedia(i.props.index, e)
                }
              }),
              b()(h()(i), '_handleInsertEmoji', function (e) {
                var t = i.state.editorState,
                  n = i.props.richTextInputContext
                if (n && t) {
                  var a = n.insertTextAtCursor(t, e.text)
                  i._handleRichTextChange(a)
                }
              }),
              b()(h()(i), '_validateMedia', function (e) {
                var t = i.props.data.media
                return S.c(t.concat(e))
              }),
              b()(h()(i), '_handlePollAdd', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.index,
                  a = e.updateSingleComposer
                t.scribe({ element: 'add_poll', action: 'click' }), a({ pollActive: !0 }, n)
              }),
              b()(h()(i), '_handleGeoButtonClick', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/place_picker'), t.scribe({ element: 'tag_location', action: 'click' }), a()
              }),
              b()(h()(i), '_handleWrapperClick', function (e) {
                ;(e.target instanceof Element && e.target.closest('[role="button"],a,input,textarea,select')) ||
                  i.focus()
              }),
              b()(h()(i), '_handleFocus', function () {
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
              b()(h()(i), '_handleEditorFocus', function () {
                return i.setState({ isFocused: !0 })
              }),
              b()(h()(i), '_formatCountdownNumber', function (e) {
                return Za(Math.ceil(e / i._userLanguageWeight))
              }),
              b()(h()(i), '_getPlaceHolderText', function () {
                var e = i.props,
                  t = e.data,
                  n = t.pollActive,
                  a = t.quotedStatus,
                  r = e.index,
                  o = e.isReply,
                  s = e.isSelfThreadReply
                return a
                  ? Xa
                  : n
                  ? Qa
                  : i.isReplyOrReplyThread && 0 === r
                  ? Ya
                  : o && !s && r > 0
                  ? qa
                  : s || r > 0
                  ? Ka
                  : Ga
              }),
              b()(h()(i), '_getNumberOfAltTextEntries', function () {
                return i.props.data.media.reduce(function (e, t) {
                  var n
                  return null !== (n = t.mediaMetadata) && void 0 !== n && n.altText ? e + 1 : e
                }, 0)
              }),
              b()(
                h()(i),
                '_getParsedTweet',
                Object(Kt.a)(function (e) {
                  var t = Ia.a[i.props.twitterTextConfigurationVersion]
                  return xa()(e, t)
                }),
              ),
              b()(h()(i), '_isEmpty', function () {
                var e = i.props.data
                return Object(Vt.c)(e)
              }),
              b()(h()(i), '_isScheduled', function () {
                var e = i.props.data.scheduledFor
                return Object(jt.h)(e)
              }),
              b()(h()(i), '_autotagLocationIfNeeded', function () {
                var e = i.props,
                  t = e.data.taggedLocation,
                  n = e.fetchAutotaggedLocationIfNeeded,
                  a = e.index,
                  r = e.updateSingleComposer
                n().then(function (e) {
                  void 0 === t && r({ taggedLocation: null != e ? e : null }, a)
                })
              }),
              b()(h()(i), '_handleSetMediaPreviewRef', function (e) {
                i._mediaPreviewRef = e
              }),
              b()(h()(i), '_setTextInputRef', function (e) {
                i._textInputRef = e
              })
            var o = e.data.text,
              s = e.richTextInputContext,
              c = e.userLanguage,
              l = (s || {}).initEditorState
            return (
              (i._conversationControlsCreationEnabled =
                !0 ===
                i.context.featureSwitches.getValueWithoutScribeImpression(
                  'conversation_controls_limited_replies_creation_enabled',
                )),
              (i._deleteNonemptyTweetstormComposerEnabled = i.context.featureSwitches.isTrue(
                'responsive_web_delete_nonempty_tweetstorm_composer_enabled',
              )),
              (i._userLanguageWeight = c && Ja.indexOf(c) > -1 ? 2 : 1),
              i._autotagLocationIfNeeded(),
              (i.state = { editorState: l ? l(o) : null, hasOverflowStyle: !1, isFocused: !1 }),
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
                      return e.mediaFile && !(e.mediaFile instanceof Bt.a) && e.mediaFile.isVideo
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
                    c = t.windowWidth,
                    l = t.withAvatar,
                    u = !this._isEmpty(),
                    d = this._shouldRenderControls(u),
                    p = c < F.a.theme.breakpoints.small
                  return w.a.createElement(
                    W.a,
                    {
                      onClick: this._handleWrapperClick,
                      onFocus: this._handleFocus,
                      style: [zt.root, !a && zt.blurStyle],
                    },
                    this._renderCommunityTweetFromProtectedUserCallout(),
                    w.a.createElement(
                      ea.a,
                      {
                        avatarCell: w.a.createElement(
                          w.a.Fragment,
                          null,
                          l
                            ? w.a.createElement(ta.a.Consumer, null, function (e) {
                                var t = e.avatarSize
                                return w.a.createElement(na.a, {
                                  accessibilityLabel: s ? s.name : void 0,
                                  screenName: s ? s.screen_name : void 0,
                                  size: t,
                                  style: zt.avatar,
                                  uri: s ? s.profile_image_url_https : void 0,
                                  withLink: i,
                                })
                              })
                            : null,
                          o
                            ? null
                            : w.a.createElement(W.a, {
                                style: [zt.conversationLine, !l && zt.conversationLineWithOverflow],
                              }),
                        ),
                        avatarCellStyle: r ? zt.avatarContainerExpanded : zt.avatarContainer,
                        cellStyle: zt.rightColumn,
                      },
                      this._renderScheduledTweetLegend(),
                      w.a.createElement(
                        W.a,
                        { onFocus: this._handleEditorFocus, style: zt.inputArea },
                        w.a.createElement(
                          aa.a,
                          {
                            allowDragDrop: !this.mediaAttachDisabled,
                            onDragEnter: this._handleFocus,
                            onFilesAdded: this._handleFilesAdded,
                            style: zt.dragDrop,
                          },
                          function (t) {
                            return w.a.createElement(
                              w.a.Fragment,
                              null,
                              w.a.createElement(W.a, { style: zt.composeBoxContainer }, e._renderMainContent()),
                            )
                          },
                        ),
                      ),
                      this._renderCommunitiesRulesEducation(),
                      w.a.createElement(
                        W.a,
                        { style: [(d || n) && zt.controlsContainer, p ? zt.mobileControlsLayout : zt.controlsLayout] },
                        this._renderConversationControls(u),
                        this._renderCommunitiesRules(p),
                        n ? this._renderTaggedLocation(n) : null,
                      ),
                      w.a.createElement(ra.b, { show: a && r }, this._renderToolbar(u)),
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
                  return w.a.createElement(Ot.a, {
                    enabled: !s,
                    gifSearchKeySource: Ft.a.Composition,
                    history: r,
                    onPress: o,
                    testID: Gn,
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
                  return w.a.createElement(K.a, {
                    accessibilityLabel: Ra,
                    behavioralEventContext: rr,
                    disabled: s,
                    hoverLabel: { label: Ba },
                    icon: tr,
                    onPress: this._handlePollAdd,
                    size: 'medium',
                    style: zt.toolBarButton,
                    testID: zn,
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
                    i = t ? w.a.createElement(da.a, null) : w.a.createElement(pa.a, null)
                  return w.a.createElement(K.a, {
                    accessibilityLabel: Va,
                    behavioralEventContext: or,
                    disabled: r,
                    hoverLabel: { label: Va },
                    icon: i,
                    onPress: this._handleGeoButtonClick,
                    size: 'medium',
                    style: zt.toolBarButton,
                    testID: Wn,
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
                    W.a,
                    { style: zt.imageActions },
                    t && t.url && t.provider
                      ? w.a.createElement(
                          W.a,
                          { style: zt.addImageTextPadding },
                          w.a.createElement(Dt.a, { gifUrl: t.url, provider: t.provider }),
                        )
                      : null,
                    (!this.hasAttachedImage && !i) || this._isScheduled()
                      ? null
                      : w.a.createElement(
                          D.b,
                          {
                            accessibilityLabel: Ha,
                            color: 'gray700',
                            link: '/compose/tweet/tags',
                            style: [zt.addImageTextContainer, zt.addImageTextPadding],
                          },
                          a ? this._renderTaggedUsers() : this._renderTagPeopleLabel(),
                        ),
                    this.hasAttachedImage || r
                      ? w.a.createElement(
                          D.b,
                          {
                            accessibilityLabel: ja({ numberOfImages: n.length }),
                            color: 'gray700',
                            link: { pathname: '/compose/tweet/media', state: { mediaId: n[0].id, tab: 'alt_text' } },
                            onPress: this._handleClickAltTextShortcut,
                            style: zt.addImageTextContainer,
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
                    D.b,
                    { color: 'gray700', size: 'subtext2', testID: Un },
                    w.a.createElement(ma.a, { style: zt.addImageActionIcon }),
                    Ha,
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
                    D.b,
                    { color: 'gray700', size: 'subtext2', testID: qn },
                    w.a.createElement(ha.a, { style: zt.addImageActionIcon }),
                    w.a.createElement(ia.a, { loggedInUserId: null == n ? void 0 : n.id_str, users: a }),
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
                          D.b,
                          { color: 'gray700', size: 'subtext2', testID: jn },
                          w.a.createElement(va.a, { style: zt.addImageActionIcon }),
                          Ua({ numberOfAltTextEntries: this._getNumberOfAltTextEntries() }),
                        )
                      : w.a.createElement(
                          D.b,
                          { color: 'gray700', numberOfLines: 1, size: 'subtext2', testID: jn },
                          w.a.createElement(va.a, { style: zt.addImageActionIcon }),
                          null == t ? void 0 : t.altText,
                        )
                    : w.a.createElement(
                        D.b,
                        { color: 'gray700', size: 'subtext2', testID: jn },
                        w.a.createElement(fa.a, { style: zt.addImageActionIcon }),
                        ja({ numberOfImages: e.length }),
                      )
                },
              },
              {
                key: '_renderSubtitlesLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = this.attachedSubtitles ? ga.a : ya.a
                  return w.a.createElement(
                    D.b,
                    {
                      accessibilityRole: 'button',
                      color: 'gray700',
                      link: { pathname: '/compose/tweet/media', state: { mediaId: e[0].id, tab: 'subtitles' } },
                      onPress: this._handleClickSubtitlesShortcut,
                      size: 'subtext2',
                      style: zt.addImageTextContainer,
                      testID: Vn,
                    },
                    w.a.createElement(t, {
                      accessibilityLabel: this.attachedSubtitles ? Wa : void 0,
                      style: zt.addImageActionIcon,
                    }),
                    this.attachedSubtitles ? this.attachedSubtitles.displayName : za,
                  )
                },
              },
              {
                key: '_renderCountdownCircle',
                value: function () {
                  var e = this.props,
                    t = e.data.text,
                    n = e.twitterTextConfigurationVersion,
                    a = Ia.a[n],
                    r = this._getParsedTweet(t).weightedLength
                  return w.a.createElement(oa.a, {
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
                    c = n || o || s || !r || a
                  return w.a.createElement(K.a, {
                    accessibilityLabel: this.isReplyOrReplyThread ? Pa : La,
                    behavioralEventContext: ir,
                    disabled: c,
                    hoverLabel: { label: Oa },
                    icon: er,
                    link: c ? void 0 : t,
                    onPress: i,
                    size: 'xSmall',
                    testID: Nn,
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
                      return e.mediaFile && !(e.mediaFile instanceof Bt.a) && e.mediaFile.isVideo
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
                      return e.mediaFile && !(e.mediaFile instanceof Bt.a) && e.mediaFile.isVideo
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
      b()(sr, 'contextType', I.a),
        b()(sr, 'defaultProps', { twitterTextConfigurationVersion: 'defaults', withAvatar: !0 })
      var cr = Object(yt.a)(sr),
        lr = w.a.createElement(D.b, { weight: 'bold' }),
        ur = w.a.createElement(D.b, { color: 'link' }),
        dr = function (e) {
          return '@'.concat(e)
        },
        pr = n('SrIh'),
        mr = function (e) {
          return (null == e ? void 0 : e.screen_name) || ''
        },
        hr = function (e) {
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
                  w.a.cloneElement(ur, null, N.a.b50e199a({ userName: dr(t) })),
                )
              },
              replyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'bfd9c99a' },
                  w.a.cloneElement(ur, null, N.a.f2e4dd37({ replyUserName: dr(t), otherUserName: dr(n) })),
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
                    ur,
                    null,
                    N.a.eccfddc3({ userOneName: dr(t), userTwoName: dr(a), userThreeName: dr(n) }),
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
                  w.a.cloneElement(ur, null, N.a.h758cd22({ userOneName: dr(n), userTwoName: dr(a), othersCount: t })),
                )
              },
              communityReplyToOne: function (e) {
                var t = e.communityName,
                  n = e.userName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'j935bcde', communityName: t },
                  w.a.cloneElement(ur, null, N.a.e9f8a0eb({ userName: dr(n) })),
                )
              },
              communityReplyToTwo: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'i7bd9c8e', communityName: t },
                  w.a.cloneElement(ur, null, N.a.df7e9fbc({ replyUserName: dr(n), otherUserName: dr(a) })),
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
                    ur,
                    null,
                    N.a.b45fa505({ userOneName: dr(n), userTwoName: dr(r), userThreeName: dr(a) }),
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
                  w.a.cloneElement(ur, null, N.a.a4383815({ userOneName: dr(a), userTwoName: dr(r), othersCount: n })),
                )
              },
              exclusiveReplyToOne: function (e) {
                var t = e.userName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'a4e11010' },
                  w.a.cloneElement(ur, null, N.a.ff792e35({ userName: dr(t) })),
                  w.a.cloneElement(lr, null, N.a.a18d8f1c),
                )
              },
              exclusiveReplyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'cf1b3321' },
                  w.a.cloneElement(ur, null, N.a.g7d5e985({ replyUserName: dr(t), otherUserName: dr(n) })),
                  w.a.cloneElement(lr, null, N.a.af82725c),
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
                    ur,
                    null,
                    N.a.fe5a61e9({ userOneName: dr(t), userTwoName: dr(a), userThreeName: dr(n) }),
                  ),
                  w.a.cloneElement(lr, null, N.a.f7126257),
                )
              },
              exclusiveReplyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'fec57cab' },
                  w.a.cloneElement(ur, null, N.a.bc9dd514({ userOneName: dr(n), userTwoName: dr(a), othersCount: t })),
                  w.a.cloneElement(lr, null, N.a.de5071ba),
                )
              },
            },
            o = S.a({ inReplyToStatus: a, loggedInUserId: r }).filter(function (e) {
              var t = e.id_str
              return n.indexOf(t) < 0
            }),
            s = a.retweeted_status || a,
            c = s.exclusivity_info,
            l = s.user,
            u = o.filter(function (e) {
              return e.id_str !== l.id_str
            }),
            d = ze()(u, 2),
            p = d[0],
            m = d[1],
            h = [l, p, m].map(mr),
            f = ze()(h, 3),
            v = f[0],
            g = f[1],
            y = f[2],
            _ = o.length - 2
          switch (o.length) {
            case 0:
              return Object(pr.a)('Compose reply context should not have 0 recipients'), null
            case 1:
              return t
                ? i.communityReplyToOne({ communityName: t, userName: v })
                : c
                ? i.exclusiveReplyToOne({ userName: v })
                : i.replyToOne({ userName: v })
            case 2:
              return t
                ? i.communityReplyToTwo({ communityName: t, userOneName: v, userTwoName: g })
                : c
                ? i.exclusiveReplyToTwo({ userOneName: v, userTwoName: g })
                : i.replyToTwo({ userOneName: v, userTwoName: g })
            case 3:
              return t
                ? i.communityReplyToThree({ communityName: t, userOneName: v, userTwoName: g, userThreeName: y })
                : c
                ? i.exclusiveReplyToThree({ userOneName: v, userTwoName: g, userThreeName: y })
                : i.replyToThree({ userOneName: v, userTwoName: g, userThreeName: y })
            default:
              return t
                ? i.communityReplyToMany({ communityName: t, userOneName: v, userTwoName: g, othersCount: _ })
                : c
                ? i.exclusiveReplyToMany({ userOneName: v, userTwoName: g, othersCount: _ })
                : i.replyToMany({ userOneName: v, userTwoName: g, othersCount: _ })
          }
        },
        fr = w.a.memo(hr),
        vr = n('fs1G'),
        gr = n('BLtI'),
        yr = n('kY28')
      function _r(e) {
        null == e || e.preventDefault()
      }
      var br = F.a.create(function (e) {
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
        Cr = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            r = e.loggedInUserId,
            i = e.onPress,
            o = e.shouldDisplayRepliesText,
            s = e.showParentTweet,
            c = void 0 === s || s
          return w.a.createElement(
            W.a,
            null,
            c
              ? w.a.createElement(gr.b, {
                  conversationPosition: { isStart: !0 },
                  linkableQuotedTweet: !1,
                  linkify: !1,
                  onAnalyticsClick: vr.a,
                  onAvatarClick: _r,
                  onEntityClick: _r,
                  onMediaClick: _r,
                  onReplyContextClick: _r,
                  replyContext: yr.a.ReplyContextTypes.None,
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
              W.a,
              { style: br.replyUsersContainer },
              w.a.createElement(
                ea.a,
                {
                  avatarCell: c ? w.a.createElement(W.a, { style: br.conversationLine }) : null,
                  avatarCellStyle: br.conversationLineContainer,
                  cellStyle: br.repliesTextContainer,
                  style: br.grid,
                },
                o
                  ? w.a.createElement(
                      D.b,
                      { accessibilityRole: 'button', color: 'gray700', onPress: i, style: c && br.repliesMessage },
                      w.a.createElement(fr, {
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
        wr = n('Tb0w'),
        Er = n('1YZw'),
        Tr = n('pidX'),
        xr = n('5oBF'),
        Sr = n('JYYi'),
        Ir = n('/Rsk'),
        Rr = n('qlwE'),
        kr = n('XOJV'),
        Mr = n('G6rE'),
        Ar = n('AspN'),
        Lr = n('oEGd'),
        Pr = n('2iUg'),
        Dr = n('P1r1'),
        Or = ['mediaIds'],
        Fr = function (e) {
          return e.parentTweetId || (e.isInline ? Sr.a.homeTimeline : Sr.a.modal)
        },
        Br = function (e, t) {
          var n = Fr(t)
          return se.k(e, n)
        },
        Nr = function (e, t) {
          var n = Fr(t)
          return se.l(e, n)
        },
        Vr = function (e, t) {
          var n = Fr(t)
          return se.j(e, n)
        },
        jr = function (e, t) {
          var n = Xr(e, t),
            a = Vr(e, t).communityIdValue || void 0,
            r = (null == n ? void 0 : n.community_id_str) || a,
            i = r ? k.c.select(e, r) : void 0
          return i ? i.name : void 0
        },
        Ur = function (e, t) {
          var n = Fr(t)
          return se.m(e, n)
        },
        Hr = function (e, t) {
          var n = Fr(t)
          return se.i(e, n)
        },
        zr = function (e) {
          return function (t, n) {
            var a = (function (e, t) {
              return t.location.state
            })(0, n)
            return a ? e(a) : void 0
          }
        },
        Wr = Object(ue.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          Mr.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        Gr = function (e, t) {
          return t.parentTweetId || Kr(e, t) || qr(e, t)
        },
        Kr = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        qr = zr(function (e) {
          return e.inReplyToStatusId
        }),
        Xr = function (e, t) {
          var n = Gr(e, t)
          return n ? kr.a.selectHydrated(e, n) : void 0
        },
        Yr = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        Qr = zr(function (e) {
          return e.hasArticleNudge
        }),
        Jr = zr(function (e) {
          return e.convoCardData
        }),
        Zr = zr(function (e) {
          return e.externalMedia
        }),
        $r = zr(function (e) {
          return e.externalMediaFiles
        }),
        ei = zr(function (e) {
          return e.previewTweetId
        }),
        ti = zr(function (e) {
          return e.defaultText
        }),
        ni = function (e, t) {
          var n = ti(e, t),
            a = Object(Tr.a)(t.location)
          return (Yr(0, t) ||
            (function (e, t) {
              return t.location.pathname.indexOf('/compose/tweet') > -1
            })(0, t)) &&
            a
            ? a
            : n
        },
        ai = zr(function (e) {
          return e.quotedStatusId
        }),
        ri = zr(function (e) {
          return e.quotedStatus
        }),
        ii = function (e, t) {
          return (
            (function (e, t) {
              return t.quotedStatus ? t.quotedStatus : ri(e, t)
            })(e, t) ||
            (function (e, t) {
              var n = ai(e, t)
              return n ? kr.a.selectHydratedMemoized(e, n) : void 0
            })(e, t)
          )
        },
        oi = zr(function (e) {
          return e.isSelfThreadReply
        }),
        si = zr(function (e) {
          return e.positionCursorAtBeginning
        }),
        ci = zr(function (e) {
          return e.promotedContent
        }),
        li = function () {
          return Object(ue.createSelector)(Br, ni, ii, Ar.j, function (e, t, n, a) {
            return e.map(function (e, r) {
              return c()(
                c()({}, ((i = e).mediaIds, lt()(i, Or))),
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
        ui = {
          addComposer: se.a,
          addToast: Er.b,
          createLocalApiErrorHandler: Object(he.createLocalApiErrorHandlerWithContextFactory)('SCREEN_COMPOSE_V2'),
          checkTweetForNudge: se.b,
          deletePreviewTweet: xr.c,
          fetchAltTextPromptPreferenceIfNeeded: Pr.a,
          fetchAutotaggedLocationIfNeeded: Ir.a,
          fetchTweetIfNeeded: kr.a.fetchOneIfNeeded,
          removeComposer: se.e,
          resetDraft: se.f,
          retweet: kr.a.retweet,
          schedule: se.h,
          draftTweet: se.d,
          send: se.q,
          updateActiveComposerIndex: se.s,
          updateAudienceControlsValue: se.t,
          updateConvoCardState: wr.b,
          preUploadMedia: Ar.e,
          addMedia: Ar.b,
          processMultipleMedia: Ar.g,
          removeMediaUpload: Ar.i,
          updateSingleComposer: se.w,
          setActiveParentKey: se.r,
          copyDataFromInlineComposerToModalComposer: se.c,
        },
        di = Object(Lr.e)(function () {
          return Object(ue.createStructuredSelector)({
            activeComposerIndex: Hr,
            activeUser: Wr,
            altTextNudgeType: Pr.b,
            audienceControlsValue: Vr,
            composerData: li(),
            dataSaverMode: Dr.j,
            excludedRecipients: Nr,
            externalMedia: Zr,
            externalMediaFiles: $r,
            geoEnabled: Dr.o,
            hasArticleNudge: Qr,
            inReplyToStatus: Xr,
            inReplyToStatusId: Gr,
            isIntentRoute: Yr,
            isSelfThreadReply: oi,
            isSending: Ur,
            isSuperFollowsCreator: pe.l,
            positionCursorAtBeginning: si,
            loggedInUser: Mr.e.selectLoggedInUser,
            prepopulatedText: ni,
            previewTweetId: ei,
            promotedContent: ci,
            scheduledFor: se.n,
            selectedCommunityName: jr,
            sendingProgress: se.o,
            convoCardData: Jr,
            undoTweetSettings: Rr.p,
            userLanguage: pe.o,
            quotedStatusId: ai,
          })
        }, ui),
        pi = n('45mF'),
        mi = n('c0ZR'),
        hi = n('W5XZ'),
        fi = n('Drq4'),
        vi = n('0uGn'),
        gi = n('I8M8'),
        yi = n('7myi'),
        _i = n('7nmT'),
        bi = n.n(_i),
        Ci = n('vbWy'),
        wi = n('Rp9C'),
        Ei = n('Q5Mu'),
        Ti = n('N5qz'),
        xi = 'tweetButton',
        Si = 'tweetButtonInline',
        Ii = Object(M.a)()
          .propsFromState(function () {
            return { loggedInUser: Mr.e.selectLoggedInUser }
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
        Ri = n('cHvH'),
        ki = n('sgih'),
        Mi = n('xKuM'),
        Ai = n('5Vk4'),
        Li = F.a.create(function (e) {
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
        Pi = function (e) {
          var t = e.actionButtonType,
            n = e.children,
            a = e.onActionButtonClick,
            r = e.onMaskClick,
            i = e.sheetType,
            o = e.showActionButton
          return w.a.createElement(Ri.a, null, function (e) {
            var s = e.windowWidth > F.a.theme.breakpoints.small
            return w.a.createElement(
              ki.a,
              { onMaskClick: r, style: Li.sheetStyle, type: i, withMask: !0 },
              o &&
                w.a.createElement(Mi.a, {
                  leftControl: w.a.createElement(Ai.a, { backButtonType: t, onClick: a }),
                  position: 'absolute',
                }),
              w.a.createElement(W.a, { style: [Li.mainCard, s ? Li.largeScreenCard : Li.smallScreenCard] }, n),
            )
          })
        },
        Di = N.a.cb7c0987,
        Oi = N.a.de3bcf27,
        Fi = N.a.e710ce75,
        Bi = N.a.h11e5910,
        Ni = N.a.b7ec04f3,
        Vi = N.a.i62a03aa,
        ji = F.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
          }
        }),
        Ui = function (e) {
          var t = e.onBack,
            n = e.onNo,
            a = e.onYes
          return w.a.createElement(
            Pi,
            {
              actionButtonType: 'back',
              onActionButtonClick: t,
              onMaskClick: t,
              sheetType: 'full',
              showActionButton: !0,
            },
            w.a.createElement(D.b, { size: 'title4', style: ji.itemPadding, weight: 'heavy' }, Di),
            w.a.createElement(D.b, { color: 'gray700', style: ji.itemPadding }, Oi),
            w.a.createElement(D.b, { color: 'gray700', style: ji.itemPadding }, Fi),
            w.a.createElement(
              W.a,
              { style: ji.buttonContainer },
              w.a.createElement(D.b, { size: 'title4', style: ji.itemPadding, weight: 'heavy' }, Bi),
              w.a.createElement(K.a, { onPress: a, style: ji.itemPadding, type: 'brandOutlined' }, Ni),
              w.a.createElement(K.a, { onPress: n, style: ji.itemPadding, type: 'brandOutlined' }, Vi),
            ),
          )
        },
        Hi = n('cm6r'),
        zi = F.a.create(function (e) {
          return { button: { width: e.spaces.space72, height: e.spaces.space72, marginBottom: e.spaces.space12 } }
        }),
        Wi = function (e) {
          var t = e.icon,
            n = e.label,
            a = e.onPress
          return w.a.createElement(Hi.a, { interactiveStyles: null, onPress: a }, function (e) {
            return w.a.createElement(
              w.a.Fragment,
              null,
              w.a.createElement(K.a, {
                icon: t,
                interactivityState: e,
                size: 'xLarge',
                style: zi.button,
                type: 'primaryOutlined',
              }),
              w.a.createElement(D.b, { color: 'gray700' }, n),
            )
          })
        },
        Gi = n('sjK1'),
        Ki = n('FDY4'),
        qi = n('tevE'),
        Xi = n('jV+4'),
        Yi = n('UgB4'),
        Qi = n('TW8A'),
        Ji = n('hiGS'),
        Zi = n('WtWS'),
        $i = n('Lsrn'),
        eo = n('k/Ka'),
        to = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(eo.a)(
            'svg',
            c()(
              c()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [$i.a.root, e.style],
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
      to.metadata = { width: 24, height: 24 }
      var no = to,
        ao = [
          { headlineText: N.a.f3a7a80c, subTextLine1: N.a.ge52d1de, subTextLine2: null },
          { headlineText: N.a.j311bf49, subTextLine1: N.a.ae42ebff, subTextLine2: N.a.aa350ab1 },
          { headlineText: N.a.j18b2956, subTextLine1: N.a.f6bee896, subTextLine2: N.a.dddd0995 },
          { headlineText: N.a.d02a94fa, subTextLine1: N.a.dddd0995, subTextLine2: null },
          { headlineText: N.a.i018b746, subTextLine1: N.a.b8d85df9, subTextLine2: N.a.d5ca11f0 },
        ],
        ro = N.a.h11e5910,
        io = N.a.abd845fd,
        oo = N.a.bea869b3,
        so = N.a.d96cf7cd,
        co = N.a.d3145da8,
        lo = F.a.create(function (e) {
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
            thanksCheckMark: { color: F.a.theme.colors.primary, marginRight: e.spaces.space8 },
            photos: {
              borderRadius: e.borderRadii.xLarge,
              overflow: 'hidden',
              marginRight: e.spaces.space12,
              flex: '3 1 0%',
            },
            textStyle: { flex: '8 1 0%' },
          }
        }),
        uo = function (e) {
          var t = e.hasSentFeedback,
            n = e.media,
            a = e.onDeleteTweet,
            r = e.onDismiss,
            i = e.onEditTweet,
            o = e.onSendTweet,
            s = e.onWeGotItWrong,
            c = e.tweetText,
            l = e.userName,
            u = e.userProfileImageUrl,
            d = e.userScreenName,
            p = w.a.useContext(I.a).featureSwitches.getNumberValue('responsive_web_reply_nudge_copy_version'),
            m = ao[(p = p >= 0 && p <= 4 ? p : 0)]
          return w.a.createElement(Ri.a, null, function (e) {
            var p,
              h,
              f,
              v = e.windowWidth
            return w.a.createElement(
              Pi,
              {
                actionButtonType: 'close',
                onActionButtonClick: r,
                onMaskClick: r,
                sheetType: 'full',
                showActionButton: v > F.a.theme.breakpoints.medium,
              },
              w.a.createElement(no, { style: [lo.profanityIcon, lo.itemPadding] }),
              w.a.createElement(qi.a, { size: 'title4', style: lo.itemPadding, weight: 'heavy' }, m.headlineText),
              w.a.createElement(D.b, { color: 'gray700', style: lo.itemPadding }, m.subTextLine1),
              w.a.createElement(D.b, { color: 'gray700', style: lo.itemPadding }, m.subTextLine2),
              w.a.createElement(
                W.a,
                { style: [lo.tweetContainer, lo.itemPadding] },
                w.a.createElement(
                  W.a,
                  { style: lo.tweetContent },
                  w.a.createElement(Xi.a, { name: l, profileImageUrl: u, screenName: d, style: lo.userName }),
                  w.a.createElement(
                    W.a,
                    { style: lo.tweetBody },
                    (function () {
                      if (0 === n.length) return null
                      var e = n.map(function (e) {
                        var t,
                          n,
                          a,
                          r = ''
                        if (e.externalMediaDetails) r = e.externalMediaDetails.stillMediaUrl
                        else if (e.mediaFile instanceof Gi.c) r = e.mediaFile.thumbnail
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
                        W.a,
                        { style: lo.photos },
                        w.a.createElement(Ki.a, {
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
                    w.a.createElement(D.b, { style: lo.textStyle }, c),
                  ),
                ),
              ),
              t
                ? w.a.createElement(
                    W.a,
                    { style: lo.thanksContainer },
                    w.a.createElement(Zi.a, { style: lo.thanksCheckMark }),
                    w.a.createElement(D.b, { align: 'center', style: lo.itemPadding }, co),
                  )
                : w.a.createElement(D.b, { align: 'center', onPress: s, style: lo.itemPadding, withUnderline: !0 }, ro),
              v > F.a.theme.breakpoints.small
                ? w.a.createElement(
                    W.a,
                    { style: lo.buttonContainer },
                    w.a.createElement(K.a, { onPress: i, style: lo.itemPadding, type: 'brandFilled' }, io),
                    w.a.createElement(K.a, { onPress: o, style: lo.itemPadding, type: 'brandOutlined' }, oo),
                    w.a.createElement(K.a, { onPress: a, style: lo.itemPadding, type: 'destructiveText' }, so),
                  )
                : ((p = w.a.createElement(Yi.a, { style: { color: F.a.theme.colors.text } })),
                  (h = w.a.createElement(Qi.a, { style: { color: F.a.theme.colors.primary } })),
                  (f = w.a.createElement(Ji.a, { style: { color: F.a.theme.colors.red500 } })),
                  w.a.createElement(
                    W.a,
                    { style: lo.mobileButtonContainer },
                    w.a.createElement(Wi, { icon: p, label: oo, onPress: o }),
                    w.a.createElement(Wi, { icon: h, label: io, onPress: i }),
                    w.a.createElement(Wi, { icon: f, label: so, onPress: a }),
                  )),
            )
          })
        },
        po = Ii(function (e) {
          var t = e.analytics,
            n = e.media,
            a = e.nudgeId,
            r = e.onDeleteTweet,
            i = e.onDismiss,
            o = e.onEditTweet,
            s = e.onSendTweet,
            c = e.tweetText,
            l = e.userName,
            u = e.userProfileImageUrl,
            d = e.userScreenName,
            p = w.a.useState(!1),
            m = ze()(p, 2),
            h = m[0],
            f = m[1],
            v = w.a.useState(!1),
            g = ze()(v, 2),
            y = g[0],
            _ = g[1],
            b = function (e) {
              var n = e.action,
                r = e.element,
                i = e.page,
                o = [{ nudge_id: a }]
              t.scribe({ action: n, data: { items: o }, element: r, page: i, section: 'dialog' })
            }
          return h
            ? w.a.createElement(Ui, {
                onBack: function () {
                  b({ action: 'back', element: 'action', page: 'nudge_more_info' }), f(!1)
                },
                onNo: function () {
                  b({ action: 'got_it_wrong_no', element: 'action', page: 'nudge_more_info' }), _(!0), f(!1)
                },
                onYes: function () {
                  b({ action: 'got_it_wrong_yes', element: 'action', page: 'nudge_more_info' }), _(!0), f(!1)
                },
              })
            : w.a.createElement(uo, {
                hasSentFeedback: y,
                media: n,
                onDeleteTweet: function () {
                  b({ action: 'cancel', element: 'action', page: 'nudge' }), r()
                },
                onDismiss: function () {
                  b({ action: 'dismiss', element: 'action', page: 'nudge' }), i()
                },
                onEditTweet: function () {
                  b({ action: 'revise', element: 'action', page: 'nudge' }), o()
                },
                onSendTweet: function () {
                  b({ action: 'send', element: 'action', page: 'nudge' }), s()
                },
                onWeGotItWrong: function () {
                  b({ action: 'more_info', element: 'action', page: 'nudge' }),
                    b({ action: 'impression', page: 'nudge_more_info' }),
                    f(!0)
                },
                tweetText: c,
                userName: l,
                userProfileImageUrl: u,
                userScreenName: d,
              })
        }),
        mo = n('aITJ'),
        ho = n('eb3s'),
        fo = n('JYMr'),
        vo = n('sCk0'),
        go = n('3A2y'),
        yo = n('zrOZ'),
        _o = n('s1N3'),
        bo = n('4FGy'),
        Co = n('mN6z'),
        wo = n('eyty'),
        Eo = n('rziq'),
        To = n('lsKC'),
        xo = n('jTgF'),
        So = N.a.d28215f0,
        Io = N.a.ec909a54,
        Ro = N.a.jd53409d,
        ko = {
          singular: N.a.edae65de,
          plural: N.a.a859846a,
          oneOfMultiple: N.a.e90118f5,
          someOfMultiple: N.a.c211dcb1,
        },
        Mo = { singular: N.a.d7c26bfb, plural: N.a.a75e3ccc },
        Ao = N.a.dcb7e3a0,
        Lo = function (e) {
          var t,
            n,
            a = e.numberOfDescriptionsMissing,
            r = a === e.numberOfImages
          return (
            1 === a
              ? ((n = Mo.singular), (t = r ? ko.singular : ko.oneOfMultiple))
              : ((n = Mo.plural), (t = r ? ko.plural : ko.someOfMultiple)),
            ''.concat(t, ' ').concat(n, ' ').concat(Ao)
          )
        },
        Po = N.a.c1bf53b0,
        Do = N.a.bb8170da,
        Oo = N.a.dad5a4b8,
        Fo = N.a.e65aed64,
        Bo = N.a.bc2ceaf2,
        No = N.a.d8222374,
        Vo = N.a.j890123a,
        jo = N.a.bb01231c,
        Uo = N.a.d4ab68e2,
        Ho = N.a.d8af8a4c,
        zo = N.a.d09d4c05,
        Wo = N.a.i2209530,
        Go = N.a.bf9b89e4,
        Ko = N.a.f277e949,
        qo = N.a.b551cd22,
        Xo = N.a.f026a7fa,
        Yo = N.a.a5d4fda0,
        Qo = N.a.ib067d6a,
        Jo = x.canUseDOM && document.documentElement && 'scrollBehavior' in document.documentElement.style,
        Zo = { element: 'alt_text_prompt' },
        $o = { component: 'article_nudge' },
        es = { viewType: 'send_tweet' },
        ts = Object.freeze({ Original: 'original', Reply: 'reply', Quote: 'quote', Thread: 'thread' }),
        ns = (function (e) {
          v()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r, i, s
            u()(this, n),
              (s = t.call(this, e, a)),
              b()(h()(s), '_getParentKey', function () {
                var e = s.props,
                  t = e.isInline
                return e.parentTweetId || (t ? Sr.a.homeTimeline : Sr.a.modal)
              }),
              b()(h()(s), '_updateSingleComposer', function (e, t) {
                return (0, s.props.updateSingleComposer)({ updates: e, index: t, parentKey: s._getParentKey() })
              }),
              b()(h()(s), '_resetDraft', function () {
                ;(0, s.props.resetDraft)({ parentKey: s._getParentKey(), isPreview: s.isPreview })
              }),
              b()(h()(s), '_fetchAutotaggedLocationIfNeeded', function () {
                var e = s.props,
                  t = e.createLocalApiErrorHandler
                return (0, e.fetchAutotaggedLocationIfNeeded)().catch(t())
              }),
              b()(h()(s), '_syncTexts', function () {
                var e = s.props.composerData,
                  t = s.state.textMap
                e.forEach(function (e, n) {
                  var a = t[e.key]
                  'string' == typeof a && a !== e.text && s._updateSingleComposer({ text: a }, n)
                })
              }),
              b()(h()(s), '_hasGif', function (e) {
                return (
                  e.gifMetadata ||
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isGif
                  })
                )
              }),
              b()(h()(s), '_hasPhoto', function (e) {
                return (
                  e.media &&
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isImage
                  })
                )
              }),
              b()(h()(s), '_hasVideo', function (e) {
                return (
                  e.media &&
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isVideo && !e.mediaFile.isGif
                  })
                )
              }),
              b()(h()(s), '_handleDeletePreviewTweet', function () {
                var e = s.props,
                  t = e.deletePreviewTweet,
                  n = e.previewTweetId
                n && t(n)
              }),
              b()(h()(s), '_handleAnimateComplete', function () {
                var e = s.props,
                  t = e.activeComposerIndex,
                  n = e.onHandleAppBarHeight,
                  a = bi.a.findDOMNode(s._composerRefs[t])
                if (a instanceof window.Element) {
                  var r = a.getBoundingClientRect(),
                    i = r.bottom,
                    o = r.top,
                    c = Math.max(o, window.scrollY)
                  if (c < window.pageYOffset || i > window.innerHeight) {
                    var l = n ? c - n() - 14 : c - 14,
                      u = Math.max(l, 0)
                    window.requestAnimationFrame(function () {
                      Jo ? window.scrollTo({ top: u, left: 0, behavior: 'smooth' }) : window.scrollTo(0, u)
                    })
                  }
                }
              }),
              b()(h()(s), '_handleFetchTweetIfNeeded', function () {
                var e = s.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchTweetIfNeeded,
                  a = e.inReplyToStatus,
                  r = e.inReplyToStatusId,
                  i = e.quotedStatus,
                  o = e.quotedStatusId
                !a && r && n(r).catch(t(hi.a)), !i && o && n(o).catch(t(hi.a))
              }),
              b()(h()(s), '_blockHistory', function (e, t) {
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
                  : !('POP' === t && o && s._areComposersEmptyOrUnchanged && !Object(Vt.a)(a)) || (s._resetDraft(), !0)
              }),
              b()(h()(s), '_getKeyCommandHandlers', function () {
                return s.state.typeaheadActive ? s._keyCommandHandlersForActiveTypeahead : s._keyCommandHandlers
              }),
              b()(h()(s), 'handleTweetOrRetweet', function () {
                if (
                  (s._scribe({ section: 'composition', element: 'send_tweet', action: 'click' }),
                  s._areComposersValid())
                )
                  return s.shouldShowAltTextPrompt
                    ? (s.setState({ showAltTextPrompt: !0 }), void s._scribe(c()(c()({}, Zo), {}, { action: 'show' })))
                    : s._handleTweetOrRetweet()
              }),
              b()(h()(s), '_handleTweetOrRetweet', function () {
                return s.isRetweet ? s._handleRetweet() : s._handleTweet()
              }),
              b()(h()(s), '_renderReplyContext', function () {
                var e = s.props,
                  t = e.activeUser,
                  n = e.excludedRecipients,
                  a = e.inReplyToStatus,
                  r = e.isInline,
                  i = e.isSelfThreadReply,
                  o = e.selectedCommunityName
                if (a && s._shouldBeExpanded())
                  return w.a.createElement(Cr, {
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
              b()(h()(s), '_renderAltTextPrompt', function () {
                var e = s._getAltTextMetadata(),
                  t = e.numberOfDescriptionsMissing,
                  n = e.numberOfImages
                return w.a.createElement(ho.a, {
                  Icon: fi.a,
                  cancelButtonLabel: Do,
                  confirmButtonLabel: Po({ numOfDescriptions: t }),
                  headline: Ro,
                  onCancel: s._handleIgnoreAltTextPrompt,
                  onConfirm: s._handleAcceptAltTextPrompt,
                  onMaskClick: s._handleCancelAltTextPrompt,
                  text: Lo({ numberOfDescriptionsMissing: t, numberOfImages: n }),
                })
              }),
              b()(h()(s), '_renderToxicReplyNudge', function () {
                var e = s._getSingleComposerDataWithLatestText(s.props.composerData[0]),
                  t = e.text,
                  n = e.media
                return w.a.createElement(po, {
                  media: n,
                  nudgeId: s.state.nudgeId,
                  onDeleteTweet: s._handleReplyNudgeDeleteTweet,
                  onDismiss: s._handleReplyNudgeDismiss,
                  onEditTweet: s._handleReplyNudgeEditTweet,
                  onSendTweet: s._handleReplyNudgeSendTweet,
                  tweetText: t,
                })
              }),
              b()(h()(s), '_handleAddComposer', function () {
                var e = s.props,
                  t = e.addComposer,
                  n = e.copyDataFromInlineComposerToModalComposer,
                  a = e.isInline,
                  r = e.parentTweetId
                s.isInlineReply ? n(r) : a && n(Sr.a.homeTimeline), t()
              }),
              b()(
                h()(s),
                '_makeAddComposerLink',
                Object(Kt.a)(function (e, t, n) {
                  return Object(To.c)({ isInline: e, isSelfThreadReply: t, parentTweetId: n })
                }),
              ),
              b()(h()(s), '_handleReplyNudgeDeleteTweet', function () {
                s._hideToxicReplyNudge(), s._handleConfirmDiscardTweet()
              }),
              b()(h()(s), '_handleReplyNudgeDismiss', function () {
                s._hideToxicReplyNudge()
              }),
              b()(h()(s), '_handleReplyNudgeEditTweet', function () {
                s._hideToxicReplyNudge()
              }),
              b()(h()(s), '_handleReplyNudgeSendTweet', function () {
                s._hideToxicReplyNudge(), s._handleSendTweet()
              }),
              b()(h()(s), '_setRootRef', function (e) {
                e && (s._root = e)
              }),
              b()(h()(s), '_handleTweet', function () {
                var e = s.props.composerData[0].scheduledFor
                s.setState({ errorMessage: void 0 }),
                  e ? Object(jt.h)(e) && s._handleScheduleTweet() : s._checkToxicReplyAndSendTweet()
              }),
              b()(h()(s), '_handleTweetError', function (e, t) {
                return function (n) {
                  var a = s.props,
                    r = a.analytics,
                    i = a.createLocalApiErrorHandler
                  if (Object(xo.d)(n) && n.code === gi.b.CANCELED) return r.scribeAction(e), Promise.resolve()
                  var o = Object(xo.b)(n)
                  if (o) return s.setState({ errorMessage: o }), Promise.resolve()
                  var l = t || Object(pi.a)(void 0, !1)
                  i(c()({}, l))(n)
                  var u = n instanceof T.a && (null == t ? void 0 : t[n.errors[0].code])
                  s.setState({ errorMessage: { text: u ? u.toast.text : Yo } })
                }
              }),
              b()(h()(s), '_handleScheduleTweet', function () {
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
                    var a = Object(jt.c)(o.scheduledFor)
                    if (a) {
                      var r = Object(jt.b)(a),
                        i = Object(jt.i)(a),
                        l = qo({ scheduleDate: r, scheduleTime: i })
                      t({ text: l, action: { label: Ko, link: '/compose/tweet/unsent/scheduled' } }),
                        s._scribeTweetSent(n[0], c()(c()({}, e), {}, { id_str: e.scheduled_id_str }), {
                          isScheduled: !0,
                        })
                    }
                    s._updateConvoCardState(), s._close()
                  })
                  .catch(s._handleTweetError('schedule_tweet_cancel'))
              }),
              b()(h()(s), '_handleDraftTweet', function () {
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
                      t({ text: Go, action: { label: Ko, link: '/compose/tweet/unsent/drafts' } }),
                      s._scribeTweetSent(n[0], c()(c()({}, e), {}, { id_str: e.draft_id_str }), { isDraftTweet: !0 }),
                      s._updateConvoCardState(),
                      s._close()
                  })
                  .catch(s._handleTweetError('draft_tweet_cancel', Ei.a))
              }),
              b()(h()(s), '_checkToxicReply', function () {
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
                    var t, n, a, r, i, o, c
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
                    var l =
                        null == e ||
                        null === (a = e.create_nudge) ||
                        void 0 === a ||
                        null === (r = a.nudge) ||
                        void 0 === r ||
                        null === (i = r.nudge_type) ||
                        void 0 === i
                          ? void 0
                          : i.__typename,
                      u =
                        null == e ||
                        null === (o = e.create_nudge) ||
                        void 0 === o ||
                        null === (c = o.nudge) ||
                        void 0 === c
                          ? void 0
                          : c.id
                    return u && s.setState({ nudgeId: u }), !!l
                  }),
                  c = new Promise(function (e, t) {
                    return setTimeout(e, 1e3, !1)
                  })
                return Promise.race([o, c])
              }),
              b()(h()(s), '_showToxicReplyNudge', function () {
                s._scribe(
                  { page: 'nudge', section: 'dialog', action: 'impression' },
                  { items: [{ nudge_id: s.state.nudgeId }] },
                ),
                  s.setState({ showToxicReplyNudge: !0 })
              }),
              b()(h()(s), '_hideToxicReplyNudge', function () {
                return s.setState({ showToxicReplyNudge: !1 })
              }),
              b()(h()(s), '_checkToxicReplyAndSendTweet', function () {
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
              b()(h()(s), '_handleSendTweet', function () {
                var e = s.props,
                  t = e.activeUser,
                  n = e.addToast,
                  a = e.analytics,
                  r = e.audienceControlsValue,
                  i = e.composeSemanticCoreId,
                  o = e.excludedRecipients,
                  l = e.hasArticleNudge,
                  u = e.history,
                  d = e.inReplyToStatus,
                  p = e.isSelfThreadReply,
                  m = e.location,
                  h = e.promotedContent,
                  f = e.selectedCommunityName,
                  v = e.send,
                  g = r.conversationControlsValue,
                  y = r.exclusivityControlValue,
                  _ = void 0 === y ? void 0 : y,
                  b = r.trustedFriendsValue,
                  C = void 0 === b ? void 0 : b,
                  w = s.isPreview,
                  E = s.props.composerData.map(function (e) {
                    return s._getSingleComposerDataWithLatestText(e)
                  }),
                  T = Object(jt.c)(E[0].scheduledFor)
                if (T) {
                  var x = Object(jt.b)(T),
                    I = Object(jt.i)(T),
                    R = qo({ scheduleDate: x, scheduleTime: I })
                  return n({ text: R, action: { label: Ko, link: '' } }), void s._close()
                }
                if (
                  (o.length > 0 && a.scribe({ element: 'mentions', action: 'edited' }),
                  s._conversationControlsCreationEnabled)
                )
                  if ('community' === g) a.scribe({ action: 'send_community_tweet' })
                  else if ('by_invitation' === g) {
                    var k = s._getSingleComposerDataWithLatestText(E[0]).text,
                      M = Object(S.d)(k)
                    a.scribe({
                      action: M ? 'send_mentioned_tweet_with_mentions' : 'send_mentioned_tweet_without_mentions',
                    })
                  } else 'followers' === g && a.scribe({ action: 'send_my_followers_tweet' })
                var A = (null == d ? void 0 : d.community_id_str) || r.communityIdValue || void 0,
                  L = A ? '8.31.'.concat(A) : '',
                  P = i ? (A ? [i, L].join(',') : i) : L
                v({
                  sendData: E,
                  communityIdValue: A,
                  conversationControlsValue: g,
                  excludedRecipients: o,
                  exclusivityControlValue: _,
                  inReplyToStatus: d,
                  isSelfThreadReply: p,
                  promotedContent: h,
                  composeSemanticCoreId: P,
                  isPreview: w,
                  trustedFriendsValue: C,
                  tweetType: s.tweetType,
                })
                  .then(function (e) {
                    w || s.setState({ tweetsSentOrScheduled: !0 }),
                      e.map(function (e, t) {
                        return s._scribeTweetSent(E[t], e, { hasArticleNudge: l })
                      }),
                      e.length > 1 && s._scribeThreadSent(E, e, 'thread_send_success')
                    var a = e.length > 1 ? Fo : Oo
                    if (A && f) {
                      var r = f,
                        i = e.length
                      a = Io({ numOfTweets: i, communityName: r })
                    }
                    var o = w && s.isReply,
                      c = { label: Ko, link: void 0, onAction: void 0 }
                    if (o || !w) {
                      var d = o ? e[0].in_reply_to_status_id_str : e[0].id_str
                      c.link = '/'.concat(t ? t.screen_name : 'i', '/status/').concat(d || '')
                    } else c.onAction = Object(To.a)(u, m)
                    n({ text: w ? Bo : a, action: c }),
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
                      d = null == e ? void 0 : e.status,
                      p = { message: e.type, event_info: i ? ''.concat(i) : void 0, status_code: d, url: o }
                    throw (
                      (r.map(
                        function (e, t) {
                          return s._scribeTweetSent(E[t], e)
                        },
                        { hasArticleNudge: l },
                      ),
                      (Object(xo.d)(e) && e.code === gi.b.CANCELED) ||
                        a.scribe({ action: 'send_tweet_failure', data: p }),
                      E.length > 1 && s._scribeThreadSent(E, r, 'thread_send_failure'),
                      r.length &&
                        u.replace({
                          pathname: m.pathname,
                          state: c()(
                            c()({}, Object(go.a)(m.state || {}, 'quotedStatus')),
                            {},
                            { inReplyToStatusId: r[r.length - 1].id_str, isSelfThreadReply: !0 },
                          ),
                        }),
                      e)
                    )
                  })
                  .catch(s._handleTweetError('send_tweet_cancel', Ei.a))
              }),
              b()(h()(s), '_setActiveParentKey', function () {
                ;(0, s.props.setActiveParentKey)(s._getParentKey())
              }),
              b()(h()(s), '_scribeTweetSent', function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  a = n.hasArticleNudge,
                  r = void 0 !== a && a,
                  i = n.isDraftTweet,
                  o = void 0 !== i && i,
                  l = n.isScheduled,
                  u = void 0 !== l && l,
                  d = s.state.nudgeId,
                  p = e.scheduledTweetId ? 'schedule_edit_' : 'schedule_',
                  m = e.draftTweetId ? 'draft_edit_' : 'draft_',
                  h = o ? m : u ? p : 'send_',
                  f = { items: [wi.a.getTweetItem(t)] },
                  v = e.pollActive && e.pollValid,
                  g = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.altText)
                  }),
                  y = e.mediaTags.length,
                  _ = Object(yo.a)(
                    e.media
                      .map(function (e) {
                        var t,
                          n = null === (t = e.mediaMetadata) || void 0 === t ? void 0 : t.sensitiveMediaWarning
                        return n ? Array.from(n) : void 0
                      })
                      .filter(Boolean)
                      .flat(),
                  ),
                  b = s.props.isInline ? 'inline_reply' : 'tweet_box_dialog'
                if (
                  (s._scribe({ action: ''.concat(h, 'tweet') }, f),
                  o || !e.draftTweetId || e.scheduledTweetId || s._scribe({ action: ''.concat(h, 'draft_tweet') }, f),
                  s.isQuoteTweet &&
                    (s._scribe({ action: 'retweet_with_comment' }, f),
                    r && s._scribe(c()(c()({}, $o), {}, { element: 'result', action: 'retweet_with_comment' }), f)),
                  s.isReply && s._scribe({ component: b, action: ''.concat(h, 'reply') }, f),
                  v && s._scribe({ action: ''.concat(h, 'poll_tweet') }, f),
                  s._hasPhoto(e) &&
                    (s._scribe({ action: ''.concat(h, 'photo_tweet') }, f),
                    g && s._scribe({ action: ''.concat(h, 'photo_tweet_with_alt_text') }, f),
                    y && s._scribe({ action: ''.concat(h, 'photo_tweet_with_tags') }, f)),
                  s._hasVideo(e) &&
                    (s._scribe({ action: ''.concat(h, 'video_tweet') }, f),
                    y && s._scribe({ action: ''.concat(h, 'video_tweet_with_tags') }, f)),
                  _.size)
                ) {
                  var C = s._hasPhoto(e) ? 'photo' : 'video'
                  _.forEach(function (e) {
                    s._scribe({ action: ''.concat(h).concat(C, '_tweet_with_').concat(e, '_warning') }, f)
                  })
                }
                var w = { page: 'nudge', section: 'dialog', element: 'result' }
                if (
                  (d &&
                    s.isReply &&
                    !u &&
                    (o
                      ? s._scribe(c()(c()({}, w), {}, { action: 'save' }), { items: [{ nudge_id: d }] })
                      : s._scribe(c()(c()({}, w), {}, { action: 'sent' }), { items: [{ nudge_id: d }] })),
                  d || o || !s.isReply || u || s._scribe(c()(c()({}, w), {}, { action: 'sent_no_nudge' })),
                  e.gifMetadata)
                ) {
                  var E = t.id_str && wi.a.getGifSearchItemForTweet(t.id_str, e.gifMetadata)
                  s._scribe({ element: 'remote', action: ''.concat(h, 'gif_tweet') }, { items: E ? [E] : [] })
                  var T = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.defaultAltText)
                  })
                  ;(g || T) &&
                    s._scribe(
                      { element: 'remote', action: ''.concat(h, 'gif_tweet_with_alt_text') },
                      { event_info: g ? 'user_entered' : 'from_provider', items: E ? [E] : [] },
                    ),
                    y && s._scribe({ action: ''.concat(h, 'gif_tweet_with_tags') }, f)
                } else s._hasGif(e) && (s._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet') }, f), g && s._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet_with_alt_text') }, f))
              }),
              b()(h()(s), '_scribeThreadSent', function (e, t, n) {
                var a = s.props.inReplyToStatus,
                  r = { items: [wi.a.getSendThreadItem(e, t.length, !!a)] }
                s._scribe({ action: n }, r)
              }),
              b()(h()(s), '_scribeRetweet', function (e) {
                var t = s.props.hasArticleNudge,
                  n = { items: [wi.a.getTweetItem(e)] }
                s._scribe({ action: 'retweet' }, n),
                  t && s._scribe(c()(c()({}, $o), {}, { element: 'result', action: 'retweet' }), n)
              }),
              b()(h()(s), '_handleRetweet', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.createLocalApiErrorHandler,
                  a = e.retweet,
                  r = t[0].quotedStatus
                r &&
                  (s._scribeRetweet(r),
                  a(r.id_str, {}).then(function (e) {
                    s.setState({ tweetsSentOrScheduled: !0 }), s._close()
                  }, n(Ci.a)))
              }),
              b()(h()(s), 'handleDismissComposer', function () {
                s.shouldShowDiscardConfirmation
                  ? s.setState({ showDiscardTweetConfirmation: !0 })
                  : s.shouldShowBackgroundSendConfirmation
                  ? s._cancelAllMediaUploads()
                  : s._close()
              }),
              b()(h()(s), '_cancelAllMediaUploads', function () {
                s.props.composerData.forEach(function (e) {
                  return e.media.forEach(function (e) {
                    return e.uploading && e.uploader && e.uploader.cancel()
                  })
                })
              }),
              b()(h()(s), '_handleConfirmDiscardTweet', function () {
                var e = s.props,
                  t = e.analytics,
                  n = e.hasArticleNudge,
                  a = s._canSaveDraft ? 'draft' : 'send'
                s.setState({ showDiscardTweetConfirmation: !1 }),
                  s._close(),
                  t.scribeAction(''.concat(a, '_tweet_discard')),
                  n && s._scribe(c()(c()({}, $o), {}, { element: 'result', action: 'cancel' })),
                  s.state.nudgeId &&
                    s._scribe(
                      { page: 'nudge', section: 'dialog', element: 'result', action: 'cancel' },
                      { items: [{ nudge_id: s.state.nudgeId }] },
                    )
              }),
              b()(h()(s), '_handleCancelDiscardTweet', function () {
                s.setState({ showDiscardTweetConfirmation: !1 }, function () {
                  s._restoreFocusToActiveComposer()
                })
              }),
              b()(h()(s), '_handleAcceptAltTextPrompt', function () {
                s.setState({ showAltTextPrompt: !1 })
                var e = s.props.history,
                  t = s._getAltTextMetadata().noDescriptionImageIDs
                t[0] &&
                  (s._scribe(c()(c()({}, Zo), {}, { action: 'accepted' })),
                  e.push('/compose/tweet/media', { mediaId: t[0], tab: vi.a.altText, hideTabs: !0, showAllMedia: !0 }))
              }),
              b()(h()(s), '_handleIgnoreAltTextPrompt', function () {
                s._scribe(c()(c()({}, Zo), {}, { action: 'declined' })),
                  s.setState({ showAltTextPrompt: !1 }),
                  s._handleTweetOrRetweet()
              }),
              b()(h()(s), '_handleCancelAltTextPrompt', function () {
                s._scribe(c()(c()({}, Zo), {}, { action: 'cancel' })),
                  s.setState({ showAltTextPrompt: !1 }, function () {
                    s._restoreFocusToActiveComposer()
                  })
              }),
              b()(h()(s), '_restoreFocusToActiveComposer', function () {
                var e = s.props.activeComposerIndex
                void 0 !== e && s._composerRefs[e] && s._composerRefs[e].focus()
              }),
              b()(h()(s), '_close', function () {
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
              b()(h()(s), '_handleComposerFocus', function (e) {
                s._composerRefs[e]
                  ? s.props.updateActiveComposerIndex(e)
                  : setTimeout(function () {
                      s._restoreFocusToActiveComposer()
                    }, 0)
              }),
              b()(h()(s), '_handleFocus', function () {
                s.state.focused ||
                  (s.isInlineReply && s._scribe({ element: 'inline_reply', action: 'reply' }),
                  s.setState({ focused: !0 }))
              }),
              b()(h()(s), '_handleTypeaheadStateChange', function (e) {
                s.setState({ typeaheadActive: e })
              }),
              b()(h()(s), '_handleRemoveComposer', function () {
                var e = s.props,
                  t = e.activeComposerIndex,
                  n = e.composerData,
                  a = e.history,
                  r = e.location,
                  i = e.removeComposer
                0 === t &&
                  n[0].quotedStatus &&
                  a.replace({ pathname: r.pathname, state: Object(go.a)(r.state || {}, 'quotedStatus') }),
                  i(),
                  setTimeout(s._restoreFocusToActiveComposer)
              }),
              b()(h()(s), '_handleViewRecipients', function () {
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
              b()(h()(s), '_handleTextChange', function (e, t) {
                var n = s.state.textMap,
                  a = s.props,
                  r = a.activeComposerIndex,
                  i = a.isInline,
                  o = a.setValidity
                if (
                  (s.setState({ textMap: c()(c()({}, n), {}, b()({}, t, e)) }, function () {
                    o && o(s._areComposersValid())
                  }),
                  s.setState({ errorMessage: void 0 }),
                  mo.b.isIOS())
                ) {
                  var l = i ? 0 : r
                  s._updateSingleComposer({ text: e }, l)
                }
              }),
              b()(
                h()(s),
                '_handleTextOnBlur',
                Object(Kt.a)(function (e, t) {
                  return function () {
                    var n = s.state,
                      a = n.textMap,
                      r = n.tweetsSentOrScheduled,
                      i = s.props.composerData,
                      o = a[e],
                      c = i.some(function (t) {
                        return t.key === e
                      })
                    'string' == typeof o && !r && c && s._updateSingleComposer({ text: o }, t)
                  }
                }),
              ),
              b()(h()(s), '_updateAudienceControlsValue', function (e) {
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
                      (s._updateSingleComposer({ pollActive: !1 }, 0), s.setState({ errorMessage: { text: So } })),
                      (null == r ? void 0 : r.text) === So && s.setState({ errorMessage: void 0 })
                }
                a(e, s._getParentKey())
              }),
              b()(h()(s), '_renderProgressBar', function () {
                var e = s.props,
                  t = e.isSending,
                  n = e.sendingProgress
                return w.a.createElement(fo.a, { progress: t ? Math.max(n, 0.02) : 0, style: as.progressBar })
              }),
              b()(h()(s), '_updateConvoCardState', function () {
                var e = s.props,
                  t = e.convoCardData,
                  n = e.updateConvoCardState
                if (t) {
                  var a = t.cardId,
                    r = t.nextState
                  r && a && n(a, { cardState: r })
                }
              }),
              b()(h()(s), '_attachExternalMedia', function (e) {
                return function (t) {
                  return Promise.all(
                    t.map(function (e) {
                      return Object(mi.a)(e)
                    }),
                  ).then(s._handleAddMediaFiles(e))
                }
              }),
              b()(h()(s), '_handleAddMediaFiles', function (e) {
                return function (t) {
                  var a,
                    r,
                    i = s.props,
                    o = i.addMedia,
                    c = i.addToast,
                    l = i.composerData,
                    u = i.dataSaverMode,
                    d = i.preUploadMedia,
                    p = i.processMultipleMedia,
                    m = i.removeMediaUpload,
                    f = l[e],
                    v = f.pollActive,
                    g = Object(wo.e)(
                      null === (a = h()(s)) || void 0 === a || null === (r = a.context) || void 0 === r
                        ? void 0
                        : r.userClaims,
                    )
                  v ||
                    o(t, { location: wo.d.Tweet, canUploadLongVideo: g }).then(function (t) {
                      var a = t.map(function (e) {
                        return e.id
                      })
                      if (n._validateMedia(f, t)) {
                        var r = f.media.map(function (e) {
                          return e.id
                        })
                        s._updateSingleComposer({ mediaIds: Object(_o.a)(r.concat(a)) }, e),
                          p(t, { onFailure: s._handleMediaRemoveFactory(e) }).then(function (e) {
                            u ||
                              d(
                                e.map(function (e) {
                                  return e.id
                                }),
                              )
                          })
                      } else c({ text: Qo }), m(a)
                    })
                }
              }),
              b()(h()(s), '_handleMediaRemoveFactory', function (e) {
                return function (t) {
                  return s._handleMediaRemove(e, t)
                }
              }),
              b()(h()(s), '_handleMediaRemove', function (e, t) {
                var n = s.props,
                  a = n.composerData,
                  r = n.removeMediaUpload,
                  i = a[e],
                  o = i.media,
                  c = i.mediaTags,
                  l = (function (e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                      n[a - 1] = arguments[a]
                    return Object(bo.a)(e, n)
                  })(
                    o.map(function (e) {
                      return e.id
                    }),
                    t,
                  ),
                  u = l.length > 0 ? c : []
                s._updateSingleComposer({ mediaIds: l, gifMetadata: void 0, mediaTags: u }, e),
                  r(t),
                  s.setState({ errorMessage: void 0 })
              }),
              b()(h()(s), '_setComposerRef', function (e) {
                return function (t) {
                  s._composerRefs[e] = t
                }
              }),
              b()(h()(s), '_shouldBeExpanded', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.parentTweetId
                if (s.state.focused) return !0
                var a = !Object(Vt.c)(s._getSingleComposerDataWithLatestText(t[0]))
                return !n || a
              }),
              b()(h()(s), '_areComposersValid', function () {
                var e = s.props,
                  t = e.audienceControlsValue._type,
                  n = e.composerData,
                  a = n[0].quotedStatus,
                  r = null == a ? void 0 : a.community_id_str,
                  i = 'community_members' === t
                return (
                  (s.isRetweet && !r && !i) ||
                  n.every(function (e) {
                    return Object(Vt.e)(s._getSingleComposerDataWithLatestText(e))
                  })
                )
              }),
              b()(h()(s), '_areComposersEmptyOrUnchanged', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.prepopulatedText
                return t.every(function (e) {
                  return Object(Vt.d)(s._getSingleComposerDataWithLatestText(e), n)
                })
              }),
              b()(h()(s), '_getAltTextMetadata', function () {
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
              b()(h()(s), '_getSingleComposerDataWithLatestText', function (e) {
                var t = s.state.textMap
                return 'string' == typeof t[e.key] ? c()(c()({}, e), {}, { text: t[e.key] }) : e
              })
            var l = !(null === (r = e.location.state) || void 0 === r || !r.focusComposer)
            return (
              (s.state = {
                focused: l,
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
              (s._throttledSyncTexts = Object(Rn.a)(s._syncTexts, 1e3, { leading: !0, trailing: !1 })),
              (s._keyCommandHandlers =
                ((i = {}), b()(i, Eo.b, s.handleTweetOrRetweet), b()(i, Eo.a, s.handleDismissComposer), i)),
              (s._keyCommandHandlersForActiveTypeahead = b()({}, Eo.b, s.handleTweetOrRetweet)),
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
                    l = e.location,
                    u = e.prepopulatedText,
                    d = e.setValidity
                  if (
                    ((this._unblockHistory = this.props.history.block(this._blockHistory)),
                    n.length > 0 && this._attachExternalMedia(0)(n),
                    a.length > 0 && this._handleAddMediaFiles(0)(a),
                    this._handleFetchTweetIfNeeded(),
                    this._handleDeletePreviewTweet(),
                    r(),
                    u || (t && t.cardUrl))
                  ) {
                    var p = c()({}, null)
                    u && (p.text = u), t && t.cardUrl && (p.cardUrl = t.cardUrl), this._updateSingleComposer(p)
                  }
                  ;(u || (t && t.cardUrl) || n.length > 0 || a.length > 0) &&
                    !s &&
                    i.replace({
                      query: Object(Tr.b)(l.query),
                      search: '',
                      pathname: l.pathname,
                      state: Object(go.a)(Object(Tr.b)(l.state || {}), [
                        'defaultText',
                        'externalMedia',
                        'externalMediaFiles',
                      ]),
                    }),
                    d && d(this._areComposersValid()),
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
                    c = n.onRef,
                    l = n.parentTweetId,
                    u = n.replyPressToggle,
                    d = n.setValidity
                  n.windowWidth !== e.windowWidth && this._throttledSyncTexts(),
                    e.onRef && e.onRef !== c && e.onRef(void 0),
                    c && c !== e.onRef && c(this),
                    r.length >= 25 && e.composerData.length < 25 && a({ text: Xo }),
                    o.length > 0 && o !== e.externalMedia
                      ? this._attachExternalMedia(0)(o)
                      : s.length > 0 && s !== e.externalMediaFiles && this._handleAddMediaFiles(0)(s),
                    d && !Object(Co.a)(r, e.composerData) && d && d(this._areComposersValid()),
                    u !== e.replyPressToggle && i(l)
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
                    c = a.composeHeader,
                    l = a.composerData,
                    u = a.customizePropsForSingleComposerItem,
                    d = a.geoEnabled,
                    p = a.history,
                    m = a.inReplyToStatus,
                    h = a.isInline,
                    f = a.isModal,
                    v = a.isSelfThreadReply,
                    g = a.isSending,
                    y = a.isSuperFollowsCreator,
                    _ = a.parentTweetId,
                    b = a.positionCursorAtBeginning,
                    C = a.richTextInputContext,
                    E = a.scheduledFor,
                    T = a.typeaheadWrapper,
                    x = a.userLanguage,
                    S = a.windowWidth,
                    I = this.state,
                    R = I.errorMessage,
                    k = I.focused,
                    M = I.shouldDisableButton,
                    A = I.showAltTextPrompt,
                    L = I.showDiscardTweetConfirmation,
                    P = I.showToxicReplyNudge,
                    D = I.typeaheadActive,
                    O = !f && D,
                    F = h ? 0 : this.props.activeComposerIndex,
                    B = O || h ? [l[F]] : l,
                    N = this._areComposersValid(),
                    V = this.hasNonCompliantQuote && this.isRetweet,
                    j = h ? W.a : vo.a,
                    U = h ? {} : { onAnimateComplete: f ? void 0 : this._handleAnimateComplete },
                    H = M || !N || V || this.isCommunityTweetFromProtectedUser,
                    z = (h && Ti.a.isOneColumnSquishedLayout(S)) || this.isCommunityTweet,
                    G = (h && Ti.a.isOneColumnSquishedLayout(S)) || this.isCommunityTweet || this.isExclusiveTweet
                  return w.a.createElement(
                    W.a,
                    { ref: this._setRootRef, style: !_ && as.root },
                    h ? this._renderProgressBar() : null,
                    R &&
                      w.a.createElement(
                        W.a,
                        { style: as.inlineCallout },
                        w.a.createElement(tt.a, {
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
                      W.a,
                      {
                        onFocus: this._handleFocus,
                        style: [as.content, _ && as.contentInlineReply, f && as.contentModal],
                      },
                      m ? this._renderReplyContext() : null,
                      c,
                      w.a.createElement(
                        j,
                        U,
                        B.map(function (e, t) {
                          var a = Object(jt.h)(e.scheduledFor),
                            c = l.indexOf(e),
                            I = u(e, t, B),
                            R =
                              f || h
                                ? w.a.createElement(
                                    K.a,
                                    {
                                      behavioralEventContext: es,
                                      disabled: H,
                                      onPress: n.handleTweetOrRetweet,
                                      size: 'medium',
                                      style: as.inlineSendButton,
                                      testID: f ? xi : Si,
                                      type: 'brandFilled',
                                    },
                                    Object(To.b)({
                                      inReplyToStatus: !!m,
                                      isSelfThreadReply: !!v,
                                      isQuoteTweet: !!n.isQuoteTweet,
                                      isRetweet: !!n.isRetweet,
                                      isScheduled: !!a,
                                      isThread: n.isThread,
                                    }),
                                  )
                                : null,
                            M = n._getSingleComposerDataWithLatestText(e)
                          return w.a.createElement(
                            W.a,
                            { key: e.key },
                            w.a.createElement(
                              cr,
                              r()(
                                {
                                  addComposerLink: n._makeAddComposerLink(h, v, _),
                                  addToast: o,
                                  additionalToolbarContent: R,
                                  audienceControlsValue: s,
                                  autoFocus: n.isInlineReply && k,
                                  data: M,
                                  disableAddTweet: l.length >= 25,
                                  editable: !g && !!i,
                                  fetchAutotaggedLocationIfNeeded: n._fetchAutotaggedLocationIfNeeded,
                                  geoEnabled: d,
                                  hidePoll: z,
                                  hideScheduling: G,
                                  history: p,
                                  index: c,
                                  isActive: c === F && !g,
                                  isCommunityTweetFromProtectedUser: n.isCommunityTweetFromProtectedUser,
                                  isExpanded: 0 !== t || n._shouldBeExpanded(),
                                  isInline: h,
                                  isInlineReply: n.isInlineReply,
                                  isLast: h || c === l.length - 1,
                                  isReply: !!m || n.isInlineReply,
                                  isSelfThreadReply: !!v,
                                  isSuperFollowsCreator: y,
                                  keyCommandHandlers: n._getKeyCommandHandlers(),
                                  loggedInUser: i,
                                  onAddComposer: n._handleAddComposer,
                                  onFilesAdded: n._handleAddMediaFiles(c),
                                  onFocus: n._handleComposerFocus,
                                  onRemoveComposer: n._handleRemoveComposer,
                                  onRemoveMedia: n._handleMediaRemove,
                                  onTextChange: n._handleTextChange,
                                  onTextInputBlur: n._handleTextOnBlur(M.key, t),
                                  onTypeaheadStateChange: n._handleTypeaheadStateChange,
                                  positionCursorAtBeginning: !!b,
                                  ref: n._setComposerRef(c),
                                  richTextInputContext: C,
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
                      L
                        ? this._canSaveDraft
                          ? w.a.createElement(ho.a, {
                              cancelButtonLabel: Uo,
                              confirmButtonLabel: Wo,
                              headline: Ho,
                              onCancel: this._handleConfirmDiscardTweet,
                              onConfirm: this._handleDraftTweet,
                              onMaskClick: this._handleCancelDiscardTweet,
                              text: zo,
                            })
                          : w.a.createElement(ho.a, {
                              confirmButtonLabel: Uo,
                              confirmButtonType: 'destructiveFilled',
                              headline: this.isThread ? Vo : No,
                              onCancel: this._handleCancelDiscardTweet,
                              onConfirm: this._handleConfirmDiscardTweet,
                              text: jo,
                            })
                        : null,
                      A ? this._renderAltTextPrompt() : null,
                      P ? this._renderToxicReplyNudge() : null,
                      w.a.createElement(W.a, { style: g && as.mask }),
                    ),
                  )
                },
              },
              {
                key: '_scribe',
                value: function (e, t) {
                  this.props.analytics.scribe(c()(c()({}, e), {}, { data: t }))
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
                    ? ts.Quote
                    : this.isThread
                    ? ts.Thread
                    : this.isReply
                    ? ts.Reply
                    : ts.Original
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
                    c =
                      null == this ||
                      null === (n = this.context) ||
                      void 0 === n ||
                      null === (a = n.featureSwitches) ||
                      void 0 === a
                        ? void 0
                        : a.isTrue('subscriptions_undo_quote_tweets_enabled'),
                    l =
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
                      ('quote' === this.tweetType && c) ||
                      ('thread' === this.tweetType && l)) &&
                    (!o || void 0 === o[this.tweetType] || o[this.tweetType])
                  )
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(ns, 'defaultProps', {
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
        typeaheadWrapper: yi.a,
      }),
        b()(ns, 'contextType', I.a),
        b()(ns, '_validateMedia', function (e, t) {
          var n = e.media
          return Object(S.c)(n.concat(t))
        })
      var as = F.a.create(function (e) {
        return {
          root: { paddingBottom: e.spaces.space4 },
          content: { paddingVertical: e.spaces.space4, backgroundColor: e.colors.cellBackground },
          contentModal: { borderBottomLeftRadius: e.borderRadii.xLarge, borderBottomRightRadius: e.borderRadii.xLarge },
          contentInlineReply: { paddingVertical: e.componentDimensions.gutterVertical },
          mask: c()({}, F.a.absoluteFillObject),
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
      t.a = Object(yt.a)(di(ns))
    },
    hiGS: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
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
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    hqDb: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('VrFO'),
        c = n.n(s),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        m = n('5Yy7'),
        h = n.n(m),
        f = n('2VqO'),
        v = n.n(f),
        g = n('KEM+'),
        y = n.n(g),
        _ = (n('2G9S'), n('ERkP')),
        b = n.n(_),
        C = n('k49u'),
        w = (n('LW0h'), n('7x/C'), n('KOtZ'), n('vrRf'), n('6xIQ')),
        E = n('kGix'),
        T = n('G6rE'),
        x = n('rxPX'),
        S = n('0KEI'),
        I = function (e, t) {
          return t.userIds
        },
        R = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!T.e.select(e, t)
          })
        },
        k = function (e, t) {
          return t.userIds.reduce(function (t, n) {
            var a = T.e.selectFetchStatus(e, n)
            return (t[n] = a === E.a.NONE ? E.a.LOADING : a), t
          }, {})
        },
        M = Object(x.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(w.a)(R, function (e) {
                return e
              }),
              fetchStatus: Object(w.a)(R, k, I, function (e, t, n) {
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
        A = n('v//M'),
        L = n('3XMw'),
        P = n.n(L),
        D = n('pQ3Z'),
        O = n.n(D),
        F = (n('z84I'), n('cFuS')),
        B = n('Re5t'),
        N = n('MWbm'),
        V = n('88ay'),
        j = function (e) {
          var t = e.displayMode,
            n = e.renderUserCell,
            a = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return b.a.createElement(
            N.a,
            null,
            a.map(function (e, a) {
              return n
                ? n(e)
                : b.a.createElement(V.b, {
                    decoration: V.e,
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
        H = ['availableUserIds', 'createLocalApiErrorHandler', 'fetchStatus', 'fetchUsersIfNeeded', 'userIds'],
        z = P.a.f5b426c2,
        W = { viewType: 'user_list' },
        G = M(
          (function (e) {
            h()(n, e)
            var t = v()(n)
            function n() {
              var e
              c()(this, n)
              for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                y()(p()(e), 'state', { allUsersUnavailable: !1 }),
                y()(p()(e), '_renderContent', function () {
                  var t = e.props,
                    n = t.availableUserIds,
                    a = (t.createLocalApiErrorHandler, t.fetchStatus, t.fetchUsersIfNeeded, t.userIds, o()(t, H))
                  return b.a.createElement(U, r()({}, a, { userIds: n }))
                }),
                y()(p()(e), '_handleFetch', function () {
                  e._fetchUsersIfNeeded()
                }),
                e
              )
            }
            return (
              u()(n, [
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
                    return b.a.createElement(A.a, {
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
          })(b.a.Component),
        )
      t.a = G
    },
    hxu0: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return o.a.createElement(s.a.Consumer, null, function (n) {
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
        s = n('ERkP'),
        c = n.n(s),
        l = n('t62R'),
        u = n('I4+6'),
        d = n('cm6r'),
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
          v = u.a.generate({
            backgroundColor: p.a.theme.colors.transparent,
            color: p.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return c.a.createElement(
          m.a,
          { style: f.container },
          c.a.createElement(
            d.a,
            r()({}, s, { interactiveStyles: v, style: f.root }),
            c.a.createElement(l.b, { align: n, color: a }, i),
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
        c = n('RuTB'),
        l = n('3XMw'),
        u = n.n(l),
        d = Object(s.a)({
          loader: function () {
            return u.a.emoji.then(function () {
              return Promise.all([n.e(0), n.e(18), n.e(212)]).then(n.bind(null, '5RdJ'))
            })
          },
          renderPlaceholder: function (e, t) {
            return o.a.createElement(c.a, { hasError: e, onRetry: t })
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
        _ = function (e) {
          var t = e.onSelect,
            n = e.partialRender,
            a = v.a.get() > 1 ? m : p
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              g.a,
              { style: [y.content, y.dimensions] },
              o.a.createElement(d, { onSelect: t, partialRender: n, rowSize: 9, spriteUrl: a }),
            ),
            o.a.createElement(f.a, { source: a, style: y.hidden }),
          )
        },
        b = n('pNJr'),
        C = n('2ZFc'),
        w = n('OiMc'),
        E = n('/yvb'),
        T = u.a.d4a4842d,
        x = o.a.createElement(b.a, null),
        S = u.a.fec16c1c,
        I = { viewType: 'emoji_picker' },
        R = function (e) {
          var t = e.disabled,
            n = e.onEmojiSelect,
            a = e.onPress,
            i = e.size,
            s = e.style,
            c = e.textInputRef,
            l = o.a.useState(!0),
            u = r()(l, 2),
            p = u[0],
            m = u[1]
          o.a.useEffect(function () {
            var e = setTimeout(function () {
              d.preload(), C.a.get('emojiPicker2')
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
                  return c && c.focus()
                })
              },
              renderContent: function () {
                return o.a.createElement(_, { onSelect: n, partialRender: p })
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
        return l
      }),
        n.d(t, 'a', function () {
          return u
        }),
        n.d(t, 'c', function () {
          return d
        })
      n('jQ3i'), n('x4t0')
      var a = n('3XMw'),
        r = n.n(a),
        i = r.a.g34f2c63,
        o = r.a.f70a36d0,
        s = r.a.d17df547,
        c = r.a.h735a98d,
        l = function (e) {
          var t = e.inReplyToStatus && !e.isSelfThreadReply
          return e.isScheduled ? c : t ? s : e.isThread ? o : i({ verb: '' })
        },
        u = function (e, t) {
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
        d = function (e) {
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
        return u
      }),
        n.d(t, 'c', function () {
          return d
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
        c = n('kIAd'),
        l = n('rHpw')
      function u(e, t) {
        var n,
          a = c.b.scoper.find(function (a) {
            if (-1 !== a.srcInputs.indexOf(t)) return (n = e.match(a.regexp))
          }),
          r = ''
        return n && (r = n && (1 === n.length ? n[0] : n[1])), a ? o()(o()({}, a.scope), {}, { src: t, q: r }) : null
      }
      function d(e, t) {
        var n = t.slice(0, e),
          a = t.slice(e, t.length),
          r = n.search(c.b.WordEnd),
          i = r >= 0 ? n.slice(r) : '',
          o = a.search(c.b.WordBoundary),
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
            paddingBottom: 'calc(2.5 * '.concat(l.a.theme.spaces.space64, ')'),
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
        s = n('VrFO'),
        c = n.n(s),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        m = n('5Yy7'),
        h = n.n(m),
        f = n('2VqO'),
        v = n.n(f),
        g = n('KEM+'),
        y = n.n(g),
        _ = (n('2G9S'), n('ERkP')),
        b = n.n(_),
        C = n('38/B'),
        w = n('t62R'),
        E = n('/yvb'),
        T = n('piX5'),
        x = n('3XMw'),
        S = n.n(x),
        I = n('tI3i'),
        R = n.n(I),
        k = n('oQhu'),
        M = n('rHpw'),
        A = n('aITJ'),
        L = n('MWbm'),
        P = n('n5fo'),
        D = n('5emT'),
        O = n('Oib4'),
        F = n('WtWS'),
        B = n('ioan'),
        N = [
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
        V = function (e) {
          return e.length
        },
        j = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V
          return t(e)
        },
        U = S.a.de540c32,
        H = S.a.b4abfdb3,
        z = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            c()(this, n),
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
                Object(k.a)(function (e) {
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
                  c =
                    null === (n = a._textInput) ||
                    void 0 === n ||
                    null === (r = n.textInputNode) ||
                    void 0 === r ||
                    null === (i = r.validity) ||
                    void 0 === i
                      ? void 0
                      : i.badInput
                return 'number' === o && '' === s && !0 === c
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
              y()(p()(a), '_handleFocus', function (e) {
                var t = a.props.onFocus
                a.setState({ isFocused: !0 }), t && t(e)
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
                A.b.isKaiOS() && 'Backspace' === e.key && n ? (a._blurOnBackspaceKeyUpForKaiOS = n) : t && t(e)
              }),
              y()(p()(a), '_handleKeyUp', function (e) {
                var t = a.props.onKeyUp
                A.b.isKaiOS() &&
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
                actualCount: V(i),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: i,
              }),
              a
            )
          }
          return (
            u()(
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
                      c = e.validLength,
                      l = e.value
                    ;(c === r && n === o && !!a === !!s && ('string' == typeof i) === ('string' == typeof l)) ||
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
                    return b.a.createElement(
                      L.a,
                      { style: [G.root, i] },
                      b.a.createElement(
                        L.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            T.a.border,
                            G.textInputFormStyle,
                            s && T.a.invalidBorderColor,
                            o && s && T.a.focusedBorderInvalid,
                            o && !s && T.a.focusedBorderValid,
                            !n && T.a.disabled,
                          ],
                        },
                        b.a.createElement(
                          L.a,
                          { style: G.textInputFormWrapper },
                          b.a.createElement(
                            L.a,
                            { style: G.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      b.a.createElement(
                        L.a,
                        { style: [G.sidePadding, G.underTextInputForm] },
                        b.a.createElement(
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
                    return b.a.createElement(
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
                      i = (e.style, e.type, e.validLength, o()(e, N))
                    return b.a.createElement(
                      L.a,
                      { style: W.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      b.a.createElement(
                        w.b,
                        { size: 'headline1', style: W.wrapper },
                        b.a.createElement(
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
                      ? b.a.createElement(
                          L.a,
                          { style: G.passwordVisibilityIconContainer },
                          b.a.createElement(E.a, {
                            accessibilityLabel: a ? H : U,
                            focusable: !0,
                            hoverLabel: { label: a ? H : U },
                            icon: a ? b.a.createElement(P.a, null) : b.a.createElement(D.a, null),
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
                    return b.a.createElement(
                      L.a,
                      { accessibilityLiveRegion: 'polite' },
                      b.a.createElement(
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
                    return b.a.createElement(
                      L.a,
                      { accessibilityLiveRegion: 'assertive' },
                      b.a.createElement(
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
                    return b.a.createElement(
                      L.a,
                      { accessibilityLiveRegion: 'polite', style: [G.textInputHeaderItem, G.displayCount] },
                      b.a.createElement(
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
                    return e && b.a.createElement(e, { style: n })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? b.a.createElement(O.a, { style: [G.validationIcon, T.a.invalidColor] })
                      : b.a.createElement(F.a, { style: [G.validationIcon, T.a.validColor] })
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
        })(b.a.Component)
      y()(z, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (z.propTypes = {})
      var W = M.a.create(function (e) {
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
        G = M.a.create(function (e) {
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
        c = n.n(s),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        v = n.n(f),
        g = (n('2G9S'), n('KqXw'), n('MvUL'), n('uFXj'), n('ERkP')),
        y = n.n(g),
        _ = n('HPNB'),
        b = n('h5NW'),
        C = n('m3Bd'),
        w = n.n(C),
        E = (n('vrRf'), n('z84I'), n('LW0h'), n('7x/C'), n('5BYb'), n('xVN5')),
        T = n('pidX'),
        x = n('AspN'),
        S = n('XOJV'),
        I = n('G6rE'),
        R = n('xZGM'),
        k = n('0KEI'),
        M = n('hqKg'),
        A = n('oEGd'),
        L = n('rU/Q'),
        P = n('XpKj'),
        D = ['cardUrl', 'mediaIds'],
        O = function (e) {
          return function (t, n) {
            var a = (function (e, t) {
              return t.location.state
            })(0, n)
            return a ? e(a) : void 0
          }
        },
        F = Object(M.createSelector)(
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
        N = O(function (e) {
          return e.inReplyToStatusId
        }),
        V = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        j = O(function (e) {
          return e.defaultText
        }),
        U = O(function (e) {
          return e.quotedStatus
        }),
        H = O(function (e) {
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
        K = O(function (e) {
          return e.selectedCommunityId
        }),
        q = Object(M.createSelector)(
          function (e) {
            return E.k(e, '')
          },
          function (e, t) {
            var n = j(e, t)
            return Object(T.a)(t.location) || n
          },
          function (e, t) {
            return t.quotedStatus ? t.quotedStatus : U(e, t)
          },
          x.j,
          V,
          function (e, t, n, a, i) {
            return e.map(function (e, o) {
              return r()(
                r()({}, ((s = e).cardUrl, s.mediaIds, w()(s, D))),
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
        X = Object(M.createStructuredSelector)({
          activeUser: F,
          composerData: q,
          draftTweets: L.e,
          inReplyToStatus: function (e, t) {
            var n = B(0, t) || N(e, t)
            return n ? S.a.selectHydrated(e, n) : void 0
          },
          inReplyToStatusId: B,
          isIntentRoute: V,
          isSelfThreadReply: H,
          isSending: function (e) {
            return E.m(e, '')
          },
          scheduledTweets: P.f,
          sendingProgress: E.o,
          composeSemanticCoreId: O(function (e) {
            return e.composeSemanticCoreId
          }),
          hideUnsentTweetsButton: z,
          subtitle: W,
          title: G,
          selectedCommunityIdFromLocationState: K,
          shouldShowCommunityAudienceEducation: function (e, t) {
            return Object(R.A)(e, R.e)
          },
        }),
        Y = {
          createDraftTweetApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(L.d),
          createScheduledTweetApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(P.d),
          fetchScheduledTweets: P.c,
          fetchDraftTweets: L.c,
          addCommunityAudienceEducationFlag: function () {
            return Object(R.w)(R.e)
          },
          updateAudienceControlsValue: E.t,
        },
        Q = Object(A.f)(X, Y),
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
          return Object(R.A)(e, R.p)
        },
        ce = Object(oe.a)()
          .propsFromState(function () {
            return { shouldShowNewsletterCallout: se }
          })
          .propsFromActions(function () {
            return { addFlag: R.w }
          }),
        le = n('Lsrn'),
        ue = n('k/Ka'),
        de = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ue.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [le.a.root, e.style],
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
      de.metadata = { width: 32, height: 32 }
      var pe = de,
        me = n('MWbm'),
        he = n('4zmP'),
        fe = n('rHpw'),
        ve = ne.a.ed33a3b6,
        ge = ne.a.d5bda8b3,
        ye = ne.a.i859a9d3,
        _e = fe.a.create(function (e) {
          return { revueCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 } }
        }),
        be = ce(function (e) {
          var t = e.addFlag,
            n = e.shouldShowNewsletterCallout,
            a = y.a.useContext(ie.a).featureSwitches.isTrue('responsive_web_newsletters_callout_enabled')
          return n && a
            ? y.a.createElement(
                me.a,
                { style: _e.revueCallout },
                y.a.createElement(he.a, {
                  Icon: pe,
                  action: {
                    label: ye,
                    link: 'https://www.getrevue.co?utm_source=twitter-threads&utm_campaign=announcement-callout&utm_content=learn-more',
                  },
                  headline: ve,
                  onClose: function () {
                    t(R.p)
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
        Te = n('zh9S'),
        xe = n('7JQg'),
        Se = 'tweetButton',
        Ie = n('/yvb'),
        Re = n('JYMr'),
        ke = n('cHvH'),
        Me = n('feu+'),
        Ae = n('7N4s'),
        Le = n('oQhu'),
        Pe = n('3A2y'),
        De = ne.a.b8f0483e,
        Oe = ne.a.a133d13e,
        Fe = ne.a.a1183237,
        Be = ne.a.da2663f5,
        Ne = ne.a.j24c37b2,
        Ve = 'compose',
        je = { page: Ve },
        Ue = { page: Ve, section: 'reply' },
        He = { context: 'compose_intent_logged_in' },
        ze = { viewType: 'send_tweet' },
        We = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(u()(e), 'state', { isValid: !1 }),
              v()(u()(e), '_handleDismissCommunityAudienceEducation', function () {
                e.props.addCommunityAudienceEducationFlag()
              }),
              v()(
                u()(e),
                '_handleAppBarHeight',
                Object(Le.a)(function () {
                  var t = we.a.findDOMNode(e._appBarRef)
                  return (t && t instanceof window.Element && t.getBoundingClientRect().height) || 50
                }),
              ),
              v()(u()(e), '_handleBackClick', function () {
                e._composeContainerRef && e._composeContainerRef.handleDismissComposer()
              }),
              v()(u()(e), '_handleCloseComposer', function () {
                e._appBarRef && e._appBarRef.goBack()
              }),
              v()(u()(e), '_handleSendTweet', function () {
                e._composeContainerRef && e._composeContainerRef.handleTweetOrRetweet()
              }),
              v()(u()(e), '_setValidity', function (t) {
                t !== e.state.isValid && e.setState({ isValid: t })
              }),
              v()(u()(e), '_getScribeNamespace', function () {
                return e.props.inReplyToStatus || e.props.inReplyToStatusId ? Ue : je
              }),
              v()(u()(e), '_getScribeData', function () {
                var t = e.props,
                  n = t.activeUser
                return t.isIntentRoute && n ? He : Z.a
              }),
              v()(u()(e), '_renderAppBarRightControl', function () {
                var t = e.state.isValid,
                  n = e.context.isModal,
                  a = e.props,
                  r = a.activeUser,
                  i = a.inReplyToStatus,
                  o = a.isSelfThreadReply,
                  s = a.isSending,
                  c = !t || s || !r
                return n
                  ? void 0
                  : y.a.createElement(
                      Ie.a,
                      {
                        behavioralEventContext: ze,
                        disabled: c,
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
              v()(u()(e), '_renderHeaderWithProgressBar', function (t) {
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
              v()(u()(e), '_renderUnsentHeading', function () {
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
              v()(u()(e), '_handleOpenUnsent', function () {
                var t = e.props.history
                Object(Te.c)(r()(r()({}, e._getScribeNamespace()), {}, { element: 'unsent_tweets', action: 'click' })),
                  t.push('/compose/tweet/unsent/drafts')
              }),
              v()(u()(e), '_setAppBarRef', function (t) {
                e._appBarRef = t
              }),
              v()(u()(e), '_handleComposeContainerRef', function (t) {
                e._composeContainerRef = t
              }),
              e
            )
          }
          return (
            c()(n, [
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
                    c = e.location,
                    l = e.selectedCommunityIdFromLocationState,
                    u = e.updateAudienceControlsValue
                  ;(this._unlockReload = Ee.a.acquire()),
                    o.setModalRouteBreakpoint(o.location),
                    t && (i().catch(a()), r().catch(n())),
                    l &&
                      (u({
                        _type: 'community_members',
                        communityIdValue: l,
                        conversationControlsValue: 'community_members',
                      }),
                      o.replace({ pathname: c.pathname, state: Object(Pe.a)(c.state || {}, 'selectedCommunityId') })),
                    null != s && s.exclusivity_info
                      ? u({
                          _type: 'super_followers_exclusive',
                          conversationControlsValue: 'super_followers_exclusive',
                          exclusivityControlValue: {},
                        })
                      : null != s && s.community_id_str
                      ? u({
                          _type: 'community_members',
                          communityIdValue: s.community_id_str,
                          conversationControlsValue: 'community_members',
                        })
                      : null != s &&
                        s.trusted_friends_tweet &&
                        u({
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
                    c = t.isIntentRoute,
                    l = t.location,
                    u = t.quotedStatus,
                    d = t.richTextInputContext,
                    p = t.subtitle,
                    m = t.title,
                    h = t.typeaheadWrapper,
                    f = c && !n,
                    v = this.context.isModal
                  return y.a.createElement(
                    xe.c,
                    { data: this._getScribeData(), namespace: this._getScribeNamespace() },
                    y.a.createElement(ke.a, null, function (t) {
                      var c = t.windowWidth,
                        g = _.a.shouldRenderAsModal(c),
                        C = (f || e.showCommunityAudienceEducation) && g,
                        w = (null == i ? void 0 : i.length) > 1
                      return y.a.createElement(
                        y.a.Fragment,
                        null,
                        e.showCommunityAudienceEducation
                          ? y.a.createElement(Me.a, {
                              actionLabel: Ne,
                              graphicDisplayMode: 'none',
                              headline: Fe,
                              onAction: e._handleDismissCommunityAudienceEducation,
                              onClose: e._handleDismissCommunityAudienceEducation,
                              subtext: Be,
                              withCloseButton: !1,
                            })
                          : null,
                        f && y.a.createElement(ae.a, { history: s, location: l }),
                        !C &&
                          y.a.createElement(
                            y.a.Fragment,
                            null,
                            y.a.createElement(
                              $.b,
                              {
                                appBarRef: e._setAppBarRef,
                                behavioralEventViewType: Ve,
                                documentTitle: De,
                                hideBackButton: !1,
                                history: s,
                                middleControl: e._renderUnsentHeading(),
                                onBackClick: e._handleBackClick,
                                renderHeader: e._renderHeaderWithProgressBar,
                                rightControl: e._renderAppBarRightControl(),
                                subtitle: p,
                                title: m,
                              },
                              y.a.createElement(b.a, {
                                activeUser: n,
                                composeHeader: a,
                                composeSemanticCoreId: r,
                                customizePropsForSingleComposerItem: o,
                                history: s,
                                isModal: v,
                                location: l,
                                onCloseComposer: e._handleCloseComposer,
                                onHandleAppBarHeight: e._handleAppBarHeight,
                                onRef: e._handleComposeContainerRef,
                                quotedStatus: u,
                                richTextInputContext: d,
                                setValidity: e._setValidity,
                                typeaheadWrapper: h,
                                windowWidth: c,
                              }),
                            ),
                            w ? y.a.createElement(be, null) : null,
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
      v()(We, 'contextType', Ae.b)
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
        return u
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
        c = o.a.b2e94283,
        l = ['title', 'screen_name', 'text', 'url', 'hashtags', 'via']
      t.a = function (e) {
        var t = e.state || {},
          n = e.query || {},
          a = l.map(function (e) {
            return t[e] || n[e]
          }),
          i = r()(a, 6),
          o = i[0],
          s = i[1],
          u = i[2],
          d = i[3],
          p = i[4],
          m = i[5],
          h = [
            o,
            s && '@'.concat(s.toString()),
            u,
            d,
            p &&
              p
                .toString()
                .split(',')
                .map(function (e) {
                  return '#'.concat(e)
                })
                .join(' '),
            m && c({ viaScreenName: m }),
          ]
            .filter(Boolean)
            .join(' ')
        return h ? ''.concat(h).concat(' ') : void 0
      }
      var u = function (e) {
        return Object(s.a)(e, l)
      }
    },
    rFBM: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('hCOa'), n('87if'), n('ERkP')),
        v = n.n(f),
        g = n('rHpw'),
        y = n('k/Ka'),
        _ = n('MWbm'),
        b = function (e) {
          return Object(y.a)('div', e)
        },
        C = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), '_dragEnterCount', 0),
              h()(c()(e), 'state', { active: !1 }),
              h()(c()(e), '_handleDragDrop', function (t) {
                var n = e.props.onFilesAdded
                t.preventDefault(), n(Array.from(t && t.dataTransfer.files)), e._updateDragCount(0)
              }),
              h()(c()(e), '_handleDragEnter', function (t) {
                var n = e.props.onDragEnter
                t.preventDefault(), n && n(), e._updateDragCount(e._dragEnterCount + 1)
              }),
              h()(c()(e), '_handleDragLeave', function (t) {
                t.preventDefault(), e._updateDragCount(e._dragEnterCount - 1)
              }),
              h()(c()(e), '_handleDragOver', function (e) {
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
                    b,
                    {
                      onDragEnter: this._handleDragEnter,
                      onDragLeave: this._handleDragLeave,
                      onDragOver: this._handleDragOver,
                      onDrop: this._handleDragDrop,
                      style: [w.root, a, r && i],
                    },
                    v.a.createElement(_.a, { style: w.inner }, 'function' == typeof n ? n(r) : n),
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
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('z84I'), n('7x/C'), n('JtPf'), n('DfhM'), n('ERkP')),
        v = n.n(f),
        g = n('zfvc'),
        y = n('RhWx'),
        _ = n.n(y),
        b = (n('yH/f'), n('M+/F'), n('zrc3')),
        C = Object.freeze({ in: 'in', out: 'out', static: 'static' }),
        w = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), 'state', {
                isAnimating: !1,
                renderChildren: v.a.Children.toArray(e.props.children).map(function (e) {
                  return { status: C.static, child: e }
                }),
              }),
              h()(c()(e), '_handleEachAnimateComplete', function () {
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
                                  _()(
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
                              var s = Object(b.a)(t, function (e) {
                                return e.key === o.key
                              })
                              s >= 0
                                ? (r.push.apply(
                                    r,
                                    _()(
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
                            _()(
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
    ulNE: function (e, t, n) {
      'use strict'
      var a = n('ax0f'),
        r = n('42ly'),
        i = n('N9G2'),
        o = n('BIH/'),
        s = n('lhaq'),
        c = n('aoZ+')
      a(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = i(this),
              n = o(t),
              a = c(t, 0)
            return (a.length = r(a, t, t, n, 0, void 0 === e ? 1 : s(e))), a
          },
        },
      )
    },
    'urw/': function (e, t, n) {
      n('7St7')('flat')
    },
    vOV5: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'PlacePickerScreen', function () {
          return ce
        })
      var a = n('RhWx'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        v = n.n(f),
        g = (n('2G9S'), n('LW0h'), n('7x/C'), n('jQ3i'), n('x4t0'), n('z84I'), n('KqXw'), n('LJOr'), n('ERkP')),
        y = n.n(g),
        _ = n('a/ea'),
        b = n('/Rsk'),
        C = n('P1r1'),
        w = n('xVN5'),
        E = n('RqPI'),
        T = n('rxPX'),
        x = n('0KEI'),
        S = Object(T.a)()
          .propsFromState(function () {
            return {
              autotaggedLocation: b.d,
              initialResults: b.f,
              initialFetchStatus: b.e,
              lastSearchResults: b.h,
              lastSearchFetchStatus: b.g,
              position: _.d,
              taggedLocation: w.p,
              userCountry: E.y,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)('PLACE_PICKER'),
              loadGeoLocation: _.a,
              fetchInitialPlacesIfNeeded: b.b,
              searchPlaces: b.c,
              updateLastSelectedPlace: b.i,
              updateSettings: C.M,
              updateSingleComposer: w.w,
            }
          })
          .withAnalytics({ page: 'compose', section: 'place_picker' }),
        I = n('kGix'),
        R = n('v//M'),
        k = n('jHSc'),
        M = n('M6MT'),
        A = n('3XMw'),
        L = n.n(A),
        P = n('MWbm'),
        D = n('pjBI'),
        O = n('t62R'),
        F = n('CKsB'),
        B = n('/yvb'),
        N = n('6OUF'),
        V = n('cmUU'),
        j = n('rHpw'),
        U =
          (n('hBpG'),
          (function () {
            function e(t, n, a) {
              o()(this, e), (this.formatter = t), (this.fallbackFormatter = n), (this.fallbackRatio = a)
            }
            return (
              c()(e, [
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
        H = new U(L.a.b01ed2da, L.a.i83e29e0, 5280),
        z = new U(L.a.d4b7cff7, L.a.b211849e, 1e3),
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
        ce = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e) {
            var a
            o()(this, n),
              (a = t.call(this, e)),
              v()(u()(a), 'state', {
                activeResultSet: Y.c.initial,
                geoLocationError: void 0,
                query: '',
                selectedLocation: void 0,
                showSearchForButton: !1,
              }),
              v()(u()(a), '_appBarRef', y.a.createRef()),
              v()(u()(a), '_fetchInitialPlaces', function () {
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
              v()(u()(a), '_getActiveResults', function () {
                var e = a.props,
                  t = e.initialResults,
                  n = e.lastSearchResults
                return a.state.activeResultSet === Y.c.initial ? t : n
              }),
              v()(u()(a), '_selectResults', function () {
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
              v()(u()(a), '_goBack', function () {
                var e
                null === (e = a._appBarRef.current) || void 0 === e || e.goBack()
              }),
              v()(u()(a), '_setTaggedLocation', function (e) {
                var t = a.props,
                  n = t.updateLastSelectedPlace,
                  r = t.updateSettings
                ;(0, t.updateSingleComposer)({ updates: { taggedLocation: e } }),
                  n(e),
                  r({ shouldAutoTagLocation: !!e })
              }),
              v()(u()(a), '_handleBack', function () {
                return a._goBack()
              }),
              v()(u()(a), '_handleDone', function () {
                var e = a.state.selectedLocation
                e && a._setTaggedLocation(e), a._goBack()
              }),
              v()(u()(a), '_handleRemove', function () {
                a._setTaggedLocation(null), a._goBack()
              }),
              v()(u()(a), '_handleRetry', function () {
                var e = a.props.searchPlaces,
                  t = a.state,
                  n = t.activeResultSet,
                  r = t.query
                n === Y.c.initial ? a._fetchInitialPlaces() : e(r)
              }),
              v()(u()(a), '_handleLocationDisabledPromptDismiss', function () {
                a.props.history.goBack()
              }),
              v()(u()(a), '_handleChange', function (e) {
                var t = e.currentTarget.value,
                  n = t.length ? a.state.activeResultSet : Y.c.initial
                a.setState({ activeResultSet: n, query: t, showSearchForButton: !!t.length })
              }),
              v()(u()(a), '_handleClear', function () {
                a.setState({ activeResultSet: Y.c.initial, query: '' })
              }),
              v()(u()(a), '_handleSubmit', function () {
                var e = a.state.query,
                  t = a.props.searchPlaces
                e.length && (a.setState({ activeResultSet: Y.c.lastSearch, showSearchForButton: !1 }), t(e))
              }),
              v()(u()(a), '_handlePlaceClick', function (e) {
                return function () {
                  a._setTaggedLocation(e), a._goBack()
                }
              }),
              v()(u()(a), '_renderPlaceSubtext', function (e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  s,
                  c = a.props,
                  l = c.position,
                  u = c.userCountry,
                  d = e.place,
                  p = d.attributes.street_address,
                  m = d.centroid
                if (p && m && 2 === m.length && l) {
                  var h =
                    ((t = { lat: l.coords.latitude, long: l.coords.longitude }),
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
                          return H.format(e)
                        var n = e * W
                        return z.format(n)
                      })(h, u),
                    ),
                  )
                }
              }),
              v()(u()(a), '_renderPlace', function (e) {
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
              v()(u()(a), '_renderPlaces', function (e) {
                return e.length
                  ? e.map(function (e) {
                      return a._renderPlace(e)
                    })
                  : y.a.createElement(O.b, { align: 'center', style: le.noPlacesText }, te)
              }),
              v()(u()(a), '_renderAttributionIfNeeded', function () {
                var e = a._getActiveResults()
                return null != e && e.attributions.has(Y.b.foursquare)
                  ? y.a.createElement(K.a, { style: le.foursquareIcon })
                  : null
              }),
              v()(u()(a), '_renderResults', function () {
                var e = a.state,
                  t = e.query,
                  n = e.showSearchForButton,
                  r = a._selectResults()
                return y.a.createElement(
                  P.a,
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
              v()(u()(a), '_renderRightControl', function () {
                return y.a.createElement(
                  P.a,
                  { style: le.actionButtonContainer },
                  y.a.createElement(
                    B.a,
                    { onPress: a._handleRemove, size: 'small', style: le.actionButton, type: 'primaryText' },
                    ae,
                  ),
                  y.a.createElement(
                    B.a,
                    { onPress: a._handleDone, size: 'small', style: le.actionButton, type: 'primaryFilled' },
                    Q,
                  ),
                )
              }),
              v()(u()(a), '_renderGeoPicker', function () {
                var e = a.props,
                  t = e.history,
                  n = e.initialFetchStatus,
                  r = e.lastSearchFetchStatus,
                  i = a.state.activeResultSet === Y.c.initial ? n : r
                return y.a.createElement(
                  k.b,
                  {
                    appBarRef: a._appBarRef,
                    history: t,
                    onBackClick: a._handleBack,
                    rightControl: a._renderRightControl(),
                    title: oe,
                  },
                  y.a.createElement(N.a, {
                    Icon: q.a,
                    onChange: a._handleChange,
                    onClear: a._handleClear,
                    onSubmitEditing: a._handleSubmit,
                    placeholder: re,
                    style: le.search,
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
              v()(u()(a), '_renderLocationDisabledPrompt', function () {
                var e = a.state.geoLocationError,
                  t = $,
                  n = ee
                return (
                  e && e.code === M.a.PERMISSION_DENIED && ((t = J), (n = Z)),
                  y.a.createElement(V.a, {
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
              c = e.taggedLocation
            return c ? (a.state.selectedLocation = c) : s && (a.state.selectedLocation = i), a
          }
          return (
            c()(n, [
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
        le = j.a.create(function (e) {
          return {
            search: { marginHorizontal: e.spaces.space16, flexGrow: 0 },
            actionButtonContainer: { flexDirection: 'row' },
            actionButton: { marginLeft: e.spaces.space12 },
            noPlacesText: { marginVertical: e.spaces.space16 },
            foursquareIcon: { marginVertical: e.spaces.space16, fill: e.colors.gray700 },
          }
        }),
        ue = S(ce)
      t.default = ue
    },
    w3n3: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('/yvb'),
        o = n('3XMw'),
        s = n.n(o),
        c = n('3rWK'),
        l = n('Irs7'),
        u = s.a.a4993fa1,
        d = r.a.createElement(c.a, null),
        p = s.a.i0db46e6,
        m = { viewType: 'gif_search' }
      t.a = function (e) {
        var t = e.dmConversationId,
          n = e.enabled,
          a = void 0 === n || n,
          o = e.gifSearchKeySource,
          s = e.history,
          c = e.onPress,
          h = e.style,
          f = e.testID,
          v = Object(l.b)(),
          g = r.a.useCallback(
            function () {
              c && c(),
                v.scribe({ element: 'found_media_button', action: 'click' }),
                s.push({ pathname: '/i/foundmedia/search', state: { gifSearchKeySource: o, dmConversationId: t } })
            },
            [t, v, o, s, c],
          )
        return r.a.createElement(i.a, {
          accessibilityLabel: u,
          behavioralEventContext: m,
          disabled: !a,
          hoverLabel: { label: p },
          icon: d,
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
        c = n('1auM'),
        l = n('kIAd'),
        u = n('VAyw'),
        d = n('/Ikv'),
        p = n('s1N3'),
        m = n('lnti'),
        h = function (e) {
          var t,
            n = e.excludeReplyUser,
            a = e.inReplyToStatus,
            i = e.loggedInUserId,
            s = a.retweeted_status,
            c = s || a,
            l = c.entities,
            d = c.unmentioned_user_ids,
            h = c.user,
            v = s ? s.user : {},
            g = s ? a.user : {},
            y = (null == l ? void 0 : l.user_mentions) || [],
            _ = u.a.mergeTaggedUsers((null == l ? void 0 : l.media) || []),
            b = f(s || a) || {},
            C = ((t = {}), o()(t, v.id_str, v), o()(t, g.id_str, g), o()(t, h.id_str, h), o()(t, b.id_str, b), t)
          y.forEach(function (e) {
            C[e.id_str] = e
          }),
            _.forEach(function (e) {
              var t = e.name,
                n = e.screen_name,
                a = e.user_id
              C[a] = { id_str: a, name: t, screen_name: n }
            })
          var w = function (e) {
              var t = null == d ? void 0 : d.includes(e.id_str),
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
                    _.map(function (e) {
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
              return C[e]
            })
          )
        },
        f = function (e) {
          var t = e.card,
            n = null
          if (t) {
            var a = d.a.getBindingValue(t.binding_values, 'site')
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
                return e.mediaFile && !(e.mediaFile instanceof c.a) && e.mediaFile.isVideo
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
            n = e.split(l.b.WordBoundary)
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
        c = n('k6Ei'),
        l = n('rHpw'),
        u = n('+/1j'),
        d = n('MWbm'),
        p = s.a.c2fc878c,
        m = s.a.db11b27f,
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
          o = void 0 === a ? h : a,
          s = e.warningCount,
          v = n - t,
          g = v >= 0 ? m({ count: o(v) }) : p({ count: o(t - n) }),
          y =
            t >= s
              ? r.a.createElement(
                  u.a,
                  { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite', style: l.a.visuallyHidden },
                  g,
                )
              : null,
          _ = Object(i.a)(v, n),
          b = t >= n ? 'red500' : t >= s ? 'yellow500' : 'primary',
          C = r.a.createElement(c.a, {
            color: b,
            progress: _,
            size: t >= s ? 30 : 20,
            style: [f.progressCircle, v <= -10 && f.hide],
          }),
          w = t >= s ? r.a.createElement(u.a, { style: [f.text, v > 0 ? f.gray700 : f.red500] }, o(v)) : null
        return r.a.createElement(
          d.a,
          { style: [f.root, f.center] },
          y,
          C,
          r.a.createElement(d.a, { style: [l.a.absoluteFill, f.center] }, w),
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
        c = n.n(s),
        l = n('ERkP'),
        u = n.n(l),
        d = (n('5BYb'), n('7x/C'), n('uFXj'), n('H7Rt')),
        p = n('3XMw'),
        m = n.n(p),
        h = n('MWbm'),
        f = n('t62R'),
        v = n('CKsB'),
        g = n('/yvb'),
        y = n('rHpw'),
        _ = n('Zg3A'),
        b = n('yiKp'),
        C = n.n(b),
        w = n('Lsrn'),
        E = n('k/Ka'),
        T = function () {
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
            u.a.createElement(
              'g',
              null,
              u.a.createElement('path', {
                d: 'M10.43 12.24c-1.37 0-2.89-.15-3.87-1.26-.82-.95-1.09-2.39-.81-4.43C6.13 3.7 7.88 2 10.43 2s4.3 1.7 4.68 4.55c.27 2.04.01 3.49-.81 4.42-.98 1.12-2.51 1.27-3.87 1.27zm0-8.73c-2.39 0-3.03 2.03-3.19 3.24-.21 1.56-.06 2.65.45 3.23.46.53 1.28.75 2.73.75 1.46 0 2.28-.22 2.74-.75.51-.58.66-1.67.45-3.23-.16-1.21-.79-3.24-3.18-3.24zm2.01 18.99H4.22c-.7 0-1.33-.3-1.75-.83-.43-.54-.57-1.26-.4-1.95.88-3.55 4.31-6.03 8.34-6.03.42 0 .75.34.75.75 0 .42-.34.75-.75.75-3.34 0-6.17 2.01-6.88 4.89-.06.25-.02.49.12.66.13.16.32.25.56.25h8.22c.42 0 .75.34.75.75.01.42-.32.76-.74.76zm9.15-10.87l-4.2 8.46c-.01.03-.02.05-.04.07-.02.06-.06.11-.1.15-.05.05-.1.09-.15.13h-.01c-.06.04-.12.06-.19.08-.07.02-.13.03-.2.03-.05 0-.11 0-.17-.02-.06-.01-.11-.03-.16-.06-.06-.03-.12-.07-.18-.12-.01-.01-.03-.02-.04-.03l-3.08-3.27c-.28-.3-.27-.78.04-1.06.3-.29.77-.27 1.06.03l2.34 2.48 3.74-7.53c.18-.37.63-.52 1-.34.37.17.52.63.34 1z',
              }),
              u.a.createElement('path', {
                d: 'M17.1 20.44c.05-.04.1-.08.15-.13 0 .01-.02.03-.03.04-.04.04-.08.06-.12.09z',
              }),
            ),
          )
        }
      T.metadata = { width: 24, height: 24 }
      var x = T,
        S = n('boUI'),
        I = n('EweD'),
        R = m.a.g6185a9e,
        k = m.a.g2d04222,
        M = m.a.baffe39a,
        A = m.a.af293dc2,
        L = m.a.h1053f7e,
        P = m.a.bf994ab2,
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
            s = function (t) {
              return function () {
                e.onChange(t), e.dismiss()
              }
            },
            c = !!i,
            l =
              c &&
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
            l ? (p = P) : c && (p = D),
            u.a.createElement(
              h.a,
              {
                accessibilityDescribedBy: 'conversation-controls-details',
                accessibilityLabelledBy: 'conversation-controls-title',
                accessibilityRole: 'dialog',
                style: [F.root, r ? F.modal : F.popover],
              },
              u.a.createElement(
                h.a,
                { style: F.title },
                u.a.createElement(f.b, { nativeID: 'conversation-controls-title', weight: 'bold' }, R),
                u.a.createElement(
                  f.b,
                  { color: 'gray700', nativeID: 'conversation-controls-details', size: 'body' },
                  k,
                ),
              ),
              u.a.createElement(
                h.a,
                null,
                u.a.createElement(v.a, {
                  Icon: _.a,
                  actionText: M,
                  isSelected: d.a.all === o,
                  onClick: s(d.a.all),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                u.a.createElement(v.a, {
                  Icon: x,
                  actionText: A,
                  isSelected: d.a.community === o,
                  onClick: s(d.a.community),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                u.a.createElement(v.a, {
                  Icon: l ? S.a : I.a,
                  actionText: p,
                  isSelected: d.a.by_invitation === o,
                  onClick: s(d.a.by_invitation),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                e.isModal
                  ? u.a.createElement(
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
        N = n('OiMc'),
        V = n('efqG'),
        j = ['children', 'controlled']
      t.a = function (e) {
        var t = e.children,
          n = e.controlled,
          a = void 0 !== n && n,
          i = e.disabled,
          s = u.a.useState(!1),
          l = c()(s, 2),
          d = l[0],
          p = l[1],
          m = u.a.useCallback(function () {
            return p(!0)
          }, []),
          h = u.a.useCallback(function () {
            return p(!1)
          }, []),
          f = a ? (d ? N.a.VISIBILITY_BEHAVIOR.forceVisible : N.a.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
          v = 'function' == typeof t ? t({ openPopover: m, closePopover: h }) : t
        return u.a.createElement(
          V.a,
          {
            disabled: i,
            onDismiss: h,
            renderContent: function (t, n) {
              e.children, e.controlled
              var a = o()(e, j)
              return u.a.createElement(B, r()({}, a, { dismiss: t, isModal: 'sheet' === n }))
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
        c = n('t62R'),
        l = n('rHpw'),
        u = n('QbaN'),
        d = o.a.bfb895b1,
        p = l.a.create(function (e) {
          return { icon: { fontSize: e.fontSizes.body, paddingRight: e.spaces.space12, textAlignVertical: 'middle' } }
        })
      t.a = function (e) {
        var t = e.onPress,
          n = e.scheduledFor,
          a = e.testID,
          i = Object(u.c)(n),
          o = !!i && Object(u.h)(n) && !Object(u.g)(i) && !Object(u.f)(i),
          l = Boolean(t)
        return i && o
          ? r.a.createElement(
              c.b,
              { color: 'gray700', onPress: t, size: 'subtext2', testID: a, withInteractiveStyling: l },
              r.a.createElement(s.a, { style: p.icon }),
              d({ date: Object(u.b)(i), time: Object(u.i)(i) }),
            )
          : null
      }
    },
  },
])
//# sourceMappingURL=WIPED
