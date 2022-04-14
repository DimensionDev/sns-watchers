;(window.webpackJsonp = window.webpackJsonp || []).push([
  [78, 18],
  {
    '/Rsk': function (e, t, a) {
      'use strict'
      a.d(t, 'f', function () {
        return v
      }),
        a.d(t, 'e', function () {
          return y
        }),
        a.d(t, 'h', function () {
          return b
        }),
        a.d(t, 'g', function () {
          return _
        }),
        a.d(t, 'd', function () {
          return C
        }),
        a.d(t, 'c', function () {
          return T
        }),
        a.d(t, 'b', function () {
          return x
        }),
        a.d(t, 'a', function () {
          return E
        }),
        a.d(t, 'i', function () {
          return I
        })
      var n = a('KEM+'),
        r = a.n(n),
        i = a('yiKp'),
        o = a.n(i),
        s = (a('yH/f'), a('KqXw'), a('LJOr'), a('7x/C'), a('JtPf'), a('oEOe')),
        l = a('kGix'),
        c = (a('hBpG'), a('M6MT')),
        d = a('Ssj5'),
        u = a('qlwE'),
        p = a('a/ea'),
        m = a('474o'),
        h = 'placePicker',
        f = Object.freeze({
          REQUEST: 'rweb/placePicker/SEARCH_REQUEST',
          SUCCESS: 'rweb/placePicker/SEARCH_SUCCESS',
          FAILURE: 'rweb/placePicker/SEARCH_FAILURE',
        }),
        g = Object.freeze({
          initial: { fetchStatus: l.a.NONE },
          lastSearch: { fetchStatus: l.a.NONE },
          lastSelectedPlace: void 0,
        })
      var v = function (e) {
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
            v(e),
            (function (e) {
              return e.placePicker.lastSelectedPlace
            })(e),
          )
        },
        w = function (e, t) {
          return function (a, n, r) {
            var i = r.api
            return Object(s.b)(a, { request: i.Places.search, params: e })({
              actionTypes: f,
              context: 'SEARCH_PLACES_ACTION',
              meta: { resultSet: t },
            })
          }
        },
        T = function (e) {
          return function (t, a, n) {
            n.api
            var r = Object(p.d)(a())
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
          return function (e, t, a) {
            a.api
            var n = y(t()),
              r = v(t())
            if (n === l.a.LOADING || r) return Promise.resolve()
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
        E = function () {
          return function (e, t, a) {
            a.api
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
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case f.REQUEST:
              var a = t.meta.resultSet
              return o()(o()({}, e), {}, r()({}, a, { fetchStatus: l.a.LOADING }))
            case f.FAILURE:
              var n = t.meta.resultSet
              return o()(o()({}, e), {}, r()({}, n, { fetchStatus: l.a.FAILED }))
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
    '0uGn': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return we
      })
      var n = a('yiKp'),
        r = a.n(n),
        i = a('RhWx'),
        o = a.n(i),
        s = a('VrFO'),
        l = a.n(s),
        c = a('Y9Ll'),
        d = a.n(c),
        u = a('1Pcy'),
        p = a.n(u),
        m = a('5Yy7'),
        h = a.n(m),
        f = a('2VqO'),
        g = a.n(f),
        v = a('KEM+'),
        y = a.n(v),
        b =
          (a('hBpG'),
          a('7x/C'),
          a('vrRf'),
          a('jwue'),
          a('+oxZ'),
          a('2G9S'),
          a('z84I'),
          a('JtPf'),
          a('lTEL'),
          a('87if'),
          a('kYxP'),
          a('LqLs'),
          a('m9LP'),
          a('ERkP')),
        _ = a.n(b),
        C = (a('TJCb'), a('DZ+c'), a('xZGM')),
        w = a('GTeL'),
        T = a('3XMw'),
        x = a.n(T),
        E = a('rHpw'),
        S = E.a.create(function (e) {
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
        k = a('MWbm'),
        D = a('t62R'),
        P = a('p+r5'),
        L = x.a.feabf2a0,
        A = x.a.e36287c6,
        F = x.a.cf565d08,
        O = (function (e) {
          h()(a, e)
          var t = g()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(p()(e), '_renderInputHelperText', function () {
                var t = e.props.onShowEducation
                return t ? _.a.createElement(D.b, { color: 'link', onPress: t, withInteractiveStyling: !0 }, F) : null
              }),
              y()(p()(e), '_handleChange', function (t) {
                var a = e.props,
                  n = a.currentMediaId,
                  r = a.mediaItem,
                  i = a.onChange,
                  o = t.target.value
                r ? i(o, r.id.toString()) : n && i(o, n)
              }),
              e
            )
          }
          return (
            d()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.autofocus,
                    a = e.maxLength,
                    n = e.mediaItem,
                    r = e.orientedImage,
                    i = e.value
                  return _.a.createElement(
                    k.a,
                    { style: S.root },
                    _.a.createElement(
                      k.a,
                      { style: S.attachmentContainer },
                      _.a.createElement(w.a, { mediaItem: n, orientedImage: r }),
                      _.a.createElement(P.a, {
                        accessibilityLabel: L,
                        autoFocus: t,
                        helperText: this._renderInputHelperText(),
                        label: A,
                        maxLength: a,
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
            a
          )
        })(_.a.Component),
        B = a('rxPX'),
        N = function (e, t) {
          return Object(C.D)(e, C.a)
        },
        V = Object(B.a)()
          .propsFromState(function () {
            return { showEducationOnMount: N }
          })
          .propsFromActions(function () {
            return { addFlag: C.z }
          })
          .withAnalytics(),
        z = a('feu+'),
        j = x.a.ffe9ec3a,
        H = x.a.j063b261,
        W = x.a.e57144f0,
        U = x.a.f9f9210c,
        G = (function (e) {
          h()(a, e)
          var t = g()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
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
            d()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.addFlag,
                    a = e.analytics
                  e.showEducationOnMount &&
                    (this.setState({ showAltTextEducationSheet: !0 }),
                    a.scribe({ component: 'education', action: 'open' }),
                    t(C.a))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.mediaItem,
                    a = e.onAltTextChange,
                    n = e.orientedImage,
                    r = e.value,
                    i = this.state.showAltTextEducationSheet,
                    o = t && t.id.toString()
                  return _.a.createElement(
                    k.a,
                    { style: K.root },
                    i
                      ? _.a.createElement(z.a, {
                          actionLabel: W,
                          headline: j,
                          onAction: this._handleEducationPromptPrimaryAction,
                          onClose: this._handleCloseEducationPrompt,
                          onSecondaryAction: this._handleEducationPromptSecondaryAction,
                          primaryButtonTestID: M,
                          secondaryActionLabel: U,
                          subtext: H,
                        })
                      : null,
                    _.a.createElement(O, {
                      autofocus: !0,
                      currentMediaId: o,
                      maxLength: 1e3,
                      mediaItem: t,
                      onChange: a,
                      onShowEducation: this._handleOpenEducationPrompt,
                      orientedImage: n,
                      value: r,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(_.a.Component),
        K = E.a.create(function (e) {
          return { root: { flexGrow: 1 } }
        }),
        q = V(G),
        X = a('jHSc'),
        Y = a('EeFI'),
        Q = a('7JQg'),
        J = a('9Q4p'),
        Z = a('PrL8'),
        $ = a('k/OQ'),
        ee = a('/yvb'),
        te = a('oQhu'),
        ae = a('ddV6'),
        ne = a.n(ae),
        re = function (e) {
          var t = new Map()
          return (
            e.forEach(function (e) {
              var a = ne()(e, 2),
                n = a[0],
                r = a[1]
              t.set(n, r)
            }),
            t
          )
        },
        ie = a('mN6z'),
        oe = a('95Se'),
        se = a('7Mjr'),
        le = a('Mbn/'),
        ce = a('zIWA'),
        de = a('1auM'),
        ue = a('eYns'),
        pe = { section: 'alt_text' },
        me = { section: 'crop' },
        he = { section: 'sensitive_media' },
        fe = x.a.e070024a,
        ge = x.a.i2209530,
        ve = x.a.i7d24b36,
        ye = x.a.f96a38a2,
        be = x.a.hac7c548,
        _e = x.a.e3dbfba3,
        Ce = x.a.dd4a83a5,
        we = { crop: 'crop', altText: 'alt_text', sensitiveMedia: 'sensitive_media' },
        Te = (function (e) {
          h()(a, e)
          var t = g()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              y()(p()(n), '_cropper', _.a.createRef()),
              y()(
                p()(n),
                '_getMemoizedTabMetadata',
                Object(te.a)(function (e, t) {
                  return t && e === we.sensitiveMedia
                    ? { namespace: he, title: Ce, renderer: n._renderSensitiveMediaTab }
                    : e === we.altText
                    ? { namespace: pe, title: _e, renderer: n._renderAltTextTab }
                    : { namespace: me, title: be, renderer: n._renderCropTab }
                }),
              ),
              y()(p()(n), '_renderTabContent', function (e) {
                var t,
                  a = n.props,
                  r = a.location,
                  i = a.sensitiveMediaTabEnabled,
                  o = n._getMemoizedTabMetadata(e, i),
                  s = !(null !== (t = r.state) && void 0 !== t && t.hideTabs),
                  l = s ? n._getTabLinks(e) : [],
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
              y()(p()(n), '_renderAltTextTab', function () {
                var e = n.props.history,
                  t = n.state,
                  a = t.currentMediaId,
                  r = t.mediaMetadata,
                  i = t.orientedImage,
                  o = n._getCurrentMediaItem(),
                  s = r[a] && r[a].altText
                return _.a.createElement(q, {
                  history: e,
                  key: a,
                  mediaItem: o,
                  onAltTextChange: n._handleAltTextChange,
                  orientedImage: i.get(a),
                  value: s,
                })
              }),
              y()(p()(n), '_renderCropTab', function () {
                var e = n.state,
                  t = e.cropData,
                  a = e.currentMediaId,
                  r = n._getCurrentMediaItem()
                return _.a.createElement(Y.a, {
                  defaultCropData: t.get(a),
                  key: a,
                  media: r,
                  ref: n._cropper,
                  withAspectRatioOptions: !0,
                })
              }),
              y()(p()(n), '_renderSensitiveMediaTab', function () {
                var e = n.state,
                  t = e.currentMediaId,
                  a = e.mediaMetadata,
                  r = e.orientedImage,
                  i = n._getCurrentMediaItem(),
                  o = a[t] && a[t].sensitiveMediaWarning
                return _.a.createElement(J.a, {
                  currentWarnings: o,
                  key: t,
                  mediaItem: i,
                  onWarningChange: n._handleSensitiveWarningChange,
                  orientedImage: r.get(t),
                })
              }),
              y()(p()(n), '_renderAppBarRightControl', function () {
                var e = n.state.isProcessing,
                  t = n._getNextMediaIndex(1),
                  a = n._getNextMediaIndex(-1)
                return _.a.createElement(
                  k.a,
                  { style: Z.a.rightControl },
                  n._hasMediaAtIndex(a) || n._hasMediaAtIndex(t)
                    ? _.a.createElement(
                        k.a,
                        { style: [Z.a.rightControl, Z.a.leftRightButtons] },
                        _.a.createElement(ee.a, {
                          accessibilityLabel: ye,
                          disabled: !n._hasMediaAtIndex(a),
                          icon: _.a.createElement(oe.a, null),
                          onPress: n._handleClickToMediaAtIndex(a),
                          size: 'small',
                          style: Z.a.prevButton,
                          type: 'primaryOutlined',
                        }),
                        _.a.createElement(ee.a, {
                          accessibilityLabel: ve,
                          disabled: !n._hasMediaAtIndex(t),
                          icon: _.a.createElement(se.a, null),
                          onPress: n._handleClickToMediaAtIndex(t),
                          size: 'small',
                          type: 'primaryOutlined',
                        }),
                      )
                    : null,
                  _.a.createElement(
                    ee.a,
                    {
                      disabled: e,
                      onPress: n._handleEndEditingClick,
                      size: 'small',
                      style: Z.a.saveButton,
                      testID: R,
                      type: 'primaryFilled',
                    },
                    ge,
                  ),
                )
              }),
              y()(p()(n), '_handleCancelEditingClick', function (e) {
                n._scribeWithNamespace({ action: 'cancel' }), e()
              }),
              y()(p()(n), '_handleClickTab', function (e) {
                var t = n.props.analytics
                n._handleSaveCropData(),
                  n._scribeWithNamespace({ element: e, action: 'click' }),
                  t.scribePageImpression()
              }),
              y()(p()(n), '_getCurrentMediaItem', function () {
                var e = n.props.media,
                  t = n.state.currentMediaId
                return e.find(function (e) {
                  return e.id === t
                })
              }),
              y()(p()(n), '_getNextMediaIndex', function (e) {
                var t = n.props.media,
                  a = n._getCurrentMediaItem()
                return t.indexOf(a) + e
              }),
              y()(p()(n), '_hasMediaAtIndex', function (e) {
                var t = n.props.media
                return e >= 0 && e < t.length
              }),
              y()(p()(n), '_handleClickToMediaAtIndex', function (e) {
                return function () {
                  var t = n.props.media
                  if (n._hasMediaAtIndex(e)) {
                    n._handleSaveCropData()
                    var a = t[e].id
                    n.setState({ currentMediaId: a })
                  }
                }
              }),
              y()(p()(n), '_saveMediaMetadata', function () {
                var e = n.props,
                  t = e.media,
                  a = e.setMediaMetadata,
                  r = n.state.mediaMetadata
                t.forEach(function (e) {
                  a(e.id, r[e.id])
                })
              }),
              y()(p()(n), '_handleEndEditingClick', function () {
                var e = n.props.history,
                  t = n._cropper && n._cropper.current,
                  a = n.state.cropData
                if (t || a.size) {
                  var r = n.props,
                    i = r.media,
                    s = r.processMedia,
                    l = r.updateMediaUpload,
                    c = n.state.currentMediaId
                  n.setState({ isProcessing: !0 })
                  var d = t ? re([].concat(o()(a), [[c, t.getCropData()]])) : a,
                    u = i.map(function (e) {
                      return d.get(e.id) ? (l({ id: e.id, cropData: d.get(e.id) }), s(e.id)) : Promise.resolve()
                    })
                  Promise.all(u).then(function () {
                    n._scribeWithNamespace({ action: 'done' })
                  })
                }
                n._saveMediaMetadata(), e.goBack()
              }),
              y()(p()(n), '_handleAltTextChange', function (e) {
                n.setState(function (t) {
                  return {
                    mediaMetadata: r()(
                      r()({}, t.mediaMetadata),
                      {},
                      y()({}, t.currentMediaId, r()(r()({}, t.mediaMetadata[t.currentMediaId]), {}, { altText: e })),
                    ),
                  }
                })
              }),
              y()(p()(n), '_handleSensitiveWarningChange', function (e, t) {
                n.setState(function (a) {
                  var n =
                    (a.mediaMetadata[a.currentMediaId] && a.mediaMetadata[a.currentMediaId].sensitiveMediaWarning) ||
                    new Set()
                  return (
                    t ? n.add(e) : n.delete(e),
                    {
                      mediaMetadata: r()(
                        r()({}, a.mediaMetadata),
                        {},
                        y()(
                          {},
                          a.currentMediaId,
                          r()(r()({}, a.mediaMetadata[a.currentMediaId]), {}, { sensitiveMediaWarning: n }),
                        ),
                      ),
                    }
                  )
                })
              }),
              y()(p()(n), '_handleSaveCropData', function () {
                var e = n._cropper && n._cropper.current
                if (e) {
                  var t = n.state.currentMediaId,
                    a = e.getCropData(),
                    r = n._getCurrentMediaItem()
                  if (
                    r &&
                    !Object(ie.a)(a, n.state.cropData.get(t)) &&
                    (n.setState(function (e) {
                      return { orientedImage: re([].concat(o()(e.orientedImage), [[t, null]])) }
                    }),
                    r.originalMediaFile && r.originalMediaFile instanceof de.a)
                  ) {
                    var i = r.cropData
                    Object(ue.b)(r.originalMediaFile, { cropData: a || i })
                      .then(function (e) {
                        return new de.a(e).withDimensionsAndOrientation().then(function (e) {
                          n.setState(function (n) {
                            return {
                              orientedImage: re([].concat(o()(n.orientedImage), [[t, e]])),
                              cropData: re([].concat(o()(n.cropData), [[t, a]])),
                            }
                          })
                        })
                      })
                      .catch(function () {
                        n.setState(function (e) {
                          return { orientedImage: re([].concat(o()(e.orientedImage), [[t, void 0]])) }
                        })
                      })
                  }
                  n.setState(function (e) {
                    return { cropData: re([].concat(o()(e.cropData), [[t, a]])) }
                  })
                }
              }),
              y()(p()(n), '_scribeWithNamespace', function (e) {
                var t = n.props,
                  a = t.analytics,
                  i = t.sensitiveMediaTabEnabled,
                  o = n._getCurrentTab(),
                  s = n._getMemoizedTabMetadata(o, i)
                a.scribe(r()(r()({}, s.namespace), e))
              }),
              y()(p()(n), '_getMediaMetadata', function (e) {
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
              c = n._getMediaMetadata(s)
            return (
              (n.state = {
                cropData: new Map(),
                isProcessing: !1,
                mediaMetadata: c,
                currentMediaId: i || -1,
                orientedImage: new Map(),
              }),
              n
            )
          }
          return (
            d()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    a = e.sensitiveMediaTabEnabled,
                    n = this._getCurrentTab(),
                    r = this._getMemoizedTabMetadata(n, a)
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
                      this._renderTabContent(n),
                    ),
                  )
                },
              },
              {
                key: '_getCurrentTab',
                value: function () {
                  var e,
                    t = this.props,
                    a = t.location,
                    n = t.sensitiveMediaTabEnabled,
                    r = null === (e = a.state) || void 0 === e ? void 0 : e.tab
                  return n && r === we.sensitiveMedia ? we.sensitiveMedia : r === we.altText ? we.altText : we.crop
                },
              },
              {
                key: '_getTabLinks',
                value: function (e) {
                  var t,
                    a = this,
                    n = this.props,
                    i = n.analytics,
                    o = n.location,
                    s = n.sensitiveMediaTabEnabled,
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
                      label: _.a.createElement(D.b, { weight: 'bold' }, 'ALT'),
                      key: we.altText,
                      accessibilityLabel: _e,
                      isActive: function () {
                        return e === we.altText
                      },
                      onClick: function () {
                        return a._handleClickTab('alt_text_button')
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
                          return a._handleClickTab('sensitive_media_tab')
                        },
                      }),
                    c
                  )
                },
              },
            ]),
            a
          )
        })(_.a.Component)
      t.b = Te
    },
    '21U8': function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        s = a('1Pcy'),
        l = a.n(s),
        c = a('5Yy7'),
        d = a.n(c),
        u = a('2VqO'),
        p = a.n(u),
        m = a('KEM+'),
        h = a.n(m),
        f = (a('Rqga'), a('2G9S'), a('ERkP')),
        g = a.n(f),
        v = a('/yvb'),
        y = a('3XMw'),
        b = a.n(y),
        _ = a('3rX5'),
        C = a('rHpw'),
        w = a('MWbm'),
        T = C.a.create(function (e) {
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
            a = e.height,
            n = e.width
          return g.a.createElement(w.a, {
            pointerEvents: 'none',
            style: [T.mask, { width: n, height: a }, t && T.circle],
          })
        },
        E = a('ZvMt'),
        S = a('97Jx'),
        I = a.n(S),
        R = a('m3Bd'),
        M = a.n(R),
        k = a('CHgo'),
        D = a('7ep7'),
        P = ['children', 'onPanEnd', 'onPanMove', 'onPinchMove', 'onWheel'],
        L = (function (e) {
          d()(a, e)
          var t = p()(a)
          function a(e) {
            var n
            return (
              r()(this, a),
              (n = t.call(this, e)),
              h()(l()(n), '_previousTouchDistance', 0),
              h()(l()(n), '_previousPositionX', 0),
              h()(l()(n), '_previousPositionY', 0),
              h()(l()(n), '_centerPosition', { x: 0, y: 0 }),
              h()(l()(n), '_panResponder', {}),
              h()(l()(n), '_setRef', function (e) {
                var t = n.props,
                  a = t.onPanEnd,
                  r = t.onPanMove,
                  i = t.onPinchMove,
                  o = t.onWheel
                if (e) {
                  ;(r || a || i) && (n._removeTouchMoveToScrollListener = Object(k.a)(e, n._preventDefaultEvent, !1)),
                    o && (n._removeScrollToScaleListener = Object(k.b)(e, n._preventDefaultEvent, !1))
                  var s = e.getBoundingClientRect()
                  n._centerPosition = { x: s.width / 2 + s.left, y: s.height / 2 + s.top }
                }
              }),
              h()(l()(n), '_preventDefaultEvent', function (e) {
                e.preventDefault()
              }),
              h()(l()(n), '_handlePanResponderMove', function (e, t) {
                var a,
                  r,
                  i = n.props,
                  o = i.onPanMove,
                  s = i.onPinchMove,
                  l = e.nativeEvent.touches
                if (2 === t.numberActiveTouches) {
                  if (s) {
                    var c =
                        ((a = l[0]),
                        (r = l[1]),
                        Math.sqrt(Math.pow(a.pageY - r.pageY, 2) + Math.pow(a.pageX - r.pageX, 2))),
                      d = (function (e, t) {
                        return {
                          pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2,
                          pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2,
                        }
                      })(l[0], l[1]),
                      u = d.pageX,
                      p = d.pageY,
                      m = n._previousPositionX ? u - n._previousPositionX : 0,
                      h = n._previousPositionY ? p - n._previousPositionY : 0,
                      f = n._previousTouchDistance ? c - n._previousTouchDistance : 0
                    ;(n._previousPositionX = u), (n._previousPositionY = p), (n._previousTouchDistance = c)
                    var g = n._centerPosition
                    s(f, g.x - u, g.y - p, m, h)
                  }
                } else o && o(t.dx, t.dy)
                document.addEventListener('selectstart', n._preventDefaultEvent, !1)
              }),
              h()(l()(n), '_handlePanResponderEnd', function (e, t) {
                n.props.onPanEnd && n.props.onPanEnd(t.dx, t.dy),
                  n.props.onPinchMove && (n._previousTouchDistance = 0),
                  (n._previousPositionX = 0),
                  (n._previousPositionY = 0),
                  n._removeSelectStartListener()
              }),
              h()(l()(n), '_handleWheel', function (e) {
                var t = e.clientX,
                  a = e.clientY,
                  r = e.deltaX,
                  i = e.deltaY,
                  o = n._centerPosition,
                  s = o.x - t,
                  l = o.y - a
                n.props.onWheel && n.props.onWheel(r, i, s, l)
              }),
              (n._panResponder = D.a.create({
                onStartShouldSetPanResponder: function () {
                  return !0
                },
                onMoveShouldSetPanResponder: function () {
                  return !0
                },
                onPanResponderMove: n._handlePanResponderMove,
                onPanResponderRelease: n._handlePanResponderEnd,
                onPanResponderTerminate: n._handlePanResponderEnd,
              })),
              (n._removeSelectStartListener = function () {
                return document.removeEventListener('selectstart', n._preventDefaultEvent, !1)
              }),
              n
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = (e.children, e.onPanEnd, e.onPanMove, e.onPinchMove, e.onWheel, M()(e, P))
                  return g.a.createElement(
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
            a
          )
        })(g.a.Component),
        A = a('9RkS'),
        F = a('rOXj'),
        O = a('aITJ'),
        B = a('yiKp'),
        N = a.n(B),
        V = a('Lsrn'),
        z = a('k/Ka'),
        j = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(z.a)(
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
            g.a.createElement(
              'g',
              null,
              g.a.createElement('path', {
                d: 'M19.75 19.944H4.25c-1.24 0-2.25-1.01-2.25-2.25V6.306c0-1.24 1.01-2.25 2.25-2.25h15.5c1.24 0 2.25 1.01 2.25 2.25v11.39c0 1.24-1.01 2.248-2.25 2.248zM4.25 5.556c-.413 0-.75.337-.75.75v11.39c0 .412.337.75.75.75h15.5c.413 0 .75-.338.75-.75V6.305c0-.413-.337-.75-.75-.75H4.25z',
              }),
            ),
          )
        }
      j.metadata = { width: 24, height: 24 }
      var H = j,
        W = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(z.a)(
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
            g.a.createElement(
              'g',
              null,
              g.a.createElement('path', {
                d: 'M19.75 19.89H4.25C3.01 19.89 2 18.88 2 17.64v-7.28c0-1.24 1.01-2.25 2.25-2.25h15.5c1.24 0 2.25 1.01 2.25 2.25v7.277c0 1.24-1.01 2.25-2.25 2.25zM4.25 9.61c-.413 0-.75.338-.75.75v7.278c0 .413.337.75.75.75h15.5c.413 0 .75-.337.75-.75V10.36c0-.412-.337-.75-.75-.75H4.25z',
              }),
            ),
          )
        }
      W.metadata = { width: 24, height: 24 }
      var U = W,
        G = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(z.a)(
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
            g.a.createElement(
              'g',
              null,
              g.a.createElement('path', {
                d: 'M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.413 0-.75.337-.75.75v15.5c0 .413.337.75.75.75h15.5c.413 0 .75-.337.75-.75V4.25c0-.413-.337-.75-.75-.75H4.25z',
              }),
            ),
          )
        }
      G.metadata = { width: 24, height: 24 }
      var K = G,
        q = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(z.a)(
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
            g.a.createElement(
              'g',
              null,
              g.a.createElement('path', {
                d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
              }),
              g.a.createElement('path', {
                d: 'M15.21 11c0 .41-.34.75-.75.75h-2.71v2.71c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.71H7.54c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.71V7.54c0-.41.34-.75.75-.75s.75.34.75.75v2.71h2.71c.41 0 .75.34.75.75z',
              }),
            ),
          )
        }
      q.metadata = { width: 24, height: 24 }
      var X = q,
        Y = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(z.a)(
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
            g.a.createElement(
              'g',
              null,
              g.a.createElement('path', {
                d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
              }),
              g.a.createElement('path', {
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
        ae = b.a.f7571204,
        ne = b.a.e6e16811,
        re =
          Math.log2 ||
          function (e) {
            return Math.log(e) * Math.LOG2E
          },
        ie = (function (e) {
          d()(a, e)
          var t = p()(a)
          function a(e) {
            var n, i
            return (
              r()(this, a),
              (n = t.call(this, e)),
              h()(l()(n), '_previousLeft', 0),
              h()(l()(n), '_previousTop', 0),
              h()(l()(n), '_panStyles', { top: 0, left: 0 }),
              h()(l()(n), '_shouldShowZoomControl', function () {
                return (!O.b.isMobileOS() || !F.a.isTouchSupported()) && n.props.withZoomControl
              }),
              h()(l()(n), '_renderControls', function () {
                var e = n.props,
                  t = e.image,
                  a = e.withAspectRatioOptions,
                  r = n.state.aspectRatio,
                  i = t.width / t.height,
                  o = n._shouldShowZoomControl()
                return a || o
                  ? g.a.createElement(
                      w.a,
                      { style: oe.controlsContainer },
                      a
                        ? g.a.createElement(
                            w.a,
                            { style: oe.ratioContainer },
                            g.a.createElement(v.a, {
                              accessibilityLabel: Z,
                              borderColor: 'transparent',
                              color: r === i ? 'primary' : 'gray700',
                              hoverLabel: { label: te },
                              icon: g.a.createElement(H, null),
                              onPress: n._setAspectRatio(i),
                              size: 'medium',
                            }),
                            g.a.createElement(v.a, {
                              accessibilityLabel: $,
                              borderColor: 'transparent',
                              color: r === 16 / 9 ? 'primary' : 'gray700',
                              hoverLabel: { label: ae },
                              icon: g.a.createElement(U, null),
                              onPress: n._setAspectRatio(16 / 9),
                              size: 'medium',
                            }),
                            g.a.createElement(v.a, {
                              accessibilityLabel: ee,
                              borderColor: 'transparent',
                              color: 1 === r ? 'primary' : 'gray700',
                              hoverLabel: { label: ne },
                              icon: g.a.createElement(K, null),
                              onPress: n._setAspectRatio(1),
                              size: 'medium',
                            }),
                          )
                        : null,
                      o
                        ? g.a.createElement(
                            w.a,
                            { style: oe.zoomContainer },
                            g.a.createElement(A.a, {
                              accessibilityLabel: J,
                              max: n._maxScale,
                              maxIcon: g.a.createElement(X, { style: oe.icon }),
                              min: 0,
                              minIcon: g.a.createElement(Q, { style: oe.icon }),
                              onChange: n._handleScaleChange,
                              step: 'any',
                              value: n.state.imageScale,
                            }),
                          )
                        : null,
                    )
                  : null
              }),
              h()(l()(n), '_setImageRef', function (e) {
                n._imageRef = e
              }),
              h()(l()(n), '_handleScaleChange', function (e) {
                n.setState({ imageScale: e })
              }),
              h()(l()(n), '_getImageDimensions', function () {
                var e = n.state.imageScale,
                  t = n.props.image.width / n.props.image.height,
                  a = n._getMaskDimensions(),
                  r = a.height,
                  i = a.width,
                  o = E.a.getCoverDimensions({ width: i, height: r }, t),
                  s = o.height
                return { width: o.width * Math.pow(2, e), height: s * Math.pow(2, e) }
              }),
              h()(l()(n), '_getMaskDimensions', function () {
                var e = n.state,
                  t = e.aspectRatio,
                  a = e.containerHeight,
                  r = e.containerWidth,
                  i = E.a.getContainDimensions({ width: r - 50, height: a - 50 }, t),
                  o = i.height
                return { width: i.width, height: o }
              }),
              h()(l()(n), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout,
                  a = t.height,
                  r = t.width
                n.state.containerHeight || n.state.containerWidth
                  ? n.setState({ containerHeight: a, containerWidth: r })
                  : (n.setState({ containerHeight: a, containerWidth: r }), n._setDefaultCropData())
              }),
              h()(l()(n), '_setDefaultCropData', function () {
                var e = n.props,
                  t = e.defaultCropData,
                  a = e.image
                if (t) {
                  var r = n._getImageDimensions().width,
                    i = n._getMaskDimensions().width,
                    o = r / a.width,
                    s = re(i / (t.width * o))
                  n.setState({ imageScale: s })
                  var l = n._getUnscaledCropData(),
                    c = l.left,
                    d = l.top
                  ;(n._panStyles.top = d - t.top * o * Math.pow(2, s)),
                    (n._previousTop = n._panStyles.top),
                    (n._panStyles.left = c - t.left * o * Math.pow(2, s)),
                    (n._previousLeft = n._panStyles.left),
                    n._updateNativeStyles()
                }
              }),
              h()(l()(n), '_handleWheel', function (e, t, a, r) {
                var i = (-1 * t) / 500
                n.setState(function (e) {
                  var t = e.imageScale,
                    o = Math.min(n._maxScale, Math.max(t + i, 0))
                  return (
                    (n._panStyles.left += a * (o - t)),
                    (n._panStyles.top += r * (o - t)),
                    (n._previousLeft = n._panStyles.left),
                    (n._previousTop = n._panStyles.top),
                    { imageScale: o }
                  )
                })
              }),
              h()(l()(n), '_handlePanMove', function (e, t) {
                ;(n._panStyles.left = n._previousLeft + e),
                  (n._panStyles.top = n._previousTop + t),
                  n._updateNativeStyles(),
                  n._adjustToInBounds()
              }),
              h()(l()(n), '_handlePanEnd', function (e, t) {
                ;(n._previousLeft = n._panStyles.left), (n._previousTop = n._panStyles.top)
              }),
              h()(l()(n), '_handlePinchMove', function (e, t, a, r, i) {
                var o = e / 200
                n.setState(function (e) {
                  var s = e.imageScale,
                    l = Math.min(n._maxScale, Math.max(s + o, 0))
                  return (
                    (n._panStyles.left += t * (l - s) + r),
                    (n._panStyles.top += a * (l - s) + i),
                    (n._previousLeft = n._panStyles.left),
                    (n._previousTop = n._panStyles.top),
                    { imageScale: l }
                  )
                })
              }),
              h()(l()(n), '_adjustToInBounds', function () {
                var e = n._getUnscaledCropData(),
                  t = n._getImageDimensions(),
                  a = e.left,
                  r = e.top,
                  i = e.left + e.width - t.width,
                  o = e.top + e.height - t.height,
                  s = !1
                a < 0 && ((s = !0), (n._panStyles.left += a), (n._previousLeft += a)),
                  r < 0 && ((s = !0), (n._panStyles.top += r), (n._previousTop += r)),
                  i > 0 && ((s = !0), (n._panStyles.left += i), (n._previousLeft += i)),
                  o > 0 && ((s = !0), (n._panStyles.top += o), (n._previousTop += o)),
                  s && n._updateNativeStyles()
              }),
              h()(l()(n), '_updateNativeStyles', function () {
                var e = n._panStyles,
                  t = e.left,
                  a = e.top
                n._imageRef &&
                  n._imageRef.setNativeProps({
                    style: { transform: [{ translate3d: ''.concat(t, 'px, ').concat(a, 'px, 0') }] },
                  })
              }),
              h()(l()(n), '_getUnscaledCropData', function () {
                var e = n._getImageDimensions(),
                  t = e.height,
                  a = e.width,
                  r = n._getMaskDimensions(),
                  i = r.height,
                  o = r.width,
                  s = n._panStyles,
                  l = s.left
                return { top: (t - i) / 2 - s.top, left: (a - o) / 2 - l, width: o, height: i }
              }),
              h()(l()(n), '_setAspectRatio', function (e) {
                return function () {
                  n.setState({ aspectRatio: e })
                }
              }),
              (n.state = {
                aspectRatio: e.defaultAspectRatio || e.image.width / e.image.height,
                imageScale: 0,
                containerHeight: 0,
                containerWidth: 0,
              }),
              (n._maxScale = ((i = e.image), Math.max(Math.min(re(i.width / 150), re(i.height / 150), 3), 0.5))),
              n
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.circle,
                    a = e.image,
                    n = e.withZoomControl,
                    r = this._getImageDimensions(),
                    i = r.height,
                    o = r.width,
                    s = this._getMaskDimensions(),
                    l = s.height,
                    c = s.width,
                    d = this.state.containerWidth && this.state.containerHeight
                  return g.a.createElement(
                    w.a,
                    { style: oe.container },
                    g.a.createElement(
                      L,
                      {
                        onLayout: this._handleLayout,
                        onPanEnd: this._handlePanEnd,
                        onPanMove: this._handlePanMove,
                        onPinchMove: n ? this._handlePinchMove : void 0,
                        onWheel: n ? this._handleWheel : void 0,
                        style: oe.root,
                      },
                      d
                        ? g.a.createElement(
                            g.a.Fragment,
                            null,
                            g.a.createElement(_.a, {
                              ref: this._setImageRef,
                              source: { uri: a.src, width: o, height: i },
                              style: oe.image,
                            }),
                            g.a.createElement(x, { circle: t, height: l, width: c }),
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
                    a = this._getUnscaledCropData()
                  return {
                    aspectRatio: this.state.aspectRatio,
                    top: Math.round(t * a.top),
                    left: Math.round(t * a.left),
                    width: Math.round(t * a.width),
                    height: Math.round(t * a.height),
                  }
                },
              },
            ]),
            a
          )
        })(g.a.Component)
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
    '45mF': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return c
      })
      a('2G9S')
      var n = a('1YZw'),
        r = a('pXBW'),
        i = a('3XMw'),
        o = a.n(i),
        s = a('SrIh'),
        l = o.a.a5d4fda0,
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return {
            customErrorHandler: function (a) {
              var i = a.context
              return (
                !a instanceof r.a && (a.message = 'Strato error occurred in '.concat(i.id, ': ').concat(i.action)),
                Object(s.a)(a, { extra: { context: i, isStrato: !0 } }),
                t ? Object(n.b)({ text: e }) : []
              )
            },
          }
        }
    },
    '474o': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      }),
        a.d(t, 'b', function () {
          return r
        }),
        a.d(t, 'c', function () {
          return i
        })
      a('yH/f')
      var n = Object.freeze({ profile_location: 'profile_location', tweet_compose_location: 'tweet_compose_location' }),
        r = Object.freeze({ foursquare: 'foursquare', yelp: 'yelp' }),
        i = Object.freeze({ initial: 'initial', lastSearch: 'lastSearch' })
    },
    '5emT': function (e, t, a) {
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
    '6XNv': function (e, t, a) {
      'use strict'
      var n = a('RhWx'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        s = a('Y9Ll'),
        l = a.n(s),
        c = a('1Pcy'),
        d = a.n(c),
        u = a('5Yy7'),
        p = a.n(u),
        m = a('2VqO'),
        h = a.n(m),
        f = a('KEM+'),
        g = a.n(f),
        v = a('yiKp'),
        y = a.n(v),
        b = (a('lTEL'), a('7x/C'), a('LqLs'), a('87if'), a('kYxP'), a('7xRU'), a('z84I'), a('2G9S'), a('ERkP')),
        _ = a.n(b),
        C = a('t62R'),
        w = a('piX5'),
        T = a('4r2z'),
        x = a('FG+G'),
        E = a('rHpw'),
        S = a('k/Ka'),
        I = a('shC7'),
        R = a('MWbm'),
        M = _.a.forwardRef(function (e, t) {
          return Object(S.a)('select', y()(y()({}, e), {}, { ref: t }))
        }),
        k = function (e) {
          return Object(S.a)('option', e)
        },
        D = 1,
        P = (function (e) {
          p()(a, e)
          var t = h()(a)
          function a(e) {
            var n
            return (
              o()(this, a),
              (n = t.call(this, e)),
              g()(d()(n), '_selectRef', _.a.createRef()),
              g()(d()(n), 'state', { isFocused: !1 }),
              g()(d()(n), '_handleChange', function (e) {
                var t = n.props,
                  a = t.onChange,
                  r = t.withEmptyOption,
                  i = e.target,
                  o = i.selectedIndex,
                  s = i.value
                a && a(s, o - (r ? 1 : 0))
              }),
              g()(d()(n), '_handleBlur', function (e) {
                var t = n.props.onBlur
                n.setState({ isFocused: !1 }), t && t()
              }),
              g()(d()(n), '_handleFocus', function (e) {
                var t = n.props.onFocus
                n.setState({ isFocused: !0 }), t && t()
              }),
              (n._id = 'SELECTOR_'.concat(D)),
              (n._errorID = ''.concat(n._id, '_ERROR')),
              (n._helperID = ''.concat(n._id, '_HELP')),
              (n._labelID = ''.concat(n._id, '_LABEL')),
              (D += 1),
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
                    d = e.value,
                    u = e.withEmptyOption,
                    p = this.state.isFocused,
                    m = C.b.getLanguage(),
                    h =
                      'ja' === m
                        ? E.a.theme.fontFamilies.japan
                        : I.a.getConstants().isRTL || T.a.isLocaleRTL(m)
                        ? E.a.theme.fontFamilies.rtl
                        : E.a.theme.fontFamilies.normal,
                    f = void 0 === i ? !!n : i,
                    g = new Set()
                  n && g.add(this._errorID), t && g.add(t), o && g.add(this._helperID)
                  var v = g.size ? r()(g).join(' ') : void 0
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    _.a.createElement(
                      R.a,
                      {
                        style: [
                          w.a.border,
                          L.container,
                          a && w.a.disabled,
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
                          accessibilityDescribedBy: v,
                          accessibilityInvalid: f,
                          accessibilityLabelledBy: this._labelID,
                          disabled: a,
                          nativeID: this._id,
                          onBlur: this._handleBlur,
                          onChange: this._handleChange,
                          onFocus: this._handleFocus,
                          ref: this._selectRef,
                          style: [L.select, { fontFamily: h }, a && w.a.disabled],
                          testID: c || '',
                          value: d,
                        },
                        u ? _.a.createElement(k, { disabled: !0, style: L.option, value: '' }) : null,
                        s.map(function (e) {
                          var t = e.disabled,
                            a = e.label,
                            n = e.value
                          return _.a.createElement(
                            k,
                            { disabled: t, key: ''.concat(a, '-').concat(n), style: L.option, value: n },
                            a,
                          )
                        }),
                      ),
                      _.a.createElement(x.a, {
                        style: [L.dropdownCaret, p && w.a.validColor, (i || n) && w.a.invalidColor],
                      }),
                    ),
                    o ? this._renderHelperText() : null,
                    f && n ? this._renderErrorText() : null,
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
                  return _.a.createElement(
                    C.b,
                    {
                      accessibilityRole: 'label',
                      color: a || t ? 'red500' : r ? 'primary' : 'gray700',
                      nativeID: this._labelID,
                      style: L.label,
                    },
                    n,
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
                      { color: 'gray700', nativeID: this._helperID, style: L.helperText },
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
                      { color: 'red500', nativeID: this._errorID, style: L.helperText },
                      this.props.errorText,
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(_.a.PureComponent)
      g()(P, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (P.propTypes = {})
      var L = E.a.create(function (e) {
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
      t.a = P
    },
    '6vad': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return m
      })
      a('yH/f')
      var n = a('ERkP'),
        r = a.n(n),
        i = a('t62R'),
        o = a('EHV7'),
        s = a('rHpw'),
        l = s.a.create(function (e) {
          return {
            icon: {
              color: e.colors.primary,
              height: e.fontSizes.title4,
              paddingRight: e.spaces.space12,
              width: e.fontSizes.title4,
            },
          }
        }),
        c = a('7Mjr'),
        d = a('I4+6'),
        u = a('cm6r'),
        p = a('MWbm'),
        m = Object.freeze({ TopicFilled: 'TOPIC_FILLED' })
      var h = s.a.create(function (e) {
        return {
          root: {
            justifyContent: 'space-between',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          mainContent: { flexDirection: 'row' },
          subtext: { alignSelf: 'flex-start' },
          withSubtext: { alignSelf: 'center' },
          icon: { alignSelf: 'flex-start', height: e.spaces.space20, justifyContent: 'center' },
          iconArrow: { color: e.colors.text },
          rightControlGroup: { flexDirection: 'row', justifyContent: 'flex-end', flexGrow: 1, alignSelf: 'center' },
        }
      })
      t.b = function (e) {
        var t = e.icon,
          a = e.landingUrl,
          n = e.nativeID,
          f = e.rightControl,
          g = e.style,
          v = e.subtext,
          y = e.testID,
          b = e.text,
          _ = (function (e) {
            switch (e) {
              case m.TopicFilled:
                return r.a.createElement(o.a, { style: l.icon })
              default:
                return null
            }
          })(t),
          C = v ? null : h.withSubtext,
          w = d.a.generate({
            backgroundColor: s.a.theme.colors.gray0,
            color: s.a.theme.colors.cellBackground,
            customFocusBackgroundColor: s.a.theme.colors.gray0,
            customHoverBackgroundColor: s.a.theme.colors.gray0,
            customPressedBackgroundColor: s.a.theme.colors.gray0,
          })
        return r.a.createElement(
          u.a,
          {
            interactiveStyles: a ? w : null,
            link: null == a ? void 0 : a.url,
            nativeID: n,
            style: [h.root, g],
            testID: y,
          },
          r.a.createElement(
            p.a,
            { accessibilityLevel: 2, accessibilityRole: 'heading', style: h.mainContent },
            r.a.createElement(p.a, { style: h.icon }, _),
            r.a.createElement(
              i.b,
              { numberOfLines: 3, size: 'headline1', style: C, weight: 'heavy', withHashflags: !0 },
              b,
            ),
            r.a.createElement(
              p.a,
              { style: h.rightControlGroup },
              a ? r.a.createElement(p.a, { style: C }, r.a.createElement(c.a, { style: h.iconArrow })) : null,
              f ? r.a.createElement(p.a, null, f) : null,
            ),
          ),
          v
            ? r.a.createElement(
                i.b,
                { color: 'gray700', numberOfLines: 2, size: 'subtext2', style: h.subtext, withHashflags: !0 },
                v,
              )
            : null,
        )
      }
    },
    '8A5z': function (e, t, a) {
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
    '9Jxp': function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('CXUS'),
        l = a('rHpw'),
        c = a('MWbm'),
        d = l.a.create(function () {
          return { hidden: { opacity: 0 } }
        })
      t.a = function (e) {
        var t = e.children,
          a = e.draggableId,
          n = e.fromVirtualList,
          i = e.index,
          l = e.isBeingDragged,
          u = e.isDragDisabled
        return n && l
          ? o.a.createElement(c.a, { style: d.hidden }, t)
          : o.a.createElement(s.b, { draggableId: a, index: i, isDragDisabled: u }, function (e) {
              return o.a.createElement('div', r()({ ref: e.innerRef }, e.draggableProps, e.dragHandleProps), t)
            })
      }
    },
    '9Q4p': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return b
      })
      a('z84I')
      var n = a('ERkP'),
        r = a.n(n),
        i = a('GTeL'),
        o = a('3XMw'),
        s = a.n(o),
        l = a('MWbm'),
        c = a('PbQQ'),
        d = a('6vad'),
        u = a('e0ey'),
        p = a('rHpw'),
        m = a('ZkMC'),
        h = s.a.j9cf595f,
        f = s.a.d69a782e,
        g = s.a.faf745f9,
        v = s.a.b96e6682,
        y = s.a.h2437f25
      function b(e) {
        var t = e.currentWarnings,
          a = e.mediaItem,
          n = e.onWarningChange,
          o = e.orientedImage,
          s = [
            { label: g, value: 'adult_content' },
            { label: v, value: 'graphic_violence' },
            { label: y, value: 'other' },
          ],
          p = c.b.useOpaqueIdentifier(),
          b = r.a.createElement(i.a, { mediaItem: a, orientedImage: o })
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
                var a = e.label,
                  i = e.value
                return r.a.createElement(u.a, { checked: t && t.has(i), key: i, label: a, name: i, onChange: n })
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
    '9gvj': function (e, t, a) {
      'use strict'
      var n = a('ddV6'),
        r = a.n(n),
        i = (a('2G9S'), a('SV7d')),
        o = a('ERkP'),
        s = a.n(o),
        l = a('TIdA'),
        c = a('t62R'),
        d = a('A91F'),
        u = a('/yvb'),
        p = a('3XMw'),
        m = a.n(p),
        h = a('oQhu'),
        f = a('rHpw'),
        g = a('XurV'),
        v = a('shC7'),
        y = a('MWbm'),
        b = a('nb/L'),
        _ = a('hOZg'),
        C = f.a.create(function (e) {
          return {
            root: {
              borderRadius: e.borderRadii.medium,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              paddingHorizontal: e.spaces.space16,
              paddingVertical: e.spaces.space12,
            },
            contentContainer: { display: 'flex', flexDirection: 'row', flex: 1 },
            contentTextContainer: { flex: 1, alignItems: 'flex-start', justifyContent: 'center' },
            dismissButton: { paddingLeft: e.spaces.space12 },
            icon: { color: e.colors.text, marginRight: e.spaces.space8 },
            illustration: { marginRight: e.spaces.space8, height: e.spaces.space28, width: e.spaces.space28 },
            arrow: { borderStyle: 'none' },
            arrowContainer: { position: 'absolute', display: 'flex', width: '100%', alignItems: 'center' },
            arrowDirectionUp: { top: 'calc(-'.concat(e.spaces.space12, ')') },
            arrowDirectionDown: { bottom: 'calc('.concat(e.spaces.space8, ' - ').concat(e.spaces.space2, ' )') },
            arrowDown: { transform: 'rotate(180deg)', position: 'absolute' },
            containerDown: { marginBottom: e.spaces.space16 },
            containerUp: { marginTop: e.spaces.space16 },
          }
        }),
        w = f.a.create(function (e) {
          return {
            primary: { backgroundColor: e.colors.primary0 },
            purple: { backgroundColor: e.colors.purple0 },
            plum: { backgroundColor: e.colors.plum0 },
          }
        }),
        T = f.a.create(function (e) {
          return {
            primary: { color: e.colors.primary0 },
            purple: { color: e.colors.purple0 },
            plum: { color: e.colors.plum0 },
          }
        })
      t.a = function (e) {
        var t,
          a,
          n,
          o = e.backgroundColor,
          p = void 0 === o ? 'primary' : o,
          f = e.behavioralEventContext,
          x = e.containerRef,
          E = e.icon,
          S = e.illustration,
          I = e.onClose,
          R = e.text,
          M = m.a.af8fa2ad,
          k = Object(g.useOpaqueIdentifier)(),
          D = s.a.useState(void 0),
          P = r()(D, 2),
          L = P[0],
          A = P[1],
          F = v.a.getConstants().isRTL,
          O = s.a.useRef(0),
          B = s.a.useRef(0),
          N = null !== (t = null == f ? void 0 : f.viewType) && void 0 !== t ? t : 'inline_tooltip',
          V = Object(h.a)(function (e) {
            return { viewType: e }
          })(N),
          z = (function () {
            if (null != x && x.current && L) {
              var e = x.current.getBoundingClientRect(),
                t = e.left,
                a = e.top,
                n = e.width
              O.current = a
              var r = t + n / 2 - L
              return { left: F ? void 0 : r, right: F ? r : void 0 }
            }
          })(),
          j = B.current < O.current,
          H = j ? [C.arrowDirectionDown] : [C.arrowDirectionUp],
          W = j ? [C.containerDown] : [C.containerUp]
        return s.a.createElement(
          s.a.Fragment,
          null,
          s.a.createElement(
            i.a,
            { behavioralEventContext: V },
            s.a.createElement(
              y.a,
              {
                onLayout: function (e) {
                  var t = e.nativeEvent.layout,
                    a = t.left,
                    n = t.top,
                    r = t.width
                  ;(B.current = n), A(a + r / 2)
                },
                style: [C.root, w[p], (null == x ? void 0 : x.current) && W],
              },
              null != x && x.current
                ? s.a.createElement(
                    y.a,
                    { style: [H, C.arrowContainer, z] },
                    s.a.createElement(b.a, { style: [C.arrow, T[p], j && C.arrowDown] }),
                  )
                : null,
              s.a.createElement(
                y.a,
                { style: C.contentContainer },
                E && !S ? ((n = E), s.a.createElement(n, { style: [C.icon, { alignItem: 'flex-start' }] })) : null,
                S && !E
                  ? ((a = S),
                    s.a.createElement(
                      y.a,
                      { style: C.illustration },
                      s.a.createElement(l.a, { accessibilityLabel: '', aspectMode: d.a.SQUARE, image: a }),
                    ))
                  : null,
                s.a.createElement(y.a, { style: C.contentTextContainer }, s.a.createElement(c.b, { nativeID: k }, R)),
              ),
              s.a.createElement(
                y.a,
                { style: C.dismissButton },
                s.a.createElement(u.a, {
                  accessibilityDescribedBy: k,
                  accessibilityLabel: M,
                  icon: s.a.createElement(_.a, null),
                  onPress: I,
                  size: 'xSmall',
                  type: 'primaryText',
                }),
              ),
            ),
          ),
        )
      }
    },
    DVtB: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return g
      }),
        a.d(t, 'a', function () {
          return y
        }),
        a.d(t, 'c', function () {
          return b
        })
      var n = a('KEM+'),
        r = a.n(n),
        i = a('yiKp'),
        o = a.n(i),
        s = a('ddV6'),
        l = a.n(s),
        c = (a('yH/f'), a('oEOe')),
        d = a('kGix'),
        u = a('Ssj5'),
        p = 'trustedFriends',
        m = Object.freeze({
          REQUEST: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_REQUEST',
          SUCCESS: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_SUCCESS',
          FAILURE: 'rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_FAILURE',
        }),
        h = Object.freeze({
          REQUEST: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_REQUEST',
          SUCCESS: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_SUCCESS',
          FAILURE: 'rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_FAILURE',
        }),
        f = 'rweb/trustedFriendsLists/SET_TRUSTED_FRIENDS_LIST',
        g = function (e) {
          return e.trustedFriends.lists
        },
        v = function () {
          return function (e, t, a) {
            var n = a.api
            return c.b(e, { request: n.TrustedFriends.createTrustedFriendsList })({
              actionTypes: h,
              context: 'CREATE_TRUSTED_FRIENDS_LIST',
            })
          }
        },
        y = function () {
          return function (e, t) {
            var a = t(),
              n = g(a)
            ;(n.length ? n[0] : void 0) ||
              e(function (e, t, a) {
                var n = a.api
                return c.b(e, { request: n.TrustedFriends.fetchAuthenticatedUserTFLists })({
                  actionTypes: m,
                  context: 'FETCH_TRUSTED_FRIENDS_LISTS',
                })
              }).then(function (t) {
                !t.authenticated_user_trusted_friends_lists.length && v && e(v())
              })
          }
        },
        b = function (e) {
          return function (t, a) {
            var n = a(),
              r = g(n),
              i = l()(r, 1)[0]
            if (i) {
              var s = o()(o()({}, i), {}, { member_count: e })
              t({ payload: s, type: f })
            }
          }
        },
        _ = Object.freeze({ lists: [], fetchStatus: d.a.NONE })
      u.a.register(
        r()({}, p, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case m.REQUEST:
              return o()(o()({}, e), {}, { fetchStatus: d.a.LOADING })
            case m.FAILURE:
              return o()(o()({}, e), {}, { error: t.payload, fetchStatus: d.a.FAILED })
            case m.SUCCESS:
              if (t.payload)
                return o()(
                  o()({}, e),
                  {},
                  { lists: t.payload.authenticated_user_trusted_friends_lists, error: null, fetchStatus: d.a.LOADED },
                )
              break
            case h.REQUEST:
              return o()(o()({}, e), {}, { fetchStatus: d.a.LOADING })
            case h.FAILURE:
              return o()(o()({}, e), {}, { error: t.payload, fetchStatus: d.a.FAILED })
            case h.SUCCESS:
              if (t.payload)
                return o()(
                  o()({}, e),
                  {},
                  { lists: [t.payload.trusted_friends_list_create], error: null, fetchStatus: d.a.LOADED },
                )
              break
            case f:
              if (t.payload) return o()(o()({}, e), {}, { lists: [t.payload] })
              break
            default:
              return e
          }
          return e
        }),
      )
    },
    Drq4: function (e, t, a) {
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
    EeFI: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        s = a('Y9Ll'),
        l = a.n(s),
        c = a('5Yy7'),
        d = a.n(c),
        u = a('2VqO'),
        p = a.n(u),
        m = a('ERkP'),
        h = a.n(m),
        f = a('3XMw'),
        g = a.n(f),
        v = a('MWbm'),
        y = a('Qwev'),
        b = a('21U8'),
        _ = a('rHpw'),
        C = a('1auM'),
        w = a('eYns'),
        T = g.a.gff1f69e,
        x = (function (e) {
          d()(a, e)
          var t = p()(a)
          function a(e) {
            var n
            return o()(this, a), ((n = t.call(this, e)).state = { orientedImage: null }), n
          }
          return (
            l()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = (this.props.media || {}).originalMediaFile,
                    a = void 0 === t ? {} : t
                  a &&
                    a instanceof C.a &&
                    Object(w.b)(a).then(function (t) {
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
                    : h.a.createElement(y.a, { accessibilityLabel: T, style: E.activityIndicator })
                },
              },
              {
                key: '_renderCropper',
                value: function () {
                  var e = this.props,
                    t = e.cropperRef,
                    a = e.defaultAspectRatio,
                    n = e.defaultCropData,
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
                        v.a,
                        { style: E.cropper },
                        h.a.createElement(b.a, {
                          circle: this.props.circle,
                          defaultAspectRatio: (n && n.aspectRatio) || (c && c.aspectRatio) || a,
                          defaultCropData: n || c,
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
            a
          )
        })(h.a.Component),
        E = _.a.create(function (e) {
          return {
            cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 },
            activityIndicator: { flexGrow: 1 },
          }
        })
      t.a = h.a.forwardRef(function (e, t) {
        return h.a.createElement(x, r()({}, e, { cropperRef: t }))
      })
    },
    G31s: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return C
      })
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        s = a('5Yy7'),
        l = a.n(s),
        c = a('2VqO'),
        d = a.n(c),
        u = a('KEM+'),
        p = a.n(u),
        m = a('ERkP'),
        h = a.n(m),
        f = a('pKoL'),
        g = a('MWbm'),
        v = a('rHpw'),
        y = a('ZvMt'),
        b = a('9Xij'),
        _ = a('v6aA'),
        C = (function (e) {
          l()(a, e)
          var t = d()(a)
          function a() {
            return r()(this, a), t.apply(this, arguments)
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.media,
                    a = e.style
                  return h.a.createElement(g.a, { style: a }, this._renderImageGroup(t.length))
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
                    a = (e && !t && e[0].externalMediaDetails) || {},
                    n = a.height,
                    r = a.width,
                    i = v.a.theme.aspectRatios.landscape
                  if (t) {
                    var o,
                      s,
                      l = v.a.theme.aspectRatios.minTimelineImage,
                      c = v.a.theme.aspectRatios.maxTimelineImage
                    i = y.a.getImageAspectRatio(l, c, {
                      width: null === (o = e[0].mediaFile) || void 0 === o ? void 0 : o.width,
                      height: null === (s = e[0].mediaFile) || void 0 === s ? void 0 : s.height,
                    })
                  }
                  return h.a.createElement(
                    b.a,
                    { ratio: t ? i : r / n },
                    h.a.createElement(g.a, { style: w.mediaPreviewWrapper }, this._renderMediaAtIndex(0)),
                  )
                },
              },
              {
                key: '_renderGroupOf2',
                value: function () {
                  return h.a.createElement(
                    b.a,
                    { ratio: v.a.theme.aspectRatios.landscape },
                    h.a.createElement(
                      g.a,
                      { style: w.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, w.gutterRight),
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
                    { ratio: v.a.theme.aspectRatios.landscape },
                    h.a.createElement(
                      g.a,
                      { style: w.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, w.gutterRight),
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
                    { ratio: v.a.theme.aspectRatios.landscape },
                    h.a.createElement(
                      g.a,
                      { style: w.mediaPreviewWrapper },
                      this._renderColumnWithIndices([0, 2], w.gutterRight),
                      this._renderColumnWithIndices([1, 3]),
                    ),
                  )
                },
              },
              {
                key: '_renderColumnWithIndices',
                value: function (e, t) {
                  return h.a.createElement(
                    g.a,
                    { style: [w.column, t] },
                    this._renderMediaAtIndex(e[0], w.gutterBottom),
                    this._renderMediaAtIndex(e[1]),
                  )
                },
              },
              {
                key: '_renderMediaAtIndex',
                value: function (e, t) {
                  var a,
                    n,
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
                    g = o.onSetMediaPreviewRef,
                    v = c[e],
                    y = null === (a = v.mediaMetadata) || void 0 === a ? void 0 : a.altText,
                    b = null === (n = v.mediaMetadata) || void 0 === n ? void 0 : n.defaultAltText,
                    _ = !(
                      null === (r = v.mediaMetadata) ||
                      void 0 === r ||
                      null === (i = r.sensitiveMediaWarning) ||
                      void 0 === i ||
                      !i.size
                    ),
                    C = u && s && l,
                    T = C && _ && !!p
                  return h.a.createElement(f.a, {
                    accessibilityLabel: y || b,
                    accessibilityRole: 'group',
                    enableGif: l,
                    key: v.id,
                    mediaItem: v,
                    onClick: d ? d(v.id) : void 0,
                    onEdit: u ? u(v.id) : void 0,
                    onEditSensitiveWarning: p && T ? p(v.id) : void 0,
                    onRemove: m(v.id),
                    ref: g,
                    style: [w.mediaContainer, t],
                    withAltTextLabel: !!y,
                    withCloseButton: s && l,
                    withEditButton: C,
                    withEditSensitiveWarningButton: T,
                  })
                },
              },
            ]),
            a
          )
        })(h.a.Component)
      p()(C, 'contextType', _.a)
      var w = v.a.create(function (e) {
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
    GTeL: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n),
        i = a('3XMw'),
        o = a.n(i),
        s = a('pKoL'),
        l = a('Qwev'),
        c = a('rHpw'),
        d = a('U+bB'),
        u = a('MWbm'),
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
          a = e.orientedImage
        return r.a.createElement(
          u.a,
          { style: m.mediaPreviewWrapper },
          void 0 === a && t
            ? r.a.createElement(s.a, {
                imageResizeMode: 'contain',
                mediaItem: t,
                style: m.mediaContainer,
                withCloseButton: !1,
              })
            : a
            ? r.a.createElement(d.a, { resizeMode: 'contain', source: a.url, style: m.image })
            : r.a.createElement(l.a, { accessibilityLabel: p, style: m.activityIndicator }),
        )
      }
    },
    LtQU: function (e, t, a) {
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
                d: 'M19 10H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1zm0 6H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    M6MT: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return n
      }),
        a.d(t, 'a', function () {
          return r
        })
      a('yH/f')
      var n = Object.freeze({ granted: 'granted', denied: 'denied', prompt: 'prompt' }),
        r = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 })
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
    PKbs: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return R
      })
      a('yH/f'), a('M+/F'), a('z84I'), a('ho0z'), a('1t7P'), a('jQ/y')
      var n = a('ERkP'),
        r = a.n(n),
        i = a('v6aA'),
        o = a('t62R'),
        s = a('3XMw'),
        l = a.n(s),
        c = a('MWbm'),
        d = r.a.createElement(
          l.a.I18NFormatMessage,
          { $i18n: 'i5ba24f4' },
          r.a.createElement(
            o.b,
            { link: 'https://help.twitter.com/en/rules-and-policies/twitter-rules', withInteractiveStyling: !1 },
            l.a.b154b059,
          ),
        ),
        u = function (e) {
          var t = e.containerStyle,
            a = e.explanation,
            n = e.explanationStyle,
            i = e.heading
          return r.a.createElement(c.a, { style: t }, i, r.a.createElement(o.b, { color: 'gray700', style: n }, a || d))
        },
        p = a('csss'),
        m = function (e) {
          var t = e.getPivotLink,
            a = e.renderBadge,
            n = e.rules
          return r.a.createElement(
            r.a.Fragment,
            null,
            n.map(function (e, n) {
              var i = e.description,
                s = e.name,
                l = e.rest_id,
                c = t(e),
                d = a(n + 1),
                u = r.a.createElement(o.b, { weight: 'bold' }, s)
              return r.a.createElement(p.a, { description: i, key: l, label: u, link: c, thumbnail: d })
            }),
          )
        },
        h = a('97Jx'),
        f = a.n(h),
        g = a('ddV6'),
        v = a.n(g),
        y = (a('hCOa'), a('87if'), a('Ee2X'), a('9Jxp')),
        b = a('LtQU'),
        _ = a('rHpw'),
        C = _.a.create(function (e) {
          return { icon: { color: e.colors.gray300, flexShrink: 0, paddingLeft: e.spaces.space12 } }
        }),
        w = function (e) {
          var t = e.badge,
            a = e.rule,
            n = a.description,
            i = a.name,
            s = r.a.createElement(o.b, { weight: 'bold' }, i)
          return r.a.createElement(p.a, {
            description: n,
            label: s,
            renderRightContent: function () {
              return r.a.createElement(b.a, { style: C.icon })
            },
            thumbnail: t,
          })
        },
        T = a('CXUS'),
        x = function (e) {
          var t = e.onReorder,
            a = e.renderBadge,
            n = e.rules
          return r.a.createElement(
            T.a,
            {
              onDragEnd: function (e) {
                if (e.destination) {
                  var a = (function (e, t, a) {
                    var n = Array.from(e),
                      r = n.splice(t, 1),
                      i = v()(r, 1)[0]
                    return n.splice(a, 0, i), n
                  })(n, e.source.index, e.destination.index)
                  t(a)
                }
              },
            },
            r.a.createElement(T.c, { droppableId: 'droppable' }, function (e, t) {
              return r.a.createElement(
                'div',
                f()({}, e.droppableProps, { ref: e.innerRef }),
                n.map(function (e, n) {
                  var i = e.rest_id
                  return r.a.createElement(
                    y.a,
                    { draggableId: i, index: n, isBeingDragged: t.draggingFromThisWith === i, key: i },
                    r.a.createElement(w, { badge: a(n + 1), rule: e }),
                  )
                }),
                e.placeholder,
              )
            }),
          )
        },
        E = a('C6f5'),
        S = a('X00g'),
        I = a('h0NW'),
        R = Object.freeze({ Default: 'Default', Pivot: 'Pivot', Reorder: 'Reorder' }),
        M = function (e, t) {
          var a = t.badgeStyle,
            n = t.enabled,
            i = t.theme,
            s = S.a.getCommunityUIColor(i)
          return r.a.createElement(
            c.a,
            { style: [k.badge, n && { backgroundColor: s }, a] },
            r.a.createElement(o.b, { align: 'center', color: 'white', weight: 'bold' }, e),
          )
        },
        k = _.a.create(function (e) {
          return {
            badge: {
              backgroundColor: e.colors.primary,
              borderRadius: e.borderRadii.infinite,
              justifyContent: 'center',
              overflow: 'hidden',
              height: e.spaces.space32,
              width: e.spaces.space32,
            },
            bottomMargin: { marginBottom: E.a },
          }
        })
      t.b = function (e) {
        var t = e.badgeStyle,
          a = e.displayType,
          n = void 0 === a ? R.Default : a,
          o = e.explanation,
          s = e.getPivotLink,
          l = e.headerContainerStyle,
          d = e.headerExplanationStyle,
          p = e.heading,
          h = e.limit,
          f = e.onReorder,
          g = e.ruleContainerStyle,
          v = e.rules,
          y = e.theme,
          b = e.withBottomMargin,
          _ = void 0 !== b && b,
          C = e.withHeader,
          w = void 0 === C || C,
          T = {
            theme: y,
            enabled: r.a.useContext(i.a).featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            badgeStyle: t,
          },
          E = (function (e, t, a) {
            return (t ? e.slice(0, t) : e).map(function (e, t) {
              return { label: e.name, description: e.description, decoration: M(t + 1, a) }
            })
          })(v, h, T),
          S = function (e) {
            return M(e, T)
          }
        return E.length > 0
          ? r.a.createElement(
              c.a,
              { style: _ ? k.bottomMargin : null },
              w ? r.a.createElement(u, { containerStyle: l, explanation: o, explanationStyle: d, heading: p }) : null,
              n === R.Pivot && s
                ? r.a.createElement(m, { getPivotLink: s, renderBadge: S, rules: v })
                : n === R.Reorder && f
                ? r.a.createElement(x, { onReorder: f, renderBadge: S, rules: v })
                : r.a.createElement(I.a, { containerStyle: g, items: E }),
            )
          : null
      }
    },
    PrL8: function (e, t, a) {
      'use strict'
      var n = a('rHpw').a.create(function (e) {
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
      t.a = n
    },
    Rqga: function (e, t, a) {
      var n = a('ax0f'),
        r = Math.log,
        i = Math.LN2
      n(
        { target: 'Math', stat: !0 },
        {
          log2: function (e) {
            return r(e) / i
          },
        },
      )
    },
    WOwf: function (e, t, a) {
      'use strict'
      function n(e, t) {
        return Math.min(1, 1 - e / t)
      }
      a.d(t, 'a', function () {
        return n
      })
    },
    Zg3A: function (e, t, a) {
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
                d: 'M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm8.472 9.442c-.242.19-.472.368-.63.486-.68-1.265-1.002-1.78-1.256-2.007-.163-.145-.37-.223-.78-.375-.367-.136-1.482-.55-1.65-.85-.087-.153.136-.602.23-.793.088-.177.164-.33.196-.497.123-.646-.33-1.146-.728-1.59-.066-.072-.153-.17-.23-.26.335-.12.862-.26 1.42-.384 1.95 1.448 3.26 3.704 3.428 6.272zm-9.788-7.83c.076.25.145.5.182.678-.255.15-.663.363-.96.52-.262.136-.522.273-.738.392-.247.137-.442.234-.6.313-.347.174-.598.3-.833.553-.068.073-.26.278-1.02 1.886l-1.79-.656c1.293-1.94 3.362-3.31 5.76-3.685zM12 20.5c-4.687 0-8.5-3.813-8.5-8.5 0-1.197.25-2.335.7-3.37.47.182 1.713.66 2.75 1.035-.107.336-.245.854-.26 1.333-.03.855.502 1.7.562 1.792.053.08.12.15.2.207.303.21.687.5.827.616.063.343.166 1.26.23 1.833.144 1.266.175 1.48.24 1.65.005.012.514 1.188 1.315 1.188.576-.003.673-.206 1.855-2.688.244-.512.45-.95.513-1.058.1-.144.597-.61.87-.83.55-.442.76-1.82.413-2.682-.335-.83-1.92-2.08-2.5-2.195-.17-.033-.43-.04-.953-.053-.497-.01-1.25-.028-1.536-.09-.098-.024-.314-.094-.605-.196.32-.668.627-1.28.71-1.4.05-.052.168-.112.408-.234.17-.086.383-.192.653-.34.208-.116.458-.247.71-.38 1.168-.612 1.484-.8 1.658-1.082.11-.177.263-.44-.04-1.544 1.042.027 2.038.24 2.955.61-.89.32-1.024.595-1.106.77-.367.784.256 1.475.667 1.93.096.107.24.268.32.38l-.017.036c-.234.472-.67 1.35-.196 2.194.406.72 1.384 1.13 2.437 1.52.134.05.25.092.33.126.16.208.496.79 1 1.735l.154.285c.078.14.33.505.842.505.167 0 .363-.04.59-.137.032-.013.083-.035.18-.094C19.72 17.405 16.22 20.5 12 20.5zm-3.812-9.45c.01-.285.102-.646.184-.907l.027.006c.397.09 1.037.11 1.83.13.32.006.59.008.615 0 .326.143 1.355 1 1.483 1.31.113.28.05.812-.034 1.01-.233.197-.845.735-1.085 1.078-.093.13-.212.373-.64 1.274-.133.276-.313.654-.488 1.013-.026-.225-.054-.472-.08-.686-.225-2.003-.273-2.22-.42-2.445-.05-.078-.202-.31-1.135-.973-.117-.213-.268-.564-.26-.813z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    'a/ea': function (e, t, a) {
      'use strict'
      a.d(t, 'c', function () {
        return u
      }),
        a.d(t, 'd', function () {
          return p
        }),
        a.d(t, 'e', function () {
          return h
        }),
        a.d(t, 'a', function () {
          return g
        }),
        a.d(t, 'b', function () {
          return v
        })
      var n = a('KEM+'),
        r = a.n(n),
        i = a('yiKp'),
        o = a.n(i),
        s = (a('yH/f'), a('7x/C'), a('JtPf'), a('M6MT')),
        l = a('Ssj5'),
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
        g = function () {
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
        v = function () {
          return function (e, t) {
            return p(t()) ? Promise.resolve() : e(g())
          }
        },
        y = function () {
          return new Promise(function (e, t) {
            return navigator.geolocation.getCurrentPosition(function (t) {
              var a = {
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
              return e(a)
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
    c0ZR: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      })
      a('7x/C'), a('JtPf'), a('849X'), a('TJCb')
      var n = function (e) {
        return new Promise(function (t, a) {
          var n = new window.XMLHttpRequest()
          ;(n.responseType = 'blob'),
            (n.onreadystatechange = function () {
              n.readyState === window.XMLHttpRequest.DONE &&
                (200 === n.status ? t(n.response) : a(new Error('Unexpected status code')))
            }),
            (n.onerror = function (e) {
              return a(e)
            }),
            (n.ontimeout = function (e) {
              return a(e)
            }),
            n.open('GET', e, !0),
            n.send()
        })
      }
    },
    h5NW: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        i = a('RhWx'),
        o = a.n(i),
        s = a('yiKp'),
        l = a.n(s),
        c = a('VrFO'),
        d = a.n(c),
        u = a('Y9Ll'),
        p = a.n(u),
        m = a('1Pcy'),
        h = a.n(m),
        f = a('5Yy7'),
        g = a.n(f),
        v = a('2VqO'),
        y = a.n(v),
        b = a('KEM+'),
        _ = a.n(b),
        C =
          (a('2G9S'),
          a('yH/f'),
          a('jwue'),
          a('7x/C'),
          a('+oxZ'),
          a('5BYb'),
          a('KqXw'),
          a('3uku'),
          a('7xRU'),
          a('JtPf'),
          a('jQ3i'),
          a('x4t0'),
          a('lTEL'),
          a('87if'),
          a('kYxP'),
          a('z84I'),
          a('hBvt'),
          a('MvUL'),
          a('ulNE'),
          a('urw/'),
          a('LW0h'),
          a('hCOa'),
          a('DfhM'),
          a('vrRf'),
          a('uFXj'),
          a('ERkP')),
        w = a.n(C),
        T = a('dDSG'),
        x = a('pXBW'),
        E = a('6/RC'),
        S = (a('KOtZ'), a('ho0z'), a('hBpG'), a('wpu3')),
        I = a('ddV6'),
        R = a.n(I),
        M = a('+Kfv'),
        k = a('eSoz'),
        D = a('rxPX'),
        P = function (e, t) {
          var a = t.communityId
          return a ? k.c.select(e, a) : void 0
        },
        L = Object(D.a)().propsFromState(function () {
          return { community: P }
        }),
        A = a('MtXG'),
        F = a('t62R'),
        O = a('CKsB'),
        B = a('rHpw'),
        N = a('3XMw'),
        V = a.n(N),
        z = V.a.d58baa7e,
        j = L(
          w.a.memo(function (e) {
            var t = e.clickHandler,
              a = e.community,
              n = e.communityId,
              r = e.selectedCommunityId
            if (!a) return null
            var i,
              o = a.member_count
            return w.a.createElement(O.a, {
              actionSubText:
                ((i = z(o)),
                w.a.createElement(
                  A.a.Group,
                  null,
                  w.a.createElement(
                    A.a,
                    null,
                    w.a.createElement(
                      F.b,
                      { color: 'white' },
                      w.a.createElement(
                        V.a.I18NFormatMessage,
                        { $i18n: 'b38e130b' },
                        w.a.createElement(A.a.Value, null, V.a.ibd0106d({ formattedCount: i })),
                        w.a.createElement(A.a.Label, null, V.a.cface2d0({ count: o })),
                      ),
                    ),
                  ),
                )),
              actionText: a.name,
              isSelected: r === n,
              key: n,
              media: a.media,
              onClick: t({
                _type: 'community_members',
                communityIdValue: n,
                conversationControlsValue: 'community_members',
              }),
              selectable: !0,
              style: H.menuItem,
            })
          }),
        ),
        H = B.a.create(function (e) {
          return { menuItem: { alignItems: 'center' } }
        }),
        W = a('0zXz'),
        U = a('FS1z'),
        G = a('Irs7'),
        K = a('MWbm'),
        q = a('yw4N'),
        X = a('/yvb'),
        Y = a('+Eiw'),
        Q = a('Zg3A'),
        J = a('EyD/'),
        Z = a('5wO0'),
        $ = V.a.e815fc33,
        ee = V.a.c63602d3,
        te = V.a.baffe39a,
        ae = V.a.aa4209e8,
        ne = V.a.d0748dae,
        re = V.a.abd845fd,
        ie = { viewType: 'everyone' },
        oe = { viewType: 'community' },
        se = V.a.d58baa7e,
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
        ce = function (e) {
          var t,
            a,
            n,
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
            g = o.communityIdValue || void 0,
            v = o.exclusivityControlValue || void 0,
            y = o.trustedFriendsValue || void 0,
            b = null === (t = e.trustedFriendsList) || void 0 === t ? void 0 : t.rest_id,
            _ =
              null !== (a = null === (n = e.trustedFriendsList) || void 0 === n ? void 0 : n.member_count) &&
              void 0 !== a
                ? a
                : 0,
            C = Object(G.b)(),
            T = w.a.useCallback(
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
            { style: le.root },
            w.a.createElement(
              q.a,
              { style: le.viewport },
              w.a.createElement(
                w.a.Fragment,
                null,
                w.a.createElement(F.b, { size: 'headline1', style: le.title, weight: 'bold' }, $),
                w.a.createElement(
                  M.a,
                  { behavioralEventContext: ie },
                  w.a.createElement(O.a, {
                    Icon: Q.a,
                    actionText: te,
                    isSelected: !v && !g && !y,
                    onClick: T({ _type: 'conversation_controls', conversationControlsValue: 'all' }),
                    selectable: !0,
                    style: le.menuItem,
                    withIconAsThumbnail: !0,
                  }),
                ),
                u
                  ? w.a.createElement(O.a, {
                      Icon: J.a,
                      actionText: ae,
                      iconThumbnailColor: 'exclusive',
                      isSelected: !!v,
                      onClick: T({
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
                  ? w.a.createElement(O.a, {
                      Icon: Z.a,
                      actionSubText:
                        ((r = _),
                        (i = se(r)),
                        w.a.createElement(
                          A.a.Group,
                          null,
                          w.a.createElement(
                            A.a,
                            null,
                            w.a.createElement(
                              F.b,
                              { color: 'white' },
                              w.a.createElement(
                                V.a.I18NFormatMessage,
                                { $i18n: 'g8ffaf17' },
                                w.a.createElement(A.a.Value, null, V.a.a5f7b70f({ formattedCount: i })),
                                w.a.createElement(A.a.Label, null, V.a.a7daec1e({ count: r })),
                              ),
                            ),
                            w.a.createElement(X.a, { onPress: x, size: 'xSmall', type: 'primaryText' }, re),
                          ),
                        )),
                      actionText: ne,
                      iconThumbnailColor: 'success',
                      isSelected: !!y,
                      onClick: T({
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
              l && h && d
                ? w.a.createElement(
                    K.a,
                    null,
                    w.a.createElement(
                      M.a,
                      { behavioralEventContext: oe },
                      w.a.createElement(F.b, { style: le.title, weight: 'bold' }, ee),
                      w.a.createElement(U.a, {
                        module: h,
                        noItemsRenderer: W.a,
                        renderer: function (e) {
                          return w.a.createElement(j, {
                            clickHandler: T,
                            communityId: e,
                            dismiss: s,
                            key: e,
                            selectedCommunityId: g,
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
        de = a('v6aA'),
        ue = a('xVN5'),
        pe = a('wa7Z'),
        me = a('hqKg'),
        he = a('li/m'),
        fe = a('RqPI'),
        ge = a('xZGM'),
        ve = a('0KEI'),
        ye = a('DVtB'),
        be = function (e, t) {
          var a = t.audienceControlsValue.communityIdValue || void 0
          return a ? k.c.select(e, a) : void 0
        },
        _e = function (e, t) {
          return Object(ge.D)(e, ge.f)
        },
        Ce = function (e, t) {
          return Object(ge.D)(e, ge.w)
        },
        we = function (e) {
          var t = Object(ye.b)(e)
          return t.length ? t[0] : void 0
        },
        Te = Object(D.a)()
          .propsFromState(function () {
            return {
              communities: k.f,
              educationalVisibilityFlag: _e,
              trustedFriendsEducationVisibilityFlag: Ce,
              hasMemberships: he.d,
              selectedCommunity: be,
              sliceModule: Object(me.createSelector)(fe.r, function (e) {
                return e ? Object(pe.b)(e) : void 0
              }),
              selectTrustedFriendsList: we,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ve.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_CONTROLS',
              ),
              addEducationFlag: function () {
                return Object(ge.z)(ge.f)
              },
              addTrustedFriendsEducationFlag: function () {
                return Object(ge.z)(ge.w)
              },
              updateSingleComposer: ue.w,
              fetchOrCreateTrustedFriendsList: ye.a,
            }
          }),
        xe = a('FG+G'),
        Ee = a.p + 'twitter-circle.b1a74a95.svg',
        Se = a('TIdA'),
        Ie = a('A91F'),
        Re = V.a.f0598964,
        Me = V.a.ceec051b,
        ke = V.a.fc5bfd95,
        De = V.a.f5b3dc1d,
        Pe = B.a.create(function (e) {
          return {
            root: { flexDirection: 'column', paddingBottom: e.spaces.space4, borderRadius: e.borderRadii.xLarge },
            modal: { borderRadius: e.borderRadii.none },
            title: { flexDirection: 'column', paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space12 },
            createButton: { marginTop: e.spaces.space16, marginHorizontal: e.spaces.space16 },
            cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 },
            coverContainer: { height: '170px', width: '100%' },
          }
        }),
        Le = function (e) {
          var t = e.onAction,
            a = e.setShowTrustedFriendsModal
          return w.a.createElement(
            w.a.Fragment,
            null,
            w.a.createElement(
              K.a,
              {
                accessibilityDescribedBy: 'trusted-friends-education-popover',
                accessibilityLabelledBy: 'trustd-friends-education-title',
                accessibilityRole: 'dialog',
                style: Pe.root,
              },
              w.a.createElement(
                K.a,
                { style: Pe.coverContainer },
                w.a.createElement(Se.a, { accessibilityLabel: '', aspectMode: Ie.a.COVER, image: Ee }),
              ),
              w.a.createElement(
                K.a,
                { style: Pe.title },
                w.a.createElement(
                  F.b,
                  { nativeID: 'conversation-controls-title', size: 'title3', style: Pe.title, weight: 'bold' },
                  Re,
                ),
                w.a.createElement(
                  F.b,
                  { color: 'gray700', nativeID: 'conversation-controls-details', size: 'body', style: Pe.createButton },
                  Me,
                ),
                w.a.createElement(
                  X.a,
                  {
                    onPress: function () {
                      t(), a(!0)
                    },
                    size: 'xLarge',
                    style: Pe.createButton,
                    type: 'primaryFilled',
                  },
                  ke,
                ),
                w.a.createElement(
                  X.a,
                  {
                    key: 'button_cancel',
                    onPress: function () {
                      t()
                    },
                    size: 'xLarge',
                    style: Pe.cancelButton,
                    type: 'primaryOutlined',
                  },
                  De,
                ),
              ),
            ),
          )
        },
        Ae = a('7JQg'),
        Fe = a('feu+'),
        Oe = a('cOhU'),
        Be = a('a5gf'),
        Ne = a('Lsrn'),
        Ve = a('k/Ka'),
        ze = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ve.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Ne.a.root, e.style],
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
      ze.metadata = { width: 24, height: 24 }
      var je = ze,
        He = V.a.e76b4485,
        We = V.a.j24c37b2,
        Ue = V.a.bb55e8ed,
        Ge = V.a.h3fad86e,
        Ke = V.a.g31872be,
        qe = V.a.b28ec85f,
        Xe = V.a.h0318479
      function Ye(e) {
        var t = e.changeAudienceToTrustedFriends,
          a = e.history,
          n = e.setShowModal,
          r = e.trustedFriendsListId,
          i = w.a.useCallback(
            function () {
              t(), r && (n(!1), a.push('/i/circles/'.concat(r, '/members')))
            },
            [a, n, r, t],
          ),
          o = w.a.useCallback(
            function () {
              n(!1), t()
            },
            [n, t],
          ),
          s = w.a.createElement(
            w.a.Fragment,
            null,
            w.a.createElement(
              K.a,
              { style: Qe.contentWrapper },
              w.a.createElement(K.a, null, w.a.createElement(Oe.a, { style: Qe.icon })),
              w.a.createElement(
                K.a,
                { style: Qe.subtextContainer },
                w.a.createElement(
                  F.b,
                  { align: 'left', color: 'text', style: Qe.subtextContainer, weight: 'bold' },
                  Ue,
                ),
                w.a.createElement(F.b, { align: 'left', color: 'gray700' }, Ge),
              ),
            ),
            w.a.createElement(
              K.a,
              { style: Qe.contentWrapper },
              w.a.createElement(K.a, null, w.a.createElement(Be.a, { style: Qe.icon })),
              w.a.createElement(
                K.a,
                { style: Qe.subtextContainer },
                w.a.createElement(F.b, { color: 'text', weight: 'bold' }, Ke),
                w.a.createElement(F.b, { color: 'gray700' }, qe),
              ),
            ),
            w.a.createElement(
              K.a,
              { style: Qe.contentWrapper },
              w.a.createElement(K.a, null, w.a.createElement(je, { style: Qe.icon })),
              w.a.createElement(
                K.a,
                { style: Qe.subtextContainer },
                w.a.createElement(F.b, { color: 'text', weight: 'bold' }, Xe),
                w.a.createElement(
                  F.b,
                  { color: 'gray700' },
                  w.a.createElement(
                    V.a.I18NFormatMessage,
                    { $i18n: 'c97dfde4' },
                    w.a.createElement(
                      F.b,
                      {
                        color: 'text',
                        link: 'https://help.twitter.com/using-twitter/twitter-circle',
                        style: Qe.learnMore,
                        weight: 'bold',
                        withUnderline: !0,
                      },
                      V.a.b2f72d11,
                    ),
                  ),
                ),
              ),
            ),
          )
        return w.a.createElement(
          Ae.c,
          null,
          w.a.createElement(Fe.a, {
            actionLabel: We,
            headline: He,
            onAction: i,
            onClose: o,
            subtext: s,
            withCloseButton: !0,
          }),
        )
      }
      var Qe = B.a.create(function (e) {
          return {
            subtextContainer: { display: 'flex', flexDirection: 'column', width: '100%' },
            icon: { color: e.colors.green500, paddingTop: e.spaces.space4, paddingRight: e.spaces.space24 },
            learnMore: { whiteSpace: 'nowrap' },
            contentWrapper: { display: 'flex', flexDirection: 'row', paddingTop: e.spaces.space32 },
          }
        }),
        Je = a('FGLp'),
        Ze = a('X00g'),
        $e = a('Sp5X'),
        et = a('efqG'),
        tt = V.a.baffe39a,
        at = V.a.e815fc33,
        nt = V.a.aa4209e8,
        rt = V.a.d0748dae,
        it = { viewType: 'communities_controls' },
        ot = w.a.createElement(xe.a, null)
      var st = B.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spaces.space4 },
            container: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
            hidden: { visibility: 'hidden' },
            root: { flexDirection: 'column', paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 },
          }
        }),
        lt = Te(function (e) {
          var t,
            a = w.a.useContext(de.a),
            n = w.a.useState(!1),
            i = R()(n, 2),
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
            g = e.hasMemberships,
            v = e.isC9sParticipationEnabled,
            y = e.isSuperFollowsCreator,
            b = e.isTrustedFriendsEnabled,
            _ = e.onAudienceControlsValueChange,
            C = e.selectTrustedFriendsList,
            T = e.selectedCommunity,
            x = e.sliceModule,
            E = e.trustedFriendsEducationVisibilityFlag,
            S = e.updateSingleComposer,
            I = a.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            k = h.communityIdValue || !1,
            D = h.exclusivityControlValue || !1,
            P = h.trustedFriendsValue || !1,
            L = null == C ? void 0 : C.rest_id,
            A = b && E,
            F = (f && !T) || A,
            O = tt
          if ((k && null != T && T.name ? (O = T.name) : D ? (O = nt) : P && (O = rt), D))
            t = { color: 'plum500', borderColor: 'plum500', backgroundColor: 'transparent' }
          else if (P) t = { color: 'green500', borderColor: 'green500', backgroundColor: 'transparent' }
          else if (k && null != T && T.theme && I) {
            var B = Ze.a.getCommunityUIColorName(T.theme)
            t = { color: B, borderColor: B, backgroundColor: 'transparent' }
          } else t = { type: 'brandOutlined' }
          Object(Je.a)(function () {
            var t = e.fetchOrCreateTrustedFriendsList
            b && (null == t || t())
          })
          var N = w.a.useCallback(
              function () {
                u(!1), p(), m()
              },
              [p, m],
            ),
            V = w.a.useCallback(
              function (e) {
                return A && !k
                  ? w.a.createElement(Le, { history: $e.a, onAction: e, setShowTrustedFriendsModal: s })
                  : w.a.createElement(ce, {
                      audienceControlsValue: h,
                      dismiss: e,
                      hasMemberships: g,
                      history: $e.a,
                      isC9sParticipationEnabled: v,
                      isSuperFollowsCreator: y,
                      isTrustedFriendsEnabled: b,
                      onAudienceControlsValueChange: function (e) {
                        N(), _(e)
                      },
                      sliceModule: x,
                      trustedFriendsList: C,
                      updateSingleComposer: S,
                    })
              },
              [N, x, S, h, g, v, y, C, _, k, A, b],
            ),
            z = w.a.useCallback(
              function () {
                L &&
                  _({
                    _type: 'trusted_friends_tweet',
                    conversationControlsValue: 'trusted_friends_tweet',
                    trustedFriendsMemberCount: null == C ? void 0 : C.member_count,
                    trustedFriendsValue: { trusted_friends_list_id: L },
                  })
              },
              [_, L, C],
            )
          return y || g || (b && e.selectTrustedFriendsList)
            ? w.a.createElement(
                M.a,
                { behavioralEventContext: it },
                w.a.createElement(
                  K.a,
                  { style: st.container },
                  o
                    ? w.a.createElement(Ye, {
                        changeAudienceToTrustedFriends: z,
                        history: $e.a,
                        setShowModal: s,
                        trustedFriendsListId: L,
                      })
                    : null,
                  w.a.createElement(
                    et.a,
                    {
                      onDismiss: N,
                      onOpen: function () {
                        u(!0)
                      },
                      renderContent: V,
                      visibilityBehavior: F && !o ? 'forceVisible' : 'interactive',
                    },
                    w.a.createElement(
                      X.a,
                      r()(
                        {
                          accessibilityExpanded: d,
                          accessibilityHasPopup: 'menu',
                          accessibilityLabel: at,
                          accessibilityRole: 'button',
                          icon: ot,
                          size: 'xSmall',
                        },
                        t,
                      ),
                      O,
                    ),
                  ),
                ),
              )
            : null
        }),
        ct = a('PKbs'),
        dt = function (e, t) {
          var a = t.selectedCommunityId
          return a ? k.c.select(e, a) : void 0
        },
        ut = Object(D.a)()
          .propsFromState(function () {
            return { community: dt }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ve.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_RULES'),
              fetchCommunityIfNeeded: k.c.fetchOneIfNeeded,
            }
          }),
        pt = a('YeIG'),
        mt = a('21zW'),
        ht = V.a.gfca5254,
        ft = V.a.f510c8b2,
        gt = w.a.createElement(F.b, { weight: 'bold' }, ft),
        vt = B.a.create(function (e) {
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
        yt = ut(function (e) {
          var t = e.community,
            a = e.createLocalApiErrorHandler,
            n = e.fetchCommunityIfNeeded,
            i = e.selectedCommunityId,
            o = e.showMiddot
          w.a.useEffect(
            function () {
              i && Object(pt.a)(t) && n(i).catch(a())
            },
            [t, i, a, n],
          )
          var s = w.a.useState(!1),
            l = R()(s, 2),
            c = l[0],
            d = l[1],
            u = w.a.useContext(de.a).featureSwitches,
            p = w.a.useCallback(
              function (e) {
                if (null != t && t.rules) {
                  var a = t.rules,
                    n = t.theme
                  return w.a.createElement(ct.b, {
                    badgeStyle: vt.badgeStyle,
                    headerContainerStyle: vt.rulesHeader,
                    heading: gt,
                    ruleContainerStyle: vt.ruleContainerStyle,
                    rules: a,
                    theme: n,
                  })
                }
                return null
              },
              [t],
            )
          if (null != t && t.rules && t.rules.length > 0) {
            var m = t.theme,
              h = Ze.a.getCommunityUIColorName(m),
              f = u.isTrue('c9s_ui_colors_enabled_rweb')
                ? { color: h, borderColor: 'transparent', backgroundColor: 'transparent' }
                : { type: 'brandText' }
            return w.a.createElement(
              K.a,
              { style: vt.container },
              o ? w.a.createElement(mt.a, null) : null,
              w.a.createElement(
                et.a,
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
                      style: vt.button,
                    },
                    f,
                  ),
                  ht,
                ),
              ),
            )
          }
          return null
        }),
        bt = a('ii+P'),
        _t = a('4zmP'),
        Ct = V.a.g46f363d,
        wt = { viewType: 'rule_education' },
        Tt = function () {
          var e = Object(bt.b)(ge.g),
            t = R()(e, 2),
            a = t[0],
            n = t[1]
          return (
            w.a.useEffect(
              function () {
                return n
              },
              [n],
            ),
            a
              ? w.a.createElement(
                  K.a,
                  { style: xt.container },
                  w.a.createElement(_t.a, { behavioralEventContext: wt, onClose: n, text: Ct, withCloseButton: !0 }),
                )
              : null
          )
        },
        xt = B.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space8 } }
        }),
        Et = w.a.memo(Tt),
        St = a('H7Rt'),
        It = a('m3Bd'),
        Rt = a.n(It),
        Mt = a('yZqq'),
        kt = function (e, t) {
          return Object(ge.D)(e, ge.s)
        },
        Dt = Object(D.a)()
          .propsFromState(function () {
            return { shouldShowEducation: kt }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(ge.z)(ge.s)
              },
            }
          }),
        Pt = a('9gvj'),
        Lt = V.a.aa65a449,
        At = { viewType: 'persistent_conversation_controls_education' }
      var Ft = B.a.create(function (e) {
          return { container: { width: '100%' } }
        }),
        Ot = Dt(function (e) {
          var t = e.addEducationFlag,
            a = e.buttonRef,
            n = e.shouldShowEducation,
            r = w.a.useContext(de.a).featureSwitches,
            i = function () {
              t()
            }
          return (
            w.a.useEffect(function () {
              return i
            }, []),
            !0 === r.getValueWithoutScribeImpression('conversation_controls_persistence_enabled') && n
              ? w.a.createElement(
                  K.a,
                  { style: Ft.container },
                  w.a.createElement(Pt.a, { behavioralEventContext: At, containerRef: a, onClose: i, text: Lt }),
                )
              : null
          )
        }),
        Bt = a('DlMI'),
        Nt = a('gBde'),
        Vt = a('gUPl'),
        zt = ['analytics'],
        jt = w.a.createElement(Bt.a, null),
        Ht = w.a.createElement(Nt.a, null),
        Wt = w.a.createElement(Vt.a, null),
        Ut = w.a.createElement(Oe.a, null),
        Gt = w.a.createElement(Be.a, null),
        Kt = 'conversation_control',
        qt = { viewType: Kt },
        Xt =
          (Object.freeze(['community', 'by_invitation']),
          Object(G.a)(function (e) {
            var t = e.analytics,
              a = Rt()(e, zt),
              n = e.disabled,
              r = e.isReply,
              i = e.trustedFriendsTweetAuthorScreename,
              o = e.value,
              s = V.a.bea21405,
              l = V.a.c0857ccd
            r && o === St.a.trusted_friends_tweet && (l = i ? s({ screenName: i }) : V.a.d3922d78)
            var c = Object.freeze({
                all: { icon: jt, label: V.a.i8ea6d4e },
                community: { icon: Wt, label: V.a.ec5a4a25 },
                by_invitation: { icon: Ht, label: V.a.b4543009 },
                community_members: { icon: Ut, label: V.a.i13be5a0 },
                super_followers_exclusive: { icon: jt, label: V.a.f8393bda },
                trusted_friends_tweet: { icon: Gt, label: l },
              })[o],
              d = c.icon,
              u = c.label,
              p = w.a.useState(!1),
              m = R()(p, 2),
              h = m[0],
              f = m[1],
              g = w.a.useRef(null)
            Object(Je.a)(function () {
              o !== St.a.all && o !== St.a.community_members && f(!0)
            })
            var v = w.a.useCallback(
              function (e) {
                t.scribe({ element: Kt, action: 'click' })
              },
              [t],
            )
            return w.a.createElement(
              M.a,
              { behavioralEventContext: qt },
              w.a.createElement(
                K.a,
                { style: Yt.educationContainer },
                h ? w.a.createElement(Ot, { buttonRef: g }) : null,
                w.a.createElement(
                  K.a,
                  { style: Yt.controlsContainer },
                  w.a.createElement(
                    Mt.a,
                    a,
                    w.a.createElement(
                      X.a,
                      { disabled: n, icon: d, onPress: v, ref: g, size: 'xSmall', style: Yt.button, type: 'brandText' },
                      u,
                    ),
                  ),
                ),
              ),
            )
          })),
        Yt = B.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 },
            educationContainer: { display: 'inline-flex', flexDirection: 'column' },
            controlsContainer: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
          }
        }),
        Qt = a('krmn'),
        Jt = a('cIoY'),
        Zt = a('w3n3'),
        $t = a('MLl7'),
        ea = a('1auM'),
        ta = a('07FG'),
        aa = a('Q8CU'),
        na = a('QbaN'),
        ra = a('VPdC'),
        ia = a('WPfJ'),
        oa = B.a.create(function (e) {
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
              zIndex: ia.f,
            },
            textInputStyle: { paddingHorizontal: 0 },
            textInputMobileCollapsed: { maxHeight: e.fontSizes.title4, padding: 0, overflow: 'hidden' },
            tweetAttachmentArea: { zIndex: ia.e },
            iconEmojiPicker: { zIndex: ia.c },
            toolBar: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginHorizontal: e.spaces.space2,
              zIndex: ia.a,
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
        sa = V.a.bdbcdd93,
        la = function (e) {
          var t = e.media,
            a = e.mediaAttachDisabled,
            n = e.onFilesAdded,
            r = e.setActiveParentKey,
            i = a || t.length >= 4,
            o = t.length < 3
          return w.a.createElement(ra.a, {
            acceptGifs: 0 === t.length,
            acceptVideo: 0 === t.length,
            accessibilityLabel: t.length > 0 ? sa : void 0,
            disabled: i,
            multiple: o,
            onChange: n,
            onPress: r,
            style: [oa.toolBarButton, oa.firstToolBarButton],
            type: 'brandText',
          })
        },
        ca = a('oQhu'),
        da = a('p+r5'),
        ua = a('GWvE'),
        pa = (function (e) {
          g()(a, e)
          var t = y()(a)
          function a() {
            var e
            d()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              _()(h()(e), '_setInputRef', function (t) {
                e._inputRef = t
              }),
              e
            )
          }
          return (
            p()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.autoFocus,
                    a = e.defaultValue,
                    n = e.editable,
                    r = e.label,
                    i = e.name,
                    o = e.onBlur,
                    s = e.onChange
                  return w.a.createElement(
                    K.a,
                    { style: ma.root },
                    w.a.createElement(da.a, {
                      autoCapitalize: 'none',
                      autoCorrect: !1,
                      autoFocus: t,
                      defaultValue: a,
                      editable: n,
                      label: r,
                      maxLength: 25,
                      name: i,
                      onBlur: o,
                      onChange: s,
                      ref: this._setInputRef,
                      spellCheck: 'false',
                      style: ma.formTextInput,
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
                    (this.value && !Object(ua.a)(this.value) && this._inputRef && this._inputRef.isValidLength())
                  )
                },
              },
            ]),
            a
          )
        })(w.a.Component)
      _()(pa, 'defaultProps', { autoFocus: !1, editable: !0, optional: !1 })
      var ma = B.a.create(function (e) {
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
        ha = pa,
        fa = (a('Blm6'), a('TJCb'), a('DZ+c'), a('mtvn')),
        ga = a('6XNv'),
        va = (function (e) {
          g()(a, e)
          var t = y()(a)
          function a() {
            return d()(this, a), t.apply(this, arguments)
          }
          return (
            p()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    a = e.label,
                    n = e.last,
                    r = e.max,
                    i = e.min,
                    o = e.onChange,
                    s = e.testID,
                    l = !t || i === r,
                    c = e.value.toString(),
                    d = Object(fa.a)(i, r + 1).map(function (e) {
                      return { label: ''.concat(V.a.ia24dc8c(e)), value: ''.concat(e) }
                    })
                  return w.a.createElement(ga.a, {
                    disabled: l,
                    label: a,
                    onChange: o,
                    options: d,
                    style: [ya.selector, !n && ya.rightMargin],
                    testID: s,
                    value: c,
                  })
                },
              },
            ]),
            a
          )
        })(w.a.PureComponent)
      _()(va, 'defaultProps', { last: !1 })
      var ya = B.a.create(function (e) {
          return { rightMargin: { marginRight: e.spaces.space20 }, selector: { flexGrow: 1 } }
        }),
        ba = va,
        _a = 'addPollChoice',
        Ca = 'selectPollDays',
        wa = 'selectPollHours',
        Ta = 'selectPollMinutes',
        xa = 'removePollButton',
        Ea = V.a.caf8edc4,
        Sa = V.a.g93586be,
        Ia = V.a.d073b644,
        Ra = V.a.a2f0728e,
        Ma = (function (e) {
          g()(a, e)
          var t = y()(a)
          function a(e, n) {
            var r
            return (
              d()(this, a),
              (r = t.call(this, e, n)),
              _()(h()(r), '_handleDaysChange', function (e) {
                var t = r.props.onChange,
                  a = parseInt(e, 10)
                r.setState(function (e) {
                  var n = e.duration,
                    r = n.hours,
                    i = n.minutes,
                    o = 0 === a && 0 === r && 0 === i ? 1 : 7 === a ? 0 : r,
                    s = { days: a, hours: o, minutes: 7 === a ? 0 : 0 === a && 0 === o && i < 5 ? 5 : i }
                  return t && t(s), { duration: s }
                })
              }),
              _()(h()(r), '_handleHoursChange', function (e) {
                var t = r.props.onChange,
                  a = parseInt(e, 10)
                r.setState(function (e) {
                  var n = e.duration,
                    r = n.days,
                    i = n.minutes,
                    o = { days: r, hours: a, minutes: 0 === r && 0 === a && i < 5 ? 5 : i }
                  return t && t(o), { duration: o }
                })
              }),
              _()(h()(r), '_handleMinutesChange', function (e) {
                var t = r.props.onChange,
                  a = parseInt(e, 10)
                r.setState(function (e) {
                  var n = e.duration,
                    r = { days: n.days, hours: n.hours, minutes: a }
                  return t && t(r), { duration: r }
                })
              }),
              (r.state = { duration: e.initialDuration }),
              r
            )
          }
          return (
            p()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isActive,
                    a = e.style
                  return w.a.createElement(
                    K.a,
                    { style: a },
                    w.a.createElement(F.b, { style: ka.durationLabel }, t ? Ea : ''),
                    this._renderPicker(),
                  )
                },
              },
              {
                key: '_renderPicker',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    a = e.isActive,
                    n = this.state.duration,
                    r = n.days,
                    i = n.hours,
                    o = n.minutes
                  return w.a.createElement(
                    K.a,
                    { style: ka.durationControls },
                    w.a.createElement(ba, {
                      editable: t && a,
                      label: Sa,
                      max: 7,
                      min: 0,
                      onChange: this._handleDaysChange,
                      testID: Ca,
                      value: r,
                    }),
                    w.a.createElement(ba, {
                      editable: t && a,
                      label: Ia,
                      max: 7 === r ? 0 : 23,
                      min: 0,
                      onChange: this._handleHoursChange,
                      testID: wa,
                      value: i,
                    }),
                    w.a.createElement(ba, {
                      editable: t && a,
                      label: Ra,
                      last: !0,
                      max: 7 === r ? 0 : 59,
                      min: 0 === r && 0 === i ? 5 : 0,
                      onChange: this._handleMinutesChange,
                      testID: Ta,
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
            a
          )
        })(w.a.Component)
      _()(Ma, 'defaultProps', { editable: !0, initialDuration: { days: 1, hours: 0, minutes: 0 } })
      var ka = B.a.create(function (e) {
          return {
            durationControls: { flexDirection: 'row', justifyContent: 'space-between' },
            durationLabel: { marginBottom: e.spaces.space4 },
          }
        }),
        Da = Ma,
        Pa = a('iY63'),
        La = a('jtO7'),
        Aa = V.a.g589c2e1,
        Fa = V.a.a1e6c3a1,
        Oa = V.a.a739e006,
        Ba = V.a.d89a5b92,
        Na = V.a.c2a8118d,
        Va = V.a.a8ede1de,
        za = V.a.af40a8ef,
        ja = (function (e) {
          g()(a, e)
          var t = y()(a)
          function a(e, n) {
            var r
            d()(this, a),
              (r = t.call(this, e, n)),
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
                  a = e.onInvalid,
                  n = e.onValid,
                  i = r.choices,
                  o = h()(r),
                  s = [o._choice1, o._choice2, o._choice3, o._choice4].filter(Boolean).every(function (e) {
                    return e.isValid
                  })
                i && i.length >= 2 && s ? n() : a(), t && t({ choices: i, duration: r.duration })
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
            p()(a, [
              {
                key: '_renderChoices',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    a = e.initialChoices,
                    n = void 0 === a ? [] : a,
                    r = e.isActive,
                    i = this.state,
                    o = i.autoFocus,
                    s = i.choiceCount,
                    l = w.a.createElement(
                      K.a,
                      { style: Ha.rightColumn },
                      s < 4
                        ? w.a.createElement(X.a, {
                            accessibilityLabel: Va,
                            disabled: !(t && r),
                            hoverLabel: { label: za },
                            icon: w.a.createElement(Pa.a, null),
                            onPress: this._handleAdd,
                            size: 'medium',
                            style: Ha.addButton,
                            testID: _a,
                            type: 'brandText',
                          })
                        : null,
                    )
                  return w.a.createElement(
                    K.a,
                    { style: Ha.choicesAndAddButton },
                    w.a.createElement(
                      K.a,
                      { style: Ha.choices },
                      w.a.createElement(ha, {
                        autoFocus: o,
                        defaultValue: n[0],
                        editable: t && r,
                        label: Aa,
                        name: 'Choice1',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice1Ref,
                      }),
                      w.a.createElement(ha, {
                        defaultValue: n[1],
                        editable: t && r,
                        label: Fa,
                        name: 'Choice2',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice2Ref,
                      }),
                      s >= 3
                        ? w.a.createElement(ha, {
                            autoFocus: o,
                            defaultValue: n[2],
                            editable: t && r,
                            label: Oa,
                            name: 'Choice3',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice3Ref,
                          })
                        : null,
                      4 === s
                        ? w.a.createElement(ha, {
                            autoFocus: o,
                            defaultValue: n[3],
                            editable: t && r,
                            label: Ba,
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
                    a = e.initialDuration,
                    n = e.isActive,
                    r = e.onRemove
                  return w.a.createElement(
                    K.a,
                    { style: Ha.root },
                    this._renderChoices(),
                    w.a.createElement(Da, {
                      editable: t,
                      initialDuration: a,
                      isActive: n,
                      onChange: this._handleDurationChange,
                      ref: this._setDurationPickerRef,
                      style: Ha.durationPicker,
                    }),
                    w.a.createElement(
                      K.a,
                      { style: Ha.removePollButton },
                      w.a.createElement(La.a, { color: 'red500', label: Na, onPress: r, testID: xa }),
                    ),
                  )
                },
              },
              {
                key: 'choices',
                get: function () {
                  var e = this._choice1,
                    t = this._choice2,
                    a = this._choice3,
                    n = this._choice4
                  return [e && e.value, t && t.value, a && a.value, n && n.value].filter(Boolean)
                },
              },
              {
                key: 'duration',
                get: function () {
                  return this._durationPicker ? this._durationPicker.duration : void 0
                },
              },
            ]),
            a
          )
        })(w.a.Component),
        Ha = B.a.create(function (e) {
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
        Wa = Object(G.a)(ja),
        Ua = a('+d3d'),
        Ga = ['onChange'],
        Ka = function (e) {
          var t = e.composerIndex,
            a = e.editable,
            n = e.initialChoices,
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
            p = Rt()(d, Ga),
            m = w.a.useMemo(
              function () {
                return Object(Ua.a)(
                  function (e) {
                    var t = e.choices,
                      a = e.duration
                    u({ choices: t, duration: a })
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
            Wa,
            r()({ editable: a, initialChoices: n, initialDuration: i, isActive: o, onBlur: h, onChange: m }, p),
          )
        },
        qa = B.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 }, link: { color: 'black' } }
        }),
        Xa = V.a.i859676b,
        Ya = w.a.createElement(
          V.a.I18NFormatMessage,
          { $i18n: 'a02c8d74' },
          w.a.createElement(
            F.b,
            { link: '/settings/audience_and_tagging', style: qa.link, withInteractiveStyling: !0, withUnderline: !0 },
            V.a.c9a48d3f,
          ),
        )
      function Qa() {
        return w.a.createElement(K.a, { style: qa.container }, w.a.createElement(_t.a, { headline: Xa, text: Ya }))
      }
      var Ja = a('b5s6'),
        Za = a('rcen'),
        $a = a('zmS9'),
        en = 'addButton',
        tn = 'addSubtitlesLabel',
        an = 'altTextLabel',
        nn = 'tagPeopleLabel',
        rn = 'attachments',
        on = 'createPollButton',
        sn = 'geoButton',
        ln = 'gifSearchButton',
        cn = 'scheduleOption',
        dn = 'taggedUsersLabel',
        un = 'tweetTextarea_',
        pn = 'toolBar',
        mn = 'scheduledTweetIndicator',
        hn = a('xM7j'),
        fn = a('6OUF'),
        gn = a('tZIO'),
        vn = a('5mJL'),
        yn = a('DNho'),
        bn = a('oSwX'),
        _n = a('rFBM'),
        Cn = a('zfvc'),
        wn = a('Ujvi'),
        Tn = a('yTN1'),
        xn = a('gpVt'),
        En = a('hOZg'),
        Sn = a('ll3R'),
        In = a('J0mu'),
        Rn = a('EfHu'),
        Mn = a('KrGU'),
        kn = a('boUI'),
        Dn = a('6ZHn'),
        Pn = a('/WPq'),
        Ln = a('wpLu'),
        An = a('pHub'),
        Fn = a('8A5z'),
        On = a('G31s'),
        Bn = a('S1qy'),
        Nn = a.n(Bn),
        Vn = a('cjAp'),
        zn = a.n(Vn),
        jn = V.a.f0afcc0e,
        Hn = V.a.ha5e2e79,
        Wn = V.a.a3de3b68,
        Un = V.a.cc2b28fc,
        Gn = V.a.g45af04e,
        Kn = V.a.j1d5791c,
        qn = V.a.ee9c4013,
        Xn = V.a.af40a8ef,
        Yn = V.a.e68b09b4,
        Qn = V.a.ec10ee02,
        Jn = V.a.h735a98d,
        Zn = V.a.c4ccfbe2,
        $n = V.a.j499fbcb,
        er = V.a.b7d8e3f0,
        tr = V.a.d1175c78,
        ar = V.a.bf4e9d79,
        nr = V.a.e0342f98,
        rr = V.a.e349147b,
        ir = V.a.e3a24e4b,
        or = V.a.fbd24526,
        sr = V.a.de4669e2,
        lr = V.a.d2c7a41c,
        cr = V.a.f7364fa1,
        dr = ['ja', 'zh-cn', 'zh-tw', 'ko'],
        ur = V.a.ia24dc8c,
        pr = w.a.createElement(En.a, null),
        mr = w.a.createElement(Pa.a, null),
        hr = w.a.createElement(Sn.a, null),
        fr = w.a.createElement(In.a, null),
        gr = { viewType: 'schedule_tweet' },
        vr = { viewType: 'add_poll' },
        yr = { viewType: 'add_composer' },
        br = { viewType: 'tag_location' },
        _r = (function (e) {
          g()(a, e)
          var t = y()(a)
          function a(e, n) {
            var i
            d()(this, a),
              (i = t.call(this, e, n)),
              _()(h()(i), '_handleConversationControlsValueChange', function (e) {
                i._handleAudienceControlsValueChange({ _type: 'conversation_controls', conversationControlsValue: e })
              }),
              _()(h()(i), '_handleAudienceControlsValueChange', function (e) {
                i.props.updateAudienceControlsValue(e)
              }),
              _()(
                h()(i),
                '_triggerConversationControlsImpression',
                Object(ca.a)(function () {
                  return i.context.featureSwitches.isTrue('conversation_controls_limited_replies_creation_enabled')
                }),
              ),
              _()(h()(i), '_shouldRenderControls', function (e, t) {
                var a = i.state.isFocused,
                  n = i.props,
                  r = n.audienceControlsValue,
                  o = n.isActive,
                  s = n.isInline,
                  l = n.isReply
                return (
                  !(
                    'conversation' !== t ||
                    (r.conversationControlsValue !== St.a.community_members &&
                      r.conversationControlsValue !== St.a.super_followers_exclusive &&
                      r.conversationControlsValue !== St.a.trusted_friends_tweet) ||
                    !l
                  ) ||
                  (o && !l && (!s || a || e))
                )
              }),
              _()(h()(i), '_renderConversationControls', function (e) {
                var t = i.state.isFocused,
                  a = i.props,
                  n = a.audienceControlsValue,
                  r = a.isInline,
                  o = a.isReply,
                  s = a.trustedFriendsTweetAuthorScreename
                if (
                  (o || (!t && r) || i._triggerConversationControlsImpression(),
                  !i._conversationControlsCreationEnabled)
                )
                  return null
                var l = n.conversationControlsValue,
                  c = i._shouldRenderControls(e, 'conversation'),
                  d =
                    l === St.a.community_members ||
                    l === St.a.super_followers_exclusive ||
                    l === St.a.trusted_friends_tweet ||
                    i._isScheduled()
                return c
                  ? w.a.createElement(Xt, {
                      disabled: d,
                      isReply: o,
                      onChange: i._handleConversationControlsValueChange,
                      trustedFriendsTweetAuthorScreename: s,
                      value: l,
                    })
                  : null
              }),
              _()(h()(i), '_renderTaggedLocation', function (e) {
                return w.a.createElement(
                  K.a,
                  { style: oa.taggedLocationContainer },
                  w.a.createElement(
                    X.a,
                    {
                      icon: w.a.createElement(Rn.a, null),
                      onPress: i._handleGeoButtonClick,
                      size: 'xSmall',
                      style: oa.taggedLocationButton,
                      type: 'brandText',
                    },
                    e.place.full_name,
                  ),
                )
              }),
              _()(h()(i), '_renderMainContent', function () {
                var e = i.props,
                  t = e.additionalToolbarContent,
                  a = e.data,
                  n = e.index,
                  r = e.isExpanded,
                  o = e.isInline,
                  s = e.isInlineReply,
                  l = e.onTypeaheadStateChange,
                  c = e.richTextInputContext,
                  d = a.cardUrl,
                  u = a.media,
                  p = a.pollActive,
                  m = a.quotedStatus,
                  h = a.text,
                  f = Object(xn.b)(h) || (d && !Object(ta.a)(d) && [d]),
                  g = !!u.length || p || !!m,
                  v = i.props.typeaheadWrapper,
                  y = !i._isEmpty()
                return w.a.createElement(
                  K.a,
                  { style: oa.textInputArea },
                  w.a.createElement(
                    K.a,
                    { style: r ? oa.inputStyle : oa.collapsedInputStyle },
                    i._renderAudienceControls(y),
                    w.a.createElement(
                      v,
                      {
                        contextText: h,
                        isInline: o,
                        isInlineReply: s,
                        onTextUpdated: c ? i._handleRichTextChange : i._handlePlainTextChange,
                        onTypeaheadStateChange: l,
                      },
                      i._renderFieldTextInput,
                    ),
                    f && !g
                      ? w.a.createElement(xn.a, { index: n, isCardPreviewTombstoned: Object(ta.a)(d), urls: f })
                      : null,
                  ),
                  r ? null : t,
                )
              }),
              _()(h()(i), '_renderFieldTextInput', function (e) {
                var t = i.props,
                  a = t.autoFocus,
                  n = t.data,
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
                  g = t.richTextInputContext,
                  v = i.state.isFocused,
                  y = n.text,
                  b = 0 === s && p,
                  _ = !!g,
                  C = g || {},
                  T = C.dismissComposerCommandName,
                  x = C.element,
                  E = C.sendTweetCommandName,
                  S = u && !g && !c,
                  I = g
                    ? {
                        onChange: i._getHandleRichTextChange(e),
                        richTextInputContext: {
                          dismissComposerCommandName: T,
                          editorState: i.state.editorState,
                          element: x,
                          sendTweetCommandName: E,
                        },
                      }
                    : { onChange: i._getHandlePlainTextChange(e) }
                return w.a.createElement(
                  fn.a,
                  r()(
                    {
                      appTextSize: 'headline1',
                      ariaLabel: Wn,
                      autoFocus: a || (l && !d),
                      closeButton:
                        l && (i._deleteNonemptyTweetstormComposerEnabled || i._isEmpty()) && !b
                          ? i._renderCloseButton()
                          : void 0,
                      contentBelow: i._renderTweetAttachment(),
                      editable: o,
                      inputStyle: [oa.textInputStyle, S && oa.textInputMobileCollapsed],
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
                      testID: ''.concat(un).concat(s),
                      useCacheForDOMMeasurements: v,
                      value: y,
                    },
                    I,
                  ),
                )
              }),
              _()(
                h()(i),
                '_getHandleRichTextChange',
                Object(ca.a)(function (e) {
                  return function (t) {
                    e(t), i._handleRichTextChange(t)
                  }
                }),
              ),
              _()(
                h()(i),
                '_getHandlePlainTextChange',
                Object(ca.a)(function (e) {
                  return function (t) {
                    e(t), i._handlePlainTextChange(t)
                  }
                }),
              ),
              _()(h()(i), '_renderCommunityTweetFromProtectedUserCallout', function () {
                var e = i.props,
                  t = e.index,
                  a = e.isCommunityTweetFromProtectedUser
                return 0 === t && a ? w.a.createElement(Qa, null) : null
              }),
              _()(h()(i), '_renderAudienceControls', function (e) {
                var t = i.props,
                  a = t.audienceControlsValue,
                  n = t.index,
                  r = t.isSuperFollowsCreator,
                  o = i.context.featureSwitches.isTrue('c9s_participation_enabled'),
                  s = i.context.featureSwitches.isTrue('super_follow_exclusive_tweet_creation_api_enabled'),
                  l = i.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled')
                return i._shouldRenderControls(e, 'audience') && 0 === n && (o || s || l)
                  ? w.a.createElement(lt, {
                      audienceControlsValue: a,
                      isC9sParticipationEnabled: o,
                      isSuperFollowsCreator: r && s,
                      isTrustedFriendsEnabled: l,
                      onAudienceControlsValueChange: i._handleAudienceControlsValueChange,
                    })
                  : null
              }),
              _()(h()(i), '_renderCommunitiesRulesEducation', function () {
                return i.shouldRenderCommunitiesRules ? w.a.createElement(Et, null) : null
              }),
              _()(h()(i), '_renderCommunitiesRules', function (e) {
                var t = i.props.audienceControlsValue.communityIdValue || void 0
                return i.shouldRenderCommunitiesRules && t
                  ? w.a.createElement(yt, { selectedCommunityId: t, showMiddot: !e })
                  : null
              }),
              _()(h()(i), '_calcNumberOfLines', function () {
                var e = i.props,
                  t = e.data,
                  a = e.isActive,
                  n = e.isInline,
                  r = !!e.richTextInputContext,
                  o = t.media,
                  s = t.pollActive,
                  l = t.quotedStatus,
                  c = !!o.length || !!s || !!l
                return (r && (n || c)) || !a ? 1 : 4
              }),
              _()(h()(i), '_renderScheduledTweetLegend', function () {
                var e = i.props.scheduledFor
                return w.a.createElement($a.a, {
                  onPress: i._handlePressScheduledTweetLegend,
                  scheduledFor: e,
                  testID: mn,
                })
              }),
              _()(h()(i), '_handlePressScheduledTweetLegend', function () {
                var e = i.props,
                  t = e.analytics,
                  a = e.history,
                  n = e.setActiveParentKey
                a.push('/compose/tweet/schedule'), t.scribe({ element: 'tweet_legend', action: 'click' }), n()
              }),
              _()(h()(i), '_renderEmojiPicker', function () {
                return w.a.createElement(Qt.a, {
                  onEmojiSelect: i._handleInsertEmoji,
                  size: 'medium',
                  style: i._getEmojiPickerButtonStyles(),
                  textInputRef: i._textInputRef || void 0,
                })
              }),
              _()(
                h()(i),
                '_getEmojiPickerButtonStyles',
                Object(ca.a)(function () {
                  return [oa.iconEmojiPicker, oa.toolBarButton]
                }),
              ),
              _()(h()(i), '_isSchedulingDisabled', function () {
                var e = i.props,
                  t = e.audienceControlsValue,
                  a = e.data,
                  n = a.media,
                  r = a.mediaTags,
                  o = a.pollActive,
                  s = a.quotedStatus,
                  l = a.text,
                  c = e.index,
                  d = e.isLast,
                  u = 0 === c && d,
                  p = t.conversationControlsValue !== St.a.all
                return Boolean(o || !u || (s && '' === l && !n.length) || p || r.length > 0)
              }),
              _()(h()(i), '_renderSchedulingButton', function () {
                return w.a.createElement(X.a, {
                  accessibilityLabel: Hn,
                  behavioralEventContext: gr,
                  disabled: i._isSchedulingDisabled(),
                  hoverLabel: { label: Jn },
                  icon: fr,
                  onClick: i._handleClickScheduler,
                  size: 'medium',
                  style: oa.toolBarButton,
                  testID: cn,
                  type: 'brandText',
                })
              }),
              _()(h()(i), '_handleClickScheduler', function () {
                var e = i.props,
                  t = e.analytics,
                  a = e.history,
                  n = e.setActiveParentKey
                a.push('/compose/tweet/schedule'), t.scribe({ element: 'schedule_tweet', action: 'click' }), n()
              }),
              _()(h()(i), '_renderCloseButton', function () {
                var e = i.props.onRemoveComposer
                return w.a.createElement(X.a, {
                  accessibilityLabel: qn,
                  hoverLabel: { label: Yn },
                  icon: pr,
                  onPress: e,
                  size: 'xSmall',
                  type: 'brandText',
                })
              }),
              _()(h()(i), '_renderTweetAttachment', function () {
                var e = i.props,
                  t = e.data,
                  a = e.editable,
                  n = e.index,
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
                  { onClick: i._handleFocus, style: [oa.attachmentContainer, oa.tweetAttachmentArea], testID: rn },
                  s.length > 0
                    ? w.a.createElement(On.a, {
                        editable: a,
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
                        style: oa.mediaPreview,
                      })
                    : null,
                  r ? i._renderMediaActions() : null,
                  l
                    ? w.a.createElement(Ka, {
                        composerIndex: n,
                        editable: a,
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
                  a = e.tombstoneInfo
                return a && a.richText
                  ? w.a.createElement(
                      hn.a,
                      null,
                      w.a.createElement(Za.a, {
                        entities: a.richText.entities,
                        rtl: a.richText.rtl,
                        text: a.richText.text,
                      }),
                    )
                  : w.a.createElement(Ja.a, {
                      isCondensed: t.length > 0,
                      style: oa.quoteTweet,
                      tweetId: e.id_str,
                      withLink: !1,
                      withUserHoverCard: !1,
                    })
              }),
              _()(h()(i), '_renderToolbar', function (e) {
                var t = i.props,
                  a = t.additionalToolbarContent,
                  n = t.data.media,
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
                  g = e && (!l || c || f)
                return w.a.createElement(
                  K.a,
                  { style: oa.toolBar, testID: pn },
                  w.a.createElement(
                    K.a,
                    { style: oa.toolBarIconsContainer },
                    w.a.createElement(la, {
                      media: n,
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
                    { style: oa.toolBarIconsContainer },
                    e ? i._renderCountdownCircle() : null,
                    g &&
                      w.a.createElement(
                        w.a.Fragment,
                        null,
                        w.a.createElement(K.a, { style: oa.separator }),
                        i._renderAddComposerButton(),
                      ),
                    a,
                  ),
                )
              }),
              _()(h()(i), '_addOverflowStyle', function (e) {
                var t = i.props.richTextInputContext
                if (t) {
                  var a = e.getCurrentContent().getPlainText(),
                    n = a.length,
                    r = i._getParsedTweet(a).validRangeEnd,
                    o = r + 1 < n
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
                  a = e.getCurrentContent().getPlainText()
                if (t) {
                  var n = t.convertEmojiToEntities(e)
                  i.setState(i._addOverflowStyle(n))
                }
                i._handleTextValueChange(a)
              }),
              _()(h()(i), '_handlePlainTextChange', function (e) {
                var t = gn.a.replaceCarriageReturns(e.target.value)
                i._handleTextValueChange(t)
              }),
              _()(h()(i), '_handleTextValueChange', function (e) {
                var t = i.props,
                  a = t.data,
                  n = a.key,
                  r = a.text,
                  o = t.onTextChange
                r !== e && o(e, n)
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
                    var a = i.props,
                      n = a.analytics,
                      r = a.history
                    n.scribe({ element: 'media_detail_button', action: 'click' }),
                      (i.hasAttachedImage || i.hasAttachedVideo) &&
                        r.push('/compose/tweet/media', { mediaId: t, tab: e })
                  }
                }
              }),
              _()(h()(i), '_handleFilesAdded', function (e) {
                var t = i.props,
                  a = t.addToast,
                  n = t.data.pollActive,
                  r = t.onFilesAdded
                n ? a({ text: Un }) : r(e)
              }),
              _()(h()(i), '_handleMediaRemoveFactory', function (e) {
                return function () {
                  i.props.onRemoveMedia(i.props.index, e)
                }
              }),
              _()(h()(i), '_handleInsertEmoji', function (e) {
                var t = i.state.editorState,
                  a = i.props.richTextInputContext
                if (a && t) {
                  var n = a.insertTextAtCursor(t, e.text)
                  i._handleRichTextChange(n)
                }
              }),
              _()(h()(i), '_validateMedia', function (e) {
                var t = i.props.data.media
                return S.c(t.concat(e))
              }),
              _()(h()(i), '_handlePollAdd', function () {
                var e = i.props,
                  t = e.analytics,
                  a = e.index,
                  n = e.updateSingleComposer
                t.scribe({ element: 'add_poll', action: 'click' }), n({ pollActive: !0 }, a)
              }),
              _()(h()(i), '_handleGeoButtonClick', function () {
                var e = i.props,
                  t = e.analytics,
                  a = e.history,
                  n = e.setActiveParentKey
                a.push('/compose/tweet/place_picker'), t.scribe({ element: 'tag_location', action: 'click' }), n()
              }),
              _()(h()(i), '_handleWrapperClick', function (e) {
                ;(e.target instanceof Element && e.target.closest('[role="button"],a,input,textarea,select')) ||
                  i.focus()
              }),
              _()(h()(i), '_handleFocus', function () {
                var e = i.props,
                  t = e.index,
                  a = e.isActive,
                  n = e.onFocus
                ;(0, e.setActiveParentKey)(),
                  a ||
                    (window.requestAnimationFrame(function () {
                      i._mediaPreviewRef && i._mediaPreviewRef.playVideo()
                    }),
                    n(t))
              }),
              _()(h()(i), '_handleEditorFocus', function () {
                return i.setState({ isFocused: !0 })
              }),
              _()(h()(i), '_formatCountdownNumber', function (e) {
                return ur(Math.ceil(e / i._userLanguageWeight))
              }),
              _()(h()(i), '_getPlaceHolderText', function () {
                var e = i.props,
                  t = e.data,
                  a = t.pollActive,
                  n = t.quotedStatus,
                  r = e.index,
                  o = e.isReply,
                  s = e.isSelfThreadReply
                return n
                  ? sr
                  : a
                  ? cr
                  : i.isReplyOrReplyThread && 0 === r
                  ? lr
                  : o && !s && r > 0
                  ? or
                  : s || r > 0
                  ? ir
                  : rr
              }),
              _()(h()(i), '_getNumberOfAltTextEntries', function () {
                return i.props.data.media.reduce(function (e, t) {
                  var a
                  return null !== (a = t.mediaMetadata) && void 0 !== a && a.altText ? e + 1 : e
                }, 0)
              }),
              _()(
                h()(i),
                '_getParsedTweet',
                Object(ca.a)(function (e) {
                  var t = zn.a[i.props.twitterTextConfigurationVersion]
                  return Nn()(e, t)
                }),
              ),
              _()(h()(i), '_isEmpty', function () {
                var e = i.props.data
                return Object(aa.c)(e)
              }),
              _()(h()(i), '_isScheduled', function () {
                var e = i.props.data.scheduledFor
                return Object(na.h)(e)
              }),
              _()(h()(i), '_autotagLocationIfNeeded', function () {
                var e = i.props,
                  t = e.data.taggedLocation,
                  a = e.fetchAutotaggedLocationIfNeeded,
                  n = e.index,
                  r = e.updateSingleComposer
                a().then(function (e) {
                  void 0 === t && r({ taggedLocation: null != e ? e : null }, n)
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
              (i._userLanguageWeight = l && dr.indexOf(l) > -1 ? 2 : 1),
              i._autotagLocationIfNeeded(),
              (i.state = { editorState: c ? c(o) : null, hasOverflowStyle: !1, isFocused: !1 }),
              i
            )
          }
          return (
            p()(a, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  ;(this.hasExternalMedia ||
                    this.props.data.media.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof ea.a) && e.mediaFile.isVideo
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
                    a = t.data.taggedLocation,
                    n = t.isActive,
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
                      style: [oa.root, !n && oa.blurStyle],
                    },
                    this._renderCommunityTweetFromProtectedUserCallout(),
                    w.a.createElement(
                      vn.a,
                      {
                        avatarCell: w.a.createElement(
                          w.a.Fragment,
                          null,
                          c
                            ? w.a.createElement(yn.a.Consumer, null, function (e) {
                                var t = e.avatarSize
                                return w.a.createElement(bn.default, {
                                  accessibilityLabel: s ? s.name : void 0,
                                  screenName: s ? s.screen_name : void 0,
                                  size: t,
                                  style: oa.avatar,
                                  uri: s ? s.profile_image_url_https : void 0,
                                  withLink: i,
                                })
                              })
                            : null,
                          o
                            ? null
                            : w.a.createElement(K.a, {
                                style: [oa.conversationLine, !c && oa.conversationLineWithOverflow],
                              }),
                        ),
                        avatarCellStyle: r ? oa.avatarContainerExpanded : oa.avatarContainer,
                        cellStyle: oa.rightColumn,
                      },
                      this._renderScheduledTweetLegend(),
                      w.a.createElement(
                        K.a,
                        { onFocus: this._handleEditorFocus, style: oa.inputArea },
                        w.a.createElement(
                          _n.a,
                          {
                            allowDragDrop: !this.mediaAttachDisabled,
                            onDragEnter: this._handleFocus,
                            onFilesAdded: this._handleFilesAdded,
                            style: oa.dragDrop,
                          },
                          function (t) {
                            return w.a.createElement(
                              w.a.Fragment,
                              null,
                              w.a.createElement(K.a, { style: oa.composeBoxContainer }, e._renderMainContent()),
                            )
                          },
                        ),
                      ),
                      this._renderCommunitiesRulesEducation(),
                      w.a.createElement(
                        K.a,
                        { style: [(u || a) && oa.controlsContainer, p ? oa.mobileControlsLayout : oa.controlsLayout] },
                        this._renderConversationControls(d),
                        this._renderCommunitiesRules(p),
                        a ? this._renderTaggedLocation(a) : null,
                      ),
                      w.a.createElement(Cn.b, { show: n && r }, this._renderToolbar(d)),
                    ),
                  )
                },
              },
              {
                key: '_renderGifButton',
                value: function () {
                  var e = this.props,
                    t = e.data,
                    a = t.media,
                    n = t.pollActive,
                    r = e.history,
                    i = e.loggedInUser,
                    o = e.setActiveParentKey,
                    s = n || a.length || !i
                  return w.a.createElement(Zt.a, {
                    enabled: !s,
                    gifSearchKeySource: $t.a.Composition,
                    history: r,
                    onPress: o,
                    testID: ln,
                  })
                },
              },
              {
                key: '_renderPollButton',
                value: function () {
                  var e = this.props,
                    t = e.data,
                    a = t.media,
                    n = t.pollActive,
                    r = t.quotedStatus,
                    i = e.loggedInUser,
                    o = this._isScheduled(),
                    s = !(!(n || a.length || r || o) && i)
                  return w.a.createElement(X.a, {
                    accessibilityLabel: jn,
                    behavioralEventContext: vr,
                    disabled: s,
                    hoverLabel: { label: Qn },
                    icon: hr,
                    onPress: this._handlePollAdd,
                    size: 'medium',
                    style: oa.toolBarButton,
                    testID: on,
                    type: 'brandText',
                  })
                },
              },
              {
                key: '_renderGeoButton',
                value: function () {
                  var e = this.props,
                    t = e.data.taggedLocation,
                    a = e.geoEnabled,
                    n = e.loggedInUser,
                    r = !(a && n),
                    i = t ? w.a.createElement(Rn.a, null) : w.a.createElement(Mn.a, null)
                  return w.a.createElement(X.a, {
                    accessibilityLabel: Zn,
                    behavioralEventContext: br,
                    disabled: r,
                    hoverLabel: { label: Zn },
                    icon: i,
                    onPress: this._handleGeoButtonClick,
                    size: 'medium',
                    style: oa.toolBarButton,
                    testID: sn,
                    type: 'brandText',
                  })
                },
              },
              {
                key: '_renderMediaActions',
                value: function () {
                  var e = this.props.data,
                    t = e.gifMetadata,
                    a = e.media,
                    n = 0 !== e.mediaTags.length,
                    r =
                      a.some(function (e) {
                        return e.mediaFile && e.mediaFile.isGif
                      }) || this.hasExternalMedia
                  if (!(this.hasAttachedImage || this.hasAttachedVideo || t || r)) return null
                  var i = this.context.featureSwitches.isTrue('rweb_video_tagging_enabled')
                  return w.a.createElement(
                    K.a,
                    { style: oa.imageActions },
                    t && t.url && t.provider
                      ? w.a.createElement(
                          K.a,
                          { style: oa.addImageTextPadding },
                          w.a.createElement(Jt.a, { gifUrl: t.url, provider: t.provider }),
                        )
                      : null,
                    (!this.hasAttachedImage && !i) || this._isScheduled()
                      ? null
                      : w.a.createElement(
                          F.b,
                          {
                            accessibilityLabel: tr,
                            color: 'gray700',
                            link: '/compose/tweet/tags',
                            style: [oa.addImageTextContainer, oa.addImageTextPadding],
                          },
                          n ? this._renderTaggedUsers() : this._renderTagPeopleLabel(),
                        ),
                    this.hasAttachedImage || r
                      ? w.a.createElement(
                          F.b,
                          {
                            accessibilityLabel: $n({ numberOfImages: a.length }),
                            color: 'gray700',
                            link: { pathname: '/compose/tweet/media', state: { mediaId: a[0].id, tab: 'alt_text' } },
                            onPress: this._handleClickAltTextShortcut,
                            style: oa.addImageTextContainer,
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
                    F.b,
                    { color: 'gray700', size: 'subtext2', testID: nn },
                    w.a.createElement(kn.a, { style: oa.addImageActionIcon }),
                    tr,
                  )
                },
              },
              {
                key: '_renderTaggedUsers',
                value: function () {
                  var e = this.props,
                    t = e.data.mediaTags,
                    a = e.loggedInUser,
                    n = t.map(function (e) {
                      return {
                        name: e.data.name,
                        screen_name: e.data.screen_name,
                        type: e.type,
                        user_id: e.data.id_str,
                      }
                    })
                  return w.a.createElement(
                    F.b,
                    { color: 'gray700', size: 'subtext2', testID: dn },
                    w.a.createElement(Dn.a, { style: oa.addImageActionIcon }),
                    w.a.createElement(wn.a, { loggedInUserId: null == a ? void 0 : a.id_str, users: n }),
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
                          F.b,
                          { color: 'gray700', size: 'subtext2', testID: an },
                          w.a.createElement(Ln.a, { style: oa.addImageActionIcon }),
                          er({ numberOfAltTextEntries: this._getNumberOfAltTextEntries() }),
                        )
                      : w.a.createElement(
                          F.b,
                          { color: 'gray700', numberOfLines: 1, size: 'subtext2', testID: an },
                          w.a.createElement(Ln.a, { style: oa.addImageActionIcon }),
                          null == t ? void 0 : t.altText,
                        )
                    : w.a.createElement(
                        F.b,
                        { color: 'gray700', size: 'subtext2', testID: an },
                        w.a.createElement(Pn.a, { style: oa.addImageActionIcon }),
                        $n({ numberOfImages: e.length }),
                      )
                },
              },
              {
                key: '_renderSubtitlesLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = this.attachedSubtitles ? An.a : Fn.a
                  return w.a.createElement(
                    F.b,
                    {
                      accessibilityRole: 'button',
                      color: 'gray700',
                      link: { pathname: '/compose/tweet/media', state: { mediaId: e[0].id, tab: 'subtitles' } },
                      onPress: this._handleClickSubtitlesShortcut,
                      size: 'subtext2',
                      style: oa.addImageTextContainer,
                      testID: tn,
                    },
                    w.a.createElement(t, {
                      accessibilityLabel: this.attachedSubtitles ? nr : void 0,
                      style: oa.addImageActionIcon,
                    }),
                    this.attachedSubtitles ? this.attachedSubtitles.displayName : ar,
                  )
                },
              },
              {
                key: '_renderCountdownCircle',
                value: function () {
                  var e = this.props,
                    t = e.data.text,
                    a = e.twitterTextConfigurationVersion,
                    n = zn.a[a],
                    r = this._getParsedTweet(t).weightedLength
                  return w.a.createElement(Tn.a, {
                    count: r,
                    formatNumber: this._formatCountdownNumber,
                    maxCount: n.maxWeightedTweetLength,
                    warningCount: 260,
                  })
                },
              },
              {
                key: '_renderAddComposerButton',
                value: function () {
                  var e = this.props,
                    t = e.addComposerLink,
                    a = e.disableAddTweet,
                    n = e.isCommunityTweetFromProtectedUser,
                    r = e.loggedInUser,
                    i = e.onAddComposer,
                    o = this._isEmpty(),
                    s = this._isScheduled(),
                    l = a || o || s || !r || n
                  return w.a.createElement(X.a, {
                    accessibilityLabel: this.isReplyOrReplyThread ? Kn : Gn,
                    behavioralEventContext: yr,
                    disabled: l,
                    hoverLabel: { label: Xn },
                    icon: mr,
                    link: l ? void 0 : t,
                    onPress: i,
                    size: 'xSmall',
                    testID: en,
                    type: 'brandOutlined',
                  })
                },
              },
              {
                key: 'mediaAttachDisabled',
                get: function () {
                  var e = this.props,
                    t = e.data,
                    a = t.media,
                    n = t.pollActive,
                    r = e.loggedInUser,
                    i = a.length,
                    o = a.some(function (e) {
                      var t
                      return null === (t = e.mediaFile) || void 0 === t ? void 0 : t.isGif
                    }),
                    s = a.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof ea.a) && e.mediaFile.isVideo
                    })
                  return 4 === i || o || s || n || this.hasExternalMedia || !r
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
                    var a = t.find(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof ea.a) && e.mediaFile.isVideo
                    })
                    return null == a || null === (e = a.mediaMetadata) || void 0 === e ? void 0 : e.subtitles
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
                    a = e.communityIdValue || void 0,
                    n = t && a,
                    r = this._shouldRenderControls(!1, 'conversation')
                  return Boolean(r && n)
                },
              },
              {
                key: 'isReplyOrReplyThread',
                get: function () {
                  var e = this.props,
                    t = e.isReply,
                    a = e.isSelfThreadReply
                  return t && !a
                },
              },
            ]),
            a
          )
        })(w.a.Component)
      _()(_r, 'contextType', de.a),
        _()(_r, 'defaultProps', { twitterTextConfigurationVersion: 'defaults', withAvatar: !0 })
      var Cr = Object(G.a)(_r),
        wr = w.a.createElement(F.b, { weight: 'bold' }),
        Tr = w.a.createElement(F.b, { color: 'link' }),
        xr = function (e) {
          return '@'.concat(e)
        },
        Er = a('SrIh'),
        Sr = function (e) {
          return (null == e ? void 0 : e.screen_name) || ''
        },
        Ir = function (e) {
          var t = e.communityName,
            a = e.excludedRecipients,
            n = e.inReplyToStatus,
            r = e.loggedInUserId,
            i = {
              replyToOne: function (e) {
                var t = e.userName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'e34022a7' },
                  w.a.cloneElement(Tr, null, V.a.b50e199a({ userName: xr(t) })),
                )
              },
              replyToTwo: function (e) {
                var t = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'bfd9c99a' },
                  w.a.cloneElement(Tr, null, V.a.f2e4dd37({ replyUserName: xr(t), otherUserName: xr(a) })),
                )
              },
              replyToThree: function (e) {
                var t = e.userOneName,
                  a = e.userThreeName,
                  n = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'g7a1000e' },
                  w.a.cloneElement(
                    Tr,
                    null,
                    V.a.eccfddc3({ userOneName: xr(t), userTwoName: xr(n), userThreeName: xr(a) }),
                  ),
                )
              },
              replyToMany: function (e) {
                var t = e.othersCount,
                  a = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'i558c201' },
                  w.a.cloneElement(Tr, null, V.a.h758cd22({ userOneName: xr(a), userTwoName: xr(n), othersCount: t })),
                )
              },
              communityReplyToOne: function (e) {
                var t = e.communityName,
                  a = e.userName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'j935bcde', communityName: t },
                  w.a.cloneElement(Tr, null, V.a.e9f8a0eb({ userName: xr(a) })),
                )
              },
              communityReplyToTwo: function (e) {
                var t = e.communityName,
                  a = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'i7bd9c8e', communityName: t },
                  w.a.cloneElement(Tr, null, V.a.df7e9fbc({ replyUserName: xr(a), otherUserName: xr(n) })),
                )
              },
              communityReplyToThree: function (e) {
                var t = e.communityName,
                  a = e.userOneName,
                  n = e.userThreeName,
                  r = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'cfa0049d', communityName: t },
                  w.a.cloneElement(
                    Tr,
                    null,
                    V.a.b45fa505({ userOneName: xr(a), userTwoName: xr(r), userThreeName: xr(n) }),
                  ),
                )
              },
              communityReplyToMany: function (e) {
                var t = e.communityName,
                  a = e.othersCount,
                  n = e.userOneName,
                  r = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'jfc8e4b4', communityName: t },
                  w.a.cloneElement(Tr, null, V.a.a4383815({ userOneName: xr(n), userTwoName: xr(r), othersCount: a })),
                )
              },
              exclusiveReplyToOne: function (e) {
                var t = e.userName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'a4e11010' },
                  w.a.cloneElement(Tr, null, V.a.ff792e35({ userName: xr(t) })),
                  w.a.cloneElement(wr, null, V.a.a18d8f1c),
                )
              },
              exclusiveReplyToTwo: function (e) {
                var t = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'cf1b3321' },
                  w.a.cloneElement(Tr, null, V.a.g7d5e985({ replyUserName: xr(t), otherUserName: xr(a) })),
                  w.a.cloneElement(wr, null, V.a.af82725c),
                )
              },
              exclusiveReplyToThree: function (e) {
                var t = e.userOneName,
                  a = e.userThreeName,
                  n = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'c83d647e' },
                  w.a.cloneElement(
                    Tr,
                    null,
                    V.a.fe5a61e9({ userOneName: xr(t), userTwoName: xr(n), userThreeName: xr(a) }),
                  ),
                  w.a.cloneElement(wr, null, V.a.f7126257),
                )
              },
              exclusiveReplyToMany: function (e) {
                var t = e.othersCount,
                  a = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'fec57cab' },
                  w.a.cloneElement(Tr, null, V.a.bc9dd514({ userOneName: xr(a), userTwoName: xr(n), othersCount: t })),
                  w.a.cloneElement(wr, null, V.a.de5071ba),
                )
              },
              trustedFriendsReplyToOne: function (e) {
                var t = e.userName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'db690c7e', userName: xr(t) },
                  w.a.cloneElement(Tr, null, V.a.b9f0a3f7({ userName: xr(t) })),
                )
              },
              trustedFriendsReplyToTwo: function (e) {
                var t = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'gb7cb27c' },
                  w.a.cloneElement(Tr, null, V.a.ca43a0c6({ replyUserName: xr(t), otherUserName: xr(a) })),
                  w.a.cloneElement(Tr, null, V.a.g2257dd2({ replyUserName: xr(t) })),
                )
              },
              trustedFriendsReplyToThree: function (e) {
                var t = e.userOneName,
                  a = e.userThreeName,
                  n = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'e9288772' },
                  w.a.cloneElement(
                    Tr,
                    null,
                    V.a.d339d100({ userOneName: xr(t), userTwoName: xr(n), userThreeName: xr(a) }),
                  ),
                  w.a.cloneElement(Tr, null, V.a.aeaba5d4({ userOneName: xr(t) })),
                )
              },
              trustedFriendsReplyToMany: function (e) {
                var t = e.othersCount,
                  a = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  V.a.I18NFormatMessage,
                  { $i18n: 'h0589b50' },
                  w.a.cloneElement(Tr, null, V.a.f48a8367({ userOneName: xr(a), userTwoName: xr(n), othersCount: t })),
                  w.a.cloneElement(Tr, null, V.a.e9861a9c({ userOneName: xr(a) })),
                )
              },
            },
            o = S.a({ inReplyToStatus: n, loggedInUserId: r }).filter(function (e) {
              var t = e.id_str
              return a.indexOf(t) < 0
            }),
            s = n.retweeted_status || n,
            l = s.exclusivity_info,
            c = s.trusted_friends_info,
            d = s.user,
            u = o.filter(function (e) {
              return e.id_str !== d.id_str
            }),
            p = R()(u, 2),
            m = p[0],
            h = p[1],
            f = [d, m, h].map(Sr),
            g = R()(f, 3),
            v = g[0],
            y = g[1],
            b = g[2],
            _ = o.length - 2
          switch (o.length) {
            case 0:
              return Object(Er.a)('Compose reply context should not have 0 recipients'), null
            case 1:
              return t
                ? i.communityReplyToOne({ communityName: t, userName: v })
                : l
                ? i.exclusiveReplyToOne({ userName: v })
                : c
                ? i.trustedFriendsReplyToOne({ userName: v })
                : i.replyToOne({ userName: v })
            case 2:
              return t
                ? i.communityReplyToTwo({ communityName: t, userOneName: v, userTwoName: y })
                : l
                ? i.exclusiveReplyToTwo({ userOneName: v, userTwoName: y })
                : c
                ? i.trustedFriendsReplyToTwo({ userOneName: v, userTwoName: y })
                : i.replyToTwo({ userOneName: v, userTwoName: y })
            case 3:
              return t
                ? i.communityReplyToThree({ communityName: t, userOneName: v, userTwoName: y, userThreeName: b })
                : l
                ? i.exclusiveReplyToThree({ userOneName: v, userTwoName: y, userThreeName: b })
                : c
                ? i.trustedFriendsReplyToThree({ userOneName: v, userTwoName: y, userThreeName: b })
                : i.replyToThree({ userOneName: v, userTwoName: y, userThreeName: b })
            default:
              return t
                ? i.communityReplyToMany({ communityName: t, userOneName: v, userTwoName: y, othersCount: _ })
                : l
                ? i.exclusiveReplyToMany({ userOneName: v, userTwoName: y, othersCount: _ })
                : c
                ? i.trustedFriendsReplyToMany({ userOneName: v, userTwoName: y, othersCount: _ })
                : i.replyToMany({ userOneName: v, userTwoName: y, othersCount: _ })
          }
        },
        Rr = w.a.memo(Ir),
        Mr = a('fs1G'),
        kr = a('BLtI'),
        Dr = a('kY28')
      function Pr(e) {
        null == e || e.preventDefault()
      }
      var Lr = B.a.create(function (e) {
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
        Ar = function (e) {
          var t = e.communityName,
            a = e.excludedRecipients,
            n = e.inReplyToStatus,
            r = e.loggedInUserId,
            i = e.onPress,
            o = e.shouldDisplayRepliesText,
            s = e.showParentTweet,
            l = void 0 === s || s
          return w.a.createElement(
            K.a,
            null,
            l
              ? w.a.createElement(kr.b, {
                  conversationPosition: { isStart: !0 },
                  linkableQuotedTweet: !1,
                  linkify: !1,
                  onAnalyticsClick: Mr.a,
                  onAvatarClick: Pr,
                  onEntityClick: Pr,
                  onMediaClick: Pr,
                  onReplyContextClick: Pr,
                  replyContext: Dr.a.ReplyContextTypes.None,
                  tweet: n,
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
              { style: Lr.replyUsersContainer },
              w.a.createElement(
                vn.a,
                {
                  avatarCell: l ? w.a.createElement(K.a, { style: Lr.conversationLine }) : null,
                  avatarCellStyle: Lr.conversationLineContainer,
                  cellStyle: Lr.repliesTextContainer,
                  style: Lr.grid,
                },
                o
                  ? w.a.createElement(
                      F.b,
                      { accessibilityRole: 'button', color: 'gray700', onPress: i, style: l && Lr.repliesMessage },
                      w.a.createElement(Rr, {
                        communityName: t,
                        excludedRecipients: a,
                        inReplyToStatus: n,
                        loggedInUserId: r,
                      }),
                    )
                  : null,
              ),
            ),
          )
        },
        Fr = a('Tb0w'),
        Or = a('1YZw'),
        Br = a('pidX'),
        Nr = a('5oBF'),
        Vr = a('JYYi'),
        zr = a('/Rsk'),
        jr = a('u7LJ'),
        Hr = a('XOJV'),
        Wr = a('G6rE'),
        Ur = a('AspN'),
        Gr = a('oEGd'),
        Kr = a('2iUg'),
        qr = a('P1r1'),
        Xr = ['mediaIds'],
        Yr = function (e) {
          return e.parentTweetId || (e.isInline ? Vr.a.homeTimeline : Vr.a.modal)
        },
        Qr = function (e, t) {
          var a = Yr(t)
          return ue.k(e, a)
        },
        Jr = function (e, t) {
          var a = Yr(t)
          return ue.l(e, a)
        },
        Zr = function (e, t) {
          var a = Yr(t)
          return ue.j(e, a)
        },
        $r = function (e, t) {
          var a = si(e, t),
            n = Zr(e, t).communityIdValue || void 0,
            r = (null == a ? void 0 : a.community_id_str) || n,
            i = r ? k.c.select(e, r) : void 0
          return i ? i.name : void 0
        },
        ei = function (e, t) {
          var a = Yr(t)
          return ue.m(e, a)
        },
        ti = function (e, t) {
          var a = Yr(t)
          return ue.i(e, a)
        },
        ai = function (e) {
          return function (t, a) {
            var n = (function (e, t) {
              return t.location.state
            })(0, a)
            return n ? e(n) : void 0
          }
        },
        ni = Object(me.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          Wr.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        ri = function (e, t) {
          return t.parentTweetId || ii(e, t) || oi(e, t)
        },
        ii = function (e, t) {
          var a = t.location.query
          return a && 'string' == typeof a.in_reply_to ? a.in_reply_to : void 0
        },
        oi = ai(function (e) {
          return e.inReplyToStatusId
        }),
        si = function (e, t) {
          var a = ri(e, t)
          return a ? Hr.a.selectHydrated(e, a) : void 0
        },
        li = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        ci = ai(function (e) {
          return e.hasArticleNudge
        }),
        di = ai(function (e) {
          return e.convoCardData
        }),
        ui = ai(function (e) {
          return e.externalMedia
        }),
        pi = ai(function (e) {
          return e.externalMediaFiles
        }),
        mi = ai(function (e) {
          return e.previewTweetId
        }),
        hi = ai(function (e) {
          return e.defaultText
        }),
        fi = function (e, t) {
          var a = hi(e, t),
            n = Object(Br.a)(t.location)
          return (li(0, t) ||
            (function (e, t) {
              return t.location.pathname.indexOf('/compose/tweet') > -1
            })(0, t)) &&
            n
            ? n
            : a
        },
        gi = ai(function (e) {
          return e.quotedStatusId
        }),
        vi = ai(function (e) {
          return e.quotedStatus
        }),
        yi = function (e, t) {
          return (
            (function (e, t) {
              return t.quotedStatus ? t.quotedStatus : vi(e, t)
            })(e, t) ||
            (function (e, t) {
              var a = gi(e, t)
              return a ? Hr.a.selectHydratedMemoized(e, a) : void 0
            })(e, t)
          )
        },
        bi = ai(function (e) {
          return e.isSelfThreadReply
        }),
        _i = ai(function (e) {
          return e.positionCursorAtBeginning
        }),
        Ci = ai(function (e) {
          return e.promotedContent
        }),
        wi = function () {
          return Object(me.createSelector)(Qr, fi, yi, Ur.j, function (e, t, a, n) {
            return e.map(function (e, r) {
              return l()(
                l()({}, ((i = e).mediaIds, Rt()(i, Xr))),
                {},
                {
                  media: n.filter(function (t) {
                    return e.mediaIds.some(function (e) {
                      return e === t.id
                    })
                  }),
                  quotedStatus: 0 === r ? a : void 0,
                  text: 0 === r && t ? t : e.text,
                },
              )
              var i
            })
          })
        },
        Ti = {
          addComposer: ue.a,
          addToast: Or.b,
          createLocalApiErrorHandler: Object(ve.createLocalApiErrorHandlerWithContextFactory)('SCREEN_COMPOSE_V2'),
          checkTweetForNudge: ue.b,
          deletePreviewTweet: Nr.c,
          fetchAltTextPromptPreferenceIfNeeded: Kr.a,
          fetchAutotaggedLocationIfNeeded: zr.a,
          fetchTweetIfNeeded: Hr.a.fetchOneIfNeeded,
          removeComposer: ue.e,
          resetDraft: ue.f,
          retweet: Hr.a.retweet,
          schedule: ue.h,
          draftTweet: ue.d,
          send: ue.q,
          updateActiveComposerIndex: ue.s,
          updateAudienceControlsValue: ue.t,
          updateConvoCardState: Fr.b,
          preUploadMedia: Ur.e,
          addMedia: Ur.b,
          processMultipleMedia: Ur.g,
          removeMediaUpload: Ur.i,
          removeToast: Or.c,
          updateSingleComposer: ue.w,
          setActiveParentKey: ue.r,
          copyDataFromInlineComposerToModalComposer: ue.c,
        },
        xi = Object(Gr.e)(function () {
          return Object(me.createStructuredSelector)({
            activeComposerIndex: ti,
            activeUser: ni,
            altTextNudgeType: Kr.b,
            audienceControlsValue: Zr,
            composerData: wi(),
            dataSaverMode: qr.j,
            excludedRecipients: Jr,
            externalMedia: ui,
            externalMediaFiles: pi,
            geoEnabled: qr.o,
            hasArticleNudge: ci,
            inReplyToStatus: si,
            inReplyToStatusId: ri,
            isIntentRoute: li,
            isSelfThreadReply: bi,
            isSending: ei,
            isSuperFollowsCreator: fe.l,
            positionCursorAtBeginning: _i,
            loggedInUser: Wr.e.selectLoggedInUser,
            prepopulatedText: fi,
            previewTweetId: mi,
            promotedContent: Ci,
            scheduledFor: ue.n,
            selectedCommunityName: $r,
            sendingProgress: ue.o,
            convoCardData: di,
            undoTweetSettings: jr.d,
            userLanguage: fe.p,
            quotedStatusId: gi,
          })
        }, Ti),
        Ei = a('45mF'),
        Si = a('c0ZR'),
        Ii = a('W5XZ'),
        Ri = a('Drq4'),
        Mi = a('0uGn'),
        ki = a('I8M8'),
        Di = a('7myi'),
        Pi = a('7nmT'),
        Li = a.n(Pi),
        Ai = a('vbWy'),
        Fi = a('Rp9C'),
        Oi = a('Q5Mu'),
        Bi = a('N5qz'),
        Ni = 'tweetButton',
        Vi = 'tweetButtonInline',
        zi = Object(D.a)()
          .propsFromState(function () {
            return { loggedInUser: Wr.e.selectLoggedInUser }
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
        ji = a('cHvH'),
        Hi = a('sgih'),
        Wi = a('xKuM'),
        Ui = a('5Vk4'),
        Gi = B.a.create(function (e) {
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
        Ki = function (e) {
          var t = e.actionButtonType,
            a = e.children,
            n = e.onActionButtonClick,
            r = e.onMaskClick,
            i = e.sheetType,
            o = e.showActionButton
          return w.a.createElement(ji.a, null, function (e) {
            var s = e.windowWidth > B.a.theme.breakpoints.small
            return w.a.createElement(
              Hi.a,
              { onMaskClick: r, style: Gi.sheetStyle, type: i, withMask: !0 },
              o &&
                w.a.createElement(Wi.a, {
                  leftControl: w.a.createElement(Ui.a, { backButtonType: t, onClick: n }),
                  position: 'absolute',
                }),
              w.a.createElement(K.a, { style: [Gi.mainCard, s ? Gi.largeScreenCard : Gi.smallScreenCard] }, a),
            )
          })
        },
        qi = V.a.cb7c0987,
        Xi = V.a.de3bcf27,
        Yi = V.a.e710ce75,
        Qi = V.a.h11e5910,
        Ji = V.a.b7ec04f3,
        Zi = V.a.i62a03aa,
        $i = B.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
          }
        }),
        eo = function (e) {
          var t = e.onBack,
            a = e.onNo,
            n = e.onYes
          return w.a.createElement(
            Ki,
            {
              actionButtonType: 'back',
              onActionButtonClick: t,
              onMaskClick: t,
              sheetType: 'full',
              showActionButton: !0,
            },
            w.a.createElement(F.b, { size: 'title4', style: $i.itemPadding, weight: 'heavy' }, qi),
            w.a.createElement(F.b, { color: 'gray700', style: $i.itemPadding }, Xi),
            w.a.createElement(F.b, { color: 'gray700', style: $i.itemPadding }, Yi),
            w.a.createElement(
              K.a,
              { style: $i.buttonContainer },
              w.a.createElement(F.b, { size: 'title4', style: $i.itemPadding, weight: 'heavy' }, Qi),
              w.a.createElement(X.a, { onPress: n, style: $i.itemPadding, type: 'brandOutlined' }, Ji),
              w.a.createElement(X.a, { onPress: a, style: $i.itemPadding, type: 'brandOutlined' }, Zi),
            ),
          )
        },
        to = a('cm6r'),
        ao = B.a.create(function (e) {
          return { button: { width: e.spaces.space72, height: e.spaces.space72, marginBottom: e.spaces.space12 } }
        }),
        no = function (e) {
          var t = e.icon,
            a = e.label,
            n = e.onPress
          return w.a.createElement(to.a, { interactiveStyles: null, onPress: n }, function (e) {
            return w.a.createElement(
              w.a.Fragment,
              null,
              w.a.createElement(X.a, {
                icon: t,
                interactivityState: e,
                size: 'xLarge',
                style: ao.button,
                type: 'primaryOutlined',
              }),
              w.a.createElement(F.b, { color: 'gray700' }, a),
            )
          })
        },
        ro = a('sjK1'),
        io = a('FDY4'),
        oo = a('tevE'),
        so = a('jV+4'),
        lo = a('UgB4'),
        co = a('TW8A'),
        uo = a('hiGS'),
        po = a('WtWS'),
        mo = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ve.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Ne.a.root, e.style],
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
      mo.metadata = { width: 24, height: 24 }
      var ho = mo,
        fo = [
          { headlineText: V.a.f3a7a80c, subTextLine1: V.a.ge52d1de, subTextLine2: null },
          { headlineText: V.a.d1a92642, subTextLine1: V.a.ae42ebff, subTextLine2: V.a.aa350ab1 },
          { headlineText: V.a.j18b2956, subTextLine1: V.a.f6bee896, subTextLine2: V.a.dddd0995 },
          { headlineText: V.a.d02a94fa, subTextLine1: V.a.dddd0995, subTextLine2: null },
          { headlineText: V.a.i018b746, subTextLine1: V.a.b8d85df9, subTextLine2: V.a.d5ca11f0 },
        ],
        go = V.a.h11e5910,
        vo = V.a.abd845fd,
        yo = V.a.bea869b3,
        bo = V.a.d96cf7cd,
        _o = V.a.d3145da8,
        Co = B.a.create(function (e) {
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
        wo = function (e) {
          var t = e.hasSentFeedback,
            a = e.media,
            n = e.onDeleteTweet,
            r = e.onDismiss,
            i = e.onEditTweet,
            o = e.onSendTweet,
            s = e.onWeGotItWrong,
            l = e.tweetText,
            c = e.userName,
            d = e.userProfileImageUrl,
            u = e.userScreenName,
            p = w.a.useContext(de.a).featureSwitches.getNumberValue('responsive_web_reply_nudge_copy_version'),
            m = fo[(p = p >= 0 && p <= 4 ? p : 0)]
          return w.a.createElement(ji.a, null, function (e) {
            var p,
              h,
              f,
              g = e.windowWidth
            return w.a.createElement(
              Ki,
              {
                actionButtonType: 'close',
                onActionButtonClick: r,
                onMaskClick: r,
                sheetType: 'full',
                showActionButton: g > B.a.theme.breakpoints.medium,
              },
              w.a.createElement(ho, { style: [Co.profanityIcon, Co.itemPadding] }),
              w.a.createElement(oo.a, { size: 'title4', style: Co.itemPadding, weight: 'heavy' }, m.headlineText),
              w.a.createElement(F.b, { color: 'gray700', style: Co.itemPadding }, m.subTextLine1),
              w.a.createElement(F.b, { color: 'gray700', style: Co.itemPadding }, m.subTextLine2),
              w.a.createElement(
                K.a,
                { style: [Co.tweetContainer, Co.itemPadding] },
                w.a.createElement(
                  K.a,
                  { style: Co.tweetContent },
                  w.a.createElement(so.a, { name: c, profileImageUrl: d, screenName: u, style: Co.userName }),
                  w.a.createElement(
                    K.a,
                    { style: Co.tweetBody },
                    (function () {
                      if (0 === a.length) return null
                      var e = a.map(function (e) {
                        var t,
                          a,
                          n,
                          r = ''
                        if (e.externalMediaDetails) r = e.externalMediaDetails.stillMediaUrl
                        else if (e.mediaFile instanceof ro.c) r = e.mediaFile.thumbnail
                        else if (null !== (t = e.mediaFile) && void 0 !== t && t.url) {
                          var i
                          r = null === (i = e.mediaFile) || void 0 === i ? void 0 : i.url
                        }
                        return {
                          accessibilityLabel: '',
                          url: r,
                          width: (null === (a = e.mediaFile) || void 0 === a ? void 0 : a.width) || 100,
                          height: (null === (n = e.mediaFile) || void 0 === n ? void 0 : n.height) || 100,
                          expandedUrl: '',
                          shouldShowAltLabel: !1,
                        }
                      })
                      return w.a.createElement(
                        K.a,
                        { style: Co.photos },
                        w.a.createElement(io.a, {
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
                    w.a.createElement(F.b, { style: Co.textStyle }, l),
                  ),
                ),
              ),
              t
                ? w.a.createElement(
                    K.a,
                    { style: Co.thanksContainer },
                    w.a.createElement(po.a, { style: Co.thanksCheckMark }),
                    w.a.createElement(F.b, { align: 'center', style: Co.itemPadding }, _o),
                  )
                : w.a.createElement(F.b, { align: 'center', onPress: s, style: Co.itemPadding, withUnderline: !0 }, go),
              g > B.a.theme.breakpoints.small
                ? w.a.createElement(
                    K.a,
                    { style: Co.buttonContainer },
                    w.a.createElement(X.a, { onPress: i, style: Co.itemPadding, type: 'brandFilled' }, vo),
                    w.a.createElement(X.a, { onPress: o, style: Co.itemPadding, type: 'brandOutlined' }, yo),
                    w.a.createElement(X.a, { onPress: n, style: Co.itemPadding, type: 'destructiveText' }, bo),
                  )
                : ((p = w.a.createElement(lo.a, { style: { color: B.a.theme.colors.text } })),
                  (h = w.a.createElement(co.a, { style: { color: B.a.theme.colors.primary } })),
                  (f = w.a.createElement(uo.a, { style: { color: B.a.theme.colors.red500 } })),
                  w.a.createElement(
                    K.a,
                    { style: Co.mobileButtonContainer },
                    w.a.createElement(no, { icon: p, label: yo, onPress: o }),
                    w.a.createElement(no, { icon: h, label: vo, onPress: i }),
                    w.a.createElement(no, { icon: f, label: bo, onPress: n }),
                  )),
            )
          })
        },
        To = zi(function (e) {
          var t = e.analytics,
            a = e.media,
            n = e.nudgeId,
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
            g = w.a.useState(!1),
            v = R()(g, 2),
            y = v[0],
            b = v[1],
            _ = function (e) {
              var a = e.action,
                r = e.element,
                i = e.page,
                o = [{ nudge_id: n }]
              t.scribe({ action: a, data: { items: o }, element: r, page: i, section: 'dialog' })
            }
          return h
            ? w.a.createElement(eo, {
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
            : w.a.createElement(wo, {
                hasSentFeedback: y,
                media: a,
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
        xo = a('aITJ'),
        Eo = a('eb3s'),
        So = a('JYMr'),
        Io = a('sCk0'),
        Ro = a('3A2y'),
        Mo = a('zrOZ'),
        ko = a('s1N3'),
        Do = a('4FGy'),
        Po = a('mN6z'),
        Lo = a('eyty'),
        Ao = a('rziq'),
        Fo = a('lsKC'),
        Oo = a('jTgF'),
        Bo = V.a.d28215f0,
        No = V.a.ec909a54,
        Vo = V.a.jd53409d,
        zo = {
          singular: V.a.edae65de,
          plural: V.a.a859846a,
          oneOfMultiple: V.a.e90118f5,
          someOfMultiple: V.a.c211dcb1,
        },
        jo = { singular: V.a.d7c26bfb, plural: V.a.a75e3ccc },
        Ho = V.a.dcb7e3a0,
        Wo = function (e) {
          var t,
            a,
            n = e.numberOfDescriptionsMissing,
            r = n === e.numberOfImages
          return (
            1 === n
              ? ((a = jo.singular), (t = r ? zo.singular : zo.oneOfMultiple))
              : ((a = jo.plural), (t = r ? zo.plural : zo.someOfMultiple)),
            ''.concat(t, ' ').concat(a, ' ').concat(Ho)
          )
        },
        Uo = V.a.c1bf53b0,
        Go = V.a.bb8170da,
        Ko = V.a.dad5a4b8,
        qo = V.a.e65aed64,
        Xo = V.a.bc2ceaf2,
        Yo = V.a.d8222374,
        Qo = V.a.j890123a,
        Jo = V.a.bb01231c,
        Zo = V.a.d4ab68e2,
        $o = V.a.d8af8a4c,
        es = V.a.d09d4c05,
        ts = V.a.i2209530,
        as = V.a.bf9b89e4,
        ns = V.a.f277e949,
        rs = V.a.b551cd22,
        is = V.a.f026a7fa,
        os = V.a.a5d4fda0,
        ss = V.a.ib067d6a,
        ls = E.canUseDOM && document.documentElement && 'scrollBehavior' in document.documentElement.style,
        cs = { element: 'alt_text_prompt' },
        ds = { component: 'article_nudge' },
        us = { component: 'soft_nudge_with_quote_tweet' },
        ps = { viewType: 'send_tweet' },
        ms = Object.freeze({ Original: 'original', Reply: 'reply', Quote: 'quote', Thread: 'thread' }),
        hs = (function (e) {
          g()(a, e)
          var t = y()(a)
          function a(e, n) {
            var r, i, s
            d()(this, a),
              (s = t.call(this, e, n)),
              _()(h()(s), '_getParentKey', function () {
                var e = s.props,
                  t = e.isInline
                return e.parentTweetId || (t ? Vr.a.homeTimeline : Vr.a.modal)
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
                e.forEach(function (e, a) {
                  var n = t[e.key]
                  'string' == typeof n && n !== e.text && s._updateSingleComposer({ text: n }, a)
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
                  a = e.previewTweetId,
                  n = e.removeToast
                a && (n(), t(a))
              }),
              _()(h()(s), '_handleAnimateComplete', function () {
                var e = s.props,
                  t = e.activeComposerIndex,
                  a = e.onHandleAppBarHeight,
                  n = Li.a.findDOMNode(s._composerRefs[t])
                if (n instanceof window.Element) {
                  var r = n.getBoundingClientRect(),
                    i = r.bottom,
                    o = r.top,
                    l = Math.max(o, window.scrollY)
                  if (l < window.pageYOffset || i > window.innerHeight) {
                    var c = a ? l - a() - 14 : l - 14,
                      d = Math.max(c, 0)
                    window.requestAnimationFrame(function () {
                      ls ? window.scrollTo({ top: d, left: 0, behavior: 'smooth' }) : window.scrollTo(0, d)
                    })
                  }
                }
              }),
              _()(h()(s), '_handleFetchTweetIfNeeded', function () {
                var e = s.props,
                  t = e.createLocalApiErrorHandler,
                  a = e.fetchTweetIfNeeded,
                  n = e.inReplyToStatus,
                  r = e.inReplyToStatusId,
                  i = e.quotedStatus,
                  o = e.quotedStatusId
                !n && r && a(r).catch(t(Ii.a)), !i && o && a(o).catch(t(Ii.a))
              }),
              _()(h()(s), '_blockHistory', function (e, t) {
                var a = s.props,
                  n = a.audienceControlsValue,
                  r = a.isInline,
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
                  : !('POP' === t && o && s._areComposersEmptyOrUnchanged && !Object(aa.a)(n)) || (s._resetDraft(), !0)
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
                    ? (s.setState({ showAltTextPrompt: !0 }), void s._scribe(l()(l()({}, cs), {}, { action: 'show' })))
                    : s._handleTweetOrRetweet()
              }),
              _()(h()(s), '_handleTweetOrRetweet', function () {
                return s.isRetweet ? s._handleRetweet() : s._handleTweet()
              }),
              _()(h()(s), '_renderReplyContext', function () {
                var e = s.props,
                  t = e.activeUser,
                  a = e.excludedRecipients,
                  n = e.inReplyToStatus,
                  r = e.isInline,
                  i = e.isSelfThreadReply,
                  o = e.selectedCommunityName
                if (n && s._shouldBeExpanded())
                  return w.a.createElement(Ar, {
                    communityName: o,
                    excludedRecipients: a,
                    inReplyToStatus: n,
                    key: a.join(),
                    loggedInUserId: t ? t.id_str : void 0,
                    onPress: s._handleViewRecipients,
                    shouldDisplayRepliesText: !i,
                    showParentTweet: !r,
                  })
              }),
              _()(h()(s), '_renderAltTextPrompt', function () {
                var e = s._getAltTextMetadata(),
                  t = e.numberOfDescriptionsMissing,
                  a = e.numberOfImages
                return w.a.createElement(Eo.a, {
                  Icon: Ri.a,
                  cancelButtonLabel: Go,
                  confirmButtonLabel: Uo({ numOfDescriptions: t }),
                  headline: Vo,
                  onCancel: s._handleIgnoreAltTextPrompt,
                  onConfirm: s._handleAcceptAltTextPrompt,
                  onMaskClick: s._handleCancelAltTextPrompt,
                  text: Wo({ numberOfDescriptionsMissing: t, numberOfImages: a }),
                })
              }),
              _()(h()(s), '_renderToxicReplyNudge', function () {
                var e = s._getSingleComposerDataWithLatestText(s.props.composerData[0]),
                  t = e.text,
                  a = e.media
                return w.a.createElement(To, {
                  media: a,
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
                  a = e.copyDataFromInlineComposerToModalComposer,
                  n = e.isInline,
                  r = e.parentTweetId
                s.isInlineReply ? a(r) : n && a(Vr.a.homeTimeline), t()
              }),
              _()(
                h()(s),
                '_makeAddComposerLink',
                Object(ca.a)(function (e, t, a) {
                  return Object(Fo.c)({ isInline: e, isSelfThreadReply: t, parentTweetId: a })
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
                  e ? Object(na.h)(e) && s._handleScheduleTweet() : s._checkToxicReplyAndSendTweet()
              }),
              _()(h()(s), '_handleTweetError', function (e, t) {
                return function (a) {
                  var n = s.props,
                    r = n.analytics,
                    i = n.createLocalApiErrorHandler
                  if (Object(Oo.d)(a) && a.code === ki.b.CANCELED) return r.scribeAction(e), Promise.resolve()
                  var o = Object(Oo.b)(a)
                  if (o) return s.setState({ errorMessage: o }), Promise.resolve()
                  var c = t || Object(Ei.a)(void 0, !1)
                  i(l()({}, c))(a)
                  var d = a instanceof x.a && (null == t ? void 0 : t[a.errors[0].code])
                  s.setState({ errorMessage: { text: d ? d.toast.text : os } })
                }
              }),
              _()(h()(s), '_handleScheduleTweet', function () {
                var e = s.props,
                  t = e.addToast,
                  a = e.composerData,
                  n = e.excludedRecipients,
                  r = e.inReplyToStatus,
                  i = e.schedule,
                  o = s._getSingleComposerDataWithLatestText(a[0])
                i({ excludedRecipients: n, inReplyToStatus: r, scheduleData: o })
                  .then(function (e) {
                    s.setState({ tweetsSentOrScheduled: !0 })
                    var n = Object(na.c)(o.scheduledFor)
                    if (n) {
                      var r = Object(na.b)(n),
                        i = Object(na.i)(n),
                        c = rs({ scheduleDate: r, scheduleTime: i })
                      t({ text: c, action: { label: ns, link: { pathname: '/compose/tweet/unsent/scheduled' } } }),
                        s._scribeTweetSent(a[0], l()(l()({}, e), {}, { id_str: e.scheduled_id_str }), {
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
                  a = e.composerData
                ;(0, e.draftTweet)({
                  excludedRecipients: e.excludedRecipients,
                  inReplyToStatus: e.inReplyToStatus,
                  draftData: s._getSingleComposerDataWithLatestText(a[0]),
                })
                  .then(function (e) {
                    s.setState({ showDiscardTweetConfirmation: !1 }),
                      t({ text: as, action: { label: ns, link: { pathname: '/compose/tweet/unsent/drafts' } } }),
                      s._scribeTweetSent(a[0], l()(l()({}, e), {}, { id_str: e.draft_id_str }), { isDraftTweet: !0 }),
                      s._updateConvoCardState(),
                      s._close()
                  })
                  .catch(s._handleTweetError('draft_tweet_cancel', Oi.a))
              }),
              _()(h()(s), '_checkToxicReply', function () {
                var e = s.props,
                  t = e.checkTweetForNudge,
                  a = e.composerData,
                  n = e.inReplyToStatus,
                  r = e.inReplyToStatusId,
                  i = e.parentTweetId,
                  o = t(
                    s._getSingleComposerDataWithLatestText(a[0]).text,
                    i || r,
                    null == n ? void 0 : n.conversation_id_str,
                  ).then(function (e) {
                    var t, a, n, r, i, o, l
                    if (
                      !s.context.featureSwitches
                        .getArrayValue('responsive_web_reply_nudge_supported_languages')
                        .includes(
                          null === (t = e.create_nudge) || void 0 === t || null === (a = t.nudge) || void 0 === a
                            ? void 0
                            : a.proposed_tweet_language,
                        )
                    )
                      return !1
                    var c =
                        null == e ||
                        null === (n = e.create_nudge) ||
                        void 0 === n ||
                        null === (r = n.nudge) ||
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
                  a = e.isSelfThreadReply,
                  n = s.state.nudgeId
                if (
                  !(
                    !s._getSingleComposerDataWithLatestText(t[0]).scheduledFor &&
                    s.isReply &&
                    !a &&
                    s.context.featureSwitches.isTrue('responsive_web_reply_nudge_enabled') &&
                    !n
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
                  a = e.addToast,
                  n = e.analytics,
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
                  g = e.send,
                  v = r.conversationControlsValue,
                  y = r.exclusivityControlValue,
                  b = void 0 === y ? void 0 : y,
                  _ = r.trustedFriendsValue,
                  C = void 0 === _ ? void 0 : _,
                  w = r.trustedFriendsMemberCount,
                  T = void 0 === w ? void 0 : w,
                  x = s.isPreview,
                  E = s.props.composerData.map(function (e) {
                    return s._getSingleComposerDataWithLatestText(e)
                  }),
                  I = Object(na.c)(E[0].scheduledFor)
                if (I) {
                  var R = Object(na.b)(I),
                    M = Object(na.i)(I),
                    k = rs({ scheduleDate: R, scheduleTime: M })
                  return a({ text: k, action: { label: ns, link: '' } }), void s._close()
                }
                if (
                  (o.length > 0 && n.scribe({ element: 'mentions', action: 'edited' }),
                  C &&
                    n.scribe({
                      action: 'send_trusted_friends_tweet',
                      data: { trusted_friends_control_details: { list_member_count: T } },
                    }),
                  s._conversationControlsCreationEnabled)
                )
                  if ('community' === v) n.scribe({ action: 'send_community_tweet' })
                  else if ('by_invitation' === v) {
                    var D = s._getSingleComposerDataWithLatestText(E[0]).text,
                      P = Object(S.d)(D)
                    n.scribe({
                      action: P ? 'send_mentioned_tweet_with_mentions' : 'send_mentioned_tweet_without_mentions',
                    })
                  } else 'followers' === v && n.scribe({ action: 'send_my_followers_tweet' })
                var L = (null == u ? void 0 : u.community_id_str) || r.communityIdValue || void 0,
                  A = L ? '8.31.'.concat(L) : '',
                  F = i ? (L ? [i, A].join(',') : i) : A
                g({
                  sendData: E,
                  communityIdValue: L,
                  conversationControlsValue: v,
                  excludedRecipients: o,
                  exclusivityControlValue: b,
                  inReplyToStatus: u,
                  isSelfThreadReply: p,
                  promotedContent: h,
                  composeSemanticCoreId: F,
                  isPreview: x,
                  trustedFriendsValue: C,
                  tweetType: s.tweetType,
                })
                  .then(function (e) {
                    x || s.setState({ tweetsSentOrScheduled: !0 }),
                      e.map(function (e, t) {
                        return s._scribeTweetSent(E[t], e, { hasArticleNudge: c })
                      }),
                      e.length > 1 && s._scribeThreadSent(E, e, 'thread_send_success')
                    var n = e.length > 1 ? qo : Ko
                    if (L && f) {
                      var r = f,
                        i = e.length
                      n = No({ numOfTweets: i, communityName: r })
                    }
                    var o = x && s.isReply,
                      l = { label: ns, link: void 0, onAction: void 0 }
                    if (o || !x) {
                      var u = o ? e[0].in_reply_to_status_id_str : e[0].id_str
                      l.link = { pathname: '/'.concat(t ? t.screen_name : 'i', '/status/').concat(u || '') }
                    } else l.onAction = Object(Fo.a)(d, m, L)
                    a({ text: x ? Xo : n, action: l }),
                      s.isInlineReply && s.setState({ focused: !1 }),
                      s._updateConvoCardState(),
                      s._close()
                  })
                  .catch(function (e) {
                    var t,
                      a = e.sentTweets,
                      r = void 0 === a ? [] : a,
                      i = Array.isArray(e.errors) && (null === (t = e.errors[0]) || void 0 === t ? void 0 : t.code),
                      o = null == e ? void 0 : e.url,
                      u = null == e ? void 0 : e.status,
                      p = { message: e.type, event_info: i ? ''.concat(i) : void 0, status_code: u, url: o }
                    throw (
                      (r.map(
                        function (e, t) {
                          return s._scribeTweetSent(E[t], e)
                        },
                        { hasArticleNudge: c },
                      ),
                      (Object(Oo.d)(e) && e.code === ki.b.CANCELED) ||
                        n.scribe({ action: 'send_tweet_failure', data: p }),
                      E.length > 1 && s._scribeThreadSent(E, r, 'thread_send_failure'),
                      r.length &&
                        d.replace({
                          pathname: m.pathname,
                          state: l()(
                            l()({}, Object(Ro.a)(m.state || {}, 'quotedStatus')),
                            {},
                            { inReplyToStatusId: r[r.length - 1].id_str, isSelfThreadReply: !0 },
                          ),
                        }),
                      e)
                    )
                  })
                  .catch(s._handleTweetError('send_tweet_cancel', Oi.a))
              }),
              _()(h()(s), '_setActiveParentKey', function () {
                ;(0, s.props.setActiveParentKey)(s._getParentKey())
              }),
              _()(h()(s), '_scribeSoftNudgeWithQuoteTweet', function (e, t, a) {
                'soft_nudge_with_quote_tweet' === (null == e ? void 0 : e.limited_actions) &&
                  s._scribe(l()(l()({}, us), {}, { action: t }), a)
              }),
              _()(h()(s), '_scribeTweetSent', function (e, t) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  n = a.hasArticleNudge,
                  r = void 0 !== n && n,
                  i = a.isDraftTweet,
                  o = void 0 !== i && i,
                  c = a.isScheduled,
                  d = void 0 !== c && c,
                  u = s.state.nudgeId,
                  p = e.scheduledTweetId ? 'schedule_edit_' : 'schedule_',
                  m = e.draftTweetId ? 'draft_edit_' : 'draft_',
                  h = o ? m : d ? p : 'send_',
                  f = { items: [Fi.a.getTweetItem(t)] },
                  g = e.pollActive && e.pollValid,
                  v = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.altText)
                  }),
                  y = e.mediaTags.length,
                  b = Object(Mo.a)(
                    e.media
                      .map(function (e) {
                        var t,
                          a = null === (t = e.mediaMetadata) || void 0 === t ? void 0 : t.sensitiveMediaWarning
                        return a ? Array.from(a) : void 0
                      })
                      .filter(Boolean)
                      .flat(),
                  ),
                  _ = s.props.isInline ? 'inline_reply' : 'tweet_box_dialog'
                if (
                  (s._scribe({ action: ''.concat(h, 'tweet') }, f),
                  o || !e.draftTweetId || e.scheduledTweetId || s._scribe({ action: ''.concat(h, 'draft_tweet') }, f),
                  s.isQuoteTweet &&
                    (s._scribeSoftNudgeWithQuoteTweet(e.quotedStatus, 'retweet_with_comment', f),
                    s._scribe({ action: 'retweet_with_comment' }, f),
                    r && s._scribe(l()(l()({}, ds), {}, { element: 'result', action: 'retweet_with_comment' }), f)),
                  s.isReply && s._scribe({ component: _, action: ''.concat(h, 'reply') }, f),
                  g && s._scribe({ action: ''.concat(h, 'poll_tweet') }, f),
                  s._hasPhoto(e) &&
                    (s._scribe({ action: ''.concat(h, 'photo_tweet') }, f),
                    v && s._scribe({ action: ''.concat(h, 'photo_tweet_with_alt_text') }, f),
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
                  var T = t.id_str && Fi.a.getGifSearchItemForTweet(t.id_str, e.gifMetadata)
                  s._scribe({ element: 'remote', action: ''.concat(h, 'gif_tweet') }, { items: T ? [T] : [] })
                  var x = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.defaultAltText)
                  })
                  ;(v || x) &&
                    s._scribe(
                      { element: 'remote', action: ''.concat(h, 'gif_tweet_with_alt_text') },
                      { event_info: v ? 'user_entered' : 'from_provider', items: T ? [T] : [] },
                    ),
                    y && s._scribe({ action: ''.concat(h, 'gif_tweet_with_tags') }, f)
                } else s._hasGif(e) && (s._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet') }, f), v && s._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet_with_alt_text') }, f))
              }),
              _()(h()(s), '_scribeThreadSent', function (e, t, a) {
                var n = s.props.inReplyToStatus,
                  r = { items: [Fi.a.getSendThreadItem(e, t.length, !!n)] }
                s._scribe({ action: a }, r)
              }),
              _()(h()(s), '_scribeRetweet', function (e) {
                var t = s.props.hasArticleNudge,
                  a = { items: [Fi.a.getTweetItem(e)] }
                s._scribeSoftNudgeWithQuoteTweet(e, 'retweet', a),
                  s._scribe({ action: 'retweet' }, a),
                  t && s._scribe(l()(l()({}, ds), {}, { element: 'result', action: 'retweet' }), a)
              }),
              _()(h()(s), '_handleRetweet', function () {
                var e = s.props,
                  t = e.composerData,
                  a = e.createLocalApiErrorHandler,
                  n = e.retweet,
                  r = t[0].quotedStatus
                r &&
                  (s._scribeRetweet(r),
                  n(r.id_str, {}).then(function (e) {
                    s.setState({ tweetsSentOrScheduled: !0 }), s._close()
                  }, a(Ai.a)))
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
                  a = e.hasArticleNudge,
                  n = s._canSaveDraft ? 'draft' : 'send'
                s.setState({ showDiscardTweetConfirmation: !1 }),
                  s._close(),
                  t.scribeAction(''.concat(n, '_tweet_discard')),
                  a && s._scribe(l()(l()({}, ds), {}, { element: 'result', action: 'cancel' })),
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
                  (s._scribe(l()(l()({}, cs), {}, { action: 'accepted' })),
                  e.push('/compose/tweet/media', { mediaId: t[0], tab: Mi.a.altText, hideTabs: !0, showAllMedia: !0 }))
              }),
              _()(h()(s), '_handleIgnoreAltTextPrompt', function () {
                s._scribe(l()(l()({}, cs), {}, { action: 'declined' })),
                  s.setState({ showAltTextPrompt: !1 }),
                  s._handleTweetOrRetweet()
              }),
              _()(h()(s), '_handleCancelAltTextPrompt', function () {
                s._scribe(l()(l()({}, cs), {}, { action: 'cancel' })),
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
                  a = e.isSending,
                  n = e.onCloseComposer
                a || s._resetDraft(),
                  s.state.navigatingToOutbox
                    ? s._canSaveDraft
                      ? t.push('/compose/tweet/unsent/drafts')
                      : t.push('/compose/tweet/unsent/scheduled')
                    : n && n()
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
                  a = e.composerData,
                  n = e.history,
                  r = e.location,
                  i = e.removeComposer
                0 === t &&
                  a[0].quotedStatus &&
                  n.replace({ pathname: r.pathname, state: Object(Ro.a)(r.state || {}, 'quotedStatus') }),
                  i(),
                  setTimeout(s._restoreFocusToActiveComposer)
              }),
              _()(h()(s), '_handleViewRecipients', function () {
                var e = s.props,
                  t = e.excludedRecipients,
                  a = e.history,
                  n = e.inReplyToStatus
                s._setActiveParentKey(),
                  a.push({
                    pathname: '/compose/tweet/recipients',
                    state: { excludedRecipients: t, inReplyToStatus: n },
                  })
              }),
              _()(h()(s), '_handleTextChange', function (e, t) {
                var a = s.state.textMap,
                  n = s.props,
                  r = n.activeComposerIndex,
                  i = n.isInline,
                  o = n.setValidity
                if (
                  (s.setState({ textMap: l()(l()({}, a), {}, _()({}, t, e)) }, function () {
                    o && o(s._areComposersValid())
                  }),
                  s.setState({ errorMessage: void 0 }),
                  xo.b.isIOS())
                ) {
                  var c = i ? 0 : r
                  s._updateSingleComposer({ text: e }, c)
                }
              }),
              _()(
                h()(s),
                '_handleTextOnBlur',
                Object(ca.a)(function (e, t) {
                  return function () {
                    var a = s.state,
                      n = a.textMap,
                      r = a.tweetsSentOrScheduled,
                      i = s.props.composerData,
                      o = n[e],
                      l = i.some(function (t) {
                        return t.key === e
                      })
                    'string' == typeof o && !r && l && s._updateSingleComposer({ text: o }, t)
                  }
                }),
              ),
              _()(h()(s), '_updateAudienceControlsValue', function (e) {
                var t = s.props,
                  a = t.composerData,
                  n = t.updateAudienceControlsValue,
                  r = s.state.errorMessage
                switch (e._type) {
                  case 'conversation_controls':
                    if (!s._conversationControlsCreationEnabled) return
                    break
                  case 'community_members':
                    if (!s._isCommunitiesEnabled) return
                    a[0].pollActive &&
                      (s._updateSingleComposer({ pollActive: !1 }, 0), s.setState({ errorMessage: { text: Bo } })),
                      (null == r ? void 0 : r.text) === Bo && s.setState({ errorMessage: void 0 })
                }
                n(e, s._getParentKey())
              }),
              _()(h()(s), '_renderProgressBar', function () {
                var e = s.props,
                  t = e.isSending,
                  a = e.sendingProgress
                return w.a.createElement(So.a, { progress: t ? Math.max(a, 0.02) : 0, style: fs.progressBar })
              }),
              _()(h()(s), '_updateConvoCardState', function () {
                var e = s.props,
                  t = e.convoCardData,
                  a = e.updateConvoCardState
                if (t) {
                  var n = t.cardId,
                    r = t.nextState
                  r && n && a(n, { cardState: r })
                }
              }),
              _()(h()(s), '_attachExternalMedia', function (e) {
                return function (t) {
                  return Promise.all(
                    t.map(function (e) {
                      return Object(Si.a)(e)
                    }),
                  ).then(s._handleAddMediaFiles(e))
                }
              }),
              _()(h()(s), '_handleAddMediaFiles', function (e) {
                return function (t) {
                  var n,
                    r,
                    i,
                    o,
                    l = s.props,
                    c = l.addMedia,
                    d = l.addToast,
                    u = l.composerData,
                    p = l.dataSaverMode,
                    m = l.preUploadMedia,
                    f = l.processMultipleMedia,
                    g = l.removeMediaUpload,
                    v = u[e],
                    y = v.pollActive,
                    b = Object(Lo.e)(
                      null === (n = h()(s)) || void 0 === n || null === (r = n.context) || void 0 === r
                        ? void 0
                        : r.userClaims,
                      null === (i = h()(s)) || void 0 === i || null === (o = i.context) || void 0 === o
                        ? void 0
                        : o.featureSwitches,
                    )
                  y ||
                    c(t, { location: Lo.d.Tweet, canUploadLongVideo: b }).then(function (t) {
                      var n = t.map(function (e) {
                        return e.id
                      })
                      if (a._validateMedia(v, t)) {
                        var r = v.media.map(function (e) {
                          return e.id
                        })
                        s._updateSingleComposer({ mediaIds: Object(ko.a)(r.concat(n)) }, e),
                          f(t, { onFailure: s._handleMediaRemoveFactory(e) }).then(function (e) {
                            p ||
                              m(
                                e.map(function (e) {
                                  return e.id
                                }),
                              )
                          })
                      } else d({ text: ss }), g(n)
                    })
                }
              }),
              _()(h()(s), '_handleMediaRemoveFactory', function (e) {
                return function (t) {
                  return s._handleMediaRemove(e, t)
                }
              }),
              _()(h()(s), '_handleMediaRemove', function (e, t) {
                var a = s.props,
                  n = a.composerData,
                  r = a.removeMediaUpload,
                  i = n[e],
                  o = i.media,
                  l = i.mediaTags,
                  c = (function (e) {
                    for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                      a[n - 1] = arguments[n]
                    return Object(Do.a)(e, a)
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
                  a = e.parentTweetId
                if (s.state.focused) return !0
                var n = !Object(aa.c)(s._getSingleComposerDataWithLatestText(t[0]))
                return !a || n
              }),
              _()(h()(s), '_areComposersValid', function () {
                var e = s.props,
                  t = e.audienceControlsValue._type,
                  a = e.composerData,
                  n = a[0].quotedStatus,
                  r = null == n ? void 0 : n.community_id_str,
                  i = 'community_members' === t
                return (
                  (s.isRetweet && !r && !i) ||
                  a.every(function (e) {
                    return Object(aa.e)(s._getSingleComposerDataWithLatestText(e))
                  })
                )
              }),
              _()(h()(s), '_areComposersEmptyOrUnchanged', function () {
                var e = s.props,
                  t = e.composerData,
                  a = e.prepopulatedText
                return t.every(function (e) {
                  return Object(aa.d)(s._getSingleComposerDataWithLatestText(e), a)
                })
              }),
              _()(h()(s), '_getAltTextMetadata', function () {
                var e = s.props.composerData,
                  t = { numberOfDescriptionsMissing: 0, numberOfImages: 0, noDescriptionImageIDs: [] }
                return (
                  e.forEach(function (e) {
                    var a,
                      n = (e.media || []).filter(function (e) {
                        var t = e.mediaFile
                        return (null == t ? void 0 : t.isImage) || (null == t ? void 0 : t.isGif)
                      }),
                      r = n
                        .filter(function (e) {
                          var t = e.mediaMetadata
                          return !(null != t && t.altText)
                        })
                        .map(function (e) {
                          return e.id
                        })
                    ;(t.numberOfImages += n.length), (a = t.noDescriptionImageIDs).push.apply(a, o()(r))
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
              (s._throttledSyncTexts = Object(Ua.a)(s._syncTexts, 1e3, { leading: !0, trailing: !1 })),
              (s._keyCommandHandlers =
                ((i = {}), _()(i, Ao.b, s.handleTweetOrRetweet), _()(i, Ao.a, s.handleDismissComposer), i)),
              (s._keyCommandHandlersForActiveTypeahead = _()({}, Ao.b, s.handleTweetOrRetweet)),
              (s._isAltTextNudgeEnabled =
                !0 ===
                s.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_alt_text_nudges_enabled')),
              (s._isCommunitiesEnabled = s.context.featureSwitches.isTrue('c9s_enabled')),
              s
            )
          }
          return (
            p()(a, [
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
                    a = e.externalMedia,
                    n = e.externalMediaFiles,
                    r = e.fetchAltTextPromptPreferenceIfNeeded,
                    i = e.history,
                    o = e.isInline,
                    s = e.isIntentRoute,
                    c = e.location,
                    d = e.prepopulatedText,
                    u = e.setValidity
                  if (
                    ((this._unblockHistory = this.props.history.block(this._blockHistory)),
                    a.length > 0 && this._attachExternalMedia(0)(a),
                    n.length > 0 && this._handleAddMediaFiles(0)(n),
                    this._handleFetchTweetIfNeeded(),
                    this._handleDeletePreviewTweet(),
                    r(),
                    d || (t && t.cardUrl))
                  ) {
                    var p = l()({}, null)
                    d && (p.text = d), t && t.cardUrl && (p.cardUrl = t.cardUrl), this._updateSingleComposer(p)
                  }
                  ;(d || (t && t.cardUrl) || a.length > 0 || n.length > 0) &&
                    !s &&
                    i.replace({
                      query: Object(Br.b)(c.query),
                      search: '',
                      pathname: c.pathname,
                      state: Object(Ro.a)(Object(Br.b)(c.state || {}), [
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
                  var a = this.props,
                    n = a.addToast,
                    r = a.composerData,
                    i = a.copyDataFromInlineComposerToModalComposer,
                    o = a.externalMedia,
                    s = a.externalMediaFiles,
                    l = a.onRef,
                    c = a.parentTweetId,
                    d = a.replyPressToggle,
                    u = a.setValidity
                  a.windowWidth !== e.windowWidth && this._throttledSyncTexts(),
                    e.onRef && e.onRef !== l && e.onRef(void 0),
                    l && l !== e.onRef && l(this),
                    r.length >= 25 && e.composerData.length < 25 && n({ text: is }),
                    o.length > 0 && o !== e.externalMedia
                      ? this._attachExternalMedia(0)(o)
                      : s.length > 0 && s !== e.externalMediaFiles && this._handleAddMediaFiles(0)(s),
                    u && !Object(Po.a)(r, e.composerData) && u && u(this._areComposersValid()),
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
                    a,
                    n = this,
                    i = this.props,
                    o = i.activeUser,
                    s = i.addToast,
                    l = i.audienceControlsValue,
                    c = i.composeHeader,
                    d = i.composerData,
                    u = i.customizePropsForSingleComposerItem,
                    p = i.geoEnabled,
                    m = i.history,
                    h = i.inReplyToStatus,
                    f = i.isInline,
                    g = i.isModal,
                    v = i.isSelfThreadReply,
                    y = i.isSending,
                    b = i.isSuperFollowsCreator,
                    _ = i.parentTweetId,
                    C = i.positionCursorAtBeginning,
                    T = i.richTextInputContext,
                    x = i.scheduledFor,
                    E = i.typeaheadWrapper,
                    S = i.userLanguage,
                    I = i.windowWidth,
                    R = this.state,
                    M = R.errorMessage,
                    k = R.focused,
                    D = R.shouldDisableButton,
                    P = R.showAltTextPrompt,
                    L = R.showDiscardTweetConfirmation,
                    A = R.showToxicReplyNudge,
                    F = R.typeaheadActive,
                    O = !g && F,
                    B = f ? 0 : this.props.activeComposerIndex,
                    N = O || f ? [d[B]] : d,
                    V = this._areComposersValid(),
                    z = this.hasNonCompliantQuote && this.isRetweet,
                    j = f ? K.a : Io.a,
                    H = f ? {} : { onAnimateComplete: g ? void 0 : this._handleAnimateComplete },
                    W = D || !V || z || this.isCommunityTweetFromProtectedUser,
                    U = (f && Bi.a.isOneColumnSquishedLayout(I)) || this.isCommunityTweet,
                    G = (f && Bi.a.isOneColumnSquishedLayout(I)) || this.isCommunityTweet || this.isExclusiveTweet,
                    q = null == h || null === (e = h.trusted_friends_info) || void 0 === e ? void 0 : e.screen_name
                  return w.a.createElement(
                    K.a,
                    { ref: this._setRootRef, style: !_ && fs.root },
                    f ? this._renderProgressBar() : null,
                    M &&
                      w.a.createElement(
                        K.a,
                        { style: fs.inlineCallout },
                        w.a.createElement(_t.a, {
                          action:
                            null !== (t = M.action) &&
                            void 0 !== t &&
                            t.label &&
                            null !== (a = M.action) &&
                            void 0 !== a &&
                            a.link
                              ? { label: M.action.label, link: M.action.link }
                              : void 0,
                          text: M.text,
                          type: 'danger',
                        }),
                      ),
                    w.a.createElement(
                      K.a,
                      {
                        onFocus: this._handleFocus,
                        style: [fs.content, _ && fs.contentInlineReply, g && fs.contentModal],
                      },
                      h ? this._renderReplyContext() : null,
                      c,
                      w.a.createElement(
                        j,
                        H,
                        N.map(function (e, t) {
                          var a = Object(na.h)(e.scheduledFor),
                            i = d.indexOf(e),
                            c = u(e, t, N),
                            R =
                              g || f
                                ? w.a.createElement(
                                    X.a,
                                    {
                                      behavioralEventContext: ps,
                                      disabled: W,
                                      onPress: n.handleTweetOrRetweet,
                                      size: 'medium',
                                      style: fs.inlineSendButton,
                                      testID: g ? Ni : Vi,
                                      type: 'brandFilled',
                                    },
                                    Object(Fo.b)({
                                      inReplyToStatus: !!h,
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
                            K.a,
                            { key: e.key },
                            w.a.createElement(
                              Cr,
                              r()(
                                {
                                  addComposerLink: n._makeAddComposerLink(f, v, _),
                                  addToast: s,
                                  additionalToolbarContent: R,
                                  audienceControlsValue: l,
                                  autoFocus: n.isInlineReply && k,
                                  data: M,
                                  disableAddTweet: d.length >= 25,
                                  editable: !y && !!o,
                                  fetchAutotaggedLocationIfNeeded: n._fetchAutotaggedLocationIfNeeded,
                                  geoEnabled: p,
                                  hidePoll: U,
                                  hideScheduling: G,
                                  history: m,
                                  index: i,
                                  isActive: i === B && !y,
                                  isCommunityTweetFromProtectedUser: n.isCommunityTweetFromProtectedUser,
                                  isExpanded: 0 !== t || n._shouldBeExpanded(),
                                  isInline: f,
                                  isInlineReply: n.isInlineReply,
                                  isLast: f || i === d.length - 1,
                                  isReply: !!h || n.isInlineReply,
                                  isSelfThreadReply: !!v,
                                  isSuperFollowsCreator: b,
                                  keyCommandHandlers: n._getKeyCommandHandlers(),
                                  loggedInUser: o,
                                  onAddComposer: n._handleAddComposer,
                                  onFilesAdded: n._handleAddMediaFiles(i),
                                  onFocus: n._handleComposerFocus,
                                  onRemoveComposer: n._handleRemoveComposer,
                                  onRemoveMedia: n._handleMediaRemove,
                                  onTextChange: n._handleTextChange,
                                  onTextInputBlur: n._handleTextOnBlur(M.key, t),
                                  onTypeaheadStateChange: n._handleTypeaheadStateChange,
                                  positionCursorAtBeginning: !!C,
                                  ref: n._setComposerRef(i),
                                  richTextInputContext: T,
                                  scheduledFor: x,
                                  setActiveParentKey: n._setActiveParentKey,
                                  trustedFriendsTweetAuthorScreename: q,
                                  twitterTextConfigurationVersion: 'version3',
                                  typeaheadActive: F,
                                  typeaheadWrapper: E,
                                  updateAudienceControlsValue: n._updateAudienceControlsValue,
                                  updateSingleComposer: n._updateSingleComposer,
                                  userLanguage: S,
                                  windowWidth: I,
                                },
                                c,
                              ),
                            ),
                          )
                        }),
                      ),
                      L
                        ? this._canSaveDraft
                          ? w.a.createElement(Eo.a, {
                              cancelButtonLabel: Zo,
                              confirmButtonLabel: ts,
                              headline: $o,
                              onCancel: this._handleConfirmDiscardTweet,
                              onConfirm: this._handleDraftTweet,
                              onMaskClick: this._handleCancelDiscardTweet,
                              text: es,
                            })
                          : w.a.createElement(Eo.a, {
                              confirmButtonLabel: Zo,
                              confirmButtonType: 'destructiveFilled',
                              headline: this.isThread ? Qo : Yo,
                              onCancel: this._handleCancelDiscardTweet,
                              onConfirm: this._handleConfirmDiscardTweet,
                              text: Jo,
                            })
                        : null,
                      P ? this._renderAltTextPrompt() : null,
                      A ? this._renderToxicReplyNudge() : null,
                      w.a.createElement(K.a, { style: y && fs.mask }),
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
                    a = this._getSingleComposerDataWithLatestText(e[0]).text
                  return !this.isThread && e[0].quotedStatus && '' === a && t
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
                    a = e.isSending,
                    n = t[0].scheduledTweetId,
                    r = this.state.showDiscardTweetConfirmation,
                    i = this._areComposersEmptyOrUnchanged()
                  return !(a || i || r || n)
                },
              },
              {
                key: 'shouldShowBackgroundSendConfirmation',
                get: function () {
                  var e = this.props,
                    t = e.composerData,
                    a = e.isSending,
                    n = t.some(function (e) {
                      return e.media.some(function (e) {
                        return e.uploading
                      })
                    })
                  return a && n
                },
              },
              {
                key: 'shouldShowAltTextPrompt',
                get: function () {
                  var e = this.props.altTextNudgeType
                  return (
                    !(
                      !this.context.featureSwitches.isTrue('responsive_web_alt_text_nudges_enabled') || e !== T.a.prompt
                    ) && this._getAltTextMetadata().numberOfDescriptionsMissing > 0
                  )
                },
              },
              {
                key: '_canSaveDraft',
                get: function () {
                  var e = this.props,
                    t = e.composerData,
                    a = e.isInline
                  return !(
                    this.isCommunityTweet ||
                    this.isExclusiveTweet ||
                    this.isThread ||
                    t[0].pollActive ||
                    0 !== t[0].mediaTags.length ||
                    a
                  )
                },
              },
              {
                key: 'isCommunityTweet',
                get: function () {
                  var e = this.props,
                    t = e.audienceControlsValue,
                    a = e.inReplyToStatus
                  return !!((null != a && a.community_id_str) || 'community_members' === t._type)
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
                    ? ms.Quote
                    : this.isThread
                    ? ms.Thread
                    : this.isReply
                    ? ms.Reply
                    : ms.Original
                },
              },
              {
                key: '_undoEnabledForTweetType',
                value: function (e) {
                  var t = this.props.undoTweetSettings
                  return !t || void 0 === t[this.tweetType] || t[e]
                },
              },
              {
                key: 'isPreview',
                get: function () {
                  var e,
                    t,
                    a = this.props.composerData,
                    n =
                      null == this ||
                      null === (e = this.context) ||
                      void 0 === e ||
                      null === (t = e.userClaims) ||
                      void 0 === t
                        ? void 0
                        : t.isTrueAndEnabled('subscriptions_feature_1003'),
                    r = a[0].pollActive && a[0].pollValid
                  return (
                    n &&
                    ((r && this._undoEnabledForTweetType('poll')) || !r) &&
                    (this._undoEnabledForTweetType(this.tweetType) || (r && this._undoEnabledForTweetType('poll')))
                  )
                },
              },
            ]),
            a
          )
        })(w.a.Component)
      _()(hs, 'defaultProps', {
        customizePropsForSingleComposerItem: function (e, t, a) {
          return {}
        },
        externalMedia: [],
        externalMediaFiles: [],
        isSelfThreadReply: !1,
        isModal: !1,
        positionCursorAtBeginning: !1,
        prepopulatedText: '',
        setValidity: function () {},
        typeaheadWrapper: Di.a,
      }),
        _()(hs, 'contextType', de.a),
        _()(hs, '_validateMedia', function (e, t) {
          var a = e.media
          return Object(S.c)(a.concat(t))
        })
      var fs = B.a.create(function (e) {
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
      t.a = Object(G.a)(xi(hs))
    },
    'ii+P': function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return o
      })
      a('FtFR')
      var n = a('ERkP'),
        r = a.n(n),
        i = a('wtru')
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
      t.a = o
    },
    lsKC: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return c
      }),
        a.d(t, 'a', function () {
          return d
        }),
        a.d(t, 'c', function () {
          return u
        })
      a('jQ3i'), a('x4t0')
      var n = a('3XMw'),
        r = a.n(n),
        i = r.a.g34f2c63,
        o = r.a.f70a36d0,
        s = r.a.d17df547,
        l = r.a.h735a98d,
        c = function (e) {
          var t = e.inReplyToStatus && !e.isSelfThreadReply
          return e.isScheduled ? l : t ? s : e.isThread ? o : i({ verb: '' })
        },
        d = function (e, t, a) {
          return function () {
            if (a) {
              var n, r
              ;(null === (n = t.state) || void 0 === n || null === (r = n.previousPath) || void 0 === r
                ? void 0
                : r.includes(a)) && '/compose/tweet' === t.pathname
                ? window.scrollTo(0, 0)
                : e.push('/i/communities/'.concat(a), { lockScroll: !0 })
            } else {
              var i,
                o,
                s =
                  (null === (i = t.state) || void 0 === i || null === (o = i.previousPath) || void 0 === o
                    ? void 0
                    : o.includes('/home')) && '/compose/tweet' === t.pathname
              t.pathname.includes('/home') || s ? window.scrollTo(0, 0) : e.push('/home', { lockScroll: !0 })
            }
          }
        },
        u = function (e) {
          var t = e.isInline,
            a = e.isSelfThreadReply,
            n = e.parentTweetId
          return t ? { pathname: '/compose/tweet', state: { inReplyToStatusId: n, isSelfThreadReply: a } } : void 0
        }
    },
    'p+r5': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return W
      })
      a('yiKp')
      var n = a('97Jx'),
        r = a.n(n),
        i = a('m3Bd'),
        o = a.n(i),
        s = a('VrFO'),
        l = a.n(s),
        c = a('Y9Ll'),
        d = a.n(c),
        u = a('1Pcy'),
        p = a.n(u),
        m = a('5Yy7'),
        h = a.n(m),
        f = a('2VqO'),
        g = a.n(f),
        v = a('KEM+'),
        y = a.n(v),
        b = (a('2G9S'), a('ERkP')),
        _ = a.n(b),
        C = a('38/B'),
        w = a('t62R'),
        T = a('/yvb'),
        x = a('piX5'),
        E = a('3XMw'),
        S = a.n(E),
        I = a('tI3i'),
        R = a.n(I),
        M = a('oQhu'),
        k = a('rHpw'),
        D = a('aITJ'),
        P = a('MWbm'),
        L = a('n5fo'),
        A = a('5emT'),
        F = a('Oib4'),
        O = a('WtWS'),
        B = a('ioan'),
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
        z = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V
          return t(e)
        },
        j = S.a.de540c32,
        H = S.a.b4abfdb3,
        W = (function (e) {
          h()(a, e)
          var t = g()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              y()(p()(n), '_blurOnBackspaceKeyUpForKaiOS', !1),
              y()(p()(n), '_isLabelLarge', function () {
                var e = n.state,
                  t = e.actualCount,
                  a = e.isFocused
                return !t && !a
              }),
              y()(
                p()(n),
                '_getTextInputStyle',
                Object(M.a)(function (e) {
                  return [U.root, !e && U.disabled]
                }),
              ),
              y()(p()(n), '_getTextInputType', function () {
                var e = n.props,
                  t = e.showPasswordVisibilityIcon,
                  a = e.type,
                  r = n.state.isPasswordRevealed
                return 'password' === a && t ? (r ? 'text' : 'password') : a
              }),
              y()(p()(n), '_calculateLength', function (e) {
                return z(e, n.props.calculateLength)
              }),
              y()(p()(n), '_shouldRenderDisplayCount', function () {
                var e = n.state.isFocused,
                  t = n._isFormInvalid()
                return Boolean((e || t) && n._getMaxDisplayCount())
              }),
              y()(p()(n), '_isInvalidNumber', function () {
                var e,
                  t,
                  a,
                  r,
                  i,
                  o = n.props.type,
                  s =
                    null === (e = n._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  l =
                    null === (a = n._textInput) ||
                    void 0 === a ||
                    null === (r = a.textInputNode) ||
                    void 0 === r ||
                    null === (i = r.validity) ||
                    void 0 === i
                      ? void 0
                      : i.badInput
                return 'number' === o && '' === s && !0 === l
              }),
              y()(p()(n), '_getActualCount', function (e) {
                var t = e.length
                return n._isInvalidNumber() && (t = 1), t
              }),
              y()(p()(n), '_handleBlur', function () {
                var e,
                  t = n.props.onBlur,
                  a = (null === (e = n._textInput) || void 0 === e ? void 0 : e.getValue()) || '',
                  r = n._calculateLength(a),
                  i = n._getActualCount(a)
                n.setState({ isFocused: !1, displayCount: r, actualCount: i }), t && t()
              }),
              y()(p()(n), '_handleChange', function (e) {
                var t = n.props.onChange,
                  a = n.state.previousValue,
                  r = e.currentTarget.value,
                  i = n._calculateLength(r),
                  o = n._getActualCount(r),
                  s = n._getAdjustedMaxLength()
                void 0 !== s && r.length > s && a.length < r.length
                  ? (e.currentTarget.value = a)
                  : (n.setState({
                      isFocused: !0,
                      displayCount: i,
                      actualCount: o,
                      previousValue: e.currentTarget.value,
                    }),
                    t && t(e))
              }),
              y()(p()(n), '_handleFocus', function () {
                var e = n.props.onFocus
                n.setState({ isFocused: !0 }), e && e()
              }),
              y()(p()(n), '_handleKeyPress', function (e) {
                var t = n.props,
                  a = t.multiline,
                  r = t.onKeyPress,
                  i = t.onSubmitEditing
                r && r(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || a || !i || (e.preventDefault(), i(e))
              }),
              y()(p()(n), '_handleKeyDown', function (e) {
                var t = n.props.onKeyDown,
                  a = 0 === n.state.displayCount
                D.b.isKaiOS() && 'Backspace' === e.key && a ? (n._blurOnBackspaceKeyUpForKaiOS = a) : t && t(e)
              }),
              y()(p()(n), '_handleKeyUp', function (e) {
                var t = n.props.onKeyUp
                D.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  n._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), n.blur()),
                  t && t(e)
              }),
              y()(p()(n), '_handlePasswordVisibilityClick', function (e) {
                n.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              y()(p()(n), '_setTextInputRef', function (e) {
                n._textInput = e
              }),
              y()(p()(n), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  a = e.maxLength,
                  n = e.onChange,
                  r = e.validLength,
                  i = !!n,
                  o = 'string' == typeof e.value,
                  s = 'string' == typeof t
                R()(
                  !(!s && o && !i),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  R()(!(a && r && r > a), 'Max length should be equal or greater than valid length.'),
                  R()(
                    !((void 0 !== a && a <= 0) || (void 0 !== r && r <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              y()(p()(n), '_exceedsValidLength', function (e) {
                var t = n._getMaxDisplayCount()
                return !!t && e > t
              }),
              y()(p()(n), '_getMaxDisplayCount', function () {
                return n.props.validLength || n.props.maxLength
              }),
              y()(p()(n), '_getAdjustedMaxLength', function () {
                var e = n.props.maxLength,
                  t = n.getValue(),
                  a = n._calculateLength(t)
                return e ? e + t.length - a : void 0
              }),
              n._checkComponentPropsUsageCorrectness(e)
            var r = e.defaultValue,
              i = e.value || r || ''
            return (
              (n.state = {
                displayCount: n._calculateLength(i),
                actualCount: V(i),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: i,
              }),
              n
            )
          }
          return (
            d()(
              a,
              [
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var t = this.props,
                      a = t.maxLength,
                      n = t.onChange,
                      r = t.validLength,
                      i = t.value,
                      o = e.maxLength,
                      s = e.onChange,
                      l = e.validLength,
                      c = e.value
                    ;(l === r && a === o && !!n === !!s && ('string' == typeof i) === ('string' == typeof c)) ||
                      this._checkComponentPropsUsageCorrectness(this.props)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.accessibilityLabel,
                      a = e.editable,
                      n = e.errorText,
                      r = e.helperText,
                      i = e.style,
                      o = this.state.isFocused,
                      s = this._isFormInvalid()
                    return _.a.createElement(
                      P.a,
                      { style: [G.root, i] },
                      _.a.createElement(
                        P.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            x.a.border,
                            G.textInputFormStyle,
                            s && x.a.invalidBorderColor,
                            o && s && x.a.focusedBorderInvalid,
                            o && !s && x.a.focusedBorderValid,
                            !a && x.a.disabled,
                          ],
                        },
                        _.a.createElement(
                          P.a,
                          { style: G.textInputFormWrapper },
                          _.a.createElement(
                            P.a,
                            { style: G.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      _.a.createElement(
                        P.a,
                        { style: [G.sidePadding, G.underTextInputForm] },
                        _.a.createElement(
                          P.a,
                          { style: G.subtextWrapper },
                          r ? this._renderHelperText() : null,
                          s && n ? this._renderErrorText() : null,
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
                      a = this._isFormInvalid() ? 'red500' : t,
                      n = this._isLabelLarge()
                    return _.a.createElement(
                      w.b,
                      {
                        color: n ? 'gray700' : a,
                        numberOfLines: 1,
                        size: n ? 'headline1' : 'subtext2',
                        style: [
                          G.textInputHeaderItem,
                          n && G.placeholderText,
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
                      a = (e.accessibilityLabel, e.calculateLength, e.editable),
                      n =
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
                    return _.a.createElement(
                      P.a,
                      { style: U.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      _.a.createElement(
                        w.b,
                        { size: 'headline1', style: U.wrapper },
                        _.a.createElement(
                          B.a,
                          r()({}, i, {
                            editable: a,
                            maxLength: this._getAdjustedMaxLength(),
                            onBlur: this._handleBlur,
                            onChange: this._handleChange,
                            onFocus: this._handleFocus,
                            onKeyDown: this._handleKeyDown,
                            onKeyPress: this._handleKeyPress,
                            onKeyUp: this._handleKeyUp,
                            ref: this._setTextInputRef,
                            style: this._getTextInputStyle(a),
                            type: this._getTextInputType(),
                          }),
                        ),
                      ),
                      n && !this._isLabelLarge() ? this._renderValidationIcon() : null,
                      this._renderPasswordVisibilityIcon(),
                    )
                  },
                },
                {
                  key: '_renderPasswordVisibilityIcon',
                  value: function () {
                    var e = this.props,
                      t = e.showPasswordVisibilityIcon,
                      a = e.type,
                      n = this.state.isPasswordRevealed
                    return 'password' === a && t
                      ? _.a.createElement(
                          P.a,
                          { style: G.passwordVisibilityIconContainer },
                          _.a.createElement(T.a, {
                            accessibilityLabel: n ? H : j,
                            focusable: !0,
                            hoverLabel: { label: n ? H : j },
                            icon: n ? _.a.createElement(L.a, null) : _.a.createElement(A.a, null),
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
                      P.a,
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
                      P.a,
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
                      a = this._exceedsValidLength(e),
                      n = t && S.a.ia24dc8c(t),
                      r = S.a.ia24dc8c(e)
                    return _.a.createElement(
                      P.a,
                      { accessibilityLiveRegion: 'polite', style: [G.textInputHeaderItem, G.displayCount] },
                      _.a.createElement(
                        w.b,
                        { color: a ? 'red500' : 'gray700', size: 'subtext2' },
                        n ? ''.concat(r, ' / ').concat(n) : '',
                      ),
                    )
                  },
                },
                {
                  key: '_renderIcon',
                  value: function () {
                    var e = this.props.Icon,
                      t = this.state.isFocused,
                      a = [G.icon, t && G.focusedIcon]
                    return e && _.a.createElement(e, { style: a })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? _.a.createElement(F.a, { style: [G.validationIcon, x.a.invalidColor] })
                      : _.a.createElement(O.a, { style: [G.validationIcon, x.a.validColor] })
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
                    var a = e.calculateLength,
                      n = e.value,
                      r = 'string' == typeof n ? z(n, a) : 0
                    return 'string' == typeof n && r !== t.displayCount
                      ? { displayCount: r, actualCount: n.length }
                      : null
                  },
                },
              ],
            ),
            a
          )
        })(_.a.Component)
      y()(W, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (W.propTypes = {})
      var U = k.a.create(function (e) {
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
    piX5: function (e, t, a) {
      'use strict'
      a('uFXj'), a('2G9S')
      var n = a('rHpw').a.create(function (e) {
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
      t.a = n
    },
    pidX: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return d
      })
      var n = a('ddV6'),
        r = a.n(n),
        i =
          (a('z84I'),
          a('TJCb'),
          a('7x/C'),
          a('DZ+c'),
          a('7xRU'),
          a('KqXw'),
          a('Ysgh'),
          a('LW0h'),
          a('2G9S'),
          a('3XMw')),
        o = a.n(i),
        s = a('3A2y'),
        l = o.a.b2e94283,
        c = ['title', 'screen_name', 'text', 'url', 'hashtags', 'via']
      t.a = function (e) {
        var t = e.state || {},
          a = e.query || {},
          n = c.map(function (e) {
            return t[e] || a[e]
          }),
          i = r()(n, 6),
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
    rziq: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return n
      }),
        a.d(t, 'a', function () {
          return r
        })
      var n = 'send-tweet',
        r = 'dismiss-composer'
    },
    sCk0: function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        s = a('1Pcy'),
        l = a.n(s),
        c = a('5Yy7'),
        d = a.n(c),
        u = a('2VqO'),
        p = a.n(u),
        m = a('KEM+'),
        h = a.n(m),
        f = (a('2G9S'), a('z84I'), a('7x/C'), a('JtPf'), a('DfhM'), a('ERkP')),
        g = a.n(f),
        v = a('zfvc'),
        y = a('RhWx'),
        b = a.n(y),
        _ = (a('yH/f'), a('M+/F'), a('zrc3')),
        C = Object.freeze({ in: 'in', out: 'out', static: 'static' }),
        w = (function (e) {
          d()(a, e)
          var t = p()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), 'state', {
                isAnimating: !1,
                renderChildren: g.a.Children.toArray(e.props.children).map(function (e) {
                  return { status: C.static, child: e }
                }),
              }),
              h()(l()(e), '_handleEachAnimateComplete', function () {
                var t = e.state.isAnimating,
                  a = e.props,
                  n = a.children,
                  r = a.onAnimateComplete
                t &&
                  (r && r(),
                  e.setState({
                    renderChildren: g.a.Children.toArray(n).map(function (e) {
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
              a,
              [
                {
                  key: 'render',
                  value: function () {
                    var e = this
                    return this.state.renderChildren.map(function (t) {
                      var a = t.child,
                        n = t.status
                      return g.a.createElement(
                        v.a,
                        {
                          animateMount: n !== C.static,
                          key: a.key,
                          onAnimateComplete: e._handleEachAnimateComplete,
                          show: n !== C.out,
                        },
                        a,
                      )
                    })
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var a = (function (e, t) {
                      for (
                        var a = 0,
                          n = 0,
                          r = [],
                          i = function () {
                            if (a >= t.length)
                              return (
                                r.push.apply(
                                  r,
                                  b()(
                                    e.slice(n).map(function (e) {
                                      return { child: e, status: C.out }
                                    }),
                                  ),
                                ),
                                'break'
                              )
                            var i = t[a],
                              o = e[n]
                            if (i.key === o.key) r.push({ child: i, status: C.static }), (a += 1)
                            else {
                              var s = Object(_.a)(t, function (e) {
                                return e.key === o.key
                              })
                              s >= 0
                                ? (r.push.apply(
                                    r,
                                    b()(
                                      t.slice(a, s).map(function (e) {
                                        return { child: e, status: C.in }
                                      }),
                                    ).concat([{ child: t[s], status: C.static }]),
                                  ),
                                  (a = s + 1))
                                : r.push({ child: o, status: C.out })
                            }
                            n += 1
                          };
                        n < e.length && 'break' !== i();

                      );
                      return (
                        a < t.length &&
                          r.push.apply(
                            r,
                            b()(
                              t.slice(a).map(function (e) {
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
                      g.a.Children.toArray(e.children),
                    )
                    return {
                      renderChildren: a,
                      isAnimating: !a.every(function (e) {
                        return e.status === C.static
                      }),
                    }
                  },
                },
              ],
            ),
            a
          )
        })(g.a.Component)
      t.a = w
    },
    x8Sc: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'InlineComposeContainer', function () {
          return d
        })
      var n = a('ERkP'),
        r = a.n(n),
        i = a('h5NW'),
        o = a('MWbm'),
        s = a('7N4s'),
        l = a('cHvH'),
        c = a('rHpw'),
        d = function (e) {
          var t = e.history,
            a = e.location,
            n = e.parentTweetId,
            c = e.replyPressToggle,
            d = e.richTextInputContext,
            p = e.typeaheadWrapper,
            m = r.a.useContext(s.b).isModal
          return r.a.createElement(l.a, null, function (e) {
            var s = e.windowWidth
            return r.a.createElement(
              o.a,
              { style: u.root },
              r.a.createElement(i.a, {
                history: t,
                isInline: !0,
                isModal: m,
                location: a,
                parentTweetId: n,
                replyPressToggle: c,
                richTextInputContext: d,
                typeaheadWrapper: p,
                windowWidth: s,
              }),
            )
          })
        },
        u = c.a.create(function (e) {
          return { root: { backgroundColor: e.colors.cellBackground, zIndex: 1 } }
        })
      t.default = d
    },
    yTN1: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n),
        i = a('WOwf'),
        o = a('3XMw'),
        s = a.n(o),
        l = a('k6Ei'),
        c = a('rHpw'),
        d = a('+/1j'),
        u = a('MWbm'),
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
          a = e.maxCount,
          n = e.formatNumber,
          o = void 0 === n ? h : n,
          s = e.warningCount,
          g = a - t,
          v = g >= 0 ? m({ count: o(g) }) : p({ count: o(t - a) }),
          y =
            t >= s
              ? r.a.createElement(
                  d.a,
                  { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite', style: c.a.visuallyHidden },
                  v,
                )
              : null,
          b = Object(i.a)(g, a),
          _ = t >= a ? 'red500' : t >= s ? 'yellow500' : 'primary',
          C = r.a.createElement(l.a, {
            color: _,
            progress: b,
            size: t >= s ? 30 : 20,
            style: [f.progressCircle, g <= -10 && f.hide],
          }),
          w = t >= s ? r.a.createElement(d.a, { style: [f.text, g > 0 ? f.gray700 : f.red500] }, o(g)) : null
        return r.a.createElement(
          u.a,
          { style: [f.root, f.center] },
          y,
          C,
          r.a.createElement(u.a, { style: [c.a.absoluteFill, f.center] }, w),
        )
      }
    },
    yZqq: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        i = a('m3Bd'),
        o = a.n(i),
        s = a('ddV6'),
        l = a.n(s),
        c = a('ERkP'),
        d = a.n(c),
        u = (a('5BYb'), a('7x/C'), a('uFXj'), a('H7Rt')),
        p = a('3XMw'),
        m = a.n(p),
        h = a('MWbm'),
        f = a('t62R'),
        g = a('CKsB'),
        v = a('/yvb'),
        y = a('rHpw'),
        b = a('Zg3A'),
        _ = a('yiKp'),
        C = a.n(_),
        w = a('Lsrn'),
        T = a('k/Ka'),
        x = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(T.a)(
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
      var E = x,
        S = a('boUI'),
        I = a('EweD'),
        R = m.a.g6185a9e,
        M = m.a.g2d04222,
        k = m.a.baffe39a,
        D = m.a.af293dc2,
        P = m.a.h1053f7e,
        L = m.a.bf994ab2,
        A = m.a.cf7f7e39,
        F = m.a.cfd2f35d,
        O = y.a.create(function (e) {
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
            a,
            n = e.dismiss,
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
                null !== (a = t.user_mentions) &&
                void 0 !== a &&
                a.some(function (e) {
                  return e.id_str !== i.user.id_str
                })
              ),
            p = P
          return (
            c ? (p = L) : l && (p = A),
            d.a.createElement(
              h.a,
              {
                accessibilityDescribedBy: 'conversation-controls-details',
                accessibilityLabelledBy: 'conversation-controls-title',
                accessibilityRole: 'dialog',
                style: [O.root, r ? O.modal : O.popover],
              },
              d.a.createElement(
                h.a,
                { style: O.title },
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
                d.a.createElement(g.a, {
                  Icon: b.a,
                  actionText: k,
                  isSelected: u.a.all === o,
                  onClick: s(u.a.all),
                  selectable: !0,
                  style: O.menuRow,
                  withIconAsThumbnail: !0,
                }),
                d.a.createElement(g.a, {
                  Icon: E,
                  actionText: D,
                  isSelected: u.a.community === o,
                  onClick: s(u.a.community),
                  selectable: !0,
                  style: O.menuRow,
                  withIconAsThumbnail: !0,
                }),
                d.a.createElement(g.a, {
                  Icon: c ? S.a : I.a,
                  actionText: p,
                  isSelected: u.a.by_invitation === o,
                  onClick: s(u.a.by_invitation),
                  selectable: !0,
                  style: O.menuRow,
                  withIconAsThumbnail: !0,
                }),
                e.isModal
                  ? d.a.createElement(
                      v.a,
                      {
                        key: 'button_cancel',
                        onPress: n,
                        size: 'large',
                        style: O.cancelButton,
                        type: 'primaryOutlined',
                      },
                      F,
                    )
                  : null,
              ),
            )
          )
        },
        N = a('OiMc'),
        V = a('efqG'),
        z = ['children', 'controlled']
      t.a = function (e) {
        var t = e.children,
          a = e.controlled,
          n = void 0 !== a && a,
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
          f = n ? (u ? N.a.VISIBILITY_BEHAVIOR.forceVisible : N.a.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
          g = 'function' == typeof t ? t({ openPopover: m, closePopover: h }) : t
        return d.a.createElement(
          V.a,
          {
            disabled: i,
            onDismiss: h,
            renderContent: function (t, a) {
              e.children, e.controlled
              var n = o()(e, z)
              return d.a.createElement(B, r()({}, n, { dismiss: t, isModal: 'sheet' === a }))
            },
            visibilityBehavior: f,
          },
          g,
        )
      }
    },
    zmS9: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n),
        i = a('3XMw'),
        o = a.n(i),
        s = a('J0mu'),
        l = a('t62R'),
        c = a('rHpw'),
        d = a('QbaN'),
        u = o.a.bfb895b1,
        p = c.a.create(function (e) {
          return { icon: { fontSize: e.fontSizes.body, paddingRight: e.spaces.space12, textAlignVertical: 'middle' } }
        })
      t.a = function (e) {
        var t = e.onPress,
          a = e.scheduledFor,
          n = e.testID,
          i = Object(d.c)(a),
          o = !!i && Object(d.h)(a) && !Object(d.g)(i) && !Object(d.f)(i),
          c = Boolean(t)
        return i && o
          ? r.a.createElement(
              l.b,
              { color: 'gray700', onPress: t, size: 'subtext2', testID: n, withInteractiveStyling: c },
              r.a.createElement(s.a, { style: p.icon }),
              u({ date: Object(d.b)(i), time: Object(d.i)(i) }),
            )
          : null
      }
    },
  },
])
//# sourceMappingURL=WIPED
