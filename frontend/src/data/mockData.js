export const liveMatch = {
  league: "Premier League",
  homeTeam: { name: "Manchester City", short: "MCI", emoji: "🔵" },
  awayTeam: { name: "Arsenal", short: "ARS", emoji: "🔴" },
  homeScore: 2,
  awayScore: 1,
  minute: 67,
  stadium: "Etihad Stadium",
  possession: [58, 42],
  shots: [9, 7],
  corners: [5, 3],
  yellowCards: [1, 2],
};

export const standings = [
  { name: "Man City",   emoji: "🔵", badgeBg: "rgba(30,102,245,0.2)",  played: 28, won: 20, drawn: 4, lost: 4, points: 64, form: "WWDWW" },
  { name: "Arsenal",    emoji: "🔴", badgeBg: "rgba(239,68,68,0.2)",   played: 28, won: 19, drawn: 5, lost: 4, points: 62, form: "WLWWD" },
  { name: "Liverpool",  emoji: "🔴", badgeBg: "rgba(239,68,68,0.25)",  played: 28, won: 18, drawn: 6, lost: 4, points: 60, form: "WWWDL" },
  { name: "Chelsea",    emoji: "🔵", badgeBg: "rgba(30,102,245,0.15)", played: 28, won: 15, drawn: 7, lost: 6, points: 52, form: "DWWLD" },
  { name: "Spurs",      emoji: "🟡", badgeBg: "rgba(239,159,39,0.2)",  played: 28, won: 14, drawn: 6, lost: 8, points: 48, form: "LWDWL" },
  { name: "Aston Villa",emoji: "🟣", badgeBg: "rgba(127,119,221,0.2)", played: 28, won: 13, drawn: 6, lost: 9, points: 45, form: "WLLDW" },
];

export const fixtures = [
  { date: "Today 20:00", home: "Liverpool",   away: "Chelsea",     competition: "Live Soon", isLiveSoon: true },
  { date: "Mon 15:00",   home: "Spurs",       away: "Brighton",    competition: "PL",        isLiveSoon: false },
  { date: "Tue 19:45",   home: "Arsenal",     away: "PSG",         competition: "UCL",       isLiveSoon: false },
  { date: "Wed 20:00",   home: "Man City",    away: "Real Madrid", competition: "UCL",       isLiveSoon: false },
];

export const topScorers = [
  { name: "E. Haaland", team: "Manchester City", goals: 24 },
  { name: "M. Salah",   team: "Liverpool",       goals: 20 },
  { name: "B. Saka",    team: "Arsenal",         goals: 16 },
  { name: "C. Palmer",  team: "Chelsea",         goals: 14 },
];