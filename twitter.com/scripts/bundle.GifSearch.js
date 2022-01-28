;(window.webpackJsonp = window.webpackJsonp || []).push([
  [57],
  {
    '3GUV': function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        o = r('Y9Ll'),
        c = r.n(o),
        i = r('5Yy7'),
        u = r.n(i),
        l = r('N+ot'),
        s = r.n(l),
        f = r('AuHH'),
        h = r.n(f),
        d = r('ERkP'),
        y = r.n(d),
        p = r('rHpw'),
        g = r('MWbm')
      function m(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var r,
            n = h()(e)
          if (t) {
            var a = h()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return s()(this, r)
        }
      }
      var v = (function (e) {
          u()(r, e)
          var t = m(r)
          function r() {
            return a()(this, r), t.apply(this, arguments)
          }
          return (
            c()(r, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return y.a.createElement(g.a, { style: b.root })
                },
              },
            ]),
            r
          )
        })(y.a.Component),
        b = p.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = v
    },
    '5UID': function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        o = r('Y9Ll'),
        c = r.n(o),
        i = r('5Yy7'),
        u = r.n(i),
        l = r('N+ot'),
        s = r.n(l),
        f = r('AuHH'),
        h = r.n(f),
        d = r('ERkP'),
        y = r.n(d),
        p = r('3XMw'),
        g = r.n(p),
        m = r('rHpw'),
        v = r('+/1j'),
        b = r('MWbm')
      function O(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var r,
            n = h()(e)
          if (t) {
            var a = h()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return s()(this, r)
        }
      }
      var S = g.a.e5b0063d,
        w = 0,
        E = (function (e) {
          u()(r, e)
          var t = O(r)
          function r() {
            var e
            return a()(this, r), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(w)), (w += 1), e
          }
          return (
            c()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    r = e.title,
                    n = S({ title: r })
                  return y.a.createElement(
                    b.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    y.a.createElement(
                      v.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: m.a.visuallyHidden,
                      },
                      r,
                    ),
                    y.a.createElement(b.a, { accessibilityLabel: n }, t),
                  )
                },
              },
            ]),
            r
          )
        })(y.a.Component)
      t.a = E
    },
    EP6G: function (e, t, r) {
      'use strict'
      var n = r('VrFO'),
        a = r.n(n),
        o = r('Y9Ll'),
        c = r.n(o),
        i = r('1Pcy'),
        u = r.n(i),
        l = r('5Yy7'),
        s = r.n(l),
        f = r('N+ot'),
        h = r.n(f),
        d = r('AuHH'),
        y = r.n(d),
        p = r('KEM+'),
        g = r.n(p),
        m = r('ddV6'),
        v = r.n(m),
        b = (r('7xRU'), r('z84I'), r('OZaJ'), r('ERkP')),
        O = r.n(b),
        S = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('RhWx')),
        w = r.n(S),
        E = (r('tQbP'), r('zh9S')),
        P = r('xVN5'),
        _ = r('CDB5'),
        j = r('Qyxo'),
        R = r('hqKg'),
        x = r('AspN'),
        C = r('oEGd')
      function I(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? I(Object(r), !0).forEach(function (t) {
                g()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : I(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var k = Object(R.createSelector)(
          function (e, t) {
            var r = t.module,
              n = t.query
            return r.selectInitialFetchStatus(e, n)
          },
          function (e, t) {
            var r = t.module,
              n = t.query
            return r.selectItems(e, n)
          },
          function (e, t) {
            var r = t.module,
              n = t.query
            return r.selectNextFetchStatus(e, n)
          },
          function (e, t, r) {
            return {
              initialFetchStatus: e,
              items: Array.isArray(t)
                ? Object(j.a)(t, function (e) {
                    return e.url
                      ? N(
                          N({}, e),
                          {},
                          {
                            thumbnail_images: w()(e.thumbnail_images).sort(function (e, t) {
                              return t.height * t.width - e.height * e.width
                            }),
                          },
                        )
                      : void 0
                  })
                : void 0,
              nextFetchStatus: r,
            }
          },
        ),
        M = Object(C.d)(k, function (e) {
          var t,
            r = e.history,
            n = e.module
          return {
            addExternalMediaUpload: x.a,
            addMediaToDM:
              ((t = r.location.state),
              function (e, r) {
                var n = t && t.dmConversationId
                return Object(_.a)(n, e, r)
              }),
            setMediaMetadata: x.n,
            fetchInitialIfNeeded: n.fetchInitialIfNeeded,
            fetchNextIfNeeded: n.fetchNextIfNeeded,
            scribeAction: E.c,
            updateSingleComposerV2: P.x,
          }
        }),
        A = r('v//M'),
        D = r('x5W0'),
        G = r('U+bB'),
        F = r('XOY5'),
        T = r('cm6r'),
        B = r('rHpw')
      function L(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var r,
            n = y()(e)
          if (t) {
            var a = y()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return h()(this, r)
        }
      }
      var K = (function (e) {
          s()(r, e)
          var t = L(r)
          function r() {
            return a()(this, r), t.apply(this, arguments)
          }
          return (
            c()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.backgroundColor,
                    r = e.height,
                    n = e.onClick,
                    a = e.width
                  return O.a.createElement(
                    T.a,
                    { onPress: n, style: [H.imageContainer, q(t, r, a).background] },
                    this._renderPreview(),
                  )
                },
              },
              {
                key: '_renderPreview',
                value: function () {
                  var e = this.props,
                    t = e.altText,
                    r = e.animatedMediaUrl,
                    n = e.height,
                    a = e.shouldAutoPlayGif,
                    o = e.stillMediaUrl,
                    c = { height: n, width: e.width, uri: a ? r : o }
                  return O.a.createElement(G.a, { accessibilityLabel: t, source: c, testID: F.a.gifSearchGifImage })
                },
              },
            ]),
            r
          )
        })(O.a.Component),
        q = function (e, t, r) {
          return B.a.create(function (n) {
            return { background: { backgroundColor: e, height: t, width: r } }
          })
        },
        H = B.a.create(function (e) {
          return { imageContainer: { marginHorizontal: '1px', overflow: 'hidden', flexShrink: 1 } }
        }),
        U = K,
        V = r('MLl7'),
        Y = r('3XMw'),
        Q = r.n(Y),
        W = r('TEoO'),
        X = r('eyty'),
        z = r('7nmT'),
        J = r.n(z),
        Z = r('MWbm')
      r('KOtZ')
      function $(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? $(Object(r), !0).forEach(function (t) {
                g()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : $(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var te = function (e, t) {
        var r = e.reduce(function (e, t) {
          var r = t.original_image
          return e + r.width / r.height
        }, 0)
        return Math.ceil(t / r)
      }
      function re(e, t, r) {
        return e
          .reduce(
            function (e, n, a) {
              return (
                e[e.length - 1].push(ee(ee({}, n), {}, { index: a })),
                e[e.length - 1].length > 0 && te(e[e.length - 1], r) < t && e.push([]),
                e
              )
            },
            [[]],
          )
          .filter(function (e) {
            return e.length > 0
          })
      }
      var ne = r('VPAj'),
        ae = r('oQhu'),
        oe = r('FIs5')
      function ce(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var r,
            n = y()(e)
          if (t) {
            var a = y()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return h()(this, r)
        }
      }
      var ie = Q.a.a66b7760,
        ue = Q.a.b719e223,
        le = Q.a.aed71818,
        se = function (e) {
          return e
            .map(function (e) {
              return e.id
            })
            .join('-')
        },
        fe = Object(ne.a)(null),
        he = [],
        de = Object(ae.a)(function (e, t, r) {
          return function (n) {
            var a = te(n, t),
              o = t - 2 * n.length - 1,
              c = 0
            return O.a.createElement(
              Z.a,
              { style: [ge.imageRow, { height: a }] },
              n.map(function (t, i) {
                var u = v()(t.thumbnail_images, 1)[0],
                  l = a / u.height,
                  s = i === n.length - 1 ? o - c : Math.round(u.width * l),
                  f = u.still_image_url,
                  h = u.url
                return (
                  (c += s),
                  O.a.createElement(U, {
                    altText: t.alt_text || ie,
                    animatedMediaUrl: h,
                    backgroundColor: Object(D.a)(t.index),
                    height: a,
                    key: t.index,
                    onClick: r(t),
                    shouldAutoPlayGif: e,
                    stillMediaUrl: f,
                    width: s,
                  })
                )
              }),
            )
          }
        }),
        ye = Object(ae.a)(function (e, t) {
          return O.a.createElement(A.a, { fetchStatus: e, onRequestRetry: t, render: fe })
        }),
        pe = (function (e) {
          s()(r, e)
          var t = ce(r)
          function r(e, n) {
            var o
            return (
              a()(this, r),
              (o = t.call(this, e, n)),
              g()(u()(o), '_rootNode', null),
              g()(u()(o), '_render', function () {
                var e = o.props,
                  t = e.items,
                  r = e.query,
                  n = o.state.width,
                  a = t ? o._brickLayout(t, 150, n) : he
                return n > 0
                  ? O.a.createElement(W.a, {
                      assumedItemHeight: 150,
                      cacheKey: 'gifSearchCategory/'.concat(r),
                      footer: o._getRenderFooter(),
                      identityFunction: se,
                      items: a,
                      noItemsRenderer: o._renderEmptyItem,
                      onNearEnd: o._handleFetchNext,
                      renderer: o._getRowRenderer(),
                    })
                  : null
              }),
              g()(u()(o), '_getRowRenderer', function () {
                var e = o.props.shouldAutoPlayGif,
                  t = o.state.width
                return de(e, t, o._handleClickFactory)
              }),
              g()(u()(o), '_handleClickFactory', function (e) {
                return function () {
                  var t = o.props,
                    r = t.addExternalMediaUpload,
                    n = t.addMediaToDM,
                    a = t.fromSearch,
                    c = t.gifSearchKey,
                    i = t.history,
                    u = t.scribeAction,
                    l = t.setMediaMetadata,
                    s = t.updateSingleComposerV2,
                    f = e.alt_text,
                    h = e.found_media_origin,
                    d = e.provider,
                    y = e.original_image.url,
                    p = e.preview_image,
                    g = p.height,
                    m = p.url,
                    b = p.width,
                    O = v()(e.thumbnail_images, 1)[0],
                    S = e.url,
                    w = r({
                      mediaCategory: c === V.a.Composition ? X.b.TweetGif : X.b.DMGif,
                      mediaType: 'image/gif',
                      previewMediaType: 'video/mp4',
                      previewUrl: m,
                      sourceUrl: y,
                      stillMediaUrl: O.still_image_url,
                      width: b,
                      height: g,
                    }).map(function (e) {
                      return e.id
                    }),
                    E = { found_media_origin: h, provider: d, url: S }
                  f && l(w[0], { defaultAltText: f }),
                    c === V.a.Composition
                      ? s({ updates: { mediaIds: w, gifMetadata: E } })
                      : c === V.a.DMComposition && n(w, E),
                    u({ page: c, section: 'gif_search', element: 'category', action: a ? 'search' : 'select' }),
                    i.go(-2)
                }
              }),
              g()(u()(o), '_renderEmptyItem', function () {
                return O.a.createElement(oe.a, { header: ue, message: le })
              }),
              g()(u()(o), '_getRenderFooter', function () {
                var e = o.props.nextFetchStatus
                return ye(e, o._handleFetchNext)
              }),
              g()(u()(o), '_handleFetch', function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.props.query,
                  t = o.props.fetchInitialIfNeeded
                t({ query: e })
              }),
              g()(u()(o), '_handleFetchNext', function () {
                var e = o.props
                ;(0, e.fetchNextIfNeeded)({ query: e.query })
              }),
              g()(u()(o), '_handleResize', function () {
                o._rootNode && o._rootNode instanceof Element && o.setState({ width: o._rootNode.clientWidth })
              }),
              g()(u()(o), '_brickLayout', Object(ae.a)(re)),
              g()(u()(o), '_setRootNode', function (e) {
                o._rootNode = J.a.findDOMNode(e)
              }),
              (o.state = { width: 0 }),
              o
            )
          }
          return (
            c()(r, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  e.query !== this.props.query && this._handleFetch(this.props.query)
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  window.addEventListener('resize', this._handleResize), this._handleFetch(), this._handleResize()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  window.removeEventListener('resize', this._handleResize)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.initialFetchStatus
                  return O.a.createElement(
                    'div',
                    { ref: this._setRootNode },
                    O.a.createElement(A.a, {
                      fetchStatus: e,
                      onRequestRetry: this._handleFetch,
                      ref: this._setRootNode,
                      render: this._render,
                    }),
                  )
                },
              },
            ]),
            r
          )
        })(O.a.Component)
      g()(pe, 'defaultProps', { fromSearch: !1 })
      var ge = B.a.create(function (e) {
        return {
          emptyItem: {
            display: 'inline-block',
            paddingHorizontal: e.spaces.space12,
            paddingVertical: e.spaces.space32,
          },
          imageRow: { flexDirection: 'row', marginBottom: 2 },
        }
      })
      t.a = M(pe)
    },
    TEoO: function (e, t, r) {
      'use strict'
      var n = r('m3Bd'),
        a = r.n(n),
        o = r('ERkP'),
        c = r.n(o),
        i = r('5UID'),
        u = r('3GUV'),
        l = r('iBK2'),
        s = c.a.createElement(u.a, null),
        f = function (e) {
          var t = e.accessibilityTitle,
            r = a()(e, ['accessibilityTitle']),
            n = c.a.createElement(l.b, r)
          return t ? c.a.createElement(i.a, { title: t }, n) : n
        }
      ;(f.defaultProps = { footer: s }), (t.a = f)
    },
    XOY5: function (e, t, r) {
      'use strict'
      t.a = { gifSearchSearchInput: 'gifSearchSearchInput', gifSearchGifImage: 'gifSearchGifImage' }
    },
    XYn1: function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r('ERkP'),
        a = r.n(n),
        o = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('ddV6')),
        c = r.n(o),
        i = r('KEM+'),
        u = r.n(i),
        l = (r('2G9S'), r('z84I'), r('zh9S')),
        s = r('pX0s'),
        f = r('lnti'),
        h = r('hqKg'),
        d = r('oEGd'),
        y = s.a,
        p = Object(h.createSelector)(
          function (e) {
            return y.selectItems(e)
          },
          function (e) {
            return y.selectInitialFetchStatus(e)
          },
          function (e, t) {
            return {
              categories:
                e &&
                Object(f.a)(
                  e.map(function (e) {
                    return e.display_name ? e : void 0
                  }),
                ),
              initialFetchStatus: t,
            }
          },
        ),
        g = { fetchInitialIfNeeded: y.fetchInitialIfNeeded, fetchNextIfNeeded: y.fetchNextIfNeeded, scribeAction: l.c },
        m = Object(d.g)(p, g),
        v = r('v//M'),
        b = r('jHSc'),
        O = r('x5W0'),
        S = r('ij+d'),
        w = r('3XMw'),
        E = r.n(w),
        P = r('cm6r'),
        _ = r('t62R'),
        j = r('rHpw'),
        R = r('7JQg'),
        x = r('U+bB'),
        C = r('MWbm')
      function I(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? I(Object(r), !0).forEach(function (t) {
                u()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : I(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var k = E.a.c6f5ac52,
        M = a.a.memo(function (e) {
          var t = e.category,
            r = e.gifSearchKey,
            n = e.history,
            o = e.index,
            c = e.withLeftMargin,
            i = t.display_name,
            u = t.original_image.still_image_url,
            l = a.a.useCallback(
              function () {
                var e,
                  a = null === (e = n.location.state) || void 0 === e ? void 0 : e.dmConversationId
                n.push({
                  pathname: ''.concat(S.GifSearchPaths.category, '/').concat(t.id),
                  state: { category: t, gifSearchKey: r, dmConversationId: a },
                })
              },
              [n, t, r],
            )
          return a.a.createElement(
            P.a,
            { onPress: l, style: [A.category, c && A.leftMargin] },
            a.a.createElement(x.a, { source: u, style: [A.categoryImage, { backgroundColor: Object(O.a)(o) }] }),
            a.a.createElement(
              C.a,
              { style: A.categoryNameContainer },
              a.a.createElement(_.b, { color: 'white', size: 'headline1', weight: 'bold' }, i),
            ),
          )
        }),
        A = j.a.create(function (e) {
          return {
            row: { flexDirection: 'row', marginTop: e.spaces.space4 },
            firstRow: { marginTop: 0 },
            category: { height: '10rem', flexGrow: 1 },
            leftMargin: { marginLeft: e.spaces.space4 },
            categoryImage: { flexGrow: 1 },
            categoryNameContainer: {
              position: 'absolute',
              bottom: 0,
              width: '100%',
              padding: e.spaces.space8,
              backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))',
            },
          }
        }),
        D = Object(R.c)({ element: 'category' })(
          m(function (e) {
            var t,
              r = e.categories,
              n = e.fetchInitialIfNeeded,
              o = e.gifSearchKey,
              i = e.history,
              u = e.initialFetchStatus,
              l = e.location,
              s = e.scribeAction,
              f = e.scribeNamespace,
              h = e.searchBox,
              d = a.a.useCallback(
                function () {
                  n()
                },
                [n],
              ),
              y = null == l || null === (t = l.state) || void 0 === t ? void 0 : t.searchFocused,
              p = a.a.useCallback(
                function () {
                  y || s(N(N({}, f), {}, { action: 'cancel' })), i.goBack({ backLocation: '/' })
                },
                [i, y, s, f],
              ),
              g = a.a.useCallback(
                function () {
                  var e = []
                  if (r) for (var t = 0; t < r.length; t += 2) e.push([r[t], r[t + 1]])
                  return a.a.createElement(
                    C.a,
                    null,
                    a.a.Children.toArray(
                      e.map(function (e, t) {
                        var r = c()(e, 2),
                          n = r[0],
                          u = r[1]
                        return a.a.createElement(
                          C.a,
                          { style: [A.row, 0 === t && A.firstRow] },
                          a.a.createElement(M, {
                            category: n,
                            gifSearchKey: o,
                            history: i,
                            index: 2 * t,
                            withLeftMargin: !1,
                          }),
                          u
                            ? a.a.createElement(M, {
                                category: u,
                                gifSearchKey: o,
                                history: i,
                                index: 2 * t + 1,
                                withLeftMargin: !0,
                              })
                            : null,
                        )
                      }),
                    ),
                  )
                },
                [r, o, i],
              )
            return (
              a.a.useEffect(
                function () {
                  d()
                },
                [d],
              ),
              a.a.createElement(
                b.b,
                { documentTitle: k, history: i, middleControl: h, onBackClick: p },
                a.a.createElement(v.a, { fetchStatus: u, onRequestRetry: d, render: g }),
              )
            )
          }),
        ),
        G = (r('OZaJ'), r('VrFO')),
        F = r.n(G),
        T = r('Y9Ll'),
        B = r.n(T),
        L = r('1Pcy'),
        K = r.n(L),
        q = r('5Yy7'),
        H = r.n(q),
        U = r('N+ot'),
        V = r.n(U),
        Y = r('AuHH'),
        Q = r.n(Y),
        W = r('hiCj'),
        X = r('VAZu'),
        z = r('EP6G'),
        J = r('MLl7')
      function Z(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var r,
            n = Q()(e)
          if (t) {
            var a = Q()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return V()(this, r)
        }
      }
      var $ = E.a.ab468378,
        ee = (function (e) {
          H()(r, e)
          var t = Z(r)
          function r() {
            var e
            F()(this, r)
            for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              u()(K()(e), 'state', { shouldAutoPlayGifOverride: null }),
              u()(K()(e), '_handleToggleChange', function (t) {
                e.setState({ shouldAutoPlayGifOverride: t })
              }),
              u()(K()(e), '_renderHeader', function () {
                var t = e.props,
                  r = t.history,
                  n = t.searchBox
                return a.a.createElement(X.a, { history: r, middleControl: n })
              }),
              e
            )
          }
          return (
            B()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.gifSearchKey,
                    r = e.history,
                    n = e.location,
                    o = e.query,
                    c = e.searchBox,
                    i = e.shouldAutoPlayGif,
                    u = this.state.shouldAutoPlayGifOverride,
                    l = Object(J.c)(u, i)
                  return a.a.createElement(
                    b.b,
                    { backButtonType: 'back', documentTitle: $({ query: o }), history: r, middleControl: c },
                    a.a.createElement(W.a, {
                      location: n,
                      onToggleChange: this._handleToggleChange,
                      shouldAutoPlayGif: l,
                    }),
                    a.a.createElement(z.a, {
                      fromSearch: !0,
                      gifSearchKey: t,
                      history: r,
                      module: s.c,
                      query: o,
                      shouldAutoPlayGif: l,
                    }),
                  )
                },
              },
            ]),
            r
          )
        })(a.a.Component),
        te = Object(R.c)({ element: 'gallery' })(ee)
      t.default = function (e) {
        var t = e.gifSearchKey,
          r = e.history,
          n = e.location,
          o = e.searchBox,
          c = e.shouldAutoPlayGif,
          i = n.state && n.state.query
        return i
          ? a.a.createElement(te, {
              gifSearchKey: t,
              history: r,
              location: n,
              query: i,
              searchBox: o,
              shouldAutoPlayGif: c,
            })
          : a.a.createElement(D, { gifSearchKey: t, history: r, location: n, searchBox: o })
      }
    },
    hiCj: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        o = r('Y9Ll'),
        c = r.n(o),
        i = r('1Pcy'),
        u = r.n(i),
        l = r('5Yy7'),
        s = r.n(l),
        f = r('N+ot'),
        h = r.n(f),
        d = r('AuHH'),
        y = r.n(d),
        p = r('KEM+'),
        g = r.n(p),
        m = (r('2G9S'), r('ERkP')),
        v = r.n(m),
        b = r('P1r1'),
        O = r('0KEI'),
        S = r('oEGd'),
        w = {
          createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
            'FOUND_MEDIA_AUTOPLAY_TOGGLE',
          ),
          updateSettings: b.L,
        },
        E = Object(S.g)(function () {
          return {}
        }, w),
        P = r('3XMw'),
        _ = r.n(P),
        j = r('fHOo'),
        R = r('MWbm'),
        x = r('t62R'),
        C = r('CK8+'),
        I = r('rHpw')
      function N(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var r,
            n = y()(e)
          if (t) {
            var a = y()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return h()(this, r)
        }
      }
      var k = _.a.j7fc4f9b,
        M = (function (e) {
          s()(r, e)
          var t = N(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(u()(e), '_handleSwitchChanged', function (t) {
                var r = e.props,
                  n = r.createLocalApiErrorHandler,
                  a = r.onToggleChange
                ;(0, r.updateSettings)({ shouldAutoPlayGif: t }).catch(n({ showToast: !0 })), a(t)
              }),
              e
            )
          }
          return (
            c()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    r = e.shouldAutoPlayGif,
                    n = t.state && t.state.query,
                    a = t.state && t.state.category ? t.state.category.display_name : ''
                  return Object(j.a)() && (n || a)
                    ? v.a.createElement(
                        R.a,
                        { style: A.root },
                        v.a.createElement(x.b, { color: 'gray700' }, k),
                        v.a.createElement(C.a, {
                          accessibilityLabel: k,
                          onValueChange: this._handleSwitchChanged,
                          value: r,
                        }),
                      )
                    : null
                },
              },
            ]),
            r
          )
        })(v.a.Component),
        A = I.a.create(function (e) {
          return { root: { flexDirection: 'row', justifyContent: 'space-between', margin: e.spaces.space12 } }
        })
      t.a = E(M)
    },
    'ij+d': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'GifSearchPaths', function () {
          return X
        }),
        r.d(t, 'GifSearchScreen', function () {
          return z
        })
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        o = r('Y9Ll'),
        c = r.n(o),
        i = r('1Pcy'),
        u = r.n(i),
        l = r('5Yy7'),
        s = r.n(l),
        f = r('N+ot'),
        h = r.n(f),
        d = r('AuHH'),
        y = r.n(d),
        p = r('KEM+'),
        g = r.n(p),
        m =
          (r('JtPf'),
          r('7x/C'),
          r('87if'),
          r('lTEL'),
          r('kYxP'),
          r('3voH'),
          r('KqXw'),
          r('MvUL'),
          r('2G9S'),
          r('ERkP')),
        v = r.n(m),
        b = r('38/B'),
        O = r('hqKg'),
        S = r('H9MA'),
        w = r('zHh/'),
        E = r('oEGd'),
        P = r('P1r1'),
        _ = Object(O.createSelector)(P.g, P.k, S.d, function (e, t, r) {
          return {
            isDataSaverEnabled: t,
            shouldAutoPlayGif: (e.shouldAutoPlayGif || Object(w.a)(r)) && !b.a.reducedMotionEnabled,
          }
        }),
        j = Object(E.c)(_),
        R = r('Y6L+'),
        x = r('3XMw'),
        C = r.n(x),
        I = r('VwDm'),
        N = r('MLl7'),
        k = r('/de5'),
        M = r('5FtR'),
        A = r('wytG'),
        D = r('7JQg'),
        G = r('XOY5'),
        F = r('MWbm'),
        T = r('6OUF'),
        B = r('/yvb'),
        L = r('rHpw'),
        K = r('oQhu'),
        q = r('VY6S'),
        H = r('Ty5D')
      function U(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var r,
            n = y()(e)
          if (t) {
            var a = y()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return h()(this, r)
        }
      }
      var V = C.a.a50ba821,
        Y = C.a.a9ae1e78,
        Q = Object(A.a)(function () {
          return Promise.resolve().then(r.bind(null, 'XYn1'))
        }),
        W = Object(A.a)(function () {
          return Promise.resolve().then(r.bind(null, 'k5pS'))
        }),
        X = { category: '/i/foundmedia/category', search: '/i/foundmedia/search' },
        z = (function (e) {
          s()(r, e)
          var t = U(r)
          function r(e) {
            var n
            return (
              a()(this, r),
              (n = t.call(this, e)),
              g()(u()(n), 'state', { searchDisabled: !0 }),
              g()(u()(n), '_gifSearchKey', n._getGifSearchKey()),
              g()(
                u()(n),
                '_getScribeNamespace',
                Object(K.a)(function (e) {
                  return { page: e, section: 'gif_search' }
                }),
              ),
              g()(u()(n), '_setTextInputRef', function (e) {
                n._textInputRef = e
              }),
              g()(u()(n), '_handleChange', function (e) {
                var t = e.currentTarget.value
                n._shouldRenderResultsOnChange ? n._goToQueryDebounced(t) : n.setState({ searchDisabled: !t })
              }),
              g()(u()(n), '_handleClear', function () {
                var e = n.props,
                  t = e.history,
                  r = e.isDataSaverEnabled,
                  a = e.location,
                  o = a.pathname.startsWith(X.category),
                  c = a.pathname === X.search && a.state && a.state.query
                !r && (o || c) ? t.goBack() : r && n.setState({ searchDisabled: !0 })
              }),
              g()(u()(n), '_handleSubmit', function () {
                var e = n._textInputRef && n._textInputRef.getValue()
                n._goToQuery(e)
              }),
              g()(u()(n), '_handleSearch', function (e) {
                var t = e.currentTarget.value
                n._goToQuery(t)
              }),
              g()(u()(n), '_goToQuery', function (e) {
                var t = n.props,
                  r = t.history,
                  a = t.isDataSaverEnabled,
                  o = t.location,
                  c = {}
                c.pathname = X.search
                var i = o.state && o.state.query,
                  u = o.pathname === X.search && !i,
                  l = o.pathname.startsWith(X.category) || (o.pathname === X.search && i),
                  s = !a && l,
                  f = o.state && o.state.dmConversationId
                e ? ((c.state = { dmConversationId: f, query: e }), u ? r.push(c) : r.replace(c)) : s && r.goBack()
              }),
              (n._goToQueryDebounced = Object(q.a)(function () {
                var e
                return (e = n)._goToQuery.apply(e, arguments)
              }, 500)),
              (n._shouldRenderResultsOnChange = !n.props.isDataSaverEnabled),
              n
            )
          }
          return (
            c()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    r = e.location,
                    n = e.shouldAutoPlayGif,
                    a = {
                      gifSearchKey: this._gifSearchKey,
                      history: t,
                      location: r,
                      searchBox: this._renderSearchBox(),
                      shouldAutoPlayGif: n,
                    },
                    o = this._gifSearchKey ? this._gifSearchKey : void 0
                  return this._gifSearchKey
                    ? v.a.createElement(
                        D.b,
                        { namespace: this._getScribeNamespace(o) },
                        v.a.createElement(
                          H.e,
                          null,
                          v.a.createElement(H.c, { exact: !0, path: X.search }, v.a.createElement(Q, a)),
                          v.a.createElement(
                            H.c,
                            { exact: !0, path: ''.concat(X.category, '/').concat(R.o) },
                            v.a.createElement(W, a),
                          ),
                          v.a.createElement(H.c, { component: k.b }),
                        ),
                      )
                    : v.a.createElement(M.a, { to: '/' })
                },
              },
              {
                key: '_getGifSearchKey',
                value: function () {
                  var e = this.props.location.state || {},
                    t = e.gifSearchKey,
                    r = e.gifSearchKeySource
                  return t || (r && Object(N.b)(r) && r)
                },
              },
              {
                key: '_getQueryOrCategory',
                value: function () {
                  var e = this.props.location,
                    t = e.state && e.state.query,
                    r = e.state && e.state.category ? e.state.category.display_name : ''
                  return t || r
                },
              },
              {
                key: '_renderSearchBox',
                value: function () {
                  var e = this.state.searchDisabled,
                    t = this._getQueryOrCategory()
                  return v.a.createElement(
                    F.a,
                    { style: J.searchContainer },
                    v.a.createElement(T.a, {
                      Icon: I.a,
                      autoFocus: !0,
                      defaultValue: t,
                      key: t,
                      onChange: this._handleChange,
                      onClear: this._handleClear,
                      onSubmitEditing: this._handleSearch,
                      placeholder: V,
                      ref: this._setTextInputRef,
                      style: J.searchInput,
                      testID: G.a.gifSearchSearchInput,
                      withClearButton: !0,
                    }),
                    this._shouldRenderResultsOnChange
                      ? null
                      : v.a.createElement(
                          B.a,
                          {
                            disabled: e,
                            onPress: this._handleSubmit,
                            size: 'small',
                            style: J.searchButton,
                            type: 'brandFilled',
                          },
                          Y,
                        ),
                  )
                },
              },
            ]),
            r
          )
        })(v.a.Component),
        J = L.a.create(function (e) {
          return {
            searchContainer: { alignItems: 'center', flex: 1, flexDirection: 'row', marginVertical: e.spaces.space8 },
            searchInput: { height: '100%' },
            searchButton: { marginStart: e.spaces.space12 },
          }
        })
      t.default = j(z)
    },
    k5pS: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'GifSearchCategory', function () {
          return C
        })
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        o = r('Y9Ll'),
        c = r.n(o),
        i = r('1Pcy'),
        u = r.n(i),
        l = r('5Yy7'),
        s = r.n(l),
        f = r('N+ot'),
        h = r.n(f),
        d = r('AuHH'),
        y = r.n(d),
        p = r('KEM+'),
        g = r.n(p),
        m = (r('2G9S'), r('ERkP')),
        v = r.n(m),
        b = r('hiCj'),
        O = r('pX0s'),
        S = r('jHSc'),
        w = r('EP6G'),
        E = r('3XMw'),
        P = r.n(E),
        _ = r('7JQg'),
        j = r('MLl7')
      function R(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var r,
            n = y()(e)
          if (t) {
            var a = y()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return h()(this, r)
        }
      }
      var x = P.a.f5ff0d6f,
        C = (function (e) {
          s()(r, e)
          var t = R(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(u()(e), 'state', { shouldAutoPlayGifOverride: null }),
              g()(u()(e), '_handleToggleChange', function (t) {
                e.setState({ shouldAutoPlayGifOverride: t })
              }),
              e
            )
          }
          return (
            c()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.gifSearchKey,
                    r = e.history,
                    n = e.location,
                    a = e.searchBox,
                    o = e.shouldAutoPlayGif,
                    c = n.state && n.state.category,
                    i = c && c.display_name,
                    u = this.state.shouldAutoPlayGifOverride,
                    l = Object(j.c)(u, o)
                  return v.a.createElement(
                    S.b,
                    { backButtonType: 'back', documentTitle: x({ category: i }), history: r, middleControl: a },
                    v.a.createElement(b.a, {
                      location: n,
                      onToggleChange: this._handleToggleChange,
                      shouldAutoPlayGif: l,
                    }),
                    !!c &&
                      v.a.createElement(w.a, {
                        gifSearchKey: t,
                        history: r,
                        module: O.b,
                        query: c.id,
                        shouldAutoPlayGif: l,
                      }),
                  )
                },
              },
            ]),
            r
          )
        })(v.a.Component)
      t.default = Object(_.c)({ element: 'gallery' })(C)
    },
    pX0s: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return E
      }),
        r.d(t, 'b', function () {
          return P
        }),
        r.d(t, 'c', function () {
          return _
        })
      r('+KXO'), r('1t7P'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        o = r('RhWx'),
        c = r.n(o),
        i = (r('LW0h'), r('2G9S'), r('LJOr'), r('KqXw'), r('9OUN')),
        u = r('m3Bd'),
        l = r.n(u),
        s = (r('JtPf'), r('7x/C'), r('oEOe')),
        f = r('kGix'),
        h = 'gifSearch',
        d = 'rweb/'.concat(h)
      function y(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? y(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : y(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var g = {},
        m = { cursor: {}, items: [], initialFetchStatus: f.a.NONE, nextFetchStatus: f.a.NONE },
        v = function (e) {
          var t = e.defaultQuery,
            r = e.getApiMethod,
            n = e.getParams,
            o = e.localNamespace,
            c = e.mergeNewItems,
            i = s.a(''.concat(d, '/').concat(o), 'FETCH'),
            u = function (e, t, r) {
              var n = r.fetchStatus,
                o = l()(r, ['fetchStatus']),
                c = e[t] || {},
                i = (c.cursor || {}).next ? 'nextFetchStatus' : 'initialFetchStatus'
              return p(p({}, e), {}, a()({}, t, p(p(p(p({}, m), c), o), {}, a()({}, i, n))))
            },
            h = function (e) {
              var t = e.cursor,
                a = e.query
              return function (e, o, c) {
                var u = c.api
                return s.b(e, { request: r(u), params: n(t, a) })({ actionTypes: i, meta: { query: a } })
              }
            },
            y = function (e) {
              var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t
              return (e.gifSearch[o] || {})[r] || {}
            }
          return {
            actionTypes: i,
            fetchInitialIfNeeded: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = e.query,
                n = void 0 === r ? t : r
              return function (e, t, r) {
                r.api
                var a = y(t(), n)
                return a.initialFetchStatus === f.a.LOADING || a.items ? Promise.resolve() : e(h({ query: n }))
              }
            },
            fetchNextIfNeeded: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = e.query,
                n = void 0 === r ? t : r
              return function (e, t, r) {
                r.api
                var a = y(t(), n),
                  o = a.cursor,
                  c = void 0 === o ? {} : o
                return a.nextFetchStatus !== f.a.LOADING && c.next
                  ? e(h({ query: n, cursor: c.next }))
                  : Promise.resolve()
              }
            },
            reducer: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
                t = arguments.length > 1 ? arguments[1] : void 0
              switch (t.type) {
                case i.REQUEST:
                  var r = t.meta.query
                  return u(e, r, { fetchStatus: f.a.LOADING })
                case i.FAILURE:
                  var n = t.meta.query
                  return u(e, n, { fetchStatus: f.a.FAILED })
                case i.SUCCESS:
                  var a = t.payload.cursor,
                    o = t.meta.query,
                    l = (e[o] || {}).items || []
                  return u(e, o, { cursor: a, fetchStatus: f.a.LOADED, items: c(l, t.payload) })
                default:
                  return e
              }
            },
            selectInitialFetchStatus: function (e, t) {
              return y(e, t).initialFetchStatus || f.a.NONE
            },
            selectItems: function (e, t) {
              return y(e, t).items
            },
            selectNextFetchStatus: function (e, t) {
              return y(e, t).nextFetchStatus || f.a.NONE
            },
            selectQueryState: y,
          }
        },
        b = r('Ssj5')
      function O(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? O(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : O(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var w = function (e) {
          return e.filter(function (e) {
            var t = e.original_image,
              r = (t = void 0 === t ? {} : t).height,
              n = t.width
            return r > 0 && n > 0
          })
        },
        E = v({
          defaultQuery: 'categories',
          getApiMethod: function (e) {
            return e.GifSearch.categories
          },
          getParams: function (e) {
            return e ? { cursor: e } : {}
          },
          mergeNewItems: function (e, t) {
            var r
            return [].concat(
              c()(e),
              c()((null == t || null === (r = t.data) || void 0 === r ? void 0 : r.groups) || []),
            )
          },
          localNamespace: 'categories',
        }),
        P = v({
          getApiMethod: function (e) {
            return e.GifSearch.category
          },
          getParams: function (e, t) {
            return S({ category: t }, e ? { cursor: e } : {})
          },
          mergeNewItems: function (e, t) {
            var r
            return [].concat(
              c()(e),
              c()(w((null == t || null === (r = t.data) || void 0 === r ? void 0 : r.items) || [])),
            )
          },
          localNamespace: 'category',
        }),
        _ = v({
          getApiMethod: function (e) {
            return e.GifSearch.search
          },
          getParams: function (e, t) {
            return S({ q: t }, e ? { cursor: e } : {})
          },
          mergeNewItems: function (e, t) {
            var r
            return [].concat(
              c()(e),
              c()(w((null == t || null === (r = t.data) || void 0 === r ? void 0 : r.items) || [])),
            )
          },
          localNamespace: 'search',
        }),
        j = Object(i.c)({ categories: E.reducer, category: P.reducer, search: _.reducer })
      b.a.register(a()({}, h, j))
    },
    x5W0: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return l
      })
      var n = r('rHpw').a.theme.colors,
        a = n.blue500,
        o = n.green500,
        c = n.magenta500,
        i = [a, o, n.orange500, n.purple500, c, n.yellow500],
        u = function () {
          return Math.floor(Math.random() * i.length + 1)
        },
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u()
          return i[e % i.length]
        }
    },
  },
])
//# sourceMappingURL=WIPED
