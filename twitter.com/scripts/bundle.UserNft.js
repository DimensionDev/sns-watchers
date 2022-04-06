;(window.webpackJsonp = window.webpackJsonp || []).push([
  [111],
  {
    '++ci': function (e, a, n) {
      'use strict'
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
      e.exports = l
    },
    '1Oiz': function (e, a, n) {
      'use strict'
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
      ;(t.hash = 'd6b701feecbeb528e41c1ca6ab7e67f7'), (e.exports = t)
    },
    '2DRG': function (e, a, n) {
      'use strict'
      n.r(a),
        n.d(a, 'userNftContainerQuery', function () {
          return ma
        }),
        n.d(a, 'UserNftScreenContainer', function () {
          return pa
        })
      var l,
        t = n('ERkP'),
        r = n.n(t),
        i = n('GOQE'),
        s = (n('YWiL'), n('rZeG')),
        o = n('yoO3'),
        c = n('5FtR'),
        u = n('kGix'),
        d = n('7JQg'),
        m = n('zCf4'),
        g = n('yiKp'),
        p = n.n(g),
        f = n('ddV6'),
        y = n.n(f),
        k = (n('z84I'), n('ho0z'), n('i4Oy')),
        v = n('v//M'),
        _ = n('3XMw'),
        b = n.n(_),
        h = n('2doW'),
        F = n('UPvq'),
        E = (n('uFXj'), n('t62R')),
        K = n('pjBI'),
        S = n('rHpw'),
        C = n('CVPS'),
        T = n.n(C),
        N = n('U+bB'),
        w = n('MWbm'),
        L = b.a.e83b141e,
        M = void 0 !== l ? l : (l = n('PfIX')),
        x = function (e) {
          var a,
            n,
            l,
            t,
            i,
            s = e.color,
            o = void 0 === s ? 'text' : s,
            c = e.isCondensed,
            u = e.openseaNftMetadataData,
            d = T()(M, u)
          if (
            !(
              (null != d && null !== (a = d.collection) && void 0 !== a && a.name) ||
              (null != d && null !== (n = d.collection) && void 0 !== n && n.metadata)
            ) ||
            'OpenseaCollectionMetadata' !==
              (null == d || null === (l = d.collection) || void 0 === l || null === (t = l.metadata) || void 0 === t
                ? void 0
                : t.__typename)
          )
            return null
          var m,
            g,
            p = d.collection.metadata,
            f = p.image_url,
            y = p.verified,
            k = c || !y,
            v = k ? 'subtext1' : 'body',
            _ = k ? D.collectionImageInline : D.collectionImage,
            h =
              ((m = null === (i = d.collection) || void 0 === i ? void 0 : i.name),
              (g = d.creator_username),
              m && g
                ? r.a.createElement(
                    E.b,
                    { color: o, size: v, weight: 'bold' },
                    r.a.createElement(b.a.I18NFormatMessage, { $i18n: 'fbe06ae0' }, m, g),
                  )
                : m
                ? r.a.createElement(E.b, { color: o, size: v }, m)
                : null)
          return r.a.createElement(
            w.a,
            { style: D.collectionTitle },
            f && r.a.createElement(N.a, { alt: '', source: f, style: _ }),
            r.a.createElement(
              w.a,
              null,
              k
                ? r.a.createElement(K.a, { color: o }, h, y ? r.a.createElement(E.b, { color: o, size: v }, L) : null)
                : r.a.createElement(r.a.Fragment, null, h, y ? r.a.createElement(E.b, { color: 'gray700' }, L) : null),
            ),
          )
        },
        D = S.a.create(function (e) {
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
        R = n('iyiT'),
        P = n('Wc+h')
      function O(e) {
        var a = e.text
        return r.a.createElement(E.b, { size: 'headline2', style: I.heading, weight: 'bold' }, a)
      }
      var I = S.a.create(function (e) {
          return { heading: { marginTop: e.spaces.space24, marginBottom: e.spaces.space12 } }
        }),
        A =
          (n('2G9S'),
          function (e) {
            if (e.length > 11) {
              var a = e.substring(0, 6),
                n = e.substring(e.length - 4)
              return ''.concat(a, '...').concat(n)
            }
            return e
          }),
        B = n('Irs7')
      function U(e) {
        var a = e.children
        return r.a.createElement(w.a, { style: H.list }, a)
      }
      function q(e) {
        var a = e.children
        return r.a.createElement(w.a, { style: H.item }, a)
      }
      function W(e) {
        var a = e.children,
          n = e.style
        return r.a.createElement(E.b, { style: [n, H.itemTitle] }, a)
      }
      var z,
        Q,
        H = S.a.create(function (e) {
          return {
            list: { display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' },
            item: { width: '40%', marginBottom: e.spaces.space16 },
            itemTitle: { color: e.colors.gray700 },
          }
        }),
        j = b.a.dcbace0b,
        V = b.a.d4741cb3,
        G = b.a.b748db08,
        Y = b.a.accae48c,
        X = b.a.h8fe11ab,
        Z = void 0 !== z ? z : (z = n('EPqq')),
        J = void 0 !== Q ? Q : (Q = n('EWGL')),
        $ = function (e) {
          var a = Object(B.b)(),
            n = T()(Z, e.nft),
            l = T()(J, e.smartContract),
            t =
              'ERC721' === (null == l ? void 0 : l.__typename) || 'ERC1155' === (null == l ? void 0 : l.__typename)
                ? l
                : void 0
          return t
            ? r.a.createElement(
                w.a,
                null,
                r.a.createElement(O, { text: j }),
                r.a.createElement(
                  U,
                  null,
                  r.a.createElement(
                    q,
                    null,
                    r.a.createElement(W, null, G),
                    r.a.createElement(
                      E.b,
                      {
                        color: 'text',
                        link: 'https://etherscan.io/address/'.concat(t.address),
                        onPress: function () {
                          a.scribe({ component: 'detail', element: 'etherscan_link', action: 'click' })
                        },
                        weight: 'medium',
                      },
                      A(t.address),
                      r.a.createElement(P.a, null),
                    ),
                  ),
                  r.a.createElement(
                    q,
                    null,
                    r.a.createElement(W, null, Y),
                    r.a.createElement(E.b, { weight: 'medium' }, A(n.token_id)),
                  ),
                  r.a.createElement(
                    q,
                    null,
                    r.a.createElement(W, null, V),
                    r.a.createElement(E.b, { weight: 'medium' }, t.network),
                  ),
                  r.a.createElement(
                    q,
                    null,
                    r.a.createElement(W, null, X),
                    r.a.createElement(E.b, { weight: 'medium' }, t.__typename),
                  ),
                ),
              )
            : null
        },
        ee = (n('1t7P'), n('jQ/y'), n('hBvt'), b.a.ffd9cfe6)
      function ae(e) {
        var a = e.onPress
        return r.a.createElement(E.b, { color: 'link', onPress: a, style: fe.link, weight: 'bold' }, ee)
      }
      var ne,
        le,
        te,
        re,
        ie,
        se,
        oe,
        ce,
        ue,
        de,
        me,
        ge,
        pe,
        fe = S.a.create(function (e) {
          return { link: { marginVertical: e.spaces.space12 } }
        }),
        ye = b.a.ddf0ba7e,
        ke = void 0 !== ne ? ne : (ne = n('rZgY')),
        ve = function (e) {
          var a,
            n,
            l,
            t,
            i = T()(ke, e.openseaNftMetadataData),
            s = r.a.useState(!1),
            o = y()(s, 2),
            c = o[0],
            u = o[1],
            d = r.a.useState(!1),
            m = y()(d, 2),
            g = m[0],
            p = m[1]
          if (
            !(
              (null != i && null !== (a = i.collection) && void 0 !== a && a.name) ||
              (null != i && null !== (n = i.collection) && void 0 !== n && n.metadata)
            ) ||
            'OpenseaCollectionMetadata' !==
              (null == i || null === (l = i.collection) || void 0 === l || null === (t = l.metadata) || void 0 === t
                ? void 0
                : t.__typename)
          )
            return null
          var f = i.collection.metadata.description
          return r.a.createElement(
            w.a,
            null,
            r.a.createElement(O, { text: ye }),
            r.a.createElement(x, { openseaNftMetadataData: i }),
            f ? r.a.createElement(E.b, { getTextOverflow: u, numberOfLines: g ? void 0 : 4 }, f) : null,
            f && c && !g
              ? r.a.createElement(ae, {
                  onPress: function () {
                    p(!g)
                  },
                })
              : null,
          )
        },
        _e = b.a.e6aa52a9,
        be = void 0 !== le ? le : (le = n('Gaii')),
        he = void 0 !== te ? te : (te = n('6o1g')),
        Fe = function (e) {
          var a = Object(B.b)(),
            n = T()(be, e.openseaNftMetadataData),
            l = T()(he, e.smartContractData),
            t = n.creator_address,
            i = n.creator_username,
            s =
              'ERC721' === (null == l ? void 0 : l.__typename) || 'ERC1155' === (null == l ? void 0 : l.__typename)
                ? null == l
                  ? void 0
                  : l.network
                : '',
            o = i ? 'https://opensea.io/'.concat(i) : t ? 'https://opensea.io/'.concat(t) : ''
          return t || (i && s)
            ? r.a.createElement(
                w.a,
                null,
                r.a.createElement(O, { text: _e }),
                t
                  ? r.a.createElement(
                      E.b,
                      {
                        color: 'text',
                        link: o,
                        onPress: function () {
                          a.scribe({ component: 'detail', element: 'opensea_profile_link', action: 'click' })
                        },
                        weight: 'bold',
                      },
                      A(t),
                      o ? r.a.createElement(P.a, null) : null,
                    )
                  : null,
                s && i
                  ? r.a.createElement(K.a, null, r.a.createElement(E.b, null, i), r.a.createElement(E.b, null, s))
                  : null,
              )
            : null
        },
        Ee = b.a.e36287c6,
        Ke = function (e) {
          var a = T()(void 0 !== re ? re : (re = n('++ci')), e.openseaNftMetadataData),
            l = r.a.useState(!1),
            t = y()(l, 2),
            i = t[0],
            s = t[1],
            o = r.a.useState(!1),
            c = y()(o, 2),
            u = c[0],
            d = c[1]
          return null != a && a.description
            ? r.a.createElement(
                w.a,
                null,
                r.a.createElement(O, { text: Ee }),
                r.a.createElement(
                  E.b,
                  { getTextOverflow: s, numberOfLines: u ? void 0 : 4 },
                  null == a ? void 0 : a.description,
                ),
                i && !u
                  ? r.a.createElement(ae, {
                      onPress: function () {
                        d(!u)
                      },
                    })
                  : null,
              )
            : null
        },
        Se = b.a.eb023c93,
        Ce = b.a.ad5dfe8f,
        Te = b.a.hb7d1bb4,
        Ne = b.a.i859a9d3,
        we = void 0 !== ie ? ie : (ie = n('R+uT')),
        Le = void 0 !== se ? se : (se = n('1Oiz')),
        Me = function (e) {
          var a = Object(B.b)(),
            n = r.a.useState(!1),
            l = y()(n, 2),
            t = l[0],
            i = l[1],
            s = r.a.useState(!1),
            o = y()(s, 2),
            c = o[0],
            u = o[1],
            d = T()(we, e.nft),
            m = T()(Le, e.smartContract),
            g =
              'ERC721' === (null == m ? void 0 : m.__typename) || 'ERC1155' === (null == m ? void 0 : m.__typename)
                ? m
                : void 0,
            p =
              null != g && g.address && d.token_id
                ? 'https://opensea.io/assets/'.concat(g.address, '/').concat(d.token_id)
                : 'https://opensea.io/'
          return r.a.createElement(
            w.a,
            null,
            r.a.createElement(O, { text: Se }),
            r.a.createElement(E.b, { getTextOverflow: i, numberOfLines: c ? void 0 : 4 }, Ce),
            r.a.createElement(
              E.b,
              {
                color: 'text',
                link: 'https://help.twitter.com/en/using-twitter/twitter-blue-labs#nft',
                style: xe.helpLink,
                weight: 'bold',
              },
              Ne,
            ),
            t && !c
              ? r.a.createElement(ae, {
                  onPress: function () {
                    u(!c)
                  },
                })
              : null,
            r.a.createElement(
              w.a,
              { style: xe.topBorder },
              r.a.createElement(
                E.b,
                {
                  align: 'center',
                  link: p,
                  onPress: function () {
                    a.scribe({ component: 'detail', element: 'opensea_asset_link', action: 'click' })
                  },
                  weight: 'bold',
                },
                Te,
                r.a.createElement(P.a, null),
              ),
            ),
          )
        },
        xe = S.a.create(function (e) {
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
        Re = n('cFuS'),
        Pe = n('88ay'),
        Oe = n('IMA+'),
        Ie = void 0 !== oe ? oe : (oe = n('M2DF')),
        Ae = b.a.c6000492,
        Be = function (e) {
          var a = T()(Ie, e.user).legacy,
            n = r.a.useContext(De.a).loggedInUserId,
            l = null == a ? void 0 : a.profile_image_url_https,
            t = a.name,
            i = a.screen_name,
            s = a && n ? Object(Pe.e)({ loggedInUserId: n, userId: null == a ? void 0 : a.id_str }) : null
          return l && t && i
            ? r.a.createElement(
                w.a,
                null,
                r.a.createElement(O, { text: Ae }),
                r.a.createElement(Oe.a, {
                  avatarUri: l,
                  decoration: s,
                  displayMode: 'UserDetailed',
                  isFollowedBy: a.followed_by,
                  isProtected: a.protected,
                  isVerified: a.verified,
                  name: t,
                  promotedItemType: Re.c.USER,
                  screenName: i,
                  style: Ue.userCell,
                  userId: a.id_str,
                  withFollowsYou: !0,
                }),
              )
            : null
        },
        Ue = S.a.create(function (e) {
          return { userCell: { marginHorizontal: -1 * S.a.theme.spacesPx.space16 } }
        }),
        qe = b.a.e83b141e,
        We = void 0 !== ce ? ce : (ce = n('QKWn')),
        ze = void 0 !== ue ? ue : (ue = n('H2N0')),
        Qe = function (e) {
          var a,
            n,
            l,
            t,
            i = T()(ze, e.openseaNftMetadataData),
            s = T()(We, e.nft).token_id
          return r.a.createElement(
            w.a,
            null,
            r.a.createElement(
              K.a,
              null,
              r.a.createElement(
                E.b,
                { size: 'subtext1', weight: 'bold' },
                (null == i || null === (a = i.collection) || void 0 === a || null === (n = a.metadata) || void 0 === n
                  ? void 0
                  : n.name) || '',
              ),
              null != i &&
                null !== (l = i.collection) &&
                void 0 !== l &&
                null !== (t = l.metadata) &&
                void 0 !== t &&
                t.verified
                ? r.a.createElement(E.b, { color: 'gray700', size: 'subtext1' }, qe)
                : null,
            ),
            r.a.createElement(E.b, { size: 'title3', weight: 'bold' }, (null == i ? void 0 : i.name) || '#'.concat(s)),
          )
        },
        He = (n('M+/F'), void 0 !== de ? de : (de = n('TP6m'))),
        je = b.a.eadbd438,
        Ve = function (e) {
          var a = T()(He, e.openseaNftMetadataData),
            n = r.a.useState(!1),
            l = y()(n, 2),
            t = l[0],
            i = l[1]
          r.a.useEffect(
            function () {
              var e
              null !== (e = a.traits) && void 0 !== e && e.length && i(a.traits.length > 6)
            },
            [a.traits],
          )
          if (null == a || !a.traits || null == a || !a.traits.length) return null
          var s = t ? a.traits.slice(0, 6) : a.traits
          return r.a.createElement(
            w.a,
            null,
            r.a.createElement(O, { text: je }),
            r.a.createElement(
              U,
              null,
              s.map(function (e) {
                return r.a.createElement(
                  q,
                  { key: e.trait_type },
                  e.trait_type ? r.a.createElement(W, { style: Ge.uppercase }, e.trait_type) : null,
                  r.a.createElement(E.b, { weight: 'medium' }, e.value),
                )
              }),
            ),
            t
              ? r.a.createElement(ae, {
                  onPress: function () {
                    i(!t)
                  },
                })
              : null,
          )
        },
        Ge = S.a.create(function (e) {
          return { uppercase: { textTransform: 'uppercase' } }
        }),
        Ye = void 0 !== me ? me : (me = n('4k/N')),
        Xe = S.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              paddingTop: e.spaces.space16,
              paddingBottom: e.spaces.space32,
              paddingHorizontal: e.spaces.space24,
            },
            sideDrawer: {
              width: R.a + 100,
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
            l = T()(Ye, e.user),
            t = e.isBottomDrawer
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
          var i = t ? Xe.bottomDrawer : Xe.sideDrawer
          return r.a.createElement(
            w.a,
            { style: [Xe.root, i] },
            r.a.createElement(Qe, {
              nft: l.nft_avatar_metadata,
              openseaNftMetadataData: l.nft_avatar_metadata.metadata,
            }),
            r.a.createElement(Fe, {
              openseaNftMetadataData: l.nft_avatar_metadata.metadata,
              smartContractData: l.nft_avatar_metadata.smart_contract,
            }),
            r.a.createElement(Be, { user: l }),
            r.a.createElement(Ke, { openseaNftMetadataData: l.nft_avatar_metadata.metadata }),
            r.a.createElement(ve, { openseaNftMetadataData: l.nft_avatar_metadata.metadata }),
            r.a.createElement(Ve, { openseaNftMetadataData: l.nft_avatar_metadata.metadata }),
            r.a.createElement($, { nft: l.nft_avatar_metadata, smartContract: l.nft_avatar_metadata.smart_contract }),
            r.a.createElement(Me, { nft: l.nft_avatar_metadata, smartContract: l.nft_avatar_metadata.smart_contract }),
          )
        },
        Je = n('wiP2'),
        $e = n('/yvb'),
        ea = n('RCZO'),
        aa = n('mpWK'),
        na = n('NP4V'),
        la = b.a.c1a40fd4,
        ta = b.a.ef1c2c77,
        ra = b.a.gd912af1,
        ia = b.a.f1d9930c,
        sa = b.a.a0e81a2e,
        oa = void 0 !== ge ? ge : (ge = n('FklY')),
        ca = S.a.create(function (e) {
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
        ua = function (e) {
          var a,
            n,
            l,
            t,
            i,
            s,
            o,
            u,
            d,
            g,
            f,
            _ = Object(B.b)(),
            b = e.fetchStatus,
            K = e.screenName,
            S = e.user,
            C = r.a.useState(!1),
            N = y()(C, 2),
            L = N[0],
            M = N[1],
            D = r.a.useState(!0),
            P = y()(D, 2),
            O = P[0],
            I = P[1],
            A = Object(ea.h)(),
            U = A.handleMediaDetailZoomed,
            q = A.handleMediaItemTapped,
            W = A.hideButtons,
            z = Object(m.f)(),
            Q = T()(oa, S),
            H = k.a.get('window').width - R.a > R.b
          if (null == Q || null === (a = Q.legacy) || void 0 === a || !a.profile_image_url_https) return null
          var j = {
              id_str: null == Q || null === (n = Q.legacy) || void 0 === n ? void 0 : n.id_str,
              expanded_url: null == Q || null === (l = Q.legacy) || void 0 === l ? void 0 : l.profile_image_url_https,
              media_url_https:
                null == Q || null === (t = Q.legacy) || void 0 === t ? void 0 : t.profile_image_url_https,
              ext_alt_text: '',
              type: 'photo',
              original_info: { width: 400, height: 400 },
            },
            V =
              'ApiMediaExtensions' ===
              (null == Q ||
              null === (i = Q.legacy) ||
              void 0 === i ||
              null === (s = i.profile_image_extensions) ||
              void 0 === s
                ? void 0
                : s.__typename)
                ? null == Q || null === (o = Q.legacy) || void 0 === o
                  ? void 0
                  : o.profile_image_extensions
                : {},
            G =
              ('ApiMediaColorExtension' ===
                (null == V || null === (u = V.mediaColor) || void 0 === u ? void 0 : u.__typename) &&
                (null == V ||
                null === (d = V.mediaColor) ||
                void 0 === d ||
                null === (g = d.r) ||
                void 0 === g ||
                null === (f = g.ok) ||
                void 0 === f
                  ? void 0
                  : f.palette)) ||
              [],
            Y = G.map(function (e) {
              return p()(p()({}, e), {}, { rgb: { blue: e.rgb.blue, red: e.rgb.red, green: e.rgb.green } })
            }),
            X = G && Object(ea.e)(Y),
            Z = function () {
              z.goBack({ backLocation: '/'.concat(K) })
            },
            J = function (e) {
              _.scribe({ element: 'details_button', action: 'click' }), e.stopPropagation(), e.preventDefault(), M(!0)
            },
            $ = function () {
              return r.a.createElement(h.a, {
                dataSaver: !1,
                dominantColor: X.rgb,
                mediaIndex: 0,
                mediaItems: [j],
                onDismiss: Z,
                onMediaDetailZoomed: U,
                onTap: q,
              })
            },
            ee = function () {
              return r.a.createElement(c.a, { to: '/'.concat(K) })
            },
            ae = function () {
              I(!O)
            },
            ne = function (e) {
              return e
                ? null
                : r.a.createElement($e.a, {
                    accessibilityLabel: O ? ra : ta,
                    dominantColor: X.rgb,
                    hoverLabel: { label: O ? ia : sa },
                    icon: O ? r.a.createElement(aa.a, null) : r.a.createElement(na.a, null),
                    onClick: ae,
                    type: 'onMediaDominantColorFilled',
                  })
            },
            le = function (e) {
              var a,
                n,
                l,
                t,
                i =
                  null != Q && null !== (a = Q.legacy) && void 0 !== a && a.profile_image_url_https
                    ? Q.legacy.profile_image_url_https
                    : void 0
              return r.a.createElement(
                F.a,
                {
                  backgroundColor: X,
                  footerButtons:
                    !L &&
                    e &&
                    ('OpenseaNFTMetadata' ===
                    (null === (n = Q.nft_avatar_metadata) || void 0 === n || null === (l = n.metadata) || void 0 === l
                      ? void 0
                      : l.__typename)
                      ? r.a.createElement(
                          w.a,
                          { style: ca.footer },
                          r.a.createElement(
                            E.b,
                            { color: 'white', size: 'title4', style: ca.footerTitle },
                            Q.nft_avatar_metadata.metadata.name,
                          ),
                          r.a.createElement(x, {
                            color: 'white',
                            isCondensed: !0,
                            openseaNftMetadataData:
                              null === (t = Q.nft_avatar_metadata) || void 0 === t ? void 0 : t.metadata,
                          }),
                          r.a.createElement($e.a, { onPress: J, type: 'onMediaOutlined' }, la),
                        )
                      : null),
                  forceModalStyle: !0,
                  hideButtons: W,
                  mediaUrl: i,
                  onCloseButtonPress: Z,
                  topRightButton: ne(e),
                },
                r.a.createElement(v.a, { fetchStatus: b, render: $, renderFailure: ee, retryable: !1 }),
              )
            }
          return r.a.createElement(
            Je.a.Configure,
            { headerless: !0 },
            H
              ? r.a.createElement(
                  w.a,
                  { style: ca.container },
                  r.a.createElement(w.a, { style: ca.media }, le()),
                  O ? r.a.createElement(Ze, { user: Q }) : null,
                )
              : r.a.createElement(
                  w.a,
                  { style: [ca.container, ca.verticalLayout] },
                  r.a.createElement(w.a, { style: ca.media }, le(!0)),
                  L
                    ? r.a.createElement(
                        w.a,
                        { style: ca.bottomDrawerContainer },
                        r.a.createElement(Ze, { isBottomDrawer: !0, user: Q }),
                      )
                    : null,
                ),
          )
        },
        da = n('n0Rl'),
        ma = void 0 !== pe ? pe : (pe = n('2agG')),
        ga = Object(da.b)(ma, { errorConfig: { options: i.a, context: 'USER_NFT_SCREEN_CONTEXT' } }),
        pa = function () {
          var e = Object(m.h)().screenName || '',
            a = r.a.useMemo(
              function () {
                return { screenName: Object(s.a)(e) }
              },
              [e],
            )
          return r.a.createElement(ga, {
            render: function (a) {
              var n,
                l = a.data,
                t = a.fetchStatus,
                i = a.retry,
                m = null == l || null === (n = l.user) || void 0 === n ? void 0 : n.result
              return m && 'User' === m.__typename && !m.has_nft_avatar
                ? r.a.createElement(c.a, { to: '/'.concat(Object(s.a)(e), '/photo') })
                : r.a.createElement(
                    d.c,
                    { namespace: { page: 'nft', section: 'avatar' } },
                    r.a.createElement(
                      o.a,
                      null,
                      r.a.createElement(ua, {
                        fetchStatus: Object(u.b)(t, 'User' === (null == m ? void 0 : m.__typename)),
                        onRetry: i,
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
      var l,
        t,
        r,
        i,
        s,
        o,
        c,
        u,
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
                  { kind: 'Literal', name: 's', value: 50 },
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
                                    selections: (c = [
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
                                  { kind: 'InlineFragment', selections: c, type: 'ERC1155', abstractKey: null },
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
                                                  (u = {
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
                                      u,
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
                          { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
                        ],
                        type: 'User',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    filters: null,
                    handle: 'user',
                    key: '',
                    kind: 'LinkedHandle',
                    name: 'result',
                  },
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'x57PpySOqqq70naY41cRgw',
            metadata: {},
            name: 'userNftContainer_Query',
            operationKind: 'query',
            text: null,
          },
        }
      ;(d.hash = '3fc6b9727d078820e10a815ff0ea6680'), (e.exports = d)
    },
    '35hZ': function (e, a, n) {
      'use strict'
      var l = n('EORa').useTrackLoadQueryInRender,
        t = n('h2Du'),
        r = n('6zvL'),
        i = n('PJTX'),
        s = n('I9iR'),
        o = (n('ERkP').useDebugValue, n('e1/f').__internal),
        c = o.fetchQueryDeduped,
        u = o.fetchQuery
      n('/2Cm')
      e.exports = function (e, a, n) {
        l()
        var o,
          d = i(),
          m = a.fetchKey,
          g = a.fetchPolicy,
          p = a.source,
          f = a.variables,
          y = a.networkCacheConfig,
          k = r(e, f, y)
        if ('PreloadedQuery_DEPRECATED' === a.kind)
          k.request.node.params.name !== a.name && s(!1),
            (o = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: m,
              fetchObservable: c(d, k.request.identifier, function () {
                return d === a.environment && null != p
                  ? d.executeWithSource({ operation: k, source: p })
                  : d.execute({ operation: k })
              }),
              fetchPolicy: g,
              query: k,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var v = u(d, k)
          o = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != p && d === a.environment ? p.ifEmpty(v) : (a.environment, v),
            fetchKey: m,
            fetchPolicy: g,
            query: k,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return t(o)
      }
    },
    '4k/N': function (e, a, n) {
      'use strict'
      var l,
        t = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'NftDetailDrawer_user',
          selections: [
            { args: null, kind: 'FragmentSpread', name: 'NftOwner_user' },
            {
              alias: null,
              args: null,
              concreteType: 'NFT',
              kind: 'LinkedField',
              name: 'nft_avatar_metadata',
              plural: !1,
              selections: [
                (l = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                { args: null, kind: 'FragmentSpread', name: 'NftBlockchainDetails_nft' },
                { args: null, kind: 'FragmentSpread', name: 'NftFooter_nft' },
                { args: null, kind: 'FragmentSpread', name: 'NftTitle_nft' },
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
              ],
              storageKey: null,
            },
          ],
          type: 'User',
          abstractKey: null,
        }
      ;(t.hash = '3c57cab07c96dda515d5ff5c7c8ecdcc'), (e.exports = t)
    },
    '6o1g': function (e, a, n) {
      'use strict'
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
      ;(t.hash = '50ce0f26cdfdc0fa27fca888982f423c'), (e.exports = t)
    },
    EPqq: function (e, a, n) {
      'use strict'
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
      e.exports = l
    },
    EWGL: function (e, a, n) {
      'use strict'
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
      ;(t.hash = 'c0b484be450a7f9903a3de229b0b577a'), (e.exports = t)
    },
    FklY: function (e, a, n) {
      'use strict'
      var l,
        t = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'UserNftScreen_user',
          selections: [
            { args: null, kind: 'FragmentSpread', name: 'NftDetailDrawer_user' },
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
              kind: 'RequiredField',
              field: {
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
              action: 'THROW',
              path: 'legacy',
            },
          ],
          type: 'User',
          abstractKey: null,
        }
      ;(t.hash = '938148f2be1375463d7f4d7a663b8351'), (e.exports = t)
    },
    Gaii: function (e, a, n) {
      'use strict'
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
      e.exports = l
    },
    H2N0: function (e, a, n) {
      'use strict'
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
      ;(t.hash = '9c7c85c01c5673e23e86c751b663a656'), (e.exports = t)
    },
    M2DF: function (e, a, n) {
      'use strict'
      var l = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'NftOwner_user',
        selections: [
          {
            kind: 'RequiredField',
            field: {
              alias: null,
              args: null,
              concreteType: 'ApiUser',
              kind: 'LinkedField',
              name: 'legacy',
              plural: !1,
              selections: [
                { alias: null, args: null, kind: 'ScalarField', name: 'id_str', storageKey: null },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'followed_by', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.followed_by',
                },
                { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'profile_image_url_https', storageKey: null },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.protected',
                },
                { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.verified',
                },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '7d230d7d65eb53bd5eb651214723c7dc',
      }
      e.exports = l
    },
    NP4V: function (e, a, n) {
      'use strict'
      var l = n('yiKp'),
        t = n.n(l),
        r = n('ERkP'),
        i = n.n(r),
        s = n('Lsrn'),
        o = n('shC7'),
        c = n('k/Ka'),
        u = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            t()(
              t()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style, o.a.getConstants().isRTL && s.a.iconRTL],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M4.656 12l8.72-8.72c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0l-9.25 9.25c-.294.292-.294.767 0 1.06l9.25 9.25c.145.146.337.22.53.22s.383-.073.53-.22c.292-.293.292-.768 0-1.06L4.655 12z',
              }),
              i.a.createElement('path', {
                d: 'M12.465 12l8.72-8.72c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0l-9.25 9.25c-.294.292-.294.767 0 1.06l9.25 9.25c.145.146.337.22.53.22s.383-.073.53-.22c.292-.293.292-.768 0-1.06L12.464 12z',
              }),
            ),
          )
        }
      ;(u.metadata = { width: 24, height: 24 }), (a.a = u)
    },
    PfIX: function (e, a, n) {
      'use strict'
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
      e.exports = l
    },
    QKWn: function (e, a, n) {
      'use strict'
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
      e.exports = l
    },
    'R+uT': function (e, a, n) {
      'use strict'
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
      e.exports = l
    },
    TP6m: function (e, a, n) {
      'use strict'
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
      e.exports = l
    },
    XiYe: function (e, a, n) {
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
    e5HP: function (e, a, n) {
      'use strict'
      n.d(a, 'a', function () {
        return D
      })
      var l = n('VrFO'),
        t = n.n(l),
        r = n('Y9Ll'),
        i = n.n(r),
        s = n('5Yy7'),
        o = n.n(s),
        c = n('2VqO'),
        u = n.n(c),
        d = n('KEM+'),
        m = n.n(d),
        g = n('ERkP'),
        p = n.n(g),
        f = n('t62R'),
        y = n('3XMw'),
        k = n.n(y),
        v = n('rHpw'),
        _ = n('MWbm'),
        b = n('yiKp'),
        h = n.n(b),
        F = n('Lsrn'),
        E = n('k/Ka'),
        K = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            h()(
              h()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [F.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            p.a.createElement(
              'g',
              null,
              p.a.createElement('path', {
                d: 'M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1zm5.05 12.48c0 .48-.39.87-.88.87-.477 0-.87-.393-.87-.87V9.94l-6.85 6.85c-.163.166-.387.26-.62.26-.233 0-.457-.094-.62-.26-.338-.341-.338-.899 0-1.24l6.85-6.85h-3.54c-.477 0-.87-.393-.87-.87 0-.49.39-.88.87-.88h5.65c.11 0 .23.03.33.07.11.04.2.1.29.19.09.09.15.18.19.29.04.1.07.22.07.33v5.65z',
              }),
            ),
          )
        }
      K.metadata = { width: 24, height: 24 }
      var S = K,
        C = n('uFYP'),
        T = k.a.f1a1b790,
        N = k.a.if2bf8b3,
        w = k.a.f3624b5c,
        L = k.a.b4b3b113,
        M = k.a.be22205f,
        x = k.a.hcbbe447,
        D = (function (e) {
          o()(n, e)
          var a = u()(n)
          function n() {
            return t()(this, n), a.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    a = e.color,
                    n = e.nativeID,
                    l = e.style,
                    t = e.withCircleIcon ? S : C.a
                  return p.a.createElement(
                    _.a,
                    { style: [R.root, l] },
                    p.a.createElement(t, { style: [R.icon, a && R[a]] }),
                    p.a.createElement(f.b, { color: a, nativeID: n, size: 'subtext2' }, this._getPromotedLabel()),
                  )
                },
              },
              {
                key: '_getPromotedLabel',
                value: function () {
                  var e = this.props,
                    a = e.contentAuthorId,
                    n = e.label,
                    l = e.promotedContent,
                    t = l.adMetadataContainer,
                    r = l.advertiser,
                    i = l.advertiser_name,
                    s = l.disclosure_type,
                    o = a && r && a === r.id_str,
                    c = 'string' == typeof s && 'political' === s.toLowerCase(),
                    u = 'string' == typeof s && 'issue' === s.toLowerCase(),
                    d = !(!t || 'POLITICAL' !== t.disclaimerType) || c,
                    m = !(!t || 'ISSUE' !== t.disclaimerType) || u,
                    g = (t || {}).removePromotedAttributionForPreroll
                  return (
                    n ||
                    (!i || o || g
                      ? d
                        ? w
                        : m
                        ? M
                        : N
                      : d
                      ? L({ fullName: i })
                      : m
                      ? x({ fullName: i })
                      : T({ fullName: i }))
                  )
                },
              },
            ]),
            n
          )
        })(p.a.Component)
      m()(D, 'defaultProps', { color: 'gray700', withCircleIcon: !1 })
      var R = v.a.create(function (e) {
        return {
          root: { alignItems: 'center', flexDirection: 'row' },
          icon: { color: e.colors.gray700, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
          gray700: { color: e.colors.gray700 },
          white: { color: e.colors.white },
        }
      })
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
    k5o5: function (e, a, n) {
      'use strict'
      var l = n('IGGJ')(n('K1iM')),
        t = n('EORa'),
        r = t.loadQuery,
        i = t.useTrackLoadQueryInRender,
        s = n('XiYe'),
        o = n('PJTX'),
        c = n('ERkP'),
        u = c.useCallback,
        d = c.useEffect,
        m = c.useRef,
        g = c.useState,
        p = n('e1/f').getRequest,
        f = { kind: 'NullQueryReference' }
      function y(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== p(e).params.metadata.live
      }
      e.exports = function (e, a) {
        var n = null != a ? a : f,
          t = o()
        i()
        var c = s(),
          p = m(new Set([n])),
          k = g(function () {
            return n
          }),
          v = k[0],
          _ = k[1],
          b = g(function () {
            return n
          }),
          h = b[0],
          F = b[1]
        n !== h && (p.current.add(n), F(n), _(n))
        var E = u(
            function () {
              c.current && (p.current.add(f), _(f))
            },
            [c],
          ),
          K = u(
            function (a, n) {
              var l =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (c.current) {
                var i,
                  s = r(null !== (i = null == n ? void 0 : n.__environment) && void 0 !== i ? i : t, e, a, l)
                p.current.add(s), _(s)
              }
            },
            [t, e, _, c],
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
              var a = p.current
              if (c.current) {
                var n,
                  t = (0, l.default)(a)
                try {
                  for (t.s(); !(n = t.n()).done; ) {
                    var r = n.value
                    if (r === v) break
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
            [v, c, K, e],
          ),
          d(
            function () {
              return function () {
                var a,
                  n = (0, l.default)(p.current)
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
          ['NullQueryReference' === v.kind ? null : v, K, E]
        )
      }
    },
    mpWK: function (e, a, n) {
      'use strict'
      var l = n('yiKp'),
        t = n.n(l),
        r = n('ERkP'),
        i = n.n(r),
        s = n('Lsrn'),
        o = n('shC7'),
        c = n('k/Ka'),
        u = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            t()(
              t()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style, o.a.getConstants().isRTL && s.a.iconRTL],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M21.185 11.47l-9.25-9.25c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l8.72 8.72-8.72 8.72c-.294.294-.294.77 0 1.062.145.146.337.22.53.22s.383-.073.53-.22l9.25-9.25c.293-.295.293-.77 0-1.062z',
              }),
              i.a.createElement('path', {
                d: 'M13.376 11.47l-9.25-9.25c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l8.72 8.72-8.72 8.72c-.294.294-.294.77 0 1.062.146.145.337.218.53.218s.384-.073.53-.22l9.25-9.25c.293-.293.293-.767 0-1.06z',
              }),
            ),
          )
        }
      ;(u.metadata = { width: 24, height: 24 }), (a.a = u)
    },
    n0Rl: function (e, a, n) {
      'use strict'
      n.d(a, 'b', function () {
        return B
      })
      var l = n('ddV6'),
        t = n.n(l),
        r = n('VrFO'),
        i = n.n(r),
        s = n('Y9Ll'),
        o = n.n(s),
        c = n('1Pcy'),
        u = n.n(c),
        d = n('5Yy7'),
        m = n.n(d),
        g = n('2VqO'),
        p = n.n(g),
        f = n('KEM+'),
        y = n.n(f),
        k = (n('2G9S'), n('lTEL'), n('7x/C'), n('87if'), n('ZUdG'), n('kYxP'), n('ERkP')),
        v = n.n(k),
        _ = n('pXBW'),
        b = n('6/RC'),
        h = n('P74S'),
        F = n.n(h),
        E = n('kGix')
      n.d(a, 'a', function () {
        return E.a
      })
      var K = n('tI3i'),
        S = n.n(K),
        C = n('fs1G'),
        T = n('0KEI'),
        N = n('VYI2'),
        w = n.n(N),
        L = n('35hZ'),
        M = n.n(L),
        x = n('k5o5'),
        D = n.n(x),
        R = n('PJTX'),
        P = n.n(R),
        O = function (e) {
          return (0, e.render)({ fetchStatus: E.a.LOADING, data: null, error: null, retry: C.a })
        },
        I = (function (e) {
          m()(n, e)
          var a = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var l = arguments.length, t = new Array(l), r = 0; r < l; r++) t[r] = arguments[r]
            return (e = a.call.apply(a, [this].concat(t))), y()(u()(e), 'state', { error: null }), e
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
        })(v.a.Component),
        A = function (e) {
          var a = e.query,
            n = e.queryRef,
            l = e.render,
            t = M()(a, n)
          return l({ fetchStatus: E.a.LOADED, data: t, error: null, retry: C.a })
        },
        B = function (e, a) {
          if (b.canUseDOM)
            return function (n) {
              var l = n.fetchPolicy,
                r = void 0 === l ? 'store-or-network' : l,
                i = n.render,
                s = n.variables,
                o = D()(e),
                c = t()(o, 2),
                u = c[0],
                d = c[1],
                m = Object(T.useCreateLocalApiErrorHandler)(a.errorConfig.context),
                g = w()(s),
                p = t()(g, 1)[0],
                f = v.a.useCallback(
                  function () {
                    d(p, { fetchPolicy: 'network-only' })
                  },
                  [d, p],
                )
              return (
                v.a.useLayoutEffect(
                  function () {
                    d(p, { fetchPolicy: r })
                  },
                  [r, d, p],
                ),
                u
                  ? v.a.createElement(
                      v.a.Suspense,
                      { fallback: v.a.createElement(O, { render: i }) },
                      v.a.createElement(
                        I,
                        { errorHandler: m(a.errorConfig.options || {}), key: u.fetchKey, retry: f },
                        function (a, n) {
                          return a
                            ? i({ fetchStatus: E.a.FAILED, error: a, data: null, retry: n })
                            : v.a.createElement(A, { query: e, queryRef: u, render: i })
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
              o = Object(T.useCreateLocalApiErrorHandler)(a.errorConfig.context),
              c = w()(i),
              u = t()(c, 1)[0],
              d = n.get(s)
            if (d) return d
            var m = v.a.lazy(function () {
              return F()(s, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return (
                      S()(e, 'Fetch query returned empty data'),
                      r({ fetchStatus: E.a.LOADED, data: e, error: null, retry: C.a })
                    )
                  },
                  function (e) {
                    return e instanceof _.a
                      ? (o(a.errorConfig.options || {})(e),
                        r({ fetchStatus: E.a.FAILED, data: null, error: e, retry: C.a }))
                      : v.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(s, e).get.bind(n, s) }
                })
            })
            return v.a.createElement(v.a.Suspense, null, v.a.createElement(m, null))
          }
        }
    },
    rZgY: function (e, a, n) {
      'use strict'
      var l = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'NftCollectionDetails_openseaNftMetadata',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'creator_username', storageKey: null },
          { args: null, kind: 'FragmentSpread', name: 'NftCollectionTitle_openseaNftMetadata' },
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
        ],
        type: 'OpenseaNFTMetadata',
        abstractKey: null,
        hash: '4eadd236a5ad089f275c79212a53b8a9',
      }
      e.exports = l
    },
    uFYP: function (e, a, n) {
      'use strict'
      var l = n('yiKp'),
        t = n.n(l),
        r = n('ERkP'),
        i = n.n(r),
        s = n('Lsrn'),
        o = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(o.a)(
            'svg',
            t()(
              t()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (a.a = c)
    },
  },
])
//# sourceMappingURL=WIPED
