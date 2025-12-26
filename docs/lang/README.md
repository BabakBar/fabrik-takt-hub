# FabrikTakt Persian/Farsi Implementation Docs

This folder holds the working documentation for delivering production-ready Persian (fa) support in the FabrikTakt frontend. The focus is a single, accurate implementation plan that mirrors the current codebase and can be executed step by step.

---

## Document Order

1. **00_IMPLEMENTATION_ROADMAP.md** – The canonical, end-to-end execution plan. Follow this document in order.

---

## Archived Reference

- `archive/` *(if present)* contains historical notes that were superseded by the current plan. Those files are informational only and must not drive implementation decisions.

---

## How to Use These Docs

- Treat the roadmap as a checklist: complete one step fully before moving to the next.
- Update the roadmap as real-world findings emerge; it is meant to stay in sync with the repository.
- Capture any deviations or open questions in your own scratchpad, then reflect them back into the plan once resolved.
- RTL component audit
- Animation refinement
- SEO implementation

**QA Engineer**:
- Test plan execution
- Visual regression setup
- E2E test writing
- Bug reporting

**Persian Translator**:
- Professional translation in TMS
- Cultural adaptation
- Review for naturalness

**Native Speaker QA**:
- User testing
- UX feedback
- Translation quality check
- Cultural appropriateness

---

## 🛠️ Technology Stack

### Core Technologies

**Framework & Build**:
- React 18.3.1
- TypeScript 5.5.3
- Vite 5.4.1 (with SWC)
- Bun (package manager)

**i18n & RTL**:
- **LinguiJS** v5.x (i18n framework) ⭐ NEW
- **@lingui/swc-plugin** (for Vite/SWC) ⭐ NEW
- **tailwindcss-vanilla-rtl** v0.x (CSS Logical Properties) ⭐ NEW
- **Vazirmatn** font (Persian typography) ⭐ NEW

**UI & Styling**:
- TailwindCSS 3.4.11
- Radix UI (40+ components, RTL-ready)
- Motion 12.18.1 (animations)
- React Helmet Async (SEO)

**Forms & Validation**:
- React Hook Form 7.53.0
- Zod 3.23.8
- EmailJS (client-side email)

**Translation Management**:
- Lokalise or Phrase (TMS) ⭐ NEW
- GitHub integration for continuous localization

**Testing**:
- Vitest (unit tests)
- Playwright or Cypress (E2E)
- Percy or Chromatic (visual regression) ⭐ NEW
- axe-core (accessibility)

---

## 📦 Required Dependencies

### New Installations (Phase 1, Week 1)

```bash
# i18n Framework
bun add @lingui/react @lingui/core
bun add -D @lingui/cli @lingui/macro @lingui/vite-plugin @lingui/swc-plugin

# RTL Support
bun add -D tailwindcss-vanilla-rtl

# Persian Date Support
bun add jalaali-js

# Linting
bun add -D eslint-plugin-tailwindcss

# Testing (Phase 4)
bun add -D @axe-core/react
# Plus Percy/Chromatic subscription
```

---

## 🔐 Access & Credentials

### Required Accounts

**Translation Management** (Phase 2):
- Lokalise or Phrase account
- API key for CI/CD integration
- GitHub OAuth connection

**Testing Services** (Phase 4):
- Percy or Chromatic account
- API key for visual regression tests

**Analytics** (Optional):
- Google Analytics view for Persian
- Umami Analytics (already configured)

---

## 🎓 Learning Resources

### For Developers

**LinguiJS**:
- Official Docs: https://lingui.dev/
- Vite Plugin: https://lingui.dev/ref/vite-plugin
- React Tutorial: https://lingui.dev/tutorials/react

**CSS Logical Properties**:
- MDN Guide: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values
- Can I Use: https://caniuse.com/css-logical-props
- Tailwind Plugin: https://github.com/thibaudcolas/tailwindcss-vanilla-rtl

**Persian Typography**:
- Vazirmatn Font: https://github.com/rastikerdar/vazirmatn
- Persian Typography Best Practices: Research Persian web design patterns

**RTL Design**:
- Material Design RTL Guidelines
- RTL Styling 101: https://rtlstyling.com/

### For Translators

**Translation Context**:
- Manufacturing terminology glossary (will be provided)
- Product documentation (will be provided)
- Brand voice guidelines (will be provided)

---

## 📞 Support & Communication

### Communication Channels

**Daily Standups**:
- Time: 9:30 AM (adjust for timezone)
- Platform: [Your choice: Slack, Teams, etc.]
- Duration: 15 minutes

**Weekly Reviews**:
- Time: Friday 4:00 PM
- Platform: [Your choice: Zoom, Meet, etc.]
- Duration: 1 hour
- Agenda: Progress review, blockers, next week planning

**Documentation**:
- Technical questions: Comment in relevant MD files
- Bug reports: GitHub Issues with label "i18n"
- Feature requests: GitHub Discussions

### Escalation Path

**Level 1**: Ask team member
**Level 2**: Ask Lead Developer
**Level 3**: Ask Project Manager
**Level 4**: Ask Product Owner / Stakeholder

---

## ⚠️ Known Risks & Mitigation

### Critical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Timeline slippage | Medium | High | 25% buffer in each phase |
| Translation quality issues | Medium | Medium | Professional translator + native QA |
| Performance degradation | Low | High | Font subsetting, lazy loading |
| SEO implementation errors | Medium | High | Google testing tools, validation |
| Third-party component issues | Low | Medium | Comprehensive RTL audit in Phase 1 |

### Mitigation Strategies

**Timeline Management**:
- Daily progress tracking
- Weekly milestone reviews
- 25-30% buffer time
- Clear escalation path for blockers

**Quality Assurance**:
- Comprehensive testing plan
- Visual regression testing
- Native speaker review
- Professional translation

**Technical Risks**:
- Proof of concept in Week 1
- Third-party dependency audit
- Performance monitoring
- Rollback plan

---

## 🎉 Success Criteria

**Phase 1 Success**:
- All components use LinguiJS ✓
- Zero hardcoded strings ✓
- Font loads correctly ✓
- Routing works ✓

**Phase 2 Success**:
- TMS integrated ✓
- Professional translation complete ✓
- Forms work in both languages ✓

**Phase 3 Success**:
- All components tested in RTL ✓
- No visual regressions ✓
- Native speaker approval ✓

**Phase 4 Success**:
- All tests passing ✓
- Performance targets met ✓
- SEO validated ✓
- **Production deployed** ✓

---

## 📝 Next Steps

### For Project Start

1. **Read** `01_QUICK_START_CHECKLIST.md`
2. **Complete** pre-flight checklist (4-5 hours)
3. **Start** Phase 1, Week 1, Day 1
4. **Track** progress daily

### For Questions

- Technical: Check `02_TECHNICAL_SPECIFICATIONS.md`
- Issues: Check `03_TROUBLESHOOTING_GUIDE.md`
- Escalate: Follow escalation path above

---

**Let's build an exceptional Persian experience for FabrikTakt! 🚀**

*Last updated: 2025-10-05*
*Next review: After Phase 1 completion*
