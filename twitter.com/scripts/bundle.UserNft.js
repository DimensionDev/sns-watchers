;(window.webpackJsonp = window.webpackJsonp || []).push([
  [104],
  {
    '++ci': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'NftDescription_openseaNftMetadata',
        selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null }],
        type: 'OpenseaNFTMetadata',
        abstractKey: null,
        hash: 'cdefa7c1e3e5ea2b06f5a3ebf4c77640',
      }
      a.default = t
    },
    '1Oiz': function (e, a, n) {
      'use strict'
      n.r(a)
      var t,
        l = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'NftFooter_smartContract',
          selections: [
            { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
            {
              kind: 'InlineFragment',
              selections: (t = [{ alias: null, args: null, kind: 'ScalarField', name: 'address', storageKey: null }]),
              type: 'ERC721',
              abstractKey: null,
            },
            { kind: 'InlineFragment', selections: t, type: 'ERC1155', abstractKey: null },
          ],
          type: 'SmartContract',
          abstractKey: '__isSmartContract',
        }
      ;(l.hash = 'd6b701feecbeb528e41c1ca6ab7e67f7'), (a.default = l)
    },
    '21nk': function (e, a, n) {
      'use strict'
      var t = n('I9iR'),
        l = n('3KVO'),
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
          k.request.node.params.name !== a.name && t(!1),
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
          var v = c(d, k)
          o = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != g && d === a.environment ? g.ifEmpty(v) : (a.environment, v),
            fetchKey: m,
            fetchPolicy: f,
            query: k,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return l(o)
      }
    },
    '23An': function (e, a, n) {
      'use strict'
      var t = n('ERkP'),
        l = t.useEffect,
        r = t.useRef
      e.exports = function () {
        var e = r(!0)
        return (
          l(function () {
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
          return fa
        }),
        n.d(a, 'UserNftScreenContainer', function () {
          return pa
        })
      var t,
        l = n('ERkP'),
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
        v = n('3XMw'),
        b = n.n(v),
        _ = n('2doW'),
        h = n('UPvq'),
        F = (n('uFXj'), n('t62R')),
        E = n('pjBI'),
        K = n('rHpw'),
        S = n('jAXQ'),
        C = n.n(S),
        O = n('U+bB'),
        w = n('MWbm'),
        N = b.a.e83b141e,
        T = void 0 !== t ? t : (t = n('PfIX')),
        D = function (e) {
          var a,
            n,
            t,
            r,
            i,
            s = e.color,
            o = void 0 === s ? 'normal' : s,
            u = e.isCondensed,
            c = e.openseaNftMetadataData,
            d = C()(T, c)
          if (
            !(
              (null != d && null !== (a = d.collection) && void 0 !== a && a.name) ||
              (null != d && null !== (n = d.collection) && void 0 !== n && n.metadata)
            ) ||
            'OpenseaCollectionMetadata' !==
              (null == d || null === (t = d.collection) || void 0 === t || null === (r = t.metadata) || void 0 === r
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
            v = k ? 'subtext1' : 'body',
            _ = k ? M.collectionImageInline : M.collectionImage,
            h =
              ((m = null === (i = d.collection) || void 0 === i ? void 0 : i.name),
              (f = d.creator_username),
              m && f
                ? l.createElement(
                    F.b,
                    { color: o, size: v, weight: 'bold' },
                    l.createElement(b.a.I18NFormatMessage, { $i18n: 'fbe06ae0' }, m, f),
                  )
                : m
                ? l.createElement(F.b, { color: o, size: v }, m)
                : null)
          return l.createElement(
            w.a,
            { style: M.collectionTitle },
            p && l.createElement(O.a, { alt: '', source: p, style: _ }),
            l.createElement(
              w.a,
              null,
              k
                ? l.createElement(E.a, { color: o }, h, y ? l.createElement(F.b, { color: o, size: v }, N) : null)
                : l.createElement(l.Fragment, null, h, y ? l.createElement(F.b, { color: 'gray700' }, N) : null),
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
        P = n('iyiT'),
        L = n('Wc+h')
      function R(e) {
        var a = e.text
        return l.createElement(F.b, { size: 'headline2', style: x.heading, weight: 'bold' }, a)
      }
      var x = K.a.create(function (e) {
          return { heading: { marginTop: e.spaces.space24, marginBottom: e.spaces.space12 } }
        }),
        j =
          (n('2G9S'),
          function (e) {
            if (e.length > 11) {
              var a = e.substring(0, 6),
                n = e.substring(e.length - 4)
              return ''.concat(a, '...').concat(n)
            }
            return e
          }),
        I = n('Irs7')
      function A(e) {
        var a = e.children
        return l.createElement(w.a, { style: z.list }, a)
      }
      function Q(e) {
        var a = e.children
        return l.createElement(w.a, { style: z.item }, a)
      }
      function U(e) {
        var a = e.children,
          n = e.style
        return l.createElement(F.b, { style: [n, z.itemTitle] }, a)
      }
      var B,
        W,
        z = K.a.create(function (e) {
          return {
            list: { display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' },
            item: { width: '40%', marginBottom: e.spaces.space16 },
            itemTitle: { color: e.colors.gray700 },
          }
        }),
        G = b.a.dcbace0b,
        q = b.a.d4741cb3,
        H = b.a.b748db08,
        V = b.a.accae48c,
        Z = b.a.h8fe11ab,
        X = void 0 !== B ? B : (B = n('EPqq')),
        Y = void 0 !== W ? W : (W = n('EWGL')),
        J = function (e) {
          var a = Object(I.b)(),
            n = C()(X, e.nft),
            t = C()(Y, e.smartContract),
            r =
              'ERC721' === (null == t ? void 0 : t.__typename) || 'ERC1155' === (null == t ? void 0 : t.__typename)
                ? t
                : void 0
          return r
            ? l.createElement(
                w.a,
                null,
                l.createElement(R, { text: G }),
                l.createElement(
                  A,
                  null,
                  l.createElement(
                    Q,
                    null,
                    l.createElement(U, null, H),
                    l.createElement(
                      F.b,
                      {
                        color: 'normal',
                        link: 'https://etherscan.io/address/'.concat(r.address),
                        onPress: function () {
                          a.scribe({ component: 'detail', element: 'etherscan_link', action: 'click' })
                        },
                        weight: 'medium',
                      },
                      j(r.address),
                      l.createElement(L.a, null),
                    ),
                  ),
                  l.createElement(
                    Q,
                    null,
                    l.createElement(U, null, V),
                    l.createElement(F.b, { weight: 'medium' }, j(n.token_id)),
                  ),
                  l.createElement(
                    Q,
                    null,
                    l.createElement(U, null, q),
                    l.createElement(F.b, { weight: 'medium' }, r.network),
                  ),
                  l.createElement(
                    Q,
                    null,
                    l.createElement(U, null, Z),
                    l.createElement(F.b, { weight: 'medium' }, r.__typename),
                  ),
                ),
              )
            : null
        },
        $ = (n('jQ/y'), n('hBvt'), b.a.ffd9cfe6)
      function ee(e) {
        var a = e.onPress
        return l.createElement(F.b, { color: 'link', onPress: a, style: fe.link, weight: 'bold' }, $)
      }
      var ae,
        ne,
        te,
        le,
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
        ge = b.a.ddf0ba7e,
        pe = void 0 !== ae ? ae : (ae = n('rZgY')),
        ye = function (e) {
          var a,
            n,
            t,
            r,
            i = C()(pe, e.openseaNftMetadataData),
            s = l.useState(!1),
            o = p()(s, 2),
            u = o[0],
            c = o[1],
            d = l.useState(!1),
            m = p()(d, 2),
            f = m[0],
            g = m[1]
          if (
            !(
              (null != i && null !== (a = i.collection) && void 0 !== a && a.name) ||
              (null != i && null !== (n = i.collection) && void 0 !== n && n.metadata)
            ) ||
            'OpenseaCollectionMetadata' !==
              (null == i || null === (t = i.collection) || void 0 === t || null === (r = t.metadata) || void 0 === r
                ? void 0
                : r.__typename)
          )
            return null
          var y = i.collection.metadata.description
          return l.createElement(
            w.a,
            null,
            l.createElement(R, { text: ge }),
            l.createElement(D, { openseaNftMetadataData: i }),
            y ? l.createElement(F.b, { getTextOverflow: c, numberOfLines: f ? void 0 : 4 }, y) : null,
            y && u && !f
              ? l.createElement(ee, {
                  onPress: function () {
                    g(!f)
                  },
                })
              : null,
          )
        },
        ke = b.a.e6aa52a9,
        ve = void 0 !== ne ? ne : (ne = n('Gaii')),
        be = void 0 !== te ? te : (te = n('6o1g')),
        _e = function (e) {
          var a = Object(I.b)(),
            n = C()(ve, e.openseaNftMetadataData),
            t = C()(be, e.smartContractData),
            r = n.creator_address,
            i = n.creator_username,
            s =
              'ERC721' === (null == t ? void 0 : t.__typename) || 'ERC1155' === (null == t ? void 0 : t.__typename)
                ? null == t
                  ? void 0
                  : t.network
                : '',
            o = i ? 'https://opensea.io/'.concat(i) : r ? 'https://opensea.io/'.concat(r) : ''
          return r || (i && s)
            ? l.createElement(
                w.a,
                null,
                l.createElement(R, { text: ke }),
                r
                  ? l.createElement(
                      F.b,
                      {
                        color: 'normal',
                        link: o,
                        onPress: function () {
                          a.scribe({ component: 'detail', element: 'opensea_profile_link', action: 'click' })
                        },
                        weight: 'bold',
                      },
                      j(r),
                      o ? l.createElement(L.a, null) : null,
                    )
                  : null,
                s && i
                  ? l.createElement(E.a, null, l.createElement(F.b, null, i), l.createElement(F.b, null, s))
                  : null,
              )
            : null
        },
        he = b.a.e36287c6,
        Fe = function (e) {
          var a = C()(void 0 !== le ? le : (le = n('++ci')), e.openseaNftMetadataData),
            t = l.useState(!1),
            r = p()(t, 2),
            i = r[0],
            s = r[1],
            o = l.useState(!1),
            u = p()(o, 2),
            c = u[0],
            d = u[1]
          return null != a && a.description
            ? l.createElement(
                w.a,
                null,
                l.createElement(R, { text: he }),
                l.createElement(
                  F.b,
                  { getTextOverflow: s, numberOfLines: c ? void 0 : 4 },
                  null == a ? void 0 : a.description,
                ),
                i && !c
                  ? l.createElement(ee, {
                      onPress: function () {
                        d(!c)
                      },
                    })
                  : null,
              )
            : null
        },
        Ee = b.a.eb023c93,
        Ke = b.a.ad5dfe8f,
        Se = b.a.hb7d1bb4,
        Ce = b.a.i859a9d3,
        Oe = void 0 !== re ? re : (re = n('R+uT')),
        we = void 0 !== ie ? ie : (ie = n('1Oiz')),
        Ne = function (e) {
          var a = Object(I.b)(),
            n = l.useState(!1),
            t = p()(n, 2),
            r = t[0],
            i = t[1],
            s = l.useState(!1),
            o = p()(s, 2),
            u = o[0],
            c = o[1],
            d = C()(Oe, e.nft),
            m = C()(we, e.smartContract),
            f =
              'ERC721' === (null == m ? void 0 : m.__typename) || 'ERC1155' === (null == m ? void 0 : m.__typename)
                ? m
                : void 0,
            g =
              null != f && f.address && d.token_id
                ? 'https://opensea.io/assets/'.concat(f.address, '/').concat(d.token_id)
                : 'https://opensea.io/'
          return l.createElement(
            w.a,
            null,
            l.createElement(R, { text: Ee }),
            l.createElement(F.b, { getTextOverflow: i, numberOfLines: u ? void 0 : 4 }, Ke),
            l.createElement(
              F.b,
              {
                link: 'https://help.twitter.com/en/using-twitter/twitter-blue-labs#nft',
                style: Te.helpLink,
                weight: 'bold',
              },
              Ce,
            ),
            r && !u
              ? l.createElement(ee, {
                  onPress: function () {
                    c(!u)
                  },
                })
              : null,
            l.createElement(
              w.a,
              { style: Te.topBorder },
              l.createElement(
                F.b,
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
                l.createElement(L.a, null),
              ),
            ),
          )
        },
        Te = K.a.create(function (e) {
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
        De = n('v6aA'),
        Me = n('cFuS'),
        Pe = n('88ay'),
        Le = n('IMA+'),
        Re = void 0 !== se ? se : (se = n('M2DF')),
        xe = b.a.c6000492,
        je = function (e) {
          var a = C()(Re, e.user).legacy,
            n = l.useContext(De.a).loggedInUserId,
            t = null == a ? void 0 : a.profile_image_url_https,
            r = a.name,
            i = a.screen_name,
            s = a && n ? Object(Pe.e)({ loggedInUserId: n, userId: null == a ? void 0 : a.id_str }) : null
          return t && r && i
            ? l.createElement(
                w.a,
                null,
                l.createElement(R, { text: xe }),
                l.createElement(Le.a, {
                  avatarUri: t,
                  decoration: s,
                  displayMode: 'UserDetailed',
                  isFollowedBy: a.followed_by,
                  isProtected: a.protected,
                  isVerified: a.verified,
                  name: r,
                  promotedItemType: Me.c.USER,
                  screenName: i,
                  style: Ie.userCell,
                  userId: a.id_str,
                  withFollowsYou: !0,
                }),
              )
            : null
        },
        Ie = K.a.create(function (e) {
          return { userCell: { marginHorizontal: -1 * K.a.theme.spacesPx.space16 } }
        }),
        Ae = b.a.e83b141e,
        Qe = void 0 !== oe ? oe : (oe = n('QKWn')),
        Ue = void 0 !== ue ? ue : (ue = n('H2N0')),
        Be = function (e) {
          var a,
            n,
            t,
            r,
            i = C()(Ue, e.openseaNftMetadataData),
            s = C()(Qe, e.nft).token_id
          return l.createElement(
            w.a,
            null,
            l.createElement(
              E.a,
              null,
              l.createElement(
                F.b,
                { size: 'subtext1', weight: 'bold' },
                (null == i || null === (a = i.collection) || void 0 === a || null === (n = a.metadata) || void 0 === n
                  ? void 0
                  : n.name) || '',
              ),
              null != i &&
                null !== (t = i.collection) &&
                void 0 !== t &&
                null !== (r = t.metadata) &&
                void 0 !== r &&
                r.verified
                ? l.createElement(F.b, { color: 'gray700', size: 'subtext1' }, Ae)
                : null,
            ),
            l.createElement(F.b, { size: 'title3', weight: 'bold' }, (null == i ? void 0 : i.name) || '#'.concat(s)),
          )
        },
        We = (n('M+/F'), void 0 !== ce ? ce : (ce = n('TP6m'))),
        ze = b.a.eadbd438,
        Ge = function (e) {
          var a = C()(We, e.openseaNftMetadataData),
            n = l.useState(!1),
            t = p()(n, 2),
            r = t[0],
            i = t[1]
          l.useEffect(
            function () {
              var e
              null !== (e = a.traits) && void 0 !== e && e.length && i(a.traits.length > 6)
            },
            [a.traits],
          )
          if (null == a || !a.traits || null == a || !a.traits.length) return null
          var s = r ? a.traits.slice(0, 6) : a.traits
          return l.createElement(
            w.a,
            null,
            l.createElement(R, { text: ze }),
            l.createElement(
              A,
              null,
              s.map(function (e) {
                return l.createElement(
                  Q,
                  { key: e.trait_type },
                  e.trait_type ? l.createElement(U, { style: qe.uppercase }, e.trait_type) : null,
                  l.createElement(F.b, { weight: 'medium' }, e.value),
                )
              }),
            ),
            r
              ? l.createElement(ee, {
                  onPress: function () {
                    i(!r)
                  },
                })
              : null,
          )
        },
        qe = K.a.create(function (e) {
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
              width: P.a + 100,
              borderLeftWidth: e.borderWidths.small,
              borderColor: e.colors.borderColor,
              borderStyle: 'solid',
              overflow: 'auto',
            },
            bottomDrawer: { width: '100%', padding: e.spaces.space16, display: 'flex' },
          }
        }),
        Ze = function (e) {
          var a,
            n,
            t = C()(He, e.user),
            r = e.isBottomDrawer
          if (
            'OpenseaNFTMetadata' !==
            (null == t ||
            null === (a = t.nft_avatar_metadata) ||
            void 0 === a ||
            null === (n = a.metadata) ||
            void 0 === n
              ? void 0
              : n.__typename)
          )
            return null
          var i = r ? Ve.bottomDrawer : Ve.sideDrawer
          return l.createElement(
            w.a,
            { style: [Ve.root, i] },
            l.createElement(Be, { nft: t.nft_avatar_metadata, openseaNftMetadataData: t.nft_avatar_metadata.metadata }),
            l.createElement(_e, {
              openseaNftMetadataData: t.nft_avatar_metadata.metadata,
              smartContractData: t.nft_avatar_metadata.smart_contract,
            }),
            l.createElement(je, { user: t }),
            l.createElement(Fe, { openseaNftMetadataData: t.nft_avatar_metadata.metadata }),
            l.createElement(ye, { openseaNftMetadataData: t.nft_avatar_metadata.metadata }),
            l.createElement(Ge, { openseaNftMetadataData: t.nft_avatar_metadata.metadata }),
            l.createElement(J, { nft: t.nft_avatar_metadata, smartContract: t.nft_avatar_metadata.smart_contract }),
            l.createElement(Ne, { nft: t.nft_avatar_metadata, smartContract: t.nft_avatar_metadata.smart_contract }),
          )
        },
        Xe = n('wiP2'),
        Ye = n('/yvb'),
        Je = n('RCZO'),
        $e = n('mpWK'),
        ea = n('NP4V')
      function aa(e, a) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e)
          a &&
            (t = t.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable
            })),
            n.push.apply(n, t)
        }
        return n
      }
      function na(e) {
        for (var a = 1; a < arguments.length; a++) {
          var n = null != arguments[a] ? arguments[a] : {}
          a % 2
            ? aa(Object(n), !0).forEach(function (a) {
                f()(e, a, n[a])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : aa(Object(n)).forEach(function (a) {
                Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
              })
        }
        return e
      }
      var ta,
        la = b.a.c1a40fd4,
        ra = b.a.ef1c2c77,
        ia = b.a.gd912af1,
        sa = b.a.f1d9930c,
        oa = b.a.a0e81a2e,
        ua = void 0 !== me ? me : (me = n('FklY')),
        ca = K.a.create(function (e) {
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
        da = function (e) {
          var a,
            n,
            t,
            r,
            i,
            s,
            u,
            c,
            m,
            f,
            g,
            v = Object(I.b)(),
            b = e.fetchStatus,
            E = e.screenName,
            K = e.user,
            S = l.useState(!1),
            O = p()(S, 2),
            N = O[0],
            T = O[1],
            M = l.useState(!0),
            L = p()(M, 2),
            R = L[0],
            x = L[1],
            j = Object(Je.h)(),
            A = j.handleMediaDetailZoomed,
            Q = j.handleMediaItemTapped,
            U = j.hideButtons,
            B = Object(d.g)(),
            W = C()(ua, K),
            z = y.a.get('window').width - P.a > P.b
          if (null == W || null === (a = W.legacy) || void 0 === a || !a.profile_image_url_https) return null
          var G = {
              id_str: null == W || null === (n = W.legacy) || void 0 === n ? void 0 : n.id_str,
              expanded_url: null == W || null === (t = W.legacy) || void 0 === t ? void 0 : t.profile_image_url_https,
              media_url_https:
                null == W || null === (r = W.legacy) || void 0 === r ? void 0 : r.profile_image_url_https,
              ext_alt_text: '',
              type: 'photo',
              original_info: { width: 400, height: 400 },
            },
            q =
              'ApiMediaExtensions' ===
              (null == W ||
              null === (i = W.legacy) ||
              void 0 === i ||
              null === (s = i.profile_image_extensions) ||
              void 0 === s
                ? void 0
                : s.__typename)
                ? null == W || null === (u = W.legacy) || void 0 === u
                  ? void 0
                  : u.profile_image_extensions
                : {},
            H =
              ('ApiMediaColorExtension' ===
                (null == q || null === (c = q.mediaColor) || void 0 === c ? void 0 : c.__typename) &&
                (null == q ||
                null === (m = q.mediaColor) ||
                void 0 === m ||
                null === (f = m.r) ||
                void 0 === f ||
                null === (g = f.ok) ||
                void 0 === g
                  ? void 0
                  : g.palette)) ||
              [],
            V = H.map(function (e) {
              return na(na({}, e), {}, { rgb: { blue: e.rgb.blue, red: e.rgb.red, green: e.rgb.green } })
            }),
            Z = H && Object(Je.e)(V),
            X = function () {
              B.goBack({ backLocation: '/'.concat(E) })
            },
            Y = function (e) {
              v.scribe({ element: 'details_button', action: 'click' }), e.stopPropagation(), e.preventDefault(), T(!0)
            },
            J = function () {
              return l.createElement(_.a, {
                dataSaver: !1,
                dominantColor: Z.rgb,
                mediaIndex: 0,
                mediaItems: [G],
                onDismiss: X,
                onMediaDetailZoomed: A,
                onTap: Q,
              })
            },
            $ = function () {
              return l.createElement(o.a, { to: '/'.concat(E) })
            },
            ee = function () {
              x(!R)
            },
            ae = function (e) {
              return e
                ? null
                : l.createElement(Ye.a, {
                    accessibilityLabel: R ? ia : ra,
                    dominantColor: Z.rgb,
                    hoverLabel: { label: R ? sa : oa },
                    icon: R ? l.createElement($e.a, null) : l.createElement(ea.a, null),
                    onClick: ee,
                    type: 'onMediaDominantColorFilled',
                  })
            },
            ne = function (e) {
              var a,
                n,
                t,
                r,
                i =
                  null != W && null !== (a = W.legacy) && void 0 !== a && a.profile_image_url_https
                    ? W.legacy.profile_image_url_https
                    : void 0
              return l.createElement(
                h.a,
                {
                  backgroundColor: Z,
                  footerButtons:
                    !N &&
                    e &&
                    ('OpenseaNFTMetadata' ===
                    (null === (n = W.nft_avatar_metadata) || void 0 === n || null === (t = n.metadata) || void 0 === t
                      ? void 0
                      : t.__typename)
                      ? l.createElement(
                          w.a,
                          { style: ca.footer },
                          l.createElement(
                            F.b,
                            { color: 'whiteOnColor', size: 'title4', style: ca.footerTitle },
                            W.nft_avatar_metadata.metadata.name,
                          ),
                          l.createElement(D, {
                            color: 'whiteOnColor',
                            isCondensed: !0,
                            openseaNftMetadataData:
                              null === (r = W.nft_avatar_metadata) || void 0 === r ? void 0 : r.metadata,
                          }),
                          l.createElement(Ye.a, { onPress: Y, type: 'onMediaOutlined' }, la),
                        )
                      : null),
                  forceModalStyle: !0,
                  hideButtons: U,
                  mediaUrl: i,
                  onCloseButtonPress: X,
                  topRightButton: ae(e),
                },
                l.createElement(k.a, { fetchStatus: b, render: J, renderFailure: $, retryable: !1 }),
              )
            }
          return l.createElement(
            Xe.a.Configure,
            { headerless: !0 },
            z
              ? l.createElement(
                  w.a,
                  { style: ca.container },
                  l.createElement(w.a, { style: ca.media }, ne()),
                  R ? l.createElement(Ze, { user: W }) : null,
                )
              : l.createElement(
                  w.a,
                  { style: [ca.container, ca.verticalLayout] },
                  l.createElement(w.a, { style: ca.media }, ne(!0)),
                  N
                    ? l.createElement(
                        w.a,
                        { style: ca.bottomDrawerContainer },
                        l.createElement(Ze, { isBottomDrawer: !0, user: W }),
                      )
                    : null,
                ),
          )
        },
        ma = n('n0Rl'),
        fa = void 0 !== ta ? ta : (ta = n('2agG')),
        ga = Object(ma.b)(fa, { errorConfig: { options: r.a, context: 'USER_NFT_SCREEN_CONTEXT' } }),
        pa = function () {
          var e = Object(d.i)().screenName || '',
            a = l.useMemo(
              function () {
                return { screenName: Object(i.a)(e) }
              },
              [e],
            )
          return l.createElement(ga, {
            render: function (a) {
              var n,
                t = a.data,
                r = a.fetchStatus,
                d = a.retry,
                m = null == t || null === (n = t.user) || void 0 === n ? void 0 : n.result
              return m && 'User' === m.__typename && !m.has_nft_avatar
                ? l.createElement(o.a, { to: '/'.concat(Object(i.a)(e), '/photo') })
                : l.createElement(
                    c.b,
                    { namespace: { page: 'nft', section: 'avatar' } },
                    l.createElement(
                      s.a,
                      null,
                      l.createElement(da, {
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
      a.default = pa
    },
    '2agG': function (e, a, n) {
      'use strict'
      n.r(a)
      var t,
        l,
        r,
        i,
        s,
        o,
        u,
        c,
        d = {
          fragment: {
            argumentDefinitions: (t = [{ defaultValue: null, kind: 'LocalArgument', name: 'screenName' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'userNftContainer_Query',
            selections: [
              {
                alias: 'user',
                args: (l = [
                  { kind: 'Literal', name: 's', value: 45 },
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
            argumentDefinitions: t,
            kind: 'Operation',
            name: 'userNftContainer_Query',
            selections: [
              {
                alias: 'user',
                args: l,
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
      var t,
        l = {
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
                (t = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                    t,
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
      ;(l.hash = '3c57cab07c96dda515d5ff5c7c8ecdcc'), (a.default = l)
    },
    '6o1g': function (e, a, n) {
      'use strict'
      n.r(a)
      var t,
        l = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'NftCreator_smartContract',
          selections: [
            { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
            {
              kind: 'InlineFragment',
              selections: (t = [{ alias: null, args: null, kind: 'ScalarField', name: 'network', storageKey: null }]),
              type: 'ERC721',
              abstractKey: null,
            },
            { kind: 'InlineFragment', selections: t, type: 'ERC1155', abstractKey: null },
          ],
          type: 'SmartContract',
          abstractKey: '__isSmartContract',
        }
      ;(l.hash = '50ce0f26cdfdc0fa27fca888982f423c'), (a.default = l)
    },
    EPqq: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'NftBlockchainDetails_nft',
        selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'token_id', storageKey: null }],
        type: 'NFT',
        abstractKey: null,
        hash: 'f51c840dab06d215cf417abf6f70875f',
      }
      a.default = t
    },
    EWGL: function (e, a, n) {
      'use strict'
      n.r(a)
      var t,
        l = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'NftBlockchainDetails_smartContract',
          selections: [
            { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
            {
              kind: 'InlineFragment',
              selections: (t = [
                { alias: null, args: null, kind: 'ScalarField', name: 'address', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'network', storageKey: null },
              ]),
              type: 'ERC721',
              abstractKey: null,
            },
            { kind: 'InlineFragment', selections: t, type: 'ERC1155', abstractKey: null },
          ],
          type: 'SmartContract',
          abstractKey: '__isSmartContract',
        }
      ;(l.hash = 'c0b484be450a7f9903a3de229b0b577a'), (a.default = l)
    },
    FklY: function (e, a, n) {
      'use strict'
      n.r(a)
      var t,
        l = {
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
                    (t = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                    t,
                    {
                      alias: null,
                      args: null,
                      concreteType: 'ApiMediaColorExtension',
                      kind: 'LinkedField',
                      name: 'mediaColor',
                      plural: !1,
                      selections: [
                        t,
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
      ;(l.hash = '938148f2be1375463d7f4d7a663b8351'), (a.default = l)
    },
    Gaii: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
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
      a.default = t
    },
    H2N0: function (e, a, n) {
      'use strict'
      n.r(a)
      var t,
        l = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'NftTitle_openseaNftMetadata',
          selections: [
            (t = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
            {
              alias: null,
              args: null,
              concreteType: 'NFTCollection',
              kind: 'LinkedField',
              name: 'collection',
              plural: !1,
              selections: [
                t,
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
                        t,
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
      ;(l.hash = '9c7c85c01c5673e23e86c751b663a656'), (a.default = l)
    },
    M2DF: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
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
      a.default = t
    },
    NP4V: function (e, a, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var t = n('KEM+'),
        l = n.n(t),
        r = n('ERkP'),
        i = n('Lsrn'),
        s = n('shC7'),
        o = n('k/Ka')
      function u(e, a) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e)
          a &&
            (t = t.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable
            })),
            n.push.apply(n, t)
        }
        return n
      }
      function c(e) {
        for (var a = 1; a < arguments.length; a++) {
          var n = null != arguments[a] ? arguments[a] : {}
          a % 2
            ? u(Object(n), !0).forEach(function (a) {
                l()(e, a, n[a])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (a) {
                Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(o.a)(
          'svg',
          c(
            c({}, e),
            {},
            {
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [i.a.root, e.style, s.a.getConstants().isRTL && i.a.iconRTL],
              viewBox: '0 0 24 24',
            },
          ),
          r.createElement(
            'g',
            null,
            r.createElement('path', {
              d: 'M4.656 12l8.72-8.72c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0l-9.25 9.25c-.294.292-.294.767 0 1.06l9.25 9.25c.145.146.337.22.53.22s.383-.073.53-.22c.292-.293.292-.768 0-1.06L4.655 12z',
            }),
            r.createElement('path', {
              d: 'M12.465 12l8.72-8.72c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0l-9.25 9.25c-.294.292-.294.767 0 1.06l9.25 9.25c.145.146.337.22.53.22s.383-.073.53-.22c.292-.293.292-.768 0-1.06L12.464 12z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (a.a = d)
    },
    PfIX: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
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
      a.default = t
    },
    QKWn: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'NftTitle_nft',
        selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'token_id', storageKey: null }],
        type: 'NFT',
        abstractKey: null,
        hash: 'b419b873de79c7fe02a42a775e0c9068',
      }
      a.default = t
    },
    'R+uT': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'NftFooter_nft',
        selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'token_id', storageKey: null }],
        type: 'NFT',
        abstractKey: null,
        hash: '8acfc167a7015edf7fc99406f2fea09d',
      }
      a.default = t
    },
    TP6m: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
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
      a.default = t
    },
    bCEw: function (e, a, n) {
      'use strict'
      var t = n('IGGJ')(n('K1iM')),
        l = n('23An'),
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
        var u = l(),
          g = m(new Set([n])),
          k = f(function () {
            return n
          }),
          v = k[0],
          b = k[1],
          _ = f(function () {
            return n
          }),
          h = _[0],
          F = _[1]
        n !== h && (g.current.add(n), F(n), b(n))
        var E = c(
            function () {
              u.current && (g.current.add(p), b(p))
            },
            [u],
          ),
          K = c(
            function (a, n) {
              var t =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (u.current) {
                var l,
                  r = s(null !== (l = null == n ? void 0 : n.__environment) && void 0 !== l ? l : i, e, a, t)
                g.current.add(r), b(r)
              }
            },
            [i, e, b, u],
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
                    'NullQueryReference' !== v.kind &&
                    K(v.variables, { fetchPolicy: v.fetchPolicy, networkCacheConfig: v.networkCacheConfig })
                  )
                )
              var a = g.current
              if (u.current) {
                var n,
                  l = (0, t.default)(a)
                try {
                  for (l.s(); !(n = l.n()).done; ) {
                    var r = n.value
                    if (r === v) break
                    a.delete(r),
                      'NullQueryReference' !== r.kind &&
                        (y(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
                  }
                } catch (i) {
                  l.e(i)
                } finally {
                  l.f()
                }
              }
            },
            [v, u, K, e],
          ),
          d(
            function () {
              return function () {
                var a,
                  n = (0, t.default)(g.current)
                try {
                  for (n.s(); !(a = n.n()).done; ) {
                    var l = a.value
                    'NullQueryReference' !== l.kind &&
                      (y(e) ? l.dispose && l.dispose() : l.releaseQuery && l.releaseQuery())
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
          ['NullQueryReference' === v.kind ? null : v, K, E]
        )
      }
    },
    iyiT: function (e, a, n) {
      'use strict'
      n.d(a, 'a', function () {
        return l
      }),
        n.d(a, 'b', function () {
          return r
        })
      var t = n('ZUOq'),
        l = t.a.columnWidths.secondary.normal,
        r = t.a.columnWidths.primary
    },
    mpWK: function (e, a, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var t = n('KEM+'),
        l = n.n(t),
        r = n('ERkP'),
        i = n('Lsrn'),
        s = n('shC7'),
        o = n('k/Ka')
      function u(e, a) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e)
          a &&
            (t = t.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable
            })),
            n.push.apply(n, t)
        }
        return n
      }
      function c(e) {
        for (var a = 1; a < arguments.length; a++) {
          var n = null != arguments[a] ? arguments[a] : {}
          a % 2
            ? u(Object(n), !0).forEach(function (a) {
                l()(e, a, n[a])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (a) {
                Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(o.a)(
          'svg',
          c(
            c({}, e),
            {},
            {
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [i.a.root, e.style, s.a.getConstants().isRTL && i.a.iconRTL],
              viewBox: '0 0 24 24',
            },
          ),
          r.createElement(
            'g',
            null,
            r.createElement('path', {
              d: 'M21.185 11.47l-9.25-9.25c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l8.72 8.72-8.72 8.72c-.294.294-.294.77 0 1.062.145.146.337.22.53.22s.383-.073.53-.22l9.25-9.25c.293-.295.293-.77 0-1.062z',
            }),
            r.createElement('path', {
              d: 'M13.376 11.47l-9.25-9.25c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l8.72 8.72-8.72 8.72c-.294.294-.294.77 0 1.062.146.145.337.218.53.218s.384-.073.53-.22l9.25-9.25c.293-.293.293-.767 0-1.06z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (a.a = d)
    },
    n0Rl: function (e, a, n) {
      'use strict'
      n.d(a, 'b', function () {
        return A
      })
      n('OZaJ')
      var t = n('ddV6'),
        l = n.n(t),
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
        v = n.n(k),
        b = (n('2G9S'), n('ZUdG'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        _ = n('pXBW'),
        h = n('6/RC'),
        F = n('UIzd'),
        E = n.n(F),
        K = n('kGix')
      n.d(a, 'a', function () {
        return K.a
      })
      var S = n('fs1G'),
        C = n('0KEI'),
        O = n('lU4h'),
        w = n.n(O),
        N = n('21nk'),
        T = n.n(N),
        D = n('bCEw'),
        M = n.n(D),
        P = n('Ud88'),
        L = n.n(P)
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
            t = y()(e)
          if (a) {
            var l = y()(this).constructor
            n = Reflect.construct(t, arguments, l)
          } else n = t.apply(this, arguments)
          return g()(this, n)
        }
      }
      var x = function (e) {
          return (0, e.render)({ fetchStatus: K.a.LOADING, data: null, error: null, retry: S.a })
        },
        j = (function (e) {
          m()(n, e)
          var a = R(n)
          function n() {
            var e
            i()(this, n)
            for (var t = arguments.length, l = new Array(t), r = 0; r < t; r++) l[r] = arguments[r]
            return (e = a.call.apply(a, [this].concat(l))), v()(c()(e), 'state', { error: null }), e
          }
          return (
            o()(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, a) {
                    if (!(e instanceof _.a)) throw e
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
        })(b.Component),
        I = function (e) {
          var a = e.query,
            n = e.queryRef,
            t = e.render,
            l = T()(a, n)
          return t({ fetchStatus: K.a.LOADED, data: l, error: null, retry: S.a })
        },
        A = function (e, a) {
          if (h.canUseDOM)
            return function (n) {
              var t = n.fetchPolicy,
                r = void 0 === t ? 'store-or-network' : t,
                i = n.render,
                s = n.variables,
                o = M()(e),
                u = l()(o, 2),
                c = u[0],
                d = u[1],
                m = Object(C.useCreateLocalApiErrorHandler)(a.errorConfig.context),
                f = w()(s),
                g = l()(f, 1)[0],
                p = b.useCallback(
                  function () {
                    d(g, { fetchPolicy: 'network-only' })
                  },
                  [d, g],
                )
              return (
                b.useLayoutEffect(
                  function () {
                    d(g, { fetchPolicy: r })
                  },
                  [r, d, g],
                ),
                c
                  ? b.createElement(
                      b.Suspense,
                      { fallback: b.createElement(x, { render: i }) },
                      b.createElement(
                        j,
                        { errorHandler: m(a.errorConfig.options || {}), key: c.fetchKey, retry: p },
                        function (a, n) {
                          return a
                            ? i({ fetchStatus: K.a.FAILED, error: a, data: null, retry: n })
                            : b.createElement(I, { query: e, queryRef: c, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (t) {
            t.fetchPolicy
            var r = t.render,
              i = t.variables,
              s = L()(),
              o = Object(C.useCreateLocalApiErrorHandler)(a.errorConfig.context),
              u = w()(i),
              c = l()(u, 1)[0],
              d = n.get(s)
            if (d) return d
            var m = b.lazy(function () {
              return E()(s, e, c)
                .toPromise()
                .then(
                  function (e) {
                    return r({ fetchStatus: K.a.LOADED, data: e, error: null, retry: S.a })
                  },
                  function (e) {
                    return e instanceof _.a
                      ? (o(a.errorConfig.options || {})(e),
                        r({ fetchStatus: K.a.FAILED, data: null, error: e, retry: S.a }))
                      : b.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(s, e).get.bind(n, s) }
                })
            })
            return b.createElement(b.Suspense, null, b.createElement(m, null))
          }
        }
    },
    rZgY: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
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
      a.default = t
    },
  },
])
//# sourceMappingURL=WIPED
