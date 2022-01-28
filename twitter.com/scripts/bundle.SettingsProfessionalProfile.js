;(window.webpackJsonp = window.webpackJsonp || []).push([
  [88],
  {
    '6kA7': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'ProfessionalProfileScreen', function () {
          return W
        })
      var a = t('ddV6'),
        o = t.n(a),
        r = (t('ho0z'), t('mC9n')),
        i = t('ERkP'),
        s = t.n(i),
        c = t('1YZw'),
        l = t('G6rE'),
        u = t('rxPX'),
        p = t('0KEI'),
        d = Object(u.a)()
          .propsFromState(function () {
            return { loggedInUser: l.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              addToast: c.b,
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_PROFESSIONAL_PROFILE_SCREEN',
              ),
              switchToNonProfessional: l.e.switchToNonProfessional,
              updateProfessionalCategoryDisplay: l.e.updateProfessionalCategoryDisplay,
              updateProfessionalType: l.e.updateProfessionalType,
            }
          })
          .withAnalytics({ page: 'professional_settings' }),
        f = t('jHSc'),
        m = t('3XMw'),
        b = t.n(m),
        y = t('tI3i'),
        g = t.n(y),
        h = t('MWbm'),
        L = t('feu+'),
        w = t('cHvH'),
        C = t('rHpw'),
        E = t('sgih'),
        T = t('/yvb'),
        D = b.a.cfd2f35d,
        k = { actionLabel: b.a.ia492079, secondaryActionLabel: b.a.a9b5e3a9 },
        P = {
          menuItemLabel: b.a.cb55eccd,
          confirmationTitleLabel: b.a.f6c453fb,
          confirmationDescriptionLabel: b.a.a8be809d,
        },
        S = {
          menuItemLabel: b.a.hbb1af08,
          confirmationTitleLabel: b.a.g3f74901,
          confirmationDescriptionLabel: b.a.f3bcfacf,
        },
        v = {
          menuItemLabel: b.a.d0c3f02d,
          confirmationTitleLabel: b.a.a01e84ef,
          confirmationDescriptionLabel: b.a.e8af8ef3,
        },
        I = function (e) {
          var n = e.analytics,
            t = e.onClose,
            a = e.onSwitchToBusinessAccountConfirm,
            i = e.onSwitchToCreatorAccountConfirm,
            c = e.onSwitchToNonProfessionalConfirm,
            l = e.professionalType,
            u = s.a.useState(!1),
            p = o()(u, 2),
            d = p[0],
            f = p[1],
            m = s.a.useState(!1),
            b = o()(m, 2),
            y = b[0],
            g = b[1],
            I = s.a.useState(!1),
            H = o()(I, 2),
            x = H[0],
            A = H[1],
            B = function (e, n, a) {
              return s.a.createElement(L.a, {
                actionLabel: k.actionLabel,
                graphicDisplayMode: 'none',
                headline: e,
                isFullHeightOnMobile: !1,
                onAction: a,
                onClose: t,
                onSecondaryAction: t,
                secondaryActionLabel: k.secondaryActionLabel,
                subtext: n,
                withCloseButton: !1,
              })
            },
            z = function () {
              n.scribe(r.j('personal')), f(!0)
            },
            j = function () {
              n.scribe(r.j('creator')), A(!0)
            },
            F = function () {
              n.scribe(r.j('business')), g(!0)
            }
          return s.a.createElement(w.a, null, function (e) {
            e.windowHeight
            var n = e.windowWidth > C.a.theme.breakpoints.medium
            return s.a.createElement(
              E.a,
              {
                enableMaskForDismiss: !0,
                onMaskClick: t,
                style: n && _.roundedBorders,
                type: n ? 'center' : 'bottom',
                withMask: !0,
              },
              s.a.createElement(
                h.a,
                {
                  accessibilityRole: 'dialog',
                  accessibilityState: { modal: !0 },
                  style: [_.root, n && _.centeredContent],
                },
                s.a.createElement(
                  h.a,
                  { style: _.content },
                  s.a.createElement(
                    T.a,
                    { onPress: z, size: 'xLarge', style: _.button, type: 'primaryFilled' },
                    P.menuItemLabel,
                  ),
                  'Business' === l
                    ? s.a.createElement(
                        T.a,
                        { onPress: j, size: 'xLarge', style: _.button, type: 'primaryFilled' },
                        v.menuItemLabel,
                      )
                    : s.a.createElement(
                        T.a,
                        { onPress: F, size: 'xLarge', style: _.button, type: 'primaryFilled' },
                        S.menuItemLabel,
                      ),
                  s.a.createElement(T.a, { onPress: t, size: 'xLarge', style: _.button, type: 'primaryOutlined' }, D),
                ),
              ),
              d ? B(P.confirmationTitleLabel, P.confirmationDescriptionLabel, c) : null,
              y ? B(S.confirmationTitleLabel, S.confirmationDescriptionLabel, a) : null,
              x ? B(v.confirmationTitleLabel, v.confirmationDescriptionLabel, i) : null,
            )
          })
        },
        _ = C.a.create(function (e) {
          return {
            root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, paddingVertical: e.spaces.space12 },
            centeredContent: { width: '100%', flexGrow: 1, alignItems: 'center', justifyContent: 'center' },
            content: { margin: e.spaces.space16 },
            button: { marginTop: e.spaces.space16, marginHorizontal: e.spaces.space16 },
            roundedBorders: { borderRadius: e.borderRadii.xLarge },
          }
        }),
        H = 'category_label',
        x = 'category_display',
        A = 'switch_account_type',
        B = t('csss'),
        z = t('t62R'),
        j = t('CK8+'),
        F = t('jtO7'),
        R = b.a.e1f76977,
        O = b.a.i0864917,
        M = b.a.cd9102d4,
        N = b.a.d93271e2,
        G = b.a.h26379fe,
        U = b.a.f386777a,
        V = { personal: b.a.db48309f, business: b.a.c701200b, creator: b.a.acd8da09 },
        W = function (e) {
          var n,
            t,
            a = e.addToast,
            i = e.analytics,
            c = e.createLocalApiErrorHandler,
            l = e.history,
            u = e.loggedInUser,
            p = e.switchToNonProfessional,
            d = e.updateProfessionalCategoryDisplay,
            m = e.updateProfessionalType,
            b = s.a.useState(!1),
            y = o()(b, 2),
            L = y[0],
            w = y[1],
            C = function (e) {
              e.preventDefault(), i.scribe(r.h()), w(!0)
            }
          if (
            (s.a.useEffect(function () {
              null != u && u.professional && i.scribe(r.e())
            }, []),
            !u)
          )
            return l.push('/login'), null
          if (!u.professional || !u.professional.professional_type)
            return l.goBack({ backLocation: '/settings/profile' }), null
          var E,
            T = null === (n = u.professional.category) || void 0 === n ? void 0 : n[0],
            D = null === (t = null == T ? void 0 : T.display) || void 0 === t || t,
            k = function () {
              i.scribe(r.a())
            },
            P = function () {
              g()(!(null == u || !u.id_str), 'loggedInUser.id_str must be defined'),
                i.scribe(r.d()),
                d(u.id_str, { displayCategory: !D }).catch(c())
            },
            S = function () {
              w(!1)
            },
            v = function () {
              i.scribe(r.i('personal')),
                p(u.id_str)
                  .then(function () {
                    return a({ text: V.personal })
                  })
                  .catch(c()),
                w(!1)
            },
            _ = function () {
              i.scribe(r.i('business')),
                m(u.id_str, { professionalType: 'Business' })
                  .then(function () {
                    return a({ text: V.business })
                  })
                  .catch(c()),
                w(!1)
            },
            W = function () {
              i.scribe(r.i('creator')),
                m(u.id_str, { professionalType: 'Creator' })
                  .then(function () {
                    return a({ text: V.creator })
                  })
                  .catch(c()),
                w(!1)
            }
          return s.a.createElement(
            f.b,
            {
              accessibilityHidden: L,
              backButtonType: 'back',
              history: l,
              onBackClick: function () {
                l.goBack({ backLocation: '/settings/profile' })
              },
              title: R,
            },
            s.a.createElement(
              h.a,
              { style: J.container },
              s.a.createElement(B.a, {
                description: null !== (E = null == T ? void 0 : T.name) && void 0 !== E ? E : M,
                label: O,
                link: '/i/flow/update_professional_category',
                onPress: k,
                testID: H,
              }),
              s.a.createElement(
                h.a,
                { testID: x },
                s.a.createElement(
                  h.a,
                  { style: J.categoryDisplaySwitchContainer },
                  s.a.createElement(z.b, { color: 'normal' }, N),
                  s.a.createElement(j.a, { onValueChange: P, value: D }),
                ),
                s.a.createElement(
                  h.a,
                  { style: J.categoryDisplayDescriptionContainer },
                  s.a.createElement(z.b, { color: 'gray700', size: 'subtext2' }, G),
                ),
              ),
              s.a.createElement(F.a, { align: 'left', color: 'primary', label: U, onPress: C, testID: A }),
              (function () {
                var e
                g()(
                  !(null == u || null === (e = u.professional) || void 0 === e || !e.professional_type),
                  'loggedInUser.professional.professional_type must be defined',
                )
                var n = u.professional.professional_type
                return L
                  ? s.a.createElement(I, {
                      analytics: i,
                      onClose: S,
                      onSwitchToBusinessAccountConfirm: _,
                      onSwitchToCreatorAccountConfirm: W,
                      onSwitchToNonProfessionalConfirm: v,
                      professionalType: n,
                    })
                  : null
              })(),
            ),
          )
        },
        J = C.a.create(function (e) {
          return {
            container: { paddingBottom: e.spaces.space64 },
            categoryDisplaySwitchContainer: {
              alignItems: 'center',
              flexDirection: 'row',
              flexGrow: 1,
              justifyContent: 'space-between',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingTop: e.spaces.space8,
            },
            categoryDisplayDescriptionContainer: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingTop: e.spaces.space2,
              paddingBottom: e.spaces.space8,
            },
          }
        }),
        K = d(W)
      n.default = K
    },
    jtO7: function (e, n, t) {
      'use strict'
      var a = t('97Jx'),
        o = t.n(a),
        r = t('m3Bd'),
        i = t.n(r),
        s = t('ERkP'),
        c = t.n(s),
        l = t('t62R'),
        u = t('I4+6'),
        p = t('cm6r'),
        d = t('rHpw'),
        f = t('MWbm'),
        m = d.a.create(function (e) {
          return {
            container: { backgroundColor: e.colors.cellBackground },
            root: {
              justifyContent: 'center',
              minHeight: e.spaces.space48,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
          }
        })
      n.a = function (e) {
        var n = e.align,
          t = void 0 === n ? 'center' : n,
          a = e.color,
          r = e.label,
          s = i()(e, ['align', 'color', 'label']),
          b = u.a.generate({
            backgroundColor: d.a.theme.colors.transparent,
            color: d.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return c.a.createElement(
          f.a,
          { style: m.container },
          c.a.createElement(
            p.a,
            o()({}, s, { interactiveStyles: b, style: m.root }),
            c.a.createElement(l.b, { align: t, color: a }, r),
          ),
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
