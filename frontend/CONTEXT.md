

## Project Overview

**TACTICAL90** is a football (soccer) fan dashboard web app.
- **Audience:** Fans / Viewers — read-only, no admin features in the frontend
- **Goal:** Browse live scores, league standings, fixtures, players, teams, stats
- **Status:** Active development — multi-day project

---

## Tech Stack

### Backend
| Layer        | Tech                          |
|--------------|-------------------------------|
| Framework    | Django (Python)               |
| API          | Django REST Framework (DRF)   |
| Database     | postgres        |
| Dev server   | `http://127.0.0.1:8000`       |
| API prefix   | `/api/`                       |

### Frontend
| Layer        | Tech                          |
|--------------|-------------------------------|
| Framework    | React (Vite)                  |
| Styling      | Tailwind CSS                  |
| Dev server   | `http://localhost:5173`       |
| Icons        | lucide-react                  |
| HTTP         | native `fetch` via service files |

---

## Folder Structure

### Backend (`/backend/`)
```
backend/
├── app_info/
├── coaches/
├── config/          ← Django settings, urls.py
├── core/
├── leagues/         ✅ /api/leagues/ working
├── matches/
├── players/
├── referees/
├── scores/
├── seasons/
├── stadiums/
├── standings/
├── teams/
└── users/
```

### Frontend (`/frontend/src/`)
```
src/
├── App.jsx                    ← router root
├── index.css                  ← global styles + scrollbar
├── pages/
│   ├── Dashboard.jsx          
│   └── Leagues.jsx            
├── components/
│   ├── Navbar.jsx             
│   ├── StatsOverview.jsx      
│   ├── HeroMatch.jsx          
│   ├── LeagueTable.jsx        
│   ├── UpcomingFixtures.jsx   
│   └── TopScorers.jsx         
├── services/                  ← all fetch calls live here
│   └── leagues.js             
           
```

---

## Design System

### Color Palette
```
--p900: #1a103d   ← page background
--p800: #26215C   ← navbar background
--p700: #3C3489   ← hero gradient start
--p600: #534AB7   ← active nav, primary buttons, selected states
--p400: #7F77DD   ← icons, secondary accents
--p200: #AFA9EC   ← borders (at 0.18 opacity), pills
--muted: #a89fd8  ← secondary text, labels
--text:  #f0eeff  ← primary text

--gold:  #EF9F27  ← logo, #1 rank, live badge, CTA accents
--gold-light: #FAC775

--surface: #1e1540
--card:    #251b50  ← all cards / section panels
--card2:   #2d2260

--border: rgba(175,169,236,0.18)  ← all dividers and card borders

--live:  #22c55e  ← live dot, live soon pills
--red:   #f87171  ← relegation, loss badges
```

### Card Pattern
Every card/panel uses:
```jsx
style={{ background: "#251b50", border: "1px solid rgba(175,169,236,0.18)" }}
className="rounded-2xl"
```

### Section Header Pattern
```jsx
<div className="flex items-center justify-between px-5 py-4"
  style={{ borderBottom: "1px solid rgba(175,169,236,0.18)" }}>
  <div className="flex items-center gap-2 text-base font-medium" style={{ color: "#f0eeff" }}>
    <Icon size={17} style={{ color: "#7F77DD" }} /> Section Title
  </div>
  <button style={{ color: "#7F77DD" }}>See all →</button>
</div>
```

### Typography
- Display / headings: `font-bold`, color `#f0eeff`
- Body: `text-sm`, color `#f0eeff`
- Muted / labels: `text-xs` or `text-sm`, color `#a89fd8`
- Accent numbers: `font-semibold`, color matches accent
- Tracking for league labels: `tracking-widest uppercase text-xs`

### Accent Pill Colors
```
purple → bg rgba(127,119,221,0.15)  color #7F77DD
gold   → bg rgba(239,159,39,0.15)   color #EF9F27
green  → bg rgba(34,197,94,0.12)    color #22c55e
red    → bg rgba(239,68,68,0.12)    color #f87171
```

### Spinner
```jsx
<div className="w-10 h-10 rounded-full border-4 animate-spin"
  style={{ borderColor: "#534AB7", borderTopColor: "#EF9F27" }} />
```

### Error state
```jsx
<div style={{ background: "rgba(239,68,68,0.1)", color: "#f87171",
  border: "1px solid rgba(239,68,68,0.2)" }} className="rounded-xl p-4 text-sm">
  ⚠️ Error message here
</div>
```

---

## API Endpoints

### Confirmed Working
| Method | URL                  | Returns                                                                 |
|--------|----------------------|-------------------------------------------------------------------------|
| GET    | `/api/leagues/`      | `[{ league_id, name, country, country_id, icon_url, cl_spot, uel_spot, relegation_spot }]` |

### To Be Wired
| Section        | Expected URL                             | Key fields needed                                      |
|----------------|------------------------------------------|--------------------------------------------------------|
| Standings      | `/api/standings/?league={league_id}`     | position, team, played, won, drawn, lost, points, form |
| Matches/Live   | `/api/matches/?status=live`              | home_team, away_team, score, minute, stadium           |
| Fixtures       | `/api/matches/?status=upcoming`          | home_team, away_team, date, competition                |
| Teams          | `/api/teams/?league={league_id}`         | name, badge_url, founded, stadium                      |
| Players        | `/api/players/?team={team_id}`           | name, position, nationality, goals, assists            |
| Top Scorers    | `/api/players/?ordering=-goals`          | name, team, goals                                      |
| Coaches        | `/api/coaches/`                          | name, team, nationality                                |
| Referees       | `/api/referees/`                         | name, nationality                                      |
| Stadiums       | `/api/stadiums/`                         | name, city, capacity, team                             |
| Seasons        | `/api/seasons/`                          | year, league, is_current                               |

---

## Service Layer Convention

All API calls live in `src/services/`. Never fetch inside components directly.

```js
// src/services/leagues.js — example pattern
const BASE = "http://127.0.0.1:8000/api";

export async function getLeagues() {
  const res = await fetch(`${BASE}/leagues/`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// Always follow this pattern for new services:
export async function getStandings(leagueId) {
  const res = await fetch(`${BASE}/standings/?league=${leagueId}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
```

Create one file per resource: `leagues.js`, `standings.js`, `matches.js`, `teams.js`, `players.js`, etc.

---

## Page → Component → Service Map

| Page            | Components used                                    | Service file         |
|-----------------|----------------------------------------------------|----------------------|
| Dashboard.jsx   | StatsOverview, HeroMatch, LeagueTable, UpcomingFixtures, TopScorers | matches.js, standings.js |
| Leagues.jsx     | LeagueCard, LeagueDetail                           | leagues.js           |
| Standings.jsx   | LeagueTable (reuse)                                | standings.js         |
| Fixtures.jsx    | UpcomingFixtures (reuse)                           | matches.js           |
| Teams.jsx       | TeamCard (to build)                                | teams.js             |
| Players.jsx     | PlayerCard (to build)                              | players.js           |
| Stats.jsx       | TopScorers (reuse), charts                         | players.js           |

---

## CORS Setup (Required)

Django must allow requests from the frontend dev server.

```bash
pip install django-cors-headers
```

```python
# settings.py
INSTALLED_APPS = [..., "corsheaders"]
MIDDLEWARE = ["corsheaders.middleware.CorsMiddleware", ...]  # must be FIRST
CORS_ALLOWED_ORIGINS = ["http://localhost:5173"]
```

---

## What's Been Built

- [x] Full design system (colors, cards, typography)
- [x] Navbar with active states
- [x] Dashboard page (mock data — needs real API wiring)
- [x] StatsOverview component
- [x] HeroMatch component
- [x] LeagueTable component
- [x] UpcomingFixtures component
- [x] TopScorers component
- [x] Leagues page (live API, search, card + detail layout)
- [x] `getLeagues()` service

## What's Next

- [ ] Wire Dashboard to real `/api/matches/` and `/api/standings/` data
- [ ] Build `Standings.jsx` page with league filter dropdown
- [ ] Build `Fixtures.jsx` with date grouping
- [ ] Build `Teams.jsx` — card grid layout
- [ ] Build `Players.jsx` — filterable table
- [ ] Add React Router (`react-router-dom`) for page navigation
- [ ] Replace mock data in `mockData.js` with real services
- [ ] Add loading + error states to Dashboard components
- [ ] Optional: Add auth (JWT) if user-specific features are added

---

## Rules for AI Sessions

1. **Always use inline styles for theme colors** — Tailwind doesn't know our custom hex values
2. **Never fetch inside a component** — use `src/services/*.js`
3. **Always include loading, error, and empty states** in every page
4. **Reuse existing components** before building new ones (LeagueTable, TopScorers, etc.)
5. **Match field names to the API** — e.g. `league_id` not `id`, `icon_url` not `logo`
6. **Keep components dumb** — pages handle data fetching, components receive props
7. **Card border radius** is always `rounded-2xl` (16px)
8. **Background for all page wrappers** is `#1a103d`