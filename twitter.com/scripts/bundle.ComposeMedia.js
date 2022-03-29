;(window.webpackJsonp = window.webpackJsonp || []).push([
  [45],
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
        c = a.n(s),
        l = a('Y9Ll'),
        d = a.n(l),
        u = a('1Pcy'),
        m = a.n(u),
        p = a('5Yy7'),
        h = a.n(p),
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
        E = (a('TJCb'), a('DZ+c'), a('xZGM')),
        M = a('GTeL'),
        T = a('3XMw'),
        C = a.n(T),
        S = a('rHpw'),
        w = S.a.create(function (e) {
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
        x = 'endEditingButton',
        k = 'altTextEducationSheetPrimaryAction',
        R = a('MWbm'),
        A = a('t62R'),
        P = a('p+r5'),
        D = C.a.feabf2a0,
        L = C.a.e36287c6,
        O = C.a.cf565d08,
        j = (function (e) {
          h()(a, e)
          var t = f()(a)
          function a() {
            var e
            c()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(m()(e), '_renderInputHelperText', function () {
                var t = e.props.onShowEducation
                return t ? _.a.createElement(A.b, { color: 'link', onPress: t, withInteractiveStyling: !0 }, O) : null
              }),
              b()(m()(e), '_handleChange', function (t) {
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
                    R.a,
                    { style: w.root },
                    _.a.createElement(
                      R.a,
                      { style: w.attachmentContainer },
                      _.a.createElement(M.a, { mediaItem: n, orientedImage: r }),
                      _.a.createElement(P.a, {
                        accessibilityLabel: D,
                        autoFocus: t,
                        helperText: this._renderInputHelperText(),
                        label: L,
                        maxLength: a,
                        maxNumberOfLines: 6,
                        multiline: !0,
                        name: 'altTextInput',
                        numberOfLines: 2,
                        onChange: this._handleChange,
                        style: w.formTextInput,
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
        U = a('rxPX'),
        F = function (e, t) {
          return Object(E.D)(e, E.a)
        },
        W = Object(U.a)()
          .propsFromState(function () {
            return { showEducationOnMount: F }
          })
          .propsFromActions(function () {
            return { addFlag: E.z }
          })
          .withAnalytics(),
        B = a('feu+'),
        V = C.a.ffe9ec3a,
        z = C.a.j063b261,
        G = C.a.e57144f0,
        H = C.a.f9f9210c,
        K = (function (e) {
          h()(a, e)
          var t = f()(a)
          function a() {
            var e
            c()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(m()(e), 'state', { showAltTextEducationSheet: !1 }),
              b()(m()(e), '_handleOpenEducationPrompt', function () {
                var t = e.props.analytics
                e.setState({ showAltTextEducationSheet: !0 }), t.scribe({ component: 'education', action: 'click' })
              }),
              b()(m()(e), '_handleCloseEducationPrompt', function () {
                e.setState({ showAltTextEducationSheet: !1 })
              }),
              b()(m()(e), '_handleEducationPromptPrimaryAction', function () {
                var t = e.props.analytics
                e._handleCloseEducationPrompt(),
                  t.scribe({ component: 'education', element: 'alt_text_button', action: 'click' })
              }),
              b()(m()(e), '_handleEducationPromptSecondaryAction', function () {
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
                    t(E.a))
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
                    R.a,
                    { style: N.root },
                    i
                      ? _.a.createElement(B.a, {
                          actionLabel: G,
                          headline: V,
                          onAction: this._handleEducationPromptPrimaryAction,
                          onClose: this._handleCloseEducationPrompt,
                          onSecondaryAction: this._handleEducationPromptSecondaryAction,
                          primaryButtonTestID: k,
                          secondaryActionLabel: H,
                          subtext: z,
                        })
                      : null,
                    _.a.createElement(j, {
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
        N = S.a.create(function (e) {
          return { root: { flexGrow: 1 } }
        }),
        q = W(K),
        Q = a('jHSc'),
        X = a('EeFI'),
        J = a('7JQg'),
        Y = a('9Q4p'),
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
        ce = a('Mbn/'),
        le = a('zIWA'),
        de = a('1auM'),
        ue = a('eYns'),
        me = { section: 'alt_text' },
        pe = { section: 'crop' },
        he = { section: 'sensitive_media' },
        ve = C.a.e070024a,
        fe = C.a.i2209530,
        ge = C.a.i7d24b36,
        be = C.a.f96a38a2,
        ye = C.a.hac7c548,
        _e = C.a.e3dbfba3,
        Ee = C.a.dd4a83a5,
        Me = { crop: 'crop', altText: 'alt_text', sensitiveMedia: 'sensitive_media' },
        Te = (function (e) {
          h()(a, e)
          var t = f()(a)
          function a(e) {
            var n
            c()(this, a),
              (n = t.call(this, e)),
              b()(m()(n), '_cropper', _.a.createRef()),
              b()(
                m()(n),
                '_getMemoizedTabMetadata',
                Object(te.a)(function (e, t) {
                  return t && e === Me.sensitiveMedia
                    ? { namespace: he, title: Ee, renderer: n._renderSensitiveMediaTab }
                    : e === Me.altText
                    ? { namespace: me, title: _e, renderer: n._renderAltTextTab }
                    : { namespace: pe, title: ye, renderer: n._renderCropTab }
                }),
              ),
              b()(m()(n), '_renderTabContent', function (e) {
                var t,
                  a = n.props,
                  r = a.location,
                  i = a.sensitiveMediaTabEnabled,
                  o = n._getMemoizedTabMetadata(e, i),
                  s = !(null !== (t = r.state) && void 0 !== t && t.hideTabs),
                  c = s ? n._getTabLinks(e) : [],
                  l = o.renderer()
                return s && c.length > 1
                  ? _.a.createElement(
                      _.a.Fragment,
                      null,
                      _.a.createElement($.a, { accessibilityLabel: ve, links: c }),
                      _.a.createElement(R.a, { style: Z.a.segmentedControlChildren }, l),
                    )
                  : l
              }),
              b()(m()(n), '_renderAltTextTab', function () {
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
              b()(m()(n), '_renderCropTab', function () {
                var e = n.state,
                  t = e.cropData,
                  a = e.currentMediaId,
                  r = n._getCurrentMediaItem()
                return _.a.createElement(X.a, {
                  defaultCropData: t.get(a),
                  key: a,
                  media: r,
                  ref: n._cropper,
                  withAspectRatioOptions: !0,
                })
              }),
              b()(m()(n), '_renderSensitiveMediaTab', function () {
                var e = n.state,
                  t = e.currentMediaId,
                  a = e.mediaMetadata,
                  r = e.orientedImage,
                  i = n._getCurrentMediaItem(),
                  o = a[t] && a[t].sensitiveMediaWarning
                return _.a.createElement(Y.a, {
                  currentWarnings: o,
                  key: t,
                  mediaItem: i,
                  onWarningChange: n._handleSensitiveWarningChange,
                  orientedImage: r.get(t),
                })
              }),
              b()(m()(n), '_renderAppBarRightControl', function () {
                var e = n.state.isProcessing,
                  t = n._getNextMediaIndex(1),
                  a = n._getNextMediaIndex(-1)
                return _.a.createElement(
                  R.a,
                  { style: Z.a.rightControl },
                  n._hasMediaAtIndex(a) || n._hasMediaAtIndex(t)
                    ? _.a.createElement(
                        R.a,
                        { style: [Z.a.rightControl, Z.a.leftRightButtons] },
                        _.a.createElement(ee.a, {
                          accessibilityLabel: be,
                          disabled: !n._hasMediaAtIndex(a),
                          icon: _.a.createElement(oe.a, null),
                          onPress: n._handleClickToMediaAtIndex(a),
                          size: 'small',
                          style: Z.a.prevButton,
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
                      style: Z.a.saveButton,
                      testID: x,
                      type: 'primaryFilled',
                    },
                    fe,
                  ),
                )
              }),
              b()(m()(n), '_handleCancelEditingClick', function (e) {
                n._scribeWithNamespace({ action: 'cancel' }), e()
              }),
              b()(m()(n), '_handleClickTab', function (e) {
                var t = n.props.analytics
                n._handleSaveCropData(),
                  n._scribeWithNamespace({ element: e, action: 'click' }),
                  t.scribePageImpression()
              }),
              b()(m()(n), '_getCurrentMediaItem', function () {
                var e = n.props.media,
                  t = n.state.currentMediaId
                return e.find(function (e) {
                  return e.id === t
                })
              }),
              b()(m()(n), '_getNextMediaIndex', function (e) {
                var t = n.props.media,
                  a = n._getCurrentMediaItem()
                return t.indexOf(a) + e
              }),
              b()(m()(n), '_hasMediaAtIndex', function (e) {
                var t = n.props.media
                return e >= 0 && e < t.length
              }),
              b()(m()(n), '_handleClickToMediaAtIndex', function (e) {
                return function () {
                  var t = n.props.media
                  if (n._hasMediaAtIndex(e)) {
                    n._handleSaveCropData()
                    var a = t[e].id
                    n.setState({ currentMediaId: a })
                  }
                }
              }),
              b()(m()(n), '_saveMediaMetadata', function () {
                var e = n.props,
                  t = e.media,
                  a = e.setMediaMetadata,
                  r = n.state.mediaMetadata
                t.forEach(function (e) {
                  a(e.id, r[e.id])
                })
              }),
              b()(m()(n), '_handleEndEditingClick', function () {
                var e = n.props.history,
                  t = n._cropper && n._cropper.current,
                  a = n.state.cropData
                if (t || a.size) {
                  var r = n.props,
                    i = r.media,
                    s = r.processMedia,
                    c = r.updateMediaUpload,
                    l = n.state.currentMediaId
                  n.setState({ isProcessing: !0 })
                  var d = t ? re([].concat(o()(a), [[l, t.getCropData()]])) : a,
                    u = i.map(function (e) {
                      return d.get(e.id) ? (c({ id: e.id, cropData: d.get(e.id) }), s(e.id)) : Promise.resolve()
                    })
                  Promise.all(u).then(function () {
                    n._scribeWithNamespace({ action: 'done' })
                  })
                }
                n._saveMediaMetadata(), e.goBack()
              }),
              b()(m()(n), '_handleAltTextChange', function (e) {
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
              b()(m()(n), '_handleSensitiveWarningChange', function (e, t) {
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
              b()(m()(n), '_handleSaveCropData', function () {
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
              b()(m()(n), '_scribeWithNamespace', function (e) {
                var t = n.props,
                  a = t.analytics,
                  i = t.sensitiveMediaTabEnabled,
                  o = n._getCurrentTab(),
                  s = n._getMemoizedTabMetadata(o, i)
                a.scribe(r()(r()({}, s.namespace), e))
              }),
              b()(m()(n), '_getMediaMetadata', function (e) {
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
              l = n._getMediaMetadata(s)
            return (
              (n.state = {
                cropData: new Map(),
                isProcessing: !1,
                mediaMetadata: l,
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
                    J.c,
                    { namespace: r.namespace },
                    _.a.createElement(
                      Q.b,
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
                    c = this._getCurrentMediaItem(),
                    l = []
                  return (
                    null != c &&
                      null !== (t = c.originalMediaFile) &&
                      void 0 !== t &&
                      t.isImage &&
                      l.push({
                        to: r()(r()({}, o), {}, { state: r()(r()({}, o.state), {}, { tab: Me.crop }) }),
                        label: _.a.createElement(ce.a, null),
                        key: Me.crop,
                        accessibilityLabel: ye,
                        isActive: function () {
                          return e === Me.crop
                        },
                        onClick: function () {
                          return i.scribePageImpression()
                        },
                      }),
                    l.push({
                      to: r()(r()({}, o), {}, { state: r()(r()({}, o.state), {}, { tab: Me.altText }) }),
                      label: _.a.createElement(A.b, { weight: 'bold' }, 'ALT'),
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
                      l.push({
                        to: r()(r()({}, o), {}, { state: r()(r()({}, o.state), {}, { tab: Me.sensitiveMedia }) }),
                        label: _.a.createElement(le.a, null),
                        key: Me.sensitiveMedia,
                        accessibilityLabel: Ee,
                        isActive: function () {
                          return e === Me.sensitiveMedia
                        },
                        onClick: function () {
                          return a._handleClickTab('sensitive_media_tab')
                        },
                      }),
                    l
                  )
                },
              },
            ]),
            a
          )
        })(_.a.Component)
      t.b = Te
    },
    '2prg': function (e, t, a) {
      var n = a('ZORK')
      e.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)
    },
    '6vad': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return p
      })
      a('yH/f')
      var n = a('ERkP'),
        r = a.n(n),
        i = a('t62R'),
        o = a('EHV7'),
        s = a('rHpw'),
        c = s.a.create(function (e) {
          return {
            icon: {
              color: e.colors.primary,
              height: e.fontSizes.title4,
              paddingRight: e.spaces.space12,
              width: e.fontSizes.title4,
            },
          }
        }),
        l = a('7Mjr'),
        d = a('I4+6'),
        u = a('cm6r'),
        m = a('MWbm'),
        p = Object.freeze({ TopicFilled: 'TOPIC_FILLED' })
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
          v = e.rightControl,
          f = e.style,
          g = e.subtext,
          b = e.testID,
          y = e.text,
          _ = (function (e) {
            switch (e) {
              case p.TopicFilled:
                return r.a.createElement(o.a, { style: c.icon })
              default:
                return null
            }
          })(t),
          E = g ? null : h.withSubtext,
          M = d.a.generate({
            backgroundColor: s.a.theme.colors.gray0,
            color: s.a.theme.colors.cellBackground,
            customFocusBackgroundColor: s.a.theme.colors.gray0,
            customHoverBackgroundColor: s.a.theme.colors.gray0,
            customPressedBackgroundColor: s.a.theme.colors.gray0,
          })
        return r.a.createElement(
          u.a,
          {
            interactiveStyles: a ? M : null,
            link: null == a ? void 0 : a.url,
            nativeID: n,
            style: [h.root, f],
            testID: b,
          },
          r.a.createElement(
            m.a,
            { accessibilityLevel: 2, accessibilityRole: 'heading', style: h.mainContent },
            r.a.createElement(m.a, { style: h.icon }, _),
            r.a.createElement(
              i.b,
              { numberOfLines: 3, size: 'headline1', style: E, weight: 'heavy', withHashflags: !0 },
              y,
            ),
            r.a.createElement(
              m.a,
              { style: h.rightControlGroup },
              a ? r.a.createElement(m.a, { style: E }, r.a.createElement(l.a, { style: h.iconArrow })) : null,
              v ? r.a.createElement(m.a, null, v) : null,
            ),
          ),
          g
            ? r.a.createElement(
                i.b,
                { color: 'gray700', numberOfLines: 2, size: 'subtext2', style: h.subtext, withHashflags: !0 },
                g,
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
        c = a('k/Ka'),
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
        c = a('MWbm'),
        l = a('PbQQ'),
        d = a('6vad'),
        u = a('e0ey'),
        m = a('rHpw'),
        p = a('ZkMC'),
        h = s.a.j9cf595f,
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
          m = l.b.useOpaqueIdentifier(),
          y = r.a.createElement(i.a, { mediaItem: a, orientedImage: o })
        return r.a.createElement(
          c.a,
          { style: _.root },
          r.a.createElement(
            c.a,
            { style: _.modalContainer },
            null != t && t.size
              ? r.a.createElement(
                  p.a,
                  { revealableTombstoneConfig: p.c, sensitiveMediaWarnings: t, withRoundedCorners: !1 },
                  y,
                )
              : y,
            r.a.createElement(d.b, { nativeID: m, subtext: v, text: h }),
            r.a.createElement(
              c.a,
              { accessibilityLabelledBy: m, accessibilityRole: 'group' },
              s.map(function (e) {
                var a = e.label,
                  i = e.value
                return r.a.createElement(u.a, { checked: t && t.has(i), key: i, label: a, name: i, onChange: n })
              }),
            ),
          ),
        )
      }
      var _ = m.a.create(function (e) {
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
          return A
        }),
        a.d(t, 'f', function () {
          return D
        }),
        a.d(t, 'd', function () {
          return O
        }),
        a.d(t, 'g', function () {
          return j
        }),
        a.d(t, 'e', function () {
          return F
        }),
        a.d(t, 'i', function () {
          return B
        }),
        a.d(t, 'j', function () {
          return V
        }),
        a.d(t, 'k', function () {
          return z
        }),
        a.d(t, 'h', function () {
          return G
        }),
        a.d(t, 'a', function () {
          return K
        }),
        a.d(t, 'b', function () {
          return q
        }),
        a.d(t, 'c', function () {
          return J
        })
      var n = a('RhWx'),
        r = a.n(n),
        i = a('ddV6'),
        o = a.n(i),
        s = a('m3Bd'),
        c = a.n(s),
        l = a('KEM+'),
        d = a.n(l),
        u = a('yiKp'),
        m = a.n(u),
        p =
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
        h = a('xPna'),
        v = a('oEOe'),
        f = a('xCUF'),
        g = a('ude7'),
        b = a('07FG'),
        y = a('Ssj5'),
        _ = a('fEA7'),
        E = a.n(_),
        M = a('uKEd'),
        T = a('lnti'),
        C = a('/NU0'),
        S = [
          'senderId',
          'cardUrl',
          'conversationId',
          'localMediaId',
          'recipients',
          'requestId',
          'tweetAttachment',
          'quickReply',
        ],
        w = 'dmComposer',
        I = {}
      var x = function (e) {
          var t = e.conversation_id,
            a = e.id,
            n = e.localMediaId,
            r = e.recipient_ids,
            i = e.sender_id,
            o = e.text,
            s = e.attachment,
            c = void 0 === s ? {} : s,
            l = e.error,
            d = Date.now().toString()
          return {
            conversation_id: t,
            recipient_ids: r,
            error: l,
            id: a,
            is_draft: !0,
            message_data: { attachment: c, localMediaId: n, sender_id: i, text: o, time: d },
            type: 'message',
            time: d,
          }
        },
        k = function (e) {
          return function (t, a, n) {
            var i = n.api,
              s = e || {},
              l = s.senderId,
              d = s.cardUrl,
              u = s.conversationId,
              y = s.localMediaId,
              _ = s.recipients,
              w = void 0 === _ ? [] : _,
              I = s.requestId,
              k = void 0 === I ? E.a.v1() : I,
              R = s.tweetAttachment,
              A = s.quickReply,
              P = c()(s, S)
            t(Z(u))
            var D = a(),
              L = y || W(a(), u),
              j = p.k(D, L),
              U = o()(j, 1)[0] || {},
              F = U.mediaFile,
              B = U.mediaMetadata,
              V = w.length > 0 && w.join(','),
              z = {}
            F && F.isGif
              ? (z.extraInitParams = '&media_category=dm_gif')
              : F && F.isVideo && (z.extraInitParams = '&media_category=dm_video')
            var H = p.p(L, z),
              K = [t(H)],
              N = (G(D, u) || {}).found_media_origin
            return (
              F && F.isGif && K.push(Object(g.a)(F)),
              Promise.all(K).then(
                function (a) {
                  var n = o()(a, 2),
                    s = o()(n[0], 1)[0],
                    c = n[1],
                    g = (null == B ? void 0 : B.altText) || (null == B ? void 0 : B.defaultAltText),
                    y = !!g
                  return (
                    s && (N || y)
                      ? t(p.m(m()({ media_id: s.uploadId, found_media_origin: N }, !!y && { alt_text: { text: g } })))
                      : Promise.resolve()
                  ).then(
                    function () {
                      var a = (R || {}).id_str,
                        n = {}
                      if (s) {
                        var o = s.mediaFile,
                          p = void 0 === o ? {} : o,
                          g = {
                            original_info: { width: p.width, height: p.height },
                            sizes: [{ h: p.height, w: p.width, resize: 'fit' }],
                          }
                        p.isImage
                          ? (n.photo = m()(m()({}, g), {}, { media_url_https: p.url }))
                          : p.isGif
                          ? (n.animated_gif = m()(m()({}, g), {}, { media_url_https: c, type: 'animated_gif' }))
                          : p.isVideo && (n.video = m()(m()({}, g), {}, { media_url_https: p.url, type: 'video' }))
                      } else R && (n.tweet = { status: a })
                      var y = (s || {}).uploadId,
                        _ = x({
                          attachment: n,
                          conversation_id: u,
                          id: k,
                          recipient_ids: V,
                          sender_id: l,
                          text: e.text,
                        }),
                        E = m()(
                          m()(
                            m()(m()({}, P), Object(b.a)(d) && { card_uri: d }),
                            {},
                            { conversation_id: u },
                            !a && { media_id: y },
                          ),
                          {},
                          { recipient_ids: V, request_id: k, tweet_id: a },
                        )
                      A &&
                        ((E['quick_reply_response[options][id]'] = A.id),
                        (E['quick_reply_response[options][selected_id]'] = A.selected_id))
                      var S = Object(T.a)([
                        ee(u),
                        { type: f.c.REQUEST },
                        { type: 'rweb/dmComposer/SEND_MESSAGE_REQUEST' },
                        u && Object(M.b)(u, k, _),
                      ])
                      return (
                        t(S),
                        i.DirectMessages.sendMessage(E).then(
                          function (a) {
                            var n = a.entities,
                              i = n.cards,
                              o = n.entries,
                              s = n.tweets,
                              c = n.users,
                              l = a.result.conversations
                            Object(C.a)(L) && t(J(u, L))
                            var d = Object(T.a)(
                              [{ type: f.c.SUCCESS }].concat(
                                r()(Object(h.a)({ conversations: l, entries: o, users: c, tweets: s, cards: i })),
                                [{ type: 'rweb/dmComposer/SEND_MESSAGE_SUCCESS' }, u && Object(M.j)(u, k, e), O(u)],
                              ),
                            )
                            return t(d), Promise.resolve(Object.values(a.entities.entries)[0].conversation_id)
                          },
                          function (a) {
                            var r = x({
                                attachment: n,
                                conversation_id: u,
                                error: !0,
                                id: k,
                                localMediaId: L,
                                recipient_ids: V,
                                sender_id: l,
                                text: e.text,
                              }),
                              i = Object(T.a)([
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
                  return t(Object(T.a)([Object(C.a)(L) && J(u, L), ae(u)])), Promise.reject(e)
                },
              )
            )
          }
        },
        R = function (e, t) {
          return e.dmComposer[t]
        },
        A = function (e, t) {
          var a = R(e, t)
          return a ? a.text : null
        },
        P = 'rweb/dmComposer/SAVE_TEXT',
        D = function (e, t) {
          return { type: P, conversationId: e, text: t }
        },
        L = 'rweb/dmComposer/REMOVE_TEXT',
        O = function (e) {
          return { type: L, conversationId: e }
        },
        j = function (e, t) {
          var a = R(e, t)
          return a ? a.cardUrl : null
        },
        U = 'rweb/dmComposer/SAVE_CARD_URL',
        F = function (e, t) {
          return { type: U, conversationId: e, cardUrl: t }
        },
        W = function (e, t) {
          var a = R(e, t)
          return a ? a.mediaId : null
        },
        B = function (e, t) {
          var a = p.k(e, W(e, t))
          return a.length > 0 ? a[0] : null
        },
        V = function (e, t) {
          var a = R(e, t)
          return !!a && a.isUploading
        },
        z = function (e, t) {
          return p.l(e, W(e, t))
        },
        G = function (e, t) {
          var a = R(e, t)
          return a ? a.gifMetadata : null
        },
        H = 'rweb/dmComposer/ADD_MEDIA',
        K = function (e, t, a) {
          return { payload: { isUploading: !1, mediaId: o()(t, 1)[0], gifMetadata: a }, type: H, conversationId: e }
        },
        N = 'rweb/dmComposer/CANCEL_UPLOAD',
        q = function (e) {
          return { type: N, conversationId: e }
        },
        Q = 'rweb/dmComposer/REMOVE_MEDIA',
        X = function (e) {
          return { type: Q, conversationId: e }
        },
        J = function (e, t) {
          return function (a) {
            a(p.i(t)), a([q(e), X(e)])
          }
        },
        Y = 'rweb/dmComposer/UPLOAD_REQUEST',
        Z = function (e) {
          return { type: Y, conversationId: e }
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
        d()({}, w, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.conversationId || 'new_group'
          switch (t.type) {
            case H:
              var n = e[a] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return m()(m()({}, e), {}, d()({}, a, m()(m()({}, n), t.payload)))
            case Y:
              var r = e[a] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return m()(m()({}, e), {}, d()({}, a, m()(m()({}, r), {}, { isUploading: !0 })))
            case N:
              var i = e[a] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return m()(m()({}, e), {}, d()({}, a, m()(m()({}, i), {}, { isUploading: !1 })))
            case te:
            case $:
            case Q:
              var o = e[a] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return m()(
                m()({}, e),
                {},
                d()({}, a, m()(m()({}, o), {}, { isUploading: !1, mediaId: null, gifMetadata: void 0 })),
              )
            case P:
              var s = e[a] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return m()(m()({}, e), {}, d()({}, a, m()(m()({}, s), {}, { text: t.text })))
            case U:
              var c = e[a] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return m()(m()({}, e), {}, d()({}, a, m()(m()({}, c), {}, { cardUrl: t.cardUrl })))
            case L:
              var l = e[a] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return m()(m()({}, e), {}, d()({}, a, m()(m()({}, l), {}, { text: null })))
            default:
              return e
          }
        }),
      )
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
        c = a('kGix'),
        l = a('ikiw'),
        d = a('Ssj5'),
        u = a('RqPI'),
        m = 'availableLanguages',
        p = 'rweb/'.concat(m),
        h = s.a(p, 'FETCH_AVAILABLE_LANGUAGES'),
        v = { fetchStatus: c.a.NONE, languages: [] }
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
          case h.REQUEST:
            return o()(o()({}, e), {}, { fetchStatus: c.a.LOADING })
          case h.FAILURE:
            return o()(o()({}, e), {}, { error: t.payload, fetchStatus: c.a.FAILED })
          case h.SUCCESS:
            return o()(o()({}, e), {}, { languages: t.payload.sort(r), fetchStatus: c.a.LOADED })
          default:
            return e
        }
      }
      d.a.register(r()({}, m, f))
      var g = function (e) {
          return e[m].languages
        },
        b = function (e, t) {
          var a = Object(l.c)(t).toLowerCase(),
            n = e[m].languages.find(function (e) {
              return e.code === a
            })
          return n ? n.name : null
        },
        y = function () {
          return function (e, t) {
            return t()[m].fetchStatus === c.a.LOADED ? Promise.resolve() : e(_())
          }
        },
        _ = function (e) {
          return function (t, a, n) {
            var r = n.api
            return s.b(t, { params: e, meta: { lang: Object(u.p)(a()) }, request: r.FeatureSwitch.fetchLanguages })({
              actionTypes: h,
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
        c = a('Qwev'),
        l = a('rHpw'),
        d = a('U+bB'),
        u = a('MWbm'),
        m = o.a.gff1f69e
      var p = l.a.create(function (e) {
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
          { style: p.mediaPreviewWrapper },
          void 0 === a && t
            ? r.a.createElement(s.a, {
                imageResizeMode: 'contain',
                mediaItem: t,
                style: p.mediaContainer,
                withCloseButton: !1,
              })
            : a
            ? r.a.createElement(d.a, { resizeMode: 'contain', source: a.url, style: p.image })
            : r.a.createElement(c.a, { accessibilityLabel: m, style: p.activityIndicator }),
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
        c = a.n(s),
        l = a('N+ot'),
        d = a.n(l),
        u = a('5Yy7'),
        m = a.n(u),
        p = a('2VqO'),
        h = a.n(p),
        v = a('KEM+'),
        f = a.n(v),
        g = (a('KqXw'), a('MvUL'), a('ERkP')),
        b = a.n(g),
        y = (a('KOtZ'), a('7x/C'), a('2G9S'), a('xVN5')),
        _ = a('rxPX'),
        E = a('AspN'),
        M = function (e, t) {
          var a, n
          return (
            null === (a = t.location) || void 0 === a || null === (n = a.state) || void 0 === n
              ? void 0
              : n.showAllMedia
          )
            ? T(e)
            : C(e)
        },
        T = function (e) {
          var t = y.k(e).reduce(function (e, t) {
            return e.concat(t.mediaIds)
          }, [])
          return Object(E.k)(e, t)
        },
        C = function (e) {
          var t = y.i(e),
            a = y.k(e)[t]
          return Object(E.k)(e, a.mediaIds)
        },
        S = function (e, t) {
          var a, n
          return null === (a = t.location) || void 0 === a || null === (n = a.state) || void 0 === n
            ? void 0
            : n.mediaId
        },
        w = Object(_.a)()
          .propsFromState(function () {
            return { initialMediaId: S, media: M }
          })
          .propsFromActions(function () {
            return { setMediaMetadata: E.n, processMedia: E.f, updateMediaUpload: E.o }
          })
          .withAnalytics({ page: 'tabbed_media' }),
        I = a('jFmo'),
        x = a('v6aA'),
        k = (function (e) {
          m()(a, e)
          var t = h()(a)
          function a(e, n) {
            var r
            o()(this, a), (r = t.call(this, e, n))
            var i = e.history,
              s = e.initialMediaId
            return e.media.length <= 0 || !s ? (i.replace('/'), d()(r)) : r
          }
          return (
            c()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.context.featureSwitches.isTrue('sensitive_tweet_warnings_enabled')
                  return b.a.createElement(I.a, r()({}, this.props, { sensitiveMediaTabEnabled: e }))
                },
              },
            ]),
            a
          )
        })(b.a.Component)
      f()(k, 'contextType', x.a)
      t.default = w(k)
    },
    'Mbn/': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('Lsrn'),
        c = a('k/Ka'),
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
        c = a.n(s),
        l = a('1Pcy'),
        d = a.n(l),
        u = a('5Yy7'),
        m = a.n(u),
        p = a('2VqO'),
        h = a.n(p),
        v = a('KEM+'),
        f = a.n(v),
        g = (a('2G9S'), a('ERkP')),
        b = a.n(g),
        y = a('9Xij'),
        _ = a('Zl35'),
        E = a('epkG'),
        M = a('I4+6'),
        T = a('cm6r'),
        C = a('ZvMt'),
        S = a('rHpw'),
        w = a('97Jx'),
        I = a.n(w),
        x = a('CHgo')
      a('6U7i'), a('Ef13'), a('Jhhs'), a('z84I')
      function k(e) {
        var t = Math.round(e / 1e3)
        if (t < 10) return '0:0'.concat(t)
        if (t < 60) return '0:'.concat(t)
        var a = Math.floor(t / 60),
          n = ''.concat(t - 60 * a).padStart(2, '0')
        return ''.concat(a, ':').concat(n)
      }
      var R = function (e, t) {
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
        A = function (e, t) {
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
          return { intervalStrings: R(n, o), numSubintervals: i, numIntervals: r }
        },
        P = a('3XMw'),
        D = a.n(P),
        L = (a('hCOa'), a('87if'), a('t62R')),
        O = a('shC7'),
        j = a('MWbm')
      var U = S.a.create(function (e) {
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
        F = function (e) {
          var t = e.duration,
            a = e.trimmerWidth,
            n = A(t, a),
            r = n.intervalStrings,
            i = n.numIntervals,
            o = n.numSubintervals,
            s = O.a.getConstants().isRTL ? U.borderRight : U.borderLeft,
            c = (100 * Math.ceil(i)) / i
          return b.a.createElement(
            j.a,
            { style: U.root },
            b.a.createElement(
              j.a,
              { style: [U.intervalRow, U.intervalRowStrings, { width: ''.concat(c, '%') }] },
              r.map(function (e, t) {
                return b.a.createElement(
                  L.b,
                  {
                    color: 'gray700',
                    key: t,
                    size: 'subtext3',
                    style: [{ width: ''.concat(0 === t ? a / i / 2 : a / i, 'px') }, U.intervalStrings],
                  },
                  0 !== t ? e : null,
                )
              }),
            ),
            b.a.createElement(
              j.a,
              { style: [U.intervalRow, U.intervalRowTicks] },
              r.map(function (e, t) {
                return b.a.createElement(
                  j.a,
                  { key: t, style: [{ width: ''.concat(100 / i, '%') }, U.bigTicks, 0 !== t && s] },
                  Array.from({ length: o }, function (e, t) {
                    return b.a.createElement(j.a, { key: t, style: [U.smallTicks, 0 !== t && s] })
                  }),
                )
              }),
            ),
          )
        },
        W = a('Wms4'),
        B = (a('jQ3i'), a('x4t0'), a('uFXj'), a('oLZl')),
        V = 'decrease',
        z = 'increase',
        G = 'left',
        H = 'right',
        K = a('7ep7'),
        N = D.a.a394f904,
        q = D.a.f42c0c8f,
        Q = D.a.i667afe8,
        X = D.a.c0bdd345,
        J = (function (e) {
          m()(a, e)
          var t = h()(a)
          function a() {
            var e
            o()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              f()(
                d()(e),
                '_panResponders',
                K.a.create({
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
                ;(i || o) && (t.preventDefault(), n(i ? z : V, a))
              }),
              f()(d()(e), '_handleOnKeyUp', function (t) {
                var a = e.props.onKeyUp,
                  n = t.key
                ;[B.a.ArrowDown, B.a.ArrowLeft, B.a.ArrowRight, B.a.ArrowUp].includes(n) && a()
              }),
              f()(d()(e), '_generateBorderStyles', function () {
                var t = e.props.side,
                  a = O.a.getConstants().isRTL
                return t === G
                  ? a
                    ? Y.rightScrubberRadius
                    : Y.leftScrubberRadius
                  : t === H
                  ? a
                    ? Y.leftScrubberRadius
                    : Y.rightScrubberRadius
                  : void 0
              }),
              e
            )
          }
          return (
            c()(a, [
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
                    T.a,
                    I()(
                      {
                        accessibilityLabel: i === G ? Q : q,
                        accessibilityRole: 'adjustable',
                        accessibilityValue: {
                          max: X(n / 1e3),
                          min: X(r / 1e3),
                          now: X(a / 1e3),
                          text: N({ seconds: X(a / 1e3) }),
                        },
                        focusable: !0,
                        interactiveStyles: M.a.generate({
                          backgroundColor: S.a.theme.colors.primary,
                          color: S.a.theme.colors.primary,
                          customFocusBackgroundColor: S.a.theme.colors.primary,
                          customHoverBackgroundColor: S.a.theme.colors.primary,
                          customPressedBackgroundColor: S.a.theme.colors.primary,
                          insetFocusRing: !0,
                        }),
                        onKeyDown: function (t) {
                          return e._handleOnKeyDown(t, i)
                        },
                        onKeyUp: function (t) {
                          return e._handleOnKeyUp(t)
                        },
                        style: [Y.root, this._generateBorderStyles(), o],
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
                        b.a.createElement(j.a, {
                          style: [Y.trimmerScrubberGrips, (t || a || n) && Y.trimmerScrubberGripsOpacity],
                        }),
                        b.a.createElement(j.a, {
                          style: [Y.trimmerScrubberGrips, (t || a || n) && Y.trimmerScrubberGripsOpacity],
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
        Y = S.a.create(function (e) {
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
        Z = J,
        $ = D.a.af2a65d8,
        ee = D.a.d46781ae,
        te = D.a.e8733ed8,
        ae = D.a.j3d49e93,
        ne = function (e, t) {
          return ''.concat((e / t) * 100, '%')
        },
        re = (function (e) {
          m()(a, e)
          var t = h()(a)
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
                K.a.create({
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
                return 2 * S.a.theme.spacesPx.space4 + 3 * S.a.theme.spacesPx.space2
              }),
              f()(d()(e), '_handleKeyDown', function (t, a) {
                var n = e.state.trimmerWidth
                1 === e._keyPressValueDelta && e._handlePanResponderGrant(a),
                  (e._keyPressAccumulatedDistance += e._keyPressValueDelta * (t === z ? 1 : -1)),
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
                ;(e._baseTime = t === G ? r : n), e.setState({ isActive: !0 })
              }),
              f()(d()(e), '_renderTimestampLabel', function () {
                var t,
                  a = e.state.isActive,
                  n = e.props,
                  r = n.duration,
                  i = n.endTime,
                  o = n.startTime,
                  s = O.a.getConstants().isRTL,
                  c = s ? 'marginRight' : 'marginLeft',
                  l = s ? 'marginLeft' : 'marginRight'
                return b.a.createElement(
                  j.a,
                  {
                    style: [
                      ie.labelWrapper,
                      ((t = {}), f()(t, c, ne(o, r)), f()(t, l, ne(r - i, r)), f()(t, 'width', ne(i - o, r)), t),
                    ],
                  },
                  b.a.createElement(
                    W.a,
                    { background: 'maskColor', style: [ie.label, !a && ie.visibilityHidden] },
                    $({ timestamp: e._generateTimestampLabelString() }),
                  ),
                )
              }),
              f()(d()(e), '_setRootRef', function (t) {
                t && (e._removeTouchMoveToScrollListener = Object(x.a)(t, e._handleTouchMoveToScroll, !1))
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
                  c = e._baseTime + e._scaleDistanceByTrimmerWidth(t),
                  l = 1e3
                if (a === G) {
                  var d = c
                  c <= 0 ? (d = 0) : i - l <= c && (d = i - l), o(G, d)
                }
                if (a === H) {
                  var u = c
                  c >= r ? (u = r) : c - s <= l && (u = s + l), o(H, u)
                }
              }),
              e
            )
          }
          return (
            c()(a, [
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
                    c = this._getTrimmerScrubberWidth(),
                    l = O.a.getConstants().isRTL,
                    d = l ? 'marginRight' : 'marginLeft',
                    u = l ? 'marginLeft' : 'marginRight'
                  return b.a.createElement(
                    j.a,
                    I()(
                      { ref: this._setRootRef, style: [ie.root, o && ie.cursorGrab] },
                      this._panResponderTermination.panHandlers,
                    ),
                    this._renderTimestampLabel(),
                    b.a.createElement(
                      j.a,
                      { onLayout: this._handleLayout, style: ie.trimmerWrapper },
                      b.a.createElement(
                        j.a,
                        { style: ie.intervalsContainer },
                        b.a.createElement(F, { duration: t, trimmerWidth: s }),
                      ),
                      b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(j.a, { style: [ie.discardArea, ie.transition, { width: ne(r, t) }] }),
                        b.a.createElement(
                          j.a,
                          { style: ie.keepArea },
                          b.a.createElement(Z, {
                            currentValue: r,
                            maxValue: a,
                            minValue: 0,
                            onKeyDown: this._handleKeyDown,
                            onKeyUp: this._handleKeyUp,
                            onMoveChange: this._handlePanResponderChange,
                            onMoveEnd: this._handlePanResponderEnd,
                            onMoveStart: this._handlePanResponderGrant,
                            side: G,
                            style: [ie.trimmerScrubber, f()({}, d, '-'.concat(c, 'px'))],
                          }),
                          b.a.createElement(
                            j.a,
                            { style: ie.keepAreaCenter },
                            o
                              ? null
                              : b.a.createElement(j.a, {
                                  style: [ie.playBarArea, ie.transition, { width: ne(n, a - r) }],
                                }),
                          ),
                          b.a.createElement(Z, {
                            currentValue: a,
                            maxValue: t,
                            minValue: r,
                            onKeyDown: this._handleKeyDown,
                            onKeyUp: this._handleKeyUp,
                            onMoveChange: this._handlePanResponderChange,
                            onMoveEnd: this._handlePanResponderEnd,
                            onMoveStart: this._handlePanResponderGrant,
                            side: H,
                            style: [ie.trimmerScrubber, f()({}, u, '-'.concat(c, 'px'))],
                          }),
                        ),
                        b.a.createElement(j.a, {
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
        ie = S.a.create(function (e) {
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
        ce = a('/run'),
        le = a('KwSe'),
        de = new E.a({}),
        ue = (function (e) {
          m()(a, e)
          var t = h()(a)
          function a() {
            var e, n, i
            o()(this, a)
            for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l]
            return (
              (i = t.call.apply(t, [this].concat(c))),
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
                    c = i.props.video.duration,
                    l = t === G
                  if (e) {
                    var d = l ? a : s,
                      u = l ? o : a
                    e.pause(),
                      e.scrubToFraction(a / c),
                      e.setPlaybackTimeRange({ startTimeS: d / 1e3, endTimeS: u / 1e3 })
                  }
                  i._isScrubbed = !0
                  var m = l ? { startTime: a } : { endTime: a }
                  i.setState(r()({ playTime: 0 }, m))
                }
              }),
              f()(d()(i), '_handleOnVideoContainerLayout', function (e) {
                var t = e.nativeEvent.layout,
                  a = t.height,
                  n = t.width,
                  r = i.props.video,
                  o = r.height,
                  s = r.width / o,
                  c = C.a.getContainDimensions({ height: a, width: n }, s),
                  l = c.height,
                  d = c.width
                ;(l === i.state.adjustedVideoHeight && d === i.state.adjustedVideoWidth) ||
                  i.setState({ adjustedVideoHeight: l, adjustedVideoWidth: d })
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
            c()(a, [
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
                    c = a.startTime
                  return b.a.createElement(
                    j.a,
                    { style: me.root },
                    b.a.createElement(
                      le.a,
                      null,
                      b.a.createElement(
                        j.a,
                        { style: me.videoContainer },
                        b.a.createElement(
                          j.a,
                          { onLayout: this._handleOnVideoContainerLayout, style: me.video },
                          b.a.createElement(
                            y.a,
                            { ratio: t.width / t.height, style: n && r && { height: n, width: r } },
                            b.a.createElement(
                              _.b,
                              {
                                aspectRatio: t.width / t.height,
                                basePlayerClass: ce.a,
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
                                  T.a,
                                  {
                                    focusable: !0,
                                    interactiveStyles: M.a.generate({
                                      backgroundColor: S.a.theme.colors.transparent,
                                      color: S.a.theme.colors.primary,
                                      customFocusBackgroundColor: S.a.theme.colors.transparent,
                                      customHoverBackgroundColor: S.a.theme.colors.transparent,
                                      customPressedBackgroundColor: S.a.theme.colors.transparent,
                                      insetFocusRing: !0,
                                    }),
                                    onClick: e._handleVideoClick(a),
                                    style: me.overlay,
                                  },
                                  o ? null : b.a.createElement(se.a, null),
                                )
                              },
                            ),
                          ),
                        ),
                      ),
                      b.a.createElement(le.a.MetadataSubscriber, { playerId: 'trimmer' }, function (a) {
                        var n = a.playerApi
                        return b.a.createElement(oe, {
                          duration: t.duration,
                          endTime: i,
                          onScrub: e._handleScrub(n),
                          playTime: s,
                          startTime: c,
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
        me = S.a.create(function (e) {
          return {
            root: { flex: 1 },
            overlay: r()(r()({}, S.a.absoluteFillObject), {}, { alignItems: 'center', justifyContent: 'center' }),
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
    eIif: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'PhotoTagsScreen', function () {
          return L
        })
      var n = a('RhWx'),
        r = a.n(n),
        i = a('ddV6'),
        o = a.n(i),
        s = (a('hBpG'), a('7x/C'), a('2G9S'), a('LW0h'), a('tQbP'), a('z84I'), a('ERkP')),
        c = a.n(s),
        l = a('VAZu'),
        d = (a('M+/F'), a('xVN5')),
        u = a('hqKg'),
        m = a('tn7R'),
        p = a('GZwR'),
        h = a('UQTn'),
        v = a('oEGd'),
        f = Object(u.createSelector)(
          function (e) {
            var t = d.i(e)
            return d.k(e)[t].mediaTags
          },
          function (e) {
            return (function (e) {
              var t = Object(h.e)(e),
                a = (t && Object(m.a)(t)) || []
              return Object(p.i)(a)
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
        E = a.n(_),
        M = a('Oib4'),
        T = a('mN6z'),
        C = a('2dXj'),
        S = a('MWbm'),
        w = a('4zmP'),
        I = a('/yvb'),
        x = a('rHpw'),
        k = a('7JQg'),
        R = E.a.b772cd65,
        A = E.a.c20dc653,
        P = E.a.d1175c78,
        D = E.a.ae0831ab
      function L(e) {
        var t = e.history,
          a = e.injections,
          n = e.existingTags,
          i = void 0 === n ? [] : n,
          s = e.updateSingleComposer,
          d = c.a.useState(i),
          u = o()(d, 2),
          m = u[0],
          h = u[1],
          v = c.a.useState(''),
          f = o()(v, 2),
          g = f[0],
          b = f[1],
          _ = function (e) {
            h(
              m.filter(function (t) {
                return t.id !== e.id
              }),
            )
          },
          E = function () {
            var e = m
                .map(function (e) {
                  return e.data.id_str
                })
                .sort(),
              t = i
                .map(function (e) {
                  return e.data.id_str
                })
                .sort(),
              a = e.length === t.length && Object(T.a)(e, t)
            return c.a.createElement(
              S.a,
              { style: O.rightColumn },
              c.a.createElement(I.a, { disabled: a, onPress: k, size: 'small', type: 'primaryFilled' }, R),
            )
          },
          x = function () {
            t.goBack()
          },
          k = function () {
            s({ updates: { mediaTags: m } }), t.goBack()
          }
        return c.a.createElement(
          y.b,
          {
            documentTitle: P,
            history: t,
            renderHeader: function () {
              return c.a.createElement(l.a, {
                backButtonType: 'close',
                history: t,
                onBackClick: x,
                rightControl: E(),
                title: P,
              })
            },
          },
          c.a.createElement(C.d, {
            getItemDisabledMessage: function (e) {
              var t
              return e.type !== p.b.User || e.data.can_media_tag || (t = D({ screenName: e.data.screen_name })), t
            },
            getItemIsDisabled: function (e) {
              var t = m.length >= 10
              return e.type === p.b.User && (!e.data.can_media_tag || !!t)
            },
            injections: g ? void 0 : a,
            onQueryChange: function (e) {
              b(e)
            },
            onRemove: _,
            onSelect: function (e) {
              e.type === p.b.User &&
                (m.find(function (t) {
                  return t.id === e.id
                })
                  ? _(e)
                  : m.length < 10 && h([].concat(r()(m), [e])))
            },
            renderCallout: function () {
              return m.length >= 10
                ? c.a.createElement(
                    S.a,
                    { style: O.inlineCallout },
                    c.a.createElement(w.a, { Icon: M.a, headline: A, type: 'warning' }),
                  )
                : null
            },
            selectedUsers: m,
            source: p.d.ComposeMediaTagging,
            withCompactPills: !0,
          }),
        )
      }
      var O = x.a.create(function (e) {
        return {
          rightColumn: { flexDirection: 'row', flexGrow: 1, alignItems: 'center' },
          inlineCallout: {
            paddingHorizontal: e.spaces.space16,
            paddingBottom: e.spaces.space4,
            paddingTop: e.spaces.space8,
          },
        }
      })
      t.default = Object(k.a)({ page: 'media_tag', component: 'media_tagger' })(b(L))
    },
    i8hi: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'TabbedMediaEditScreen', function () {
          return C
        })
      var n = a('97Jx'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        s = a('Y9Ll'),
        c = a.n(s),
        l = a('N+ot'),
        d = a.n(l),
        u = a('5Yy7'),
        m = a.n(u),
        p = a('2VqO'),
        h = a.n(p),
        v = (a('KqXw'), a('MvUL'), a('ERkP')),
        f = a.n(v),
        g = a('CDB5'),
        b = a('rxPX'),
        y = a('AspN'),
        _ = function (e, t) {
          return t.location && t.location.state && t.location.state.mediaId
        },
        E = function (e, t) {
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
            return { media: E, initialMediaId: _ }
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
        T = a('jFmo'),
        C = (function (e) {
          m()(a, e)
          var t = h()(a)
          function a(e) {
            var n
            o()(this, a), (n = t.call(this, e))
            var r = e.history,
              i = e.initialMediaId
            return e.media.length <= 0 || !i ? (r.replace('/'), d()(n)) : n
          }
          return (
            c()(a, [
              {
                key: 'render',
                value: function () {
                  return f.a.createElement(T.a, r()({}, this.props, { sensitiveMediaTabEnabled: !1 }))
                },
              },
            ]),
            a
          )
        })(f.a.Component)
      t.default = M(C)
    },
    jFmo: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        i = (a('KqXw'), a('MvUL'), a('ERkP')),
        o = a.n(i),
        s = a('v6aA'),
        c = a('0uGn'),
        l = a('yiKp'),
        d = a.n(l),
        u = a('VrFO'),
        m = a.n(u),
        p = a('Y9Ll'),
        h = a.n(p),
        v = a('1Pcy'),
        f = a.n(v),
        g = a('5Yy7'),
        b = a.n(g),
        y = a('2VqO'),
        _ = a.n(y),
        E = a('KEM+'),
        M = a.n(E),
        T = (a('hBpG'), a('7x/C'), a('jwue'), a('+oxZ'), a('lTEL'), a('LqLs'), a('87if'), a('kYxP'), a('jHSc')),
        C = a('3XMw'),
        S = a.n(C),
        w = a('oQhu'),
        I = a('7JQg'),
        x = a('9Q4p'),
        k = a('PrL8'),
        R = a('sjK1'),
        A = (a('2G9S'), a('RqPI')),
        P = a('AspN'),
        D = a('rxPX'),
        L = a('0KEI'),
        O = a('FDFL'),
        j = function (e) {
          var t = Object(A.p)(e)
          return t && Object(O.b)(e, t)
        },
        U = Object(D.a)()
          .propsFromState(function () {
            return { language: A.p, languageName: j }
          })
          .propsFromActions(function () {
            return {
              addMedia: P.b,
              createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
                'VIDEO_SUBTITLES_UPLOAD',
              ),
              fetchAvailableLanguagesIfNeeded: O.a,
              removeMediaUpload: P.i,
            }
          })
          .withAnalytics(),
        F = a('eyty'),
        W = a('m3Bd'),
        B = a.n(W),
        V = (a('7xRU'), a('pHub')),
        z = a('62wY'),
        G = 'fileInput',
        H = a('MWbm'),
        K = a('/Imo'),
        N = a('rHpw'),
        q = ['icon', 'style', 'withIcon'],
        Q = o.a.createElement(V.a, null),
        X = S.a.icbec4ae,
        J = function (e) {
          var t = e.icon,
            a = e.style,
            n = e.withIcon,
            i = B()(e, q),
            s = z.a.join(',')
          return o.a.createElement(
            H.a,
            null,
            o.a.createElement(
              K.a,
              r()({}, i, { accept: s, icon: n ? t : void 0, style: [Y.button, a], testID: G, type: 'primaryFilled' }),
              X,
            ),
          )
        }
      J.defaultProps = { icon: Q, size: 'medium', withIcon: !0 }
      var Y = N.a.create(function (e) {
          return { button: { alignSelf: 'start' } }
        }),
        Z = J,
        $ = a('/yvb'),
        ee = a('t62R'),
        te = S.a.bf4e9d79,
        ae = S.a.j435467e,
        ne = S.a.a6b267f9,
        re = (function (e) {
          b()(a, e)
          var t = _()(a)
          function a() {
            var e
            m()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              M()(f()(e), '_renderSubtitlesPickerButton', function () {
                return o.a.createElement(Z, { onChange: e._handleAddMediaFiles, type: 'brandText' })
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
                  n(t, { location: F.d.Tweet }).then(function (e) {
                    s(e[0], i, o)
                  })
              }),
              e
            )
          }
          return (
            h()(a, [
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
                    H.a,
                    { style: ie.root },
                    o.a.createElement(
                      H.a,
                      { style: ie.attachmentContainer },
                      o.a.createElement(ee.b, { size: 'title3', style: ie.header, weight: 'heavy' }, te),
                      o.a.createElement(ee.b, { size: 'body', style: ie.body }, ae),
                      o.a.createElement(
                        H.a,
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
        oe = U(re),
        se = a('k/OQ'),
        ce = a('R5K7'),
        le = a('nV1z'),
        de = a('8A5z'),
        ue = a('zIWA'),
        me = { section: 'subtitles' },
        pe = { section: 'trimmer' },
        he = { section: 'sensitive_media' },
        ve = S.a.c91f83ae,
        fe = S.a.icbec4ae,
        ge = S.a.e0342f98,
        be = S.a.i2209530,
        ye = S.a.b772cd65,
        _e = S.a.e0342f98,
        Ee = S.a.e7048e73,
        Me = S.a.dd4a83a5,
        Te = 'subtitles',
        Ce = 'trimmer',
        Se = 'sensitive_media',
        we = (function (e) {
          b()(a, e)
          var t = _()(a)
          function a(e) {
            var n
            m()(this, a),
              (n = t.call(this, e)),
              M()(f()(n), '_videoTrimmerRef', o.a.createRef()),
              M()(
                f()(n),
                '_getMemoizedCurrentTabMetadata',
                Object(w.a)(function (e, t, a) {
                  switch (e) {
                    case Ce:
                      if (t) return { namespace: pe, title: ve, renderer: n._renderTrimmerTab }
                    case Se:
                      if (a) return { namespace: he, title: Me, renderer: n._renderSensitiveMediaTab }
                    default:
                      return { namespace: me, title: fe, renderer: n._renderSubtitlesTab }
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
                  c = n._getMemoizedCurrentTabMetadata(null === (e = r.state) || void 0 === e ? void 0 : e.tab, a, i)
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  s.length > 1 ? o.a.createElement(se.a, { accessibilityLabel: ve, links: s }) : null,
                  o.a.createElement(H.a, { style: k.a.segmentedControlChildren }, c.renderer()),
                )
              }),
              M()(f()(n), '_renderTrimmerTab', function () {
                var e = n._getCurrentMediaItem(),
                  t = n.state.trimData
                if (null != e && e.mediaFile && e.mediaFile instanceof R.c) {
                  var a = e.mediaFile,
                    r = {
                      duration: 1e3 * a.duration,
                      height: a.height,
                      variants: [{ src: a.url, type: a.type }],
                      width: a.width,
                    }
                  return o.a.createElement(
                    H.a,
                    { style: k.a.videoTrimmerWrapper },
                    o.a.createElement(ce.a, { defaultTrimData: t, ref: n._videoTrimmerRef, video: r }),
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
                return o.a.createElement(x.a, {
                  currentWarnings: e,
                  mediaItem: t,
                  onWarningChange: n._handleSensitiveWarningChange,
                })
              }),
              M()(f()(n), '_renderAppBarRightControl', function () {
                var e = n.props.isVideoTrimmerEnabled
                return o.a.createElement(
                  H.a,
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
            if (null != r && r.mediaFile && r.mediaFile instanceof R.c) {
              var i = r.mediaFile,
                s = r.mediaMetadata,
                c = r.trimData,
                l = {
                  endTime: null != c && c.endTime ? 1e3 * c.endTime : 1e3 * i.duration,
                  startTime: null != c && c.startTime ? 1e3 * c.startTime : 0,
                }
              n.state = {
                trimData: l,
                sensitiveMediaWarning: (null == s ? void 0 : s.sensitiveMediaWarning) || new Set(),
              }
            } else n.props.history.replace('/')
            return n
          }
          return (
            h()(a, [
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
                    I.c,
                    { namespace: s.namespace },
                    o.a.createElement(
                      T.b,
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
                    c = []
                  return (
                    n &&
                      (null == s || null === (e = s.originalMediaFile) || void 0 === e ? void 0 : e.isVideo) &&
                      c.push({
                        to: d()(d()({}, r), {}, { state: d()(d()({}, r.state), {}, { tab: Ce }) }),
                        label: o.a.createElement(le.a, null),
                        key: Ce,
                        accessibilityLabel: Ee,
                        isActive: function () {
                          var e
                          return (null === (e = r.state) || void 0 === e ? void 0 : e.tab) === Ce
                        },
                      }),
                    (null == s || null === (t = s.originalMediaFile) || void 0 === t ? void 0 : t.isVideo) &&
                      c.push({
                        to: d()(d()({}, r), {}, { state: d()(d()({}, r.state), {}, { tab: Te }) }),
                        label: o.a.createElement(de.a, null),
                        key: Te,
                        accessibilityLabel: ge,
                        isActive: function () {
                          var e
                          return (null === (e = r.state) || void 0 === e ? void 0 : e.tab) === Te
                        },
                        onClick: this._addTrimDataToState,
                      }),
                    i &&
                      c.push({
                        to: d()(d()({}, r), {}, { state: d()(d()({}, r.state), {}, { tab: Se }) }),
                        label: o.a.createElement(ue.a, null),
                        key: Se,
                        accessibilityLabel: Me,
                        isActive: function () {
                          var e
                          return (null === (e = r.state) || void 0 === e ? void 0 : e.tab) === Se
                        },
                        onClick: this._handleClickSensitiveMediaTab,
                      }),
                    c
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
          l = e.media,
          d = o.a.useContext(s.a).featureSwitches,
          u =
            null === (t = e.media[0]) || void 0 === t || null === (a = t.mediaFile) || void 0 === a ? void 0 : a.isVideo
        if (l.length <= 0 || !i) return n.replace('/'), null
        if (u) {
          var m = d.isTrue('responsive_web_video_trimmer_enabled')
          return o.a.createElement(we, r()({}, e, { isVideoTrimmerEnabled: m }))
        }
        return o.a.createElement(c.b, e)
      }
    },
    nV1z: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('Lsrn'),
        c = a('k/Ka'),
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
                d: 'M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM5.25 20.033h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zM17 20.5H7v-7.75h10v7.75zm0-9.25H7V3.5h10v7.75zm3.25 8.783h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
  },
])
//# sourceMappingURL=WIPED
