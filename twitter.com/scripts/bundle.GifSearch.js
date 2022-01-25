;(window.webpackJsonp = window.webpackJsonp || []).push([
  [56],
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
        y = r('rHpw'),
        p = r('MWbm')
      function g(e) {
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
      var m = (function (e) {
          u()(r, e)
          var t = g(r)
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
                  return d.createElement(p.a, { style: v.root })
                },
              },
            ]),
            r
          )
        })(d.Component),
        v = y.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = m
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
        y = r('3XMw'),
        p = r.n(y),
        g = r('rHpw'),
        m = r('+/1j'),
        v = r('MWbm')
      function b(e) {
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
      var O = p.a.e5b0063d,
        S = 0,
        w = (function (e) {
          u()(r, e)
          var t = b(r)
          function r() {
            var e
            return a()(this, r), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(S)), (S += 1), e
          }
          return (
            c()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    r = e.title,
                    n = O({ title: r })
                  return d.createElement(
                    v.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    d.createElement(
                      m.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: g.a.visuallyHidden,
                      },
                      r,
                    ),
                    d.createElement(v.a, { accessibilityLabel: n }, t),
                  )
                },
              },
            ]),
            r
          )
        })(d.Component)
      t.a = w
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
        O = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('RhWx')),
        S = r.n(O),
        w = (r('tQbP'), r('zh9S')),
        E = r('xVN5'),
        P = r('CDB5'),
        _ = r('Qyxo'),
        j = r('hqKg'),
        R = r('AspN'),
        x = r('oEGd')
      function C(e, t) {
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
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? C(Object(r), !0).forEach(function (t) {
                g()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : C(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var N = Object(j.createSelector)(
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
                ? Object(_.a)(t, function (e) {
                    return e.url
                      ? I(
                          I({}, e),
                          {},
                          {
                            thumbnail_images: S()(e.thumbnail_images).sort(function (e, t) {
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
        k = Object(x.d)(N, function (e) {
          var t,
            r = e.history,
            n = e.module
          return {
            addExternalMediaUpload: R.a,
            addMediaToDM:
              ((t = r.location.state),
              function (e, r) {
                var n = t && t.dmConversationId
                return Object(P.a)(n, e, r)
              }),
            setMediaMetadata: R.n,
            fetchInitialIfNeeded: n.fetchInitialIfNeeded,
            fetchNextIfNeeded: n.fetchNextIfNeeded,
            scribeAction: w.c,
            updateSingleComposerV2: E.x,
          }
        }),
        M = r('v//M'),
        A = r('x5W0'),
        D = r('U+bB'),
        G = r('XOY5'),
        F = r('cm6r'),
        T = r('rHpw')
      function B(e) {
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
      var L = (function (e) {
          s()(r, e)
          var t = B(r)
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
                  return b.createElement(
                    F.a,
                    { onPress: n, style: [q.imageContainer, K(t, r, a).background] },
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
                  return b.createElement(D.a, { accessibilityLabel: t, source: c, testID: G.a.gifSearchGifImage })
                },
              },
            ]),
            r
          )
        })(b.Component),
        K = function (e, t, r) {
          return T.a.create(function (n) {
            return { background: { backgroundColor: e, height: t, width: r } }
          })
        },
        q = T.a.create(function (e) {
          return { imageContainer: { marginHorizontal: '1px', overflow: 'hidden', flexShrink: 1 } }
        }),
        H = L,
        U = r('MLl7'),
        V = r('3XMw'),
        Y = r.n(V),
        Q = r('TEoO'),
        W = r('eyty'),
        X = r('7nmT'),
        z = r.n(X),
        J = r('MWbm')
      r('KOtZ')
      function Z(e, t) {
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
      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Z(Object(r), !0).forEach(function (t) {
                g()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Z(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var ee = function (e, t) {
        var r = e.reduce(function (e, t) {
          var r = t.original_image
          return e + r.width / r.height
        }, 0)
        return Math.ceil(t / r)
      }
      function te(e, t, r) {
        return e
          .reduce(
            function (e, n, a) {
              return (
                e[e.length - 1].push($($({}, n), {}, { index: a })),
                e[e.length - 1].length > 0 && ee(e[e.length - 1], r) < t && e.push([]),
                e
              )
            },
            [[]],
          )
          .filter(function (e) {
            return e.length > 0
          })
      }
      var re = r('VPAj'),
        ne = r('oQhu'),
        ae = r('FIs5')
      function oe(e) {
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
      var ce = Y.a.a66b7760,
        ie = Y.a.b719e223,
        ue = Y.a.aed71818,
        le = function (e) {
          return e
            .map(function (e) {
              return e.id
            })
            .join('-')
        },
        se = Object(re.a)(null),
        fe = [],
        he = Object(ne.a)(function (e, t, r) {
          return function (n) {
            var a = ee(n, t),
              o = t - 2 * n.length - 1,
              c = 0
            return b.createElement(
              J.a,
              { style: [pe.imageRow, { height: a }] },
              n.map(function (t, i) {
                var u = v()(t.thumbnail_images, 1)[0],
                  l = a / u.height,
                  s = i === n.length - 1 ? o - c : Math.round(u.width * l),
                  f = u.still_image_url,
                  h = u.url
                return (
                  (c += s),
                  b.createElement(H, {
                    altText: t.alt_text || ce,
                    animatedMediaUrl: h,
                    backgroundColor: Object(A.a)(t.index),
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
        de = Object(ne.a)(function (e, t) {
          return b.createElement(M.a, { fetchStatus: e, onRequestRetry: t, render: se })
        }),
        ye = (function (e) {
          s()(r, e)
          var t = oe(r)
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
                  a = t ? o._brickLayout(t, 150, n) : fe
                return n > 0
                  ? b.createElement(Q.a, {
                      assumedItemHeight: 150,
                      cacheKey: 'gifSearchCategory/'.concat(r),
                      footer: o._getRenderFooter(),
                      identityFunction: le,
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
                return he(e, t, o._handleClickFactory)
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
                      mediaCategory: c === U.a.Composition ? W.b.TweetGif : W.b.DMGif,
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
                    c === U.a.Composition
                      ? s({ updates: { mediaIds: w, gifMetadata: E } })
                      : c === U.a.DMComposition && n(w, E),
                    u({ page: c, section: 'gif_search', element: 'category', action: a ? 'search' : 'select' }),
                    i.go(-2)
                }
              }),
              g()(u()(o), '_renderEmptyItem', function () {
                return b.createElement(ae.a, { header: ie, message: ue })
              }),
              g()(u()(o), '_getRenderFooter', function () {
                var e = o.props.nextFetchStatus
                return de(e, o._handleFetchNext)
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
              g()(u()(o), '_brickLayout', Object(ne.a)(te)),
              g()(u()(o), '_setRootNode', function (e) {
                o._rootNode = z.a.findDOMNode(e)
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
                  return b.createElement(
                    'div',
                    { ref: this._setRootNode },
                    b.createElement(M.a, {
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
        })(b.Component)
      g()(ye, 'defaultProps', { fromSearch: !1 })
      var pe = T.a.create(function (e) {
        return {
          emptyItem: {
            display: 'inline-block',
            paddingHorizontal: e.spaces.space12,
            paddingVertical: e.spaces.space32,
          },
          imageRow: { flexDirection: 'row', marginBottom: 2 },
        }
      })
      t.a = k(ye)
    },
    TEoO: function (e, t, r) {
      'use strict'
      var n = r('m3Bd'),
        a = r.n(n),
        o = r('ERkP'),
        c = r('5UID'),
        i = r('3GUV'),
        u = r('iBK2'),
        l = o.createElement(i.a, null),
        s = function (e) {
          var t = e.accessibilityTitle,
            r = a()(e, ['accessibilityTitle']),
            n = o.createElement(u.b, r)
          return t ? o.createElement(c.a, { title: t }, n) : n
        }
      ;(s.defaultProps = { footer: l }), (t.a = s)
    },
    XOY5: function (e, t, r) {
      'use strict'
      t.a = { gifSearchSearchInput: 'gifSearchSearchInput', gifSearchGifImage: 'gifSearchGifImage' }
    },
    XYn1: function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r('ERkP'),
        a = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('ddV6')),
        o = r.n(a),
        c = r('KEM+'),
        i = r.n(c),
        u = (r('2G9S'), r('z84I'), r('zh9S')),
        l = r('pX0s'),
        s = r('lnti'),
        f = r('hqKg'),
        h = r('oEGd'),
        d = l.a,
        y = Object(f.createSelector)(
          function (e) {
            return d.selectItems(e)
          },
          function (e) {
            return d.selectInitialFetchStatus(e)
          },
          function (e, t) {
            return {
              categories:
                e &&
                Object(s.a)(
                  e.map(function (e) {
                    return e.display_name ? e : void 0
                  }),
                ),
              initialFetchStatus: t,
            }
          },
        ),
        p = { fetchInitialIfNeeded: d.fetchInitialIfNeeded, fetchNextIfNeeded: d.fetchNextIfNeeded, scribeAction: u.c },
        g = Object(h.g)(y, p),
        m = r('v//M'),
        v = r('jHSc'),
        b = r('x5W0'),
        O = r('ij+d'),
        S = r('3XMw'),
        w = r.n(S),
        E = r('cm6r'),
        P = r('t62R'),
        _ = r('rHpw'),
        j = r('7JQg'),
        R = r('U+bB'),
        x = r('MWbm')
      function C(e, t) {
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
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? C(Object(r), !0).forEach(function (t) {
                i()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : C(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var N = w.a.c6f5ac52,
        k = n.memo(function (e) {
          var t = e.category,
            r = e.gifSearchKey,
            a = e.history,
            o = e.index,
            c = e.withLeftMargin,
            i = t.display_name,
            u = t.original_image.still_image_url,
            l = n.useCallback(
              function () {
                var e,
                  n = null === (e = a.location.state) || void 0 === e ? void 0 : e.dmConversationId
                a.push({
                  pathname: ''.concat(O.GifSearchPaths.category, '/').concat(t.id),
                  state: { category: t, gifSearchKey: r, dmConversationId: n },
                })
              },
              [a, t, r],
            )
          return n.createElement(
            E.a,
            { onPress: l, style: [M.category, c && M.leftMargin] },
            n.createElement(R.a, { source: u, style: [M.categoryImage, { backgroundColor: Object(b.a)(o) }] }),
            n.createElement(
              x.a,
              { style: M.categoryNameContainer },
              n.createElement(P.b, { color: 'white', size: 'headline1', weight: 'bold' }, i),
            ),
          )
        }),
        M = _.a.create(function (e) {
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
        A = Object(j.c)({ element: 'category' })(
          g(function (e) {
            var t,
              r = e.categories,
              a = e.fetchInitialIfNeeded,
              c = e.gifSearchKey,
              i = e.history,
              u = e.initialFetchStatus,
              l = e.location,
              s = e.scribeAction,
              f = e.scribeNamespace,
              h = e.searchBox,
              d = n.useCallback(
                function () {
                  a()
                },
                [a],
              ),
              y = null == l || null === (t = l.state) || void 0 === t ? void 0 : t.searchFocused,
              p = n.useCallback(
                function () {
                  y || s(I(I({}, f), {}, { action: 'cancel' })), i.goBack({ backLocation: '/' })
                },
                [i, y, s, f],
              ),
              g = n.useCallback(
                function () {
                  var e = []
                  if (r) for (var t = 0; t < r.length; t += 2) e.push([r[t], r[t + 1]])
                  return n.createElement(
                    x.a,
                    null,
                    n.Children.toArray(
                      e.map(function (e, t) {
                        var r = o()(e, 2),
                          a = r[0],
                          u = r[1]
                        return n.createElement(
                          x.a,
                          { style: [M.row, 0 === t && M.firstRow] },
                          n.createElement(k, {
                            category: a,
                            gifSearchKey: c,
                            history: i,
                            index: 2 * t,
                            withLeftMargin: !1,
                          }),
                          u
                            ? n.createElement(k, {
                                category: u,
                                gifSearchKey: c,
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
                [r, c, i],
              )
            return (
              n.useEffect(
                function () {
                  d()
                },
                [d],
              ),
              n.createElement(
                v.b,
                { documentTitle: N, history: i, middleControl: h, onBackClick: p },
                n.createElement(m.a, { fetchStatus: u, onRequestRetry: d, render: g }),
              )
            )
          }),
        ),
        D = (r('OZaJ'), r('VrFO')),
        G = r.n(D),
        F = r('Y9Ll'),
        T = r.n(F),
        B = r('1Pcy'),
        L = r.n(B),
        K = r('5Yy7'),
        q = r.n(K),
        H = r('N+ot'),
        U = r.n(H),
        V = r('AuHH'),
        Y = r.n(V),
        Q = r('hiCj'),
        W = r('VAZu'),
        X = r('EP6G'),
        z = r('MLl7')
      function J(e) {
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
            n = Y()(e)
          if (t) {
            var a = Y()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return U()(this, r)
        }
      }
      var Z = w.a.ab468378,
        $ = (function (e) {
          q()(r, e)
          var t = J(r)
          function r() {
            var e
            G()(this, r)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              i()(L()(e), 'state', { shouldAutoPlayGifOverride: null }),
              i()(L()(e), '_handleToggleChange', function (t) {
                e.setState({ shouldAutoPlayGifOverride: t })
              }),
              i()(L()(e), '_renderHeader', function () {
                var t = e.props,
                  r = t.history,
                  a = t.searchBox
                return n.createElement(W.a, { history: r, middleControl: a })
              }),
              e
            )
          }
          return (
            T()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.gifSearchKey,
                    r = e.history,
                    a = e.location,
                    o = e.query,
                    c = e.searchBox,
                    i = e.shouldAutoPlayGif,
                    u = this.state.shouldAutoPlayGifOverride,
                    s = Object(z.c)(u, i)
                  return n.createElement(
                    v.b,
                    { backButtonType: 'back', documentTitle: Z({ query: o }), history: r, middleControl: c },
                    n.createElement(Q.a, {
                      location: a,
                      onToggleChange: this._handleToggleChange,
                      shouldAutoPlayGif: s,
                    }),
                    n.createElement(X.a, {
                      fromSearch: !0,
                      gifSearchKey: t,
                      history: r,
                      module: l.c,
                      query: o,
                      shouldAutoPlayGif: s,
                    }),
                  )
                },
              },
            ]),
            r
          )
        })(n.Component),
        ee = Object(j.c)({ element: 'gallery' })($)
      t.default = function (e) {
        var t = e.gifSearchKey,
          r = e.history,
          a = e.location,
          o = e.searchBox,
          c = e.shouldAutoPlayGif,
          i = a.state && a.state.query
        return i
          ? n.createElement(ee, {
              gifSearchKey: t,
              history: r,
              location: a,
              query: i,
              searchBox: o,
              shouldAutoPlayGif: c,
            })
          : n.createElement(A, { gifSearchKey: t, history: r, location: a, searchBox: o })
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
        v = r('P1r1'),
        b = r('0KEI'),
        O = r('oEGd'),
        S = {
          createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)(
            'FOUND_MEDIA_AUTOPLAY_TOGGLE',
          ),
          updateSettings: v.L,
        },
        w = Object(O.g)(function () {
          return {}
        }, S),
        E = r('3XMw'),
        P = r.n(E),
        _ = r('fHOo'),
        j = r('MWbm'),
        R = r('t62R'),
        x = r('CK8+'),
        C = r('rHpw')
      function I(e) {
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
      var N = P.a.j7fc4f9b,
        k = (function (e) {
          s()(r, e)
          var t = I(r)
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
                  return Object(_.a)() && (n || a)
                    ? m.createElement(
                        j.a,
                        { style: M.root },
                        m.createElement(R.b, { color: 'gray700' }, N),
                        m.createElement(x.a, {
                          accessibilityLabel: N,
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
        })(m.Component),
        M = C.a.create(function (e) {
          return { root: { flexDirection: 'row', justifyContent: 'space-between', margin: e.spaces.space12 } }
        })
      t.a = w(k)
    },
    'ij+d': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'GifSearchPaths', function () {
          return W
        }),
        r.d(t, 'GifSearchScreen', function () {
          return X
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
        v = r('38/B'),
        b = r('hqKg'),
        O = r('H9MA'),
        S = r('zHh/'),
        w = r('oEGd'),
        E = r('P1r1'),
        P = Object(b.createSelector)(E.g, E.k, O.d, function (e, t, r) {
          return {
            isDataSaverEnabled: t,
            shouldAutoPlayGif: (e.shouldAutoPlayGif || Object(S.a)(r)) && !v.a.reducedMotionEnabled,
          }
        }),
        _ = Object(w.c)(P),
        j = r('Y6L+'),
        R = r('3XMw'),
        x = r.n(R),
        C = r('VwDm'),
        I = r('MLl7'),
        N = r('/de5'),
        k = r('5FtR'),
        M = r('wytG'),
        A = r('7JQg'),
        D = r('XOY5'),
        G = r('MWbm'),
        F = r('6OUF'),
        T = r('/yvb'),
        B = r('rHpw'),
        L = r('oQhu'),
        K = r('VY6S'),
        q = r('Ty5D')
      function H(e) {
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
      var U = x.a.a50ba821,
        V = x.a.a9ae1e78,
        Y = Object(M.a)(function () {
          return Promise.resolve().then(r.bind(null, 'XYn1'))
        }),
        Q = Object(M.a)(function () {
          return Promise.resolve().then(r.bind(null, 'k5pS'))
        }),
        W = { category: '/i/foundmedia/category', search: '/i/foundmedia/search' },
        X = (function (e) {
          s()(r, e)
          var t = H(r)
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
                Object(L.a)(function (e) {
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
                  o = a.pathname.startsWith(W.category),
                  c = a.pathname === W.search && a.state && a.state.query
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
                c.pathname = W.search
                var i = o.state && o.state.query,
                  u = o.pathname === W.search && !i,
                  l = o.pathname.startsWith(W.category) || (o.pathname === W.search && i),
                  s = !a && l,
                  f = o.state && o.state.dmConversationId
                e ? ((c.state = { dmConversationId: f, query: e }), u ? r.push(c) : r.replace(c)) : s && r.goBack()
              }),
              (n._goToQueryDebounced = Object(K.a)(function () {
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
                    ? m.createElement(
                        A.b,
                        { namespace: this._getScribeNamespace(o) },
                        m.createElement(
                          q.e,
                          null,
                          m.createElement(q.c, { exact: !0, path: W.search }, m.createElement(Y, a)),
                          m.createElement(
                            q.c,
                            { exact: !0, path: ''.concat(W.category, '/').concat(j.o) },
                            m.createElement(Q, a),
                          ),
                          m.createElement(q.c, { component: N.b }),
                        ),
                      )
                    : m.createElement(k.a, { to: '/' })
                },
              },
              {
                key: '_getGifSearchKey',
                value: function () {
                  var e = this.props.location.state || {},
                    t = e.gifSearchKey,
                    r = e.gifSearchKeySource
                  return t || (r && Object(I.b)(r) && r)
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
                  return m.createElement(
                    G.a,
                    { style: z.searchContainer },
                    m.createElement(F.a, {
                      Icon: C.a,
                      autoFocus: !0,
                      defaultValue: t,
                      key: t,
                      onChange: this._handleChange,
                      onClear: this._handleClear,
                      onSubmitEditing: this._handleSearch,
                      placeholder: U,
                      ref: this._setTextInputRef,
                      style: z.searchInput,
                      testID: D.a.gifSearchSearchInput,
                      withClearButton: !0,
                    }),
                    this._shouldRenderResultsOnChange
                      ? null
                      : m.createElement(
                          T.a,
                          {
                            disabled: e,
                            onPress: this._handleSubmit,
                            size: 'small',
                            style: z.searchButton,
                            type: 'brandFilled',
                          },
                          V,
                        ),
                  )
                },
              },
            ]),
            r
          )
        })(m.Component),
        z = B.a.create(function (e) {
          return {
            searchContainer: { alignItems: 'center', flex: 1, flexDirection: 'row', marginVertical: e.spaces.space8 },
            searchInput: { height: '100%' },
            searchButton: { marginStart: e.spaces.space12 },
          }
        })
      t.default = _(X)
    },
    k5pS: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'GifSearchCategory', function () {
          return x
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
        v = r('hiCj'),
        b = r('pX0s'),
        O = r('jHSc'),
        S = r('EP6G'),
        w = r('3XMw'),
        E = r.n(w),
        P = r('7JQg'),
        _ = r('MLl7')
      function j(e) {
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
      var R = E.a.f5ff0d6f,
        x = (function (e) {
          s()(r, e)
          var t = j(r)
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
                    l = Object(_.c)(u, o)
                  return m.createElement(
                    O.b,
                    { backButtonType: 'back', documentTitle: R({ category: i }), history: r, middleControl: a },
                    m.createElement(v.a, {
                      location: n,
                      onToggleChange: this._handleToggleChange,
                      shouldAutoPlayGif: l,
                    }),
                    !!c &&
                      m.createElement(S.a, {
                        gifSearchKey: t,
                        history: r,
                        module: b.b,
                        query: c.id,
                        shouldAutoPlayGif: l,
                      }),
                  )
                },
              },
            ]),
            r
          )
        })(m.Component)
      t.default = Object(P.c)({ element: 'gallery' })(x)
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
