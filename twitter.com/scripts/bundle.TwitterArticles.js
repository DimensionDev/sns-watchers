;(window.webpackJsonp = window.webpackJsonp || []).push([
  [105],
  {
    '4k/t': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'sidebarLayoutScreenTitle', function () {
          return _
        }),
        n.d(t, 'TwitterArticleScreen', function () {
          return S
        })
      n('KqXw'), n('WNMA'), n('uFXj')
      var r = n('ERkP'),
        a = n.n(r),
        i = n('es0u'),
        o = n('6au1'),
        l = n('rxPX'),
        c = function (e, t) {
          return o.a.selectFetchStatus(e, t.match.params.twitterArticleId)
        },
        s = Object(l.a)()
          .propsFromState(function () {
            return { fetchStatus: c }
          })
          .propsFromActions(function () {
            return { fetchTwitterArticle: o.a.fetchOne }
          }),
        u = n('VS6U'),
        d = (n('ho0z'), n('6U7i'), n('G6rE')),
        p = function (e, t) {
          var n = t.twitterArticleId
          return o.a.select(e, n)
        },
        h = function (e, t) {
          var n,
            r = p(e, t),
            a = null == r || null === (n = r.metadata) || void 0 === n ? void 0 : n.authorResults.result,
            i = 'User' === (null == a ? void 0 : a.__typename) ? (null == a ? void 0 : a.rest_id) : void 0
          return i ? d.e.select(e, i) : void 0
        },
        f = Object(l.a)().propsFromState(function () {
          return { author: h, twitterArticle: p }
        }),
        m = (n('849X'), n('TJCb'), n('nXUu')),
        y = function (e) {
          var t = e.contentStateJson,
            n = t
              ? (function (e) {
                  try {
                    var t = JSON.parse(e)
                    if (!t.entityMap || !t.blocks) throw new Error('Malformed RawDraftContentState')
                    return t
                  } catch (n) {}
                })(t)
              : void 0
          return n ? a.a.createElement(m.a, { contentState: n }) : null
        },
        b = n('t62R'),
        v = function (e) {
          var t = e.size,
            n = e.title
          return a.a.createElement(
            b.b,
            {
              color: n ? 'normal' : 'gray700',
              numberOfLines: 1,
              size: t,
              testID: 'twitterArticleTitleComponent',
              weight: 'bold',
            },
            n || 'Untitled',
          )
        },
        g = n('MWbm'),
        w = n('jV+4'),
        T = n('GBcw'),
        C = n('rHpw'),
        x = C.a.create(function (e) {
          return {
            container: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
              minHeight: e.spaces.space80,
            },
            paddedView: { paddingVertical: e.spaces.space12 },
          }
        }),
        E = f(function (e) {
          var t = e.author,
            n = e.twitterArticle
          if (!n || !t) return null
          var r = n.data,
            i = n.metadata,
            o = n.title
          return a.a.createElement(
            g.a,
            { style: x.container },
            a.a.createElement(w.a, {
              isVerified: t.verified,
              name: t.name,
              profileImageUrl: t.profile_image_url_https,
              screenName: t.screen_name,
              style: x.paddedView,
              withLink: !0,
            }),
            a.a.createElement(g.a, { style: x.paddedView }, a.a.createElement(v, { size: 'title1', title: o })),
            null != i && i.publishedAtMs
              ? a.a.createElement(
                  g.a,
                  { style: x.paddedView },
                  a.a.createElement(T.a, { humanReadable: !0, timestamp: Number(i.publishedAtMs) }),
                )
              : null,
            null != r && r.contentStateJson
              ? a.a.createElement(
                  g.a,
                  { style: x.paddedView, testID: 'twitterArticleRichTextView' },
                  a.a.createElement(y, { contentStateJson: r.contentStateJson }),
                )
              : null,
          )
        }),
        I = n('G1WX'),
        _ = 'Twitter Article',
        S = function (e) {
          var t = e.fetchStatus,
            n = e.fetchTwitterArticle,
            r = e.history,
            o = e.match.params.twitterArticleId,
            l = a.a.useCallback(
              function () {
                n(o)
              },
              [n, o],
            )
          a.a.useEffect(
            function () {
              l()
            },
            [l],
          )
          var c = function () {
            return a.a.createElement(
              g.a,
              { testID: 'twitterArticleView' },
              a.a.createElement(E, { twitterArticleId: o }),
            )
          }
          return a.a.createElement(u.a, {
            history: r,
            primaryContent: function () {
              return a.a.createElement(
                g.a,
                { style: L.container },
                a.a.createElement(I.a, { fetchStatus: t, onRequestRetry: l, render: c }),
              )
            },
            sidebarContent: a.a.createElement(i.a, null),
            title: _,
          })
        },
        L = C.a.create(function (e) {
          return {
            container: {
              borderTopColor: e.colors.borderColor,
              borderTopWidth: e.borderWidths.small,
              color: e.colors.text,
              padding: e.spaces.space24,
            },
            author: { paddingBottom: e.spaces.space24 },
            title: { paddingBottom: e.spaces.space24 },
          }
        }),
        k = s(S)
      t.default = k
    },
    '5emT': function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, e),
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
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    M2mT: function (e, t, n) {
      'use strict'
      var r = n('m3Bd'),
        a = n.n(r),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        h = n('2VqO'),
        f = n.n(h),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('i4UL'), n('+/5o')),
        v = n('ERkP'),
        g = n.n(v),
        w = n('HPNB'),
        T = n('VAZu'),
        C = n('wiP2'),
        x = n('Es6L'),
        E = n('yiKp'),
        I = n.n(E),
        _ = n('rHpw'),
        S = _.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: I()(I()({}, _.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        L = n('MWbm'),
        k = n('yw4N'),
        A = n('TnY3'),
        B = n('cHvH'),
        F = n('3xLC'),
        O = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        P = (function (e) {
          p()(n, e)
          var t = f()(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(u()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? g.a.createElement(
                      L.a,
                      { style: S.fill },
                      g.a.createElement(
                        k.a,
                        { style: S.viewportView },
                        e._renderInlineNav({ isTwoColumnLayout: !0 }),
                        t,
                      ),
                    )
                  : t
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return g.a.createElement(B.a, null, function (t) {
                    var n = t.windowWidth
                    return w.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n =
                      (e.leftControl,
                      e.screenType,
                      e.showSubtitleOnRoot,
                      e.showSubtitleOnWideDetail,
                      e.withBottomBorder,
                      e.withDetailOpen,
                      a()(e, O))
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    Object(x.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : g.a.createElement(C.a.Configure, n),
                    t,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    !e && this._renderInlineNav({ isTwoColumnLayout: !0 }),
                    this._renderChildren(),
                  )
                },
              },
              {
                key: '_renderInlineNav',
                value: function (e) {
                  var t = e.isTwoColumnLayout,
                    n = this.props,
                    r = n.SideNavButton,
                    a = n.TabBar,
                    i = n.TeamsSwitcher,
                    o = n.backLocation,
                    l = n.documentTitle,
                    c = n.headerless,
                    s = n.history,
                    u = n.leftControl,
                    d = n.middleControl,
                    p = n.onBackClick,
                    h = n.rightControl,
                    f = n.screenType,
                    m = n.searchBoxOptions,
                    y = n.secondaryBar,
                    v = n.showSubtitleOnRoot,
                    w = n.showSubtitleOnWideDetail,
                    x = n.subtitle,
                    E = n.title,
                    I = n.titleIconCell,
                    _ = n.titleIconCellSize,
                    k = n.withDetailOpen,
                    A = n.withSearchBox,
                    B = n.withTweetButton,
                    F = 'root' === f,
                    O = 'secondaryRoot' === f,
                    P = 'primaryDetail' === f,
                    V = (P && w) || (F && v),
                    D = F || (P && t),
                    R = F ? b.c : P ? b.a : void 0,
                    H = g.a.createElement(
                      L.a,
                      { style: S.appBarContainer },
                      g.a.createElement(T.a, {
                        backLocation: o,
                        fixed: !1,
                        hideBackButton: D,
                        history: s,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: p,
                        rightControl: h,
                        secondaryBar: y,
                        subtitle: V ? x : void 0,
                        title: E,
                        titleDomId: R,
                        titleIconCell: I,
                        titleIconCellSize: _,
                      }),
                    ),
                    M =
                      F || (O && k)
                        ? null
                        : g.a.createElement(C.a.Configure, {
                            SideNavButton: r,
                            TabBar: a,
                            TeamsSwitcher: i,
                            backLocation: o,
                            documentTitle: l,
                            headerless: c,
                            middleControl: d,
                            onBackClick: p,
                            rightControl: h,
                            searchBoxOptions: m,
                            subtitle: x,
                            title: E,
                            withSearchBox: A,
                            withTweetButton: B,
                          })
                  return g.a.createElement(g.a.Fragment, null, M, H)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      y()(P, 'contextType', F.a),
        y()(P, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(A.a)(P)
    },
    QdNu: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'saveLabel', function () {
          return B
        }),
        n.d(t, 'publishLabel', function () {
          return F
        }),
        n.d(t, 'unpublishLabel', function () {
          return O
        }),
        n.d(t, 'viewLabel', function () {
          return P
        }),
        n.d(t, 'successfulSaveMessage', function () {
          return D
        }),
        n.d(t, 'successfulPublishMessage', function () {
          return R
        }),
        n.d(t, 'successfulUnpublishMessage', function () {
          return H
        }),
        n.d(t, 'TwitterArticleComposer', function () {
          return z
        })
      var r = n('ddV6'),
        a = n.n(r),
        i = (n('KqXw'), n('WNMA'), n('0zG9'), n('MvUL'), n('uFXj'), n('ERkP')),
        o = n.n(i),
        l = n('1YZw'),
        c = n('rxPX'),
        s = n('0KEI'),
        u = n('kGix'),
        d = n('6au1'),
        p = function (e, t) {
          return t.match.params.twitterArticleId
        },
        h = function (e, t) {
          var n = p(0, t)
          return d.a.selectFetchStatus(e, n) || u.a.NONE
        },
        f = function (e, t) {
          var n = p(0, t)
          return d.a.select(e, n)
        },
        m = function (e, t) {
          var n = p(0, t)
          return Object(d.b)(e, n)
        },
        y = Object(c.a)()
          .propsFromState(function () {
            return { fetchStatus: h, title: m, twitterArticle: f }
          })
          .propsFromActions(function () {
            return {
              addToast: l.b,
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
                'TWITTER_ARTICLE_COMPOSER',
              ),
              deleteTwitterArticle: d.a.delete,
              fetchTwitterArticle: d.a.fetchOneIfNeeded,
              saveTwitterArticle: d.a.updateData,
              updateTwitterArticleVisibility: d.a.updateVisibility,
              updateTwitterArticleTitle: d.a.updateTitle,
            }
          }),
        b = n('VY6S'),
        v = n('HsFH'),
        g = n('M2mT'),
        w = (n('yH/f'), Object.freeze({ DRAFT: 'Draft', PUBLISHED: 'Published' })),
        T = n('MWbm'),
        C = n('hHEM'),
        x = n('/yvb'),
        E = n('p+r5'),
        I = n('UwBx'),
        _ = n('keCP'),
        S = n('eb3s'),
        L = n('G1WX'),
        k = n('rHpw'),
        A = n('zpdM'),
        B = 'Save',
        F = 'Publish',
        O = 'Unpublish',
        P = 'View',
        V = 'Twitter Article Title',
        D = 'Twitter Article Saved',
        R = 'Twitter Article Published',
        H = 'Twitter Article Unpublished',
        M = o.a.createElement(v.a, null),
        z = function (e) {
          var t,
            n = e.addToast,
            r = e.createLocalApiErrorHandler,
            i = e.deleteTwitterArticle,
            l = e.fetchStatus,
            c = e.fetchTwitterArticle,
            s = e.history,
            u = e.match.params.twitterArticleId,
            d = e.saveTwitterArticle,
            p = e.title,
            h = e.twitterArticle,
            f = e.updateTwitterArticleTitle,
            m = e.updateTwitterArticleVisibility,
            y = (null == h || null === (t = h.metadata) || void 0 === t ? void 0 : t.visibility) === w.PUBLISHED,
            v = function (e) {
              var t
              try {
                t = e ? JSON.parse(e) : void 0
              } catch (r) {
                t = void 0
              }
              var n = C.a.initEditorState(t)
              return C.a.convertEmojiToEntities(n)
            },
            k = o.a.useState(v()),
            z = a()(k, 2),
            W = z[0],
            U = z[1],
            j = o.a.useState(!1),
            N = a()(j, 2),
            J = N[0],
            X = N[1]
          o.a.useEffect(
            function () {
              c(u)
            },
            [c, u],
          ),
            o.a.useEffect(
              function () {
                var e,
                  t = v(null == h || null === (e = h.data) || void 0 === e ? void 0 : e.contentStateJson)
                U(t)
              },
              [h],
            )
          var G = function (e) {
              var t = C.a.convertEmojiToEntities(e)
              U(t)
            },
            Y = function (e) {
              q(e.target.value)
            },
            q = o.a.useMemo(
              function () {
                return Object(b.a)(function (e) {
                  f(u, { title: e || '' }).catch(r({}))
                }, 250)
              },
              [r, u, f],
            ),
            Z = function () {
              X(function (e) {
                return !e
              })
            },
            Q = o.a.createElement(
              T.a,
              { style: K.controlsContainer },
              o.a.createElement(
                x.a,
                {
                  onClick: function () {
                    var e = JSON.stringify(Object(A.convertToRaw)(W.getCurrentContent()))
                    d(u, { contentStateJson: e })
                      .then(n({ text: D }))
                      .catch(r({}))
                  },
                  style: K.buttonMargin,
                },
                B,
              ),
              o.a.createElement(
                x.a,
                {
                  onClick: function () {
                    m(u, { visibility: y ? w.DRAFT : w.PUBLISHED })
                      .then(
                        n({
                          text: y ? H : R,
                          action: y ? void 0 : { label: P, link: '/i/twitter-articles/'.concat(u) },
                        }),
                      )
                      .catch(r({}))
                  },
                  style: K.buttonMargin,
                  type: 'brandFilled',
                },
                y ? O : F,
              ),
              o.a.createElement(x.a, { icon: M, onClick: Z, type: 'destructiveText' }),
            )
          return o.a.createElement(
            g.a,
            { rightControl: Q, screenType: 'primaryDetail', title: 'Edit Twitter Article' },
            J
              ? o.a.createElement(S.a, {
                  headline: 'Delete Twitter Article?',
                  onCancel: Z,
                  onConfirm: function () {
                    i(u).then(function () {
                      s.replace('/i/twitter-article-composer')
                    })
                  },
                })
              : null,
            o.a.createElement(
              T.a,
              { style: K.container },
              o.a.createElement(L.a, {
                fetchStatus: l,
                render: function () {
                  return o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(E.a, {
                      defaultValue: p,
                      key: 'title-input-'.concat(u),
                      label: V,
                      name: V,
                      onChange: Y,
                    }),
                    o.a.createElement(I.a, {
                      onChange: G,
                      placeholder: 'Start writing',
                      richTextInputContext: { editorState: W, element: _.a },
                      styleType: 'selection',
                    }),
                  )
                },
              }),
            ),
          )
        },
        K = k.a.create(function (e) {
          return {
            container: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small },
            controlsContainer: { flexDirection: 'row' },
            buttonMargin: { marginRight: e.spaces.space8 },
          }
        }),
        W = y(z)
      t.default = W
    },
    UwBx: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('ERkP'),
        c = n.n(l),
        s = n('6OUF'),
        u = ['additionalToolbarButtons', 'leftAligned', 'multiline']
      t.a = function (e) {
        e.additionalToolbarButtons
        var t = e.leftAligned,
          n = void 0 === t || t,
          r = e.multiline,
          i = void 0 === r || r,
          l = o()(e, u)
        return c.a.createElement(s.a, a()({}, l, { leftAligned: n, multiline: i }))
      }
    },
    nXUu: function (e, t, n) {
      'use strict'
      n('z84I')
      var r = n('ERkP'),
        a = n.n(r),
        i = n('t62R'),
        o = n('MWbm')
      t.a = function (e) {
        var t = e.contentState.blocks.map(function (e) {
          return a.a.createElement(i.b, { key: e.key }, e.text)
        })
        return a.a.createElement(o.a, null, t)
      }
    },
    'p+r5': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return U
      })
      n('yiKp')
      var r = n('97Jx'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('VrFO'),
        c = n.n(l),
        s = n('Y9Ll'),
        u = n.n(s),
        d = n('1Pcy'),
        p = n.n(d),
        h = n('5Yy7'),
        f = n.n(h),
        m = n('2VqO'),
        y = n.n(m),
        b = n('KEM+'),
        v = n.n(b),
        g = (n('2G9S'), n('ERkP')),
        w = n.n(g),
        T = n('38/B'),
        C = n('t62R'),
        x = n('/yvb'),
        E = n('piX5'),
        I = n('3XMw'),
        _ = n.n(I),
        S = n('tI3i'),
        L = n.n(S),
        k = n('oQhu'),
        A = n('rHpw'),
        B = n('aITJ'),
        F = n('MWbm'),
        O = n('n5fo'),
        P = n('5emT'),
        V = n('Oib4'),
        D = n('WtWS'),
        R = n('ioan'),
        H = [
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
        M = function (e) {
          return e.length
        },
        z = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M
          return t(e)
        },
        K = _.a.de540c32,
        W = _.a.b4abfdb3,
        U = (function (e) {
          f()(n, e)
          var t = y()(n)
          function n(e) {
            var r
            c()(this, n),
              (r = t.call(this, e)),
              v()(p()(r), '_blurOnBackspaceKeyUpForKaiOS', !1),
              v()(p()(r), '_isLabelLarge', function () {
                var e = r.state,
                  t = e.actualCount,
                  n = e.isFocused
                return !t && !n
              }),
              v()(
                p()(r),
                '_getTextInputStyle',
                Object(k.a)(function (e) {
                  return [j.root, !e && j.disabled]
                }),
              ),
              v()(p()(r), '_getTextInputType', function () {
                var e = r.props,
                  t = e.showPasswordVisibilityIcon,
                  n = e.type,
                  a = r.state.isPasswordRevealed
                return 'password' === n && t ? (a ? 'text' : 'password') : n
              }),
              v()(p()(r), '_calculateLength', function (e) {
                return z(e, r.props.calculateLength)
              }),
              v()(p()(r), '_shouldRenderDisplayCount', function () {
                var e = r.state.isFocused,
                  t = r._isFormInvalid()
                return Boolean((e || t) && r._getMaxDisplayCount())
              }),
              v()(p()(r), '_isInvalidNumber', function () {
                var e,
                  t,
                  n,
                  a,
                  i,
                  o = r.props.type,
                  l =
                    null === (e = r._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  c =
                    null === (n = r._textInput) ||
                    void 0 === n ||
                    null === (a = n.textInputNode) ||
                    void 0 === a ||
                    null === (i = a.validity) ||
                    void 0 === i
                      ? void 0
                      : i.badInput
                return 'number' === o && '' === l && !0 === c
              }),
              v()(p()(r), '_getActualCount', function (e) {
                var t = e.length
                return r._isInvalidNumber() && (t = 1), t
              }),
              v()(p()(r), '_handleBlur', function (e) {
                var t = r.props.onBlur,
                  n = e.currentTarget.value,
                  a = r._calculateLength(n),
                  i = r._getActualCount(n)
                r.setState({ isFocused: !1, displayCount: a, actualCount: i }), t && t(e)
              }),
              v()(p()(r), '_handleChange', function (e) {
                var t = r.props.onChange,
                  n = r.state.previousValue,
                  a = e.currentTarget.value,
                  i = r._calculateLength(a),
                  o = r._getActualCount(a),
                  l = r._getAdjustedMaxLength()
                void 0 !== l && a.length > l && n.length < a.length
                  ? (e.currentTarget.value = n)
                  : (r.setState({
                      isFocused: !0,
                      displayCount: i,
                      actualCount: o,
                      previousValue: e.currentTarget.value,
                    }),
                    t && t(e))
              }),
              v()(p()(r), '_handleFocus', function (e) {
                var t = r.props.onFocus
                r.setState({ isFocused: !0 }), t && t(e)
              }),
              v()(p()(r), '_handleKeyPress', function (e) {
                var t = r.props,
                  n = t.multiline,
                  a = t.onKeyPress,
                  i = t.onSubmitEditing
                a && a(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || n || !i || (e.preventDefault(), i(e))
              }),
              v()(p()(r), '_handleKeyDown', function (e) {
                var t = r.props.onKeyDown,
                  n = 0 === r.state.displayCount
                B.b.isKaiOS() && 'Backspace' === e.key && n ? (r._blurOnBackspaceKeyUpForKaiOS = n) : t && t(e)
              }),
              v()(p()(r), '_handleKeyUp', function (e) {
                var t = r.props.onKeyUp
                B.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  r._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), r.blur()),
                  t && t(e)
              }),
              v()(p()(r), '_handlePasswordVisibilityClick', function (e) {
                r.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              v()(p()(r), '_setTextInputRef', function (e) {
                r._textInput = e
              }),
              v()(p()(r), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  n = e.maxLength,
                  r = e.onChange,
                  a = e.validLength,
                  i = !!r,
                  o = 'string' == typeof e.value,
                  l = 'string' == typeof t
                L()(
                  !(!l && o && !i),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  L()(!(n && a && a > n), 'Max length should be equal or greater than valid length.'),
                  L()(
                    !((void 0 !== n && n <= 0) || (void 0 !== a && a <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              v()(p()(r), '_exceedsValidLength', function (e) {
                var t = r._getMaxDisplayCount()
                return !!t && e > t
              }),
              v()(p()(r), '_getMaxDisplayCount', function () {
                return r.props.validLength || r.props.maxLength
              }),
              v()(p()(r), '_getAdjustedMaxLength', function () {
                var e = r.props.maxLength,
                  t = r.getValue(),
                  n = r._calculateLength(t)
                return e ? e + t.length - n : void 0
              }),
              r._checkComponentPropsUsageCorrectness(e)
            var a = e.defaultValue,
              i = e.value || a || ''
            return (
              (r.state = {
                displayCount: r._calculateLength(i),
                actualCount: M(i),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: i,
              }),
              r
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
                      r = t.onChange,
                      a = t.validLength,
                      i = t.value,
                      o = e.maxLength,
                      l = e.onChange,
                      c = e.validLength,
                      s = e.value
                    ;(c === a && n === o && !!r === !!l && ('string' == typeof i) === ('string' == typeof s)) ||
                      this._checkComponentPropsUsageCorrectness(this.props)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.accessibilityLabel,
                      n = e.editable,
                      r = e.errorText,
                      a = e.helperText,
                      i = e.style,
                      o = this.state.isFocused,
                      l = this._isFormInvalid()
                    return w.a.createElement(
                      F.a,
                      { style: [N.root, i] },
                      w.a.createElement(
                        F.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            E.a.border,
                            N.textInputFormStyle,
                            l && E.a.invalidBorderColor,
                            o && l && E.a.focusedBorderInvalid,
                            o && !l && E.a.focusedBorderValid,
                            !n && E.a.disabled,
                          ],
                        },
                        w.a.createElement(
                          F.a,
                          { style: N.textInputFormWrapper },
                          w.a.createElement(
                            F.a,
                            { style: N.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      w.a.createElement(
                        F.a,
                        { style: [N.sidePadding, N.underTextInputForm] },
                        w.a.createElement(
                          F.a,
                          { style: N.subtextWrapper },
                          a ? this._renderHelperText() : null,
                          l && r ? this._renderErrorText() : null,
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
                      r = this._isLabelLarge()
                    return w.a.createElement(
                      C.b,
                      {
                        color: r ? 'gray700' : n,
                        numberOfLines: 1,
                        size: r ? 'headline1' : 'subtext2',
                        style: [
                          N.textInputHeaderItem,
                          r && N.placeholderText,
                          !T.a.reducedMotionEnabled && N.transition,
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
                      r =
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
                      i = (e.style, e.type, e.validLength, o()(e, H))
                    return w.a.createElement(
                      F.a,
                      { style: j.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      w.a.createElement(
                        C.b,
                        { size: 'headline1', style: j.wrapper },
                        w.a.createElement(
                          R.a,
                          a()({}, i, {
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
                      r && !this._isLabelLarge() ? this._renderValidationIcon() : null,
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
                      r = this.state.isPasswordRevealed
                    return 'password' === n && t
                      ? w.a.createElement(
                          F.a,
                          { style: N.passwordVisibilityIconContainer },
                          w.a.createElement(x.a, {
                            accessibilityLabel: r ? W : K,
                            focusable: !0,
                            hoverLabel: { label: r ? W : K },
                            icon: r ? w.a.createElement(O.a, null) : w.a.createElement(P.a, null),
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
                    return w.a.createElement(
                      F.a,
                      { accessibilityLiveRegion: 'polite' },
                      w.a.createElement(
                        C.b,
                        { color: 'gray700', size: 'subtext2', style: N.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return w.a.createElement(
                      F.a,
                      { accessibilityLiveRegion: 'assertive' },
                      w.a.createElement(
                        C.b,
                        { color: 'red500', size: 'subtext2', style: N.subtext },
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
                      r = t && _.a.ia24dc8c(t),
                      a = _.a.ia24dc8c(e)
                    return w.a.createElement(
                      F.a,
                      { accessibilityLiveRegion: 'polite', style: [N.textInputHeaderItem, N.displayCount] },
                      w.a.createElement(
                        C.b,
                        { color: n ? 'red500' : 'gray700', size: 'subtext2' },
                        r ? ''.concat(a, ' / ').concat(r) : '',
                      ),
                    )
                  },
                },
                {
                  key: '_renderIcon',
                  value: function () {
                    var e = this.props.Icon,
                      t = this.state.isFocused,
                      n = [N.icon, t && N.focusedIcon]
                    return e && w.a.createElement(e, { style: n })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? w.a.createElement(V.a, { style: [N.validationIcon, E.a.invalidColor] })
                      : w.a.createElement(D.a, { style: [N.validationIcon, E.a.validColor] })
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
                      r = e.value,
                      a = 'string' == typeof r ? z(r, n) : 0
                    return 'string' == typeof r && a !== t.displayCount
                      ? { displayCount: a, actualCount: r.length }
                      : null
                  },
                },
              ],
            ),
            n
          )
        })(w.a.Component)
      v()(U, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (U.propTypes = {})
      var j = A.a.create(function (e) {
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
        N = A.a.create(function (e) {
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
    piX5: function (e, t, n) {
      'use strict'
      n('uFXj'), n('2G9S')
      var r = n('rHpw').a.create(function (e) {
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
      t.a = r
    },
    taB0: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'rootDetailScreenTitle', function () {
          return b
        }),
        n.d(t, 'TwitterArticleListScreen', function () {
          return v
        })
      var r = n('ERkP'),
        a = n.n(r),
        i = n('pxuL'),
        o = n('RqPI'),
        l = n('6au1'),
        c = n('rxPX'),
        s = n('0KEI'),
        u = Object(c.a)()
          .propsFromState(function () {
            return { loggedInUserId: o.q }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
                'COMPOSE_TWITTER_ARTICLE_BUTTON',
              ),
              createTwitterArticle: l.a.create,
            }
          }),
        d = n('7oQY'),
        p = n('M2mT'),
        h = n('c6pJ'),
        f = n('MWbm'),
        m = n('/yvb'),
        y = n('rHpw'),
        b = 'Twitter Articles',
        v = function (e) {
          var t = a.a.useContext(i.a),
            n = t.decrementDmDrawerInhibitorCount,
            r = t.incrementDmDrawerInhibitorCount,
            o = e.createLocalApiErrorHandler,
            l = e.createTwitterArticle,
            c = e.history,
            s = e.loggedInUserId
          a.a.useEffect(
            function () {
              return (
                r(),
                function () {
                  n()
                }
              )
            },
            [n, r],
          )
          var u = a.a.createElement(m.a, {
            accessibilityLabel: 'create',
            icon: w,
            onPress: function () {
              l('')
                .then(function (e) {
                  if ('string' == typeof (null == e ? void 0 : e.result)) {
                    var t,
                      n,
                      r =
                        null == e ||
                        null === (t = e.entities) ||
                        void 0 === t ||
                        null === (n = t.twitterArticles) ||
                        void 0 === n
                          ? void 0
                          : n[e.result].rest_id
                    r && c.push('/i/twitter-article-composer/edit/'.concat(r))
                  }
                })
                .catch(o({ showToast: !0 }))
            },
            type: 'primaryText',
          })
          return s
            ? a.a.createElement(
                p.a,
                { rightControl: u, screenType: 'secondaryRoot', title: b },
                a.a.createElement(
                  f.a,
                  { style: g.container },
                  a.a.createElement(h.a, { linkToEditScreen: !0, publishedOnly: !1, userId: s }),
                ),
              )
            : null
        },
        g = y.a.create(function (e) {
          return { container: { backgroundColor: e.colors.cellBackground, flexGrow: 1 } }
        }),
        w = a.a.createElement(d.a, null),
        T = u(v)
      t.default = T
    },
    uy10: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'emptyStateHeaderLabel', function () {
          return p
        }),
        n.d(t, 'emptyStateMessage', function () {
          return h
        }),
        n.d(t, 'emptyStateButtonText', function () {
          return f
        }),
        n.d(t, 'errorToastText', function () {
          return m
        }),
        n.d(t, 'TwitterArticleComposerEmptyState', function () {
          return y
        })
      var r = n('ERkP'),
        a = n.n(r),
        i = n('6au1'),
        o = n('rxPX'),
        l = n('0KEI'),
        c = Object(o.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)(
              'CREATE_TWITTER_ARTICLE_BUTTON',
            ),
            createTwitterArticle: i.a.create,
          }
        }),
        s = n('zCf4'),
        u = n('FIs5'),
        d = n('rHpw'),
        p = "You don't have a draft selected",
        h = 'Choose one from your existing drafts, or start a new one.',
        f = 'New draft',
        m = 'There was an error creating a new draft',
        y = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.createTwitterArticle,
            r = Object(s.f)()
          return a.a.createElement(u.a, {
            buttonLink: '/i/twitter-article-composer',
            buttonText: f,
            header: p,
            message: h,
            onButtonPress: function () {
              n('', { contentStateJson: '' })
                .then(function (e) {
                  var t
                  null != e &&
                    e.result &&
                    'string' == typeof e.result &&
                    null !== (t = e.entities) &&
                    void 0 !== t &&
                    t.twitterArticles[e.result] &&
                    r.push('/i/twitter-article-composer/edit/'.concat(e.entities.twitterArticles[e.result].rest_id))
                })
                .catch(t({ showToast: !0 }))
            },
            style: b.root,
          })
        },
        b = d.a.create(function (e) {
          return {
            root: { alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: e.colors.cellBackground },
          }
        }),
        v = c(y)
      t.default = v
    },
  },
])
//# sourceMappingURL=WIPED
