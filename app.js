const fixturesSeed = [
  {
    id: 'm1',
    home: 'Manchester City',
    away: 'Brighton',
    competition: 'Premier League',
    kickOff: '2026-09-26T15:00:00Z',
    status: 'scheduled',
    venue: 'Etihad Stadium',
    weather: { temp: 18, wind: 14, rain: 0.18, condition: 'Light rain' },
    homeStrength: 86,
    awayStrength: 74,
    homeGoalsScored: 2.47,
    awayGoalsScored: 1.71,
    homeGoalsConceded: 0.98,
    awayGoalsConceded: 1.38,
    homeForm: 7.2,
    awayForm: 5.6,
    lineup: {
      home: { keyPlayers: ['Haaland', 'Foden', 'De Bruyne'], missing: ['Gvardiol'] },
      away: { keyPlayers: ['Mitoma', 'Welbeck'], missing: [] }
    },
    rest: { home: 3, away: 4 },
    travel: { home: 0, away: 1 },
    recentXg: { home: 2.12, away: 1.48 },
    shotsOnTarget: { home: 5.4, away: 4.1 },
    setPieces: { home: 0.59, away: 0.46 },
    h2h: 1.2,
    notes: ['City create overloads wide and in central channels.', 'Brighton press can be disrupted by direct balls.']
  },
  {
    id: 'm2',
    home: 'Arsenal',
    away: 'Aston Villa',
    competition: 'Premier League',
    kickOff: '2026-09-26T17:30:00Z',
    status: 'live',
    venue: 'Emirates Stadium',
    weather: { temp: 16, wind: 11, rain: 0.05, condition: 'Clear' },
    homeStrength: 81,
    awayStrength: 77,
    homeGoalsScored: 2.08,
    awayGoalsScored: 1.74,
    homeGoalsConceded: 1.02,
    awayGoalsConceded: 1.24,
    homeForm: 6.8,
    awayForm: 5.9,
    lineup: {
      home: { keyPlayers: ['Saka', 'Jesus', 'Rice'], missing: [] },
      away: { keyPlayers: ['Watkins', 'McGinn'], missing: ['Mings'] }
    },
    rest: { home: 3, away: 4 },
    travel: { home: 0, away: 1 },
    recentXg: { home: 1.92, away: 1.52 },
    shotsOnTarget: { home: 5.1, away: 4.6 },
    setPieces: { home: 0.58, away: 0.63 },
    h2h: 0.94,
    notes: ['Arsenal have a sharp second-phase pattern.', 'Villa still pose a threat from second balls and counters.']
  },
  {
    id: 'm3',
    home: 'Inter Milan',
    away: 'Juventus',
    competition: 'Serie A',
    kickOff: '2026-09-26T18:00:00Z',
    status: 'scheduled',
    venue: 'San Siro',
    weather: { temp: 21, wind: 8, rain: 0.01, condition: 'Dry' },
    homeStrength: 82,
    awayStrength: 78,
    homeGoalsScored: 1.96,
    awayGoalsScored: 1.88,
    homeGoalsConceded: 1.08,
    awayGoalsConceded: 1.19,
    homeForm: 6.7,
    awayForm: 6.4,
    lineup: {
      home: { keyPlayers: ['Lautaro', 'Mkhitaryan'], missing: [] },
      away: { keyPlayers: ['Vlahovic', 'Locatelli'], missing: ['Danilo'] }
    },
    rest: { home: 3, away: 4 },
    travel: { home: 0, away: 1 },
    recentXg: { home: 1.71, away: 1.72 },
    shotsOnTarget: { home: 4.8, away: 4.7 },
    setPieces: { home: 0.52, away: 0.55 },
    h2h: 1.1,
    notes: ['This matchup typically carries a strong chance profile.', 'Defensive transitions are the key swing factor.']
  },
  {
    id: 'm4',
    home: 'Real Madrid',
    away: 'Atletico Madrid',
    competition: 'La Liga',
    kickOff: '2026-09-27T20:00:00Z',
    status: 'scheduled',
    venue: 'Santiago Bernabéu',
    weather: { temp: 23, wind: 7, rain: 0.03, condition: 'Dry' },
    homeStrength: 87,
    awayStrength: 80,
    homeGoalsScored: 2.36,
    awayGoalsScored: 1.68,
    homeGoalsConceded: 0.94,
    awayGoalsConceded: 1.1,
    homeForm: 7.4,
    awayForm: 6.1,
    lineup: {
      home: { keyPlayers: ['Mbappé', 'Bellingham'], missing: ['Carvajal'] },
      away: { keyPlayers: ['Griezmann', 'Álvarez'], missing: [] }
    },
    rest: { home: 2, away: 3 },
    travel: { home: 0, away: 0 },
    recentXg: { home: 2.23, away: 1.51 },
    shotsOnTarget: { home: 5.7, away: 4.5 },
    setPieces: { home: 0.62, away: 0.57 },
    h2h: 1.3,
    notes: ['Madrid create from wide overloads and quick second-wave attacks.', 'Atleti can stay compact but may suffer under early pressure.']
  },
  {
    id: 'm5',
    home: 'Bayern Munich',
    away: 'Leverkusen',
    competition: 'Bundesliga',
    kickOff: '2026-09-27T17:00:00Z',
    status: 'scheduled',
    venue: 'Allianz Arena',
    weather: { temp: 19, wind: 12, rain: 0.11, condition: 'Light rain' },
    homeStrength: 84,
    awayStrength: 79,
    homeGoalsScored: 2.21,
    awayGoalsScored: 1.79,
    homeGoalsConceded: 1.03,
    awayGoalsConceded: 1.18,
    homeForm: 7.1,
    awayForm: 6.5,
    lineup: {
      home: { keyPlayers: ['Lewandowski', 'Musiala'], missing: ['Kim'] },
      away: { keyPlayers: ['Boniface', 'Di Gregorio'], missing: [] }
    },
    rest: { home: 2, away: 3 },
    travel: { home: 0, away: 1 },
    recentXg: { home: 2.03, away: 1.61 },
    shotsOnTarget: { home: 5.5, away: 4.9 },
    setPieces: { home: 0.57, away: 0.49 },
    h2h: 1.14,
    notes: ['High-tempo match with lots of front-third entries.', 'Wet weather can help a side that attacks through direct progression.']
  },
  {
    id: 'm6',
    home: 'Lyon',
    away: 'Marseille',
    competition: 'Ligue 1',
    kickOff: '2026-09-27T19:15:00Z',
    status: 'scheduled',
    venue: 'Groupama Stadium',
    weather: { temp: 17, wind: 16, rain: 0.43, condition: 'Heavy rain' },
    homeStrength: 71,
    awayStrength: 75,
    homeGoalsScored: 1.58,
    awayGoalsScored: 1.63,
    homeGoalsConceded: 1.44,
    awayGoalsConceded: 1.31,
    homeForm: 5.2,
    awayForm: 5.6,
    lineup: {
      home: { keyPlayers: ['Ben Yedder'], missing: ['Talbi'] },
      away: { keyPlayers: ['Mbappé? no', 'Sarr'], missing: [] }
    },
    rest: { home: 4, away: 3 },
    travel: { home: 0, away: 1 },
    recentXg: { home: 1.46, away: 1.58 },
    shotsOnTarget: { home: 4.2, away: 4.7 },
    setPieces: { home: 0.44, away: 0.52 },
    h2h: 0.89,
    notes: ['Rain increases unpredictability and can compress midfield spacing.', 'This is a strong over-1.5 candidate but more volatile for over-2.5.']
  }
];

const state = {
  market: 'all',
  query: '',
  stake: 10
};

const els = {
  cards: document.getElementById('cards-container'),
  fixtureCount: document.getElementById('fixture-total'),
  accaList: document.getElementById('acca-list'),
  accaTotalOdds: document.getElementById('acca-total-odds'),
  accaReturn: document.getElementById('acca-return'),
  accaWinProb: document.getElementById('acca-win-prob'),
  stakeInput: document.getElementById('stake-input'),
  buildAccaBtn: document.getElementById('build-acca-btn'),
  filters: document.querySelectorAll('.pill'),
  search: document.getElementById('search-input')
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function weightedAverage(values, weights) {
  const totalWeight = weights.reduce((sum, item) => sum + item, 0);
  if (!totalWeight) return values[0] || 0;
  const weighted = values.reduce((sum, value, index) => sum + value * weights[index], 0);
  return weighted / totalWeight;
}

function computeFormBoost(team, opponent) {
  const strengthDelta = (team.homeStrength || team.homeGoalsScored) - (opponent.awayStrength || opponent.awayGoalsScored);
  return clamp(strengthDelta / 20, -1.2, 1.2);
}

function getStatusLabel(status) {
  if (status === 'live') return 'LIVE';
  if (status === 'finished') return 'FT';
  return 'Scheduled';
}

function getStatusClass(status) {
  if (status === 'live') return 'live';
  if (status === 'finished') return 'finished';
  return 'upcoming';
}

function calculateProbability(fixture) {
  const homeTotal = fixture.homeGoalsScored + fixture.homeForm * 0.21;
  const awayTotal = fixture.awayGoalsScored + fixture.awayForm * 0.19;
  const homeDef = fixture.homeGoalsConceded + 0.28;
  const awayDef = fixture.awayGoalsConceded + 0.28;
  const xgBase = Math.max(0.1, (homeTotal + awayTotal) / 2.2);

  const lineupBoost = (
    (fixture.lineup.home.keyPlayers.length * 0.12) -
    (fixture.lineup.home.missing.length * 0.08) +
    (fixture.lineup.away.keyPlayers.length * 0.09) -
    (fixture.lineup.away.missing.length * 0.08)
  );

  const restImpact = ((fixture.rest.home - fixture.rest.away) * 0.08);
  const travelImpact = ((fixture.travel.home - fixture.travel.away) * 0.06);
  const weatherImpact = (fixture.weather.rain * 0.18) + ((fixture.weather.wind > 12 ? 0.08 : 0) * 0.4);
  const venueImpact = (fixture.venue.includes('Stadium') ? 0.06 : 0.02);
  const h2hImpact = fixture.h2h * 0.08;

  const attackStrength = (homeTotal * 0.58 + awayTotal * 0.42) / 2;
  const defenseWeakness = (homeDef * 0.52 + awayDef * 0.48) / 2;

  const combined =
    xgBase +
    attackStrength * 0.7 +
    lineupBoost +
    restImpact +
    travelImpact +
    weatherImpact +
    venueImpact +
    h2hImpact -
    defenseWeakness * 0.55;

  const rawOver15 = clamp((0.67 + combined * 0.12), 0.35, 0.92);
  const rawOver25 = clamp((0.38 + combined * 0.16), 0.18, 0.8);

  const over15 = clamp(rawOver15 + (fixture.recentXg.home + fixture.recentXg.away) * 0.04, 0.38, 0.9);
  const over25 = clamp(rawOver25 + (fixture.recentXg.home + fixture.recentXg.away) * 0.03, 0.16, 0.78);

  const confidence = clamp(((fixture.homeStrength + fixture.awayStrength) / 2 - 55) / 18 + (fixture.homeForm + fixture.awayForm) / 25, 0.38, 0.94);

  return {
    over15,
    over25,
    confidence,
    fairOdds15: 1 / over15,
    fairOdds25: 1 / over25,
    rawCombined: combined,
    expectedGoals: ((fixture.homeGoalsScored + fixture.awayGoalsScored) / 2) + combined * 0.65
  };
}

function getMarketLabel(market) {
  if (market === 'over15') return 'Over 1.5';
  if (market === 'over25') return 'Over 2.5';
  if (market === 'btts') return 'BTTS';
  return 'High probability';
}

function getPredictedMatchValue(fixture) {
  const p = calculateProbability(fixture);
  const approxOdds15 = clamp(1.7 + (0.62 - p.over15) * 2.8, 1.2, 3.4);
  const approxOdds25 = clamp(2.25 + (0.58 - p.over25) * 3.4, 1.4, 4.5);

  return {
    ...p,
    bookmakerOdds15: Number(approxOdds15.toFixed(2)),
    bookmakerOdds25: Number(approxOdds25.toFixed(2)),
    value15: Number(((p.over15 * approxOdds15) - 1).toFixed(3)),
    value25: Number(((p.over25 * approxOdds25) - 1).toFixed(3)),
    edge15: Number((p.over15 - (1 / approxOdds15)).toFixed(3)),
    edge25: Number((p.over25 - (1 / approxOdds25)).toFixed(3))
  };
}

function sortMatches(matches) {
  return [...matches].sort((a, b) => b._score - a._score);
}

function getVisibleFixtures() {
  const query = state.query.trim().toLowerCase();
  let filtered = fixturesSeed.map((fixture) => {
    const prediction = getPredictedMatchValue(fixture);
    const selector = {
      over15: prediction.over15,
      over25: prediction.over25,
      btts: clamp((prediction.over15 + prediction.over25) / 2, 0.25, 0.8),
      high: Math.max(prediction.over15, prediction.over25) + prediction.confidence * 0.12
    };

    const score =
      selector[state.market === 'all' ? 'high' : state.market] * 100 +
      prediction.confidence * 40 +
      (prediction.value25 > 0 ? prediction.value25 * 30 : 0) +
      (prediction.value15 > 0 ? prediction.value15 * 18 : 0);

    return {
      ...fixture,
      _score: score,
      _prediction: prediction
    };
  });

  if (query) {
    filtered = filtered.filter((fixture) => {
      const haystack = `${fixture.home} ${fixture.away} ${fixture.competition}`.toLowerCase();
      return haystack.includes(query);
    });
  }

  return filtered;
}

function renderFixtures() {
  const fixtures = sortMatches(getVisibleFixtures());
  els.fixtureCount.textContent = String(fixtures.length);

  if (!fixtures.length) {
    els.cards.innerHTML = `
      <div class="match-card">
        <div class="match-card-header">
          <div class="card-tag">No matches</div>
        </div>
        <div class="analysis-list">
          <li>No fixtures match your current filter or search.</li>
        </div>
      </div>
    `;
    return;
  }

  els.cards.innerHTML = fixtures
    .map((fixture) => {
      const p = fixture._prediction;
      const over15 = p.over15;
      const over25 = p.over25;
      const runMarket = over25 > over15 ? 'Over 2.5' : 'Over 1.5';
      const confidence = (p.confidence * 100).toFixed(0);
      const matchStatus = getStatusLabel(fixture.status);
      const badgeClass = getStatusClass(fixture.status);

      return `
        <article class="match-card" data-id="${fixture.id}">
          <div class="match-card-header">
            <div class="card-tag">${fixture.competition}</div>
            <span class="status-pill ${badgeClass}">${matchStatus}</span>
          </div>

          <div class="match-teams">
            <div class="team-row">
              <div class="team-name-wrap">
                <div class="team-badge">${fixture.home.slice(0, 1)}</div>
                <span class="team-name">${fixture.home}</span>
              </div>
              <span class="team-score">${fixture.home.startsWith('Manchester') ? 1 : 2}</span>
            </div>
            <div class="team-row">
              <div class="team-name-wrap">
                <div class="team-badge" style="background: linear-gradient(135deg, rgba(255, 217, 182, 0.9), rgba(181, 192, 255, 0.8));">${fixture.away.slice(0, 1)}</div>
                <span class="team-name">${fixture.away}</span>
              </div>
              <span class="team-score">${fixture.away.startsWith('Brighton') ? 0 : 1}</span>
            </div>
          </div>

          <div class="match-meta">
            <span>${new Date(fixture.kickOff).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            <span>${fixture.venue}</span>
          </div>

          <div class="prediction-box">
            <div class="market-row">
              <div class="market-label">Over 1.5</div>
              <div class="market-values">
                <span class="market-pct ${over15 > 0.64 ? '' : 'warning'}">${(over15 * 100).toFixed(0)}%</span>
                <span class="value-tag ${p.value15 > 0 ? '' : 'low'}">EV ${(p.value15 * 100).toFixed(0)}%</span>
              </div>
            </div>
            <div class="market-row">
              <div class="market-label">Over 2.5</div>
              <div class="market-values">
                <span class="market-pct ${over25 > 0.5 ? '' : 'warning'}">${(over25 * 100).toFixed(0)}%</span>
                <span class="value-tag ${p.value25 > 0 ? '' : 'low'}">EV ${(p.value25 * 100).toFixed(0)}%</span>
              </div>
            </div>

            <div class="market-row">
              <div class="market-label">Confidence</div>
              <div class="market-values">
                <span class="kicker">${confidence}%</span>
                <span class="kicker">Best ${runMarket}</span>
              </div>
            </div>
          </div>

          <ul class="analysis-list">
            <li>Home xG ${fixture.recentXg.home.toFixed(2)} • away xG ${fixture.recentXg.away.toFixed(2)}</li>
            <li>Rest gap ${fixture.rest.home - fixture.rest.away >= 0 ? '+' : ''}${fixture.rest.home - fixture.rest.away} days • venue ${fixture.weather.condition}</li>
            <li>${fixture.notes[0]}</li>
            <li>Key risk: ${fixture.lineup.home.missing.length ? `${fixture.lineup.home.missing.join(', ')} absent` : 'No major lineup issue'}</li>
          </ul>
        </article>
      `;
    })
    .join('');
}

function buildAcca() {
  const candidates = fixturesSeed
    .map((fixture) => {
      const p = getPredictedMatchValue(fixture);
      const over15Odds = Number(p.bookmakerOdds15.toFixed(2));
      const over25Odds = Number(p.bookmakerOdds25.toFixed(2));
      return [
        {
          fixture,
          market: 'Over 1.5',
          odds: over15Odds,
          prob: p.over15,
          edge: p.value15,
          expectedReturn: (p.over15 * over15Odds) - 1,
          label: `${fixture.home} vs ${fixture.away}`
        },
        {
          fixture,
          market: 'Over 2.5',
          odds: over25Odds,
          prob: p.over25,
          edge: p.value25,
          expectedReturn: (p.over25 * over25Odds) - 1,
          label: `${fixture.home} vs ${fixture.away}`
        }
      ];
    })
    .flat();

  const ranked = [...candidates]
    .sort((a, b) => {
      return (b.expectedReturn + b.edge * 0.55) - (a.expectedReturn + a.edge * 0.55);
    })
    .slice(0, 3);

  const stake = Number(els.stakeInput.value) || 10;
  const totalOdds = ranked.reduce((sum, item) => sum * item.odds, 1);
  const totalWinProb = ranked.reduce((sum, item) => sum * item.prob, 1);
  const returnAmount = stake * totalOdds;

  els.accaList.innerHTML = ranked
    .map((item) => `
      <div class="acca-item">
        <div class="acca-item-head">
          <span>${item.label}</span>
          <span>${item.market}</span>
        </div>
        <div class="acca-item-body">
          <span>${(item.prob * 100).toFixed(0)}% chance</span>
          <strong>${item.odds.toFixed(2)}x</strong>
        </div>
      </div>
    `)
    .join('');

  els.accaTotalOdds.textContent = totalOdds.toFixed(2);
  els.accaReturn.textContent = `£${returnAmount.toFixed(2)}`;
  els.accaWinProb.textContent = `${(totalWinProb * 100).toFixed(1)}%`;
}

function attachEvents() {
  els.filters.forEach((button) => {
    button.addEventListener('click', () => {
      state.market = button.dataset.market;
      els.filters.forEach((btn) => btn.classList.toggle('active', btn === button));
      renderFixtures();
    });
  });

  els.search.addEventListener('input', (event) => {
    state.query = event.target.value;
    renderFixtures();
  });

  els.stakeInput.addEventListener('input', (event) => {
    state.stake = Number(event.target.value) || 10;
    buildAcca();
  });

  els.buildAccaBtn.addEventListener('click', () => {
    buildAcca();
    document.getElementById('acca-panel').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

function animateLiveUpdates() {
  const tick = () => {
    const cards = document.querySelectorAll('.match-card');
    cards.forEach((card, index) => {
      if (index % 2 === 0) {
        card.style.transform = 'translateY(-1px)';
      }
    });
  };

  setInterval(tick, 15000);
}

function init() {
  renderFixtures();
  buildAcca();
  attachEvents();
  animateLiveUpdates();
}

init();
