const ranks = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
const suits = ["♠", "♥", "♦", "♣"];

const raiseSizes = {
  UTG: 2,
  HJ: 2,
  CO: 2.3,
  BTN: 2.5,
  SB: 3
};

const positionOrder = ["UTG", "HJ", "CO", "BTN", "SB"];

const openFrequencyMaps = {
  UTG: [
    "100 100 100 100 100 100 100 100 100 100 100 100 40",
    "100 100 100 100 100 100 100 70 50 50 0 0 0",
    "100 100 100 100 100 100 0 0 0 0 0 0 0",
    "100 100 40 100 100 70 0 0 0 0 0 0 0",
    "100 0 0 0 100 100 0 0 0 0 0 0 0",
    "0 0 0 0 0 100 10 0 0 0 0 0 0",
    "0 0 0 0 0 0 100 0 0 0 0 0 0",
    "0 0 0 0 0 0 0 100 0 0 0 0 0",
    "0 0 0 0 0 0 0 0 100 0 0 0 0",
    "0 0 0 0 0 0 0 0 0 50 0 0 0",
    "0 0 0 0 0 0 0 0 0 0 10 0 0",
    "0 0 0 0 0 0 0 0 0 0 0 10 0",
    "0 0 0 0 0 0 0 0 0 0 0 0 10"
  ],
  HJ: [
    "100 100 100 100 100 100 100 100 100 100 100 100 100",
    "100 100 100 100 100 100 100 100 100 100 0 0 0",
    "100 100 100 100 100 100 90 0 0 0 0 0 0",
    "100 100 100 100 100 100 0 0 0 0 0 0 0",
    "100 80 30 20 100 100 60 0 0 0 0 0 0",
    "60 0 0 0 0 100 90 0 0 0 0 0 0",
    "0 0 0 0 0 0 100 0 0 0 0 0 0",
    "0 0 0 0 0 0 0 100 0 0 0 0 0",
    "0 0 0 0 0 0 0 0 100 0 0 0 0",
    "0 0 0 0 0 0 0 0 0 100 0 0 0",
    "0 0 0 0 0 0 0 0 0 0 40 0 0",
    "0 0 0 0 0 0 0 0 0 0 0 10 0",
    "0 0 0 0 0 0 0 0 0 0 0 0 10"
  ],
  CO: [
    "100 100 100 100 100 100 100 100 100 100 100 100 100",
    "100 100 100 100 100 100 100 100 100 100 100 100 50",
    "100 100 100 100 100 100 100 100 100 100 0 0 0",
    "100 100 100 100 100 100 100 100 0 0 0 0 0",
    "100 100 100 100 100 100 100 10 0 0 0 0 0",
    "100 10 0 0 0 100 100 100 0 0 0 0 0",
    "100 0 0 0 0 0 100 80 0 0 0 0 0",
    "0 0 0 0 0 0 0 100 10 0 0 0 0",
    "0 0 0 0 0 0 0 0 100 10 0 0 0",
    "80 0 0 0 0 0 0 0 0 100 0 0 0",
    "0 0 0 0 0 0 0 0 0 0 100 0 0",
    "0 0 0 0 0 0 0 0 0 0 0 20 0",
    "0 0 0 0 0 0 0 0 0 0 0 0 20"
  ],
  BTN: [
    "100 100 100 100 100 100 100 100 100 100 100 100 100",
    "100 100 100 100 100 100 100 100 100 100 100 100 100",
    "100 100 100 100 100 100 100 100 100 100 100 100 100",
    "100 100 100 100 100 100 100 100 100 100 80 0 0",
    "100 100 100 100 100 100 100 100 100 0 0 0 0",
    "100 100 100 100 100 100 100 100 100 0 0 0 0",
    "100 80 0 10 80 0 100 100 100 0 0 0 0",
    "100 20 0 0 0 0 0 100 100 90 0 0 0",
    "100 0 0 0 0 0 0 0 100 100 0 0 0",
    "100 0 0 0 0 0 0 0 0 100 70 0 0",
    "100 0 0 0 0 0 0 0 0 0 100 0 0",
    "80 0 0 0 0 0 0 0 0 0 0 100 0",
    "0 0 0 0 0 0 0 0 0 0 0 0 70"
  ],
  SB: [
    "100 100 100 100 100 100 90 80 70 70 70 60 90",
    "100 100 100 100 90 90 80 90 100 100 90 100 100",
    "100 100 100 90 80 80 100 100 100 90 90 90 80",
    "100 100 100 100 80 80 100 100 90 90 70 40 0",
    "100 100 100 100 100 80 80 100 100 30 0 0 0",
    "100 100 80 80 90 80 80 100 100 40 0 0 0",
    "100 70 30 30 70 70 80 100 100 90 0 0 0",
    "100 20 0 0 0 0 0 70 100 90 40 0 0",
    "90 0 0 0 0 0 0 0 80 80 70 0 0",
    "100 0 0 0 0 0 0 0 0 80 80 60 0",
    "90 0 0 0 0 0 0 0 0 0 80 0 0",
    "80 0 0 0 0 0 0 0 0 0 0 80 0",
    "0 0 0 0 0 0 0 0 0 0 0 0 80"
  ]
};

const callFrequencyMaps = {
  SB: [
    "0 0 0 0 0 0 10 20 30 30 30 40 10",
    "0 0 0 0 10 10 20 10 0 0 10 0 0",
    "0 0 0 10 20 20 0 0 0 10 10 10 20",
    "0 0 0 0 20 20 0 0 10 10 30 60 10",
    "0 0 0 0 0 20 20 0 0 70 10 0 0",
    "0 0 20 20 10 20 20 0 0 60 0 0 0",
    "0 30 60 40 30 30 20 0 0 10 0 0 0",
    "0 50 0 10 0 10 20 30 0 10 60 0 0",
    "10 30 0 0 0 0 10 10 20 20 30 0 0",
    "0 0 0 0 0 0 0 0 0 20 20 40 0",
    "10 0 0 0 0 0 0 0 0 0 20 0 0",
    "20 0 0 0 0 0 0 0 0 0 0 20 0",
    "20 0 0 0 0 0 0 0 0 0 0 0 20"
  ]
};

const defaultDeck = Object.entries(openFrequencyMaps).flatMap(([position, rows]) =>
  rows.flatMap((row, rowIndex) =>
    row.split(" ").map((frequency, columnIndex) => ({
      spot: "RFI",
      position,
      hand: handName(rowIndex, columnIndex),
      openFrequency: Number(frequency),
      callFrequency: Number(callFrequencyMaps[position]?.[rowIndex]?.split(" ")[columnIndex] || 0),
      raiseSize: raiseSizes[position]
    }))
  )
);

const storageKeys = {
  deck: "preflop100bb.deck.v4",
  stats: "preflop100bb.stats.v3",
  rewards: "preflop100bb.rewards.v1"
};

const els = {
  homeScreen: document.querySelector("#homeScreen"),
  studyScreen: document.querySelector("#studyScreen"),
  statsScreen: document.querySelector("#statsScreen"),
  rangeScreen: document.querySelector("#rangeScreen"),
  homeButton: document.querySelector("#homeButton"),
  statsButton: document.querySelector("#statsButton"),
  studyButton: document.querySelector("#studyButton"),
  startStudyButton: document.querySelector("#startStudyButton"),
  openStatsButton: document.querySelector("#openStatsButton"),
  openRangeButton: document.querySelector("#openRangeButton"),
  homeStreak: document.querySelector("#homeStreak"),
  homeChips: document.querySelector("#homeChips"),
  cardKicker: document.querySelector("#cardKicker"),
  handTitle: document.querySelector("#handTitle"),
  cardArt: document.querySelector("#cardArt"),
  answerStatus: document.querySelector("#answerStatus"),
  frequencySlider: document.querySelector("#frequencySlider"),
  frequencyValue: document.querySelector("#frequencyValue"),
  callControl: document.querySelector("#callControl"),
  callSlider: document.querySelector("#callSlider"),
  callValue: document.querySelector("#callValue"),
  raiseControl: document.querySelector("#raiseControl"),
  raiseSlider: document.querySelector("#raiseSlider"),
  raiseValue: document.querySelector("#raiseValue"),
  checkButton: document.querySelector("#checkButton"),
  resultPanel: document.querySelector("#resultPanel"),
  resultTitle: document.querySelector("#resultTitle"),
  resultDetail: document.querySelector("#resultDetail"),
  compareStack: document.querySelector("#compareStack"),
  callCompareRow: document.querySelector("#callCompareRow"),
  frequencyAnswerMarker: document.querySelector("#frequencyAnswerMarker"),
  frequencyGuessMarker: document.querySelector("#frequencyGuessMarker"),
  callAnswerMarker: document.querySelector("#callAnswerMarker"),
  callGuessMarker: document.querySelector("#callGuessMarker"),
  raiseAnswerMarker: document.querySelector("#raiseAnswerMarker"),
  raiseGuessMarker: document.querySelector("#raiseGuessMarker"),
  frequencyAnswerLabel: document.querySelector("#frequencyAnswerLabel"),
  frequencyGuessLabel: document.querySelector("#frequencyGuessLabel"),
  callAnswerLabel: document.querySelector("#callAnswerLabel"),
  callGuessLabel: document.querySelector("#callGuessLabel"),
  raiseAnswerLabel: document.querySelector("#raiseAnswerLabel"),
  raiseGuessLabel: document.querySelector("#raiseGuessLabel"),
  prevButton: document.querySelector("#prevButton"),
  nextButton: document.querySelector("#nextButton"),
  shuffleButton: document.querySelector("#shuffleButton"),
  spotFilter: document.querySelector("#spotFilter"),
  positionFilter: document.querySelector("#positionFilter"),
  orderFilter: document.querySelector("#orderFilter"),
  modeFilter: document.querySelector("#modeFilter"),
  streakStatus: document.querySelector("#streakStatus"),
  chipStatus: document.querySelector("#chipStatus"),
  potStatus: document.querySelector("#potStatus"),
  statHands: document.querySelector("#statHands"),
  statAccuracy: document.querySelector("#statAccuracy"),
  statMisses: document.querySelector("#statMisses"),
  statBestStreak: document.querySelector("#statBestStreak"),
  positionStats: document.querySelector("#positionStats"),
  weakList: document.querySelector("#weakList"),
  missPracticeButton: document.querySelector("#missPracticeButton"),
  allPracticeButton: document.querySelector("#allPracticeButton"),
  rangeBackButton: document.querySelector("#rangeBackButton"),
  rangePosition: document.querySelector("#rangePosition"),
  rangeGrid: document.querySelector("#rangeGrid"),
  practiceRangeButton: document.querySelector("#practiceRangeButton"),
  deckEditor: document.querySelector("#deckEditor"),
  saveDeckButton: document.querySelector("#saveDeckButton"),
  exportButton: document.querySelector("#exportButton"),
  importFile: document.querySelector("#importFile")
};

let deck = normalizeDeck(loadJson(storageKeys.deck, defaultDeck));
let stats = loadJson(storageKeys.stats, {});
let rewards = loadJson(storageKeys.rewards, { streak: 0, chips: 0, bestStreak: 0 });
let filtered = [];
let index = 0;
let answered = false;
let currentCorrect = false;
let currentRevealed = false;
let autoAdvanceTimer = null;
let lastGuess = { frequency: 50, call: 0, raise: 2.5 };
let currentPot = { reward: 0, penalty: 0, label: "" };
let lastPot = { reward: 0, penalty: 0, label: "" };

function loadJson(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function handName(rowIndex, columnIndex) {
  if (rowIndex === columnIndex) return `${ranks[rowIndex]}${ranks[rowIndex]}`;
  if (columnIndex > rowIndex) return `${ranks[rowIndex]}${ranks[columnIndex]}s`;
  return `${ranks[columnIndex]}${ranks[rowIndex]}o`;
}

function cardId(card) {
  return [card.spot, card.position, card.hand].join("|");
}

function normalizeDeck(input) {
  if (!Array.isArray(input)) throw new Error("Deck must be an array.");
  return input
    .map((card) => {
      const position = String(card.position || "").trim();
      const fallbackOpen = actionToOpenFrequency(card.action);
      return {
        spot: String(card.spot || "RFI").trim(),
        position,
        hand: String(card.hand || "").trim(),
        openFrequency: clampToTen(Number(card.openFrequency ?? fallbackOpen)),
        callFrequency: clampToTen(Number(card.callFrequency ?? 0)),
        raiseSize: Number(card.raiseSize ?? raiseSizes[position] ?? 0)
      };
    })
    .filter((card) => card.spot && card.position && card.hand && Number.isFinite(card.openFrequency));
}

function actionToOpenFrequency(action = "") {
  if (!action) return 0;
  if (action.includes("Open") && action.includes("mix")) return 50;
  return action.includes("Open") ? 100 : 0;
}

function clampToTen(value) {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(100, Math.round(value / 10) * 10));
}

function fillSelect(select, values, allLabel) {
  const current = select.value;
  select.replaceChildren(
    new Option(allLabel, "all"),
    ...values.map((value) => new Option(value, value))
  );
  select.value = values.includes(current) ? current : "all";
}

function refreshFilters() {
  const spots = [...new Set(deck.map((card) => card.spot))].sort();
  const positions = [...new Set(deck.map((card) => card.position))].sort(
    (a, b) => positionRank(a) - positionRank(b) || a.localeCompare(b)
  );
  fillSelect(els.spotFilter, spots, "All");
  fillSelect(els.positionFilter, positions, "All");
}

function positionRank(position) {
  const rank = positionOrder.indexOf(position);
  return rank === -1 ? Number.MAX_SAFE_INTEGER : rank;
}

function applyFilters() {
  const spot = els.spotFilter.value;
  const position = els.positionFilter.value;
  const mode = els.modeFilter.value;
  const randomAll = els.orderFilter.value === "random-all";
  filtered = deck.filter((card) => {
    const stat = stats[cardId(card)];
    if (spot !== "all" && card.spot !== spot) return false;
    if (!randomAll && position !== "all" && card.position !== position) return false;
    if (mode === "missed" && (!stat || stat.miss === 0)) return false;
    if (mode === "unseen" && stat) return false;
    return true;
  });
  index = Math.min(index, Math.max(filtered.length - 1, 0));
  answered = false;
  currentCorrect = false;
  currentRevealed = false;
  render();
}

function resetFilteredDeck() {
  index = 0;
  applyFilters();
}

function render() {
  const card = filtered[index];
  els.resultPanel.hidden = !answered;
  els.checkButton.textContent = answered && !currentCorrect ? "次へ" : "判定";
  updateRewards();

  if (!card) {
    els.cardKicker.textContent = "No cards";
    els.handTitle.textContent = "Empty";
    els.cardArt.replaceChildren();
    els.answerStatus.textContent = "Deckを調整してください";
    updateAccuracy();
    return;
  }

  els.cardKicker.textContent = `${card.spot} · ${card.position}`;
  els.handTitle.textContent = card.hand;
  els.answerStatus.textContent = answered ? rewardMessage() : "オープン頻度とレイズ額を選択";
  if (!answered) {
    currentPot = calculatePot(card);
  }
  renderPot();
  renderCards(card.hand);
  updateSliderLabels();
  if (answered) showResult(card, currentRevealed);
  updateAccuracy();
}

function renderCards(hand) {
  const [left, right] = handToCards(hand);
  els.cardArt.replaceChildren(cardElement(left), cardElement(right));
}

function handToCards(hand) {
  const first = hand[0];
  const second = hand[1];
  if (hand.length === 2) return [{ rank: first, suit: suits[0] }, { rank: second, suit: suits[1] }];
  if (hand.endsWith("s")) return [{ rank: first, suit: suits[1] }, { rank: second, suit: suits[1] }];
  return [{ rank: first, suit: suits[0] }, { rank: second, suit: suits[2] }];
}

function cardElement(card) {
  const el = document.createElement("span");
  el.className = `poker-card ${["♥", "♦"].includes(card.suit) ? "is-red" : "is-black"}`;
  el.innerHTML = `<span>${card.rank}</span><strong>${card.suit}</strong><span>${card.rank}</span>`;
  return el;
}

function updateSliderLabels() {
  els.frequencyValue.textContent = `${els.frequencySlider.value}%`;
  els.callValue.textContent = `${els.callSlider.value}%`;
  const size = Number(els.raiseSlider.value);
  els.raiseValue.textContent = size === 0 ? "なし" : `${size.toFixed(size % 1 ? 1 : 0)}bb`;
  syncCallVisibility();
  syncRaiseLock();
}

function checkAnswer() {
  const card = filtered[index];
  if (!card) return;
  if (answered && !currentCorrect) {
    moveToNext();
    return;
  }
  const guessedFrequency = Number(els.frequencySlider.value);
  const guessedCall = Number(els.callSlider.value);
  const guessedRaise = Number(els.raiseSlider.value);
  lastGuess = { frequency: guessedFrequency, call: guessedCall, raise: guessedRaise };
  lastPot = { ...currentPot };
  const raiseCorrect = guessedFrequency === 0 || Math.abs(guessedRaise - card.raiseSize) < 0.11;
  const callCorrect = !usesCall(card) || guessedCall === card.callFrequency;
  currentCorrect = guessedFrequency === card.openFrequency && callCorrect && raiseCorrect;
  currentRevealed = false;
  answered = true;
  showResult(card);
  if (currentCorrect) {
    recordAnswer("good", lastPot);
    scheduleAutoAdvance(1500);
  } else {
    recordAnswer("miss", lastPot);
  }
  render();
}

function showResult(card, revealed = false) {
  const guessedFrequency = lastGuess.frequency;
  const guessedCall = lastGuess.call;
  const guessedRaise = lastGuess.raise;
  const correctRaise = card.openFrequency === 0 ? "なし" : `${formatSize(card.raiseSize)}bb`;
  const yourRaise = guessedRaise === 0 ? "なし" : `${formatSize(guessedRaise)}bb`;
  const callText = usesCall(card) ? ` / call ${card.callFrequency}%` : "";
  const yourCallText = usesCall(card) ? ` / call ${guessedCall}%` : "";
  els.resultPanel.hidden = false;
  els.resultPanel.classList.toggle("is-correct", currentCorrect && !revealed);
  els.resultPanel.classList.toggle("is-miss", !currentCorrect || revealed);
  els.resultTitle.textContent = revealed ? "正解を表示" : currentCorrect ? "正解" : "もう一歩";
  els.resultDetail.textContent =
    currentCorrect
      ? `正解: ${card.openFrequency}% open${callText} / ${correctRaise} · +${lastPot.reward} chips`
      : `正解: ${card.openFrequency}% open${callText} / ${correctRaise} · 選択: ${guessedFrequency}%${yourCallText} / ${yourRaise} · -${lastPot.penalty} chips`;
  renderComparison(card, guessedFrequency, guessedCall, guessedRaise);
}

function renderComparison(card, guessedFrequency, guessedCall, guessedRaise) {
  els.compareStack.hidden = currentCorrect;
  els.callCompareRow.hidden = !usesCall(card);
  setMarker(els.frequencyAnswerMarker, card.openFrequency);
  setMarker(els.frequencyGuessMarker, guessedFrequency);
  setMarker(els.callAnswerMarker, card.callFrequency || 0);
  setMarker(els.callGuessMarker, guessedCall);
  setMarker(els.raiseAnswerMarker, raiseToPercent(card.openFrequency === 0 ? 0 : card.raiseSize));
  setMarker(els.raiseGuessMarker, raiseToPercent(guessedRaise));
  els.frequencyAnswerLabel.textContent = `${card.openFrequency}%`;
  els.frequencyGuessLabel.textContent = `${guessedFrequency}%`;
  els.callAnswerLabel.textContent = `${card.callFrequency || 0}%`;
  els.callGuessLabel.textContent = `${guessedCall}%`;
  els.raiseAnswerLabel.textContent = card.openFrequency === 0 ? "なし" : `${formatSize(card.raiseSize)}bb`;
  els.raiseGuessLabel.textContent = guessedRaise === 0 ? "なし" : `${formatSize(guessedRaise)}bb`;
}

function setMarker(marker, percent) {
  marker.style.left = `${Math.max(0, Math.min(100, percent))}%`;
}

function raiseToPercent(value) {
  return (Number(value) / 3) * 100;
}

function usesCall(card) {
  return card.position === "SB";
}

function formatSize(value) {
  return Number(value).toFixed(Number(value) % 1 ? 1 : 0);
}

function updateAccuracy() {
  const values = Object.values(stats);
  const good = values.reduce((sum, item) => sum + (item.good || 0), 0);
  const miss = values.reduce((sum, item) => sum + (item.miss || 0), 0);
  const total = good + miss;
  const rate = total ? Math.round((good / total) * 100) : 0;
  return rate;
}

function updateRewards() {
  rewards.streak = Number(rewards.streak || 0);
  rewards.chips = Number(rewards.chips || 0);
  rewards.bestStreak = Number(rewards.bestStreak || 0);
  els.streakStatus.textContent = `STREAK ${rewards.streak}`;
  els.chipStatus.textContent = `CHIPS ${rewards.chips}`;
  els.homeStreak.textContent = `STREAK ${rewards.streak}`;
  els.homeChips.textContent = `CHIPS ${rewards.chips}`;
}

function renderPot() {
  els.potStatus.textContent = `${currentPot.label} +${currentPot.reward} / -${currentPot.penalty}`;
  els.potStatus.classList.toggle("is-risky", currentPot.reward >= 28);
}

function rewardMessage() {
  if (!currentCorrect) return "次で取り返そう";
  if (rewards.streak >= 10) return "テーブルを支配中";
  if (rewards.streak >= 5) return "連続正解ボーナス中";
  return "ナイスプレイ";
}

function applyReward(kind, pot = currentPot) {
  if (kind === "good") {
    rewards.streak = Number(rewards.streak || 0) + 1;
    rewards.bestStreak = Math.max(Number(rewards.bestStreak || 0), rewards.streak);
    rewards.chips = Number(rewards.chips || 0) + pot.reward;
  } else {
    rewards.streak = 0;
    rewards.chips = Math.max(0, Number(rewards.chips || 0) - pot.penalty);
  }
  localStorage.setItem(storageKeys.rewards, JSON.stringify(rewards));
  updateRewards();
}

function calculatePot(card) {
  const stat = stats[cardId(card)] || {};
  const attempts = (stat.good || 0) + (stat.miss || 0);
  const missRate = attempts ? (stat.miss || 0) / attempts : 0;
  const frequencyEdge = Math.min(card.openFrequency, 100 - card.openFrequency);
  const mixedDifficulty = frequencyEdge > 0 ? Math.round((frequencyEdge / 50) * 10) : 0;
  const callDifficulty = usesCall(card) && card.callFrequency > 0 ? Math.round(Math.min(card.callFrequency, 100 - card.callFrequency) / 50 * 8) : 0;
  const weakBonus = Math.round(missRate * 14);
  const streakBonus = Math.min(Number(rewards.streak || 0), 8);
  const variance = stableVariance(cardId(card), attempts + Number(rewards.chips || 0));
  const reward = 8 + mixedDifficulty + callDifficulty + weakBonus + streakBonus + variance;
  const penalty = Math.max(4, Math.round(reward * (0.35 + missRate * 0.35)));
  const label = reward >= 28 ? "HIGH RISK POT" : mixedDifficulty >= 7 ? "MIX POT" : "POT";
  return { reward, penalty, label };
}

function stableVariance(seed, salt) {
  let hash = salt + 17;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) % 997;
  }
  return hash % 7;
}

function syncRaiseLock() {
  const openFrequency = Number(els.frequencySlider.value);
  const locked = openFrequency === 0;
  els.raiseSlider.disabled = locked;
  els.raiseControl.classList.toggle("is-disabled", locked);
  if (locked) {
    els.raiseSlider.value = "0";
    els.raiseValue.textContent = "なし";
  }
}

function syncCallVisibility() {
  const card = filtered[index];
  const visible = card ? usesCall(card) : false;
  els.callControl.hidden = !visible;
  if (!visible) {
    els.callSlider.value = "0";
    els.callValue.textContent = "0%";
  }
}

function renderStats() {
  const values = Object.values(stats);
  const good = values.reduce((sum, item) => sum + (item.good || 0), 0);
  const miss = values.reduce((sum, item) => sum + (item.miss || 0), 0);
  const total = good + miss;
  const rate = total ? Math.round((good / total) * 100) : 0;
  els.statHands.textContent = String(total);
  els.statAccuracy.textContent = `${rate}%`;
  els.statMisses.textContent = String(miss);
  els.statBestStreak.textContent = String(rewards.bestStreak || 0);
  renderPositionStats();
  renderWeakHands();
}

function renderPositionStats() {
  els.positionStats.replaceChildren(
    ...positionOrder.map((position) => {
      const cards = deck.filter((card) => card.position === position);
      const totals = cards.reduce(
        (sum, card) => {
          const stat = stats[cardId(card)] || {};
          sum.good += stat.good || 0;
          sum.miss += stat.miss || 0;
          return sum;
        },
        { good: 0, miss: 0 }
      );
      const total = totals.good + totals.miss;
      const rate = total ? Math.round((totals.good / total) * 100) : 0;
      const row = document.createElement("button");
      row.className = "position-row";
      row.type = "button";
      row.dataset.position = position;
      row.innerHTML = `
        <span>${position}</span>
        <b>${rate}%</b>
        <i><em style="width:${rate}%"></em></i>
        <small>${total} hands · miss ${totals.miss}</small>
      `;
      return row;
    })
  );
}

function renderWeakHands() {
  const weak = deck
    .map((card) => {
      const stat = stats[cardId(card)] || {};
      const good = stat.good || 0;
      const miss = stat.miss || 0;
      const total = good + miss;
      return { card, good, miss, total, rate: total ? good / total : 1 };
    })
    .filter((item) => item.miss > 0)
    .sort((a, b) => b.miss - a.miss || a.rate - b.rate)
    .slice(0, 5);

  if (!weak.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "まだ大きな弱点はありません";
    els.weakList.replaceChildren(empty);
    return;
  }

  els.weakList.replaceChildren(
    ...weak.map(({ card, good, miss, total }) => {
      const row = document.createElement("button");
      row.className = "weak-row";
      row.type = "button";
      row.dataset.position = card.position;
      row.dataset.hand = card.hand;
      row.innerHTML = `
        <span>${card.position}</span>
        <strong>${card.hand}</strong>
        <small>${card.openFrequency}% / ${formatSize(card.raiseSize)}bb</small>
        <b>${good}/${total}</b>
        <i>miss ${miss}</i>
      `;
      return row;
    })
  );
}

function showScreen(name) {
  clearAutoAdvance();
  els.homeScreen.hidden = name !== "home";
  els.studyScreen.hidden = name !== "study";
  els.statsScreen.hidden = name !== "stats";
  els.rangeScreen.hidden = name !== "range";
  els.statsButton.textContent = name === "stats" ? "×" : "%";
  els.shuffleButton.hidden = name !== "study";
  if (name === "stats") renderStats();
  if (name === "range") renderRangeMap();
  updateRewards();
}

function practiceMisses() {
  els.modeFilter.value = "missed";
  els.orderFilter.value = els.positionFilter.value === "all" ? "random-all" : "random-position";
  showScreen("study");
  resetFilteredDeck();
}

function practiceAllRandom() {
  els.positionFilter.value = "all";
  els.modeFilter.value = "all";
  els.orderFilter.value = "random-all";
  showScreen("study");
  resetFilteredDeck();
}

function practiceRangePosition() {
  practicePosition(els.rangePosition.value);
}

function practicePosition(position) {
  els.positionFilter.value = position;
  els.modeFilter.value = "all";
  els.orderFilter.value = "random-position";
  showScreen("study");
  resetFilteredDeck();
}

function practiceHand(position, hand) {
  const foundIndex = deck.findIndex((card) => card.position === position && card.hand === hand);
  if (foundIndex === -1) return;
  els.positionFilter.value = position;
  els.modeFilter.value = "all";
  els.orderFilter.value = "sequence";
  showScreen("study");
  applyFilters();
  const localIndex = filtered.findIndex((card) => card.position === position && card.hand === hand);
  if (localIndex !== -1) {
    index = localIndex;
    resetQuestionState();
    render();
  }
}

function renderRangeMap() {
  const position = els.rangePosition.value;
  const cards = deck.filter((card) => card.position === position);
  const byHand = Object.fromEntries(cards.map((card) => [card.hand, card]));
  els.rangeGrid.replaceChildren(
    ...ranks.flatMap((rowRank, rowIndex) =>
      ranks.map((columnRank, columnIndex) => {
        const hand = handName(rowIndex, columnIndex);
        const card = byHand[hand];
        const frequency = card ? card.openFrequency : 0;
        const call = card ? card.callFrequency || 0 : 0;
        const fold = Math.max(0, 100 - frequency - call);
        const cell = document.createElement("button");
        cell.className = "range-cell";
        cell.type = "button";
        cell.dataset.position = position;
        cell.dataset.hand = hand;
        cell.style.background = rangeColor(frequency, call, fold);
        cell.innerHTML = `<span>${hand}</span><b>${frequency}${call ? `/${call}` : ""}</b>`;
        return cell;
      })
    )
  );
}

function rangeColor(frequency, call = 0, fold = 100 - frequency - call) {
  if (frequency === 0 && call === 0) return "rgba(54, 92, 101, 0.92)";
  if (frequency === 100 && call === 0) return "rgba(241, 78, 82, 0.94)";
  const openEnd = frequency;
  const callEnd = frequency + call;
  return `linear-gradient(90deg,
    rgba(241, 78, 82, 0.94) 0 ${openEnd}%,
    rgba(82, 186, 95, 0.94) ${openEnd}% ${callEnd}%,
    rgba(54, 92, 101, 0.92) ${callEnd}% 100%)`;
}

function move(delta) {
  if (!filtered.length) return;
  clearAutoAdvance();
  index = (index + delta + filtered.length) % filtered.length;
  resetQuestionState();
  render();
}

function moveToNext() {
  if (!filtered.length) return;
  clearAutoAdvance();
  const mode = els.orderFilter.value;
  if (mode === "sequence" || filtered.length === 1) {
    index = (index + 1) % filtered.length;
  } else {
    index = randomNextIndex();
  }
  resetQuestionState();
  render();
}

function randomNextIndex() {
  if (filtered.length < 2) return 0;
  let next = index;
  while (next === index) {
    next = Math.floor(Math.random() * filtered.length);
  }
  return next;
}

function resetQuestionState() {
  answered = false;
  currentCorrect = false;
  currentRevealed = false;
  lastGuess = { frequency: 50, call: 0, raise: 2.5 };
  currentPot = { reward: 0, penalty: 0, label: "" };
  lastPot = { reward: 0, penalty: 0, label: "" };
  els.frequencySlider.value = "50";
  els.callSlider.value = "0";
  els.raiseSlider.value = "2.5";
  els.raiseSlider.disabled = false;
  els.raiseControl.classList.remove("is-disabled");
  els.callControl.hidden = true;
}

function shuffle() {
  for (let i = deck.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  localStorage.setItem(storageKeys.deck, JSON.stringify(deck));
  index = 0;
  applyFilters();
}

function recordAnswer(kind, pot = currentPot) {
  const card = filtered[index];
  if (!card) return;
  const id = cardId(card);
  stats[id] = stats[id] || { good: 0, miss: 0 };
  stats[id][kind] += 1;
  localStorage.setItem(storageKeys.stats, JSON.stringify(stats));
  applyReward(kind, pot);
  updateAccuracy();
  if (!els.statsScreen.hidden) renderStats();
}

function scheduleAutoAdvance(delay) {
  clearAutoAdvance();
  autoAdvanceTimer = window.setTimeout(() => {
    autoAdvanceTimer = null;
    moveToNext();
  }, delay);
}

function clearAutoAdvance() {
  if (!autoAdvanceTimer) return;
  window.clearTimeout(autoAdvanceTimer);
  autoAdvanceTimer = null;
}

function setDeck(nextDeck) {
  deck = normalizeDeck(nextDeck);
  localStorage.setItem(storageKeys.deck, JSON.stringify(deck));
  els.deckEditor.value = JSON.stringify(deck, null, 2);
  refreshFilters();
  applyFilters();
}

function csvToDeck(text) {
  const [headerLine, ...lines] = text.trim().split(/\r?\n/);
  const headers = headerLine.split(",").map((value) => value.trim());
  return lines.map((line) => {
    const values = line.split(",").map((value) => value.trim());
    return Object.fromEntries(headers.map((header, idx) => [header, values[idx] || ""]));
  });
}

function exportDeck() {
  const blob = new Blob([JSON.stringify(deck, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "preflop-100bb-frequency-deck.json";
  a.click();
  URL.revokeObjectURL(url);
}

els.frequencySlider.addEventListener("input", () => {
  updateSliderLabels();
});
els.callSlider.addEventListener("input", () => {
  updateSliderLabels();
});
els.raiseSlider.addEventListener("input", () => {
  updateSliderLabels();
});
els.checkButton.addEventListener("click", checkAnswer);
els.homeButton.addEventListener("click", () => showScreen("home"));
els.statsButton.addEventListener("click", () => showScreen(els.statsScreen.hidden ? "stats" : "study"));
els.startStudyButton.addEventListener("click", () => showScreen("study"));
els.openStatsButton.addEventListener("click", () => showScreen("stats"));
els.openRangeButton.addEventListener("click", () => showScreen("range"));
els.studyButton.addEventListener("click", () => showScreen("study"));
els.rangeBackButton.addEventListener("click", () => showScreen("home"));
els.rangePosition.addEventListener("change", renderRangeMap);
els.practiceRangeButton.addEventListener("click", practiceRangePosition);
els.rangeGrid.addEventListener("click", (event) => {
  const cell = event.target.closest("[data-position][data-hand]");
  if (cell) practiceHand(cell.dataset.position, cell.dataset.hand);
});
els.missPracticeButton.addEventListener("click", practiceMisses);
els.allPracticeButton.addEventListener("click", practiceAllRandom);
els.positionStats.addEventListener("click", (event) => {
  const row = event.target.closest("[data-position]");
  if (row) practicePosition(row.dataset.position);
});
els.weakList.addEventListener("click", (event) => {
  const row = event.target.closest("[data-position][data-hand]");
  if (row) practiceHand(row.dataset.position, row.dataset.hand);
});
els.prevButton.addEventListener("click", () => move(-1));
els.nextButton.addEventListener("click", moveToNext);
els.shuffleButton.addEventListener("click", shuffle);
els.spotFilter.addEventListener("change", resetFilteredDeck);
els.positionFilter.addEventListener("change", resetFilteredDeck);
els.orderFilter.addEventListener("change", resetFilteredDeck);
els.modeFilter.addEventListener("change", resetFilteredDeck);
els.saveDeckButton.addEventListener("click", () => {
  setDeck(JSON.parse(els.deckEditor.value));
});
els.exportButton.addEventListener("click", exportDeck);
els.importFile.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  const text = await file.text();
  const imported = file.name.endsWith(".csv") ? csvToDeck(text) : JSON.parse(text);
  setDeck(imported);
  event.target.value = "";
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then((registration) => registration.update());
}

els.deckEditor.value = JSON.stringify(deck, null, 2);
refreshFilters();
applyFilters();
showScreen("home");
