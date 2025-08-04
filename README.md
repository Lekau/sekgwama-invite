
# 🛠️ CRF Mobile App – Initial Setup & Scaffolding Tickets

## Epic: Project Setup & Scaffolding

### 1. Initialize Flutter Project
- [ ] Create a new Flutter project (with null safety, using latest stable Flutter). 🆔 CZ2kgR
- [ ] Set up feature-based folder structure: 🆔 NB6Von
    - `/lib/features/auth/`
    - `/lib/features/two_pot_withdrawal/`
    - `/lib/core/`
    - `/lib/shared/`
- [ ] Add a basic README with workspace conventions and setup instructions. 🆔 IkxDYj

---

### 2. Add Key Packages
- [ ] Add `flutter_bloc` for state management. 🆔 wSyf1c
- [ ] Add `equatable` for value comparison. 🆔 stfhMA
- [ ] Add `flutter_svg` for SVG asset support. 🆔 O6tQt2
- [ ] Add `dio` or `http` for networking. 🆔 4fCvyP
- [ ] Add `get_it` for dependency injection (optional, if agreed). 🆔 xIUpzN
- [ ] Add `freezed` & `json_serializable` for model code generation. 🆔 b1ZMXt
- [ ] Review and add any other essential packages. 🆔 zlWJYq

---

### 3. Set Up Flutter BLoC Architecture
- [ ] Add BLoC folders under each feature: 🆔 nReL9X
    - `/bloc/`
    - `/models/`
    - `/views/`
    - `/widgets/`
    - `/repository/`
- [ ] Create a sample BLoC, State, and Event in `/features/auth/bloc/` 🆔 LdyJVG
- [ ] Implement base repository pattern for data access. 🆔 JuhBqg
- [ ] Scaffold main app navigation (BottomNav, Drawer, or basic routing as placeholder). 🆔 rAfK36

---

### 4. Project Linting, CI, and Scripts
- [ ] Add recommended lint rules (`very_good_analysis` or similar). 🆔 bP9W9t
- [ ] Add support for `.env` (e.g., for API keys, config). 🆔 csSUIh
- [ ] Set up a simple CI pipeline (e.g., GitHub Actions) to run `flutter analyze` and `flutter test` on PRs. 🆔 j2NpjG

---

## Epic: Authentication Flow (Pre-Design)

### 5. Scaffold Login Feature (Skeleton)
- [ ] Create empty BLoC, State, and Event classes for Login. 🆔 KevNP3
- [ ] Scaffold placeholder screens: 🆔 79Vxe4
    - `LoginPage`
    - `PinEntryPage`
    - `OtpPage`
- [ ] Set up routing for all auth screens. 🆔 18Me9m
- [ ] Document expected states and events as TODO comments (to complete after design is finalized). 🆔 dpiWwO

---

## Epic: Two-Pot Withdrawal (Pre-Design)

### 6. Scaffold Two-Pot Withdrawal Feature (Skeleton)
- [ ] Set up base feature folder `/features/two_pot_withdrawal/` 🆔 uNooih
- [ ] Add empty BLoC, State, Event, and Repository classes. 🆔 XRwYMU
- [ ] Scaffold placeholder pages for each major step: 🆔 VcpNTd
    - Balance/Eligibility Check
    - Multi-step Withdrawal Application
    - Success/Error state screens
- [ ] Stub navigation from dashboard/main menu. 🆔 uttCpO

---

## Epic: Shared/App Core

### 7. Set Up Shared Components & Theme
- [ ] Create base app theme, color palette, and typography (to update after final design). 🆔 RjtpDs
- [ ] Scaffold reusable widgets (button, input, loading indicator, etc). 🆔 ECCIAx
- [ ] Set up `AppRouter` for named route management. 🆔 fIGUDv

---

### 8. Documentation & Collaboration
- [ ] Add `/docs/` folder or expand README for architecture, conventions, and any design dependencies. 🆔 KP2IqJ
- [ ] Create a follow-up ticket to revisit all flows/UI once wireframes are delivered. 🆔 J7HzVu

---

## Sample Issue Template (copy for each ticket):
```

**Title:** Scaffold Login BLoC and Placeholder UI

  

**Description:**

Set up the Login feature using Flutter BLoC pattern. Include empty state, event, and bloc classes. Create a basic login form (UI placeholder only) with navigation to OTP and PIN entry placeholders.

  

**Acceptance Criteria:**

- /features/auth/bloc/ with login_bloc.dart, login_event.dart, login_state.dart
    
- /features/auth/views/login_page.dart
    
- Simple form with “Member Number”, “ID”, “Password” (no logic yet)
    
- Navigation to OTP and PIN placeholder pages
    
- All business logic marked as TODO
    

```
---

## Notes
- All business logic and API integrations to be added **after design handoff**.
- Please keep code clean, documented, and modular per BLoC and feature-first best practices.
- Check in with the team on any architectural or package decisions before finalizing.


[https://mylogin.crfund.co.za/login](https://mylogin.crfund.co.za/login)  
mobile: 0829063676  
password: 6658494
