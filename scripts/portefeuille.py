# Génère src/data/portefeuilles.js à partir des exports CSV du suivi de portefeuille.
#
# Prérequis : pip install CurrencyConverter  (cours de référence historiques de la BCE)
#
# Usage (depuis le dossier du site) :
#   python3 scripts/portefeuille.py historique=Historique.csv big-bang=BigBang.csv epique=Epique.csv
#
# À chaque mise à jour, ajuster ASOF, EURUSD et CASH_PCT ci-dessous,
# et ajouter dans META le nom et le secteur de toute nouvelle ligne.
# Achats et ventes en dollars : convertis au cours BCE du jour de la transaction.
# Les CSV ne doivent JAMAIS être déposés dans le dépôt : ils contiennent les quantités.
# Le fichier généré ne contient que des pourcentages, des prix unitaires de marché et des dates.
import csv, json, sys
from datetime import date, timedelta
from collections import defaultdict
from currency_converter import CurrencyConverter, ECB_URL

ASOF = date(2026, 10, 19)   # date des cours de l'export
EURUSD = 1.1227             # dollars pour 1 euro à cette date
CASH_PCT = 4.3              # part des liquidités dans le total des avoirs en bourse (%)
OUT = "src/data/portefeuilles.js"

# Cours EUR/USD (dollars pour 1 euro) à saisir à la main pour les transactions plus récentes
# que les données BCE disponibles (le script s'arrête et indique les dates manquantes).
RATES_OVERRIDE = {
    date(2026, 9, 25): 1.1390,
    date(2026, 9, 28): 1.1372,
    date(2026, 10, 1): 1.1298,   # Banque de France
    date(2026, 10, 7): 1.1214,
}

# Ordre d'affichage sur l'accueil
PORTFOLIOS = [
    ("historique", "Portefeuille Historique"),
    ("big-bang", "Portefeuille Big Bang"),
    ("epique", "Portefeuille Épique"),
]

META = {
 # Portefeuille Historique
 "HIMS": ("Hims & Hers Health", "Santé"),
 "QXO": ("QXO", "Industrie & énergie"),
 "VIK": ("Viking Holdings", "Consommation"),
 "FIGS": ("FIGS", "Consommation"),
 "FIG": ("Figma", "Logiciel"),
 "0P0001DKPM.F": ("Indépendance AM Europe Small", "Fonds & ETF"),
 "ESE.PA": ("BNP Paribas Easy S&P 500", "Fonds & ETF"),
 "STRL": ("Sterling Infrastructure", "Industrie & énergie"),
 "BE": ("Bloom Energy", "Industrie & énergie"),
 "TSLA": ("Tesla", "Consommation"),
 "PLTR": ("Palantir", "Logiciel"),
 "ASML": ("ASML", "Semi-conducteurs & réseaux"),
 "MSCI": ("MSCI", "Services financiers"),
 "RKLB": ("Rocket Lab", "Industrie & énergie"),
 "AMD": ("AMD", "Semi-conducteurs & réseaux"),
 "BBIO": ("BridgeBio Pharma", "Santé"),
 "GRAB": ("Grab Holdings", "Internet & plateformes"),
 "INTC": ("Intel", "Semi-conducteurs & réseaux"),
 "TOST": ("Toast", "Logiciel"),
 "CAVA": ("Cava Group", "Consommation"),
 "ONON": ("On Holding", "Consommation"),
 "DUOL": ("Duolingo", "Internet & plateformes"),
 "MNDY": ("monday.com", "Logiciel"),
 "UBER": ("Uber", "Internet & plateformes"),
 "VRTX": ("Vertex Pharmaceuticals", "Santé"),
 "AXON": ("Axon Enterprise", "Industrie & énergie"),
 "ANET": ("Arista Networks", "Semi-conducteurs & réseaux"),
 "ALNY": ("Alnylam Pharmaceuticals", "Santé"),
 "DIS": ("Disney", "Médias & divertissement"),
 "SBUX": ("Starbucks", "Consommation"),
 "TTWO": ("Take-Two Interactive", "Médias & divertissement"),
 "CRM": ("Salesforce", "Logiciel"),
 "MDB": ("MongoDB", "Logiciel"),
 "ISRG": ("Intuitive Surgical", "Santé"),
 "CMG": ("Chipotle", "Consommation"),
 "META": ("Meta Platforms", "Internet & plateformes"),
 "GOOG": ("Alphabet", "Internet & plateformes"),
 "SHOP": ("Shopify", "Internet & plateformes"),
 "HUBS": ("HubSpot", "Logiciel"),
 "TTD": ("The Trade Desk", "Logiciel"),
 "ROKU": ("Roku", "Médias & divertissement"),
 "NFLX": ("Netflix", "Médias & divertissement"),
 "NVDA": ("Nvidia", "Semi-conducteurs & réseaux"),
 "AMZN": ("Amazon", "Internet & plateformes"),
 "MELI": ("MercadoLibre", "Internet & plateformes"),
 # Portefeuille Big Bang
 "SPOT": ("Spotify", "Médias & divertissement"),
 "BNTX": ("BioNTech", "Santé"),
 "YOU": ("Clear Secure", "Logiciel"),
 "AXP": ("American Express", "Services financiers"),
 "IONS": ("Ionis Pharmaceuticals", "Santé"),
 "RYTM": ("Rhythm Pharmaceuticals", "Santé"),
 "ONC": ("BeOne Medicines", "Santé"),
 "BROS": ("Dutch Bros", "Consommation"),
 "NET": ("Cloudflare", "Logiciel"),
 "MIRM": ("Mirum Pharmaceuticals", "Santé"),
 "FVRR": ("Fiverr", "Internet & plateformes"),
 "TMDX": ("TransMedics", "Santé"),
 "SN": ("SharkNinja", "Consommation"),
 "SOUN": ("SoundHound AI", "Logiciel"),
 "LYFT": ("Lyft", "Internet & plateformes"),
 "LMND": ("Lemonade", "Services financiers"),
 "SRAD": ("Sportradar", "Médias & divertissement"),
 # Portefeuille Épique
 "SEZL": ("Sezzle", "Services financiers"),
 "AVGO": ("Broadcom", "Semi-conducteurs & réseaux"),
 "KNSA": ("Kiniksa Pharmaceuticals", "Santé"),
 "LITE": ("Lumentum", "Semi-conducteurs & réseaux"),
 "SPG": ("Simon Property Group", "Immobilier"),
 "SU.PA": ("Schneider Electric", "Industrie & énergie"),
 "SYM": ("Symbotic", "Industrie & énergie"),
 "TKO": ("TKO Group", "Médias & divertissement"),
 "ULS": ("UL Solutions", "Industrie & énergie"),
 "UTHR": ("United Therapeutics", "Santé"),
 "WRBY": ("Warby Parker", "Consommation"),
 "DE": ("Deere & Company", "Industrie & énergie"),
 "MDLN": ("Medline", "Santé"),
 "MRVL": ("Marvell Technology", "Semi-conducteurs & réseaux"),
 "ROAD": ("Construction Partners", "Industrie & énergie"),
 "BLLN": ("BillionToOne", "Santé"),
 "HON": ("Honeywell", "Industrie & énergie"),
 "AMTM": ("Amentum", "Industrie & énergie"),
 "ARGX": ("argenx", "Santé"),
 "TBBB": ("BBB Foods", "Consommation"),
 "BLK": ("BlackRock", "Services financiers"),
 "BWXT": ("BWX Technologies", "Industrie & énergie"),
 "CME": ("CME Group", "Services financiers"),
 "FIX": ("Comfort Systems USA", "Industrie & énergie"),
 "CRWD": ("CrowdStrike", "Logiciel"),
 "DASH": ("DoorDash", "Internet & plateformes"),
 "EME": ("EMCOR Group", "Industrie & énergie"),
 "KARO": ("Karooooo", "Logiciel"),
 "KRYS": ("Krystal Biotech", "Santé"),
 "MA": ("Mastercard", "Services financiers"),
 "MDT": ("Medtronic", "Santé"),
 "MRNA": ("Moderna", "Santé"),
 "MLI": ("Mueller Industries", "Industrie & énergie"),
 "NTDOY": ("Nintendo", "Médias & divertissement"),
 "NU": ("Nu Holdings", "Services financiers"),
 "OC": ("Owens Corning", "Industrie & énergie"),
 "PLD": ("Prologis", "Immobilier"),
 "RDDT": ("Reddit", "Internet & plateformes"),
 "GOOGL": ("Alphabet", "Internet & plateformes"),
}
EUR = {"0P0001DKPM.F", "ESE.PA", "SU.PA"}           # lignes cotées en euros
DISPLAY = {"0P0001DKPM.F": "OPCVM", "ESE.PA": "ESE", "SU.PA": "SU"}


def d(s):
    s = str(s)
    return date(int(s[:4]), int(s[4:6]), int(s[6:]))


def fx(t):
    """Taux de conversion à la date des cours (valeur actuelle)."""
    return 1 if t in EUR else EURUSD


try:   # fichier BCE le plus récent ; à défaut, celui fourni avec le module
    _CC = CurrencyConverter(ECB_URL, fallback_on_missing_rate=True)
except Exception:
    _CC = CurrencyConverter(fallback_on_missing_rate=True)
_ECB_LAST = _CC.bounds["USD"].last_date


def fx_at(t, dt):
    """Taux de conversion au jour de la transaction (cours de référence BCE)."""
    if t in EUR:
        return 1
    if dt in RATES_OVERRIDE:
        return RATES_OVERRIDE[dt]
    if dt > _ECB_LAST:
        sys.exit(f"Pas de cours BCE pour le {dt} (données jusqu'au {_ECB_LAST}) : l'ajouter dans RATES_OVERRIDE.")
    return _CC.convert(1, "EUR", "USD", date=dt)


def irr_of(flows):
    def npv(r):
        return sum(a / (1 + r) ** ((dt - ASOF).days / 365.25) for dt, a in flows)
    lo, hi = -0.99, 10.0
    for _ in range(200):
        mid = (lo + hi) / 2
        if npv(mid) > 0:
            lo = mid
        else:
            hi = mid
    return (lo + hi) / 2


def build(slug, name, path):
    rows = list(csv.DictReader(open(path, encoding="utf-8-sig")))
    missing = sorted({r["Symbol"] for r in rows} - META.keys())
    if missing:
        sys.exit(f"[{slug}] Lignes inconnues, à ajouter dans META : {', '.join(missing)}")

    # Les fractions achetées le même jour au même prix sont regroupées en un seul mouvement.
    raw = defaultdict(lambda: [0.0, 0.0])        # (ticker, date, side) -> [quantité, coût]
    price = {}
    for r in rows:
        t = r["Symbol"]
        price[t] = float(r["Current Price"])
        k = (t, d(r["Trade Date"]), r["Transaction Type"])
        q = float(r["Quantity"])
        raw[k][0] += q
        raw[k][1] += q * float(r["Purchase Price"])
    lots = defaultdict(list)
    for (t, dt, side), (q, c) in raw.items():
        lots[t].append(dict(date=dt, qty=q, px=c / q, side=side))
    for t in lots:
        lots[t].sort(key=lambda l: (l["date"], l["side"] != "BUY"))

    created = min(l["date"] for ls in lots.values() for l in ls)

    # Lignes détenues
    holdings = []
    for t, ls in lots.items():
        buys = [l for l in ls if l["side"] == "BUY"]
        qty = sum(l["qty"] for l in buys) - sum(l["qty"] for l in ls if l["side"] == "SELL")
        if qty <= 1e-9:
            continue
        cost = sum(l["qty"] * l["px"] for l in buys)
        cost_eur = sum(l["qty"] * l["px"] / fx_at(t, l["date"]) for l in buys)
        pru = cost / sum(l["qty"] for l in buys)
        holdings.append(dict(t=t, val=qty * price[t] / fx(t), cost=cost_eur,
                             perf=price[t] / pru - 1, first=buys[0]["date"]))
    tot = sum(h["val"] for h in holdings)
    tot_cost = sum(h["cost"] for h in holdings)

    positions = []
    for h in sorted(holdings, key=lambda h: -h["val"]):
        nm, sector = META[h["t"]]
        positions.append(dict(ticker=DISPLAY.get(h["t"], h["t"]), name=nm, sector=sector,
                              weight=round(100 * h["val"] / tot, 2),
                              invested=round(100 * h["cost"] / tot_cost, 2),
                              perf=round(100 * h["perf"], 1), since=h["first"].isoformat(),
                              devise="EUR" if h["t"] in EUR else "USD"))

    # Fenêtre des mouvements : les 12 derniers mois, ou depuis la création
    # si le portefeuille a moins de 13 mois (on ne coupe pas ses premiers achats).
    year_ago = ASOF - timedelta(days=365)
    from_creation = created >= ASOF - timedelta(days=395)
    window = created if from_creation else year_ago + timedelta(days=1)

    moves, constitution = [], []
    for t, ls in lots.items():
        nm, _ = META[t]
        tk = DISPLAY.get(t, t)
        dev = "EUR" if t in EUR else "USD"
        for i, l in enumerate(ls):
            if l["date"] < window:
                continue
            before = ls[:i]
            if l["side"] == "SELL":
                bb = [b for b in before if b["side"] == "BUY"]
                pru = sum(b["qty"] * b["px"] for b in bb) / sum(b["qty"] for b in bb)
                left = sum(x["qty"] * (1 if x["side"] == "BUY" else -1) for x in ls[: i + 1])
                moves.append(dict(date=l["date"].isoformat(),
                                  type="Sortie" if left <= 1e-9 else "Allègement",
                                  ticker=tk, name=nm, devise=dev, price=round(l["px"], 2),
                                  realized=round(100 * (l["px"] / pru - 1), 1),
                                  heldSince=bb[0]["date"].isoformat(),
                                  since=round(100 * (price[t] / l["px"] - 1), 1)))
            elif l["date"] == created:
                constitution.append((t, l))
            else:
                held = any(b["side"] == "BUY" for b in before)
                moves.append(dict(date=l["date"].isoformat(),
                                  type="Nouvelle tranche" if held else "Nouvelle ligne",
                                  ticker=tk, name=nm, devise=dev, price=round(l["px"], 2),
                                  since=round(100 * (price[t] / l["px"] - 1), 1)))
    if constitution:
        now = sum(l["qty"] * price[t] / fx(t) for t, l in constitution)
        paid = sum(l["qty"] * l["px"] / fx_at(t, l["date"]) for t, l in constitution)
        moves.append(dict(date=created.isoformat(), type="Constitution",
                          tickers=sorted(DISPLAY.get(t, t) for t, _ in constitution),
                          since=round(100 * (now / paid - 1), 1)))
    moves.sort(key=lambda m: (m["date"], m["type"] != "Constitution"), reverse=True)

    # Performance globale et rendement annualisé (TRI) en euros, effet de change compris, hors dividendes :
    # chaque achat et chaque vente sont convertis au cours BCE de leur date.
    flows = [(l["date"], (-1 if l["side"] == "BUY" else 1) * l["qty"] * l["px"] / fx_at(t, l["date"]))
             for t, ls in lots.items() for l in ls]
    flows.append((ASOF, tot))
    invested = -sum(a for _, a in flows if a < 0)
    returned = sum(a for _, a in flows if a > 0)
    age_days = (ASOF - created).days
    irr = round(100 * irr_of(flows), 1) if age_days >= 365 else None   # pas d'annualisation avant un an

    sectors = defaultdict(float)
    for p in positions:
        sectors[p["sector"]] += p["weight"]
    sectors = [dict(name=k, weight=round(v, 1)) for k, v in sorted(sectors.items(), key=lambda kv: -kv[1])]

    data = dict(slug=slug, name=name, asOf=ASOF.isoformat(), eurusd=EURUSD, created=created.isoformat(),
                windowStart=window.isoformat(), windowFromCreation=from_creation,
                lines=len(positions), globalPerf=round(100 * (returned / invested - 1), 1),
                multiple=round(returned / invested, 2), irr=irr,
                top10=round(sum(p["weight"] for p in positions[:10]), 1),
                positions=positions, moves=moves, sectors=sectors)
    return data, tot


def main():
    args = dict(a.split("=", 1) for a in sys.argv[1:])
    unknown = set(args) - {s for s, _ in PORTFOLIOS}
    if unknown or not args:
        sys.exit("Usage : python3 scripts/portefeuille.py "
                 + " ".join(f"{s}=fichier.csv" for s, _ in PORTFOLIOS))
    built = [build(s, n, args[s]) for s, n in PORTFOLIOS if s in args]
    # Part de chaque portefeuille dans le total des avoirs en bourse (liquidités comprises),
    # arrondie au dixième de façon que portefeuilles + liquidités fassent exactement 100 %.
    total = sum(v for _, v in built)
    exact = [v / total * (100 - CASH_PCT) * 10 for _, v in built]
    tenths = [int(x) for x in exact]
    target = round((100 - CASH_PCT) * 10)
    for i in sorted(range(len(exact)), key=lambda i: exact[i] - tenths[i], reverse=True)[: target - sum(tenths)]:
        tenths[i] += 1
    for (data, _), t in zip(built, tenths):
        data["shareOfAssets"] = t / 10

    out = ("// Suivi des portefeuilles 221 Bourse — fichier généré par scripts/portefeuille.py.\n"
           "// AUCUN montant, aucune quantité : uniquement des pourcentages, des prix unitaires et des dates.\n"
           f"export const CASH_PCT = {CASH_PCT};\n"
           "export const PORTEFEUILLES = "
           + json.dumps([d for d, _ in built], ensure_ascii=False, indent=1) + ";\n")
    open(OUT, "w").write(out)
    for data, _ in built:
        print(f"{data['name']:26} créé {data['created']}  {data['lines']:3} lignes  "
              f"{len(data['moves']):3} mouvements  part {data['shareOfAssets']:5} %  "
              f"perf {data['globalPerf']:7} %  TRI {data['irr']}")
    print(f"Liquidités : {CASH_PCT} %  — total : {round(sum(d['shareOfAssets'] for d, _ in built) + CASH_PCT, 1)} %")


if __name__ == "__main__":
    main()
