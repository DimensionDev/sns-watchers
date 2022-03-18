;(window.webpackJsonp = window.webpackJsonp || []).push([
  [47],
  {
    '07FG': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      })
      var n = a('cnVF'),
        r = function (e) {
          return e === n.B
        }
    },
    '0uGn': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return Me
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
        h = a('5Yy7'),
        m = a.n(h),
        v = a('2VqO'),
        f = a.n(v),
        g = a('KEM+'),
        b = a.n(g),
        y =
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
        _ = a.n(y),
        C = (a('TJCb'), a('DZ+c'), a('xZGM')),
        M = a('GTeL'),
        E = a('3XMw'),
        S = a.n(E),
        w = a('rHpw'),
        T = w.a.create(function (e) {
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
        x = 'altTextInput',
        I = 'endEditingButton',
        k = 'altTextEducationSheetPrimaryAction',
        P = a('MWbm'),
        L = a('t62R'),
        R = a('p+r5'),
        D = S.a.feabf2a0,
        A = S.a.e36287c6,
        O = S.a.cf565d08,
        V = (function (e) {
          m()(a, e)
          var t = f()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_renderInputHelperText', function () {
                var t = e.props.onShowEducation
                return t ? _.a.createElement(L.b, { color: 'link', onPress: t, withInteractiveStyling: !0 }, O) : null
              }),
              b()(p()(e), '_handleChange', function (t) {
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
                    P.a,
                    { style: T.root },
                    _.a.createElement(
                      P.a,
                      { style: T.attachmentContainer },
                      _.a.createElement(M.a, { mediaItem: n, orientedImage: r }),
                      _.a.createElement(R.a, {
                        accessibilityLabel: D,
                        autoFocus: t,
                        helperText: this._renderInputHelperText(),
                        label: A,
                        maxLength: a,
                        maxNumberOfLines: 6,
                        multiline: !0,
                        name: 'altTextInput',
                        numberOfLines: 2,
                        onChange: this._handleChange,
                        style: T.formTextInput,
                        testID: x,
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
        F = a('rxPX'),
        W = function (e, t) {
          return Object(C.C)(e, C.a)
        },
        j = Object(F.a)()
          .propsFromState(function () {
            return { showEducationOnMount: W }
          })
          .propsFromActions(function () {
            return { addFlag: C.y }
          })
          .withAnalytics(),
        B = a('feu+'),
        z = S.a.ffe9ec3a,
        U = S.a.j063b261,
        H = S.a.e57144f0,
        K = S.a.f9f9210c,
        G = (function (e) {
          m()(a, e)
          var t = f()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), 'state', { showAltTextEducationSheet: !1 }),
              b()(p()(e), '_handleOpenEducationPrompt', function () {
                var t = e.props.analytics
                e.setState({ showAltTextEducationSheet: !0 }), t.scribe({ component: 'education', action: 'click' })
              }),
              b()(p()(e), '_handleCloseEducationPrompt', function () {
                e.setState({ showAltTextEducationSheet: !1 })
              }),
              b()(p()(e), '_handleEducationPromptPrimaryAction', function () {
                var t = e.props.analytics
                e._handleCloseEducationPrompt(),
                  t.scribe({ component: 'education', element: 'alt_text_button', action: 'click' })
              }),
              b()(p()(e), '_handleEducationPromptSecondaryAction', function () {
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
                    P.a,
                    { style: N.root },
                    i
                      ? _.a.createElement(B.a, {
                          actionLabel: H,
                          headline: z,
                          onAction: this._handleEducationPromptPrimaryAction,
                          onClose: this._handleCloseEducationPrompt,
                          onSecondaryAction: this._handleEducationPromptSecondaryAction,
                          primaryButtonTestID: k,
                          secondaryActionLabel: K,
                          subtext: U,
                        })
                      : null,
                    _.a.createElement(V, {
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
        N = w.a.create(function (e) {
          return { root: { flexGrow: 1 } }
        }),
        X = j(G),
        Y = a('jHSc'),
        q = a('EeFI'),
        Q = a('7JQg'),
        Z = a('9Q4p'),
        J = a('PrL8'),
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
        he = { section: 'crop' },
        me = { section: 'sensitive_media' },
        ve = S.a.e070024a,
        fe = S.a.i2209530,
        ge = S.a.i7d24b36,
        be = S.a.f96a38a2,
        ye = S.a.hac7c548,
        _e = S.a.e3dbfba3,
        Ce = S.a.dd4a83a5,
        Me = { crop: 'crop', altText: 'alt_text', sensitiveMedia: 'sensitive_media' },
        Ee = (function (e) {
          m()(a, e)
          var t = f()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              b()(p()(n), '_cropper', _.a.createRef()),
              b()(
                p()(n),
                '_getMemoizedTabMetadata',
                Object(te.a)(function (e, t) {
                  return t && e === Me.sensitiveMedia
                    ? { namespace: me, title: Ce, renderer: n._renderSensitiveMediaTab }
                    : e === Me.altText
                    ? { namespace: pe, title: _e, renderer: n._renderAltTextTab }
                    : { namespace: he, title: ye, renderer: n._renderCropTab }
                }),
              ),
              b()(p()(n), '_renderTabContent', function (e) {
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
                      _.a.createElement($.a, { accessibilityLabel: ve, links: l }),
                      _.a.createElement(P.a, { style: J.a.segmentedControlChildren }, c),
                    )
                  : c
              }),
              b()(p()(n), '_renderAltTextTab', function () {
                var e = n.props.history,
                  t = n.state,
                  a = t.currentMediaId,
                  r = t.mediaMetadata,
                  i = t.orientedImage,
                  o = n._getCurrentMediaItem(),
                  s = r[a] && r[a].altText
                return _.a.createElement(X, {
                  history: e,
                  key: a,
                  mediaItem: o,
                  onAltTextChange: n._handleAltTextChange,
                  orientedImage: i.get(a),
                  value: s,
                })
              }),
              b()(p()(n), '_renderCropTab', function () {
                var e = n.state,
                  t = e.cropData,
                  a = e.currentMediaId,
                  r = n._getCurrentMediaItem()
                return _.a.createElement(q.a, {
                  defaultCropData: t.get(a),
                  key: a,
                  media: r,
                  ref: n._cropper,
                  withAspectRatioOptions: !0,
                })
              }),
              b()(p()(n), '_renderSensitiveMediaTab', function () {
                var e = n.state,
                  t = e.currentMediaId,
                  a = e.mediaMetadata,
                  r = e.orientedImage,
                  i = n._getCurrentMediaItem(),
                  o = a[t] && a[t].sensitiveMediaWarning
                return _.a.createElement(Z.a, {
                  currentWarnings: o,
                  key: t,
                  mediaItem: i,
                  onWarningChange: n._handleSensitiveWarningChange,
                  orientedImage: r.get(t),
                })
              }),
              b()(p()(n), '_renderAppBarRightControl', function () {
                var e = n.state.isProcessing,
                  t = n._getNextMediaIndex(1),
                  a = n._getNextMediaIndex(-1)
                return _.a.createElement(
                  P.a,
                  { style: J.a.rightControl },
                  n._hasMediaAtIndex(a) || n._hasMediaAtIndex(t)
                    ? _.a.createElement(
                        P.a,
                        { style: [J.a.rightControl, J.a.leftRightButtons] },
                        _.a.createElement(ee.a, {
                          accessibilityLabel: be,
                          disabled: !n._hasMediaAtIndex(a),
                          icon: _.a.createElement(oe.a, null),
                          onPress: n._handleClickToMediaAtIndex(a),
                          size: 'small',
                          style: J.a.prevButton,
                          type: 'primaryOutlined',
                        }),
                        _.a.createElement(ee.a, {
                          accessibilityLabel: ge,
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
                      style: J.a.saveButton,
                      testID: I,
                      type: 'primaryFilled',
                    },
                    fe,
                  ),
                )
              }),
              b()(p()(n), '_handleCancelEditingClick', function (e) {
                n._scribeWithNamespace({ action: 'cancel' }), e()
              }),
              b()(p()(n), '_handleClickTab', function (e) {
                var t = n.props.analytics
                n._handleSaveCropData(),
                  n._scribeWithNamespace({ element: e, action: 'click' }),
                  t.scribePageImpression()
              }),
              b()(p()(n), '_getCurrentMediaItem', function () {
                var e = n.props.media,
                  t = n.state.currentMediaId
                return e.find(function (e) {
                  return e.id === t
                })
              }),
              b()(p()(n), '_getNextMediaIndex', function (e) {
                var t = n.props.media,
                  a = n._getCurrentMediaItem()
                return t.indexOf(a) + e
              }),
              b()(p()(n), '_hasMediaAtIndex', function (e) {
                var t = n.props.media
                return e >= 0 && e < t.length
              }),
              b()(p()(n), '_handleClickToMediaAtIndex', function (e) {
                return function () {
                  var t = n.props.media
                  if (n._hasMediaAtIndex(e)) {
                    n._handleSaveCropData()
                    var a = t[e].id
                    n.setState({ currentMediaId: a })
                  }
                }
              }),
              b()(p()(n), '_saveMediaMetadata', function () {
                var e = n.props,
                  t = e.media,
                  a = e.setMediaMetadata,
                  r = n.state.mediaMetadata
                t.forEach(function (e) {
                  a(e.id, r[e.id])
                })
              }),
              b()(p()(n), '_handleEndEditingClick', function () {
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
              b()(p()(n), '_handleAltTextChange', function (e) {
                n.setState(function (t) {
                  return {
                    mediaMetadata: r()(
                      r()({}, t.mediaMetadata),
                      {},
                      b()({}, t.currentMediaId, r()(r()({}, t.mediaMetadata[t.currentMediaId]), {}, { altText: e })),
                    ),
                  }
                })
              }),
              b()(p()(n), '_handleSensitiveWarningChange', function (e, t) {
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
                        b()(
                          {},
                          a.currentMediaId,
                          r()(r()({}, a.mediaMetadata[a.currentMediaId]), {}, { sensitiveMediaWarning: n }),
                        ),
                      ),
                    }
                  )
                })
              }),
              b()(p()(n), '_handleSaveCropData', function () {
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
              b()(p()(n), '_scribeWithNamespace', function (e) {
                var t = n.props,
                  a = t.analytics,
                  i = t.sensitiveMediaTabEnabled,
                  o = n._getCurrentTab(),
                  s = n._getMemoizedTabMetadata(o, i)
                a.scribe(r()(r()({}, s.namespace), e))
              }),
              b()(p()(n), '_getMediaMetadata', function (e) {
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
                      Y.b,
                      {
                        backButtonType: 'back',
                        containerStyle: J.a.root,
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
                  return n && r === Me.sensitiveMedia ? Me.sensitiveMedia : r === Me.altText ? Me.altText : Me.crop
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
                        to: r()(r()({}, o), {}, { state: r()(r()({}, o.state), {}, { tab: Me.crop }) }),
                        label: _.a.createElement(le.a, null),
                        key: Me.crop,
                        accessibilityLabel: ye,
                        isActive: function () {
                          return e === Me.crop
                        },
                        onClick: function () {
                          return i.scribePageImpression()
                        },
                      }),
                    c.push({
                      to: r()(r()({}, o), {}, { state: r()(r()({}, o.state), {}, { tab: Me.altText }) }),
                      label: _.a.createElement(L.b, { weight: 'bold' }, 'ALT'),
                      key: Me.altText,
                      accessibilityLabel: _e,
                      isActive: function () {
                        return e === Me.altText
                      },
                      onClick: function () {
                        return a._handleClickTab('alt_text_button')
                      },
                    }),
                    s &&
                      c.push({
                        to: r()(r()({}, o), {}, { state: r()(r()({}, o.state), {}, { tab: Me.sensitiveMedia }) }),
                        label: _.a.createElement(ce.a, null),
                        key: Me.sensitiveMedia,
                        accessibilityLabel: Ce,
                        isActive: function () {
                          return e === Me.sensitiveMedia
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
      t.b = Ee
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
        h = a('KEM+'),
        m = a.n(h),
        v = (a('Rqga'), a('2G9S'), a('ERkP')),
        f = a.n(v),
        g = a('/yvb'),
        b = a('3XMw'),
        y = a.n(b),
        _ = a('3rX5'),
        C = a('rHpw'),
        M = a('MWbm'),
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
        S = function (e) {
          var t = e.circle,
            a = e.height,
            n = e.width
          return f.a.createElement(M.a, {
            pointerEvents: 'none',
            style: [E.mask, { width: n, height: a }, t && E.circle],
          })
        },
        w = a('ZvMt'),
        T = a('97Jx'),
        x = a.n(T),
        I = a('m3Bd'),
        k = a.n(I),
        P = a('CHgo'),
        L = a('7ep7'),
        R = ['children', 'onPanEnd', 'onPanMove', 'onPinchMove', 'onWheel'],
        D = (function (e) {
          d()(a, e)
          var t = p()(a)
          function a(e) {
            var n
            return (
              r()(this, a),
              (n = t.call(this, e)),
              m()(l()(n), '_previousTouchDistance', 0),
              m()(l()(n), '_previousPositionX', 0),
              m()(l()(n), '_previousPositionY', 0),
              m()(l()(n), '_centerPosition', { x: 0, y: 0 }),
              m()(l()(n), '_panResponder', {}),
              m()(l()(n), '_setRef', function (e) {
                var t = n.props,
                  a = t.onPanEnd,
                  r = t.onPanMove,
                  i = t.onPinchMove,
                  o = t.onWheel
                if (e) {
                  ;(r || a || i) && (n._removeTouchMoveToScrollListener = Object(P.a)(e, n._preventDefaultEvent, !1)),
                    o && (n._removeScrollToScaleListener = Object(P.b)(e, n._preventDefaultEvent, !1))
                  var s = e.getBoundingClientRect()
                  n._centerPosition = { x: s.width / 2 + s.left, y: s.height / 2 + s.top }
                }
              }),
              m()(l()(n), '_preventDefaultEvent', function (e) {
                e.preventDefault()
              }),
              m()(l()(n), '_handlePanResponderMove', function (e, t) {
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
                      h = n._previousPositionX ? u - n._previousPositionX : 0,
                      m = n._previousPositionY ? p - n._previousPositionY : 0,
                      v = n._previousTouchDistance ? c - n._previousTouchDistance : 0
                    ;(n._previousPositionX = u), (n._previousPositionY = p), (n._previousTouchDistance = c)
                    var f = n._centerPosition
                    s(v, f.x - u, f.y - p, h, m)
                  }
                } else o && o(t.dx, t.dy)
                document.addEventListener('selectstart', n._preventDefaultEvent, !1)
              }),
              m()(l()(n), '_handlePanResponderEnd', function (e, t) {
                n.props.onPanEnd && n.props.onPanEnd(t.dx, t.dy),
                  n.props.onPinchMove && (n._previousTouchDistance = 0),
                  (n._previousPositionX = 0),
                  (n._previousPositionY = 0),
                  n._removeSelectStartListener()
              }),
              m()(l()(n), '_handleWheel', function (e) {
                var t = e.clientX,
                  a = e.clientY,
                  r = e.deltaX,
                  i = e.deltaY,
                  o = n._centerPosition,
                  s = o.x - t,
                  l = o.y - a
                n.props.onWheel && n.props.onWheel(r, i, s, l)
              }),
              (n._panResponder = L.a.create({
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
                    t = (e.children, e.onPanEnd, e.onPanMove, e.onPinchMove, e.onWheel, k()(e, R))
                  return f.a.createElement(
                    M.a,
                    x()({}, t, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers),
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
        })(f.a.Component),
        A = a('9RkS'),
        O = a('rOXj'),
        V = a('aITJ'),
        F = a('yiKp'),
        W = a.n(F),
        j = a('Lsrn'),
        B = a('k/Ka'),
        z = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(B.a)(
            'svg',
            W()(
              W()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [j.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            f.a.createElement(
              'g',
              null,
              f.a.createElement('path', {
                d: 'M19.75 19.944H4.25c-1.24 0-2.25-1.01-2.25-2.25V6.306c0-1.24 1.01-2.25 2.25-2.25h15.5c1.24 0 2.25 1.01 2.25 2.25v11.39c0 1.24-1.01 2.248-2.25 2.248zM4.25 5.556c-.413 0-.75.337-.75.75v11.39c0 .412.337.75.75.75h15.5c.413 0 .75-.338.75-.75V6.305c0-.413-.337-.75-.75-.75H4.25z',
              }),
            ),
          )
        }
      z.metadata = { width: 24, height: 24 }
      var U = z,
        H = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(B.a)(
            'svg',
            W()(
              W()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [j.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            f.a.createElement(
              'g',
              null,
              f.a.createElement('path', {
                d: 'M19.75 19.89H4.25C3.01 19.89 2 18.88 2 17.64v-7.28c0-1.24 1.01-2.25 2.25-2.25h15.5c1.24 0 2.25 1.01 2.25 2.25v7.277c0 1.24-1.01 2.25-2.25 2.25zM4.25 9.61c-.413 0-.75.338-.75.75v7.278c0 .413.337.75.75.75h15.5c.413 0 .75-.337.75-.75V10.36c0-.412-.337-.75-.75-.75H4.25z',
              }),
            ),
          )
        }
      H.metadata = { width: 24, height: 24 }
      var K = H,
        G = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(B.a)(
            'svg',
            W()(
              W()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [j.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            f.a.createElement(
              'g',
              null,
              f.a.createElement('path', {
                d: 'M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.413 0-.75.337-.75.75v15.5c0 .413.337.75.75.75h15.5c.413 0 .75-.337.75-.75V4.25c0-.413-.337-.75-.75-.75H4.25z',
              }),
            ),
          )
        }
      G.metadata = { width: 24, height: 24 }
      var N = G,
        X = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(B.a)(
            'svg',
            W()(
              W()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [j.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            f.a.createElement(
              'g',
              null,
              f.a.createElement('path', {
                d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
              }),
              f.a.createElement('path', {
                d: 'M15.21 11c0 .41-.34.75-.75.75h-2.71v2.71c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.71H7.54c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.71V7.54c0-.41.34-.75.75-.75s.75.34.75.75v2.71h2.71c.41 0 .75.34.75.75z',
              }),
            ),
          )
        }
      X.metadata = { width: 24, height: 24 }
      var Y = X,
        q = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(B.a)(
            'svg',
            W()(
              W()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [j.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            f.a.createElement(
              'g',
              null,
              f.a.createElement('path', {
                d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
              }),
              f.a.createElement('path', {
                d: 'M14.46 11.75H7.54c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.92c.415 0 .75.336.75.75s-.335.75-.75.75z',
              }),
            ),
          )
        }
      q.metadata = { width: 24, height: 24 }
      var Q = q,
        Z = y.a.d85bc1b8,
        J = y.a.f596ace8,
        $ = y.a.df031fca,
        ee = y.a.b40332c5,
        te = y.a.e547b368,
        ae = y.a.f7571204,
        ne = y.a.e6e16811,
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
              m()(l()(n), '_previousLeft', 0),
              m()(l()(n), '_previousTop', 0),
              m()(l()(n), '_panStyles', { top: 0, left: 0 }),
              m()(l()(n), '_shouldShowZoomControl', function () {
                return (!V.b.isMobileOS() || !O.a.isTouchSupported()) && n.props.withZoomControl
              }),
              m()(l()(n), '_renderControls', function () {
                var e = n.props,
                  t = e.image,
                  a = e.withAspectRatioOptions,
                  r = n.state.aspectRatio,
                  i = t.width / t.height,
                  o = n._shouldShowZoomControl()
                return a || o
                  ? f.a.createElement(
                      M.a,
                      { style: oe.controlsContainer },
                      a
                        ? f.a.createElement(
                            M.a,
                            { style: oe.ratioContainer },
                            f.a.createElement(g.a, {
                              accessibilityLabel: J,
                              borderColor: 'transparent',
                              color: r === i ? 'primary' : 'gray700',
                              hoverLabel: { label: te },
                              icon: f.a.createElement(U, null),
                              onPress: n._setAspectRatio(i),
                              size: 'medium',
                            }),
                            f.a.createElement(g.a, {
                              accessibilityLabel: $,
                              borderColor: 'transparent',
                              color: r === 16 / 9 ? 'primary' : 'gray700',
                              hoverLabel: { label: ae },
                              icon: f.a.createElement(K, null),
                              onPress: n._setAspectRatio(16 / 9),
                              size: 'medium',
                            }),
                            f.a.createElement(g.a, {
                              accessibilityLabel: ee,
                              borderColor: 'transparent',
                              color: 1 === r ? 'primary' : 'gray700',
                              hoverLabel: { label: ne },
                              icon: f.a.createElement(N, null),
                              onPress: n._setAspectRatio(1),
                              size: 'medium',
                            }),
                          )
                        : null,
                      o
                        ? f.a.createElement(
                            M.a,
                            { style: oe.zoomContainer },
                            f.a.createElement(A.a, {
                              accessibilityLabel: Z,
                              max: n._maxScale,
                              maxIcon: f.a.createElement(Y, { style: oe.icon }),
                              min: 0,
                              minIcon: f.a.createElement(Q, { style: oe.icon }),
                              onChange: n._handleScaleChange,
                              step: 'any',
                              value: n.state.imageScale,
                            }),
                          )
                        : null,
                    )
                  : null
              }),
              m()(l()(n), '_setImageRef', function (e) {
                n._imageRef = e
              }),
              m()(l()(n), '_handleScaleChange', function (e) {
                n.setState({ imageScale: e })
              }),
              m()(l()(n), '_getImageDimensions', function () {
                var e = n.state.imageScale,
                  t = n.props.image.width / n.props.image.height,
                  a = n._getMaskDimensions(),
                  r = a.height,
                  i = a.width,
                  o = w.a.getCoverDimensions({ width: i, height: r }, t),
                  s = o.height
                return { width: o.width * Math.pow(2, e), height: s * Math.pow(2, e) }
              }),
              m()(l()(n), '_getMaskDimensions', function () {
                var e = n.state,
                  t = e.aspectRatio,
                  a = e.containerHeight,
                  r = e.containerWidth,
                  i = w.a.getContainDimensions({ width: r - 50, height: a - 50 }, t),
                  o = i.height
                return { width: i.width, height: o }
              }),
              m()(l()(n), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout,
                  a = t.height,
                  r = t.width
                n.state.containerHeight || n.state.containerWidth
                  ? n.setState({ containerHeight: a, containerWidth: r })
                  : (n.setState({ containerHeight: a, containerWidth: r }), n._setDefaultCropData())
              }),
              m()(l()(n), '_setDefaultCropData', function () {
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
              m()(l()(n), '_handleWheel', function (e, t, a, r) {
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
              m()(l()(n), '_handlePanMove', function (e, t) {
                ;(n._panStyles.left = n._previousLeft + e),
                  (n._panStyles.top = n._previousTop + t),
                  n._updateNativeStyles(),
                  n._adjustToInBounds()
              }),
              m()(l()(n), '_handlePanEnd', function (e, t) {
                ;(n._previousLeft = n._panStyles.left), (n._previousTop = n._panStyles.top)
              }),
              m()(l()(n), '_handlePinchMove', function (e, t, a, r, i) {
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
              m()(l()(n), '_adjustToInBounds', function () {
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
              m()(l()(n), '_updateNativeStyles', function () {
                var e = n._panStyles,
                  t = e.left,
                  a = e.top
                n._imageRef &&
                  n._imageRef.setNativeProps({
                    style: { transform: [{ translate3d: ''.concat(t, 'px, ').concat(a, 'px, 0') }] },
                  })
              }),
              m()(l()(n), '_getUnscaledCropData', function () {
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
              m()(l()(n), '_setAspectRatio', function (e) {
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
                  return f.a.createElement(
                    M.a,
                    { style: oe.container },
                    f.a.createElement(
                      D,
                      {
                        onLayout: this._handleLayout,
                        onPanEnd: this._handlePanEnd,
                        onPanMove: this._handlePanMove,
                        onPinchMove: n ? this._handlePinchMove : void 0,
                        onWheel: n ? this._handleWheel : void 0,
                        style: oe.root,
                      },
                      d
                        ? f.a.createElement(
                            f.a.Fragment,
                            null,
                            f.a.createElement(_.a, {
                              ref: this._setImageRef,
                              source: { uri: a.src, width: o, height: i },
                              style: oe.image,
                            }),
                            f.a.createElement(S, { circle: t, height: l, width: c }),
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
        })(f.a.Component)
      m()(ie, 'defaultProps', { circle: !1, withZoomControl: !0 })
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
    '2prg': function (e, t, a) {
      var n = a('ZORK')
      e.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)
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
    '9Q4p': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return y
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
        h = a('ZkMC'),
        m = s.a.j9cf595f,
        v = s.a.d69a782e,
        f = s.a.faf745f9,
        g = s.a.b96e6682,
        b = s.a.h2437f25
      function y(e) {
        var t = e.currentWarnings,
          a = e.mediaItem,
          n = e.onWarningChange,
          o = e.orientedImage,
          s = [
            { label: f, value: 'adult_content' },
            { label: g, value: 'graphic_violence' },
            { label: b, value: 'other' },
          ],
          p = c.b.useOpaqueIdentifier(),
          y = r.a.createElement(i.a, { mediaItem: a, orientedImage: o })
        return r.a.createElement(
          l.a,
          { style: _.root },
          r.a.createElement(
            l.a,
            { style: _.modalContainer },
            null != t && t.size
              ? r.a.createElement(
                  h.a,
                  { revealableTombstoneConfig: h.c, sensitiveMediaWarnings: t, withRoundedCorners: !1 },
                  y,
                )
              : y,
            r.a.createElement(d.b, { nativeID: p, subtext: v, text: m }),
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
    CDB5: function (e, t, a) {
      'use strict'
      a.d(t, 'm', function () {
        return k
      }),
        a.d(t, 'l', function () {
          return L
        }),
        a.d(t, 'f', function () {
          return D
        }),
        a.d(t, 'd', function () {
          return O
        }),
        a.d(t, 'g', function () {
          return V
        }),
        a.d(t, 'e', function () {
          return W
        }),
        a.d(t, 'i', function () {
          return B
        }),
        a.d(t, 'j', function () {
          return z
        }),
        a.d(t, 'k', function () {
          return U
        }),
        a.d(t, 'h', function () {
          return H
        }),
        a.d(t, 'a', function () {
          return G
        }),
        a.d(t, 'b', function () {
          return X
        }),
        a.d(t, 'c', function () {
          return Q
        })
      var n = a('RhWx'),
        r = a.n(n),
        i = a('ddV6'),
        o = a.n(i),
        s = a('m3Bd'),
        l = a.n(s),
        c = a('KEM+'),
        d = a.n(c),
        u = a('yiKp'),
        p = a.n(u),
        h =
          (a('TJCb'),
          a('7x/C'),
          a('DZ+c'),
          a('7xRU'),
          a('lTEL'),
          a('JtPf'),
          a('87if'),
          a('kYxP'),
          a('2G9S'),
          a('1IsZ'),
          a('AspN')),
        m = a('xPna'),
        v = a('oEOe'),
        f = a('xCUF'),
        g = a('ude7'),
        b = a('07FG'),
        y = a('Ssj5'),
        _ = a('fEA7'),
        C = a.n(_),
        M = a('uKEd'),
        E = a('lnti'),
        S = a('/NU0'),
        w = [
          'senderId',
          'cardUrl',
          'conversationId',
          'localMediaId',
          'recipients',
          'requestId',
          'tweetAttachment',
          'quickReply',
        ],
        T = 'dmComposer',
        x = {}
      var I = function (e) {
          var t = e.conversation_id,
            a = e.id,
            n = e.localMediaId,
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
            id: a,
            is_draft: !0,
            message_data: { attachment: l, localMediaId: n, sender_id: i, text: o, time: d },
            type: 'message',
            time: d,
          }
        },
        k = function (e) {
          return function (t, a, n) {
            var i = n.api,
              s = e || {},
              c = s.senderId,
              d = s.cardUrl,
              u = s.conversationId,
              y = s.localMediaId,
              _ = s.recipients,
              T = void 0 === _ ? [] : _,
              x = s.requestId,
              k = void 0 === x ? C.a.v1() : x,
              P = s.tweetAttachment,
              L = s.quickReply,
              R = l()(s, w)
            t(J(u))
            var D = a(),
              A = y || j(a(), u),
              V = h.k(D, A),
              F = o()(V, 1)[0] || {},
              W = F.mediaFile,
              B = F.mediaMetadata,
              z = T.length > 0 && T.join(','),
              U = {}
            W && W.isGif
              ? (U.extraInitParams = '&media_category=dm_gif')
              : W && W.isVideo && (U.extraInitParams = '&media_category=dm_video')
            var K = h.p(A, U),
              G = [t(K)],
              N = (H(D, u) || {}).found_media_origin
            return (
              W && W.isGif && G.push(Object(g.a)(W)),
              Promise.all(G).then(
                function (a) {
                  var n = o()(a, 2),
                    s = o()(n[0], 1)[0],
                    l = n[1],
                    g = (null == B ? void 0 : B.altText) || (null == B ? void 0 : B.defaultAltText),
                    y = !!g
                  return (
                    s && (N || y)
                      ? t(h.m(p()({ media_id: s.uploadId, found_media_origin: N }, !!y && { alt_text: { text: g } })))
                      : Promise.resolve()
                  ).then(
                    function () {
                      var a = (P || {}).id_str,
                        n = {}
                      if (s) {
                        var o = s.mediaFile,
                          h = void 0 === o ? {} : o,
                          g = {
                            original_info: { width: h.width, height: h.height },
                            sizes: [{ h: h.height, w: h.width, resize: 'fit' }],
                          }
                        h.isImage
                          ? (n.photo = p()(p()({}, g), {}, { media_url_https: h.url }))
                          : h.isGif
                          ? (n.animated_gif = p()(p()({}, g), {}, { media_url_https: l, type: 'animated_gif' }))
                          : h.isVideo && (n.video = p()(p()({}, g), {}, { media_url_https: h.url, type: 'video' }))
                      } else P && (n.tweet = { status: a })
                      var y = (s || {}).uploadId,
                        _ = I({
                          attachment: n,
                          conversation_id: u,
                          id: k,
                          recipient_ids: z,
                          sender_id: c,
                          text: e.text,
                        }),
                        C = p()(
                          p()(
                            p()(p()({}, R), Object(b.a)(d) && { card_uri: d }),
                            {},
                            { conversation_id: u },
                            !a && { media_id: y },
                          ),
                          {},
                          { recipient_ids: z, request_id: k, tweet_id: a },
                        )
                      L &&
                        ((C['quick_reply_response[options][id]'] = L.id),
                        (C['quick_reply_response[options][selected_id]'] = L.selected_id))
                      var w = Object(E.a)([
                        ee(u),
                        { type: f.c.REQUEST },
                        { type: 'rweb/dmComposer/SEND_MESSAGE_REQUEST' },
                        u && Object(M.b)(u, k, _),
                      ])
                      return (
                        t(w),
                        i.DirectMessages.sendMessage(C).then(
                          function (a) {
                            var n = a.entities,
                              i = n.cards,
                              o = n.entries,
                              s = n.tweets,
                              l = n.users,
                              c = a.result.conversations
                            Object(S.a)(A) && t(Q(u, A))
                            var d = Object(E.a)(
                              [{ type: f.c.SUCCESS }].concat(
                                r()(Object(m.a)({ conversations: c, entries: o, users: l, tweets: s, cards: i })),
                                [{ type: 'rweb/dmComposer/SEND_MESSAGE_SUCCESS' }, u && Object(M.j)(u, k, e), O(u)],
                              ),
                            )
                            return t(d), Promise.resolve(Object.values(a.entities.entries)[0].conversation_id)
                          },
                          function (a) {
                            var r = I({
                                attachment: n,
                                conversation_id: u,
                                error: !0,
                                id: k,
                                localMediaId: A,
                                recipient_ids: z,
                                sender_id: c,
                                text: e.text,
                              }),
                              i = Object(E.a)([
                                { type: f.c.SUCCESS },
                                { type: 'rweb/dmComposer/SEND_MESSAGE_FAILURE' },
                                u && Object(M.b)(u, k, r),
                              ])
                            return t(i), Object(v.e)(t, a, 'ACTION_SEND_DM')
                          },
                        )
                      )
                    },
                    function (e) {
                      return t(ae(u)), (e.type = 'metadata'), Promise.reject(e)
                    },
                  )
                },
                function (e) {
                  return t(Object(E.a)([Object(S.a)(A) && Q(u, A), ae(u)])), Promise.reject(e)
                },
              )
            )
          }
        },
        P = function (e, t) {
          return e.dmComposer[t]
        },
        L = function (e, t) {
          var a = P(e, t)
          return a ? a.text : null
        },
        R = 'rweb/dmComposer/SAVE_TEXT',
        D = function (e, t) {
          return { type: R, conversationId: e, text: t }
        },
        A = 'rweb/dmComposer/REMOVE_TEXT',
        O = function (e) {
          return { type: A, conversationId: e }
        },
        V = function (e, t) {
          var a = P(e, t)
          return a ? a.cardUrl : null
        },
        F = 'rweb/dmComposer/SAVE_CARD_URL',
        W = function (e, t) {
          return { type: F, conversationId: e, cardUrl: t }
        },
        j = function (e, t) {
          var a = P(e, t)
          return a ? a.mediaId : null
        },
        B = function (e, t) {
          var a = h.k(e, j(e, t))
          return a.length > 0 ? a[0] : null
        },
        z = function (e, t) {
          var a = P(e, t)
          return !!a && a.isUploading
        },
        U = function (e, t) {
          return h.l(e, j(e, t))
        },
        H = function (e, t) {
          var a = P(e, t)
          return a ? a.gifMetadata : null
        },
        K = 'rweb/dmComposer/ADD_MEDIA',
        G = function (e, t, a) {
          return { payload: { isUploading: !1, mediaId: o()(t, 1)[0], gifMetadata: a }, type: K, conversationId: e }
        },
        N = 'rweb/dmComposer/CANCEL_UPLOAD',
        X = function (e) {
          return { type: N, conversationId: e }
        },
        Y = 'rweb/dmComposer/REMOVE_MEDIA',
        q = function (e) {
          return { type: Y, conversationId: e }
        },
        Q = function (e, t) {
          return function (a) {
            a(h.i(t)), a([X(e), q(e)])
          }
        },
        Z = 'rweb/dmComposer/UPLOAD_REQUEST',
        J = function (e) {
          return { type: Z, conversationId: e }
        },
        $ = 'rweb/dmComposer/UPLOAD_SUCCESS',
        ee = function (e) {
          return { type: $, conversationId: e }
        },
        te = 'rweb/dmComposer/UPLOAD_FAILURE',
        ae = function (e) {
          return { type: te, conversationId: e }
        }
      y.a.register(
        d()({}, T, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.conversationId || 'new_group'
          switch (t.type) {
            case K:
              var n = e[a] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, a, p()(p()({}, n), t.payload)))
            case Z:
              var r = e[a] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, a, p()(p()({}, r), {}, { isUploading: !0 })))
            case N:
              var i = e[a] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, a, p()(p()({}, i), {}, { isUploading: !1 })))
            case te:
            case $:
            case Y:
              var o = e[a] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(
                p()({}, e),
                {},
                d()({}, a, p()(p()({}, o), {}, { isUploading: !1, mediaId: null, gifMetadata: void 0 })),
              )
            case R:
              var s = e[a] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, a, p()(p()({}, s), {}, { text: t.text })))
            case F:
              var l = e[a] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, a, p()(p()({}, l), {}, { cardUrl: t.cardUrl })))
            case A:
              var c = e[a] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, a, p()(p()({}, c), {}, { text: null })))
            default:
              return e
          }
        }),
      )
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
        h = a('ERkP'),
        m = a.n(h),
        v = a('3XMw'),
        f = a.n(v),
        g = a('MWbm'),
        b = a('Qwev'),
        y = a('21U8'),
        _ = a('rHpw'),
        C = a('1auM'),
        M = a('eYns'),
        E = f.a.gff1f69e,
        S = (function (e) {
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
                    Object(M.b)(a).then(function (t) {
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
                    : m.a.createElement(b.a, { accessibilityLabel: E, style: w.activityIndicator })
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
                    ? m.a.createElement(
                        g.a,
                        { style: w.cropper },
                        m.a.createElement(y.a, {
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
        })(m.a.Component),
        w = _.a.create(function (e) {
          return {
            cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 },
            activityIndicator: { flexGrow: 1 },
          }
        })
      t.a = m.a.forwardRef(function (e, t) {
        return m.a.createElement(S, r()({}, e, { cropperRef: t }))
      })
    },
    FDFL: function (e, t, a) {
      'use strict'
      a.d(t, 'c', function () {
        return g
      }),
        a.d(t, 'b', function () {
          return b
        }),
        a.d(t, 'a', function () {
          return y
        })
      var n = a('KEM+'),
        r = a.n(n),
        i = a('yiKp'),
        o = a.n(i),
        s = (a('ho0z'), a('tQbP'), a('hBpG'), a('7x/C'), a('JtPf'), a('oEOe')),
        l = a('kGix'),
        c = a('ikiw'),
        d = a('Ssj5'),
        u = a('RqPI'),
        p = 'availableLanguages',
        h = 'rweb/'.concat(p),
        m = s.a(h, 'FETCH_AVAILABLE_LANGUAGES'),
        v = { fetchStatus: l.a.NONE, languages: [] }
      function f() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = t.meta && t.meta.lang ? t.meta.lang : 'en',
          n = 'undefined' != typeof Intl && Intl.Collator && new Intl.Collator(a),
          r = n
            ? function (e, t) {
                return n.compare(e.name, t.name)
              }
            : void 0
        switch (t.type) {
          case m.REQUEST:
            return o()(o()({}, e), {}, { fetchStatus: l.a.LOADING })
          case m.FAILURE:
            return o()(o()({}, e), {}, { error: t.payload, fetchStatus: l.a.FAILED })
          case m.SUCCESS:
            return o()(o()({}, e), {}, { languages: t.payload.sort(r), fetchStatus: l.a.LOADED })
          default:
            return e
        }
      }
      d.a.register(r()({}, p, f))
      var g = function (e) {
          return e[p].languages
        },
        b = function (e, t) {
          var a = Object(c.c)(t).toLowerCase(),
            n = e[p].languages.find(function (e) {
              return e.code === a
            })
          return n ? n.name : null
        },
        y = function () {
          return function (e, t) {
            return t()[p].fetchStatus === l.a.LOADED ? Promise.resolve() : e(_())
          }
        },
        _ = function (e) {
          return function (t, a, n) {
            var r = n.api
            return s.b(t, { params: e, meta: { lang: Object(u.o)(a()) }, request: r.FeatureSwitch.fetchLanguages })({
              actionTypes: m,
              context: 'FETCH_AVAILABLE_LANGUAGES',
            })
          }
        }
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
      var h = c.a.create(function (e) {
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
          { style: h.mediaPreviewWrapper },
          void 0 === a && t
            ? r.a.createElement(s.a, {
                imageResizeMode: 'contain',
                mediaItem: t,
                style: h.mediaContainer,
                withCloseButton: !1,
              })
            : a
            ? r.a.createElement(d.a, { resizeMode: 'contain', source: a.url, style: h.image })
            : r.a.createElement(l.a, { accessibilityLabel: p, style: h.activityIndicator }),
        )
      }
    },
    Jhhs: function (e, t, a) {
      'use strict'
      var n = a('ax0f'),
        r = a('uqX5').start
      n(
        { target: 'String', proto: !0, forced: a('2prg') },
        {
          padStart: function (e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
          },
        },
      )
    },
    K3W9: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'TabbedMediaEditScreen', function () {
          return k
        })
      var n = a('97Jx'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        s = a('Y9Ll'),
        l = a.n(s),
        c = a('N+ot'),
        d = a.n(c),
        u = a('5Yy7'),
        p = a.n(u),
        h = a('2VqO'),
        m = a.n(h),
        v = a('KEM+'),
        f = a.n(v),
        g = (a('KqXw'), a('MvUL'), a('ERkP')),
        b = a.n(g),
        y = (a('KOtZ'), a('7x/C'), a('2G9S'), a('xVN5')),
        _ = a('rxPX'),
        C = a('AspN'),
        M = function (e, t) {
          var a, n
          return (
            null === (a = t.location) || void 0 === a || null === (n = a.state) || void 0 === n
              ? void 0
              : n.showAllMedia
          )
            ? E(e)
            : S(e)
        },
        E = function (e) {
          var t = y.k(e).reduce(function (e, t) {
            return e.concat(t.mediaIds)
          }, [])
          return Object(C.k)(e, t)
        },
        S = function (e) {
          var t = y.i(e),
            a = y.k(e)[t]
          return Object(C.k)(e, a.mediaIds)
        },
        w = function (e, t) {
          var a, n
          return null === (a = t.location) || void 0 === a || null === (n = a.state) || void 0 === n
            ? void 0
            : n.mediaId
        },
        T = Object(_.a)()
          .propsFromState(function () {
            return { initialMediaId: w, media: M }
          })
          .propsFromActions(function () {
            return { setMediaMetadata: C.n, processMedia: C.f, updateMediaUpload: C.o }
          })
          .withAnalytics({ page: 'tabbed_media' }),
        x = a('jFmo'),
        I = a('v6aA'),
        k = (function (e) {
          p()(a, e)
          var t = m()(a)
          function a(e, n) {
            var r
            o()(this, a), (r = t.call(this, e, n))
            var i = e.history,
              s = e.initialMediaId
            return e.media.length <= 0 || !s ? (i.replace('/'), d()(r)) : r
          }
          return (
            l()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.context.featureSwitches.isTrue('sensitive_tweet_warnings_enabled')
                  return b.a.createElement(x.a, r()({}, this.props, { sensitiveMediaTabEnabled: e }))
                },
              },
            ]),
            a
          )
        })(b.a.Component)
      f()(k, 'contextType', I.a)
      t.default = T(k)
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
    R5K7: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        s = a('Y9Ll'),
        l = a.n(s),
        c = a('1Pcy'),
        d = a.n(c),
        u = a('5Yy7'),
        p = a.n(u),
        h = a('2VqO'),
        m = a.n(h),
        v = a('KEM+'),
        f = a.n(v),
        g = (a('2G9S'), a('ERkP')),
        b = a.n(g),
        y = a('9Xij'),
        _ = a('Zl35'),
        C = a('epkG'),
        M = a('I4+6'),
        E = a('cm6r'),
        S = a('ZvMt'),
        w = a('rHpw'),
        T = a('97Jx'),
        x = a.n(T),
        I = a('CHgo')
      a('6U7i'), a('Ef13'), a('Jhhs'), a('z84I')
      function k(e) {
        var t = Math.round(e / 1e3)
        if (t < 10) return '0:0'.concat(t)
        if (t < 60) return '0:'.concat(t)
        var a = Math.floor(t / 60),
          n = ''.concat(t - 60 * a).padStart(2, '0')
        return ''.concat(a, ':').concat(n)
      }
      var P = function (e, t) {
          return e.map(function (e) {
            return (function (e, t) {
              if ('tenths' === t) {
                var a = Math.round(e / 100),
                  n = a % 10,
                  r = ''.concat((a - n) / 10).padStart(2, '0')
                return '0:'.concat(r, '.').concat(n)
              }
              return k(e)
            })(e, t)
          })
        },
        L = function (e, t) {
          var a = (function (e, t) {
              var a,
                n,
                r,
                i = t / e
              i >= 0.25
                ? ((a = 200), (n = 'tenths'), (r = 4))
                : i >= 0.1
                ? ((a = 500), (n = 'tenths'), (r = 5))
                : i >= 0.05
                ? ((a = 1e3), (n = 'seconds'), (r = 5))
                : i >= 0.025
                ? ((a = 2e3), (n = 'seconds'), (r = 4))
                : i >= 0.01
                ? ((a = 5e3), (n = 'seconds'), (r = 5))
                : i >= 0.005
                ? ((a = 1e4), (n = 'seconds'), (r = 5))
                : i >= 0.0025
                ? ((a = 2e4), (n = 'seconds'), (r = 4))
                : i >= 0.001
                ? ((a = 5e4), (n = 'seconds'), (r = 4))
                : ((a = 1e5), (n = 'seconds'), (r = 4))
              for (var o = [], s = 0; s < e; ) o.push(s), (s += a)
              return { intervalsMs: o, precision: n, numSubintervals: r, numIntervals: Number((e / a).toFixed(1)) }
            })(e, t),
            n = a.intervalsMs,
            r = a.numIntervals,
            i = a.numSubintervals,
            o = a.precision
          return { intervalStrings: P(n, o), numSubintervals: i, numIntervals: r }
        },
        R = a('3XMw'),
        D = a.n(R),
        A = (a('hCOa'), a('87if'), a('t62R')),
        O = a('shC7'),
        V = a('MWbm')
      var F = w.a.create(function (e) {
          return {
            root: {
              flexDirection: 'column',
              width: '100%',
              position: 'absolute',
              height: '65%',
              bottom: 0,
              overflow: 'hidden',
            },
            intervalRow: { flexDirection: 'row' },
            intervalRowStrings: { paddingBottom: e.spaces.space2, userSelect: 'none' },
            intervalRowTicks: { flexGrow: 1, overflow: 'hidden' },
            borderLeft: { borderLeftColor: e.colors.gray700, borderLeftWidth: 1 },
            borderRight: { borderRightColor: e.colors.gray700, borderRightWidth: 1 },
            bigTicks: { flexDirection: 'row', alignItems: 'flex-end' },
            smallTicks: { flexGrow: 1, height: '50%' },
            intervalStrings: { display: 'flex', justifyContent: 'center' },
          }
        }),
        W = function (e) {
          var t = e.duration,
            a = e.trimmerWidth,
            n = L(t, a),
            r = n.intervalStrings,
            i = n.numIntervals,
            o = n.numSubintervals,
            s = O.a.getConstants().isRTL ? F.borderRight : F.borderLeft,
            l = (100 * Math.ceil(i)) / i
          return b.a.createElement(
            V.a,
            { style: F.root },
            b.a.createElement(
              V.a,
              { style: [F.intervalRow, F.intervalRowStrings, { width: ''.concat(l, '%') }] },
              r.map(function (e, t) {
                return b.a.createElement(
                  A.b,
                  {
                    color: 'gray700',
                    key: t,
                    size: 'subtext3',
                    style: [{ width: ''.concat(0 === t ? a / i / 2 : a / i, 'px') }, F.intervalStrings],
                  },
                  0 !== t ? e : null,
                )
              }),
            ),
            b.a.createElement(
              V.a,
              { style: [F.intervalRow, F.intervalRowTicks] },
              r.map(function (e, t) {
                return b.a.createElement(
                  V.a,
                  { key: t, style: [{ width: ''.concat(100 / i, '%') }, F.bigTicks, 0 !== t && s] },
                  Array.from({ length: o }, function (e, t) {
                    return b.a.createElement(V.a, { key: t, style: [F.smallTicks, 0 !== t && s] })
                  }),
                )
              }),
            ),
          )
        },
        j = a('Wms4'),
        B = (a('jQ3i'), a('x4t0'), a('uFXj'), a('oLZl')),
        z = 'decrease',
        U = 'increase',
        H = 'left',
        K = 'right',
        G = a('7ep7'),
        N = D.a.a394f904,
        X = D.a.f42c0c8f,
        Y = D.a.i667afe8,
        q = D.a.c0bdd345,
        Q = (function (e) {
          p()(a, e)
          var t = m()(a)
          function a() {
            var e
            o()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              f()(
                d()(e),
                '_panResponders',
                G.a.create({
                  onStartShouldSetPanResponder: function () {
                    return !0
                  },
                  onMoveShouldSetPanResponder: function () {
                    return !0
                  },
                  onPanResponderGrant: function () {
                    return e.props.onMoveStart(e.props.side)
                  },
                  onPanResponderMove: function (t, a) {
                    var n = a.dx
                    return e.props.onMoveChange(n, e.props.side)
                  },
                  onPanResponderRelease: function (t, a) {
                    var n = a.dx
                    return e.props.onMoveEnd(n, e.props.side)
                  },
                  onPanResponderTerminate: function (t, a) {
                    var n = a.dx
                    return e.props.onMoveEnd(n, e.props.side)
                  },
                  onPanResponderTerminationRequest: function () {
                    return !0
                  },
                }),
              ),
              f()(d()(e), '_handleOnKeyDown', function (t, a) {
                var n = e.props.onKeyDown,
                  r = t.key,
                  i = r === B.a.ArrowUp || r === B.a.ArrowRight,
                  o = r === B.a.ArrowDown || r === B.a.ArrowLeft
                ;(i || o) && (t.preventDefault(), n(i ? U : z, a))
              }),
              f()(d()(e), '_handleOnKeyUp', function (t) {
                var a = e.props.onKeyUp,
                  n = t.key
                ;[B.a.ArrowDown, B.a.ArrowLeft, B.a.ArrowRight, B.a.ArrowUp].includes(n) && a()
              }),
              f()(d()(e), '_generateBorderStyles', function () {
                var t = e.props.side,
                  a = O.a.getConstants().isRTL
                return t === H
                  ? a
                    ? Z.rightScrubberRadius
                    : Z.leftScrubberRadius
                  : t === K
                  ? a
                    ? Z.leftScrubberRadius
                    : Z.rightScrubberRadius
                  : void 0
              }),
              e
            )
          }
          return (
            l()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.currentValue,
                    n = t.maxValue,
                    r = t.minValue,
                    i = t.side,
                    o = t.style
                  return b.a.createElement(
                    E.a,
                    x()(
                      {
                        accessibilityLabel: i === H ? Y : X,
                        accessibilityRole: 'adjustable',
                        accessibilityValue: {
                          max: q(n / 1e3),
                          min: q(r / 1e3),
                          now: q(a / 1e3),
                          text: N({ seconds: q(a / 1e3) }),
                        },
                        focusable: !0,
                        interactiveStyles: M.a.generate({
                          backgroundColor: w.a.theme.colors.primary,
                          color: w.a.theme.colors.primary,
                          customFocusBackgroundColor: w.a.theme.colors.primary,
                          customHoverBackgroundColor: w.a.theme.colors.primary,
                          customPressedBackgroundColor: w.a.theme.colors.primary,
                          insetFocusRing: !0,
                        }),
                        onKeyDown: function (t) {
                          return e._handleOnKeyDown(t, i)
                        },
                        onKeyUp: function (t) {
                          return e._handleOnKeyUp(t)
                        },
                        style: [Z.root, this._generateBorderStyles(), o],
                      },
                      this._panResponders.panHandlers,
                    ),
                    function (e) {
                      var t = e.isFocused,
                        a = e.isHovered,
                        n = e.isPressed
                      return b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(V.a, {
                          style: [Z.trimmerScrubberGrips, (t || a || n) && Z.trimmerScrubberGripsOpacity],
                        }),
                        b.a.createElement(V.a, {
                          style: [Z.trimmerScrubberGrips, (t || a || n) && Z.trimmerScrubberGripsOpacity],
                        }),
                      )
                    },
                  )
                },
              },
            ]),
            a
          )
        })(b.a.Component),
        Z = w.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.primary,
              cursor: 'grab',
              flexDirection: 'row',
              height: e.spaces.space48,
              justifyContent: 'space-between',
              paddingHorizontal: e.spaces.space4,
              paddingVertical: e.spaces.space12,
              width: 'calc('.concat(e.spaces.space4, ' * 2 + ').concat(e.spaces.space2, ' * 3)'),
            },
            leftScrubberRadius: {
              borderBottomLeftRadius: e.borderRadii.small,
              borderTopLeftRadius: e.borderRadii.small,
            },
            rightScrubberRadius: {
              borderBottomRightRadius: e.borderRadii.small,
              borderTopRightRadius: e.borderRadii.small,
            },
            trimmerScrubberGrips: {
              backgroundColor: e.colors.cellBackground,
              borderRadius: e.borderRadii.infinite,
              height: '100%',
              width: e.spaces.space2,
            },
            trimmerScrubberGripsOpacity: { opacity: 0.8 },
          }
        }),
        J = Q,
        $ = D.a.af2a65d8,
        ee = D.a.d46781ae,
        te = D.a.e8733ed8,
        ae = D.a.j3d49e93,
        ne = function (e, t) {
          return ''.concat((e / t) * 100, '%')
        },
        re = (function (e) {
          p()(a, e)
          var t = m()(a)
          function a() {
            var e
            o()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              f()(d()(e), '_keyPressAccumulatedDistance', 0),
              f()(d()(e), '_keyPressValueDelta', 1),
              f()(
                d()(e),
                '_panResponderTermination',
                G.a.create({
                  onMoveShouldSetPanResponderCapture: function (t, a) {
                    var n = a.dx
                    return e._shouldTerminateChildrenPanResponders(n)
                  },
                }),
              ),
              f()(d()(e), 'state', { isActive: !1, trimmerWidth: 0 }),
              f()(d()(e), '_generateTimestampLabelString', function () {
                var t = e.props,
                  a = t.endTime - t.startTime
                if (a >= 6e4) {
                  var n = k(a)
                  return ae({ timestamp: n })
                }
                return a < 4e3 ? ee(Math.floor((10 * a) / 1e3) / 10) : te(Math.floor(a / 1e3))
              }),
              f()(d()(e), '_getTrimmerScrubberWidth', function () {
                return 2 * w.a.theme.spacesPx.space4 + 3 * w.a.theme.spacesPx.space2
              }),
              f()(d()(e), '_handleKeyDown', function (t, a) {
                var n = e.state.trimmerWidth
                1 === e._keyPressValueDelta && e._handlePanResponderGrant(a),
                  (e._keyPressAccumulatedDistance += e._keyPressValueDelta * (t === U ? 1 : -1)),
                  e._handlePanResponderChange(e._keyPressAccumulatedDistance, a)
                var r = 0.05 * n
                e._keyPressValueDelta = Math.min(1.4 * e._keyPressValueDelta, r)
              }),
              f()(d()(e), '_handleKeyUp', function () {
                ;(e._keyPressValueDelta = 1), (e._keyPressAccumulatedDistance = 0), e.setState({ isActive: !1 })
              }),
              f()(d()(e), '_handleLayout', function (t) {
                e.setState({ trimmerWidth: t.nativeEvent.layout.width })
              }),
              f()(d()(e), '_handlePanResponderChange', function (t, a) {
                e._triggerChange(t, a)
              }),
              f()(d()(e), '_handlePanResponderEnd', function (t, a) {
                e._handlePanResponderChange(t, a), e.setState({ isActive: !1 })
              }),
              f()(d()(e), '_handlePanResponderGrant', function (t) {
                var a = e.props,
                  n = a.endTime,
                  r = a.startTime
                ;(e._baseTime = t === H ? r : n), e.setState({ isActive: !0 })
              }),
              f()(d()(e), '_renderTimestampLabel', function () {
                var t,
                  a = e.state.isActive,
                  n = e.props,
                  r = n.duration,
                  i = n.endTime,
                  o = n.startTime,
                  s = O.a.getConstants().isRTL,
                  l = s ? 'marginRight' : 'marginLeft',
                  c = s ? 'marginLeft' : 'marginRight'
                return b.a.createElement(
                  V.a,
                  {
                    style: [
                      ie.labelWrapper,
                      ((t = {}), f()(t, l, ne(o, r)), f()(t, c, ne(r - i, r)), f()(t, 'width', ne(i - o, r)), t),
                    ],
                  },
                  b.a.createElement(
                    j.a,
                    { background: 'maskColor', style: [ie.label, !a && ie.visibilityHidden] },
                    $({ timestamp: e._generateTimestampLabelString() }),
                  ),
                )
              }),
              f()(d()(e), '_setRootRef', function (t) {
                t && (e._removeTouchMoveToScrollListener = Object(I.a)(t, e._handleTouchMoveToScroll, !1))
              }),
              f()(d()(e), '_handleTouchMoveToScroll', function (e) {
                return e.preventDefault()
              }),
              f()(d()(e), '_scaleDistanceByTrimmerWidth', function (t) {
                var a = e.props.duration
                return (t / e.state.trimmerWidth) * a
              }),
              f()(d()(e), '_shouldTerminateChildrenPanResponders', function (t) {
                var a = e.props.duration,
                  n = e._baseTime + e._scaleDistanceByTrimmerWidth(t)
                return n < 0 || n > a
              }),
              f()(d()(e), '_triggerChange', function (t, a) {
                var n = e.props,
                  r = n.duration,
                  i = n.endTime,
                  o = n.onScrub,
                  s = n.startTime,
                  l = e._baseTime + e._scaleDistanceByTrimmerWidth(t),
                  c = 1e3
                if (a === H) {
                  var d = l
                  l <= 0 ? (d = 0) : i - c <= l && (d = i - c), o(H, d)
                }
                if (a === K) {
                  var u = l
                  l >= r ? (u = r) : l - s <= c && (u = s + c), o(K, u)
                }
              }),
              e
            )
          }
          return (
            l()(a, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._removeTouchMoveToScrollListener()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.duration,
                    a = e.endTime,
                    n = e.playTime,
                    r = e.startTime,
                    i = this.state,
                    o = i.isActive,
                    s = i.trimmerWidth,
                    l = this._getTrimmerScrubberWidth(),
                    c = O.a.getConstants().isRTL,
                    d = c ? 'marginRight' : 'marginLeft',
                    u = c ? 'marginLeft' : 'marginRight'
                  return b.a.createElement(
                    V.a,
                    x()(
                      { ref: this._setRootRef, style: [ie.root, o && ie.cursorGrab] },
                      this._panResponderTermination.panHandlers,
                    ),
                    this._renderTimestampLabel(),
                    b.a.createElement(
                      V.a,
                      { onLayout: this._handleLayout, style: ie.trimmerWrapper },
                      b.a.createElement(
                        V.a,
                        { style: ie.intervalsContainer },
                        b.a.createElement(W, { duration: t, trimmerWidth: s }),
                      ),
                      b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(V.a, { style: [ie.discardArea, ie.transition, { width: ne(r, t) }] }),
                        b.a.createElement(
                          V.a,
                          { style: ie.keepArea },
                          b.a.createElement(J, {
                            currentValue: r,
                            maxValue: a,
                            minValue: 0,
                            onKeyDown: this._handleKeyDown,
                            onKeyUp: this._handleKeyUp,
                            onMoveChange: this._handlePanResponderChange,
                            onMoveEnd: this._handlePanResponderEnd,
                            onMoveStart: this._handlePanResponderGrant,
                            side: H,
                            style: [ie.trimmerScrubber, f()({}, d, '-'.concat(l, 'px'))],
                          }),
                          b.a.createElement(
                            V.a,
                            { style: ie.keepAreaCenter },
                            o
                              ? null
                              : b.a.createElement(V.a, {
                                  style: [ie.playBarArea, ie.transition, { width: ne(n, a - r) }],
                                }),
                          ),
                          b.a.createElement(J, {
                            currentValue: a,
                            maxValue: t,
                            minValue: r,
                            onKeyDown: this._handleKeyDown,
                            onKeyUp: this._handleKeyUp,
                            onMoveChange: this._handlePanResponderChange,
                            onMoveEnd: this._handlePanResponderEnd,
                            onMoveStart: this._handlePanResponderGrant,
                            side: K,
                            style: [ie.trimmerScrubber, f()({}, u, '-'.concat(l, 'px'))],
                          }),
                        ),
                        b.a.createElement(V.a, {
                          style: [ie.discardArea, ie.transition, { width: 'calc(100% - '.concat(ne(a, t), ')') }],
                        }),
                      ),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(b.a.Component),
        ie = w.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.spaces.space40, width: '100%' },
            cursorGrab: { cursor: 'grab' },
            trimmerWrapper: {
              alignItems: 'center',
              writingDirection: 'ltr',
              flexGrow: 1,
              flexDirection: 'row',
              height: e.spaces.space48,
              position: 'relative',
            },
            discardArea: {
              backgroundColor: e.colors.maskColor,
              height: 'calc(100% - ('.concat(e.spaces.space4, ' * 2))'),
            },
            keepArea: { flexDirection: 'row', flexGrow: 1, height: '100%', zIndex: 1 },
            keepAreaCenter: {
              borderColor: e.colors.primary,
              borderStyle: 'solid',
              borderBottomWidth: e.spaces.space4,
              borderTopWidth: e.spaces.space4,
              height: '100%',
              position: 'relative',
              width: '100%',
            },
            intervalsContainer: {
              backgroundColor: e.colors.gray50,
              height: 'calc('.concat(e.spaces.space48, ' - ').concat(e.spaces.space4, ' * 2)'),
              position: 'absolute',
              left: 0,
              right: 0,
            },
            label: { userSelect: 'none' },
            labelWrapper: {
              flexDirection: 'row',
              justifyContent: 'center',
              paddingBottom: e.spaces.space8,
              paddingTop: e.spaces.space8,
            },
            playBarArea: { backgroundColor: e.colors.primary, height: '100%', opacity: 0.5 },
            trimmerScrubber: { zIndex: 1 },
            transition: { transitionDuration: '0.01s', transitionProperty: 'width' },
            visibilityHidden: { visibility: 'hidden' },
          }
        }),
        oe = re,
        se = a('mXq/'),
        le = a('/run'),
        ce = a('KwSe'),
        de = new C.a({}),
        ue = (function (e) {
          p()(a, e)
          var t = m()(a)
          function a() {
            var e, n, i
            o()(this, a)
            for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++) l[c] = arguments[c]
            return (
              (i = t.call.apply(t, [this].concat(l))),
              f()(d()(i), '_isScrubbed', !1),
              f()(d()(i), 'state', {
                endTime:
                  (null === (e = i.props.defaultTrimData) || void 0 === e ? void 0 : e.endTime) ||
                  i.props.video.duration,
                isPlaying: !1,
                startTime: (null === (n = i.props.defaultTrimData) || void 0 === n ? void 0 : n.startTime) || 0,
                playTime: 0,
              }),
              f()(d()(i), '_handleScrub', function (e) {
                return function (t, a) {
                  var n = i.state,
                    o = n.endTime,
                    s = n.startTime,
                    l = i.props.video.duration,
                    c = t === H
                  if (e) {
                    var d = c ? a : s,
                      u = c ? o : a
                    e.pause(),
                      e.scrubToFraction(a / l),
                      e.setPlaybackTimeRange({ startTimeS: d / 1e3, endTimeS: u / 1e3 })
                  }
                  i._isScrubbed = !0
                  var p = c ? { startTime: a } : { endTime: a }
                  i.setState(r()({ playTime: 0 }, p))
                }
              }),
              f()(d()(i), '_handleOnVideoContainerLayout', function (e) {
                var t = e.nativeEvent.layout,
                  a = t.height,
                  n = t.width,
                  r = i.props.video,
                  o = r.height,
                  s = r.width / o,
                  l = S.a.getContainDimensions({ height: a, width: n }, s),
                  c = l.height,
                  d = l.width
                ;(c === i.state.adjustedVideoHeight && d === i.state.adjustedVideoWidth) ||
                  i.setState({ adjustedVideoHeight: c, adjustedVideoWidth: d })
              }),
              f()(d()(i), '_handleVideoClick', function (e) {
                return function () {
                  var t = i.state,
                    a = t.endTime,
                    n = t.isPlaying,
                    r = t.startTime,
                    o = i.props.video.duration
                  e &&
                    (i._isScrubbed
                      ? (e.scrubToFraction(r / o), (i._isScrubbed = !1))
                      : i._isScrubbed ||
                        (!r && a === o) ||
                        (e.scrubToFraction(r / o), e.setPlaybackTimeRange({ startTimeS: r / 1e3, endTimeS: a / 1e3 })),
                    n ? e.pause() : e.play())
                }
              }),
              f()(d()(i), '_handlePlayerStateUpdate', function (e) {
                var t = i.state.startTime,
                  a = e.tracks[e.currentTrackId]
                if (a) {
                  var n = a.currentTimeMs - t
                  i.setState(r()({ isPlaying: e.isPlaying }, e.isPlaying ? { playTime: n } : {}))
                }
              }),
              i
            )
          }
          return (
            l()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.video,
                    a = this.state,
                    n = a.adjustedVideoHeight,
                    r = a.adjustedVideoWidth,
                    i = a.endTime,
                    o = a.isPlaying,
                    s = a.playTime,
                    l = a.startTime
                  return b.a.createElement(
                    V.a,
                    { style: pe.root },
                    b.a.createElement(
                      ce.a,
                      null,
                      b.a.createElement(
                        V.a,
                        { style: pe.videoContainer },
                        b.a.createElement(
                          V.a,
                          { onLayout: this._handleOnVideoContainerLayout, style: pe.video },
                          b.a.createElement(
                            y.a,
                            { ratio: t.width / t.height, style: n && r && { height: n, width: r } },
                            b.a.createElement(
                              _.b,
                              {
                                aspectRatio: t.width / t.height,
                                basePlayerClass: le.a,
                                configType: 'static',
                                contentId: '',
                                contentType: 'media_entity',
                                httpClient: de,
                                onStateUpdate: this._handlePlayerStateUpdate,
                                playerId: 'trimmer',
                                size: 'fill',
                                variants: t.variants,
                              },
                              function (t) {
                                var a = t.playerApi
                                return b.a.createElement(
                                  E.a,
                                  {
                                    focusable: !0,
                                    interactiveStyles: M.a.generate({
                                      backgroundColor: w.a.theme.colors.transparent,
                                      color: w.a.theme.colors.primary,
                                      customFocusBackgroundColor: w.a.theme.colors.transparent,
                                      customHoverBackgroundColor: w.a.theme.colors.transparent,
                                      customPressedBackgroundColor: w.a.theme.colors.transparent,
                                      insetFocusRing: !0,
                                    }),
                                    onClick: e._handleVideoClick(a),
                                    style: pe.overlay,
                                  },
                                  o ? null : b.a.createElement(se.a, null),
                                )
                              },
                            ),
                          ),
                        ),
                      ),
                      b.a.createElement(ce.a.MetadataSubscriber, { playerId: 'trimmer' }, function (a) {
                        var n = a.playerApi
                        return b.a.createElement(oe, {
                          duration: t.duration,
                          endTime: i,
                          onScrub: e._handleScrub(n),
                          playTime: s,
                          startTime: l,
                        })
                      }),
                    ),
                  )
                },
              },
              {
                key: 'getTrimData',
                value: function () {
                  var e = this.state,
                    t = e.endTime
                  return { startTime: e.startTime, endTime: t }
                },
              },
            ]),
            a
          )
        })(b.a.Component),
        pe = w.a.create(function (e) {
          return {
            root: { flex: 1 },
            overlay: r()(r()({}, w.a.absoluteFillObject), {}, { alignItems: 'center', justifyContent: 'center' }),
            video: { alignItems: 'center', flex: 1, justifyContent: 'center', width: '100%' },
            videoContainer: {
              alignItems: 'center',
              backgroundColor: e.colors.gray0,
              flex: 1,
              padding: e.spaces.space20,
              width: '100%',
            },
          }
        })
      t.a = ue
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
    eIif: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'PhotoTagsScreen', function () {
          return A
        })
      var n = a('RhWx'),
        r = a.n(n),
        i = a('ddV6'),
        o = a.n(i),
        s = (a('hBpG'), a('7x/C'), a('2G9S'), a('LW0h'), a('tQbP'), a('z84I'), a('ERkP')),
        l = a.n(s),
        c = a('VAZu'),
        d = (a('M+/F'), a('xVN5')),
        u = a('hqKg'),
        p = a('tn7R'),
        h = a('GZwR'),
        m = a('UQTn'),
        v = a('oEGd'),
        f = Object(u.createSelector)(
          function (e) {
            var t = d.i(e)
            return d.k(e)[t].mediaTags
          },
          function (e) {
            return (function (e) {
              var t = Object(m.e)(e),
                a = (t && Object(p.a)(t)) || []
              return Object(h.i)(a)
            })(e)
              .filter(function (e) {
                return e && e.rounded_score
              })
              .sort(function (e, t) {
                return (t.rounded_score || 0) - (e.rounded_score || 0)
              })
              .slice(0, 12)
          },
          function (e, t) {
            return { existingTags: e, injections: t }
          },
        ),
        g = { updateSingleComposer: d.w },
        b = Object(v.f)(f, g),
        y = a('jHSc'),
        _ = a('3XMw'),
        C = a.n(_),
        M = a('Oib4'),
        E = a('mN6z'),
        S = a('2dXj'),
        w = a('MWbm'),
        T = a('4zmP'),
        x = a('/yvb'),
        I = a('rHpw'),
        k = a('7JQg'),
        P = C.a.b772cd65,
        L = C.a.c20dc653,
        R = C.a.d1175c78,
        D = C.a.ae0831ab
      function A(e) {
        var t = e.history,
          a = e.injections,
          n = e.existingTags,
          i = void 0 === n ? [] : n,
          s = e.updateSingleComposer,
          d = l.a.useState(i),
          u = o()(d, 2),
          p = u[0],
          m = u[1],
          v = l.a.useState(''),
          f = o()(v, 2),
          g = f[0],
          b = f[1],
          _ = function (e) {
            m(
              p.filter(function (t) {
                return t.id !== e.id
              }),
            )
          },
          C = function () {
            var e = p
                .map(function (e) {
                  return e.data.id_str
                })
                .sort(),
              t = i
                .map(function (e) {
                  return e.data.id_str
                })
                .sort(),
              a = e.length === t.length && Object(E.a)(e, t)
            return l.a.createElement(
              w.a,
              { style: O.rightColumn },
              l.a.createElement(x.a, { disabled: a, onPress: k, size: 'small', type: 'primaryFilled' }, P),
            )
          },
          I = function () {
            t.goBack()
          },
          k = function () {
            s({ updates: { mediaTags: p } }), t.goBack()
          }
        return l.a.createElement(
          y.b,
          {
            documentTitle: R,
            history: t,
            renderHeader: function () {
              return l.a.createElement(c.a, {
                backButtonType: 'close',
                history: t,
                onBackClick: I,
                rightControl: C(),
                title: R,
              })
            },
          },
          l.a.createElement(S.d, {
            getItemDisabledMessage: function (e) {
              var t
              return e.type !== h.b.User || e.data.can_media_tag || (t = D({ screenName: e.data.screen_name })), t
            },
            getItemIsDisabled: function (e) {
              var t = p.length >= 10
              return e.type === h.b.User && (!e.data.can_media_tag || !!t)
            },
            injections: g ? void 0 : a,
            onQueryChange: function (e) {
              b(e)
            },
            onRemove: _,
            onSelect: function (e) {
              e.type === h.b.User &&
                (p.find(function (t) {
                  return t.id === e.id
                })
                  ? _(e)
                  : p.length < 10 && m([].concat(r()(p), [e])))
            },
            renderCallout: function () {
              return p.length >= 10
                ? l.a.createElement(
                    w.a,
                    { style: O.inlineCallout },
                    l.a.createElement(T.a, { Icon: M.a, headline: L, type: 'warning' }),
                  )
                : null
            },
            selectedUsers: p,
            source: h.d.ComposeMediaTagging,
            withCompactPills: !0,
          }),
        )
      }
      var O = I.a.create(function (e) {
        return {
          rightColumn: { flexDirection: 'row', flexGrow: 1, alignItems: 'center' },
          inlineCallout: {
            paddingHorizontal: e.spaces.space16,
            paddingBottom: e.spaces.space4,
            paddingTop: e.spaces.space8,
          },
        }
      })
      t.default = Object(k.a)({ page: 'media_tag', component: 'media_tagger' })(b(A))
    },
    i8hi: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'TabbedMediaEditScreen', function () {
          return S
        })
      var n = a('97Jx'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        s = a('Y9Ll'),
        l = a.n(s),
        c = a('N+ot'),
        d = a.n(c),
        u = a('5Yy7'),
        p = a.n(u),
        h = a('2VqO'),
        m = a.n(h),
        v = (a('KqXw'), a('MvUL'), a('ERkP')),
        f = a.n(v),
        g = a('CDB5'),
        b = a('rxPX'),
        y = a('AspN'),
        _ = function (e, t) {
          return t.location && t.location.state && t.location.state.mediaId
        },
        C = function (e, t) {
          var a = (function (e, t) {
            var a, n
            return null === (a = t.location) || void 0 === a || null === (n = a.state) || void 0 === n
              ? void 0
              : n.conversationId
          })(0, t)
          return Object(g.i)(e, a)
        },
        M = Object(b.a)()
          .propsFromState(function () {
            return { media: C, initialMediaId: _ }
          })
          .adjustStateProps(function (e) {
            var t = e.initialMediaId,
              a = e.media
            return { media: a ? [a] : [], initialMediaId: t }
          })
          .propsFromActions(function () {
            return { setMediaMetadata: y.n, processMedia: y.f, updateMediaUpload: y.o }
          })
          .withAnalytics({ page: 'tabbed_media_dm' }),
        E = a('jFmo'),
        S = (function (e) {
          p()(a, e)
          var t = m()(a)
          function a(e) {
            var n
            o()(this, a), (n = t.call(this, e))
            var r = e.history,
              i = e.initialMediaId
            return e.media.length <= 0 || !i ? (r.replace('/'), d()(n)) : n
          }
          return (
            l()(a, [
              {
                key: 'render',
                value: function () {
                  return f.a.createElement(E.a, r()({}, this.props, { sensitiveMediaTabEnabled: !1 }))
                },
              },
            ]),
            a
          )
        })(f.a.Component)
      t.default = M(S)
    },
    jFmo: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        i = (a('KqXw'), a('MvUL'), a('ERkP')),
        o = a.n(i),
        s = a('v6aA'),
        l = a('0uGn'),
        c = a('yiKp'),
        d = a.n(c),
        u = a('VrFO'),
        p = a.n(u),
        h = a('Y9Ll'),
        m = a.n(h),
        v = a('1Pcy'),
        f = a.n(v),
        g = a('5Yy7'),
        b = a.n(g),
        y = a('2VqO'),
        _ = a.n(y),
        C = a('KEM+'),
        M = a.n(C),
        E = (a('hBpG'), a('7x/C'), a('jwue'), a('+oxZ'), a('lTEL'), a('LqLs'), a('87if'), a('kYxP'), a('jHSc')),
        S = a('3XMw'),
        w = a.n(S),
        T = a('oQhu'),
        x = a('7JQg'),
        I = a('9Q4p'),
        k = a('PrL8'),
        P = a('sjK1'),
        L = (a('2G9S'), a('RqPI')),
        R = a('AspN'),
        D = a('rxPX'),
        A = a('0KEI'),
        O = a('FDFL'),
        V = function (e) {
          var t = Object(L.o)(e)
          return t && Object(O.b)(e, t)
        },
        F = Object(D.a)()
          .propsFromState(function () {
            return { language: L.o, languageName: V }
          })
          .propsFromActions(function () {
            return {
              addMedia: R.b,
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)(
                'VIDEO_SUBTITLES_UPLOAD',
              ),
              fetchAvailableLanguagesIfNeeded: O.a,
              removeMediaUpload: R.i,
            }
          })
          .withAnalytics(),
        W = a('eyty'),
        j = a('m3Bd'),
        B = a.n(j),
        z = (a('7xRU'), a('pHub')),
        U = a('62wY'),
        H = 'fileInput',
        K = a('MWbm'),
        G = a('/Imo'),
        N = a('rHpw'),
        X = ['icon', 'style', 'withIcon'],
        Y = o.a.createElement(z.a, null),
        q = w.a.icbec4ae,
        Q = function (e) {
          var t = e.icon,
            a = e.style,
            n = e.withIcon,
            i = B()(e, X),
            s = U.a.join(',')
          return o.a.createElement(
            K.a,
            null,
            o.a.createElement(
              G.a,
              r()({}, i, { accept: s, icon: n ? t : void 0, style: [Z.button, a], testID: H, type: 'primaryFilled' }),
              q,
            ),
          )
        }
      Q.defaultProps = { icon: Y, size: 'medium', withIcon: !0 }
      var Z = N.a.create(function (e) {
          return { button: { alignSelf: 'start' } }
        }),
        J = Q,
        $ = a('/yvb'),
        ee = a('t62R'),
        te = w.a.bf4e9d79,
        ae = w.a.j435467e,
        ne = w.a.a6b267f9,
        re = (function (e) {
          b()(a, e)
          var t = _()(a)
          function a() {
            var e
            p()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              M()(f()(e), '_renderSubtitlesPickerButton', function () {
                return o.a.createElement(J, { onChange: e._handleAddMediaFiles, type: 'brandText' })
              }),
              M()(f()(e), '_renderSubtitlesRemovalButton', function () {
                return o.a.createElement($.a, { onPress: e._handleRemoveSubtitles, type: 'destructiveOutlined' }, ne)
              }),
              M()(f()(e), '_handleRemoveSubtitles', function () {
                ;(0, e.props.onRemove)()
              }),
              M()(f()(e), '_handleAddMediaFiles', function (t) {
                var a = e.props,
                  n = a.addMedia,
                  r = a.analytics,
                  i = a.language,
                  o = a.languageName,
                  s = a.onChange
                r.scribe({ element: 'subtitles_upload', action: 'click' }),
                  n(t, { location: W.d.Tweet }).then(function (e) {
                    s(e[0], i, o)
                  })
              }),
              e
            )
          }
          return (
            m()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler
                  ;(0, e.fetchAvailableLanguagesIfNeeded)().catch(t())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.subtitles
                  return o.a.createElement(
                    K.a,
                    { style: ie.root },
                    o.a.createElement(
                      K.a,
                      { style: ie.attachmentContainer },
                      o.a.createElement(ee.b, { size: 'title3', style: ie.header, weight: 'heavy' }, te),
                      o.a.createElement(ee.b, { size: 'body', style: ie.body }, ae),
                      o.a.createElement(
                        K.a,
                        { style: ie.buttonWrapper },
                        e ? this._renderSubtitlesRemovalButton() : this._renderSubtitlesPickerButton(),
                      ),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(o.a.Component),
        ie = N.a.create(function (e) {
          return {
            root: { display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', flex: 1 },
            attachmentContainer: { flex: 1, margin: e.spaces.space16, maxHeight: '100%' },
            body: { marginBottom: e.spaces.space28 },
            buttonWrapper: { flexDirection: 'row', alignItems: 'center' },
            header: { marginTop: e.spaces.space16, marginBottom: e.spaces.space8 },
          }
        }),
        oe = F(re),
        se = a('k/OQ'),
        le = a('R5K7'),
        ce = a('nV1z'),
        de = a('8A5z'),
        ue = a('zIWA'),
        pe = { section: 'subtitles' },
        he = { section: 'trimmer' },
        me = { section: 'sensitive_media' },
        ve = w.a.c91f83ae,
        fe = w.a.icbec4ae,
        ge = w.a.e0342f98,
        be = w.a.i2209530,
        ye = w.a.b772cd65,
        _e = w.a.e0342f98,
        Ce = w.a.e7048e73,
        Me = w.a.dd4a83a5,
        Ee = 'subtitles',
        Se = 'trimmer',
        we = 'sensitive_media',
        Te = (function (e) {
          b()(a, e)
          var t = _()(a)
          function a(e) {
            var n
            p()(this, a),
              (n = t.call(this, e)),
              M()(f()(n), '_videoTrimmerRef', o.a.createRef()),
              M()(
                f()(n),
                '_getMemoizedCurrentTabMetadata',
                Object(T.a)(function (e, t, a) {
                  switch (e) {
                    case Se:
                      if (t) return { namespace: he, title: ve, renderer: n._renderTrimmerTab }
                    case we:
                      if (a) return { namespace: me, title: Me, renderer: n._renderSensitiveMediaTab }
                    default:
                      return { namespace: pe, title: fe, renderer: n._renderSubtitlesTab }
                  }
                }),
              ),
              M()(f()(n), '_renderSegmentedControl', function () {
                var e,
                  t = n.props,
                  a = t.isVideoTrimmerEnabled,
                  r = t.location,
                  i = t.sensitiveMediaTabEnabled,
                  s = n._getSegmentedControlLinks(),
                  l = n._getMemoizedCurrentTabMetadata(null === (e = r.state) || void 0 === e ? void 0 : e.tab, a, i)
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  s.length > 1 ? o.a.createElement(se.a, { accessibilityLabel: ve, links: s }) : null,
                  o.a.createElement(K.a, { style: k.a.segmentedControlChildren }, l.renderer()),
                )
              }),
              M()(f()(n), '_renderTrimmerTab', function () {
                var e = n._getCurrentMediaItem(),
                  t = n.state.trimData
                if (null != e && e.mediaFile && e.mediaFile instanceof P.c) {
                  var a = e.mediaFile,
                    r = {
                      duration: 1e3 * a.duration,
                      height: a.height,
                      variants: [{ src: a.url, type: a.type }],
                      width: a.width,
                    }
                  return o.a.createElement(
                    K.a,
                    { style: k.a.videoTrimmerWrapper },
                    o.a.createElement(le.a, { defaultTrimData: t, ref: n._videoTrimmerRef, video: r }),
                  )
                }
              }),
              M()(f()(n), '_addTrimDataToState', function () {
                var e,
                  t = null === (e = n._videoTrimmerRef.current) || void 0 === e ? void 0 : e.getTrimData()
                null != t &&
                  t.endTime &&
                  null != t &&
                  t.startTime &&
                  n.setState({ trimData: { endTime: t.endTime, startTime: t.startTime } })
              }),
              M()(f()(n), '_saveTrimData', function () {
                var e,
                  t = n.props,
                  a = t.processMedia,
                  r = t.updateMediaUpload,
                  i = n._getCurrentMediaItem(),
                  o =
                    (null === (e = n._videoTrimmerRef.current) || void 0 === e ? void 0 : e.getTrimData()) ||
                    n.state.trimData
                o &&
                  i &&
                  (r(d()(d()({}, i), {}, { trimData: { endTime: o.endTime / 1e3, startTime: o.startTime / 1e3 } })),
                  a(i.id))
              }),
              M()(f()(n), '_renderSubtitlesTab', function () {
                var e = n.props,
                  t = e.history,
                  a = e.initialMediaId,
                  r = n._getCurrentMediaItem(),
                  i = (null == r ? void 0 : r.mediaMetadata) || { subtitles: void 0 },
                  s = null == i ? void 0 : i.subtitles
                return o.a.createElement(oe, {
                  history: t,
                  key: a,
                  mediaItem: r,
                  onChange: n._handleSubtitlesChange,
                  onRemove: n._handleSubtitlesRemove,
                  subtitles: s,
                })
              }),
              M()(f()(n), '_renderSensitiveMediaTab', function () {
                var e = n.state.sensitiveMediaWarning,
                  t = n._getCurrentMediaItem()
                return o.a.createElement(I.a, {
                  currentWarnings: e,
                  mediaItem: t,
                  onWarningChange: n._handleSensitiveWarningChange,
                })
              }),
              M()(f()(n), '_renderAppBarRightControl', function () {
                var e = n.props.isVideoTrimmerEnabled
                return o.a.createElement(
                  K.a,
                  { style: k.a.rightControl },
                  o.a.createElement(
                    $.a,
                    { onPress: n._handleEndEditingClick, size: 'small', style: k.a.saveButton, type: 'primaryFilled' },
                    e ? be : ye,
                  ),
                )
              }),
              M()(f()(n), '_getCurrentMediaItem', function () {
                var e = n.props,
                  t = e.initialMediaId
                return e.media.find(function (e) {
                  return e.id === t
                })
              }),
              M()(f()(n), '_handleEndEditingClick', function () {
                var e = n.props,
                  t = e.history,
                  a = e.isVideoTrimmerEnabled,
                  r = e.sensitiveMediaTabEnabled
                a && n._saveTrimData(), r && n._saveSensitiveMediaWarning(), t.goBack()
              }),
              M()(f()(n), '_saveSubtitles', function (e) {
                var t = n.props,
                  a = t.media,
                  r = t.setMediaMetadata,
                  i = n._getCurrentMediaItem(),
                  o = (null == i ? void 0 : i.mediaMetadata) || { subtitles: void 0 }
                a.forEach(function (t) {
                  r(t.id, d()(d()({}, o), {}, { subtitles: e }))
                })
              }),
              M()(f()(n), '_handleSubtitlesChange', function (e, t, a) {
                n.props.analytics.scribe({ element: 'subtitles_upload', action: 'add' }),
                  n._saveSubtitles({ lang: t, upload: e, displayName: a || _e })
              }),
              M()(f()(n), '_handleSubtitlesRemove', function () {
                n.props.analytics.scribe({ element: 'subtitles_upload', action: 'remove' }), n._saveSubtitles(void 0)
              }),
              M()(f()(n), '_saveSensitiveMediaWarning', function () {
                var e = n.props.setMediaMetadata,
                  t = n.state.sensitiveMediaWarning,
                  a = n._getCurrentMediaItem()
                a && e(a.id, d()(d()({}, a.mediaMetadata), {}, { sensitiveMediaWarning: t }))
              }),
              M()(f()(n), '_handleSensitiveWarningChange', function (e, t) {
                n.setState(function (a) {
                  var n = a.sensitiveMediaWarning
                  return t ? n.add(e) : n.delete(e), { sensitiveMediaWarning: n }
                })
              }),
              M()(f()(n), '_handleClickSensitiveMediaTab', function () {
                var e = n.props.analytics
                n._addTrimDataToState(), e.scribePageImpression()
              })
            var r = n._getCurrentMediaItem()
            if (null != r && r.mediaFile && r.mediaFile instanceof P.c) {
              var i = r.mediaFile,
                s = r.mediaMetadata,
                l = r.trimData,
                c = {
                  endTime: null != l && l.endTime ? 1e3 * l.endTime : 1e3 * i.duration,
                  startTime: null != l && l.startTime ? 1e3 * l.startTime : 0,
                }
              n.state = {
                trimData: c,
                sensitiveMediaWarning: (null == s ? void 0 : s.sensitiveMediaWarning) || new Set(),
              }
            } else n.props.history.replace('/')
            return n
          }
          return (
            m()(a, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    a = t.history,
                    n = t.isVideoTrimmerEnabled,
                    r = t.location,
                    i = t.sensitiveMediaTabEnabled,
                    s = this._getMemoizedCurrentTabMetadata(
                      null === (e = r.state) || void 0 === e ? void 0 : e.tab,
                      n,
                      i,
                    )
                  return o.a.createElement(
                    x.c,
                    { namespace: s.namespace },
                    o.a.createElement(
                      E.b,
                      {
                        backButtonType: 'back',
                        containerStyle: k.a.root,
                        documentTitle: s.title,
                        history: a,
                        rightControl: this._renderAppBarRightControl(),
                        title: s.title,
                      },
                      this._renderSegmentedControl(),
                    ),
                  )
                },
              },
              {
                key: '_getSegmentedControlLinks',
                value: function () {
                  var e,
                    t,
                    a = this.props,
                    n = a.isVideoTrimmerEnabled,
                    r = a.location,
                    i = a.sensitiveMediaTabEnabled,
                    s = this._getCurrentMediaItem(),
                    l = []
                  return (
                    n &&
                      (null == s || null === (e = s.originalMediaFile) || void 0 === e ? void 0 : e.isVideo) &&
                      l.push({
                        to: d()(d()({}, r), {}, { state: d()(d()({}, r.state), {}, { tab: Se }) }),
                        label: o.a.createElement(ce.a, null),
                        key: Se,
                        accessibilityLabel: Ce,
                        isActive: function () {
                          var e
                          return (null === (e = r.state) || void 0 === e ? void 0 : e.tab) === Se
                        },
                      }),
                    (null == s || null === (t = s.originalMediaFile) || void 0 === t ? void 0 : t.isVideo) &&
                      l.push({
                        to: d()(d()({}, r), {}, { state: d()(d()({}, r.state), {}, { tab: Ee }) }),
                        label: o.a.createElement(de.a, null),
                        key: Ee,
                        accessibilityLabel: ge,
                        isActive: function () {
                          var e
                          return (null === (e = r.state) || void 0 === e ? void 0 : e.tab) === Ee
                        },
                        onClick: this._addTrimDataToState,
                      }),
                    i &&
                      l.push({
                        to: d()(d()({}, r), {}, { state: d()(d()({}, r.state), {}, { tab: we }) }),
                        label: o.a.createElement(ue.a, null),
                        key: we,
                        accessibilityLabel: Me,
                        isActive: function () {
                          var e
                          return (null === (e = r.state) || void 0 === e ? void 0 : e.tab) === we
                        },
                        onClick: this._handleClickSensitiveMediaTab,
                      }),
                    l
                  )
                },
              },
            ]),
            a
          )
        })(o.a.Component)
      t.a = function (e) {
        var t,
          a,
          n = e.history,
          i = e.initialMediaId,
          c = e.media,
          d = o.a.useContext(s.a).featureSwitches,
          u =
            null === (t = e.media[0]) || void 0 === t || null === (a = t.mediaFile) || void 0 === a ? void 0 : a.isVideo
        if (c.length <= 0 || !i) return n.replace('/'), null
        if (u) {
          var p = d.isTrue('responsive_web_video_trimmer_enabled')
          return o.a.createElement(Te, r()({}, e, { isVideoTrimmerEnabled: p }))
        }
        return o.a.createElement(l.b, e)
      }
    },
    nV1z: function (e, t, a) {
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
                d: 'M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM5.25 20.033h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zM17 20.5H7v-7.75h10v7.75zm0-9.25H7V3.5h10v7.75zm3.25 8.783h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    'p+r5': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return H
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
        h = a('5Yy7'),
        m = a.n(h),
        v = a('2VqO'),
        f = a.n(v),
        g = a('KEM+'),
        b = a.n(g),
        y = (a('2G9S'), a('ERkP')),
        _ = a.n(y),
        C = a('38/B'),
        M = a('t62R'),
        E = a('/yvb'),
        S = a('piX5'),
        w = a('3XMw'),
        T = a.n(w),
        x = a('tI3i'),
        I = a.n(x),
        k = a('oQhu'),
        P = a('rHpw'),
        L = a('aITJ'),
        R = a('MWbm'),
        D = a('n5fo'),
        A = a('5emT'),
        O = a('Oib4'),
        V = a('WtWS'),
        F = a('ioan'),
        W = [
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
        j = function (e) {
          return e.length
        },
        B = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : j
          return t(e)
        },
        z = T.a.de540c32,
        U = T.a.b4abfdb3,
        H = (function (e) {
          m()(a, e)
          var t = f()(a)
          function a(e) {
            var n
            l()(this, a),
              (n = t.call(this, e)),
              b()(p()(n), '_blurOnBackspaceKeyUpForKaiOS', !1),
              b()(p()(n), '_isLabelLarge', function () {
                var e = n.state,
                  t = e.actualCount,
                  a = e.isFocused
                return !t && !a
              }),
              b()(
                p()(n),
                '_getTextInputStyle',
                Object(k.a)(function (e) {
                  return [K.root, !e && K.disabled]
                }),
              ),
              b()(p()(n), '_getTextInputType', function () {
                var e = n.props,
                  t = e.showPasswordVisibilityIcon,
                  a = e.type,
                  r = n.state.isPasswordRevealed
                return 'password' === a && t ? (r ? 'text' : 'password') : a
              }),
              b()(p()(n), '_calculateLength', function (e) {
                return B(e, n.props.calculateLength)
              }),
              b()(p()(n), '_shouldRenderDisplayCount', function () {
                var e = n.state.isFocused,
                  t = n._isFormInvalid()
                return Boolean((e || t) && n._getMaxDisplayCount())
              }),
              b()(p()(n), '_isInvalidNumber', function () {
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
              b()(p()(n), '_getActualCount', function (e) {
                var t = e.length
                return n._isInvalidNumber() && (t = 1), t
              }),
              b()(p()(n), '_handleBlur', function (e) {
                var t = n.props.onBlur,
                  a = e.currentTarget.value,
                  r = n._calculateLength(a),
                  i = n._getActualCount(a)
                n.setState({ isFocused: !1, displayCount: r, actualCount: i }), t && t(e)
              }),
              b()(p()(n), '_handleChange', function (e) {
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
              b()(p()(n), '_handleFocus', function () {
                var e = n.props.onFocus
                n.setState({ isFocused: !0 }), e && e()
              }),
              b()(p()(n), '_handleKeyPress', function (e) {
                var t = n.props,
                  a = t.multiline,
                  r = t.onKeyPress,
                  i = t.onSubmitEditing
                r && r(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || a || !i || (e.preventDefault(), i(e))
              }),
              b()(p()(n), '_handleKeyDown', function (e) {
                var t = n.props.onKeyDown,
                  a = 0 === n.state.displayCount
                L.b.isKaiOS() && 'Backspace' === e.key && a ? (n._blurOnBackspaceKeyUpForKaiOS = a) : t && t(e)
              }),
              b()(p()(n), '_handleKeyUp', function (e) {
                var t = n.props.onKeyUp
                L.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  n._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), n.blur()),
                  t && t(e)
              }),
              b()(p()(n), '_handlePasswordVisibilityClick', function (e) {
                n.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              b()(p()(n), '_setTextInputRef', function (e) {
                n._textInput = e
              }),
              b()(p()(n), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  a = e.maxLength,
                  n = e.onChange,
                  r = e.validLength,
                  i = !!n,
                  o = 'string' == typeof e.value,
                  s = 'string' == typeof t
                I()(
                  !(!s && o && !i),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  I()(!(a && r && r > a), 'Max length should be equal or greater than valid length.'),
                  I()(
                    !((void 0 !== a && a <= 0) || (void 0 !== r && r <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              b()(p()(n), '_exceedsValidLength', function (e) {
                var t = n._getMaxDisplayCount()
                return !!t && e > t
              }),
              b()(p()(n), '_getMaxDisplayCount', function () {
                return n.props.validLength || n.props.maxLength
              }),
              b()(p()(n), '_getAdjustedMaxLength', function () {
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
                actualCount: j(i),
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
                      R.a,
                      { style: [G.root, i] },
                      _.a.createElement(
                        R.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            S.a.border,
                            G.textInputFormStyle,
                            s && S.a.invalidBorderColor,
                            o && s && S.a.focusedBorderInvalid,
                            o && !s && S.a.focusedBorderValid,
                            !a && S.a.disabled,
                          ],
                        },
                        _.a.createElement(
                          R.a,
                          { style: G.textInputFormWrapper },
                          _.a.createElement(
                            R.a,
                            { style: G.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      _.a.createElement(
                        R.a,
                        { style: [G.sidePadding, G.underTextInputForm] },
                        _.a.createElement(
                          R.a,
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
                      M.b,
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
                      i = (e.style, e.type, e.validLength, o()(e, W))
                    return _.a.createElement(
                      R.a,
                      { style: K.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      _.a.createElement(
                        M.b,
                        { size: 'headline1', style: K.wrapper },
                        _.a.createElement(
                          F.a,
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
                          R.a,
                          { style: G.passwordVisibilityIconContainer },
                          _.a.createElement(E.a, {
                            accessibilityLabel: n ? U : z,
                            focusable: !0,
                            hoverLabel: { label: n ? U : z },
                            icon: n ? _.a.createElement(D.a, null) : _.a.createElement(A.a, null),
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
                      R.a,
                      { accessibilityLiveRegion: 'polite' },
                      _.a.createElement(
                        M.b,
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
                      R.a,
                      { accessibilityLiveRegion: 'assertive' },
                      _.a.createElement(
                        M.b,
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
                      n = t && T.a.ia24dc8c(t),
                      r = T.a.ia24dc8c(e)
                    return _.a.createElement(
                      R.a,
                      { accessibilityLiveRegion: 'polite', style: [G.textInputHeaderItem, G.displayCount] },
                      _.a.createElement(
                        M.b,
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
                      ? _.a.createElement(O.a, { style: [G.validationIcon, S.a.invalidColor] })
                      : _.a.createElement(V.a, { style: [G.validationIcon, S.a.validColor] })
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
                      r = 'string' == typeof n ? B(n, a) : 0
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
      b()(H, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (H.propTypes = {})
      var K = P.a.create(function (e) {
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
        G = P.a.create(function (e) {
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
  },
])
//# sourceMappingURL=WIPED
