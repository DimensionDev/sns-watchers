;(window.webpackJsonp = window.webpackJsonp || []).push([
  [106, 7],
  {
    '+/sI': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return y
      }),
        n.d(t, 'b', function () {
          return g
        })
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('5Yy7'),
        c = n.n(l),
        s = n('2VqO'),
        u = n.n(s),
        d = (n('Wd/2'), n('M+/F'), n('2G9S'), n('ERkP')),
        p = n.n(d),
        f = n('TGcR'),
        m = n('t62R'),
        h = n('a6qo'),
        v = n('rHpw'),
        y = 'animated_gif',
        g = 'video',
        b = (function (e) {
          c()(n, e)
          var t = u()(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.durationInMilliseconds,
                    r = t.type
                  if (r === y || 'vine' === r)
                    e =
                      r === y
                        ? p.a.createElement(m.b, { weight: 'bold' }, 'GIF')
                        : p.a.createElement(f.a, { style: w.icon })
                  else if (r === g && n) {
                    var a = Math.trunc(n / 6e4),
                      i = '0'.concat(Math.trunc((n % 6e4) / 1e3)).slice(-2)
                    e = p.a.createElement(m.b, { color: 'white' }, ''.concat(a, ':').concat(i))
                  }
                  return e ? p.a.createElement(h.a, { align: 'left' }, e) : null
                },
              },
            ]),
            n
          )
        })(p.a.PureComponent),
        w = v.a.create(function (e) {
          return { icon: { color: e.colors.white } }
        })
      t.c = b
    },
    '/Imo': function (e, t, n) {
      'use strict'
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
        f = n('5Yy7'),
        m = n.n(f),
        h = n('2VqO'),
        v = n.n(h),
        y = n('KEM+'),
        g = n.n(y),
        b = (n('2G9S'), n('jQ3i'), n('x4t0'), n('ERkP')),
        w = n.n(b),
        E = n('/yvb'),
        _ = n('k/Ka'),
        C = n('3XMw'),
        x = n.n(C),
        T = n('rHpw'),
        I = ['accept', 'disabled', 'multiple', 'onChange', 'testID'],
        S = x.a.i5450beb,
        k = x.a.f7432494,
        M = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              g()(p()(e), '_handlePress', function (t) {
                var n = e.props.onPress
                n && n(t), e._fileInput && e._fileInput.click()
              }),
              g()(p()(e), '_handleChange', function (t) {
                var n = e.props.onChange,
                  r = t.target,
                  a = r.files
                a.length && n && n(a), (r.value = '')
              }),
              g()(p()(e), '_handleFileInputButtonRef', function (t) {
                e._fileInput = t
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
                    t = e.accept,
                    n = e.disabled,
                    r = e.multiple,
                    i = (e.onChange, e.testID),
                    l = o()(e, I),
                    c = !((null != t && t.includes('video')) || (null != t && t.includes('gif')))
                  return w.a.createElement(
                    w.a.Fragment,
                    null,
                    w.a.createElement(
                      E.a,
                      a()({ hoverLabel: t ? { label: c ? k : S } : void 0 }, l, {
                        disabled: n,
                        onPress: this._handlePress,
                      }),
                    ),
                    Object(_.a)('input', {
                      accept: t,
                      disabled: n,
                      multiple: r,
                      onChange: this._handleChange,
                      ref: this._handleFileInputButtonRef,
                      style: O.input,
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
        })(w.a.Component)
      g()(M, 'defaultProps', { disabled: !1, multiple: !1 })
      var O = T.a.create(function (e) {
        return {
          input: { width: '0.1px', height: '0.1px', opacity: 0, overflow: 'hidden', position: 'absolute', zIndex: -1 },
        }
      })
      t.a = M
    },
    '4bHO': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('ho0z')
      var r = function (e, t) {
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
    '4k/t': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'sidebarLayoutScreenTitle', function () {
          return U
        }),
        n.d(t, 'TwitterArticleScreen', function () {
          return N
        })
      n('KqXw'), n('WNMA'), n('uFXj')
      var r = n('ERkP'),
        a = n.n(r),
        i = n('es0u'),
        o = n('6au1'),
        l = n('G6rE'),
        c = n('rxPX'),
        s = n('0KEI'),
        u = n('kGix'),
        d = function (e, t) {
          return t.match.params.twitterArticleId
        },
        p = function (e, t) {
          var n = d(0, t)
          return o.a.select(e, n)
        },
        f = function (e, t) {
          var n,
            r = p(e, t),
            a = null == r || null === (n = r.metadata) || void 0 === n ? void 0 : n.authorResults.result
          return 'User' === (null == a ? void 0 : a.__typename) ? (null == a ? void 0 : a.rest_id) : void 0
        },
        m = function (e, t) {
          var n = f(e, t)
          return n ? l.e.select(e, n) : void 0
        },
        h = function (e, t) {
          var n = (function (e, t) {
              var n = d(0, t)
              return o.a.selectFetchStatus(e, n)
            })(e, t),
            r = (function (e, t) {
              var n = f(e, t)
              return n ? l.e.selectFetchStatus(e, n) : void 0
            })(e, t)
          return Object(u.d)(n, r)
        },
        v = Object(c.a)()
          .propsFromState(function () {
            return { author: m, authorId: f, fetchStatus: h, twitterArticle: p }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
                'TWITTER_ARTICLE_SCREEN',
              ),
              fetchTwitterArticle: o.a.fetchOne,
              fetchUserIfNeeded: l.e.fetchOneIfNeeded,
            }
          }),
        y = n('VS6U'),
        g = (n('ho0z'), n('6U7i'), n('849X'), n('TJCb'), n('z84I'), n('hBpG'), n('7x/C'), n('Qyxo')),
        b = n('m3Bd'),
        w = n.n(b),
        E = n('yiKp'),
        _ = n.n(E),
        C = (n('Blm6'), n('ssvU'), ['__typename']),
        x = ['__typename'],
        T = function (e, t, n) {
          var r,
            a = 'ApiGif' === n ? 'animated_gif' : 'video',
            i = e.preview_image
          return {
            type: a,
            id: I(t),
            id_str: t || '',
            ext_alt_text: null == i ? void 0 : i.alt_text,
            ext_media_color: {
              palette: (null == i || null === (r = i.color_info) || void 0 === r ? void 0 : r.palette) || [],
            },
            media_url: (null == i ? void 0 : i.original_img_url) || '',
            media_url_https: (null == i ? void 0 : i.original_img_url) || '',
            url: (null == i ? void 0 : i.original_img_url) || '',
            display_url: (null == i ? void 0 : i.original_img_url) || '',
            expanded_url: (null == i ? void 0 : i.original_img_url) || '',
            original_info: {
              height: (null == i ? void 0 : i.original_img_height) || 0,
              width: (null == i ? void 0 : i.original_img_width) || 0,
            },
            sizes: {
              original: {
                h: (null == i ? void 0 : i.original_img_height) || 0,
                resize: 'fit',
                w: (null == i ? void 0 : i.original_img_width) || 0,
              },
            },
            video_info: _()(
              _()(
                { aspect_ratio: [e.aspect_ratio.numerator, e.aspect_ratio.denominator] },
                e.duration_millis && { duration_millis: e.duration_millis },
              ),
              {},
              {
                variants: e.variants.map(function (e) {
                  return { bitrate: e.bit_rate, content_type: e.content_type, url: e.url }
                }),
              },
            ),
          }
        },
        I = function (e) {
          var t = parseInt(e, 10)
          return Number.isNaN(t) ? 0 : t
        },
        S = n('fn8Q'),
        k = n('gEvp'),
        M = n('rOiJ'),
        O = function (e) {
          var t = e.block,
            n = e.blockProps,
            r = e.contentState,
            i = t.getEntityAt(0),
            o = i ? r.getEntity(i) : null
          if (!o) return null
          var l = o.getData()
          if (o.type === S.b.TWEET) {
            var c = l.tweetId
            return a.a.createElement(k.a, { tweetId: c })
          }
          if (o.type === S.b.MEDIA) {
            var s = l.mediaItems.map(function (e) {
                var t
                return null == n || null === (t = n.media) || void 0 === t
                  ? void 0
                  : t.find(function (t) {
                      return t.media_id === e.mediaId
                    })
              }),
              u = Object(g.a)(s, function (e) {
                return (function (e) {
                  var t,
                    n = e.media_info
                  if ('ApiImage' === (null == n ? void 0 : n.__typename))
                    return _()(
                      _()(
                        {
                          altText: n.alt_text,
                          display_url: n.original_img_url,
                          expanded_url: n.original_img_url,
                          ext_alt_text: n.alt_text,
                        },
                        (null === (t = n.color_info) || void 0 === t ? void 0 : t.palette) && {
                          ext_media_color: { palette: n.color_info.palette },
                        },
                      ),
                      {},
                      {
                        id: I(e.media_id),
                        id_str: e.media_id || '',
                        media_key: e.media_key,
                        media_url: n.original_img_url,
                        media_url_https: n.original_img_url,
                        original_info: { height: n.original_img_height, width: n.original_img_width },
                        sizes: { original: { h: n.original_img_height, resize: 'fit', w: n.original_img_width } },
                        type: 'photo',
                      },
                    )
                  if ('ApiVideo' === (null == n ? void 0 : n.__typename)) {
                    n.__typename
                    var r = w()(n, C)
                    return T(r, e.media_id, null == n ? void 0 : n.__typename)
                  }
                  if ('ApiGif' === (null == n ? void 0 : n.__typename)) {
                    n.__typename
                    var a = w()(n, x)
                    return T(a, e.media_id, null == n ? void 0 : n.__typename)
                  }
                })(e)
              })
            return u ? a.a.createElement(M.a, { mediaDetails: u, tweetId: '0' }) : null
          }
          return null
        },
        L = n('nXUu'),
        P = function (e) {
          var t = e.contentStateJson,
            n = e.twitterArticleMedia,
            r = void 0 === n ? [] : n,
            i = t
              ? (function (e) {
                  try {
                    var t = JSON.parse(e)
                    if (!t.entityMap || !t.blocks) throw new Error('Malformed RawDraftContentState')
                    return t
                  } catch (n) {}
                })(t)
              : void 0,
            o = { atomic: { component: O, editable: !1, props: { media: r } } }
          return i ? a.a.createElement(L.a, { componentByType: o, contentState: i }) : null
        },
        R = n('t62R'),
        A = function (e) {
          var t = e.size,
            n = e.title
          return a.a.createElement(
            R.b,
            {
              color: n ? 'text' : 'gray700',
              numberOfLines: 1,
              size: t,
              testID: 'twitterArticleTitleComponent',
              weight: 'bold',
            },
            n || 'Untitled',
          )
        },
        F = n('MWbm'),
        B = n('jV+4'),
        D = n('GBcw'),
        V = n('rHpw'),
        z = V.a.create(function (e) {
          return {
            container: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
              minHeight: e.spaces.space80,
            },
            paddedView: { paddingVertical: e.spaces.space12 },
          }
        }),
        H = function (e) {
          var t = e.author,
            n = e.twitterArticle,
            r = n.data,
            i = n.media,
            o = n.metadata,
            l = n.title
          return a.a.createElement(
            F.a,
            { style: z.container },
            a.a.createElement(B.a, {
              isVerified: t.verified,
              name: t.name,
              profileImageUrl: t.profile_image_url_https,
              screenName: t.screen_name,
              style: z.paddedView,
              withLink: !0,
            }),
            a.a.createElement(F.a, { style: z.paddedView }, a.a.createElement(A, { size: 'title1', title: l })),
            null != o && o.publishedAtMs
              ? a.a.createElement(
                  F.a,
                  { style: z.paddedView },
                  a.a.createElement(D.a, { humanReadable: !0, timestamp: Number(o.publishedAtMs) }),
                )
              : null,
            null != r && r.contentStateJson
              ? a.a.createElement(
                  F.a,
                  { style: z.paddedView, testID: 'twitterArticleRichTextView' },
                  a.a.createElement(P, { contentStateJson: r.contentStateJson, twitterArticleMedia: i }),
                )
              : null,
          )
        },
        K = n('zpdM'),
        j = n('muX9'),
        W = function (e) {
          var t,
            n,
            r,
            i,
            o,
            l = e.author,
            c = e.twitterArticle,
            s = (function (e) {
              try {
                return Object(K.convertFromRaw)(JSON.parse(e)).getPlainText().substr(0, 200)
              } catch (t) {
                return ''
              }
            })((null === (t = c.data) || void 0 === t ? void 0 : t.contentStateJson) || ''),
            u = null === (n = c.cover_image) || void 0 === n ? void 0 : n.media_info
          return (
            'ApiImage' === (null == u ? void 0 : u.__typename) &&
              ((r = u.original_img_url), (i = u.original_img_width), (o = u.original_img_height)),
            a.a.createElement(
              j.a,
              null,
              a.a.createElement('meta', { content: 'true', name: 'twitter:article' }),
              a.a.createElement('meta', { content: '86400', name: 'twitter:maxage' }),
              a.a.createElement('meta', { content: c.title, name: 'og:title' }),
              a.a.createElement('meta', { content: s, name: 'og:description' }),
              a.a.createElement('meta', { content: l.screen_name, name: 'twitter:site' }),
              r && a.a.createElement('meta', { content: r, name: 'og:image' }),
              i && a.a.createElement('meta', { content: i, name: 'og:image:width' }),
              o && a.a.createElement('meta', { content: o, name: 'og:image:height' }),
            )
          )
        },
        G = n('G1WX'),
        U = 'Twitter Article',
        N = function (e) {
          var t = e.author,
            n = e.authorId,
            r = e.createLocalApiErrorHandler,
            o = e.fetchStatus,
            l = e.fetchTwitterArticle,
            c = e.fetchUserIfNeeded,
            s = e.history,
            u = e.match.params.twitterArticleId,
            d = e.twitterArticle,
            p = a.a.useCallback(
              function () {
                d || l(u), n && !t && c(n).catch(r())
              },
              [t, n, r, l, c, d, u],
            )
          a.a.useEffect(
            function () {
              p()
            },
            [p],
          )
          var f = function () {
            return d && t
              ? a.a.createElement(
                  F.a,
                  { testID: 'twitterArticleView' },
                  a.a.createElement(W, { author: t, twitterArticle: d }),
                  a.a.createElement(H, { author: t, twitterArticle: d }),
                )
              : null
          }
          return a.a.createElement(y.a, {
            history: s,
            primaryContent: function () {
              return a.a.createElement(
                F.a,
                { style: X.container },
                a.a.createElement(G.a, { fetchStatus: o, onRequestRetry: p, render: f }),
              )
            },
            sidebarContent: a.a.createElement(i.a, null),
            title: U,
          })
        },
        X = V.a.create(function (e) {
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
        J = v(N)
      t.default = J
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
    '956X': function (e, t, n) {
      'use strict'
      var r = n('ddV6'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        l = n('XOJV'),
        c = n('rxPX'),
        s = n('0KEI'),
        u = function (e, t) {
          var n = t.tweetId
          return n ? l.a.selectHydrated(e, n) : void 0
        },
        d = function (e, t) {
          var n = t.tweetId
          return n ? l.a.selectFetchStatus(e, n) : void 0
        },
        p = Object(c.a)()
          .propsFromState(function () {
            return { tweet: u, tweetFetchStatus: d }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)('TWEET_BY_URL'),
              fetchTweetIfNeeded: l.a.fetchOneIfNeeded,
            }
          }),
        f = n('VY6S'),
        m = (n('KqXw'), n('3uku'), n('jat/')),
        h = n('kGix'),
        v = n('W5XZ'),
        y = n('3XMw'),
        g = n.n(y),
        b = n('MWbm'),
        w = n('p+r5'),
        E = n('Qwev'),
        _ = n('rHpw'),
        C = g.a.jd2f69a8,
        x = g.a.d2ae33cd,
        T = g.a.ac308436,
        I = _.a.create(function (e) {
          return {
            activityIndicatorWrapper: {
              alignItems: 'center',
              marginHorizontal: e.componentDimensions.gutterHorizontal,
              marginBottom: e.componentDimensions.gutterVertical,
              padding: e.spaces.space12,
            },
          }
        }),
        S = p(function (e) {
          var t = e.checkTweet,
            n = e.createLocalApiErrorHandler,
            r = e.fetchTweetIfNeeded,
            i = e.onChangeTweetId,
            l = e.tweet,
            c = e.tweetFetchStatus,
            s = e.tweetId,
            u = e.withActivityIndicator,
            d = o.a.useState(),
            p = a()(d, 2),
            y = p[0],
            g = p[1],
            _ = o.a.useMemo(
              function () {
                return Object(f.a)(function (e) {
                  e && r(e).catch(n(v.a))
                }, 250)
              },
              [n, r],
            )
          o.a.useEffect(
            function () {
              _(s)
            },
            [_, s],
          ),
            o.a.useEffect(
              function () {
                if (l) {
                  var e = null == t ? void 0 : t(l)
                  e && (g(e), i(void 0))
                } else c === h.a.FAILED && g(T)
              },
              [t, i, l, c],
            )
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(w.a, {
              errorText: y,
              invalid: !!y,
              label: C,
              name: 'TweetByUrlInput',
              onChange: function (e) {
                g(void 0)
                var t = e.target.value,
                  n = (function (e) {
                    if (/^\d+$/.test(e)) return e
                    var t = /status\/(\d+)/g.exec(e) || []
                    return Object(m.a)(t)
                  })(t)
                n ? i(n) : t ? g(x) : i(void 0)
              },
            }),
            u && c === h.a.LOADING
              ? o.a.createElement(b.a, { style: I.activityIndicatorWrapper }, o.a.createElement(E.a, { size: 'large' }))
              : null,
          )
        })
      t.a = S
    },
    Cp2k: function (e, t, n) {
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
                d: 'M12.341 20.5H23V22H10.842l1.088-1.088zm-9.265 1.248h-.073a.75.75 0 01-.746-.823l.543-5.562a2.745 2.745 0 01.8-1.676l11.155-11.16a2.385 2.385 0 013.182 0l3.535 3.536a2.248 2.248 0 010 3.18L10.313 20.407a2.756 2.756 0 01-1.675.792zM14.667 4.736l4.6 4.6 1.151-1.151a.747.747 0 000-1.06l-3.542-3.538a.81.81 0 00-1.061 0zM3.839 20.165l4.652-.459a1.253 1.253 0 00.762-.36l.555-.555 8.394-8.4-4.6-4.6-8.946 8.957a1.251 1.251 0 00-.36.761z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    CwxE: function (e, t, n) {
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
                d: 'M23.804 11.5l-6.496-7.25c-.278-.31-.752-.334-1.06-.06-.308.277-.334.752-.058 1.06L22.238 12l-6.047 6.75c-.275.308-.25.782.06 1.06.142.127.32.19.5.19.204 0 .41-.084.558-.25l6.496-7.25c.252-.28.258-.713 0-1zm-23.606 0l6.496-7.25c.278-.31.752-.334 1.06-.06.308.277.334.752.058 1.06L1.764 12l6.047 6.75c.277.308.25.782-.057 1.06-.143.127-.322.19-.5.19-.206 0-.41-.084-.56-.25L.197 12.5c-.252-.28-.257-.713 0-1zm9.872 12c-.045 0-.09-.004-.135-.012-.407-.073-.68-.463-.605-.87l3.863-21.5c.074-.407.466-.674.87-.606.408.073.68.463.606.87l-3.864 21.5c-.065.363-.38.618-.737.618z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    G31s: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return E
      })
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('5Yy7'),
        c = n.n(l),
        s = n('2VqO'),
        u = n.n(s),
        d = n('KEM+'),
        p = n.n(d),
        f = n('ERkP'),
        m = n.n(f),
        h = n('pKoL'),
        v = n('MWbm'),
        y = n('rHpw'),
        g = n('ZvMt'),
        b = n('9Xij'),
        w = n('v6aA'),
        E = (function (e) {
          c()(n, e)
          var t = u()(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.media,
                    n = e.style
                  return m.a.createElement(v.a, { style: n }, this._renderImageGroup(t.length))
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
                    r = n.height,
                    a = n.width,
                    i = y.a.theme.aspectRatios.landscape
                  if (t) {
                    var o,
                      l,
                      c = y.a.theme.aspectRatios.minTimelineImage,
                      s = y.a.theme.aspectRatios.maxTimelineImage
                    i = g.a.getImageAspectRatio(c, s, {
                      width: null === (o = e[0].mediaFile) || void 0 === o ? void 0 : o.width,
                      height: null === (l = e[0].mediaFile) || void 0 === l ? void 0 : l.height,
                    })
                  }
                  return m.a.createElement(
                    b.a,
                    { ratio: t ? i : a / r },
                    m.a.createElement(v.a, { style: _.mediaPreviewWrapper }, this._renderMediaAtIndex(0)),
                  )
                },
              },
              {
                key: '_renderGroupOf2',
                value: function () {
                  return m.a.createElement(
                    b.a,
                    { ratio: y.a.theme.aspectRatios.landscape },
                    m.a.createElement(
                      v.a,
                      { style: _.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, _.gutterRight),
                      this._renderMediaAtIndex(1),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf3',
                value: function () {
                  return m.a.createElement(
                    b.a,
                    { ratio: y.a.theme.aspectRatios.landscape },
                    m.a.createElement(
                      v.a,
                      { style: _.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, _.gutterRight),
                      this._renderColumnWithIndices([1, 2]),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf4',
                value: function () {
                  return m.a.createElement(
                    b.a,
                    { ratio: y.a.theme.aspectRatios.landscape },
                    m.a.createElement(
                      v.a,
                      { style: _.mediaPreviewWrapper },
                      this._renderColumnWithIndices([0, 2], _.gutterRight),
                      this._renderColumnWithIndices([1, 3]),
                    ),
                  )
                },
              },
              {
                key: '_renderColumnWithIndices',
                value: function (e, t) {
                  return m.a.createElement(
                    v.a,
                    { style: [_.column, t] },
                    this._renderMediaAtIndex(e[0], _.gutterBottom),
                    this._renderMediaAtIndex(e[1]),
                  )
                },
              },
              {
                key: '_renderMediaAtIndex',
                value: function (e, t) {
                  var n,
                    r,
                    a,
                    i,
                    o = this.props,
                    l = o.editable,
                    c = o.isActive,
                    s = o.media,
                    u = o.onClickMedia,
                    d = o.onEditMedia,
                    p = o.onEditSensitiveWarning,
                    f = o.onRemoveMedia,
                    v = o.onSetMediaPreviewRef,
                    y = s[e],
                    g = null === (n = y.mediaMetadata) || void 0 === n ? void 0 : n.altText,
                    b = null === (r = y.mediaMetadata) || void 0 === r ? void 0 : r.defaultAltText,
                    w = !(
                      null === (a = y.mediaMetadata) ||
                      void 0 === a ||
                      null === (i = a.sensitiveMediaWarning) ||
                      void 0 === i ||
                      !i.size
                    ),
                    E = d && l && c,
                    C = E && w && !!p
                  return m.a.createElement(h.a, {
                    accessibilityLabel: g || b,
                    accessibilityRole: 'group',
                    enableGif: c,
                    key: y.id,
                    mediaItem: y,
                    onClick: u ? u(y.id) : void 0,
                    onEdit: d ? d(y.id) : void 0,
                    onEditSensitiveWarning: p && C ? p(y.id) : void 0,
                    onRemove: f(y.id),
                    ref: v,
                    style: [_.mediaContainer, t],
                    withAltTextLabel: !!g,
                    withCloseButton: l && c,
                    withEditButton: E,
                    withEditSensitiveWarningButton: C,
                  })
                },
              },
            ]),
            n
          )
        })(m.a.Component)
      p()(E, 'contextType', w.a)
      var _ = y.a.create(function (e) {
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
    LCtV: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return S
      })
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        f = n('KEM+'),
        m = n.n(f),
        h = (n('yH/f'), n('2G9S'), n('uFXj'), n('ERkP')),
        v = n.n(h),
        y = n('3XMw'),
        g = n.n(y),
        b = n('mN6z'),
        w = n('Qwev'),
        E = n('rHpw'),
        _ = n('1auM'),
        C = n('ude7'),
        x = n('U+bB'),
        T = n('MWbm'),
        I = g.a.gff1f69e,
        S = Object.freeze({ INFINITE: 'infinite', MEDIUM: 'medium', NONE: 'none' }),
        k = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(c()(e), 'state', { imagePreviewUrl: null }),
              m()(c()(e), '_getImageSrc', function () {
                var t = e.props,
                  n = t.enableGif,
                  r = t.mediaItem,
                  a = e.state.imagePreviewUrl
                if (r && r.mediaFile) return r.mediaFile.isGif && !n ? a : r.mediaFile.url
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
                    r = t.mediaItem.mediaFile,
                    a = this.state.imagePreviewUrl
                  n ||
                    a ||
                    (r instanceof _.a &&
                      r.isGif &&
                      Object(C.a)(r).then(function (t) {
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
                    r = e.mediaItem,
                    a = e.onClick,
                    i = e.resizeMode,
                    o = (this.state || {}).imagePreviewUrl,
                    l = r.mediaFile && r.mediaFile.isGif && !n && !o,
                    c = r.needsProcessing || l,
                    s = [O.root, M[t], c && O.loadingBorder],
                    u = this._getImageSrc()
                  return v.a.createElement(
                    T.a,
                    { onClick: a, style: s },
                    c || !u
                      ? v.a.createElement(w.a, { accessibilityLabel: I, style: O.activityIndicator })
                      : v.a.createElement(x.a, { resizeMode: i, source: u, style: O.image }),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      m()(k, 'defaultProps', { borderRadius: S.NONE, enableGif: !0, resizeMode: 'cover' })
      var M = E.a.create(function (e) {
          var t
          return (
            (t = {}),
            m()(t, S.INFINITE, { borderRadius: e.borderRadii.infinite }),
            m()(t, S.MEDIUM, { borderRadius: e.borderRadii.small }),
            m()(t, S.NONE, { borderRadius: e.borderRadii.none }),
            t
          )
        }),
        O = E.a.create(function (e) {
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
    LQrL: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return m
      }),
        n.d(t, 'c', function () {
          return h
        }),
        n.d(t, 'b', function () {
          return v
        }),
        n.d(t, 'e', function () {
          return y
        }),
        n.d(t, 'a', function () {
          return g
        })
      n('hBvt'), n('KqXw'), n('z84I')
      var r = n('ERkP'),
        a = n.n(r),
        i = n('t62R'),
        o = n('dWxr'),
        l = n.n(o),
        c = n('hHEM'),
        s = n('rHpw'),
        u = n('aITJ'),
        d = n('IZ3v'),
        p = function (e, t) {
          for (var n = l()(e.getText()), r = 0; r < n.length; r++)
            n[r].indices && 2 === n[r].indices.length && t(n[r].indices[0], n[r].indices[1])
        },
        f = { clipPath: 'circle(0% at center)' },
        m = {
          strategy: function (e, t, n) {
            e.findEntityRanges(function (e) {
              var t = e.getEntity(),
                r = t ? n.getEntity(t) : null
              return !!r && 'LINK' === r.getType()
            }, t)
          },
          component: function (e) {
            return e.entityKey
              ? a.a.createElement(i.b, { link: e.contentState.getEntity(e.entityKey).getData().url }, e.children)
              : null
          },
        },
        h = {
          strategy: p,
          component: function (e) {
            var t = l()(e.decoratedText)[0]
            if (!t) return null
            var n = Object(d.b)(t)
            return n ? a.a.createElement(i.b, { link: Object(d.c)(n, e.decoratedText) }, e.children) : null
          },
        },
        v = {
          strategy: p,
          component: function (e) {
            return a.a.createElement('span', { style: { color: s.a.theme.colors.link } }, e.children)
          },
        },
        y = {
          strategy: function (e, t, n) {
            e.findEntityRanges(function (e) {
              var t = e.getEntity(),
                r = t && n.getEntity(t)
              return !(!r || r.type !== c.a.TWEMOJI_ENTITY_TYPE)
            }, t)
          },
          component: function (e) {
            var t = e.children,
              n = e.contentState,
              r = e.entityKey,
              i = (r && n.getEntity(r)) || {}
            return !(u.b.isFirefox() && u.b.firefoxVersion() < 49)
              ? a.a.Children.map(t, function (e) {
                  var t,
                    n = a.a.Children.map(e, function (e) {
                      return a.a.createElement('span', { style: f }, e)
                    })[0]
                  return a.a.cloneElement(
                    a.a.createElement('span', null),
                    {
                      style:
                        ((t = (i.data && i.data.url) || ''),
                        {
                          backgroundImage: 'url("'.concat(t, '")'),
                          backgroundSize: '1em 1em',
                          padding: '0.15em',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          WebkitTextFillColor: 'transparent',
                        }),
                    },
                    n,
                  )
                })
              : t
          },
        },
        g = {
          strategy: function (e, t) {
            var n = (function (e, t, n) {
              for (var r, a, i = t.getText(); (r = e.exec(i)); ) n((a = r.index), a + r[0].length)
            })(/\r/g, e, t)
            if (n) return t(n, n + 1)
          },
          component: function () {
            return '\n'
          },
        }
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
        f = n('2VqO'),
        m = n.n(f),
        h = n('KEM+'),
        v = n.n(h),
        y = (n('2G9S'), n('i4UL'), n('+/5o')),
        g = n('ERkP'),
        b = n.n(g),
        w = n('HPNB'),
        E = n('VAZu'),
        _ = n('wiP2'),
        C = n('Es6L'),
        x = n('yiKp'),
        T = n.n(x),
        I = n('rHpw'),
        S = I.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: T()(T()({}, I.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        k = n('MWbm'),
        M = n('yw4N'),
        O = n('TnY3'),
        L = n('cHvH'),
        P = n('3xLC'),
        R = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        A = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(u()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? b.a.createElement(
                      k.a,
                      { style: S.fill },
                      b.a.createElement(
                        M.a,
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
                  return b.a.createElement(L.a, null, function (t) {
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
                      a()(e, R))
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    Object(C.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : b.a.createElement(_.a.Configure, n),
                    t,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return b.a.createElement(
                    b.a.Fragment,
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
                    f = n.rightControl,
                    m = n.screenType,
                    h = n.searchBoxOptions,
                    v = n.secondaryBar,
                    g = n.showSubtitleOnRoot,
                    w = n.showSubtitleOnWideDetail,
                    C = n.subtitle,
                    x = n.title,
                    T = n.titleIconCell,
                    I = n.titleIconCellSize,
                    M = n.withDetailOpen,
                    O = n.withSearchBox,
                    L = n.withTweetButton,
                    P = 'root' === m,
                    R = 'secondaryRoot' === m,
                    A = 'primaryDetail' === m,
                    F = (A && w) || (P && g),
                    B = P || (A && t),
                    D = P ? y.c : A ? y.a : void 0,
                    V = b.a.createElement(
                      k.a,
                      { style: S.appBarContainer },
                      b.a.createElement(E.a, {
                        backLocation: o,
                        fixed: !1,
                        hideBackButton: B,
                        history: s,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: p,
                        rightControl: f,
                        secondaryBar: v,
                        subtitle: F ? C : void 0,
                        title: x,
                        titleDomId: D,
                        titleIconCell: T,
                        titleIconCellSize: I,
                      }),
                    ),
                    z =
                      P || (R && M)
                        ? null
                        : b.a.createElement(_.a.Configure, {
                            SideNavButton: r,
                            TabBar: a,
                            TeamsSwitcher: i,
                            backLocation: o,
                            documentTitle: l,
                            headerless: c,
                            middleControl: d,
                            onBackClick: p,
                            rightControl: f,
                            searchBoxOptions: h,
                            subtitle: C,
                            title: x,
                            withSearchBox: O,
                            withTweetButton: L,
                          })
                  return b.a.createElement(b.a.Fragment, null, z, V)
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      v()(A, 'contextType', P.a),
        v()(A, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(O.a)(A)
    },
    QdNu: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'saveLabel', function () {
          return Te
        }),
        n.d(t, 'publishLabel', function () {
          return Ie
        }),
        n.d(t, 'unpublishLabel', function () {
          return Se
        }),
        n.d(t, 'viewLabel', function () {
          return ke
        }),
        n.d(t, 'successfulSaveMessage', function () {
          return Oe
        }),
        n.d(t, 'successfulPublishMessage', function () {
          return Le
        }),
        n.d(t, 'successfulUnpublishMessage', function () {
          return Pe
        }),
        n.d(t, 'mediaIsInvalidMessage', function () {
          return Re
        }),
        n.d(t, 'TwitterArticleComposer', function () {
          return Fe
        })
      var r = n('RhWx'),
        a = n.n(r),
        i = n('yiKp'),
        o = n.n(i),
        l = n('ddV6'),
        c = n.n(l),
        s =
          (n('KqXw'),
          n('WNMA'),
          n('LW0h'),
          n('7x/C'),
          n('lTEL'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          n('z84I'),
          n('KOtZ'),
          n('+KXO'),
          n('2G9S'),
          n('hBpG'),
          n('0zG9'),
          n('MvUL'),
          n('uFXj'),
          n('ERkP')),
        u = n.n(s),
        d = n('1YZw'),
        p = n('P1r1'),
        f = n('AspN'),
        m = n('rxPX'),
        h = n('0KEI'),
        v = n('kGix'),
        y = n('6au1'),
        g = function (e, t) {
          return t.match.params.twitterArticleId
        },
        b = function (e, t) {
          var n = g(0, t)
          return y.a.selectFetchStatus(e, n) || v.a.NONE
        },
        w = function (e, t) {
          var n = g(0, t)
          return y.a.select(e, n)
        },
        E = function (e, t) {
          var n = g(0, t)
          return Object(y.b)(e, n)
        },
        _ = Object(m.a)()
          .propsFromState(function () {
            return { allMedia: f.j, dataSaverMode: p.j, fetchStatus: b, title: E, twitterArticle: w }
          })
          .propsFromActions(function () {
            return {
              addMedia: f.b,
              addToast: d.b,
              createLocalApiErrorHandler: Object(h.createLocalApiErrorHandlerWithContextFactory)(
                'TWITTER_ARTICLE_COMPOSER',
              ),
              deleteTwitterArticle: y.a.delete,
              fetchTwitterArticle: y.a.fetchOneIfNeeded,
              preUploadMedia: f.e,
              processMultipleMedia: f.g,
              removeMediaUpload: f.i,
              saveTwitterArticle: y.a.updateData,
              setMediaMetadata: f.n,
              updateTwitterArticleMedia: y.a.updateMedia,
              updateTwitterArticleVisibility: y.a.updateVisibility,
              updateTwitterArticleTitle: y.a.updateTitle,
              uploadMedia: f.p,
            }
          }),
        C = n('c0ZR'),
        x = n('QbaN'),
        T = n('HsFH'),
        I = n('wpu3'),
        S = n('eyty'),
        k = n('M2mT'),
        M = (n('5BYb'), n('G31s')),
        O = n('fs1G'),
        L = n('gEvp'),
        P = n('Qwev'),
        R = n('rHpw'),
        A = n('fn8Q'),
        F = R.a.create(function (e) {
          return { mediaPreview: { width: '100%' } }
        }),
        B = function (e) {
          var t = e.block,
            n = e.blockProps,
            r = e.contentState,
            a = n.allMedia,
            i = n.mediaIdToLocalMediaIdMap,
            o = t.getEntityAt(0),
            l = o ? r.getEntity(o) : null
          if (l) {
            var c = l.getData()
            if (l.type === A.b.TWEET) {
              var s = c.tweetId
              return u.a.createElement(L.a, { tweetId: s })
            }
            if (l.type === A.b.MEDIA) {
              var d,
                p = c.mediaItems
              if (c.uploaded) {
                if (
                  (d = p
                    .map(function (e) {
                      return i[e.mediaId]
                    })
                    .map(function (e) {
                      return a.find(function (t) {
                        return t.id === e
                      })
                    })).some(function (e) {
                    return !e
                  })
                ) {
                  if (!c.media) return u.a.createElement(P.a, null)
                  d = c.media
                }
              } else d = c.media
              return u.a.createElement(M.a, {
                editable: !0,
                media: d,
                onRemoveMedia: function () {
                  return O.a
                },
                style: F.mediaPreview,
              })
            }
          }
          return null
        },
        D = (n('yH/f'), n('G6rE')),
        V = Object(m.a)().propsFromState(function () {
          return { loggedInUser: D.e.selectLoggedInUser }
        }),
        z = n('KEM+'),
        H = n.n(z),
        K = n('QIgh'),
        j = n('8UdT'),
        W = n('xWpm'),
        G = n('VrCx'),
        U = n('oQhu'),
        N = n('fTQJ'),
        X = n('av/O'),
        J = n('E0cF'),
        Y = n('7fPw'),
        q = Object(U.a)(function (e) {
          return Object(Y.a)(e)
        }),
        Q = V(function (e) {
          var t = e.loggedInUser,
            n = e.onAddTweets,
            r = u.a.useCallback(
              function (e) {
                return n([e])
              },
              [n],
            ),
            a = u.a.useMemo(
              function () {
                return (function (e) {
                  var t = e.handleTweetClick
                  return o()(
                    o()({}, K.b),
                    {},
                    H()(
                      {},
                      j.b.Tweet,
                      o()(
                        o()({}, K.b[j.b.Tweet]),
                        {},
                        { handlers: H()({}, G.a.Tweet, Object(W.d)({ onClick: t, withSelectIcon: !1 })) },
                      ),
                    ),
                  )
                })({ handleTweetClick: r })
              },
              [r],
            ),
            i = t ? q(t.id_str) : null
          return i
            ? u.a.createElement(
                u.a.Fragment,
                null,
                u.a.createElement(X.a, {
                  checkTweet: function (e) {
                    var t
                    return null !== (t = e.user) && void 0 !== t && t.protected
                      ? 'Tweets from protected accounts can’t be used in Twitter Articles'
                      : J.a.isQuotedTweetUnavailable(e)
                      ? 'Quote Tweets of a deleted Tweet can’t be used in Twitter Articles'
                      : void 0
                  },
                  onTweetPress: function (e) {
                    n([e])
                  },
                }),
                u.a.createElement(N.a, { entryConfiguration: a, module: i, title: 'Liked' }),
              )
            : null
        }),
        Z = n('VPdC'),
        $ = n('tn7R'),
        ee = n('MWbm'),
        te = n('Uchl'),
        ne = n('k/OQ'),
        re = Object.freeze({ MEDIA: 'Media', GIFS: 'Gifs', TWEETS: 'Tweets' }),
        ae = R.a.create(function (e) {
          return {
            sheet: { minHeight: '50vh', maxHeight: '80vh' },
            container: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16 },
            mediaPicker: { marginTop: e.spaces.space12 },
          }
        }),
        ie = function (e) {
          var t = e.onAddMedia,
            n = e.onAddTweets,
            r = e.onClose,
            a = e.twitterArticleId,
            i = u.a.useState(re.MEDIA),
            o = c()(i, 2),
            l = o[0],
            s = o[1],
            d = function (e) {
              return function () {
                return l === e
              }
            },
            p = Object($.a)(re).map(function (e) {
              return {
                key: e,
                label: e,
                isActive: d(e),
                to: { pathname: '/i/twitter-article-composer/edit/'.concat(a) },
                onClick: function () {
                  return s(e)
                },
              }
            })
          return u.a.createElement(
            te.a,
            {
              onClose: r,
              primaryButtonConfig: { label: 'Done', forceDisabled: !1, onClick: r },
              style: ae.sheet,
              title: 'Attach',
            },
            u.a.createElement(
              ee.a,
              { style: ae.container },
              u.a.createElement(ne.a, { links: p }),
              (function () {
                switch (l) {
                  case re.MEDIA:
                    return u.a.createElement(Z.a, {
                      multiple: !0,
                      onChange: t,
                      size: 'large',
                      style: ae.mediaPicker,
                      type: 'brandText',
                    })
                  case re.TWEETS:
                    return u.a.createElement(Q, { onAddTweets: n })
                  default:
                    return null
                }
              })(),
            ),
          )
        },
        oe = n('Lsrn'),
        le = n('k/Ka'),
        ce = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(le.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [oe.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            u.a.createElement(
              'g',
              null,
              u.a.createElement('path', {
                d: 'M4.026 20.88c1.23.978 2.77 1.414 4.335 1.236 1.564-.18 2.964-.958 3.94-2.19l8.95-11.282c1.43-1.804 1.127-4.437-.677-5.868-.766-.607-1.682-.902-2.592-.902-1.23 0-2.452.54-3.276 1.58l-7.67 9.67c-.41.516-.593 1.16-.518 1.812.075.654.4 1.24.916 1.648 1.065.845 2.618.664 3.46-.4l4.932-6.215c.257-.325.203-.797-.122-1.055-.138-.11-.302-.162-.465-.162-.222 0-.44.098-.59.284l-4.93 6.216c-.33.416-.938.486-1.354.155-.2-.16-.328-.39-.357-.644-.03-.256.042-.508.202-.71l7.67-9.67c.917-1.157 2.605-1.35 3.763-.434 1.156.917 1.35 2.604.434 3.76l-8.95 11.282c-.728.92-1.77 1.5-2.936 1.633-1.162.133-2.312-.192-3.23-.922-.92-.73-1.5-1.77-1.634-2.937-.134-1.165.193-2.312.922-3.23l5.996-7.56c.257-.324.203-.796-.122-1.054-.137-.107-.3-.16-.465-.16-.222 0-.44.098-.59.284l-5.995 7.56c-2.017 2.544-1.59 6.256.956 8.274z',
              }),
            ),
          )
        }
      ce.metadata = { width: 24, height: 24 }
      var se = ce,
        ue = n('RH6X'),
        de = n('zpdM'),
        pe = function (e, t) {
          var n = e.getCurrentContent().createEntity(A.b.TWEET, A.a.IMMUTABLE, { tweetId: t }),
            r = n.getLastCreatedEntityKey(),
            a = de.EditorState.set(e, { currentContent: n })
          return de.AtomicBlockUtils.insertAtomicBlock(a, r, ' ')
        },
        fe = function (e) {
          var t, n, r
          return null !== (t = e.mediaFile) && void 0 !== t && t.isImage
            ? A.c.IMAGE
            : null !== (n = e.mediaFile) && void 0 !== n && n.isGif
            ? A.c.GIF
            : null !== (r = e.mediaFile) && void 0 !== r && r.isVideo
            ? A.c.VIDEO
            : void 0
        },
        me = n('UwBx'),
        he = n('keCP'),
        ve = u.a.createElement(se, null),
        ye = function (e) {
          var t = e.allMedia,
            n = e.editorState,
            r = e.mediaIdToLocalMediaIdMap,
            a = e.onAddMediaFiles,
            i = e.onChange,
            o = e.twitterArticleId,
            l = u.a.useState(!1),
            s = c()(l, 2),
            d = s[0],
            p = s[1],
            f = function () {
              p(!d)
            },
            m = function (e) {
              if ('atomic' === e.getType())
                return { component: B, editable: !1, props: { allMedia: t, mediaIdToLocalMediaIdMap: r } }
            },
            h = Object(U.a)(function (e) {
              return function (t) {
                e(t), i(t)
              }
            }),
            v = function (e) {
              return u.a.createElement(me.a, {
                additionalToolbarButtonConfigs: y,
                onChange: h(e),
                placeholder: 'Start writing',
                richTextInputContext: { blockRendererFn: m, editorState: n, element: he.a },
              })
            },
            y = [{ icon: ve, key: 'attachments sheet', onPress: f, type: 'brandText' }]
          return u.a.createElement(
            u.a.Fragment,
            null,
            u.a.createElement(
              ue.a,
              {
                contextText: n.getCurrentContent().getPlainText(),
                isInline: !0,
                onTextUpdated: i,
                onTypeaheadStateChange: O.a,
              },
              v,
            ),
            d
              ? u.a.createElement(ie, {
                  onAddMedia: function (e) {
                    a(e, function (e) {
                      var t = (function (e, t) {
                        var n = e.getCurrentContent(),
                          r = t.map(function (e) {
                            return { mediaCategory: fe(e), localMediaId: e.id }
                          }),
                          a = n.createEntity(A.b.MEDIA, A.a.IMMUTABLE, { mediaItems: r, media: t, uploaded: !1 }),
                          i = a.getLastCreatedEntityKey(),
                          o = a.mergeEntityData(i, { entityKey: i }),
                          l = de.EditorState.set(e, { currentContent: o })
                        return de.AtomicBlockUtils.insertAtomicBlock(l, i, ' ')
                      })(n, e)
                      i(t)
                    }),
                      f()
                  },
                  onAddTweets: function (e) {
                    var t = (function (e, t) {
                      return t.reduce(function (e, t) {
                        return pe(e, t)
                      }, e)
                    })(n, e)
                    i(t), f()
                  },
                  onClose: f,
                  twitterArticleId: o,
                })
              : null,
          )
        },
        ge = n('hHEM'),
        be = n('/yvb'),
        we = n('p+r5'),
        Ee = n('eb3s'),
        _e = n('G1WX'),
        Ce = n('ONCy'),
        xe = n('VY6S'),
        Te = 'Save',
        Ie = 'Publish',
        Se = 'Unpublish',
        ke = 'View',
        Me = 'Twitter Article Title',
        Oe = 'Twitter Article Saved',
        Le = 'Twitter Article Published',
        Pe = 'Twitter Article Unpublished',
        Re = 'Please choose either 1 GIF or up to 4 photos.',
        Ae = u.a.createElement(T.a, null),
        Fe = function (e) {
          var t,
            n = e.addMedia,
            r = e.addToast,
            i = e.allMedia,
            l = e.createLocalApiErrorHandler,
            s = e.dataSaverMode,
            d = e.deleteTwitterArticle,
            p = e.fetchStatus,
            f = e.fetchTwitterArticle,
            m = e.history,
            h = e.match.params.twitterArticleId,
            v = e.preUploadMedia,
            y = e.processMultipleMedia,
            g = e.removeMediaUpload,
            b = e.saveTwitterArticle,
            w = e.setMediaMetadata,
            E = e.title,
            _ = e.twitterArticle,
            T = e.updateTwitterArticleMedia,
            M = e.updateTwitterArticleTitle,
            O = e.updateTwitterArticleVisibility,
            L = e.uploadMedia,
            P = (null == _ || null === (t = _.metadata) || void 0 === t ? void 0 : t.visibility) === A.d.PUBLISHED,
            R = function (e) {
              var t
              try {
                t = e ? JSON.parse(e) : void 0
              } catch (r) {
                t = void 0
              }
              var n = ge.a.initEditorState(t)
              return ge.a.convertEmojiToEntities(n)
            },
            F = u.a.useState(R()),
            B = c()(F, 2),
            D = B[0],
            V = B[1],
            z = u.a.useState(!1),
            H = c()(z, 2),
            K = H[0],
            j = H[1],
            W = u.a.useState({}),
            G = c()(W, 2),
            U = G[0],
            N = G[1]
          u.a.useEffect(
            function () {
              f(h)
            },
            [f, h],
          ),
            u.a.useEffect(
              function () {
                if (_) {
                  var e,
                    t,
                    r = R(null == _ || null === (e = _.data) || void 0 === e ? void 0 : e.contentStateJson),
                    a =
                      null == _ || null === (t = _.media) || void 0 === t
                        ? void 0
                        : t.filter(function (e) {
                            return (null == e ? void 0 : e.media_id) && !U[e.media_id]
                          })
                  if (a && a.length > 0) {
                    var i = Object(x.d)(a).externalMedia
                    Promise.all(
                      i.map(function (e) {
                        var t = e.url
                        return Object(C.a)(t)
                      }),
                    )
                      .then(function (e) {
                        return n(e, { location: S.d.TwitterArticle })
                      })
                      .then(function (e) {
                        return e.map(function (e, t) {
                          var n = i[t],
                            r = n.altText,
                            a = n.sensitiveMediaWarning
                          return (
                            (r || a) &&
                              w(
                                e.id,
                                o()(
                                  o()({}, Object(Ce.a)(r ? { altText: r } : null)),
                                  Object(Ce.a)(a ? { sensitiveMediaWarning: a } : null),
                                ),
                              ),
                            e.id
                          )
                        })
                      })
                      .then(function (e) {
                        var t = e.reduce(function (e, t, n) {
                          return (e[a[n].media_id || ''] = t), e
                        }, {})
                        N(o()(o()({}, U), t)), V(de.EditorState.forceSelection(r, r.getSelection()))
                      })
                  } else V(r)
                }
              },
              [null == _ ? void 0 : _.rest_id],
            )
          var X = function (e) {
              var t = ge.a.convertEmojiToEntities(e)
              V(t)
            },
            J = function (e, t) {
              n(e, { location: S.d.TwitterArticle }).then(function (e) {
                if (Object(I.c)(e))
                  y(e, { onFailure: g }).then(function (e) {
                    s ||
                      v(
                        e.map(function (e) {
                          return e.id
                        }),
                      )
                  }),
                    t(e)
                else {
                  var n = e.map(function (e) {
                    return e.id
                  })
                  r({ text: Re }), g(n)
                }
              })
            },
            Y = function (e) {
              return Object.keys(e).filter(function (t) {
                return e[t].type === A.b.MEDIA
              })
            },
            q = function (e) {
              var t = e.entityMap,
                n = Y(t).reduce(function (e, n) {
                  var r,
                    i =
                      (null === (r = t[n].data) || void 0 === r
                        ? void 0
                        : r.mediaItems.map(function (e) {
                            return { media_category: e.mediaCategory, media_id: e.mediaId }
                          })) || []
                  return [].concat(a()(e), a()(i))
                }, [])
              T(h, { mediaKeys: n })
                .then(function () {
                  b(h, { contentStateJson: JSON.stringify(e) })
                    .then(r({ text: Oe }))
                    .catch(l({}))
                })
                .catch(l({}))
            },
            Q = function (e) {
              Z(e.target.value)
            },
            Z = u.a.useMemo(
              function () {
                return Object(xe.a)(function (e) {
                  M(h, { title: e || '' }).catch(l({}))
                }, 250)
              },
              [l, h, M],
            ),
            $ = function () {
              j(function (e) {
                return !e
              })
            },
            te = u.a.createElement(
              ee.a,
              { style: Be.controlsContainer },
              u.a.createElement(
                be.a,
                {
                  onClick: function () {
                    var e = D.getCurrentContent(),
                      t = Object(de.convertToRaw)(e),
                      n = t.entityMap,
                      r = Y(n).filter(function (e) {
                        var t
                        return !(null !== (t = n[e].data) && void 0 !== t && t.uploaded)
                      }),
                      i = r.reduce(function (e, t) {
                        var r,
                          i =
                            (null === (r = n[t].data) || void 0 === r
                              ? void 0
                              : r.mediaItems.map(function (e) {
                                  return e.localMediaId
                                })) || []
                        return [].concat(a()(e), a()(i))
                      }, [])
                    i.length > 0
                      ? L(i).then(function (t) {
                          var a = r.reduce(function (e, r) {
                            var a = n[r].data || {},
                              i = {
                                mediaItems: a.mediaItems.map(function (e) {
                                  var n
                                  return {
                                    mediaCategory: e.mediaCategory,
                                    mediaId:
                                      null ===
                                        (n = t.find(function (t) {
                                          return t.id === e.localMediaId
                                        })) || void 0 === n
                                        ? void 0
                                        : n.uploadId,
                                  }
                                }),
                                uploaded: !0,
                              }
                            return e.mergeEntityData(a.entityKey, i)
                          }, e)
                          q(Object(de.convertToRaw)(a))
                        })
                      : q(t)
                  },
                  style: Be.buttonMargin,
                },
                Te,
              ),
              u.a.createElement(
                be.a,
                {
                  onClick: function () {
                    O(h, { visibility: P ? A.d.DRAFT : A.d.PUBLISHED })
                      .then(
                        r({
                          text: P ? Pe : Le,
                          action: P ? void 0 : { label: ke, link: '/i/twitter-articles/'.concat(h) },
                        }),
                      )
                      .catch(l({}))
                  },
                  style: Be.buttonMargin,
                  type: 'brandFilled',
                },
                P ? Se : Ie,
              ),
              u.a.createElement(be.a, { icon: Ae, onClick: $, type: 'destructiveText' }),
            )
          return u.a.createElement(
            k.a,
            { rightControl: te, screenType: 'primaryDetail', title: 'Edit Twitter Article' },
            K
              ? u.a.createElement(Ee.a, {
                  headline: 'Delete Twitter Article?',
                  onCancel: $,
                  onConfirm: function () {
                    d(h).then(function () {
                      m.replace('/i/twitter-article-composer')
                    })
                  },
                })
              : null,
            u.a.createElement(
              ee.a,
              { style: Be.container },
              u.a.createElement(_e.a, {
                fetchStatus: p,
                render: function () {
                  return u.a.createElement(
                    u.a.Fragment,
                    null,
                    u.a.createElement(we.a, {
                      defaultValue: E,
                      key: 'title-input-'.concat(h),
                      label: Me,
                      name: Me,
                      onChange: Q,
                    }),
                    u.a.createElement(
                      ee.a,
                      { style: Be.inputWrapper },
                      u.a.createElement(ye, {
                        allMedia: i,
                        editorState: D,
                        mediaIdToLocalMediaIdMap: U,
                        onAddMediaFiles: J,
                        onChange: X,
                        twitterArticleId: h,
                      }),
                    ),
                  )
                },
              }),
            ),
          )
        },
        Be = R.a.create(function (e) {
          return {
            container: {
              borderTopColor: e.colors.borderColor,
              borderTopWidth: e.borderWidths.small,
              zIndex: e.componentZIndices.appBarZIndex + 1,
            },
            controlsContainer: { flexDirection: 'row' },
            buttonMargin: { marginRight: e.spaces.space8 },
            inputWrapper: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
          }
        }),
        De = _(Fe)
      t.default = De
    },
    RH6X: function (e, t, n) {
      'use strict'
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        f = n('KEM+'),
        m = n.n(f),
        h = (n('2G9S'), n('849X'), n('TJCb'), n('ERkP')),
        v = n.n(h),
        y = n('oEoC'),
        g = n('2dXj'),
        b = n('4bHO'),
        w = n('dzqK'),
        E = n('GZwR'),
        _ = n('zpdM'),
        C = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(c()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              m()(c()(e), '_genericWrapperRef', v.a.createRef()),
              m()(c()(e), 'render', function () {
                var t = e.props,
                  n = t.children,
                  r = t.contextText,
                  a = t.isInline,
                  i = t.isInlineReply,
                  o = t.onTypeaheadStateChange,
                  l = t.source,
                  c = e.state,
                  s = c.canShowTypeahead,
                  u = c.queryContext,
                  d = s && u ? { word: u.word, resultType: u.resultType } : void 0
                return v.a.createElement(
                  g.a,
                  {
                    contextText: r,
                    isInline: a,
                    isInlineReply: i,
                    onDismiss: e._handleDismiss,
                    onSelectItem: e._handleSelectItem,
                    onTypeaheadStateChange: o,
                    query: d,
                    ref: e._genericWrapperRef,
                    source: l || E.d.Compose,
                  },
                  n(e._handleInputChange),
                )
              }),
              m()(c()(e), '_getCaret', function (e) {
                return e.getSelection().getStartOffset()
              }),
              m()(c()(e), '_getPlaintextFromCurrentBlock', function (e) {
                var t = e.getSelection().anchorKey
                return e.getCurrentContent().getBlockForKey(t).getText()
              }),
              m()(c()(e), '_handleSelectItem', function (t) {
                var n = e.props.onTextUpdated,
                  r = e.state.queryContext
                if (r) {
                  var a = Object(b.a)(t, r.resultType)
                  n(e._replaceToken(a, r))
                }
                e._setQueryContext(void 0)
              }),
              m()(c()(e), '_handleInputChange', function (t) {
                if (!Object(w.a)(t))
                  throw new Error('RichTextTypeaheadComposeWrapper cannot handle plain text input changes')
                var n = e.state.queryContext,
                  r = n && n.word,
                  a = e._getPlaintextFromCurrentBlock(t),
                  i = y.c(e._getCaret(t), a),
                  o = i.end,
                  l = i.start,
                  c = i.word,
                  s = y.e(c || '', 'compose')
                if ((null == s ? void 0 : s.q) !== r)
                  if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === l))
                    e._setQueryContext(void 0)
                  else if (s) {
                    var u = s.q,
                      d = s.result_type
                    e._setQueryContext({ word: u, resultType: d, editorState: t, startIndex: l, endIndex: o })
                  } else e._setQueryContext(void 0)
              }),
              m()(c()(e), '_setQueryContext', function (t) {
                return e.setState({ queryContext: t, canShowTypeahead: !!t })
              }),
              m()(c()(e), '_handleDismiss', function () {
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
                  var n = t.editorState,
                    r = t.endIndex,
                    a = t.startIndex,
                    i = n
                      .getSelection()
                      .merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: a, focusOffset: r }),
                    o = _.Modifier.replaceText(n.getCurrentContent(), i, e),
                    l = _.EditorState.push(n, o, 'insert-characters'),
                    c = a + e.length,
                    s = l.getSelection().merge({ anchorOffset: c, focusOffset: c })
                  return _.EditorState.forceSelection(l, s)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      t.a = C
    },
    Tvzs: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return I
      }),
        n.d(t, 'd', function () {
          return S
        }),
        n.d(t, 'a', function () {
          return k
        }),
        n.d(t, 'c', function () {
          return M
        }),
        n.d(t, 'f', function () {
          return L
        }),
        n.d(t, 'e', function () {
          return P
        })
      var r = n('KEM+'),
        a = n.n(r),
        i = n('yiKp'),
        o = n.n(i),
        l = (n('KOtZ'), n('7x/C'), n('ERkP')),
        c = n.n(l),
        s = n('t62R'),
        u = n('rHpw'),
        d = n('Lsrn'),
        p = n('k/Ka'),
        f = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(p.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [d.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M17.481 12.934a3.862 3.862 0 01.856 2.6 4.422 4.422 0 01-.585 2.251 4.078 4.078 0 01-1.8 1.61 6.811 6.811 0 01-3.016.6H5.75V4.009h6.85a5.871 5.871 0 014 1.17 3.8 3.8 0 011.309 2.971 3.554 3.554 0 01-.731 2.218 3.733 3.733 0 01-2.078 1.317 3.812 3.812 0 012.381 1.249zM9.018 6.439v4.233h2.836a2.79 2.79 0 001.981-.585 2 2 0 00.607-1.509 2.049 2.049 0 00-.618-1.542 2.765 2.765 0 00-1.97-.6zm5.166 10.468a2.238 2.238 0 00.664-1.666 2.1 2.1 0 00-.653-1.632 2.785 2.785 0 00-1.936-.6H9.018v4.551h3.128a2.8 2.8 0 002.038-.653z',
                fillRule: 'evenodd',
              }),
            ),
          )
        }
      f.metadata = { width: 24, height: 24 }
      var m = f,
        h = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(p.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [d.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M19 4H9a.75.75 0 000 1.5h4.075l-3.71 13H5A.75.75 0 005 20h10a.75.75 0 000-1.5h-4.075l3.71-13H19A.75.75 0 0019 4z',
                fillRule: 'evenodd',
              }),
            ),
          )
        }
      h.metadata = { width: 24, height: 24 }
      var v = h,
        y = n('CwxE'),
        g = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(p.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [d.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M17.91 14.554a5.5 5.5 0 01.13 1.224c0 2.959-2.165 4.8-5.65 4.8-3.594 0-5.934-1.8-6.42-4.955a.75.75 0 111.482-.228c.5 3.205 3.306 3.683 4.938 3.683 1.55 0 4.15-.429 4.15-3.3a4 4 0 00-.092-.89.75.75 0 111.462-.334zM21 11h-8.173c-.236-.04-.474-.079-.716-.114-2.965-.447-4.121-1.375-4.121-3.315 0-1.9 1.462-3 4.01-3 2.353 0 3.755.988 4.17 2.937a.93.93 0 00.2.467.751.751 0 001.189-.911c.061.093.083.161.075.132C17.072 4.54 15.07 3.075 12 3.075c-4.063 0-5.51 2.322-5.51 4.5A4.047 4.047 0 008.046 11H3a.75.75 0 000 1.5h9.715a.758.758 0 00.106.009c.017 0 .033-.008.05-.009H21a.75.75 0 000-1.5z',
                fillRule: 'evenodd',
              }),
            ),
          )
        }
      g.metadata = { width: 24, height: 24 }
      var b = g,
        w = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(p.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [d.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M21.75 16.75a.75.75 0 01-.75.75H9A.75.75 0 019 16h12a.75.75 0 01.75.75zM9 7.5h12A.75.75 0 0021 6H9a.75.75 0 000 1.5zM4.5 4.25A2.25 2.25 0 106.75 6.5 2.253 2.253 0 004.5 4.25zm0 10a2.25 2.25 0 102.25 2.25 2.253 2.253 0 00-2.25-2.25z',
                fillRule: 'evenodd',
              }),
            ),
          )
        }
      w.metadata = { width: 24, height: 24 }
      var E = w,
        _ = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(p.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [d.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M2.079 6.085a.75.75 0 01.336-1.006l2-1A.75.75 0 015.5 4.75v5a.75.75 0 01-1.5 0V5.964l-.915.457a.748.748 0 01-1.006-.336zM6 18.25H4.8l1.306-1.313a2.162 2.162 0 00-1.531-3.687 2.328 2.328 0 00-2.325 2.325v.368a.75.75 0 101.5 0v-.368a.826.826 0 01.825-.825.664.664 0 01.47.2.652.652 0 01.192.472.662.662 0 01-.192.462l-2.577 2.588A.75.75 0 003 19.75h3a.75.75 0 000-1.5zM21 16H9a.75.75 0 000 1.5h12a.75.75 0 000-1.5zm0-10H9a.75.75 0 000 1.5h12A.75.75 0 0021 6z',
                fillRule: 'evenodd',
              }),
            ),
          )
        }
      _.metadata = { width: 24, height: 24 }
      var C = _,
        x = u.a.create(function (e) {
          return { iconGray: { color: e.colors.gray700 } }
        }),
        T = {
          iconBold: c.a.createElement(m, { style: x.iconGray }),
          iconItalic: c.a.createElement(v, { style: x.iconGray }),
          iconCode: c.a.createElement(y.a, { style: x.iconGray }),
          iconStrikethrough: c.a.createElement(b, { style: x.iconGray }),
          iconBulletedList: c.a.createElement(E, { style: x.iconGray }),
          iconNumberedList: c.a.createElement(C, { style: x.iconGray }),
        },
        I = { bold: 'BOLD', italic: 'ITALIC', code: 'CODE', strikethrough: 'STRIKETHROUGH' },
        S = function (e) {
          return [
            { icon: T.iconBold, key: 'bold', onPress: e(I.bold) },
            { icon: T.iconItalic, key: 'italic', onPress: e(I.italic) },
            { icon: T.iconCode, key: 'code', onPress: e(I.code) },
            { icon: T.iconStrikethrough, key: 'strikethrough', onPress: e(I.strikethrough) },
          ]
        },
        k = {
          bulleted: 'unordered-list-item',
          header1: 'header-one',
          header2: 'header-two',
          numbered: 'ordered-list-item',
          paragraph: 'unstyled',
        },
        M = function (e) {
          return [
            { icon: T.iconBulletedList, key: 'bulleted', onPress: e(k.bulleted) },
            { icon: T.iconNumberedList, key: 'numbered', onPress: e(k.numbered) },
          ]
        },
        O = function (e, t) {
          return function (n) {
            return c.a.createElement(s.b, { size: e, weight: t }, n)
          }
        },
        L = [
          { blockType: k.header1, label: 'Heading 1', render: O('title1', 'heavy') },
          { blockType: k.header2, label: 'Heading 2', render: O('title3', 'heavy') },
          { blockType: k.paragraph, label: 'Paragraph', render: O('body') },
        ],
        P = L.reduce(function (e, t) {
          var n = t.blockType
          return o()(a()({}, n, { element: 'div', wrapper: t.render() }), e)
        }, {})
    },
    Uchl: function (e, t, n) {
      'use strict'
      var r = n('ddV6'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        l = n('MWbm'),
        c = n('5Vk4'),
        s = n('/yvb'),
        u = n('sgih'),
        d = n('xKuM'),
        p = n('rHpw').a.create(function (e) {
          return {
            sheet: { maxHeight: '100vh' },
            appBar: { borderRadius: e.borderRadii.xLarge, overflow: 'hidden' },
            buttonContainer: { flexDirection: 'row-reverse' },
            secondaryButton: { marginRight: e.spaces.space8 },
            content: { flex: 1, overflowY: 'auto' },
          }
        })
      t.a = function (e) {
        var t = e.children,
          n = e.onBackClick,
          r = e.onClose,
          i = e.primaryButtonConfig,
          f = e.secondaryButtonConfig,
          m = e.style,
          h = e.title,
          v = o.a.useState(!1),
          y = a()(v, 2),
          g = y[0],
          b = y[1],
          w = function () {
            b(function (e) {
              return !e
            })
          },
          E = o.a.createElement(c.a, { backButtonType: n ? 'back' : 'close', onClick: n || r }),
          _ = i
            ? o.a.createElement(
                s.a,
                {
                  accessibilityLabel: i.label,
                  disabled: g || i.forceDisabled,
                  onClick: function () {
                    w(), null == i || i.onClick(w)
                  },
                  size: 'small',
                  type: 'primaryFilled',
                },
                i.label,
              )
            : null,
          C = f
            ? o.a.createElement(
                s.a,
                {
                  accessibilityLabel: f.label,
                  onClick: function () {
                    null == f || f.onClick()
                  },
                  size: 'small',
                  style: p.secondaryButton,
                  type: 'primaryOutlined',
                },
                f.label,
              )
            : null,
          x = o.a.createElement(l.a, { style: p.buttonContainer }, _, C)
        return o.a.createElement(
          u.a,
          {
            enableMaskForDismiss: !0,
            onMaskClick: r,
            style: [p.sheet, m],
            type: 'full',
            withKeyboardNavigation: !0,
            withMask: !0,
          },
          o.a.createElement(d.a, { leftControl: E, rightControl: x, style: p.appBar, title: h }),
          o.a.createElement(l.a, { style: p.content }, t),
        )
      }
    },
    UwBx: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return G
      })
      var r = n('RhWx'),
        a = n.n(r),
        i = n('yiKp'),
        o = n.n(i),
        l = n('m3Bd'),
        c = n.n(l),
        s = n('97Jx'),
        u = n.n(s),
        d = n('ddV6'),
        p = n.n(d),
        f = n('VrFO'),
        m = n.n(f),
        h = n('Y9Ll'),
        v = n.n(h),
        y = n('1Pcy'),
        g = n.n(y),
        b = n('5Yy7'),
        w = n.n(b),
        E = n('2VqO'),
        _ = n.n(E),
        C = n('KEM+'),
        x = n.n(C),
        T = (n('2G9S'), n('KOtZ'), n('7x/C'), n('z84I'), n('uFXj'), n('ERkP')),
        I = n.n(T),
        S = n('mjJ+'),
        k = n('t62R'),
        M = n('/yvb'),
        O = n('VUbk'),
        L = n.n(O),
        P = n('FG+G'),
        R = n('IG7M'),
        A = n('rHpw'),
        F = n('MWbm'),
        B = A.a.create(function (e) {
          return {
            separator: {
              borderRightWidth: e.borderWidths.small,
              borderColor: e.colors.nestedBorderColor,
              marginVertical: e.spaces.space4,
            },
          }
        }),
        D = function (e) {
          var t = e.style
          return I.a.createElement(F.a, { style: [B.separator, t] })
        },
        V = n('Tvzs'),
        z = n('zpdM'),
        H = n('6OUF'),
        K = n('sXY3'),
        j = n('tn7R'),
        W = ['additionalToolbarButtonConfigs', 'inputStyle', 'richTextInputContext'],
        G = (function (e) {
          w()(n, e)
          var t = _()(n)
          function n() {
            var e
            m()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              x()(g()(e), 'state', { selectedTextSize: V.f[2] }),
              x()(g()(e), '_toggleTextStyle', function (t) {
                var n = e.props,
                  r = n.onChange,
                  a = n.richTextInputContext.editorState
                return function (e) {
                  return function () {
                    a && (null == r || r(t(a, e)))
                  }
                }
              }),
              x()(g()(e), '_isEditorFocused', function () {
                var t = e.props.richTextInputContext.editorState
                return null == t ? void 0 : t.getSelection().getHasFocus()
              }),
              x()(g()(e), '_handleTextSizeClick', function (t) {
                return function () {
                  e.setState({ selectedTextSize: t }), e._toggleTextStyle(z.RichUtils.toggleBlockType)(t.blockType)()
                }
              }),
              x()(g()(e), '_mergeMap', function (e, t) {
                return Object(K.a)(t).reduce(function (e, t) {
                  var n = p()(t, 2),
                    r = n[0],
                    a = n[1]
                  return e.set(r, a)
                }, e)
              }),
              x()(g()(e), '_renderToolbarButtonGroup', function (t, n) {
                return I.a.createElement(
                  F.a,
                  { style: U.buttonGroup },
                  n ? null : I.a.createElement(D, { style: U.itemMargin }),
                  t.map(function (t, r) {
                    return I.a.createElement(
                      M.a,
                      u()(
                        {
                          preventFocusShift: e._isEditorFocused(),
                          style: 0 === r && n ? null : U.itemMargin,
                          type: 'primaryText',
                        },
                        t,
                      ),
                    )
                  }),
                )
              }),
              x()(g()(e), '_renderActionMenu', function (t) {
                var n = V.f.map(function (t) {
                  return { text: t.render(t.label), onClick: e._handleTextSizeClick(t) }
                })
                return I.a.createElement(S.a, {
                  items: n,
                  onCloseRequested: t,
                  preventFocusShift: e._isEditorFocused(),
                  shouldCloseOnClick: !0,
                })
              }),
              x()(g()(e), '_setFieldTextInputRef', function (t) {
                e.fieldTextInput = t
              }),
              e
            )
          }
          return (
            v()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.additionalToolbarButtonConfigs,
                    n = e.inputStyle,
                    r = e.richTextInputContext,
                    i = c()(e, W),
                    l = this.state.selectedTextSize,
                    s = Object(V.d)(this._toggleTextStyle(z.RichUtils.toggleInlineStyle)),
                    d = Object(V.c)(this._toggleTextStyle(z.RichUtils.toggleBlockType)),
                    p = this._mergeMap(this._mergeMap(L.a, V.e), r.blockRenderMap || {}),
                    f = o()(
                      o()({}, r),
                      {},
                      {
                        blockRenderMap: p,
                        pastedStylesAllowlist: [].concat(
                          a()(Object(j.a)(V.b)),
                          a()(Object(j.a)(V.a)),
                          a()(r.pastedStylesAllowlist || []),
                        ),
                      },
                    )
                  return I.a.createElement(
                    I.a.Fragment,
                    null,
                    I.a.createElement(
                      F.a,
                      { style: U.toolbar },
                      this._renderToolbarButtonGroup(s, !0),
                      I.a.createElement(D, { style: U.itemMargin }),
                      I.a.createElement(
                        F.a,
                        { style: U.textSizeSelection },
                        I.a.createElement(k.b, { color: 'gray700', numberOfLines: 1 }, null == l ? void 0 : l.label),
                        I.a.createElement(R.a, {
                          Icon: P.a,
                          iconSize: 'small',
                          preventFocusShift: this._isEditorFocused(),
                          renderActionMenu: this._renderActionMenu,
                          style: U.itemMargin,
                        }),
                      ),
                      this._renderToolbarButtonGroup(d),
                      t ? this._renderToolbarButtonGroup(t) : null,
                    ),
                    I.a.createElement(
                      H.a,
                      u()({ inputStyle: [U.input, n], ref: this._setFieldTextInputRef, richTextInputContext: f }, i),
                    ),
                  )
                },
              },
              {
                key: 'focus',
                value: function () {
                  var e
                  null === (e = this.fieldTextInput) || void 0 === e || e.focus()
                },
              },
              {
                key: 'getTextInputHeight',
                value: function () {
                  var e
                  return null === (e = this.fieldTextInput) || void 0 === e ? void 0 : e.getTextInputHeight()
                },
              },
            ]),
            n
          )
        })(I.a.Component)
      x()(G, 'defaultProps', { leftAligned: !0, multiline: !0, styleType: 'selection' })
      var U = A.a.create(function (e) {
        return {
          buttonGroup: { flexDirection: 'row' },
          input: { paddingHorizontal: 0, paddingBottom: 0 },
          itemMargin: { marginLeft: e.spaces.space8 },
          textSizeSelection: {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: e.spaces.space16,
            marginRight: e.spaces.space8,
            width: 'calc('.concat(e.spaces.space32, ' * 3)'),
          },
          toolbar: {
            borderBottomWidth: e.borderWidths.small,
            borderColor: e.colors.nestedBorderColor,
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingBottom: e.spaces.space4,
            justifyContent: 'center',
            width: '100%',
          },
        }
      })
    },
    VPdC: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return L
      })
      var r = n('97Jx'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('VrFO'),
        c = n.n(l),
        s = n('Y9Ll'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('2VqO'),
        m = n.n(f),
        h = n('KEM+'),
        v = n.n(h),
        y = (n('2G9S'), n('7xRU'), n('ERkP')),
        g = n.n(y),
        b = n('3XMw'),
        w = n.n(b),
        E = n('cjZk'),
        _ = 'fileInput',
        C = n('sjK1'),
        x = n('/Imo'),
        T = n('rHpw'),
        I = n('9HgX'),
        S = ['acceptGifs', 'acceptImages', 'acceptVideo', 'customMimeTypes', 'icon', 'style', 'withIcon'],
        k = w.a.b9960f31,
        M = { viewType: 'media_picker' },
        O = g.a.createElement(E.a, null),
        L = function (e) {
          var t = e.acceptGifs,
            n = e.acceptImages,
            r = void 0 === n || n,
            a = e.acceptVideo
          return (r ? I.b : []).concat(t ? [I.a] : []).concat(a ? C.a : [])
        },
        P = (function (e) {
          p()(n, e)
          var t = m()(n)
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
                    r = e.acceptVideo,
                    i = e.customMimeTypes,
                    l = e.icon,
                    c = e.style,
                    s = e.withIcon,
                    u = o()(e, S),
                    d = L({ acceptGifs: t, acceptImages: n, acceptVideo: r }).concat(i).join(',')
                  return g.a.createElement(
                    x.a,
                    a()({}, u, {
                      accept: d,
                      behavioralEventContext: M,
                      icon: s ? l : void 0,
                      style: [R.root, c],
                      testID: _,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      v()(P, 'defaultProps', {
        acceptGifs: !0,
        acceptImages: !0,
        acceptVideo: !0,
        customMimeTypes: [],
        accessibilityLabel: k,
        icon: O,
        size: 'medium',
        withIcon: !0,
      })
      var R = T.a.create(function (e) {
        return { root: { margin: '-'.concat(e.spaces.space12) } }
      })
      t.a = P
    },
    'av/O': function (e, t, n) {
      'use strict'
      var r = n('ddV6'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        l = n('956X'),
        c = (n('uFXj'), n('XOJV')),
        s = n('rxPX'),
        u = function (e, t) {
          var n = t.tweetId
          return n ? c.a.selectHydrated(e, n) : void 0
        },
        d = Object(s.a)().propsFromState(function () {
          return { tweet: u }
        }),
        p = n('3XMw'),
        f = n.n(p),
        m = n('r7g+'),
        h = n('cm6r'),
        v = n('rHpw'),
        y =
          (f.a.ac78ac54,
          v.a.create(function (e) {
            return {
              tweet: {
                backgroundColor: e.colors.cellBackground,
                borderWidth: e.borderWidths.small,
                borderColor: e.colors.borderColor,
                borderStyle: 'solid',
                borderRadius: e.borderRadii.xLarge,
                marginBottom: e.componentDimensions.gutterVertical,
                marginHorizontal: e.componentDimensions.gutterHorizontal,
              },
            }
          })),
        g = d(function (e) {
          var t = e.onTweetPress,
            n = e.tweet,
            r = e.tweetId
          if (!n) return null
          var a = o.a.createElement(m.a, { tweet: n })
          if (!t) return a
          return o.a.createElement(
            h.a,
            {
              onPress: function (e) {
                r && t(r)
              },
              style: y.tweet,
            },
            a,
          )
        })
      t.a = function (e) {
        var t = e.checkTweet,
          n = e.onChangeTweetId,
          r = e.onTweetPress,
          i = o.a.useState(),
          c = a()(i, 2),
          s = c[0],
          u = c[1]
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(l.a, {
            checkTweet: t,
            onChangeTweetId: function (e) {
              u(e), n && n(e)
            },
            tweetId: s,
            withActivityIndicator: !0,
          }),
          o.a.createElement(g, {
            onTweetPress: function (e) {
              r && s && r(s)
            },
            tweetId: s,
          }),
        )
      }
    },
    c0ZR: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('7x/C'), n('JtPf'), n('849X'), n('TJCb')
      var r = function (e) {
        return new Promise(function (t, n) {
          var r = new window.XMLHttpRequest()
          ;(r.responseType = 'blob'),
            (r.onreadystatechange = function () {
              r.readyState === window.XMLHttpRequest.DONE &&
                (200 === r.status ? t(r.response) : n(new Error('Unexpected status code')))
            }),
            (r.onerror = function (e) {
              return n(e)
            }),
            (r.ontimeout = function (e) {
              return n(e)
            }),
            r.open('GET', e, !0),
            r.send()
        })
      }
    },
    dWxr: function (e, t, n) {
      'use strict'
      var r = n('IGGJ')
      n('2G9S'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          var n = (0, l.default)(e, t)
            .concat((0, o.default)(e))
            .concat((0, i.default)(e, { checkUrlOverlap: !1 }))
            .concat((0, a.default)(e))
          if (0 == n.length) return []
          return (0, c.default)(n), n
        })
      var a = r(n('EW8Q')),
        i = r(n('yyPN')),
        o = r(n('YXS5')),
        l = r(n('vwfs')),
        c = r(n('c8jd'))
      e.exports = t.default
    },
    dzqK: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('ERkP')
      var r = n('zpdM')
      function a(e) {
        return e instanceof r.EditorState
      }
    },
    fn8Q: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return r
      }),
        n.d(t, 'd', function () {
          return a
        }),
        n.d(t, 'b', function () {
          return i
        }),
        n.d(t, 'a', function () {
          return o
        })
      n('yH/f')
      var r = Object.freeze({ GIF: 'TweetGif', IMAGE: 'TweetImage', VIDEO: 'TweetVideo' }),
        a = Object.freeze({ DRAFT: 'Draft', PUBLISHED: 'Published' }),
        i = Object.freeze({ MEDIA: 'MEDIA', TWEET: 'TWEET' }),
        o = Object.freeze({ IMMUTABLE: 'IMMUTABLE' })
    },
    gEvp: function (e, t, n) {
      'use strict'
      n('uFXj')
      var r = n('ERkP'),
        a = n.n(r),
        i = n('XOJV'),
        o = n('rxPX'),
        l = function (e, t) {
          var n = t.tweetId
          return n ? i.a.selectHydrated(e, n) : void 0
        },
        c = function (e, t) {
          var n = t.tweetId
          return n ? i.a.selectFetchStatus(e, n) : void 0
        },
        s = Object(o.a)()
          .propsFromState(function () {
            return { tweet: l, fetchStatus: c }
          })
          .propsFromActions(function () {
            return { fetchTweetIfNeeded: i.a.fetchOneIfNeeded }
          }),
        u = n('v//M'),
        d = n('MWbm'),
        p = n('r7g+'),
        f = n('rHpw'),
        m = f.a.create(function (e) {
          return {
            container: {
              borderColor: e.colors.gray200,
              borderRadius: e.borderRadii.large,
              borderWidth: e.borderWidths.small,
              width: '100%',
            },
          }
        }),
        h = s(function (e) {
          var t = e.fetchStatus,
            n = e.fetchTweetIfNeeded,
            r = e.tweet,
            i = e.tweetId,
            o = a.a.useCallback(
              function () {
                n(i)
              },
              [i, n],
            )
          a.a.useEffect(
            function () {
              i && o()
            },
            [o, i],
          )
          return a.a.createElement(
            d.a,
            { style: m.container, testID: 'simpleTweet' },
            a.a.createElement(u.a, {
              fetchStatus: t,
              onRequestRetry: o,
              render: function () {
                return r ? a.a.createElement(p.a, { tweet: r }) : null
              },
              retryMessage: 'Something went wrong. Try reloading the Tweet again.',
              retryable: !0,
            }),
          )
        })
      t.a = h
    },
    hHEM: function (e, t, n) {
      'use strict'
      n('yH/f'), n('jwue'), n('7x/C'), n('+oxZ')
      var r = n('z4Oz'),
        a = n('LQrL'),
        i = n('zpdM'),
        o = function (e, t) {
          for (var n = 0, r = 0; r < e.length; r++) {
            var a = e[r],
              i = a.getText().length
            if (n + i >= t) return { blockKey: a.key, offset: t - n }
            n += i + 1
          }
          return Object.freeze({})
        },
        l = function (e, t) {
          var n = e.getCurrentContent(),
            r = n.getFirstBlock(),
            a = n.getLastBlock(),
            o = t.blockKey,
            l = void 0 === o ? a.key : o,
            c = t.offset,
            s = void 0 === c ? a.getText().length : c,
            u = e
              .getSelection()
              .merge({ anchorKey: r.key, anchorOffset: 0, focusKey: l, focusOffset: s, isBackward: !1 }),
            d = i.Modifier.removeInlineStyle(e.getCurrentContent(), u, 'overflow')
          return i.EditorState.push(e, d, 'change-inline-style')
        },
        c = function (e, t) {
          var n = t.blockKey,
            r = t.offset,
            a = e.getCurrentContent(),
            o = a.getLastBlock(),
            l = s(a, n, r)
          if (n) {
            var c = e
                .getSelection()
                .merge({
                  anchorKey: n,
                  anchorOffset: l,
                  focusKey: o.key,
                  focusOffset: o.getText().length,
                  isBackward: !1,
                }),
              u = i.Modifier.applyInlineStyle(a, c, 'overflow')
            return i.EditorState.push(e, u, 'change-inline-style')
          }
          return e
        },
        s = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            r = n,
            a = e.getBlockForKey(t)
          if (a) {
            var i = a.getEntityAt(n)
            if (void 0 !== i) {
              var o = i && e.getEntity(i),
                l = o && o.data && o.data.id
              if (void 0 !== l)
                for (var c = n - 1; c >= 0; c--) {
                  var s = a.getEntityAt(c),
                    u = s && e.getEntity(s)
                  if (!u || !u.data || u.data.id !== l) {
                    r = c + 1
                    break
                  }
                }
            }
            return r
          }
        },
        u = 'TWEMOJI',
        d = 'IMMUTABLE'
      t.a = {
        convertEmojiToEntities: function (e) {
          var t = i.EditorState.set(e, { allowUndo: !1 }),
            n = t.getCurrentContent(),
            a = 0
          return (
            n.getBlocksAsArray().forEach(function (e) {
              r.a.getTwemojiEntities(e.getText()).forEach(function (r) {
                if (2 === (r.indices && r.indices.length)) {
                  var o = n.createEntity(u, d, { url: r.url || null, id: a })
                  a += 1
                  var l = o.getLastCreatedEntityKey(),
                    c = e.getKey(),
                    s = t
                      .getSelection()
                      .merge({
                        anchorKey: c,
                        anchorOffset: r.indices[0],
                        focusKey: c,
                        focusOffset: r.indices[1],
                        isBackward: !1,
                      })
                  n = i.Modifier.applyEntity(o, s, l)
                }
              })
            }),
            i.EditorState.set(t, { allowUndo: !0, currentContent: n })
          )
        },
        getRelativeOffset: o,
        initEditorState: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { decorators: [a.b, a.e, a.a] },
            n = t.decorators,
            r = i.EditorState.createWithContent(
              'string' == typeof e ? i.ContentState.createFromText(e) : Object(i.convertFromRaw)(e),
              new i.CompositeDecorator(n),
            )
          return i.EditorState.moveSelectionToEnd(r)
        },
        insertTextAtCursor: function (e, t) {
          var n = e.getCurrentContent(),
            r = e.getSelection(),
            a = i.Modifier.insertText(n, r, t)
          return i.EditorState.push(e, a, 'insert-characters')
        },
        TWEMOJI_ENTITY_TYPE: u,
        updateOverflowStyle: function (e, t) {
          var n,
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = e.getSelection(),
            s = i.EditorState.set(e, { allowUndo: !1 }),
            u = e.getCurrentContent().getSelectionBefore(),
            d = e.getCurrentContent().getSelectionAfter(),
            p = e.getCurrentContent(),
            f = p.getBlocksAsArray(),
            m = 'number' == typeof t && t > -1,
            h = m ? o(f, t) : Object.freeze({})
          if ((r && ((s = l(s, h)), (n = !0)), m && ((s = c(s, h)), (n = !0)), n)) {
            var v = (s = i.EditorState.forceSelection(s, a)).getCurrentContent()
            ;(v = (v = v.set('selectionBefore', u)).set('selectionAfter', d)),
              (s = i.EditorState.set(e, { allowUndo: !0, currentContent: v }))
          }
          return s
        },
      }
    },
    kIAd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return i
        })
      var r = n('0vv5'),
        a = 500,
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
            { type: 'hashtag', regexp: n.n(r).a, srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
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
    keCP: function (e, t, n) {
      'use strict'
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        f = n('KEM+'),
        m = n.n(f),
        h = n('97Jx'),
        v = n.n(h),
        y =
          (n('2G9S'),
          n('jwue'),
          n('7x/C'),
          n('+oxZ'),
          n('KqXw'),
          n('MvUL'),
          n('z84I'),
          n('LW0h'),
          n('jQ3i'),
          n('x4t0'),
          n('KOtZ'),
          n('SV7d')),
        g = n('rHpw'),
        b = 'singleline',
        w = function (e) {
          var t = e.placeholderTextColor,
            n = void 0 === t ? g.a.theme.colors.gray700 : t,
            r = g.a.theme.spaces.space2
          return '\n         .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n            height: inherit;\n            max-height: inherit;\n            min-height: inherit;\n            overflow: auto;\n            text-align: initial;\n        }\n\n        .public-DraftEditor-content[contenteditable=true] {\n            -webkit-user-modify: read-write-plaintext-only\n        }\n\n        .DraftEditor-root {\n            width: 100%;\n            position: relative;\n            -webkit-user-select: none;\n        }\n\n        .DraftEditor-editorContainer {\n            background-color: rgba(255, 255, 255, 0);\n            border-left: .1px solid transparent;\n            position: relative;\n            z-index: 1;\n        }\n\n        .public-DraftEditor-block {\n            position: relative;\n        }\n\n        .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n            text-align: left;\n        }\n\n        .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n            left: 0;\n            text-align: left;\n        }\n\n        .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n            text-align: center\n        }\n\n        .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n            margin: 0 auto;\n            text-align: center;\n            width: 100%\n        }\n\n        .DraftEditor-alignRight .public-DraftStyleDefault-block {\n            text-align: right;\n        }\n\n        .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n            right: 0;\n            text-align: right;\n        }\n\n        .public-DraftEditorPlaceholder-root {\n            color: '
            .concat(n, ';\n            padding-bottom: ')
            .concat(r, ';\n            padding-top: ')
            .concat(
              r,
              ';\n            position: absolute;\n            z-index: 1;\n        }\n\n        .public-DraftEditorPlaceholder-inner {\n            user-select: none;\n            -webkit-user-select: none;\n        }\n\n        .public-DraftEditorPlaceholder-hasFocus {\n            color: ',
            )
            .concat(
              n,
              ';\n        }\n\n        .DraftEditorPlaceholder-hidden {\n            display: none;\n        }\n\n        .public-DraftStyleDefault-block {\n            overflow:hidden;\n            padding-bottom: ',
            )
            .concat(r, ';\n            padding-top: ')
            .concat(
              r,
              ";\n            position: relative;\n            white-space: pre-wrap;\n        }\n\n        /* Only a handful of CSS rules work on br tags and user-select isn't one */\n        div:only-child > .public-DraftStyleDefault-block br::selection {\n            background: transparent;\n        }\n\n        /*\n           Safari doesn't let you change ::selection on br elements,\n           but Chrome needs it here\n        */\n        div:only-child > .public-DraftStyleDefault-block::selection {\n            background: transparent;\n        }\n\n        .public-DraftStyleDefault-ltr {\n            direction: ltr;\n            text-align: left;\n        }\n\n        .public-DraftStyleDefault-rtl {\n            direction: rtl;\n            text-align: right;\n        }\n\n        .",
            )
            .concat(
              b,
              ' .public-DraftStyleDefault-block {\n            overflow-x: auto;\n            scrollbar-width: none;\n            white-space: nowrap;\n            -ms-overflow-style: none;\n        }\n        .',
            )
            .concat(
              b,
              ' .public-DraftStyleDefault-block::-webkit-scrollbar {\n            display: none;\n        }\n    ',
            )
        },
        E = n('ERkP'),
        _ = n.n(E),
        C = n('k/Ka'),
        x = n('PxJJ'),
        T = n('w9LO'),
        I = n('fs1G'),
        S = n('zpdM'),
        k = function (e) {
          return Object(C.a)('div', e)
        },
        M = !1,
        O =
          ((t.a = _.a.forwardRef(function (e, t) {
            var n = y.d()
            return _.a.createElement(
              O,
              v()({}, e, {
                onFocus: function (t) {
                  e.onFocus && e.onFocus(t), n('focus')
                },
                ref: t,
              }),
            )
          })),
          (function (e) {
            u()(n, e)
            var t = p()(n)
            function n() {
              var e
              a()(this, n)
              for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                m()(c()(e), '_setSelectionToStart', function () {
                  var t = e.props.editorState,
                    n = t.getCurrentContent().getFirstBlock().getKey()
                  return S.EditorState.acceptSelection(
                    t,
                    new S.SelectionState({
                      anchorKey: n,
                      anchorOffset: 0,
                      focusKey: n,
                      focusOffset: 0,
                      isBackward: !1,
                    }),
                  )
                }),
                m()(c()(e), '_setFocusToStart', function () {
                  var t = e._setSelectionToStart()
                  return S.EditorState.forceSelection(t, t.getSelection())
                }),
                m()(c()(e), '_setFocusToEnd', function () {
                  var t = e.props,
                    n = t.autoFocus,
                    r = t.editorState,
                    a = t.onChange
                  n
                    ? null == a || a(S.EditorState.moveFocusToEnd(r))
                    : null == a || a(S.EditorState.moveSelectionToEnd(r))
                }),
                m()(c()(e), '_setDraftJsStyle', function () {
                  var t = e.props.placeholderTextColor,
                    n = document.createElement('style')
                  n.innerHTML = w({ placeholderTextColor: t })
                  var r = document.head
                  r && r.insertBefore(n, r.firstChild)
                }),
                m()(c()(e), 'focus', function () {
                  e._editor && e._editor.focus()
                }),
                m()(c()(e), 'blur', function () {
                  e._editor && e._editor.blur()
                }),
                m()(c()(e), 'getValue', function () {
                  return e.props.editorState.getCurrentContent().getPlainText()
                }),
                m()(c()(e), 'getOffsetHeight', function () {
                  var t = (e._editor || {}).editor
                  return (t && t.offsetHeight) || 0
                }),
                m()(c()(e), 'clear', function () {}),
                m()(c()(e), '_setEditorRef', function (t) {
                  e._editor = t
                }),
                m()(c()(e), '_handleViewClick', function () {
                  return e.focus()
                }),
                m()(c()(e), '_onPastedFiles', function (t) {
                  var n = e.props.onFilesAdded,
                    r = []
                  return (
                    t.forEach(function (e) {
                      e instanceof File && r.push(e)
                    }),
                    r.length && (null == n ? void 0 : n(r)) ? 'handled' : 'not-handled'
                  )
                }),
                m()(c()(e), '_removeNewLines', function (e, t) {
                  return S.EditorState.push(
                    t,
                    S.Modifier.replaceText(t.getCurrentContent(), t.getSelection(), e.replace(/[\r\n]+/g, ' ')),
                    'insert-characters',
                  )
                }),
                m()(c()(e), '_removeInvalidStylesFromContentBlock', function (t) {
                  var n = e.props.pastedStylesAllowlist,
                    r = t.getCharacterList().map(function (e) {
                      return e
                        .getStyle()
                        .filter(function (e) {
                          return !(null != n && n.includes(e))
                        })
                        .reduce(function (e, t) {
                          return S.CharacterMetadata.removeStyle(e, t)
                        }, e)
                    })
                  return (null != n && n.includes(t.getType()) ? t : t.set('type', 'unstyled')).set('characterList', r)
                }),
                m()(c()(e), '_removeInvalidStyles', function (t, n) {
                  var r = e.props.blockRenderMap,
                    a = t ? Object(S.convertFromHTML)(t, void 0, r) : void 0
                  if (a) {
                    var i,
                      o =
                        null == a || null === (i = a.contentBlocks) || void 0 === i
                          ? void 0
                          : i.map(e._removeInvalidStylesFromContentBlock)
                    if (o) {
                      var l = S.ContentState.createFromBlockArray(o, null == a ? void 0 : a.entityMap)
                      return S.EditorState.push(
                        n,
                        S.Modifier.replaceWithFragment(n.getCurrentContent(), n.getSelection(), l.getBlockMap()),
                        'insert-fragment',
                      )
                    }
                  }
                  return null
                }),
                m()(c()(e), '_onPastedText', function (t, n, r) {
                  var a = e.props,
                    i = a.multiline,
                    o = a.onChange,
                    l = a.pastedStylesAllowlist
                  if (o) {
                    if (!i) return o(e._removeNewLines(t, r)), 'handled'
                    if (null != l && l.length) {
                      var c = e._removeInvalidStyles(n, r)
                      if (c) return o(c), 'handled'
                    }
                  }
                  return 'not-handled'
                }),
                m()(c()(e), '_myKeyBindingFn', function (t) {
                  var n = e.props,
                    r = n.dismissComposerCommandName,
                    a = n.sendTweetCommandName,
                    i = S.KeyBindingUtil.hasCommandModifier
                  return 13 === t.keyCode && i(t) ? a : 27 === t.keyCode ? r : Object(S.getDefaultKeyBinding)(t)
                }),
                m()(c()(e), '_onKeyCommand', function (t) {
                  var n = e.props.keyCommandHandlers,
                    r = n && n[t]
                  return r ? (r(), 'handled') : 'not-handled'
                }),
                m()(c()(e), '_onSingleLineReturn', function (t, n) {
                  var r = e.props.handleReturn
                  return null == r || r(t, n), 'handled'
                }),
                m()(c()(e), '_getContainerStyle', function () {
                  var t = e.props,
                    n = t.appTextSize,
                    r = t.maxNumberOfLines,
                    a = t.multiline,
                    i = t.numberOfLines,
                    o =
                      g.a.theme.lineHeightsPx[
                        {
                          small: 'subtext2',
                          normal: 'body',
                          large: 'headline1',
                          subtext2: 'subtext2',
                          body: 'body',
                          headline1: 'headline1',
                        }[n]
                      ]
                  return { minHeight: (a && i ? i : 1) * o, maxHeight: (a && r ? r : 1) * o }
                }),
                e
              )
            }
            return (
              o()(
                n,
                [
                  {
                    key: 'componentDidMount',
                    value: function () {
                      var e = this.props,
                        t = e.onChange,
                        n = e.positionCursorAtBeginning
                      e.positionCursorAtEnd
                        ? this._setFocusToEnd()
                        : n
                        ? null == t || t(this._setFocusToStart())
                        : this.props.autoFocus && this.focus(),
                        M || (this._setDraftJsStyle(), (M = !0))
                    },
                  },
                  {
                    key: 'componentDidCatch',
                    value: function (e) {
                      x.a.report(e, { tags: { userVisible: !0, draftJs: !0 } })
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var e,
                        t = this.props,
                        n = t.ariaActiveDescendant,
                        r = t.ariaAutocomplete,
                        a = t.ariaControls,
                        i = t.ariaLabel,
                        o = t.blockRenderMap,
                        l = t.blockRendererFn,
                        c = t.editorState,
                        s = t.handleReturn,
                        u = t.multiline,
                        d = t.onChange,
                        p = t.onFocus,
                        f = t.onKeyDown,
                        h = t.onKeyPress,
                        v = t.onKeyUp,
                        y = t.pastedStylesAllowlist,
                        w = t.placeholder,
                        E = t.spellCheck,
                        C = t.style,
                        x = t.testID
                      return _.a.createElement(
                        k,
                        {
                          className: u ? void 0 : b,
                          onClick: this._handleViewClick,
                          style: [this._getContainerStyle(), C],
                        },
                        _.a.createElement(S.Editor, {
                          ariaActiveDescendantID: n,
                          ariaAutoComplete: r,
                          ariaControls: a,
                          ariaLabel: i,
                          ariaMultiline: u,
                          blockRenderMap: o,
                          blockRendererFn: l,
                          customAttrs:
                            ((e = {}),
                            m()(e, T.a.NO_REFOCUS_ATTRIBUTE, 'true'),
                            m()(e, 'onKeyPress', h),
                            m()(e, 'onKeyUp', v),
                            e),
                          customStyleMap: L(g.a.theme),
                          editorState: c,
                          handleKeyCommand: this._onKeyCommand,
                          handlePastedFiles: this._onPastedFiles,
                          handlePastedText: this._onPastedText,
                          handleReturn: u ? s : this._onSingleLineReturn,
                          keyBindingFn: this._myKeyBindingFn,
                          onChange: d,
                          onFocus: p,
                          onKeyDown: f,
                          placeholder: w,
                          ref: this._setEditorRef,
                          spellCheck: 'false' !== E,
                          stripPastedStyles: !(u && null != y && y.length),
                          tabIndex: 0,
                          webDriverTestID: x,
                        }),
                      )
                    },
                  },
                ],
                [
                  {
                    key: 'getDerivedStateFromError',
                    value: function () {
                      return {}
                    },
                  },
                ],
              ),
              n
            )
          })(_.a.Component))
      m()(O, 'defaultProps', {
        appTextSize: 'body',
        autoFocus: !1,
        keyCommandHandlers: {},
        maxNumberOfLines: 30,
        multiline: !0,
        numberOfLines: 6,
        onFocus: I.a,
        positionCursorAtEnd: !1,
        spellCheck: 'true',
      }),
        (O.propTypes = {})
      var L = function (e) {
        return { overflow: { backgroundColor: e.colors.red200 } }
      }
    },
    nXUu: function (e, t, n) {
      'use strict'
      var r = n('ddV6'),
        a = n.n(r),
        i = (n('KOtZ'), n('7x/C'), n('ERkP')),
        o = n.n(i),
        l = n('t62R'),
        c = n('VUbk'),
        s = n.n(c),
        u = n('hHEM'),
        d = n('Tvzs'),
        p = n('LQrL'),
        f = n('zpdM'),
        m = n('sXY3'),
        h = n('fs1G'),
        v = Object(m.a)(d.e).reduce(function (e, t) {
          var n = a()(t, 2),
            r = n[0],
            i = n[1]
          return e.set(r, i)
        }, s.a)
      t.a = function (e) {
        var t = e.componentByType,
          n = e.contentState,
          r = u.a.initEditorState(n, { decorators: [p.d, p.c, p.e, p.a] }),
          a = t
            ? function (e) {
                return t[e.getType()] || null
              }
            : h.a
        return o.a.createElement(
          l.b,
          null,
          o.a.createElement(f.Editor, {
            blockRenderMap: v,
            blockRendererFn: a,
            editorState: r,
            onChange: h.a,
            readOnly: !0,
            webDriverTestID: 'longformRichTextComponent',
          }),
        )
      }
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
          return f
        }),
        n.d(t, 'a', function () {
          return m
        }),
        n.d(t, 'd', function () {
          return h
        }),
        n.d(t, 'f', function () {
          return y
        })
      var r = n('RhWx'),
        a = n.n(r),
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
        c = n('kIAd'),
        s = n('rHpw')
      function u(e, t) {
        var n,
          r = c.b.scoper.find(function (r) {
            if (-1 !== r.srcInputs.indexOf(t)) return (n = e.match(r.regexp))
          }),
          a = ''
        return n && (a = n && (1 === n.length ? n[0] : n[1])), r ? o()(o()({}, r.scope), {}, { src: t, q: a }) : null
      }
      function d(e, t) {
        var n = t.slice(0, e),
          r = t.slice(e, t.length),
          a = n.search(c.b.WordEnd),
          i = a >= 0 ? n.slice(a) : '',
          o = r.search(c.b.WordBoundary),
          l = i + r.slice(0, o)
        return l.trim() ? { start: a, end: e + o, word: l } : { start: -1, end: -1, word: '' }
      }
      function p() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function f(e) {
        var t = e.altKey,
          n = e.ctrlKey,
          r = e.metaKey
        return !(t || n || r)
      }
      function m(e, t) {
        var n = []
        e.forEach(function (e) {
          var r = t.find(function (t) {
            return t.id === e.id
          })
          r && r.data && r.data.result_context ? n.push(r) : n.push(e)
        })
        var r = n.map(function (e) {
            return e.id
          }),
          i = t.filter(function (e) {
            return r.indexOf(e.id) < 0
          })
        return [].concat(n, a()(i))
      }
      var h = Object(l.a)(function (e) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(s.a.theme.spaces.space64, ')'),
            position: 'fixed',
            top: ''.concat(e, 'px'),
            transform: [{ translate3d: '0,0,0' }],
          }
        }),
        v = 0,
        y = function () {
          return 'typeaheadDropdown-'.concat((v += 1))
        }
    },
    'p+r5': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return W
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
        f = n('5Yy7'),
        m = n.n(f),
        h = n('2VqO'),
        v = n.n(h),
        y = n('KEM+'),
        g = n.n(y),
        b = (n('2G9S'), n('ERkP')),
        w = n.n(b),
        E = n('38/B'),
        _ = n('t62R'),
        C = n('/yvb'),
        x = n('piX5'),
        T = n('3XMw'),
        I = n.n(T),
        S = n('tI3i'),
        k = n.n(S),
        M = n('oQhu'),
        O = n('rHpw'),
        L = n('aITJ'),
        P = n('MWbm'),
        R = n('n5fo'),
        A = n('5emT'),
        F = n('Oib4'),
        B = n('WtWS'),
        D = n('ioan'),
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
        z = function (e) {
          return e.length
        },
        H = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : z
          return t(e)
        },
        K = I.a.de540c32,
        j = I.a.b4abfdb3,
        W = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e) {
            var r
            c()(this, n),
              (r = t.call(this, e)),
              g()(p()(r), '_blurOnBackspaceKeyUpForKaiOS', !1),
              g()(p()(r), '_isLabelLarge', function () {
                var e = r.state,
                  t = e.actualCount,
                  n = e.isFocused
                return !t && !n
              }),
              g()(
                p()(r),
                '_getTextInputStyle',
                Object(M.a)(function (e) {
                  return [G.root, !e && G.disabled]
                }),
              ),
              g()(p()(r), '_getTextInputType', function () {
                var e = r.props,
                  t = e.showPasswordVisibilityIcon,
                  n = e.type,
                  a = r.state.isPasswordRevealed
                return 'password' === n && t ? (a ? 'text' : 'password') : n
              }),
              g()(p()(r), '_calculateLength', function (e) {
                return H(e, r.props.calculateLength)
              }),
              g()(p()(r), '_shouldRenderDisplayCount', function () {
                var e = r.state.isFocused,
                  t = r._isFormInvalid()
                return Boolean((e || t) && r._getMaxDisplayCount())
              }),
              g()(p()(r), '_isInvalidNumber', function () {
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
              g()(p()(r), '_getActualCount', function (e) {
                var t = e.length
                return r._isInvalidNumber() && (t = 1), t
              }),
              g()(p()(r), '_handleBlur', function (e) {
                var t = r.props.onBlur,
                  n = e.currentTarget.value,
                  a = r._calculateLength(n),
                  i = r._getActualCount(n)
                r.setState({ isFocused: !1, displayCount: a, actualCount: i }), t && t(e)
              }),
              g()(p()(r), '_handleChange', function (e) {
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
              g()(p()(r), '_handleFocus', function () {
                var e = r.props.onFocus
                r.setState({ isFocused: !0 }), e && e()
              }),
              g()(p()(r), '_handleKeyPress', function (e) {
                var t = r.props,
                  n = t.multiline,
                  a = t.onKeyPress,
                  i = t.onSubmitEditing
                a && a(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || n || !i || (e.preventDefault(), i(e))
              }),
              g()(p()(r), '_handleKeyDown', function (e) {
                var t = r.props.onKeyDown,
                  n = 0 === r.state.displayCount
                L.b.isKaiOS() && 'Backspace' === e.key && n ? (r._blurOnBackspaceKeyUpForKaiOS = n) : t && t(e)
              }),
              g()(p()(r), '_handleKeyUp', function (e) {
                var t = r.props.onKeyUp
                L.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  r._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), r.blur()),
                  t && t(e)
              }),
              g()(p()(r), '_handlePasswordVisibilityClick', function (e) {
                r.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              g()(p()(r), '_setTextInputRef', function (e) {
                r._textInput = e
              }),
              g()(p()(r), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  n = e.maxLength,
                  r = e.onChange,
                  a = e.validLength,
                  i = !!r,
                  o = 'string' == typeof e.value,
                  l = 'string' == typeof t
                k()(
                  !(!l && o && !i),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  k()(!(n && a && a > n), 'Max length should be equal or greater than valid length.'),
                  k()(
                    !((void 0 !== n && n <= 0) || (void 0 !== a && a <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              g()(p()(r), '_exceedsValidLength', function (e) {
                var t = r._getMaxDisplayCount()
                return !!t && e > t
              }),
              g()(p()(r), '_getMaxDisplayCount', function () {
                return r.props.validLength || r.props.maxLength
              }),
              g()(p()(r), '_getAdjustedMaxLength', function () {
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
                actualCount: z(i),
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
                      P.a,
                      { style: [U.root, i] },
                      w.a.createElement(
                        P.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            x.a.border,
                            U.textInputFormStyle,
                            l && x.a.invalidBorderColor,
                            o && l && x.a.focusedBorderInvalid,
                            o && !l && x.a.focusedBorderValid,
                            !n && x.a.disabled,
                          ],
                        },
                        w.a.createElement(
                          P.a,
                          { style: U.textInputFormWrapper },
                          w.a.createElement(
                            P.a,
                            { style: U.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      w.a.createElement(
                        P.a,
                        { style: [U.sidePadding, U.underTextInputForm] },
                        w.a.createElement(
                          P.a,
                          { style: U.subtextWrapper },
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
                      _.b,
                      {
                        color: r ? 'gray700' : n,
                        numberOfLines: 1,
                        size: r ? 'headline1' : 'subtext2',
                        style: [
                          U.textInputHeaderItem,
                          r && U.placeholderText,
                          !E.a.reducedMotionEnabled && U.transition,
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
                      i = (e.style, e.type, e.validLength, o()(e, V))
                    return w.a.createElement(
                      P.a,
                      { style: G.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      w.a.createElement(
                        _.b,
                        { size: 'headline1', style: G.wrapper },
                        w.a.createElement(
                          D.a,
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
                          P.a,
                          { style: U.passwordVisibilityIconContainer },
                          w.a.createElement(C.a, {
                            accessibilityLabel: r ? j : K,
                            focusable: !0,
                            hoverLabel: { label: r ? j : K },
                            icon: r ? w.a.createElement(R.a, null) : w.a.createElement(A.a, null),
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
                      P.a,
                      { accessibilityLiveRegion: 'polite' },
                      w.a.createElement(
                        _.b,
                        { color: 'gray700', size: 'subtext2', style: U.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return w.a.createElement(
                      P.a,
                      { accessibilityLiveRegion: 'assertive' },
                      w.a.createElement(
                        _.b,
                        { color: 'red500', size: 'subtext2', style: U.subtext },
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
                      r = t && I.a.ia24dc8c(t),
                      a = I.a.ia24dc8c(e)
                    return w.a.createElement(
                      P.a,
                      { accessibilityLiveRegion: 'polite', style: [U.textInputHeaderItem, U.displayCount] },
                      w.a.createElement(
                        _.b,
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
                      n = [U.icon, t && U.focusedIcon]
                    return e && w.a.createElement(e, { style: n })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? w.a.createElement(F.a, { style: [U.validationIcon, x.a.invalidColor] })
                      : w.a.createElement(B.a, { style: [U.validationIcon, x.a.validColor] })
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
                      a = 'string' == typeof r ? H(r, n) : 0
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
      g()(W, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (W.propTypes = {})
      var G = O.a.create(function (e) {
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
        U = O.a.create(function (e) {
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
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        p = n.n(d),
        f = n('KEM+'),
        m = n.n(f),
        h = (n('2G9S'), n('ERkP')),
        v = n.n(h),
        y = n('HPNB'),
        g = n('9HgX'),
        b = n('3XMw'),
        w = n.n(b),
        E = n('LCtV'),
        _ = n('eyty'),
        C = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        x = n('RuTB'),
        T = Object(C.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(8), n.e(178)])
              .then(n.bind(null, 'EOJ2'))
              .then(function (e) {
                return { default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ }
              })
          },
          renderPlaceholder: function (e, t) {
            return v.a.createElement(x.a, { hasError: e, onRetry: t })
          },
        }),
        I = n('yiKp'),
        S = n.n(I),
        k = n('m3Bd'),
        M = n.n(k),
        O = (n('z84I'), n('k/Ka')),
        L = n('eXeu'),
        P = n('iOGT'),
        R = ['children', 'dataSaverMode', 'getVideoRef', 'style', 'variants'],
        A = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(c()(e), '_setVideoRef', function (t) {
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
                    r = (e.getVideoRef, e.style),
                    a = e.variants,
                    i = M()(e, R),
                    o = Object(P.b)(a, n ? P.a.MEDIUM : P.a.HIGH) || [],
                    l = Object(L.f)(
                      o.map(function (e) {
                        return { src: e.url, type: e.content_type }
                      }),
                    )
                  return Object(O.a)(
                    'video',
                    S()(
                      S()({}, i),
                      {},
                      {
                        children: [
                          l.map(function (e) {
                            return v.a.createElement('source', { key: e.src, src: e.src, type: e.type })
                          }),
                          t,
                        ],
                        ref: this._setVideoRef,
                        style: r,
                      },
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      m()(A, 'defaultProps', { dataSaverMode: !1, variants: [] })
      var F = n('62wY'),
        B = n('sjK1'),
        D = n('v6aA'),
        V = n('cHvH'),
        z = n('mXq/'),
        H = n('/yvb'),
        K = n('a6qo'),
        j = n('rHpw'),
        W = n('hOZg'),
        G = n('GCOQ'),
        U = n('tuke'),
        N = n('U+bB'),
        X = n('MWbm'),
        J = n('+/sI'),
        Y = w.a.gd80afba,
        q = w.a.j322caee,
        Q = w.a.abd845fd,
        Z = w.a.df1b0707,
        $ = w.a.cd959e5b,
        ee = w.a.e68b09b4,
        te = w.a.add55c97,
        ne = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(c()(e), 'state', { isVideoPaused: !0, playGif: !1 }),
              m()(c()(e), '_handleGifClick', function () {
                e.setState({ playGif: !e.state.playGif })
              }),
              m()(c()(e), '_handleMediaPreviewLayout', function (t) {
                var n = e.props,
                  r = n.mediaItem,
                  a = n.resizeIfNeeded,
                  i = r.mediaFile || r.externalMediaDetails
                if (i) {
                  var o = t.nativeEvent.layout,
                    l = o.height,
                    c = o.width,
                    s = i.height,
                    u = i.width / s
                  Math.abs(u - c / l) > 0.05 &&
                    e._mediaContainer &&
                    ('width' === a
                      ? e._mediaContainer.setNativeProps({ style: { width: l * u } })
                      : 'height' === a && e._mediaContainer.setNativeProps({ style: { height: c / u } }))
                }
              }),
              m()(c()(e), '_handleVideoOnPlay', function (t) {
                e.setState({ isVideoPaused: !1 })
              }),
              m()(c()(e), '_handleVideoOnPause', function (t) {
                e.setState({ isVideoPaused: !0 })
              }),
              m()(c()(e), '_setMediaContainerRef', function (t) {
                e._mediaContainer = t
              }),
              m()(c()(e), '_setVideoRef', function (t) {
                e._video = t
              }),
              m()(c()(e), 'playVideo', function () {
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
              m()(c()(e), 'pauseVideo', function () {
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
                    r = n.accessibilityLabel,
                    a = n.accessibilityRole,
                    i = n.enableGif,
                    o = n.mediaItem,
                    l = n.onEdit,
                    c = n.onEditSensitiveWarning,
                    s = n.onRemove,
                    u = n.style,
                    d = n.withAltTextLabel,
                    p = n.withCloseButton,
                    f = n.withEditButton,
                    m = n.withEditIcon,
                    h = n.withEditSensitiveWarningButton,
                    b = this.state.playGif,
                    w = o.externalMediaDetails && o.externalMediaDetails.mediaType === g.a,
                    E = w || (i && o.mediaFile && o.mediaFile.isGif),
                    _ = !(null === (e = o.mediaFile) || void 0 === e || !e.isVideo)
                  return v.a.createElement(V.a, null, function (e) {
                    var n = e.windowWidth,
                      i = void 0 !== m ? m : !y.a.isTwoColumnLayout(n)
                    return v.a.createElement(
                      X.a,
                      {
                        accessibilityLabel: r || te,
                        accessibilityRole: a,
                        onLayout: t._handleMediaPreviewLayout,
                        ref: t._setMediaContainerRef,
                        style: [u, re.cursor, w && re.gifPlayButton],
                      },
                      t._renderPreview(),
                      w &&
                        !b &&
                        v.a.createElement(z.a, { accessibilityLabel: Z, onPress: t._handleGifClick, size: 'small' }),
                      p
                        ? v.a.createElement(H.a, {
                            accessibilityLabel: $,
                            hoverLabel: { label: ee },
                            icon: v.a.createElement(W.a, null),
                            onPress: s,
                            size: 'small',
                            style: re.close,
                            type: 'onMediaDominantColorFilled',
                          })
                        : null,
                      E ? v.a.createElement(J.c, { type: J.a }) : null,
                      d && !_ ? v.a.createElement(K.a, { align: 'left', altLabel: r }) : null,
                      f
                        ? v.a.createElement(
                            X.a,
                            { style: [re.editMedia, _ ? re.editVideo : re.editImage] },
                            h
                              ? v.a.createElement(H.a, {
                                  accessibilityLabel: q,
                                  icon: v.a.createElement(G.a, { style: re.editSensitiveWarningIcon }),
                                  onPress: c,
                                  size: 'small',
                                  style: re.editSensitiveWarningButton,
                                  type: 'onMediaDominantColorFilled',
                                })
                              : null,
                            v.a.createElement(
                              H.a,
                              {
                                accessibilityLabel: Y,
                                icon: i ? v.a.createElement(U.a, null) : void 0,
                                onPress: l,
                                size: i ? 'xSmall' : 'small',
                                type: 'onMediaDominantColorFilled',
                              },
                              i ? void 0 : Q,
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
                      r = t.externalMediaDetails.stillMediaUrl
                    return this._renderGifPreview(n, r)
                  }
                  return null !== (e = t.mediaFile) && void 0 !== e && e.isVideo
                    ? this._renderVideoPreview(t.mediaFile.type, t.mediaFile.url, t.id, t.mediaFile)
                    : v.a.createElement(X.a, { style: j.a.absoluteFill }, this._renderImagePreview())
                },
              },
              {
                key: '_renderGifPreview',
                value: function (e, t) {
                  var n = { uri: this.state.playGif ? e : t }
                  return v.a.createElement(
                    X.a,
                    { onClick: this._handleGifClick, style: j.a.absoluteFill },
                    v.a.createElement(N.a, { resizeMode: 'cover', source: n, style: re.video }),
                  )
                },
              },
              {
                key: '_renderImagePreview',
                value: function () {
                  var e = this.props,
                    t = e.borderRadius,
                    n = e.enableGif,
                    r = e.imageResizeMode,
                    a = e.mediaItem,
                    i = e.onClick
                  return v.a.createElement(E.b, {
                    borderRadius: t,
                    enableGif: n,
                    mediaItem: a,
                    onClick: i,
                    resizeMode: r,
                  })
                },
              },
              {
                key: '_renderVideoPreview',
                value: function (e, t, n, r) {
                  var a
                  this._configurableVideoPlayerEnabled = this.context.featureSwitches.isTrue(
                    'responsive_web_composer_configurable_video_player_enabled',
                  )
                  var i = this.props.mediaItem,
                    o = null === (a = i.mediaMetadata) || void 0 === a ? void 0 : a.subtitles
                  if (this._configurableVideoPlayerEnabled && r instanceof B.c) {
                    var l = Object(_.h)(r.fileHandle) ? [{ src: t, type: e }] : [],
                      c = ''.concat(n)
                    return v.a.createElement(T, {
                      mediaFile: r,
                      mediaId: c,
                      subtitles: o,
                      trimData: null == i ? void 0 : i.trimData,
                      variants: l,
                    })
                  }
                  var s,
                    u = Object(_.h)(r.fileHandle) ? [{ content_type: e, url: t }] : [],
                    d =
                      (null == o || null === (s = o.upload) || void 0 === s ? void 0 : s.mediaFile) instanceof F.b
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
                      poster: r instanceof B.c ? r.thumbnail : '',
                      style: re.video,
                      variants: u,
                    },
                    o && d
                      ? v.a.createElement('track', {
                          default: !0,
                          kind: 'subtitles',
                          label: o.displayName,
                          src: d,
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
      m()(ne, 'contextType', D.a),
        m()(ne, 'defaultProps', {
          enableGif: !0,
          withCloseButton: !0,
          withAltTextLabel: !1,
          withEditButton: !1,
          withEditSensitiveWarningButton: !1,
        })
      var re = j.a.create(function (e) {
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
          return y
        }),
        n.d(t, 'TwitterArticleListScreen', function () {
          return g
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
        d = n('Cp2k'),
        p = n('M2mT'),
        f = n('c6pJ'),
        m = n('MWbm'),
        h = n('/yvb'),
        v = n('rHpw'),
        y = 'Twitter Articles',
        g = function (e) {
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
          var u = a.a.createElement(h.a, {
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
                { rightControl: u, screenType: 'secondaryRoot', title: y },
                a.a.createElement(
                  m.a,
                  { style: b.container },
                  a.a.createElement(f.a, { linkToEditScreen: !0, publishedOnly: !1, userId: s }),
                ),
              )
            : null
        },
        b = v.a.create(function (e) {
          return { container: { backgroundColor: e.colors.cellBackground, flexGrow: 1 } }
        }),
        w = a.a.createElement(d.a, null),
        E = u(g)
      t.default = E
    },
    tuke: function (e, t, n) {
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
                d: 'M21.592 5.576c.877-.967.882-2.298.006-3.174-.877-.877-2.208-.87-3.174.006 0 0-.003 0-.004.002l-.006.006-.005.004s-.002 0-.002.002L8.398 11.27c-1.716-.214-3.424.31-4.534 1.42-3.872 3.874-1.523 9.616-1.422 9.858.1.24.32.41.577.45.037.007.075.01.113.01.218 0 .428-.095.57-.265 1.83-2.15 3.043-2.023 4.328-1.89 1.164.122 2.477.258 3.834-1.282.975-1.106 1.302-2.585.922-4.03l8.792-9.948h.002l.004-.006.006-.006.002-.004zm-1.055-2.113c.305.305.28.74-.06 1.11-.003.003-.004.007-.006.01 0 0-.003 0-.004.003l-5.662 6.406-1.796-1.796 6.406-5.662c.002 0 .002-.003.004-.005.002-.003.006-.004.008-.006.37-.34.807-.365 1.11-.06zm-8.62 10.797L9.74 12.084l2.142-1.894 1.927 1.927-1.894 2.143zm-1.178 4.32c-.848.96-1.488.895-2.552.78-1.27-.13-2.808-.293-4.722 1.463-.415-1.673-.784-4.83 1.457-7.072.807-.805 2.086-1.168 3.377-.983l2.977 2.976c.333 1.03.15 2.057-.538 2.836z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    ude7: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      n('7x/C'), n('JtPf')
      var r = n('A0bJ'),
        a = n('hJBK'),
        i = n('1auM'),
        o = 1,
        l = 2,
        c = 3,
        s = function (e) {
          if (Object(i.b)(e)) {
            if (e.isGif) {
              var t = e.height,
                n = e.img,
                s = e.orientation,
                u = e.width
              return Object(a.b)(n, u, t, s).then(
                function (e) {
                  return Object(a.a)(e)
                },
                function (e) {
                  throw new r.a('Gif preview could not be generated', c)
                },
              )
            }
            var d = new r.a('The provided image must be a gif', l)
            return Promise.reject(d)
          }
          var p = new r.a('The provided file is not a valid image', o)
          return Promise.reject(p)
        }
    },
    uy10: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'emptyStateHeaderLabel', function () {
          return p
        }),
        n.d(t, 'emptyStateMessage', function () {
          return f
        }),
        n.d(t, 'emptyStateButtonText', function () {
          return m
        }),
        n.d(t, 'errorToastText', function () {
          return h
        }),
        n.d(t, 'TwitterArticleComposerEmptyState', function () {
          return v
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
        f = 'Choose one from your existing drafts, or start a new one.',
        m = 'New draft',
        h = 'There was an error creating a new draft',
        v = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.createTwitterArticle,
            r = Object(s.f)()
          return a.a.createElement(u.a, {
            buttonLink: '/i/twitter-article-composer',
            buttonText: m,
            header: p,
            message: f,
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
            style: y.root,
          })
        },
        y = d.a.create(function (e) {
          return {
            root: { alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: e.colors.cellBackground },
          }
        }),
        g = c(v)
      t.default = g
    },
    wpu3: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      }),
        n.d(t, 'b', function () {
          return v
        }),
        n.d(t, 'c', function () {
          return y
        }),
        n.d(t, 'd', function () {
          return g
        })
      var r = n('RhWx'),
        a = n.n(r),
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
        c = n('1auM'),
        s = n('kIAd'),
        u = n('VAyw'),
        d = n('/Ikv'),
        p = n('s1N3'),
        f = n('lnti'),
        m = function (e) {
          var t,
            n = e.excludeReplyUser,
            r = e.inReplyToStatus,
            i = e.loggedInUserId,
            l = r.retweeted_status,
            c = l || r,
            s = c.entities,
            d = c.unmentioned_user_ids,
            m = c.user,
            v = l ? l.user : {},
            y = l ? r.user : {},
            g = (null == s ? void 0 : s.user_mentions) || [],
            b = u.a.mergeTaggedUsers((null == s ? void 0 : s.media) || []),
            w = h(l || r) || {},
            E = ((t = {}), o()(t, v.id_str, v), o()(t, y.id_str, y), o()(t, m.id_str, m), o()(t, w.id_str, w), t)
          g.forEach(function (e) {
            E[e.id_str] = e
          }),
            b.forEach(function (e) {
              var t = e.name,
                n = e.screen_name,
                r = e.user_id
              E[r] = { id_str: r, name: t, screen_name: n }
            })
          var _ = function (e) {
              var t = null == d ? void 0 : d.includes(e.id_str),
                n = e.id_str === m.id_str
              return !t || n ? [e.id_str] : []
            },
            C = Object(p.a)(
              Object(f.a)(
                [].concat(
                  a()(_(v)),
                  a()(_(y)),
                  [m.id_str],
                  a()(
                    g.flatMap(function (e) {
                      return _(e)
                    }),
                  ),
                  a()(
                    b.map(function (e) {
                      return e.user_id
                    }),
                  ),
                ),
              ),
            ).filter(function (e) {
              return e !== i
            }),
            x = i && m.id_str === i ? [i].concat(a()(C)) : C
          return (
            n &&
              (x = x.filter(function (e) {
                return e !== m.id_str
              })),
            x.map(function (e) {
              return E[e]
            })
          )
        },
        h = function (e) {
          var t = e.card,
            n = null
          if (t) {
            var r = d.a.getBindingValue(t.binding_values, 'site')
            r && t.users && (n = t.users[r.id_str])
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
              r =
                !n &&
                e.some(function (e) {
                  return e.mediaFile && e.mediaFile.isGif
                }),
              a = e.some(function (e) {
                return e.mediaFile && !(e.mediaFile instanceof c.a) && e.mediaFile.isVideo
              })
            if (r || n || a) return 1 === e.length
            var i = e.length <= t,
              o = e.every(function (e) {
                return e.mediaFile && e.mediaFile.isImage
              })
            return i && o
          }
        },
        y = v({ maxNumberOfPhotos: 4 }),
        g = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.split(s.b.WordBoundary)
          return (
            t && n.pop(),
            !!n.find(function (e) {
              var t = Object(l.e)(e, 'compose')
              return t && 'users' === t.result_type
            })
          )
        }
    },
  },
])
//# sourceMappingURL=WIPED
