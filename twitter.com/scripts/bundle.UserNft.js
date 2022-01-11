;(window.webpackJsonp = window.webpackJsonp || []).push([
  [104],
  {
    '++ci': function (e, a, n) {
      'use strict'
      n.r(a)
      var l = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'NftDescription_openseaNftMetadata',
        selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null }],
        type: 'OpenseaNFTMetadata',
        abstractKey: null,
        hash: 'cdefa7c1e3e5ea2b06f5a3ebf4c77640',
      }
      a.default = l
    },
    '1Oiz': function (e, a, n) {
      'use strict'
      n.r(a)
      var l,
        t = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'NftFooter_smartContract',
          selections: [
            { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
            {
              kind: 'InlineFragment',
              selections: (l = [{ alias: null, args: null, kind: 'ScalarField', name: 'address', storageKey: null }]),
              type: 'ERC721',
              abstractKey: null,
            },
            { kind: 'InlineFragment', selections: l, type: 'ERC1155', abstractKey: null },
          ],
          type: 'SmartContract',
          abstractKey: '__isSmartContract',
        }
      ;(t.hash = 'd6b701feecbeb528e41c1ca6ab7e67f7'), (a.default = t)
    },
    '21nk': function (e, a, n) {
      'use strict'
      var l = n('I9iR'),
        t = n('3KVO'),
        r = n('yLYC'),
        i = n('Ud88'),
        s = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        o = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        u = o.fetchQueryDeduped,
        c = o.fetchQuery
      e.exports = function (e, a, n) {
        s()
        var o,
          d = i(),
          m = a.fetchKey,
          f = a.fetchPolicy,
          g = a.source,
          p = a.variables,
          y = a.networkCacheConfig,
          k = r(e, p, y)
        if ('PreloadedQuery_DEPRECATED' === a.kind)
          k.request.node.params.name !== a.name && l(!1),
            (o = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: m,
              fetchObservable: u(d, k.request.identifier, function () {
                return d === a.environment && null != g
                  ? d.executeWithSource({ operation: k, source: g })
                  : d.execute({ operation: k })
              }),
              fetchPolicy: f,
              query: k,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var _ = c(d, k)
          o = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != g && d === a.environment ? g.ifEmpty(_) : (a.environment, _),
            fetchKey: m,
            fetchPolicy: f,
            query: k,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return t(o)
      }
    },
    '23An': function (e, a, n) {
      'use strict'
      var l = n('ERkP'),
        t = l.useEffect,
        r = l.useRef
      e.exports = function () {
        var e = r(!0)
        return (
          t(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1
              }
            )
          }, []),
          e
        )
      }
    },
    '2DRG': function (e, a, n) {
      'use strict'
      n.r(a),
        n.d(a, 'userNftContainerQuery', function () {
          return sa
        }),
        n.d(a, 'UserNftScreenContainer', function () {
          return ua
        })
      var l,
        t = n('ERkP'),
        r = n('GOQE'),
        i = (n('enFi'), n('rZeG')),
        s = n('yoO3'),
        o = n('5FtR'),
        u = n('kGix'),
        c = n('7JQg'),
        d = n('Ty5D'),
        m = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        f = n.n(m),
        g = n('ddV6'),
        p = n.n(g),
        y = (n('z84I'), n('ho0z'), n('i4Oy')),
        k = n('v//M'),
        _ = n('3XMw'),
        v = n.n(_),
        b = n('2doW'),
        F = n('UPvq'),
        h = (n('uFXj'), n('t62R')),
        E = n('pjBI'),
        K = n('rHpw'),
        S = n('jAXQ'),
        C = n.n(S),
        N = n('U+bB'),
        T = n('MWbm'),
        w = v.a.e83b141e,
        D = void 0 !== l ? l : (l = n('PfIX')),
        O = function (e) {
          var a,
            n,
            l,
            r,
            i,
            s = e.color,
            o = void 0 === s ? 'normal' : s,
            u = e.isCondensed,
            c = e.openseaNftMetadataData,
            d = C()(D, c)
          if (
            !(
              (null != d && null !== (a = d.collection) && void 0 !== a && a.name) ||
              (null != d && null !== (n = d.collection) && void 0 !== n && n.metadata)
            ) ||
            'OpenseaCollectionMetadata' !==
              (null == d || null === (l = d.collection) || void 0 === l || null === (r = l.metadata) || void 0 === r
                ? void 0
                : r.__typename)
          )
            return null
          var m,
            f,
            g = d.collection.metadata,
            p = g.image_url,
            y = g.verified,
            k = u || !y,
            _ = k ? 'subtext1' : 'body',
            b = k ? M.collectionImageInline : M.collectionImage,
            F =
              ((m = null === (i = d.collection) || void 0 === i ? void 0 : i.name),
              (f = d.creator_username),
              m && f
                ? t.createElement(
                    h.b,
                    { color: o, size: _, weight: 'bold' },
                    t.createElement(v.a.I18NFormatMessage, { $i18n: 'fbe06ae0' }, m, f),
                  )
                : m
                ? t.createElement(h.b, { color: o, size: _ }, m)
                : null)
          return t.createElement(
            T.a,
            { style: M.collectionTitle },
            p && t.createElement(N.a, { alt: '', source: p, style: b }),
            t.createElement(
              T.a,
              null,
              k
                ? t.createElement(E.a, { color: o }, F, y ? t.createElement(h.b, { color: o, size: _ }, w) : null)
                : t.createElement(t.Fragment, null, F, y ? t.createElement(h.b, { color: 'gray700' }, w) : null),
            ),
          )
        },
        M = K.a.create(function (e) {
          return {
            collectionImage: {
              height: e.spaces.space40,
              width: e.spaces.space40,
              borderRadius: e.borderRadii.medium,
              marginRight: e.spaces.space12,
            },
            collectionImageInline: {
              height: e.spaces.space20,
              width: e.spaces.space20,
              borderRadius: e.borderRadii.small,
              marginRight: e.spaces.space8,
            },
            collectionTitle: { display: 'flex', flexDirection: 'row', marginBottom: e.spaces.space12 },
          }
        }),
        L = n('iyiT'),
        P = n('Wc+h')
      function R(e) {
        var a = e.text
        return t.createElement(h.b, { size: 'headline2', style: x.heading, weight: 'bold' }, a)
      }
      var x = K.a.create(function (e) {
          return { heading: { marginTop: e.spaces.space24, marginBottom: e.spaces.space12 } }
        }),
        I =
          (n('2G9S'),
          function (e) {
            if (e.length > 11) {
              var a = e.substring(0, 6),
                n = e.substring(e.length - 4)
              return ''.concat(a, '...').concat(n)
            }
            return e
          }),
        A = n('Irs7')
      function Q(e) {
        var a = e.children
        return t.createElement(T.a, { style: G.list }, a)
      }
      function U(e) {
        var a = e.children
        return t.createElement(T.a, { style: G.item }, a)
      }
      function j(e) {
        var a = e.children,
          n = e.style
        return t.createElement(h.b, { style: [n, G.itemTitle] }, a)
      }
      var B,
        W,
        G = K.a.create(function (e) {
          return {
            list: { display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' },
            item: { width: '40%', marginBottom: e.spaces.space16 },
            itemTitle: { color: e.colors.gray700 },
          }
        }),
        q = v.a.dcbace0b,
        z = v.a.d4741cb3,
        H = v.a.b748db08,
        V = v.a.accae48c,
        Y = v.a.h8fe11ab,
        Z = void 0 !== B ? B : (B = n('EPqq')),
        X = void 0 !== W ? W : (W = n('EWGL')),
        J = function (e) {
          var a = Object(A.b)(),
            n = C()(Z, e.nft),
            l = C()(X, e.smartContract),
            r =
              'ERC721' === (null == l ? void 0 : l.__typename) || 'ERC1155' === (null == l ? void 0 : l.__typename)
                ? l
                : void 0
          return r
            ? t.createElement(
                T.a,
                null,
                t.createElement(R, { text: q }),
                t.createElement(
                  Q,
                  null,
                  t.createElement(
                    U,
                    null,
                    t.createElement(j, null, H),
                    t.createElement(
                      h.b,
                      {
                        color: 'normal',
                        link: 'https://etherscan.io/address/'.concat(r.address),
                        onPress: function () {
                          a.scribe({ component: 'detail', element: 'etherscan_link', action: 'click' })
                        },
                        weight: 'medium',
                      },
                      I(r.address),
                      t.createElement(P.a, null),
                    ),
                  ),
                  t.createElement(
                    U,
                    null,
                    t.createElement(j, null, V),
                    t.createElement(h.b, { weight: 'medium' }, I(n.token_id)),
                  ),
                  t.createElement(
                    U,
                    null,
                    t.createElement(j, null, z),
                    t.createElement(h.b, { weight: 'medium' }, r.network),
                  ),
                  t.createElement(
                    U,
                    null,
                    t.createElement(j, null, Y),
                    t.createElement(h.b, { weight: 'medium' }, r.__typename),
                  ),
                ),
              )
            : null
        },
        $ = (n('jQ/y'), n('hBvt'), v.a.ffd9cfe6)
      function ee(e) {
        var a = e.onPress
        return t.createElement(h.b, { color: 'link', onPress: a, style: fe.link, weight: 'bold' }, $)
      }
      var ae,
        ne,
        le,
        te,
        re,
        ie,
        se,
        oe,
        ue,
        ce,
        de,
        me,
        fe = K.a.create(function (e) {
          return { link: { marginVertical: e.spaces.space12 } }
        }),
        ge = v.a.ddf0ba7e,
        pe = void 0 !== ae ? ae : (ae = n('rZgY')),
        ye = function (e) {
          var a,
            n,
            l,
            r,
            i = C()(pe, e.openseaNftMetadataData),
            s = t.useState(!1),
            o = p()(s, 2),
            u = o[0],
            c = o[1],
            d = t.useState(!1),
            m = p()(d, 2),
            f = m[0],
            g = m[1]
          if (
            !(
              (null != i && null !== (a = i.collection) && void 0 !== a && a.name) ||
              (null != i && null !== (n = i.collection) && void 0 !== n && n.metadata)
            ) ||
            'OpenseaCollectionMetadata' !==
              (null == i || null === (l = i.collection) || void 0 === l || null === (r = l.metadata) || void 0 === r
                ? void 0
                : r.__typename)
          )
            return null
          var y = i.collection.metadata.description
          return t.createElement(
            T.a,
            null,
            t.createElement(R, { text: ge }),
            t.createElement(O, { openseaNftMetadataData: i }),
            y ? t.createElement(h.b, { getTextOverflow: c, numberOfLines: f ? void 0 : 4 }, y) : null,
            y && u && !f
              ? t.createElement(ee, {
                  onPress: function () {
                    g(!f)
                  },
                })
              : null,
          )
        },
        ke = v.a.e6aa52a9,
        _e = void 0 !== ne ? ne : (ne = n('Gaii')),
        ve = void 0 !== le ? le : (le = n('6o1g')),
        be = function (e) {
          var a = Object(A.b)(),
            n = C()(_e, e.openseaNftMetadataData),
            l = C()(ve, e.smartContractData),
            r = n.creator_address,
            i = n.creator_username,
            s =
              'ERC721' === (null == l ? void 0 : l.__typename) || 'ERC1155' === (null == l ? void 0 : l.__typename)
                ? null == l
                  ? void 0
                  : l.network
                : '',
            o = i ? 'https://opensea.io/'.concat(i) : r ? 'https://opensea.io/'.concat(r) : ''
          return r || (i && s)
            ? t.createElement(
                T.a,
                null,
                t.createElement(R, { text: ke }),
                r
                  ? t.createElement(
                      h.b,
                      {
                        color: 'normal',
                        link: o,
                        onPress: function () {
                          a.scribe({ component: 'detail', element: 'opensea_profile_link', action: 'click' })
                        },
                        weight: 'bold',
                      },
                      I(r),
                      o ? t.createElement(P.a, null) : null,
                    )
                  : null,
                s && i
                  ? t.createElement(E.a, null, t.createElement(h.b, null, i), t.createElement(h.b, null, s))
                  : null,
              )
            : null
        },
        Fe = v.a.e36287c6,
        he = function (e) {
          var a = C()(void 0 !== te ? te : (te = n('++ci')), e.openseaNftMetadataData),
            l = t.useState(!1),
            r = p()(l, 2),
            i = r[0],
            s = r[1],
            o = t.useState(!1),
            u = p()(o, 2),
            c = u[0],
            d = u[1]
          return null != a && a.description
            ? t.createElement(
                T.a,
                null,
                t.createElement(R, { text: Fe }),
                t.createElement(
                  h.b,
                  { getTextOverflow: s, numberOfLines: c ? void 0 : 4 },
                  null == a ? void 0 : a.description,
                ),
                i && !c
                  ? t.createElement(ee, {
                      onPress: function () {
                        d(!c)
                      },
                    })
                  : null,
              )
            : null
        },
        Ee = v.a.eb023c93,
        Ke = v.a.ad5dfe8f,
        Se = v.a.hb7d1bb4,
        Ce = v.a.i859a9d3,
        Ne = void 0 !== re ? re : (re = n('R+uT')),
        Te = void 0 !== ie ? ie : (ie = n('1Oiz')),
        we = function (e) {
          var a = Object(A.b)(),
            n = t.useState(!1),
            l = p()(n, 2),
            r = l[0],
            i = l[1],
            s = t.useState(!1),
            o = p()(s, 2),
            u = o[0],
            c = o[1],
            d = C()(Ne, e.nft),
            m = C()(Te, e.smartContract),
            f =
              'ERC721' === (null == m ? void 0 : m.__typename) || 'ERC1155' === (null == m ? void 0 : m.__typename)
                ? m
                : void 0,
            g =
              null != f && f.address && d.token_id
                ? 'https://opensea.io/assets/'.concat(f.address, '/').concat(d.token_id)
                : 'https://opensea.io/'
          return t.createElement(
            T.a,
            null,
            t.createElement(R, { text: Ee }),
            t.createElement(h.b, { getTextOverflow: i, numberOfLines: u ? void 0 : 4 }, Ke),
            t.createElement(
              h.b,
              {
                link: 'https://help.twitter.com/en/using-twitter/twitter-blue-labs#nft',
                style: De.helpLink,
                weight: 'bold',
              },
              Ce,
            ),
            r && !u
              ? t.createElement(ee, {
                  onPress: function () {
                    c(!u)
                  },
                })
              : null,
            t.createElement(
              T.a,
              { style: De.topBorder },
              t.createElement(
                h.b,
                {
                  align: 'center',
                  color: 'normal',
                  link: g,
                  onPress: function () {
                    a.scribe({ component: 'detail', element: 'opensea_asset_link', action: 'click' })
                  },
                  weight: 'bold',
                },
                Se,
                t.createElement(P.a, null),
              ),
            ),
          )
        },
        De = K.a.create(function (e) {
          return {
            helpLink: { marginVertical: e.spaces.space16 },
            topBorder: {
              paddingTop: e.spaces.space16,
              marginTop: e.spaces.space16,
              borderTopColor: e.colors.gray50,
              borderTopStyle: 'solid',
              borderTopWidth: e.borderWidths.small,
            },
          }
        }),
        Oe = n('v6aA'),
        Me = n('cFuS'),
        Le = n('88ay'),
        Pe = n('IMA+'),
        Re = void 0 !== se ? se : (se = n('M2DF')),
        xe = v.a.c6000492,
        Ie = function (e) {
          var a = C()(Re, e.user).legacy,
            n = t.useContext(Oe.a).loggedInUserId,
            l = null == a ? void 0 : a.profile_image_url_https,
            r = a.name,
            i = a.screen_name,
            s = a && n ? Object(Le.e)({ loggedInUserId: n, userId: null == a ? void 0 : a.id_str }) : null
          return l && r && i
            ? t.createElement(
                T.a,
                null,
                t.createElement(R, { text: xe }),
                t.createElement(Pe.a, {
                  avatarUri: l,
                  decoration: s,
                  displayMode: 'UserDetailed',
                  isFollowedBy: a.followed_by,
                  isProtected: a.protected,
                  isVerified: a.verified,
                  name: r,
                  promotedItemType: Me.c.USER,
                  screenName: i,
                  style: Ae.userCell,
                  userId: a.id_str,
                  withFollowsYou: !0,
                }),
              )
            : null
        },
        Ae = K.a.create(function (e) {
          return { userCell: { marginHorizontal: -1 * K.a.theme.spacesPx.space16 } }
        }),
        Qe = v.a.e83b141e,
        Ue = void 0 !== oe ? oe : (oe = n('QKWn')),
        je = void 0 !== ue ? ue : (ue = n('H2N0')),
        Be = function (e) {
          var a,
            n,
            l,
            r,
            i = C()(je, e.openseaNftMetadataData),
            s = C()(Ue, e.nft).token_id
          return t.createElement(
            T.a,
            null,
            t.createElement(
              E.a,
              null,
              t.createElement(
                h.b,
                { size: 'subtext1', weight: 'bold' },
                (null == i || null === (a = i.collection) || void 0 === a || null === (n = a.metadata) || void 0 === n
                  ? void 0
                  : n.name) || '',
              ),
              null != i &&
                null !== (l = i.collection) &&
                void 0 !== l &&
                null !== (r = l.metadata) &&
                void 0 !== r &&
                r.verified
                ? t.createElement(h.b, { color: 'gray700', size: 'subtext1' }, Qe)
                : null,
            ),
            t.createElement(h.b, { size: 'title3', weight: 'bold' }, (null == i ? void 0 : i.name) || '#'.concat(s)),
          )
        },
        We = (n('M+/F'), void 0 !== ce ? ce : (ce = n('TP6m'))),
        Ge = v.a.eadbd438,
        qe = function (e) {
          var a = C()(We, e.openseaNftMetadataData),
            n = t.useState(!1),
            l = p()(n, 2),
            r = l[0],
            i = l[1]
          t.useEffect(
            function () {
              var e
              null !== (e = a.traits) && void 0 !== e && e.length && i(a.traits.length > 6)
            },
            [a.traits],
          )
          if (null == a || !a.traits || null == a || !a.traits.length) return null
          var s = r ? a.traits.slice(0, 6) : a.traits
          return t.createElement(
            T.a,
            null,
            t.createElement(R, { text: Ge }),
            t.createElement(
              Q,
              null,
              s.map(function (e) {
                return t.createElement(
                  U,
                  { key: e.trait_type },
                  e.trait_type ? t.createElement(j, { style: ze.uppercase }, e.trait_type) : null,
                  t.createElement(h.b, { weight: 'medium' }, e.value),
                )
              }),
            ),
            r
              ? t.createElement(ee, {
                  onPress: function () {
                    i(!r)
                  },
                })
              : null,
          )
        },
        ze = K.a.create(function (e) {
          return { uppercase: { textTransform: 'uppercase' } }
        }),
        He = void 0 !== de ? de : (de = n('4k/N')),
        Ve = K.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              paddingTop: e.spaces.space16,
              paddingBottom: e.spaces.space32,
              paddingHorizontal: e.spaces.space24,
            },
            sideDrawer: {
              width: L.a + 100,
              borderLeftWidth: e.borderWidths.small,
              borderColor: e.colors.borderColor,
              borderStyle: 'solid',
              overflow: 'auto',
            },
            bottomDrawer: { width: '100%', padding: e.spaces.space16, display: 'flex' },
          }
        }),
        Ye = function (e) {
          var a,
            n,
            l = C()(He, e.user),
            r = e.isBottomDrawer
          if (
            'OpenseaNFTMetadata' !==
            (null == l ||
            null === (a = l.nft_avatar_metadata) ||
            void 0 === a ||
            null === (n = a.metadata) ||
            void 0 === n
              ? void 0
              : n.__typename)
          )
            return null
          var i = r ? Ve.bottomDrawer : Ve.sideDrawer
          return t.createElement(
            T.a,
            { style: [Ve.root, i] },
            t.createElement(Be, { nft: l.nft_avatar_metadata, openseaNftMetadataData: l.nft_avatar_metadata.metadata }),
            t.createElement(be, {
              openseaNftMetadataData: l.nft_avatar_metadata.metadata,
              smartContractData: l.nft_avatar_metadata.smart_contract,
            }),
            t.createElement(Ie, { user: l }),
            t.createElement(he, { openseaNftMetadataData: l.nft_avatar_metadata.metadata }),
            t.createElement(ye, { openseaNftMetadataData: l.nft_avatar_metadata.metadata }),
            t.createElement(qe, { openseaNftMetadataData: l.nft_avatar_metadata.metadata }),
            t.createElement(J, { nft: l.nft_avatar_metadata, smartContract: l.nft_avatar_metadata.smart_contract }),
            t.createElement(we, { nft: l.nft_avatar_metadata, smartContract: l.nft_avatar_metadata.smart_contract }),
          )
        },
        Ze = n('wiP2'),
        Xe = n('/yvb'),
        Je = n('RCZO')
      function $e(e, a) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e)
          a &&
            (l = l.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable
            })),
            n.push.apply(n, l)
        }
        return n
      }
      function ea(e) {
        for (var a = 1; a < arguments.length; a++) {
          var n = null != arguments[a] ? arguments[a] : {}
          a % 2
            ? $e(Object(n), !0).forEach(function (a) {
                f()(e, a, n[a])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : $e(Object(n)).forEach(function (a) {
                Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
              })
        }
        return e
      }
      var aa,
        na = v.a.c1a40fd4,
        la = void 0 !== me ? me : (me = n('FklY')),
        ta = K.a.create(function (e) {
          return {
            actionsBar: { height: e.spaces.space48, maxWidth: 'none', paddingHorizontal: e.spaces.space12 },
            container: {
              flexDirection: 'row',
              overflowX: 'hidden',
              overflowY: 'hidden',
              height: '100%',
              width: '100%',
              position: 'relative',
            },
            verticalLayout: { flexDirection: 'column' },
            media: { flexGrow: 1, flexShrink: 1 },
            bottomDrawerContainer: { width: '100%', height: '75vh', overflow: 'auto' },
            footer: { marginBottom: e.spaces.space20, zIndex: 1 },
            footerTitle: { marginVertical: e.spaces.space8 },
          }
        }),
        ra = function (e) {
          var a,
            n,
            l,
            r,
            i,
            s,
            u,
            c,
            m,
            f,
            g,
            _ = Object(A.b)(),
            v = e.fetchStatus,
            E = e.screenName,
            K = e.user,
            S = t.useState(!1),
            N = p()(S, 2),
            w = N[0],
            D = N[1],
            M = Object(Je.h)(),
            P = M.handleMediaDetailZoomed,
            R = M.handleMediaItemTapped,
            x = M.hideButtons,
            I = Object(d.g)(),
            Q = C()(la, K),
            U = y.a.get('window').width - L.a > L.b
          if (null == Q || null === (a = Q.legacy) || void 0 === a || !a.profile_image_url_https) return null
          var j = {
              id_str: null == Q || null === (n = Q.legacy) || void 0 === n ? void 0 : n.id_str,
              expanded_url: null == Q || null === (l = Q.legacy) || void 0 === l ? void 0 : l.profile_image_url_https,
              media_url_https:
                null == Q || null === (r = Q.legacy) || void 0 === r ? void 0 : r.profile_image_url_https,
              ext_alt_text: '',
              type: 'photo',
              original_info: { width: 400, height: 400 },
            },
            B =
              'ApiMediaExtensions' ===
              (null == Q ||
              null === (i = Q.legacy) ||
              void 0 === i ||
              null === (s = i.profile_image_extensions) ||
              void 0 === s
                ? void 0
                : s.__typename)
                ? null == Q || null === (u = Q.legacy) || void 0 === u
                  ? void 0
                  : u.profile_image_extensions
                : {},
            W =
              ('ApiMediaColorExtension' ===
                (null == B || null === (c = B.mediaColor) || void 0 === c ? void 0 : c.__typename) &&
                (null == B ||
                null === (m = B.mediaColor) ||
                void 0 === m ||
                null === (f = m.r) ||
                void 0 === f ||
                null === (g = f.ok) ||
                void 0 === g
                  ? void 0
                  : g.palette)) ||
              [],
            G = W.map(function (e) {
              return ea(ea({}, e), {}, { rgb: { blue: e.rgb.blue, red: e.rgb.red, green: e.rgb.green } })
            }),
            q = W && Object(Je.e)(G),
            z = function () {
              I.goBack({ backLocation: '/'.concat(E) })
            },
            H = function (e) {
              _.scribe({ element: 'details_button', action: 'click' }), e.stopPropagation(), e.preventDefault(), D(!0)
            },
            V = function () {
              return t.createElement(b.a, {
                dataSaver: !1,
                dominantColor: q.rgb,
                mediaIndex: 0,
                mediaItems: [j],
                onDismiss: z,
                onMediaDetailZoomed: P,
                onTap: R,
              })
            },
            Y = function () {
              return t.createElement(o.a, { to: '/'.concat(E) })
            },
            Z = function (e) {
              var a,
                n,
                l,
                r,
                i =
                  null != Q && null !== (a = Q.legacy) && void 0 !== a && a.profile_image_url_https
                    ? Q.legacy.profile_image_url_https
                    : void 0
              return t.createElement(
                F.a,
                {
                  backgroundColor: q,
                  footerButtons:
                    !w &&
                    e &&
                    ('OpenseaNFTMetadata' ===
                    (null === (n = Q.nft_avatar_metadata) || void 0 === n || null === (l = n.metadata) || void 0 === l
                      ? void 0
                      : l.__typename)
                      ? t.createElement(
                          T.a,
                          { style: ta.footer },
                          t.createElement(
                            h.b,
                            { color: 'whiteOnColor', size: 'title4', style: ta.footerTitle },
                            Q.nft_avatar_metadata.metadata.name,
                          ),
                          t.createElement(O, {
                            color: 'whiteOnColor',
                            isCondensed: !0,
                            openseaNftMetadataData:
                              null === (r = Q.nft_avatar_metadata) || void 0 === r ? void 0 : r.metadata,
                          }),
                          t.createElement(Xe.a, { onPress: H, type: 'onMediaOutlined' }, na),
                        )
                      : null),
                  forceModalStyle: !0,
                  hideButtons: x,
                  mediaUrl: i,
                  onCloseButtonPress: z,
                },
                t.createElement(k.a, { fetchStatus: v, render: V, renderFailure: Y, retryable: !1 }),
              )
            }
          return t.createElement(
            Ze.a.Configure,
            { headerless: !0 },
            U
              ? t.createElement(
                  T.a,
                  { style: ta.container },
                  t.createElement(T.a, { style: ta.media }, Z()),
                  t.createElement(Ye, { user: Q }),
                )
              : t.createElement(
                  T.a,
                  { style: [ta.container, ta.verticalLayout] },
                  t.createElement(T.a, { style: ta.media }, Z(!0)),
                  w
                    ? t.createElement(
                        T.a,
                        { style: ta.bottomDrawerContainer },
                        t.createElement(Ye, { isBottomDrawer: !0, user: Q }),
                      )
                    : null,
                ),
          )
        },
        ia = n('n0Rl'),
        sa = void 0 !== aa ? aa : (aa = n('2agG')),
        oa = Object(ia.b)(sa, { errorConfig: { options: r.a, context: 'USER_NFT_SCREEN_CONTEXT' } }),
        ua = function () {
          var e = Object(d.i)().screenName || '',
            a = t.useMemo(
              function () {
                return { screenName: Object(i.a)(e) }
              },
              [e],
            )
          return t.createElement(oa, {
            render: function (a) {
              var n,
                l = a.data,
                r = a.fetchStatus,
                d = a.retry,
                m = null == l || null === (n = l.user) || void 0 === n ? void 0 : n.result
              return m && 'User' === m.__typename && !m.has_nft_avatar
                ? t.createElement(o.a, { to: '/'.concat(Object(i.a)(e), '/photo') })
                : t.createElement(
                    c.b,
                    { namespace: { page: 'nft', section: 'avatar' } },
                    t.createElement(
                      s.a,
                      null,
                      t.createElement(ra, {
                        fetchStatus: Object(u.b)(r, 'User' === (null == m ? void 0 : m.__typename)),
                        onRetry: d,
                        screenName: e,
                        user: m || void 0,
                      }),
                    ),
                  )
            },
            variables: a,
          })
        }
      a.default = ua
    },
    '2agG': function (e, a, n) {
      'use strict'
      n.r(a)
      var l,
        t,
        r,
        i,
        s,
        o,
        u,
        c,
        d = {
          fragment: {
            argumentDefinitions: (l = [{ defaultValue: null, kind: 'LocalArgument', name: 'screenName' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'userNftContainer_Query',
            selections: [
              {
                alias: 'user',
                args: (t = [
                  { kind: 'Literal', name: 's', value: 44 },
                  { kind: 'Variable', name: 'screen_name', variableName: 'screenName' },
                ]),
                concreteType: 'UserResults',
                kind: 'LinkedField',
                name: 'user_result_by_screen_name',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'result',
                    plural: !1,
                    selections: [
                      (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                      {
                        kind: 'InlineFragment',
                        selections: [
                          (i = {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'has_nft_avatar',
                            storageKey: null,
                          }),
                        ],
                        type: 'User',
                        abstractKey: null,
                      },
                      { args: null, kind: 'FragmentSpread', name: 'UserNftScreen_user' },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: l,
            kind: 'Operation',
            name: 'userNftContainer_Query',
            selections: [
              {
                alias: 'user',
                args: t,
                concreteType: 'UserResults',
                kind: 'LinkedField',
                name: 'user_result_by_screen_name',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'result',
                    plural: !1,
                    selections: [
                      r,
                      {
                        kind: 'InlineFragment',
                        selections: [
                          i,
                          {
                            alias: null,
                            args: null,
                            concreteType: 'ApiUser',
                            kind: 'LinkedField',
                            name: 'legacy',
                            plural: !1,
                            selections: [
                              { alias: null, args: null, kind: 'ScalarField', name: 'id_str', storageKey: null },
                              { alias: null, args: null, kind: 'ScalarField', name: 'followed_by', storageKey: null },
                              (s = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'profile_image_url_https',
                                storageKey: null,
                              },
                              { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                              (o = {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'verified',
                                storageKey: null,
                              }),
                              {
                                alias: null,
                                args: null,
                                concreteType: 'ApiMediaExtensions',
                                kind: 'LinkedField',
                                name: 'profile_image_extensions',
                                plural: !1,
                                selections: [
                                  r,
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'ApiMediaColorExtension',
                                    kind: 'LinkedField',
                                    name: 'mediaColor',
                                    plural: !1,
                                    selections: [
                                      r,
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'ApiMediaColorExtensionR',
                                        kind: 'LinkedField',
                                        name: 'r',
                                        plural: !1,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'ApiMediaEntityColorPalette',
                                            kind: 'LinkedField',
                                            name: 'ok',
                                            plural: !1,
                                            selections: [
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'ApiMediaEntityColorPaletteColor',
                                                kind: 'LinkedField',
                                                name: 'palette',
                                                plural: !0,
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'percentage',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'ApiMediaEntityColor',
                                                    kind: 'LinkedField',
                                                    name: 'rgb',
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'red',
                                                        storageKey: null,
                                                      },
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'blue',
                                                        storageKey: null,
                                                      },
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'green',
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            filters: null,
                            handle: 'defaultScalars',
                            key: '',
                            kind: 'LinkedHandle',
                            name: 'legacy',
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'NFT',
                            kind: 'LinkedField',
                            name: 'nft_avatar_metadata',
                            plural: !1,
                            selections: [
                              r,
                              { alias: null, args: null, kind: 'ScalarField', name: 'token_id', storageKey: null },
                              {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: 'LinkedField',
                                name: 'smart_contract',
                                plural: !1,
                                selections: [
                                  r,
                                  { kind: 'TypeDiscriminator', abstractKey: '__isSmartContract' },
                                  {
                                    kind: 'InlineFragment',
                                    selections: (u = [
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'network',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'address',
                                        storageKey: null,
                                      },
                                    ]),
                                    type: 'ERC721',
                                    abstractKey: null,
                                  },
                                  { kind: 'InlineFragment', selections: u, type: 'ERC1155', abstractKey: null },
                                ],
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: 'LinkedField',
                                name: 'metadata',
                                plural: !1,
                                selections: [
                                  r,
                                  {
                                    kind: 'InlineFragment',
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'creator_username',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'NFTCollection',
                                        kind: 'LinkedField',
                                        name: 'collection',
                                        plural: !1,
                                        selections: [
                                          s,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: 'LinkedField',
                                            name: 'metadata',
                                            plural: !1,
                                            selections: [
                                              r,
                                              {
                                                kind: 'InlineFragment',
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'image_url',
                                                    storageKey: null,
                                                  },
                                                  o,
                                                  (c = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'description',
                                                    storageKey: null,
                                                  }),
                                                  s,
                                                ],
                                                type: 'OpenseaCollectionMetadata',
                                                abstractKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'creator_address',
                                        storageKey: null,
                                      },
                                      c,
                                      s,
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'OpenseaNFTTrait',
                                        kind: 'LinkedField',
                                        name: 'traits',
                                        plural: !0,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'trait_type',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'value',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'display_type',
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ],
                                    type: 'OpenseaNFTMetadata',
                                    abstractKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                        ],
                        type: 'User',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: '2WV2fm-gpUaL85bIxx14vQ',
            metadata: {},
            name: 'userNftContainer_Query',
            operationKind: 'query',
            text: null,
          },
        }
      ;(d.hash = '3fc6b9727d078820e10a815ff0ea6680'), (a.default = d)
    },
    '4k/N': function (e, a, n) {
      'use strict'
      n.r(a)
      var l,
        t = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'NftDetailDrawer_user',
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'NFT',
              kind: 'LinkedField',
              name: 'nft_avatar_metadata',
              plural: !1,
              selections: [
                (l = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'smart_contract',
                  plural: !1,
                  selections: [
                    { args: null, kind: 'FragmentSpread', name: 'NftCreator_smartContract' },
                    { args: null, kind: 'FragmentSpread', name: 'NftBlockchainDetails_smartContract' },
                    { args: null, kind: 'FragmentSpread', name: 'NftFooter_smartContract' },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'metadata',
                  plural: !1,
                  selections: [
                    l,
                    {
                      kind: 'InlineFragment',
                      selections: [
                        { args: null, kind: 'FragmentSpread', name: 'NftCollectionDetails_openseaNftMetadata' },
                        { args: null, kind: 'FragmentSpread', name: 'NftCreator_openseaNftMetadata' },
                        { args: null, kind: 'FragmentSpread', name: 'NftDescription_openseaNftMetadata' },
                        { args: null, kind: 'FragmentSpread', name: 'NftTitle_openseaNftMetadata' },
                        { args: null, kind: 'FragmentSpread', name: 'NftTraits_openseaNftMetadata' },
                      ],
                      type: 'OpenseaNFTMetadata',
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
                { args: null, kind: 'FragmentSpread', name: 'NftBlockchainDetails_nft' },
                { args: null, kind: 'FragmentSpread', name: 'NftFooter_nft' },
                { args: null, kind: 'FragmentSpread', name: 'NftTitle_nft' },
              ],
              storageKey: null,
            },
            { args: null, kind: 'FragmentSpread', name: 'NftOwner_user' },
          ],
          type: 'User',
          abstractKey: null,
        }
      ;(t.hash = '3c57cab07c96dda515d5ff5c7c8ecdcc'), (a.default = t)
    },
    '6o1g': function (e, a, n) {
      'use strict'
      n.r(a)
      var l,
        t = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'NftCreator_smartContract',
          selections: [
            { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
            {
              kind: 'InlineFragment',
              selections: (l = [{ alias: null, args: null, kind: 'ScalarField', name: 'network', storageKey: null }]),
              type: 'ERC721',
              abstractKey: null,
            },
            { kind: 'InlineFragment', selections: l, type: 'ERC1155', abstractKey: null },
          ],
          type: 'SmartContract',
          abstractKey: '__isSmartContract',
        }
      ;(t.hash = '50ce0f26cdfdc0fa27fca888982f423c'), (a.default = t)
    },
    EPqq: function (e, a, n) {
      'use strict'
      n.r(a)
      var l = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'NftBlockchainDetails_nft',
        selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'token_id', storageKey: null }],
        type: 'NFT',
        abstractKey: null,
        hash: 'f51c840dab06d215cf417abf6f70875f',
      }
      a.default = l
    },
    EWGL: function (e, a, n) {
      'use strict'
      n.r(a)
      var l,
        t = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'NftBlockchainDetails_smartContract',
          selections: [
            { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
            {
              kind: 'InlineFragment',
              selections: (l = [
                { alias: null, args: null, kind: 'ScalarField', name: 'address', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'network', storageKey: null },
              ]),
              type: 'ERC721',
              abstractKey: null,
            },
            { kind: 'InlineFragment', selections: l, type: 'ERC1155', abstractKey: null },
          ],
          type: 'SmartContract',
          abstractKey: '__isSmartContract',
        }
      ;(t.hash = 'c0b484be450a7f9903a3de229b0b577a'), (a.default = t)
    },
    FklY: function (e, a, n) {
      'use strict'
      n.r(a)
      var l,
        t = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'UserNftScreen_user',
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'NFT',
              kind: 'LinkedField',
              name: 'nft_avatar_metadata',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'metadata',
                  plural: !1,
                  selections: [
                    (l = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                    {
                      kind: 'InlineFragment',
                      selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }],
                      type: 'OpenseaNFTMetadata',
                      abstractKey: null,
                    },
                    { args: null, kind: 'FragmentSpread', name: 'NftCollectionTitle_openseaNftMetadata' },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: 'ApiUser',
              kind: 'LinkedField',
              name: 'legacy',
              plural: !1,
              selections: [
                { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'id_str', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'profile_image_url_https', storageKey: null },
                {
                  alias: null,
                  args: null,
                  concreteType: 'ApiMediaExtensions',
                  kind: 'LinkedField',
                  name: 'profile_image_extensions',
                  plural: !1,
                  selections: [
                    l,
                    {
                      alias: null,
                      args: null,
                      concreteType: 'ApiMediaColorExtension',
                      kind: 'LinkedField',
                      name: 'mediaColor',
                      plural: !1,
                      selections: [
                        l,
                        {
                          alias: null,
                          args: null,
                          concreteType: 'ApiMediaColorExtensionR',
                          kind: 'LinkedField',
                          name: 'r',
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: 'ApiMediaEntityColorPalette',
                              kind: 'LinkedField',
                              name: 'ok',
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: 'ApiMediaEntityColorPaletteColor',
                                  kind: 'LinkedField',
                                  name: 'palette',
                                  plural: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: 'ScalarField',
                                      name: 'percentage',
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: 'ApiMediaEntityColor',
                                      kind: 'LinkedField',
                                      name: 'rgb',
                                      plural: !1,
                                      selections: [
                                        { alias: null, args: null, kind: 'ScalarField', name: 'red', storageKey: null },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: 'ScalarField',
                                          name: 'blue',
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: 'ScalarField',
                                          name: 'green',
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            { args: null, kind: 'FragmentSpread', name: 'NftDetailDrawer_user' },
          ],
          type: 'User',
          abstractKey: null,
        }
      ;(t.hash = '938148f2be1375463d7f4d7a663b8351'), (a.default = t)
    },
    Gaii: function (e, a, n) {
      'use strict'
      n.r(a)
      var l = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'NftCreator_openseaNftMetadata',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'creator_address', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'creator_username', storageKey: null },
        ],
        type: 'OpenseaNFTMetadata',
        abstractKey: null,
        hash: '39deafa470ce306ddf113a741f4f4ff5',
      }
      a.default = l
    },
    H2N0: function (e, a, n) {
      'use strict'
      n.r(a)
      var l,
        t = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'NftTitle_openseaNftMetadata',
          selections: [
            (l = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
            {
              alias: null,
              args: null,
              concreteType: 'NFTCollection',
              kind: 'LinkedField',
              name: 'collection',
              plural: !1,
              selections: [
                l,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'metadata',
                  plural: !1,
                  selections: [
                    { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                    {
                      kind: 'InlineFragment',
                      selections: [
                        { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                        { alias: null, args: null, kind: 'ScalarField', name: 'image_url', storageKey: null },
                        l,
                        { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
                      ],
                      type: 'OpenseaCollectionMetadata',
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: 'OpenseaNFTMetadata',
          abstractKey: null,
        }
      ;(t.hash = '9c7c85c01c5673e23e86c751b663a656'), (a.default = t)
    },
    M2DF: function (e, a, n) {
      'use strict'
      n.r(a)
      var l = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'NftOwner_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiUser',
            kind: 'LinkedField',
            name: 'legacy',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'id_str', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'followed_by', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'profile_image_url_https', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '7d230d7d65eb53bd5eb651214723c7dc',
      }
      a.default = l
    },
    PfIX: function (e, a, n) {
      'use strict'
      n.r(a)
      var l = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'NftCollectionTitle_openseaNftMetadata',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'creator_username', storageKey: null },
          {
            alias: null,
            args: null,
            concreteType: 'NFTCollection',
            kind: 'LinkedField',
            name: 'collection',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: 'LinkedField',
                name: 'metadata',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: 'image_url', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
                    ],
                    type: 'OpenseaCollectionMetadata',
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: 'OpenseaNFTMetadata',
        abstractKey: null,
        hash: '14ee6884aa5d3afb92f61bef7b0478a6',
      }
      a.default = l
    },
    QKWn: function (e, a, n) {
      'use strict'
      n.r(a)
      var l = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'NftTitle_nft',
        selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'token_id', storageKey: null }],
        type: 'NFT',
        abstractKey: null,
        hash: 'b419b873de79c7fe02a42a775e0c9068',
      }
      a.default = l
    },
    'R+uT': function (e, a, n) {
      'use strict'
      n.r(a)
      var l = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'NftFooter_nft',
        selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'token_id', storageKey: null }],
        type: 'NFT',
        abstractKey: null,
        hash: '8acfc167a7015edf7fc99406f2fea09d',
      }
      a.default = l
    },
    TP6m: function (e, a, n) {
      'use strict'
      n.r(a)
      var l = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'NftTraits_openseaNftMetadata',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
          {
            alias: null,
            args: null,
            concreteType: 'OpenseaNFTTrait',
            kind: 'LinkedField',
            name: 'traits',
            plural: !0,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'trait_type', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'value', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'display_type', storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: 'OpenseaNFTMetadata',
        abstractKey: null,
        hash: 'f1e94ab35a398e5668e6f750f5e00118',
      }
      a.default = l
    },
    bCEw: function (e, a, n) {
      'use strict'
      var l = n('IGGJ')(n('K1iM')),
        t = n('23An'),
        r = n('Ud88'),
        i = n('aQQo'),
        s = i.loadQuery,
        o = i.useTrackLoadQueryInRender,
        u = n('ERkP'),
        c = u.useCallback,
        d = u.useEffect,
        m = u.useRef,
        f = u.useState,
        g = n('K1lQ').getRequest,
        p = { kind: 'NullQueryReference' }
      function y(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== g(e).params.metadata.live
      }
      e.exports = function (e, a) {
        var n = null != a ? a : p,
          i = r()
        o()
        var u = t(),
          g = m(new Set([n])),
          k = f(function () {
            return n
          }),
          _ = k[0],
          v = k[1],
          b = f(function () {
            return n
          }),
          F = b[0],
          h = b[1]
        n !== F && (g.current.add(n), h(n), v(n))
        var E = c(
            function () {
              u.current && (g.current.add(p), v(p))
            },
            [u],
          ),
          K = c(
            function (a, n) {
              var l =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (u.current) {
                var t,
                  r = s(null !== (t = null == n ? void 0 : n.__environment) && void 0 !== t ? t : i, e, a, l)
                g.current.add(r), v(r)
              }
            },
            [i, e, v, u],
          ),
          S = m(!1)
        return (
          d(function () {
            return function () {
              S.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === S.current)
                return (
                  (S.current = !1),
                  void (
                    'NullQueryReference' !== _.kind &&
                    K(_.variables, { fetchPolicy: _.fetchPolicy, networkCacheConfig: _.networkCacheConfig })
                  )
                )
              var a = g.current
              if (u.current) {
                var n,
                  t = (0, l.default)(a)
                try {
                  for (t.s(); !(n = t.n()).done; ) {
                    var r = n.value
                    if (r === _) break
                    a.delete(r),
                      'NullQueryReference' !== r.kind &&
                        (y(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
                  }
                } catch (i) {
                  t.e(i)
                } finally {
                  t.f()
                }
              }
            },
            [_, u, K, e],
          ),
          d(
            function () {
              return function () {
                var a,
                  n = (0, l.default)(g.current)
                try {
                  for (n.s(); !(a = n.n()).done; ) {
                    var t = a.value
                    'NullQueryReference' !== t.kind &&
                      (y(e) ? t.dispose && t.dispose() : t.releaseQuery && t.releaseQuery())
                  }
                } catch (r) {
                  n.e(r)
                } finally {
                  n.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === _.kind ? null : _, K, E]
        )
      }
    },
    iyiT: function (e, a, n) {
      'use strict'
      n.d(a, 'a', function () {
        return t
      }),
        n.d(a, 'b', function () {
          return r
        })
      var l = n('ZUOq'),
        t = l.a.columnWidths.secondary.normal,
        r = l.a.columnWidths.primary
    },
    n0Rl: function (e, a, n) {
      'use strict'
      n.d(a, 'b', function () {
        return Q
      })
      n('OZaJ')
      var l = n('ddV6'),
        t = n.n(l),
        r = n('VrFO'),
        i = n.n(r),
        s = n('Y9Ll'),
        o = n.n(s),
        u = n('1Pcy'),
        c = n.n(u),
        d = n('5Yy7'),
        m = n.n(d),
        f = n('N+ot'),
        g = n.n(f),
        p = n('AuHH'),
        y = n.n(p),
        k = n('KEM+'),
        _ = n.n(k),
        v = (n('2G9S'), n('ZUdG'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        b = n('pXBW'),
        F = n('6/RC'),
        h = n('UIzd'),
        E = n.n(h),
        K = n('kGix')
      n.d(a, 'a', function () {
        return K.a
      })
      var S = n('fs1G'),
        C = n('0KEI'),
        N = n('lU4h'),
        T = n.n(N),
        w = n('21nk'),
        D = n.n(w),
        O = n('bCEw'),
        M = n.n(O),
        L = n('Ud88'),
        P = n.n(L)
      function R(e) {
        var a = (function () {
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
          var n,
            l = y()(e)
          if (a) {
            var t = y()(this).constructor
            n = Reflect.construct(l, arguments, t)
          } else n = l.apply(this, arguments)
          return g()(this, n)
        }
      }
      var x = function (e) {
          return (0, e.render)({ fetchStatus: K.a.LOADING, data: null, error: null, retry: S.a })
        },
        I = (function (e) {
          m()(n, e)
          var a = R(n)
          function n() {
            var e
            i()(this, n)
            for (var l = arguments.length, t = new Array(l), r = 0; r < l; r++) t[r] = arguments[r]
            return (e = a.call.apply(a, [this].concat(t))), _()(c()(e), 'state', { error: null }), e
          }
          return (
            o()(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, a) {
                    if (!(e instanceof b.a)) throw e
                    this.props.errorHandler(e)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return this.props.children(this.state.error, this.props.retry)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromError',
                  value: function (e) {
                    return { error: e }
                  },
                },
              ],
            ),
            n
          )
        })(v.Component),
        A = function (e) {
          var a = e.query,
            n = e.queryRef,
            l = e.render,
            t = D()(a, n)
          return l({ fetchStatus: K.a.LOADED, data: t, error: null, retry: S.a })
        },
        Q = function (e, a) {
          if (F.canUseDOM)
            return function (n) {
              var l = n.fetchPolicy,
                r = void 0 === l ? 'store-or-network' : l,
                i = n.render,
                s = n.variables,
                o = M()(e),
                u = t()(o, 2),
                c = u[0],
                d = u[1],
                m = Object(C.useCreateLocalApiErrorHandler)(a.errorConfig.context),
                f = T()(s),
                g = t()(f, 1)[0],
                p = v.useCallback(
                  function () {
                    d(g, { fetchPolicy: 'network-only' })
                  },
                  [d, g],
                )
              return (
                v.useLayoutEffect(
                  function () {
                    d(g, { fetchPolicy: r })
                  },
                  [r, d, g],
                ),
                c
                  ? v.createElement(
                      v.Suspense,
                      { fallback: v.createElement(x, { render: i }) },
                      v.createElement(
                        I,
                        { errorHandler: m(a.errorConfig.options || {}), key: c.fetchKey, retry: p },
                        function (a, n) {
                          return a
                            ? i({ fetchStatus: K.a.FAILED, error: a, data: null, retry: n })
                            : v.createElement(A, { query: e, queryRef: c, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (l) {
            l.fetchPolicy
            var r = l.render,
              i = l.variables,
              s = P()(),
              o = Object(C.useCreateLocalApiErrorHandler)(a.errorConfig.context),
              u = T()(i),
              c = t()(u, 1)[0],
              d = n.get(s)
            if (d) return d
            var m = v.lazy(function () {
              return E()(s, e, c)
                .toPromise()
                .then(
                  function (e) {
                    return r({ fetchStatus: K.a.LOADED, data: e, error: null, retry: S.a })
                  },
                  function (e) {
                    return e instanceof b.a
                      ? (o(a.errorConfig.options || {})(e),
                        r({ fetchStatus: K.a.FAILED, data: null, error: e, retry: S.a }))
                      : v.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(s, e).get.bind(n, s) }
                })
            })
            return v.createElement(v.Suspense, null, v.createElement(m, null))
          }
        }
    },
    rZgY: function (e, a, n) {
      'use strict'
      n.r(a)
      var l = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'NftCollectionDetails_openseaNftMetadata',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'creator_username', storageKey: null },
          {
            alias: null,
            args: null,
            concreteType: 'NFTCollection',
            kind: 'LinkedField',
            name: 'collection',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: 'LinkedField',
                name: 'metadata',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                    ],
                    type: 'OpenseaCollectionMetadata',
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          { args: null, kind: 'FragmentSpread', name: 'NftCollectionTitle_openseaNftMetadata' },
        ],
        type: 'OpenseaNFTMetadata',
        abstractKey: null,
        hash: '4eadd236a5ad089f275c79212a53b8a9',
      }
      a.default = l
    },
  },
])
//# sourceMappingURL=WIPED
